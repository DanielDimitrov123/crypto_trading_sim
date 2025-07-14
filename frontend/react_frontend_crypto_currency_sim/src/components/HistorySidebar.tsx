import React from 'react';

const HistorySidebar: React.FC = () => {
  const history = [
    "Bought 0.5 BTC",
    "Sold 1 ETH",
    "Bought 100 XRP",
    // Add more for scrolling
  ];

  return (
    <div className="border p-3 rounded bg-white" style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <h6>Transaction History</h6>
      <ul className="list-unstyled">
        {history.map((item, idx) => (
          <li key={idx} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistorySidebar;
