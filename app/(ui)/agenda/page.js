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
  const agenda = ["AGENDA"];

  return (
    <>
      <Cover src={nobel2} title={agenda} altText="Photographie du spectacle" />
      <div className={styles.parent}>
        <div className={styles.datesContainer}>
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
              return (
                <div key={index}>
                  {dataLoup.lieu}
                  {dataLoup.date}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
