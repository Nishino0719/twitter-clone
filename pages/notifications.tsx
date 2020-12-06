import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";
import Trend from "../components/trend";

export default function Notification() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <Timeline></Timeline>
      <Trend></Trend>
    </div>
  );
}
