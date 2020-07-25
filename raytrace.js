var node0 = [-1000, 0, -1000];
var node1 = [-1000, 0, 1000];
var node2 = [-1000, 600, -1000];
var node3 = [-1000, 600, 1000];
var node4 = [1000, 0, -1000];
var node5 = [1000, 0, 1000];
var node6 = [1000, 600, -1000];
var node7 = [1000, 600, 1000];
// Second Cube
var node8 = [10, 50, -500];
var node9 = [10, 50, 510];
var node10 = [10, 150, -500];
var node11 = [10, 150, 510];
var node12 = [-500, 50, -500];
var node13 = [-500, 50, 510];
var node14 = [-500, 150, -500];
var node15 = [-500, 150, 510];

var node16 = [-900, 50, -900];
var node17 = [-900, 50, -800];
var node18 = [-900, 550,-900];
var node19 = [-900, 550,-800];
var node20 = [-800, 50, -900];
var node21 = [-800, 50, -800];
var node22 = [-800, 550, -900];
var node23 = [-800, 550, -800];

var nodes = [node0, node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20, node21, node22, node23];

// var edge0 = [0, 1];
// var edge1 = [1, 3];
// var edge2 = [3, 2];
// var edge3 = [2, 0];
// var edge4 = [4, 5];
// var edge5 = [5, 7];
// var edge6 = [7, 6];
// var edge7 = [6, 4];
// var edge8 = [0, 4];
// var edge9 = [1, 5];
// var edge10 = [2, 6];
// var edge11 = [3, 7];
// var edges = [edge0, edge1, edge2, edge3, edge4, edge5, edge6, edge7, edge8, edge9, edge10, edge11];

var tri0 = [4, 2, 0];
var tri1 = [4, 6, 2];
var tri2 = [7, 6, 4];
var tri3 = [4, 5, 7];
var tri4 = [5, 1, 7];
var tri5 = [3, 7, 1];
var tri6 = [0, 1, 4];
var tri7 = [4, 1, 5];
var tri8 = [0, 2, 3];
var tri9 = [3, 1, 0];
var tri10 = [7, 3, 6];
var tri11 = [2, 6, 3];

var tri12 = [4 + 8, 2 + 8, 0 + 8];
var tri13 = [4 + 8, 6 + 8, 2 + 8];
var tri14 = [7 + 8, 6 + 8, 4 + 8];
var tri15 = [4 + 8, 5 + 8, 7 + 8];
var tri16 = [5 + 8, 1 + 8, 7 + 8];
var tri17 = [3 + 8, 7 + 8, 1 + 8];
var tri18 = [0 + 8, 1 + 8, 4 + 8];
var tri19 = [4 + 8, 1 + 8, 5 + 8];
var tri20 = [0 + 8, 2 + 8, 3 + 8];
var tri21 = [3 + 8, 1 + 8, 0 + 8];
var tri22 = [7 + 8, 3 + 8, 6 + 8];
var tri23 = [2 + 8, 6 + 8, 3 + 8];

var tri24 = [4 + 16, 0 + 16, 2 + 16];
var tri25 = [4 + 16, 2 + 16, 6 + 16];
var tri26 = [7 + 16, 4 + 16, 6 + 16];
var tri27 = [4 + 16, 7 + 16, 5 + 16];
var tri28 = [5 + 16, 7 + 16, 1 + 16];
var tri29 = [3 + 16, 1 + 16, 7 + 16];
var tri30 = [0 + 16, 4 + 16, 1 + 16];
var tri31 = [4 + 16, 5 + 16, 1 + 16];
var tri32 = [0 + 16, 3 + 16, 2 + 16];
var tri33 = [3 + 16, 0 + 16, 1 + 16];
var tri34 = [7 + 16, 6 + 16, 3 + 16];
var tri35 = [2 + 16, 3 + 16, 6 + 16];

