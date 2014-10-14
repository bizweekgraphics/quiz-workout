var chartBeatModule;

$(document).ready(function() {
  var comscoreConfig = {
    site: "businessweek",
    author: "Maridel Reyes",
    ctype: "graphic",
    cg1: "Lifestyle",
    name: "Apps of steel",
    pubDate: "20141016"
  }

  var urlHash = window.location.hash

  var comscore = Comscore(comscoreConfig)
  comscore.track(urlHash)
  comscore.trackPageview()

  var _sf_async_config= {uid: 15087, domain: "www.businessweek.com"};
  _sf_async_config.useCanonical = true;

  _sf_async_config.sections = "Lifestyle";
  _sf_async_config.authors = "Maridel Reyes";


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
    var textString = "The latest exercise downloads are quick, effective, private, and cheaper than Spinning. Take this quiz to find your next virtual workout"
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
    var textString = "The latest exercise downloads are quick, effective, private, and cheaper than Spinning. Take this quiz to find your next virtual workout"
    var text = encodeURIComponent(textString)
    var width  = 550,
        height = 420,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        articleUrl = encodeURIComponent("http://businessweek.com"),
        // url    = $(this).attr('href') + text + "&url=" + articleUrl
        url = "http://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(document.URL)
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
    var textString = "The latest exercise downloads are quick, effective, private, and cheaper than Spinning. Take this quiz to find your next virtual workout"
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

})

