import DashboardLayout from "@/components/layout/bank-dashboard-layout";
import BankAuthGuard from "@/middlewares/bank-auth-guard";
import Appointment from "@/modules/bank-dashboard/pages/Appointment";
import AppointmentCreate from "@/modules/bank-dashboard/pages/AppointmentCreate";
import AppointmentEdit from "@/modules/bank-dashboard/pages/AppointmentEdit";
import Donors from "@/modules/bank-dashboard/pages/Donors";
import RequestForms from "@/modules/bank-dashboard/pages/RequestForms";
// import Home from "@/modules/bank-dashboard/pages/Home";

export const bankDashboardRoutes = [
  {
    path: "/bank-dashboard",
    element: (
      <BankAuthGuard>
        <DashboardLayout />
      </BankAuthGuard>
    ),
    children: [
      // { index: true, element: <Home /> },
      { path: "appointments", element: <Appointment /> },
      { path: "appointments/create", element: <AppointmentCreate /> },
      { path: "appointments/edit", element: <AppointmentEdit /> },
      { path: "donors", element: <Donors /> },
      { path: "request-forms", element: <RequestForms /> },
    ],
  },
];
