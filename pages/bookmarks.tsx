import Bookmark from "../components/bookmark";
import Card from "../components/card";
import Recommended from "../components/recommended";
import Sidebar from "../components/sidebar";
import Trend from "../components/trend";

export default function Bookmarks() {
  return (
    <div className="flex justify-center h-screen w-screen">
      <Sidebar></Sidebar>
      <div className="home-content text-center container border-l border-r max-w-screen-sm w-full max-h-screen overflow-scroll">
        <Bookmark></Bookmark>

        <div className="mt-14"></div>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div>
        <Trend></Trend>
        <Recommended></Recommended>
      </div>
    </div>
  );
}
