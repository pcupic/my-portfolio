import ProgressBar from "../components/ProgressBar";
import ProjectCard from "../components/ProjectCard"; 

const Projects = () => {
    const skills = [
        { label: 'HTML', percentage: 80 },
        { label: 'CSS', percentage: 70 },
        { label: 'JavaScript', percentage: 90 },
    ];

    const projects = [
        {
            title: "my-portfolio",
            description: "This is a modern and responsive personal portfolio webpage designed to showcase projects and skills. Built using React.js and styled with Tailwind CSS, the project emphasizes modular design.",
            language: "JavaScript",
            updated: "Updated 17 hours ago"
        },
        {
            title: "pong-game",
            description: "A simple yet engaging Pong game implemented in Java using Swing for the graphical user interface. This project features both single-player and multiplayer modes, with an AI bot that adjusts difficulty.",
            language: "Java",
            updated: "Updated 4 days ago"
        },
        {
            title: "web-calculator",
            description: "Multi-functional calculator app featuring a scientific calculator, base converter and unit converter.",
            language: "CSS",
            updated: "Updated 4 days ago"
        },
        {
            title: "orwima-labs",
            description: "This repository contains solved tasks and assignments from the ORWIMA course.",
            language: "Kotlin",
            updated: "Updated 4 days ago"
        },
        {
            title: "AndroidAcademy2024",
            description: "This repository provides resources for mastering Kotlin and Android development, covering topics such as OOP, advanced Kotlin features, Jetpack Compose, application architecture, API communication.",
            language: "Kotlin",
            updated: "Updated on Nov 23"
        },
        {
            title: "LeetCodeSolutions",
            description: "This repository contains solutions to LeetCode problems.",
            language: "C",
            updated: "Updated on Oct 26"
        },
        {
            title: "scientific-calculator",
            description: "Calculator that supports a variety of mathematical operations. Ideal for students, engineers, and anyone needing advanced calculations.",
            language: "C#",
            updated: "Updated on Oct 26"
        },
        {
            title: "TextRecognitionApp",
            description: "Implemented Optical Character Recognition with Tesseract in Python for Image Processing.",
            language: "Python",
            updated: "Updated on Oct 25"
        },
        {
            title: "Design-Patterns",
            description: "Creational, structural and behavioral design patterns in programming.",
            language: "C#",
            updated: "Updated on May 21"
        },
    ];

    return (
        <div className="flex flex-col bg-projects-page-image bg-cover min-h-screen w-full">            
            <div className="flex flex-wrap justify-center mt-36">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        language={project.language} 
                        updated={project.updated} 
                    />
                ))}
            </div>
            <div className="flex flex-col items-center w-5/6 mt-8 ml-32 mb-4 bg-white bg-opacity-30 backdrop-blur-lg p-4 rounded-2xl">
                <ProgressBar skills={skills} />
            </div>
        </div>
    );
};

export default Projects;