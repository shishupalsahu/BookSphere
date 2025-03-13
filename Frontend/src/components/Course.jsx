import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from "react-router-dom";
import axios from "axios";
function Course() {
  
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
   
  return (
    <>
     <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" mt-28 dark:mt-14 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
          Explore Our Course Library  {" "}
            <span className="text-pink-500"> Your Learning Hub. </span>
          </h1>
          <p className="mt-12">
          Discover a diverse collection of courses designed to inspire and empower book lovers,
           writers, and curious minds alike. Whether you're looking to deepen your literary understanding,
            refine your writing skills, or explore new genres, our carefully curated library has something
             for everyone.
          </p> 
          <Link to="/">
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>

      </div>
    </>
  )
}

export default Course
