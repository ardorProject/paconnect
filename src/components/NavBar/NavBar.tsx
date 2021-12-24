import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../utilsComponents/Button/Button";

function NavBar() {
  const navigate = useNavigate();
  const NavItem = (props: any) => {
    return (
      <Link to={props.toUrl} className="mr-4 font-bold">
        <p>{props.label}</p>
      </Link>
    );
  };

  const handleSignout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <nav className="NavBar sticky top-0 z-10 w-full h-[48px] flex items-center pl-3 bg-gray-300 text-lg">
      <NavItem toUrl="/" label="Home" />
      {/* <NavItem toUrl="/history" label="History" />
      <NavItem toUrl="/profile" label="My Profile" /> */}

      <Button label="Sign out" onClick={handleSignout} />
    </nav>
  );
}

export default NavBar;
