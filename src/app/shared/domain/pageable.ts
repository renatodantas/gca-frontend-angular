/**
 * Representação do objeto paginável do backend.
 */
export interface Pageable<T> {

  count: number;
  pageNumber: number;
  pageSize: number;
  pages: number;
  results: T[];
}
