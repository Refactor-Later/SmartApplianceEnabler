import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MAT_LEGACY_FORM_FIELD_DEFAULT_OPTIONS as MAT_FORM_FIELD_DEFAULT_OPTIONS, MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatLegacyOptionModule as MatOptionModule} from '@angular/material/legacy-core';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MessageboxComponent} from './messagebox/messagebox.component';
import {FlexModule} from '@angular/flex-layout';
import {TimepickerComponent} from './timepicker/timepicker.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HelpComponent} from './help/help.component';
import {FilenameInputComponent} from './filenameinput/filename-input.component';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import {SafeurlPipe} from '../shared/safe-url.pipe';


@NgModule({
  declarations: [
    HelpComponent,
    MessageboxComponent,
    SafeurlPipe,
    TimepickerComponent,
    FilenameInputComponent,
  ],
  imports: [
    CommonModule,
    FlexModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
  exports: [
    HelpComponent,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MessageboxComponent,
    SafeurlPipe,
    TimepickerComponent,
    FilenameInputComponent,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}},
  ]
})
export class MaterialModule { }
