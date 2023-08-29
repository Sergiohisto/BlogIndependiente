import Header from "./components/header";
import MainArticle from "./components/MainArticle";
import NewContainer from "./components/NewContainer";
import ArticlesContainer from "./components/ArticlesContainer";

function App() {
  return (
    <>
      <main className=" px-4 pt-6">
        <Header />
        <div className="md:flex md:gap-8">
          <MainArticle />
          <NewContainer 
           />
        </div>
        <ArticlesContainer/>
      </main>
    </>
  );
}

export default App;
