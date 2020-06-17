

export class BlokMaterial  {
    constructor(par, obj,idArr,fun) {         
        this.type="BlokMaterial";
        var self=this;
        this.par=par;
        this.fun=fun
        this.obj=obj
        this.idArr=idArr;
        this._color="null";

        trace(this.idArr,this.obj)
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


        this.material=new THREE.MeshPhongMaterial({color:0xffffff, map:this.cTexture});


        this.array=[];
        this.array.push(new BMObj(this,{
            x:this.obj.obj.iNum.num[0],
            y:this.obj.obj.iNum.num[1],
            w:this.obj.obj.iNum.num[2],
            h:this.obj.obj.iNum.num[3],
            active:true,
            link:"null"
        }))



        this.addChild=function(child){            
            this.children.push(child);
            child.material=this.material;
        }


        this.draw=function(){
            this.ctx.clearRect(0, 0, wh, wh);
            this.ctx.fillStyle = this.color;

            this.ctx.fillRect(0, 0, wh, wh);
            this.ctx.fillStyle = this.color;

          /*  this.ctx.strokeStyle = '#000000';
            this.ctx.moveTo( 0,  0 );
            for (var i = 0; i < 100; i++) {
                this.ctx.lineTo( wh*Math.random(),  wh*Math.random() );
            }
            this.ctx.stroke();*/




            trace("@@@@draw@@");
            for (var i = 0; i < this.array.length; i++) {
                trace(this.array[i].active,this.array[i].link,this.array[i].bLoad);
                if(this.array[i].active && this.array[i].link!="null" && this.array[i].bLoad==true){
                    trace("@########@");
                    this.ctx.drawImage(this.array[i].image, this.array[i].x*wh, this.array[i].y*wh, this.array[i].width*wh, this.array[i].height*wh);

                    //this.ctx.drawImage(this.array[i].image, 0, 0, wh, wh);
                
                    trace(this.array[i].image, this.array[i].x*wh, this.array[i].y*wh, this.array[i].width*wh, this.array[i].height*wh);
                    trace(this.par)
                    trace(this.par.image)
                    this.par.image.link=this.canvas.toDataURL("image/png");
                }
            }

            

            

            this.cTexture.needsUpdate = true
            this.material.needsUpdate = true 
            visi3D.intRend=1;           
        }

        this.color="#c7edfc";

        trace("par.dCont",par)
        
        //this.bat=new DButton(par.par.dCont,400,100)

  	}


    set color(value) {
        if (this._color != value) {
            this._color = value
            this.draw()
        }           
    }
    get color() { return this._color; }
}

export class BMObj  {
    constructor(par, obj,idArr,fun) {         
        this.type="BMObj";
        var self=this;
        this.par=par;
        this.fun=fun;
        this.obj=obj;
        this._active = this.obj.active;
        this._link = this.obj.link;
        this.bLoad = false;
        this._x = this.obj.x;
        this._y = this.obj.y;        
        this._width = this.obj.w;
        this._height = this.obj.h;        

        this.draw=function(){
            this.par.draw();
        }

        this.image = new Image();
        this.image.onload=function(){
            self.bLoad = true;            
            self.par.draw();            
        }

        if(this.obj.link!="null"){
            this.image.src=this.obj.link;
        }
    }

    set link(value) {
        if (this._link != value) {
            this._link = value;
            this.image.src=value;  
                   
        }           
    }
    get link() { return this._link; }


    set x(value) {
        if (this._x != value) {
            this._x = value
            this.draw()

        }           
    }
    get x() { return this._x; }

    set y(value) {
        if (this._y != value) {
            this._y = value
            this.draw()

        }           
    }
    get y() { return this._y; }

    set active(value) {
        if (this._active != value) {
            this._active = value
            this.draw()

        }           
    }
    get active() { return this._active; }

    set width(value) {
        if (this._width != value) {
            this._width = value
            this.draw()

        }           
    }
    get width() { return this._width; }

    set height(value) {
        if (this._height != value) {
            this._height = value
            this.draw()

        }           
    }
    get height() { return this._height; } 

}
