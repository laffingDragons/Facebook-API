 // main document ready function to check if dom is loaded fully or no

        
    // var myFacebookToken="";
         
       function myFunction(){ 
    var myFacebookToken = $("#token").val();
           console.log(myFacebookToken);
      
       // function getFacebookInfo(){
        $.ajax('https://graph.facebook.com/me?fields=link,email,hometown&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myFirstName").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);
                    //$(".myProfilePic").attr("src",""+response.picture.data.url+"");
  //                  $("#myName").html(response.name);
    //                $("#myFirstName").html(response.first_name);
      ///              $("#myLastName").html(response.last_name);
		//			$("#myBirthday").html(response.birthday);
		//			$("#myGender").html(response.gender);
                    //for language 
     //               if(response.languages != undefined && response.languages !=null){
       //                $("#myLanguage").html(response.languages); 
         //           }
           //         else{
             //           $("#myLanguage").html("empty");
               //     }
                    
                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

   //$("#facebookBtn").on('click',getFacebookInfo);
      
    



 
