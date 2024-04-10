import Image from "next/image";
import styles from "./page.module.css";
import Heading from "./ui/components/Heading/Heading";
import Container from "./ui/components/Container/container";
import Navbar from "./ui/components/Navbar/navbar";
import HeroSection from "./ui/Section/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
    </main>
  );
}
