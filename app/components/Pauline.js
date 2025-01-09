import styles from "@/styles/Pauline.module.css";
import photoPauline from "../../public/images/118.webp";
import Image from "next/image";
export default function Pauline() {
  return (
    <div className={styles.paulineContainer}>
      <div className={styles.photoContainer}>
        <Image
          src={photoPauline}
          alt="Photo de Pauline"
          fill
          placeholder="blur"
          style={{
            borderRadius: "20px",
            objectFit: "cover",
            minWidth: "250px",
          }}
        />
        <div className={styles.nomContainer}>
          <p className={styles.nom}>PAULINE</p>
          <span className={styles.nomFamille}>LEGÖEDEC</span>
        </div>
      </div>
  
      <div className={styles.bio}>
      <div className={styles.bioTitle}>
        <p>B I O </p>
      </div>
        <p className={styles.texteBio}>
          Après avoir suivi une classe préparatoire littéraire option théâtre,
          Pauline Legoëdec se forme en tant que comédienne au sein d&apos;une
          école de théâtre pluridisciplinaire à Minsk au Bélarus puis dans une
          école privée de Montreuil où elle bénéficie des interventions de
          Frédéric Jessua, Lorraine de Sagazan, Thomas Bouvet, du Collectif du
          Grand Cerf Bleu.
        </p>
        <p className={styles.texteBio}>
          En 2019, elle co-fonde et dirige artistiquement La Syncope avec
          Mathilde Bellin, elle y est comédienne et co-metteuse en scène. Elle a
          travaillé pour les CEMÉA au cours de plusieurs festivals
          d&apos;Avignon et s&apos;est essayée à la performance avec les
          artistes Clédat et PetitPierre.
        </p>
        <p className={styles.texteBio}>
          Aujourd&apos;hui, elle travaille en tant que comédienne pour plusieurs
          collectifs dont Sorcières&cie, produit par le Bureau des filles. C&apos;est
          avec cette compagnie qu&apos;elle jouera dans <em>L&apos;ouvrir </em>de Morgan Janoir au
          11, festival d&apos;Avignon 2025. Pauline Legoëdec est par ailleurs
          co-coordinatrice du T.D.I. - Théâtre à Durée Indéterminée, 20e - lieu
          membre du réseau Actes If qui accueille des compagnies en résidence.
          Elle assiste à la mise en scène Paul Balagué pour le prochain
          spectacle de la Compagnie en Eaux Troubles, <em>Le Seigneur des
          porcheries</em>, qui sera créé en mai 2025 à la MC93.
        </p>
      </div>
    </div>
  );
}
