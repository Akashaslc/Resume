angular.module('resumeApp').factory('skills', function() {
  var skills = [{
      name: "Web Development",
      level: "Junior",
      keywords: [
        "HTML",
        "CSS",
        "Javascript",
        "AngularJS",
        "Angular Material",
        "SailsJS",
        "ThreeJS",
        "GsapJS",
        "NodeJS"
      ]
    },
    {
      name: "Mac and iOS",
      level: "Intermediate",
      keywords: [
        "iLife",
        "iWork",
        "Terminal"
      ]
    },
    {
      name: "Development",
      level: "Intermediate",
      keywords: [
        "Arduino",
        "Raspberry Pi",
        "Proccessing"
      ]
    },
    {
      name: "Projection Mapping",
      level: "Intermediate",
      keywords: [
        "VDMX Software",
        "MadMapper",
        "Adobe Creative Suite",
        "Blender 3D Rendering",
        "Sketchup 3D Rendering"
      ]
    }
  ];
  return skills;
});
