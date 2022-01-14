import { Container, Row, Col, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "..";
import axios from "axios";
import { saveAs } from "file-saver";
import { useMediaQuery } from "react-responsive";

const Result1 = observer(() => {
  const mobile = useMediaQuery({ query: "(max-width: 990px)" });

  const { col1 } = useContext(Context);

  const localData = JSON.parse(localStorage.getItem("data1"));

  let data;

  useEffect(() => {
    data = {
      c1: col1.cols1.c1 || localData.c1,
      c2: col1.cols1.c2 || localData.c2,
      c3: col1.cols1.c3 || localData.c3,
      c4: col1.cols1.c4 || localData.c4,
      res: col1.result1 || localData.res,
      word: col1.word1 || localData.word,
    };
  }, []);

  function createPdf() {
    axios
      .post(process.env.REACT_APP_HOST + "/create-pdf1", data)
      .then(() =>
        axios.get(process.env.REACT_APP_HOST + "/table1", { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, `table1.pdf`);
      });
  }

  return (
    <Container>
      <div className="divCol">
        {mobile ? (
          <>
            <Row style={{ marginTop: "0.75rem" }}>
              <Col className="colR">Дыхательная недостаточность</Col>
              <Col className="colR2">{col1.cols1.c1 || localData.c1}</Col>
            </Row>
            <Row>
              <Col className="colR">Выкидыш</Col>
              <Col className="colR2">{col1.cols1.c2 || localData.c2}</Col>
            </Row>
            <Row>
              <Col className="colR">
                Хроническая внутриматочная гипоксия плода
              </Col>
              <Col className="colR2">{col1.cols1.c3 || localData.c3}</Col>
            </Row>
            <Row>
              <Col  className="colR">
                Хроническая фетоплацентарная недостаточность
              </Col>
              <Col className="colR2">{col1.cols1.c4 || localData.c4}</Col>
            </Row>
            <Row>
              <Col className="colR">p-вероятность</Col>
              <Col className="colR2">{col1.result1 || localData.res}</Col>
            </Row>
            <Row>
              <Col className="colR">Вероятность развития пневмонии</Col>
              <Col className="colR2">{col1.word1 || localData.word}</Col>
            </Row>
          </>
        ) : (
          <>
            <Row style={{ marginTop: "0.75rem" }}>
              <Col className="colR">Дыхательная недостаточность</Col>
              <Col className="colR">Выкидыш</Col>
              <Col className="colR">
                Хроническая внутриматочная гипоксия плода
              </Col>
              <Col className="colR">
                Хроническая фетоплацентарная недостаточность
              </Col>
              <Col className="colR">p-вероятность</Col>
              <Col className="colR">Вероятность развития пневмонии</Col>
            </Row>
            <Row>
              <Col className="colR2">{col1.cols1.c1 || localData.c1}</Col>
              <Col className="colR2">{col1.cols1.c2 || localData.c2}</Col>
              <Col className="colR2">{col1.cols1.c3 || localData.c3}</Col>
              <Col className="colR2">{col1.cols1.c4 || localData.c4}</Col>
              <Col className="colR2">{col1.result1 || localData.res}</Col>
              <Col className="colR2">{col1.word1 || localData.word}</Col>
            </Row>
          </>
        )}
        <div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
          <Button
            onClick={createPdf}
            className="colLink"
            variant="outline-danger"
          >
            Скачать файл
          </Button>
        </div>
      </div>
    </Container>
  );
});

export default Result1;
