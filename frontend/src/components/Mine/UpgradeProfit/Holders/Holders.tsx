// import React, { useEffect, useState } from "react";
// import axios from "axios";
import "../styles.css"; // Import the CSS file for styling
import HolderModal from "./HolderModal";
import { useState } from "react";

interface Holder {
  id: number;
  imgUrl: string;
  title: string;
  profit: number;
  cost: number;
  period: number;
  profitPerHour: number;
  profitPerDay: number;
  interestPerDay: number;
}

const Holders = () => {
  const holders: Holder[] = [
    {
      id: 1,
      imgUrl: "https://crazybhai.com/home.svg",
      title: "Gas Fee Master",
      profit: 17.8,
      cost: 8,
      period: 15,
      profitPerHour: 0.022,
      profitPerDay: 0.52,
      interestPerDay: 5.2,
    },
    {
      id: 2,
      imgUrl: "https://crazybhai.com/mine.svg",
      title: "Smart Contract Auditor",
      profit: 44.5,
      cost: 20,
      period: 15,
      profitPerHour: 0.054,
      profitPerDay: 1.3,
      interestPerDay: 5.2,
    },
  ];

  // const [holders, setHolders] = useState<Holder[]>([]);
  const [selectedHolder, setSelectedHolder] = useState<Holder | null>(null);

  // useEffect(() => {
  //   const fetchHolders = async () => {
  //     try {
  //       const response = await axios.get("/api/holders"); // Adjust the URL based on your backend endpoint
  //       setHolders(response.data);
  //     } catch (error) {
  //       console.error("Error fetching holders:", error);
  //     }
  //   };

  //   fetchHolders();
  // }, []);

  const openModal = (holder: Holder) => {
    setSelectedHolder(holder);
  };

  const closeModal = () => {
    setSelectedHolder(null);
  };

  return (
    <div className="holders-list my-2">
      {holders.map((holder) => (
        <div key={holder.id} className="holder-item">
          <img src={holder.imgUrl} alt={holder.title} className="holder-icon" />
          <div className="holder-details">
            <div className="holder-title">{holder.title}</div>
            <div className="holder-profit flex items-center">
              Profit:
              <img
                src="https://tap-tether.org/img/coin.svg"
                alt="Blue Coin"
                className="w-4"
              />
              {holder.profit}
            </div>
          </div>
          <button
            className="holder-buy-button flex items-center"
            onClick={() => openModal(holder)}
          >
            Buy - {holder.cost}{" "}
            <img
              src="https://tap-tether.org/img/coin.svg"
              alt="Blue Coin"
              className="w-4"
            />
          </button>
        </div>
      ))}
      {selectedHolder && (
        <HolderModal holder={selectedHolder} onClose={closeModal} />
      )}
    </div>
  );
};

export default Holders;
