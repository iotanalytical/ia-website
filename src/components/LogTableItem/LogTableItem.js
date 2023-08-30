import { Badge } from "reactstrap";

const LogTableItem = ({ node, badge, description, zone }) => {
  return (
    <tr>
      <td>{node}</td>
      <td className="text-center">
        <h5>
          <Badge color={badge.color} pill>
            {badge.text}
          </Badge>
        </h5>
      </td>
      <td className="text-center">{description}</td>
      <td className="text-center">{zone}</td>
    </tr>
  );
};

export default LogTableItem;
