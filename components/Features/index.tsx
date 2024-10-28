import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="pb-14 md:pb-10 lg:pb-40">
        <div className="w-full h-16 md:h-20 lg:h-28" style={{ background: 'linear-gradient(#221f4a, #0a0a0a)' }}></div>
        <div className="container max-w-[1252px] mt-10 grid grid-cols-1 gap-x-8 gap-y-6  md:grid-cols-[2fr,1fr] lg:grid-cols-[1.5fr,1fr]">

          <div>
            <SectionTitle
              title="Empower Your Video Content To Tell More Stories"
              paragraph="Let your videos work twice as hard. Convert your video content into captivating blog posts instantly, reaching new audiences and boosting your digital presence with AI precision."
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
