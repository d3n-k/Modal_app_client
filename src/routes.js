import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Announce from "./Pages/Announce";
import Result from "./Pages/Result";
import Result1 from "./Pages/Result1";
import Result2 from "./Pages/Result2";
import Result3 from "./Pages/Result3";
import Result4 from "./Pages/Result4";
import Result5 from "./Pages/Result5";
import Table from "./Pages/Table";
import Table1 from "./Pages/Table1";
import Table2 from "./Pages/Table2";
import Table3 from "./Pages/Table3";
import Table4 from "./Pages/Table4";
import Table5 from "./Pages/Table5";
import { HOME_ROUTE, AUTH_ROUTE, ANNOUNCE_ROUTE, RESULT_ROUTE, RESULT_ROUTE_1, RESULT_ROUTE_2, RESULT_ROUTE_3, RESULT_ROUTE_4, RESULT_ROUTE_5, TABLE_ROUTE, TABLE_ROUTE_1, TABLE_ROUTE_2, TABLE_ROUTE_3, TABLE_ROUTE_4, TABLE_ROUTE_5 } from "./utils/consts";

export const routes = [
    {
        path: HOME_ROUTE,
        Component: <Home />
    },
    {
        path: AUTH_ROUTE,
        Component: <Auth />
    },
    {
        path: TABLE_ROUTE,
        Component: <Table />
    },
    {
        path: RESULT_ROUTE,
        Component: <Result />
    },
    {
        path: TABLE_ROUTE_5,
        Component: <Table5 />
    },
    {
        path: RESULT_ROUTE_5,
        Component: <Result5 />
    },
    {
        path: TABLE_ROUTE_1,
        Component: <Table1 />
    },
    {
        path: RESULT_ROUTE_1,
        Component: <Result1 />
    },
    {
        path: TABLE_ROUTE_2,
        Component: <Table2 />
    },
    {
        path: RESULT_ROUTE_2,
        Component: <Result2 />
    },
    {
        path: TABLE_ROUTE_3,
        Component: <Table3 />
    },
    {
        path: RESULT_ROUTE_3,
        Component: <Result3 />
    },
    {
        path: TABLE_ROUTE_4,
        Component: <Table4 />
    },
    {
        path: RESULT_ROUTE_4,
        Component: <Result4 />
    },
]

export const authRoutes = [
    {
        path: ANNOUNCE_ROUTE,
        Component: <Announce />
    }
]