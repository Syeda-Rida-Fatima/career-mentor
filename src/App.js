
import './index.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Route from './components/Route';
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import HomePage, { questions } from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import CreateAccountPage from './Pages/CreateAccountPage';
import ContactPage from './Pages/ContactPage';
import SurveyPage from './Pages/SurveyPage';

const App = () => {


  return (
    <div>
      <Navbar />

      <div>
        <Route path='/'>
          <HomePage /></Route>
        <Route path='/Login'>
          <LoginPage />
        </Route>
        <Route path='/CreateAccount'>
          <CreateAccountPage />
        </Route>
        <Route path='/Navbar/LastSection'>
          <ContactPage />
        </Route>
        <Route path='/Navbar/TwoColumnSection'>
          <AboutPage />
        </Route>
        <Route path='/Navbar/BlogSection'>
          <div className='mt-24 py-24'> <BlogPage /></div>
        </Route>
        <Route path='/Survey'>
          <SurveyPage questions={questions} />
        </Route>

      </div>
    </div>

  )

};

export default App;