import React from "react";
import AuthorNavbar from "../../components/Author/AuthorNavbar";
import { useRouter } from "next/router";

const Author = () => {
  const router = useRouter();
  const GoLogin = () => {
    router.push("/author/login");
  };
  if (typeof window !== "undefined") {
    var item = localStorage.getItem("userID");
  }

  return (
    <div>
      {item !=null ? 
       <AuthorNavbar />
       : typeof window !== "undefined" ? GoLogin() : <div></div>
      }
     
    </div>
  );
};

export default Author;
