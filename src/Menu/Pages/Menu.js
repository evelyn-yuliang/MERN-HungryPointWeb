import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import ItemBar from '../Components/ItemBar';
import './Menu.css'


let sandwichesList = [
    {
      id: 1,
      image: "beef",
      title: "Beef Sandwich",
      description: "Korean-marinated short ribs with Asian BBQ sauce, topped with kimchi, cucumber, pickled carrots, and cilantro.",
      price: "9.5",
    },
    {
      id: 2,
      image: "pork",
      title: "Pork Sandwich",
      description: "Thick-cut pork belly with luck sauce and optional mayo, topped with pickled yellow radish, cucumber, pickled carrots, and cilantro.",
      price: "8",
    },
    {
      id: 3,
      image: "chicken",
      title: "Chicken Sandwich",
      description: "Garlic-soy marinated chicken with mayo and Asian BBQ sauce, topped with cucumbers, pickled carrots, and cilantro.",
      price: "7.5",
    },
  ];


  let sideList = [
    {
      id: 1,
      image: "fries",
      title: "Fries",
      description: "Home-cut deep-fried fries with mayo, pulled pork seared with spicy Asian-BBQ sauce, green onions, and kimchi",
      price: "7",
    },
    {
      id: 2,
      image: "squid_taco",
      title: "Squid Taco",
      description:"Deep-fried squid rings with lime vinaigrette and mayo, purple cabbage, pickled carrots, and cilantro.",
      price: "5",
    },
    {
      id: 3,
      image: "tofu_taco",
      title: "Tofu Taco",
      description:"Lemongrass marinated tofu with optional mayo, topped with sliced cucumbers, pickled carrots, cilantro, and optional purple cabbage.",
      price: "5",
    },
    {
      id:4,
      image:"clubBao",
      title:"Club Steamed Bao",
      description:"Thick-cut pork belly and fried chicken with mayo and Asian BBQ sauce, topped with cucumbers, pickled carrots, and cilantro.",
      price:"7.5"
    },
    {
      id:5,
      image:"chickenBao",
      title:"Fried Chicken Steamed Bao",
      description:"Crispy fried chicken with mayo, topped with cucumbers, pickled carrots, and cilantro.",
      price:"7.5"
    },
    {
      id:6,
      image:"tofuBao",
      title:"Panko Tofu Steamed Bao",
      description:"Deep-fried panko-crusted tofu with miso sauce, topped with pickled yellow radish, cucumbers, pickled carrots, and cilantro",
      price:"7.5"
    }
  ];

const Menu = () => {

  const [sandwichesList_server, setSandwichesList] = useState([]);

  useEffect(() => {
    axios.get("http://hungrypoint-backend.herokuapp.com/api/menu/sandwich").then((response) => {
      setSandwichesList(response.data);
    });
  }, []);
  
  const [sidesList_server, setSidesList] = useState([]);

  useEffect(() => {
    axios.get("http://hungrypoint-backend.herokuapp.com/api/menu/side").then((response) => {
      setSidesList(response.data);
     
    });
  }, []);

    return (
        <div class="Menu">
            <h1>Sandwich &nbsp;&nbsp;&nbsp;&nbsp;Taco&nbsp;&nbsp;&nbsp;&nbsp;Fries</h1>
            <ItemBar  title='SandWich' list={sandwichesList_server} />
            <ItemBar  title='Side' list={sidesList_server} />
        </div>
    )
}

export default Menu
