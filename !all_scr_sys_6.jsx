
// ===Particle =====================================
// -- Rate -----------
thisComp.layer("Emmiter").effect("Slider Control")("Slider")
//- Velocity
thisComp.layer("Emmiter").effect("Slider Control 2")("Slider")
//- Size ----------------------------------------------
thisComp.layer("Emmiter").effect("Slider Control 3")("Slider")
thisComp.layer("Emmiter").effect("Slider Control 3")("Slider")/5
thisComp.layer("Emmiter").effect("Slider Control 3")("Slider")/9

thisComp.layer("Emmiter").effect("Slider Control 3")("Slider")/2
thisComp.layer("Emmiter").effect("Slider Control 3")("Slider")/5
5


// =x y z =======================================5
var p = thisComp.width;
thisComp.layer("Emitter").transform.scale[0]

var p = thisComp.layer("Emitter").transform.position[0]-thisComp.width/2;
p/thisComp.width;
// ========================================
// ========================================
// ========================================
// ========================================
//== Vika =============================================

// effect("Both Channels")("Slider")
smooth(0.5,44);

//val = 10;
//if (time % 1  == 0) {val = smooth(0.5,44);}
//val;

// birth size
val = 5;
if (time % 10  == 0) {val = thisComp.layer("Audio Amplitude").effect("Both Channels")("Slider");}
//val;
linear(val,0,12,1,12 );
 


// effect("Angle Control")(1) 
thisComp.layer("Audio Amplitude").effect("Both Channels")("Slider")

// effect("CC Particle World")(63)
val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
  linear(val,2,12,-0.0,5.0 );

// Foam | Effects of After Effects ===============================
effect("Foam")("Producer Point")                                       1920 1080


val=thisComp.layer("Audio Amplitude").effect("Both Channels")("Slider");
w=3840;
h=2160;
px=   linear(val,2,12,w/2-w/25,w/2+w/8);
py=   linear(val,2,12,h/2-h/25,h/2+h/8);
[px, py];

val=thisComp.layer("Audio Amplitude").effect("Both Channels")("Slider");
w=3840;
h=2160;
px=   linear(val,2,12,w/2-w/4,w/2+w/4);
py=   linear(val,2,12,h/2-h/4,h/2+h/4);
[px, py];


px=   linear(val,2,12,w/2-w/8,w/2+w/8);
py=   linear(val,2,12,h/2-h/8,h/2+h/8);

val=thisComp.layer("Audio Amplitude").effect("Both Channels")("Slider");
px=   linear(val,2,12,-1920,3840);
py=   linear(val,2,12,-1080,2160);
[px, py];

val=thisComp.layer("Audio Amplitude").effect("Both Channels")("Slider");
w=3840;
h=2160;
px=   linear(val,2,12,-1*w/2+w/4,w/2-w/4);
py=   linear(val,2,12,-1*h/2+h/4,h/2-h/4);
[px, py];


val=thisComp.layer("Audio Amplitude").effect("Both Channels")("Slider");
w=3840;
h=2160;
px=   linear(val,2,12,-1*w/2+w/3,w-w/3);
py=   linear(val,2,12,-1*h/2+h/3,h-h/3);
[px, py];


//birth rate                                                        
//effect("CC Particle World")(14)
val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
  linear(val,2,12,-0.0,5.0 );

val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
  linear(val,2,12,-0.05,0.2 );




// CC Particle World  ===============================
music 2 12

effect("CC Particle World")("Birth Rate")thisComp.layer("Emitter").effect("Angle Control")("Angle")
birth rate                                                         default 2
effect("CC Particle World")(14)
val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
  linear(val,2,12,-0.0,5.0 );


x
val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
  linear(val,2,12,-0.3,0.3 );

y

val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
  linear(val,2,12,-0.26,0.26 );

z
val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
 linear(val,2,12,-0.1,0.1 );

                                                                   defult  0,025
Radius x
val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
  linear(val,2,12,-0.0,0.5 );
Radius y
val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
  linear(val,2,12,-0.0,0.5 );
 
Radius z
val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
  linear(val,2,12,-0.0,0.5 );
 

Velocity defult 1
val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
  linear(val,2,12,-0.0,2.0 );

effect("CC Particle World")("Inherit Velocity %")                   defult 0
val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
  linear(val,2,12,-0.0,2.0 );

effect("CC Particle World")("Gravity")                               defult 0.5
val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
  linear(val,2,12,-0.0,2.0 );


effect("CC Particle World")("Resistance")                             defult 0
val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
  linear(val,2,12,-0.0,2.0 );

