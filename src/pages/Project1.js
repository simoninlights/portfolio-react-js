import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Project from "../components/project/Project";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/scroll-to-top/ScrollToTop";

const Home = () => {
    return ( 
        <>
            <Navbar />
            <Header />
            <Project />
            <Footer />
            <ScrollToTop />            
        </>
     );
}
 
export default Home;