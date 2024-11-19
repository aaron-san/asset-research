// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function Create() {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors, clearErrors, reset } =
        useForm({
            ticker: "",
            companyName: "",
            companyDescription: "",
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("ticker-profiles.store"));

        // if (!errors.name && !errors.description) {
        // console.log(data);
        // post(route("ticker-profile.store"), {
        //     onError: null,
        //     onSuccess: () => {
        //         router.post(route("ticker-note.store"), {
        //             note_ticker: data.ticker,
        //             note: data.note,
        //         });
        //         reset(
        //             "ticker",
        //             "companyName",
        //             "shortDescription",
        //             "longDescription",
        //             "note"
        //         );
        //         // setOpenForm(false);
        //     },
        // });

        // }
    };

    // if (errors) {
    //     console.log(errors);
    // }

    return (
        // <motion.div
        <div className="min-w-screen min-h-screen bg-orange-100 pt-8">
            <Head title="Create" />

            <div
                className="relative flex flex-col gap-4 p-8 border rounded-md border-dark shadow-md  text-dark w-fit mx-auto pt-8 bg-slate-100"
                // animate={{
                //     opacity: [0, "100%"],
                //     transition: { duration: 0.5 },
                // }}
                // exit={{
                //     opacity: ["100%", 0],
                //     transition: { delay: 1, type: "spring", stiffness: 100 },
                // }}
                // mode="wait"
            >
                <h1 className="text-cyan-500 font-extrabold uppercase">
                    New Ticker Profile
                </h1>
                {/* <button
                onClick={() => {
                    setOpenForm(false);
                    clearErrors();
                }}
                className="absolute px-2 py-1 text-xs opacity-80 hover:opacity-100 top-4 right-4 border-slate-50"
            >
                X
            </button> */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 mx-auto"
                >
                    {/* <InputLabel htmlFor="ticker" value="Ticker" className="" /> */}
                    {/* <label htmlFor="ticker" className="">
                        Ticker:
                    </label> */}

                    {/* <TextInput */}
                    <input
                        id="ticker"
                        type="text"
                        name="ticker"
                        autoFocus
                        value={data.ticker}
                        className="block w-[200px] mt-1"
                        // autoComplete="ticker"
                        placeholder="Ticker"
                        // isFocused={true}
                        onChange={(e) => setData("ticker", e.target.value)}
                    />

                    {/* <InputError message={errors.name} className="mt-2" /> */}

                    {/* <InputLabel htmlFor="companyName" value="Company Name" /> */}
                    {/* <label htmlFor="companyName">Company Name:</label> */}

                    {/* <TextInput */}
                    <input
                        id="companyName"
                        type="text"
                        name="companyName"
                        value={data.companyName}
                        className="block mt-1 w-[400px]"
                        // autoComplete="companyName"
                        placeholder="Company name"
                        onChange={(e) => setData("companyName", e.target.value)}
                    />

                    {/* <InputError message={errors.description} className="mt-2" /> */}

                    {/* <label htmlFor="description">Company Description:</label> */}
                    <textarea
                        id="companyDescription"
                        name="companyDescription"
                        cols="80"
                        rows="8"
                        value={data.companyDescription}
                        className="block w-full mt-1"
                        placeholder="Company description"
                        // autoComplete="notes"
                        onChange={(e) =>
                            setData("companyDescription", e.target.value)
                        }
                    />

                    <div className="flex gap-x-2 justify-center">
                        <Link
                            className="py-2 px-8 border rounded-md border-dark bg-red-300 text-dark text-center active:scale-[0.98]"
                            disabled={processing}
                            href="/ticker-profiles"
                        >
                            Cancel
                        </Link>
                        <button
                            className="py-2 px-8 border rounded-md border-dark bg-dark text-light active:scale-[0.98]"
                            disabled={processing}
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
