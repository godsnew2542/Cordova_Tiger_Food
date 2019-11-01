// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAHI4xCCM7FWY75fqecUv8I9i1yh1dCn1M",
  authDomain: "tigerfoodapp.firebaseapp.com",
  databaseURL: "https://tigerfoodapp.firebaseio.com",
  projectId: "tigerfoodapp",
  storageBucket: "tigerfoodapp.appspot.com",
  messagingSenderId: "468701251421",
  appId: "1:468701251421:web:607c335d3dc30bc0b24ab4",
  measurementId: "G-Q0S2CJLQQ2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//use Firebase
var db = firebase.firestore();

//Monitor authan status
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var email = user.email;
    console.log(email + "signed in");
    // ...
  } else {
    console.log(email + "signed out");
    // User is signed out.
    // ...
  }
});

// ส่งไปหน้า list_manu.js
function loadShopDetail(id) {
  console.log(id);
  var options = {
    data: {
      shopid: id
    }
  };
  $("#myNavigator")[0].pushPage("list_manu.html", options);
}

var result_id = [];
var result_menu = [];
var result_mony = [];
var prices = parseInt(0);
function golist(id, select_shopid, mony, menu) {
  price = parseInt(mony);
  result_mony.push(price);

  localStorage.setItem("sub_menu", id);
  localStorage.setItem("main_menu", select_shopid);
  localStorage.setItem("menu_sub_menu", menu);

  var main_menu = localStorage.getItem("main_menu");
  var sub_menu = localStorage.getItem("sub_menu");
  var menu_sub_menu = localStorage.getItem("menu_sub_menu");

  prices = prices + parseInt(price);
  console.log(
    "ID หลัก: " +
      main_menu +
      " " +
      "id: " +
      sub_menu +
      "menu: " +
      " " +
      menu_sub_menu +
      " " +
      "mony : " +
      mony +
      " " +
      "sum: " +
      prices
  );
  const array_order = [id];
  for (let i = 0; i < array_order.length; i++) {
    result_id.push(sub_menu);
    result_menu.push(menu_sub_menu);
    // result_mony.push(mony_sub_menu);
  }
  console.log(result_id);
  console.log(result_menu);
  console.log("sum: " + result_mony);
}

