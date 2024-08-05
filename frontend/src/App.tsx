import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Mine from "./components/Mine/Mine";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Referrals from "./components/Referrals/Referrals";
import Faq from "./components/Faq/Faq";

const App: React.FC = () => {
  const location = useLocation();
  // const navigate = useNavigate()
  const activeTab = location.pathname.substring(1) as
    | "home"
    | "mine"
    | "referrals"
    | "faq";

  const [blueCoinIncreaseValue, setBlueCoinIncreaseValue] = useState<number>(0);
  const [goldCoinIncreaseValue, setGoldCoinIncreaseValue] = useState<number>(0);
  const [blueCoinValue, setBlueCoinValue] = useState<number>(0);
  const [goldCoinValue, setGoldCoinValue] = useState<number>(0);

  const handleIncreaseChanged = (
    blueIncrease: number,
    goldIncrease: number
  ) => {
    setBlueCoinIncreaseValue(blueIncrease);
    setGoldCoinIncreaseValue(goldIncrease);
    setBlueCoinValue((prev) => prev + 0.000004);
    setGoldCoinValue((prev) => prev + 0.000052);
  };

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const token = params.get('token');
  //   const chat_id = params.get('chat_id');

  //   if (token && chat_id) {
  //     localStorage.setItem('token', token);
  //     localStorage.setItem('chat_id', chat_id);

  //     // Update URL without query params
  //     navigate(location.pathname, { replace: true });
  //   }
  // }, [location.search, navigate]);

  return (
    <div className="app">
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                blueCoinValue={blueCoinValue}
                goldCoinValue={goldCoinValue}
                blueCoinIncreaseValue={blueCoinIncreaseValue}
                goldCoinIncreaseValue={goldCoinIncreaseValue}
                onChangeIncreaseValue={handleIncreaseChanged}
              />
            }
          />
          <Route
            path="/mine"
            element={
              <Mine
                blueCoinValue={blueCoinValue}
                goldCoinValue={goldCoinValue}
                blueCoinIncreaseValue={blueCoinIncreaseValue}
                goldCoinIncreaseValue={goldCoinIncreaseValue}
              />
            }
          />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>
      <Footer activeTab={activeTab || "home"} />
    </div>
  );
};

export default App;
