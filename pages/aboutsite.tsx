import { NextPage } from "next/types";
import Head from "next/head";

const AboutSite: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About This Site</title>
        <meta
          name="description"
          content="Technologies used to make this site."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>About Site</main>
    </div>
  );
};
