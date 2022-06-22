﻿/* **** The fundamental basic-skeleton is generated by QGIS **** */
/* **** Leaflet **** */

//  .. OpenStreetMap
var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors', minZoom: 10, maxZoom: 15});

// Overlay layers (TMS)
var lyr = L.tileLayer('./{z}/{x}/{y}.png', {tms: true, opacity: 1, attribution: '&copy; <a href="https://www.cottbus.de/verwaltung/gb_iv/stadtentwicklung/">Stadtentwicklung Cottbus</a>, 05/2022, <a href="https://stadtentwicklung.github.io/masterplan/"><b>DEUTSCH</b></a>, <a href="https://stadtentwicklung.github.io/masterplan-english/"><b>ENGLISH</b></a>, <a href="https://stadtentwicklung.github.io/masterplan-polski/"><b>POLSKI</b></a>', minZoom: 10, maxZoom: 15});

// Map
var map = L.map('map', {
    center: [51.78179619043856, 14.430890490667228],
    //zoom: 15,
    minZoom: 10,
    maxZoom: 15,
    layers: [osm, lyr],
	loadingControl: true
});

// Title
var title = L.control();
title.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'ctl title');
    this.update();
    return this._div;
};

title.update = function(props) {
    this._div.innerHTML = "Masterowy plan Chóśebuskego pódzajtšnego jasora 3.0";
};
title.addTo(map);

// Fit to overlay bounds (SW and NE points with (lat, lon))
map.fitBounds([[51.72837123461897, 14.552784241190125], [51.83522114625816, 14.30899674014433]]);
		
// Geolocating		
function onLocationFound(e) {
    var location = e.latlng
    L.marker(location).addTo(map).bindPopup("Sy něźi how.").openPopup();
};

function onLocationError(e) {
	alert(e.message);
};

function getLocationLeaflet() {
	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);
	map.locate({setView: true, maxZoom: 15});
};
		
// Custom project-marker
var redIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

