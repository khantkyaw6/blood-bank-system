import DashboardLayout from "@/components/layout/bank-dashboard-layout";
import BankAuthGuard from "@/middlewares/bank-auth-guard";

import Appointment from "@/modules/bank-dashboard/pages/appointment/Appointment";
import AppointmentCreate from "@/modules/bank-dashboard/pages/appointment/AppointmentCreate";
import AppointmentEdit from "@/modules/bank-dashboard/pages/appointment/AppointmentEdit";
import AppointmentDetail from "@/modules/bank-dashboard/pages/appointment/AppointmentDetail";

import Donor from "@/modules/bank-dashboard/pages/donor/Donor";
import DonorCreate from "@/modules/bank-dashboard/pages/donor/DonorCreate";
import DonorDetail from "@/modules/bank-dashboard/pages/donor/DonorDetail";
import DonorEdit from "@/modules/bank-dashboard/pages/donor/DonorEdit";

import RequestForm from "@/modules/bank-dashboard/pages/requestForm/RequestForm";
import RequestFormCreate from "@/modules/bank-dashboard/pages/requestForm/RequestFormCreate";
import RequestFormEdit from "@/modules/bank-dashboard/pages/requestForm/RequestFormEdit";
// import Home from "@/modules/bank-dashboard/pages/Home";
import { Navigate } from "react-router";

export const bankDashboardRoutes = [
  {
    path: "/bank-dashboard",
    element: (
      <BankAuthGuard>
        <DashboardLayout />
      </BankAuthGuard>
    ),
    children: [
      { index: true, element: <Navigate to="appointments" replace /> },
      // { index: true, element: <Home /> },
      { path: "appointments", element: <Appointment /> },
      { path: "appointments/create", element: <AppointmentCreate /> },
      { path: "appointments/detail/:id", element: <AppointmentDetail /> },
      { path: "appointments/edit/:id", element: <AppointmentEdit /> },

      { path: "donors", element: <Donor /> },
      { path: "donors/create", element: <DonorCreate /> },
      { path: "donors/detail/:id", element: <DonorDetail /> },
      { path: "donors/edit/:id", element: <DonorEdit /> },

      { path: "request-forms", element: <RequestForm /> },
      { path: "request-forms/create", element: <RequestFormCreate /> },
      { path: "request-forms/edit/:id", element: <RequestFormEdit /> },
    ],
  },
];