var triangles = [tri0, tri1, tri2, tri3, tri4, tri5, tri6, tri7, tri8, tri9, tri10, tri11, tri12, tri13, tri14, tri15, tri16, tri17, tri18, tri19, tri20, tri21, tri22, tri23, tri24, tri25, tri26, tri27, tri28, tri29, tri30, tri31, tri32, tri33, tri34, tri35];

var room = [tri0, tri1, tri2, tri3, tri4, tri5, tri6, tri7, tri8, tri9, tri10, tri11];
var platform = [tri12, tri13, tri14, tri15, tri16, tri17, tri18, tri19, tri20, tri21, tri22, tri23];
var box = [tri24, tri25, tri26, tri27, tri28, tri29, tri30, tri31, tri32, tri33, tri34, tri35];

var roomData = {
    id: 0,
    shadow:false,
    color: {
        r: 210,
        g: 210,
        b: 210
    },
    alpha: 1,
    isTransparent: false,
    collide:false
}
var platformData = {
    id: 1,
    shadow: true,
    color: {
        r: 66,
        g: 135,
        b: 245
    },
    isTransparent: true,
    alpha: 0.2,
    collide: true,
    x: -500,
    dx: 510,
    y: 50, 
    dy: 100,
    z: -500,
    dz: 1010
    
}

var boxData = {
    id: 2,
    shadow: true,
    color: {
        r: 255,
        g: 77,
        b: 77
    },
    isTransparent: false,
    alpha: 1,
    collide: false,

}

var objects = [room, platform, box]
var objectData = [roomData, platformData, boxData]



var width = 900;
var height = 600;
var focalLength = 400;

var fov = 1;
let camera = [500, 400, 500];
var rot = [0, 0, 0];
var lightPoint = [200, 350, 200];
var lightPoint2 = [450, 250, -450];

var lights = [lightPoint2, lightPoint];
var pixelSize = 1;
var antiA = 2;

var pixelData = null;

var transparencyEnabled = true;


Array.prototype.min = function () {
    return Math.min.apply(null, this);
};

function inverseMatrix(mat){
    var a =  mat[0][0], b =  mat[0][1], c =  mat[0][2], d =  mat[1][0], e =  mat[1][1], f =  mat[1][2], g =  mat[2][0], h =  mat[2][1], i =  mat[2][2];

    var v00 = e * i - f * h, v01 = c * h - b * i, v02 = b * f - c * e, v10 = f * g - d * i, v11 = a * i - c * g, v12 = c * d - a * f, v20 = d * h - e * g, v21 = b * g - a * h, v22 = a * e - b * d;
    var det = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
    var matInv = [[v00/det, v01/det, v02/det], [v10/det, v11/det, v12/det], [v20/det, v21/det, v22/det]];
    return matInv;
}

function multiplyMatrixVec(mat, vec){
    return [mat[0][0] * vec[0] + mat[0][1] * vec[1] + mat[0][2] * vec[2], mat[1][0] * vec[0] + mat[1][1] * vec[1] + mat[1][2] * vec[2], mat[2][0] * vec[0] + mat[2][1] * vec[1] + mat[2][2] * vec[2]]
}

var subtractVectors = function (v1, v2) {
    return [v1[0] - v2[0], v1[1] - v2[1], v1[2] - v2[2]];
};

