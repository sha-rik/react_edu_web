import React from "react";
import Navbar from "./components/Navbar.js";
import Filter from "./components/Filter.js";
import Cards from "./components/Cards.js";
import { useState,useEffect } from "react";

import { filterData,apiUrl } from "./data.js";
import { toast } from "react-toastify";

function App () {

  const [courses,setCourses]=useState(null);

  useEffect(()=>{

    const fetchData = async () => {

      try{
        const res=await fetch(apiUrl);
        const output=await res.json();
        setCourses(output.data);
      }
      catch(err)
      {
        toast.error("Something went wrong");
      }


    }
    fetchData();




  },[])



  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
      <div>
        <Filter filterData={filterData} />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center 
          item-center min-h-[50vh]">
        <Cards courses={courses} />
      </div>
      </div>
    </div>
  );

};

export default App;
