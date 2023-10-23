import React from "react";
import { Education } from "../../../typing";

export default function AllEducation({ education }: { education: Education[] }) {
  education = education.sort((a, b) => a.year - b.year );
  return (
    <div className="flex flex-col gap-4 mx-auto md:flex-row md:justify-between md:mx-0">
      {education.map((education) => (
        <div className="flex flex-row gap-4 text-secondary cursor-default items-center">
          <p className="text-xl font-bold font-montserrat rounded-2xl bg-secondary bg-opacity-10 p-6">
            {education.year}
          </p>
          <p className="text-xl font-rnssanz">
            {education.title} - <span className="font-bold">{education.school}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
