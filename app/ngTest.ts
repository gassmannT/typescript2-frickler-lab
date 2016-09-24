namespace MyCoolApp {
    "use strict";

    angular.module("MyCoolApp", [

    ]);
}


namespace MyCoolApp {
    "use strict";

    export class MyController {
        static $inject: Array<string> = ["$scope"];
        constructor(private $scope: ng.IScope) {}

    }

    angular
        .module("MyCoolApp")
        .controller("MyController", MyController);
}