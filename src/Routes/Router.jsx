import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layouts/Main/Main";
import Contact from "../Components/Contact/Contact";
import Projects from "../Components/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'projects',
                element: <Projects></Projects>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    },

]);