import React,{ useEffect, useState} from 'react'
import sanityClient from "../client.js";
import plumeria from "../image/homeImg5.jfif";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
  return builder.image(source);
}
const About = () => {
  const [ aurthor , setAurthor ] = useState(null);

  useEffect(() =>{
    sanityClient
      .fetch(
        `*[_type == "aurthor"]{
          name,
          bio,
          "aurthorImage": image.asset->url
        }`
      )
      .then((data) => setAurthor(data))
      .catch(console.error);
  }, []);

  if(!aurthor) return<div>Loading...</div>
  return (
    <main className="relative">
      <img src={plumeria} alt="plumeria flower" className="absolute w-full"/>
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img src={urlFor(aurthor.aurthorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={aurthor.name}/>
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              hey there. I `m{aurthor.name}
              <span className="text-green-100">{aurthor.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
                <BlockContent blocks={aurthor.bio} projectId="fbswcqcf" dataset="production"/>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default About;