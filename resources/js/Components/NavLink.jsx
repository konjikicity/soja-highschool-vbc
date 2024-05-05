import { Link } from "@inertiajs/react";
import { GiTennisCourt } from "react-icons/gi";
import { AiOutlinePicture } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

export default function NavLink({
    active = false,
    className = "",
    icon = "",
    children,
    method = "get",
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                (active
                    ? "inline-flex bg-red-400 items-center p-4 text-white my-4 rounded"
                    : "inline-flex items-center hover:bg-red-400 hover:text-white my-4 p-4 rounded transition duration-150 ease-in-out focus-outline-none") +
                className
            }
            method={method}
        >
            {icon == "court" && <GiTennisCourt className="text-lg mr-2" />}
            {icon == "picture" && <AiOutlinePicture className="text-lg mr-2" />}
            {icon == "logout" && <BiLogOut className="text-lg mr-2" />}

            {children}
        </Link>
    );
}
