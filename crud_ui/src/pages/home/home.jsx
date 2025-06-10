import React from "react";
// import MyCarousel from "C:/Users/user/Desktop/crud_ui/src/pages/home/carousel/Carousel.jsx";
// import Section2 from "C:/Users/user/Desktop/crud_ui/src/pages/home/homesection2/Section2.jsx";

// import Footer from "C:/Users/user/Desktop/crud_ui/src/pages/home/footer/Footer.jsx";
// import Header from "C:/Users/user/Desktop/crud_ui/src/pages/home/header/Header.jsx"
// import MyCarousel from "./carousel/Carousel";
// import Section2 from "./homesection2/Section2";
// import Footer from "./footer/Footer";
// import Header from "./header/Header";

// ✅ Correct relative paths
import Section2 from "./homesection2/Section2";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function home() {
  return (
    // <div>home</div>
     <div>
      <Header/>
      {/* <MyCarousel /> */}
      <Section2 />
      {/* <Section3
        image="https://jamaicaclassifiedonline.com/images/2019/02/16/65510/apple-macbook-pro-133-l3t8wgiu_1.jpg"
        width="500"
        title="Macbook Pro"
      /> */}
     
      <Footer />
      <h1>hii</h1>
    </div>
  )
}

export default home