import BlogLayout from "../../components/BlogLayout";
import { useRouter } from "next/router";
import Head from "next/head";

const Post = () => {
  const router = useRouter();
  const { post } = router.query; //카테고리 이름




  const data = [
    {
      id:'1',
      subject:'kkkk',
      date:"2077-07-07", 
      hit:"777"
    },
    {
      id:'1',
      subject:'kkkk',
      date:"2077-07-07", 
      hit:"777"
    },
    {
      id:'1',
      subject:'kkkk',
      date:"2077-07-07", 
      hit:"777"
    },
    {
      id:'1',
      subject:'kkkk',
      date:"2077-07-07", 
      hit:"777"
    },
  ]

  const renderList = data.map(v=>{ 
    return (
      <div>
          <ul>
              <li>{v.id}</li>
              <li>{v.subject}</li>
              <li>{v.date}</li>
              <li>{v.hit}</li>
          </ul>
      </div>
    )
  })
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>

      <BlogLayout>{post} hello POST
        <div>
          {renderList}
        </div>
      </BlogLayout>
    </>
  );
};

export default Post;
