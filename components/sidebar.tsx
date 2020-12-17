import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const router = useRouter();
  const urlParams = router.asPath;
  const [home, setHome] = useState<boolean>(false);
  const [explore, setExplore] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const [message, setMessage] = useState<boolean>(false);
  const [bookmark, setBookmark] = useState<boolean>(false);
  const [lists, setLists] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);
  useEffect(() => {
    if (urlParams == "/home") {
      setHome(Boolean(true));
    } else if (urlParams == "/explore") {
      setExplore(Boolean(true));
    } else if (urlParams == "/notifications") {
      setNotification(Boolean(true));
    } else if (urlParams == "/messages") {
      setMessage(Boolean(true));
    } else if (urlParams == "/i/bookmarks") {
      setBookmark(Boolean(true));
    } else if (urlParams == "/userr/lists") {
      setLists(Boolean(true));
    } else if (urlParams == "/BarackObama") {
      setUser(Boolean(true));
    }
  }, [router]);

  return (
    <div className="container h-screen xl:w-60 md:w-20 w-16 text-right px-1 ml-0 relative">
      <div className="text-left rounded-xl p-1 w-44 xl:mr-0">
        <Image src="/Twitter_Logo_Blue.png" width="40" height="40"></Image>
      </div>
      <Link href="/home">
        <div className="home side-bar__content">
          {home ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#55acee"
              stroke="none"
              className="w-8"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              className="w-8"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          )}
          {home ? (
            <h2 className="font-bold text-blue-400 mt-1 xl:block hidden">
              ホーム
            </h2>
          ) : (
            <h2 className="font-bold mt-1 xl:block hidden">ホーム</h2>
          )}
        </div>
      </Link>
      <Link href="/explore">
        <div className="explore side-bar__content">
          {explore ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#55acee"
              stroke="#55acee"
              className="w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
              />
            </svg>
          )}
          {explore ? (
            <h2 className="font-bold text-blue-400 mt-1 xl:block hidden">
              話題を検索
            </h2>
          ) : (
            <h2 className="font-bold mt-1 xl:block hidden">話題を検索</h2>
          )}
        </div>
      </Link>
      <Link href="/notifications">
        <div className="notification side-bar__content">
          {notification ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#55acee"
              stroke="white"
              className="w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          )}
          {notification ? (
            <h2 className="font-bold text-blue-400 mt-1 xl:block hidden">
              通知
            </h2>
          ) : (
            <h2 className="font-bold mt-1 xl:block hidden">通知</h2>
          )}
        </div>
      </Link>
      <Link href="/messages">
        <div className="message side-bar__content">
          {message ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#55acee"
              stroke="white"
              className="w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          )}
          {message ? (
            <h2 className="font-bold text-blue-400 mt-1 xl:block hidden">
              メッセージ
            </h2>
          ) : (
            <h2 className="font-bold mt-1 xl:block hidden">メッセージ</h2>
          )}
        </div>
      </Link>
      <Link as="i/bookmarks" href="/bookmarks">
        <div className="bookmark side-bar__content">
          {bookmark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#55acee"
              stroke="#55acee"
              className="w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          )}
          {bookmark ? (
            <h2 className="font-bold text-blue-400 mt-1 xl:block hidden">
              ブックマーク
            </h2>
          ) : (
            <h2 className="font-bold mt-1 xl:block hidden">ブックマーク</h2>
          )}
        </div>
      </Link>
      <Link as="/userr/lists" href="/list">
        <div className="list side-bar__content">
          {lists ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#55acee"
              stroke="#55acee"
              className="w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          )}
          {lists ? (
            <h2 className="font-bold text-blue-400 mt-1 xl:block hidden">
              リスト
            </h2>
          ) : (
            <h2 className="font-bold mt-1 xl:block hidden">リスト</h2>
          )}
        </div>
      </Link>
      <Link href="/BarackObama">
        <div className="user side-bar__content">
          {user ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#55acee"
              stroke="#55acee"
              className="w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          )}

          {user ? (
            <h2 className="font-bold text-blue-400 mt-1 xl:block hidden">
              プロフィール
            </h2>
          ) : (
            <h2 className="font-bold mt-1 xl:block hidden">プロフィール</h2>
          )}
        </div>
      </Link>
      <div className="more side-bar__content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="font-bold mt-1 xl:block hidden">その他</h2>
      </div>
      <a
        href="/home"
        role="button"
        className="btn-blue mt-5 hover:bg-blue-500 xl:block hidden text-center"
      >
        ツイートする
      </a>
      <button className="btn-blue mt-5 hover:bg-blue-500 block xl:hidden">
        ＋
      </button>
      <div className="user-content xl:w-56 w-auto absolute bottom-0">
        <img
          src="https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg"
          className="w-10 h-10 rounded-full"
          alt=""
        />
        <div className="user-info ml-2 xl:block hidden">
          <h3 className="font-bold text-sm">Barack Obama</h3>
          <h4 className="opacity-50">@BarackObama</h4>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
          className="absolute right-1 w-5 mt-3  xl:block hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </div>
    </div>
  );
}
