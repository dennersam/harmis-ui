

export function Header(){
    return(
        <nav className="flex items-center justify-between bg-indigo-950 flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-3xl tracking-tight">Harmis</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-indigo-400 border-indigo-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-400 hover:text-white mr-4">
                    Docs
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-400 hover:text-white mr-4">
                    Examples
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-400 hover:text-white">
                    Blog
                </a>
                </div>
                <div>
                    <h1 className="text-white text-xl">Username</h1>
                </div>
            </div>
        </nav>
    );
}