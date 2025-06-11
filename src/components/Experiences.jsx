import React from 'react'
import ExperienceCard from './ExperienceCard';

const Experience = [
    
  {
    organization: "MEDTRACK",
    duration: "2023 - 2025",
    details:
      "At MedTrack, I am contributing to building a transformative health data solution aimed at improving healthcare across Africa. By helping develop an interoperable system, ensuring secure and efficient access to patient information across healthcare facilities.",
  },
  {
    organization: "CROWDPAD",
    duration: "2023 (Aug - Nov)",
    details: `
- Contributed to a CRM tailored for real estate professionals, enhancing client engagement and lead management.  
- Revamped the listing management system, enabling agents and brokerages to create and update property listings for their websites.  
- Implemented XML integration, allowing clients to generate XML feeds of listings for seamless sharing with external real estate portals and websites.  
- Migrated listing filtering to ElasticSearch, achieving faster, more flexible, and accurate searches.  
- Worked on additional features and updates, leveraging technologies like ElasticSearch, Firebase, Next.js, React, Tailwind CSS, TypeScript, and Node.js.
      `.trim(),
  },
  {
    organization: "HURISOFT",
    duration: "2021 - 2022",
    details: `
- Worked on internal tools and external projects for various clients.
- Developed, tested, and deployed solutions to meet project requirements.
- Improved and updated existing projects to enhance performance and usability.
- Collaborated with teams to create user-facing features and integrate them with back-end logic.
- Ensured websites met objectives like load speed, design, and functionality.
    `.trim(),
  },
  {
    organization: "DEVELOPERS IN VOGUE",
    duration: "2022 (Jul - Sep)",
    details: `
- Created and updated bootcamp curriculum, including assignments, instructional plans, and project ideas.  
- Delivered engaging lectures on web development fundamentals like HTML, CSS, JavaScript, and related tools/frameworks.  
- Conducted code reviews, providing constructive feedback to help students improve their skills.  
- Offered one-on-one support and addressed student questions.  
- Led group projects, guiding students from ideation to deployment.  
- Monitored student progress and assessed performance through assignments, quizzes, and exams.

      `.trim(),
  },
  {
    organization: "FILLY CODER",
    duration: "2020 - 2021",
    details: `
- Designed websites and web applications for various clients.  
- Built layouts using HTML5 and CSS3 based on client specifications.  
- Improved site performance and optimized user experience.  
- Managed hosting and deployed websites live.  
- Delivered design projects on time and within budget, meeting all requirements.
      `.trim(),
  },
];




const Experiences = () => {
  return (
    <section>
      <div>

        <div>
          <div className="h-px w-100 bg-white m-10 mx-auto lg:mx-0 opacity-10"></div>
        </div>


        <h1 className="mb-10 mt-20 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-bricolageGrotesque text-center lg:text-left">
        6+ YEARS OF <br /> EXPERIENCE
        </h1>

        <div className="">
            {
                Experience.map(({organization, duration, details}, Key) => (
                    <ExperienceCard
                    key={Key}
                    organization={organization} 
                    duration={duration}
                    details={details}
                    classes=""   
                    />
                ))
            }
        </div>

        </div>
    </section>
  )
}

export default Experiences