import React from "react";
import MainContainer from "../../components/MainConteiner";
import NewsContainer from "../../components/NewsContainer";
import UpcomingContainer from "../../components/UpcomingContainer";
import AddModule from "../../components/AddModule";
import Footer from "../../components/footer";

function HomePage() {
  return (
    <div className="home-page">
      <MainContainer />
      <NewsContainer />
      <UpcomingContainer />
      <AddModule />
      <Footer />
      {}
    </div>
  );
}

export default HomePage;
