import { Container, Row, Col, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "..";
import axios from 'axios';
import { saveAs } from "file-saver";
import { useMediaQuery } from "react-responsive";

const Result3 = observer( () => {
  const mobile = useMediaQuery({ query: "(max-width: 1200px)" });

  const {col3} = useContext(Context);

  const localData = JSON.parse(localStorage.getItem("data3"));

  let data;

  useEffect( () => {
    data = {
      c1 : col3.cols3.c1 || localData.c1,
      c2 : col3.cols3.c2 || localData.c2,
      c3 : col3.cols3.c3 || localData.c3,
      c4 : col3.cols3.c4 || localData.c4,
      c5 : col3.cols3.c5 || localData.c5,
      c6 : col3.cols3.c6 || localData.c6,
      res : col3.result3 || localData.res,
      word: col3.word3 || localData.word,
    }

  }, [])

  function createPdf() {
    
    axios
      .post(process.env.REACT_APP_HOST + "/create-pdf3", data)
      .then(() => 
        axios.get(process.env.REACT_APP_HOST + "/table3", { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, `table3.pdf`);
      });
  }

  return (
    <Container>
        <div className="divCol">
          {
            mobile
            ? <>
             <Row style={{marginTop: '0.75rem'}}>
             <Col className="colR" >Самопроиз­вольный выкидыш</Col>
             <Col className="colR2" >{col3.cols3.c1 || localData.c1}</Col>
             </Row>
             <Row>
             <Col className="colR" >Неразви­вающаяся беремен­ность</Col>
             <Col className="colR2" >{col3.cols3.c2 || localData.c2}</Col>
             </Row>
             <Row>
             <Col className="colR">Хроническая фетоплацен­тарная недостаточ­ность</Col>
             <Col className="colR2" >{col3.cols3.c3 || localData.c3}</Col>
             </Row>
             <Row>
             <Col className="colR" >Синдром задержки развития плода</Col>
             <Col className="colR2" >{col3.cols3.c4 || localData.c4}</Col>
             </Row>
             <Row>
             <Col className="colR" >Угроза прерывания беременности</Col>
             <Col className="colR2" >{col3.cols3.c5 || localData.c5}</Col>
             </Row>
             <Row>
             <Col className="colR" >Дыхательная недостаточ­ность III ст</Col>
             <Col className="colR2" >{col3.cols3.c6 || localData.c6}</Col>
             </Row>
             <Row>
             <Col className="colR" >p-вероятность</Col>
             <Col className="colR2" >{col3.result3 || localData.res}</Col>
             </Row>
             <Row>
             <Col className="colR">Вероятность развития пневмонии</Col>
             <Col className="colR2" >{col3.word3 || localData.word}</Col>
             </Row>
            </>
            : <>
            <Row style={{marginTop: '0.75rem'}}>
            <Col className="colR" >Самопроиз­вольный выкидыш</Col>
            <Col className="colR" >Неразви­вающаяся беремен­ность</Col>
            <Col className="colR">Хроническая фетоплацен­тарная недостаточ­ность</Col>
            <Col className="colR" >Синдром задержки развития плода</Col>
            <Col className="colR" >Угроза прерывания беременности</Col>
            <Col className="colR" >Дыхательная недостаточ­ность III ст</Col>
            <Col className="colR" >p-вероятность</Col>
            <Col className="colR">Вероятность развития пневмонии</Col>
          </Row>
          <Row>
            <Col className="colR2" >{col3.cols3.c1 || localData.c1}</Col>
            <Col className="colR2" >{col3.cols3.c2 || localData.c2}</Col>
            <Col className="colR2" >{col3.cols3.c3 || localData.c3}</Col>
            <Col className="colR2" >{col3.cols3.c4 || localData.c4}</Col>
            <Col className="colR2" >{col3.cols3.c5 || localData.c5}</Col>
            <Col className="colR2" >{col3.cols3.c6 || localData.c6}</Col>
            <Col className="colR2" >{col3.result3 || localData.res}</Col>
            <Col className="colR2" >{col3.word3 || localData.word}</Col>
          </Row>
            </>
          }
          <div style={{marginTop: '2rem', marginBottom: '1rem'}}>
            <Button onClick={createPdf} className="colLink" variant="outline-danger">Скачать файл</Button>
          </div>
        </div>
    </Container>
  );
})


  export default Result3;