import React from 'react';
import './footer.css';

const Footer0 = () => (
  <div className='footer footer0'>
    <div className='height0'>
      <p className='bold'>III.gimnazija, Split</p>
    </div>
  </div>
);
const Footer1 = () => (
  <div className='footer'>
    <div className='height1'>
      <p>Matice Hrvatske 11, 21000 Split, Hrvatska</p>
      <p>OIB: 78950283030</p>
      <p>
        <span className='dot' />
        <span className='dot' />
        <span className='dot' />
      </p>
    </div>
    <div>
      <p>+385 21 558 428-Tajništvo</p>
      <p>+385 21 558 421-Ravnateljica</p>
      <p>+385 21 558 420-Centrala</p>
    </div>
    <div>
      <p><a className='white' href='https://ocjene.skole.hr/pocetna/prijava/ucenici'>E-Dnevnik za učenike</a></p>
      <p><a className='white' href='https://ocjene.skole.hr/pocetna/prijava/roditelji'>E-Dnevnik za roditelje</a></p>
      <p><a className='white' href='https://e-dnevnik.skole.hr/main/login'>E-Dnevnik za profesore</a></p>
    </div>
    <div>
      <p><a className='white' href='https://loomen.carnet.hr/'>Loomen</a></p>
      <p><a className='white' href='http://e.trema.hr/'>e-Trema</a></p>
      <p><a className='white' href='https://webmail.skole.hr/login.php'>CARNet Webmail</a></p>
    </div>
  </div>
);
export { Footer0, Footer1 };
