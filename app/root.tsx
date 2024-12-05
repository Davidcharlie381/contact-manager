import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import "./tailwind.css";
import Sidebar from "./components/Sidebar";

const authRoutes = ["/login", "/register"];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {authRoutes.includes(location.pathname) ? (
          <div>auth</div>
        ) : (
          <main className="grid grid-cols-12 gap-5">
            <div className="col-span-4">
              <Sidebar />
            </div>
            <div className="col-span-8">
              <Outlet />
            </div>
          </main>
        )}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
