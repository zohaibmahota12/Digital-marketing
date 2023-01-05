import "./App.css";
import Navbar1 from "./components/navbar1/Navbar1";
import Navbar from "./components/navbar/Navbar";
import Consult from "./pages/consult/Consult";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import InnerFooter from "./components/innerfooter/InnerFooter";
import Contect from "./pages/contect/Contect";
import Services from "./pages/service/Services";
import Home from "./pages/home/Home";
import Service from "./components/servicec/Service";
// import logo from "./images/main.png";
import Cards from "./components/cards/Cards";
import Servicecard from "./components/servicecard/Servicecard";
import logo from "./images/digital.png";
import Page404 from "./components/Page404";

// import slider from "../../images/myimg/slider.gif"


import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentMarks from "./StudentMarks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar1 />
        <Navbar mylogo={logo} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/*" element={<Page404 />} />
        
        </Routes>
      </BrowserRouter>

      {/* <Button/> */}

      {/* <Services/> */}

      {/* <Contect/> */}
     {/* <StudentMarks/> */}
      <InnerFooter />
      <Footer />
     
		<div>
			<a href="#" class="scrollToTop text-center" >
				<i class="scroll-fa fa fa-angle-up" aria-hidden="true"></i>
			</a>
		</div>
    </>
  );
}

export default App;
