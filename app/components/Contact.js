import styles from "@/styles/ContactComponent.module.css";
export default function ContactComponent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titreContact}>CONTACTS</h1>
      <div className={styles.publicationContainer}>
        <div className={styles.publication}>
          <p className={styles.titre}>
            Directrices de la publication :
            <br />
          </p>
          <p className={styles.texte}>Mathilde BELLIN et Pauline LEGÖEDEC</p>
        </div>
        <div className={styles.droits}>
          <span className={styles.titre}>Tout droits réservés : </span>
          <br />
          <span className={styles.texte}>
            L&apos;ensemble des éléments composant ce site, œuvre protégée par
            la législation sur la propriété intellectuelle, sont la propriété
            exclusive de la compagnie La Syncope. Toute représentation totale ou
            partielle de ce site, par quelque procédé que ce soit, sans
            l&apos;autorisation expresse de l&apos;exploitant du site est
            interdite et constitue une contrefaçon sanctionnée par les articles
            L.335-2 et suivants du Code de la propriété intellectuelle.
          </span>
        </div>
        <div className={styles.dev}>
          <span className={styles.titre}>Développement :</span>
          <br />
          <span className={styles.texte}>Louis SANSON</span>
        </div>
        <div className={styles.hebergement}>
          <span className={styles.titre}>Hébergement :</span>
          <br />
          <span className={styles.texte}>
            Le site est hébergé par OVH SAS, situé au 2 rue Kellermann, 59100
            Roubaix, France.
          </span>
        </div>
      </div>
    </div>
  );
}
