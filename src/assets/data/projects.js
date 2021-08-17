import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.jpg';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Sports Snap',
    desc:
      'This is an E-commerce Site. you can easily buy something from here.I build this website for myself.',
    img: UTrackerImg,
    link: 'https://sports-snap.web.app/',
  },
  {
    id: uuidv4(),
    name: 'Recipe',
    desc:
      'Cooking up a good meal can be fun and good food always makes you feel better.you can find your desire food here',
    img: GreenCtgImg,
    link:
      'https://tender-ritchie-b0089a.netlify.app/?fbclid=IwAR0iYWOVAXQKxcC0DU9JxQK1YO336BDQRv8vuBEs7BS5bPwoveZXDkG6Lrg',
  },
  {
    id: uuidv4(),
    name: 'Country Details',
    desc:
      'Using this site you can easily know the current details of any country. like Population , area and there national flag',
    img: CoinTrackerImg,
    link: 'https://sharif-islam.github.io/country-details/index.html',
  },
  {
    id: uuidv4(),
    name: 'Panda Commerce',
    desc:
      'This is another online shopping site.here i did not give any dynamic look of website.I make it for my practicing purpose',
    img: CavinImg,
    link: 'https://sharif-islam.github.io/panda-commerce/',
  },
  {
    id: uuidv4(),
    name: 'Weather',
    desc:
      'A Weather tracking website that will show the current situation of any country or state.it will help you to get dicision what you do today or tomorrow.',
    img: ProjectImg,
    link: 'https://sharif-islam.github.io/weather-measure/',
  },
];

export default projects;
