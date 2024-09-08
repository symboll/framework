import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function Root() {
  const count = useSelector((state: any) =>  state.login.value)
  return (
    <>
      <div>root: { count }</div>
      <Outlet />
    </>
  )
}
