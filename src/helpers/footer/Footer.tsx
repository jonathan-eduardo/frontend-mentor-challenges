import styles from './Footer.module.css'
import Attribution from '../../components/attribution/attribution'

function Footer({ challengeLink }: { challengeLink: string }) {
  return (
    <footer className={styles.footer}>
      <Attribution challengeLink={challengeLink} />
    </footer>
  )
}

export default Footer
