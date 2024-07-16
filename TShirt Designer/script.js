//generic image vars
var URLPrefix = "https://res.cloudinary.com/demo-robert/q_auto,f_auto/",
  textString = "%20",
  textVariable1 = "$text_!",
  textVariable2 = "!/o_0/",
  logoID = "sample,o_0",
  textFont = "arial",
  newHexColor = "white",
  URLSuffix = "shirt_only.jpg",
  textureOpacity = "0",
  logoResult = "";

//model image vars
var modelOverlayString1 = "l_",
  modelOverlayString2 = ",w_300,ar_30:25,c_fit,y_-200,x_-5,e_overlay/",
  modelTextTransform1 = "l_text:",
  modelTextTransform2 = "_100_bold:$(text),y_-40,co_rgb:333,o_70,w_300/",
  modelDisplace = "l_shirt_displace,e_displace,x_10,y_10/",
  modelShirtUnderlay1 = "u_shirt_only,e_replace_color:";
(modelShirtUnderlay2 = ":60:white/"),
  (modelTexture = "l_heather_texture,o_"),
  (modelUnderlay = "/u_model2/");

//hanging image vars
var hangingOverlayString1 = "l_",
  hangingOverlayString2 = ",w_220,ar_30:25,c_fit,y_-40,x_-5,e_overlay/",
  hangingTextTransform1 = "l_text:",
  hangingTextTransform2 = "_100_bold:$(text),y_90,co_rgb:333,o_70,w_250/",
  hangingDisplace = "l_hanging_displace,e_displace,x_10,y_10/",
  hangingShirtUnderlay1 = "u_Hanging_T-Shirt_v83je9,e_replace_color:",
  hangingShirtUnderlay2 = ":60:white/",
  hangingTexture1 = "l_hanging-shirt-texture,o_",
  hangingTexture2 = "/l_Hanger_qa2diz,fl_relative,w_1.0/";

//laying image vars
var layingOverlayString1 = "l_",
  layingOverlayString2 = ",w_330,ar_30:25,c_fit,y_-30,x_-5,e_overlay/",
  layingTextTransform1 = "l_text:",
  layingTextTransform2 = "_100_bold:$(text),y_150,co_rgb:333,o_70,w_350/",
  layingDisplace = "l_laying_displace,e_displace,x_10,y_10/",
  layingShirtUnderlay1 = "u_laying-shirt_xqstgr,e_replace_color:",
  layingShirtUnderlay2 = ":60:white/",
  layingTexture = "l_laying-shirt-texture,o_";

//end image vars

