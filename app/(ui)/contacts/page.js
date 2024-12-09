"use client";
import styles from "@/styles/Contacts.module.css";
// import Cover from "@/components/Cover";
// import Contact from "@/components/ContactComponent";
import Loader from "@/components/Loader";
import Cover from "@/components/Cover";

export default function Contacts() {
  return (
    <div>
      <Loader />
      {/* cover component à ajouter */}
      <div className={styles.titre}>
        <p>Un peu de patience, ça arrive</p>
      </div>
    </div>
  );
}
