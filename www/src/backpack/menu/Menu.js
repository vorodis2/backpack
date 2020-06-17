/*import { MLeft } from './MLeft.js';
import { MVerh } from './MVerh.js';
import { MObject } from './MObject.js';
import { DragPic } from './DragPic.js';
import { MProdject } from './MProdject.js';
import MStepInfo from './MStepInfo'
import MTipVisi from './MTipVisi'


import { MInfo } from './MInfo.js';*/

/*
import {PLeftVerg } from './PLeftVerg.js';
import {PCentorVerg } from './PCentorVerg.js';

import {PNiz} from './PNiz.js';
import {PMap} from './PMap.js';
import {PPoint} from './PPoint.js';
import {PAddFloor} from './PAddFloor.js';
import {PCamPositions} from './PCamPositions.js';

import {PSave} from './PSave.js';*/
import {PSetings} from './PSetings.js';

export class Menu  {
  	constructor(par,fun) {  		
  		this.type="Menu";
  		var self=this;
        this.par=par
        this.fun=fun
        this._index=-1;
        this._id=-1;
        this.debug=par.debug
        this.otstup=4;
        this.otstup1=10;
        this.wh=100;

        this._indexSah=-1;

        this.array=[]

        this.dCont=new DCont(par.dCont);


        this.array[this.array.length]=this.pSetings=new PSetings(this, function(s,p){
            self.fun(s,p);
        });



  		this.sizeWindow = function(w,h,s) { 
            
            for (var i = 0; i < this.array.length; i++) {
               // trace(i+" ::  "+this.array[i].type)
                if(this.array[i])if(this.array[i].sizeWindow){
                    this.array[i].sizeWindow(w,h,s)
                    //trace(i+"   "+this.array[i].type)
                }
            }          
  		}

        this.setObj= function(o){
            //this.mLeft.setObj(o);                                
        }

  	}

    set index(value) {
        if (this._index != value) {
            this._index = value; 
            this.pSetings.index = value;
        }    
    }
    get index() { return this._index; }
}

