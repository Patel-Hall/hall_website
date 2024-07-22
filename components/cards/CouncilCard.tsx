import { CldImage } from "next-cloudinary";
import React from "react";
import { SocialIcon } from "react-social-icons";

const CouncilCard = (member: {
  imgUrl: string;
  name: string;
  post: string;
  facebookProfile: string;
  linkedinProfile: string;
}) => {
  return (
    <div className="bg-primary w-[300px] h-[400px] rounded-lg">
      <div className="p-5">
        <CldImage
          src={member.imgUrl}
          alt="HCM Profile"
          className="w-auto"
          height={200}
          width={200}
          crop="auto"
        />
      </div>
      <div
        className="w-full flex justify-center uppercase text-lg font-bold text-secondary"
        style={{ fontFamily: "Shango" }}
      >
        {member.name}
      </div>
      <div
        className="w-full flex justify-center uppercase text-md text-secondary"
        style={{ fontFamily: "Shango" }}
      >
        {member.post}
      </div>
      <div className="w-full mt-7 flex flex-row gap-3 justify-center">
        <SocialIcon
          url={member.facebookProfile}
          target="_blank"
          fgColor="#9F212C"
          bgColor="#FFFDD0"
          style={{ height: 30, width: 30 }}
        />
        <SocialIcon
          url={member.linkedinProfile}
          target="_blank"
          fgColor="#9F212C"
          bgColor="#FFFDD0"
          style={{ height: 30, width: 30 }}
        />
      </div>
    </div>
  );
};

export default CouncilCard;
