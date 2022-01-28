import React from 'react';
import Link from "next/link";
import * as S from "./style";

export default function AuthorNavbar() {
  return <div>
      <S.Navbar>
      <S.NavbarDiv>
        <Link href="/author/addform">
          <S.NavLink>
            <span>Yol Haritası Ekle</span>
          </S.NavLink>
        </Link>

        <Link href="/author/updateform">
          <S.NavLink>Yol Haritası Güncelle</S.NavLink>
        </Link>

        <Link href="/author/addblog">
          <S.NavLink>Blog Ekle</S.NavLink>
        </Link>

        <Link href="/author/usercheck">
          <S.NavLink>Üye Kontrolü</S.NavLink>
        </Link>
    
      </S.NavbarDiv>
    </S.Navbar>
  </div>;
}
