import React from "react";
import FreeChat from "../../assets/freechat.png";
import "./styles.css";

interface HeaderProps {
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="user-icon">
          <img src={FreeChat} alt="Free Chat" />
        </div>
        <span>Free Chat</span>
      </div>
      <button className="deposit-button" onClick={openModal}>
        Deposit / Withdraw
      </button>
    </header>
  );
};

export default Header;
