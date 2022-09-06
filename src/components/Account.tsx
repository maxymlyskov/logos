import { useState } from "react";
import Card from "./common/Card";

function Account() {
  const [filter, setFilter] = useState("ads");
  return (
    <div>
      <div className="account--filter grid grid--1x3">
        <div onClick={() => setFilter("ads")} className="filter__block">
          My ads
        </div>
        <div onClick={() => setFilter("messages")} className="filter__block">
          My messages
        </div>
        <div onClick={() => setFilter("options")} className="filter__block">
          Account options
        </div>
      </div>
      {filter === "ads" && (
        <Card
          title="White Mercedes"
          price="15 000"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, natus! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ad, nostrum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dignissimos, natus! Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Ad, nostrum."
          imageTitle="car"
          location="Albuqerque, New Mexico"
        />
      )}
    </div>
  );
}

export default Account;
