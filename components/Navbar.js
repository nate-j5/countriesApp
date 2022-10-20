import React from "react";
import { Div, Wrapper, InnerWrap } from "../styles/Navbar.styles";
import { useRouter } from "next/dist/client/router";
import { FiMenu } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";

export default function Navbar({ toggle, setToggle }) {
  const router = useRouter();

  const handleClick = () => {
    if (router.pathname === "/country") {
      router.push("/");
    } else {
      setToggle(!toggle);
    }
  };

  const handleMenuClick = () => {
    alert("Not built yet :)");
  };

  return (
    <>
      <Div>
        <Wrapper>
          {toggle || router.pathname === "/country" ? (
            <BsArrowLeft className="back" onClick={handleClick} />
          ) : (
            <p> World Countries</p>
          )}
          <InnerWrap>
            <FiMenu className="icon" onClick={handleMenuClick} />
          </InnerWrap>
        </Wrapper>
      </Div>
    </>
  );
}
