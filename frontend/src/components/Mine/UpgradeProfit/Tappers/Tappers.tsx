// import React, { useEffect, useState } from "react";
// import axios from "axios";

import { useState } from "react";
import TapperModal from "./TapperModal";

interface Tapper {
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
}

const Tappers = () => {
  const tappers: Tapper[] = [
    {
      id: 1,
      imgUrl: "https://crazybhai.com/home.svg",
      title: "Airdroplandia",
      blueProfit: 19,
      goldProfit: 190,
      cost: 10,
      period: 15,
      blueProfitPerHour: 0.026,
      goldProfitPerHour: 0.26,
      blueProfitPerClick: 0.000012,
      goldProfitPerClick: 0.000117,
    },
    {
      id: 2,
      imgUrl: "https://crazybhai.com/mine.svg",
      title: "Memelandia",
      blueProfit: 47.5,
      goldProfit: 475,
      cost: 25,
      period: 15,
      blueProfitPerHour: 0.066,
      goldProfitPerHour: 0.66,
      blueProfitPerClick: 0.000029,
      goldProfitPerClick: 0.000293,
    },
  ];

  // const [tappers, setTappers] = useState<Tapper[]>([]);
  const [selectedTapper, setSelectedTapper] = useState<Tapper | null>(null);

  // useEffect(() => {
  //   const fetchTappers = async () => {
  //     try {
  //       const response = await axios.get("/api/tappers"); // Adjust the URL based on your backend endpoint
  //       setTappers(response.data);
  //     } catch (error) {
  //       console.error("Error fetching tappers:", error);
  //     }
  //   };

  //   fetchTappers();
  // }, []);

  const openModal = (tapper: Tapper) => {
    setSelectedTapper(tapper);
  };

  const closeModal = () => {
    setSelectedTapper(null);
  };
  return (
    <div className="holders-list my-2">
      {tappers.map((tapper) => (
        <div key={tapper.id} className="holder-item">
          <img src={tapper.imgUrl} alt={tapper.title} className="holder-icon" />
          <div className="holder-details">
            <div className="holder-title">{tapper.title}</div>
            <div className="holder-profit">
              <div className="flex">
                Profit:
                <img
                  src="https://tap-tether.org/img/coin.svg"
                  alt="Blue Coin"
                  className="w-4"
                />
                {tapper.blueProfit}
              </div>
            </div>
            <div className="holder-profit">
              <div className="flex items-center">
                Profit:
                <img
                  src="https://crazybhai.com/coin2.png"
                  alt="Gold Coin"
                  className="w-5 h-5"
                />
                {tapper.goldProfit}
              </div>
            </div>
          </div>
          <button
            className="holder-buy-button flex items-center"
            onClick={() => openModal(tapper)}
          >
            <div>Buy - {tapper.cost}</div>{" "}
            <img
              src="https://tap-tether.org/img/coin.svg"
              alt="Blue Coin"
              className="w-4"
            />
          </button>
        </div>
      ))}
      {selectedTapper && (
        <TapperModal tapper={selectedTapper} onClose={closeModal} />
      )}
    </div>
  );
};

export default Tappers;
