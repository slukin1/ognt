"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [38425], {
        12146: (e, t, a) => {
            a.d(t, {
                i: () => u,
                n: () => c
            });
            var l = a(10388),
                r = a(13686),
                i = a(9029),
                s = a(61067);
            let o = () => e => {
                    let {
                        queryKey: [, t]
                    } = e;
                    return s.k.Toaster.Post("".concat(i.yI.Ethereum.Proxy), {}, t)
                },
                n = () => e => {
                    let {
                        queryKey: [, {
                            payload: t,
                            nodeUrl: a
                        }]
                    } = e;
                    return s.k.JSON.Post(a, {}, t)
                },
                d = {
                    base: ["ethereum-proxy"],
                    gasPriceEstimation: e => [
                        [...d.base, "gas-price-estimation"], e
                    ],
                    ethereumProxy: e => [
                        [...d.base, e.method], e
                    ],
                    customNode: e => [
                        [...d.base, e.payload.method], e
                    ]
                };

            function c(e) {
                let t = (0, l.getQueryClient)(),
                    a = o(),
                    i = e.method === r.pz || e.method === r.xL ? {
                        gcTime: 18e5,
                        staleTime: 9e5
                    } : {
                        gcTime: 1e3
                    };
                return t.fetchQuery({
                    queryKey: d.ethereumProxy(e),
                    queryFn: a,
                    ...i
                })
            }

            function u(e, t) {
                let a = (0, l.getQueryClient)(),
                    i = n(),
                    s = e.method === r.pz || e.method === r.xL ? {
                        gcTime: 18e5,
                        staleTime: 9e5
                    } : {
                        gcTime: 1e3
                    };
                return a.fetchQuery({
                    queryKey: d.customNode({
                        payload: e,
                        nodeUrl: t
                    }),
                    queryFn: i,
                    ...s
                })
            }
        },
        36138: (e, t, a) => {
            a.d(t, {
                KJ: () => i,
                Z0: () => l,
                uE: () => r
            });
            let l = "magic_intermediary_event",
                r = "magic_wallet",
                i = ["magic_wallet", "magic_show_address", "magic_show_nfts", "magic_show_fiat_onramp", "magic_show_balances", "magic_show_send_tokens_ui"]
        },
        38425: (e, t, a) => {
            a.d(t, {
                m: () => R,
                f: () => S
            });
            var l = a(9029),
                r = a(23043),
                i = a(57296),
                s = a(94623),
                o = a(69442),
                n = a(56233),
                d = a(81407),
                c = a(13686),
                u = a(98312),
                p = a(36138),
                y = a(29958),
                g = a(72102);
            class h {
                constructor(e) {
                    this.router = e
                }
            }
            var m = a(48715),
                v = a(19834),
                _ = a(45467),
                E = a(12146),
                k = a(66358);
            let A = (e, t) => {
                if ((0, k.Yk)(t)) {
                    let a = (0, k.ZR)(t);
                    if (a) return (0, E.i)(e, a)
                }
                return (0, E.n)(e)
            };
            var w = a(9320),
                C = a(33255),
                f = a(54343);
            class P extends h {
                async route(e) {
                    var t, a, l, r, i, s, n, h, _;
                    let E = null == e || null == (t = e.payload) ? void 0 : t.method;
                    if (!E) return;
                    let k = o.P.getState().magicApiKey || "";
                    (0, m.mU)() && (null == e || null == (a = e.payload) ? void 0 : a.id) && (0, g.c)(v.rK.MAGIC_MG_BOX_SEND_RECEIPT, {
                        jsonrpc: "2.0",
                        id: null == e || null == (i = e.payload) ? void 0 : i.id,
                        result: null,
                        error: null
                    });
                    let A = y.U.getActiveRpcPayload();
                    if (E === p.Z0) {
                        if ((null == A ? void 0 : A.id) === (null == e || null == (n = e.payload) || null == (s = n.params[0]) ? void 0 : s.payloadId) || (null == e || null == (_ = e.payload) || null == (h = _.params[0]) ? void 0 : h.eventType) === v.nL.CloseMagicWindow) return this.routeIntermediaryEvent(e);
                        if (!A && !this.isGlobalAppScope) return void logger.warn("Unhandled Dedicated Wallet intermediary event", e.payload)
                    }
                    if (f.qR.includes(k)) return this.routeForbesPayload(e);
                    if (this.isGlobalAppScope) return this.routeToPhantom(e);
                    if (null == (l = d.v[E]) ? void 0 : l.isHeadless) return this.mandrakeRpcService.digestInMandrakeHeadless(e);
                    let w = d.v[E],
                        P = Array.isArray(null == w ? void 0 : w.disabled) ? !w.disabled.includes(k) : !(null == w ? void 0 : w.disabled),
                        D = !!(null == w || null == (r = w.allowlist) ? void 0 : r.includes(k)),
                        I = w && (P || D);
                    return I ? this.mandrakeRpcService.digestInMandrakeUI(e) : (E.startsWith("eth_") || E.startsWith("net_")) && E !== c.hy && E !== c.wp && E !== c.X_ ? this.handleWithEthProxy(e) : I ? void(logger.error("Phantom has been disabled, but a request was sent to Phantom. Rejecting request."), (0, C.kj)(e.payload, u.d.InternalError, u.l.FeatureToggledMisConfigured, {
                        payload: {
                            payload: e.payload,
                            activeRPC: A
                        }
                    })) : this.routeToPhantom(e)
                }
                routeIntermediaryEvent(e) {
                    var t;
                    logger.info("Routed intermediary event", e.payload), y.U.handleRequestEvent(null == e || null == (t = e.payload) ? void 0 : t.params[0])
                }
                routeForbesPayload(e) {
                    var t;
                    let a = null == e || null == (t = e.payload) ? void 0 : t.method;
                    a === v.$G.Login || a === v.$G.NFTCheckout ? this.mandrakeRpcService.digestInMandrakeUI(e) : this.routeToPhantom(e)
                }
                async handleWithEthProxy(e) {
                    let {
                        decodedQueryParams: t
                    } = o.P.getState();
                    try {
                        let {
                            result: a,
                            error: l
                        } = await A(e.payload, t.ethNetwork);
                        l ? (0, C.kj)(e.payload, l.code, l.message, l.data) : (0, _.H)({
                            payload: e.payload,
                            result: a
                        })
                    } catch (t) {
                        (0, C.kj)(e.payload, u.d.InternalError, t.message, t)
                    }
                }
                routeToPhantom(e) {
                    let t = document.getElementById(i.d);
                    t && t.contentWindow && "about:blank" !== t.src ? t.contentWindow.postMessage(e, "*") : ((0, C.kj)(e.payload, u.d.InternalError, u.l.FeatureToggledMisConfigured, {
                        payload: {
                            payload: e.payload
                        }
                    }), logger.error("Phantom iframe not found, postMessage failed", {
                        messageData: e
                    }))
                }
                constructor(e, t = !1) {
                    super(e), this.isGlobalAppScope = t, this.mandrakeRpcService = new w.e(this.router, this.isGlobalAppScope)
                }
            }
            class D {
                addMessageListener() {
                    let {
                        messageEventListenerAdded: e
                    } = o.P.getState();
                    if (!e) try {
                        window.addEventListener("message", e => this.messageHandler(e)), o.P.setState({
                            messageEventListenerAdded: !0
                        })
                    } catch (e) {
                        logger.error("error adding message event listener", null != e ? e : {})
                    }
                }
                constructor(e, t) {
                    this.encodedQueryParams = e, this.accessAllowlists = t, this.addMessageListener()
                }
            }
            var I = a(49809);
            class R extends D {
                addMessageListener() {
                    let {
                        messageEventListenerAdded: e
                    } = o.P.getState();
                    if (!e) try {
                        window.addEventListener("message", e => this.messageHandler(e)), o.P.setState({
                            messageEventListenerAdded: !0
                        })
                    } catch (e) {
                        logger.error("error adding message event listener", null != e ? e : {})
                    }
                }
                async messageHandler(e) {
                    try {
                        let t = e.data,
                            a = e => {
                                var a;
                                return null == t || null == (a = t.msgType) ? void 0 : a.includes(e)
                            };
                        if (a(s.x.MAGIC_PING)) return this.postMessage({
                            msgType: s.z.MAGIC_PONG
                        });
                        if (r.Iw.includes(e.origin)) a(s.z.MAGIC_OVERLAY_READY) ? this.signalReady() : a(s.z.MAGIC_SHOW_OVERLAY) ? this.showOverlay() : a(s.z.MAGIC_HIDE_OVERLAY) && this.hideOverlay(), this.postMessage(t);
                        else {
                            let a = { ...t,
                                clientAppOrigin: e.origin,
                                accessAllowlists: this.accessAllowlists
                            };
                            await this.ready, this.payloadRouter.route(a)
                        }
                    } catch (e) {
                        logger.error("error executing message event handler", null != e ? e : {})
                    }
                }
                showOverlay() {
                    let e = document.getElementById(i.d);
                    e && (e.style.display = "block")
                }
                hideOverlay() {
                    let e = document.getElementById(i.d);
                    e && (e.style.display = "none")
                }
                postMessage(e) {
                    return window.parent.postMessage(e, "*")
                }
                handleVersionSkewRecovery() {
                    let e = localStorage.getItem("activeRpcPayload");
                    if (!localStorage.getItem("isReloaded") || !e) return;
                    localStorage.removeItem("isReloaded"), localStorage.removeItem("activeRpcPayload");
                    let t = JSON.parse(e);
                    logger.info("Recovered from version skew, re-routing rpc payload ".concat(e, ".")), this.payloadRouter.route({
                        payload: t
                    })
                }
                constructor(e, t, a) {
                    super(t, a.accessAllowlists.domain), this.isGlobalAppScope = (null == a ? void 0 : a.productType) === "connect", this.payloadRouter = new P(e, this.isGlobalAppScope), this.ready = new Promise(e => {
                        this.signalReady = () => {
                            this.handleVersionSkewRecovery(), e(!0)
                        }
                    });
                    let s = o.P.getState().magicApiKey || "";
                    if (I.a.initialize(s), this.isGlobalAppScope || S()) {
                        let e = document.getElementById(i.d),
                            t = new URL("".concat(l.Kj.SendLegacy, "?params=").concat(this.encodedQueryParams), r.Iw).href;
                        (null == e ? void 0 : e.src) !== t && (e.src = t)
                    } else this.signalReady(), n.T.overlayGreenlight()
                }
            }

            function S() {
                let e = o.P.getState().magicApiKey || "";
                return "pk_live_831E84F018BE7305" === e || Object.values(d.v).some(t => {
                    if (Array.isArray(t.disabled) && t.disabled.includes(e)) return !0
                })
            }
        },
        54343: (e, t, a) => {
            a.d(t, {
                GF: () => o,
                JQ: () => l,
                e5: () => s,
                n0: () => r,
                qR: () => i
            });
            let l = ["pk_live_B080E9DC31E5875E", "pk_live_0EDD8758638BE74B", "pk_live_BF42F29844DD0026"],
                r = ["pk_live_B080E9DC31E5875E", "pk_live_AF06597262D441D3", "pk_live_0EDD8758638BE74B", "pk_live_5C775C647F3CB11E"],
                i = ["pk_live_AEA500547B9B3DCD", "pk_live_79389E9CFEDB2ED8", "pk_live_493C3435E752DA8C", "pk_live_C3D0E30205EBD73A", "pk_live_D2D07166F64A983C", "pk_live_CB93E076EF29E883"],
                s = ["pk_live_BF42F29844DD0026", "pk_live_6E60D0F6E86C9666", "pk_live_68BC8C49E85F97EA", "pk_live_88F10C3C1A1456D5", "pk_live_667E736A88BC7612"],
                o = ["pk_live_4404D9451D29CFC5", "pk_live_C1819D59F5DFB8E2", "pk_live_667E736A88BC7612", "pk_live_E8E97A739862EE73", "pk_live_0EDD8758638BE74B", "pk_live_B080E9DC31E5875E", ...s]
        },
        57296: (e, t, a) => {
            a.d(t, {
                d: () => l
            });
            let l = "legacy-relayer"
        }
    }
]);
//# sourceMappingURL=38425-af92e7170901bc46.js.map