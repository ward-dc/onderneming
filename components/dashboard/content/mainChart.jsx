import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function MainChart() {
	const options = {
		colors: ["#651FFF"],
		chart: {
			id: "basic-bar",
			toolbar: {
				show: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
		},
		fill: {
			type: "gradient",
			colors: ["#651FFF"],
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.9,
				stops: [10, 90, 100],
			},
		},
	};
	const series = [
		{
			name: "Visitors",
			data: [30, 40, 45, 50, 49, 60, 70, 91],
		},
	];

	return (
		<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  xl:col-span-2">
			<div className="flex items-center justify-between mb-4">
				<div className="flex-shrink-0">
					<span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
						4.123
					</span>
					<h3 className="text-base font-normal text-gray-500">
						Bezoekers afgelopen 7 dagen
					</h3>
				</div>
				<div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
					12.5%
					<div className="h-5 w-5">
						<FontAwesomeIcon icon={faArrowUp} className="ml-1" />
					</div>
				</div>
			</div>
			<Chart options={options} series={series} type="area" />
		</div>
	);
}
