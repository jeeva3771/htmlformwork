 function getvalue() {
            var clgname = document.getElementById('collegename').value;
            var clgyear = document.getElementById('year').value;
            var scholarship = document.getElementById('studid').value;
            var nametam = document.getElementById('studnametamil').value;
            var nameeng = document.getElementById('studnameenglish').value;
            var birth = document.getElementById('dob').value;
            var mothername = document.getElementById('momname').value;
            var fathername = document.getElementById('dadname').value;
            var guardianname = document.getElementById('guardname').value;
            var community = document.getElementById('communitylabel').value;
            var caste = document.getElementById('castename').value;
            var occupation = document.getElementById('parentoccupation').value;
            var offdetails = document.getElementById('officedetails').value;
            
            const names = {
                "collegename": clgname,
                "collegeyear": clgyear,
                "scholarstudid": scholarship,
                "studnametamil": nametam,
                "studnameenglish": nameeng,
                "dob": birth,
                "momname": mothername,
                "dadname": fathername,
                "guardname": guardianname,
                "communitydetails": community,
                "castename": caste,
                "parentoccupation": occupation,
                "officedetails": offdetails,

            }
            console.log(names)
        }