"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServicesPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  totalServices: number
  currentRange: string
}

export default function ServicesPagination({
  currentPage,
  totalPages,
  onPageChange,
  totalServices,
  currentRange,
}: ServicesPaginationProps) {
  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...")
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages)
    } else {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  if (totalPages <= 1) return null

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Services Info */}
      <div className="text-center">
        <p className="text-slate-400 text-sm">
          Showing <span className="text-blue-400 font-medium">{currentRange}</span> of{" "}
          <span className="text-blue-400 font-medium">{totalServices}</span> services
        </p>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center space-x-2">
        {/* Previous Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-10 w-10 p-0 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          <ChevronLeft className="h-4 w-4 text-slate-300" />
        </Button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-1">
          {getVisiblePages().map((page, index) => {
            if (page === "...") {
              return (
                <span key={`dots-${index}`} className="px-3 py-2 text-slate-500">
                  ...
                </span>
              )
            }

            const pageNumber = page as number
            const isActive = pageNumber === currentPage

            return (
              <Button
                key={pageNumber}
                variant="ghost"
                size="sm"
                onClick={() => onPageChange(pageNumber)}
                className={`h-10 w-10 p-0 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 border-blue-500/50"
                    : "bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white border border-slate-700/50 hover:border-slate-600/50"
                }`}
              >
                {pageNumber}
              </Button>
            )
          })}
        </div>

        {/* Next Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="h-10 w-10 p-0 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          <ChevronRight className="h-4 w-4 text-slate-300" />
        </Button>
      </div>

      {/* Mobile Pagination (Simplified) */}
      <div className="flex md:hidden items-center justify-between w-full max-w-xs">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="text-sm">Previous</span>
        </Button>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-slate-400">
            {currentPage} of {totalPages}
          </span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          <span className="text-sm">Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Progress Indicator */}
      <div className="w-full max-w-md">
        <div className="flex justify-between text-xs text-slate-500 mb-2">
          <span>Page {currentPage}</span>
          <span>{totalPages} pages</span>
        </div>
        <div className="w-full bg-slate-800/50 rounded-full h-1.5 border border-slate-700/50">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
