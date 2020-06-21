



/**/
//import { Menu } from './menu/Menu.js';
import { Backpack } from './3d/Backpack.js';

import { MVisi3D } from '../libMy/visi3D/MVisi3D.js';
import { SceneSB } from '../libMy/visi3D/SceneSB.js';

//import { Grid } from './3d/Grid.js';

import { PM } from '../pm/PM.js';
/*import { FManager } from './fManager/FManager.js';*/


export class Glaf  {
  	constructor(main) {  		
  		this.type="Glaf";
  		var self=this;
  		this.content3d = new THREE.Object3D();
        this._index=-1;
        this._tipVisi=-1;
        this._tipDrav=-1;
        this._id=-1;

        this.idBool=false;
        this.idArr=[53]
        this.whSize=10000;

        this.mobile= main.mobile
        this.scale=1;
		this.dCont=undefined;
        this.main=main
        this.par=main
        this.otstup=5;
        this._free=true;
        /*this.dCont=new DCont(document.body);        
        this.dCV=new DCont();*/ 

        //new DButton(main.contentHTML,0,0,"this.down") 

        //this.saveLoacal=new SaveLoacal(this)
        //this.saveProdukt=new SaveProdukt(this)

        this.ser = window.location.href;
        var arrParams = this.ser.split("?");   
        var aa=arrParams[0].split("index");

        this.resurs="resources/";         
        //new Calc();    

        //порезаный от пикси вювер
        this.visi3D = new MVisi3D(main.contentHTML, null, this.mobile, true, false, true, true);     
        this.visi3D.yes3d = true;           
        this.visi3D.groupObject.add(this.content3d);
        this.content3d.rotation.x=-Math.PI/2;
        global.visi3D=this.visi3D

        //ловим и откидываем на сцену изменение камеры
        this.visi3D.fun_rotationZ = function () { 

            //trace(self.visi3D.rotationX, self.visi3D.rotationZ, "   ",self.visi3D.zume)
        }

        this.rec=function(c){            
            if(c.parent)this.rec(c.parent)
        }
        this.rec(self.content3d)

        //хрень принемашка ресурсов и настроек камеры для 
        this.sceneSB=new SceneSB(this.visi3D);
        for (var i = 0; i <  this.sceneSB.array.length; i++) {
            if (main.objectBase.scene[this.sceneSB.array[i].name] === undefined) {
                main.objectBase.scene[this.sceneSB.array[i].name] = {};                
            }            
            this.sceneSB.array[i].setBasa(main.objectBase.scene[this.sceneSB.array[i].name]);
        }


        //инит pm рузруливателя загрузки обьектов
        this.pm = new PM(this.visi3D, main.objectBase);  



       /* this.menu=new Menu(this,function(s,p){ 
            if(s=="index")self.index=p;
            if(s=="index1")self.backpack.redrag1(p);

            if(s=="color")self.backpack.setColor(p);
            self.visi3D.intRend=1 
        })*/


        this.backpack=new Backpack(this,function(s,p){ 
            if(s=="index")self.index=p;
            main.fun(s,p)
            self.visi3D.intRend=1 
        })

        var sah60=20
  		//ап дете сцена деленая на 2 в мейне
		this.update = function () {
			this.visi3D.upDate()
            sah60++
            if(sah60==30){
               this.visi3D.intRend=1 
            }
		}

        this.setId=function(id,three){
            this.backpack.setId(id,three)

        }
        this.setSob= function(s,p) {            
            this.backpack.setSob(s,p)        
        }



        //расчет окна
  		this.sizeWindow = function(w,h,s){    			
  			this.scale=s;
           // this.dCont.scale=s
            this.visi3D.sizeWindow(0,0,w,h);
            //this.menu.sizeWindow(w,h,s);
            
  		}
       // this.saveLoacal.init();
  	}

