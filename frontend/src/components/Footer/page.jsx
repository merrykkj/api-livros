export default function Footer() {
    return (
        <footer className="bg-[#2D241E] py-14 border-t border-[#7D5A50]/30">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                <section className="space-y-4">
                    <a href="/" className="group block font-serif tracking-tight select-none">
                        <span className="sr-only">BiblioClub - Página Inicial</span>
                        <span aria-hidden="true" className="relative z-10 block text-3xl font-bold text-[#E2D1C3] leading-none">
                            Biblio
                        </span>
                        <span aria-hidden="true" className="relative z-20 block text-3xl font-bold text-[#7D5A50] leading-none -mt-2 ml-6 transition-transform group-hover:translate-x-1 duration-300">
                            Club
                        </span>
                    </a>

                    <blockquote className="text-[#E2D1C3]/70 text-sm italic leading-relaxed max-w-[250px]">
                        <p>"A leitura é para o intelecto o que o exercício é para o corpo."</p>
                    </blockquote>
                </section>

                <section className="flex flex-col md:items-end text-left md:text-right">
                    <h2 className="text-[#7D5A50] font-sans font-bold text-xs uppercase tracking-[0.2em] mb-4">
                        Desenvolvimento
                    </h2>

                    <small className="text-[#E2D1C3]/60 text-xs leading-loose block">
                        Interface desenhada para leitores.<br />
                        Dados via <a href="https://openlibrary.org/" rel="noopener noreferrer" target="_blank" className="hover:text-white underline decoration-[#7D5A50] transition-colors">Open Library API</a>.<br />
                        <time>© 2026</time> BiblioClub.
                    </small>
                </section>

            </div>
        </footer>
    );
}