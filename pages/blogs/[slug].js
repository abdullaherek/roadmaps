import slug from "slug";
import { useRouter } from "next/router";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #60D9FA;
`;

function BlogDetail({ blog }) {
  const { query } = useRouter();

  return (
    <div style={{margin:"0 auto", maxWidth:"80%"}}>
      {blog.items.map((bl) =>
        query.slug === `${slug(bl.title)}` ? (
          <div key={bl.pubDate}>
            <Title>{bl.title}</Title>

            <div style={{textAlign:"center", fontSize:"1.2rem"}}
              dangerouslySetInnerHTML={{
                __html: bl.description,
              }}
            />
            <p style={{textAlign:"center"}}>{bl.author}</p>
            <p style={{textAlign:"center"}}>{bl.pubDate}</p>
          </div>
        ) : (
          <div></div>
        )
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const data = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bilgisayarbartin"
  );
  const blogs = await data.json();
  const paths = blogs.items.map((blog) => {
    return {
      params: { slug: `${slug(blog.title)}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bilgisayarbartin"
  );
  const blog = await data.json();
  return {
    props: {
      blog,
    },
  };
}

export default BlogDetail;
