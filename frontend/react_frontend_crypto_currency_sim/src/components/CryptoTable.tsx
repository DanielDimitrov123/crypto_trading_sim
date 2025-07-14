import React from 'react';
import Table from 'bootstrap';

const CryptoTable: React.FC = () => {
  const sampleData = [
    { name: 'Bitcoin', symbol: 'BTC', price: 30000, holdings: 0.5, logo: '₿' },
    { name: 'Ethereum', symbol: 'ETH', price: 2000, holdings: 2, logo: 'Ξ' },
    // Add up to 20...
  ];

  return (
    <div className="mt-3">
      <h5>Top 20 Cryptocurrencies</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Price (USD)</th>
            <th>Your Holdings</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((coin, idx) => (
            <tr key={idx}>
              <td>{coin.logo}</td>
              <td>{coin.name} ({coin.symbol})</td>
              <td>${coin.price.toLocaleString()}</td>
              <td>{coin.holdings} {coin.symbol}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CryptoTable;