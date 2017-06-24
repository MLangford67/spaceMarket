namespace spaceapp.Services {
    export class BasicService{
      public BasicResource;

      public saveData(basic){
        return this.BasicResource.save(basic).$promise;
      }
      constructor(
        public $resource:ng.resource.IResourceService,
      ){
        this.BasicResource = $resource('/api/basic/:id');
      }
    //  public getDataById(id){
      //  return this.BasicResource.query({id: id});
      //}
      public deleteData(id){
        return this.BasicResource.delete({id: id}).$promise;
      }
      public getData(){
        return this.BasicResource.query();
      }

    }


    angular.module('spaceapp').service('basicService', BasicService);
    }
