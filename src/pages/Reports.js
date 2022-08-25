import { useState } from 'react';
import Week from '../components/Week';
import OrderService from '../services/OrderService';

const Reports = () => {
  const [reports, setReports] = useState([]);

  const getReports = async (event) => {
    event.preventDefault();
    setReports([]);
    const reports = await OrderService.get('invoices');
    setReports(reports);
  };

  return (
    <div>
      <input type="submit" value="Get Reports" onClick={getReports}/>
      {reports.map(week => <Week key={week.week} data={week}/>)}
    </div>
  );
};

export default Reports;