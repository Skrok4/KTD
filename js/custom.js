// JavaScript Document

$(document).ready(function(){
    $('#fil-group-bn .comonfli').click(function(){
      $('.comonfli').removeClass("active-new2");
      $(this).addClass("active-new2");
  });
});
$(document).ready(function() {
    $( window ).scroll(function() {
          var height = $(window).scrollTop();
          if(height >= 100) {
              $('.mn-head').addClass('fixed-menu');
          } else {
              $('.mn-head').removeClass('fixed-menu');
          }
      });
  });
$(document).ready(function(){
    $('.ps-sild').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
		dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1000: {
                items:4
            }
        }
    })
	
	$('.best-sl-m').owlCarousel({
        
		autoplay:true,
        margin:25,
        nav: true,
		dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1000: {
                items:1
            }
        }
    })

  $('.best-sl-m2').owlCarousel({
      
    autoplay:true,
    margin:25,
    loop:true,
    nav: true,
    dots:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            768: {
              items:2
            },
            1000: {
                items:4
            }
        }
    })

	$('.news-slid').owlCarousel({
        
		autoplay:true,
        nav: false,
		margin: 20,
		dots:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            768: {
              items:2
            },
            1000: {
                items:3
            }
        }
    })

    $('.team-slid').owlCarousel({
        
        autoplay:true,
        loop:true,
         nav: true,
        margin: 20,
        dots:false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items:1
                },
                1000: {
                    items:4
                }
            }
    })
});


// price


function getVals(){
	// Get slider values
	let parent = this.parentNode;
	let slides = parent.getElementsByTagName("input");
	  let slide1 = parseFloat( slides[0].value );
	  let slide2 = parseFloat( slides[1].value );
	// Neither slider will clip the other, so make sure we determine which is larger
	if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
	
	let displayElement = parent.getElementsByClassName("rangeValues")[0];
		displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
  }
  
  window.onload = function(){
	// Initialize Sliders
	let sliderSections = document.getElementsByClassName("range-slider");
		for( let x = 0; x < sliderSections.length; x++ ){
		  let sliders = sliderSections[x].getElementsByTagName("input");
		  for( let y = 0; y < sliders.length; y++ ){
			if( sliders[y].type ==="range" ){
			  sliders[y].oninput = getVals;
			  // Manually trigger event first time to display values
			  sliders[y].oninput();
			}
		  }
		}
  }
//-----JS for Price Range slider ends-----


// more bn js 

$(document).ready(function () {
    
   
    $('#more-link').click(function () {
      $('#more-div-text').slideToggle("slow");
	  $('#more-link').hide();
    });

	$('#more-link2').click(function () {
		$('#more-div-text2').slideToggle("slow");
		$('#more-link2').hide();
	  });

	$('#more-link3').click(function () {
		$('#more-div-text3').slideToggle("slow");
		$('#more-link3').hide();
	  });
});


// products list grid js
$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
    $('#list').click(function(event){event.preventDefault();$('#products .item').removeClass('grid-group-item');});
  });
  
$(document).ready(function(){
$('.listed-bn ul li a').click(function(){
    $('.listed-bn li a').removeClass("active");
    $(this).addClass("active");
});
});

// products slide

$(document).ready(function () {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: false,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      
    })
    .on("changed.owl.carousel", syncPosition);

  sync2
    .on("initialized.owl.carousel", function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: slidesPerPage,
      dots: true,
      nav: false,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2.find(".owl-item.active").first().index();
    var end = sync2.find(".owl-item.active").last().index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data("owl.carousel").to(number, 300, true);
  });
});


// make eveything enabled
var enableFormEdit = function(selector){	
	$(selector + ' input, ' + selector + ' select, ' + selector + ' button ').prop('disabled', false);
  $(selector).removeClass('form--disabled').addClass('form--enabled');
}

//  bank js
$(document).ready(function(){
  $("#customRadio1").click(function(){
    $("#ac-2").hide();
  });
  $("#customRadio1").click(function(){
    $("#ac-1").show();
  });
   $("#customRadio2").click(function(){
    $("#ac-1").hide();
  });
  $("#customRadio2").click(function(){
    $("#ac-2").show();
  });
});


// rating js 


$(document).ready(function () {
	$(".star label").click(function(){
	  $(this).parent().find("label").css({"background-color": "#a2be2d"});
	  $(this).css({"background-color": "#a2be2d"});
	  $(this).nextAll().css({"background-color": "#a2be2d"});
	});
	$(".star label").click(function(){
	  $(this).parent().find(".star label").css({"color": "#bbb"});
	  $(this).css({"color": "#a2be2d"});
	  $(this).nextAll().css({"color": "#a2be2d"});
	  $(this).css({"background-color": "transparent"});
	  $(this).nextAll().css({"background-color": "transparent"});
	});
});
// quantity js

// fiter mobile js

jQuery(function($){
    // Filter Function Triggers
    filterTrigger.desktopFilter(".filt-container");
    filterTrigger.mobileFilter("#mobile-filter", ".filt-container");
  });
       
  // FUNCTION FOR ALL FILTERS
  var filterTrigger = {
    desktopFilter: function(container) {
        if( $(container).length > 0 ) {
            var $container = $(container);
            var $filter = $(".filter-list").find("li").first().data("filter");
            
            var mixer = mixitup($container, {
                load: {
                  filter: $filter
                }
            });
            
            $(".filter").on("click", function() {
                if( $("#mobile-filter").length > 0 ) {
                    $("#mobile-filter").val($(this).data("filter"));
                }
            });
        }
    },
    
    mobileFilter: function(filter, container) {
        if( $(filter).length > 0 && $(container).length > 0 ) {
            var $filter = $(filter),
              $container = $(container);
  
            $container.mixItUp();
  
            $filter.on('change', function(){
                $container.mixItUp('filter', this.value);
            });
            
            $(window).resize(function() {
                
            });
        }
    }
  }
  
  
  // filter mobile js ends
  