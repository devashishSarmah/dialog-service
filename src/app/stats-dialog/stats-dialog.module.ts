import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { StatsDialogComponent } from './stats-dialog.component';

@NgModule({
  declarations: [StatsDialogComponent],
  imports: [CommonModule, MatDialogModule],
})
export class StatsDialogModule {}
