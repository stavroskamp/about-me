import Image from "next/image";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import SkillCard from "./components/skill-card/SkillCard";
import { contactInfoTypes } from "./types";
import { skillData, contactData } from "./data";

export default function Home() {
  const getLink = ({ url, name }: contactInfoTypes) => (
    <a
      className="hover:cursor-pointer underline dark:text-pink-400 dark:decoration-pink-400"
      href={url}
      target="_blank"
    >
      {name}
    </a>
  );

  return (
    <>
      <Navigation />
      <main className="flex flex-1 flex-col items-center px-8 py-16 bg-amber-50 dark:bg-dark-primary">
        <div className="flex flex-col container max-w-screen-xl gap-20">
          <div className="flex flex-col lg:flex-row">
            <div className="flex lg:basis-1/3 justify-center">
              <div className="flex w-72 h-72 relative">
                <Image
                  className="rounded-full w-full h-full border-solid border-4 border-pink-700 dark:border-pink-400"
                  layout="fill"
                  objectFit="cover"
                  src={"/profile.jpg"}
                  alt={"photo of me!"}
                />
              </div>
            </div>
            <div className="flex flex-col px-10 mt-12 justify-center items-center lg:mt-0 lg:items-start lg:basis-2/3">
              <h1 className="font-sans text-7xl pb-10 dark:neutral-200">
                👋 Hi, I&apos;m Stavros!
              </h1>
              <h1 className="font-sans text-3xl dark:neutral-200 max-w-[40rem]">
                I&apos;m a{" "}
                <span className="hover:animate-pulse text-pink-700 dark:text-pink-400">
                  Front-End developer / UX Designer
                </span>{" "}
                working remotely from Thessaloniki, Greece.
              </h1>
            </div>
          </div>
          <div>
            <h2
              id="about-me"
              className="font-sans text-2xl pb-3 dark:neutral-200"
            >
              About me
            </h2>
            <p className="text-xl dark:text-slate-400">
              I am a passionate Front-End developer with a keen eye for UX
              design. I specialize in creating visually stunning and highly
              functional web interfaces that offer an exceptional user
              experience. Operating remotely from the beautiful city of
              Thessaloniki, Greece, I bring a unique blend of creativity and
              technical expertise to every project, ensuring that your digital
              presence not only looks great but also performs flawlessly. I have
              over {new Date().getFullYear() - 2013} years of experience across
              diverse and complex domains, including geographical information
              systems, natural language processing, touch sensor simulations,
              DNA sequencing, and more.
            </p>
          </div>
          <div>
            <h2
              id="skills"
              className="font-sans text-2xl pb-3 dark:neutral-200"
            >
              Skills
            </h2>
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
            <h2
              id="contact"
              className="font-sans text-2xl pb-3 dark:neutral-200"
            >
              Contact
            </h2>
            <p className="text-xl dark:text-slate-400">
              Are you looking for a skilled frontend developer who also excels
              in UX design? If so, feel free to reach out to me on{" "}
              {getLink(contactData.linkedin)}, explore my projects on{" "}
              {getLink(contactData.github)}, or check out my photos on{" "}
              {getLink(contactData.instagram)}. Let&apos;s connect and discuss
              how I can help bring your vision to life!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
