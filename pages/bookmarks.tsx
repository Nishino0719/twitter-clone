import Recommended from "../components/recommended";
import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";
import Trend from "../components/trend";

export default function Bookmarks() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Timeline></Timeline>
      <div className="relative">
        <div className="absolute left-0">
          <Trend></Trend>
          <Recommended></Recommended>
        </div>
      </div>
    </div>
  );
}
