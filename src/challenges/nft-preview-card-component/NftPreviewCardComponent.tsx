import Footer from '../../helpers/footer/Footer'
import Head from '../../helpers/head'
import styles from './NftPreviewCardComponent.module.css'
import avatarImageSrc from './assets/images/image-avatar.png'
import EthereumIcon from './assets/images/icon-ethereum.svg'
import ClockIcon from './assets/images/icon-clock.svg'

function NftPreviewCardComponent() {
  return (
    <>
      <Head
        title="Frontend Mentor | NFT Preview Card Component"
        description="NFT Preview Card Component built with React and deployed using Vercel"
        fonts={[
          'https://fonts.googleapis.com/css2?family=Outfit:ital,wght@0,100..900;1,100..900&display=swap',
        ]}
      />
      <main className={styles.container}>
        <div className={styles.nftPreviewCardComponent}>
          <div className={styles.imageWrapper}></div>
          <h1 className={styles.cardTitle}>Equilibrium #3429</h1>
          <p className={styles.cardDescription}>
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className={styles.cardInfo}>
            <div className={styles.infoBox}>
              <span className={styles.infoIcon}>
                <EthereumIcon />
              </span>
              <span className={`${styles.infoText} ${styles.ethereum}`}>
                0.041 ETH
              </span>
            </div>
            <div className={styles.infoBox}>
              <span className={styles.infoIcon}>
                <ClockIcon />
              </span>
              <span className={styles.infoText}>3 days left</span>
            </div>
          </div>
          <div className={styles.lineSeparator}></div>
          <div className={styles.cardCreator}>
            <div className={styles.avatarWrapper}>
              <img
                src={avatarImageSrc}
                alt="Card creator avatar"
                className={styles.avatarImage}
              />
            </div>
            <p className={styles.creatorInfo}>
              Creation of{' '}
              <a href="#" className={styles.creatorName}>
                Jules Wyvern
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer
        challengeLink="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U"
        customStyles={{
          fontFamily: "'Outfit', sans-serif",
          color: '#ffffff',
          position: 'fixed',
          bottom: 0,
          width: '100%',
        }}
      />
    </>
  )
}

export default NftPreviewCardComponent
