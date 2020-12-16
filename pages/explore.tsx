import ExploreHeader from "../components/exploreheader";
import Recommended from "../components/recommended";
import Sidebar from "../components/sidebar";
import TrendCard from "../components/trendcard";

export default function Explore() {
  const array = [...Array(6)];
  return (
    <div className="flex justify-center">
      <Sidebar></Sidebar>
      <div className="max-w-screen-sm w-full border-l border-r">
        <ExploreHeader></ExploreHeader>
        <div className="mt-16">
          <h3 className=" font-semibold text-lg p-3 border-b">トレンド</h3>
          <p className="border-b text-center p-5 font-medium text-gray-500">
            トレンドがありません — こちらは現在開発中です。
          </p>
          <div className="border-b h-2 bg-gray-50"></div>
          <h3 className=" font-semibold text-lg p-3 border-b">
            ここにトレンドが流れる
          </h3>
          <div
            className="pt-2 h-auto text-sm text-left block"
            placeholder="おすすめのユーザー検索"
          >
            {/* TODO: トレンド一覧 */}
            {array.map((_) => (
              <TrendCard></TrendCard>
            ))}
            <button className="text-sm px-4 py-3 text-left text-blue-400 hover:bg-gray-50 w-full">
              さらに表示
            </button>
          </div>
        </div>
      </div>
      <div>
        <Recommended></Recommended>
      </div>
    </div>
  );
}
