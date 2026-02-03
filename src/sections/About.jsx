import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [hasCopy, setHasCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('yamitniranjan@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  const copyMobileNumber = () => {
    navigator.clipboard.writeText('8542935871');
    setHasCopy(true);

    setTimeout(() => {
      setHasCopy(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Amit Niranjan</p>
              <p className="grid-subtext">
             Final-year B.Tech student and Full Stack Developer with expertise in Rust, MERN Stack, and Next.js. Experienced clearin architecting scalable microservices using Docker, Kubernetes, and AWS. basic knowledge of system design and building AI-powered web applications. Seeking a challenging role to utilize skills in backend engineering and cloud architecture.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
             <b> Programming Languages:</b> JavaScript, TypeScript, C++, Rust, SQL  <br />
React.js, Next.js, Redux Toolkit, Tailwind CSS, HTML, CSS  <br />

<b> Backend & Databases:</b>Rust (Axum) , Node.js, Express.js, MongoDB, PostgreSQL (Neon), Firebase  <br />

<b> System Design & Fundamentals:</b> System Design (LLD & HLD), Data Structures & Algorithms (DSA), OOP,
DBMS, OS, Computer Networks
<b> Backend & Databases:</b>Rust (Axum) , Node.js, Express.js, MongoDB, PostgreSQL (Neon), Firebase  <br />

<b> DevOps & Cloud:</b> Docker, Kubernetes, AWS, CI/CD Pipelines
<b> Backend & Databases:</b>Rust (Axum) , Node.js, Express.js, MongoDB, PostgreSQL (Neon), Firebase  <br />

<b> DevOps & Cloud:</b> Docker, Kubernetes, AWS, CI/CD Pipelines
<br />

<b>Tools:</b>Git, GitHub, Postman, Clerk Auth, VS Code
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">ACHIEVEMENTS </p>
              <p className="grid-subtext">
               •Finalist at ATMECS Global GenAI Hackathon Selected among top 50 teams for innovative AI solution
               <br />
•  Solved 250+ DSA problems;<br />
•  Achieved 100 Days Consistency Badge
<br />
•  Cleared two stages of Tata Imagination Challenge. <br />
•  Web Development certificate from Apna college.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">Yamitniranjan1234@gmail.com</p>
              </div>
              <div className="copy-container" onClick={ copyMobileNumber}>
                <img src={hasCopy ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">8542935871</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
