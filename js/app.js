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
                     
                    
                    
                }
            //end argument list 


        }
        );// end ajax call 


    }// end get facebook info
);
      
  });
           
   //$("#facebookBtn").on('click',getFacebookInfo);
      
    



  
