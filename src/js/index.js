~function () {
    var app = window.myapp;
    app.controller( 'controller',['$scope',function ($scope) {

    }] )
    .controller( 'rklist',[ '$scope',function ($scope) {
        new fz.Scroll('#tab1', {
            role: 'tab',
            autoplay: false,
            interval: 5000
        });
    } ] )
    .controller( 'tolisten',[ '$scope',function ( $scope ) {
        new fz.Scroll('#tab2', {
            role: 'tab',
            autoplay: false,
            interval: 5000
        });
    } ] )
    .controller( 'found',[ '$scope',function ( $scope ) {
        scroll = new fz.Scroll('#tab3', {
            role: 'tab'
        });
        itcast.iScroll({
            swipeDom:$( '.fd_iconTitle' )[0],
            swipeType:'x',
            swipeDistance:150
        });
    } ] );

    app.config( function ( $routeProvider ) {
        $routeProvider.when( '/rklist',{
            templateUrl:'./src/template/rkList.html',
            controller:'rklist'
        } ).when( '/tolisten',{
            templateUrl:'./src/template/Listen.html',
            controller:'tolisten'
        } ).when( '/tofound',{
            templateUrl:'./src/template/found.html',
            controller:'found'
        } ).when( '/mineSite',{
            templateUrl:'./src/template/mine.html'
        } ).otherwise({
            redirectTo:'/rklist'
        });
    } );

}();