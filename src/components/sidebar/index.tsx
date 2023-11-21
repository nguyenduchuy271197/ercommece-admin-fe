import { ROUTES } from "@/constants";
import Link from "next/link";
import NavLink from "./nav-link";

export default function kSideBar() {
  return (
    <aside className="fixed bg-white w-[var(--sidebar-width)] border-r top-0 left-0 bottom-0">
      <div>
        <ul>
          {ROUTES.map((route) => (
            <li key={route.id}>
              <NavLink {...route} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
