var chartBeatModule;

$(document).ready(function() {
  Waves.displayEffect();

  var comscoreConfig = {
    site: "businessweek",
    author: "Claire Suddath",
    ctype: "graphic",
    cg1: "Lifestyle",
    name: "This is a quiz test",
    pubDate: "20140825"
  }

  var urlHash = window.location.hash

  var comscore = Comscore(comscoreConfig)
  comscore.track(urlHash)
  comscore.trackPageview()

  var _sf_async_config= {uid: 15087, domain: "www.businessweek.com"};
  _sf_async_config.useCanonical = true;
  
  _sf_async_config.sections = "Lifestyle";
  _sf_async_config.authors = "Claire Suddath";
  
  
  (function(){
    function loadChartbeat() {
      window._sf_endpt=(new Date()).getTime();
      var e = document.createElement('script');
      e.setAttribute('language', 'javascript');
      e.setAttribute('type', 'text/javascript');
      e.setAttribute('src',
        (("https:" == document.location.protocol) ? "https://s3.amazonaws.com/" : "http://") + "static.chartbeat.com/js/chartbeat_pub.js");
      document.body.appendChild(e);
    }
    var oldonload = window.onload;
    window.onload = (typeof window.onload != 'function') ? loadChartbeat : function() { oldonload(); loadChartbeat(); };
  })();


  $('.popup-twitter').click(function(event) {
    event.preventDefault()
    var textString = "I just took @BW's Can Women Ever Get Ahead at Work quiz, and you should too."
    var text = encodeURIComponent(textString)
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = $(this).attr('href') + text + "&url=" + document.URL,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

    window.open(url, 'twitter', opts);
    
    return false;
  });

  $('.popup-linkedin').click(function(event) {
    event.preventDefault()
    var textString = "I just took @BW's Can Women Ever Get Ahead at Work quiz, and you should too."
    var text = encodeURIComponent(textString)
    var width  = 550,
        height = 420,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        articleUrl = encodeURIComponent("http://businessweek.com"),
        // url    = $(this).attr('href') + text + "&url=" + articleUrl
        url = "http://www.linkedin.com/shareArticle?summary=I+just+took+Businessweek%27s+Can+Women+Ever+Get+Ahead+at+Work+quiz%2C+and+you+should+too%2E&title=Can+a+Woman+Ever+Win+at+Work%3F&mini=true&url=" + encodeURIComponent(document.URL)
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

                 console.log(url)

    window.open(url, 'linkedin', opts);
    
    return false;
  });  

    $('.popup-facebook').click(function(event) {
    event.preventDefault()
    var textString = "I just took @BW's Can Women Ever Get Ahead at Work quiz, and you should too."
    var text = encodeURIComponent(textString)
    var width  = 550,
        height = 420,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        articleUrl = encodeURIComponent(document.URL),
        url    = $(this).attr('href') + articleUrl
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

        console.log(url)

    window.open(url, 'facebook', opts);
    
    return false;
  });   


    var navigation = responsiveNav(".nav-collapse", {
      animate: true,                    // Boolean: Use CSS3 transitions, true or false
      transition: 284,                  // Integer: Speed of the transition, in milliseconds
      label: "",                    // String: Label for the navigation toggle
      insert: "after",                  // String: Insert the toggle before or after the navigation
      customToggle: "",                 // Selector: Specify the ID of a custom toggle
      closeOnNavClick: false,           // Boolean: Close the navigation when one of the links are clicked
      openPos: "relative",              // String: Position of the opened nav, relative or static
      navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
      navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
      jsClass: "js",                    // String: 'JS enabled' class which is added to <html> element
      init: function(){},               // Function: Init callback
      open: function(){},               // Function: Open callback
      close: function(){}               // Function: Close callback
    });
  // https://www.facebook.com/sharer/sharer.php?u=http://example.com?share=1&cup=blue&bowl=red&spoon=green

  // http://www.linkedin.com/shareArticle?mini=true&url={articleUrl}&title={articleTitle}&summary={articleSummary}&source={articleSource}
  // http://www.linkedin.com/shareArticle?mini=true&url=http%3A//developer.linkedin.com&title=LinkedIn%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn

  // if(window.innerWidth < 895) {
  //   $('#bloomberg').attr('src', 'img/bloomberg-single.png')
  // }
})

