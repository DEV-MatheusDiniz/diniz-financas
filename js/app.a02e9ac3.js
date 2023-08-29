(function(){"use strict";var t={8578:function(t,a,e){var r=e(144),o=e(998),s=e(2118),i=e(3059),n=function(){var t=this,a=t._self._c;return a(o.Z,[t.verifica_auth()?a("HeaderComp"):t._e(),a(i.Z,{staticClass:"background mt-2"},[a(s.Z,{attrs:{fluid:""}},[a("router-view")],1)],1),t.verifica_auth()?a("FooterComp"):t._e()],1)},l=[],c=(e(7658),e(6232)),d=e(4562),u=e(4324),m=e(3687),f=e(1023),p=function(){var t=this,a=t._self._c;return a(c.Z,{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("h2",[t._v("Diniz Finanças")])]),a(m.Z),a(d.Z,{attrs:{text:"",to:"financas"}},[t._v(" Finanças ")]),a(d.Z,{attrs:{text:"",to:"lembretes"}},[t._v(" Lembretes ")]),a(m.Z),a("div",{staticClass:"d-flex align-center"},[a("div",{staticClass:"mx-2"},[a(u.Z,[t._v("mdi-account")])],1),a(f.Z,{staticClass:"mt-5 mx-2",attrs:{color:"botao_1",inset:"",label:"Alterar tema","persistent-hint":""},model:{value:t.$vuetify.theme.dark,callback:function(a){t.$set(t.$vuetify.theme,"dark",a)},expression:"$vuetify.theme.dark"}}),a(u.Z,{on:{click:function(a){return t.logout()}}},[t._v("mdi-logout")])],1)],1)},v=[],_={name:"HeaderComp",methods:{logout(){localStorage.removeItem("access"),localStorage.removeItem("refresh"),this.$router.push("/")}}},h=_,g=e(1001),b=(0,g.Z)(h,p,v,!1,null,null,null),Z=b.exports,x=e(4145),y=e(4886),k=e(8271),C=function(){var t=this,a=t._self._c;return a(k.Z,{attrs:{dark:"",padless:""}},[a(x.Z,{staticClass:"flex white--text",attrs:{flat:"",tile:""}},[a(y.EB,{staticClass:"footer"},[t._v(" v2.0.0 "),a(m.Z),a("span",[t._v("©2023 - "),a("strong",[t._v("DEV-MatheusDiniz")])]),a(m.Z),a(d.Z,{staticClass:"mx-1",attrs:{href:"https://www.linkedin.com/in/matheus-diniz-941935187/",target:"_blank",dark:"",icon:""}},[a(u.Z,{attrs:{size:"24px"}},[t._v("mdi-linkedin")])],1),a(d.Z,{staticClass:"mx-1",attrs:{href:"https://github.com/DEV-MatheusDiniz",target:"_blank",dark:"",icon:""}},[a(u.Z,{attrs:{size:"24px"}},[t._v("mdi-github")])],1)],1)],1)],1)},A=[],S={name:"FooterComp",data:()=>({icons:["mdi-linkedin","mdi-github"]})},w=S,$=(0,g.Z)(w,C,A,!1,null,null,null),E=$.exports;function I(){const t=localStorage.getItem("access"),a=localStorage.getItem("refresh");return null!==t&&null!==a}var P=I,M={name:"App",components:{HeaderComp:Z,FooterComp:E},methods:{verifica_auth(){return"/"!==this.$route.path&&(!!P()||void this.$router.push("/"))}}},R=M,T=(0,g.Z)(R,n,l,!1,null,null,null),z=T.exports,O=e(8345),V=e(7359),D=e(266),N=e(720),L=e(5125),B=e(1713),j=e(7808),F=e(7280),q=e(352),G=function(){var t=this,a=t._self._c;return a(o.Z,{attrs:{id:"inspire"}},[a(N.Z,[a(s.Z,{staticClass:"fill-height background",attrs:{fluid:""}},[a(B.Z,{attrs:{align:"center",justify:"center"}},[a(D.Z,{attrs:{cols:"12",sm:"8",md:"8"}},[a(x.Z,{staticClass:"elevation-12 rounded-lg"},[a(F.Z,{model:{value:t.step,callback:function(a){t.step=a},expression:"step"}},[a(q.Z,{attrs:{value:1}},[a(B.Z,[a(D.Z,{attrs:{cols:"12",md:"8"}},[a(y.ZB,{staticClass:"mt-12"},[a("h1",{staticClass:"text-center display-2 primary--text"},[t._v("ENTRAR")]),a("h4",{staticClass:"text-center mt-4"},[t._v("Preencha o formulário para entrar")]),"error"===t.status_login["status"]?a(V.Z,{attrs:{type:"error"}},[t._v(" "+t._s(t.status_login["msg"])+" ")]):t._e(),a(L.Z,{ref:"form_login"},[a(j.Z,{attrs:{rules:[()=>!!t.form_login.username||"Insira seu usuario"],label:"Usuario","prepend-icon":"mdi-account",type:"text",color:"primary"},model:{value:t.form_login.username,callback:function(a){t.$set(t.form_login,"username","string"===typeof a?a.trim():a)},expression:"form_login.username"}}),a(j.Z,{attrs:{rules:[()=>!!t.form_login.password||"Insira sua senha"],id:"password",label:"Senha","prepend-icon":"mdi-lock",type:"password",color:"primary"},model:{value:t.form_login.password,callback:function(a){t.$set(t.form_login,"password","string"===typeof a?a.trim():a)},expression:"form_login.password"}})],1)],1),a("div",{staticClass:"text-center mt-3 mb-3"},[a(d.Z,{attrs:{"rounded-lg":"",color:"primary",dark:""},on:{click:function(a){return t.login()}}},[t._v("ENTRAR")])],1)],1),a(D.Z,{staticClass:"primary",attrs:{cols:"12",md:"4"}},[a(f.Z,{staticClass:"mt-5 mx-2",attrs:{color:"botao_1",inset:"",label:"Alterar tema","persistent-hint":""},model:{value:t.$vuetify.theme.dark,callback:function(a){t.$set(t.$vuetify.theme,"dark",a)},expression:"$vuetify.theme.dark"}}),a(y.ZB,{staticClass:"white--text mt-12"},[a("h1",{staticClass:"text-center display-1"},[t._v("DINIZ FINANÇAS")]),a("h5",{staticClass:"text-center"},[t._v("Ainda não tem cadastro? Venha fazer parte")])]),a("div",{staticClass:"text-center mb-3"},[a(d.Z,{attrs:{"rounded-lg":"",outlined:"",dark:""},on:{click:function(a){t.step++}}},[t._v("Fazer Cadastro")])],1)],1)],1)],1),a(q.Z,{attrs:{value:2}},[a(B.Z,{staticClass:"fill-height"},[a(D.Z,{staticClass:"primary",attrs:{cols:"12",md:"4"}},[a(f.Z,{staticClass:"mt-5 mx-2",attrs:{color:"botao_1",inset:"",label:"Alterar tema","persistent-hint":""},model:{value:t.$vuetify.theme.dark,callback:function(a){t.$set(t.$vuetify.theme,"dark",a)},expression:"$vuetify.theme.dark"}}),a(y.ZB,{staticClass:"white--text mt-12"},[a("h1",{staticClass:"text-center display-1"},[t._v("DINIZ FINANÇAS")]),a("h5",{staticClass:"text-center"},[t._v("Já é cadastrado? clique no botão abaixo")])]),a("div",{staticClass:"text-center"},[a(d.Z,{attrs:{"rounded-lg":"",outlined:"",dark:""},on:{click:function(a){t.step--}}},[t._v("Fazer Login")])],1)],1),a(D.Z,{attrs:{cols:"12",md:"8"}},[a(y.ZB,{staticClass:"mt-12"},[a("h1",{staticClass:"text-center display-2 primary--text"},[t._v("CADASTRAR")]),a("h4",{staticClass:"text-center mt-4"},[t._v("Preencha o formulário de cadastro")]),"error"===t.status_cadastro["status"]?a(V.Z,{attrs:{type:"error"}},[t._v(" "+t._s(t.status_cadastro["msg"])+" ")]):t._e(),"ok"===t.status_cadastro["status"]?a(V.Z,{attrs:{type:"success"}},[t._v(" "+t._s(t.status_cadastro["msg"])+" ")]):t._e(),a(L.Z,{ref:"form_cadastro"},[a(j.Z,{attrs:{rules:[()=>!!t.form_cadastro.usuario||"O usuario é obrigatório"],label:"Usuario","prepend-icon":"mdi-account",type:"text",color:"primary"},model:{value:t.form_cadastro.usuario,callback:function(a){t.$set(t.form_cadastro,"usuario","string"===typeof a?a.trim():a)},expression:"form_cadastro.usuario"}}),a(j.Z,{attrs:{rules:[()=>!!t.form_cadastro.email||"O e-mail é obrigatório"],label:"E-mail","prepend-icon":"mdi-email",type:"email",color:"primary"},model:{value:t.form_cadastro.email,callback:function(a){t.$set(t.form_cadastro,"email","string"===typeof a?a.trim():a)},expression:"form_cadastro.email"}}),a(j.Z,{attrs:{rules:[()=>!!t.form_cadastro.senha1||"A senha é obrigatória"],id:"password1",label:"Senha","prepend-icon":"mdi-lock",type:"password",color:"primary"},model:{value:t.form_cadastro.senha1,callback:function(a){t.$set(t.form_cadastro,"senha1","string"===typeof a?a.trim():a)},expression:"form_cadastro.senha1"}}),a(j.Z,{attrs:{rules:[()=>!!t.form_cadastro.senha2||"A senha é obrigatória",()=>t.form_cadastro.senha1==t.form_cadastro.senha2||"As senhas devem ser iguais"],id:"password2",label:"Senha","prepend-icon":"mdi-lock",type:"password",color:"primary"},model:{value:t.form_cadastro.senha2,callback:function(a){t.$set(t.form_cadastro,"senha2","string"===typeof a?a.trim():a)},expression:"form_cadastro.senha2"}})],1)],1),a("div",{staticClass:"text-center mt-n5 mb-3"},[a(d.Z,{attrs:{"rounded-lg":"",color:"primary",dark:""},on:{click:function(a){return t.cadastro()}}},[t._v("CADASTRAR")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},Q=[],U=e(629),H={name:"AuthView",data:()=>({step:1,form_login:{},form_cadastro:{},status_login:{status:"null"},status_cadastro:{status:"null"}}),props:{source:String},methods:{...(0,U.nv)(["AuthLoginAction","AuthCadastroAction"]),...(0,U.Se)(["getResponseCadastro"]),async login(){this.$refs.form_login.validate()&&(await this.AuthLoginAction(this.form_login),P()?this.$router.push("financas"):this.status_login={status:"error",msg:"Usuario ou senha incorretos"})},async cadastro(){this.$refs.form_cadastro.validate()&&(await this.AuthCadastroAction(this.form_cadastro),this.status_cadastro=this.getResponseCadastro())}}},X=H,J=(0,g.Z)(X,G,Q,!1,null,null,null),K=J.exports,W=function(){var t=this,a=t._self._c;return a("div",[a("MenuComp"),a("br"),a(B.Z,[a(D.Z,[a("EntradaComp")],1),a(D.Z,[a("SaidaComp")],1)],1)],1)},Y=[],tt=function(){var t=this,a=t._self._c;return a("TabelaComp",{attrs:{tituloCard:"Saída",items:t.getItemsSaida(),headers:t.headers}})},at=[],et=e(4127),rt=e(2374),ot=e(9930),st=e(1087),it=e(1783),nt=function(){var t=this,a=t._self._c;return a(x.Z,{staticClass:"rounded-lg"},[a(y.EB,[t._v(" "+t._s(t.tituloCard)+" "),a(m.Z),a(j.Z,{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1),a(rt.Z,{staticClass:"elevation-1",attrs:{height:"100%",headers:t.headers,items:t.items,search:t.search,"footer-props":{"items-per-page-options":[50,100,-1]},sortBy:"divida.descricao"},scopedSlots:t._u([{key:"item.id",fn:function({item:e}){return[a("span",{class:{"botao_1--text":"Pago!"===e.status_pago||"Recebido!"===e.status_pago}},[t._v(" "+t._s(e.id)+" ")])]}},{key:"item.divida.descricao",fn:function({item:e}){return[a("span",{class:{"botao_1--text":"Pago!"===e.status_pago||"Recebido!"===e.status_pago}},[t._v(" "+t._s(e.divida.descricao)+" ")])]}},{key:"item.valor_parcela",fn:function({item:e}){return[a("span",{class:{"botao_1--text":"Pago!"===e.status_pago||"Recebido!"===e.status_pago}},[t._v(" "+t._s(e.valor_parcela)+" ")])]}},{key:"item.divida.num_parcelas",fn:function({item:e}){return[a("span",{class:{"botao_1--text":"Pago!"===e.status_pago||"Recebido!"===e.status_pago}},[t._v(" "+t._s(e.divida.num_parcelas)+" ")])]}},{key:"item.status_pago",fn:function({item:e}){return[a(et.Z,{attrs:{color:"Pago!"===e.status_pago||"Recebido!"===e.status_pago?"botao_1 white--text white--text":"botao_2 white--text"},on:{click:function(a){return t.atualizarStatusAction(e)}}},[t._v(" "+t._s(e.status_pago)+" ")])]}},{key:"item.actions",fn:function({item:e}){return[a(ot.Z,{attrs:{transition:"dialog-top-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function({on:r,attrs:o}){return[a(u.Z,t._g(t._b({staticClass:"mr-1",attrs:{small:"",color:"botao_1"},on:{click:function(a){return t.formatar_form(e)}}},"v-icon",o,!1),r),[t._v(" mdi-pencil ")])]}},{key:"default",fn:function(e){return[a(x.Z,{staticClass:"rounded-lg"},[a(it.Z,{staticClass:"rounded-lg",attrs:{dark:"",color:"primary"}},[t._v(" Atualizar::"+t._s(t.form.divida.id)+" ")]),a("br"),a(y.ZB,[a(L.Z,{ref:"form"},[a(j.Z,{attrs:{counter:100,label:"Descrição",rules:[()=>!!t.form.divida.descricao||"A descrição é obrigatória",()=>t.form.divida.descricao.length<=100||"A descrição deve conter no máximo 100 caracteres"],required:""},model:{value:t.form.divida.descricao,callback:function(a){t.$set(t.form.divida,"descricao",a)},expression:"form.divida.descricao"}}),a(j.Z,{attrs:{type:"month",label:"Data",value:t.formata_data(t.form.data),rules:[t=>!!t||"A data é obrigatória"],disabled:""}}),a(st.Z,{attrs:{items:t.tipos,label:"Tipo",rules:[t=>!!t||"O tipo é obrigatório"],required:""},model:{value:t.form.divida.tipo,callback:function(a){t.$set(t.form.divida,"tipo",a)},expression:"form.divida.tipo"}}),a("v-currency-field",t._b({attrs:{type:"number",label:"Valor Parcela",rules:[t=>!!t||"O valor da parcela é obrigatório"],"error-messages":t.errors.price,required:""},model:{value:t.form["valor_parcela"],callback:function(a){t.$set(t.form,"valor_parcela",a)},expression:"form['valor_parcela']"}},"v-currency-field",t.currency_config,!1)),a(j.Z,{attrs:{type:"number",label:"Quantidade de Parcelas",rules:[t=>!!t||"A quantidade de parcelas é obrigatória",t=>t>0||"O numeros de parcelas deve ser maior do que 0"],disabled:""},model:{value:t.form["divida"]["num_parcelas"],callback:function(a){t.$set(t.form["divida"],"num_parcelas",a)},expression:"form['divida']['num_parcelas']"}})],1)],1),a(y.h7,{staticClass:"justify-end"},[a(d.Z,{attrs:{text:""},on:{click:function(t){e.value=!1}}},[t._v(" Cancelar ")]),a(d.Z,{attrs:{text:""},on:{click:function(a){return t.atualizar(e)}}},[t._v(" Atualizar ")])],1)],1)]}}],null,!0)}),a(ot.Z,{attrs:{transition:"dialog-top-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:r}){return[a(u.Z,t._g(t._b({attrs:{small:"",color:"botao_1"}},"v-icon",r,!1),e),[t._v(" mdi-delete ")])]}},{key:"default",fn:function(r){return[a(x.Z,{staticClass:"rounded-lg"},[a(it.Z,{staticClass:"rounded-lg",attrs:{dark:"",color:"primary"}},[t._v(" Remover::"+t._s(e.divida.id)+" ")]),a(y.ZB,{staticClass:"mt-10"},[a("h1",[t._v(" Tem certeza que deseja remover? ")]),a("br"),e.divida.num_parcelas>1?a("h2",[t._v(" Obs.: Será removido as "+t._s(e.divida.num_parcelas)+" parcelas da "+t._s(e.divida.tipo)+" de código "+t._s(e.id)+" ")]):t._e()]),a(y.h7,{staticClass:"justify-end"},[a(d.Z,{attrs:{text:""},on:{click:function(t){r.value=!1}}},[t._v(" Cancelar ")]),a(d.Z,{attrs:{text:""},on:{click:function(a){r.value=!1,t.removerAction(e)}}},[t._v(" Remover ")])],1)],1)]}}],null,!0)})]}}],null,!0)})],1)},lt=[],ct={name:"TabelaComp",data:()=>({search:"",form:{},tipos:["entrada","saida"],teste:0,errors:{},currency_config:{decimal:",",thousands:".",prefix:"R$ ",suffix:" #",precision:2,masked:!1,allowBlank:!1,min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER}}),props:{tituloCard:String,items:Array,headers:Array},methods:{...(0,U.nv)(["removerAction","atualizarAction","atualizarStatusAction"]),atualizar(t){this.$refs.form.validate()&&(this.atualizarAction(this.form),t.value=!1)},formata_data(t){const a=t.slice(6)+"-"+t.slice(3,5);return a},formatar_form(t){this.form={id:t["id"],data:t["data"],valor_parcela:t["valor_parcela"].slice(3).replace(".","").replace(",","."),divida:t["divida"]}}}},dt=ct,ut=(0,g.Z)(dt,nt,lt,!1,null,null,null),mt=ut.exports,ft={name:"SaidaComp",components:{TabelaComp:mt},data:()=>({headers:[{text:"Código",value:"id"},{text:"Descrição",value:"divida.descricao"},{text:"Valor Parcela",value:"valor_parcela"},{text:"Quantidade de Parcelas",value:"divida.num_parcelas"},{text:"Status",value:"status_pago"},{text:"Açôes",value:"actions"}]}),methods:{...(0,U.Se)(["getItemsSaida"])}},pt=ft,vt=(0,g.Z)(pt,tt,at,!1,null,null,null),_t=vt.exports,ht=function(){var t=this,a=t._self._c;return a("TabelaComp",{attrs:{tituloCard:"Entrada",items:t.getItemsEntrada(),headers:t.headers}})},gt=[],bt={name:"EntradaComp",components:{TabelaComp:mt},data:()=>({headers:[{text:"Código",value:"id"},{text:"Descrição",value:"divida.descricao"},{text:"Valor Parcela",value:"valor_parcela"},{text:"Quantidade de Parcelas",value:"divida.num_parcelas"},{text:"Status",value:"status_pago"},{text:"Açôes",value:"actions"}]}),methods:{...(0,U.Se)(["getItemsEntrada"])}},Zt=bt,xt=(0,g.Z)(Zt,ht,gt,!1,null,null,null),yt=xt.exports,kt=e(1030),Ct=e(4528),At=function(){var t=this,a=t._self._c;return a("div",[a(x.Z,{staticClass:"rounded-lg"},[a(y.EB,[t._v(" Menu "),a(m.Z),a(Ct.Z,{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","max-width":"90%","min-width":"auto"},on:{"update:returnValue":function(a){t.date=a},"update:return-value":function(a){t.date=a}},scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:r}){return[a(j.Z,t._g(t._b({attrs:{color:"botao_1","append-icon":"mdi-filter",readonly:""},model:{value:t.date,callback:function(a){t.date=a},expression:"date"}},"v-text-field",r,!1),e))]}}]),model:{value:t.menu,callback:function(a){t.menu=a},expression:"menu"}},[a(kt.Z,{attrs:{color:"botao_2",type:"month","no-title":"",scrollable:"",locale:"pt-br"},model:{value:t.date,callback:function(a){t.date=a},expression:"date"}},[a(m.Z),a(d.Z,{attrs:{text:"",color:"black"},on:{click:function(a){t.menu=!1}}},[t._v(" Cancelar ")]),a(d.Z,{attrs:{text:"",color:"black"},on:{click:function(a){return t.$refs.menu.save(t.date)}}},[t._v(" OK ")])],1)],1),a(m.Z),a(ot.Z,{attrs:{transition:"dialog-top-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:r}){return[a(d.Z,t._g(t._b({staticClass:"rounded-lg",attrs:{color:"botao_1",dark:""}},"v-btn",r,!1),e),[t._v(" Adicionar Entrada/Saida ")])]}},{key:"default",fn:function(e){return[a(x.Z,{staticClass:"rounded-lg"},[a(it.Z,{staticClass:"rounded-lg",attrs:{dark:"",color:"primary"}},[t._v(" Adicionar ")]),a(y.ZB,[a(L.Z,{ref:"form"},[a(j.Z,{attrs:{counter:t.maximo_caracteres,maxlength:t.maximo_caracteres,label:"Descrição",rules:[()=>!!t.form.descricao||"A descrição é obrigatória",()=>t.form.descricao.length<=100||"A descrição deve conter no máximo 100 caracteres"],required:""},model:{value:t.form.descricao,callback:function(a){t.$set(t.form,"descricao","string"===typeof a?a.trim():a)},expression:"form.descricao"}}),a(j.Z,{attrs:{type:"month",label:"Data",rules:[t=>!!t||"A data é obrigatória"],required:""},model:{value:t.form.data,callback:function(a){t.$set(t.form,"data","string"===typeof a?a.trim():a)},expression:"form.data"}}),a(st.Z,{attrs:{items:t.tipos,label:"Tipo",rules:[t=>!!t||"O tipo é obrigatório"],required:""},model:{value:t.form.tipo,callback:function(a){t.$set(t.form,"tipo","string"===typeof a?a.trim():a)},expression:"form.tipo"}}),a("v-currency-field",t._b({attrs:{type:"number",label:"Valor Total",rules:[t=>!!t||"O valor total é obrigatório"],"error-messages":t.errors.price,required:""},model:{value:t.form.valor_total,callback:function(a){t.$set(t.form,"valor_total","string"===typeof a?a.trim():a)},expression:"form.valor_total"}},"v-currency-field",t.currency_config,!1)),a(j.Z,{attrs:{type:"number",label:"Quantidade de Parcelas",rules:[t=>!!t||"A quantidade de parcelas é obrigatória",t=>t>0||"O numeros de parcelas deve ser maior do que 0"],required:""},model:{value:t.form.num_parcelas,callback:function(a){t.$set(t.form,"num_parcelas","string"===typeof a?a.trim():a)},expression:"form.num_parcelas"}})],1)],1),a(y.h7,{staticClass:"justify-end"},[a(d.Z,{attrs:{text:""},on:{click:function(t){e.value=!1}}},[t._v(" Cancelar ")]),a(d.Z,{attrs:{text:""},on:{click:function(a){return t.salvar(e)}}},[t._v(" Salvar ")])],1)],1)]}}])})],1)],1),a("br"),a("PainelValoresComp")],1)},St=[],wt=e(9223),$t=e(7953),Et=function(){var t=this,a=t._self._c;return a(B.Z,[a(D.Z,[a(it.Z,{staticClass:"rounded-lg",attrs:{color:"secondary"}},[a($t.lj,[a(d.Z,{staticClass:"white--text",attrs:{text:""}},[a("b",[t._v("Entrada")])]),a(wt.Z,{attrs:{vertical:""}}),a(d.Z,{staticClass:"white--text",attrs:{text:""}},[t._v(" "+t._s(t.getValores()["entrada"])+" ")])],1)],1)],1),a(D.Z,[a(it.Z,{staticClass:"rounded-lg",attrs:{color:"secondary"}},[a($t.lj,[a(d.Z,{staticClass:"white--text",attrs:{text:""}},[a("b",[t._v("Saída")])]),a(wt.Z,{attrs:{vertical:""}}),a(d.Z,{staticClass:"white--text",attrs:{text:""}},[t._v(" "+t._s(t.getValores()["saida"])+" ")])],1)],1)],1),a(D.Z,[a(it.Z,{staticClass:"rounded-lg",attrs:{color:"secondary"}},[a($t.lj,[a(d.Z,{staticClass:"white--text",attrs:{text:""}},[a("b",[t._v("Saldo (Atual)")])]),a(wt.Z,{attrs:{vertical:""}}),a(d.Z,{staticClass:"white--text",attrs:{text:""}},[t._v(" "+t._s(t.getValores()["saldo_atual"])+" ")])],1)],1)],1),a(D.Z,[a(it.Z,{staticClass:"rounded-lg",attrs:{color:"secondary"}},[a($t.lj,[a(d.Z,{staticClass:"white--text",attrs:{text:""}},[a("b",[t._v("Saldo (Previsão)")])]),a(wt.Z,{attrs:{vertical:""}}),a(d.Z,{staticClass:"white--text",attrs:{text:""}},[t._v(" "+t._s(t.getValores()["saldo_previsao"])+" ")])],1)],1)],1)],1)},It=[],Pt={name:"PainelValoresComp",methods:{...(0,U.nv)(["painelValoresAction"]),...(0,U.Se)(["getValores","getDateState","getItemsEntrada","getItemsSaida"])},data:()=>({}),computed:{entrada(){return this.getItemsEntrada()},saida(){return this.getItemsSaida()}},mounted(){this.painelValoresAction(this.getDateState())},watch:{entrada:function(){this.painelValoresAction(this.getDateState())},saida:function(){this.painelValoresAction(this.getDateState())}}},Mt=Pt,Rt=(0,g.Z)(Mt,Et,It,!1,null,null,null),Tt=Rt.exports,zt={components:{PainelValoresComp:Tt},data:()=>({menu:!1,dialog:!1,date:(new Date).toISOString().substr(0,7),tipos:["entrada","saida"],form:{descricao:"",data:(new Date).toISOString().substr(0,7),num_parcelas:1},maximo_caracteres:100,errors:{},currency_config:{decimal:",",thousands:".",prefix:"R$ ",suffix:"",precision:2,masked:!1,allowBlank:!1,min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER}}),methods:{...(0,U.nv)(["dividasAnoMesAction","adicionarAction"]),salvar(t){this.$refs.form.validate()&&(this.adicionarAction(this.form),this.form={descricao:"",data:(new Date).toISOString().substr(0,7),num_parcelas:1},t.value=!1)}},mounted(){this.dividasAnoMesAction(this.date),this.$store.state.date_state=this.date},watch:{date:function(){this.dividasAnoMesAction(this.date),this.$store.state.date_state=this.date}}},Ot=zt,Vt=(0,g.Z)(Ot,At,St,!1,null,null,null),Dt=Vt.exports,Nt={name:"FinancaView",components:{SaidaComp:_t,EntradaComp:yt,MenuComp:Dt}},Lt=Nt,Bt=(0,g.Z)(Lt,W,Y,!1,null,null,null),jt=Bt.exports,Ft=function(){var t=this,a=t._self._c;return a(x.Z,{staticClass:"rounded-lg"},[a(y.EB,[t._v(" Lembretes "),a(m.Z),a(j.Z,{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}}),a(m.Z),a("NovoLembrete",{on:{"form-submit":t.add_lembrete}})],1),a(rt.Z,{staticClass:"elevation-1 rounded-lg",attrs:{headers:t.headers,items:t.lembretes,search:t.search,"footer-props":{"items-per-page-options":[50,100,-1]},"sort-by":"titulo"},scopedSlots:t._u([{key:"item.actions",fn:function({item:e}){return[a("RemoverLembrete",{attrs:{id:e.id},on:{"form-submit":t.remover_lembrete}}),a("AtualizarLembrete",{attrs:{lembrete:e}})]}},{key:"no-data",fn:function(){return[t._v(" Nenhum Lembrete Cadastrado! ")]},proxy:!0}],null,!0)})],1)},qt=[],Gt=function(){var t=this,a=t._self._c;return a(ot.Z,{attrs:{persistent:"",transition:"dialog-top-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:r}){return[a(d.Z,t._g(t._b({staticClass:"rounded-lg",attrs:{color:"botao_1",dark:""}},"v-btn",r,!1),e),[t._v("NOVO LEMBRETE")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[a(x.Z,{staticClass:"rounded-lg"},[a(it.Z,{staticClass:"rounded-lg",attrs:{dark:"",color:"primary"}},[t._v(" Novo Lembrete ")]),a("br"),a(y.ZB,[a(L.Z,{ref:"form"},[a(j.Z,{attrs:{label:"Titulo",rules:[t.rules.obrigatorio],counter:t.maximo_caracteres,maxlength:t.maximo_caracteres},model:{value:t.form.titulo,callback:function(a){t.$set(t.form,"titulo",a)},expression:"form.titulo"}}),a(j.Z,{attrs:{label:"Descrição",rules:[t.rules.obrigatorio],counter:t.maximo_caracteres,maxlength:t.maximo_caracteres},model:{value:t.form.descricao,callback:function(a){t.$set(t.form,"descricao",a)},expression:"form.descricao"}})],1)],1),a(y.h7,{staticClass:"justify-end"},[a(d.Z,{attrs:{text:""},on:{click:function(a){t.dialog=!1}}},[t._v(" Cancelar ")]),a(d.Z,{attrs:{text:""},on:{click:function(a){return t.salvar(t.form)}}},[t._v(" Salvar ")])],1)],1)],1)},Qt=[],Ut=e(6154);const Ht=Ut.Z.create({baseURL:"https://diniz.pythonanywhere.com/"});var Xt=Ht;function Jt(){var t=localStorage.getItem("access");while(null===t)t=localStorage.getItem("access");const a={Authorization:`Bearer ${t}`};return a}var Kt=Jt,Wt={name:"NovoLembrete",data:()=>({dialog:!1,formTitle:"Novo Lembrete",form:{},maximo_caracteres:100,rules:{obrigatorio:t=>!!t||"Este campo é obrigatório"}}),methods:{salvar(t){if(this.$refs.form.validate()){const a=Kt();Xt.post("lembretes/",t,{headers:a}).then((t=>{this.$emit("form-submit",t.data.data[0])})).catch((t=>{console.log(t)})).finally((()=>{this.dialog=!1,this.form={}}))}}}},Yt=Wt,ta=(0,g.Z)(Yt,Gt,Qt,!1,null,null,null),aa=ta.exports,ea=function(){var t=this,a=t._self._c;return a(ot.Z,{attrs:{persistent:"",transition:"dialog-top-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:r}){return[a(u.Z,t._g(t._b({staticClass:"mr-1",attrs:{color:"botao_1",dark:"",small:""}},"v-icon",r,!1),e),[t._v("mdi-delete")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[a(x.Z,{staticClass:"rounded-lg"},[a(it.Z,{staticClass:"rounded-lg",attrs:{dark:"",color:"primary"}},[t._v(" Remover::"+t._s(t.id)+" ")]),a("br"),a(y.ZB,[a("h1",[t._v("Tem certeza que deseja remover?")])]),a(y.h7,{staticClass:"justify-end"},[a(d.Z,{attrs:{text:""},on:{click:function(a){t.dialog=!1}}},[t._v(" Cancelar ")]),a(d.Z,{attrs:{text:""},on:{click:function(a){return t.remover()}}},[t._v(" Remover ")])],1)],1)],1)},ra=[],oa={name:"RemoverLembrete",props:{id:Number},data:()=>({dialog:!1,formTitle:"Novo Lembrete",form:{},maximo_caracteres:100,rules:{obrigatorio:t=>!!t||"Este campo é obrigatório"}}),methods:{remover(){const t=Kt();Xt.delete(`lembretes/${this.id}`,{headers:t}).then((()=>{this.$emit("form-submit",this.id)})).catch((t=>{console.log(t)})).finally((()=>{this.dialog=!1,this.form={}}))}}},sa=oa,ia=(0,g.Z)(sa,ea,ra,!1,null,null,null),na=ia.exports,la=function(){var t=this,a=t._self._c;return a(ot.Z,{attrs:{persistent:"",transition:"dialog-top-transition","max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function({on:e,attrs:r}){return[a(u.Z,t._g(t._b({staticClass:"mr-1",attrs:{color:"botao_1",small:""},on:{click:function(a){return t.set_form(t.lembrete)}}},"v-icon",r,!1),e),[t._v("mdi-pencil")])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[a(x.Z,{staticClass:"rounded-lg"},[a(it.Z,{staticClass:"rounded-lg",attrs:{dark:"",color:"primary"}},[t._v(" Atualizar::"+t._s(t.form.id)+" ")]),a("br"),a(y.ZB,[a(L.Z,{ref:"form"},[a(j.Z,{attrs:{label:"Titulo",rules:[t.rules.obrigatorio],counter:t.maximo_caracteres,maxlength:t.maximo_caracteres},model:{value:t.form.titulo,callback:function(a){t.$set(t.form,"titulo",a)},expression:"form.titulo"}}),a(j.Z,{attrs:{label:"Descrição",rules:[t.rules.obrigatorio],counter:t.maximo_caracteres,maxlength:t.maximo_caracteres},model:{value:t.form.descricao,callback:function(a){t.$set(t.form,"descricao",a)},expression:"form.descricao"}})],1)],1),a(y.h7,{staticClass:"justify-end"},[a(d.Z,{attrs:{text:""},on:{click:function(a){t.dialog=!1}}},[t._v(" Cancelar ")]),a(d.Z,{attrs:{text:""},on:{click:function(a){return t.salvar(t.form)}}},[t._v(" Salvar ")])],1)],1)],1)},ca=[],da={name:"NovoLembrete",props:{lembrete:Object},data:()=>({dialog:!1,formTitle:"Novo Lembrete",form:{},maximo_caracteres:100,rules:{obrigatorio:t=>!!t||"Este campo é obrigatório"}}),methods:{salvar(t){if(this.$refs.form.validate()){const a=Kt();Xt.put("lembretes/",t,{headers:a}).catch((t=>{console.log(t)})).finally((()=>{this.dialog=!1,this.form={}}))}},set_form(t){this.form=t}}},ua=da,ma=(0,g.Z)(ua,la,ca,!1,null,null,null),fa=ma.exports,pa={name:"LembreteView",components:{NovoLembrete:aa,RemoverLembrete:na,AtualizarLembrete:fa},data:()=>({search:"",headers:[{text:"Código",align:"center",value:"id"},{text:"Titulo",align:"center",value:"titulo"},{text:"Descrição",align:"center",value:"descricao"},{text:"Actions",value:"actions",sortable:!1}],lembretes:[]}),created(){this.get_init()},methods:{get_lembretes(){const t=Kt();Xt.get("lembretes/",{headers:t}).then((t=>{this.lembretes=t.data.data})).catch((t=>{console.log(t)}))},get_init(){this.get_lembretes()},add_lembrete(t){this.lembretes.push(t)},remover_lembrete(t){this.lembretes=this.lembretes.filter((a=>a.id!=t))}}},va=pa,_a=(0,g.Z)(va,Ft,qt,!1,null,null,null),ha=_a.exports,ga=function(){var t=this,a=t._self._c;return a("h1",[t._v("Erro 404")])},ba=[],Za={name:"Error404View"},xa=Za,ya=(0,g.Z)(xa,ga,ba,!1,null,null,null),ka=ya.exports;r.ZP.use(O.ZP);const Ca=[{path:"*",name:"error404",component:ka},{path:"/",name:"auth",component:K},{path:"/financas/",name:"financas",component:jt},{path:"/lembretes/",name:"lembretes",component:ha}],Aa=new O.ZP({routes:Ca});var Sa=Aa,wa=e(1705),$a=e(1084);e(8556);r.ZP.use(wa.Z,{components:{VTextField:j.Z}});var Ea=new wa.Z({theme:{dark:!1,themes:{light:{primary:"#10403B",secondary:"#127369",botao_1:"#127369",botao_2:"#4C5958",background:"#F1F1F1",footer:"#10403B"},dark:{primary:"#027333",secondary:"#04D939",botao_1:"#04D939",botao_2:"#4C5958",background:"#012340",footer:"#027333"}}},lang:{locales:{pt:$a.Z},current:"pt"}});e(7310);r.ZP.use(U.ZP);const Ia=new U.ZP.Store({state:{date_state:(new Date).toISOString().substr(0,7),entrada:[],saida:[],valores:{},response_cadastro:null},getters:{getResponseCadastro(t){return t.response_cadastro},getDateState(t){return t.date_state},getItemsSaida(t){return t.saida},getItemsEntrada(t){return t.entrada},getValores(t){return t.valores}},actions:{dividasAnoMesAction({commit:t},a){const e=Kt();Xt.get("parcelas/"+a,{headers:e}).then((a=>{t("atualizarEntradaSaidaMutation",a.data)})).catch((t=>{console.log(t)}))},adicionarAction({commit:t},a){const e=Kt();Xt.post("dividas/",a,{headers:e}).then((a=>{t("adicionarMutation",a.data.data[0])})).catch((t=>{console.log(t)}))},atualizarAction({commit:t},a){const e=Kt();Xt.put("dividas/",a,{headers:e}).then((a=>{t("atualizarEntradaSaidaMutation",a.data)})).catch((t=>{console.log(t)}))},atualizarStatusAction({commit:t},a){const e=Kt();Xt.put("parcelas/status/",a,{headers:e}).then((a=>{t("atualizarEntradaSaidaMutation",a.data)})).catch((t=>{console.log(t)}))},removerAction({commit:t},a){const e=Kt();Xt.delete("dividas/"+a.divida.id,{headers:e}).then((()=>{t("removerMutation",a.id)})).catch((t=>{console.log(t)}))},painelValoresAction({commit:t},a){const e=Kt();Xt.get("painel-valores/"+a,{headers:e}).then((a=>{t("painelValoresMutation",a.data)})).catch((t=>{console.log(t)}))},AuthLoginAction({commit:t},a){return Xt.post("token/",a).then((a=>{t("AuthLoginMutation",a.data)})).catch((t=>{console.log(t)}))},AuthCadastroAction({commit:t},a){return Xt.post("auth/cadastro/",a).then((a=>{t("AuthCadastroMutation",a.data)})).catch((t=>{console.log(t)}))}},mutations:{atualizarEntradaSaidaMutation(t,a){t.entrada=a.data.entrada,t.saida=a.data.saida},adicionarMutation(t,a){const e=t.date_state.slice(5,7),r=t.date_state.slice(0,4),o="01/"+e+"/"+r;o===a["data"]&&("entrada"===a["divida"]["tipo"]?t.entrada.push(a):t.saida.push(a))},removerMutation(t,a){t.entrada.find((t=>t.id===a))?t.entrada=t.entrada.filter((t=>t.id!=a)):t.saida=t.saida.filter((t=>t.id!=a))},painelValoresMutation(t,a){t.valores=a.data},AuthLoginMutation(t,a){localStorage.setItem("access",a["access"]),localStorage.setItem("refresh",a["refresh"])},AuthCadastroMutation(t,a){t.response_cadastro=a}}});var Pa=Ia,Ma=e(9015);r.ZP.use(Ma.ZP),r.ZP.config.productionTip=!1,new r.ZP({router:Sa,vuetify:Ea,store:Pa,render:t=>t(z)}).$mount("#app")}},a={};function e(r){var o=a[r];if(void 0!==o)return o.exports;var s=a[r]={exports:{}};return t[r].call(s.exports,s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(a,r,o,s){if(!r){var i=1/0;for(d=0;d<t.length;d++){r=t[d][0],o=t[d][1],s=t[d][2];for(var n=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(e.O).every((function(t){return e.O[t](r[l])}))?r.splice(l--,1):(n=!1,s<i&&(i=s));if(n){t.splice(d--,1);var c=o();void 0!==c&&(a=c)}}return a}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[r,o,s]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,r){var o,s,i=r[0],n=r[1],l=r[2],c=0;if(i.some((function(a){return 0!==t[a]}))){for(o in n)e.o(n,o)&&(e.m[o]=n[o]);if(l)var d=l(e)}for(a&&a(r);c<i.length;c++)s=i[c],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(d)},r=self["webpackChunkdividas_front"]=self["webpackChunkdividas_front"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(8578)}));r=e.O(r)})();
//# sourceMappingURL=app.a02e9ac3.js.map