import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="pb-8 md:pb-10 lg:pb-14">
        <div className="w-full h-16 md:h-20 lg:h-28" style={{ background: 'linear-gradient(#221f4a, #00040f)' }}></div>
        <div className="container mt-10 grid grid-cols-1 gap-x-8 gap-y-6  md:grid-cols-[2fr,1fr] lg:grid-cols-[1.5fr,1fr]">

          <div>
            <SectionTitle
              title="Empower your tech content creation with these top features"
              paragraph="We support you in mastering the key elements that not only enhance your reach and visibility but also ensure the consistent delivery of high-quality content."
              width="650px"
            />
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-4  rounded-[6px]  relative group transition duration-200 text-white ">
                Get Started
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
