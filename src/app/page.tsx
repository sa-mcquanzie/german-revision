'use client'

import styles from "./page.module.css";
import modules from "./modules";
import Link from "next/link";

const Home = () => {

  return (
    <div id="pageContainer">
      {modules.map((mod) => (
        <div key={mod.id} >
          <Link href={`/module/${mod.id}`}>{mod.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
