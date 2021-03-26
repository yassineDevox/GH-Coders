import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404Page from "../pages/error404-page";
import LmsPage from "../pages/lms-page";

import ProductsPage from "../pages/manege-product-page";
import RegisterPage from "../pages/register/register-page";
import { AuthProvider } from "../shared/auth/auth-context";
import LoginPage from "./../pages/login/login-page";

import clientInfoPage from "../pages/clientInfoPage"
import SettingPage from "./../pages/setting-page"
import ProductPage from "../pages/manege-product-page"
import CategoriePage from "../pages/manage-categorie-page";
import adminPage from "../pages/adminPage";
import OrderPagep from "../pages/order-manage-page";
import homePage from "../pages/user/home-page";


export default function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
        <Route path="/setting" component={SettingPage} />
        <Route path="/home" component={homePage} />
        <Route path="/order" component={OrderPagep} />
        <Route path="/clientInfo" component={clientInfoPage} />
        <Route path="/categorie" component={CategoriePage} />
        <Route path="/product" component={ProductPage} />
        <Route path="/register" component={RegisterPage} />
        <Route exact path="/" component={LoginPage} />       
        <Route path="/products" component={ProductsPage} />
        <Route path="/adminDash" component={adminPage} />
        <Route path="*" component={Error404Page} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
