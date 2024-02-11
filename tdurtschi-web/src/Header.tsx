import { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import "./Header.css";
import { Link } from "react-router-dom";

interface Link {
  href: string;
  linkText: string;
}

export default function Header() {
  const links = [
    {
      href: "/about.html",
      linkText: "about",
    },
  ];

  return (
    <header className={"header"}>
      <a href="/" className={"link"}>
        tdurtschi.com
      </a>
      <div className={"desktop-links"}>
        {links.map((link, idx) => (
          <DesktopLink {...link} key={idx} />
        ))}
      </div>
      <HamburgerNav links={links} />
    </header>
  );
}

const DesktopLink = (props: Link) => (
  <Link to={props.href}>{props.linkText}</Link>
);

const HamburgerNav = (props: { links: Link[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = function () {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={"hamburger-button"}>
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={handleClick}
          width={16}
          height={12}
          strokeWidth={2}
          rotate={0}
          color="#085050"
          borderRadius={0}
          animationDuration={0.1}
        />
        {isOpen && (
          <div className="mobile-links-container">
            {props.links.map((link, idx) => (
              <MobileLink link={link} handleClick={handleClick} key={idx} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const MobileLink = (props: { link: Link; handleClick: () => unknown }) => (
  <Link onClick={props.handleClick} to={props.link.href}>
    {props.link.linkText}
  </Link>
);
// <a onClick={props.handleClick} href={props.link.href} >{props.link.linkText}</a>
