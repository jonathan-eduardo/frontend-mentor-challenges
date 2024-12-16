import Head from '../../helpers/head'
import Footer from '../../helpers/footer/Footer'
import styles from './ResultsSummaryComponent.module.css'
import skills from './data.json'
import ResultSkill from './components/result-skill/ResultSkill'

function ResultsSummaryComponent() {
  return (
    <>
      <Head
        title="Frontend Mentor | Results Summary Component"
        description="Results Summary Component built with React and deployed using Vercel"
        fonts={[
          'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100..900&display=swap',
        ]}
      />
      <section className={styles.container}>
        <main className={styles.summaryContainer}>
          <div className={styles.resultPanel}>
            <h3 className={styles.resultSubtitle}>Your Result</h3>
            <div className={styles.rateBox}>
              <p className={styles.userRate}>76</p>
              <p className={styles.maxRate}>of 100</p>
            </div>
            <h2 className={styles.resultTitle}>Great</h2>
            <p className={styles.resultDescription}>
              You scored higher than 65% of the people whe have taken these
              tests.
            </p>
          </div>

          <div className={styles.statsPanel}>
            <h1 className={styles.panelTitle}>Summary</h1>
            <div className={styles.panelSkills}>
              {skills.map((skill) => {
                return <ResultSkill {...skill} key={skill.category} />
              })}
            </div>

            <button className={styles.continueBtn}>Continue</button>
          </div>
        </main>
        <Footer challengeLink="https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV" />
      </section>
    </>
  )
}

export default ResultsSummaryComponent
