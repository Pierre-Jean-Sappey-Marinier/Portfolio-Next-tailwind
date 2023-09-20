import { motion } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import HTML from "../../public/images/logo/html.png";
import JAVASCRIPT from "../../public/images/logo/js.png";
import CSS from "../../public/images/logo/css.png";
import REACT from "../../public/images/logo/react.png";
import NEXT from "../../public/images/logo/nextjs.png";
import TAILWIND from "../../public/images/logo/tailwind.png";
import NPM from "../../public/images/logo/npm.png";
import CHROMEDEVTOOLS from "../../public/images/logo/chromedevtools.png";
import VSCODE from "../../public/images/logo/vscode.png";
import SLACK from "../../public/images/logo/slack.png";
import WEBPACK from "../../public/images/logo/webpack.png";
import FIGMA from "../../public/images/logo/figma.png";
import MONGODB from "../../public/images/logo/mongodb.png";
import SASS from "../../public/images/logo/sass.png";
import MONGOOSE from "../../public/images/logo/mongoose.png";
import WORDPRESS from "../../public/images/logo/wordpress.png";
import MYSQL from "../../public/images/logo/mysql.png";

const Skill = ({ name, x, y }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="cursor-pointer w-max origin-center absolute 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       "
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-16 mb-8">Confortable</h1>
      </div>
      <div className="w-full mx-auto flex items-center space-x-16 justify-center">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={CSS} // Remplacez par le chemin de votre logo HTML5
              alt="HTML5 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">HTML 5</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={TAILWIND} // Remplacez par le chemin de votre logo HTML5
              alt="HTML5 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">HTML 5</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={REACT} // Remplacez par le chemin de votre logo HTML5
              alt="HTML5 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">HTML 5</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={NEXT} // Remplacez par le chemin de votre logo HTML5
              alt="HTML5 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">HTML 5</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={HTML} // Remplacez par le chemin de votre logo HTML5
              alt="HTML5 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">HTML 5</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={JAVASCRIPT} // Remplacez par le chemin de votre logo JavaScript
              alt="JavaScript Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={SASS} // Remplacez par le chemin de votre logo JavaScript
              alt="JavaScript Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={NPM} // Remplacez par le chemin de votre logo JavaScript
              alt="JavaScript Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">JavaScript</p>
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-16 mb-8">Familier</h1>
      </div>
      <div className="w-full mx-auto flex items-center space-x-16 justify-center">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={MONGODB} // Remplacez par le chemin de votre logo HTML5
              alt="HTML5 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">HTML 5</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={TAILWIND} // Remplacez par le chemin de votre logo HTML5
              alt="HTML5 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">HTML 5</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={MONGOOSE} // Remplacez par le chemin de votre logo HTML5
              alt="HTML5 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">HTML 5</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={WORDPRESS} // Remplacez par le chemin de votre logo HTML5
              alt="HTML5 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">HTML 5</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={MYSQL} // Remplacez par le chemin de votre logo HTML5
              alt="HTML5 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">HTML 5</p>
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="text-center">
        <h1 className="text-4xl font-bold mt-16 mb-8">Outils</h1>
      </div>
      <div className="w-full mx-auto flex items-center space-x-16 justify-center">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={NPM} // Remplacez par le chemin de votre logo HTML5
              alt="HTML5 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">HTML 5</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={CHROMEDEVTOOLS} // Remplacez par le chemin de votre logo HTML5
              alt="HTML5 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">HTML 5</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={VSCODE} // Remplacez par le chemin de votre logo HTML5
              alt="HTML5 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">HTML 5</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={SLACK} // Remplacez par le chemin de votre logo HTML5
              alt="HTML5 Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">HTML 5</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={WEBPACK} // Remplacez par le chemin de votre logo JavaScript
              alt="JavaScript Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 relative">
            <Image
              src={FIGMA} // Remplacez par le chemin de votre logo JavaScript
              alt="JavaScript Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
          <p className="mt-1 text-sm font-semibold">JavaScript</p>
        </div>
      </div>
    </>
  );
};

export default Skills;
