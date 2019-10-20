import React from 'react';
import styles from './aboutUs.module.css';
import { MainNavbar, SideNavbar } from '../../components/common/navbar';
import SchoolHistory from './components/schoolHistory/schoolHistory';
import Projects from './components/projects/projects';
import Awards from './components/awards/awards';

const AboutUs = () => (
  <div>
    <div className={styles.aboutUs__heading}>
      <div className={styles.heading__flag} />
    </div>
    <MainNavbar />
    <SideNavbar />
    <div className={styles.aboutUs__content}>
      <SchoolHistory data={{
        title: 'Povijest škole',
        paragraph: 'Treća ( III. ) gimnazija u Splitu osnovana je 17. rujna 1992. godine. Ova je škola do tada djelovala pod nazivom Matematičko informatički obrazovni centar – MIOC, koji je nastao u okviru Graditeljskog školskog centra "Ćiro Gamulin" 1978. godine, kao dvogodišnji program za 3. i 4. razrede. Nakon završene pripremne faze u trajanju od dvije godine, učenici nadareni za matematička i informatička područja birali su ovaj program, prepoznavši ga kao izuzetno jak i suvremen, u skladu s europskim standardima Novom mrežom škola u rujnu 1986. godine usustavljuje se MIOC kao samostalna četverogodišnja škola sa sjedištem u Teslinoj 10, u prostorima bivše gimnazije "Čiro Gamulin" . "Povratkom" gimnazija u sustav srednjoškolskog obrazovanja 1992. godine, MIOC postaje gimnazija prirodoslovno – matematičkog programa i seli se u novi prostor na današnjoj adresi. Od 1993. godine škola nosi službeni naziv III. gimnazija, Split.',
        imageSource: 'https://picsum.photos/500/500',
      }}
      />
      <Projects data={{ title: 'Projekti', paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }} />
      <Awards data={{
        medalList: [
          {
            name: 'Lorem Ipsum',
            contest: 'Dolor sit amet',
            medalVariant: 'gold',
          },
          {
            name: 'Lorem Ipsum',
            contest: 'Dolor sit amet',
            medalVariant: 'silver',
          },
          {
            name: 'Lorem Ipsum',
            contest: 'Dolor sit amet',
            medalVariant: 'bronze',
          },
          {
            name: 'Lorem Ipsum',
            contest: 'Dolor sit amet',
            medalVariant: 'bronze',
          },
          {
            name: 'Lorem Ipsum',
            contest: 'Dolor sit amet',
            medalVariant: 'gold',
          },
          {
            name: 'Lorem Ipsum',
            contest: 'Dolor sit amet',
            medalVariant: 'gold',
          },
          {
            name: 'Lorem Ipsum',
            contest: 'Dolor sit amet',
            medalVariant: 'silver',
          },
          {
            name: 'Lorem Ipsum',
            contest: 'Dolor sit amet',
            medalVariant: 'silver',
          },
          {
            name: 'Lorem Ipsum',
            contest: 'Dolor sit amet',
            medalVariant: 'silver',
          },
          {
            name: 'Lorem Ipsum',
            contest: 'Dolor sit amet',
            medalVariant: 'bronze',
          },
        ],
      }}
      />
    </div>
  </div>
);

export default AboutUs;
