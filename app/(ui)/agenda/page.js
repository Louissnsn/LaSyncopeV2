import styles from "@/styles/Agenda.module.css";
import Cover from "@/components/Cover";
import nobel2 from "../../../public/images/Spectacles/Nobel/nobel2.jpeg";

export default function Agenda() {
  const agenda = ["AGENDA"];
  return (
    <>
      <Cover src={nobel2} title={agenda} altText="Photographie du spectacle" />
      <div className={styles.parent}>
        <div className={styles.datesContainer}>
          <p>2025</p>
          <p>date2</p>
          <p>date3</p>
        </div>
      </div>
    </>
  );
}
