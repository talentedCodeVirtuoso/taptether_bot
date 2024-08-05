import React from "react";
import "./styles.css";

interface ProfitSectionProps {
  blueCoinValue: number;
  goldCoinValue: number;
  blueCoinIncreaseValue: number;
  goldCoinIncreaseValue: number;
}

const ProfitSection: React.FC<ProfitSectionProps> = ({
  blueCoinValue,
  goldCoinValue,
  blueCoinIncreaseValue,
  goldCoinIncreaseValue,
}) => {
  return (
    <div className="profit-section">
      <div className="profit-area-section">
        <div className="profit-coin-section">
          <div className="profit-font-color">Profit per click</div>
          <div className="coin-area">
            <img src="https://tap-tether.org/img/coin.svg" alt="Blue Coin" />
            <p>+{blueCoinIncreaseValue.toFixed(6)}</p>
          </div>
          <div className="coin-area">
            <img src="https://crazybhai.com/coin2.png" alt="Gold Coin" />
            <p>+{goldCoinIncreaseValue.toFixed(6)}</p>
          </div>
        </div>
        <div className="profit-area-section">
          <div className="profit-coin-section">
            <div className="profit-font-color">Profit per hour</div>
            <div className="coin-area">
              <img src="https://tap-tether.org/img/coin.svg" alt="Blue Coin" />
              <p>+0</p>
            </div>
            <div className="coin-area">
              <img src="https://crazybhai.com/coin2.png" alt="Gold Coin" />
              <p>+0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="main-section-blue-coin-area">
        <img src="https://tap-tether.org/img/coin.svg" alt="Blue Coin" />
        <p>+{blueCoinValue.toFixed(6)}</p>
      </div>
      <div className="main-section-gold-coin-area">
        <img src="https://crazybhai.com/coin2.png" alt="Gold Coin" />
        <p>+{goldCoinValue.toFixed(6)}</p>
      </div>
    </div>
  );
};

export default ProfitSection;
