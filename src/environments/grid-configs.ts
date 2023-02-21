import { ButtonDeleteForecastComponent } from "src/app/button-delete-forecast/button-delete-forecast.component";
import { ButtonDeleteProductComponent } from "src/app/button-delete-product/button-delete-product.component";
import { ButtonEditOrderComponent } from "src/app/button-edit-order/button-edit-order.component";
import { ButtonLoanDetailsComponent } from "src/app/button-loan-details/button-loan-details.component";
import { ButtonOrderReportComponent } from "src/app/button-order-report/button-order-report.component";
import { ButtonSupplyDetailsComponent } from "src/app/button-supply-details/button-supply-details.component";
import { DropdownProductsForecastComponent } from "src/app/dropdown-products-forecast/dropdown-products-forecast.component";
import { DropdownUsersForecastComponent } from "src/app/dropdown-users-forecast/dropdown-users-forecast.component";
import { DropdownUsersOrdersComponent } from "src/app/dropdown-users-orders/dropdown-users-orders.component";
import { OrdersExtraCheckboxComponent } from "src/app/orders-extra-checkbox/orders-extra-checkbox.component";
import { OrdersReceivedCheckboxComponent } from "src/app/orders-received-checkbox/orders-received-checkbox.component";
import { OrdersSentCheckboxComponent } from "src/app/orders-sent-checkbox/orders-sent-checkbox.component";
import { OrdersToCustomerCheckboxComponent } from "src/app/orders-to-customer-checkbox/orders-to-customer-checkbox.component";
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

//===============================================================================================================
//Products
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
    Sorting: 'Ordinamento',
    InvalidDate: 'Data non valida',
    DateNotSet: 'Data non impostata'
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
    Sorting: 'Sorting',
    InvalidDate: 'Invalid date',
    DateNotSet: 'Date not set'
  }
}

//AgGrid config for PharmaRegistryComponent and userlevel 200
export const pharmaRegistryGridConfig = [
  /*
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.ID : pharmaRegistryGridHeaders.en.ID, 
    field: 'id',
    editable: false
  },
  */
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.Code : pharmaRegistryGridHeaders.en.Code, 
    field: 'cod', 
    editable: true
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.Sorting : pharmaRegistryGridHeaders.en.Sorting, 
    field: 'ord', 
    editable: true
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
      let date = new Date(params.value).toLocaleDateString('it-IT');
      if(date == "Invalid Date" || date == "0000-00-00" || date == "1970-01-01" || params.value == null)
        return localeLang == 'it' ? pharmaRegistryGridHeaders.it.DateNotSet : pharmaRegistryGridHeaders.en.DateNotSet
      return date;
    }
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.ValidThrough : pharmaRegistryGridHeaders.en.ValidThrough, 
    field: 'valido_a', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {   
      let date = new Date(params.value).toLocaleDateString('it-IT');
      if(date == "Invalid Date" || date == "0000-00-00" || date == "1970-01-01" || params.value == null)
        return localeLang == 'it' ? pharmaRegistryGridHeaders.it.DateNotSet : pharmaRegistryGridHeaders.en.DateNotSet
      return date;
    }
  },
  { 
    headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.Action : pharmaRegistryGridHeaders.en.Action, 
    cellRenderer: ButtonDeleteProductComponent,
    autoHeight: true
  }
];

//===============================================================================================================
//FORECASTS
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
  /*
  { 
    headerName: localeLang == 'it' ? forecastGridHeaders.it.ID : forecastGridHeaders.en.ID, 
    field: 'id',
    minWidth: 100,
  },
  */
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
    editable: false,
    minWidth: 350,
  },
  { 
    headerName: localeLang == 'it' ? forecastGridHeaders.it.Quantity : forecastGridHeaders.en.Quantity, 
    field: 'qta', 
    editable: (params: { data: { qta_approvata: string; }; })  => {
      return (params.data.qta_approvata == "In attesa" || params.data.qta_approvata == "in attesa" || params.data.qta_approvata == "0");
    }
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
    headerName: localeLang == 'it' ? forecastGridHeaders.it.Notes : forecastGridHeaders.en.Notes, 
    field: 'note', 
    editable: true
  },
  { 
    headerName: localeLang == 'it' ? forecastGridHeaders.it.Action : forecastGridHeaders.en.Action, 
    cellRenderer: ButtonDeleteForecastComponent,
    autoHeight: true
  }
];

//AgGrid config for ForecastComponent and userlevel 220
export const gridConfigForecast220 = [
  /*
  { 
    headerName: localeLang == 'it' ? forecastGridHeaders.it.ID : forecastGridHeaders.en.ID, 
    field: 'id',
    minWidth: 100,
  },
  */
  { 
    headerName: localeLang == 'it' ? forecastGridHeaders.it.Year : forecastGridHeaders.en.Year, 
    field: 'anno', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? forecastGridHeaders.it.User : forecastGridHeaders.en.User, 
    field: 'full_username',
    cellRenderer: DropdownUsersForecastComponent,
    editable: false,
    minWidth: 300,
  },
  { 
    headerName: localeLang == 'it' ? forecastGridHeaders.it.ProductName : forecastGridHeaders.en.ProductName, 
    field: 'product_name',
    //cellRenderer: DropdownProductsForecastComponent,
    editable: false,
    minWidth: 350,
  },
  { 
    headerName: localeLang == 'it' ? forecastGridHeaders.it.Quantity : forecastGridHeaders.en.Quantity, 
    field: 'qta', 
    editable: false
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
    headerName: localeLang == 'it' ? forecastGridHeaders.it.Notes : forecastGridHeaders.en.Notes, 
    field: 'note', 
    editable: true
  },
  { 
    headerName: localeLang == 'it' ? forecastGridHeaders.it.Action : forecastGridHeaders.en.Action, 
    cellRenderer: ButtonDeleteForecastComponent,
    autoHeight: true
  }
];

