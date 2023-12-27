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

function App() {
  const Routing = createBrowserRouter([
    {
      path: "/Home",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/Dashboard",
      element: <LayoutNav />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/Dashboard/Favourites", element: <FavouriteItems /> },
        { path: "/Dashboard/Shopping", element: <Shopping /> },
        { path: "/Dashboard/User-account", element: <UserAccount /> },
        { path: "/Dashboard/Discuss", element: <ChatPage /> },
        { path: "/Dashboard/contact-us", element: <ContactUs /> },
      ],
    },
    { path: "/", element: <LoginAndSignin /> },
    { path: "*", element: <NotFound /> },
  ]);
  return <RouterProvider router={Routing} />;
}

export default App;
