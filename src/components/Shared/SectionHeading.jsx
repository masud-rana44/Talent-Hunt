const SectionHeading = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">{title}</h2>
      <p className="text-center text-neutral-500">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
