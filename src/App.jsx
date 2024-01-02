import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import LayoutNav from "./components/Layout/LayoutNav";
import Dashboard from "./pages/Dashboard/Dashboard";
import FavouriteItems from "./pages/FavouritItems/FavouriteItems";
import Shopping from "./pages/Shopping/Shopping";
import UserAccount from "./pages/UserAccount/UserAccount";
import NotFound from "./components/NotFoundPage/NotFound";
import ChatPage from "./pages/DiscussPage/DiscussPage";
import ContactUs from "./pages/ContactUs/ContactUs";
import LoginAndSignin from "./pages/LoginAndSignin/LoginAndSignin";
import SignupPage from "./pages/LoginAndSignin/SignupPage/SignupPage";
import LoginPage from "./pages/LoginAndSignin/LoginPage/LoginPage";

function App() {
  const Routing = createBrowserRouter([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <LayoutNav />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/dashboard/favourites", element: <FavouriteItems /> },
        { path: "/dashboard/shopping", element: <Shopping /> },
        { path: "/dashboard/user-account", element: <UserAccount /> },
        { path: "/dashboard/discuss", element: <ChatPage /> },
        { path: "/dashboard/contact-us", element: <ContactUs /> },
      ],
    },
    {
      path: "/",
      element: <LoginAndSignin />,
      children: [
        { index: true, element: <LoginPage /> },
        { path: "/signup", element: <SignupPage /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return <RouterProvider router={Routing} />;
}

export default App;