effect("CC Particle World")("Extra")                                  defult 0.5

val = thisComp.layer("Emitter").effect("Angle Control")("Angle");
  linear(val,2,12,-0.0,2.0 );

effect("CC Particle World")("Extra Angle")











// Scale ===
smooth(0.5,44)
val=thisComp.layer("Audio Amplitude").effect("Both Channels")("Slider");
temp =   linear(val,2,12,70,120);
[temp, temp]

// Rotation ===
//temp = linear(val,0,10,-2.0,2.0) + Math.sin(time%900*2)*-0.7;
//temp = linear(val,0,10,-2.0,2.0) + Math.sin(time%900*2);
val=thisComp.layer("Audio Amplitude").effect("Both Channels")("Slider");
temp = linear(val,0,10,-3.5,3.5);
//[temp, temp]

smooth(.9,24)

val=thisComp.layer("Audio Amplitude").effect("Both Channels")("Slider");
temp = linear(val,0,70,100,200);
[temp, temp]

time * 1  + " => " + thisComp.layer("Audio Amplitude").effect("Both Channels")("Slider").keyValue
time * 1  + " => " + thisComp.layer("Audio Amplitude").effect("Both Channels")("Slider").numKeys
time * 1  + " => " + thisComp.layer("Audio Amplitude").effect("Both Channels")("Slider").key(i)

// Scale ===============================
if(time<3){v=linear(time,0,2.9,100,180);}
else{v=linear(time,3,5,180,233);}
[v,v]



if(time<2.6){v=linear(time,0,2.5,100,180);}
else if (time< 3 && time>=2.6)  {v=linear(time,2.5,3,180,222);}
else {v=linear(time,3,5,222,233);}
[v,v]


if(time<2.6){v=linear(time,0,2.5,100,159);}
else if (time< 3 && time>=2.6)  {v=linear(time,2.5,3,159,162);}
else {v=linear(time,3,5,162,279);}
[v,v]

if(time<3){v=linear(time,0,2.9,100,161);}
else{v=linear(time,3,5,162,279);}
[v,v]


if(time<3){v=linear(time,0,2.9,200,279);}
else{v=linear(time,3,5,279,336);}
[v,v]

linear(time,0,2.9,200,279); 
linear(time,3,5,279,336); 

// Scale ===============================

ampl = 370.0;

freq = 0.006;
decMs = 0.3;
norm = 100;
t_offset = -0.31;

px2 = Math.round(ampl*Math.sin(freq * (time-t_offset) * 2 * Math.PI)/Math.exp((time-t_offset) *decMs)+ norm ) ;
[px2,px2];

// Scale ===============================

ampl = 70.0;
//ampl = 320.0;
freq = 0.1;
decMs = 0.5;
norm = 320;
t_offset = -0.31;

px2 = Math.round(ampl*Math.sin(freq * (time-t_offset) * 2 * Math.PI)/Math.exp((time-t_offset) *decMs)+ norm ) ;

//ampl = 100.0;
ampl = 300.0;
freq = 0.1;
decMs = 0.5;
norm = 200;
t_offset = 0.6;

//px =Math.round(100*Math.sin(0.1 * time * 2 * Math.PI)/Math.exp(time*0.50) + 200 + 22*time) ;
px2 = Math.round(ampl*Math.sin(freq * (time-t_offset) * 2 * Math.PI)/Math.exp((time-t_offset) *decMs)+ norm ) ;

[px2,px2];

//ampl = 2.0;
ampl = 100.0;
freq = 0.1;
//decMs = 10.0;
decMs = 0.5;
norm = 200;
t_offset = 0.;

//px =Math.round(100*Math.sin(0.1 * time * 2 * Math.PI)/Math.exp(time*0.50) + 200 + 22*time) ;
px = Math.round(ampl*Math.sin(freq * (time-t_offset) * 2 * Math.PI)/Math.exp((time-t_offset)*decMs)+ norm ) ;[px,px];



//ampl = 2.0;
ampl = 100.0;
freq = 0.1;
decMs = 10.0;
decMs = 0.5;

//px =Math.round(100*Math.sin(0.1 * time * 2 * Math.PI)/Math.exp(time*0.50) + 200 + 22*time) ;
px =Math.round(ampl*Math.sin(freq * time * 2 * Math.PI)/Math.exp(time*decMs)+ 200 ) ;

[px,px];


px =100*Math.sin(0.1 * time * 2 * Math.PI)/Math.exp(time*0.50) + 200 + 22*time ; [px,px];

