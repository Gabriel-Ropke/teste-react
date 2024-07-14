import backgroundImage from "../../assets/background home.png";
import logo from "../../assets/Logo-mangá.png";
import styles from "./Home.module.css";
import { Background } from "../../components/Backgound/Background";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
export function Home() {
  return (
    <>
      <div className={styles.homeContent}>
        <Background file={backgroundImage} />
        <img className={styles.logo} src={logo} alt="" />
        <h1>Froga</h1>
        <p className={styles.noProjectMessage}>
          Comece a gerenciar seus projetos agora mesmo!
        </p>
        <button className={styles.createProject}>
          <Link to="/project">Criar projeto</Link>
        </button>
      </div>
      <Footer />
    </>
  );
}
