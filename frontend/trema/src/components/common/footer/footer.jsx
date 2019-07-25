import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';
import styleVariants from './styleVariants';

const STYLE_VARIANT_CASES = {
  default: {},
  footer0: styleVariants.footer0Style,
  footer1: styleVariants.footer1Style,
};
const Footer = (props) => {
  const { children, variant } = props;
  return (
    <div className='footer' style={STYLE_VARIANT_CASES[variant]}>
      {children}
    </div>
  );
};
const Footer0 = () => (
  <Footer variant='footer0'>
    <div className='height0'>
      <p className='bold'>III.gimnazija, Split</p>
    </div>
  </Footer>
);
const Footer1 = () => (
  <Footer variant='footer1'>
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
  </Footer>
);
Footer.propTypes = {
  variant: PropTypes.oneOf(['default', 'footer0', 'footer1']),
  children: PropTypes.any,
};
Footer.defaultProps = {
  variant: 'default',
  children: '',
};
export { Footer0, Footer1 };
