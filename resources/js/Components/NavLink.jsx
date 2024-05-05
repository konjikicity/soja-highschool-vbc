import { Link } from "@inertiajs/react";
import { GiTennisCourt } from "react-icons/gi";

export default function NavLink({
    active = false,
    className = "",
    icon = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                (active
                    ? "inline-flex bg-red-400 items-center p-5 text-white my-4 rounded"
                    : "inline-flex items-center hover:bg-gray-400 my-2 p-5 rounded transition duration-150 ease-in-out focus-outline-none") +
                className
            }
        >
            {icon == "court" && <GiTennisCourt className="text-lg mr-2" />}

            {children}
        </Link>
    );
}
