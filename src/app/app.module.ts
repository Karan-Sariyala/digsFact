import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasesComponent } from './components/cases/cases.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ShareAppDialogComponent } from './components/share-app-dialog/share-app-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CaseDetailViewComponent } from './components/case-detail-view/case-detail-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NotesDialogComponent } from './components/notes-dialog/notes-dialog.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatDialogModule,
    CasesComponent,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
  ],
  declarations: [
    AppComponent,
    ShareAppDialogComponent,
    CaseDetailViewComponent,
    NotesDialogComponent,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
