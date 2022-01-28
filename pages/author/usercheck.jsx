import React, { useEffect, useState } from "react";
import { connectToDatabase } from "../../util/mongodb";
import AuthorNavbar from '../../components/Author/AuthorNavbar';
import { useRouter } from "next/router";

import styled from "styled-components";

const Table = styled.table`
width: 90%;
margin: 0 auto;
border-spacing: 0;
border-collapse: collapse;
`;

const TableHead = styled.thead`
font-size: 4vh;
font-weight: bold;
text-align: left;
padding 2;
}
`;

const TableData = styled.td`
font-size: 3vh;
border: 1px solid LightGrey;
height: 100%;
text-align: center;
vertical-align: middle;
}

`;

const TableDataGrey = styled.td`
font-size: 3vh;
color: LightGrey;
border: 1px solid LightGrey;
text-align: center;
vertical-align: middle;
}
`;

export default function usercheck({ properties }) {
    const router = useRouter();
    const GoLogin = () => {
      router.push("/author/login");
    };
    if (typeof window !== "undefined") {
      var item = localStorage.getItem("userID");
    }

  const [isChecked, setIsChecked] = useState({ stat:"" });

  useEffect(() => {
    properties.map((a) =>
      a.data.sign.map((b) => {
        setIsChecked({
              ...isChecked,
              stat: b.usercheck});
      })
    );
  }, []);

  
  console.log("array", isChecked);

  const ChangeStatu = (isChecked) => {
    setIsChecked(!isChecked.stat);
  };

  return (
    <>
    {item !=null ?   
    <>
    <AuthorNavbar />
    <Table>
      <TableHead>
        <TableData>Ad</TableData>
        <TableData>Soyad</TableData>
        <TableData>Email</TableData>
        <TableData>Yetkinlik</TableData>
        <TableData>Durum</TableData>
        <TableData>Değiştir</TableData>

      </TableHead>

      {properties.map((a) =>
        a.data.sign.map((b) => {
          return isChecked.stat === false ? (
            <tr>
              <TableData>{b.name}</TableData>
              <TableData>{b.surname}</TableData>
              <TableData>{b.email}</TableData>
              <TableData>{b.desc}</TableData>
              {isChecked.stat === false ? <TableDataGrey>Aktif</TableDataGrey> : <TableDataGrey>Aktif</TableDataGrey>}
              <TableData>
                <button onClick={() => ChangeStatu(isChecked.stat)}>Değiştir</button>
              </TableData>
            </tr>
          ) : (
            <></>
          );
        })
      )}
    </Table>
    </>
    :   typeof window !== "undefined" ? GoLogin() : <div></div>
    }
    </>

  );
}
export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const data = await db.collection("user").find().toArray();

  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { properties },
  };
}
