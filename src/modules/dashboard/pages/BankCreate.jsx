import axios from "axios";
import { BankForm } from "../components/BankForm";
import { baseUrl, adminDashboardEndPoint } from "@/constants/api.url";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function BankCreate() {
	const navigate = useNavigate();
	const handleCreate = async (data) => {
		console.log("Bank Created:", data);

		await axios
			.post(baseUrl + adminDashboardEndPoint + "banks", {
				...data,
			})
			.then(function (response) {
				console.log(response);
				if (response?.data.isSuccess) {
					toast(response?.data.message);
					navigate(-1);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div>
			<BankForm onSubmit={handleCreate} />
		</div>
	);
}
