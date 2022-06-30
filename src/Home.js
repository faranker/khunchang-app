import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


function Home(props) {
  
  return (
    <div className="App container">
        <Startgame />
    </div>
  );
}

function Startgame(props) {
  const [ start, setStart ] = useState(false)
  
  const clicked = () => {
    setStart(true)
  }

  return (
    <div>
      
      {start ? <Playing /> : 
      <div className='homepage'>
        <h1>ขุนช้างขุนแผน</h1>
        <h1>ตอน ขุนช้างถวายฎีกา</h1>
        <button className="btn btn-primary" onClick={clicked}>เริ่มต้น</button>
      </div> }
      
    </div>
  )
}

function Playing(props) {
  const [ correcSym, setCorrecSym ] = useState(false)
  const [ wrongSym, setWrongSym ] = useState(false)
  const [ next, setNext ] = useState(false)
  const [ detail, setDetail ] = useState(false)
  const [ fullCostume, setFullCostume ] = useState(false)
  const [costumes, setCostumes] = useState([])
  const [charactor, setCharactor] = useState('')

  const listCharactor = [
    {
      id: 1,
      name: 'costume1'
    },{
      id: 2,
      name: 'costume2'
    },{
      id: 3,
      name: 'costume3'
    },{
      id: 4,
      name: 'costume4'
    },{
      id: 5,
      name: 'costume5'
    }
  ]

  const listCostumes = [{
    id: 1,
    pair: 'costume1',
    img: 'img1'
  },{
    id: 2,
    pair: 'costume2',
    img: 'img2'
  },{
    id: 3,
    pair: 'costume3',
    img: 'img3'
  },{
    id: 4,
    pair: 'costume4',
    img: 'img4'
  },{
    id: 5,
    pair: 'costume5',
    img: 'img5'
  }]

  const shuffleCharactor = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() + Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    console.log(array[0].name);
    setCharactor(array[0].name)
  }

  const shuffleCostume = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    setCostumes(array)
  }

  useEffect(() => {
    shuffleCostume(listCostumes)
  }, [])

  useEffect(() => {
    shuffleCharactor(listCharactor)
  }, [])

  

  const chooseCostume = (data) => {
    if (data.pair === charactor) {
      console.log('correc !');
      setCorrecSym(true)
      setFullCostume(true)
      setTimeout(() => {
        setCorrecSym(false)
        setDetail(true)
      }, 3000);
      
    } else {
      console.log('wrong !');
    }
  }

  const playAgain = () => {
    setNext(false)
    setDetail(false)
    setFullCostume(false)
    shuffleCharactor(listCharactor)
    shuffleCostume(listCostumes)
  }

  const detailsCharactor = (data) => {
    switch (data) {
      case 'costume1':
        return 'ขุนช้างรับราชการกรมตำรวจภูบาล เหมือนกับขุนแผน (แต่ในภายหลังขุนแผนได้เลื่อนบรรดาศักดิ์เป็นพระกาญจนบุรี) โดยจะใส่ชุดโจงกระเบนผ้าสมปัก คาดผ้าเกี้ยวคาดประคด ถือหอกยืนรักษาหน้าหอพระปริตร'
        break;
      case 'costume2':
        return 'ขุนแผน หรือพระยากาญจนบุรี(พลายแก้ว)หลังจากรบชนะกลับมา สมเด็จพระพันวษาได้ปูนบำเหน็จให้เป็น ขุนแผนแสนสะท้าน ต่อมาได้เลื่อนบรรดาศักดิ์เป็นพระกาญจนบุรี และพระยากาญจนบุรี เจ้าเมืองผู้ครองกาญจนบุรี โดยแต่งกายนุ่งโจงกระเบน ผ้าสมปัก สวมเสื้อตัดด้วยผ้าเข้มขาบ หรือผ้าอัตลัด และสวมเสื้อสมรดทอง สมรดขาวทับชั้นนอก'
        break;
      case 'costume3':
        return 'นางวันทองเป็นสาวชาวบ้าน เป็นคนซื่อ ทำอะไรก็ทำตามประสาหญิงชาวบ้าน โดยจะนั้นนุ่งโจงกระเบน ห่มสไบ นิยมใช้ผ้าสังเวียนเป็นผ้าที่มีการสอดดิ้นเงิน ดิ้นทอง และยังมีผ้าเข้มขาบ นอกจากจะตัดเสื้อเจ้านายผู้ชาย หรือเสื้อพระราชทานขุนนางแล้ว ยังนิยมมาทำเป็นผ้าสไบสำหรับผู้หญิงห่มแทนผ้าแพรได้อีกชนิดหนึ่งด้วย'
        break;
      case 'costume4':
        return 'สมเด็จพระพันวษา เป็นพระมหากษัตริย์แห่งกรุงศรีอยุธยาโดยมีการสันนิษฐานไว้ว่า คือ “สมเด็จพระรามาธิบดีที่ ๒” ได้มีการใช้ฉลองพระองค์ที่ตัดเย็บด้วยผ้าเยียรบับอย่างงดงาม แขนฉลองพระองค์นั้นแคบมากและปรกลงมาถึงข้อพระหัตถ์  เป็นฉลองพระองค์ที่ได้รับการปักอย่างวิจิตร ต่างแบบลวดลายกันกับในทวีปยุโรป'
        break;
      case 'costume5':
        return 'พลายงามเป็นลูกของขุนแผนกับนางวันทองเมื่อพลายงามเติบใหญ่ขึ้นก็ได้รับราชการเป็นมหาดเล็ก แต่ต่อมาเมื่อทำความดีความชอบจึงได้เลื่อนตำแหน่งเป็นจมื่นไวยวรนาถ เป็นหัวหมื่นมหาดเล็กเวรขวา การแต่งกายของพลายงามนั้นเสื้อและเครื่องนุ่งห่มของขุนนางข้าราชการจะนุ่งผ้าสมปัก เป็นผ้าทอด้วยไหมเพลาะกลาง พื้นผ้าเป็นสีเป็นลายต่างๆ'
    }
  }

  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  return (
    <div>
      { correcSym ? <div class="checkmark draw animated fadeIn"></div> : ''}
      { next ? 
        <div>
          <div className='all-btn-last'>
            <div><button className="btn btn-danger" style={{width: '200px'}} onClick={playAgain}>เล่นอีกครั้ง</button></div>
            <div><button className="btn btn-info" style={{width: '200px'}} onClick={playAgain}>สรุปความรู้เพิ่มเติม</button></div>
            <div><button className="btn btn-primary" style={{width: '200px'}} onClick={playAgain}>แหล่งอ้างอิง</button></div>
          </div>
          
        </div> :
        <>
          <h1 style={{marginTop: '30px'}}>เลือกชุดให้เข้ากับตัวละคร</h1>
            <div className='row'>
              <div id="charactor" className='col-md-5 col-sm-12'>
                { fullCostume ?
                  <img src={process.env.PUBLIC_URL + '/full/' +charactor + '.png'} style={{width: '100%', height: '80vh'}} /> :
                  <img src={process.env.PUBLIC_URL + '/nude/' +charactor + '.png'} style={{width: '100%', height: '80vh'}} />
                 }
                
                {/* <h1>{charactor}</h1> */}
              </div>
              <div id="costume" className='col-md-7 col-sm-12'>
              { detail ? 
              <div style={{border: '1px solid #a9a9a9', borderRadius: '5px',padding: '10px 20px', width: '85%', height: '350px'}}>
                <p style={{textAlign: 'left'}}>{detailsCharactor(charactor)}</p>
                <button className="btn btn-danger" onClick={() => {setNext(true)}}>ถัดไป</button>
              </div> :
              
                <div className='' >
                  <Slider {...settings}>
                    {costumes.map((item) =>
                      <div>
                        <img src={process.env.PUBLIC_URL + '/costume/' +item.pair + '.png'} onClick={() => chooseCostume(item)} style={{width: '200px', maxHeight: '400px', cursor: 'pointer'}}/>
                      </div>
                    )}
                  </Slider>
                </div>
               }
              </div>
            </div>
          </>
        }
      
    </div>
  )
}

export default Home;
