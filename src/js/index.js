~function () {
    var app = window.myapp;
    app.controller( 'controller',['$scope',function ($scope) {

    }] );


    app.directive( 'rkListq',[function () {
        return {
            templateUrl:'src/template/rkList.html',
            restrict:'ECA',
            scope:{},
            replace:true,
            link:function ( scope,ele,attr ) {
                app.eleArr.push( ele );
                $( 'footer li:nth-of-type(1)' ).click( rkList ).trigger( 'click' );
                new fz.Scroll('#tab1', {
                    role: 'tab',
                    autoplay: false,
                    interval: 5000
                });
            }
        }
    }] );
    app.directive( 'toListen',[function () {
        console.log( 'toListen' );
        return {
            templateUrl:'src/template/Listen.html',
            restrict:'ECA',
            scope:{},
            replace:true,
            link:function ( scope,ele,attr ) {
                app.eleArr.push( ele );
                $( 'footer li:nth-of-type(2)' ).click( Listen );
            }
        }
    }] );




}();