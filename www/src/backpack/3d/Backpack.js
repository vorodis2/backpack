

export class Backpack  {
    constructor(par, fun) {         
        this.type="Backpack";
        var self=this;
        this.par=par;
        this.fun=fun

        this.content3d = new THREE.Object3D();        
        this.par.content3d.add(this.content3d);

        this._index = -1;
        this._indexName = "null";
        this.at=[]
        this.atan=[]
        for (var j = 0; j < mainBig.objectBase.three.length; j++) {
            if(mainBig.objectBase.three[j].keyName&&mainBig.objectBase.three[j].keyName=="objArr"){
                this.at=mainBig.objectBase.three[j].array;
            }
        }

        for (var i = 0; i < this.at.length; i++) {
            this.atan[i]=this.at[i].keyName.split(",")
        }



        this.matNaC3d=function(c3d, nameMat){           
            if(c3d.material){
                let m=self.par.pm.mat.getIDReturn(nameMat, true)
                m.color=new THREE.Color(c3d.color)
                c3d.material=m;                
            }
        }
        

        this.creatMat=function(c3d){  
           /* for (var i = 0; i < c3d.children.length; i++) {
                for (var j = 0; j < self.atan.length; j++) {
                    if(self.atan[j].indexOf(c3d.children[i].name)!=-1){ 
                        c3d.children[i].color="#ffffff";

                        this.matNaC3d(c3d.children[i],self.at[j].array[0].id);
                    }
                }                
            }*/
        }

        this.setSob= function(s,p) {            
             
            if(s=="indexName") {
                this.indexName=p;
                if(this.array[this.index])this.array[this.index].startAnimat()
            }
            if(this._index!=-1){

                if(s=="color") {                    
                    if(this.array[this.index])this.array[this.index].color=p
                }
                if(s=="background") {                    
                    if(this.array[this.index])this.array[this.index].background=p
                }
                if(s=="picPosit") {                    
                    if(this.array[this.index])this.array[this.index].picPosit=p
                }
            }

        }

        this.id=-1
        this.three;
        this.c3d;  
        this.arrayCeh=[]
        this.array=[]
        this.setId=function(id,three){
            this.id=id
            this.three = three; 

            this.par.pm.getId(id, function(_c3d){               
               
                self.creat(_c3d)
            }) 
        }

        this.creat=function(_c3d){
            for (var i = 0; i < 2; i++) {
                if(this.content3d.children.length!=0) {
                    this.content3d.remove(this.content3d.children[0])
                    i=0;
                }       
            }
            this.c3d=_c3d
            self.content3d.add(_c3d)
            self.par.visi3D.intRend=1
            //self.creatMat(_c3d)
            this.clear();            
            //наполняем
            for (var i = 0; i < this.three.array.length; i++) {
                this.three.array[i].b=true;               
                let p=-1;
                for (var j = 0; j < _c3d.children.length; j++) {                    
                    if(this.three.array[i].b&&this.three.array[i].keyName==_c3d.children[j].name){
                        this.three.array[i].b=false
                        if(this.array[i]==undefined)this.array[i]=new BMaterial(this,i,this.sob)
                        this.array[i].set(_c3d.children[j], this.three.array[i])
                        j=9999
                    }
                }

            }


        }   

        this.sob=function(s,p){

        }



        self.par.visi3D.addChildMouse(self.content3d);

        this.clear=function(){
            for (var i = 0; i < this.array.length; i++) {
                this.array[i].clear()
            }

            

        }

        




        this.testIndex=function(name){            
            for (var i = 0; i < self.atan.length; i++) {
                if(self.atan[i].indexOf(name)!=-1){                    
                    return i;
                }                
            }
            return -1
        }

        this.redrag1=function(num){
            for (var i = 0; i < self.c3d.children.length; i++) {
                if(self.atan[this._index].indexOf(self.c3d.children[i].name)!=-1){  
                    this.matNaC3d(self.c3d.children[i],self.at[this._index].array[num].id);
                }
            }
        }
     
        this.setColor=function(color){

            for (var i = 0; i < self.c3d.children.length; i++) {
                if(self.atan[this._index].indexOf(self.c3d.children[i].name)!=-1){ 
                    self.c3d.children[i].color=color; 
                    self.c3d.children[i].material.color=new THREE.Color(color);
                }
            }
            self.par.visi3D.intRend=1

        }


        this.sten
        this.pointZdvig=new THREE.Vector3(0,0,0)
        var intersects
        var _xx, _yy, _bb
        var stenDown
        this.move = function (e) { 
            

        }


        this.out = function (e) { 
            if(e)if(e.target){
                if(e.target.bMaterial)e.target.bMaterial.actNa =false 

                
            }
            window.document.body.style.cursor = "auto";     
        }

      
        this.over = function (e) { 
            if(e)if(e.target){
                
                if(e.target.bMaterial){
                    e.target.bMaterial.actNa =true 
                    window.document.body.style.cursor = "pointer";  
                }
                
                
            } 
        }

      

        var blok=null
        var p={x:0,y:0}
        this.down = function (e) {
            if(e)if(e.target){
                if(e.target.bMaterial){
                    self.indexName=e.target.name
                    self.fun("indexName",e.target.name)
                    return
                }
            }

            if(self.indexName!="null"){                
                self.indexName="null";
                self.fun("indexName","null");
            }
        }
        this.tween = new TWEEN.Tween(self.par.visi3D);

        this.par.visi3D.addEvent("out", this.out);        
        this.par.visi3D.addEvent("over", this.over);
        this.par.visi3D.addEvent("down", this.down);
  	}


