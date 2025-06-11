import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Coding Language",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/skills/typescript.svg",
    label: "Typescript",
    desc: "Coding Language",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/skills/postgresql.svg",
    label: "Postgres",
    desc: "Database",
  },
  {
    imgSrc: "/skills/graphql.svg",
    label: "Graphql",
    desc: "Server-side Runtime",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
];

const Skills = () => {
  return (
    <section>
      <div>
        <h1 className="mb-10 mt-20  text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-bricolageGrotesque text-center lg:text-left">
        SKILLS AND <br /> TECHSTACK
        </h1>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
            {
                skillItem.map(({imgSrc, label, desc}, Key) => (
                    <SkillCard
                    key={Key}
                    imgSrc={imgSrc} 
                    label={label}
                    desc={desc}
                      
                    />
                ))
            }
        </div>
        </div>
    </section>
  )
}

export default Skills