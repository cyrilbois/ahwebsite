import React, { FunctionComponent, useEffect } from 'react';
import Image from 'next/image';
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed';

import skillGroups from '../skillGroups.json';

import styles from './SkillsLongSection.module.scss';
import SocialLinks from './SocialLinks';

type SkillGroupCardProps = {
  skillGroup: typeof skillGroups[number];
  hash: string;
};

const SkillGroupCard: FunctionComponent<SkillGroupCardProps> = ({
  skillGroup,
  hash,
}) => {
  return (
    <div
      id={`card-${encodeURIComponent(skillGroup.title)}`}
      className={`${styles.skillGroupCard} ${
        hash === encodeURIComponent(skillGroup.title) ? styles.focused : ''
      }`}
    >
      <div className={styles.skillGroupHead}>
        <div className={styles.skillGroupTitle}>{skillGroup.title}</div>
        <div className={styles.skillGroupLogos}>
          {skillGroup.skills.map((skill) => (
            <Image
              key={skill.name}
              src={skill.icon || '/images/pages/skills/html.png'}
              width={26}
              height={26}
            />
          ))}
        </div>
      </div>
      <div
        className={styles.skillGroupText}
        dangerouslySetInnerHTML={{ __html: skillGroup.text }}
      ></div>
    </div>
  );
};

const SkillsLongSection: FunctionComponent = () => {
  const hash =
    typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(`card-${hash}`);

      if (target) {
        smoothScrollIntoView(target, {
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [hash]);

  return (
    <section>
      <h2 className={styles.title}>In depth</h2>
      <p>
        <em>
          Each skill listed here has been used in a professional setting, for
          several years for the vast majority. I like to try new things on side
          projects so that I can later on introduce them in my work, but I stick
          to my area of expertise when working on professional projects.
        </em>
      </p>
      <div className={styles.skillGroupsContainer}>
        {skillGroups.map((skillGroup) => (
          <SkillGroupCard
            key={skillGroup.title}
            skillGroup={skillGroup}
            hash={hash}
          />
        ))}
      </div>
      <br />
      <SocialLinks />
    </section>
  );
};

export default SkillsLongSection;