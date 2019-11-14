var app = {};
app.showFromObject = function() {
  ons
    .openActionSheet({
      title: "PayPal",
      cancelable: true,
      buttons: [
        "consent",
        {
          label: "Cancel",
          icon: "md-close"
        }
      ]
    })
    .then(function(index) {
      console.log("index: ", index);
      if (index == 0) {
        ons.notification.alert("Thank you for using this time.");
      }
      if (index == 1) {
      }
    });
};

function mab() {
  console.log("mab");
  $("#myNavigator")[0].pushPage("mab.html");
}

document.addEventListener("init", function(event) {
  var page = event.target;
  if (page.id === "Order_Confirmation") {
    console.log("จ่ายเงิน");

    var show_main_menu = (main_menu = localStorage.getItem("main_menu"));
    console.log("show_main_menu: " + show_main_menu);

    var show_sub_menu = result_id;
    console.log("show_sub_menu_id :" + show_sub_menu);

    var show_sub_name = result_menu;
    console.log("show_sub_name :" + show_sub_name);

    var show_sub_mony = result_mony;
    console.log("show_sub_mony :" + show_sub_mony);

    var sum_mony = prices;
    console.log("sum_mony :" + sum_mony);

    var Address_use = select_locationmap_lat + "<br>" + select_locationmap_lng;
    var Contact = "080-8624087";

    $(".show_sub").empty();
    var subhas = `<ons-list-item>
    <ons-row>
        <b style="width: 70%; font-size: 12px;">Name of Dish</b>
        <b style="width: 30%; font-size: 12px;">Price</b>
    </ons-row>
</ons-list-item>`;
    $(".show_sub_has").append(subhas);
    for (var i = 0; i < show_sub_name.length; i++) {
      var subitem =
        `<ons-list-item>
          <ons-row>
          <div style="width: 70%; font-size: 12px;"> <b>` +
        show_sub_name[i] +
        `</b></div>
          <div style="width: 30%; font-size: 12px;"> <b>$` +
        show_sub_mony[i] +
        `</b></div>
          </ons-row>
      </ons-list-item>`;
      $(".show_sub").append(subitem);
    }

    $("#many").empty();
    var many_item =
      `<ons-row>
    <ons-list-item>
    <b style="font-size: 15px; width: 30%;"> Total: </b>
    <b style="font-size: 13px; width: 70%;"> $` +
      sum_mony +
      `</b>
    </ons-list-item>
    <p></p>
    <ons-list-item>
    <b style="font-size: 15px; width: 30%;"> Contact: </b>
    <b style="font-size: 13px; width: 70%;">` +
      Contact +
      `</b>
    </ons-list-item>
    <p></p>
    <ons-list-item onclick="mab();">
    <b style="font-size: 15px; width: 30%;"> Address: </b>
    <b style="font-size: 13px; width: 70%;">` +
      Address_use +
      `</b>
    </ons-list-item>
    </ons-row>`;
    $("#many").append(many_item);

    //1
    if (show_main_menu == "101") {
      $(".show_test").empty();
      db.collection("img_Chicken_rice")
        .where("id", "==", "101")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `
                <div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "102") {
      $(".show_test").empty();
      db.collection("img_Chicken_rice")
        .where("id", "==", "102")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "103") {
      $(".show_test").empty();
      db.collection("img_Chicken_rice")
        .where("id", "==", "103")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "104") {
      $(".show_test").empty();
      db.collection("img_Chicken_rice")
        .where("id", "==", "104")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "105") {
      $(".show_test").empty();
      db.collection("img_Chicken_rice")
        .where("id", "==", "105")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "106") {
      $(".show_test").empty();
      db.collection("img_Chicken_rice")
        .where("id", "==", "106")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    //2
    if (show_main_menu == "201") {
      $(".show_test").empty();
      db.collection("img_Dim_sum")
        .where("id", "==", "201")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "202") {
      $(".show_test").empty();
      db.collection("img_Dim_sum")
        .where("id", "==", "202")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "203") {
      $(".show_test").empty();
      db.collection("img_Dim_sum")
        .where("id", "==", "203")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "204") {
      $(".show_test").empty();
      db.collection("img_Dim_sum")
        .where("id", "==", "204")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "205") {
      $(".show_test").empty();
      db.collection("img_Dim_sum")
        .where("id", "==", "205")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "206") {
      $(".show_test").empty();
      db.collection("img_Dim_sum")
        .where("id", "==", "206")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    //3
    if (show_main_menu == "301") {
      $(".show_test").empty();
      db.collection("img_Fast_food")
        .where("id", "==", "301")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                <img src="${
                  doc.data().photo
                }" style="width: 200px; height: auto;">
            </div>
            <div style="width: 100%; text-align: center;">
                <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
            </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "302") {
      $(".show_test").empty();
      db.collection("img_Fast_food")
        .where("id", "==", "302")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                <img src="${
                  doc.data().photo
                }" style="width: 200px; height: auto;">
            </div>
            <div style="width: 100%; text-align: center;">
                <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
            </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "303") {
      $(".show_test").empty();
      db.collection("img_Fast_food")
        .where("id", "==", "303")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                <img src="${
                  doc.data().photo
                }" style="width: 200px; height: auto;">
            </div>
            <div style="width: 100%; text-align: center;">
                <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
            </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "304") {
      $(".show_test").empty();
      db.collection("img_Fast_food")
        .where("id", "==", "304")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                <img src="${
                  doc.data().photo
                }" style="width: 200px; height: auto;">
            </div>
            <div style="width: 100%; text-align: center;">
                <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
            </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "305") {
      $(".show_test").empty();
      db.collection("img_Fast_food")
        .where("id", "==", "305")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                <img src="${
                  doc.data().photo
                }" style="width: 200px; height: auto;">
            </div>
            <div style="width: 100%; text-align: center;">
                <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
            </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "306") {
      $(".show_test").empty();
      db.collection("img_Fast_food")
        .where("id", "==", "306")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                <img src="${
                  doc.data().photo
                }" style="width: 200px; height: auto;">
            </div>
            <div style="width: 100%; text-align: center;">
                <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
            </div>`;
            $(".show_test").append(item);
          });
        });
    }

    //4
    if (show_main_menu == "401") {
      $(".show_test").empty();
      db.collection("img_Noodle")
        .where("id", "==", "401")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "402") {
      $(".show_test").empty();
      db.collection("img_Noodle")
        .where("id", "==", "402")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "403") {
      $(".show_test").empty();
      db.collection("img_Noodle")
        .where("id", "==", "403")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "404") {
      $(".show_test").empty();
      db.collection("img_Noodle")
        .where("id", "==", "404")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "405") {
      $(".show_test").empty();
      db.collection("img_Noodle")
        .where("id", "==", "405")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "406") {
      $(".show_test").empty();
      db.collection("img_Noodle")
        .where("id", "==", "406")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "407") {
      $(".show_test").empty();
      db.collection("img_Noodle")
        .where("id", "==", "407")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    //5
    if (show_main_menu == "501") {
      $(".show_test").empty();
      db.collection("img_Pearl_tea")
        .where("id", "==", "501")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "502") {
      $(".show_test").empty();
      db.collection("img_Pearl_tea")
        .where("id", "==", "502")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "503") {
      $(".show_test").empty();
      db.collection("img_Pearl_tea")
        .where("id", "==", "503")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "504") {
      $(".show_test").empty();
      db.collection("img_Pearl_tea")
        .where("id", "==", "504")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "505") {
      $(".show_test").empty();
      db.collection("img_Pearl_tea")
        .where("id", "==", "505")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "506") {
      $(".show_test").empty();
      db.collection("img_Pearl_tea")
        .where("id", "==", "506")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "507") {
      $(".show_test").empty();
      db.collection("img_Pearl_tea")
        .where("id", "==", "507")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "508") {
      $(".show_test").empty();
      db.collection("img_Pearl_tea")
        .where("id", "==", "508")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    //6
    if (show_main_menu == "601") {
      $(".show_test").empty();
      db.collection("img_Sweetmeat")
        .where("id", "==", "601")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "602") {
      $(".show_test").empty();
      db.collection("img_Sweetmeat")
        .where("id", "==", "602")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "603") {
      $(".show_test").empty();
      db.collection("img_Sweetmeat")
        .where("id", "==", "603")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "604") {
      $(".show_test").empty();
      db.collection("img_Sweetmeat")
        .where("id", "==", "604")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "605") {
      $(".show_test").empty();
      db.collection("img_Sweetmeat")
        .where("id", "==", "605")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }

    if (show_main_menu == "606") {
      $(".show_test").empty();
      db.collection("img_Sweetmeat")
        .where("id", "==", "606")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<div style="width: 100%; text-align: center;">
                    <img src="${
                      doc.data().photo
                    }" style="width: 200px; height: auto;">
                </div>
                <div style="width: 100%; text-align: center;">
                    <h1 style="font-size: 18px;"> ${doc.data().name} </h1>
                </div>`;
            $(".show_test").append(item);
          });
        });
    }
  }
});