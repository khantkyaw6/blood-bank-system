import React, { Suspense } from "react";

import { BrowserRouter as Router, useRoutes, Navigate } from "react-router";
import Loading from "../components/ui/loading";
import NotFoundPage from "../pages/NotFoundPage";
import { authCollection } from "./auth.collection.routes";
import { dashboardRoutes } from "./dashboard.routes";

const routes = [
	...authCollection,
	...dashboardRoutes,
	{ path: "/", element: <Navigate to='/dashboard' replace /> },
	{ path: "*", element: <NotFoundPage /> },
];

const Routes = () => useRoutes(routes);

export default function AppRoutes() {
	return (
		<Router>
			<Suspense fallback={<Loading />}>
				<Routes />
			</Suspense>
		</Router>
	);
}
