
var roomData = {
    id: 0,
    shadow: false,
    color: {
        r: 210,
        g: 210,
        b: 210
    },
    rotate: true,
    alpha: 1,
    isTransparent: false,
    collide: false,
    x: -1000,
    dx: 2000,
    y: 0,
    dy: 600,
    z: -1000,
    dz: 2000
}
var platformData = {
    id: 1,
    shadow: true,
    color: {
        r: 66,
        g: 135,
        b: 245
    },
    rotate: true,
    isTransparent: false,
    alpha: 1,
    collide: true,
    x: 10,
    dx: -510,
    y: 50,
    dy: 100,
    z: -500,
    dz: 1010,
    cx: -500,
    cdx: 510,
    cy: 50,
    cdy: 100,
    cz: -500,
    cdz: 1010,


}

var boxData = {
    id: 3,
    shadow: true,
    color: {
        r: 235,
        g: 64,
        b: 52
    },
    rotate: true,
    isTransparent: false,
    alpha: 1,
    collide: false,
    x: 900,
    dx: 100,
    y: 50,
    dy: 500,
    z: -900,
    dz: 100

}

var teapotData = {
    id: 2,
    shadow: true,
    color: {
        r: 255,
        g: 255,
        b: 255
    },
    isTransparent: false,
    alpha: 1,
    rotate:true,
    rx: 0,
    ry: 0.01,
    rz: 0,
    collide: false,
    x: 500,
    dx: 100,
    y: 400,
    dy: 500,
    z: 700,
    dz: 100

}

var teddyBearData = {
    id: 2,
    shadow: true,
    color: {
        r: 255,
        g: 255,
        b: 255
    },
    isTransparent: false,
    alpha: 1,
    rotate: true,
    rx: 0,
    ry: 0.01,
    rz: 0,
    collide: false,
    x: 500,
    dx: 100,
    y: 400,
    dy: 500,
    z: 700,
    dz: 100

}


window.onload = () => {
    setUpComputerVars(900, 600, 400, 1);
    
    addCuboidL(roomData, false);
    addCuboidL(platformData, false);
    addCuboidL(boxData, true);
    addLight([200, 350, 200]);
    addLight([450, 250, -450]);
    loadObj(teapotVerts, teapotFaces, TeapotNormals, teapotData, 2, true);
    load();

    RenderFrames();

}
