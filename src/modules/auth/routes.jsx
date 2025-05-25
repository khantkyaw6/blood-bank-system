import BankLoginPage from "./pages/BankLoginPage";
import BankRegisterPage from "./pages/BankRegisterPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const authRoutes = [
	{ path: "/login", element: <LoginPage /> },
	{ path: "/register", element: <RegisterPage /> },
	{ path: "/bank-dashboard/login", element: <BankLoginPage /> },
	// { path: "/bank/register", element: <BankRegisterPage /> },
];

export default authRoutes;
