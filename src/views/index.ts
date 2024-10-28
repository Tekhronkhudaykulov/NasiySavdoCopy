import { lazy } from "react";

const Home = lazy(() => import("./Home/view"));
const CategoryPage = lazy(() => import("./Category/view"));
const ProductSingle = lazy(() => import("./ProductSingle/view"));
const Basket = lazy(() => import("./Basket/Basket"));
const BasketOutlet = lazy(() => import("./Basket/view"));
const ProfileOutlet = lazy(() => import("./Profile/view/ProfileOutlet"));
const BasketForm = lazy(() => import("./Basket/view/BasketForm"));
const Favourite = lazy(() => import("./Favourite/view"));
const Profile = lazy(() => import("./Profile/view"));
const ProfileAccount = lazy(() => import("./Profile/view/ProfileAccount"));
const ProfileOrders = lazy(() => import("./Profile/view/ProfileOrders"));
const ProfileSale = lazy(() => import("./Profile/view/ProfileSale"));
const Compare = lazy(() => import("./Compare/view"));
const Vacancies = lazy(() => import("./Vacancies/view"));
const QuestionsAndAnswers = lazy(() => import("./QuestionsAndAnswers/view"));
const ProfileSaleSingle = lazy(
  () => import("./Profile/view/ProfileSaleSingle")
);
const ProfileCard = lazy(() => import("./Profile/view/ProfileCard"));

export {
  Home,
  CategoryPage,
  ProductSingle,
  Basket,
  BasketOutlet,
  BasketForm,
  Favourite,
  Profile,
  ProfileAccount,
  ProfileOrders,
  ProfileSale,
  ProfileCard,
  ProfileSaleSingle,
  ProfileOutlet,
  Compare,
  QuestionsAndAnswers,
  Vacancies,
};
