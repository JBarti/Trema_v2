import React from 'react';
import styles from './aboutUs.module.css';
import { MainNavbar, SideNavbar } from '../../components/common/navbar';
import SchoolHistory from './components/schoolHistory/schoolHistory';
import MapInfo from './components/mapInfo/mapInfo';

const AboutUs = () => (
  <div>
    <div className={styles['aboutUs__heading']}>
      <div className={styles['heading__flag']} />
    </div>
    <MainNavbar />
    <SideNavbar />
    <div className={styles['aboutUs__content']}>
      <MapInfo data={{
        address: ' Matice hrvatske 11, 21 000 Split, Hrvatska',
        phoneNumber: [
          ' +385 21 558 428 ',
          ' +385 21 558 428 ',
          ' +385 21 558 428 ',
        ],
        owner: [
          ' - tajništvo',
          ' - profesor1',
          ' - proferor2'],
        email: [
          ' firstname.lastname@gmail.com',
        ],

      }}
      />
      <SchoolHistory data={{
        title: 'Povijest škole',
        paragraph: 'Treća ( III. ) gimnazija u Splitu osnovana je 17. rujna 1992. godine. Ova je škola do tada djelovala pod nazivom Matematičko informatički obrazovni centar – MIOC, koji je nastao u okviru Graditeljskog školskog centra "Ćiro Gamulin" 1978. godine, kao dvogodišnji program za 3. i 4. razrede. Nakon završene pripremne faze u trajanju od dvije godine, učenici nadareni za matematička i informatička područja birali su ovaj program, prepoznavši ga kao izuzetno jak i suvremen, u skladu s europskim standardima Novom mrežom škola u rujnu 1986. godine usustavljuje se MIOC kao samostalna četverogodišnja škola sa sjedištem u Teslinoj 10, u prostorima bivše gimnazije "Čiro Gamulin" . "Povratkom" gimnazija u sustav srednjoškolskog obrazovanja 1992. godine, MIOC postaje gimnazija prirodoslovno – matematičkog programa i seli se u novi prostor na današnjoj adresi. Od 1993. godine škola nosi službeni naziv III. gimnazija, Split.',
        imageSource: 'https://picsum.photos/400/400',
      }}
      />
    </div>
  </div>
);

export default AboutUs;
