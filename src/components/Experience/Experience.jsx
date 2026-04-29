import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
const Experience = () => {
  return (
    <>
      <section
        id="experience"
        className="bg-zinc-900 text-white p-8 rounded-2xl shawdow-md"
      >
        <h2 className="text-3xl inline-block pb-1">Experience</h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              Frontend Developer | UpSkilling & Project
            </h3>

            <p className="mt-3 text-gray-200 leading-8">
              Focused on strengthening frontend development skills through
              continuous learning and hands-on project development using
              React.js, JavaScript, HTML, CSS, Tailwind CSS, and Bootstrap.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Project-Based Frontend Development
            </h3>
            <p className="mt-3 text-gray-200 leading-8">
              Built responsive web applications including a Blog Site,
              Restaurant App, and Todo App. Worked with reusable components,
              React Hooks, state management, filtering functionality, and modern
              UI design principles.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Skills</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 bg-zinc-800 p-3 rounded-lg hover:scale-105 transition">
              <FaReact className="text-blue-400 text-xl" />
              <span>React.js</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-800 p-3 rounded-lg hover:scale-105 transition">
              <FaJs className="text-yellow-400 text-xl" />
              <span>JavaScript</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-800 p-3 rounded-lg hover:scale-105 transition">
              <FaHtml5 className="text-orange-500 text-xl" />
              <span>HTML</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-800 p-3 rounded-lg hover:scale-105 transition">
              <FaCss3Alt className="text-blue-500 text-xl" />
              <span>CSS</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-800 p-3 rounded-lg hover:scale-105 transition">
              <SiTailwindcss className="text-cyan-400 text-xl" />
              <span>Tailwind CSS</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-800 p-3 rounded-lg hover:scale-105 transition">
              <FaBootstrap className="text-purple-500 text-xl" />
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Experience;
