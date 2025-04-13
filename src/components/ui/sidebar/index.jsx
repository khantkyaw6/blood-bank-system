import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
// import MainSection from "./main-section";
// import SettingsSection from "./settings-section";

const DashboardSidebar = () => {
	return (
		<Sidebar variant='inset'>
			<SidebarContent>
				{/* <MainSection /> */}
				This is main section
				<Separator />
				{/* <SettingsSection /> */}
				This is setting section
			</SidebarContent>
		</Sidebar>
	);
};

export default DashboardSidebar;
