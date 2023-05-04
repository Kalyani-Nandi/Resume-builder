import React from 'react'
import {IoIosCheckmarkCircle} from "react-icons/io"
export const ExtraDetails = ({formData,setFormData}) => {
  
  return (
    <div className="w-full py-10 h-full flex justify-center items-center">
    <div className="w-[80%]  shadow-md  h-full">
      <h1 className="border-b-solid border-b-gray-400 border-b-[2px] tracking-wide text-gray-700 font-bold text-lg py-4 px-16">
        Other Details
      </h1>
      <div className=" py-5">
      <h1 className="flex tracking-wide text-gray-700 font-bold text-lg border-b-solid pb-4 text-left px-16">
      <span className="mr-2 mt-1" ><IoIosCheckmarkCircle size="20px" /> </span> Skills
      </h1>
        <div className="grid grid-cols-3  gap-x-4 px-2 w-full mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Skill 1
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="skill 1"
              value={formData.skill1}
              onChange={(e)=>setFormData({...formData, skill1: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              skill 2
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="skill 2"
              value={formData.skill2}
              onChange={(e)=>setFormData({...formData, skill2: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              skill 3 
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="skill 3"
              value={formData.skill3}
              onChange={(e)=>setFormData({...formData, skill3: e.target.value})}
            />
          </div>
        </div>
        <div className="grid grid-cols-3  gap-x-4 px-2 w-full mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Skill 4
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="skill 4"
              value={formData.skill4}
              onChange={(e)=>setFormData({...formData, skill4: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              skill 5
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="skill 5"
              value={formData.skill5}
              onChange={(e)=>setFormData({...formData, skill5: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              skill 6 
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="skill 6"
              value={formData.skill6}
              onChange={(e)=>setFormData({...formData, skill6: e.target.value})}
            />
          </div>
        </div>
      </div>
      <div className=" py-5">
      <h1 className=" flex tracking-wide text-gray-700 font-bold text-lg border-b-solid pb-4 text-left px-16">
      <span className="mr-2 mt-1" ><IoIosCheckmarkCircle size="20px" /> </span> languages
      </h1>
        <div className="grid grid-cols-3  gap-x-4 px-2 w-full mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              language 1
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="language 1"
              value={formData.language1}
              onChange={(e)=>setFormData({...formData, language1: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              language 2
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="language 2"
              value={formData.language2}
              onChange={(e)=>setFormData({...formData, language2: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              language 3 
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="language 3"
              value={formData.language3}
              onChange={(e)=>setFormData({...formData, language3: e.target.value})}
            />
          </div>
        </div>
        
      </div>
      <div className=" py-5">
      <h1 className=" flex tracking-wide text-gray-700 font-bold text-lg border-b-solid pb-4 text-left px-16">
      <span className="mr-2 mt-1" ><IoIosCheckmarkCircle size="20px" /> </span> Interest
      </h1>
        <div className="grid grid-cols-3  gap-x-4 px-2 w-full mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Interest 1
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Interest 1"
              value={formData.interest1}
              onChange={(e)=>setFormData({...formData, interest1: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Interest 2
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Interest 2"
              value={formData.interest2}
              onChange={(e)=>setFormData({...formData, interest2: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Interest 3
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Interest 3"
              value={formData.interest3}
              onChange={(e)=>setFormData({...formData, interest3: e.target.value})}
            />
          </div>
        </div>
        <div className="grid grid-cols-3  gap-x-4 px-2 w-full mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label
              className="block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Interest 4
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Interest 4"
              value={formData.interest4}
              onChange={(e)=>setFormData({...formData, interest4: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Interest 5
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Interest 5"
              value={formData.interest5}
              onChange={(e)=>setFormData({...formData, interest5: e.target.value})}
            />
          </div>
          <div className="w-full  px-3">
            <label
              className="block text-left uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Interest 6
            </label>
            <input
              required
              className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Interest 6"
              value={formData.interest6}
              onChange={(e)=>setFormData({...formData, interest6: e.target.value})}
            />
          </div>
        </div>
      </div>
     
    </div>
  </div>
  )
}
