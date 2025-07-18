import { workData, profWork } from '@/data/work'
import WorkCard from '@/components/WorkCard';
import { skillsList } from '@/data/skills';
import SkillCard from '@/components/SkillCard'
import { Metadata } from 'next';
import Image from "next/image";
import deanWinter from "@/images/2021_winter_dean_gpa.png";
import deanSpring from "@/images/2022_spring_dean.png";
import deanFall from "@/images/2022_fall_dean.png";
import deanSpring23 from "@/images/2023_spring_dean.png";

export const metadata: Metadata = {
  title: 'Jason Palmeri | Work, Projects & Skills',
}

export default function Portfolio() {
  return (
      <div>
      <section className="p-4 text-white rounded-none sm:rounded-md">
        <div className="flex items-center justify-center content-center">
          <div>
            <h1 className="text-4xl">Freelance Work & Volunteer</h1>
          </div>
          <div className="flex-grow"></div>
        </div>
        <hr/>
        <div className="masonry-container masonry-responsive p-2">
          {profWork.map((da, index) => (
              <div key={index} className="masonry-item">
                  <WorkCard
                      name={da.title}
                      desc={da.desc}
                      url={da.url !== "#" ? da.url : ""}
                      img={da.img_url}
                  />
              </div>
          ))}
        </div>

      <div className="flex items-center justify-center content-center">
        <div>
          <h1 className="text-4xl">School Projects & More</h1>
        </div>
        <div className="flex-grow"></div>
      </div>
        <hr/>
          <div>
              <div className='p-12 flex flex-col sm:flex-row items-center sm:justify-between gap-4 mx-auto'>
                  <a title="Deans List 2021 Winter" href="https://www.credly.com/badges/dd9160b7-a2e8-4dad-94c3-4048b83e09eb/public_url" target="_blank">
                      <span className="sr-only">Bellevue University Deans List 2021 Winter 4.0 GPA</span>
                      <Image alt="Bellevue University Deans List 2021 Winter 4.0 GPA" src={deanWinter} className="border border-black shadow-2xl rounded-full" />
                  </a>
                  <a title="Deans List 2022 Spring" href="https://www.credly.com/badges/205e5234-b0ac-44f8-8a70-31ddf4411ed2/public_url" target="_blank">
                      <span className="sr-only">Bellevue University Deans List 2022 Spring 4.0 GPA</span>
                      <Image alt="Bellevue University Deans List 2022 Spring 4.0 GPA" src={deanSpring} className="border border-black shadow-2xl rounded-full" />
                  </a>
                  <a title="Deans List 2022 Fall" href="https://www.credly.com/badges/fcbfd71f-b620-45e7-a345-4eec9d45581f/public_url" target="_blank">
                      <span className="sr-only">Bellevue University Deans List 2022 Fall 4.0 GPA</span>
                      <Image alt="Bellevue University Deans List 2022 Fall 4.0 GPA" src={deanFall} className="border border-black shadow-2xl rounded-full" />
                  </a>
                  <a title="Deans List 2023 Spring" href="https://www.credly.com/badges/d09cd9f3-38eb-46f9-93db-eec7c5b2a888/public_url" target="_blank">
                      <span className="sr-only">Bellevue University Deans List 2023 Spring 4.0 GPA</span>
                      <Image alt="Bellevue University Deans List 2022 Fall 4.0 GPA" src={deanSpring23} className="border border-black shadow-2xl rounded-full" />
                  </a>
              </div>
          </div>
      <div className="masonry-container masonry-responsive p-2">
        {workData.map((da, index) => (
          <div key={index} className="masonry-item">
              <WorkCard
                  name={da.title}
                  desc={da.desc}
                  url={da.url !== "#" ? da.url : ""}
                  img={da.img_url}
              />
          </div>
        ))}
      </div>
      </section>

      <section className="p-4 text-white rounded-none sm:rounded-md">
      <div className="flex items-center justify-center content-center">
        <div>
          <h1 className="text-4xl">Programming</h1>
        </div>
        <div className="flex-grow"></div>
      </div>
      <hr/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-5">
          {skillsList['Programming Languages'].map((da, index) =>
            da.type === "Web" ? (<SkillCard bg="bg-red-500 code" name={da.name} key={index} icon={da.icon}></SkillCard>)
                : (<SkillCard bg="bg-blue-500 code" name={da.name} key={index} icon={da.icon}></SkillCard>)
          )}
      </div>

      <div className="flex items-center justify-center content-center">
        <div>
          <h1 className="text-4xl">Graphic Design/Video Editing</h1>
        </div>
        <div className="flex-grow"></div>
      </div>
      <hr/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-5">
          {skillsList['Graphic Design/Video Editing'].map((da, index) => {
            return (<SkillCard bg="bg-yellow-500 vp" name={da.name} key={index} icon={da.icon}></SkillCard>)
          })}
      </div>
    </section>
    </div>
  )
}