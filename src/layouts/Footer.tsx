import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
               
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                    <Link href={"/"}> <Image src="/logo.gif" alt="logo" width={250} height={250} /></Link>
                        
                    </div>
                    
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-white-900 font-medium mb-7">PAGEDONE</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-white-600 hover:text-purple-900">Home</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white-600 hover:text-purple-900">About</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white-600 hover:text-purple-900">Documents</a></li>
                            <li><a href="javascript:;" className="text-white-600 hover:text-purple-900">CS Fundamentals</a></li>
                        </ul>
                    </div>
                    {/* End Col */}
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-white-900 font-medium mb-7">PRODUCT</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-white-600 hover:text-purple-900">Notes</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white-600 hover:text-purple-900">Papers</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white-600 hover:text-purple-900">Solved Papers</a></li>
                            <li><a href="javascript:;" className="text-white-600 hover:text-purple-900">Components</a></li>
                        </ul>
                    </div>
                    {/* End Col */}
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-white-900 font-medium mb-7">RESOURCES</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-white-600 hover:text-purple-900">Development</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white-600 hover:text-purple-900">CS Fundamentals</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white-600 hover:text-purple-900">DSA</a></li>
                            <li><a href="javascript:;" className="text-white-600 hover:text-purple-900">Roadmap</a></li>
                        </ul>
                    </div>
                    {/* End Col */}
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-white-900 font-medium mb-7">BLOGS</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-white-600 hover:text-purple-900">News</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white-600 hover:text-purple-900">Tips & Tricks</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white-600 hover:text-purple-900">Jobs Updates </a></li>
                            <li><a href="javascript:;" className="text-white-600 hover:text-purple-900">Events</a></li>
                        </ul>
                    </div>
                </div>
                {/* End Grid */}
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-gray-500">©<a href="">MATERIAL MATE     </a> 2025, All rights reserved.</span>
                        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
                            <a href="javascript:;" className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g id="Social Media">
                                        <path id="Vector" d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382  10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white" />
                                    </g>
                                </svg>
                            </a>
                            <a href="javascript:;" className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                                <svg className="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2  52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 14.0962 5.81402 14.062 5.07358C14.0284 4.3343 13.9089 3.82941 13.7347 3.38797C13.5543 2.93108 13.3141 2.54369 12.9219 2.1578C12.5298 1.77191 12.137 1.53408 11.6737 1.3568C11.2258 1.18513 10.7135 1.06791 9.96332 1.03424C9.212 1.00057 8.9718 1.00843 7.0582 1.00843C5.1446 1.00843 4.90479 1.00057 4.15307 1.03424Z" fill="white"/>
                                </svg>
                            </a>
                            <a href="javascript:;" className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g id="Social Media">
                                        <path id="Vector" d="M10 0C4.478 0 0 4.478 0 10c0 4.418 3.1 8.164 7.188 9.387.525.097.717-.227.717-.5 0-.25-.009-.913-.014-1.794-2.925.634-3.548-1.41-3.548-1.41-.478-1.213-1.165-1.537-1.165-1.537-.953-.651.073-.637.073-.637 1.054.074 1.607 1.083 1.607 1.083.936 1.604 2.448 1.141 3.043.873.094-.676.366-1.141.666-1.4-2.222-.252-4.555-1.11-4.555-4.943 0-1.092.39-1.988 1.029-2.688-.103-.252-.446-1.271.098-2.646 0 0 .84-.27 2.75 1.027A9.563 9.563 0 0110 3.5c.84.004 1.688.113 2.475.33 1.91-1.297 2.75-1.027 2.75-1.027.544 1.375.201 2.394.098 2.646.64.7 1.029 1.596 1.029 2.688 0 3.84-2.337 4.688-4.56 4.943.375.323.707.96.707 1.935 0 1.396-.013 2.52-.013 2.857 0 .273.19.6.72.5C16.9 18.164 20 14.418 20 10c0-5.522-4.478-10-10-10z" fill="white"/>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </footer>
       
        
    );
};

export default Footer; 