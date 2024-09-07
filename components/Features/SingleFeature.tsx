import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full flex justify-around">
      <div className="wow fadeInUp w-[470px] p-2.5 rounded-2xl" data-wow-delay=".15s" style={{background:"linear-gradient(116deg, #35333D, #171320,#171320) "}}>
        <div className="w-full flex items-center h-28">
        <div className="mx-1 flex h-[64px] w-[71px] items-center justify-center rounded-full text-amber-300 ">
          {icon}
        </div>
        <div>
        <h4 className="ml-4 mb-2 text-lg font-bold text-black dark:text-white sm:text-lg lg:text-lg xl:text-lg">
          {title}
        </h4>
        <p className="ml-4 max-w-[400px] text-base font-medium leading-relaxed text-white opacity-50">
          {paragraph}
        </p>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default SingleFeature;
