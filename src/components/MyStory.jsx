import React from 'react'
import Skills from './Skills'
import Experiences from './Experiences'

const MyStory = () => {
  return (
    <div className="flex flex-col gap-6 text-white/80 lg:text-lg font-medium font-bricolageGrotesque leading-[145%]">
        <h1 className="mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight font-bricolageGrotesque text-center lg:text-left">
            MY STORY
        </h1>
          <p>
            I’m a Full Stack Developer with over 6+ years of experience,
            specializing in modern technologies like Go, JavaScript, TypeScript,
            React, Next.js, Node.js, SQL and NoSQL. I’ve built and maintained
            scalable, fast, and user-friendly web applications, with hands-on
            experience in blockchain development, including decentralized apps,
            smart contracts, and integrating web apps with blockchain
            ecosystems.
          </p>
          <p>
            I excel at developing RESTful and GraphQL APIs, optimizing web performance, and
            collaborating with others to meet user and business needs. I’m
            well-versed in agile methodologies, version control systems like
            Git, and solving complex technical challenges within tight
            deadlines.
          </p>
          <p>
            I’m passionate about delivering quality results and building
            impactful tools and platforms. I focus on balancing technical
            precision with exceptional user experiences, always striving to
            drive innovation and solve real-world problems.
          </p>

          <Skills />

          <Experiences />
        </div>
  )
}

export default MyStory