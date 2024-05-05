import { Link } from "@inertiajs/react";
import { BiLogOut } from "react-icons/bi";
import { GiTennisCourt } from "react-icons/gi";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    icon = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`flex items-center justify-center font-bold w-full p-5 text-white ${
                active ? "bg-red-400" : ""
            } ${className}`}
        >
            {icon == "court" && <GiTennisCourt className="text-lg mr-4" />}
            {icon == "logout" && <BiLogOut className="text-lg mr-4" />}
            {children}
        </Link>
    );
}
