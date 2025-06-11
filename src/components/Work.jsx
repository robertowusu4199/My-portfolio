import ProjectCard from "./ProjectCard"


 const works = [
  {
    imgSrc: '/images/medtrack.png',
    title: "Medtrack",
    description: "At MedTrack, we're creating a progressive health-data solution for Africa's 1 billion citizens by decentralizing health data and making it more accessible to patients and healthcare providers.",
    projectLink: 'https://medtrack.africa'
  },
  {
    imgSrc: '/images/kendal.png',
    title: "Kendal AI",
    description: "Kendal AI is a real estate CRM for agencies and brokers that uses AI to boost lead conversion, marketing, and client management. Key features include WhatsApp integration and listing management.",
    projectLink: 'https://pixstock-official.vercel.app/'
  },
  {
    imgSrc: '/images/soccersm.png',
    title: "Soccersm",
    description: "An AI Platform For Soccer Prediction Tips and Web3 Games. Soccersm is an AI tool where you can request and get pre-match predictions with high accuracy and detailed analysis for all major leagues and competitions.",
    projectLink: ''
  },
  {
    imgSrc: '/images/ocqfund.png',
    title: "Ocqfund",
    description: "Ocqfund is a platform that gives trading talents the opportunity to manage funds and earn a percentage of the profits they generate. It's a platform that gives traders access to funds to trade with.",
    projectLink: 'https://github.com/codewithsadee-org/wealthome'
  },
  {
    imgSrc: '/images/rehobothimmigration.png',
    title: "Rehoboth Immigration",
    description: "Rehoboth Immigration is an immigration consultancy firm that specializes in helping people migrate to US. They offer a range of services including Express Entry, Study Permit, Work Permit, and more.",
    projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Pixstock',
    description: "Pixstock is a modern, visually appealing portfolio application designed to showcase creative projects and professional work in an elegant and organized way. The app features a smooth user experience with intuitive navigation.",
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  },
];


const Work = () => {
    return (
      <section id="home" className="w-full">
  <div>
    <h1 className="mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-bricolageGrotesque text-center lg:text-left">
      FEATURED <br /> PROJECTS
    </h1>

    <div className="flex flex-col gap-12">
      {works.map(({ imgSrc, title, description, projectLink }, key) => (
        <ProjectCard
          key={key}
          imgSrc={imgSrc}
          title={title}
          description={description}
          // tags={tags}
          projectLink={projectLink}
        />
      ))}
    </div>
  </div>
</section>

    );
  };
  
export default Work