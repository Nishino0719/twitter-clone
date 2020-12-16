import Link from "next/link";

const ListHeader = () => (
  <div className="">
    <div className="fixed w-full max-w-screen-sm bg-white z-10 border-r">
      <div className="timeline-header flex relative mt-1 pb-1 border-b">
        <Link href="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="ml-4 rounded-full p-2 w-10 h-10 stroke-current text-blue-400 cursor-pointer hover:bg-blue-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>
        <div className="text-left ml-6">
          <h3 className="text-xl font-extrabold">リスト</h3>
          <p className="font-light opacity-50 leading-5">@BarakObama</p>
        </div>
      </div>
    </div>
  </div>
);

export default ListHeader;
