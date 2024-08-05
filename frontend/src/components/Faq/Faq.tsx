import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div
      style={{
        backgroundColor: "#26a17b",
      }}
    >
      {/* <div className="p-4">
        <div>
          <div
            style={{
              color: "white",
            }}
          >
            <div>FAQ</div>
            <div>Find answers to frequently asked questions</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4">
        <button className="accordion" onClick={() => toggleAccordion(0)}>
          Section 1
        </button>
        <div className={`panel ${activeIndex === 0 ? "active" : ""}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div> */}

      {/* <div>What is tap tether?</div>
          <div>
            TapTether is a new project with a revamped Tap-to-Earn mechanic,
            designed specifically for the crypto community. Here, you can tap to
            earn one of the most popular stablecoins, USDT, which is easy to
            withdraw from the platform, and also tUSD-project's native token
            that will make you eligible for airdrop. The app is available on TON
            and some other networks?
          </div> */}
    </div>
  );
};

export default Faq;
