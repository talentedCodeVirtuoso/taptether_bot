import React from "react";

interface TeleWalletProps {
  show: boolean;
  onClose: () => void;
}

const TeleWalletConnect: React.FC<TeleWalletProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="mine-modal-overlay">
      <div className="bg-white flex flex-col justify-center items-center">
        <div className="mine-modal-container bg-slate-200">
          <div>
            <div className="flex justify-between items-center">
              <div className="bg-gray-100 border-gray-100 w-7 h-7 rounded-full p-2">
                <img src="https://tap-tether.org/img/flash.svg" />
              </div>
              <div className="bg-gray-100 border-gray-100 w-7 h-7 rounded-full p-2 flex justify-center items-center ">
                <button className=" text-justify" onClick={onClose}>
                  x
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-xl font-semibold py-4 text-center">
                Connect to your Wallet
              </div>
              <div className="text-slate-400 text-sm text-center">
                Open Wallet in Telegram or select your wallet to connect
              </div>
            </div>
            <div className="mine-modal-buttons w-full">
              <button className="mine-modal-buy-button w-full">
                Open Wallet in Telegram
              </button>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div>Ton Connect</div>
        </div>
      </div>
    </div>
  );
};

export default TeleWalletConnect;
