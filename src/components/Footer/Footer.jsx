const Footer = () => {
  return (
    <footer className="mt-10 border-t border-zinc-700 pt-6 pb-6 text-center text-gray-400 text-sm">
      <p className="mb-2">Open to opportunities. Let’s connect!</p>

      <p>
        © {new Date().getFullYear()} Sivasri — Built with React 19 + Tailwind
        CSS
      </p>
    </footer>
  );
};
export default Footer;
