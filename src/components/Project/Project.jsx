const Project = () => {
  return (
    <>
      <div>
        <section
          id="projects"
          className="bg-zinc-900 text-white p-8 rounded-2xl shadow-md"
        >
          <h2 className="text-3xl inline-block pb-1">Projects</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
              <img
                src="/media/Todo.png"
                alt="Todo App"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">Todo App</h3>
              </div>
              <p className="text-gray-300 text-sm mt-2">
                A task management app to add, delete, and filter task...
              </p>
              <a
                href="https://github.com/sri123-hash/todo-app/"
                target="_blank"
                className="text-green-400 font-medium block mt-2"
              >
                GitHub Link
              </a>
            </div>

            <div className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
              <img
                src="/media/Restaurant.png"
                alt="Restaurant details with Login"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">
                  Restaurant Details
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  A restaurant details app that allows users to log in and
                  explore various restaurants, view food categories, and check
                  delivery time and ratings for better decision-making.
                </p>
              </div>
              <a
                href="https://github.com/sri123-hash/React-login-with-Restaurant-Details"
                target="_blank"
                className="text-green-400 font-medium block mt-2"
              >
                GitHub Link
              </a>
            </div>

            <div className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
              <img
                src="/media/Blog_Site.png"
                alt="Blog Site"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">Blog Site</h3>
                <p className="text-gray-300 text-sm mt-2">
                  A multi-category blog platform featuring content on cooking,
                  fitness, health, and travel, designed to provide users with an
                  intuitive browsing experience across different topics.
                </p>
                <span className="text-gray-500 text-sm">Link coming soon</span>
              </div>
              <a
                href="https://github.com/your-link"
                target="_blank"
                className="text-green-400 font-medium block mt-2"
              >
                GitHub Link
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Project;
