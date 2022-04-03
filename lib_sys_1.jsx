
//===================================================
function parseIntSmarter(str) {
    return isNaN(Number(str)) ? NaN  : parseInt(str, 10);
}


//===================================================
function getRandomInt(min, max) { 
  return Math.round(Math.random() * (max - min) + min);
}


//===================================================
function readXmlaeGenXml(pathXml) 
{
    var file = File(pathXml);
    
    file.open("r");
    var xmlString = file.read();
    var genXml = new XML(xmlString);
    file.close();
    return genXml;
}

//===================================================
function readXmlaeGenXml_1() 
{
    var file = File("e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_Dima\\xml\\gen_parm_1.xml");
    file.open("r");
    var xmlString = file.read();
    var genXml = new XML(xmlString);
    file.close();
    return genXml;
}


//===================================================
function readXmlae_Dima_22_7_br_1(pathRrXml) 
{
    //var file = File("e:\\Setup\\!AE\\ae_scripts_sf\\info\\xml\\ae_dima_kids22_10_1.xml");
    //var file = File("e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_Dima\\xml\\ae_dima_br_22_7_1.xml");
    var file = File(pathRrXml);
    file.open("r");
    var xmlString = file.read();
    //var myXml = new XML(xmlString);
    file.close();
    //return myXml;
    return xmlString;
}

