import styles from "@/styles/Distribution.module.css";
import Image from "next/image";
import logo from "../../public/logo/LogoBLANC.png";

export default function Distribution({ distrib }) {
  // console.log(distrib);
  // const distribution = distrib.map((data, i) => {
  //   return (
  //     <div key={i}>
  //       <h3>{data.role}</h3>
  //     </div>
  //   );
  // });
  return (
    <div className={styles.parent}>
      <div className={styles.logoContainer}>
        <Image
          src={logo}
          alt="logo de la Syncope"
          sizes="(max-width: 768px) 80vw, 400px"
          height={500}
          width={300}
        />
      </div>
      <div className={styles.titreContainer}>
        <p className={styles.titre}>DISTRIBUTION</p>
        {/* {distribution} */}
      </div>
      <div className={styles.texteContainer}></div>
    </div>
  );
}
