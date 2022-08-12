import Navigation from "./common/Navigation";

function NavigationBarStart() {
  const children = (
    <ul className="list nav__list collapsible__content ">
      <li className="nav__item-large">
        <a href="#">Get Started</a>
      </li>
      <div className="line"></div>
      <li className="nav__item-large">
        <a href="#">Log In</a>
      </li>
    </ul>
  );

  return <Navigation children={children} />;
}

export default NavigationBarStart;
