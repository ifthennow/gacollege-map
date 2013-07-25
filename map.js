// Enable the visual refresh
google.maps.visualRefresh = true;

var map;
function initialize() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(32.7574351, -82.9071230),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl:false,
    mapTypeControl:false
  };
  map = new google.maps.Map(document.getElementById('gacollegemap-canvas'),
      mapOptions);
  var opt = { minZoom: 7, maxZoom: 15 };
  map.setOptions(opt);
      
//College Markers
      var locations = [
    // Name, Longitude, Latitude, Address, Institution Type, Contact
  ['Agnes Scott College',' 141 East College Avenue Decatur GA 30030',  33.767418,  -84.294365,0,'cneiner@agnesscott.edu'],
	['Berry College',' 2277 Martha Berry Highway Mount Berry GA 30149',  34.295403,  -85.1885,0,'careercenter@berry.edu'],
	['Covenant College',' 14049 Scenic Highway Lookout Mountain GA 30750',  34.965458,  -85.37498,0,'centercc@covenant.edu'],
	['Emmanuel College',' 181 Spring Street Franklin Springs GA 30639',  34.282463,  -83.14748,0,'swilliamson@ec.edu'],
	['Mercer University',' 1400 Coleman Avenue Macon Georgia 31207',  32.826057,  -83.65069,0,'RecruitMercer@Mercer.Edu'],
	['Morehouse College',' 830 Westview Drive Southwest Atlanta GA 30314',  33.745903,  -84.414345,0,'ddozier@morehouse.edu; pbowers@morehouse.edu'],
	['Morris Brown College',' 643 Martin Luther King Junior Drive Southwest Atlanta GA 30314',  33.754772,  -84.40895,0,'na'],
	['Oglethorpe University',' 4484 Peachtree Road Northeast Atlanta GA 30319',  33.874462,  -84.331566,0,'rbrandt@oglethorpe.edu'],
	['Piedmont College',' 165 Central Avenue Demorest GA 30535',  34.566536,  -83.542,0,'epettit@piedmont.edu'],
	['Reinhardt University',' 4100 Old Milton Parkway Alpharetta GA 30005',  34.06114,  -84.2399,0,'career-services@reinhardt.edu'],
	['Shorter University',' 315 Shorter Avenue Southwest Rome GA 30165',  34.263466,  -85.18979,0,'wmoran@shorter.edu'],
	['Spelman College',' 350 Spelman Lane Southwest Atlanta GA 30314',  33.744965,  -84.413956,0,'scolli11@spelman.edu'],
	['Wesleyan College',' 4760 Forsyth Road Macon GA 31210',  32.87486,  -83.71593,0,'careercenter@wesleyan.edu'],
	['Brewton-Parker College',' 160 Martin Luther King Drive Newnan GA 30263',  33.363956,  -84.782394,0,'tspaulding@bpc.edu'],
	['Andrew College',' 501 College Street Cuthbert GA 39840',  31.771914,  -84.79746,1,'santeearcher@andrewcollege.edu'],
	['Ashworth College',' 6625 The Corners Parkway Northwest #500 Norcross GA 30092',  33.95995,  -84.237366,1,'na'],
	['Atlantas John Marshall Law School','',  32.157436,  -82.90712,1,'ibetancourt@johnmarshall.edu'],
	['Art Institute of Atlanta',' 6600 Peachtree Dunwoody Road Northeast Atlanta GA 30328',  33.9359,  -84.355354,1,'aiacareersvc@aii.edu'],
	['Brenau University',' 500 Washington Street Southeast Gainesville GA 30501',  34.303085,  -83.81916,1,'gbagel@brenau.edu '],
	['Christian College of Georgia',' The University of Georgia Athens GA 30605',  33.95649,  -83.37941,1,'careers@jarvis.edu'],
	['Clark Atlanta University',' 223 James P Brawley Drive Southwest Atlanta Georgia 30314',  33.749245,  -84.41279,1,'cppc@cau.edu'],
	['Columbia Theological Seminary',' 701 South Columbia Drive Decatur GA 30030',  33.764263,  -84.28059,1,'na'],
	['Emory University',' 201 Dowman Drive Atlanta GA 30322',  33.797245,  -84.310974,1,'Paul.Fowler@emory.edu '],
	['Herzing University of Atlanta',' Lenox Square Mall 3393 Peachtree Road Atlanta GA 30326',  33.845486,  -84.36088,1,'williams@atl.herzing.edu'],
	['LaGrange College',' 601 Broad Street LaGrange GA 30240',  33.038948,  -85.04324,1,'jobs@lagrange.edu'],
	['Life University',' 1269 Barclay Circle Marietta GA 30060',  33.930832,  -84.5145,1,'SDudt@LIFE.edu'],
	['Paine College',' 1235 15th Street Augusta GA 30901',  33.469513,  -81.993164,1,'aewing@paine.edu'],
	['Philadelphia College of Osteopathic Medicine',' 625 Old Peachtree Road Northwest Suwanee GA 30024',  34.01041,  -84.06146,1,'na'],
	['Point University',' 507 West 10th Street West Point GA 31833',  32.879547,  -85.18427,1,'career.center@point.edu'],
	['Savannah College of Art and Design',' 532 Indian Street Savannah GA 31401',  32.083218,  -81.09705,1,'careerinfo@scad.edu'],
	['South University',' 709 Mall Boulevard Savannah GA 31406',  31.998966,  -81.105644,1,'na'],
	['The Salvation Army Evangeline Booth College',' 1032 Metropolitan Parkway Southwest Atlanta GA 30310',  33.726574,  -84.406105,1,'na'],
	['Thomas University',' 1501 Millpond Road Thomasville GA 31792',  30.815989,  -83.96646,1,'careerservices@stu.edu'],
	['Toccoa Falls College',' Cohutta National Forest Georgia 30577',  34.594517,  -83.35088,1,'jkerr@tfc.edu'],
	['Truett-McConnell College',' 100 Alumni Drive Cleveland GA 30528',  34.59603,  -83.748314,1,'agailey@truett.edu'],
	['Abraham Baldwin Agricultural College',' 2802 Moore Highway Tifton GA 31793',  31.489239,  -83.52967,2,'abacinfo@abac.edu'],
	['Albany State University',' 504 College Drive Albany GA 31705',  31.571554,  -84.144295,2,'glorya.williams@asurams.edu '],
	['Armstrong Atlantic State University',' 11935 Abercorn St Savannah GA 31419',  31.9809788,  -81.1626256,2,'careers@armstrong.edu'],
	['Atlanta Metropolitan College',' 1630 Metropolitan Parkway Southwest Atlanta GA 30310',  33.709873,  -84.40796,2,'tyoung@atlm.edu '],
	['Augusta State University',' 2500 Walton Way Augusta GA 30904',  33.47591,  -82.02326,2,'jgoley@gru.edu'],
	['Bainbridge College',' 2500 East Shotwell Street Bainbridge GA 39819',  30.899021,  -84.5346,2,'na'],
	['Clayton State University',' 2000 Clayton State Boulevard Morrow GA 30260',  33.59491,  -84.32904,2,'career@clayton.edu'],
	['College of Coastal Georgia',' Kingsland GA 31548',  30.806335,  -81.65398,2,'careerservices@ccga.edu'],
	['Columbus State University',' 707 3rd Avenue West Point GA 31833',  32.87659,  -85.18425,2,'lrg@columbusstate.edu '],
	['Dalton State College',' 103 Dalton Street Ellijay GA 30540',  34.700073,  -84.481766,2,'counseling@daltonstate.edu'],
	['Darton State College',' 2400 Gillionville Road, Albany, GA 31707, USA', 31.5816788, -84.2133876,2,'jason.swords@darton.edu '],
	['East Georgia College',' 131 College Circle Swainsboro GA 30401',  32.59551,  -82.307045,2,'http://www.ega.edu/index.php/forms/ask_admissions'],
	['Fort Valley State University',' CB&T - Fort Valley State University Fort Valley GA 31030',  32.537647,  -83.89519,2,'simmonsr@fvsu.edu'],
	['Gainesville State College',' 3820 Mundy Mill Road Oakwood GA 30503',  34.234814,  -83.86718,2,'ELai@GSC.Edu'],
	['Georgia College & State University',' 433 Cherry Street Macon GA 31201',  32.83519,  -83.62652,2,'career.center@gcsu.edu '],
	['Georgia Highlands College',' 25 Courthouse Road Dallas GA 30132',  33.92399,  -84.84179,2,'na'],
	['Georgia Institute of Technology',' North Avenue Atlanta GA 30332',  33.77562,  -84.396286,2,'ralph.mobley@success.gatech.edu'],
	['Georgia Military College',' 201 East Greene Street Milledgeville GA 31061',  33.078754,  -83.224625,2,'mvoynich@gmc.cc.ga.us '],
	['Georgia Perimeter College',' 2101 Womack Road Dunwoody GA 30338',  33.94158,  -84.30187,2,'na'],
	['Georgia State University',' 33 Gilmer street Atlanta GA 30303',  33.752083,  -84.385086,2,'cjskfg@langate.gsu.edu '],
	['Georgia Southern University',' 1332 Southern Drive Statesboro GA 30458',  32.42703,  -81.782486,2,'awilliams@georgiasouthern.edu.'],
	['Georgia Southwestern State University',' 800 Georgia Southwestern State University Drive Americus GA 31709',  32.054886,  -84.217964,2,'career@gsw.edu'],
	['Gordon College',' 419 College Drive Barnesville GA 30204',  33.047455,  -84.15011,2,'career-services@gordon.edu'],
	['Kennesaw State University',' 1000 Chastain Road Northwest Kennesaw GA 30144',  34.03217,  -84.58159,2,'kandrews@kennesaw.edu'],
	['Macon State College',' 100 College Station Drive Macon GA 31206',  32.8103,  -83.73204,2,'http://www.mga.edu/career-services/employers.aspx'],
	['Medical College of Georgia',' Augusta GA 30901',  33.47111,  -81.988335,2,'na'],
	['Middle Georgia College',' 1100 Southeast 2nd Street Cochran GA 31014',  32.380787,  -83.348,2,'treckart@mgc.edu'],
	['North Georgia College and State University',' 231 West Hancock Street Milledgeville Georgia 31061',  33.081993,  -83.230896,2,'careerservices@northgeorgia.edu'],
	['Savannah State University',' 3219 College St Savannah GA 31404',  32.025944,  -81.06984,2,'rileys@savannahstate.edu'],
	['Skidaway Institute of Oceanography',' Ocean Science Circle Savannah GA 31411',  31.987158,  -81.02443,2,'info@skio.usg.edu'],
	['South Georgia College',' 100 College Park Dr W Douglas GA 31533',  31.495173,  -82.85484,2,'webmaster@sgc.edu'],
	['Southern Polytechnic State University',' 1100 S Marietta Pkwy Marietta GA 30060',  33.935547,  -84.5208,2,'counselor@spsu.edu '],
	['University of Georgia',' Athens GA 30602',  33.948006,  -83.37732,2,'career@uga.edu'],
	['University of West Georgia',' 1601 Maple Street Carrollton GA 30118',  33.57456,  -85.103424,2,'jfernand@westga.edu '],
	['Valdosta State University',' 1500 North Patterson Street Valdosta GA 31698',  30.846935,  -83.2894,2,'dhargett@valdosta.edu '],
	['Waycross College',' 2001 South Georgia Parkway Waycross GA 31503',  31.20642,  -82.38853,2,'www.georgiahire.com'],
	['Albany Technical College',' 1704 South Slappey Boulevard Albany GA 31701',  31.55361,  -84.17451,3,'jjimmerson@albanytech.edu'],
	['Altamaha Technical College',' 1777 West Cherry Street Jesup GA 31545',  31.623009,  -81.90924,3,'mbutler@altamahatech.edu '],
	['Athens Technical College',' 800 U.S. 29 Athens GA 30601',  33.990982,  -83.33989,3,'kfewox@athenstech.edu '],
	['Atlanta Technical College',' 1560 Metropolitan Parkway Southwest Atlanta GA 30310',  33.71177,  -84.40779,3,'careerplacement@atlantatech.edu'],
	['Augusta Technical College',' Thomson-McDuffie County Airport (HQU) 388 Tech Drive Thomson GA 30824',  33.52827,  -82.51705,3,'kcharles@augustatech.edu '],
	['Central Georgia Technical College',' 3300 Macon Tech Drive Macon GA 31206',  32.812138,  -83.69088,3,'jobsinc@centralgatech.edu'],
	['Chattahoochee Technical College',' 980 South Cobb Drive Marietta GA 30060',  33.92896,  -84.55214,3,'careersvcs@chattahoocheetech.edu'],
	['Columbus Technical College',' 928 Manchester Expressway Columbus GA 31904',  32.50606,  -84.97988,3,'careerconnections@columbustech.edu'],
	['Georgia Northwestern Technical College',' 501 Carden Avenue Rossville GA 30741',  34.981243,  -85.29676,3,'dguinn@gntc.edu '],
	['Gwinnett Technical College',' 5150 Sugarloaf Parkway Lawrenceville GA 30043',  33.96389,  -84.06761,3,'http://www.gwinnetttech.edu/content.cfm?PageCode=contact'],
	['Heart of Georgia Technical College',' 560 Pinehill Road Dublin GA 31021',  32.4856,  -82.945114,3,'na'],
	['Lanier Technical College',' University of North Georgia- Gainesville Campus 2990 Landrum Education Drive Oakwood GA 30566',  34.235764,  -83.86404,3,'mlawrence@laniertech.edu'],
	['Middle Georgia Technical College',' 80 Cohen Walker Drive Warner Robins GA 31088',  32.548172,  -83.664894,3,'pivey@middlegatech.edu '],
	['Moultrie Technical College',' 52 Tech Drive Tifton GA 31794',  31.422596,  -83.51139,3,'https://moultrietech-csm.symplicity.com/employers/'],
	['North Georgia Technical College',' 121 Meeks Avenue Blairsville GA 30512',  34.87008,  -83.97675,3,'dgregg@northgatech.edu '],
	['Ogeechee Technical College',' 1 Joe Kennedy Boulevard Statesboro GA 30458',  32.39454,  -81.818794,3,'lbowen@ogeecheetech.edu '],
	['Okefenokee Technical College',' 1701 Carswell Avenue Waycross GA 31503',  31.213652,  -82.38351,3,'cgibson@okefenokeetech.edu '],
	['Sandersville Technical College',' 1189 Deepstep Road Sandersville GA 31082',  32.9981,  -82.835655,3,'na'],
	['Savannah Technical College',' 501 West General Screven Way Hinesville GA 31313',  31.853268,  -81.60614,3,'cellis@savannahtech.edu '],
	['South Georgia Technical College',' 900 South Georgia Tech Parkway Americus GA 31709',  32.11773,  -84.192116,3,'ccarter@southgatech.edu '],
	['Southeastern Technical College',' 3001 E 1st St Vidalia GA 30474',  32.20394,  -82.36586,3,'lhelms@southeasterntech.edu '],
	['Southern Crescent Technical College',' 1533 South Church Street Thomaston GA 30286',  32.8629,  -84.31809,3,'tdoaty@sctech.edu '],
	['Southwest Georgia Technical College',' 15689 U.S. 19 Thomasville GA 31792',  30.86387,  -83.95138,3,'jlong@southwestgatech.edu '],
	['West Georgia Technical College',' 4600 Timber Ridge Drive Douglasville GA 30135',  33.734608,  -84.72899,3,'frances.oubre@westgatech.edu'],
	['Wiregrass Georgia Technical College',' 4089 Val Tech Road Valdosta GA 31602',  30.889576,  -83.35298,3,'kay.morris@wiregrass.edu '],
	['Argosy University',' 980 Hammond Drive Atlanta GA 30328',  33.9205,  -84.35629,4,'na'],
	['Bauder College',' 384 Northyards Boulevard Northwest Atlanta GA 30313',  33.76717,  -84.39994,4,'na'],
	['Gwinnett College',' 4230 Old US Highway 29 NW #11 Lilburn GA 30047',  33.901382,  -84.1219,4,'careerservices@ggc.edu'],
	['Gwinnett College - Sandy Springs',' 6690 Roswell Road #2200 Sandy Springs GA 30328',  33.93756,  -84.37957,4,'na'],
	['Interactive College of Technology',' 1580 Southlake Parkway Morrow GA 30260',  33.572063,  -84.33795,4,'na'],
	['Laurus Technical Institute',' 523 Church Street Decatur GA 30030',  33.77641,  -84.294754,4,'na'],
	['Portfolio Center',' 125 Bennett Street Northwest Atlanta GA 30309',  33.812164,  -84.39626,4,'na'],
	['University of Phoenix - Atlanta',' Century Center Drive Atlanta Georgia 30345',  33.8477,  -84.30567,4,'na'],
	];
      
    var infowindow = new google.maps.InfoWindow();
      
    //marker images    
    
    var pinColor1 = "FF9999";
    var pinColor2 = "c5e9b4";
    var pinColor3 = "025076";
    var pinColor4 = "ffdbac";
    var pinColor5 = "4d2177";
    
    var pinImage1 = new google.maps.MarkerImage("http://imgur.com/Eu1LZWP.png",
        new google.maps.Size(32, 23),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 23));
        
    var pinImage2 = new google.maps.MarkerImage("http://i.imgur.com/tHOQt5P.png",
        new google.maps.Size(29, 32),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 32));

    
    var marker, i;
    var tmp;
    var types = ['Private Liberal Arts','Private Institutions','Public Institutions','Technical Schools','For-Profit Schools'];
    for (i = 0; i < locations.length; i++) {  
    
    	tmp = locations[i][4];
    	
    	//add marker for college
    	if (tmp == 0){
    	marker = new google.maps.Marker({
      		position: new google.maps.LatLng(locations[i][2], locations[i][3]),
      		map: map,	
      		icon: pinImage1,
      	});
        }
        else if (tmp ==1){
        marker = new google.maps.Marker({
      		position: new google.maps.LatLng(locations[i][2], locations[i][3]),
      		map: map,	
      		icon: pinImage1,
      	});
        }
        else if (tmp ==2){
        marker = new google.maps.Marker({
      		position: new google.maps.LatLng(locations[i][2], locations[i][3]),
      		map: map,	
      		icon: pinImage1,
      	});
        }
        else if (tmp ==3){
        marker = new google.maps.Marker({
      		position: new google.maps.LatLng(locations[i][2], locations[i][3]),
      		map: map,	
      		icon: pinImage2,
      	});
        }
        else{
        marker = new google.maps.Marker({
      		position: new google.maps.LatLng(locations[i][2], locations[i][3]),
      		map: map,	
      		icon: pinImage2,
      	});
        }
      //set infobox
    	google.maps.event.addListener(marker, 'click', (function(marker, i) {
        	return function() {
          		infowindow.setContent("<b>" + locations[i][0] + "</b>" + "<br />" + locations[i][1] + "<br /> <p>Institution Type: " + types[locations[i][4]] + "<br /> <p>Contact Email: " + locations[i][5]);
          		infowindow.open(map, marker);
        	}
      	})(marker, i));
  
 	 }


}

google.maps.event.addDomListener(window, 'load', initialize);

