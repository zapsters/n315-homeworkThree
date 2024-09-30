export function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
    })
      .done(function () {})
      .fail(function (e) {
        // console.log(e);
        alert(`${e.status} ${e.statusText}`);
        $("#app").html(`${e.status} ${e.statusText}`);
      });
  } else {
    $.get(`pages/contact.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
    });
  }
}
