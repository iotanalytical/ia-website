import Alert from "react-bootstrap/Alert";

const AlertBox = ({ size, variant, icon, text }) => {
  const iconClass = `fa fa-${icon}`;
  return (
    <Alert className={size} variant={variant}>
      <i className={iconClass}></i>
      <span className="contact__sentmsg">{text}</span>
    </Alert>
  );
};

export default AlertBox;
