import React from "react";
import {MdEmail} from "react-icons/md"
import {RiPhoneFill,RiTwitterFill} from "react-icons/ri"
import {AiOutlineGlobal,AiFillLinkedin,AiFillGithub} from "react-icons/ai"
import {FaFacebookSquare,FaInstagramSquare} from "react-icons/fa"


const PorsonalDetails = ({formData,setFormData}) => {

  return (
    <div className="w-full py-10 h-full flex justify-center items-center">
      <div className="w-[80%]  shadow-md  h-full">
        <h1 className=" tracking-wide text-gray-700 font-bold text-lg border-b-solid border-b-gray-400 border-b-[2px] py-4 px-16">
          {" "}
          Personal Details
        </h1>

        <div className="grid grid-cols-2 pt-4 px-2 gap-x-4 w-full mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              value={formData.firstname}
              onChange={(e)=>setFormData({...formData, firstname:e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              value={formData.lastname}
              onChange={(e)=>setFormData({...formData, lastname: e.target.value})}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 px-2 w-full mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="flex uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email"
            >
              Email <span className="ml-2" ><MdEmail size="15px" /> </span>
            </label>
            
            
            <input
              required
              className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-email"
              type="emial"
              placeholder="example@example.com"
              value={formData.email}
              onChange={(e)=>setFormData({...formData, email: e.target.value})}
            />
            
          </div>
          <div className="w-full  px-3">
            <label
              className="flex text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-phone"
            >
              Phone Number <span className="ml-2" ><RiPhoneFill size="15px" /> </span>
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-phone"
              type="text"
              placeholder="+91 9098765432"
              value={formData.phone}
              onChange={(e)=>setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 px-2 w-full mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="flex uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email"
            >
              Your Website  <span className="ml-2" ><AiOutlineGlobal size="15px" /> </span> 
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="www.example.com"
              value={formData.website}
              onChange={(e)=>setFormData({...formData, website: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="flex text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-phone"
            >
              twitter <span className="ml-2" ><RiTwitterFill size="15px" /> </span>
            </label>
            <input
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-phone"
              type="text"
              placeholder="twitter"
              value={formData.twitter}
              onChange={(e)=>setFormData({...formData, twitter: e.target.value})}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 px-2 w-full mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label className="flex uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2">
              linkedin <span className="ml-2" ><AiFillLinkedin size="15px" /> </span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="linkedin"
              value={formData.linkedin}
              onChange={(e)=>setFormData({...formData, linkedin: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="flex text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-github"
            >
              github <span className="ml-2" ><AiFillGithub size="15px" /> </span>
            </label>
            <input
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-github"
              type="text"
              placeholder="github"
              value={formData.github}
              onChange={(e)=>setFormData({...formData, github: e.target.value})}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 px-2 w-full mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label className="flex uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2">
              facebook <span className="ml-2" ><FaFacebookSquare size="15px" /> </span>
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="facebook"
              value={formData.facebook}
              onChange={(e)=>setFormData({...formData, facebook: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="flex text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-instagram"
            >
              instagram <span className="ml-2" ><FaInstagramSquare size="15px" /> </span>
            </label>
            <input
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-instagram"
              type="text"
              placeholder="instagram"
              value={formData.instagram}
              onChange={(e)=>setFormData({...formData, instagram: e.target.value})}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorsonalDetails;
