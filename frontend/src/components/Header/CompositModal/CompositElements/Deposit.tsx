import React, { useState, useEffect } from "react";
import api from "../../../../api/axios";

interface Chain {
  name: string;
  imgUrl: string;
}

interface DepositProps {
  onDepositChainsClick: () => void;
}

const Deposit: React.FC<DepositProps> = ({ onDepositChainsClick }) => {
  const [chains, setChains] = useState<Chain[]>([]);
  const [selectedChain, setSelectedChain] = useState<Chain | null>(null);
  const [address, setAddress] = useState<string>("");
  const [showAddress, setShowAddress] = useState<boolean>(false);

  useEffect(() => {
    // Fetch chain information from the backend
    const fetchChains = async () => {
      try {
        const response = await api.get<Chain[]>("/chains");
        setChains(response.data);
        if (response.data.length > 0) {
          // Automatically select the first chain when the component mounts
          setSelectedChain(response.data[0]);
          setShowAddress(true);
        }
      } catch (error) {
        console.error("Error fetching chains", error);
      }
    };
    fetchChains();
  }, []);

  useEffect(() => {
    if (selectedChain) {
      // Fetch address based on the selected chain
      const fetchAddress = async () => {
        try {
          const response = await api.get<{ address: string }>(
            `/address?chain=${selectedChain.name}`
          );
          setAddress(response.data.address);
        } catch (error) {
          console.error("Error fetching address", error);
        }
      };
      fetchAddress();
    }
  }, [selectedChain]);

  const handleChainClick = async (chain: Chain) => {
    setSelectedChain(chain);
    setShowAddress(true);
    onDepositChainsClick();
  };

  const handleChainsClick = async () => {
    setSelectedChain(null);
    setShowAddress(false);
    onDepositChainsClick();
  };

  return (
    <div className="min-w-full">
      {selectedChain && (
        <div>
          <div className="text-sm">
            Send any amount of USDT to your deposit address
          </div>
          <div
            className="min-w-full gap-10 bg-slate-100 rounded-md p-1.5 my-1.5 items-center "
            onClick={handleChainsClick}
          >
            <div className="grid grid-cols-12">
              <div className="col-span-2">
                <img
                  src={selectedChain.imgUrl}
                  alt={selectedChain.name}
                  className="w-6"
                />
              </div>

              <div className="text-zinc-400 col-span-9">
                {selectedChain.name}
              </div>
              <div className="col-span-1">
                <img src="https://tap-tether.org/img/arrow3.svg" alt="Arrow3" />
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        {showAddress && (
          <div className="min-w-full gap-10 bg-slate-100 rounded-md p-1.5 my-1.5 flex items-center text-xs">
            <div>{address}</div>
          </div>
        )}
        <div></div>
      </div>

      <div>
        {!selectedChain && (
          <div>
            <div>Select Chain</div>
            <div>
              {chains.map((chain) => (
                <div
                  className="min-w-full gap-10 bg-slate-100 rounded-md p-1.5 my-1.5 flex items-center"
                  key={chain.name}
                  onClick={() => handleChainClick(chain)}
                >
                  <img src={chain.imgUrl} alt={chain.name} className="w-6" />
                  <div>{chain.name}</div>
                  {}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Deposit;
