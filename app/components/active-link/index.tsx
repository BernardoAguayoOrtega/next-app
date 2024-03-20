"use client"

import Link from "next/link";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  path: string;
  label: string;
  icon?: React.ReactNode;
};

function ActiveLink(props: ActiveLinkProps) {
  const pathName = usePathname();
  const isActive: boolean = props.path === pathName;

  return (
    <Link
      className={`${styles["link"]} ${isActive ? styles["active-link"] : ""}`}
      href={props.path}>
      <span className='flex items-center space-x-2'>
        {props.icon}
        <span>{props.label}</span>
      </span>
    </Link>
  );
}

export default ActiveLink;
