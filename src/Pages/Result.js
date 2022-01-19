import { Container, Row, Col, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "..";
import axios from "axios";
import { saveAs } from "file-saver";
import { useMediaQuery } from "react-responsive";

const Result = observer(() => {
  const mobile = useMediaQuery({ query: "(max-width: 1400px)" });

  const { col } = useContext(Context);

  const localData = JSON.parse(localStorage.getItem("data"));

  let data;

  useEffect(() => {
    data = {
      c1: col.cols.c1 || localData.c1,
      c2: col.cols.c2 || localData.c2,
      c3: col.cols.c3 || localData.c3,
      c4: col.cols.c4 || localData.c4,
      c5: col.cols.c5 || localData.c5,
      c6: col.cols.c6 || localData.c6,
      c7: col.cols.c7 || localData.c7,
      c8: col.cols.c8 || localData.c8,
      c9: col.cols.c9 || localData.c9,
      res: col.result || localData.res,
      word: col.word || localData.word,
    };
  }, []);

  function createPdf() {
    axios
      .post(process.env.REACT_APP_HOST + "/create-pdf6", data)
      .then(() =>
        axios.get(process.env.REACT_APP_HOST + "/table6", { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, `table6.pdf`);
      });
  }

  return (
    <Container>
      <div className="divCol">
        {mobile ? (
          <>
            <Row style={{ marginTop: "0.75rem" }}>
              <Col className="colR">Активированное частичное тромбопластиновое время {'(>55,5 с)'}</Col>
              <Col className="colR2">{col.cols.c1 || localData.c1}</Col>
            </Row>
            <Row>
              <Col className="colR">Коэффициент R {'(>2,1)'}</Col>
              <Col className="colR2">{col.cols.c2 || localData.c2}</Col>
            </Row>
            <Row>
              <Col className="colR">Протромбиновое время {'(>21,8 с)'}</Col>
              <Col className="colR2">{col.cols.c3 || localData.c3}</Col>
            </Row>
            <Row>
              <Col className="colR">Протромбиновый индекс по Квику {'(<47,2%)'}</Col>
              <Col className="colR2">{col.cols.c4 || localData.c4}</Col>
            </Row>
            <Row>
              <Col className="colR">Международное нормализованное отношение {'(>1,9)'}</Col>
              <Col className="colR2">{col.cols.c5 || localData.c5}</Col>
            </Row>
            <Row>
              <Col className="colR">Тромбиновое время {'(>27,2 с)'}</Col>
              <Col className="colR2">{col.cols.c6 || localData.c6}</Col>
            </Row>
            <Row>
              <Col className="colR">Фибриноген {'(<1,9 г/л)'}</Col>
              <Col className="colR2">{col.cols.c7 || localData.c7}</Col>
            </Row>
            <Row>
              <Col className="colR">D-димер {'(>3,5 мкг/мл)'}</Col>
              <Col className="colR2">{col.cols.c8 || localData.c8}</Col>
            </Row>
            <Row>
              <Col className="colR">Тромбоциты ({'<150х10'}{<sup><small>9</small></sup>}/л)</Col>
              <Col className="colR2">{col.cols.c9 || localData.c9}</Col>
            </Row>
            <Row>
              <Col className="colR">p-вероятность</Col>
              <Col className="colR2">{col.result || localData.res}</Col>
            </Row>
            <Row>
              <Col className="colR">Вероятность развития пневмонии</Col>
              <Col className="colR2">{col.word || localData.word}</Col>
            </Row>
          </>
        ) : (
          <>
            <Row style={{ marginTop: "0.75rem" }}>
              <Col md={1} className="colR" >
              Активиро-ванное частичное тромбопла-стиновое время {'(>55,5 с)'}
              </Col>
              <Col md={1} className="colR" >
              Коэф-фициент R {'(>2,1)'}
              </Col>
              <Col md={1} className="colR" >
              Протром-биновое время {'(>21,8 с)'}
              </Col>
              <Col md={1} className="colR" >
              Протром-биновый индекс по Квику {'(<47,2%)'}
              </Col>
              <Col md={1} className="colR" >
              Междуна-родное нормали-зованное отношение {'(>1,9)'}
              </Col>
              <Col md={1} className="colR">Тромби-новое время {'(>27,2 с)'}</Col>
              <Col className="colR">Фибриноген {'(<1,9 г/л)'}</Col>
              <Col className="colR">D-димер {'(>3,5 мкг/мл)'}</Col>
              <Col className="colR">Тромбоциты ({'<150х10'}{<sup><small>9</small></sup>}/л)</Col>
              <Col className="colR">p-вероятность</Col>
              <Col className="colR">Вероятность развития пневмонии</Col>
            </Row>
            <Row>
              <Col className="colR2" md={1}>
                {col.cols.c1 || localData.c1}
              </Col>
              <Col className="colR2" md={1}>
                {col.cols.c2 || localData.c2}
              </Col>
              <Col className="colR2" md={1}>
                {col.cols.c3 || localData.c3}
              </Col>
              <Col className="colR2" md={1}>
                {col.cols.c4 || localData.c4}
              </Col>
              <Col className="colR2" md={1}>
                {col.cols.c5 || localData.c5}
              </Col>
              <Col md={1} className="colR2">{col.cols.c6 || localData.c6}</Col>
              <Col className="colR2">{col.cols.c7 || localData.c7}</Col>
              <Col className="colR2">{col.cols.c8 || localData.c8}</Col>
              <Col className="colR2">{col.cols.c9 || localData.c9}</Col>
              <Col className="colR2">{col.result || localData.res}</Col>
              <Col className="colR2">{col.word || localData.word}</Col>
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

export default Result;
