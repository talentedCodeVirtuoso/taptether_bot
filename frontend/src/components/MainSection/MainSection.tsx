import React, { useEffect, useRef, useState } from "react";

import "./styles.css";

interface MainSectionProps {
  onChangeIncreaseValue: (blueValue: number, goldValue: number) => void;
}

interface Animation {
  key: number;
  position: { x: number; y: number };
}

const MainSection: React.FC<MainSectionProps> = ({ onChangeIncreaseValue }) => {
  const [animate, setAnimate] = useState<boolean>(false);
  const [animations, setAnimations] = useState<Animation[]>([]);
  const [direction, setDirection] = useState<string>("");
  const animationKey = useRef<number>(0);
  const queue = useRef<number[]>([]);
  const [flashValue, setFlashValue] = useState<number>(1000);
  const [currentValue, setCurrentValue] = useState(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    let direction = "";

    if (x < centerX && y < centerY) {
      direction = "top-left";
    } else if (x >= centerX && y < centerY) {
      direction = "top-right";
    } else if (x < centerX && y >= centerY) {
      direction = "bottom-left";
    } else {
      direction = "bottom-right";
    }

    setDirection(direction);

    setAnimate(false);
    setCurrentValue((prev) => prev + 0.000052);
    setTimeout(() => setAnimate(true), 0);
    setTimeout(() => setAnimate(false), 100);

    const newAnimation = {
      key: animationKey.current++,
      position: {
        x: x + rect.left / 2,
        y: y + rect.top / 2,
      },
    };

    queue.current.push(newAnimation.key);
    processQueue(newAnimation);

    onChangeIncreaseValue(0.000004, 0.000052);
    setFlashValue((prev) => prev - 1);

    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    intervalId.current = setInterval(() => {
      setFlashValue((prev) => {
        if (prev < 1000) {
          return prev + 1;
        } else {
          clearInterval(intervalId.current!);
          return prev;
        }
      });
    }, 2000);
  };

  const processQueue = (newAnimation: Animation) => {
    setAnimations((prev) => [...prev, newAnimation]);

    // setTimeout(() => {
    //   setAnimations((prev) =>
    //     prev.filter((anim) => anim.key !== newAnimation.key)
    //   );
    //   if (queue.current.length > 0) {
    //     const nextKey = queue.current.shift();
    //     const nextAnimation = {
    //       key: nextKey!,
    //       position: newAnimation.position,
    //     };
    //     processQueue(nextAnimation);
    //   }
    // }, 1000);
  };

  return (
    <div className="main-section">
      <div className="round-img">
        <img
          src="https://crazybhai.com/coin.png"
          alt="We Trust"
          className={`we-trust-img ${animate ? `animate ${direction}` : ""}`}
          onClick={handleClick}
        />
        {animations.map((anim) => (
          <div
            key={anim.key}
            className="animated-number"
            style={{ left: anim.position.x, top: anim.position.y }}
          >
            +{currentValue.toFixed(6)}
          </div>
        ))}
      </div>
      <div className="flash-area">
        <img src="https://tap-tether.org/img/flash.svg" alt="Flash" />
        <p>{flashValue} / 1000</p>
      </div>
    </div>
  );
};

export default MainSection;
