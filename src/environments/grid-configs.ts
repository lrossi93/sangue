import { ButtonDeleteForecastComponent } from "src/app/button-delete-forecast/button-delete-forecast.component";
import { ButtonDeleteProductComponent } from "src/app/button-delete-product/button-delete-product.component";
import { ButtonEditOrderComponent } from "src/app/button-edit-order/button-edit-order.component";
import { DropdownProductsForecastComponent } from "src/app/dropdown-products-forecast/dropdown-products-forecast.component";
import { DropdownUsersForecastComponent } from "src/app/dropdown-users-forecast/dropdown-users-forecast.component";
import { DropdownUsersOrdersComponent } from "src/app/dropdown-users-orders/dropdown-users-orders.component";
import { OrdersExtraCheckboxComponent } from "src/app/orders-extra-checkbox/orders-extra-checkbox.component";
import { OrdersUrgentCheckboxComponent } from "src/app/orders-urgent-checkbox/orders-urgent-checkbox.component";
import { OrdersValidatedCheckboxComponent } from "src/app/orders-validated-checkbox/orders-validated-checkbox.component";
import { PharmaRegistryActiveCheckboxComponent } from "src/app/pharma-registry-active-checkbox/pharma-registry-active-checkbox.component";
import { PharmaRegistryExtraCheckboxComponent } from "src/app/pharma-registry-extra-checkbox/pharma-registry-extra-checkbox.component";

/**
 * 
 * The following configs need to be used in the 
 * [columnDefs] attribute of the <ag-grid-angular> tag
 * 
 */

var localeLang = 'it'//navigator.language.split("-", 2)[0]

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
    Action: 'Azione',
    Sorting: 'Ordinamento'
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
    Action: 'Action',
    Sorting: 'Sorting'
  }
}

//AgGrid config for PharmaRegistryComponent and userlevel 200
export const pharmaRegistryGridConfig = [
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.ID : pharmaRegistryGridHeaders.en.ID, 
    field: 'id',
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.Code : pharmaRegistryGridHeaders.en.Code, 
    field: 'cod', 
    editable: true
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.Sorting : pharmaRegistryGridHeaders.en.Sorting, 
    field: 'ord', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.Description : pharmaRegistryGridHeaders.en.Description, 
    field: 'des', 
    editable: true
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.Units : pharmaRegistryGridHeaders.en.Units, 
    field: 'unita', 
    editable: true
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.Packaging : pharmaRegistryGridHeaders.en.Packaging, 
    field: 'confezionamento', 
    editable: true
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.MultiplePackaging : pharmaRegistryGridHeaders.en.MultiplePackaging, 
    field: 'multiplo_confezionamento', 
    editable: true
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.MultiplePacking : pharmaRegistryGridHeaders.en.MultiplePacking, 
    field: 'multiplo_imballo', 
    editable: true
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.Active : pharmaRegistryGridHeaders.en.Active, 
    field: 'attivo', 
    editable: false,
    cellRenderer: PharmaRegistryActiveCheckboxComponent
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.Extra : pharmaRegistryGridHeaders.en.Extra, 
    field: 'extra', 
    editable: false,
    cellRenderer: PharmaRegistryExtraCheckboxComponent
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.MinimumOrder : pharmaRegistryGridHeaders.en.MinimumOrder, 
    field: 'min_ord', 
    editable: true
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.ValidFrom : pharmaRegistryGridHeaders.en.ValidFrom, 
    field: 'valido_da', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.ValidThrough : pharmaRegistryGridHeaders.en.ValidThrough, 
    field: 'valido_a', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {   
      return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.Action : pharmaRegistryGridHeaders.en.Action, 
    cellRenderer: ButtonDeleteProductComponent,
    autoHeight: true
  }
];