function loaded () {

  var quiz = [
    {
        "id": 0,
        "question": "IS YOUR BOSS A MAN?",
        "img": "boss.png",
        "animateIn": "animated bounceInLeft",
        "animateOut": "animated bounceOutLeft",
        "className": "boss",
        "choices": [
            {
                "button": "Yes",
                "text": "Of course. According to a 2013 Gallup poll, 54% of Americans <a target='_blank' href='http://www.gallup.com/poll/165791/americans-prefer-male-boss.aspx' target='_blank'>have a male boss</a>, versus 30% with a female one. Actually, 35% of Americans would rather work for a man, while 40% have no preference either way.",
                "points": 1,
                "next": 1
            },
            {
                "button": "No",
                "text": "Watch out. Female bosses might not help you get ahead. In 2012, MIT studied U.S. bank branches where half the managers were women. They were just as <a target='_blank' href='http://www.projecteve.com/research-says-women-in-leadership-dont-automatically-promote-women-company-wide/'>unlikely to promote underlings</a>.",
                "points": 1,
                "next": 4
            }
        ]
    },
    {
        "id": 1,
        "question": "DOES HE HAVE A WIFE?",
        "img": "rings.png",
        "animateIn": "animated tada",
        "animateOut": "animated bounceOutRight",
        "className": "wife",
        "choices": [
            {
                "button": "Yes",
                "text": "",
                "points": 0,
                "next": 2
            },
            {
                "button": "No",
                "text": "",
                "points": 0,
                "next": 3
            }
        ]
    },
    {
        "id": 2,
        "question": "DOES HIS WIFE WORK?",
        "img": "notebook.png",
        "animateIn": "animated bounceInLeft",
        "animateOut": "animated bounceOutLeft",
        "className": "wife-work",
        "choices": [
            {
                "button": "Yes",
                "text": "Great! In a UNC Kenan Flagler Business School study, male managers married to working women were more likely to <a target='_blank' href='http://asq.sagepub.com/content/59/2/330.full.pdf+html'>recommend female candidates</a> over males for new positions.",
                "points": 1
            },
            {
                "button": "No",
                "text": "Bad news: A UNC Kenan Flagler Business School study showed married men with stay-at-home wives <a target='_blank' href='http://asq.sagepub.com/content/59/2/330.full.pdf+html'>viewed female colleagues unfavorably</a> and had a tendency to pass them over for promotions.",
                "points": -1
            },
            {
                "button": "Not applicable!",
                "text": "OK, carry on...",
                "points": 0
            }
        ]
    },
    {
        "id": 3,
        "question": "DOES HE HAVE A DAUGHTER?",
        "img": "daughter.png",
        "animateIn": "slideDown",
        "animateOut": "animated bounceOutUp",
        "className": "daughter",
        "choices": [
            {
                "button": "Yes",
                "text": "Excellent! If a male CEO has a first child who’s a girl, a female employee’s <a target='_blank' href='http://asq.sagepub.com/content/57/4/669.abstract'>wages will rise</a> by 1.1%. Male employees see a much smaller rise, according to a 2012 issue of Administrative Science Quarterly.",
                "points": 1
            },
            {
                "button": "No",
                "text": "Eek. When CEOs have a son, <a target='_blank' href='http://asq.sagepub.com/content/57/4/669.abstract'>all employees’ wages drop</a>, according to a 2012 issue of Administrative Science Quarterly. Fortunately, it’s less than half a percent.",
                "points": -1
            },
            {
                "button": "Not applicable!",
                "text": "Carry on then.",
                "points": 0
            }
        ]
    },
    {
        "id": 4,
        "question": "ARE YOU BLONDE?",
        "img": "blond.png",
        "animateIn": "animated rollIn",
        "animateOut": "animated rollOut",
        "className": "blond",
        "choices": [
            {
                "button": "Yes",
                "text": "University of Queensland researchers found <a target='_blank' href='http://faculty-course.insead.edu/popescu/UDJCore/XtraMaterial/Physical%20appearance%20and%20wages%20Do%20blondes%20have%20more%20fun.pdf'>blondes make 7% more</a>.",
                "points": 1
            },
            {
                "button": "No",
                "text": "Could you be? University of Queensland researchers found <a target='_blank' href='http://faculty-course.insead.edu/popescu/UDJCore/XtraMaterial/Physical%20appearance%20and%20wages%20Do%20blondes%20have%20more%20fun.pdf'>blondes make 7% more</a>.",
                "points": -1
            }
        ]
    },
    {
        "id": 5,
        "question": "DO YOU FLIRT AT WORK?",
        "img": "kiss.png",
        "animateIn": "animated zoomSmall",
        "animateOut": "animated fadeOut",
        "className": "flirt",
        "choices": [
            {
                "button": "Yes",
                "text": "Go for it. In 2012, Berkeley’s Haas School of Business found that <a target='_blank' href='http://newsroom.haas.berkeley.edu/research-news/study-finds-flirting-can-pay-women-negotiations'>women could flirt</a> their way into higher prices when selling cars to men. In 2009, former Sec. of State Madeline Albright told Bill Maher that she flirted with foreign dignitaries so they’d concur.",
                "points": 1
            },
            {
                "button": "No",
                "text": "Safety first; flirting can backfire. A 2013 Academy of Management brief said that even though big law firms <a target='_blank' href='http://aom.org/News/Press-Releases/Masculine-work-environments-encourage-women-to-flirt-–-but-also-exact-a-stiff-price-for-it,-study-finds.aspx'>encouraged strategic flirtation</a>, the women who tried it were looked down upon, considered stupid, and mistreated.",
                "points": 0
            }
        ]
    },
    {
        "id": 6,
        "question": "DO YOU DRESS UP FOR WORK?",
        "img": "shoe.png",
        "animateIn": "animated swing",
        "animateOut": "animated zoomOutRight",
        "className": "dress",
        "choices": [
            {
                "button": "Yes",
                "text": "Well done. According to Proctor & Gamble-funded psychology research conducted at Harvard U., people think women wearing makeup <a target='_blank' href='http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0025656'>look more competent</a> and professional than those who don’t.",
                "points": 1
            },
            {
                "button": "No",
                "text": "This may be ideal. In a study titled “<a target='_blank' href='http://www.ncbi.nlm.nih.gov/pubmed/21932332'>Intolerance of Sexy Peers</a>,” a McMaster U. researcher discovered women were put off by other women who looked too fancy. 85% preferred a thin blond woman in khakis over the same woman in a short skirt and tall boots.",
                "points": -1
            }
        ]
    },
    {
        "id": 7,
        "question": "HOW’S YOUR WEIGHT?",
        "img": "peek.png",
        "animateIn": "animated bounceInLeft",
        "animateOut": "animated bounceOutLeft",
        "className": "weight",
        "choices": [
            {
                "button": "I'm good",
                "text": "Nice! Many studies have proven <a target='_blank' href='http://www.timothy-judge.com/Judge%20and%20Cable%20(JAP%202010).pdf'>a woman’s weight</a> has a significant effect on her earnings potential. The Journal of Applied Psychology reported in 2010 that even very thin women are punished when they gain a little.",
                "points": 1
            },
            {
                "button": "I could lose a few",
                "text": "Uh oh. There’s a sad scientific correlation: When a woman’s BMI increases, <a target='_blank' href='https://files.nyu.edu/dc66/public/obesity_income_final.pdf'>her income decreases</a>. Her spouse’s does, too. The effect is most profound on younger women without established careers.",
                "points": -1
            }
        ]
    },
    {
        "id": 8,
        "question": "DO YOU HAVE GOOD POSTURE?",
        "img": "boss.png",
        "animateIn": "animated bounceInLeft",
        "animateOut": "animated bounceOutLeft",
        "className": "posture",
        "choices": [
            {
                "button": "Yes",
                "text": "A Harvard Business School study says you’ll <a target='_blank' href='http://202.154.59.182/ejournal/files/Gender%20in%20Job%20Negotiations.pdf'>look more powerful</a>.",
                "points": 1
            },
            {
                "button": "No",
                "text": "Stand up straight. A Harvard Business School study says it will make you <a target='_blank' href='http://202.154.59.182/ejournal/files/Gender%20in%20Job%20Negotiations.pdf'>look more powerful</a>.",
                "points": -1
            }
        ]
    }
];
  var slideCount = quiz.length+2;

  $("body").append(_.template($("#introTemplate").html()));

  var template = $("#quizTemplate").html();
  _.each(quiz, function(q, i) {
    $("body").append(_.template(template, {"q": q, "i": i}));
  });

  $("body").append(_.template($("#outroTemplate").html()));
  $("#outro").attr("data-slideindex", quiz.length);

  $("#start").click(function(e) {
    var button = $(e.target);

    ga('send', 'event', 'start-button', 'click', "start-click")



    $('.slide.question[data-slideindex="0"]').show();

    $('html, body').animate({
       scrollTop: $(document).height()-$(window).height()},
       750,
       "swing"
    );  
    // $('.slide.question[data-slideindex="0"] .img-container').removeClass('hide-img');
    // var animateClass = quiz[0].animateOut
    // var img = button.parent().next().find('img')
    // img.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    //   img.addClass(animateClass)
    // })
  })

  $("button.choice").click(function(e) {
    var button = $(e.target);
    var slide = button.closest(".question");

    var pointDiv = button.parent().find('.point-div')


    pointDiv.css('display', 'block')    

    if(button.data('points') === 1) {
      pointDiv.text('+1 Point')
      pointDiv.css('color', '#0f0')
      pointDiv.data('points', 1)
    } else if (button.data('points') === -1) {
      pointDiv.text('-1 Point')
      pointDiv.css('color', 'red')
      pointDiv.data('points', -1)
    } else {
      pointDiv.text('+0 Points')
      pointDiv.css('color', 'black')
      pointDiv.data('points', 0)
    }

    // show points and text
    // slide.find("button").removeClass("active");
    // button.addClass("active");
    slide.find("p").html(button.data("text"));

    // update point total
    // var answers = $(".choice.active");
    // var pointTotal = answers.toArray().reduce(function(a,b) {
    //   return a + $(b).data("points");
    // }, 0);

    var answers = $('.point-div')

    var pointTotal = answers.toArray().reduce(function(a,b) {
      if($(b).data("points") == undefined) {
        $(b).data("points", 0)
      }
      return a + $(b).data("points");
    }, 0);

    $("#point-total").text(pointTotal);
    $("#point-total-text").text(pointText(pointTotal));

    // progressive reveal (show next slide)
    var nextSlide = button.data("nextslide") ? button.data("nextslide") : slide.data("slideindex")+1;

    if(nextSlide === 9) {
      ga('send', 'event', 'on-outro', 'click', "quiz-finish")
      setTimeout(function() {
        $('.slide[data-slideindex="'+nextSlide+'"]').show(); 
        $('.popup').click(function(event) {
          event.preventDefault()
          var textString = "I just took @BW's Can Women Ever Get Ahead at Work quiz, and you should too."
          var text = textString.split(' ').join('%20')
          var width  = 575,
              height = 400,
              left   = ($(window).width()  - width)  / 2,
              top    = ($(window).height() - height) / 2,
              url    = this.href + text,
              opts   = 'status=1' +
                       ',width='  + width  +
                       ',height=' + height +
                       ',top='    + top    +
                       ',left='   + left;




          window.open(url, 'twitter', opts);
        
          return false;
        });      

        $('html, body').animate({
           scrollTop: document.body.scrollHeight},
           600,
           "swing"
        );
      }, 1500)
    } else {
      $('.slide[data-slideindex="'+nextSlide+'"]').show();
    }

    // scroll to bottom of page (to reveal next question)
    // setTimeout(function() {
      if($('#outro').css('display') === "none"){
        if(window.innerHeight < 600) {
          setTimeout(function() {
            $('html, body').animate({
               scrollTop: document.body.scrollHeight},
               800,
               "swing"
            );      

          }, 1000)          
        } else {
          $('html, body').animate({
             scrollTop: document.body.scrollHeight},
             800,
             "swing"
          );  
        }
      }
    // }, 1000)

    var thisSlide = button.parent().parent().data('slideindex')

      var animateClass = quiz[thisSlide].animateOut
      var imgContainer = $('.slide[data-slideindex="'+(thisSlide)+'"] .img-container')
      $(imgContainer).removeClass('hide-img')
      var img = $('.slide[data-slideindex="'+(thisSlide)+'"] img')
      img.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        img.removeClass()
        img.addClass(animateClass)
      })


  })

  function pointText(points) {
    if(points>5) {
      return "You get a raise!";
    } else if (points >= 0) {
      return "Tread carefully. Oh, and maybe get some highlights.";
    } else {
      return "Have you thought about quitting your job?";
    }
  }


}
