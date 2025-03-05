//For routing, install react router library

import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


const AppLayout = ()=>{
	return (
	<div className="app">
		<Header />
		<Outlet />
	</div>
);
}

const appRouter = createBrowserRouter([
{
	path: "/",
	element: <AppLayout />,
	children: [{
	path: "/",
	element: <Body/>
},
{
	path: "/about",
	element: <About />
},
{
	path: "/contact",
	element: <Contact />
},
]
	errorElement: <Error />
},

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}>)

{/* // useRouteError hook for handling error */}

const err = useRouteError()

{/* //use link to navigate, do not use anchor tag href as it will refresh the whole page but link will update only the respective component */}

import {Link} from "react-router-dom"

<Link to="/contact">Contact Us </Link>

{/* //for dynamic path in routing  */}

{
	path: "/resturants/:resId",
	element: <RestaurantMenu />
}

{/* // fetching params from route */}

import {useParams} from "react-router-dom";

const {resId} = useParams();
