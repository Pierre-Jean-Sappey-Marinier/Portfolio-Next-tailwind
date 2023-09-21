import { useRef } from "react";
import Image from "next/image";

const confortableSkillsData = [
  { name: "JavaScript", src: "/images/logo/js.png" },
  { name: "React.js", src: "/images/logo/react.png" },
  { name: "Next.js", src: "/images/logo/nextjs.png" },
  { name: "HTML 5", src: "/images/logo/html.png" },
  { name: "CSS", src: "/images/logo/css.png" },
  { name: "Sass", src: "/images/logo/sass.png" },
  { name: "Webpack", src: "/images/logo/webpack.png" },
];

const familiarSkillsData = [
  { name: "Tailwind CSS", src: "/images/logo/tailwind.png" },
  { name: "MongoDB", src: "/images/logo/mongodb.png" },
  { name: "Mongoose", src: "/images/logo/mongoose.png" },
  { name: "WordPress", src: "/images/logo/wordpress.png" },
  { name: "MySQL", src: "/images/logo/mysql.png" },
];

const toolsData = [
  { name: "NPM", src: "/images/logo/npm.png" },
  { name: "DevTools", src: "/images/logo/chromedevtools.png" },
  { name: "VS Code", src: "/images/logo/vscode.png" },
  { name: "Slack", src: "/images/logo/slack.png" },
  { name: "Figma", src: "/images/logo/figma.png" },
];

const Skill = ({ name, src }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-12 w-12 relative">
        <Image
          src={src}
          alt={name}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <p className="mt-1 text-sm font-semibold">{name}</p>
    </div>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <>
      <div className="text-center ">
        <h1 className="text-4xl font-bold mt-16 mb-8">{title}</h1>
      </div>
      <div className="w-full mx-auto flex items-center space-x-16 justify-center">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} src={skill.src} />
        ))}
      </div>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <SkillCategory title="Confortable" skills={confortableSkillsData} />
      <SkillCategory title="Familier" skills={familiarSkillsData} />
      <SkillCategory title="Outils" skills={toolsData} />
    </>
  );
};

export default Skills;
