var url = "";
function myFunction() {
  url = "../pdf/docs/12782.pdf";
  pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
  pdfDoc = pdfDoc_;

  // Initial/first page rendering
  renderPage(pageNum);
});

  }
var pdfjsLib = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

var pdfDoc = null,
    pageNum = 1,
    pageRendering = false,
    pageNumPending = null,
    canvas = document.getElementById("pdf-render"),
    ctx = canvas.getContext('2d');

/**
 * Get page info from document, resize canvas accordingly, and render page.
 * @param num Page number.
 */
 
  //console.log(h);
function renderPage(num) {
  pageRendering = true;
  // Using promise to fetch the page
  pdfDoc.getPage(num).then(function(page) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.height=h;
    var viewport = page.getViewport(canvas.height / page.getViewport(1).height);
    //canvas.height = viewport.height;
    canvas.width = viewport.width;
    
    if(canvas.width>w){
      canvas.width = w;
      var viewport = page.getViewport(canvas.width / page.getViewport(1).width);
    //canvas.height = viewport.height;
    canvas.height = viewport.height;
    }
     // b.style.height = canvas.height+"px";
     // b.style.width = canvas.width+"px";    
    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    var renderTask = page.render(renderContext);

    // Wait for rendering to finish
    renderTask.promise.then(function() {
      pageRendering = false;
      if (pageNumPending !== null) {
        // New page rendering is pending
        renderPage(pageNumPending);
        pageNumPending = null;
      }
    });
  });

  // Update page counters
  
}

/**
 * If another page rendering in progress, waits until the rendering is
 * finised. Otherwise, executes rendering immediately.
 */
// if(window.innerHeight > window.innerWidth){
//    queueRenderPage(pageNum);
// }
function queueRenderPage(num) {
  if (pageRendering) {
    pageNumPending = num;
  } else {
    renderPage(num);
  }
}

/**
 * Displays previous page.
 */
function onPrevPage() {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
}


/**
 * Displays next page.
 */
function onNextPage() {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
}

window.addEventListener("orientationchange", function() {
  // Announce the new orientation number
  
  queueRenderPage(pageNum);
}, false);
window.addEventListener("resize", function() {
  // Get screen size (inner/outerWidth, inner/outerHeight)
  queueRenderPage(pageNum);
}, false);
/**
 * Asynchronously downloads PDF.
 */

function esc() {
 pageNum=1
 }
document.querySelector('#prev-page').addEventListener('click', onPrevPage);
document.querySelector('#next-page').addEventListener('click', onNextPage);
document.querySelector('#esc').addEventListener('click', esc);
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        onPrevPage();
    }
    else if(event.keyCode == 39) {
        onNextPage();
    }
     else if(event.keyCode == 27) {
         esc();
     }
});