    set indexName(value) {
        if (this._indexName != value) {
            this._indexName = value
            this._index=-1
            for (var i = 0; i < this.array.length; i++) {
                if(this.array[i].name==this._indexName){
                    this.array[i].active=true
                    this._index=i
                }else{
                    this.array[i].active=false
                }
            }           
        }           
    }
    get indexName() { return this._indexName; }



    set index(value) {
        if (this._index != value) {
            this._index = value
                


        }           
    }
    get index() { return this._index; }
}


export class BMaterial  {
    constructor(par, idArr, fun) {         
        this.type="BMaterial";
        var self=this;
        this.par=par;
        this.fun=fun;

        this._color="#ffffff";  

        /*this.color2=0xffffff;        
        this.color1=0x7cc5d8;

        this.color2A=0xf2efe8;
        this.color1A=0x5ca598;*/

        this.color2=0x000000;        
        this.color1=0x111111;

        this.color2A=0x222222;
        this.color1A=0x333333;

        this._active=false;
        this._actNa=false;

        this._background="null";
        this._picPosit="null";                   
                  

        var wh=1024
        this.children=[]    
        this.canvas = document.createElement('canvas'); // канвас для картинки
        this.canvas.width=wh;
        this.canvas.height=wh;
        this.ctx = this.canvas.getContext('2d'); // контекст картинки

        this.cTexture=new THREE.CanvasTexture(this.canvas);
        this.cTexture.wrapS = THREE.RepeatWrapping;
        this.cTexture.wrapT = THREE.RepeatWrapping;
        this.cTexture.repeat.y = -1;


        this.material=new THREE.MeshPhongMaterial({color:this._color, map:this.cTexture});



        this.dragColor=function(){
            if(this._active==false){
                if(this._actNa==false){
                    this.material.emissive=new THREE.Color(this.color2);
                }else{
                    this.material.emissive=new THREE.Color(this.color2A);
                }                
            }else{
                if(this._actNa==false){
                    this.material.emissive=new THREE.Color(this.color1);
                }else{
                    this.material.emissive=new THREE.Color(this.color1A);
                }
            }
            this.par.par.visi3D.intRend=1
            visi3D.intRend=1; 
        }

        this.c3d
        this.obj
        this.object
        this.name="nullXZ"
        this.ro={x:0,y:0,w:1,h:1}
        this.set=function(c3d, obj){
            
            for (var i = 0; i < mainBig.objectBase.bd.length; i++) {                    
                if(mainBig.objectBase.bd[i].id==obj.id){
                    this.object=mainBig.objectBase.bd[i]
                }
            }
            trace("fgh",this.object)

            this.ro.x=0
            this.ro.y=0
            this.ro.w=1
            this.ro.h=1

            if(this.object.obj.iNum&& this.object.obj.iNum.num&& this.object.obj.iNum.num[2]!=0){
                this.ro.x=this.object.obj.iNum.num[0]
                this.ro.y=this.object.obj.iNum.num[1]
                this.ro.w=this.object.obj.iNum.num[2]
                this.ro.h=this.object.obj.iNum.num[3]
            }
            

            this.c3d=c3d;
            this.obj=obj;
            this.name=c3d.name
            c3d.material=this.material;
            c3d.bMaterial=this;
            this._active=false;
            this._actNa=false;
            this.dragColor()
        }

        this.clear=function(){
            this.name="nullXZ"
        }


        this.startAnimat=function(){
            
            if(!this.object.obj.iz)return
            if(!this.object.obj.iz.str)return    
            var s=this.object.obj.iz.str
            var ss=""
            for (var i = 0; i < s.length; i++) {                
                if(s[i]=='|')ss+='"';
                else ss+=s[i];    
            }
            var o=JSON.parse(ss);
            o.rotationZ=(Math.PI*2)%o.rotationZ
            this.par.par.visi3D.rotationZ=(Math.PI*2)%this.par.par.visi3D.rotationZ
            this.par.tween.stop()
            this.par.tween.to(o,500).start();
        }


        this.image = new Image();
        this.image.onload=function(){
          
            self.draw();            
        }

        this.image1 = new Image();
        this.image1.onload=function(){
            
            self.draw();            
        }
    
        this.draw=function(){
            trace("this.draw",this.color)
            this.ctx.clearRect(0, 0, wh, wh);
            this.ctx.fillStyle = this.color;

            this.ctx.fillRect(0, 0, wh, wh);
            this.ctx.fillStyle = this.color;
            this.ctx.drawImage(this.image1, 0, 0, wh, wh);
            this.ctx.drawImage(this.image, this.ro.x*wh, this.ro.y*wh, this.ro.w*wh, this.ro.h*wh);

            this.cTexture.needsUpdate = true
            this.material.needsUpdate = true 
            visi3D.intRend=1;  

        }

    }

    set background(value) {
        if (this._background != value) {
            this._background = value;
            this.image1.src=value;                  
        }           
    }
    get background() { return this._background; }


    set picPosit(value) {
        if (this._picPosit != value) {
            this._picPosit = value;
            trace(value)
            this.image.src=value;                  
        }           
    }
    get picPosit() { return this._picPosit; }

    set color(value) {
        
        if (this._color != value) {
            this._color = value
            this.draw()
        }           
    }
    get color() { return this._color; }


    set active(value) {
        if (this._active != value) {
            this._active = value;            
            this.dragColor()
        }           
    }
    get active() { return this._active; }

    set actNa(value) {
        if (this._actNa != value) {
            this._actNa = value;            
            this.dragColor()
        }           
    }
    get actNa() { return this._actNa; }
}

