import Head from "next/head";
import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
 const themeF = children.props.themeToggler;
  return(
    <div>
      <Head>
        <title>Yol Haritam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar themeF={themeF}/>
      {children}
    </div>
  )

};

export default Layout;
