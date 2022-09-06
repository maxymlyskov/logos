import { useState } from "react";
import HeartOutlineIcon from "mdi-react/HeartOutlineIcon";
import HeartIcon from "mdi-react/HeartIcon";
import PhoneIcon from "mdi-react/PhoneIcon";
import MessageOutlineIcon from "mdi-react/MessageOutlineIcon";
import AccountCircleIcon from "mdi-react/AccountCircleIcon";

interface CardProps {
  imageTitle: string;
  title: string;
  description: string;
  price: string;
  location: string;
}

function CardDetails({
  imageTitle,
  title,
  description,
  price,
  location,
}: CardProps) {
  const [like, setLike] = useState(false);
  return (
    <div className="grid grid--1x2 card--details-block">
      <div className="container card grid card--grid card--details">
        <div className="card--image">
          <img src={require(`../images/${imageTitle}.jpg`)} alt={imageTitle} />
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
            <h3 className="card--description">{description}</h3>
          </div>
          <div className="card__line-up">
            <h3 className="card--price">${price}</h3>
            <a href="">
              <p className="card--location">{location}</p>
            </a>
          </div>
        </div>
      </div>
      <div className="details--block">
        <div className="with-icon details--account">
          <AccountCircleIcon color="#140c40" size="6rem" cursor="pointer" />
          <h3>Account</h3>
        </div>
        <div className="details--line"></div>
        <div className="with-icon">
          <MessageOutlineIcon color="#140c40" size="5rem" cursor="pointer" />
          <h3>Message</h3>
        </div>
        <div className="with-icon">
          <PhoneIcon color="#140c40" size="5rem" cursor="pointer" />
          <h3>+1 510-927-7060</h3>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
