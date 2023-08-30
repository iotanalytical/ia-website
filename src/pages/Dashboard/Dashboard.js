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

import {
  elecLineChart,
  waterLineChart,
  gasLineChart,
  elecPieChart,
  waterPieChart,
  gasPieChart,
} from "../../data/charts";

import ChartCard from "../../components/ChartCard/ChartCard";
import FooterDashboard from "../../components/FooterDashboard/FooterDashboard";

const Dashboard = () => {
  return (
    <>
      <main className="content">
        <Row>
          <ChartCard
            category={elecLineChart.category}
            title={elecLineChart.title}
            chartType={elecLineChart.type}
            chartData={elecLineChart.data}
          />
          <ChartCard
            category={waterLineChart.category}
            title={waterLineChart.title}
            chartType={waterLineChart.type}
            chartData={waterLineChart.data}
          />
          <ChartCard
            category={gasLineChart.category}
            title={gasLineChart.title}
            chartType={gasLineChart.type}
            chartData={gasLineChart.data}
          />
        </Row>
        <Row>
          <ChartCard
            category={elecPieChart.category}
            title={elecPieChart.title}
            chartType={elecPieChart.type}
            chartData={elecPieChart.data}
          />
          <ChartCard
            category={waterPieChart.category}
            title={waterPieChart.title}
            chartType={waterPieChart.type}
            chartData={waterPieChart.data}
          />
          <ChartCard
            category={gasPieChart.category}
            title={gasPieChart.title}
            chartType={gasPieChart.type}
            chartData={gasPieChart.data}
          />
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
                        <h3>
                          <span className="badge badge-pill badge-danger">
                            Error
                          </span>
                        </h3>
                      </td>
                      <td className="text-center">Crash</td>
                      <td className="text-center">Dining room</td>
                    </tr>
                    <tr>
                      <td>Wall Mount Lighting</td>
                      <td className="text-center">
                        <h3>
                          <span className="badge badge-pill badge-warning">
                            Warning
                          </span>
                        </h3>
                      </td>
                      <td className="text-center">Warn</td>
                      <td className="text-center">Hall</td>
                    </tr>
                    <tr>
                      <td>AC</td>
                      <td className="text-center">
                        <h3>
                          <span className="badge badge-pill badge-info">
                            Info
                          </span>
                        </h3>
                      </td>
                      <td className="text-center">Replacement needed</td>
                      <td className="text-center">TV Room</td>
                    </tr>
                    <tr>
                      <td>Smart Plug</td>
                      <td className="text-center">
                        <h3>
                          <span className="badge badge-pill badge-danger">
                            Error
                          </span>
                        </h3>
                      </td>
                      <td className="text-center">Disconnect</td>
                      <td className="text-center">Libary</td>
                    </tr>
                    <tr>
                      <td>Curtain</td>
                      <td className="text-center">
                        <h3>
                          <span className="badge badge-pill badge-info">
                            Info
                          </span>
                        </h3>
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