px                   =100*Math.sin(0.1 * time * 2 * Math.PI)/Math.exp(time*0.50) + 100 + 22*time ;
[px,px]


px =100*Math.sin(time*0.7)/Math.exp(time*0.10) +100 ;
[px,px]


// Text ===============================
Math.cosh(time);

px = 1/Math.cosh(time*1)*1000+100;
[px,px]


px = Math.round(1/Math.cosh(time));
[px,py]


// Text ===============================
time * 1  + " => " + 1/Math.cosh(time*-1000)*1+100;
time * 1  + " => " + Math.cosh(time*1)*1;

// Scale  ===============================
px                   =100*Math.sin(0.1 * time * 2 * Math.PI)/Math.exp(time*0.50) + 100 ;
[px,px]

px=thisComp.layer("N_1").effect("Scl")("Point")[0]; [px,px]


px=thisComp.layer("N_1").effect("Scl")("Point")[0]; 
[px,px]

// ========================================

// Text ===============================
time * 1000  + " $"
// ========================================



//py = time**4 + 55*time + 1200;
py =(1000*Math.sin(time*2)/Math.exp(time*.8+0.9))*-1 + 1500;
px = value[0]+100;
pz = value[2];
[px,py,pz]


// Rotate ===============================
Math.sin(time%900*2)*-0.3   
Math.sin(time%900*2)*-0.7
Math.sin(time%1000*2)*-3.0 

Math.sin(time%900*2)*-0.7 +value
// ========================================

py = time**2 + 50*time + 900;
px = value[0];
[px,py]

py = time**2 + 50*time + 900;
px = value[0];
pz = value[2];
[px,py,pz]

py = time**2 + 150*time + 1200;
px = value[0];
pz = value[2];
[px,py,pz]


Math.sin(time%600*4)*2
Math.sin(time%600*4)*-2

spd = time*10 + Math.exp(time*0.4);
//spd = Math.exp(time*1.4)
[spd,spd]

wiggle(2, -20)
wiggle(2, 20)

Math.sin(time%600*2)*-1
Math.sin(time%600*2) 

Math.sin(time%600*2)*-10
Math.sin(time%600*2) 

Math.sin(time%300*2)*-7
Math.sin(time%300*2)*-2


//thisComp.width, 
//thisComp.height 

// dd1  = time;
// d2 =  transform.position[0];
// d3 =  thisComp.width;
// d4 =  thisComp.height ;
// dsp  = d1 + "=>  " +  d2 + '\n' +  "=>  " +  d3 + '\n' +  "=>  " +  d4 ;
// //xt.sourceText = d1  + "=>  " +  d2 + '\n' +  "=>  " +  d3 + '\n' +  "=>  " +  d4 ;
// text.sourceText = dsp ;

thisComp.layer("N1").effect("Slider Control")("Slider")
//=================================================================
cd = thisComp.layer("Cntrl_Drog").effect("Slider Control")("Slider");
random(time%500+cd);
cd = thisComp.layer("Cntrl_Drog2").effect("Slider Control")("Slider");
random(time%500-cd);

ct = thisComp.layer("Cntr_Timt").effect("Slider Control")("Slider");

//=============================================================

// Amplitude1
// -10
cd = thisComp.layer("Cntrl_Drog").effect("Slider Control")("Slider");
// Frequency
// 2
ct = thisComp.layer("Cntr_Timt").effect("Slider Control")("Slider");
//random(time%500+cd);
random(time%ct+cd);
// Frequency, Amplitude1

//wiggle(2, -10);
wiggle(ct, cd);


// Amplitude2
// 10
cd = thisComp.layer("Cntrl_Drog2").effect("Slider Control")("Slider");
// Frequency
// 2
ct = thisComp.layer("Cntr_Timt").effect("Slider Control")("Slider");
//random(time%500-cd);
//random(time%ct-cd);
// Frequency, Amplitude2
//wiggle(2, 10);
wiggle(ct, cd);

//=============================================================

wiggle(2, -20)


//=============================================================
//=============================================================
//=============================================================

random(time%500+thisComp.layer("N1").effect("Slider Control")("Slider"));random(time%500-thisComp.layer("N1").effect("Slider Control")("Slider"));

thisComp.layer("N2").effect("Slider Control")("Slider")

random(time%thisComp.layer("N2").effect("Slider Control")("Slider")+thisComp.layer("N1").effect("Slider Control")("Slider"));
random(time%thisComp.layer("N2").effect("Slider Control")("Slider")-thisComp.layer("N1").effect("Slider Control")("Slider"));

content("Polystar 1").transform.position

