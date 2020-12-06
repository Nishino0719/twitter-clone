import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";
import Trend from "../components/trend";

export default function Lists() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <h1>Lists</h1>
      <Timeline></Timeline>
      <Trend></Trend>
    </div>
  );
}