//Invoke Color Swatch and set settings
function hexToRgb(hex) {
  var result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
$(document).ready(function () {
  $(".basic").spectrum({
    color: "#f00",
    change: function (color) {
      $("#basic-log").text("change called: " + color.toHexString());
    },
  });

  $("#full").spectrum({
    color: "#ECC",
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxSelectionSize: 10,
    preferredFormat: "rgb",
    localStorageKey: "spectrum.demo",
    move: function (color) {},
    show: function () {},
    beforeShow: function () {},
    hide: function () {},
    change: function (color) {
      var firstSwatch = $("#colorList")[0].children[0].children[0].src;
      newHexColor = color.toHexString().split("#")[1];
      var hexColor = color.toHexString().split("#")[1],
        newSrc =
          "//res.cloudinary.com/demo-robert/image/upload/w_30,h_30/e_replace_color:" +
          hexColor +
          ":60:white/l_heather_texture,o_0,w_30,h_30,c_crop/white-bar.jpg";
      $("#colorList").append(
        '<li id="' + hexColor + '"><img src="' + newSrc + '" /></li>'
      );
      colorSwatchClick();
    },
    palette: [
      [
        "rgb(0, 0, 0)",
        "rgb(67, 67, 67)",
        "rgb(102, 102, 102)",
        "rgb(204, 204, 204)",
        "rgb(217, 217, 217)",
        "rgb(255, 255, 255)",
      ],
      [
        "rgb(152, 0, 0)",
        "rgb(255, 0, 0)",
        "rgb(255, 153, 0)",
        "rgb(255, 255, 0)",
        "rgb(0, 255, 0)",
        "rgb(0, 255, 255)",
        "rgb(74, 134, 232)",
        "rgb(0, 0, 255)",
        "rgb(153, 0, 255)",
        "rgb(255, 0, 255)",
      ],
      [
        "rgb(230, 184, 175)",
        "rgb(244, 204, 204)",
        "rgb(252, 229, 205)",
        "rgb(255, 242, 204)",
        "rgb(217, 234, 211)",
        "rgb(208, 224, 227)",
        "rgb(201, 218, 248)",
        "rgb(207, 226, 243)",
        "rgb(217, 210, 233)",
        "rgb(234, 209, 220)",
        "rgb(221, 126, 107)",
        "rgb(234, 153, 153)",
        "rgb(249, 203, 156)",
        "rgb(255, 229, 153)",
        "rgb(182, 215, 168)",
        "rgb(162, 196, 201)",
        "rgb(164, 194, 244)",
        "rgb(159, 197, 232)",
        "rgb(180, 167, 214)",
        "rgb(213, 166, 189)",
        "rgb(204, 65, 37)",
        "rgb(224, 102, 102)",
        "rgb(246, 178, 107)",
        "rgb(255, 217, 102)",
        "rgb(147, 196, 125)",
        "rgb(118, 165, 175)",
        "rgb(109, 158, 235)",
        "rgb(111, 168, 220)",
        "rgb(142, 124, 195)",
        "rgb(194, 123, 160)",
        "rgb(166, 28, 0)",
        "rgb(204, 0, 0)",
        "rgb(230, 145, 56)",
        "rgb(241, 194, 50)",
        "rgb(106, 168, 79)",
        "rgb(69, 129, 142)",
        "rgb(60, 120, 216)",
        "rgb(61, 133, 198)",
        "rgb(103, 78, 167)",
        "rgb(166, 77, 121)",
        "rgb(91, 15, 0)",
        "rgb(102, 0, 0)",
        "rgb(120, 63, 4)",
        "rgb(127, 96, 0)",
        "rgb(39, 78, 19)",
        "rgb(12, 52, 61)",
        "rgb(28, 69, 135)",
        "rgb(7, 55, 99)",
        "rgb(32, 18, 77)",
        "rgb(76, 17, 48)",
      ],
    ],
  });
});

//Invoke magnifier
$(document).ready(function () {
  var evt = new Event(),
    mag = new Magnifier(evt);
  mag.attach({
    thumb: "#mainImageTag",
    largeWrapper: "preview",
    zoom: "4",
  });
  $("#mainImage").hover(
    function () {
      $("#preview").addClass("show");
    },
    function () {
      $("#preview").removeClass("show");
    }
  );
});

//open upload Widget and set response variable
document.getElementById("add_a_logo").addEventListener(
  "click",
  function () {
    cloudinary.openUploadWidget(
      { cloud_name: "demo-robert", upload_preset: "pagespeed" },
      function (error, result) {
        if (!result) return;
        window.logoResult = result[0];
        addLogo();
      }
    );
  },
  false
);

//loader gif while images are loading
function loader(a) {
  $("#mainImageLoading").removeClass("hide");
  var newImage = new Image();
  newImage.src = a;
  $(newImage)
    .one("load", function () {
      $("#mainImageLoading").addClass("hide");
    })
    .each(function () {
      if (this.complete) $(this).load();
    });
}

//Update Image URLS
function updateImageURLs() {
  var mainImageURL = (function () {
    if ($("#thumbs .active")[0].id == "hangingThumb") {
      return (
        URLPrefix +
        textVariable1 +
        textString +
        textVariable2 +
        hangingOverlayString1 +
        logoID +
        hangingOverlayString2 +
        hangingTextTransform1 +
        textFont +
        hangingTextTransform2 +
        hangingDisplace +
        hangingShirtUnderlay1 +
        newHexColor +
        hangingShirtUnderlay2 +
        hangingTexture1 +
        textureOpacity +
        hangingTexture2 +
        "w_700,ar_1:1,c_pad/" +
        URLSuffix
      );
    } else if ($("#thumbs .active")[0].id == "layingThumb") {
      return (
        URLPrefix +
        textVariable1 +
        textString +
        textVariable2 +
        layingOverlayString1 +
        logoID +
        layingOverlayString2 +
        layingTextTransform1 +
        textFont +
        layingTextTransform2 +
        layingDisplace +
        layingShirtUnderlay1 +
        newHexColor +
        layingShirtUnderlay2 +
        layingTexture +
        textureOpacity +
        "/w_700,ar_1:1,c_pad/" +
        URLSuffix
      );
    } else {
      return (
        URLPrefix +
        textVariable1 +
        textString +
        textVariable2 +
        modelOverlayString1 +
        logoID +
        modelOverlayString2 +
        modelTextTransform1 +
        textFont +
        modelTextTransform2 +
        modelDisplace +
        modelShirtUnderlay1 +
        newHexColor +
        modelShirtUnderlay2 +
        modelTexture +
        textureOpacity +
        modelUnderlay +
        "w_700,ar_1:1,c_pad/" +
        URLSuffix
      );
    }
  })();
  //run loader gif until image is loaded
  loader(mainImageURL);
  //set new main image URL
  document.getElementById("mainImageTag").src = mainImageURL;
  document
    .getElementById("mainImageTag")
    .setAttribute(
      "data-large-img-url",
      document.getElementById("mainImageTag").src.replace("w_700,", "")
    );
  document.getElementById("mainImageTag-large").src = document
    .getElementById("mainImageTag")
    .src.replace("w_700,", "");
  //set new Thumbnail URLs
  document.getElementById("hangingThumb").children[0].src =
    URLPrefix +
    textVariable1 +
    textString +
    textVariable2 +
    hangingOverlayString1 +
    logoID +
    hangingOverlayString2 +
    hangingTextTransform1 +
    textFont +
    hangingTextTransform2 +
    hangingDisplace +
    hangingShirtUnderlay1 +
    newHexColor +
    hangingShirtUnderlay2 +
    hangingTexture1 +
    textureOpacity +
    hangingTexture2 +
    "w_75,ar_1:1,c_pad/" +
    URLSuffix;
  document.getElementById("layingThumb").children[0].src =
    URLPrefix +
    textVariable1 +
    textString +
    textVariable2 +
    layingOverlayString1 +
    logoID +
    layingOverlayString2 +
    layingTextTransform1 +
    textFont +
    layingTextTransform2 +
    layingDisplace +
    layingShirtUnderlay1 +
    newHexColor +
    layingShirtUnderlay2 +
    layingTexture +
    textureOpacity +
    "/w_75,ar_1:1,c_pad/" +
    URLSuffix;
  document.getElementById("modelThumb").children[0].src =
    URLPrefix +
    textVariable1 +
    textString +
    textVariable2 +
    modelOverlayString1 +
    logoID +
    modelOverlayString2 +
    modelTextTransform1 +
    textFont +
    modelTextTransform2 +
    modelDisplace +
    modelShirtUnderlay1 +
    newHexColor +
    modelShirtUnderlay2 +
    modelTexture +
    textureOpacity +
    modelUnderlay +
    "w_75,ar_1:1,c_pad/" +
    URLSuffix;
}

//Color-changing when somebody clicks on a color swatch
function colorSwatchClick() {
  $("#colorList li").on("click", function () {
    $("#colorList .active").removeClass("active");
    $(this).addClass("active");
    //set window color variable
    newHexColor = $("#colorList .active")[0].id;
    //update image URLS
    updateImageURLs();
    //Set flat color swatch color
    document.getElementById("flat").children[0].src =
      "https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30/e_replace_color:" +
      newHexColor +
      ":60:white/l_heather_texture,o_0,w_30,h_30,c_crop/white-bar.jpg";
    //Set heather texture swatch color
    document.getElementById("heatherTexture").children[0].src =
      "https://res.cloudinary.com/demo-robert/image/upload/w_30,h_30/e_replace_color:" +
      newHexColor +
      ":60:white/l_heather_texture,o_30,w_30,h_30,c_crop/white-bar.jpg";
  });
}

//Thumnail to main image
function thumbToMain() {
  $("#thumbs li").on("click", function () {
    $("#thumbs .active").removeClass("active");
    $(this).addClass("active");
    updateImageURLs();
  });
}

//Texture add/remove
function textureSwap() {
  $("#texture li").on("click", function () {
    $("#texture .active").removeClass("active");
    $(this).addClass("active");
    //set texture opacity window variable
    if ($("#texture .active")[0].id == "flat") {
      textureOpacity = "0";
    } else {
      textureOpacity = "30";
    }
    //rebuild URLS
    updateImageURLs();
    var newTexture = "texture,o_" + textureOpacity;
    var numColors = document.getElementById("colorList").children.length;
    for (var i = 0; i < numColors; i++) {
      document.getElementById("colorList").children[i].children[0].src =
        document
          .getElementById("colorList")
          .children[i].children[0].src.replace(/texture,o_([^,]+)/, newTexture);
    }
  });
}

//add logo to images
function addLogo() {
  logoID = logoResult.public_id;
  var newLogoSrc =
    "//res.cloudinary.com/demo-robert/q_auto,f_auto,h_30/" + logoID;
  $("#logo-list").prepend(
    '<li id="' + logoID + '"><img src="' + newLogoSrc + '"/></li>'
  );
  updateImageURLs();
}
function applyLogo() {
  $("#logo-list li").on("click", function () {
    $("#logo-list .active").removeClass("active");
    $(this).addClass("active");
    logoID = $("#logo-list .active")[0].id;
    updateImageURLs();
    applyLogo();
  });
}

//add text to images
function addText() {
  $("#addText").on("click", function () {
    textString = $("#shirtText").val();
    textFont = $("#fontList").val();
    updateImageURLs();
  });
}

//initialize click watchers
$(document).ready(function () {
  colorSwatchClick();
  thumbToMain();
  textureSwap();
  addText();
  applyLogo();
});
