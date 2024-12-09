import styles from "@/styles/Agenda.module.css";

//Cover pour la page d'accueil

export default function Agenda() {
  return (
    <div className={styles.titre}>
      <p>Un peu de patience, ça arrive</p>
      {/* <div>
        container pour les dates de la saison 2024/2025
        chaque date renvoie à la page du spectacle 
      </div> */}
    </div>
  );
}
