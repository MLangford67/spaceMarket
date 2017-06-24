namespace spaceapp.Controllers {

    export class HomeController {
      public data;
      public id;

      public removeData(id){
        this.basicService.deleteData(id).then(()=>{
          this.$window.location.reload()
        })
      }
      constructor(
        public basicService,
        public $state,
        public $window
      ){

      }
    }
    export class BasicController{
      public data;
      public id;

      public createData(){
        this.basicService.saveData(this.data).then(()=>{
          this.$state.go('home');
        })
      }
      constructor(
        public $state,
        public basicService
      ){

      }
    }


    export class AboutController {

    }

}
