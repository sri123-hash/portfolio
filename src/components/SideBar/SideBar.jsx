import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const SideBar = () => {
  return (
    <div className="bg-zinc-900 text-white rounded-2xl p-6 text-center shadow-md">
      <div className="relative w-fit mx-auto group">
        <img
          src="/media/img.jpeg"
          alt="profile"
          className="w-28 h-28 rounded-full object-cover shadow-lg hover:scale-110 transition duration-300"
        />
      </div>
      <h2 className="text-2xl font-bold mt-4">sivasri vundamatla</h2>
      <p className="text-gray-300 font-medium">Frontend Developer(React JS)</p>
      <p className="text-sm text-gray-400 mt-2">
        HTML | CSS | JavaScript | React.js
      </p>
      <div className="mt-8 space-y-4 text-gray-700 font-medium">
        <a
          href="#about"
          className="block px-4 py-2 rounded-lg bg-zinc-800 hover:bg-green-400 text-white transition"
        >
          About
        </a>

        <a
          href="#experience"
          className="block px-4 py-2 rounded-lg bg-zinc-800 hover:bg-green-500 text-white transition"
        >
          Experience
        </a>

        <a
          href="#projects"
          className="block px-4 py-2 rounded-lg bg-zinc-800 hover:bg-green-500 text-white transition"
        >
          Projects
        </a>
      </div>

      <div className="flex gap-4 mt-4 justify-center">
        <a href="mailto:vundamatlasivasri@gmail.com">
          <FaEnvelope className="text-xl hover:text-green-400 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/sivasri-v-069308160/"
          target="_blank"
        >
          <FaLinkedin className="text-xl hover:text-blue-400 transition" />
        </a>

        <a href="https://github.com/sri123-hash" target="_blank">
          <FaGithub className="text-xl hover:text-gray-300 transition" />
        </a>
      </div>

      <a
        href="public/Sivasri_Developer_Resume.pdf"
        className="mt-8 inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold"
      >
        ↓ Download Resume
      </a>
    </div>
  );
};
export default SideBar;
