import { observer } from "mobx-react-lite";
import { Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { saveAnnounce, getAnnounce } from "../http/AnnounceApi";
import ReactQuill from 'react-quill';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'react-quill/dist/quill.snow.css';

const Announce = observer(() => {

    const Quill = ReactQuill.Quill
    const Font = Quill.import("formats/font");
    Font.whitelist = ['Arial', 'Raleway', 'Roboto', 'times'];
    Quill.register(Font, true);

    const [announces, setAnnounces] = useState(["", ""]);
    const [announceIndex, setAnnounceIndex] = useState(0);
    const [announce, setAnnounce] = useState("");

    useEffect(() => {
        for (let i = 0; i < announces.length; i++)
            getAnnounce(i).then((data) => {
                setAnnounces((oldArray) => {
                    oldArray[i] = data.data;
                    return [...oldArray];
                })
                if (i === 0)
                    setAnnounce(data.data);
            });
    }, []);

    const saveAnnounces = () => {
        for (let i = 0; i < announces.length; i++)
            saveAnnounce(i, i === announceIndex ? announce : announces[i]);
        alert("Объявления сохранены!");
    };

    useEffect(() => {
        setAnnounce(announces[announceIndex]);
    }, [announceIndex]);

    const colors = [
        "#333333",
        "darkgray",
        "black",
        "white",
        "red",
        "blue",
        "deeppink",
        "dodgerblue",
        "purple",
        "#EB6864",
        "palegreen",
        "#e7908d",
        "orange",
        "green"];

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ size: [] }],
            [{ font: Font.whitelist }],
            [{ align: ["right", "center", "justify"] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            [{ color: colors }],
            [{ background: colors }]
        ]
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align",
        "size",
        "font"
    ];

    return (
        <div style={{ marginBottom: "4rem" }}>
            <Container style={{ marginTop: "2rem" }}>
                <h2 style={{ textAlign: "center" }}>Добавить объявления</h2>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={announceIndex}
                    onSelect={(k) => {
                        setAnnounces((oldArray) => { oldArray[announceIndex] = announce; return [...oldArray]; });
                        const index = parseInt(k);
                        setAnnounceIndex(index);
                    }}
                    className="announce_tabs"
                    style={{ borderWidth: "0px" }}
                    fill>
                    {announces.map((element, index) => (
                        <Tab eventKey={index} title={"Объявление " + (index + 1)} />
                    ))}
                </Tabs>
                <ReactQuill className="texteditor" formats={formats} modules={modules} theme="snow" value={announce} onChange={(value) => setAnnounce(value)} />
                <div>
                    <Button onClick={() => {
                        saveAnnounces();
                    }} className="announ_button" variant="danger">
                        Сохранить
                    </Button>
                </div>
            </Container>
        </div>
    );
});

export default Announce;
