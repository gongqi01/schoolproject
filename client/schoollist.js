

  Template.schoollist.helpers({
    schools: function () {
      //display all schools 
      return ReadSchool();
    }
  });

  Template.schoollist.events({
    //insert a new school
    'click #submitbutton': function () {
	var name = $("#nameinput").val();
	var code = $("#codeinput").val();
	var addr = $("#addrinput").val();
	var emailtxt = $("#emdoinput").val()
	var emdo = "@"+emailtxt;
        if(!name || !code || !addr || !emailtxt)
          alert("Please fill all blanks");
        else
	{
	  CreateSchool(name,code,addr,emdo);
	  $("#addnewschoolform")[0].reset();
        }
    },
    
    //delete an existing school
    'click a[name=deletebutton]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	DeleteSchool(id);
    },
 

    //display details of a selected school
    'click td[name=details]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	var oldID = Session.get("toggledId");
	
	Session.set("toggledId", id);
	
	if (id != oldID)
	{
		$("#"+id+"div").css("display", "block");
		$("#"+oldID+"div").css("display", "none");	
	}	
	else
	{
		$("#"+id+"div").css("display", "none");
		Session.set("toggledId", "");
	}
    },

    //edit the information of a selected school
    'click a[name=editbutton]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	id = id.substr(0, id.length-4)
	Session.set("editID", id);
	Modal.show('editModal');
    }

	
  });


