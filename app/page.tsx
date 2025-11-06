import Image from "next/image";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import SkillCard from "./components/skill-card/SkillCard";
import { contactInfoTypes } from "./types";
import { skillData, contactData } from "./data";

export default function Home() {
  const getLink = ({ url, name }: contactInfoTypes) => (
    <a
      className="hover:cursor-pointer underline text-pink-400 decoration-pink-400 hover:animate-pulse"
      href={url}
      target="_blank"
    >
      {name}
    </a>
  );

  return (
    <>
      <Navigation />
      <main className="flex flex-1 flex-col items-center px-8 py-16 bg-background-start bg-background-start">
        <div className="flex flex-col container max-w-7xl gap-20">
          <div className="flex flex-col lg:flex-row">
            <div className="flex lg:basis-1/3 justify-center">
              <div className="flex lg:min-w-64 lg:h-64 w-56 h-56 relative">
                <Image
                  className="rounded-full w-full h-full border-solid border-2 border-pink-400"
                  fill
                  style={{ objectFit: "cover" }}
                  src={"/profile.webp"}
                  alt={"photo of me!"}
                />
              </div>
            </div>
            <div className="flex flex-col lg:px-10 mt-12 justify-center items-center lg:mt-0 lg:items-start lg:basis-2/3 text-center lg:text-left">
              <h1 className="font-sans lg:text-6xl text-5xl pb-10 text-white">
                👋 Hi, I&apos;m Stavros!
              </h1>
              <h1 className="font-sans lg:text-3xl text-2xl neutral-200 max-w-160">
                <span className="hover:animate-pulse text-pink-400">
                  A Technical Product Manager with 10+ yrs in Frontend
                  Development & UX
                </span>
              </h1>
            </div>
          </div>
          <div>
            <div className="relative bottom-20" id="about-me" />
            <h2 className="font-sans text-2xl text-white pb-3">About me</h2>
            <p className="text-lg text-slate-400 text-justify">
              I bring over a decade of experience in frontend development, with
              a strong foundation in building scalable, user-focused
              applications. Alongside my technical background, I have deep
              experience in UX, ensuring that products are not only functional
              but intuitive and engaging. Today, I combine these skills in my
              role as a Product Manager, shaping and driving SaaS marketplace
              solutions that empower developers, partners, and customers alike.
              My focus is on bridging technology, design, and strategy to
              deliver impactful digital products.
            </p>
          </div>
          <div>
            <div className="relative bottom-20" id="skills" />
            <h2 className="font-sans text-2xl pb-3 text-white">Skills</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
              {skillData.map((skill) => (
                <SkillCard
                  key={skill.title}
                  icon={skill.icon}
                  title={skill.title}
                  type={skill.type}
                  tags={skill.tags}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="relative bottom-20" id="contact" />
            <h2 className="font-sans text-2xl pb-3 text-white">Contact</h2>
            <p className="text-lg text-slate-400 text-justify">
              Are you looking for a technical leader who can translate complex
              requirements into successful products? With a background spanning
              software development, product strategy, and UX collaboration, I
              specialize in aligning engineering and business goals to deliver
              impactful solutions. Feel free to connect with me on{" "}
              {getLink(contactData.linkedin)}, explore my past work on{" "}
              {getLink(contactData.github)}, or check out my creative side on{" "}
              {getLink(contactData.instagram)}. Let’s connect and discuss how I
              can help drive your product vision forward.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
