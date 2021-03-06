
  Template.editModal.helpers({
    name: function () {
	var out = "name";
	var doc = getDoc();
	if (doc)
		out = doc.name;
      return out;
    },
    code : function () {
	var out = "code";
	var doc = getDoc();
	if (doc)
		out = doc.code;
      return out;
    },
    addr : function () {
	var out = "addr";
	var doc = getDoc();
	if (doc)
		out = doc.address;
      return out;
    },
    emdo : function () {
	var out = "@emdo";
	var doc = getDoc();
	if (doc)
		out = doc.emailDomain;
	out = out.substring(1,out.length);
      return out;
    }
  });

  Template.editModal.events({
    'click #submitbutton': function () {
	var name = $("#nameinputm").val();
	var code = $("#codeinputm").val();
	var addr = $("#addrinputm").val();
	var emdo = "@"+$("#emdoinputm").val();
	var id = Session.get("selectedID");
	UpdateSchool(id, name,code,addr,emdo);
	$("#addnewschoolform")[0].reset();
    }
  });

function getDoc() {
	var id = Session.get("selectedID");
	return Schools.findOne({_id:id});
}
