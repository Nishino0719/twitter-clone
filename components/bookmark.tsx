const Bookmark = () => (
  <div className="">
    <div className="fixed w-full max-w-screen-sm bg-white z-10 border-r">
      <div className="timeline-header flex relative mt-3 border-b h-12 pb-10">
        <h2 className="font-bold absolute left-3">ブックマーク</h2>
        <h3 className="font-normal text-gray-500 text-sm absolute bottom-1 left-3">
          @func_of_hash
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="absolute right-1 w-10 h-10 rounded-full p-2 stroke-current  text-blue-400 hover:bg-blue-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default Bookmark;
