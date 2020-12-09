const Trend = () => (
  <div className="text-center  ml-7 mt-4 lg:block hidden">
    <div className="left-0">
      <div className="flex left-0">
        <form method="GET">
          <div className="relative text-gray-400 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 stroke-current text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </span>
            <input
              type="search"
              className=" border-blue-400 py-2 w-64 xl:w-80 text-sm text-white bg-gray-200 rounded-full pl-10 focus:border-blue-400 focus:bg-white focus:text-gray-900"
              placeholder="キーワード検索"
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Trend;
