const ProjectCard = ({
  imgSrc,
  title,
  description,
  projectLink,
  classes,
}) => {
  return (
    <div
      className={
        "relative flex-col-reverse lg:flex-row mx-auto max-w-7xl lg:max-w-[950px] md:max-w-[650px] px-4 w-full p-8 rounded-2xl bg-zinc-800/30 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-700/60 transition-colors flex gap-10 items-stretch" +
        (classes ? ` ${classes}` : "")
      }
    >
      {/* Left Side: Text + Arrow */}
      <div className="flex flex-col justify-between flex-[1]">
        <div>
          <h3 className="title mb-4 text-2xl text-zinc-100 text-left font-bricolageGrotesque">
            {title}
          </h3>

          <h3 className="description mb-4 text-base font-medium text-zinc-300 text-left">
            {description}
          </h3>
        </div>

        {/* Arrow Icon */}
        <button class="group relative block w-full md:w-full lg:w-auto mt-6 px-6 py-2 bg-amber-600 rounded-full transition-all duration-300 border-[1.5px] border-amber-500
  before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300
  before:shadow-[0px_4px_8px_rgba(0,0,0,0.2)]
  hover:bg-gradient-to-b hover:from-amber-700 hover:via-amber-600 hover:to-amber-500
  hover:before:shadow-[0px_6px_8px_rgba(255,127,80,0.2)]
  active:translate-y-[1px]">
  <div class="relative text-sm font-medium flex items-center justify-between gap-2 text-white">
    <span>View Project</span>
    <span class="material-symbols-rounded text-[20px] leading-none">arrow_forward</span>
  </div>
</button>





      </div>

      <figure className="rounded-xl overflow-hidden flex-[2] min-h-[300px] max-h-[350px]">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="object-cover w-full h-full rounded-xl"
        />
      </figure>


      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
      ></a>
    </div>
  );
};

export default ProjectCard;