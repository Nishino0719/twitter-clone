const TrendCard = () => (
  <div className="">
    <button className="w-full hover:bg-gray-200">
      <div className="border-b p-1 text-left mt-2">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="absolute right-1 w-7 h-7 rounded-full p-2 stroke-current text-black hover:text-blue-800 hover:bg-blue-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
          <p className="text-xs text-gray-600 ml-2 pb-1">日本のトレンド</p>
        </div>
        <p className="font-bold text-sm ml-2 pb-2">活動休止</p>
        <p className="text-xs text-gray-600 ml-2">6,914件のツイート</p>
      </div>
    </button>
  </div>
);

export default TrendCard;
