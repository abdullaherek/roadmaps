import React from "react";
import { useRouter } from "next/router";
import { connectToDatabase } from "../../util/mongodb";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
`;

const MapDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Card = styled.div`
  width: 95%;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;


`;
const TitleDiv = styled.div`
  width: 100%;
  height: 5vh;
  text-align: center;
`;

const Head = styled.h1`
  font-size: 1.5rem;
  color: #60d9fa;
`;

const Map = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
`;

const Title = styled.div`
  width:70%;
  border-radius: 1rem;
  border: 1px solid #d1941f;
  text-align: center;
  background-color: #d1941f;
  margin:0 auto;
  

`;

const Desc = styled.div`
  width: 100%;
  text-align: center;
  margin:0 auto;
  font-size: 1.2rem;
`;

const CardDetail = styled.div`
  width:25%;
  border: 2px solid pink;
  border-radius:1rem;
  padding: 1rem;
  margin: 1rem auto 2rem auto;
`;


function RoadMapDetail({ properties }) {
  const { query } = useRouter();
  return (
    <Main>
      {properties.map((pro) =>

        query.slug === pro.data[0].head.toLowerCase() ? (

          <MapDiv>
            <Card>
              <TitleDiv>
                <Head>{pro.data[0].head}</Head>
              </TitleDiv>
              <Map>                
                {Object.keys(pro.data[0].forms[0]).map(function (el) {
                  return (
                    <CardDetail>
                      <Title>
                      
                        <li>{pro.data[0].forms[0][el].title}</li>
                      </Title>
                      <Desc>
                        <div style={{margin:"1.5rem 1rem 1rem 1rem"}}>
                          {pro.data[0].forms[0][el].desc}
                        </div>
                      </Desc>
                    </CardDetail>
                  );
                })}
              </Map>
            </Card>
          </MapDiv>
        ) : (
          <></>
        )
      )}
    </Main>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection("form").find({}).limit(20).toArray();

  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { properties },
  };
}

export default RoadMapDetail;