//===============================================================================================================
//ORDERS
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
    Status: "Stato",
    SentToSupplier: "Inviato al fornitore",
    SentToCustomer: "Inviato al cliente",
    Received: "Ricevuto",
    Report: "Report",
    PDF: "PDF",
    EstimatedDeliveryDate: "Data di consegna prevista",
    DDTDate: "Data DDT",
    DDTNumber: "n° DDT",
    DeliveryNotes: "Note di consegna",
    UserFrom: "Effettuato da",
    Recipient: "Destinatario"
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
    Status: "Status",
    SentToSupplier: "Sent to supplier",
    SentToCustomer: "Sent to customer",
    Received: "Received",
    Report: "Report",
    PDF: "PDF",
    EstimatedDeliveryDate: "Estimated delivery date",
    DDTDate: "DDT date",
    DDTNumber: "DDT no.",
    DeliveryNotes: "Delivery notes",
    UserFrom: "Requested by",
    Recipient: "Recipient"
  }
}

//AgGrid config for OrdersComponent and userlevel 210
export const gridConfigOrders210 = [
  /*
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.ID : orderGridHeaders.en.ID, 
    field: 'id', 
    editable: false
  },
  */
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderNumber : orderGridHeaders.en.OrderNumber, 
    field: 'n_ordine', 
    editable: (params: { data: { isRowLocked: boolean; }; }) => {
      return !params.data.isRowLocked;
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'full_username', 
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
    },
    sort: 'desc'
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
    headerName: localeLang == 'it' ? orderGridHeaders.it.Received : orderGridHeaders.en.Received,
    field: 'b_received',
    editable: false,
    cellRenderer: OrdersReceivedCheckboxComponent
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
    headerName: localeLang == 'it' ? orderGridHeaders.it.DDTNumber : orderGridHeaders.en.DDTNumber, 
    field: 'n_ddt', 
    editable: true,
  },
  {  
    headerName: localeLang == 'it' ? orderGridHeaders.it.DDTDate : orderGridHeaders.en.DDTDate, 
    field: 'd_ddt',
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      //if date is awaiting validation
      if(params.value == "0000-00-00" || params.value == "")
        return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
      else
        return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.EstimatedDeliveryDate : orderGridHeaders.en.EstimatedDeliveryDate, 
    field: 'd_consegna_prevista', 
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
    headerName: localeLang == 'it' ? orderGridHeaders.it.DeliveryNotes : orderGridHeaders.en.DeliveryNotes, 
    field: 'note_consegna', 
    editable: false,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Action : orderGridHeaders.en.Action, 
    cellRenderer: ButtonEditOrderComponent,
    autoHeight: true
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.PDF : orderGridHeaders.en.PDF, 
    cellRenderer: ButtonOrderReportComponent,
    autoHeight: true
  }
];

//same as above but all locked
export const gridConfigOrders210Locked = [
  /*
  { 
      headerName: localeLang == 'it' ? orderGridHeaders.it.ID : orderGridHeaders.en.ID, 
      field: 'id', 
      editable: false
  },
  */
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderNumber : orderGridHeaders.en.OrderNumber, 
    field: 'n_ordine', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'full_username', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Status : orderGridHeaders.en.Status, 
    field: 'status', 
    editable: false,
  },
  { 
      headerName: localeLang == 'it' ? orderGridHeaders.it.OrderDate : orderGridHeaders.en.OrderDate, 
      field: 'd_ordine', 
      editable: false,
      cellRenderer: (params: { value: string | number | Date; }) => {
        return new Date(params.value).toLocaleDateString('it-IT');
      },
      sort: 'desc'
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
    headerName: localeLang == 'it' ? orderGridHeaders.it.Received : orderGridHeaders.en.Received,
    field: 'b_received',
    editable: false,
    cellRenderer: OrdersReceivedCheckboxComponent
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
    headerName: localeLang == 'it' ? orderGridHeaders.it.DDTNumber : orderGridHeaders.en.DDTNumber, 
    field: 'n_ddt', 
    editable: false,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.DDTDate : orderGridHeaders.en.DDTDate, 
    field: 'd_ddt',
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      //if date is awaiting validation
      if(params.value == "0000-00-00" || params.value == "")
        return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
      else
        return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.EstimatedDeliveryDate : orderGridHeaders.en.EstimatedDeliveryDate, 
    field: 'd_consegna_prevista', 
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
    headerName: localeLang == 'it' ? orderGridHeaders.it.DeliveryNotes : orderGridHeaders.en.DeliveryNotes, 
    field: 'note_consegna', 
    editable: false,
  },
  { 
      headerName: localeLang == 'it' ? orderGridHeaders.it.Action : orderGridHeaders.en.Action, 
      cellRenderer: ButtonEditOrderComponent,
      autoHeight: true
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.PDF : orderGridHeaders.en.PDF, 
    cellRenderer: ButtonOrderReportComponent,
    autoHeight: true
  }
];

