import { Navigate } from "react-router";

function AuthGuard({ children }) {
	const isAuthenticated = localStorage.getItem("admin_token"); //just use localstorage for store token
	console.log({ isAuthenticated });

	return !isAuthenticated ? (
		<>{children}</>
	) : (
		<Navigate to='/login' replace />
	);
}

export default AuthGuard;
