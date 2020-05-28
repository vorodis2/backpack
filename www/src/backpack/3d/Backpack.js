

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
                let m=self.par.pm.mat.getIDReturn(nameMat)
                c3d.material=m;                
            }
        }
        

        this.creatMat=function(c3d){  
            for (var i = 0; i < c3d.children.length; i++) {
                for (var j = 0; j < self.atan.length; j++) {
                    if(self.atan[j].indexOf(c3d.children[i].name)!=-1){                       
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
                    return i
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
     



        this.sten
        this.pointZdvig=new THREE.Vector3(0,0,0)
        var intersects
        var _xx, _yy, _bb
        var stenDown
        this.move = function (e) { 
            
           /* if(e)if(e.target)if(e.target.sten){ 
                
                if(self.object!=undefined){

                    _bb=true
                    if(self.object.parent!=undefined)
                    if(self.mPanel.parent!=undefined)     
                    
                    if(stenDown!=undefined){
                        if(self.object.parent.parent!=undefined)if(self.object.parent.parent.idArr==stenDown.idArr)_bb=false
                        if(self.object.parent!=undefined)if(self.object.parent.idArr==stenDown.idArr)_bb=false    
                    }                         

                    if(_bb==false){                            
                        intersects=self.par.par.par.visi3D.event3DArr.raycaster.intersectObjects([self.mPanel], true);                        
                        if(intersects[0]){
                            _xx=self.pointZdvig.x + (intersects[0].uv.x-0.5)*self.whDrag;
                            _yy=self.pointZdvig.y + (intersects[0].uv.y-0.5)*self.whDrag;
                            self.object.setXY(_xx, _yy)                    
                            self.fun("visi3d");
                            self.par.visiActiv.dragActiv() 
                            _bb=false
                        }                                                
                    } 

                    if(_bb==true){
                        _xx=e.uv.x*e.target.sten.width;
                        _yy=e.uv.y*e.target.sten.height;
                        self.object.setXY(_xx, _yy)                    
                        self.fun("visi3d");
                        self.par.visiActiv.dragActiv() 
                    }                    
                }
            } 

            if(self.object)if(self.object.parent==undefined){
                self.over(e)

            } */
        }


        this.out = function (e) { 
            //trace(e)
            if(e)if(e.target){  
                

            }
            window.document.body.style.cursor = "auto";   
           /* if(self.par.par.bactive==false)return          
            if(e)if(e.target)if(e.target.sten){                
                self.sten=undefined
                if(self.object!=undefined){//разруливаем тоскаемый элемент                    
                    if(self.object.parent!=undefined){                         
                        e.target.sten.remove(self.object); 
                        var l=self.getLink(self.object.object)                        
                        self.glaf.dragPic.start(32, l, null,null,true);
                        self.dragPriceScane()  
                        self.fun("visi3d"); 

                    }
                    if(self.object.outDrag)self.object.outDrag()
                }
            }
            window.document.body.style.cursor = "auto";    
            blok=null 
            self.par.visiActiv.dragActiv() */      
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


                    //self.matNaC3d(e.target, self.at[p].array[0].id)

                    


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
            this._index = value;
        }           
    }
    get index() { return this._index; }
}
