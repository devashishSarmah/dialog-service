import { Injectable } from '@angular/core';

import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

/* Dialog Component */
import { StatsDialogComponent } from './stats-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class StatsDialogService {
  // Default Dialog Config
  dialogConfig: MatDialogConfig = {
    panelClass: 'stats-dialog',
  };

  dialogRef?: MatDialogRef<StatsDialogComponent>;

  dialogState: unknown; // The dialog component can access the "Data that needs to be passed down to it" from here as well

  constructor(private dialog: MatDialog) {}

  /**
   *
   * @param @Optional dialogConfig Component wise dialog config.
   *  Components can pass down data in this config or they can assign the data to dialogState
   */
  open(dialogConfig?: MatDialogConfig): MatDialogRef<StatsDialogComponent> {
    this.dialogRef = this.dialog.open(StatsDialogComponent, {
      ...this.dialogConfig,
      ...dialogConfig,
    });

    this.dialogRef.afterClosed().subscribe((response: unknown) => {
      // Do something in the service level. ( All components )
      this.reset(); // Reset the dialogDataState
    });

    return this.dialogRef;
  }

  reset(): void {
    this.dialogState = undefined;
  }
}
