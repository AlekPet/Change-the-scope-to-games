// ==UserScript==
// @name:en_US  Change the scope to surviv.io
// @name:ru_RU  Изменить прицел в surviv.io
// @namespace    https://github.com/AlekPet/
// @version      0.0.1
// @description:en_US  Сhange the scope in the game surviv.io
// @description:ru_RU  Изменяет прицел в игре surviv.io
// @copyright    2018, AlekPet (https://github.com/AlekPet)
// @author       AlekPet
// @license      MIT; https://opensource.org/licenses/MIT
// @match        http://surviv.io/
// @match        http://zombsroyale.io/
// @icon         http://surviv.io/img/icon_app.png
// @updateURL    https://github.com/AlekPet/Change-the-scope-to-surviv.io/raw/master/Change-the-scope-to-surviv.io.user.js
// @downloadURL  https://github.com/AlekPet/Change-the-scope-to-surviv.io/raw/master/Change-the-scope-to-surviv.io.user.js
// @run-at document-end
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_addStyle
// @grant GM_getResourceText
// @require https://code.jquery.com/jquery-3.1.0.min.js
// @resource scopes https://github.com/AlekPet/Change-the-scope-to-surviv.io/raw/master/assets/json/scopes.json
// ==/UserScript==

GM_addStyle(`
.mPanel_cur {
position: fixed;
top: 5%;
left: 50%;
background: #dadada;
max-width: 600px;
width: 600px;
z-index: 4;
border: 1px solid silver;
box-shadow: 2px 2px 5px #847b7b;
margin-left: -300px;
text-align: center;
display: none;
}
.mPanel_cur_title {
background: silver;
font: bold 1em monospace;
padding: 5px;
color: white;
text-shadow: 1px 1px 3px darkblue;
border-bottom: 1px dotted white;
user-select: none;
}
.mPanel_cur_title > div{
float:right;
}
.mPanel_cur_title > div:hover {
color: #d1fffb;
}
.table_box{
display: table
}
.table_box > div{
display: table-cell
}
.rightPanel_options{
text-shadow: 1px 1px 3px darkgreen;
background: linear-gradient(to right, #62a965,#0e2f0e);
color: #ffffff;
border-left: 1px dotted white;
padding: 5px;
}
.rightPanel_options_title {
background: linear-gradient(#69e815,#3f7703);
color: white;
padding: 2px 0;
user-select: none;
}
.rightPanel_options_inside {
border: 1px solid;
max-height: 495px;
overflow-y: auto;
}
.mPanel_cur_list_box {
background: #ffffff;
width: 80%;
}
.optionFiels {
border-top: 1px dotted;
}
ul.list_cur {
padding: 0;
margin: 0;
height: 500px;
width: 480px;
overflow-y: auto;
}
.list_cur > li {
min-width: 88px;
min-height: 88px;
width: 88px;
height: 88px;
}
.list_cur > .element_cur_cont {
list-style: none;
display: inline-block;
padding: 5px;
text-align: center;
border: 1px dotted silver;
margin: 5px;
cursor: pointer;
vertical-align: top;
background: linear-gradient(to right bottom, silver,white);
}
.element_cur_cont:hover {
background: linear-gradient(#00ffff75,#dbff005c);
}
.acive_cursor{
background: linear-gradient(#00ffff75,#dbff005c) !important;
}
.element_cur_title {
color: black;
text-shadow: 1px 1px 3px darkgrey;
word-wrap: break-word;
font-size: 0.8em;
}
.mPanel_cur_foot {
background: #757574;
padding: 3px;
border-top: 1px dotted white;
color: antiquewhite;
text-shadow: 1px 1px 3px darkgreen;
}
.auhor_cur_sel {
font-size: 0.6em;
color: #56fff1 !important;
margin-top: 4px;
padding: 2px;
float: right;
}
.cur_sel_button_box {
display: inline-block;
}
.cur_button {
border: 1px solid silver;
padding: 3px;
font-size: 0.7em;
cursor: pointer;
user-select: none;
display: inline-block;
margin-left:10px;
}
.add_cur{
background: linear-gradient(#b3b766,#07b994);
color:white
}
.add_cur:hover{
background: linear-gradient(#e7f134,#00ffca);
color: #424242;
}
.create_cur {
background: linear-gradient(#b3b766,#07b994);
color: white;
}
.create_cur {
background: linear-gradient(#ff8a00,#ff6161);
color: white;
}
.del_cur{
display:none;
background:linear-gradient(#b76666,#b90776);
}
.del_cur:hover{
background: linear-gradient(#c12b2b,#d89cc1) !important;
color: white;
}
.checkbox_del_cur {
}
.checkbox_edit_cur {
font-size: 0.6em;
vertical-align: text-top;
background: limegreen;
border: 0;
color: white;
border-radius: 4px;
text-shadow: 1px 1px 3px black;
cursor:pointer;
}
.checkbox_edit_cur:hover {
background: #ff9b00;
}
.zomb_btn-red {
background: rgb(175, 80, 80);
border-bottom: 2px solid rgb(122, 56, 56);
box-shadow: rgb(122, 56, 56) 0px -2px inset;
color: #fff;
cursor: pointer;
font-size: 12px;
position: fixed;
text-shadow: 0 1px 2px rgba(0,0,0,.25);
top: 50%;
right: 0;
display: none;
opacity: 0.7;
transform: translate(0, -20px) rotateZ(-90deg);
transform-origin: bottom right;
height: 25px;
width: 105px;
line-height: 20px;
border: 0;
border-radius: 5px;
box-sizing: border-box;
margin-bottom: 8px;
text-align: center;
text-decoration: none;
}
.zomb_btn-darken:active, .zomb_btn-darken:hover {
color: inherit;
-webkit-filter: brightness(80%);
filter: brightness(80%);
transition: all .25s ease;
}
.makeCursor_form {
position: fixed;
top: 20%;
left: 50%;
width: 350px;
margin-left: -180px;
border: 1px solid silver;
background: #dadada;
display: none;
box-shadow: 3px 3px 5px silver;
z-index: 5;
}
.makeCursor_form_title {
background: darkgrey;
color: white;
text-shadow: 1px 1px 3px darkolivegreen;
padding: 3px;
border-bottom: 1px dotted;
font: bold 1em monospace;
}
.makeCursor_form_title > div {
float: right;
cursor: pointer;
}
.makeCursor_form_title > div:hover {
color: #d1fffb;
}
.maleCursor_form_body input {
width: 80%;
margin: 5px;
padding: 2px;
border: 1px dotted #04fbc6;
}
.maleCursor_form_body > .form_field{

}
.maleCursor_form_body span {
color: #635e5e;
font: normal 1em monospace;
}
.maleCursor_form_foot {
padding: 5px;
background: whitesmoke;
}
.cur_preview {
border: 1px dotted #0d6b57;
width: 50%;
margin: 10px auto;
padding: 5px;
background: floralwhite;
}
.cur_preview > p {
background: #b7b2b2;
padding: 0px;
margin: 0;
color: white;
}
.cur_preview > img {
margin: 10px;
}
.drawSelf {
font-size: 0.9em;
padding: 3px;
background: #b5c5c3;
}
.drawSelf > a{
font-size: 0.9em;
}
.cur_overlay {
background: #000000cc;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 5;
display:none;
}
img#image_aim {
position: absolute;
z-index: 6;
}
`);