var normaliseVector = function (v) {
    var d = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    return [v[0] / d, v[1] / d, v[2] / d];
};
var equationOfAPlane = function (a) {
    var n1 = nodes[a[0]];
    var n2 = nodes[a[1]];
    var n3 = nodes[a[2]];
    var v1 = subtractVectors(n1, n2);
    var v2 = subtractVectors(n1, n3);
    var v31 = v1[1] * v2[2] - v1[2] * v2[1];
    var v32 = v1[2] * v2[0] - v1[0] * v2[2];
    var v33 = v1[0] * v2[1] - v1[1] * v2[0];

    var d = -(v31 * n1[0] + v32 * n1[1] + v33 * n1[2])
    var v3 = [
        v31, v32, v33, d
    ];
    return v3;
};
var dotProduct = function (v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
};
var movement = {
    up: false,
    down: false,
    left: false,
    right: false,
    lookUp: false,
    lookDown: false,
    jump: false
}
document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 65: // A
            movement.left = true;
            break;
        case 87: // W
            movement.up = true;
            break;
        case 83: // S
            movement.down = true;
            break;
        case 68: // D
            movement.right = true;
            break;
        case 38: // Up
            movement.lookUp = true;
            break;

        case 40: // Down
            movement.lookDown = true;
            break;
    }
});
document.addEventListener('keyup', function (event) {
    switch (event.keyCode) {
        case 87: // W
            movement.up = false;
            break;
        case 83: // S
            movement.down = false;
            break;
        case 32: // SpaceBar
            movement.jump = true;
            break;
        case 84: // T
            transparencyEnabled = !transparencyEnabled;
            break;
        case 79: // O
            pixelSize++;
        break;
        case 76: // L
            pixelSize--;
        break;

        case 73: // I
            antiA++;
        break;
        case 75: // K
            antiA--;
        break;
    }
});




var isMouseDown = false;
document.onmousedown = function () {
    
    isMouseDown = true
};
document.onmouseup = function () {
    
    isMouseDown = false
};
document.onmousemove = function (event) {
    if (isMouseDown) {
        mouseMove = true;
        var x = event.movementX;
        var y = event.movementY;

        var range = Math.PI*0.5;

        x = range * x /(width);
        y = range * y /(height);

        totalRotX += y;
        totalRotY -= x;
}
};


var ctx;
window.onload = () => {
    var canvas = document.getElementById("canvas");
    
    ctx = canvas.getContext("2d");

    //canvas.height = document.body.clientHeight;
    //canvas.width = document.body.clientWidth;
    //canvas.height = 400;
    //canvas.width = 600;

    //height = canvas.height;
    //awidth = canvas.width;
    
    pixelData = new Uint8ClampedArray(height * width * 4);

    PrepareBuffers();
    
    setTimeout(() => {
        ViewFrames();
        
    }, 100);
}


var planeBuffer = [];
var normalBuffer = [];

function PrepareBuffers() {
    for (let objectIndex = 0; objectIndex < objects.length; objectIndex++) {
        var Tbuffer = [];
        var TNbuffer = [];
        var object = objects[objectIndex];
        var objectDat = objectData[objectIndex];
        for (let tri = 0; tri < object.length; tri++) {
            Tbuffer.push(equationOfAPlane(object[tri]));
            TNbuffer.push(normaliseVector(equationOfAPlane(object[tri])));
        }
        planeBuffer.push(Tbuffer);
        normalBuffer.push(TNbuffer);
    }
}

var velz = 0;
var vely = 0;
var velRotY = 0;
var velRotX = 0;
var velZConstant = 0.85;
var velYConstant = 0.9;
var velRotYConstant = 0.9;
var velRotXConstant = 0.85;
var totalRotX = 0.001;
var totalRotY = 0.001;


function UpdatePlayerMovement(){
    //lights[0] = camera;
    var x = camera[0], y = camera[1], z = camera[2];
    
    
    if (camera[1] > 250) {
        vely -= 3;
    }
    if (movement.down) {
        velz -= 3;
    } else if (movement.up) {
        velz += 3;
    }
    
    if (movement.jump) {
        if (camera[1] === 250){
            vely += 23;
        }
        movement.jump = false;
    }
    vely *= velYConstant;
    velz *= velZConstant;
    var rotateY = rotateY3D(totalRotY, [camera[0], camera[1], camera[2] + velz])
    camera[0] = rotateY[0];
    camera[2] = rotateY[2];
    camera[1] += vely;
    if (camera[1] < 250) {
        camera[1] = 250;
    }
    
    checkCollide(x, y, z);
    
}


