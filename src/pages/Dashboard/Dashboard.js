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
  Badge,
} from "reactstrap";

import { lineCharts, pieCharts } from "../../data/charts";

import ChartCard from "../../components/ChartCard/ChartCard";
import FooterDashboard from "../../components/FooterDashboard/FooterDashboard";

const Dashboard = () => {
  return (
    <>
      <main className="content">
        <Row>
          {lineCharts.map((chart) => {
            return (
              <ChartCard
                key={chart.id}
                category={chart.category}
                title={chart.title}
                chartType={chart.type}
                chartData={chart.data}
              />
            );
          })}
        </Row>
        <Row>
          {pieCharts.map((chart) => {
            return (
              <ChartCard
                key={chart.id}
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
                    <tr>
                      <td>Lighting</td>
                      <td className="text-center">
                        <h5>
                          <Badge color="danger" pill>
                            Error
                          </Badge>
                        </h5>
                      </td>
                      <td className="text-center">Crash</td>
                      <td className="text-center">Dining room</td>
                    </tr>
                    <tr>
                      <td>Wall Mount Lighting</td>
                      <td className="text-center">
                        <h5>
                          <Badge color="warning" pill>
                            Warning
                          </Badge>
                        </h5>
                      </td>
                      <td className="text-center">Warn</td>
                      <td className="text-center">Hall</td>
                    </tr>
                    <tr>
                      <td>AC</td>
                      <td className="text-center">
                        <h5>
                          <Badge color="info" pill>
                            Info
                          </Badge>
                        </h5>
                      </td>
                      <td className="text-center">Replacement needed</td>
                      <td className="text-center">TV Room</td>
                    </tr>
                    <tr>
                      <td>Smart Plug</td>
                      <td className="text-center">
                        <h5>
                          <Badge color="danger" pill>
                            Error
                          </Badge>
                        </h5>
                      </td>
                      <td className="text-center">Disconnect</td>
                      <td className="text-center">Libary</td>
                    </tr>
                    <tr>
                      <td>Curtain</td>
                      <td className="text-center">
                        <h5>
                          <Badge color="info" pill>
                            Info
                          </Badge>
                        </h5>
                      </td>
                      <td className="text-center">Connect</td>
                      <td className="text-center">Libary</td>
                    </tr>
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
