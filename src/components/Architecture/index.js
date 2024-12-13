import React from "react";
import styles from "./ArchitectureSection.module.css";

const ArchitectureSection = () => {
  return (
    <section className={styles.architectureSection}>
      <div className={`container ${styles.container}`}>
        {/* Título */}
        <h2 className={styles.title}>
        Connecting the real world with blockchain
        </h2>

        {/* Imagen */}
        <div className={styles.imageBlock}>
          <img
            src="/img/neurai_tech.png"
            alt="Neurai diagram"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;

