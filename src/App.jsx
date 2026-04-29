import MainContent from "./components/MainContent/MainContent";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex gap-6">
        <div className="w-[320px] h-fit sticky top-10">
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
