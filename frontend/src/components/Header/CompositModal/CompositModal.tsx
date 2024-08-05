import React, { useRef, useState } from "react";
import "./styles.css";
import Deposit from "./CompositElements/Deposit";
import Withdraw from "./CompositElements/Withdraw";
import History from "./CompositElements/History";

interface CompositModalProps {
  show: boolean;
  onClose: () => void;
}

const CompositModal: React.FC<CompositModalProps> = ({ show, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [modalElement, setModalElement] = useState<string>("deposit");
  const [showNavigation, setShowNavigation] = useState<boolean>(true);
  const [showDepositNavigation, setShowDepositNavigation] =
    useState<boolean>(false);
  const [showWithdrawNavigation, setShowWithdrawNavigation] =
    useState<boolean>(true);

  const handleElementClick = (tab: "deposit" | "withdraw" | "history") => {
    setModalElement(tab);
    if (tab === "deposit") {
      setShowDepositNavigation(false);
    }
    if (tab === "withdraw") {
      setShowWithdrawNavigation(false);
    }
  };

  const handleDepositToggleNavigation = () => {
    setShowDepositNavigation((prev) => !prev);
    setShowNavigation(showDepositNavigation);
  };

  const handleWithdrawToggleNavigation = () => {
    setShowWithdrawNavigation((prev) => !prev);
    setShowNavigation(showWithdrawNavigation);
  };

  if (!show) return null;

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  const handleClickInside = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <div onClick={handleClickOutside} className="modal-overlay">
      <div ref={modalRef} onClick={handleClickInside} className="modal-content">
        {showNavigation && (
          <div className="min-w-full flex gap-10 bg-slate-100 rounded-md p-1.5">
            <div
              onClick={() => handleElementClick("deposit")}
              className={`navbar-area ${
                modalElement === "deposit"
                  ? "active-deposit"
                  : "inactive-deposit"
              }`}
            >
              Deposit
            </div>
            <div
              onClick={() => handleElementClick("withdraw")}
              className={`navbar-area ${
                modalElement === "withdraw"
                  ? "active-withdraw"
                  : "inactive-withdraw"
              }`}
            >
              Withdraw
            </div>
            <div
              onClick={() => handleElementClick("history")}
              className={`navbar-area ${
                modalElement === "history"
                  ? "active-history"
                  : "inactive-history"
              }`}
            >
              History
            </div>
          </div>
        )}

        <div>
          {modalElement === "deposit" && (
            <Deposit onDepositChainsClick={handleDepositToggleNavigation} />
          )}
          {modalElement === "withdraw" && (
            <Withdraw onWithdrawChainsClick={handleWithdrawToggleNavigation} />
          )}
          {modalElement === "history" && <History />}
        </div>
      </div>
    </div>
  );
};

export default CompositModal;
