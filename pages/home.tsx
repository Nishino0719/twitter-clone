import Card from "../components/card";
import Recommended from "../components/recommended";
import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";
import Trend from "../components/trend";

export default function Home() {
  return (
    <div className="flex justify-center h-screen w-screen">
      <Sidebar></Sidebar>
      <div className="home-content text-center container border-l border-r max-w-screen-sm w-full max-h-screen overflow-scroll">
        <Timeline></Timeline>

        <div className="border-b flex p-3 h-44 mt-14">
          <img
            src="https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg"
            className="w-12 h-12 rounded-full"
            alt=""
          />
          <div className="w-full">
            <div className="flex-1 px-2 pt-1 mt-1">
              <textarea
                rows={3}
                className=" bg-transparent font-medium text-lg w-full outline-none"
                placeholder="いまどうしてる？"
              ></textarea>
            </div>
            <div className="flex border-t w-full content-center pt-2 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-10 h-10 p-2 m-0 cursor-pointer block rounded-full hover:bg-blue-50 stroke-current text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.3}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-10 h-10 p-2 m-0 cursor-pointer block rounded-full hover:bg-blue-50 stroke-current text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.3}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-10 h-10 p-2 m-0 cursor-pointer block rounded-full hover:bg-blue-50 stroke-current text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.3}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-10 h-10 p-2 m-0 cursor-pointer block rounded-full hover:bg-blue-50 stroke-current text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.3}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-10 h-10 p-2 m-0 cursor-pointer block rounded-full hover:bg-blue-50 stroke-current text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.3}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <button
                className="bg-blue-400 text-white font-semibold text-md p-2 rounded-3xl disabled:opacity-60 w-32 absolute right-1 pointer-events-none hidden sm:block"
                disabled
              >
                ツイートする
              </button>
            </div>
          </div>
        </div>
        <div className="h-2 w-full bg-gray-100 border-b"></div>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div>
        <Trend></Trend>
        <Recommended></Recommended>
      </div>
    </div>
  );
}
