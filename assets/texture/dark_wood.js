var materialName = "dark_wood";
var dark_wood = new BABYLON.NodeMaterial(materialName);
var inputTextureColor = "./assets/texture/"+materialName+"/"+materialName+"_color.jpg";
var inputTextureNormal = "./assets/texture/"+materialName+"/"+materialName+"_normal.jpg";
var inputTextureRoughness = "./assets/texture/"+materialName+"/"+materialName+"_roughness.jpg";
var inputTextureScale = 2;


// InputBlock
var position = new BABYLON.InputBlock("position");
position.setAsAttribute("position");

// TransformBlock
var WorldPos = new BABYLON.TransformBlock("WorldPos");
WorldPos.complementZ = 0;
WorldPos.complementW = 1;

// InputBlock
var World = new BABYLON.InputBlock("World");
World.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

// TransformBlock
var Worldnormal = new BABYLON.TransformBlock("World normal");
Worldnormal.complementZ = 0;
Worldnormal.complementW = 0;

// InputBlock
var normal = new BABYLON.InputBlock("normal");
normal.setAsAttribute("normal");

// PBRMetallicRoughnessBlock
var PBRMetallicRoughness = new BABYLON.PBRMetallicRoughnessBlock("PBRMetallicRoughness");
PBRMetallicRoughness.lightFalloff = 0;
PBRMetallicRoughness.useAlphaTest = false;
PBRMetallicRoughness.alphaTestCutoff = 0.5;
PBRMetallicRoughness.useAlphaBlending = false;
PBRMetallicRoughness.useRadianceOverAlpha = true;
PBRMetallicRoughness.useSpecularOverAlpha = true;
PBRMetallicRoughness.enableSpecularAntiAliasing = false;
PBRMetallicRoughness.realTimeFiltering = false;
PBRMetallicRoughness.realTimeFilteringQuality = 16;
PBRMetallicRoughness.useEnergyConservation = true;
PBRMetallicRoughness.useRadianceOcclusion = true;
PBRMetallicRoughness.useHorizonOcclusion = true;
PBRMetallicRoughness.unlit = false;
PBRMetallicRoughness.forceNormalForward = true;
PBRMetallicRoughness.debugMode = 0;
PBRMetallicRoughness.debugLimit = 0;
PBRMetallicRoughness.debugFactor = 1;

// InputBlock
var view = new BABYLON.InputBlock("view");
view.setAsSystemValue(BABYLON.NodeMaterialSystemValues.View);

// InputBlock
var cameraPosition = new BABYLON.InputBlock("cameraPosition");
cameraPosition.setAsSystemValue(BABYLON.NodeMaterialSystemValues.CameraPosition);

// PerturbNormalBlock
var Perturbnormal = new BABYLON.PerturbNormalBlock("Perturb normal");
Perturbnormal.invertX = false;
Perturbnormal.invertY = false;

// TransformBlock
var Worldtangent = new BABYLON.TransformBlock("World tangent");
Worldtangent.complementZ = 0;
Worldtangent.complementW = 0;

// InputBlock
var tangent = new BABYLON.InputBlock("tangent");
tangent.setAsAttribute("tangent");

// ScaleBlock
var Scale = new BABYLON.ScaleBlock("Scale");
Scale.visibleInInspector = false;
 Scale.visibleOnFrame = false;

// InputBlock
var uv = new BABYLON.InputBlock("uv");
uv.setAsAttribute("uv");

// InputBlock
var scaleTexture = new BABYLON.InputBlock("scaleTexture");
scaleTexture.value = inputTextureScale;
scaleTexture.min = 0;
scaleTexture.max = 0;
scaleTexture.isBoolean = false;
scaleTexture.matrixMode = 0;
scaleTexture.animationType = BABYLON.AnimatedInputBlockTypes.None;
scaleTexture.isConstant = false;

// TextureBlock
var roughnessTexture = new BABYLON.TextureBlock("roughnessTexture");
roughnessTexture.texture = new BABYLON.Texture(inputTextureRoughness, null, false, false);
roughnessTexture.texture.wrapU = 1;
roughnessTexture.texture.wrapV = 1;
roughnessTexture.texture.uAng = 0;
roughnessTexture.texture.vAng = 0;
roughnessTexture.texture.wAng = 0;
roughnessTexture.texture.uOffset = 0;
roughnessTexture.texture.vOffset = 0;
roughnessTexture.texture.uScale = 1;
roughnessTexture.texture.vScale = 1;
roughnessTexture.texture.coordinatesMode = 7;
roughnessTexture.convertToGammaSpace = false;
roughnessTexture.convertToLinearSpace = false;

// LerpBlock
var Lerp = new BABYLON.LerpBlock("Lerp");
Lerp.visibleInInspector = false;
 Lerp.visibleOnFrame = false;

// InputBlock
var Float = new BABYLON.InputBlock("Float");
Float.value = 0;
Float.min = 0;
Float.max = 0;
Float.isBoolean = false;
Float.matrixMode = 0;
Float.animationType = BABYLON.AnimatedInputBlockTypes.None;
Float.isConstant = false;

// InputBlock
var Float1 = new BABYLON.InputBlock("Float");
Float1.value = 1;
Float1.min = 0;
Float1.max = 0;
Float1.isBoolean = false;
Float1.matrixMode = 0;
Float1.animationType = BABYLON.AnimatedInputBlockTypes.None;
Float1.isConstant = false;

