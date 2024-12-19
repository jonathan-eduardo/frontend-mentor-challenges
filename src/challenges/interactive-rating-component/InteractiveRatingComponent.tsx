import { useState } from 'react'
import styles from './InteractiveRatingComponent.module.css'
import Head from '../../helpers/head'
import Footer from '../../helpers/footer/Footer'
import RatingSubmittedView from './components/rating-submitted-view/RatingSubmittedView'
import RatingView from './components/rating-view/RatingView'

function InteractiveRatingComponent() {
  const [submit, setSubmit] = useState(false)
  const [rate, setRate] = useState<number | null>(null)

  return (
    <>
      <Head
        title="Frontend Mentor | Interactive Rating Component"
        description="Interactive Rating Component built with React and deployed using Vercel"
        fonts={[
          'https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100..900;1,100..900&display=swap',
        ]}
      />
      <main className={styles.container}>
        <div className={styles.ratingComponent}>
          {submit ? (
            <RatingSubmittedView rate={rate} />
          ) : (
            <RatingView rate={rate} onRate={setRate} onSubmit={setSubmit} />
          )}
        </div>
      </main>
      <Footer
        challengeLink="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"
        customStyles={{
          fontFamily: "'Overpass', sans-serif",
          background: '#121417',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          color: '#ffffff',
        }}
      />
    </>
  )
}

export default InteractiveRatingComponent
