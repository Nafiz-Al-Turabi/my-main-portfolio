import React from 'react';
import './Projects.css'
import Side from '../Side/Side';
import ProjectsCard from '../Cards/ProjectsCard/ProjectsCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="h-screen w-full px-5 md:px-5  " id='scroll-Projects'>
            <div className=' lg:flex gap-10 h-screen'>
                <Side></Side>
                <div className='w-full pb-28 lg:pb-0'>
                    <div className='banner h-[760px] md:h-[850px] lg:h-[698px]  bg-gray-500/50 p-5 ' id='scroll'>
                        <h1 className='text-2xl mb-10 font-semibold text-white'>Projects</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {
                                projects.map(project => <ProjectsCard
                                    key={project.id}
                                    project={project}
                                ></ProjectsCard>)
                            }

                        </div>
                        <div className="flex justify-between text-gray-600 bg-gray-950/80 mt-10 p-5">
                            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                            <p>Email: nafizalturabi@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;