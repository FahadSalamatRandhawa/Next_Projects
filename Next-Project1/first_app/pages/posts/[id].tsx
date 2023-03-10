import Layout from '../../components/layout';
import { getAllPostIds,getPostData  } from '../../lib/posts';
import Head from 'next/head';

export default function Post({ postData }:any) {

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
          {postData.title}
          <br />
          {postData.id}
          <br />
          {postData.date}
          <br />
          <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}></div>
        </Layout>
      );
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths=getAllPostIds();
    return {
        paths,
        fallback:false,
    }
  }

  export async function getStaticProps({ params }:any) {
    // Fetch necessary data for the blog post using params.id
    const postData=await getPostData(params.id);

    return {
        props:{
            postData
        }
    }
  }