import React from 'react';
import { BsCodeSquare, BsFillCircleFill } from 'react-icons/bs';

const ProjectsCard = ({ project }) => {
    const { title, image, live, git, git_server, description, platform, category } = project;
    return (
        <div className=" rounded overflow-hidden backdrop-blur-xl bg-black/30 shadow-lg hover:-translate-y-9 hover:scale-95 duration-500">
            <img
                className="w-full hover:scale-125 duration-300 "
                src={image}
                alt="Card Image"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-white text-xl mb-2">{title}</div>
                <div className='flex justify-between'>
                    <h1 className='text-base text-gray-200 font-extrabold '>Cross-Platform: {platform}</h1>
                    <h1 className=' text-base text-gray-200 font-extrabold '>{category} </h1>
                </div>
            </div>
            <div className="px-6 py-4">
                <ul className=' grid grid-cols-1 md:grid-cols-3 gap-2 '>
                    {project.technology.map((tech, index) => (

                        <li
                            className="  bg-gray-200/50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                            key={index}>{tech.name}</li>
                    ))}
                </ul>
            </div>
            <div className="px-6 py-4 grid grid-cols-2 gap-5">
                <button >
                    <a href={live} target='blank' className='flex items-center border-b border-white/30 text-white font-bold py-2 px-5 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 duration-300 hover:-translate-y-1 ease-linear'>
                        <BsFillCircleFill className='mr-2 text-xs text-red-300 ' />
                        Live</a>
                </button>
                <button >
                    <a href={git} target='blank' className='flex items-center border-b border-white/30 text-white font-bold py-2 px-5 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 duration-300 hover:-translate-y-1 ease-linear'>
                        <BsCodeSquare className='mr-2 ' />
                        Code</a>
                </button>
                <button >
                    {git_server ? (
                        <a href={git_server} target='blank' className='flex items-center border-b border-gray-700/30 text-white font-bold py-2 px-5 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 duration-300 hover:-translate-y-1 ease-linear'>
                            <BsCodeSquare className='mr-2 ' />
                            Server
                        </a>
                    ) : ''}
                </button>
            </div>
        </div>
    );
};

export default ProjectsCard;