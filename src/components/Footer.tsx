export default function Footer() {
  return (
    <footer className="bg-[#0b1426] text-gray-400 pt-20 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-4 lg:pr-10">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-wide text-white mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-extrabold">G</span>
              </div>
              Gixus.
            </div>
            <p className="mb-8 leading-relaxed text-sm font-medium">
              We provide the best IT solutions for your business. Let's make something great together. We are committed to establishing a standard of excellence.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer border border-white/10">
                 <span className="font-bold text-xs">FB</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer border border-white/10">
                 <span className="font-bold text-xs">TW</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer border border-white/10">
                 <span className="font-bold text-xs">IN</span>
              </div>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Our Links</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6">IT Services</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><a href="#" className="hover:text-primary transition-colors hover:pl-1">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:pl-1">App Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:pl-1">Cloud Consulting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:pl-1">Data Analysis</a></li>
              <li><a href="#" className="hover:text-primary transition-colors hover:pl-1">Cyber Security</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6">Contacts</h4>
            <p className="text-sm font-medium mb-2 hover:text-white transition-colors cursor-pointer">124 Brooklyn, New York, NY 10036</p>
            <p className="text-sm font-medium mb-6 hover:text-white transition-colors cursor-pointer">support@gixus.com</p>
            
            <form className="mt-8 relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 outline-none text-white px-5 py-3.5 rounded-full w-full text-sm focus:border-primary focus:bg-white/10 transition-all font-medium" 
              />
              <button 
                type="button"
                className="absolute right-1 top-1 bg-primary hover:bg-secondary transition-colors text-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium">
          <p>© 2026 Gixus. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
