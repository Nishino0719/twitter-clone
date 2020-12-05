import Image from "next/image";
const Sidebar = () => (
  <div className="text-center container max-w-6xl h-screen">
      <div className="text-left ml-12  rounded-xl p-2">
    <Image src="/Twitter_Logo_Blue.png" width="40" height="40"></Image>
      </div>
    <div className="home side-bar__content ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#55acee"
        className="w-8"
      >
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
      <h2 className="font-bold text-blue-500">ホーム</h2>
    </div>
    <div className="trend side-bar__content">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
        className="w-8 text-green-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
        />
      </svg>
      <h2 className="font-bold">話題を検索</h2>
    </div>
    <div className="notification side-bar__content">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="black"
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
      <h2 className="font-bold">通知</h2>
    </div>
    <div className="message side-bar__content">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        className="w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <h2 className="font-bold">メッセージ</h2>
    </div>
    <div className="bookmark side-bar__content">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        className="w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
      <h2 className="font-bold">ブックマーク</h2>
    </div>
    <div className="list side-bar__content">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="black"
        className="w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
      <h2 className="font-bold">リスト</h2>
    </div>
    <div className="user side-bar__content">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        className="w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <h2 className="font-bold">プロフィール</h2>
    </div>
    <button className="btn-blue hover:bg-blue-500">Tweet</button>
  </div>
);

export default Sidebar;
