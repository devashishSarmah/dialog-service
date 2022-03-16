import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StatsDialogService } from './stats-dialog.service';

@Component({
  selector: 'app-stats-dialog',
  templateUrl: './stats-dialog.component.html',
  styleUrls: ['./stats-dialog.component.scss'],
})
export class StatsDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: unknown,
    private statsDialogService: StatsDialogService
  ) {
    const dialogState = this.data || this.statsDialogService.dialogState;
  }

  ngOnInit(): void {}
}
