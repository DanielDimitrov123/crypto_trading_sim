import React from 'react';
import Button from './Button';

const TopBar: React.FC = () => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
      <div>
        <h5>User: Jane Doe</h5>
        <p>Balance: $10,000</p>
      </div>
      <Button>{'Reset'}</Button>
    </div>
  );
};

export default TopBar;