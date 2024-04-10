import { HTMLProps } from "react";
import styles from "@/app/ui/components/Container/container.module.scss";

interface ContainerProps extends HTMLProps<HTMLDivElement> {}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return <div className={styles.container + ` ${className}`}>{children}</div>;
}
