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
              src="https://pbs.twimg.com/profile_banners/813286/1502508746/1500x500"
              alt=""
              className="w-full"
            />
          </div>
          <div className="relative">
            <div className="w-20 h-20 sm:w-32 sm:h-32 bg-white rounded-full absolute sm:-top-16 -top-8 sm:left-4 left-2">
              <img
                src="https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg"
                className="w-20 h-20 sm:w-32 sm:h-32 rounded-full text-left p-1"
                alt=""
              />
            </div>
          </div>
          <div className="mt-3 sm:mt-6 text-right mr-3">
            <a
              href="/userr"
              role="button"
              className=" font-md text-sm sm:text-base p-2 sm:p-3 btn-blue rounded-full bg-white text-blue-400 hover:bg-blue-50 border sm:border-2 border-blue-300"
            >
              プロフィールを編集
            </a>
          </div>
          <div className="text-left px-4 pt-4">
            <h3 className="font-bold text-lg">Barack Obama</h3>
            <h3 className="font-normal text-base text-gray-500">@{user}</h3>
            <p className="pt-3 pb-0">Dad, husband, President, citizen.</p>
          </div>
          <div className="flex px-4 flex-wrap">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 stroke-current text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.3}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.3}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-sm text-gray-500 py-1 sm:py-2 pr-2">
                Washington, DC
              </p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 stroke-current text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.3}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              <a
                className="text-sm text-blue-500 py-1 sm:py-2 pr-2"
                href="https://obamabook.com/"
                target="_brank"
              >
                obamabook.com
              </a>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 stroke-current text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.3}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <p className="text-sm text-gray-500 py-1 sm:py-2 pr-2">
                誕生日:1961年8月4日
              </p>
            </div>
          </div>
          <div className="px-4 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-5 stroke-current text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.3}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-xs sm:text-sm text-left text-gray-500 py-1 sm:py-2 pr-2">
              2007年3月からTwitterを利用しています
            </p>
          </div>
          <div className="flex pb-3">
            <p className="font-semibold sm:text-base text-xs pl-4">59.7万</p>
            <p className=" text-gray-500 sm:text-base text-xs pl-1">
              フォロー中
            </p>
            <p className="font-semibold sm:text-base text-xs pl-4">1.2億</p>
            <p className="text-gray-500 sm:text-base text-xs pl-1">
              フォロワー
            </p>
          </div>
          <div className="flex w-full">
            <div className="p-2 md:p-4 w-1/3 sm:w-3/12 hover:bg-blue-50 hover:text-blue-400 font-semibold cursor-pointer text-gray-500 text-sm sm:text-base border-b-2 border-blue-400">
              <p>ツイート</p>
            </div>
            <div className="p-2 md:p-4 w-1/3 sm:w-4/12 hover:bg-blue-50 hover:text-blue-400 font-semibold cursor-pointer text-gray-500 text-sm sm:text-base">
              <p>ツイートと返信</p>
            </div>
            <div className="p-2 md:p-4 w-1/3 sm:w-3/12 hover:bg-blue-50 hover:text-blue-400 font-semibold cursor-pointer text-gray-500 text-sm sm:text-base">
              <p>メディア</p>
            </div>
            <div className="p-2 md:p-4 w-3/12 hover:bg-blue-50 hover:text-blue-400 font-semibold cursor-pointer text-gray-500 text-sm sm:text-base hidden sm:block">
              <p>いいね</p>
            </div>
          </div>
          <div className="h-auto border-b-2"></div>
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
      <div className="flex justify-center h-screen w-screen">
        <Sidebar></Sidebar>
        <div className="home-content text-center container border-l border-r max-w-screen-sm w-full max-h-screen overflow-scroll">
          <Profile></Profile>
          <div className="border-b">
            <div className="mt-14">
              <div className="w-full bg-gray-300 h-44"></div>
            </div>
            <div className="relative">
              <div className="w-32 h-32 bg-white rounded-full absolute -top-16 left-4">
                <div className="w-32 h-32 rounded-full text-left bg-gray-200 border-4 border-white">
                  {""}
                </div>
              </div>
            </div>
            <div className="m-6 text-left pt-10">
              <h3 className="font-bold text-lg">@{user}</h3>
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-xl mt-10">
              このアカウントは存在しません
            </h3>
            <p className="font-normal text-gray-500 mt-2">
              キーワードを変えて検索してみてください。
            </p>
          </div>
        </div>
        <div>
          <Trend></Trend>
          <Recommended></Recommended>
        </div>
      </div>
    );
  }
}
