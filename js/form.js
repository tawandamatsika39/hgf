var arr = [];
var myTableArray=[];
$(document).ready(function() {

    row();
    
    $("#upload").click(function() {

        //retreiving form values
        var f_name = $("#name").val();
        var l_name = $("#last_name").val();
        var email = $("#email").val();
        var dep = $("#dep").val();

        //js object
        var obj = {
            Name: f_name,
            LastName: l_name,
            Email: email,
            Department: dep
        };
        arr.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr); //JS Object (array) to JSON string
    });
});

var row = function() {

    if (localStorage.tbl) {
        arr = JSON.parse(localStorage.tbl); //JSON string to JS Object and retrieving
        for (var i = 0; i < arr.length; i++) {
            
            var first_name = arr[i].Name;
            var last_name = arr[i].LastName;
            var _email = arr[i].Email;
            var _dep = arr[i].Department;

            var row = "<tr><td>" + (i + 1) + "</td><td contenteditable=\"true\" >" +
                first_name + "</td><td contenteditable=\"true\" >" +
                last_name + "</td><td contenteditable=\"true\" >" +
                _email + "</td><td contenteditable=\"true\">" +
                _dep + "</td></tr>";

            $("table").append(row);
        }
    }
};


var update =function(){
	$("table tr").each(function(){
    	var arrayOfThisRow = [];
    	var tableData = $(this).find('td');
    	var obj_=null;
    	if (tableData.length > 0) {
        	tableData.each(function() { 
        		arrayOfThisRow.push($(this).text());
        	});
        	obj_={
        				Name :arrayOfThisRow[1],
        				LastName:arrayOfThisRow[2],
        				Email:arrayOfThisRow[3],
        				Department:arrayOfThisRow[4]
        	}
        	myTableArray.push(obj_);
    	}
	});
	localStorage.removeItem(localStorage.tbl); //fix this before sending solution

	localStorage.tbl = JSON.stringify(myTableArray);
    myTableArray = [];
}


