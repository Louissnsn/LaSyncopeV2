"use client";
import styles from "@/styles/Contacts.module.css";
// import Cover from "@/components/Cover";
// import Contact from "@/components/ContactComponent";
import Loader from "@/components/Loader";
export default function Contacts() {
  return (
    <div>
      <Loader />
      <div className={styles.titre}>
        <p>Un peu de patience, ça arrive</p>
      </div>
    </div>
  );
}
