import "./ChartCard.scss";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Col } from "reactstrap";

import { LineChart } from "../LineChart/LineChart";
import { PieChart } from "../PieChart/PieChart";

const ChartCard = ({ category, title, chartType, chartData }) => {
  return (
    <Col lg="4">
      <Card className="card-chart mb-3">
        <CardHeader>
          <h5 className="card-category">{category}</h5>
          <CardTitle tag="h3">{title && title}</CardTitle>
        </CardHeader>
        <CardBody className="my-auto">
          {chartType === "line" && <LineChart chartData={chartData} />}
          {chartType === "pie" && <PieChart chartData={chartData} />}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ChartCard;
