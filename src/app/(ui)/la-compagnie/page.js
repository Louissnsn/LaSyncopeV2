import Compagnie from "@/app/components/Compagnie";
import Accueil from "@/app/components/Accueil";
// import styles from "@/app/styles/CompagniePage.module.css";
export default function CompagniePage() {
  console.log("cmpagnie page");
  return (
    <div>
      <Compagnie />
      <Accueil />
    </div>
  );
}

// change navigation --> onglet compagnie ou welcome page ???
// qui va vers quoi ??
