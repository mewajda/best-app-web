import React from 'react';

function App() {
    const cards = [
        { title: 'Card One', description: 'This is the first card.' },
        { title: 'Card Two', description: 'This is the second card.' },
        { title: 'Card Three', description: 'This is the third card.' }
    ];

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Best App</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition-shadow border border-gray-100"
                    >
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">{card.title}</h2>
                        <p className="text-gray-600">{card.description}</p>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default App;
