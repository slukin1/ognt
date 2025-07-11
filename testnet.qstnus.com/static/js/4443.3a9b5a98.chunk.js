(self.webpackChunkqstns = self.webpackChunkqstns || []).push([
    [4443], {
        17483: function(e, t, s) {
            "use strict";
            var r = this && this.__rest || function(e, t) {
                    var s = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var n = 0;
                        for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
                    }
                    return s
                },
                n = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CoinbaseWalletProvider = void 0;
            const i = n(s(14526)),
                a = s(42186),
                o = s(47732),
                c = s(57384),
                d = s(16082),
                l = s(94969),
                h = s(1263),
                u = s(88644),
                p = s(42880),
                g = s(51430);
            class m extends i.default {
                constructor(e) {
                    var t, s, {
                            metadata: n
                        } = e,
                        i = e.preference,
                        {
                            keysUrl: o
                        } = i,
                        p = r(i, ["keysUrl"]);
                    super(), this.accounts = [], this.handlers = {
                        handshake: async e => {
                            try {
                                if (this.connected) return this.emit("connect", {
                                    chainId: (0, d.hexStringFromIntNumber)((0, c.IntNumber)(this.chain.id))
                                }), this.accounts;
                                const e = await this.requestSignerSelection(),
                                    t = this.initSigner(e),
                                    s = await t.handshake();
                                return this.signer = t, (0, l.storeSignerType)(e), this.emit("connect", {
                                    chainId: (0, d.hexStringFromIntNumber)((0, c.IntNumber)(this.chain.id))
                                }), s
                            } catch (t) {
                                throw this.handleUnauthorizedError(t), t
                            }
                        },
                        sign: async e => {
                            if (!this.connected || !this.signer) throw a.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
                            try {
                                return await this.signer.request(e)
                            } catch (t) {
                                throw this.handleUnauthorizedError(t), t
                            }
                        },
                        fetch: e => (0, h.fetchRPCRequest)(e, this.chain),
                        state: e => {
                            const t = () => {
                                if (this.connected) return this.accounts;
                                throw a.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods")
                            };
                            switch (e.method) {
                                case "eth_chainId":
                                    return (0, d.hexStringFromIntNumber)((0, c.IntNumber)(this.chain.id));
                                case "net_version":
                                    return this.chain.id;
                                case "eth_accounts":
                                    return t();
                                case "eth_coinbase":
                                    return t()[0];
                                default:
                                    return this.handlers.unsupported(e)
                            }
                        },
                        deprecated: e => {
                            let {
                                method: t
                            } = e;
                            throw a.standardErrors.rpc.methodNotSupported(`Method ${t} is deprecated.`)
                        },
                        unsupported: e => {
                            let {
                                method: t
                            } = e;
                            throw a.standardErrors.rpc.methodNotSupported(`Method ${t} is not supported.`)
                        }
                    }, this.isCoinbaseWallet = !0, this.updateListener = {
                        onAccountsUpdate: e => {
                            let {
                                accounts: t,
                                source: s
                            } = e;
                            (0, d.areAddressArraysEqual)(this.accounts, t) || (this.accounts = t, "storage" !== s && this.emit("accountsChanged", this.accounts))
                        },
                        onChainUpdate: e => {
                            let {
                                chain: t,
                                source: s
                            } = e;
                            t.id === this.chain.id && t.rpcUrl === this.chain.rpcUrl || (this.chain = t, "storage" !== s && this.emit("chainChanged", (0, d.hexStringFromIntNumber)((0, c.IntNumber)(t.id))))
                        }
                    }, this.metadata = n, this.preference = p, this.communicator = new u.Communicator(o), this.chain = {
                        id: null !== (s = null === (t = n.appChainIds) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : 1
                    };
                    const g = (0, l.loadSignerType)();
                    this.signer = g ? this.initSigner(g) : null
                }
                get connected() {
                    return this.accounts.length > 0
                }
                async request(e) {
                    var t;
                    try {
                        const s = (0, h.checkErrorForInvalidRequestArgs)(e);
                        if (s) throw s;
                        const r = null !== (t = (0, p.determineMethodCategory)(e.method)) && void 0 !== t ? t : "fetch";
                        return this.handlers[r](e)
                    } catch (s) {
                        return Promise.reject((0, o.serializeError)(s, e.method))
                    }
                }
                handleUnauthorizedError(e) {
                    e.code === a.standardErrorCodes.provider.unauthorized && this.disconnect()
                }
                async enable() {
                    return console.warn('.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async disconnect() {
                    this.accounts = [], this.chain = {
                        id: 1
                    }, g.ScopedLocalStorage.clearAll(), this.emit("disconnect", a.standardErrors.provider.disconnected("User initiated disconnection"))
                }
                requestSignerSelection() {
                    return (0, l.fetchSignerType)({
                        communicator: this.communicator,
                        preference: this.preference,
                        metadata: this.metadata
                    })
                }
                initSigner(e) {
                    return (0, l.createSigner)({
                        signerType: e,
                        metadata: this.metadata,
                        communicator: this.communicator,
                        updateListener: this.updateListener
                    })
                }
            }
            t.CoinbaseWalletProvider = m
        },
        88984: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CoinbaseWalletSDK = void 0;
            const r = s(17190),
                n = s(17483),
                i = s(51430),
                a = s(85491),
                o = s(16082),
                c = s(1263);
            t.CoinbaseWalletSDK = class {
                constructor(e) {
                    this.metadata = {
                        appName: e.appName || "Dapp",
                        appLogoUrl: e.appLogoUrl || (0, o.getFavicon)(),
                        appChainIds: e.appChainIds || []
                    }, this.storeLatestVersion()
                }
                makeWeb3Provider() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        options: "all"
                    };
                    var t;
                    const s = {
                        metadata: this.metadata,
                        preference: e
                    };
                    return null !== (t = (0, c.getCoinbaseInjectedProvider)(s)) && void 0 !== t ? t : new n.CoinbaseWalletProvider(s)
                }
                getCoinbaseWalletLogo(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 240;
                    return (0, r.walletLogo)(e, t)
                }
                storeLatestVersion() {
                    new i.ScopedLocalStorage("CBWSDK").setItem("VERSION", a.LIB_VERSION)
                }
            }
        },
        17190: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.walletLogo = void 0;
            t.walletLogo = (e, t) => {
                let s;
                switch (e) {
                    case "standard":
                    default:
                        return s = t, `data:image/svg+xml,%3Csvg width='${t}' height='${s}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
                    case "circle":
                        return s = t, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${s}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
                    case "text":
                        return s = (.1 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${s}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
                    case "textWithLogo":
                        return s = (.25 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${s}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
                    case "textLight":
                        return s = (.1 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${s}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
                    case "textWithLogoLight":
                        return s = (.25 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${s}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
                }
            }
        },
        88644: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Communicator = void 0;
            const r = s(85491),
                n = s(23451),
                i = s(3502),
                a = s(42186);
            t.Communicator = class {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.CB_KEYS_URL;
                    this.popup = null, this.listeners = new Map, this.postMessage = async e => {
                        (await this.waitForPopupLoaded()).postMessage(e, this.url.origin)
                    }, this.postRequestAndWaitForResponse = async e => {
                        const t = this.onMessage((t => {
                            let {
                                requestId: s
                            } = t;
                            return s === e.id
                        }));
                        return this.postMessage(e), await t
                    }, this.onMessage = async e => new Promise(((t, s) => {
                        const r = s => {
                            if (s.origin !== this.url.origin) return;
                            const n = s.data;
                            e(n) && (t(n), window.removeEventListener("message", r), this.listeners.delete(r))
                        };
                        window.addEventListener("message", r), this.listeners.set(r, {
                            reject: s
                        })
                    })), this.disconnect = () => {
                        (0, n.closePopup)(this.popup), this.popup = null, this.listeners.forEach(((e, t) => {
                            let {
                                reject: s
                            } = e;
                            s(a.standardErrors.provider.userRejectedRequest("Request rejected")), window.removeEventListener("message", t)
                        })), this.listeners.clear()
                    }, this.waitForPopupLoaded = async () => this.popup && !this.popup.closed ? (this.popup.focus(), this.popup) : (this.popup = (0, n.openPopup)(this.url), this.onMessage((e => {
                        let {
                            event: t
                        } = e;
                        return "PopupUnload" === t
                    })).then(this.disconnect).catch((() => {})), this.onMessage((e => {
                        let {
                            event: t
                        } = e;
                        return "PopupLoaded" === t
                    })).then((e => {
                        this.postMessage({
                            requestId: e.id,
                            data: {
                                version: r.LIB_VERSION
                            }
                        })
                    })).then((() => {
                        if (!this.popup) throw a.standardErrors.rpc.internal();
                        return this.popup
                    }))), this.url = new URL(e)
                }
            }
        },
        23451: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.closePopup = t.openPopup = void 0;
            const r = s(42186);
            t.openPopup = function(e) {
                const t = (window.innerWidth - 420) / 2 + window.screenX,
                    s = (window.innerHeight - 540) / 2 + window.screenY,
                    n = window.open(e, "Smart Wallet", `width=420, height=540, left=${t}, top=${s}`);
                if (null === n || void 0 === n || n.focus(), !n) throw r.standardErrors.rpc.internal("Pop up window failed to open");
                return n
            }, t.closePopup = function(e) {
                e && !e.closed && e.close()
            }
        },
        3502: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CBW_MOBILE_DEEPLINK_URL = t.WALLETLINK_URL = t.CB_KEYS_URL = void 0, t.CB_KEYS_URL = "https://keys.coinbase.com/connect", t.WALLETLINK_URL = "https://www.walletlink.org", t.CBW_MOBILE_DEEPLINK_URL = "https://go.cb-w.com/walletlink"
        },
        68296: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.errorValues = t.standardErrorCodes = void 0, t.standardErrorCodes = {
                rpc: {
                    invalidInput: -32e3,
                    resourceNotFound: -32001,
                    resourceUnavailable: -32002,
                    transactionRejected: -32003,
                    methodNotSupported: -32004,
                    limitExceeded: -32005,
                    parse: -32700,
                    invalidRequest: -32600,
                    methodNotFound: -32601,
                    invalidParams: -32602,
                    internal: -32603
                },
                provider: {
                    userRejectedRequest: 4001,
                    unauthorized: 4100,
                    unsupportedMethod: 4200,
                    disconnected: 4900,
                    chainDisconnected: 4901,
                    unsupportedChain: 4902
                }
            }, t.errorValues = {
                "-32700": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                },
                "-32600": {
                    standard: "JSON RPC 2.0",
                    message: "The JSON sent is not a valid Request object."
                },
                "-32601": {
                    standard: "JSON RPC 2.0",
                    message: "The method does not exist / is not available."
                },
                "-32602": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid method parameter(s)."
                },
                "-32603": {
                    standard: "JSON RPC 2.0",
                    message: "Internal JSON-RPC error."
                },
                "-32000": {
                    standard: "EIP-1474",
                    message: "Invalid input."
                },
                "-32001": {
                    standard: "EIP-1474",
                    message: "Resource not found."
                },
                "-32002": {
                    standard: "EIP-1474",
                    message: "Resource unavailable."
                },
                "-32003": {
                    standard: "EIP-1474",
                    message: "Transaction rejected."
                },
                "-32004": {
                    standard: "EIP-1474",
                    message: "Method not supported."
                },
                "-32005": {
                    standard: "EIP-1474",
                    message: "Request limit exceeded."
                },
                4001: {
                    standard: "EIP-1193",
                    message: "User rejected the request."
                },
                4100: {
                    standard: "EIP-1193",
                    message: "The requested account and/or method has not been authorized by the user."
                },
                4200: {
                    standard: "EIP-1193",
                    message: "The requested method is not supported by this Ethereum provider."
                },
                4900: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from all chains."
                },
                4901: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from the specified chain."
                },
                4902: {
                    standard: "EIP-3085",
                    message: "Unrecognized chain ID."
                }
            }
        },
        17263: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.standardErrors = void 0;
            const r = s(68296),
                n = s(45499);

            function i(e, t) {
                const [s, r] = o(t);
                return new c(e, s || (0, n.getMessageFromCode)(e), r)
            }

            function a(e, t) {
                const [s, r] = o(t);
                return new d(e, s || (0, n.getMessageFromCode)(e), r)
            }

            function o(e) {
                if (e) {
                    if ("string" === typeof e) return [e];
                    if ("object" === typeof e && !Array.isArray(e)) {
                        const {
                            message: t,
                            data: s
                        } = e;
                        if (t && "string" !== typeof t) throw new Error("Must specify string message.");
                        return [t || void 0, s]
                    }
                }
                return []
            }
            t.standardErrors = {
                rpc: {
                    parse: e => i(r.standardErrorCodes.rpc.parse, e),
                    invalidRequest: e => i(r.standardErrorCodes.rpc.invalidRequest, e),
                    invalidParams: e => i(r.standardErrorCodes.rpc.invalidParams, e),
                    methodNotFound: e => i(r.standardErrorCodes.rpc.methodNotFound, e),
                    internal: e => i(r.standardErrorCodes.rpc.internal, e),
                    server: e => {
                        if (!e || "object" !== typeof e || Array.isArray(e)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
                        const {
                            code: t
                        } = e;
                        if (!Number.isInteger(t) || t > -32005 || t < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
                        return i(t, e)
                    },
                    invalidInput: e => i(r.standardErrorCodes.rpc.invalidInput, e),
                    resourceNotFound: e => i(r.standardErrorCodes.rpc.resourceNotFound, e),
                    resourceUnavailable: e => i(r.standardErrorCodes.rpc.resourceUnavailable, e),
                    transactionRejected: e => i(r.standardErrorCodes.rpc.transactionRejected, e),
                    methodNotSupported: e => i(r.standardErrorCodes.rpc.methodNotSupported, e),
                    limitExceeded: e => i(r.standardErrorCodes.rpc.limitExceeded, e)
                },
                provider: {
                    userRejectedRequest: e => a(r.standardErrorCodes.provider.userRejectedRequest, e),
                    unauthorized: e => a(r.standardErrorCodes.provider.unauthorized, e),
                    unsupportedMethod: e => a(r.standardErrorCodes.provider.unsupportedMethod, e),
                    disconnected: e => a(r.standardErrorCodes.provider.disconnected, e),
                    chainDisconnected: e => a(r.standardErrorCodes.provider.chainDisconnected, e),
                    unsupportedChain: e => a(r.standardErrorCodes.provider.unsupportedChain, e),
                    custom: e => {
                        if (!e || "object" !== typeof e || Array.isArray(e)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
                        const {
                            code: t,
                            message: s,
                            data: r
                        } = e;
                        if (!s || "string" !== typeof s) throw new Error('"message" must be a nonempty string');
                        return new d(t, s, r)
                    }
                }
            };
            class c extends Error {
                constructor(e, t, s) {
                    if (!Number.isInteger(e)) throw new Error('"code" must be an integer.');
                    if (!t || "string" !== typeof t) throw new Error('"message" must be a nonempty string.');
                    super(t), this.code = e, void 0 !== s && (this.data = s)
                }
            }
            class d extends c {
                constructor(e, t, s) {
                    if (! function(e) {
                            return Number.isInteger(e) && e >= 1e3 && e <= 4999
                        }(e)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
                    super(e, t, s)
                }
            }
        },
        42186: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.standardErrors = t.standardErrorCodes = void 0;
            var r = s(68296);
            Object.defineProperty(t, "standardErrorCodes", {
                enumerable: !0,
                get: function() {
                    return r.standardErrorCodes
                }
            });
            var n = s(17263);
            Object.defineProperty(t, "standardErrors", {
                enumerable: !0,
                get: function() {
                    return n.standardErrors
                }
            })
        },
        47732: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.serializeError = void 0;
            const r = s(48656),
                n = s(85491),
                i = s(68296),
                a = s(45499);
            t.serializeError = function(e, t) {
                const s = (0, a.serialize)(function(e) {
                        if ("string" === typeof e) return {
                            message: e,
                            code: i.standardErrorCodes.rpc.internal
                        };
                        if ((0, r.isErrorResponse)(e)) return Object.assign(Object.assign({}, e), {
                            message: e.errorMessage,
                            code: e.errorCode,
                            data: {
                                method: e.method
                            }
                        });
                        return e
                    }(e), {
                        shouldIncludeStack: !0
                    }),
                    o = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
                o.searchParams.set("version", n.LIB_VERSION), o.searchParams.set("code", s.code.toString());
                const c = function(e, t) {
                    const s = null === e || void 0 === e ? void 0 : e.method;
                    if (s) return s;
                    if (void 0 === t) return;
                    if ("string" === typeof t) return t;
                    if (!Array.isArray(t)) return t.method;
                    if (t.length > 0) return t[0].method;
                    return
                }(s.data, t);
                return c && o.searchParams.set("method", c), o.searchParams.set("message", s.message), Object.assign(Object.assign({}, s), {
                    docUrl: o.href
                })
            }
        },
        45499: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.serialize = t.getErrorCode = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
            const r = s(68296),
                n = "Unspecified error message.";

            function i(e) {
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
                if (e && Number.isInteger(e)) {
                    const s = e.toString();
                    if (d(r.errorValues, s)) return r.errorValues[s].message;
                    if (o(e)) return t.JSON_RPC_SERVER_ERROR_MESSAGE
                }
                return s
            }

            function a(e) {
                if (!Number.isInteger(e)) return !1;
                const t = e.toString();
                return !!r.errorValues[t] || !!o(e)
            }

            function o(e) {
                return e >= -32099 && e <= -32e3
            }

            function c(e) {
                return e && "object" === typeof e && !Array.isArray(e) ? Object.assign({}, e) : e
            }

            function d(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function l(e, t) {
                return "object" === typeof e && null !== e && t in e && "string" === typeof e[t]
            }
            t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", t.getMessageFromCode = i, t.isValidCode = a, t.getErrorCode = function(e) {
                var t;
                return "number" === typeof e ? e : function(e) {
                    return "object" === typeof e && null !== e && ("number" === typeof e.code || "number" === typeof e.errorCode)
                }(e) ? null !== (t = e.code) && void 0 !== t ? t : e.errorCode : void 0
            }, t.serialize = function(e) {
                let {
                    shouldIncludeStack: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const s = {};
                if (e && "object" === typeof e && !Array.isArray(e) && d(e, "code") && a(e.code)) {
                    const t = e;
                    s.code = t.code, t.message && "string" === typeof t.message ? (s.message = t.message, d(t, "data") && (s.data = t.data)) : (s.message = i(s.code), s.data = {
                        originalError: c(e)
                    })
                } else s.code = r.standardErrorCodes.rpc.internal, s.message = l(e, "message") ? e.message : n, s.data = {
                    originalError: c(e)
                };
                return t && (s.stack = l(e, "stack") ? e.stack : void 0), s
            }
        },
        42880: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.determineMethodCategory = void 0;
            const s = {
                handshake: ["eth_requestAccounts"],
                sign: ["eth_ecRecover", "personal_sign", "personal_ecRecover", "eth_signTransaction", "eth_sendTransaction", "eth_signTypedData_v1", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_signTypedData", "wallet_addEthereumChain", "wallet_switchEthereumChain", "wallet_watchAsset", "wallet_getCapabilities", "wallet_sendCalls", "wallet_showCallsStatus"],
                state: ["eth_chainId", "eth_accounts", "eth_coinbase", "net_version"],
                deprecated: ["eth_sign", "eth_signTypedData_v2"],
                unsupported: ["eth_subscribe", "eth_unsubscribe"],
                fetch: []
            };
            t.determineMethodCategory = function(e) {
                for (const t in s) {
                    const r = t;
                    if (s[r].includes(e)) return r
                }
            }
        },
        57384: (e, t) => {
            "use strict";

            function s() {
                return e => e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RegExpString = t.IntNumber = t.BigIntString = t.AddressString = t.HexString = t.OpaqueType = void 0, t.OpaqueType = s, t.HexString = e => e, t.AddressString = e => e, t.BigIntString = e => e, t.IntNumber = function(e) {
                return Math.floor(e)
            }, t.RegExpString = e => e
        },
        16082: (e, t, s) => {
            "use strict";
            var r = s(88381).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.areAddressArraysEqual = t.getFavicon = t.range = t.isBigNumber = t.ensureParsedJSONObject = t.ensureBigInt = t.ensureRegExpString = t.ensureIntNumber = t.ensureBuffer = t.ensureAddressString = t.ensureEvenLengthHexString = t.ensureHexString = t.isHexString = t.prepend0x = t.strip0x = t.has0xPrefix = t.hexStringFromIntNumber = t.intNumberFromHexString = t.bigIntStringFromBigInt = t.hexStringFromBuffer = t.hexStringToUint8Array = t.uint8ArrayToHex = t.randomBytesHex = void 0;
            const n = s(42186),
                i = s(57384),
                a = /^[0-9]*$/,
                o = /^[a-f0-9]*$/;

            function c(e) {
                return [...e].map((e => e.toString(16).padStart(2, "0"))).join("")
            }

            function d(e) {
                return e.startsWith("0x") || e.startsWith("0X")
            }

            function l(e) {
                return d(e) ? e.slice(2) : e
            }

            function h(e) {
                return d(e) ? `0x${e.slice(2)}` : `0x${e}`
            }

            function u(e) {
                if ("string" !== typeof e) return !1;
                const t = l(e).toLowerCase();
                return o.test(t)
            }

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if ("string" === typeof e) {
                    const s = l(e).toLowerCase();
                    if (o.test(s)) return (0, i.HexString)(t ? `0x${s}` : s)
                }
                throw n.standardErrors.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`)
            }

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    s = p(e, !1);
                return s.length % 2 === 1 && (s = (0, i.HexString)(`0${s}`)), t ? (0, i.HexString)(`0x${s}`) : s
            }

            function m(e) {
                if ("number" === typeof e && Number.isInteger(e)) return (0, i.IntNumber)(e);
                if ("string" === typeof e) {
                    if (a.test(e)) return (0, i.IntNumber)(Number(e));
                    if (u(e)) return (0, i.IntNumber)(Number(BigInt(g(e, !0))))
                }
                throw n.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
            }

            function f(e) {
                if (null == e || "function" !== typeof e.constructor) return !1;
                const {
                    constructor: t
                } = e;
                return "function" === typeof t.config && "number" === typeof t.EUCLID
            }
            t.randomBytesHex = function(e) {
                return c(crypto.getRandomValues(new Uint8Array(e)))
            }, t.uint8ArrayToHex = c, t.hexStringToUint8Array = function(e) {
                return new Uint8Array(e.match(/.{1,2}/g).map((e => parseInt(e, 16))))
            }, t.hexStringFromBuffer = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const s = e.toString("hex");
                return (0, i.HexString)(t ? `0x${s}` : s)
            }, t.bigIntStringFromBigInt = function(e) {
                return (0, i.BigIntString)(e.toString(10))
            }, t.intNumberFromHexString = function(e) {
                return (0, i.IntNumber)(Number(BigInt(g(e, !0))))
            }, t.hexStringFromIntNumber = function(e) {
                return (0, i.HexString)(`0x${BigInt(e).toString(16)}`)
            }, t.has0xPrefix = d, t.strip0x = l, t.prepend0x = h, t.isHexString = u, t.ensureHexString = p, t.ensureEvenLengthHexString = g, t.ensureAddressString = function(e) {
                if ("string" === typeof e) {
                    const t = l(e).toLowerCase();
                    if (u(t) && 40 === t.length) return (0, i.AddressString)(h(t))
                }
                throw n.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`)
            }, t.ensureBuffer = function(e) {
                if (r.isBuffer(e)) return e;
                if ("string" === typeof e) {
                    if (u(e)) {
                        const t = g(e, !1);
                        return r.from(t, "hex")
                    }
                    return r.from(e, "utf8")
                }
                throw n.standardErrors.rpc.invalidParams(`Not binary data: ${String(e)}`)
            }, t.ensureIntNumber = m, t.ensureRegExpString = function(e) {
                if (e instanceof RegExp) return (0, i.RegExpString)(e.toString());
                throw n.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(e)}`)
            }, t.ensureBigInt = function(e) {
                if (null !== e && ("bigint" === typeof e || f(e))) return BigInt(e.toString(10));
                if ("number" === typeof e) return BigInt(m(e));
                if ("string" === typeof e) {
                    if (a.test(e)) return BigInt(e);
                    if (u(e)) return BigInt(g(e, !0))
                }
                throw n.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
            }, t.ensureParsedJSONObject = function(e) {
                if ("string" === typeof e) return JSON.parse(e);
                if ("object" === typeof e) return e;
                throw n.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(e)}`)
            }, t.isBigNumber = f, t.range = function(e, t) {
                return Array.from({
                    length: t - e
                }, ((t, s) => e + s))
            }, t.getFavicon = function() {
                const e = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'),
                    {
                        protocol: t,
                        host: s
                    } = document.location,
                    r = e ? e.getAttribute("href") : null;
                return !r || r.startsWith("javascript:") || r.startsWith("vbscript:") ? null : r.startsWith("http://") || r.startsWith("https://") || r.startsWith("data:") ? r : r.startsWith("//") ? t + r : `${t}//${s}${r}`
            }, t.areAddressArraysEqual = function(e, t) {
                return e.length === t.length && e.every(((e, s) => e === t[s]))
            }
        },
        4443: (e, t, s) => {
            "use strict";
            const r = s(88984);
            t.default = r.CoinbaseWalletSDK;
            var n = s(88984)
        },
        98284: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SCWKeyManager = void 0;
            const r = s(25945),
                n = s(51430),
                i = {
                    storageKey: "ownPrivateKey",
                    keyType: "private"
                },
                a = {
                    storageKey: "ownPublicKey",
                    keyType: "public"
                },
                o = {
                    storageKey: "peerPublicKey",
                    keyType: "public"
                };
            t.SCWKeyManager = class {
                constructor() {
                    this.storage = new n.ScopedLocalStorage("CBWSDK", "SCWKeyManager"), this.ownPrivateKey = null, this.ownPublicKey = null, this.peerPublicKey = null, this.sharedSecret = null
                }
                async getOwnPublicKey() {
                    return await this.loadKeysIfNeeded(), this.ownPublicKey
                }
                async getSharedSecret() {
                    return await this.loadKeysIfNeeded(), this.sharedSecret
                }
                async setPeerPublicKey(e) {
                    this.sharedSecret = null, this.peerPublicKey = e, await this.storeKey(o, e), await this.loadKeysIfNeeded()
                }
                async clear() {
                    this.ownPrivateKey = null, this.ownPublicKey = null, this.peerPublicKey = null, this.sharedSecret = null, this.storage.removeItem(a.storageKey), this.storage.removeItem(i.storageKey), this.storage.removeItem(o.storageKey)
                }
                async generateKeyPair() {
                    const e = await (0, r.generateKeyPair)();
                    this.ownPrivateKey = e.privateKey, this.ownPublicKey = e.publicKey, await this.storeKey(i, e.privateKey), await this.storeKey(a, e.publicKey)
                }
                async loadKeysIfNeeded() {
                    if (null === this.ownPrivateKey && (this.ownPrivateKey = await this.loadKey(i)), null === this.ownPublicKey && (this.ownPublicKey = await this.loadKey(a)), null !== this.ownPrivateKey && null !== this.ownPublicKey || await this.generateKeyPair(), null === this.peerPublicKey && (this.peerPublicKey = await this.loadKey(o)), null === this.sharedSecret) {
                        if (null === this.ownPrivateKey || null === this.peerPublicKey) return;
                        this.sharedSecret = await (0, r.deriveSharedSecret)(this.ownPrivateKey, this.peerPublicKey)
                    }
                }
                async loadKey(e) {
                    const t = this.storage.getItem(e.storageKey);
                    return t ? (0, r.importKeyFromHexString)(e.keyType, t) : null
                }
                async storeKey(e, t) {
                    const s = await (0, r.exportKeyToHexString)(e.keyType, t);
                    this.storage.setItem(e.storageKey, s)
                }
            }
        },
        65804: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SCWSigner = void 0;
            const r = s(98284),
                n = s(56826),
                i = s(42186),
                a = s(16082),
                o = s(25945);
            t.SCWSigner = class {
                constructor(e) {
                    this.metadata = e.metadata, this.communicator = e.communicator, this.keyManager = new r.SCWKeyManager, this.stateManager = new n.SCWStateManager({
                        appChainIds: this.metadata.appChainIds,
                        updateListener: e.updateListener
                    }), this.handshake = this.handshake.bind(this), this.request = this.request.bind(this), this.createRequestMessage = this.createRequestMessage.bind(this), this.decryptResponseMessage = this.decryptResponseMessage.bind(this)
                }
                async handshake() {
                    const e = await this.createRequestMessage({
                            handshake: {
                                method: "eth_requestAccounts",
                                params: this.metadata
                            }
                        }),
                        t = await this.communicator.postRequestAndWaitForResponse(e);
                    if ("failure" in t.content) throw t.content.failure;
                    const s = await (0, o.importKeyFromHexString)("public", t.sender);
                    await this.keyManager.setPeerPublicKey(s);
                    const r = await this.decryptResponseMessage(t);
                    this.updateInternalState({
                        method: "eth_requestAccounts"
                    }, r);
                    const n = r.result;
                    if ("error" in n) throw n.error;
                    return this.stateManager.accounts
                }
                async request(e) {
                    const t = this.tryLocalHandling(e);
                    if (void 0 !== t) {
                        if (t instanceof Error) throw t;
                        return t
                    }
                    await this.communicator.waitForPopupLoaded();
                    const s = await this.sendEncryptedRequest(e),
                        r = await this.decryptResponseMessage(s);
                    this.updateInternalState(e, r);
                    const n = r.result;
                    if ("error" in n) throw n.error;
                    return n.value
                }
                async disconnect() {
                    this.stateManager.clear(), await this.keyManager.clear()
                }
                tryLocalHandling(e) {
                    var t;
                    switch (e.method) {
                        case "wallet_switchEthereumChain":
                            {
                                const s = e.params;
                                if (!s || !(null === (t = s[0]) || void 0 === t ? void 0 : t.chainId)) throw i.standardErrors.rpc.invalidParams();
                                const r = (0, a.ensureIntNumber)(s[0].chainId);
                                return this.stateManager.switchChain(r) ? null : void 0
                            }
                        case "wallet_getCapabilities":
                            {
                                const e = this.stateManager.walletCapabilities;
                                if (!e) throw i.standardErrors.provider.unauthorized("No wallet capabilities found, please disconnect and reconnect");
                                return e
                            }
                        default:
                            return
                    }
                }
                async sendEncryptedRequest(e) {
                    const t = await this.keyManager.getSharedSecret();
                    if (!t) throw i.standardErrors.provider.unauthorized("No valid session found, try requestAccounts before other methods");
                    const s = await (0, o.encryptContent)({
                            action: e,
                            chainId: this.stateManager.activeChain.id
                        }, t),
                        r = await this.createRequestMessage({
                            encrypted: s
                        });
                    return this.communicator.postRequestAndWaitForResponse(r)
                }
                async createRequestMessage(e) {
                    const t = await (0, o.exportKeyToHexString)("public", await this.keyManager.getOwnPublicKey());
                    return {
                        id: crypto.randomUUID(),
                        sender: t,
                        content: e,
                        timestamp: new Date
                    }
                }
                async decryptResponseMessage(e) {
                    const t = e.content;
                    if ("failure" in t) throw t.failure;
                    const s = await this.keyManager.getSharedSecret();
                    if (!s) throw i.standardErrors.provider.unauthorized("Invalid session");
                    return (0, o.decryptContent)(t.encrypted, s)
                }
                updateInternalState(e, t) {
                    var s, r;
                    const n = null === (s = t.data) || void 0 === s ? void 0 : s.chains;
                    n && this.stateManager.updateAvailableChains(n);
                    const i = null === (r = t.data) || void 0 === r ? void 0 : r.capabilities;
                    i && this.stateManager.updateWalletCapabilities(i);
                    const o = t.result;
                    if (!("error" in o)) switch (e.method) {
                        case "eth_requestAccounts":
                            {
                                const e = o.value;this.stateManager.updateAccounts(e);
                                break
                            }
                        case "wallet_switchEthereumChain":
                            {
                                if (null !== o.value) return;
                                const t = e.params,
                                    s = (0, a.ensureIntNumber)(t[0].chainId);this.stateManager.switchChain(s);
                                break
                            }
                    }
                }
            }
        },
        56826: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SCWStateManager = void 0;
            const r = s(51430),
                n = "accounts",
                i = "activeChain",
                a = "availableChains",
                o = "walletCapabilities";
            t.SCWStateManager = class {
                get accounts() {
                    return this._accounts
                }
                get activeChain() {
                    return this._activeChain
                }
                get walletCapabilities() {
                    return this._walletCapabilities
                }
                constructor(e) {
                    var t, s;
                    this.storage = new r.ScopedLocalStorage("CBWSDK", "SCWStateManager"), this.updateListener = e.updateListener, this.availableChains = this.loadItemFromStorage(a), this._walletCapabilities = this.loadItemFromStorage(o);
                    const c = this.loadItemFromStorage(n),
                        d = this.loadItemFromStorage(i);
                    c && this.updateListener.onAccountsUpdate({
                        accounts: c,
                        source: "storage"
                    }), d && this.updateListener.onChainUpdate({
                        chain: d,
                        source: "storage"
                    }), this._accounts = c || [], this._activeChain = d || {
                        id: null !== (s = null === (t = e.appChainIds) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : 1
                    }
                }
                updateAccounts(e) {
                    this._accounts = e, this.storeItemToStorage(n, e), this.updateListener.onAccountsUpdate({
                        accounts: e,
                        source: "wallet"
                    })
                }
                switchChain(e) {
                    var t;
                    const s = null === (t = this.availableChains) || void 0 === t ? void 0 : t.find((t => t.id === e));
                    return !!s && (s === this._activeChain || (this._activeChain = s, this.storeItemToStorage(i, s), this.updateListener.onChainUpdate({
                        chain: s,
                        source: "wallet"
                    })), !0)
                }
                updateAvailableChains(e) {
                    if (!e || 0 === Object.keys(e).length) return;
                    const t = Object.entries(e).map((e => {
                        let [t, s] = e;
                        return {
                            id: Number(t),
                            rpcUrl: s
                        }
                    }));
                    this.availableChains = t, this.storeItemToStorage(a, t), this.switchChain(this._activeChain.id)
                }
                updateWalletCapabilities(e) {
                    this._walletCapabilities = e, this.storeItemToStorage(o, e)
                }
                storeItemToStorage(e, t) {
                    this.storage.setItem(e, JSON.stringify(t))
                }
                loadItemFromStorage(e) {
                    const t = this.storage.getItem(e);
                    return t ? JSON.parse(t) : void 0
                }
                clear() {
                    this.storage.clear()
                }
            }
        },
        94969: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createSigner = t.fetchSignerType = t.storeSignerType = t.loadSignerType = void 0;
            const r = s(65804),
                n = s(61012),
                i = s(42186),
                a = s(1263),
                o = s(51430),
                c = "SignerType",
                d = new o.ScopedLocalStorage("CBWSDK", "SignerConfigurator");
            t.loadSignerType = function() {
                return d.getItem(c)
            }, t.storeSignerType = function(e) {
                d.setItem(c, e)
            }, t.fetchSignerType = async function(e) {
                const {
                    communicator: t,
                    metadata: s
                } = e;
                (async function(e, t) {
                    await e.onMessage((e => {
                        let {
                            event: t
                        } = e;
                        return "WalletLinkSessionRequest" === t
                    }));
                    const s = new n.WalletLinkSigner({
                        metadata: t
                    });
                    e.postMessage({
                        event: "WalletLinkUpdate",
                        data: {
                            session: s.getSession()
                        }
                    }), await s.handshake(), e.postMessage({
                        event: "WalletLinkUpdate",
                        data: {
                            connected: !0
                        }
                    })
                })(t, s).catch((() => {}));
                const r = {
                        id: crypto.randomUUID(),
                        event: "selectSignerType",
                        data: e.preference
                    },
                    {
                        data: i
                    } = await t.postRequestAndWaitForResponse(r);
                return i
            }, t.createSigner = function(e) {
                const {
                    signerType: t,
                    metadata: s,
                    communicator: o,
                    updateListener: c
                } = e;
                switch (t) {
                    case "scw":
                        return new r.SCWSigner({
                            metadata: s,
                            updateListener: c,
                            communicator: o
                        });
                    case "walletlink":
                        return new n.WalletLinkSigner({
                            metadata: s,
                            updateListener: c
                        });
                    case "extension":
                        {
                            const e = (0, a.getCoinbaseInjectedSigner)();
                            if (!e) throw i.standardErrors.rpc.internal("injected signer not found");
                            return e
                        }
                }
            }
        },
        61012: function(e, t, s) {
            "use strict";
            var r = s(88381).Buffer,
                n = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkSigner = void 0;
            const i = n(s(30764)),
                a = s(28168),
                o = s(36815),
                c = s(48656),
                d = s(21955),
                l = s(3502),
                h = s(42186),
                u = s(16082),
                p = s(51430),
                g = "DefaultChainId",
                m = "DefaultJsonRpcUrl";
            t.WalletLinkSigner = class {
                constructor(e) {
                    var t, s;
                    this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1;
                    const {
                        appName: r,
                        appLogoUrl: n
                    } = e.metadata;
                    this._appName = r, this._appLogoUrl = n, this._storage = new p.ScopedLocalStorage("walletlink", l.WALLETLINK_URL), this.updateListener = e.updateListener, this._relayEventManager = new o.RelayEventManager, this._jsonRpcUrlFromOpts = "";
                    const i = this._storage.getItem(a.LOCAL_STORAGE_ADDRESSES_KEY);
                    if (i) {
                        const e = i.split(" ");
                        "" !== e[0] && (this._addresses = e.map((e => (0, u.ensureAddressString)(e))), null === (t = this.updateListener) || void 0 === t || t.onAccountsUpdate({
                            accounts: this._addresses,
                            source: "storage"
                        }))
                    }
                    this._storage.getItem(g) && (null === (s = this.updateListener) || void 0 === s || s.onChainUpdate({
                        chain: {
                            id: this.getChainId(),
                            rpcUrl: this.jsonRpcUrl
                        },
                        source: "storage"
                    }), this.hasMadeFirstChainChangedEmission = !0), this.initializeRelay()
                }
                getSession() {
                    const e = this.initializeRelay(),
                        {
                            id: t,
                            secret: s
                        } = e.getWalletLinkSession();
                    return {
                        id: t,
                        secret: s
                    }
                }
                async handshake() {
                    return await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                get selectedAddress() {
                    return this._addresses[0] || void 0
                }
                get jsonRpcUrl() {
                    var e;
                    return null !== (e = this._storage.getItem(m)) && void 0 !== e ? e : this._jsonRpcUrlFromOpts
                }
                set jsonRpcUrl(e) {
                    this._storage.setItem(m, e)
                }
                updateProviderInfo(e, t) {
                    var s;
                    this.jsonRpcUrl = e;
                    const r = this.getChainId();
                    this._storage.setItem(g, t.toString(10));
                    !((0, u.ensureIntNumber)(t) !== r) && this.hasMadeFirstChainChangedEmission || (null === (s = this.updateListener) || void 0 === s || s.onChainUpdate({
                        chain: {
                            id: t,
                            rpcUrl: e
                        },
                        source: "wallet"
                    }), this.hasMadeFirstChainChangedEmission = !0)
                }
                async watchAsset(e, t, s, r, n, i) {
                    const a = this.initializeRelay(),
                        o = await a.watchAsset(e, t, s, r, n, null === i || void 0 === i ? void 0 : i.toString());
                    return !(0, c.isErrorResponse)(o) && !!o.result
                }
                async addEthereumChain(e, t, s, r, n, i) {
                    var a, o;
                    if ((0, u.ensureIntNumber)(e) === this.getChainId()) return !1;
                    const d = this.initializeRelay();
                    this._isAuthorized() || await d.requestEthereumAccounts();
                    const l = await d.addEthereumChain(e.toString(), t, n, s, r, i);
                    return !(0, c.isErrorResponse)(l) && (!0 === (null === (a = l.result) || void 0 === a ? void 0 : a.isApproved) && this.updateProviderInfo(t[0], e), !0 === (null === (o = l.result) || void 0 === o ? void 0 : o.isApproved))
                }
                async switchEthereumChain(e) {
                    const t = this.initializeRelay(),
                        s = await t.switchEthereumChain(e.toString(10), this.selectedAddress || void 0);
                    if ((0, c.isErrorResponse)(s)) {
                        if (!s.errorCode) return;
                        throw s.errorCode === h.standardErrorCodes.provider.unsupportedChain ? h.standardErrors.provider.unsupportedChain() : h.standardErrors.provider.custom({
                            message: s.errorMessage,
                            code: s.errorCode
                        })
                    }
                    const r = s.result;
                    r.isApproved && r.rpcUrl.length > 0 && this.updateProviderInfo(r.rpcUrl, e)
                }
                async disconnect() {
                    this._relay && this._relay.resetAndReload(), this._storage.clear()
                }
                async request(e) {
                    try {
                        return this._request(e).catch((e => {
                            throw e
                        }))
                    } catch (t) {
                        return Promise.reject(t)
                    }
                }
                async _request(e) {
                    if (!e || "object" !== typeof e || Array.isArray(e)) throw h.standardErrors.rpc.invalidRequest({
                        message: "Expected a single, non-array, object argument.",
                        data: e
                    });
                    const {
                        method: t,
                        params: s
                    } = e;
                    if ("string" !== typeof t || 0 === t.length) throw h.standardErrors.rpc.invalidRequest({
                        message: "'args.method' must be a non-empty string.",
                        data: e
                    });
                    if (void 0 !== s && !Array.isArray(s) && ("object" !== typeof s || null === s)) throw h.standardErrors.rpc.invalidRequest({
                        message: "'args.params' must be an object or array if provided.",
                        data: e
                    });
                    const r = void 0 === s ? [] : s,
                        n = this._relayEventManager.makeRequestId();
                    return (await this._sendRequestAsync({
                        method: t,
                        params: r,
                        jsonrpc: "2.0",
                        id: n
                    })).result
                }
                _setAddresses(e, t) {
                    var s;
                    if (!Array.isArray(e)) throw new Error("addresses is not an array");
                    const r = e.map((e => (0, u.ensureAddressString)(e)));
                    JSON.stringify(r) !== JSON.stringify(this._addresses) && (this._addresses = r, null === (s = this.updateListener) || void 0 === s || s.onAccountsUpdate({
                        accounts: r,
                        source: "wallet"
                    }), this._storage.setItem(a.LOCAL_STORAGE_ADDRESSES_KEY, r.join(" ")))
                }
                _sendRequestAsync(e) {
                    return new Promise(((t, s) => {
                        try {
                            const s = this._handleSynchronousMethods(e);
                            if (void 0 !== s) return t({
                                jsonrpc: "2.0",
                                id: e.id,
                                result: s
                            })
                        } catch (r) {
                            return s(r)
                        }
                        this._handleAsynchronousMethods(e).then((s => s && t(Object.assign(Object.assign({}, s), {
                            id: e.id
                        })))).catch((e => s(e)))
                    }))
                }
                _handleSynchronousMethods(e) {
                    const {
                        method: t
                    } = e;
                    switch (t) {
                        case "eth_accounts":
                            return this._eth_accounts();
                        case "eth_coinbase":
                            return this._eth_coinbase();
                        case "net_version":
                            return this._net_version();
                        case "eth_chainId":
                            return this._eth_chainId();
                        default:
                            return
                    }
                }
                async _handleAsynchronousMethods(e) {
                    const {
                        method: t
                    } = e, s = e.params || [];
                    switch (t) {
                        case "eth_requestAccounts":
                            return this._eth_requestAccounts();
                        case "eth_sign":
                            return this._eth_sign(s);
                        case "eth_ecRecover":
                            return this._eth_ecRecover(s);
                        case "personal_sign":
                            return this._personal_sign(s);
                        case "personal_ecRecover":
                            return this._personal_ecRecover(s);
                        case "eth_signTransaction":
                            return this._eth_signTransaction(s);
                        case "eth_sendRawTransaction":
                            return this._eth_sendRawTransaction(s);
                        case "eth_sendTransaction":
                            return this._eth_sendTransaction(s);
                        case "eth_signTypedData_v1":
                            return this._eth_signTypedData_v1(s);
                        case "eth_signTypedData_v2":
                        default:
                            return this._throwUnsupportedMethodError();
                        case "eth_signTypedData_v3":
                            return this._eth_signTypedData_v3(s);
                        case "eth_signTypedData_v4":
                        case "eth_signTypedData":
                            return this._eth_signTypedData_v4(s);
                        case "wallet_addEthereumChain":
                            return this._wallet_addEthereumChain(s);
                        case "wallet_switchEthereumChain":
                            return this._wallet_switchEthereumChain(s);
                        case "wallet_watchAsset":
                            return this._wallet_watchAsset(s)
                    }
                }
                _isKnownAddress(e) {
                    try {
                        const t = (0, u.ensureAddressString)(e);
                        return this._addresses.map((e => (0, u.ensureAddressString)(e))).includes(t)
                    } catch (t) {}
                    return !1
                }
                _ensureKnownAddress(e) {
                    if (!this._isKnownAddress(e)) throw new Error("Unknown Ethereum address")
                }
                _prepareTransactionParams(e) {
                    const t = e.from ? (0, u.ensureAddressString)(e.from) : this.selectedAddress;
                    if (!t) throw new Error("Ethereum address is unavailable");
                    this._ensureKnownAddress(t);
                    return {
                        fromAddress: t,
                        toAddress: e.to ? (0, u.ensureAddressString)(e.to) : null,
                        weiValue: null != e.value ? (0, u.ensureBigInt)(e.value) : BigInt(0),
                        data: e.data ? (0, u.ensureBuffer)(e.data) : r.alloc(0),
                        nonce: null != e.nonce ? (0, u.ensureIntNumber)(e.nonce) : null,
                        gasPriceInWei: null != e.gasPrice ? (0, u.ensureBigInt)(e.gasPrice) : null,
                        maxFeePerGas: null != e.maxFeePerGas ? (0, u.ensureBigInt)(e.maxFeePerGas) : null,
                        maxPriorityFeePerGas: null != e.maxPriorityFeePerGas ? (0, u.ensureBigInt)(e.maxPriorityFeePerGas) : null,
                        gasLimit: null != e.gas ? (0, u.ensureBigInt)(e.gas) : null,
                        chainId: e.chainId ? (0, u.ensureIntNumber)(e.chainId) : this.getChainId()
                    }
                }
                _isAuthorized() {
                    return this._addresses.length > 0
                }
                _requireAuthorization() {
                    if (!this._isAuthorized()) throw h.standardErrors.provider.unauthorized({})
                }
                _throwUnsupportedMethodError() {
                    throw h.standardErrors.provider.unsupportedMethod({})
                }
                async _signEthereumMessage(e, t, s, r) {
                    this._ensureKnownAddress(t);
                    try {
                        const n = this.initializeRelay(),
                            i = await n.signEthereumMessage(e, t, s, r);
                        if ((0, c.isErrorResponse)(i)) throw new Error(i.errorMessage);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: i.result
                        }
                    } catch (n) {
                        if ("string" === typeof n.message && n.message.match(/(denied|rejected)/i)) throw h.standardErrors.provider.userRejectedRequest("User denied message signature");
                        throw n
                    }
                }
                async _ethereumAddressFromSignedMessage(e, t, s) {
                    const r = this.initializeRelay(),
                        n = await r.ethereumAddressFromSignedMessage(e, t, s);
                    if ((0, c.isErrorResponse)(n)) throw new Error(n.errorMessage);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: n.result
                    }
                }
                _eth_accounts() {
                    return [...this._addresses]
                }
                _eth_coinbase() {
                    return this.selectedAddress || null
                }
                _net_version() {
                    return this.getChainId().toString(10)
                }
                _eth_chainId() {
                    return (0, u.hexStringFromIntNumber)(this.getChainId())
                }
                getChainId() {
                    const e = this._storage.getItem(g);
                    if (!e) return (0, u.ensureIntNumber)(1);
                    const t = parseInt(e, 10);
                    return (0, u.ensureIntNumber)(t)
                }
                async _eth_requestAccounts() {
                    if (this._isAuthorized()) return Promise.resolve({
                        jsonrpc: "2.0",
                        id: 0,
                        result: this._addresses
                    });
                    let e;
                    try {
                        const t = this.initializeRelay();
                        if (e = await t.requestEthereumAccounts(), (0, c.isErrorResponse)(e)) throw new Error(e.errorMessage)
                    } catch (t) {
                        if ("string" === typeof t.message && t.message.match(/(denied|rejected)/i)) throw h.standardErrors.provider.userRejectedRequest("User denied account authorization");
                        throw t
                    }
                    if (!e.result) throw new Error("accounts received is empty");
                    return this._setAddresses(e.result), {
                        jsonrpc: "2.0",
                        id: 0,
                        result: this._addresses
                    }
                }
                _eth_sign(e) {
                    this._requireAuthorization();
                    const t = (0, u.ensureAddressString)(e[0]),
                        s = (0, u.ensureBuffer)(e[1]);
                    return this._signEthereumMessage(s, t, !1)
                }
                _eth_ecRecover(e) {
                    const t = (0, u.ensureBuffer)(e[0]),
                        s = (0, u.ensureBuffer)(e[1]);
                    return this._ethereumAddressFromSignedMessage(t, s, !1)
                }
                _personal_sign(e) {
                    this._requireAuthorization();
                    const t = (0, u.ensureBuffer)(e[0]),
                        s = (0, u.ensureAddressString)(e[1]);
                    return this._signEthereumMessage(t, s, !0)
                }
                _personal_ecRecover(e) {
                    const t = (0, u.ensureBuffer)(e[0]),
                        s = (0, u.ensureBuffer)(e[1]);
                    return this._ethereumAddressFromSignedMessage(t, s, !0)
                }
                async _eth_signTransaction(e) {
                    this._requireAuthorization();
                    const t = this._prepareTransactionParams(e[0] || {});
                    try {
                        const e = this.initializeRelay(),
                            s = await e.signEthereumTransaction(t);
                        if ((0, c.isErrorResponse)(s)) throw new Error(s.errorMessage);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: s.result
                        }
                    } catch (s) {
                        if ("string" === typeof s.message && s.message.match(/(denied|rejected)/i)) throw h.standardErrors.provider.userRejectedRequest("User denied transaction signature");
                        throw s
                    }
                }
                async _eth_sendRawTransaction(e) {
                    const t = (0, u.ensureBuffer)(e[0]),
                        s = this.initializeRelay(),
                        r = await s.submitEthereumTransaction(t, this.getChainId());
                    if ((0, c.isErrorResponse)(r)) throw new Error(r.errorMessage);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: r.result
                    }
                }
                async _eth_sendTransaction(e) {
                    this._requireAuthorization();
                    const t = this._prepareTransactionParams(e[0] || {});
                    try {
                        const e = this.initializeRelay(),
                            s = await e.signAndSubmitEthereumTransaction(t);
                        if ((0, c.isErrorResponse)(s)) throw new Error(s.errorMessage);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: s.result
                        }
                    } catch (s) {
                        if ("string" === typeof s.message && s.message.match(/(denied|rejected)/i)) throw h.standardErrors.provider.userRejectedRequest("User denied transaction signature");
                        throw s
                    }
                }
                async _eth_signTypedData_v1(e) {
                    this._requireAuthorization();
                    const t = (0, u.ensureParsedJSONObject)(e[0]),
                        s = (0, u.ensureAddressString)(e[1]);
                    this._ensureKnownAddress(s);
                    const r = i.default.hashForSignTypedDataLegacy({
                            data: t
                        }),
                        n = JSON.stringify(t, null, 2);
                    return this._signEthereumMessage(r, s, !1, n)
                }
                async _eth_signTypedData_v3(e) {
                    this._requireAuthorization();
                    const t = (0, u.ensureAddressString)(e[0]),
                        s = (0, u.ensureParsedJSONObject)(e[1]);
                    this._ensureKnownAddress(t);
                    const r = i.default.hashForSignTypedData_v3({
                            data: s
                        }),
                        n = JSON.stringify(s, null, 2);
                    return this._signEthereumMessage(r, t, !1, n)
                }
                async _eth_signTypedData_v4(e) {
                    this._requireAuthorization();
                    const t = (0, u.ensureAddressString)(e[0]),
                        s = (0, u.ensureParsedJSONObject)(e[1]);
                    this._ensureKnownAddress(t);
                    const r = i.default.hashForSignTypedData_v4({
                            data: s
                        }),
                        n = JSON.stringify(s, null, 2);
                    return this._signEthereumMessage(r, t, !1, n)
                }
                async _wallet_addEthereumChain(e) {
                    var t, s, r, n;
                    const i = e[0];
                    if (0 === (null === (t = i.rpcUrls) || void 0 === t ? void 0 : t.length)) return {
                        jsonrpc: "2.0",
                        id: 0,
                        error: {
                            code: 2,
                            message: "please pass in at least 1 rpcUrl"
                        }
                    };
                    if (!i.chainName || "" === i.chainName.trim()) throw h.standardErrors.rpc.invalidParams("chainName is a required field");
                    if (!i.nativeCurrency) throw h.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
                    const a = parseInt(i.chainId, 16);
                    return await this.addEthereumChain(a, null !== (s = i.rpcUrls) && void 0 !== s ? s : [], null !== (r = i.blockExplorerUrls) && void 0 !== r ? r : [], i.chainName, null !== (n = i.iconUrls) && void 0 !== n ? n : [], i.nativeCurrency) ? {
                        jsonrpc: "2.0",
                        id: 0,
                        result: null
                    } : {
                        jsonrpc: "2.0",
                        id: 0,
                        error: {
                            code: 2,
                            message: "unable to add ethereum chain"
                        }
                    }
                }
                async _wallet_switchEthereumChain(e) {
                    const t = e[0];
                    return await this.switchEthereumChain(parseInt(t.chainId, 16)), {
                        jsonrpc: "2.0",
                        id: 0,
                        result: null
                    }
                }
                async _wallet_watchAsset(e) {
                    const t = Array.isArray(e) ? e[0] : e;
                    if (!t.type) throw h.standardErrors.rpc.invalidParams("Type is required");
                    if ("ERC20" !== (null === t || void 0 === t ? void 0 : t.type)) throw h.standardErrors.rpc.invalidParams(`Asset of type '${t.type}' is not supported`);
                    if (!(null === t || void 0 === t ? void 0 : t.options)) throw h.standardErrors.rpc.invalidParams("Options are required");
                    if (!(null === t || void 0 === t ? void 0 : t.options.address)) throw h.standardErrors.rpc.invalidParams("Address is required");
                    const s = this.getChainId(),
                        {
                            address: r,
                            symbol: n,
                            image: i,
                            decimals: a
                        } = t.options;
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: await this.watchAsset(t.type, r, n, a, i, s)
                    }
                }
                initializeRelay() {
                    if (!this._relay) {
                        const e = new d.WalletLinkRelay({
                            linkAPIUrl: l.WALLETLINK_URL,
                            storage: this._storage
                        });
                        e.setAppInfo(this._appName, this._appLogoUrl), e.attachUI(), e.setAccountsCallback(((e, t) => this._setAddresses(e, t))), e.setChainCallback(((e, t) => {
                            this.updateProviderInfo(t, parseInt(e, 10))
                        })), this._relay = e
                    }
                    return this._relay
                }
            }
        },
        36815: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RelayEventManager = void 0;
            const r = s(16082);
            t.RelayEventManager = class {
                constructor() {
                    this._nextRequestId = 0, this.callbacks = new Map
                }
                makeRequestId() {
                    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
                    const e = this._nextRequestId,
                        t = (0, r.prepend0x)(e.toString(16));
                    return this.callbacks.get(t) && this.callbacks.delete(t), e
                }
            }
        },
        21955: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkRelay = void 0;
            const r = s(86333),
                n = s(28168),
                i = s(36815),
                a = s(14145),
                o = s(48656),
                c = s(51261),
                d = s(91332),
                l = s(14416),
                h = s(42186),
                u = s(16082),
                p = s(51430);
            class g {
                constructor(e) {
                    this.accountsCallback = null, this.chainCallbackParams = {
                        chainId: "",
                        jsonRpcUrl: ""
                    }, this.chainCallback = null, this.dappDefaultChain = 1, this.isMobileWeb = (0, c.isMobileWeb)(), this.appName = "", this.appLogoUrl = null, this.linkedUpdated = e => {
                        this.isLinked = e;
                        const t = this.storage.getItem(n.LOCAL_STORAGE_ADDRESSES_KEY);
                        if (e && (this._session.linked = e), this.isUnlinkedErrorState = !1, t) {
                            const s = t.split(" "),
                                r = "true" === this.storage.getItem("IsStandaloneSigning");
                            "" === s[0] || e || !this._session.linked || r || (this.isUnlinkedErrorState = !0)
                        }
                    }, this.metadataUpdated = (e, t) => {
                        this.storage.setItem(e, t)
                    }, this.chainUpdated = (e, t) => {
                        this.chainCallbackParams.chainId === e && this.chainCallbackParams.jsonRpcUrl === t || (this.chainCallbackParams = {
                            chainId: e,
                            jsonRpcUrl: t
                        }, this.chainCallback && this.chainCallback(e, t))
                    }, this.accountUpdated = e => {
                        this.accountsCallback && this.accountsCallback([e]), g.accountRequestCallbackIds.size > 0 && (Array.from(g.accountRequestCallbackIds.values()).forEach((t => {
                            const s = {
                                type: "WEB3_RESPONSE",
                                id: t,
                                response: {
                                    method: "requestEthereumAccounts",
                                    result: [e]
                                }
                            };
                            this.invokeCallback(Object.assign(Object.assign({}, s), {
                                id: t
                            }))
                        })), g.accountRequestCallbackIds.clear())
                    }, this.resetAndReload = this.resetAndReload.bind(this), this.linkAPIUrl = e.linkAPIUrl, this.storage = e.storage;
                    const {
                        session: t,
                        ui: s,
                        connection: r
                    } = this.subscribe();
                    this._session = t, this.connection = r, this.relayEventManager = new i.RelayEventManager, this.ui = s
                }
                subscribe() {
                    const e = a.WalletLinkSession.load(this.storage) || new a.WalletLinkSession(this.storage).save(),
                        {
                            linkAPIUrl: t
                        } = this,
                        s = new r.WalletLinkConnection({
                            session: e,
                            linkAPIUrl: t,
                            listener: this
                        }),
                        n = this.isMobileWeb ? new l.WLMobileRelayUI : new d.WalletLinkRelayUI;
                    return s.connect(), {
                        session: e,
                        ui: n,
                        connection: s
                    }
                }
                attachUI() {
                    this.ui.attach()
                }
                resetAndReload() {
                    Promise.race([this.connection.setSessionMetadata("__destroyed", "1"), new Promise((e => setTimeout((() => e(null)), 1e3)))]).then((() => {
                        this.connection.destroy();
                        const e = a.WalletLinkSession.load(this.storage);
                        (null === e || void 0 === e ? void 0 : e.id) === this._session.id && p.ScopedLocalStorage.clearAll(), document.location.reload()
                    })).catch((e => {}))
                }
                setAppInfo(e, t) {
                    this.appName = e, this.appLogoUrl = t
                }
                getStorageItem(e) {
                    return this.storage.getItem(e)
                }
                setStorageItem(e, t) {
                    this.storage.setItem(e, t)
                }
                signEthereumMessage(e, t, s, r) {
                    return this.sendRequest({
                        method: "signEthereumMessage",
                        params: {
                            message: (0, u.hexStringFromBuffer)(e, !0),
                            address: t,
                            addPrefix: s,
                            typedDataJson: r || null
                        }
                    })
                }
                ethereumAddressFromSignedMessage(e, t, s) {
                    return this.sendRequest({
                        method: "ethereumAddressFromSignedMessage",
                        params: {
                            message: (0, u.hexStringFromBuffer)(e, !0),
                            signature: (0, u.hexStringFromBuffer)(t, !0),
                            addPrefix: s
                        }
                    })
                }
                signEthereumTransaction(e) {
                    return this.sendRequest({
                        method: "signEthereumTransaction",
                        params: {
                            fromAddress: e.fromAddress,
                            toAddress: e.toAddress,
                            weiValue: (0, u.bigIntStringFromBigInt)(e.weiValue),
                            data: (0, u.hexStringFromBuffer)(e.data, !0),
                            nonce: e.nonce,
                            gasPriceInWei: e.gasPriceInWei ? (0, u.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                            maxFeePerGas: e.gasPriceInWei ? (0, u.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                            maxPriorityFeePerGas: e.gasPriceInWei ? (0, u.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                            gasLimit: e.gasLimit ? (0, u.bigIntStringFromBigInt)(e.gasLimit) : null,
                            chainId: e.chainId,
                            shouldSubmit: !1
                        }
                    })
                }
                signAndSubmitEthereumTransaction(e) {
                    return this.sendRequest({
                        method: "signEthereumTransaction",
                        params: {
                            fromAddress: e.fromAddress,
                            toAddress: e.toAddress,
                            weiValue: (0, u.bigIntStringFromBigInt)(e.weiValue),
                            data: (0, u.hexStringFromBuffer)(e.data, !0),
                            nonce: e.nonce,
                            gasPriceInWei: e.gasPriceInWei ? (0, u.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                            maxFeePerGas: e.maxFeePerGas ? (0, u.bigIntStringFromBigInt)(e.maxFeePerGas) : null,
                            maxPriorityFeePerGas: e.maxPriorityFeePerGas ? (0, u.bigIntStringFromBigInt)(e.maxPriorityFeePerGas) : null,
                            gasLimit: e.gasLimit ? (0, u.bigIntStringFromBigInt)(e.gasLimit) : null,
                            chainId: e.chainId,
                            shouldSubmit: !0
                        }
                    })
                }
                submitEthereumTransaction(e, t) {
                    return this.sendRequest({
                        method: "submitEthereumTransaction",
                        params: {
                            signedTransaction: (0, u.hexStringFromBuffer)(e, !0),
                            chainId: t
                        }
                    })
                }
                scanQRCode(e) {
                    return this.sendRequest({
                        method: "scanQRCode",
                        params: {
                            regExp: e
                        }
                    })
                }
                getWalletLinkSession() {
                    return this._session
                }
                genericRequest(e, t) {
                    return this.sendRequest({
                        method: "generic",
                        params: {
                            action: t,
                            data: e
                        }
                    })
                }
                sendGenericMessage(e) {
                    return this.sendRequest(e)
                }
                sendRequest(e) {
                    let t = null;
                    const s = (0, u.randomBytesHex)(8),
                        r = r => {
                            this.publishWeb3RequestCanceledEvent(s), this.handleErrorResponse(s, e.method, r), null === t || void 0 === t || t()
                        };
                    return new Promise(((n, i) => {
                        t = this.ui.showConnecting({
                            isUnlinkedErrorState: this.isUnlinkedErrorState,
                            onCancel: r,
                            onResetConnection: this.resetAndReload
                        }), this.relayEventManager.callbacks.set(s, (e => {
                            if (null === t || void 0 === t || t(), (0, o.isErrorResponse)(e)) return i(new Error(e.errorMessage));
                            n(e)
                        })), this.publishWeb3RequestEvent(s, e)
                    }))
                }
                setAccountsCallback(e) {
                    this.accountsCallback = e
                }
                setChainCallback(e) {
                    this.chainCallback = e
                }
                setDappDefaultChainCallback(e) {
                    this.dappDefaultChain = e
                }
                publishWeb3RequestEvent(e, t) {
                    const s = {
                        type: "WEB3_REQUEST",
                        id: e,
                        request: t
                    };
                    this.publishEvent("Web3Request", s, !0).then((e => {})).catch((e => {
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: s.id,
                            response: {
                                method: t.method,
                                errorMessage: e.message
                            }
                        })
                    })), this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method)
                }
                openCoinbaseWalletDeeplink(e) {
                    if (this.ui instanceof l.WLMobileRelayUI) switch (e) {
                        case "requestEthereumAccounts":
                        case "switchEthereumChain":
                            return;
                        default:
                            window.addEventListener("blur", (() => {
                                window.addEventListener("focus", (() => {
                                    this.connection.checkUnseenEvents()
                                }), {
                                    once: !0
                                })
                            }), {
                                once: !0
                            }), this.ui.openCoinbaseWalletDeeplink()
                    }
                }
                publishWeb3RequestCanceledEvent(e) {
                    const t = {
                        type: "WEB3_REQUEST_CANCELED",
                        id: e
                    };
                    this.publishEvent("Web3RequestCanceled", t, !1).then()
                }
                publishEvent(e, t, s) {
                    return this.connection.publishEvent(e, t, s)
                }
                handleWeb3ResponseMessage(e) {
                    const {
                        response: t
                    } = e;
                    if ("requestEthereumAccounts" === t.method) return g.accountRequestCallbackIds.forEach((t => this.invokeCallback(Object.assign(Object.assign({}, e), {
                        id: t
                    })))), void g.accountRequestCallbackIds.clear();
                    this.invokeCallback(e)
                }
                handleErrorResponse(e, t, s) {
                    var r;
                    const n = null !== (r = null === s || void 0 === s ? void 0 : s.message) && void 0 !== r ? r : "Unspecified error message.";
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: e,
                        response: {
                            method: t,
                            errorMessage: n
                        }
                    })
                }
                invokeCallback(e) {
                    const t = this.relayEventManager.callbacks.get(e.id);
                    t && (t(e.response), this.relayEventManager.callbacks.delete(e.id))
                }
                requestEthereumAccounts() {
                    const e = {
                            method: "requestEthereumAccounts",
                            params: {
                                appName: this.appName,
                                appLogoUrl: this.appLogoUrl || null
                            }
                        },
                        t = (0, u.randomBytesHex)(8);
                    return new Promise(((s, r) => {
                        this.relayEventManager.callbacks.set(t, (e => {
                            if ((0, o.isErrorResponse)(e)) return r(new Error(e.errorMessage));
                            s(e)
                        })), g.accountRequestCallbackIds.add(t), this.publishWeb3RequestEvent(t, e)
                    }))
                }
                watchAsset(e, t, s, r, n, i) {
                    const a = {
                        method: "watchAsset",
                        params: {
                            type: e,
                            options: {
                                address: t,
                                symbol: s,
                                decimals: r,
                                image: n
                            },
                            chainId: i
                        }
                    };
                    let c = null;
                    const d = (0, u.randomBytesHex)(8),
                        l = e => {
                            this.publishWeb3RequestCanceledEvent(d), this.handleErrorResponse(d, a.method, e), null === c || void 0 === c || c()
                        };
                    return c = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: l,
                        onResetConnection: this.resetAndReload
                    }), new Promise(((e, t) => {
                        this.relayEventManager.callbacks.set(d, (s => {
                            if (null === c || void 0 === c || c(), (0, o.isErrorResponse)(s)) return t(new Error(s.errorMessage));
                            e(s)
                        })), this.publishWeb3RequestEvent(d, a)
                    }))
                }
                addEthereumChain(e, t, s, r, n, i) {
                    const a = {
                        method: "addEthereumChain",
                        params: {
                            chainId: e,
                            rpcUrls: t,
                            blockExplorerUrls: r,
                            chainName: n,
                            iconUrls: s,
                            nativeCurrency: i
                        }
                    };
                    let c = null;
                    const d = (0, u.randomBytesHex)(8),
                        l = e => {
                            this.publishWeb3RequestCanceledEvent(d), this.handleErrorResponse(d, a.method, e), null === c || void 0 === c || c()
                        };
                    return c = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: l,
                        onResetConnection: this.resetAndReload
                    }), new Promise(((e, t) => {
                        this.relayEventManager.callbacks.set(d, (s => {
                            if (null === c || void 0 === c || c(), (0, o.isErrorResponse)(s)) return t(new Error(s.errorMessage));
                            e(s)
                        })), this.publishWeb3RequestEvent(d, a)
                    }))
                }
                switchEthereumChain(e, t) {
                    const s = {
                            method: "switchEthereumChain",
                            params: Object.assign({
                                chainId: e
                            }, {
                                address: t
                            })
                        },
                        r = (0, u.randomBytesHex)(8);
                    return new Promise(((e, t) => {
                        this.relayEventManager.callbacks.set(r, (s => (0, o.isErrorResponse)(s) && s.errorCode ? t(h.standardErrors.provider.custom({
                            code: s.errorCode,
                            message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
                        })) : (0, o.isErrorResponse)(s) ? t(new Error(s.errorMessage)) : void e(s))), this.publishWeb3RequestEvent(r, s)
                    }))
                }
            }
            t.WalletLinkRelay = g, g.accountRequestCallbackIds = new Set
        },
        2086: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkCipher = void 0;
            const r = s(16082);
            t.WalletLinkCipher = class {
                constructor(e) {
                    this.secret = e
                }
                async encrypt(e) {
                    const t = this.secret;
                    if (64 !== t.length) throw Error("secret must be 256 bits");
                    const s = crypto.getRandomValues(new Uint8Array(12)),
                        n = await crypto.subtle.importKey("raw", (0, r.hexStringToUint8Array)(t), {
                            name: "aes-gcm"
                        }, !1, ["encrypt", "decrypt"]),
                        i = new TextEncoder,
                        a = await window.crypto.subtle.encrypt({
                            name: "AES-GCM",
                            iv: s
                        }, n, i.encode(e)),
                        o = a.slice(a.byteLength - 16),
                        c = a.slice(0, a.byteLength - 16),
                        d = new Uint8Array(o),
                        l = new Uint8Array(c),
                        h = new Uint8Array([...s, ...d, ...l]);
                    return (0, r.uint8ArrayToHex)(h)
                }
                async decrypt(e) {
                    const t = this.secret;
                    if (64 !== t.length) throw Error("secret must be 256 bits");
                    return new Promise(((s, n) => {
                        !async function() {
                            const i = await crypto.subtle.importKey("raw", (0, r.hexStringToUint8Array)(t), {
                                    name: "aes-gcm"
                                }, !1, ["encrypt", "decrypt"]),
                                a = (0, r.hexStringToUint8Array)(e),
                                o = a.slice(0, 12),
                                c = a.slice(12, 28),
                                d = a.slice(28),
                                l = new Uint8Array([...d, ...c]),
                                h = {
                                    name: "AES-GCM",
                                    iv: new Uint8Array(o)
                                };
                            try {
                                const e = await window.crypto.subtle.decrypt(h, i, l),
                                    t = new TextDecoder;
                                s(t.decode(e))
                            } catch (u) {
                                n(u)
                            }
                        }()
                    }))
                }
            }
        },
        86333: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkConnection = void 0;
            const r = s(28168),
                n = s(2086),
                i = s(84473),
                a = s(3602),
                o = s(57384);
            t.WalletLinkConnection = class {
                constructor(e) {
                    let {
                        session: t,
                        linkAPIUrl: s,
                        listener: c,
                        WebSocketClass: d = WebSocket
                    } = e;
                    this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, o.IntNumber)(1), this._connected = !1, this._linked = !1, this.shouldFetchUnseenEventsOnConnect = !1, this.requestResolutions = new Map, this.handleSessionMetadataUpdated = e => {
                        if (!e) return;
                        new Map([
                            ["__destroyed", this.handleDestroyed],
                            ["EthereumAddress", this.handleAccountUpdated],
                            ["WalletUsername", this.handleWalletUsernameUpdated],
                            ["AppVersion", this.handleAppVersionUpdated],
                            ["ChainId", t => e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl)]
                        ]).forEach(((t, s) => {
                            const r = e[s];
                            void 0 !== r && t(r)
                        }))
                    }, this.handleDestroyed = e => {
                        var t;
                        "1" === e && (null === (t = this.listener) || void 0 === t || t.resetAndReload())
                    }, this.handleAccountUpdated = async e => {
                        var t; {
                            const s = await this.cipher.decrypt(e);
                            null === (t = this.listener) || void 0 === t || t.accountUpdated(s)
                        }
                    }, this.handleMetadataUpdated = async (e, t) => {
                        var s; {
                            const r = await this.cipher.decrypt(t);
                            null === (s = this.listener) || void 0 === s || s.metadataUpdated(e, r)
                        }
                    }, this.handleWalletUsernameUpdated = async e => {
                        this.handleMetadataUpdated(r.WALLET_USER_NAME_KEY, e)
                    }, this.handleAppVersionUpdated = async e => {
                        this.handleMetadataUpdated(r.APP_VERSION_KEY, e)
                    }, this.handleChainUpdated = async (e, t) => {
                        var s; {
                            const r = await this.cipher.decrypt(e),
                                n = await this.cipher.decrypt(t);
                            null === (s = this.listener) || void 0 === s || s.chainUpdated(r, n)
                        }
                    }, this.session = t, this.cipher = new n.WalletLinkCipher(t.secret), this.listener = c;
                    const l = new a.WalletLinkWebSocket(`${s}/rpc`, d);
                    l.setConnectionStateListener((async e => {
                        let t = !1;
                        switch (e) {
                            case a.ConnectionState.DISCONNECTED:
                                if (!this.destroyed) {
                                    const e = async () => {
                                        await new Promise((e => setTimeout(e, 5e3))), this.destroyed || l.connect().catch((() => {
                                            e()
                                        }))
                                    };
                                    e()
                                }
                                break;
                            case a.ConnectionState.CONNECTED:
                                try {
                                    await this.authenticate(), this.sendIsLinked(), this.sendGetSessionConfig(), t = !0
                                } catch (s) {}
                                this.updateLastHeartbeat(), setInterval((() => {
                                    this.heartbeat()
                                }), 1e4), this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
                            case a.ConnectionState.CONNECTING:
                        }
                        this.connected !== t && (this.connected = t)
                    })), l.setIncomingDataListener((e => {
                        var t;
                        switch (e.type) {
                            case "Heartbeat":
                                return void this.updateLastHeartbeat();
                            case "IsLinkedOK":
                            case "Linked":
                                {
                                    const t = "IsLinkedOK" === e.type ? e.linked : void 0;this.linked = t || e.onlineGuests > 0;
                                    break
                                }
                            case "GetSessionConfigOK":
                            case "SessionConfigUpdated":
                                this.handleSessionMetadataUpdated(e.metadata);
                                break;
                            case "Event":
                                this.handleIncomingEvent(e)
                        }
                        void 0 !== e.id && (null === (t = this.requestResolutions.get(e.id)) || void 0 === t || t(e))
                    })), this.ws = l, this.http = new i.WalletLinkHTTP(s, t.id, t.key)
                }
                connect() {
                    if (this.destroyed) throw new Error("instance is destroyed");
                    this.ws.connect()
                }
                destroy() {
                    this.destroyed = !0, this.ws.disconnect(), this.listener = void 0
                }
                get isDestroyed() {
                    return this.destroyed
                }
                get connected() {
                    return this._connected
                }
                set connected(e) {
                    var t;
                    this._connected = e, e && (null === (t = this.onceConnected) || void 0 === t || t.call(this))
                }
                setOnceConnected(e) {
                    return new Promise((t => {
                        this.connected ? e().then(t) : this.onceConnected = () => {
                            e().then(t), this.onceConnected = void 0
                        }
                    }))
                }
                get linked() {
                    return this._linked
                }
                set linked(e) {
                    var t, s;
                    this._linked = e, e && (null === (t = this.onceLinked) || void 0 === t || t.call(this)), null === (s = this.listener) || void 0 === s || s.linkedUpdated(e)
                }
                setOnceLinked(e) {
                    return new Promise((t => {
                        this.linked ? e().then(t) : this.onceLinked = () => {
                            e().then(t), this.onceLinked = void 0
                        }
                    }))
                }
                async handleIncomingEvent(e) {
                    var t;
                    if ("Event" === e.type && "Web3Response" === e.event) {
                        const s = await this.cipher.decrypt(e.data),
                            r = JSON.parse(s);
                        if ("WEB3_RESPONSE" !== r.type) return;
                        null === (t = this.listener) || void 0 === t || t.handleWeb3ResponseMessage(r)
                    }
                }
                async checkUnseenEvents() {
                    if (this.connected) {
                        await new Promise((e => setTimeout(e, 250)));
                        try {
                            await this.fetchUnseenEventsAPI()
                        } catch (e) {
                            console.error("Unable to check for unseen events", e)
                        }
                    } else this.shouldFetchUnseenEventsOnConnect = !0
                }
                async fetchUnseenEventsAPI() {
                    this.shouldFetchUnseenEventsOnConnect = !1;
                    (await this.http.fetchUnseenEvents()).forEach((e => this.handleIncomingEvent(e)))
                }
                async setSessionMetadata(e, t) {
                    const s = {
                        type: "SetSessionConfig",
                        id: (0, o.IntNumber)(this.nextReqId++),
                        sessionId: this.session.id,
                        metadata: {
                            [e]: t
                        }
                    };
                    return this.setOnceConnected((async () => {
                        const e = await this.makeRequest(s);
                        if ("Fail" === e.type) throw new Error(e.error || "failed to set session metadata")
                    }))
                }
                async publishEvent(e, t) {
                    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    const r = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, t), {
                            origin: location.origin,
                            relaySource: "coinbaseWalletExtension" in window && window.coinbaseWalletExtension ? "injected_sdk" : "sdk"
                        }))),
                        n = {
                            type: "PublishEvent",
                            id: (0, o.IntNumber)(this.nextReqId++),
                            sessionId: this.session.id,
                            event: e,
                            data: r,
                            callWebhook: s
                        };
                    return this.setOnceLinked((async () => {
                        const e = await this.makeRequest(n);
                        if ("Fail" === e.type) throw new Error(e.error || "failed to publish event");
                        return e.eventId
                    }))
                }
                sendData(e) {
                    this.ws.sendData(JSON.stringify(e))
                }
                updateLastHeartbeat() {
                    this.lastHeartbeatResponse = Date.now()
                }
                heartbeat() {
                    if (Date.now() - this.lastHeartbeatResponse > 2e4) this.ws.disconnect();
                    else try {
                        this.ws.sendData("h")
                    } catch (e) {}
                }
                async makeRequest(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6e4;
                    const s = e.id;
                    let r;
                    return this.sendData(e), Promise.race([new Promise(((e, n) => {
                        r = window.setTimeout((() => {
                            n(new Error(`request ${s} timed out`))
                        }), t)
                    })), new Promise((e => {
                        this.requestResolutions.set(s, (t => {
                            clearTimeout(r), e(t), this.requestResolutions.delete(s)
                        }))
                    }))])
                }
                async authenticate() {
                    const e = {
                            type: "HostSession",
                            id: (0, o.IntNumber)(this.nextReqId++),
                            sessionId: this.session.id,
                            sessionKey: this.session.key
                        },
                        t = await this.makeRequest(e);
                    if ("Fail" === t.type) throw new Error(t.error || "failed to authenticate")
                }
                sendIsLinked() {
                    const e = {
                        type: "IsLinked",
                        id: (0, o.IntNumber)(this.nextReqId++),
                        sessionId: this.session.id
                    };
                    this.sendData(e)
                }
                sendGetSessionConfig() {
                    const e = {
                        type: "GetSessionConfig",
                        id: (0, o.IntNumber)(this.nextReqId++),
                        sessionId: this.session.id
                    };
                    this.sendData(e)
                }
            }
        },
        84473: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkHTTP = void 0;
            t.WalletLinkHTTP = class {
                constructor(e, t, s) {
                    this.linkAPIUrl = e, this.sessionId = t;
                    const r = `${t}:${s}`;
                    this.auth = `Basic ${btoa(r)}`
                }
                async markUnseenEventsAsSeen(e) {
                    return Promise.all(e.map((e => fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                        method: "POST",
                        headers: {
                            Authorization: this.auth
                        }
                    })))).catch((e => console.error("Unabled to mark event as failed:", e)))
                }
                async fetchUnseenEvents() {
                    var e;
                    const t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
                        headers: {
                            Authorization: this.auth
                        }
                    });
                    if (t.ok) {
                        const {
                            events: s,
                            error: r
                        } = await t.json();
                        if (r) throw new Error(`Check unseen events failed: ${r}`);
                        const n = null !== (e = null === s || void 0 === s ? void 0 : s.filter((e => "Web3Response" === e.event)).map((e => ({
                            type: "Event",
                            sessionId: this.sessionId,
                            eventId: e.id,
                            event: e.event,
                            data: e.data
                        })))) && void 0 !== e ? e : [];
                        return this.markUnseenEventsAsSeen(n), n
                    }
                    throw new Error(`Check unseen events failed: ${t.status}`)
                }
            }
        },
        3602: (e, t) => {
            "use strict";
            var s;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.WalletLinkWebSocket = t.ConnectionState = void 0,
                function(e) {
                    e[e.DISCONNECTED = 0] = "DISCONNECTED", e[e.CONNECTING = 1] = "CONNECTING", e[e.CONNECTED = 2] = "CONNECTED"
                }(s || (t.ConnectionState = s = {}));
            t.WalletLinkWebSocket = class {
                setConnectionStateListener(e) {
                    this.connectionStateListener = e
                }
                setIncomingDataListener(e) {
                    this.incomingDataListener = e
                }
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WebSocket;
                    this.WebSocketClass = t, this.webSocket = null, this.pendingData = [], this.url = e.replace(/^http/, "ws")
                }
                async connect() {
                    if (this.webSocket) throw new Error("webSocket object is not null");
                    return new Promise(((e, t) => {
                        var r;
                        let n;
                        try {
                            this.webSocket = n = new this.WebSocketClass(this.url)
                        } catch (i) {
                            return void t(i)
                        }
                        null === (r = this.connectionStateListener) || void 0 === r || r.call(this, s.CONNECTING), n.onclose = e => {
                            var r;
                            this.clearWebSocket(), t(new Error(`websocket error ${e.code}: ${e.reason}`)), null === (r = this.connectionStateListener) || void 0 === r || r.call(this, s.DISCONNECTED)
                        }, n.onopen = t => {
                            var r;
                            if (e(), null === (r = this.connectionStateListener) || void 0 === r || r.call(this, s.CONNECTED), this.pendingData.length > 0) {
                                [...this.pendingData].forEach((e => this.sendData(e))), this.pendingData = []
                            }
                        }, n.onmessage = e => {
                            var t, s;
                            if ("h" === e.data) null === (t = this.incomingDataListener) || void 0 === t || t.call(this, {
                                type: "Heartbeat"
                            });
                            else try {
                                const t = JSON.parse(e.data);
                                null === (s = this.incomingDataListener) || void 0 === s || s.call(this, t)
                            } catch (r) {}
                        }
                    }))
                }
                disconnect() {
                    var e;
                    const {
                        webSocket: t
                    } = this;
                    if (t) {
                        this.clearWebSocket(), null === (e = this.connectionStateListener) || void 0 === e || e.call(this, s.DISCONNECTED), this.connectionStateListener = void 0, this.incomingDataListener = void 0;
                        try {
                            t.close()
                        } catch (r) {}
                    }
                }
                sendData(e) {
                    const {
                        webSocket: t
                    } = this;
                    if (!t) return this.pendingData.push(e), void this.connect();
                    t.send(e)
                }
                clearWebSocket() {
                    const {
                        webSocket: e
                    } = this;
                    e && (this.webSocket = null, e.onclose = null, e.onerror = null, e.onmessage = null, e.onopen = null)
                }
            }
        },
        28168: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.APP_VERSION_KEY = t.LOCAL_STORAGE_ADDRESSES_KEY = t.WALLET_USER_NAME_KEY = void 0, t.WALLET_USER_NAME_KEY = "walletUsername", t.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses", t.APP_VERSION_KEY = "AppVersion"
        },
        14145: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkSession = void 0;
            const r = s(43760),
                n = s(16082),
                i = "session:id",
                a = "session:secret",
                o = "session:linked";
            class c {
                constructor(e, t, s, i) {
                    this._storage = e, this._id = t || (0, n.randomBytesHex)(16), this._secret = s || (0, n.randomBytesHex)(32), this._key = (new r.sha256).update(`${this._id}, ${this._secret} WalletLink`).digest("hex"), this._linked = !!i
                }
                static load(e) {
                    const t = e.getItem(i),
                        s = e.getItem(o),
                        r = e.getItem(a);
                    return t && r ? new c(e, t, r, "1" === s) : null
                }
                get id() {
                    return this._id
                }
                get secret() {
                    return this._secret
                }
                get key() {
                    return this._key
                }
                get linked() {
                    return this._linked
                }
                set linked(e) {
                    this._linked = e, this.persistLinked()
                }
                save() {
                    return this._storage.setItem(i, this._id), this._storage.setItem(a, this._secret), this.persistLinked(), this
                }
                persistLinked() {
                    this._storage.setItem(o, this._linked ? "1" : "0")
                }
            }
            t.WalletLinkSession = c
        },
        48656: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isErrorResponse = void 0, t.isErrorResponse = function(e) {
                return void 0 !== e.errorMessage
            }
        },
        14416: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WLMobileRelayUI = void 0;
            const r = s(14576),
                n = s(51261),
                i = s(3502);
            t.WLMobileRelayUI = class {
                constructor() {
                    this.attached = !1, this.redirectDialog = new r.RedirectDialog
                }
                attach() {
                    if (this.attached) throw new Error("Coinbase Wallet SDK UI is already attached");
                    this.redirectDialog.attach(), this.attached = !0
                }
                redirectToCoinbaseWallet(e) {
                    const t = new URL(i.CBW_MOBILE_DEEPLINK_URL);
                    t.searchParams.append("redirect_url", (0, n.getLocation)().href), e && t.searchParams.append("wl_url", e);
                    const s = document.createElement("a");
                    s.target = "cbw-opener", s.href = t.href, s.rel = "noreferrer noopener", s.click()
                }
                openCoinbaseWalletDeeplink(e) {
                    this.redirectDialog.present({
                        title: "Redirecting to Coinbase Wallet...",
                        buttonText: "Open",
                        onButtonClick: () => {
                            this.redirectToCoinbaseWallet(e)
                        }
                    }), setTimeout((() => {
                        this.redirectToCoinbaseWallet(e)
                    }), 99)
                }
                showConnecting(e) {
                    return () => {
                        this.redirectDialog.clear()
                    }
                }
            }
        },
        91332: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkRelayUI = void 0;
            const r = s(96900),
                n = s(46494);
            t.WalletLinkRelayUI = class {
                constructor() {
                    this.attached = !1, this.snackbar = new n.Snackbar
                }
                attach() {
                    if (this.attached) throw new Error("Coinbase Wallet SDK UI is already attached");
                    const e = document.documentElement,
                        t = document.createElement("div");
                    t.className = "-cbwsdk-css-reset", e.appendChild(t), this.snackbar.attach(t), this.attached = !0, (0, r.injectCssReset)()
                }
                showConnecting(e) {
                    let t;
                    return t = e.isUnlinkedErrorState ? {
                        autoExpand: !0,
                        message: "Connection lost",
                        menuItems: [{
                            isRed: !1,
                            info: "Reset connection",
                            svgWidth: "10",
                            svgHeight: "11",
                            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                            defaultFillRule: "evenodd",
                            defaultClipRule: "evenodd",
                            onClick: e.onResetConnection
                        }]
                    } : {
                        message: "Confirm on phone",
                        menuItems: [{
                            isRed: !0,
                            info: "Cancel transaction",
                            svgWidth: "11",
                            svgHeight: "11",
                            path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                            defaultFillRule: "inherit",
                            defaultClipRule: "inherit",
                            onClick: e.onCancel
                        }, {
                            isRed: !1,
                            info: "Reset connection",
                            svgWidth: "10",
                            svgHeight: "11",
                            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                            defaultFillRule: "evenodd",
                            defaultClipRule: "evenodd",
                            onClick: e.onResetConnection
                        }]
                    }, this.snackbar.presentItem(t)
                }
            }
        },
        96522: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
        },
        14576: function(e, t, s) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RedirectDialog = void 0;
            const n = r(s(16547)),
                i = s(27866),
                a = s(96900),
                o = s(46494),
                c = s(51261),
                d = r(s(96522));
            t.RedirectDialog = class {
                constructor() {
                    this.root = null, this.darkMode = (0, c.isDarkMode)()
                }
                attach() {
                    const e = document.documentElement;
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-css-reset", e.appendChild(this.root), (0, a.injectCssReset)()
                }
                present(e) {
                    this.render(e)
                }
                clear() {
                    this.render(null)
                }
                render(e) {
                    this.root && ((0, i.render)(null, this.root), e && (0, i.render)((0, i.h)(l, Object.assign({}, e, {
                        onDismiss: () => {
                            this.clear()
                        },
                        darkMode: this.darkMode
                    })), this.root))
                }
            };
            const l = e => {
                let {
                    title: t,
                    buttonText: s,
                    darkMode: r,
                    onButtonClick: a,
                    onDismiss: c
                } = e;
                const l = r ? "dark" : "light";
                return (0, i.h)(o.SnackbarContainer, {
                    darkMode: r
                }, (0, i.h)("div", {
                    class: "-cbwsdk-redirect-dialog"
                }, (0, i.h)("style", null, d.default), (0, i.h)("div", {
                    class: "-cbwsdk-redirect-dialog-backdrop",
                    onClick: c
                }), (0, i.h)("div", {
                    class: (0, n.default)("-cbwsdk-redirect-dialog-box", l)
                }, (0, i.h)("p", null, t), (0, i.h)("button", {
                    onClick: a
                }, s))))
            }
        },
        57868: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
        },
        46494: function(e, t, s) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0;
            const n = r(s(16547)),
                i = s(27866),
                a = s(67840),
                o = s(51261),
                c = r(s(57868));
            t.Snackbar = class {
                constructor() {
                    this.items = new Map, this.nextItemKey = 0, this.root = null, this.darkMode = (0, o.isDarkMode)()
                }
                attach(e) {
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", e.appendChild(this.root), this.render()
                }
                presentItem(e) {
                    const t = this.nextItemKey++;
                    return this.items.set(t, e), this.render(), () => {
                        this.items.delete(t), this.render()
                    }
                }
                clear() {
                    this.items.clear(), this.render()
                }
                render() {
                    this.root && (0, i.render)((0, i.h)("div", null, (0, i.h)(t.SnackbarContainer, {
                        darkMode: this.darkMode
                    }, Array.from(this.items.entries()).map((e => {
                        let [s, r] = e;
                        return (0, i.h)(t.SnackbarInstance, Object.assign({}, r, {
                            key: s
                        }))
                    })))), this.root)
                }
            };
            t.SnackbarContainer = e => (0, i.h)("div", {
                class: (0, n.default)("-cbwsdk-snackbar-container")
            }, (0, i.h)("style", null, c.default), (0, i.h)("div", {
                class: "-cbwsdk-snackbar"
            }, e.children));
            t.SnackbarInstance = e => {
                let {
                    autoExpand: t,
                    message: s,
                    menuItems: r
                } = e;
                const [o, c] = (0, a.useState)(!0), [d, l] = (0, a.useState)(null !== t && void 0 !== t && t);
                (0, a.useEffect)((() => {
                    const e = [window.setTimeout((() => {
                        c(!1)
                    }), 1), window.setTimeout((() => {
                        l(!0)
                    }), 1e4)];
                    return () => {
                        e.forEach(window.clearTimeout)
                    }
                }));
                return (0, i.h)("div", {
                    class: (0, n.default)("-cbwsdk-snackbar-instance", o && "-cbwsdk-snackbar-instance-hidden", d && "-cbwsdk-snackbar-instance-expanded")
                }, (0, i.h)("div", {
                    class: "-cbwsdk-snackbar-instance-header",
                    onClick: () => {
                        l(!d)
                    }
                }, (0, i.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                    class: "-cbwsdk-snackbar-instance-header-cblogo"
                }), " ", (0, i.h)("div", {
                    class: "-cbwsdk-snackbar-instance-header-message"
                }, s), (0, i.h)("div", {
                    class: "-gear-container"
                }, !d && (0, i.h)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, i.h)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "12",
                    fill: "#F5F7F8"
                })), (0, i.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand"
                }))), r && r.length > 0 && (0, i.h)("div", {
                    class: "-cbwsdk-snackbar-instance-menu"
                }, r.map(((e, t) => (0, i.h)("div", {
                    class: (0, n.default)("-cbwsdk-snackbar-instance-menu-item", e.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"),
                    onClick: e.onClick,
                    key: t
                }, (0, i.h)("svg", {
                    width: e.svgWidth,
                    height: e.svgHeight,
                    viewBox: "0 0 10 11",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, i.h)("path", {
                    "fill-rule": e.defaultFillRule,
                    "clip-rule": e.defaultClipRule,
                    d: e.path,
                    fill: "#AAAAAA"
                })), (0, i.h)("span", {
                    class: (0, n.default)("-cbwsdk-snackbar-instance-menu-item-info", e.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red")
                }, e.info))))))
            }
        },
        3846: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
        },
        96900: function(e, t, s) {
            "use strict";
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.injectCssReset = void 0;
            const n = r(s(3846));
            t.injectCssReset = function() {
                const e = document.createElement("style");
                e.type = "text/css", e.appendChild(document.createTextNode(n.default)), document.documentElement.appendChild(e)
            }
        },
        51261: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isDarkMode = t.isMobileWeb = t.getLocation = t.createQrUrl = void 0, t.createQrUrl = function(e, t, s, r, n, i) {
                const a = r ? "parent-id" : "id";
                return `${s}/#/link?${new URLSearchParams({[a]:e,secret:t,server:s,v:n,chainId:i.toString()}).toString()}`
            }, t.getLocation = function() {
                try {
                    return function() {
                        try {
                            return null !== window.frameElement
                        } catch (e) {
                            return !1
                        }
                    }() && window.top ? window.top.location : window.location
                } catch (e) {
                    return window.location
                }
            }, t.isMobileWeb = function() {
                var e;
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(null === (e = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === e ? void 0 : e.userAgent)
            }, t.isDarkMode = function() {
                var e, t;
                return null !== (t = null === (e = null === window || void 0 === window ? void 0 : window.matchMedia) || void 0 === e ? void 0 : e.call(window, "(prefers-color-scheme: dark)").matches) && void 0 !== t && t
            }
        },
        51430: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ScopedLocalStorage = void 0;
            class s {
                constructor(e, t) {
                    this.scope = e, this.module = t
                }
                setItem(e, t) {
                    localStorage.setItem(this.scopedKey(e), t)
                }
                getItem(e) {
                    return localStorage.getItem(this.scopedKey(e))
                }
                removeItem(e) {
                    localStorage.removeItem(this.scopedKey(e))
                }
                clear() {
                    const e = this.scopedKey(""),
                        t = [];
                    for (let s = 0; s < localStorage.length; s++) {
                        const r = localStorage.key(s);
                        "string" === typeof r && r.startsWith(e) && t.push(r)
                    }
                    t.forEach((e => localStorage.removeItem(e)))
                }
                scopedKey(e) {
                    return `-${this.scope}${this.module?`:${this.module}`:""}:${e}`
                }
                static clearAll() {
                    new s("CBWSDK").clear(), new s("walletlink").clear()
                }
            }
            t.ScopedLocalStorage = s
        },
        25945: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decryptContent = t.encryptContent = t.importKeyFromHexString = t.exportKeyToHexString = t.decrypt = t.encrypt = t.deriveSharedSecret = t.generateKeyPair = void 0;
            const r = s(16082);
            async function n(e, t) {
                const s = crypto.getRandomValues(new Uint8Array(12));
                return {
                    iv: s,
                    cipherText: await crypto.subtle.encrypt({
                        name: "AES-GCM",
                        iv: s
                    }, e, (new TextEncoder).encode(t))
                }
            }
            async function i(e, t) {
                let {
                    iv: s,
                    cipherText: r
                } = t;
                const n = await crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: s
                }, e, r);
                return (new TextDecoder).decode(n)
            }

            function a(e) {
                switch (e) {
                    case "public":
                        return "spki";
                    case "private":
                        return "pkcs8"
                }
            }
            t.generateKeyPair = async function() {
                return crypto.subtle.generateKey({
                    name: "ECDH",
                    namedCurve: "P-256"
                }, !0, ["deriveKey"])
            }, t.deriveSharedSecret = async function(e, t) {
                return crypto.subtle.deriveKey({
                    name: "ECDH",
                    public: t
                }, e, {
                    name: "AES-GCM",
                    length: 256
                }, !1, ["encrypt", "decrypt"])
            }, t.encrypt = n, t.decrypt = i, t.exportKeyToHexString = async function(e, t) {
                const s = a(e),
                    n = await crypto.subtle.exportKey(s, t);
                return (0, r.uint8ArrayToHex)(new Uint8Array(n))
            }, t.importKeyFromHexString = async function(e, t) {
                const s = a(e),
                    n = (0, r.hexStringToUint8Array)(t).buffer;
                return await crypto.subtle.importKey(s, n, {
                    name: "ECDH",
                    namedCurve: "P-256"
                }, !0, "private" === e ? ["deriveKey"] : [])
            }, t.encryptContent = async function(e, t) {
                return n(t, JSON.stringify(e, ((e, t) => {
                    if (!(t instanceof Error)) return t;
                    const s = t;
                    return Object.assign(Object.assign({}, s.code ? {
                        code: s.code
                    } : {}), {
                        message: s.message
                    })
                })))
            }, t.decryptContent = async function(e, t) {
                return JSON.parse(await i(t, e))
            }
        },
        1263: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.checkErrorForInvalidRequestArgs = t.getCoinbaseInjectedProvider = t.getCoinbaseInjectedSigner = t.fetchRPCRequest = void 0;
            const r = s(85491),
                n = s(42186);

            function i() {
                return globalThis.coinbaseWalletSigner
            }
            t.fetchRPCRequest = async function(e, t) {
                if (!t.rpcUrl) throw n.standardErrors.rpc.internal("No RPC URL set for chain");
                const s = Object.assign(Object.assign({}, e), {
                        jsonrpc: "2.0",
                        id: crypto.randomUUID()
                    }),
                    i = await window.fetch(t.rpcUrl, {
                        method: "POST",
                        body: JSON.stringify(s),
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Cbw-Sdk-Version": r.LIB_VERSION
                        }
                    });
                return (await i.json()).result
            }, t.getCoinbaseInjectedSigner = i, t.getCoinbaseInjectedProvider = function(e) {
                let {
                    metadata: t,
                    preference: s
                } = e;
                var r;
                if ("smartWalletOnly" !== s.options) {
                    if (i()) return;
                    const e = globalThis.coinbaseWalletExtension;
                    if (e) {
                        const {
                            appName: s,
                            appLogoUrl: n,
                            appChainIds: i
                        } = t;
                        return null === (r = e.setAppInfo) || void 0 === r || r.call(e, s, n, i), e
                    }
                }
                const n = function() {
                    var e, t;
                    try {
                        const s = globalThis;
                        return null !== (e = s.ethereum) && void 0 !== e ? e : null === (t = s.top) || void 0 === t ? void 0 : t.ethereum
                    } catch (s) {
                        return
                    }
                }();
                if (null === n || void 0 === n ? void 0 : n.isCoinbaseBrowser) return n
            }, t.checkErrorForInvalidRequestArgs = function(e) {
                if (!e || "object" !== typeof e || Array.isArray(e)) return n.standardErrors.rpc.invalidParams({
                    message: "Expected a single, non-array, object argument.",
                    data: e
                });
                const {
                    method: t,
                    params: s
                } = e;
                return "string" !== typeof t || 0 === t.length ? n.standardErrors.rpc.invalidParams({
                    message: "'args.method' must be a non-empty string.",
                    data: e
                }) : void 0 === s || Array.isArray(s) || "object" === typeof s && null !== s ? void 0 : n.standardErrors.rpc.invalidParams({
                    message: "'args.params' must be an object or array if provided.",
                    data: e
                })
            }
        },
        90462: (e, t, s) => {
            var r = s(88381).Buffer;
            const n = s(56270);

            function i(e) {
                return e.startsWith("int[") ? "int256" + e.slice(3) : "int" === e ? "int256" : e.startsWith("uint[") ? "uint256" + e.slice(4) : "uint" === e ? "uint256" : e.startsWith("fixed[") ? "fixed128x128" + e.slice(5) : "fixed" === e ? "fixed128x128" : e.startsWith("ufixed[") ? "ufixed128x128" + e.slice(6) : "ufixed" === e ? "ufixed128x128" : e
            }

            function a(e) {
                return parseInt(/^\D+(\d+)$/.exec(e)[1], 10)
            }

            function o(e) {
                var t = /^\D+(\d+)x(\d+)$/.exec(e);
                return [parseInt(t[1], 10), parseInt(t[2], 10)]
            }

            function c(e) {
                var t = e.match(/(.*)\[(.*?)\]$/);
                return t ? "" === t[2] ? "dynamic" : parseInt(t[2], 10) : null
            }

            function d(e) {
                var t = typeof e;
                if ("string" === t || "number" === t) return BigInt(e);
                if ("bigint" === t) return e;
                throw new Error("Argument is not a number")
            }

            function l(e, t) {
                var s, i, h, u;
                if ("address" === e) return l("uint160", d(t));
                if ("bool" === e) return l("uint8", t ? 1 : 0);
                if ("string" === e) return l("bytes", new r(t, "utf8"));
                if (function(e) {
                        return e.lastIndexOf("]") === e.length - 1
                    }(e)) {
                    if ("undefined" === typeof t.length) throw new Error("Not an array?");
                    if ("dynamic" !== (s = c(e)) && 0 !== s && t.length > s) throw new Error("Elements exceed array size: " + s);
                    for (u in h = [], e = e.slice(0, e.lastIndexOf("[")), "string" === typeof t && (t = JSON.parse(t)), t) h.push(l(e, t[u]));
                    if ("dynamic" === s) {
                        var p = l("uint256", t.length);
                        h.unshift(p)
                    }
                    return r.concat(h)
                }
                if ("bytes" === e) return t = new r(t), h = r.concat([l("uint256", t.length), t]), t.length % 32 !== 0 && (h = r.concat([h, n.zeros(32 - t.length % 32)])), h;
                if (e.startsWith("bytes")) {
                    if ((s = a(e)) < 1 || s > 32) throw new Error("Invalid bytes<N> width: " + s);
                    return n.setLengthRight(t, 32)
                }
                if (e.startsWith("uint")) {
                    if ((s = a(e)) % 8 || s < 8 || s > 256) throw new Error("Invalid uint<N> width: " + s);
                    i = d(t);
                    const r = n.bitLengthFromBigInt(i);
                    if (r > s) throw new Error("Supplied uint exceeds width: " + s + " vs " + r);
                    if (i < 0) throw new Error("Supplied uint is negative");
                    return n.bufferBEFromBigInt(i, 32)
                }
                if (e.startsWith("int")) {
                    if ((s = a(e)) % 8 || s < 8 || s > 256) throw new Error("Invalid int<N> width: " + s);
                    i = d(t);
                    const r = n.bitLengthFromBigInt(i);
                    if (r > s) throw new Error("Supplied int exceeds width: " + s + " vs " + r);
                    const o = n.twosFromBigInt(i, 256);
                    return n.bufferBEFromBigInt(o, 32)
                }
                if (e.startsWith("ufixed")) {
                    if (s = o(e), (i = d(t)) < 0) throw new Error("Supplied ufixed is negative");
                    return l("uint256", i * BigInt(2) ** BigInt(s[1]))
                }
                if (e.startsWith("fixed")) return s = o(e), l("int256", d(t) * BigInt(2) ** BigInt(s[1]));
                throw new Error("Unsupported or invalid type: " + e)
            }

            function h(e) {
                return "string" === e || "bytes" === e || "dynamic" === c(e)
            }

            function u(e, t) {
                if (e.length !== t.length) throw new Error("Number of types are not matching the values");
                for (var s, o, c = [], l = 0; l < e.length; l++) {
                    var h = i(e[l]),
                        u = t[l];
                    if ("bytes" === h) c.push(u);
                    else if ("string" === h) c.push(new r(u, "utf8"));
                    else if ("bool" === h) c.push(new r(u ? "01" : "00", "hex"));
                    else if ("address" === h) c.push(n.setLength(u, 20));
                    else if (h.startsWith("bytes")) {
                        if ((s = a(h)) < 1 || s > 32) throw new Error("Invalid bytes<N> width: " + s);
                        c.push(n.setLengthRight(u, s))
                    } else if (h.startsWith("uint")) {
                        if ((s = a(h)) % 8 || s < 8 || s > 256) throw new Error("Invalid uint<N> width: " + s);
                        o = d(u);
                        const e = n.bitLengthFromBigInt(o);
                        if (e > s) throw new Error("Supplied uint exceeds width: " + s + " vs " + e);
                        c.push(n.bufferBEFromBigInt(o, s / 8))
                    } else {
                        if (!h.startsWith("int")) throw new Error("Unsupported or invalid type: " + h); {
                            if ((s = a(h)) % 8 || s < 8 || s > 256) throw new Error("Invalid int<N> width: " + s);
                            o = d(u);
                            const e = n.bitLengthFromBigInt(o);
                            if (e > s) throw new Error("Supplied int exceeds width: " + s + " vs " + e);
                            const t = n.twosFromBigInt(o, s);
                            c.push(n.bufferBEFromBigInt(t, s / 8))
                        }
                    }
                }
                return r.concat(c)
            }
            e.exports = {
                rawEncode: function(e, t) {
                    var s = [],
                        n = [],
                        a = 32 * e.length;
                    for (var o in e) {
                        var c = i(e[o]),
                            d = l(c, t[o]);
                        h(c) ? (s.push(l("uint256", a)), n.push(d), a += d.length) : s.push(d)
                    }
                    return r.concat(s.concat(n))
                },
                solidityPack: u,
                soliditySHA3: function(e, t) {
                    return n.keccak(u(e, t))
                }
            }
        },
        30764: (e, t, s) => {
            var r = s(88381).Buffer;
            const n = s(56270),
                i = s(90462),
                a = {
                    type: "object",
                    properties: {
                        types: {
                            type: "object",
                            additionalProperties: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string"
                                        },
                                        type: {
                                            type: "string"
                                        }
                                    },
                                    required: ["name", "type"]
                                }
                            }
                        },
                        primaryType: {
                            type: "string"
                        },
                        domain: {
                            type: "object"
                        },
                        message: {
                            type: "object"
                        }
                    },
                    required: ["types", "primaryType", "domain", "message"]
                },
                o = {
                    encodeData(e, t, s) {
                        let a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        const o = ["bytes32"],
                            c = [this.hashType(e, s)];
                        if (a) {
                            const d = (e, t, o) => {
                                if (void 0 !== s[t]) return ["bytes32", null == o ? "0x0000000000000000000000000000000000000000000000000000000000000000" : n.keccak(this.encodeData(t, o, s, a))];
                                if (void 0 === o) throw new Error(`missing value for field ${e} of type ${t}`);
                                if ("bytes" === t) return ["bytes32", n.keccak(o)];
                                if ("string" === t) return "string" === typeof o && (o = r.from(o, "utf8")), ["bytes32", n.keccak(o)];
                                if (t.lastIndexOf("]") === t.length - 1) {
                                    const s = t.slice(0, t.lastIndexOf("[")),
                                        r = o.map((t => d(e, s, t)));
                                    return ["bytes32", n.keccak(i.rawEncode(r.map((e => {
                                        let [t] = e;
                                        return t
                                    })), r.map((e => {
                                        let [, t] = e;
                                        return t
                                    }))))]
                                }
                                return [t, o]
                            };
                            for (const r of s[e]) {
                                const [e, s] = d(r.name, r.type, t[r.name]);
                                o.push(e), c.push(s)
                            }
                        } else
                            for (const i of s[e]) {
                                let e = t[i.name];
                                if (void 0 !== e)
                                    if ("bytes" === i.type) o.push("bytes32"), e = n.keccak(e), c.push(e);
                                    else if ("string" === i.type) o.push("bytes32"), "string" === typeof e && (e = r.from(e, "utf8")), e = n.keccak(e), c.push(e);
                                else if (void 0 !== s[i.type]) o.push("bytes32"), e = n.keccak(this.encodeData(i.type, e, s, a)), c.push(e);
                                else {
                                    if (i.type.lastIndexOf("]") === i.type.length - 1) throw new Error("Arrays currently unimplemented in encodeData");
                                    o.push(i.type), c.push(e)
                                }
                            }
                        return i.rawEncode(o, c)
                    },
                    encodeType(e, t) {
                        let s = "",
                            r = this.findTypeDependencies(e, t).filter((t => t !== e));
                        r = [e].concat(r.sort());
                        for (const n of r) {
                            if (!t[n]) throw new Error("No type definition specified: " + n);
                            s += n + "(" + t[n].map((e => {
                                let {
                                    name: t,
                                    type: s
                                } = e;
                                return s + " " + t
                            })).join(",") + ")"
                        }
                        return s
                    },
                    findTypeDependencies(e, t) {
                        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        if (e = e.match(/^\w*/)[0], s.includes(e) || void 0 === t[e]) return s;
                        s.push(e);
                        for (const r of t[e])
                            for (const e of this.findTypeDependencies(r.type, t, s)) !s.includes(e) && s.push(e);
                        return s
                    },
                    hashStruct(e, t, s) {
                        let r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        return n.keccak(this.encodeData(e, t, s, r))
                    },
                    hashType(e, t) {
                        return n.keccak(this.encodeType(e, t))
                    },
                    sanitizeData(e) {
                        const t = {};
                        for (const s in a.properties) e[s] && (t[s] = e[s]);
                        return t.types && (t.types = Object.assign({
                            EIP712Domain: []
                        }, t.types)), t
                    },
                    hash(e) {
                        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        const s = this.sanitizeData(e),
                            i = [r.from("1901", "hex")];
                        return i.push(this.hashStruct("EIP712Domain", s.domain, s.types, t)), "EIP712Domain" !== s.primaryType && i.push(this.hashStruct(s.primaryType, s.message, s.types, t)), n.keccak(r.concat(i))
                    }
                };
            e.exports = {
                TYPED_MESSAGE_SCHEMA: a,
                TypedDataUtils: o,
                hashForSignTypedDataLegacy: function(e) {
                    return function(e) {
                        const t = new Error("Expect argument to be non-empty array");
                        if ("object" !== typeof e || !e.length) throw t;
                        const s = e.map((function(e) {
                                return "bytes" === e.type ? n.toBuffer(e.value) : e.value
                            })),
                            r = e.map((function(e) {
                                return e.type
                            })),
                            a = e.map((function(e) {
                                if (!e.name) throw t;
                                return e.type + " " + e.name
                            }));
                        return i.soliditySHA3(["bytes32", "bytes32"], [i.soliditySHA3(new Array(e.length).fill("string"), a), i.soliditySHA3(r, s)])
                    }(e.data)
                },
                hashForSignTypedData_v3: function(e) {
                    return o.hash(e.data, !1)
                },
                hashForSignTypedData_v4: function(e) {
                    return o.hash(e.data)
                }
            }
        },
        56270: (e, t, s) => {
            var r = s(88381).Buffer;
            const n = s(94258);

            function i(e) {
                return r.allocUnsafe(e).fill(0)
            }

            function a(e, t) {
                let s = e.toString(16);
                s.length % 2 !== 0 && (s = "0" + s);
                const n = s.match(/.{1,2}/g).map((e => parseInt(e, 16)));
                for (; n.length < t;) n.unshift(0);
                return r.from(n)
            }

            function o(e, t, s) {
                const r = i(t);
                return e = c(e), s ? e.length < t ? (e.copy(r), r) : e.slice(0, t) : e.length < t ? (e.copy(r, t - e.length), r) : e.slice(-t)
            }

            function c(e) {
                if (!r.isBuffer(e))
                    if (Array.isArray(e)) e = r.from(e);
                    else if ("string" === typeof e) e = d(e) ? r.from((t = l(e)).length % 2 ? "0" + t : t, "hex") : r.from(e);
                else if ("number" === typeof e) e = intToBuffer(e);
                else if (null === e || void 0 === e) e = r.allocUnsafe(0);
                else if ("bigint" === typeof e) e = a(e);
                else {
                    if (!e.toArray) throw new Error("invalid type");
                    e = r.from(e.toArray())
                }
                var t;
                return e
            }

            function d(e) {
                return "string" === typeof e && e.match(/^0x[0-9A-Fa-f]*$/)
            }

            function l(e) {
                return "string" === typeof e && e.startsWith("0x") ? e.slice(2) : e
            }
            e.exports = {
                zeros: i,
                setLength: o,
                setLengthRight: function(e, t) {
                    return o(e, t, !0)
                },
                isHexString: d,
                stripHexPrefix: l,
                toBuffer: c,
                bufferToHex: function(e) {
                    return "0x" + (e = c(e)).toString("hex")
                },
                keccak: function(e, t) {
                    return e = c(e), t || (t = 256), n("keccak" + t).update(e).digest()
                },
                bitLengthFromBigInt: function(e) {
                    return e.toString(2).length
                },
                bufferBEFromBigInt: a,
                twosFromBigInt: function(e, t) {
                    let s;
                    if (e < 0 n) {
                        s = (~e & (1 n << BigInt(t)) - 1 n) + 1 n
                    } else s = e;
                    return s &= (1 n << BigInt(t)) - 1 n, s
                }
            }
        },
        85491: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LIB_VERSION = void 0, t.LIB_VERSION = "4.0.4"
        }
    }
]);
//# sourceMappingURL=4443.3a9b5a98.chunk.js.map