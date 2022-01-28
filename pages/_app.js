import Layout from "../components/Layout/Layout.jsx";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../globalStyles";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  
  const themeToggler = () => {
    theme === "light" ? setTheme("dark")  : setTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} themeToggler={themeToggler} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
