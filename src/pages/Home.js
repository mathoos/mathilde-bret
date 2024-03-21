import Header from '../sections/Header';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
// import Contact from '../sections/Contact';
import './Home.scss';


function Home() {

    return (
        <div>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            {/* <Contact/> */}
        </div>   
    )
}


export default Home;