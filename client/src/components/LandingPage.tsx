import '../css/home.css'
import Transition from '../components/Transition'
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <Transition>
            <div className="home">
                <div className="home-content">
                    <div className="heading">
                        {/* <h3>THIS IS</h3> */}
                        
                        <h1>संस्कृति </h1>
                         <h1>सेतु</h1>
                    </div>

                    <NavLink to={"/map"}>
                        <button className="explore-btn">
                            Explore
                        </button>
                    </NavLink>
                </div>
                <div className="green-div"></div>
                <div className="">
                </div>
            </div>
            <section >
            </section>
          
        </Transition>

    )
}

export default Home;
