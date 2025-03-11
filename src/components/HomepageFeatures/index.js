import styles from './styles.module.css';
import { HomepageCardSection, Card } from '../HomepageCardSection';
import allocinit_icon from '@site/static/img/icon.png';
import Essentials from '@site/static/img/nil/nil-icons/essentials.png'

const BRAND = '[[alloc] init]'
const HOMEPAGE_HEADER_STRING = `${BRAND} Documentation`;
const HOMEPAGE_HEADER_SUBTITLE = `${BRAND} is adding Zero-Knowledge-Proofs to Bitcoin, the hard way, without any forks!`;

const CARDS = <HomepageCardSection>
  <Card icon={<img src={allocinit_icon} />} id='alloc101' title='[[alloc] init] 101' description='What is [[alloc] init]' to='/alloc_init/' />
  <Card icon={<img src={Essentials} />} id='alloc101' title='Architecture' description='Our current architecture' to='/alloc_init/architecture' />
  <Card icon={<img src={Essentials} />} id='manifesto' title='Manifesto' description='The Philosophy behind' to='/alloc_init/manifesto' />
</HomepageCardSection>

export default function HomepageNilProducts() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.indexContainer} id='productContainer'>
        <div className='col col-2'>
          <h1 className={styles.header} style={{ textAlign: 'center' }}>
            <span>{HOMEPAGE_HEADER_STRING}</span>
          </h1>
          <h3 className={styles.subheader} style={{ textAlign: 'center', fontWeight: 'normal' }}>
            <span>{HOMEPAGE_HEADER_SUBTITLE}</span>
          </h3>
          <div className={'row ' + styles.rowFlex}>
            {CARDS}
          </div>
        </div>
      </div>
    </div>
  );
}
