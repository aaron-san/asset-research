import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-start items-center pt-8 sm:pt-8 bg-gray-100">
            <div>
                <Link
                    href="/ticker-profiles"
                    className="border border-slate-300 shadow-lg px-4 py-1 rounded-lg bg-slate-100"
                >
                    Home
                </Link>
            </div>

            <div className="w-full sm:max-w-xl mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
