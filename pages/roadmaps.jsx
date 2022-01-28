import { connectToDatabase } from "../util/mongodb";
import slug from "slug";
import Link from "next/link";

import styled from "styled-components";

const Main = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;
const Card = styled.div`
  display: flex;
  height: 25vh;
  flex-direction: row;
  width: 30%;
  margin: 4rem;
  border-radius:1rem;
  border: 4px solid;
  background-color:#60D9FA;
`;

const CardItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction:column;
`;

const Head = styled.div`
  margin: 1rem auto;
`;

const LinkDiv = styled.div`
  height: 9vh;
  width: 100%;
  text-align:center;
`;

const RoadMapA = styled.a`
  font-size: 2rem;
  color: black;
  cursor: pointer;
`;

const Detail = styled.div`
  height: 9vh;
  width: 100%;
`;

const RoadMaps = ({ properties }) => {
  return (
    <Main>
      {properties.map((pro) => (
        <Card>
          <CardItem>
          <LinkDiv>
            <Link
              href="roadmap/[slug]"
              as={`roadmap/${slug(pro.data[0].head)}`}
            >
              <Head>
              <RoadMapA>{pro.data[0].head}</RoadMapA>
              </Head>
            </Link>
          </LinkDiv>
          <Detail>
            <p style={{color:"black"}}>
              2022'de {pro.data[0].head} geliştiricisi olmak için adım adım bir
              rehber
            </p>
          </Detail>
          </CardItem>
          
        </Card>
      ))}
    </Main>
  );
};

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection("form").find({}).limit(20).toArray();

  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { properties },
  };
}

export default RoadMaps;
