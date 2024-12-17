import Footer from '../../helpers/footer/Footer'
import Head from '../../helpers/head'
import styles from './ProductPreviewCardComponent.module.css'
import CartIcon from './assets/images/icon-cart.svg'

function ProductPreviewCardComponent() {
  return (
    <>
      <Head
        title="Frontend Mentor | FAQ accordion"
        description="FAQ accordion built with React and deployed using Vercel"
        fonts={[
          'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
          'https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,100..900;1,100..900&display=swap',
        ]}
      />
      <section className={styles.container}>
        <main className={styles.productPreviewCardComponent}>
          <div className={styles.cardImageBox}></div>
          <div className={styles.cardContent}>
            <h2 className={styles.productType}>Perfume</h2>
            <h1 className={styles.productTitle}>
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className={styles.productDescription}>
              A floral, solar and voluptuous interpratation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className={styles.productPrice}>
              <span className={styles.discountPrice}>$149.99</span>
              <span className={styles.originalPrice}>$169.99</span>
            </div>
            <button className={styles.addToCardButton}>
              <CartIcon />
              <span>Add to Cart</span>
            </button>
          </div>
        </main>
      </section>
      <Footer
        challengeLink="https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa"
        customStyles={{
          fontFamily: "'Montserrat', sans-serif",
          background: '#f2ebe3',
          fontWeight: '500',
        }}
      />
    </>
  )
}

export default ProductPreviewCardComponent
