 // main document ready function to check if dom is loaded fully or not
 $(document).ready(function() {


   // var myFacebookToken="";

   $("#info").click(function() {
     var myFacebookToken = $("#token").val();
     console.log(myFacebookToken);


     //function getFacebookInfo(){
     $.ajax('https://graph.facebook.com/me?fields=picture.width(250).height(250),id,name,first_name,last_name,birthday,about,hometown,languages,gender,education,work,relationship_status,quotes,family,website,email,cover&access_token=' + myFacebookToken, {

       success: function(response) {
         console.log(response);
         console.log(typeof(response));
         $("#myEmail").text(response.email);
         $("#myProfileId").html('<a target="blank" href="https://facebook.com/' + response.id + '">https://facebook.com/' + response.id + '</a>');
         $("#myHomeTown").text(response.hometown.name);
         $(".myProfilePic").attr("src", "" + response.picture.data.url + "");
         $(".myCoverPic").attr("src", "" + response.cover.source + "");
         $("#myName").html(response.name);
         $("#myFirstName").html(response.first_name);
         $("#myLastName").html(response.last_name);
         $("#myBirthday").html(response.birthday);
         $("#myGender").html(response.gender);
         $("#myAbout").html(response.about);
         $("#myWebsite").html(response.website);
         $("#myRelation").html(response.relationship_status);
         $("#myAbout").html(response.about);

         //for language 
         var languages = response.languages;
         var myLanguage = $.map(languages, function(index) {
           return index.name;
         });
         $("#myLanguage").text(myLanguage);

         // for work
         var work = response.work;
         var myWork = $.map(work, function(index) {
           return index.employer.name;
         });
         $("#myWork").text(myWork);

         //for education
         var education = response.education;
         var myEducation = $.map(education, function(index) {
           return index.school.name;
         });
         $("#myEducation").text(myEducation);

         // for family
         var family = response.family.data;
         var myFamily = $.map(family, function(index) {
           return index.name;
         });
         $("#myFamily").text(myFamily);

       }, //end of success

       //error handling
       error: function(jqXHR) {
         alert(jqXHR.responseJSON.error.message + " Plz Reload the page and try again");

       },
       //Loader
       timeout: 1000,
       beforeSend: function() {
         $('.preloader').show();
       },
       complete: function() {
         $('.preloader').hide();

       }

       //end argument list 


     }); // end ajax call 




     //Ajax for gettting Feed
     $.ajax("https://graph.facebook.com/me?fields=posts{created_time,type,full_picture,story,message,source},name,picture&access_token=" + myFacebookToken, {
       success: function(response) {
           var postData = response.posts.data;
           var feeds = $.map(postData, function(value, index) {
             if (index <= 5) { //for 6 posts
               return value;
             }
           });
           //first Post
           var feed1 = $.map(feeds, function(value, index) {
             if (index == 0) {
               return value;
             }
           });
           //for status
           if (feed1[0].type == "status") {

             $("#post1").html(response.name + " says : </br>" + feed1[0].message).css({
               "background-color": "white",
               "font-size": "200%"
             });

             //for photo shared
           } else if (feed1[0].type == "photo") {

             $("#post1").text("" + feed1[0].story + "");
             $(".photoPost1").html("<img src=" + feed1[0].full_picture + " " + "class=" + " img-responsive" + ">");
             //for video shared
           } else if (feed1[0].type == "video") {
             $("#post1").text("" + feed1[0].story + "");
             $(".photoPost1").html("<video controls> <source  src=" + "" + feed1[0].source + " " + "type= " + "video/mp4" + "></video>");
           } else {}
           //first post ends here

           //second post starts here
           var feed2 = $.map(feeds, function(value, index) {
             if (index == 1) {
               return value;
             }
           });
           //for status
           if (feed2[0].type == "status") {

             $("#post2").html(response.name + " says : </br>" + feed2[0].message).css({
               "background-color": "white",
               "font-size": "200%"
             });
             //for photo shared
           } else if (feed2[0].type == "photo") {

             $("#post2").text("" + feed2[0].story + "");
             $(".photoPost2").html("<img src=" + feed2[0].full_picture + " " + "class=" + " img-responsive" + ">");
             //for video shared
           } else if (feed2[0].type == "video") {
             $("#post2").text("" + feed2[0].story + "");
             $(".photoPost2").html("<video controls> <source  src=" + "" + feed2[0].source + " " + "type= " + "video/mp4" + "></video>");
           } else {}
           //second post ends here

           //third post starts here
           var feed3 = $.map(feeds, function(value, index) {
             if (index == 2) {
               return value;
             }
           });
           //for status 
           if (feed3[0].type == "status") {

             $("#post3").html(response.name + " says : </br>" + feed3[0].message).css({
               "background-color": "white",
               "font-size": "200%"
             });
             //for photo s
           } else if (feed3[0].type == "photo") {

             $("#post3").text("" + feed3[0].story + "");
             $(".photoPost3").html("<img src=" + feed3[0].full_picture + " " + "class=" + " img-responsive" + ">");
             //for video shared
           } else if (feed3[0].type == "video") {
             $("#post3").text("" + feed3[0].story + "");
             $(".photoPost3").html("<video controls> <source  src=" + "" + feed3[0].source + " " + "type= " + "video/mp4" + "></video>");
           } else {}
           //third post ends here

           //fourth post starts here
           var feed4 = $.map(feeds, function(value, index) {
             if (index == 3) {
               return value;
             }
           });
           if (feed4[0].type == "status") { //for status

             $("#post4").html(response.name + " says : </br>" + feed4[0].message).css({
               "background-color": "white",
               "font-size": "200%"
             });

           } else if (feed4[0].type == "photo") { //for photo

             $("#post4").text("" + feed4[0].story + "");
             $(".photoPost4").html("<img src=" + feed4[0].full_picture + " " + "class=" + " img-responsive" + ">");

           } else if (feed4[0].type == "video") { //for video
             $("#post4").text("" + feed4[0].story + "");
             $(".photoPost4").html("<video controls> <source  src=" + "" + feed4[0].source + " " + "type= " + "video/mp4" + "></video>");
           } else {}
           //fourth post ends here

           //fifth post starts here
           var feed5 = $.map(feeds, function(value, index) {
             if (index == 4) {
               return value;
             }
           });
           if (feed5[0].type == "status") { //for status

             $("#post5").html(response.name + " says : </br>" + feed5[0].message).css({
               "background-color": "white",
               "font-size": "200%"
             });

           } else if (feed5[0].type == "photo") { //for photo

             $("#post5").text("" + feed5[0].story + "");
             $(".photoPost5").html("<img src=" + feed5[0].full_picture + " " + "class=" + " img-responsive" + ">");

           } else if (feed5[0].type == "video") { //for video
             $("#post5").text("" + feed5[0].story + "");
             $(".photoPost5").html("<video controls> <source  src=" + "" + feed5[0].source + " " + "type= " + "video/mp4" + "></video>");
           } else {}
           //fifth post ends here

           //sixth post starts here
           var feed6 = $.map(feeds, function(value, index) {
             if (index == 5) {
               return value;
             }
           });
           if (feed6[0].type == "status") { //for status

             $("#post6").html(response.name + " says : </br>" + feed6[0].message).css({
               "background-color": "white",
               "font-size": "200%"
             });

           } else if (feed6[0].type == "photo") { //for photo

             $("#post6").text("" + feed6[0].story + "");
             $(".photoPost6").html("<img src=" + feed6[0].full_picture + " " + "class=" + " img-responsive" + ">");

           } else if (feed6[0].type == "video") { //for video
             $("#post6").text("" + feed6[0].story + "");
             $(".photoPost6").html("<video controls> <source  src=" + "" + feed6[0].source + " " + "type= " + "video/mp4" + "></video>");
           } else {}




         } //end success function





     }); // end get facebook info

   });

   //Hiding and showing Ui
   //At Start
   $(".form-group").show();
   $("#mainPic").hide();
   $(".basic").hide();
   $(".feed6").hide();
   $(".work").hide();
   $(".feed1").hide();
   $(".family").hide();
   $(".feed2").hide();
   $(".about").hide();
   $(".feed3").hide();
   $(".contact").hide();
   $(".feed4").hide();
   $(".experience").hide();
   $(".feed5").hide();
   $("#post").hide();
   $("#basic").hide();



 }); // end doc ready

 //for  Feed
 $(".input-group-btn").on('click', function() {
   $(".form-group").hide("scale");
   $("#mainPic").show();
   $(".basic").hide("scale");
   $(".feed6").show();
   $(".work").hide("scale");
   $(".feed1").show();
   $(".family").hide("scale");
   $(".feed2").show();
   $(".about").hide("scale");
   $(".feed3").show();
   $(".contact").hide("scale");
   $(".feed4").show();
   $(".experience").hide("scale");
   $(".feed5").show();
   $("#post").show();
   $("#basic").show();

 });

 //for feed again


 $("#post").on('click', function() {
   $(".form-group").hide("scale");
   $("#mainPic").show();
   $(".basic").hide("scale");
   $(".feed6").show();
   $(".work").hide("scale");
   $(".feed1").show();
   $(".family").hide("scale");
   $(".feed2").show();
   $(".about").hide("scale");
   $(".feed3").show();
   $(".contact").hide("scale");
   $(".feed4").show();
   $(".experience").hide("scale");
   $(".feed5").show();
   $("#post").show();
   $("#basic").show();

 });
 // for basic info

 $("#basic").on('click', function() {
   $(".form-group").hide("scale");
   $("#mainPic").show();
   $(".basic").show();
   $(".feed6").hide("scale");
   $(".work").show();
   $(".feed1").hide("scale");
   $(".family").show();
   $(".feed2").hide("scale");
   $(".about").show();
   $(".feed3").hide("scale");
   $(".contact").show();
   $(".feed4").hide("scale");
   $(".experience").show();
   $(".feed5").hide("scale");
   $("#post").show();
   $("#basic").show();

 });


 //end of js
