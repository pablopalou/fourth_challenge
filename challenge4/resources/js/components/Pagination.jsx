import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import useGetFlights from '../hooks/useGetFlights';
import {updateFlights} from '../hooks/useGetFlights';
import React, { useEffect }  from 'react';

export default function Example({data, setData}) {
    // const [variableToRenderPage, setVariableToRenderPage] = React.useState(false);
    // const [pageData, setPageData] = React.useState(data);
    // console.log(data);
    
    const [page, setPage] = React.useState(data!=undefined && data!={} ? data.current_page : 1);
    // console.log(page);
    // console.log("creo yo q va antes del error");


    const getFlightsFromPage = (event, moveCurrentPage) => {
        event.preventDefault();
        if (page == undefined){
            setPage(1); 
        }
        console.log("page", page);
        if (moveCurrentPage == "next"){
            setPage(page + 1);
        } else if (moveCurrentPage == "prev"){
            setPage(page - 1);
        }
        const route = `http://127.0.0.1:8000/getFlights?page=${page}` ;
        updateFlights(route);
    }

    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{data.from}</span> to{" "}
                        <span className="font-medium">{data.to}</span> of{" "}
                        <span className="font-medium">{data.total}</span> results
                    </p>
                </div>
                <div>
                    <nav
                        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                        aria-label="Pagination"
                    >
                        {data.current_page != 1 &&
                            <button
                                onClick={() => getFlightsFromPage(event, "prev")}
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        }
                        
                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
{/*                         
                        
                        <a
                            // onClick={getFlightsFromPage(data.currentPage)}
                            aria-current="page"
                            className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            1
                        </a>
                        <a
                            // onClick={getFlightsFromPage(data.currentPage)}
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            2
                        </a>
                        <a
                            // onClick={getFlightsFromPage(data.currentPage)}
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                        >
                            3
                        </a>
                        <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                            ...
                        </span>
                        <a
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                        >
                            8
                        </a>
                        <a
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            9
                        </a>
                        <a
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        >
                            10
                        </a> */}
                        {data.current_page != data.last_page && 
                            <button
                                onClick={() => getFlightsFromPage(event,  "next")}
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </button>
                        }
                    </nav>
                </div>
            </div>
        </div>
    );
}
