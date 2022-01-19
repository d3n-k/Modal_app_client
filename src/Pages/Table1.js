import { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import Header from "../components/Header";
import { RESULT_ROUTE_1 } from "../utils/consts";

function Table1() {

  const {col1} = useContext(Context);


  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  
  const navigate = useNavigate();

  const [wordd, setWordd] = useState(col1.word);
  const [res, setRes] = useState(0);

  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);
  const [c4, setC4] = useState(0);
  
  
  useEffect(() => {

    check1 ? (setC1(1)) : (setC1(0));
    check2 ? (setC2(1)) : (setC2(0));
    check3 ? (setC3(1)) : (setC3(0));
    check4 ? (setC4(1)) : (setC4(0));
    
  }, [check1, check2, check3, check4]);


  useEffect( () => {
    const z = -2.47+5.21*c1+4.1*c2+2.62*c3+2.6*c4              
    const p = Math.exp(z) / (1 + Math.exp(z));
    const num = (Number(p.toFixed(4)));
    setRes(num);
  }, [c1, c2, c3, c4])

  useEffect( () => {
    res < 0.53 ?  setWordd('низкая') : setWordd('высокая');
  }, [res])
  
     function result() {
     const data = {c1, c2, c3, c4, res, word: wordd}
  
     col1.setResult1(res);
     col1.setWord1(wordd);
     col1.setCols1( {c1, c2, c3, c4} );

     localStorage.setItem('data1', JSON.stringify(data));

    navigate(RESULT_ROUTE_1);
    }
  

  return (
    <div>
      <Header />
      <Container>
        <div style={{ padding: "1.25rem" }} className="tableCard">
          <h4>
          Экспресс-метод определения вероятности развития врожденной пневмонии у доношенных новорожденных
          </h4>
          <h6 className="fullname">Горячко А.Н., Сукало А.В., Станкевич О.Б., Самойлович С.В.</h6>
          <div className="descript">
          Математическая модель методом многомерного анализа позволяет в течение первых суток жизни без рентгенограммы легких определить доношенных новорожденных в группу высокого риска по развитию врожденной пневмонии.
          </div>
          <div style={{ marginTop: "1rem" }}>
          Проведен сравнительный анализ 174 данных анамнеза жизни, исходов предыдущих беременностей, осложнений настоящей беременности у матерей, клинических и рутинных лабораторных методов исследования у новорожденных в первые сутки жизни. В последующем определены наиболее значимые факторы, ассоциированные с развитием врожденной пневмонии у доношенных новорожденных. На основании бинарной логистической регрессии и ROC-анализа проведен математический анализ 99 (387,4 млн) связей переменных, с выбором прогностической модели, имеющей наивысшую оценку по чувствительности (90,6%) и специфичности (92,1%) для выделения доношенных новорожденных в группу риска по развитию врожденной пневмонии.
          </div>
          <div style={{ marginTop: "1rem" }} className="checkboxes">
            <Form >
              <Form.Group controlId="check1">
                <Form.Check 
                  onChange={() => setCheck1(!check1)}
                  checked={check1}
                  type="checkbox"
                  label="Наличие дыхательной недостаточности"
                />
              </Form.Group>
              <Form.Group controlId="check2">
                <Form.Check
                  onChange={() => setCheck2(!check2)}
                  checked={check2}
                  type="checkbox"
                  label="Самопроизвольный выкидыш в анамнезе"
                />
              </Form.Group>
              <Form.Group controlId="check3">
                <Form.Check
                  onChange={() => setCheck3(!check3)}
                  checked={check3}
                  type="checkbox"
                  label="Хроническая внутриматочная гипоксия плода в настоящую беременность"
                />
              </Form.Group>
              <Form.Group controlId="check4">
                <Form.Check
                  onChange={() => setCheck4(!check4)}
                  checked={check4}
                  type="checkbox"
                  label="Хроническая фетоплацентарная недостаточность в настоящую беременность"
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

export default Table1;