import React from "react";
import Link from "next/link";
import slug from "slug";
import Image from "next/image";
import * as S from "./style";

function BlogCard({ blogs }) {
  return (
    <>
      <S.Main>
        {blogs.items.map((blog) => {
          return (
            <S.BlogMain key={blog.pubDate}>
              <Image src="/link.svg" alt="Link Icon" width={30} height={30} />

              <S.BlogLink>
                <Link href="blogs/[slug]" as={`blogs/${slug(blog.title)}`}>
                  <S.NavLink>{blog.title}</S.NavLink>
                </Link>
              </S.BlogLink>
              <S.BlogThree>
                <div style={{ display: "flex", marginLeft: "2rem" }}>
                  <Image
                    src="/title.svg"
                    alt="Title Icon"
                    width={30}
                    height={30}
                  />
                  <S.BlogContent
                    dangerouslySetInnerHTML={{
                      __html: blog.content.substring(0, 50),
                    }}
                  ></S.BlogContent>
                </div>

                <S.BlogAuthor>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Image
                      src="/author.svg"
                      alt="Author Icon"
                      width={30}
                      height={30}
                    />
                    <div style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>
                      {blog.author}
                    </div>
                  </div>
                </S.BlogAuthor>

                <S.BlogDate>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Image
                      src="/date.svg"
                      alt="Date Icon"
                      width={25}
                      height={27}
                    />

                    <div style={{ marginLeft: "1rem", marginTop: "0.5rem" }}>
                      {blog.pubDate}
                    </div>
                  </div>
                </S.BlogDate>
              </S.BlogThree>
            </S.BlogMain>
          );
        })}
      </S.Main>
    </>
  );
}

export default BlogCard;
