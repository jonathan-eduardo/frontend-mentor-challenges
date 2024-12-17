import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import routes from './routes.tsx'
import './index.css'
const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
)
