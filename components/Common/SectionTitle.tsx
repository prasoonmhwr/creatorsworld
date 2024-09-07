const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-5xl font-bold !leading-snug text-black dark:text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg mt-10">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;