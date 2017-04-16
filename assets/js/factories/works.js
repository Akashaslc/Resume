angular.module('resumeApp').factory('works', function() {
  var works = [{
      company: "New World Presents",
      position: "Creative Designer",
      website: "http://newworldpresents.com/",
      startDate: "2013-04-13",
      endDate: "Present",
      summary: "New World Presents is a event and production company aimed on bringing transformational events and festivals closer to the Utah area. As Creative Designer, I keep the aesthetic to our City Festivals inline with our vision and integrate interactive elements with in our city events. My responsibilities range from managing and organizing other artists at our festivals to designing and building interactive art installations.",
      highlights: [
        "Developed a New World Presents website to showcase the vibe and events they host.",
        "Designed and built a Main Stage installation where the LED's were controlled by user input from a website. Used SailsJS and NodeJS.",
        "Design and setup projection mapping content for Main Stage."
      ]
    },
    {
      company: "Lunar Transit",
      position: "Developer",
      website: "http://lunartransit.com",
      startDate: "2015-04",
      endDate: "Present",
      summary: "Lunar Transit is New World Present's Flagship festival bringing the vibe of transformational festivals to Utah.",
      highlights: [
        "Developed website to showcase festival and manage logistics.",
        "Designed and built a Main Stage installation where the LED's were controlled by user input from a website. Used SailsJS and NodeJS.",
        "Created an art installation called the Auric Heart to show the users heartbeat pulse through the entire installation."
      ]
    },
    {
      company: "Apple Inc.",
      position: "Operations Specialist",
      website: "https://apple.com",
      startDate: "2011-07-26",
      endDate: "Present",
      summary: "As an Operations Specialist, we managed inventory. Anytime a customer wanted a product, we brought it out to them and congratulated them on their purchase! We also made sure that we met our metrics by keeping accuracy high and shrink low.",
      highlights: []
    }
  ];
  return works;
});
