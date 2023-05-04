import React from "react";

export const Project = ({formData,setFormData}) => {
   
  return (
    <div className="w-full py-10 h-full flex justify-center items-center">
      <div className="w-[80%]  shadow-md  h-full">
        <h1 className="border-b-solid border-b-gray-400 border-b-[2px] tracking-wide text-gray-700 font-bold text-lg py-4 px-16">
          Projects
        </h1>
        <div className="border-b-solid border-b-gray-400 border-b-[2px] py-5">
        <h1 className=" tracking-wide text-gray-700 text-left font-bold text-lg pb-4 px-16">
          Project 1
        </h1>
          <div className="grid grid-cols-2  gap-x-4 px-2 w-full mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Title
              </label>
              <input
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="title"
                value={formData.title1}
              onChange={(e)=>setFormData({...formData, title1: e.target.value})}
              />
            </div>
            <div className="w-full  px-3">
              <label
                className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                link
              </label>
              <input
                required
                className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="link"
                value={formData.link1}
                onChange={(e)=>setFormData({...formData, link1: e.target.value})}
              />
            </div>
          </div>
          <div className="w-full grid-cols-1  px-5 mb-6 md:mb-0">
            <label
              className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email"
            >
              Description
            </label>

            <input
              required
              className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-email"
              type="text"
              placeholder="Description"
              value={formData.projectDescription1}
              onChange={(e)=>setFormData({...formData, projectDescription1: e.target.value})}
            />
          </div>
        </div>
        <div className="border-b-solid border-b-gray-400 border-b-[2px] py-5">
        <h1 className=" tracking-wide text-gray-700 font-bold text-lg pb-4 text-left px-16">
          Project 2
        </h1>
          <div className="grid grid-cols-2  gap-x-4 px-2 w-full mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Title
              </label>
              <input
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="title"
                value={formData.title2}
              onChange={(e)=>setFormData({...formData, title2: e.target.value})}
              />
            </div>
            <div className="w-full  px-3">
              <label
                className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                link
              </label>
              <input
                required
                className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="link"
                value={formData.link2}
                onChange={(e)=>setFormData({...formData, link2: e.target.value})}
              />
            </div>
          </div>
          <div className="w-full grid-cols-1  px-5 mb-6 md:mb-0">
            <label
              className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email"
            >
              Description
            </label>

            <input
              required
              className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-email"
              type="text"
              placeholder="Description"
              value={formData.projectDescription2}
              onChange={(e)=>setFormData({...formData, projectDescription2: e.target.value})}
            />
          </div>
        </div>
        <div className=" py-5">
        <h1 className=" tracking-wide text-gray-700 font-bold text-lg border-b-solid pb-4 text-left px-16">
          Project 3
        </h1>
          <div className="grid grid-cols-2  gap-x-4 px-2 w-full mb-6">
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Title
              </label>
              <input
                required
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="title"
                value={formData.title3}
              onChange={(e)=>setFormData({...formData, title3: e.target.value})}
              />
            </div>
            <div className="w-full  px-3">
              <label
                className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                link
              </label>
              <input
                required
                className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="link"
                value={formData.link3}
                onChange={(e)=>setFormData({...formData, link3: e.target.value})}
              />
            </div>
          </div>
          <div className="w-full grid-cols-1  px-5 mb-6 md:mb-0">
            <label
              className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email"
            >
              Description
            </label>

            <input
              required
              className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-email"
              type="text"
              placeholder="Description"
              value={formData.projectDescription3}
              onChange={(e)=>setFormData({...formData, projectDescription3: e.target.value})}
            />
          </div>
        </div>
       
      </div>
    </div>
  );
};
