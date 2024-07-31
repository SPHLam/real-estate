import HomePage from "./routes/HomePage/homePage"
import ListPage from "./routes/ListPage/listPage"
import Layout from "./routes/layout/layout"
import LoginPage from "./routes/LoginPage/LoginPage"
import SinglePage from "./routes/SinglePage/SinglePage"
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/", 
          element: <HomePage />
        },
        {
          path: "/list", 
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/login",
          element: <LoginPage />
        }
      ]
    }
  ])

  return (
    
    <RouterProvider router={router}/>
  )
}

export default App