amp = .1; // Amplitude
 freq = 2.0; // Frequency
 decay = 2.0; // Decay
 n = 0;
 if (numKeys > 0){
 n = nearestKey(time).index;
 if (key(n).time > time){
 n--;
 }}
 if (n == 0){ t = 0;
 }else{
 t = time - key(n).time;
 }
 if (n > 0 && t < 1){
 v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
 value + vampMath.sin(freqt2Math.PI)/Math.exp(decayt);
 }else{value}


amp = .1; // Amplitude
freq = 2.0; // Frequency
decay = 2.0; // Decay
n = 0;
if (numKeys > 0){
        n = nearestKey(time).index;
        if (key(n).time > time){
        n--;
}}
if (n == 0){ 
        t = 0;
}else{
        t = time - key(n).time;
}
if (n > 0 && t < 1){
        v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
        value + vampMath.sin(freqt2Math.PI)/Math.exp(decayt);
}else{
        value}
px = 300
py =time
[px,py]


//px = value[0] + time;
px = -1500 + time*500

//py = value[1] + time*500 +500;
py = (time*25 -   1000)*-1;
[px,py]

//px = value[0] + time;
px = -1500 + time*500

//py = value[1] + time*500 +500;
py = (time*40 -   900 + Math.exp(time*2))*-1;
[px,py]


//px = value[0] + time;
px = -1500 + time*500

//py = value[1] + time*500 +500;
//py = (time*400 -   900 + vampMath.sin(freqt2Math.PI)/Math.exp(time*20))*-1;
py = (time*40 -   900 + Math.exp(time*2))*-1;
py = (time*40 -   900 + vampMath.sin(freqt2Math.PI)*-1;

py = (time*40 -   900 + (vampMath.sin(freqt2Math.PI))*-1;

py = (time*40 -   900 + Math.sin(time*40))*-1;

py = ( 200 + Math.sin(time*4000))*-1;

py = (200 + Math.exp(time*2))*-1;


//px = value[0] + time;
px = -1800 + time*500

//py = value[1] + time*500 +500;
//py = (time*400 -   900 + vampMath.sin(freqt2Math.PI)/Math.exp(time*20))*-1;
//py = (time*40 -   900 + Math.exp(time*2))*-1;
//py = ( 200 + Math.sin(time*4000))*-1;
py = (-600 + Math.exp(time*1.3))*-1;
[px,py]




px = -1800 + time*500
px = -1800 + Math.exp(time*1.4)
py = (-600 + Math.exp(time*1.4))*-1;
[px,py]


px = -1800 + time*500 + Math.exp(time*.5)
py = (-600 + Math.exp(time*1.4))*-1;
[px,py]


px = -1800 + time*500
//px = -1800 + time*500 + Math.exp(time*.5)
py = (-600 + Math.sin(Math.exp(time*1.4)))*-1;
[px,py]





px = -1800 + time*500
//px = -1800 + time*500 + Math.exp(time*.5)
//py = (-600 + Math.exp(time*1.4))*-1;
py = (-600 + Math.sin(time*100))*-1;
[px,py]


px = -1800 + time*500
//px = -1800 + time*500 + Math.exp(time*.5)
//py = (-600 + Math.exp(time*1.4))*-1;
//py = (-600 + Math.sin(Math.exp(time*1.4)))*-1;
py = (-600 + 10*Math.sin(time*10))*-1;
py = (-600 + 10*Math.sin(time*10)/



Math.exp(time*1.4))*-1;
[px,py]




px = -1800 + time*500
//py = (-600 + 1000*Math.sin(time*10)/Math.exp(time*.9))*-1;
py = (-600 + 2000*Math.sin(time*5)/Math.exp(time*5.1))*-1;
[px,py]

px = -1800 + time*500
py = (-600 + 3000*Math.sin(time*2)/Math.exp(time*5.1))*-1;
[px,py]

px = -1800 + time*500
//py = (-600 + 6000*Math.sin(time*2)/Math.exp(time*5.1))*-1;
py = (-600 + 8000*Math.sin(time*2)/Math.exp(time*5.1))*-1;
[px,py]


px = -1200 + time*500
py = (-600 + 8000*Math.sin(time*2)/Math.exp(time*5.1))*-1;
[px,py]

px = -1200 + time*500
py = (-600 + 8000*Math.sin(time*2)/Math.exp(time*1.1+1))*-1;
[px,py]

px = -1200 + time*500
py = (-600 + 8000*Math.sin(time*2)/Math.exp(time*.8+0.9))*-1;
[px,py]
      

