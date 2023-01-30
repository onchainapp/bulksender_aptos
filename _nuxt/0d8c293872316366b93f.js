(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{251:function(e,r,t){"use strict";(function(r,n){var o=t(39),c=t(113),h=t(115),d=t(581),f=t(372),m=t(371),l=t(256),y=t(188),v=t(653),w=t(654),x=t(10),k=t(36),I=t(657).Transaction,_=t(728).default,S=function(e){return o.isUndefined(e)||o.isNull(e)},C=function(){var e=this;c.packageInit(this,arguments),delete this.BatchRequest,delete this.extend;var r=[new h({name:"getNetworkId",call:"net_version",params:0,outputFormatter:parseInt}),new h({name:"getChainId",call:"eth_chainId",params:0,outputFormatter:x.hexToNumber}),new h({name:"getGasPrice",call:"eth_gasPrice",params:0}),new h({name:"getTransactionCount",call:"eth_getTransactionCount",params:2,inputFormatter:[function(address){if(x.isAddress(address))return address;throw new Error("Address "+address+' is not a valid address to get the "transactionCount".')},function(){return"latest"}]})];this._ethereumCall={},o.each(r,(function(r){r.attachToObject(e._ethereumCall),r.setRequestManager(e._requestManager)})),this.wallet=new E(this)};function E(e){this._accounts=e,this.length=0,this.defaultKeyName="web3js_wallet"}C.prototype._addAccountFunctions=function(e){var r=this;return e.signTransaction=function(t,n){return r.signTransaction(t,e.privateKey,n)},e.sign=function(data){return r.sign(data,e.privateKey)},e.encrypt=function(t,n){return r.encrypt(e.privateKey,t,n)},e},C.prototype.create=function(e){return this._addAccountFunctions(d.create(e||x.randomHex(32)))},C.prototype.privateKeyToAccount=function(e,r){if(e.startsWith("0x")||(e="0x"+e),!r&&66!==e.length)throw new Error("Private key must be 32 bytes long");return this._addAccountFunctions(d.fromPrivate(e))},C.prototype.signTransaction=function(e,r,t){var c=!1,h={},d=!(!e||!(e.chain&&e.hardfork||e.common));if(t=t||function(){},!e)return c=new Error("No transaction object given!"),t(c),Promise.reject(c);function f(e){const c=function(e){if(e.common&&e.chain&&e.hardfork)return new Error("Please provide the ethereumjs-common object or the chain and hardfork property but not all together.");if(e.chain&&!e.hardfork||e.hardfork&&!e.chain)return new Error('When specifying chain and hardfork, both values must be defined. Received "chain": '+e.chain+', "hardfork": '+e.hardfork);if(!e.gas&&!e.gasLimit)return new Error('"gas" is missing');if(e.nonce<0||e.gas<0||e.gasPrice<0||e.chainId<0)return new Error("Gas, gasPrice, nonce or chainId is lower than 0");return}(e);if(c)return t(c),Promise.reject(c);try{var f=k.formatters.inputCallFormatter(o.clone(e));f.to=f.to||"0x",f.data=f.data||"0x",f.value=f.value||"0x",f.chainId=x.numberToHex(f.chainId),d?(f.common&&(h.common=_.forCustomChain(f.common.baseChain||"mainnet",{name:f.common.customChain.name||"custom-network",networkId:f.common.customChain.networkId,chainId:f.common.customChain.chainId},f.common.hardfork||"petersburg"),delete f.common),f.chain&&(h.chain=f.chain,delete f.chain),f.hardfork&&(h.hardfork=f.hardfork,delete f.hardfork)):(h.common=_.forCustomChain("mainnet",{name:"custom-network",networkId:f.networkId,chainId:f.chainId},"petersburg"),delete f.networkId),r.startsWith("0x")&&(r=r.substring(2));var m=new I(f,h);m.sign(n.from(r,"hex"));var l=m.validate(!0);if(""!==l)throw new Error("Signer Error: "+l);var y="0x"+m.serialize().toString("hex"),v=x.keccak256(y),w={messageHash:"0x"+n.from(m.hash(!1)).toString("hex"),v:"0x"+n.from(m.v).toString("hex"),r:"0x"+n.from(m.r).toString("hex"),s:"0x"+n.from(m.s).toString("hex"),rawTransaction:y,transactionHash:v};return t(null,w),w}catch(e){return t(e),Promise.reject(e)}}return void 0!==e.nonce&&void 0!==e.chainId&&void 0!==e.gasPrice&&d?Promise.resolve(f(e)):Promise.all([S(e.chainId)?this._ethereumCall.getChainId():e.chainId,S(e.gasPrice)?this._ethereumCall.getGasPrice():e.gasPrice,S(e.nonce)?this._ethereumCall.getTransactionCount(this.privateKeyToAccount(r).address):e.nonce,S(d)?this._ethereumCall.getNetworkId():1]).then((function(r){if(S(r[0])||S(r[1])||S(r[2])||S(r[3]))throw new Error('One of the values "chainId", "networkId", "gasPrice", or "nonce" couldn\'t be fetched: '+JSON.stringify(r));return f(o.extend(e,{chainId:r[0],gasPrice:r[1],nonce:r[2],networkId:r[3]}))}))},C.prototype.recoverTransaction=function(e){var r=m.decode(e),t=d.encodeSignature(r.slice(6,9)),n=l.toNumber(r[6]),o=n<35?[]:[l.fromNumber(n-35>>1),"0x","0x"],c=r.slice(0,6).concat(o),h=m.encode(c);return d.recover(f.keccak256(h),t)},C.prototype.hashMessage=function(data){var e=x.isHexStrict(data)?data:x.utf8ToHex(data),r=x.hexToBytes(e),t=n.from(r),o="Ethereum Signed Message:\n"+r.length,c=n.from(o),h=n.concat([c,t]);return f.keccak256s(h)},C.prototype.sign=function(data,e){if(e.startsWith("0x")||(e="0x"+e),66!==e.length)throw new Error("Private key must be 32 bytes long");var r=this.hashMessage(data),t=d.sign(r,e),n=d.decodeSignature(t);return{message:data,messageHash:r,v:n[0],r:n[1],s:n[2],signature:t}},C.prototype.recover=function(e,r,t){var n=[].slice.apply(arguments);return o.isObject(e)?this.recover(e.messageHash,d.encodeSignature([e.v,e.r,e.s]),!0):(t||(e=this.hashMessage(e)),n.length>=4?(t=n.slice(-1)[0],t=!!o.isBoolean(t)&&!!t,this.recover(e,d.encodeSignature(n.slice(1,4)),t)):d.recover(e,r))},C.prototype.decrypt=function(e,r,t){if(!o.isString(r))throw new Error("No password given.");var c,h,d=o.isObject(e)?e:JSON.parse(t?e.toLowerCase():e);if(3!==d.version)throw new Error("Not a valid V3 wallet");if("scrypt"===d.crypto.kdf)h=d.crypto.kdfparams,c=v.syncScrypt(n.from(r),n.from(h.salt,"hex"),h.n,h.r,h.p,h.dklen);else{if("pbkdf2"!==d.crypto.kdf)throw new Error("Unsupported key derivation scheme");if("hmac-sha256"!==(h=d.crypto.kdfparams).prf)throw new Error("Unsupported parameters to PBKDF2");c=y.pbkdf2Sync(n.from(r),n.from(h.salt,"hex"),h.c,h.dklen,"sha256")}var f=n.from(d.crypto.ciphertext,"hex");if(x.sha3(n.from([...c.slice(16,32),...f])).replace("0x","")!==d.crypto.mac)throw new Error("Key derivation failed - possibly wrong password");var m=y.createDecipheriv(d.crypto.cipher,c.slice(0,16),n.from(d.crypto.cipherparams.iv,"hex")),l="0x"+n.from([...m.update(f),...m.final()]).toString("hex");return this.privateKeyToAccount(l,!0)},C.prototype.encrypt=function(e,r,t){var o,c=this.privateKeyToAccount(e,!0),h=(t=t||{}).salt||y.randomBytes(32),d=t.iv||y.randomBytes(16),f=t.kdf||"scrypt",m={dklen:t.dklen||32,salt:h.toString("hex")};if("pbkdf2"===f)m.c=t.c||262144,m.prf="hmac-sha256",o=y.pbkdf2Sync(n.from(r),n.from(m.salt,"hex"),m.c,m.dklen,"sha256");else{if("scrypt"!==f)throw new Error("Unsupported kdf");m.n=t.n||8192,m.r=t.r||8,m.p=t.p||1,o=v.syncScrypt(n.from(r),n.from(m.salt,"hex"),m.n,m.r,m.p,m.dklen)}var l=y.createCipheriv(t.cipher||"aes-128-ctr",o.slice(0,16),d);if(!l)throw new Error("Unsupported cipher");var k=n.from([...l.update(n.from(c.privateKey.replace("0x",""),"hex")),...l.final()]),I=x.sha3(n.from([...o.slice(16,32),...k])).replace("0x","");return{version:3,id:w.v4({random:t.uuid||y.randomBytes(16)}),address:c.address.toLowerCase().replace("0x",""),crypto:{ciphertext:k.toString("hex"),cipherparams:{iv:d.toString("hex")},cipher:t.cipher||"aes-128-ctr",kdf:f,kdfparams:m,mac:I.toString("hex")}}},E.prototype._findSafeIndex=function(e){return e=e||0,o.has(this,e)?this._findSafeIndex(e+1):e},E.prototype._currentIndexes=function(){return Object.keys(this).map((function(e){return parseInt(e)})).filter((function(e){return e<9e20}))},E.prototype.create=function(e,r){for(var i=0;i<e;++i)this.add(this._accounts.create(r).privateKey);return this},E.prototype.add=function(e){return o.isString(e)&&(e=this._accounts.privateKeyToAccount(e)),this[e.address]?this[e.address]:((e=this._accounts.privateKeyToAccount(e.privateKey)).index=this._findSafeIndex(),this[e.index]=e,this[e.address]=e,this[e.address.toLowerCase()]=e,this.length++,e)},E.prototype.remove=function(e){var r=this[e];return!(!r||!r.address)&&(this[r.address].privateKey=null,delete this[r.address],this[r.address.toLowerCase()].privateKey=null,delete this[r.address.toLowerCase()],this[r.index].privateKey=null,delete this[r.index],this.length--,!0)},E.prototype.clear=function(){var e=this;return this._currentIndexes().forEach((function(r){e.remove(r)})),this},E.prototype.encrypt=function(e,r){var t=this;return this._currentIndexes().map((function(n){return t[n].encrypt(e,r)}))},E.prototype.decrypt=function(e,r){var t=this;return e.forEach((function(e){var n=t._accounts.decrypt(e,r);if(!n)throw new Error("Couldn't decrypt accounts. Password wrong?");t.add(n)})),this},E.prototype.save=function(e,r){return localStorage.setItem(r||this.defaultKeyName,JSON.stringify(this.encrypt(e))),!0},E.prototype.load=function(e,r){var t=localStorage.getItem(r||this.defaultKeyName);if(t)try{t=JSON.parse(t)}catch(e){}return this.decrypt(t||[],e)},function(e){var r;try{r=window[e];var t="__storage_test__";return r.setItem(t,t),r.removeItem(t),!0}catch(e){return e&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&r&&0!==r.length}}("localStorage")||(delete E.prototype.save,delete E.prototype.load),e.exports=C}).call(this,t(18),t(6).Buffer)}}]);