import "./styles.css";

const Referrals = () => {
  return (
    <div className="w-full p-3 referrals">
      <div className="text-2xl font-medium">Invite friends!</div>
      <div className="text-gray-400 text-xs">
        You will also earn 10% of the referral's income.
      </div>
      <div className="flex justify-between mt-4">
        <div>List of your friends (0)</div>
        <div>
          <img src="https://crazybhai.com/home.svg" />
        </div>
      </div>
      <div className="bg-gray-200 p-2 mt-4 rounded-lg h-auto text-center">
        <div className="text-2xl">0 friends!</div>
        <div className="text-gray-400 text-xs">
          You and your friend will receive bonuses
        </div>
      </div>
      <div className="fixed bottom-0 left-0 mb-24 flex w-full justify-between px-4">
        <div
          style={{
            backgroundColor: "#26a17b",
            borderRadius: "8px",
            width: "75%",
          }}
          className="text-lg justify-center items-center text-center py-3"
        >
          <button>+ Invite a friend</button>
        </div>
        <div
          style={{
            backgroundColor: "#26a17b",
            borderRadius: "8px",
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="https://crazybhai.com/home.svg" />
        </div>
      </div>
    </div>
  );
};

export default Referrals;
