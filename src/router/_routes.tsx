import { APP_ROUTES } from ".";

import {
  Home,
  Basket,
  BasketForm,
  Favourite,
  Profile,
  ProfileAccount,
  ProfileCard,
  ProfileOrders,
  ProfileSale,
  BasketOutlet,
  ProductSingle,
  CategoryPage,
  ProfileSaleSingle,
  Compare,
  QuestionsAndAnswers,
  Vacancies,
  Search,
  ProfileAdress,
  AddNewAdress,
  AllProd,
  NewProd
} from "../views";

export const _routes = [
  {
    path: APP_ROUTES.HOME,
    element: Home,
    exact: true,
  },
  {
    path: `${APP_ROUTES.CATEGORY}`,
    element: CategoryPage,
  },
  {
    path: `${APP_ROUTES.PRODUCTSINGLE}/:id`,
    element: ProductSingle,
  },
  {
    path: APP_ROUTES.QUESTIONS,
    element: QuestionsAndAnswers,
  },
  {
    path: APP_ROUTES.ALL_PRODUCTS,
    element: AllProd,
  },
  {
    path: APP_ROUTES.NEW_PRODUCTS,
    element: NewProd,
  },
  {
    path: APP_ROUTES.VACANCIES,
    element: Vacancies,
  },
  {
    path: APP_ROUTES.COMPARE,
    element: Compare,
  },
  {
    path: APP_ROUTES.SEARCH,
    element: Search,
  },
  {
    path: APP_ROUTES.BASKET,
    element: Basket,
  },
  {
    path: APP_ROUTES.BASKET,
    element: BasketOutlet,
    childs: [
      {
        path: APP_ROUTES.BASKET_FORM,
        element: BasketForm,
      },
    ],
  },
  {
    path: APP_ROUTES.FAVOURITE,
    element: Favourite,
  },
  {
    path: APP_ROUTES.PROFILE,
    element: Profile,
  },
  {
    path: APP_ROUTES.PROFILE,
    element: Profile,
    childs: [
      {
        path: APP_ROUTES.PROFILE_ACCOUNT,
        element: ProfileAccount,
      },
      {
        path: APP_ROUTES.PROFILE_ORDERS,
        element: ProfileOrders,
      },
      {
        path: APP_ROUTES.PROFILE_ADRESS,
        element: ProfileAdress,
      },
      {
        path: APP_ROUTES.ADD_NEW_ADRESS,
        element: AddNewAdress,
      },
      {
        path: APP_ROUTES.PROFILE_SALE,
        element: ProfileSale,
      },
      {
        path: APP_ROUTES.PROFILE_SALE_SINGLE,
        element: ProfileSaleSingle,
      },
      {
        path: APP_ROUTES.PROFILE_PAYMENT,
        element: ProfileCard,
      },
    ],
  },
];
