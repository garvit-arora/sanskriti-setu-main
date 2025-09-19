import { useState, useEffect } from 'react';
import SvgComponent from './SvgComponent'
import siteinfo from "../assets/sitesinfo.json"
import { Link } from 'react-router-dom';
import '../css/map.css';
import Transition from '../components/Transition';
import { motion } from 'framer-motion';
import menu from '../assets/sectionMenu.json';
import '../css/img-track.css';
// import { log } from 'console';


function Map() {
  

  const [selectedState, setSelectedState] = useState(null);
  const [transformCoor, setTransformCoor] = useState({ scale: 1, translateX: 0, translateY: 0 });
  const [culturalPractices, setCulturalPractices] = useState([]);

   useEffect(() => {
       if (selectedState) {
           const state = siteinfo.states.find((s) => s.name === selectedState);
           if (state && state.cultural_practices) {
               setCulturalPractices(state.cultural_practices);
            } else {
                setCulturalPractices([]);
            }
        } else {
            setCulturalPractices([]);
        }
        
        console.log("Loaded UseEffect");
  }, [selectedState]);

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <Transition>
      <div className='map-container'>
        {
          selectedState && (
            <>
              <motion.div className="sites-container"
                 initial={{ opacity: 0, y:30 }}  
                 animate={selectedState ? { opacity: 1, y: 0 }: { opacity: 0, y:30 }}
              >
                <div>
                <div className="site-list">
                  <h1>Cultural Practices in <br />{selectedState}</h1>
                  <ul>
                    {
                      culturalPractices.map((practice, index) => (
                        <Link key={practice.name} to={`/cultural-site/${practice.name}`}>
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            custom={index}
                            variants={listVariants}
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                            className="site">
                            <div
                              style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "10px" }}
                            >

                              <img
                                src={practice.image}
                                alt={practice.name}
                                style={{ width: '150px', height: '100px', marginRight: '20px', borderRadius: '8px', objectFit: 'cover', }}
                              />
                              <h2>{practice.aspect} : {practice.value}</h2>
                            </div>
                            <p>{practice.description}</p>

                          </motion.div>
                        </Link>
                      ))
                    }
                  </ul>
                </div>
                </div>
          <div id="image-track">
            {
               menu.menu.map((item)=>(
                  <Link to={`/cultural-site`} key={item.id} className='menu-container'>
                    <img src={item.img} alt="img" 
                    className='image' />
                    <h2>{item.heading}</h2>
                  </Link>
                ))
            }
          </div>

              </motion.div>
              <div className="close-btn">
                <button
                  onClick={() => {
                    setSelectedState(null);
                    setTransformCoor({ scale: 1, translateX: 0, translateY: 0 });
                  }}
                >
                  <span className="material-symbols-outlined">
                    close
                  </span>
                </button>
              </div>
            </>
          )
        }
        <SvgComponent selectedState={selectedState} setSelectedState={setSelectedState} transformCoor={transformCoor} setTransformCoor={setTransformCoor} />
      </div>
      
    </Transition>
  )
}

export default Map;
