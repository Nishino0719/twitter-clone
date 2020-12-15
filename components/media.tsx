const array = [...Array(6)];

const Media = () => (
  <div className="w-64 xl:w-80 mt-4 ml-7 lg:block hidden">
    <div className="h-auto block">
      {/* TODO: トレンド一覧 */}
      <div className=" flex flex-wrap">
        {array.map((_) => (
          <div className="cursor-pointer w-1/3 h-auto border-r-2 border-b-2 border-gray-50">
            <img
              src="https://pbs.twimg.com/media/EnOTRpEVEAEB24E?format=jpg&name=120x120"
              alt=""
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Media;
