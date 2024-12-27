import VerticalTimeline from "../components/VerticalTimeline";

const About = () => {
    return (
        <div className="bg-about-page-image bg-cover min-h-screen bg-center w-full flex">
            <div className="flex flex-row items-center w-5/6 h-96 mt-40 ml-32">
                <div className="w-1/4">
                    <VerticalTimeline/>
                </div>
                <div className="w-3/4 text-black bg-white h-90 rounded-3xl p-4 opacity-40 ml-10">
                    <h2 className="font-mono font-bold">My inspiration</h2>
                    <p className="font-mono text-justify text-sm">
                        Creating this portfolio has been a journey of self-discovery and artistic expression. My inspiration comes from a blend of personal experiences, the vibrant world of design, and the ever-evolving landscape of technology.
                        From a young age, I have been fascinated by the power of storytelling through visuals. Whether through art, photography, or digital design, I found that images can convey emotions and narratives that words sometimes cannot. This realization ignited my passion for creating compelling visual content that resonates with people.
                        As I explored web development and design, I became inspired by the seamless integration of functionality and aesthetics. I believe that a well-designed website is not just visually appealing; it must also create an intuitive user experience. This philosophy drives me to focus on user-centered design principles, ensuring that every project I undertake is both beautiful and functional.
                        I also draw inspiration from the diverse cultures and ideas around me. Traveling and immersing myself in various cultures have opened my eyes to new perspectives and creative approaches. Each experience enriches my understanding of design and encourages me to think outside the box.
                        Additionally, I am motivated by the work of other designers and developers. The creative community is filled with talented individuals who push the boundaries of what is possible. Their innovative ideas inspire me to grow and evolve as a creator.
                        Ultimately, my portfolio reflects my journey, passions, and aspirations. It showcases my skills and projects, along with the stories behind them. Through this portfolio, I hope to connect with others who share a passion for design and technology and inspire them to pursue their own creative paths.
                    </p>
                </div>
            </div>
        </div>
    );
};
  
export default About;