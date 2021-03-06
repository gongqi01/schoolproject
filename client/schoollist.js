

  Template.schoollist.helpers({
    schools: function () {
      //display all schools 
      return QuerySchool();
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
          $('#message').replaceWith(GetMsg("Please fill all blanks.",2));
        else
	{
	  var id = InsertSchool(name,code,addr,emdo);
          
	  $("#addnewschoolform")[0].reset();
	  $('#message').replaceWith(GetMsg("<b>"+name+"</b> is added.",1));
	  Session.set("selectedID", id);
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
	var oldId = Session.get("selectedID");
	if (oldId != id)
		Session.set("selectedID", id);
	else
		Session.set("selectedID", "");
    },

    //edit the information of a selected school
    'click a[name=editbutton]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	id = id.substr(0, id.length-4)
	Session.set("selectedID", id);
	Modal.show('editModal');
    }
  });


Handlebars.registerHelper("display", function(id) {
	return id == Session.get("selectedID");
});

