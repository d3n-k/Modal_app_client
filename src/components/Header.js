import inst1 from "../instructions/inst1.pdf";
import inst2 from "../instructions/inst2.pdf";
//import inst3 from "../instructions/inst_photo.jpg";
import { Container } from "react-bootstrap";

function Header() {
    return (
      <header>
          <Container>
        <div className="title">
          <h4 className="h4">
            ДИАГНОСТИКА ВРОЖДЕННОЙ ПНЕВМОНИИ У НОВОРОЖДЕННЫХ С ПОМОЩЬЮ
            МАТЕМАТИЧЕСКОЙ МОДЕЛИ
          </h4>
        </div>
      </Container>
      <div className="hr"></div>
      <Container style={{ marginTop: "4rem" }}>
        <div className="instr">
          <div className="inst_title">
            МЕТОД ОПРЕДЕЛЕНИЯ ВЕРОЯТНОСТИ РАЗВИТИЯ ВРОЖДЕННОЙ ПНЕВМОНИИ У
            ДОНОШЕННЫХ НОВОРОЖДЕННЫХ
          </div>
          <div style={{ textAlign: "center" }}>(инструкция по применению)</div>
          <div className="links">
            <div className="link">
              <a target="_blank" href={inst1}>
                Инструкция метод определения(pdf)
              </a>
            </div>
            {/*<div className="link">
              <a target="_blank" href={inst2}>
                Инструкция метод определения(doc)
              </a>
            </div>
            <div className="link">
              <a style={{ marginLeft: "15%" }} target="_blank" href={inst3}>
                1-я страница инструкции
              </a>
            </div>*/}
          </div>
        </div>
        </Container>
        <Container style={{ marginTop: "2rem" }}>
        <div className="instr">
          <div className="inst_title">
            МЕТОД ОПРЕДЕЛЕНИЯ ВЕРОЯТНОСТИ РАЗВИТИЯ ВРОЖДЕННОЙ ПНЕВМОНИИ У
            НЕДОНОШЕННЫХ НОВОРОЖДЕННЫХ
          </div>
          <div style={{ textAlign: "center" }}>(инструкция по применению)</div>
          <div className="links">
            <div className="link">
              <a target="_blank" href={inst2}>
                Инструкция метод определения(pdf)
              </a>
            </div>
            {/*<div className="link">
              <a target="_blank" href={inst2_2}>
                Инструкция метод определения(doc)
              </a>
            </div>
            <div className="link">
              <a style={{ marginLeft: "15%" }} target="_blank" href={inst2_single}>
                1-я страница инструкции
              </a>
            </div>*/}
          </div>
        </div>
        </Container>
      </header>
    );
  }
  
  export default Header;
  