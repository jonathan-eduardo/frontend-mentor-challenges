import App from './App.tsx'
import RecipePage from './challenges/recipe-page/recipe-page.tsx'

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/recipe-page',
    element: <RecipePage />,
  },
]

export default routes
