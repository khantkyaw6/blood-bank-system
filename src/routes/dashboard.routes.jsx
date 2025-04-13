import DashboardLayout from "@/components/layout/dashboard-layout";
import AuthGuard from "@/middlewares/auth-guard";

export const dashboardRoutes = [
	{
		path: "/dashboard",
		element: (
			<AuthGuard>
				<DashboardLayout />
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
