import React, { useEffect, useState } from "react";
import "../styles.css"; // Import the CSS file for styling
import CompositModal from "../../../Header/CompositModal/CompositModal";
import TeleWalletConnect from "../TeleWalletConnect";

interface HolderModalProps {
  holder: {
    imgUrl: string;
    title: string;
    profit: number;
    cost: number;
    period: number;
    profitPerHour: number;
    profitPerDay: number;
    interestPerDay: number;
  };
  onClose: () => void;
}

const HolderModal: React.FC<HolderModalProps> = ({ holder, onClose }) => {
  const [isOpenBalance, setIsOpenBalance] = useState<boolean>(false);
  const [isOpenTon, setIsOpenTon] = useState<boolean>(false);
  const closeCompositModal = () => setIsOpenBalance(!isOpenBalance);
  const closeTonModal = () => setIsOpenTon(!isOpenTon);

  const handleInterBalClick = () => {
    setIsOpenBalance(true);
  };

  const handleTonClick = () => {
    setIsOpenTon(true);
  };

  useEffect(() => {
    if (isOpenBalance) {
      setIsOpenTon(false);
    } else if (isOpenTon) {
      setIsOpenBalance(false);
    }
  }, [isOpenBalance, isOpenTon]);

  return (
    <div>
      {isOpenBalance || isOpenTon ? (
        <>
          if(isOpenBalance)
          {<CompositModal show={isOpenBalance} onClose={closeCompositModal} />}
          if (isOpenTon){" "}
          {<TeleWalletConnect show={isOpenTon} onClose={closeTonModal} />}
        </>
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
                  <img src={holder.imgUrl} alt={holder.title} />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold py-4">{holder.title}</h2>
                <p className="text-slate-300 text-sm">
                  Upgrade for those lucky with GWEI prices.
                </p>
              </div>
            </div>

            <div className="mine-modal-details ">
              <div>
                <span className="text-slate-300 text-sm">Upgrade period:</span>
                <span className="text-lg">{holder.period} days</span>
              </div>
              <div>
                <span className="text-slate-300 text-sm">You receive:</span>
                <div className="flex text-sm font-semibold">
                  <img
                    src="https://tap-tether.org/img/coin.svg"
                    alt="Blue Coin"
                  />
                  <span>{holder.profit}</span>
                </div>
              </div>
              <div>
                <span className="text-slate-300 text-sm">Profit per hour:</span>
                <div className="flex text-sm font-semibold">
                  <span>+ </span>
                  <img
                    src="https://tap-tether.org/img/coin.svg"
                    alt="Blue Coin"
                  />
                  <span>{holder.profitPerHour}</span>
                </div>
              </div>
              <div>
                <span className="text-slate-300 text-sm">Profit per day:</span>
                <div className="flex text-sm font-semibold">
                  <span>+ </span>
                  <img
                    src="https://tap-tether.org/img/coin.svg"
                    alt="Blue Coin"
                  />
                  <span>{holder.profitPerDay}</span>
                </div>
              </div>
              <div>
                <span className="text-slate-300 text-sm">
                  Interest per day:
                </span>
                <span className="text-sm font-semibold">
                  {holder.interestPerDay}%
                </span>
              </div>
              <div>
                <span className="text-slate-300 text-sm">Deposit:</span>
                <span className="text-sm font-semibold">Refundable</span>
              </div>
            </div>
            <div className="mine-modal-buttons">
              <button
                className="mine-modal-buy-button"
                onClick={handleTonClick}
              >
                BUY ({holder.cost} USDT) Ton
              </button>
              <button
                className="mine-modal-buy-button"
                onClick={handleInterBalClick}
              >
                BUY ({holder.cost} USDT) Internal balance
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HolderModal;
