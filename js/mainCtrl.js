angular.module("quoteBook").controller("mainCtrl", function($scope, dataService) {

	$scope.getQuotes = function() {
		$scope.quotes = dataService.getQuotes();
	};

	$scope.getQuotes();

	$scope.addQuote = function(quoteObj) {
		dataService.addQuote(quoteObj)
		$scope.newQuote = {};
	};

	$scope.removeQuote = function(textToRemove) {
		dataService.removeQuote(textToRemove);
	};

});