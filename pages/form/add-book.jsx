import Head from "next/head";
import Link from "next/link";

export default function addBook() {
  const result = false;

  function capitalize(input) {
    var words = input.trim().split(" ");
    var CapitalizedWords = [];
    words.forEach((element) => {
      CapitalizedWords.push(
        element[0].toUpperCase() + element.slice(1, element.length)
      );
    });
    return CapitalizedWords.join(" ");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      bookTitle: capitalize(event.target.bookTitle.value),
      bookAuthor: capitalize(event.target.bookAuthor.value),
      keypoint1: event.target.keypoint1.value,
      keypoint2: event.target.keypoint2.value,
      keypoint3: event.target.keypoint3.value,
      keypoint4: event.target.keypoint4.value,
      keypoint5: event.target.keypoint5.value,
      keypoint6: event.target.keypoint6.value,
      keypoint7: event.target.keypoint7.value,
      keypoint8: event.target.keypoint8.value,
      keypoint9: event.target.keypoint9.value,
      keypoint10: event.target.keypoint10.value,
      description1: event.target.description1.value,
      description2: event.target.description2.value,
      description3: event.target.description3.value,
      description4: event.target.description4.value,
      description5: event.target.description5.value,
      description6: event.target.description6.value,
      description7: event.target.description7.value,
      description8: event.target.description8.value,
      description9: event.target.description9.value,
      description10: event.target.description10.value,
    };

    const res = await fetch(
      `https://summarize-books.vercel.app/api/form?` +
        new URLSearchParams({
          API_ROUTE_SECRET: process.env.API_ROUTE_SECRET,
        }),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      }
    );

    result = await res.json();

    if (result.success) {
      alert(result.message);
      document.getElementById("add-book-form").reset();
    } else {
      alert(result.message);
    }
  };

  return (
    <div>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>Summarize | Add Book</title>
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
        <div>
          <Link href="/books/all-books">
            <a className="hover:shadow-lg duration-300">
              <div className="flex  flex-row rounded-md  mt-1.5 cursor-pointer">
                <div className="-mr-9 sm:mr-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="30"
                    fill="currentColor"
                    className="bi bi-arrow-left-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                  </svg>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="font-bold font-serif sm:text-2xl text-2xl text-center pb-0 pt-5">
          Add a New Book
        </h1>
      </div>
      <div className="sm:pl-28 sm:pr-28 p-10">
        <form method="post" onSubmit={handleSubmit} id="add-book-form">
          <div className="mb-6">
            <label
              className="mb-2 block text-xl font-medium text-gray-900 font-serif"
              id="bookTitle"
            >
              Book Title{" "}
            </label>
            <input
              required
              className="font-serif required block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-md font-medium text-gray-900 shadow-sm"
              name="bookTitle"
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-xl font-medium text-gray-900 font-serif"
              id="bookAuthor"
            >
              Book Author
            </label>
            <input
              required
              className=" font-serif required block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-md text-gray-900 shadow-sm font-medium"
              name="bookAuthor"
            />
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Keypoint 1
            </label>
            <input
              required
              className=" font-serif required block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-md text-gray-900 shadow-sm font-medium"
              name="keypoint1"
            />
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Description
            </label>
            <textarea
              required
              name="description1"
              id="message"
              rows="4"
              className=" font-serif block p-2.5 w-full text-md  rounded-lg border border-gray-300 font-medium"
            ></textarea>
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Keypoint 2
            </label>
            <input
              required
              name="keypoint2"
              className=" font-serif required block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-md text-gray-900 shadow-sm font-medium"
            />
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Description
            </label>
            <textarea
              required
              name="description2"
              id="message"
              rows="4"
              className=" font-serif block p-2.5 w-full text-md  rounded-lg border border-gray-300 font-medium"
            ></textarea>
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Keypoint 3
            </label>
            <input
              required
              name="keypoint3"
              className=" font-serif required block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-md text-gray-900 shadow-sm font-medium"
            />
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Description
            </label>
            <textarea
              required
              name="description3"
              id="message"
              rows="4"
              className=" font-serif block p-2.5 w-full text-md  rounded-lg border border-gray-300 font-medium"
            ></textarea>
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Keypoint 4
            </label>
            <input
              required
              name="keypoint4"
              className=" font-serif required block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-md text-gray-900 shadow-sm font-medium"
            />
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Description
            </label>
            <textarea
              required
              name="description4"
              id="message"
              rows="4"
              className=" font-serif block p-2.5 w-full text-md  rounded-lg border border-gray-300 font-medium"
            ></textarea>
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Keypoint 5
            </label>
            <input
              required
              name="keypoint5"
              className=" font-serif required block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-md text-gray-900 shadow-sm font-medium"
            />
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Description
            </label>
            <textarea
              required
              name="description5"
              id="message"
              rows="4"
              className=" font-serif block p-2.5 w-full text-md  rounded-lg border border-gray-300 font-medium"
            ></textarea>
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Keypoint 6
            </label>
            <input
              required
              name="keypoint6"
              className=" font-serif required block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-md text-gray-900 shadow-sm font-medium"
            />
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Description
            </label>
            <textarea
              required
              name="description6"
              id="message"
              rows="4"
              className=" font-serif block p-2.5 w-full text-md  rounded-lg border border-gray-300 font-medium"
            ></textarea>
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Keypoint 7
            </label>
            <input
              required
              name="keypoint7"
              className=" font-serif required block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-md text-gray-900 shadow-sm font-medium"
            />
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Description
            </label>
            <textarea
              required
              name="description7"
              id="message"
              rows="4"
              className=" font-serif block p-2.5 w-full text-md  rounded-lg border border-gray-300 font-medium"
            ></textarea>
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Keypoint 8
            </label>
            <input
              required
              name="keypoint8"
              className=" font-serif required block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-md text-gray-900 shadow-sm font-medium"
            />
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Description
            </label>
            <textarea
              required
              name="description8"
              id="message"
              rows="4"
              className=" font-serif block p-2.5 w-full text-md  rounded-lg border border-gray-300 font-medium"
            ></textarea>
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Keypoint 9
            </label>
            <input
              required
              name="keypoint9"
              className=" font-serif required block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-md text-gray-900 shadow-sm font-medium"
            />
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Description
            </label>
            <textarea
              required
              name="description9"
              id="message"
              rows="4"
              className=" font-serif block p-2.5 w-full text-md  rounded-lg border border-gray-300 font-medium"
            ></textarea>
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Keypoint 10
            </label>
            <input
              name="keypoint10"
              className=" font-serif required block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-md text-gray-900 shadow-sm font-medium"
            />
          </div>
          <div className="mb-6">
            <label className=" font-serif mb-2 block text-xl font-medium text-gray-900">
              Description
            </label>
            <textarea
              name="description10"
              id="message"
              rows="4"
              className=" font-serif block p-2.5 w-full text-md  rounded-lg border border-gray-300 font-medium"
            ></textarea>
          </div>
          <div className="pb-5">
            <button
              type="submit"
              className="rounded-lg bg-black px-5 py-2.5 text-center text-md font-medium text-white  hover:shadow-lg  duration-300"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
