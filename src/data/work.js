import guavus from '@/images/work_thumb/1.jpg'
import csi from '@/images/work_thumb/2.jpg'
import nolo from '@/images/work_thumb/3.jpg'
import jsfinal from '@/images/work_thumb/4.jpg'
import webtwoh from '@/images/work_thumb/5.jpg'
import php from '@/images/work_thumb/6.jpg'
import webone from '@/images/work_thumb/7.jpg'
import provisio from '@/images/work_thumb/provisio.png'
import pgapp from '@/images/work_thumb/app.petstergaming.png'
import bellevue from '@/images/work_thumb/bellevuework.png'
import soundsofsilence from '@/images/work_thumb/soundsofsilence.png'
import atoa from '@/images/work_thumb/atoa.png'
import myfirstsite from '@/images/work_thumb/my-first-site.png';
import vsportfolio from '@/images/work_thumb/vs-portfolio.png'
import ttshmg from '@/images/work_thumb/ttshmg.png'

export const workData = [
    {
        "title": "VS Code Portfolio",
        "desc": `I recreated my Portfolio with a VS Code feel! Featuring openable folder structures and more to come!<br/>Work in progress!`,
        "img_url": vsportfolio,
        "url": "https://vs.jpalmeri.dev/"
    },
    {
        "title": "My First Project",
        "desc": `This is the work of my first College course's final. Web 01 at Nashua Community College dated 2017. An odd looking site but fun to see where it all started!
            <br/><br/>
            <a class="underline" href="https://github.com/Petster/my-first-website" target="_blank">View Code</a>`,
        "img_url": myfirstsite,
        "url": "https://petster.github.io/my-first-website/"
    },
    {
        "title": "Software Development Bachelors Program",
        "desc": `Within this large repository you will find all of my bachelors program work, from Java to JavaScript.
        <br/>
        Every project and assignment can be found in here, easily accessible via the homepage
        <br/>`,
        "img_url": bellevue,
        "url": "https://petster.github.io/jpalmeri-bellevue/"
    },
    {
        "title": "Java Capstone Project - Provisio",
        "desc": `For our Java Capstone project, we were grouped into 3 teams to create a fully functional Online Hotel reservation website/app. I was voted to be the team leader and led the team to a 100% final product.<br/>
        <br/>
        The project was built using with some help from gradle and docker, with front-end components being build with JSP's and Tailwind
        <br/><br/>
        The source code, and all revision history can be seen at <a class='hover:underline text-blue-500' href='https://github.com/Petster/Provisio'>Github</a> and you can download and boot it up on your local machine.
        <br/><br/>
        <strong>Note:</strong> link brings you to the final presentation video
        `,
        "img_url": provisio,
        "url": "https://docs.google.com/presentation/d/1vfTYPYQ3zSm14WaSFn6HGA-hQC9taKNPHFFF__OQ4AA/edit?usp=sharing"
    },
    {
        "title": "My App (MERN Stack)",
        "desc": `During my classwork at Bellevue, I wanted to learn some Javascript stack, so I picked up the MERN stack<br/><br/>

        Over the last 2 years, I've been working on my personal project, to the average person, its just a blank website, but with admin rights its kind of like a notepad/bookmark/reminder app for myself. What I've done here is made it public. Anyone can make an account and use the functions that I've been using for a little while now. <br/><br/>

        The site features:<br/>
        A notepad block, for messages or reminders that you can take anywhere<br/>
        A shortcut system, where you can create links with custom icons (font awesome) and allows for expandable shortcuts<br/>
        A reminder system, add reminders with due dates, in specific categories<br/><br/>

        The site is still super in progress, and as I continue my education I hope to make it an app that is useful to everyone!
        `,
        "img_url": pgapp,
        "url": "https://app.petstergaming.com"
    },
    {
        "title": "Nashua Community College NoLo Finder",
        "desc": `This is my final project at Nashua Community College for the Capstone Web Development Course. The project was to read a CSV file, grab data, and output the important information in CSV format. This project allowed me to take a deeper dive into Javascript and its plugins.

        <strong>NOTE</strong>: You will not be able to fully utilize this project without key CSV files that cannnot be given out.

        View the Code <a class='hover:underline text-blue-500' target='_blank' href="https://bitbucket.org/nolocap/nolocap.bitbucket.io/src/master/" target="_blank">Here</a>`,
        "img_url": nolo,
        "url": "https://nolocap.bitbucket.io/"
    },
    {
        "title": "JavaScript Final",
        "desc": "The goal of the semester was to create a sort of Contact Form that would be validated using JavaScript. This project was different from the PHP form, as instead of having to create what accepts the data, we had to make sure the data was valid in the first place before submitting. Some functions might not work correctly due to server issues",
        "img_url": jsfinal,
        "url": "https://petster.github.io/AJAXform/"
    },
    {
        "title": "WEB200 Biosite Project",
        "desc": "Tasked with creating a biography website, I created this simple 3 page layout using bootstrap, and some custom JavaScript for the hobby page.",
        "img_url": webtwoh,
        "url": "https://petster.github.io/jpalmeri-bellevue/WEB200%20-%20Fundamentals%20of%20Web%20Dev/BioSiteProject/"
    },
    {
        "title": "PHP Final/Semester Work (Offline)",
        "desc": "While learning PHP the students had a server to play around in, I took a little extra time to make my webpage easy to access the projects. The final for the class was to create a working Contact form, this was also my first peek into mySQL and creating an account like system with the PHP",
        "img_url": php,
        "url": "#"
    },
    {
        "title": "Web Development 2 Final Project",
        "desc": "Collage Web Development 2 Final Project, Basically a draft of a storefront webpage to buy trading card game cards. The project was to create whatever we wanted, and had to have certain aspects, like mobile ready scaling.",
        "img_url": webone,
        "url": "https://petster.github.io/Web2Final/"
    },
];

