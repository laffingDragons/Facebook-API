 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

        
    // var myFacebookToken="";
         
       $("#info").click(function(){
    var myFacebookToken = $("#token").val();
           console.log(myFacebookToken);
    
     
        //function getFacebookInfo(){
        $.ajax('https://graph.facebook.com/me?fields=picture.width(250).height(250),id,name,first_name,last_name,birthday,about,hometown,languages,gender,education,work,relationship_status,quotes,family,website,email,cover&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);
                    $(".myProfilePic").attr("src",""+response.picture.data.url+"");
                    $(".myCoverPic").attr("src",""+response.cover.source+"");
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
                    var languages = response.languages ;
                    var myLanguage= $.map(languages,function(index){
					return index.name;
				    });
  	                $("#myLanguage").text(myLanguage);
                    
                    // for work
                    var work = response.work ;
                    var myWork = $.map(work,function(index){
                        return index.employer.name;
                    });
                    $("#myWork").text(myWork);
                    
                    //for education
                    var education = response.education ;
                    var myEducation = $.map(education,function(index){
                        return index.school.name;
                    });
                    $("#myEducation").text(myEducation);
                     
                    // for family
                    var family = response.family.data ;
                    var myFamily = $.map(family,function(index){
                        return index.name;
                    });
                    $("#myFamily").text(myFamily);
                    
                },//end of success
            
                    //error handling
                    error: function(jqXHR) {
                            alert(jqXHR.responseJSON.error.message+" Plz Reload the page and try again");

                    },
                //Loader
            timeout:1000,
                beforeSend : function(){
                    $('.preloader').show();
                },
                complete : function(){
                   $('.preloader').hide();

                }
            
            //end argument list 


        }
        );// end ajax call 


           
           
        //Ajax for gettting Feed
        $.ajax("https://graph.facebook.com/me?fields=posts{created_time,type,full_picture,story,message,source},name,picture&access_token="+myFacebookToken,{
		success: function(response) {
            var feedData = response.posts.data;
            var feeds = $.map(feedData, function(value, index) {
                if (index <= 5) { //for limiting 6 feeds
                    return value;
                }
            });
            //first feed starts here
            var feed1 = $.map(feeds, function(value, index) {
                if (index == 0) {
                    return value;
                }
            });
            if (feed1[0].type == "status") { //for status update

                $("#story1").html(response.name + " Shared a Status : </br>" + "<strong><h1>" + feed1[0].message + "</strong></h1>");

            } else if (feed1[0].type == "photo") { //for photo shared

                $("#story1").text("" + feed1[0].story + "");
                $(".fPhoto1").html("<img src=" + feed1[0].full_picture + " " + "class=" + " img-responsive" + ">");

            } else if (feed1[0].type == "video") { //for video shared
                $("#story1").text("" + feed1[0].story + "");
                $(".fPhoto1").html("<video controls> <source  src=" + "" + feed1[0].source + " " + "type= " + "video/mp4" + "></video>");
            } else {}
            //first feed ends here

            //second feed starts here
            var feed2 = $.map(feeds, function(value, index) {
                if (index == 1) {
                    return value;
                }
            });
            if (feed2[0].type == "status") { //for status update

                $("#story2").html(response.name + " Shared a Status : </br>" + "<strong><h1>" + feed2[0].message + "</strong></h1>");

            } else if (feed2[0].type == "photo") { //for photo shared

                $("#story2").text("" + feed2[0].story + "");
                $(".fPhoto2").html("<img src=" + feed2[0].full_picture + " " + "class=" + " img-responsive" + ">");

            } else if (feed2[0].type == "video") { //for video shared
                $("#story2").text("" + feed2[0].story + "");
                $(".fPhoto2").html("<video controls> <source  src=" + "" + feed2[0].source + " " + "type= " + "video/mp4" + "></video>");
            } else {}
            //second feed ends here

            //third feed starts here
             var feed3 = $.map(feeds, function(value, index) {
                if (index == 2) {
                    return value;
                }
            });
            if (feed3[0].type == "status") { //for status update

                $("#story3").html(response.name + " Shared a Status : </br>" + "<strong><h1>" + feed3[0].message + "</strong></h1>");

            } else if (feed3[0].type == "photo") { //for photo shared

                $("#story3").text("" + feed3[0].story + "");
                $(".fPhoto3").html("<img src=" + feed3[0].full_picture + " " + "class=" + " img-responsive" + ">");

            } else if (feed3[0].type == "video") { //for video shared
                $("#story3").text("" + feed3[0].story + "");
                $(".fPhoto3").html("<video controls> <source  src=" + "" + feed3[0].source + " " + "type= " + "video/mp4" + "></video>");
            } else {}
            //third feed ends here

            //fourth feed starts here
            var feed4 = $.map(feeds, function(value, index) {
                if (index == 3) {
                    return value;
                }
            });
            if (feed4[0].type == "status") { //for status

                $("#story4").html(response.name + " Shared a Status : </br>" + "<strong><h1>" + feed4[0].message + "</strong></h1>");

            } else if (feed4[0].type == "photo") { //for photo

                $("#story4").text("" + feed4[0].story + "");
                $(".fPhoto4").html("<img src=" + feed4[0].full_picture + " " + "class=" + " img-responsive" + ">");

            } else if (feed4[0].type == "video") { //for video
                $("#story4").text("" + feed4[0].story + "");
                $(".fPhoto4").html("<video controls> <source  src=" + "" + feed4[0].source + " " + "type= " + "video/mp4" + "></video>");
            } else {}
            //fourth feed ends here

            //fifth feed starts here
            var feed5 = $.map(feeds, function(value, index) {
                if (index == 4) {
                    return value;
                }
            });
            if (feed5[0].type == "status") { //for status

                $("#story5").html(response.name + " Shared a Status : </br>" + "<strong><h1>" + feed5[0].message + "</strong></h1>");

            } else if (feed5[0].type == "photo") { //for photo

                $("#story5").text("" + feed5[0].story + "");
                $(".fPhoto5").html("<img src=" + feed5[0].full_picture + " " + "class=" + " img-responsive" + ">");

            } else if (feed5[0].type == "video") { //for video
                $("#story5").text("" + feed5[0].story + "");
                $(".fPhoto5").html("<video controls> <source  src=" + "" + feed5[0].source + " " + "type= " + "video/mp4" + "></video>");
            } else {}
            //fifth feed ends here

            //sixth feed starts here
            var feed6 = $.map(feeds, function(value, index) {
                if (index == 5) {
                    return value;
                }
            });
            if (feed6[0].type == "status") { //for status

                $("#story6").html(response.name + " Shared a Status : </br>" + "<strong><h1>" + feed6[0].message + "</strong></h1>");

            } else if (feed6[0].type == "photo") { //for photo

                $("#story6").text("" + feed6[0].story + "");
                $(".fPhoto6").html("<img src=" + feed6[0].full_picture + " " + "class=" + " img-responsive" + ">");

            } else if (feed6[0].type == "video") { //for video
                $("#story6").text("" + feed6[0].story + "");
                $(".fPhoto6").html("<video controls> <source  src=" + "" + feed6[0].source + " " + "type= " + "video/mp4" + "></video>");
            } else {}




        } //end success function
            
        
            
           
           
    });// end get facebook info

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
      
      
      
  });// end doc ready

       //for  Feed
        $(".input-group-btn").on('click',function(){
        $(".form-group").hide("puff");
        $("#mainPic").show();
        $(".basic").hide("puff");
        $(".feed6").show();
        $(".work").hide("puff");
        $(".feed1").show();
        $(".family").hide("puff");
        $(".feed2").show();
        $(".about").hide("puff");
        $(".feed3").show();
        $(".contact").hide("puff");
        $(".feed4").show();
        $(".experience").hide("puff");
        $(".feed5").show();
        
    });
      
      //for feed again
      
      
        $("#mainPic").on('click',function(){
        $(".form-group").hide("puff");
        $("#mainPic").show();
        $(".basic").hide("puff");
        $(".feed6").show();
        $(".work").hide("puff");
        $(".feed1").show();
        $(".family").hide("puff");
        $(".feed2").show();
        $(".about").hide("puff");
        $(".feed3").show();
        $(".contact").hide("puff");
        $(".feed4").show();
        $(".experience").hide("puff");
        $(".feed5").show();
        
    });
      // for basic info
      
        $("#myName").on('click',function(){
        $(".form-group").hide("puff");
        $("#mainPic").show();
        $(".basic").show();
        $(".feed6").hide("puff");
        $(".work").show();
        $(".feed1").hide("puff");
        $(".family").show();
        $(".feed2").hide("puff");
        $(".about").show();
        $(".feed3").hide("puff");
        $(".contact").show();
        $(".feed4").hide("puff");
        $(".experience").show();
        $(".feed5").hide("puff");
        
    });
           
  
     /*.ajax("https://graph.facebook.com/me?fields=posts{created_time,type,full_picture,story,message,source},name,picture.width(150).height(150)&access_token="+facebookToken,{
		success:function(response){
			var postsData = response.posts.data;
			var postsDataValues = $.map(postsData,function(value,index){
				if (index <= 4) {
				return value;
			}
			});

			// For feed-profile pic

			$(".squared").attr("src",""+response.picture.data.url+"");
					
			// FIRST FEED POST

			var firstFeed = $.map(postsDataValues,function(value,index){
					if(index==0){
						return value ;
					}
			});


			if (firstFeed[0].type == "status" && firstFeed[0].message){

				$(".feed-story1").text(""+response.name+""+" updated her status : "+""+firstFeed[0].message+"");
				
				}

			else if(firstFeed[0].type == "status"){
				$(".feed-story1").text(""+firstFeed[0].story+"");
			}

			else if (firstFeed[0].type == "photo"){

				$(".feed-story1").text(""+firstFeed[0].story+"");
				$(".main-feed1").append("<img src="+""+firstFeed[0].full_picture+""+" "+"class="+"feed-image1 img-responsive"+">");
			$(".feed-image1").css({"width":"200px","height":"200px","margin":"0px auto"});
			}

			else if (firstFeed[0].type == "video"){

				
				$(".main-feed1").html("<video controls> <source  src="+""+firstFeed[0].source+""+"type= "+"video/mp4"+"></video>");

				$(".feed-story1").text(""+firstFeed[0].story+"");
			}

			var date1 = new Date(firstFeed[0].created_time);
			
			$(".time-stamp1").text("Created at : "+date1.toDateString()+"");
				$(".feed-type1").text("Type : "+firstFeed[0].type+"");

			
	//		Second feed post 

			var secondFeed = $.map(postsDataValues,function(value,index){
					if(index==1){
						
						return value ;

					}
			});



					if (secondFeed[0].type == "status" && secondFeed[0].message){

				$(".feed-story2").text(""+response.name+""+" updated her status : "+""+secondFeed[0].message+"");
				
				}

			else if(secondFeed[0].type == "status"){
				$(".feed-story2").text(""+secondFeed[0].story+"");
				
			}
			else if (secondFeed[0].type == "photo"){

				$(".feed-story2").text(""+secondFeed[0].story+"");
				$(".main-feed2").append("<img src="+""+secondFeed[0].full_picture+""+" "+"class="+"feed-image2 img-responsive"+">");
			$(".feed-image2").css({"width":"200px","height":"200px","margin":"0px auto"});
			}

			else if (secondFeed[0].type == "video"){
				console.log(secondFeed);
				$(".feed-story2").text(""+secondFeed[0].story+"");
				// $(".main-feed2").html("<p> Video Url :"+""+secondFeed[0].source+""+"</p>");
					
			}

			var date2 = new Date(secondFeed[0].created_time);
			$(".time-stamp2").text("Created at : "+date2.toDateString()+"");
				$(".feed-type2").text("Type : "+secondFeed[0].type+"");
				console.log(secondFeed[0].type);

			
			
   // THIRD FEED POST

			var thirdFeed = $.map(postsDataValues,function(value,index){
					if(index==2){
						return value ;
					}
			});

				if (thirdFeed[0].type == "status" && thirdFeed[0].message){

				$(".feed-story3").text(""+response.name+""+" updated her status : "+""+firstFeed[0].message+"");
				
				}

			else if(thirdFeed[0].type == "status"){
				$(".feed-story3").text(""+thirdFeed[0].story+"");
				
			}

			else if (thirdFeed[0].type == "photo"){

				$(".feed-story3").text(""+thirdFeed[0].story+"");
				$(".main-feed3").append("<img src="+""+thirdFeed[0].full_picture+""+" "+"class="+"feed-image3 img-responsive"+">");
			$(".feed-image3").css({"width":"200px","height":"200px","margin":"0px auto"});
			}

			else if (thirdFeed[0].type == "video"){

				$(".feed-story3").text(""+thirdFeed[0].story+"");
				// $(".main-feed3").append().html("<video controls> <source  src="+""+thirdFeed[0].source+"" +"type= "+"video/mp4"+"></video>");
			
			}

			var date3 = new Date(thirdFeed[0].created_time);

			$(".time-stamp3").text("Created at : "+date3.toDateString()+"");
				$(".feed-type3").text("Type : "+thirdFeed[0].type+"");


		
	// FOURTH FEED POST
			
			var fourthFeed = $.map(postsDataValues,function(value,index){
					if(index==3){
						return value ;
					}
			});

				if (fourthFeed[0].type == "status" && fourthFeed[0].message){

				$(".feed-story4").text(""+response.name+""+" updated her status : "+""+fourthFeed[0].message+"");
				
				}

				else if(fourthFeed[0].type == "status"){

					$(".feed-story4").text(""+fourthFeed[0].story+"");
				
				}

			else if (fourthFeed[0].type == "photo"){

					$(".feed-story4").text(""+fourthFeed[0].story+"");
				$(".main-feed4").append("<img src="+""+fourthFeed[0].picture+""+" "+"class="+"feed-image4 img-responsive"+">");
				$(".feed-image4").css({"width":"200px","height":"200px","margin":"0px auto"});
			}

			else if (fourthFeed[0].type == "video"){

				
				// $(".main-feed4").append().html("<video controls> <source  src="+""+fourthFeed[0].source+"" +"type= "+"video/mp4"+"></video>");
				$(".feed-story4").text(""+fourthFeed[0].story+"");
			}


			var date4 = new Date(fourthFeed[0].created_time);

			$(".time-stamp4").text("Created at : "+date4.toDateString()+"");
				$(".feed-type4").text("Type : "+fourthFeed[0].type+"");

	// FIFTH FEED POST		

			var fifthFeed = $.map(postsDataValues,function(value,index){
					if(index==4){
						return value ;
					}
			});

				if (fifthFeed[0].type == "status" && fifthFeed[0].message){

				$(".feed-story5").text(""+response.name+""+" updated her status : "+""+fifthFeed[0].message+"");
				
				}

			else if(fifthFeed[0].type == "status"){

				$(".feed-story5").text(""+fifthFeed[0].story+"");
				
			}

			else if (fifthFeed[0].type == "photo"){
				$(".feed-story5").text(""+fifthFeed[0].story+"");
				$(".main-feed5").append("<img src="+""+fifthFeed[0].picture+""+" "+"class="+"feed-image5 img-responsive"+">");
				$(".feed-image5").css({"width":"200px","height":"200px","margin":"0px auto"});
			}

			else if (fifthFeed[0].type == "video"){

				
				// $(".main-feed5").append().html("<video controls> <source  src="+""+fifthFeed[0].source+"" +"type= "+"video/mp4"+"></video>");
				$(".feed-story5").text(""+fifthFeed[0].story+"");
			}


			var date5 = new Date (fifthFeed[0].created_time);

			$(".time-stamp5").text("Created at : "+date5.toDateString()+"");
				$(".feed-type5").text("Type : "+fifthFeed[0].type+"");
			

		}	//	End of success function
	
	});  	//End of ajax call

					  

			$(".profile-image").hide();
			$(".about-me-page").hide();
			$(".navigation-tabs").hide();
			$(".work-ed-page").hide();
			$(".family-page").hide();
			$(".details-page").hide();
			$(".contact-page").hide();
			 $(".all-feed").hide();
			 $(".feed-profile-pic").hide();

		});         // Document .ready ends 


  // onclick functions starts 

$(".home-page").on("click",function(){

				$(".feed-profile-pic").hide();
	 			$(".all-feed").hide();
				$(".start-page").show();
				$(".profile-image").hide();
    			$(".navigation-tabs").hide();
				$(".about-me-page").hide();
				$(".work-ed-page").hide();
				$(".family-page").hide();
				$(".details-page").hide();
				$(".contact-page").hide();
});
 */ 
    



  
