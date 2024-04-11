import styles from "@/app/ui/components/Box/box.module.scss";
import { HTMLProps } from "react";

interface BoxProps extends HTMLProps<HTMLDivElement> {}

export default function Box({ children }: BoxProps) {
  return <div className={styles.box}>{children}</div>;
}
