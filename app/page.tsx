export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/70 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">
            Ashlo
          </h1>

          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">

          <p className="text-cyan-400 mb-4 text-lg">
            Full Stack Developer
          </p>

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Hi, I'm Ashlo
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl leading-8 mb-8">
            I build scalable web applications using
            Next.js, React, Tailwind CSS, Java, and Spring Boot.
          </p>

          <div className="flex gap-4 justify-center">

            <a
              href="#projects"
              className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="border border-zinc-700 px-6 py-3 rounded-lg hover:border-cyan-400 transition"
            >
              Download Resume
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}