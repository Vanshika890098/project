import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex items-center justify-between text-white bg-transparent border-b border-white/10">
      <div className="flex items-center gap-2 font-bold text-2xl tracking-wide">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white text-lg">G</span>
        </div>
        Gixus.
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link href="#" className="hover:text-primary transition-colors">Home</Link>
        <Link href="#" className="hover:text-primary transition-colors">Pages</Link>
        <Link href="#" className="hover:text-primary transition-colors">Projects</Link>
        <Link href="#" className="hover:text-primary transition-colors">Services</Link>
        <Link href="#" className="hover:text-primary transition-colors">Blog</Link>
        <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-3 mr-4">
          <div className="bg-white/10 p-2.5 rounded-full">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-300">Need help?</span>
            <span className="text-sm font-bold">(023) 021-073-415</span>
          </div>
        </div>
        <button className="bg-primary hover:bg-secondary transition-all text-white px-6 py-2.5 rounded-full font-medium text-sm">
          Get Consultant
        </button>
      </div>
    </nav>
  );
}
