module.exports=function(router){
	router.map({
		"/login":{
			component:function(resolve){
				require(["./components/login"],resolve)
			}
		},
		"/home":{
			component:function(resolve){
				require(["./components/home"],resolve)
			},
			subRoutes:{
				"/one1":{
					component:function(resolve){
						require(["./components/one"],resolve)
					},
				},
				"/two2":{
					component:function(resolve){
						require(["./components/two"],resolve)			
					}
				}
			}
		}
	})
}
