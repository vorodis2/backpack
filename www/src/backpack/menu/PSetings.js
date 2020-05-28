

import { MOBaza } from './MOBaza.js';

export class PSetings extends MOBaza {
    constructor(par,fun) {  
        super(par,fun);
        this.type="PSetings";

        var self=this;

        
        this._index=-1;

        this.dCont=new DCont(par.dCont);

        this.window=new DWindow(this.dCont,10,10,"Setings",function(){

        })
        this.window.width=300;
        

        var yy=this.otstup;
        this.array=[];


        var arrGal=[]





        function downGal () {
            if(this.idArr==0){
                self.fun("index",this._index)              
            }
            if(this.idArr==1){
                self.fun("index1",this._index)              
            }
        }

        var wh=(this.window.width-this.otstup*4)/3

        for (var i = 0; i < 2; i++) {
            arrGal[i]=new DGallery(this.window.content,this.otstup,this.otstup,downGal);          
            arrGal[i].kolII=3;
            arrGal[i].widthPic=arrGal[i].heightPic=wh; 
            arrGal[i].idArr=i
            arrGal[i].width=this.window.width-this.otstup*2
        } 

        for (var j = 0; j < mainBig.objectBase.three.length; j++) {
            if(mainBig.objectBase.three[j].keyName&&mainBig.objectBase.three[j].keyName=="objArr"){
                var aa=mainBig.objectBase.three[j].array
                for (var i = 0; i < aa.length; i++) {
                    aa[i].title=" "
                    aa[i].src = "resources/data/"+aa[i].id+"/256.png";
                }
                arrGal[0].start(aa);
                arrGal[0].height=2*(2+arrGal[0].heightPic)+3
            }
        }

        this.arrGal=arrGal

        this.window.height=32+arrGal[0].height+8;
       

        trace("objectBase",mainBig.objectBase)

        this.dragGal=function(ii){
            if(ii==-1){
                arrGal[0].index=-1
                arrGal[1].visible=false;
                this.window.height=32+arrGal[0].height+8;
            }else{
                arrGal[1].visible=true;
                arrGal[1].y=arrGal[0].height+arrGal[0].y+4

                var aa=arrGal[0].array[ii].object.array
                for (var i = 0; i < aa.length; i++) {
                    aa[i].title=" "
                    aa[i].src = "resources/data/"+aa[i].id+"/256.png";
                }
                arrGal[1].start(aa);
                arrGal[1].height=(Math.ceil(aa.length/3))*(2+arrGal[1].heightPic)+3

                arrGal[1].index=-1


                this.window.height=32+arrGal[1].height+arrGal[1].y+6;




                trace(ii,arrGal[0].array[ii].object)
            }
        }

        this.dragGal(-1)

       /* function openG (o,id) {
            if(o.array==undefined)return
            if(o.array.length==0)return 
            arrGal[2].visible=true;
            
            for (var i = 0; i < o.array.length; i++) {
                o.array[i].title=o.array[i].i
                o.array[i].src="resources/data/"+id+"/resources/"+o.array[i].name;
            }
            arrGal[2].start(o.array);
            arrGal[2].height=o.array.length*(2+arrGal[2].heightPic)+5

        }*/


        var w,h,s
        this.sizeWindow = function(_w,_h,_s){ 
            if(_w){
                w=_w;
                h=_h;
                s=_s;
            }

           /* this.p.width=_w/s;
            this.p.height=_h/s;

            let dd=this._sizeBase+this._indent*2
            let ss1=(_h/s-dd)/this._height
            let ss=ss1
            if(ss>1){
                ss=1;
            }            

            this.dCont1.x=(_w/s-this._width*ss)/2/ss;
            this.dCont1.y=(this._sizeBase+this._indent)/ss;
            if(ss1>1){
                this.dCont1.y-=(this._height-(_h/s-dd))/2
            }

            this.dCont1.scale=ss;*/
        }




    }

    set index(value) {
        if (this._index != value) {
            this._index = value;

            this.arrGal[0].index=value;

            if(this.arrGal[0].array[value]==undefined){
                this.dragGal(-1)
            }else{
                this.dragGal(value)
            }
            
        }           
    }
    get index() { return this._index; }


}

