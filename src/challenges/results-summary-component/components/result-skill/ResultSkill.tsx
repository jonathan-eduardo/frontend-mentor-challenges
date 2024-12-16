import styles from './ResultSkill.module.css'
import SkillIcon from '../SkillIcon'

function ResultSkill({ category, score }: { category: string; score: number }) {
  const bgClass = `${category.toLowerCase()}Bg`

  return (
    <div className={`${styles.skill} ${styles[bgClass]}`}>
      <div className={styles.skillLabel}>
        <span className={styles.skillIcon}>
          <SkillIcon type={category} />
        </span>
        <span className={styles.skillTitle}>{category}</span>
      </div>

      <p className={styles.skillRate}>
        <span className={styles.userSkillRate}>{score}</span>
        <span className={styles.maxSkillRate}> / 100</span>
      </p>
    </div>
  )
}
export default ResultSkill
