import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";
import Trend from "../components/trend";

export default function Home() {
    return (
      <div className="overflow-y-scroll overflow-x-auto flex">
        <Sidebar></Sidebar>
        <Timeline></Timeline>
        <Trend></Trend>
      </div>
    )
  }
  