import { Container, Row, Col, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "..";
import axios from "axios";
import { saveAs } from "file-saver";
import { useMediaQuery } from "react-responsive";

const Result7 = observer(() => {
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
            res: col.result || localData.res,
            word: col.word || localData.word,
        };
    }, []);

    function createPdf() {
        axios
            .post(process.env.REACT_APP_HOST + "/create-pdf8", data)
            .then(() =>
                axios.get(process.env.REACT_APP_HOST + "/table8", { responseType: "blob" })
            )
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: "application/pdf" });
                saveAs(pdfBlob, `table8.pdf`);
            });
    }

    return (
        <Container>
            <div className="divCol">
                {mobile ? (
                    <>
                        <Row style={{ marginTop: "0.75rem" }}>
                            <Col className="colR">Гипопротеинемия {'(<40 г/л)'}</Col>
                            <Col className="colR2">{col.cols.c1 || localData.c1}</Col>
                        </Row>
                        <Row>
                            <Col className="colR">Гипоальбуминемия {'(<25 г/л)'}</Col>
                            <Col className="colR2">{col.cols.c2 || localData.c2}</Col>
                        </Row>
                        <Row>
                            <Col className="colR">C-реактивный белок {'(>6 мг/л или выше нормативного значения)'}</Col>
                            <Col className="colR2">{col.cols.c3 || localData.c3}</Col>
                        </Row>
                        <Row>
                            <Col className="colR">Лактат {'(>2 ммоль/л)'}</Col>
                            <Col className="colR2">{col.cols.c4 || localData.c4}</Col>
                        </Row>
                        <Row>
                            <Col className="colR">p-вероятность</Col>
                            <Col className="colR2">{col.result || localData.res}</Col>
                        </Row>
                        <Row>
                            <Col className="colR">Выраженность воспалительного процесса</Col>
                            <Col className="colR2">{col.word || localData.word}</Col>
                        </Row>
                    </>
                ) : (
                    <>
                        <Row style={{ marginTop: "0.75rem" }}>
                            <Col className="colR" >
                                Гипопротеинемия {'(<40 г/л)'}
                            </Col>
                            <Col className="colR" >
                                Гипоальбуминемия {'(<25 г/л)'}
                            </Col>
                            <Col className="colR" >
                                C-реактивный белок {'(>6 мг/л или выше нормативного значения)'}
                            </Col>
                            <Col className="colR" >
                                Лактат {'(>2 ммоль/л)'}
                            </Col>
                            <Col className="colR">p-вероятность</Col>
                            <Col className="colR">Выраженность воспалительного процесса</Col>
                        </Row>
                        <Row>
                            <Col className="colR2">
                                {col.cols.c1 || localData.c1}
                            </Col>
                            <Col className="colR2">
                                {col.cols.c2 || localData.c2}
                            </Col>
                            <Col className="colR2">
                                {col.cols.c3 || localData.c3}
                            </Col>
                            <Col className="colR2">
                                {col.cols.c4 || localData.c4}
                            </Col>
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

export default Result7;
