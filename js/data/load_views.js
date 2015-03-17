var data = {};

$(function() {

	data = {"views": [
	 	{
	 	  "editable":true,"context":{
	 	    "drilldowns":[
	 	      
	 	    ],"name":"Widgets","dataCols":[
	 	      
	 	    ],"viewType":"table","entries":25,"filters":[
	 	      
	 	    ],"colGroupings":[
	 	      
	 	    ],"activeLink":false,"preventAutoLoad":false,"rowGroupings":[
	 	      {
	 	        "name":"id","hidden":false
	 	      },{
	 	        "name":"name","hidden":false
	 	      },{
	 	        "name":"price","hidden":false
	 	      },{
	 	        "name":"quantity","hidden":false
	 	      }
	 	    ],"uid":1422552626270,"editing":true,"sort":[
	 	      
	 	    ],"levelBreaks":[
	 	      
	 	    ],"editable":false
	 	  },"parameters":[
	 	    
	 	  ],"metadata":[
	 	    {
	 	      "name":"id","label":"id","visible":true,"summation":false,"extraInfo":{
	 	        "style":"alignLeft","format":{
	 	          "type":"text"
	 	        }
	 	      }
	 	    },{
	 	      "name":"name","label":"name","visible":true,"summation":false,"extraInfo":{
	 	        "style":"alignLeft","format":{
	 	          "type":"text"
	 	        }
	 	      }
	 	    },{
	 	      "name":"price","label":"price","visible":true,"summation":false,"extraInfo":{
	 	        "style":"alignRight","format":{
	 	          "type":"number"
	 	        }
	 	      }
	 	    },{
	 	      "name":"quantity","label":"quantity","visible":true,"summation":false,"extraInfo":{
	 	        "style":"alignRight","format":{
	 	          "type":"number"
	 	        }
	 	      }
	 	    }
	 	  ],"metadata2":{
	 	    "queries":[
	 	      {
	 	        "sql":"select aa.id as \"id\",aa.name as \"name\",aa.price as \"price\",aa.quantity as \"quantity\" from widgets AS aa group by aa.id,aa.name,aa.price,aa.quantity order by aa.id,aa.name,aa.price,aa.quantity","routes":[
	 	          "DatabaseRoute(base)"
	 	        ],"queryChain":[
	 	          "main"
	 	        ],"started":"2015-03-17 16:09:14.362"
	 	      }
	 	    ]
	 	  },"data":[
	 	    [
	 	      "123","asdf",12.95,4
	 	    ],[
	 	      "124","Thing B",15.3,4
	 	    ],[
	 	      "125","Thing C",19.34,9
	 	    ],[
	 	      "126","Thing D",34.34,11
	 	    ],[
	 	      "127","Thing E",23.12,2
	 	    ],[
	 	      "128","Thing F",12.12,4
	 	    ],[
	 	      "129","Thing G",1.12,3
	 	    ],[
	 	      "130","Thing H",23.2,2
	 	    ],[
	 	      "131","Thing I",0.33,8
	 	    ],[
	 	      "132","Thing J",34.23,3
	 	    ],[
	 	      "133","Thing K",33.22,5
	 	    ],[
	 	      "134","Thing L",2.24,6
	 	    ],[
	 	      "135","Thing M",3.13,4
	 	    ],[
	 	      "136","Thing N",34.3,5
	 	    ],[
	 	      "137","Thing O",3.99,13
	 	    ],[
	 	      "138","Thing P",55.34,41
	 	    ],[
	 	      "139","Thing Q",0.11,1
	 	    ],[
	 	      "140","Thing R",44.44,46
	 	    ],[
	 	      "141","Thing S",12.12,33
	 	    ],[
	 	      "142","Thing T",18.18,19
	 	    ],[
	 	      "143","Sort A",45.45,34
	 	    ]
	 	  ]
	 	},

		{
		  "editable":true,"context":{
		    "drilldowns":[
		      
		    ],"name":"Cubes","dataCols":[
		      
		    ],"viewType":"table","entries":10,"filters":[
		      {
		        "defaultVal":"","userDefined":true,"field":"NAME","filterType":"dropdown","hidden":false,"optional":false,"cube":"CUBE","required":false
		      }
		    ],"colGroupings":[
		      
		    ],"activeLink":false,"preventAutoLoad":false,"rowGroupings":[
		      {
		        "name":"ID","hidden":false
		      },{
		        "name":"NAME","hidden":false
		      },{
		        "name":"ROUTE","hidden":false
		      },{
		        "name":"TABLES","hidden":false
		      },{
		        "name":"KEYCOLUMNS","hidden":false
		      },{
		        "name":"EXTRACONFIG","hidden":false
		      },{
		        "name":"SYSTEM","hidden":false
		      },{
		        "name":"_action_validate","hidden":false
		      }
		    ],"extraContext":{
		      "preventContextOnClick":true
		    },"uid":1344364785575,"editing":false,"sort":[
		      
		    ],"levelBreaks":[
		      
		    ],"editable":true
		  },"parameters":[
		    
		  ],"metadata":[
		    {
		      "name":"ID","label":"ID","visible":true,"summation":false,"extraInfo":{
		        "style":"alignLeft","format":{
		          "type":"cube"
		        }
		      }
		    },{
		      "name":"NAME","label":"Name","visible":true,"summation":false,"extraInfo":{
		        "style":"alignLeft","format":{
		          "type":"text"
		        }
		      }
		    },{
		      "name":"ROUTE","label":"Route","visible":true,"summation":false,"extraInfo":{
		        "style":"alignLeft","format":{
		          "type":"text"
		        }
		      }
		    },{
		      "name":"TABLES","label":"Tables","visible":true,"summation":false,"extraInfo":{
		        "style":"alignLeft","format":{
		          "type":"text"
		        }
		      }
		    },{
		      "name":"KEYCOLUMNS","label":"Key Columns","visible":true,"summation":false,"extraInfo":{
		        "style":"alignLeft","format":{
		          "type":"text"
		        }
		      }
		    },{
		      "name":"EXTRACONFIG","label":"Extra Config","visible":true,"summation":false,"extraInfo":{
		        "style":"alignLeft","format":{
		          "type":"json"
		        }
		      }
		    },{
		      "name":"SYSTEM","label":"System","visible":true,"summation":false,"extraInfo":{
		        "style":"alignRight","format":{
		          "type":"yes_no"
		        }
		      }
		    },{
		      "name":"_action_validate","label":"","visible":true,"summation":false,"extraInfo":{
		        "style":null,"format":{
		          "type":"action"
		        }
		      }
		    }
		  ],"metadata2":{
		    "queries":[
		      {
		        "sql":"select aa.id as \"ID\",aa.name as \"NAME\",aa.route as \"ROUTE\",aa.tables as \"TABLES\",aa.keycolumns as \"KEYCOLUMNS\",aa.extraconfig as \"EXTRACONFIG\",aa.\"system\" as \"SYSTEM\",aa.id as \"_action_validate\" from \"cube\" AS aa group by aa.id,aa.name,aa.route,aa.tables,aa.keycolumns,aa.extraconfig,aa.\"system\",aa.id order by aa.id,aa.name,aa.route,aa.tables,aa.keycolumns,aa.extraconfig,aa.\"system\",aa.id","routes":[
		          "DatabaseRoute(base)"
		        ],"queryChain":[
		          "main"
		        ],"started":"2015-03-17 16:16:20.299"
		      }
		    ]
		  },"data":[
		    [
		      "AUDITLOG","Audit Log","base","AUDITLOG","","","Y","AUDITLOG"
		    ],[
		      "AUTHTOKEN","Authorization Tokens","base","AUTHTOKEN","UID","{\n  onInsert: {\n    CREATED: current_timestamp\n    LASTCHANGE: current_timestamp\n  }\n  onUpdate: {\n    LASTCHANGE: current_timestamp\n  }\n}","Y","AUTHTOKEN"
		    ],[
		      "CHANGELOG","Change Log","base","CHANGELOG","","","Y","CHANGELOG"
		    ],[
		      "CUBE","Cubes","base","CUBE","ID",null,"Y","CUBE"
		    ],[
		      "CUBEACTION","Cube Actions","base","CUBEACTION","CUBEID NAME","","Y","CUBEACTION"
		    ],[
		      "CUBEAUTH","Cube Authority","base","CUBEAUTH","USERGROUP CUBEID",null,"Y","CUBEAUTH"
		    ],[
		      "CUBEFIELD","Cube Fields","base","CUBEFIELD","CUBE NAME",null,"Y","CUBEFIELD"
		    ],[
		      "CUBEJOIN","Cube Joins","base","CUBEJOIN","FROMCUBE NAME",null,"Y","CUBEJOIN"
		    ],[
		      "DATABASE","Database Routes","base","DATABASE","ID","","Y","DATABASE"
		    ],[
		      "DATATYPE","Data Types","base","DATATYPE","NAME",null,"Y","DATATYPE"
		    ],[
		      "DATECRAZE","Datecraze","base","DATECRAZE","date","","y","DATECRAZE"
		    ],[
		      "EHBEXRL5","EHBEXRL5","base","EHBEXRL5","","{\n  \"cdlColumns\":{\n    \"location\":\"U1LOS\",\n    \"division\":\"U1DIV\",\n    \"company\":\"U1CMP\"\n  }\n}","Y","EHBEXRL5"
		    ],[
		      "EHUSER","Portal Users (EHUSER)","base","EHUSER","U0INTN","","Y","EHUSER"
		    ],[
		      "ESPCMP","Enterprise Companies (ESPCMP)","base","ESPCMP","ICCMP","{\n  \"cdlColumns\":{\n    \"company\":\"ICCMP\"\n  },\n  \"selectable\":false\n}","N","ESPCMP"
		    ],[
		      "ESPDBM","espdbm","base","ESPDBM","ebdbid","","Y","ESPDBM"
		    ],[
		      "ESPDECAT","Page Categories","base","ESPDECAT","dcuuid","","Y","ESPDECAT"
		    ],[
		      "ESPDEHELP","espdehelp","base","ESPDEHELP","dhseq","","Y","ESPDEHELP"
		    ],[
		      "ESPDELOG","Usage Log","base","ESPDELOG","","","Y","ESPDELOG"
		    ],[
		      "ESPDERUN","Run Subscription","base","ESPDERUN","UID","{ \"selectable\": false }","Y","ESPDERUN"
		    ],[
		      "ESPDESUB","Subscriptions","base","ESPDESUB","UID","{\n  \"selectable\":false\n}","Y","ESPDESUB"
		    ],[
		      "ESPDESUBLG","Subscription and Alert Log","base","ESPDESUBLG","UID",null,"Y","ESPDESUBLG"
		    ],[
		      "ESPDEYESNO","ESPDEYESNO","base","ESPDEYESNO","DYYESNO","","Y","ESPDEYESNO"
		    ],[
		      "ESPDIV","Enterprise Clients (ESPDIV)","base","ESPDIV","ECCMP ECDIV","{\n  \"cdlColumns\":{\n    \"division\":\"ECDIV\",\n    \"company\":\"ECCMP\"\n  },\n  \"selectable\": false\n}","N","ESPDIV"
		    ],[
		      "ESPISM","espism","base","ESPISM","eaisid","","N","ESPISM"
		    ],[
		      "ESPMDSAVV","Saved User Pages","base","ESPMDSAVV","ESIDCOL","{\n  \"applyCDL\":false,\n  \"selectable\":false\n}","Y","ESPMDSAVV"
		    ],[
		      "ESPSESSION","ESPSESSION","base","ESPSESSION","","","Y","ESPSESSION"
		    ],[
		      "ESPSQLH","SQL History","base","ESPSQLH","uid","","Y","ESPSQLH"
		    ],[
		      "ESPSQLS","SQL Saved Sessions","base","ESPSQLS","uid","","Y","ESPSQLS"
		    ],[
		      "EXPORT","Export Log","base","EXPORT","UID","{ \"selectable\": true }","Y","EXPORT"
		    ],[
		      "GROUPMBR","Group Members","base","GROUPMBR","USERGROUP MEMBER",null,"Y","GROUPMBR"
		    ],[
		      "KEYVALUE","Key Value Storage","base","KEYVALUE","ky","","Y","KEYVALUE"
		    ],[
		      "MASKING","Masking","base","MASKING","number","","Y","MASKING"
		    ],[
		      "MENU","Menu Table","base","MENU","ID","{ \"applyCDL\":false, \"selectable\": false }","Y","MENU"
		    ],[
		      "MENUAUTH","Menu Authorization","base","MENUAUTH","USERGROUP MENUID","{ \"applyCDL\":false, \"selectable\": false }","Y","MENUAUTH"
		    ],[
		      "USERGROUP","User Groups","base","USERGROUP","ID",null,"Y","USERGROUP"
		    ],[
		      "XXSESS","XX Sess","base","XXSESS","sssess","","Y","XXSESS"
		    ],[
		      "widgets","widgets","base","widgets","id","","N","widgets"
		    ]
		  ]
		},

		{
		  "editable":true,"context":{
		    "drilldowns":[
		      
		    ],"name":"Data Types","dataCols":[
		      
		    ],"viewType":"table","entries":10,"filters":[
		      {
		        "defaultVal":"","userDefined":true,"field":"NAME","filterType":"dropdown","hidden":false,"optional":false,"cube":"DATATYPE","required":false
		      }
		    ],"colGroupings":[
		      
		    ],"activeLink":false,"preventAutoLoad":false,"rowGroupings":[
		      {
		        "name":"NAME","hidden":false
		      },{
		        "name":"LABEL","hidden":false
		      },{
		        "name":"DEPENDSON","hidden":false
		      },{
		        "name":"EXTRACONFIG","hidden":false
		      },{
		        "name":"_action_validate","hidden":false
		      }
		    ],"uid":1344560531380,"editing":true,"sort":[
		      
		    ],"levelBreaks":[
		      
		    ],"editable":true
		  },"parameters":[
		    
		  ],"metadata":[
		    {
		      "name":"NAME","label":"NAME","visible":true,"summation":false,"extraInfo":{
		        "style":"alignLeft","format":{
		          "type":"text"
		        }
		      }
		    },{
		      "name":"LABEL","label":"LABEL","visible":true,"summation":false,"extraInfo":{
		        "style":"alignLeft","format":{
		          "type":"text"
		        }
		      }
		    },{
		      "name":"DEPENDSON","label":"DEPENDSON","visible":true,"summation":false,"extraInfo":{
		        "style":"alignLeft","format":{
		          "type":"text"
		        }
		      }
		    },{
		      "name":"EXTRACONFIG","label":"EXTRACONFIG","visible":true,"summation":false,"extraInfo":{
		        "style":"alignLeft","format":{
		          "type":"text"
		        }
		      }
		    },{
		      "name":"_action_validate","label":"","visible":true,"summation":false,"extraInfo":{
		        "style":null,"format":{
		          "type":"action"
		        }
		      }
		    }
		  ],"metadata2":{
		    "queries":[
		      {
		        "sql":"select aa.name as \"NAME\",aa.label as \"LABEL\",aa.dependson as \"DEPENDSON\",aa.extraconfig as \"EXTRACONFIG\",aa.name as \"_action_validate\" from datatype AS aa group by aa.name,aa.label,aa.dependson,aa.extraconfig,aa.name order by aa.name,aa.label,aa.dependson,aa.extraconfig,aa.name","routes":[
		          "DatabaseRoute(base)"
		        ],"queryChain":[
		          "main"
		        ],"started":"2015-03-17 16:16:20.193"
		      }
		    ]
		  },"data":[
		    [
		      "action","Action","","","action"
		    ],[
		      "cacheServerID","Cache Server ID","",null,"cacheServerID"
		    ],[
		      "carrier","Carrier","division","{\"demoMasking\":true}","carrier"
		    ],[
		      "category","Category","","","category"
		    ],[
		      "cdlEntity","Company/Client Entity","",null,"cdlEntity"
		    ],[
		      "cloudbi_client_id",null,null,"{\"masking\":\"clientLocation\"}","cloudbi_client_id"
		    ],[
		      "cloudbi_company","Company","","{\"masking\":\"clientLocation\"}","cloudbi_company"
		    ],[
		      "cloudbi_company_code","Company","","{\"masking\":\"clientLocation\"}","cloudbi_company_code"
		    ],[
		      "cloudbi_company_id","Company","","{\"masking\":\"clientLocation\"}","cloudbi_company_id"
		    ],[
		      "cloudbi_dia_code","Diagnosis","cloudbi_division_id",null,"cloudbi_dia_code"
		    ],[
		      "cloudbi_division","Client","cloudbi_company","{\"masking\":\"clientLocation\"}","cloudbi_division"
		    ],[
		      "cloudbi_division_id","Client","cloudbi_company_id","{\"masking\":\"clientLocation\"}","cloudbi_division_id"
		    ],[
		      "cloudbi_dr_code","Provider","cloudbi_division_id","{\"masking\":\"lastName\"}","cloudbi_dr_code"
		    ],[
		      "cloudbi_los_code","Location of Service","cloudbi_division_id","{\"masking\":\"location\"}","cloudbi_los_code"
		    ],[
		      "cloudbi_los_id","Location of Service","cloudbi_division_id","{\"masking\":\"location\"}","cloudbi_los_id"
		    ],[
		      "cloudbi_mod_code","Modifier","cloudbi_division_id","","cloudbi_mod_code"
		    ],[
		      "cloudbi_payer_code","Payer","cloudbi_division_id","{\"masking\":\"location\"}","cloudbi_payer_code"
		    ],[
		      "cloudbi_pos_code","Place of Service","cloudbi_division_id","{\"masking\":\"location\"}","cloudbi_pos_code"
		    ],[
		      "cloudbi_proc_code","Procedure","cloudbi_division_id",null,"cloudbi_proc_code"
		    ],[
		      "cloudbi_refdr_code","Referring Provider","cloudbi_division_id","{\"masking\":\"lastName\"}","cloudbi_refdr_code"
		    ],[
		      "company","Company","","{\"masking\":\"clientLocation\"}","company"
		    ],[
		      "cronExpression","Cron Expression","",null,"cronExpression"
		    ],[
		      "cube","Cube",null,null,"cube"
		    ],[
		      "currency","Currency","","{\"customExpression\":true}","currency"
		    ],[
		      "dataBook","DataBook","",null,"dataBook"
		    ],[
		      "database","Database","","","database"
		    ],[
		      "datatype","Data Type",null,null,"datatype"
		    ],[
		      "date","Date","","{\"reverseSortVerticalGrouping\":true}","date"
		    ],[
		      "division","Client","company","{\"masking\":\"clientLocation\"}","division"
		    ],[
		      "duration","Duration","","{\"customExpression\":true}","duration"
		    ],[
		      "eaxUserIntn","EAX User Internal ID","","","eaxUserIntn"
		    ],[
		      "group","Group/User","","","group"
		    ],[
		      "groupGroup","Group","",null,"groupGroup"
		    ],[
		      "groupUser","User","",null,"groupUser"
		    ],[
		      "html","HTML","","","html"
		    ],[
		      "javascript","Javascript","","","javascript"
		    ],[
		      "json","JSON","","","json"
		    ],[
		      "location","Location","division","{\"demoMasking\":true}","location"
		    ],[
		      "locationcostcenter","Location Cost Center","division","{\"demoMasking\":true}","locationcostcenter"
		    ],[
		      "locationfacility","Location Facility","division","{\"demoMasking\":true}","locationfacility"
		    ],[
		      "measure","Measure","",null,"measure"
		    ],[
		      "menu","Menu","",null,"menu"
		    ],[
		      "month","Month",null,null,"month"
		    ],[
		      "number","Number","","{\"customExpression\":true}","number"
		    ],[
		      "numberdec2","Number(Dec2)",null,"{\"customExpression\":true}","numberdec2"
		    ],[
		      "numeric","Numeric","","","numeric"
		    ],[
		      "patientFile","Patient File",null,null,"patientFile"
		    ],[
		      "patientNumber","Patient Number","",null,"patientNumber"
		    ],[
		      "payor","Payor","","{\"demoMasking\":true}","payor"
		    ],[
		      "payorType","Payor Type","company","{\"demoMasking\":true}","payorType"
		    ],[
		      "percent","Percent","","{\"customExpression\":true}","percent"
		    ],[
		      "period","Period","","{\"reverseSortVerticalGrouping\":true}","period"
		    ],[
		      "periodx","Period","","{\"reverseSortVerticalGrouping\":true}","periodx"
		    ],[
		      "practice","Practice Code","division","{\"demoMasking\":true}","practice"
		    ],[
		      "provider","Provider","division","{\"demoMasking\":true}","provider"
		    ],[
		      "queue","Queue","",null,"queue"
		    ],[
		      "queueType","Queue Type","",null,"queueType"
		    ],[
		      "sql","SQL","","","sql"
		    ],[
		      "text","Text",""," {\"customExpression\":true}","text"
		    ],[
		      "time","Time","","","time"
		    ],[
		      "timestamp","Timestamp","","","timestamp"
		    ],[
		      "transition","Transition","",null,"transition"
		    ],[
		      "valueType","Value Type","",null,"valueType"
		    ],[
		      "workflow","Workflow","",null,"workflow"
		    ],[
		      "workflowQueue","Workflow Queue","",null,"workflowQueue"
		    ],[
		      "yes_no","Yes/No","","","yes_no"
		    ]
		  ]
		}
	]}

	localStorage.setItem('data', JSON.stringify(data));
});


