
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
import ResultPage from './Pages/ResultPage';
import LastSection from './components/Navbar/LastSection';
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
          <div>
            <BlogPage /></div>
        </Route>
        <Route path='/Survey'>
          <SurveyPage questions={questions} />
        </Route>
        <Route path='/History'>
          <ResultPage />
        </Route>
      </div>
      <LastSection />
    </div>

  )

};

export default App;
