 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

      
     var myFacebookToken="EAACEdEose0cBANI0hXZBEjWaDdEy7UpvAb2cNZCuDDiBAfXBLRod1yv2DOB6Bw7ZCP13AwdlgGRM9fKkg8NpeUYrZCxxPb3WYznDisH96KI3dSXnje6unCl53LllleYoZB0HgSZAX54zavTnWDsogy7C4ZA1itZBojrBqdPO5LwnQ4tDVkZCtgY80ohRuGWvyLlBc2b3OkpDMFgZDZD";
         
        function getFacebookInfo(){
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
                    //for language 
                    if(response.languages != undefined && response.languages !=null){
                       $("#myLanguage").html(response.languages); 
                    }
                    else{
                        $("#myLanguage").html("empty");
                    }
                    
                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

   $("#facebookBtn").on('click',getFacebookInfo);
      
    



  });