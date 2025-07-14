import React from 'react';
import TopBar from './components/TopBar';
import CryptoTable from './components/CryptoTable';
import BuySellPanel from './components/BuySellPanel';
import HistorySidebar from './components/HistorySidebar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container-fluid p-3">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-9 d-flex flex-column gap-3">
          <TopBar />
          <CryptoTable />
          <BuySellPanel />
        </div>

        {/* Right Section */}
        <div className="col-md-3">
          <HistorySidebar />
        </div>
      </div>
    </div>
  );
};

export default App;
