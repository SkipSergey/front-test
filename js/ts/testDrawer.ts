export class TestDrawer {
	constructor(){}

	draw() {
		
		const body = $("body");
		body.append($.mustache(window.TemplateJS.maintemplate, {}));
	}

	loadData(){
		
		var jsFile:JSObjectType[];
		$.get("./js/sms.js", function(data){
			jsFile=JSON.parse(data);
		}).done(function(){

				const flexContainer=$("#flexContainer");
				for(var i in jsFile)
				{	
					flexContainer.append($.mustache(window.TemplateJS.flexItem,{
						ID : jsFile[i].ID,
						Name : jsFile[i].Name,
						Ico : jsFile[i].Ico
					}));
				}
			});
	}

	removeModalForm() {
		const modal = $("#modal");
		modal.empty();
		modal.css({display:"none"});
	}
	loadModalForm(ID:any){
		let jsObject:JSObjectType;
		let jsFile:JSObjectType[];
		const modal = $("#modal");
		$.get("./js/sms.js", function(data){
			jsFile=JSON.parse(data);
		}).done(function(){
			jsObject = jsFile.find(findObject=>findObject.ID==ID);
			if(jsObject!=undefined)
			{
				modal.append($.mustache(window.TemplateJS.modalItem,{
					ParamsText: jsObject.ParamsText,
					Login: jsObject.Params[0].Name,
					Adress:jsObject.Params[1].Name
				}));
			}
			else
			{
				modal.append($.mustache(window.TemplateJS.modalItem,{
					ParamsText:"ERROR",
					Login: "ERROR",
					Adress:"ERROR"
				}));
			};

			
		});
		modal.css({display:"flex"});
	}
}

class JSObjectType{
	ID : any;
	Name : string;
	Ico : string;
	Params : [{
		Name: string;
		Type: number;
		Arc :string;
		},
		{
		Name: string;
		Type: number;
		Acr: string;}];
	ParamsText : string;
}
