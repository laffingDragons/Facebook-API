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
            timeout:3000,
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
        $.ajax("https://graph.facebook.com/me?fields=posts{created_time,type,full_picture,story,message,source},name,picture.width(150).height(150)&access_token="+facebookToken,{
		success:function(response){
			var postsData = response.posts.data;
			var postsDataValues = $.map(postsData,function(value,index){
				if (index <= 5) {
				return value;
			}
			});
            
        },
            
           
           
    });// end get facebook info

       });
      
      //Hiding and showing Ui
      //At Start
        $(".form-group").show();
        $("#mainPic").hide();
        $(".basic").hide();
        $(".feed0").hide();
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
      
       //for basic info
      
    $("#ITCard").on('mouseclick',function(){
        $(".form-group").show();
        $("#mainPic").hide();
        $(".basic").hide();
        $(".feed0").hide();
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
        
    });  
      
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
    



  
