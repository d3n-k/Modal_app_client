import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "react-quill/dist/quill.snow.css";
import rehypeRaw from 'rehype-raw'
import { getAnnounce } from "../http/AnnounceApi";

function Header() {

  const [announces, setAnnounces] = useState(["", ""]);

  useEffect(() => {
    for (let i = 0; i < announces.length; i++)
      getAnnounce(i).then((data) => {
        setAnnounces((oldArray) => {
          oldArray[i] = data.data;
          return [...oldArray];
        })
      });
  }, [])

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
      <div style={{ marginTop: "4rem" }}>
        {announces.map((element, index) => {
          if (element !== "")
            return <Container style={{ marginTop: "2rem" }}>
              <div className="ql-editor" style={{ backgroundColor: "white", textDecoration: "none", fontSize: "20px", fontFamily: "Roboto", borderRadius: "0.25rem", border: "1px solid rgba(0, 0, 0, 0.125)", padding: "1.25rem" }}>
                <ReactMarkdown children={element} rehypePlugins={[rehypeRaw]} />
              </div>
            </Container>
        })}
      </div>
    </header>
  );
}

export default Header;
