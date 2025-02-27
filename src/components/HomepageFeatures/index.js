import styles from './styles.module.css';
import { HomepageCardSection, Card } from '../HomepageCardSection';
import allocinit_icon from '@site/static/img/icon.png';
import SmartContracts from '@site/static/img/nil/nil-icons/smart_contracts.png';
import CLI from '@site/static/img/nil/nil-icons/cli.png';
import Essentials from '@site/static/img/nil/nil-icons/essentials.png'

const BRAND = '[[alloc] init]'
const HOMEPAGE_HEADER_STRING = `${BRAND} Documentation`;
const HOMEPAGE_HEADER_SUBTITLE = `${BRAND} is adding Zero-Knowledge-Proofs to Bitcoin, the hard way, without any forks!`;

const CARDS = <HomepageCardSection>
  <Card icon={<img src={allocinit_icon} />} id='alloc101' title='[[alloc] init] 101' description='Our current research objectives and stack' to='/alloc_init/architecture' />
  <Card icon={<img src={Essentials} />} id='manifesto' title='Manifesto' description='The Philosophy behind' to='/alloc_init/manifesto' />
  {/*<Card icon={<img src={SmartContracts} />} id='smart_contracts' title='Tutorials' description='Write, deploy, and call smart contracts' to='/nil/getting-started/working-with-smart-contracts/writing-a-contract' />*/}
  {/*<Card icon={<img src={CLI} />} id='cli' title='=nil; tools' description='Configure and use the key developer tools' to='/nil/tools/nil-cli/usage' />*/}
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
