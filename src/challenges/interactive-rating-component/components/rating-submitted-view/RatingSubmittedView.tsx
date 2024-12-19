import styles from './RatingSubmittedView.module.css'
import IllustrationIcon from '../../assets/images/illustration-thank-you.svg'

function RatingSubmittedView({ rate }: { rate: number | null }) {
  return (
    <div className={styles.ratingContainer}>
      <span className={styles.illustrationIcon}>
        <IllustrationIcon />
      </span>
      <span className={styles.rateSubmitted}>You selected {rate} out of 5</span>
      <h1 className={styles.rateSubmittedTitle}>Thank you!</h1>
      <p className={styles.rateSubmittedMessage}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  )
}

export default RatingSubmittedView
