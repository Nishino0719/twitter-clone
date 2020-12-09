import Recommended from "../components/recommended";
import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";
import Trend from "../components/trend";

export default function Messages() {
  return (
    <div className="flex justify-center">
      <Sidebar></Sidebar>
      <Timeline></Timeline>
    </div>
  );
}
