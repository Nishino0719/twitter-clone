const Timeline = () => (
  <div className="">
    <div className="fixed w-full max-w-screen-sm bg-white z-10 border-r">
      <div className="timeline-header flex relative mt-3 border-b pb-10">
        <h2 className="font-bold absolute left-3">ホーム</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#55acee"
          className="w-6 absolute sm:right-7 right-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default Timeline;