function checkCollide(x,y,z){
    for (let object = 0; object < objects.length; object++) {
        var objData = objectData[object];
        if(!objData.collide){
            continue;
        }
        var playerWidth = 200;
        var large = 1000000;
        var A = {
            x: objData.x + large,
            dx: objData.dx,
            y: objData.y + large,
            dy: objData.dy ,
            z: objData.z + large,
            dz: objData.dz 
        };
        var B = {
            x: camera[0] + large - playerWidth / 2,
            dx: playerWidth,
            y: 250 + large,
            dy: 250,
            z: camera[2] + large - playerWidth / 2,
            dz: playerWidth 
        }
        //console.log(A);
        //console.log(B);
        if (!(B.x > A.x + A.dx || B.x + B.dx < A.x || B.y > A.y + A.dy || B.y + B.dy < A.y || B.z > A.z + A.dz || B.z + B.dz < A.z)){
            //console.log("hit")
            camera = [x,y,z];
        }
    }
}


function ViewFrames(){
    UpdatePlayerMovement();
    draw();
    
    let imageData = new ImageData(pixelData, width, height);
    ctx.putImageData(imageData, 0, 0);
    
    requestAnimationFrame(ViewFrames);
}
function calcIntersection(x, y, z, equation, cameras){
    var a = equation[0];
    var b = equation[1];
    var c = equation[2];
    var d = equation[3];
    var Cx = cameras[0];
    var Cy = cameras[1];
    var Cz = cameras[2];
    var Px = x;
    var Py = y;
    var Pz = z;
    var meta1 = a * Cx + b * Cy + c * Cz + d;
    var meta2 = a * Cx + b * Cy + c * Cz - a * Px - b * Py - c * Pz;
    var n = meta1/meta2;
    var Ix = (1 - n) * Cx + n * Px;
    var Iy = (1 - n) * Cy + n * Py;
    var Iz = (1 - n) * Cz + n * Pz;
    return [Ix, Iy, Iz, n];
}



function checkIfInsideTriangle(triangle, point){
    var n1 = nodes[triangle[0]];
    var n2 = nodes[triangle[1]];
    var n3 = nodes[triangle[2]];

    var matA = 
        [
            [n1[0], n2[0], n3[0]],
            [n1[1], n2[1], n3[1]],
            [n1[2], n2[2], n3[2]]
        ] 

    var matB = 
        [
            point[0], point[1], point[2]
        ]
    var matAInv = inverseMatrix(matA);
    var matAns = multiplyMatrixVec(matAInv, matB);
    if (matAns[0] < 0 || matAns[1] < 0 || matAns[2] < 0){
        return false;
    }
    return true;
}

