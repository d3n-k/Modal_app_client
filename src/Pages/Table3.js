import { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import Header from "../components/Header";
import { RESULT_ROUTE_3 } from "../utils/consts";

function Table3() {

  const {col3} = useContext(Context);


  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  
  const navigate = useNavigate();

  const [wordd, setWordd] = useState(col3.word);
  const [res, setRes] = useState(0);

  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);
  const [c4, setC4] = useState(0);
  const [c5, setC5] = useState(0);
  const [c6, setC6] = useState(0);
  
  
  useEffect(() => {

    check1 ? (setC1(1)) : (setC1(0));
    check2 ? (setC2(1)) : (setC2(0));
    check3 ? (setC3(1)) : (setC3(0));
    check4 ? (setC4(1)) : (setC4(0));
    check5 ? (setC5(1)) : (setC5(0));
    check6 ? (setC6(1)) : (setC6(0));
    
  }, [check1, check2, check3, check4, check5, check6]);


  useEffect( () => {
    const z = -1.56+1.53*c1+2.76*c2+1.01*c3+0.87*c4+0.63*c5+2.42*c6              
    const p = Math.exp(z) / (1 + Math.exp(z));
    const num = p.toFixed(3);
    setRes(num);
  }, [c1, c2, c3, c4, c5, c6])

  useEffect( () => {
    res < 0.49 ? setWordd('низкая') : setWordd('высокая');
  }, [res])
  
     function result() {
     const data = {c1, c2, c3, c4, c5, c6, res, word: wordd}
  
     col3.setResult3(res);
     col3.setWord3(wordd);
     col3.setCols3( {c1, c2, c3, c4, c5, c6} );

     localStorage.setItem('data3', JSON.stringify(data));

    navigate(RESULT_ROUTE_3);
    }
  

  return (
    <div>
      <Header />
      <Container>
        <div style={{ padding: "1.25rem" }} className="tableCard">
          <h4>
          Определение вероятности развития врожденной пневмонии у недоношенных новорожденных с низкой массой тела экспресс-методом
          </h4>
          <h6 className="fullname">Горячко А.Н., Сукало А.В., Рожко Ю.В., Свирская О.Я.</h6>
          <div className="descript">
          Математическая модель методом многомерного анализа позволяет в течение первых суток жизни выделить недоношенных новорожденных с низкой массой тела в группу высокого риска по развитию врожденной пневмонии.
          </div>
          <div style={{ marginTop: "1rem" }}>
          Проведен сравнительный анализ 214 факторов анамнеза жизни, исходов предыдущих беременностей, осложнений настоящей беременности у матерей, клинических и лабораторных методов исследования у новорожденных в первые сутки жизни. Определены наиболее значимые факторы, ассоциированные с развитием врожденной пневмонии у недоношенных новорожденных с низкой массой тела. Прогностическая ценность каждого из факторов и их совокупность оценивалась с помощью бинарной логистической регрессии, отсутствия между факторами статистически значимых корреляционных связей, отрицательного удвоенного логарифма функции правдоподобия и меры определенности анализа ROC-кривой. Проведен анализ с выбором математической модели, имеющей чувствительность, равную 76,4%, специфичностью – 83,0%, что при пороговых значениях ≥0,49 позволяет выделить в группу риска по развитию врожденной пневмонии среди недоношенных новорожденных с низкой массой тела.
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
                  label="Синдром задержки развития плода"
                />
              </Form.Group>
              <Form.Group controlId="check5">
                <Form.Check
                  onChange={() => setCheck5(!check5)}
                  checked={check5}
                  type="checkbox"
                  label="Угроза прерывания беременности"
                />
              </Form.Group>
              <Form.Group controlId="check6">
                <Form.Check
                  onChange={() => setCheck6(!check6)}
                  checked={check6}
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

export default Table3;