import React from "react";

const TeamMembers = ({ teamMemberName, teamMemberRole,teamMemberImage,teamMemberImageAlt,teamMemberUrl,columnCount }) => {
    let containerClassName;

    if (columnCount === 3) {
      containerClassName = "group relative h-[385px] w-1/3 overflow-hidden rounded-lg max-md:h-[300px] max-md:w-[48%] max-sm:h-[250px] max-sm:w-[47%]"; 
    } else if (columnCount === 4) {
      containerClassName = "group relative h-[281px] w-[255px] overflow-hidden rounded-lg max-lg:w-[30%] max-md:w-[48%] max-sm:h-[250px] max-sm:w-[47%]"; 
    } else {
      containerClassName = "group relative h-[385px] w-1/3 overflow-hidden rounded-lg max-md:h-[300px] max-md:w-[48%] max-sm:h-[250px] max-sm:w-[47%]"; 
    }

    const bottomPosition = columnCount === 4 ? "absolute bottom-0 flex w-full items-center justify-between p-4 max-lg:p-2" : "absolute bottom-0 flex w-full items-center justify-between py-6 pl-8 pr-[46px] max-lg:p-4 max-sm:items-end max-sm:p-2";
  return (
    <a
      href={teamMemberUrl}
      target="_blank"
      className={containerClassName}
    >
      <figure className="h-full overflow-hidden transition-all delay-200 duration-200 ease-in-out before:absolute before:left-0 before:top-0 before:size-full before:bg-team-image-shadow before:bg-cover group-hover:scale-105">
        <img
          src={teamMemberImage}
          alt={teamMemberImageAlt}
          class="size-full object-cover object-top"
        />
      </figure>
      <div className={bottomPosition}>
        <div>
          <h4 className="font-sans text-xl leading-[25.6px] tracking-[0.4px] text-white font-wght-600 max-lg:text-xl max-lg:leading-[25.6px] max-lg:tracking-[0.4px] max-sm:text-base">
            {teamMemberName}
          </h4>
          <p className="pt-0.5 font-sans text-base leading-[21px] tracking-[0.224px] text-[rgba(255,255,255,0.80)] font-wght-480 max-md:text-sm max-sm:leading-[20.96px] max-sm:tracking-[0.224px]">
            {teamMemberRole}
          </p>
        </div>
        <figure className="size-6 max-sm:size-5">
          <img src="../../images/About/svg/logo-linkedin.svg" alt="Linked in" />
        </figure>
      </div>
    </a>
  );
};

export default TeamMembers;