//AgGrid config for OrdersComponent and userlevel 220
export const gridConfigOrders220 = [
  /*
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.ID : orderGridHeaders.en.ID, 
    field: 'id', 
    editable: false
  },
  */
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderNumber : orderGridHeaders.en.OrderNumber, 
    field: 'n_ordine', 
    editable: true
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'full_username', 
    cellRenderer: DropdownUsersOrdersComponent,
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Status : orderGridHeaders.en.Status, 
    field: 'status', 
    editable: false,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderDate : orderGridHeaders.en.OrderDate, 
    field: 'd_ordine', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      return new Date(params.value).toLocaleDateString('it-IT');
    },
    sort: 'desc'
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
    headerName: localeLang == 'it' ? orderGridHeaders.it.SentToSupplier : orderGridHeaders.en.SentToSupplier,
    field: 'b_to_supplier',
    editable: false,
    cellRenderer: OrdersSentCheckboxComponent
  },
  {
    headerName: localeLang == 'it' ? orderGridHeaders.it.Received : orderGridHeaders.en.Received,
    field: 'b_received',
    editable: false,
    cellRenderer: OrdersReceivedCheckboxComponent
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.ValidationDate : orderGridHeaders.en.ValidationDate, 
    field: 'd_validato', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      if(params.value == "0000-00-00" || params.value == "Invalid Date")
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
    headerName: localeLang == 'it' ? orderGridHeaders.it.DDTNumber : orderGridHeaders.en.DDTNumber, 
    field: 'n_ddt', 
    editable: false,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.DDTDate : orderGridHeaders.en.DDTDate, 
    field: 'd_ddt',
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      //if date is awaiting validation
      if(params.value == "0000-00-00" || params.value == "")
        return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
      else
        return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.EstimatedDeliveryDate : orderGridHeaders.en.EstimatedDeliveryDate, 
    field: 'd_consegna_prevista', 
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
    headerName: localeLang == 'it' ? orderGridHeaders.it.DeliveryNotes : orderGridHeaders.en.DeliveryNotes, 
    field: 'note_consegna', 
    editable: false,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Action : orderGridHeaders.en.Action, 
    cellRenderer: ButtonEditOrderComponent,
    autoHeight: true
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.PDF : orderGridHeaders.en.PDF, 
    cellRenderer: ButtonOrderReportComponent,
    autoHeight: true
  }
];

//same as above but all locked
export const gridConfigOrders220Locked = [
  /*
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.ID : orderGridHeaders.en.ID, 
    field: 'id', 
    editable: false
  },
  */
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderNumber : orderGridHeaders.en.OrderNumber, 
    field: 'n_ordine', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'full_username', 
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
    },
    sort: 'desc'
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
    headerName: localeLang == 'it' ? orderGridHeaders.it.SentToSupplier : orderGridHeaders.en.SentToSupplier,
    field: 'b_to_supplier',
    editable: false,
    cellRenderer: OrdersSentCheckboxComponent
  },
  {
    headerName: localeLang == 'it' ? orderGridHeaders.it.Received : orderGridHeaders.en.Received,
    field: 'b_received',
    editable: false,
    cellRenderer: OrdersReceivedCheckboxComponent
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
    headerName: localeLang == 'it' ? orderGridHeaders.it.DDTNumber : orderGridHeaders.en.DDTNumber, 
    field: 'n_ddt', 
    editable: false,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.DDTDate : orderGridHeaders.en.DDTDate, 
    field: 'd_ddt',
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      //if date is awaiting validation
      if(params.value == "0000-00-00" || params.value == "")
        return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
      else
        return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.EstimatedDeliveryDate : orderGridHeaders.en.EstimatedDeliveryDate, 
    field: 'd_consegna_prevista', 
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
    headerName: localeLang == 'it' ? orderGridHeaders.it.DeliveryNotes : orderGridHeaders.en.DeliveryNotes, 
    field: 'note_consegna', 
    editable: false,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Action : orderGridHeaders.en.Action, 
    cellRenderer: ButtonEditOrderComponent,
    autoHeight: true
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.PDF : orderGridHeaders.en.PDF, 
    cellRenderer: ButtonOrderReportComponent,
    autoHeight: true
  }
];

//AgGrid config for orderRows
export const gridConfigOrderRows = [
  /*
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.ID : orderGridHeaders.en.ID, 
    field: 'id', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      console.log(params);
    }
  },
  */
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.ID : orderGridHeaders.en.ID, 
    field: 'id_ordine', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'full_username', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'n_riga', 
    editable: false,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'product_name', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'qta', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'qta_validata', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'qta_ricevuta', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'note', 
    editable: false
  }
];

//===============================================================================================================
//SUPPLIES
//grid config for user 230
export const gridConfigSupplies = [
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderNumber : orderGridHeaders.en.OrderNumber, 
    field: 'n_ordine', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User, 
    field: 'full_username', 
    editable: false,
    minWidth: 400,
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
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderDate : orderGridHeaders.en.OrderDate, 
    field: 'd_ordine', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      return new Date(params.value).toLocaleDateString('it-IT');
    },
    sort: 'desc'
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
    headerName: localeLang == 'it' ? orderGridHeaders.it.SentToCustomer : orderGridHeaders.en.SentToCustomer,
    field: 'b_to_customer',
    editable: false,
    cellRenderer: OrdersToCustomerCheckboxComponent
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
    headerName: localeLang == 'it' ? orderGridHeaders.it.EstimatedDeliveryDate : orderGridHeaders.en.EstimatedDeliveryDate, 
    field: 'd_consegna_prevista', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      if(params.value == "0000-00-00") {
        return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
      }
      else {
        return new Date(params.value).toLocaleDateString('it-IT');
      }
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Notes : orderGridHeaders.en.Notes, 
    field: 'note', 
    editable: false,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.DDTNumber : orderGridHeaders.en.DDTNumber, 
    field: 'n_ddt', 
    editable: false,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.DDTDate : orderGridHeaders.en.DDTDate, 
    field: 'd_ddt',
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      if(params.value == "0000-00-00" || params.value == "")
        return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
      else
        return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.EstimatedDeliveryDate : orderGridHeaders.en.EstimatedDeliveryDate, 
    field: 'd_consegna_prevista', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      if(params.value == "0000-00-00" || params.value == "")
        return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
      else
        return new Date(params.value).toLocaleDateString('it-IT');
    }
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.DeliveryNotes : orderGridHeaders.en.DeliveryNotes, 
    field: 'note_consegna', 
    editable: true,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Action : orderGridHeaders.en.Action, 
    cellRenderer: ButtonSupplyDetailsComponent,
    autoHeight: false
  }
];

