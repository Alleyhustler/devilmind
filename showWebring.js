var nameSelfWebring = "Lillith";
var relationshipSelfWebring = "is married to";
var charnameSelfWebring = "Caius Cosades";
var seriesSelfWebring = "Morrowind";
var imgurlSelfWebring = "https://i.ibb.co/HNft54c/Caius-Cosades.jpg";

var templateWebring = document.createElement("selfinsertwebring");
templateWebring.innerHTML =
  "<style> #templateWebring a {color: #000; font-weight:bold} #templateWebring a:hover{font-weight:bold; color:#000}  #templateWebring {width:300px !important; text-align:center !important; height:164px !important; border:2px solid #441003 !important; margin: auto !important; background-image:url('images/background/morrowindbg.jpg'); background-size:cover} #webringiconbox {border:2px solid #441003 !important; position:relative !important; overflow:hidden !important;   height:100px !important; width:100px !important; left:8px !important; padding:0px !important; margin:0px !important; margin-top:8px !important; box-sizing:content-box !important; max-width:100% !important; justify-content:start !important; display:block !important; clear:none !important } #iconWebring {width:100px !important; overflow:hidden !important; height:100px !important; margin:0px !important; padding:0px !important; box-sizing:content-box !important} #webringdescbox {width:166px !important; height:100px !important; margin-left:122px !important; margin-top:-102px !important; border:1px dashed #441003 !important} #webringdesc{line-height: normal !important; font-weight:normal !important; padding:2px !important; width:160px !important; color:#000 !important; font-family:Verdana !important; font-size:small !important; margin:auto !important; text-align:center !important; position:relative !important; top:50% !important;  -ms-transform: translateY(-50%) !important; -webkit-transform: translateY(-50%) !important; transform: translateY(-50%) !important;} #webringlinks {line-height:normal !important; font-weight:normal !important; width:278px !important; margin:auto !important; height:38px !important; margin-top:6px !important} #linkparaWebring {font-family:Verdana !important; color:#000 !important; font-size:small !important; 	margin:auto !important; line-height: normal !important; text-align:center !important;	margin-top:3px !important; padding:0px !important} </style> <div id='templateWebring'> <div id='webringiconbox'> <img id='iconWebring' src='" +
  imgurlSelfWebring +
  "'/> </div> <div id='webringdescbox'> <p id='webringdesc'> <strong>" +
  nameSelfWebring +
  "</strong> " +
  relationshipSelfWebring +
  "<br /> <strong>" +
  charnameSelfWebring +
  "</strong> from <strong>" +
  seriesSelfWebring +
  "</strong>! </p> </div> <div id='webringlinks'>	<p id='linkparaWebring'> | <a href='https://webring.koinuko.pink/members.php' target='_PARENT'>Members List</a> | <br/>	Part of the <a href='https://webring.koinuko.pink/members.php' target='_PARENT'>Self-Insert Webring</a></p> </div> </div>";
document.getElementById("selfinsertwebring").appendChild(templateWebring);
