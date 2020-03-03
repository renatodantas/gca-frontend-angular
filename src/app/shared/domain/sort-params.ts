import { SortDirection } from '@angular/material/sort';

export interface SortParams {

  /**
   * Campo para ordenação
   */
  sort?: string;

  /**
   * Ordem ascendente ("asc") ou descendente ("desc")
   */
  order?: SortDirection;

  page?: number;

  size?: number;
}
