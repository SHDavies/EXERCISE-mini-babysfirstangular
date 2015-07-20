var app = angular.module('friendsList');
app.controller('mainCtrl', function($scope) {
	$scope.friends = ['Holly', 'Joseph', 'Adam', 'Myself'];

	$scope.addFriend = function() {
		$scope.friends.push($scope.friendInput);
		$scope.friendInput = '';
	};
});