import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboard-page";
import Error404Page from "../pages/error404-page";
import LmsPage from "../pages/lms-page";
import ProductsPage from "../pages/products";
import RegisterPage from "../pages/register/register-page";
import AdminPlace from "../pages/sharedPage";
import { AuthProvider } from "../shared/auth/auth-context";
import LoginPage from "./../pages/login/login-page";
import HomePage from "./../pages/home"
import CategoriesPage from "./../pages/categories"
import ProductPage from "./../pages/products"
import ShoppingCartPage from "./../pages/shopping"
import OrderPage from "./../pages/orderpage"
import SettingPage from "./../pages/setting-page"


export default function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
        <Route path="/setting" component={SettingPage} />
        <Route path="/order" component={OrderPage} />
        <Route path="/cart" component={ShoppingCartPage} />
          <Route path="/product" component={ProductPage} />
          <Route path="/categorie" component={CategoriesPage} />
          <Route path="/home" component={HomePage}/>
          <Route exact path="/" component={LmsPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/admin" component={LoginPage} />
          <Route path="/dash" component={DashboardPage} />          
          <Route path="/products" component={ProductsPage} />
          <Route path="/adminDash" component={AdminPlace} />
          <Route path="*" component={Error404Page} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