(function() {
    'use strict';
    const cursorList = JSON.parse(GM_getResourceText('scopes')).scopes || [{name:"Scope 1",cururl:"http://www.rw-designer.com/cursor-view/101646.png",active:false},
                                                                           {name:"Scope 2",cururl:"http://www.rw-designer.com/cursor-view/111928.png",active:false},
                                                                           {name:"Scope 3",cururl:"http://www.rw-designer.com/cursor-view/111937.png",active:false},
                                                                           {name:"Scope 4",cururl:"http://www.rw-designer.com/cursor-view/78056.png",active:false},
                                                                           {name:"Scope 5",cururl:"http://www.rw-designer.com/cursor-view/97540.gif",active:false},
                                                                           {name:"Scope 6",cururl:"https://image.flaticon.com/icons/png/128/487/487009.png",active:false}],
          lang = {
              ru:{
                  form_title: "Выбор прицела",
                  addCrosshair: "Добавить прицел",
                  editCrosshair: "Правка",
                  delCrosshair: "Удалить прицел(ы)",
                  selectCrosshair: "Выбрать: ",
                  scopeName: "Название прицела (необяз.)",
                  scopeLink: "Ссылка прицела (png,gif,jpg,cur,base64)",
                  errorName: "Внимание:\nПоле имени не задано, будет использовано случайное название!\nНазвание: ",
                  errorLinkEmpty: "Поле ссылки пустое!",
                  errorLink: "Поле ссылки указано неверно!",
                  errorImage: "Размер изображения больше 128x128 px, или равно 0x0 px, или не определенно!",
                  errorAdd: "Сообщение:\nПрицел не был добавлен из-за неверно заданных параметров!",
                  addComplete: "Сообщение:\nПрицел был успешно добавлен!",
                  name: "Название: ",
                  link: "Ссылка: ",
                  preview: "Предпросмотр",
                  drawSelf: "Нарисовать свой ",
                  drawSelfInstructions: "File > New\nSet size <= 128px\nРисуем прицел\nSave as data URL\nКопиуем код и вставляем в поле Ссылки",
                  scopeSite: "Еще прицелы",
                  createScope: "Создать прицел",
                  alertMesImage: ["Внимание:\nРазмер изображения ","Максимально допустимый размер изображения 128x128px!\nИначе работать не будет!\nПроверить прицел можно, если навести на рисунок..."],
                  deleteScope: "Удалить курсор(ы)?",
                  selectScope: "Выбрать прицел",
                  form_close: "Закрыть",
                  resetDefault: "Загрузить стандартные",
                  resetDefaultCompete: "Стандартные прицелы были загружен!",
                  resetQuestion: "Вы действительно хотите загрузить стандартные прицелы?\nВсе ваши добавленные прицелы, буду удалены?",
                  resetQuestionFisrt: "Загрузить стандартный набор прицелов?",
                  laserColor: "Цвет луча:",
                  laserWidth: "Толщина луча:",
                  laserParmDotted: "Параметры пунктира:",
                  laserDottedOn: "Включить пунктир?",
                  rightOptionsTitle: "Опции"
              },
              en:{
                  form_title: "Select scope",
                  addCrosshair: "Add scope",
                  editCrosshair: "Edit",
                  delCrosshair: "Remove scope(s)",
                  selectCrosshair: "Select: ",
                  scopeName: "Name for the sight (opt.)",
                  scopeLink: "Sight link (png,gif,jpg,cur,base64)",
                  errorName: "Warning:\nthe name field is not set, a random name will be used!\nName: ",
                  errorLinkEmpty: "The link Field is empty!",
                  errorLink: "The link Field is incorrect!",
                  errorImage: "The image Size is greater than 128x128 px, or equal to 0x0 px, or indefinite!",
                  errorAdd: "Message:\nThe sight was not added due to incorrect parameters!",
                  addComplete: "Message:\nSight was successfully added!",
                  name: "Name: ",
                  link: "Link: ",
                  preview: "Preview",
                  drawSelf: "Draw your own ",
                  drawSelfInstructions: "File > New\nSet size <= 128px\nPaint on canvas\nSave as data URL\nCopy code and past in the Link",
                  scopeSite: "More sights",
                  createScope: "Create sight",
                  alertMesImage: ["Attention:\nImage Size", "The maximum image size is 128x128px!\nOtherwise it will not work!\nIt is possible to check the sight if you look at the picture ..."],
                  deleteScope: "Delete the cursor(s)?",
                  selectScope: "Select scope",
                  form_close: "Close",
                  resetDefault: "Load default",
                  resetDefaultCompete: "Standard scopes have been loaded!",
                  resetQuestion: "Do you really want to load standard scopes?\nAll your added scopes will be deleted?",
                  resetQuestionFisrt: "Download the standard set of sights?",
                  laserColor: "Beam color:",
                  laserWidth: "Beam width:",
                  laserParmDotted: "Dashed Parameters:",
                  laserDottedOn: "Enable dotted line?",
                  rightOptionsTitle: "Options"
              }
          },

          debug = false,

          defaultCursorImage = "https://github.com/AlekPet/Change-the-scope-to-surviv.io/raw/master/assets/images/default.png"

    var ObjSaveCursors = null, language = 'en-US',
        selLang = lang.en;

    language = window.navigator.userLanguage || window.navigator.language

    if(language == "ru-RU") selLang = lang.ru
    if(debug) console.log("Язык:", language, selLang)

    function loadStorage(){
        let ObjSaveCursors_tmp = GM_getValue('ObjSaveCursors');

        ObjSaveCursors = (ObjSaveCursors_tmp) ? JSON.parse(GM_getValue('ObjSaveCursors')) : {
            options: {
                firstRun: true
            },
            cursorList:{},
            currentActive:null
        };
        if(debug) console.log(ObjSaveCursors)
        return (ObjSaveCursors.hasOwnProperty("options") && ObjSaveCursors.options.firstRun)?true:false
    }

    function saveToStorage(){
        try{
            var save_data = JSON.stringify(ObjSaveCursors);

            if(save_data.length>0 && save_data !== null && save_data !=="" && save_data !== undefined){
                GM_setValue('ObjSaveCursors', save_data);
                if(debug) console.log("Сохраненно: ",ObjSaveCursors);
            }
        }catch(e){
            console.log(e);
        }
    }

    function imageSizes(imgCur){
        let img = $("<img>")
        .one('load', function(){
            return {x:this.naturalWidth/2, y: this.naturalHeight/2}
        })
        .one('error', function(){
            return null
        }).attr('src',imgCur)
        }

    function setGameCursor(urlCur){
        if(location.href.includes("surviv.io")){
            $("#game-area-wrapper").css({'cursor': urlCur})
            $(".zomb_menu-option").show()
        } else {
            $("canvas").css({'cursor':'url("'+urlCur+'"), default'})
        }
    }

    function setCursor(cur = "crosshair", imgInside = null){
        if(debug) console.log(cur,imgInside)

        let urlCur = null
        if(cur == "crosshair" || imgInside == null){
            if(debug) console.log('Равен: ', cur)
            urlCur = cur
        } else {
            let x = imgInside.naturalWidth/2,
                y = imgInside.naturalHeight/2

            urlCur = 'url("'+cur.cururl+'") '+x+' '+y+', crosshair'

            if(debug) console.log('Применяем:', urlCur)
        }
        setGameCursor(urlCur)
    }

    function imageCursorAim(){
        if(this.checked){
            let imagecheckActive = returnActive(),
                imagesrc = imagecheckActive != null && imagecheckActive.length ? imagecheckActive[0].cururl: defaultCursorImage,
                $img = $("<img>").one('load', function(){

                    $(this).data('coord',{x:this.width/2, y: this.height/2})

                }).attr({'src':imagesrc,'id':'image_aim'})
            $("body").append($img)

            $(document).mousemove(function(event) {
                let imgData = $img.data('coord')
                if(typeof imgData.x == 'number'){
                    let x=event.pageX+1,//-imgData.x-1,
                        y=event.pageY+1//-imgData.y-1

                    $img.css({
                        "top": y + "px",
                        "left": x +"px"
                    });
                }
            })

        } else {
            $(document).off('mousemove')
            $("#image_aim").remove()
            $(document).mousemove = null
        }
    }

    function loadDefaultScopes(firststart = false){
        if(confirm(!firststart?selLang.resetQuestion:selLang.resetQuestionFisrt)){
            let fileScopes = GM_getResourceText('scopes')
            if(fileScopes.length){
                let convertJSON = JSON.parse(fileScopes).scopes
                if(ObjSaveCursors.hasOwnProperty("cursorList")){
                    ObjSaveCursors.cursorList = convertJSON;
                    saveToStorage()
                    alert(selLang.resetDefaultCompete)
                    updatePanel()
                }
            }
        }
    }

    function betaLine(color = "red", widthLine = 2, dotted = null){
        let $canvas = $("#linebetas"),
            $cvs = $("#cvs")
        if($canvas.length == 0){
            $canvas = $('<canvas>').css({position: 'absolute',
                                         top: 0,
                                         left: 0}).attr({'id' :'linebetas', width: 1920, height: 531})
            $canvas.insertAfter($cvs)
        }
        let $canvas0 = $canvas.get(0),
            ctx = $canvas0.getContext('2d'),
            $cvs0 = $cvs.get(0)

        $(document).mousemove(function(event){
            let w = $canvas0.width,
                h = $canvas0.height
            $canvas.attr({'width': $cvs0.width, 'height': $cvs0.height})
            ctx.beginPath()
            if(dotted != null) ctx.setLineDash(dotted);
            ctx.strokeStyle=color
            ctx.lineWidth=widthLine
            ctx.moveTo(w/2,h/2)
            ctx.lineTo(event.pageX,event.pageY)
            ctx.stroke();

        })
    }

    function makeMenuButton(firststart = false){
        let $openSelectCur = null
        if(location.href.includes("surviv.io")){
            // surviv.io/
            $openSelectCur = $('<a class="btn-green btn-darken menu-option">'+selLang.selectScope+'</a>')
                .css({
                "background": "#af5050",
                "border-bottom": "2px solid #7a3838",
                "box-shadow": "inset 0 -2px #7a3838"
            })
                .click(function(){
                if(firststart && ObjSaveCursors.options.firstRun) {
                    if(debug) console.log("Прицелы не найдены, загрузить стандартные!")
                    loadDefaultScopes(firststart)
                    ObjSaveCursors.options.firstRun = false
                    saveToStorage()
                }

                $(".mPanel_cur").fadeToggle('slow')
            })
            $openSelectCur.insertAfter("#btn-start-solo")
            $("#game-area-wrapper").append($openSelectCur.clone(true).css({
                "font-size": "0.7em",
                "position": "fixed",
                "top": "0",
                "left": "5px",
                "width": "80px",
                "height": "20px",
                "line-height": "1.5",
                "opacity": "0.7",
                "z-index": "5"
            }))
            $(".menu-block").css("max-height", "375px")
        } else {
            // zombsroyale.io
            $openSelectCur = $('<a class="zomb_btn-red zomb_btn-darken zomb_menu-option">'+selLang.selectScope+'</a>').click(function(){
                if(firststart && ObjSaveCursors.options.firstRun) {
                    if(debug) console.log("Прицелы не найдены, загрузить стандартные!")
                    loadDefaultScopes(firststart)

                    ObjSaveCursors.options.firstRun = false
                    saveToStorage()
                }
                $(".mPanel_cur").fadeToggle('slow')
            })
            $openSelectCur.insertAfter(".canvas-loading")
            setTimeout(checkCursorStartup, 1000);
        }
    }

    function makePanel(firststart){
        let $mPanel = $("<div class='mPanel_cur'>"+
                        "<div class='mPanel_cur_title'>"+selLang.form_title+"<div style='cursor:pointer;' title='"+selLang.form_close+"'>X</div></div>"+
                        "<div class='table_box'>"+
                        "<div class='mPanel_cur_list_box'><ul class='list_cur'></ul></div>"+
                        "<div class='rightPanel_options'>"+
                        "<div class='rightPanel_options_inside'>"+
                        "<div class='rightPanel_options_title'>"+selLang.rightOptionsTitle+"</div>"+
                        "<div class='optionFiels'><a href='javascript:void(0)' title='"+selLang.resetDefault+"' id='resetDefaultScopes' style='color: cyan !important;font-size: 0.6em;text-decoration: none;'>"+selLang.resetDefault+"</a></div>"+
                        "<div class='optionFiels'>Laser: <input type='checkbox' title='Laser' id='LineLaser'></div>"+
                        "<div class='optionFiels'><span style='display: none'>Image aim:<input type='checkbox' id='mouseimgaim' /></span></div>"+
                        "</div>"+
                        "</div>"+
                        "</div>"+
                        "<div class='mPanel_cur_foot'>"+
                        "<div class='cur_sel_button_box'></div>"+
                        "<a href='https://github.com/AlekPet' target='_blank' title='AlekPet Guthub ^_^' class='auhor_cur_sel'>AlekPet 2018</a></div>"+
                        "</div>"),
            $cur_overlay = $("<div class='cur_overlay'>"),
            closeX = $($mPanel).find(".mPanel_cur_title > div").click(function(){
                $mPanel.fadeOut()
            }),
            $LineLaser = $($mPanel).find("#LineLaser").change(function(){
                if(this.checked){
                    let color = prompt(selLang.laserColor, "red"),
                        widthLine = prompt(selLang.laserWidth, "2"),
                        dotted = (confirm(selLang.laserDottedOn)) ? prompt(selLang.laserParmDotted, "5,15") : null
                    if(dotted != null) dotted = dotted.split(',')
                    betaLine(color,widthLine,dotted)
                } else {
                    $("#linebetas").remove()
                }
            }),
            resetDefaultScopes = $($mPanel).find("#resetDefaultScopes").click(loadDefaultScopes),
            $addCursor = $("<div class='cur_button add_cur'>").attr('title',selLang.addCrosshair).text(selLang.addCrosshair).click(makeFormAddCursor),
            $delCursor = $("<div class='cur_button del_cur'>").attr('title',selLang.delCrosshair).text(selLang.addCrosshair).click(delCursor),
            $cur_sel_button_box = $($mPanel).find(".cur_sel_button_box").append($addCursor,$delCursor),
            $mouseimgaim = $($mPanel).find("#mouseimgaim").change(function(){
                imageCursorAim.call(this)
            })

        $mPanel.append($cur_overlay);
        $("body").append($mPanel)
    }

    // zombsroyale.io
    function checkCursorStartup(){
        if(document.getElementsByTagName("canvas")[0].style.cursor.indexOf("data:image/cur") != -1){
            $(".zomb_btn-red").show()
        } else {
            setTimeout(checkCursorStartup, 1000);
        }
    }

    function updatePanel(firststart = false){
        let ListBox = $(".mPanel_cur_list_box > ul").empty(),
            activeTrue = false,

            divDef = $("<li class='element_cur_cont'>").attr('title',"Default").click(function(){
                $(".list_cur > li.acive_cursor").removeClass("acive_cursor")
                $(this).addClass("acive_cursor")
                checkActive(null)
                setCursor("crosshair")
                saveToStorage()
            }),
            divDefTitle = $("<span class='element_cur_title'>").text("Default"),
            divDefImg = $("<img width='48'>").attr("src", defaultCursorImage),
            divDefImgBox = $("<div class='element_cur_title'>").append(divDefImg)

        divDef.append(divDefImgBox,divDefTitle)
        $(ListBox).append(divDef)

        $.each(ObjSaveCursors.cursorList, function(index, el){
            let self = el,
                divCont = $("<li class='element_cur_cont'>").attr('title',selLang.selectCrosshair+self.name).click(function(){
                    let imgInside = $(this).find("img").get(0)
                    $(".list_cur > li.acive_cursor").removeClass("acive_cursor")
                    $(this).addClass("acive_cursor")
                    checkActive(self)
                    setCursor(self, imgInside)
                    saveToStorage()
                }),
                divTitle = $("<span class='element_cur_title'>").text(self.name.length>15?self.name.substr(0,12)+"...":self.name),
                divImg = $("<img width='48'>").attr({"src": self.cururl}),
                divImgBox = $("<div class='element_cur_title'>").append(divImg),
                delCheck = $("<input class='checkbox_del_cur' type='checkbox' title='Удаление'>").click(function(){
                    event.stopPropagation();
                }),
                editButton = $("<input type='button' class='checkbox_edit_cur' value='"+selLang.editCrosshair+"' title='"+selLang.editCrosshair+"'>").click(function(){
                    event.stopPropagation();
                    editCursor(self, index)
                })

            divCont.append($("<p style='margin: 0;padding: 0;border-bottom: 1px dotted silver;'>").append(editButton,delCheck),divImgBox,divTitle)
            $(ListBox).append(divCont)

            if(self.active){
                activeTrue = true
                $(divCont).addClass("acive_cursor")

                divImg.one('load', function(){
                    setCursor(self, this)
                }).one('error', function(){
                    setCursor()
                })
            }
        })

        if(firststart || !activeTrue){
            $(".element_cur_cont:eq(0)").addClass("acive_cursor")
            setCursor("crosshair")
        }

        $(".checkbox_del_cur").on("change",function(){
            $(".checkbox_del_cur:checked").length ? $(".del_cur").fadeIn('slow').css("display","inline-block").text(`Удалить [${$(".checkbox_del_cur:checked").length}]`):$(".del_cur").fadeOut('slow')
        })
    }

    function defaultValueForm(elem){
        $(elem).find("#name_scope,#link_scope,#previewName,#previewImg").each(function(){
            switch(this.id){
                case 'name_scope':
                case 'link_scope': this.value = ''
                    break;
                case 'previewName': this.innerText='Default'
                    break;
                case 'previewImg': this.src = defaultCursorImage
                    break;
            }
        })
    }

    function makeFormAddCursor(){
        let $makeCurForm = $(".makeCursor_form"),
            $cur_overlay = $(".cur_overlay")

        if($makeCurForm.length == 0){
            $makeCurForm = $("<div class='makeCursor_form'>")
            let htmlInner = "<div class='makeCursor_form_title'>Add scope<div title='"+selLang.form_close+"'>X</div></div>"+
                "<div class='maleCursor_form_body'>"+
                "<div class='form_field'><span>"+selLang.name+"</span><input type='text' id='name_scope' value='' maxlength='100' placeholder='"+selLang.scopeName+"'></div>"+
                "<div class='form_field'><span>"+selLang.link+"</span><input type='text' id='link_scope' value='' placeholder='"+selLang.scopeLink+"'></div>"+
                "<div class='cur_preview'><p>"+selLang.preview+"</p><img id='previewImg' src='"+defaultCursorImage+"' width='45'><div style='word-break: break-all;' id='previewName'>Default</div></div>"+
                "<div class='drawSelf' title='"+selLang.drawSelfInstructions+"'>"+selLang.drawSelf+"<a target='_blank' href='http://viliusle.github.io/miniPaint/' style='color:blue'>miniPaint</a><br>"+
                "<a target='_blank' title='"+selLang.scopeSite+"' style='color:red' href='https://thenounproject.com/search/?q=crosshairs'>"+selLang.scopeSite+"</a></div>"+
                "</div>"+
                "<div class='maleCursor_form_foot'>"+
                "<div class='cur_button create_cur' id='createCursor' title='"+selLang.createScope+"'>"+selLang.createScope+"</div>"+
                "</div>"

            $makeCurForm.html(htmlInner)

            $cur_overlay.fadeIn('slow', function(){
                $makeCurForm.fadeIn('fast')
            })

            $(".mPanel_cur").append($makeCurForm)

            $(".makeCursor_form_title > div").click(function(){
                $makeCurForm.fadeOut('slow', function(){
                    $cur_overlay.fadeOut('slow', function(){
                        defaultValueForm($makeCurForm)
                    })
                })
            })
            $("#createCursor").click(addCursor)

            $("#name_scope").on('input', function(){
                $("#previewName").text($(this).val())
            })
            $("#link_scope").on('input', function(){
                let val = $(this).val().trim()

                $("#previewImg").one('load', function(){
                    const w = this.naturalWidth,
                          h = this.naturalHeight
                    if(w>128 || h>128) alert(selLang.alertMesImage[0]+w+"px x "+h+"px!\n"+selLang.alertMesImage[1])
                    $(".cur_preview").css('cursor','url('+this.src+'), not-allowed')
                    if(this.src !== defaultCursorImage)$(this).data("sizes", {w:w, h:h}); else $(this).data("sizes", {w:null, h:null})
                }).one('error', function(){
                    this.src = defaultCursorImage
                    $(".cur_preview").css('cursor','crosshair')
                }).attr('src', val)
            })
        } else{
            $cur_overlay.fadeIn('slow', function(){
                $makeCurForm.fadeIn('fast')
            })
        }
    }

    function addCursor(){
        let $makeCurForm = $(".makeCursor_form"),
            $cursorName = $makeCurForm.find("#name_scope"),
            $cursorUrl = $makeCurForm.find("#link_scope"),
            $cur_overlay = $(".cur_overlay"),

            $previewImg = $makeCurForm.find("#previewImg")

        let cursorNameVal = $cursorName.val(),
            cursorUrlVal = $cursorUrl.val(),
            errors = false

        if(/^\s*$/i.test(cursorNameVal)){
            cursorNameVal="Croshair_"+Math.floor(Math.random()*10000)
            $cursorName.val(cursorNameVal)
            alert(selLang.errorName+cursorNameVal)
        }

        if(/^\s*$/i.test(cursorUrlVal)){
            alert(selLang.errorLinkEmpty)
            errors = true
        }

        if(!/(?:^https?:\/\/.*\.(?:png|jpg|jpeg|gif|cur|tiff)$|^data:image)/i.test(cursorUrlVal)){
            alert(selLang.errorLink)
            errors = true
        }

        if(!errors){
            const w = $previewImg.data("sizes").w || 0,
                  h = $previewImg.data("sizes").h || 0

            if(w>128 || h>128 || w == 0 || h == 0 || w == null || h == null){
                alert(selLang.errorImage)
                errors = true
            }
        }

        if(errors){
            alert(selLang.errorAdd)
            return
        }

        if(ObjSaveCursors.hasOwnProperty("cursorList")){
            ObjSaveCursors.cursorList.push({name:cursorNameVal, cururl:cursorUrlVal, active:false})
            saveToStorage()

            $makeCurForm.fadeOut('slow', function(){
                $cur_overlay.fadeOut('slow', function(){
                    defaultValueForm($makeCurForm)
                })
            })

            updatePanel()
            alert(selLang.addComplete)
        }
    }

    function returnActive(){
        let activetrue = null
        if(ObjSaveCursors.hasOwnProperty("cursorList") && Object.keys(ObjSaveCursors.cursorList).length){
            activetrue = ObjSaveCursors.cursorList.filter((ix,elem)=>{
                return ix.active == true
            })
            return activetrue
        }
    }

    function checkActive(el){
        if(ObjSaveCursors.hasOwnProperty("cursorList") && Object.keys(ObjSaveCursors.cursorList).length){
            ObjSaveCursors.cursorList.map((ix,elem)=>{
                ix.active = false
                return ix.active
            })
            if(el !== null ) el.active = true
        }
    }

    function editCursor(el,index){
        if(ObjSaveCursors.hasOwnProperty("cursorList") && Object.keys(ObjSaveCursors.cursorList).length){
            let cursorName = prompt(selLang.scopeName,el.name),
                cursorUrl = prompt(selLang.scopeLink,el.cururl)

            if(cursorName === null || /^\s?$/i.test(cursorName)){
                console.log("Null")
                cursorName = "Croshair_"+Math.floor(Math.random()*10000)
            }

            if(cursorUrl == null || /^\s?$/i.test(cursorUrl) || !/(?:^https?:\/\/.*\.(?:png|jpg|jpeg|gif|cur|tiff)$|^data:image)/i.test(cursorUrl)){
                alert(selLang.errorLink)
                return
            }

            ObjSaveCursors.cursorList[index] = {name:cursorName,cururl:cursorUrl,active:false}
            saveToStorage()
            updatePanel()
        }
    }

    function delCursor(){
        if(confirm(selLang.deleteScope)){
            let arr_delete_cursors = []
            $(".list_cur").find("input[type=checkbox]").each(function(index,eleme){
                if($(this).is(':checked')){
                    arr_delete_cursors.push(index);
                }
            });
            arr_delete_cursors = arr_delete_cursors.reverse();
            for(var k in arr_delete_cursors){
                ObjSaveCursors.cursorList.splice(arr_delete_cursors[k],1);
            }
            saveToStorage()
            $(".del_cur").fadeOut('slow')
            updatePanel()
        }
    }

    function init(){
        let firststart = false;
        if(loadStorage()){
            firststart = true
            if(debug) console.log("Первый запуск!", firststart)
        }
        makeMenuButton(firststart)
        makePanel()
        updatePanel(firststart)
    }
    init()
})();