import styles from "@/styles/Pauline.module.css";
import photoPauline from "../../public/images/118.webp";
import Image from "next/image";
export default function Pauline() {
  return (
    <div className={styles.parent}>
      <div className={styles.photoContainer}>
        <p className={styles.nom}>
          PAULINE
          <span className={styles.nomFamille}>LEGÖEDEC</span>
        </p>
        <Image
          src={photoPauline}
          alt="Photo de Pauline"
          fill
          style={{
            borderRadius: "25px",
            objectFit: "cover",
            minWidth: "400px",
          }}
        />
      </div>
      <div className={styles.bioTitle}>
        <p>B I O </p>
      </div>
      <div className={styles.bio}>
        <p className={styles.texteBio}>
          C’est en pratiquant d’abord le cirque et la musique que Pauline aborde
          le spectacle vivant. Elle découvre ensuite le théâtre au sein de la
          compagnie SourouS dirigée par Marcos Malavia et Muriel Roland puis de
          la compagnie Cousin d’Edgar en suivant l’enseignement de Gaëtan Peau.{" "}
        </p>
        <p className={styles.texteBio}>
          Ses études supérieures se divisent entre une CPGE littéraire option
          théâtre et des projets théâtraux et dansés. En 2016, elle peaufine sa
          formation polyvalente en étudiant le théâtre durant un an à Minsk
          (Belarus) où elle renoue avec le chant, le piano, l’acrobatie et
          découvre véritablement la danse. Au retour, elle se forme deux ans au
          LFTP où elle rencontre Mathilde Bellin. En 2019, elle co-fonde deux
          compagnies dont la Syncope grâce à laquelle elle fait naître École
          d’été.
        </p>
        <p className={styles.texteBio}>
          En parallèle, Pauline s’investit dans des structures qui mènent des
          actions culturelles telles que les CEMÉA et le TDI, elle donne des
          lectures et s’essaie à la performance avec « Les mariés, même » de
          Clédat et Petitpierre.
        </p>
      </div>
    </div>
  );
}