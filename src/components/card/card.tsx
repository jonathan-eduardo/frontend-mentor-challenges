import styles from './card.module.css'
import ArrowRightIcon from '../../assets/arrow-right-icon.svg'
import GithubIcon from '../../assets/github-icon.svg'
import { Link } from 'react-router-dom'

type CardProps = {
  title: string
  slug: string
  thumbnail: {
    src: string
    alt: string
  }
  github_link: string
  tags: string[]
}

export default function Card({
  title,
  slug,
  thumbnail,
  github_link,
  tags,
}: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={thumbnail.src} alt={thumbnail.alt} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <div className={styles.tags}>
            {tags &&
              tags.map((tag) => (
                <span key={tag} className={`${styles.tag} ${styles[tag]}`}>
                  {tag}
                </span>
              ))}
          </div>
        </div>
        <div className={styles.cardActions}>
          <a
            target="_blank"
            href={github_link}
            className={`${styles.challengeLink} ${styles.github}`}
          >
            <GithubIcon />
          </a>
          <Link
            className={`${styles.challengeLink} ${styles.selectChallenge}`}
            to={slug}
          >
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}
