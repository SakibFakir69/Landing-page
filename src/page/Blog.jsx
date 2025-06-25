

import React from 'react'
import Card from '../shared/Card'

function Blog() {
    

    const blog = [


        {
            id:1, title :"How SaaS is Revolutionizing Business Software in 2025",
            description:"In recent years, Software as a Service (SaaS) has completely changed how businesses consume software. Instead of costly installations and maintenance, companies now rely on cloud-based platforms accessible from anywhere. SaaS offers flexibility by allowing users to scale their services up or down quickly, reduce upfront costs, and always stay up to date without manual upgrades",
            img:"/pexels-pixabay-38568.jpg",
        },
        {
            id:2,
            title:"Step-by-Step Guide: Getting Started with Codext SaaS",

            description:"Getting started with Codext is simple. First, visit our website and sign up for a free trial by providing your email and setting a password. Once registered, log in to access your personalized dashboardHere, you can add projects invite team members, and customize your workflow.  manage resources, and generate reports effortlessly Need  help? Our support team is available 24/7 through chat or email.",
            img:"/pexels-divinetechygirl-1181263.jpg",
        }
        ,
        {
            id:3,
            title :"5 Ways SaaS Improves Productivity for Remote Teams",
            description:"Remote work presents unique challenges such as communication gaps and tool management. SaaS platforms like Codext address these by providing cloud-based access to shared resources, ensuring everyone works on the latest data.Real-time collaboration tools enable instant feedback and seamless teamwork, regardless of location. Automatic updates mean remote teams always use the most secure and feature-rich versions without IT intervention.Additionally, SaaS platforms often integrate with communication apps, calendar tools, and file storage services, centralizing workflows and reducing context switching",
            img:"/pexels-lara-jameson-9623794.jpg"
        },
        {
            id:4,
            title:"The Future of Software: Why Cloud-Based SaaS is Here to Stay",
            description:"The software industry has witnessed a dramatic shift from packaged software to SaaS models over the past decade. Cloud-based SaaS solutions offer scalability, affordability, and continuous innovation that traditional software struggles to match.Security concerns have been addressed with robust encryption, compliance standards, and dedicated cloud providers. SaaS also lowers barriers for startups and SMEs by removing the need for expensive infrastructure.Looking ahead, SaaS will further integrate AI and machine learning to automate processes and deliver personalized user experiences. Codext is committed to evolving alongside these trends to bring cutting-edge software to its users"
            ,
            img:"/pexels-ann-h-45017-20875708.jpg",
        },
       
    ]


  return (
    <div className='p-10 bg-white'>

        <section className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-5'>

            {
                blog.map((item, key)=>(
                    <Card id={item.id}  title={item.title} description={item.description}
                    
                    img={item.img}/>
                ))
            }


        </section>


    </div>
  )
}

export default Blog