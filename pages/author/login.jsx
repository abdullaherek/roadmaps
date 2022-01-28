import React from 'react';
import { connectToDatabase } from '../../util/mongodb';
import AuthorLogin from '../../components/AuthorLogin/AuthorLogin';
function Login({properties}) {

  return <div>
      <h1>
        <AuthorLogin properties={properties}/>
      </h1>
  </div>;

}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const data = await db.collection("user").find().toArray();

  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { properties },
  };
}


export default Login;
