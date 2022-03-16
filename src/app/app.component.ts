import { Component } from '@angular/core';

import { StatsDialogService } from './stats-dialog/stats-dialog.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private statsDialogService: StatsDialogService) {}

  onClickDialogOpen(): void {
    this.statsDialogService.dialogState = { score: 45, label: 'Score' }; //Sending out data to the dialog through service member
    const dialogRef = this.statsDialogService.open({
      data: { score: 45, label: 'Score' },
    });

    dialogRef.afterClosed().subscribe((response: any) => {
      // Do something at component level
    });
  }
}
