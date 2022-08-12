import React from "react";
import InfoCard from "./common/InfoCard";

function Starter() {
  return (
    <div className="container starter grid grid--1x2">
      <section className="starter__first">
        <h3 className="starter--title">What is behind you?</h3>
        <div className="starter--plan">
          <h2>Find a product</h2>
          <div className="div">
            <h2>Place an announcement</h2>
          </div>
          <h2>Deal with customer</h2>
          <h2>Sell it and get your money</h2>
        </div>
      </section>
      <InfoCard
        title="Place an announcement"
        imageTitle="worker.jpg"
        description="Set location, filters and fabuluos description for selling it immediately"
      />
    </div>
  );
}

export default Starter;
