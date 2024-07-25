import HomePage from "./pages/homePage/homePage"
import {
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom"
import ListPage from "./pages/listPage/listPage"
import Layout from "./pages/layout/layout"
import Login from "./pages/login/login"
import SinglePage from "./pages/singlePage/singlePage"
import ProfilePage from "./pages/profilePage/profilePage"
function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/list",
        element: <ListPage/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/:id",
        element: <SinglePage/>
      },
      {
        path:"/profile",
        element:<ProfilePage/>
      },
    ]
  }
]);
  return (
    
  <RouterProvider router={router}/>
  );
}

export default App