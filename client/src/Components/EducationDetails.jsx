import React from "react";
import {FaUniversity} from "react-icons/fa"
export const EducationDetails = ({formData,setFormData}) => {
  
  return (
    <div className="w-full py-10 h-full flex justify-center items-center">
      <div className="w-[80%]  shadow-md  h-full">
        <h1 className=" tracking-wide text-gray-700 font-bold text-lg border-b-solid border-b-gray-400 border-b-[2px] py-4 px-16">
          Educational Details
        </h1>
        <div className="border-b-solid border-b-gray-400 border-b-[2px] pt-5">
          <div className="grid grid-cols-3  gap-x-4 px-2 w-full mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="flex uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                college/university <span className="ml-2" ><FaUniversity size="15px" /> </span>
              </label>
              <input
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="college/university"
                value={formData.college}
              onChange={(e)=>setFormData({...formData, college: e.target.value})}
              />
            </div>
            <div className="w-full  px-3">
              <label
                className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Start Date
              </label>
              <input
                required
                className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="date"
                value={formData.fromyear1}
              onChange={(e)=>setFormData({...formData, fromyear1: e.target.value})}
              />
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-email"
              >
                End date
              </label>

              <input
                required
                className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-email"
                type="date"
                value={formData.toyear1}
              onChange={(e)=>setFormData({...formData, toyear1: e.target.value})}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 pt-4 gap-x-4 px-2 w-full mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Qualification
              </label>
              <input
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Qualification"
                value={formData.qualification1}
              onChange={(e)=>setFormData({...formData, qualification1: e.target.value})}
              />
            </div>
            <div className="w-full col-span-2 px-3">
              <label
                className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Description
              </label>
              <input
                required
                className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Description"
                value={formData.description1}
              onChange={(e)=>setFormData({...formData, description1: e.target.value})}
              />
            </div>
           
          </div>
        </div>
      
        <div className="py-5">
          <div className="grid grid-cols-3 pt-4 gap-x-4 px-2 w-full mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="flex uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                college/university <span className="ml-2" ><FaUniversity size="15px" /> </span>
              </label>
              <input
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="college/university"
                value={formData.school}
              onChange={(e)=>setFormData({...formData, school: e.target.value})}
              />
            </div>
            <div className="w-full  px-3">
              <label
                className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Start Date
              </label>
              <input
                required
                className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="date"
                value={formData.fromyear2}
              onChange={(e)=>setFormData({...formData, fromyear2: e.target.value})}
              />
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-email"
              >
                End date
              </label>

              <input
                required
                className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-email"
                type="date"
                value={formData.toyear2}
              onChange={(e)=>setFormData({...formData, toyear2: e.target.value})}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 pt-4 gap-x-4 px-2 w-full mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
               Qualification
              </label>
              <input
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Qualification"
                value={formData.qualification2}
              onChange={(e)=>setFormData({...formData, qualification2: e.target.value})}
              />
            </div>
            <div className="w-full col-span-2 px-3">
              <label
                className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Description
              </label>
              <input
                required
                className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Description"
                value={formData.description2}
              onChange={(e)=>setFormData({...formData, description2: e.target.value})}
              />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
