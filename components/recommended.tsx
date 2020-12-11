import TrendCard from "./trendcard";

const Recommended = () => (
  <div className="w-64 xl:w-80 mt-4 ml-7 lg:block hidden">
    <div
      className="pt-2 h-auto text-sm text-left bg-gray-100 rounded-xl block"
      placeholder="おすすめのユーザー検索"
    >
      <h3 className="font-bold text-lg border-b pl-3 py-1">いまどうしてる？</h3>
      {/* TODO: トレンド一覧 */}
      <TrendCard></TrendCard>
      <TrendCard></TrendCard>
      <TrendCard></TrendCard>
      <TrendCard></TrendCard>
      <TrendCard></TrendCard>
      <TrendCard></TrendCard>
      <button className="text-sm px-4 py-3 text-left rounded-b-xl hover:bg-gray-200 text-blue-400 w-full">
        さらに表示
      </button>
    </div>
  </div>
);

export default Recommended;
