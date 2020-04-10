import {Component, Inject, OnInit} from '@angular/core';
import {RendezVous} from '../rendez-vous';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

interface TypeRDV {
  value: string;
  viewValue: string;
}

/**
 * Dialog component
 */
@Component({
  selector: 'app-dialog-add-rendezvous',
  templateUrl: 'dialog-add-rendezvous.html',
})
export class DialogAddRendezVousComponent {

  nameCtrl: FormControl;
  mailCtrl: FormControl;
  typeCtrl: FormControl;
  dateCtrl: FormControl;
  addForm: FormGroup;

  types: TypeRDV[] = [
    {value: 'entretien-0', viewValue: 'Entretien'},
    {value: 'medecin-1', viewValue: 'Medecin'}
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogAddRendezVousComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RendezVous,
    private fb: FormBuilder) {
    this.nameCtrl = fb.control('', [Validators.required]);
    this.mailCtrl = fb.control('', [Validators.required]);
    this.typeCtrl = fb.control('', [Validators.required]);
    this.dateCtrl = fb.control('', [Validators.required]);
    this.addForm = fb.group({
      name: this.nameCtrl,
      mail: this.mailCtrl,
      type: this.typeCtrl,
      date: this.dateCtrl
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSelectionChangeType(viewValue: string) {
    this.data.type = viewValue;
  }
}

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  tabRDV = new MatTableDataSource<RendezVous>();

  displayedColumns: string[] = ['delete', 'name', 'mail', 'type', 'date'];
  private rdv: RendezVous;


  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.rdv = new RendezVous();
    const dialogRef = this.dialog.open(DialogAddRendezVousComponent, {
      width: '250px',
      data: {rdv: this.rdv}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.rdv = result;
      console.log(this.rdv);
      if (this.rdv.name !== '' && this.rdv.mail !== '' && this.rdv.type !== '' &&
        this.rdv.name !== null && this.rdv.mail !== null && this.rdv.type !== null && this.rdv.date !== null) {
        this.tabRDV.data.push(this.rdv);
        this.tabRDV.filter = '';
      }
    });
  }


  deleteRDV(index: number) {
    this.tabRDV.data.splice(index, 1);
    this.tabRDV.filter = '';
    console.log(this.tabRDV.data);
  }

  updateRDV() {

  }

}
