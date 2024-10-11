import React from 'react';
import Searchbar from '../components/SearchBarWithFilters';
import Carousel from '../components/Carousel';
import Testimonials from '../components/Testimonials';
import Highlights from '../components/Highlights';

// import Registration from '../components/Registration';
// import Login from '../components/Login';
// import RateForm from '../components/RateForm';
import '../styles.css';

const Home = () => {
  return (
    <div>
      <Searchbar />

      <Highlights />

      <Testimonials />

      {/* <RateForm /> */}

      {/* <Login /> */}

      {/* <Registration /> */}




    </div>
  );
};

export default Home;
