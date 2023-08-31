import "./Dashboard.scss";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

import { lineCharts, pieCharts } from "../../data/charts";
import logs from "../../data/logs";

import ChartCard from "../../components/ChartCard/ChartCard";
import LogTableItem from "../../components/LogTableItem/LogTableItem";
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
                    {logs.map((log) => {
                      return (
                        <LogTableItem
                          key={log.id}
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
