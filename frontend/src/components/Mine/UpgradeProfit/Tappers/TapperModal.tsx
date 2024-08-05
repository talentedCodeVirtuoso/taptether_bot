import React, { useState } from "react";
import "../styles.css"; // Import the CSS file for styling
import CompositModal from "../../../Header/CompositModal/CompositModal";

interface TapperModalProps {
  tapper: {
    id: number;
    imgUrl: string;
    title: string;
    blueProfit: number;
    goldProfit: number;
    cost: number;
    period: number;
    blueProfitPerHour: number;
    goldProfitPerHour: number;
    blueProfitPerClick: number;
    goldProfitPerClick: number;
  };
  onClose: () => void;
}

const TapperModal: React.FC<TapperModalProps> = ({ tapper, onClose }) => {
  const [isOpenBalance, setIsOpenBalance] = useState<boolean>(false);
  // const openCompositModal = () => setIsOpenBalance(true)
  const closeCompositModal = () => setIsOpenBalance(!isOpenBalance);
  const handleInterBalClick = () => {
    setIsOpenBalance(true);
  };

  return (
    <div>
      {isOpenBalance ? (
        <CompositModal show={isOpenBalance} onClose={closeCompositModal} />
      ) : (
        <div className="mine-modal-overlay">
          <div className="mine-modal-container">
            <div className="bg-gray-100 border-gray-100 rounded-lg p-2">
              <div className="mine-modal-close-button-area">
                <button className="mine-modal-close-button" onClick={onClose}>
                  ×
                </button>
              </div>

              <div className="mine-modal-icon">
                <div className="w-12 h-12 bg-white rounded-md flex justify-center items-center">
                  <img src={tapper.imgUrl} alt={tapper.title} />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold py-4">{tapper.title}</h2>
                <p className="text-slate-300 text-sm">
                  A generous upgrade for all crypto enthusiastics!
                </p>
              </div>
            </div>

            <div className="mine-modal-details ">
              <div>
                <span className="text-slate-300 text-sm">Upgrade period:</span>
                <span className="text-lg">{tapper.period} days</span>
              </div>
              <div>
                <span className="text-slate-300 text-sm">You receive:</span>
                <div className="text-sm font-semibold flex gap-1 text-center items-center">
                  <div className="flex items-center">
                    <img
                      src="https://tap-tether.org/img/coin.svg"
                      alt="Blue Coin"
                      className="w-6"
                    />
                    <span>{tapper.blueProfit}</span>
                  </div>
                  <div>/</div>
                  <div className="flex items-center">
                    <img
                      src="https://crazybhai.com/coin2.png"
                      alt="Gold Coin"
                      className="w-7 h-7"
                    />
                    <span>{tapper.goldProfit}</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-slate-300 text-sm">Profit per hour:</span>
                <div className="text-sm font-semibold flex gap-1 text-center items-center">
                  <div className="flex text-sm font-semibold items-center">
                    <span>+ </span>
                    <img
                      src="https://tap-tether.org/img/coin.svg"
                      alt="Blue Coin"
                      className="w-6"
                    />
                    <span>{tapper.blueProfitPerHour}</span>
                  </div>
                  <div>/</div>
                  <div className="flex text-sm font-semibold items-center">
                    <img
                      src="https://crazybhai.com/coin2.png"
                      alt="Gold Coin"
                      className="w-7 h-7"
                    />
                    <span>{tapper.blueProfitPerHour}</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-slate-300 text-sm">Profit per day:</span>
                <div className="text-sm font-semibold flex gap-1 text-center items-center">
                  <div className="flex text-sm font-semibold items-center">
                    <span>+ </span>
                    <img
                      src="https://tap-tether.org/img/coin.svg"
                      alt="Blue Coin"
                      className="w-6"
                    />
                    <span>{tapper.blueProfitPerClick}</span>
                  </div>
                  <div>/</div>
                  <div className="flex text-sm font-semibold items-center">
                    <img
                      src="https://crazybhai.com/coin2.png"
                      alt="Gold Coin"
                      className="w-7 h-7"
                    />
                    <span>{tapper.goldProfitPerClick}</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-slate-300 text-sm">Deposit:</span>
                <span className="text-sm font-semibold">Refundable</span>
              </div>
            </div>
            <div className="mine-modal-buttons">
              <button className="mine-modal-buy-button">
                BUY ({tapper.cost} USDT) Ton
              </button>
              <button
                className="mine-modal-buy-button"
                onClick={handleInterBalClick}
              >
                BUY ({tapper.cost} USDT) Internal balance
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TapperModal;
