import React, { useState } from "react";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import ProfitSection from "../ProfitSection/ProfitSection";
import CompositModal from "../Header/CompositModal/CompositModal";
interface HomSectionProps {
  blueCoinValue: number;
  goldCoinValue: number;
  blueCoinIncreaseValue: number;
  goldCoinIncreaseValue: number;
  onChangeIncreaseValue: (
    blueCoinIncrease: number,
    goldCoinIncrease: number
  ) => void;
}
const Home: React.FC<HomSectionProps> = ({
  blueCoinValue,
  goldCoinValue,
  blueCoinIncreaseValue,
  goldCoinIncreaseValue,
  onChangeIncreaseValue,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="flex-1 overflow-y-auto pb-16">
      <Header openModal={openModal} />

      <ProfitSection
        blueCoinValue={blueCoinValue}
        goldCoinValue={goldCoinValue}
        blueCoinIncreaseValue={blueCoinIncreaseValue}
        goldCoinIncreaseValue={goldCoinIncreaseValue}
      />
      <MainSection onChangeIncreaseValue={onChangeIncreaseValue} />
      {isModalOpen && <CompositModal show={isModalOpen} onClose={closeModal} />}
    </div>
  );
};

export default Home;
