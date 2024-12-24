import Footer from '../../helpers/footer/Footer'
import Head from '../../helpers/head'
import styles from './OrderSummaryComponent.module.css'
import MusicIcon from './assets/images/icon-music.svg'

function OrderSummaryComponent() {
  return (
    <>
      <Head
        title="Frontend Mentor | Order Summary Component"
        description="Order Summary Component built with React and deployed using Vercel"
        fonts={[
          'https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap',
        ]}
      />
      <main className={styles.container}>
        <div className={styles.orderSummaryComponent}>
          <div className={styles.orderHero}></div>
          <div className={styles.orderContent}>
            <h1 className={styles.orderTitle}>Order Summary</h1>
            <p className={styles.orderDescription}>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
            <div className={styles.selectedPlan}>
              <div className={styles.planContent}>
                <MusicIcon />
                <div className={styles.planLabel}>
                  <p className={styles.planType}>Annual Plan</p>
                  <p className={styles.planPrice}>$59.99/year</p>
                </div>
              </div>
              <button className={styles.changePlan}>Change</button>
            </div>
            <button className={styles.paymentButton}>Proceed to Payment</button>
            <button className={styles.cancelButton}>Cancel Order</button>
          </div>
        </div>
      </main>
      <Footer
        challengeLink="https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj"
        customStyles={{
          fontFamily: "'Red Hat Display', sans-serif",
          fontWeight: 500,
          background: '#E0E8FF',
        }}
      />
    </>
  )
}

export default OrderSummaryComponent
