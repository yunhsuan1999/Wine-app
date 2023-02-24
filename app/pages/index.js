import Head from 'next/head';
import HomePage from './home';

export default function Home() {
  return (
    <>
      <Head>
        <title>英勝國際 企業專用</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
      </Head>
      <HomePage></HomePage>
    </>
  );
}
