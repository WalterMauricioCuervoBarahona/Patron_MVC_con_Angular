'use strict';

module.controller('EstudianteCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    //listar
    $scope.lista = estudiantes;
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    $scope.listaCarrera = carreras;
    $scope.listaMunicipio = municipios;


    $scope.myDate = new Date();
    $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() - 2,
        $scope.myDate.getDate());
    $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 2,
        $scope.myDate.getDate());
    $scope.onlyWeekendsPredicate = function(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    };


    //guardar
    $scope.nuevo = function () {
        $scope.panelEditar = true;
        $scope.datosFormulario = {};
    };

    $scope.guardar = function () {
        var index = $scope.lista.indexOf($scope.datosFormulario);
        if (index === -1) {
            $scope.datosFormulario.id=idEstudiante++;
            $scope.lista.push($scope.datosFormulario);
        }
        $scope.panelEditar = false;
    };
    $scope.cancelar = function () {
        $scope.panelEditar = false;
        $scope.datosFormulario = {};
    };

    //editar
    $scope.editar = function (data) {
        $scope.panelEditar = true;
        $scope.datosFormulario = data;
    };
    //eliminar
    $scope.eliminar = function (data) {
        if (confirm('\xbfDesea elminar este registro?')) {
            var index = $scope.lista.indexOf($scope.datosFormulario);
            if (index > -1) {
                $scope.lista.splice(index, 1);
            }
        }
    };
}]);