import $ from "jQuery";

// jQuery counterUp
(function($) {
  $.fn.countTo = function(options) {
    // merge the default plugin settings with the custom options
    options = $.extend({}, $.fn.countTo.defaults, options || {});

    // how many times to update the value, and how much to increment the value on each update
    var loops = Math.ceil(options.speed / options.refreshInterval),
      increment = (options.to - options.from) / loops;

    return $(this).each(function() {
      var _this = this,
        loopCount = 0,
        value = options.from,
        interval = setInterval(updateTimer, options.refreshInterval);

      function updateTimer() {
        value += increment;
        loopCount++;
        $(_this).html(value.toFixed(options.decimals));

        if (typeof options.onUpdate === "function") {
          options.onUpdate.call(_this, value);
        }

        if (loopCount >= loops) {
          clearInterval(interval);
          value = options.to;

          if (typeof options.onComplete === "function") {
            options.onComplete.call(_this, value);
          }
        }
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 100, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    onUpdate: null, // callback method for every time the element is updated,
    onComplete: null // callback method for when the element finishes updating
  };
})($);

$(function($) {
  $(".calls").countTo({
    from: 1700,
    to: 1991,
    speed: 3000,
    refreshInterval: 50,
    onComplete: function(value) {}
  });
});

$(function($) {
  $(".user").countTo({
    from: 1700,
    to: 5000,
    speed: 3000,
    refreshInterval: 50,
    onComplete: function(value) {}
  });
});

$(function($) {
  $(".downloads").countTo({
    from: 1700,
    to: 10000,
    speed: 3000,
    refreshInterval: 50,
    onComplete: function(value) {}
  });
});

$(function($) {
  $(".mails").countTo({
    from: 1700,
    to: 2390,
    speed: 3000,
    refreshInterval: 50,
    onComplete: function(value) {}
  });
});

$(".list-request-negotiating-loadmore").on("click", function() {
  $(".request-negotiating-item:hidden")
    .slice(0, 3)
    .show();
  if ($(".request-negotiating-item:hidden").length < 1) {
    $("#data").replaceWith("No more items to Show :(");
  }
});

$(document).ready(function() {
  $(".openNav").on("click", function(e) {
    document.getElementById("myNav1").style.width = "100%";
  });

  $(".closebtn").on("click", function(e) {
    document.getElementById("myNav1").style.width = "0%";
  });
  $(".openNav2").on("click", function(e) {
    document.getElementById("myNav2").style.width = "100%";
  });

  $(".closebtn2").on("click", function(e) {
    document.getElementById("myNav2").style.width = "0%";
  });
});

$(".hidearrow").addClass("hidden");

$(".timeline-label").hover(function(e) {
  var $this = $(".hidearrow");

  if ($this.hasClass("hidden")) {
    $this.removeClass("hidden").addClass("visible");
  } else {
    $this.removeClass("visible").addClass("hidden");
  }
});
