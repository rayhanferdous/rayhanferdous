import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectShowcaseCard({
  id,
  title,
  description,
  image,
  stack,
  livepreview,
  get_code,
}) {
  console.log(stack);
  return (
    <div className="h-full ">
      <div className="relative">
        <div className="max-sm:hidden absolute right-3 sm:top-12 lg:top-5 opacity-10 z-10 text-white font-bold sm:text-8xl lg:text-[130px] leading-snug">
          {id}
        </div>
        <div className="absolute -top-40 w-full sm:w-9/12 h-352 z-[10] rounded-20px overflow-hidden">
          <img src={image} alt="rayhan_ferdous" />
        </div>
        <div className="mt-40 w-full h-fit pb-8 xl:pb-0 xl-2xl:h-469 rounded-20px bg-[#112240]">
          <div className="px-8 pb-8 pt-36">
            <h3 className="mt-20 font-semibold text-lg text-projectsTitle">
              {title}
            </h3>
            <p className="leading-7 text-secondery mt-2 mb-9">{description}</p>
            <div className="flex items-center gap-10 max-md:flex-col md-lg:flex-row justify-between">
              <div className="flex gap-5">
                {stack.map((item, index) => (
                  <Image
                    width={29}
                    height={29}
                    src={item}
                    alt="stack"
                    key={index}
                  />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Link href={get_code} target="_blank">
                  <button className="w-[121px] h-[46px] rounded-5px font-medium text-white bg-btnSecondery">
                    Get Code
                  </button>
                </Link>
                <Link href={livepreview} target="_blank">
                  <button className="w-[121px] h-[46px] rounded-5px font-medium text-white bg-btnPrimary">
                    Live Preview
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcaseCard;
