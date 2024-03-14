import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { BarChart } from '@mui/x-charts/BarChart';
//import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useRef } from 'react';
//import { BarChart } from 'react-vis';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import {useState} from 'react';
import { PieChart } from '@mui/x-charts/PieChart';


import "./Dashboard.css";


const pages = ['Home', 'Inventory', 'Dashboard'];
const settings = ['Profile', 'Account', 'Logout'];

function Dashboard() {
 

  const data = [
    { id: 0, value: 75, label: 'In Stock' },
    { id: 1, value: 10, label: 'Out of Stock' },
    { id: 2, value: 15, label: 'Low Stock' },
  ];
  


  const [index, setIndex] = useState(0);
const [index2, setIndex2] = useState(0);


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleSelect2 = (selectedIndex) => {
    setIndex2(selectedIndex);
  };



  return (
  <div className='body9'>
    
   <h1>Statistics</h1>
    <div className='container25'>
      <div className='flex-item2'>
    
      <h3>Sales Statistics</h3><br></br>
      
    <div  style={{ display: 'flex', justifyContent: 'center' ,stroke:'#660763'}}>
     
    <BarChart className='bar' 
    xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }]}
    series={[{ data: [75,77,74,85,79,75,83,91,85,93,87,97], color:'#660763'}]}
    width={700}
    height={400} />
  
    </div></div>
    <div className='flex-item2'>
    <h3>Stock Statistics</h3><br></br><br></br><br></br>
      <div  className='pie' style={{ display: 'flex', justifyContent: 'center'}}>
     
    <PieChart 
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          label: {
            visible: true,
            distance: 5, // Add a gap of 20 pixels between the pie chart and its label
          },
        },
      ]}
     
      height={280}
     
    />

</div>
    
    </div></div><br></br>
    <br></br>
    <h1> Out Of Stock Items</h1><br></br>


    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div id="carousel1" class="carousel slide" data-bs-ride="false">

      <div className="container">
      
      <div className="flex-item item1">
      <Card style={{ width: '18rem' }}>
      <Card.Img className="standard-image" variant="top" src="https://w0.peakpx.com/wallpaper/26/3/HD-wallpaper-food-cheese-still-life.jpg" />
      <Card.Body>
        <Card.Title>Cheese</Card.Title>
        <Card.Text>
          No. of Available Stock : 0
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>

    <div className="flex-item item2">
    <Card style={{ width: '18rem' }}>
      <Card.Img className="standard-image" variant="top" src="https://images3.alphacoders.com/895/895289.jpg" />
      <Card.Body>
        <Card.Title>Food Cereal</Card.Title>
        <Card.Text>
         No. of Available Stock : 0
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    
    <div className="flex-item item3">
    <Card style={{ width: '18rem'
   }}>
      <Card.Img className="standard-image" variant="top" src="https://cdn.pixabay.com/photo/2020/05/10/05/14/pepsi-5152332_640.jpg" />
      <Card.Body>
        <Card.Title>Pepsi</Card.Title>
        <Card.Text>
        No. of Available Stock : 0
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    </div>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button></div>
      </Carousel.Item>
    
      <Carousel.Item>
      <div id="carousel1" class="carousel slide" data-bs-ride="false">

      <div className='container'>   


    <div className="flex-item item4">
     <Card style={{ width: '18rem'
     }}>
      <Card.Img className="standard-image" variant="top" src="https://m.media-amazon.com/images/I/617E3lYGu6L._AC_UF1000,1000_QL80.jpg" />
      <Card.Body>
        <Card.Title>Highlighters</Card.Title>
        <Card.Text>
        No. of Available Stock : 0
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>

    <div className="flex-item item5">
     <Card style={{ width: '18rem'
     }}>
      <Card.Img className="standard-image" variant="top" src="https://wallpapers.com/images/hd/kit-kat-red-08673ch2qalnykf0.jpg" />
      <Card.Body>
        <Card.Title>KitKat</Card.Title>
        <Card.Text>
        No. of Available Stock : 0
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>

    <div className="flex-item item6">
    <Card style={{ width: '18rem'
   }}>
      <Card.Img className="standard-image" variant="top" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV81Ml9taW5pbWFsX3Bob3RvX2JhY2tncm91bmRfb2ZfbWFzY2FyYV9tb2NrdXBfcF8zOTBmMjZhNC1iYzZmLTRhOGMtOTczZC1hMTIzZDgxMWUxYjlfMS5qcGc.jpg" />
      <Card.Body>
        <Card.Title>Mascara</Card.Title>
        <Card.Text>
        No. of Available Stock : 0
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    </div></div>
      </Carousel.Item>
    </Carousel>


   <br></br><br></br>


   <h1> Low Stock Items</h1><br></br>


   <Carousel  activeIndex={index2} onSelect={handleSelect2}>
      <Carousel.Item>
      <div className="container">
      
      <div className="flex-item item1">
      <Card style={{ width: '18rem' }}>
      <Card.Img className="standard-image" variant="top" src="https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyfGVufDB8fDB8fHww" />
      <Card.Body>
        <Card.Title>Butter</Card.Title>
        <Card.Text>
          No. of Available Stock : 3
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>

    <div className="flex-item item2">
    <Card style={{ width: '18rem' }}>
      <Card.Img className="standard-image" variant="top" src="https://www.kannukutty.in/static/images/blog/28/34503b63-3e36-449b-8803-d3a457080b1a.png" />
      <Card.Body>
        <Card.Title>Health Mix</Card.Title>
        <Card.Text>
         No. of Available Stock : 4
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    
    <div className="flex-item item3">
    <Card style={{ width: '18rem'
   }}>
      <Card.Img className="standard-image" variant="top" src="https://png.pngtree.com/background/20230519/original/pngtree-shampoos-in-a-variety-of-scents-picture-image_2651035.jpg" />
      <Card.Body>
        <Card.Title>Shampoo</Card.Title>
        <Card.Text>
        No. of Available Stock : 6
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
   
    </div>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

      </Carousel.Item>

    
      <Carousel.Item>
      <div className='container'>

    <div className="flex-item item4">
     <Card style={{ width: '18rem'
     }}>
      <Card.Img className="standard-image" variant="top" src="https://starboxretail.com/Images/products/PRDT2022032205872.jpg" />
      <Card.Body>
        <Card.Title>Acrylic Colours</Card.Title>
        <Card.Text>
        No. of Available Stock : 7
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>

    <div className="flex-item item5">
     <Card style={{ width: '18rem'
     }}>
      <Card.Img className="standard-image" variant="top" src="https://consumer-voice.org/wp-content/uploads/2021/07/handwash.png" />
      <Card.Body>
        <Card.Title>Hand Wash</Card.Title>
        <Card.Text>
        No. of Available Stock : 9
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>

    <div className="flex-item item6">
    <Card style={{ width: '18rem'
   }}>
      <Card.Img className="standard-image" variant="top" src="https://nourishmantra.in/cdn/shop/files/Artboard14_262619fc-09b0-4726-936c-b5404259f24d.png?v=1701450408" />
      <Card.Body>
        <Card.Title>Lip Balm</Card.Title>
        <Card.Text>
        No. of Available Stock : 9
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
    </div>
      </Carousel.Item>
    </Carousel>
    
    </div>
  );
}
export default Dashboard;