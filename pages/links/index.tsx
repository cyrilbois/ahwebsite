import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import MainLayout from '../../components/layouts/main-layout/MainLayout';

const LinksPage: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Links</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MainLayout>
        <div>Links</div>
      </MainLayout>
    </>
  );
};

export default LinksPage;
