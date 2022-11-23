import { ButtonDeleteForecastComponent } from "src/app/button-delete-forecast/button-delete-forecast.component";
import { ButtonDeleteOrderComponent } from "src/app/button-delete-order/button-delete-order.component";
import { ButtonDeleteProductComponent } from "src/app/button-delete-product/button-delete-product.component";
import { ButtonEditOrderComponent } from "src/app/button-edit-order/button-edit-order.component";
import { CellCheckboxComponent } from "src/app/cell-checkbox/cell-checkbox.component";
import { DropdownProductsForecastComponent } from "src/app/dropdown-products-forecast/dropdown-products-forecast.component";
import { DropdownUsersForecastComponent } from "src/app/dropdown-users-forecast/dropdown-users-forecast.component";
import { DropdownUsersOrdersComponent } from "src/app/dropdown-users-orders/dropdown-users-orders.component";
import { OrdersExtraCheckboxComponent } from "src/app/orders-extra-checkbox/orders-extra-checkbox.component";
import { OrdersUrgentCheckboxComponent } from "src/app/orders-urgent-checkbox/orders-urgent-checkbox.component";
import { OrdersValidatedCheckboxComponent } from "src/app/orders-validated-checkbox/orders-validated-checkbox.component";
import { PharmaRegistryActiveCheckboxComponent } from "src/app/pharma-registry-active-checkbox/pharma-registry-active-checkbox.component";
import { PharmaRegistryExtraCheckboxComponent } from "src/app/pharma-registry-extra-checkbox/pharma-registry-extra-checkbox.component";
import { environment } from "./environment";

/**
 * 
 * The following configs need to be used in the 
 * [columnDefs] attribute of the <ag-grid-angular> tag
 * 
 */

export const pharmaRegistryGridHeaders = {
  it: {
    ID: 'ID',
    Code: 'Codice',
    Description: 'Descrizione',
    Units: 'Unità',
    Packaging: 'Confezionamento',
    MultiplePackaging: 'Multiplo confezionamento',
    MultiplePacking: 'Multiplo imballo',
    Active: 'Attivo',
    Extra: 'Extra',
    MinimumOrder: 'Ordine minimo',
    ValidFrom: 'Valido da',
    ValidThrough: 'Valido fino a',
    Action: 'Azione'
  },
  en: {
    ID: 'ID',
    Code: 'Code',
    Description: 'Description',
    Units: 'Units',
    Packaging: 'Packaging',
    MultiplePackaging: 'Multiple packaging',
    MultiplePacking: 'Multiple packing',
    Active: 'Active',
    Extra: 'Extra',
    MinimumOrder: 'Minimum order',
    ValidFrom: 'Valid from',
    ValidThrough: 'Valido through',
    Action: 'Action'
  }
}

//AgGrid config for PharmaRegistryComponent and userlevel 200
export const pharmaRegistryGridConfig = [
  { 
    headerName: pharmaRegistryGridHeaders.it.ID, 
    field: 'id',
    editable: false
  },
  { 
    headerName: pharmaRegistryGridHeaders.it.Code, 
    field: 'cod', 
    editable: true
  },
  { 
    headerName: pharmaRegistryGridHeaders.it.Description, 
    field: 'des', 
    editable: true
  },
  { 
    headerName: pharmaRegistryGridHeaders.it.Units, 
    field: 'unita', 
    editable: true
  },
  { 
    headerName: pharmaRegistryGridHeaders.it.Packaging, 
    field: 'confezionamento', 
    editable: true
  },
  { 
    headerName: pharmaRegistryGridHeaders.it.MultiplePackaging, 
    field: 'multiplo_confezionamento', 
    editable: true
  },
  { 
    headerName: pharmaRegistryGridHeaders.it.MultiplePacking, 
    field: 'multiplo_imballo', 
    editable: true
  },
  { 
    headerName: pharmaRegistryGridHeaders.it.Active, 
    field: 'attivo', 
    editable: false,
    cellRenderer: PharmaRegistryActiveCheckboxComponent
  },
  { 
    headerName: pharmaRegistryGridHeaders.it.Extra, 
    field: 'extra', 
    editable: false,
    cellRenderer: PharmaRegistryExtraCheckboxComponent
  },
  { 
    headerName: pharmaRegistryGridHeaders.it.MinimumOrder, 
    field: 'min_ord', 
    editable: true
  },
  { 
    headerName: pharmaRegistryGridHeaders.it.ValidFrom, 
    field: 'valido_da', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: pharmaRegistryGridHeaders.it.ValidThrough, 
    field: 'valido_a', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {   
      return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: pharmaRegistryGridHeaders.it.Action, 
    cellRenderer: ButtonDeleteProductComponent,
    autoHeight: true
  }
];

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

//AgGrid config for OrdersComponent and userlevel 210
export const gridConfigOrders210 = [
  { 
      headerName: 'ID', 
      field: 'id', 
      editable: false
  },
  { 
      headerName: 'Utente', 
      field: 'username', 
      cellRenderer: DropdownUsersOrdersComponent,
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
      editable: false,
      cellRenderer: (params: { value: string | number | Date; }) => {
        return new Date(params.value).toLocaleDateString('it-IT');
      }
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
      cellRenderer: OrdersUrgentCheckboxComponent
  },
  { 
      headerName: 'Ordine extra', 
      field: 'b_extra', 
      editable: false,
      cellRenderer: OrdersExtraCheckboxComponent
  },
  { 
      headerName: 'Validato', 
      field: 'b_validato', 
      editable: false,
      cellRenderer: OrdersValidatedCheckboxComponent
  },
  { 
      headerName: 'Data validazione', 
      field: 'd_validato', 
      editable: false,
      cellRenderer: (params: { value: string | number | Date; }) => {
        return new Date(params.value).toLocaleDateString('it-IT');
      }
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
  }
];

//AgGrid config for OrdersComponent and userlevel 220
export const gridConfigOrders220 = [
    { 
        headerName: 'ID', 
        field: 'id', 
        editable: false
    },
    { 
        headerName: 'Utente', 
        field: 'username', 
        cellRenderer: DropdownUsersOrdersComponent,
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
        editable: false,
        cellRenderer: (params: { value: string | number | Date; }) => {
          return new Date(params.value).toLocaleDateString('it-IT');
        }
    },
    { 
        headerName: 'Numero ordine', 
        field: 'n_ordine', 
        editable: true
    },
    { 
        headerName: 'Ordine urgente', 
        field: 'b_urgente', 
        editable: false,
        cellRenderer: OrdersUrgentCheckboxComponent
    },
    { 
        headerName: 'Ordine extra', 
        field: 'b_extra', 
        editable: false,
        cellRenderer: OrdersExtraCheckboxComponent
    },
    { 
        headerName: 'Ordine validato', 
        field: 'b_validato', 
        editable: false,
        cellRenderer: OrdersValidatedCheckboxComponent
    },
    { 
        headerName: 'Data validazione', 
        field: 'd_validato', 
        editable: false,
        cellRenderer: (params: { value: string | number | Date; }) => {
          return new Date(params.value).toLocaleDateString('it-IT');
        }
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
    }
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