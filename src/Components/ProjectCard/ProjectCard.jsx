import React from 'react';
import { BsCodeSquare, BsFillCircleFill } from "react-icons/bs";


const ProjectCard = ({ project }) => {
    const { title, image, live, git, git_server, description, platform, category } = project
    return (
        <div className='max-w-7xl mx-auto hover:-translate-y-1 duration-300 ease-linear'>
            <div className=" m-2 overflow-hidden rounded-lg shadow-lg  block md:block lg:flex" >
                <img
                    src={image}
                    alt="Senior Developer"
                    className="object-fill border-r-0 md:border-r-0 lg:border-r-2 border-[#16d59c]  object-center w-full md:w-full lg:w-[500px] h-auto md:h-auto lg:h-72 "
                />
                <div className="px-6 py-4 bg-gray-950/80  lg:w-[650px]">
                    <h2 className="text-2xl font-bold text-gray-300">{title}</h2>
                    <p className="text-gray-600 mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum natus veniam fugit esse velit, non voluptatem dolores dicta laborum!
                    </p>
                    <div className='flex justify-between'>
                        <h1 className='text-lg text-gray-600 font-extrabold '>Cross-Platform: {platform}</h1>
                        <h1 className='animated-text text-lg text-gray-600 font-extrabold '>{category} </h1>
                    </div>
                    <div className='md:flex space-x-4 mt-4'>
                        <a href={live} target='blank' className='flex items-center border-b border-gray-700/30 text-white font-bold py-2 px-5 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 duration-300 hover:-translate-y-1 ease-linear'>
                            <BsFillCircleFill className='mr-2 text-xs text-red-300 ' />
                            Live</a>
                        <a href={git} target='blank' className='flex items-center border-b border-gray-700/30 text-white font-bold py-2 px-5 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 duration-300 hover:-translate-y-1 ease-linear'>
                            <BsCodeSquare className='mr-2 ' />
                            Code</a>
                        {git_server ? (
                            <a href={git_server} target='blank' className='flex items-center border-b border-gray-700/30 text-white font-bold py-2 px-5 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 duration-300 hover:-translate-y-1 ease-linear'>
                                <BsCodeSquare className='mr-2 ' />
                                Server
                            </a>
                        ) : ''}
                    </div>
                </div>
                <div className="px-6 py-4 bg-black/30">
                    <ul className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-none gap-1 '>
                        {project.technology.map((tech, index) => (

                            <li
                                className=" bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700"
                                key={index}>{tech.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;