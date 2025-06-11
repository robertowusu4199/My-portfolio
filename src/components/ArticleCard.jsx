const ArticleCard = ({ title, description, image, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col max-w-[500px] w-full px-4 py-6 rounded-2xl bg-zinc-800/30 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-700/60 transition-colors gap-4 items-stretch"
    >
      {/* Image block */}
      <div className="w-full h-[200px] overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text block */}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-white group-hover:text-orange-400">
          {title}
        </h3>
        <p className="text-base text-white/80 font-bricolageGrotesque">
          {description}
        </p>
      </div>
    </a>
  );
};



export default ArticleCard