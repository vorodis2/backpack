

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

    this.setGal= function(a) { 
        this.setingsApi.setGal(a)
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
        self.window2.visible=true;
        self.par.fun("indexName",this.array[this.index].object.keyName)
    }

    this.setSob= function(s,p) { 
        if(s=="indexName"){
            
            let n=-1;
            for (var i = 0; i < this.object.array.length; i++) {
                trace(this.object.array[i])
                if(this.object.array[i].keyName==p){
                    n=i;
                    break
                }
            }
            this.gallery.index=n;
            if(n==-1)this.window2.visible=false;
            else this.window2.visible=true;
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


    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////

    function downGal1 () {        
        //self.par.fun("indexName",this.array[this.index].object.keyName)
        
        if(self.arrBut[self.nnn].obj.keyName=="background") {
            self.par.fun("background","resources/data/"+self.arrBut[self.nnn].obj.array[this.index].id+"/pic.png")
        } 

        if(self.arrBut[self.nnn].obj.keyName=="color"){
            trace(self.arrBut[self.nnn].obj.array[this.idArr].keyName)            
            self.par.fun("color",self.arrBut[self.nnn].obj.array[this.index].keyName)
        }  
           
        if(self.arrBut[self.nnn].obj.keyName=="picPosit"){
            trace(self.arrBut[self.nnn].obj.array[this.index])
            self.par.fun("picPosit","resources/data/"+self.arrBut[self.nnn].obj.array[this.index].id+"/pic.png")
        }    
    }
    function downBut () {        
        self.openGal(this.idArr)
    }
    this.window2=new DWindow(this.par.dCont,10,280,"Цвет/картинки",function(){

    })
    this.window2.width=300;
    this.window2.visible=false

    this.gallery1 = new DGallery(this.window2.content,this.otstup,this.otstup+34,downGal1);          
    this.gallery1.kolII=3;
    this.gallery1.widthPic=this.gallery1.heightPic=wh; 
    this.gallery1.idArr=0
    this.gallery1.width=this.window2.width-this.otstup*2

    this.gallery1.height=2*(2+this.gallery1.heightPic)+3
    this.window2.height=this.gallery.height+32+4 +34

    this.arrayColor
    this.arrBut=[]
    this.nnn
    this.setGal= function(a) { 
        this.arrayColor=a;
        
        for (var i = 0; i < a.length; i++) {
            this.arrBut[i]=new DButton(this.window2.content,100*i,this.otstup,a[i].keyName,downBut)
            this.arrBut[i].idArr=i;
            this.arrBut[i].obj=a[i];
        }

        this.openGal(0)
    }

    this.openGal= function(n) { 
        
        this.nnn=n;
        for (var i = 0; i < this.arrBut.length; i++) {
            this.arrBut[i].alpha=1
        }
        this.arrBut[n].alpha=0.5;
        let aa=this.arrBut[n].obj.array
        for (var i = 0; i < aa.length; i++) {
            aa[i].title=''//aa[i].keyName
            aa[i].src = "resources/data/"+aa[i].id+"/256.png";
        }
        this.gallery1.start(aa);
    }




    this.sizeWindow = function(w,h,s) { 

    }
}

