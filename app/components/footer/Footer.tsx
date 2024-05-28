export default function Footer() {
  return (
    <footer className="px-8 flex justify-center dark:bg-indigo-950">
      <div className="flex max-w-screen-xl dark:bg-indigo-950">
        Stavros Kampanakis - {new Date().getFullYear()}
      </div>
    </footer>
  );
}
