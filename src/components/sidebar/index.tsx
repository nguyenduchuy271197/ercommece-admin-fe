import { ROUTES } from "@/constants";
import NavLink from "./nav-link";
import { UserButton } from "@clerk/nextjs";

export default function SideBar() {
  return (
    <aside className="fixed bg-white w-[var(--sidebar-width)] border-r top-0 left-0 bottom-0">
      <div className="flex flex-col justify-between h-full">
        <ul>
          {ROUTES.map((route) => (
            <li key={route.id}>
              <NavLink {...route} />
            </li>
          ))}
        </ul>

        <div className="pb-4 self-center">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </aside>
  );
}
