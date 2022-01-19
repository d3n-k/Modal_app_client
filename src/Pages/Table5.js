import { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import Header from "../components/Header";
import { RESULT_ROUTE_5 } from "../utils/consts";

function Table5() {
  const { col5 } = useContext(Context);

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);

  const navigate = useNavigate();

  const [wordd, setWordd] = useState(col5.word);
  const [res, setRes] = useState(0);

  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);
  const [c4, setC4] = useState(0);
  const [c5, setC5] = useState(0);
  const [c6, setC6] = useState(0);
  const [c7, setC7] = useState(0);
  const [c8, setC8] = useState(0);

  useEffect(() => {
    check1 ? setC1(1) : setC1(0);
    check2 ? setC2(1) : setC2(0);
    check3 ? setC3(1) : setC3(0);
    check4 ? setC4(1) : setC4(0);
    check5 ? setC5(1) : setC5(0);
    check6 ? setC6(1) : setC6(0);
    check7 ? setC7(1) : setC7(0);
    check8 ? setC8(1) : setC8(0);
  }, [check1, check2, check3, check4, check5, check6, check7, check8]);

  useEffect(() => {
    const z =
      -4.59 +
      2.54 * c1 +
      1.81 * c2 +
      1.83 * c3 +
      1.66 * c4 +
      2.4 * c5 +
      0.86 * c6 +
      0.74 * c7 +
      0.48 * c8;
    const p = Math.exp(z) / (1 + Math.exp(z));
    const num = Number(p.toFixed(4));
    setRes(num);
  }, [c1, c2, c3, c4, c5, c6, c7, c8]);

  useEffect(() => {
    res < 0.731 ? setWordd("низкая") : setWordd("высокая");
  }, [res]);

  function result() {
    const data = { c1, c2, c3, c4, c5, c6, c7, c8, res, word: wordd };

    col5.setResult5(res);
    col5.setWord5(wordd);
    col5.setCols5({ c1, c2, c3, c4, c5, c6, c7, c8 });

    localStorage.setItem("data5", JSON.stringify(data));

    navigate(RESULT_ROUTE_5);
  }


  return (
    <div>
      <Header />
      <Container>
        <div style={{ padding: "1.25rem" }} className="tableCard">
          <h4>
            Модель определения вероятности развития врожденной пневмонии у
            недоношенных новорожденных с очень низкой и экстремально низкой
            массой тела
          </h4>
          <h6 className="fullname">Горячко А.Н., Сукало А.В., Улезко Е.А.</h6>
          <div className="descript">
            Математическая модель для определения вероятности развития
            врожденной пневмонии у недоношенных новорожденных с очень низкой и
            экстремально низкой массой тела, основанная на методе многомерного
            анализа, в течение первых трех суток жизни позволяет выделить
            недоношенных новорожденных с массой тела 500-1499 г в группу
            высокого риска по развитию врожденной пневмонии.
          </div>
          <div style={{ marginTop: "1rem" }}>
            Проведен сравнительный анализ 214 факторов анамнеза жизни, исходов
            предыдущих беременностей, осложнений настоящей беременности,
            результатов клинических и лабораторных методов исследования у
            новорожденных в первые трое суток жизни. В последующем определены
            наиболее значимые факторы, ассоциированные с развитием врожденной
            пневмонии у недоношенных новорожденных с очень низкой и экстремально
            низкой массой тела. На основании бинарной логистической регрессии и
            ROC-анализа выведена прогностическая модель с чувствительностью,
            равной 87,6%, и специфичностью – 85,5%, что при пороговых значениях
            ≥0,73 позволяет отнести недоношенных новорожденных с очень низкой и
            экстремально низкой массой тела к группе высокого риска по развитию
            врожденной пневмонии.
          </div>
          <div style={{ marginTop: "1rem" }} className="checkboxes">
            <Form>
              <Form.Group controlId="check1">
                <Form.Check
                  onChange={() => setCheck1(!check1)}
                  checked={check1}
                  type="checkbox"
                  label="Дыхательная недостаточность III степени"
                />
              </Form.Group>
              <Form.Group controlId="check2">
                <Form.Check
                  onChange={() => setCheck2(!check2)}
                  checked={check2}
                  type="checkbox"
                  label="Асфиксия"
                />
              </Form.Group>
              <Form.Group controlId="check3">
                <Form.Check
                  onChange={() => setCheck3(!check3)}
                  checked={check3}
                  type="checkbox"
                  label="Гемодинамические нарушения кровообращения с гипотензией, требующей коррекции"
                />
              </Form.Group>
              <Form.Group style={{display: 'flex'}} controlId="check4">
                <Form.Check
                  onChange={() => setCheck4(!check4)}
                  checked={check4}
                  type="checkbox"
                />
                <label style={{marginLeft: '10px'}} htmlFor="check4">Лейкопения или лейкоцитоз ({'<5х10'}{<sup><small>9</small></sup>}/л или {'>30х10'}{<sup><small>9</small></sup>}/л)</label>
              </Form.Group>
              <Form.Group controlId="check5">
                <Form.Check
                  onChange={() => setCheck5(!check5)}
                  checked={check5}
                  type="checkbox"
                  label="Изменение объема околоплодных вод (мало- или многоводие)"
                />
              </Form.Group>
              <Form.Group style={{display: 'flex'}} controlId="check6">
                <Form.Check
                  onChange={() => setCheck6(!check6)}
                  checked={check6}
                  type="checkbox"
                />
                <label style={{marginLeft: '10px'}} htmlFor="check6">Тромбоцитопения ({'<150х10'}{<sup><small>9</small></sup>}/л)</label>
              </Form.Group>
              <Form.Group controlId="check7">
                <Form.Check
                  onChange={() => setCheck7(!check7)}
                  checked={check7}
                  type="checkbox"
                  label="Высокий уровень С-реактивного белка (> 6 мг/л или выше нормативного значения)"
                />
              </Form.Group>
              <Form.Group controlId="check8">
                <Form.Check
                  onChange={() => setCheck8(!check8)}
                  checked={check8}
                  type="checkbox"
                  label="Изменения плаценты воспалительного характера"
                />
              </Form.Group>
            </Form>
          </div>
          <Button
            className="colbut"
            variant="primary"
            onClick={result}
            style={{ marginTop: "1.25rem" }}
          >
            Продолжить
          </Button>
         
        </div>
      </Container>
    </div>
  );
}

export default Table5;
