import React from "react";
import AuthorNavbar from "../../components/Author/AuthorNavbar";
import Form from "../../components/InsertMap/Form";
import { useRouter } from "next/router";

export default function addform() {
  const router = useRouter();
  const GoLogin = () => {
    router.push("/author/login");
  };
  if (typeof window !== "undefined") {
    var item = localStorage.getItem("userID");
  }

  return (
    <div>
      {item != null ? (
        <>
          <AuthorNavbar />
          <Form />
        </>
      ) : typeof window !== "undefined" ? (
        GoLogin()
      ) : (
        <div></div>
      )}
    </div>
  );
}
