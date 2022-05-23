import Link from "next/link";

export default function Balance() {
	return (
		<div className="flex flex-col gap-4 xl:col-span-2">
			<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 h-fit">
				<div className="flex items-center">
					<div className="flex-shrink-0">
						<span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
							€82,21
						</span>
						<h3 className="text-base font-normal text-gray-500">Balance</h3>
					</div>
					<div className="flex-shrink-0 ml-auto">
						<Link href="#">
							<span className="text-sm font-medium text-deep-purple-accent-400 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
								Deposit
							</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
				<div className="mb-4 flex items-center justify-between">
					<div>
						<h3 className="text-xl font-bold text-gray-900 mb-2">
							Latest Transactions
						</h3>
						<span className="text-base font-normal text-gray-500">
							This is a list of latest transactions
						</span>
					</div>
					<div className="flex-shrink-0">
						<Link href="#">
							<span className="text-sm font-medium text-deep-purple-accent-400 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
								View all
							</span>
						</Link>
					</div>
				</div>

				<div className="flex flex-col mt-8">
					<div className="overflow-x-auto rounded-lg">
						<div className="align-middle inline-block min-w-full">
							<div className="shadow overflow-hidden sm:rounded-lg">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Transaction
											</th>
											<th
												scope="col"
												className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Date &amp; Time
											</th>
											<th
												scope="col"
												className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Amount
											</th>
										</tr>
									</thead>
									<tbody className="bg-white">
										<tr>
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
												Payment from{" "}
												<span className="font-semibold">Bonnie Green</span>
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
												Apr 23 ,2021
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
												$2300
											</td>
										</tr>
										<tr className="bg-gray-50">
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
												Payment refund to{" "}
												<span className="font-semibold">#00910</span>
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
												Apr 23 ,2021
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
												-$670
											</td>
										</tr>
										<tr>
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
												Payment failed from{" "}
												<span className="font-semibold">#087651</span>
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
												Apr 18 ,2021
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
												$234
											</td>
										</tr>
										<tr className="bg-gray-50">
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
												Payment from{" "}
												<span className="font-semibold">Lana Byrd</span>
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
												Apr 15 ,2021
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
												$5000
											</td>
										</tr>
										<tr>
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
												Payment from{" "}
												<span className="font-semibold">Jese Leos</span>
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
												Apr 15 ,2021
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
												$2300
											</td>
										</tr>
										<tr className="bg-gray-50">
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
												Payment from{" "}
												<span className="font-semibold">THEMESBERG LLC</span>
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
												Apr 11 ,2021
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
												$560
											</td>
										</tr>
										<tr>
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
												Payment from{" "}
												<span className="font-semibold">Lana Lysle</span>
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
												Apr 6 ,2021
											</td>
											<td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
												$1437
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
