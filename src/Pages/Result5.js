import { Container, Row, Col, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "..";
import axios from "axios";
import { saveAs } from "file-saver";
import { useMediaQuery } from "react-responsive";

const Result5 = observer(() => {
  const mobile = useMediaQuery({ query: "(max-width: 1400px)" });

  const { col5 } = useContext(Context);

  const localData = JSON.parse(localStorage.getItem("data5"));

  let data;

  useEffect(() => {
    data = {
      c1: col5.cols5.c1 || localData.c1,
      c2: col5.cols5.c2 || localData.c2,
      c3: col5.cols5.c3 || localData.c3,
      c4: col5.cols5.c4 || localData.c4,
      c5: col5.cols5.c5 || localData.c5,
      c6: col5.cols5.c6 || localData.c6,
      c7: col5.cols5.c7 || localData.c7,
      c8: col5.cols5.c8 || localData.c8,
      res: col5.result5 || localData.res,
      word: col5.word5 || localData.word,
    };
  }, []);

  function createPdf() {
    axios
      .post("http://localhost:5000/create-pdf5", data)
      .then(() =>
        axios.get("http://localhost:5000/table5", { responseType: "blob" })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, `table5.pdf`);
      });
  }

  return (
    <Container>
      <div className="divCol">
        {mobile ? (
          <>
            <Row style={{ marginTop: "0.75rem" }}>
              <Col className="colR">
                Дыхательная недоста­точность III степени
              </Col>
              <Col className="colR2">{col5.cols5.c1 || localData.c1}</Col>
            </Row>
            <Row>
              <Col className="colR">Асфиксия</Col>
              <Col className="colR2">{col5.cols5.c2 || localData.c2}</Col>
            </Row>
            <Row>
              <Col className="colR">
                Гемодинами­ческие нарушения крово­обращения с гипотензией
              </Col>
              <Col className="colR2">{col5.cols5.c3 || localData.c3}</Col>
            </Row>
            <Row>
              <Col className="colR">
                {"Лейкопения или лейкоцитоз (<5х10*9/л или >30х10*9/л)"}
              </Col>
              <Col className="colR2">{col5.cols5.c4 || localData.c4}</Col>
            </Row>
            <Row>
              <Col className="colR">Изменение объема около­плодных вод</Col>
              <Col className="colR2">{col5.cols5.c5 || localData.c5}</Col>
            </Row>
            <Row>
              <Col className="colR">{"Тромбоци­топения (<150х10*9/л)"}</Col>
              <Col className="colR2">{col5.cols5.c6 || localData.c6}</Col>
            </Row>
            <Row>
              <Col className="colR">
                {"Высокий уровень С-реактивного белка(> 6 мг/л)"}
              </Col>
              <Col className="colR2">{col5.cols5.c7 || localData.c7}</Col>
            </Row>
            <Row>
              <Col className="colR">
                Изменения плаценты воспали­тельного характера
              </Col>
              <Col className="colR2">{col5.cols5.c8 || localData.c8}</Col>
            </Row>
            <Row>
              <Col className="colR">p-вероятность</Col>
              <Col className="colR2">{col5.result5 || localData.res}</Col>
            </Row>
            <Row>
              <Col className="colR">Вероятность развития пневмонии</Col>
              <Col className="colR2">{col5.word5 || localData.word}</Col>
            </Row>
          </>
        ) : (
          <>
            <Row style={{ marginTop: "0.75rem" }}>
              <Col className="colR">
                Дыхательная недоста­точность III степени
              </Col>
              <Col className="colR" md={1}>
                Асфиксия
              </Col>
              <Col className="colR">
                Гемодинами­ческие нарушения крово­обращения с гипотензией
              </Col>
              <Col className="colR">
                {"Лейкопения или лейкоцитоз (<5х10*9/л или >30х10*9/л)"}
              </Col>
              <Col className="colR">Изменение объема около­плодных вод</Col>
              <Col className="colR">{"Тромбоци­топения (<150х10*9/л)"}</Col>
              <Col className="colR">
                {"Высокий уровень С-реактивного белка(> 6 мг/л)"}
              </Col>
              <Col className="colR">
                Изменения плаценты воспали­тельного характера
              </Col>
              <Col className="colR">p-вероятность</Col>
              <Col className="colR">Вероятность развития пневмонии</Col>
            </Row>
            <Row>
              <Col className="colR2">{col5.cols5.c1 || localData.c1}</Col>
              <Col className="colR2" md={1}>
                {col5.cols5.c2 || localData.c2}
              </Col>
              <Col className="colR2">{col5.cols5.c3 || localData.c3}</Col>
              <Col className="colR2">{col5.cols5.c4 || localData.c4}</Col>
              <Col className="colR2">{col5.cols5.c5 || localData.c5}</Col>
              <Col className="colR2">{col5.cols5.c6 || localData.c6}</Col>
              <Col className="colR2">{col5.cols5.c7 || localData.c7}</Col>
              <Col className="colR2">{col5.cols5.c8 || localData.c8}</Col>
              <Col className="colR2">{col5.result5 || localData.res}</Col>
              <Col className="colR2">{col5.word5 || localData.word}</Col>
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

export default Result5;
