import React, {useState} from 'react';
import { useRouter } from "next/router";
import AuthorNavbar from '../../components/Author/AuthorNavbar';
import { connectToDatabase } from '../../util/mongodb';


export default function updateform({properties}) {

  const [form, setForm] = useState(properties);

  const router = useRouter();
  const GoLogin = () => {
    router.push("/author/login");
  };
  if (typeof window !== "undefined") {
    var item = localStorage.getItem("userID");
  }


  const handleChange = (e, key) => {
    setForm({
      ...form,
      [key]: {
        ...form[key],
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleClick = () => {
      console.log(form);
  }

  return <div>
      {item !=null ? 
      <div style={{display:"flex", flexDirection:"column"}}>
              <AuthorNavbar />
             <h2>Road Map Update</h2>
             {properties.map((pro) => 

                <div style={{margin:"0 auto", flexWrap:"wrap", }}>
                <input type = "text" name="head" value={pro.data[0].head}></input>
                {Object.keys(pro.data[0].forms[0]).map(function (el) {
                  return (
                    <div>
                       <input type="text" name ="title" value={pro.data[0].forms[0][el].title}
                       onChange={(e) => handleChange(e, pro)}
                       ></input>                      
                        <div style={{margin:"1.5rem 1rem 1rem 1rem"}}>
                        <input type="text" name ="desc" value={pro.data[0].forms[0][el].desc}
                        onChange={(e) => handleChange(e, pro)}
                        ></input>
                          
                        </div>
                    </div>
                  );
                })}
               
                
                </div>
             )}
             <div>
               <button onClick={()=>handleClick()}>Update</button>
             </div>


      </div>
       : typeof window !== "undefined" ? GoLogin() : <div></div>
      }

      
  </div>;
}


export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection("form").find({}).limit(20).toArray();

  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { properties },
  };
}