//1
L.marker([51.77727, 14.39582], {icon: redIcon}).addTo(map).bindPopup("<p><strong>1. Pśistawowy kwartěr Chóśebuz</strong></p><img src='./img/1_hafen.jpg'/><p>Z pśistawowym kwartěrom buźo Chóśebuz &bdquo;město pśi wóźe&rdquo;. Na kóńcu jazoroweje wósy nastanjo mjazy pśibrjogom Chóśebuskego pódzajtšnego jazora a B168 nowy inowatiwny kwartěr z promenadu, měsćańskim pśistawom a z něźi 200 wustawadłowymi městnami za cołny. Pódla šyrokego wobceŕka wódnego sporta, sportowego a strowotniskego centruma, bydlenjow, wobchodow, gósćeńcow ako teke hotelowego a zarědowańskego kompleksa nastanjo &bdquo;Forum Łužyca/Carboneum&rdquo; - informaciski centrum za wótměnjate zwiski mjazy kulturnymi stawiznami, pśirodnym rumom a wudobywanim brunice w regionje. Pśistawowy kwartěr dej ako prědny kwartěr w Chóśebuzu wótpowědowaś pominanju CO&#8322;-neutralnego wuwiśa města. Zachopinajucy pśi planowaju, wuběranju materiala a konstrukcije,  pśez inowatiwnu koncepciju mobility až k CO&#8322;-neutralnemu zastaranju z energiju dej pśistawowy kwartěr stajaś za cełu Nimsku měritka za trajne a za klimu pśigódne urbane wuwiśe.</p>");
//2
L.marker([51.77004, 14.37917], {icon: redIcon}).addTo(map).bindPopup("<p><strong>2. Jazorowe pśedměsto</strong></p><img src='./img/2_vorstadt.jpg'/><p>Městotwaŕske zwězanje centruma města a Chóśebuskego pódzajtšnego jazora jo jaden z nejwažnjejšych projektow w pśiducych lětźasetkach a inicial CO&#8322;-neutralnego a klimarezistentnego wuwiśa Chóśebuza. Jědro togo zwězanja jo něgajšna zeleznicowa cera Chóśebuz-Gubin, kótaraž jo była wót 2000 pśez brunicu obsoletna. How dej nastaś urbany zeleny lichy rum za pěškarjow, kólasarjow a zjawny wósobowy wobchad do bliskosći. Wusměrjenje měsćańskego terena k wóźe buźo pśi tom flankěrowane pśez wuwiśe jazorowego pśedměsta póspóromje teje zwězujuceje wósy. How nastanjo rum pśichoda ako moderny, urbany a trajny měsćański kwartěr a rozšyrna zelena pśestrěń. Planowanja pśedwiźe nowe bydleńske wobceŕki, atraktiwne źěłaŕstwowe grunty, inowatiwny energijowy campus ako myslaŕsku fabriku a teke kubłański a zastojnstwowy centrum ze źěłowymi městnami w bogatej licbje. Nowe funkcije a wugótowańske kwality w zmysle zasadnego procesa pśetwari města a inowatiwny zjawny wobchad do bliskosći definěruju wupominanja na pśiduce wuwiśe města na chóśebuskem pódzajtšu.</p>");
//3
L.marker([51.78746, 14.38042], {icon: redIcon}).addTo(map).bindPopup("<p><strong>3. Žylowk</strong></p><p>Na dłujkem wjacorje, w direktnem susedstwje z pśistawowym kwartěrom nastanu bydleńske wobtwarjenja ako wudopołnjenje k sedlišćowemu wobceŕkoju Žylowka z lěpšynu bliskosći k městoju a wóźe. How deje nastaś bydlenja w modernej architektoniskej rěcy a z pominanim CO&#8322;-neutralnego wuwiśa města. Flankěrowany buźo kwartěr pśez žylowkojski pśibrjog, lažko pśistupny pó kólasu abo pěšy pśede wšym za měsćańskich gósći, kenž kśě se kupaś.</p>");
//4
L.marker([51.7975, 14.38316], {icon: redIcon}).addTo(map).bindPopup("<p><strong>4. Łakoma - Rogozno</strong></p><p>Něgajšna wjas Łakoma jo centralne kśicnišćo pśi jazorje za kólasowarjow mjazy  jazoroweju sćažku nawokoło a (nad)regionalnymi kólasowaŕskimi sćažkami resp. nawopak. Pśed pódwjacornym pśibrjogom Chóśebuskego pódzajtšnego jazora dej nastaś plějuca kupa z gósćeńcom a ferijowym bydlenim. Pśiroźe pśewóstajony wótrězk pśibrjoga z pśibrjozneju drožku wabi k wuchójźowanju pśi jazorje direktnje pśi wóźe. Na pódpołnoc wót Łakomeje rozpśestrěwa se rogozański pśibrjog, kótaryž se wuběrnje góźi za gósći z lokalneje wokoliny, kenž kśě se kupaś,  ale teke za kólasaŕskich turistow póspóromje sćažki nawokoło.</p>");
//5
L.marker([51.80482, 14.42282], {icon: redIcon}).addTo(map).bindPopup("<p><strong>5. Pśistaw Gatojce</strong></p><img src='./img/5_teichland.jpg'/><p>Na pódpołdnjowej kšomje wejsnego źěla Nowa Wjas gmejny Gatojce nastanjo &bdquo;jazorowy pśistaw&ldquo;. Planuju natwariś pśistaw za sportowe cołny na jadnab 16.000 m&sup2; wódneje pśestrěni za 100 wustawadłowych městnow. Kołowokoło pśiducego pśistawowego basenka  nastanjo pśistawowy kwartěr z promenadu pśi jazorje, bitujuceju rozglěd  na pśistaw a pódzajtšny jazor. Promenada pśizamknjo se na pódzajtšu &bdquo;jazorowej wósy&ldquo; a wjeźo dalej k wustawadłoju za pasažěrske łoźownistwo a k &bdquo;rozwjaseleńskemu parkoju&ldquo;. Pśi promenaźe su wobceŕki za mórske źěłaŕstwo, gastronomiju a pśenocowańske móžnosći. Wušej togo su w pśistawowem kwartěrje zaplanowane wobceŕki za wobgóspodarjenje pśistawa, źěłaŕnju, składowanišćo cołnow a  ferijowe bydlenja a domy. Twaŕski teren za bydleńske domy pśinosujo k wóžywjenju kwartěra wob cełe lěto.</p>");
//6
L.marker([51.80745, 14.44994], {icon: redIcon}).addTo(map).bindPopup("<p><strong>6. Barbucka wušyna</strong></p><p>Barbucka wušyna jo kumštna wušyna, kótaraž lažy jadnab 30 m wušej pśirodneje wokoliny. Gromaźe z rozwjaseleńskim parkom &bdquo;Gatojce&ldquo; a rozglědowańskim tormom jo wóna srjejźišćo turistiskich póbitowanjow na pódpołnocnem jazorowem brjogu. W rozwjaseleńskem parku su wušej lěśojskego sańkowanišća teke zipline parcours, lězeńska skała, błuźišćo, &bdquo;Słowjański gaj bogow&ldquo; a &bdquo;sćažka małych bogow&ldquo;. Rozglědowański torm zmóžnijo šyroki wuglěd na pśichodny jazor.</p>");
//7
L.marker([51.79691, 14.44921], {icon: redIcon}).addTo(map).bindPopup("<p><strong>7. Barbucki zalew</strong></p><p>Barbucki zalew se idealnje góźi za wěcej zogolowate muzikowe zarědowanja, źiwadłowe graśa až k wjelikim abo priwatnym zarědowanjam. Wušej togo jo wón surfpoint pśi jazorje. Wódna pśestrěń a pśibrjog w zalewje bitujotej z wusměrjenim na pódpołdnjo nejlěpše wuměnjenja za kite surfowarjow. Sezonowa gastronomija, póbitowanja za rozwucowanje surfowanja a wupóžycanje ale teke łuka za stanowanje, městno k wótstajenju bydleńskich mobilow a wjelike sportnišćo deje pśi pominanju CO&#8322;-neutralnego twarjenja a šonujucego wobchadanja z ressourcami bitowaś ako planowańsku premisu rum za trajny, aktiwny turizm wódnego sporta.</p>");
//8
L.marker([51.78252, 14.47835], {icon: redIcon}).addTo(map).bindPopup("<p><strong>8. Energijowy centrum</strong></p><p>Na něgajšnych brunicowych załožkach brunicoweje wótwórjoneje jamy nastanjo góspodaŕstwowy wobceŕk za industriju a producěrujuce źěłaŕstwo z fokusom na regeneratiwne energije a na wobběgowe góspodarjowanje. Pód wobchadym aspektom derje wótwórjony źěłaŕstwowy teren dej se wutwariś na centrum technologije a  załožaŕski centrum energijow do pśichoda (śěžyšćo  dorostujuce surowizny, alternatiwne dobywanje energije) na cełkownej płoninje 55 ha.</p>");
//9
L.marker([51.78239, 14.4593], {icon: redIcon}).addTo(map).bindPopup("<p><strong>9. Energijowa krajina</strong></p><p>Na pódzajtšu jazora, mjazy sćažku nawokoło a energijowym centrumom, naraźiju zelenu energijowu krajinu. Śěžyšćo dej byś w pśichoźe produkcija regeneratiwnych energijow w wobjadnosći z pśewažnje gólnistwowym a pśiroźe bliskim naslědnym wužywanim  krajiny pó zakóńcenju wudobywanja brunice. Załožki za pśetwórjenje wětšoweje a słyńcneje energije na milinu symbolizěruju how změnu energijowego zastaranja.  Woglědarje mógu na informaciskich toflach póspóromje sćažki nawokoło se informěrowaś wó stawiznach dobywanja energije.</p>");
//10
L.marker([51.75012, 14.48234], {icon: redIcon}).addTo(map).bindPopup("<p><strong>10. Klincański jazor</strong></p><p>Klincański jazor změjo z natwarjenim a zachowanim gódnotnych pśirodnych a krajinowych arealow a z wuwiśim pśiroźe bliskego turizma wósebny wuznam. Ze swójim wuformowanim góźi se za profesionelnu regatowu ceru 2.5000 do 3.000 m. &bdquo;Wjasłowański sportowy centrum&ldquo; zjadnośijo póbitowanje za wódny sport w pśichoźe kradu centralnje a wjele sportowych towaristwow by je mógało wužywaś. Ze spiśistupnjenim jazora dejmy na zakłaźe prognosticěrowanego zakóńcenja napołnjowanja z wódu licyś radnje pó dogótowanju Chóśebuskego pódzajtšnego jazora.</p>");
//11
L.marker([51.74994, 14.44685], {icon: redIcon}).addTo(map).bindPopup("<p><strong>11. Pśirodny pódpołdnjowy pśibrjog</strong></p><p>Wušego połoženja dla jo ten areal wizuelne zwězanje mjazy Klincańskim jazorom a Chóśebuskim pódzajtšnym jazorom. How dej na cerje jadnab 250 m nastaś pśirodny jazorowy pśibrjog za pśijaśelow nudizma a kupanja z wjelikeju pótrjebu za pśirodu. Intensiwne wužywanje wólnego casa a turizma njejo dla togo pśedwiźone. Pśibrjog jo pśistupny pěšy abo pó kólasu póspóromje sćažki nawokoło.</p>");
//12
L.marker([51.75482, 14.41677], {icon: redIcon}).addTo(map).bindPopup("<p><strong>12. Wuwijański rum Šlichow-pódpołdnjo</strong></p><p>Na pódpołdnju jsy Šlichow twóri kumštnje natwarjona, wótměnjata krajina zachopk krajiny pěskowych změtow póspóromje  krotkowjacornego brjoga. Na wjelikich pśestrěnjach jo how móžne wužywanje lichego casa a sportowanje, kótarež se maka z wejsnym charakterom wokoliny a rownocasnje zagórjujo pśedewšym wótpócynka pótrjebnych a z pśirodu zwězanych wulětarjow a tam bydlecych luźi.</p>");
//13
L.marker([51.76131, 14.41381], {icon: redIcon}).addTo(map).bindPopup("<p><strong>13. Šlichow</strong></p><p>Šlichow lažy direktnje pśi pśichodnem Chóśebuskem pódzajtšnem jazorje. How nastanjo pśidatna bydleńska pśestrěń pśez wudopołnjenje a wužywanje  proznych flakow wobydlonych městnow. Z wugótowanim najsy ako šarněr mjazy sedlišćom a łoźowym wustawadłom pśi jazorje nastanjo nowy centrum jsy. Póspóromje najsy planuju chrom za wšake wužywanje, pśidrozny gósćeńc a serwis za kólasarjow, lodowańske stacije za e-bike a teke hyšći góspodu za kólasowarjow. Pśez zastajenje wudobywanja brunice obsoletny w swójej funkciji šćitny nasyp pśed zogolom dej se na zakłaźe wótpowědnych konceptow pśegótowaś.</p>");
//14
L.marker([51.75772, 14.42844], {icon: redIcon}).addTo(map).bindPopup("<p><strong>14. Šlichow pódpołdnjo</strong></p><p>Na krotkem zajtšu Šlichowa dej na zakłaźe kwalitow togo městna nastaś mały ale wósebny  dowolaŕski centrum za sport a wellness. Teke swójski hotelowy pśibrjog a stupnik stej móžnej. Pśibrjog jo za pěškarjow a kólasarjow pśistupny. Sportowe cołny a  jich suwanišća how pak žedne njebudu, te su ga pśedwiźone jano w wobyma wustawadłoma pśi jazorje.</p>");
//15
L.marker([51.76935, 14.40325], {icon: redIcon}).addTo(map).bindPopup("<p><strong>15. Chóśebuski pśibrjog</strong></p><p>Mjazy měsćańskim pśistawom a Šlichowom nastanjo z jadnab 18 ha głowny jazorowy pśibrjog z regionalnym wuznamom. Pódla kupańskego pśibrjoga a sportowych móžnosćow wusoku kwalitu pśebywanja bituju teke móžnosći za spódobne wusednjenje, pśewoblekanje, zastarańske póbitowanja, sanitarne załožki a wupóžycaŕnje lažadłow, pśesłyńcnikow abo cołnow. Na pśibrjog derje pśiźoš pó sćažce nawokoło pěšy, pó kólasu abo skate a pó B168 ze zjawnym wósobowym wobchadom do bliskosći abo wósobowym awtom. Rowno tak za planowane wužywanje ako teke za susedny pśistawowy kwartěr wobstoj CO&#8322;-neutralna twaŕska wašnja a ressource šonujuce wobgóspodarjenje.</p>");
//16
L.marker([51.74297, 14.36965], {icon: redIcon}).addTo(map).bindPopup("<p><strong>16. Grodowy park Rogeńc</strong></p><p>Krajina kołowokoło šlichojskeje wušyny dej se zwězaś z rogeńskeju parkoweju a kulturneju krajinu. Jědro togo zwězanja jo historiska Kastanijowa aleja, něga kněski dojězd ku grodoju a parkoju w Rogeńcu, ako sćažka za pěšych a kólasarjow. Tema wugótowanje krajiny dej se wužywaś ako znamje atraktiwnosći za Chóśebuski pódzajtšny jazor. Rogeński park jo historiska kulturna krajina, Chóśebuski pódzajtšny jazor jeje moderna interpretacija.</p>");
//17
L.marker([51.76085, 14.462], {icon: redIcon}).addTo(map).bindPopup("<p><strong>17. Sćažka nawokoło</strong></p><img src='./img/17_rundweg.jpg'/><p>Wokoło Chóśebuskego pódzajtšnego jazora nastanjo 27 m dłujka sćažka nawokoło za drogowarjow, kólasowarjow, skaterow a joggowarjow. Toś ta &bdquo;sćažka nawokoło Pódzajtšnego jazora&ldquo; zapśimjejo se do bramborskeje seśi kólasowego wobchada a do južo wobstojecych regionalnych sćažkow za kólasowanje. Sćažka zwězujo jadnotliwe městna, projekty, pśibrjogi a hotele pśi Chóśebuskem pódzajtšnem jazorje. Wuznam teje sćažki nawokoło dej se pokazaś pśez wjelgin atraktiwne wuformowanje krajiny, glědajucy rowno tak na meblěrowanje (na pś. ławki, informaciske tofle na wópócywańskich stacijach atd.) ako teke we pówjerchowem wugótowanju.</p>");
//18
L.marker([51.7752, 14.44389], {icon: redIcon}).addTo(map).bindPopup("<p><strong>18. Liškojski zalew</strong></p><p>Bogaty na zalewach pódzajtšny brjog Chóśebuskego pódzajtšnego jazora jo ze swójimi pśed nimi lažecymi kupami abo połkupami póstajony za pśiroźe pśewóstajone, šćitane wuwiśe flory a fawny. Nastaśe kupy za ptaški z wobglědowańskim mósćikom  dej se na tom městnje do statka stajiś.</p>");
//19
L.marker([51.74677, 14.45994], {icon: redIcon}).addTo(map).bindPopup("<p><strong>19. Jazorowa sćažka za kólasowarjow</strong></p><p>Pśepołoženje Sćažki wjercha Pücklera za kólasowarjow dej zwězowaś Chóśebuski pódzajtšny jazor z Klincańskim jazorom a na ten part spśistupniś nowo nastawajucu jazorinu za aktiwny, bliski pśiroźe a CO&#8322;-neutralny kólasowaŕski a drogowański turizm. Za to su sebje južo myslili na wót rowniny njewótwisne pśeprěcenja B97 a cery něgajšneje jamoweje zeleznice.</p>");
//20
L.marker([51.78125, 14.42406], {icon: redIcon}).addTo(map).bindPopup("<p><strong>20. Jazorowe znamje</strong></p><p>Markantne znamje - jazor - dej byś rowno tak magnet za wócy a nosaŕ naglědnosći ako teke widobne znamje strukturneje změny. Městno zrazom markěrujo srjejź Chóśebuskego pódzajtšnego jazora. Za namakanje idejow su na BTU Chóśebuz-Zły Komorow pśewjadli studentske wuběźowanje. Nejlěpše ideje pśedłogow zapśimjejotej měsćańske zastojnstwo Chóśebuz a management pódzajtšnego jazora do dalšnego planowanja Chóśebuskego pódzajtšnego jazora a pruwujotej jich realizaciju.</p>");
//21
L.marker([51.76595, 14.40668], {icon: redIcon}).addTo(map).bindPopup("<p><strong>21. Sportowy tśirožk Chóśebuski pódzajtšny jazor</strong></p><p>W wobłuku realizacije projekta strukturnego wuwiśa &bdquo;BMX event- a treningowy centrum w parku za sport a wólny cas Chóśebuski pódzajtšny jazor&ldquo; deje se w pódpołdnjowem wobceŕku Chóśebuskego pódzajtšnego jazora na wusokosći měsćańskego źěla Dešank etablěrowaś nowe wužywańske móžnosći za sport a wólny cas a spśistupniś nowo wugótowany pśez pśirodu pregowany měsćański rum pśi wóźe. Park na fryšnem powětšu  ze sportowymi póbitowanjami na kraju a mjeńšymi twaŕskimi załožkami (wc, zastojnstwo, kafejownja) ako pódrědowane wužywanje jo móžny. Za wurědny sport, sport we wólnem casu, masowy a towaristwowy sport by ze &bdquo;sportowym tśirožkom&ldquo; z měsćańskego pśistawa, BMX-centruma/parka za sport a wólny cas a sportowego parka na fryšnem powětšu stojali  wjelerake póbitowanja k dispoziciji.</p>");
//22
L.marker([51.75496, 14.39642], {icon: redIcon}).addTo(map).bindPopup("<p><strong>22. BUGA 2033 - wizija</strong></p><img src='./img/22_buga.jpg'/><p>W Chóśebuzu jo se połpěta lět pó zjadnośenju Nimskeje wótměło prědne zwězkowe zagrodnistwowe rozpokazowanje w nowych zwězkowych krajach. Skóro styri lětźasetki pózdźej co Chóśebuz byś zasej gósćinaŕ a woglědarjam z Nimskeje a Europy prezentěrowaś trajne wuwiśe centruma něgajšnego regiona wótwórjonych jamow. BUGA-koncept, kótaryž wulicujo wótměnjate stawizny města a regiona, njejo dotychměst hyšći žednje eksistěrował: Mjazy centrumom města, Rogeńskim parkom a Chóśebuskim pódzajtšnym jazorom deje se we wjelerakich dožywjeńskich móžnosćach a na drogowańskich sćažkach pśibližyś kulturne stawizny we spleśenju poměrow pśirody, techniki, góspodaŕstwa, towarišnosći, wudobywanja brunice, energijoweje produkcije, znicenja krajiny a zgubjenja pśirodnych žywjeńskich zakładow a pytanja luźi za swójeju identitu.</p>");
