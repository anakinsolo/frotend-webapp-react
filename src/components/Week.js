const Week = ({ data }) => {
  return (
    <div className="report">
      <div>Week: {data.week},</div>
      <div>Total Invoices: {data.total_invoices}</div> <div>Total Invoice Changed: {data.total_invoices_changed},</div>
      <div>Total Invoiced Amount: {data.total_invoiced_amount}</div> <div>Total Invoiced Amount Changed: {data.total_invoiced_amount_changed},</div>
    </div>
  );
};

export default Week;