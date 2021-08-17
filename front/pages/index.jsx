import BlogLayout from "../components/BlogLayout";
import Head from "next/head";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <BlogLayout>
      <Link href="/request">
            <a>해줘</a>
      </Link>
       
      </BlogLayout>
    </>
  );
};

export default Index;
