import Link from "next/link";

export default function Hero() {
  return (
    <section id="#hero" className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
      
      <div className="flex-1 space-y-8">
        <header className="space-y-4">
          <div className="inline-block bg-musgo/10 text-musgo px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Comunidade de Leitores
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-cafe leading-[1.1]">
            Sua opinião <br />
            <span className="italic font-normal">tem capítulos.</span>
          </h1>
        </header>

        <p className="text-carvalho text-lg md:text-xl leading-relaxed max-w-lg">
          O lugar para registrar suas impressões, dar notas aos seus favoritos e
          descobrir o que o mundo está lendo agora.
        </p>

        <nav
          aria-label="Ações principais"
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/resenhas/criar"
            className="bg-cafe text-papel px-8 py-4 rounded-2xl font-medium shadow-lg hover:bg-carvalho transition transform hover:scale-110 flex items-center justify-center gap-2"
          >
            Escrever Resenha
          </Link>

          <Link
            href="/sobre"
            className="bg-transparent border-2 border-cafe text-cafe px-8 py-4 rounded-2xl font-medium hover:bg-pergaminho/20 transition transform hover:scale-110 text-center"
          >
            Saiba mais
          </Link>
        </nav>

        <div className="flex items-center gap-4 pt-4 border-t border-pergaminho w-fit">
          <ul
            aria-label="Leitores ativos"
            className="flex -space-x-2"
          >
            {[1, 2, 3, 4].map((i) => (
              <li key={i}>
                <div className="w-8 h-8 rounded-full border-2 border-papel bg-argila flex items-center justify-center text-[10px] text-white font-bold">
                  U{i}
                </div>
              </li>
            ))}
          </ul>

          <p className="text-xs text-carvalho font-medium">
            +500 leitores já opinaram hoje
          </p>
        </div>
      </div>

      <div className="flex-1 w-full relative">
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-musgo/10 rounded-full blur-3xl" />

        <figure className="relative overflow-hidden rounded-3xl shadow-2xl border-8 border-white">
          <img
            src="/hero-leitura.jpg"
            alt="Pessoa escrevendo anotações em um livro aberto"
            className="w-full h-full object-cover"
            loading="eager"
          />

          <blockquote className="absolute bottom-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-xl max-w-[200px] hidden lg:block border border-pergaminho rotate-3">
            <div
              aria-label="Avaliação de cinco estrelas"
              className="flex gap-1 mb-2"
            >
              {"★★★★★".split("").map((star, index) => (
                <span
                  key={index}
                  className="text-argila text-xs"
                  aria-hidden="true"
                >
                  {star}
                </span>
              ))}
            </div>

            <p className="text-[10px] italic text-cafe leading-tight">
              "Uma obra-prima que mudou minha forma de ver o mundo..."
            </p>

            <cite className="text-[9px] font-bold mt-2 block text-carvalho not-italic">
              — Ana Clara
            </cite>
          </blockquote>
        </figure>
      </div>

    </section>
  );
}