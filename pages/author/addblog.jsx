import React from "react";
import { useRouter } from "next/router";
import AuthorNavbar from "../../components/Author/AuthorNavbar";
import Image from "next/image";
export default function addblog() {
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

          <div style = {{margin:"auto", textAlign:"center", fontSize:"1.5rem"}}>
            <h2>Medium İle Blog Ekle</h2>
            <p>
              Medium ile bir blog eklemek için web sitesine gidin: <br/>
               <a href="https://medium.com/" style={{textDecoration:"none", color:"blue"}}>https://medium.com/</a>
              <p>
                Sign in yöntemi ile giriş yapmak için Gmail'e girin ve alttaki
                bilgileri kullanın:
              </p>
            
              <p>
                E-mail: <b>bilgisayarmuhendisligibartin@gmail.com </b>
                <p>E-mail Password:
                <b>BilgisayarBartin2008+</b></p>
          
              </p>
              <Image 
              src = "/1.PNG"
              width={300}
              height={300}
              alt = "Ilk"
              />
              <p>
                Sign in kısmına E-mail'i girdikten sonra Gmail'e gelen onay
                linkine tıklayarak giriş yapabilirsiniz. 
              </p>
              <Image 
              src = "/2.PNG"
              width={300}
              height={300}
              alt = "Ikı"
              />
                <p>Stories kısmına girerek
                yeni bir blog ekleyebilirsiniz.</p>
              <p>
                Buradaki blog kısmını istediğiniz gibi düzenleyebilir, görsel
                ekleyebilirsiniz.
              </p>
              <Image 
              src = "/3.PNG"
              width={300}
              height={300}
              alt = "Uc"
              />
              <p style = {{marginBottom:"9rem"}}>
                Publish ederken kategori girmeyi unutmayın! <p>Yapmanız gereken bir
                şey kalmadı, gün içerisinde blog otomatik olarak
                tanımlanacaktır.</p> 
              </p>
            </p>
          </div>
        </>
      ) : typeof window !== "undefined" ? (
        GoLogin()
      ) : (
        <div></div>
      )}
    </div>
  );
}
