import BlogCard from "../components/BlogCard/BlogCard";

const Blog = ({ blogs }) => {
  return (
    <div className="blogs-container">
    <BlogCard blogs={blogs}/>
    
    </div>
  );
};

export async function getStaticProps() {
  const data = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bilgisayarbartin"
  );
  const blogs = await data.json();

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
