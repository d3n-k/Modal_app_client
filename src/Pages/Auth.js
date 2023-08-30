import { useState, useEffect, useContext } from "react";
import { Context } from '../index';
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { ANNOUNCE_ROUTE, HOME_ROUTE } from "../utils/consts";
import { loginFunc } from "../http/UserApi";
import close from './../pics/close.svg'

const Auth = observer(() => {
    const { user } = useContext(Context);

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    const [formValid, setFormValid] = useState(false);

    const [loginError, setLoginError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const navigate = useNavigate();

    const blurHandler = (e) => {
        if (!e.target.value) {
            switch (e.target.name) {
                case "login":
                    setLoginError(true);
                    break;
                case "password":
                    setPasswordError(true);
                    break;
            }
        }
    };

    useEffect(() => {
        setLoginError(login === "");
        setPasswordError(password === "");
    }, [login, password]);

    useEffect(() => {
        setFormValid(!(loginError || passwordError));
    }, [loginError, passwordError]);

    const auth = async () => {
        try {
            let data = await loginFunc(login + "@bsmu.by", password);
            user.setIsAuth(true);
            navigate(ANNOUNCE_ROUTE);
        } catch (e) {
            user.setIsAuth(false);
            alert(JSON.stringify(e));
        }
    };

    const errorText = "Заполните это поле!";

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
                {loginError && (
                    <div style={{ color: "red", marginBottom: "-1.5rem" }}>{errorText}</div>
                )}
                <input
                    onBlur={(e) => blurHandler(e)}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Введите пароль..."
                />
                {passwordError && (
                    <div style={{ color: "red", marginBottom: "-1.5rem" }}>{errorText}</div>
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
