import Recommended from "../components/recommended";
import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";
import Trend from "../components/trend";

export default function Lists() {
  return (
    <div className="flex justify-center">
      <Sidebar></Sidebar>
      <Timeline></Timeline>
      <div>
        <Trend></Trend>
        <Recommended></Recommended>
      </div>
    </div>
  );
}
