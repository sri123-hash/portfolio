import MainContent from "./components/MainContent/MainContent";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-6 py-6 md:py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[320px] md:sticky md:top-10">
          <SideBar />
        </div>
        <div className="flex-1">
          <MainContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
