import Link from "next/link";
export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center w-screen min-h-screen font-nebula-regular">
      <div className="w-3/4 md:w-1/2 mb-[80px]">
        <h1 className="text-4xl my-4 animate-[fadeIn_0.5s]">Voyd Inc.</h1>
        <p className="text-base my-4 animate-[fadeIn_1.5s]">The promises whispered in childhood, echoes of a younger heart, promises yet to keep.</p>
        <div className="text-base my-4 rounded-md animate-[fadeIn_2s]">
          <blockquote className="leading-normal before:content-quote before:relative before:text-gray-400 before:text-[30px] before:top-[5px] before:mr-[10px]">
            Discipline is the strongest form of self-love. It&apos;s ignoring something you want right now for something better later on. Discipline reveals the commitment you have to your dreams. Especially on days you don&apos;t want to. The future You is depending on the current You to keep the promises you made to yourself yesterday.
            <cite className="block text-right italic text-gray-400">- Unknown</cite>
          </blockquote>
        </div>
        <ul className="mt-10">
          <h2 className="text-2xl my-4 animate-fadeIn animate-[fadeIn_2.5s]">We are building...</h2>
          <li className="before:mr-2 before:content-hyphen before:animate-[fadeIn_2.5s]">
            <Link href="https://enrych.github.io/" className="hover:underline animate-[fadeIn_3s]">Enrich Platforms</Link>
          </li>
        </ul>
      </div>

      <div className="absolute bottom-0 w-full h-[60px] flex justify-center items-center animate-[fadeIn_4s]">
        <div>
          <footer>
            <div className="grid place-content-center">
              <div className="grid items-center text-center text-xs gap-12 ">
                <Link className="text-xs" href="https://darhkvoyd.me">
                  <svg className='fill-gray-400 size-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="person">
                    <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z" data-name="person" />
                  </svg>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div >

    </main >
  );
}
