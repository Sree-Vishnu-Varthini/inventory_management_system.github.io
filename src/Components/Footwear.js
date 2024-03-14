import { useState,useEffect } from 'react';
import Image from '../Images/IMG.jpg';
import Image1 from '../Images/FootwearImage1.jpg';
import Image2 from '../Images/FootwearImage2.jpg';
import Image3 from '../Images/FootwearImage3.jpg';
import Image4 from '../Images/FootwearImage4.jpeg';
import Image5 from '../Images/FootwearImage5.jpg';
import Image6 from '../Images/FootwearImage6.jpg';
import Image7 from '../Images/FootwearImage7.jpg';
import Image8 from '../Images/FootwearImage8.jpg';
import Image9 from '../Images/FootwearImage9.jpg';

function Footwear(){

    const[count21,setCount21]=useState(0);
    const[count22,setCount22]=useState(0);
    const[count23,setCount23]=useState(0);
    const[count24,setCount24]=useState(0);
    const[count25,setCount25]=useState(0);
    const[count26,setCount26]=useState(0);
    const[count27,setCount27]=useState(0);
    const[count28,setCount28]=useState(0);
    const[count29,setCount29]=useState(0);


    const incrementCount21 = () => {
        setCount21(count21+1);
    };

    const decrementCount21 = () => {
        setCount21(count21-1);
    };

    const incrementCount22 = () => {
        setCount22(count22+1);
    };

    const decrementCount22 = () => {
        setCount22(count22-1);
    };

    const incrementCount23 = () => {
        setCount23(count23+1);
    };

    const decrementCount23 = () => {
        setCount23(count23-1);
    };

    const incrementCount24 = () => {
        setCount24(count24+1);
    };

    const decrementCount24 = () => {
        setCount24(count24-1);
    };

    const incrementCount25 = () => {
        setCount25(count25+1);
    };

    const decrementCount25 = () => {
        setCount25(count25-1);
    };

    const incrementCount26 = () => {
        setCount26(count26+1);
    };

    const decrementCount26 = () => {
        setCount26(count26-1);
    };

    const incrementCount27 = () => {
        setCount27(count27+1);
    };

    const decrementCount27 = () => {
        setCount27(count27-1);
    };

    const incrementCount28 = () => {
        setCount28(count28+1);
    };

    const decrementCount28 = () => {
        setCount28(count28-1);
    };

    const incrementCount29 = () => {
        setCount29(count29+1);
    };

    const decrementCount29 = () => {
        setCount29(count29-1);
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

      const cardStyle = {
        width: '22rem',
        marginLeft: '3rem',
        marginRight:'3rem',
        marginTop:'3rem',
        marginBottom:'3rem'
    };

    return(

        <div >

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px'}}>
            <div className="card" style={cardStyle}>
                <img src={Image1} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Rosegold Pumps</h5> 
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count21}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount21} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount21} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image2} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Loafers</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count22}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary"  onClick={incrementCount22} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount22} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image3} className="card-img-top" alt="..."></img>
                    <div className="card-body" style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Black Shoes</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count23}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount23} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount23} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="card" style={cardStyle}>
                <img src={Image4} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Slippers</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count24}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount24} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount24} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image5} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Sneakers</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count25}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount25} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount25} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image6} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Stilletos</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count26}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount26} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount26} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="card" style={cardStyle}>
                <img src={Image7} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Red Pumps</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count27}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount27} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount27} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image8} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">White Pumps</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count28}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount28} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount28} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image9} className="card-img-top" alt="..."></img>
                    <div className="card-body" style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Yellow Pumps</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count29}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount29} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount29} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default Footwear;