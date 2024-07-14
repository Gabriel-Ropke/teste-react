import { ProjectForm } from "../../components/ProjectForm/ProjectForm";
import styles from "./Project.module.css";
import { Background } from "../../components/Backgound/Background";
import backgroundImage from "../../assets/background project.jpg";

export function Project() {
  return (
    <>
      <div className={styles.projectContent}>
        <Background file={backgroundImage} />
        <div className={styles.formContainer}>
          <ProjectForm />
        </div>
      </div>
    </>
  );
}
