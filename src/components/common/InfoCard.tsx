import React from "react";
import Image from "./Image";

interface InfoCardProps {
  imageTitle: string;
  title: string;
  description: string;
}

function InfoCard({ imageTitle, title, description }: InfoCardProps) {
  return (
    <section className="starter--info-card">
      <div className="starter--image">
        <Image imageTitle={imageTitle} />
      </div>
      <h2 className="starter--title">{title}</h2>
      <p>{description}</p>
    </section>
  );
}

export default InfoCard;