//===============================================================================================================
//LOANS
//grid config for user 210
export const gridConfigLoans210 = [
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.ID : orderGridHeaders.en.ID, 
    field: 'id', 
    editable: false
  },
  /*
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.UserFrom : orderGridHeaders.en.UserFrom, 
    field: 'full_username_from', 
    editable: false,
    minWidth: 400,
  },
  */
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Recipient : orderGridHeaders.en.Recipient, 
    field: 'full_username_to', 
    editable: false,
    minWidth: 400,
  },
  /*
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Year : orderGridHeaders.en.Year, 
    field: 'anno', 
    editable: false
  },
  */
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderDate : orderGridHeaders.en.OrderDate, 
    field: 'd_ordine', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      return new Date(params.value).toLocaleDateString('it-IT');
    },
    sort: 'desc'
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Notes : orderGridHeaders.en.Notes, 
    field: 'note', 
    editable: false,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Action : orderGridHeaders.en.Action, 
    cellRenderer: ButtonLoanDetailsComponent,
    autoHeight: false
  }
];

//grid config for user 220
export const gridConfigLoans220 = [
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.ID : orderGridHeaders.en.ID, 
    field: 'id', 
    editable: false
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.UserFrom : orderGridHeaders.en.UserFrom, 
    field: 'full_username_from', 
    editable: false,
    minWidth: 400,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Recipient : orderGridHeaders.en.Recipient, 
    field: 'full_username_to', 
    editable: false,
    minWidth: 400,
  },
  /*
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Year : orderGridHeaders.en.Year, 
    field: 'anno', 
    editable: false
  },
  */
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.OrderDate : orderGridHeaders.en.OrderDate, 
    field: 'd_ordine', 
    editable: false,
    cellRenderer: (params: { value: string | number | Date; }) => {
      return new Date(params.value).toLocaleDateString('it-IT');
    },
    sort: 'desc'
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Notes : orderGridHeaders.en.Notes, 
    field: 'note', 
    editable: false,
  },
  { 
    headerName: localeLang == 'it' ? orderGridHeaders.it.Action : orderGridHeaders.en.Action, 
    cellRenderer: ButtonLoanDetailsComponent,
    autoHeight: false
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
  filter: true,
  resizable: true
}

//===============================================================================================================
/**
 * 
 * GRID LOCALE
 * 
 */
