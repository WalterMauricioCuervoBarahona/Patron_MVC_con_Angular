'use strict';

module.controller('MateriaCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        //listar
        $scope.lista = materias;
        $scope.datosFormulario = {};
        $scope.panelEditar = false;
        $scope.listaCarrera = carreras;
        $scope.listaProfesor = profesores;


        //guardar
        $scope.nuevo = function () {
            $scope.panelEditar = true;
            $scope.datosFormulario = {horarios:[]};

        };

        $scope.guardar = function () {
            var index = $scope.lista.indexOf($scope.datosFormulario);
            if (index === -1) {
                $scope.datosFormulario.id=idMateria++;
                $scope.lista.push($scope.datosFormulario);
            }
            $scope.panelEditar = false;
        };
        $scope.cancelar = function () {
            $scope.panelEditar = false;
            $scope.datosFormulario = {};
        };

        //modal
    $scope.CrearHorario = function () {
        $('myModal').modal();
        $scope.datosHorario={};
    };

    //guardar Horario del modal
    $scope.guardarHorario = function () {
        $scope.datosFormulario.horarios.push($scope.datosHorario);
        $('#myModal').modal('hide');
        $scope.datosHorario={};
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