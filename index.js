const Notification = (props) => {
  const { msg, msgClassName, imgUrl } = props;
  return (
    <div className={msgClassName}>
      <img src={imgUrl} className="image" />
      <p>{msg}</p>
    </div>
  );
};

const element = (
  <div className="home">
    <h1 className="heading">Notifications</h1>
    <div className="bars-container">
      <Notification
        msg="Information Message"
        msgClassName="information-bar"
        imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />

      <Notification
        msg="Success Message"
        msgClassName="success-bar"
        imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />

      <Notification
        msg="Warning Message"
        msgClassName="warning-bar"
        imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />

      <Notification
        msg="Error Message"
        msgClassName="error-bar"
        imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
