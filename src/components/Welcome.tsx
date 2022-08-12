import React from "react";
import Button from "./common/Button";
import Image from "./common/Image";
import NavigationBarStart from "./NavigationBarStart";

function Welcome() {
  return (
    <>
      <nav className="welcome__navigation">
        <NavigationBarStart />
      </nav>
      <div className="container grid grid--1x2">
        <div>
          <div className="welcome--image">
            <Image imageTitle="sofa.jpg" />
            <h1 className="welcome__position welcome--left">Round gray sofa</h1>
            <p className="welcome__position welcome__text welcome--left-description">
              Really cozy round gray sofa. Some domy text. Well, that`s great
              sofa
            </p>
            <div className=" welcome__position welcome--left-button">
              <Button title="Get Info" />
            </div>
          </div>
        </div>
        <div className="welcome--right">
          <nav className="welcome__navigation-side">
            <NavigationBarStart />
          </nav>
          <h1>Make your ads beautiful</h1>

          <p className="welcome__position welcome__text welcome--right-description">
            The largest on demand network of workspaces to meet your teams’
            every need. Unlimited flexibility. No commitments. Pay as you go.
          </p>
        </div>
      </div>
    </>
  );
}

export default Welcome;