export const forecastGridHeaders = {
  it: {
    ID: "ID",
    Year: "Anno",
    User: "Utente",
    ProductName: "Nome prodotto",
    Quantity: "Quantità",
    Notes: "Note",
    ApprovedQuantity: "Quantità approvata",
    CostPerUnit: "Costo unitario",
    Action: "Azione",
    Pending: "In attesa",
  },
  en: {
    ID: "ID",
    Year: "Year",
    User: "User",
    ProductName: "Product name",
    Quantity: "Quantity",
    Notes: "Notes",
    ApprovedQuantity: "Approved quantity",
    CostPerUnit: "Cost per unit",
    Action: "Action",
    Pending: "In attesa",
  }
}

//AgGrid config for ForecastComponent and userlevel 210
export const gridConfigForecast210 = [
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.ID : forecastGridHeaders.en.ID, 
      field: 'id'
    },
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.Year : forecastGridHeaders.en.Year, 
      field: 'anno', 
      editable: (params: { data: { qta_approvata: string; }; })  => {
        return (params.data.qta_approvata == "In attesa" || params.data.qta_approvata == "in attesa" || params.data.qta_approvata == "0");
      }
    },
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.ProductName : forecastGridHeaders.en.ProductName, 
      field: 'product_name',
      cellRenderer: DropdownProductsForecastComponent,
      editable: false
    },
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.Quantity : forecastGridHeaders.en.Quantity, 
      field: 'qta', 
      editable: (params: { data: { qta_approvata: string; }; })  => {
        return (params.data.qta_approvata == "In attesa" || params.data.qta_approvata == "in attesa" || params.data.qta_approvata == "0");
      }
    },
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.Notes : forecastGridHeaders.en.Notes, 
      field: 'note', 
      editable: true
    },
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.ApprovedQuantity : forecastGridHeaders.en.ApprovedQuantity, 
      field: 'qta_approvata', 
      editable: false,
      cellRenderer: (params: { value: string | number; }) => {
        if(params.value == "0" || params.value == null || params.value == 0) {
          return localeLang == 'it' ? forecastGridHeaders.it.Pending : forecastGridHeaders.en.Pending;
        }
        else {
          return params.value;
        }
      }
    },
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.Action : forecastGridHeaders.en.Action, 
      cellRenderer: ButtonDeleteForecastComponent,
      autoHeight: true
    }
];

//AgGrid config for ForecastComponent and userlevel 220
export const gridConfigForecast220 = [
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.ID : forecastGridHeaders.en.ID, 
      field: 'id'
    },
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.Year : forecastGridHeaders.en.Year, 
      field: 'anno', 
      editable: false
    },
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.User : forecastGridHeaders.en.User, 
      field: 'full_username',
      cellRenderer: DropdownUsersForecastComponent,
      editable: false
    },
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.ProductName : forecastGridHeaders.en.ProductName, 
      field: 'product_name',
      cellRenderer: DropdownProductsForecastComponent,
      editable: false
    },
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.Quantity : forecastGridHeaders.en.Quantity, 
      field: 'qta', 
      editable: false
    },
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.Notes : forecastGridHeaders.en.Notes, 
      field: 'note', 
      editable: true
    },
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.ApprovedQuantity : forecastGridHeaders.en.ApprovedQuantity, 
      field: 'qta_approvata', 
      editable: true
    },
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.CostPerUnit : forecastGridHeaders.en.CostPerUnit, 
      field: 'costo_unitario', 
      editable: true
    },
    { 
      headerName: localeLang == 'it' ? forecastGridHeaders.it.Action : forecastGridHeaders.en.Action, 
      cellRenderer: ButtonDeleteForecastComponent,
      autoHeight: true
    }
];

//header translation for orders
export const orderGridHeaders = {
  it: {
    ID: "ID",
    User: "Utente",
    Year: "Anno",
    OrderDate: "Data ordine",
    OrderNumber: "Numero ordine",
    Urgent: "Urgente",
    Extra: "Extra",
    Validated: "Validato",
    ValidationDate: "Data validazione",
    Notes: "Note",
    EditOrder: "Modifica ordine",
    Pending: "In attesa",
    Action: "Azione",
    Status: "Stato"
  },
  en: {
    ID: "ID",
    User: "User",
    Year: "Year",
    OrderDate: "Order date",
    OrderNumber: "Order number",
    Urgent: "Urgent",
    Extra: "Extra",
    Validated: "Validated",
    ValidationDate: "Validation date",
    Notes: "Notes",
    EditOrder: "Edit order",
    Pending: "Pending",
    Action: "Action",
    Status: "Status"
  }
}

