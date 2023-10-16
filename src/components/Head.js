import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { useSelector } from "react-redux";
import { cacheResults } from '../utils/searchSlice';
import { Link } from "react-router-dom";


function Head() {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions()
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };

  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //  console.log(json[1]); 
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-8 cursor-pointer'
          alt="menu"
          src='https://cdn-icons-png.flaticon.com/512/8182/8182885.png'
        />

        
          <img
            className='h-8 mx-2'
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzg_LCf5ZahVQ42WRFD0PS3TNrpdOhqvckaO6-xgyo7kmVo5KW2EV6CEUakyaSGdmxqw&usqp=CAU'
            alt="youtube-logo"
          />
        

      </div>
      <div className='col-span-10 px-10'>
        <div>
          <input className='px-5 w-1/2 border border-gray-400 p-1 rounded-l-full'
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className='border border-gray-400 p-1 rounded-r-full px-5 py-1 bg-gray-100'>🔍</button>
        </div>

        {showSuggestions && (
          <div className='fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg'>
            <ul>
              {suggestions.map((s) => (
                <li key={s} className='py-2 shadow-sm hover:bg-gray-100'>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
      <div className='col-span-1'>
        <img
          className='h-8'
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon" />

      </div>
    </div>

  )
}

export default Head; 