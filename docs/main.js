(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_authLocal_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/authLocal.guard */ "./src/app/guards/authLocal.guard.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_palistas_palistas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/palistas/palistas.component */ "./src/app/components/palistas/palistas.component.ts");
/* harmony import */ var _components_palistas_f_palistas_f_palistas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/palistas/f-palistas/f-palistas.component */ "./src/app/components/palistas/f-palistas/f-palistas.component.ts");
/* harmony import */ var _components_inscripciones_inscripciones_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/inscripciones/inscripciones.component */ "./src/app/components/inscripciones/inscripciones.component.ts");
/* harmony import */ var _components_inscripciones_f_inscripciones_f_inscripciones_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/inscripciones/f-inscripciones/f-inscripciones.component */ "./src/app/components/inscripciones/f-inscripciones/f-inscripciones.component.ts");
/* harmony import */ var _components_clubes_clubes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/clubes/clubes.component */ "./src/app/components/clubes/clubes.component.ts");
/* harmony import */ var _components_clubes_f_clubes_f_clubes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/clubes/f-clubes/f-clubes.component */ "./src/app/components/clubes/f-clubes/f-clubes.component.ts");
/* harmony import */ var _components_subir_logo_subir_logo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/subir-logo/subir-logo.component */ "./src/app/components/subir-logo/subir-logo.component.ts");
/* harmony import */ var _components_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/categorias/categorias.component */ "./src/app/components/categorias/categorias.component.ts");
/* harmony import */ var _components_categorias_f_categorias_f_categorias_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/categorias/f-categorias/f-categorias.component */ "./src/app/components/categorias/f-categorias/f-categorias.component.ts");
/* harmony import */ var _pruebas_empleados_empleados_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pruebas/empleados/empleados.component */ "./src/app/pruebas/empleados/empleados.component.ts");
/* harmony import */ var _pruebas_empleados_f_empleados_f_empleados_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pruebas/empleados/f-empleados/f-empleados.component */ "./src/app/pruebas/empleados/f-empleados/f-empleados.component.ts");
/* harmony import */ var _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/usuarios/usuarios.component */ "./src/app/components/usuarios/usuarios.component.ts");
/* harmony import */ var _components_usuarios_f_usuarios_f_usuarios_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/usuarios/f-usuarios/f-usuarios.component */ "./src/app/components/usuarios/f-usuarios/f-usuarios.component.ts");
/* harmony import */ var _components_distancias_distancias_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/distancias/distancias.component */ "./src/app/components/distancias/distancias.component.ts");
/* harmony import */ var _components_distancias_f_distancias_f_distancias_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/distancias/f-distancias/f-distancias.component */ "./src/app/components/distancias/f-distancias/f-distancias.component.ts");
/* harmony import */ var _components_competencias_competencias_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/competencias/competencias.component */ "./src/app/components/competencias/competencias.component.ts");
/* harmony import */ var _components_competencias_f_competencias_f_competencias_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/competencias/f-competencias/f-competencias.component */ "./src/app/components/competencias/f-competencias/f-competencias.component.ts");
/* harmony import */ var _components_consola_consola_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/consola/consola.component */ "./src/app/components/consola/consola.component.ts");
/* harmony import */ var _components_mcompetencia_importar_importar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/mcompetencia/importar/importar.component */ "./src/app/components/mcompetencia/importar/importar.component.ts");
/* harmony import */ var _components_mcompetencia_generar_series_generar_series_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/mcompetencia/generar-series/generar-series.component */ "./src/app/components/mcompetencia/generar-series/generar-series.component.ts");
/* harmony import */ var _components_mcompetencia_series_cargar_tiempos_cargar_tiempos_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/mcompetencia/series/cargar-tiempos/cargar-tiempos.component */ "./src/app/components/mcompetencia/series/cargar-tiempos/cargar-tiempos.component.ts");
/* harmony import */ var _components_mcompetencia_inicializar_competencia_inicializar_competencia_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/mcompetencia/inicializar-competencia/inicializar-competencia.component */ "./src/app/components/mcompetencia/inicializar-competencia/inicializar-competencia.component.ts");
/* harmony import */ var _components_mcompetencia_redireccionar_login_redireccionar_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/mcompetencia/redireccionar-login/redireccionar-login.component */ "./src/app/components/mcompetencia/redireccionar-login/redireccionar-login.component.ts");
/* harmony import */ var _components_armar_equipos_armar_equipos_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/armar-equipos/armar-equipos.component */ "./src/app/components/armar-equipos/armar-equipos.component.ts");
/* harmony import */ var _components_armar_equipos_f_armar_equipos_f_armar_equipos_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/armar-equipos/f-armar-equipos/f-armar-equipos.component */ "./src/app/components/armar-equipos/f-armar-equipos/f-armar-equipos.component.ts");
/* harmony import */ var _pruebas_ProgramacionFuncional_flat_flat_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pruebas/ProgramacionFuncional/flat/flat.component */ "./src/app/pruebas/ProgramacionFuncional/flat/flat.component.ts");
/* harmony import */ var _components_inscripciones_consultar_inscripciones_consultar_inscripciones_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/inscripciones/consultar-inscripciones/consultar-inscripciones.component */ "./src/app/components/inscripciones/consultar-inscripciones/consultar-inscripciones.component.ts");
/* harmony import */ var _components_mcompetencia_series_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/mcompetencia/series/resultados/resultados.component */ "./src/app/components/mcompetencia/series/resultados/resultados.component.ts");
/* harmony import */ var _components_mcompetencia_series_series_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/mcompetencia/series/series.component */ "./src/app/components/mcompetencia/series/series.component.ts");
/* harmony import */ var _components_mcompetencia_series_asignar_numero_asignar_numero_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/mcompetencia/series/asignar-numero/asignar-numero.component */ "./src/app/components/mcompetencia/series/asignar-numero/asignar-numero.component.ts");
/* harmony import */ var _components_mcompetencia_series_editar_serie_editar_serie_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/mcompetencia/series/editar-serie/editar-serie.component */ "./src/app/components/mcompetencia/series/editar-serie/editar-serie.component.ts");
/* harmony import */ var _components_mcompetencia_semis_generar_semis_generar_semis_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/mcompetencia/semis/generar-semis/generar-semis.component */ "./src/app/components/mcompetencia/semis/generar-semis/generar-semis.component.ts");
/* harmony import */ var _components_mcompetencia_generar_finales_generar_finales_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/mcompetencia/generar-finales/generar-finales.component */ "./src/app/components/mcompetencia/generar-finales/generar-finales.component.ts");









































var competenciasRutas = [
    { path: 'competencias/palistas', component: _components_palistas_palistas_component__WEBPACK_IMPORTED_MODULE_8__["PalistasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'competencias/palistas/add', component: _components_palistas_f_palistas_f_palistas_component__WEBPACK_IMPORTED_MODULE_9__["FPalistasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'competencias/palistas/edit/:id', component: _components_palistas_f_palistas_f_palistas_component__WEBPACK_IMPORTED_MODULE_9__["FPalistasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'competencias/palistas/delete/:id', component: _components_palistas_f_palistas_f_palistas_component__WEBPACK_IMPORTED_MODULE_9__["FPalistasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'importar-inscripciones', component: _components_mcompetencia_importar_importar_component__WEBPACK_IMPORTED_MODULE_26__["ImportarComponent"] },
    { path: 'generar-carreras', component: _components_mcompetencia_generar_series_generar_series_component__WEBPACK_IMPORTED_MODULE_27__["GenerarSeriesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'editar-serie', component: _components_mcompetencia_series_editar_serie_editar_serie_component__WEBPACK_IMPORTED_MODULE_38__["EditarSerieComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'semi-finales', component: _components_mcompetencia_semis_generar_semis_generar_semis_component__WEBPACK_IMPORTED_MODULE_39__["GenerarSemisComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'finales', component: _components_mcompetencia_generar_finales_generar_finales_component__WEBPACK_IMPORTED_MODULE_40__["GenerarFinalesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'carreras/:tipoCarrera', component: _components_mcompetencia_series_series_component__WEBPACK_IMPORTED_MODULE_36__["SeriesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'series/asignar-numero/:tipoCarrera/:id', component: _components_mcompetencia_series_asignar_numero_asignar_numero_component__WEBPACK_IMPORTED_MODULE_37__["AsignarNumeroComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'series/cargar-tiempos/:tipoCarrera/:id', component: _components_mcompetencia_series_cargar_tiempos_cargar_tiempos_component__WEBPACK_IMPORTED_MODULE_28__["CargarTiemposComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'series/resultados/:tipoCarrera/:id', component: _components_mcompetencia_series_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_35__["ResultadosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
];
var routes = [
    // { path: 'prueba', component: MockGuardarComponent },
    // { path: 'pruebas/download', component: DownloadComponent },
    { path: 'consultar-inscripciones', component: _components_inscripciones_consultar_inscripciones_consultar_inscripciones_component__WEBPACK_IMPORTED_MODULE_34__["ConsultarInscripcionesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'flat', component: _pruebas_ProgramacionFuncional_flat_flat_component__WEBPACK_IMPORTED_MODULE_33__["FlatComponent"] },
    { path: 'redireccionar-login', component: _components_mcompetencia_redireccionar_login_redireccionar_login_component__WEBPACK_IMPORTED_MODULE_30__["RedireccionarLoginComponent"] },
    { path: 'inicializar-competencia', component: _components_mcompetencia_inicializar_competencia_inicializar_competencia_component__WEBPACK_IMPORTED_MODULE_29__["InicializarCompetenciaComponent"] }
].concat(competenciasRutas, [
    { path: 'armar-equipos', component: _components_armar_equipos_armar_equipos_component__WEBPACK_IMPORTED_MODULE_31__["ArmarEquiposComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'armar-equipos/add', component: _components_armar_equipos_f_armar_equipos_f_armar_equipos_component__WEBPACK_IMPORTED_MODULE_32__["FArmarEquiposComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'armar-equipos/edit/:id', component: _components_armar_equipos_f_armar_equipos_f_armar_equipos_component__WEBPACK_IMPORTED_MODULE_32__["FArmarEquiposComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'armar-equipos/delete/:id', component: _components_armar_equipos_f_armar_equipos_f_armar_equipos_component__WEBPACK_IMPORTED_MODULE_32__["FArmarEquiposComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'consola', component: _components_consola_consola_component__WEBPACK_IMPORTED_MODULE_25__["ConsolaComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'usuarios', component: _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_19__["UsuariosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'usuarios/add', component: _components_usuarios_f_usuarios_f_usuarios_component__WEBPACK_IMPORTED_MODULE_20__["FUsuariosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'usuarios/edit/:id', component: _components_usuarios_f_usuarios_f_usuarios_component__WEBPACK_IMPORTED_MODULE_20__["FUsuariosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'usuarios/delete/:id', component: _components_usuarios_f_usuarios_f_usuarios_component__WEBPACK_IMPORTED_MODULE_20__["FUsuariosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'distancias/:competencia', component: _components_distancias_distancias_component__WEBPACK_IMPORTED_MODULE_21__["DistanciasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'distancias', component: _components_distancias_distancias_component__WEBPACK_IMPORTED_MODULE_21__["DistanciasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'distancias/:competencia/:accion', component: _components_distancias_f_distancias_f_distancias_component__WEBPACK_IMPORTED_MODULE_22__["FDistanciasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'distancias/:competencia/:accion/:id', component: _components_distancias_f_distancias_f_distancias_component__WEBPACK_IMPORTED_MODULE_22__["FDistanciasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'distancias/delete/:id', component: _components_distancias_f_distancias_f_distancias_component__WEBPACK_IMPORTED_MODULE_22__["FDistanciasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'competencias', component: _components_competencias_competencias_component__WEBPACK_IMPORTED_MODULE_23__["CompetenciasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'competencias/add', component: _components_competencias_f_competencias_f_competencias_component__WEBPACK_IMPORTED_MODULE_24__["FCompetenciasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'competencias/edit/:id', component: _components_competencias_f_competencias_f_competencias_component__WEBPACK_IMPORTED_MODULE_24__["FCompetenciasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'competencias/delete/:id', component: _components_competencias_f_competencias_f_competencias_component__WEBPACK_IMPORTED_MODULE_24__["FCompetenciasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'empleados', component: _pruebas_empleados_empleados_component__WEBPACK_IMPORTED_MODULE_17__["EmpleadosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'empleados/add', component: _pruebas_empleados_f_empleados_f_empleados_component__WEBPACK_IMPORTED_MODULE_18__["FEmpleadosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'empleados/edit/:id', component: _pruebas_empleados_f_empleados_f_empleados_component__WEBPACK_IMPORTED_MODULE_18__["FEmpleadosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'empleados/delete/:id', component: _pruebas_empleados_f_empleados_f_empleados_component__WEBPACK_IMPORTED_MODULE_18__["FEmpleadosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'clubes', component: _components_clubes_clubes_component__WEBPACK_IMPORTED_MODULE_12__["ClubesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'clubes/add', component: _components_clubes_f_clubes_f_clubes_component__WEBPACK_IMPORTED_MODULE_13__["FClubesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'clubes/edit/:id', component: _components_clubes_f_clubes_f_clubes_component__WEBPACK_IMPORTED_MODULE_13__["FClubesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'clubes/delete/:id', component: _components_clubes_f_clubes_f_clubes_component__WEBPACK_IMPORTED_MODULE_13__["FClubesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'clubes/logo/:id', component: _components_subir_logo_subir_logo_component__WEBPACK_IMPORTED_MODULE_14__["SubirLogoComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'categorias', component: _components_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_15__["CategoriasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'categorias/add', component: _components_categorias_f_categorias_f_categorias_component__WEBPACK_IMPORTED_MODULE_16__["FCategoriasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'categorias/edit/:id', component: _components_categorias_f_categorias_f_categorias_component__WEBPACK_IMPORTED_MODULE_16__["FCategoriasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'categorias/delete/:id', component: _components_categorias_f_categorias_f_categorias_component__WEBPACK_IMPORTED_MODULE_16__["FCategoriasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'palistas', component: _components_palistas_palistas_component__WEBPACK_IMPORTED_MODULE_8__["PalistasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'palistas/add', component: _components_palistas_f_palistas_f_palistas_component__WEBPACK_IMPORTED_MODULE_9__["FPalistasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'palistas/edit/:id', component: _components_palistas_f_palistas_f_palistas_component__WEBPACK_IMPORTED_MODULE_9__["FPalistasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'palistas/delete/:id', component: _components_palistas_f_palistas_f_palistas_component__WEBPACK_IMPORTED_MODULE_9__["FPalistasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'inscripciones', component: _components_inscripciones_inscripciones_component__WEBPACK_IMPORTED_MODULE_10__["InscripcionesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'inscripciones/add', component: _components_inscripciones_f_inscripciones_f_inscripciones_component__WEBPACK_IMPORTED_MODULE_11__["FInscripcionesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'inscripciones/edit/:id', component: _components_inscripciones_f_inscripciones_f_inscripciones_component__WEBPACK_IMPORTED_MODULE_11__["FInscripcionesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'inscripciones/delete/:id', component: _components_inscripciones_f_inscripciones_f_inscripciones_component__WEBPACK_IMPORTED_MODULE_11__["FInscripcionesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], canActivate: [_guards_authLocal_guard__WEBPACK_IMPORTED_MODULE_4__["AuthLocalGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: '', redirectTo: '/', pathMatch: 'full' }
]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\">\r\n  <div class=\"spinner\" [class.d-none]=\"!loading\">\r\n    <i class=\"fa fa-spinner fa-spin fa-4x\"></i>\r\n  </div>\r\n  \r\n  <app-navbar></app-navbar>\r\n\r\n  <app-mensajes></app-mensajes>\r\n  \r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/spinner.service */ "./src/app/services/spinner.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, spinner) {
        var _this = this;
        this.router = router;
        this.spinner = spinner;
        this.title = 'febokac';
        this.loading = false;
        router.events.subscribe(function (routerEvent) { return _this.checkRouterEvent(routerEvent); });
        spinner.getSpinner().subscribe(function (switcher) { return _this.loading = switcher; });
    }
    AppComponent.prototype.checkRouterEvent = function (routerEvent) {
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this.loading = true;
        }
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this.loading = false;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_palistas_palistas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/palistas/palistas.component */ "./src/app/components/palistas/palistas.component.ts");
/* harmony import */ var _components_palistas_f_palistas_f_palistas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/palistas/f-palistas/f-palistas.component */ "./src/app/components/palistas/f-palistas/f-palistas.component.ts");
/* harmony import */ var _components_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/mensajes/mensajes.component */ "./src/app/components/mensajes/mensajes.component.ts");
/* harmony import */ var _components_inscripciones_inscripciones_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/inscripciones/inscripciones.component */ "./src/app/components/inscripciones/inscripciones.component.ts");
/* harmony import */ var _components_inscripciones_f_inscripciones_f_inscripciones_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/inscripciones/f-inscripciones/f-inscripciones.component */ "./src/app/components/inscripciones/f-inscripciones/f-inscripciones.component.ts");
/* harmony import */ var _components_clubes_clubes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/clubes/clubes.component */ "./src/app/components/clubes/clubes.component.ts");
/* harmony import */ var _components_clubes_f_clubes_f_clubes_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/clubes/f-clubes/f-clubes.component */ "./src/app/components/clubes/f-clubes/f-clubes.component.ts");
/* harmony import */ var _components_subir_logo_subir_logo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/subir-logo/subir-logo.component */ "./src/app/components/subir-logo/subir-logo.component.ts");
/* harmony import */ var _components_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/categorias/categorias.component */ "./src/app/components/categorias/categorias.component.ts");
/* harmony import */ var _components_categorias_f_categorias_f_categorias_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/categorias/f-categorias/f-categorias.component */ "./src/app/components/categorias/f-categorias/f-categorias.component.ts");
/* harmony import */ var _pruebas_mock_guardar_mock_guardar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pruebas/mock-guardar/mock-guardar.component */ "./src/app/pruebas/mock-guardar/mock-guardar.component.ts");
/* harmony import */ var _pruebas_empleados_empleados_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pruebas/empleados/empleados.component */ "./src/app/pruebas/empleados/empleados.component.ts");
/* harmony import */ var _pruebas_empleados_f_empleados_f_empleados_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pruebas/empleados/f-empleados/f-empleados.component */ "./src/app/pruebas/empleados/f-empleados/f-empleados.component.ts");
/* harmony import */ var _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/usuarios/usuarios.component */ "./src/app/components/usuarios/usuarios.component.ts");
/* harmony import */ var _components_usuarios_f_usuarios_f_usuarios_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/usuarios/f-usuarios/f-usuarios.component */ "./src/app/components/usuarios/f-usuarios/f-usuarios.component.ts");
/* harmony import */ var _components_distancias_distancias_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/distancias/distancias.component */ "./src/app/components/distancias/distancias.component.ts");
/* harmony import */ var _components_distancias_f_distancias_f_distancias_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/distancias/f-distancias/f-distancias.component */ "./src/app/components/distancias/f-distancias/f-distancias.component.ts");
/* harmony import */ var _components_competencias_competencias_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/competencias/competencias.component */ "./src/app/components/competencias/competencias.component.ts");
/* harmony import */ var _components_competencias_f_competencias_f_competencias_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/competencias/f-competencias/f-competencias.component */ "./src/app/components/competencias/f-competencias/f-competencias.component.ts");
/* harmony import */ var _components_consola_consola_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/consola/consola.component */ "./src/app/components/consola/consola.component.ts");
/* harmony import */ var _components_modal_competencia_modal_competencia_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/modal-competencia/modal-competencia.component */ "./src/app/components/modal-competencia/modal-competencia.component.ts");
/* harmony import */ var _pruebas_download_download_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pruebas/download/download.component */ "./src/app/pruebas/download/download.component.ts");
/* harmony import */ var _components_modal_download_modal_download_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/modal-download/modal-download.component */ "./src/app/components/modal-download/modal-download.component.ts");
/* harmony import */ var _components_mcompetencia_importar_importar_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/mcompetencia/importar/importar.component */ "./src/app/components/mcompetencia/importar/importar.component.ts");
/* harmony import */ var _components_navbar_navbar_competencias_navbar_competencias_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/navbar/navbar-competencias/navbar-competencias.component */ "./src/app/components/navbar/navbar-competencias/navbar-competencias.component.ts");
/* harmony import */ var _components_navbar_navbar_inscripciones_navbar_inscripciones_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/navbar/navbar-inscripciones/navbar-inscripciones.component */ "./src/app/components/navbar/navbar-inscripciones/navbar-inscripciones.component.ts");
/* harmony import */ var _components_navbar_navbar_administracion_navbar_administracion_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/navbar/navbar-administracion/navbar-administracion.component */ "./src/app/components/navbar/navbar-administracion/navbar-administracion.component.ts");
/* harmony import */ var _components_mcompetencia_generar_series_generar_series_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/mcompetencia/generar-series/generar-series.component */ "./src/app/components/mcompetencia/generar-series/generar-series.component.ts");
/* harmony import */ var _components_mcompetencia_series_cargar_tiempos_cargar_tiempos_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/mcompetencia/series/cargar-tiempos/cargar-tiempos.component */ "./src/app/components/mcompetencia/series/cargar-tiempos/cargar-tiempos.component.ts");
/* harmony import */ var _components_mcompetencia_inicializar_competencia_inicializar_competencia_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/mcompetencia/inicializar-competencia/inicializar-competencia.component */ "./src/app/components/mcompetencia/inicializar-competencia/inicializar-competencia.component.ts");
/* harmony import */ var _components_mcompetencia_redireccionar_login_redireccionar_login_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/mcompetencia/redireccionar-login/redireccionar-login.component */ "./src/app/components/mcompetencia/redireccionar-login/redireccionar-login.component.ts");
/* harmony import */ var _components_armar_equipos_armar_equipos_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/armar-equipos/armar-equipos.component */ "./src/app/components/armar-equipos/armar-equipos.component.ts");
/* harmony import */ var _components_armar_equipos_f_armar_equipos_f_armar_equipos_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/armar-equipos/f-armar-equipos/f-armar-equipos.component */ "./src/app/components/armar-equipos/f-armar-equipos/f-armar-equipos.component.ts");
/* harmony import */ var _pruebas_ProgramacionFuncional_flat_flat_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pruebas/ProgramacionFuncional/flat/flat.component */ "./src/app/pruebas/ProgramacionFuncional/flat/flat.component.ts");
/* harmony import */ var _components_inscripciones_consultar_inscripciones_consultar_inscripciones_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/inscripciones/consultar-inscripciones/consultar-inscripciones.component */ "./src/app/components/inscripciones/consultar-inscripciones/consultar-inscripciones.component.ts");
/* harmony import */ var _components_inscripciones_consultar_inscripciones_filtro_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/inscripciones/consultar-inscripciones/filtro.component */ "./src/app/components/inscripciones/consultar-inscripciones/filtro.component.ts");
/* harmony import */ var _components_mcompetencia_series_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/mcompetencia/series/resultados/resultados.component */ "./src/app/components/mcompetencia/series/resultados/resultados.component.ts");
/* harmony import */ var _components_mcompetencia_series_series_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/mcompetencia/series/series.component */ "./src/app/components/mcompetencia/series/series.component.ts");
/* harmony import */ var _components_mcompetencia_series_asignar_numero_asignar_numero_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/mcompetencia/series/asignar-numero/asignar-numero.component */ "./src/app/components/mcompetencia/series/asignar-numero/asignar-numero.component.ts");
/* harmony import */ var _directives_time_format_directive__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./directives/time-format.directive */ "./src/app/directives/time-format.directive.ts");
/* harmony import */ var _components_mcompetencia_series_series_header_series_header_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/mcompetencia/series/series-header/series-header.component */ "./src/app/components/mcompetencia/series/series-header/series-header.component.ts");
/* harmony import */ var _components_mcompetencia_series_editar_serie_editar_serie_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/mcompetencia/series/editar-serie/editar-serie.component */ "./src/app/components/mcompetencia/series/editar-serie/editar-serie.component.ts");
/* harmony import */ var _components_mcompetencia_series_editar_serie_filtro_serie_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/mcompetencia/series/editar-serie/filtro-serie.component */ "./src/app/components/mcompetencia/series/editar-serie/filtro-serie.component.ts");
/* harmony import */ var _components_mcompetencia_semis_generar_semis_generar_semis_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/mcompetencia/semis/generar-semis/generar-semis.component */ "./src/app/components/mcompetencia/semis/generar-semis/generar-semis.component.ts");
/* harmony import */ var _components_mcompetencia_semis_generar_semis_filtro_semis_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/mcompetencia/semis/generar-semis/filtro-semis.component */ "./src/app/components/mcompetencia/semis/generar-semis/filtro-semis.component.ts");
/* harmony import */ var _components_mcompetencia_generar_finales_generar_finales_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/mcompetencia/generar-finales/generar-finales.component */ "./src/app/components/mcompetencia/generar-finales/generar-finales.component.ts");
/* harmony import */ var _components_mcompetencia_generar_finales_filtro_finales_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/mcompetencia/generar-finales/filtro-finales.component */ "./src/app/components/mcompetencia/generar-finales/filtro-finales.component.ts");


































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
                _components_palistas_palistas_component__WEBPACK_IMPORTED_MODULE_18__["PalistasComponent"],
                _components_palistas_f_palistas_f_palistas_component__WEBPACK_IMPORTED_MODULE_19__["FPalistasComponent"],
                _components_mensajes_mensajes_component__WEBPACK_IMPORTED_MODULE_20__["MensajesComponent"],
                _components_inscripciones_inscripciones_component__WEBPACK_IMPORTED_MODULE_21__["InscripcionesComponent"],
                _components_inscripciones_f_inscripciones_f_inscripciones_component__WEBPACK_IMPORTED_MODULE_22__["FInscripcionesComponent"],
                _components_clubes_clubes_component__WEBPACK_IMPORTED_MODULE_23__["ClubesComponent"],
                _components_clubes_f_clubes_f_clubes_component__WEBPACK_IMPORTED_MODULE_24__["FClubesComponent"],
                _components_subir_logo_subir_logo_component__WEBPACK_IMPORTED_MODULE_25__["SubirLogoComponent"],
                _components_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_26__["CategoriasComponent"],
                _components_categorias_f_categorias_f_categorias_component__WEBPACK_IMPORTED_MODULE_27__["FCategoriasComponent"],
                _pruebas_mock_guardar_mock_guardar_component__WEBPACK_IMPORTED_MODULE_28__["MockGuardarComponent"],
                _pruebas_empleados_empleados_component__WEBPACK_IMPORTED_MODULE_29__["EmpleadosComponent"],
                _pruebas_empleados_f_empleados_f_empleados_component__WEBPACK_IMPORTED_MODULE_30__["FEmpleadosComponent"],
                _components_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_31__["UsuariosComponent"],
                _components_usuarios_f_usuarios_f_usuarios_component__WEBPACK_IMPORTED_MODULE_32__["FUsuariosComponent"],
                _components_distancias_distancias_component__WEBPACK_IMPORTED_MODULE_33__["DistanciasComponent"],
                _components_distancias_f_distancias_f_distancias_component__WEBPACK_IMPORTED_MODULE_34__["FDistanciasComponent"],
                _components_competencias_competencias_component__WEBPACK_IMPORTED_MODULE_35__["CompetenciasComponent"],
                _components_competencias_f_competencias_f_competencias_component__WEBPACK_IMPORTED_MODULE_36__["FCompetenciasComponent"],
                _components_consola_consola_component__WEBPACK_IMPORTED_MODULE_37__["ConsolaComponent"],
                _components_modal_competencia_modal_competencia_component__WEBPACK_IMPORTED_MODULE_38__["ModalCompetenciaComponent"],
                _pruebas_download_download_component__WEBPACK_IMPORTED_MODULE_39__["DownloadComponent"],
                _components_modal_download_modal_download_component__WEBPACK_IMPORTED_MODULE_40__["ModalDownloadComponent"],
                _components_mcompetencia_importar_importar_component__WEBPACK_IMPORTED_MODULE_41__["ImportarComponent"],
                _components_navbar_navbar_competencias_navbar_competencias_component__WEBPACK_IMPORTED_MODULE_42__["NavbarCompetenciasComponent"],
                _components_navbar_navbar_inscripciones_navbar_inscripciones_component__WEBPACK_IMPORTED_MODULE_43__["NavbarInscripcionesComponent"],
                _components_navbar_navbar_administracion_navbar_administracion_component__WEBPACK_IMPORTED_MODULE_44__["NavbarAdministracionComponent"],
                _components_mcompetencia_generar_series_generar_series_component__WEBPACK_IMPORTED_MODULE_45__["GenerarSeriesComponent"],
                _components_mcompetencia_series_cargar_tiempos_cargar_tiempos_component__WEBPACK_IMPORTED_MODULE_46__["CargarTiemposComponent"],
                _components_mcompetencia_inicializar_competencia_inicializar_competencia_component__WEBPACK_IMPORTED_MODULE_47__["InicializarCompetenciaComponent"],
                _components_mcompetencia_redireccionar_login_redireccionar_login_component__WEBPACK_IMPORTED_MODULE_48__["RedireccionarLoginComponent"],
                _components_armar_equipos_armar_equipos_component__WEBPACK_IMPORTED_MODULE_49__["ArmarEquiposComponent"],
                _components_armar_equipos_f_armar_equipos_f_armar_equipos_component__WEBPACK_IMPORTED_MODULE_50__["FArmarEquiposComponent"],
                _pruebas_ProgramacionFuncional_flat_flat_component__WEBPACK_IMPORTED_MODULE_51__["FlatComponent"],
                _components_inscripciones_consultar_inscripciones_consultar_inscripciones_component__WEBPACK_IMPORTED_MODULE_52__["ConsultarInscripcionesComponent"],
                _components_inscripciones_consultar_inscripciones_filtro_component__WEBPACK_IMPORTED_MODULE_53__["FiltroComponent"],
                _components_mcompetencia_series_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_54__["ResultadosComponent"],
                _components_mcompetencia_series_series_component__WEBPACK_IMPORTED_MODULE_55__["SeriesComponent"],
                _components_mcompetencia_series_asignar_numero_asignar_numero_component__WEBPACK_IMPORTED_MODULE_56__["AsignarNumeroComponent"],
                _directives_time_format_directive__WEBPACK_IMPORTED_MODULE_57__["TimeFormatDirective"],
                _components_mcompetencia_series_series_header_series_header_component__WEBPACK_IMPORTED_MODULE_58__["SeriesHeaderComponent"],
                _components_mcompetencia_series_editar_serie_editar_serie_component__WEBPACK_IMPORTED_MODULE_59__["EditarSerieComponent"],
                _components_mcompetencia_series_editar_serie_filtro_serie_component__WEBPACK_IMPORTED_MODULE_60__["FiltroSerieComponent"],
                _components_mcompetencia_semis_generar_semis_generar_semis_component__WEBPACK_IMPORTED_MODULE_61__["GenerarSemisComponent"],
                _components_mcompetencia_semis_generar_semis_filtro_semis_component__WEBPACK_IMPORTED_MODULE_62__["FiltroSemisComponent"],
                _components_mcompetencia_generar_finales_generar_finales_component__WEBPACK_IMPORTED_MODULE_63__["GenerarFinalesComponent"],
                _components_mcompetencia_generar_finales_filtro_finales_component__WEBPACK_IMPORTED_MODULE_64__["FiltroFinalesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"].enablePersistence(),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"]
            ],
            providers: [
                { provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["FirestoreSettingsToken"], useValue: {} },
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/armar-equipos/armar-equipos.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/armar-equipos/armar-equipos.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\r\n    <div class=\"card-header d-flex\">\r\n      Armar equipos\r\n      <a routerLink=\"/armar-equipos/add\" class=\"text-primary ml-auto\">\r\n        <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  \r\n  <table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th> Genero </th>\r\n        <th> Categoría </th>\r\n        <th> Distancia </th>\r\n        <th> Palistas </th>\r\n        <th> </th>\r\n      </tr>\r\n    </thead>\r\n  \r\n    <tbody>\r\n      <tr *ngFor=\"let registro of tabla\">\r\n        <td routerLink=\"modificar()\"> {{ registro.genero }} </td>\r\n        <td routerLink=\"modificar()\"> {{ registro.categoria }} </td>\r\n        <td routerLink=\"modificar()\"> {{ registro.distancia }} </td>\r\n        <td routerLink=\"modificar()\"> {{ registro.palista1 + ', ' + registro.palista2 + ', ' + \r\n                                         registro.palista3 + ', ' + registro.palista4 }} </td>\r\n        <td class=\"text-center\">\r\n          <a routerLink=\"/armar-equipos/delete/{{registro.id}}\" class=\"text-danger\">\r\n            <i class=\"fa fa-minus-circle fa-2x\"></i>\r\n          </a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  \r\n  </table>"

/***/ }),

/***/ "./src/app/components/armar-equipos/armar-equipos.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/armar-equipos/armar-equipos.component.ts ***!
  \*********************************************************************/
/*! exports provided: ArmarEquiposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmarEquiposComponent", function() { return ArmarEquiposComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_equipos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/equipos.service */ "./src/app/services/equipos.service.ts");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");




var ArmarEquiposComponent = /** @class */ (function () {
    function ArmarEquiposComponent(dataService, msgService) {
        this.dataService = dataService;
        this.msgService = msgService;
    }
    ArmarEquiposComponent.prototype.ngOnInit = function () {
        this.getRecords();
    };
    ArmarEquiposComponent.prototype.getRecords = function () {
        var _this = this;
        this.dataService.getRecords$().subscribe(function (data) {
            _this.tabla = data;
        });
    };
    ArmarEquiposComponent.prototype.modificar = function () {
        this.msgService.sendMessage('No puede modificar equipos, eliminelo y creelo nuevamente', 'alert-danger');
    };
    ArmarEquiposComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-armar-equipos',
            template: __webpack_require__(/*! ./armar-equipos.component.html */ "./src/app/components/armar-equipos/armar-equipos.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_equipos_service__WEBPACK_IMPORTED_MODULE_2__["EquiposService"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]])
    ], ArmarEquiposComponent);
    return ArmarEquiposComponent;
}());



/***/ }),

/***/ "./src/app/components/armar-equipos/f-armar-equipos/f-armar-equipos.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/armar-equipos/f-armar-equipos/f-armar-equipos.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n  \r\n      <div class=\"card mt-3\">\r\n        <div class=\"card-header\" [ngClass]=\"cardHeaderStyle\">\r\n          {{ titulo + \" equipos\" }}\r\n        </div>\r\n  \r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"genero\" class=\"control-label\"> Genero </label>\r\n                  <select formControlName=\"genero\" required\r\n                    (change)=\"onChangeGenero(genero.value)\"\r\n                    [class.is-invalid]=\"genero.invalid && genero.touched\" class=\"custom-select\" > \r\n                    <option value=\"genero\"></option>\r\n                    <option value=\"Masculino\">Masculino</option>\r\n                    <option value=\"Femenino\">Femenino</option>\r\n                  </select>\r\n                  <small class=\"text-danger\" [class.d-none]=\"genero.untouched || !genero.hasError('required')\">El genero es requerido</small>\r\n                  <small class=\"text-danger\" [class.d-none]=\"genero.untouched || !genero.hasError('invalidGenero')\">Seleccione el genero</small>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"col-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"categoria\" class=\"control-label\"> Categoría </label>\r\n                  <select formControlName=\"categoria\" required\r\n                    (change)=\"onChangeCategoria(genero.value, categoria.value)\"\r\n                    [class.is-invalid]=\"categoria.invalid && categoria.touched\" class=\"custom-select\">\r\n                    <option value=\"categoria\"></option>\r\n                    <option *ngFor=\"let registro of tblCategorias\" >{{ registro }}</option>\r\n                  </select>\r\n                  <small class=\"text-danger\" [class.d-none]=\"categoria.untouched || !categoria.hasError('required')\">La Categoría es requerida</small>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"distancia\" class=\"control-label\"> Distancia </label>\r\n                  <select formControlName=\"distancia\" required\r\n                    (change)=\"onChangeDistancia(genero.value, categoria.value, distancia.value)\"\r\n                    [class.is-invalid]=\"distancia.invalid && distancia.touched\" class=\"custom-select\">\r\n                    <option value=\"distancia\"></option>\r\n                    <option *ngFor=\"let registro of tblDistancias\" >{{ registro }}</option>\r\n                  </select>\r\n                  <small class=\"text-danger\" [class.d-none]=\"distancia.untouched || !distancia.hasError('required')\">La Categoría es requerida</small>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"palista1\" class=\"control-label\"> Palista </label>\r\n              <select formControlName=\"palista1\" required\r\n                (change)=\"onChangePalista1(palista1.value)\"\r\n                [class.is-invalid]=\"palista1.invalid && palista1.touched\" class=\"custom-select\">\r\n                <option value=\"palista1\"></option>\r\n                <option *ngFor=\"let registro of tblInscripciones\" >{{ registro }}</option>\r\n              </select>\r\n              <small class=\"text-danger\" [class.d-none]=\"palista1.untouched || !palista1.hasError('required')\">El palista es requerido</small>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <select formControlName=\"palista2\" required\r\n                (change)=\"onChangePalista2(palista2.value)\"\r\n                [class.is-invalid]=\"palista2.invalid && palista2.touched\" class=\"custom-select\">\r\n                <option value=\"palista2\"></option>\r\n                <option *ngFor=\"let registro of tblInscripciones2\" >{{ registro }}</option>\r\n              </select>\r\n              <small class=\"text-danger\" [class.d-none]=\"palista2.untouched || !palista2.hasError('required')\">El palista es requerido</small>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"titulo === 'Eliminar' || distancia.value.substr(0,2) === 'K4'\">\r\n              <div class=\"form-group\">\r\n                <select formControlName=\"palista3\" required\r\n                  (change)=\"onChangePalista3(palista3.value)\"\r\n                  [class.is-invalid]=\"palista3.invalid && palista3.touched\" class=\"custom-select\">\r\n                  <option value=\"palista3\"></option>\r\n                  <option *ngFor=\"let registro of tblInscripciones3\" >{{ registro }}</option>\r\n                </select>\r\n                <small class=\"text-danger\" [class.d-none]=\"palista3.untouched || !palista3.hasError('required')\">El palista es requerido</small>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <select formControlName=\"palista4\" required\r\n                  [class.is-invalid]=\"palista4.invalid && palista4.touched\" class=\"custom-select\">\r\n                  <option value=\"palista4\"></option>\r\n                  <option *ngFor=\"let registro of tblInscripciones4\" >{{ registro }}</option>\r\n                </select>\r\n                <small class=\"text-danger\" [class.d-none]=\"palista4.untouched || !palista4.hasError('required')\">El palista es requerido</small>\r\n              </div>\r\n            </ng-container>\r\n            \r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <button [disabled]=\"!miForm.valid && titulo !== 'Eliminar'\"\r\n                  [ngClass]=\"titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\r\n                  type=\"submit\" class=\"btn btn-block\">\r\n                  {{ titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\r\n                </button>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n                  Cancelar\r\n                </button>\r\n              </div>\r\n            </div>\r\n  \r\n          </form>\r\n  \r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/armar-equipos/f-armar-equipos/f-armar-equipos.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/armar-equipos/f-armar-equipos/f-armar-equipos.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FArmarEquiposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FArmarEquiposComponent", function() { return FArmarEquiposComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var src_app_services_equipos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/equipos.service */ "./src/app/services/equipos.service.ts");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var src_app_services_inscripciones_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/inscripciones.service */ "./src/app/services/inscripciones.service.ts");
/* harmony import */ var src_app_services_generar_carreras_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/generar-carreras.service */ "./src/app/services/generar-carreras.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");












var FArmarEquiposComponent = /** @class */ (function () {
    function FArmarEquiposComponent(dataService, categoriasService, inscripcionesService, generarCarreras, authService, fb, msgService, spinner, location, actRoute, router) {
        this.dataService = dataService;
        this.categoriasService = categoriasService;
        this.inscripcionesService = inscripcionesService;
        this.generarCarreras = generarCarreras;
        this.authService = authService;
        this.fb = fb;
        this.msgService = msgService;
        this.spinner = spinner;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.titulo = '';
        this.cardHeaderStyle = '';
        this.id = '';
        this.tblCategorias = [];
        this.categorias = [];
        this.tblDistancias = [];
        this.distancias = [];
        this.tblInscripciones = [];
        this.tblInscripciones2 = [];
        this.tblInscripciones3 = [];
        this.tblInscripciones4 = [];
        this.inscripciones = [];
    }
    FArmarEquiposComponent.prototype.ngOnInit = function () {
        this.usuario = this.authService.getUser();
        this.msgService.clearMessages();
        this.buildForm();
        this.setTblCategorias();
        this.setTblDistancias();
        this.setTblInscripciones();
        this.setState();
    };
    FArmarEquiposComponent.prototype.setTblCategorias = function () {
        var _this = this;
        this.categoriasService.getRecords$()
            .subscribe(function (data) {
            _this.tblCategorias = data.map(function (categoria) { return categoria.categoria; });
            _this.categorias = data;
        }, function (error) { return _this.msgService.sendMessage("Error al cargar la tabla de categorías: " + error.statusText, "alert-danger"); });
    };
    FArmarEquiposComponent.prototype.setTblDistancias = function () {
        var _this = this;
        this.inscripcionesService.getRecords$()
            .subscribe(function (data) {
            _this.distancias = _this.generarCarreras.flatCarreras(data)
                .filter(function (distancia) { return ['K2 ', 'K4 '].includes(distancia.distancia.substr(0, 3)); });
            _this.tblDistancias = _this.distancias.map(function (distancia) { return distancia.distancia; });
        }, function (error) { return _this.msgService.sendMessage("Error al cargar la tabla de distancias: " + error.statusText, "alert-danger"); });
    };
    FArmarEquiposComponent.prototype.setTblInscripciones = function () {
        var _this = this;
        this.inscripcionesService.getRecords$(this.usuario.club).subscribe(function (data) {
            _this.inscripciones = _this.generarCarreras.flatInscripciones(data);
            _this.tblInscripciones = _this.inscripciones.map(function (palista) { return palista.palista; });
            _this.tblInscripciones2 = _this.tblInscripciones.slice();
            _this.tblInscripciones3 = _this.tblInscripciones.slice();
            _this.tblInscripciones4 = _this.tblInscripciones.slice();
        }, function (error) { return _this.msgService.sendMessage("Error al cargar la tabla de palistas: " + error.statusText, "alert-danger"); });
    };
    FArmarEquiposComponent.prototype.setState = function () {
        var objTitulo = { add: 'Agregar', edit: 'Modificar', delete: 'Eliminar' };
        this.titulo = objTitulo[this.actRoute.snapshot.url[1].path];
        var objStyle = { add: 'bg-primary', edit: 'bg-warning', delete: 'bg-danger' };
        this.cardHeaderStyle = objStyle[this.actRoute.snapshot.url[1].path];
        this.id = this.actRoute.snapshot.paramMap.get('id');
        if (this.titulo !== 'Agregar') {
            this.setFormData();
        }
    };
    FArmarEquiposComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            genero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            categoria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            distancia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            palista1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            palista2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            palista3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            palista4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    FArmarEquiposComponent.prototype.setFormData = function () {
        var _this = this;
        this.dataService.getRecord$(this.id).subscribe(function (data) {
            _this.miForm.patchValue(data);
            console.log('Form valid?', _this.miForm.valid);
            console.log(_this.miForm.controls.genero.valid);
            console.log(_this.miForm.controls.categoria.valid);
            console.log(_this.miForm.controls.distancia.valid);
            console.log(_this.miForm.controls.palista1.valid);
            console.log(_this.miForm.controls.palista2.valid);
            console.log(_this.miForm.controls.palista3.valid);
        });
        if (this.titulo === 'Agregar') {
            this.miForm.controls.palista1.disable();
            this.miForm.controls.palista2.disable();
        }
        if (this.titulo === 'Eliminar') {
            this.miForm.controls.genero.disable();
            this.miForm.controls.categoria.disable();
            this.miForm.controls.distancia.disable();
            this.miForm.controls.palista1.disable();
            this.miForm.controls.palista2.disable();
            this.miForm.controls.palista3.disable();
            this.miForm.controls.palista4.disable();
        }
    };
    Object.defineProperty(FArmarEquiposComponent.prototype, "genero", {
        get: function () {
            return this.miForm.get('genero');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FArmarEquiposComponent.prototype, "categoria", {
        get: function () {
            return this.miForm.get('categoria');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FArmarEquiposComponent.prototype, "distancia", {
        get: function () {
            return this.miForm.get('distancia');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FArmarEquiposComponent.prototype, "palista1", {
        get: function () {
            return this.miForm.get('palista1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FArmarEquiposComponent.prototype, "palista2", {
        get: function () {
            return this.miForm.get('palista2');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FArmarEquiposComponent.prototype, "palista3", {
        get: function () {
            return this.miForm.get('palista3');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FArmarEquiposComponent.prototype, "palista4", {
        get: function () {
            return this.miForm.get('palista4');
        },
        enumerable: true,
        configurable: true
    });
    FArmarEquiposComponent.prototype.onSubmit = function () {
        this.spinner.on();
        switch (this.titulo) {
            case 'Agregar':
                this.aceptarAgregar();
                break;
            case 'Modificar':
                this.aceptarEditar();
                break;
            case 'Eliminar':
                this.aceptarEliminar();
                break;
        }
    };
    FArmarEquiposComponent.prototype.onChangeGenero = function (genero) {
        this.tblCategorias = this.categorias
            .filter(function (elemento) { return elemento.genero.includes(genero); })
            .map(function (categoria) { return categoria.categoria; });
        this.miForm.controls.categoria.setValue('');
        this.miForm.controls.distancia.setValue('');
        this.miForm.controls.palista1.setValue('');
        this.miForm.controls.palista2.setValue('');
    };
    FArmarEquiposComponent.prototype.onChangeCategoria = function (genero, categoria) {
        this.tblDistancias = this.distancias
            .filter(function (elemento) { return elemento.genero === genero && elemento.categoria === categoria; })
            .map(function (distancia) { return distancia.distancia; });
        this.miForm.controls.distancia.setValue('');
        this.miForm.controls.palista1.setValue('');
        this.miForm.controls.palista2.setValue('');
    };
    FArmarEquiposComponent.prototype.onChangeDistancia = function (genero, categoria, distancia) {
        this.tblInscripciones = this.inscripciones
            .filter(function (elemento) { return elemento.genero === genero && elemento.categoria === categoria && elemento.distancia === distancia; })
            .map(function (palista) { return palista.palista; });
        this.tblInscripciones2 = this.tblInscripciones.slice();
        this.miForm.controls.palista1.setValue('');
        this.miForm.controls.palista2.setValue('');
        if (distancia.substr(0, 2) === 'K4') {
            this.miForm.addControl('palista3', this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
            this.miForm.addControl('palista4', this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
        }
        else if (this.miForm.controls.palista3) {
            this.miForm.removeControl('palista3');
            this.miForm.removeControl('palista4');
        }
    };
    FArmarEquiposComponent.prototype.onChangePalista1 = function (palista) {
        this.tblInscripciones2 = this.tblInscripciones.slice();
        if (palista) {
            var indice = this.tblInscripciones2.indexOf(palista);
            if (indice > -1) {
                this.tblInscripciones2.splice(indice, 1);
            }
            this.miForm.controls.palista2.setValue('');
        }
    };
    FArmarEquiposComponent.prototype.onChangePalista2 = function (palista) {
        console.log(this.miForm.controls);
        if (this.miForm.controls.distancia.value.substr(0, 2) !== 'K4') {
            return;
        }
        this.tblInscripciones3 = this.tblInscripciones2.slice();
        if (palista) {
            var indice = this.tblInscripciones3.indexOf(palista);
            if (indice > -1) {
                this.tblInscripciones3.splice(indice, 1);
            }
            this.miForm.controls.palista3.setValue('');
        }
    };
    FArmarEquiposComponent.prototype.onChangePalista3 = function (palista) {
        this.tblInscripciones4 = this.tblInscripciones3.slice();
        if (palista) {
            var indice = this.tblInscripciones4.indexOf(palista);
            if (indice > -1) {
                this.tblInscripciones4.splice(indice, 1);
            }
            this.miForm.controls.palista4.setValue('');
        }
    };
    FArmarEquiposComponent.prototype.aceptarAgregar = function () {
        var _this = this;
        this.dataService.addRecord$(this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage('Equipo Agregado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.retornar(); });
    };
    FArmarEquiposComponent.prototype.aceptarEditar = function () {
        var _this = this;
        this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage('Equipo Actualizado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.retornar(); });
    };
    FArmarEquiposComponent.prototype.aceptarEliminar = function () {
        var _this = this;
        this.dataService.deleteRecord$(this.id).subscribe(function (data) { return _this.msgService.sendMessage('Equipo Eliminado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.retornar(); });
    };
    FArmarEquiposComponent.prototype.retornar = function () {
        this.spinner.off();
        this.router.navigate(['armar-equipos']);
    };
    FArmarEquiposComponent.prototype.goBack = function () {
        this.location.back();
    };
    FArmarEquiposComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-f-armar-equipos',
            template: __webpack_require__(/*! ./f-armar-equipos.component.html */ "./src/app/components/armar-equipos/f-armar-equipos/f-armar-equipos.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_equipos_service__WEBPACK_IMPORTED_MODULE_6__["EquiposService"],
            src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_7__["CategoriasService"],
            src_app_services_inscripciones_service__WEBPACK_IMPORTED_MODULE_9__["InscripcionesService"],
            src_app_services_generar_carreras_service__WEBPACK_IMPORTED_MODULE_10__["GenerarCarrerasService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"],
            src_app_services_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FArmarEquiposComponent);
    return FArmarEquiposComponent;
}());



/***/ }),

/***/ "./src/app/components/categorias/categorias.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/categorias/categorias.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\r\n  <div class=\"card-header d-flex\">\r\n    Categorías\r\n    <a routerLink=\"/categorias/add\" class=\"text-primary ml-auto\">\r\n      <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<table class=\"table table-bordered table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th> Desde </th>\r\n      <th> Hasta </th>\r\n      <th> Genero </th>\r\n      <th> Categoría </th>\r\n      <th> </th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let registro of tabla\">\r\n      <td routerLink=\"/categorias/edit/{{registro.id}}\"> {{ registro.desde }} </td>\r\n      <td routerLink=\"/categorias/edit/{{registro.id}}\"> {{ registro.hasta }} </td>\r\n      <td routerLink=\"/categorias/edit/{{registro.id}}\"> {{ registro.genero }} </td>\r\n      <td routerLink=\"/categorias/edit/{{registro.id}}\"> {{ registro.categoria }} </td>\r\n      <td class=\"text-center\">\r\n        <a routerLink=\"/categorias/delete/{{registro.id}}\" class=\"text-danger\">\r\n          <i class=\"fa fa-minus-circle fa-2x\"></i>\r\n        </a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table>"

/***/ }),

/***/ "./src/app/components/categorias/categorias.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categorias/categorias.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasComponent", function() { return CategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");



var CategoriasComponent = /** @class */ (function () {
    function CategoriasComponent(dataService) {
        this.dataService = dataService;
    }
    CategoriasComponent.prototype.ngOnInit = function () {
        this.getRecords();
    };
    CategoriasComponent.prototype.getRecords = function () {
        var _this = this;
        this.dataService.getRecords$().subscribe(function (data) {
            _this.tabla = data;
        });
    };
    CategoriasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categorias',
            template: __webpack_require__(/*! ./categorias.component.html */ "./src/app/components/categorias/categorias.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_2__["CategoriasService"]])
    ], CategoriasComponent);
    return CategoriasComponent;
}());



/***/ }),

/***/ "./src/app/components/categorias/f-categorias/f-categorias.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/categorias/f-categorias/f-categorias.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\" [ngClass]=\"cardHeaderStyle\">\r\n        {{ titulo + \" categoría\" }}\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"desde\" class=\"control-label\"> Desde </label>\r\n                <input type=\"number\" formControlName=\"desde\" [readonly]=\"titulo==='Eliminar'\"\r\n                  min=\"1900\" max=\"2020\"\r\n                  [class.is-invalid]=\"desde.invalid && desde.touched\" class=\"form-control\" />\r\n                <small class=\"text-danger\" [class.d-none]=\"desde.untouched || !desde.hasError('required')\">El campo desde es requerido</small>\r\n                <small class=\"text-danger\" [class.d-none]=\"desde.untouched || !desde.hasError('min')\">Debe colocar un valor mayor a 1900</small>\r\n                <small class=\"text-danger\" [class.d-none]=\"desde.untouched || !desde.hasError('max')\">Debe colocar un valor menor a 2020</small>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"hasta\" class=\"control-label\"> hasta </label>\r\n                <input type=\"number\" formControlName=\"hasta\" [readonly]=\"titulo==='Eliminar'\"\r\n                min=\"1900\" max=\"2020\"\r\n                  [class.is-invalid]=\"hasta.invalid && hasta.touched\" class=\"form-control\" />\r\n                <small class=\"text-danger\" [class.d-none]=\"hasta.untouched || !hasta.hasError('required')\">El campo hasta es requerido</small>\r\n                <small class=\"text-danger\" [class.d-none]=\"hasta.untouched || !hasta.hasError('min')\">Debe colocar un valor mayor a 1900</small>\r\n                <small class=\"text-danger\" [class.d-none]=\"hasta.untouched || !hasta.hasError('max')\">Debe colocar un valor menor a 2020</small>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"genero\" class=\"control-label\"> Genero </label>\r\n            <select formControlName=\"genero\" required [disabled]=\"titulo==='Eliminar'\"\r\n              [class.is-invalid]=\"genero.invalid && genero.touched\" class=\"custom-select\" > \r\n              <option value=\"genero\"></option>\r\n              <option value=\"Masculino\">Masculino</option>\r\n              <option value=\"Femenino\">Femenino</option>\r\n              <option value=\"Masculino y Femenino\">Masculino y Femenino</option>\r\n            </select>\r\n            <small class=\"text-danger\" [class.d-none]=\"genero.untouched || !genero.hasError('required')\">El genero es requerido</small>\r\n            <small class=\"text-danger\" [class.d-none]=\"genero.untouched || !genero.hasError('invalidGenero')\">Seleccione el genero</small>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"categoria\" class=\"control-label\"> Categoría </label>\r\n            <input type=\"text\" formControlName=\"categoria\" maxlength=\"80\" [readonly]=\"titulo==='Eliminar'\"\r\n              [class.is-invalid]=\"categoria.invalid && categoria.touched\" class=\"form-control\" />\r\n            <small class=\"text-danger\" [class.d-none]=\"categoria.untouched || !categoria.hasError('required')\">La categoría es requerida</small>\r\n            <small class=\"text-danger\" [class.d-none]=\"categoria.untouched || !categoria.hasError('minlength')\">La longitud mínima es 3</small>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button [disabled]=\"!miForm.valid\" [ngClass]=\"titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\r\n                type=\"submit\" class=\"btn btn-block\">\r\n                {{ titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\r\n              </button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n                Cancelar\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/categorias/f-categorias/f-categorias.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/categorias/f-categorias/f-categorias.component.ts ***!
  \******************************************************************************/
/*! exports provided: FCategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FCategoriasComponent", function() { return FCategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_validators_genero_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/validators/genero-validator */ "./src/app/validators/genero-validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/spinner.service */ "./src/app/services/spinner.service.ts");









var FCategoriasComponent = /** @class */ (function () {
    function FCategoriasComponent(dataService, fb, msgService, spinner, location, actRoute, router) {
        this.dataService = dataService;
        this.fb = fb;
        this.msgService = msgService;
        this.spinner = spinner;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.titulo = '';
        this.cardHeaderStyle = '';
        this.id = '';
    }
    FCategoriasComponent.prototype.ngOnInit = function () {
        this.msgService.clearMessages();
        this.buildForm();
        this.setState();
    };
    FCategoriasComponent.prototype.setState = function () {
        var objTitulo = { add: 'Agregar', edit: 'Modificar', delete: 'Eliminar' };
        this.titulo = objTitulo[this.actRoute.snapshot.url[1].path];
        var objStyle = { add: 'bg-primary', edit: 'bg-warning', delete: 'bg-danger' };
        this.cardHeaderStyle = objStyle[this.actRoute.snapshot.url[1].path];
        this.id = this.actRoute.snapshot.paramMap.get('id');
        if (this.titulo !== 'Agregar') {
            this.setFormData();
        }
    };
    FCategoriasComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            desde: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1900), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(2020)]],
            hasta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1900), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(2020)]],
            genero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_validators_genero_validator__WEBPACK_IMPORTED_MODULE_3__["generoValidator"]]],
            categoria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]]
        });
    };
    FCategoriasComponent.prototype.setFormData = function () {
        var _this = this;
        this.dataService.getRecord$(this.id).subscribe(function (data) {
            _this.miForm.patchValue(data);
        });
        if (this.titulo === 'Eliminar') {
            this.miForm.controls.genero.disable();
        }
    };
    Object.defineProperty(FCategoriasComponent.prototype, "desde", {
        get: function () {
            return this.miForm.get('desde');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FCategoriasComponent.prototype, "hasta", {
        get: function () {
            return this.miForm.get('hasta');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FCategoriasComponent.prototype, "genero", {
        get: function () {
            return this.miForm.get('genero');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FCategoriasComponent.prototype, "categoria", {
        get: function () {
            return this.miForm.get('categoria');
        },
        enumerable: true,
        configurable: true
    });
    FCategoriasComponent.prototype.onSubmit = function () {
        this.spinner.on();
        switch (this.titulo) {
            case 'Agregar':
                this.aceptarAgregar();
                break;
            case 'Modificar':
                this.aceptarEditar();
                break;
            case 'Eliminar':
                this.aceptarEliminar();
                break;
        }
    };
    FCategoriasComponent.prototype.aceptarAgregar = function () {
        var _this = this;
        this.dataService.addRecord$(this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['categoria'].value + ' Agregado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.retornar(); });
    };
    FCategoriasComponent.prototype.aceptarEditar = function () {
        var _this = this;
        this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['categoria'].value + ' Actualizado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.retornar(); });
    };
    FCategoriasComponent.prototype.aceptarEliminar = function () {
        var _this = this;
        this.dataService.deleteRecord$(this.id).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['categoria'].value + ' Eliminado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.retornar(); });
    };
    FCategoriasComponent.prototype.retornar = function () {
        this.spinner.off();
        this.router.navigate(['categorias']);
    };
    FCategoriasComponent.prototype.goBack = function () {
        this.location.back();
    };
    FCategoriasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-f-categorias',
            template: __webpack_require__(/*! ./f-categorias.component.html */ "./src/app/components/categorias/f-categorias/f-categorias.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_7__["CategoriasService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_6__["MensajesService"],
            src_app_services_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FCategoriasComponent);
    return FCategoriasComponent;
}());



/***/ }),

/***/ "./src/app/components/clubes/clubes.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/clubes/clubes.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\r\n<div class=\"card-header d-flex\">\r\n  Clubes\r\n  <a routerLink=\"/clubes/add\" class=\"text-primary ml-auto\">\r\n    <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n  </a>\r\n</div>\r\n</div>\r\n\r\n<table class=\"table table-bordered table-hover\">\r\n<thead>\r\n  <tr>\r\n    <th>Nombre</th>\r\n    <th>Descripción</th>\r\n    <th>Logo</th>\r\n    <th> </th>\r\n  </tr>\r\n</thead>\r\n\r\n<tbody>\r\n  <tr *ngFor=\"let registro of tabla\">\r\n    <td routerLink=\"/clubes/edit/{{registro.id}}\"> {{ registro.nombre }} </td>\r\n    <td routerLink=\"/clubes/edit/{{registro.id}}\"> {{ registro.descripcion }} </td>\r\n    <td> \r\n      <a routerLink=\"/clubes/logo/{{registro.id}}\" class=\"text-primary\">\r\n        <i class=\"fa fa-picture-o fa-4x\"> </i> \r\n      </a>\r\n    </td>\r\n    <td class=\"text-center\">\r\n      <a routerLink=\"/clubes/delete/{{registro.id}}\" class=\"text-danger\">\r\n        <i class=\"fa fa-minus-circle fa-2x\"></i>\r\n      </a>\r\n    </td>\r\n  </tr>\r\n</tbody>\r\n\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/components/clubes/clubes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/clubes/clubes.component.ts ***!
  \*******************************************************/
/*! exports provided: ClubesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubesComponent", function() { return ClubesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/clubes.service */ "./src/app/services/clubes.service.ts");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");




var ClubesComponent = /** @class */ (function () {
    function ClubesComponent(dataService, msgService) {
        this.dataService = dataService;
        this.msgService = msgService;
        this.tblOrden = { dni: 0, nombre: 0, fnacimiento: 0 };
        this.registro = {};
    }
    ClubesComponent.prototype.ngOnInit = function () {
        this.getRecords();
    };
    ClubesComponent.prototype.getRecords = function () {
        var _this = this;
        this.dataService.getRecords$().subscribe(function (data) {
            _this.tabla = data;
        });
    };
    ClubesComponent.prototype.ordenar = function (propiedad) {
        var orden = 0;
        if (this.tblOrden[propiedad] === 1) {
            orden = 2;
            this.tabla.sort(function (a, b) { return a[propiedad] < b[propiedad] ? 1 : b[propiedad] < a[propiedad] ? -1 : 0; });
        }
        else {
            orden = 1;
            this.tabla.sort(function (a, b) { return a[propiedad] > b[propiedad] ? 1 : b[propiedad] > a[propiedad] ? -1 : 0; });
        }
        for (var prop in this.tblOrden) {
            this.tblOrden[prop] = 0;
        }
        this.tblOrden[propiedad] = orden;
    };
    ClubesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clubes',
            template: __webpack_require__(/*! ./clubes.component.html */ "./src/app/components/clubes/clubes.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_2__["ClubesService"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]])
    ], ClubesComponent);
    return ClubesComponent;
}());



/***/ }),

/***/ "./src/app/components/clubes/f-clubes/f-clubes.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/clubes/f-clubes/f-clubes.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\" [ngClass]=\"style\">\r\n        {{ titulo + \" club\" }}\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"nombre\" class=\"control-label\"> Nombre </label>\r\n            <input type=\"text\" formControlName=\"nombre\" [readonly]=\"titulo==='Eliminar'\"\r\n              [class.is-invalid]=\"nombre.invalid && nombre.touched\" class=\"form-control\" />\r\n            <small class=\"text-danger\" [class.d-none]=\"nombre.untouched || !nombre.hasError('required')\">El nombre es requerido</small>\r\n            <small class=\"text-danger\" [class.d-none]=\"nombre.untouched || !nombre.hasError('minlength')\">La longitud mínima es 2</small>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"descripcion\" class=\"control-label\"> Descripción </label>\r\n            <input type=\"text\" formControlName=\"descripcion\" maxlength=\"80\" [readonly]=\"titulo==='Eliminar'\"\r\n              [class.is-invalid]=\"descripcion.invalid && descripcion.touched\" class=\"form-control\" />\r\n            <small class=\"text-danger\" [class.d-none]=\"descripcion.untouched || !descripcion.hasError('required')\">La descripción es requerida</small>\r\n            <small class=\"text-danger\" [class.d-none]=\"descripcion.untouched || !descripcion.hasError('minlength')\">La longitud mínima es 2</small>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"delegado\" class=\"control-label\"> Delegado </label>\r\n            <input type=\"text\" formControlName=\"delegado\" maxlength=\"80\" [readonly]=\"titulo==='Eliminar'\"\r\n              [class.is-invalid]=\"delegado.invalid && delegado.touched\" class=\"form-control\" />\r\n            <small class=\"text-danger\" [class.d-none]=\"delegado.untouched || !delegado.hasError('required')\">El delegado es requerido</small>\r\n            <small class=\"text-danger\" [class.d-none]=\"delegado.untouched || !delegado.hasError('minlength')\">La longitud mínima es 2</small>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"entrenador\" class=\"control-label\"> Entrenador </label>\r\n            <input type=\"text\" formControlName=\"entrenador\" maxlength=\"80\" [readonly]=\"titulo==='Eliminar'\"\r\n              [class.is-invalid]=\"entrenador.invalid && entrenador.touched\" class=\"form-control\" />\r\n            <small class=\"text-danger\" [class.d-none]=\"entrenador.untouched || !entrenador.hasError('required')\">El entrenador es requerido</small>\r\n            <small class=\"text-danger\" [class.d-none]=\"entrenador.untouched || !entrenador.hasError('minlength')\">La longitud mínima es 2</small>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button [disabled]=\"!miForm.valid\" [ngClass]=\"titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\r\n                type=\"submit\" class=\"btn btn-block\">\r\n                {{ titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\r\n              </button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n                Cancelar\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/clubes/f-clubes/f-clubes.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/clubes/f-clubes/f-clubes.component.ts ***!
  \******************************************************************/
/*! exports provided: FClubesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FClubesComponent", function() { return FClubesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/clubes.service */ "./src/app/services/clubes.service.ts");







var FClubesComponent = /** @class */ (function () {
    function FClubesComponent(dataService, fb, msgService, location, actRoute, router) {
        this.dataService = dataService;
        this.fb = fb;
        this.msgService = msgService;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.titulo = '';
        this.style = '';
        this.id = '';
    }
    FClubesComponent.prototype.ngOnInit = function () {
        this.msgService.clearMessages();
        this.buildForm();
        this.setState();
    };
    FClubesComponent.prototype.setState = function () {
        var objTitulo = { add: 'Agregar', edit: 'Modificar', delete: 'Eliminar' };
        this.titulo = objTitulo[this.actRoute.snapshot.url[1].path];
        var objStyle = { add: 'bg-primary', edit: 'bg-warning', delete: 'bg-danger' };
        this.style = objStyle[this.actRoute.snapshot.url[1].path];
        this.id = this.actRoute.snapshot.paramMap.get('id');
        if (this.titulo !== 'Agregar') {
            this.setFormData();
        }
    };
    FClubesComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            delegado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            entrenador: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]]
        });
    };
    FClubesComponent.prototype.setFormData = function () {
        var _this = this;
        this.dataService.getRecord$(this.id).subscribe(function (data) {
            _this.miForm.patchValue(data);
        });
    };
    Object.defineProperty(FClubesComponent.prototype, "nombre", {
        get: function () {
            return this.miForm.get('nombre');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FClubesComponent.prototype, "descripcion", {
        get: function () {
            return this.miForm.get('descripcion');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FClubesComponent.prototype, "delegado", {
        get: function () {
            return this.miForm.get('delegado');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FClubesComponent.prototype, "entrenador", {
        get: function () {
            return this.miForm.get('entrenador');
        },
        enumerable: true,
        configurable: true
    });
    FClubesComponent.prototype.onSubmit = function () {
        switch (this.titulo) {
            case 'Agregar':
                this.aceptarAgregar();
                break;
            case 'Modificar':
                this.aceptarEditar();
                break;
            case 'Eliminar':
                this.aceptarEliminar();
                break;
        }
    };
    FClubesComponent.prototype.aceptarAgregar = function () {
        var _this = this;
        this.dataService.addRecord$(this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['nombre'].value + ' Agregado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['clubes']); });
    };
    FClubesComponent.prototype.aceptarEditar = function () {
        var _this = this;
        this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['nombre'].value + ' Actualizado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['clubes']); });
    };
    FClubesComponent.prototype.aceptarEliminar = function () {
        var _this = this;
        this.dataService.deleteRecord$(this.id).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['nombre'].value + ' Eliminado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['clubes']); });
    };
    FClubesComponent.prototype.goBack = function () {
        this.location.back();
    };
    FClubesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-f-clubes',
            template: __webpack_require__(/*! ./f-clubes.component.html */ "./src/app/components/clubes/f-clubes/f-clubes.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_6__["ClubesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FClubesComponent);
    return FClubesComponent;
}());



/***/ }),

/***/ "./src/app/components/competencias/competencias.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/competencias/competencias.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\r\n  <div class=\"card-header d-flex\">\r\n    Competencias\r\n    <a routerLink=\"/competencias/add\" class=\"text-primary ml-auto\">\r\n      <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<table class=\"table table-bordered table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th> Desde </th>\r\n      <th> Hasta </th>\r\n      <th> Competencia </th>\r\n      <th> Club </th>\r\n      <th> </th>\r\n      <th> </th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let registro of tabla\">\r\n      <td routerLink=\"/competencias/edit/{{registro.id}}\"> {{ registro.desde }} </td>\r\n      <td routerLink=\"/competencias/edit/{{registro.id}}\"> {{ registro.hasta }} </td>\r\n      <td routerLink=\"/competencias/edit/{{registro.id}}\"> {{ registro.competencia }} </td>\r\n      <td routerLink=\"/competencias/edit/{{registro.id}}\"> {{ registro.club }} </td>\r\n      <td class=\"text-center\">\r\n        <a routerLink=\"/distancias/{{registro.id}}\" class=\"text-primary\">\r\n          <i class=\"fa fa-cogs fa-2x\"></i>\r\n        </a>\r\n      </td>\r\n      <td class=\"text-center\">\r\n        <a routerLink=\"/competencias/delete/{{registro.id}}\" class=\"text-danger\">\r\n          <i class=\"fa fa-minus-circle fa-2x\"></i>\r\n        </a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table>"

/***/ }),

/***/ "./src/app/components/competencias/competencias.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/competencias/competencias.component.ts ***!
  \*******************************************************************/
/*! exports provided: CompetenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciasComponent", function() { return CompetenciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_competencias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/competencias.service */ "./src/app/services/competencias.service.ts");



var CompetenciasComponent = /** @class */ (function () {
    function CompetenciasComponent(dataService) {
        this.dataService = dataService;
    }
    CompetenciasComponent.prototype.ngOnInit = function () {
        this.getRecords();
    };
    CompetenciasComponent.prototype.getRecords = function () {
        var _this = this;
        this.dataService.getRecords$().subscribe(function (data) {
            _this.tabla = data;
        });
    };
    CompetenciasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-competencias',
            template: __webpack_require__(/*! ./competencias.component.html */ "./src/app/components/competencias/competencias.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_competencias_service__WEBPACK_IMPORTED_MODULE_2__["CompetenciasService"]])
    ], CompetenciasComponent);
    return CompetenciasComponent;
}());



/***/ }),

/***/ "./src/app/components/competencias/f-competencias/f-competencias.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/competencias/f-competencias/f-competencias.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\" [ngClass]=\"cardHeaderStyle\">\r\n        {{ titulo + \" Compentencia\" }}\r\n        \r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"desde\" class=\"control-label\"> Desde </label>\r\n                <input type=\"date\" formControlName=\"desde\" [readonly]=\"titulo==='Eliminar'\"\r\n                  [class.is-invalid]=\"desde.invalid && desde.touched\" class=\"form-control\" />\r\n                <small class=\"text-danger\" [class.d-none]=\"desde.untouched || !desde.hasError('required')\">El campo desde es requerido</small>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"hasta\" class=\"control-label\"> hasta </label>\r\n                <input type=\"date\" formControlName=\"hasta\" [readonly]=\"titulo==='Eliminar'\"\r\n                  [class.is-invalid]=\"hasta.invalid && hasta.touched\" class=\"form-control\" />\r\n                <small class=\"text-danger\" [class.d-none]=\"hasta.untouched || !hasta.hasError('required')\">El campo hasta es requerido</small>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"competencia\" class=\"control-label\"> Descripción </label>\r\n                <input type=\"text\" formControlName=\"competencia\" [readonly]=\"titulo==='Eliminar'\" required maxlength=\"80\"\r\n                  [class.is-invalid]=\"competencia.invalid && competencia.touched\" class=\"form-control\" />\r\n                <small class=\"text-danger\" [class.d-none]=\"competencia.untouched || !competencia.hasError('required')\">La descripción es requerida</small>\r\n                <small class=\"text-danger\" [class.d-none]=\"competencia.untouched || !competencia.hasError('minlength')\">La longitud mínima es 2</small>\r\n              </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"club\" class=\"control-label\"> Club </label>\r\n            <select formControlName=\"club\" required\r\n              [class.is-invalid]=\"club.invalid && club.touched\" class=\"custom-select\">\r\n              <option value=\"club\"></option>\r\n              <option *ngFor=\"let registro of tblClubes\" >{{ registro }}</option>\r\n            </select>\r\n            <small class=\"text-danger\" [class.d-none]=\"club.untouched || !club.hasError('required')\">El club es requerido</small>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button [disabled]=\"!miForm.valid\" [ngClass]=\"titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\r\n                type=\"submit\" class=\"btn btn-block\">\r\n                {{ titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\r\n              </button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n                Cancelar\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/competencias/f-competencias/f-competencias.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/competencias/f-competencias/f-competencias.component.ts ***!
  \************************************************************************************/
/*! exports provided: FCompetenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FCompetenciasComponent", function() { return FCompetenciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var src_app_services_competencias_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/competencias.service */ "./src/app/services/competencias.service.ts");
/* harmony import */ var src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/clubes.service */ "./src/app/services/clubes.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var FCompetenciasComponent = /** @class */ (function () {
    function FCompetenciasComponent(dataService, clubesService, fb, msgService, location, actRoute, router) {
        this.dataService = dataService;
        this.clubesService = clubesService;
        this.fb = fb;
        this.msgService = msgService;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.titulo = '';
        this.cardHeaderStyle = '';
        this.id = '';
    }
    FCompetenciasComponent.prototype.ngOnInit = function () {
        this.msgService.clearMessages();
        this.setClubes();
        this.buildForm();
        this.setState();
    };
    FCompetenciasComponent.prototype.setClubes = function () {
        var _this = this;
        this.clubesService.getRecords$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (data) { return data.map(function (club) { return club.nombre; }); })).subscribe(function (data) { return _this.tblClubes = data; }, function (error) { return _this.msgService.sendMessage("Error al cargar la tabla de clubes: " + error.statusText, "alert-danger"); });
    };
    FCompetenciasComponent.prototype.setState = function () {
        var objTitulo = { add: 'Agregar', edit: 'Modificar', delete: 'Eliminar' };
        this.titulo = objTitulo[this.actRoute.snapshot.url[1].path];
        var objStyle = { add: 'bg-primary', edit: 'bg-warning', delete: 'bg-danger' };
        this.cardHeaderStyle = objStyle[this.actRoute.snapshot.url[1].path];
        this.id = this.actRoute.snapshot.paramMap.get('id');
        if (this.titulo !== 'Agregar') {
            this.setFormData();
        }
    };
    FCompetenciasComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            desde: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            hasta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            competencia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            club: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    FCompetenciasComponent.prototype.setFormData = function () {
        var _this = this;
        this.dataService.getRecord$(this.id).subscribe(function (data) {
            _this.miForm.patchValue(data);
        });
        if (this.titulo === 'Eliminar') {
            this.miForm.controls.genero.disable();
        }
    };
    Object.defineProperty(FCompetenciasComponent.prototype, "desde", {
        get: function () {
            return this.miForm.get('desde');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FCompetenciasComponent.prototype, "hasta", {
        get: function () {
            return this.miForm.get('hasta');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FCompetenciasComponent.prototype, "competencia", {
        get: function () {
            return this.miForm.get('competencia');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FCompetenciasComponent.prototype, "club", {
        get: function () {
            return this.miForm.get('club');
        },
        enumerable: true,
        configurable: true
    });
    FCompetenciasComponent.prototype.onSubmit = function () {
        switch (this.titulo) {
            case 'Agregar':
                this.aceptarAgregar();
                break;
            case 'Modificar':
                this.aceptarEditar();
                break;
            case 'Eliminar':
                this.aceptarEliminar();
                break;
        }
    };
    FCompetenciasComponent.prototype.aceptarAgregar = function () {
        var _this = this;
        this.dataService.addRecord$(this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['competencia'].value + ' Agregado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['competencias']); });
    };
    FCompetenciasComponent.prototype.aceptarEditar = function () {
        var _this = this;
        this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['competencia'].value + ' Actualizado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['competencias']); });
    };
    FCompetenciasComponent.prototype.aceptarEliminar = function () {
        var _this = this;
        this.dataService.deleteRecord$(this.id).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['competencia'].value + ' Eliminado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['competencias']); });
    };
    FCompetenciasComponent.prototype.goBack = function () {
        this.location.back();
    };
    FCompetenciasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-f-competencias',
            template: __webpack_require__(/*! ./f-competencias.component.html */ "./src/app/components/competencias/f-competencias/f-competencias.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_competencias_service__WEBPACK_IMPORTED_MODULE_6__["CompetenciasService"],
            src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_7__["ClubesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FCompetenciasComponent);
    return FCompetenciasComponent;
}());



/***/ }),

/***/ "./src/app/components/consola/consola.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/consola/consola.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header text-center\">\r\n        <div *ngIf=\"!!registro\" class=\"\">\r\n          {{ desStatus }} [ {{ nivelStatus }} ]<br>\r\n          {{ registro.competencia }} <br>\r\n          {{ registro.club}}\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-10\">\r\n            <button class=\"btn btn-block btn-lg\" \r\n              data-toggle=\"modal\" data-target=\"#modalCompetencia\" [disabled]=\"nivelStatus > 0\"\r\n              [ngClass]=\"nivelStatus >= 1 ? 'btn-primary' : 'btn-outline-primary'\">\r\n              Establecer próxima competencia\r\n            </button>\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <span class=\"text-primary\">\r\n              <i class=\"fa fa-3x\" [ngClass]=\"nivelStatus >= 1 ? 'fa-check-square-o': 'fa-square-o'\"></i>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-10\">\r\n            <button class=\"btn btn-block btn-lg\" (click)=\"abrirInscirpciones()\"\r\n              [disabled]=\"nivelStatus === 2 || nivelStatus > 3\"\r\n              [ngClass]=\"nivelStatus >= 2 ? 'btn-primary' : 'btn-outline-primary'\">\r\n              Abrir inscripciones\r\n            </button>\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <span class=\"text-primary\">\r\n              <i class=\"fa fa-3x\" [ngClass]=\"nivelStatus >= 2 ? 'fa-check-square-o': 'fa-square-o'\"></i>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-10\">\r\n            <button class=\"btn btn-block btn-lg\" (click)=\"cerrarInscirpciones()\"\r\n            [ngClass]=\"nivelStatus >= 3 ? 'btn-primary' : 'btn-outline-primary'\">\r\n              Cerrar inscripciones\r\n            </button>\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <span class=\"text-primary\">\r\n              <i class=\"fa fa-3x\" [ngClass]=\"nivelStatus >= 3 ? 'fa-check-square-o': 'fa-square-o'\"></i>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-10\">\r\n            <button class=\"btn btn-block btn-lg\" \r\n            data-toggle=\"modal\" data-target=\"#modalDownload\"\r\n            [ngClass]=\"nivelStatus >= 4 ? 'btn-primary' : 'btn-outline-primary'\">\r\n              Exportar datos de las inscripciones\r\n            </button>\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <span class=\"text-primary\">\r\n              <i class=\"fa fa-3x\" [ngClass]=\"nivelStatus >= 4 ? 'fa-check-square-o': 'fa-square-o'\"></i>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-10\">\r\n            <button class=\"btn btn-block btn-lg\" (click)=\"abrirCompetencia()\"\r\n              [ngClass]=\"nivelStatus >= 5 ? 'btn-primary' : 'btn-outline-primary'\">\r\n              Abrir competencia\r\n            </button>\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <span class=\"text-primary\">\r\n              <i class=\"fa fa-3x\" [ngClass]=\"nivelStatus >= 5 ? 'fa-check-square-o': 'fa-square-o'\"></i>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-10\">\r\n            <button class=\"btn btn-block btn-lg\" (click)=\"importarDatos()\"\r\n              [ngClass]=\"nivelStatus >= 6 ? 'btn-primary' : 'btn-outline-primary'\">\r\n              Importar datos de la competencia\r\n            </button>\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <span class=\"text-primary\">\r\n              <i class=\"fa fa-3x\" [ngClass]=\"nivelStatus >= 6 ? 'fa-check-square-o': 'fa-square-o'\"></i>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-10\">\r\n            <button class=\"btn btn-block btn-lg\" (click)=\"cerrarCompetencia()\"\r\n              [ngClass]=\"nivelStatus >= 7 ? 'btn-primary' : 'btn-outline-primary'\">\r\n              Cerrar competencia\r\n            </button>\r\n          </div>\r\n          <div class=\"col-2\">\r\n            <span class=\"text-primary\">\r\n              <i class=\"fa fa-3x\" [ngClass]=\"nivelStatus >= 7 ? 'fa-check-square-o': 'fa-square-o'\"></i>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<app-modal-competencia\r\n  [tabla]=\"tblCompetencias\"\r\n  (emitSeleccionar)=\"seleccionarCompetencia($event)\"\r\n></app-modal-competencia>\r\n\r\n<app-modal-download\r\n  [competencia] = 'registro'\r\n  (emitExportar)=\"exportarDatos()\"\r\n></app-modal-download>"

/***/ }),

/***/ "./src/app/components/consola/consola.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/consola/consola.component.ts ***!
  \*********************************************************/
/*! exports provided: ConsolaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolaComponent", function() { return ConsolaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_consola_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/consola.service */ "./src/app/services/consola.service.ts");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var src_app_services_competencias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/competencias.service */ "./src/app/services/competencias.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");







var ConsolaComponent = /** @class */ (function () {
    function ConsolaComponent(dataService, msgService, router, competenciasService, utilService) {
        this.dataService = dataService;
        this.msgService = msgService;
        this.router = router;
        this.competenciasService = competenciasService;
        this.utilService = utilService;
        this.nivelStatus = 0;
        this.desStatus = '';
    }
    ConsolaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRecords();
        this.competenciasService.getRecords$().subscribe(function (data) { return _this.tblCompetencias = data; });
    };
    ConsolaComponent.prototype.getRecords = function () {
        var _this = this;
        this.dataService.getRecords$().subscribe(function (data) {
            if (data) {
                _this.registro = data[0];
                _this.setState();
            }
        });
    };
    ConsolaComponent.prototype.setState = function () {
        switch (this.registro.status) {
            case 'Establecer próxima competencia':
                this.nivelStatus = 1;
                this.desStatus = 'Próxima competencia';
                break;
            case 'Abrir inscripciones':
                this.nivelStatus = 2;
                this.desStatus = 'Inscripciones abiertas';
                break;
            case 'Cerrar inscripciones':
                this.nivelStatus = 3;
                this.desStatus = 'Inscripciones cerradas';
                break;
            case 'Exportar datos':
                this.nivelStatus = 4;
                this.desStatus = 'Inscripciones cerradas - Datos exportados';
                break;
            case 'Abrir competencia':
                this.nivelStatus = 5;
                this.desStatus = 'En competencia';
                break;
            case 'Importar datos':
                this.nivelStatus = 6;
                this.desStatus = 'Resultados de la competencia cargados';
                break;
            case 'Cerrar competencia':
                this.nivelStatus = 0;
                this.desStatus = 'Competencia guardada en el histórico';
                break;
            default:
                break;
        }
    };
    ConsolaComponent.prototype.seleccionarCompetencia = function (registro) {
        if (registro) {
            this.establecerProximaCompetencia(registro);
        }
    };
    ConsolaComponent.prototype.establecerProximaCompetencia = function (registro) {
        var _this = this;
        if (this.nivelStatus !== 0) {
            this.msgService.sendMessage('Este proceso ya se realizó');
            return;
        }
        this.registro = registro;
        this.registro.status = 'Establecer próxima competencia';
        this.registro.id = this.utilService.generarID();
        this.dataService.updateRecord$('01', this.registro).subscribe(function (data) {
            _this.msgService.sendMessage('Competencia establecida satisfactoriamente');
            _this.nivelStatus = 1;
        }, function (error) { return _this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'); }, function () { return console.log("this.router.navigate(['home'])"); });
    };
    ConsolaComponent.prototype.abrirInscirpciones = function () {
        var _this = this;
        if (this.nivelStatus > 4) {
            this.msgService.sendMessage('No puede reabrir las inscripciones después de haber importado los datos de la competencia');
            return;
        }
        if (this.nivelStatus < 1) {
            this.msgService.sendMessage('Primero debe establecer la competencia');
            return;
        }
        this.registro.status = 'Abrir inscripciones';
        this.dataService.updateRecord$('01', this.registro).subscribe(function (data) {
            _this.msgService.sendMessage('Inscripciones abiertas satisfactoriamente');
            _this.nivelStatus = 2;
        }, function (error) { return _this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'); }, function () { return console.log("this.router.navigate(['home'])"); });
    };
    ConsolaComponent.prototype.cerrarInscirpciones = function () {
        var _this = this;
        if (this.nivelStatus > 2) {
            this.msgService.sendMessage('Este proceso ya se realizó');
            return;
        }
        if (this.nivelStatus < 2) {
            this.msgService.sendMessage('Primero debe abrir inscripciones');
            return;
        }
        this.registro.status = 'Cerrar inscripciones';
        this.dataService.updateRecord$('01', this.registro).subscribe(function (data) {
            _this.msgService.sendMessage('Inscripciones cerradas satisfactoriamente');
            _this.nivelStatus = 3;
        }, function (error) { return _this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'); }, function () { return console.log("this.router.navigate(['home'])"); });
    };
    ConsolaComponent.prototype.exportarDatos = function () {
        /* if (this.nivelStatus > 3) {
          this.msgService.sendMessage('Este proceso ya se realizó');
          return
        } */
        if (this.nivelStatus < 3) {
            this.msgService.sendMessage('Primero debe cerrar inscripciones');
            return;
        }
        this.registro.status = 'Exportar datos';
        this.nivelStatus = 4;
        this.guardarStatus('Datos exportados satisfactoriamente');
    };
    ConsolaComponent.prototype.abrirCompetencia = function () {
        if (this.nivelStatus > 4) {
            this.msgService.sendMessage('Este proceso ya se realizó');
            return;
        }
        if (this.nivelStatus < 4) {
            this.msgService.sendMessage('Primero debe exportar los datos');
            return;
        }
        this.registro.status = 'Abrir competencia';
        this.nivelStatus = 5;
        this.guardarStatus('Competencia abierta satisfactoriamente');
    };
    ConsolaComponent.prototype.importarDatos = function () {
        if (this.nivelStatus > 5) {
            this.msgService.sendMessage('Este proceso ya se realizó');
            return;
        }
        if (this.nivelStatus < 5) {
            this.msgService.sendMessage('Primero debe abrir la competencia');
            return;
        }
        this.registro.status = 'Importar datos';
        this.nivelStatus++;
        this.guardarStatus('Datos importados satisfactoriamente');
    };
    ConsolaComponent.prototype.cerrarCompetencia = function () {
        if (this.nivelStatus > 6) {
            this.msgService.sendMessage('Este proceso ya se realizó');
            return;
        }
        if (this.nivelStatus < 6) {
            this.msgService.sendMessage('Primero debe importar los datos');
            return;
        }
        this.registro.status = 'Cerrar competencia';
        this.nivelStatus++;
        this.guardarStatus('Competencia cerrada satisfactoriamente');
    };
    ConsolaComponent.prototype.guardarStatus = function (mensaje) {
        var _this = this;
        this.dataService.updateRecord$(this.registro.id, this.registro).subscribe(function (data) { return _this.msgService.sendMessage(mensaje); }, function (error) { return _this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'); }, function () { return console.log("this.router.navigate(['home'])"); });
    };
    ConsolaComponent.prototype.crearRegistroInicial = function () {
        var _this = this;
        var registro = {
            id: '8YuZxRujXXu8F9xgFyuV',
            competencia: '4 y 5 de Mayo',
            desde: '2019-05-04',
            hasta: '2019-05-05',
            club: 'Club agregado offline',
            status: 'Inscripciones abiertas'
        };
        this.dataService.addRecord$(registro).subscribe(function (data) { return _this.msgService.sendMessage(' Agregado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'); }, function () { return console.log('xxx'); });
    };
    ConsolaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consola',
            template: __webpack_require__(/*! ./consola.component.html */ "./src/app/components/consola/consola.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_consola_service__WEBPACK_IMPORTED_MODULE_3__["ConsolaService"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_competencias_service__WEBPACK_IMPORTED_MODULE_5__["CompetenciasService"],
            src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])
    ], ConsolaComponent);
    return ConsolaComponent;
}());



/***/ }),

/***/ "./src/app/components/distancias/distancias.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/distancias/distancias.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\r\n    <div class=\"card-header d-flex\">\r\n      Distancias\r\n      <a routerLink=\"/distancias/{{idCompetencia}}/add\" class=\"text-primary ml-auto\">\r\n        <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  \r\n  <table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th> Categoría </th>\r\n        <th> Embarcación </th>\r\n        <th> Distancia </th>\r\n        <th> </th>\r\n      </tr>\r\n    </thead>\r\n  \r\n    <tbody>\r\n      <tr *ngFor=\"let registro of tabla; let i = index\">\r\n        <td routerLink=\"/distancias/{{idCompetencia}}/edit/{{i}}\"> {{ registro.categoria }} </td>\r\n        <td routerLink=\"/distancias/{{idCompetencia}}/edit/{{i}}\"> {{ registro.embarcacion }} </td>\r\n        <td routerLink=\"/distancias/{{idCompetencia}}/edit/{{i}}\"> {{ registro.distancia }} </td>\r\n        <td class=\"text-center\">\r\n          <a routerLink=\"/distancias/{{idCompetencia}}/delete/{{i}}\" class=\"text-danger\">\r\n            <i class=\"fa fa-minus-circle fa-2x\"></i>\r\n          </a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  \r\n  </table>"

/***/ }),

/***/ "./src/app/components/distancias/distancias.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/distancias/distancias.component.ts ***!
  \***************************************************************/
/*! exports provided: DistanciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanciasComponent", function() { return DistanciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_distancias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/distancias.service */ "./src/app/services/distancias.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DistanciasComponent = /** @class */ (function () {
    function DistanciasComponent(dataService, actRoute) {
        this.dataService = dataService;
        this.actRoute = actRoute;
        this.idCompetencia = '';
    }
    DistanciasComponent.prototype.ngOnInit = function () {
        this.idCompetencia = this.actRoute.snapshot.url[1].path;
        // this.getRecords();
        this.getDistancias();
    };
    DistanciasComponent.prototype.getRecords = function () {
        var _this = this;
        this.dataService.getRecords$().subscribe(function (data) {
            _this.tabla = data;
        });
    };
    DistanciasComponent.prototype.getDistancias = function () {
        var _this = this;
        this.dataService.getAllEnCompetencia$(this.idCompetencia).subscribe(function (data) { return _this.tabla = data; });
    };
    DistanciasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distancias',
            template: __webpack_require__(/*! ./distancias.component.html */ "./src/app/components/distancias/distancias.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_distancias_service__WEBPACK_IMPORTED_MODULE_2__["DistanciasService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DistanciasComponent);
    return DistanciasComponent;
}());



/***/ }),

/***/ "./src/app/components/distancias/f-distancias/f-distancias.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/distancias/f-distancias/f-distancias.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\" [ngClass]=\"cardHeaderStyle\">\r\n        {{ titulo + \" distancia\" }}\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"categoria\" class=\"control-label\"> Categoría </label>\r\n                <select formControlName=\"categoria\" required\r\n                  [class.is-invalid]=\"categoria.invalid && categoria.touched\" class=\"custom-select\">\r\n                  <option value=\"categoria\"></option>\r\n                  <option *ngFor=\"let registro of categorias\" >{{ registro }}</option>\r\n                </select>\r\n                <small class=\"text-danger\" [class.d-none]=\"categoria.untouched || !categoria.hasError('required')\">La categoría es requerida</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"embarcacion\" class=\"control-label\"> Embarcación </label>\r\n                <select formControlName=\"embarcacion\" required\r\n                  [class.is-invalid]=\"embarcacion.invalid && embarcacion.touched\" class=\"custom-select\">\r\n                  <option value=\"embarcacion\"></option>\r\n                  <option value=\"K1\">K1</option>\r\n                  <option value=\"K2\">K2</option>\r\n                  <option value=\"K4\">K4</option>\r\n                  <option value=\"430\">430</option>\r\n                  <option value=\"canoa\">Canoa</option>\r\n                </select>\r\n                <small class=\"text-danger\" [class.d-none]=\"embarcacion.untouched || !embarcacion.hasError('required')\">El tipo de embarcación es requerido</small>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"metros\" class=\"control-label\"> Metros </label>\r\n                <input type=\"number\" formControlName=\"metros\" maxlength=\"80\" [readonly]=\"titulo==='Eliminar'\"\r\n                  [class.is-invalid]=\"metros.invalid && metros.touched\" class=\"form-control\" />\r\n                <small class=\"text-danger\" [class.d-none]=\"metros.untouched || !metros.hasError('required')\">La distancia en metros es requerida</small>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"distancia\" class=\"control-label\"> Distancia </label>\r\n                <input type=\"text\" formControlName=\"distancia\" maxlength=\"80\" [readonly]=\"titulo==='Eliminar'\"\r\n                  [class.is-invalid]=\"distancia.invalid && distancia.touched\" class=\"form-control\" />\r\n                <small class=\"text-danger\" [class.d-none]=\"distancia.untouched || !distancia.hasError('required')\">La distancia es requerida</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button [disabled]=\"!miForm.valid\" [ngClass]=\"titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\r\n                type=\"submit\" class=\"btn btn-block\">\r\n                {{ titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\r\n              </button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n                Cancelar\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/distancias/f-distancias/f-distancias.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/distancias/f-distancias/f-distancias.component.ts ***!
  \******************************************************************************/
/*! exports provided: FDistanciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FDistanciasComponent", function() { return FDistanciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_msg_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/msg.service */ "./src/app/services/msg.service.ts");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_competencias_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/competencias.service */ "./src/app/services/competencias.service.ts");









var FDistanciasComponent = /** @class */ (function () {
    function FDistanciasComponent(dataService, categoriasService, fb, msg, location, actRoute, router) {
        this.dataService = dataService;
        this.categoriasService = categoriasService;
        this.fb = fb;
        this.msg = msg;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.titulo = '';
        this.cardHeaderStyle = '';
        this.categorias = [];
        this.parCompetencia = '';
        this.parAccion = '';
        this.parId = '';
    }
    FDistanciasComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('FDistancias component');
        this.setTblCategoria();
        this.buildForm();
        this.setState();
        this.dataService.getRecord$(this.parCompetencia).subscribe(function (data) {
            _this.competencia = data;
            if (_this.titulo !== 'Agregar') {
                _this.miForm.patchValue(data.distancia[_this.parId]);
                if (_this.titulo === 'Eliminar') {
                    _this.miForm.controls.embarcacion.disable();
                }
            }
        });
    };
    FDistanciasComponent.prototype.setState = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var objTitulo, objStyle;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.parCompetencia = this.actRoute.snapshot.paramMap.get('competencia');
                this.parAccion = this.actRoute.snapshot.paramMap.get('accion');
                this.parId = this.actRoute.snapshot.paramMap.get('id');
                objTitulo = { add: 'Agregar', edit: 'Modificar', delete: 'Eliminar' };
                this.titulo = objTitulo[this.parAccion];
                objStyle = { add: 'bg-primary', edit: 'bg-warning', delete: 'bg-danger' };
                this.cardHeaderStyle = objStyle[this.parAccion];
                return [2 /*return*/];
            });
        });
    };
    FDistanciasComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            categoria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            embarcacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            metros: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            distancia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    FDistanciasComponent.prototype.setTblCategoria = function () {
        var _this = this;
        this.categoriasService.getRecords$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data.map(function (categoria) { return categoria.categoria; }); })).subscribe(function (data) { return _this.categorias = data; }, function (error) { return _this.msg.error("Error al cargar la tabla de clubes: " + error.statusText); });
    };
    Object.defineProperty(FDistanciasComponent.prototype, "embarcacion", {
        get: function () {
            return this.miForm.get('embarcacion');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FDistanciasComponent.prototype, "distancia", {
        get: function () {
            return this.miForm.get('distancia');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FDistanciasComponent.prototype, "metros", {
        get: function () {
            return this.miForm.get('metros');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FDistanciasComponent.prototype, "categoria", {
        get: function () {
            return this.miForm.get('categoria');
        },
        enumerable: true,
        configurable: true
    });
    FDistanciasComponent.prototype.onSubmit = function () {
        this.prepararArreglo(this.titulo);
        this.guardar();
    };
    FDistanciasComponent.prototype.prepararArreglo = function (parAccion) {
        var objDistancia = {
            categoria: this.miForm.controls.categoria.value,
            embarcacion: this.miForm.controls.embarcacion.value,
            distancia: this.miForm.controls.distancia.value,
        };
        console.log("this.competencia", this.competencia);
        if (!this.competencia.distancia) {
            this.competencia = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.competencia, { distancia: [objDistancia] });
        }
        else if (parAccion === 'Agregar') {
            this.competencia.distancia.push(objDistancia);
        }
        else if (parAccion === 'Modificar') {
            this.competencia.distancia.splice(+this.parId, 1, objDistancia);
        }
        else if (parAccion === 'Eliminar') {
            this.competencia.distancia.splice(+this.parId, 1);
        }
    };
    FDistanciasComponent.prototype.guardar = function () {
        var _this = this;
        this.dataService.updateRecord$(this.parCompetencia, this.competencia).subscribe(function (_) { return _this.msg.ok(_this.miForm.controls['distancia'].value + ' Actualizado satisfactoriamente'); }, function (error) { return _this.msg.error('Error al actualizar los datos: ' + error.statusText); }, function () { return _this.goBack(); });
    };
    FDistanciasComponent.prototype.goBack = function () {
        this.location.back();
    };
    FDistanciasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-f-distancias',
            template: __webpack_require__(/*! ./f-distancias.component.html */ "./src/app/components/distancias/f-distancias/f-distancias.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_competencias_service__WEBPACK_IMPORTED_MODULE_8__["CompetenciasService"],
            src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_7__["CategoriasService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_msg_service__WEBPACK_IMPORTED_MODULE_6__["MsgService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FDistanciasComponent);
    return FDistanciasComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portada{\r\n    background: url('fondo-transparente.png') no-repeat fixed center;\r\n    background-color:lightgray;\r\n    background-size: 35%;\r\n    height: 100%;\r\n    width: 100% ;\r\n    text-align: center;\r\n  \r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdFQUE2RTtJQUM3RSwwQkFBMEI7SUFJMUIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCOztDQUVyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydGFkYXtcclxuICAgIGJhY2tncm91bmQ6IHVybChzcmMvYXNzZXRzL2ltZy9mb25kby10cmFuc3BhcmVudGUucG5nKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAzNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJSA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron portada\">\r\n  <h4> {{ competencia.status }} </h4>\r\n  <h2> {{ competencia.descripcion}} </h2>\r\n  <h3> {{ competencia.fecha }} </h3>\r\n    <p class=\"lead\"> {{ competencia.club }} </p>\r\n    <hr class=\"my-4\">\r\n    <p>Bienvenidos a la web de inscripciones para los encuentros del Canotaje de la Provincia de Buenos Aires.</p>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_consola_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/consola.service */ "./src/app/services/consola.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(consolaService) {
        this.consolaService = consolaService;
        this.competencia = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.consolaService.getRecord$('01').subscribe(function (data) {
            var desde = new Date(data.desde).toLocaleDateString();
            var hasta = new Date(data.hasta).toLocaleDateString();
            _this.competencia.fecha = desde + ' hasta ' + hasta;
            _this.competencia.club = data.club;
            _this.competencia.descripcion = data.competencia;
            _this.competencia.status = _this.descripcionDelStatus(data.status);
        });
    };
    HomeComponent.prototype.descripcionDelStatus = function (status) {
        switch (status) {
            case 'Establecer próxima competencia':
                return 'Próxima competencia';
                break;
            case 'Abrir inscripciones':
                return 'Inscripciones abiertas';
                break;
            case 'Cerrar inscripciones':
                return 'Inscripciones cerradas';
                break;
            case 'Exportar datos':
                return 'Inscripciones cerradas - Datos exportados';
                break;
            case 'Abrir competencia':
                return 'En competencia';
                break;
            case 'Importar datos':
                return 'Resultados de la competencia cargados';
                break;
            case 'Cerrar competencia':
                return 'Competencia guardada en el histórico';
                break;
            default:
                break;
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_consola_service__WEBPACK_IMPORTED_MODULE_2__["ConsolaService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/inscripciones/consultar-inscripciones/consultar-inscripciones.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/inscripciones/consultar-inscripciones/consultar-inscripciones.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\r\n  <div class=\"card-header d-flex\">\r\n    Consultar inscripciones\r\n    <button class=\"btn btn-primary ml-auto\" data-toggle=\"modal\" data-target=\"#modalFiltro\" >\r\n      <i class=\"fa fa-filter fa-2x\"></i> Filtrar\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<table class=\"table table-bordered table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th>DNI </th>\r\n      <th>Nombre </th>\r\n      <th>Genero</th>\r\n      <th>Club</th>\r\n      <th>Categoría</th>\r\n      <th>Carrera</th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let registro of tabla\">\r\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.dni }} </td>\r\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.palista }} </td>\r\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.genero }} </td>\r\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.club }} </td>\r\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.categoria }} </td>\r\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.distancia }} </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table>\r\n\r\n<app-filtro\r\n  [tblClubes]=\"tblClubes\"\r\n  [tblCategorias]=\"tblCategorias\"\r\n  [tblDistancias]=\"tblDistancias\"\r\n  (emitFiltrar)=\"filtrarInscripciones($event)\"\r\n></app-filtro>"

/***/ }),

/***/ "./src/app/components/inscripciones/consultar-inscripciones/consultar-inscripciones.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/inscripciones/consultar-inscripciones/consultar-inscripciones.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ConsultarInscripcionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarInscripcionesComponent", function() { return ConsultarInscripcionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_inscripciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/inscripciones.service */ "./src/app/services/inscripciones.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_distancias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/distancias.service */ "./src/app/services/distancias.service.ts");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/clubes.service */ "./src/app/services/clubes.service.ts");







var ConsultarInscripcionesComponent = /** @class */ (function () {
    function ConsultarInscripcionesComponent(dataService, utilService, clubesService, categoriasService, distanciasService) {
        this.dataService = dataService;
        this.utilService = utilService;
        this.clubesService = clubesService;
        this.categoriasService = categoriasService;
        this.distanciasService = distanciasService;
    }
    ConsultarInscripcionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRecords();
        this.clubesService.getRecords$().subscribe(function (data) { return _this.tblClubes = data; });
        this.categoriasService.getRecords$().subscribe(function (data) { return _this.tblCategorias = data; });
        this.distanciasService.getRecords$().subscribe(function (data) { return _this.tblDistancias = data; });
    };
    ConsultarInscripcionesComponent.prototype.getRecords = function () {
        var _this = this;
        this.dataService.getRecords$().subscribe(function (data) {
            _this.tabla = data;
            _this.tabla.sort(function (a, b) { return a.club > b.club ? 1 : a.club < b.club ? -1 : 0; });
            console.log("TCL: ConsultarInscripcionesComponent -> getRecords -> this.tabla", _this.tabla);
            _this.todasLasInscripciones = _this.tabla;
        });
    };
    ConsultarInscripcionesComponent.prototype.filtrarInscripciones = function (evento) {
        this.tabla = this.dataService.queryRecords$(this.todasLasInscripciones, evento);
    };
    ConsultarInscripcionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consultar-inscripciones',
            template: __webpack_require__(/*! ./consultar-inscripciones.component.html */ "./src/app/components/inscripciones/consultar-inscripciones/consultar-inscripciones.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_inscripciones_service__WEBPACK_IMPORTED_MODULE_2__["InscripcionesService"],
            src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_6__["ClubesService"],
            src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_5__["CategoriasService"],
            src_app_services_distancias_service__WEBPACK_IMPORTED_MODULE_4__["DistanciasService"]])
    ], ConsultarInscripcionesComponent);
    return ConsultarInscripcionesComponent;
}());



/***/ }),

/***/ "./src/app/components/inscripciones/consultar-inscripciones/filtro.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/inscripciones/consultar-inscripciones/filtro.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"modalFiltro\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\"> Filtro </h5>\r\n        <button #btClose type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit()\">\r\n \r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"genero\" class=\"control-label\"> Genero </label>\r\n                <select formControlName=\"genero\"\r\n                  [class.is-invalid]=\"genero.invalid && genero.touched\" class=\"custom-select\">\r\n                  <option value=\"\"></option>\r\n                  <option value=\"Masculino\">Masculino</option>\r\n                  <option value=\"Femenino\">Femenino</option>\r\n                  </select>\r\n                  <small class=\"text-danger\" [class.d-none]=\"genero.valid || genero.untouched\">El genero es requerido</small>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"categoria\" class=\"control-label\"> Categoría </label>\r\n                <select formControlName=\"categoria\"\r\n                  [class.is-invalid]=\"(categoria.invalid && categoria.touched)\"class=\"custom-select\"> \r\n                  <option value=\"\"></option>\r\n                  <option *ngFor=\"let registro of tblCategorias\" >{{ registro.categoria }}</option>\r\n                </select>\r\n                <small class=\"text-danger\" [class.d-none]=\"categoria.valid || categoria.untouched\">La categoría es requerida</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"distancia\" class=\"control-label\"> Distancia </label>\r\n                <select formControlName=\"distancia\" \r\n                  [class.is-invalid]=\"distancia.invalid && distancia.touched\" class=\"custom-select\">\r\n                  <option value=\"\"></option>\r\n                  <option *ngFor=\"let registro of tblDistancias\" >{{ registro.embarcacion + ' ' + registro.distancia }}</option>\r\n                </select>\r\n                <small class=\"text-danger\" [class.d-none]=\"distancia.untouched || !distancia.hasError('required')\">La distancia es requerida</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"club\" class=\"control-label\"> Club </label>\r\n            <select formControlName=\"club\" \r\n              [class.is-invalid]=\"club.invalid && club.touched\" class=\"custom-select\">\r\n              <option value=\"\"></option>\r\n              <option *ngFor=\"let registro of tblClubes\" >{{ registro.nombre }}</option>\r\n            </select>\r\n            <small class=\"text-danger\" [class.d-none]=\"club.untouched || !club.hasError('required')\">El club es requerido</small>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button [disabled]=\"!miForm.valid\" \r\n                type=\"submit\" class=\"btn btn-block btn-primary\" (click)=\"consultar()\">\r\n                Aceptar\r\n              </button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"cancelar()\">\r\n                Cancelar\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/inscripciones/consultar-inscripciones/filtro.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/inscripciones/consultar-inscripciones/filtro.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroComponent", function() { return FiltroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FiltroComponent = /** @class */ (function () {
    function FiltroComponent(fb) {
        this.fb = fb;
        this.emitFiltrar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FiltroComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    FiltroComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            genero: [''],
            categoria: [''],
            club: [''],
            distancia: ['']
        });
    };
    Object.defineProperty(FiltroComponent.prototype, "genero", {
        get: function () {
            return this.miForm.get('genero');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FiltroComponent.prototype, "categoria", {
        get: function () {
            return this.miForm.get('categoria');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FiltroComponent.prototype, "distancia", {
        get: function () {
            return this.miForm.get('distancia');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FiltroComponent.prototype, "club", {
        get: function () {
            return this.miForm.get('club');
        },
        enumerable: true,
        configurable: true
    });
    FiltroComponent.prototype.consultar = function () {
        this.emitFiltrar.emit(this.miForm.value);
        this.btClose.nativeElement.click();
    };
    FiltroComponent.prototype.cancelar = function () {
        this.btClose.nativeElement.click();
    };
    FiltroComponent.prototype.onSubmit = function () {
        this.btClose.nativeElement.click();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btClose'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FiltroComponent.prototype, "btClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FiltroComponent.prototype, "tblClubes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FiltroComponent.prototype, "tblCategorias", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FiltroComponent.prototype, "tblDistancias", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltroComponent.prototype, "emitFiltrar", void 0);
    FiltroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filtro',
            template: __webpack_require__(/*! ./filtro.component.html */ "./src/app/components/inscripciones/consultar-inscripciones/filtro.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FiltroComponent);
    return FiltroComponent;
}());



/***/ }),

/***/ "./src/app/components/inscripciones/f-inscripciones/f-inscripciones.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/inscripciones/f-inscripciones/f-inscripciones.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n  \r\n      <div class=\"card mt-3\">\r\n        <div class=\"card-header\" [ngClass]=\"cardHeaderStyle\">\r\n          {{ titulo + \" inscipción\" }}\r\n          \r\n        </div>\r\n  \r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-9\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"palista\" class=\"control-label\"> Palista </label>\r\n                  <select formControlName=\"palista\" required\r\n                    [class.is-invalid]=\"palista.invalid && palista.touched\" class=\"custom-select\"\r\n                    (change)=\"selectPalista(palista.value)\">\r\n                    <option value=\"palista\"></option>\r\n                    <option *ngFor=\"let registro of tblPalistas\" >{{ registro.palista }}</option>\r\n                  </select>\r\n                  <small class=\"text-danger\" [class.d-none]=\"palista.untouched || !palista.hasError('required')\">El palista es requerido</small>\r\n                </div>\r\n\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"genero\" class=\"control-label\"> Genero </label>\r\n                      <input type=\"text\" formControlName=\"genero\" [readonly]=\"true\" required\r\n                        [class.is-invalid]=\"(genero.invalid && genero.touched)\"\r\n                        class=\"form-control\" />\r\n                      <small class=\"text-danger\" [class.d-none]=\"genero.valid || genero.untouched\">El genero es requerido</small>\r\n                    </div>\r\n                  </div>\r\n    \r\n                  <div class=\"col-6\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"categoria\" class=\"control-label\"> Categoría </label>\r\n                      <input type=\"text\" formControlName=\"categoria\" [readonly]=\"true\" required\r\n                        [class.is-invalid]=\"(categoria.invalid && categoria.touched)\"\r\n                        class=\"form-control\" />\r\n                      <small class=\"text-danger\" [class.d-none]=\"categoria.valid || categoria.untouched\">La categoría es requerida</small>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"club\" class=\"control-label\"> Club </label>\r\n                  <select formControlName=\"club\" required \r\n                    [class.is-invalid]=\"club.invalid && club.touched\" class=\"custom-select\">\r\n                    <option value=\"club\"></option>\r\n                    <option *ngFor=\"let registro of tblClubes\" >{{ registro.nombre }}</option>\r\n                  </select>\r\n                  <small class=\"text-danger\" [class.d-none]=\"club.untouched || !club.hasError('required')\">El club es requerido</small>\r\n                </div>\r\n              </div>\r\n            \r\n              <div class=\"col-3\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"distancia\" class=\"control-label\"> Distancia </label>\r\n                  <select multiple #selectDistancia formControlName=\"distancia\" required size=\"9\"\r\n                    [class.is-invalid]=\"distancia.invalid && distancia.touched\" class=\"custom-select\" >\r\n                    <option *ngFor=\"let registro of tblDistancias\" >{{ registro.embarcacion + ' ' + registro.distancia }}</option>\r\n                  </select>\r\n                  <small class=\"text-danger\" [class.d-none]=\"distancia.untouched || !distancia.hasError('required')\">La distancia es requerida</small>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <button [disabled]=\"!miForm.valid\" [ngClass]=\"titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\r\n                  type=\"submit\" class=\"btn btn-block\">\r\n                  {{ titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\r\n                </button>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n                  Cancelar\r\n                </button>\r\n              </div>\r\n            </div>\r\n  \r\n          </form>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/inscripciones/f-inscripciones/f-inscripciones.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/inscripciones/f-inscripciones/f-inscripciones.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FInscripcionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FInscripcionesComponent", function() { return FInscripcionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var src_app_services_inscripciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/inscripciones.service */ "./src/app/services/inscripciones.service.ts");
/* harmony import */ var src_app_services_palistas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/palistas.service */ "./src/app/services/palistas.service.ts");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/clubes.service */ "./src/app/services/clubes.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_distancias_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/distancias.service */ "./src/app/services/distancias.service.ts");












var FInscripcionesComponent = /** @class */ (function () {
    function FInscripcionesComponent(dataService, palistasService, categoriaService, clubesService, distanciasService, authService, msgService, location, router, actRoute, fb) {
        this.dataService = dataService;
        this.palistasService = palistasService;
        this.categoriaService = categoriaService;
        this.clubesService = clubesService;
        this.distanciasService = distanciasService;
        this.authService = authService;
        this.msgService = msgService;
        this.location = location;
        this.router = router;
        this.actRoute = actRoute;
        this.fb = fb;
        this.titulo = '';
        this.cardHeaderStyle = '';
        this.id = '';
        this.tblPalistas = [];
    }
    FInscripcionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuario = this.authService.getUser();
        this.dataService.getRecords$(this.usuario.club).subscribe(function (data) { return _this.tblInscripciones = data; });
        this.palistasService.getRecords$(this.usuario.club).subscribe(function (data) { return _this.tblPalistas = data; });
        this.categoriaService.getRecords$().subscribe(function (data) { return _this.categorias = data; });
        this.clubesService.getRecords$().subscribe(function (data) { return _this.tblClubes = data; });
        this.distanciasService.getRecords$().subscribe(function (data) { return _this.tblDistancias = data; });
        this.msgService.clearMessages();
        this.buildForm();
        this.setState();
    };
    FInscripcionesComponent.prototype.selectPalista = function (valor) {
        var palista = this.tblPalistas.find(function (element) { return element.palista === valor; });
        if (this.titulo === 'Agregar' && !!this.tblInscripciones.find(function (element) { return element.dni === palista.dni; })) {
            this.miForm.controls.palista.setValue('');
            this.msgService.sendMessage(palista.palista + ' Ya está inscrito. Si lo desea modifique su inscripción');
        }
        else {
            this.miForm.patchValue(palista);
        }
    };
    FInscripcionesComponent.prototype.setState = function () {
        var objTitulo = { add: 'Agregar', edit: 'Modificar', delete: 'Eliminar' };
        this.titulo = objTitulo[this.actRoute.snapshot.url[1].path];
        var objStyle = { add: 'bg-primary', edit: 'bg-warning', delete: 'bg-danger' };
        this.cardHeaderStyle = objStyle[this.actRoute.snapshot.url[1].path];
        this.id = this.actRoute.snapshot.paramMap.get('id');
        if (this.titulo !== 'Agregar') {
            this.setFormData();
            this.miForm.controls.palista.disable();
        }
    };
    FInscripcionesComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            palista: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            dni: [''],
            apellido: [''],
            nombre: [''],
            fnacimiento: [''],
            genero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            categoria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            club: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            distancia: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        if (this.usuario.club != 'FeBoCaK') {
            this.miForm.controls.club.disable();
        }
    };
    FInscripcionesComponent.prototype.marcarDistancias = function (arrayDistancias) {
        var options = this.selectDistancia.nativeElement.options;
        for (var i = 0, len = options.length, option = void 0; i < len; i++) {
            option = options[i];
            if (arrayDistancias.indexOf(option.text) != -1) {
                option.selected = true;
            }
        }
    };
    FInscripcionesComponent.prototype.setFormData = function () {
        var _this = this;
        this.dataService.getRecord$(this.id).subscribe(function (data) {
            _this.miForm.patchValue(data);
            _this.marcarDistancias(data.distancia);
        });
        if (this.titulo === 'Eliminar') {
            this.miForm.controls.palista.disable();
            this.miForm.controls.club.disable();
        }
    };
    Object.defineProperty(FInscripcionesComponent.prototype, "palista", {
        get: function () {
            return this.miForm.get('palista');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FInscripcionesComponent.prototype, "genero", {
        get: function () {
            return this.miForm.get('genero');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FInscripcionesComponent.prototype, "categoria", {
        get: function () {
            return this.miForm.get('categoria');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FInscripcionesComponent.prototype, "club", {
        get: function () {
            return this.miForm.get('club');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FInscripcionesComponent.prototype, "distancia", {
        get: function () {
            return this.miForm.get('distancia');
        },
        enumerable: true,
        configurable: true
    });
    FInscripcionesComponent.prototype.onSubmit = function () {
        this.miForm.controls.club.enable();
        this.miForm.controls.palista.enable();
        switch (this.titulo) {
            case 'Agregar':
                this.aceptarAgregar();
                break;
            case 'Modificar':
                this.aceptarEditar();
                break;
            case 'Eliminar':
                this.aceptarEliminar();
                break;
        }
    };
    FInscripcionesComponent.prototype.aceptarAgregar = function () {
        var _this = this;
        this.dataService.addRecord$(this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['palista'].value + ' Agregado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['inscripciones']); });
    };
    FInscripcionesComponent.prototype.aceptarEditar = function () {
        var _this = this;
        this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['palista'].value + ' Actualizado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['inscripciones']); });
    };
    FInscripcionesComponent.prototype.aceptarEliminar = function () {
        var _this = this;
        this.dataService.deleteRecord$(this.id).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['palista'].value + ' Eliminado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['inscripciones']); });
    };
    FInscripcionesComponent.prototype.goBack = function () {
        this.location.back();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectDistancia'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FInscripcionesComponent.prototype, "selectDistancia", void 0);
    FInscripcionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-f-inscripciones',
            template: __webpack_require__(/*! ./f-inscripciones.component.html */ "./src/app/components/inscripciones/f-inscripciones/f-inscripciones.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_inscripciones_service__WEBPACK_IMPORTED_MODULE_6__["InscripcionesService"],
            src_app_services_palistas_service__WEBPACK_IMPORTED_MODULE_7__["PalistasService"],
            src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_8__["CategoriasService"],
            src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_9__["ClubesService"],
            src_app_services_distancias_service__WEBPACK_IMPORTED_MODULE_11__["DistanciasService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FInscripcionesComponent);
    return FInscripcionesComponent;
}());



/***/ }),

/***/ "./src/app/components/inscripciones/inscripciones.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/inscripciones/inscripciones.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\r\n  <div class=\"card-header d-flex\">\r\n    Inscripciones\r\n    <a routerLink=\"/inscripciones/add\" class=\"text-primary ml-auto\">\r\n      <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<table class=\"table table-bordered table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th>DNI </th>\r\n      <th>Nombre </th>\r\n      <th>Genero</th>\r\n      <th>Categoría</th>\r\n      <th>Carrera</th>\r\n      <th> </th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let registro of tabla\">\r\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.dni }} </td>\r\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.palista }} </td>\r\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.genero }} </td>\r\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.categoria }} </td>\r\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.distancia }} </td>\r\n      <td>\r\n        <a routerLink=\"/inscripciones/delete/{{registro.id}}\" class=\"text-danger ml-auto\">\r\n          <i class=\"fa fa-minus-circle fa-2x\"></i>\r\n        </a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table>"

/***/ }),

/***/ "./src/app/components/inscripciones/inscripciones.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/inscripciones/inscripciones.component.ts ***!
  \*********************************************************************/
/*! exports provided: InscripcionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscripcionesComponent", function() { return InscripcionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_inscripciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/inscripciones.service */ "./src/app/services/inscripciones.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_consola_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/consola.service */ "./src/app/services/consola.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");








var InscripcionesComponent = /** @class */ (function () {
    function InscripcionesComponent(dataService, utilService, authService, consolaService, router, msgService) {
        this.dataService = dataService;
        this.utilService = utilService;
        this.authService = authService;
        this.consolaService = consolaService;
        this.router = router;
        this.msgService = msgService;
    }
    InscripcionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuario = this.authService.getUser();
        if (this.usuario.rol === 'Inscripciones') {
            this.consolaService.getRecord$('01').subscribe(function (data) {
                if (data.status !== 'Abrir inscripciones') {
                    _this.msgService.sendMessage('Las inscripciones no están abiertas', 'alert-warning');
                    _this.router.navigate(['home']);
                }
            });
        }
        this.getRecords();
    };
    InscripcionesComponent.prototype.getRecords = function () {
        var _this = this;
        this.dataService.getRecords$(this.usuario.club).subscribe(function (data) {
            _this.tabla = data;
        });
    };
    InscripcionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inscripciones',
            template: __webpack_require__(/*! ./inscripciones.component.html */ "./src/app/components/inscripciones/inscripciones.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_inscripciones_service__WEBPACK_IMPORTED_MODULE_2__["InscripcionesService"],
            src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_services_consola_service__WEBPACK_IMPORTED_MODULE_5__["ConsolaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_7__["MensajesService"]])
    ], InscripcionesComponent);
    return InscripcionesComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"row mt-3\">\r\n    <div class=\"col-sm-12 col-md-6 col-lg-4 mx-auto\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Login\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form #miForm=\"ngForm\" (submit)=\"onLogin()\">\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\" style=\"width:2rem\"><i class=\"fa fa-envelope\"></i></span>\r\n                  </div>\r\n                  <input required pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\"\r\n                    [class.is-invalid]=\"emailRef.invalid && emailRef.touched\"\r\n                    #emailRef=\"ngModel\" [(ngModel)]=\"email\" type=\"email\" name=\"email\" \r\n                    class=\"form-control\" placeholder=\"email\">\r\n                  </div>\r\n                <small class=\"text-danger\" [class.d-none]=\"emailRef.untouched || !emailRef.hasError('required')\">El email es requerido</small>\r\n                <small class=\"text-danger\" [class.d-none]=\"emailRef.untouched || !emailRef.hasError('pattern') \">No es en un email valido</small>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\" style=\"width:2rem\"><i class=\"fa fa-lock\"></i></span>\r\n                </div>\r\n                <input required minlength=\"6\"\r\n                [class.is-invalid]=\"passwordRef.invalid && passwordRef.touched\"\r\n                  #passwordRef=\"ngModel\" [(ngModel)]=\"password\" type=\"password\" name=\"password\"\r\n                  class=\"form-control\" placeholder=\"Contraseña\" >\r\n              </div>\r\n              <small class=\"text-danger\" [class.d-none]=\"passwordRef.untouched || !passwordRef.hasError('required')\">El password es requerido</small>\r\n              <small class=\"text-danger\" [class.d-none]=\"passwordRef.untouched || !passwordRef.hasError('minlength')\">La longitud mínima es 6 caracteres</small>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <button  [disabled]=\"miForm.form.invalid\" type=\"submit\" class=\"btn btn-primary btn-block\">\r\n                <span><i class=\"fa fa-check\"></i></span> Aceptar </button>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, route, msgService) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.msgService = msgService;
        this.email = '';
        this.password = '';
        this.retornar = '';
        this.environmentCompetencia = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].competencia;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) { return _this.retornar = params['retornar'] || '/home'; });
    };
    LoginComponent.prototype.onLogin = function () {
        this.environmentCompetencia ? this.onLoginLocalStorage() : this.onLoginFirebase();
    };
    LoginComponent.prototype.onLoginFirebase = function () {
        var _this = this;
        this.msgService.clearMessages();
        this.authService.login$(this.email, this.password).subscribe(function () { return _this.router.navigate([_this.retornar]); }, function (error) { return _this.msgService.sendMessage('Error: Ocurrió un error, verifique el email y la contraseña', 'alert-danger'); });
    };
    LoginComponent.prototype.onLoginLocalStorage = function () {
        var _this = this;
        this.msgService.clearMessages();
        this.authService.loginLocal$(this.email, this.password).subscribe(function () { return _this.router.navigate([_this.retornar]); }, function (error) { return _this.msgService.sendMessage('Error: Ocurrió un error, verifique el email y la contraseña', 'alert-danger'); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/generar-finales/filtro-finales.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/generar-finales/filtro-finales.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mat-h2\">Generar finales</h2>\r\n<form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"genero\" class=\"control-label\"> Genero </label>\r\n    <select formControlName=\"genero\" [class.is-invalid]=\"genero.invalid && genero.touched\" class=\"custom-select\">\r\n      <option value=\"\"></option>\r\n      <option value=\"Masculino\">Masculino</option>\r\n      <option value=\"Femenino\">Femenino</option>\r\n    </select>\r\n    <small class=\"text-danger\" [class.d-none]=\"genero.valid || genero.untouched\">El genero es requerido</small>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"categoria\" class=\"control-label\"> Categoría </label>\r\n    <select formControlName=\"categoria\" [class.is-invalid]=\"(categoria.invalid && categoria.touched)\"\r\n      class=\"custom-select\">\r\n      <option value=\"\"></option>\r\n      <option *ngFor=\"let registro of tblCategorias\">{{ registro.categoria }}</option>\r\n    </select>\r\n    <small class=\"text-danger\" [class.d-none]=\"categoria.valid || categoria.untouched\">La categoría es\r\n      requerida</small>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"distancia\" class=\"control-label\"> Distancia </label>\r\n    <select formControlName=\"distancia\" [class.is-invalid]=\"distancia.invalid && distancia.touched\"\r\n      class=\"custom-select\">\r\n      <option value=\"\"></option>\r\n      <option *ngFor=\"let registro of tblDistancias\">{{ registro.embarcacion + ' ' + registro.distancia }}</option>\r\n    </select>\r\n    <small class=\"text-danger\" [class.d-none]=\"distancia.untouched || !distancia.hasError('required')\">La distancia\r\n      es requerida</small>\r\n  </div>\r\n\r\n\r\n  <button [disabled]=\"!miForm.valid\" type=\"submit\" class=\"btn btn-block btn-primary\">\r\n    Filtrar\r\n  </button>\r\n\r\n  <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"limpiar()\">\r\n    Limpiar\r\n  </button>\r\n\r\n  <button type=\"button\" class=\"btn btn-success btn-block mt-5\" (click)=\"guardar()\">\r\n    Guardar\r\n  </button>\r\n  <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"salir()\">\r\n    Salir\r\n  </button>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/components/mcompetencia/generar-finales/filtro-finales.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/generar-finales/filtro-finales.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FiltroFinalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroFinalesComponent", function() { return FiltroFinalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_distancias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/distancias.service */ "./src/app/services/distancias.service.ts");





var FiltroFinalesComponent = /** @class */ (function () {
    function FiltroFinalesComponent(fb, categoriasService, distanciasService) {
        this.fb = fb;
        this.categoriasService = categoriasService;
        this.distanciasService = distanciasService;
        this.emitFiltrar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitLimpiar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitGuardar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitSalir = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FiltroFinalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriasService.getRecords$().subscribe(function (data) { return _this.tblCategorias = data; });
        this.distanciasService.getRecords$().subscribe(function (data) { return _this.tblDistancias = data; });
        this.buildForm();
    };
    FiltroFinalesComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            genero: [''],
            categoria: [''],
            club: [''],
            distancia: ['']
        });
    };
    Object.defineProperty(FiltroFinalesComponent.prototype, "genero", {
        get: function () {
            return this.miForm.get('genero');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FiltroFinalesComponent.prototype, "categoria", {
        get: function () {
            return this.miForm.get('categoria');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FiltroFinalesComponent.prototype, "distancia", {
        get: function () {
            return this.miForm.get('distancia');
        },
        enumerable: true,
        configurable: true
    });
    FiltroFinalesComponent.prototype.guardar = function () {
        this.emitGuardar.emit({
            genero: this.genero.value,
            categoria: this.categoria.value,
            distancia: this.distancia.value
        });
        //this.emitFiltrar.emit(this.miForm.value);
    };
    FiltroFinalesComponent.prototype.limpiar = function () {
        this.miForm.controls.genero.setValue('');
        this.miForm.controls.categoria.setValue('');
        this.miForm.controls.distancia.setValue('');
        this.emitLimpiar.emit();
    };
    FiltroFinalesComponent.prototype.onSubmit = function () {
        this.emitFiltrar.emit({
            genero: this.genero.value,
            categoria: this.categoria.value,
            distancia: this.distancia.value
        });
    };
    FiltroFinalesComponent.prototype.salir = function () {
        this.emitSalir.emit();
        //this.emitFiltrar.emit(this.miForm.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltroFinalesComponent.prototype, "emitFiltrar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltroFinalesComponent.prototype, "emitLimpiar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltroFinalesComponent.prototype, "emitGuardar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltroFinalesComponent.prototype, "emitSalir", void 0);
    FiltroFinalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filtro-finales',
            template: __webpack_require__(/*! ./filtro-finales.component.html */ "./src/app/components/mcompetencia/generar-finales/filtro-finales.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"],
            src_app_services_distancias_service__WEBPACK_IMPORTED_MODULE_4__["DistanciasService"]])
    ], FiltroFinalesComponent);
    return FiltroFinalesComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/generar-finales/generar-finales.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/generar-finales/generar-finales.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board\" cdkDropList [cdkDropListData]=\"series\" \r\n  (cdkDropListDropped)=\"onTrackDrop($event)\" \r\n  cdkDropListOrientation=\"horizontal\">\r\n\r\n  <div class=\"card-list mat-elevation-z1\">\r\n    <app-filtro-finales\r\n      (emitFiltrar)=\"filtrarSeries($event)\"\r\n      (emitLimpiar)=\"limpiarFiltro()\"\r\n      (emitSalir)=\"salir()\"\r\n      (emitGuardar)=\"guardarCambios($event)\">\r\n    </app-filtro-finales>\r\n  </div>\r\n\r\n  <div class=\"card-list mat-elevation-z1\" \r\n    *ngFor=\"let serie of series\">\r\n\r\n    <h2 cdkDragHandle class=\"mat-h4\">{{serie.serie}}</h2>\r\n\r\n    <div class=\"card-list-content\" \r\n      cdkDropList [id]=\"serie.serie\" \r\n      [cdkDropListData]=\"serie.detalleSerie\"\r\n      [cdkDropListConnectedTo]=\"SerieIds\" \r\n      (cdkDropListDropped)=\"onTalkDrop($event)\">\r\n\r\n\r\n        <mat-card *ngFor=\"let palista of serie.detalleSerie\" cdkDrag class=\"custom-card\">\r\n          <!-- Use the mat-card-content to add the proper spacing. -->\r\n          <mat-card-content>\r\n              <span class=\"text-muted\">{{ palista.palista }}</span> <span [ngClass]=\"resultadoClass(palista.resultado)\"> - {{ palista.resultado }}</span>\r\n              <div class=\"text-dark\">{{palista.club}}</div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/mcompetencia/generar-finales/generar-finales.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/generar-finales/generar-finales.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-card {\n  background-color: white;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem; }\n\n.board {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 90%;\n  padding: 8px;\n  box-sizing: border-box;\n  overflow-x: auto;\n  overflow-y: hidden; }\n\n.card-list {\n  height: 100%;\n  width: 320px;\n  overflow: auto;\n  box-sizing: border-box;\n  margin-right: 8px;\n  flex-shrink: 0;\n  background: rgba(0, 0, 0, 0.03);\n  border-radius: 4px;\n  padding: 8px; }\n\n.card-list {\n  display: flex;\n  flex-direction: column; }\n\n.card-list h2 {\n    margin-bottom: 5px; }\n\n.card-list button {\n    flex-shrink: 0;\n    margin-top: 10px; }\n\n.card-list-content {\n  overflow: auto;\n  flex-grow: 1; }\n\n.cdk-drag-animating, .cdk-drop-list-dragging .cdk-drag {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tY29tcGV0ZW5jaWEvZ2VuZXJhci1maW5hbGVzL0M6XFxQcm95ZWN0b3NcXGZlYm9rYWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1jb21wZXRlbmNpYVxcZ2VuZXJhci1maW5hbGVzXFxnZW5lcmFyLWZpbmFsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBR0UsYUFBYTtFQUNiLG1CQUFtQjtFQUduQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUVFLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsY0FBYztFQUdkLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdkO0VBRUUsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUh4QjtJQU9JLGtCQUFrQixFQUFBOztBQVB0QjtJQVlJLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFFRSxjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQU1kO0VBQ0UsOERBQXNEO0VBQXRELHNEQUFzRDtFQUF0RCwwR0FBc0QsRUFBQTs7QUFJeEQ7RUFDRSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21jb21wZXRlbmNpYS9nZW5lcmFyLWZpbmFsZXMvZ2VuZXJhci1maW5hbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgLy8gRmxleGJveCBzdHlsaW5nIHRoYXQgZGVmaW5lcyB0aGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBjb250ZW50IGlzIGZsb3dpbmcuICAvLyAgIzUwODU4QlxyXG4gIC8vIEFsc28gbWFrZXMgaXQgZWFzaWVyIHRvIHN0cmV0Y2ggdGhlIGxpc3RzIHRvIHRoZSBoZWlnaHQgb2YgdGhlIHNjcmVlbiBsYXRlciBvbi5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gIC8vIEVuc3VyZSB0aGF0IHRoZSBib2FyZCBjb3ZlcnMgdGhlIHZpZXdwb3J0IGFuZCBhZGQgc29tZSBwYWRkaW5nIHRvIG1ha2UgaXQgbG9vayBiZXR0ZXIuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gIC8vIE9ubHkgYWxsb3cgaG9yaXpvbnRhbCBzY3JvbGxpbmcuXHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkLWxpc3Qge1xyXG4gIC8vIFN0cmV0Y2ggdGhlIGVsZW1lbnQgdG8gdGhlIGhlaWdodCBvZiB0aGUgYm9hcmQgYW5kIG1ha2UgaXQgc2Nyb2xsYWJsZS5cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gIC8vIFNvbWUgZXh0cmEgc3R5bGluZyB0byBtYWtlIHRoZSBjYXJkIGxpc3QgbG9vayBiZXR0ZXIuXHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uY2FyZC1saXN0IHtcclxuICAvLyBNYWtlcyBpdCBwb3NzaWJsZSBmb3IgdGhlIGBjYXJkLWxpc3QtY29udGVudCBgIHRvIHRha2UgdXAgdGhlIHJlbWFpbmluZyBzcGFjZS5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIGgyIHtcclxuICAgIC8vIEV4dHJhIHNwYWNpbmcgdG8gbWFrZSB0aGluZ3MgbG9vayBiZXR0ZXIuXHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgLy8gVGhlIGZsZXgtc2hyaW5rIHByZXZlbnRzIHRoZSBidXR0b24gZnJvbSBzaHJpbmtpbmcgaWYgdGhlIGxpc3QgY29udGVudCBiZWNvbWVzIHRvbyBsYXJnZS5cclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWxpc3QtY29udGVudCB7XHJcbiAgLy8gTWFrZSB0aGUgbGlzdCBzY3JvbGxhYmxlIGFuZCBzdHJldGNoIGl0IHRvIHRha2UgdXAgdGhlIGF2YWlsYWJsZSBoZWlnaHQuXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4vLyBJZiBpdGVtcyBhcmUgYmVpbmcgcmVvcmRlcmVkIHRocm91Z2ggZHJhZ2dpbmcsIGFsbCBvdGhlciBlbGVtZW50cyBzaG91bGRcclxuLy8gcmVvcmRlciBzbW9vdGhseS4gQWxzbyBpZiBhbiBpdGVtIGlzIGJlaW5nIGRyb3BwZWQsIGl0IHNob3VsZCBhbmltYXRlXHJcbi8vIGludG8gaXRzIHRhcmdldCBwb3NpdGlvbi5cclxuLmNkay1kcmFnLWFuaW1hdGluZywgLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmNkay1kcmFnIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi8vIEhpZGVzIHRoZSBwbGFjZWhvbGRlciBpZiBhbiBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWQuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/mcompetencia/generar-finales/generar-finales.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/generar-finales/generar-finales.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GenerarFinalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarFinalesComponent", function() { return GenerarFinalesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_services_series_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/series.service */ "./src/app/services/series.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_msg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/msg.service */ "./src/app/services/msg.service.ts");






var GenerarFinalesComponent = /** @class */ (function () {
    function GenerarFinalesComponent(dataService, actRoute, router, cdRef, msg) {
        this.dataService = dataService;
        this.actRoute = actRoute;
        this.router = router;
        this.cdRef = cdRef;
        this.msg = msg;
        this.mostrarSeries = false;
        this.title = "angular-drag-drop";
        this.tipoCarrera = '';
        this.series = [];
        this.condiciones = {
            semis: {
                pasanDirectoAfinal: [1, 2, 3],
                pasanAsemiFinal: [4, 5, 6, 7],
                adicional: { posicion: [8], cantidad: 1 }
            },
            finales: {
                pasanAfinal: [1, 2, 3]
            }
        };
    }
    GenerarFinalesComponent.prototype.ngOnInit = function () {
    };
    GenerarFinalesComponent.prototype.ngOnDestroy = function () {
    };
    GenerarFinalesComponent.prototype.filtrarSeries = function (objFiltro) {
        this.series = [];
        var arrSeries = this.dataService.getCarreras('semis')
            .filter(function (elemento) { return elemento.genero === objFiltro.genero && elemento.categoria === objFiltro.categoria && elemento.distancia === objFiltro.distancia; })
            .map(function (elemento) { return elemento.id; });
        this.getSeries(arrSeries);
        this.seleccionarAdicional();
        this.mostrarSeries = true;
    };
    GenerarFinalesComponent.prototype.seleccionarAdicional = function () {
        var _this = this;
        var arr = this.series.map(function (elemento) { return elemento.detalleSerie.map(function (el) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ serie: elemento.serie }, el); }); })
            .reduce(function (a, b) { return a.concat(b); })
            .filter(function (elemento) { return elemento.resultado === 'Revisión'; })
            .sort(function (a, b) { return a.tiempo < b.tiempo ? -1 : a.tiempo < b.tiempo ? 1 : 0; });
        arr.forEach(function (el, index) {
            var indexSerie = _this.series.findIndex(function (serie) { return serie.serie === el.serie; });
            var indexPalista = _this.series[indexSerie].detalleSerie.findIndex(function (palista) { return palista.id === el.id; });
        });
    };
    GenerarFinalesComponent.prototype.getSeries = function (arrFiltro) {
        var _this = this;
        if (arrFiltro) {
            arrFiltro.forEach(function (elemento) {
                return _this.series.push({
                    serie: elemento,
                    detalleSerie: _this.dataService.getDetalleCarrera('semis', elemento)
                });
            });
        }
        else {
            this.series = null;
        }
    };
    Object.defineProperty(GenerarFinalesComponent.prototype, "SerieIds", {
        get: function () {
            return this.series.map(function (serie) { return serie.serie; });
        },
        enumerable: true,
        configurable: true
    });
    GenerarFinalesComponent.prototype.resultadoClass = function (resultado) {
        return {
            "text-success": resultado === 'Pasa a la final',
            "text-danger": resultado === 'Eliminado'
        };
    };
    GenerarFinalesComponent.prototype.onTalkDrop = function (event) {
        // In case the destination container is different from the previous container, we
        // need to transfer the given task to the target data array. This happens if
        // a task has been dropped on a different track.
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    GenerarFinalesComponent.prototype.onTrackDrop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
    };
    GenerarFinalesComponent.prototype.limpiarFiltro = function () {
        this.getSeries(null);
        this.cdRef.detectChanges();
        this.mostrarSeries = false;
    };
    GenerarFinalesComponent.prototype.guardarCambios = function (obj) {
        var finales = this.dataService.getFinales();
        var idFinal = finales.find(function (el) { return el.genero === obj.genero && el.categoria === obj.categoria && el.distancia === obj.distancia; }).id;
        var finalDetalle = this.dataService.getDetalleCarrera(this.tipoCarrera, idFinal);
        for (var i = 0; i < this.series.length; i++) {
            for (var j = 0; j < this.series[i].detalleSerie.length; j++) {
                var palista = this.series[i].detalleSerie[j];
                switch (palista.resultado) {
                    case 'Pasa a la final':
                        var registro = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, palista);
                        registro.idSerie = idFinal;
                        registro.tiempo = '';
                        registro.numero = '';
                        registro.posicion = 0;
                        registro.resultado = '';
                        finalDetalle.push(registro);
                        break;
                    default:
                        break;
                }
            }
        }
        this.dataService.updateDetalleFinales(idFinal, finalDetalle);
        this.msg.ok('Proceso realizado satisfactoriamente');
        this.limpiarFiltro();
    };
    GenerarFinalesComponent.prototype.salir = function () {
        this.router.navigate(["/"]);
    };
    GenerarFinalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generar-finales',
            template: __webpack_require__(/*! ./generar-finales.component.html */ "./src/app/components/mcompetencia/generar-finales/generar-finales.component.html"),
            styles: [__webpack_require__(/*! ./generar-finales.component.scss */ "./src/app/components/mcompetencia/generar-finales/generar-finales.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_series_service__WEBPACK_IMPORTED_MODULE_3__["SeriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            src_app_services_msg_service__WEBPACK_IMPORTED_MODULE_5__["MsgService"]])
    ], GenerarFinalesComponent);
    return GenerarFinalesComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/generar-series/generar-series.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/generar-series/generar-series.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\">\r\n        Generar series\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-9\">\r\n            <h5>Clubes</h5>\r\n            <table class=\"table\">\r\n              <ng-container *ngIf=\"!!clubes\">\r\n                <tr *ngFor=\"let item of clubes\">\r\n                  <td class=\"p-1\"> {{ item }} </td>\r\n                </tr>\r\n              </ng-container>\r\n            </table>\r\n          </div>\r\n\r\n          <div class=\"col-3\">\r\n            <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"onGenerar()\">\r\n              <i class=\"fa fa-running\"></i> Generar\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n              Cancelar\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n\r\n          <h5>Categorías</h5>\r\n          <table class=\"table\">\r\n            <thead>\r\n              <tr>\r\n                <th>Categoría</th>\r\n                <th>Genero</th>\r\n                <th>Distancia</th>\r\n                <th>Competidores</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of series\">\r\n                <td> {{ item.categoria }} </td>\r\n                <td> {{ item.genero }} </td>\r\n                <td> {{ item.distancia }} </td>\r\n                <td> {{ item.cantidad }} </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/mcompetencia/generar-series/generar-series.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/generar-series/generar-series.component.ts ***!
  \************************************************************************************/
/*! exports provided: GenerarSeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarSeriesComponent", function() { return GenerarSeriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_inscripciones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/inscripciones.service */ "./src/app/services/inscripciones.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_series_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/series.service */ "./src/app/services/series.service.ts");







var GenerarSeriesComponent = /** @class */ (function () {
    function GenerarSeriesComponent(router, location, msgService, inscripcionesService, dataService) {
        this.router = router;
        this.location = location;
        this.msgService = msgService;
        this.inscripcionesService = inscripcionesService;
        this.dataService = dataService;
        this.inscripciones = [];
        this.grupoSeries = [];
        this.series = [];
        this.detalleSeries = [];
        this.clubes = [];
        this.semis = [];
        this.finales = [];
    }
    GenerarSeriesComponent.prototype.ngOnInit = function () {
        this.limpiarCarreras();
        this.cargarInscripciones();
    };
    GenerarSeriesComponent.prototype.limpiarCarreras = function () {
        this.dataService.limpiarCarreras();
    };
    GenerarSeriesComponent.prototype.cargarInscripciones = function () {
        var _this = this;
        this.inscripcionesService.getRecords$().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].distancia.length; j++) {
                    _this.inscripciones.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data[i], { distancia: data[i].distancia[j] }));
                }
            }
            _this.inscripciones.sort(function (a, b) { return a.categoria + a.genero + a.distancia > b.categoria + b.genero + b.distancia ? -1 : 0; });
            _this.generarClubes();
            _this.generarSeries();
            _this.generarFinalesYsemis();
            console.log(_this.grupoSeries);
        });
    };
    GenerarSeriesComponent.prototype.generarClubes = function () {
        var _this = this;
        this.inscripciones.forEach(function (elemento) {
            if (_this.clubes.indexOf(elemento.club) === -1) {
                _this.clubes.push(elemento.club);
            }
        });
    };
    GenerarSeriesComponent.prototype.generarSeries = function () {
        var numCarrera = 0;
        var i = 0;
        while (i < this.inscripciones.length) {
            var elemento = this.inscripciones[i];
            numCarrera++;
            var registro = this.generarObjetoSerie(elemento, numCarrera);
            this.series.push(registro);
            this.agregraGrupoSeries(registro);
            var numero = 0;
            while (i < this.inscripciones.length &&
                elemento.categoria + elemento.genero + elemento.distancia ===
                    registro.categoria + registro.genero + registro.distancia &&
                this.series[numCarrera - 1].cantidad < 9) {
                numero++;
                this.contarGrupoSeries(registro);
                this.series[numCarrera - 1].cantidad++;
                this.detalleSeries.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, elemento, { numero: numero.toString(), idSerie: registro.id, tiempo: '' }));
                i++;
                elemento = this.inscripciones[i];
            }
        }
    };
    GenerarSeriesComponent.prototype.generarObjetoSerie = function (data, contador) {
        return {
            id: contador.toString().padStart(4, '0'),
            categoria: data.categoria,
            genero: data.genero,
            distancia: data.distancia,
            cantidad: 0,
            status: { asignarNumero: false, cargarTiempos: false, generarResultados: false }
        };
    };
    GenerarSeriesComponent.prototype.agregraGrupoSeries = function (registro) {
        var encontro = this.grupoSeries.find(function (elemento) {
            return elemento.categoria + elemento.genero + elemento.distancia === registro.categoria + registro.genero + registro.distancia;
        });
        if (!encontro) {
            this.grupoSeries.push({
                categoria: registro.categoria, genero: registro.genero, distancia: registro.distancia, total: 0
            });
        }
    };
    GenerarSeriesComponent.prototype.contarGrupoSeries = function (reg) {
        var indice = this.grupoSeries.findIndex(function (el) {
            return el.categoria + el.genero + el.distancia === reg.categoria + reg.genero + reg.distancia;
        });
        this.grupoSeries[indice].total++;
    };
    GenerarSeriesComponent.prototype.generarFinalesYsemis = function () {
        var _this = this;
        var condiciones = [
            { minimo: 10, maximo: 18,
                carreras: { series: 2, semis: 1, final: 1 },
            },
            { minimo: 19, maximo: 27,
                carreras: { series: 3, semis: 2, final: 1 },
            },
            { minimo: 28, maximo: 36,
                carreras: { series: 4, semis: 3, final: 1 },
            },
            { minimo: 37, maximo: 45,
                carreras: { series: 5, semis: 3, final: 1 },
            },
            { minimo: 46, maximo: 54,
                carreras: { series: 6, semis: 3, final: 1 },
            },
            { minimo: 55, maximo: 63,
                carreras: { series: 7, semis: 4, final: 1 },
            },
            { minimo: 64, maximo: 72,
                carreras: { series: 8, semis: 4, final: 1 },
            }
        ];
        console.log("TCL: GenerarSeriesComponent -> generarFinalesYsemis -> grupoSeries", this.grupoSeries);
        for (var i = 0; i < this.grupoSeries.length; i++) {
            var el = this.grupoSeries[i];
            for (var j = 0; j < condiciones.length; j++) {
                var condicion = condiciones[j];
                if (el.total >= condicion.minimo && el.total <= condicion.maximo) {
                    this.grupoSeries[i] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, el, { carreras: condicion.carreras });
                }
            }
        }
        var contadorSemis = 0;
        var contadorFinales = 0;
        this.grupoSeries.forEach(function (el) {
            if (!!el.carreras) {
                for (var i = 0; i < el.carreras.semis; i++) {
                    console.log('Pasó por aqui');
                    contadorSemis++;
                    _this.semis.push({
                        id: 'S' + contadorSemis.toString().padStart(3, '0'),
                        categoria: el.categoria,
                        genero: el.genero,
                        distancia: el.distancia,
                        cantidad: '0',
                        status: { asignarNumero: false, cargarTiempos: false, generarResultados: false }
                    });
                }
                contadorFinales++;
                _this.finales.push({
                    id: 'F' + contadorFinales.toString().padStart(3, '0'),
                    categoria: el.categoria,
                    genero: el.genero,
                    distancia: el.distancia,
                    cantidad: '0',
                    status: { asignarNumero: false, cargarTiempos: false, generarResultados: false }
                });
            }
        });
    };
    GenerarSeriesComponent.prototype.onGenerar = function () {
        var _this = this;
        /* TODO: Verificar que no existan series,
            si hay series mostrar warning,
            si las series tienen tiempos cargados impedir generar series.
        */
        this.dataService.addAllGrupoSeries(this.grupoSeries);
        this.dataService.addAllSemifinales(this.semis);
        this.dataService.addAllFinales(this.finales);
        this.dataService.addSeriesLS$(this.series).subscribe(function () {
            return _this.dataService.addDetalleSeriesLS$(_this.detalleSeries).subscribe(function () { return _this.msgService.sendMessage('Proceso realizado satisfactoriamente'); });
        }, function () { return _this.msgService.sendMessage('Error generando las series', 'alert-danger'); }, function () { return _this.router.navigate(['home']); });
    };
    GenerarSeriesComponent.prototype.goBack = function () {
        this.location.back();
    };
    GenerarSeriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-generar-series',
            template: __webpack_require__(/*! ./generar-series.component.html */ "./src/app/components/mcompetencia/generar-series/generar-series.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_4__["MensajesService"],
            src_app_services_inscripciones_service__WEBPACK_IMPORTED_MODULE_1__["InscripcionesService"],
            src_app_services_series_service__WEBPACK_IMPORTED_MODULE_6__["SeriesService"]])
    ], GenerarSeriesComponent);
    return GenerarSeriesComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/importar/importar.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/mcompetencia/importar/importar.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-file {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.btn-file input[type=file] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    font-size: 100px;\r\n    text-align: right;\r\n    filter: alpha(opacity=0);\r\n    opacity: 0;\r\n    outline: none;\r\n    background: white;\r\n    cursor: inherit;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tY29tcGV0ZW5jaWEvaW1wb3J0YXIvaW1wb3J0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21jb21wZXRlbmNpYS9pbXBvcnRhci9pbXBvcnRhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1maWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJ0bi1maWxlIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogaW5oZXJpdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/mcompetencia/importar/importar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/mcompetencia/importar/importar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\">\r\n        Importar inscripciones\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"row\" >\r\n          <div class=\"col-9\">\r\n\r\n            <h5>Datos del archivo</h5>\r\n            <table  class=\"table\">\r\n              <tr>\r\n                <th>Nombre: </th>\r\n                <td colspan=\"3\" *ngIf=\"!!file\"> {{ file.name }} </td>\r\n              </tr>\r\n              <tr>\r\n                <th>Fecha: </th>\r\n                <td *ngIf=\"!!file\"> {{ fecha }} </td>\r\n                <th>Hora: </th>\r\n                <td *ngIf=\"!!file\"> {{ hora }} </td>\r\n              </tr>\r\n              \r\n              <tr>\r\n                <th>tipo: </th>\r\n                <td *ngIf=\"!!file\"> {{ file.type }} </td>\r\n                <th>tamaño: </th>\r\n                <td *ngIf=\"!!file\"> {{ file.size }} </td>\r\n              </tr>\r\n            </table>\r\n            <div *ngIf=\"!!competencia\" class=\"\">\r\n              <p class=\"text-center\"><small>\r\n                {{ competencia.club }} <br>\r\n                {{ competencia.competencia}} <br>\r\n                desde {{ competencia.desde }} hasta {{ competencia.hasta }} <br>\r\n              </small></p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-3\">\r\n            <h5>Tablas</h5>\r\n            <table class=\"table\">\r\n              <ng-container *ngIf=\"!!tablas\"> \r\n                <tr *ngFor=\"let tabla of tablas\">\r\n                  <td class=\"p-1\"> {{ tabla }} </td>\r\n                </tr>\r\n              </ng-container>\r\n            </table>\r\n          </div>\r\n        </div >\r\n\r\n\r\n\r\n        <label class=\"btn btn-primary btn-block btn-file\">\r\n            <i class=\"fa fa-folder\"> </i> Seleccione el archivo \r\n          <input #fileUrl type=\"file\" style=\"display: none;\" accept=\".json\" (change)=\"onChange($event)\">\r\n        </label>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!fileUrl.value\"\r\n              (click)=\"onUpload()\">\r\n              <i class=\"fa fa-upload\"></i> Importar datos\r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button type=\"button\" class=\"btn btn-lg btn-secondary btn-block\" (click)=\"goBack()\">\r\n              Cancelar\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/mcompetencia/importar/importar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/mcompetencia/importar/importar.component.ts ***!
  \************************************************************************/
/*! exports provided: ImportarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportarComponent", function() { return ImportarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ImportarComponent = /** @class */ (function () {
    function ImportarComponent(router, location, msgService) {
        this.router = router;
        this.location = location;
        this.msgService = msgService;
    }
    ImportarComponent.prototype.ngOnInit = function () {
    };
    ImportarComponent.prototype.onChange = function (e) {
        var _this = this;
        this.file = e.target.files[0];
        var fecha = new Date(this.file.lastModified);
        this.fecha = fecha.toLocaleDateString();
        this.hora = fecha.toLocaleTimeString();
        var reader = new FileReader();
        reader.onloadend = function () {
            _this.datos = JSON.parse(reader.result);
            _this.tablas = Object.keys(_this.datos);
            _this.competencia = _this.datos['competencias'][0];
        };
        reader.readAsText(this.file);
    };
    ImportarComponent.prototype.onUpload = function () {
        var _this = this;
        var tablas = ['categorias', 'clubes', 'distancias', 'competencias', 'consola', 'inscripciones', 'palistas', 'users'];
        tablas.forEach(function (tabla) {
            localStorage.setItem(tabla, JSON.stringify(_this.datos[tabla]));
        });
        this.router.navigate(['home']);
        this.msgService.sendMessage('Inscripciones importadas satisfactoriamente');
    };
    ImportarComponent.prototype.goBack = function () {
        this.location.back();
    };
    ImportarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-importar',
            template: __webpack_require__(/*! ./importar.component.html */ "./src/app/components/mcompetencia/importar/importar.component.html"),
            styles: [__webpack_require__(/*! ./importar.component.css */ "./src/app/components/mcompetencia/importar/importar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]])
    ], ImportarComponent);
    return ImportarComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/inicializar-competencia/inicializar-competencia.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/inicializar-competencia/inicializar-competencia.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5\">\r\n  <div class=\"col-6 mx-auto\">\r\n\r\n    <div class=\"jumbotron p-5\">\r\n      <h1 class=\"display-6\">Limpiar Local Storage!</h1>\r\n      <p class=\"lead\">Este proceso elimina todos los datos del módulo de competencias de Local Storage.\r\n        Esto puede ser útil para inicializar pruebas, o para correr una nueva instalación del módulo.\r\n      </p>\r\n      <hr class=\"my-4\">\r\n      <p>\r\n        Se debe ser muy cuidadoso con su uso porque podría llevar a la perdida definitiva de datos.\r\n      </p>\r\n      <div class=\"row\">\r\n        <div class=\"col-10 mx-auto\">\r\n          <button class=\"btn btn btn-lg btn-block btn-warning\" (click)=\"onSubmit()\">\r\n            <i class=\"fa fa-trash fa-2x\"></i> Limpiar\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/mcompetencia/inicializar-competencia/inicializar-competencia.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/inicializar-competencia/inicializar-competencia.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: InicializarCompetenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicializarCompetenciaComponent", function() { return InicializarCompetenciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");




var InicializarCompetenciaComponent = /** @class */ (function () {
    function InicializarCompetenciaComponent(location, msgService) {
        this.location = location;
        this.msgService = msgService;
    }
    InicializarCompetenciaComponent.prototype.ngOnInit = function () {
    };
    InicializarCompetenciaComponent.prototype.onSubmit = function () {
        this.limpiarLocalStorage();
    };
    InicializarCompetenciaComponent.prototype.goBack = function () {
        this.location.back();
    };
    InicializarCompetenciaComponent.prototype.limpiarLocalStorage = function () {
        localStorage.removeItem('carreras');
        localStorage.removeItem('superGlobal');
        localStorage.removeItem('palistas');
        localStorage.removeItem('clubes');
        localStorage.removeItem('empleados');
        localStorage.removeItem('distancias');
        localStorage.removeItem('detalleCcarreras');
        localStorage.removeItem('detalleCarreras');
        localStorage.removeItem('categorias');
        localStorage.removeItem('inscripciones');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('competencias');
        localStorage.removeItem('almacenamiento');
        localStorage.removeItem('users');
        this.msgService.sendMessage('Local Storage limpiado satisfactoriamente');
    };
    InicializarCompetenciaComponent.prototype.inicializarUsuario = function () {
    };
    InicializarCompetenciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicializar-competencia',
            template: __webpack_require__(/*! ./inicializar-competencia.component.html */ "./src/app/components/mcompetencia/inicializar-competencia/inicializar-competencia.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"]])
    ], InicializarCompetenciaComponent);
    return InicializarCompetenciaComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/redireccionar-login/redireccionar-login.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/redireccionar-login/redireccionar-login.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5\">\r\n    <div class=\"col-6 mx-auto\">\r\n  \r\n      <div class=\"jumbotron p-5\">\r\n        <h1 class=\"display-6\">Configurar el sistema!</h1>\r\n        <p class=\"lead\">El sistema detectó que aún no ha realizado la importacion de los datos \r\n          de las inscripciones.\r\n        </p>\r\n        <hr class=\"my-4\">\r\n        <p>\r\n          Será redireccionado a la opción para importar las inscripciones.\r\n        </p>\r\n        <div class=\"row\">\r\n          <div class=\"col-10 mx-auto\">\r\n            <button class=\"btn btn btn-lg btn-block btn-success\" (click)=\"onSubmit()\">\r\n              <i class=\"fa fa-angle-double-right fa-2x\"></i> Continuar\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/mcompetencia/redireccionar-login/redireccionar-login.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/redireccionar-login/redireccionar-login.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: RedireccionarLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedireccionarLoginComponent", function() { return RedireccionarLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RedireccionarLoginComponent = /** @class */ (function () {
    function RedireccionarLoginComponent(router) {
        this.router = router;
    }
    RedireccionarLoginComponent.prototype.ngOnInit = function () {
    };
    RedireccionarLoginComponent.prototype.onSubmit = function () {
        this.router.navigate(["importar-inscripciones"]);
    };
    RedireccionarLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redireccionar-login',
            template: __webpack_require__(/*! ./redireccionar-login.component.html */ "./src/app/components/mcompetencia/redireccionar-login/redireccionar-login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RedireccionarLoginComponent);
    return RedireccionarLoginComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/semis/generar-semis/filtro-semis.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/semis/generar-semis/filtro-semis.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mat-h2\">Generar semi finales</h2>\r\n<form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"genero\" class=\"control-label\"> Genero </label>\r\n    <select formControlName=\"genero\" [class.is-invalid]=\"genero.invalid && genero.touched\" class=\"custom-select\">\r\n      <option value=\"\"></option>\r\n      <option value=\"Masculino\">Masculino</option>\r\n      <option value=\"Femenino\">Femenino</option>\r\n    </select>\r\n    <small class=\"text-danger\" [class.d-none]=\"genero.valid || genero.untouched\">El genero es requerido</small>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"categoria\" class=\"control-label\"> Categoría </label>\r\n    <select formControlName=\"categoria\" [class.is-invalid]=\"(categoria.invalid && categoria.touched)\"\r\n      class=\"custom-select\">\r\n      <option value=\"\"></option>\r\n      <option *ngFor=\"let registro of tblCategorias\">{{ registro.categoria }}</option>\r\n    </select>\r\n    <small class=\"text-danger\" [class.d-none]=\"categoria.valid || categoria.untouched\">La categoría es\r\n      requerida</small>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"distancia\" class=\"control-label\"> Distancia </label>\r\n    <select formControlName=\"distancia\" [class.is-invalid]=\"distancia.invalid && distancia.touched\"\r\n      class=\"custom-select\">\r\n      <option value=\"\"></option>\r\n      <option *ngFor=\"let registro of tblDistancias\">{{ registro.embarcacion + ' ' + registro.distancia }}</option>\r\n    </select>\r\n    <small class=\"text-danger\" [class.d-none]=\"distancia.untouched || !distancia.hasError('required')\">La distancia\r\n      es requerida</small>\r\n  </div>\r\n\r\n\r\n  <button [disabled]=\"!miForm.valid\" type=\"submit\" class=\"btn btn-block btn-primary\">\r\n    Filtrar\r\n  </button>\r\n\r\n  <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"limpiar()\">\r\n    Limpiar\r\n  </button>\r\n\r\n  <button type=\"button\" class=\"btn btn-success btn-block mt-5\" (click)=\"guardar()\">\r\n    Guardar\r\n  </button>\r\n  <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"salir()\">\r\n    Salir\r\n  </button>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/components/mcompetencia/semis/generar-semis/filtro-semis.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/semis/generar-semis/filtro-semis.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FiltroSemisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroSemisComponent", function() { return FiltroSemisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_distancias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/distancias.service */ "./src/app/services/distancias.service.ts");





var FiltroSemisComponent = /** @class */ (function () {
    function FiltroSemisComponent(fb, categoriasService, distanciasService) {
        this.fb = fb;
        this.categoriasService = categoriasService;
        this.distanciasService = distanciasService;
        this.emitFiltrar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitLimpiar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitGuardar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitSalir = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FiltroSemisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriasService.getRecords$().subscribe(function (data) { return _this.tblCategorias = data; });
        this.distanciasService.getRecords$().subscribe(function (data) { return _this.tblDistancias = data; });
        this.buildForm();
    };
    FiltroSemisComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            genero: [''],
            categoria: [''],
            club: [''],
            distancia: ['']
        });
    };
    Object.defineProperty(FiltroSemisComponent.prototype, "genero", {
        get: function () {
            return this.miForm.get('genero');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FiltroSemisComponent.prototype, "categoria", {
        get: function () {
            return this.miForm.get('categoria');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FiltroSemisComponent.prototype, "distancia", {
        get: function () {
            return this.miForm.get('distancia');
        },
        enumerable: true,
        configurable: true
    });
    FiltroSemisComponent.prototype.guardar = function () {
        this.emitGuardar.emit({
            genero: this.genero.value,
            categoria: this.categoria.value,
            distancia: this.distancia.value
        });
        //this.emitFiltrar.emit(this.miForm.value);
    };
    FiltroSemisComponent.prototype.limpiar = function () {
        this.miForm.controls.genero.setValue('');
        this.miForm.controls.categoria.setValue('');
        this.miForm.controls.distancia.setValue('');
        this.emitLimpiar.emit();
    };
    FiltroSemisComponent.prototype.onSubmit = function () {
        this.emitFiltrar.emit({
            genero: this.genero.value,
            categoria: this.categoria.value,
            distancia: this.distancia.value
        });
    };
    FiltroSemisComponent.prototype.salir = function () {
        this.emitSalir.emit();
        //this.emitFiltrar.emit(this.miForm.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltroSemisComponent.prototype, "emitFiltrar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltroSemisComponent.prototype, "emitLimpiar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltroSemisComponent.prototype, "emitGuardar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltroSemisComponent.prototype, "emitSalir", void 0);
    FiltroSemisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filtro-semis',
            template: __webpack_require__(/*! ./filtro-semis.component.html */ "./src/app/components/mcompetencia/semis/generar-semis/filtro-semis.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"],
            src_app_services_distancias_service__WEBPACK_IMPORTED_MODULE_4__["DistanciasService"]])
    ], FiltroSemisComponent);
    return FiltroSemisComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/semis/generar-semis/generar-semis.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/semis/generar-semis/generar-semis.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board\" cdkDropList [cdkDropListData]=\"series\" \r\n  (cdkDropListDropped)=\"onTrackDrop($event)\" \r\n  cdkDropListOrientation=\"horizontal\">\r\n\r\n  <div class=\"card-list mat-elevation-z1\">\r\n    <app-filtro-semis\r\n      (emitFiltrar)=\"filtrarSeries($event)\"\r\n      (emitLimpiar)=\"limpiarFiltro()\"\r\n      (emitSalir)=\"salir()\"\r\n      (emitGuardar)=\"guardarCambios($event)\">\r\n    </app-filtro-semis>\r\n  </div>\r\n\r\n  <div class=\"card-list mat-elevation-z1\" \r\n    *ngFor=\"let serie of series\">\r\n\r\n    <h2 cdkDragHandle class=\"mat-h4\">{{serie.serie}}</h2>\r\n\r\n    <div class=\"card-list-content\" \r\n      cdkDropList [id]=\"serie.serie\" \r\n      [cdkDropListData]=\"serie.detalleSerie\"\r\n      [cdkDropListConnectedTo]=\"SerieIds\" \r\n      (cdkDropListDropped)=\"onTalkDrop($event)\">\r\n\r\n\r\n        <mat-card *ngFor=\"let palista of serie.detalleSerie\" cdkDrag class=\"custom-card\">\r\n          <!-- Use the mat-card-content to add the proper spacing. -->\r\n          <mat-card-content>\r\n              <span class=\"text-muted\">{{ palista.palista }}</span> <span [ngClass]=\"resultadoClass(palista.resultado)\"> - {{ palista.resultado }}</span>\r\n              <div class=\"text-dark\">{{palista.club}}</div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/mcompetencia/semis/generar-semis/generar-semis.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/semis/generar-semis/generar-semis.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-card {\n  background-color: white;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem; }\n\n.board {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 90%;\n  padding: 8px;\n  box-sizing: border-box;\n  overflow-x: auto;\n  overflow-y: hidden; }\n\n.card-list {\n  height: 100%;\n  width: 320px;\n  overflow: auto;\n  box-sizing: border-box;\n  margin-right: 8px;\n  flex-shrink: 0;\n  background: rgba(0, 0, 0, 0.03);\n  border-radius: 4px;\n  padding: 8px; }\n\n.card-list {\n  display: flex;\n  flex-direction: column; }\n\n.card-list h2 {\n    margin-bottom: 5px; }\n\n.card-list button {\n    flex-shrink: 0;\n    margin-top: 10px; }\n\n.card-list-content {\n  overflow: auto;\n  flex-grow: 1; }\n\n.cdk-drag-animating, .cdk-drop-list-dragging .cdk-drag {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tY29tcGV0ZW5jaWEvc2VtaXMvZ2VuZXJhci1zZW1pcy9DOlxcUHJveWVjdG9zXFxmZWJva2FjL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtY29tcGV0ZW5jaWFcXHNlbWlzXFxnZW5lcmFyLXNlbWlzXFxnZW5lcmFyLXNlbWlzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHVCQUF1QixFQUFBOztBQUd6QjtFQUdFLGFBQWE7RUFDYixtQkFBbUI7RUFHbkIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFFRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFHZCwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHZDtFQUVFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFIeEI7SUFPSSxrQkFBa0IsRUFBQTs7QUFQdEI7SUFZSSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBRUUsY0FBYztFQUNkLFlBQVksRUFBQTs7QUFNZDtFQUNFLDhEQUFzRDtFQUF0RCxzREFBc0Q7RUFBdEQsMEdBQXNELEVBQUE7O0FBSXhEO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tY29tcGV0ZW5jaWEvc2VtaXMvZ2VuZXJhci1zZW1pcy9nZW5lcmFyLXNlbWlzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgLy8gRmxleGJveCBzdHlsaW5nIHRoYXQgZGVmaW5lcyB0aGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBjb250ZW50IGlzIGZsb3dpbmcuICAvLyAgIzUwODU4QlxyXG4gIC8vIEFsc28gbWFrZXMgaXQgZWFzaWVyIHRvIHN0cmV0Y2ggdGhlIGxpc3RzIHRvIHRoZSBoZWlnaHQgb2YgdGhlIHNjcmVlbiBsYXRlciBvbi5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gIC8vIEVuc3VyZSB0aGF0IHRoZSBib2FyZCBjb3ZlcnMgdGhlIHZpZXdwb3J0IGFuZCBhZGQgc29tZSBwYWRkaW5nIHRvIG1ha2UgaXQgbG9vayBiZXR0ZXIuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gIC8vIE9ubHkgYWxsb3cgaG9yaXpvbnRhbCBzY3JvbGxpbmcuXHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkLWxpc3Qge1xyXG4gIC8vIFN0cmV0Y2ggdGhlIGVsZW1lbnQgdG8gdGhlIGhlaWdodCBvZiB0aGUgYm9hcmQgYW5kIG1ha2UgaXQgc2Nyb2xsYWJsZS5cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gIC8vIFNvbWUgZXh0cmEgc3R5bGluZyB0byBtYWtlIHRoZSBjYXJkIGxpc3QgbG9vayBiZXR0ZXIuXHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uY2FyZC1saXN0IHtcclxuICAvLyBNYWtlcyBpdCBwb3NzaWJsZSBmb3IgdGhlIGBjYXJkLWxpc3QtY29udGVudCBgIHRvIHRha2UgdXAgdGhlIHJlbWFpbmluZyBzcGFjZS5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIGgyIHtcclxuICAgIC8vIEV4dHJhIHNwYWNpbmcgdG8gbWFrZSB0aGluZ3MgbG9vayBiZXR0ZXIuXHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgLy8gVGhlIGZsZXgtc2hyaW5rIHByZXZlbnRzIHRoZSBidXR0b24gZnJvbSBzaHJpbmtpbmcgaWYgdGhlIGxpc3QgY29udGVudCBiZWNvbWVzIHRvbyBsYXJnZS5cclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWxpc3QtY29udGVudCB7XHJcbiAgLy8gTWFrZSB0aGUgbGlzdCBzY3JvbGxhYmxlIGFuZCBzdHJldGNoIGl0IHRvIHRha2UgdXAgdGhlIGF2YWlsYWJsZSBoZWlnaHQuXHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4vLyBJZiBpdGVtcyBhcmUgYmVpbmcgcmVvcmRlcmVkIHRocm91Z2ggZHJhZ2dpbmcsIGFsbCBvdGhlciBlbGVtZW50cyBzaG91bGRcclxuLy8gcmVvcmRlciBzbW9vdGhseS4gQWxzbyBpZiBhbiBpdGVtIGlzIGJlaW5nIGRyb3BwZWQsIGl0IHNob3VsZCBhbmltYXRlXHJcbi8vIGludG8gaXRzIHRhcmdldCBwb3NpdGlvbi5cclxuLmNkay1kcmFnLWFuaW1hdGluZywgLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmNkay1kcmFnIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi8vIEhpZGVzIHRoZSBwbGFjZWhvbGRlciBpZiBhbiBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWQuXHJcbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/mcompetencia/semis/generar-semis/generar-semis.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/semis/generar-semis/generar-semis.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GenerarSemisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarSemisComponent", function() { return GenerarSemisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_services_series_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/series.service */ "./src/app/services/series.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_msg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/msg.service */ "./src/app/services/msg.service.ts");
/* harmony import */ var src_app_services_condiciones_carreras_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/condiciones-carreras.service */ "./src/app/services/condiciones-carreras.service.ts");







var GenerarSemisComponent = /** @class */ (function () {
    function GenerarSemisComponent(dataService, condicionesService, router, cdRef, msg) {
        this.dataService = dataService;
        this.condicionesService = condicionesService;
        this.router = router;
        this.cdRef = cdRef;
        this.msg = msg;
        this.mostrarSeries = false;
        this.title = "angular-drag-drop";
        this.series = [];
    }
    GenerarSemisComponent.prototype.ngOnInit = function () {
    };
    GenerarSemisComponent.prototype.ngOnDestroy = function () {
    };
    GenerarSemisComponent.prototype.filtrarSeries = function (objFiltro) {
        this.condiciones = this.condicionesService.getCondiciones(objFiltro.categoria, objFiltro.genero, objFiltro.distancia);
        this.series = [];
        var arrSeries = this.dataService.getSeries()
            .filter(function (elemento) { return elemento.genero === objFiltro.genero && elemento.categoria === objFiltro.categoria && elemento.distancia === objFiltro.distancia; })
            .map(function (elemento) { return elemento.id; });
        this.getSeries(arrSeries);
        this.seleccionarAdicional();
        this.mostrarSeries = true;
    };
    GenerarSemisComponent.prototype.seleccionarAdicional = function () {
        var _this = this;
        var arr = this.series.map(function (elemento) { return elemento.detalleSerie.map(function (el) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ serie: elemento.serie }, el); }); })
            .reduce(function (a, b) { return a.concat(b); })
            .filter(function (elemento) { return elemento.resultado === 'Revisión'; })
            .sort(function (a, b) { return a.tiempo < b.tiempo ? -1 : a.tiempo < b.tiempo ? 1 : 0; });
        arr.forEach(function (el, index) {
            var indexSerie = _this.series.findIndex(function (serie) { return serie.serie === el.serie; });
            var indexPalista = _this.series[indexSerie].detalleSerie.findIndex(function (palista) { return palista.id === el.id; });
            if (index + 1 <= _this.condiciones.serie.adicional.cantidad) {
                _this.series[indexSerie].detalleSerie[indexPalista].resultado = 'Pasa a semifinal';
            }
            else {
                _this.series[indexSerie].detalleSerie[indexPalista].resultado = 'Eliminado';
            }
        });
    };
    GenerarSemisComponent.prototype.getSeries = function (arrFiltro) {
        var _this = this;
        if (arrFiltro) {
            arrFiltro.forEach(function (elemento) {
                return _this.series.push({
                    serie: elemento,
                    detalleSerie: _this.dataService.getDetalleSerie(elemento)
                });
            });
        }
        else {
            this.series = null;
        }
    };
    Object.defineProperty(GenerarSemisComponent.prototype, "SerieIds", {
        get: function () {
            return this.series.map(function (serie) { return serie.serie; });
        },
        enumerable: true,
        configurable: true
    });
    GenerarSemisComponent.prototype.resultadoClass = function (resultado) {
        return {
            "text-primary": resultado === 'Pasa directo a la final',
            "text-success": resultado === 'Pasa a semifinal',
            "text-warning": resultado === 'Revisión',
            "text-danger": resultado === 'Eliminado'
        };
    };
    GenerarSemisComponent.prototype.onTalkDrop = function (event) {
        // In case the destination container is different from the previous container, we
        // need to transfer the given task to the target data array. This happens if
        // a task has been dropped on a different track.
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    GenerarSemisComponent.prototype.onTrackDrop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
    };
    GenerarSemisComponent.prototype.limpiarFiltro = function () {
        this.getSeries(null);
        this.cdRef.detectChanges();
        this.mostrarSeries = false;
    };
    GenerarSemisComponent.prototype.guardarCambios = function (obj) {
        var _this = this;
        var finales = this.dataService.getFinales();
        var idFinal = finales.find(function (el) { return el.genero === obj.genero && el.categoria === obj.categoria && el.distancia === obj.distancia; }).id;
        var finalDetalle = [];
        var semis = this.dataService.getSemis();
        var arrIdSemis = semis.filter(function (el) { return el.genero === obj.genero && el.categoria === obj.categoria && el.distancia === obj.distancia; })
            .map(function (elemento) { return elemento.id; });
        var semisDetalle = [];
        var contadorPalistasPorSemis = 0;
        var semiFinalActual = 0;
        for (var i = 0; i < this.series.length; i++) {
            for (var j = 0; j < this.series[i].detalleSerie.length; j++) {
                var palista = this.series[i].detalleSerie[j];
                switch (palista.resultado) {
                    case 'Pasa directo a la final':
                        var registro = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, palista);
                        registro.idSerie = idFinal;
                        registro.tiempo = '';
                        registro.numero = '';
                        registro.posicion = 0;
                        registro.resultado = '';
                        finalDetalle.push(registro);
                        break;
                    case 'Pasa a semifinal':
                        registro = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, palista);
                        registro.idSerie = arrIdSemis[semiFinalActual];
                        registro.tiempo = '';
                        registro.numero = '';
                        registro.posicion = 0;
                        registro.resultado = '';
                        semisDetalle.push(registro);
                        contadorPalistasPorSemis++;
                        if (contadorPalistasPorSemis > 8) {
                            contadorPalistasPorSemis = 0;
                            semiFinalActual++;
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        this.updateNumPalistasEnCarrera('finales', idFinal, finalDetalle.length);
        this.dataService.updateDetalleFinales(idFinal, finalDetalle);
        arrIdSemis.forEach(function (id) {
            var semiFinal = semisDetalle.filter(function (elemento) { return elemento.idSerie === id; });
            _this.updateNumPalistasEnCarrera('semis', id, semiFinal.length);
            _this.dataService.updateDetalleSemis(id, semiFinal);
        });
        this.msg.ok('Proceso realizado satisfactoriamente');
        this.limpiarFiltro();
    };
    GenerarSemisComponent.prototype.updateNumPalistasEnCarrera = function (tipoCarrera, id, numPalistas) {
        var registro = this.dataService.getCarrera(tipoCarrera, id);
        registro.cantidad = numPalistas.toString();
        this.dataService.updateCarrera(tipoCarrera, id, registro);
    };
    GenerarSemisComponent.prototype.salir = function () {
        this.router.navigate(["/"]);
    };
    GenerarSemisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generar-semis',
            template: __webpack_require__(/*! ./generar-semis.component.html */ "./src/app/components/mcompetencia/semis/generar-semis/generar-semis.component.html"),
            styles: [__webpack_require__(/*! ./generar-semis.component.scss */ "./src/app/components/mcompetencia/semis/generar-semis/generar-semis.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_series_service__WEBPACK_IMPORTED_MODULE_3__["SeriesService"],
            src_app_services_condiciones_carreras_service__WEBPACK_IMPORTED_MODULE_6__["CondicionesCarrerasService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            src_app_services_msg_service__WEBPACK_IMPORTED_MODULE_5__["MsgService"]])
    ], GenerarSemisComponent);
    return GenerarSemisComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/series/asignar-numero/asignar-numero.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/asignar-numero/asignar-numero.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!serie.status.cargarTiempos; else infoMessage\">\r\n  <app-series-header\r\n    [titulo]=\"'Asignar números'\"\r\n    [serie]=\"serie\"\r\n    (emitGuardar)=\"onSave()\"\r\n    (emitCancelar)=\"goBack()\"\r\n  > </app-series-header>\r\n\r\n  <table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th> Número </th>\r\n        <th> Palista </th>\r\n        <th> Club </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let registro of tabla; let i=index\" >\r\n        <td width=\"15%\" class=\"pt-2 pb-2\"> \r\n          <input type=\"tel\" class=\"mi-form-control mi-font-min\" maxlength=2 [(ngModel)]=\"registro.numero\"> \r\n        </td>\r\n        <td class=\"pt-2 pb-2\"> {{ registro.palista }} </td>\r\n        <td class=\"pt-2 pb-2\"> {{ registro.club }} </td>\r\n        \r\n      </tr>\r\n    </tbody>\r\n\r\n  </table>\r\n</ng-container>\r\n\r\n<ng-template #infoMessage>\r\n    <div class=\"jumbotron\">\r\n      <h1 class=\"display-4\">Asignar números</h1>\r\n      <p class=\"lead\">\r\n        No puede reasignar los números  a los participantes de la serie <strong>{{ serie.id }}</strong> porque ya cargó los tiempos a los participantes\r\n      </p>\r\n      <hr class=\"my-4\">\r\n  \r\n      <div class=\"text-center\">\r\n        <button class=\"btn btn-lg btn-primary\" (click)=\"goBack()\">\r\n            Regresar <i class=\"fa fa-arrow-circle-left fa-2x\"></i>\r\n        </button>\r\n      </div>\r\n  \r\n    </div>\r\n  </ng-template>"

/***/ }),

/***/ "./src/app/components/mcompetencia/series/asignar-numero/asignar-numero.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/asignar-numero/asignar-numero.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AsignarNumeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarNumeroComponent", function() { return AsignarNumeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_series_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/series.service */ "./src/app/services/series.service.ts");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var src_app_services_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AsignarNumeroComponent = /** @class */ (function () {
    function AsignarNumeroComponent(dataService, msgService, spinner, location, actRoute, router) {
        this.dataService = dataService;
        this.msgService = msgService;
        this.spinner = spinner;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.titulo = '';
        this.id = '';
        this.tipoCarrera = '';
    }
    AsignarNumeroComponent.prototype.ngOnInit = function () {
        this.id = this.actRoute.snapshot.paramMap.get('id');
        this.tipoCarrera = this.actRoute.snapshot.paramMap.get('tipoCarrera');
        this.msgService.clearMessages();
        this.getRecords();
        this.getSerie();
    };
    AsignarNumeroComponent.prototype.getRecords = function () {
        this.tabla = this.dataService.getDetalleCarrera(this.tipoCarrera, this.id);
        this.tabla.sort(function (a, b) { return a.numero > b.numero ? 1 : a.numero < b.numero ? -1 : 0; });
    };
    AsignarNumeroComponent.prototype.getSerie = function () {
        this.serie = this.dataService.getCarrera(this.tipoCarrera, this.id);
    };
    AsignarNumeroComponent.prototype.retornar = function () {
        this.spinner.off();
        this.router.navigate(['carreras/' + this.tipoCarrera]);
    };
    AsignarNumeroComponent.prototype.onSave = function () {
        var todosTienenNumero = true;
        this.tabla.forEach(function (elemento) { return todosTienenNumero = todosTienenNumero && !!elemento.numero; });
        this.serie.status = { asignarNumero: todosTienenNumero, cargarTiempos: false, generarResultados: false };
        this.dataService.updateCarrera(this.tipoCarrera, this.id, this.serie);
        this.dataService.updateDetalleCarrera(this.tipoCarrera, this.id, this.tabla);
        this.msgService.sendMessage('Proceso realizado satisfactoriamente');
        this.retornar();
    };
    AsignarNumeroComponent.prototype.goBack = function () {
        this.location.back();
    };
    AsignarNumeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asignar-numero',
            template: __webpack_require__(/*! ./asignar-numero.component.html */ "./src/app/components/mcompetencia/series/asignar-numero/asignar-numero.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_series_service__WEBPACK_IMPORTED_MODULE_2__["SeriesService"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"],
            src_app_services_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AsignarNumeroComponent);
    return AsignarNumeroComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/series/cargar-tiempos/cargar-tiempos.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/cargar-tiempos/cargar-tiempos.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"serie.status.asignarNumero && !serie.status.generarResultados\">\r\n\r\n  <app-series-header\r\n    [titulo]=\"'Cargar tiempos'\"\r\n    [serie]=\"serie\"\r\n    (emitGuardar)=\"onSave()\"\r\n    (emitCancelar)=\"goBack()\"\r\n  > </app-series-header>\r\n  \r\n  <table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th> Número </th>\r\n        <th> Palista </th>\r\n        <th> Club </th>\r\n        <th> Tiempo </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let registro of tabla\">\r\n        <td class=\"pt-2 pb-2\" width=\"15%\"> {{ registro.numero }} </td>\r\n        <td class=\"pt-2 pb-2\"> {{ registro.palista }} </td>\r\n        <td class=\"pt-2 pb-2\"> {{ registro.club }} </td>\r\n        <td class=\"pt-2 pb-2\" width=\"15%\">\r\n          <input type=\"tel\" class=\"mi-form-control mi-font-min\" [(ngModel)]=\"registro.tiempo\" [(appTimeFormat)]=\"registro.tiempo\"\r\n            placeholder=\"hh:mm:ss.00\">\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n\r\n  </table>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"!serie.status.asignarNumero\">\r\n  <div class=\"jumbotron\">\r\n    <h1 class=\"display-4\">Cargar tiempos</h1>\r\n    <p class=\"lead\">\r\n      No puede cargar los tiempos a la serie <strong>{{ serie.id }}</strong> porque aún no le ha asignado números a los participantes\r\n    </p>\r\n    <hr class=\"my-4\">\r\n\r\n    <div class=\"text-center\">\r\n      <button class=\"btn btn-lg btn-primary\" (click)=\"goBack()\">\r\n          Regresar <i class=\"fa fa-arrow-circle-left fa-2x\"></i>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"serie.status.generarResultados\">\r\n  <div class=\"jumbotron\">\r\n    <h1 class=\"display-4\">Cargar tiempos</h1>\r\n    <p class=\"lead\">\r\n      No puede recargar los tiempos a la serie <strong>{{ serie.id }}</strong> porque ya generó los resultados de esta serie\r\n    </p>\r\n    <hr class=\"my-4\">\r\n\r\n    <div class=\"text-center\">\r\n      <button class=\"btn btn-lg btn-primary\" (click)=\"goBack()\">\r\n          Regresar <i class=\"fa fa-arrow-circle-left fa-2x\"></i>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/components/mcompetencia/series/cargar-tiempos/cargar-tiempos.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/cargar-tiempos/cargar-tiempos.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CargarTiemposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarTiemposComponent", function() { return CargarTiemposComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_series_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/series.service */ "./src/app/services/series.service.ts");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var src_app_services_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CargarTiemposComponent = /** @class */ (function () {
    function CargarTiemposComponent(dataService, msgService, spinner, location, actRoute, router) {
        this.dataService = dataService;
        this.msgService = msgService;
        this.spinner = spinner;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.titulo = '';
        this.id = '';
        this.tipoCarrera = '';
    }
    CargarTiemposComponent.prototype.ngOnInit = function () {
        this.id = this.actRoute.snapshot.paramMap.get('id');
        this.tipoCarrera = this.actRoute.snapshot.paramMap.get('tipoCarrera');
        this.msgService.clearMessages();
        this.getRecords();
        this.getSerie();
    };
    CargarTiemposComponent.prototype.getRecords = function () {
        this.tabla = this.dataService.getDetalleCarrera(this.tipoCarrera, this.id);
        this.tabla.sort(function (a, b) { return a.numero > b.numero ? 1 : a.numero < b.numero ? -1 : 0; });
    };
    CargarTiemposComponent.prototype.getSerie = function () {
        this.serie = this.dataService.getCarrera(this.tipoCarrera, this.id);
    };
    CargarTiemposComponent.prototype.retornar = function () {
        this.spinner.off();
        this.router.navigate(['carreras/' + this.tipoCarrera]);
    };
    CargarTiemposComponent.prototype.onSave = function () {
        var todosTienenTiempo = true;
        this.tabla.forEach(function (elemento) { return todosTienenTiempo = todosTienenTiempo && !!elemento.tiempo; });
        this.serie.status = { asignarNumero: true, cargarTiempos: todosTienenTiempo, generarResultados: false };
        this.dataService.updateCarrera(this.tipoCarrera, this.id, this.serie);
        this.dataService.updateDetalleCarrera(this.tipoCarrera, this.id, this.tabla);
        this.msgService.sendMessage('Tiempos guardados satisfactoriamente');
        this.retornar();
    };
    CargarTiemposComponent.prototype.goBack = function () {
        this.location.back();
    };
    CargarTiemposComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cargar-tiempos',
            template: __webpack_require__(/*! ./cargar-tiempos.component.html */ "./src/app/components/mcompetencia/series/cargar-tiempos/cargar-tiempos.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_series_service__WEBPACK_IMPORTED_MODULE_2__["SeriesService"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"],
            src_app_services_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CargarTiemposComponent);
    return CargarTiemposComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/series/editar-serie/editar-serie.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/editar-serie/editar-serie.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board\" cdkDropList [cdkDropListData]=\"series\" \r\n  (cdkDropListDropped)=\"onTrackDrop($event)\" \r\n  cdkDropListOrientation=\"horizontal\">\r\n\r\n  <div class=\"card-list mat-elevation-z1\">\r\n    <app-filtro-serie\r\n      (emitFiltrar)=\"filtrarSeries($event)\"\r\n      (emitLimpiar)=\"limpiarFiltro()\"\r\n      (emitSalir)=\"salir()\"\r\n      (emitGuardar)=\"guardarCambios()\">\r\n    </app-filtro-serie>\r\n  </div>\r\n\r\n  <!-- <ng-container *ngIf=\"mostrarSeries\"> -->\r\n\r\n\r\n  <div class=\"card-list mat-elevation-z1\" \r\n    *ngFor=\"let serie of series\">\r\n\r\n    <h2 cdkDragHandle class=\"mat-h4\">{{serie.serie}}</h2>\r\n\r\n    <div class=\"card-list-content\" \r\n      cdkDropList [id]=\"serie.serie\" \r\n      [cdkDropListData]=\"serie.detalleSerie\"\r\n      [cdkDropListConnectedTo]=\"SerieIds\" \r\n      (cdkDropListDropped)=\"onTalkDrop($event)\">\r\n\r\n\r\n        <mat-card *ngFor=\"let palista of serie.detalleSerie\" cdkDrag class=\"custom-card\">\r\n          <!-- Use the mat-card-content to add the proper spacing. -->\r\n          <mat-card-content>\r\n              {{palista.palista}}\r\n              <div class=\"text-dark\">{{palista.club}}</div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <!-- </ng-container> -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/mcompetencia/series/editar-serie/editar-serie.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/editar-serie/editar-serie.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-card {\n  background-color: #50858B;\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem; }\n\n.board {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 90%;\n  padding: 8px;\n  box-sizing: border-box;\n  overflow-x: auto;\n  overflow-y: hidden; }\n\n.card-list {\n  height: 100%;\n  width: 320px;\n  overflow: auto;\n  box-sizing: border-box;\n  margin-right: 8px;\n  flex-shrink: 0;\n  background: rgba(0, 0, 0, 0.03);\n  border-radius: 4px;\n  padding: 8px; }\n\n.card-list {\n  display: flex;\n  flex-direction: column; }\n\n.card-list h2 {\n    margin-bottom: 5px; }\n\n.card-list button {\n    flex-shrink: 0;\n    margin-top: 10px; }\n\n.card-list-content {\n  overflow: auto;\n  flex-grow: 1; }\n\n.cdk-drag-animating, .cdk-drop-list-dragging .cdk-drag {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tY29tcGV0ZW5jaWEvc2VyaWVzL2VkaXRhci1zZXJpZS9DOlxcUHJveWVjdG9zXFxmZWJva2FjL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtY29tcGV0ZW5jaWFcXHNlcmllc1xcZWRpdGFyLXNlcmllXFxlZGl0YXItc2VyaWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBR0UsYUFBYTtFQUNiLG1CQUFtQjtFQUduQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUVFLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsY0FBYztFQUdkLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdkO0VBRUUsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUh4QjtJQU9JLGtCQUFrQixFQUFBOztBQVB0QjtJQVlJLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFFRSxjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQU1kO0VBQ0UsOERBQXNEO0VBQXRELHNEQUFzRDtFQUF0RCwwR0FBc0QsRUFBQTs7QUFJeEQ7RUFDRSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21jb21wZXRlbmNpYS9zZXJpZXMvZWRpdGFyLXNlcmllL2VkaXRhci1zZXJpZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwODU4QjtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgLy8gRmxleGJveCBzdHlsaW5nIHRoYXQgZGVmaW5lcyB0aGUgZGlyZWN0aW9uIGluIHdoaWNoIHRoZSBjb250ZW50IGlzIGZsb3dpbmcuXHJcbiAgLy8gQWxzbyBtYWtlcyBpdCBlYXNpZXIgdG8gc3RyZXRjaCB0aGUgbGlzdHMgdG8gdGhlIGhlaWdodCBvZiB0aGUgc2NyZWVuIGxhdGVyIG9uLlxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgLy8gRW5zdXJlIHRoYXQgdGhlIGJvYXJkIGNvdmVycyB0aGUgdmlld3BvcnQgYW5kIGFkZCBzb21lIHBhZGRpbmcgdG8gbWFrZSBpdCBsb29rIGJldHRlci5cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgLy8gT25seSBhbGxvdyBob3Jpem9udGFsIHNjcm9sbGluZy5cclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcmQtbGlzdCB7XHJcbiAgLy8gU3RyZXRjaCB0aGUgZWxlbWVudCB0byB0aGUgaGVpZ2h0IG9mIHRoZSBib2FyZCBhbmQgbWFrZSBpdCBzY3JvbGxhYmxlLlxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgLy8gU29tZSBleHRyYSBzdHlsaW5nIHRvIG1ha2UgdGhlIGNhcmQgbGlzdCBsb29rIGJldHRlci5cclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkLWxpc3Qge1xyXG4gIC8vIE1ha2VzIGl0IHBvc3NpYmxlIGZvciB0aGUgYGNhcmQtbGlzdC1jb250ZW50IGAgdG8gdGFrZSB1cCB0aGUgcmVtYWluaW5nIHNwYWNlLlxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgaDIge1xyXG4gICAgLy8gRXh0cmEgc3BhY2luZyB0byBtYWtlIHRoaW5ncyBsb29rIGJldHRlci5cclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICAvLyBUaGUgZmxleC1zaHJpbmsgcHJldmVudHMgdGhlIGJ1dHRvbiBmcm9tIHNocmlua2luZyBpZiB0aGUgbGlzdCBjb250ZW50IGJlY29tZXMgdG9vIGxhcmdlLlxyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtbGlzdC1jb250ZW50IHtcclxuICAvLyBNYWtlIHRoZSBsaXN0IHNjcm9sbGFibGUgYW5kIHN0cmV0Y2ggaXQgdG8gdGFrZSB1cCB0aGUgYXZhaWxhYmxlIGhlaWdodC5cclxuICBvdmVyZmxvdzogYXV0bztcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi8vIElmIGl0ZW1zIGFyZSBiZWluZyByZW9yZGVyZWQgdGhyb3VnaCBkcmFnZ2luZywgYWxsIG90aGVyIGVsZW1lbnRzIHNob3VsZFxyXG4vLyByZW9yZGVyIHNtb290aGx5LiBBbHNvIGlmIGFuIGl0ZW0gaXMgYmVpbmcgZHJvcHBlZCwgaXQgc2hvdWxkIGFuaW1hdGVcclxuLy8gaW50byBpdHMgdGFyZ2V0IHBvc2l0aW9uLlxyXG4uY2RrLWRyYWctYW5pbWF0aW5nLCAuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuY2RrLWRyYWcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLy8gSGlkZXMgdGhlIHBsYWNlaG9sZGVyIGlmIGFuIGVsZW1lbnQgaXMgYmVpbmcgZHJhZ2dlZC5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/mcompetencia/series/editar-serie/editar-serie.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/editar-serie/editar-serie.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EditarSerieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarSerieComponent", function() { return EditarSerieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var src_app_services_series_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/series.service */ "./src/app/services/series.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_msg_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/msg.service */ "./src/app/services/msg.service.ts");






var EditarSerieComponent = /** @class */ (function () {
    function EditarSerieComponent(dataService, router, cdRef, msg) {
        this.dataService = dataService;
        this.router = router;
        this.cdRef = cdRef;
        this.msg = msg;
        this.mostrarSeries = false;
        this.title = "angular-drag-drop";
        this.series = [];
    }
    EditarSerieComponent.prototype.ngOnInit = function () {
    };
    EditarSerieComponent.prototype.ngOnDestroy = function () {
    };
    EditarSerieComponent.prototype.filtrarSeries = function (objFiltro) {
        this.series = [];
        var arrSeries = this.dataService.getSeries()
            .filter(function (elemento) { return elemento.genero === objFiltro.genero && elemento.categoria === objFiltro.categoria && elemento.distancia === objFiltro.distancia; })
            .map(function (elemento) { return elemento.id; });
        this.getSeries(arrSeries);
        this.mostrarSeries = true;
    };
    EditarSerieComponent.prototype.getSeries = function (arrFiltro) {
        var _this = this;
        if (arrFiltro) {
            arrFiltro.forEach(function (elemento) {
                return _this.series.push({
                    serie: elemento,
                    detalleSerie: _this.dataService.getDetalleSerie(elemento)
                });
            });
        }
        else {
            this.series = null;
        }
    };
    Object.defineProperty(EditarSerieComponent.prototype, "SerieIds", {
        get: function () {
            return this.series.map(function (serie) { return serie.serie; });
        },
        enumerable: true,
        configurable: true
    });
    EditarSerieComponent.prototype.onTalkDrop = function (event) {
        // In case the destination container is different from the previous container, we
        // need to transfer the given task to the target data array. This happens if
        // a task has been dropped on a different track.
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    EditarSerieComponent.prototype.onTrackDrop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
    };
    EditarSerieComponent.prototype.limpiarFiltro = function () {
        this.getSeries(null);
        this.cdRef.detectChanges();
        this.mostrarSeries = false;
    };
    EditarSerieComponent.prototype.guardarCambios = function () {
        var _this = this;
        this.actualizarIdSerie();
        this.series.forEach(function (serie) {
            serie.detalleSerie.map(function (el, index) {
                el.numero = (index + 1).toString();
                return el;
            });
            console.log(serie.serie, serie.detalleSerie);
            _this.dataService.updateDetalleSeries(serie.serie, serie.detalleSerie);
            var nuevaSerie = _this.dataService.getSerie(serie.serie);
            nuevaSerie.cantidad = serie.detalleSerie.length.toString();
            _this.dataService.updateSerie(serie.serie, nuevaSerie);
        });
        this.msg.ok('Proceso realizado satisfactoriamente');
        this.limpiarFiltro();
    };
    EditarSerieComponent.prototype.actualizarIdSerie = function () {
        this.series.forEach(function (serie) {
            return serie.detalleSerie.map(function (palista) {
                palista.idSerie = serie.serie;
                return palista;
            });
        });
    };
    EditarSerieComponent.prototype.salir = function () {
        this.router.navigate(["/"]);
    };
    EditarSerieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-editar-serie",
            template: __webpack_require__(/*! ./editar-serie.component.html */ "./src/app/components/mcompetencia/series/editar-serie/editar-serie.component.html"),
            styles: [__webpack_require__(/*! ./editar-serie.component.scss */ "./src/app/components/mcompetencia/series/editar-serie/editar-serie.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_series_service__WEBPACK_IMPORTED_MODULE_3__["SeriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            src_app_services_msg_service__WEBPACK_IMPORTED_MODULE_5__["MsgService"]])
    ], EditarSerieComponent);
    return EditarSerieComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/series/editar-serie/filtro-serie.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/editar-serie/filtro-serie.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mat-h2\">Editar series</h2>\r\n<form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"genero\" class=\"control-label\"> Genero </label>\r\n    <select formControlName=\"genero\" [class.is-invalid]=\"genero.invalid && genero.touched\" class=\"custom-select\">\r\n      <option value=\"\"></option>\r\n      <option value=\"Masculino\">Masculino</option>\r\n      <option value=\"Femenino\">Femenino</option>\r\n    </select>\r\n    <small class=\"text-danger\" [class.d-none]=\"genero.valid || genero.untouched\">El genero es requerido</small>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"categoria\" class=\"control-label\"> Categoría </label>\r\n    <select formControlName=\"categoria\" [class.is-invalid]=\"(categoria.invalid && categoria.touched)\"\r\n      class=\"custom-select\">\r\n      <option value=\"\"></option>\r\n      <option *ngFor=\"let registro of tblCategorias\">{{ registro.categoria }}</option>\r\n    </select>\r\n    <small class=\"text-danger\" [class.d-none]=\"categoria.valid || categoria.untouched\">La categoría es\r\n      requerida</small>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"distancia\" class=\"control-label\"> Distancia </label>\r\n    <select formControlName=\"distancia\" [class.is-invalid]=\"distancia.invalid && distancia.touched\"\r\n      class=\"custom-select\">\r\n      <option value=\"\"></option>\r\n      <option *ngFor=\"let registro of tblDistancias\">{{ registro.embarcacion + ' ' + registro.distancia }}</option>\r\n    </select>\r\n    <small class=\"text-danger\" [class.d-none]=\"distancia.untouched || !distancia.hasError('required')\">La distancia\r\n      es requerida</small>\r\n  </div>\r\n\r\n\r\n  <button [disabled]=\"!miForm.valid\" type=\"submit\" class=\"btn btn-block btn-primary\">\r\n    Filtrar\r\n  </button>\r\n\r\n  <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"limpiar()\">\r\n    Limpiar\r\n  </button>\r\n\r\n  <button type=\"button\" class=\"btn btn-success btn-block mt-5\" (click)=\"guardar()\">\r\n    Guardar\r\n  </button>\r\n  <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"salir()\">\r\n    Salir\r\n  </button>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/components/mcompetencia/series/editar-serie/filtro-serie.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/editar-serie/filtro-serie.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FiltroSerieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroSerieComponent", function() { return FiltroSerieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_distancias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/distancias.service */ "./src/app/services/distancias.service.ts");





var FiltroSerieComponent = /** @class */ (function () {
    function FiltroSerieComponent(fb, categoriasService, distanciasService) {
        this.fb = fb;
        this.categoriasService = categoriasService;
        this.distanciasService = distanciasService;
        this.emitFiltrar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitLimpiar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitGuardar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitSalir = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FiltroSerieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriasService.getRecords$().subscribe(function (data) { return _this.tblCategorias = data; });
        this.distanciasService.getRecords$().subscribe(function (data) { return _this.tblDistancias = data; });
        this.buildForm();
    };
    FiltroSerieComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            genero: [''],
            categoria: [''],
            club: [''],
            distancia: ['']
        });
    };
    Object.defineProperty(FiltroSerieComponent.prototype, "genero", {
        get: function () {
            return this.miForm.get('genero');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FiltroSerieComponent.prototype, "categoria", {
        get: function () {
            return this.miForm.get('categoria');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FiltroSerieComponent.prototype, "distancia", {
        get: function () {
            return this.miForm.get('distancia');
        },
        enumerable: true,
        configurable: true
    });
    FiltroSerieComponent.prototype.guardar = function () {
        this.emitGuardar.emit();
        //this.emitFiltrar.emit(this.miForm.value);
    };
    FiltroSerieComponent.prototype.limpiar = function () {
        this.miForm.controls.genero.setValue('');
        this.miForm.controls.categoria.setValue('');
        this.miForm.controls.distancia.setValue('');
        this.emitLimpiar.emit();
    };
    FiltroSerieComponent.prototype.onSubmit = function () {
        this.emitFiltrar.emit({
            genero: this.genero.value,
            categoria: this.categoria.value,
            distancia: this.distancia.value
        });
    };
    FiltroSerieComponent.prototype.salir = function () {
        this.emitSalir.emit();
        //this.emitFiltrar.emit(this.miForm.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltroSerieComponent.prototype, "emitFiltrar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltroSerieComponent.prototype, "emitLimpiar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltroSerieComponent.prototype, "emitGuardar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltroSerieComponent.prototype, "emitSalir", void 0);
    FiltroSerieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filtro-serie',
            template: __webpack_require__(/*! ./filtro-serie.component.html */ "./src/app/components/mcompetencia/series/editar-serie/filtro-serie.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"],
            src_app_services_distancias_service__WEBPACK_IMPORTED_MODULE_4__["DistanciasService"]])
    ], FiltroSerieComponent);
    return FiltroSerieComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/series/resultados/resultados.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/resultados/resultados.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"serie.status.cargarTiempos; else infoMessage\">\r\n  <app-series-header\r\n    [titulo]=\"'Resultados'\"\r\n    [serie]=\"serie\"\r\n    (emitGuardar)=\"onSave()\"\r\n    (emitCancelar)=\"goBack()\"\r\n  > </app-series-header>\r\n\r\n  <table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th> Número </th>\r\n        <th> Palista </th>\r\n        <th> Club </th>\r\n        <th> Tiempo </th>\r\n        <th> Resultado </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let registro of tabla; let i=index\">\r\n        <td width=\"15%\"> {{ registro.numero }} </td>\r\n        <td> {{ registro.palista }} </td>\r\n        <td> {{ registro.club }} </td>\r\n        <td> {{ registro.tiempo }} </td>\r\n        <td [ngClass]=\"resultadoClass(registro.resultado)\"> {{ registro.resultado }} </td>\r\n      </tr>\r\n    </tbody>\r\n\r\n  </table>\r\n</ng-container>\r\n\r\n<ng-template #infoMessage>\r\n  <div class=\"jumbotron\">\r\n    <h1 class=\"display-4\">Generar Resultados</h1>\r\n    <p class=\"lead\">\r\n      No puede generar los resultados de la serie <strong>{{ serie.id }}</strong> porque aún no ha cargado el tiempo de los participantes\r\n    </p>\r\n    <hr class=\"my-4\">\r\n\r\n    <div class=\"text-center\">\r\n      <button class=\"btn btn-lg btn-primary\" (click)=\"goBack()\">\r\n        Regresar <i class=\"fa fa-arrow-circle-left fa-2x\"></i>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/mcompetencia/series/resultados/resultados.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/resultados/resultados.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadosComponent", function() { return ResultadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_series_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/series.service */ "./src/app/services/series.service.ts");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var src_app_services_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/spinner.service */ "./src/app/services/spinner.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_condiciones_carreras_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/condiciones-carreras.service */ "./src/app/services/condiciones-carreras.service.ts");
/* harmony import */ var _services_puntuacion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/puntuacion.service */ "./src/app/services/puntuacion.service.ts");









var ResultadosComponent = /** @class */ (function () {
    function ResultadosComponent(dataService, condicionesService, puntuacionService, msgService, spinner, location, actRoute, router) {
        this.dataService = dataService;
        this.condicionesService = condicionesService;
        this.puntuacionService = puntuacionService;
        this.msgService = msgService;
        this.spinner = spinner;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.titulo = '';
        this.id = '';
        this.tipoCarrera = '';
        this.tabla = [];
    }
    ResultadosComponent.prototype.ngOnInit = function () {
        this.id = this.actRoute.snapshot.paramMap.get('id');
        this.tipoCarrera = this.actRoute.snapshot.paramMap.get('tipoCarrera');
        this.msgService.clearMessages();
        this.getRecords();
        this.getSerie();
    };
    ResultadosComponent.prototype.getRecords = function () {
        var _this = this;
        var data = this.dataService.getDetalleCarrera(this.tipoCarrera, this.id);
        this.condiciones = this.condicionesService.getCondiciones(data[0].categoria, data[0].genero, data[0].distancia);
        data.sort(function (a, b) { return a.tiempo > b.tiempo ? 1 : (a.tiempo < b.tiempo ? -1 : 0); });
        data.forEach(function (el, i) { return _this.tabla.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, el, { posicion: i + 1, resultado: _this.resultado(el.categoria, i + 1) })); });
    };
    ResultadosComponent.prototype.getSerie = function () {
        this.serie = this.dataService.getCarrera(this.tipoCarrera, this.id);
    };
    ResultadosComponent.prototype.resultado = function (categoria, posicion) {
        if (this.tipoCarrera === 'series')
            return this.resultadoSerie(posicion);
        else if (this.tipoCarrera === 'semis') {
            return this.resultadoSemi(posicion);
        }
        else {
            return this.resultadoFinal(categoria, posicion);
        }
    };
    ResultadosComponent.prototype.resultadoSerie = function (posicion) {
        if (this.condiciones.serie.pasanDirectoAfinal.includes(posicion)) {
            return 'Pasa directo a la final';
        }
        else if (this.condiciones.serie.pasanAsemiFinal.includes(posicion)) {
            return 'Pasa a semifinal';
        }
        else if (this.condiciones.serie.adicional.posicion.includes(posicion)) {
            return 'Revisión';
        }
        else {
            return 'Eliminado';
        }
    };
    ResultadosComponent.prototype.resultadoSemi = function (posicion) {
        if (this.condiciones.semis.pasanAfinal.includes(posicion)) {
            return 'Pasa a la final';
        }
        else {
            return 'Eliminado';
        }
    };
    ResultadosComponent.prototype.resultadoFinal = function (categoria, posicion) {
        var prefijo = 'Puntos: ';
        if (posicion < 4) {
            prefijo = 'Medalla de ';
            prefijo += (posicion === 1 ? 'Oro' : posicion === 2 ? 'Plata' : 'Bronce') + '  -  Puntos: ';
        }
        return prefijo + this.puntuacionService.getPuntuacion(categoria, posicion);
    };
    ResultadosComponent.prototype.resultadoClass = function (resultado) {
        if (this.tipoCarrera === 'series') {
            return {
                "text-primary": resultado === 'Pasa directo a la final',
                "text-success": resultado === 'Pasa a semifinal',
                "text-warning": resultado === 'Revisión',
                "text-danger": resultado === 'Eliminado'
            };
        }
        else if (this.tipoCarrera === 'semis') {
            return {
                "text-success": resultado === 'Pasa a la final',
                "text-danger": resultado === 'Eliminado'
            };
        }
        else {
            return {
                "text-primary": resultado.includes('Medalla de Oro'),
                "text-info": resultado.includes('Medalla de Plata'),
                "text-warning": resultado.includes('Medalla de Bronce')
            };
        }
    };
    ResultadosComponent.prototype.retornar = function () {
        this.spinner.off();
        this.router.navigate(['carreras/' + this.tipoCarrera]);
    };
    ResultadosComponent.prototype.onSave = function () {
        this.serie.status = { asignarNumero: true, cargarTiempos: true, generarResultados: true };
        this.dataService.updateCarrera(this.tipoCarrera, this.id, this.serie);
        this.dataService.updateDetalleCarrera(this.tipoCarrera, this.id, this.tabla);
        this.retornar();
    };
    ResultadosComponent.prototype.goBack = function () {
        this.location.back();
    };
    ResultadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resultados',
            template: __webpack_require__(/*! ./resultados.component.html */ "./src/app/components/mcompetencia/series/resultados/resultados.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_series_service__WEBPACK_IMPORTED_MODULE_2__["SeriesService"],
            src_app_services_condiciones_carreras_service__WEBPACK_IMPORTED_MODULE_7__["CondicionesCarrerasService"],
            _services_puntuacion_service__WEBPACK_IMPORTED_MODULE_8__["PuntuacionService"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"],
            src_app_services_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ResultadosComponent);
    return ResultadosComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/series/series-header/series-header.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/series-header/series-header.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-2\">\r\n        <h5>{{ titulo }}</h5>\r\n      </div>\r\n      <div class=\"col-7\">\r\n        <table width=\"100%\">\r\n          <tr>\r\n            <th width=\"10%\">Serie</th>\r\n            <th width=\"40%\">Categoría</th>\r\n            <th width=\"25%\">Genero</th>\r\n            <th width=\"25%\">Distancia</th>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td>{{ serie.id }}</td>\r\n            <td>{{ serie.categoria }}</td>\r\n            <td>{{ serie.genero }}</td>\r\n            <td>{{ serie.distancia }}</td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <button class=\"btn btn-block btn-primary\" (click)=\"onSave()\">\r\n              <i class=\"fa fa-save \"></i> Guardar\r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button class=\"btn btn-block btn-secondary\" (click)=\"goBack()\">\r\n              <i class=\"fa fa-undo \"></i> Cancelar\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/mcompetencia/series/series-header/series-header.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/series-header/series-header.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SeriesHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesHeaderComponent", function() { return SeriesHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SeriesHeaderComponent = /** @class */ (function () {
    function SeriesHeaderComponent() {
        this.emitGuardar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitCancelar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SeriesHeaderComponent.prototype.ngOnInit = function () {
    };
    SeriesHeaderComponent.prototype.onSave = function () {
        this.emitGuardar.emit('Guardar');
    };
    SeriesHeaderComponent.prototype.goBack = function () {
        this.emitCancelar.emit('Cancelar');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SeriesHeaderComponent.prototype, "serie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SeriesHeaderComponent.prototype, "titulo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SeriesHeaderComponent.prototype, "emitGuardar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SeriesHeaderComponent.prototype, "emitCancelar", void 0);
    SeriesHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-series-header',
            template: __webpack_require__(/*! ./series-header.component.html */ "./src/app/components/mcompetencia/series/series-header/series-header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SeriesHeaderComponent);
    return SeriesHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/mcompetencia/series/series.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/series.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\r\n  <div class=\"card-header d-flex\">\r\n    {{ titulo }}\r\n  </div>\r\n</div>\r\n\r\n<table class=\"table table-bordered table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th> Número </th>\r\n      <th> Genero </th>\r\n      <th> Categoría </th>\r\n      <th> Distancia </th>\r\n      <th> Cantidad </th>\r\n      <th> </th>\r\n      <th> </th>\r\n      <th> </th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let registro of tabla\">\r\n      <td> {{ registro.id }} </td>\r\n      <td> {{ registro.genero }} </td>\r\n      <td> {{ registro.categoria }} </td>\r\n      <td> {{ registro.distancia }} </td>\r\n      <td> {{ registro.cantidad }} </td>\r\n      <td class=\"text-center\" width=\"7%\" >\r\n        <a routerLink=\"/series/asignar-numero/{{tipoCarrera}}/{{registro.id}}\" [ngClass]=\"asignarNumeroStatus(registro.status)\">\r\n          <i class=\"fa fa-list-ol fa-2x\"></i>\r\n        </a>\r\n      </td>\r\n      <td class=\"text-center\" width=\"7%\" >\r\n        <a routerLink=\"/series/cargar-tiempos/{{tipoCarrera}}/{{registro.id}}\" [ngClass]=\"cargarTiemposStatus(registro.status)\">\r\n          <i class=\"fa fa-clock-o fa-2x\"></i>\r\n        </a>\r\n      </td>\r\n      <td class=\"text-center\" width=\"7%\" >\r\n        <a routerLink=\"/series/resultados/{{tipoCarrera}}/{{registro.id}}\" [ngClass]=\"generarResultadosStatus(registro.status)\">\r\n          <i class=\"fa fa-signal fa-2x\"></i>\r\n        </a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table>"

/***/ }),

/***/ "./src/app/components/mcompetencia/series/series.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/mcompetencia/series/series.component.ts ***!
  \********************************************************************/
/*! exports provided: SeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesComponent", function() { return SeriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_series_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/series.service */ "./src/app/services/series.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SeriesComponent = /** @class */ (function () {
    function SeriesComponent(dataService, actRoute) {
        this.dataService = dataService;
        this.actRoute = actRoute;
        this.tipoCarrera = '';
        this.titulo = '';
    }
    SeriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.paramMap.subscribe(function (params) {
            _this.tipoCarrera = params.get('tipoCarrera');
            _this.titulo = _this.tipoCarrera === 'series' ? 'Series' :
                _this.tipoCarrera === 'semis' ? 'Semifinales' : 'Finales';
            _this.getRecords();
        });
    };
    SeriesComponent.prototype.getRecords = function () {
        console.log(this.tipoCarrera);
        /* if (this.tipoCarrera === 'series') {
          this.dataService.getRecords$().subscribe(data => this.tabla = data);
        } else { */
        this.tabla = this.dataService.getCarreras(this.tipoCarrera);
        //} 
    };
    SeriesComponent.prototype.asignarNumeroStatus = function (status) {
        return {
            "text-success": !status.asignarNumero,
            "text-warning": status.asignarNumero,
            "text-danger": status.cargarTiempos
        };
    };
    SeriesComponent.prototype.cargarTiemposStatus = function (status) {
        return {
            "text-secondary": !status.asignarNumero,
            "text-success": status.asignarNumero,
            "text-warning": status.cargarTiempos,
            "text-danger": status.generarResultados
        };
    };
    SeriesComponent.prototype.generarResultadosStatus = function (status) {
        return {
            "text-secondary": !status.cargarTiempos,
            "text-success": status.cargarTiempos,
            "text-warning": status.generarResultados,
        };
    };
    SeriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'series',
            template: __webpack_require__(/*! ./series.component.html */ "./src/app/components/mcompetencia/series/series.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_series_service__WEBPACK_IMPORTED_MODULE_2__["SeriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SeriesComponent);
    return SeriesComponent;
}());



/***/ }),

/***/ "./src/app/components/mensajes/mensajes.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/mensajes/mensajes.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-dismissable mt-2\" [ngClass]=\"tipo\" *ngIf=\"msg\">\r\n  <button class=\"close\" (click)=\"closeAlert()\">\r\n    &times;\r\n  </button>\r\n  {{ msg }}\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/mensajes/mensajes.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/mensajes/mensajes.component.ts ***!
  \***********************************************************/
/*! exports provided: MensajesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesComponent", function() { return MensajesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");



var MensajesComponent = /** @class */ (function () {
    function MensajesComponent(msgService) {
        var _this = this;
        this.msgService = msgService;
        msgService.getMessage().subscribe(function (msg) {
            _this.msg = msg.text;
            _this.tipo = msg.tipo;
        });
    }
    MensajesComponent.prototype.ngOnInit = function () {
    };
    MensajesComponent.prototype.closeAlert = function () {
        this.msg = '';
    };
    MensajesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mensajes',
            template: __webpack_require__(/*! ./mensajes.component.html */ "./src/app/components/mensajes/mensajes.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_2__["MensajesService"]])
    ], MensajesComponent);
    return MensajesComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-competencia/modal-competencia.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/modal-competencia/modal-competencia.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\r\n<div id=\"modalCompetencia\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\"> Competencias </h5>\r\n        <button #btClose type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <table class=\"table table-bordered table-hover\">\r\n          <thead>\r\n            <tr>\r\n              <th> Desde </th>\r\n              <th> Hasta </th>\r\n              <th> Competencia </th>\r\n              <th> Club </th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n            <tr *ngFor=\"let registro of tabla\">\r\n              <td (click)=\"seleccionar(registro)\"> {{ registro.desde }} </td>\r\n              <td (click)=\"seleccionar(registro)\"> {{ registro.hasta }} </td>\r\n              <td (click)=\"seleccionar(registro)\"> {{ registro.competencia }} </td>\r\n              <td (click)=\"seleccionar(registro)\"> {{ registro.club }} </td>\r\n            </tr>\r\n          </tbody>\r\n\r\n        </table>\r\n\r\n        <button class=\"btn btn-secondary float-center\" (click)=\"cancelar()\">\r\n          Cancelar\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/modal-competencia/modal-competencia.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/modal-competencia/modal-competencia.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ModalCompetenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCompetenciaComponent", function() { return ModalCompetenciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalCompetenciaComponent = /** @class */ (function () {
    function ModalCompetenciaComponent() {
        this.emitSeleccionar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ModalCompetenciaComponent.prototype.ngOnInit = function () {
    };
    ModalCompetenciaComponent.prototype.seleccionar = function (registro) {
        this.emitSeleccionar.emit(registro);
        this.btClose.nativeElement.click();
    };
    ModalCompetenciaComponent.prototype.cancelar = function () {
        this.btClose.nativeElement.click();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btClose'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModalCompetenciaComponent.prototype, "btClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ModalCompetenciaComponent.prototype, "tabla", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalCompetenciaComponent.prototype, "emitSeleccionar", void 0);
    ModalCompetenciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-competencia',
            template: __webpack_require__(/*! ./modal-competencia.component.html */ "./src/app/components/modal-competencia/modal-competencia.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalCompetenciaComponent);
    return ModalCompetenciaComponent;
}());



/***/ }),

/***/ "./src/app/components/modal-download/modal-download.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/modal-download/modal-download.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"modalDownload\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-md\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\"> Exportar datos </h5>\r\n        <button #btCloseDownload type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <h4> {{ mensaje }} </h4>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"preparacionStatus > 0\"\r\n              (click)=\"generateDownloadJsonUri()\">\r\n              Procesar\r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"preparacionStatus < 2\"\r\n              (click)=\"exportarDatos()\">\r\n              Exportar\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col-6 mx-auto\">\r\n            <button class=\"btn btn-block btn-secondary\" (click)=\"cancelar()\">\r\n              Cancelar\r\n            </button>\r\n          </div>\r\n        </div>\r\n        \r\n        <a #aDownload class=\"btn btn-clear d-none\" title=\"Download JSON\" [href]=\"downloadJsonHref\" download=\"FeBoCaK.json\">\r\n          Link\r\n        </a> \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/modal-download/modal-download.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/modal-download/modal-download.component.ts ***!
  \***********************************************************************/
/*! exports provided: ModalDownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDownloadComponent", function() { return ModalDownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_exportar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/exportar.service */ "./src/app/services/exportar.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var ModalDownloadComponent = /** @class */ (function () {
    function ModalDownloadComponent(sanitizer, exportarService) {
        this.sanitizer = sanitizer;
        this.exportarService = exportarService;
        this.emitExportar = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.preparacionStatus = 0;
        this.mensaje = 'El proceso de exportar los datos puede tardar varios minutos. Para iniciar pulse en el botón preparar datos. Una vez finalizado el proceso pulse en el botón exportar';
    }
    ModalDownloadComponent.prototype.ngOnInit = function () {
    };
    ModalDownloadComponent.prototype.cancelar = function () {
        this.btClose.nativeElement.click();
    };
    ModalDownloadComponent.prototype.exportarDatos = function () {
        this.aDownload.nativeElement.click();
        this.emitExportar.emit('Exportar');
        this.btClose.nativeElement.click();
    };
    ModalDownloadComponent.prototype.generateDownloadJsonUri = function () {
        var _this = this;
        this.mensaje = 'P r e p a r a n d o . . .';
        this.preparacionStatus = 1;
        var jsonData = '{';
        var contador = 0;
        var nombres = [];
        var categorias$ = this.exportarService.getCategorias$();
        nombres.push('categorias');
        var clubes$ = this.exportarService.getClubes$();
        nombres.push('clubes');
        var distancias$ = this.exportarService.getDistancias$();
        nombres.push('distancias');
        console.log(this.competencia);
        var competencias$ = this.exportarService.getCompetencias$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data.filter(function (elemento) { return elemento.club === _this.competencia.club &&
            elemento.competencia === _this.competencia.competencia &&
            elemento.desde === _this.competencia.desde &&
            elemento.hasta === _this.competencia.hasta; }); }));
        nombres.push('competencias');
        var consola$ = this.exportarService.getConsola$();
        nombres.push('consola');
        var inscripciones$ = this.exportarService.getInscripciones$();
        nombres.push('inscripciones');
        var palistas$ = this.exportarService.getPalistas$();
        nombres.push('palistas');
        var users$ = this.exportarService.getUsers$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data.filter(function (usuario) { return usuario.rol === 'Competencias'; }); }));
        nombres.push('users');
        var result$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(categorias$, clubes$, distancias$, competencias$, consola$, inscripciones$, palistas$, users$);
        result$.subscribe(function (data) {
            jsonData = jsonData + '"' + nombres[contador] + '":' + JSON.stringify(data);
            contador++;
            if (contador == nombres.length) {
                jsonData = jsonData + '}';
                _this.downloadJsonHref = _this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(jsonData));
                _this.mensaje = 'Preparación finalizada';
                _this.preparacionStatus = 2;
            }
            else {
                jsonData = jsonData + ',';
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalDownloadComponent.prototype, "competencia", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('btCloseDownload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], ModalDownloadComponent.prototype, "btClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('aDownload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], ModalDownloadComponent.prototype, "aDownload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalDownloadComponent.prototype, "emitExportar", void 0);
    ModalDownloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-modal-download',
            template: __webpack_require__(/*! ./modal-download.component.html */ "./src/app/components/modal-download/modal-download.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            src_app_services_exportar_service__WEBPACK_IMPORTED_MODULE_4__["ExportarService"]])
    ], ModalDownloadComponent);
    return ModalDownloadComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar-administracion/navbar-administracion.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/navbar/navbar-administracion/navbar-administracion.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-success\">\r\n  <img class=\"mr-4\" src=\"assets/img/icono.png\" />\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <h4> <strong>FeBoCaK</strong> - {{ usuario.rol }}</h4>\r\n    <h6> {{ usuario.rol == 'Inscripciones' ? usuario.club : 'Federación Bonairense de Canoas y Kayaks' }} </h6>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\"> <strong>Home</strong> </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"fa fa-table\"></i>&nbsp; Tablas\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a *ngIf=\"usuario.rol == 'Administración'\" class=\"dropdown-item\" routerLink=\"/usuarios\"\r\n            routerLinkActive=\"active\"> <strong>Usuarios</strong> </a>\r\n\r\n          <a *ngIf=\"usuario.rol == 'Administración'\" class=\"dropdown-item\" routerLink=\"/clubes\"\r\n            routerLinkActive=\"active\"> <strong>Clubes</strong> </a>\r\n\r\n          <a *ngIf=\"usuario.rol == 'Administración'\" class=\"dropdown-item\" routerLink=\"/categorias\"\r\n            routerLinkActive=\"active\"> <strong>Categorías</strong> </a>\r\n\r\n          <a *ngIf=\"usuario.rol == 'Administración'\" class=\"dropdown-item\" routerLink=\"/distancias\"\r\n            routerLinkActive=\"active\"> <strong>Distancias</strong> </a>\r\n\r\n          <a *ngIf=\"usuario.rol == 'Administración'\" class=\"dropdown-item\" routerLink=\"/competencias\"\r\n            routerLinkActive=\"active\"> <strong>Competencias</strong> </a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"fa fa-folder\"></i>&nbsp; Procesos\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n\r\n          <a class=\"dropdown-item\" routerLink=\"/palistas\" routerLinkActive=\"active\"> <strong>Palistas</strong> </a>\r\n          <a class=\"dropdown-item\" routerLink=\"/inscripciones\" routerLinkActive=\"active\"> <strong>Inscripciones</strong></a>\r\n          <a class=\"dropdown-item\" routerLink=\"/consultar-inscripciones\" routerLinkActive=\"active\"> <strong>Consultar Inscripciones</strong></a>\r\n          <a class=\"dropdown-item\" routerLink=\"/consola\" routerLinkActive=\"active\"> <strong>Consola</strong> </a>\r\n\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{ usuario.name }} &nbsp; <i class=\"fa fa-user\"></i>&nbsp;\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/profile\"> <strong>Perfil</strong> </a>\r\n          <a class=\"dropdown-item\" (click)=\"onLogout()\"> <strong>Salir</strong> </a>\r\n        </div>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar-administracion/navbar-administracion.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/navbar/navbar-administracion/navbar-administracion.component.ts ***!
  \********************************************************************************************/
/*! exports provided: NavbarAdministracionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarAdministracionComponent", function() { return NavbarAdministracionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarAdministracionComponent = /** @class */ (function () {
    function NavbarAdministracionComponent() {
        this.emitLogout = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavbarAdministracionComponent.prototype.ngOnInit = function () {
    };
    NavbarAdministracionComponent.prototype.onLogout = function () {
        this.emitLogout.emit('salir');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarAdministracionComponent.prototype, "usuario", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarAdministracionComponent.prototype, "emitLogout", void 0);
    NavbarAdministracionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-administracion',
            template: __webpack_require__(/*! ./navbar-administracion.component.html */ "./src/app/components/navbar/navbar-administracion/navbar-administracion.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarAdministracionComponent);
    return NavbarAdministracionComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar-competencias/navbar-competencias.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/navbar/navbar-competencias/navbar-competencias.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-success\">\r\n  <img class=\"mr-4\" src=\"assets/img/icono.png\" />\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <h4> <strong>FeBoCaK</strong> - {{ usuario.rol }}</h4>\r\n    <h6> {{ usuario.rol == 'Inscripciones' ? usuario.club : 'Federación Bonairense de Canoas y Kayaks' }} - {{ fecha | date: 'short' }} </h6>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\"> <strong>Home</strong> </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"fa fa-table\"></i>&nbsp; Tablas\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/usuarios\"> <strong>Usuarios</strong> </a>\r\n\r\n          <a class=\"dropdown-item\" routerLink=\"/clubes\"> <strong>Clubes</strong> </a>\r\n\r\n          <a class=\"dropdown-item\" routerLink=\"/categorias\"> <strong>Categorías</strong> </a>\r\n\r\n          <a class=\"dropdown-item\" routerLink=\"/distancias\"> <strong>Distancias</strong> </a>\r\n\r\n          <a class=\"dropdown-item\" routerLink=\"/competencias\"> <strong>Competencias</strong> </a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"fa fa-folder\"></i>&nbsp; Procesos\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/importar-inscripciones\"> <strong>Importar inscripciones</strong> </a>\r\n\r\n          <a class=\"dropdown-item\" routerLink=\"/competencias/palistas\" routerLinkActive=\"active\">\r\n            <strong>Palistas</strong> </a>\r\n          <a class=\"dropdown-item\" routerLink=\"/competencias/inscripciones\" routerLinkActive=\"active\">\r\n            <strong>Inscripciones</strong> </a>\r\n\r\n          <a class=\"dropdown-item\" routerLink=\"/generar-carreras\"> <strong>Generar carreras</strong> </a>\r\n          <a class=\"dropdown-item\" routerLink=\"/editar-serie\"> <strong>Editar carreras</strong> </a>\r\n          <a class=\"dropdown-item\" routerLink=\"/carreras/series\"> <strong>Series</strong> </a>\r\n          <a class=\"dropdown-item\" routerLink=\"/semi-finales\"> <strong>Generar Semifinales</strong> </a>\r\n          <a class=\"dropdown-item\" routerLink=\"/carreras/semis\"> <strong>Semifinales</strong> </a>\r\n          <a class=\"dropdown-item\" routerLink=\"/finales\"> <strong>Generar finales</strong> </a>\r\n          <a class=\"dropdown-item\" routerLink=\"/carreras/finales\"> <strong>Finales</strong> </a>\r\n          <a class=\"dropdown-item\" routerLink=\"/consola\"> <strong>Exportar resultados</strong> </a>\r\n\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{ usuario.name }} &nbsp; <i class=\"fa fa-user\"></i>&nbsp;\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/profile\"> <strong>Perfil</strong> </a>\r\n          <a class=\"dropdown-item\" (click)=\"onLogout()\"> <strong>Salir</strong> </a>\r\n        </div>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar-competencias/navbar-competencias.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/navbar/navbar-competencias/navbar-competencias.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NavbarCompetenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarCompetenciasComponent", function() { return NavbarCompetenciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarCompetenciasComponent = /** @class */ (function () {
    function NavbarCompetenciasComponent() {
        this.emitLogout = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fecha = new Date();
    }
    NavbarCompetenciasComponent.prototype.ngOnInit = function () {
        console.log(this.fecha);
    };
    NavbarCompetenciasComponent.prototype.onLogout = function () {
        this.emitLogout.emit('salir');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarCompetenciasComponent.prototype, "usuario", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarCompetenciasComponent.prototype, "emitLogout", void 0);
    NavbarCompetenciasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-competencias',
            template: __webpack_require__(/*! ./navbar-competencias.component.html */ "./src/app/components/navbar/navbar-competencias/navbar-competencias.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarCompetenciasComponent);
    return NavbarCompetenciasComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar-inscripciones/navbar-inscripciones.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/navbar/navbar-inscripciones/navbar-inscripciones.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-success\">\r\n  <img class=\"mr-4\" src=\"assets/img/icono.png\" />\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <h4> <strong>FeBoCaK</strong> - {{ usuario.rol }}</h4>\r\n    <h6> {{ usuario.rol == 'Inscripciones' ? usuario.club : 'Federación Bonairense de Canoas y Kayaks' }} </h6>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\"> <strong>Home</strong> </a>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"fa fa-folder\" ></i>&nbsp; Procesos\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/palistas\" routerLinkActive=\"active\"> <strong>Palistas</strong> </a>\r\n          <a class=\"dropdown-item\" routerLink=\"/inscripciones\" routerLinkActive=\"active\"> <strong>Inscripciones</strong> </a>\r\n          <a class=\"dropdown-item\" routerLink=\"/armar-equipos\" routerLinkActive=\"active\"> <strong>Armar equipos</strong> </a>\r\n       </div>\r\n      </li>\r\n\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{ usuario.name }} &nbsp; <i class=\"fa fa-user\"></i>&nbsp;\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/profile\"> <strong>Perfil</strong> </a>\r\n          <a class=\"dropdown-item\" (click)=\"onLogout()\"> <strong>Salir</strong> </a>\r\n        </div>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar-inscripciones/navbar-inscripciones.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/navbar/navbar-inscripciones/navbar-inscripciones.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NavbarInscripcionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarInscripcionesComponent", function() { return NavbarInscripcionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarInscripcionesComponent = /** @class */ (function () {
    function NavbarInscripcionesComponent() {
        this.emitLogout = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavbarInscripcionesComponent.prototype.ngOnInit = function () {
    };
    NavbarInscripcionesComponent.prototype.onLogout = function () {
        this.emitLogout.emit('salir');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarInscripcionesComponent.prototype, "usuario", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarInscripcionesComponent.prototype, "emitLogout", void 0);
    NavbarInscripcionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-inscripciones',
            template: __webpack_require__(/*! ./navbar-inscripciones.component.html */ "./src/app/components/navbar/navbar-inscripciones/navbar-inscripciones.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarInscripcionesComponent);
    return NavbarInscripcionesComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-success\" *ngIf=\"! (!!usuario && !!usuario.rol)\">\r\n  <img class=\"mr-4\" src=\"assets/img/icono.png\" />\r\n  <a class=\"navbar-brand\" href=\"#\" *ngIf=\"! (!!usuario)\">\r\n    <h4> <strong>FeBoCaK</strong> - {{ usuario.rol }}</h4>\r\n    <h6> {{ usuario.rol == 'Inscripciones' ? usuario.club : 'Federación Bonairense de Canoas y Kayaks' }} </h6>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\" >\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\"> <strong>Home</strong> </a>\r\n      </li>\r\n      \r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\"> <strong>Ingresar</strong> </a>\r\n      </li>\r\n      \r\n    </ul>\r\n\r\n    \r\n  </div>\r\n</nav>\r\n\r\n<ng-container  *ngIf=\"!!usuario && !!usuario.rol\">\r\n  <ng-container *ngIf=\"usuario.rol === 'Administración'\">\r\n    <app-navbar-administracion \r\n      [usuario]=\"usuario\" (emitLogout)=\"onLogout()\">\r\n    </app-navbar-administracion>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"usuario.rol === 'Competencias'\">\r\n    <app-navbar-competencias \r\n      [usuario]=\"usuario\" (emitLogout)=\"onLogout()\">\r\n    </app-navbar-competencias>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"usuario.rol === 'Inscripciones'\">\r\n    <app-navbar-inscripciones \r\n      [usuario]=\"usuario\" (emitLogout)=\"onLogout()\">\r\n    </app-navbar-inscripciones>\r\n  </ng-container>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser$().subscribe(function (usuario) {
            _this.usuario = usuario;
            console.log(_this.usuario.name);
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        this.router.navigate(['home']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/palistas/f-palistas/f-palistas.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/palistas/f-palistas/f-palistas.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\" [ngClass]=\"cardHeaderStyle\">\r\n        {{ titulo + \" Palista\" }}\r\n        \r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col col-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"nombre\" class=\"control-label\"> Nombre </label>\r\n                <input type=\"text\" formControlName=\"nombre\" [readonly]=\"titulo==='Eliminar'\" required maxlength=\"30\"\r\n                  [class.is-invalid]=\"nombre.invalid && nombre.touched\" class=\"form-control\" />\r\n                <small class=\"text-danger\" [class.d-none]=\"nombre.untouched || !nombre.hasError('required')\">El nombre es requerido</small>\r\n                <small class=\"text-danger\" [class.d-none]=\"nombre.untouched || !nombre.hasError('minlength')\">La longitud mínima es 2</small>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col col-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"apellido\" class=\"control-label\"> Apellido </label>\r\n                <input type=\"text\" formControlName=\"apellido\" [readonly]=\"titulo==='Eliminar'\" required maxlength=\"30\"\r\n                  [class.is-invalid]=\"apellido.invalid && apellido.touched\" class=\"form-control\" />\r\n                <small class=\"text-danger\" [class.d-none]=\"apellido.untouched || !apellido.hasError('required')\">El apellido es requerido</small>\r\n                <small class=\"text-danger\" [class.d-none]=\"apellido.untouched || !apellido.hasError('minlength')\">La longitud mínima es 2</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"DNI\" class=\"control-label\"> DNI </label>\r\n                <input type=\"text\" formControlName=\"dni\" [readonly]=\"titulo==='Eliminar'\" required maxlength=\"8\"\r\n                  [class.is-invalid]=\"dni.invalid && dni.touched\" class=\"form-control\" />\r\n                <small class=\"text-danger\" [class.d-none]=\"dni.untouched || !dni.hasError('required')\">El DNI es requerido</small>\r\n                <small class=\"text-danger\" [class.d-none]=\"dni.untouched || !dni.hasError('minlength')\">La longitud mínima es 8</small>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"genero\" class=\"control-label\"> Genero </label>\r\n                <select formControlName=\"genero\" required\r\n                  (change)=\"buscarCategoria(fnacimiento.value, genero.value)\"\r\n                  [class.is-invalid]=\"genero.invalid && genero.touched\" class=\"custom-select\">\r\n                  <option value=\"genero\"></option>\r\n                  <option value=\"Masculino\">Masculino</option>\r\n                  <option value=\"Femenino\">Femenino</option>\r\n                </select>\r\n                <small class=\"text-danger\" [class.d-none]=\"genero.valid || genero.untouched\">El genero es requerido</small>\r\n                <small class=\"text-danger\" [class.d-none]=\"genero.untouched || !genero.hasError('invalidGenero')\">Seleccione el genero</small>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"fnacimiento\" class=\"control-label\"> F. nacimiento </label>\r\n                <input type=\"date\" formControlName=\"fnacimiento\" [readonly]=\"titulo==='Eliminar'\" required\r\n                  (change)=\"buscarCategoria(fnacimiento.value, genero.value)\"\r\n                  [class.is-invalid]=\"fnacimiento.invalid && fnacimiento.touched\" class=\"form-control\" />\r\n                <small class=\"text-danger\" [class.d-none]=\"fnacimiento.valid || fnacimiento.untouched\">La fecha de nacimiento es requerida</small>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"categoria\" class=\"control-label\"> Categoría </label>\r\n                <input type=\"text\" formControlName=\"categoria\" [readonly]=\"true\" required\r\n                  [class.is-invalid]=\"(categoria.invalid && categoria.touched)   || categoria.value == 'No se encontró'\"\r\n                  class=\"form-control\" />\r\n                <small class=\"text-danger\" [class.d-none]=\"categoria.valid || fnacimiento.untouched\">La categoría es requerida</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"club\" class=\"control-label\"> Club </label>\r\n            <select formControlName=\"club\" required\r\n              [class.is-invalid]=\"club.invalid && club.touched\" class=\"custom-select\">\r\n              <option value=\"club\"></option>\r\n              <option *ngFor=\"let registro of tblClubes\" >{{ registro }}</option>\r\n            </select>\r\n            <small class=\"text-danger\" [class.d-none]=\"club.untouched || !club.hasError('required')\">El club es requerido</small>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button [disabled]=\"!miForm.valid\" [ngClass]=\"titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\r\n                type=\"submit\" class=\"btn btn-block\">\r\n                {{ titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\r\n              </button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n                Cancelar\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/palistas/f-palistas/f-palistas.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/palistas/f-palistas/f-palistas.component.ts ***!
  \************************************************************************/
/*! exports provided: FPalistasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FPalistasComponent", function() { return FPalistasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/clubes.service */ "./src/app/services/clubes.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_validators_genero_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/validators/genero-validator */ "./src/app/validators/genero-validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var src_app_services_palistas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/palistas.service */ "./src/app/services/palistas.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");












var FPalistasComponent = /** @class */ (function () {
    function FPalistasComponent(dataService, fb, msgService, location, actRoute, router, authService, categoriaService, clubesService) {
        this.dataService = dataService;
        this.fb = fb;
        this.msgService = msgService;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.authService = authService;
        this.categoriaService = categoriaService;
        this.clubesService = clubesService;
        this.titulo = '';
        this.cardHeaderStyle = '';
        this.id = '';
        this.tblClubes = [];
    }
    FPalistasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuario = this.authService.getUser();
        this.categoriaService.getRecords$().subscribe(function (data) { return _this.categorias = data; });
        this.msgService.clearMessages();
        this.setTblClubes();
        this.buildForm();
        this.setState();
    };
    FPalistasComponent.prototype.setTblClubes = function () {
        var _this = this;
        if (this.usuario.club && this.usuario.club != 'FeBoCaK') {
            this.tblClubes.push(this.usuario.club);
        }
        else {
            this.clubesService.getRecords$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (data) { return data.map(function (club) { return club.nombre; }); })).subscribe(function (data) { return _this.tblClubes = data; }, function (error) { return _this.msgService.sendMessage("Error al cargar la tabla de clubes: " + error.statusText, "alert-danger"); });
        }
    };
    FPalistasComponent.prototype.setState = function () {
        var objTitulo = { add: 'Agregar', edit: 'Modificar', delete: 'Eliminar' };
        this.titulo = objTitulo[this.actRoute.snapshot.url[1].path];
        var objStyle = { add: 'bg-primary', edit: 'bg-warning', delete: 'bg-danger' };
        this.cardHeaderStyle = objStyle[this.actRoute.snapshot.url[1].path];
        this.id = this.actRoute.snapshot.paramMap.get('id');
        if (this.titulo !== 'Agregar') {
            this.setFormData();
        }
    };
    FPalistasComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            dni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            apellido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            fnacimiento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            genero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, src_app_validators_genero_validator__WEBPACK_IMPORTED_MODULE_4__["generoValidator"]]],
            categoria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            club: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]]
        });
        this.miForm.controls.club.setValue(this.usuario.club);
    };
    FPalistasComponent.prototype.setFormData = function () {
        var _this = this;
        this.dataService.getRecord$(this.id).subscribe(function (data) {
            _this.miForm.patchValue(data);
        });
        if (this.titulo === 'Eliminar') {
            this.miForm.controls.genero.disable();
        }
    };
    Object.defineProperty(FPalistasComponent.prototype, "dni", {
        get: function () {
            return this.miForm.get('dni');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FPalistasComponent.prototype, "apellido", {
        get: function () {
            return this.miForm.get('apellido');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FPalistasComponent.prototype, "nombre", {
        get: function () {
            return this.miForm.get('nombre');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FPalistasComponent.prototype, "fnacimiento", {
        get: function () {
            return this.miForm.get('fnacimiento');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FPalistasComponent.prototype, "genero", {
        get: function () {
            return this.miForm.get('genero');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FPalistasComponent.prototype, "categoria", {
        get: function () {
            return this.miForm.get('categoria');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FPalistasComponent.prototype, "club", {
        get: function () {
            return this.miForm.get('club');
        },
        enumerable: true,
        configurable: true
    });
    FPalistasComponent.prototype.onSubmit = function () {
        switch (this.titulo) {
            case 'Agregar':
                this.aceptarAgregar();
                break;
            case 'Modificar':
                this.aceptarEditar();
                break;
            case 'Eliminar':
                this.aceptarEliminar();
                break;
        }
    };
    FPalistasComponent.prototype.aceptarAgregar = function () {
        var _this = this;
        this.dataService.addRecord$(this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['nombre'].value + ' Agregado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['palistas']); });
    };
    FPalistasComponent.prototype.aceptarEditar = function () {
        var _this = this;
        this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['nombre'].value + ' Actualizado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['palistas']); });
    };
    FPalistasComponent.prototype.aceptarEliminar = function () {
        var _this = this;
        this.dataService.deleteRecord$(this.id).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['nombre'].value + ' Eliminado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['palistas']); });
    };
    FPalistasComponent.prototype.goBack = function () {
        this.location.back();
    };
    FPalistasComponent.prototype.buscarCategoria = function (fecha, genero) {
        var año = parseInt(fecha.substring(0, 4));
        if (!año || año < 1900) {
            this.miForm.controls.categoria.setValue('No se encontró');
        }
        else {
            var categoria = this.categorias.find(function (el) { return año >= el.desde && año <= el.hasta && el.genero.includes(genero); }).categoria;
            this.miForm.controls.categoria.setValue(categoria);
        }
    };
    FPalistasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-f-palistas',
            template: __webpack_require__(/*! ./f-palistas.component.html */ "./src/app/components/palistas/f-palistas/f-palistas.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_palistas_service__WEBPACK_IMPORTED_MODULE_9__["PalistasService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_7__["MensajesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_8__["CategoriasService"],
            src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_1__["ClubesService"]])
    ], FPalistasComponent);
    return FPalistasComponent;
}());



/***/ }),

/***/ "./src/app/components/palistas/palistas.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/palistas/palistas.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\r\n  <div class=\"card-header d-flex\">\r\n    Palistas\r\n    <a routerLink=\"/palistas/add\" class=\"text-primary ml-auto\">\r\n      <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n    </a>\r\n  </div>\r\n</div>\r\n<table class=\"table table-bordered table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th> DNI </th>\r\n      <th> Nombre </th>\r\n      <th> F. Nacimiento </th>\r\n      <th> Genero </th>\r\n      <th> Categoría </th>\r\n      <th> </th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let registro of tabla\">\r\n      <td routerLink=\"/palistas/edit/{{registro.id}}\"> {{ registro.dni }} </td>\r\n      <td routerLink=\"/palistas/edit/{{registro.id}}\"> {{ registro.palista }} </td>\r\n      <td routerLink=\"/palistas/edit/{{registro.id}}\"> {{ utilService.showDate(registro.fnacimiento) }} </td>\r\n      <td routerLink=\"/palistas/edit/{{registro.id}}\"> {{ registro.genero }} </td>\r\n      <td routerLink=\"/palistas/edit/{{registro.id}}\"> {{ registro.categoria }} </td>\r\n      <td class=\"text-center\">\r\n        <a routerLink=\"/palistas/delete/{{registro.id}}\" class=\"text-danger\">\r\n          <i class=\"fa fa-minus-circle fa-2x\"></i>\r\n        </a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table>"

/***/ }),

/***/ "./src/app/components/palistas/palistas.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/palistas/palistas.component.ts ***!
  \***********************************************************/
/*! exports provided: PalistasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalistasComponent", function() { return PalistasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_palistas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/palistas.service */ "./src/app/services/palistas.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var PalistasComponent = /** @class */ (function () {
    function PalistasComponent(dataService, utilService, authService) {
        this.dataService = dataService;
        this.utilService = utilService;
        this.authService = authService;
    }
    PalistasComponent.prototype.ngOnInit = function () {
        this.usuario = this.authService.getUser();
        this.getRecords();
    };
    PalistasComponent.prototype.getRecords = function () {
        var _this = this;
        var club = this.usuario.rol == 'Inscripciones' ? this.usuario.club : '';
        this.dataService.getRecords$(club).subscribe(function (data) {
            _this.tabla = data;
        });
    };
    PalistasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-palistas',
            template: __webpack_require__(/*! ./palistas.component.html */ "./src/app/components/palistas/palistas.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_palistas_service__WEBPACK_IMPORTED_MODULE_2__["PalistasService"],
            src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], PalistasComponent);
    return PalistasComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\" *ngIf=\"usuario$ | async as usuario; else loading\">\r\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong> Usuario: </strong> {{ usuario.email }}\r\n      </div>\r\n      <div class=\"card-body\">\r\n        \r\n        <form #FormLogin (submit)=\"onSubmit()\">\r\n          <div class=\"row\">\r\n            <div class=\"col-10\">\r\n              <div class=\"form-group\">\r\n                <label class=\"col-form-label\">Nombre:</label>\r\n                <div class=\"form-group border border-light p-1\">\r\n                  {{ usuario.name }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-2\">\r\n              <div class=\"form-group\">\r\n                <img src=\"assets/img/imgIcono.png\" #clubImage class=\"rounded img-thumbnail\" alt=\"profile\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n            \r\n          <div class=\"form-group\">\r\n            <label for=\"club\" class=\"col-form-label\">Club:</label>\r\n            <div class=\"form-group  border border-light p-1\">\r\n              {{ usuario.club }}\r\n            </div>\r\n          </div>            \r\n            \r\n          <div class=\"form-group\">\r\n            <button  type=\"submit\" class=\"btn btn-primary btn-block\">\r\n              <span><i class=\"fa fa-check\"></i></span> Aceptar </button>\r\n          </div>\r\n              \r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loading>Loading Data...</ng-template>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/clubes.service */ "./src/app/services/clubes.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, usuarioService, clubService, router, storage) {
        this.authService = authService;
        this.usuarioService = usuarioService;
        this.clubService = clubService;
        this.router = router;
        this.storage = storage;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.clubImage);
        var email = this.authService.getUser().email;
        this.usuario$ = this.usuarioService.getUsuarioByEmail$(email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function (usuario) { return _this.clubService.getClubBy$('nombre', usuario.club).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (club) {
            var gsReference = _this.storage.storage.refFromURL(club.imageUrl);
            gsReference.getDownloadURL().then(function (url) {
                _this.clubImage.nativeElement.src = url;
            });
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, usuario, { 'imageUrl': club.imageUrl });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) { return console.log(data.imageUrl); })); }));
    };
    ProfileComponent.prototype.onSubmit = function () {
        this.router.navigate(["home"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('clubImage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProfileComponent.prototype, "clubImage", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"],
            src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_5__["ClubesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/subir-logo/subir-logo.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/subir-logo/subir-logo.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-file {\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.btn-file input[type=file] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    font-size: 100px;\r\n    text-align: right;\r\n    filter: alpha(opacity=0);\r\n    opacity: 0;\r\n    outline: none;\r\n    background: white;\r\n    cursor: inherit;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWJpci1sb2dvL3N1YmlyLWxvZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1YmlyLWxvZ28vc3ViaXItbG9nby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1maWxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJ0bi1maWxlIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogaW5oZXJpdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/subir-logo/subir-logo.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/subir-logo/subir-logo.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-3\">\r\n  <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n          Logo del club\r\n      </div>\r\n      <div class=\"card-body text-center\">\r\n        <h4 class=\"h3 mb-3 font-weight-normal\"> {{ nombre }} </h4>\r\n\r\n        <div class=\"form-group\">\r\n          <img src=\"assets/img/imgIcono.png\" #previewImage class=\"rounded img-thumbnail\" alt=\"profile\">\r\n        </div>\r\n\r\n        <label class=\"btn btn-primary btn-block btn-file\">\r\n          Seleccione el archivo  <i class=\"fa fa-picture-o fa\"> </i> \r\n          <input #fileUrl type=\"file\" style=\"display: none;\" accept=\".png, .jpg\" (change)=\"onChange($event)\">\r\n        </label>\r\n\r\n        <input #imageUser type=\"hidden\" [value]=\"urlImage | async\">\r\n        \r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button type=\"button\" class=\"btn btn-lg btn-primary btn-block\" \r\n                [disabled]=\"!fileUrl.value\" (click)=\"onUpload()\">\r\n                <i class=\"fa fa-cloud-upload\"></i> Subir imagen\r\n              </button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button type=\"button\" class=\"btn btn-lg btn-secondary btn-block\" (click)=\"goBack()\">\r\n                Cancelar\r\n              </button>\r\n            </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div> \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/subir-logo/subir-logo.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/subir-logo/subir-logo.component.ts ***!
  \***************************************************************/
/*! exports provided: SubirLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirLogoComponent", function() { return SubirLogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/clubes.service */ "./src/app/services/clubes.service.ts");






var SubirLogoComponent = /** @class */ (function () {
    function SubirLogoComponent(dataService, location, actRoute, router, storage) {
        this.dataService = dataService;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.storage = storage;
    }
    SubirLogoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.actRoute.snapshot.paramMap.get('id');
        this.dataService.getRecord$(this.id).subscribe(function (data) {
            _this.nombre = data.nombre;
            if (data.imageUrl) {
                var gsReference = _this.storage.storage.refFromURL(data.imageUrl);
                gsReference.getDownloadURL().then(function (url) {
                    _this.previewImage.nativeElement.src = url;
                });
            }
        });
    };
    SubirLogoComponent.prototype.onChange = function (e) {
        var _this = this;
        this.imgFile = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            _this.previewImage.nativeElement.src = reader.result;
        };
        if (this.imgFile) {
            reader.readAsDataURL(this.imgFile);
        }
        else {
            this.previewImage.nativeElement.src = "";
        }
    };
    SubirLogoComponent.prototype.onUpload = function () {
        var _this = this;
        this.storage.upload('febocak/clubes/' + this.id, this.imgFile).snapshotChanges()
            .subscribe(function (data) {
            if (data && data.metadata) {
                var imagUrl = 'gs://' + data.metadata.bucket + '/' + data.metadata.fullPath;
                _this.dataService.updateRecord$(_this.id, { imageUrl: imagUrl });
                _this.location.back();
            }
        });
    };
    SubirLogoComponent.prototype.goBack = function () {
        this.location.back();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('previewImage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SubirLogoComponent.prototype, "previewImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageUser'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SubirLogoComponent.prototype, "imageUser", void 0);
    SubirLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subir-logo',
            template: __webpack_require__(/*! ./subir-logo.component.html */ "./src/app/components/subir-logo/subir-logo.component.html"),
            styles: [__webpack_require__(/*! ./subir-logo.component.css */ "./src/app/components/subir-logo/subir-logo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_5__["ClubesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], SubirLogoComponent);
    return SubirLogoComponent;
}());



/***/ }),

/***/ "./src/app/components/usuarios/f-usuarios/f-usuarios.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/usuarios/f-usuarios/f-usuarios.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n  \r\n      <div class=\"card mt-3\">\r\n        <div class=\"card-header\" [ngClass]=\"cardHeaderStyle\">\r\n          {{ titulo + \" usuario\" }}\r\n        </div>\r\n  \r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"name\" class=\"control-label\"> Nombre </label>\r\n              <input type=\"text\" formControlName=\"name\" [readonly]=\"titulo==='Eliminar'\"\r\n                [class.is-invalid]=\"name.invalid && name.touched\" class=\"form-control\" />\r\n              <small class=\"text-danger\" [class.d-none]=\"name.untouched || !name.hasError('required')\">El campo nombre es requerido</small>\r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n              <label for=\"email\" class=\"control-label\"> Email </label>\r\n              <input type=\"email\" formControlName=\"email\" [readonly]=\"titulo==='Eliminar'\"\r\n                [class.is-invalid]=\"email.invalid && email.touched\" class=\"form-control\" />\r\n              <small class=\"text-danger\" [class.d-none]=\"email.untouched || !email.hasError('required')\">El campo email es requerido</small>\r\n            </div>\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"rol\" class=\"control-label\"> Rol </label>\r\n              <select formControlName=\"rol\" required \r\n                [class.is-invalid]=\"rol.invalid && rol.touched\" class=\"custom-select\" > \r\n                <option value=\"rol\"></option>\r\n                <option value=\"Inscripciones\">Inscripciones</option>\r\n                <option value=\"Administración\">Administración</option>\r\n                <option value=\"Competencias\">Competencias</option>\r\n              </select>\r\n              <small class=\"text-danger\" [class.d-none]=\"rol.untouched || !rol.hasError('required')\">El rol es requerido</small>\r\n              <small class=\"text-danger\" [class.d-none]=\"rol.untouched || !rol.hasError('invalidGenero')\">Seleccione el rol</small>\r\n            </div>\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"club\" class=\"control-label\"> Club </label>\r\n              <select formControlName=\"club\" required \r\n                [class.is-invalid]=\"club.invalid && club.touched\" class=\"custom-select\" > \r\n                <option value=\"club\"></option>\r\n                <option *ngFor=\"let item of tblClubes\" >{{ item.nombre }}</option>\r\n              </select>\r\n              <small class=\"text-danger\" [class.d-none]=\"club.valid || club.untouched\">El club es requerido</small>\r\n            </div>\r\n            \r\n            <div *ngIf=\"titulo === 'Agregar'\" class=\"row\">\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"password\" class=\"control-label\"> Contraseña </label>\r\n                  <input type=\"password\" formControlName=\"password\"\r\n                    [class.is-invalid]=\"password.invalid && password.touched\" class=\"form-control\" />\r\n                  <small class=\"text-danger\" [class.d-none]=\"password.untouched || !password.hasError('required')\">El campo contraseña es requerido</small>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"password2\" class=\"control-label\"> Confireme contraseña </label>\r\n                  <input type=\"password\" formControlName=\"password2\"\r\n                    [class.is-invalid]=\"password2.invalid && password2.touched\" class=\"form-control\" />\r\n                  <small class=\"text-danger\" [class.d-none]=\"password2.untouched || !password2.hasError('required')\">El campo contraseña es requerido</small>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <button [disabled]=\"!miForm.valid\" [ngClass]=\"titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\r\n                  type=\"submit\" class=\"btn btn-block\">\r\n                  {{ titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\r\n                </button>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n                  Cancelar\r\n                </button>\r\n              </div>\r\n            </div>\r\n  \r\n          </form>\r\n  \r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/usuarios/f-usuarios/f-usuarios.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/usuarios/f-usuarios/f-usuarios.component.ts ***!
  \************************************************************************/
/*! exports provided: FUsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUsuariosComponent", function() { return FUsuariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/clubes.service */ "./src/app/services/clubes.service.ts");








var FUsuariosComponent = /** @class */ (function () {
    function FUsuariosComponent(dataService, clubService, fb, msgService, location, actRoute, router) {
        this.dataService = dataService;
        this.clubService = clubService;
        this.fb = fb;
        this.msgService = msgService;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.titulo = '';
        this.cardHeaderStyle = '';
        this.id = '';
    }
    FUsuariosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msgService.clearMessages();
        this.clubService.getRecords$().subscribe(function (data) { return _this.tblClubes = data; });
        //this.buildForm();
        this.setState();
    };
    FUsuariosComponent.prototype.setState = function () {
        var objTitulo = { add: 'Agregar', edit: 'Modificar', delete: 'Eliminar' };
        this.titulo = objTitulo[this.actRoute.snapshot.url[1].path];
        var objStyle = { add: 'bg-primary', edit: 'bg-warning', delete: 'bg-danger' };
        this.cardHeaderStyle = objStyle[this.actRoute.snapshot.url[1].path];
        this.id = this.actRoute.snapshot.paramMap.get('id');
        if (this.titulo == 'Agregar') {
            this.buildFormAgregar();
        }
        else {
            this.buildForm();
            this.setFormData();
        }
    };
    FUsuariosComponent.prototype.buildFormAgregar = function () {
        this.miForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rol: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            club: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    FUsuariosComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rol: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            club: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    FUsuariosComponent.prototype.setFormData = function () {
        var _this = this;
        this.dataService.getRecord$(this.id).subscribe(function (data) {
            _this.miForm.patchValue(data);
        });
        if (this.titulo === 'Eliminar') {
            this.miForm.controls.club.disable();
            this.miForm.controls.rol.disable();
        }
    };
    Object.defineProperty(FUsuariosComponent.prototype, "name", {
        get: function () {
            return this.miForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FUsuariosComponent.prototype, "email", {
        get: function () {
            return this.miForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FUsuariosComponent.prototype, "club", {
        get: function () {
            return this.miForm.get('club');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FUsuariosComponent.prototype, "rol", {
        get: function () {
            return this.miForm.get('rol');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FUsuariosComponent.prototype, "password", {
        get: function () {
            return this.miForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FUsuariosComponent.prototype, "password2", {
        get: function () {
            return this.miForm.get('password2');
        },
        enumerable: true,
        configurable: true
    });
    FUsuariosComponent.prototype.onSubmit = function () {
        switch (this.titulo) {
            case 'Agregar':
                this.aceptarAgregar();
                break;
            case 'Modificar':
                this.aceptarEditar();
                break;
            case 'Eliminar':
                this.aceptarEliminar();
                break;
        }
    };
    FUsuariosComponent.prototype.aceptarAgregar = function () {
        var _this = this;
        this.dataService.addRecord$(this.miForm.value).subscribe(function (data) {
            var email = _this.miForm.controls.email.value;
            var pass = _this.miForm.controls.password.value;
            _this.dataService.afAuth.auth.createUserWithEmailAndPassword(email, pass).then(function () { return _this.msgService.sendMessage(_this.miForm.controls['name'].value + ' Agregado satisfactoriamente'); });
        }, function (error) { return _this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['usuarios']); });
    };
    FUsuariosComponent.prototype.aceptarEditar = function () {
        var _this = this;
        this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['name'].value + ' Actualizado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['usuarios']); });
    };
    FUsuariosComponent.prototype.aceptarEliminar = function () {
        var _this = this;
        this.dataService.deleteRecord$(this.id).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['name'].value + ' Eliminado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['usuarios']); });
    };
    FUsuariosComponent.prototype.goBack = function () {
        this.location.back();
    };
    FUsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-f-usuarios',
            template: __webpack_require__(/*! ./f-usuarios.component.html */ "./src/app/components/usuarios/f-usuarios/f-usuarios.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_6__["UsuariosService"],
            src_app_services_clubes_service__WEBPACK_IMPORTED_MODULE_7__["ClubesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FUsuariosComponent);
    return FUsuariosComponent;
}());



/***/ }),

/***/ "./src/app/components/usuarios/usuarios.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\r\n  <div class=\"card-header d-flex\">\r\n    Usuarios\r\n    <a routerLink=\"/usuarios/add\" class=\"text-primary ml-auto\">\r\n      <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<table class=\"table table-bordered table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th> Nombre </th>\r\n      <th> Email </th>\r\n      <th> Rol </th>\r\n      <th> Club </th>\r\n      <th> </th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let registro of tabla\">\r\n      <td routerLink=\"/usuarios/edit/{{registro.uid}}\"> {{ registro.name }} </td>\r\n      <td routerLink=\"/usuarios/edit/{{registro.uid}}\"> {{ registro.email }} </td>\r\n      <td routerLink=\"/usuarios/edit/{{registro.uid}}\"> {{ registro.rol }} </td>\r\n      <td routerLink=\"/usuarios/edit/{{registro.uid}}\"> {{ registro.club }} </td>\r\n      <td class=\"text-center\">\r\n        <a routerLink=\"/usuarios/delete/{{registro.uid}}\" class=\"text-danger\">\r\n          <i class=\"fa fa-minus-circle fa-2x\"></i>\r\n        </a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table>"

/***/ }),

/***/ "./src/app/components/usuarios/usuarios.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/usuarios/usuarios.component.ts ***!
  \***********************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuarios.service */ "./src/app/services/usuarios.service.ts");



var UsuariosComponent = /** @class */ (function () {
    function UsuariosComponent(dataService) {
        this.dataService = dataService;
    }
    UsuariosComponent.prototype.ngOnInit = function () {
        this.getRecords();
    };
    UsuariosComponent.prototype.getRecords = function () {
        var _this = this;
        this.dataService.getRecords$().subscribe(function (data) {
            _this.tabla = data;
        });
    };
    UsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuarios',
            template: __webpack_require__(/*! ./usuarios.component.html */ "./src/app/components/usuarios/usuarios.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_2__["UsuariosService"]])
    ], UsuariosComponent);
    return UsuariosComponent;
}());



/***/ }),

/***/ "./src/app/directives/time-format.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/time-format.directive.ts ***!
  \*****************************************************/
/*! exports provided: TimeFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFormatDirective", function() { return TimeFormatDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimeFormatDirective = /** @class */ (function () {
    function TimeFormatDirective(el) {
        this.el = el;
        this.appTimeFormatChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TimeFormatDirective.prototype.ngOnInit = function () {
        this.appTimeFormat = this.appTimeFormat || "";
        this.formatear(this.appTimeFormat);
    };
    TimeFormatDirective.prototype.formatear = function (value) {
        var char = value.slice(-1);
        var valoresPermitidos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
        if ([3, 6, 9].includes(value.length)) {
            console.warn("No debi\u00F3 tener longitud  " + value.length + " d\u00EDgitos nunca");
            value = value.slice(0, value.length - 2);
        }
        else if (char === '.') {
            if (value.length < 3) {
                value = '00:';
            }
            else if (value.length < 6) {
                value = value.substr(0, 3) + '00:';
            }
            else if (value.length < 9) {
                value = value.substr(0, 6) + '00:';
            }
            else if (value.length < 11) {
                value = value.substr(0, 9) + '00';
            }
        }
        else if (!valoresPermitidos.includes(char)) {
            value = value.slice(0, value.length - 1);
        }
        else if (value.length === 1 && !['0', '1', '2'].includes(char)) {
            value = value.slice(0, value.length - 1);
        }
        else if (value.length === 2) {
            if (value[0] === '2' && !['0', '1', '2', '3', '4'].includes(char)) {
                value = value.slice(0, value.length - 1);
            }
            else {
                value = value + ':';
            }
        }
        else if (value.length === 4) {
            if (char === '6' && value.substr(0, 2) !== '00') {
                value = value.slice(0, value.length - 1);
            }
            else if (!['0', '1', '2', '3', '4', '5', '6'].includes(char)) {
                value = value.slice(0, value.length - 1);
            }
        }
        else if (value.length === 5) {
            if (value[3] === '6' && char !== '0') {
                value = value.slice(0, value.length - 1);
            }
            else {
                value = value + ':';
            }
        }
        else if (value.length === 7) {
            if (char === '6' && value.substr(3, 2) !== '00') {
                value = value.slice(0, value.length - 1);
            }
            else if (!['0', '1', '2', '3', '4', '5', '6'].includes(char)) {
                value = value.slice(0, value.length - 1);
            }
        }
        else if (value.length === 8) {
            if (value[6] === '6' && char !== '0') {
                value = value.slice(0, value.length - 1);
            }
            else {
                value = value + '.';
            }
        }
        this.setValue(value);
    };
    TimeFormatDirective.prototype.setValue = function (value) {
        this.el.nativeElement.value = value;
        this.appTimeFormatChange.next(value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appTimeFormat'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TimeFormatDirective.prototype, "appTimeFormat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TimeFormatDirective.prototype, "appTimeFormatChange", void 0);
    TimeFormatDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTimeFormat]',
            host: {
                "[value]": "appTimeFormat",
                "(input)": "formatear($event.target.value)"
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TimeFormatDirective);
    return TimeFormatDirective;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var usuario = this.authService.getUser();
        if (!!usuario && !!usuario.rol) {
            return true;
        }
        else {
            this.router.navigate(["login"], { queryParams: { retornar: state.url } });
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/authLocal.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/guards/authLocal.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthLocalGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLocalGuard", function() { return AuthLocalGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AuthLocalGuard = /** @class */ (function () {
    function AuthLocalGuard(router) {
        this.router = router;
    }
    AuthLocalGuard.prototype.canActivate = function (next, state) {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].competencia) {
            return true;
        }
        var usuarios = JSON.parse(localStorage.getItem('users'));
        if (!!usuarios && !!usuarios[0].rol) {
            return true;
        }
        else {
            this.router.navigate(["redireccionar-login"]);
            return false;
        }
    };
    AuthLocalGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthLocalGuard);
    return AuthLocalGuard;
}());



/***/ }),

/***/ "./src/app/pruebas/ProgramacionFuncional/flat/flat.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pruebas/ProgramacionFuncional/flat/flat.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  flat works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pruebas/ProgramacionFuncional/flat/flat.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pruebas/ProgramacionFuncional/flat/flat.component.ts ***!
  \**********************************************************************/
/*! exports provided: FlatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatComponent", function() { return FlatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_inscripciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/inscripciones.service */ "./src/app/services/inscripciones.service.ts");



var FlatComponent = /** @class */ (function () {
    function FlatComponent(dataService) {
        this.dataService = dataService;
        this.inscripciones = [];
    }
    FlatComponent.prototype.ngOnInit = function () {
        this.dataService.getRecords$().subscribe();
    };
    FlatComponent.prototype.flatInscripciones2 = function (inscripciones) {
        var _this = this;
        var flat = inscripciones.reduce(function (arr, elemento) {
            elemento.distancia.forEach(function (distancia) {
                arr.push(_this.generarObjetoInscripcion(elemento, distancia));
            });
            return arr;
        }, []);
        return flat;
    };
    FlatComponent.prototype.generarObjetoInscripcion = function (data, distancia) {
        return {
            categoria: data.categoria,
            genero: data.genero,
            distancia: distancia,
            palista: data.palista
        };
    };
    FlatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flat',
            template: __webpack_require__(/*! ./flat.component.html */ "./src/app/pruebas/ProgramacionFuncional/flat/flat.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_inscripciones_service__WEBPACK_IMPORTED_MODULE_2__["InscripcionesService"]])
    ], FlatComponent);
    return FlatComponent;
}());



/***/ }),

/***/ "./src/app/pruebas/download/download.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pruebas/download/download.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-primary\" (click)=\"descargar()\">\r\n  Descargar\r\n</a>\r\n<br>\r\n<a #aDownload class=\"btn btn-clear d-none\" title=\"Download JSON\" [href]=\"downloadJsonHref\" download=\"FeBoCaK.json\">\r\n  Link\r\n</a> "

/***/ }),

/***/ "./src/app/pruebas/download/download.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pruebas/download/download.component.ts ***!
  \********************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download.service */ "./src/app/pruebas/download/download.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var DownloadComponent = /** @class */ (function () {
    function DownloadComponent(sanitizer, downloadService) {
        this.sanitizer = sanitizer;
        this.downloadService = downloadService;
    }
    DownloadComponent.prototype.ngOnInit = function () {
        this.generateDownloadJsonUri();
    };
    DownloadComponent.prototype.generateDownloadJsonUri_Viejo = function () {
        var _this = this;
        this.downloadService.getCategorias$().subscribe(function (data) {
            _this.theJSON = '{ "categorias":' + JSON.stringify(data) + '}';
            _this.downloadJsonHref = _this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(_this.theJSON));
            console.log('Ya puedes darle click');
        });
    };
    /*   concatenar2() {
        let jsonData = '{';
        let contador = 0;
        let nombres: string[] =  [];
        const distancias$ = of([ {"distancia": 100}, {"distancia": 200} ]);
        nombres.push('distancias');
        const clubes$ = of([ {"club": "uno"}, {"club": "dos"} ]);
        nombres.push('clubes');
    
        const result$ = merge(distancias$, clubes$);
        result$.subscribe(
          data => {
            //console.log(data)
            jsonData = jsonData + (contador > 0 ? ',': '') + '"' + nombres[contador] + '":' + JSON.stringify(data);
            contador++;
            console.log('jsonData', jsonData);
          },
          error =>console.log(error),
          () => {
            jsonData = jsonData + '}';
            console.log('jsonData', jsonData);
          }
        );
      } */
    DownloadComponent.prototype.generateDownloadJsonUri = function () {
        var _this = this;
        var jsonData = '{';
        var contador = 0;
        var nombres = [];
        var categorias$ = this.downloadService.getCategorias$();
        nombres.push('categorias');
        var clubes$ = this.downloadService.getClubes$();
        nombres.push('clubes');
        var distancias$ = this.downloadService.getDistancias$();
        nombres.push('distancias');
        var competencias$ = this.downloadService.getCompetencias$();
        nombres.push('competencias');
        var consola$ = this.downloadService.getConsola$();
        nombres.push('consola');
        var inscripciones$ = this.downloadService.getInscripciones$();
        nombres.push('inscripciones');
        var palistas$ = this.downloadService.getPalistas$();
        nombres.push('palistas');
        var users$ = this.downloadService.getUsers$();
        nombres.push('users');
        var result$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(categorias$, clubes$, distancias$, competencias$, consola$, inscripciones$, palistas$, users$);
        result$.subscribe(function (data) {
            jsonData = jsonData + '"' + nombres[contador] + '":' + JSON.stringify(data);
            contador++;
            if (contador == nombres.length) {
                jsonData = jsonData + '}';
                _this.downloadJsonHref = _this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(jsonData));
                console.log('jsonData', jsonData);
            }
            else {
                jsonData = jsonData + ',';
            }
        });
    };
    DownloadComponent.prototype.descargar = function () {
        this.btClose.nativeElement.click();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('aDownload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DownloadComponent.prototype, "btClose", void 0);
    DownloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-download',
            template: __webpack_require__(/*! ./download.component.html */ "./src/app/pruebas/download/download.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _download_service__WEBPACK_IMPORTED_MODULE_3__["DownloadService"]])
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "./src/app/pruebas/download/download.service.ts":
/*!******************************************************!*\
  !*** ./src/app/pruebas/download/download.service.ts ***!
  \******************************************************/
/*! exports provided: DownloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadService", function() { return DownloadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DownloadService = /** @class */ (function () {
    function DownloadService(afs) {
        this.afs = afs;
    }
    DownloadService.prototype.getCategorias$ = function () {
        var collection = this.afs.collection("categorias", function (ref) { return ref.orderBy('desde'); });
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    DownloadService.prototype.getClubes$ = function () {
        var collection = this.afs.collection("clubes");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    DownloadService.prototype.getDistancias$ = function () {
        var collection = this.afs.collection("distancias");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    DownloadService.prototype.getCompetencias$ = function () {
        var collection = this.afs.collection("competencias");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    DownloadService.prototype.getConsola$ = function () {
        var collection = this.afs.collection("consola");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    DownloadService.prototype.getInscripciones$ = function () {
        var collection = this.afs.collection("inscripciones");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    DownloadService.prototype.getPalistas$ = function () {
        var collection = this.afs.collection("palistas");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    DownloadService.prototype.getUsers$ = function () {
        var collection = this.afs.collection("users");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.uid = action.payload.doc.id;
                return data;
            });
        }));
    };
    DownloadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], DownloadService);
    return DownloadService;
}());



/***/ }),

/***/ "./src/app/pruebas/empleados/empleados.component.html":
/*!************************************************************!*\
  !*** ./src/app/pruebas/empleados/empleados.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-3\">\r\n  <div class=\"card-header d-flex\">\r\n    Empleados\r\n    <a routerLink=\"/empleados/add\" class=\"text-primary ml-auto\">\r\n      <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<table class=\"table table-bordered table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th> Nombre </th>\r\n      <th> Apellido </th>\r\n      <th> </th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let registro of tabla\">\r\n      <td routerLink=\"/empleados/edit/{{registro.id}}\"> {{ registro.nombre }} </td>\r\n      <td routerLink=\"/empleados/edit/{{registro.id}}\"> {{ registro.apellido }} </td>\r\n      <td class=\"text-center\">\r\n        <a routerLink=\"/empleados/delete/{{registro.id}}\" class=\"text-danger\">\r\n          <i class=\"fa fa-minus-circle fa-2x\"></i>\r\n        </a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n    <button class=\"btn btn-success\" (click)=\"pruebaSetData()\">\r\n        <i class=\"fa fa-database fa-2x\">Guardar datos</i>\r\n    </button>\r\n    &nbsp;\r\n    <button class=\"btn btn-warning\" (click)=\"pruebaGetData()\">\r\n        <i class=\"fa fa-arrow-down fa-2x\">Recuperar datos</i>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <button class=\"btn btn-block btn-success\" (click)=\"switchToLocalDB()\">\r\n      <i class=\"fa fa-database fa-2x\">Local</i>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"col-md-4\">\r\n    <button class=\"btn btn-block btn-warning\" (click)=\"switchToFirebase()\">\r\n      <i class=\"fa fa-cloud fa-2x\">Firebase</i>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"col md-4\">\r\n    {{ this.tipoDeAlmacenamiento }}\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pruebas/empleados/empleados.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pruebas/empleados/empleados.component.ts ***!
  \**********************************************************/
/*! exports provided: EmpleadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadosComponent", function() { return EmpleadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_pruebas_empleados_services_empleados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pruebas/empleados/services/empleados.service */ "./src/app/pruebas/empleados/services/empleados.service.ts");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var src_app_pruebas_empleados_services_switcher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pruebas/empleados/services/switcher.service */ "./src/app/pruebas/empleados/services/switcher.service.ts");





var EmpleadosComponent = /** @class */ (function () {
    function EmpleadosComponent(dataService, msgService, switcher) {
        this.dataService = dataService;
        this.msgService = msgService;
        this.switcher = switcher;
    }
    EmpleadosComponent.prototype.ngOnInit = function () {
        this.tipoDeAlmacenamiento = this.switcher.getAlmacenamiento();
        this.getRecords();
    };
    EmpleadosComponent.prototype.getRecords = function () {
        var _this = this;
        this.dataService.getRecords$().subscribe(function (data) {
            _this.tabla = data;
        });
    };
    EmpleadosComponent.prototype.pruebaSetData = function () {
        this.dataService.pruebaSetLocalData('empleados', this.tabla);
        this.msgService.sendMessage('Datos guardados en local');
    };
    EmpleadosComponent.prototype.pruebaGetData = function () {
        var tblEmpleados = this.dataService.pruebaGetLocalData('empleados');
        if (tblEmpleados) {
            console.log(tblEmpleados);
        }
        else {
            console.log('No hay empleados guardados localmente');
        }
    };
    EmpleadosComponent.prototype.switchToLocalDB = function () {
        this.switcher.setAlmacenamiento({ tipo: 'LocalStorage' });
        this.msgService.sendMessage('Almacenamiento actual LocalStorage', 'alert-primary');
    };
    EmpleadosComponent.prototype.switchToFirebase = function () {
        this.switcher.setAlmacenamiento({ tipo: 'Firebase' });
        this.msgService.sendMessage('Almacenamiento actual Firebase', 'alert-success');
    };
    EmpleadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empleados',
            template: __webpack_require__(/*! ./empleados.component.html */ "./src/app/pruebas/empleados/empleados.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_pruebas_empleados_services_empleados_service__WEBPACK_IMPORTED_MODULE_2__["EmpleadosService"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"],
            src_app_pruebas_empleados_services_switcher_service__WEBPACK_IMPORTED_MODULE_4__["SwitcherService"]])
    ], EmpleadosComponent);
    return EmpleadosComponent;
}());



/***/ }),

/***/ "./src/app/pruebas/empleados/f-empleados/f-empleados.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pruebas/empleados/f-empleados/f-empleados.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\" [ngClass]=\"cardHeaderStyle\">\r\n        {{ titulo + \" registro\" }}\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"nombre\" class=\"control-label\"> Nombre </label>\r\n            <input type=\"text\" formControlName=\"nombre\" maxlength=\"80\" [readonly]=\"titulo==='Eliminar'\"\r\n              [class.is-invalid]=\"nombre.invalid && nombre.touched\" class=\"form-control\" />\r\n            <small class=\"text-danger\" [class.d-none]=\"nombre.untouched || !nombre.hasError('required')\">El nombre es requerido</small>\r\n          </div>\r\n          \r\n          <div class=\"form-group\">\r\n            <label for=\"apellido\" class=\"control-label\"> Apellido </label>\r\n            <input type=\"text\" formControlName=\"apellido\" maxlength=\"80\" [readonly]=\"titulo==='Eliminar'\"\r\n              [class.is-invalid]=\"apellido.invalid && apellido.touched\" class=\"form-control\" />\r\n            <small class=\"text-danger\" [class.d-none]=\"apellido.untouched || !apellido.hasError('required')\">El apellido es requerido</small>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button [disabled]=\"!miForm.valid\" [ngClass]=\"titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\r\n                type=\"submit\" class=\"btn btn-block\">\r\n                {{ titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\r\n              </button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n                Cancelar\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pruebas/empleados/f-empleados/f-empleados.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pruebas/empleados/f-empleados/f-empleados.component.ts ***!
  \************************************************************************/
/*! exports provided: FEmpleadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEmpleadosComponent", function() { return FEmpleadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var src_app_pruebas_empleados_services_empleados_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pruebas/empleados/services/empleados.service */ "./src/app/pruebas/empleados/services/empleados.service.ts");







var FEmpleadosComponent = /** @class */ (function () {
    function FEmpleadosComponent(dataService, fb, msgService, location, actRoute, router) {
        this.dataService = dataService;
        this.fb = fb;
        this.msgService = msgService;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.titulo = '';
        this.cardHeaderStyle = '';
        this.id = '';
    }
    FEmpleadosComponent.prototype.ngOnInit = function () {
        this.msgService.clearMessages();
        this.buildForm();
        this.setState();
    };
    FEmpleadosComponent.prototype.setState = function () {
        var objTitulo = { add: 'Agregar', edit: 'Modificar', delete: 'Eliminar' };
        this.titulo = objTitulo[this.actRoute.snapshot.url[1].path];
        var objStyle = { add: 'bg-primary', edit: 'bg-warning', delete: 'bg-danger' };
        this.cardHeaderStyle = objStyle[this.actRoute.snapshot.url[1].path];
        this.id = this.actRoute.snapshot.paramMap.get('id');
        if (this.titulo !== 'Agregar') {
            this.setFormData();
        }
    };
    FEmpleadosComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            apellido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    FEmpleadosComponent.prototype.setFormData = function () {
        var _this = this;
        this.dataService.getRecord$(this.id).subscribe(function (data) {
            _this.miForm.patchValue(data);
        });
    };
    Object.defineProperty(FEmpleadosComponent.prototype, "nombre", {
        get: function () {
            return this.miForm.get('nombre');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FEmpleadosComponent.prototype, "apellido", {
        get: function () {
            return this.miForm.get('apellido');
        },
        enumerable: true,
        configurable: true
    });
    FEmpleadosComponent.prototype.onSubmit = function () {
        switch (this.titulo) {
            case 'Agregar':
                this.aceptarAgregar();
                break;
            case 'Modificar':
                this.aceptarEditar();
                break;
            case 'Eliminar':
                this.aceptarEliminar();
                break;
        }
    };
    FEmpleadosComponent.prototype.aceptarAgregar = function () {
        var _this = this;
        this.dataService.addRecord$(this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['nombre'].value + ' Agregado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['empleados']); });
    };
    FEmpleadosComponent.prototype.aceptarEditar = function () {
        var _this = this;
        this.dataService.updateRecord$(this.id, this.miForm.value).subscribe(function (data) {
            _this.msgService.sendMessage(_this.miForm.controls['nombre'].value + ' Actualizado satisfactoriamente');
        }, function (error) { return _this.msgService.sendMessage('Error al actualizar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['empleados']); });
    };
    FEmpleadosComponent.prototype.aceptarEliminar = function () {
        var _this = this;
        this.dataService.deleteRecord$(this.id).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['nombre'].value + ' Eliminado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al eliminar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.router.navigate(['empleados']); });
    };
    FEmpleadosComponent.prototype.goBack = function () {
        this.location.back();
    };
    FEmpleadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-f-empleados',
            template: __webpack_require__(/*! ./f-empleados.component.html */ "./src/app/pruebas/empleados/f-empleados/f-empleados.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_pruebas_empleados_services_empleados_service__WEBPACK_IMPORTED_MODULE_6__["EmpleadosService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_5__["MensajesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FEmpleadosComponent);
    return FEmpleadosComponent;
}());



/***/ }),

/***/ "./src/app/pruebas/empleados/services/empleados.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pruebas/empleados/services/empleados.service.ts ***!
  \*****************************************************************/
/*! exports provided: EmpleadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpleadosService", function() { return EmpleadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _switcher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switcher.service */ "./src/app/pruebas/empleados/services/switcher.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var EmpleadosService = /** @class */ (function () {
    function EmpleadosService(afs, switcher) {
        this.afs = afs;
        this.switcher = switcher;
        this.collection = this.afs.collection("empleados");
    }
    EmpleadosService.prototype.getRecords$ = function () {
        return this.switcher.almacenamiento == 'LocalStorage' ? this.getRecordsLS$() : this.getRecordsFB$();
    };
    EmpleadosService.prototype.getRecordsLS$ = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(JSON.parse(localStorage.getItem('empleados')));
    };
    EmpleadosService.prototype.getRecordsFB$ = function () {
        return this.collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    EmpleadosService.prototype.getRecord$ = function (id) {
        return this.switcher.almacenamiento == 'LocalStorage' ? this.getRecordLS$(id) : this.getRecordFB$(id);
    };
    EmpleadosService.prototype.getRecordLS$ = function (id) {
        var empleado = this.getRecordsLS$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data.filter(function (element) { return element.id === id; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (data) { return data; }));
        return empleado;
    };
    EmpleadosService.prototype.getRecordFB$ = function (id) {
        return this.afs.doc("empleados/" + id).valueChanges();
    };
    EmpleadosService.prototype.addRecord$ = function (registro) {
        return this.switcher.almacenamiento == 'LocalStorage' ? this.addRecordLS$(registro) : this.addRecordFB$(registro);
    };
    EmpleadosService.prototype.addRecordLS$ = function (registro) {
        var tabla = JSON.parse(localStorage.getItem('empleados'));
        registro.id = this.generarID();
        tabla.push(registro);
        localStorage.setItem('empleados', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(tabla);
    };
    EmpleadosService.prototype.addRecordFB$ = function (registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.collection.add(registro));
    };
    EmpleadosService.prototype.updateRecord$ = function (id, registro) {
        if (this.switcher.almacenamiento == 'LocalStorage') {
            return this.updateRecordLS$(id, registro);
        }
        else {
            return this.updateRecordFB$(id, registro);
        }
    };
    EmpleadosService.prototype.updateRecordLS$ = function (id, registro) {
        registro.id = id;
        var tabla = JSON.parse(localStorage.getItem('empleados'));
        tabla.splice(tabla.findIndex(function (element) { return element.id === id; }), 1, registro);
        localStorage.setItem('empleados', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(tabla);
    };
    EmpleadosService.prototype.updateRecordFB$ = function (id, registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.afs.doc("empleados/" + id).update(registro));
    };
    EmpleadosService.prototype.deleteRecord$ = function (id) {
        return this.switcher.almacenamiento == 'LocalStorage' ?
            this.deleteRecordLS$(id) : this.deleteRecordFB$(id);
    };
    EmpleadosService.prototype.deleteRecordLS$ = function (id) {
        var tabla = JSON.parse(localStorage.getItem('empleados'));
        tabla.splice(tabla.findIndex(function (element) { return element.id === id; }), 1);
        localStorage.setItem('empleados', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(tabla);
    };
    EmpleadosService.prototype.deleteRecordFB$ = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.afs.doc("empleados/" + id).delete());
    };
    EmpleadosService.prototype.pruebaSetLocalData = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    EmpleadosService.prototype.pruebaGetLocalData = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    EmpleadosService.prototype.generarID = function () {
        var fecha = new Date();
        var año = fecha.getFullYear().toString().padStart(4, '0');
        var mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
        var dia = fecha.getDate().toString().padStart(2, '0');
        var hora = fecha.getHours().toString().padStart(2, '0');
        var minutos = fecha.getMinutes().toString().padStart(2, '0');
        var segundos = fecha.getSeconds().toString().padStart(2, '0');
        var ms = fecha.getMilliseconds().toString().padStart(1, '0');
        return 'local' + año + mes + dia + hora + minutos + segundos + ms;
    };
    EmpleadosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _switcher_service__WEBPACK_IMPORTED_MODULE_3__["SwitcherService"]])
    ], EmpleadosService);
    return EmpleadosService;
}());



/***/ }),

/***/ "./src/app/pruebas/empleados/services/switcher.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/pruebas/empleados/services/switcher.service.ts ***!
  \****************************************************************/
/*! exports provided: SwitcherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitcherService", function() { return SwitcherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwitcherService = /** @class */ (function () {
    function SwitcherService() {
    }
    SwitcherService.prototype.setAlmacenamiento = function (tipo) {
        console.log('setAlmacenamiento');
        localStorage.setItem('almacenamiento', JSON.stringify(tipo));
    };
    SwitcherService.prototype.getAlmacenamiento = function () {
        console.log('getAlmacenamiento');
        var almacenamiento = JSON.parse(localStorage.getItem('almacenamiento'));
        console.log(almacenamiento);
        this.almacenamiento = almacenamiento.tipo || 'Firebase';
        console.log(this.almacenamiento);
        return this.almacenamiento;
    };
    SwitcherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SwitcherService);
    return SwitcherService;
}());



/***/ }),

/***/ "./src/app/pruebas/mock-guardar/mock-guardar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pruebas/mock-guardar/mock-guardar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n  \r\n      <div class=\"card mt-3\">\r\n        <div class=\"card-header\" [ngClass]=\"cardHeaderStyle\">\r\n          {{ titulo + \" registro\" }}\r\n          \r\n        </div>\r\n  \r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit()\">\r\n  \r\n            <div class=\"row\">\r\n              <div class=\"col col-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"nombre\" class=\"control-label\"> Nombre </label>\r\n                  <input type=\"text\" formControlName=\"nombre\" [readonly]=\"titulo==='Eliminar'\" required maxlength=\"30\"\r\n                    [class.is-invalid]=\"nombre.invalid && nombre.touched\" class=\"form-control\" />\r\n                  <small class=\"text-danger\" [class.d-none]=\"nombre.untouched || !nombre.hasError('required')\">El nombre es requerido</small>\r\n                  <small class=\"text-danger\" [class.d-none]=\"nombre.untouched || !nombre.hasError('minlength')\">La longitud mínima es 2</small>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"col col-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"apellido\" class=\"control-label\"> Apellido </label>\r\n                  <input type=\"text\" formControlName=\"apellido\" [readonly]=\"titulo==='Eliminar'\" maxlength=\"30\"\r\n                    [class.is-invalid]=\"apellido.invalid && apellido.touched\" class=\"form-control\" />\r\n                  <small class=\"text-danger\" [class.d-none]=\"apellido.untouched || !apellido.hasError('required')\">El apellido es requerido</small>\r\n                  <small class=\"text-danger\" [class.d-none]=\"apellido.untouched || !apellido.hasError('minlength')\">La longitud mínima es 2</small>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <button [disabled]=\"!miForm.valid\" [ngClass]=\"titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\r\n                  type=\"submit\" class=\"btn btn-block\">\r\n                  {{ titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\r\n                </button>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n                  Cancelar\r\n                </button>\r\n              </div>\r\n            </div>\r\n  \r\n          </form>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/pruebas/mock-guardar/mock-guardar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pruebas/mock-guardar/mock-guardar.component.ts ***!
  \****************************************************************/
/*! exports provided: MockGuardarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockGuardarComponent", function() { return MockGuardarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mensajes.service */ "./src/app/services/mensajes.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var MockGuardarComponent = /** @class */ (function () {
    function MockGuardarComponent(fb, msgService, location, afs) {
        this.fb = fb;
        this.msgService = msgService;
        this.location = location;
        this.afs = afs;
        this.titulo = '';
        this.cardHeaderStyle = '';
        this.id = '';
        this.collection = this.afs.collection("prueba");
    }
    MockGuardarComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.setState();
    };
    MockGuardarComponent.prototype.setState = function () {
        this.cardHeaderStyle = 'bg-primary';
    };
    MockGuardarComponent.prototype.buildForm = function () {
        this.miForm = this.fb.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            apellido: ['']
        });
    };
    MockGuardarComponent.prototype.setFormData = function () {
        if (this.titulo === 'Eliminar') {
            this.miForm.controls.genero.disable();
        }
    };
    Object.defineProperty(MockGuardarComponent.prototype, "nombre", {
        get: function () {
            return this.miForm.get('nombre');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockGuardarComponent.prototype, "apellido", {
        get: function () {
            return this.miForm.get('apellido');
        },
        enumerable: true,
        configurable: true
    });
    MockGuardarComponent.prototype.onSubmit = function () {
        this.aceptarAgregar();
    };
    MockGuardarComponent.prototype.aceptarAgregar = function () {
        var _this = this;
        this.addRecord$(this.miForm.value).subscribe(function (data) { return _this.msgService.sendMessage(_this.miForm.controls['nombre'].value + ' Agregado satisfactoriamente'); }, function (error) { return _this.msgService.sendMessage('Error al agregar los datos: ' + error.statusText, 'alert-danger'); }, function () { return _this.msgService.sendMessage(' Completado satisfactoriamente'); });
    };
    MockGuardarComponent.prototype.goBack = function () {
        this.location.back();
    };
    MockGuardarComponent.prototype.addRecord$ = function (registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.collection.add(registro));
    };
    MockGuardarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mock-guardar',
            template: __webpack_require__(/*! ./mock-guardar.component.html */ "./src/app/pruebas/mock-guardar/mock-guardar.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_mensajes_service__WEBPACK_IMPORTED_MODULE_3__["MensajesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], MockGuardarComponent);
    return MockGuardarComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _usuarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuarios.service */ "./src/app/services/usuarios.service.ts");







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, usuariosService) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.usuariosService = usuariosService;
        this.subjectUsuario = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.getUser());
    }
    AuthService.prototype.getUser = function () {
        var usuario = {};
        var strUsuario = sessionStorage.getItem('currentUser');
        if (strUsuario !== null && strUsuario !== 'undefined') {
            usuario = JSON.parse(strUsuario);
        }
        return usuario;
    };
    AuthService.prototype.getUser$ = function () {
        return this.subjectUsuario.asObservable();
    };
    AuthService.prototype.sendUser = function (usuario) {
        this.subjectUsuario.next(usuario);
    };
    AuthService.prototype.login$ = function (email, password) {
        var _this = this;
        var fsSignIn$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.afAuth.auth.signInWithEmailAndPassword(email, password))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data.user.email; }));
        var usuario$ = this.usuariosService.getUsuarioByEmail$(email);
        var combinado$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(fsSignIn$, usuario$)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data[1]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (user) { return _this.setAndSendUsuario(user); }));
        return combinado$;
    };
    AuthService.prototype.loginLocal$ = function (email, password) {
        var usuarios = JSON.parse(localStorage.getItem('users'));
        var usuario = usuarios.find(function (elemento) { return elemento.email === email && elemento.password === password; });
        this.setAndSendUsuario(usuario);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(usuario);
    };
    AuthService.prototype.logoutUser = function () {
        this.setAndSendUsuario({});
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.setAndSendUsuario = function (usuario) {
        sessionStorage.setItem('currentUser', JSON.stringify(usuario));
        this.sendUser(usuario);
    };
    AuthService.prototype.updateUser = function (user) {
        var _this = this;
        this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (auth) { return auth; })).subscribe(function (auth) {
            var userState = auth;
            userState
                .updateProfile({ displayName: user.name, photoURL: user.photoUrl })
                .then(function () {
                _this.afs
                    .doc("users/" + user.uid)
                    .set(user)
                    .then(function () {
                    //this.user = user;
                });
            })
                .catch(function (err) { return console.log(err); });
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _usuarios_service__WEBPACK_IMPORTED_MODULE_6__["UsuariosService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/categorias.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categorias.service.ts ***!
  \************************************************/
/*! exports provided: CategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasService", function() { return CategoriasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CategoriasService = /** @class */ (function () {
    function CategoriasService(afs) {
        this.afs = afs;
        this.collection = this.afs.collection("categorias", function (ref) { return ref.orderBy('desde'); });
    }
    CategoriasService.prototype.getRecords$ = function () {
        return this.collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    CategoriasService.prototype.getRecord$ = function (id) {
        return this.afs.doc("categorias/" + id).valueChanges();
    };
    CategoriasService.prototype.addRecord$ = function (registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.collection.add(registro));
    };
    CategoriasService.prototype.updateRecord$ = function (id, registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("categorias/" + id).update(registro));
    };
    CategoriasService.prototype.deleteRecord$ = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("categorias/" + id).delete());
    };
    CategoriasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], CategoriasService);
    return CategoriasService;
}());



/***/ }),

/***/ "./src/app/services/clubes.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/clubes.service.ts ***!
  \********************************************/
/*! exports provided: ClubesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubesService", function() { return ClubesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ClubesService = /** @class */ (function () {
    function ClubesService(afs) {
        this.afs = afs;
    }
    ClubesService.prototype.getRecords$ = function () {
        this.collection = this.afs.collection('clubes', function (ref) { return ref.orderBy('nombre'); });
        return this.clubes = this.collection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    ClubesService.prototype.getRecord$ = function (id) {
        this.clubDoc = this.afs.doc("clubes/" + id);
        this.club = this.clubDoc.valueChanges();
        return this.club;
    };
    ClubesService.prototype.getClubBy$ = function (parametro, valor) {
        return this.afs.collection('clubes', function (ref) { return ref.where(parametro, '==', valor); }).valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (data) { return data; }));
    };
    ClubesService.prototype.addRecord$ = function (registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.collection.add(registro));
    };
    ClubesService.prototype.updateRecord$ = function (id, registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("clubes/" + id).update(registro));
    };
    ClubesService.prototype.deleteRecord$ = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("clubes/" + id).delete());
    };
    ClubesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ClubesService);
    return ClubesService;
}());



/***/ }),

/***/ "./src/app/services/competencias.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/competencias.service.ts ***!
  \**************************************************/
/*! exports provided: CompetenciasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciasService", function() { return CompetenciasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CompetenciasService = /** @class */ (function () {
    function CompetenciasService(afs) {
        this.afs = afs;
        this.collection = this.afs.collection("competencias", function (ref) { return ref.orderBy('desde'); });
    }
    CompetenciasService.prototype.getRecords$ = function () {
        return this.collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    CompetenciasService.prototype.getRecord$ = function (id) {
        return this.afs.doc("competencias/" + id).valueChanges();
    };
    CompetenciasService.prototype.addRecord$ = function (registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.collection.add(registro));
    };
    CompetenciasService.prototype.updateRecord$ = function (id, registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("competencias/" + id).update(registro));
    };
    CompetenciasService.prototype.deleteRecord$ = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("competencias/" + id).delete());
    };
    CompetenciasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], CompetenciasService);
    return CompetenciasService;
}());



/***/ }),

/***/ "./src/app/services/condiciones-carreras.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/condiciones-carreras.service.ts ***!
  \**********************************************************/
/*! exports provided: CondicionesCarrerasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicionesCarrerasService", function() { return CondicionesCarrerasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_series_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/series.service */ "./src/app/services/series.service.ts");



var CondicionesCarrerasService = /** @class */ (function () {
    function CondicionesCarrerasService(seriesService) {
        this.seriesService = seriesService;
        this.condiciones = [
            {
                minimo: 10,
                maximo: 18,
                serie: {
                    pasanDirectoAfinal: [1, 2, 3],
                    pasanAsemiFinal: [4, 5, 6, 7],
                    adicional: { posicion: [8], cantidad: [1] }
                },
                semis: {
                    pasanAfinal: [1, 2, 3]
                }
            },
            {
                minimo: 19,
                maximo: 27,
                serie: {
                    pasanDirectoAfinal: [1],
                    pasanAsemiFinal: [2, 3, 4, 5, 6, 7],
                    adicional: { posicion: [10], cantidad: [0] }
                },
                semis: {
                    pasanAfinal: [1, 2, 3]
                }
            },
            {
                minimo: 19,
                maximo: 27,
                serie: {
                    pasanDirectoAfinal: [1],
                    pasanAsemiFinal: [2, 3, 4, 5, 6, 7],
                    adicional: { posicion: [10], cantidad: [0] }
                },
                semis: {
                    pasanAfinal: [1, 2, 3]
                }
            },
            {
                minimo: 28,
                maximo: 36,
                serie: {
                    pasanDirectoAfinal: [0],
                    pasanAsemiFinal: [1, 2, 3, 4, 5, 6],
                    adicional: { posicion: [7], cantidad: [3] }
                },
                semis: {
                    pasanAfinal: [1, 2, 3]
                }
            }
        ];
    }
    CondicionesCarrerasService.prototype.getCondiciones = function (categoria, genero, distancia) {
        var cantidadDeAtletas = this.getCantidadGrupoSerie(categoria, genero, distancia);
        return this.condiciones.find(function (elemento) { return cantidadDeAtletas >= elemento.minimo && cantidadDeAtletas <= elemento.maximo; });
    };
    CondicionesCarrerasService.prototype.getCantidadGrupoSerie = function (categoria, genero, distancia) {
        var grupoSerie = this.seriesService.getGrupoSerie(categoria, genero, distancia);
        return grupoSerie ? grupoSerie.total : 0;
    };
    CondicionesCarrerasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_series_service__WEBPACK_IMPORTED_MODULE_2__["SeriesService"]])
    ], CondicionesCarrerasService);
    return CondicionesCarrerasService;
}());



/***/ }),

/***/ "./src/app/services/consola.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/consola.service.ts ***!
  \*********************************************/
/*! exports provided: ConsolaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolaService", function() { return ConsolaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ConsolaService = /** @class */ (function () {
    function ConsolaService(afs) {
        this.afs = afs;
        this.collection = this.afs.collection("consola");
    }
    ConsolaService.prototype.getRecords$ = function () {
        return this.collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    ConsolaService.prototype.getRecord$ = function (id) {
        return this.afs.doc("consola/" + id).valueChanges();
    };
    ConsolaService.prototype.addRecord$ = function (registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.collection.add(registro));
    };
    ConsolaService.prototype.updateRecord$ = function (id, registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("consola/" + id).update(registro));
    };
    ConsolaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ConsolaService);
    return ConsolaService;
}());



/***/ }),

/***/ "./src/app/services/distancias.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/distancias.service.ts ***!
  \************************************************/
/*! exports provided: DistanciasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanciasService", function() { return DistanciasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DistanciasService = /** @class */ (function () {
    function DistanciasService(afs) {
        this.afs = afs;
        this.collection = this.afs.collection("distancias", function (ref) { return ref.orderBy('embarcacion').orderBy('metros'); });
    }
    DistanciasService.prototype.getRecords$ = function () {
        return this.collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    DistanciasService.prototype.getAllEnCompetencia$ = function (competencia) {
        return this.afs.doc("competencias/" + competencia).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data && data.distancia ? data.distancia : []; }));
    };
    DistanciasService.prototype.getOneEnCompetencia$ = function (competencia, id) {
        return this.afs.doc("competencias/" + competencia).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.distancia[id]; }));
    };
    DistanciasService.prototype.getCompetencia$ = function (competencia) {
        return this.afs.doc("competencias/" + competencia).valueChanges();
    };
    DistanciasService.prototype.getRecord$ = function (id) {
        return this.afs.doc("distancias/" + id).valueChanges();
    };
    DistanciasService.prototype.addRecord$ = function (registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.collection.add(registro));
    };
    DistanciasService.prototype.updateRecord$ = function (id, registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("distancias/" + id).update(registro));
    };
    DistanciasService.prototype.deleteRecord$ = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("distancias/" + id).delete());
    };
    DistanciasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], DistanciasService);
    return DistanciasService;
}());



/***/ }),

/***/ "./src/app/services/equipos.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/equipos.service.ts ***!
  \*********************************************/
/*! exports provided: EquiposService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquiposService", function() { return EquiposService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var EquiposService = /** @class */ (function () {
    function EquiposService(afs) {
        this.afs = afs;
        this.collection = this.afs.collection("equipos");
    }
    EquiposService.prototype.getRecords$ = function () {
        return this.collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    EquiposService.prototype.getRecord$ = function (id) {
        return this.afs.doc("equipos/" + id).valueChanges();
    };
    EquiposService.prototype.addRecord$ = function (registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.collection.add(registro));
    };
    EquiposService.prototype.updateRecord$ = function (id, registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("equipos/" + id).update(registro));
    };
    EquiposService.prototype.deleteRecord$ = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("equipos/" + id).delete());
    };
    EquiposService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], EquiposService);
    return EquiposService;
}());



/***/ }),

/***/ "./src/app/services/exportar.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/exportar.service.ts ***!
  \**********************************************/
/*! exports provided: ExportarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportarService", function() { return ExportarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ExportarService = /** @class */ (function () {
    function ExportarService(afs) {
        this.afs = afs;
    }
    ExportarService.prototype.getCategorias$ = function () {
        var collection = this.afs.collection("categorias", function (ref) { return ref.orderBy('desde'); });
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    ExportarService.prototype.getClubes$ = function () {
        var collection = this.afs.collection("clubes");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    ExportarService.prototype.getDistancias$ = function () {
        var collection = this.afs.collection("distancias");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    ExportarService.prototype.getCompetencias$ = function () {
        var collection = this.afs.collection("competencias");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    ExportarService.prototype.getConsola$ = function () {
        var collection = this.afs.collection("consola");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    ExportarService.prototype.getInscripciones$ = function () {
        var collection = this.afs.collection("inscripciones");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    ExportarService.prototype.getPalistas$ = function () {
        var collection = this.afs.collection("palistas");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    ExportarService.prototype.getUsers$ = function () {
        var collection = this.afs.collection("users");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.uid = action.payload.doc.id;
                return data;
            });
        }));
    };
    ExportarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ExportarService);
    return ExportarService;
}());



/***/ }),

/***/ "./src/app/services/generar-carreras.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/generar-carreras.service.ts ***!
  \******************************************************/
/*! exports provided: GenerarCarrerasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarCarrerasService", function() { return GenerarCarrerasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GenerarCarrerasService = /** @class */ (function () {
    function GenerarCarrerasService() {
    }
    GenerarCarrerasService.prototype.flatInscripciones = function (inscripciones) {
        var flat = [];
        for (var i = 0; i < inscripciones.length; i++) {
            for (var j = 0; j < inscripciones[i].distancia.length; j++) {
                var inscripcion = this.generarObjetoInscripcion(inscripciones[i], inscripciones[i].distancia[j]);
                flat.push(inscripcion);
            }
        }
        return flat;
    };
    GenerarCarrerasService.prototype.flatInscripciones2 = function (inscripciones) {
        var _this = this;
        var flat = inscripciones.reduce(function (arr, elemento) {
            elemento.distancia.forEach(function (distancia) {
                arr.push(_this.generarObjetoInscripcion(elemento, distancia));
            });
            return arr;
        }, []);
        return flat;
    };
    GenerarCarrerasService.prototype.generarObjetoInscripcion = function (data, distancia) {
        return {
            categoria: data.categoria,
            genero: data.genero,
            distancia: distancia,
            palista: data.palista
        };
    };
    GenerarCarrerasService.prototype.flatCarreras = function (inscripciones) {
        var _this = this;
        var arr = [];
        for (var i = 0; i < inscripciones.length; i++) {
            var _loop_1 = function (j) {
                var carrera = this_1.generarObjetoCarrera(inscripciones[i], inscripciones[i].distancia[j]);
                if (!!!arr.find(function (elemento) { return _this.compararCarrera(elemento, carrera); })) {
                    arr.push(carrera);
                }
            };
            var this_1 = this;
            for (var j = 0; j < inscripciones[i].distancia.length; j++) {
                _loop_1(j);
            }
        }
        return arr;
    };
    GenerarCarrerasService.prototype.compararCarrera = function (elemento, carrera) {
        return elemento.genero === carrera.genero &&
            elemento.categoria === carrera.categoria &&
            elemento.distancia === carrera.distancia;
    };
    GenerarCarrerasService.prototype.generarObjetoCarrera = function (data, distancia) {
        return {
            //id: contador.toString().padStart(4, '0'),
            categoria: data.categoria,
            genero: data.genero,
            distancia: distancia,
            cantidad: 0
        };
    };
    GenerarCarrerasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GenerarCarrerasService);
    return GenerarCarrerasService;
}());



/***/ }),

/***/ "./src/app/services/inscripciones.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/inscripciones.service.ts ***!
  \***************************************************/
/*! exports provided: InscripcionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscripcionesService", function() { return InscripcionesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");






var InscripcionesService = /** @class */ (function () {
    function InscripcionesService(afs, authService) {
        this.afs = afs;
        this.authService = authService;
        this.collection = afs.collection('inscripciones');
    }
    InscripcionesService.prototype.getRecords$ = function (club) {
        if (club === void 0) { club = ''; }
        if (club && club != 'FeBoCaK') {
            this.collection = this.afs.collection('inscripciones', function (ref) { return ref.where('club', '==', club); });
        }
        else {
            this.collection = this.afs.collection('inscripciones');
        }
        return this.inscripciones = this.collection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    InscripcionesService.prototype.queryRecords$ = function (inscripciones, objConsulta) {
        console.log("TCL: InscripcionesService -> objConsulta", objConsulta);
        var resultado = inscripciones.slice();
        if (objConsulta.club) {
            resultado = resultado.filter(function (elemento) { return elemento.club === objConsulta.club; });
        }
        if (objConsulta.categoria) {
            resultado = resultado.filter(function (elemento) { return elemento.categoria === objConsulta.categoria; });
        }
        if (objConsulta.genero) {
            resultado = resultado.filter(function (elemento) { return elemento.genero === objConsulta.genero; });
        }
        if (objConsulta.distancia) {
            resultado = resultado.filter(function (elemento) { return elemento.distancia.includes(objConsulta.distancia); });
        }
        return resultado;
    };
    InscripcionesService.prototype.getRecord$ = function (id) {
        return this.afs.doc("inscripciones/" + id).valueChanges();
    };
    InscripcionesService.prototype.addRecord$ = function (inscripcion) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.collection.add(inscripcion));
    };
    InscripcionesService.prototype.updateRecord$ = function (id, inscripcion) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("inscripciones/" + id).update(inscripcion));
    };
    InscripcionesService.prototype.deleteRecord$ = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("inscripciones/" + id).delete());
    };
    InscripcionesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], InscripcionesService);
    return InscripcionesService;
}());



/***/ }),

/***/ "./src/app/services/mensajes.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/mensajes.service.ts ***!
  \**********************************************/
/*! exports provided: MensajesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesService", function() { return MensajesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var MensajesService = /** @class */ (function () {
    function MensajesService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MensajesService.prototype.sendMessage = function (message, tipo) {
        if (tipo === void 0) { tipo = 'alert-primary'; }
        this.subject.next({ text: message, tipo: tipo });
    };
    MensajesService.prototype.clearMessages = function () {
        this.subject.next('');
    };
    MensajesService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    MensajesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MensajesService);
    return MensajesService;
}());



/***/ }),

/***/ "./src/app/services/msg.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/msg.service.ts ***!
  \*****************************************/
/*! exports provided: MsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgService", function() { return MsgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);



var MsgService = /** @class */ (function () {
    function MsgService() {
    }
    MsgService.prototype.mensaje = function (titulo, mensaje, tipo) {
        if (titulo === void 0) { titulo = ''; }
        if (tipo === void 0) { tipo = ''; }
        sweetalert__WEBPACK_IMPORTED_MODULE_2___default()(titulo, mensaje, tipo);
    };
    MsgService.prototype.ok = function (mensaje, titulo) {
        if (titulo === void 0) { titulo = ''; }
        sweetalert__WEBPACK_IMPORTED_MODULE_2___default()(titulo, mensaje, 'success');
    };
    MsgService.prototype.error = function (mensaje, titulo) {
        if (titulo === void 0) { titulo = ''; }
        sweetalert__WEBPACK_IMPORTED_MODULE_2___default()(titulo, mensaje, 'error');
    };
    MsgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MsgService);
    return MsgService;
}());



/***/ }),

/***/ "./src/app/services/palistas.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/palistas.service.ts ***!
  \**********************************************/
/*! exports provided: PalistasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalistasService", function() { return PalistasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util.service */ "./src/app/services/util.service.ts");







var PalistasService = /** @class */ (function () {
    function PalistasService(afs, authService, util) {
        this.afs = afs;
        this.authService = authService;
        this.util = util;
        this.usuario = this.authService.getUser();
    }
    PalistasService.prototype.getRecords$ = function (club) {
        if (club === void 0) { club = ''; }
        return this.usuario.rol === 'Competencias' ? this.getRecordsLS$() : this.getRecordsFB$(club);
    };
    PalistasService.prototype.getRecordsLS$ = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(JSON.parse(localStorage.getItem('palistas')));
    };
    PalistasService.prototype.getRecordsFB$ = function (club) {
        if (club === void 0) { club = ''; }
        if (club) {
            this.collection = this.afs.collection('palistas', function (ref) { return ref.where('club', '==', club); });
        }
        else {
            this.collection = this.afs.collection('palistas');
        }
        return this.palistas = this.collection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    PalistasService.prototype.getRecord$ = function (id) {
        return this.afs.doc("palistas/" + id).valueChanges();
    };
    PalistasService.prototype.addRecord$ = function (registro) {
        registro.palista = registro.nombre.trim() + ' ' + registro.apellido.trim();
        return this.usuario.rol === 'Competencias' ? this.addRecordLS$(registro) : this.addRecordFB$(registro);
    };
    PalistasService.prototype.addRecordLS$ = function (registro) {
        var tabla = JSON.parse(localStorage.getItem('palistas'));
        registro.id = this.util.generarID();
        tabla.push(registro);
        localStorage.setItem('palistas', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(tabla);
    };
    PalistasService.prototype.addRecordFB$ = function (registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.collection.add(registro));
    };
    PalistasService.prototype.updateRecord$ = function (id, registro) {
        registro.palista = registro.nombre.trim() + ' ' + registro.apellido.trim();
        return this.usuario.rol === 'Competencias' ? this.updateRecordLS$(id, registro) : this.updateRecordFB$(id, registro);
    };
    PalistasService.prototype.updateRecordLS$ = function (id, registro) {
        registro.id = id;
        var tabla = JSON.parse(localStorage.getItem('palistas'));
        tabla.splice(tabla.findIndex(function (element) { return element.id === id; }), 1, registro);
        localStorage.setItem('palistas', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(registro);
    };
    PalistasService.prototype.updateRecordFB$ = function (id, registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("palistas/" + id).update(registro));
    };
    PalistasService.prototype.deleteRecord$ = function (id) {
        return this.usuario.rol === 'Competencias' ? this.deleteRecordLS$(id) : this.deleteRecordFB$(id);
    };
    PalistasService.prototype.deleteRecordLS$ = function (id) {
        var tabla = JSON.parse(localStorage.getItem('palistas'));
        tabla.splice(tabla.findIndex(function (element) { return element.id === id; }), 1);
        localStorage.setItem('palistas', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(tabla);
    };
    PalistasService.prototype.deleteRecordFB$ = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("palistas/" + id).delete());
    };
    PalistasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])
    ], PalistasService);
    return PalistasService;
}());



/***/ }),

/***/ "./src/app/services/puntuacion.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/puntuacion.service.ts ***!
  \************************************************/
/*! exports provided: PuntuacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntuacionService", function() { return PuntuacionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PuntuacionService = /** @class */ (function () {
    function PuntuacionService() {
        this.puntuaciones = [
            {
                categorias: ['Pre infantiles', 'Infantiles', 'Menores A', 'Menores B'],
                puntos: [16, 13, 10, 8, 6, 4, 3, 2],
                default: 1
            },
            {
                categorias: ['Cadetes', 'Juniors', 'Seniors', 'Masters'],
                puntos: [15, 12, 9, 7, 5, 3, 1],
                default: 0
            },
        ];
    }
    PuntuacionService.prototype.getPuntuacion = function (categoria, posicion) {
        categoria = categoria.includes('Masters') ? 'Masters' : categoria;
        var puntuacion = this.puntuaciones.find(function (elemento) { return elemento.categorias.includes(categoria); });
        var puntos = puntuacion.puntos[posicion - 1] || puntuacion.default;
        return puntos;
    };
    PuntuacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PuntuacionService);
    return PuntuacionService;
}());



/***/ }),

/***/ "./src/app/services/series.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/series.service.ts ***!
  \********************************************/
/*! exports provided: SeriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesService", function() { return SeriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util.service */ "./src/app/services/util.service.ts");







var SeriesService = /** @class */ (function () {
    function SeriesService(afs, authService, util) {
        this.afs = afs;
        this.authService = authService;
        this.util = util;
        this.usuario = this.authService.getUser();
    }
    SeriesService.prototype.nombreDetalle = function (tipoCarrera) {
        return tipoCarrera === 'series' ? 'detalleSeries' :
            tipoCarrera === 'semis' ? 'detalleSemis' : 'detalleFinales';
    };
    SeriesService.prototype.limpiarCarreras = function () {
        localStorage.setItem('series', JSON.stringify([]));
        localStorage.setItem('detalleSeries', JSON.stringify([]));
        localStorage.setItem('semis', JSON.stringify([]));
        localStorage.setItem('detalleSemis', JSON.stringify([]));
        localStorage.setItem('finales', JSON.stringify([]));
        localStorage.setItem('detalleFinales', JSON.stringify([]));
    };
    /* Métodos para Editar series con Drag and Drop */
    SeriesService.prototype.getSerie = function (id) {
        var tabla = JSON.parse(localStorage.getItem('series'));
        return tabla.find(function (elemento) { return elemento.id === id; });
    };
    SeriesService.prototype.updateSerie = function (id, registro) {
        registro.id = id;
        var tabla = JSON.parse(localStorage.getItem('series'));
        tabla.splice(tabla.findIndex(function (element) { return element.id === id; }), 1, registro);
        localStorage.setItem('series', JSON.stringify(tabla));
    };
    SeriesService.prototype.getSeries = function () {
        return JSON.parse(localStorage.getItem('series'));
    };
    SeriesService.prototype.getDetalleSerie = function (id) {
        var series = JSON.parse(localStorage.getItem('detalleSeries'));
        var serie = series.filter(function (elemento) { return elemento.idSerie === id; });
        return serie;
    };
    SeriesService.prototype.updateDetalleSeries = function (id, tabla) {
        var series = JSON.parse(localStorage.getItem('detalleSeries'));
        if (!series) {
            series = [];
        }
        var filtro = series.filter(function (elemento) { return elemento.idSerie !== id; });
        localStorage.setItem('detalleSeries', JSON.stringify(tabla.concat(filtro)));
    };
    /* Semifinales y finales */
    SeriesService.prototype.getCarrera = function (tipoCarrera, id) {
        var tabla = JSON.parse(localStorage.getItem(tipoCarrera));
        return tabla.find(function (elemento) { return elemento.id === id; });
    };
    SeriesService.prototype.getCarreras = function (tipo) {
        return JSON.parse(localStorage.getItem(tipo));
    };
    SeriesService.prototype.getDetalleCarrera = function (tipoCarrera, id) {
        var palistas = JSON.parse(localStorage.getItem(this.nombreDetalle(tipoCarrera)));
        return palistas.filter(function (elemento) { return elemento.idSerie === id; });
    };
    SeriesService.prototype.updateCarrera = function (tipoCarrera, id, registro) {
        var tabla = JSON.parse(localStorage.getItem(tipoCarrera));
        tabla.splice(tabla.findIndex(function (element) { return element.id === id; }), 1, registro);
        localStorage.setItem(tipoCarrera, JSON.stringify(tabla));
    };
    SeriesService.prototype.updateDetalleCarrera = function (tipoCarrera, id, tabla) {
        var detalle = this.nombreDetalle(tipoCarrera);
        var series = JSON.parse(localStorage.getItem(detalle)).
            filter(function (elemento) { return elemento.idSerie !== id; });
        localStorage.setItem(detalle, JSON.stringify(series.concat(tabla)));
    };
    /* **********   */
    SeriesService.prototype.getSemis = function () {
        return JSON.parse(localStorage.getItem('semis'));
    };
    SeriesService.prototype.addAllSemifinales = function (tabla) {
        localStorage.setItem('semis', JSON.stringify(tabla));
    };
    SeriesService.prototype.updateDetalleSemis = function (id, tabla) {
        var series = JSON.parse(localStorage.getItem('detalleSemis'));
        if (!series) {
            series = [];
        }
        var filtro = series.filter(function (elemento) { return elemento.idSerie !== id; });
        localStorage.setItem('detalleSemis', JSON.stringify(tabla.concat(filtro)));
    };
    SeriesService.prototype.getFinales = function () {
        return JSON.parse(localStorage.getItem('finales'));
    };
    SeriesService.prototype.addAllFinales = function (tabla) {
        localStorage.setItem('finales', JSON.stringify(tabla));
    };
    SeriesService.prototype.updateDetalleFinales = function (id, tabla) {
        var series = JSON.parse(localStorage.getItem('detalleFinales'));
        if (!series) {
            series = [];
        }
        var filtro = series.filter(function (elemento) { return elemento.idSerie !== id; });
        localStorage.setItem('detalleFinales', JSON.stringify(tabla.concat(filtro)));
    };
    SeriesService.prototype.addAllGrupoSeries = function (tabla) {
        localStorage.setItem('grupoSeries', JSON.stringify(tabla));
    };
    SeriesService.prototype.getGrupoSerie = function (categoria, genero, distancia) {
        var grupoSeries = JSON.parse(localStorage.getItem('grupoSeries'));
        return grupoSeries.find(function (el) { return el.categoria === categoria && el.genero === genero && el.distancia === distancia; });
    };
    /* */
    SeriesService.prototype.getRecords$ = function () {
        return this.usuario.rol === 'Competencias' ? this.getRecordsLS$() : this.getRecordsFB$();
    };
    SeriesService.prototype.getRecordsLS$ = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(JSON.parse(localStorage.getItem('series')));
    };
    SeriesService.prototype.getRecordsFB$ = function () {
        this.collection = this.afs.collection('series');
        return this.collection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    SeriesService.prototype.getRecord$ = function (id) {
        var tabla = JSON.parse(localStorage.getItem('series'));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(tabla.find(function (elemento) { return elemento.id === id; }));
    };
    SeriesService.prototype.addRecord$ = function (registro) {
        return this.usuario.rol === 'Competencias' ? this.addRecordLS$(registro) : this.addRecordFB$(registro);
    };
    SeriesService.prototype.addRecordLS$ = function (registro) {
        var tabla = JSON.parse(localStorage.getItem('series'));
        registro.id = this.util.generarID();
        tabla.push(registro);
        localStorage.setItem('series', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(tabla);
    };
    SeriesService.prototype.addRecordFB$ = function (registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.collection.add(registro));
    };
    SeriesService.prototype.updateRecord$ = function (id, registro) {
        return this.usuario.rol === 'Competencias' ? this.updateRecordLS$(id, registro) : this.updateRecordFB$(id, registro);
    };
    SeriesService.prototype.updateRecordLS$ = function (id, registro) {
        registro.id = id;
        var tabla = JSON.parse(localStorage.getItem('series'));
        tabla.splice(tabla.findIndex(function (element) { return element.id === id; }), 1, registro);
        localStorage.setItem('series', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(registro);
    };
    SeriesService.prototype.updateRecordFB$ = function (id, registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("palistas/" + id).update(registro));
    };
    SeriesService.prototype.deleteRecord$ = function (id) {
        return this.usuario.rol === 'Competencias' ? this.deleteRecordLS$(id) : this.deleteRecordFB$(id);
    };
    SeriesService.prototype.deleteRecordLS$ = function (id) {
        var tabla = JSON.parse(localStorage.getItem('series'));
        tabla.splice(tabla.findIndex(function (element) { return element.id === id; }), 1);
        localStorage.setItem('series', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(tabla);
    };
    SeriesService.prototype.deleteRecordFB$ = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc("palistas/" + id).delete());
    };
    SeriesService.prototype.addSeriesLS$ = function (tabla) {
        localStorage.setItem('series', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(tabla);
    };
    SeriesService.prototype.addDetalleSeriesLS$ = function (tabla) {
        localStorage.setItem('detalleSeries', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(tabla);
    };
    SeriesService.prototype.updateDetalleSeriesLS$ = function (id, tabla) {
        var series = JSON.parse(localStorage.getItem('detalleSeries')).
            filter(function (elemento) { return elemento.idSerie !== id; });
        localStorage.setItem('detalleSeries', JSON.stringify(series.concat(tabla)));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(tabla);
    };
    SeriesService.prototype.getDetalleSerieLS$ = function (id) {
        var series = JSON.parse(localStorage.getItem('detalleSeries'));
        var serie = series.filter(function (elemento) { return elemento.idSerie === id; });
        console.log("TCL: SeriesService -> serie", serie);
        serie = serie.sort(function (a, b) { return parseInt(a.numero) - parseInt(b.numero) < 0 ? -1 : 0; });
        console.log("TCL: SeriesService -> serie", serie);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(serie);
    };
    SeriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])
    ], SeriesService);
    return SeriesService;
}());



/***/ }),

/***/ "./src/app/services/spinner.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/spinner.service.ts ***!
  \*********************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SpinnerService.prototype.on = function () {
        this.subject.next(true);
    };
    SpinnerService.prototype.off = function () {
        this.subject.next(false);
    };
    SpinnerService.prototype.getSpinner = function () {
        return this.subject.asObservable();
    };
    SpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerService);
    return SpinnerService;
}());



/***/ }),

/***/ "./src/app/services/usuarios.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UsuariosService = /** @class */ (function () {
    function UsuariosService(afs, afAuth) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.collection = this.afs.collection("users", function (ref) { return ref.orderBy('name'); });
    }
    UsuariosService.prototype.getRecords$ = function () {
        return this.collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.uid = action.payload.doc.id;
                return data;
            });
        }));
    };
    UsuariosService.prototype.getRecord$ = function (id) {
        return this.afs.doc("users/" + id).valueChanges();
    };
    UsuariosService.prototype.getUsuarioByEmail$ = function (email) {
        return this.afs.collection("users", function (ref) { return ref.where('email', '==', email); }).valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["flatMap"])(function (data) { return data; }));
    };
    UsuariosService.prototype.addRecord$ = function (registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.collection.add(registro));
    };
    UsuariosService.prototype.updateRecord$ = function (id, registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.afs.doc("users/" + id).update(registro));
    };
    UsuariosService.prototype.deleteRecord$ = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.afs.doc("users/" + id).delete());
    };
    UsuariosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], UsuariosService);
    return UsuariosService;
}());



/***/ }),

/***/ "./src/app/services/util.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    UtilService.prototype.showDate = function (strFecha) {
        var fecha = new Date(strFecha + 'T00:00:00');
        var dia = fecha.getDate().toString().padStart(2, '0');
        var mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
        return dia + '/' + mes + '/' + fecha.getFullYear();
    };
    UtilService.prototype.generarID = function () {
        var fecha = new Date();
        var año = fecha.getFullYear().toString().padStart(4, '0');
        var mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
        var dia = fecha.getDate().toString().padStart(2, '0');
        var hora = fecha.getHours().toString().padStart(2, '0');
        var minutos = fecha.getMinutes().toString().padStart(2, '0');
        var segundos = fecha.getSeconds().toString().padStart(2, '0');
        var ms = fecha.getMilliseconds().toString().padStart(1, '0');
        return 'local' + año + mes + dia + hora + minutos + segundos + ms;
    };
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/app/validators/genero-validator.ts":
/*!************************************************!*\
  !*** ./src/app/validators/genero-validator.ts ***!
  \************************************************/
/*! exports provided: generoValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generoValidator", function() { return generoValidator; });
function generoValidator(control) {
    var valid = control.value === 'Masculino' ||
        control.value === 'Femenino' ||
        control.value === 'Masculino y Femenino';
    return valid ? null : { invalidGenero: { valid: false, value: control.value } };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    competencia: false,
    firebaseConfig: {
        apiKey: "AIzaSyDbLNWzHhl1dUWFohXzkv1U7ymzgAZgy68",
        authDomain: "fobokac-01.firebaseapp.com",
        databaseURL: "https://fobokac-01.firebaseio.com",
        projectId: "fobokac-01",
        storageBucket: "fobokac-01.appspot.com",
        messagingSenderId: "1019734820364"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Proyectos\febokac\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map