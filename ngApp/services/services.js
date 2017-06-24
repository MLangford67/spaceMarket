var spaceapp;
(function (spaceapp) {
    var Services;
    (function (Services) {
        var BasicService = (function () {
            function BasicService($resource) {
                this.$resource = $resource;
                this.BasicResource = $resource('/api/basic/:id');
            }
            BasicService.prototype.saveData = function (basic) {
                return this.BasicResource.save(basic).$promise;
            };
            BasicService.prototype.deleteData = function (id) {
                return this.BasicResource.delete({ id: id }).$promise;
            };
            BasicService.prototype.getData = function () {
                return this.BasicResource.query();
            };
            return BasicService;
        }());
        Services.BasicService = BasicService;
        angular.module('spaceapp').service('basicService', BasicService);
    })(Services = spaceapp.Services || (spaceapp.Services = {}));
})(spaceapp || (spaceapp = {}));
