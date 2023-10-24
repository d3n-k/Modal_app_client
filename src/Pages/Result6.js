import { Container, Row, Col, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "..";
import axios from "axios";
import { saveAs } from "file-saver";
import { useMediaQuery } from "react-responsive";

const Result6 = observer(() => {
    const mobile = useMediaQuery({ query: "(max-width: 1400px)" });

    const { col } = useContext(Context);

    const localData = JSON.parse(localStorage.getItem("data"));

    let data;

    useEffect(() => {
        data = {
            c1: col.cols.c1 || localData.c1,
            c2: col.cols.c2 || localData.c2,
            c3: col.cols.c3 || localData.c3,
            res: col.result || localData.res,
            word: col.word || localData.word,
        };
    }, []);

    function createPdf() {
        axios
            .post(process.env.REACT_APP_HOST + "/create-pdf7", data)
            .then(() =>
                axios.get(process.env.REACT_APP_HOST + "/table7", { responseType: "blob" })
            )
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: "application/pdf" });
                saveAs(pdfBlob, `table7.pdf`);
            });
    }

    return (
        <Container>
            <div className="divCol">
                {mobile ? (
                    <>
                        <Row style={{ marginTop: "0.75rem" }}>
                            <Col className="colR">Тромбоциты ({'<150х10'}{<sup><small>9</small></sup>}/л)</Col>
                            <Col className="colR2">{col.cols.c1 || localData.c1}</Col>
                        </Row>
                        <Row>
                            <Col className="colR">Лейкопения или лейкоцитоз ({'<5х10'}{<sup><small>9</small></sup>}/л или {'>30х10'}{<sup><small>9</small></sup>}/л)</Col>
                            <Col className="colR2">{col.cols.c2 || localData.c2}</Col>
                        </Row>
                        <Row>
                            <Col className="colR">Нейтрофильный индекс {'(>0,2)'}</Col>
                            <Col className="colR2">{col.cols.c3 || localData.c3}</Col>
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
                                Тромбоциты ({'<150х10'}{<sup><small>9</small></sup>}/л)
                            </Col>
                            <Col className="colR" >
                                Лейкопения или лейкоцитоз ({'<5х10'}{<sup><small>9</small></sup>}/л или {'>30х10'}{<sup><small>9</small></sup>}/л)
                            </Col>
                            <Col className="colR" >
                                Нейтрофильный индекс {'(>0,2)'}
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

export default Result6;
