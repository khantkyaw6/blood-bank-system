import { BankForm } from "../components/BankForm";

export default function BankCreate() {
	const handleCreate = (data) => {
		console.log("Bank Created:", data);
	};

	return (
		<div>
			<BankForm onSubmit={handleCreate} />
		</div>
	);
}
