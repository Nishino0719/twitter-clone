import Recommended from "../components/recommended";
import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";
import Trend from "../components/trend";

export default function Messages() {
  return (
    <div className="flex justify-center">
      <Sidebar></Sidebar>
      <div className="w-full max-w-screen-sm">
        <div className="mt-10 text-center">
          <h2 className="font-bold">現在開発中です。また後日のお楽しみ</h2>
        </div>
      </div>
      <div className="w-64 xl:w-80 mt-4 ml-7 lg:block hidden"></div>
    </div>
  );
}
