import Link from "next/link";

const Card = () => (
  <div className="flex container p-4 border-b hover:bg-gray-100 cursor-pointer min-w-min">
    <img
      src="https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg"
      className="w-10 h-10 rounded-full mr-2"
      alt=""
    />
    <div className="">
      <div className="flex relative">
        <Link href="/BarackObama">
          <h3 className="font-bold mr-1">Barack Obama</h3>
        </Link>
        <h3 className="font-md text-gray-500 hidden sm:block">@BarackObama</h3>
        <h3 className="font-thin text-gray-500">・ 19時間</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="absolute right-1 w-7 h-7 rounded-full p-1 stroke-current text-black hover:text-blue-400 hover:bg-blue-50 top-0 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </div>
      <p className="text-left min-w-min">
        With COVID-19 cases reaching an all-time high this week, we've got to
        continue to do our part to protect one another. This pandemic is far
        from over and your actions can help save lives.
      </p>
      <div className="flex mt-3">
        <div className="comment flex mr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 rounded-full p-1 stroke-current text-black opacity-50 hover:text-blue-700 hover:bg-blue-100 top-0 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <p className="opacity-50 text-sm leading-8 ml-1 hidden sm:block">
            1,356
          </p>
        </div>
        <div className="retweet flex mr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-8 h-8 rounded-full p-1 stroke-current text-black opacity-50 hover:text-green-800 hover:bg-green-100 top-0 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <p className="opacity-50 text-sm leading-8 ml-1 hidden sm:block">
            9,300
          </p>
        </div>
        <div className="heart flex mr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-8 h-8 rounded-full p-1 stroke-current text-black opacity-50 hover:text-red-700 hover:bg-red-100 top-0 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <p className="opacity-50 text-sm leading-8 ml-1 hidden sm:block">
            3万
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-8 h-8 rounded-full p-1 stroke-current text-black opacity-50 hover:text-blue-700 hover:bg-blue-100 top-0 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default Card;
