var myApp = angular.module('resumeApp', ['ngMaterial', 'chart.js']);

window.onload = function() {

  if (window.screen.availWidth > 700) {
    $('#fullpage').fullpage({
      //Navigation
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
      navigation: true,
      navigationPosition: 'top',

      //Scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: true,
      loopTop: false,
      loopHorizontal: true,

      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,

      //Design
      sectionsColor: [],
      controlArrows: true,
      verticalCentered: true,
      paddingTop: '3em',
      paddingBottom: '10px',
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,

    });
  }
};

myApp.controller('resumeCtrl', ['$scope', 'works', 'skills', 'interests', function($scope, works, skills, interests) {

  $scope.works = works;
  $scope.skills = skills;
  $scope.interests = interests;

  $scope.labels = ["HTML", "CSS", "Javascript", "AngularJS", "Angular Material", "SailsJS", "ThreeJS", "GsapJS"];
  $scope.data = [
    [70, 60, 40, 35, 60, 35, 25, 25]
  ];

  $scope.options = {
    responsive: false,
    maintainAspectRatio: false,
    scale: {
      reverse: false,
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100,
        stepSize: 25,
      }
    }
  };

  $scope.info = {
    "basics": {
      "name": "Samir Suthar",
      "label": "Web Developer",
      "picture": "./assets/images/profile.jpg",
      "email": "samir.suthar@me.com",
      "website": "http://samirsuthar.com",
      "summary": "Born and raised in Salt Lake City, Samir started out his development career with a company called New World Presents. Starting out by learning WordPress, Samir quickly moved on to learn SailsJS Framework. He continued to push his own development by learning how to program in C/C++/Python to create interactive art installations using Raspberry Pis and Arduinos.",
      "location": "Salt Lake City",
      "profiles": [{
          "network": "LinkedIn",
          "username": "Samir Suthar",
          "url": "https://www.linkedin.com/in/samir-suthar-461a2261/"
        },
        {
          "network": "GitHub",
          "username": "Akashaslc",
          "url": "https://github.com/Akashaslc"
        }
      ]
    },
    "volunteer": [],
    "education": [{
      "institution": "University of Utah",
      "area": "Mechanical Engineer",
      "studyType": "Unfinished",
      "startDate": "2008",
      "endDate": "2011",
      "gpa": "3.0",
      "courses": [
        "Calculus I-III",
        "Physics I-II"
      ]
    }],
    "awards": [],
    "publications": [],
    "languages": [{
        "language": "English",
        "fluency": "Native speaker"
      },
      {
        "language": "Gujurati",
        "fluency": "2nd Language"
      }
    ],
    "references": []
  };
}]);



myApp.config(['ChartJsProvider', function(ChartJsProvider) {
  // Configure all charts
  ChartJsProvider.setOptions({
    chartColors: ['#3F6209']
  });
  // Configure all line charts
  ChartJsProvider.setOptions('line', {
    showLines: false
  });
}]);
