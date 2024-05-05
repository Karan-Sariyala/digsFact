import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { ShareAppDialogComponent } from '../share-app-dialog/share-app-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CasesComponent {
  value = '';
  displayedColumns = [
    'select',
    'caseId',
    'customer',
    'shareApp',
    'joinWith',
    'options',
  ];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
  constructor(public dialog: MatDialog, public router: Router) {}

  openDialog(details: any, flag: boolean) {
    this.dialog.open(ShareAppDialogComponent, {
      data: { details, flag },
    });
  }
  goToView(id: string) {
    this.router.navigate(['/view', id]);
  }
}

export interface Element {
  caseId: string;
  customer: string;
  shareApp: string;
  joinWith: string;
  options: string;
  createdAt: string;
  emailId: string;
  phone: string;
}

const ELEMENT_DATA: Element[] = [
  {
    caseId: 'daafafadffsd',
    createdAt: '04 Mar 2024',
    customer: 'John doe',
    emailId: 'johndoe&#64;gmail.com',
    phone: '+91-2465694732',
    shareApp: 'fsf',
    joinWith: 'H',
    options: '  ',
  },
  {
    caseId: 'nvfbvbsydjcnj',
    createdAt: '04 Mar 2024',
    customer: 'Katie',
    emailId: 'katie&#23;gmail.com',
    phone: '+91-2465694732',
    shareApp: 'fsf',
    joinWith: 'H',
    options: '  ',
  },
  {
    caseId: 'mdksajfducb',
    createdAt: '05 Mar 2024',
    customer: 'Lisa',
    emailId: 'lisa&#88;gmail.com',
    phone: '+91-2465694732',
    shareApp: 'fsf',
    joinWith: 'H',
    options: '  ',
  },
  {
    caseId: 'djdcndretavvs',
    createdAt: '19 Mar 2024',
    customer: 'Joseph',
    emailId: 'joseph&#55;gmail.com',
    phone: '+91-2465694732',
    shareApp: 'fsf',
    joinWith: 'H',
    options: '  ',
  },
  {
    caseId: 'hgysvdsbdsjnc',
    createdAt: '01 Mar 2024',
    customer: 'Marelyn',
    emailId: 'marelyn&#12;gmail.com',
    phone: '+91-2465694732',
    shareApp: 'fsf',
    joinWith: 'H',
    options: '  ',
  },
];
