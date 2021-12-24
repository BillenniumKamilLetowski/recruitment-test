interface PaginationResponse<T> {
  page: number,
  total_results: number,
  total_pages: number,
  results: T
}

export default PaginationResponse;