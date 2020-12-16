import ListHeader from "../components/listheader";
import Recommended from "../components/recommended";
import Sidebar from "../components/sidebar";
import Trend from "../components/trend";

export default function Lists() {
  return (
    <div className="flex justify-center">
      <Sidebar></Sidebar>
      <div className="max-w-screen-sm w-full border-l border-r">
        <ListHeader></ListHeader>
        <div className="mt-16">
          <h3 className=" font-semibold text-lg p-3 border-b">表示中</h3>
          <p className="border-b text-center p-5 font-medium text-gray-500">
            表示するリストがありません —
            すぐに表示できるようにお気に入りのリストを最大5件固定できます。
          </p>
          <div className="border-b h-2 bg-gray-50"></div>
          <h3 className=" font-semibold text-lg p-3 border-b">自分のリスト</h3>
          <div className="text-center">
            <h3 className=" font-semibold text-lg mt-10">
              まだリストを作成してません
            </h3>
            <h4 className="p-5 font-medium text-gray-500">
              作成または登録するとここに表示されます。
            </h4>
            <button className="bg-blue-400 text-white font-semibold text-md p-2 rounded-3xl w-32 m-1">
              リストを作成
            </button>
          </div>
        </div>
      </div>
      <div>
        <Trend></Trend>
        <Recommended></Recommended>
      </div>
    </div>
  );
}
