angular.module('conFusion.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $localStorage) {

    $scope.loginData = $localStorage.getObject('userinfo', '{}');

    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    $scope.login = function () {
        $scope.modal.show();
    };

    $scope.doLogin = function () {

        console.log('Doing login', $scope.loginData);
        $localStorage.storeObject('userinfo', $scope.loginData);

        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };

    $ionicModal.fromTemplateUrl('templates/reserve.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.reserveform = modal;
    });

    $scope.closeReserve = function () {
        $scope.reserveform.hide();
    };

    $scope.reserve = function () {
        $scope.reserveform.show();
    };

    $scope.doReserve = function () {
        console.log('Doing reservation', $scope.reservation);

        $timeout(function () {
            $scope.closeReserve();
        }, 1000);
    };

})

.controller('MenuController', ['$scope', 'baseURL', '$ionicListDelegate', 'dishes',
    function ($scope, baseURL, $ionicListDelegate, dishes) {

        $scope.tab = 1;
        $scope.filtText = '';
        $scope.showDetails = false;
        $scope.showMenu = false;
        $scope.message = "Loading ...";
        $scope.baseURL = baseURL;

        $scope.dishes = dishes;
        $scope.showMenu = true;

        $scope.select = function (setTab) {
            $scope.tab = setTab;

            if (setTab === 2) {
                $scope.filtText = "appetizer";
            } else if (setTab === 3) {
                $scope.filtText = "mains";
            } else if (setTab === 4) {
                $scope.filtText = "dessert";
            } else {
                $scope.filtText = "";
            }
        };

        $scope.isSelected = function (checkTab) {
            return ($scope.tab === checkTab);
        };

        $scope.toggleDetails = function () {
            $scope.showDetails = !$scope.showDetails;
        };

        $scope.addFavorite = function (index) {
            console.log("index is " + index);
            favoriteFactory.addToFavorites(index);
            $ionicListDelegate.closeOptionButtons();
        };

    }
])

.controller('ContactController', ['$scope', function ($scope) {

    $scope.feedback = {
        mychannel: "",
        firstName: "",
        lastName: "",
        agree: false,
        email: ""
    };

    var channels = [{
        value: "tel",
        label: "Tel."
    }, {
        value: "Email",
        label: "Email"
    }];

    $scope.channels = channels;
    $scope.invalidChannelSelection = false;

}])

.controller('FeedbackController', ['$scope', 'feedbackFactory',
    function ($scope, feedbackFactory) {

        $scope.sendFeedback = function () {

            console.log($scope.feedback);

            if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            } else {
                $scope.invalidChannelSelection = false;
                feedbackFactory.save($scope.feedback);
                $scope.feedback = {
                    mychannel: "",
                    firstName: "",
                    lastName: "",
                    agree: false,
                    email: ""
                };
                $scope.feedback.mychannel = "";
                $scope.feedbackForm.$setPristine();
            }
        };
    }
])

.controller('DishDetailController', ['$scope', '$stateParams', 'dish', 'menuFactory', 'favoriteFactory', 'baseURL', '$ionicPopover', '$ionicModal',
    function ($scope, $stateParams, dish, menuFactory, favoriteFactory, baseURL, $ionicPopover, $ionicModal) {

        $scope.baseURL = baseURL;

        $scope.dish = dish || {};

        $ionicPopover.fromTemplateUrl('templates/dish-detail-popover.html', {
            scope: $scope
        }).then(function (popover) {
            $scope.popover = popover;
        });

        $scope.addToFavorites = function () {
            favoriteFactory.addToFavorites($scope.dish);
            $scope.popover.hide();
        };

        $scope.openPopover = function ($event) {
            $scope.popover.show($event);
        };

        $ionicModal.fromTemplateUrl('templates/comment.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.mycomment = {
            rating: "5",
            comment: "",
            author: "",
            date: ""
        };

        $scope.openCommentModal = function () {
            $scope.popover.hide();
            $scope.modal.show();
        };

        $scope.closeCommentModal = function () {
            $scope.modal.hide();
        };

        $scope.submitComment = function () {

            $scope.mycomment.date = new Date().toISOString();

            $scope.dish.comments.push($scope.mycomment);

            menuFactory.update({
                id: $scope.dish.id
            }, $scope.dish);

            // $scope.commentForm.$setPristine();

            $scope.mycomment = {
                rating: "5",
                comment: "",
                author: "",
                date: ""
            };

            $scope.modal.hide();
        };

    }
])

// implement the IndexController and About Controller here

.controller('IndexController', ['$scope', 'dish', 'promotion', 'corporate', 'baseURL', function ($scope, dish, promotion, corporate, baseURL) {

    $scope.baseURL = baseURL;
    $scope.leader = corporate;

    $scope.showDish = false;
    $scope.message = "Loading ...";

    $scope.dish = dish;

    if ($scope.dish) {
        $scope.showDish = true;
    }

    $scope.promotion = promotion;

}])

.controller('AboutController', ['$scope', 'corporate', 'baseURL', function ($scope, corporate, baseURL) {
    $scope.baseURL = baseURL;
    $scope.leaders = corporate;
}])

.controller('FavoritesController', ['$scope', 'dishes', 'favorites', 'favoriteFactory', 'baseURL', '$ionicListDelegate', '$ionicPopup', '$ionicLoading', '$timeout',
    function ($scope, dishes, favorites, favoriteFactory, baseURL, $ionicListDelegate, $ionicPopup, $ionicLoading, $timeout) {

        $scope.baseURL = baseURL;
        $scope.shouldShowDelete = false;

        $scope.favorites = favorites;

        $scope.dishes = dishes;

        $scope.toggleDelete = function () {
            $scope.shouldShowDelete = !$scope.shouldShowDelete;
            console.log($scope.shouldShowDelete);
        };
        $scope.deleteFavorite = function (index) {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Confirm Delete',
                templates: 'Are you sure you want to delete this item?'
            });

            confirmPopup.then(function (res) {
                if (res) {
                    console.log('Ok to delete');
                    favoriteFactory.deleteFromFavorites(index);
                } else {
                    console.log('Canceled delete');
                }
            });

            $scope.shouldShowDelete = false;
        };
    }
])

.filter('favoriteFilter', function () {
    return function (dishes, favorites) {
        var out = [];
        for (var i = 0; i < favorites.length; i++) {
            for (var j = 0; j < dishes.length; j++) {
                if (dishes[j].id === favorites[i].id)
                    out.push(dishes[j]);
            }
        }
        return out;

    };
})

;