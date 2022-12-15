// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { TranslateService } from "@ngx-translate/core";

export const environment = {
  production: false,
  basePath: 'https://vm-portalmmg.sistemapiemonte.it/collector/modules/ws/sangue/',
  currentLanguage: 'it',
};

export interface AreYouSureData {
  id: string;
}

export interface Product {
  id: string;
  cod: string;
  des: string;
  ord: string;
  unita: number;
  confezionamento: string;
  multiplo_confezionamento: number;
  multiplo_imballo: number;
  attivo: boolean;
  extra: boolean;
  min_ord: number;
  valido_da: string;
  valido_a: string;
}

export interface Forecast {
  id: string;
  anno: number;
  username: string;
  id_prd: string;
  qta: number;
  note: string;
  qta_approvata: number;
  costo_unitario: number;
}

export interface ForecastGridRowData {
  id: string;
  anno: number;
  username: string,
  full_username: string;
  id_prd: string;
  product_name: string;
  qta: number;
  note: string;
  qta_approvata: number;
  costo_unitario: number;
}

export interface User {
  id: string;
  username: string;
  client: string;
}

//
export interface Order {
  id: string;
  anno: number;
  username: string;
  d_ordine: string; //data di piazzamento dell'ordine
  n_ordine: number; //numero dell'ordine
  b_urgente: boolean;
  b_extra: boolean; //ordine in più rispetto a quello dell'anno corrente
  b_validato: boolean;
  d_validato: string; //data di validazione dell'ordine
  note: string;
}

export interface OrderGridRowData {
  id: string;
  anno: number;
  username: string;
  full_username: string; //per permettere di filtrare sullo username (client)
  d_ordine: string;
  n_ordine: number;
  b_urgente: boolean;
  b_extra: boolean;
  b_validato: boolean;
  d_validato: string;
  note: string;
  isRowLocked: boolean;
}

export interface OrderRow {
  id: string;
  id_ordine: string;          //identificativo dell'ordine di cui fa parte
  n_riga: number;             //numero della riga?
  id_prd: string;             //id del prodotto che fa parte della riga di quest'ordine
  username: string;           //id dell'utente che ha piazzato l'ordine
  qta: number;                //quante copie del prodotto sono state ordinate
  motivazione: string;        //perchè vengono ordinate così tante copie
  qta_validata: number; //quante copie del prodotto vengono concesse
  note: string;
}

/**
 * 
 */
export interface OrderRowGridRowData {
  id: string;
  id_ordine: string;
  n_riga: number;
  product_name: string;
  full_username: string;
  qta: number;
  qta_validata: number;
  note: string;
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
