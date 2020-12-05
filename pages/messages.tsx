import Sidebar from "../components/sidebar";
import Trend from "../components/trend";

export default function Messages() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <h1>Messages</h1>
      <Trend></Trend>
    </div>
  );
}
