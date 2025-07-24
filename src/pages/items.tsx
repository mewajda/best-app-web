import { useQuery } from '@tanstack/react-query';

function Items() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['cards'],
        queryFn: () => fetch(`${import.meta.env.VITE_API_URL}/items`).then((res) => res.json())
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
            {data?.items.map((card: { id: number; name: string }) => (
                <div
                    key={card.id}
                    className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition-shadow border border-gray-100"
                >
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">{card.name}</h2>
                    <p className="text-gray-600">{card.id}</p>
                </div>
            ))}
        </section>
    );
}

export default Items;