export const profWork = [
    {
        "title": "The Truth So Help Me Good",
        "desc": `Designed and developed a website for a local memoir writer who wanted to share their story. The site was built using NextJS and deployed to Vercel to keep costs low.
        <br/><br/>
        This was a fun project to work on, because the client wanted to keep things simple, while also having some editable content blocks. To keep costs low I built a custom CMS for them to give them the tools they needed to update their site whenever they want.
        
        `,
        "img_url": ttshmg,
        "url": "https://www.thetruthsohelpmegood.com/"
    },
    {
        "title": "Artists Talk on Art NYC",
        "desc": `I manage Artists Talk on Art's event page and helped to create custom components for their SquareSpace website during their 50th anniversary.
        <br/>
        <br/>
        I also helped them to integrate their Constant Contact forms into the site to streamline their email marketing
        `,
        "img_url": atoa,
        "url": "https://www.atoanyc.org/"
    },
    {
        "title": "Coating Systems Group Website Management",
        "desc": `Tasked with helping keep the WordPress hosted site up to date, as well as providing help with updating the sites content
        <br/><br/>
        My other tasks have included backing up the site, and being on top of any outages by talking to their hosting provider.
        `,
        "img_url": csi,
        "url": "http://www.coatingsystemsgroup.com/"
    },
    {
        "title": "Sounds Of Silence Redesign",
        "desc": `I was asked to help redesign the Sounds of Silence website

        <br/>
        <br/>

            The redesign involved finding a new theme on WordPress, and integrating some custom CSS and JavaScript to get a clean look
        `,
        "img_url": soundsofsilence,
        "url": "https://www.soundsofsilence.com/"
    },
    {
        "title": "Guavus Zendesk Customer Success Center (Offline)",
        "desc": "Worked with the Customer Success Team to develop their Zendesk hosted Web Portal",
        "img_url": guavus,
        "url": "#"
    },
]