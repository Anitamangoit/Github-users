import React from "react";
import { Info, Navbar, Repos, User, Search } from "../components";
import loadingImg from "../assets/preloader.gif"
import { GithubContext } from "../context/context";

export const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImg} className="loading-img" alt = "loading"/>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};
export default Dashboard;
