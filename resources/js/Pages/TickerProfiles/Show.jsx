import { Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

const Show = ({ ticker_profile }) => {
    const { delete: destroy } = useForm();

    function handleDelete(e) {
        e.preventDefault();
        // destroy(`/ticker-profiles/${tickerProfile.id}`);
        if (confirm("Are you sure you want to delete this?")) {
            destroy(route("ticker-profiles.destroy", ticker_profile));
        }
    }
    return (
        <GuestLayout>
            <div className="mx-auto mt-6">
                <div className="text-gray-500 text-sm text-right">
                    <span className="">Last updated: </span>
                    <span>
                        {new Date(ticker_profile.updated_at).toLocaleString()}
                    </span>
                </div>
                <p className="text-2xl">{ticker_profile.ticker}</p>
                <p>{ticker_profile.companyDescription}</p>
                <div className="flex items-center justify-start gap-2 mt-4">
                    <form onSubmit={handleDelete}>
                        <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white active:scale-[0.98]">
                            Delete
                        </button>
                    </form>
                    {/* <Link href={`/ticker-profiles/${tickerProfile.id}/edit`}
                    className="bg-green-500 rounded-md text-sm px-4 py-1 text-white">Update</Link> */}
                    <Link
                        href={route("ticker-profiles.edit", ticker_profile)}
                        className="bg-green-500 rounded-md text-sm px-4 py-1 text-white active:scale-[0.98]"
                    >
                        Edit
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Show;
