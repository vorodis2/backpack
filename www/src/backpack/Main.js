
/*
главный класиик, стартует основное, грузит конфиг

дев 
vorodis2.com   
vorodis2@gmail.com 
2019
*/

import { Glaf } from './Glaf.js';
import { LocalStorage } from '../localStorage/LocalStorageE6.js';

export class Main  {
  	constructor(fun) {  
  	trace("######asd####");		
 		this.type="Main";
  		this.fun=fun
  		var self=this;
		this.glaf=null;
		this._width=100;
		this._height=100;
		self.resolution=1
		self.objectBase=null
		self.confText=null 
        this.localStorage=undefined;
        this.debug=false
		this.contentHTML= document.createElement('div');
		this.contentHTML.style.position = 'fixed';
		this.contentHTML.style.top = '0px';
		this.contentHTML.style.left = '0px';
		document.body.appendChild(this.contentHTML);  		

		global.mainBig=this
		//создание сцены
  		this.start = function () {	   
			this.tick();            
            this.localStorage = new LocalStorage(null, "p3d");           
            if(self.localStorage.object.debug==undefined)self.localStorage.object.debug=false            
            this.debug=self.localStorage.object.debug;           
            this.fina();
		};

		function animate() {
			requestAnimationFrame( animate );
		}

		//стартуем дальше
        this.fina = function () {            	
			self.glaf=new Glaf(self)		
			sizeWindow()
			fun("init");
		}

		//тик размит надва
		var b=true
		this.tick = function () {
			b=!b;
			if(b==true){
				TWEEN.update();
				if (self.glaf) {
					self.glaf.update();
				}
			}			
			requestAnimationFrame(self.tick );			
		}

		this.boolCTRL=false
		this.keydown=function(e){
	        if(event.keyCode==17)self.boolCTRL=true

	        if(event.keyCode==81&&self.boolCTRL)  {
            	self.localStorage.object.debug=!self.localStorage.object.debug;
	            self.localStorage.save();

	        }            
	    }
	    this.keyup=function(e){
	        if(event.keyCode==17)self.boolCTRL=false
	    }

	    window.addEventListener( 'keydown', this.keydown );    
	    window.addEventListener( 'keyup', this.keyup );  
	   
		//Маштабим окна 
		this.scale=1;
		var s
  		this.sizeWindow = function(w,h){  			
  			self._width=w;
			self._height=h;
			if (self._width < 800) self._width = 800;
			if (self._height < 600) self._height = 600;
			s= w/self._width;
			if(s>h/self._height)s=h/self._height;
			if(dcmParam.mobile==false)s = 1;
			trace(s)	
			if(dcmParam.isIE==true)s= 1;	
			if(s<0.5)s=0.5
			this.scale = s;
					
			
  			if (self.glaf) { 
  				self.glaf.sizeWindow(w, h, this.scale)
  			}			
  		} 


  		//грузим базовый фаил
  		$.ajax({
            url: "resources/config.json",
            success: function function_name(data) {                         
                if(typeof data === "string") {
					var conf = JSON.parse(data)
					self.objectBase = conf;
				} else self.objectBase = data;						
				self.start();	                                
            },
            error:function function_name(data) {
                console.log("Что то случилось с конфигом")
            }
        });


  	}
}