//AgGrid config for OrdersComponent and userlevel 210
export const gridConfigOrders210 = [
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.ID : orderGridHeaders.en.ID, 
    field: 'id', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'full_username', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Year : orderGridHeaders.en.Year, 
    field: 'anno', 
    editable: (params: { data: { isRowLocked: boolean; }; }) => {
      return !params.data.isRowLocked;
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Status : orderGridHeaders.en.Status, 
    field: 'status', 
    editable: false,
    cellRenderer: (params: { value: string }) => {
      return params.value === undefined ? "inviato" : params.value;
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderDate : orderGridHeaders.en.OrderDate, 
    field: 'd_ordine', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderNumber : orderGridHeaders.en.OrderNumber, 
    field: 'n_ordine', 
    editable: (params: { data: { isRowLocked: boolean; }; }) => {
      return !params.data.isRowLocked;
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Urgent : orderGridHeaders.en.Urgent, 
    field: 'b_urgente', 
    editable: false,
    cellRenderer: OrdersUrgentCheckboxComponent
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Extra : orderGridHeaders.en.Extra, 
    field: 'b_extra', 
    editable: false,
    cellRenderer: OrdersExtraCheckboxComponent
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Validated : orderGridHeaders.en.Validated, 
    field: 'b_validato', 
    editable: false,
    cellRenderer: OrdersValidatedCheckboxComponent
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.ValidationDate : orderGridHeaders.en.ValidationDate, 
    field: 'd_validato', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      //if date is awaiting validation
      if(params.value == "0000-00-00")
        return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
      else
        return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Notes : orderGridHeaders.en.Notes, 
    field: 'note', 
    editable: (params: { data: { isRowLocked: boolean; }; }) => {
      return !params.data.isRowLocked;
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Action : orderGridHeaders.en.Action, 
    cellRenderer: ButtonEditOrderComponent,
    autoHeight: true
  }
];

//same as above but all locked
export const gridConfigOrders210Locked = [
  { 
      headerName: localeLang == 'it' ? orderGridHeaders.it.ID : orderGridHeaders.en.ID, 
      field: 'id', 
      editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'full_username', 
    editable: false
  },
  { 
      headerName: localeLang == 'it' ? orderGridHeaders.it.Year : orderGridHeaders.en.Year, 
      field: 'anno', 
      editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Status : orderGridHeaders.en.Status, 
    field: 'status', 
    editable: false,
    cellRenderer: (params: { value: string }) => {
      return params.value === undefined ? "inviato" : params.value;
    }
  },
  { 
      headerName: localeLang == 'it' ? orderGridHeaders.it.OrderDate : orderGridHeaders.en.OrderDate, 
      field: 'd_ordine', 
      editable: false,
      cellRenderer: (params: { value: string | number | Date; }) => {
        return new Date(params.value).toLocaleDateString('it-IT');
      }
  },
  { 
      headerName: localeLang == 'it' ? orderGridHeaders.it.OrderNumber : orderGridHeaders.en.OrderNumber, 
      field: 'n_ordine', 
      editable: false
  },
  { 
      headerName: localeLang == 'it' ? orderGridHeaders.it.Urgent : orderGridHeaders.en.Urgent, 
      field: 'b_urgente', 
      editable: false,
      cellRenderer: OrdersUrgentCheckboxComponent
  },
  { 
      headerName: localeLang == 'it' ? orderGridHeaders.it.Extra : orderGridHeaders.en.Extra, 
      field: 'b_extra', 
      editable: false,
      cellRenderer: OrdersExtraCheckboxComponent
  },
  { 
      headerName: localeLang == 'it' ? orderGridHeaders.it.Validated : orderGridHeaders.en.Validated, 
      field: 'b_validato', 
      editable: false,
      cellRenderer: OrdersValidatedCheckboxComponent
  },
  { 
      headerName: localeLang == 'it' ? orderGridHeaders.it.ValidationDate : orderGridHeaders.en.ValidationDate, 
      field: 'd_validato', 
      editable: false,
      cellRenderer: (params: { value: string | number | Date; }) => {
        //if date is awaiting validation
        if(params.value == "0000-00-00")
          return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
        else
          return new Date(params.value).toLocaleDateString('it-IT');
      }
  },
  { 
      headerName: localeLang == 'it' ? orderGridHeaders.it.Notes : orderGridHeaders.en.Notes, 
      field: 'note', 
      editable: false,
  },
  { 
      headerName: localeLang == 'it' ? orderGridHeaders.it.Action : orderGridHeaders.en.Action, 
      cellRenderer: ButtonEditOrderComponent,
      autoHeight: true
  }
];

//AgGrid config for OrdersComponent and userlevel 220
export const gridConfigOrders220 = [
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.ID : orderGridHeaders.en.ID, 
    field: 'id', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'full_username', 
    cellRenderer: DropdownUsersOrdersComponent,
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Year : orderGridHeaders.en.Year, 
    field: 'anno', 
    editable: true
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Status : orderGridHeaders.en.Status, 
    field: 'status', 
    editable: false,
    cellRenderer: (params: { value: string }) => {
      return params.value === undefined ? "inviato" : params.value;
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderDate : orderGridHeaders.en.OrderDate, 
    field: 'd_ordine', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderNumber : orderGridHeaders.en.OrderNumber, 
    field: 'n_ordine', 
    editable: true
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Urgent : orderGridHeaders.en.Urgent, 
    field: 'b_urgente', 
    editable: false,
    cellRenderer: OrdersUrgentCheckboxComponent
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Extra : orderGridHeaders.en.Extra, 
    field: 'b_extra', 
    editable: false,
    cellRenderer: OrdersExtraCheckboxComponent
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Validated : orderGridHeaders.en.Validated, 
    field: 'b_validato', 
    editable: false,
    cellRenderer: OrdersValidatedCheckboxComponent
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.ValidationDate : orderGridHeaders.en.ValidationDate, 
    field: 'd_validato', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      if(params.value == "0000-00-00")
        return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
      else
        return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Notes : orderGridHeaders.en.Notes, 
    field: 'note', 
    editable: true,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Action : orderGridHeaders.en.Action, 
    cellRenderer: ButtonEditOrderComponent,
    autoHeight: true
  }
];

//same as above but all locked
export const gridConfigOrders220Locked = [
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.ID : orderGridHeaders.en.ID, 
    field: 'id', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'full_username', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Year : orderGridHeaders.en.Year, 
    field: 'anno', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Status : orderGridHeaders.en.Status, 
    field: 'status', 
    editable: false,
    cellRenderer: (params: { value: string }) => {
      return params.value === undefined ? "inviato" : params.value;
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderDate : orderGridHeaders.en.OrderDate, 
    field: 'd_ordine', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderNumber : orderGridHeaders.en.OrderNumber, 
    field: 'n_ordine', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Urgent : orderGridHeaders.en.Urgent, 
    field: 'b_urgente', 
    editable: false,
    cellRenderer: OrdersUrgentCheckboxComponent
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Extra : orderGridHeaders.en.Extra, 
    field: 'b_extra', 
    editable: false,
    cellRenderer: OrdersExtraCheckboxComponent
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Validated : orderGridHeaders.en.Validated, 
    field: 'b_validato', 
    editable: false,
    cellRenderer: OrdersValidatedCheckboxComponent
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.ValidationDate : orderGridHeaders.en.ValidationDate, 
    field: 'd_validato', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
    if(params.value == "0000-00-00")
      return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
    else
      return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Notes : orderGridHeaders.en.Notes, 
    field: 'note', 
    editable: false,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Action : orderGridHeaders.en.Action, 
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