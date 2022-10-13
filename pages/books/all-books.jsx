import React from "react";
import Link from "next/link";
import Head from "next/head";
import { connectToDatabase } from "../../lib/mongodb";
const booksPage = ({ message }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>Summarize | All Books</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex justify-between flex-row bg-white p-4 shadow-sm sm:pl-10 pr-10">
        <div>
          <Link href="/">
            <a>
              <span className=" text-3xl cursor-pointer text-black font-bold font-serif">
                Summarize
              </span>
            </a>
          </Link>
        </div>
        <div className="bg-black rounded-md cursor-pointer duration-200 hover:shadow-lg">
          <Link href="/form/add-book">
            <a>
              <div className="flex  flex-row rounded-md pl-2 pr-2 mt-1.5 ">
                <div className="mt-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-white font-serif font-medium">
                    Add Book
                  </h1>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 grid-rows-1 gap-6 p-10 justify-items-center">
        {message.map((e) => (
          <div
            className="p-6 flex flex-col w-full bg-white rounded-lg border border-gray-200 hover:shadow-xl  hover:duration-300 "
            key={e._id}
          >
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900   text-center  ">
              {e.book}
            </h5>

            <p className="mb-3 text-gray-900 dark:text-gray-500 font-medium text-center">
              {e.author}
            </p>

            <Link href={`/books/${e.book.split(" ").join("-").toLowerCase()}`}>
              <a>
                <div className="flex justify-center">
                  <button
                    className="rounded-md text-cyan-50 font-semibold "
                    key={e._id}
                  >
                    <span className="inline-flex items-center py-2 px-3 text-sm font-sans   text-white bg-black rounded-lg hover:scale-105 hover:duration-150 hover:ease-in    outline ease   p-2 focus:ring-4 focus:outline-none      text-center">
                      Read more
                      <svg
                        aria-hidden="true"
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export async function getStaticProps() {
  try {
    // connect to the database
    let { db } = await connectToDatabase();

    // fetch the posts
    let posts = await db.collection("books-collection").find({}).toArray();

    // return the posts
    return {
      props: {
        message: JSON.parse(JSON.stringify(posts)),
      },
    };
  } catch (error) {
    // return the error
    return {
      props: {
        message: JSON.parse(JSON.stringify("Something went wrong")),
      },
      revalidate: 10,
    };
  }
}

export default booksPage;
