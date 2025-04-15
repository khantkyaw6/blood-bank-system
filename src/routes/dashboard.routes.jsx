import DashboardLayout from "@/components/layout/dashboard-layout";
import AuthGuard from "@/middlewares/auth-guard";
import Bank from "@/modules/dashboard/pages/Bank";
import Donar from "@/modules/dashboard/pages/Donor";
import Home from "@/modules/dashboard/pages/Home";

export const dashboardRoutes = [
	{
		path: "/dashboard",
		element: (
			<AuthGuard>
				<DashboardLayout />
			</AuthGuard>
		),
		children: [
			{ index: true, element: <Home /> },
			{ path: "donors", element: <Donar /> },
			{ path: "banks", element: <Bank /> },
		],
	},
];
