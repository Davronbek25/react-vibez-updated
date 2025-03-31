import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './Home'
import NavBar from '../Navbar/NavBar'
import SearchResults from '../DifferentSections/SearchResults';
import Footer from '../Footer/Footer'
import Categories from '../DifferentSections/Categories';
import Artists from '../DifferentSections/Artists';

const Main = () => {
  return (
    <div id='main' className="container-fluid g-0 main-bar common-bg d-inline-flex flex-wrap">
        <NavBar/>
        <div className="container-fluid g-0 mb-md-4" id="content-container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search-results" element={<SearchResults/>} />
            <Route path='/categories' element={<Categories />}/>
            <Route path='/artists' element={<Artists />}/>
          </Routes>
          <Footer />
        </div>
    </div>
  )
}

export default Main