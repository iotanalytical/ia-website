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

import { LineChart } from "../../components/LineChart/LineChart";
import { PieChart } from "../../components/PieChart/PieChart";

const Dashboard = () => {
  return (
    <>
      <main className="content">
        <Row>
          <Col lg="4">
            <Card className="card-chart mb-3">
              <CardHeader>
                <h5 className="card-category">Consumption per Month</h5>
                <CardTitle tag="h3">Electricity</CardTitle>
              </CardHeader>
              <CardBody className = "my-auto">
                <LineChart />
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart mb-3">
              <CardHeader>
                <h5 className="card-category">Consumption per Month</h5>
                <CardTitle tag="h3">Water</CardTitle>
              </CardHeader>
              <CardBody>
                <LineChart />
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart mb-3">
              <CardHeader>
                <h5 className="card-category">Consumption per Month</h5>
                <CardTitle tag="h3">Gas</CardTitle>
              </CardHeader>
              <CardBody>
                <LineChart />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart mb-3">
              <CardHeader>
                <h5 className="card-category">Consumption</h5>
                <CardTitle tag="h3">
                  <i className="fa fa-bolt text-warning fa-4x" /> Electricity
                </CardTitle>
              </CardHeader>
              <CardBody>
                <PieChart />
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart mb-3">
              <CardHeader>
                <h5 className="card-category">Consumption</h5>
                <CardTitle tag="h3">
                  <i className="fa fa-tint text-primary fa-4x" /> Water
                </CardTitle>
              </CardHeader>
              <CardBody>
                <PieChart />
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart mb-3">
              <CardHeader>
                <h5 className="card-category">Consumption</h5>
                <CardTitle tag="h3">
                  <i className="fa fa-fire text-danger fa-4x" /> Gas
                </CardTitle>
              </CardHeader>
              <CardBody>
                <PieChart />
              </CardBody>
            </Card>
          </Col>
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
      </main>
    </>
  );
};

export default Dashboard;
