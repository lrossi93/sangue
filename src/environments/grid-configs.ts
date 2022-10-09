import { ButtonDeleteForecastComponent } from "src/app/button-delete-forecast/button-delete-forecast.component";
import { ButtonDeleteOrderComponent } from "src/app/button-delete-order/button-delete-order.component";
import { ButtonEditOrderComponent } from "src/app/button-edit-order/button-edit-order.component";
import { CellCheckboxComponent } from "src/app/cell-checkbox/cell-checkbox.component";
import { DropdownProductsForecastComponent } from "src/app/dropdown-products-forecast/dropdown-products-forecast.component";
import { DropdownUsersForecastComponent } from "src/app/dropdown-users-forecast/dropdown-users-forecast.component";

/**
 * 
 * The following configs need to be used in the 
 * [columnDefs] attribute of the <ag-grid-angular> tag
 * 
 */

//AgGrid config for ForecastComponent and userlevel 210
export const gridConfigForecast210 = [
    { 
      headerName: 'ID', 
      field: 'id'
    },
    { 
      headerName: 'Year', 
      field: 'anno', 
      editable: true
    },
    /*
    { 
      headerName: 'User ID', 
      field: 'username', //questo è l'id di un utente
      editable: false
    },
    */
   //#TODO: questo qui sotto è necessario?
    {
      headerName: 'Utente',
      field: 'username', //prende l'id dell'utente (forecast.username) e ritorna il nome utente (user.username) 
      cellRenderer: DropdownUsersForecastComponent,
      editable: false
    },
    /*
    { 
      headerName: 'Product ID', 
      field: 'id_prd', 
      editable: true
    },
    */
    { 
      headerName: 'Product name', 
      field: 'id_prd', 
      cellRenderer: DropdownProductsForecastComponent
    },
    { 
      headerName: 'Quantity', 
      field: 'qta', 
      editable: true
    },
    { 
      headerName: 'Notes', 
      field: 'note', 
      editable: true
    },
    { 
      headerName: 'Quantità approvata', 
      field: 'qta_approvata', 
      editable: false
    },
    { 
      headerName: 'Costo unitario (€)', 
      field: 'costo_unitario', 
      editable: false
    },
    { 
      headerName: 'Action', 
      cellRenderer: ButtonDeleteForecastComponent,
      autoHeight: true
    }
];

//AgGrid config for ForecastComponent and userlevel 220
export const gridConfigForecast220 = [
    { 
      headerName: 'ID', 
      field: 'id'
    },
    { 
      headerName: 'Year', 
      field: 'anno', 
      editable: false
    },
    /*
    { 
      headerName: 'User ID', 
      field: 'username', 
      editable: false
    },
    */
    { 
      headerName: 'Utente', 
      field: 'username',
      cellRenderer: DropdownUsersForecastComponent,
      editable: false
    },
    { 
      headerName: 'Product name', 
      field: 'id_prd', 
      cellRenderer: DropdownProductsForecastComponent,
      editable: false
    },
    { 
      headerName: 'Quantity', 
      field: 'qta', 
      editable: false
    },
    { 
      headerName: 'Notes', 
      field: 'note', 
      editable: false
    },
    { 
      headerName: 'Quantità approvata', 
      field: 'qta_approvata', 
      editable: true
    },
    { 
      headerName: 'Costo unitario (€)', 
      field: 'costo_unitario', 
      editable: true
    },
    { 
      headerName: 'Action', 
      cellRenderer: ButtonDeleteForecastComponent,
      autoHeight: true
    }
];

//AgGrid config for OrdersComponent
export const gridConfigOrders = [
    { 
        headerName: 'ID', 
        field: 'id', 
        editable: false
    },
    { 
        headerName: 'Utente', 
        field: 'username', 
        editable: false
    },
    { 
        headerName: 'Anno', 
        field: 'anno', 
        editable: true
    },
    { 
        headerName: 'Data ordine', 
        field: 'd_ordine', 
        editable: true
    },
    { 
        headerName: 'Numero ordine', 
        field: 'n_ordine', 
        editable: true
    },
    { 
        headerName: 'Urgente', 
        field: 'b_urgente', 
        editable: false,
        cellRenderer: CellCheckboxComponent
    },
    { 
        headerName: 'Extra', 
        field: 'b_extra', 
        editable: false,
        cellRenderer: CellCheckboxComponent
    },
    { 
        headerName: 'Validato', 
        field: 'b_validato', 
        editable: false,
        cellRenderer: CellCheckboxComponent
    },
    { 
        headerName: 'Data validazione', 
        field: 'd_validato', 
        editable: true //cellRenderer con bottone per la scelta della data
    },
    { 
        headerName: 'Note', 
        field: 'note', 
        editable: true,
    },
    { 
        headerName: 'Modifica ordine', 
        cellRenderer: ButtonEditOrderComponent,
        autoHeight: true
    },/*
    { 
        headerName: 'Elimina ordine', 
        cellRenderer: ButtonDeleteOrderComponent,
        autoHeight: true
    }*/
];

/**
 * 
 * The following configs need to be used in the 
 * [defaultColDef] attribute of the <ag-grid-angular> tag
 * 
 */

export const defaultColDef = {
    sortable: true,
    filter: true
}