import "./Dashboard.scss";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

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
      })
      .catch((err) => console.warn(err));
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
              <CardBody className="logs-card">
                <div className="logs-tb-head">
                  <div className="logs-tb-head__title">
                    <h4 className="logs-tb-head__title-name node">NODE</h4>
                    <h4 className="logs-tb-head__title-name msg-type">
                      MESSAGE TYPES
                    </h4>
                    <h4 className="logs-tb-head__title-name description">
                      DESCRIPTION
                    </h4>
                    <h4 className="logs-tb-head__title-name zone">ZONE</h4>
                    <h4 className="logs-tb-head__title-name action">ACTIONS</h4>
                  </div>
                </div>

                {logs.map((log) => {
                  return (
                    <LogTableItem
                      key={log._id}
                      id={log._id}
                      node={log.node}
                      badge={log.badge}
                      description={log.description}
                      zone={log.zone}
                    />
                  );
                })}
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
