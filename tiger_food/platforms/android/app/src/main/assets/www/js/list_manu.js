document.addEventListener("init", function(event) {
  var page = event.target;

  if (page.id === "list_manu") {
    console.log("manu list");

    $("#shop").click(function() {
      $("#myNavigator")[0].pushPage("Order_Confirmation.html");
    });

    var show_shopid = $("#myNavigator")[0].topPage.data.shopid;

    $("#show_img").empty();
    if (show_shopid == "101") {
      db.collection("img_Chicken_rice")
        .where("id", "==", "101")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">
                    ${doc.data().name}
                </div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "102") {
      db.collection("img_Chicken_rice")
        .where("id", "==", "102")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "103") {
      db.collection("img_Chicken_rice")
        .where("id", "==", "103")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "104") {
      db.collection("img_Chicken_rice")
        .where("id", "==", "104")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "105") {
      db.collection("img_Chicken_rice")
        .where("id", "==", "105")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "106") {
      db.collection("img_Chicken_rice")
        .where("id", "==", "106")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
            <div style="width: 12%;">
              <p style="color: black; font-size: 15px;" class="font">
                ที่อยู่: </p>
            </div>
            <div style="width: 88%;">
              <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().address} </p>
            </div>
          </ons-row>
          <ons-row style="width: 100%;">
            <div style="width: 35%;">
              <p style="color: black; font-size: 15px;" class="font">
              เวลาเปิดบริการ: </p>
            </div>
            <div style="width: 65%;">
              <p style="color: black; font-size: 15px;" class="font">
              ${doc.data().open} </p>
            </div>
          </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }

    if (show_shopid == "201") {
      db.collection("img_Dim_sum")
        .where("id", "==", "201")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
            <div style="width: 12%;">
              <p style="color: black; font-size: 15px;" class="font">
                ที่อยู่: </p>
            </div>
            <div style="width: 88%;">
              <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().address} </p>
            </div>
          </ons-row>
          <ons-row style="width: 100%;">
            <div style="width: 35%;">
              <p style="color: black; font-size: 15px;" class="font">
              เวลาเปิดบริการ: </p>
            </div>
            <div style="width: 65%;">
              <p style="color: black; font-size: 15px;" class="font">
              ${doc.data().open} </p>
            </div>
          </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "202") {
      db.collection("img_Dim_sum")
        .where("id", "==", "202")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "203") {
      db.collection("img_Dim_sum")
        .where("id", "==", "203")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
            <div style="width: 12%;">
              <p style="color: black; font-size: 15px;" class="font">
                ที่อยู่: </p>
            </div>
            <div style="width: 88%;">
              <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().address} </p>
            </div>
          </ons-row>
          <ons-row style="width: 100%;">
            <div style="width: 35%;">
              <p style="color: black; font-size: 15px;" class="font">
              เวลาเปิดบริการ: </p>
            </div>
            <div style="width: 65%;">
              <p style="color: black; font-size: 15px;" class="font">
              ${doc.data().open} </p>
            </div>
          </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "204") {
      db.collection("img_Dim_sum")
        .where("id", "==", "204")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "205") {
      db.collection("img_Dim_sum")
        .where("id", "==", "205")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "206") {
      db.collection("img_Dim_sum")
        .where("id", "==", "206")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
            <div style="width: 12%;">
              <p style="color: black; font-size: 15px;" class="font">
                ที่อยู่: </p>
            </div>
            <div style="width: 88%;">
              <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().address} </p>
            </div>
          </ons-row>
          <ons-row style="width: 100%;">
            <div style="width: 35%;">
              <p style="color: black; font-size: 15px;" class="font">
              เวลาเปิดบริการ: </p>
            </div>
            <div style="width: 65%;">
              <p style="color: black; font-size: 15px;" class="font">
              ${doc.data().open} </p>
            </div>
          </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }

    if (show_shopid == "301") {
      db.collection("img_Fast_food")
        .where("id", "==", "301")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "302") {
      db.collection("img_Fast_food")
        .where("id", "==", "302")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "303") {
      db.collection("img_Fast_food")
        .where("id", "==", "303")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
            <div style="width: 12%;">
              <p style="color: black; font-size: 15px;" class="font">
                ที่อยู่: </p>
            </div>
            <div style="width: 88%;">
              <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().address} </p>
            </div>
          </ons-row>
          <ons-row style="width: 100%;">
            <div style="width: 35%;">
              <p style="color: black; font-size: 15px;" class="font">
              เวลาเปิดบริการ: </p>
            </div>
            <div style="width: 65%;">
              <p style="color: black; font-size: 15px;" class="font">
              ${doc.data().open} </p>
            </div>
          </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "304") {
      db.collection("img_Fast_food")
        .where("id", "==", "304")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "305") {
      db.collection("img_Fast_food")
        .where("id", "==", "305")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "306") {
      db.collection("img_Fast_food")
        .where("id", "==", "306")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
            <div style="width: 12%;">
              <p style="color: black; font-size: 15px;" class="font">
                ที่อยู่: </p>
            </div>
            <div style="width: 88%;">
              <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().address} </p>
            </div>
          </ons-row>
          <ons-row style="width: 100%;">
            <div style="width: 35%;">
              <p style="color: black; font-size: 15px;" class="font">
              เวลาเปิดบริการ: </p>
            </div>
            <div style="width: 65%;">
              <p style="color: black; font-size: 15px;" class="font">
              ${doc.data().open} </p>
            </div>
          </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }

    if (show_shopid == "401") {
      db.collection("img_Noodle")
        .where("id", "==", "401")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
            <div style="width: 12%;">
              <p style="color: black; font-size: 15px;" class="font">
                ที่อยู่: </p>
            </div>
            <div style="width: 88%;">
              <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().address} </p>
            </div>
          </ons-row>
          <ons-row style="width: 100%;">
            <div style="width: 35%;">
              <p style="color: black; font-size: 15px;" class="font">
              เวลาเปิดบริการ: </p>
            </div>
            <div style="width: 65%;">
              <p style="color: black; font-size: 15px;" class="font">
              ${doc.data().open} </p>
            </div>
          </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "402") {
      db.collection("img_Noodle")
        .where("id", "==", "402")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "403") {
      db.collection("img_Noodle")
        .where("id", "==", "403")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "404") {
      db.collection("img_Noodle")
        .where("id", "==", "404")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "405") {
      db.collection("img_Noodle")
        .where("id", "==", "405")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "406") {
      db.collection("img_Noodle")
        .where("id", "==", "406")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "407") {
      db.collection("img_Noodle")
        .where("id", "==", "407")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }

    if (show_shopid == "501") {
      db.collection("img_Pearl_tea")
        .where("id", "==", "501")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
            <div style="width: 12%;">
              <p style="color: black; font-size: 15px;" class="font">
                ที่อยู่: </p>
            </div>
            <div style="width: 88%;">
              <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().address} </p>
            </div>
          </ons-row>
          <ons-row style="width: 100%;">
            <div style="width: 35%;">
              <p style="color: black; font-size: 15px;" class="font">
              เวลาเปิดบริการ: </p>
            </div>
            <div style="width: 65%;">
              <p style="color: black; font-size: 15px;" class="font">
              ${doc.data().open} </p>
            </div>
          </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "502") {
      db.collection("img_Pearl_tea")
        .where("id", "==", "502")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
            </div>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "503") {
      db.collection("img_Pearl_tea")
        .where("id", "==", "503")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "504") {
      db.collection("img_Pearl_tea")
        .where("id", "==", "504")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
            <div style="width: 12%;">
              <p style="color: black; font-size: 15px;" class="font">
                ที่อยู่: </p>
            </div>
            <div style="width: 88%;">
              <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().address} </p>
            </div>
          </ons-row>
          <ons-row style="width: 100%;">
            <div style="width: 35%;">
              <p style="color: black; font-size: 15px;" class="font">
              เวลาเปิดบริการ: </p>
            </div>
            <div style="width: 65%;">
              <p style="color: black; font-size: 15px;" class="font">
              ${doc.data().open} </p>
            </div>
          </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "505") {
      db.collection("img_Pearl_tea")
        .where("id", "==", "505")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "506") {
      db.collection("img_Pearl_tea")
        .where("id", "==", "506")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
            <div style="width: 12%;">
              <p style="color: black; font-size: 15px;" class="font">
                ที่อยู่: </p>
            </div>
            <div style="width: 88%;">
              <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().address} </p>
            </div>
          </ons-row>
          <ons-row style="width: 100%;">
            <div style="width: 35%;">
              <p style="color: black; font-size: 15px;" class="font">
              เวลาเปิดบริการ: </p>
            </div>
            <div style="width: 65%;">
              <p style="color: black; font-size: 15px;" class="font">
              ${doc.data().open} </p>
            </div>
          </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "507") {
      db.collection("img_Pearl_tea")
        .where("id", "==", "507")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "508") {
      db.collection("img_Pearl_tea")
        .where("id", "==", "508")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }

    if (show_shopid == "601") {
      db.collection("img_Sweetmeat")
        .where("id", "==", "601")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "602") {
      db.collection("img_Sweetmeat")
        .where("id", "==", "602")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "603") {
      db.collection("img_Sweetmeat")
        .where("id", "==", "603")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "604") {
      db.collection("img_Sweetmeat")
        .where("id", "==", "604")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "605") {
      db.collection("img_Sweetmeat")
        .where("id", "==", "605")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }
    if (show_shopid == "606") {
      db.collection("img_Sweetmeat")
        .where("id", "==", "606")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card style="background-color: rgb(252, 252, 116);">
            <div>
                <div style="text-align:center; font-size: 50px; color: black;" class="font">${
                  doc.data().name
                }</div>
            </div>
            <div style="text-align:center;">
                <img src="${doc.data().rating}" style="width: 150px;">
            </div>
            <ons-row style="width: 100%;">
              <div style="width: 12%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ที่อยู่: </p>
              </div>
              <div style="width: 88%;">
                <p style="color: black; font-size: 15px;" class="font">
                  ${doc.data().address} </p>
              </div>
            </ons-row>
            <ons-row style="width: 100%;">
              <div style="width: 35%;">
                <p style="color: black; font-size: 15px;" class="font">
                เวลาเปิดบริการ: </p>
              </div>
              <div style="width: 65%;">
                <p style="color: black; font-size: 15px;" class="font">
                ${doc.data().open} </p>
              </div>
            </ons-row>
        </ons-card>`;
            $("#show_img").append(item);
          });
        });
    }

    $("#show_list_food").empty();
    if (
      show_shopid == "101" ||
      show_shopid == "102" ||
      show_shopid == "103" ||
      show_shopid == "104" ||
      show_shopid == "105" ||
      show_shopid == "106"
    ) {
      var select_shopid = show_shopid;

      var item = `<ons-card style="background-color: rgb(185, 185, 15);"> 
      <ons-list-header style="text-align:center; padding: 8px; font-size:20px;" class="font"> Menu </ons-list-header> 
      </ons-card>`;
      $("#show_list_food").append(item);
      db.collection("manu_Chicken_rice")
        .orderBy("id", "asc")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item00 = `<ons-card onclick="myToast.toggle(); golist(${
              doc.data().id
            }, ${select_shopid}, ${doc.data().price}, '${doc.data().name}');">
      <ons-row style="width: 100%;">
          <div style="width: 80%;">
              <b>${doc.data().name}</b>
          </div>
          <div style="width: 20%;  text-align: center;">
              <b>${doc.data().price} ฿</b>
          </div>
      </ons-row>
  </ons-card>`;
            $("#show_list_food").append(item00);           
          });
        });

      var item1 = `<ons-card ons-card style="background-color: rgb(185, 185, 15);"> 
      <ons-list-header style="text-align:center; padding: 8px; font-size:20px;" class="font"> Other </ons-list-header> 
      </ons-card> `;
      $("#show_list_food_02").append(item1);
      db.collection("manu_Chicken_rice_other")
        .orderBy("id", "asc")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item01 = `<ons-card onclick="myToast.toggle(); golist(${
              doc.data().id
            }, ${select_shopid}, ${doc.data().price}, '${doc.data().name}');">
      <ons-row style="width: 100%;">
          <div style="width: 80%;">
              <b>${doc.data().name}</b>
          </div>
          <div style="width: 20%;  text-align: center;">
              <b>${doc.data().price} ฿</b>
          </div>
      </ons-row>
  </ons-card>`;
            $("#show_list_food_02").append(item01);
          });
        });
    }

    if (
      show_shopid == "201" ||
      show_shopid == "202" ||
      show_shopid == "203" ||
      show_shopid == "204" ||
      show_shopid == "205" ||
      show_shopid == "206"
    ) {
      var select_shopid = show_shopid;

      db.collection("manu_Dim_sum")
        .orderBy("id", "asc")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card onclick="myToast.toggle(); golist(${
              doc.data().id
            }, ${select_shopid}, ${doc.data().price}, '${doc.data().name}');">
          <ons-row style="width: 100%;">
              <div style="width: 80%;">
                  <b>${doc.data().name}</b>
              </div>
              <div style="width: 20%;  text-align: center;">
                  <b>${doc.data().price} ฿</b>
              </div>
          </ons-row>
      </ons-card>`;
            $("#show_list_food").append(item);
          });
        });
    }

    if (
      show_shopid == "301" ||
      show_shopid == "302" ||
      show_shopid == "303" ||
      show_shopid == "304" ||
      show_shopid == "305" ||
      show_shopid == "306"
    ) {
      var select_shopid = show_shopid;

      db.collection("manu_Fast_food")
        .orderBy("id", "asc")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card onclick="myToast.toggle(); golist(${
              doc.data().id
            }, ${select_shopid}, ${doc.data().price}, '${doc.data().name}');">
          <ons-row style="width: 100%;">
              <div style="width: 80%;">
                  <b>${doc.data().name}</b>
              </div>
              <div style="width: 20%;  text-align: center;">
                  <b>${doc.data().price} ฿</b>
              </div>
          </ons-row>
      </ons-card>`;
            $("#show_list_food").append(item);
          });
        });
    }

    if (
      show_shopid == "401" ||
      show_shopid == "402" ||
      show_shopid == "403" ||
      show_shopid == "404" ||
      show_shopid == "405" ||
      show_shopid == "406" ||
      show_shopid == "407"
    ) {
      var select_shopid = show_shopid;

      db.collection("manu_Noodle")
        .orderBy("id", "asc")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card onclick="myToast.toggle(); golist(${
              doc.data().id
            }, ${select_shopid}, ${doc.data().price}, '${doc.data().name}');">
          <ons-row style="width: 100%;">
              <div style="width: 80%;">
                  <b>${doc.data().name}</b>
              </div>
              <div style="width: 20%;  text-align: center;">
                  <b>${doc.data().price} ฿</b>
              </div>
          </ons-row>
      </ons-card>`;
            $("#show_list_food").append(item);
          });
        });
    }

    if (
      show_shopid == "501" ||
      show_shopid == "502" ||
      show_shopid == "503" ||
      show_shopid == "504" ||
      show_shopid == "505" ||
      show_shopid == "506" ||
      show_shopid == "507" ||
      show_shopid == "508"
    ) {
      var select_shopid = show_shopid;

      var item = `<ons-card style="background-color: rgb(185, 185, 15);"> 
      <ons-list-header style="text-align:center; padding: 8px; font-size:20px;"  class="font"> Coffe </ons-list-header> 
      </ons-card>`;
      $("#show_list_food").append(item);
      db.collection("mamu_Pearl_tea")
        .orderBy("id", "asc")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item00 = `<ons-card onclick="myToast.toggle(); golist(${
              doc.data().id
            }, ${select_shopid}, ${doc.data().price}, '${doc.data().name}');">
      <ons-row style="width: 100%;">
          <div style="width: 80%;">
              <b>${doc.data().name}</b>
          </div>
          <div style="width: 20%;  text-align: center;">
              <b>${doc.data().price} ฿</b>
          </div>
      </ons-row>
  </ons-card>`;
            $("#show_list_food").append(item00);
          });
        });

      var item1 = `<ons-card ons-card style="background-color: rgb(185, 185, 15);"> 
      <ons-list-header style="text-align:center; padding: 8px; font-size:20px;" class="font"> Green Tea Coffee </ons-list-header> 
      </ons-card> `;
      $("#show_list_food_02").append(item1);
      db.collection("mamu_Pearl_tea_GreenTeaCoffee")
        .orderBy("id", "asc")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item01 = `<ons-card onclick="myToast.toggle(); golist(${
              doc.data().id
            }, ${select_shopid}, ${doc.data().price}, '${doc.data().name}');">
      <ons-row style="width: 100%;">
          <div style="width: 80%;">
              <b>${doc.data().name}</b>
          </div>
          <div style="width: 20%;  text-align: center;">
              <b>${doc.data().price} ฿</b>
          </div>
      </ons-row>
  </ons-card>`;
            $("#show_list_food_02").append(item01);
          });
        });

      var item2 = `<ons-card ons-card style="background-color: rgb(185, 185, 15);"> 
      <ons-list-header style="text-align:center; padding: 8px; font-size:20px;" class="font"> General </ons-list-header> 
      </ons-card> `;
      $("#show_list_food_03").append(item2);
      db.collection("mamu_Pearl_tea_General")
        .orderBy("id", "asc")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item02 = `<ons-card onclick="myToast.toggle(); golist(${
              doc.data().id
            }, ${select_shopid}, ${doc.data().price}, '${doc.data().name}');">
      <ons-row style="width: 100%;">
          <div style="width: 80%;">
              <b>${doc.data().name}</b>
          </div>
          <div style="width: 20%;  text-align: center;">
              <b>${doc.data().price} ฿</b>
          </div>
      </ons-row>
  </ons-card>`;
            $("#show_list_food_03").append(item02);
          });
        });
    }

    if (
      show_shopid == "601" ||
      show_shopid == "602" ||
      show_shopid == "603" ||
      show_shopid == "604" ||
      show_shopid == "605" ||
      show_shopid == "606"
    ) {
      var select_shopid = show_shopid;

      db.collection("manu_Sweetmeat")
        .orderBy("id", "asc")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = `<ons-card onclick="myToast.toggle(); golist(${
              doc.data().id
            }, ${select_shopid}, ${doc.data().price}, '${doc.data().name}');">
          <ons-row style="width: 100%;">
              <div style="width: 80%;">
                  <b>${doc.data().name}</b>
              </div>
              <div style="width: 20%;  text-align: center;">
                  <b>${doc.data().price} ฿</b>
              </div>
          </ons-row>
      </ons-card>`;
            $("#show_list_food").append(item);
          });
        });
    }
    console.log(show_shopid);
  }
});
