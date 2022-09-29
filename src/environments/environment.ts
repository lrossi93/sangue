// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  basePath: 'https://vm-portalmmg.sistemapiemonte.it/collector/modules/ws/sangue/'
};

export interface AreYouSureData {
  id: string;
}

export interface Product {
  id: string;
  cod: string;
  des: string;
  unita: number;
  confezionamento: string;
  multiplo_confezionamento: number;
  multiplo_imballo: number;
  attivo: boolean;
  extra: boolean;
  min_ord: number;
  valido_da: string;
  valido_a: string;
  isSubmitted: boolean;
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

export interface User {
  id: string;
  username: string;
  client: string;
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
