import Link from "next/link";

const NotificateHeader = () => (
  <div className="">
    <div className="fixed w-full max-w-screen-sm bg-white z-10 border-r">
      <div className="timeline-header flex relative mt-1">
        <h3 className="font-semibold text-lg p-1 md:p-3 m-2">通知</h3>
      </div>
      <div className="flex w-full">
        <div className="p-4 w-5/12 md:w-1/2 hover:bg-blue-50 hover:text-blue-400 font-semibold cursor-pointer text-gray-500 text-base border-b-2 border-blue-400 text-center">
          <h3>すべて</h3>
        </div>
        <div className="p-4 w-1/2  hover:bg-blue-50 hover:text-blue-400 font-semibold cursor-pointer text-gray-500 text-base text-center">
          <h3>@ツイート</h3>
        </div>
      </div>
    </div>
  </div>
);

export default NotificateHeader;
