import "./Dashboard.scss";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

import NavbarDashboard from "../../components/NavbarDashboard/NavbarDashboard";
import ChartCard from "../../components/ChartCard/ChartCard";
import LogTableItem from "../../components/LogTableItem/LogTableItem";
import FooterDashboard from "../../components/FooterDashboard/FooterDashboard";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chartsData, setChartsData] = useState([]);
  const [logs, setLogs] = useState([]);

  const { user } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5050/charts/${user}`)
      .then((res) => {
        setChartsData(res.data);
        return axios.get(`http://localhost:5050/logs/${user}`);
      })
      .then((res) => {
        setLogs(res.data);
        setIsLoading(false);
      }).catch(err => console.warn(err));
  }, [user]);

  if (isLoading) return <h1>Loading</h1>;

  return (
    <>
    <NavbarDashboard userName={user} />
      <main className="content">
        <Row>
          {chartsData.map((chart) => {
            return (
              <ChartCard
                key={chart._id}
                category={chart.category}
                title={chart.title}
                chartType={chart.type}
                chartData={chart.data}
              />
            );
          })}
        </Row>
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader className="py-3">
                <CardTitle tag="h3" className="mb-1">
                  <b>Logs</b>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-white">
                    <tr>
                      <th>Node</th>
                      <th className="text-center">Message Types</th>
                      <th className="text-center">Description</th>
                      <th className="text-center">Zone</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    {logs.map((log) => {
                      return (
                        <LogTableItem
                          key={log._id}
                          node={log.node}
                          badge={log.badge}
                          description={log.description}
                          zone={log.zone}
                        />
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <FooterDashboard />
      </main>
    </>
  );
};

export default Dashboard;