    set index(value) {
        if (this._index != value) {
            this._index = value;           
            //this.menu.index = value; 
            this.backpack.index = value;  
        }           
    }
    get index() { return this._index; }
  
}
/*
export class SaveLoacal  {
    constructor(par) {         
        this.type="SaveLoacal";
        this.par=par;
        this.localStorage=this.par.par.localStorage

        this.init=function(){
            if(this.localStorage.object.objSave==undefined)this.localStorage.object.objSave={}
            if(this.localStorage.object.objSave.index==undefined) this.localStorage.object.objSave.index=3;
            if(this.localStorage.object.objSave.tipVisi==undefined) this.localStorage.object.objSave.tipVisi=1; 
            if(this.localStorage.object.objSave.tipDrav==undefined) this.localStorage.object.objSave.tipDrav=1; 


            this.par.index=this.localStorage.object.objSave.index
            this.par.tipVisi=this.localStorage.object.objSave.tipVisi
            this.par.tipDrav=this.localStorage.object.objSave.tipDrav
        }

        this.save=function(){
            for(var s in this.localStorage.object.objSave){
                this.localStorage.object.objSave[s]=this.par[s]                
            }
            this.localStorage.save();
        }
    }
}

export class SaveProdukt  {
    constructor(par) { 
        var self=this        
        this.type="SaveProdukt";
        this.par=par;
        var php=new Php();
        this.php=php

        var object, strJson
        var id;
        var fun;
        var base64; 

        
        if(par.par.debug){
            var ccc;
            var ss='{"visi3D":{"xVerh":0,"yVerh":-166,"zVerh":0,"rotationX":0.7100000000000001,"rotationZ":0.21,"zume":842.1472800000001},"array":[{"sp":{"type":"SpStageSten","tipPoint":"SpPointSten","tipSplice":"SpliceSten","arrPoint":[{"type":"SpPointSten","idArr":0,"position":{"x":-444.41159134444115,"y":-199.38860684901556,"z":0}},{"type":"SpPointSten","idArr":1,"position":{"x":-432.9,"y":-4.9,"z":0}}],"arrSplice":[{"type":"SpliceSten","idArr":0,"delph":20,"tip":0,"position":{"x":-432.9,"y":-4.9,"z":0},"position1":{"x":-444.41159134444115,"y":-199.38860684901556,"z":0},"connected":{"arr":["69561418-28A8-4392-AF5F-397D3316C6F5"],"arr1":["69561418-28A8-4392-AF5F-397D3316C6F5"]},"uuid":"69561418-28A8-4392-AF5F-397D3316C6F5","windows":{"arr":[]},"boolText":true,"height":300,"col3d":"m_1","col3d1":"m_1"}],"arrPol":[]},"bazaMod":{"arrBlok":[{"id":17,"width":70,"depth":2,"height":70,"position":{"x":-428.17223656682387,"y":206.88871377823818,"z":-94.27024733896148},"rotation":1.6299163786475503,"vubor":[{"index":0,"keyName":"mat_001_"},{"index":0,"keyName":"mat_002_"}]}]},"podloshka":{"visible":true,"x":0,"y":0,"z":-3,"scale":100,"alpha":100,"rotation":0,"link":"null"}},{"sp":{"type":"SpStageSten","tipPoint":"SpPointSten","tipSplice":"SpliceSten","arrPoint":[{"type":"SpPointSten","idArr":0,"position":{"x":-52.251874999824395,"y":-244.7645598948502,"z":0}},{"type":"SpPointSten","idArr":1,"position":{"x":167.9,"y":-213.9,"z":0}},{"type":"SpPointSten","idArr":2,"position":{"x":313.2,"y":5.8,"z":0}},{"type":"SpPointSten","idArr":3,"position":{"x":240.9,"y":160.3,"z":0}}],"arrSplice":[{"type":"SpliceSten","idArr":0,"delph":20,"tip":0,"position":{"x":167.9,"y":-213.9,"z":0},"position1":{"x":-52.251874999824395,"y":-244.7645598948502,"z":0},"connected":{"arr":["A8696306-D146-4695-9ABC-AC9EAEE2F55C","630BC07E-CEAE-482E-BA52-906DE6E997B0"],"arr1":["A8696306-D146-4695-9ABC-AC9EAEE2F55C"]},"uuid":"A8696306-D146-4695-9ABC-AC9EAEE2F55C","windows":{"arr":[]},"boolText":true,"height":300,"col3d":"m_1","col3d1":"m_1"},{"type":"SpliceSten","idArr":1,"delph":20,"tip":0,"position":{"x":313.2,"y":5.8,"z":0},"position1":{"x":167.9,"y":-213.9,"z":0},"connected":{"arr":["630BC07E-CEAE-482E-BA52-906DE6E997B0","AC4C4C7C-A590-4665-89A4-CD5DD1519ED1"],"arr1":["A8696306-D146-4695-9ABC-AC9EAEE2F55C","630BC07E-CEAE-482E-BA52-906DE6E997B0"]},"uuid":"630BC07E-CEAE-482E-BA52-906DE6E997B0","windows":{"arr":[]},"boolText":true,"height":300,"col3d":"m_1","col3d1":"m_1"},{"type":"SpliceSten","idArr":2,"delph":20,"tip":0,"position":{"x":240.9,"y":160.3,"z":0},"position1":{"x":313.2,"y":5.8,"z":0},"connected":{"arr":["AC4C4C7C-A590-4665-89A4-CD5DD1519ED1"],"arr1":["630BC07E-CEAE-482E-BA52-906DE6E997B0","AC4C4C7C-A590-4665-89A4-CD5DD1519ED1"]},"uuid":"AC4C4C7C-A590-4665-89A4-CD5DD1519ED1","windows":{"arr":[]},"boolText":true,"height":300,"col3d":"m_2","col3d1":"m_2"}],"arrPol":[]},"bazaMod":{"arrBlok":[{"id":21,"width":155,"depth":132,"height":73,"position":{"x":142.01880509786173,"y":-9.766889680240394e-14,"z":-72.13839275500618},"rotation":-0.9864790808913022,"vubor":[{"index":0,"keyName":"iz"},{"index":0,"keyName":"mat_003"},{"index":0,"keyName":"iz1"},{"index":0,"keyName":"mat_004"}]}]},"podloshka":{"visible":true,"x":0,"y":0,"z":-3,"scale":100,"alpha":100,"rotation":0,"link":"null"}},{"sp":{"type":"SpStageSten","tipPoint":"SpPointSten","tipSplice":"SpliceSten","arrPoint":[],"arrSplice":[],"arrPol":[]},"bazaMod":{"arrBlok":[]},"podloshka":{"visible":true,"x":0,"y":0,"z":-3,"scale":100,"alpha":100,"rotation":0,"link":"null"}},{"sp":{"type":"SpStageSten","tipPoint":"SpPointSten","tipSplice":"SpliceSten","arrPoint":[],"arrSplice":[],"arrPol":[]},"bazaMod":{"arrBlok":[]},"podloshka":{"visible":true,"x":0,"y":0,"z":-3,"scale":100,"alpha":100,"rotation":0,"link":"null"}}]}'
            var h;
            var ccc;
            var str="";
            var b=new DButton(par.dCV,10,37,"g",f=>{
                ccc=par.home.getObj();          
                str=JSON.stringify(ccc)            
                input.text=str
            })
            b.width  = b.height=20 

            var h=new DButton(par.dCV,30,37,"s",f=>{
                ccc= JSON.parse(input.text)               
                par.home.setObj(ccc)
            })
            h.width  = h.height=20
            var input=new DInput(par.dCV,60,37,ss,f=>{                    
                
            })
            input.width  = 50;
            input.height=20;
        }

       
          

       


        this.grtMaxPlus = function(f){  
            var l = '../save/';  
            php.load({tip:"getDiractFiles", dir:l},function(e){                    
                    var rez=1
                    var aa=[];
                    var a=e.split(",");
                    for (var i = 1; i < a.length; i++) {
                        aa.push(a[i]*1)
                    }
                    for (var i = 0; i < aa.length; i++) {
                        if(aa[i]>=rez)rez=aa[i]+1
                    }
                    f(rez)

                }
            )
        }




        this.bool=false

        this.saveProdukt=function(f,_id){
            this.bool=false
            fun=f
            object=self.par.home.getObj();            
            strJson  =JSON.stringify(object);

            if(_id!=undefined){
                this.bool=true
                id=_id;
                self.saveProdukt2()
                return
            }

            
            

           // id=new Date().getTime()
            self.grtMaxPlus(function(num){
                id=num;
                self.saveProdukt1()
            })
        }
           
        this.saveProdukt1=function(){   

            php.load({tip: 'mkdir', dir: '../save/'+id}, function (e) { 
                self.saveProdukt2()
            })
        }

        this.saveProdukt2=function(){ 
            var l = '../save/'+id+"/config.json";  
            php.load({tip:"saveJSON", link:l, text:strJson},function(e){
                //self.saveLoad()
                self.savePic()
                var ll = '../save/'+id+"/icon.png"
                php.savePhoto(ll, base64, function () {                
                    fun(php.server+"?id="+id)
                    sizeWindow(); 
                    par.menu.mProdject.plusId(id);
                    par.id=id
                });
            });
        }


        var _xVerh,_yVerh,_zVerh,zume
        this.savePic=function(){
            this.par.grid.visible=false;

            this.par.fManager.planDrag.mesh.visible=false

            this.par.visi3D.utility.focus.active=true;
            this.par.visi3D.utility.focus.targetObject=this.par.home.array[0].content3d  
            self.par.visi3D.utility.focus.upDate();

            _xVerh=this.par.visi3D._xVerh;
            _yVerh=this.par.visi3D._yVerh;
            _zVerh=this.par.visi3D._zVerh;
            zume=this.par.visi3D.zume;




            var d=this.par.visi3D.utility.debug;
            this.par.visi3D.utility.debug=false;

            var sk=this.par.visi3D.utility.sky.active;
            this.par.visi3D.utility.sky.active=false;


            var alpha=true;
            var color=0xffffff;

            if(this.par.visi3D.alpha==false){
                alpha=false;            
                this.par.visi3D.renderer.setClearColor(color, 1);
            }

            var ww=this.par.visi3D._width
            var hh=this.par.visi3D._height
            
            this.par.visi3D.sizeWindow(0,0,256,256)
            this.par.visi3D.render();

            base64 = this.par.visi3D.renderer.domElement.toDataURL("image/png");

            
            this.par.visi3D.sizeWindow(0,0,ww,hh)
            this.par.visi3D.utility.debug=d

            this.par.visi3D.utility.sky.active=sk

            if(alpha==false){
                this.par.visi3D.renderer.setClearColor(this.par.visi3D.color, 1);                
            }
            self.par.visi3D.utility.focus.active=false;  
            this.par.grid.visible=true; 



            this.par.visi3D.zume=zume;
            this.par.visi3D.xVerh=_xVerh;
            this.par.visi3D.yVerh=_yVerh;
            this.par.visi3D.zVerh=_zVerh;
            this.par.fManager.planDrag.mesh.visible=true; 
                     

        }      
    }
}



*/






