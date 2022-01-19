import { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import Header from "../components/Header";
import { RESULT_ROUTE_4 } from "../utils/consts";

function Table4() {

  const {col4} = useContext(Context);


  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  
  const navigate = useNavigate();

  const [wordd, setWordd] = useState(col4.word);
  const [res, setRes] = useState(0);

  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);
  const [c4, setC4] = useState(0);
  const [c5, setC5] = useState(0);
  
  
  useEffect(() => {

    check1 ? (setC1(1)) : (setC1(0));
    check2 ? (setC2(1)) : (setC2(0));
    check3 ? (setC3(1)) : (setC3(0));
    check4 ? (setC4(1)) : (setC4(0));
    check5 ? (setC5(1)) : (setC5(0));
    
  }, [check1, check2, check3, check4, check5]);


  useEffect( () => {
    const z = -1.82+1.6*c1+2.8*c2+1.49*c3+2.61*c4+2.62*c5        
    const p = Math.exp(z) / (1 + Math.exp(z));
    const num = (Number(p.toFixed(4)));
    setRes(num);
  }, [c1, c2, c3, c4, c5])

  useEffect( () => {
    res < 0.45 ? setWordd('низкая') : setWordd('высокая');
  }, [res])
  
     function result() {
     const data = {c1, c2, c3, c4, c5, res, word: wordd}
  
     col4.setResult4(res);
     col4.setWord4(wordd);
     col4.setCols4( {c1, c2, c3, c4, c5} );

     localStorage.setItem('data4', JSON.stringify(data));

    navigate(RESULT_ROUTE_4);
    }
  

  return (
    <div>
      <Header />
      <Container>
        <div style={{ padding: "1.25rem" }} className="tableCard">
          <h4>
          Прогностическая модель для определения вероятности развития врожденной пневмонии у недоношенных новорожденных с низкой массой тела
          </h4>
          <h6 className="fullname">Горячко А.Н., Сукало А.В., Улезко Е.А., Павлович Т.П.</h6>
          <div className="descript">
          Прогностическая модель для определения вероятности развития врожденной пневмонии у недоношенных новорожденных с низкой массой тела, основанная на методе многомерного анализа, в течение первых трех суток жизни позволяет выделить недоношенных новорожденных с низкой массой тела в группу высокого риска по развитию врожденной пневмонии.
          </div>
          <div style={{ marginTop: "1rem" }}>
          Проведен сравнительный анализ 214 данных анамнеза жизни, исходов предыдущих беременностей, осложнений настоящей беременности у матерей, клинических и лабораторных методов исследования у новорожденных в первые трое суток жизни. В последующем определены наиболее значимые факторы, ассоциированные с развитием врожденной пневмонии у недоношенных новорожденных с низкой массой тела. На основании бинарной логистической регрессии и ROC-анализа выведена прогностическая модель с чувствительностью, равной 81,8 %, и специфичностью – 83,0 %, что при пороговых значениях ≥0,45 позволяет выделить недоношенных новорожденных с низкой массой тела к группе высокого риска по развитию врожденной пневмонии.
          </div>
          <div style={{ marginTop: "1rem" }} className="checkboxes">
            <Form >
              <Form.Group controlId="check1">
                <Form.Check 
                  onChange={() => setCheck1(!check1)}
                  checked={check1}
                  type="checkbox"
                  label="Самопроизвольный выкидыш"
                />
              </Form.Group>
              <Form.Group controlId="check2">
                <Form.Check
                  onChange={() => setCheck2(!check2)}
                  checked={check2}
                  type="checkbox"
                  label="Неразвивающаяся бемеренность"
                />
              </Form.Group>
              <Form.Group controlId="check3">
                <Form.Check
                  onChange={() => setCheck3(!check3)}
                  checked={check3}
                  type="checkbox"
                  label="Хроническая фетоплацентарная недостаточность"
                />
              </Form.Group>
              <Form.Group controlId="check4">
                <Form.Check
                  onChange={() => setCheck4(!check4)}
                  checked={check4}
                  type="checkbox"
                  label="Изменения в плаценте воспалительного характера"
                />
              </Form.Group>
              <Form.Group controlId="check5">
                <Form.Check
                  onChange={() => setCheck5(!check5)}
                  checked={check5}
                  type="checkbox"
                  label="Дыхательная недостаточность III ст."
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

export default Table4;