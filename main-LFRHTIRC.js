import{a as F}from"./chunk-VV4QBSV7.js";import{a as $e,b as We,c as qe,d as ze,e as w,h as Ze}from"./chunk-MBKMWK75.js";import{a as Ye}from"./chunk-245LDYPF.js";import{a as Ve,i as je,m as He,n as J,o as Be,p as Ue,q as Le}from"./chunk-Y6W2ESD6.js";import{$a as Re,Aa as ye,Da as O,Ea as D,Ia as P,K as Ne,La as Pe,Ma as Ce,N as $,Na as g,O as W,P as x,Q as me,Ra as a,S as V,Sa as l,Ta as v,U as q,Ua as k,V as f,Va as Y,X as A,Y as ge,Z as m,Za as h,_a as ke,a as u,ab as X,b as p,bb as M,da as ve,ea as z,fa as Z,fb as Te,ga as Oe,j as Se,ka as N,lb as Ge,m as Ie,oa as _e,qb as R,r as L,rb as _,x as xe,xa as d,ya as s}from"./chunk-2FX5CELB.js";var nt=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(s(ye),s(_e))}}static{this.\u0275dir=m({type:i})}}return i})(),Ot=(()=>{class i extends nt{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Oe(i)))(r||i)}})()}static{this.\u0275dir=m({type:i,features:[D]})}}return i})(),rt=new V("");var Pt={provide:rt,useExisting:W(()=>ae),multi:!0};function kt(){let i=Ve()?Ve().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Rt=new V(""),ae=(()=>{class i extends nt{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!kt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(s(ye),s(_e),s(Rt,8))}}static{this.\u0275dir=m({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&k("input",function(c){return r._handleInput(c.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(c){return r._compositionEnd(c.target.value)})},features:[X([Pt]),D]})}}return i})();function y(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function ot(i){return i!=null&&typeof i.length=="number"}var st=new V(""),at=new V(""),Tt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,b=class{static min(e){return Gt(e)}static max(e){return jt(e)}static required(e){return Ht(e)}static requiredTrue(e){return Bt(e)}static email(e){return Ut(e)}static minLength(e){return Lt(e)}static maxLength(e){return $t(e)}static pattern(e){return Wt(e)}static nullValidator(e){return lt(e)}static compose(e){return ft(e)}static composeAsync(e){return gt(e)}};function Gt(i){return e=>{if(y(e.value)||y(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function jt(i){return e=>{if(y(e.value)||y(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function Ht(i){return y(i.value)?{required:!0}:null}function Bt(i){return i.value===!0?null:{required:!0}}function Ut(i){return y(i.value)||Tt.test(i.value)?null:{email:!0}}function Lt(i){return e=>y(e.value)||!ot(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function $t(i){return e=>ot(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function Wt(i){if(!i)return lt;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(y(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function lt(i){return null}function ut(i){return i!=null}function ct(i){return Te(i)?Ie(i):i}function dt(i){let e={};return i.forEach(t=>{e=t!=null?u(u({},e),t):e}),Object.keys(e).length===0?null:e}function ht(i,e){return e.map(t=>t(i))}function qt(i){return!i.validate}function pt(i){return i.map(e=>qt(e)?e:t=>e.validate(t))}function ft(i){if(!i)return null;let e=i.filter(ut);return e.length==0?null:function(t){return dt(ht(t,e))}}function mt(i){return i!=null?ft(pt(i)):null}function gt(i){if(!i)return null;let e=i.filter(ut);return e.length==0?null:function(t){let n=ht(t,e).map(ct);return xe(n).pipe(L(dt))}}function vt(i){return i!=null?gt(pt(i)):null}function Xe(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function _t(i){return i._rawValidators}function yt(i){return i._rawAsyncValidators}function De(i){return i?Array.isArray(i)?i:[i]:[]}function Q(i,e){return Array.isArray(i)?i.includes(e):i===e}function Je(i,e){let t=De(e);return De(i).forEach(r=>{Q(t,r)||t.push(r)}),t}function Ke(i,e){return De(e).filter(t=>!Q(i,t))}var ee=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=mt(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=vt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},I=class extends ee{get formDirective(){return null}get path(){return null}},B=class extends ee{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},te=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},zt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},$i=p(u({},zt),{"[class.ng-submitted]":"isSubmitted"}),Ct=(()=>{class i extends te{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(B,2))}}static{this.\u0275dir=m({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Ce("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[D]})}}return i})(),Vt=(()=>{class i extends te{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(I,10))}}static{this.\u0275dir=m({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&Ce("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[D]})}}return i})();var T="VALID",K="INVALID",E="PENDING",G="DISABLED",C=class{},ie=class extends C{constructor(e,t){super(),this.value=e,this.source=t}},j=class extends C{constructor(e,t){super(),this.pristine=e,this.source=t}},H=class extends C{constructor(e,t){super(),this.touched=e,this.source=t}},S=class extends C{constructor(e,t){super(),this.status=e,this.source=t}},be=class extends C{constructor(e){super(),this.source=e}},Ae=class extends C{constructor(e){super(),this.source=e}};function Dt(i){return(le(i)?i.validators:i)||null}function Zt(i){return Array.isArray(i)?mt(i):i||null}function bt(i,e){return(le(e)?e.asyncValidators:i)||null}function Yt(i){return Array.isArray(i)?vt(i):i||null}function le(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Xt(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new $(1e3,"");if(!n[t])throw new $(1001,"")}function Jt(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new $(1002,"")})}var ne=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=R(()=>this.statusReactive()),this.statusReactive=O(void 0),this._pristine=R(()=>this.pristineReactive()),this.pristineReactive=O(!0),this._touched=R(()=>this.touchedReactive()),this.touchedReactive=O(!1),this._events=new Se,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return _(this.statusReactive)}set status(e){_(()=>this.statusReactive.set(e))}get valid(){return this.status===T}get invalid(){return this.status===K}get pending(){return this.status==E}get disabled(){return this.status===G}get enabled(){return this.status!==G}get pristine(){return _(this.pristineReactive)}set pristine(e){_(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return _(this.touchedReactive)}set touched(e){_(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Je(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Je(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ke(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ke(e,this._rawAsyncValidators))}hasValidator(e){return Q(this._rawValidators,e)}hasAsyncValidator(e){return Q(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(p(u({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new H(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new H(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(p(u({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new j(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new j(!0,n))}markAsPending(e={}){this.status=E;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new S(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(p(u({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=G,this.errors=null,this._forEachChild(r=>{r.disable(p(u({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ie(this.value,n)),this._events.next(new S(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(p(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=T,this._forEachChild(n=>{n.enable(p(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(p(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===T||this.status===E)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new ie(this.value,t)),this._events.next(new S(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(p(u({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?G:T}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=E,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=ct(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new S(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?G:this.errors?K:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(E)?E:this._anyControlsHaveStatus(K)?K:T}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new j(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new H(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){le(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Zt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Yt(this._rawAsyncValidators)}},re=class extends ne{constructor(e,t,n){super(Dt(t),bt(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Jt(this,!0,e),Object.keys(e).forEach(n=>{Xt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,o)=>{n=t(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var At=new V("CallSetDisabledState",{providedIn:"root",factory:()=>Me}),Me="always";function Kt(i,e){return[...e.path,i]}function Qe(i,e,t=Me){we(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),ei(i,e),ii(i,e),ti(i,e),Qt(i,e)}function et(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),se(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function oe(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Qt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function we(i,e){let t=_t(i);e.validator!==null?i.setValidators(Xe(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=yt(i);e.asyncValidator!==null?i.setAsyncValidators(Xe(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();oe(e._rawValidators,r),oe(e._rawAsyncValidators,r)}function se(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=_t(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==e.validator);o.length!==r.length&&(t=!0,i.setValidators(o))}}if(e.asyncValidator!==null){let r=yt(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==e.asyncValidator);o.length!==r.length&&(t=!0,i.setAsyncValidators(o))}}}let n=()=>{};return oe(e._rawValidators,n),oe(e._rawAsyncValidators,n),t}function ei(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Mt(i,e)})}function ti(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Mt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Mt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ii(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function ni(i,e){i==null,we(i,e)}function ri(i,e){return se(i,e)}function oi(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function si(i){return Object.getPrototypeOf(i.constructor)===Ot}function ai(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function li(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(o=>{o.constructor===ae?t=o:si(o)?n=o:r=o}),r||n||t||null}function ui(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function tt(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function it(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var ue=class extends ne{constructor(e=null,t,n){super(Dt(t),bt(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),le(t)&&(t.nonNullable||t.initialValueIsDefault)&&(it(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){tt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){tt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){it(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ci=i=>i instanceof ue;var wt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=m({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Ft=new V("");var di={provide:I,useExisting:W(()=>Fe)},Fe=(()=>{class i extends I{get submitted(){return _(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=R(()=>this._submittedReactive()),this._submittedReactive=O(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new N,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(se(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return Qe(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){et(t.control||null,t,!1),ui(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),ai(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new be(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new Ae(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(et(n||null,t),ci(r)&&(Qe(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);ni(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&ri(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){we(this.form,this),this._oldForm&&se(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(s(st,10),s(at,10),s(At,8))}}static{this.\u0275dir=m({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&k("submit",function(c){return r.onSubmit(c)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[X([di]),D,ve]})}}return i})();var hi={provide:B,useExisting:W(()=>Ee)},Ee=(()=>{class i extends B{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,o,c){super(),this._ngModelWarningConfig=c,this._added=!1,this.name=null,this.update=new N,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=li(this,o)}ngOnChanges(t){this._added||this._setUpControl(),oi(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Kt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(s(I,13),s(st,10),s(at,10),s(rt,10),s(Ft,8))}}static{this.\u0275dir=m({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[X([hi]),D,ve]})}}return i})();var pi=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=ge({type:i})}static{this.\u0275inj=me({})}}return i})();var Et=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Ft,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:At,useValue:t.callSetDisabledState??Me}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=ge({type:i})}static{this.\u0275inj=me({imports:[pi]})}}return i})();var ce=class i{constructor(e){this.http=e}login(e){let t=new He({skip:"true","Content-Type":"application/json"});return this.http.post("https://dummyjson.com/auth/login",e,{headers:t})}static \u0275fac=function(t){return new(t||i)(q(J))};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})};function vi(i,e){i&1&&(a(0,"span",15),h(1,"Username should be more than 6 characters"),l())}function _i(i,e){i&1&&(a(0,"span",15),h(1,"Please enter a valid username"),l())}function yi(i,e){i&1&&(a(0,"span",15),h(1,"Password should be more than 6 characters"),l())}function Ci(i,e){i&1&&(a(0,"span",15),h(1,"Please enter a valid password"),l())}function Vi(i,e){if(i&1&&(a(0,"span",15),h(1),l()),i&2){let t=Y();d(),ke(t.loginError)}}var de=class i{constructor(e,t,n){this.authService=e;this.tokenService=t;this.router=n}loginForm;loginError;ngOnInit(){this.loginForm=new re({username:new ue("",[b.required,b.minLength(6)]),password:new ue("",[b.required,b.minLength(6)])})}onSubmit(){console.log(this.loginForm.value),this.authService.login(this.loginForm.value).subscribe({next:e=>{this.tokenService.storeToken(e.accessToken),this.router.navigate(["nevo"],{replaceUrl:!0}),console.log(e)},error:e=>{console.log(e),this.loginForm.reset()}})}static \u0275fac=function(t){return new(t||i)(s(ce),s(F),s(w))};static \u0275cmp=A({type:i,selectors:[["app-login"]],standalone:!0,features:[M],decls:35,vars:6,consts:[[1,"bg-login","bg-cover"],[1,"container"],[1,"row","align-items-center","justify-content-center","vh-100"],[1,"col-12","col-md-6","col-lg-3"],[1,"row","gy-5",3,"ngSubmit","formGroup"],[1,"col-12"],["xmlns","http://www.w3.org/2000/svg","width","40","height","40","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-chevron-double-up","mx-auto","d-block","text-white"],["fill-rule","evenodd","d","M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"],["fill-rule","evenodd","d","M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"],[1,"display-5","text-uppercase","text-center","text-white","mb-0"],[1,"d-flex","flex-column","gap-3"],[1,"px-3","py-1","bg-light","opacity-50","d-flex","align-items-center","rounded-pill"],["xmlns","http://www.w3.org/2000/svg","width","25","height","25","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-person","text-dark"],["d","M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"],["placeholder","username","type","text","formControlName","username",1,"form-control","shadow-none","border-0"],[1,"ms-3","small","text-danger"],["xmlns","http://www.w3.org/2000/svg","width","25","height","25","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-key","text-dark"],["d","M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"],["d","M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"],["placeholder","password","type","password","formControlName","password",1,"form-control","shadow-none","border-0"],["type","submit",1,"btn","w-100","btn-warning","rounded-pill","text-white"]],template:function(t,n){t&1&&(a(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",4),k("ngSubmit",function(){return n.onSubmit()}),a(5,"div",5)(6,"div"),z(),a(7,"svg",6),v(8,"path",7)(9,"path",8),l()(),Z(),a(10,"h1",9),h(11,"Nevo"),l()(),a(12,"div",5)(13,"div",10)(14,"div")(15,"div",11)(16,"span"),z(),a(17,"svg",12),v(18,"path",13),l()(),Z(),v(19,"input",14),l(),P(20,vi,2,0,"span",15)(21,_i,2,0,"span",15),l(),a(22,"div")(23,"div",11)(24,"span"),z(),a(25,"svg",16),v(26,"path",17)(27,"path",18),l()(),Z(),v(28,"input",19),l(),P(29,yi,2,0,"span",15)(30,Ci,2,0,"span",15)(31,Vi,2,1,"span",15),l()()(),a(32,"div",5)(33,"button",20),h(34,"Login"),l()()()()()()()),t&2&&(d(4),Pe("formGroup",n.loginForm),d(16),g(n.loginForm.controls.username.hasError("minlength")&&n.loginForm.controls.username.touched?20:-1),d(),g(!n.loginForm.controls.username.valid&&n.loginForm.controls.username.touched&&!n.loginForm.controls.username.hasError("minlength")?21:-1),d(8),g(n.loginForm.controls.password.hasError("minlength")&&n.loginForm.controls.password.touched?29:-1),d(),g(!n.loginForm.controls.password.valid&&n.loginForm.controls.password.touched&&!n.loginForm.controls.password.hasError("minlength")?30:-1),d(),g(n.loginError&&!n.loginForm.touched?31:-1))},dependencies:[Et,wt,ae,Ct,Vt,Fe,Ee],styles:['.bg-login[_ngcontent-%COMP%]{background-image:url("./media/bg-login-26D6GMWY.avif")}']})};var he=class i{constructor(e){this.http=e}getUser(){return this.http.get("https://dummyjson.com/auth/me")}static \u0275fac=function(t){return new(t||i)(q(J))};static \u0275prov=x({token:i,factory:i.\u0275fac,providedIn:"root"})};function Di(i,e){if(i&1&&(a(0,"h1",2),h(1),l(),a(2,"p",3),h(3,"Please select a product"),l()),i&2){let t=Y();d(),Re("Welcome ",t.user,"")}}var pe=class i{userService=f(he);loaderService=f(Ye);user;ngOnInit(){this.loaderService.showLoader(),this.userService.getUser().subscribe({next:e=>{console.log(e);let{firstName:t}=e;console.log("called user"),this.loaderService.hideLoader(),this.user=t}})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=A({type:i,selectors:[["app-home"]],standalone:!0,features:[M],decls:3,vars:1,consts:[[1,"h-home-page","d-flex","align-items-center","justify-content-center","w-100"],[1,"d-flex","flex-column","gap-2"],[1,"display-5","mb-0"],[1,"mb-0","text-center"]],template:function(t,n){t&1&&(a(0,"section",0)(1,"div",1),P(2,Di,4,1),l()()),t&2&&(d(2),g(n.user?2:-1))},dependencies:[je],styles:[".h-home-page[_ngcontent-%COMP%]{height:calc(100vh - 58px - 2rem)}"]})};var bi=(i,e)=>{let t=f(F),n=f(w);return t.token.pipe(L(r=>r?!0:new ze(n.parseUrl(""))))},It=[{path:"",component:de,title:"Login to nevo"},{path:"nevo",loadComponent:()=>import("./chunk-SSLG5KEM.js").then(i=>i.WelcomeComponent),canMatch:[bi],children:[{path:"",component:pe},{path:"recipes",loadComponent:()=>import("./chunk-5H4ZV2D5.js").then(i=>i.RecipesComponent),children:[{path:"",loadComponent:()=>import("./chunk-HPY3ONIG.js").then(i=>i.ViewRecipeComponent)},{path:"recipe",loadComponent:()=>import("./chunk-KNNS2PQA.js").then(i=>i.RecipeComponent)}]},{path:"users",loadComponent:()=>import("./chunk-WSYQSSOK.js").then(i=>i.UsersComponent)},{path:"posts",loadComponent:()=>import("./chunk-LTBTWBWZ.js").then(i=>i.PostsComponent)},{path:"todo",loadComponent:()=>import("./chunk-FORBG2OA.js").then(i=>i.TodosComponent)},{path:"quotes",loadComponent:()=>import("./chunk-BCSVAWCQ.js").then(i=>i.QuotesComponent)}]}];var xt=(i,e)=>{let t=f(F),n=f(w);return i.headers.has("skip")?(console.log("skipping interceptor"),e(i)):t.token.pipe(Ne(r=>{if(!r)throw n.navigate([""]),new Error("Invalid token");let o=i.clone({headers:i.headers.set("Authorization",`Bearer ${r}`)});return e(o)}))};var Nt={providers:[Ge({eventCoalescing:!0}),Ze(It),We(),Be(Le(),Ue([xt]))]};var fe=class i{title="nevo";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=A({type:i,selectors:[["app-root"]],standalone:!0,features:[M],decls:1,vars:0,template:function(t,n){t&1&&v(0,"router-outlet")},dependencies:[qe]})};$e(fe,Nt).catch(i=>console.error(i));
