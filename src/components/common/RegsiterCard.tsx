import Button from "./Button";
import Image from "./Image";

function RegsiterCard() {
  return (
    <div className="register--box">
      <div className="line"></div>
      <section className="register">
        <h3>
          Get access to thousands of the best ads and make them by your own.
        </h3>
        <div className="register__image">
          <Image imageTitle="house.jpg" />
          <div className="register__buttons">
            <Button title="Search more" />
            <Button title="Get Info" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegsiterCard;
