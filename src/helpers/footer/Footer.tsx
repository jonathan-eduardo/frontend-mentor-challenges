import styles from './Footer.module.css'
import Attribution from '../../components/attribution/attribution'

function Footer({
  challengeLink,
  customStyles,
}: {
  challengeLink: string
  customStyles?: React.CSSProperties
}) {
  return (
    <footer className={styles.footer} style={customStyles}>
      <Attribution challengeLink={challengeLink} />
    </footer>
  )
}

export default Footer
