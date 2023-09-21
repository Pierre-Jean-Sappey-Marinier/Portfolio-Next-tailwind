import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/pj2.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>Portfolio Built with Nextjs | About Page</title>
        <meta
          name="description"
          content="Learn more about Pierre-Jean Sappey-Marinier, a Next.js developer with a passion for 
        creating innovative solutions. Discover tips for building a developer portfolio and insights on 
        full-stack development, front-end development, and back-end development."
        />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Qui suis-je ?"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 mb-52">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHIE
              </h2>
              <p className="font-medium ">
                Bonjour, je suis <strong>Pierre-Jean</strong>, un développeur
                web avec un an d&apos;expérience. Passionné par la création
                d&apos;expériences numériques belles, fonctionnelles et centrées
                sur l&apos;utilisateur, je suis toujours à la recherche de
                moyens nouveaux et innovants pour donner vie aux visions de mes
                clients.
              </p>
              <p className="my-4 font-medium">
                En tant que développeur junior, ma reconversion professionnelle
                m&apos;a dirigé vers les technologies React, JavaScript, Next.js
                et TypeScript. Fort de ces compétences, je conçois et développe
                des interfaces utilisateur réactives.
              </p>
              <p className="font-medium">
                Que je travaille sur un site web, une application mobile ou tout
                autre produit numérique, j&apos;apporte mon engagement envers
                l&apos;excellence en matière de développement et ma philosophie
                centrée sur l&apos;utilisateur à chaque projet sur lequel je
                travaille. J&apos;attends avec impatience l&apos;opportunité de
                mettre mes compétences et ma passion au service de votre
                prochain projet.
              </p>
            </div>

            {/* Après avoir commencé ma carrière dans le domaine des ressources humaines, j'ai acquis des compétences solides en communication et en écoute, ainsi qu'une bonne capacité d'adaptation.

Toujours curieuse de découvrir de nouveaux domaines et souhaitant constamment acquérir de nouvelles connaissances, j'ai choisi de me reconvertir dans le domaine du développement web afin de concilier métier passionnant, créatif et challengeant.

Ainsi, j'ai intégré Ada Tech School en janvier 2023, dans le but de me former en développement Full Stack. J'ai été séduite par la "vision" d'Ada tech School, une école inclusive dans laquelle nous apprenons à apprendre et "par le faire".

Je suis à la recherche d'une opportunité d'alternance de 12 mois à partir d'octobre 2023 afin de mettre en pratique mes compétences et continuer à acquérir des connaissances dans le domaine du développement web.

Je suis motivée à contribuer activement au succès de mon entreprise d'accueil tout en continuant à apprendre et à évoluer professionnellement. Je suis ouverte à toutes les opportunités qui me permettraient de réaliser mon potentiel et de faire une différence au sein de votre entreprise.

N'hésitez pas à me contacter si vous souhaitez en savoir plus sur mon parcours ou discuter de toute collaboration potentielle. */}

            <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />

              {/* Au cours de mes formations et expériences professionnelles, j'ai acquis diverses compétences, y compris des compétences comportementales, aussi bien dans des grandes structures que des petites entreprises.

Je suis actuellement en formation pour développer mes compétences techniques en utilisant différents outils et langages. Mon objectif est de devenir une développeuse fullstack polyvalente.

J'ai une solide base en développement web, maîtrisant des langages tels que JavaScript, HTML et CSS, ainsi que des frameworks comme React.js et Node.js. J'ai également des connaissances en bases de données, notamment avec MySQL et MongoDB.

Je suis une apprenante passionnée, toujours ouverte aux nouveaux défis. Ma capacité à m'adapter rapidement et mon approche proactive me permettent de m'engager pleinement dans des projets complexes et de trouver des solutions créatives. */}

              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="Codebucks"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={1} />+
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Clients satisfaits
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={10} />+
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Projets complétés
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={1} />+
                </span>
                <h2
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Années d&apos;expérience
                </h2>
              </div>
            </div>
          </div>
          <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
            Compétences
          </h2>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
