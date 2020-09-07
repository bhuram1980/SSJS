<script runat="server">
Platform.Load("core","1.1");
var deObj = {
    "CustomerKey" : "1demoDE",
    "Name" : "My Demo DE",
    "Fields" : [
      { "Name" : "Field 1", "FieldType" : "Number", "IsPrimaryKey" : true, "IsRequired" : true },
      { "Name" : "Field 2", "FieldType" : "Text", "MaxLength" : 50 },
      { "Name" : "Field 3", "FieldType" : "Date", "Ordinal" : 2 }
    ]
 };

var myDE = DataExtension.Add(deObj);
</script>
