import { useState } from "react";
import "./styles.css";
import Holders from "./Holders/Holders";
import Tappers from "./Tappers/Tappers";

const UpgradeProfit = () => {
  const [modalElement, setModalElement] = useState<string>("deposit");

  const handleElementClick = (tab: "holders" | "tappers") => {
    setModalElement(tab);
  };
  return (
    <div className="upgrade-profit">
      <div>Upgrade Profit</div>
      <div className="upgrade-profit-tabs">
        <div
          onClick={() => handleElementClick("holders")}
          className={`navbar-area ${
            modalElement === "holders" ? "active-holders" : "inactive-holders"
          }`}
        >
          Holders
        </div>
        <div
          onClick={() => handleElementClick("tappers")}
          className={`navbar-area ${
            modalElement === "tappers" ? "active-tappers" : "inactive-tappers"
          }`}
        >
          Tappers
        </div>
      </div>
      {modalElement === "holders" && (
        <div className="bg-gray-100 border-gray-100 rounded p-2">
          These plans allow you to earn hourly profits only in USDT: you will
          receive a 78% return and your deposit back after 15 days.
        </div>
      )}

      {modalElement === "tappers" && (
        <div className="bg-gray-100 border-gray-100 rounded p-2">
          These plans allow you to earn USDT and tUSD hourly and through taps,
          with profitability ranging from 190% to 290% over 15 days.
        </div>
      )}

      {modalElement === "holders" && <Holders />}
      {modalElement === "tappers" && <Tappers />}
    </div>
  );
};

export default UpgradeProfit;
