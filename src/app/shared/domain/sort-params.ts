import { SortDirection, MatSort } from '@angular/material/sort';
import { HttpParams } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';

interface DefaultSort {
  sort?: string;
  order?: SortDirection;
  page?: number;
  size?: number;
}

interface MaterialSort {
  sort: MatSort;
  paginator: MatPaginator;
}

/**
 * Representação dos parâmetros de paginação e ordenação das APIs.
 */
export class SortParams {

  private static readonly DEFAULT_SORT_ORDER = 'asc';
  private static readonly DEFAULT_PAGE_INDEX = 0;
  private static readonly DEFAULT_PAGE_SIZE = 10;

  private sort: string;
  private order: SortDirection;
  private page: number;
  private size: number;

  constructor(args: DefaultSort | MaterialSort) {
    if (this.isDefaultSort(args)) {
      this.sort = args.sort;
      this.order = args.order;
      this.page = args.page;
      this.size = this.size;
    } else {
      this.sort = args.sort.active;
      this.order = args.sort.direction;
      this.page = args.paginator.pageIndex;
      this.size = args.paginator.pageSize;
    }
  }

  private isDefaultSort(obj: any): obj is DefaultSort {
    return 'order' in obj;
  }

  getParams(): HttpParams {
    return new HttpParams()
      .set('sort', this.sort || '')
      .set('order', this.order || SortParams.DEFAULT_SORT_ORDER)
      .set('page', `${this.page || SortParams.DEFAULT_PAGE_INDEX}`)
      .set('size', `${this.size || SortParams.DEFAULT_PAGE_SIZE}`);
  }
}
