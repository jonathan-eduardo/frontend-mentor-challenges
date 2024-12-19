import { SetStateAction } from 'react'
import styles from './RatingView.module.css'
import StarIcon from '../../assets/images/icon-star.svg'

function RatingView({
  rate,
  onRate,
  onSubmit,
}: {
  rate: number | null
  onRate: React.Dispatch<SetStateAction<number | null>>
  onSubmit: React.Dispatch<SetStateAction<boolean>>
}) {
  function handleRate(rate: number) {
    onRate(rate)
  }

  function handleSubmit() {
    onSubmit(true)
  }

  return (
    <>
      <span className={styles.ratingIcon}>
        <StarIcon />
      </span>
      <h1 className={styles.ratingTitle}>How did we do?</h1>
      <p className={styles.ratingDescription}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div
        className={styles.ratingOptions}
        role="group"
        aria-label="Rate from 1 to 5"
      >
        {[...Array(5)].map((_, i) => (
          <button
            key={i}
            className={`${styles.rateButton} ${
              rate === i + 1 ? styles.selected : ''
            }`}
            onClick={() => handleRate(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        className={styles.submitButton}
        onClick={handleSubmit}
        disabled={rate === null}
      >
        Submit
      </button>
    </>
  )
}

export default RatingView
