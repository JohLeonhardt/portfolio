import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1> Hi, <br /> I'm
        <img src={LogoTitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass}/> 
        <br />
        web developer
        </h1>
        <h2>Frontend Developer / JavaScript Expert / YouTuber</h2>
        <Link to="/conact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  );
}
export default Home




