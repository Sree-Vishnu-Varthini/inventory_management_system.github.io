import { useState,useEffect } from 'react';
import Image from '../Images/IMG.jpg';
import Image1 from '../Images/StationeryImage1.jpg';
import Image2 from '../Images/StationeryImage2.jpg';
import Image3 from '../Images/StationeryImage3.jpg';
import Image4 from '../Images/StationeryImage4.jpg';
import Image5 from '../Images/StationeryImage5.jpg';
import Image6 from '../Images/StationeryImage6.jpeg';
import Image7 from '../Images/StationeryImage7.jpg';
import Image8 from '../Images/StationeryImage8.jpg';
import Image9 from '../Images/StationeryImage9.jpg';

function Stationery(){

    const[count11,setCount11]=useState(0);
    const[count12,setCount12]=useState(0);
    const[count13,setCount13]=useState(0);
    const[count14,setCount14]=useState(0);
    const[count15,setCount15]=useState(0);
    const[count16,setCount16]=useState(0);
    const[count17,setCount17]=useState(0);
    const[count18,setCount18]=useState(0);
    const[count19,setCount19]=useState(0);


    const incrementCount11 = () => {
        setCount11(count11+1);
    };

    const decrementCount11 = () => {
        setCount11(count11-1);
    };

    const incrementCount12 = () => {
        setCount12(count12+1);
    };

    const decrementCount12 = () => {
        setCount12(count12-1);
    };

    const incrementCount13 = () => {
        setCount13(count13+1);
    };

    const decrementCount13 = () => {
        setCount13(count13-1);
    };

    const incrementCount14 = () => {
        setCount14(count14+1);
    };

    const decrementCount14 = () => {
        setCount14(count14-1);
    };

    const incrementCount15 = () => {
        setCount15(count15+1);
    };

    const decrementCount15 = () => {
        setCount15(count15-1);
    };

    const incrementCount16 = () => {
        setCount16(count16+1);
    };

    const decrementCount16 = () => {
        setCount16(count16-1);
    };

    const incrementCount17 = () => {
        setCount17(count17+1);
    };

    const decrementCount17 = () => {
        setCount17(count17-1);
    };

    const incrementCount18 = () => {
        setCount18(count18+1);
    };

    const decrementCount18 = () => {
        setCount18(count18-1);
    };

    const incrementCount19 = () => {
        setCount19(count19+1);
    };

    const decrementCount19 = () => {
        setCount19(count19-1);
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
                        <h5 className="card-title">Color Pencil</h5> 
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count11}</p></div>
                        <br></br>
                        <div><a  className="btn btn-primary" onClick={incrementCount11} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount11} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image2} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Eraser</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count12}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount12} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount12} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image3} className="card-img-top" alt="..."></img>
                    <div className="card-body" style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Scissors</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count13}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount13} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount13} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="card" style={cardStyle}>
                <img src={Image4} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Notebook</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count14}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount14} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount14} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image5} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Highlighter</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count15}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount15} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount15} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image6} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Pencil</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count16}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount16} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount16} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="card" style={cardStyle}>
                <img src={Image7} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Sharpener</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count17}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount17} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount17} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image8} className="card-img-top" alt="..."></img>
                    <div className="card-body"  style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Pen</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count18}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount18} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount18} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>

            <div className="card" style={cardStyle}>
                <img src={Image9} className="card-img-top" alt="..."></img>
                    <div className="card-body" style={{ backgroundColor:'#E1D89F', borderEndEndRadius:'6px',borderEndStartRadius:'6px'}}>
                        <h5 className="card-title">Calculator</h5>
                        <div style={{ display: 'flex', justifyContent: 'left'}}><label>No. Of Stocks Available : </label>
                        <p className='p1' style={{ marginLeft:'10px', fontWeight:'600'}}>{count19}</p></div>
                        <br></br>
                        <div><a   className="btn btn-primary" onClick={incrementCount19} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginRight:'20px'}}>Add </a>
                        <a   className="btn btn-primary" onClick={decrementCount19} style={{ marginTop: '20px', backgroundColor:'#5e175b',border:'none',marginLeft:'20px'}}>Remove </a>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default Stationery;