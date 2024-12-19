import styles from "@/styles/Agenda.module.css";
import Cover from "@/components/Cover";
import nobel2 from "../../../public/images/Spectacles/Nobel/nobel2.jpeg";
import { data1 } from "@/data/spectaclesData";
export default function Agenda() {
  const datesEcole = data1.ecoledete.dates?.aVenir[0].représentations;
  const datesPoissons =
    data1.leventredespoissons.dates?.aVenir[0].représentations;
  const datesNobel = data1.prixnobeldelamour.dates?.aVenir[0].représentations;
  const datesLoup = data1.quandleloup.dates?.aVenir[0].représentations;

  const agenda = ["AGENDA", "Saison 2024-2025"];
  const titles = [
    "Tout ce qu'il y a dans le ventre des poissons",
    "École d'été",
    "Quand le loup n'y est plus",
    "Prix Nobel de l'amour",
  ];
  return (
    <>
      <Cover src={nobel2} title={agenda} altText="Photographie du spectacle" />
      <div className={styles.parent}>
        <div className={styles.container}>
          {datesEcole.length > 0 &&
            datesEcole?.map((dataEcole, index) => {
              return <div key={index}>{dataEcole.représentations}</div>;
            })}
          {datesPoissons.length > 0 &&
            datesPoissons?.map((dataPoissons, index) => {
              return <div key={index}>{dataPoissons.représentations.lieu}</div>;
            })}
          {datesNobel.length > 0 &&
            datesPoissons.map((dataNobel, index) => {
              return <div key={index}> {dataNobel.représentations.lieu}</div>;
            })}
          {datesLoup.length > 0 &&
            datesLoup.map((dataLoup, index) => {
              console.log(dataLoup.date.includes("Mercredi"));
              return (
                <div className={styles.content} key={index}>
                  <div className={styles.title}>{titles[2]}</div>
                  <div className={styles.divider}></div>
                  <div className={styles.subtitle}> {dataLoup.date}</div>
                  <div className={styles.divider}></div>
                  <a
                    href="https://www.les3t.com/spectacles/quand-le-loup-ny-est-plus"
                    className={styles.subtitle}
                  >
                    {dataLoup.lieu}
                  </a>
                  <div className={styles.divider}></div>
                  <p className={styles.eventLocation}>Saint-Denis (93)</p>
                  {dataLoup.date.includes("Mercredi") ? (
                    <p className={styles.time}>14h30</p>
                  ) : (
                    <p className={styles.time}>16h</p>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
