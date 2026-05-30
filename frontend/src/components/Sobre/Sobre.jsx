import { MessageSquareQuote, BookOpen, Library } from "lucide-react";
export default function Sobre() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">

            <header className="flex flex-col items-center text-center mb-20">
                <p className="text-musgo font-sans font-bold text-xs uppercase tracking-[0.3em] mb-4">
                    Sobre o Projeto
                </p>

                <h1 className="font-serif text-5xl md:text-7xl text-cafe leading-tight">
                    Pelas histórias que <br />
                    <span className="italic font-normal underline decoration-pergaminho underline-offset-8">
                        nos atravessam.
                    </span>
                </h1>
            </header>

            <section
                aria-labelledby="sobre-biblioclub"
                className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32"
            >
                <div className="space-y-8">

                    <div className="space-y-4">
                        <h2
                            id="sobre-biblioclub"
                            className="text-musgo font-sans font-bold text-sm uppercase tracking-wider"
                        >
                            O que é o BiblioClub?
                        </h2>

                        <p className="text-carvalho text-xl leading-relaxed font-serif italic">
                            Um santuário digital dedicado à crítica literária pessoal
                            e ao registro de experiências de leitura.
                        </p>
                    </div>

                    <div className="space-y-6 text-cafe/80 leading-loose text-base">
                        <p>
                            O <strong>BiblioClub</strong> nasceu para ser mais do que
                            uma lista de livros. É uma plataforma de curadoria afetiva
                            onde você pode registrar suas impressões, atribuir notas e
                            construir um histórico reflexivo de cada obra que passou
                            pelas suas mãos.
                        </p>

                        <p>
                            Acreditamos que a experiência de leitura só se completa
                            no diálogo. Quando você compartilha uma opinião, você
                            eterniza sua relação com o autor e oferece um norte para
                            outros leitores em busca de seu próximo refúgio.
                        </p>
                    </div>

                </div>

                <figure className="relative group">
                    <div className="absolute -inset-4 bg-pergaminho/30 rounded-3xl -rotate-2 transition-transform group-hover:rotate-0"></div>

                    <picture className="relative block overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                        <source
                            media="(min-width: 768px)"
                            srcSet="/hero4.png"
                        />

                        <img
                            src="/hero3.jpg"
                            alt="Ambiente de leitura acolhedor com livros e espaço para escrita"
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </picture>

                    <figcaption className="sr-only">
                        Espaço representando a experiência de leitura e reflexão proposta pela plataforma.
                    </figcaption>
                </figure>
            </section>

            <section
                aria-labelledby="valores"
                className="py-16 border-y border-pergaminho"
            >
                <h2 id="valores" className="sr-only">
                    Valores da plataforma
                </h2>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    <li className="group relative overflow-hidden rounded-3xl border border-pergaminho bg-white/70 backdrop-blur-sm p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">

                        <div className="absolute top-0 left-0 h-1 w-full bg-musgo scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                        <div className="w-12 h-12 rounded-2xl border border-musgo/20 bg-musgo/5 flex items-center justify-center mb-6">
                            <MessageSquareQuote size={22} className="text-musgo" />
                        </div>

                        <h3 className="font-serif text-2xl text-cafe mb-4">
                            Voz do Leitor
                        </h3>

                        <p className="text-carvalho text-sm leading-relaxed">
                            Sua crítica é livre. Criamos ferramentas para você expressar exatamente o que sentiu, sem algoritmos decidindo o valor de uma obra por você.
                        </p>
                    </li>

                    <li className="group relative overflow-hidden rounded-3xl border border-pergaminho bg-white/70 backdrop-blur-sm p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">

                        <div className="absolute top-0 left-0 h-1 w-full bg-argila scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                        <div className="w-12 h-12 rounded-2xl border border-argila/20 bg-argila/5 flex items-center justify-center mb-6">
                            <BookOpen size={22} className="text-argila" />
                        </div>

                        <h3 className="font-serif text-2xl text-cafe mb-4">
                            Refúgio Visual
                        </h3>

                        <p className="text-carvalho text-sm leading-relaxed">
                            Interface minimalista focada na legibilidade. Um design que respeita o tempo da sua escrita e a profundidade do seu pensamento.
                        </p>
                    </li>

                    <li className="group relative overflow-hidden rounded-3xl border border-pergaminho bg-white/70 backdrop-blur-sm p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">

                        <div className="absolute top-0 left-0 h-1 w-full bg-cafe scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                        <div className="w-12 h-12 rounded-2xl border border-cafe/20 bg-cafe/5 flex items-center justify-center mb-6">
                            <Library size={22} className="text-cafe" />
                        </div>

                        <h3 className="font-serif text-2xl text-cafe mb-4">
                            Diário Literário
                        </h3>

                        <p className="text-carvalho text-sm leading-relaxed">
                            Mantenha um acervo organizado de todas as suas leituras lidas e em andamento, consolidando sua identidade como leitor crítico.
                        </p>
                    </li>

                </ul>
            </section>

            <section className="mt-32 text-center">
                <blockquote className="font-serif italic text-3xl text-cafe max-w-3xl mx-auto leading-snug">
                    <p>
                        "A leitura é uma conversa. Todos os livros falam.
                        Mas um bom livro também escuta."
                    </p>
                </blockquote>

                <cite className="block mt-6 text-musgo font-sans font-bold text-xs uppercase tracking-widest not-italic">
                    — Mark Haddon
                </cite>
            </section>

        </main>
    );
}