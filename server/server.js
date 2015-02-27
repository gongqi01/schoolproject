 Meteor.startup(function () {

	//only for the project test: clear all the data in the database, 
        // and create the original data
	Schools.remove({});

	var tempdata = [{
	    "name" : "Straw Nest Primary School",
	    "code" : "003",
	    "address" : "10 Showground Road",
	    "emailDomain" : "@straw-nest.com.au"
	},
	{
	    "name" : "Francis Park High School",
	    "code" : "004",
	    "address" : "21 Richmond Road",
	    "emailDomain" : "@francis-park.com.au"

	},
	{
	    "name" : "Maria Teresa Piccio",
	    "code" : "MTP",
	    "address" : "Cape Street",
	    "emailDomain" : "@maria-teresa.com.au"
	},
	{
	    "name" : "Nomen Nescio",
	    "code" : "NN",
	    "address" : "McDonald Street",
	    "emailDomain" : "@nomen-nescio.com.au"
	}];

	for (var i = 0; i<tempdata.length; i++)
		Schools.insert(tempdata[i]);

 });
