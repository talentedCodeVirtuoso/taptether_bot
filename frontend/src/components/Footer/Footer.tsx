import { useNavigate } from "react-router-dom";
import "./styles.css";
import React, { useState } from "react";

interface FooterProps {
  activeTab: "home" | "mine" | "referrals" | "faq";
}

const Footer: React.FC<FooterProps> = ({ activeTab }) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const navigate = useNavigate();

  const handleClick = (tab: "home" | "mine" | "referrals" | "faq") => {
    setCurrentTab(tab);
    navigate(`/${tab}`);
  };
  return (
    <div className="footer">
      <div className="footer-area">
        <div
          className={`tab-area ${
            currentTab === "home" ? "active-home" : "inactive-home"
          }`}
          onClick={() => handleClick("home")}
        >
          <img src="https://crazybhai.com/home.svg" alt="Home" />
          <div>Home</div>
        </div>
        <div
          className={`tab-area ${
            currentTab === "mine" ? "active-mine" : "inactive-mine"
          }`}
          onClick={() => handleClick("mine")}
        >
          <img src="https://crazybhai.com/mine.svg" alt="Mine" />
          <div>Mine</div>
        </div>
        <div
          className={`tab-area ${
            currentTab === "referrals"
              ? "active-referrals"
              : "inactive-referrals"
          }`}
          onClick={() => handleClick("referrals")}
        >
          <img src="https://crazybhai.com/refer.svg" alt="Referrals" />
          <div>Referrals</div>
        </div>
        <div
          className={`tab-area ${
            currentTab === "faq" ? "active-faq" : "inactive-faq"
          }`}
          onClick={() => handleClick("faq")}
        >
          <img src="https://crazybhai.com/faq.svg" alt="FAQ" />
          <div>FAQ</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
