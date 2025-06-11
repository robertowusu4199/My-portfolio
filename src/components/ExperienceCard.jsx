const ExperienceCard = ({ organization, duration, details }) => {
  const isList = details.includes('- ');

  const detailItems = isList
    ? details
        .split('\n')
        .map(line => line.replace(/^- /, '').trim())
        .filter(line => line.length > 0)
    : [];

  // Add top margin only if the organization is not "MEDTRACK"
  const headingMargin = organization !== "MEDTRACK" ? "mt-10" : "";

  return (
    <div>
      <div>
        <h2 className={`title text-2xl text-white text-left font-bricolageGrotesque ${headingMargin}`}>
          {organization}
        </h2>
        <h3 className="text-white text-sm mt-1">{duration}</h3>

        {isList ? (
          <ul className="list-disc pl-5 text-white/80 text-sm space-y-1 mt-2">
            {detailItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-white/80 text-sm mt-2">{details}</p> // Smaller paragraph text
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;