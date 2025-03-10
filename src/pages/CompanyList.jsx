import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  TrendingUp,
  AlertTriangle,
  List,
  ChevronDown,
  Globe,
  Building,
  DollarSign,
  BarChart2,
  Activity,
  Tag,
  Info,
  ShoppingBag,
} from "lucide-react";

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExchange, setSelectedExchange] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Google Sheets API endpoint using sheet ID and tab ID
        const sheetId = "1rLouT8gPlvgB9hAZKMe6q651aexSxjBdVyAS6Lsjk8Q";
        const tabId = "1404375348";
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&gid=${tabId}`;

        const response = await fetch(url);
        const text = await response.text();

        // Parse the JSON-like response from Google Sheets
        const jsonData = JSON.parse(text.substring(47).slice(0, -2));

        // Extract column headers and company data
        const headers = jsonData.table.cols.map((col) => col.label);
        const rows = jsonData.table.rows.map((row) => {
          const company = {};
          row.c.forEach((cell, i) => {
            if (headers[i]) {
              company[headers[i]] = cell ? cell.v : "";
            }
          });
          return company;
        });

        setCompanies(rows);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
        console.log("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  // Get unique exchanges and sectors for filters
  const exchanges = [
    ...new Set(companies.map((company) => company["Exchange"] || "")),
  ].filter(Boolean);
  const sectors = [
    ...new Set(companies.map((company) => company["Sector"] || "")),
  ].filter(Boolean);

  // Filter companies based on search term and filters
  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      company["Company Name"]
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      company["Industry"]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company["Headquarters"]?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesExchange =
      selectedExchange === "" || company["Exchange"] === selectedExchange;
    const matchesSector =
      selectedSector === "" || company["Sector"] === selectedSector;

    return matchesSearch && matchesExchange && matchesSector;
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen  bg-white/80">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-2 left-2 w-20 h-20 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-4 left-4 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="text-center p-10 bg-white/80">
        <div className="inline-flex bg-red-900/20 p-6 rounded-xl border border-red-700">
          <p className="text-red-500 text-xl font-mono">{error}</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900/80 text-white">
      {" "}
      {/* Header */}
      <nav className="py-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg transform rotate-45"></div>
          <h1 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              AlgoX
            </span>
            <span className="text-gray-400">.ai</span>
          </h1>
        </div>
      </nav>
      {/* Hero Section with Gradient */}
      <div className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1000/1000')] opacity-5 bg-fixed"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-[150px] opacity-20"></div>
        <div className="absolute top-1/3 -translate-y-1/2 right-1/4 -translate-x-1/2 w-64 h-64 bg-blue-500 rounded-full filter blur-[150px] opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="pt-24 pb-12">
              <div className="container mx-auto px-6">
                <div
                  className={`transform transition-all duration-1000 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
                    Revolutionizing Algorithms
                    <br />
                    With AI Precision
                  </h1>
                  <p className="text-xl text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                    Unlock the power of AI-driven optimization and cutting-edge
                    algorithmic solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 backdrop-blur-sm">
                <p className="text-gray-400 mb-2 text-sm">Average Growth</p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  +127%
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 backdrop-blur-sm">
                <p className="text-gray-400 mb-2 text-sm">Companies Tracked</p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  500+
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 backdrop-blur-sm">
                <p className="text-gray-400 mb-2 text-sm">Success Rate</p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  84%
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 backdrop-blur-sm">
                <p className="text-gray-400 mb-2 text-sm">Daily Updates</p>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  24/7
                </p>
              </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-1 rounded-lg mb-8 shadow-lg relative z-20 backdrop-blur-md">
              <div className="bg-gray-900 rounded-md p-4">
                <div className="flex flex-col space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-green-500" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search companies by name, industry, or location..."
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white transition-all"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-gray-500 text-sm">
                      {filteredCompanies.length} companies found
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Company Cards */}
      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <List className="h-5 w-5 mr-2 text-green-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Company Directory
            </span>
          </h2>

          <div className="flex space-x-2">
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded text-gray-400 hover:text-white transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded text-gray-400 hover:text-white transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {filteredCompanies.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-16 bg-white-900/50 rounded-lg border border-gray-800">
            <div className="p-4 bg-gray-800 rounded-full mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-400 text-lg mb-2">
              No companies match your search criteria
            </p>
            <p className="text-gray-500 text-sm">
              Try adjusting your filters or search term
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedExchange("");
                setSelectedSector("");
              }}
              className="mt-4 bg-clip-text text-xl text-transparent bg-gradient-to-r from-purple-600 to-pink-600  flex items-center font-bold cursor-pointer"
            >
              Clear all filters
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company, index) => (
              <Link
                to={`/${encodeURIComponent(company["Company Name"] || "")}`}
                key={index}
                className="block group"
              >
                <div className="bg-gradient-to-br from-white-800 to-white-900 rounded-xl overflow-hidden border border-pink-700 group-hover:border-pink-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/10 relative">
                  {/* Growth indicator */}
                  <div className="absolute -top-2 -right-2  bg-gradient-to-r from-purple-600 to-pink-600 text-black text-xs font-bold px-3 py-1 rounded-full transform rotate-12 group-hover:rotate-6 transition-transform">
                    +{Math.floor(Math.random() * 50) + 10}%
                  </div>

                  <div className="p-6 border-b border-gray-700">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-bold group-hover:bg-clip-text text-white truncate group-hover:bg-gradient-to-r from-purple-600 to-pink-600 transition-colors">
                          {company["Company Name"]}
                        </h2>
                        <div className="flex items-center mt-1 gap-2">
                          <div className="bg-gray-700 text-xs py-0.5 px-2 rounded ttext-white flex items-center">
                            <Tag className="h-3 w-3 mr-1" />
                            {company["Industry"] || "N/A"}
                          </div>
                          {company["Exchange"] && (
                            <div className="bg-gray-700 text-xs py-0.5 px-2 rounded text-gray-300">
                              {company["Exchange"]}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-white mr-3">
                        <Building className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Headquarters</p>
                        <p className="text-sm text-gray-700">
                          {company["Headquarters"] || "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-white mr-3">
                        <DollarSign className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Valuation</p>
                        <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                          {company["Valuation"]
                            ? `${company["Valuation"]}`
                            : "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-white mr-3">
                        <Globe className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Website</p>
                        <a
                          href={company["Website URL"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {company["Website URL"]?.replace(
                            /^https?:\/\/(www\.)?/,
                            ""
                          ) || "N/A"}
                        </a>
                      </div>
                    </div>

                    {/* AI Score */}
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mr-3">
                            <BarChart2 className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">
                              Growth Score
                            </p>
                            <div className="h-2 w-32 bg-gray-200 rounded-full mt-1 overflow-hidden">
                              <div
                                className="h-full  bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                                style={{
                                  width: `${
                                    Math.floor(Math.random() * 70) + 30
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <button className="bg-gray-700 p-1.5 rounded-lg hover:bg-gray-600 transition-colors group-hover:bg-gradient-to-r from-purple-600 to-pink-600 ">
                          <Info className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyList;
