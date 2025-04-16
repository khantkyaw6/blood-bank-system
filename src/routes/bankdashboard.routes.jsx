import DashboardLayout from "@/components/layout/bank-dashboard-layout";
import BankAuthGuard from "@/middlewares/bank-auth-guard";
import Appointment from "@/modules/bank-dashboard/pages/Appointment";
import Home from "@/modules/bank-dashboard/pages/Home";

export const bankDashboardRoutes = [
	{
		path: "/bank-dashboard",
		element: (
			<BankAuthGuard>
				<DashboardLayout />
			</BankAuthGuard>
		),
		children: [
			{ index: true, element: <Home /> },
			{ path: "appointments", element: <Appointment /> },
		],
	},
];
