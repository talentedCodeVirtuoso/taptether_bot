import React from "react";
import ProfitSection from "../ProfitSection/ProfitSection";
import UpgradeProfit from "./UpgradeProfit/UpgradeProfit";

interface MainSectionProps {
  blueCoinValue: number;
  goldCoinValue: number;
  blueCoinIncreaseValue: number;
  goldCoinIncreaseValue: number;
}

const Mine: React.FC<MainSectionProps> = ({
  blueCoinValue,
  goldCoinValue,
  blueCoinIncreaseValue,
  goldCoinIncreaseValue,
}) => {
  return (
    <div>
      <ProfitSection
        blueCoinValue={blueCoinValue}
        goldCoinValue={goldCoinValue}
        blueCoinIncreaseValue={blueCoinIncreaseValue}
        goldCoinIncreaseValue={goldCoinIncreaseValue}
      />
      <UpgradeProfit />
    </div>
  );
};

export default Mine;
