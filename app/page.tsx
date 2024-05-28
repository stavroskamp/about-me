import Image from "next/image";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex flex-1 flex-col items-center px-8 pt-16 bg-amber-50 dark:bg-indigo-950">
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
              <h1 className="font-sans text-7xl pb-10 dark:text-white">
                Hi, I&apos;m Stavros!
              </h1>
              <h1 className="font-sans text-3xl dark:text-white max-w-[40rem]">
                I&apos;m a{" "}
                <span className="hover:animate-pulse text-pink-700 dark:text-pink-400">
                  Front-End developer | UX Designer
                </span>{" "}
                working remotely from Thessaloniki, Greece.
              </h1>
            </div>
          </div>
          <div>
            <h2 id="about-me" className="font-sans text-2xl dark:text-white">
              About me
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400">
              I&apos;m a passionate Front-End developer with a keen eye for UX
              design. I specialize in creating visually stunning and highly
              functional web interfaces that offer an exceptional user
              experience. Operating remotely from the beautiful city of
              Thessaloniki, Greece, I bring a unique blend of creativity and
              technical expertise to every project, ensuring that your digital
              presence not only looks great but also performs flawlessly.
            </p>
          </div>
          <div>
            <h2 id="skills" className="font-sans text-2xl dark:text-white">
              Skills
            </h2>
          </div>
          <div>
            <h2 id="contact" className="font-sans text-2xl dark:text-white">
              Contact
            </h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
