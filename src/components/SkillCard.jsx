const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={'flex items-center gap-3 ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group'
     + classes}>
        <figure className="bg-zinc-700/50 rounded-lg
        overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900
        transition-colors">
            <img 
            src={imgSrc}
            width={32}
            height={32}
            alt= {label}
            />
        </figure>

        <div>
            <h1>{label}</h1>

            <p className="">
                {desc}
            </p>
        </div>
    </div>
  )
}

export default SkillCard