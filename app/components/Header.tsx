export default function Header() {
  return (
    <header className="w-full py-6 border-b border-glassBorder">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Thisara Gunawardana</h1>

        <nav className="space-x-6 text-sm text-textSecondary">
          <a href="#about" className="hover:text-accent transition">
            About
          </a>
          <a href="#projects" className="hover:text-accent transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-accent transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
