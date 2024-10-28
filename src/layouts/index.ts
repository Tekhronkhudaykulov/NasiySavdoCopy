import { lazy } from "react";

const Navbar = lazy(() => import("./navbar/view"));
const Footer = lazy(() => import("./footer/view"));
const MobileNavbar = lazy(() => import("./MobileNavbar/view"));

export { Navbar, Footer, MobileNavbar };
