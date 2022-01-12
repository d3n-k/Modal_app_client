import { Container, Row, Col, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "..";
import axios from 'axios';
import { saveAs } from "file-saver";

const Result = observer( () => {

  const {col} = useContext(Context);

  const localData = JSON.parse(localStorage.getItem("data"));

  let data;

  useEffect( () => {
    data = {
      c1 : col.cols.c1 || localData.c1,
      c2 : col.cols.c2 || localData.c2,
      c3 : col.cols.c3 || localData.c3,
      c4 : col.cols.c4 || localData.c4,
      c5 : col.cols.c5 || localData.c5,
      c6 : col.cols.c6 || localData.c6,
      c7 : col.cols.c7 || localData.c7,
      c8 : col.cols.c8 || localData.c8,
      c9 : col.cols.c9 || localData.c9,
      res : col.result || localData.res,
      word: col.word || localData.word,
    }

  }, [])

  function createPdf() {
    
    axios
      .post("http://localhost:5000/create-pdf6", data)
      .then(() => 
        axios.get("http://localhost:5000/table6", { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, `table6.pdf`);
      });
  }

  return (
    <Container>
        <div className="divCol">
          <Row style={{marginTop: '0.75rem'}}>
            <Col className="colR" md={1} >АЧТВ</Col>
            <Col className="colR" md={1}>R</Col>
            <Col className="colR" md={1}>ПВ</Col>
            <Col className="colR" md={1}>ПИ</Col>
            <Col className="colR" md={1}>МНО</Col>
            <Col className="colR" >ТВ</Col>
            <Col className="colR" >фибрино-ген</Col>
            <Col className="colR" >Д-димер</Col>
            <Col className="colR" >PLT</Col>
            <Col className="colR" >p-вероятность</Col>
            <Col className="colR" >Вероятность развития пневмонии</Col>

          </Row>
          <Row>
            <Col className="colR2" md={1}>{col.cols.c1 || localData.c1}</Col>
            <Col className="colR2" md={1}>{col.cols.c2 || localData.c2}</Col>
            <Col className="colR2" md={1}>{col.cols.c3 || localData.c3}</Col>
            <Col className="colR2" md={1}>{col.cols.c4 || localData.c4}</Col>
            <Col className="colR2" md={1}>{col.cols.c5 || localData.c5}</Col>
            <Col className="colR2" >{col.cols.c6 || localData.c6}</Col>
            <Col className="colR2" >{col.cols.c7 || localData.c7}</Col>
            <Col className="colR2" >{col.cols.c8 || localData.c8}</Col>
            <Col className="colR2" >{col.cols.c9 || localData.c9}</Col>
            <Col className="colR2" >{col.result || localData.res}</Col>
            <Col className="colR2" >{col.word || localData.word}</Col>

          </Row>
          <div style={{marginTop: '2rem', marginBottom: '1rem'}}>
            <Button onClick={createPdf} className="colLink" variant="outline-danger">Скачать файл</Button>
          </div>
        </div>
    </Container>
  );
})


  export default Result;
  