document.addEventListener("init", function(event) {
  var page = event.target;

  if (page.id === "login") {
    console.log("sing in");

    $("#login_button").click(function() {
      var username = $("#email").val();
      var password = $("#password").val();

      firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then(function() {
          content.load("Resturant_manu.html");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
          console.log("errorCode :" + errorCode);
          console.log("errorMessage:" + errorMessage);
          ons.notification.alert("Incorrect Email or Password");
        });
    });

    $("#back_home").click(function() {
      $("#content")[0].load("Resturant_manu.html");
    });

    // $("#gmail-button").click(function () {
    //   $("#content")[0].load("Resturant_manu.html");
    // });

    //รอแก้
    $("#gmail-button").click(function() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        })
        .then(function() {
          $("#content")[0].load("Resturant_manu.html");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    });
  }

  if (page.id === "singup") {
    console.log("sing up");

    $("#back_home_").click(function() {
      $("#content")[0].load("Resturant_manu.html");
    });
    // ------------------
    $("#singup_button").click(function() {
      console.log("registerAccountbtn pressed");
      var username = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      if (!(username && password)) {
        ons.notification.alert("You should fill everything");
      }else if (username && password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(username, password)
          .then(function() {
            ons.notification.alert("Register success");
            $("#content")[0].load("login.html");
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
        ons.notification.alert("Successfully Registered!");
      } else {
        ons.notification.alert("both password should be the same");
      }
    });
  }

  if (page.id === "profile") {
    console.log("profile");

    $(".menubtn").click(function() {
      $("#sidemenu")[0].open();
    });

    //ไม่ได้ที รอแก้
    // ("#logout").click(function() {
    //   //Firebase sign out
    //   firebase
    //     .auth()
    //     .signOut()
    //     .then(function() {
    //       $("#content")[0].load("Resturant_manu.html");
    //       $("#content")[0].close();
    //     })
    //     .catgh(function(error) {
    //       console.log(error.aessege);
    //     });
    // });
    $("#logout_").click(function() {
      //Firebase sign out
      firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
          console.log("user logged out");

          $("#content")[0].load("Resturant_manu.html");
          $("#sidemenu")[0].close();
        })
        .catch(function(error) {
          // An error happened.
        });
    });
  }

  if (page.id === "Resturant_manu") {
    console.log("home pags");

    $(".menubtn").click(function() {
      $("#sidemenu")[0].open();
    });

    $("#profile-button").click(function() {
      $("#content")[0].load("profile.html");
    });

    $("#carousel").empty();
    db.collection("img_promotion")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var item = `<ons-carousel-item modifier="nodivider" id="${
            doc.data().id
          }" class="recomended_item">
          <div class="thumbnail" style="background-image: url('${
            doc.data().photo
          }')">
          </div>
          <div class="recomended_item_title" id="item1_name"><b class="font"> ${
            doc.data().name
          }</b></div>
      </ons-carousel-item>`;
          $("#carousel").append(item);
        });
      });

    $("#Chicken_rice-button").click(function() {
      $("#content")[0].load("Chicken_rice.html");
    });

    $("#Dim_sum-button").click(function() {
      $("#content")[0].load("Dim_sum.html");
    });

    $("#Fast_food-button").click(function() {
      $("#content")[0].load("Fast_food.html");
    });

    $("#Noodle-button").click(function() {
      $("#content")[0].load("Noodle.html");
    });

    $("#Pearl_tea-button").click(function() {
      $("#content")[0].load("Pearl_tea.html");
    });

    $("#Sweetmeat-button").click(function() {
      $("#content")[0].load("Sweetmeat.html");
    });
  }

  if (page.id === "Chicken_rice") {
    console.log("ข้าวมันไก่");

    $(".menubtn").click(function() {
      $("#sidemenu")[0].open();
    });

    $("#profile-button").click(function() {
      $("#content")[0].load("profile.html");
    });

    $("#manu_Chicken_rice").empty();
    db.collection("img_Chicken_rice")
      .orderBy("id", "asc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var item = `<ons-card style="width: 95%; text-align: center;" >
        <ons-row onclick="loadShopDetail(${doc.data().id})">
          <div style="width: 40%;">
            <img src="${doc.data().photo}" class="img_list_manu">
          </div>
          <div style="width: 5%;"></div>
          <div style="width: 55%;">
            <img src="${doc.data().rating}" style="width: 80px;">
            <h1 style="font-size: 15px;"> <b class="font"> ${
              doc.data().name
            }</b> </h1>
            <h1 style="font-size: 12px; color: gray;"><b> Price: $${
              doc.data().price
            } </b></h1>
          </div>
        </ons-row>
      </ons-card>`;
          $("#manu_Chicken_rice").append(item);
        });
      });
  }

  if (page.id === "Dim_sum") {
    console.log("ติ่มซำ");

    $(".menubtn").click(function() {
      $("#sidemenu")[0].open();
    });

    $("#profile-button").click(function() {
      $("#content")[0].load("profile.html");
    });

    $("#manu_Dim_sum").empty();
    db.collection("img_Dim_sum")
      .orderBy("id", "asc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var item = `<ons-card style="width: 95%; text-align: center;" >
          <ons-row onclick="loadShopDetail(${doc.data().id})">
            <div style="width: 40%;">
              <img src="${doc.data().photo}" class="img_list_manu">
            </div>
            <div style="width: 5%;"></div>
            <div style="width: 55%;">
              <img src="${doc.data().rating}" style="width: 80px;">
              <h1 style="font-size: 15px;"> <b class="font"> ${
                doc.data().name
              }</b> </h1>
              <h1 style="font-size: 12px; color: gray;"><b> Price: $${
                doc.data().price
              } </b></h1>
            </div>
          </ons-row>
        </ons-card>`;
          $("#manu_Dim_sum").append(item);
        });
      });
  }

  if (page.id === "Fast_food") {
    console.log("อาหารจานด่วน");

    $(".menubtn").click(function() {
      $("#sidemenu")[0].open();
    });

    $("#profile-button").click(function() {
      $("#content")[0].load("profile.html");
    });

    $("#manu_Fast_food").empty();
    db.collection("img_Fast_food")
      .orderBy("id", "asc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var item = `<ons-card style="width: 95%; text-align: center;" >
          <ons-row onclick="loadShopDetail(${doc.data().id})">
            <div style="width: 40%;">
              <img src="${doc.data().photo}" class="img_list_manu">
            </div>
            <div style="width: 5%;"></div>
            <div style="width: 55%;">
              <img src="${doc.data().rating}" style="width: 80px;">
              <h1 style="font-size: 15px;"> <b class="font"> ${
                doc.data().name
              }</b> </h1>
              <h1 style="font-size: 12px; color: gray;"><b> Price: $${
                doc.data().price
              } </b></h1>
            </div>
          </ons-row>
        </ons-card>`;
          $("#manu_Fast_food").append(item);
        });
      });
  }

  if (page.id === "Noodle") {
    console.log("ก๋วยเตี๋ยว");

    $(".menubtn").click(function() {
      $("#sidemenu")[0].open();
    });

    $("#profile-button").click(function() {
      $("#content")[0].load("profile.html");
    });

    $("#manu_Noodle").empty();
    db.collection("img_Noodle")
      .orderBy("id", "asc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var item = `<ons-card style="width: 95%; text-align: center;" >
          <ons-row onclick="loadShopDetail(${doc.data().id})">
            <div style="width: 40%;">
              <img src="${doc.data().photo}" class="img_list_manu">
            </div>
            <div style="width: 5%;"></div>
            <div style="width: 55%;">
              <img src="${doc.data().rating}" style="width: 80px;">
              <h1 style="font-size: 15px;"> <b class="font"> ${
                doc.data().name
              }</b> </h1>
              <h1 style="font-size: 12px; color: gray;"><b> Price: $${
                doc.data().price
              } </b></h1>
            </div>
          </ons-row>
        </ons-card>`;
          $("#manu_Noodle").append(item);
        });
      });
  }

  if (page.id === "Pearl_tea") {
    console.log("น้ำ");

    $(".menubtn").click(function() {
      $("#sidemenu")[0].open();
    });

    $("#profile-button").click(function() {
      $("#content")[0].load("profile.html");
    });

    $("#manu_Pearl_tea").empty();
    db.collection("img_Pearl_tea")
      .orderBy("id", "asc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var item = `<ons-card style="width: 95%; text-align: center;" >
          <ons-row onclick="loadShopDetail(${doc.data().id})">
            <div style="width: 40%;">
              <img src="${doc.data().photo}" class="img_list_manu">
            </div>
            <div style="width: 5%;"></div>
            <div style="width: 55%;">
              <img src="${doc.data().rating}" style="width: 80px;">
              <h1 style="font-size: 15px;"> <b class="font"> ${
                doc.data().name
              }</b> </h1>
              <h1 style="font-size: 12px; color: gray;"><b> Price: $${
                doc.data().price
              } </b></h1>
            </div>
          </ons-row>
        </ons-card>`;
          $("#manu_Pearl_tea").append(item);
        });
      });
  }

  if (page.id === "Sweetmeat") {
    console.log("ขนมหวาน");

    $(".menubtn").click(function() {
      $("#sidemenu")[0].open();
    });

    $("#profile-button").click(function() {
      $("#content")[0].load("profile.html");
    });

    $("#manu_Sweetmeat").empty();
    db.collection("img_Sweetmeat")
      .orderBy("id", "asc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var item = `<ons-card style="width: 95%; text-align: center;" >
          <ons-row onclick="loadShopDetail(${doc.data().id})">
            <div style="width: 40%;">
              <img src="${doc.data().photo}" class="img_list_manu">
            </div>
            <div style="width: 5%;"></div>
            <div style="width: 55%;">
              <img src="${doc.data().rating}" style="width: 80px;">
              <h1 style="font-size: 15px;"> <b class="font"> ${
                doc.data().name
              }</b> </h1>
              <h1 style="font-size: 12px; color: gray;"><b> Price: $${
                doc.data().price
              } </b></h1>
            </div>
          </ons-row>
        </ons-card>`;
          $("#manu_Sweetmeat").append(item);
        });
      });
  }

  if (page.id === "menuPage") {
    console.log("menuPage");

    $("#login").click(function() {
      $("#content")[0].load("login.html");
      $("#sidemenu")[0].close();
    });

    $("#sing_up").click(function() {
      $("#content")[0].load("register.html");
      $("#sidemenu")[0].close();
    });

    $("#logout").click(function() {
      //Firebase sign out
      firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
          console.log("user logged out");

          $("#content")[0].load("Resturant_manu.html");
          $("#sidemenu")[0].close();
        })
        .catch(function(error) {
          // An error happened.
        });
    });

    $("#home").click(function() {
      $("#content")[0].load("Resturant_manu.html");
      $("#sidemenu")[0].close();
    });

    $("#Map").click(function() {
      $("#content")[0].load("mab.html");
      $("#sidemenu")[0].close();
    });Resturant_manu
  }

  if (page.id === "mab") {
    console.log("Map");

    var onSuccess = function(position) {
      alert('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n')
  };

  // onError Callback receives a PositionError object
  //
  function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  }

  navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }
});
