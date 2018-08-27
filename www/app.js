appmodule.provider('myProvider',function(){
	var name="";
	var test={"a":1,"b":2};
	this.setName=function(newName){
		name=newName
	}
	this.$get=function(){
		return {
			"lastName":name,
			"test":test
		}
	}
})
appmodule.config(function(myProviderProvider){
	myProviderProvider.setName("大圣");
});