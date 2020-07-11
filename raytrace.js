var node0 = [-1000, 0, -1000];
var node1 = [-1000, 0, 1000];
var node2 = [-1000, 500, -1000];
var node3 = [-1000, 500, 1000];
var node4 = [1000, 0, -1000];
var node5 = [1000, 0, 1000];
var node6 = [1000, 500, -1000];
var node7 = [1000, 500, 1000];

var nodes = [node0, node1, node2, node3, node4, node5, node6, node7];

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

var tri0 = [4, 0, 2];
var tri1 = [4, 2, 6];
var tri2 = [7, 4, 6];
var tri3 = [4, 7, 5];
var tri4 = [5, 7, 1];
var tri5 = [3, 1, 7];
var tri6 = [0, 4, 1];
var tri7 = [4, 5, 1];
var tri8 = [0, 3, 2];
var tri9 = [3, 0, 1];
var tri10 = [7, 6, 3];
var tri11 = [2, 3, 6];
var triangles = [tri0, tri1, tri2, tri3, tri4, tri5, tri6, tri7, tri8, tri9, tri10, tri11];

var backgroundColor = "white";
var nodeColor = "red";
var edgeColor = "black";
var nodeSize = 4;
var width = 900;
var height = 600;
var focalLength = 1000;

var camera = [500, 400, 500];
var rot = [0, 0, 0];
var lightVector = [0, -1, -2];
var pixelSize = 3;

var pixelData = new Uint8ClampedArray(height*width*4);


Array.prototype.min = function () {
    return Math.min.apply(null, this);
};

function round3(num){
    //return Math.ceil(num);
    return Math.ceil(num * 1000000) / 1000000;
}

function inverseMatrix(mat){
    var a = mat[0][0], b = mat[0][1], c = mat[0][2], d = mat[1][0], e = mat[1][1], f = mat[1][2], g = mat[2][0], h = mat[2][1], i = mat[2][2];

    var v00 = e * i - f * h, v01 = c * h - b * i, v02 = b * f - c * e, v10 = f * g - d * i, v11 = a * i - c * g, v12 = c * d - a * f, v20 = d * h - e * g, v21 = b * g - a * h, v22 = a * e - b * d;
    var det = round3(a*(e*i-f*h)-b*(d*i-f*g)+c*(d*h-e*g));
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

var normalOfPlane = function (a) {
    var n1 = nodes[a[0]];
    var n2 = nodes[a[1]];
    var n3 = nodes[a[2]];

    var v1 = subtractVectors(n1, n2);
    var v2 = subtractVectors(n1, n3);

    var v3 = [[v1[1] * v2[2] - v1[2] * v2[1]],
    [v1[2] * v2[0] - v1[0] * v2[2]],
    [v1[0] * v2[1] - v1[1] * v2[0]]];

    return v3;
};
//var Vec3 = null;
var equationOfAPlane = function (a) {
    var n1 = nodes[a[0]];
    var n2 = nodes[a[1]];
    var n3 = nodes[a[2]];

    var v1 = subtractVectors(n1, n2);
    var v2 = subtractVectors(n1, n3);
    //console.log(v1);
    //console.log(v2);
    var v31 = v1[1] * v2[2] - v1[2] * v2[1];
    var v32 = v1[2] * v2[0] - v1[0] * v2[2];
    var v33 = v1[0] * v2[1] - v1[1] * v2[0];

    var d = -(v31 * n1[0] + v32 * n1[1] + v33 * n1[2])
    var v3 = [
        v31, v32, v33, d
    ];
    //console.log(v3)
    //Vec3 = v3;
    return v3;
};

var dotProduct = function (v1, v2) {
    // Assume everything has 3 dimensions
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
        case 65: // A
            movement.left = false;
            break;
        case 87: // W
            movement.up = false;
            break;
        case 68: // D
            movement.right = false;
            break;
        case 83: // S
            movement.down = false;
            break;
        case 38: // Up
            movement.lookUp = false;
            break;

        case 40: // Down
            movement.lookDown = false;
            break;
        case 32: // SpaceBar
            movement.jump = true;
            break;
    }
});

lightVector = normaliseVector(lightVector);
var ctx;
window.onload = () => {
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    setTimeout(() => {
        ViewFrames();
        //RenderFrames(1000)
    }, 1000);
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

function ViewFrames(){
    if(camera[1]>250){
        vely -=3;
    }
    
    if(movement.down){
        velz += 0.5;
    } if(movement.up) {
        velz -= 0.5;
    } if (movement.left) {
        velRotY += 0.005;
    } if (movement.right) {
        velRotY -= 0.005;
    } if (movement.lookUp) {
        velRotX -= 0.005;
    } if (movement.lookDown) {
        velRotX += 0.005;
    } if (movement.jump) {
        vely += 16;
        movement.jump = false;
    }
    vely *= velYConstant;
    velRotY *= velRotYConstant;
    velz *= velZConstant;
    velRotX *= velRotXConstant;
    totalRotX += velRotX;
    rotateX3D(-totalRotX);
    rotateY3D(velRotY);
    rotateX3D(totalRotX);
    rotateX3D(velRotX);
    camera[2] += velz;
    camera[1] += vely;
    if (camera[1] < 250) {
        camera[1] = 250;
    }
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);
    
    draw(ctx, backgroundColor);
    let imageData = new ImageData(pixelData, width, height);
    ctx.putImageData(imageData, 0, 0);
    setTimeout(() => {
        ViewFrames();
    }, 1);
}

