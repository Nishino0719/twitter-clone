import Sidebar from "../components/sidebar";
import Trend from "../components/trend";

export default function Lists() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <h1>Lists</h1>
      <Trend></Trend>
    </div>
  );
}
