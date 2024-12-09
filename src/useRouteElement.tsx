import { useRoutes } from 'react-router-dom'
import MainPage from './Components/MainPage'
import MainLayout from './Layout'

export default function useRouteElement() {
  const RouteElement = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <MainPage />
        </MainLayout>
      )
    }
  ])
  return RouteElement
}
