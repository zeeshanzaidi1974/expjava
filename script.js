 var emailArray=[];
        var passwordArray=[];

        var loginBox = document.getElementById("login");
        

        var loginTab = document.getElementById("lt");
        var regTab = document.getElementById("rt");

        function regTabFun(){
            event.preventDefault();

            regBox.style.visibility="visible";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="hidden";

            regTab.style.backgroundColor="rgb(12, 132, 189)";
            loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
        }
        function loginTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="visible";
            forgetBox.style.visibility="hidden";

            loginTab.style.backgroundColor="rgb(12, 132, 189)";
            regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
        }
        function forTabFun(){
            event.preventDefault();

            regBox.style.visibility="hidden";
            loginBox.style.visibility="hidden";
            forgetBox.style.visibility="visible";

            regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
            loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

        }


        
        function login(){
            event.preventDefault();

            var email = document.getElementById("se").value;
            var password = document.getElementById("sp").value;

            var i = emailArray.indexOf(email);

            if(emailArray.indexOf(email) ==1){
                
                    alert("best choice number");
                    return ;
                
                
            }
            
           else  if(emailArray.indexOf(email) ==2){
                
                    alert("best choice number");
                    return ;
            else {
                alert(email + " yor are login Now \n welcome to our website.");

                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                return ;
            }

        }
        function forgot(){
            event.preventDefault();

            var email = document.getElementById("fe").value;

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }

            alert("email is send to your email check it in 24hr. \n Thanks");
            document.getElementById("fe").value ="";
        }
