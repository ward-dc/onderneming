import Balance from "../../components/dashboard/content/balance";
import MainChart from "../../components/dashboard/content/mainChart";
import AdminNav from "../../components/dashboard/nav/nav";
import AdminSidebar from "../../components/dashboard/nav/sideBar";
import Link from "next/link";

export default function Dashboard({ children }) {
	return (
		<>
			<div className="h-screen w-screen overflow-x-hidden">
                                <AdminNav />
                                <AdminSidebar />
                                <div
                                        id="main-content"
                                        className="h-full bg-gray-50 relative overflow-y-auto lg:ml-64"
                                >
                                        <main>
                                                <div className="pt-6 px-4">
                                                        <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4">
                                                                <Balance />
                                                                <MainChart />
                                                        </div>
                                                </div>
                                        </main>
                                </div>
                        </div>
		</>
	);
}
