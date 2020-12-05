import Sidebar from "../components/sidebar";
import Trend from "../components/trend";

export default function Bookmarks() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <h1>Bookmarks</h1>
      <Trend></Trend>
    </div>
  );
}
