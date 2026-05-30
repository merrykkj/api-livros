export default function Header() {
    return (
        <header className="bg-[#2D241E] border-b-2 border-[#E2D1C3] py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

                <button
                    className="block md:hidden text-[#2D241E] p-2 focus:outline-none"
                    aria-label="Abrir menu de navegação"
                >
                    <span className="block w-6 h-0.5 bg-[#2D241E] mb-1"></span>
                    <span className="block w-6 h-0.5 bg-[#2D241E] mb-1"></span>
                    <span className="block w-6 h-0.5 bg-[#2D241E]"></span>
                </button>

                <div className="order-last md:order-first">
                    <a href="/" className="group block font-serif tracking-tight select-none">
                        <span className="sr-only">BiblioClub - Página Inicial</span>
                        <span aria-hidden="true" className="relative z-10 block text-2xl font-bold text-[#E2D1C3] leading-none">
                            Biblio
                        </span>
                        <span aria-hidden="true" className="relative z-20 block text-2xl font-bold text-[#7D5A50] leading-none -mt-2 ml-6 transition-transform group-hover:translate-x-1 duration-300">
                            Club
                        </span>
                    </a>
                </div>

                <nav className="hidden md:flex" aria-label="Menu principal">
                    <ul className="flex justify-center text-[#E2D1C3] gap-7 font-serif font-medium text-sm">
                        <li className="transition transform hover:scale-105">
                            <a href="#hero" className="hover:underline hover:underline-offset-4">Home</a>
                        </li>
                        <li className="transition transform hover:scale-105">
                            <a href="#" className="hover:underline hover:underline-offset-4">Contato</a>
                        </li>
                        <li className="transition transform hover:scale-105">
                            <a href="#" className="hover:underline hover:underline-offset-4">Sobre</a>
                        </li>
                        <li className="transition transform hover:scale-105">
                            <a href="#" className="hover:underline hover:underline-offset-4">Acervo</a>
                        </li>
                    </ul>
                </nav>

                <div className="hidden md:flex space-x-5 items-center">
                    <a href="#" className="border-2 border-[#E2D1C3] text-[#E2D1C3] rounded-2xl font-semibold px-4 py-1.5 hover:text-[#2D241E] hover:bg-[#E2D1C3] inline-block transition transform hover:scale-105">Login</a>
                    <a href="#" className="bg-[#E2D1C3] text-[#2D241E] font-semibold rounded-2xl px-4 py-1.5 inline-block transition transform hover:scale-105">Cadastro</a>
                </div>

            </div>
        </header>
    )
}
