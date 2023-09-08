import { observer } from "mobx-react-lite";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import { saveAnnounce, getAnnounce } from "../http/AnnounceApi";
import { uploadFiles, getFiles, deleteFile } from "../http/FileApi";
import ReactQuill from 'react-quill';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'react-quill/dist/quill.snow.css';
import deleteImage from './../pics/delete.svg';
import copyImage from './../pics/copy.svg';
import plusImage from './../pics/plus.svg';

const Announce = observer(() => {

    const Quill = ReactQuill.Quill
    const Font = Quill.import("formats/font");
    Font.whitelist = ['Segoe', 'Helvetica', 'Arial', 'Raleway', 'Roboto', 'times', 'cycle'];
    Quill.register(Font, true);

    const [announces, setAnnounces] = useState(["", ""]);
    const [announceIndex, setAnnounceIndex] = useState(0);
    const [announce, setAnnounce] = useState("");

    const [filesList, setFileList] = useState(null);
    const inputRef = useRef(null);

    const maxNameLength = 15;

    useEffect(() => {
        updateFilesList();
    }, []);

    function updateFilesList() {
        getFiles().then((data) => {
            if (data && data.files && data.files.length > 0) {
                setFileList(data.files);
            }
        });
    }

    const handleUploadClick = () => {
        inputRef.current?.click();
    };

    const fileLink = (filename) => {
        return process.env.REACT_APP_HOST + '/files/' + filename;
    };

    const htmlLink = (filename, link) => {
        return '<br><h6><a href="' + link + '" rel="noopener noreferrer" target="_blank" class="ql-font-Arial" style="color: rgb(235, 104, 100);">' + filename + '</a></h6>';
    };

    const appendHtmlLink = (filename) => {
        let newAnnounce = announce;
        let link = fileLink(filename);
        newAnnounce += htmlLink(filename, link);
        setAnnounce(newAnnounce);
    };

    const handleFileChange = (e) => {
        if (!e.target.files && e.target.files.length < 1) {
            alert("files not selected");
            return;
        }
        const files = [...e.target.files];
        const filesData = new FormData();
        files.map((file, i) => {
            filesData.append(`file-${i}`, file);
        });

        uploadFiles(filesData).then((data) => {
            let newAnnounce = announce;
            files.map((file, i) => {
                let link = fileLink(file.name);
                newAnnounce += htmlLink(file.name, link);
            })
            setAnnounce(newAnnounce);
            updateFilesList();
        }).catch((e) => {
            alert(e);
        });
    };

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
                <Row style={{ marginTop: "2rem" }}>
                    <Col md={9}>
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
                        <div className="announ_div">
                            <Button onClick={() => {
                                saveAnnounces();
                            }} variant="danger">
                                Сохранить
                            </Button>

                            <Button onClick={() => {
                                handleUploadClick();
                            }} style={{ marginLeft: "2rem" }} variant="danger">
                                Загрузить файл
                            </Button>
                        </div>
                    </Col>
                    <Col md={3}>
                        {filesList && <ul className="autocomplete">
                            {filesList.map((file, i) => (
                                <li onClick={() => { }}
                                    key={i}
                                    className="autocomplete_item">
                                    <Row>
                                        <Col md={7}>{file.length > maxNameLength ? file.substring(0, maxNameLength) + '...' : file}</Col>
                                        <Col md={1} onClick={() => {
                                            appendHtmlLink(file);
                                        }}>
                                            <img className='cross' src={plusImage} alt="" />
                                        </Col>
                                        <Col md={1} onClick={() => {
                                            navigator.clipboard.writeText(fileLink(file));
                                            alert("Ссылка скопирована");
                                        }}>
                                            <img className='cross' src={copyImage} alt="" />
                                        </Col>
                                        <Col md={1} onClick={() => {
                                            deleteFile(file);
                                            setFileList(filesList.filter((item) => item !== file));
                                        }}>
                                            <img className='cross' src={deleteImage} alt="" />
                                        </Col>
                                    </Row>
                                </li>
                            ))}
                        </ul>}
                    </Col>
                </Row>
            </Container>

            <input
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
                accept=".pdf, .docx, .doc, .txt, .jpeg, .png"
                multiple
            />
        </div>
    );
});

export default Announce;
