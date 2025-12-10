import Landing from "./home/landing";
import Header from "./header";
const Home = () => {
  return (
    <div className = "bg-green">
      <div className = "py-3">
        <Header title = ""/>
        <Landing />
      </div>
    </div>
  )
};

export default Home;