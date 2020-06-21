

function MenuApi(fun) {     		
	this.type="Menu";
	var self=this;
    this.fun=fun
    this._index=-1;
    this._id=-1;
    this.otstup=4;
    this.otstup1=10;
    this.wh=100;

    this._indexSah=-1;

    this.array=[]; 


    this.dCont=new DCont(document.body);



    this.array[this.array.length]=this.setingsApi=new SetingsApi(this, function(s,p){
        self.fun(s,p);
    });


    this.setSob= function(s,p) { 
        if(s=="indexName"){
            this.setingsApi.setSob(s,p)
        }
    }



	this.sizeWindow = function(w,h,s) { 
        
        for (var i = 0; i < this.array.length; i++) {
           // trace(i+" ::  "+this.array[i].type)
            if(this.array[i])if(this.array[i].sizeWindow){
                this.array[i].sizeWindow(w,h,s)
                //trace(i+"   "+this.array[i].type)
            }
        } 
    }         
		

    this.setThree= function(o){        
        this.setingsApi.setThree(o);
    }
}

function SetingsApi(par, fun) {             
    this.type="Menu";
    var self=this;
    this.fun=fun;
    this.par=par;
    this.otstup=2
    

    this.window=new DWindow(this.par.dCont,10,10,"Элементы частей обьекта",function(){

    })
    this.window.width=300;
    var wh=(this.window.width-this.otstup*6)/3

    function downGal () {
        
        self.par.fun("indexName",this.array[this.index].object.keyName)
    }

    this.setSob= function(s,p) { 
        if(s=="indexName"){
            trace("dsfhasdjfbnasdkjfbnasdfkljn",p)
            let n=-1;
            for (var i = 0; i < this.object.array.length; i++) {
                trace(this.object.array[i])
                if(this.object.array[i].keyName==p){
                    n=i;
                    break
                }
            }
            this.gallery.index=n
        }
    }


    this.gallery = new DGallery(this.window.content,this.otstup,this.otstup,downGal);          
    this.gallery.kolII=3;
    this.gallery.widthPic=this.gallery.heightPic=wh; 
    this.gallery.idArr=0
    this.gallery.width=this.window.width-this.otstup*2

    this.object    
    this.setThree=function(o){
        this.object=o 
        var aa=this.object.array;        
        for (var i = 0; i < aa.length; i++) {
            aa[i].title=" "
            aa[i].src = "resources/data/"+aa[i].id+"/256.png";
        }
        this.gallery.start(aa);
        this.gallery.height=2*(2+this.gallery.heightPic)+3
        this.window.height=this.gallery.height+32+4       
    }

    this.sizeWindow = function(w,h,s) { 

    }
}

