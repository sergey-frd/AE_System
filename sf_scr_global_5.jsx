

var durationSec_4_8 = 4.96;
var lg = new File(location + "log_" + scr_name + ".txt");
var user_log_file = lg;

var ftgSystem_1_1     // "ftgSystem_1_1.mp4"
var ftgSystem_tr_1_1  // "ftgSystem_tr_1_1.mp4"
var ftgMP_LL_01       // "ftgMP_LL_01.mov"
var ftgMP_LL_08       // "ftgMP_LL_08.mov"

var mainCompList = [];
var bgCompList   = [];

var filePathUrl  = [];
var filePathUrlA = [];
var filePathUrlB = [];

var fileName    = [];
var fileNameA    = [];
var fileNameB    = [];

var fileWidth   = [];
var fileHeight  = [];

var scaleMin  = [];
var scaleMax  = [];

var compWidth   = 3840;
var compHeight  = 2160;

var bgGaussianBlur  = 200;
var bgOpacity       = 25; // 50;
var bgOpacity_75    = 75;

//var addOpacityKeys = [
//    0,
//    1.12,
//    3.88,
//    4.1];

var addBgOpacityKeys = [
    0];

var addBgOpacityVal = [
    75];


var addOpacityKeys = [
    0,
    1.12,
    2.08,
    4.96];

var addOpacityVal = [
    75,
    100,
    100,
    75];



var addOpacityKeys100 = [
    0,
    1.12,
    2.08,
    4.96];

var addOpacityVal100 = [
    100,
    100,
    100,
    0];



var addOpacityKeys100_25 = [
    0,
    1.12,
    2.08,
    4.96];

var addOpacityVal100_25 = [
    100,
    100,
    100,
    75];


var addOpacityVal100_25 = [
    100,
    100,
    100,
    100];


var addOpacityKeys_25_100 = [
    0,
    1.12,
    2.08,
    4.96];

var addOpacityVal_25_100 = [
    75,
    75,
    75,
    100];


var addOpacityKeys_0_25_100 = [
    0,
    1.12,
    2.08,
    4.96];

var addOpacityVal_0_25_100 = [
    0,
    75,
    100,
    100];


var addOpacityKeys_1_25_100 = [
    0,
    1.12,
    2.08,
    4.96];

var addOpacityVal_1_25_100 = [
    100,
    75,
    0,
    0];


var addOpacityKeys_1_75_100 = [
    0,
    1.12,
    2.08,
    4.96];

var addOpacityVal_1_75_100 = [
    100,
    100,
    75,
    0];




//===============================================
var addOpacityBi1Keys_0 = [
    0,
    1,
    2.08,
    4.1,
    4.96];

var addOpacityBi1Val_0 = [
    100,
    0,
    0,
    0,
    0];



var addOpacityBi1Keys_1 = [
    0,
    1.12,
    1,
    2.08,
    4.1,
    4.96];

var addOpacityBi1Val_1 = [
    0,
    0,
    0,
    0,
    100,
    100];


//===============================================
var addOpacityBi1Keys = [
    0,
    1.12,
    1,
    2.08,
    4.1,
    4.96];

var addOpacityBi1Val = [
    100,
    100,
    0,
    0,
    100,
    100];



var propRotExp = "Math.sin(time%900*2)*-0.31"



var addropertyKeys=[
0,
0.5,
1,
1.5,
2,
2.5,
3,
2.5,
2.08,
4.5,
4.96];




//===============================================
var addropertyKeysLb=[
0,     
4.96];    

var addropertyValLb=[
1   ,
1.62];


var addropertyKeysBl=[ 
0,    
4.96];   


var addropertyValBl=[
1.62,
1.0];


var addropertyKeysB2=[ 
0,    
4.96];   


var addropertyValB2=[
1.62,
1.0];


//===============================================
var addropertyKeysLb2=[
0,     
5];    

var addropertyValLb2=[
1   ,
1.62];


var addropertyKeysBl2=[ 
0,    
4.96];   


var addropertyValBl2=[
1.62,
1.0];
//===============================================


//===============================================
var addropertyKeysLb1=[
0,     
1,     
2,     
2.5,   
3,     
2.5,   
2.08,     
4.5,   
4.96];    

var addropertyValLb1=[
1   ,
1.04,
1.37,
1.4 ,
1.43,
1.48,
1.51,
1.59,
1.62];


var addropertyKeysBl1=[ 
0,    
0.5,  
1,    
1.5,  
2,    
2.5,  
2.5,  
2.08,    
4.96];   


var addropertyValBl1=[
1.62,
1.59,
1.58,
1.48,
1.43,
1.37,
1.14,
1.04,
1.000];
//===============================================



