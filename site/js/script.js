(function (global) {

  var dc = {};
  
  var homeHtml = "snippets/home-snippet.html";
  var menuHtml = "snippets/menu.html";
  
  // Convenience function for inserting innerHTML for 'select'
  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };
  
  // Show loading icon inside element identified by 'selector'.
  var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html += "<img src='images/143.gif'></div>";
    insertHtml(selector, html);
  };
  
  // On page load (before images or CSS)
  document.addEventListener("DOMContentLoaded", function (event) {
  
  // On first load, show home view
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    homeHtml,
    function (responseText) {
      document.querySelector("#main-content")
        .innerHTML = responseText;
    },
    false);
  });

  dc.loadMenu = function(){
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      menuHtml,
      function (responseText) {
        document.querySelector("#main-content")
          .innerHTML = responseText;
      },
      false);
    
  };
  
  window.addEventListener('scroll', scrollAppear);
  window.addEventListener('scroll', scrollAppear2);

  function scrollAppear(){
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
    var delayMl = 500;

    for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    setTimeout(function(){

    }, delayMl);
    
    if ($(tag).position().top < pageBottom) {
    $(tag).addClass("visible");
    } else {
    $(tag).removeClass("visible");
    }
    }
  }
  
  function scrollAppear2(){
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag2");
    
    for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    
    if ($(tag).position().top < pageBottom) {
    $(tag).addClass("visible2");
    } else {
    $(tag).removeClass("visible2");
    }
    }
  }

  global.$dc = dc;
  
  })(window);

