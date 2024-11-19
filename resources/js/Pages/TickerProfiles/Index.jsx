import { Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";

// import NewTickerProfileForm from "./Partials/NewTickerProfileForm";

const Index = ({ ticker_profiles }) => {
    const { flash } = usePage().props;
    const { component } = usePage();
    const [flashMsg, setFlashMsg] = useState(flash.message);

    setTimeout(() => {
        setFlashMsg(null);
    }, 2000);

    return (
        <GuestLayout>
            {flashMsg && (
                <div className="absolute top-6 right-6 bg-rose-500 px-8 py-2 rounded-md shadow-lg text-sm text-white">
                    {flashMsg}
                </div>
            )}
            <h1 className="text-2xl">Ticker Profiles</h1>
            <div className="grid grid-cols-[4fr_1fr_15fr] gap-x-4 py-8 mx-auto">
                {/* <NewTickerProfileForm /> */}
                <div className="flex flex-col gap-4">
                    <Link
                        href="ticker-profiles/create"
                        className="px-8 w-fit py-1 bg-gradient-to-r from-cyan-200 to-cyan-100 border-2 border-white text-slate-600 rounded-l-none rounded-r-full shadow-md active:scale-[0.98] font-bold text-xl mt-2"
                    >
                        Add!
                    </Link>
                </div>
                <div className="w-[2px] bg-slate-200 rounded-full"></div>
                <ul className="flex flex-wrap gap-2">
                    {ticker_profiles?.map((profile) => {
                        return (
                            <li
                                key={profile.ticker}
                                className="rounded-full px-4 py-2 text-slate-600 bg-slate-100 border border-slate-300 shadow-md text-2xl active:scale-[0.98] text-center h-fit"
                            >
                                <Link href={`/ticker-profiles/${profile.id}`}>
                                    {profile.ticker}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </GuestLayout>
    );
};

export default Index;
