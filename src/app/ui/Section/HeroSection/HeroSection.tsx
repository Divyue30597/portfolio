import Image from "next/image";
import svg from "/public/developer.svg";
import styles from "@/app/ui/Section/HeroSection/heroSection.module.scss";
import Heading from "../../components/Heading/Heading";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div>
        <Heading heading="h1">👋 Hey I'm,</Heading>
        <Heading heading="h2">Divyue Sharma</Heading>
        <p>
          I'm a <strong>software engineer</strong> based in{" "}
          <strong>Jaipur, India</strong>. I enjoy creating things that live on
          the internet, whether that be
          <strong> websites, applications, or anything</strong> in between. I've
          managed to gain a{" "}
          <strong>decent amount of experience and valuable knowledge</strong>{" "}
          from all different kinds of fields throughout my projects/work.
        </p>
        <div></div>
      </div>
      <div className={styles.image_section}>
        <Image
          className="image"
          src={svg}
          alt="Developer floating in air"
          priority
        />
      </div>
    </section>
  );
}
