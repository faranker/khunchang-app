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
  const [ summarize, setSummarize ] = useState(false)
  const [ source, setSource ] = useState(false)
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
      setCorrecSym(true)
      setFullCostume(true)
      setTimeout(() => {
        setCorrecSym(false)
        setDetail(true)
      }, 2000);
      
    } else {
      setWrongSym(true)
      setTimeout(() => {
        setWrongSym(false)
      }, 2000);
    }
  }

  const playAgain = () => {
    setNext(false)
    setDetail(false)
    setFullCostume(false)
    shuffleCharactor(listCharactor)
    shuffleCostume(listCostumes)
  }

  const showSummarize = () => {
    setSummarize(true)
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
      
      { correcSym ? 
      <span class="checkmark animated fadeIn">
        <div class="checkmark_stem"></div>
        <div class="checkmark_kick"></div>
      </span> : ''}
      { wrongSym ? <div class="close-sym animated fadeIn"></div> : ''}
      { next ? 
        <div>
          { summarize || source ? 
            <div>
              {summarize ? 
              <div className='homepage' style={{border: '1px solid #a9a9a9', borderRadius: '5px',padding: '10px 20px', width: '80%', height: '400px', overflow: 'auto'}}>
                <p>
                  <h1>สรุป</h1>
                  <p style={{textAlign: 'left', fontSize: '16px', textIndent: '50px'}}>ดังนี้ จะเห็นว่าชนิดของผ้ามีความสำคัญมากกว่ารูปแบบของเสื้อ ซึ่งจะมีรูปทรงคล้ายๆ กัน และในสมัยโบราณนั้น เมื่อข้าราชการมีความดีความชอบ ก็จะได้รับพระราชทานเสื้ออย่างดี หรือผ้านุ่งเป็นรางวัล และในสมัยรัชกาลที่ ๕ ก็ยังเคยปรากฎว่า ได้พระราชทานรางวัลพวกแสดงละครด้วยผ้าลาย คือ ผ้านุ่งโจง
                    กระเบน ซึ่งนิยมนุ่งกันอยู่ในสมัยนั้น
                  </p>
                  <p style={{textAlign: 'left', fontSize: '16px', textIndent: '50px'}}>การแต่งกาย ของคนไทยในสมัยโบราณไม่มีแบบมากนัก แต่จะกล่าวถึงเรื่องสีและชนิดของผ้ามากกว่า คนธรรมดาทั่วๆ ไปก็ใช้ผ้าที่ทอใช้เอง ผู้ที่มีฐานะดี หรือเป็นข้าราชการ มีผ้าที่มีราคาใช้ ผ้าอย่างดีจะมาจากต่างประเทศ</p>
                  <h1>ความรู้เพิ่มเติม</h1>
                  <p style={{textAlign: 'left', fontSize: '16px', textIndent: '50px'}}>ผ้าเข้มขาบ เป็นผ้าที่ใช้ไหมทอควบกับทองแล่งมีลักษณะเป็นริ้วตามยาว มียกดอกด้วย บางทีอาจยกดอกสีเดียว บางครั้งอาจยกดอกหลายสี ลักษณะการทอจะใช้แผ่นเงินกาไหล่ทองมาแผ่บาง ๆ หุ้มเส้นไหมแล้วทอ โดยใช้ปริมาณใหม่ทองสลับกับไหมธรรมดา ผ้าเข้มขามมีกล่าวถึงในเรื่อง ขุนช้างขุนแผน ตอนพระพันวษาแต่งองค์จะประพาสป่า กล่าวว่า</p>
                  <p style={{textAlign: 'center', fontSize: '16px'}}>
                    <div className='row'>
                      <div className='col-md-6 col-sm-12 poet'>
                        ทรงเครื่องต้นสำหรับประพาสไทย
                      </div>
                      <div className='col-md-6 col-sm-12 poet2'>
                        ตามพิชัยฤกษ์กำลังวัน
                      </div>
                    </div>
                  </p>
                  <p style={{textAlign: 'center', fontSize: '16px'}}>
                    <div className='row'>
                      <div className='col-md-6 col-sm-12 poet'>
                      สนับเพลาเชิงงอนช้อนกราย
                      </div>
                      <div className='col-md-6 col-sm-12 poet2'>
                      พระภูษาเข้มขาบริ้วทองคั่น
                      </div>
                    </div>
                  </p>
                  <p style={{textAlign: 'left', fontSize: '16px', textIndent: '50px'}}>ผ้าโหมด เป็นผ้าที่ใช้กระดาษทองแล่งตัดให้เป็นเส้น ๆ แล้วนำมาทอสลับกับไหม มีหลายสีเรียกชื่อตามสีของไหม เช่น โหมดแดง โหมดเหลือง โหมดเขียว ผ้าโหมดนิยมใช้ทำพระมาลา ผ้าชนิดนี้ปรากฏในขุนช้างขุนแผน ตอน พระพันวษาพระราชทานผ้าให้ขุนแผนและพลายงาม เมื่อจะยกทัพไปตีเมืองเชียงใหม่กล่าวถึงผ้าโหมดไว้ว่า</p>
                  <p style={{textAlign: 'center', fontSize: '16px'}}>
                    <div className='row'>
                      <div className='col-md-6 col-sm-12 poet'>
                      แล้วจึงตรัสสั่งคลังวิเสท
                      </div>
                      <div className='col-md-6 col-sm-12 poet2'>
                      ให้จัดเสื้อโหมดเทศอย่างก้านแย่ง
                      </div>
                    </div>
                  </p>
                  <p style={{textAlign: 'center', fontSize: '16px'}}>
                    <div className='row'>
                      <div className='col-md-6 col-sm-12 poet'>
                      พรจันดวงพุดตานส่านสีแดง
                      </div>
                      <div className='col-md-6 col-sm-12 poet2'>
                      ทั้งสมปักตามตำแหน่งขุนนางใน
                      </div>
                    </div>
                  </p>
                  <p style={{textAlign: 'left', fontSize: '16px', textIndent: '50px'}}>ผ้ากรองทอง เป็นผ้าที่เกิดจากการนำเส้นลวดทอง หรือไหมทองมาถักทอกันเป็นผืนผ้า เมื่อต้องการให้มีความงดงามมากขึ้นก็มีการนำปีกแมลงทับมาตัดเป็นชิ้นเล็ก ๆ แล้วนำมาปักลงไปบนผืนผ้า นิยมใช้ทำเสื้อครุยของพระมหากษัตริย์ สไบ หรือผ้าทรงสะพัก สำหรับเจ้านายสตรีชั้นสูง ผ้ากรองทองนี้พบในเรื่องขุนช้างขุนแผนตอนขุนช้างแต่งตัวจะไปขอนางพิมกล่าวถึงผ้ากรองทองไว้ว่า</p>
                  <p style={{textAlign: 'center', fontSize: '16px'}}>
                    <div className='row'>
                      <div className='col-md-6 col-sm-12 poet'>
                      ครั้งแล้วลุกออกมานอกห้อง
                      </div>
                      <div className='col-md-6 col-sm-12 poet2'>
                      นุ่งยกห่มกรองทองเฉิดฉาย
                      </div>
                    </div>
                  </p>
                  <p style={{textAlign: 'center', fontSize: '16px'}}>
                    <div className='row'>
                      <div className='col-md-6 col-sm-12 poet'>
                      เรียกบ่าวเล็กเล็กเด็กผู้ชาย
                      </div>
                      <div className='col-md-6 col-sm-12 poet2'>
                      มากมายตามหลังสะพรั่งมา
                      </div>
                    </div>
                  </p>
                </p>
                <button className="btn btn-danger" onClick={() => {setSummarize(false)}}>ปิด</button>
              </div> : ''}
              {source ? <div className='homepage' style={{border: '1px solid #a9a9a9', borderRadius: '5px',padding: '10px 20px', width: '80%', height: '400px', overflow: 'auto'}}>
                <p style={{textAlign: 'left', fontSize: '18px', textIndent: '25px'}}>
                  <h1>แหล่งอ้างอิง</h1>
                  <p>1. <a href='#' onClick={() => {window.open('https://www.facebook.com/boraannaanma/photos/a.1721168658137287/2799458320308310/?type=3&_rdr')}}>https://www.facebook.com/boraannaanma/photos/a.1721168658137287/2799458320308310/?type=3&_rdr</a></p>
                  <p>2. <a href='#' onClick={() => {window.open('https://swis.montfort.ac.th/html_edu/cgi-bin/main_php/print_informed.php?id_count_inform=2261')}}>https://swis.montfort.ac.th/html_edu/cgi-bin/main_php/print_informed.php?id_count_inform=2261</a></p>
                  <p>3. <a href='#' onClick={() => {window.open('https://www.saranukromthai.or.th/sub/book/book.php?book=18&chap=3&page=t18-3-l1.htm')}}>https://www.saranukromthai.or.th/sub/book/book.php?book=18&chap=3&page=t18-3-l1.htm</a></p>
                  <p>4. <a href='#' onClick={() => {window.open('https://th.wikipedia.org/wiki/ตัวละครในขุนช้างขุนแผน')}}>https://th.wikipedia.org/wiki/ตัวละครในขุนช้างขุนแผน</a></p>
                  <p>5. <a href='#' onClick={() => {window.open('https://www.baanjomyut.com/library_2/history_of_costume/02_6.html')}}>https://www.baanjomyut.com/library_2/history_of_costume/02_6.html</a></p>
                  <p>6. <a href='#' onClick={() => {window.open('https://www.tungsong.com/NakhonSri/manufacture/Textile/Textile_03.html')}}>https://www.tungsong.com/NakhonSri/manufacture/Textile/Textile_03.html</a></p>
                  <p>7. <a href='#' onClick={() => {window.open('https://kb.psu.ac.th/psukb/bitstream/2010/6897/8/Chapter3__120-151_.pdf')}}>https://kb.psu.ac.th/psukb/bitstream/2010/6897/8/Chapter3__120-151_.pdf</a></p>
                </p>
                <button className="btn btn-danger" onClick={() => {setSource(false)}}>ปิด</button>
              </div> : ''}
            </div> : 
            <div className='all-btn-last'>
              <div><button className="btn btn-danger" style={{width: '200px'}} onClick={playAgain}>เล่นอีกครั้ง</button></div>
              <div><button className="btn btn-info" style={{width: '200px'}} onClick={showSummarize}>สรุปความรู้เพิ่มเติม</button></div>
              <div><button className="btn btn-primary" style={{width: '200px'}} onClick={() => {setSource(true)}}>แหล่งอ้างอิง</button></div>
            </div>
          }
          
          
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
                <p style={{textAlign: 'left', fontSize: '20px', textIndent: '25px'}}>{detailsCharactor(charactor)}</p>
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
