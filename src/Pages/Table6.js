import { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import Header from "../components/Header";
import { RESULT_ROUTE_6 } from "../utils/consts";

function Table6() {

    const { col } = useContext(Context);

    const [c1, setCheck1] = useState(false);
    const [c2, setCheck2] = useState(false);
    const [c3, setCheck3] = useState(false);

    const navigate = useNavigate();

    const [wordd, setWordd] = useState(col.word);
    const [res, setRes] = useState(0);

    useEffect(() => {
        const z = -0.25 + 2.4 * (c1 ? 1 : 0) + 2.02 * (c2 ? 1 : 0) + 1.85 * (c3 ? 1 : 0);
        const p = Math.exp(z) / (1 + Math.exp(z));
        const num = p.toFixed(3);
        setRes(num);
    }, [c1, c2, c3]);

    useEffect(() => {
        res < 0.854 ? setWordd('низкая') : setWordd('высокая');
    }, [res])

    function result() {
        const data = { c1: c1 ? 1 : 0, c2: c2 ? 1 : 0, c3: c3 ? 1 : 0, res, word: wordd }

        col.setResult(res);
        col.setWord(wordd);
        col.setCols({ c1: data.c1, c2: data.c2, c3: data.c3 });

        localStorage.setItem('data', JSON.stringify(data));

        navigate(RESULT_ROUTE_6);
    }


    return (
        <div>
            <Header />
            <Container>
                <div style={{ padding: "1.25rem" }} className="tableCard">
                    <h4>
                        Модель оценки выраженности воспалительного процесса у недоношенных новорожденных с врожденной пневмонией на протяжении неонатального периода по данным общего анализа крови
                    </h4>
                    <h6 className="fullname">Рубникович С.П., Горячко А.Н.</h6>
                    <div className="descript">
                        Разработанная по данным общего анализа крови и на основании бинарной логистической регрессии математическая модель позволяет на протяжении первого месяца жизни проводить оценку выраженности патологического процесса при врожденной пневмонии у недоношенных новорожденных.
                    </div>
                    <div style={{ marginTop: "1rem" }}>
                        Проведено сравнение 18 показателей общего анализа крови у 221 недоношенного новорожденного при рождении, в раннем и позднем неонатальном периоде. По результатам исследования у недоношенных младенцев с врожденной пневмонией определены прогностические значения, позволяющие контролировать течение заболевания: лейкопения ({'<5×10'}{<sup><small>9</small></sup>}/л) или лейкоцитоз (на 1–2-е сутки жизни {'>30×10'}{<sup><small>9</small></sup>}/л, на 5–7-е сутки жизни {'>20×10'}{<sup><small>9</small></sup>}/л, после 7-х суток жизни {'>17×10'}{<sup><small>9</small></sup>}/л), нейтрофильный индекс {'(>0,2)'} и тромбоцитопения ({'<150×10'}{<sup><small>9</small></sup>}/л).  Разработана математическая модель (χ{<sup><small>2</small></sup>}=80,42, {'р<0,001'}) с чувствительностью равной 73,8%, специфичностью – 86,8%,  площадью под ROC-кривой AUC=0,85±0,046, {'р<0,001'}, что при пороговом значении ≥0,854 позволяет оценивать выраженность патологического процесса у недоношенных новорожденных с врожденной пневмонией.
                    </div>
                    <div style={{ marginTop: "1rem" }} className="checkboxes">
                        <Form >
                            <Form.Group style={{ display: 'flex' }} controlId="check1">
                                <Form.Check
                                    onChange={() => setCheck1(!c1)}
                                    checked={c1}
                                    type="checkbox"
                                />
                                <label style={{ marginLeft: '10px' }} htmlFor="check1">Тромбоцитопения ({'<150×10'}{<sup><small>9</small></sup>}/л)</label>
                            </Form.Group>
                            <Form.Group style={{ display: 'flex' }} controlId="check2">
                                <Form.Check
                                    onChange={() => setCheck2(!c2)}
                                    checked={c2}
                                    type="checkbox"
                                />
                                <label style={{ marginLeft: '10px' }} htmlFor="check2">Лейкопения ({'>30×10'}{<sup><small>9</small></sup>}/л) или лейкоцитоз (на 1–2-е сутки жизни {'>30×10'}{<sup><small>9</small></sup>}/л, на 5–7-е сутки жизни {'>20×10'}{<sup><small>9</small></sup>}/л, после 7-х суток жизни {'>17×10'}{<sup><small>9</small></sup>}/л)</label>
                            </Form.Group>
                            <Form.Group controlId="check3">
                                <Form.Check
                                    onChange={() => setCheck3(!c3)}
                                    checked={c3}
                                    type="checkbox"
                                    label="Нейтрофильный индекс (>0,2)"
                                />
                            </Form.Group>
                        </Form>
                    </div>
                    <Button className="colbut" variant="primary" onClick={result} style={{ marginTop: "1.25rem" }}>
                        Продолжить
                    </Button>

                </div>
            </Container>
        </div>
    );
}

export default Table6;