// TextureBlock
var baseTexture = new BABYLON.TextureBlock("baseTexture");
baseTexture.texture = new BABYLON.Texture(inputTextureColor, null, false, false);
baseTexture.texture.wrapU = 1;
baseTexture.texture.wrapV = 1;
baseTexture.texture.uAng = 0;
baseTexture.texture.vAng = 0;
baseTexture.texture.wAng = 0;
baseTexture.texture.uOffset = 0;
baseTexture.texture.vOffset = 0;
baseTexture.texture.uScale = 1;
baseTexture.texture.vScale = 1;
baseTexture.texture.coordinatesMode = 7;
baseTexture.convertToGammaSpace = false;
baseTexture.convertToLinearSpace = true;

// TextureBlock
var normalTexture = new BABYLON.TextureBlock("normalTexture");
normalTexture.texture = new BABYLON.Texture(inputTextureNormal, null, false, false);
normalTexture.texture.wrapU = 1;
normalTexture.texture.wrapV = 1;
normalTexture.texture.uAng = 0;
normalTexture.texture.vAng = 0;
normalTexture.texture.wAng = 0;
normalTexture.texture.uOffset = 0;
normalTexture.texture.vOffset = 0;
normalTexture.texture.uScale = 1;
normalTexture.texture.vScale = 1;
normalTexture.texture.coordinatesMode = 7;
normalTexture.convertToGammaSpace = false;
normalTexture.convertToLinearSpace = false;

// InputBlock
var strength = new BABYLON.InputBlock("strength");
strength.value = 2;
strength.min = 0;
strength.max = 0;
strength.isBoolean = false;
strength.matrixMode = 0;
strength.animationType = BABYLON.AnimatedInputBlockTypes.None;
strength.isConstant = false;

// InputBlock
var metalicValue = new BABYLON.InputBlock("metalicValue");
metalicValue.value = 0;
metalicValue.min = 0;
metalicValue.max = 0;
metalicValue.isBoolean = false;
metalicValue.matrixMode = 0;
metalicValue.animationType = BABYLON.AnimatedInputBlockTypes.None;
metalicValue.isConstant = false;

// ReflectionBlock
var Reflection = new BABYLON.ReflectionBlock("Reflection");
Reflection.useSphericalHarmonics = true;
Reflection.forceIrradianceInFragment = false;

// FragmentOutputBlock
var FragmentOutput = new BABYLON.FragmentOutputBlock("FragmentOutput");
FragmentOutput.convertToGammaSpace = false;
FragmentOutput.convertToLinearSpace = false;

// TransformBlock
var WorldPosViewProjectionTransform = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform");
WorldPosViewProjectionTransform.complementZ = 0;
WorldPosViewProjectionTransform.complementW = 1;

// InputBlock
var ViewProjection = new BABYLON.InputBlock("ViewProjection");
ViewProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

// VertexOutputBlock
var VertexOutput = new BABYLON.VertexOutputBlock("VertexOutput");
VertexOutput.visibleInInspector = false;
 VertexOutput.visibleOnFrame = false;

// Connections
position.output.connectTo(WorldPos.vector);
World.output.connectTo(WorldPos.transform);
WorldPos.output.connectTo(WorldPosViewProjectionTransform.vector);
ViewProjection.output.connectTo(WorldPosViewProjectionTransform.transform);
WorldPosViewProjectionTransform.output.connectTo(VertexOutput.vector);
WorldPos.output.connectTo(PBRMetallicRoughness.worldPosition);
normal.output.connectTo(Worldnormal.vector);
World.output.connectTo(Worldnormal.transform);
Worldnormal.output.connectTo(PBRMetallicRoughness.worldNormal);
view.output.connectTo(PBRMetallicRoughness.view);
cameraPosition.output.connectTo(PBRMetallicRoughness.cameraPosition);
WorldPos.output.connectTo(Perturbnormal.worldPosition);
Worldnormal.output.connectTo(Perturbnormal.worldNormal);
tangent.output.connectTo(Worldtangent.vector);
World.output.connectTo(Worldtangent.transform);
Worldtangent.output.connectTo(Perturbnormal.worldTangent);
uv.output.connectTo(Scale.input);
scaleTexture.output.connectTo(Scale.factor);
Scale.output.connectTo(Perturbnormal.uv);
Scale.output.connectTo(normalTexture.uv);
normalTexture.rgb.connectTo(Perturbnormal.normalMapColor);
strength.output.connectTo(Perturbnormal.strength);
Perturbnormal.output.connectTo(PBRMetallicRoughness.perturbedNormal);
Scale.output.connectTo(baseTexture.uv);
baseTexture.rgb.connectTo(PBRMetallicRoughness.baseColor);
metalicValue.output.connectTo(PBRMetallicRoughness.metallic);
Float.output.connectTo(Lerp.left);
Float1.output.connectTo(Lerp.right);
Scale.output.connectTo(roughnessTexture.uv);
roughnessTexture.r.connectTo(Lerp.gradient);
Lerp.output.connectTo(PBRMetallicRoughness.roughness);
position.output.connectTo(Reflection.position);
World.output.connectTo(Reflection.world);
Reflection.reflection.connectTo(PBRMetallicRoughness.reflection);
PBRMetallicRoughness.lighting.connectTo(FragmentOutput.rgb);

// Output nodes
dark_wood.addOutputNode(VertexOutput);
dark_wood.addOutputNode(FragmentOutput);
dark_wood.build();
export {dark_wood};
