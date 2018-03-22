import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid";
import {RegComponentComponent} from "../reg-component/reg-component.component";

@Component({
    selector: 'app-my-ag-grid-component',
    templateUrl: './my-ag-grid-component.component.html'
})
export class MyAgGridComponentComponent {
    private gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id",
                width: 100
            },
            {
                headerName: "Value",
                field: "value",
                cellRendererFramework: RegComponentComponent,
                width: 100
            },

        ];
        this.gridOptions.rowData = [
            {id: 5, value: 10},
            {id: 10, value: 15},
            {id: 15, value: 20}
        ]
    }
}