function traceToTransparency(ints, id, lightPoint, color, light, alpha, toObject, near) {
    var intersectionP = [ints[0], ints[1], ints[2]]
    var triangleToRender = Infinity;
    if (near) {
        triangleToRender = -Infinity;
    }
    var lightToRender;
    var lightNearToRender;
    var lightObjectToRender;
    var isTriangle = false;
    for (let objectIndex = 0; objectIndex < objects.length; objectIndex++) {
        var object = objects[objectIndex];
        var objectDat = objectData[objectIndex];
        if (toObject) {
            if (objectDat.id !== id) {
                continue;
            }
        } else {
            if (objectDat.id === id) {
                continue;
            }
        }
        
        for (let tri = 0; tri < object.length; tri++) {
            var triangle = object[tri];
            var equation = planeBuffer[objectIndex][tri];
            var intersection = calcIntersection(intersectionP[0], intersectionP[1], intersectionP[2], equation, lightPoint);
            if (!isFinite(intersection[0] + intersection[1] + intersection[2])) {
                continue;
            }
            var isInside = checkIfInsideTriangle(triangle, intersection);
            if (near) {
            if (triangleToRender < intersection[3]) {
                    if (isInside) {
                        //console.log(objectDat.id)
                        rgb = traceToLight(intersection, objectDat.id, [objectDat.color.r, objectDat.color.g, objectDat.color.b], light);
                        var Lightvector = normaliseVector(subtractVectors(light, intersection));
                        var normalToPlaneVector = normalBuffer[objectIndex][tri];
                        var PointLightIntensity = dotProduct(normalToPlaneVector, Lightvector);
                        if (toObject) {
                            PointLightIntensity = -PointLightIntensity;
                        }
                        //PointLightIntensity = 1;
                        // Possible Figure

                        lightToRender = [
                            ((1 - alpha) * rgb[0] * PointLightIntensity + alpha * color[0]),
                            ((1 - alpha) * rgb[1] * PointLightIntensity + alpha * color[1]),
                            ((1 - alpha) * rgb[2] * PointLightIntensity + alpha * color[2])
                        ];
                        triangleToRender = intersection[3];
                        isTriangle = true;

                    }
                }
            } else {
                    if (triangleToRender > intersection[3]) {
                        if (isInside) {
                            //console.log(objectDat.id)
                            rgb = traceToLight(intersection, objectDat.id, [objectDat.color.r, objectDat.color.g, objectDat.color.b], light);
                            var Lightvector = normaliseVector(subtractVectors(light, intersection));
                            var normalToPlaneVector = normalBuffer[objectIndex][tri];
                            var PointLightIntensity = dotProduct(normalToPlaneVector, Lightvector);
                            if (toObject) {
                                PointLightIntensity = -PointLightIntensity;
                            }
                            //PointLightIntensity = 1;
                            // Possible Figure

                            lightToRender = [
                                ((1 - alpha) * rgb[0] * PointLightIntensity + alpha * color[0]),
                                ((1 - alpha) * rgb[1] * PointLightIntensity + alpha * color[1]),
                                ((1 - alpha) * rgb[2] * PointLightIntensity + alpha * color[2])
                            ];
                            triangleToRender = intersection[3];
                            isTriangle = true;

                        }
                    }
                }

        }
    }

    if (isTriangle) {
        return lightToRender;
    }else{
        return [255, 255, 255]
    }

    
}

function traceToLight(ints, id, firstColor, lightPoint) {
    var intersectionP = [ints[0], ints[1], ints[2]]
    var P = lightPoint;
    for (let objectIndex = 0; objectIndex < objects.length; objectIndex++) {
        var object = objects[objectIndex];
        var objectDat = objectData[objectIndex];
        if(objectDat.id === id){
            continue;
        }

        if (!objectDat.shadow) {
            continue;
        }
        for (let tri = 0; tri < object.length; tri++) {
            var triangle = object[tri];
            var equation = planeBuffer[objectIndex][tri];
            var intersection = calcIntersection(intersectionP[0], intersectionP[1], intersectionP[2], equation, P);
            if (!isFinite(intersection[0] + intersection[1] + intersection[2])) {
                continue;
            }
            var distToOrig = Math.pow(intersectionP[0] - lightPoint[0], 2) + Math.pow(intersectionP[1] - lightPoint[1], 2) + Math.pow(intersectionP[2] - lightPoint[2], 2);
            
            var dist = Math.pow(intersection[0] - lightPoint[0], 2) + Math.pow(intersection[1] - lightPoint[1], 2) + Math.pow(intersection[2] - lightPoint[2], 2);
            var distT = Math.pow(intersection[0] - intersectionP[0], 2) + Math.pow(intersection[1] - intersectionP[1], 2) + Math.pow(intersection[2] - intersectionP[2], 2);
            if (dist > distToOrig || distT > distToOrig ){
                continue;
            }



            var isInside = checkIfInsideTriangle(triangle, intersection);

            if (isInside) {
                
                if(objectDat.isTransparent && transparencyEnabled){
                    var FinalLight = (1 - objectDat.alpha);
                    if (objectDat.alpha === 1) {
                        FinalLight = 0.2;
                    }
                    var color = objectDat.color;
                    return [0.5 * (firstColor[0] + color.r) * FinalLight, 0.5 * (firstColor[1] + color.g) * FinalLight, 0.5 * (firstColor[1] + color.b) * FinalLight, false]
                }
                var FinalLight = (1-objectDat.alpha);
                if (objectDat.alpha === 1) {
                    FinalLight = 0.2;
                }
                return [firstColor[0] * FinalLight, firstColor[1] * FinalLight, firstColor[2] * FinalLight, false]
            }

        }
    }

    return [firstColor[0], firstColor[1], firstColor[2], true];
}

