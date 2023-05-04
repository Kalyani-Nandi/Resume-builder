import React, { useState } from "react";
import PorsonalDetails from "./PorsonalDetails";
import { EducationDetails } from "./EducationDetails";
import { Experience } from "./Experience";
import { Project } from "./Project";
import { ExtraDetails } from "./ExtraDetails";
import { saveAs } from "file-saver";
import axios from "axios";
const Main = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Profile Details...
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    website: "",
    twitter: "",
    github: "",
    linkedin: "",
    facebook: "",
    instagram: "",

    // Education Information
    college: "",
    fromyear1: "",
    toyear1: "",
    qualification1: "",
    description1: "",
    school: "",
    fromyear2: "",
    toyear2: "",
    qualification2: "",
    description2: "",

    // Project Information...
    title1: "",
    link1: "",
    projectDescription1: "",
    title2: "",
    link2: "",
    projectDescription2: "",
    title3: "",
    link3: "",
    projectDescription3: "",

    // Experience Information
    institute1: "",
    position1: "",
    duration1: "",
    experienceDescription1: "",
    institute2: "",
    position2: "",
    duration2: "",
    experienceDescription2: "",

    // Extra Information
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    language1:"",
    language2:"",
    language3:"",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",
  });
  const FormTitle = [
    "Personal Details",
    "Education",
    "Experience",
    "Projects",
    "Extras",
  ];
  const ResumeCreate = () => {
    if (page === FormTitle.length - 1) {
      axios
        .post("http://localhost:5000/create-pdf", formData)
        .then(() => {
          axios
            .get("http://localhost:5000/fetch-pdf", {
              responseType: "arraybuffer",
            })
            .then((res) => {
              const pdfBlob = new Blob([res.data], { type: "application/pdf" });
              saveAs(pdfBlob, `${formData.firstname} Resume.pdf`);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const displaySection = () => {
    switch (page) {
      case 0:
        return (
          <PorsonalDetails formData={formData} setFormData={setFormData} />
        );
      case 1:
        return (
          <EducationDetails formData={formData} setFormData={setFormData} />
        );
      case 2:
        return <Project formData={formData} setFormData={setFormData} />;
      case 3:
        return <Experience formData={formData} setFormData={setFormData} />;
      case 4:
        return <ExtraDetails formData={formData} setFormData={setFormData} />;
      default:
        return <div></div>;
    }
  };
  return (
    <div className="w-full mb-10 h-full">
      <div>{displaySection()}</div>
      <div className="w-full flex justify-center gap-12">
        <button
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
          className={`w-20 ${
            page === 0
              ? " cursor-not-allowed bg-slate-400"
              : " hover:bg-white hover:text-black hover:border-gray-800 hover:border-solid "
          } text-white py-2 capitalize bg-slate-500 rounded-[8px] border font-semibold text-base`}
        >
          back
        </button>

        {page === FormTitle.length - 1 ? (
          <button
            onClick={() => {
              ResumeCreate();
            }}
            className="w-40 text-white py-2 capitalize bg-blue-800 rounded-[8px] hover:bg-white hover:text-blue-800 hover:border-blue-800 hover:border-solid border font-semibold text-base"
          >
            Download Pdf
          </button>
        ) : (
          <button
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
            className="w-20 text-white py-2 capitalize bg-blue-800 rounded-[8px] hover:bg-white hover:text-blue-800 hover:border-blue-800 hover:border-solid border font-semibold text-base"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
export default Main;
