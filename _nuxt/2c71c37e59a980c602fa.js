(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{826:function(e,t,r){"use strict";r.r(t);r(93),r(112),r(827);var n,o,d,c,l,m,f,h,S,v,A,x,k,D,I,E,T,O,w,R,_,N=r(456),j=(r(185),r(42)),y=(r(184),r(248),r(171),r(123),r(249),r(89),r(90),r(32),r(33),r(94),r(74),r(38),r(1)),F=(r(288),r(10),r(138)),C=r.n(F),G=r(53),L=(r(23),r(4)),B=(r(134),r(134),{updateContructIndex:function(e,t){e.dispatch;(0,e.commit)("SET_CONTRUCT_INDEX",t.contructTxIndex)},updateCheckingFrom:function(e,t){e.dispatch;(0,e.commit)("SET_CHECKING_ADDRESS_FROM",t.checkingFrom)},updateCheckingTo:function(e,t){e.dispatch;(0,e.commit)("SET_CHECKING_ADDRESS_TO",t.checkingTo)},setSendLoading:function(e,t){e.dispatch;(0,e.commit)("SET_SEND_LOADING",t.loading)},setResendDisabled:function(e,t){e.dispatch;(0,e.commit)("SET_RESEND_DISABLED",t.disabled)},setSendingIndex:function(e,t){e.dispatch;(0,e.commit)("SET_SENDING_INDEX",t.sendingIndex)},setCode:function(e,t){e.dispatch;(0,e.commit)("SET_CODE",t.code)},setInputType:function(e,t){e.dispatch;(0,e.commit)("SET_INPUT_TYPE",t.type)},setHeaderClosed:function(e,t){e.dispatch;(0,e.commit)("SET_HEADER_CLOSED",t.closed)},updateLanguage:function(e,t){e.dispatch;var r=e.commit,n=t.language;try{r("SET_LANGUAGE",n),localStorage.language=n}catch(e){}},checkAddressIsValid:(_=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var address;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch,t.commit,address=r.address,e.abrupt("return","0x0000000000000000000000000000000000000000"!=address&&Object(G.a)(address));case 3:case"end":return e.stop()}}),e)}))),function(e,t){return _.apply(this,arguments)}),initBulksender:(R=Object(y.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.rootState,t.rootGetters,t.dispatch,t.commit,t.state;case 1:case"end":return e.stop()}}),e)}))),function(e){return R.apply(this,arguments)}),initBaseParams:(w=Object(y.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.rootState,t.rootGetters,t.dispatch,t.commit,t.state;case 1:case"end":return e.stop()}}),e)}))),function(e){return w.apply(this,arguments)}),parseInsertAddresses:(O=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,n=t.dispatch,t.commit,o=r.insertedAddress,d=(d=o.replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,"")).split("\n"),e.next=6,n("checkInsertAddresses",{addresses:d});case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)}))),function(e,t){return O.apply(this,arguments)}),parseInsertTxs:(T=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,n=t.dispatch,t.commit,o=r.insertedAddress,d=(d=o.replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,"")).split("\n"),e.next=6,n("checkInsertTxs",{addresses:d});case 6:return e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)}))),function(e,t){return T.apply(this,arguments)}),prepareTransactions:(E=Object(y.a)(regeneratorRuntime.mark((function e(t){var r,n,o,d,c,l,m,f,address,h,S,v,A,x,k,D,I,E,T,O,w,R,_,N;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.rootState,n=t.rootGetters,o=t.state,d=t.dispatch,c=t.commit,l=r.token,m=l.allowanceEnough,f=l.balanceEnough,address=l.address,h=l.gasForProcessing,r.metamask.netId,e.next=5,d("checkTheLessBalance");case 5:if(S=e.sent,!(m&&f&&S)){e.next=31;break}v=address,A=r.checkBulksend.addressInfo,x=n["metamask/networkConfig"].blockConfig,k=r.bulksender,D=k.commonExtraGas,I=k.defaultBlockConfig,null==x&&(x=I),E=x.blockGasLimit,T=Object.assign({},A),O=T.batches,w=0,R=[],_=regeneratorRuntime.mark((function e(){var t,r,n,l,m,f,S,A;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c("SET_CONTRUCT_INDEX",N+1),t=O[N],r=Object.assign({},t),n=r.addressValues,l=[],m=[],f=[],n.forEach((function(e){l.push(e.address),m.push(e.amount),null!=e.tokenId&&f.push(e.tokenId)})),S=0,!l.length||!m.length){e.next=13;break}return e.next=12,d("bulksender/estimateGasForBatchTransfer",{tokenAddress:v,addresses:l,amounts:m,tokenIds:f},{root:!0});case 12:S=e.sent;case 13:if(-1!=S){e.next=15;break}throw Error("EstimateCostForTransferOfHolder error");case 15:(h>0||o.queryLimitForBadAddress<=o.queryLimitForBadAddressSpecialProcess)&&(A=S,0==N?h>0&&(A=2*S):(N>0&&(A=2*S),N==O.length-1&&(A=3*S)),A>E&&(A=E),S=A),r.estimateGas=S,w+=S,R.push(r);case 19:case"end":return e.stop()}}),e)})),N=0;case 19:if(!(N<O.length)){e.next=24;break}return e.delegateYield(_(),"t0",21);case 21:N++,e.next=19;break;case 24:return T.batches=R,T.totalGas=w+D*O.length,c("SET_ADDRESS_INFO",T),e.next=29,d("estimateExtraFee");case 29:return e.next=31,d("estimateTotalEtherCost");case 31:return e.abrupt("return",!0);case 32:case"end":return e.stop()}}),e)}))),function(e){return E.apply(this,arguments)}),checkDuplicatedTokenIds:(I=Object(y.a)(regeneratorRuntime.mark((function e(t){var r,n,o,d,c,l,m,f,h,S,v,A,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.state,r=t.rootState,n=t.commit,t.rootGetters,t.dispatch,o=r.checkBulksend.addressInfo,r.metamask.ethAccount,d=Object.assign({},o),c=d.validData,l=[],m=[],f=Object(L.a)(o.validAmount),h=[],S={},v=0;v<c.length;v++)A=c[v],null==S[A.tokenId]?(S[A.tokenId]=!0,h.push(A)):(l.push({index:v,address:A.address,amount:A.amount,tokenId:A.tokenId,errorType:6}),m.push(v),x=Object(L.a)(A.amount),f=f.minus(x));if(!(m.length>0)){e.next=19;break}return d.validData=h,d.validAmount=f.toString(10),d.invalidAddressesIndexes=m,d.invalidAddresses=l,n("SET_ADDRESS_INFO",d),e.abrupt("return",!0);case 19:return e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e)}))),function(e){return I.apply(this,arguments)}),checkInsertTxs:(D=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f,h,S,v,A,x,k,D,I,E,T;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.rootState,t.rootGetters,t.dispatch,o=t.commit,d=r.addresses,c=(new Date).getTime(),l=n.token.tokenSelected,m=18,null!=l&&(m=l.decimals),f=new Set,h=[],S=new Set,v=[],A=Object(L.a)(0),x=Object(L.a)(0),k=[],D=[],I=[],E={},d.forEach((function(e,t){var r=e.split(",");r.length<2&&(r=e.split("，"));var address=r[0].replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,""),n=1,o=!0,d=!1;if("0x0000000000000000000000000000000000000000"==address.toLowerCase()||isNaN(n)||!isNaN(n)&&Number(n)<=0){var c=0;(isNaN(n)||Number(n)<=0)&&(c=1),S.add({index:t,address:address,amount:n,errorType:c}),v.push(t),o=!1}else{var l=!1,T=n.toString().split(".");if(T.length>1&&T[1].length>m&&(l=!0),l)c=4,S.add({index:t,address:address,amount:n,errorType:c}),v.push(t),o=!1;else{var O=Object(L.a)(n);n=O.toString(10),x=x.plus(O),k.push({address:address,amount:n,amountStr:O.toString(10)}),null==E[address]?(E[address]=!0,D.push({address:address,amount:n,amountStr:O.toString(10)}),A=A.plus(O)):(d=!0,f.add(address),h.push(t))}}var w=n;try{w=Object(L.a)(n).toString(10)}catch(e){}I.push({address:address,amount:n,amountStr:w,valid:o,duplicated:d})})),T=(new Date).getTime(),console.info("addresses processing time",(T-c)/1e3),A=A.toString(10),x=x.toString(10),f=Array.from(f),S=Array.from(S),o("SET_TXS_INFO",{validAmount:x,nonDuplicatedAmount:A,originalData:I,originalAddressStr:d,duplicatedAddresses:f,duplicatedAddressesIndexes:h,invalidAddresses:S,invalidAddressesIndexes:v,validData:k,nonDuplicatedData:D,finalData:I,finalAmount:A});case 27:case"end":return e.stop()}}),e)}))),function(e,t){return D.apply(this,arguments)}),checkInsertAddresses:(k=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f,h,S,v,A,x,k,D,I,E,T,O,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.rootState,o=t.rootGetters,d=t.dispatch,c=t.commit,l=r.addresses,!o["token/isNFTToken"]){e.next=7;break}return e.next=6,d("checkInsertAddressesForNFT",{addresses:l});case 6:return e.abrupt("return");case 7:m=(new Date).getTime(),f=n.token.tokenSelected,h=18,null!=f&&(h=f.decimals),S=new Set,v=[],A=new Set,x=[],k=Object(L.a)(0),D=Object(L.a)(0),I=[],E=[],T=[],O={},l.forEach((function(e,t){var r=e.split(",");r.length<2&&(r=e.split("，"));var address=r[0].replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,""),n=r[1],o=!0,d=!1;try{address.startsWith("xdc")&&(address=address.replace("xdc","0x"))}catch(e){}if(!Object(G.a)(address)||"0x0000000000000000000000000000000000000000"==address.toLowerCase()||isNaN(n)||!isNaN(n)&&Number(n)<=0){var c=0;(isNaN(n)||Number(n)<=0)&&(c=1,Object(G.a)(address)||(c=2)),A.add({index:t,address:address,amount:n,errorType:c}),x.push(t),o=!1}else{var l=!1,m=n.toString().split(".");if(m.length>1&&m[1].length>h&&(l=!0),l)c=4,A.add({index:t,address:address,amount:n,errorType:c}),x.push(t),o=!1;else{var f=Object(L.a)(n);n=f.toString(10),D=D.plus(f),I.push({address:address,amount:n,amountStr:f.toString(10)}),null==O[address]?(O[address]=!0,E.push({address:address,amount:n,amountStr:f.toString(10)}),k=k.plus(f)):(d=!0,S.add(address),v.push(t))}}var w=n;try{w=Object(L.a)(n).toString(10)}catch(e){}T.push({address:address,amount:n,amountStr:w,valid:o,duplicated:d})})),w=(new Date).getTime(),console.info("addresses processing time",(w-m)/1e3),k=k.toString(10),D=D.toString(10),S=Array.from(S),A=Array.from(A),c("SET_ADDRESS_INFO",{validAmount:D,nonDuplicatedAmount:k,originalData:T,originalAddressStr:l,duplicatedAddresses:S,duplicatedAddressesIndexes:v,invalidAddresses:A,invalidAddressesIndexes:x,validData:I,nonDuplicatedData:E,finalData:T,finalAmount:k});case 31:case"end":return e.stop()}}),e)}))),function(e,t){return k.apply(this,arguments)}),checkInsertAddressesForNFT:(x=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f,h,S,v,A,x,k,D,I,E,T,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.rootState,o=t.rootGetters,d=t.commit,c=r.addresses,null!=(l=n.token.tokenSelected)&&l.decimals,m=o["token/isERC1155"],f=(new Date).getTime(),h=new Set,S=[],v=new Set,A=[],x=Object(L.a)(0),k=Object(L.a)(0),D=[],I=[],E=[],T={},c.forEach((function(e,t){var r=(e=e.replace("，",",")).split(","),address=r[0].replace(/(\n[\s|\t]*\r*\n)/g,"\n").replace(/^\s+|\s+$/gm,""),n=r[1],o="0";r.length>2&&(o=r[2]);try{address.startsWith("xdc")&&(address=address.replace("xdc","0x"))}catch(e){}var d=!0,c=!1;if(!Object(G.a)(address)||"0x0000000000000000000000000000000000000000"==address.toLowerCase()||isNaN(n)||isNaN(o)){var l=0;isNaN(o)&&(l=7,Object(G.a)(address)||(l=10,isNaN(n)||(l=100)),isNaN(n)||(l=9)),isNaN(n)&&(l=8,Object(G.a)(address)||(l=11)),v.add({index:t,address:address,amount:o,tokenId:n,errorType:l}),A.push(t),d=!1}else{var f=!1,O=(l=0,parseInt(o)<=0&&m);if(o%1!=0||O?(f=!0,l=7,O&&(l=101),n%1!=0&&(l=9)):n%1!=0&&(f=!0,l=8),f)v.add({index:t,address:address,amount:o,tokenId:n,errorType:l}),A.push(t),d=!1;else{var w=Object(L.a)(o);o=w.toString(10),k=k.plus(w),D.push({address:address,amount:o,tokenId:n,amountStr:w.toString(10)}),null==T[address]?(T[address]=!0,I.push({address:address,amount:o,tokenId:n,amountStr:w.toString(10)}),x=x.plus(w)):(c=!0,h.add(address),S.push(t))}}var R=o;try{R=Object(L.a)(o).toString(10)}catch(e){}E.push({address:address,amount:o,tokenId:n,amountStr:R,valid:d,duplicated:c})})),O=(new Date).getTime(),console.info("addresses processing time",(O-f)/1e3),x=x.toString(10),k=k.toString(10),h=Array.from(h),v=Array.from(v),d("SET_ADDRESS_INFO",{validAmount:k,nonDuplicatedAmount:x,originalData:E,originalAddressStr:c,duplicatedAddresses:h,duplicatedAddressesIndexes:S,invalidAddresses:v,invalidAddressesIndexes:A,validData:D,nonDuplicatedData:I,finalData:E,finalAmount:x});case 27:case"end":return e.stop()}}),e)}))),function(e,t){return x.apply(this,arguments)}),combineBalances:(A=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(j.a)(r),d=[],c=n.checkBulksend.addressInfo,(l=Object.assign({},c)).validData.forEach((function(e){this[e.address]||(this[e.address]={address:e.address,amount:Object(L.a)(0)},d.push(this[e.address]));var t=Object(L.a)(e.amount),r=Object(L.a)(this[e.address].amount);this[e.address].amount=r.plus(t).toString(10),this[e.address].amountStr=r.plus(t).toString(10)}),Object.create(null)),l.combinedData=d,l.finalData=d,l.finalAmount=c.validAmount,l.invalidAddressesIndexes=[],l.invalidAddresses=[],l.duplicatedAddressesIndexes=[],l.duplicatedAddresses=[],o("SET_ADDRESS_INFO",l),e.abrupt("return",!0);case 15:case"end":return e.stop()}}),e)}))),function(e,t){return A.apply(this,arguments)}),keepFirstOne:(v=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(j.a)(r),d=n.checkBulksend.addressInfo,(c=Object.assign({},d)).finalData=d.nonDuplicatedData,c.finalAmount=d.nonDuplicatedAmount,c.invalidAddressesIndexes=[],c.invalidAddresses=[],c.duplicatedAddressesIndexes=[],c.duplicatedAddresses=[],o("SET_ADDRESS_INFO",c),e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)}))),function(e,t){return v.apply(this,arguments)}),keepFirstOneForTxs:(S=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(j.a)(r),d=n.checkBulksend.txs,c=d,(l=Object.assign({},c)).finalData=c.nonDuplicatedData,l.finalAmount=c.nonDuplicatedAmount,l.invalidAddressesIndexes=[],l.invalidAddresses=[],l.duplicatedAddressesIndexes=[],l.duplicatedAddresses=[],o("SET_TXS_INFO",l),e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)}))),function(e,t){return S.apply(this,arguments)}),keepDuplicated:(h=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(j.a)(r),d=n.checkBulksend.addressInfo,(c=Object.assign({},d)).finalData=c.validData,c.finalAmount=d.validAmount,c.invalidAddressesIndexes=[],c.invalidAddresses=[],c.duplicatedAddressesIndexes=[],c.duplicatedAddresses=[],o("SET_ADDRESS_INFO",c),e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)}))),function(e,t){return h.apply(this,arguments)}),deleteInvalidTxs:(f=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(j.a)(r),d=n.checkBulksend.txs,c=d,l=Object.assign({},c),m=l.validData,l.duplicatedAddressesIndexes.length>0&&(f={},h=[],m.forEach((function(e,t){null!=f[e.address]?h.push(t):f[e.address]=!0})),l.duplicatedAddressesIndexes=h),l.finalData=m,l.finalAmount=c.validAmount,l.invalidAddressesIndexes=[],l.invalidAddresses=[],o("SET_TXS_INFO",l),e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)}))),function(e,t){return f.apply(this,arguments)}),deleteInvalidAddresses:(m=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c,l,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rootState,o=t.commit,t.dispatch,t.state,Object(j.a)(r),d=n.checkBulksend.addressInfo,c=Object.assign({},d),l=c.validData,c.duplicatedAddressesIndexes.length>0&&(m={},f=[],l.forEach((function(e,t){null!=m[e.address]?f.push(t):m[e.address]=!0})),c.duplicatedAddressesIndexes=f),c.finalData=l,c.finalAmount=d.validAmount,c.invalidAddressesIndexes=[],c.invalidAddresses=[],o("SET_ADDRESS_INFO",c),e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)}))),function(e,t){return m.apply(this,arguments)}),readFileAsync:(l=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,t.commit,t.dispatch,t.state,n=r.fileData,o=n,e.abrupt("return",new Promise((function(e,t){var r=new FileReader;r.onload=function(){for(var t="",n=new Uint8Array(r.result),o=n.byteLength,i=0;i<o;i++)t+=String.fromCharCode(n[i]);var d=C.a.read(t,{type:"binary",raw:!0}),c=d.SheetNames[0],l=d.Sheets[c],data=C.a.utils.sheet_to_csv(l);e(data)},r.onerror=t,r.readAsArrayBuffer(o)})));case 5:case"end":return e.stop()}}),e)}))),function(e,t){return l.apply(this,arguments)}),parseFile:(c=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,t.commit,n=t.dispatch,t.rootGetters,t.state,o=r.fileData,e.prev=2,e.next=5,n("readFileAsync",{fileData:o});case 5:return d=e.sent,e.next=8,n("parseInsertAddresses",{insertedAddress:d});case 8:return e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(2),console.info(e.t0),e.next=16,n("uploadFile",{fileData:o});case 16:return c=e.sent,e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[2,11]])}))),function(e,t){return c.apply(this,arguments)}),parseFileForTxs:(d=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n,o,d,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rootState,t.commit,n=t.dispatch,t.rootGetters,t.state,o=r.fileData,e.prev=2,e.next=5,n("readFileAsync",{fileData:o});case 5:return d=e.sent,e.next=8,n("parseInsertTxs",{insertedAddress:d});case 8:return e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(2),e.next=15,n("uploadFile",{fileData:o});case 15:return c=e.sent,e.abrupt("return",c);case 17:case"end":return e.stop()}}),e,null,[[2,11]])}))),function(e,t){return d.apply(this,arguments)}),buf2hex:(o=Object(y.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.state,t.getters,t.rootGetters,t.rootState,t.dispatch,t.commit,n=r.buffer,e.abrupt("return",Object(N.a)(new Uint8Array(n)).map((function(e){return e.toString(16).padStart(2,"0")})).join(""));case 3:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)}),getTxData:(n=Object(y.a)(regeneratorRuntime.mark((function e(t){var r,n,o,d,c,l,m,f,address,h,S,v,A,x,k,D,I,i,E,T,O,w,R,_,N,j,y,F,C,G,B,P,U,X,H;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.state,t.getters,n=t.rootGetters,o=t.rootState,d=t.dispatch,c=t.commit,n["metamask/networkConfig"].smartContractShortPollTime,l=o.metamask.netId,o.bulksender.bulksenderAddress,m=o.token,f=m.tokenSelected,address=m.address,h=f.decimals,S=address,v=r.txs.finalData,A=Object.assign({},r.txs),x=[],k=[],D=[],I=void 0,101==l&&(I="https://solana.public-rpc.com"),i=0;case 15:if(!(i<v.length)){e.next=61;break}return e.prev=16,c("SET_QUERY_INDEX",i+1),E=v[i].address,T=void 0,e.next=23,d("metamask/getTransactionReceipt",{txHash:E,customRPC:I},{root:!0});case 23:if(null==(O=e.sent)){e.next=50;break}if(w=O.confirmationStatus,"0x1"!=(R=w)&&1!=R&&!["finalized","processed","confirmed"].includes(R)){e.next=48;break}return e.next=30,d("metamask/getTransactionInfo",{txHash:E,customRPC:I},{root:!0});case 30:if(T=e.sent,e.prev=31,"0x0000000000000000000000000000000000000000"!=address){e.next=38;break}if("continue"!==function(){var e=T.transaction.message.instructions;if(_=[],N=[],j=[],e.forEach((function(t,i){if("11111111111111111111111111111111"==t.programId&&j.push(1),i!=e.length-1){var r=t.parsed,n=r.info.destination;_.push(n);var o=r.info.lamports;N.push(o)}})),!j.length||j.length!=e.length)return x.push(E),"continue";_.forEach((function(e,i){var t=N[i],r=e+","+(t=Object(L.a)(t).div(Object(L.a)(10).pow(Object(L.a)(h))).toString(10));k.push(r),D.push(r.toLowerCase())}))}()){e.next=36;break}return e.abrupt("continue",58);case 36:e.next=42;break;case 38:return e.delegateYield(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_=[],N=[],T.meta.postTokenBalances[0].mint.toLowerCase()==S.toLowerCase()){e.next=6;break}return x.push(E),e.abrupt("return","continue");case 6:return t=T.transaction.message.instructions,r=[],t.forEach((function(e,i){"spl-token"==e.program&&"transfer"==e.parsed.type&&(N.push(e.parsed.info.amount),r.push({method:"getAccountInfo",params:[e.parsed.info.destination,{encoding:"jsonParsed",commitment:"confirmed"}]}))})),n={params:r},e.next=12,d("metamask/sendRrcRequest",n,{root:!0});case 12:e.sent.forEach((function(data,i){var e=N[i],t=data.data.parsed.info.owner+","+(e=Object(L.a)(e).div(Object(L.a)(10).pow(Object(L.a)(h))).toString(10));k.push(t),D.push(t.toLowerCase())}));case 14:case"end":return e.stop()}}),e)}))(),"t0",39);case 39:if("continue"!==e.t0){e.next=42;break}return e.abrupt("continue",58);case 42:e.next=48;break;case 44:e.prev=44,e.t1=e.catch(31),console.info(e.t1),x.push(E);case 48:e.next=52;break;case 50:x.push(E),console.info("badTxs",x);case 52:e.next=58;break;case 54:e.prev=54,e.t2=e.catch(16),console.info("checking error",e.t2),x.push(E);case 58:i++,e.next=15;break;case 61:return x.length?(C=[],G=[],B=[],v.forEach((function(e,t){x.includes(e.address)?(C.push({index:t,address:e.address,amount:e.amount,errorType:13}),G.push(t)):B.push(e)})),C.length>0&&(A.validData=B,A.invalidAddressesIndexes=G,A.invalidAddresses=C,c("SET_TXS_INFO",A)),y=!1,F=x):F=k,P=Object.assign({},r.addressInfo),U=P.finalData,X=[],H=[],U.forEach((function(e,i){var t=e.address+","+e.amountStr;D.includes(t.toLowerCase())&&X.push(t)})),U.forEach((function(e,i){var t=e.address+","+e.amountStr;D.includes(t.toLowerCase())||H.push(t)})),P.matched=X,P.notReceived=H,P.received=k,c("SET_ADDRESS_INFO",P),e.abrupt("return",{status:y,result:F});case 73:case"end":return e.stop()}}),e,null,[[16,54],[31,44]])}))),function(e){return n.apply(this,arguments)})});t.default={namespaced:!0,state:function(){return{inputType:0,addressesInsertWay:0,code:"",queryLimit:1e3,queryLimitForBadAddress:210,queryLimitForBadAddressOrigional:210,queryLimitForBadAddressSpecialProcess:80,queryIndex:1,addressInfo:{taskID:"",nonAmount:0,validAmount:0,nonDuplicatedAmount:0,originalData:[],originalAddressStr:[],duplicatedAddresses:[],duplicatedAddressesIndexes:[],invalidAddresses:[],invalidAddressesIndexes:[],validData:[],combinedData:[],nonDuplicatedData:[],finalData:[],finalAmount:0,batches:[],times:1,batchSize:100,holders:[],freshers:[],matched:[],notReceived:[],received:[],estimateGasUsed:0,baseFeeEnough:!0},txs:{taskID:"",nonAmount:0,validAmount:0,nonDuplicatedAmount:0,originalData:[],originalAddressStr:[],duplicatedAddresses:[],duplicatedAddressesIndexes:[],invalidAddresses:[],invalidAddressesIndexes:[],validData:[],combinedData:[],nonDuplicatedData:[],finalData:[],finalAmount:0,batches:[],times:1,batchSize:100,holders:[],freshers:[],estimateGasUsed:0,baseFeeEnough:!0},balanceBurners:[{address:"Loading",balanceDisplay:"0",balance:0}]}},getters:{addressInfo:function(e){return e.addressInfo}},mutations:{SET_INPUT_TYPE:function(e,t){e.inputType=t},SET_CODE:function(e,code){e.code=code},SET_ORIGIN_INPUT_DATA:function(e,t){e.originInputData=t},SET_ADDRESS_INFO:function(e,t){e.addressInfo=t},SET_TXS_INFO:function(e,t){e.txs=t},SET_SEND_LOADING:function(e,t){e.sendLoading=t},SET_ADDRESSES_INSERT_WAY:function(e,t){e.addressesInsertWay=t},SET_SENDING_INDEX:function(e,t){e.sendingIndex=t},SET_QUERY_INDEX:function(e,t){e.queryIndex=t},SET_CONTRUCT_INDEX:function(e,t){e.contructTxIndex=t},SET_CHECKING_ADDRESS_FROM:function(e,t){e.checkingAddressFrom=t},SET_CHECKING_ADDRESS_TO:function(e,t){e.checkingAddressTo=t}},actions:B}}}]);