import { lazy } from 'react'
import App from './App.tsx'

const FaqAccordion = lazy(
  () => import('./challenges/faq-accordion/faq-accordion.tsx')
)
const ProductPreviewCardComponent = lazy(
  () =>
    import(
      './challenges/product-preview-card-component/ProductPreviewCardComponent.tsx'
    )
)
const RecipePage = lazy(
  () => import('./challenges/recipe-page/recipe-page.tsx')
)
const ResultsSummaryComponent = lazy(
  () =>
    import('./challenges/results-summary-component/ResultsSummaryComponent.tsx')
)
const SocialLinksProfile = lazy(
  () => import('./challenges/social-links-profile/social-links-profile.tsx')
)

const InteractiveRatingComponent = lazy(
  () =>
    import(
      './challenges/interactive-rating-component/InteractiveRatingComponent.tsx'
    )
)
const NftPreviewCardComponent = lazy(
  () =>
    import(
      './challenges/nft-preview-card-component/NftPreviewCardComponent.tsx'
    )
)

const OrderSummaryComponent = lazy(
  () => import('./challenges/order-summary-component/OrderSummaryComponent.tsx')
)

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
  {
    path: '/product-preview-card-component',
    element: <ProductPreviewCardComponent />,
  },
  {
    path: '/interactive-rating-component',
    element: <InteractiveRatingComponent />,
  },
  {
    path: '/nft-preview-card-component',
    element: <NftPreviewCardComponent />,
  },
  {
    path: '/order-summary-component',
    element: <OrderSummaryComponent />,
  },
]

export default routes
