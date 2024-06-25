import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



import Layout from '@/layout';
import NotFoundPage from '@/pages/not-found-page';


const CourseListPage = lazy(() => import('@/pages/courses/list-page'))
const CourseCreateEditPage = lazy(() => import('@/pages/courses/create-edit-page'))

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/courses',
        element: <CourseListPage />,
      },
      {
        path: '/courses/detail/:id',
        element: <CourseCreateEditPage />,
      },
    ],
  },
])

export default function RouterDOMProvider() {
  return <RouterProvider router={routers} />
}
