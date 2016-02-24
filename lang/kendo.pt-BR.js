/*
* Kendo UI Localization Project for v2012.3.1114 
* Copyright 2012 Telerik AD. All rights reserved.
* 
* Brazilian Portuguese (pt-BR) Language Pack
*
* Project home  : https://github.com/loudenvier/kendo-global
* Kendo UI home : http://kendoui.com
* Author        : Felipe Machado (Loudenvier) 
*                 http://feliperochamachado.com.br/index_en.html
*
* This project is released to the public domain, although one must abide to the 
* licensing terms set forth by Telerik to use Kendo UI, as shown bellow.
*
* Telerik's original licensing terms:
* -----------------------------------
* Kendo UI Web commercial licenses may be obtained at
* https://www.kendoui.com/purchase/license-agreement/kendo-ui-web-commercial.aspx
* If you do not own a commercial license, this file shall be governed by the
* GNU General Public License (GPL) version 3.
* For GPL requirements, please review: http://www.gnu.org/copyleft/gpl.html
*/

(function (kendo) {
	
kendo.ui.Locale = "Português Brasileiro (pt-BR)";
if (kendo.ui.ColumnMenu)
  kendo.ui.ColumnMenu.prototype.options.messages = 
    $.extend(kendo.ui.ColumnMenu.prototype.options.messages, {
  
  /* COLUMN MENU MESSAGES 
   ****************************************************************************/   
    sortAscending: "Ascendente",
    sortDescending: "Descendente",
    filter: "Filtro",
    columns: "Colunas"
   /***************************************************************************/   
  });

if (kendo.ui.Groupable)
  kendo.ui.Groupable.prototype.options.messages = 
    $.extend(kendo.ui.Groupable.prototype.options.messages, {
  
  /* GRID GROUP PANEL MESSAGES 
   ****************************************************************************/   
    empty: "Arraste colunas aqui para agrupar pelas mesmas"
   /***************************************************************************/   
  });

if (kendo.ui.FilterMenu) {
  kendo.ui.FilterMenu.prototype.options.messages = 
    $.extend(kendo.ui.FilterMenu.prototype.options.messages, {
    
  /* FILTER MENU MESSAGES 
   ***************************************************************************/   
  	info: "Filtro:",        // sets the text on top of the filter menu
  	filter: "Filtrar",      // sets the text for the "Filter" button
  	clear: "Limpar",        // sets the text for the "Clear" button
  	// when filtering boolean numbers
  	isTrue: "É verdadeiro", // sets the text for "isTrue" radio button
  	isFalse: "É falso",     // sets the text for "isFalse" radio button
  	//changes the text of the "And" and "Or" of the filter menu
  	and: "E",
  	or: "Ou",
    selectValue: "Selecione um valor"
   /***************************************************************************/   
  });
         
  kendo.ui.FilterMenu.prototype.options.operators =           
    $.extend(kendo.ui.FilterMenu.prototype.options.operators, {
  
  /* FILTER MENU OPERATORS (for each supported data type) 
   ****************************************************************************/   
    string: {
        eq: "É igual",
        neq: "É diferente",
        startswith: "Começa com",
        contains: "Contém",
        doesnotcontain: "Não contém",
        endswith: "Termina com"
    },
    number: {
        eq: "É igual",
        neq: "É diferente",
        gte: "É maior que ou igual a",
        gt: "É maior que",
        lte: "É menor que ou igual a",
        lt: "É menor que"
    },
    date: {
        eq: "É igual",
        neq: "É diferente",
        gte: "É igual ou mais recente que",
        gt: "É mais recente que",
        lte: "É igual ou mais antigo que",
        lt: "É mais antigo que"
    },
    enums: {
        eq: "É igual",
        neq: "É diferente"
    }
   /***************************************************************************/   
  });
}

if (kendo.ui.Pager)
  kendo.ui.Pager.prototype.options.messages = 
    $.extend(kendo.ui.Pager.prototype.options.messages, {
    
  /* PAGER MESSAGES 
   ****************************************************************************/   
    display: "{0} - {1} de {2} itens",
    empty: "Nenhum item encontrado",
    page: "Página",
    of: "de {0}",
    itemsPerPage: "itens por página",
    first: "Primeira página",
    previous: "Página anterior",
    next: "Próxima página",
    last: "Última página",
    refresh: "Atualizar dados"
   /***************************************************************************/   
  });

if (kendo.ui.Validator)
  kendo.ui.Validator.prototype.options.messages = 
    $.extend(kendo.ui.Validator.prototype.options.messages, {
  
  /* VALIDATOR MESSAGES 
   ****************************************************************************/   
    required: "{0} é obrigatório",
    pattern: "{0} não é válido",
    min: "{0} deve ser maior que ou igual a {1}",
    max: "{0} deve ser menor que ou igual a {1}",
    step: "{0} não é válido",
    email: "{0} não é e-mail válido",
    url: "{0} não é URL válida",
    date: "{0} não é data válida"
   /***************************************************************************/   
  });

if (kendo.ui.ImageBrowser)
  kendo.ui.ImageBrowser.prototype.options.messages = 
    $.extend(kendo.ui.ImageBrowser.prototype.options.messages, {
  
  /* IMAGE BROWSER MESSAGES 
   ****************************************************************************/   
    uploadFile: "Enviar",
    orderBy: "Classificar por",
    orderByName: "Nome",
    orderBySize: "Tamanho",
    directoryNotFound: "Uma pasta com este nome não foi encontrada.",
    emptyFolder: "Pasta Vazia",
    deleteFile: 'Tem certeza que deseja excluir "{0}"?',
    invalidFileType: "O arquivo selecionado \"{0}\" não é válido. Os tipos de arquivo suportados são {1}.",
    overwriteFile: "Um arquivo com o nome \"{0}\" já existe na pasta atual. Você quer sobrescrevê-lo?",
    dropFilesHere: "Solte arquivos aqui para enviá-los"
   /***************************************************************************/   
  });

if (kendo.ui.Editor)
  kendo.ui.Editor.prototype.options.messages = 
    $.extend(kendo.ui.Editor.prototype.options.messages, {
  
  /* EDITOR MESSAGES 
   ****************************************************************************/   
    bold: "Negrito",
    italic: "Itálico",
    underline: "Sublinhado",
    strikethrough: "Tachado",
    superscript: "Sobrescrito",
    subscript: "Subscrito",
    justifyCenter: "Centralizar texto",
    justifyLeft: "Alinhar texto à esquerda",
    justifyRight: "Alinhar texto à direita",
    justifyFull: "Justificar",
    insertUnorderedList: "Inserir lista não ordenada",
    insertOrderedList: "Inserir lista ordenada",
    indent: "Aumentar recuo",
    outdent: "Diminuir recuo",
    createLink: "Inserir link",
    unlink: "Remover link",
    insertImage: "Inserir imagem",
    insertHtml: "Inserir HTML",
    fontName: "Selecionar fonte",
    fontNameInherit: "(fonte herdada)",
    fontSize: "Selecionar tamanho da fonte",
    fontSizeInherit: "(tamanho herdado)",
    formatBlock: "Formatar",
    foreColor: "Cor",
    backColor: "Cor de fundo",
    style: "Estilos",
    emptyFolder: "Pasta Vazia",
    uploadFile: "Enviar",
    orderBy: "Classificar por:",
    orderBySize: "Tamanho",
    orderByName: "Nome",
    invalidFileType: "O arquivo selecionado \"{0}\" não é válido. Os arquivos suportados são {1}.",
    deleteFile: 'Tem certeza que deseja excluir "{0}"?',
    overwriteFile: 'Um arquivo com o nome "{0}" já existe na pasta atual. Você quer sobrescrevê-lo?',
    directoryNotFound: "Uma pasta com este nome não foi encontrada.",
    imageWebAddress: "Endereço web",
    imageAltText: "Texto alternativo",
    dialogInsert: "Inserir",
    dialogButtonSeparator: "ou",
    dialogCancel: "Cancelar"
   /***************************************************************************/   
  });

kendo.cultures["pt-BR"] = {
        name: "pt-BR",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ".",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%", "n%"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["-$ n", "$ n"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                symbol: "R$"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"],
                    namesAbbr: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                    namesShort: ["D", "S", "T", "Q", "Q", "S", "S"]
                },
                months: {
                    names: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro", ""],
                    namesAbbr: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez", ""]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, d' de 'MMMM' de 'yyyy",
                    F: "dddd, d' de 'MMMM' de 'yyyy HH:mm:ss",
                    g: "dd/MM/yyyy HH:mm",
                    G: "dd/MM/yyyy HH:mm:ss",
                    m: "d' de 'MMMM",
                    M: "d' de 'MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM' de 'yyyy",
                    Y: "MMMM' de 'yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 0
            }
        }
    };

    kendo.culture("pt-BR");
    
})(window.kendo);
