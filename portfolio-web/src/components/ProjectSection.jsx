import { ArrowRight, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: "Food Delivery App",
        description: "A web application for ordering food online.",
        image: "/projects-img/Food-Delivery-App.png",
        tags: ["HTML", "CSS", "TypeScript", "Node.js", "Express", "MongoDB"],
        githubUrl: "https://github.com/Yogesh815131/ecommerce.git",
    },
    {
        id: 2,
        title: "Counsellor Portel App",
        description: "A web application for handling courses inquiries and counselling.",
        image: "/projects-img/Counsellor-Portal-App.png",
        tags: ["JavaScript", "HTML/CSS", "React", "Java", "Spring Boot", "MySQL"],
        githubUrl: "https://github.com/Yogesh815131/Counsellors-Portal.git",
    }
]

function ProjectSection() {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    {" "}
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className='text-center text-muted-foreground md-12 max-w-2xl mx-auto'>
                    Here are some of my projects that I have worked on. You can find the source code on GitHub.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        projects.map((project, key) => (
                            <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                                <div className='h-48 overflow-hidden'>
                                    <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                                </div>
                                <div className='p-6'>
                                    <div className='flex flex-wrap gap-2 md-4'>
                                        {
                                            project.tags.map((tag) => (
                                                <span className='px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground'>
                                                    {tag}
                                                </span>
                                            ))
                                        }
                                    </div>


                                    <h3 className='text-xl font-semibold mb-1'> {project.title} </h3>
                                    <p className='text-muted-foreground text-sm mb-4'>
                                        {project.description}
                                    </p>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex space-x-3'>
                                            <a href={project.githubUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                                <Github />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                    <div className='text-center mt-12'>
                        <a href="https://github.com/Yogesh815131" target='_blank' className='cosmic-button w-fit flex items-center mx-auto gap-2'>
                            Check out my GitHub <ArrowRight size={16} />
                        </a>
                    </div>

            </div>
        </section>
    )
}

export default ProjectSection