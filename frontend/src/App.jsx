import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Aboutpage } from "./pages/Aboutpage";
import { NavBarMenu } from "./components/NavBarMenu";
import { StickySocialHandleBtn } from "./components/StickySocialHandleBtn";
import { Footer } from "./components/Footer";
import { ContactPage } from "./pages/ContactPage";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme} className="min-h-screen overflow-x-hidden">
      <Header />
      <NavBarMenu />
      <StickySocialHandleBtn />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
