import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';



function Footer(){
    return(
       <div className="footer" style={{backgroundColor:"black"}}>
       <div className="container">
           <div className="row justify-content-center">             
               <div className="col-7 col-sm-5" style={{color:'white'}}>
    
               </div>
               </div>
               <div className="row justify-content-center">             
                   <div className="col-auto">
                   <h4 style={{color:'white'}}>Social Media Platforms</h4>
                   <address>
                  <a href="https://www.facebook.com/FinservMARKETS/?utm_source=cap&utm_medium=google_search&utm_campaign=sg_bfl_mkt_exact&utm_term=Bajaj%20finserv&gclid=Cj0KCQjw0K-HBhDDARIsAFJ6UGikE4FaIlKKdltjiIp53ZGluRDEn8ESGB4yILr6PmLvlexwMpymdsAaAoA6EALw_wcB"><FacebookIcon style={{fontSize:'xx-large',marginLeft:"15px",marginRight:"15px"}}/></a>
                  <a href="https://www.linkedin.com/company/finserv-markets/?utm_source=cap&utm_medium=google_search&utm_campaign=sg_bfl_mkt_exact&utm_term=Bajaj%20finserv&gclid=Cj0KCQjw0K-HBhDDARIsAFJ6UGikE4FaIlKKdltjiIp53ZGluRDEn8ESGB4yILr6PmLvlexwMpymdsAaAoA6EALw_wcB"> <LinkedInIcon style={{fontSize:"xx-large",marginLeft:"15px",marginRight:"15px"}}/></a> 
                  <a href="https://twitter.com/FinservMARKETS?utm_source=cap&utm_medium=google_search&utm_campaign=sg_bfl_mkt_exact&utm_term=Bajaj%20finserv&gclid=Cj0KCQjw0K-HBhDDARIsAFJ6UGikE4FaIlKKdltjiIp53ZGluRDEn8ESGB4yILr6PmLvlexwMpymdsAaAoA6EALw_wcB"><TwitterIcon style={{fontSize:"xx-large",marginLeft:"15px",marginRight:"15px"}}/></a>
                  <a href="https://www.youtube.com/channel/UChVaY48Lo-XXCzBI4cRvpTA"><YouTubeIcon  style={{fontSize:"xx-large",color:"red",marginLeft:"15px",marginRight:"15px"}}/></a>
                   </address>
                   <p style={{color:'white',fontSize:"large",paddingLeft:"5px",paddingRight:"5px"}}>© 2021 Bajaj Finserv Direct Limited</p>
                      
                   </div>
               </div>
           </div>
           </div>
    )
   }
   
   export default Footer;