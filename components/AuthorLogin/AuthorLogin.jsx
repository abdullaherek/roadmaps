import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Style from "./style";
import { useRouter } from "next/router";

const defaultLoginForm = {
  email: "",
  password: "",
};

const defaultMongoData = {
  email: "",
  password: "",
};

function AuthorLogin({ properties }) {
  const router = useRouter();

  const [mongoData, setMongoData] = useState([defaultMongoData]);
  const [userLogin, setUserLogin] = useState(defaultLoginForm);
  const [mid, setMid] = useState("bb");
  useEffect(() => {
    const email = properties.map((a) => a.data.sign[0].email);
    const password = properties.map((a) => a.data.sign.map((b) => b.password));

    setMongoData({
      email: email,
      password: password,
    });
  }, []);

  const handleChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    var a = "";
    var b = "";
    var id = {
      id: "",
    };
    for (var i = 0; i < mongoData.email.length; i++) {
      userLogin.email === mongoData.email[i]
        ? (a = "var") & properties.map((a) => (id = a._id))
        : console.log("false");
    }
    for (var j = 0; j < mongoData.email.length; j++) {
      userLogin.password === mongoData.password[j].toString()
        ? (b = "gel")
        : console.log("b'nin false");
    }

    a === "var" && b === "gel"
      ? Login() & router.push("/author")
      : alert("Üyeliğiniz aktif değildir!") & setUserLogin(defaultLoginForm);

    function Login() {
      localStorage.setItem("userID", id);
    }
  };

  return (
    <Style.HomeDiv>
      <Style.MainContainer>
        <Style.WelcomeText>
          <Image src="/hand.svg" alt="Increment Icon" width={32} height={32} />
        </Style.WelcomeText>
        <Style.InputContainer>
          <Style.Input
            type="email"
            name="email"
            value={userLogin.email}
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
          <Style.Input
            type="password"
            name="password"
            value={userLogin.password}
            placeholder="Şifre"
            onChange={(e) => handleChange(e)}
          />
        </Style.InputContainer>
        <Style.ButtonContainer>
          <Style.Button value="Sign Up" onClick={() => handleClick()}>
            Giriş Yap
          </Style.Button>
        </Style.ButtonContainer>
        <Link href="/author/signup">
          <a style={{ textDecoration: "none" }}>
            <Style.LoginWith>Veya Kayıt Ol</Style.LoginWith>
          </a>
        </Link>
      </Style.MainContainer>
    </Style.HomeDiv>
  );
}

export default AuthorLogin;
