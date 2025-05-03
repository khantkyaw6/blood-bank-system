import Main from "@/modules/main/pages/Main";
import DonorForm from "@/modules/main/pages/DonorForm";
import RequestForm from "@/modules/main/pages/RequestForm";

export const mainRoutes = [
  { path: "/main", element: <Main /> },
  { path: "/donor-form", element: <DonorForm /> },
  { path: "/request-form", element: <RequestForm /> },
];
