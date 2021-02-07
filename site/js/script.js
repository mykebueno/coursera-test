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
  
  document.addEventListener('scroll', scrollAppear);

  function scrollAppear(){
    var introImg = document.querySelector('.image-intro');
    var introPosition = introImg.getBoundingClientRect().top;
    var screenPosition = window.innerHeight /1.3;

    if(introPosition < screenPosition){
      introImg.classList.add('.img-appear');
    }
  }

  global.$dc = dc;
  
  })(window);

