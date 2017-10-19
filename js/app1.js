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
                    $("#myName").html(response.name);
                    $("#myFirstName").html(response.first_name);
                    $("#myLastName").html(response.last_name);
					$("#myBirthday").html(response.birthday);
					$("#myGender").html(response.gender);
                    $("#myLanguage").html(response.languages.data.name);
                    //for language 
                    
                    
                    
                }
            //end argument list 


        }
        );// end ajax call 


    }// end get facebook info
);
      
  });
           
   //$("#facebookBtn").on('click',getFacebookInfo);
      
    



  