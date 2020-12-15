import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../components/card";
import Media from "../components/media";
import Profile from "../components/profile";
import Recommended from "../components/recommended";
import Sidebar from "../components/sidebar";
import Trend from "../components/trend";

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
      <div className="flex justify-center h-screen w-screen">
        <Sidebar></Sidebar>
        <div className="home-content text-center container border-l border-r max-w-screen-sm w-full max-h-screen overflow-scroll relative">
          <Profile></Profile>
          <div className="mt-14">
            <img
              src="https://pbs.twimg.com/profile_banners/1238806202634473472/1584278425/1500x500"
              alt=""
              className="w-full"
            />
          </div>
          <div className="w-36 h-36 m-3 bg-white rounded-full absolute top-44">
            <img
              src="https://pbs.twimg.com/profile_images/1238812638387163136/xVj9-uVR_400x400.jpg"
              className="w-32 h-32 rounded-full absolute top-2 left-2"
              alt=""
            />
          </div>
          <a
            href="/userr"
            role="button"
            className=" font-md text-base p-4 btn-blue rounded-full border-black bg-white text-blue-400 hover:bg-blue-50 text-center"
          >
            プロフィールを編集
          </a>
          <div className=" h-52 border-b-2"></div>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div>
          <Trend></Trend>
          <Media></Media>
          <Recommended></Recommended>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="home-content text-center container border-l border-r max-w-screen-sm w-full max-h-screen overflow-scroll">
          <Profile></Profile>
          <div className="text-center">
            <h3 className="font-bold text-2xl">このアカウントは存在しません</h3>
            <p className="font-normal">
              キーワードを変えて検索してみてください。
            </p>
          </div>
        </div>
      </div>
    );
  }
}
