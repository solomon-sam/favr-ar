var active;
var editorNav;
var clickedMesh;
var scene;

var meshUrl = "./assets/";
var meshType = "chair";
var meshList = {
  legsMesh: ["Chair_Leg_1", "Chair_Leg_2", "Chair_Leg_3", "Chair_Leg_4", "Chair_Leg_4"],
  seatMesh: ["Chair_top_1", "Chair_top_2"]
};
var meshTestures = {
  Chair_Leg_1: ["darkWood", "lightWood", "hardWood"],
  Chair_Leg_2: ["lightWood", "hardWood", "darkWood"],
  Chair_Leg_3: ["hardWood", "darkWood", "lightWood"],
  Chair_Leg_4: ["darkWood", "lightWood", "hardWood"],
  Chair_top_1: ["lightWood", "hardWood", "darkWood"],
  Chair_top_2: ["hardWood", "darkWood", "lightWood"]
}

window.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("canvas");
  var engine = new BABYLON.Engine(canvas, true);
  scene = new BABYLON.Scene(engine);
  editorNav = document.getElementById("bottom-editor-nav");
  const bottomMenu = document.querySelector('#bottom-editor-nav');
  bottomMenu.style.display = "none";

  var darkWood = new BABYLON.NodeMaterial("darkWood", scene);
  var lightWood = new BABYLON.NodeMaterial("lightWood", scene);
  var hardWood = new BABYLON.NodeMaterial("hardWood", scene);
  darkWood.loadAsync(meshUrl + "texture/dark_wood.json").then(() => {
    darkWood.build(true);
  });
  lightWood.loadAsync(meshUrl + "texture/light_wood.json").then(() => {
    lightWood.build(true);
  });
  hardWood.loadAsync(meshUrl + "texture/hard_wood.json").then(() => {
    hardWood.build(true);
  });

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

    var storeValue;
    //object placed
    var listOfMesh = [];
    var count = 0;
    for (let value of Object.keys(meshList)) {
      var firstMesh = meshList[value];
      listOfMesh.push(firstMesh[0]);
      BABYLON.SceneLoader.ImportMeshAsync("", meshUrl + meshType + "/", firstMesh[0] + ".glb", scene).then(function(result) {
        result.meshes[0].name = listOfMesh[count];
        var materialAssign = result.meshes[0].getChildMeshes();
        materialAssign.forEach(function(meshHandler) {
          var firstMateial = meshTestures[listOfMesh[count]];
          meshHandler.material = eval(firstMateial[0]);
        });
        count++;
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
        var pickedMeshName = pickResult.pickedMesh.name;
        clickedMesh = pickedMeshName.split(".");
      }
    }
    document.getElementById("delete-item").addEventListener("click",function () {
      alert(clickedMesh[0]);
      scene.getNodeByName(clickedMesh[0]).dispose();
      return false;
    });
    return scene;
  }
  var scene = createScene();

  engine.runRenderLoop(function() {
    scene.render();  });
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
