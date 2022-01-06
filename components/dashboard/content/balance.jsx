export default function Balance() {
	return (
		<div className="flex flex-col gap-4 xl:col-span-2">
			<div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 h-fit">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
							€82,21
						</span>
						<h3 class="text-base font-normal text-gray-500">Balance</h3>
                                                
					</div>
                                        <div class="flex-shrink-0 ml-auto">
						<a
							href="#"
							class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
						>
							Deposit
						</a>
					</div>
				</div>
			</div>
			<div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
				<div class="mb-4 flex items-center justify-between">
					<div>
						<h3 class="text-xl font-bold text-gray-900 mb-2">
							Latest Transactions
						</h3>
						<span class="text-base font-normal text-gray-500">
							This is a list of latest transactions
						</span>
					</div>
					<div class="flex-shrink-0">
						<a
							href="#"
							class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
						>
							View all
						</a>
					</div>
				</div>

				<div class="flex flex-col mt-8">
					<div class="overflow-x-auto rounded-lg">
						<div class="align-middle inline-block min-w-full">
							<div class="shadow overflow-hidden sm:rounded-lg">
								<table class="min-w-full divide-y divide-gray-200">
									<thead class="bg-gray-50">
										<tr>
											<th
												scope="col"
												class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Transaction
											</th>
											<th
												scope="col"
												class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Date &amp; Time
											</th>
											<th
												scope="col"
												class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Amount
											</th>
										</tr>
									</thead>
									<tbody class="bg-white">
										<tr>
											<td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
												Payment from{" "}
												<span class="font-semibold">Bonnie Green</span>
											</td>
											<td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
												Apr 23 ,2021
											</td>
											<td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
												$2300
											</td>
										</tr>
										<tr class="bg-gray-50">
											<td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
												Payment refund to{" "}
												<span class="font-semibold">#00910</span>
											</td>
											<td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
												Apr 23 ,2021
											</td>
											<td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
												-$670
											</td>
										</tr>
										<tr>
											<td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
												Payment failed from{" "}
												<span class="font-semibold">#087651</span>
											</td>
											<td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
												Apr 18 ,2021
											</td>
											<td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
												$234
											</td>
										</tr>
										<tr class="bg-gray-50">
											<td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
												Payment from{" "}
												<span class="font-semibold">Lana Byrd</span>
											</td>
											<td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
												Apr 15 ,2021
											</td>
											<td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
												$5000
											</td>
										</tr>
										<tr>
											<td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
												Payment from{" "}
												<span class="font-semibold">Jese Leos</span>
											</td>
											<td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
												Apr 15 ,2021
											</td>
											<td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
												$2300
											</td>
										</tr>
										<tr class="bg-gray-50">
											<td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
												Payment from{" "}
												<span class="font-semibold">THEMESBERG LLC</span>
											</td>
											<td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
												Apr 11 ,2021
											</td>
											<td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
												$560
											</td>
										</tr>
										<tr>
											<td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
												Payment from{" "}
												<span class="font-semibold">Lana Lysle</span>
											</td>
											<td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
												Apr 6 ,2021
											</td>
											<td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
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
