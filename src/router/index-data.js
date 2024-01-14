import { lazy } from "react";

const Home = lazy(() => import("./../layouts/Home/index"))
const About = lazy(() => import("./../layouts/About/index"))
const Single = lazy(() => import("./../layouts/single/index"))
const Announc = lazy(() => import("./../layouts/announs/index"))
const Profile = lazy(() => import("./../layouts/profile/index"))

export const RouterData = [
    {
        id : 1,
        path : "/",
        component : <Home/>
    },
    {
        id : 2,
        path : "/about",
        component : <About/>
    },
    {
        id : 3,
        path : "/single/:email",
        component : <Single/>
    },
    {
        id : 4,
        path : "/announc",
        component : <Announc/>
    },
    {
        id : 5,
        path : "/profile",
        component : <Profile/>
    }
]