export const AG_GRID_LOCALE_EN = {
  // Set Filter
  selectAll: '(Select All)',
  selectAllSearchResults: '(Select All Search Results)',
  searchOoo: 'Search...',
  blanks: '(Blanks)',
  noMatches: 'No matches',

  // Number Filter & Text Filter
  filterOoo: 'Filter...',
  equals: 'Equals',
  notEqual: 'Not equal',
  blank: 'Blank',
  notBlank: 'Not blank',
  empty: 'Choose One',

  // Number Filter
  lessThan: 'Less than',
  greaterThan: 'Greater than',
  lessThanOrEqual: 'Less than or equal',
  greaterThanOrEqual: 'Greater than or equal',
  inRange: 'In range',
  inRangeStart: 'from',
  inRangeEnd: 'to',

  // Text Filter
  contains: 'Contains',
  notContains: 'Not contains',
  startsWith: 'Starts with',
  endsWith: 'Ends with',

  // Date Filter
  dateFormatOoo: 'yyyy-mm-dd',

  // Filter Conditions
  andCondition: 'AND',
  orCondition: 'OR',

  // Filter Buttons
  applyFilter: 'Apply',
  resetFilter: 'Reset',
  clearFilter: 'Clear',
  cancelFilter: 'Cancel',

  // Filter Titles
  textFilter: 'Text Filter',
  numberFilter: 'Number Filter',
  dateFilter: 'Date Filter',
  setFilter: 'Set Filter',

  // Side Bar
  columns: 'Columns',
  filters: 'Filters',

  // columns tool panel
  pivotMode: 'Pivot Mode',
  groups: 'Row Groups',
  rowGroupColumnsEmptyMessage: 'Drag here to set row groups',
  values: 'Values',
  valueColumnsEmptyMessage: 'Drag here to aggregate',
  pivots: 'Column Labels',
  pivotColumnsEmptyMessage: 'Drag here to set column labels',

  // Header of the Default Group Column
  group: 'Group',

  // Row Drag
  rowDragRow: 'row',
  rowDragRows:'rows',

  // Other
  loadingOoo: 'Loading...',
  loadingError: 'ERR',
  noRowsToShow: 'No Rows To Show',
  enabled: 'Enabled',

  // Menu
  pinColumn: 'Pin Column',
  pinLeft: 'Pin Left',
  pinRight: 'Pin Right',
  noPin: 'No Pin',
  valueAggregation: 'Value Aggregation',
  noAggregation: 'None',
  autosizeThiscolumn: 'Autosize This Column',
  autosizeAllColumns: 'Autosize All Columns',
  groupBy: 'Group by',
  ungroupBy: 'Un-Group by',
  addToValues: 'Add ${variable} to values',
  removeFromValues: 'Remove ${variable} from values',
  addToLabels: 'Add ${variable} to labels',
  removeFromLabels: 'Remove ${variable} from labels',
  resetColumns: 'Reset Columns',
  expandAll: 'Expand All',
  collapseAll: 'Close All',
  copy: 'Copy',
  ctrlC: 'Ctrl+C',
  copyWithHeaders: 'Copy With Headers',
  copyWithGroupHeaders: 'Copy with Group Headers',
  paste: 'Paste',
  ctrlV: 'Ctrl+V',
  export: 'Export',
  csvExport: 'CSV Export',
  excelExport: 'Excel Export',

  // Enterprise Menu Aggregation and Status Bar
  sum: 'Sum',
  first: 'First',
  last: 'Last',
  min: 'Min',
  max: 'Max',
  none: 'None',
  count: 'Count',
  avg: 'Average',
  filteredRows: 'Filtered',
  selectedRows: 'Selected',
  totalRows: 'Total Rows',
  totalAndFilteredRows: 'Rows',
  more: 'More',
  to: 'to',
  of: 'of',
  page: 'Page',
  nextPage: 'Next Page',
  lastPage: 'Last Page',
  firstPage: 'First Page',
  previousPage: 'Previous Page',

  // Pivoting
  pivotColumnGroupTotals: 'Total',

  // Enterprise Menu (Charts)
  pivotChartAndPivotMode: 'Pivot Chart & Pivot Mode',
  pivotChart: 'Pivot Chart',
  chartRange: 'Chart Range',

  columnChart: 'Column',
  groupedColumn: 'Grouped',
  stackedColumn: 'Stacked',
  normalizedColumn: '100% Stacked',

  barChart: 'Bar',
  groupedBar: 'Grouped',
  stackedBar: 'Stacked',
  normalizedBar: '100% Stacked',

  pieChart: 'Pie',
  pie: 'Pie',
  doughnut: 'Doughnut',

  line: 'Line',

  xyChart: 'X Y (Scatter)',
  scatter: 'Scatter',
  bubble: 'Bubble',

  areaChart: 'Area',
  area: 'Area',
  stackedArea: 'Stacked',
  normalizedArea: '100% Stacked',

  histogramChart: 'Histogram',
  histogramFrequency: "Frequency",

  combinationChart: 'Combination',
  columnLineCombo: 'Column & Line',
  AreaColumnCombo: 'Area & Column',

  // Charts
  pivotChartTitle: 'Pivot Chart',
  rangeChartTitle: 'Range Chart',
  settings: 'Settings',
  data: 'Data',
  format: 'Format',
  categories: 'Categories',
  defaultCategory: '(None)',
  series: 'Series',
  xyValues: 'X Y Values',
  paired: 'Paired Mode',
  axis: 'Axis',
  navigator: 'Navigator',
  color: 'Color',
  thickness: 'Thickness',
  xType: 'X Type',
  automatic: 'Automatic',
  category: 'Category',
  number: 'Number',
  time: 'Time',
  autoRotate: 'Auto Rotate',
  xRotation: 'X Rotation',
  yRotation: 'Y Rotation',
  ticks: 'Ticks',
  width: 'Width',
  height: 'Height',
  length: 'Length',
  padding: 'Padding',
  spacing: 'Spacing',
  chart: 'Chart',
  title: 'Title',
  titlePlaceholder: 'Chart title - double click to edit',
  background: 'Background',
  font: 'Font',
  top: 'Top',
  right: 'Right',
  bottom: 'Bottom',
  left: 'Left',
  labels: 'Labels',
  size: 'Size',
  minSize: 'Minimum Size',
  maxSize: 'Maximum Size',
  legend: 'Legend',
  position: 'Position',
  markerSize: 'Marker Size',
  markerStroke: 'Marker Stroke',
  markerPadding: 'Marker Padding',
  itemSpacing: 'Item Spacing',
  itemPaddingX: 'Item Padding X',
  itemPaddingY: 'Item Padding Y',
  layoutHorizontalSpacing: 'Horizontal Spacing',
  layoutVerticalSpacing: 'Vertical Spacing',
  strokeWidth: 'Stroke Width',
  lineDash: 'Line Dash',
  offset: 'Offset',
  offsets: 'Offsets',
  tooltips: 'Tooltips',
  callout: 'Callout',
  markers: 'Markers',
  shadow: 'Shadow',
  blur: 'Blur',
  xOffset: 'X Offset',
  yOffset: 'Y Offset',
  lineWidth: 'Line Width',
  normal: 'Normal',
  bold: 'Bold',
  italic: 'Italic',
  boldItalic: 'Bold Italic',
  predefined: 'Predefined',
  fillOpacity: 'Fill Opacity',
  strokeOpacity: 'Line Opacity',
  histogramBinCount: 'Bin count',
  columnGroup: 'Column',
  barGroup: 'Bar',
  pieGroup: 'Pie',
  lineGroup: 'Line',
  scatterGroup: 'X Y (Scatter)',
  areaGroup: 'Area',
  histogramGroup: 'Histogram',
  combinationGroup: 'Combination',
  groupedColumnTooltip: 'Grouped',
  stackedColumnTooltip: 'Stacked',
  normalizedColumnTooltip: '100% Stacked',
  groupedBarTooltip: 'Grouped',
  stackedBarTooltip: 'Stacked',
  normalizedBarTooltip: '100% Stacked',
  pieTooltip: 'Pie',
  doughnutTooltip: 'Doughnut',
  lineTooltip: 'Line',
  groupedAreaTooltip: 'Area',
  stackedAreaTooltip: 'Stacked',
  normalizedAreaTooltip: '100% Stacked',
  scatterTooltip: 'Scatter',
  bubbleTooltip: 'Bubble',
  histogramTooltip: 'Histogram',
  columnLineComboTooltip: 'Column & Line',
  areaColumnComboTooltip: 'Area & Column',
  customComboTooltip: 'Custom Combination',
  noDataToChart: 'No data available to be charted.',
  pivotChartRequiresPivotMode: 'Pivot Chart requires Pivot Mode enabled.',
  chartSettingsToolbarTooltip: 'Menu',
  chartLinkToolbarTooltip: 'Linked to Grid',
  chartUnlinkToolbarTooltip: 'Unlinked from Grid',
  chartDownloadToolbarTooltip: 'Download Chart',
  seriesChartType: 'Series Chart Type',
  seriesType: 'Series Type',
  secondaryAxis: 'Secondary Axis',

  // ARIA
  ariaChecked: 'checked',
  ariaColumn: 'Column',
  ariaColumnGroup: 'Column Group',
  ariaColumnList: 'Column List',
  ariaColumnSelectAll: 'Toggle Select All Columns',
  ariaDateFilterInput: 'Date Filter Input',
  ariaDefaultListName: 'List',
  ariaFilterColumnsInput: 'Filter Columns Input',
  ariaFilterFromValue: 'Filter from value',
  ariaFilterInput: 'Filter Input',
  ariaFilterList: 'Filter List',
  ariaFilterToValue: 'Filter to value',
  ariaFilterValue: 'Filter Value',
  ariaFilteringOperator: 'Filtering Operator',
  ariaHidden: 'hidden',
  ariaIndeterminate:'indeterminate',
  ariaInputEditor: 'Input Editor',
  ariaMenuColumn: 'Press CTRL ENTER to open column menu.',
  ariaRowDeselect: 'Press SPACE to deselect this row',
  ariaRowSelectAll: 'Press Space to toggle all rows selection',
  ariaRowToggleSelection: 'Press Space to toggle row selection',
  ariaRowSelect: 'Press SPACE to select this row',
  ariaSearch: 'Search',
  ariaSortableColumn: 'Press ENTER to sort',
  ariaToggleVisibility: 'Press SPACE to toggle visibility',
  ariaUnchecked: 'unchecked',
  ariaVisible: 'visible',
  ariaSearchFilterValues: 'Search filter values',

  // ARIA Labels for Drop Zones

  ariaRowGroupDropZonePanelLabel: 'Row Groups',
  ariaValuesDropZonePanelLabel: 'Values',
  ariaPivotDropZonePanelLabel: 'Column Labels',
  ariaDropZoneColumnComponentDescription: 'Press DELETE to remove',
  ariaDropZoneColumnValueItemDescription: 'Press ENTER to change the aggregation type',
  ariaDropZoneColumnGroupItemDescription: 'Press ENTER to sort',
  // used for aggregate drop zone, format: {aggregation}{ariaDropZoneColumnComponentAggFuncSeperator}{column name}
  ariaDropZoneColumnComponentAggFuncSeperator: ' of ',
  ariaDropZoneColumnComponentSortAscending: 'ascending',
  ariaDropZoneColumnComponentSortDescending: 'descending',

  // ARIA Labels for Dialogs
  ariaLabelColumnMenu: 'Column Menu',
  ariaLabelCellEditor: 'Cell Editor',
  ariaLabelDialog: 'Dialog',
  ariaLabelSelectField: 'Select Field',
  ariaLabelTooltip: 'Tooltip',
  ariaLabelContextMenu: 'Context Menu',
  ariaLabelSubMenu: 'SubMenu',
  ariaLabelAggregationFunction: 'Aggregation Function',

  // Number Format (Status Bar, Pagination Panel)
  thousandSeparator: ',',
  decimalSeparator: '.'

}

