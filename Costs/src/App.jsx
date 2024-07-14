import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import { Home } from "./pages/Home/Home";
import { Company } from "./pages/Company/Company";
import { Contact } from "./pages/Contact/Contact";
import { Project } from "./pages/Project/Project";
import { Container } from "./layout/Container";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <header className={styles.header}>
          <Navbar></Navbar>
        </header>
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/company" element={<Company />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/project" element={<Project />}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
