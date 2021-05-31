import React from 'react';
import logo from './logo.jpeg';
import restaurant1 from "./restaurant1.jpeg";
import restaurant3 from "./restaurant3.jpg";
import order from "./order.jpg";
import "./about.css";

const About = (props) =>  {
     return (
       <div>
         <div align="center">
     <img src={logo} height='530' alt="logo"/>
          
<p>
    A successful restaurant is a combination of factors, from exceptional customer service and delicious 
       food to a great atmosphere in a top location. 
       But once you have all of this,  you also need to successfully promote your restaurant online.
      
       Today’s customers are no longer persuaded by cold callers or billboard ads;
        they’re first going to go online, do their research, read some reviews then visit your website.
        </p>
        <br/>
        </div>
         <div class="row">
    <div class="column">
  <img src={restaurant1} height="300" alt="restaurant1"  />
  <br/>
  <b >
  Browse
  </b>
  <br/>
  <p>
Hungry Point has number of dishes.When you open the app,you can scroll through for inspiration<br/> or 
search for a particular  cuisine. When you find something you like, tap to add it to your order.
  </p>
</div>
<div  class="column">
<img src={order} height="300" alt="order"/>
<br/>
<b>Order</b>
<p>
When you’re ready to check out, you’ll see your address, an estimated delivery time, and 
the price of the order including tax and delivery fee. When everything looks right, 
just tap Place order—and that’s it. </p>
</div>
<div  class="column">
    <img src={restaurant3}  height="300" alt="restaurant3"/><br/>
   <b>Track</b>
   <p>
Follow your order in the app. First you’ll see the restaurant accept and start prepping. 
You can pickup or we can deliver.You can track your order on the map.

 </p>
  </div>
  </div>
  </div>  
  
     );
}
    
 

export default About;