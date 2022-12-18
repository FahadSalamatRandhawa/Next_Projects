import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Alert from '../../components/alert';
import Styles from '../../components/layout.module.css'

export default function FirstPost() {
    return (
      <Layout >
        <Head>
          <title>First Post</title>
        </Head>
        <Alert>
        
        <h1>First Post</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
        <h1>Alert 1</h1>
        </Alert>
      </Layout>
    );
  }