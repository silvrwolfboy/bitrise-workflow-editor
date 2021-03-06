(function() {
	"use strict";

	angular.module("BitriseWorkflowEditor").service("scrollService", function() {
		var scrollDurationInMilliseconds = 300;

		var scrollService = {};

		scrollService.scrollToTarget = function() {
			var element = $("[scroll-target]").first();

			if (element.length == 0) {
				return;
			}

			var scrollTop = element.offset().top;
			scrollTop -= $("header.sticky").outerHeight();

			var scrollPadding = element.attr("scroll-padding");
			if (scrollPadding !== undefined) {
				scrollTop -= scrollPadding;
			}

			$("html, body").animate(
				{
					scrollTop: scrollTop
				},
				scrollDurationInMilliseconds
			);
		};

		return scrollService;
	});
})();
