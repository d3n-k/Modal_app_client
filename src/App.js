import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./components/AppRouter";
import { observer } from 'mobx-react-lite';
import { BrowserRouter } from "react-router-dom";
import { Context } from './index';
import { useContext, useEffect, useState } from 'react';
import { check } from './http/UserApi';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {

  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      user.setIsAuth(true);
    }).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation={'grow'} style={{ position: "fixed", top: "50%", left: "50%" }} />
  }

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
