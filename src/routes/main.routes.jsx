import Main from "@/modules/main/pages/Main";
import DonorForm from "@/modules/main/pages/DonorForm";
import RequestForm from "@/modules/main/pages/RequestForm";
import About from "@/modules/main/pages/About";
import Contact from "@/modules/main/pages/Contact";

export const mainRoutes = [
  { path: "/main", element: <Main /> },
  { path: "/donor-form", element: <DonorForm /> },
  { path: "/request-form", element: <RequestForm /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
];
