"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ConfTicket() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-full max-w-md">
        {/* Animated Lanyard */}
        <motion.svg
          width="100%"
          height={isExpanded ? "100" : "50"}
          viewBox="0 0 300 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <motion.path
            d="M150 100 L150 0"
            stroke="#000000"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.circle
            cx="150"
            cy="0"
            r="8"
            fill="#000000"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />
        </motion.svg>

        {/* Ticket */}
        <motion.div
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Ticket Header */}
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Next.js Conf</h2>
            <span className="text-sm">2023</span>
          </div>

          {/* Ticket Content */}
          <div className="p-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <p className="mt-1 text-xl font-semibold">John Doe</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Ticket Type
              </label>
              <p className="mt-1 text-xl font-semibold">VIP Access</p>
            </div>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <p className="mt-1 text-xl font-semibold">October 25, 2023</p>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Venue
                  </label>
                  <p className="mt-1 text-xl font-semibold">
                    Moscone Center, San Francisco
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Expand/Collapse Button */}
          <button
            onClick={toggleExpand}
            className="w-full bg-gray-100 p-2 text-center text-gray-600 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
            aria-expanded={isExpanded}
            aria-controls="ticket-details"
          >
            {isExpanded ? (
              <>
                <span className="mr-2">Less Info</span>
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                <span className="mr-2">More Info</span>
                <ChevronDown size={20} />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
