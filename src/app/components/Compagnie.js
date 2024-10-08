// import styles from "@/app/styles/Compagnie.module.css";
import Image from "next/image";
import welcome from "@/app/public/images/Covers/welcome.webp";
import logo from "@/app/public/logo/logo BLANC.png";
import Cover from "./Cover";
export default function Compagnie() {
  const title = ["LA", "SYNCOPE"];
  console.log("e");
  return (
    <div>
      <Cover image={welcome} altText="page d'accueil" title={title} />
      <Image src={logo} />
    </div>
  );
}
