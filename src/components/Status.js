const Status = ({ status }) => {
  return (
    <div className="report">
      <div>Status: {status.description}</div>
      <div>Count: {status.count}</div>
    </div>
  );
};

export default Status;