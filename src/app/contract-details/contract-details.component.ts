import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContractService } from '../contract.service';
import { Contract, Page } from '../contract.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {


  constructor(private service: ContractService) {
    this.getAllLic();
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public displayedColumns = ['hashtag', 'id', 'numContrato', 'numLicitacao', 'modalidade', 'tipoContrato', 'objetoContrato', 'favorecido'];

  public dataSource = new MatTableDataSource<Contract>();

  contracts: Contract[];


  ngOnInit() {

    // this.service.list().subscribe(dados => this.contracts = dados);
  }

  public getAllLic = () => {
    this.service.list()
      .subscribe(res => {
        this.dataSource.data = res as Contract[];
        this.dataSource.paginator = this.paginator;

      });
  }




}
