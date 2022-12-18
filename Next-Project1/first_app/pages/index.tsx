import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Alert from '../components/alert';
import  { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home( {allPostsData}:{id:string,title:string,date:string}[] ) {
  //console.log('Inside Home');
  //console.log((allPostsData))
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Alert error><></><h2 className={utilStyles.headingLg}>Blog</h2></Alert>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
          </li>
          ))}
        </ul>
        <Link href='./posts/first_post'>First Post</Link>
      </section>
    </Layout>
  );
}