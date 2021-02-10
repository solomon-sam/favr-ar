var active;
var editorNav;
import {dark_wood} from './assets/texture/dark_wood.js';

window.addEventListener("DOMContentLoaded", function() {
  editorNav = document.getElementById("bottom-editor-nav");
  var canvas = document.getElementById("canvas");
  var engine = new BABYLON.Engine(canvas, true);

  var createScene = function() {
    const scene = new BABYLON.Scene(engine);
    //object placed
    var box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);
    // object placed ends
    // Material
    box.material = dark_wood;
    // Material ends
    //camera secton to be replaces
    const camera = new BABYLON.ArcRotateCamera("arcCamera", BABYLON.Tools.ToRadians(45), BABYLON.Tools.ToRadians(45), 10.0, box.position, scene);
    camera.attachControl(canvas, true);
    //camera ends
    // lighting
    const light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(5, 10, 5), scene);
    light.diffuse = new BABYLON.Color3(1, 1, 1);
    // lighting ends
    // Action Manager
    scene.actionManager = new BABYLON.ActionManager(scene);
    scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({
        trigger: BABYLON.ActionManager.OnKeyUpTrigger,
        parameter: " "
      }, function() {
        light.setEnabled(!light.isEnabled());
      })
    );
    // end Action Manager
    return scene;
  }
  var scene = createScene();
  engine.runRenderLoop(function() {
    scene.render();
  });
});

function menuToggleButton(area) {
  var editorNav = document.getElementById("bottom-editor-nav");
  var buttonHolder = document.getElementById("menu-button-" + area);
  var spanHolder = buttonHolder.getElementsByClassName("menu-button-inner");
  for (var i = 0; i < spanHolder.length; i++) {
    spanHolder[i].classList.toggle("active");
  }
  if (buttonHolder.getElementsByClassName("active").length < 2) {
    if (active !== '') {
      if (active == 'left') {
        document.getElementById('menu-slide-left').style.width = '0vw';
      } else if (active == 'right') {
        document.getElementById('menu-slide-right').style.width = '0vw';
      }
      document.getElementById('content').style.marginLeft = '0vw';
      active = '';
    }
  } else {
    if (area == 'left') {
      document.getElementById('menu-slide-left').style.width = '70vw';
      document.getElementById('menu-slide-right').style.width = '0vw';
      document.getElementById('content').style.marginLeft = '70vw';
    } else if (area == 'right') {
      document.getElementById('menu-slide-right').style.width = '70vw';
      document.getElementById('menu-slide-left').style.width = '0vw';
      document.getElementById('content').style.marginLeft = '-70vw';
    }
    active = area;
  }
  if (editorNav.style.display != "none") {
    editorNav.style.display = "none";
  }
  event.preventDefault();
}
