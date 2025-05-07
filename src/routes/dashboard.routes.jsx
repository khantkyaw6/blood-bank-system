import DashboardLayout from "@/components/layout/dashboard-layout";
import AuthGuard from "@/middlewares/auth-guard";
import Bank from "@/modules/dashboard/pages/Bank";
import BankCreate from "@/modules/dashboard/pages/BankCreate";
import BankEdit from "@/modules/dashboard/pages/BankEdit";

export const dashboardRoutes = [
  {
    path: "/dashboard",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      // { index: true, element: <Home /> },
      // { path: "donors", element: <Donar /> }, // Table Read
      // { path: "donors/create", element: <DonarCreate /> },
      // { path: "donors/update", element: <DonarUpdate /> },
      { path: "banks", element: <Bank /> },
      { path: "banks/create", element: <BankCreate /> },
      { path: "banks/edit", element: <BankEdit /> },
    ],
  },
];
