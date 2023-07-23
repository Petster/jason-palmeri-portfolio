import { workData, profWork } from '@/data/work'
import WorkCard from '@/components/WorkCard';
import { skillsList } from '@/data/skills';
import SkillCard from '@/components/SkillCard'
import { Metadata } from 'next';

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
          <div className="lg:masonry-2-col xl:masonry-3-col p-2">
            {profWork.map((da, index) =>
                da.url !== "#" ? (<WorkCard key={index} name={da.title} desc={da.desc} url={da.url} img={da.img_url} />) : (<WorkCard key={index} name={da.title} desc={da.desc} url={""} img={da.img_url} />)
            )}
          </div>

        <div className="flex items-center justify-center content-center">
          <div>
            <h1 className="text-4xl">School Projects & More</h1>
          </div>
          <div className="flex-grow"></div>
        </div>
          <hr/>
        <div className="lg:masonry-2-col xl:masonry-3-col p-2">
          {workData.map((da, index) =>
            da.url !== "#" ? (<WorkCard key={index} name={da.title} desc={da.desc} url={da.url} img={da.img_url} />) : (<WorkCard key={index} name={da.title} desc={da.desc} url={""} img={da.img_url} />)
          )}
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