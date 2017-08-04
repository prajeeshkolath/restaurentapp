var app = angular.module("gst", ["ngRoute", "ngStorage", "gstCommonModule", "gstSharedModule", "gstUMAModule", "gstDashboardModule","gstGSTR1Module"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            redirectTo: "/login"
        })
        .otherwise({
            redirectTo: "/login"
        });
}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push('HTTPRequestHandler');
}]);

app.config(function ($provide) {
    $provide.decorator("$exceptionHandler", function ($delegate, $injector) {
        return function (exception, cause) {
            try {
                var ErrorService = $injector.get("ErrorService");
                if (exception instanceof AuthenticationException) {
                    ErrorService.showLogin();
                    return;
                }
				
                if (exception instanceof AuthorizationException) {
                    ErrorService.showError("Unauthorized", "You are unauthorized to access this module!", 2000);
                    return;
                }
                console.log(exception, cause);
                ErrorService.showError("OOPS", "Something went wrong while processing response!", 2000);
            } catch (e) {
                console.log(exception, cause);
                ErrorService.showError("OOPS", "Something went wrong while processing response!", 2000);
            }
        };
    });
});

