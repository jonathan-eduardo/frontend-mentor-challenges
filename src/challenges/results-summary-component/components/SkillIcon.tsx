import ReactionIcon from '../assets/images/icon-reaction.svg'
import MemoryIcon from '../assets/images/icon-memory.svg'
import VerbalIcon from '../assets/images/icon-verbal.svg'
import VisualIcon from '../assets/images/icon-visual.svg'

function SkillIcon({ type }: { type: string }) {
  switch (type) {
    case 'Reaction': {
      return <ReactionIcon />
    }
    case 'Memory': {
      return <MemoryIcon />
    }
    case 'Verbal': {
      return <VerbalIcon />
    }
    case 'Visual': {
      return <VisualIcon />
    }
    default: {
      return null
    }
  }
}
export default SkillIcon
