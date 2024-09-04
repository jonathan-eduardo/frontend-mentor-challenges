import App from './App.tsx'
import FaqAccordion from './challenges/faq-accordion/faq-accordion.tsx'
import RecipePage from './challenges/recipe-page/recipe-page.tsx'
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
]

export default routes
