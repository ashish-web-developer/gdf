import React, { useEffect } from "react";
import Head from "next/head";
// npm i react-helmet
export default function Index() {
    useEffect(() => {
        const myBarChart2 = new Chart(document.getElementById("chartjs-2"), {
            type: "pie",
            data: { labels: ["Accepted", "Rejected", "Pending", "Approved"], datasets: [{ data: [60, 12, 12, 25], fill: false, backgroundColor: ["#db2777", "#ec4899", " #f9a8d4", " #fce7f3"] }] },
            options: {
                legend: {
                    position: false,
                },
            },
        });
    });
    return (
        <>
            <Head>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
                <script defer src="https://cdn.tuk.dev/dev/light-dark-switch.js"></script>
            </Head>
            <div className="bg-black flex items-center justify-center py-8 md:px-4">
                <div className="xl:w-1/3 flex flex-col 2xl:items-center">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-pink-700 sm:text-3xl underline sm:leading-none">
                        Total RSVP COUNT
                    </h2>
                    <div className="mx-auto flex flex-col items-center">
                        <div className="border-white border-2 mt-8">
                            <canvas id="chartjs-2" />
                        </div>
                        <div className="mt-8">
                            <div className="flex items-center justify-between md:justify-start">
                                <div className="mr-8">
                                    <p className="text-sm text-pink-600 font-semibold">Accepted</p>
                                    <p className="text-xl font-bold text-gray-700 dark:text-gray-400">73.6%</p>
                                </div>
                                <div className="pl-8 md:border-l border-gray-100 dark:border-gray-700">
                                    <p className="text-sm text-pink-600 font-semibold">Rejected</p>
                                    <p className="text-xl font-bold text-gray-700 dark:text-gray-400">16.4%</p>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-between md:justify-start">
                                <div className="mr-8">
                                    <p className="text-sm text-pink-600 font-semibold">Pending</p>
                                    <p className="text-xl font-bold text-gray-700 dark:text-gray-400">73.6%</p>
                                </div>
                                <div className="pl-10 md:border-l border-gray-100 dark:border-gray-700">
                                    <p className="text-sm text-pink-600 font-semibold">Rejected</p>
                                    <p className="text-xl font-bold text-gray-700 dark:text-gray-400">16.4%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

