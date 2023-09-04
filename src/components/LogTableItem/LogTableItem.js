import "./LogTableItem.scss";

import chevronRight from "../../assets/icons/chevron_right.svg";
import deleteIcon from "../../assets/icons/delete_outline.svg";

import { Badge } from "reactstrap";

const LogTableItem = ({ id, node, badge, description, zone }) => {
  const handleDeleteLog = (node, id) => {};

  return (
    <section className="single-log">
      <article className="single-log__content">
        <div className="single-log__info">
          <div className="single-log__node">
            <h4>NODE</h4>

            <span className="single-log__title">{node}</span>
            <img
              className="single-log__chevron"
              src={chevronRight}
              alt="chevron right"
            />
          </div>
          <div className="single-log__msgtype">
            <h4>MESSAGE TYPES</h4>
            <h5>
              <Badge color={badge.color} pill>
                {badge.text}
              </Badge>
            </h5>
          </div>
        </div>

        <div className="single-log__descrip">
          <div className="single-log__descrip-name">
            <h4>DESCRIPTION</h4>
            <p>{description}</p>
          </div>
          <div className="single-log__descrip-info">
            <h4>ZONE</h4>
            <p>{zone}</p>
          </div>
        </div>
      </article>

      <div className="single-log__actions">
        <img
          onClick={() => handleDeleteLog(node, id)}
          className="single-log__delete"
          src={deleteIcon}
          alt="Delete icon"
        />
      </div>
    </section>
  );
};

export default LogTableItem;
