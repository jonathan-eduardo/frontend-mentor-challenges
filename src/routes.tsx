import App from './App.tsx'
import FaqAccordion from './challenges/faq-accordion/faq-accordion.tsx'
import RecipePage from './challenges/recipe-page/recipe-page.tsx'
import ResultsSummaryComponent from './challenges/results-summary-component/ResultsSummaryComponent.tsx'
import SocialLinksProfile from './challenges/social-links-profile/social-links-profile.tsx'

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/recipe-page',
    element: <RecipePage />,
  },
  {
    path: '/social-links-profile',
    element: <SocialLinksProfile />,
  },
  {
    path: '/faq-accordion',
    element: <FaqAccordion />,
  },
  {
    path: '/results-summary-component',
    element: <ResultsSummaryComponent />,
  },
]

export default routes
