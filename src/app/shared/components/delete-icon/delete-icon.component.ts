import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-icon',
  template: `
    <button class="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded" title="Excluir">
      <i class="fa fa-trash"></i>
    </button>
  `,
})
export class DeleteIconComponent { }
