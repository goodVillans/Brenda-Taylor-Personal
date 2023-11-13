"use client";
import { useState, useEffect } from "react";
import Navbar from "./Scenes/navbar";
import Hero from "./Scenes/home";
import Benefits from "./Scenes/benefits";
import MyClasses from "./Scenes/myclasses";
import Contact from "./Scenes/contact";
import Footer from "./Scenes/footer";
import YouTubeVideos from "./Scenes/Youtube";
import { SelectedPage } from "./Shared/types";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [pageTop, setPageTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setPageTop(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setPageTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // app class routed @ globals.css
    <main className="app bg-white-main">
      <Navbar
        pageTop={pageTop}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Hero setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <MyClasses setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <YouTubeVideos setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
    </main>
  );
};

export default Home;
