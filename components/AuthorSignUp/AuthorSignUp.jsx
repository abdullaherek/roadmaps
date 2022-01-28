import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Style from "./style";
import { useRouter } from "next/router";
const defaultForm = {
  name: "",
  surname: "",
  email: "",
  password: "",
  desc: "",
  usercheck: "",
};

function AuthorSignUp() {
  const route = useRouter();
  const [signForm, setSignForm] = useState(defaultForm);

  function handleChange(e) {
    setSignForm({
      ...signForm,
      [e.target.name]: e.target.value,
      usercheck: false,
    });
  }

  const add = async ({ signForm }) => {
    const data = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      body: JSON.stringify({
        sign: [signForm],
      }),
    });
    route.push("/author/login") & setSignForm(defaultForm);
  };

  const handleClick = ({ signForm }) => {
    console.log(signForm);
    signForm.name === "" ||
    signForm.surname === "" ||
    signForm.email === "" ||
    signForm.password === "" ||
    signForm.desc === ""
      ? alert("Lütfen tüm alanları doldurunuz") & setSignForm(defaultForm)
      : alert("Üyelik isteğiniz alınmıştır, onaylandığında size bildireceğiz") &
        add({ signForm });
  };

  return (
    <Style.HomeDiv>
      <Style.MainContainer>
        <Style.WelcomeText>
          <Image src="/hand.svg" alt="Increment Icon" width={32} height={32} />
        </Style.WelcomeText>
        <Style.InputContainer>
          <Style.Input
            type="text"
            name="name"
            value={signForm.name}
            placeholder="Ad"
            onChange={(e) => handleChange(e)}
          />
          <Style.Input
            type="text"
            name="surname"
            value={signForm.surname}
            placeholder="Soyad"
            onChange={(e) => handleChange(e)}
          />
          <Style.Input
            type="email"
            name="email"
            value={signForm.email}
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
          <Style.Input
            type="password"
            name="password"
            value={signForm.password}
            placeholder="Şifre"
            onChange={(e) => handleChange(e)}
          />
          <Style.Input
            type="text"
            name="desc"
            value={signForm.desc}
            placeholder="Lütfen yetkinliğinizi belirtin.."
            onChange={(e) => handleChange(e)}
          />
        </Style.InputContainer>
        <Style.ButtonContainer>
          <Style.Button
            value="Sign Up"
            onClick={() => handleClick({ signForm })}
          >
            Üye Ol
          </Style.Button>
        </Style.ButtonContainer>
        <Link href="/author/login">
          <a style={{ textDecoration: "none" }}>
            <Style.LoginWith>Veya Giriş Yap</Style.LoginWith>
          </a>
        </Link>
      </Style.MainContainer>
    </Style.HomeDiv>
  );
}

export default AuthorSignUp;
