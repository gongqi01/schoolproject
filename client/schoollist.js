

  Template.schoollist.helpers({
    schools: function () {

      return Schools.find();
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
	  InsertSchool(name,code,addr,emdo);
	  $("#addnewschoolform")[0].reset();
        }
    },
    
    //delete an existing school
    'click a[name=deletebutton]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	Schools.remove({_id:id});
    },
 

    //toggle the school details
    'click td[name=details]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	var oldID = Session.get("toggledId");
	Session.set("toggledId", id);
	if (oldID)
		$("#"+oldID+"di").css("display", "none");
	if (id!=oldID)
		$("#"+id+"di").css("display", "block");
	else
		Session.set("toggledId", "");
    },

    //edit the school information
    'click a[name=editbutton]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	id = id.substr(0, id.length-4)
	Session.set("editID", id);
	Modal.show('editModal');
    }

	
  });


