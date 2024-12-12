"use client";
import styles from "@/styles/Contacts.module.css";
import Contact from "@/components/Contact";
import Loader from "@/components/Loader";

export default function Contacts() {
  return (
    <div>
      <Loader />
      <Contact />
    </div>
  );
}
