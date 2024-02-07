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
import AllDesigns from "./pages/Shopping/AllDesigns/AllDesigns";
import ResidentialDesign from "./pages/Shopping/ResidentialDesign/ResidentialDesign";
import EcommericalDesign from "./pages/Shopping/EcommericalDesign/EcommericalDesign";
import OfficeDesign from "./pages/Shopping/OfficeDesign/OfficeDesign";
import HospitalDesign from "./pages/Shopping/Hospitaldesign/HospitalDesign";
import DesignCardDetails from "./components/CardComponent/DesignCardDetails/DesignCardDetails";
import CartCar from "./pages/CartCar/CartCar";
import ChangePassword from "./pages/UserAccount/ChangePassword/ChangePassword";
import UserInformation from "./pages/UserAccount/UserInFormation/UserInformation";

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
        {
          path: "/dashboard/shopping",
          element: <Shopping />,
          children: [
            { index: true, element: <AllDesigns /> },
            {
              path: "/dashboard/shopping/residential-design",
              element: <ResidentialDesign />,
            },
            {
              path: "/dashboard/shopping/ecommercial-design",
              element: <EcommericalDesign />,
            },
            {
              path: "/dashboard/shopping/office-design",
              element: <OfficeDesign />,
            },
            {
              path: "/dashboard/shopping/hospital-design",
              element: <HospitalDesign />,
            },
          ],
        },
        {
          path: "/dashboard/user-account",
          element: <UserAccount />,
          children: [
            {
              index: true,
              element: <ChangePassword />,
            },
            {
              path: "/dashboard/user-account/user-info",
              element: <UserInformation />,
            },
          ],
        },
        { path: "/dashboard/discuss", element: <ChatPage /> },
        { path: "/dashboard/contact-us", element: <ContactUs /> },
        { path: "/dashboard/cart-car", element: <CartCar /> },
        {
          path: "/dashboard/card-details/:category/:value/:id",
          element: <DesignCardDetails />,
        },
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
