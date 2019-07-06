<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="css/style.css" />
  <style>
    .modal-dialog {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.modal-body{
  padding:0;
  margin: 0;
}
  </style>
</head>
<body>
  <button class="btn btn-primary btn-lg"  data-toggle="modal" data-target="#myModal" onclick="myFunction()"
  >
  pdf
</button>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
      
          <div class="a" id="a">
          <div class="b" id="b">
                <div class="e">
                  <div class="c"> 
                    <div class="j"> 
                    <button class="btn" id="prev-page">
                      <i class="fas fa-angle-left fa-2x"></i>
                    </button>
                  </div>
                  </div>
                  <div class="d">
                    <div class="h">
                    <button type="button" class="btn btn-default" data-dismiss="modal" id="esc" style="margin-left:-7px !important">
                      <i class="fas fa-times fa-2x"></i>
                    </button>
                    </div>
                    <div class="i">
                    <button class="btn" id="next-page">
                      <i class="fas fa-angle-right fa-2x"></i>
                    </button>
                    </div>
                  </div>
                </div>
                <canvas id="pdf-render" ></canvas>
              
          </div>    
          </div>
        <script src="https://mozilla.github.io/pdf.js/build/pdf.js"></script>
        <script src="js/main.js"></script>
      
    </div>
</div>
</body>
</html>