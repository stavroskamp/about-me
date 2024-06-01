import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-full w-full overflow-hidden flex flex-col align-middle items-center justify-center pt-40 gap-8">
      <h2 className="font-sans text-2xl pb-3 dark:neutral-200">
        How did we end up here?
      </h2>
      <div className="flex w-96 h-72 relative">
        <Image
          className="w-full h-full"
          layout="fill"
          objectFit="cover"
          src={"/gandalf-lost.gif"}
          alt={"gandalf lost in moria"}
        />
      </div>
      <Link className="underline" href="/">
        Let&apos;s go back
      </Link>
    </div>
  );
}
