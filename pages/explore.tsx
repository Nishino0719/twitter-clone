import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";
import Trend from "../components/trend";

export default function Explore() {
  return (
    <div className="flex justify-center">
      <Sidebar></Sidebar>
      <Timeline></Timeline>
    </div>
  );
}