function loaded () {

  var quiz = [
    {
        "id": 0,
        "question": "How much time do you have to exercise today?",
        "choices": [
            {
                "button": "None at all",
                "outcome": "one-minute"
            },
            {
                "button": "15 minutes?",
                "next": 1
            },
            {
                "button": "An hour",
                "next": 4
            }
        ]
    },
    {
        "id": 1,
        "question": "Intense?",
        "choices": [
            {
                "button": "Nah, not really",
                "next": 2
            },
            {
                "button": "Punish me",
                "next": 3
            }
        ]
    },
    {
        "id": 2,
        "question": "Which body parts are you obsessed with?",
        "choices": [
            {
                "button": "Abs",
                "outcome": "runtastic"
            },
            {
                "button": "Not abs",
                "outcome": "barre3"
            }
        ]
    },
    {
        "id": 3,
        "question": "Are you susceptible to cults and/or brainwashing?",
        "choices": [
            {
                "button": "Definitely not",
                "outcome": "johnson"
            },
            {
                "button": "Guilty",
                "outcome": "wod"
            }
        ]
    },

    {
        "id": 4,
        "question": "Where do you usually train?",
        "choices": [
            {
                "button": "Outside, please",
                "outcome": "map"
            },
            {
                "button": "I’m a total gym rat",
                "outcome": "strengthcalc"
            },
            {
                "button": "At home, hotel room, etc.",
                "next": 5
            }
        ]
    },
    {
        "id": 5,
        "question": "How do you expect fitness to make you feel?",
        "choices": [
            {
                "button": "Energized!",
                "outcome": "nike"
            },
            {
                "button": "Relaxed!",
                "outcome": "yoga"
            },
            {
                "button": "Like death!",
                "outcome": "wod"
            }
        ]
    }
  ];

  var outcomes = [
    {
      "id": "map",
      "name": "Map My Fitness",
      "description": "Track your running, hiking, and cycling according to pace, distance, calories burned, and more. You can also design or pick a pre-planned interactive route for pretty much any outdoor activity using your smartphone’s GPS, then map the path in real time. The app syncs up well with Fitbit, Nike+, and other workout gadgets.",
      "price": "Free",
      "ios": "http://itunes.apple.com/us/app/imapmyfitness/id298903147?mt=8",
      "android": "https://play.google.com/store/apps/details?id=com.mapmyfitness.android2&feature=nav_result#?t=W251bGwsMSwyLDNd",
      "url": "http://www.mapmyfitness.com/"
    },
    {
      "id": "strengthcalc",
      "name": "StrengthCalc",
      "description": "Don’t want to fumble with math in the weight room? This calculates how many reps you must lift to add, say, a pound of muscle mass. Choose from beginner, intermediate, and advanced sequences if you want to become a better bodybuilder; there are modes for achieving personal goals and others that train for weightlifting competitions. Then just plug in your lift numbers, weight, and age to monitor strength progression.",
      "price": "99¢",
      "ios": "https://itunes.apple.com/us/app/strengthcalc/id825874832?mt=8",
      "android": false,
      "url": false
    },
    {
      "id": "johnson",
      "name": "Johnson & Johnson Official 7 Minute Workout",
      "description": "The exercise physiologist behind a high-intensity interval-training sequence that went viral in 2013 developed this app. Cycle through 12 simple, 30-second moves such as jumping jacks and tricep dips, with a 10-second break between each, using nearby walls, chairs, and floors.",
      "price": "Free",
      "ios": "https://itunes.apple.com/us/app/johnson-johnson-official-7/id784797900?ls=1&mt=8",
      "android": "https://play.google.com/store/apps/details?id=com.jnj.sevenminuteworkout",
      "url": "https://7minuteworkout.jnj.com/"
    },
    {
      "id": "one-minute",
      "name": "1-Minute Desk Workout",
      "description": "This back-to-basics plan counts down 60 seconds of simple stretches that you can do discreetly anywhere. (Hand squeezes and foot flexes are good in meetings.) A clever “secret” mode allows you to easily minimize the screen in case your boss swings by.",
      "price": "Free",
      "ios": "https://itunes.apple.com/us/app/1-minute-desk-workout/id697738415?mt=8",
      "android": false,
      "url": false
    },
    {
      "id": "wod",
      "name": "Custom WOD",
      "description": "Create a CrossFit-like workout outside those grunt-filled garages by inputting the equipment you have available (e.g., dumbbells and jump rope) and your space (pool, office wall, etc.). Out comes a Paleo-friendly directive that takes 10 minutes.",
      "price": "Free",
      "ios": "https://itunes.apple.com/us/app/custom-wod/id703495173?mt=8",
      "android": false,
      "url": false
    },
    {
      "id": "nike",
      "name": "Nike Training Club",
      "description": "Choose from 100 full-body videos in 15-, 30-, or 45-minute increments (some with Nike-sponsored athletes like Maria Sharapova and Serena Williams) or select a targeted four-week schedule, such as Get Lean or Get Strong. Most of these include videos, or you can stream music through the app from your own library during workouts. Link it with Nike+ to measure progress.",
      "price": "Free",
      "ios": "https://itunes.apple.com/us/app/nike-training-club/id301521403?mt=8",
      "android": "https://play.google.com/store/apps/details?id=com.nike.ntc&hl=en",
      "url": "http://www.nike.com/us/en_us/c/womens-training/apps/nike-training-club"
    },
    {
      "id": "runtastic",
      "name": "Runtastic Six Pack Abs",
      "description": "Lifelike avatars in short HD videos take you through mat routines that become progressively harder as weeks pass. The sorta-creepy guide helps you check your form and shames you into sticking to the training plan. The app also offers 99¢ playlists that keep you moving with dance remixes of top-40 hits.",
      "price": "Free",
      "ios": "https://itunes.apple.com/app/id685857245?mt=8&ign-mpt=uo%3D4",
      "android": "https://play.google.com/store/apps/details?id=com.runtastic.android.sixpack.lite",
      "url": "https://www.runtastic.com/sixpack"
    },
    {
      "id": "barre3",
      "name": "barre3",
      "description": "The low-impact, ballet barre-style videos last only 10 minutes, but they get muscles quaking. All you need is waist-level support such as a chair or desk to perform graceful moves. Healthy recipes and mindfulness podcasts are included.",
      "price": "$4.99",
      "ios": "https://itunes.apple.com/us/app/barre3/id709892299?mt=8",
      "android": false,
      "url": "http://www.barre3.com/mobile-app/"
    },
    {
      "id": "yoga",
      "name": "Track Yoga",
      "description": "These Hatha-style sessions for beginner to intermediate users are organized by theme—stress relief, bedtime, energy, balance, and more. Download a video class, choose specific postures, or create a structured program that helps you reach particular goals such as improving flexibility or toning muscles.",
      "price": "Free",
      "ios": "https://itunes.apple.com/us/app/track-yoga-yoga-for-flexibility/id878893635?mt=8",
      "android": false,
      "url": false
    }
  ];

  $("body").append(_.template($("#introTemplate").html()));

  var template = $("#quizTemplate").html();
  _.each(quiz, function(q, i) {
    $("body").append(_.template(template, {"q": q, "i": i}));
  });

  var outcomeTemplate = $("#outcomeTemplate").html();
  _.each(outcomes, function(outcome, i) {
    $("body").append(_.template(outcomeTemplate, {"outcome": outcome, "i": i}));
  });

  $("#start").click(function(e) {
    var button = $(e.target);

    ga('send', 'event', 'start-button', 'click', "start-click")

    $('.slide.question[data-slideindex="0"]').show();

    $('html, body').animate({
       scrollTop: $(document).height()-$(window).height()},
       750,
       "swing"
    );
  })

  $("button.choice").click(function(e) {
    var button = $(e.target);
    var slide = button.closest(".question");

    // hide any descendant slides
    $(".outcome").hide();
    for(var i = slide.data('slideindex')+1; i < quiz.length; i++) {
      $('[data-slideindex="'+i+'"]').hide();
    }

    // show next slide or outcome
    if(button.data('nextslide')) {
      $('.slide[data-slideindex="'+button.data('nextslide')+'"]').show();
    } else if(button.data('outcome')) {
      ga('send', 'event', 'on-outro', 'click', "quiz-finish")
      $('#outcome-'+button.data('outcome')).show();
    }

    // scroll to bottom of page (to reveal next question)
    $('html, body').animate({
       scrollTop: document.body.scrollHeight},
       800,
       "swing"
    );

  })

}
