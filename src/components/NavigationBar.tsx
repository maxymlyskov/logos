import Button from "./common/Button";
import Navigation from "./common/Navigation";

function NavigationBar() {
  const children = (
    <ul className="list nav__list collapsible__content ">
      <li className="nav__item">
        <a href="#">Messages </a>
      </li>
      <li className="nav__item">
        <a href="#">Saved</a>
      </li>
      <li className="nav__item">
        <a href="#">Account</a>
      </li>
      <li className="nav__item">
        <Button title="Add an announcement" />
      </li>
    </ul>
  );

  return <Navigation children={children} />;
}

export default NavigationBar;
