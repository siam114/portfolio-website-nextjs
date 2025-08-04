import { projects } from '@/content/project'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <section className='py-10 container mx-auto max-w-7xl px-4'>
      <h2 className='text-3xl font-bold text-center mb-10'>Featured Projects</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
            projects.map((project) => (
                <article key={project.title}>
                    <div className='relative aspect-video mb-4 overflow-hidden rounded-lg'>
                        <Image src={project.image} alt={project.title} fill className='object-cover' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'/>
                    </div>
                </article>
            ))
        }
      </div>
    </section>
  )
}

export default Projects