function RenderFrames(frameCount) {
    if(frameCount>0){
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, width, height);
        rotateY3D(0.01);
        draw(ctx, backgroundColor);
        let imageData = new ImageData(pixelData, width, height);
        ctx.putImageData(imageData, 0, 0);
        var filename = 'FastFrames'+frameCount+'.png'
        document.getElementById("canvas").toBlob(function (blob) {
            saveAs(blob, filename);
        });
        
        setTimeout(() => {
            RenderFrames(frameCount-1)
        }, 1);
    }
    
}


function calcIntersection(x, y, z, triangle, equation){
    //var equation = equationOfAPlane(triangle);
    var a = equation[0];
    var b = equation[1];
    var c = equation[2];
    var d = equation[3];
    var Cx = camera[0];
    var Cy = camera[1];
    var Cz = camera[2];
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
    //var matAInv = math.inv(matA);
    var matAInv = inverseMatrix(matA)
    //var matAns = math.multiply(matAInv, matB);
    var matAns = multiplyMatrixVec(matAInv, matB);
    //console.log(matA);
    //console.log(matB);
    //console.log(matAns);

    if (matAns[0] < 0 || matAns[1] < 0 || matAns[2] < 0){
        return false;
    }
    return true;
}



function draw(ctx, backgroundColor){
    console.log("Running");
    var xlim = width / pixelSize;
    var ylim = height / pixelSize;
    //var pixel = 0;
    for (let y = 0; y < ylim; y++) {
        for (let x = 0; x < xlim; x++) {
            var possibleTriangles = [];
            var possibleLights = [];
            var isTriangle = false;
            for (let tri = 0; tri < triangles.length; tri++) {
                var Px = pixelSize * x - camera[0]/2;
                var Py = pixelSize * y - camera[1]/2;
                var Pz = focalLength;
                var triangle = triangles[tri];
                var equation = equationOfAPlane(triangle);
                var intersection = calcIntersection(Px, Py, Pz, triangle, equation);
                //console.log(intersection);
                if (Number.isNaN(intersection[0]) || intersection[0] === Infinity || intersection[0] === -Infinity){
                    continue;
                }
                if (Number.isNaN(intersection[1]) || intersection[1] === Infinity || intersection[1] === -Infinity) {
                    continue;
                }
                if (Number.isNaN(intersection[2]) || intersection[2] === Infinity || intersection[2] === -Infinity) {
                    continue;
                }
                var isInside = checkIfInsideTriangle(triangle, intersection);
                //console.log(isInside);
                if (isInside){
                    var lightRange = 1000;
                    var lightIntensity = (intersection[0] - camera[0]) * (intersection[0] - camera[0]) + (intersection[1] - camera[1]) * (intersection[1] - camera[1]) + (intersection[2] - camera[2]) * (intersection[2] - camera[2]);
                    var light = (lightRange * lightRange) / (4 * 3.1415926 * lightIntensity);
                    
                    var normalVector = normaliseVector(equation.slice(0, 3));
                    var lightIntensity1 = Math.abs(dotProduct(normalVector, lightVector) * 180);
                    if (lightIntensity1 < 0) {
                        //lightIntensity1 = 0;
                    }
                    var light1 = lightIntensity1 / 180;
                    
                    
                    var finalLight = (1*light1 + 35*light)/36;
                    possibleLights.push(finalLight);
                    possibleTriangles.push(intersection[3]);
                    isTriangle = true;
                }
                
            }
            if (isTriangle){
                var correctTriangle = possibleTriangles.min();
                var correctLight = possibleLights[possibleTriangles.indexOf(correctTriangle)];
                var light = correctLight;
                var r = 210 * light;
                var g = 210 * light;
                var b = 210 * light;
                
                for (let y1 = 0; y1 < pixelSize; y1++) {
                    for (let x1 = 0; x1 < pixelSize; x1++) {
                        //console.log(y);
                        var index = ((y * pixelSize + y1) * width + (x * pixelSize + x1)) * 4;

                        pixelData[index + 0] = Math.ceil(r);
                        pixelData[index + 1] = Math.ceil(g);
                        pixelData[index + 2] = Math.ceil(b);
                        pixelData[index + 3] = 255;

                    }

                }
                
                //ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';

                //ctx.fillStyle = "blue";
                //ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
            }else{
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
            //pixel+=4;

        }
        
    }
}

var rotateZ3D = function (theta) {
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    for (var n = 0; n < nodes.length; n++) {
        var node = nodes[n];
        var x = node[0]-camera[0];
        var y = node[1]-camera[1];
        node[0] = round3(x * cosTheta - y * sinTheta + camera[0]);
        node[1] = round3(y * cosTheta + x * sinTheta + camera[1]);
    }
};

var rotateX3D = function (theta) {
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    for (var n = 0; n < nodes.length; n++) {
        var node = nodes[n];
        var y = node[1]-camera[1];
        var z = node[2] - camera[2];
        node[1] = round3(y * cosTheta - z * sinTheta + camera[1]);
        node[2] = round3(z * cosTheta + y * sinTheta + camera[2]);
    }
    // var y = lightVector[1]
    // var z = lightVector[2];
    // lightVector[1] = round3(y * cosTheta - z * sinTheta );
    // lightVector[2] = round3(z * cosTheta + y * sinTheta );
    // lightVector = normaliseVector(lightVector);
};

var rotateY3D = function (theta) {
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    for (var n = 0; n < nodes.length; n++) {
        var node = nodes[n];
        var x = node[0] - camera[0];
        var z = node[2] - camera[2];
        node[0] = round3(x * cosTheta + z * sinTheta + camera[0]);
        node[2] = round3(z * cosTheta - x * sinTheta + camera[2]);
    }
    // var x = lightVector[0]
    // var z = lightVector[2];
    // lightVector[0] = round3(x * cosTheta + z * sinTheta);
    // lightVector[2] = round3(z * cosTheta - x * sinTheta);

    // lightVector = normaliseVector(lightVector);
};