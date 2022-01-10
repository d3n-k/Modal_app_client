import Home from "./Pages/Home";
import Result from "./Pages/Result";
import Table from "./Pages/Table";
import { HOME_ROUTE, RESULT_ROUTE, TABLE_ROUTE } from "./utils/consts";

export const routes = [
    {
        path: HOME_ROUTE,
        Component: <Home/>
    },
    {
        path: TABLE_ROUTE,
        Component: <Table/>
    },
    {
        path: RESULT_ROUTE,
        Component: <Result/>
    },
]