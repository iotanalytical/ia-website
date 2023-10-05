import "./Dashboard.scss";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import NavbarDashboard from "../../components/NavbarDashboard/NavbarDashboard";
import ChartCard from "../../components/ChartCard/ChartCard";
import LogTableItem from "../../components/LogTableItem/LogTableItem";
import Modal from "../../components/Modal/Modal";
import FooterDashboard from "../../components/FooterDashboard/FooterDashboard";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chartsData, setChartsData] = useState([]);
  const [logs, setLogs] = useState([]);

  const [isShowing, setIsShowing] = useState(false);
  const [logItem, setLogItem] = useState({});
  const [deleteItemSuccess, SetDeleteItemSuccess] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;

  const { user } = useParams();

  function toggle(node, id) {
    setIsShowing(!isShowing);
    setLogItem({
      id,
      node,
    });
  }

  useEffect(() => {
    axios
      .get(`${API_URL}/charts/${user}`)
      .then((res) => {
        setChartsData(res.data);
        return axios.get(`${API_URL}/logs/${user}`);
      })
      .then((res) => {
        setLogs(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.warn(err));
  }, [user, deleteItemSuccess, API_URL]);

  if (isLoading) return <h1>Loading</h1>;

  return (
    <>
      {isShowing && (
        <Modal
          handleClose={toggle}
          itemName={logItem.node}
          show={isShowing}
          deleteId={logItem.id}
          deleteItemSuccess={SetDeleteItemSuccess}
        />
      )}
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
                      modalToggle={toggle}
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
