import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-share-app-dialog',
  templateUrl: './share-app-dialog.component.html',
  styleUrl: './share-app-dialog.component.scss',
})
export class ShareAppDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
