
import react from 'react'




function About(){
  return(
    
    <div
 className="aboutusbody">
    <section className="aboutus">
        <div className="aboutuscontent">
            <img className="aboutusimg" src={require("./aboutusimage.jpg")} data-aos="fade-right"/>
            <div className="aboutustext">
                <h1 className="aboutush1" data-aos="fade-left">About Us</h1>
                <h5 className="aboutush5" data-aos="zoom-in">laptop finder</h5>
                <p className="aboutuspar" data-aos="fade-up">laptopman.com is a Professional Ecommerce Platform for the suggestion of the best laptops for each
                    category. Here we will provide you with only interesting content, which you will like very much.
                    We're dedicated to providing you with the best of laptops, with a focus on dependability and
                    affordable at the best price. We're working to turn our passion into a booming online website. We
                    hope you enjoy our website as much as we enjoy offering them to you. We will keep posting more
                    important posts on our Website for all of you. Please give your support and love.
                </p>

                
                  

                    

            </div>
        </div>



    </section>




 <div className="animationcontainer" >


                <h1 className='profileheader'>  Meet Our Team</h1>


                <div className="firstprofile"   data-aos="fade-right">
                    <img className="profilepic" src={require('./DSC_0358.JPG')} />
                        
                     
                     <h2 className='profilename' >
                           Abdul Majid&nbsp;&nbsp;

                           <a href='https://www.instagram.com/maji_d_/?hl=en' target='_blank' style={{'text-decoration':'none'}}>
                            <div  >
                            <i class="ri-instagram-line icon"  ></i>

                            </div>


                            </a></h2>
                                
                                </div>

                     

        


                <div className="secondprofile"  data-aos="fade-left">
                    <img className="profilepic" src={require("./andrews.JPG")} />
          
                            
                              <h2 className='profilename'>Andrews Sharvin&nbsp;&nbsp;
                              <a href='https://www.instagram.com/itz_sharvin_/?hl=en' target='_blank' style={{'text-decoration':'none'}}>
                            <div  >
                            <i class="ri-instagram-line icon"  ></i>

                            </div>


                            </a>

                              </h2>
                            
</div>


                <div className="thirdprofile"   data-aos="fade-right">
                    <img  className="profilepic" src={require("./sameer.jpeg")} />

  


                            <h2 className='profilename'>Sameer Pathak&nbsp;&nbsp;
                            <a href='https://www.instagram.com//?hl=en' target='_blank' style={{'text-decoration':'none'}}>
                            <div  >
                            <i class="ri-instagram-line icon"  ></i>

                            </div>


                            </a>


                            </h2>

                                    </div>



                <div className="fourthprofile"  data-aos="fade-left">
                    <img className="profilepic" src={require("./shaz.JPG")} />


                            <h2 className='profilename'>Shaz Ibrahim
                            &nbsp;&nbsp;
                            <a href='https://www.instagram.com/shaazibrahim_p/?hl=en' target='_blank' style={{'text-decoration':'none'}}>
                            <div  >
                            <i class="ri-instagram-line icon"  ></i>

                            </div>


                            </a>
                            </h2>




                          
                          
                                </div>
                                </div>
                                </div>
            


)}


     export default About;
