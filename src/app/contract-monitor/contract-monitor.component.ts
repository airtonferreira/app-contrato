import { Component, OnInit } from '@angular/core';
import { Contract } from '../contract.model';

@Component({
  selector: 'app-contract-monitor',
  templateUrl: './contract-monitor.component.html',
  styleUrls: ['./contract-monitor.component.css']
})
export class ContractMonitorComponent implements OnInit {

  constructor() { }

  contracts: Contract[];

  ngOnInit() {
    this.vencidos();
  }

  vencidos() {
    // const count = 0;
    // const today = new Date().toISOString().split('/');

    // // const myDate = this.contracts[].dtFim;

    // const dia = new Date().getDay();
    // const mes = new Date().getMonth();
    // const ano = new Date().getFullYear();

    // const myDay = new Date(myDate.getDay());

    // console.log(myDay);



  }

}
