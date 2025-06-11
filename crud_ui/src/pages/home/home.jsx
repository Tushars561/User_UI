import React, { useState } from "react";
import Section2 from "./homesection2/Section2";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Nav from "../../components/nav/Nav";

function Home() {
  const [showNav, setShowNav] = useState(true); // Bootstrap handles nav so default to true

  return (
    <div className="container-fluid p-0">
      {/* Toggle button optional; Bootstrap handles nav toggle */}
      {/* If you still want a custom toggle, keep the below */}
      

      {showNav && <Nav />}
<Header />
      <main className="mt-4">
        <Section2 />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
