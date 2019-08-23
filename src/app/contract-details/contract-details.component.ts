import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  contractType: string;
  modalidade: string;
  contractNumber: number;
  biddingNumber: number;
}

/** Constants used to fill up our data base. */
const CONTRACTTYPE: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

const MODALIDADES: string[] = [
  'Aços', 'Pregão', 'Objetos', 'Mesas', 'Ônibus', 'Computadores', 'Informática', 'Automoveis', 'Saúde', 'Educação', 'Aços', 'Pregão'
];

const CONTRACTNUMBER: number[] = [
  123, 321, 456, 654, 789, 987, 744, 147, 852, 258, 963, 369, 951, 159, 753, 357, 913, 319, 791, 197
];

const BIDDINGNUMBER: number[] = [
  123, 321, 456, 654, 789, 987, 744, 147, 852, 258, 963, 369, 951, 159, 753, 357, 913, 319, 791, 197
];


@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'contractNumber', 'biddingNumber', 'modalidade', 'contractType', 'progress', 'name'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name,
    progress: Math.round(Math.random() * 100).toString(),
    contractType: CONTRACTTYPE[Math.round(Math.random() * (CONTRACTTYPE.length - 1))],
    modalidade: MODALIDADES[Math.round(Math.random() * (MODALIDADES.length - 1))],
    contractNumber: CONTRACTNUMBER[Math.round(Math.random() * (CONTRACTNUMBER.length - 1))],
    biddingNumber: BIDDINGNUMBER.length
  };
}
