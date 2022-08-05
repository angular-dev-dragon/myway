function readURL(input) {
  var inputfile = $("#imageUpload");
  if (inputfile.files && inputfile.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#imagePreview").css(
        "background-image",
        "url(" + e.target.result + ")"
      );
      $("#imagePreview").hide();
      $("#imagePreview").fadeIn(650);
    };
    reader.readAsDataURL(inputfile.files[0]);
  }
}
$("#imageUpload").change(function () {
  readURL(this);
});
