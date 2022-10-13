import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>Summarize</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex justify-center bg-white shadow-sm p-4  ">
        <div>
          <Link href="/">
            <a>
              <span className=" text-3xl cursor-pointer text-black font-bold font-serif">
                Summarize
              </span>
            </a>
          </Link>
        </div>
      </div>
      {/* body */}

      <div className="grid md:grid-cols-2 sm:grid-cols-1 sm:p-20 gap-5 p-10">
        <div className="flex justify-center ">
          <Image src="/images/booksindex.jpg" width={500} height={500} />
        </div>
        <div className="grid grid-cols-1 ">
          <div>
            <span className="shadow-lg shadow-slate-100 md:text-5xl text-3xl font-semibold font-serif text-justify">
              A book summary with keypoints that tells you everything you need
              to know. <br />
            </span>
            <h1 className="font-serif mt-3">
              A good summary will give the reader a clear sense of what the book
              is about and whether it is worth reading.
              <br />
            </h1>
            <div className="mt-10">
              <Link href="./books/all-books">
                <a>
                  <button className="  hover:outline-black outline-offset-2 outline ease bg-black p-2 rounded-md text-cyan-50 font-semibold hover:bg-slate-100 hover:text-black w-32">
                    Get Started
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
