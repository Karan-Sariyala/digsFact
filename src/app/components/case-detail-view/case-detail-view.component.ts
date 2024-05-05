import { Component, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NotesDialogComponent } from '../notes-dialog/notes-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-case-detail-view',
  templateUrl: './case-detail-view.component.html',
  styleUrl: './case-detail-view.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CaseDetailViewComponent {
  constructor(
    private location: Location,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  goBack() {
    this.location.back();
  }

  openDialog() {
    this.dialog.open(NotesDialogComponent);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  removePins() {
    console.log('Remove pins is clicked');
  }

  measure() {
    console.log('Measure is clicked');
  }

  magnify() {
    console.log('Magnify is clicked');
  }

  support() {
    console.log('Support is clicked');
  }

  faq() {
    console.log('Faq is clicked');
  }
}