export const AG_GRID_LOCALE_IT = {
  // Set Filter
  selectAll: '(Seleziona tutti)',
  selectAllSearchResults: '(Seleziona tutti i risultati)',
  searchOoo: 'Cerca...',
  blanks: '(Vuoti)',
  noMatches: 'Nessuna corrispondenza',

  // Number Filter & Text Filter
  filterOoo: 'Filtra...',
  equals: 'Uguale a',
  notEqual: 'Diverso da',
  blank: 'Vuoto',
  notBlank: 'Non vuoto',
  empty: 'Scegli un filtro',

  // Number Filter
  lessThan: 'Minore di',
  greaterThan: 'Maggiore di',
  lessThanOrEqual: 'Minore o uguale a',
  greaterThanOrEqual: 'Maggiore o uguale a',
  inRange: 'Nel range',
  inRangeStart: 'da',
  inRangeEnd: 'a',

  // Text Filter
  contains: 'Contiene',
  notContains: 'Non contiene',
  startsWith: 'Inizia con',
  endsWith: 'Finisce con',

  // Date Filter
  dateFormatOoo: 'yyyy-mm-dd',

  // Filter Conditions
  andCondition: 'AND',
  orCondition: 'OR',

  // Filter Buttons
  applyFilter: 'Applica',
  resetFilter: 'Reimposta',
  clearFilter: 'Pulisci',
  cancelFilter: 'Annulla',

  // Filter Titles
  textFilter: 'Filtro testuale',
  numberFilter: 'Filtro numerico',
  dateFilter: 'Filtro date',
  setFilter: 'Imposta filtro',

  // Side Bar
  columns: 'Colonne',
  filters: 'Filtri',

  // columns tool panel
  pivotMode: 'Modalità Pivot',
  groups: 'Gruppi di righe',
  rowGroupColumnsEmptyMessage: 'Trascina qui per impostare un gruppo di righe',
  values: 'Valori',
  valueColumnsEmptyMessage: 'Trascina qui per aggregare',
  pivots: 'Etichette colonne',
  pivotColumnsEmptyMessage: 'Trascina qui per applicare le etichette alle colonne',

  // Header of the Default Group Column
  group: 'Gruppo',

  // Row Drag
  rowDragRow: 'riga',
  rowDragRows:'righe',

  // Other
  loadingOoo: 'Caricamento...',
  loadingError: 'ERR',
  noRowsToShow: 'Nessuna riga da mostrare',
  enabled: 'Abilitato',

  // Menu
  pinColumn: 'Fissa colonna',
  pinLeft: 'Fissa a sinistra',
  pinRight: 'Fissa a destra',
  noPin: 'Non fissare',
  valueAggregation: 'Aggregazione di valori',
  noAggregation: 'Nessuna',
  autosizeThiscolumn: 'Ridimensiona automaticamente la colonna',
  autosizeAllColumns: 'Ridimensiona automaticamente tutte le colonne',
  groupBy: 'Raggruppa per',
  ungroupBy: 'Non raggruppare per',
  addToValues: 'Aggiungi ${variable} ai valori',
  removeFromValues: 'Rimuovi ${variable} dai valori',
  addToLabels: 'Aggiungi ${variable} alle etichette',
  removeFromLabels: 'Rimuovi ${variable} dalle etichette',
  resetColumns: 'Reimposta colonne',
  expandAll: 'Espandi tutto',
  collapseAll: 'Chiudi tutto',
  copy: 'Copia',
  ctrlC: 'Ctrl+C',
  copyWithHeaders: 'Copia con intestazioni',
  copyWithGroupHeaders: 'Copia con intestazioni di gruppo',
  paste: 'Incolla',
  ctrlV: 'Ctrl+V',
  export: 'Esporta',
  csvExport: 'Esporta come CSV',
  excelExport: 'Esporta come Excel',

  // Enterprise Menu Aggregation and Status Bar
  sum: 'Somma',
  first: 'Primo',
  last: 'Ultimo',
  min: 'Min',
  max: 'Max',
  none: 'Nessuno',
  count: 'Conteggio',
  avg: 'Media',
  filteredRows: 'Filtrate',
  selectedRows: 'Selezionate',
  totalRows: 'Righe totali',
  totalAndFilteredRows: 'Righe',
  more: 'Altro',
  to: 'a',
  of: 'di',
  page: 'Pagina',
  nextPage: 'Pagina successiva',
  lastPage: 'Ultima pagina',
  firstPage: 'Prima pagina',
  previousPage: 'Pagina precedente',

  // Pivoting
  pivotColumnGroupTotals: 'Totale',

  // Enterprise Menu (Charts)
  pivotChartAndPivotMode: 'Schema Pivot e Modalità Pivot',
  pivotChart: 'Schema Pivot',
  chartRange: 'Schema range',

  columnChart: 'Colonna',
  groupedColumn: 'Raggruppate',
  stackedColumn: 'Impilate',
  normalizedColumn: 'Impilate al 100%',

  barChart: 'Barra',
  groupedBar: 'Raggruppate',
  stackedBar: 'Impilate',
  normalizedBar: 'Impilate al 100%',

  pieChart: 'Torta',
  pie: 'Torta',
  doughnut: 'Ciambella',

  line: 'Linea',

  xyChart: 'X Y (Dispersione)',
  scatter: 'Dispersione',
  bubble: 'Bolla',

  areaChart: 'Area',
  area: 'Area',
  stackedArea: 'Impilata',
  normalizedArea: 'Impilata al 100%',

  histogramChart: 'Istogramma',
  histogramFrequency: "Frequenza",

  combinationChart: 'Combinazione',
  columnLineCombo: 'Colonna e Linea',
  AreaColumnCombo: 'Area & Colonna',

  // Charts
  pivotChartTitle: 'Pivot Chart',
  rangeChartTitle: 'Range Chart',
  settings: 'Settings',
  data: 'Data',
  format: 'Format',
  categories: 'Categories',
  defaultCategory: '(None)',
  series: 'Series',
  xyValues: 'X Y Values',
  paired: 'Paired Mode',
  axis: 'Axis',
  navigator: 'Navigator',
  color: 'Color',
  thickness: 'Thickness',
  xType: 'X Type',
  automatic: 'Automatic',
  category: 'Category',
  number: 'Number',
  time: 'Time',
  autoRotate: 'Auto Rotate',
  xRotation: 'X Rotation',
  yRotation: 'Y Rotation',
  ticks: 'Ticks',
  width: 'Width',
  height: 'Height',
  length: 'Length',
  padding: 'Padding',
  spacing: 'Spacing',
  chart: 'Chart',
  title: 'Title',
  titlePlaceholder: 'Chart title - double click to edit',
  background: 'Background',
  font: 'Font',
  top: 'Top',
  right: 'Right',
  bottom: 'Bottom',
  left: 'Left',
  labels: 'Labels',
  size: 'Size',
  minSize: 'Minimum Size',
  maxSize: 'Maximum Size',
  legend: 'Legend',
  position: 'Position',
  markerSize: 'Marker Size',
  markerStroke: 'Marker Stroke',
  markerPadding: 'Marker Padding',
  itemSpacing: 'Item Spacing',
  itemPaddingX: 'Item Padding X',
  itemPaddingY: 'Item Padding Y',
  layoutHorizontalSpacing: 'Horizontal Spacing',
  layoutVerticalSpacing: 'Vertical Spacing',
  strokeWidth: 'Stroke Width',
  lineDash: 'Line Dash',
  offset: 'Offset',
  offsets: 'Offsets',
  tooltips: 'Tooltips',
  callout: 'Callout',
  markers: 'Markers',
  shadow: 'Shadow',
  blur: 'Blur',
  xOffset: 'X Offset',
  yOffset: 'Y Offset',
  lineWidth: 'Line Width',
  normal: 'Normal',
  bold: 'Bold',
  italic: 'Italic',
  boldItalic: 'Bold Italic',
  predefined: 'Predefined',
  fillOpacity: 'Fill Opacity',
  strokeOpacity: 'Line Opacity',
  histogramBinCount: 'Bin count',
  columnGroup: 'Column',
  barGroup: 'Bar',
  pieGroup: 'Pie',
  lineGroup: 'Line',
  scatterGroup: 'X Y (Scatter)',
  areaGroup: 'Area',
  histogramGroup: 'Histogram',
  combinationGroup: 'Combination',
  groupedColumnTooltip: 'Grouped',
  stackedColumnTooltip: 'Stacked',
  normalizedColumnTooltip: '100% Stacked',
  groupedBarTooltip: 'Grouped',
  stackedBarTooltip: 'Stacked',
  normalizedBarTooltip: '100% Stacked',
  pieTooltip: 'Pie',
  doughnutTooltip: 'Doughnut',
  lineTooltip: 'Line',
  groupedAreaTooltip: 'Area',
  stackedAreaTooltip: 'Stacked',
  normalizedAreaTooltip: '100% Stacked',
  scatterTooltip: 'Scatter',
  bubbleTooltip: 'Bubble',
  histogramTooltip: 'Histogram',
  columnLineComboTooltip: 'Column & Line',
  areaColumnComboTooltip: 'Area & Column',
  customComboTooltip: 'Custom Combination',
  noDataToChart: 'No data available to be charted.',
  pivotChartRequiresPivotMode: 'Pivot Chart requires Pivot Mode enabled.',
  chartSettingsToolbarTooltip: 'Menu',
  chartLinkToolbarTooltip: 'Linked to Grid',
  chartUnlinkToolbarTooltip: 'Unlinked from Grid',
  chartDownloadToolbarTooltip: 'Download Chart',
  seriesChartType: 'Series Chart Type',
  seriesType: 'Series Type',
  secondaryAxis: 'Secondary Axis',

  // ARIA
  ariaChecked: 'checked',
  ariaColumn: 'Column',
  ariaColumnGroup: 'Column Group',
  ariaColumnList: 'Column List',
  ariaColumnSelectAll: 'Toggle Select All Columns',
  ariaDateFilterInput: 'Date Filter Input',
  ariaDefaultListName: 'List',
  ariaFilterColumnsInput: 'Filter Columns Input',
  ariaFilterFromValue: 'Filter from value',
  ariaFilterInput: 'Filter Input',
  ariaFilterList: 'Filter List',
  ariaFilterToValue: 'Filter to value',
  ariaFilterValue: 'Filter Value',
  ariaFilteringOperator: 'Filtering Operator',
  ariaHidden: 'hidden',
  ariaIndeterminate:'indeterminate',
  ariaInputEditor: 'Input Editor',
  ariaMenuColumn: 'Press CTRL ENTER to open column menu.',
  ariaRowDeselect: 'Press SPACE to deselect this row',
  ariaRowSelectAll: 'Press Space to toggle all rows selection',
  ariaRowToggleSelection: 'Press Space to toggle row selection',
  ariaRowSelect: 'Press SPACE to select this row',
  ariaSearch: 'Search',
  ariaSortableColumn: 'Press ENTER to sort',
  ariaToggleVisibility: 'Press SPACE to toggle visibility',
  ariaUnchecked: 'unchecked',
  ariaVisible: 'visible',
  ariaSearchFilterValues: 'Search filter values',

  // ARIA Labels for Drop Zones

  ariaRowGroupDropZonePanelLabel: 'Row Groups',
  ariaValuesDropZonePanelLabel: 'Values',
  ariaPivotDropZonePanelLabel: 'Column Labels',
  ariaDropZoneColumnComponentDescription: 'Press DELETE to remove',
  ariaDropZoneColumnValueItemDescription: 'Press ENTER to change the aggregation type',
  ariaDropZoneColumnGroupItemDescription: 'Press ENTER to sort',
  // used for aggregate drop zone, format: {aggregation}{ariaDropZoneColumnComponentAggFuncSeperator}{column name}
  ariaDropZoneColumnComponentAggFuncSeperator: ' of ',
  ariaDropZoneColumnComponentSortAscending: 'ascending',
  ariaDropZoneColumnComponentSortDescending: 'descending',

  // ARIA Labels for Dialogs
  ariaLabelColumnMenu: 'Column Menu',
  ariaLabelCellEditor: 'Cell Editor',
  ariaLabelDialog: 'Dialog',
  ariaLabelSelectField: 'Select Field',
  ariaLabelTooltip: 'Tooltip',
  ariaLabelContextMenu: 'Context Menu',
  ariaLabelSubMenu: 'SubMenu',
  ariaLabelAggregationFunction: 'Aggregation Function',

  // Number Format (Status Bar, Pagination Panel)
  thousandSeparator: ',',
  decimalSeparator: '.'
}