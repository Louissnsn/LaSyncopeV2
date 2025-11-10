import styles from "@/styles/ContactComponent.module.css";
import { useState } from "react";

export default function ContactComponent() {
  const [clicked, setClicked] = useState(false);

  const handleMailClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // animation courte
    window.location.href = "mailto:syncopecollectif@gmail.com";
  };

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <h1 className={styles.titreContact}>CONTACTS</h1>

        <div className={styles.contactList}>
          <div className={styles.contactItem}>
            <p className={styles.titre}>Directrices de la publication :</p>
            <p className={styles.texte}>Mathilde BELLIN et Pauline LEGÖEDEC</p>
          </div>

          <div className={styles.contactItem}>
            <p className={styles.titre}>Crédits photo :</p>
            <p className={styles.texte}>
              Romane FOER, Mélissandre CARRASCO, Nicolas BLANDIN, Nina LACOUR,
              Marion GERMA
            </p>
          </div>

          <div className={styles.contactItem}>
            <p className={styles.titre}>Développement :</p>
            <a
              className={styles.socialLink}
              href="https://www.louissanson.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Louis SANSON
            </a>
          </div>

          <div className={styles.contactItem}>
            <p className={styles.titre}>Tous droits réservés :</p>
            <p className={styles.texte}>
              L&apos;ensemble des éléments composant ce site, œuvre protégée par
              la législation sur la propriété intellectuelle, sont la propriété
              exclusive de la compagnie La Syncope.
            </p>
          </div>

          <div className={styles.contactItem}>
            <p className={styles.titre}>Hébergement :</p>
            <p className={styles.texte}>
              Le site est hébergé par OVH SAS, situé au 2 rue Kellermann, 59100
              Roubaix, France.
            </p>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactContainer}>
              <div className={styles.contactSection}>
                <p className={styles.titre}>Nous contacter :</p>
                <button
                  className={styles.mailButton}
                  onClick={() =>
                    (window.location.href = "mailto:syncopecollectif@gmail.com")
                  }
                >
                  syncopecollectif@gmail.com
                </button>
              </div>

              <div className={styles.contactSection}>
                <p className={styles.titre}>Nous suivre :</p>
                <div className={styles.socialLinks}>
                  <a
                    href="https://www.instagram.com/la.syncope/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/LaSyncope/?locale=fr_FR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
