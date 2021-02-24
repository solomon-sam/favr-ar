var active;
var editorNav;
var clickedMesh;

var meshUrl = "./assets/";
var meshType = "chair";
var meshList = {
  legsMesh: ["Chair_Leg_1", "Chair_Leg_2", "Chair_Leg_3", "Chair_Leg_4", "Chair_Leg_4"],
  seatMesh: ["Chair_top_1", "Chair_top_2"]
};
var meshTestures = {
  Chair_Leg_1: ["darkWood", "lightWood", "hardWood"],
  Chair_Leg_2: ["darkWood", "lightWood", "hardWood"],
  Chair_Leg_3: ["darkWood", "lightWood", "hardWood"],
  Chair_Leg_4: ["darkWood", "lightWood", "hardWood"],
  Chair_top_1: ["darkWood", "lightWood", "hardWood"],
  Chair_top_2: ["darkWood", "lightWood", "hardWood"]
}

window.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("canvas");
  var engine = new BABYLON.Engine(canvas, true);
  var scene = new BABYLON.Scene(engine);
  editorNav = document.getElementById("bottom-editor-nav");
  const bottomMenu = document.querySelector('#bottom-editor-nav');
  bottomMenu.style.display = "none";

  var darkWood = new BABYLON.NodeMaterial("darkWood", scene);
  var lightWood = new BABYLON.NodeMaterial("lightWood", scene);
  var hardWood = new BABYLON.NodeMaterial("hardWood", scene);
  darkWood.loadAsync(meshUrl + "texture/dark_wood.json");
  lightWood.loadAsync(meshUrl + "texture/light_wood.json");
  hardWood.loadAsync(meshUrl + "texture/hard_wood.json");

  var createScene = function() {
    //camera secton to be replaces
    var camera = new BABYLON.ArcRotateCamera("Camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(90), 5, new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);
    //camera ends
    // lighting
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.diffuse = new BABYLON.Color3(1, 1, 1);

    scene.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData(meshUrl + "skybox/environment.dds", scene);
    scene.clearColor = BABYLON.Color3.White();
    // lighting ends


    //object placed
    for (let value of Object.keys(meshList)) {
      var firstMesh = meshList[value];
      var firstMateial = meshTestures[firstMesh[0]];
      BABYLON.SceneLoader.ImportMesh("", meshUrl + meshType + "/", firstMesh[0] + ".glb", scene, function(meshImport) {
        var materialAssign = meshImport[0].getChildMeshes();
        materialAssign.forEach(function(meshHandler) {
          meshHandler.material = eval(firstMateial[0]);
        });
      });
    }
    // object placed ends

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

    scene.onPointerDown = function(evt, pickResult) {
      if (pickResult.hit) {
        pickResult.pickedMesh.material = lightWood;
        bottomMenu.style.display = "flex";
        clickedMesh = pickResult.pickedMesh.name;
      }
    };
    return scene;

  }
  var scene = createScene();

  engine.runRenderLoop(function() {

    scene.render();
  });
});

function editMesh() {

}

function editColour() {

}

function deleteItem() {

}

function moveItem() {

}

function saveItem() {

}

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
