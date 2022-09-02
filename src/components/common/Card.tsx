import { useState } from "react";
import HeartOutlineIcon from "mdi-react/HeartOutlineIcon";
import HeartIcon from "mdi-react/HeartIcon";

function Card() {
  const [like, setLike] = useState(false);
  return (
    <div className="container card grid card--grid">
      <div className="card--image">
        <img src={require("../../images/car.jpg")} alt="" />
      </div>
      <div className="card__info">
        <div className="card__line-up">
          <h3 className="card--title">White Mercedes</h3>
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
          <h3 className="card--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, natus! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ad, nostrum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dignissimos, natus! Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Ad, nostrum.
          </h3>
        </div>
        <div className="card__line-up">
          <h3 className="card--price">$15 000</h3>
          <a href="">
            <p className="card--location">Albuqerque, New Mexico</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
