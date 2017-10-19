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
                    $("#myWebsite").val(response.website);
                    
                    //for language 
                    var languages = response.languages ;
                    var myLanguage= $.map(languages,function(index){
					return index.name;
				    });
  	                $("#myLanguage").text(myLanguage);
                    
                    // for Education
                     var workData = response.work ;       
					var workSections ="" ;
					 var getWork = $.map(workData,function(index){    
					 
					 		for(var names in index) {                        // For getting Work details    
					 
					 if (names =="position") {
					
						workSections += (index.position.name+" - "+index.employer.name+ " | ");
					}
					}
					$("#myWork").attr("value",""+workSections+""); 
					
					});  

					 var eduData = response.education ;
					 var getCollege;
					 $.each(eduData,function(i,value){
					 	 if(value.type == "College"){
                            getCollege = value.school.name;							//  For getting School details    
                            $("#myCollege").attr("value"," "+getCollege+"");
                        } 
                        else if (value.type == "High School"){
                        	 getCollege = value.school.name;
                        	 $("#myHighschool").attr("value"," "+getCollege+"");
                        	}
					 	}
					 );
                    
                    
                }
            //end argument list 


        }
        );// end ajax call 


    }// end get facebook info
);
      
  });
           
   //$("#facebookBtn").on('click',getFacebookInfo);
      
    



  
