import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { connectToDatabase } from "../../lib/mongodb";
export default function summary({ summary }) {
  let title = summary[0].title;
  const header = `Summarize | ${title}`;
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>{header}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col pb-10">
        <div className="flex flex-row pl-5 pt-3 bg-black  sticky top-0 left-0 right-0">
          <Link href="/books/all-books">
            <a>
              <Image
                src="/images/arrowIcon.png"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </a>
          </Link>
        </div>
        <div className="flex flex-col justify-center bg-black pl-28 pr-28 pb-24 pt-16 -mt-5">
          <h1 className="text-center font-sans text-4xl font-bold text-white sm:text-6xl">
            {summary[0].title}
          </h1>
          <h1 className=" mt-2 text-center font-sans font-semibold text-gray-400 sm:text-2xl">
            {summary[0].author}
          </h1>
        </div>

        <div className="flex flex-col pl-8 pr-8  mt-10 sm:ml-10 ">
          <h1 className="text-2xl font-sans font-medium underline">
            Keypoints
          </h1>
          {summary[0].keypoints.map((e, i) => (
            <div className="mt-5" key={i}>
              <ul className="space-y-4 mt-4">
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-gray-50 stroke-black stroke-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>

                  <p
                    className="ml-4 font-sans font-medium text-xl sm:text-justify"
                    key={e.keypoint}
                  >
                    {e.keypoint}
                  </p>
                </li>
              </ul>
              <div
                className="text-lg font-sans font-medium text-gray-500"
                key={e._id}
              >
                <h1 className="ml-10 text-justify sm:text-lg text-sm">
                  {e.summary}{" "}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row-reverse pl-5 pr-5 pb-5">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block p-3 mr-2 bg-black text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  bottom-5 right-5 hover:scale-110 hover:duration-100 hover:ease-in-out"
          id="btn-back-to-top"
          onClick={backToTop}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            className="w-4 h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

// export async function getStaticPaths() {
//   const response = await fetch("http://localhost:3000/api/data", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const datas = await response.json();
//   const paths = datas.message.map((e) => {
//     return { params: { summary: e.Book.split(" ").join("-").toLowerCase() } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

function capitalize(input) {
  var words = input.split(" ");
  var CapitalizedWords = [];
  words.forEach((element) => {
    CapitalizedWords.push(
      element[0].toUpperCase() + element.slice(1, element.length)
    );
  });
  return CapitalizedWords.join(" ");
}

// export async function getStaticProps(context) {
//   const { params } = context;
//   let data = params.summary;
//   const response = await fetch(
//     "http://localhost:3000/api/data?" +
//       new URLSearchParams({
//         API_ROUTE_SECRET: process.env.API_ROUTE_SECRET,
//       }),
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         summary: capitalize(data.split("-").join(" ")),
//       }),
//     }
//   );

//   const summary = await response.json();

//   return {
//     props: {
//       summary,
//     },
//     revalidate: 10,
//   };
// }

//cant pass query params in getStaticPaths so moved to ServerSideProps
// export async function getServerSideProps(context) {
//   const { params } = context;
//   let data = params.summary;
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/data?` +
//       new URLSearchParams({
//         API_ROUTE_SECRET: process.env.API_ROUTE_SECRET,
//       }),
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "User-Agent": "*",
//       },
//       body: JSON.stringify({
//         summary: capitalize(data.split("-").join(" ")),
//       }),
//     }
//   );

//   const summary = await response.json();

//   return {
//     props: {
//       summary,
//     },
//   };
// }

export async function getServerSideProps(context) {
  const { params } = context;
  let data = params.summary;

  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/data?` +
  //     new URLSearchParams({
  //       API_ROUTE_SECRET: process.env.API_ROUTE_SECRET,
  //     }),
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "User-Agent": "*",
  //     },
  //     body: JSON.stringify({
  //       summary: capitalize(data.split("-").join(" ")),
  //     }),
  //   }
  // );

  // const summary = await response.json();

  // return {
  //   props: {
  //     summary,
  //   },
  // };

  try {
    // connect to the database
    let { db } = await connectToDatabase();
    let bookTitle = capitalize(data.split("-").join(" "));
    // fetch the posts
    let posts = await db
      .collection("summary-collection")
      .find({
        title: bookTitle,
        "keypoints.keypoint": { $exists: true },
      })
      .toArray();
    // return the posts

    return {
      props: {
        summary: JSON.parse(JSON.stringify(posts)),
      },
    };
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
