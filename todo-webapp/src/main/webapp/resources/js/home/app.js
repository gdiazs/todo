(function(){
	
	var app = new Vue({
		
		el: "#app",
		data: {
			"message": "Hola mundo",
			"todos": [{"id": "uno"}, {"id": "dos"}, {"id": "tres"}],
			"atodo":{
				id: "",
				
			},
	
		},

		methods: {
			
			submit: function(){
				if(this.atodo.id.length > 0)
					this.todos.push({"id": this.atodo.id});
				this.atodo.id="";
			}
			
		}
	});
	
	
})();
