const Timeline = () => (
  <div className="text-center container border-l border-r max-w-screen-sm w-full">
    <div className="timeline-header flex relative mt-4 border-b pb-10">
      <h2 className="font-bold absolute left-3">ホーム</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#55acee"
        className=" w-6 absolute right-3"
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
);

export default Timeline;
