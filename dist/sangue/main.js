"use strict";
(self["webpackChunksangue"] = self["webpackChunksangue"] || []).push([["main"],{

/***/ 7858:
/*!********************************************************!*\
  !*** ./src/app/add-forecast/add-forecast.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddForecastComponent": () => (/* binding */ AddForecastComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
















function AddForecastComponent_mat_form_field_9_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSelectionChange", function AddForecastComponent_mat_form_field_9_mat_option_5_Template_mat_option_onSelectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.onUserSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const optionU_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", optionU_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", optionU_r8, " ");
  }
}
function AddForecastComponent_mat_form_field_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-autocomplete", null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AddForecastComponent_mat_form_field_9_mat_option_5_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, "User"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.userFormControl)("matAutocomplete", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, ctx_r0.filteredUsers));
  }
}
function AddForecastComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSelectionChange", function AddForecastComponent_mat_option_15_Template_mat_option_onSelectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.onProductSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const optionP_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", optionP_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", optionP_r11, " ");
  }
}
function AddForecastComponent_mat_form_field_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "Approved quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r3.qta_approvata);
  }
}
function AddForecastComponent_mat_form_field_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "Cost per unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r4.costo_unitario);
  }
}
function AddForecastComponent_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Some compulsory fields are either empty or invalid"), "! ");
  }
}
class AddForecastComponent {
  constructor(data, loginService, dialogRef, _builder) {
    this.data = data;
    this.dialogRef = dialogRef;
    this._builder = _builder;
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'anag.php';
    this.username = "";
    this.id_prd = "";
    this.isSubmitted = false;
    //BEGIN: autocomplete - users
    this.users = [];
    this.userNames = [];
    //END: autocomplete - users
    //BEGIN: autocomplete - products
    this.products = [];
    this.productNames = [];
    //END: autocomplete - products
    this.isBadForecast = false;
    this.loginService = loginService;
    this.anno = _builder.control(new Date().getFullYear(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
    //if ASL Cliente, set values of qta_approvata and costo_unitario
    if (loginService.getUserCode() == "210") {
      this.userFormControl = _builder.control(loginService.getUsername(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
      this.qta_approvata = _builder.control("in attesa", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
      this.costo_unitario = _builder.control("in attesa", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
      this.username = loginService.getUsername();
    }
    //else, if ASL Novara, set those values to 0 and pick list of users
    else if (loginService.getUserCode() == "220") {
      this.userFormControl = _builder.control(this.userNames[0], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
      this.qta_approvata = _builder.control(0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
      this.costo_unitario = _builder.control(0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
    }
    this.productFormControl = _builder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
    this.qta = _builder.control(0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
    this.note = _builder.control('');
  }
  ngOnInit() {
    //general onInit settings
    this.getProductNames();
    this.products = this.data.products;
    //specific user settings
    //if(this.loginService.getUserCode() == "210"){
    this.getUserNames();
    this.users = this.data.users;
    console.log(this.userFormControl.value);
    console.log(this.users);
    //}
    //else if(this.loginService.getUserCode() == "220"){
    //  this.getUserNames();
    //  this.users = this.data.users;
    //}
    //filter input for users
    this.filteredUsers = this.userFormControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(value => this._filterUsers(value || '')));
    //filter input for products
    this.filteredProducts = this.productFormControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(value => this._filterProducts(value || '')));
  }
  onSubmit() {
    if (!this.invalidFields()) {
      this.isSubmitted = true;
      this.dialogRef.close({
        anno: this.anno.value,
        username: this.username,
        id_prd: this.id_prd,
        qta: this.qta.value,
        note: this.note.value,
        qta_approvata: this.qta_approvata.value,
        costo_unitario: this.costo_unitario.value,
        isSubmitted: this.isSubmitted
      });
      this.isBadForecast = true;
      return;
    }
    this.isBadForecast = true;
  }
  invalidFields() {
    //sangueaslno
    if (this.loginService.getUserCode() == "220") {
      if (this.anno.value == "") {
        console.log(1);
        return true;
      }
      if (this.username == "") {
        console.log(2);
        return true;
      }
      if (this.id_prd == "") {
        console.log(3);
        return true;
      }
      if (this.qta.value == 0) {
        console.log(4);
        return true;
      }
      if (this.qta.value < 0) {
        console.log(5);
        return true;
      }
      if (this.qta.value == null) {
        console.log(5.1);
        return true;
      }
      if (this.qta.value == "") {
        console.log(6);
        return true;
      }
      if (this.qta_approvata.value == "") {
        console.log(7);
        return true;
      }
      if (this.qta_approvata.value < 0) {
        console.log(8);
        return true;
      }
      if (this.qta_approvata.value == null) {
        console.log(8.1);
        return true;
      }
      if (this.costo_unitario.value == "") {
        console.log(9);
        return true;
      }
      if (this.costo_unitario.value < 0) {
        console.log(10);
        return true;
      }
      if (this.costo_unitario.value == null) {
        console.log(10.1);
        return true;
      }
      if (!this.isAmongUsers(this.userFormControl.value)) {
        console.log(11);
        return true;
      }
      if (!this.isAmongProducts(this.productFormControl.value)) {
        console.log(12);
        return true;
      }
    }
    //sangueasl
    if (this.loginService.getUserCode() == "210") {
      if (this.anno.value == "") {
        console.log(1);
        return true;
      }
      if (this.id_prd == "") {
        console.log(3);
        return true;
      }
      if (this.qta.value == 0) {
        console.log(4);
        return true;
      }
      if (this.qta.value < 0) {
        console.log(5);
        return true;
      }
      if (this.qta.value == "") {
        console.log(6);
        return true;
      }
      if (this.qta.value == null) {
        console.log(6.1);
        return true;
      }
      if (!this.isAmongProducts(this.productFormControl.value)) {
        console.log(12);
        return true;
      }
    }
    return false;
  }
  //BEGIN functions for autocomplete - USERS
  _filterUsers(value) {
    const filterValue = value.toLowerCase();
    return this.userNames.filter(option => option.toLowerCase().includes(filterValue));
  }
  getUserId(event) {
    for (let i = 0; i < this.users.length; ++i) {
      if (this.users[i].client == event.source.value) {
        return this.users[i].id;
      }
    }
  }
  getUserName(id) {
    for (let i = 0; i < this.users.length; ++i) {
      if (this.users[i].id == id) {
        return this.users[i].client;
      }
    }
    return null;
  }
  getUserNames() {
    for (let i = 0; i < this.data.users.length; ++i) {
      this.userNames.push(this.data.users[i].client);
    }
  }
  onUserSelected(event) {
    if (event.source._selected) {
      this.username = this.getUserId(event);
    }
  }
  isAmongUsers(inputValue) {
    console.log(this.userFormControl.value);
    for (var i = 0; i < this.userNames.length; ++i) {
      if (inputValue == this.userNames[i]) {
        return true;
      }
    }
    return false;
  }
  //END functions for autocomplete - USERS
  //BEGIN functions for autocomplete - PRODUCTS
  _filterProducts(value) {
    const filterValue = value.toLowerCase();
    return this.productNames.filter(option => option.toLowerCase().includes(filterValue));
  }
  getProductId(event) {
    for (let i = 0; i < this.products.length; ++i) {
      if (this.products[i].des == event.source.value) {
        return this.products[i].id;
      }
    }
  }
  getProductNames() {
    for (let i = 0; i < this.data.products.length; ++i) {
      this.productNames.push(this.data.products[i].des);
    }
  }
  onProductSelected(event) {
    if (event.source._selected) {
      this.id_prd = this.getProductId(event);
    }
  }
  isAmongProducts(inputValue) {
    for (var i = 0; i < this.productNames.length; ++i) {
      if (inputValue == this.productNames[i]) {
        return true;
      }
    }
    return false;
  }
}
AddForecastComponent.ɵfac = function AddForecastComponent_Factory(t) {
  return new (t || AddForecastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder));
};
AddForecastComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AddForecastComponent,
  selectors: [["app-add-forecast"]],
  decls: 36,
  vars: 33,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["type", "number", "matInput", "", 3, "placeholder", "formControl"], [4, "ngIf"], ["type", "text", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["matInput", "", 3, "placeholder", "formControl"], ["align", "center", "style", "color: red;", 4, "ngIf"], ["mat-dialog-actions", "", "align", "center"], ["mat-mini-fab", "", "color", "primary", 3, "matTooltip", "click"], [1, "material-icons"], ["mat-mini-fab", "", "mat-dialog-close", "", "color", "accent", 3, "matTooltip"], [3, "value", "onSelectionChange"], ["align", "center", 2, "color", "red"]],
  template: function AddForecastComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1)(5, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AddForecastComponent_mat_form_field_9_Template, 7, 8, "mat-form-field", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-autocomplete", null, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AddForecastComponent_mat_option_15_Template, 2, 2, "mat-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AddForecastComponent_mat_form_field_20_Template, 3, 4, "mat-form-field", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AddForecastComponent_mat_form_field_21_Template, 3, 4, "mat-form-field", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "textarea", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AddForecastComponent_p_25_Template, 3, 3, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddForecastComponent_Template_button_click_28_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "check");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 17, "Add a new forecast"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 19, "Year"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.anno);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 21, "Product"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.productFormControl)("matAutocomplete", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 23, ctx.filteredProducts));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 25, "Quantity"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.qta);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 27, "Notes"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.note);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isBadForecast);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 29, "Submit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 31, "Cancel"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: ["mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1mb3JlY2FzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6ImFkZC1mb3JlY2FzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
});
AddForecastComponent.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AddForecastComponent,
  factory: AddForecastComponent.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1244:
/*!**************************************************************!*\
  !*** ./src/app/add-loan-dialog/add-loan-dialog.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddLoanDialogComponent": () => (/* binding */ AddLoanDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
















function AddLoanDialogComponent_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function AddLoanDialogComponent_mat_option_12_Template_mat_option_onSelectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onUserSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r7, " ");
  }
}
function AddLoanDialogComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const year_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", year_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r10);
  }
}
function AddLoanDialogComponent_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", month_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](month_r11);
  }
}
function AddLoanDialogComponent_mat_option_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function AddLoanDialogComponent_mat_option_40_Template_mat_option_onSelectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onProductSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const optionP_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", optionP_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", optionP_r12, " ");
  }
}
class AddLoanDialogComponent {
  constructor(data, _builder, thisDialogRef) {
    this.data = data;
    this._builder = _builder;
    this.thisDialogRef = thisDialogRef;
    this.yearsArray = [];
    this.monthsArray = [];
    //BEGIN: autocomplete - users
    this.users = [];
    this.userNames = [];
    this.products = [];
    this.productNames = [];
    //END: autocomplete - products
    this.forecasts = [];
    this.users = this.data.users;
    this.getUserNames();
    this.products = this.data.products;
    this.getProductNames();
    this.forecasts = this.data.forecasts;
    let date = new Date();
    this.anno = _builder.control(new Date().getFullYear().toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required);
    this.userFormControl = _builder.control(this.userNames[0], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required);
    this.productsFormControl = _builder.control(this.productNames[0], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required);
    this.username = localStorage.getItem('sangue_username'); //colui che ha effettuato la richiesta di prestito
    this.d_ordine = _builder.control(new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required);
    this.n_ordine = _builder.control(0);
    this.b_urgente = _builder.control(false);
    this.b_extra = _builder.control(false);
    this.b_validato = _builder.control(false);
    this.d_validato = _builder.control("");
    this.n_ddt = _builder.control(0);
    this.d_ddt = _builder.control(new Date());
    this.note = _builder.control("");
    this.n_ddt = _builder.control(0);
    this.d_ddt = _builder.control("");
    this.d_consegna_prevista = _builder.control("");
    this.note_consegna = _builder.control("");
    this.b_prestito = _builder.control(true);
    this.id_ordine_prestito = _builder.control("");
    this.qta = _builder.control(0);
    this.initMonthsArray(date.getMonth() + 1); //+1 because months are counted from 0
    this.initYearsArray(date.getFullYear(), date.getMonth());
    if (this.yearsArray.length == 2) {
      this.yearFormControl = _builder.control(this.yearsArray[1], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required);
      this.monthFormControl = _builder.control(this.monthsArray[1], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required);
    } else {
      this.yearFormControl = _builder.control(this.yearsArray[0], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required);
      this.monthFormControl = _builder.control(this.monthsArray[1], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required);
    }
  }
  ngOnInit() {
    //filter input for users
    //this.getUserNames();
    this.filteredUsers = this.userFormControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(value => this._filterUsers(value || '')));
    this.filteredProducts = this.productsFormControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(value => this._filterProducts(value || '')));
  }
  onLoanDateChange() {
    console.log("onLoadDateChange");
  }
  initYearsArray(year, month) {
    this.yearsArray = [];
    this.yearsArray.push(year);
    //this.yearsArray.push(year + 1);
    if (month == 12) {
      this.yearsArray.push(year + 1);
    }
  }
  initMonthsArray(month) {
    this.monthsArray = [];
    this.monthsArray.push(month);
    if (month == 12) {
      this.monthsArray.push(1);
    } else {
      this.monthsArray.push(month + 1);
    }
    console.log(this.monthsArray);
  }
  onYearValueChanged(event) {
    console.log(event);
    console.log(this.yearFormControl.value);
    //se viene scelto l'anno successivo, impostare il mese successivo (gennaio anno successivo)
    if (this.yearsArray.length == 2 && this.yearsArray[1].toString() == event.toString()) {
      this.monthFormControl.setValue(this.monthsArray[1]);
    }
    //se viene scelto l'anno precedente, impostare il primo mese (dicembre anno precedente)
    if (this.yearsArray.length == 2 && this.yearsArray[0].toString() == event.toString()) {
      this.monthFormControl.setValue(this.monthsArray[0]);
    }
  }
  onMonthValueChanged(event) {
    console.log(event);
    console.log(this.monthFormControl.value);
    if (this.yearsArray.length == 2) {
      if (parseInt(event.toString()) == 12 && this.monthsArray[0] == 12) {
        this.yearFormControl.setValue(this.yearsArray[0]);
      }
      if (parseInt(event.toString()) == 1 && this.monthsArray[1] == 1) {
        this.yearFormControl.setValue(this.yearsArray[1]);
      }
    }
  }
  assignNewLoanValues() {
    //console.log("this.username: " + this.username);
    this.newLoanReq = {
      id: "",
      anno: new Date(this.d_ordine.value).getFullYear(),
      mese: new Date(this.d_ordine.value).getMonth(),
      b_extra: false,
      b_urgente: false,
      b_validato: false,
      d_ordine: this.getFormattedDate(this.d_ordine.value.toLocaleString('it-IT').split(",", 2)[0]),
      d_validato: "",
      n_ordine: this.n_ordine.value,
      note: this.note.value,
      status: "prestito",
      username: localStorage.getItem("sangue_username"),
      d_consegna_prevista: "",
      n_ddt: "",
      d_ddt: "",
      note_consegna: "",
      b_prestito: true,
      id_ordine_prestito: "",
      username_prestito_da: localStorage.getItem("sangue_username"),
      username_prestito_a: this.username //loan recipient
    };

    this.newLoanRes = {
      id: "",
      anno: new Date(this.d_ordine.value).getFullYear(),
      mese: new Date(this.d_ordine.value).getMonth(),
      b_extra: false,
      b_urgente: false,
      b_validato: false,
      d_ordine: this.getFormattedDate(this.d_ordine.value.toLocaleString('it-IT').split(",", 2)[0]),
      d_validato: "",
      n_ordine: this.n_ordine.value,
      note: this.note.value,
      status: "prestito",
      username: this.username,
      d_consegna_prevista: "",
      n_ddt: "",
      d_ddt: "",
      note_consegna: "",
      b_prestito: true,
      id_ordine_prestito: "",
      username_prestito_da: localStorage.getItem("sangue_username"),
      username_prestito_a: this.username //loan recipient
    };

    this.newLoanRowReq = {
      id: "",
      id_ordine: "",
      n_riga: 1,
      id_prd: this.getProductIdByDes(this.productsFormControl.value),
      username: localStorage.getItem("sangue_username"),
      qta: this.qta.value * -1,
      motivazione: "",
      qta_validata: 0,
      qta_ricevuta: 0,
      note: ""
    };
    this.newLoanRowRes = {
      id: "",
      id_ordine: "",
      n_riga: 1,
      id_prd: this.getProductIdByDes(this.productsFormControl.value),
      username: this.username,
      qta: this.qta.value,
      motivazione: "",
      qta_validata: 0,
      qta_ricevuta: 0,
      note: ""
    };
  }
  onSubmit(event) {
    this.assignNewLoanValues();
    this.logData();
    this.thisDialogRef.close({
      newLoanReq: this.newLoanReq,
      newLoanRes: this.newLoanRes,
      newLoanRowReq: this.newLoanRowReq,
      newLoanRowRes: this.newLoanRowRes,
      isSubmitted: true
    });
  }
  //BEGIN functions for autocomplete - USERS
  _filterUsers(value) {
    const filterValue = value.toLowerCase();
    return this.userNames.filter(option => option.toLowerCase().includes(filterValue));
  }
  getUserId(event) {
    for (let i = 0; i < this.users.length; ++i) {
      if (this.users[i].client == event.source.value) {
        console.log(this.users[i].id);
        return this.users[i].id;
      }
    }
  }
  getUserNames() {
    this.userNames = [];
    for (let i = 0; i < this.users.length; ++i) {
      this.userNames.push(this.users[i].client);
    }
  }
  onUserSelected(event) {
    if (event.source._selected) {
      this.username = this.getUserId(event); //loan recipient
    }
  }
  //END functions for autocomplete - USERS
  //===============================================================================================================
  //BEGIN functions for autocomplete - PRODUCTS
  _filterProducts(value) {
    const filterValue = value.toLowerCase();
    return this.productNames.filter(option => option.toLowerCase().includes(filterValue));
  }
  getProductId(event) {
    for (let i = 0; i < this.products.length; ++i) {
      if (this.products[i].des == event.source.value) {
        return this.products[i].id;
      }
    }
  }
  getProductIdByDes(des) {
    for (let i = 0; i < this.products.length; ++i) {
      if (this.products[i].des == des) {
        return this.products[i].id;
      }
    }
  }
  getProductNames() {
    this.productNames = [];
    for (let i = 0; i < this.products.length; ++i) {
      this.productNames.push(this.products[i].des);
    }
  }
  onProductSelected(event) {
    if (event.source.selected) {
      this.productId = this.getProductId(event);
    }
  }
  //END functions for autocomplete - PRODUCTS
  logData() {
    console.log(this.newLoanReq);
    console.log(this.newLoanRowReq);
    console.log(this.newLoanRes);
    console.log(this.newLoanRowRes);
    console.log("product: " + this.productsFormControl.value);
    console.log("quantity: " + this.qta.value);
  }
  getFormattedDate(date) {
    let splitDate = date.toLocaleString('it-IT').split(",", 2)[0].split("/", 3);
    let day = splitDate[0];
    let month = splitDate[1];
    let year = splitDate[2];
    if (day.length == 1) {
      day = "0" + day;
    }
    if (month.length == 1) {
      month = "0" + month;
    }
    return year + "-" + month + "-" + day;
  }
}
AddLoanDialogComponent.ɵfac = function AddLoanDialogComponent_Factory(t) {
  return new (t || AddLoanDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
};
AddLoanDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AddLoanDialogComponent,
  selectors: [["app-add-loan-dialog"]],
  decls: 57,
  vars: 59,
  consts: [["align", "center"], ["mat-dialog-title", ""], [2, "width", "100%"], ["type", "text", "matInput", "", 2, "width", "100%", 3, "placeholder", "formControl", "matAutocomplete"], ["autoUsers", "matAutocomplete"], ["onchange", "", 3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["matInput", "", 3, "placeholder", "matDatepicker", "value", "formControl", "dateChange"], ["matSuffix", "", 3, "for"], ["pickerOrderDate", ""], [3, "value", "formControl", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], ["autoProducts", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", 3, "placeholder", "formControl"], ["matInput", "", "type", "text", 3, "placeholder", "formControl"], ["mat-dialog-actions", "", "align", "center"], ["mat-mini-fab", "", "color", "primary", 3, "disabled", "matTooltip", "click"], [1, "material-icons"], ["mat-mini-fab", "", "color", "accent", "mat-dialog-close", "true", 3, "matTooltip"], ["onchange", "", 3, "value", "onSelectionChange"], [3, "value"], [3, "value", "onSelectionChange"]],
  template: function AddLoanDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-autocomplete", null, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddLoanDialogComponent_mat_option_12_Template, 2, 2, "mat-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 2)(15, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function AddLoanDialogComponent_Template_input_dateChange_15_listener() {
        return ctx.onLoanDateChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-datepicker-toggle", 7)(18, "mat-datepicker", null, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 2)(21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AddLoanDialogComponent_Template_mat_select_valueChange_24_listener($event) {
        return ctx.onYearValueChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddLoanDialogComponent_mat_option_25_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 2)(27, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AddLoanDialogComponent_Template_mat_select_valueChange_30_listener($event) {
        return ctx.onMonthValueChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddLoanDialogComponent_mat_option_31_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 2)(33, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-autocomplete", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AddLoanDialogComponent_mat_option_40_Template, 2, 2, "mat-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17)(49, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddLoanDialogComponent_Template_button_click_49_listener($event) {
        return ctx.onSubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "check");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 31, "New loan request"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 33, "Details"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 35, "Recipient"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.userFormControl)("matAutocomplete", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 37, ctx.filteredUsers));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 39, "Request date"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r2)("value", ctx.d_ordine.value)("formControl", ctx.d_ordine);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 41, "Reference year"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.yearsArray[0])("formControl", ctx.yearFormControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yearsArray);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 43, "Reference month"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.monthsArray[1])("formControl", ctx.monthFormControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.monthsArray);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 45, "Product"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 47, "Choose a product"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.productsFormControl)("matAutocomplete", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 49, ctx.filteredProducts));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 51, "Quantity"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.qta);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 53, "Notes"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.note);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 55, "Submit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.qta.value <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 57, "Cancel"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbG9hbi1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 2974:
/*!****************************************************************!*\
  !*** ./src/app/add-order-dialog/add-order-dialog.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOrderDialogComponent": () => (/* binding */ AddOrderDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _are_you_sure_order_row_are_you_sure_order_row_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../are-you-sure-order-row/are-you-sure-order-row.component */ 9285);
/* harmony import */ var _edit_order_row_edit_order_row_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-order-row/edit-order-row.component */ 9759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 8699);























function AddOrderDialogComponent_mat_form_field_7_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSelectionChange", function AddOrderDialogComponent_mat_form_field_7_mat_option_5_Template_mat_option_onSelectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.onUserSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r12, " ");
  }
}
function AddOrderDialogComponent_mat_form_field_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field")(1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AddOrderDialogComponent_mat_form_field_7_Template_input_keyup_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.enableSubmit(ctx_r15.userFormControl.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-autocomplete", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AddOrderDialogComponent_mat_form_field_7_mat_option_5_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, "User"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r0.userFormControl)("matAutocomplete", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 6, ctx_r0.filteredUsers));
  }
}
function AddOrderDialogComponent_mat_form_field_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field")(1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateChange", function AddOrderDialogComponent_mat_form_field_8_Template_input_dateChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.onOrderDateChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "mat-datepicker-toggle", 20)(4, "mat-datepicker", null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 7, "Order date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r17)("value", ctx_r1.d_ordine.value)("min", ctx_r1.minDate)("max", ctx_r1.maxDate)("formControl", ctx_r1.d_ordine);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r17);
  }
}
function AddOrderDialogComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const year_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", year_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](year_r20);
  }
}
function AddOrderDialogComponent_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", month_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](month_r21);
  }
}
function AddOrderDialogComponent_mat_form_field_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field")(1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateChange", function AddOrderDialogComponent_mat_form_field_21_Template_input_dateChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.onOrderDateChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "mat-datepicker-toggle", 20)(4, "mat-datepicker", null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 5, "Order date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r22)("value", ctx_r4.d_ordine.value)("formControl", ctx_r4.d_ordine);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r22);
  }
}
function AddOrderDialogComponent_mat_checkbox_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddOrderDialogComponent_mat_checkbox_31_Template_mat_checkbox_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r25.toggleValidato());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Validated"), " ");
  }
}
function AddOrderDialogComponent_mat_form_field_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field")(1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateChange", function AddOrderDialogComponent_mat_form_field_32_Template_input_dateChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.onValidationDateChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "mat-datepicker-toggle", 20)(4, "mat-datepicker", null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 5, "Validation date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r27)("value", ctx_r6.d_validato.value)("formControl", ctx_r6.d_validato);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r27);
  }
}
function AddOrderDialogComponent_p_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "An urgent order requires valid annotations"), ".\n");
  }
}
function AddOrderDialogComponent_mat_card_37_h5_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const orderRow_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "Reason"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", orderRow_r30.motivazione, " ");
  }
}
function AddOrderDialogComponent_mat_card_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 26)(1, "h5")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h5")(7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h5")(12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AddOrderDialogComponent_mat_card_37_h5_16_Template, 5, 4, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "h5")(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h5")(23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 10)(28, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddOrderDialogComponent_mat_card_37_Template_button_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const orderRow_r30 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.openEditOrderRowDialog(orderRow_r30.id, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddOrderDialogComponent_mat_card_37_Template_button_click_32_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const i_r31 = restoredCtx.index;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r36.openAreYouSureOrderRowDialog(i_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const orderRow_r30 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 13, "Product"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r8.productIdToDes(orderRow_r30.id_prd), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 15, "Row number"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", orderRow_r30.n_riga, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 17, "Quantity"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", orderRow_r30.qta, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", orderRow_r30.motivazione != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 19, "Approved quantity"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", orderRow_r30.qta_validata, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 21, "Notes"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", orderRow_r30.note, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 23, "Edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 25, "Delete"));
  }
}
function AddOrderDialogComponent_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddOrderDialogComponent_button_43_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r37.onSubmit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, "Submit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r9.isSubmitEnabled);
  }
}
class AddOrderDialogComponent {
  //END: autocomplete - products
  constructor(data, thisDialogRef, dialog, ordersService, loginService, _builder) {
    this.data = data;
    this.thisDialogRef = thisDialogRef;
    this.ordersService = ordersService;
    this._builder = _builder;
    this.newOrderRows = [];
    this.auxId = 0;
    this.isInputAmongUsers = false;
    this.isAddRowEnabled = false;
    this.isSubmitEnabled = false;
    this.forecasts = [];
    this.currentUserForecasts = [];
    this.orderRows = [];
    this.yearsArray = [];
    this.monthsArray = [];
    //BEGIN: autocomplete - users
    this.users = [];
    this.userNames = [];
    this.products = [];
    this.productNames = [];
    //this.dialogRef = thisDialogRef;
    this.dialog = dialog;
    this.loginService = loginService;
    this.isExtra = data.isExtra == undefined ? false : data.isExtra;
    let date = new Date();
    //creation of formControls from _builder
    this.d_ordine = _builder.control(date, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
    this.n_ordine = _builder.control(0);
    this.b_urgente = _builder.control(false);
    this.b_extra = _builder.control(this.isExtra);
    this.isExtra = this.data.isExtra;
    this.b_validato = _builder.control(false);
    this.d_validato = _builder.control("");
    this.n_ddt = _builder.control(0);
    this.d_ddt = _builder.control("");
    this.note = _builder.control("");
    this.initMonthsArray(date.getMonth() + 1); //+1 because months are counted from 0
    this.initYearsArray(date.getFullYear(), date.getMonth());
    if (this.yearsArray.length == 2) {
      this.yearFormControl = _builder.control(this.yearsArray[1], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
      this.monthFormControl = _builder.control(this.monthsArray[1], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
    } else {
      this.yearFormControl = _builder.control(this.yearsArray[0], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
      this.monthFormControl = _builder.control(this.monthsArray[1], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
    }
    //this.yearFormControl.setValue(this.yearsArray[0]); 
    this.selectedYear = this.yearsArray[0];
    this.selectedMonth = this.monthsArray[1];
    if (loginService.getUserCode() == "210") {
      this.userFormControl = _builder.control(loginService.getUsername(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
    }
    //else, if sangueaslno, pick list of users
    else if (loginService.getUserCode() == "220") {
      this.userFormControl = _builder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
    }
    this.enableSubmit(this.userFormControl.value);
    var auxDate = new Date();
    this.minDate = new Date(auxDate.getFullYear(), auxDate.getMonth(), parseInt(this.data.gg_min));
    this.maxDate = new Date(auxDate.getFullYear(), auxDate.getMonth(), parseInt(this.data.gg_max));
    this.forecasts = data.forecasts;
  }
  ngOnInit() {
    if (this.loginService.getUserCode() == "220") {
      this.users = this.data.users;
    }
    if (this.loginService.getUserCode() == '210') {
      this.filterForecastsByUsername(this.loginService.getUsername());
    }
    this.products = this.data.products;
    //filter input for users
    this.getUserNames();
    this.filteredUsers = this.userFormControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(value => this._filterUsers(value || '')));
  }
  initYearsArray(year, month) {
    this.yearsArray = [];
    this.yearsArray.push(year);
    //this.yearsArray.push(year + 1);
    if (month == 12) {
      this.yearsArray.push(year + 1);
    }
  }
  initMonthsArray(month) {
    this.monthsArray = [];
    this.monthsArray.push(month);
    if (month == 12) {
      this.monthsArray.push(1);
    } else {
      this.monthsArray.push(month + 1);
    }
    console.log(this.monthsArray);
  }
  onYearValueChanged(event) {
    console.log(event);
    console.log(this.yearFormControl.value);
    //se viene scelto l'anno successivo, impostare il mese successivo (gennaio anno successivo)
    if (this.yearsArray.length == 2 && this.yearsArray[1].toString() == event.toString()) {
      this.monthFormControl.setValue(this.monthsArray[1]);
    }
    //se viene scelto l'anno precedente, impostare il primo mese (dicembre anno precedente)
    if (this.yearsArray.length == 2 && this.yearsArray[0].toString() == event.toString()) {
      this.monthFormControl.setValue(this.monthsArray[0]);
    }
  }
  onMonthValueChanged(event) {
    console.log(event);
    console.log(this.monthFormControl.value);
    if (this.yearsArray.length == 2) {
      if (parseInt(event.toString()) == 12 && this.monthsArray[0] == 12) {
        this.yearFormControl.setValue(this.yearsArray[0]);
      }
      if (parseInt(event.toString()) == 1 && this.monthsArray[1] == 1) {
        this.yearFormControl.setValue(this.yearsArray[1]);
      }
    }
  }
  pushOrderRow(newOrderRow) {
    this.newOrderRows.push(newOrderRow);
  }
  rmOrderRowByIndex(index) {
    this.newOrderRows.splice(index, 1);
  }
  assignNewOrderValues() {
    this.newOrder = {
      id: "",
      anno: this.yearFormControl.value,
      mese: this.monthFormControl.value,
      b_extra: this.b_extra.value,
      b_urgente: this.b_urgente.value,
      b_validato: this.b_validato.value,
      d_ordine: this.formatDate(this.d_ordine.value.toLocaleString('it-IT').split(",", 2)[0]),
      d_validato: this.formatDate(this.d_validato.value.toLocaleString('it-IT').split(",", 2)[0]),
      n_ordine: this.n_ordine.value,
      note: this.note.value,
      status: "",
      username: this.username,
      d_consegna_prevista: "0000-00-00",
      n_ddt: this.n_ddt.value,
      d_ddt: this.formatDate(this.d_ddt.value.toLocaleString('it-IT').split(",", 2)[0]),
      note_consegna: "",
      b_prestito: false,
      id_ordine_prestito: "",
      username_prestito_da: "",
      username_prestito_a: ""
    };
  }
  formatDate(date) {
    if (date == "") return "";
    let formattedDate;
    let splittedDate = date.split("/", 3);
    let day = splittedDate[0];
    let month = splittedDate[1];
    let year = splittedDate[2];
    //prepare date to be saved on db
    if (day.length == 1) {
      day = "0" + day;
    }
    if (month.length == 1) {
      month = "0" + month;
    }
    formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
  }
  deleteOrderRow(id) {
    for (let i = 0; i < this.newOrderRows.length; ++i) {
      if (this.newOrderRows[i].id == id) {
        this.newOrderRows.splice(i, 1);
      }
    }
  }
  //===================================================================================================================
  //checkbox toggles
  toggleUrgente() {
    this.b_urgente.value ? this.b_urgente = this._builder.control(false) : this.b_urgente = this._builder.control(true);
  }
  toggleExtra() {
    this.b_extra.value ? this.b_extra = this._builder.control(false) : this.b_extra = this._builder.control(true);
    console.log(this.b_extra.value);
  }
  toggleValidato() {
    if (this.b_validato.value) {
      this.b_validato = this._builder.control(false);
      this.d_validato = this._builder.control("");
    } else {
      this.b_validato = this._builder.control(true);
      this.d_validato = this._builder.control(new Date());
    }
  }
  //===================================================================================================================
  //if needed...
  onOrderDateChange(event) {
    console.log(this.d_ordine.value);
  }
  //if needed...
  onValidationDateChange(event) {
    console.log(this.d_validato.value);
  }
  //if needed...
  onDDTDateChange(event) {
    console.log(this.d_ddt.value);
  }
  onSubmit(event) {
    //TODO: check fields
    this.assignNewOrderValues();
    console.log(this.newOrder);
    let isSubmitted = true;
    for (var i = 0; i < this.newOrderRows.length; ++i) {
      this.newOrderRows[i].username = this.newOrder.username;
    }
    if (this.newOrder.d_validato == "") {
      this.newOrder.d_validato = "0000-00-00";
    }
    if (this.b_urgente.value) {
      alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLanguage == 'it' ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.it.UrgentOrderAlert : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.en.UrgentOrderAlert);
    }
    this.thisDialogRef.close({
      newOrder: this.newOrder,
      newOrderRows: this.newOrderRows,
      isSubmitted: isSubmitted
    });
    return;
  }
  //===================================================================================================================
  //BEGIN functions for autocomplete - USERS
  _filterUsers(value) {
    const filterValue = value.toLowerCase();
    return this.userNames.filter(option => option.toLowerCase().includes(filterValue));
  }
  getUserId(event) {
    for (let i = 0; i < this.users.length; ++i) {
      if (this.users[i].client == event.source.value) {
        return this.users[i].id;
      }
    }
  }
  getUserNames() {
    for (let i = 0; i < this.data.users.length; ++i) {
      this.userNames.push(this.data.users[i].client);
    }
  }
  onUserSelected(event) {
    this.isInputAmongUsers = false;
    if (event.source._selected) {
      this.username = this.getUserId(event);
      this.enableSubmit(event.source.value);
      this.filterForecastsByUsername(this.username);
    }
  }
  //END functions for autocomplete - USERS
  productIdToDes(id) {
    for (var i = 0; i < this.products.length; ++i) {
      if (id == this.products[i].id) {
        return this.products[i].des;
      }
    }
    return "";
  }
  usernameToClient(username) {
    for (var i = 0; i < this.users.length; ++i) {
      if (username == this.users[i].username) {
        return this.users[i].client;
      }
    }
    return "";
  }
  getOrderRowById(id) {
    for (let i = 0; i < this.newOrderRows.length; ++i) {
      if (id == this.newOrderRows[i].id) {
        console.log(this.newOrderRows[i]);
        return this.newOrderRows[i];
      }
    }
    return undefined;
  }
  deleteOrderRowByIndex(index) {
    this.newOrderRows.splice(index, 1);
  }
  //works both for adding and for editing an orderRow
  //here id is not the real id but the index in the newOrderRows array!
  openEditOrderRowDialog(id, isAdding) {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    //dialogConfig.autoFocus = true;
    console.log("OpenEditOrderRowDialog: ID = " + id);
    //if id is not specified, create a new orderRow
    if (id == "") {
      let newOrderRow = {
        id: "",
        id_ordine: "",
        username: "",
        n_riga: 0,
        id_prd: "",
        qta: 0,
        motivazione: "",
        qta_validata: 0,
        qta_ricevuta: -1,
        note: ""
      };
      console.log("OpenEditOrderRowDialog: ID = " + id);
      dialogConfig.data = {
        year: this.data.year,
        orderRow: newOrderRow,
        products: this.products,
        forecasts: this.currentUserForecasts,
        orderRows: this.newOrderRows,
        isUrgent: this.b_urgente.value
      };
      console.log("OpenEditOrderRowDialog: ID = " + id);
    }
    //id is specified, so edit existing orderRow
    else {
      console.log("OpenEditOrderRowDialog: ID = " + id);
      let editedOrderRow = this.getOrderRowById(id);
      console.log(editedOrderRow);
      dialogConfig.data = {
        orderRow: editedOrderRow,
        products: this.products,
        forecasts: this.currentUserForecasts,
        isUrgent: this.b_urgente.value
      };
    }
    console.log("OpenEditOrderRowDialog: ID = " + id);
    this.dialogRef = this.dialog.open(_edit_order_row_edit_order_row_component__WEBPACK_IMPORTED_MODULE_2__.EditOrderRowComponent, dialogConfig);
    console.log("OpenEditOrderRowDialog: ID = " + id);
    this.dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && result.isSubmitted) {
        console.log(result);
        let newOrderRow = result.orderRow;
        //se l'id della orderRow è vuoto, allora la sto aggiungendo, quindi la devo pushare nell'array
        if (newOrderRow.id == "") {
          newOrderRow.id = this.newOrderRows.length.toString();
          console.log(newOrderRow);
          this.newOrderRows.push(newOrderRow);
        }
      }
    });
  }
  openAreYouSureOrderRowDialog(id) {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    //dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: id
    };
    this.dialogRef = this.dialog.open(_are_you_sure_order_row_are_you_sure_order_row_component__WEBPACK_IMPORTED_MODULE_1__.AreYouSureOrderRowComponent, dialogConfig);
    this.dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined && result.isSubmitted) {
        this.deleteOrderRowByIndex(id);
      }
    });
  }
  isAmongUsers(inputValue) {
    for (var i = 0; i < this.userNames.length; ++i) {
      if (inputValue == this.userNames[i]) {
        return true;
      }
    }
    return false;
  }
  enableSubmit(selectedUser) {
    if (this.loginService.getUserCode() == '220') {
      this.isAddRowEnabled = false;
      this.isSubmitEnabled = false;
      if (this.isAmongUsers(selectedUser)) {
        this.isAddRowEnabled = true;
        this.isSubmitEnabled = true;
      }
    }
    if (this.loginService.getUserCode() == '210') {
      this.isAddRowEnabled = true;
      this.isSubmitEnabled = true;
    }
  }
  filterForecastsByUsername(username) {
    this.currentUserForecasts = [];
    for (var i = 0; i < this.forecasts.length; ++i) {
      if (this.forecasts[i].username == username) {
        this.currentUserForecasts.push(this.forecasts[i]);
      }
    }
    //console.log(this.currentUserForecasts);
  }
}

AddOrderDialogComponent.ɵfac = function AddOrderDialogComponent_Factory(t) {
  return new (t || AddOrderDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder));
};
AddOrderDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AddOrderDialogComponent,
  selectors: [["app-add-order-dialog"]],
  decls: 48,
  vars: 43,
  consts: [["align", "center"], ["mat-dialog-title", ""], [4, "ngIf"], [3, "value", "formControl", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["labelPosition", "before", 3, "click"], ["labelPosition", "before", 3, "click", 4, "ngIf"], ["matInput", "", "type", "text", 3, "placeholder", "formControl"], ["style", "color: red;", 4, "ngIf"], ["style", "margin-bottom: 20px;", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", "align", "center"], ["mat-mini-fab", "", "color", "basic", 3, "matTooltip", "disabled", "click"], [1, "material-icons"], ["mat-mini-fab", "", "color", "primary", 3, "matTooltip", "disabled", "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "accent", "mat-dialog-close", "true", 3, "matTooltip"], ["type", "text", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete", "keyup"], ["auto", "matAutocomplete"], ["onchange", "", 3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["onchange", "", 3, "value", "onSelectionChange"], ["matInput", "", 3, "placeholder", "matDatepicker", "value", "min", "max", "formControl", "dateChange"], ["matSuffix", "", 3, "for"], ["pickerOrderDate", ""], [3, "value"], ["matInput", "", 3, "placeholder", "matDatepicker", "value", "formControl", "dateChange"], ["picker", ""], [2, "color", "red"], [2, "margin-bottom", "20px"], ["mat-mini-fab", "", "color", "primary", 2, "margin", "5px", 3, "matTooltip", "click"], ["mat-mini-fab", "", "color", "warn", 2, "margin", "5px", 3, "matTooltip", "click"], ["mat-mini-fab", "", "color", "primary", 3, "matTooltip", "disabled", "click"]],
  template: function AddOrderDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AddOrderDialogComponent_mat_form_field_7_Template, 7, 8, "mat-form-field", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddOrderDialogComponent_mat_form_field_8_Template, 6, 9, "mat-form-field", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function AddOrderDialogComponent_Template_mat_select_valueChange_13_listener($event) {
        return ctx.onYearValueChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AddOrderDialogComponent_mat_option_14_Template, 2, 2, "mat-option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field")(16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function AddOrderDialogComponent_Template_mat_select_valueChange_19_listener($event) {
        return ctx.onMonthValueChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AddOrderDialogComponent_mat_option_20_Template, 2, 2, "mat-option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddOrderDialogComponent_mat_form_field_21_Template, 6, 7, "mat-form-field", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p")(23, "mat-checkbox", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddOrderDialogComponent_Template_mat_checkbox_click_23_listener() {
        return ctx.toggleUrgente();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "p")(27, "mat-checkbox", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddOrderDialogComponent_Template_mat_checkbox_click_27_listener() {
        return ctx.toggleExtra();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, AddOrderDialogComponent_mat_checkbox_31_Template, 3, 3, "mat-checkbox", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, AddOrderDialogComponent_mat_form_field_32_Template, 6, 7, "mat-form-field", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, AddOrderDialogComponent_p_36_Template, 3, 3, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, AddOrderDialogComponent_mat_card_37_Template, 36, 27, "mat-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 10)(39, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddOrderDialogComponent_Template_button_click_39_listener() {
        return ctx.openEditOrderRowDialog("", true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, AddOrderDialogComponent_button_43_Template, 4, 4, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 25, "New order"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 27, "Details"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "210");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 29, "Reference year"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.yearsArray[0])("formControl", ctx.yearFormControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.yearsArray);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 31, "Reference month"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.monthsArray[1])("formControl", ctx.monthFormControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.monthsArray);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 33, "Urgent"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 35, "Extra"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220" && ctx.b_validato.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 37, "Notes"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.note);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.b_urgente.value == true && ctx.note.value == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.newOrderRows);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 39, "Add row"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.isAddRowEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newOrderRows.length > 0 && (ctx.b_urgente.value == true && ctx.note.value != "" || ctx.b_urgente.value == false));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 41, "Cancel"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckbox, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerToggle, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCard, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe],
  styles: ["mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1vcmRlci1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJhZGQtb3JkZXItZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"]
});

/***/ }),

/***/ 8120:
/*!**********************************************************!*\
  !*** ./src/app/add-order-row/add-order-row.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddOrderRowComponent": () => (/* binding */ AddOrderRowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AddOrderRowComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddOrderRowComponent.ɵfac = function AddOrderRowComponent_Factory(t) { return new (t || AddOrderRowComponent)(); };
AddOrderRowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddOrderRowComponent, selectors: [["app-add-order-row"]], decls: 2, vars: 0, template: function AddOrderRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-order-row works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtb3JkZXItcm93LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6931:
/*!******************************************************!*\
  !*** ./src/app/add-product/add-product.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductComponent": () => (/* binding */ AddProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8699);











class AddProductComponent {
    constructor(dialogRef, _builder) {
        this.dialogRef = dialogRef;
        this._builder = _builder;
        this.isSubmitted = false;
        //DateRangePicker
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required),
        });
        //formBuilder configuration
        this.cod = _builder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required);
        this.des = _builder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required);
        this.ord = _builder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required);
        this.unita = _builder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required);
        this.confezionamento = _builder.control('');
        this.multiplo_confezionamento = _builder.control('');
        this.multiplo_imballo = _builder.control('');
        this.attivo = _builder.control(false);
        this.extra = _builder.control(false);
        this.min_ord = _builder.control('');
        this.valido_da = _builder.control('');
        this.valido_a = _builder.control('');
    }
    onSubmit() {
        this.isSubmitted = true;
        let newProduct = {
            id: "-1",
            cod: this.cod.value,
            des: this.des.value,
            ord: this.ord.value,
            unita: this.unita.value,
            confezionamento: this.confezionamento.value,
            multiplo_confezionamento: this.multiplo_confezionamento.value,
            multiplo_imballo: this.multiplo_imballo.value,
            attivo: this.attivo.value ? 1 : 0,
            extra: this.extra.value ? 1 : 0,
            min_ord: this.min_ord.value,
            valido_da: this.formatDate(this.range.controls['start'].value.toLocaleString('it-IT').split(",", 2)[0]),
            valido_a: this.formatDate(this.range.controls['end'].value.toLocaleString('it-IT').split(",", 2)[0])
        };
        this.dialogRef.close({ newProduct: newProduct, isSubmitted: this.isSubmitted });
    }
    //date: full value of the date Y-M-D in string format
    formatDate(date) {
        if (date == "")
            return "";
        let formattedDate;
        let splittedDate = date.split("/", 3);
        let day = splittedDate[0];
        let month = splittedDate[1];
        let year = splittedDate[2];
        //prepare date to be saved on db
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        formattedDate = year + "-" + month + "-" + day;
        return formattedDate;
    }
    toggleAttivo() {
        this.attivo.value ? this.attivo = this._builder.control(false) : this.attivo = this._builder.control(true);
    }
    toggleExtra() {
        this.extra.value ? this.extra = this._builder.control(false) : this.extra = this._builder.control(true);
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormBuilder)); };
AddProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 64, vars: 65, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["type", "number", "matInput", "", 3, "placeholder", "formControl"], ["type", "text", "matInput", "", 3, "placeholder", "formControl"], ["labelPosition", "before", 3, "click"], ["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", 3, "placeholder"], ["matEndDate", "", "formControlName", "end", 3, "placeholder"], ["matSuffix", "", 3, "for"], ["picker", ""], ["mat-dialog-actions", "", "align", "center"], ["mat-mini-fab", "", "color", "primary", 3, "matTooltip", "click"], [1, "material-icons"], ["mat-mini-fab", "", "mat-dialog-close", "", "color", "accent", 3, "matTooltip"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_mat_checkbox_click_30_listener() { return ctx.toggleAttivo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_mat_checkbox_click_33_listener() { return ctx.toggleExtra(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-form-field", 5)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-date-range-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "mat-datepicker-toggle", 9)(53, "mat-date-range-picker", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 11)(56, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_56_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 29, "Add a new product"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 31, "Code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.cod);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 33, "Description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.des);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 35, "Sorting"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.ord);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 37, "Units"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.unita);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 39, "Packaging"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.confezionamento);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 41, "Multiple Packaging"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.multiplo_confezionamento);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 43, "Multiple Packing"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.multiplo_imballo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 45, "Attivo"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 47, "Extra"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 49, "Minimum Order"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.min_ord);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 51, "Validity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 53, "Valid from"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 55, "Valid through"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 57, "Valid from"), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](51, 59, "Valid through"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](57, 61, "Submit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 63, "Cancel"));
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckbox, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDateRangePicker, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["mat-form-field[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
AddProductComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AddProductComponent, factory: AddProductComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forecast_report_forecast_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecast-report/forecast-report.component */ 724);
/* harmony import */ var _forecast_forecast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast/forecast.component */ 5206);
/* harmony import */ var _loans_loans_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loans/loans.component */ 3218);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _order_resume_order_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-resume/order-resume.component */ 7191);
/* harmony import */ var _orderable_period_orderable_period_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderable-period/orderable-period.component */ 2343);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders/orders.component */ 8686);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _pharma_registry_pharma_registry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pharma-registry/pharma-registry.component */ 3362);
/* harmony import */ var _supplies_supplies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./supplies/supplies.component */ 6439);
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./welcome/welcome.component */ 3537);
/* harmony import */ var _login_gateway_login_gateway_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login-gateway/login-gateway.component */ 506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);















const routes = [
    { path: 'login', redirectTo: '' },
    { path: 'welcome', redirectTo: '', pathMatch: 'full' },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent },
    { path: 'home', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__.WelcomeComponent },
    { path: 'pharma-registry', component: _pharma_registry_pharma_registry_component__WEBPACK_IMPORTED_MODULE_8__.PharmaRegistryComponent },
    { path: 'forecast', component: _forecast_forecast_component__WEBPACK_IMPORTED_MODULE_1__.ForecastComponent },
    { path: 'forecast-report', component: _forecast_report_forecast_report_component__WEBPACK_IMPORTED_MODULE_0__.ForecastReportComponent },
    { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__.OrdersComponent, },
    { path: 'orders/resume', component: _order_resume_order_resume_component__WEBPACK_IMPORTED_MODULE_4__.OrderResumeComponent },
    { path: 'order-period', component: _orderable_period_orderable_period_component__WEBPACK_IMPORTED_MODULE_5__.OrderablePeriodComponent },
    { path: 'supplies', component: _supplies_supplies_component__WEBPACK_IMPORTED_MODULE_9__.SuppliesComponent },
    { path: 'loans', component: _loans_loans_component__WEBPACK_IMPORTED_MODULE_2__.LoansComponent },
    { path: 'login_gateway', component: _login_gateway_login_gateway_component__WEBPACK_IMPORTED_MODULE_11__.LoginGatewayComponent },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__.PageNotFoundComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ 5619);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ 474);
/* harmony import */ var _version_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./version.service */ 8370);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 8589);










function AppComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "Menu"), " ");
} }
const _c0 = function () { return ["/home"]; };
function AppComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "Home"), " ");
} }
const _c1 = function () { return ["/pharma-registry"]; };
function AppComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "Registry"), " ");
} }
const _c2 = function () { return ["/supplies"]; };
function AppComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "Supplies"), " ");
} }
const _c3 = function () { return ["/loans"]; };
function AppComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "Loans"), " ");
} }
function AppComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.getManual(ctx_r23.loginService.getUserCode())); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "Manual"), " ");
} }
function AppComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.getManual(ctx_r25.loginService.getUserCode())); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "Manual"), " ");
} }
function AppComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r27.getManual(ctx_r27.loginService.getUserCode())); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "Manual"), " ");
} }
function AppComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.getManual(ctx_r29.loginService.getUserCode())); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "Manual"), " ");
} }
function AppComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "Forecasts"), " ");
} }
const _c4 = function () { return ["/forecast-report"]; };
function AppComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "Reports"), " ");
} }
function AppComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "Orders"), " ");
} }
const _c5 = function () { return ["/order-period"]; };
function AppComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "Orderable period"), " ");
} }
function AppComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "Extractions"), "");
} }
function AppComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14)(1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " - username: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, "Logged as"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r18.loginService.currentUser.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r18.loginService.currentUser.username);
} }
function AppComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.router.navigate(["/login"])); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "Login"), " ");
} }
function AppComponent_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.loginService.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "Logout"), " ");
} }
function AppComponent_p_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" v", ctx_r22.localStorage.getItem("version"), " ");
} }
const _c6 = function () { return ["/forecast"]; };
const _c7 = function () { return ["/orders"]; };
class AppComponent {
    constructor(loginService, translate, router, usersService, versionService) {
        this.loginService = loginService;
        this.translate = translate;
        this.usersService = usersService;
        this.versionService = versionService;
        this.title = 'sangue';
        this.users = [];
        this.router = router;
        translate.addLangs(['en', 'it']);
        this.localStorage = localStorage;
        //this.localStorage.setItem("version", environment.version);
        this.loginService.getCurrentUserSync();
        if (navigator.language.split("-", 2)[0] == 'it' ||
            navigator.language.split("-", 2)[0] == 'en') {
            //translate.setDefaultLang(navigator.language.split("-", 2)[0]);
            translate.setDefaultLang('it');
        }
        else {
            translate.setDefaultLang('en');
        }
        //comment the next line to activate language detection
        //translate.setDefaultLang('it');
        //environment.currentLanguage = 'it'
        //console.log(navigator.language.split("-", 2)[0]);
        //console.log(loginService.getUserCode());
    }
    ngOnInit() {
        //check connection every 30s
        this.checkRegularly(30);
    }
    /*
    
      LOGIN SERVICE FUNCTIONS
    
    */
    check() {
        this.loginService.check();
    }
    login(username, password) {
        this.loginService.login(username, password);
    }
    logout() {
        this.loginService.logout();
    }
    checkRegularly(seconds) {
        setInterval(() => {
            this.loginService.checkPromise().subscribe(res => {
                if (localStorage.getItem("id_session") != null && res[0] == "KO") {
                    localStorage.removeItem("id_session");
                    localStorage.removeItem("id_profile");
                    localStorage.removeItem("sangue_username");
                    this.router.navigate(['login']);
                }
            });
        }, seconds * 1000);
    }
    /*
    
      LANGUAGE FUNCTIONS
  
    */
    switchLanguage(lang) {
        this.translate.use(lang);
        src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLanguage = lang;
    }
    getManual(userCode) {
        let filename = "manual-" + userCode + ".pdf";
        let docsPath = "assets/docs/";
        window.open(docsPath + filename, "_blank");
    }
    getVersion() {
    }
    setVersion() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_version_service__WEBPACK_IMPORTED_MODULE_3__.VersionService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 40, vars: 31, consts: [[2, "display", "flex", "flex-direction", "row"], ["src", "https://ecwmed.asl.novara.it/img/loghi/ico_asl_piemonte_NO.jpg"], ["mat-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["forecasts", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["orders", "matMenu"], ["extractions", "matMenu"], ["mat-menu-item", "", "routerLink", "/orders/resume"], ["mat-button", "", 3, "click", 4, "ngIf"], ["loginMenu", "matMenu"], ["style", "\n\tposition: absolute;\n\tright: 0; \n\tmargin: 15px;", 4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", 3, "click"], [2, "position", "absolute", "right", "0", "margin", "15px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_button_2_Template, 3, 4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-menu", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AppComponent_button_5_Template, 3, 5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AppComponent_button_6_Template, 3, 5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AppComponent_button_7_Template, 3, 5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AppComponent_button_8_Template, 3, 5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AppComponent_button_9_Template, 3, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AppComponent_button_10_Template, 3, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AppComponent_button_11_Template, 3, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AppComponent_button_12_Template, 3, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, AppComponent_button_13_Template, 3, 4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-menu", null, 6)(16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, AppComponent_button_19_Template, 3, 5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AppComponent_button_20_Template, 3, 4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-menu", null, 8)(23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AppComponent_button_26_Template, 3, 5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, AppComponent_button_27_Template, 3, 4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-menu", null, 9)(30, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, AppComponent_button_33_Template, 9, 6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, AppComponent_button_34_Template, 3, 3, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-menu", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, AppComponent_button_37_Template, 3, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, AppComponent_p_38_Template, 2, 1, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUsername() != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "230");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "210" || ctx.loginService.getUserCode() == "220");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "210");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "230");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "210" || ctx.loginService.getUserCode() == "220");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](29, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 23, "Forecasts"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "210" || ctx.loginService.getUserCode() == "220");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](30, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 25, "Orders"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "210" || ctx.loginService.getUserCode() == "220");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 27, "Report xls orders"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUsername() != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUsername() == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUsername() != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUsername() != null);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "httpTranslateLoader": () => (/* binding */ httpTranslateLoader)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _logged_logged_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logged/logged.component */ 6184);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ 3537);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _pharma_registry_pharma_registry_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pharma-registry/pharma-registry.component */ 3362);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ag-grid-angular */ 9771);
/* harmony import */ var _forecast_forecast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forecast/forecast.component */ 5206);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-product/add-product.component */ 6931);
/* harmony import */ var _are_you_sure_product_are_you_sure_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./are-you-sure-product/are-you-sure-product.component */ 8625);
/* harmony import */ var _are_you_sure_forecast_are_you_sure_forecast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./are-you-sure-forecast/are-you-sure-forecast.component */ 7040);
/* harmony import */ var _add_forecast_add_forecast_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-forecast/add-forecast.component */ 7858);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _mat_input_mat_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mat-input/mat-input.component */ 5147);
/* harmony import */ var _button_delete_forecast_button_delete_forecast_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./button-delete-forecast/button-delete-forecast.component */ 1737);
/* harmony import */ var _button_delete_product_button_delete_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./button-delete-product/button-delete-product.component */ 1886);
/* harmony import */ var _dropdown_products_forecast_dropdown_products_forecast_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dropdown-products-forecast/dropdown-products-forecast.component */ 4980);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _dropdown_users_forecast_dropdown_users_forecast_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dropdown-users-forecast/dropdown-users-forecast.component */ 6022);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cell-checkbox/cell-checkbox.component */ 7145);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./orders/orders.component */ 8686);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _button_edit_order_button_edit_order_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./button-edit-order/button-edit-order.component */ 1026);
/* harmony import */ var _button_delete_order_button_delete_order_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./button-delete-order/button-delete-order.component */ 5436);
/* harmony import */ var _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-order/edit-order.component */ 7881);
/* harmony import */ var _edit_order_dialog_edit_order_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./edit-order-dialog/edit-order-dialog.component */ 3291);
/* harmony import */ var _datepicker_products_dialog_datepicker_products_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./datepicker-products-dialog/datepicker-products-dialog.component */ 5825);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _are_you_sure_order_row_are_you_sure_order_row_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./are-you-sure-order-row/are-you-sure-order-row.component */ 9285);
/* harmony import */ var _are_you_sure_order_are_you_sure_order_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./are-you-sure-order/are-you-sure-order.component */ 5038);
/* harmony import */ var _add_order_row_add_order_row_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./add-order-row/add-order-row.component */ 8120);
/* harmony import */ var _edit_order_row_edit_order_row_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./edit-order-row/edit-order-row.component */ 9759);
/* harmony import */ var _add_order_dialog_add_order_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./add-order-dialog/add-order-dialog.component */ 2974);
/* harmony import */ var _dropdown_users_orders_component_dropdown_users_orders_component_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dropdown-users-orders-component/dropdown-users-orders-component.component */ 9857);
/* harmony import */ var _dropdown_users_orders_dropdown_users_orders_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dropdown-users-orders/dropdown-users-orders.component */ 5131);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var _orders_extra_checkbox_orders_extra_checkbox_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./orders-extra-checkbox/orders-extra-checkbox.component */ 6247);
/* harmony import */ var _orders_urgent_checkbox_orders_urgent_checkbox_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./orders-urgent-checkbox/orders-urgent-checkbox.component */ 225);
/* harmony import */ var _orders_validated_checkbox_orders_validated_checkbox_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./orders-validated-checkbox/orders-validated-checkbox.component */ 1963);
/* harmony import */ var _pharma_registry_active_checkbox_pharma_registry_active_checkbox_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pharma-registry-active-checkbox/pharma-registry-active-checkbox.component */ 6579);
/* harmony import */ var _pharma_registry_extra_checkbox_pharma_registry_extra_checkbox_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pharma-registry-extra-checkbox/pharma-registry-extra-checkbox.component */ 1457);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _orderable_period_orderable_period_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./orderable-period/orderable-period.component */ 2343);
/* harmony import */ var _loading_cell_renderer_loading_cell_renderer_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./loading-cell-renderer/loading-cell-renderer.component */ 9390);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _orders_sent_checkbox_orders_sent_checkbox_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./orders-sent-checkbox/orders-sent-checkbox.component */ 1243);
/* harmony import */ var _send_to_supplier_dialog_send_to_supplier_dialog_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./send-to-supplier-dialog/send-to-supplier-dialog.component */ 779);
/* harmony import */ var _supplies_supplies_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./supplies/supplies.component */ 6439);
/* harmony import */ var _orders_to_customer_orders_to_customer_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./orders-to-customer/orders-to-customer.component */ 4441);
/* harmony import */ var _orders_to_customer_checkbox_orders_to_customer_checkbox_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./orders-to-customer-checkbox/orders-to-customer-checkbox.component */ 8311);
/* harmony import */ var _send_to_customer_dialog_send_to_customer_dialog_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./send-to-customer-dialog/send-to-customer-dialog.component */ 2706);
/* harmony import */ var _button_supply_details_button_supply_details_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./button-supply-details/button-supply-details.component */ 8031);
/* harmony import */ var _orders_received_checkbox_orders_received_checkbox_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./orders-received-checkbox/orders-received-checkbox.component */ 3087);
/* harmony import */ var _mark_as_received_dialog_mark_as_received_dialog_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./mark-as-received-dialog/mark-as-received-dialog.component */ 7699);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _button_order_report_button_order_report_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./button-order-report/button-order-report.component */ 6);
/* harmony import */ var _forecast_report_forecast_report_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./forecast-report/forecast-report.component */ 724);
/* harmony import */ var _loans_loans_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./loans/loans.component */ 3218);
/* harmony import */ var _add_loan_dialog_add_loan_dialog_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./add-loan-dialog/add-loan-dialog.component */ 1244);
/* harmony import */ var _button_loan_details_button_loan_details_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./button-loan-details/button-loan-details.component */ 5418);
/* harmony import */ var _loan_details_dialog_loan_details_dialog_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./loan-details-dialog/loan-details-dialog.component */ 1475);
/* harmony import */ var _order_resume_order_resume_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./order-resume/order-resume.component */ 7191);
/* harmony import */ var _login_gateway_login_gateway_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./login-gateway/login-gateway.component */ 506);
/* harmony import */ var _ddt_order_actions_ddt_order_actions_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./ddt-order-actions/ddt-order-actions.component */ 7890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/core */ 2560);




















































































//import { LocationStrategy, HashLocationStrategy } from '@angular/common';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_57__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_57__["ɵɵdefineInjector"]({ providers: [
        _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__.AddProductComponent,
        _are_you_sure_product_are_you_sure_product_component__WEBPACK_IMPORTED_MODULE_9__.AreYouSureProductComponent,
        _add_forecast_add_forecast_component__WEBPACK_IMPORTED_MODULE_11__.AddForecastComponent,
        _are_you_sure_forecast_are_you_sure_forecast_component__WEBPACK_IMPORTED_MODULE_10__.AreYouSureForecastComponent,
        {
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_58__.MAT_DATE_LOCALE,
            useValue: 'it-IT'
        },
        {
            provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_59__.MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: {
                duration: 3000
            }
        },
        /*
        {
          provide: LocationStrategy,
          useClass: HashLocationStrategy
        }
        */
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_60__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_61__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_62__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_63__.HttpClientModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_64__.AgGridModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_65__.MatTableModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_66__.MatDialogModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_67__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_68__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_69__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_70__.MatAutocompleteModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_62__.ReactiveFormsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_71__.MatCheckboxModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_72__.MatSelectModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_73__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_58__.MatNativeDateModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_74__.MatDatepickerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_75__.CommonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_76__.MatCardModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_77__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_77__.TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_63__.HttpClient]
            }
        }),
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_78__.MatProgressSpinnerModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_79__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_80__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_81__.MatTooltipModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_59__.MatSnackBarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_57__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _logged_logged_component__WEBPACK_IMPORTED_MODULE_2__.LoggedComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__.WelcomeComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent,
        _pharma_registry_pharma_registry_component__WEBPACK_IMPORTED_MODULE_6__.PharmaRegistryComponent,
        _forecast_forecast_component__WEBPACK_IMPORTED_MODULE_7__.ForecastComponent,
        _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_8__.AddProductComponent,
        _are_you_sure_product_are_you_sure_product_component__WEBPACK_IMPORTED_MODULE_9__.AreYouSureProductComponent,
        _are_you_sure_forecast_are_you_sure_forecast_component__WEBPACK_IMPORTED_MODULE_10__.AreYouSureForecastComponent,
        _add_forecast_add_forecast_component__WEBPACK_IMPORTED_MODULE_11__.AddForecastComponent,
        _mat_input_mat_input_component__WEBPACK_IMPORTED_MODULE_12__.MatInputComponent,
        _button_delete_forecast_button_delete_forecast_component__WEBPACK_IMPORTED_MODULE_13__.ButtonDeleteForecastComponent,
        _button_delete_product_button_delete_product_component__WEBPACK_IMPORTED_MODULE_14__.ButtonDeleteProductComponent,
        _dropdown_products_forecast_dropdown_products_forecast_component__WEBPACK_IMPORTED_MODULE_15__.DropdownProductsForecastComponent,
        _dropdown_users_forecast_dropdown_users_forecast_component__WEBPACK_IMPORTED_MODULE_16__.DropdownUsersForecastComponent,
        _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_17__.CellCheckboxComponent,
        _orders_orders_component__WEBPACK_IMPORTED_MODULE_18__.OrdersComponent,
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__.PageNotFoundComponent,
        _button_edit_order_button_edit_order_component__WEBPACK_IMPORTED_MODULE_20__.ButtonEditOrderComponent,
        _button_delete_order_button_delete_order_component__WEBPACK_IMPORTED_MODULE_21__.ButtonDeleteOrderComponent,
        _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_22__.EditOrderComponent,
        _edit_order_dialog_edit_order_dialog_component__WEBPACK_IMPORTED_MODULE_23__.EditOrderDialogComponent,
        _datepicker_products_dialog_datepicker_products_dialog_component__WEBPACK_IMPORTED_MODULE_24__.DatepickerProductsDialogComponent,
        _are_you_sure_order_row_are_you_sure_order_row_component__WEBPACK_IMPORTED_MODULE_25__.AreYouSureOrderRowComponent,
        _are_you_sure_order_are_you_sure_order_component__WEBPACK_IMPORTED_MODULE_26__.AreYouSureOrderComponent,
        _add_order_row_add_order_row_component__WEBPACK_IMPORTED_MODULE_27__.AddOrderRowComponent,
        _edit_order_row_edit_order_row_component__WEBPACK_IMPORTED_MODULE_28__.EditOrderRowComponent,
        _add_order_dialog_add_order_dialog_component__WEBPACK_IMPORTED_MODULE_29__.AddOrderDialogComponent,
        _dropdown_users_orders_component_dropdown_users_orders_component_component__WEBPACK_IMPORTED_MODULE_30__.DropdownUsersOrdersComponentComponent,
        _dropdown_users_orders_dropdown_users_orders_component__WEBPACK_IMPORTED_MODULE_31__.DropdownUsersOrdersComponent,
        _orders_extra_checkbox_orders_extra_checkbox_component__WEBPACK_IMPORTED_MODULE_32__.OrdersExtraCheckboxComponent,
        _orders_urgent_checkbox_orders_urgent_checkbox_component__WEBPACK_IMPORTED_MODULE_33__.OrdersUrgentCheckboxComponent,
        _orders_validated_checkbox_orders_validated_checkbox_component__WEBPACK_IMPORTED_MODULE_34__.OrdersValidatedCheckboxComponent,
        _pharma_registry_active_checkbox_pharma_registry_active_checkbox_component__WEBPACK_IMPORTED_MODULE_35__.PharmaRegistryActiveCheckboxComponent,
        _pharma_registry_extra_checkbox_pharma_registry_extra_checkbox_component__WEBPACK_IMPORTED_MODULE_36__.PharmaRegistryExtraCheckboxComponent,
        _orderable_period_orderable_period_component__WEBPACK_IMPORTED_MODULE_37__.OrderablePeriodComponent,
        _loading_cell_renderer_loading_cell_renderer_component__WEBPACK_IMPORTED_MODULE_38__.LoadingCellRendererComponent,
        _orders_sent_checkbox_orders_sent_checkbox_component__WEBPACK_IMPORTED_MODULE_39__.OrdersSentCheckboxComponent,
        _send_to_supplier_dialog_send_to_supplier_dialog_component__WEBPACK_IMPORTED_MODULE_40__.SendToSupplierDialogComponent,
        _supplies_supplies_component__WEBPACK_IMPORTED_MODULE_41__.SuppliesComponent,
        _orders_to_customer_orders_to_customer_component__WEBPACK_IMPORTED_MODULE_42__.OrdersToCustomerComponent,
        _orders_to_customer_checkbox_orders_to_customer_checkbox_component__WEBPACK_IMPORTED_MODULE_43__.OrdersToCustomerCheckboxComponent,
        _send_to_customer_dialog_send_to_customer_dialog_component__WEBPACK_IMPORTED_MODULE_44__.SendToCustomerDialogComponent,
        _button_supply_details_button_supply_details_component__WEBPACK_IMPORTED_MODULE_45__.ButtonSupplyDetailsComponent,
        _orders_received_checkbox_orders_received_checkbox_component__WEBPACK_IMPORTED_MODULE_46__.OrdersReceivedCheckboxComponent,
        _mark_as_received_dialog_mark_as_received_dialog_component__WEBPACK_IMPORTED_MODULE_47__.MarkAsReceivedDialogComponent,
        _button_order_report_button_order_report_component__WEBPACK_IMPORTED_MODULE_48__.ButtonOrderReportComponent,
        _forecast_report_forecast_report_component__WEBPACK_IMPORTED_MODULE_49__.ForecastReportComponent,
        _loans_loans_component__WEBPACK_IMPORTED_MODULE_50__.LoansComponent,
        _add_loan_dialog_add_loan_dialog_component__WEBPACK_IMPORTED_MODULE_51__.AddLoanDialogComponent,
        _button_loan_details_button_loan_details_component__WEBPACK_IMPORTED_MODULE_52__.ButtonLoanDetailsComponent,
        _loan_details_dialog_loan_details_dialog_component__WEBPACK_IMPORTED_MODULE_53__.LoanDetailsDialogComponent,
        _order_resume_order_resume_component__WEBPACK_IMPORTED_MODULE_54__.OrderResumeComponent,
        _login_gateway_login_gateway_component__WEBPACK_IMPORTED_MODULE_55__.LoginGatewayComponent,
        _ddt_order_actions_ddt_order_actions_component__WEBPACK_IMPORTED_MODULE_56__.DdtOrderActionsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_60__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_61__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_62__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_63__.HttpClientModule,
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_64__.AgGridModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_65__.MatTableModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_66__.MatDialogModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_67__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_68__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_69__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_70__.MatAutocompleteModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_62__.ReactiveFormsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_71__.MatCheckboxModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_72__.MatSelectModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_73__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_58__.MatNativeDateModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_74__.MatDatepickerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_75__.CommonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_76__.MatCardModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_77__.TranslateModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_78__.MatProgressSpinnerModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_79__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_80__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_81__.MatTooltipModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_59__.MatSnackBarModule] }); })();
function httpTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_82__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}


/***/ }),

/***/ 7040:
/*!**************************************************************************!*\
  !*** ./src/app/are-you-sure-forecast/are-you-sure-forecast.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreYouSureForecastComponent": () => (/* binding */ AreYouSureForecastComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);





class AreYouSureForecastComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.isSubmitted = false;
        this.id = this.data.id;
    }
    onSubmit() {
        this.isSubmitted = true;
        this.dialogRef.close({
            id: this.id,
            isSubmitted: this.isSubmitted
        });
    }
}
AreYouSureForecastComponent.ɵfac = function AreYouSureForecastComponent_Factory(t) { return new (t || AreYouSureForecastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
AreYouSureForecastComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AreYouSureForecastComponent, selectors: [["app-are-you-sure-forecast"]], decls: 10, vars: 10, consts: [["mat-dialog-actions", "", "align", "center"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""]], template: function AreYouSureForecastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0)(4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreYouSureForecastComponent_Template_button_click_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "Delete forecast with ID"), " ", ctx.id, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "Delete"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "Cancel"));
    } }, dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmUteW91LXN1cmUtZm9yZWNhc3QuY29tcG9uZW50LmNzcyJ9 */"] });
AreYouSureForecastComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AreYouSureForecastComponent, factory: AreYouSureForecastComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9285:
/*!****************************************************************************!*\
  !*** ./src/app/are-you-sure-order-row/are-you-sure-order-row.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreYouSureOrderRowComponent": () => (/* binding */ AreYouSureOrderRowComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);





class AreYouSureOrderRowComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.isSubmitted = false;
        this.id = data.id;
    }
    ngOnInit() { }
    onSubmit() {
        this.isSubmitted = true;
        this.dialogRef.close({ isSubmitted: this.isSubmitted });
    }
}
AreYouSureOrderRowComponent.ɵfac = function AreYouSureOrderRowComponent_Factory(t) { return new (t || AreYouSureOrderRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
AreYouSureOrderRowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AreYouSureOrderRowComponent, selectors: [["app-are-you-sure-order-row"]], decls: 10, vars: 10, consts: [["mat-dialog-actions", "", "align", "center"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "matDialogClose", "true", "color", "primary"]], template: function AreYouSureOrderRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0)(4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreYouSureOrderRowComponent_Template_button_click_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "Delete order row with ID"), " ", ctx.id, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "Delete"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "Cancel"));
    } }, dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmUteW91LXN1cmUtb3JkZXItcm93LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5038:
/*!********************************************************************!*\
  !*** ./src/app/are-you-sure-order/are-you-sure-order.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreYouSureOrderComponent": () => (/* binding */ AreYouSureOrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);





class AreYouSureOrderComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.isSubmitted = false;
        this.orderId = data.id;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.isSubmitted = true;
        this.dialogRef.close({ isSubmitted: this.isSubmitted });
    }
}
AreYouSureOrderComponent.ɵfac = function AreYouSureOrderComponent_Factory(t) { return new (t || AreYouSureOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
AreYouSureOrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AreYouSureOrderComponent, selectors: [["app-are-you-sure-order"]], decls: 10, vars: 10, consts: [["mat-dialog-actions", "", "align", "center"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "matDialogClose", "true", "color", "primary"]], template: function AreYouSureOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0)(4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreYouSureOrderComponent_Template_button_click_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "Delete order with ID"), " ", ctx.orderId, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("'", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "Delete"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "Cancel"));
    } }, dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmUteW91LXN1cmUtb3JkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8625:
/*!************************************************************************!*\
  !*** ./src/app/are-you-sure-product/are-you-sure-product.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreYouSureProductComponent": () => (/* binding */ AreYouSureProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);





class AreYouSureProductComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.isSubmitted = false;
        this.id = this.data.id;
    }
    onSubmit() {
        this.isSubmitted = true;
        this.dialogRef.close({
            id: this.id,
            isSubmitted: this.isSubmitted
        });
    }
}
AreYouSureProductComponent.ɵfac = function AreYouSureProductComponent_Factory(t) { return new (t || AreYouSureProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
AreYouSureProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AreYouSureProductComponent, selectors: [["app-are-you-sure-product"]], decls: 10, vars: 10, consts: [["mat-dialog-title", ""], ["mat-dialog-actions", "", "align", "center"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "mat-dialog-close", ""]], template: function AreYouSureProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AreYouSureProductComponent_Template_button_click_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "Delete product with ID"), " ", ctx.id, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "Delete"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "Cancel"));
    } }, dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmUteW91LXN1cmUtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"] });
AreYouSureProductComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AreYouSureProductComponent, factory: AreYouSureProductComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1737:
/*!****************************************************************************!*\
  !*** ./src/app/button-delete-forecast/button-delete-forecast.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonDeleteForecastComponent": () => (/* binding */ ButtonDeleteForecastComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _forecast_forecast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forecast/forecast.component */ 5206);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);





class ButtonDeleteForecastComponent {
    constructor(forecastComponent) {
        this.forecastComponent = forecastComponent;
        this.isApproved = false;
    }
    agInit(params) {
        this.data = params.data;
        if (this.data.qta_approvata > 0) {
            this.isApproved = true;
        }
    }
    refresh(params) {
        //default return
        return false;
    }
    onClickOpenDialog(event) {
        this.forecastComponent.setId(this.data.id);
        this.forecastComponent.openAreYouSureDialog();
    }
}
ButtonDeleteForecastComponent.ɵfac = function ButtonDeleteForecastComponent_Factory(t) { return new (t || ButtonDeleteForecastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_forecast_forecast_component__WEBPACK_IMPORTED_MODULE_0__.ForecastComponent)); };
ButtonDeleteForecastComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ButtonDeleteForecastComponent, selectors: [["app-button-delete-forecast"]], decls: 4, vars: 4, consts: [["mat-mini-fab", "", "color", "warn", 1, "mat-elevation-z0", 3, "disabled", "matTooltip", "click"], [1, "material-icons"]], template: function ButtonDeleteForecastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonDeleteForecastComponent_Template_button_click_0_listener($event) { return ctx.onClickOpenDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("disabled", ctx.isApproved);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, "Delete"));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tZGVsZXRlLWZvcmVjYXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5436:
/*!**********************************************************************!*\
  !*** ./src/app/button-delete-order/button-delete-order.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonDeleteOrderComponent": () => (/* binding */ ButtonDeleteOrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);



class ButtonDeleteOrderComponent {
    constructor() { }
    agInit(params) {
        this.data = params.data;
    }
    refresh(params) {
        return false;
    }
    ngOnInit() {
    }
    openDeleteOrderDialog() {
        console.log("openDeleteOrderDialog()");
        //TODO
        /*
        this.dialogRef = this.dialog.open(
          AreYouSureForecastComponent,
          {
            data:{
              id: this.id
            }
          });
        this.dialogRef.afterClosed().subscribe((result: {id: string, isSubmitted: boolean}) =>{
          if(result !== undefined && result.isSubmitted){
            this.rmForecast(result.id);
            this.updateGrid();
          }
        });
        */
    }
}
ButtonDeleteOrderComponent.ɵfac = function ButtonDeleteOrderComponent_Factory(t) { return new (t || ButtonDeleteOrderComponent)(); };
ButtonDeleteOrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonDeleteOrderComponent, selectors: [["app-button-delete-order"]], decls: 3, vars: 3, consts: [["mat-raised-button", "", "color", "primary", 2, "width", "100%", 3, "click"]], template: function ButtonDeleteOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonDeleteOrderComponent_Template_button_click_0_listener() { return ctx.openDeleteOrderDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Delete"));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tZGVsZXRlLW9yZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1886:
/*!**************************************************************************!*\
  !*** ./src/app/button-delete-product/button-delete-product.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonDeleteProductComponent": () => (/* binding */ ButtonDeleteProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _pharma_registry_pharma_registry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pharma-registry/pharma-registry.component */ 3362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);





class ButtonDeleteProductComponent {
    constructor(pharmaRegistryComponent) {
        this.pharmaRegistryComponent = pharmaRegistryComponent;
    }
    agInit(params) {
        this.data = params.data;
    }
    refresh(params) {
        //this should be set to false by default
        return false;
    }
    onClickOpenDialog(event) {
        this.pharmaRegistryComponent.setId(this.data.id);
        this.pharmaRegistryComponent.openAreYouSureDialog();
    }
}
ButtonDeleteProductComponent.ɵfac = function ButtonDeleteProductComponent_Factory(t) { return new (t || ButtonDeleteProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pharma_registry_pharma_registry_component__WEBPACK_IMPORTED_MODULE_0__.PharmaRegistryComponent)); };
ButtonDeleteProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ButtonDeleteProductComponent, selectors: [["app-button-cell"]], decls: 4, vars: 3, consts: [["mat-mini-fab", "", "color", "warn", 1, "mat-elevation-z0", 3, "matTooltip", "click"], [1, "material-icons"]], template: function ButtonDeleteProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonDeleteProductComponent_Template_button_click_0_listener($event) { return ctx.onClickOpenDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "Delete"));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 1026:
/*!******************************************************************!*\
  !*** ./src/app/button-edit-order/button-edit-order.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonEditOrderComponent": () => (/* binding */ ButtonEditOrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _edit_order_dialog_edit_order_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-order-dialog/edit-order-dialog.component */ 3291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ 474);
/* harmony import */ var _pharma_registry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pharma-registry.service */ 955);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../orders/orders.component */ 8686);
/* harmony import */ var _forecast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forecast.service */ 4472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 8699);














function ButtonEditOrderComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ButtonEditOrderComponent_button_0_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.openEditOrderDialog($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "Edit"));
} }
function ButtonEditOrderComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ButtonEditOrderComponent_button_1_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.openEditOrderDialog($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "View"));
} }
class ButtonEditOrderComponent {
    constructor(dialog, ordersService, usersService, pharmaRegistryService, ordersComponent, forecastService) {
        this.ordersService = ordersService;
        this.usersService = usersService;
        this.pharmaRegistryService = pharmaRegistryService;
        this.ordersComponent = ordersComponent;
        this.forecastService = forecastService;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + "order.php";
        this.currentOrder = {
            id: '',
            anno: 0,
            mese: 0,
            username: '',
            d_ordine: '',
            n_ordine: 0,
            b_urgente: false,
            b_extra: false,
            b_validato: false,
            d_validato: 'string',
            status: "",
            note: '',
            d_consegna_prevista: "0000-00-00",
            n_ddt: "",
            d_ddt: "",
            note_consegna: "",
            b_prestito: false,
            id_ordine_prestito: "",
            username_prestito_da: "",
            username_prestito_a: ""
        };
        this.orderRows = [];
        this.users = [];
        this.products = [];
        this.forecasts = [];
        this.filteredForecasts = [];
        this.dialog = dialog;
        this.ordersService = ordersService;
    }
    agInit(params) {
        this.data = params.data;
        //console.log("DATA:");
        //console.log(this.data);
        this.isLocked = this.data.isRowLocked;
        this.listOrderRows(this.data.id);
        this.listForecasts(this.data.anno);
    }
    refresh(params) {
        return false;
    }
    ngOnInit() {
        this.listProducts();
        this.listUsers();
        switch (localStorage.getItem("id_profile")) {
            case '220':
                this.isLocked = (this.data.status == "inviato al fornitore" || this.data.status == "inviato al cliente" || this.data.status == "ricevuto");
                break;
            case '210':
                this.isLocked = (this.data.status != "inviato");
                break;
            case '230':
                this.isLocked = true;
                break;
            default:
                break;
        }
    }
    listOrderRows(id) {
        this.ordersService.listOrderRowsPromise(id).subscribe(res => {
            //console.log(res);
            if (res[0] == "KO") {
                console.error("Error retrieving OrderRows!");
            }
            else {
                this.orderRows = res[1];
            }
        });
    }
    openEditOrderDialog(event) {
        this.assignOrderData();
        console.log("orderRows");
        console.log(this.orderRows);
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            order: this.currentOrder,
            orderRows: this.orderRows,
            users: this.users,
            products: this.products,
            isLocked: this.isLocked,
            forecasts: this.filteredForecasts,
            status: this.data.status
        };
        dialogConfig.width = "95%";
        dialogConfig.maxHeight = "500px";
        if (this.data.status == "inviato")
            dialogConfig.disableClose = true;
        //console.log(this.filteredForecasts);
        this.dialogRef = this.dialog.open(_edit_order_dialog_edit_order_dialog_component__WEBPACK_IMPORTED_MODULE_1__.EditOrderDialogComponent, dialogConfig);
        this.dialogRef.afterClosed().subscribe((result) => {
            //console.log(result.order);
            if (result !== undefined && result.isSubmitted) {
                let orderStatus = {
                    id: "0",
                    username: localStorage.getItem('sangue_username'),
                    id_order: this.data.id,
                    d_status: this.getFormattedDate(new Date()),
                    status: "eliminato",
                    note: "eliminato da " + localStorage.getItem('sangue_username'),
                    b_sto: false
                };
                this.rmOrderAndOrderRows(this.data.id, result.orderRows);
                this.ordersComponent.setOrderStatus(orderStatus);
            }
            if (result !== undefined && result.isClosing) {
                if (result.deleteOrder) {
                    this.ordersComponent.rmOrder(this.currentOrder.id);
                }
                let orderStatus = {
                    id: "0",
                    username: localStorage.getItem('sangue_username'),
                    id_order: this.currentOrder.id,
                    d_status: this.getFormattedDate(new Date()),
                    status: "eliminato",
                    note: "eliminato da " + localStorage.getItem('sangue_username'),
                    b_sto: false
                };
                this.ordersComponent.setOrderStatus(orderStatus);
            }
            if (result !== undefined && result.isValidated) {
                let orderStatus = {
                    id: "0",
                    username: localStorage.getItem('sangue_username'),
                    id_order: this.currentOrder.id,
                    d_status: this.getFormattedDate(new Date()),
                    status: "confermato",
                    note: "Ordine validato da " + localStorage.getItem('sangue_username'),
                    b_sto: false
                };
                this.ordersComponent.validateOrderRowsRec(result.orderRows, 0);
                this.ordersService.setOrderStatusPromise(orderStatus).subscribe(res => {
                    if (res[0] == "OK") {
                        let order = result.order;
                        order.b_validato = true;
                        order.d_validato = this.getFormattedDate(new Date());
                        this.ordersComponent.setOrder(order, orderStatus, false);
                    }
                    else {
                        console.error("Error setting status for order " + this.data.id);
                    }
                });
            }
            if (result !== undefined && result.isQtaRicevutaConfirmed) {
                let orderStatus = {
                    id: "0",
                    username: localStorage.getItem('sangue_username'),
                    id_order: this.currentOrder.id,
                    d_status: this.getFormattedDate(new Date()),
                    status: "ricevuto",
                    note: "quantità ricevuta aggiornata da " + localStorage.getItem('sangue_username'),
                    b_sto: false
                };
                this.ordersComponent.confirmQtaRicevutaOrderRowsRec(result.orderRows, 0);
                this.ordersService.setOrderStatusPromise(orderStatus).subscribe(res => {
                    if (res[0] == "OK") {
                        let order = result.order;
                        order.b_validato = true;
                        order.d_validato = this.getFormattedDate(new Date());
                        this.ordersComponent.setOrder(order, orderStatus, false);
                    }
                    else {
                        console.error("Error setting status for order " + this.data.id);
                    }
                });
            }
        });
    }
    rmOrderAndOrderRows(orderId, orderRows) {
        this.ordersComponent.rmOrderAndOrderRows(orderId, orderRows);
    }
    assignOrderData() {
        this.currentOrder.id = this.data.id;
        this.currentOrder.anno = this.data.anno;
        this.currentOrder.b_extra = this.data.b_extra;
        this.currentOrder.b_urgente = this.data.b_urgente;
        this.currentOrder.b_validato = this.data.b_validato;
        this.currentOrder.d_ordine = this.data.d_ordine;
        this.currentOrder.d_validato = this.data.d_validato;
        this.currentOrder.n_ordine = this.data.n_ordine;
        this.currentOrder.note = this.data.note;
        this.currentOrder.username = this.data.username;
        this.currentOrder.n_ddt = this.data.n_ddt;
        this.currentOrder.d_ddt = this.data.d_ddt;
        this.currentOrder.d_consegna_prevista = this.data.d_consegna_prevista;
        this.currentOrder.note_consegna = this.data.note_consegna;
        console.log(this.currentOrder);
    }
    listUsers() {
        this.usersService.listUsersPromise("210").subscribe(res => {
            if (res[0] == "KO") {
                //alert("Error retrieving users!");
            }
            else {
                this.users = res[1];
                //console.log(this.users);
            }
        });
    }
    listProducts() {
        this.pharmaRegistryService.listProductsPromise().subscribe(res => {
            if (res[0] == "KO") {
                //alert("Error retrieving products!");
            }
            else {
                this.products = res[1];
                //console.log(this.products);
            }
        });
    }
    listForecasts(year) {
        this.forecastService.listForecastsPromise(year).subscribe(res => {
            if (res[0] == "OK") {
                this.forecasts = res[1];
                //console.log(this.forecasts);
                this.filterForecastsByUsername(this.data.username);
                //console.log(this.filteredForecasts);
            }
            else {
                console.error("Error retrieving forecasts!");
            }
        });
    }
    filterForecastsByUsername(username) {
        this.filteredForecasts = [];
        for (var i = 0; i < this.forecasts.length; ++i) {
            if (this.forecasts[i].username == username) {
                this.filteredForecasts.push(this.forecasts[i]);
            }
        }
    }
    /**
     *
     * ORDER STATUS MANAGEMENT
     *
     */
    getOrderStatus(orderId) {
        this.ordersService.getOrderStatusPromise(orderId).subscribe(res => {
            if (res[0] == "OK") {
            }
            else {
                //console.error("Error retrieving orderStatus for order " + orderId);
                //console.error(res);
            }
        });
    }
    getFormattedDate(date) {
        let splitDate = date.toLocaleString('it-IT').split(",", 2)[0].split("/", 3);
        let day = splitDate[0];
        let month = splitDate[1];
        let year = splitDate[2];
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        return year + "-" + month + "-" + day;
    }
}
ButtonEditOrderComponent.ɵfac = function ButtonEditOrderComponent_Factory(t) { return new (t || ButtonEditOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_pharma_registry_service__WEBPACK_IMPORTED_MODULE_4__.PharmaRegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_orders_orders_component__WEBPACK_IMPORTED_MODULE_5__.OrdersComponent), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_forecast_service__WEBPACK_IMPORTED_MODULE_6__.ForecastService)); };
ButtonEditOrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ButtonEditOrderComponent, selectors: [["app-button-edit-order"]], decls: 2, vars: 2, consts: [["mat-mini-fab", "", "color", "primary", "class", "mat-elevation-z0", 3, "matTooltip", "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "basic", "class", "mat-elevation-z0", 3, "matTooltip", "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 1, "mat-elevation-z0", 3, "matTooltip", "click"], [1, "material-icons"], ["mat-mini-fab", "", "color", "basic", 1, "mat-elevation-z0", 3, "matTooltip", "click"]], template: function ButtonEditOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ButtonEditOrderComponent_button_0_Template, 4, 3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ButtonEditOrderComponent_button_1_Template, 4, 3, "button", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.status == "inviato");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.status != "inviato");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tZWRpdC1vcmRlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5418:
/*!**********************************************************************!*\
  !*** ./src/app/button-loan-details/button-loan-details.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonLoanDetailsComponent": () => (/* binding */ ButtonLoanDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _loan_details_dialog_loan_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loan-details-dialog/loan-details-dialog.component */ 1475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);









class ButtonLoanDetailsComponent {
    constructor(ordersService, dialog) {
        this.ordersService = ordersService;
        this.dialog = dialog;
        this.orderRows = [];
    }
    agInit(params) {
        this.data = params.data;
        this.getOrderRow(this.data.id);
    }
    refresh(params) {
        return false;
    }
    getOrderRow(id) {
        this.ordersService.listOrderRowsPromise(id).subscribe(res => {
            if (res[0] == "OK") {
                this.orderRows = res[1];
            }
            else {
                console.error("Error retrieving OrderRows!");
            }
        });
    }
    ngOnInit() {
    }
    openLoanDetailsDialog(event) {
        //this.assignOrderData();
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            data: this.data,
            orderRow: this.orderRows[0],
            products: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalProducts
        };
        dialogConfig.width = "50%";
        dialogConfig.maxHeight = "500px";
        this.dialogRef = this.dialog.open(_loan_details_dialog_loan_details_dialog_component__WEBPACK_IMPORTED_MODULE_1__.LoanDetailsDialogComponent, dialogConfig);
    }
}
ButtonLoanDetailsComponent.ɵfac = function ButtonLoanDetailsComponent_Factory(t) { return new (t || ButtonLoanDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
ButtonLoanDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ButtonLoanDetailsComponent, selectors: [["app-button-loan-details"]], decls: 4, vars: 3, consts: [["mat-mini-fab", "", "color", "basic", 1, "mat-elevation-z0", 3, "matTooltip", "click"], [1, "material-icons"]], template: function ButtonLoanDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ButtonLoanDetailsComponent_Template_button_click_0_listener($event) { return ctx.openLoanDetailsDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "remove_red_eye");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, "Details"));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tbG9hbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6:
/*!**********************************************************************!*\
  !*** ./src/app/button-order-report/button-order-report.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonOrderReportComponent": () => (/* binding */ ButtonOrderReportComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






class ButtonOrderReportComponent {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    agInit(params) {
        this.data = params.data;
    }
    refresh(params) {
        return false;
    }
    ngOnInit() {
    }
    getReport() {
        this.ordersService.getOrderPdfPromise(this.data.id).subscribe((res) => {
            if (res[0] == "KO") {
                console.error("Error retrieving report for order " + this.data.id);
            }
            else {
                window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.reportPath + res[1][0].filename, "_blank");
            }
        });
    }
}
ButtonOrderReportComponent.ɵfac = function ButtonOrderReportComponent_Factory(t) { return new (t || ButtonOrderReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService)); };
ButtonOrderReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ButtonOrderReportComponent, selectors: [["app-button-order-report"]], decls: 4, vars: 3, consts: [["mat-mini-fab", "", "color", "warn", 1, "mat-elevation-z0", 3, "matTooltip", "click"], [1, "material-icons"]], template: function ButtonOrderReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ButtonOrderReportComponent_Template_button_click_0_listener() { return ctx.getReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "picture_as_pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, "View report"));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tb3JkZXItcmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8031:
/*!**************************************************************************!*\
  !*** ./src/app/button-supply-details/button-supply-details.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonSupplyDetailsComponent": () => (/* binding */ ButtonSupplyDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _edit_order_dialog_edit_order_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-order-dialog/edit-order-dialog.component */ 3291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ 474);
/* harmony import */ var _pharma_registry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pharma-registry.service */ 955);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _forecast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forecast.service */ 4472);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);












class ButtonSupplyDetailsComponent {
    constructor(dialog, usersService, pharmaRegistryService, ordersService, forecastService) {
        this.usersService = usersService;
        this.pharmaRegistryService = pharmaRegistryService;
        this.ordersService = ordersService;
        this.forecastService = forecastService;
        this.orderRows = [];
        this.users = [];
        this.products = [];
        this.forecasts = [];
        this.currentOrder = {
            id: '',
            anno: 0,
            mese: 0,
            username: '',
            d_ordine: '',
            n_ordine: 0,
            b_urgente: false,
            b_extra: false,
            b_validato: false,
            d_validato: 'string',
            note: '',
            status: "",
            d_consegna_prevista: "0000-00-00",
            n_ddt: "",
            d_ddt: "",
            note_consegna: "",
            b_prestito: false,
            id_ordine_prestito: "",
            username_prestito_a: "",
            username_prestito_da: ""
        };
        this.dialog = dialog;
    }
    agInit(params) {
        this.data = params.data;
        //console.log(this.data);
        this.listOrderRows(this.data.id);
        this.listProducts();
        this.listUsers();
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalForecasts.length == 0) {
            this.forecastService.getForecastsGlobally(this.data.anno);
        }
        //console.log(environment.globalForecasts);
    }
    refresh(params) {
        return false;
    }
    ngOnInit() {
    }
    listOrderRows(id) {
        this.ordersService.listOrderRowsPromise(id).subscribe(res => {
            if (res[0] == "OK") {
                this.orderRows = res[1];
            }
            else {
                console.error("Error retrieving OrderRows!");
            }
        });
    }
    listProducts() {
        this.pharmaRegistryService.listProductsPromise().subscribe(res => {
            if (res[0] == "OK") {
                this.products = res[1];
            }
            else {
                console.error("Error retrieving products!");
            }
        });
    }
    listUsers() {
        this.usersService.listUsersPromise("210").subscribe(res => {
            if (res[0] == "OK") {
                this.users = res[1];
            }
            else {
                console.error("Error retrieving users!");
            }
        });
    }
    assignOrderData() {
        this.currentOrder.id = this.data.id;
        this.currentOrder.anno = this.data.anno;
        this.currentOrder.b_extra = this.data.extra;
        this.currentOrder.b_urgente = this.data.b_urgente;
        this.currentOrder.b_validato = this.data.b_validato;
        this.currentOrder.d_ordine = this.data.d_ordine;
        this.currentOrder.d_validato = this.data.d_validato;
        this.currentOrder.n_ordine = this.data.n_ordine;
        this.currentOrder.note = this.data.note;
        this.currentOrder.username = this.data.username;
        this.currentOrder.n_ddt = this.data.n_ddt;
        this.currentOrder.d_ddt = this.data.d_ddt;
        this.currentOrder.d_consegna_prevista = this.data.d_consegna_prevista;
        this.currentOrder.note_consegna = this.data.note_consegna;
    }
    openEditOrderDialog(event) {
        this.assignOrderData();
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            order: this.currentOrder,
            orderRows: this.orderRows,
            users: this.users,
            products: this.products,
            isLocked: true,
            forecasts: this.forecasts,
            status: this.data.status
        };
        dialogConfig.width = "95%";
        dialogConfig.maxHeight = "500px";
        dialogConfig.disableClose = false;
        this.dialogRef = this.dialog.open(_edit_order_dialog_edit_order_dialog_component__WEBPACK_IMPORTED_MODULE_1__.EditOrderDialogComponent, dialogConfig);
    }
}
ButtonSupplyDetailsComponent.ɵfac = function ButtonSupplyDetailsComponent_Factory(t) { return new (t || ButtonSupplyDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_pharma_registry_service__WEBPACK_IMPORTED_MODULE_3__.PharmaRegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_4__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_forecast_service__WEBPACK_IMPORTED_MODULE_5__.ForecastService)); };
ButtonSupplyDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ButtonSupplyDetailsComponent, selectors: [["app-button-supply-details"]], decls: 4, vars: 3, consts: [["mat-mini-fab", "", "color", "basic", 1, "mat-elevation-z0", 3, "matTooltip", "click"], [1, "material-icons"]], template: function ButtonSupplyDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ButtonSupplyDetailsComponent_Template_button_click_0_listener($event) { return ctx.openEditOrderDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "remove_red_eye");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "View"));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tc3VwcGx5LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7145:
/*!**********************************************************!*\
  !*** ./src/app/cell-checkbox/cell-checkbox.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CellCheckboxComponent": () => (/* binding */ CellCheckboxComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);




class CellCheckboxComponent {
    constructor(snackbar) {
        this.snackbar = snackbar;
        this.headerName = '';
        this.checked = false;
    }
    agInit(params) {
        this.data = params.data;
        //console.log(this.data.note);
        this.currentValue = params.value;
        this.headerName = params.colDef?.headerName;
        this.isLocked = params.data.isRowLocked;
        //console.log(params);
        if (this.currentValue == 1)
            this.checked = true;
        /*
            switch(this.data.status){
              default:
                case "inviato al fornitore":
                  break;
                this.isLocked = false;
                break;
            }
            */
    }
    refresh(params) {
        return false;
    }
    onValueChange(event) {
        this.snackbar.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLanguage == "it" ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.it.UpdateSuccessful : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.en.UpdateSuccessful);
    }
    openSnackbar() {
        this.snackbar.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLanguage == "it" ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.it.UpdateSuccessful : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.en.UpdateSuccessful);
    }
    toggleCheckbox(event) {
        console.log("To be implemented!");
    }
    getFormattedDate(date) {
        let splitDate = date.toLocaleString('it-IT').split(",", 2)[0].split("/", 3);
        let day = splitDate[0];
        let month = splitDate[1];
        let year = splitDate[2];
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        return year + "-" + month + "-" + day;
    }
}
CellCheckboxComponent.ɵfac = function CellCheckboxComponent_Factory(t) { return new (t || CellCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar)); };
CellCheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CellCheckboxComponent, selectors: [["app-cell-checkbox"]], decls: 1, vars: 1, consts: [[3, "checked", "change", "click"]], template: function CellCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CellCheckboxComponent_Template_mat_checkbox_change_0_listener($event) { return ctx.onValueChange($event); })("click", function CellCheckboxComponent_Template_mat_checkbox_click_0_listener($event) { return ctx.toggleCheckbox($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.checked);
    } }, dependencies: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZWxsLWNoZWNrYm94LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5825:
/*!************************************************************************************!*\
  !*** ./src/app/datepicker-products-dialog/datepicker-products-dialog.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatepickerProductsDialogComponent": () => (/* binding */ DatepickerProductsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 8699);












function DatepickerProductsDialogComponent_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 5)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function DatepickerProductsDialogComponent_mat_form_field_3_Template_input_dateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.onDateChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-datepicker-toggle", 7)(6, "mat-datepicker", null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "Edit date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.date.value)("matDatepicker", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r6);
} }
function DatepickerProductsDialogComponent_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 5)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function DatepickerProductsDialogComponent_mat_form_field_4_Template_input_dateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.onDateChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-datepicker-toggle", 7)(6, "mat-datepicker", null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, "Edit date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r9)("value", ctx_r1.date.value)("min", ctx_r1.minDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r9);
} }
function DatepickerProductsDialogComponent_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 5)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function DatepickerProductsDialogComponent_mat_form_field_5_Template_input_dateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.onDateChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-datepicker-toggle", 7)(6, "mat-datepicker", null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, "Edit date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r12)("value", ctx_r2.date.value)("min", ctx_r2.minDate)("max", ctx_r2.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r12);
} }
function DatepickerProductsDialogComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 5)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function DatepickerProductsDialogComponent_mat_form_field_6_Template_input_dateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.onDateChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-datepicker-toggle", 7)(6, "mat-datepicker", null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "Edit date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r15)("value", ctx_r3.date.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r15);
} }
function DatepickerProductsDialogComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 5)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function DatepickerProductsDialogComponent_mat_form_field_7_Template_input_dateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.onDateChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-datepicker-toggle", 7)(6, "mat-datepicker", null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "Edit date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r18)("value", ctx_r4.date.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r18);
} }
function DatepickerProductsDialogComponent_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 5)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function DatepickerProductsDialogComponent_mat_form_field_8_Template_input_dateChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.onDateChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-datepicker-toggle", 7)(6, "mat-datepicker", null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "Edit date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r5.date.value)("matDatepicker", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r21);
} }
class DatepickerProductsDialogComponent {
    constructor(data, dialogRef, loginService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.loginService = loginService;
        this.isSubmitted = false;
        console.log(data);
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl((data.date == null ? "1970-01-01" : data.date), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
        console.log(this.date);
        if (loginService.getUserCode() == '210' && data.isOrderDate) {
            var auxDate = new Date();
            this.minDate = new Date(auxDate.getFullYear(), auxDate.getMonth(), parseInt(data.gg_min));
            console.log(this.minDate);
            this.maxDate = new Date(auxDate.getFullYear(), auxDate.getMonth(), parseInt(data.gg_max));
            console.log(this.maxDate);
        }
    }
    onDateChange(event) {
        //here it's better to keep the date type as Date because it's handled well by the datepicker
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(new Date(event.value), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
        this.formattedDate = this.getFormattedDate(this.date.value);
    }
    getFormattedDate(date) {
        let splitDate = date.toLocaleString('it-IT').split(",", 2)[0].split("/", 3);
        let day = splitDate[0];
        let month = splitDate[1];
        let year = splitDate[2];
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        return year + "-" + month + "-" + day;
    }
    onSubmit() {
        this.isSubmitted = true;
        console.log("date: " + this.date.value);
        console.log("formatted date: " + this.formattedDate);
        this.dialogRef.close({
            date: this.formattedDate,
            isValidoDa: this.data.isValidoDa,
            isValidoA: this.data.isValidoA,
            isOrderDate: this.data.isOrderDate,
            isValidationDate: this.data.isValidationDate,
            isDDTDate: this.data.isDDTDate,
            isSubmitted: this.isSubmitted
        });
    }
}
DatepickerProductsDialogComponent.ɵfac = function DatepickerProductsDialogComponent_Factory(t) { return new (t || DatepickerProductsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService)); };
DatepickerProductsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DatepickerProductsDialogComponent, selectors: [["app-datepicker-products-dialog"]], decls: 18, vars: 12, consts: [["appearance", "fill", 4, "ngIf"], ["mat-dialog-actions", "", "align", "center"], ["mat-mini-fab", "", "color", "primary", 3, "matTooltip", "click"], [1, "material-icons"], ["mat-mini-fab", "", "color", "accent", "mat-dialog-close", "", 3, "matTooltip"], ["appearance", "fill"], ["matInput", "", 3, "value", "matDatepicker", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", 3, "matDatepicker", "value", "min", "dateChange"], ["matInput", "", 3, "matDatepicker", "value", "min", "max", "dateChange"], ["matInput", "", 3, "matDatepicker", "value", "dateChange"]], template: function DatepickerProductsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Edit date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DatepickerProductsDialogComponent_mat_form_field_3_Template, 8, 6, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DatepickerProductsDialogComponent_mat_form_field_4_Template, 8, 7, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DatepickerProductsDialogComponent_mat_form_field_5_Template, 8, 8, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DatepickerProductsDialogComponent_mat_form_field_6_Template, 8, 6, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DatepickerProductsDialogComponent_mat_form_field_7_Template, 8, 6, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DatepickerProductsDialogComponent_mat_form_field_8_Template, 8, 6, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1)(10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerProductsDialogComponent_Template_button_click_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "210" && !ctx.data.isOrderDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "210" && ctx.data.isOrderDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220" && ctx.data.isOrderDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220" && ctx.data.isValidationDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "230");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 8, "Submit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 10, "Cancel"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerToggle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlcGlja2VyLXByb2R1Y3RzLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7890:
/*!******************************************************************!*\
  !*** ./src/app/ddt-order-actions/ddt-order-actions.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DdtOrderActionsComponent": () => (/* binding */ DdtOrderActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _order_ddt_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../order-ddt.service */ 7872);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






class DdtOrderActionsComponent {
    constructor(dialog, orderDdtService) {
        this.orderDdtService = orderDdtService;
    }
    agInit(params) {
        this.data = params.data;
        this.print(this.data.id);
    }
    refresh(params) {
        return false;
    }
    ngOnInit() {
    }
    print(string) {
        console.log(string);
    }
}
DdtOrderActionsComponent.ɵfac = function DdtOrderActionsComponent_Factory(t) { return new (t || DdtOrderActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_order_ddt_service__WEBPACK_IMPORTED_MODULE_0__.OrderDdtService)); };
DdtOrderActionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DdtOrderActionsComponent, selectors: [["app-ddt-order-actions"]], decls: 9, vars: 6, consts: [["mat-mini-fab", "", "color", "basic", 1, "mat-elevation-z0", 2, "margin-right", "5px", 3, "matTooltip", "click"], [1, "material-icons"], ["mat-mini-fab", "", "color", "basic", 1, "mat-elevation-z0", 3, "matTooltip", "click"]], template: function DdtOrderActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DdtOrderActionsComponent_Template_button_click_1_listener() { return ctx.print("upload"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "file_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DdtOrderActionsComponent_Template_button_click_5_listener() { return ctx.print("download"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Upload document"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, "Download document"));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZHQtb3JkZXItYWN0aW9ucy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 4980:
/*!************************************************************************************!*\
  !*** ./src/app/dropdown-products-forecast/dropdown-products-forecast.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownProductsForecastComponent": () => (/* binding */ DropdownProductsForecastComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _pharma_registry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pharma-registry.service */ 955);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _forecast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forecast.service */ 4472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);















function DropdownProductsForecastComponent_mat_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-spinner", 5);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 30);
  }
}
function DropdownProductsForecastComponent_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelectionChange", function DropdownProductsForecastComponent_mat_option_6_Template_mat_option_onSelectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.onOptionSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r3, " ");
  }
}
class DropdownProductsForecastComponent {
  constructor(loginService, forecastService, pharmaRegistryService) {
    this.forecastService = forecastService;
    this.pharmaRegistryService = pharmaRegistryService;
    this.pharmaRegistryUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'anag.php';
    this.forecastsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'forecasts.php';
    this.products = [];
    this.productNames = [];
    this.productName = '';
    //sample array
    this.options = [];
    this.loading = false;
    //this.getProducts();
    this.products = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalProducts;
    this.getProductNames();
    this.options = this.productNames;
    this.loginService = loginService;
  }
  ngOnInit() {
    //any time the array of filtered options changes (starting with
    //an empty string), _filter() is called on that value
    this.filteredOptions = this.formControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(value => this._filter(value)));
  }
  agInit(params) {
    this.data = params.data;
    this.value = params.value; //product id
    //adapt dropdown to user type
    switch (this.loginService.getUserCode()) {
      case "210":
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl({
          value: this.productName,
          disabled: this.data.qta_approvata != 0
        });
        break;
      case "220":
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl({
          value: this.productName,
          disabled: true
        });
        break;
    }
    this.assignProductName();
  }
  refresh(params) {
    //default return
    return false;
  }
  //this method has to be called into ngOnInit, as it must be called anytime
  //the code is compiled
  _filter(value) {
    //we take a string value and turn it to lower case
    const filterValue = value.toLowerCase();
    //then we cycle on the "options" array and, if one element includes the string
    //typed so far, we return it
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  //OK
  getProductNames() {
    for (let i = 0; i < this.products.length; ++i) {
      this.productNames.push(this.products[i].des);
    }
  }
  //non dovrebbe più servire
  getProducts() {
    this.loading = true;
    this.pharmaRegistryService.listProductsPromise().subscribe(res => {
      if (res[0] == "KO") {
        console.error("Error retrieving products!");
      } else {
        this.products = res[1];
        this.getProductNames();
        this.assignProductName();
        this.loading = false;
      }
    });
  }
  assignProductName() {
    for (let i = 0; i < this.products.length; ++i) {
      if (this.data.id_prd == this.products[i].id) {
        this.productName = this.products[i].des;
        this.formControl.setValue(this.productName);
        return;
      }
    }
  }
  onOptionSelected(event) {
    if (event.source._selected) {
      let productId = this.getProductId(event);
      this.forecastService.setForecast(this.data.id, this.data.anno, this.data.username, productId, this.data.qta, this.data.note, this.data.qta_approvata, this.data.costo_unitario, this.data.isAdding);
    }
  }
  getProductId(event) {
    for (let i = 0; i < this.products.length; ++i) {
      if (this.products[i].des == event.source.value) {
        return this.products[i].id;
      }
    }
  }
}
DropdownProductsForecastComponent.ɵfac = function DropdownProductsForecastComponent_Factory(t) {
  return new (t || DropdownProductsForecastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_forecast_service__WEBPACK_IMPORTED_MODULE_3__.ForecastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_pharma_registry_service__WEBPACK_IMPORTED_MODULE_1__.PharmaRegistryService));
};
DropdownProductsForecastComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DropdownProductsForecastComponent,
  selectors: [["app-dropdown-products-forecast"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_pharma_registry_service__WEBPACK_IMPORTED_MODULE_1__.PharmaRegistryService])],
  decls: 8,
  vars: 7,
  consts: [[3, "diameter", 4, "ngIf"], [2, "width", "100%"], ["type", "text", "matInput", "", 3, "matAutocomplete", "formControl", "value"], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [3, "diameter"], [3, "value", "onSelectionChange"]],
  template: function DropdownProductsForecastComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DropdownProductsForecastComponent_mat_spinner_1_Template, 1, 1, "mat-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-autocomplete", null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DropdownProductsForecastComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx.productName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matAutocomplete", _r1)("formControl", ctx.formControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 5, ctx.filteredOptions));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi1wcm9kdWN0cy1mb3JlY2FzdC5jb21wb25lbnQuY3NzIn0= */"]
});

/***/ }),

/***/ 6022:
/*!******************************************************************************!*\
  !*** ./src/app/dropdown-users-forecast/dropdown-users-forecast.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownUsersForecastComponent": () => (/* binding */ DropdownUsersForecastComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _forecast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forecast.service */ 4472);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);














function DropdownUsersForecastComponent_mat_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-spinner", 5);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 30);
  }
}
function DropdownUsersForecastComponent_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSelectionChange", function DropdownUsersForecastComponent_mat_option_6_Template_mat_option_onSelectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.onOptionSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r3, " ");
  }
}
class DropdownUsersForecastComponent {
  //constructor is called when cells are hidden and then re-displayed
  constructor(loginService, forecastService, http) {
    //retrieve product names
    //this.getUsers('210');
    this.loginService = loginService;
    this.forecastService = forecastService;
    this.http = http;
    this.pharmaRegistryUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'anag.php';
    this.forecastsUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'forecasts.php';
    this.users = [];
    this.userNames = [];
    this.userName = '';
    //sample array
    this.options = []; //['Delhi', 'Mumbai', 'Banglore'];
    this.loading = false;
    this.users = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers;
    this.getUserNames();
    //this.assignUserName();
    this.options = this.userNames;
    //this.loginService = loginService;  
  }

  ngOnInit() {
    //any time the array of filtered options changes (starting with
    //an empty string), _filter() is called on that value
    this.filteredOptions = this.formControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(value => this._filter(value)));
  }
  agInit(params) {
    this.data = params.data;
    this.value = params.value; //user id
    //adapt dropdown to user type
    switch (this.loginService.getUserCode()) {
      case "210":
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl({
          value: this.userName,
          disabled: true
        });
        break;
      case "220":
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl({
          value: this.userName,
          disabled: false
        });
        break;
    }
    this.assignUserName();
  }
  refresh(params) {
    //default return
    return false;
  }
  //this method has to be called into ngOnInit, as it must be called anytime
  //the code is compiled
  _filter(value) {
    //we take a string value and turn it to lower case
    const filterValue = value.toLowerCase();
    //then we cycle on the "options" array and, if one element includes the string
    //typed so far, we return it
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  //OK
  getUserNames() {
    for (let i = 0; i < this.users.length; ++i) {
      this.userNames.push(this.users[i].client);
    }
  }
  //non dovrebbe più servire
  getUsers(userlevel) {
    let path = this.pharmaRegistryUrl + '?request=listUsers&id_session=' + localStorage.getItem('id_session') + '&userlevel=' + userlevel;
    //console.log(path);
    this.loading = true;
    this.http.get(path, {
      responseType: "json"
    }).subscribe(res => {
      if (res[0] == "KO") {
        alert("Error retrieving products!");
      } else {
        this.users = res[1];
        this.getUserNames();
        this.assignUserName();
        this.loading = false;
      }
    });
  }
  assignUserName() {
    for (let i = 0; i < this.users.length; ++i) {
      if (this.data.username == this.users[i].id) {
        this.userName = this.users[i].client;
        this.formControl.setValue(this.userName);
        return;
      }
    }
  }
  onOptionSelected(event) {
    if (event.source._selected) {
      let userId = this.getUserId(event);
      //perform call to update db
      this.forecastService.setForecast(this.data.id, this.data.anno, userId, this.data.id_prd, this.data.qta, this.data.note, this.data.qta_approvata, this.data.costo_unitario, this.data.isAdding);
    }
  }
  getUserId(event) {
    for (let i = 0; i < this.users.length; ++i) {
      if (this.users[i].client == event.source.value) {
        return this.users[i].id;
      }
    }
  }
}
DropdownUsersForecastComponent.ɵfac = function DropdownUsersForecastComponent_Factory(t) {
  return new (t || DropdownUsersForecastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_forecast_service__WEBPACK_IMPORTED_MODULE_2__.ForecastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
};
DropdownUsersForecastComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DropdownUsersForecastComponent,
  selectors: [["app-dropdown-users-forecast"]],
  decls: 8,
  vars: 7,
  consts: [[3, "diameter", 4, "ngIf"], [2, "width", "100%"], ["type", "text", "matInput", "", 3, "matAutocomplete", "formControl", "value"], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [3, "diameter"], [3, "value", "onSelectionChange"]],
  template: function DropdownUsersForecastComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DropdownUsersForecastComponent_mat_spinner_1_Template, 1, 1, "mat-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-form-field", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-autocomplete", null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DropdownUsersForecastComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r1)("formControl", ctx.formControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 5, ctx.filteredOptions));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi11c2Vycy1mb3JlY2FzdC5jb21wb25lbnQuY3NzIn0= */"]
});

/***/ }),

/***/ 9857:
/*!**********************************************************************************************!*\
  !*** ./src/app/dropdown-users-orders-component/dropdown-users-orders-component.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownUsersOrdersComponentComponent": () => (/* binding */ DropdownUsersOrdersComponentComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);






class DropdownUsersOrdersComponentComponent {
    constructor(loginService, ordersService, http) {
        this.loginService = loginService;
        this.ordersService = ordersService;
        this.http = http;
        this.pharmaRegistryUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'anag.php';
        this.users = [];
        this.userNames = [];
        this.userName = '';
        //sample array
        this.options = [];
    }
    agInit(params) {
    }
    refresh(params) {
        return false;
    }
    ngOnInit() {
        this.filteredOptions = this.formControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(value => this._filter(value)));
    }
    _filter(value) {
        //we take a string value and turn it to lower case
        const filterValue = value.toLowerCase();
        //then we cycle on the "options" array and, if one element includes the string
        //typed so far, we return it
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    getUsers(userlevel) {
        let path = this.pharmaRegistryUrl + '?request=listUsers&id_session=' + localStorage.getItem('id_session') + '&userlevel=' + userlevel;
        //console.log(path);
        this.http.get(path, {
            responseType: "json"
        }).subscribe(res => {
            if (res[0] == "KO") {
                alert("Error retrieving products!");
            }
            else {
                this.users = res[1];
                this.getUserNames();
                this.assignUserName();
            }
        });
    }
    assignUserName() {
        for (let i = 0; i < this.users.length; ++i) {
            if (this.data.username == this.users[i].id) {
                this.userName = this.users[i].client;
                return;
            }
        }
    }
    onOptionSelected(event) {
        if (event.source._selected) {
            let userId = this.getUserId(event);
            //perform call to update db
            let updatedOrder = {
                id: this.data.id,
                anno: this.data.anno,
                username: userId,
                d_ordine: this.data.d_ordine,
                n_ordine: this.data.n_ordine,
                b_urgente: this.data.b_urgente,
                b_extra: this.data.b_extra,
                b_validato: this.data.b_validato,
                d_validato: this.data.d_validato,
                note: this.data.note
            };
            //this.ordersService.setOrder(updatedOrder, false);
        }
    }
    getUserId(event) {
        for (let i = 0; i < this.users.length; ++i) {
            if (this.users[i].client == event.source.value) {
                return this.users[i].id;
            }
        }
    }
    getUserNames() {
        for (let i = 0; i < this.users.length; ++i) {
            this.userNames.push(this.users[i].client);
        }
    }
}
DropdownUsersOrdersComponentComponent.ɵfac = function DropdownUsersOrdersComponentComponent_Factory(t) { return new (t || DropdownUsersOrdersComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
DropdownUsersOrdersComponentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DropdownUsersOrdersComponentComponent, selectors: [["app-dropdown-users-orders-component"]], decls: 2, vars: 0, template: function DropdownUsersOrdersComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "dropdown-users-orders-component works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi11c2Vycy1vcmRlcnMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5131:
/*!**************************************************************************!*\
  !*** ./src/app/dropdown-users-orders/dropdown-users-orders.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownUsersOrdersComponent": () => (/* binding */ DropdownUsersOrdersComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ 474);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);















function DropdownUsersOrdersComponent_mat_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-spinner", 5);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 20);
  }
}
function DropdownUsersOrdersComponent_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelectionChange", function DropdownUsersOrdersComponent_mat_option_6_Template_mat_option_onSelectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.onOptionSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r3, " ");
  }
}
class DropdownUsersOrdersComponent {
  constructor(loginService, usersService, ordersService, http) {
    this.loginService = loginService;
    this.usersService = usersService;
    this.ordersService = ordersService;
    this.http = http;
    this.pharmaRegistryUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'anag.php';
    this.users = [];
    this.userNames = [];
    this.userName = '';
    this.loading = false;
    //sample array
    this.options = [];
    //this.listUsers('210');
    //adapt dropdown to user type
    this.users = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers;
    this.getUserNames();
    this.options = this.userNames;
  }
  agInit(params) {
    this.data = params.data;
    this.value = params.value;
    this.isLocked = this.data.isRowLocked;
    switch (this.loginService.getUserCode()) {
      case "210":
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl({
          value: this.userName,
          disabled: this.isLocked
        });
        break;
      case "220":
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl({
          value: this.userName,
          disabled: this.isLocked
        });
        break;
    }
    this.assignUserName();
  }
  refresh(params) {
    return false;
  }
  ngOnInit() {
    this.filteredOptions = this.formControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(value => this._filter(value)));
  }
  _filter(value) {
    //we take a string value and turn it to lower case
    const filterValue = value.toLowerCase();
    //then we cycle on the "options" array and, if one element includes the string
    //typed so far, we return it
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  listUsers(userlevel) {
    this.loading = true;
    this.usersService.listUsersPromise(userlevel).subscribe(res => {
      if (res[0] == "KO") {
        alert("Error retrieving products!");
      } else {
        //console.log("listUsers response received");
        this.users = res[1];
        this.getUserNames();
        this.options = this.userNames;
        this.assignUserName();
        this.loading = false;
      }
    });
  }
  assignUserName() {
    for (let i = 0; i < this.users.length; ++i) {
      if (this.data.username == this.users[i].id) {
        this.userName = this.users[i].client;
        this.formControl.setValue(this.userName);
        return;
      }
    }
  }
  onOptionSelected(event) {
    if (event.source._selected) {
      let userId = this.getUserId(event);
      //perform call to update db
      let updatedOrder = {
        id: this.data.id,
        anno: this.data.anno,
        mese: this.data.mese,
        username: userId,
        d_ordine: this.data.d_ordine,
        n_ordine: this.data.n_ordine,
        b_urgente: this.data.b_urgente,
        b_extra: this.data.b_extra,
        b_validato: this.data.b_validato,
        d_validato: this.data.d_validato,
        note: this.data.note,
        status: this.data.status,
        d_consegna_prevista: this.data.d_consegna_prevista,
        n_ddt: this.data.n_ddt,
        d_ddt: this.data.d_ddt,
        note_consegna: this.data.note_consegna,
        b_prestito: this.data.b_prestito,
        id_ordine_prestito: this.data.id_ordine_prestito,
        username_prestito_a: this.data.username_prestito_a,
        username_prestito_da: this.data.username_prestito_da
      };
      this.ordersService.setOrder(updatedOrder, false);
      /*.subscribe(
        res => {
          if(res[0] == "OK") {
            //also set updatedOrder.username to all orderRows with
            console.log("ok!");
            //TODO
          }
        }
      );
      */
    }
  }

  getUserId(event) {
    for (let i = 0; i < this.users.length; ++i) {
      if (this.users[i].client == event.source.value) {
        return this.users[i].id;
      }
    }
  }
  getUserNames() {
    for (let i = 0; i < this.users.length; ++i) {
      this.userNames.push(this.users[i].client);
    }
  }
}
DropdownUsersOrdersComponent.ɵfac = function DropdownUsersOrdersComponent_Factory(t) {
  return new (t || DropdownUsersOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
};
DropdownUsersOrdersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DropdownUsersOrdersComponent,
  selectors: [["app-dropdown-users-orders-component"]],
  decls: 8,
  vars: 7,
  consts: [["align", "center", 3, "diameter", 4, "ngIf"], [2, "width", "100%"], ["type", "text", "matInput", "", 3, "matAutocomplete", "formControl", "value"], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["align", "center", 3, "diameter"], [3, "value", "onSelectionChange"]],
  template: function DropdownUsersOrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DropdownUsersOrdersComponent_mat_spinner_1_Template, 1, 1, "mat-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-autocomplete", null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DropdownUsersOrdersComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matAutocomplete", _r1)("formControl", ctx.formControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 5, ctx.filteredOptions));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi11c2Vycy1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 3291:
/*!******************************************************************!*\
  !*** ./src/app/edit-order-dialog/edit-order-dialog.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditOrderDialogComponent": () => (/* binding */ EditOrderDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ 9771);
/* harmony import */ var src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/grid-configs */ 6980);
/* harmony import */ var _are_you_sure_order_row_are_you_sure_order_row_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../are-you-sure-order-row/are-you-sure-order-row.component */ 9285);
/* harmony import */ var _are_you_sure_order_are_you_sure_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../are-you-sure-order/are-you-sure-order.component */ 5038);
/* harmony import */ var _edit_order_row_edit_order_row_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-order-row/edit-order-row.component */ 9759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../snackbar.service */ 9518);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 8699);



















function EditOrderDialogComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "This order does not contain any orderRows and will thus be deleted"), ". ");
} }
function EditOrderDialogComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Row number"), " ");
} }
function EditOrderDialogComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r35.n_riga, " ");
} }
function EditOrderDialogComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Product"), " ");
} }
function EditOrderDialogComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r36.product_name, " ");
} }
function EditOrderDialogComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Quantity"), " ");
} }
function EditOrderDialogComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r37.qta, " ");
} }
function EditOrderDialogComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Max/month"), " ");
} }
function EditOrderDialogComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r38.max_mese, " ");
} }
function EditOrderDialogComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Reason"), " ");
} }
function EditOrderDialogComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r39.motivazione, " ");
} }
function EditOrderDialogComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Validated quantity"), " ");
} }
function EditOrderDialogComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r40.qta_validata, " ");
} }
function EditOrderDialogComponent_ng_container_29_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Received quantity"), " ");
} }
function EditOrderDialogComponent_ng_container_29_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function EditOrderDialogComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EditOrderDialogComponent_ng_container_29_th_1_Template, 3, 3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EditOrderDialogComponent_ng_container_29_td_2_Template, 2, 0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function EditOrderDialogComponent_ng_container_30_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Received quantity"), " ");
} }
function EditOrderDialogComponent_ng_container_30_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32)(1, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function EditOrderDialogComponent_ng_container_30_td_2_Template_input_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48); const element_r46 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](element_r46.qta_ricevuta = $event); })("keyup.enter", function EditOrderDialogComponent_ng_container_30_td_2_Template_input_keyup_enter_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48); const element_r46 = restoredCtx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r49.onQtaRicevutaSet(element_r46, element_r46.qta_ricevuta)); })("keyup.tab_next", function EditOrderDialogComponent_ng_container_30_td_2_Template_input_keyup_tab_next_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48); const element_r46 = restoredCtx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r50.onQtaRicevutaSet(element_r46, element_r46.qta_ricevuta)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r46 = ctx.$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("disabled", ctx_r45.isQtaRicevutaSetAND());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", element_r46.qta_ricevuta);
} }
function EditOrderDialogComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EditOrderDialogComponent_ng_container_30_th_1_Template, 3, 3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EditOrderDialogComponent_ng_container_30_td_2_Template, 2, 2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function EditOrderDialogComponent_ng_container_31_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Received quantity"), " ");
} }
function EditOrderDialogComponent_ng_container_31_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32)(1, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function EditOrderDialogComponent_ng_container_31_td_2_Template_input_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55); const element_r53 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](element_r53.qta_ricevuta = $event); })("keyup.enter", function EditOrderDialogComponent_ng_container_31_td_2_Template_input_keyup_enter_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55); const element_r53 = restoredCtx.$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r56.onQtaRicevutaSet(element_r53, element_r53.qta_ricevuta)); })("keyup.tab_next", function EditOrderDialogComponent_ng_container_31_td_2_Template_input_keyup_tab_next_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55); const element_r53 = restoredCtx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r57.onQtaRicevutaSet(element_r53, element_r53.qta_ricevuta)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("disabled", element_r53.isQtaRicevutaSet);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", element_r53.qta_ricevuta);
} }
function EditOrderDialogComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EditOrderDialogComponent_ng_container_31_th_1_Template, 3, 3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EditOrderDialogComponent_ng_container_31_td_2_Template, 2, 2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function EditOrderDialogComponent_ng_container_32_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Received quantity"), " ");
} }
function EditOrderDialogComponent_ng_container_32_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32)(1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function EditOrderDialogComponent_ng_container_32_td_2_Template_input_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r62); const element_r60 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](element_r60.qta_ricevuta = $event); })("keyup.enter", function EditOrderDialogComponent_ng_container_32_td_2_Template_input_keyup_enter_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r62); const element_r60 = restoredCtx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r63.onQtaRicevutaSet(element_r60, element_r60.qta_ricevuta)); })("keyup.tab_next", function EditOrderDialogComponent_ng_container_32_td_2_Template_input_keyup_tab_next_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r62); const element_r60 = restoredCtx.$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r64.onQtaRicevutaSet(element_r60, element_r60.qta_ricevuta)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", element_r60.qta_ricevuta);
} }
function EditOrderDialogComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EditOrderDialogComponent_ng_container_32_th_1_Template, 3, 3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, EditOrderDialogComponent_ng_container_32_td_2_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function EditOrderDialogComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Notes"), " ");
} }
function EditOrderDialogComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r65.note, " ");
} }
function EditOrderDialogComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 31);
} }
function EditOrderDialogComponent_td_38_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditOrderDialogComponent_td_38_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70); const element_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r68.openEditOrderRowDialog(element_r66.id, false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "Edit"));
} }
function EditOrderDialogComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EditOrderDialogComponent_td_38_button_1_Template, 4, 3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r20.data.status == "inviato");
} }
function EditOrderDialogComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 31);
} }
function EditOrderDialogComponent_td_41_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditOrderDialogComponent_td_41_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r75); const element_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r73.openAreYouSureOrderRowDialog(element_r71.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "Delete"));
} }
function EditOrderDialogComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EditOrderDialogComponent_td_41_button_1_Template, 4, 3, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r22.data.status == "inviato");
} }
function EditOrderDialogComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Missing units"), " ");
} }
function EditOrderDialogComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r76.qta_validata - element_r76.qta_ricevuta, " ");
} }
function EditOrderDialogComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 41);
} }
function EditOrderDialogComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 42);
} }
function EditOrderDialogComponent_h5_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h5", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "Warning: once set, the received quantity cannot be modified"), "!\n");
} }
function EditOrderDialogComponent_button_49_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditOrderDialogComponent_button_49_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r78.openEditOrderRowDialog("", true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "Add row"));
} }
function EditOrderDialogComponent_button_50_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditOrderDialogComponent_button_50_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r80.openAreYouSureOrderDialog(ctx_r80.data.order.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "Delete order"));
} }
function EditOrderDialogComponent_button_51_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditOrderDialogComponent_button_51_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r82.validateOrder()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "Validate"));
} }
function EditOrderDialogComponent_button_52_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditOrderDialogComponent_button_52_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r84.confirmQtaRicevuta()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "checklist_rtl");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "Confirm all received quantities"));
} }
function EditOrderDialogComponent_button_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "Close"));
} }
function EditOrderDialogComponent_button_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "Close"));
} }
function EditOrderDialogComponent_button_55_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EditOrderDialogComponent_button_55_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r86.onClose(ctx_r86.data.order.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, "Close"));
} }
class EditOrderDialogComponent {
    constructor(data, _builder, dialog, thisDialogRef, ordersService, loginService, snackbarService) {
        this.data = data;
        this._builder = _builder;
        this.thisDialogRef = thisDialogRef;
        this.ordersService = ordersService;
        this.loginService = loginService;
        this.snackbarService = snackbarService;
        this.orderRows = [];
        this.orderRowGridRowData = [];
        this.users = [];
        this.products = [];
        this.forecasts = [];
        this.qtaRicevuta = [];
        this.defaultColDef = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_0__.defaultColDef;
        this.getRowId = (params) => {
            return params.data.id;
        };
        this.displayedColumnsASL = ['n_riga', 'product', 'qta', 'max_mese', 'motivazione', 'qta_validata', 'qta_ricevuta', 'note', 'edit', 'delete'];
        this.displayedColumnsSUP = ['n_riga', 'product', 'qta', 'motivazione', 'qta_validata', 'qta_ricevuta', 'diff', 'note'];
        this.displayedColumns = localStorage.getItem('sangue_username') == 'sanguefornitore' ? this.displayedColumnsSUP : this.displayedColumnsASL;
        this.onGridReady = (params) => {
            this.api = params.api;
            this.columnApi = params.columnApi;
            this.api.setRowData(this.orderRows);
            this.autoSizeColumns(false);
            //this.api.setDomLayout('autoHeight');
        };
        /*
        this.annoFormControl = _builder.control(data.order.anno, Validators.required);
        this.dOrdineFormControl = _builder.control(data.order.d_ordine, Validators.required);
        this.nOrdineFormControl = _builder.control(data.order.n_ordine, Validators.required);
        this.urgenteFormControl = _builder.control(data.order.b_urgente, Validators.required);
        this.extraFormControl = _builder.control(data.order.b_extra, Validators.required);
        this.validatoFormControl = _builder.control(data.order.b_validato, Validators.required);
        this.dValidatoFormControl = _builder.control(data.order.d_validato, Validators.required);
        this.noteFormControl = _builder.control(data.order.note); //not required
        */
        this.order = data.order;
        this.orderRows = data.orderRows;
        this.dialog = dialog;
        this.users = data.users;
        this.products = data.products;
        this.forecasts = data.forecasts;
        //console.log(this.products);
        this.isLocked = data.isLocked;
        this.isValidated = data.status != "inviato";
        //console.log("isvalidated?" + this.isValidated);
        this.userCode = this.loginService.getUserCode();
        this.createOrderRowGridRowData();
        //AgGrid initialization
        this.orderRowsGridConfig = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_0__.gridConfigOrderRows;
        this.gridOptions = {
            onCellClicked: (event) => {
                console.log(event);
            },
        };
    }
    autoSizeColumns(skipHeader) {
        const allColumnIds = [];
        this.columnApi.getColumns().forEach((column) => {
            allColumnIds.push(column.getId());
        });
        this.columnApi.autoSizeColumns(allColumnIds, skipHeader);
    }
    ngOnInit() {
        //console.log(this.order);
        //console.log(this.orderRows);
        //this.assignQtaRicevuta();
    }
    deleteOrderRowById(id) {
        for (let i = 0; i < this.orderRows.length; ++i) {
            if (this.orderRows[i].id == id) {
                this.orderRows.splice(i, 1);
                this.orderRowGridRowData.splice(i, 1);
                this.ordersService.rmOrderRow(id);
                this.createOrderRowGridRowData();
                return;
            }
        }
    }
    assignQtaRicevuta() {
        for (var i = 0; i < this.orderRows.length; ++i) {
            this.qtaRicevuta[i] = this.orderRows[i].qta_ricevuta;
        }
    }
    onQtaRicevutaSet(orderRow, qtaRicevuta) {
        if (qtaRicevuta >= 0) {
            console.log(orderRow);
            orderRow.qta_ricevuta = qtaRicevuta;
            this.setQtaRicevutaInOrderRowGridRowData(orderRow);
            this.ordersService.setOrderRowPromise(orderRow, false).subscribe(res => {
                if (res[0] == "OK") {
                    let orderStatus = {
                        id: "0",
                        username: localStorage.getItem('sangue_username'),
                        id_order: orderRow.id_ordine,
                        d_status: this.getFormattedDate(new Date()),
                        status: "ricevuto",
                        note: "Quantità ricevuta impostata a " + orderRow.qta_ricevuta,
                        b_sto: false
                    };
                    this.setOrderStatus(orderStatus);
                }
                else {
                    console.error("Error setting orderRow!");
                }
            });
        }
        else {
            qtaRicevuta = orderRow.qta_ricevuta;
        }
    }
    setQtaRicevutaInOrderRowGridRowData(orderRow) {
        for (var i = 0; i < this.orderRowGridRowData.length; ++i) {
            if (this.orderRowGridRowData[i].id == orderRow.id) {
                this.orderRowGridRowData[i].qta_ricevuta = orderRow.qta_ricevuta;
                this.orderRowGridRowData[i].isQtaRicevutaSet = true;
            }
        }
        //this.createOrderRowGridRowData();
    }
    getOrderRowById(id) {
        for (var i = 0; i < this.orderRows.length; ++i) {
            if (id == this.orderRows[i].id) {
                console.log(this.orderRows[i]);
                return this.orderRows[i];
            }
        }
        return undefined;
    }
    openAreYouSureOrderRowDialog(id) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogConfig();
        //dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: id
        };
        this.dialogRef = this.dialog.open(_are_you_sure_order_row_are_you_sure_order_row_component__WEBPACK_IMPORTED_MODULE_1__.AreYouSureOrderRowComponent, dialogConfig);
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined && result.isSubmitted) {
                this.deleteOrderRowById(id);
                let orderStatus = {
                    id: "0",
                    username: localStorage.getItem('sangue_username'),
                    id_order: this.order.id,
                    d_status: this.getFormattedDate(new Date()),
                    status: "inviato",
                    note: "eliminazione riga d'ordine",
                    b_sto: false
                };
                this.setOrderStatus(orderStatus);
            }
        });
    }
    //works both for adding and for editing an orderRow
    openEditOrderRowDialog(id, isAdding) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogConfig();
        //if id is not specified, create a new orderRow
        if (id == "") {
            let newOrderRow = {
                id: "",
                id_ordine: this.data.order.id,
                username: this.data.order.username,
                n_riga: "",
                id_prd: "",
                qta: 0,
                motivazione: "",
                qta_validata: 0,
                note: ""
            };
            dialogConfig.data = {
                orderRow: newOrderRow,
                users: this.users,
                products: this.products,
                forecasts: this.forecasts,
                orderRows: this.orderRows
            };
            console.log("Sending data: ");
            console.log(dialogConfig.data);
        }
        else {
            let editedOrderRow = this.getOrderRowById(id);
            editedOrderRow.username = this.data.order.username;
            dialogConfig.data = {
                orderRow: this.getOrderRowById(id),
                users: this.users,
                products: this.products,
                forecasts: this.forecasts
            };
            console.log("Sending data: ");
            console.log(dialogConfig.data);
        }
        this.dialogRef = this.dialog.open(_edit_order_row_edit_order_row_component__WEBPACK_IMPORTED_MODULE_3__.EditOrderRowComponent, dialogConfig);
        this.dialogRef.afterClosed().subscribe((result) => {
            //confirm edits
            //console.log(result);
            if (result !== undefined && result.isSubmitted) {
                console.log(result);
                this.ordersService
                    .setOrderRowPromise(result.orderRow, isAdding)
                    .subscribe(res => {
                    if (res[0] != "KO") {
                        //console.log(res);
                        let newOrderRow = result.orderRow;
                        if (newOrderRow.id == "") {
                            newOrderRow.id = res[1];
                            this.orderRows.push(newOrderRow);
                            this.createOrderRowGridRowData();
                        }
                        else {
                            this.updateOrderRow(result.orderRow);
                        }
                        let orderStatus = {
                            id: "0",
                            username: localStorage.getItem('sangue_username'),
                            id_order: result.orderRow.id_ordine,
                            d_status: this.getFormattedDate(new Date()),
                            status: "inviato",
                            note: "modifica riga d'ordine",
                            b_sto: false
                        };
                        this.setOrderStatus(orderStatus);
                        isAdding ? this.snackbarService.onCreate() : this.snackbarService.onUpdate();
                    }
                    else {
                        console.error("Error setting orderRow!");
                    }
                });
            }
        });
    }
    /*
    openAddOrderRowDialog() {
      const dialogConfig = new MatDialogConfig();
      //dialogConfig.autoFocus = true;
      dialogConfig.data = {
        order: this.data.order,
        orderRows: this.orderRows, //array di orderRows
        forecasts: this.forecasts
      }
          
      this.dialogRef = this.dialog.open(
        AddOrderRowComponent,
        dialogConfig
      );
  
      this.dialogRef.afterClosed().subscribe(
        (result: { isSubmitted: boolean }) => {
        if(result !== undefined && result.isSubmitted){
          console.log(result);
        }
      });
    }
    */
    openAreYouSureOrderDialog(id) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogConfig();
        dialogConfig.data = { id: id };
        this.dialogRef = this.dialog.open(_are_you_sure_order_are_you_sure_order_component__WEBPACK_IMPORTED_MODULE_2__.AreYouSureOrderComponent, dialogConfig);
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined && result.isSubmitted) {
                this.thisDialogRef.close({
                    orderId: id,
                    orderRows: this.orderRows,
                    isSubmitted: result.isSubmitted
                });
            }
        });
    }
    productIdToDes(id) {
        for (var i = 0; i < this.products.length; ++i) {
            if (id == this.products[i].id) {
                return this.products[i].des;
            }
        }
        return "";
    }
    usernameToClient(username) {
        for (var i = 0; i < this.users.length; ++i) {
            if (username == this.users[i].username) {
                return this.users[i].client;
            }
        }
        return "";
    }
    onClose(id) {
        if (this.orderRows.length == 0) {
            this.thisDialogRef.close({
                isClosing: true,
                deleteOrder: true
            });
        }
        else {
            this.thisDialogRef.close();
        }
    }
    getFormattedDate(date) {
        let splitDate = date.toLocaleString('it-IT').split(",", 2)[0].split("/", 3);
        let day = splitDate[0];
        let month = splitDate[1];
        let year = splitDate[2];
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        return year + "-" + month + "-" + day;
    }
    setOrderStatus(orderStatus) {
        this.ordersService.setOrderStatusPromise(orderStatus).subscribe(res => {
            if (res[0] == "OK") {
                console.log("Status for order " + orderStatus.id_order + " successfully set!");
            }
            else {
                console.error("Error setting status for order " + orderStatus.id_order);
            }
        });
    }
    validateOrder() {
        console.log(this.order);
        this.isValidated = true;
        this.thisDialogRef.close({
            order: this.order,
            orderRows: this.orderRows,
            isValidated: this.isValidated
        });
    }
    confirmQtaRicevuta() {
        for (var i = 0; i < this.orderRows.length; ++i) {
            if (this.orderRowGridRowData[i].qta_ricevuta == -1) {
                this.orderRowGridRowData[i].qta_ricevuta = this.orderRowGridRowData[i].qta_validata;
            }
            this.onQtaRicevutaSet(this.orderRows[i], this.orderRowGridRowData[i].qta_ricevuta);
        }
        var isQtaRicevutaConfirmed = true;
        this.thisDialogRef.close({
            order: this.order,
            orderRows: this.orderRows,
            isQtaRicevutaConfirmed: isQtaRicevutaConfirmed
        });
    }
    createOrderRowGridRowData() {
        this.orderRowGridRowData = [];
        for (var i = 0; i < this.orderRows.length; ++i) {
            var newOrderRow = {
                id: this.orderRows[i].id,
                id_ordine: this.orderRows[i].id_ordine,
                n_riga: this.orderRows[i].n_riga,
                id_prd: this.orderRows[i].id_prd,
                product_name: this.productIdToDes(this.orderRows[i].id_prd),
                username: this.order.username,
                full_username: "",
                qta: this.orderRows[i].qta,
                max_mese: this.getMaxMeseByProdIdAndUsername(this.orderRows[i].id_prd, this.order.username),
                motivazione: this.orderRows[i].motivazione,
                qta_validata: this.orderRows[i].qta_validata,
                qta_ricevuta: this.orderRows[i].qta_ricevuta,
                note: this.orderRows[i].note,
                isQtaRicevutaSet: this.orderRows[i].qta_ricevuta >= 0
            };
            //console.log(newOrderRow);
            this.orderRowGridRowData.push(newOrderRow);
        }
        //console.log(this.orderRowGridRowData);
    }
    getMaxMeseByProdIdAndUsername(id_prd, username) {
        for (var i = 0; i < this.forecasts.length; ++i) {
            if (this.forecasts[i].id_prd == id_prd) {
                if (this.forecasts[i].username == username) {
                    return Math.floor(this.forecasts[i].qta_approvata / 12);
                }
            }
        }
        return -1;
    }
    updateOrderRow(orderRow) {
        for (var i = 0; i < this.orderRows.length; ++i) {
            if (this.orderRows[i].id == orderRow.id) {
                this.orderRows[i] = orderRow;
            }
        }
        this.createOrderRowGridRowData();
    }
    isQtaRicevutaSetAND() {
        var auxBool = true;
        for (var i = 0; i < this.orderRowGridRowData.length; ++i) {
            auxBool = auxBool && this.orderRowGridRowData[i].isQtaRicevutaSet;
        }
        return auxBool;
    }
}
EditOrderDialogComponent.ɵfac = function EditOrderDialogComponent_Factory(t) { return new (t || EditOrderDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_4__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_6__.SnackbarService)); };
EditOrderDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EditOrderDialogComponent, selectors: [["app-edit-order-dialog"]], viewQuery: function EditOrderDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__.AgGridAngular, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.agGrid = _t.first);
    } }, decls: 56, vars: 25, consts: [["mat-dialog-title", "", "align", "center", 2, "text-align", "center"], ["align", "center"], [1, "typography"], ["align", "center", 4, "ngIf"], ["mat-table", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "n_riga"], ["mat-header-cell", "", "align", "center", 4, "matHeaderCellDef"], ["mat-cell", "", "align", "center", 4, "matCellDef"], ["matColumnDef", "product"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "qta"], ["matColumnDef", "max_mese"], ["matColumnDef", "motivazione"], ["matColumnDef", "qta_validata"], ["matColumnDef", "qta_ricevuta", 4, "ngIf"], ["matColumnDef", "note"], ["matColumnDef", "edit"], ["matColumnDef", "delete"], ["matColumnDef", "diff"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["align", "center", "style", "color: red", 4, "ngIf"], ["mat-dialog-actions", "", "align", "center"], ["style", "margin: 5px;", "mat-mini-fab", "", "color", "basic", 3, "matTooltip", "click", 4, "ngIf"], ["style", "margin: 5px;", "mat-mini-fab", "", "color", "warn", 3, "matTooltip", "click", 4, "ngIf"], ["style", "margin: 5px;", "mat-mini-fab", "", "color", "primary", 3, "matTooltip", "click", 4, "ngIf"], ["style", "margin: 5px;", "mat-mini-fab", "", "mat-dialog-close", "", "color", "accent", 3, "matTooltip", 4, "ngIf"], ["style", "margin: 5px;", "mat-mini-fab", "", "color", "accent", 3, "matTooltip", "click", 4, "ngIf"], ["mat-header-cell", "", "align", "center"], ["mat-cell", "", "align", "center"], ["mat-header-cell", ""], ["mat-cell", ""], ["matColumnDef", "qta_ricevuta"], ["matInput", "", "type", "number", 2, "max-width", "50px", 3, "disabled", "ngModel", "ngModelChange", "keyup.enter", "keyup.tab_next"], ["matInput", "", "type", "number", "disabled", "true", 2, "max-width", "50px", 3, "ngModel", "ngModelChange", "keyup.enter", "keyup.tab_next"], ["mat-mini-fab", "", "color", "primary", 3, "matTooltip", "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 3, "matTooltip", "click"], [1, "material-icons"], ["mat-mini-fab", "", "color", "warn", 3, "matTooltip", "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "warn", 3, "matTooltip", "click"], ["mat-header-row", ""], ["mat-row", ""], ["align", "center", 2, "color", "red"], ["mat-mini-fab", "", "color", "basic", 2, "margin", "5px", 3, "matTooltip", "click"], ["mat-mini-fab", "", "color", "warn", 2, "margin", "5px", 3, "matTooltip", "click"], ["mat-mini-fab", "", "color", "primary", 2, "margin", "5px", 3, "matTooltip", "click"], ["mat-mini-fab", "", "mat-dialog-close", "", "color", "accent", 2, "margin", "5px", 3, "matTooltip"], ["mat-mini-fab", "", "color", "accent", 2, "margin", "5px", 3, "matTooltip", "click"]], template: function EditOrderDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h3", 1)(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, EditOrderDialogComponent_p_9_Template, 3, 3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, EditOrderDialogComponent_th_12_Template, 3, 3, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, EditOrderDialogComponent_td_13_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, EditOrderDialogComponent_th_15_Template, 3, 3, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, EditOrderDialogComponent_td_16_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, EditOrderDialogComponent_th_18_Template, 3, 3, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, EditOrderDialogComponent_td_19_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](20, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, EditOrderDialogComponent_th_21_Template, 3, 3, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, EditOrderDialogComponent_td_22_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](23, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, EditOrderDialogComponent_th_24_Template, 3, 3, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, EditOrderDialogComponent_td_25_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](26, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, EditOrderDialogComponent_th_27_Template, 3, 3, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, EditOrderDialogComponent_td_28_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, EditOrderDialogComponent_ng_container_29_Template, 3, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, EditOrderDialogComponent_ng_container_30_Template, 3, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, EditOrderDialogComponent_ng_container_31_Template, 3, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, EditOrderDialogComponent_ng_container_32_Template, 3, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](33, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, EditOrderDialogComponent_th_34_Template, 3, 3, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, EditOrderDialogComponent_td_35_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](36, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, EditOrderDialogComponent_th_37_Template, 1, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, EditOrderDialogComponent_td_38_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](39, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, EditOrderDialogComponent_th_40_Template, 1, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, EditOrderDialogComponent_td_41_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](42, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, EditOrderDialogComponent_th_43_Template, 3, 3, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, EditOrderDialogComponent_td_44_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, EditOrderDialogComponent_tr_45_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, EditOrderDialogComponent_tr_46_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, EditOrderDialogComponent_h5_47_Template, 3, 3, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, EditOrderDialogComponent_button_49_Template, 4, 3, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, EditOrderDialogComponent_button_50_Template, 4, 3, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, EditOrderDialogComponent_button_51_Template, 4, 3, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, EditOrderDialogComponent_button_52_Template, 4, 3, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, EditOrderDialogComponent_button_53_Template, 4, 3, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, EditOrderDialogComponent_button_54_Template, 4, 3, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, EditOrderDialogComponent_button_55_Template, 4, 3, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 21, "Order"), " ", ctx.data.order.n_ordine, " ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 23, "placed by user"), " ", ctx.usernameToClient(ctx.data.order.username), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.data.status, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.orderRows.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.orderRowGridRowData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.status != "ricevuto");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.status == "ricevuto" && ctx.userCode == "210");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.status == "ricevuto" && ctx.userCode == "220");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.status == "ricevuto" && ctx.userCode == "230");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.status == "ricevuto" && !ctx.isQtaRicevutaSetAND());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLocked && ctx.orderRows.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLocked && ctx.orderRows.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userCode == "220" && !ctx.isValidated);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.userCode == "220" || ctx.userCode == "210") && ctx.data.status == "ricevuto" && !ctx.isQtaRicevutaSetAND());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLocked && ctx.orderRows.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLocked);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.orderRows.length == 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogActions, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: ["th[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\ntd[_ngcontent-%COMP%] {\n    margin-right: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtb3JkZXItZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiZWRpdC1vcmRlci1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59Il19 */"] });


/***/ }),

/***/ 9759:
/*!************************************************************!*\
  !*** ./src/app/edit-order-row/edit-order-row.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditOrderRowComponent": () => (/* binding */ EditOrderRowComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _forecast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forecast.service */ 4472);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 8699);

















function EditOrderRowComponent_h3_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Add order row"));
  }
}
function EditOrderRowComponent_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Edit order row"));
  }
}
function EditOrderRowComponent_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onSelectionChange", function EditOrderRowComponent_mat_option_12_Template_mat_option_onSelectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.onProductSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const optionP_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", optionP_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", optionP_r9, " ");
  }
}
function EditOrderRowComponent_mat_form_field_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field")(1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function EditOrderRowComponent_mat_form_field_17_Template_input_blur_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.onBlur($event));
    })("keyup", function EditOrderRowComponent_mat_form_field_17_Template_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.checkFields($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate5"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 7, "Quantity"), " (max: ", ctx_r4.qtyThreshold, ", preventivato: ", ctx_r4.qtyEstimated, ", ordinato: ", ctx_r4.qtyOrdered, ", rimanenza: ", ctx_r4.qtyRemaining, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("step", ctx_r4.step);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r4.qta);
  }
}
function EditOrderRowComponent_mat_form_field_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field")(1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function EditOrderRowComponent_mat_form_field_18_Template_input_blur_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.onBlur($event));
    })("keyup", function EditOrderRowComponent_mat_form_field_18_Template_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.checkFields($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate6"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 8, "Quantity"), " (min: ", ctx_r5.minQty, ", max: ", ctx_r5.qtyThreshold, ",  preventivato: ", ctx_r5.qtyEstimated, ", ordinato: ", ctx_r5.qtyOrdered, ", rimanenza: ", ctx_r5.qtyRemaining, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("step", ctx_r5.step);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r5.qta);
  }
}
function EditOrderRowComponent_mat_form_field_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field")(1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function EditOrderRowComponent_mat_form_field_19_Template_input_blur_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.onBlur($event));
    })("keyup", function EditOrderRowComponent_mat_form_field_19_Template_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.checkFields($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate5"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 7, "Quantity"), " (min: ", ctx_r6.minQty, ",  preventivato: ", ctx_r6.qtyEstimated, ", ordinato: ", ctx_r6.qtyOrdered, ", rimanenza: ", ctx_r6.qtyRemaining, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("step", ctx_r6.step);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r6.qta);
  }
}
function EditOrderRowComponent_mat_form_field_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field")(1, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function EditOrderRowComponent_mat_form_field_20_Template_input_blur_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.onBlur($event));
    })("keyup", function EditOrderRowComponent_mat_form_field_20_Template_input_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.checkFields($event));
    })("focus", function EditOrderRowComponent_mat_form_field_20_Template_input_focus_1_listener() {
      return true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "Reason"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r7.motivazione);
  }
}
function EditOrderRowComponent_mat_form_field_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Validated quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r8.qta_validata);
  }
}
class EditOrderRowComponent {
  constructor(data, dialogRef, _builder, loginService, forecastService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this._builder = _builder;
    this.forecastService = forecastService;
    this.isSubmitted = false;
    this.forecasts = [];
    this.orderRows = [];
    //flags for field checking
    this.productOK = false;
    this.nRigaOK = false;
    this.quantitaOK = false;
    this.motivazioneOK = false;
    this.isSubmitEnabled = false;
    this.isMotivazioneVisible = false;
    this.products = [];
    this.productOptions = [];
    this.users = [];
    this.userOptions = [];
    this.minQty = 0;
    this.isUrgent = false;
    this.step = 0;
    this.loginService = loginService;
    this.orderRow = data.orderRow;
    this.orderRows = data.orderRows;
    this.users = data.users;
    this.forecasts = data.forecasts;
    this.isMotivazioneVisible = this.orderRow.motivazione != "" && this.orderRow.motivazione != null; //TODO: sistemare qui
    if (data.isUrgent) {
      this.isUrgent = data.isUrgent;
      this.isMotivazioneVisible = true;
    }
    //se sangueaslno
    if (loginService.getUserCode() == "220") {
      if (this.orderRow.id != "") {
        this.usersFormControl = _builder.control(this.orderRow.username == "" ? "" : this.usernameToClient(this.orderRow.username), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
        //this.userOptions = this.usersToOptions(this.users);
      } else {
        //do nothing, orderRow.username is already assigned
      }
    }
    //se sangueasl
    else if (loginService.getUserCode() == "210") {
      if (this.orderRow.id != null) {
        this.usersFormControl = _builder.control(localStorage.getItem("id_profile"));
      } else {
        this.usersFormControl = _builder.control(this.usernameToClient(localStorage.getItem("id_profile")));
      }
    }
    //products
    this.products = data.products;
    //console.log("Received:");
    //console.log(this.data);
    this.productsFormControl = _builder.control(this.productIdToDes(this.orderRow.id_prd), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
    this.productOptions = this.productsToOptions(this.products);
    //this.n_riga = _builder.control(this.orderRow.n_riga == null ? 0 : this.orderRow.n_riga, Validators.required);
    //console.log("RIGA: " +  this.orderRow.n_riga == "0" ? this.orderRows.length + 1 : this.orderRow.n_riga);
    this.n_riga = _builder.control(this.orderRow.n_riga == 0 ? this.orderRows.length + 1 : this.orderRow.n_riga, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
    this.qta = _builder.control(this.orderRow.qta, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
    this.motivazione = _builder.control(this.orderRow.motivazione, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
    this.qta_validata = _builder.control(this.orderRow.qta_validata, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
    this.note = _builder.control(this.orderRow.note);
    this.selectProductAtStart(this.data.orderRow.id_prd);
    this.onProductSelectedByDes(this.productsFormControl.value);
    this.checkFields();
  }
  ngOnInit() {
    //first filter
    this.filteredProductOptions = this.productsFormControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(value => this._filterProducts(value || '')));
    this.checkFields();
  }
  _filterProducts(value) {
    const filterValue = value.toLowerCase();
    return this.productOptions.filter(option => option.toLowerCase().includes(filterValue));
  }
  productsToOptions(products) {
    var productOptions = [];
    for (var i = 0; i < products.length; ++i) {
      productOptions.push(products[i].des);
    }
    return productOptions;
  }
  productDesToId(des) {
    //console.log("des: " + des);
    for (var i = 0; i < this.products.length; ++i) {
      if (des == this.products[i].des) {
        console.log("step " + this.products[i].multiplo_confezionamento);
        this.step = this.products[i].multiplo_confezionamento;
        return this.products[i].id;
      }
    }
    this.step = 0;
    return "";
  }
  productIdToDes(id) {
    for (var i = 0; i < this.products.length; ++i) {
      if (id == this.products[i].id) {
        console.log("returning " + this.products[i].des);
        return this.products[i].des;
      }
    }
    //return first product of the list
    return this.products[0].des;
  }
  usersToOptions(users) {
    var userOptions = [];
    for (var i = 0; i < users.length; ++i) {
      userOptions.push(users[i].client);
    }
    return userOptions;
  }
  userClientToId(client) {
    for (var i = 0; i < this.users.length; ++i) {
      if (client == this.users[i].client) {
        return this.users[i].username;
      }
    }
    return "";
  }
  usernameToClient(username) {
    for (var i = 0; i < this.users.length; ++i) {
      if (username == this.users[i].username) {
        return this.users[i].client;
      }
    }
    return "";
  }
  onUserSelected(event) {
    console.log(event.source.value);
    console.log(this.userClientToId(event.source.value));
  }
  adjustQta() {
    this.qtyValue = this.qta.value;
    while (this.qtyValue % this.step != 0) {
      this.qtyValue++;
    }
    this.qta.setValue(this.qtyValue);
  }
  onProductSelected(event) {
    if (event.source.selected) {
      this.qtyEstimated = 0;
      this.qtyOrdered = 0;
      this.qtyRemaining = 0;
      let productId = this.productDesToId(event.source.value);
      this.productsFormControl.setValue(event.source.value);
      this.qtyThreshold = Math.floor(this.getQtaApprovataByProductId(productId) / 12);
      this.minQty = this.getMinOrdByProductId(productId);
      this.minQty = this.minQty > this.step ? this.step : this.minQty;
      this.checkFields(event);
      this.forecastService.getForecastRemainderPromise(this.data.year, productId).subscribe(res => {
        console.log(res);
        if (res[0] == "OK") {
          this.qtyEstimated = res[1].tot_preventivato;
          this.qtyOrdered = res[1].tot_ordinato;
          this.qtyRemaining = res[1].rimanenza;
          console.log(this.qtyEstimated + " " + this.qtyOrdered + " " + this.qtyRemaining);
        } else {
          console.error("Error retrieving forecastRemainder!");
        }
      });
    }
  }
  onProductSelectedByDes(des) {
    let productId = this.productDesToId(des);
    this.productsFormControl.setValue(des);
    this.qtyThreshold = Math.floor(this.getQtaApprovataByProductId(productId) / 12);
    this.minQty = this.getMinOrdByProductId(productId);
    this.minQty = this.minQty > this.step ? this.step : this.minQty;
    this.checkFields();
  }
  selectProductAtStart(productId) {
    this.productsFormControl.setValue(this.productIdToDes(productId));
    //this.productsFormControl.setValue(this.productIdToDes(productId));
    this.qtyThreshold = Math.floor(this.getQtaApprovataByProductId(productId) / 12);
    this.minQty = this.getMinOrdByProductId(productId);
    this.minQty = this.minQty > this.step ? this.step : this.minQty;
    this.checkFields();
  }
  setQtyStepByProductId(productId) {}
  getQtaApprovataByProductId(id) {
    for (var i = 0; i < this.forecasts.length; ++i) {
      if (this.forecasts[i].id_prd == id) {
        //console.log("corresponding forecast:");
        //console.log(this.forecasts[i]);        
        if (this.forecasts[i].qta_approvata > 0) {
          return this.forecasts[i].qta_approvata;
        }
      }
    }
    return -1;
  }
  getMinOrdByProductId(id) {
    for (var i = 0; i < this.products.length; ++i) {
      if (this.products[i].id == id) {
        //console.log("product for minOrd:");
        //console.log(this.products[i]);
        //console.log("min_ord: " + this.products[i].min_ord);
        return this.products[i].min_ord;
      }
    }
    return 0;
  }
  assignOrderRowValues() {
    this.orderRow.id_prd = this.productDesToId(this.productsFormControl.value);
    this.orderRow.n_riga = this.n_riga.value;
    this.orderRow.note = this.note.value;
    this.orderRow.qta = this.qta.value;
    this.orderRow.motivazione = this.motivazione.value;
    this.orderRow.qta_validata = this.qta_validata.value;
    //this.orderRow.username = this.userClientToId(this.usersFormControl.value);
  }

  onSubmit() {
    this.adjustQta();
    this.isSubmitted = true;
    this.assignOrderRowValues();
    console.log(this.orderRow);
    this.dialogRef.close({
      orderRow: this.orderRow,
      isSubmitted: this.isSubmitted
    });
  }
  onBlur(event) {
    //console.log(event);
    {
      if (this.qta.value == null) {
        this.qta.setValue(0);
        this.isMotivazioneVisible = false;
      }
      this.qtyValue = this.qta.value;
      if (this.isUrgent) {
        this.isMotivazioneVisible = true;
        console.log(this.isMotivazioneVisible);
      } else {
        if (this.qtyThreshold == -1 || this.qtyValue <= this.qtyThreshold) {
          this.isMotivazioneVisible = false;
          this.motivazione.setValue(null);
          return;
        }
        if (this.qtyValue > this.qtyThreshold && (this.motivazione.value == "" || this.motivazione.value == null)) {
          alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLanguage == 'it' ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.it.ThresholdSurpassed : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.en.ThresholdSurpassed);
          this.isMotivazioneVisible = true;
          return;
        }
      }
    }
  }
  checkFields(event) {
    //console.log(event);
    this.isSubmitEnabled = false;
    //this.productsFormControl.setValue(this.productsFormControl.value);
    //console.log("checkFields(): " + this.productsFormControl.value);
    //console.log("motivazione: " + this.motivazione.value);
    //se il prodotto scritto è tra i prodotti esistenti AND
    //se il numero riga è positivo
    //se la quantità è maggiore della soglia
    //se la motivazione non è vuota
    //abilita submit
    //se la quantità è == -1
    //abilita submit
    //il prodotto esiste e ha un numero riga
    if (this.isAmongProducts(this.productsFormControl.value) && this.n_riga.value > 0) {
      //console.log("the product exists");
      //l'ordine è urgente
      if (this.isUrgent) {
        if (this.motivazione.value != "" && this.motivazione.value != null) {
          this.isSubmitEnabled = true;
        }
      }
      //se non è urgente
      else {
        //ha una soglia
        if (this.qtyThreshold != -1 && this.minQty >= 0) {
          //se la soglia è stata superata, serve una motivazione
          if (this.qta.value > this.qtyThreshold) {
            //non ha una motivazione --> submit disabilitato
            if (this.motivazione.value == null || this.motivazione.value == undefined || this.motivazione.value == "") {
              //console.log("\treason EMPTY --> disabling submit");
              this.isSubmitEnabled = false;
            }
            //ha una motivazione --> submit abilitato
            else if (this.motivazione.value != null && this.motivazione.value != "" && this.motivazione.value != undefined) {
              //console.log("\treason not empty --> enabling submit");
              this.isSubmitEnabled = true;
            }
          }
          //se la soglia non è stata superata, non serve una motivazione MA serve vedere che sia stata superata la minQty
          else {
            //console.log("threshold not surpassed, enabling submit independently from motivazione");
            if (this.qta.value >= this.minQty) this.isSubmitEnabled = true;else this.isSubmitEnabled = false;
          }
        }
        //non ha una soglia --> abilito submit
        else {
          //console.log("threshold not set");
          if (this.qta.value > 0 && this.qta.value >= this.minQty) {
            this.isSubmitEnabled = true;
          }
        }
      }
    }
    //prodotto non esiste o non ha un numero riga --> submit disabilitato a prescindere
    else {
      this.isSubmitEnabled = false;
    }
    if (this.qta.value <= 0) {
      this.isSubmitEnabled = false;
    }
  }
  isAmongProducts(inputValue) {
    for (var i = 0; i < this.products.length; ++i) {
      if (inputValue == this.products[i].des) {
        this.getQtaApprovataByProductId(this.products[i].id);
        return true;
      }
    }
    this.qtyThreshold = Infinity;
    return false;
  }
}
EditOrderRowComponent.ɵfac = function EditOrderRowComponent_Factory(t) {
  return new (t || EditOrderRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_forecast_service__WEBPACK_IMPORTED_MODULE_2__.ForecastService));
};
EditOrderRowComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: EditOrderRowComponent,
  selectors: [["app-edit-order-row"]],
  decls: 34,
  vars: 33,
  consts: [["mat-dialog-title", "", 4, "ngIf"], ["mat-dialog-content", ""], [1, "example-full-width"], ["type", "text", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete", "keyup"], ["autoActiveFirstOption", ""], ["autoP", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", 3, "placeholder", "formControl", "keyup"], [4, "ngIf"], ["matInput", "", "type", "text", 3, "placeholder", "formControl"], ["mat-dialog-actions", "", "align", "center"], ["mat-mini-fab", "", "color", "primary", 2, "margin", "5px", 3, "disabled", "matTooltip", "click"], [1, "material-icons"], ["mat-mini-fab", "", "matDialogClose", "true", "color", "accent", 2, "margin", "5px", 3, "matTooltip"], ["mat-dialog-title", ""], [3, "value", "onSelectionChange"], ["matInput", "", "type", "number", 3, "placeholder", "formControl", "step", "blur", "keyup"], ["matInput", "", "type", "text", 3, "placeholder", "formControl", "blur", "keyup", "focus"], ["motivazioneInput", ""], ["matInput", "", "type", "number", 3, "placeholder", "formControl"]],
  template: function EditOrderRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EditOrderRowComponent_h3_0_Template, 3, 3, "h3", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditOrderRowComponent_h3_1_Template, 3, 3, "h3", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "form")(4, "mat-form-field", 2)(5, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function EditOrderRowComponent_Template_input_keyup_8_listener($event) {
        return ctx.checkFields($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-autocomplete", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, EditOrderRowComponent_mat_option_12_Template, 2, 2, "mat-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field")(15, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function EditOrderRowComponent_Template_input_keyup_15_listener($event) {
        return ctx.checkFields($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, EditOrderRowComponent_mat_form_field_17_Template, 3, 9, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, EditOrderRowComponent_mat_form_field_18_Template, 3, 10, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, EditOrderRowComponent_mat_form_field_19_Template, 3, 9, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, EditOrderRowComponent_mat_form_field_20_Template, 4, 4, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, EditOrderRowComponent_mat_form_field_21_Template, 3, 4, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 10)(26, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditOrderRowComponent_Template_button_click_26_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "check");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orderRow.id == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orderRow.id != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 19, "Product"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 21, "Choose a product"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.productsFormControl)("matAutocomplete", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 23, ctx.filteredProductOptions));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 25, "Row number"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.n_riga);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.qtyThreshold != -1 && ctx.minQty == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.qtyThreshold != -1 && ctx.minQty > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.qtyThreshold == -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMotivazioneVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 27, "Notes"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.note);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 29, "Submit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.isSubmitEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 31, "Cancel"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
  styles: ["mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtb3JkZXItcm93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiZWRpdC1vcmRlci1yb3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
});

/***/ }),

/***/ 7881:
/*!****************************************************!*\
  !*** ./src/app/edit-order/edit-order.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditOrderComponent": () => (/* binding */ EditOrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

//TODO: delete this class!
class EditOrderComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditOrderComponent.ɵfac = function EditOrderComponent_Factory(t) { return new (t || EditOrderComponent)(); };
EditOrderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditOrderComponent, selectors: [["app-edit-order"]], decls: 2, vars: 0, template: function EditOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-order works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW9yZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 724:
/*!**************************************************************!*\
  !*** ./src/app/forecast-report/forecast-report.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForecastReportComponent": () => (/* binding */ ForecastReportComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _forecast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forecast.service */ 4472);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ 474);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 8699);

















function ForecastReportComponent_mat_form_field_6_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onSelectionChange", function ForecastReportComponent_mat_form_field_6_mat_option_5_Template_mat_option_onSelectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.onUserSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r5, " ");
  }
}
function ForecastReportComponent_mat_form_field_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-autocomplete", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ForecastReportComponent_mat_form_field_6_mat_option_5_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, "User"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r0.userFormControl)("matAutocomplete", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 6, ctx_r0.filteredUsers));
  }
}
function ForecastReportComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "Logged as"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.loginService.currentUser.client);
  }
}
const _c0 = function () {
  return ["/login"];
};
function ForecastReportComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, "You're not logged!"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 5, "Login"));
  }
}
class ForecastReportComponent {
  //END: autocomplete - users
  constructor(forecastService, usersService, loginService, _builder) {
    this.forecastService = forecastService;
    this.usersService = usersService;
    this._builder = _builder;
    this.year = new Date().getFullYear().toString();
    this.isInputAmongUsers = false;
    this.username = "";
    //BEGIN: autocomplete - users
    this.users = [];
    this.userNames = [];
    this.loginService = loginService;
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers.length != 0) {
      this.users = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers;
      this.userFormControl = _builder.control(this.users[0].client);
    } else {
      console.log("getting users globally");
      this.userFormControl = _builder.control("");
      this.getUsersGlobally();
    }
  }
  ngOnInit() {
    //filter input for users
    this.getUserNames();
    console.log(this.userFormControl);
    this.filteredUsers = this.userFormControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)(value => this._filterUsers(value || '')));
  }
  getReport(username, year) {
    this.forecastService.getForecastPdfPromise(username, year).subscribe(res => {
      if (res[0] == "KO") {
        console.error("Error retrieving report for user " + username);
      } else {
        //console.log(res);
        window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.reportPath + res[1][0].filename, "_blank");
      }
    });
  }
  getUsersGlobally() {
    this.usersService.listUsersPromise("210").subscribe(res => {
      if (res[0] == "OK") {
        this.users = res[1];
        src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers = res[1];
        this.getUserNames();
        this.username = this.users[0].id;
        this.userFormControl = this._builder.control(this.users[0].client);
      } else {
        console.error("Error retrieving users!");
      }
    });
  }
  //BEGIN functions for autocomplete - USERS
  _filterUsers(value) {
    const filterValue = value.toLowerCase();
    return this.userNames.filter(option => option.toLowerCase().includes(filterValue));
  }
  getUserId(event) {
    for (let i = 0; i < this.users.length; ++i) {
      if (this.users[i].client == event.source.value) {
        //console.log(this.users[i].id);
        return this.users[i].id;
      }
    }
  }
  getUserNames() {
    for (let i = 0; i < this.users.length; ++i) {
      this.userNames.push(this.users[i].client);
    }
    //console.log(this.userNames);
  }

  onUserSelected(event) {
    this.isInputAmongUsers = false;
    if (event.source._selected) {
      this.username = this.getUserId(event);
    }
  }
}
ForecastReportComponent.ɵfac = function ForecastReportComponent_Factory(t) {
  return new (t || ForecastReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_forecast_service__WEBPACK_IMPORTED_MODULE_1__.ForecastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder));
};
ForecastReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ForecastReportComponent,
  selectors: [["app-forecast-report"]],
  decls: 19,
  vars: 13,
  consts: [[1, "second-nav"], ["align", "center", 1, "container"], ["style", "width: 50%", "align", "center", 4, "ngIf"], ["matInput", "", "type", "number", 2, "width", "50px", 3, "ngModel", "ngModelChange"], ["mat-fab", "", "color", "warn", 1, "mat-elevation-z0", 2, "margin", "5px", 3, "matTooltip", "click"], [1, "material-icons"], ["align", "center", 4, "ngIf"], ["align", "center", 2, "width", "50%"], ["align", "center", "type", "text", "matInput", "", 2, "width", "100%", 3, "placeholder", "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], ["onchange", "", 3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["onchange", "", 3, "value", "onSelectionChange"], ["align", "center"], [3, "routerLink"]],
  template: function ForecastReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1)(5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ForecastReportComponent_mat_form_field_6_Template, 7, 8, "mat-form-field", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ForecastReportComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.year = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p")(12, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ForecastReportComponent_Template_button_click_12_listener() {
        return ctx.getReport(ctx.username, ctx.year);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "picture_as_pdf");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ForecastReportComponent_p_17_Template, 6, 4, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ForecastReportComponent_p_18_Template, 6, 8, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 7, "Forecast reports"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 9, "Reference year"), ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.year);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 11, "View report"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUsername() != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginService.getUsername() == null);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JlY2FzdC1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 4472:
/*!*************************************!*\
  !*** ./src/app/forecast.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForecastService": () => (/* binding */ ForecastService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ 5619);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ForecastService {
    constructor(loginService, http) {
        this.loginService = loginService;
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'forecast.php';
        this.reportUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.reportPath + 'forecast.php';
        this.forecasts = [];
    }
    //GET
    listForecasts(year, result) {
        let request = 'listForecasts';
        let id_session = localStorage.getItem('id_session');
        let path = this.url + '?request=' + request + '&id_session=' + id_session + '&year=' + year;
        this.http.get(path, {
            responseType: "json"
        }).subscribe(res => {
            console.log(res);
            if (res[0] == "KO") {
                console.error("Error retrieving forecasts!");
                return null;
            }
            else {
                console.log(res[1]);
                result = res[1];
                console.log('result ' + result);
                return res[1];
            }
        });
    }
    listForecastsPromise(year) {
        let request = 'listForecasts';
        let id_session = localStorage.getItem('id_session');
        let path = this.url + '?request=' + request + '&id_session=' + id_session + '&year=' + year;
        return this.http.get(path, {
            responseType: "json"
        });
    }
    //POST
    setForecast(id, anno, username, id_prd, qta, note, qta_approvata, costo_unitario, isAdding) {
        if (!isAdding && parseInt(id) < 1) {
            console.error("Invalid ID!");
            id = "";
            return null;
        }
        if (id == "" ||
            anno.toString() == "" ||
            username == "" ||
            id_prd == "" ||
            qta.toString() == "") {
            console.error("\"note\" is the only acceptable empty parameter.");
            return null;
        }
        this.http.post(this.url, {
            request: 'setForecast',
            id_session: localStorage.getItem('id_session'),
            id: id,
            anno: anno,
            username: username,
            id_prd: id_prd,
            qta: qta,
            note: note,
            qta_approvata: qta_approvata,
            costo_unitario: costo_unitario
        }).subscribe(res => {
            //console.log("WS response: " + res);
            if (res[0] == "KO") {
                console.error("setForecast() error: " + res[1].toString());
                return null;
            }
            else {
                //console.log("Result: " + res[0]);
                //console.log("Product with ID " + res[1] + "successfully set!");
                return res[1].toString();
            }
        });
    }
    setForecastPromise(id, anno, username, id_prd, qta, note, qta_approvata, costo_unitario, isAdding) {
        if (!isAdding && parseInt(id) < 1) {
            console.error("Invalid ID!");
            id = "";
            return null;
        }
        else if (id == "" ||
            anno.toString() == "" ||
            username == "" ||
            id_prd == "" ||
            qta.toString() == "") {
            console.error("\"note\" is the only acceptable empty parameter.");
            return null;
        }
        else {
            return this.http.post(this.url, {
                request: 'setForecast',
                id_session: localStorage.getItem('id_session'),
                id: id,
                anno: anno,
                username: username,
                id_prd: id_prd,
                qta: qta,
                note: note,
                qta_approvata: qta_approvata,
                costo_unitario: costo_unitario
            });
        }
    }
    //POST
    addForecast(anno, username, id_prd, qta, note, qta_approvata, costo_unitario) {
        let id = "-1";
        let isAdding = true;
        return this.setForecast(id, anno, username, id_prd, qta, note, qta_approvata, costo_unitario, isAdding);
    }
    addForecastPromise(anno, username, id_prd, qta, note, qta_approvata, costo_unitario) {
        let id = "-1";
        let isAdding = true;
        return this.setForecastPromise(id, anno, username, id_prd, qta, note, qta_approvata, costo_unitario, isAdding);
    }
    //POST
    rmForecast(id) {
        if (id == "" || parseInt(id) < 1) {
            console.error("Invalid ID!");
            return;
        }
        this.http.post(this.url, {
            request: 'rmForecast',
            id_session: localStorage.getItem('id_session'),
            id: id
        }).subscribe(res => {
            console.log("WS response: " + res);
            if (res[0] == "KO") {
                console.error(res[1].toString());
            }
            else {
                //console.log("Removing product with ID " + res[0]);
                console.log("Product with ID " + res[1] + "successfully removed!");
            }
        });
    }
    rmForecastPromise(id) {
        if (id == "" || parseInt(id) < 1) {
            console.error("Invalid ID!");
            return null;
        }
        return this.http.post(this.url, {
            request: 'rmForecast',
            id_session: localStorage.getItem('id_session'),
            id: id
        });
    }
    getForecastsGlobally(year) {
        this.listForecastsPromise(year).subscribe(res => {
            if (res[0] == "OK") {
                this.forecasts = res[1];
                src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalForecasts = res[1];
                //console.log(environment.globalForecasts);
            }
            else {
                console.error("Error retrieving users!");
            }
        });
    }
    getForecastPdfPromise(username, year) {
        let request = 'getForecastPDF';
        let id_session = localStorage.getItem('id_session');
        let path = this.url + '?request=' + request + '&id_session=' + id_session + '&username=' + username + '&year=' + year;
        //console.log(path)
        return this.http.get(path, {
            responseType: "json"
        });
    }
    getForecastRemainderPromise(year, product_id) {
        let request = 'getForecastRemainder';
        let id_session = localStorage.getItem('id_session');
        let username = localStorage.getItem('sangue_username');
        product_id = product_id;
        let path = this.url + '?request=' + request + '&id_session=' + id_session + '&year=' + year + '&id_prd=' + product_id + '&username=' + username;
        console.log(path);
        return this.http.get(path, {
            responseType: "json"
        });
    }
}
ForecastService.ɵfac = function ForecastService_Factory(t) { return new (t || ForecastService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ForecastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ForecastService, factory: ForecastService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5206:
/*!************************************************!*\
  !*** ./src/app/forecast/forecast.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForecastComponent": () => (/* binding */ ForecastComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _add_forecast_add_forecast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-forecast/add-forecast.component */ 7858);
/* harmony import */ var _are_you_sure_forecast_are_you_sure_forecast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../are-you-sure-forecast/are-you-sure-forecast.component */ 7040);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ag-grid-angular */ 9771);
/* harmony import */ var src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/grid-configs */ 6980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _forecast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forecast.service */ 4472);
/* harmony import */ var _pharma_registry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pharma-registry.service */ 955);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../users.service */ 474);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../snackbar.service */ 9518);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 8699);





















function ForecastComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "nav", 1)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ForecastComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.openAddForecastDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "playlist_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ForecastComponent_div_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.listForecasts(ctx_r3.year)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ForecastComponent_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.year = $event); })("change", function ForecastComponent_div_0_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r5.listForecasts(ctx_r5.year)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ag-grid-angular", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("columnResized", function ForecastComponent_div_0_Template_ag_grid_angular_columnResized_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.saveColumnState()); })("columnVisible", function ForecastComponent_div_0_Template_ag_grid_angular_columnVisible_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.saveColumnState()); })("columnPivotChanged", function ForecastComponent_div_0_Template_ag_grid_angular_columnPivotChanged_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.saveColumnState()); })("columnRowGroupChanged", function ForecastComponent_div_0_Template_ag_grid_angular_columnRowGroupChanged_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.saveColumnState()); })("columnValueChanged", function ForecastComponent_div_0_Template_ag_grid_angular_columnValueChanged_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.saveColumnState()); })("columnMoved", function ForecastComponent_div_0_Template_ag_grid_angular_columnMoved_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.saveColumnState()); })("columnPinned", function ForecastComponent_div_0_Template_ag_grid_angular_columnPinned_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.saveColumnState()); })("gridReady", function ForecastComponent_div_0_Template_ag_grid_angular_gridReady_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.onGridReady($event)); })("firstDataRendered", function ForecastComponent_div_0_Template_ag_grid_angular_firstDataRendered_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.onFirstDataRendered($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 14, "Forecast registry"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 16, "Add forecast"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 18, "Refresh"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 20, "Reference year"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("getRowId", ctx_r0.getRowId)("rowData", ctx_r0.forecastGridRowData)("columnDefs", ctx_r0.forecastGridConfig)("defaultColDef", ctx_r0.defaultColDef)("alwaysShowHorizontalScroll", true)("alwaysShowVerticalScroll", true)("gridOptions", ctx_r0.gridOptions)("localeText", ctx_r0.localeText)("animateRows", true);
} }
class ForecastComponent {
    /*
    
      CONSTRUCTOR
    
    */
    constructor(loginService, forecastService, pharmaRegistryService, dialog, usersService, router, snackbarService) {
        this.loginService = loginService;
        this.forecastService = forecastService;
        this.pharmaRegistryService = pharmaRegistryService;
        this.dialog = dialog;
        this.usersService = usersService;
        this.router = router;
        this.snackbarService = snackbarService;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'forecast.php';
        this.pharmaRegistryUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'anag.php';
        this.loaded = 0;
        //parameters for [set|add|rm]Forecast()
        this.id = '';
        this.username = '';
        this.id_prd = '';
        this.note = '';
        this.year = new Date().getFullYear().toString();
        this.forecasts = [];
        this.forecastGridRowData = [];
        this.defaultColDef = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_3__.defaultColDef;
        //for dialog autocomplete
        this.users = [];
        this.products = [];
        this.isLoading = false;
        this.getRowId = (params) => {
            return params.data.id;
        };
        this.localeText = (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLanguage == 'it' ? src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_3__.AG_GRID_LOCALE_IT : src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_3__.AG_GRID_LOCALE_EN);
        this.onGridReady = (params) => {
            this.api = params.api;
            //console.log("log API:");
            //console.log(this.api);
            this.columnApi = params.columnApi;
            //this.autoSizeColumns(false);
        };
        this.onFirstDataRendered = (event) => {
            this.retrieveColumnState();
        };
        //columnDef
        switch (this.loginService.getProfile()) {
            case '210':
                this.forecastGridConfig = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_3__.gridConfigForecast210;
                break;
            case '220':
                this.forecastGridConfig = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_3__.gridConfigForecast220;
                break;
        }
        this.loginService.getCurrentUserSync();
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers.length == 0) {
            //get users and populate globalUsers
            this.usersService.getUsersGlobally();
        }
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalProducts.length == 0) {
            this.pharmaRegistryService.getProductsGlobally();
        }
        //gridOptions
        this.gridOptions = {
            /*onGridInit: () => {
              this.createForecastGridRowData();
              this.updateGrid();
            },
            */
            onCellClicked: (event) => {
                //console.log(event);
            },
            onCellValueChanged: (event) => {
                //console.log("Changed from " + event.oldValue + " to " + event.newValue);
                this.setForecast(event.data.id, event.data.anno, event.data.username, event.data.id_prd, event.data.qta, event.data.note, event.data.qta_approvata, event.data.costo_unitario);
            }
        };
    }
    autoSizeColumns(skipHeader) {
        /*
        const allColumnIds: string[] = [];
        this.columnApi.getColumns()!.forEach((column: { getId: () => string; }) => {
          allColumnIds.push(column.getId());
        });
        this.columnApi.autoSizeColumns(allColumnIds, skipHeader);
        */
        this.api.sizeColumnsToFit();
        //this.columnApi.autoSizeAllColumns(skipHeader);
    }
    retrieveColumnState() {
        let localColumnState = localStorage.getItem("forecastColumnState");
        //console.log("Column state:");
        //console.log(localColumnState);
        if (localColumnState != null) {
            //console.log(JSON.parse(localColumnState));
            this.columnApi.applyColumnState({ state: JSON.parse(localColumnState), applyOrder: true });
        }
    }
    saveColumnState() {
        const allState = this.columnApi.getColumnState();
        const localColumnState = allState.map((state) => ({
            colId: state.colId,
            sort: state.sort,
            sortIndex: state.sortIndex,
            aggFunc: state.aggFunc,
            flex: state.flex,
            pinned: state.pinned,
            pivot: state.pivot,
            pivotIndex: state.pivotIndex,
            rowGroup: state.rowGroup,
            rowGroupIndex: state.rowGroupIndex,
            width: state.width
        }));
        localStorage.setItem("forecastColumnState", JSON.stringify(localColumnState));
    }
    ngOnInit() {
        this.loginService.checkPromise().subscribe(res => {
            if (res[0] == "KO") {
                localStorage.removeItem("id_session");
                this.router.navigate(['login']);
            }
        });
        //retrieve data from db
        this.getAllForecastData();
        /*setTimeout(
          () => {
            this.api = this.agGrid.api;
            this.logAPI();
          }, 300);
          */
    }
    logAPI() {
        console.log(this.api);
    }
    setId(id) {
        this.id = id;
    }
    getAllForecastData() {
        this.isLoading = true;
        this.forecastService.listForecastsPromise(this.year).subscribe(res1 => {
            if (res1[0] == "KO") {
                console.error("Error retrieving forecasts for year " + this.year) + "!";
            }
            else {
                this.forecasts = res1[1];
                //console.log(this.forecasts);
                this.usersService.listUsersPromise("210").subscribe(res2 => {
                    if (res2[0] == "KO") {
                        console.error("Error retrieving users with code 210!");
                    }
                    else {
                        this.users = res2[1];
                        //console.log(this.users);
                        this.pharmaRegistryService.listProductsPromise().subscribe(res3 => {
                            if (res3[0] == "KO") {
                                console.error("Error retrieving products!");
                            }
                            else {
                                this.products = res3[1];
                                //console.log(this.products);
                                this.createForecastGridRowData();
                                //this.autoSizeColumns(false);
                                //this.api.setDomLayout('autoHeight');
                                this.isLoading = false;
                            }
                        });
                    }
                });
            }
        });
    }
    listForecasts(year) {
        this.forecastService.listForecastsPromise(year).subscribe(res => {
            //console.log(res);
            if (res[0] == "KO") {
                console.error("Error retrieving forecasts!");
            }
            else {
                this.forecasts = res[1];
                this.createForecastGridRowData();
            }
        });
    }
    createForecastGridRowData() {
        this.forecastGridRowData = [];
        for (var i = 0; i < this.forecasts.length; ++i) {
            var newForecastGridRowData = {
                id: this.forecasts[i].id,
                anno: this.forecasts[i].anno,
                username: this.forecasts[i].username,
                full_username: this.getFullUsernameById(this.forecasts[i].username),
                id_prd: this.forecasts[i].id_prd,
                product_name: this.getProductNameById(this.forecasts[i].id_prd),
                qta: this.forecasts[i].qta,
                note: this.forecasts[i].note,
                qta_approvata: this.forecasts[i].qta_approvata,
                costo_unitario: this.forecasts[i].costo_unitario
            };
            this.forecastGridRowData.push(newForecastGridRowData);
        }
        //console.log("forecastGridRowData");
        //console.log(this.forecastGridRowData);
    }
    getFullUsernameById(id) {
        for (var i = 0; i < this.users.length; ++i) {
            if (this.users[i].username == id) {
                return this.users[i].client;
            }
        }
        return "";
    }
    getProductNameById(id) {
        for (var i = 0; i < this.products.length; ++i) {
            if (this.products[i].id == id) {
                return this.products[i].des;
            }
        }
        return "";
    }
    setForecast(id, anno, username, id_prd, qta, note, qta_approvata, costo_unitario) {
        let isAdding = false;
        this.forecastService.setForecastPromise(id, anno, username, id_prd, qta, note, qta_approvata, costo_unitario, isAdding)?.subscribe(res => {
            this.setLocally(id, anno, username, id_prd, qta, note, qta_approvata, costo_unitario);
        });
    }
    setLocally(id, anno, username, id_prd, qta, note, qta_approvata, costo_unitario) {
        for (let i = 0; i < this.forecasts.length; ++i) {
            if (id == this.forecasts[i].id) {
                this.forecasts[i].anno = anno;
                this.forecasts[i].username = username;
                this.forecasts[i].id_prd = id_prd;
                this.forecasts[i].qta = qta;
                this.forecasts[i].note = note;
                this.forecasts[i].qta_approvata = qta_approvata;
                this.forecasts[i].costo_unitario = costo_unitario;
                //this.createForecastGridRowData();
                //this.updateGrid();
                return;
            }
        }
    }
    addForecast(anno, username, id_prd, qta, note, qta_approvata, costo_unitario) {
        this.forecastService.addForecastPromise(anno, username, id_prd, qta, note, qta_approvata, costo_unitario).subscribe((res) => {
            console.log("new forecast id: " + res[1]);
            let newForecast = {
                id: res[1],
                anno: anno,
                username: username,
                id_prd: id_prd,
                qta: qta,
                note: note,
                qta_approvata: qta_approvata,
                costo_unitario: costo_unitario
            };
            this.addLocally(newForecast);
            this.snackbarService.onCreate();
        });
    }
    addLocally(newForecast) {
        //console.log(newForecast);
        this.forecasts.push(newForecast);
        this.forecastGridRowData.push({
            id: newForecast.id,
            anno: newForecast.anno,
            username: newForecast.username,
            full_username: this.getFullUsernameById(newForecast.username),
            id_prd: newForecast.id_prd,
            product_name: this.getProductNameById(newForecast.id_prd),
            qta: newForecast.qta,
            note: newForecast.note,
            qta_approvata: newForecast.qta_approvata,
            costo_unitario: newForecast.costo_unitario
        });
        console.log("log API:");
        console.log(this.api);
        //devo aggiungere un ForecastGridRowData
        this.api.applyTransaction({
            add: [{
                    id: newForecast.id,
                    anno: newForecast.anno,
                    username: newForecast.username,
                    full_username: this.getFullUsernameById(newForecast.username),
                    id_prd: newForecast.id_prd,
                    product_name: this.getProductNameById(newForecast.id_prd),
                    qta: newForecast.qta,
                    note: newForecast.note,
                    qta_approvata: newForecast.qta_approvata,
                    costo_unitario: newForecast.costo_unitario
                }]
        });
        this.api.ensureIndexVisible(this.forecasts.length - 1);
    }
    rmForecast(id) {
        var rmForecastPromise = this.forecastService.rmForecastPromise(id);
        if (rmForecastPromise != null) {
            rmForecastPromise.subscribe(res => {
                console.log("forecast with id " + res[1] + " successfully removed!");
                this.rmLocally(id);
                this.snackbarService.onDelete();
            });
        }
    }
    rmLocally(id) {
        let visible = 0;
        for (let i = 0; i < this.forecasts.length; ++i) {
            if (id == this.forecasts[i].id) {
                this.forecasts.splice(i, 1);
                this.forecastGridRowData.splice(i, 1);
                if (this.forecasts.length == 0) {
                    //no-op
                }
                else {
                    //if it was the last index, make the current last index visible
                    if (i == this.forecasts.length) {
                        visible = this.forecasts.length - 1;
                    }
                    //if it was not the last index, make the current i index visible
                    else {
                        visible = i;
                    }
                }
                //this.createForecastGridRowData();
                //this.updateGrid();
                this.removeRow(id);
                //this.api.ensureIndexVisible(visible);
                return;
            }
        }
    }
    removeRow(id) {
        const toBeRemoved = [];
        const rowNodes = [];
        var forecast = this.getForecastGridRowDataById(id);
        this.api.forEachNodeAfterFilterAndSort(function (rowNode) {
            console.log(rowNode);
            if (rowNode.data.id != id) {
                return;
            }
            const data = rowNode.data;
            toBeRemoved.push(data);
            rowNodes.push(rowNode);
        });
        const res = this.api.applyTransaction({ remove: toBeRemoved });
        //this.api.redrawRows(rowNodes);
        console.log(res);
    }
    getForecastGridRowDataById(id) {
        for (var i = 0; i < this.forecastGridRowData.length; ++i) {
            if (this.forecastGridRowData[i].id == id) {
                return this.forecastGridRowData[i];
            }
        }
        return null;
    }
    openAddForecastDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            anno: this.anno,
            username: this.username,
            id_prd: this.id_prd,
            qta: this.qta,
            note: this.note,
            users: this.users,
            products: this.products //array of products
        };
        dialogConfig.width = "95%";
        dialogConfig.maxHeight = "500px";
        this.dialogRef = this.dialog.open(_add_forecast_add_forecast_component__WEBPACK_IMPORTED_MODULE_1__.AddForecastComponent, dialogConfig);
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined && result.isSubmitted) {
                console.log(result);
                if (result.anno == null ||
                    result.anno.toString() == '' ||
                    result.username == '' ||
                    result.id_prd === undefined ||
                    result.qta.toString() == '') {
                    alert("All Forecast core fields must have a value before submission! Submission aborted.");
                    return;
                }
                else {
                    this.addForecast(result.anno, result.username, result.id_prd, result.qta, result.note, result.qta_approvata, result.costo_unitario);
                    //this.updateGrid();
                }
            }
        });
    }
    openAreYouSureDialog() {
        this.dialogRef = this.dialog.open(_are_you_sure_forecast_are_you_sure_forecast_component__WEBPACK_IMPORTED_MODULE_2__.AreYouSureForecastComponent, {
            data: {
                id: this.id
            }
        });
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined && result.isSubmitted) {
                this.rmForecast(result.id);
                //this.updateGrid();
            }
        });
    }
    closeDialog() {
        this.dialog.closeAll();
        //this.listForecasts(this.year);
        this.api.setRowData(this.forecasts);
    }
    updateGrid() {
        console.log(this.api);
        this.api.setRowData(this.forecastGridRowData);
    }
}
ForecastComponent.ɵfac = function ForecastComponent_Factory(t) { return new (t || ForecastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_forecast_service__WEBPACK_IMPORTED_MODULE_5__.ForecastService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_pharma_registry_service__WEBPACK_IMPORTED_MODULE_6__.PharmaRegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_7__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_8__.SnackbarService)); };
ForecastComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ForecastComponent, selectors: [["app-forecast"]], viewQuery: function ForecastComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridAngular, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.agGrid = _t.first);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "second-nav"], ["mat-mini-fab", "", "color", "primary", 3, "matTooltip", "click"], [1, "material-icons"], ["mat-mini-fab", "", "color", "basic", 3, "matTooltip", "click"], ["matInput", "", "type", "number", 2, "width", "50px", 3, "placeholder", "ngModel", "ngModelChange", "change"], [1, "ag-theme-material", "ag-grid-table", 3, "getRowId", "rowData", "columnDefs", "defaultColDef", "alwaysShowHorizontalScroll", "alwaysShowVerticalScroll", "gridOptions", "localeText", "animateRows", "columnResized", "columnVisible", "columnPivotChanged", "columnRowGroupChanged", "columnValueChanged", "columnMoved", "columnPinned", "gridReady", "firstDataRendered"]], template: function ForecastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ForecastComponent_div_0_Template, 16, 22, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loginService.getProfile() == "210" || ctx.loginService.getProfile() == "220");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridAngular, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JlY2FzdC5jb21wb25lbnQuY3NzIn0= */"] });
ForecastComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: ForecastComponent, factory: ForecastComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8699);


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 20, vars: 3, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section")(4, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tortor egestas, vulputate tellus sed, fermentum mauris. Cras et sagittis tellus. Quisque eu scelerisque ante, sit amet commodo leo. Fusce interdum mollis nisl, bibendum euismod nunc. Morbi nisi felis, faucibus ac ultricies sit amet, auctor ut libero. Donec imperdiet suscipit rhoncus. Aenean eget nisi enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tortor egestas, vulputate tellus sed, fermentum mauris. Cras et sagittis tellus. Quisque eu scelerisque ante, sit amet commodo leo. Fusce interdum mollis nisl, bibendum euismod nunc. Morbi nisi felis, faucibus ac ultricies sit amet, auctor ut libero. Donec imperdiet suscipit rhoncus. Aenean eget nisi enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tortor egestas, vulputate tellus sed, fermentum mauris. Cras et sagittis tellus. Quisque eu scelerisque ante, sit amet commodo leo. Fusce interdum mollis nisl, bibendum euismod nunc. Morbi nisi felis, faucibus ac ultricies sit amet, auctor ut libero. Donec imperdiet suscipit rhoncus. Aenean eget nisi enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tortor egestas, vulputate tellus sed, fermentum mauris. Cras et sagittis tellus. Quisque eu scelerisque ante, sit amet commodo leo. Fusce interdum mollis nisl, bibendum euismod nunc. Morbi nisi felis, faucibus ac ultricies sit amet, auctor ut libero. Donec imperdiet suscipit rhoncus. Aenean eget nisi enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tortor egestas, vulputate tellus sed, fermentum mauris. Cras et sagittis tellus. Quisque eu scelerisque ante, sit amet commodo leo. Fusce interdum mollis nisl, bibendum euismod nunc. Morbi nisi felis, faucibus ac ultricies sit amet, auctor ut libero. Donec imperdiet suscipit rhoncus. Aenean eget nisi enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tortor egestas, vulputate tellus sed, fermentum mauris. Cras et sagittis tellus. Quisque eu scelerisque ante, sit amet commodo leo. Fusce interdum mollis nisl, bibendum euismod nunc. Morbi nisi felis, faucibus ac ultricies sit amet, auctor ut libero. Donec imperdiet suscipit rhoncus. Aenean eget nisi enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tortor egestas, vulputate tellus sed, fermentum mauris. Cras et sagittis tellus. Quisque eu scelerisque ante, sit amet commodo leo. Fusce interdum mollis nisl, bibendum euismod nunc. Morbi nisi felis, faucibus ac ultricies sit amet, auctor ut libero. Donec imperdiet suscipit rhoncus. Aenean eget nisi enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tortor egestas, vulputate tellus sed, fermentum mauris. Cras et sagittis tellus. Quisque eu scelerisque ante, sit amet commodo leo. Fusce interdum mollis nisl, bibendum euismod nunc. Morbi nisi felis, faucibus ac ultricies sit amet, auctor ut libero. Donec imperdiet suscipit rhoncus. Aenean eget nisi enim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Home"));
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9390:
/*!**************************************************************************!*\
  !*** ./src/app/loading-cell-renderer/loading-cell-renderer.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingCellRendererComponent": () => (/* binding */ LoadingCellRendererComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8699);


class LoadingCellRendererComponent {
    constructor() { }
    agInit(params) {
        this.params;
    }
    ngOnInit() {
    }
}
LoadingCellRendererComponent.ɵfac = function LoadingCellRendererComponent_Factory(t) { return new (t || LoadingCellRendererComponent)(); };
LoadingCellRendererComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingCellRendererComponent, selectors: [["app-loading-cell-renderer"]], decls: 5, vars: 3, consts: [[1, "ag-custom-loading-cell", 2, "padding-left", "10px", "line-height", "25px"], [1, "fas", "fa-spinner", "fa-pulse"]], template: function LoadingCellRendererComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "Loading"), "... ");
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLWNlbGwtcmVuZGVyZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1475:
/*!**********************************************************************!*\
  !*** ./src/app/loan-details-dialog/loan-details-dialog.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanDetailsDialogComponent": () => (/* binding */ LoanDetailsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);





class LoanDetailsDialogComponent {
    constructor(data, ordersService) {
        this.data = data;
        this.ordersService = ordersService;
        this.orderRow = {
            id: "",
            id_ordine: "",
            n_riga: 0,
            id_prd: "",
            username: "",
            qta: 0,
            motivazione: "",
            qta_validata: 0,
            qta_ricevuta: 0,
            note: ""
        };
        this.products = [];
        this.productName = "";
        this.productQty = 0;
        console.log(this.data.orderRow);
        this.products = this.data.products;
    }
    ngOnInit() {
    }
    productIdToDes(id) {
        console.log(id);
        for (var i = 0; i < this.data.products.length; ++i) {
            console.log(this.data.products[i].des);
            if (id == this.data.products[i].id) {
                return this.data.products[i].des;
            }
        }
        return "";
    }
}
LoanDetailsDialogComponent.ɵfac = function LoanDetailsDialogComponent_Factory(t) { return new (t || LoanDetailsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_0__.OrdersService)); };
LoanDetailsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoanDetailsDialogComponent, selectors: [["app-loan-details-dialog"]], decls: 28, vars: 20, consts: [["mat-dialog-title", "", "align", "center", 2, "text-align", "center"], ["align", "center"]], template: function LoanDetailsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "p")(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p")(11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p")(17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p")(23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 10, "Loan"), " ", ctx.data.data.id, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 12, "Granted by"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.data.full_username_from, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 14, "To"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.data.full_username_to, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 16, "Product"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.productIdToDes(ctx.data.orderRow.id_prd), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 18, "Quantity"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.orderRow.qta, " ");
    } }, dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLWRldGFpbHMtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3218:
/*!******************************************!*\
  !*** ./src/app/loans/loans.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoansComponent": () => (/* binding */ LoansComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ag-grid-angular */ 9771);
/* harmony import */ var ag_grid_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-community */ 6577);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/grid-configs */ 6980);
/* harmony import */ var _add_loan_dialog_add_loan_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-loan-dialog/add-loan-dialog.component */ 1244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _pharma_registry_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pharma-registry.service */ 955);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../users.service */ 474);
/* harmony import */ var _forecast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../forecast.service */ 4472);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../snackbar.service */ 9518);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






















function LoansComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoansComponent_div_0_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.openAddLoanDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "playlist_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "Add loan"));
} }
function LoansComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "nav", 1)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, LoansComponent_div_0_button_5_Template, 4, 3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoansComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r4.getData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function LoansComponent_div_0_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r6.year = $event); })("change", function LoansComponent_div_0_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.getData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ag-grid-angular", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("gridReady", function LoansComponent_div_0_Template_ag_grid_angular_gridReady_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r8.onGridReady($event)); })("columnResized", function LoansComponent_div_0_Template_ag_grid_angular_columnResized_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r9.saveColumnState()); })("columnVisible", function LoansComponent_div_0_Template_ag_grid_angular_columnVisible_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.saveColumnState()); })("columnPivotChanged", function LoansComponent_div_0_Template_ag_grid_angular_columnPivotChanged_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r11.saveColumnState()); })("columnRowGroupChanged", function LoansComponent_div_0_Template_ag_grid_angular_columnRowGroupChanged_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.saveColumnState()); })("columnValueChanged", function LoansComponent_div_0_Template_ag_grid_angular_columnValueChanged_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.saveColumnState()); })("columnMoved", function LoansComponent_div_0_Template_ag_grid_angular_columnMoved_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.saveColumnState()); })("columnPinned", function LoansComponent_div_0_Template_ag_grid_angular_columnPinned_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.saveColumnState()); })("firstDataRendered", function LoansComponent_div_0_Template_ag_grid_angular_firstDataRendered_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.onFirstDataRendered($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 14, "Loans"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.userCode == "210");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 16, "Refresh"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 18, "Reference year"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("getRowId", ctx_r0.getRowId)("rowData", ctx_r0.loanGridRowData)("columnDefs", ctx_r0.ordersGridConfig)("defaultColDef", ctx_r0.defaultColDef)("gridOptions", ctx_r0.gridOptions)("alwaysShowHorizontalScroll", true)("alwaysShowHorizontalScroll", true)("localeText", ctx_r0.localeText)("animateRows", true);
} }
class LoansComponent {
    constructor(loginService, pharmaRegistryService, usersService, forecastService, ordersService, dialog, router, snackbarService) {
        this.pharmaRegistryService = pharmaRegistryService;
        this.usersService = usersService;
        this.forecastService = forecastService;
        this.ordersService = ordersService;
        this.router = router;
        this.snackbarService = snackbarService;
        this.order = {
            id: "",
            anno: 0,
            mese: 0,
            username: "",
            d_ordine: "",
            n_ordine: 0,
            b_urgente: false,
            b_extra: false,
            b_validato: false,
            d_validato: "",
            status: "",
            note: "",
            d_consegna_prevista: "",
            n_ddt: "",
            d_ddt: "",
            note_consegna: "",
            b_prestito: false,
            id_ordine_prestito: "",
            username_prestito_a: "",
            username_prestito_da: ""
        };
        this.dataCount = 0;
        this.year = new Date().getFullYear().toString();
        this.products = [];
        this.users = [];
        this.forecasts = [];
        this.orders = [];
        this.loans = [];
        this.loanGridRowData = [];
        this.userCode = "";
        this.localeText = (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.currentLanguage == 'it' ? src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__.AG_GRID_LOCALE_IT : src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__.AG_GRID_LOCALE_EN);
        this.defaultColDef = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__.defaultColDef;
        this.getRowId = (params) => {
            return params.data.id;
        };
        this.onGridReady = (params) => {
            this.api = params.api;
            //console.log(this.api);
            this.columnApi = params.columnApi;
            //this.api.sizeColumnsToFit();
            //this.autoSizeColumns(false);
            this.getData();
        };
        this.onFirstDataRendered = (event) => {
            this.retrieveColumnState();
        };
        this.loginService = loginService;
        this.dialog = dialog;
        //this.getData();
        this.loginService.getCurrentUserSync();
        this.userCode = this.loginService.getUserCode();
        if (this.loginService.getUserCode() == "210") {
            this.ordersGridConfig = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__.gridConfigLoans210;
        }
        if (this.loginService.getUserCode() == "220") {
            this.ordersGridConfig = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__.gridConfigLoans220;
        }
        //gridOptions
        this.gridOptions = {
            onCellClicked: (event) => {
                //console.log(event);
            },
            onCellValueChanged: (event) => {
                //console.log("Changed from " + event.oldValue + " to " + event.newValue);
                //if row is not locked and an update is received, perform update
                this.order.id = event.data.id;
                this.order.anno = event.data.anno;
                this.order.username = event.data.username;
                this.order.d_ordine = event.data.d_ordine;
                this.order.n_ordine = event.data.n_ordine;
                this.order.b_urgente = event.data.b_urgente;
                this.order.b_extra = event.data.b_extra;
                this.order.b_validato = event.data.b_validato;
                this.order.d_validato = event.data.d_validato;
                this.order.n_ddt = event.data.n_ddt;
                this.order.d_ddt = event.data.d_ddt;
                this.order.d_consegna_prevista = event.data.d_consegna_prevista;
                this.order.note = event.data.note;
                this.order.note_consegna = event.data.note_consegna;
                //not adding but editing
                let isAdding = false;
                let orderStatus = {
                    id: "0",
                    username: localStorage.getItem('sangue_username'),
                    id_order: event.data.id,
                    d_status: this.getFormattedDate(new Date()),
                    status: "prestito",
                    note: "Prestito richiesto da " + localStorage.getItem('sangue_username'),
                    b_sto: false
                };
            }
        };
    }
    autoSizeColumns(skipHeader) {
        const allColumnIds = [];
        this.columnApi.getColumns().forEach((column) => {
            allColumnIds.push(column.getId());
        });
        this.columnApi.autoSizeColumns(allColumnIds, skipHeader);
    }
    retrieveColumnState() {
        const localColumnState = localStorage.getItem("loansColumnState");
        //console.log("Column state:");
        //console.log(localColumnState);
        if (localColumnState != null) {
            console.log(JSON.parse(localColumnState));
            this.columnApi.applyColumnState({ state: JSON.parse(localColumnState), applyOrder: true });
        }
    }
    saveColumnState() {
        const allState = this.columnApi.getColumnState();
        const localColumnState = allState.map((state) => ({
            colId: state.colId,
            sort: state.sort,
            sortIndex: state.sortIndex,
            aggFunc: state.aggFunc,
            flex: state.flex,
            pinned: state.pinned,
            pivot: state.pivot,
            pivotIndex: state.pivotIndex,
            rowGroup: state.rowGroup,
            rowGroupIndex: state.rowGroupIndex,
            width: state.width
        }));
        /*
         let localColumnState = this.columnApi.getColumnState();
         for(let i = 0; i < localColumnState.length; ++i) {
           localColumnState[i].sortIndex = i;
         }
         */
        console.log(localColumnState);
        localStorage.setItem("loansColumnState", JSON.stringify(localColumnState));
    }
    ngOnInit() {
    }
    getData() {
        this.dataCount = 0;
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalUsers.length == 0) {
            //console.log("Getting users...");
            this.getUsersGlobally();
        }
        else {
            this.users = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalUsers;
            this.dataCount++;
            this.createLoanGridRowData();
        }
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalProducts.length == 0) {
            //console.log("Getting products...");
            this.getProductsGlobally();
        }
        else {
            this.products = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalProducts;
            this.dataCount++;
            this.createLoanGridRowData();
        }
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalForecasts.length == 0) {
            //console.log("Getting forecasts...");
            this.getForecastsGlobally(this.year);
        }
        else {
            this.forecasts = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalForecasts;
            this.dataCount++;
            this.createLoanGridRowData();
        }
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalOrders.length == 0 || src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalOrders.length != this.orders.length) {
            //console.log("Getting loans...");
            this.getLoansGlobally(this.year);
        }
        else {
            this.orders = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalOrders;
            this.filterLoans();
            this.dataCount++;
            this.createLoanGridRowData();
        }
    }
    listLoans(year) {
        this.ordersService.listOrdersPromise(year).subscribe(res => {
            if (res[0] != "KO") {
                this.orders = res[1];
                this.filterLoans();
                this.createLoanGridRowData();
                //this.getAllOrderStatusRec(this.orders, 0);
            }
            else {
                this.loginService.logoutPromise().subscribe(res => {
                    this.router.navigate([""]);
                });
            }
        });
    }
    getUsersGlobally() {
        this.usersService.listUsersPromise('210').subscribe(res => {
            if (res[0] == "OK") {
                ////console.log(res[1]);
                this.users = res[1];
                src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalUsers = res[1];
                this.dataCount++;
                this.createLoanGridRowData();
                this.loginService.getCurrentUser(this.users);
            }
            else {
                console.error("Error retrieving users globally!");
            }
        });
    }
    getProductsGlobally() {
        this.pharmaRegistryService.listProductsPromise().subscribe(res => {
            if (res[0] == "OK") {
                //console.log(res[1]);
                this.products = res[1];
                src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalProducts = res[1];
                this.dataCount++;
                this.createLoanGridRowData();
            }
            else {
                console.error("Error retrieving products globally!");
            }
        });
    }
    getForecastsGlobally(year) {
        this.forecastService.listForecastsPromise(year).subscribe(res => {
            if (res[0] == "OK") {
                //console.log(res[1]);
                this.forecasts = res[1];
                src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalForecasts = res[1];
                this.dataCount++;
                this.createLoanGridRowData();
            }
            else {
                console.error("Error retrieving forecasts globally");
            }
        });
    }
    getLoansGlobally(year) {
        this.ordersService.listOrdersPromise(year).subscribe(res => {
            if (res[0] == "OK") {
                console.log(res[1]);
                this.orders = res[1];
                src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalOrders = res[1];
                this.filterLoans();
                this.dataCount++;
                this.createLoanGridRowData();
            }
            else {
                console.error("Error retrieving orders globally!");
            }
        });
    }
    filterLoans() {
        this.loans = [];
        for (var i = 0; i < this.orders.length; ++i) {
            if (this.orders[i].status == "prestito") {
                //if user 220 add all
                //if user 210 add only given and received
                if (this.loginService.getUserCode() == "220") {
                    this.loans.push(this.orders[i]);
                }
                if (this.loginService.getUserCode() == "210") {
                    if (this.orders[i].username == localStorage.getItem("sangue_username") || this.orders[i].username_prestito_a == localStorage.getItem("sangue_username")) {
                        this.loans.push(this.orders[i]);
                    }
                }
            }
        }
        console.log(this.loans);
    }
    openAddLoanDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogConfig();
        dialogConfig.data = {
            users: this.users,
            products: this.products,
            forecasts: this.forecasts,
        };
        dialogConfig.width = "95%";
        dialogConfig.maxHeight = "500px";
        this.dialogRef = this.dialog.open(_add_loan_dialog_add_loan_dialog_component__WEBPACK_IMPORTED_MODULE_3__.AddLoanDialogComponent, dialogConfig);
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined) {
                if (result.isSubmitted) {
                    /*
                    //console.log(result.newLoanReq);
                    //console.log(result.newLoanRowReq);
                    //console.log(result.newLoanRes);
                    //console.log(result.newLoanRowRes);
                    */
                    this.setLoan(result.newLoanReq, result.newLoanRowReq, result.newLoanRes, result.newLoanRowRes, true);
                }
            }
        });
    }
    getFormattedDate(date) {
        let splitDate = date.toLocaleString('it-IT').split(",", 2)[0].split("/", 3);
        let day = splitDate[0];
        let month = splitDate[1];
        let year = splitDate[2];
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        return year + "-" + month + "-" + day;
    }
    setLoan(loanReq, loanRowReq, loanRes, loanRowRes, isAdding) {
        ////console.log(loanReq);
        //loanReq.b_prestito
        this.ordersService.setOrderPromise(loanReq, isAdding).subscribe(res1 => {
            if (res1[0] == "OK") {
                //loanReq missing fields
                loanReq.id = res1[1][0];
                loanReq.id_ordine_prestito = res1[1][0];
                loanReq.n_ordine = res1[1][1];
                //console.log("update>>>loanReq");
                //console.log(loanReq);
                loanRes.id_ordine_prestito = res1[1][0];
                this.ordersService.setOrderPromise(loanReq, !isAdding).subscribe(res11 => {
                    if (res11[0] == "OK") {
                    }
                    else {
                        console.error("Error setting loan!");
                    }
                });
                ////console.log(loanRes);
                this.ordersService.setOrderPromise(loanRes, isAdding).subscribe(res2 => {
                    if (res2[0] == "OK") {
                        loanRes.id = res2[1][0];
                        loanRes.n_ordine = res2[1][1];
                        loanRes.id_ordine_prestito = res1[1][0];
                        loanRowRes.id_ordine = res2[1][0];
                        //console.log("update>>>loanRes");
                        //console.log(loanRes);
                        //loanRows
                        loanRowReq.id_ordine = loanReq.id;
                        loanRowRes.id_ordine = loanRes.id;
                        //console.log(loanRowReq);
                        this.ordersService.setOrderRowPromise(loanRowReq, isAdding).subscribe(resLrReq => {
                            if (resLrReq[0] == "OK") {
                                loanRowReq.id = resLrReq[1];
                                this.setLoanLocally(loanReq);
                                //console.log("update>>>loanRowReq");
                                //console.log(loanRowReq);
                            }
                            else {
                                //console.error("Error setting loan row request!");
                            }
                        });
                        loanRowRes.id_ordine = res2[1][0];
                        //console.log(loanRowRes);
                        this.ordersService.setOrderRowPromise(loanRowRes, isAdding).subscribe(resLrRes => {
                            if (resLrRes[0] == "OK") {
                                loanRowRes.id = resLrRes[1];
                                //console.log("update>>>loanRowRes");
                                //console.log(loanRowRes);
                            }
                            else {
                                console.error("Error setting loan row response!");
                            }
                        });
                        let orderStatusReq = {
                            id: "0",
                            username: loanReq.username,
                            id_order: loanReq.id,
                            d_status: loanReq.d_ordine,
                            status: "prestito",
                            note: loanReq.username + " concede prestito a " + loanRes.username,
                            b_sto: false
                        };
                        let orderStatusRes = {
                            id: "0",
                            username: loanRes.username,
                            id_order: loanRes.id,
                            d_status: loanRes.d_ordine,
                            status: "prestito",
                            note: loanRes.username + " riceve prestito da " + loanReq.username,
                            b_sto: false
                        };
                        this.ordersService.setOrderStatusPromise(orderStatusReq).subscribe(res3 => {
                            if (res3[0] == "OK") {
                                //this.setLoanLocally();
                            }
                            else {
                                console.error("Error setting loanReq!");
                            }
                        });
                        this.ordersService.setOrderStatusPromise(orderStatusRes).subscribe(res3 => {
                            if (res3[0] == "OK") {
                                //this.setLoanLocally();
                            }
                            else {
                                //console.error("Error setting loanReq!");
                            }
                        });
                    }
                    else {
                        console.error("Error setting loanRes!");
                    }
                });
            }
            else {
                console.error("Error setting loanReq!");
            }
        });
    }
    setLoanLocally(loan) {
        let newLoanGridRowData = {
            id: loan.id,
            anno: loan.anno,
            username: loan.username,
            full_username_from: this.getClientByUsername(loan.username_prestito_da),
            full_username_to: this.getClientByUsername(loan.username_prestito_a),
            d_ordine: loan.d_ordine,
            n_ordine: loan.n_ordine,
            note: loan.note,
            b_prestito: loan.b_prestito,
            id_ordine_prestito: loan.id_ordine_prestito
        };
        this.loanGridRowData.push(newLoanGridRowData);
        //this.orders.push(loan);
        this.api.applyTransaction({
            add: [{
                    id: loan.id,
                    anno: loan.anno,
                    username: loan.username,
                    full_username_from: this.getClientByUsername(loan.username_prestito_da),
                    full_username_to: this.getClientByUsername(loan.username_prestito_a),
                    d_ordine: loan.d_ordine,
                    n_ordine: loan.n_ordine,
                    note: loan.note,
                    b_prestito: loan.b_prestito,
                    id_ordine_prestito: loan.id_ordine_prestito
                }]
        });
        this.orders.push(loan);
        //this.api.ensureIndexVisible(this.orderGridRowData.length - 1);
        //this.createOrderGridRowData();
        this.snackbarService.onCreate();
    }
    createLoanGridRowData() {
        console.log(this.dataCount);
        if (this.dataCount == 4) {
            this.dataCount = 0;
            this.loanGridRowData = [];
            //n_ordine, d_ordine, username_from, username_to?, note, buttonLoanDetails...
            console.log(this.loans);
            for (var i = 0; i < this.loans.length; ++i) {
                if (this.loans[i].status == "prestito" && this.loans[i].anno.toString() == this.year) {
                    //console.log(this.loans[i]);
                    let newLoanGridRowData = {
                        id: this.loans[i].id,
                        anno: this.loans[i].anno,
                        mese: this.loans[i].mese,
                        username: this.loans[i].username,
                        full_username_from: this.getClientByUsername(this.loans[i].username_prestito_da),
                        full_username_to: this.getClientByUsername(this.loans[i].username_prestito_a),
                        d_ordine: this.loans[i].d_ordine,
                        n_ordine: this.loans[i].n_ordine,
                        note: this.loans[i].note,
                        b_prestito: this.loans[i].b_prestito,
                        id_ordine_prestito: this.loans[i].id_ordine_prestito
                    };
                    this.loanGridRowData.push(newLoanGridRowData);
                }
            }
            console.log(this.loanGridRowData);
            //this.api.setRowData(this.loanGridRowData);
        }
    }
    getClientByUsername(username) {
        for (var i = 0; i < this.users.length; ++i) {
            if (this.users[i].username == username) {
                //console.log(this.users[i].username);
                return this.users[i].client;
            }
        }
        return null;
    }
    getToClientByIdAndIdOrdinePrestito(id) {
        //console.log("id: " + id);
        //console.log("id_p: " + id_ordine_prestito);
        for (var i = 0; i < this.loans.length; ++i) {
            if (this.loans[i].id_ordine_prestito == id) {
                console.log(this.loans[i]);
                return this.getClientByUsername(this.loans[i].username);
            }
        }
        return null;
    }
}
LoansComponent.ɵfac = function LoansComponent_Factory(t) { return new (t || LoansComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_pharma_registry_service__WEBPACK_IMPORTED_MODULE_5__.PharmaRegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_forecast_service__WEBPACK_IMPORTED_MODULE_7__.ForecastService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_8__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_9__.SnackbarService)); };
LoansComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: LoansComponent, selectors: [["app-loans"]], viewQuery: function LoansComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__.AgGridAngular, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.agGrid = _t.first);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "second-nav"], ["mat-mini-fab", "", "color", "primary", 3, "matTooltip", "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "basic", 3, "matTooltip", "click"], [1, "material-icons"], ["matInput", "", "type", "number", 2, "width", "50px", 3, "placeholder", "ngModel", "ngModelChange", "change"], [1, "ag-theme-material", "ag-grid-table", 3, "getRowId", "rowData", "columnDefs", "defaultColDef", "gridOptions", "alwaysShowHorizontalScroll", "localeText", "animateRows", "gridReady", "columnResized", "columnVisible", "columnPivotChanged", "columnRowGroupChanged", "columnValueChanged", "columnMoved", "columnPinned", "firstDataRendered"], ["mat-mini-fab", "", "color", "primary", 3, "matTooltip", "click"]], template: function LoansComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, LoansComponent_div_0_Template, 13, 20, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loginService.getProfile() == "210" || ctx.loginService.getProfile() == "220");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, ag_grid_angular__WEBPACK_IMPORTED_MODULE_13__.AgGridAngular, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Fucy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6184:
/*!********************************************!*\
  !*** ./src/app/logged/logged.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedComponent": () => (/* binding */ LoggedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);



class LoggedComponent {
    //TODO: DELETEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEeeeee
    constructor(loginService) {
        this.loginService = loginService;
    }
    ngOnInit() {
    }
}
LoggedComponent.ɵfac = function LoggedComponent_Factory(t) { return new (t || LoggedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService)); };
LoggedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoggedComponent, selectors: [["app-logged"]], decls: 6, vars: 8, template: function LoggedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "Session ID"), ": ", ctx.loginService.getSession(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, "Profile ID"), ": ", ctx.loginService.getProfile(), "");
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dnZWQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 506:
/*!**********************************************************!*\
  !*** ./src/app/login-gateway/login-gateway.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGatewayComponent": () => (/* binding */ LoginGatewayComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ 474);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






class LoginGatewayComponent {
    constructor(route, loginService, router, usersService) {
        this.route = route;
        this.loginService = loginService;
        this.router = router;
        this.usersService = usersService;
        this.id_profile = "";
        this.id_session = "";
        this.users = [];
    }
    ngOnInit() {
        this.id_profile = this.route.snapshot.queryParams['id_profilo'];
        this.id_session = this.route.snapshot.queryParams['id_session'];
        console.log("profile: " + this.id_profile + ", session: " + this.id_session);
        this.loginService.checkPromiseParams(this.id_profile, this.id_session).subscribe(res => {
            console.log(res);
            if (res[0] == "OK") {
                localStorage.setItem("id_session", this.id_session);
                localStorage.setItem("id_profile", this.id_profile);
                localStorage.setItem("sangue_username", res[1]);
                this.usersService.listUsersPromise("210").subscribe(res1 => {
                    if (res[0] == "OK") {
                        this.users = res1[1];
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers = res1[1];
                        switch (localStorage.getItem("id_profile")) {
                            case "200":
                                this.loginService.currentUser.client = "Amministratore Farmaci";
                                this.loginService.currentUser.id = localStorage.getItem("sangue_username");
                                localStorage.setItem("sangue_client", this.loginService.currentUser.client);
                                localStorage.setItem("sangue_username", this.loginService.currentUser.id);
                                break;
                            case "220":
                                this.loginService.currentUser.client = "ASL Amministratrice";
                                this.loginService.currentUser.id = localStorage.getItem("sangue_username");
                                localStorage.setItem("sangue_client", this.loginService.currentUser.client);
                                localStorage.setItem("sangue_username", this.loginService.currentUser.id);
                                break;
                            case "230":
                                this.loginService.currentUser.client = "Fornitore";
                                this.loginService.currentUser.id = localStorage.getItem("sangue_username");
                                localStorage.setItem("sangue_client", this.loginService.currentUser.client);
                                localStorage.setItem("sangue_username", this.loginService.currentUser.id);
                                break;
                            default:
                                for (var i = 0; i < src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers.length; ++i) {
                                    var auxUser = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers[i];
                                    if (auxUser.id == localStorage.getItem("sangue_username")) {
                                        console.log("auxUser.id: " + auxUser.id);
                                        this.loginService.currentUser.id = auxUser.id;
                                        this.loginService.currentUser.username = auxUser.username;
                                        this.loginService.currentUser.client = auxUser.client;
                                        localStorage.setItem("sangue_client", this.loginService.currentUser.client);
                                        localStorage.setItem("sangue_username", this.loginService.currentUser.id);
                                    }
                                }
                                break;
                        }
                        this.router.navigate(['home']);
                    }
                    else {
                        console.error("Error retrieving users!");
                        this.router.navigate(['login']);
                    }
                });
            }
            else {
                console.error("Authentication failed!");
                this.router.navigate(['login']);
            }
        });
    }
}
LoginGatewayComponent.ɵfac = function LoginGatewayComponent_Factory(t) { return new (t || LoginGatewayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService)); };
LoginGatewayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginGatewayComponent, selectors: [["app-login-gateway"]], decls: 3, vars: 3, template: function LoginGatewayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Redirecting"), "...");
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1nYXRld2F5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5619:
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ 474);





class LoginService {
    //constructor
    constructor(http, router, usersService) {
        this.http = http;
        this.router = router;
        this.usersService = usersService;
        this.logged = false;
        this.currentUser = {
            id: "",
            username: "",
            client: ""
        };
        this.users = [];
    }
    //methods
    getSession() {
        return localStorage.getItem("id_session");
    }
    getProfile() {
        return localStorage.getItem("id_profile");
    }
    getUserCode() {
        return localStorage.getItem('id_profile');
    }
    getUsername() {
        return localStorage.getItem('sangue_username');
    }
    getUserType() {
        let userType;
        switch (localStorage.getItem('id_profile')) {
            case "200":
                userType = "admin";
                break;
            case "210":
                userType = "A.S.L. Customer";
                break;
            case "220":
                userType = "A.S.L. Novara";
                break;
            case "230":
                userType = "Provider";
                break;
            default:
                userType = "none";
                break;
        }
        return userType;
    }
    isLogged() {
        this.check();
        return this.logged;
    }
    isLoggedPromise() {
        this.checkPromise().subscribe(res => {
            if (res[0] == "KO") {
                this.router.navigate(['login']);
                localStorage.removeItem("sangue_username");
            }
            else {
            }
        });
    }
    check() {
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'session.php', {
            request: "check",
            id_session: localStorage.getItem("id_session")
        }).subscribe(res => {
            if (res[0] == "KO") {
                console.log("CHECK: NOT logged!");
                localStorage.removeItem("id_session");
                localStorage.removeItem("id_profile");
                localStorage.removeItem("sangue_username");
                localStorage.removeItem("sangue_client");
                this.logged = false;
            }
            else {
                console.log("CHECK: logged with sessionID " + localStorage.getItem("id_session"));
                this.logged = true;
            }
        });
    }
    checkPromise() {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'session.php', {
            request: "check",
            id_session: localStorage.getItem("id_session")
        });
    }
    checkPromiseParams(id_profile, id_session) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'session.php', {
            request: "check",
            id_session: id_session,
            //id_profile: id_profile
        });
    }
    login(username, password) {
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'session.php', {
            request: 'login',
            sangue_username: username,
            sangue_password: password
        }).subscribe(res => {
            if (res[0] == "KO") {
                console.log("Login KO!");
                console.error(res[1].toString());
                this.logged = false;
            }
            else {
                console.log("Logged successfully!");
                localStorage.setItem("id_session", res[1].toString());
                localStorage.setItem("id_profile", res[2].toString());
                localStorage.setItem("sangue_username", username);
                this.logged = true;
            }
        });
    }
    loginPromise(username, password) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'session.php', {
            request: 'login',
            sangue_username: username,
            sangue_password: password
        });
    }
    logout() {
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'session.php', {
            request: 'logout',
            id_session: localStorage.getItem("id_session"),
            sangue_username: localStorage.getItem("sangue_username")
        }).subscribe(res => {
            if (res[0] == "OK") {
                localStorage.removeItem("id_session");
                localStorage.removeItem("id_profile");
                localStorage.removeItem("sangue_username");
                localStorage.removeItem("sangue_client");
                console.log("Successfully logged out");
                this.logged = false;
                //this.router.navigate(['/']);
                document.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.logoutPath;
            }
            else {
                console.error("Error logging out!");
            }
        });
    }
    logoutPromise() {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'session.php', {
            request: 'logout',
            id_session: localStorage.getItem("id_session"),
            sangue_username: localStorage.getItem("sangue_username")
        });
    }
    getCurrentUser(users) {
        for (var i = 0; i < users.length; ++i) {
            if (users[i].id == localStorage.getItem("sangue_username")) {
                console.log(users[i].client);
                this.currentUser.id = users[i].id;
                this.currentUser.username = users[i].username;
                this.currentUser.client = users[i].client;
                console.log(this.currentUser.client);
                return;
            }
        }
        this.currentUser.id = localStorage.getItem("sangue_username");
    }
    getCurrentUserSync() {
        switch (this.getUserCode()) {
            case "200":
                this.currentUser.client = "Amministratore Farmaci";
                this.currentUser.username = "sangueadmin";
                break;
            case "220":
                this.currentUser.client = "ASL Amministratrice";
                this.currentUser.username = "sangueaslno";
                break;
            case "230":
                this.currentUser.client = "Fornitore";
                this.currentUser.username = "sanguefornitore";
                break;
            default:
                if (this.users.length == 0) {
                    this.usersService.listUsersPromise("210").subscribe(res => {
                        if (res[0] == "OK") {
                            this.users = res[1];
                            src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers = res[1];
                            for (var i = 0; i < this.users.length; ++i) {
                                if (this.users[i].id == localStorage.getItem("sangue_username")) {
                                    console.log(this.users[i].client);
                                    this.currentUser.id = this.users[i].id;
                                    this.currentUser.username = this.users[i].username;
                                    this.currentUser.client = this.users[i].client;
                                }
                            }
                            console.log("client: " + this.currentUser.client);
                        }
                        else {
                            console.error("Error retrieving users");
                        }
                    });
                }
                else {
                    for (var i = 0; i < this.users.length; ++i) {
                        if (this.users[i].id == localStorage.getItem("sangue_username")) {
                            console.log(this.users[i].client);
                            this.currentUser.id = this.users[i].id;
                            this.currentUser.username = this.users[i].username;
                            this.currentUser.client = this.users[i].client;
                        }
                    }
                    console.log("client: " + this.currentUser.client);
                }
                break;
        }
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ 474);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 8699);













function LoginComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Incorrect username and/or password"), "! ");
} }
class LoginComponent {
    //constructor
    constructor(loginService, router, usersService) {
        this.usersService = usersService;
        //fields
        this.username = '';
        this.password = '';
        this.logged = false;
        this.isBadLogin = false;
        this.users = [];
        this.loginService = loginService;
        this.router = router;
    }
    ngOnInit() {
        this.check();
        this.amILogged();
    }
    //methods
    getSession() {
        return this.loginService.getSession();
    }
    getProfile() {
        return this.loginService.getProfile();
    }
    isLogged() {
        //was "isLogged()"
        return this.loginService.isLoggedPromise();
    }
    check() {
        //was "check()"
        if (this.loginService.logged) {
            this.router.navigate(['home']);
            return;
        }
        this.loginService.checkPromise().subscribe(res => {
            if (res[0] == "KO") {
                localStorage.removeItem("id_session");
                localStorage.removeItem("id_profile");
                localStorage.removeItem("sangue_username");
                localStorage.removeItem("sangue_client");
                this.logged = false;
                this.router.navigate(['login']);
            }
        });
    }
    amILogged() {
        if (localStorage.getItem('id_session') != null) {
            this.router.navigate(['home']);
        }
    }
    login(username, password) {
        this.loginService.loginPromise(username, password).subscribe(res => {
            if (res[0] == "KO") {
                this.isBadLogin = true;
                this.username = "";
                this.password = "";
            }
            else {
                this.isBadLogin = false;
                localStorage.setItem("id_session", res[1].toString());
                localStorage.setItem("id_profile", res[2].toString());
                localStorage.setItem("sangue_username", username);
                this.loginService.logged = true;
                this.getUsersGlobally();
                this.router.navigate(['home']);
                //this.loginService.getCurrentUser();
            }
        });
    }
    getUsersGlobally() {
        this.usersService.listUsersPromise('210').subscribe(res => {
            if (res[0] == "OK") {
                console.log(res[1]);
                this.users = res[1];
                src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers = res[1];
                this.getCurrentUser(this.users);
            }
            else {
                console.error("Error retrieving users globally!");
            }
        });
    }
    getCurrentUser(users) {
        for (var i = 0; i < users.length; ++i) {
            if (users[i].id == localStorage.getItem("sangue_username")) {
                console.log(users[i].client);
                this.loginService.currentUser.id = users[i].id;
                this.loginService.currentUser.username = users[i].username;
                this.loginService.currentUser.client = users[i].client;
                localStorage.setItem("sangue_client", this.loginService.currentUser.client);
                src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentUser = this.loginService.currentUser;
                console.log(this.loginService.currentUser.client);
                return;
            }
        }
        this.loginService.currentUser.id = localStorage.getItem("sangue_username");
    }
    logout() {
        this.loginService.logout();
        //this.router.navigate(['https://servizi.regione.piemonte.it/catalogo/sistema-informativo-regionale-portale-medici-pediatri']);
        document.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.logoutPath;
    }
    onClick() {
        console.log();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 15, vars: 6, consts: [["layout", "row", "layout-align", "center", "align", "center", 2, "margin", "10%"], [2, "width", "fit-content"], ["type", "text", "placeholder", "Username", "matInput", "", 3, "ngModel", "ngModelChange", "click", "keyup.enter"], ["type", "password", "placeholder", "Password", "matInput", "", 3, "ngModel", "ngModelChange", "keyup.enter"], ["style", "color: red;", 4, "ngIf"], ["mat-fab", "", "color", "primary", 3, "matTooltip", "click"], [1, "material-icons"], [2, "color", "red"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p")(5, "mat-form-field")(6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) { return ctx.username = $event; })("click", function LoginComponent_Template_input_click_6_listener() { return ctx.onClick(); })("keyup.enter", function LoginComponent_Template_input_keyup_enter_6_listener() { return ctx.login(ctx.username, ctx.password); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p")(8, "mat-form-field")(9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.password = $event; })("keyup.enter", function LoginComponent_Template_input_keyup_enter_9_listener() { return ctx.login(ctx.username, ctx.password); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, LoginComponent_p_10_Template, 3, 3, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_11_listener() { return ctx.login(ctx.username, ctx.password); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isBadLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 4, "Login"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7699:
/*!******************************************************************************!*\
  !*** ./src/app/mark-as-received-dialog/mark-as-received-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkAsReceivedDialogComponent": () => (/* binding */ MarkAsReceivedDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






function MarkAsReceivedDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarkAsReceivedDialogComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarkAsReceivedDialogComponent_div_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onCancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "Mark order"), " ", ctx_r0.orderId, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "as received"), "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, "Submit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "Cancel"));
} }
function MarkAsReceivedDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarkAsReceivedDialogComponent_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onOK()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "Order"), " ", ctx_r1.orderId, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "marked as received"), "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, "You can now edit the received quantity of each product you ordered"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "Ok"));
} }
class MarkAsReceivedDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.isSubmitted = false;
        this.orderId = this.data.orderId;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.isSubmitted = true;
        //this.dialogRef.close({isSubmitted: this.isSubmitted});
    }
    onOK() {
        this.dialogRef.close({ isSubmitted: this.isSubmitted });
    }
    onCancel() {
        this.dialogRef.close({ isCancelled: true });
    }
}
MarkAsReceivedDialogComponent.ɵfac = function MarkAsReceivedDialogComponent_Factory(t) { return new (t || MarkAsReceivedDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
MarkAsReceivedDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarkAsReceivedDialogComponent, selectors: [["app-mark-as-received-dialog"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["align", "center"], ["mat-dialog-actions", "", "align", "center"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "matDialogClose", "true", "color", "primary", 3, "click"]], template: function MarkAsReceivedDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MarkAsReceivedDialogComponent_div_0_Template, 12, 13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MarkAsReceivedDialogComponent_div_1_Template, 12, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXJrLWFzLXJlY2VpdmVkLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5147:
/*!**************************************************!*\
  !*** ./src/app/mat-input/mat-input.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatInputComponent": () => (/* binding */ MatInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


const _c0 = ["input"];
class MatInputComponent {
    constructor() {
        this.focusedInput = 0;
    }
    agInit(params) {
        this.params = params;
        // simple implementation - we assume a full name consists of a first and last name only
        this.des = this.params.value;
        //      this.lastName = this.params.value.split(" ")[1];
    }
    // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
    ngAfterViewInit() {
        this.focusOnInputNextTick(this.inputs.first);
    }
    focusOnInputNextTick(input) {
        window.setTimeout(() => {
            input.element.nativeElement.focus();
        }, 0);
    }
    getValue() {
        return `${this.des}`;
        //return `${this.des} ${this.lastName}`;
    }
    isPopup() {
        return true;
    }
    /*
     * A little over complicated for what it is, but the idea is to illustrate how you might tab between multiple inputs
     * say for example in full row editing
     */
    onKeyDown(event) {
        const key = event.key;
        if (key == 'Tab') {
            // tab
            this.preventDefaultAndPropagation(event);
            // either move one input along, or cycle back to 0
            this.focusedInput = this.focusedInput === this.inputs.length - 1 ? 0 : this.focusedInput + 1;
            const focusedInput = this.focusedInput;
            const inputToFocusOn = this.inputs.find((item, index) => {
                return index === focusedInput;
            });
            this.focusOnInputNextTick(inputToFocusOn);
        }
        else if (key == 'Enter') {
            // Enter
            // perform some validation on Enter - in this example we assume all inputs are mandatory
            // in a proper application you'd probably want to inform the user that an input is blank
            this.inputs.forEach(input => {
                if (!input.element.nativeElement.value) {
                    this.preventDefaultAndPropagation(event);
                    this.focusOnInputNextTick(input);
                }
            });
        }
    }
    preventDefaultAndPropagation(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
MatInputComponent.ɵfac = function MatInputComponent_Factory(t) { return new (t || MatInputComponent)(); };
MatInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatInputComponent, selectors: [["app-mat-input"]], viewQuery: function MatInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputs = _t);
    } }, decls: 0, vars: 0, template: function MatInputComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXQtaW5wdXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7872:
/*!**************************************!*\
  !*** ./src/app/order-ddt.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDdtService": () => (/* binding */ OrderDdtService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class OrderDdtService {
    constructor() { }
}
OrderDdtService.ɵfac = function OrderDdtService_Factory(t) { return new (t || OrderDdtService)(); };
OrderDdtService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderDdtService, factory: OrderDdtService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7191:
/*!********************************************************!*\
  !*** ./src/app/order-resume/order-resume.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderResumeComponent": () => (/* binding */ OrderResumeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 8699);













function OrderResumeComponent_div_0_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Invalid start date"));
} }
function OrderResumeComponent_div_0_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Invalid end date"));
} }
function OrderResumeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "nav", 2)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "p")(11, "mat-form-field")(12, "mat-date-range-input", 6)(13, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dateChange", function OrderResumeComponent_div_0_Template_input_dateChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.onDateChange("start", $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dateChange", function OrderResumeComponent_div_0_Template_input_dateChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.onDateChange("end", $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-date-range-picker", null, 9)(19, "mat-date-range-picker-actions")(20, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, OrderResumeComponent_div_0_mat_error_28_Template, 3, 3, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, OrderResumeComponent_div_0_mat_error_29_Template, 3, 3, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "p")(31, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderResumeComponent_div_0_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r3.open()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderResumeComponent_div_0_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.getOrderResume()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 12, "Orders resume"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 14, "Back to orders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.range)("rangePicker", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 16, "Start date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 18, "End date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 20, "Submit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 22, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.range.controls.start.hasError("matStartDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.range.controls.end.hasError("matEndDateInvalid"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 24, "Edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 26, "Download resume"));
} }
function OrderResumeComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Logged as"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.loginService.currentUser.client);
} }
const _c0 = function () { return ["/login"]; };
function OrderResumeComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, "You're not logged!"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, "Login"));
} }
class OrderResumeComponent {
    constructor(loginService, ordersService) {
        this.ordersService = ordersService;
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
        });
        this.loginService = loginService;
        let date = new Date();
        this.range.controls['start'].setValue(date);
        this.startDate = this.getFormattedDate(date);
        console.log(this.startDate);
        this.range.controls['end'].setValue(date);
        this.endDate = this.getFormattedDate(date);
        console.log(this.endDate);
    }
    ngOnInit() {
    }
    getFormattedDate(date) {
        let splitDate = date.toLocaleString('it-IT').split(",", 2)[0].split("/", 3);
        let day = splitDate[0];
        let month = splitDate[1];
        let year = splitDate[2];
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        return year + "-" + month + "-" + day;
    }
    onDateChange(type, event) {
        console.log(event);
        switch (type) {
            case "start":
                this.range.controls['start'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(new Date(event.value), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
                this.startDate = this.getFormattedDate(new Date(event.value));
                break;
            case "end":
                if (event.value == null) {
                    let newDate = new Date();
                    this.range.controls['end'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(new Date(event.value), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
                }
                else {
                    this.range.controls['end'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(new Date(event.value), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
                }
                this.endDate = this.getFormattedDate(new Date(event.value));
                break;
        }
    }
    getOrderResume() {
        this.ordersService.getOrderResumePromise(this.startDate, this.endDate).subscribe((res) => {
            if (res[0] == "OK") {
                //console.log(res[1]);
                //https://vm-portalmmg.sistemapiemonte.it/collector/
                window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.reportPath + res[1][0].filename, "_blank");
            }
            else {
                console.error("Error retrieving resume!");
            }
        });
    }
}
OrderResumeComponent.ɵfac = function OrderResumeComponent_Factory(t) { return new (t || OrderResumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService)); };
OrderResumeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OrderResumeComponent, selectors: [["app-order-resume"]], decls: 4, vars: 3, consts: [[4, "ngIf"], ["align", "center", 4, "ngIf"], [1, "second-nav"], ["mat-mini-fab", "", "routerLink", "/orders", "color", "primary", 3, "matTooltip"], [1, "material-icons"], ["align", "center", 1, "container"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", 3, "placeholder", "dateChange"], ["matEndDate", "", "formControlName", "end", 3, "placeholder", "dateChange"], ["picker", ""], ["mat-mini-fab", "", "color", "primary", "matDateRangePickerApply", "", 2, "margin", "5px", 3, "matTooltip"], ["mat-mini-fab", "", "matDateRangePickerCancel", "", 2, "margin", "5px", 3, "matTooltip"], ["mat-fab", "", "color", "primary", 3, "matTooltip", "click"], ["mat-fab", "", 2, "margin", "5px", "background-color", "#1D6F42", 3, "matTooltip", "click"], ["align", "center"], [3, "routerLink"]], template: function OrderResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, OrderResumeComponent_div_0_Template, 39, 28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, OrderResumeComponent_p_2_Template, 6, 4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, OrderResumeComponent_p_3_Template, 6, 8, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "210" || ctx.loginService.getUserCode() == "220");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.getUsername() != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.getUsername() == null);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDateRangePicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerActions, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerCancel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerApply, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1yZXN1bWUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5257:
/*!*********************************************!*\
  !*** ./src/app/orderable-period.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderablePeriodService": () => (/* binding */ OrderablePeriodService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ 5619);




class OrderablePeriodService {
    constructor(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + "anag.php";
    }
    getOrderPeriodPromise() {
        let requestType = "getOrderPeriod";
        let id_session = localStorage.getItem('id_session');
        let path = this.url + '?request=' + requestType + '&id_session=' + id_session;
        return this.http.get(path, {
            responseType: "json"
        });
    }
    setOrderPeriodPromise(min, max) {
        return this.http.post(this.url, {
            request: 'setOrderPeriod',
            id_session: localStorage.getItem('id_session'),
            gg_min: min,
            gg_max: max
        });
    }
}
OrderablePeriodService.ɵfac = function OrderablePeriodService_Factory(t) { return new (t || OrderablePeriodService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService)); };
OrderablePeriodService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OrderablePeriodService, factory: OrderablePeriodService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2343:
/*!****************************************************************!*\
  !*** ./src/app/orderable-period/orderable-period.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderablePeriodComponent": () => (/* binding */ OrderablePeriodComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _orderable_period_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../orderable-period.service */ 5257);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../snackbar.service */ 9518);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 8699);













function OrderablePeriodComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Invalid start date"));
} }
function OrderablePeriodComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Invalid end date"));
} }
function OrderablePeriodComponent_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, "Logged as"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.loginService.currentUser.client);
} }
const _c0 = function () { return ["/login"]; };
function OrderablePeriodComponent_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, "You're not logged!"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, "Login"));
} }
class OrderablePeriodComponent {
    constructor(orderablePeriodService, snackbarService, loginService) {
        this.orderablePeriodService = orderablePeriodService;
        this.snackbarService = snackbarService;
        this.formattedDate = "";
        this.formattedStartDate = "";
        this.formattedEndDate = "";
        this.isSubmitted = false;
        this.gg_min = "";
        this.gg_max = "";
        this.year = "";
        this.month = "";
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
        });
        this.year = new Date().getFullYear().toString();
        this.month = new Date().getMonth().toString();
        this.loginService = loginService;
        this.loginService.getCurrentUserSync();
    }
    ngOnInit() {
        this.getDates();
    }
    setOrderPeriod(min, max) {
        this.orderablePeriodService.setOrderPeriodPromise(min, max).subscribe(res => {
            if (res[0] == "OK") {
                //console.log("orderPeriod set!");
                let newDate = new Date();
                this.range.controls['start'].setValue(new Date(newDate.getFullYear(), newDate.getMonth(), parseInt(min)));
                this.gg_min = min;
                this.range.controls['end'].setValue(new Date(newDate.getFullYear(), newDate.getMonth(), parseInt(max)));
                this.gg_max = max;
                this.snackbarService.onUpdate();
            }
            else {
                console.error("Error setting orderPeriod!");
            }
        });
    }
    getDates() {
        this.orderablePeriodService.getOrderPeriodPromise().subscribe(res => {
            if (res[0] == "OK") {
                let newDate = new Date();
                //console.log(newDate); 
                this.range.controls['start'].setValue(new Date(newDate.getFullYear(), newDate.getMonth(), res[1].gg_min));
                this.range.controls['end'].setValue(new Date(newDate.getFullYear(), newDate.getMonth(), res[1].gg_max));
            }
            else {
                console.error("Error getting orderPeriod!");
            }
        });
    }
    onDateChange(type, event) {
        let fullLocaleDate = "";
        //here it's better to keep the date type as Date because it's handled well by the datepicker
        switch (type) {
            case "start":
                this.range.controls['start'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(new Date(event.value), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
                fullLocaleDate = this.range.controls.start.value.toLocaleString('it-IT').split(",", 2)[0];
                break;
            case "end":
                if (event.value == null) {
                    let newDate = new Date();
                    this.range.controls['end'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(new Date(newDate.getFullYear(), newDate.getMonth(), parseInt(this.gg_max)), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
                }
                else
                    this.range.controls['end'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(new Date(event.value), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required);
                fullLocaleDate = this.range.controls.end.value.toLocaleString('it-IT').split(",", 2)[0];
                break;
        }
        //split where the separators "/" are
        let splittedDate = fullLocaleDate.split("/", 3);
        let day = splittedDate[0];
        let month = splittedDate[1];
        let year = splittedDate[2];
        //prepare date to be saved on db
        if (month.length == 1) {
            month = "0" + month;
        }
        //check day is formatted correctly
        day = this.checkDay(parseInt(day));
        this.formattedDate = year + "-" + month + "-" + day;
        //console.log(this.formattedDate);
        if (type == "start") {
            this.formattedStartDate = this.formattedDate;
            this.gg_min = this.formattedDate.split("-")[2];
            if (this.gg_min > this.gg_max) {
                this.gg_max = this.gg_min;
            }
            this.setOrderPeriod(this.gg_min, this.gg_max);
        }
        else if (type == "end" && this.formattedDate != "1970-01-01") {
            this.formattedEndDate = this.formattedDate;
            this.gg_max = this.formattedDate.split("-")[2];
            this.setOrderPeriod(this.gg_min, this.gg_max);
        }
    }
    checkDay(day) {
        switch (this.month) {
            case "02":
                if (parseInt(this.year) % 4 == 0 && day > 29) {
                    day = 29;
                }
                else if ((day) > 28) {
                    day = 28;
                }
                break;
            case "04" || 0 || 0 || 0:
                if (day > 30) {
                    day = 30;
                }
                break;
            case "01" || 0 || 0 || 0 || 0 || 0 || 0 || 0:
                if (day > 31) {
                    day = 31;
                }
                break;
            default:
                if (day < 1) {
                    day = 1;
                }
                break;
        }
        if (day.toString().length == 1) {
            return "0" + day;
        }
        else
            return day.toString();
    }
    getFormattedDate(date) {
        let splitDate = date.toLocaleString('it-IT').split(",", 2)[0].split("/", 3);
        let day = splitDate[0];
        let month = splitDate[1];
        let year = splitDate[2];
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        return year + "-" + month + "-" + day;
    }
}
OrderablePeriodComponent.ɵfac = function OrderablePeriodComponent_Factory(t) { return new (t || OrderablePeriodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_orderable_period_service__WEBPACK_IMPORTED_MODULE_0__.OrderablePeriodService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService)); };
OrderablePeriodComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OrderablePeriodComponent, selectors: [["app-orderable-period"]], decls: 32, vars: 24, consts: [[1, "second-nav"], ["layout", "row", "layout-align", "center", "align", "center", 2, "min-height", "100px", "margin", "10%"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", 3, "placeholder", "dateChange"], ["matEndDate", "", "formControlName", "end", 3, "placeholder", "dateChange"], ["picker", ""], ["mat-mini-fab", "", "color", "primary", "matDateRangePickerApply", "", 2, "margin", "5px", 3, "matTooltip"], [1, "material-icons"], ["mat-mini-fab", "", "matDateRangePickerCancel", "", 2, "margin", "5px", 3, "matTooltip"], [4, "ngIf"], ["mat-fab", "", "color", "primary", 3, "matTooltip", "click"], ["align", "center", 4, "ngIf"], ["align", "center"], [3, "routerLink"]], template: function OrderablePeriodComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1)(5, "mat-form-field")(6, "mat-date-range-input", 2)(7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dateChange", function OrderablePeriodComponent_Template_input_dateChange_7_listener($event) { return ctx.onDateChange("start", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dateChange", function OrderablePeriodComponent_Template_input_dateChange_9_listener($event) { return ctx.onDateChange("end", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-date-range-picker", null, 5)(13, "mat-date-range-picker-actions")(14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, OrderablePeriodComponent_mat_error_22_Template, 3, 3, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, OrderablePeriodComponent_mat_error_23_Template, 3, 3, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p")(25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OrderablePeriodComponent_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.open()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, OrderablePeriodComponent_p_30_Template, 6, 4, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, OrderablePeriodComponent_p_31_Template, 6, 8, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 12, "Orderable period"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 14, "Start date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 16, "End date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 18, "Submit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 20, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.range.controls.start.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.range.controls.end.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 22, "Edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.getUsername() != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.getUsername() == null);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDateRangePicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerActions, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerCancel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerApply, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["mat-form-field[_ngcontent-%COMP%] {\n    width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyYWJsZS1wZXJpb2QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJvcmRlcmFibGUtcGVyaW9kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDgwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 6247:
/*!**************************************************************************!*\
  !*** ./src/app/orders-extra-checkbox/orders-extra-checkbox.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersExtraCheckboxComponent": () => (/* binding */ OrdersExtraCheckboxComponent)
/* harmony export */ });
/* harmony import */ var _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cell-checkbox/cell-checkbox.component */ 7145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);





class OrdersExtraCheckboxComponent extends _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CellCheckboxComponent {
    constructor(ordersService, snackbar) {
        super(snackbar);
        this.ordersService = ordersService;
        this.loading = false;
    }
    ngOnInit() {
        switch (localStorage.getItem("id_profile")) {
            case '220':
                this.isLocked = this.data.b_to_supplier;
                break;
            case '210':
                this.isLocked = (this.data.status != "inviato");
                break;
            case '230':
                this.isLocked = true;
                break;
            default:
                break;
        }
        /*
        if(this.data.b_to_supplier){
          this.isLocked = true;
        }
        */
    }
    toggleCheckbox(event) {
        this.loading = true;
        //console.log(event);
        this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
        //console.log("current checkbox value: " + this.currentValue);
        let orderExtra = {
            id: this.data.id,
            anno: this.data.anno,
            mese: this.data.mese,
            username: this.data.username,
            d_ordine: this.data.d_ordine,
            n_ordine: this.data.n_ordine,
            b_urgente: this.data.b_urgente,
            b_extra: this.currentValue,
            b_validato: this.data.b_validato,
            d_validato: this.data.d_validato,
            note: this.data.note,
            status: this.data.status,
            d_consegna_prevista: this.data.d_consegna_prevista,
            n_ddt: this.data.n_ddt,
            d_ddt: this.data.d_ddt,
            note_consegna: this.data.note_consegna,
            b_prestito: this.data.b_prestito,
            id_ordine_prestito: this.data.id_ordine_prestito,
            username_prestito_a: this.data.username_prestito_a,
            username_prestito_da: this.data.username_prestito_da
        };
        let orderStatus = {
            id: "0",
            username: localStorage.getItem('sangue_username'),
            id_order: this.data.id,
            d_status: this.getFormattedDate(new Date()),
            status: this.data.status,
            note: this.data.b_extra ? "segnato come extra da " + localStorage.getItem('sangue_username') : "segnato come non extra da" + localStorage.getItem('sangue_username'),
            b_sto: false
        };
        this.ordersService.setOrderPromise(orderExtra, false).subscribe(res => {
            if (res[0] == "OK") {
                this.loading = false;
                this.ordersService.setOrderStatusPromise(orderStatus).subscribe(res2 => {
                    if (res2[0] == "OK") {
                        this.loading = false;
                        this.openSnackbar();
                        //console.log("OrderStatus set");
                    }
                    else {
                        console.error("Error setting order!");
                        this.loading = false;
                    }
                });
            }
            else {
                console.error("Error setting order!");
                this.loading = false;
                this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
            }
        });
    }
}
OrdersExtraCheckboxComponent.ɵfac = function OrdersExtraCheckboxComponent_Factory(t) { return new (t || OrdersExtraCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar)); };
OrdersExtraCheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OrdersExtraCheckboxComponent, selectors: [["app-orders-extra-checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 2, consts: [[3, "checked", "disabled", "change"]], template: function OrdersExtraCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function OrdersExtraCheckboxComponent_Template_mat_checkbox_change_0_listener($event) { return ctx.toggleCheckbox($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.isLocked);
    } }, dependencies: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMtZXh0cmEtY2hlY2tib3guY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3087:
/*!********************************************************************************!*\
  !*** ./src/app/orders-received-checkbox/orders-received-checkbox.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersReceivedCheckboxComponent": () => (/* binding */ OrdersReceivedCheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cell-checkbox/cell-checkbox.component */ 7145);
/* harmony import */ var _mark_as_received_dialog_mark_as_received_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mark-as-received-dialog/mark-as-received-dialog.component */ 7699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders/orders.component */ 8686);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);











class OrdersReceivedCheckboxComponent extends _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CellCheckboxComponent {
    constructor(ordersService, ordersComponent, loginService, dialog, snackbar) {
        super(snackbar);
        this.ordersService = ordersService;
        this.ordersComponent = ordersComponent;
        this.loginService = loginService;
        this.dialog = dialog;
        this.loginService = loginService;
    }
    ngOnInit() {
        this.userCode = this.loginService.getUserCode();
        this.checked = (this.data.status == "ricevuto");
        this.isLocked = (this.data.status != "inviato al cliente");
    }
    toggleCheckbox(event) {
        this.openMarkAsReceivedDialog();
    }
    openMarkAsReceivedDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogConfig();
        dialogConfig.data = {
            orderId: this.data.id,
        };
        dialogConfig.disableClose = true;
        this.dialogRef = this.dialog.open(_mark_as_received_dialog_mark_as_received_dialog_component__WEBPACK_IMPORTED_MODULE_1__.MarkAsReceivedDialogComponent, dialogConfig);
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined) {
                if (result.isSubmitted !== undefined && result.isSubmitted) {
                    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
                    /*
                    let orderSent = {
                      id: this.data.id,
                      anno: this.data.anno,
                      username: this.data.username,
                      d_ordine: this.data.d_ordine,
                      n_ordine: this.data.n_ordine,
                      b_urgente: this.data.b_urgente,
                      b_extra: this.data.b_extra,
                      b_validato: this.data.b_validato,
                      d_validato: this.data.d_validato,
                      note: this.data.note
                    }
                    */
                    let orderStatus = {
                        id: "0",
                        username: localStorage.getItem('sangue_username'),
                        id_order: this.data.id,
                        d_status: this.getFormattedDate(new Date()),
                        status: "ricevuto",
                        note: "ordine ricevuto da " + localStorage.getItem('sangue_username'),
                        b_sto: false
                    };
                    //non serve, basta solo un cambio di stato ed un conseguente aggiornamento della view
                    //this.ordersComponent.setOrder(orderSent, orderStatus, false);
                    this.ordersService.setOrderStatusPromise(orderStatus).subscribe(res => {
                        if (res[0] == "OK") {
                            //update suppliesGridRowData
                            for (var i = 0; i < this.ordersComponent.orderStatusArr.length; ++i) {
                                if (this.data.id == this.ordersComponent.orderStatusArr[i].id_order) {
                                    this.ordersComponent.orderStatusArr[i].status = "ricevuto";
                                    break;
                                }
                            }
                            this.ordersComponent.createOrderGridRowData();
                        }
                        else {
                            console.error("Error setting orderStatus!");
                        }
                    });
                    this.checked = true;
                    this.isLocked = true;
                }
                if (result.isCancelled !== undefined && result.isCancelled) {
                    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
                    this.checked = false;
                }
            }
        });
    }
}
OrdersReceivedCheckboxComponent.ɵfac = function OrdersReceivedCheckboxComponent_Factory(t) { return new (t || OrdersReceivedCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_orders_orders_component__WEBPACK_IMPORTED_MODULE_3__.OrdersComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar)); };
OrdersReceivedCheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: OrdersReceivedCheckboxComponent, selectors: [["app-orders-received-checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 3, consts: [[3, "checked", "disabled", "ngModel", "ngModelChange", "change"]], template: function OrdersReceivedCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OrdersReceivedCheckboxComponent_Template_mat_checkbox_ngModelChange_0_listener($event) { return ctx.checked = $event; })("change", function OrdersReceivedCheckboxComponent_Template_mat_checkbox_change_0_listener($event) { return ctx.toggleCheckbox($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.isLocked)("ngModel", ctx.checked);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMtcmVjZWl2ZWQtY2hlY2tib3guY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1243:
/*!************************************************************************!*\
  !*** ./src/app/orders-sent-checkbox/orders-sent-checkbox.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersSentCheckboxComponent": () => (/* binding */ OrdersSentCheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cell-checkbox/cell-checkbox.component */ 7145);
/* harmony import */ var _send_to_supplier_dialog_send_to_supplier_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../send-to-supplier-dialog/send-to-supplier-dialog.component */ 779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders/orders.component */ 8686);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);










class OrdersSentCheckboxComponent extends _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CellCheckboxComponent {
    constructor(ordersService, ordersComponent, dialog, snackbar) {
        super(snackbar);
        this.ordersService = ordersService;
        this.ordersComponent = ordersComponent;
        this.dialog = dialog;
        this.dialog = dialog;
    }
    ngOnInit() {
        //console.log(this.data);
        if (this.data.b_to_supplier) {
            this.isLocked = true;
        }
    }
    toggleCheckbox(event) {
        this.openSendToSupplierDialog();
    }
    openSendToSupplierDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogConfig();
        console.log(this.data);
        dialogConfig.data = {
            orderId: this.data.id,
            isValidated: this.data.b_validato
        };
        if (!this.data.b_validato)
            dialogConfig.disableClose = true;
        this.dialogRef = this.dialog.open(_send_to_supplier_dialog_send_to_supplier_dialog_component__WEBPACK_IMPORTED_MODULE_1__.SendToSupplierDialogComponent, dialogConfig);
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined && this.data.status != "inviato al fornitore") {
                if (result.isSubmitted !== undefined && result.isSubmitted) {
                    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
                    /*
                    let b_extra: boolean;
                    if(this.data.b_extra === undefined) {
                      b_extra = false;
                    }
                    */
                    let orderSent = {
                        id: this.data.id,
                        anno: this.data.anno,
                        mese: this.data.mese,
                        username: this.data.username,
                        d_ordine: this.data.d_ordine,
                        n_ordine: this.data.n_ordine,
                        b_urgente: this.data.b_urgente,
                        b_extra: this.data.b_extra,
                        b_validato: this.data.b_validato,
                        d_validato: this.data.d_validato,
                        note: this.data.note, d_consegna_prevista: this.data.d_consegna_prevista,
                        status: this.data.status,
                        n_ddt: this.data.n_ddt,
                        d_ddt: this.data.d_ddt,
                        note_consegna: this.data.note_consegna,
                        b_prestito: this.data.b_prestito,
                        id_ordine_prestito: this.data.id_ordine_prestito,
                        username_prestito_a: this.data.username_prestito_a,
                        username_prestito_da: this.data.username_prestito_da
                    };
                    let orderStatus = {
                        id: "0",
                        username: localStorage.getItem('sangue_username'),
                        id_order: this.data.id,
                        d_status: this.getFormattedDate(new Date()),
                        status: "inviato al fornitore",
                        note: "ordine inviato al fornitore da " + localStorage.getItem('sangue_username'),
                        b_sto: false
                    };
                    //this.isLocked = true;
                    this.ordersComponent.setOrder(orderSent, orderStatus, false);
                    this.checked = true;
                    this.isLocked = true;
                }
                if (result.isCancelled !== undefined && result.isCancelled) {
                    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
                    this.checked = false;
                }
            }
        });
    }
}
OrdersSentCheckboxComponent.ɵfac = function OrdersSentCheckboxComponent_Factory(t) { return new (t || OrdersSentCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_orders_orders_component__WEBPACK_IMPORTED_MODULE_3__.OrdersComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar)); };
OrdersSentCheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: OrdersSentCheckboxComponent, selectors: [["app-orders-sent-checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 3, consts: [[3, "checked", "disabled", "ngModel", "ngModelChange", "change"]], template: function OrdersSentCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OrdersSentCheckboxComponent_Template_mat_checkbox_ngModelChange_0_listener($event) { return ctx.currentValue = $event; })("change", function OrdersSentCheckboxComponent_Template_mat_checkbox_change_0_listener($event) { return ctx.toggleCheckbox($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.isLocked)("ngModel", ctx.currentValue);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMtc2VudC1jaGVja2JveC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8311:
/*!**************************************************************************************!*\
  !*** ./src/app/orders-to-customer-checkbox/orders-to-customer-checkbox.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersToCustomerCheckboxComponent": () => (/* binding */ OrdersToCustomerCheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cell-checkbox/cell-checkbox.component */ 7145);
/* harmony import */ var _send_to_customer_dialog_send_to_customer_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../send-to-customer-dialog/send-to-customer-dialog.component */ 2706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _supplies_supplies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../supplies/supplies.component */ 6439);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);










class OrdersToCustomerCheckboxComponent extends _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CellCheckboxComponent {
    constructor(ordersService, suppliesComponent, dialog, snackbar) {
        super(snackbar);
        this.ordersService = ordersService;
        this.suppliesComponent = suppliesComponent;
        this.dialog = dialog;
        this.dialog = dialog;
    }
    ngOnInit() {
        if (this.data.status == "inviato al cliente" || this.data.status == "ricevuto") {
            this.isLocked = true;
        }
    }
    toggleCheckbox(event) {
        this.openSendToSupplierDialog();
    }
    openSendToSupplierDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogConfig();
        dialogConfig.data = {
            orderId: this.data.id,
        };
        this.dialogRef = this.dialog.open(_send_to_customer_dialog_send_to_customer_dialog_component__WEBPACK_IMPORTED_MODULE_1__.SendToCustomerDialogComponent, dialogConfig);
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined) {
                if (result.isSubmitted !== undefined && result.isSubmitted) {
                    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
                    let orderSent = {
                        id: this.data.id,
                        anno: this.data.anno,
                        username: this.data.username,
                        d_ordine: this.data.d_ordine,
                        n_ordine: this.data.n_ordine,
                        b_urgente: this.data.b_urgente,
                        b_extra: this.data.b_extra,
                        b_validato: this.data.b_validato,
                        d_validato: this.data.d_validato,
                        note: this.data.note,
                        d_consegna_prevista: this.data.d_consegna_prevista,
                        n_ddt: this.data.n_ddt,
                        d_ddt: this.data.d_ddt,
                        note_consegna: this.data.note_consegna,
                    };
                    let orderStatus = {
                        id: "0",
                        username: localStorage.getItem('sangue_username'),
                        id_order: this.data.id,
                        d_status: this.getFormattedDate(new Date()),
                        status: "inviato al cliente",
                        note: "ordine inviato a " + this.data.username + " da " + localStorage.getItem('sangue_username'),
                        b_sto: false
                    };
                    this.ordersService.setOrderStatusPromise(orderStatus).subscribe(res => {
                        if (res[0] == "OK") {
                            //update suppliesGridRowData
                            for (var i = 0; i < this.suppliesComponent.orderStatusArr.length; ++i) {
                                if (this.data.id == this.suppliesComponent.orderStatusArr[i].id_order) {
                                    this.suppliesComponent.orderStatusArr[i].status = "inviato al cliente";
                                    this.openSnackbar();
                                    break;
                                }
                            }
                            this.suppliesComponent.updateRow(this.data.id);
                        }
                        else {
                            console.error("Error setting orderStatus!");
                        }
                    });
                    this.checked = true;
                }
                if (result.isCancelled !== undefined && result.isCancelled) {
                    this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
                    this.checked = false;
                }
            }
        });
    }
}
OrdersToCustomerCheckboxComponent.ɵfac = function OrdersToCustomerCheckboxComponent_Factory(t) { return new (t || OrdersToCustomerCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_2__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_supplies_supplies_component__WEBPACK_IMPORTED_MODULE_3__.SuppliesComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar)); };
OrdersToCustomerCheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: OrdersToCustomerCheckboxComponent, selectors: [["app-orders-to-customer-checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 3, consts: [[3, "checked", "disabled", "ngModel", "ngModelChange", "change"]], template: function OrdersToCustomerCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OrdersToCustomerCheckboxComponent_Template_mat_checkbox_ngModelChange_0_listener($event) { return ctx.currentValue = $event; })("change", function OrdersToCustomerCheckboxComponent_Template_mat_checkbox_change_0_listener($event) { return ctx.toggleCheckbox($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.isLocked)("ngModel", ctx.currentValue);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMtdG8tY3VzdG9tZXItY2hlY2tib3guY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4441:
/*!********************************************************************!*\
  !*** ./src/app/orders-to-customer/orders-to-customer.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersToCustomerComponent": () => (/* binding */ OrdersToCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class OrdersToCustomerComponent {
    /**
     *
     *
     *
     * CANCELLAREEEEEEEEEEEEEEEEEE CLASSE INUTILEEEEEEEEEEEEEEEEEEEEEEEEEEee
     */
    constructor() { }
    ngOnInit() {
    }
}
OrdersToCustomerComponent.ɵfac = function OrdersToCustomerComponent_Factory(t) { return new (t || OrdersToCustomerComponent)(); };
OrdersToCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersToCustomerComponent, selectors: [["app-orders-to-customer"]], decls: 2, vars: 0, template: function OrdersToCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "orders-to-customer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMtdG8tY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 225:
/*!****************************************************************************!*\
  !*** ./src/app/orders-urgent-checkbox/orders-urgent-checkbox.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersUrgentCheckboxComponent": () => (/* binding */ OrdersUrgentCheckboxComponent)
/* harmony export */ });
/* harmony import */ var _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cell-checkbox/cell-checkbox.component */ 7145);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/grid-configs */ 6980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);







class OrdersUrgentCheckboxComponent extends _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CellCheckboxComponent {
    constructor(ordersService, snackbar) {
        super(snackbar);
        this.ordersService = ordersService;
        this.loading = false;
    }
    ngOnInit() {
        /*
        if(this.data.status != "inviato" && localStorage.getItem("id_profile") != '220') {
          this.isLocked = true;
        }
        */
        //console.log(this.data.note);
        switch (localStorage.getItem("id_profile")) {
            case '220':
                this.isLocked = (this.data.status == "inviato al fornitore" || this.data.status == "inviato al cliente" || this.data.status == "ricevuto");
                break;
            case '210':
                this.isLocked = (this.data.status != "inviato");
                break;
            case '230':
                this.isLocked = true;
                break;
            default:
                break;
        }
    }
    toggleCheckbox(event) {
        this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
        //console.log(navigator.language.split("-", 2)[0]);
        if (this.currentValue == 1 && (this.data.note == "") || (this.data.note == null) || (this.data.note === undefined)) {
            src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__.localeLang == 'it' ? alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.translations.it.PleaseProvideNotes) : alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.translations.en.PleaseProvideNotes);
        }
        let orderUrgent = {
            id: this.data.id,
            anno: this.data.anno,
            mese: this.data.mese,
            username: this.data.username,
            d_ordine: this.data.d_ordine,
            n_ordine: this.data.n_ordine,
            b_urgente: this.currentValue,
            b_extra: this.data.b_extra,
            b_validato: this.data.b_validato,
            d_validato: this.data.d_validato,
            note: this.data.note,
            status: this.data.status,
            d_consegna_prevista: this.data.d_consegna_prevista,
            n_ddt: this.data.n_ddt,
            d_ddt: this.data.d_ddt,
            note_consegna: this.data.note_consegna,
            b_prestito: this.data.b_prestito,
            id_ordine_prestito: this.data.id_ordine_prestito,
            username_prestito_a: this.data.username_prestito_a,
            username_prestito_da: this.data.username_prestito_da
        };
        let orderStatus = {
            id: "0",
            username: localStorage.getItem('sangue_username'),
            id_order: this.data.id,
            d_status: this.getFormattedDate(new Date()),
            status: this.data.status,
            note: this.data.b_urgente ? "segnato come urgente da " + localStorage.getItem('sangue_username') : "segnato come non urgente da" + localStorage.getItem('sangue_username'),
            b_sto: false
        };
        this.ordersService.setOrderPromise(orderUrgent, false).subscribe(res => {
            if (res[0] == "OK") {
                console.log("Order set");
                this.ordersService.setOrderStatusPromise(orderStatus).subscribe(res2 => {
                    if (res2[0] == "OK") {
                        this.loading = false;
                        console.log("OrderStatus set");
                        this.openSnackbar();
                    }
                    else {
                        console.error("Error setting order!");
                        this.loading = false;
                    }
                });
            }
            else {
                console.error("Error setting order!");
                this.loading = false;
                this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
            }
        });
    }
}
OrdersUrgentCheckboxComponent.ɵfac = function OrdersUrgentCheckboxComponent_Factory(t) { return new (t || OrdersUrgentCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar)); };
OrdersUrgentCheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: OrdersUrgentCheckboxComponent, selectors: [["app-orders-urgent-checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 2, consts: [[3, "checked", "disabled", "change"]], template: function OrdersUrgentCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function OrdersUrgentCheckboxComponent_Template_mat_checkbox_change_0_listener($event) { return ctx.toggleCheckbox($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.isLocked);
    } }, dependencies: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMtdXJnZW50LWNoZWNrYm94LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1963:
/*!**********************************************************************************!*\
  !*** ./src/app/orders-validated-checkbox/orders-validated-checkbox.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersValidatedCheckboxComponent": () => (/* binding */ OrdersValidatedCheckboxComponent)
/* harmony export */ });
/* harmony import */ var _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cell-checkbox/cell-checkbox.component */ 7145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);






class OrdersValidatedCheckboxComponent extends _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CellCheckboxComponent {
    constructor(ordersService, loginService, snackbar) {
        super(snackbar);
        this.ordersService = ordersService;
        this.loginService = loginService;
        //loginService!: LoginService
        this.loading = false;
        this.loginService = loginService;
    }
    ngOnInit() {
        this.userCode = this.loginService.getUserCode();
        //console.log(this.data);
        if (this.data.b_to_supplier) {
            this.isLocked = true;
        }
    }
    toggleCheckbox(event) {
        this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
        console.log("current checkbox value: " + this.currentValue);
        let orderValidated = {
            id: this.data.id,
            anno: this.data.anno,
            mese: this.data.mese,
            username: this.data.username,
            d_ordine: this.data.d_ordine,
            n_ordine: this.data.n_ordine,
            b_urgente: this.data.b_urgente,
            b_extra: this.data.b_extra,
            b_validato: this.currentValue,
            d_validato: this.data.d_validato,
            note: this.data.note,
            status: this.data.status,
            d_consegna_prevista: this.data.d_consegna_prevista,
            n_ddt: this.data.n_ddt,
            d_ddt: this.data.d_ddt,
            note_consegna: this.data.note_consegna,
            b_prestito: this.data.b_prestito,
            id_ordine_prestito: this.data.id_ordine_prestito,
            username_prestito_a: this.data.username_prestito_a,
            username_prestito_da: this.data.username_prestito_da
        };
        let orderStatus = {
            id: "0",
            username: localStorage.getItem('sangue_username'),
            id_order: this.data.id,
            d_status: this.getFormattedDate(new Date()),
            status: this.data.status,
            note: this.data.b_validato ? "segnato come extra da " + localStorage.getItem('sangue_username') : "segnato come non extra da" + localStorage.getItem('sangue_username'),
            b_sto: false
        };
        this.ordersService.setOrderPromise(orderValidated, false).subscribe(res => {
            if (res[0] == "OK") {
                this.loading = false;
                this.ordersService.setOrderStatusPromise(orderStatus).subscribe(res2 => {
                    if (res2[0] == "OK") {
                        this.loading = false;
                        console.log("OrderStatus set");
                        this.openSnackbar();
                    }
                    else {
                        console.error("Error setting order!");
                        this.loading = false;
                    }
                });
            }
            else {
                console.error("Error setting order!");
                this.loading = false;
                this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
            }
        });
    }
}
OrdersValidatedCheckboxComponent.ɵfac = function OrdersValidatedCheckboxComponent_Factory(t) { return new (t || OrdersValidatedCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_1__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
OrdersValidatedCheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OrdersValidatedCheckboxComponent, selectors: [["app-orders-validated-checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 2, consts: [[3, "checked", "disabled", "change"]], template: function OrdersValidatedCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function OrdersValidatedCheckboxComponent_Template_mat_checkbox_change_0_listener($event) { return ctx.toggleCheckbox($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.userCode == "210" || ctx.isLocked);
    } }, dependencies: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMtdmFsaWRhdGVkLWNoZWNrYm94LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6382:
/*!***********************************!*\
  !*** ./src/app/orders.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersService": () => (/* binding */ OrdersService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ 5619);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class OrdersService {
    constructor(loginService, http) {
        this.loginService = loginService;
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'order.php';
        //reportUrl = environment.reportPath + 'order.php';
        this.orders = [];
        this.orderRows = [];
        this.lastOrderId = "";
        this.lastOrderRowId = "";
    }
    /*
    
          ORDERS ===========================
  
    */
    listOrders(year) {
        let path = this.url + '?request=listOrders&id_session=' + this.loginService.getSession() + '&year=' + year;
        ////console.log(path);
        this.http.get(path, {
            responseType: "json"
        }).subscribe(res => {
            ////console.log(res);
            if (res[0] == "KO") {
                console.error("Error retrieving orders!");
                return null;
            }
            else {
                ////console.log(res[1]);   
                this.orders = res[1];
                return this.orders;
            }
        });
    }
    listOrdersPromise(year, month) {
        let id_session = localStorage.getItem('id_session');
        let path = "";
        if (month == "" || month == null || month == undefined) {
            month = undefined;
        }
        if (year == "" || year == null || year == undefined) {
            year == undefined;
        }
        if (month == undefined) {
            path = this.url + '?request=listOrders&id_session=' + id_session + '&year=' + year;
        }
        if (year == undefined) {
            path = this.url + '?request=listOrders&id_session=' + id_session;
        }
        if (year != undefined && month != undefined) {
            path = this.url + '?request=listOrders&id_session=' + id_session + '&year=' + year + "&month=" + month;
        }
        //console.log(path);
        return this.http.get(path, {
            responseType: "json"
        });
    }
    setOrder(order, isAdding) {
        if (!isAdding) {
            //SET
            this.http.post(this.url, {
                request: 'setOrder',
                id_session: this.loginService.getSession(),
                id: order.id,
                anno: order.anno,
                mese: order.mese,
                username: order.username,
                d_ordine: order.d_ordine,
                n_ordine: order.n_ordine,
                b_urgente: order.b_urgente,
                b_extra: order.b_extra,
                b_validato: order.b_validato,
                d_validato: order.d_validato,
                note: order.note,
                d_consegna_prevista: order.d_consegna_prevista,
                n_ddt: order.n_ddt,
                d_ddt: order.d_ddt,
                note_consegna: order.note_consegna
            }).subscribe(res => {
                if (res[0] == "KO") {
                    console.error("setOrders() error: " + res[1].toString());
                }
                else {
                    //console.log("Result: " + res[0]);
                    //console.log("Order with ID " + res[1] + " successfully set!");
                    this.lastOrderId = res[1].toString();
                }
            });
        }
        else {
            //ADD
            this.http.post(this.url, {
                request: 'setOrder',
                id_session: this.loginService.getSession(),
                id: '-1',
                anno: order.anno,
                mese: order.mese,
                username: order.username,
                d_ordine: order.d_ordine,
                n_ordine: order.n_ordine,
                b_urgente: order.b_urgente,
                b_extra: order.b_extra,
                b_validato: order.b_validato,
                d_validato: order.d_validato,
                note: order.note,
                d_consegna_prevista: order.d_consegna_prevista,
                n_ddt: order.n_ddt,
                d_ddt: order.d_ddt,
                note_consegna: order.note_consegna
            }).subscribe(res => {
                if (res[0] == "KO") {
                    console.error("setOrders() error: " + res[1].toString());
                }
                else {
                    //console.log("Result: " + res[0]);
                    //console.log("Order with ID " + res[1] + " successfully added!");
                    this.lastOrderId = res[1].toString();
                }
            });
        }
    }
    setOrderPromise(order, isAdding) {
        if (!isAdding) {
            //SET
            return this.http.post(this.url, {
                request: 'setOrder',
                id_session: this.loginService.getSession(),
                id: order.id,
                anno: order.anno,
                mese: order.mese,
                username: order.username,
                d_ordine: order.d_ordine,
                n_ordine: order.n_ordine,
                b_urgente: order.b_urgente,
                b_extra: order.b_extra,
                b_validato: order.b_validato,
                d_validato: order.d_validato,
                note: order.note,
                d_consegna_prevista: order.d_consegna_prevista,
                n_ddt: order.n_ddt,
                d_ddt: order.d_ddt,
                note_consegna: order.note_consegna,
                b_prestito: order.b_prestito,
                id_ordine_prestito: order.id_ordine_prestito,
                username_prestito_da: order.username_prestito_da,
                username_prestito_a: order.username_prestito_a
            });
        }
        else {
            //console.log("isAdding: " + isAdding);
            //console.log(order);
            return this.http.post(this.url, {
                request: 'setOrder',
                id_session: this.loginService.getSession(),
                id: '-1',
                anno: order.anno,
                mese: order.mese,
                username: order.username,
                d_ordine: order.d_ordine,
                n_ordine: order.n_ordine,
                b_urgente: order.b_urgente,
                b_extra: order.b_extra,
                b_validato: order.b_validato,
                d_validato: order.d_validato,
                note: order.note,
                d_consegna_prevista: order.d_consegna_prevista,
                n_ddt: order.n_ddt,
                d_ddt: order.d_ddt,
                note_consegna: order.note_consegna,
                b_prestito: order.b_prestito,
                id_ordine_prestito: order.id_ordine_prestito,
                username_prestito_da: order.username_prestito_da,
                username_prestito_a: order.username_prestito_a
            });
        }
    }
    rmOrder(id) {
        this.http.post(this.url, {
            request: 'rmOrder',
            id_session: this.loginService.getSession(),
            id: id
        }).subscribe(res => {
            if (res[0] == "KO") {
                console.error("setOrderRows() error: " + res[1].toString());
            }
            else {
                //console.log("Result: " + res[0]);
                //console.log("OrderRow with ID " + res[1] + " successfully removed!");
                this.lastOrderRowId = res[1].toString();
            }
        });
    }
    rmOrderPromise(id) {
        return this.http.post(this.url, {
            request: 'rmOrder',
            id_session: this.loginService.getSession(),
            id: id
        });
    }
    /*
    
          ORDERROWS ===========================
  
    */
    listOrderRows(id_order) {
        let path = this.url + '?request=listOrderRows&id_session=' + this.loginService.getSession() + '&id_order=' + id_order;
        this.http.get(path, {
            responseType: "json"
        }).subscribe(res => {
            if (res[0] == "KO") {
                console.error("Error retrieving orders!");
                return null;
            }
            else {
                this.orderRows = res[1];
                //console.log("orderRowssssssssssssssssssssssssssssssssssssssssssssss");
                //console.log(res[1]);
                return this.orderRows;
            }
        });
    }
    listOrderRowsPromise(id_order) {
        let path = this.url + '?request=listOrderRows&id_session=' + this.loginService.getSession() + '&id_order=' + id_order;
        return this.http.get(path, {
            responseType: "json"
        });
    }
    setOrderRow(orderRow, isAdding) {
        if (!isAdding) {
            //SET
            this.http.post(this.url, {
                request: 'setOrder',
                id_session: this.loginService.getSession(),
                id: orderRow.id,
                id_ordine: orderRow.id_ordine,
                username: orderRow.username,
                n_riga: orderRow.n_riga,
                id_prd: orderRow.id_prd,
                qta: orderRow.qta,
                qta_validata: orderRow.qta_validata,
                qta_ricevuta: orderRow.qta_ricevuta,
                note: orderRow.note
            }).subscribe(res => {
                if (res[0] == "KO") {
                    console.error("setOrderRows() error: " + res[1].toString());
                }
                else {
                    //console.log("Result: " + res[0]);
                    //console.log("OrderRow with ID " + res[1] + "successfully set!");
                    this.lastOrderRowId = res[1].toString();
                }
            });
        }
        else {
            //ADD
            this.http.post(this.url, {
                request: 'setOrder',
                id_session: this.loginService.getSession(),
                id: '-1',
                id_ordine: orderRow.id_ordine,
                username: orderRow.username,
                n_riga: orderRow.n_riga,
                id_prd: orderRow.id_prd,
                qta: orderRow.qta,
                qta_validata: orderRow.qta_validata,
                note: orderRow.note
            }).subscribe(res => {
                if (res[0] == "KO") {
                    console.error("setOrderRows() error: " + res[1].toString());
                }
                else {
                    //console.log("Result: " + res[0]);
                    //console.log("OrderRow with ID " + res[1] + "successfully added!");
                    this.lastOrderRowId = res[1].toString();
                }
            });
        }
    }
    setOrderRowPromise(orderRow, isAdding) {
        if (!isAdding) {
            //SET
            return this.http.post(this.url, {
                request: 'setOrderRow',
                id_session: this.loginService.getSession(),
                id: orderRow.id,
                id_ordine: orderRow.id_ordine,
                username: orderRow.username,
                motivazione: orderRow.motivazione,
                n_riga: orderRow.n_riga,
                id_prd: orderRow.id_prd,
                qta: orderRow.qta,
                qta_validata: orderRow.qta_validata,
                qta_ricevuta: orderRow.qta_ricevuta,
                note: orderRow.note
            });
        }
        else {
            //ADD
            return this.http.post(this.url, {
                request: 'setOrderRow',
                id_session: this.loginService.getSession(),
                id: '-1',
                id_ordine: orderRow.id_ordine,
                username: orderRow.username,
                n_riga: orderRow.n_riga,
                id_prd: orderRow.id_prd,
                qta: orderRow.qta,
                motivazione: orderRow.motivazione,
                qta_validata: orderRow.qta_validata,
                qta_ricevuta: orderRow.qta_ricevuta,
                note: orderRow.note
            });
        }
    }
    rmOrderRow(id) {
        this.http.post(this.url, {
            request: 'rmOrderRow',
            id_session: this.loginService.getSession(),
            id: id
        }).subscribe(res => {
            if (res[0] == "KO") {
                console.error("setOrderRows() error: " + res[1].toString());
            }
            else {
                //console.log("Result: " + res[0]);
                //console.log("OrderRow with ID " + res[1] + "successfully removed!");
                this.lastOrderRowId = res[1].toString();
            }
        });
    }
    /**
     *
     * ORDER STATUS MANAGEMENT
     *
     */
    getOrderStatusPromise(id_order) {
        let request = 'getOrderStatus';
        let id_session = localStorage.getItem('id_session');
        let path = this.url + '?request=' + request + '&id_session=' + id_session + '&id_order=' + id_order;
        return this.http.get(path, {
            responseType: "json"
        });
    }
    setOrderStatusPromise(orderStatus) {
        //console.log("Setting order status for order " + orderStatus.id_order);
        return this.http.post(this.url, {
            request: 'setOrderStatus',
            id_session: localStorage.getItem('id_session'),
            username: orderStatus.username,
            id_order: orderStatus.id_order,
            d_status: orderStatus.d_status,
            status: orderStatus.status,
            note: orderStatus.note
        });
    }
    /**
     *
     * ORDER PDF MANAGEMENT
     *
     */
    getOrderPdfPromise(id_order) {
        let request = 'getOrderPDF';
        let id_session = localStorage.getItem('id_session');
        let path = this.url + '?request=' + request + '&id_session=' + id_session + '&id_order=' + id_order;
        //console.log(path)
        return this.http.get(path, {
            responseType: "json"
        });
    }
    /**
     *
     * GLOBAL ORDERS RETRIEVAL
     *
     */
    getOrdersGlobally() {
        let year = new Date().getFullYear().toString();
        this.listOrdersPromise(year).subscribe(res => {
            if (res[0] == "OK") {
                //console.log(res[1]);
                src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalOrders = res[1];
            }
            else {
                console.error("Error retrieving global orders!");
            }
        });
    }
    /**
     *
     * ORDER RESUME XLS
     *
     */
    getOrderResumePromise(startDate, endDate) {
        let request = 'getOrderResume';
        let id_session = localStorage.getItem('id_session');
        let d_inizio = startDate;
        let d_fine = endDate;
        let path = this.url + '?request=' + request + '&id_session=' + id_session + '&d_inizio=' + d_inizio + '&d_fine=' + d_fine;
        console.log(path);
        return this.http.get(path, {
            responseType: "json"
        });
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
OrdersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8686:
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersComponent": () => (/* binding */ OrdersComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ag-grid-angular */ 9771);
/* harmony import */ var ag_grid_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-community */ 6577);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/grid-configs */ 6980);
/* harmony import */ var _add_order_dialog_add_order_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-order-dialog/add-order-dialog.component */ 2974);
/* harmony import */ var _datepicker_products_dialog_datepicker_products_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datepicker-products-dialog/datepicker-products-dialog.component */ 5825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../users.service */ 474);
/* harmony import */ var _pharma_registry_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pharma-registry.service */ 955);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _orderable_period_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../orderable-period.service */ 5257);
/* harmony import */ var _forecast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../forecast.service */ 4472);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../snackbar.service */ 9518);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
























function OrdersComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OrdersComponent_div_0_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.openAddOrderDialog(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "playlist_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, "Add order"));
} }
function OrdersComponent_div_0_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OrdersComponent_div_0_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r5.openAddOrderDialog(true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "playlist_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, "Add extra order"));
} }
function OrdersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "nav", 1)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, OrdersComponent_div_0_button_5_Template, 4, 3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, OrdersComponent_div_0_button_6_Template, 4, 3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "grid_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OrdersComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r7.listOrders(ctx_r7.year, ctx_r7.month)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function OrdersComponent_div_0_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r9.year = $event); })("change", function OrdersComponent_div_0_Template_input_change_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r10.listOrders(ctx_r10.year, ctx_r10.month)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function OrdersComponent_div_0_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r11.month = $event); })("change", function OrdersComponent_div_0_Template_input_change_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r12.listOrders(ctx_r12.year, ctx_r12.month)); })("keyup", function OrdersComponent_div_0_Template_input_keyup_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r13.checkMonth()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "ag-grid-angular", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("columnResized", function OrdersComponent_div_0_Template_ag_grid_angular_columnResized_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r14.saveColumnState()); })("columnVisible", function OrdersComponent_div_0_Template_ag_grid_angular_columnVisible_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r15.saveColumnState()); })("columnPivotChanged", function OrdersComponent_div_0_Template_ag_grid_angular_columnPivotChanged_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r16.saveColumnState()); })("columnRowGroupChanged", function OrdersComponent_div_0_Template_ag_grid_angular_columnRowGroupChanged_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r17.saveColumnState()); })("columnValueChanged", function OrdersComponent_div_0_Template_ag_grid_angular_columnValueChanged_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r18.saveColumnState()); })("columnMoved", function OrdersComponent_div_0_Template_ag_grid_angular_columnMoved_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r19.saveColumnState()); })("columnPinned", function OrdersComponent_div_0_Template_ag_grid_angular_columnPinned_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r20.saveColumnState()); })("gridReady", function OrdersComponent_div_0_Template_ag_grid_angular_gridReady_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r21.onGridReady($event)); })("firstDataRendered", function OrdersComponent_div_0_Template_ag_grid_angular_firstDataRendered_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r22.onFirstDataRendered($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 19, "Orders"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r0.loading && !ctx_r0.isDateLocked || ctx_r0.loginService.getUserCode() == "220");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isDateLocked && ctx_r0.loginService.getUserCode() != "220");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 21, "Orders resume"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 23, "Refresh"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](17, 25, "Reference year"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 27, "Reference year"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r0.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 29, "Reference month"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](24, 31, "Reference month"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r0.month);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rowData", ctx_r0.orderGridRowData)("columnDefs", ctx_r0.ordersGridConfig)("defaultColDef", ctx_r0.defaultColDef)("alwaysShowHorizontalScroll", true)("gridOptions", ctx_r0.gridOptions)("localeText", ctx_r0.localeText)("getRowId", ctx_r0.getRowId)("animateRows", true);
} }
class OrdersComponent {
    //loading animation
    //loadingCellRenderer: LoadingCellRendererComponent;
    //loadingCellRendererParams: ILoadingCellRendererParams;
    constructor(loginService, ordersService, usersService, pharmaRegistryService, dialog, router, orderablePeriodService, forecastService, snackbarService) {
        this.loginService = loginService;
        this.ordersService = ordersService;
        this.usersService = usersService;
        this.pharmaRegistryService = pharmaRegistryService;
        this.router = router;
        this.orderablePeriodService = orderablePeriodService;
        this.forecastService = forecastService;
        this.snackbarService = snackbarService;
        this.order = {
            id: "",
            anno: 0,
            mese: 0,
            username: "",
            d_ordine: "",
            n_ordine: 0,
            b_urgente: false,
            b_extra: false,
            b_validato: false,
            d_validato: "",
            note: "",
            status: "",
            d_consegna_prevista: "",
            n_ddt: "",
            d_ddt: "",
            note_consegna: "",
            b_prestito: false,
            id_ordine_prestito: "",
            username_prestito_a: "",
            username_prestito_da: ""
        };
        this.orders = [];
        this.orderGridRowData = [];
        this.orderRows = [];
        this.users = [];
        this.products = [];
        this.forecasts = [];
        this.orderStatusArr = [];
        this.day = parseInt(new Date().toLocaleString('it-IT').split(",", 2)[0].split("/", 2)[0]);
        this.year = new Date().getFullYear().toString();
        this.month = (new Date().getMonth() + 1).toString();
        this.defaultColDef = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__.defaultColDef;
        //spinner boolean
        this.loading = true;
        this.visibleIndex = 0;
        //public domLayout: DomLayoutType = 'autoHeight';
        this.getRowId = (params) => {
            return params.data.id;
        };
        this.localeText = (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.currentLanguage == 'it' ? src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__.AG_GRID_LOCALE_IT : src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__.AG_GRID_LOCALE_EN);
        this.onGridReady = (params) => {
            this.api = params.api;
            this.columnApi = params.columnApi;
            //console.log(this.columnApi);
            this.listForecasts(this.year);
            this.listProducts();
            this.autoSizeColumns(false);
        };
        this.onFirstDataRendered = (event) => {
            this.retrieveColumnState();
        };
        this.dialog = dialog;
        this.loading = true;
        this.loginService.getCurrentUserSync();
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalUsers.length == 0) {
            //get users and populate globalUsers
            this.usersService.getUsersGlobally();
        }
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalProducts.length == 0) {
            this.pharmaRegistryService.getProductsGlobally();
        }
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalForecasts.length == 0) {
            this.forecastService.getForecastsGlobally(this.year);
        }
        //gridOptions
        this.gridOptions = {
            onCellClicked: (event) => {
                console.log(event.column.getColId() == "d_ddt" && loginService.getUserCode() == "210" && event.data.status == "ricevuto");
                if (!event.node.data.isRowLocked) {
                    if (event.column.getColId() == "d_ordine") {
                        this.openEditDateDialog(event);
                    }
                    if (event.column.getColId() == "d_validato" && loginService.getUserCode() == "220") {
                        this.openEditDateDialog(event);
                    }
                }
                if (event.column.getColId() == "d_ddt" && loginService.getUserCode() == "210" && event.data.status == "ricevuto") {
                    console.log(event.column.getColId() == "d_ddt" && loginService.getUserCode() == "210" && event.data.status == "ricevuto");
                    this.openEditDateDialog(event);
                }
            },
            onCellValueChanged: (event) => {
                console.log("Changed from " + event.oldValue + " to " + event.newValue);
                //if row is not locked and an update is received, perform update
                //TODO: se imposto una data di validazione, deve essere MAGGIORE o UGUALE alla data dell'ordine
                console.log("isRowLocked: " + event.node.data.isRowLocked);
                console.log("isDateLocked: " + this.isDateLocked);
                if (!event.node.data.isRowLocked && !this.isDateLocked) {
                    console.log("the order was not locked, so I modify it!");
                    this.order.id = event.data.id;
                    this.order.anno = event.data.anno;
                    this.order.username = event.data.username;
                    this.order.d_ordine = event.data.d_ordine;
                    this.order.n_ordine = event.data.n_ordine;
                    this.order.b_urgente = event.data.b_urgente;
                    this.order.b_extra = event.data.b_extra;
                    this.order.b_validato = event.data.b_validato;
                    this.order.d_validato = event.data.d_validato;
                    this.order.n_ddt = event.data.n_ddt;
                    this.order.d_ddt = event.data.d_ddt;
                    this.order.d_consegna_prevista = event.data.d_consegna_prevista;
                    this.order.note = event.data.note;
                    this.order.note_consegna = event.data.note_consegna;
                    //not adding but editing
                    let isAdding = false;
                    let orderStatus = {
                        id: "0",
                        username: localStorage.getItem('sangue_username'),
                        id_order: event.data.id,
                        d_status: this.getFormattedDate(new Date()),
                        status: event.column.getColId() == 'd_validato' || event.column.getColId() == 'b_validato' ? "confermato" : "inviato",
                        note: event.column.getColId() == 'd_validato' || event.column.getColId() == 'b_validato' ? "confermato da " + localStorage.getItem('sangue_username') : "inviato",
                        b_sto: false
                    };
                    this.setOrder(this.order, orderStatus, isAdding);
                    //this.api.setFocusedCell(event.rowIndex, event.column.getColId(), "top");
                }
            }
        };
        setTimeout(() => {
            console.log("refreshing...");
            this.periodicRefresh();
        }, 60000);
    }
    periodicRefresh() {
        setInterval(() => {
            console.log("refreshing...");
            this.listOrders(this.year, this.month);
        }, 60000);
    }
    autoSizeColumns(skipHeader) {
        const allColumnIds = [];
        this.columnApi.getColumns().forEach((column) => {
            allColumnIds.push(column.getId());
        });
        this.columnApi.autoSizeColumns(allColumnIds, skipHeader);
    }
    retrieveColumnState() {
        const localColumnState = localStorage.getItem("ordersColumnState");
        //console.log("Column state:");
        //console.log(localColumnState);
        if (localColumnState != null) {
            console.log(JSON.parse(localColumnState));
            this.columnApi.applyColumnState({ state: JSON.parse(localColumnState), applyOrder: true });
        }
    }
    saveColumnState() {
        const allState = this.columnApi.getColumnState();
        const localColumnState = allState.map((state) => ({
            colId: state.colId,
            sort: state.sort,
            sortIndex: state.sortIndex,
            aggFunc: state.aggFunc,
            flex: state.flex,
            pinned: state.pinned,
            pivot: state.pivot,
            pivotIndex: state.pivotIndex,
            rowGroup: state.rowGroup,
            rowGroupIndex: state.rowGroupIndex,
            width: state.width
        }));
        localStorage.setItem("ordersColumnState", JSON.stringify(localColumnState));
    }
    ngOnInit() {
        this.loginService.checkPromise().subscribe(res => {
            if (res[0] == "KO") {
                localStorage.removeItem("id_session");
                this.router.navigate(['login']);
            }
        });
        this.getAllData();
    }
    logAPI() {
        console.log(this.api);
    }
    checkMonth() {
        if (parseInt(this.month) < 1) {
            this.month = "1";
        }
        if (parseInt(this.month) > 12) {
            this.month = "12";
        }
    }
    /*
    
          ORDERS ===========================
  
    */
    listOrders(year, month) {
        this.loading = true;
        this.ordersService.listOrdersPromise(year, month).subscribe(res => {
            if (res[0] != "KO") {
                this.orders = res[1];
                this.listUsersAndSetLock('210');
                this.getAllOrderStatusRec(this.orders, 0);
            }
            else {
                this.loginService.logoutPromise().subscribe(res => {
                    this.router.navigate([""]);
                });
            }
        });
    }
    listOrdersAndForecasts(year, month) {
        this.listOrders(year, month);
        this.listForecasts(year);
    }
    getFullUsernameById(id) {
        for (var i = 0; i < this.users.length; ++i) {
            if (this.users[i].username == id) {
                return this.users[i].client;
            }
        }
        return "";
    }
    addOrderAndOrderRows(newOrder, newOrderRows) {
        this.ordersService.setOrderPromise(newOrder, true).subscribe(res => {
            if (res[0] == "OK") {
                newOrder.id = res[1][0];
                newOrder.n_ordine = res[1][1];
                //set order status
                let orderStatus = {
                    id: "0",
                    username: localStorage.getItem('sangue_username'),
                    id_order: newOrder.id,
                    d_status: newOrder.d_ordine,
                    status: newOrder.b_validato ? "confermato" : "inviato",
                    note: "ordine appena creato da " + localStorage.getItem('sangue_username'),
                    b_sto: false
                };
                //set orderId and username for all orderRows before submitting
                for (var i = 0; i < newOrderRows.length; ++i) {
                    newOrderRows[i].id_ordine = res[1][0];
                    newOrderRows[i].username = newOrder.username;
                }
                //save status on db and locally
                this.setOrderStatus(orderStatus);
                this.orderStatusArr.push(orderStatus);
                //then save all orderRows on db
                this.setOrderRowRec(newOrderRows, 0, newOrder, orderStatus);
                //update grid -> moved at the end of setOrderRowRec
                //this.setOrderLocally(newOrder, orderStatus, true);
            }
        });
    }
    setOrderRowRec(newOrderRows, index, newOrder, orderStatus) {
        if (index >= newOrderRows.length) {
            //console.log("Exiting setOrderRowRec()");
            //update grid
            this.setOrderLocally(newOrder, orderStatus, true);
            //this.snackbarService.onCreate();
            return;
        }
        else {
            this.ordersService.setOrderRowPromise(newOrderRows[index], true).subscribe(res => {
                if (res[0] == "OK") {
                    //console.log("You saved the following orderRow:");
                    //console.log(newOrderRows[index]);
                    this.setOrderRowRec(newOrderRows, index + 1, newOrder, orderStatus);
                }
                else {
                    console.error("Error saving orderRow!");
                }
            });
        }
    }
    validateOrderRowsRec(orderRows, index) {
        if (index >= orderRows.length) {
            //console.log("Exiting validateOrderRowsRec()");
            this.snackbarService.onValidate();
            return;
        }
        else {
            if (orderRows[index].qta_validata == 0) {
                orderRows[index].qta_validata = orderRows[index].qta;
            }
            this.ordersService.setOrderRowPromise(orderRows[index], false).subscribe(res => {
                if (res[0] == "OK") {
                    this.validateOrderRowsRec(orderRows, index + 1);
                }
                else {
                    console.error("Error validating orderRow!");
                }
            });
        }
    }
    confirmQtaRicevutaOrderRowsRec(orderRows, index) {
        if (index >= orderRows.length) {
            this.snackbarService.onUpdate();
            return;
        }
        else {
            if (orderRows[index].qta_ricevuta == -1) {
                orderRows[index].qta_ricevuta == orderRows[index].qta_validata;
            }
            this.ordersService.setOrderRowPromise(orderRows[index], false).subscribe(res => {
                if (res[0] == "OK") {
                    this.confirmQtaRicevutaOrderRowsRec(orderRows, index + 1);
                }
                else {
                    console.error("Error confirming received quantity on orderRow!");
                }
            });
        }
    }
    rmOrderAndOrderRows(orderId, orderRows) {
        this.ordersService.rmOrderPromise(orderId).subscribe(res => {
            if (res[0] == "OK") {
                this.rmOrderLocally(orderId);
                for (var i = 0; i < orderRows.length; ++i) {
                    this.rmOrderRow(orderRows[i].id);
                }
            }
        });
    }
    rmOrder(orderId) {
        this.ordersService.rmOrderPromise(orderId).subscribe(res => {
            if (res[0] == "OK") {
                this.rmOrderLocally(orderId);
            }
            else {
                console.error("Error remiving order with ID: " + orderId);
            }
        });
    }
    getOrderGridRowDataById(id) {
        for (var i = 0; i < this.orderGridRowData.length; ++i) {
            if (this.orderGridRowData[i].id == id) {
                return this.orderGridRowData[i];
            }
        }
        console.error("ID " + id + " not found!");
        return null;
    }
    rmOrderLocally(id) {
        let visible = 0;
        for (let i = 0; i < this.orders.length; ++i) {
            if (id == this.orders[i].id) {
                this.orders.splice(i, 1);
                if (this.orders.length == 0) {
                    //no-op
                }
                else {
                    //if it was the last index, make the current last index visible
                    if (i == this.orders.length) {
                        visible = this.orders.length - 1;
                    }
                    //if it was not the last index, make the current i index visible
                    else {
                        visible = i;
                    }
                }
                //this.createOrderGridRowData();
                //this.updateGrid();
                this.removeRow(this.getOrderGridRowDataById(id));
                //this.api.ensureIndexVisible(visible);
                this.snackbarService.onDelete();
                return;
            }
        }
        console.error("Order ID " + id + " not found: order not deleted!");
    }
    removeRow(order) {
        const toBeRemoved = [];
        const rowNodes = [];
        this.api.forEachNodeAfterFilterAndSort(function (rowNode) {
            if (rowNode.data.id != order.id) {
                return;
            }
            const data = rowNode.data;
            data.anno = order.anno;
            data.username = order.username;
            data.full_username = order.full_username;
            data.d_ordine = order.d_ordine;
            data.n_ordine = order.n_ordine;
            data.b_urgente = order.b_urgente;
            data.b_extra = order.b_extra;
            data.b_validato = order.b_validato;
            data.b_to_supplier = order.b_to_supplier;
            data.d_validato = order.d_validato;
            data.status = order.status;
            data.note = order.note;
            data.n_ddt = order.n_ddt;
            data.d_ddt = order.d_ddt;
            data.d_consegna_prevista = order.d_consegna_prevista;
            data.note_consegna = order.note_consegna;
            data.isRowLocked = order.isRowLocked;
            toBeRemoved.push(data);
            rowNodes.push(rowNode);
        });
        const res = this.api.applyTransaction({ remove: toBeRemoved });
        //this.api.redrawRows(rowNodes);
        console.log(res);
    }
    rmOrderRow(id) {
        this.ordersService.rmOrderRow(id);
    }
    setOrder(order, orderStatus, isAdding) {
        console.log("Order:");
        console.log(order);
        this.ordersService.setOrderStatusPromise(orderStatus).subscribe(res => {
            if (res[0] == "KO") {
                console.error("Error setting order status for order " + order.id);
            }
            else {
                order.status = orderStatus.status;
                this.ordersService.setOrderPromise(order, isAdding).subscribe(res2 => {
                    if (res2 == "KO") {
                        console.error("Error setting order with id " + order.id);
                    }
                    else {
                        if (isAdding) {
                            order.n_ordine = res2[1][1];
                        }
                        this.setOrderLocally(order, orderStatus, isAdding);
                    }
                });
            }
        });
    }
    setOrderLocally(order, orderStatus, isAdding) {
        if (!isAdding) {
            for (let i = 0; i < this.orderGridRowData.length; ++i) {
                if (order.id == this.orderGridRowData[i].id) {
                    //questa parte è inutile...
                    /*
                    this.orders[i].anno = order.anno;
                    this.orders[i].username = order.username;
                    this.orders[i].d_ordine = order.d_ordine;
                    this.orders[i].b_urgente = order.b_urgente;
                    this.orders[i].b_extra = order.b_extra;
                    this.orders[i].b_validato = order.b_validato;
                    this.orders[i].d_validato = order.d_validato;
                    this.orders[i].note = order.note;
                    this.orders[i].n_ddt = order.n_ddt;
                    this.orders[i].d_ddt = order.d_ddt;
                    this.orders[i].d_consegna_prevista = order.d_consegna_prevista;
                    this.orders[i].note_consegna = order.note_consegna;
                    this.orderStatusArr[i].status = orderStatus.status;
                    */
                    let isLockedCondition;
                    if (this.loginService.getUserCode() == "210") {
                        isLockedCondition = orderStatus.status != "inviato";
                    }
                    if (this.loginService.getUserCode() == "220") {
                        isLockedCondition = !(orderStatus.status == "inviato" || orderStatus.status == "confermato");
                    }
                    console.log("i: " + i);
                    console.log(this.orderGridRowData[i]);
                    this.orderGridRowData[i].id = order.id;
                    this.orderGridRowData[i].anno = order.anno;
                    this.orderGridRowData[i].username = order.username;
                    this.orderGridRowData[i].full_username = this.getFullUsernameById(order.username); //per permettere di filtrare sullo username (client)
                    this.orderGridRowData[i].d_ordine = order.d_ordine;
                    this.orderGridRowData[i].n_ordine = order.n_ordine;
                    this.orderGridRowData[i].b_urgente = order.b_urgente;
                    this.orderGridRowData[i].b_extra = order.b_extra;
                    this.orderGridRowData[i].b_validato = order.b_validato;
                    this.orderGridRowData[i].b_to_supplier = (orderStatus.status == "inviato al fornitore");
                    this.orderGridRowData[i].d_validato = order.d_validato;
                    this.orderGridRowData[i].status = orderStatus.status;
                    this.orderGridRowData[i].note = order.note;
                    this.orderGridRowData[i].n_ddt = order.n_ddt;
                    this.orderGridRowData[i].d_ddt = order.d_ddt;
                    this.orderGridRowData[i].d_consegna_prevista = order.d_consegna_prevista;
                    this.orderGridRowData[i].note_consegna = order.note_consegna;
                    this.orderGridRowData[i].isRowLocked = isLockedCondition;
                    this.updateRow(this.orderGridRowData[i]);
                    //this.api.ensureIndexVisible(i);
                    this.snackbarService.onUpdate();
                    return;
                }
            }
        }
        else {
            //if the id is not present, append the new element
            let newOrderGridRowData = {
                id: order.id,
                anno: order.anno,
                username: order.username,
                full_username: this.getFullUsernameById(order.username),
                d_ordine: order.d_ordine,
                n_ordine: order.n_ordine,
                b_urgente: order.b_urgente,
                b_extra: order.b_extra,
                b_validato: order.b_validato,
                b_to_supplier: (orderStatus.status == "inviato al fornitore"),
                d_validato: order.d_validato,
                status: orderStatus.status,
                note: order.note,
                d_consegna_prevista: order.d_consegna_prevista,
                n_ddt: order.n_ddt,
                d_ddt: order.d_ddt,
                note_consegna: order.note_consegna,
                isRowLocked: false,
            };
            this.orderGridRowData.push(newOrderGridRowData);
            this.api.applyTransaction({
                add: [{
                        id: order.id,
                        anno: order.anno,
                        username: order.username,
                        full_username: this.getFullUsernameById(order.username),
                        d_ordine: order.d_ordine,
                        n_ordine: order.n_ordine,
                        b_urgente: order.b_urgente,
                        b_extra: order.b_extra,
                        b_validato: order.b_validato,
                        b_to_supplier: false,
                        d_validato: order.d_validato,
                        status: newOrderGridRowData.status,
                        note: order.note,
                        d_consegna_prevista: order.d_consegna_prevista,
                        n_ddt: order.n_ddt,
                        d_ddt: order.d_ddt,
                        note_consegna: order.note_consegna,
                        isRowLocked: false
                    }]
            });
            //this.api.ensureIndexVisible(this.orderGridRowData.length - 1);
            //this.createOrderGridRowData();
            this.snackbarService.onCreate();
        }
    }
    updateRow(order) {
        const toBeUpdated = [];
        const rowNodes = [];
        var isSentToSupplier = false;
        this.api.forEachNodeAfterFilterAndSort(function (rowNode) {
            if (rowNode.data.id != order.id) {
                return;
            }
            const data = rowNode.data;
            data.anno = order.anno;
            data.username = order.username;
            data.full_username = order.full_username;
            data.d_ordine = order.d_ordine;
            data.n_ordine = order.n_ordine;
            data.b_urgente = order.b_urgente;
            data.b_extra = order.b_extra;
            data.b_validato = order.b_validato;
            data.b_to_supplier = order.b_to_supplier;
            isSentToSupplier = order.b_to_supplier;
            data.d_validato = order.d_validato;
            data.status = order.status;
            data.note = order.note;
            data.n_ddt = order.n_ddt;
            data.d_ddt = order.d_ddt;
            data.d_consegna_prevista = order.d_consegna_prevista;
            data.note_consegna = order.note_consegna;
            data.isRowLocked = order.isRowLocked;
            toBeUpdated.push(data);
            rowNodes.push(rowNode);
        });
        const res = this.api.applyTransaction({ update: toBeUpdated });
        if (isSentToSupplier)
            this.api.redrawRows(rowNodes); //necessary to update checkboxes to "disabled"
        //console.log(res);
    }
    createOrderGridRowData() {
        this.orderGridRowData = [];
        for (var i = 0; i < this.orders.length; ++i) {
            if (this.orders[i].status != "prestito") {
                //if(this.orders[i].status != "prestito) {
                var lock = false;
                //lock cells ONLY if customer!
                if (this.loginService.getUserCode() == "210") {
                    //locked row conditions:
                    //if date is locked, everything is locked
                    if (this.isDateLocked == true) {
                        lock = true;
                    }
                    //if d_validato is set and != epoch, and if d_validato >= d_ordine the lock has been set
                    if ((this.orders[i].d_validato != "0000-00-00" && this.orders[i].d_validato != "1970-01-01" && this.orders[i].d_validato >= this.orders[i].d_ordine) ||
                        this.orderStatusArr[i].status == "inviato al fornitore") {
                        lock = true;
                    }
                }
                let toSupplierCondition = false;
                switch (this.orderStatusArr[i].status) {
                    case "inviato":
                        toSupplierCondition = false;
                        break;
                    case "confermato":
                        toSupplierCondition = false;
                        break;
                    default:
                        toSupplierCondition = true;
                        lock = true;
                        break;
                }
                var newOrderGridRowData = {
                    id: this.orders[i].id,
                    anno: this.orders[i].anno,
                    mese: this.orders[i].mese,
                    username: this.orders[i].username,
                    full_username: this.getFullUsernameById(this.orders[i].username),
                    d_ordine: this.orders[i].d_ordine,
                    n_ordine: this.orders[i].n_ordine,
                    b_urgente: this.orders[i].b_urgente,
                    b_extra: this.orders[i].b_extra,
                    b_validato: this.orders[i].b_validato,
                    b_to_supplier: toSupplierCondition,
                    d_validato: this.orders[i].d_validato,
                    status: this.orderStatusArr[i].status,
                    note: this.orders[i].note,
                    d_consegna_prevista: this.orders[i].d_consegna_prevista,
                    n_ddt: this.orders[i].n_ddt == "" ? "0" : this.orders[i].n_ddt,
                    d_ddt: this.orders[i].d_ddt == "" ? "0000-00-00" : this.orders[i].d_ddt,
                    note_consegna: this.orders[i].note_consegna,
                    isRowLocked: lock
                };
                this.orderGridRowData.push(newOrderGridRowData);
                this.visibleIndex = i;
            }
        }
        //console.log(this.orders);
        //console.log(this.orderGridRowData);
        this.loading = false;
        //console.log(this.columnApi.getColumnState());
        //this.getColState();
    }
    /*
    
          ORDERROWS ===========================
  
    */
    listOrderRows(orderId) {
        //console.log("listOrders: orderId: " + orderId);
        this.ordersService.listOrderRowsPromise(orderId).subscribe(res => {
            if (res[0] == "OK") {
                console.log(res[1][0]);
            }
        });
    }
    openAddOrderDialog(isExtra) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogConfig();
        dialogConfig.data = {
            users: this.users,
            products: this.products,
            forecasts: this.forecasts,
            gg_min: this.gg_min,
            gg_max: this.gg_max,
            isExtra: isExtra,
            year: this.year,
            month: this.month
        };
        dialogConfig.width = "95%";
        dialogConfig.maxHeight = "500px";
        this.dialogRef = this.dialog.open(_add_order_dialog_add_order_dialog_component__WEBPACK_IMPORTED_MODULE_3__.AddOrderDialogComponent, dialogConfig);
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined && result.isSubmitted) {
                let newOrder = result.newOrder;
                if (this.loginService.getUserCode() == "210") {
                    newOrder.username = this.loginService.getUsername();
                }
                this.addOrderAndOrderRows(result.newOrder, result.newOrderRows);
            }
        });
    }
    openEditDateDialog(event) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        console.log(this.gg_min);
        console.log(this.gg_max);
        switch (event.colDef.field) {
            case "d_ordine":
                dialogConfig.data = {
                    date: event.data.d_ordine,
                    isOrderDate: true,
                    gg_min: this.gg_min,
                    gg_max: this.gg_max
                };
                break;
            case "d_validato":
                dialogConfig.data = {
                    date: event.data.d_validato,
                    isValidationDate: true
                };
                break;
            case "d_ddt":
                dialogConfig.data = {
                    date: event.data.d_ddt,
                    isDDTDate: true
                };
                break;
        }
        this.dialogRef = this.dialog.open(_datepicker_products_dialog_datepicker_products_dialog_component__WEBPACK_IMPORTED_MODULE_4__.DatepickerProductsDialogComponent, //TODO: generic datepicker dialog
        dialogConfig);
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined && result.isSubmitted) {
                this.order.id = event.data.id;
                this.order.anno = event.data.anno;
                this.order.username = event.data.username;
                this.order.d_ordine = event.data.d_ordine;
                this.order.n_ordine = event.data.n_ordine;
                this.order.b_urgente = event.data.b_urgente;
                this.order.b_extra = event.data.b_extra;
                this.order.b_validato = event.data.b_validato;
                this.order.d_validato = event.data.d_validato;
                this.order.note = event.data.note;
                this.order.n_ddt = event.data.n_ddt;
                this.order.d_ddt = event.data.d_ddt;
                this.order.d_consegna_prevista = event.data.d_consegna_prevista;
                this.order.note_consegna = event.data.note_consegna;
                let orderStatus = {
                    id: "0",
                    username: localStorage.getItem('sangue_username'),
                    id_order: event.data.id,
                    d_status: this.getFormattedDate(new Date()),
                    status: "",
                    note: "",
                    b_sto: false
                };
                //when setting order date, just set order date
                if (result.isOrderDate) {
                    this.order.d_ordine = result.date;
                    orderStatus.status = event.data.status; //keep existing status
                    orderStatus.note = "Data ordine modificata da " + localStorage.getItem('sangue_username');
                    //console.log("setting: " + this.order.d_ordine);
                    this.setOrder(this.order, orderStatus, false);
                }
                //when setting a validation date, automatically validate order
                else if (result.isValidationDate) {
                    this.order.d_validato = result.date;
                    this.order.b_validato = true;
                    orderStatus.status = "confermato"; //confirm status
                    orderStatus.note = "Ordine confermato da " + localStorage.getItem('sangue_username');
                    //console.log("setting: " + this.order.d_validato);
                    this.setOrder(this.order, orderStatus, false);
                }
                else if (result.isDDTDate) {
                    this.order.d_ddt = result.date;
                    orderStatus.status = "inviato"; //confirm status
                    orderStatus.note = "Data DDT impostata da " + localStorage.getItem('sangue_username');
                    //console.log("setting: " + this.order.d_ddt);
                    this.setOrder(this.order, orderStatus, false);
                }
            }
        });
    }
    /*
    
          USERS ===========================
  
    */
    listUsersAndSetLock(userlevel) {
        this.usersService.listUsersPromise(userlevel).subscribe(res => {
            if (res[0] == "KO") {
                console.error("Error retrieving users!");
                this.router.navigate(['login']);
            }
            else {
                this.users = res[1];
                this.setLock();
            }
        });
    }
    /*
    
          PRODUCTS ===========================
  
    */
    listProducts() {
        this.pharmaRegistryService.listProductsPromise().subscribe(res => {
            if (res[0] == "KO") {
                this.router.navigate(['login']);
            }
            else {
                this.products = res[1];
            }
        });
    }
    /*
    
          GRID UPDATES ===========================
  
    */
    updateGrid(visibleIndex) {
        this.api.setRowData(this.orderGridRowData);
        if (visibleIndex !== undefined) {
            this.api.ensureIndexVisible(visibleIndex, "top");
        }
    }
    makeRowVisible(index, position) {
        console.log("index: " + index);
        this.api.ensureIndexVisible(index, position);
    }
    /*
  
          ORDER PERIOD ===========================
  
    */
    setLock() {
        this.orderablePeriodService.getOrderPeriodPromise().subscribe(res => {
            if (res[0] == "OK") {
                this.gg_min = parseInt(res[1].gg_min);
                this.gg_max = parseInt(res[1].gg_max);
                //lock cells according to the date
                if (this.gg_min < this.day && this.day > this.gg_max) {
                    this.isDateLocked = true;
                }
                else {
                    this.isDateLocked = false;
                }
                //now set grid config
                if (this.loginService.getUserCode() == '210') {
                    this.isDateLocked ? this.ordersGridConfig = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__.gridConfigOrders210Locked : this.ordersGridConfig = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__.gridConfigOrders210;
                }
                if (this.loginService.getUserCode() == '220') {
                    this.isDateLocked ? this.ordersGridConfig = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__.gridConfigOrders220Locked : this.ordersGridConfig = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_2__.gridConfigOrders220;
                }
                this.createOrderGridRowData();
            }
            else {
                console.error("Error in getOrderPeriodPromise()");
            }
        });
    }
    /*
  
          FORECAST ===========================
  
    */
    listForecasts(year) {
        this.forecastService.listForecastsPromise(year).subscribe(res => {
            //console.log(res);
            if (res[0] == "OK") {
                this.forecasts = res[1];
                src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.globalForecasts = res[1];
                //this.forecastService.getForecastsGlobally(year);
                //console.log(this.forecasts);
            }
            else {
                console.error("Error retrieving forecasts!");
            }
        });
    }
    /**
     *
     * ORDER STATUS MANAGEMENT
     *
     */
    getOrderStatus(orderId) {
        this.ordersService.getOrderStatusPromise(orderId).subscribe(res => {
            if (res[0] == "OK") {
                console.log("WS response:");
                console.log(res);
            }
            else {
                console.error("Error retrieving orderStatus for order " + orderId);
                console.error(res);
            }
        });
    }
    setOrderStatus(orderStatus) {
        this.ordersService.setOrderStatusPromise(orderStatus).subscribe(res => {
            if (res[0] == "OK") {
                console.log("set:");
                console.log(orderStatus);
                console.log(res);
            }
            else {
                console.error("Error setting status for order with id " + orderStatus.id_order);
            }
        });
    }
    //big function to be called at the very beginning, to retrieve everything we need
    getAllData() {
        //listOrders, then
        this.ordersService.listOrdersPromise(this.year, this.month).subscribe(res => {
            if (res[0] == "OK") {
                this.orders = res[1];
                this.getAllOrderStatusRec(this.orders, 0);
            }
            else {
                console.error("Error retrieving orders!");
            }
        });
        //getAllOrderStatus, then
        //setLock
    }
    getAllOrderStatusRec(orders, i) {
        //uscita
        if (i >= orders.length) {
            this.listUsersAndSetLock('210');
            return;
        }
        this.ordersService.getOrderStatusPromise(orders[i].id).subscribe(res => {
            if (res[0] == "OK") {
                //console.log(res[1][res[1].length - 1]);
                //check if all orders have a status
                if (res[1][res[1].length - 1] === undefined) {
                    let orderStatus = {
                        id: "0",
                        username: localStorage.getItem('sangue_username'),
                        id_order: orders[i].id,
                        d_status: orders[i].d_ordine,
                        status: "inviato",
                        note: "",
                        b_sto: 0
                    };
                    this.orderStatusArr.push(orderStatus);
                }
                else {
                    this.orderStatusArr.push(res[1][res[1].length - 1]);
                }
                this.getAllOrderStatusRec(orders, ++i);
            }
            else {
                console.error("Error retrieving orderStatus for order " + orders[i].id);
            }
        });
    }
    getStatusByOrderId(orderId) {
        for (var i = 0; i < this.orderStatusArr.length; ++i) {
            if (this.orderStatusArr[i].id_order == orderId) {
                return this.orderStatusArr[i].status;
            }
        }
        return "";
    }
    getFormattedDate(date) {
        let splitDate = date.toLocaleString('it-IT').split(",", 2)[0].split("/", 3);
        let day = splitDate[0];
        let month = splitDate[1];
        let year = splitDate[2];
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        return year + "-" + month + "-" + day;
    }
    getColState() {
        this.columnState = this.columnApi.getColumnState();
        //this.defaultColumnState = this.columnApi.getColumnState();
        console.log(this.columnState);
    }
    resetColState() {
        //console.log("resetColState");
        //console.log(this.defaultColumnState);
        this.columnApi.applyColumnState({ state: this.defaultColumnState });
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_6__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_7__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_pharma_registry_service__WEBPACK_IMPORTED_MODULE_8__.PharmaRegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_orderable_period_service__WEBPACK_IMPORTED_MODULE_9__.OrderablePeriodService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_forecast_service__WEBPACK_IMPORTED_MODULE_10__.ForecastService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_11__.SnackbarService)); };
OrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], viewQuery: function OrdersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__.AgGridAngular, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.agGrid = _t.first);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "second-nav"], ["mat-mini-fab", "", "color", "primary", 3, "matTooltip", "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "accent", 3, "matTooltip", "click", 4, "ngIf"], ["mat-mini-fab", "", "routerLink", "/orders/resume", 1, "resume", 2, "background-color", "#1D6F42", 3, "matTooltip"], [1, "material-icons"], ["mat-mini-fab", "", "color", "basic", 3, "matTooltip", "click"], [2, "margin", "5px"], ["matInput", "", "type", "number", 2, "width", "50px", 3, "placeholder", "ngModel", "ngModelChange", "change"], ["matInput", "", "type", "number", 2, "width", "50px", 3, "placeholder", "ngModel", "ngModelChange", "change", "keyup"], [1, "ag-theme-material", "ag-grid-table", 3, "rowData", "columnDefs", "defaultColDef", "alwaysShowHorizontalScroll", "gridOptions", "localeText", "getRowId", "animateRows", "columnResized", "columnVisible", "columnPivotChanged", "columnRowGroupChanged", "columnValueChanged", "columnMoved", "columnPinned", "gridReady", "firstDataRendered"], ["mat-mini-fab", "", "color", "primary", 3, "matTooltip", "click"], ["mat-mini-fab", "", "color", "accent", 3, "matTooltip", "click"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, OrdersComponent_div_0_Template, 26, 33, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "210" || ctx.loginService.getUserCode() == "220");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__.AgGridAngular, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 439:
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8699);


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 5, vars: 3, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " 404\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "Oops! We did not find what you were looking for"), "...\n");
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6579:
/*!**********************************************************************************************!*\
  !*** ./src/app/pharma-registry-active-checkbox/pharma-registry-active-checkbox.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PharmaRegistryActiveCheckboxComponent": () => (/* binding */ PharmaRegistryActiveCheckboxComponent)
/* harmony export */ });
/* harmony import */ var _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cell-checkbox/cell-checkbox.component */ 7145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _pharma_registry_pharma_registry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pharma-registry/pharma-registry.component */ 3362);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);





class PharmaRegistryActiveCheckboxComponent extends _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CellCheckboxComponent {
    constructor(pharmaRegistry, snackbar) {
        super(snackbar);
        this.pharmaRegistry = pharmaRegistry;
    }
    ngOnInit() {
    }
    toggleCheckbox(event) {
        this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
        //console.log("current checkbox value: " + this.currentValue);
        let newProduct = {
            id: this.data.id,
            cod: this.data.cod,
            des: this.data.des,
            unita: this.data.unita,
            confezionamento: this.data.confezionamento,
            multiplo_confezionamento: this.data.multiplo_confezionamento,
            multiplo_imballo: this.data.multiplo_imballo,
            attivo: this.currentValue,
            extra: this.data.extra,
            min_ord: this.data.min_ord,
            valido_da: this.data.valido_da,
            valido_a: this.data.valido_a,
            ord: this.data.ord
        };
        this.pharmaRegistry.setProduct(newProduct, false);
    }
}
PharmaRegistryActiveCheckboxComponent.ɵfac = function PharmaRegistryActiveCheckboxComponent_Factory(t) { return new (t || PharmaRegistryActiveCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_pharma_registry_pharma_registry_component__WEBPACK_IMPORTED_MODULE_1__.PharmaRegistryComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar)); };
PharmaRegistryActiveCheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PharmaRegistryActiveCheckboxComponent, selectors: [["app-pharma-registry-active-checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "checked", "change"]], template: function PharmaRegistryActiveCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PharmaRegistryActiveCheckboxComponent_Template_mat_checkbox_change_0_listener($event) { return ctx.toggleCheckbox($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.checked);
    } }, dependencies: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaGFybWEtcmVnaXN0cnktYWN0aXZlLWNoZWNrYm94LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1457:
/*!********************************************************************************************!*\
  !*** ./src/app/pharma-registry-extra-checkbox/pharma-registry-extra-checkbox.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PharmaRegistryExtraCheckboxComponent": () => (/* binding */ PharmaRegistryExtraCheckboxComponent)
/* harmony export */ });
/* harmony import */ var _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cell-checkbox/cell-checkbox.component */ 7145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _pharma_registry_pharma_registry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pharma-registry/pharma-registry.component */ 3362);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);





class PharmaRegistryExtraCheckboxComponent extends _cell_checkbox_cell_checkbox_component__WEBPACK_IMPORTED_MODULE_0__.CellCheckboxComponent {
    constructor(pharmaRegistry, snackbar) {
        super(snackbar);
        this.pharmaRegistry = pharmaRegistry;
    }
    ngOnInit() {
    }
    toggleCheckbox(event) {
        this.currentValue == 1 ? this.currentValue = 0 : this.currentValue = 1;
        //console.log("current checkbox value: " + this.currentValue);
        let newProduct = {
            id: this.data.id,
            cod: this.data.cod,
            des: this.data.des,
            unita: this.data.unita,
            confezionamento: this.data.confezionamento,
            multiplo_confezionamento: this.data.multiplo_confezionamento,
            multiplo_imballo: this.data.multiplo_imballo,
            attivo: this.data.attivo,
            extra: this.currentValue,
            min_ord: this.data.min_ord,
            valido_da: this.data.valido_da,
            valido_a: this.data.valido_a,
            ord: this.data.ord
        };
        this.pharmaRegistry.setProduct(newProduct, false);
    }
}
PharmaRegistryExtraCheckboxComponent.ɵfac = function PharmaRegistryExtraCheckboxComponent_Factory(t) { return new (t || PharmaRegistryExtraCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_pharma_registry_pharma_registry_component__WEBPACK_IMPORTED_MODULE_1__.PharmaRegistryComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar)); };
PharmaRegistryExtraCheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PharmaRegistryExtraCheckboxComponent, selectors: [["app-pharma-registry-extra-checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "checked", "change"]], template: function PharmaRegistryExtraCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PharmaRegistryExtraCheckboxComponent_Template_mat_checkbox_change_0_listener($event) { return ctx.toggleCheckbox($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.checked);
    } }, dependencies: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckbox], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaGFybWEtcmVnaXN0cnktZXh0cmEtY2hlY2tib3guY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 955:
/*!********************************************!*\
  !*** ./src/app/pharma-registry.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PharmaRegistryService": () => (/* binding */ PharmaRegistryService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class PharmaRegistryService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'anag.php';
        this.products = [];
    }
    getProducts() {
        let path = this.url + '?request=listProducts&id_session=' + localStorage.getItem('id_session');
        this.http.get(path, {
            responseType: "json"
        }).subscribe(res => {
            console.log(res);
            if (res[0] == "KO") {
                return null;
            }
            else {
                console.log(res[1]);
                this.products = res[1];
                return res[1];
            }
        });
        return [];
    }
    listProductsPromise() {
        let path = this.url + '?request=listProducts&id_session=' + localStorage.getItem('id_session');
        return this.http.get(path, {
            responseType: "json"
        });
    }
    getProductsGlobally() {
        this.listProductsPromise().subscribe(res => {
            if (res[0] == "OK") {
                src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalProducts = res[1];
                //console.log(environment.globalProducts);
            }
            else {
                console.error("Error retrieving users!");
            }
        });
    }
    setProduct(id, cod, des, unita, confezionamento, multiplo_confezionamento, multiplo_imballo, attivo, extra, min_ord, valido_da, valido_a, isAdding) {
        if (!isAdding && parseInt(id) < 1) {
            console.error("Invalid ID!");
            id = "";
            return;
        }
        if (id == "" || cod == "" || des == "") {
            console.error("Empty core parameters are invalid.");
            return;
        }
        this.http.post(this.url, {
            request: 'setProduct',
            id_session: localStorage.getItem('id_session'),
            id: id,
            cod: cod,
            des: des,
            unita: unita,
            confezionamento: confezionamento,
            multiplo_confezionamento: multiplo_confezionamento,
            multiplo_imballo: multiplo_imballo,
            attivo: attivo,
            extra: extra,
            min_ord: min_ord,
            valido_da: valido_da,
            valido_a: valido_a
        }).subscribe(res => {
            console.log("WS response: " + res);
            if (res[0] == "KO") {
                console.error(res[1].toString());
            }
            else {
                console.log("Result: " + res[0]);
                console.log("Product with ID " + res[1] + "successfully set!");
            }
        });
    }
    setProductPromise(product) {
        //product.id == -1 for ADDING
        return this.http.post(this.url, {
            request: 'setProduct',
            id_session: localStorage.getItem('id_session'),
            id: product.id,
            cod: product.cod,
            des: product.des,
            ord: product.ord,
            unita: product.unita,
            confezionamento: product.confezionamento,
            multiplo_confezionamento: product.multiplo_confezionamento,
            multiplo_imballo: product.multiplo_imballo,
            attivo: product.attivo,
            extra: product.extra,
            min_ord: product.min_ord,
            valido_da: product.valido_da,
            valido_a: product.valido_a
        });
    }
    addProduct(cod, des, unita, confezionamento, multiplo_confezionamento, multiplo_imballo, attivo, extra, min_ord, valido_da, valido_a) {
        let id = "-1";
        let isAdding = true;
        this.setProduct(id, cod, des, unita, confezionamento, multiplo_confezionamento, multiplo_imballo, attivo, extra, min_ord, valido_da, valido_a, isAdding);
    }
    rmProduct(id) {
        if (id == "" || parseInt(id) < 1) {
            console.error("Invalid ID!");
            return;
        }
        this.http.post(this.url, {
            request: 'rmProduct',
            id_session: localStorage.getItem('id_session'),
            id: id
        }).subscribe(res => {
            console.log("WS response: " + res);
            if (res[0] == "KO") {
                console.error(res[1].toString());
            }
            else {
                console.log("rmProduct result: " + res[0]);
                console.log("Removing product with ID " + res[1]);
                console.log("Product with ID " + res[1] + "successfully removed!");
            }
        });
    }
    rmProductPromise(id) {
        return this.http.post(this.url, {
            request: 'rmProduct',
            id_session: localStorage.getItem('id_session'),
            id: id
        });
    }
}
PharmaRegistryService.ɵfac = function PharmaRegistryService_Factory(t) { return new (t || PharmaRegistryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PharmaRegistryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PharmaRegistryService, factory: PharmaRegistryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3362:
/*!**************************************************************!*\
  !*** ./src/app/pharma-registry/pharma-registry.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PharmaRegistryComponent": () => (/* binding */ PharmaRegistryComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-product/add-product.component */ 6931);
/* harmony import */ var _are_you_sure_product_are_you_sure_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../are-you-sure-product/are-you-sure-product.component */ 8625);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ag-grid-angular */ 9771);
/* harmony import */ var _datepicker_products_dialog_datepicker_products_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datepicker-products-dialog/datepicker-products-dialog.component */ 5825);
/* harmony import */ var src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/grid-configs */ 6980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pharma_registry_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pharma-registry.service */ 955);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../snackbar.service */ 9518);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 8699);



















function PharmaRegistryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "nav", 1)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PharmaRegistryComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.openAddProductDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "playlist_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ag-grid-angular", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("columnResized", function PharmaRegistryComponent_div_0_Template_ag_grid_angular_columnResized_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.saveColumnState()); })("columnMoved", function PharmaRegistryComponent_div_0_Template_ag_grid_angular_columnMoved_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.saveColumnState()); })("columnVisible", function PharmaRegistryComponent_div_0_Template_ag_grid_angular_columnVisible_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.saveColumnState()); })("columnPivotChanged", function PharmaRegistryComponent_div_0_Template_ag_grid_angular_columnPivotChanged_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.saveColumnState()); })("columnRowGroupChanged", function PharmaRegistryComponent_div_0_Template_ag_grid_angular_columnRowGroupChanged_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.saveColumnState()); })("columnValueChanged", function PharmaRegistryComponent_div_0_Template_ag_grid_angular_columnValueChanged_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.saveColumnState()); })("columnPinned", function PharmaRegistryComponent_div_0_Template_ag_grid_angular_columnPinned_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.saveColumnState()); })("gridReady", function PharmaRegistryComponent_div_0_Template_ag_grid_angular_gridReady_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.onGridReady($event)); })("firstDataRendered", function PharmaRegistryComponent_div_0_Template_ag_grid_angular_firstDataRendered_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.onFirstDataRendered($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 10, "Pharmaceutical registry"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 12, "Add product"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("rowData", ctx_r0.products)("columnDefs", ctx_r0.pharmaRegistryGridConfig)("defaultColDef", ctx_r0.defaultColDef)("alwaysShowHorizontalScroll", true)("gridOptions", ctx_r0.gridOptions)("localeText", ctx_r0.localeText)("getRowId", ctx_r0.getRowId)("animateRows", true);
} }
class PharmaRegistryComponent {
    /*
    
      CONSTRUCTOR
  
    */
    constructor(loginService, http, dialog, router, pharmaRegistryService, snackbarService) {
        this.loginService = loginService;
        this.http = http;
        this.dialog = dialog;
        this.router = router;
        this.pharmaRegistryService = pharmaRegistryService;
        this.snackbarService = snackbarService;
        //auxiliary product
        this.product = {
            id: "",
            cod: "",
            des: "",
            ord: "",
            unita: 0,
            confezionamento: "",
            multiplo_confezionamento: 0,
            multiplo_imballo: 0,
            attivo: false,
            extra: false,
            min_ord: 0,
            valido_da: "",
            valido_a: ""
        };
        this.id = "";
        this.products = [];
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'anag.php';
        //sample param for dialog
        this.dialogData = "";
        this.isLoading = false;
        this.getRowId = (params) => {
            return params.data.id;
        };
        this.localeText = (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLanguage == 'it' ? src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_4__.AG_GRID_LOCALE_IT : src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_4__.AG_GRID_LOCALE_EN);
        this.onGridReady = (params) => {
            this.api = params.api;
            this.columnApi = params.columnApi;
            //this.api.setDomLayout('autoHeight');
        };
        this.onFirstDataRendered = (event) => {
            this.autoSizeColumns(false);
            this.retrieveColumnState();
        };
        //columnDef
        this.pharmaRegistryGridConfig = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_4__.pharmaRegistryGridConfig;
        this.loginService.getCurrentUserSync();
        //gridOptions
        this.gridOptions = {
            onCellClicked: (event) => {
                if (event.column.getColId() == "valido_a" || event.column.getColId() == "valido_da") {
                    this.openEditDateDialog(event);
                }
                if (event.column.getColId() == "action") {
                    this.selectedRow = this.api.getSelectedRows();
                }
            },
            onCellValueChanged: (event) => {
                this.product.id = event.data.id;
                this.product.cod = event.data.cod;
                this.product.des = event.data.des;
                this.product.ord = event.data.ord;
                this.product.unita = event.data.unita;
                this.product.confezionamento = event.data.confezionamento;
                this.product.multiplo_confezionamento = event.data.multiplo_confezionamento;
                this.product.multiplo_imballo = event.data.multiplo_imballo;
                this.product.attivo = event.data.attivo;
                this.product.extra = event.data.extra;
                this.product.min_ord = event.data.min_ord;
                //salvo le date in formato italiano sulle variabili locali
                this.product.valido_da = new Date(event.data.valido_da).toLocaleString('it-IT', { timeZone: 'UTC' }).substring(0, 10);
                this.product.valido_a = new Date(event.data.valido_a).toLocaleString('it-IT', { timeZone: 'UTC' }).substring(0, 10);
                this.setProduct(this.product, false); //edit product from grid
            },
            onRowDataUpdated: (event) => {
                //console.log(event);
            }
        };
        //defaultColDef
        this.defaultColDef = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_4__.defaultColDef;
        this.listProducts();
    }
    autoSizeColumns(skipHeader) {
        const allColumnIds = [];
        this.columnApi.getColumns().forEach((column) => {
            allColumnIds.push(column.getId());
        });
        this.columnApi.autoSizeColumns(allColumnIds, skipHeader);
    }
    retrieveColumnState() {
        let localColumnState = localStorage.getItem("pharmaRegistryColumnState");
        console.log("Column state:");
        console.log(localColumnState);
        if (localColumnState != null) {
            console.log(JSON.parse(localColumnState));
            this.columnApi.applyColumnState({ state: JSON.parse(localColumnState), applyOrder: true });
        }
    }
    saveColumnState() {
        const allState = this.columnApi.getColumnState();
        const localColumnState = allState.map((state) => ({
            colId: state.colId,
            sort: state.sort,
            sortIndex: state.sortIndex,
            aggFunc: state.aggFunc,
            flex: state.flex,
            pinned: state.pinned,
            pivot: state.pivot,
            pivotIndex: state.pivotIndex,
            rowGroup: state.rowGroup,
            rowGroupIndex: state.rowGroupIndex,
            width: state.width
        }));
        var i = 0;
        localColumnState.forEach((state) => {
            console.log(state.colId + ": " + state.sortIndex);
            state.sortIndex = ++i;
        });
        localColumnState.forEach((state) => {
            console.log(state.colId + ": " + state.sortIndex);
        });
        console.log(localColumnState);
        localStorage.setItem("pharmaRegistryColumnState", JSON.stringify(localColumnState));
    }
    ngOnInit() {
        this.loginService.checkPromise().subscribe(res => {
            if (res[0] == "KO") {
                localStorage.removeItem("id_session");
                localStorage.removeItem("sangue_username");
                this.loginService.logged = false;
                this.router.navigate(['login']);
            }
        });
        /*
            setTimeout(
              () => {
                this.api = this.agGrid.api;
              }, 300);
        */
    }
    setId(id) {
        this.id = id;
    }
    listProducts() {
        this.isLoading = true;
        this.pharmaRegistryService.listProductsPromise().subscribe(res => {
            if (res[0] == "OK") {
                this.products = res[1];
                this.isLoading = false;
            }
            else {
                console.error("Error retrieving products!");
            }
        });
    }
    logAPI() {
        console.log(this.api);
    }
    //if adding, product.id == -1
    setProduct(product, isAdding) {
        //console.log(product.id == "-1" ? "adding" : "setting");
        //console.log(product);
        this.pharmaRegistryService.setProductPromise(product).subscribe(res => {
            if (res[0] == "OK") {
                if (isAdding) {
                    console.log("aaaaaaa");
                    let newProduct = product;
                    newProduct.id = res[1];
                    this.addLocally(newProduct);
                    this.snackbarService.onCreate();
                }
                else {
                    this.setLocally(product);
                    this.snackbarService.onUpdate();
                }
            }
            else {
                console.error("Error setting product!");
            }
        });
    }
    addLocally(product) {
        this.products.push(product);
        this.api.applyTransaction({
            add: [{
                    id: product.id,
                    cod: product.cod,
                    des: product.des,
                    ord: product.ord,
                    unita: product.unita,
                    confezionamento: product.confezionamento,
                    multiplo_confezionamento: product.multiplo_confezionamento,
                    multiplo_imballo: product.multiplo_imballo,
                    attivo: product.attivo,
                    extra: product.extra,
                    min_ord: product.min_ord,
                    valido_da: product.valido_da,
                    valido_a: product.valido_a
                }]
        });
        /*
        this.agGrid.api.updateRowData({
          add: [{
            id: product.id,
            cod: product.cod,
            des: product.des,
            ord: product.ord,
            unita: product.unita,
            confezionamento: product.confezionamento,
            multiplo_confezionamento: product.multiplo_confezionamento,
            multiplo_imballo: product.multiplo_imballo,
            attivo: product.attivo,
            extra: product.extra,
            min_ord: product.min_ord,
            valido_da: product.valido_da,
            valido_a: product.valido_a
          }]
        });
        */
        //console.log(this.products);
        //console.log(this.products);
        //this.updateGrid();
        this.api.ensureIndexVisible(this.products.length - 1);
    }
    rmProduct(id) {
        this.pharmaRegistryService.rmProductPromise(id).subscribe(res => {
            if (res[0] == "OK") {
                this.rmLocally(res[1]);
                this.snackbarService.onDelete();
            }
            else {
                console.error("Error removing product with ID = " + id);
            }
        });
    }
    rmLocally(id) {
        let visible = 0;
        for (let i = 0; i < this.products.length; ++i) {
            if (id == this.products[i].id) {
                this.products.splice(i, 1);
                if (this.products.length == 0) {
                    //no-op
                }
                else {
                    //if it was the last index, make the current last index visible
                    if (i == this.products.length) {
                        visible = this.products.length - 1;
                    }
                    //if it was not the last index, make the current i index visible
                    else {
                        visible = i;
                    }
                }
                this.updateGrid();
                /*
                this.api.applyTransaction({
                  remove: this.selectedRow
                });
                */
                this.selectedRow = null;
                this.api.ensureIndexVisible(visible);
                return;
            }
        }
    }
    openAddProductDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            cod: this.product.cod,
            des: this.product.des,
            ord: this.product.ord,
            unita: this.product.unita,
            confezionamento: this.product.confezionamento,
            multiplo_confezionamento: this.product.multiplo_confezionamento,
            multiplo_imballo: this.product.multiplo_imballo,
            attivo: this.product.attivo,
            extra: this.product.extra,
            min_ord: this.product.min_ord,
            valido_da: this.product.valido_da,
            valido_a: this.product.valido_a
        };
        this.dialogRef = this.dialog.open(_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_1__.AddProductComponent, dialogConfig);
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined && result.isSubmitted) {
                let newProduct = result.newProduct;
                newProduct.id = "-1";
                this.setProduct(newProduct, true);
                //this.updateGrid();
            }
        });
    }
    openAreYouSureDialog() {
        this.dialogRef = this.dialog.open(_are_you_sure_product_are_you_sure_product_component__WEBPACK_IMPORTED_MODULE_2__.AreYouSureProductComponent, {
            data: {
                id: this.id
            }
        });
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined && result.isSubmitted) {
                this.rmProduct(result.id);
                this.updateGrid();
            }
        });
    }
    openEditDateDialog(event) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        switch (event.column.getColId()) {
            case "valido_da":
                dialogConfig.data = {
                    date: event.data.valido_da,
                    isValidoDa: true,
                    isValidoA: false
                };
                break;
            case "valido_a":
                dialogConfig.data = {
                    date: event.data.valido_a,
                    isValidoDa: false,
                    isValidoA: true
                };
                break;
        }
        this.dialogRef = this.dialog.open(_datepicker_products_dialog_datepicker_products_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DatepickerProductsDialogComponent, dialogConfig);
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined && result.isSubmitted) {
                //console.log(result);
                let editedProduct = {
                    id: event.data.id,
                    cod: event.data.cod,
                    des: event.data.des,
                    ord: event.data.ord,
                    unita: event.data.unita,
                    confezionamento: event.data.confezionamento,
                    multiplo_confezionamento: event.data.multiplo_confezionamento,
                    multiplo_imballo: event.data.multiplo_imballo,
                    attivo: event.data.attivo,
                    extra: event.data.extra,
                    min_ord: event.data.min_ord,
                    valido_da: "",
                    valido_a: ""
                };
                if (result.isValidoDa) {
                    editedProduct.valido_da = result.date;
                    editedProduct.valido_a = event.data.valido_a;
                    this.setProduct(editedProduct, false);
                }
                else if (result.isValidoA) {
                    editedProduct.valido_da = event.data.valido_da;
                    editedProduct.valido_a = result.date;
                    this.setProduct(editedProduct, false);
                }
                this.updateGrid();
            }
        });
    }
    setLocally(product) {
        for (let i = 0; i < this.products.length; ++i) {
            if (product.id == this.products[i].id) {
                this.products[i].cod = product.cod;
                this.products[i].des = product.des;
                this.products[i].ord = product.ord;
                this.products[i].unita = product.unita;
                this.products[i].confezionamento = product.confezionamento;
                this.products[i].multiplo_confezionamento = product.multiplo_confezionamento;
                this.products[i].multiplo_imballo = product.multiplo_imballo;
                this.products[i].attivo = product.attivo;
                this.products[i].extra = product.extra;
                this.products[i].min_ord = product.min_ord;
                this.products[i].valido_da = product.valido_da;
                this.products[i].valido_a = product.valido_a;
                //this.updateGrid();
                this.api.applyTransaction({
                    set: [{
                            id: product.id,
                            cod: product.cod,
                            des: product.des,
                            ord: product.ord,
                            unita: product.unita,
                            confezionamento: product.confezionamento,
                            multiplo_confezionamento: product.multiplo_confezionamento,
                            multiplo_imballo: product.multiplo_imballo,
                            attivo: product.attivo,
                            extra: product.extra,
                            min_ord: product.min_ord,
                            valido_da: product.valido_da,
                            valido_a: product.valido_a
                        }]
                });
                this.api.ensureIndexVisible(i);
                return;
            }
        }
    }
    updateGrid() {
        //console.log(this.api);
        this.api.setRowData(this.products);
    }
}
PharmaRegistryComponent.ɵfac = function PharmaRegistryComponent_Factory(t) { return new (t || PharmaRegistryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_pharma_registry_service__WEBPACK_IMPORTED_MODULE_6__.PharmaRegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService)); };
PharmaRegistryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PharmaRegistryComponent, selectors: [["app-pharma-registry"]], viewQuery: function PharmaRegistryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridAngular, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.agGrid = _t.first);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "second-nav"], ["mat-mini-fab", "", "color", "primary", 3, "matTooltip", "click"], [1, "material-icons"], [1, "ag-theme-material", "ag-grid-table", 3, "rowData", "columnDefs", "defaultColDef", "alwaysShowHorizontalScroll", "gridOptions", "localeText", "getRowId", "animateRows", "columnResized", "columnMoved", "columnVisible", "columnPivotChanged", "columnRowGroupChanged", "columnValueChanged", "columnPinned", "gridReady", "firstDataRendered"]], template: function PharmaRegistryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, PharmaRegistryComponent_div_0_Template, 10, 14, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loginService.getProfile() == "200");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__.AgGridAngular, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaGFybWEtcmVnaXN0cnkuY29tcG9uZW50LmNzcyJ9 */"] });
PharmaRegistryComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: PharmaRegistryComponent, factory: PharmaRegistryComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2706:
/*!******************************************************************************!*\
  !*** ./src/app/send-to-customer-dialog/send-to-customer-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendToCustomerDialogComponent": () => (/* binding */ SendToCustomerDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);





class SendToCustomerDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.orderId = data.orderId;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.dialogRef.close({ isSubmitted: true });
    }
    onCancel() {
        this.dialogRef.close({ isCancelled: true });
    }
}
SendToCustomerDialogComponent.ɵfac = function SendToCustomerDialogComponent_Factory(t) { return new (t || SendToCustomerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
SendToCustomerDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendToCustomerDialogComponent, selectors: [["app-send-to-customer-dialog"]], decls: 14, vars: 16, consts: [["align", "center"], ["mat-dialog-actions", "", "align", "center"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "matDialogClose", "true", "color", "primary", 3, "click"]], template: function SendToCustomerDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1)(8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendToCustomerDialogComponent_Template_button_click_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendToCustomerDialogComponent_Template_button_click_11_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, "Send order"), " ", ctx.orderId, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, "to customer"), "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, "This action cannot be undone"), ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, "Submit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 14, "Cancel"));
    } }, dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLXRvLWN1c3RvbWVyLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 779:
/*!******************************************************************************!*\
  !*** ./src/app/send-to-supplier-dialog/send-to-supplier-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendToSupplierDialogComponent": () => (/* binding */ SendToSupplierDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






function SendToSupplierDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendToSupplierDialogComponent_div_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendToSupplierDialogComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onCancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "Send order"), " ", ctx_r0.orderId, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, "to supplier"), "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, "Once you confirm, the order cannot be edited"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 12, "Submit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 14, "Cancel"));
} }
function SendToSupplierDialogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendToSupplierDialogComponent_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onCancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "Order with ID"), " ", ctx_r1.orderId, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "has not been validated"), "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, "You cannot send an order to the supplier if it has not been validated"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "Close"));
} }
class SendToSupplierDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.orderId = data.orderId;
        this.isValidated = data.isValidated;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.dialogRef.close({ isSubmitted: true });
    }
    onCancel() {
        this.dialogRef.close({ isCancelled: true });
    }
}
SendToSupplierDialogComponent.ɵfac = function SendToSupplierDialogComponent_Factory(t) { return new (t || SendToSupplierDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
SendToSupplierDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendToSupplierDialogComponent, selectors: [["app-send-to-supplier-dialog"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["align", "center"], ["mat-dialog-actions", "", "align", "center"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "matDialogClose", "true", "color", "primary", 3, "click"]], template: function SendToSupplierDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SendToSupplierDialogComponent_div_0_Template, 15, 16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SendToSupplierDialogComponent_div_1_Template, 12, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValidated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isValidated);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLXRvLXN1cHBsaWVyLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9518:
/*!*************************************!*\
  !*** ./src/app/snackbar.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarService": () => (/* binding */ SnackbarService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);



class SnackbarService {
    constructor(snackbar) {
        this.snackbar = snackbar;
    }
    //custom message
    openSnackbar(message) {
        this.snackbar.open(message);
    }
    //general create message
    onCreate() {
        this.snackbar.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLanguage == "it" ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.it.CreateSuccessful : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.en.CreateSuccessful);
    }
    //general update message
    onUpdate() {
        this.snackbar.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLanguage == "it" ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.it.UpdateSuccessful : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.en.UpdateSuccessful);
    }
    //general delete message
    onDelete() {
        this.snackbar.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLanguage == "it" ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.it.DeleteSuccessful : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.en.DeleteSuccessful);
    }
    //general validation message
    onValidate() {
        this.snackbar.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLanguage == "it" ? src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.it.ValidateSuccessful : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.translations.en.ValidateSuccessful);
    }
}
SnackbarService.ɵfac = function SnackbarService_Factory(t) { return new (t || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar)); };
SnackbarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SnackbarService, factory: SnackbarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6439:
/*!************************************************!*\
  !*** ./src/app/supplies/supplies.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuppliesComponent": () => (/* binding */ SuppliesComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ag-grid-angular */ 9771);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/grid-configs */ 6980);
/* harmony import */ var _datepicker_products_dialog_datepicker_products_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datepicker-products-dialog/datepicker-products-dialog.component */ 5825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _pharma_registry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pharma-registry.service */ 955);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users.service */ 474);
/* harmony import */ var _forecast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forecast.service */ 4472);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../snackbar.service */ 9518);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 8699);




















function SuppliesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "nav", 1)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SuppliesComponent_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r1.listOrders(ctx_r1.year)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SuppliesComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r3.year = $event); })("change", function SuppliesComponent_div_0_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.listOrders(ctx_r4.year)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ag-grid-angular", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("gridReady", function SuppliesComponent_div_0_Template_ag_grid_angular_gridReady_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r5.onGridReady($event)); })("columnResized", function SuppliesComponent_div_0_Template_ag_grid_angular_columnResized_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.saveColumnState()); })("columnVisible", function SuppliesComponent_div_0_Template_ag_grid_angular_columnVisible_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r7.saveColumnState()); })("columnPivotChanged", function SuppliesComponent_div_0_Template_ag_grid_angular_columnPivotChanged_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r8.saveColumnState()); })("columnRowGroupChanged", function SuppliesComponent_div_0_Template_ag_grid_angular_columnRowGroupChanged_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.saveColumnState()); })("columnValueChanged", function SuppliesComponent_div_0_Template_ag_grid_angular_columnValueChanged_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.saveColumnState()); })("columnMoved", function SuppliesComponent_div_0_Template_ag_grid_angular_columnMoved_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.saveColumnState()); })("columnPinned", function SuppliesComponent_div_0_Template_ag_grid_angular_columnPinned_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.saveColumnState()); })("firstDataRendered", function SuppliesComponent_div_0_Template_ag_grid_angular_firstDataRendered_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.onFirstDataRendered($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 13, "Supplies"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 15, "Refresh"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 17, "Reference year"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("rowData", ctx_r0.supplyGridRowData)("columnDefs", ctx_r0.suppliesGridConfig)("alwaysShowHorizontalScroll", true)("alwaysShowVerticalScroll", false)("defaultColDef", ctx_r0.defaultColDef)("gridOptions", ctx_r0.gridOptions)("localeText", ctx_r0.localeText)("getRowId", ctx_r0.getRowId)("animateRows", true);
} }
class SuppliesComponent {
    constructor(ordersService, pharmaRegistryService, usersService, forecastService, snackbarService, loginService, dialog) {
        this.ordersService = ordersService;
        this.pharmaRegistryService = pharmaRegistryService;
        this.usersService = usersService;
        this.forecastService = forecastService;
        this.snackbarService = snackbarService;
        this.year = new Date().getFullYear().toString();
        this.users = [];
        this.products = [];
        this.orders = [];
        this.orderStatusArr = [];
        this.forecasts = [];
        this.supplyGridRowData = [];
        this.defaultColDef = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_1__.defaultColDef;
        //spinner boolean
        //isLoading = true;//qui mostra lo spinner senza caricare nulla
        this.isLoading = false;
        this.getRowId = (params) => {
            return params.data.id;
        };
        this.localeText = (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentLanguage == 'it' ? src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_1__.AG_GRID_LOCALE_IT : src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_1__.AG_GRID_LOCALE_EN);
        this.onFirstDataRendered = (event) => {
            this.retrieveColumnState();
        };
        this.onGridReady = (params) => {
            this.api = params.api;
            this.columnApi = params.columnApi;
            this.getAllData();
            this.listProducts();
            this.listOrders(this.year);
            this.autoSizeColumns(false);
        };
        this.loginService = loginService;
        this.dialog = dialog;
        this.loginService.getCurrentUserSync();
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers.length == 0) {
            this.usersService.getUsersGlobally();
        }
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalProducts.length == 0) {
            this.pharmaRegistryService.getProductsGlobally();
        }
        this.suppliesGridConfig = src_environments_grid_configs__WEBPACK_IMPORTED_MODULE_1__.gridConfigSupplies;
        this.gridOptions = {
            onCellClicked: (event) => {
                if (event.column.getColId() == "d_consegna_prevista" && event.data.status == "inviato al fornitore") {
                    this.openEditDateDialog(event);
                }
            },
            onCellValueChanged: (event) => {
                //console.log("Changed from " + event.oldValue + " to " + event.newValue);
                var order = {
                    id: event.data.id,
                    anno: event.data.anno,
                    mese: event.data.mese,
                    username: event.data.username,
                    d_ordine: event.data.d_ordine,
                    n_ordine: event.data.n_ordine,
                    b_urgente: event.data.b_urgente,
                    b_extra: event.data.b_extra,
                    b_validato: event.data.b_validato,
                    d_validato: event.data.d_validato,
                    note: event.data.note,
                    status: event.data.status,
                    d_consegna_prevista: event.data.d_consegna_prevista,
                    n_ddt: event.data.n_ddt,
                    d_ddt: event.data.d_ddt,
                    note_consegna: event.data.note_consegna,
                    b_prestito: event.data.b_prestito,
                    id_ordine_prestito: event.data.id_ordine_prestito,
                    username_prestito_a: event.data.username_prestito_a,
                    username_prestito_da: event.data.username_prestito_da
                };
                let orderStatus = {
                    id: "0",
                    username: localStorage.getItem('sangue_username'),
                    id_order: event.data.id,
                    d_status: this.getFormattedDate(new Date()),
                    status: event.data.status,
                    note: "Fornitura modificata da " + localStorage.getItem('sangue_username'),
                    b_sto: false
                };
                this.setOrder(order, orderStatus);
            }
        };
    }
    retrieveColumnState() {
        const localColumnState = localStorage.getItem("suppliesColumnState");
        console.log("Column state:");
        console.log(localColumnState);
        if (localColumnState != null) {
            console.log(JSON.parse(localColumnState));
            this.columnApi.applyColumnState({ state: JSON.parse(localColumnState), applyOrder: true });
        }
    }
    saveColumnState() {
        const allState = this.columnApi.getColumnState();
        const localColumnState = allState.map((state) => ({
            colId: state.colId,
            sort: state.sort,
            sortIndex: state.sortIndex,
            aggFunc: state.aggFunc,
            flex: state.flex,
            pinned: state.pinned,
            pivot: state.pivot,
            pivotIndex: state.pivotIndex,
            rowGroup: state.rowGroup,
            rowGroupIndex: state.rowGroupIndex,
            width: state.width
        }));
        console.log(localColumnState);
        localStorage.setItem("suppliesColumnState", JSON.stringify(localColumnState));
    }
    ngOnInit() { }
    autoSizeColumns(skipHeader) {
        const allColumnIds = [];
        this.columnApi.getColumns().forEach((column) => {
            allColumnIds.push(column.getId());
        });
        this.columnApi.autoSizeColumns(allColumnIds, skipHeader);
    }
    getAllData() {
        this.ordersService.listOrdersPromise(this.year).subscribe(res => {
            if (res[0] == "OK") {
                this.orders = res[1];
                this.orderStatusArr = [];
                this.getAllOrderStatusRec(this.orders, 0);
            }
            else {
                console.error("Error retrieving orders!");
            }
        });
    }
    getAllOrderStatusRec(orders, i) {
        if (i >= orders.length) {
            this.listUsers();
            return;
        }
        this.ordersService.getOrderStatusPromise(orders[i].id).subscribe(res => {
            if (res[0] == "OK") {
                this.orderStatusArr.push(res[1][res[1].length - 1]);
                this.getAllOrderStatusRec(orders, i + 1);
            }
            else {
                console.error("Error retrieving orderStatus for order " + orders[i].id);
            }
        });
    }
    listOrders(year) {
        this.ordersService.listOrdersPromise(year).subscribe(res => {
            if (res[0] == "OK") {
                this.orders = res[1];
            }
            else {
                console.error("Error retrieving orders!");
            }
        });
    }
    listProducts() {
        this.pharmaRegistryService.listProductsPromise().subscribe(res => {
            if (res[0] == "OK") {
                this.products = res[1];
            }
            else {
                console.error("Error retrieving products!");
            }
        });
    }
    listUsers() {
        //this.isLoading = true;//qui continua a scaricare dati
        this.usersService.listUsersPromise('210').subscribe(res => {
            this.isLoading = true; //QUI FUNZIONAAAAAAAAAAAAAAAAAAAAAA
            if (res[0] == "OK") {
                this.users = res[1];
                this.createSupplyGridRowData();
            }
            else {
                console.error("Error retrieving users!");
            }
        });
    }
    createSupplyGridRowData() {
        this.supplyGridRowData = [];
        for (var i = 0; i < this.orders.length; ++i) {
            //aggiungo solo gli ordini con stato "inviato al fornitore" o "inviato al cliente"
            var lock = false;
            let toCustomerCondition = false;
            switch (this.orderStatusArr[i].status) {
                case "inviato al fornitore":
                    toCustomerCondition = false;
                    break;
                default:
                    toCustomerCondition = true;
                    lock = true;
                    break;
            }
            var newSupplyGridRowData = {
                id: this.orders[i].id,
                anno: this.orders[i].anno,
                mese: this.orders[i].mese,
                username: this.orders[i].username,
                full_username: this.getFullUsernameById(this.orders[i].username),
                d_ordine: this.orders[i].d_ordine,
                n_ordine: this.orders[i].n_ordine,
                b_urgente: this.orders[i].b_urgente,
                b_extra: this.orders[i].b_extra,
                b_validato: this.orders[i].b_validato,
                //prossimo campo non presente in orderGridRowData... sistemare
                b_to_customer: toCustomerCondition,
                d_validato: this.orders[i].d_validato,
                status: this.orderStatusArr[i].status,
                note: this.orders[i].note,
                d_consegna_prevista: this.orders[i].d_consegna_prevista,
                n_ddt: this.orders[i].n_ddt,
                d_ddt: this.orders[i].d_ddt,
                note_consegna: this.orders[i].note_consegna,
                isRowLocked: lock
            };
            this.supplyGridRowData.push(newSupplyGridRowData);
        }
        //console.log(this.supplyGridRowData);
        this.isLoading = false;
    }
    getFullUsernameById(id) {
        for (var i = 0; i < this.users.length; ++i) {
            if (this.users[i].username == id) {
                return this.users[i].client;
            }
        }
        return "";
    }
    getFormattedDate(date) {
        let splitDate = date.toLocaleString('it-IT').split(",", 2)[0].split("/", 3);
        let day = splitDate[0];
        let month = splitDate[1];
        let year = splitDate[2];
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        return year + "-" + month + "-" + day;
    }
    getSupplyGridRowDataById(id) {
        for (var i = 0; i < this.supplyGridRowData.length; ++i) {
            if (this.supplyGridRowData[i].id == id) {
                return this.supplyGridRowData[i];
            }
        }
        console.error("ID " + id + " not found!");
        return null;
    }
    updateRow(id) {
        const toBeUpdated = [];
        const rowNodes = [];
        const supply = this.getSupplyGridRowDataById(id);
        this.api.forEachNodeAfterFilterAndSort(function (rowNode) {
            if (rowNode.data.id != supply.id) {
                return;
            }
            const data = rowNode.data;
            data.b_to_customer = true;
            data.status = "inviato al cliente";
            data.isRowLocked = true;
            toBeUpdated.push(data);
            rowNodes.push(rowNode);
        });
        const res = this.api.applyTransaction({ update: toBeUpdated });
        this.snackbarService.onUpdate();
    }
    openEditDateDialog(event) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            date: event.value //data.d_consegna_prevista,
        };
        this.dialogRef = this.dialog.open(_datepicker_products_dialog_datepicker_products_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DatepickerProductsDialogComponent, //TODO: generic datepicker dialog
        dialogConfig);
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined && result.isSubmitted) {
                let order = {
                    id: event.data.id,
                    anno: event.data.anno,
                    mese: event.data.mese,
                    username: event.data.username,
                    d_ordine: event.data.d_ordine,
                    n_ordine: event.data.n_ordine,
                    b_urgente: event.data.b_urgente,
                    b_extra: event.data.b_extra,
                    b_validato: event.data.b_validato,
                    d_validato: event.data.d_validato,
                    note: event.data.note,
                    status: event.data.status,
                    d_consegna_prevista: result.date,
                    n_ddt: event.data.n_ddt,
                    d_ddt: event.data.d_ddt,
                    note_consegna: event.data.note_consegna,
                    b_prestito: event.data.b_prestito,
                    id_ordine_prestito: event.data.id_ordine_prestito,
                    username_prestito_a: event.data.username_prestito_a,
                    username_prestito_da: event.data.username_prestito_da
                };
                let orderStatus = {
                    id: "0",
                    username: localStorage.getItem('sangue_username'),
                    id_order: event.data.id,
                    d_status: this.getFormattedDate(new Date()),
                    status: "",
                    note: "",
                    b_sto: false
                };
                //when setting order date, just set order date
                order.d_consegna_prevista = result.date;
                orderStatus.status = event.data.status; //keep existing status
                orderStatus.note = "Data di consegna prevista impostata a " + order.d_consegna_prevista + " da " + localStorage.getItem('sangue_username');
                this.setOrder(order, orderStatus);
            }
        });
    }
    setOrder(order, orderStatus) {
        this.ordersService.setOrderStatusPromise(orderStatus).subscribe(res => {
            if (res[0] == "KO") {
                console.error("Error setting order status for order " + order.id);
            }
            else {
                this.ordersService.setOrderPromise(order, false).subscribe(res2 => {
                    if (res2 == "KO") {
                        console.error("Error setting order with id " + order.id);
                    }
                    else {
                        this.setOrderLocally(order, orderStatus);
                    }
                });
            }
        });
    }
    setOrderLocally(order, orderStatus) {
        for (let i = 0; i < this.orders.length; ++i) {
            if (order.id == this.orders[i].id) {
                this.orders[i].anno = order.anno;
                this.orders[i].username = order.username;
                this.orders[i].d_ordine = order.d_ordine;
                this.orders[i].b_urgente = order.b_urgente;
                this.orders[i].b_extra = order.b_extra;
                this.orders[i].b_validato = order.b_validato;
                this.orders[i].d_validato = order.d_validato;
                this.orders[i].note = order.note;
                this.orders[i].d_consegna_prevista = order.d_consegna_prevista;
                this.orders[i].n_ddt = order.n_ddt;
                this.orders[i].d_ddt = order.d_ddt;
                this.orders[i].note_consegna = order.note_consegna;
                this.orderStatusArr[i].status = orderStatus.status;
                let isLockedCondition;
                if (this.loginService.getUserCode() == "210") {
                    isLockedCondition = orderStatus.status != "inviato";
                }
                if (this.loginService.getUserCode() == "220") {
                    isLockedCondition = !(orderStatus.status == "inviato" || orderStatus.status == "confermato");
                }
                this.supplyGridRowData[i].id = order.id;
                this.supplyGridRowData[i].anno = order.anno;
                this.supplyGridRowData[i].username = order.username;
                this.supplyGridRowData[i].full_username = this.getFullUsernameById(order.username);
                this.supplyGridRowData[i].d_ordine = order.d_ordine;
                this.supplyGridRowData[i].n_ordine = order.n_ordine;
                this.supplyGridRowData[i].b_urgente = order.b_urgente;
                this.supplyGridRowData[i].b_extra = order.b_extra;
                this.supplyGridRowData[i].b_validato = order.b_validato;
                this.supplyGridRowData[i].d_validato = order.d_validato;
                this.supplyGridRowData[i].status = orderStatus.status;
                this.supplyGridRowData[i].note = order.note;
                this.supplyGridRowData[i].d_consegna_prevista = order.d_consegna_prevista;
                this.supplyGridRowData[i].n_ddt = order.n_ddt;
                this.supplyGridRowData[i].d_ddt = order.d_ddt;
                this.supplyGridRowData[i].note_consegna = order.note_consegna;
                this.supplyGridRowData[i].isRowLocked = isLockedCondition;
                this.updateRow(this.supplyGridRowData[i].id);
                this.snackbarService.onUpdate();
                return;
            }
        }
    }
}
SuppliesComponent.ɵfac = function SuppliesComponent_Factory(t) { return new (t || SuppliesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_pharma_registry_service__WEBPACK_IMPORTED_MODULE_4__.PharmaRegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_5__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_forecast_service__WEBPACK_IMPORTED_MODULE_6__.ForecastService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_8__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog)); };
SuppliesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: SuppliesComponent, selectors: [["app-supplies"]], viewQuery: function SuppliesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridAngular, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.agGrid = _t.first);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "second-nav"], ["mat-mini-fab", "", "color", "basic", 3, "matTooltip", "click"], [1, "material-icons"], ["matInput", "", "type", "number", 2, "width", "50px", 3, "placeholder", "ngModel", "ngModelChange", "change"], [1, "ag-theme-material", "ag-grid-table", 3, "rowData", "columnDefs", "alwaysShowHorizontalScroll", "alwaysShowVerticalScroll", "defaultColDef", "gridOptions", "localeText", "getRowId", "animateRows", "gridReady", "columnResized", "columnVisible", "columnPivotChanged", "columnRowGroupChanged", "columnValueChanged", "columnMoved", "columnPinned", "firstDataRendered"]], template: function SuppliesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, SuppliesComponent_div_0_Template, 12, 19, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "230");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__.AgGridAngular, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGllcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 474:
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class UsersService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'anag.php';
        this.users = [];
    }
    listUsers(userlevel) {
        let path = this.url + '?request=listUsers&id_session=' + localStorage.getItem('id_session') + '&userlevel=' + userlevel;
        console.log(path);
        this.http.get(path, {
            responseType: "json"
        }).subscribe(res => {
            console.log(res);
            if (res[0] == "KO") {
                console.error("Error retrieving products!");
                return null;
            }
            else {
                //console.log('>>>>>users: ' + res[1]);
                this.users = res[1];
                console.log(this.users);
                return res[1];
            }
        });
        return [];
    }
    listUsersPromise(userlevel) {
        let path = this.url + '?request=listUsers&id_session=' + localStorage.getItem('id_session') + '&userlevel=' + userlevel;
        return this.http.get(path, { responseType: "json" });
    }
    getUserById(id, users) {
        for (var i = 0; i < users.length; ++i) {
            if (id == users[i].client) {
                //console.log("Returning " + users[i].client);
                return users[i].client;
            }
        }
    }
    getUsersGlobally() {
        this.listUsersPromise("210").subscribe(res => {
            if (res[0] == "OK") {
                this.users = res[1];
                src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers = res[1];
                //console.log(environment.globalUsers);
            }
            else {
                console.error("Error retrieving users!");
            }
        });
    }
    getCurrentUser(users) {
        for (var i = 0; i < users.length; ++i) {
            if (users[i].id == localStorage.getItem("sangue_username")) {
                console.log(users[i].client);
                src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentUser.id = users[i].id;
                src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentUser.username = users[i].username;
                src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentUser.client = users[i].client;
                return;
            }
        }
        src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentUser.id = localStorage.getItem("sangue_username");
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8370:
/*!************************************!*\
  !*** ./src/app/version.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionService": () => (/* binding */ VersionService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class VersionService {
    constructor(http) {
        this.http = http;
    }
    getVersionPromise() {
        let path = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'anag.php?request=getVersion&id_session=' + localStorage.getItem("id_session");
        console.log(path);
        return this.http.get(path, {
            responseType: "json"
        });
    }
    checkVersion() {
        this.getVersionPromise().subscribe(res => {
            if (res[0] == "OK") {
                /*
                console.log(res);
                console.log("Checking version...");
                console.log("Local version: " + localStorage.getItem("version"));
                console.log("Local env version: " + environment.version);
                */
                //if env version is higher than localstorage version, update localstorage
                if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version > localStorage.getItem("version")) {
                    localStorage.setItem("version", src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version);
                }
                let localVersion = localStorage.getItem("version");
                //if localstorage version is null or lower, update it with remote version
                if (localVersion == null || parseFloat(localVersion) < parseFloat(res[1])) {
                    //console.log("Local version lower than server saved one!");
                    //console.log("Remote version: " + res[1]);
                    localStorage.setItem("version", res[1]);
                    //console.log("New local version: " + localStorage.getItem("version"));
                    src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version = res[1];
                    //console.log("New local env version: " + environment.version);
                    window.location.reload();
                }
                //if localstorage version is higher than remote version, update remote version
                if (parseFloat(localVersion) > parseFloat(res[1])) {
                    //console.log("Local version higher than server saved one!");
                    this.setVersionPromise(localVersion).subscribe(res => {
                        if (res[0] == "OK") {
                            console.log("Version " + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version + " saved on server!");
                        }
                        else {
                            console.error("Error setting version!");
                        }
                    });
                }
            }
            else {
                console.error("Error checking version!");
            }
        });
    }
    setVersionPromise(version) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basePath + 'anag.php', {
            request: 'setVersion',
            id_session: localStorage.getItem("id_session"),
            version: version,
        });
    }
}
VersionService.ɵfac = function VersionService_Factory(t) { return new (t || VersionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
VersionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VersionService, factory: VersionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3537:
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ 5619);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ 474);
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders.service */ 6382);
/* harmony import */ var _version_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../version.service */ 8370);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8699);










const _c0 = function () { return ["/forecast"]; };
function WelcomeComponent_article_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "article")(1, "a", 4)(2, "mat-card")(3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "Forecasts"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 5, "Forecasts dashboard"));
} }
const _c1 = function () { return ["/orders"]; };
function WelcomeComponent_article_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "article")(1, "a", 4)(2, "mat-card")(3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "Orders"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 5, "Orders dashboard"));
} }
const _c2 = function () { return ["/loans"]; };
function WelcomeComponent_article_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "article")(1, "a", 4)(2, "mat-card")(3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "Loans"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 5, "Lend a product or view granted and/or received loans"));
} }
const _c3 = function () { return ["/order-period"]; };
function WelcomeComponent_article_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "article")(1, "a", 4)(2, "mat-card")(3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "Order period"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 5, "Order period management"));
} }
const _c4 = function () { return ["/pharma-registry"]; };
function WelcomeComponent_article_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "article")(1, "a", 4)(2, "mat-card")(3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "Pharmaceutical registry"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 5, "Products dashboard"));
} }
const _c5 = function () { return ["/supplies"]; };
function WelcomeComponent_article_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "article")(1, "a", 4)(2, "mat-card")(3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 3, "Supplies"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 5, "Supplies dashboard"));
} }
function WelcomeComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "Logged as"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.loginService.currentUser.client);
} }
const _c6 = function () { return ["/login"]; };
function WelcomeComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, "You're not logged!"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 5, "Login"));
} }
class WelcomeComponent {
    constructor(loginService, usersService, ordersService, versionService, router) {
        this.loginService = loginService;
        this.usersService = usersService;
        this.ordersService = ordersService;
        this.versionService = versionService;
        this.router = router;
        this.users = [];
        this.currentClient = "";
        this.getUsersGlobally();
        this.ordersService.getOrdersGlobally();
        this.versionService.checkVersion();
    }
    ngOnInit() {
        this.loginService.checkPromise().subscribe(res => {
            if (res[0] == "KO") {
                localStorage.removeItem("id_session");
                localStorage.removeItem("id_profile");
                localStorage.removeItem("sangue_username");
                localStorage.removeItem("sangue_client");
                this.loginService.logged = false;
                this.router.navigate(['login']);
            }
        });
    }
    getUsersGlobally() {
        this.usersService.listUsersPromise("210").subscribe(res => {
            if (res[0] == "OK") {
                this.users = res[1];
                src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers = res[1];
                console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.globalUsers);
                //this.loginService.getCurrentUser(this.users);
                this.loginService.getCurrentUserSync();
            }
            else {
                console.error("Error retrieving users!");
            }
        });
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_version_service__WEBPACK_IMPORTED_MODULE_4__.VersionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
WelcomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 23, vars: 17, consts: [[1, "second-nav"], [4, "ngIf"], [3, "click"], ["align", "center", 4, "ngIf"], [3, "routerLink"], ["align", "center"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, WelcomeComponent_article_5_Template, 9, 8, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, WelcomeComponent_article_6_Template, 9, 8, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, WelcomeComponent_article_7_Template, 9, 8, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, WelcomeComponent_article_8_Template, 9, 8, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, WelcomeComponent_article_9_Template, 9, 8, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, WelcomeComponent_article_10_Template, 9, 8, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "article")(12, "a")(13, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WelcomeComponent_Template_mat_card_click_13_listener() { return ctx.loginService.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, WelcomeComponent_p_21_Template, 6, 4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, WelcomeComponent_p_22_Template, 6, 8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 11, "Home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() != "200" && ctx.loginService.getUserCode() != "230");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() != "200" && ctx.loginService.getUserCode() != "230");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "210" || ctx.loginService.getUserCode() == "220");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "220");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginService.getUserCode() == "230");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 13, "Logout"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 15, "Disconnection"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginService.getUsername() != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loginService.getUsername() == null);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5jc3MifQ== */"] });
WelcomeComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: WelcomeComponent, factory: WelcomeComponent.ɵfac });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment),
/* harmony export */   "translations": () => (/* binding */ translations)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    basePath: 'https://vm-portalmmg.sistemapiemonte.it/collector/modules/ws/sangue/',
    reportPath: 'https://vm-portalmmg.sistemapiemonte.it/collector/',
    logoutPath: 'https://servizi.regione.piemonte.it/catalogo/sistema-informativo-regionale-portale-medici-pediatri',
    currentLanguage: 'it',
    globalUsers: [],
    globalProducts: [],
    globalForecasts: [],
    globalOrders: [],
    currentUser: {
        id: "",
        username: "",
        client: ""
    },
    version: "0.9",
};
const translations = {
    it: {
        ThresholdSurpassed: "Soglia superata! Si prega di giustificare la quantità in eccesso nel box 'Motivazione'.",
        CreateSuccessful: "Elemento creato con successo!",
        UpdateSuccessful: "Elemento aggiornato con successo!",
        DeleteSuccessful: "Elemento eliminato con successo!",
        ValidateSuccessful: "Elemento validato!",
        UrgentOrderAlert: "Dato che quest'ordine è urgente, si prega di avvertire il fornitore entro 24h.",
        PleaseProvideNotes: "Si prega di fornire delle annotazioni valide!",
    },
    en: {
        ThresholdSurpassed: "Threshold surpassed! Please justify the exceeding quantity in the 'Reason' text box.",
        CreateSuccessful: "Created successfully!",
        UpdateSuccessful: "Updated successfully!",
        DeleteSuccessful: "Deleted successfully!",
        ValidateSuccessful: "Validated!",
        UrgentOrderAlert: "Since this order is urgent, you are required to warn the supplier within 24h.",
        PleaseProvideNotes: "Please provide valid notes!"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 6980:
/*!******************************************!*\
  !*** ./src/environments/grid-configs.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AG_GRID_LOCALE_EN": () => (/* binding */ AG_GRID_LOCALE_EN),
/* harmony export */   "AG_GRID_LOCALE_IT": () => (/* binding */ AG_GRID_LOCALE_IT),
/* harmony export */   "defaultColDef": () => (/* binding */ defaultColDef),
/* harmony export */   "forecastGridHeaders": () => (/* binding */ forecastGridHeaders),
/* harmony export */   "gridConfigForecast210": () => (/* binding */ gridConfigForecast210),
/* harmony export */   "gridConfigForecast220": () => (/* binding */ gridConfigForecast220),
/* harmony export */   "gridConfigLoans210": () => (/* binding */ gridConfigLoans210),
/* harmony export */   "gridConfigLoans220": () => (/* binding */ gridConfigLoans220),
/* harmony export */   "gridConfigOrderRows": () => (/* binding */ gridConfigOrderRows),
/* harmony export */   "gridConfigOrders210": () => (/* binding */ gridConfigOrders210),
/* harmony export */   "gridConfigOrders210Locked": () => (/* binding */ gridConfigOrders210Locked),
/* harmony export */   "gridConfigOrders220": () => (/* binding */ gridConfigOrders220),
/* harmony export */   "gridConfigOrders220Locked": () => (/* binding */ gridConfigOrders220Locked),
/* harmony export */   "gridConfigSupplies": () => (/* binding */ gridConfigSupplies),
/* harmony export */   "localeLang": () => (/* binding */ localeLang),
/* harmony export */   "orderGridHeaders": () => (/* binding */ orderGridHeaders),
/* harmony export */   "pharmaRegistryGridConfig": () => (/* binding */ pharmaRegistryGridConfig),
/* harmony export */   "pharmaRegistryGridHeaders": () => (/* binding */ pharmaRegistryGridHeaders)
/* harmony export */ });
/* harmony import */ var src_app_button_delete_forecast_button_delete_forecast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/button-delete-forecast/button-delete-forecast.component */ 1737);
/* harmony import */ var src_app_button_delete_product_button_delete_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/button-delete-product/button-delete-product.component */ 1886);
/* harmony import */ var src_app_button_edit_order_button_edit_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/button-edit-order/button-edit-order.component */ 1026);
/* harmony import */ var src_app_button_loan_details_button_loan_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/button-loan-details/button-loan-details.component */ 5418);
/* harmony import */ var src_app_button_order_report_button_order_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/button-order-report/button-order-report.component */ 6);
/* harmony import */ var src_app_button_supply_details_button_supply_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/button-supply-details/button-supply-details.component */ 8031);
/* harmony import */ var src_app_ddt_order_actions_ddt_order_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ddt-order-actions/ddt-order-actions.component */ 7890);
/* harmony import */ var src_app_dropdown_products_forecast_dropdown_products_forecast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dropdown-products-forecast/dropdown-products-forecast.component */ 4980);
/* harmony import */ var src_app_dropdown_users_forecast_dropdown_users_forecast_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dropdown-users-forecast/dropdown-users-forecast.component */ 6022);
/* harmony import */ var src_app_dropdown_users_orders_dropdown_users_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dropdown-users-orders/dropdown-users-orders.component */ 5131);
/* harmony import */ var src_app_orders_extra_checkbox_orders_extra_checkbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/orders-extra-checkbox/orders-extra-checkbox.component */ 6247);
/* harmony import */ var src_app_orders_received_checkbox_orders_received_checkbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/orders-received-checkbox/orders-received-checkbox.component */ 3087);
/* harmony import */ var src_app_orders_sent_checkbox_orders_sent_checkbox_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/orders-sent-checkbox/orders-sent-checkbox.component */ 1243);
/* harmony import */ var src_app_orders_to_customer_checkbox_orders_to_customer_checkbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/orders-to-customer-checkbox/orders-to-customer-checkbox.component */ 8311);
/* harmony import */ var src_app_orders_urgent_checkbox_orders_urgent_checkbox_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/orders-urgent-checkbox/orders-urgent-checkbox.component */ 225);
/* harmony import */ var src_app_orders_validated_checkbox_orders_validated_checkbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/orders-validated-checkbox/orders-validated-checkbox.component */ 1963);
/* harmony import */ var src_app_pharma_registry_active_checkbox_pharma_registry_active_checkbox_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/pharma-registry-active-checkbox/pharma-registry-active-checkbox.component */ 6579);
/* harmony import */ var src_app_pharma_registry_extra_checkbox_pharma_registry_extra_checkbox_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/pharma-registry-extra-checkbox/pharma-registry-extra-checkbox.component */ 1457);


















/**
 *
 * The following configs need to be used in the
 * [columnDefs] attribute of the <ag-grid-angular> tag
 *
 */
var localeLang = 'it'; //navigator.language.split("-", 2)[0]
//===============================================================================================================
//Products
const pharmaRegistryGridHeaders = {
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
};
//AgGrid config for PharmaRegistryComponent and userlevel 200
const pharmaRegistryGridConfig = [
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
        cellRenderer: src_app_pharma_registry_active_checkbox_pharma_registry_active_checkbox_component__WEBPACK_IMPORTED_MODULE_16__.PharmaRegistryActiveCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.Extra : pharmaRegistryGridHeaders.en.Extra,
        field: 'extra',
        editable: false,
        cellRenderer: src_app_pharma_registry_extra_checkbox_pharma_registry_extra_checkbox_component__WEBPACK_IMPORTED_MODULE_17__.PharmaRegistryExtraCheckboxComponent
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
        cellRenderer: (params) => {
            let date = new Date(params.value).toLocaleDateString('it-IT');
            if (date == "Invalid Date" || date == "0000-00-00" || date == "1970-01-01" || params.value == null)
                return localeLang == 'it' ? pharmaRegistryGridHeaders.it.DateNotSet : pharmaRegistryGridHeaders.en.DateNotSet;
            return date;
        }
    },
    {
        headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.ValidThrough : pharmaRegistryGridHeaders.en.ValidThrough,
        field: 'valido_a',
        editable: false,
        cellRenderer: (params) => {
            let date = new Date(params.value).toLocaleDateString('it-IT');
            if (date == "Invalid Date" || date == "0000-00-00" || date == "1970-01-01" || params.value == null)
                return localeLang == 'it' ? pharmaRegistryGridHeaders.it.DateNotSet : pharmaRegistryGridHeaders.en.DateNotSet;
            return date;
        }
    },
    {
        headerName: localeLang == 'it' ? pharmaRegistryGridHeaders.it.Action : pharmaRegistryGridHeaders.en.Action,
        cellRenderer: src_app_button_delete_product_button_delete_product_component__WEBPACK_IMPORTED_MODULE_1__.ButtonDeleteProductComponent,
        autoHeight: true
    }
];
//===============================================================================================================
//FORECASTS
const forecastGridHeaders = {
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
};
//AgGrid config for ForecastComponent and userlevel 210
const gridConfigForecast210 = [
    {
        headerName: localeLang == 'it' ? forecastGridHeaders.it.Year : forecastGridHeaders.en.Year,
        field: 'anno',
        editable: (params) => {
            return (params.data.qta_approvata == "In attesa" || params.data.qta_approvata == "in attesa" || params.data.qta_approvata == "0");
        }
    },
    {
        headerName: localeLang == 'it' ? forecastGridHeaders.it.ProductName : forecastGridHeaders.en.ProductName,
        field: 'product_name',
        cellRenderer: src_app_dropdown_products_forecast_dropdown_products_forecast_component__WEBPACK_IMPORTED_MODULE_7__.DropdownProductsForecastComponent,
        editable: false,
    },
    {
        headerName: localeLang == 'it' ? forecastGridHeaders.it.Quantity : forecastGridHeaders.en.Quantity,
        field: 'qta',
        editable: (params) => {
            return (params.data.qta_approvata == "In attesa" || params.data.qta_approvata == "in attesa" || params.data.qta_approvata == "0");
        }
    },
    {
        headerName: localeLang == 'it' ? forecastGridHeaders.it.ApprovedQuantity : forecastGridHeaders.en.ApprovedQuantity,
        field: 'qta_approvata',
        editable: false,
        cellRenderer: (params) => {
            if (params.value == "0" || params.value == null || params.value == 0) {
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
        cellRenderer: src_app_button_delete_forecast_button_delete_forecast_component__WEBPACK_IMPORTED_MODULE_0__.ButtonDeleteForecastComponent,
        autoHeight: true
    }
];
//AgGrid config for ForecastComponent and userlevel 220
const gridConfigForecast220 = [
    {
        headerName: localeLang == 'it' ? forecastGridHeaders.it.Year : forecastGridHeaders.en.Year,
        field: 'anno',
        editable: false
    },
    {
        headerName: localeLang == 'it' ? forecastGridHeaders.it.User : forecastGridHeaders.en.User,
        field: 'full_username',
        cellRenderer: src_app_dropdown_users_forecast_dropdown_users_forecast_component__WEBPACK_IMPORTED_MODULE_8__.DropdownUsersForecastComponent,
        editable: false,
    },
    {
        headerName: localeLang == 'it' ? forecastGridHeaders.it.ProductName : forecastGridHeaders.en.ProductName,
        field: 'product_name',
        //cellRenderer: DropdownProductsForecastComponent,
        editable: false,
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
        cellRenderer: src_app_button_delete_forecast_button_delete_forecast_component__WEBPACK_IMPORTED_MODULE_0__.ButtonDeleteForecastComponent,
        autoHeight: true
    }
];
//===============================================================================================================
//ORDERS
//header translation for orders
const orderGridHeaders = {
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
        DDTActions: "Azioni DDT",
        DDTDate: "Data DDT",
        DDTNumber: "n° DDT",
        DeliveryNotes: "Note di consegna",
        UserFrom: "Effettuato da",
        Recipient: "Destinatario",
        LoanDate: "Data prestito",
        ReferenceYear: "Anno di riferimento",
        ReferenceMonth: "Mese di riferimento"
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
        DDTActions: "DDT Actions",
        DDTDate: "DDT date",
        DDTNumber: "DDT no.",
        DeliveryNotes: "Delivery notes",
        UserFrom: "Requested by",
        Recipient: "Recipient",
        LoanDate: "Loan date",
        ReferenceYear: "Reference year",
        ReferenceMonth: "Reference month"
    }
};
//AgGrid config for OrdersComponent and userlevel 210
const gridConfigOrders210 = [
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.OrderNumber : orderGridHeaders.en.OrderNumber,
        field: 'n_ordine',
        editable: (params) => {
            return !params.data.isRowLocked;
        }
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User,
        field: 'full_username',
        editable: false
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ReferenceYear : orderGridHeaders.en.ReferenceYear,
        field: 'anno',
        editable: false
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ReferenceMonth : orderGridHeaders.en.ReferenceMonth,
        field: 'mese',
        editable: false
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Status : orderGridHeaders.en.Status,
        field: 'status',
        editable: false,
        cellRenderer: (params) => {
            return params.value === undefined ? "inviato" : params.value;
        }
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.OrderDate : orderGridHeaders.en.OrderDate,
        field: 'd_ordine',
        editable: false,
        cellRenderer: (params) => {
            return new Date(params.value).toLocaleDateString('it-IT');
        },
        sort: 'desc'
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Urgent : orderGridHeaders.en.Urgent,
        field: 'b_urgente',
        editable: false,
        cellRenderer: src_app_orders_urgent_checkbox_orders_urgent_checkbox_component__WEBPACK_IMPORTED_MODULE_14__.OrdersUrgentCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Extra : orderGridHeaders.en.Extra,
        field: 'b_extra',
        editable: false,
        cellRenderer: src_app_orders_extra_checkbox_orders_extra_checkbox_component__WEBPACK_IMPORTED_MODULE_10__.OrdersExtraCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Validated : orderGridHeaders.en.Validated,
        field: 'b_validato',
        editable: false,
        cellRenderer: src_app_orders_validated_checkbox_orders_validated_checkbox_component__WEBPACK_IMPORTED_MODULE_15__.OrdersValidatedCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Received : orderGridHeaders.en.Received,
        field: 'b_received',
        editable: false,
        cellRenderer: src_app_orders_received_checkbox_orders_received_checkbox_component__WEBPACK_IMPORTED_MODULE_11__.OrdersReceivedCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ValidationDate : orderGridHeaders.en.ValidationDate,
        field: 'd_validato',
        editable: false,
        cellRenderer: (params) => {
            //if date is awaiting validation
            if (params.value == "0000-00-00")
                return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
            else
                return new Date(params.value).toLocaleDateString('it-IT');
        }
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Notes : orderGridHeaders.en.Notes,
        field: 'note',
        editable: (params) => {
            return !params.data.isRowLocked;
        }
    },
    //TODO
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.DDTActions : orderGridHeaders.en.DDTActions,
        field: 'ddt_actions',
        editable: true,
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
        cellRenderer: (params) => {
            //if date is awaiting validation
            if (params.value == "0000-00-00" || params.value == "")
                return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
            else
                return new Date(params.value).toLocaleDateString('it-IT');
        }
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.EstimatedDeliveryDate : orderGridHeaders.en.EstimatedDeliveryDate,
        field: 'd_consegna_prevista',
        editable: false,
        cellRenderer: (params) => {
            //if date is awaiting validation
            if (params.value == "0000-00-00")
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
        cellRenderer: src_app_button_edit_order_button_edit_order_component__WEBPACK_IMPORTED_MODULE_2__.ButtonEditOrderComponent,
        autoHeight: true
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.PDF : orderGridHeaders.en.PDF,
        cellRenderer: src_app_button_order_report_button_order_report_component__WEBPACK_IMPORTED_MODULE_4__.ButtonOrderReportComponent,
        autoHeight: true
    }
];
//same as above but all locked
const gridConfigOrders210Locked = [
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
        headerName: localeLang == 'it' ? orderGridHeaders.it.ReferenceYear : orderGridHeaders.en.ReferenceYear,
        field: 'anno',
        editable: false
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ReferenceMonth : orderGridHeaders.en.ReferenceMonth,
        field: 'mese',
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
        cellRenderer: (params) => {
            return new Date(params.value).toLocaleDateString('it-IT');
        },
        sort: 'desc'
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Urgent : orderGridHeaders.en.Urgent,
        field: 'b_urgente',
        editable: false,
        cellRenderer: src_app_orders_urgent_checkbox_orders_urgent_checkbox_component__WEBPACK_IMPORTED_MODULE_14__.OrdersUrgentCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Extra : orderGridHeaders.en.Extra,
        field: 'b_extra',
        editable: false,
        cellRenderer: src_app_orders_extra_checkbox_orders_extra_checkbox_component__WEBPACK_IMPORTED_MODULE_10__.OrdersExtraCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Validated : orderGridHeaders.en.Validated,
        field: 'b_validato',
        editable: false,
        cellRenderer: src_app_orders_validated_checkbox_orders_validated_checkbox_component__WEBPACK_IMPORTED_MODULE_15__.OrdersValidatedCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Received : orderGridHeaders.en.Received,
        field: 'b_received',
        editable: false,
        cellRenderer: src_app_orders_received_checkbox_orders_received_checkbox_component__WEBPACK_IMPORTED_MODULE_11__.OrdersReceivedCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ValidationDate : orderGridHeaders.en.ValidationDate,
        field: 'd_validato',
        editable: false,
        cellRenderer: (params) => {
            //if date is awaiting validation
            if (params.value == "0000-00-00")
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
    //TODO
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.DDTActions : orderGridHeaders.en.DDTActions,
        field: 'ddt_actions',
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
        cellRenderer: (params) => {
            //if date is awaiting validation
            if (params.value == "0000-00-00" || params.value == "")
                return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
            else
                return new Date(params.value).toLocaleDateString('it-IT');
        }
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.EstimatedDeliveryDate : orderGridHeaders.en.EstimatedDeliveryDate,
        field: 'd_consegna_prevista',
        editable: false,
        cellRenderer: (params) => {
            //if date is awaiting validation
            if (params.value == "0000-00-00")
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
        cellRenderer: src_app_button_edit_order_button_edit_order_component__WEBPACK_IMPORTED_MODULE_2__.ButtonEditOrderComponent,
        autoHeight: true
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.PDF : orderGridHeaders.en.PDF,
        cellRenderer: src_app_button_order_report_button_order_report_component__WEBPACK_IMPORTED_MODULE_4__.ButtonOrderReportComponent,
        autoHeight: true
    }
];
//AgGrid config for OrdersComponent and userlevel 220
const gridConfigOrders220 = [
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.OrderNumber : orderGridHeaders.en.OrderNumber,
        field: 'n_ordine',
        editable: true
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User,
        field: 'full_username',
        cellRenderer: src_app_dropdown_users_orders_dropdown_users_orders_component__WEBPACK_IMPORTED_MODULE_9__.DropdownUsersOrdersComponent,
        editable: false
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ReferenceYear : orderGridHeaders.en.ReferenceYear,
        field: 'anno',
        editable: false
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ReferenceMonth : orderGridHeaders.en.ReferenceMonth,
        field: 'mese',
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
        cellRenderer: (params) => {
            return new Date(params.value).toLocaleDateString('it-IT');
        },
        sort: 'desc'
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Urgent : orderGridHeaders.en.Urgent,
        field: 'b_urgente',
        editable: false,
        cellRenderer: src_app_orders_urgent_checkbox_orders_urgent_checkbox_component__WEBPACK_IMPORTED_MODULE_14__.OrdersUrgentCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Extra : orderGridHeaders.en.Extra,
        field: 'b_extra',
        editable: false,
        cellRenderer: src_app_orders_extra_checkbox_orders_extra_checkbox_component__WEBPACK_IMPORTED_MODULE_10__.OrdersExtraCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Validated : orderGridHeaders.en.Validated,
        field: 'b_validato',
        editable: false,
        cellRenderer: src_app_orders_validated_checkbox_orders_validated_checkbox_component__WEBPACK_IMPORTED_MODULE_15__.OrdersValidatedCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.SentToSupplier : orderGridHeaders.en.SentToSupplier,
        field: 'b_to_supplier',
        editable: false,
        cellRenderer: src_app_orders_sent_checkbox_orders_sent_checkbox_component__WEBPACK_IMPORTED_MODULE_12__.OrdersSentCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Received : orderGridHeaders.en.Received,
        field: 'b_received',
        editable: false,
        cellRenderer: src_app_orders_received_checkbox_orders_received_checkbox_component__WEBPACK_IMPORTED_MODULE_11__.OrdersReceivedCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ValidationDate : orderGridHeaders.en.ValidationDate,
        field: 'd_validato',
        editable: false,
        cellRenderer: (params) => {
            if (params.value == "0000-00-00" || params.value == "Invalid Date")
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
    //TODO
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.DDTActions : orderGridHeaders.en.DDTActions,
        field: 'ddt_actions',
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
        cellRenderer: (params) => {
            //if date is awaiting validation
            if (params.value == "0000-00-00" || params.value == "")
                return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
            else
                return new Date(params.value).toLocaleDateString('it-IT');
        }
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.EstimatedDeliveryDate : orderGridHeaders.en.EstimatedDeliveryDate,
        field: 'd_consegna_prevista',
        editable: false,
        cellRenderer: (params) => {
            //if date is awaiting validation
            if (params.value == "0000-00-00")
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
        cellRenderer: src_app_button_edit_order_button_edit_order_component__WEBPACK_IMPORTED_MODULE_2__.ButtonEditOrderComponent,
        autoHeight: true
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.PDF : orderGridHeaders.en.PDF,
        cellRenderer: src_app_button_order_report_button_order_report_component__WEBPACK_IMPORTED_MODULE_4__.ButtonOrderReportComponent,
        autoHeight: true
    }
];
//same as above but all locked
const gridConfigOrders220Locked = [
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
        headerName: localeLang == 'it' ? orderGridHeaders.it.ReferenceYear : orderGridHeaders.en.ReferenceYear,
        field: 'anno',
        editable: false
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ReferenceMonth : orderGridHeaders.en.ReferenceMonth,
        field: 'mese',
        editable: false
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Status : orderGridHeaders.en.Status,
        field: 'status',
        editable: false,
        cellRenderer: (params) => {
            return params.value === undefined ? "inviato" : params.value;
        }
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.OrderDate : orderGridHeaders.en.OrderDate,
        field: 'd_ordine',
        editable: false,
        cellRenderer: (params) => {
            return new Date(params.value).toLocaleDateString('it-IT');
        },
        sort: 'desc'
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Urgent : orderGridHeaders.en.Urgent,
        field: 'b_urgente',
        editable: false,
        cellRenderer: src_app_orders_urgent_checkbox_orders_urgent_checkbox_component__WEBPACK_IMPORTED_MODULE_14__.OrdersUrgentCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Extra : orderGridHeaders.en.Extra,
        field: 'b_extra',
        editable: false,
        cellRenderer: src_app_orders_extra_checkbox_orders_extra_checkbox_component__WEBPACK_IMPORTED_MODULE_10__.OrdersExtraCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Validated : orderGridHeaders.en.Validated,
        field: 'b_validato',
        editable: false,
        cellRenderer: src_app_orders_validated_checkbox_orders_validated_checkbox_component__WEBPACK_IMPORTED_MODULE_15__.OrdersValidatedCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.SentToSupplier : orderGridHeaders.en.SentToSupplier,
        field: 'b_to_supplier',
        editable: false,
        cellRenderer: src_app_orders_sent_checkbox_orders_sent_checkbox_component__WEBPACK_IMPORTED_MODULE_12__.OrdersSentCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Received : orderGridHeaders.en.Received,
        field: 'b_received',
        editable: false,
        cellRenderer: src_app_orders_received_checkbox_orders_received_checkbox_component__WEBPACK_IMPORTED_MODULE_11__.OrdersReceivedCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ValidationDate : orderGridHeaders.en.ValidationDate,
        field: 'd_validato',
        editable: false,
        cellRenderer: (params) => {
            if (params.value == "0000-00-00")
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
    //TODO
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.DDTActions : orderGridHeaders.en.DDTActions,
        field: 'ddt_actions',
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
        cellRenderer: (params) => {
            //if date is awaiting validation
            if (params.value == "0000-00-00" || params.value == "")
                return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
            else
                return new Date(params.value).toLocaleDateString('it-IT');
        }
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.EstimatedDeliveryDate : orderGridHeaders.en.EstimatedDeliveryDate,
        field: 'd_consegna_prevista',
        editable: false,
        cellRenderer: (params) => {
            //if date is awaiting validation
            if (params.value == "0000-00-00")
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
        cellRenderer: src_app_button_edit_order_button_edit_order_component__WEBPACK_IMPORTED_MODULE_2__.ButtonEditOrderComponent,
        autoHeight: true
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.PDF : orderGridHeaders.en.PDF,
        cellRenderer: src_app_button_order_report_button_order_report_component__WEBPACK_IMPORTED_MODULE_4__.ButtonOrderReportComponent,
        autoHeight: true
    }
];
//AgGrid config for orderRows
const gridConfigOrderRows = [
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
const gridConfigSupplies = [
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.OrderNumber : orderGridHeaders.en.OrderNumber,
        field: 'n_ordine',
        editable: false
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.User : orderGridHeaders.en.User,
        field: 'full_username',
        editable: false,
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ReferenceYear : orderGridHeaders.en.ReferenceYear,
        field: 'anno',
        editable: false
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ReferenceMonth : orderGridHeaders.en.ReferenceMonth,
        field: 'mese',
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
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.OrderDate : orderGridHeaders.en.OrderDate,
        field: 'd_ordine',
        editable: false,
        cellRenderer: (params) => {
            return new Date(params.value).toLocaleDateString('it-IT');
        },
        sort: 'desc'
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Urgent : orderGridHeaders.en.Urgent,
        field: 'b_urgente',
        editable: false,
        cellRenderer: src_app_orders_urgent_checkbox_orders_urgent_checkbox_component__WEBPACK_IMPORTED_MODULE_14__.OrdersUrgentCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Extra : orderGridHeaders.en.Extra,
        field: 'b_extra',
        editable: false,
        cellRenderer: src_app_orders_extra_checkbox_orders_extra_checkbox_component__WEBPACK_IMPORTED_MODULE_10__.OrdersExtraCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.SentToCustomer : orderGridHeaders.en.SentToCustomer,
        field: 'b_to_customer',
        editable: false,
        cellRenderer: src_app_orders_to_customer_checkbox_orders_to_customer_checkbox_component__WEBPACK_IMPORTED_MODULE_13__.OrdersToCustomerCheckboxComponent
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ValidationDate : orderGridHeaders.en.ValidationDate,
        field: 'd_validato',
        editable: false,
        cellRenderer: (params) => {
            if (params.value == "0000-00-00")
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
    //TODO
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.DDTActions : orderGridHeaders.en.DDTActions,
        field: 'ddt_actions',
        cellRenderer: src_app_ddt_order_actions_ddt_order_actions_component__WEBPACK_IMPORTED_MODULE_6__.DdtOrderActionsComponent,
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
        cellRenderer: (params) => {
            if (params.value == "0000-00-00" || params.value == "")
                return localeLang == 'it' ? orderGridHeaders.it.Pending : orderGridHeaders.en.Pending;
            else
                return new Date(params.value).toLocaleDateString('it-IT');
        }
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.EstimatedDeliveryDate : orderGridHeaders.en.EstimatedDeliveryDate,
        field: 'd_consegna_prevista',
        editable: false,
        cellRenderer: (params) => {
            if (params.value == "0000-00-00" || params.value == "")
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
        cellRenderer: src_app_button_supply_details_button_supply_details_component__WEBPACK_IMPORTED_MODULE_5__.ButtonSupplyDetailsComponent,
        autoHeight: false
    }
];
//===============================================================================================================
//LOANS
//grid config for user 210
const gridConfigLoans210 = [
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ID : orderGridHeaders.en.ID,
        field: 'id',
        editable: false,
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ReferenceYear : orderGridHeaders.en.ReferenceYear,
        field: 'anno',
        editable: false
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ReferenceMonth : orderGridHeaders.en.ReferenceMonth,
        field: 'mese',
        editable: false
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.UserFrom : orderGridHeaders.en.UserFrom,
        field: 'full_username_from',
        editable: false,
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Recipient : orderGridHeaders.en.Recipient,
        field: 'full_username_to',
        editable: false,
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.LoanDate : orderGridHeaders.en.LoanDate,
        field: 'd_ordine',
        editable: false,
        cellRenderer: (params) => {
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
        cellRenderer: src_app_button_loan_details_button_loan_details_component__WEBPACK_IMPORTED_MODULE_3__.ButtonLoanDetailsComponent,
        autoHeight: false,
    }
];
//grid config for user 220
const gridConfigLoans220 = [
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ID : orderGridHeaders.en.ID,
        field: 'id',
        editable: false,
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ReferenceYear : orderGridHeaders.en.ReferenceYear,
        field: 'anno',
        editable: false
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.ReferenceMonth : orderGridHeaders.en.ReferenceMonth,
        field: 'mese',
        editable: false
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.UserFrom : orderGridHeaders.en.UserFrom,
        field: 'full_username_from',
        editable: false,
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.Recipient : orderGridHeaders.en.Recipient,
        field: 'full_username_to',
        editable: false,
    },
    {
        headerName: localeLang == 'it' ? orderGridHeaders.it.LoanDate : orderGridHeaders.en.LoanDate,
        field: 'd_ordine',
        editable: false,
        cellRenderer: (params) => {
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
        cellRenderer: src_app_button_loan_details_button_loan_details_component__WEBPACK_IMPORTED_MODULE_3__.ButtonLoanDetailsComponent,
        autoHeight: false,
    }
];
/**
 *
 * The following configs need to be used in the
 * [defaultColDef] attribute of the <ag-grid-angular> tag
 *
 */
const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true
};
//===============================================================================================================
/**
 *
 * GRID LOCALE
 *
 */
const AG_GRID_LOCALE_EN = {
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
    rowDragRows: 'rows',
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
    ariaIndeterminate: 'indeterminate',
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
};
const AG_GRID_LOCALE_IT = {
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
    rowDragRows: 'righe',
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
    ariaIndeterminate: 'indeterminate',
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
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map