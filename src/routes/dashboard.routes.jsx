import AuthGuard from "@/middlewares/auth-guard";

export const dashboardRoutes = [
	{
		path: "/dashboard",
		element: (
			<AuthGuard>
				<div>Dashboard Route</div>
				{/* // 	<DashboardLayout /> */}
			</AuthGuard>
		),
		// children: [
		// 	...dashboardRoute,
		// 	...usersRoutes,
		// 	...settingsRoutes,
		// 	...tenantsRoutes,
		// 	...propertyRoutes,
		// ],
	},
];
