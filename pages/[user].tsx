import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";

export default function UserShow() {
  const router = useRouter();
  const [user, setUser] = useState<string>();
  const [canShow, setCanShow] = useState<boolean>();
  useEffect(() => {
    if (router.asPath !== router.route) {
      setUser(String(router.query.user));
    }
  }, [router]);

  useEffect(() => {
    if (user !== undefined) {
      if (user.length >= 20) {
        setCanShow(Boolean(false));
      } else {
        setCanShow(Boolean(true));
      }
    }
  }, [user]);
  if (canShow && user) {
    return (
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="">
          <button className="btn-blue">{router.query.user} got works!</button>
        </div>
        <Timeline></Timeline>
      </div>
    );
  } else {
    return (
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="">
          <button className="btn-blue">Sorry, that page doesn’t exist!</button>
        </div>
        <Timeline></Timeline>
      </div>
    );
  }
}
