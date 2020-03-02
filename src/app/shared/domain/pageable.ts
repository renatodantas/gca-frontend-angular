/**
 * Representação do objeto paginável do Spring.
 */
export interface Pageable<T> {

  /*
  // Spring Boot parameters
  content: T[];
  totalPages: number;
  last: boolean;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  empty: boolean;
  */

  /*
  // Quarkus parameters
  */
  count: number;
  page_number: number;
  page_size: number;
  pages: number;
  results: T[];
}
