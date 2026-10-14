
const Shimmer = () => {
    return (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
                <div
                    key={index}
                    className="animate-pulse overflow-hidden rounded-xl bg-white shadow-sm"
                >
                    {/* Image Placeholder */}
                    <div className="h-48 w-full bg-gray-200" />

                    {/* Content Placeholder */}
                    <div className="space-y-3 p-4">
                        <div className="h-5 w-3/4 rounded bg-gray-200" />
                        <div className="h-4 w-1/2 rounded bg-gray-200" />
                        <div className="h-4 w-full rounded bg-gray-200" />
                        <div className="h-4 w-2/3 rounded bg-gray-200" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
