import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  font-family: "Mulish", sans-serif;
  height: 60px;
  background-color: teal;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14pt;
  font-weight: 500;
`;

const Announcement = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["white", "red", "black"]; // Add more colors if needed

  useEffect(() => {
    // Change color every 500 milliseconds
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 500);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [colors.length]);

  const textStyle = {
    color: colors[colorIndex],
    animation: "blink 1s infinite", // Blinking animation
  };
  return (
    <Container>
      Find Great Deals Here!
      <div>
        <a
          style={textStyle}
          href="https://amzn.to/3t3nprR"
          target="_blank"
          rel="noreferrer"
        >
          Top 20 Shoe Brands in Trend
        </a>
      </div>
    </Container>
  );
};

export default Announcement;
