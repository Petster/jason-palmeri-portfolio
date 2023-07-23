import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import myFace from '@/images/myface_transparent.png'
import deanWinter from '@/images/2021_winter_dean_gpa.png'
import deanSpring from '@/images/2022_spring_dean.png'

export const metadata: Metadata = {
    title: 'Jason Palmeri | About Me',
}

const pStyle = "text-left text-lg leading-loose";
const hStyle = "text-xl underline font-bold";
const liStyle = "text-lg list-disc leading-loose ml-6"

const today = new Date();
const birthday = new Date("October 30 " + today.getFullYear());
let age = parseInt(today.getFullYear().toString().substring(2));

if(today <= birthday) {
  age -= 1;
}

export default function About() {
  return (
    <section className="flex flex-grow items-center justify-center bg-port sm:p-2">
    <div className="flex">
        <div className="t-bg p-3 rounded-none md:rounded-lg text-white">
          <div className="flex flex-col space-y-4 md:float-right float-none text-center">
            <Image alt="My Face" src={myFace} className="shadow-2xl rounded-full md:h-72 md:w-72 h-96 w-96 mx-auto md:mx-none" />
            <div className='flex flex-row gap-4 mx-auto'>
              <a title="Deans List 2021 Winter" href="https://www.credly.com/badges/dd9160b7-a2e8-4dad-94c3-4048b83e09eb/public_url" target="_blank">
                <span className="sr-only">Bellevue University Deans List 2021 Winter 4.0 GPA</span>
                <Image alt="Bellevue University Deans List 2021 Winter 4.0 GPA" src={deanWinter} className="border border-black shadow-2xl rounded-full h-48 w-48 md:h-36 md:w-36" />
              </a>
              <a title="Deans List 2022 Spring" href="https://www.credly.com/badges/205e5234-b0ac-44f8-8a70-31ddf4411ed2/public_url" target="_blank">
                <span className="sr-only">Bellevue University Deans List 2022 Spring 4.0 GPA</span>
                <Image alt="Bellevue University Deans List 2022 Spring 4.0 GPA" src={deanSpring} className="border border-black shadow-2xl rounded-full h-48 w-48 md:h-36 md:w-36" />
              </a>
            </div>
          </div>
          <br/>
          <p className={pStyle}>
          <span className={hStyle}>Hey! My name is Jason Palmeri</span>, I&apos;m {age} years old with a Bachelors in Software Development. Graduated at Bellevue University in 2023 in their Software Development Program</p>
          <br/>
          <h1 className={hStyle}>Early Life</h1>
          <p className={pStyle}>When I was younger I was always fascinated with technology, I would spend most of my free time playing video games, watching youtube and twitch, and learning as much as I could about the things I loved. I loved to play around with the junk computers that my father had down in the basement, and with a little help from youtube I taught myself about computer building, and have had my own custom built computer ever since. Having always been interested in youtube and twitch, I eventually saw myself creating videos and live streaming, though I didn&apos;t have many viewers or subscribers I kept uploading and streaming, and learning to get better at using the tools available to me like Adobe Premiere Pro, Sony Vegas, and Adobe Photoshop.</p>
          <br/>
          <h1 className={hStyle}>Path to Programming</h1>
          <p className={pStyle}>Creating things has always been something that was interesting to me, I always admired the things people built online, watching people build replica game items in real life, creating apps, and games. I always wanted to do these things, but never took the initiative. When sophomore year of High School rolled around I had the opportunity to take a new intro to web design and development class. It was my instructor Mark Illingworth who really got me interested in programming, the way he taught the class made it fun and exciting, and he always had something challenging for us to learn. After that class I was on a non-stop journey, I wanted to learn as much as I could. I continued my education at Nashua Community College where I learned new programming languages, and went more indepth into web development and design.</p>
          <br/>
          <h1 className={hStyle}>This Portfolio</h1>
          <p className={pStyle}>This version of my portfolio was converted from React to <a href="https://nextjs.org/" className="text-purple-300 hover:underline" target="_blank">NextJS</a>. Previously I was using <a href="https://vitejs.dev/" className="text-purple-300 hover:underline" target="_blank">Vite</a> but I wanted to try out Next&apos;s newest version with their App Router. This is the first step in my plan to start working on (and finishing) side projects, being a new graduate I have some free time and want to continue to build up my skills 😊 You can view the code for this website <a href="https://github.com/Petster/jason-palmeri-portfolio" target="_blank" className="text-purple-300 hover:underline">Here</a> and the code for my older (React) version <a href="https://github.com/Petster/react-portfolio" target="_blank" className="text-purple-300 hover:underline">Here</a></p>
          <br/>
          <h1 className={hStyle}>Today</h1>
          <p className={pStyle}>Today I work at Pinpoint Global as a QA Engineer for their suite of LMS and Medicare sites to provide customers with online certification training. My duties have included:</p>
          <ul>
            <li className={liStyle}>Writing and Executing test cases</li>
            <li className={liStyle}>Creating Automation testing software (via Selenium)</li>
            <li className={liStyle}>Creating Internal tools to help the support team</li>
          </ul>
          <p className={pStyle}>Being at Pinpoint has been an amazing experience, and I continue to learn more every day.</p>
          <p className={pStyle}>I am always open to new project ideas and opportunities, so feel free to <Link className={'text-purple-300 hover:underline'} href={'/connect'}>Connect</Link> with me</p>
        </div>
    </div>
  </section>
  )
}
