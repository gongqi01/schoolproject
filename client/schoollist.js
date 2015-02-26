

  Template.schoollist.helpers({
    schools: function () {

      return Schools.find();
    }
  });

  Template.schoollist.events({
    'click #submitbutton': function () {
	var name = $("#nameinput").val();
	var code = $("#codeinput").val();
	var addr = $("#addrinput").val();
	var emdo = "@"+$("#emdoinput").val();
	InsertSchool(name,code,addr,emdo);
	$("#addnewschoolform")[0].reset();
    },

    'click a[name=deletebutton]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	Schools.remove({_id:id});
    },

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

    'click a[name=editbutton]':function (event) {
	var x = event.currentTarget;
	var id = x.getAttribute("id");
	id = id.substr(0, id.length-4)
	Session.set("editID", id);
	Modal.show('editModal');
    }

	
  });


