// Global constants
const canvas = document.getElementById('glCanvas'); // Get the canvas element 
const gl = canvas.getContext('webgl2'); // Get the WebGL2 context

if (!gl) {
    console.error('WebGL 2 is not supported by your browser.');
}

canvas.width = 500;
canvas.height = 500;

// Initialize WebGL settings: viewport and clear color
let width = canvas.width/2;
let height = canvas.height/2;
gl.viewport(0, 0, width, height);

render();

// Render loop
function render() {
    gl.enable(gl.SCISSOR_TEST);
    gl.scissor(0, 0, width, height);
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);  

    gl.scissor(width, 0, width, height);
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);  

    gl.scissor(0, height, width, height);
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);  

    gl.viewport(width, height, width, height);
    gl.scissor(width, height, width, height);
    gl.clearColor(0.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);  
    
    gl.disable(gl.SCISSOR_TEST);
}

// Resize viewport when window size changes
window.addEventListener('resize', () => {
    canvas.width = Math.min(window.innerWidth, window.innerHeight);
    canvas.height = Math.min(window.innerHeight, window.innerWidth);
    width = canvas.width/2;
    height = canvas.height/2;
    gl.viewport(0, 0, width, height);
    render();
});

