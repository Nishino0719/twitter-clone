import Card from "../components/card";
import NotificateHeader from "../components/notificateheader";
import Recommended from "../components/recommended";
import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";
import Trend from "../components/trend";

export default function Notification() {
  const array = [...Array(6)];
  return (
    <div className="flex justify-center h-screen">
      <Sidebar></Sidebar>
      <div className="max-w-screen-sm w-full border-l border-r overflow-scroll">
        <NotificateHeader></NotificateHeader>
        <div className="mt-32">
          <div className="h-auto text-sm text-left block">
            {/* TODO: トレンド一覧 */}
            {array.map((_) => (
              <Card></Card>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Trend></Trend>
        <Recommended></Recommended>
      </div>
    </div>
  );
}
