import About from "../About/About";
import Experience from "../Experience/Experience";
import Project from "../Project/project";
const MainContent = () => {
  return (
    <div className="space-y-8">
      <About />
      <Experience />
      <Project />
    </div>
  );
};
export default MainContent;
