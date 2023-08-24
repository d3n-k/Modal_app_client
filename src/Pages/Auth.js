import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { EDIT_ROUTE, HOME_ROUTE } from "../utils/consts";
import { loginFunc } from "../http/UserApi";
import axios from "axios";
import close from './../pics/close.svg'

const Auth = observer(() => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [loginEmpty, setLoginEmpty] = useState(false);
    const [passwordEmpty, setPasswordEmpty] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const [loginError, setLoginError] = useState("Заполните это поле!");
    const [passwordError, setPasswordError] = useState("Заполните это поле!");

    const navigate = useNavigate();

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "login":
                setLoginEmpty(true);
                break;
            case "password":
                setPasswordEmpty(true);
                break;
        }
    };

    useEffect(() => {
        if (!login) {
            setLoginError("Заполните это поле!");
        } else {
            setLoginError("");
        }
        if (!password) {
            setPasswordError("Заполните это поле!");
        } else {
            setPasswordError("");
        }
    }, [login, password]);

    useEffect(() => {
        if (loginError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [loginError, passwordError]);

    const auth = async () => {
        alert("data " + process.env.REACT_APP_HOST + "/login" + "   " + { login: login + "@bsmu.by", password: password });
        axios.post(process.env.REACT_APP_HOST + "/login", { login: login + "@bsmu.by", password: password })
            .then((data) =>
                alert(JSON.stringify(data))
                //axios.get(process.env.REACT_APP_HOST + "/table6", { responseType: "blob" })
            ).catch((e) => alert(e));
        // let data = await loginFunc(login + "@bsmu.by", password);
        // alert(data);
        // if (admin.admins.filter((obj) => obj.login.toLowerCase() === login.toLowerCase()).length > 0) {
        //     try {
        //         let data;

        //         // data = await loginFunc(login + "@bsmu.by", password);

        //         user.setIsAuth(true);
        //         user.setUser(data);
        //         navigate(EDIT_ROUTE);
        //     } catch (e) {
        //         alert(e.response.data.message);
        //     }
        // } else {
        //     alert("У вас нет доступа!");
        // }
    };

    return (
        <div
            onKeyDown={(e) => {
                if (e.keyCode === 13) {
                    auth();
                }
            }}
            className="auth_div"
        >
            <div style={{ position: 'relative' }} className="auth">

                <img onClick={() => navigate(HOME_ROUTE)} src={close} alt="" className="close_img" />

                <h4 style={{ textAlign: "center", color: "#EB6864", marginTop: "1rem" }}>
                    Авторизация
                </h4>
                <input
                    onBlur={(e) => blurHandler(e)}
                    name="login"
                    onChange={(e) => setLogin(e.target.value)}
                    value={login}
                    type="text"
                    placeholder="Введите логин..."
                />
                {loginEmpty && loginError && (
                    <div style={{ color: "red", marginBottom: "-1.5rem" }}>{loginError}</div>
                )}
                <input
                    onBlur={(e) => blurHandler(e)}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Введите пароль..."
                />
                {passwordEmpty && passwordError && (
                    <div style={{ color: "red", marginBottom: "-1.5rem" }}>{passwordError}</div>
                )}

                <Button
                    disabled={!formValid}
                    onClick={auth}
                    variant="danger"
                    style={{
                        width: "30%",
                        marginLeft: "35%",
                        marginTop: "2rem",
                        fontFamily: "Roboto",
                        fontSize: "20px",
                    }}
                >
                    Войти
                </Button>
            </div>
        </div>
    );
});

export default Auth;
