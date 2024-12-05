import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1 className="text-5xl font-semibold my-5">Welcome</h1>
      <p className="text-xl">Click on a contact to preview or edit  </p>
    </div>
  );
}
