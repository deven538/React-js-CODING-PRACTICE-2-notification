function Notification(props) {
  // Write your code here.
  const { className, text, imageLink } = props;
  return (
    <div className={`${className}`}>
      <img src={`${imageLink}`} className="image" />
      <p className="para">{text}</p>
    </div>
  );
}

const element = (
  // Write your code here.
  <div className="container">
    <h1 className="head">Notifications</h1>
    <div className="notifications-container">
      <Notification
        className="information"
        text="Information Message"
        imageLink="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />

      <Notification
        className="Success"
        text="Success Message"
        imageLink="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />

      <Notification
        className="Warning"
        text="Information Message"
        imageLink="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />

      <Notification
        className="Error"
        text="Information Message"
        imageLink="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
