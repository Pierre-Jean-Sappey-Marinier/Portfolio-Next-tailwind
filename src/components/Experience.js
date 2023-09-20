import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Projets
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Kasa"
            company="Openclassrooms"
            companyLink="https://pierre-jean-sappey-marinier.github.io/Kasa/"
            time="2023"
            address="France"
            work="Création d'une single page application responsive en composants fonctionnels sous React.js en utilisant la méthode CRA. Implémentation de routes avec React Router. Intégration dynamique des métadonnées via React-Helmet."
          />

          <Details
            position="Mon Vieux Grimoire"
            company="Openclassrooms (code source)"
            companyLink="https://github.com/Pierre-Jean-Sappey-Marinier/Mon-Vieux-Grimoire"
            time="2023"
            address="France"
            work="Conception de la partie Backend d'une site de notation de livres sous Node.js, express et MongoDB. Sécurisation de la base de donnée par des systèmes authentification dans des middleware."
          />

          <Details
            position="Nina Carducci"
            company="Openclassrooms"
            companyLink="https://pierre-jean-sappey-marinier.github.io/NinacarducciVite/"
            time="2023"
            address="France"
            work="Correction de bugs d'un site web en Javascript. Optimisation de l'application et compilation optimisée avec le serveur de développement Vite. Amélioration du référencement (SEO) et de l'accessibilité du site."
          />

          <Details
            position="VSCode Portfolio"
            company="Pierre-Jean Sappey-Marinier"
            companyLink="https://vscode-portfolio-fawn.vercel.app/"
            time="2023"
            address="France"
            work="Un portfolio minimaliste pour les développeurs, construit avec Next.js et CSS Modules sur le thème de VSCode. Déploiement sur Vercel."
          />

          <Details
            position="Booki"
            company="Openclassrooms"
            companyLink="https://pierre-jean-sappey-marinier.github.io/Site_Booki_Sappey-Marinier_Pierre-Jean/"
            time="2023"
            address="France"
            work="Création de la page d'accueil d'une agence de voyage en HTML et CSS tout en respectant une maquette figma, le web sémantique et la validité générale du code."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
