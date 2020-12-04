import { authGuard } from "../hooks/authenications";

export default function Home() {
  authGuard();
  return <div></div>;
}
