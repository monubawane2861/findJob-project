
import Header from '../header';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {


  return (

    <>

        
      <div className='home-cont'>

      <Header />

              <div className='home-bg-box-cont'>

                <div className='head-para'>
              <h1 className='home-heading' style={{ color: "black" }}> Find the right Job for your life</h1>
              <p style={{ color: "black" }}>millions of people serching for jobs,salary, information, company review find <br /> job that fits your ability and your potential</p>

              {/* <Link to="/jobs">
             <button className='btn home-btn findjobbtn'>Find Jobs</button>
           </Link> */}
              </div>

             
              
              <div className='home-img-girl'>
                <img src="image/image.png"/>
              </div>
              </div>
          
        </div>




    </>
  )
}

export default Home;