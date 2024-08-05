import React, { useState, useEffect } from "react";
import api from "../../../../api/axios";

// Define the structure of a WithdrawChain object
interface WithdrawChain {
  name: string;
  imgUrl: string;
}

// Define the structure of a WithdrawChildChain object
interface WithdrawChildChain {
  name: string;
  imgUrl: string;
  balance: number;
  value: number;
}

interface WithdrawProps {
  onWithdrawChainsClick: () => void;
}

const Withdraw: React.FC<WithdrawProps> = ({ onWithdrawChainsClick }) => {
  // State to store the list of withdrawal chains
  const [withdrawChains, setWithdrawChains] = useState<WithdrawChain[]>([]);

  // State to store the selected chain
  // const [selectedWithdrawChain, setSelectedWithdrawChain] =
  //   useState<WithdrawChain | null>(null);

  // State to store the child chain data
  const [withdrawChildChain, setWithdrawChildChain] =
    useState<WithdrawChildChain | null>(null);

  // State to manage UI state, if window is changed
  const [showWindow, setShowWindow] = useState<boolean>(false);

  useEffect(() => {
    // Fetch chain information from backend
    const fetchWithdrawChains = async () => {
      try {
        const response = await api.get<WithdrawChain[]>("/withdraw");
        const chains = response.data;
        setWithdrawChains(chains);

        // Automatically select the first chain and fetch its child chain data
        if (chains.length > 0) {
          const defaultChain = chains[0];
          // setSelectedWithdrawChain(defaultChain);
          setShowWindow(true); // Show the window with the selected chain

          // Fetch child chain data for the default chain
          const childResponse = await api.get<WithdrawChildChain[]>(
            "/selectedWithdraw",
            {
              params: { chainName: defaultChain.name }, // Pass the chain name as a parameter
            }
          );

          // Assuming only one child chain is returned
          setWithdrawChildChain(childResponse.data[0] || null);
        }
      } catch (error) {
        console.error("Error fetching withdraw chains", error);
      }
    };

    fetchWithdrawChains();
  }, []);

  const handleWithdrawChainClick = async (chain: WithdrawChain) => {
    // setSelectedWithdrawChain(chain);
    setShowWindow(true);

    try {
      const response = await api.get<WithdrawChildChain[]>(
        "/selectedWithdraw",
        {
          params: { chainName: chain.name }, // Pass the chain name as a parameter
        }
      );
      // Assuming only one child chain is returned
      setWithdrawChildChain(response.data[0] || null);
      onWithdrawChainsClick();
    } catch (error) {
      console.error("Error fetching withdraw child chains", error);
    }
  };

  const handleWithdrawChainsClick = () => {
    setShowWindow(false);
    onWithdrawChainsClick();
  };

  return (
    <div className="min-w-full">
      {showWindow ? (
        <div>
          {/* <div className="min-w-full gap-10 bg-slate-100 rounded-md p-1.5 my-1.5 flex items-center">
            Withdraw Child Chain for {selectedWithdrawChain?.name}
          </div> */}
          {withdrawChildChain && (
            <div>
              <div className="min-w-full gap-10 bg-slate-100 rounded-md p-1.5 my-1.5 flex items-center">
                <img
                  src="https://tap-tether.org/img/coin.svg"
                  alt="Blue Coin"
                />
                <div>
                  <div>USDT</div>
                  <div className="text-xs text-zinc-400 flex gap-2">
                    <div>Balance: {withdrawChildChain.balance}</div>
                    <div className="border border-zinc-400 rounded-lg px-2">
                      MAX
                    </div>
                  </div>
                </div>
                <div>{withdrawChildChain.value}</div>
              </div>
              <div
                className="min-w-full gap-10 bg-slate-100 rounded-md p-1.5 my-1.5 flex items-center"
                onClick={handleWithdrawChainsClick}
              >
                <img
                  src={withdrawChildChain.imgUrl}
                  alt={withdrawChildChain.name}
                  className="w-6"
                />
                <div className="text-zinc-400">{withdrawChildChain.name}</div>
                {/* <div className="col-span-1">
                  <img
                    src="https://tap-tether.org/img/arrow3.svg"
                    alt="Arrow3"
                  />
                </div> */}
              </div>
            </div>
          )}
          <div className="min-w-full gap-10 bg-slate-100 rounded-md p-1.5 my-1.5 flex items-center">
            <form className="flex flex-col gap-4 w-full">
              <input
                type="text"
                placeholder="Enter your address"
                className="p-2 border rounded"
              />
              <button
                type="submit"
                className="p-2 bg-green-500 text-white rounded"
              >
                Withdraw
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <div>Select Chain</div>
          <div>
            {withdrawChains.map((chain) => (
              <div
                className="min-w-full gap-10 bg-slate-100 rounded-md p-1.5 my-1.5 flex items-center"
                key={chain.name}
                onClick={() => handleWithdrawChainClick(chain)}
              >
                <img src={chain.imgUrl} alt={chain.name} className="w-6" />
                <div>{chain.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdraw;
