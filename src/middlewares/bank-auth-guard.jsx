import { Navigate } from "react-router";

function BankAuthGuard({ children }) {
	const isAuthenticated = localStorage.getItem("blood_token"); //just use localstorage for store token
	console.log({ isAuthenticated });

	return !isAuthenticated ? (
		<>{children}</>
	) : (
		<Navigate to='/bank/login' replace />
	);
}

export default BankAuthGuard;
