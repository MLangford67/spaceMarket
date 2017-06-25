var spaceapp;
(function (spaceapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(basicService, $state, $window) {
                this.basicService = basicService;
                this.$state = $state;
                this.$window = $window;
            }
            HomeController.prototype.removeData = function (id) {
                var _this = this;
                this.basicService.deleteData(id).then(function () {
                    _this.$window.location.reload();
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var BasicController = (function () {
            function BasicController($state, basicService) {
                this.$state = $state;
                this.basicService = basicService;
            }
            BasicController.prototype.createData = function () {
                var _this = this;
                this.basicService.saveData(this.data).then(function () {
                    _this.$state.go('home');
                });
            };
            return BasicController;
        }());
        Controllers.BasicController = BasicController;
        var EditController = (function () {
            function EditController($state, basicService, $stateParams) {
                this.$state = $state;
                this.basicService = basicService;
                this.$stateParams = $stateParams;
                this.id = $stateParams['id'];
            }
            EditController.prototype.editData = function () {
                var _this = this;
                this.basicService.saveData(this.data).then(function () {
                    _this.$state.go('home');
                });
            };
            return EditController;
        }());
        Controllers.EditController = EditController;
        var AboutController = (function () {
            function AboutController() {
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = spaceapp.Controllers || (spaceapp.Controllers = {}));
})(spaceapp || (spaceapp = {}));
