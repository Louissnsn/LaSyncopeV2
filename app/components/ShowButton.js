import { useState } from "react";
import styles from "@/styles/ShowButton.module.css";
export default function ShowButton({ children }) {
  const [readMore, setReadMore] = useState(true);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <>
      {readMore ? children.slice(0, 3) : children}
      <span onClick={toggleReadMore} className={styles.showButton}>
        {readMore ? "... voir plus +" : "voir moins -"}
      </span>
    </>
  );
}
