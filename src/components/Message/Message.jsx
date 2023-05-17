import "./Message.css";

export const Message = ({ message }) => {
  return (
    <div className="msg-box">
      <div>{message}</div>
    </div>
  );
};
