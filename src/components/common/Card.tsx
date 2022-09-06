import { useState } from "react";
import HeartOutlineIcon from "mdi-react/HeartOutlineIcon";
import HeartIcon from "mdi-react/HeartIcon";

interface CardProps {
  imageTitle: string;
  title: string;
  description: string;
  price: string;
  location: string;
}

function Card({ imageTitle, title, description, price, location }: CardProps) {
  const [like, setLike] = useState(false);
  return (
    <div className="container card grid card--grid-common">
      <div className="card--image-common">
        <img src={require(`../../images/${imageTitle}.jpg`)} alt={imageTitle} />
      </div>
      <div className="card__info">
        <div className="card__line-up">
          <h3 className="card--title">{title}</h3>
          {like ? (
            <HeartIcon
              onClick={() => setLike(!like)}
              color="#140c40"
              size="5rem"
              cursor="pointer"
            />
          ) : (
            <HeartOutlineIcon
              onClick={() => setLike(!like)}
              color="#140c40"
              size="5rem"
              cursor="pointer"
            />
          )}
        </div>
        <div className="card--description-container">
          <h3 className="card--description text-limit">{description}</h3>
        </div>
        <div className="card__line-up">
          <h3 className="card--price">${price}</h3>
          <a href="">
            <p className="card--location">{location}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
