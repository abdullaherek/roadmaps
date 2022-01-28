import * as S from "./style";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const initialId = {
  id: "",
};
const Navbar = (props) => {

  const [image, setImage] = useState("/sun.svg");
  if (typeof window !== "undefined") {
    // Perform localStorage action
    var item = localStorage.getItem("userID");
  }
  const router = useRouter();
  const [userId, setUserId] = useState(initialId);
  useEffect(() => {
    setUserId({
      id: localStorage.getItem("userID"),
    });
  }, [item]);

  const Logout = () => {
    localStorage.removeItem("userID");
    router.push("/");
  };

  const imageChange = () => {
     image === "/moon.svg" ? setImage("/sun.svg") : setImage("/moon.svg");
  }

  return (
    <S.Navbar>
      <S.NavbarDiv>

        <div onClick={() => props.themeF() & imageChange()}>
        <Image src={image} height={30} width={25} alt="Moon" />
        </div>

        <Link href="/events">
          <S.NavLink>
            <span>Etkinlikler</span>
          </S.NavLink>
        </Link>

        <Link href="/roadmaps">
          <S.NavLink>Yol Haritam</S.NavLink>
        </Link>

        <Link href="/algorithms">
          <S.NavLink>Algoritma</S.NavLink>
        </Link>

        <Link href="/blog">
          <S.NavLink>Blog</S.NavLink>
        </Link>
        <S.LogoDiv>
          <Link href="/">
            <S.NavLink>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={26}
                style={{ marginLeft: "100px" }}
              />
            </S.NavLink>
          </Link>
        </S.LogoDiv>

        {userId.id === null ? (
          <Link href="/author/login">
            <S.NavLink>
              <div style={{ marginLeft: "125px" }}>Author Login</div>
            </S.NavLink>
          </Link>
        ) : (
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <Link href="/author">
                <S.NavLink style={{ marginLeft: "225px" }}>
                  <div>Admin</div>
                </S.NavLink>
              </Link>
              <Link href="/">
                <S.NavLink onClick={() => Logout()}>
                  <div>Logout</div>
                </S.NavLink>
              </Link>
            </div>
          </div>
        )}
      </S.NavbarDiv>
    </S.Navbar>
  );
};

export default Navbar;
