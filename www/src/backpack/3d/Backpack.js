

export class Backpack  {
    constructor(par, fun) {         
        this.type="Backpack";
        var self=this;
        this.par=par;
        this.fun=fun

        this.content3d = new THREE.Object3D();        
        this.par.content3d.add(this.content3d);

        this._index = -1; 
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
            for (var i = 0; i < c3d.children.length; i++) {
                for (var j = 0; j < self.atan.length; j++) {
                    if(self.atan[j].indexOf(c3d.children[i].name)!=-1){ 
                        c3d.children[i].color="#ffffff";

                        this.matNaC3d(c3d.children[i],self.at[j].array[0].id);
                    }
                }                
            }
        }


        this.c3d;


        this.par.pm.getId(15, function(_c3d){ 
            self.c3d =  _c3d               
            self.content3d.add(_c3d)
            self.par.visi3D.intRend=1
            self.par.visi3D.addChildMouse(_c3d); 
            self.creatMat(_c3d)
        })


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

            }
            window.document.body.style.cursor = "auto";     
        }

      
        this.over = function (e) { 
            if(e)if(e.target){
                let p=self.testIndex(e.target.name)
                if(p!=-1){
                    window.document.body.style.cursor = "pointer";  
                }
                
            } 
        }

      

        var blok=null
        var p={x:0,y:0}
        this.down = function (e) {
            if(e)if(e.target){
                let p=self.testIndex(e.target.name)
                if(p!=-1){
                    self.fun("index",p)
                    return
                }
            }
            if(self._index!=-1)self.fun("index",-1)
        }

        this.par.visi3D.addEvent("out", this.out);        
        this.par.visi3D.addEvent("over", this.over);
        this.par.visi3D.addEvent("down", this.down);
  	}


    set index(value) {
        if (this._index != value) {

            for (var i = 0; i < this.c3d.children.length; i++) {
                if(this.atan[this._index]){
                    if(this.atan[this._index].indexOf(this.c3d.children[i].name)!=-1){ 
                        this.c3d.children[i].material.emissive.r=0;
                        this.c3d.children[i].material.emissive.g=0;
                        this.c3d.children[i].material.emissive.b=0;
                    }
                } 
            }

            this._index = value;

            let p=0.5
            
            for (var i = 0; i < this.c3d.children.length; i++) {
                if(this.atan[this._index]){
                    if(this.atan[this._index].indexOf(this.c3d.children[i].name)!=-1){ 
                        this.c3d.children[i].material.emissive.r=p;
                        this.c3d.children[i].material.emissive.g=p;
                        this.c3d.children[i].material.emissive.b=p;

                    }
                } 
            }


        }           
    }
    get index() { return this._index; }
}