function draw(){
    var xlim = width / pixelSize;
    var ylim = height / pixelSize;
    for (let y = 0; y < ylim; y++) {
        for (let x = 0; x < xlim; x++) {
            //var hiddenTriangles = [];
            var AvglightToRender = [0,0,0];
            for (let adapty = 0; adapty < antiA; adapty++) {
                for (let adaptx = 0; adaptx < antiA; adaptx++) {
                    var triangleToRender = Infinity;
                    var lightToRender;
                    var isTriangle = false;
                    var Px = pixelSize * (x +  adaptx / antiA) * fov - camera[0] * 0.5;
                    var Py = pixelSize * (y +  adapty / antiA) * fov - camera[1] * 0.5;
                    var Pz = camera[2] + focalLength;
                    var P = rotateX3D(totalRotX, [Px, Py, Pz]);
                    P = rotateY3D(totalRotY, P);
                    P = [P[0], P[1], P[2]]
                        for (let objectIndex = 0; objectIndex < objects.length; objectIndex++) {
                            var object = objects[objectIndex];
                            var objectDat = objectData[objectIndex];
                            for (let tri = 0; tri < object.length; tri++) {
                                
                                var triangle = object[tri];
                                var equation = planeBuffer[objectIndex][tri];
                                var intersection = calcIntersection(P[0], P[1], P[2], equation, camera);
                                if (!isFinite(intersection[0] + intersection[1] + intersection[2])) {
                                    continue;
                                }
                                
                                var isInside = checkIfInsideTriangle(triangle, intersection);
                                
                            var normalToPlaneVector = normalBuffer[objectIndex][tri];

                                if (isInside && intersection[3] > 0){
                                    if (triangleToRender > intersection[3]) {
                                        var rgb;
                                        var FinalRGB = [0, 0, 0]
                                        for (let lightIndex = 0; lightIndex < lights.length; lightIndex++) {
                                            var light = lights[lightIndex];
                                            var objectColor = [objectDat.color.r, objectDat.color.g, objectDat.color.b];
                        
                                            rgb = traceToLight(intersection, objectDat.id, objectColor, light);
                                            if(rgb[3]){
                                                PointLightIntensity = 1;
                                            }
                                            var Lightvector = normaliseVector(subtractVectors(light, intersection));
                                            var PointLightIntensity = dotProduct(normalToPlaneVector, Lightvector);
                                            if (objectDat.isTransparent && transparencyEnabled){
                                                
                                                var rgb1 = traceToTransparency(camera, objectDat.id, P, objectColor, light, objectDat.alpha, true, false);
                                                var rgb2 = traceToTransparency(camera, objectDat.id, P, objectColor, light, objectDat.alpha, false, false);
                                                var rgb3 = traceToTransparency(camera, objectDat.id, P, objectColor, light, objectDat.alpha, true, true);
                                                rgb = [(rgb1[0] + rgb2[0] + rgb3[0]) / 3, (rgb1[1] + rgb2[1] + rgb3[1]) / 3, (rgb1[2] + rgb2[2] + rgb3[2]) / 3]
                                                PointLightIntensity = 1;
                                            }
        
                                            
                                            
                                            FinalRGB = [FinalRGB[0] + rgb[0] * PointLightIntensity, FinalRGB[1] + rgb[1] * PointLightIntensity, FinalRGB[2] + rgb[2] * PointLightIntensity]
                                            
                                            
                                        } 
                                        lightToRender = [Math.ceil(FinalRGB[0]) / lights.length, Math.ceil(FinalRGB[1]) / lights.length, Math.ceil(FinalRGB[2]) / lights.length];
                                        triangleToRender = intersection[3];
                                        isTriangle = true;
                                    }
                                }
                
                            }
                        }

                    if(isTriangle){
                        AvglightToRender = [AvglightToRender[0] + lightToRender[0], AvglightToRender[1] + lightToRender[1], AvglightToRender[2] + lightToRender[2]]
                    }
                }
            }

            if (isTriangle) {

                var r = AvglightToRender[0] / (antiA * antiA);
                var g = AvglightToRender[1] / (antiA * antiA);
                var b = AvglightToRender[2] / (antiA * antiA);

                var yTemp = y * pixelSize;
                var xTemp = x * pixelSize;

                var index = 0;

                for (let y1 = 0; y1 < pixelSize; y1++) {
                    for (let x1 = 0; x1 < pixelSize; x1++) {
                        var index = ((y * pixelSize + y1) * width + (x * pixelSize + x1)) * 4;

                        pixelData[index + 0] = r;
                        pixelData[index + 1] = g;
                        pixelData[index + 2] = b;
                        pixelData[index + 3] = 255;

                    }

                }
                // //
                // index = (yTemp* width + xTemp) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // index = (yTemp * width + (xTemp + 1)) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // index = (yTemp * width + (xTemp + 2)) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // //
                // index = ((yTemp + 1) * width + xTemp ) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // index = ((yTemp + 1) * width + (xTemp + 1)) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // index = ((yTemp + 1) * width + (xTemp + 2)) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // index = ((yTemp + 2) * width + xTemp) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // index = ((yTemp + 2) * width + (xTemp + 1)) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // index = ((yTemp + 2) * width + (xTemp + 2)) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;


            } else {

                var r = 255;
                var g = 255;
                var b = 255;

                var yTemp = y * pixelSize;
                var xTemp = x * pixelSize;

                var index = 0;

                // //
                // index = (yTemp * width + xTemp) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // index = (yTemp * width + (xTemp + 1)) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // index = (yTemp * width + (xTemp + 2)) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // //
                // index = ((yTemp + 1) * width + xTemp) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // index = ((yTemp + 1) * width + (xTemp + 1)) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // index = ((yTemp + 1) * width + (xTemp + 2)) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // index = ((yTemp + 2) * width + xTemp) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // index = ((yTemp + 2) * width + (xTemp + 1)) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                // index = ((yTemp + 2) * width + (xTemp + 2)) * 4;
                // pixelData[index + 0] = r;
                // pixelData[index + 1] = g;
                // pixelData[index + 2] = b;
                // pixelData[index + 3] = 255;

                for (let y1 = 0; y1 < pixelSize; y1++) {
                    for (let x1 = 0; x1 < pixelSize; x1++) {
                        var index = ((y * pixelSize + y1) * width + (x * pixelSize + x1)) * 4;

                        pixelData[index + 0] = 255;
                        pixelData[index + 1] = 255;
                        pixelData[index + 2] = 255;
                        pixelData[index + 3] = 255;

                    }

                }
            }



            
        }           
    }
}

var rotateZ3D = function (theta, node) {
    var nodeT = node;
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    var x = node[0]-camera[0];
    var y = node[1]-camera[1];
    nodeT[0] = x * cosTheta - y * sinTheta + camera[0];
    nodeT[1] = y * cosTheta + x * sinTheta + camera[1];
    return nodeT;
};

var rotateX3D = function (theta, node) {
    var nodeT = node;
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    var y = node[1]-camera[1];
    var z = node[2] - camera[2];
    nodeT[1] = y * cosTheta - z * sinTheta + camera[1];
    nodeT[2] = z * cosTheta + y * sinTheta + camera[2];
    return nodeT;
    
};

var rotateY3D = function (theta, node) {
    var nodeT = node;
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    var x = node[0] - camera[0];
    var z = node[2] - camera[2];
    nodeT[0] = x * cosTheta + z * sinTheta + camera[0];
    nodeT[2] = z * cosTheta - x * sinTheta + camera[2];
    return nodeT;
   
};