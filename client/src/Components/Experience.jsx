import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
export const Experience = ({formData,setFormData}) => {
  
  return (
    <div className="w-full py-10 h-full flex justify-center items-center">
    <div className="w-[80%]  shadow-md  h-full">
      <h1 className="border-b-solid border-b-gray-400 border-b-[2px] tracking-wide text-gray-700 font-bold text-lg py-4 px-16">
        Projects
      </h1>
      <div className=" py-5">
      <h1 className="flex tracking-wide text-gray-700 font-bold text-lg border-b-solid pb-4 text-left px-16">
      <span className="mr-2 mt-1" ><IoIosCheckmarkCircle size="20px" /> </span> Experience 1
      </h1>
        <div className="grid grid-cols-3  gap-x-4 px-2 w-full mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Institute/organization
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Institute/organization"
              value={formData.institute1}
              onChange={(e)=>setFormData({...formData, institute1: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Position
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Position"
              value={formData.position1}
              onChange={(e)=>setFormData({...formData, position1: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Duration
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Duration"
              value={formData.duration1}
              onChange={(e)=>setFormData({...formData, duration1: e.target.value})}
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
            value={formData.experienceDescription1}
            onChange={(e)=>setFormData({...formData, experienceDescription1: e.target.value})}
          />
        </div>
      </div>
      <div className=" py-5">
      <h1 className="flex tracking-wide text-gray-700 font-bold text-lg border-b-solid pb-4 text-left px-16">
      <span className="mr-2 mt-1" ><IoIosCheckmarkCircle size="20px" /> </span> Experience 2
      </h1>
        <div className="grid grid-cols-3  gap-x-4 px-2 w-full mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Institute/organization
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Institute/organization"
              value={formData.institute2}
              onChange={(e)=>setFormData({...formData, institute2: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Position
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Position"
              value={formData.position2}
              onChange={(e)=>setFormData({...formData, position2: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Duration
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Duration"
              value={formData.duration2}
              onChange={(e)=>setFormData({...formData, duration2: e.target.value})}
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
            value={formData.experienceDescription2}
            onChange={(e)=>setFormData({...formData, experienceDescription2: e.target.value})}
          />
        </div>
      </div>
     
    </div>
  </div>
  )
}
