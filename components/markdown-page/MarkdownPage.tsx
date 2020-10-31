import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import styles from './MarkdownPage.module.scss';
import MetaTitle from '../meta/MetaTitle';
import MetaDescription from '../meta/MetaDescription';
import MetaImage from '../meta/MetaImage';

type MarkdownPageProps = {
  date?: string;
  cover?: string;
  title: string;
  excerpt: string;
  html: string;
};

const MarkdownPage: FunctionComponent<MarkdownPageProps> = ({
  date,
  cover,
  title,
  excerpt,
  html,
}) => {
  const Date = date && <time className={styles.date}>{date}</time>;
  const Metadata = Date && (
    <section className={styles.metadata}>{Date}</section>
  );
  const Cover = cover && (
    <div className={styles.coverContainer}>
      <Image
        src={cover}
        width={1500}
        height={1000}
        alt={cover.split('/').slice(-1)[0].split('.')[0]}
      />
    </div>
  );
  const MetaCover = cover && <MetaImage src={cover} />;

  return (
    <div>
      <MetaTitle title={title} />
      <MetaDescription description={excerpt} />
      {MetaCover}
      <header className={styles.header}>
        {Metadata}
        <h1 className={styles.title}>{title}</h1>
      </header>
      {Cover}
      <section className={`${styles.content} ${!cover ? styles.noImg : ''}`}>
        <div
          className={styles.markdownContainer}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </div>
  );
};

export default MarkdownPage;
