import { useState, useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import MenuIcon from "mdi-react/MenuIcon";

interface NavigationProps {
  children: JSX.Element[] | JSX.Element;
}

const Navigation: React.FC<NavigationProps> = ({
  children,
}: NavigationProps) => {
  const [toggle, setToggle] = useState(false);
  let { width } = useWindowDimensions();

  useEffect(() => {
    width >= 768 ? setToggle(true) : setToggle(false);
  }, [width]);

  return (
    <nav className="nav nav--border collapsible ">
      <a href="/">
        <h2 className="website-title">Logos</h2>
      </a>
      {width <= 768 && (
        <MenuIcon
          onClick={() => setToggle(!toggle)}
          color="#140c40"
          size="5rem"
        />
      )}
      {toggle && <>{children}</>}
    </nav>
  );
};

export default Navigation;
