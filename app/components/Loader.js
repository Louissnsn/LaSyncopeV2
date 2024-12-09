import styles from "@/styles/Loader.module.css";
import { useState, useEffect } from "react";

//Loader component
const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule le chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Temps simulé pour le chargement (3s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className={styles.preloader}>{/* Div qui recouvre l'écran */}</div>
      )}
    </>
  );
};

export default Preloader;
