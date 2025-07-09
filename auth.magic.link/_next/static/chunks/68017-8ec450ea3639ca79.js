(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [68017], {
        2380: (e, t, n) => {
            "use strict";

            function o(e) {
                return !e || null === e || ("string" == typeof e || Array.isArray(e) ? 0 === e.length : e instanceof Map || e instanceof Set ? 0 === e.size : "object" == typeof e && 0 === Object.keys(e).length)
            }
            n.d(t, {
                I: () => o
            })
        },
        13686: (e, t, n) => {
            "use strict";
            n.d(t, {
                $P: () => g,
                Dj: () => a,
                FF: () => l,
                Hm: () => o,
                M4: () => r,
                NO: () => I,
                Q_: () => h,
                RP: () => p,
                X_: () => C,
                Y7: () => T,
                c_: () => E,
                cp: () => i,
                gf: () => O,
                hy: () => c,
                oh: () => s,
                pz: () => A,
                sG: () => N,
                tU: () => S,
                td: () => u,
                wp: () => d,
                xL: () => _,
                yY: () => m
            });
            let o = "personal_sign",
                a = "eth_accounts",
                s = "eth_sign",
                i = "eth_signTypedData",
                r = "eth_signTypedData_v3",
                l = "eth_signTypedData_v4",
                c = "eth_sendTransaction",
                d = "eth_signTransaction",
                u = "eth_gasPrice",
                _ = "net_version",
                m = "eth_estimateGas",
                T = "eth_getTransactionCount",
                A = "eth_chainId",
                N = "eth_requestAccounts",
                S = "eth_sendRawTransaction",
                g = "eth_getBalance",
                I = "eth_call",
                E = "eth_getCode",
                O = "eth_getBlockByNumber",
                h = "personal_ecRecover",
                C = "eth_sendGaslessTransaction",
                p = "eth_getTransactionReceipt"
        },
        14247: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var o = function(e) {
                return e.MagicSDK = "magic-sdk", e.MagicRN = "magic-sdk-rn", e.MagicBareRN = "magic-sdk-rn-bare", e.MagicExpoRN = "magic-sdk-rn-expo", e.MagicIOS = "magic-sdk-ios", e.MagicAndroid = "magic-sdk-android", e.MagicFlutter = "magic-sdk-flutter", e.MagicUnity = "magic-sdk-unity", e
            }({})
        },
        22179: () => {},
        22686: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => s,
                _: () => a
            });
            var o = n(14247);

            function a(e) {
                return Object.values(o.Z).some(t => t === e)
            }

            function s(e) {
                return "optimistic-goerli" === e || "optimistic-mainnet" === e
            }
        },
        23043: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => l,
                Cc: () => U,
                Fz: () => S,
                G: () => R,
                H4: () => y,
                Iw: () => m,
                KO: () => j,
                Kb: () => P,
                N2: () => A,
                Nk: () => C,
                OX: () => p,
                TA: () => d,
                UZ: () => f,
                X$: () => _,
                _S: () => v,
                __: () => I,
                _n: () => r,
                aX: () => h,
                df: () => E,
                e$: () => N,
                eG: () => i,
                fn: () => T,
                i2: () => D,
                jN: () => u,
                lZ: () => O,
                nX: () => G,
                o3: () => g,
                pX: () => b,
                q: () => L,
                so: () => c,
                ub: () => w,
                yn: () => k
            });
            var o = n(85515),
                a = n(91454),
                s = n(95167),
                i = function(e) {
                    return e.Prod = "prod", e.Dev = "dev", e.Stagef = "stagef", e.PreviewDeployments = "preview-deployments", e.Local = "local", e.Test = "test", e
                }({});
            let r = (0, a.env)("NEXT_PUBLIC_DEPLOY_ENV") || "prod",
                l = "test" === r,
                c = "stagef" === r,
                d = "prod" === r,
                u = o.S ? "localhost" === s.env.HOSTNAME : window.location.origin.includes("localhost"),
                _ = "production";
            (0, a.env)("NEXT_PUBLIC_APP_URL"), u && !l || (0, a.env)("NEXT_PUBLIC_LEGACY_APP_URL");
            let m = u && !l ? "http://localhost:3024" : (0, a.env)("NEXT_PUBLIC_LEGACY_URL") || "https://auth.magic.link",
                T = (0, a.env)("NEXT_PUBLIC_BACKEND_URL") || "https://api.magic.link",
                A = (0, a.env)("NEXT_PUBLIC_TOASTER_URL") || "https://api.toaster.magic.link",
                N = (0, a.env)("NEXT_PUBLIC_NFT_API_URL") || "https://nft-api.magic.link",
                S = (0, a.env)("NEXT_PUBLIC_GAS_API_URL") || "https://gas-api.magic.link",
                g = (0, a.env)("NEXT_PUBLIC_API_WALLETS_URL") || "https://tee.magiclabs.com";
            (0, a.env)("NEXT_PUBLIC_INDEXER_API_URL") || s.env.NEXT_PUBLIC_INDEXER_API_URL;
            let I = (0, a.env)("NEXT_PUBLIC_COGNITO_CREDENTIALS_URL") || "https://cognito.magic.link",
                E = (0, a.env)("NEXT_PUBLIC_MAGIC_TEE_URL") || "https://tee.express.magiclabs.com",
                O = (0, a.env)("NEXT_PUBLIC_HIGHTOUCH_API_KEY") || "bd4da5ad552bc66253c783216579db0ffcc3348a38b36fc3622bd4f35a4d2cd3",
                h = (0, a.env)("NEXT_PUBLIC_HIGHTOUCH_API_HOST") || "us-east-1.hightouch-events.com",
                C = (0, a.env)("NEXT_PUBLIC_DATADOG_CLIENT_KEY") || "pubb45ab04aad2069e87bdb6fa1e1ce3b21",
                p = (0, a.env)("NEXT_PUBLIC_DATADOG_RUM_APP_KEY") || "5353466e-b028-46de-ac39-29ec8cffd221",
                f = (0, a.env)("NEXT_PUBLIC_DATADOG_RUM_CLIENT_KEY") || "pubf04dc5f5c4a56346af4da239474d6fbf",
                P = (0, a.env)("NEXT_PUBLIC_GOOGLE_SIGN_IN_CLIENT_ID") || "720671955707-j4bvuq2v3dvefdnm6brqsltduibq5u60.apps.googleusercontent.com",
                R = (0, a.env)("NEXT_PUBLIC_GIT_COMMIT_SHA") || "df4238e7fa10ed7ab7863dd9e27109e0edd28eac",
                v = (0, a.env)("NEXT_PUBLIC_ONRAMPER_API_KEY") || "pk_prod_01GXNN3PMY5GDYBTJYNY3VE63B",
                G = (0, a.env)("NEXT_PUBLIC_ONRAMPER_URL") || "https://buy.onramper.com",
                D = (0, a.env)("NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_SIDE_ID") || "655380969aaa1013a38ba51c",
                L = "https://wallet.magic.link",
                j = "6LeNFhYnAAAAAOdT8FTDslkbnybTudMivXQ8P6TU",
                w = "https://crypto.sandbox.sardine.ai",
                y = "https://crypto.sardine.ai",
                k = "https://reveal.magic.link",
                U = ["http://localhost:3015", "https://dashboard.dev.magic.link", "https://dashboard.stagef.magic.link", "https://dashboard.magic.link"],
                b = ["https://box.magic.link", "https://box.stagef.magic.link"]
        },
        23429: (e, t, n) => {
            "use strict";
            n.d(t, {
                E8: () => l,
                Fl: () => s,
                gX: () => r,
                hd: () => i
            });
            var o = n(61171),
                a = n(81553);
            let s = {
                    [a.S.ETH]: {},
                    [a.S.ICON]: {
                        [o.oP.ICX_GETBALANCE]: "getBalance",
                        [o.oP.ICX_SENDTRANSACTION]: "sendTransaction",
                        [o.oP.ICX_SIGNTRANSACTION]: "signTransaction",
                        [o.oP.ICX_GETACCOUNT]: "getAccount"
                    },
                    [a.S.POLKADOT]: {
                        [o.kJ.PDT_SIGNPAYLOAD]: "signPayload",
                        [o.kJ.PDT_SIGNRAW]: "signRaw",
                        [o.kJ.PDT_SENDTRANSACTION]: "sendTransaction",
                        [o.kJ.PDT_GETBALANCE]: "getBalance",
                        [o.kJ.PDT_GETACCOUNT]: "getAccount",
                        [o.kJ.PDT_CONTRACTCALL]: "contractCall"
                    },
                    [a.S.HARMONY]: {
                        [o.Ys.HMY_GETBALANCE]: "getBalance",
                        [o.Ys.HMY_SENDTRANSACTION]: "sendTransaction"
                    },
                    [a.S.FLOW]: {
                        [o.QE.FLOW_SIGNTRANSACTION]: "signTransaction",
                        [o.QE.FLOW_GETACCOUNT]: "getAccount",
                        [o.QE.FLOW_COMPOSESENDTRANSACTION]: "composeSendFlow",
                        [o.QE.FLOW_COMPOSESENDUSDC]: "composeSendUsdc",
                        [o.QE.FLOW_SIGNMESSAGE]: "signMessage"
                    },
                    [a.S.TEZOS]: {
                        [o.bX.TEZOS_SENDTRANSACTION]: "sendTransaction",
                        [o.bX.TEZOS_SENDCONTRACTORIGINATIONOPERATION]: "sendContractOrigination",
                        [o.bX.TEZOS_GETACCOUNT]: "getAccount",
                        [o.bX.TEZOS_SENDCONTRACTINVOCATIONOPERATION]: "sendContractInvocation",
                        [o.bX.TEZOS_SENDCONTRACTPING]: "sendContractPingOperation",
                        [o.bX.TEZOS_SENDDELEGATIONOPERATION]: "sendDelegation"
                    },
                    [a.S.ZILLIQA]: {
                        [o.HK.ZIL_SENDTRANSACTION]: "sendTransaction",
                        [o.HK.ZIL_DEPLOYCONTRACT]: "deployContract",
                        [o.HK.ZIL_CALLCONTRACT]: "callContract",
                        [o.HK.ZIL_GETWALLET]: "getWallet"
                    },
                    [a.S.SOLANA]: {
                        [o.mT.SOL_SENDTRANSACTION]: "sendTransaction",
                        [o.mT.SOL_SIGNTRANSACTION]: "signTransaction",
                        [o.mT.SOL_SIGNMESSAGE]: "signMessage",
                        [o.mT.SOL_PARTIALSIGNTRANSACTION]: "partialSignTransaction"
                    },
                    [a.S.SUI]: {
                        [o.lB.SUI_SIGNANDSENDTRANSACTION]: "signAndSendTransaction"
                    },
                    [a.S.AVAX]: {
                        [o.Sx.AVA_SIGNTRANSACTION]: "signTransaction",
                        [o.Sx.AVA_GETACCOUNT]: "getAccount"
                    },
                    [a.S.ALGOD]: {
                        [o.T5.ALGOD_GETWALLET]: "getWallet",
                        [o.T5.ALGOD_SIGNTRANSACTION]: "signTransaction",
                        [o.T5.ALGOD_SIGNBID]: "signBid",
                        [o.T5.ALGOD_SIGNGROUPTRANSACTION]: "signGroupTransaction",
                        [o.T5.ALGOD_SIGNGROUPTRANSACTIONV2]: "signGroupTransactionV2"
                    },
                    [a.S.COSMOS]: {
                        [o.F5.COS_SIGN]: "sign",
                        [o.F5.COS_SENDTOKENS]: "sendTokens",
                        [o.F5.COS_SIGNANDBROADCAST]: "signAndBroadcast",
                        [o.F5.COS_CHANGEADDRESS]: "changeAddress"
                    },
                    [a.S.BITCOIN]: {
                        [o.b0.BTC_SIGNTRANSACTION]: "signTransaction"
                    },
                    [a.S.NEAR]: {
                        [o.Ws.NEAR_SIGNTRANSACTION]: "signTransaction",
                        [o.Ws.NEAR_GETPUBLICKEY]: "getPublicKey"
                    },
                    [a.S.CONFLUX]: {
                        [o.$.CFX_SENDTRANSACTION]: "sendTransaction"
                    },
                    [a.S.TERRA]: {
                        [o.ml.TERRA_SIGN]: "sign",
                        [o.ml.TERRA_GETPUBLICKEY]: "getPublicKey"
                    },
                    [a.S.TAQUITO]: {
                        [o.lG.TAQUITO_SIGN]: "sign",
                        [o.lG.TAQUITO_GETPUBLICKEYANDHASH]: "getPublicKeyAndHash"
                    },
                    [a.S.ED]: {
                        [o.Du.ED_GETPUBLICKEY]: "getPublicKey",
                        [o.Du.ED_SIGN]: "sign"
                    },
                    [a.S.HEDERA]: {
                        [o.X8.HEDERA_SIGN]: "sign",
                        [o.X8.HEDERA_GETPUBLICKEY]: "getPublicKey"
                    },
                    [a.S.APTOS]: {
                        [o.jj.APTOS_GETACCOUNT]: "getAccount",
                        [o.jj.APTOS_SIGNTRANSACTION]: "signTransaction",
                        [o.jj.APTOS_GETACCOUNTINFO]: "getAccountInfo",
                        [o.jj.APTOS_SIGNANDSUBMITTRANSACTION]: "signAndSubmitTransaction",
                        [o.jj.APTOS_SIGNANDSUBMITBCSTRANSACTION]: "signAndSubmitBCSTransaction",
                        [o.jj.APTOS_SIGNMESSAGE]: "signMessage",
                        [o.jj.APTOS_SIGNMESSAGEANDVERIFY]: "signMessageAndVerify"
                    },
                    [a.S.KADENA]: {
                        [o.uz.KDA_SIGNTRANSACTION]: "signTransaction",
                        [o.uz.KDA_LOGINWITHSPIREKEY]: "loginWithSpireKey",
                        [o.uz.KDA_SIGNTRANSACTIONWITHSPIREKEY]: "signTransactionWithSpireKey",
                        [o.uz.KDA_GETUSERINFO]: "getUserInfo"
                    }
                },
                i = {
                    testnet: "5a729f879230d5d2",
                    mainnet: "0ef92cecf95ba19e"
                },
                r = {
                    testnet: {
                        accountId: "0.0.3579958",
                        publicKey: "302a300506032b6570032100497112c22231ec1886cd76163aec7709a677ceb4ea0bf3f2a29ae1ea05f46fbc"
                    },
                    mainnet: {
                        accountId: "0.0.1319851",
                        publicKey: "302a300506032b65700321003fb848db6eacf859dcdd0af9c883b228adbbb4d5aed92d162320ff7b10c5d638"
                    }
                },
                l = {
                    testnet: "4e610b1987ed7fcd4a39389ace5afb6cc7980598af9a37ad8c896ecb72a67598",
                    mainnet: "f3aa4ce0ad24f9e089b1638e77872c342d524f843c24160d4867319113dd3ea9"
                }
        },
        29958: (e, t, n) => {
            "use strict";
            n.d(t, {
                U: () => T
            });
            var o = n(81407),
                a = n(69442);
            class s {
                enqueue(e) {
                    this.items.push(e)
                }
                dequeue() {
                    var e;
                    return this.isEmpty() ? null : null != (e = this.items.shift()) ? e : null
                }
                front() {
                    if (!this.isEmpty()) return this.items[0]
                }
                isEmpty() {
                    return 0 === this.items.length
                }
                constructor() {
                    this.items = [], this.items = []
                }
            }
            var i = n(19834);
            class r {
                startPerformanceTimer(e) {
                    let t = performance.now();
                    this.trackPayloadTimeout(e), this.performanceTimer.set(e, {
                        startTime: t
                    })
                }
                getPerformanceTimer(e) {
                    return this.performanceTimer.get(e)
                }
                removePerformanceTimer(e) {
                    this.performanceTimer.delete(e)
                }
                getDuration(e) {
                    var t;
                    let n = null,
                        o = null == (t = this.getPerformanceTimer(e)) ? void 0 : t.startTime;
                    return o && (n = performance.now() - o), n
                }
                logPagePerformanceMetrics(e) {
                    let t = this.performanceTimer.get(e);
                    if (t) {
                        let n = Math.round(performance.now() - t.startTime);
                        logger.info("Analytics: Page load to interaction duration for ".concat(e, " is ").concat(n, "ms"), {
                            duration: n,
                            route: e,
                            isUIFlow: this.isUIFlow
                        }), this.performanceTimer.delete(e)
                    }
                }
                setIsUIFlow(e) {
                    this.isUIFlow = e
                }
                getIsUIFlow() {
                    return this.isUIFlow
                }
                trackPayloadTimeout(e) {
                    "magic_auth_login_with_oidc" === e && (this.timeoutTracker = setTimeout(() => {
                        logger.error("".concat(e, " RPC request last more than 30s"))
                    }, 3e4))
                }
                stopTrackPayloadTimeout() {
                    this.timeoutTracker && (clearTimeout(this.timeoutTracker), this.timeoutTracker = null)
                }
                constructor() {
                    this.performanceTimer = new Map, this.isUIFlow = !1, this.timeoutTracker = null
                }
            }
            class l {
                setActiveRpcPayload(e) {
                    null !== this.activeRpcPayload && (this.previousRpcPayload = this.activeRpcPayload), this.reset(), this.activeRpcPayload = e, e ? (this.performance.startPerformanceTimer(e.method), localStorage.setItem("activeRpcPayload", JSON.stringify(e))) : localStorage.removeItem("activeRpcPayload")
                }
                getActiveRpcPayload() {
                    return this.activeRpcPayload
                }
                getPreviousRpcPayload() {
                    return this.previousRpcPayload
                }
                getNextPendingRpcRequest() {
                    return this.pendingRpcRequestQueue.dequeue()
                }
                enqueuePendingRpcRequest(e) {
                    this.pendingRpcRequestQueue.enqueue(e)
                }
                getEncodedQueryParams() {
                    return this.encodedQueryParams
                }
                setEncodedQueryParams(e) {
                    this.encodedQueryParams = e, localStorage.setItem("encodedQueryParams", e)
                }
                onEvent(e, t) {
                    (e === i.nL.CloseMagicWindow || this.activeRpcPayload) && this.eventBus.set(e, t)
                }
                reset() {
                    this.performance.isUIFlow = !1, this.activeRpcPayload = null, this.eventBus.clear()
                }
                handleRequestEvent(e) {
                    if ((!this.activeRpcPayload || e.payloadId !== this.activeRpcPayload.id) && e.eventType !== i.nL.CloseMagicWindow) return;
                    let t = this.eventBus.get(e.eventType);
                    t && t(e.args)
                }
                constructor() {
                    this.eventBus = new Map, this.activeRpcPayload = null, this.previousRpcPayload = null, this.pendingRpcRequestQueue = new s, this.encodedQueryParams = "", this.performance = new r
                }
            }
            var c = n(72102),
                d = n(55218),
                u = n.n(d),
                _ = n(81949);
            class m extends l {
                handleVersionSkew() {
                    this.activeRpcPayload || this.encodedQueryParams || (localStorage.setItem("isReloaded", "true"), logger.info("Version skew detected, redirecting to /send with encoded query params."), window.location.href = "".concat(window.location.origin, "/send?params=").concat(localStorage.getItem("encodedQueryParams")))
                }
                constructRpcPath(e) {
                    var t, n, s, i, r;
                    let l = null != (i = o.v[null != (s = null == (t = this.activeRpcPayload) ? void 0 : t.method) ? s : ""]) ? i : {},
                        c = null == (n = this.activeRpcPayload) ? void 0 : n.method,
                        d = (0, _.QC)(a.P.getState().decodedQueryParams.locale),
                        m = "/send/rpc/".concat(l.module, "/").concat(null != (r = l.pathOverride) ? r : c);
                    return d && (m = "".concat(m, "?lang=").concat(d)), l.isServerRoute && (m = "".concat(m).concat(d ? "&" : "?").concat(u().stringify({
                        activeRpcPayload: this.activeRpcPayload,
                        encodedQueryParams: this.encodedQueryParams,
                        webCryptoDpopJwt: e
                    }))), m
                }
                emitJsonRpcEventResponse(e, t) {
                    var n;
                    if (!this.activeRpcPayload) return void logger.error("emitJsonRpcEvent Error: No active RPC payload", e);
                    let o = {
                            event: e,
                            params: t
                        },
                        a = {
                            jsonrpc: null != (n = this.activeRpcPayload.jsonrpc) ? n : "2.0",
                            id: this.activeRpcPayload.id,
                            result: o
                        };
                    (0, c.c)(i.rK.MAGIC_HANDLE_EVENT, a), logger.info("Emitted an intermediary event for active RPC request ".concat(JSON.stringify(this.activeRpcPayload), " with result: ").concat(JSON.stringify(o)))
                }
            }
            let T = new m
        },
        48715: (e, t, n) => {
            "use strict";
            n.d(t, {
                C7: () => l,
                FY: () => i,
                QC: () => c,
                ew: () => d,
                fJ: () => _,
                gC: () => s,
                it: () => r,
                mU: () => u
            });
            var o = n(69442);
            let a = ["magic-sdk-ios", "magic-sdk-android", "magic-sdk-flutter", "magic-sdk-rn", "magic-sdk-rn-bare", "magic-sdk-rn-expo", "magic-sdk-unity"];

            function s() {
                let {
                    sdkType: e,
                    domainOrigin: t
                } = o.P.getState().decodedQueryParams;
                return i(e, t)
            }

            function i(e, t) {
                let n = /(box\.(dev\.|stagef\.|)magic\.link)/.test(t);
                return a.includes(e || "") || n
            }

            function r() {
                let {
                    sdkType: e,
                    domainOrigin: t
                } = (0, o.P)(e => e.decodedQueryParams);
                return i(e, t)
            }

            function l() {
                let e = function() {
                        let {
                            sdkType: e
                        } = (0, o.P)(e => e.decodedQueryParams);
                        return "magic-sdk-rn" === e || "magic-sdk-rn-bare" === e || "magic-sdk-rn-expo" === e
                    }(),
                    t = function() {
                        let {
                            sdkType: e
                        } = (0, o.P)(e => e.decodedQueryParams);
                        return "magic-sdk-ios" === e
                    }();
                return e || t
            }

            function c() {
                return navigator && navigator.userAgent.toLocaleLowerCase().includes("android")
            }

            function d() {
                return navigator && /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
            }

            function u() {
                let {
                    sdkType: e
                } = o.P.getState().decodedQueryParams;
                return "magic-sdk-android" === e
            }

            function _() {
                return navigator && /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent.toLocaleLowerCase())
            }
        },
        53623: (e, t, n) => {
            "use strict";
            var o = n(95167);
            let a = "en-US",
                s = "preview" === o.env.VERCEL_ENV ? ["en-US", "pt"] : ["en-US", "af", "az", "bg", "ca", "cs", "cy", "cy-GB", "da", "de", "el", "es", "et", "fi", "fr", "hr", "hu", "id", "it", "ja", "ko", "mk-MK", "lt-LT", "lv-LV", "nl", "no", "pl", "pt", "ro", "ru", "sk", "sl-SI", "sr", "sv", "th", "tr", "vi", "zh-CN", "zh-TW"];
            e.exports = {
                locales: s,
                defaultLocale: a,
                pages: {
                    "rgx:^/app/": ["common"],
                    "rgx:^/send/": ["send"],
                    "rgx:^/confirm/": ["confirm"]
                },
                loadLocaleFrom: (e, t) => {
                    if (!s.includes(e)) {
                        let t = /\w+(?=-[^-]*$)/.exec(e);
                        e = t && s.includes(t) ? t : a
                    }
                    return n(90685)("./".concat(e, "/").concat(t, ".json")).then(e => e.default)
                }
            }
        },
        61171: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => l,
                Du: () => m,
                F5: () => s,
                HK: () => N,
                QE: () => O,
                Sx: () => d,
                T5: () => S,
                Ws: () => u,
                X8: () => o,
                Ys: () => c,
                b0: () => r,
                bX: () => E,
                jj: () => I,
                kJ: () => g,
                lB: () => i,
                lG: () => T,
                mT: () => a,
                ml: () => _,
                oP: () => A,
                uz: () => h
            });
            var o = function(e) {
                    return e.HEDERA_SIGN = "hedera_sign", e.HEDERA_GETPUBLICKEY = "hedera_getPublicKey", e
                }({}),
                a = function(e) {
                    return e.SOL_SIGNMESSAGE = "sol_signMessage", e.SOL_SIGNTRANSACTION = "sol_signTransaction", e.SOL_SENDTRANSACTION = "sol_sendTransaction", e.SOL_PARTIALSIGNTRANSACTION = "sol_partialSignTransaction", e
                }({}),
                s = function(e) {
                    return e.COS_SIGN = "cos_sign", e.COS_SENDTOKENS = "cos_sendTokens", e.COS_SIGNANDBROADCAST = "cos_signAndBroadcast", e.COS_CHANGEADDRESS = "cos_changeAddress", e.COS_SIGNTYPEDDATA = "cos_signTypedData", e
                }({}),
                i = function(e) {
                    return e.SUI_SIGNANDSENDTRANSACTION = "sui_signAndSendTransaction", e
                }({}),
                r = function(e) {
                    return e.BTC_SIGNTRANSACTION = "btc_signTransaction", e
                }({}),
                l = function(e) {
                    return e.CFX_SENDTRANSACTION = "cfx_sendTransaction", e
                }({}),
                c = function(e) {
                    return e.HMY_GETBALANCE = "hmy_getBalance", e.HMY_SENDTRANSACTION = "hmy_sendTransaction", e
                }({}),
                d = function(e) {
                    return e.AVA_GETACCOUNT = "ava_getAccount", e.AVA_SIGNTRANSACTION = "ava_signTransaction", e
                }({}),
                u = function(e) {
                    return e.NEAR_SIGNTRANSACTION = "near_signTransaction", e.NEAR_GETPUBLICKEY = "near_getPublicKey", e
                }({}),
                _ = function(e) {
                    return e.TERRA_SIGN = "terra_sign", e.TERRA_GETPUBLICKEY = "terra_getPublicKey", e
                }({}),
                m = function(e) {
                    return e.ED_SIGN = "ed_sign", e.ED_GETPUBLICKEY = "ed_getPublicKey", e
                }({}),
                T = function(e) {
                    return e.TAQUITO_SIGN = "taquito_sign", e.TAQUITO_GETPUBLICKEYANDHASH = "taquito_getPublicKeyAndHash", e
                }({}),
                A = function(e) {
                    return e.ICX_GETBALANCE = "icx_getBalance", e.ICX_SENDTRANSACTION = "icx_sendTransaction", e.ICX_SIGNTRANSACTION = "icx_signTransaction", e.ICX_GETACCOUNT = "icx_getAccount", e
                }({}),
                N = function(e) {
                    return e.ZIL_SENDTRANSACTION = "zil_sendTransaction", e.ZIL_DEPLOYCONTRACT = "zil_deployContract", e.ZIL_CALLCONTRACT = "zil_callContract", e.ZIL_GETWALLET = "zil_getWallet", e
                }({}),
                S = function(e) {
                    return e.ALGOD_GETWALLET = "algod_getWallet", e.ALGOD_SIGNTRANSACTION = "algod_signTransaction", e.ALGOD_SIGNBID = "algod_signBid", e.ALGOD_SIGNGROUPTRANSACTION = "algod_signGroupTransaction", e.ALGOD_SIGNGROUPTRANSACTIONV2 = "algod_signGroupTransactionV2", e
                }({}),
                g = function(e) {
                    return e.PDT_SIGNPAYLOAD = "pdt_signPayload", e.PDT_SIGNRAW = "pdt_signRaw", e.PDT_SENDTRANSACTION = "pdt_sendTransaction", e.PDT_GETBALANCE = "pdt_getBalance", e.PDT_GETACCOUNT = "pdt_getAccount", e.PDT_CONTRACTCALL = "pdt_contractCall", e
                }({}),
                I = function(e) {
                    return e.APTOS_GETACCOUNT = "aptos_getAccount", e.APTOS_SIGNTRANSACTION = "aptos_signTransaction", e.APTOS_GETACCOUNTINFO = "aptos_getAccountInfo", e.APTOS_SIGNANDSUBMITTRANSACTION = "aptos_signAndSubmitTransaction", e.APTOS_SIGNANDSUBMITBCSTRANSACTION = "aptos_signAndSubmitBCSTransaction", e.APTOS_SIGNMESSAGE = "aptos_signMessage", e.APTOS_SIGNMESSAGEANDVERIFY = "aptos_signMessageAndVerify", e
                }({}),
                E = function(e) {
                    return e.TEZOS_SENDTRANSACTION = "tezos_sendTransaction", e.TEZOS_SENDCONTRACTORIGINATIONOPERATION = "tezos_sendContractOriginationOperation", e.TEZOS_GETACCOUNT = "tezos_getAccount", e.TEZOS_SENDCONTRACTINVOCATIONOPERATION = "tezos_sendContractInvocationOperation", e.TEZOS_SENDCONTRACTPING = "tezos_sendContractPing", e.TEZOS_SENDDELEGATIONOPERATION = "tezos_sendDelegationOperation", e
                }({}),
                O = function(e) {
                    return e.FLOW_GETACCOUNT = "flow_getAccount", e.FLOW_SIGNTRANSACTION = "flow_signTransaction", e.FLOW_COMPOSESENDTRANSACTION = "flow_composeSendTransaction", e.FLOW_COMPOSESENDUSDC = "flow_composeSendUsdc", e.FLOW_SIGNMESSAGE = "flow_signMessage", e
                }({}),
                h = function(e) {
                    return e.KDA_SIGNTRANSACTION = "kda_signTransaction", e.KDA_LOGINWITHSPIREKEY = "kda_loginWithSpireKey", e.KDA_GETUSERINFO = "kda_getUserInfo", e.KDA_SIGNTRANSACTIONWITHSPIREKEY = "kda_signTransactionWithSpireKey", e
                }({})
        },
        66358: (e, t, n) => {
            "use strict";
            n.d(t, {
                l7: () => I,
                ZR: () => g,
                fP: () => C,
                Py: () => E,
                yk: () => h,
                hv: () => S,
                AI: () => O,
                Yk: () => A
            });
            var o = n(23043);
            let a = {
                [o.eG.Test]: {
                    mainnet: [],
                    goerli: ["https://eth-goerli.g.alchemy.com/v2/XDkXOl3fIkG3-XFvRmaa313PPJEehNx4"],
                    sepolia: ["https://eth-sepolia.g.alchemy.com/v2/lnkxjj_rKFZRHqrrIvoerSJtzIdt2ElK"]
                },
                [o.eG.Local]: {
                    mainnet: ["https://eth-mainnet.alchemyapi.io/v2/THLzcjj0X_ktVcj80LZ60_twjxdWuUso"],
                    goerli: ["https://eth-goerli.g.alchemy.com/v2/XDkXOl3fIkG3-XFvRmaa313PPJEehNx4"],
                    sepolia: ["https://eth-sepolia.g.alchemy.com/v2/lnkxjj_rKFZRHqrrIvoerSJtzIdt2ElK"]
                },
                [o.eG.Dev]: {
                    mainnet: [],
                    goerli: ["https://eth-goerli.g.alchemy.com/v2/XDkXOl3fIkG3-XFvRmaa313PPJEehNx4"],
                    sepolia: ["https://eth-sepolia.g.alchemy.com/v2/lnkxjj_rKFZRHqrrIvoerSJtzIdt2ElK"]
                },
                [o.eG.Stagef]: {
                    mainnet: ["https://eth-mainnet.alchemyapi.io/v2/THLzcjj0X_ktVcj80LZ60_twjxdWuUso"],
                    goerli: ["https://eth-goerli.g.alchemy.com/v2/XDkXOl3fIkG3-XFvRmaa313PPJEehNx4"],
                    sepolia: ["https://eth-sepolia.g.alchemy.com/v2/lnkxjj_rKFZRHqrrIvoerSJtzIdt2ElK"]
                },
                [o.eG.PreviewDeployments]: {
                    mainnet: ["https://eth-mainnet.alchemyapi.io/v2/THLzcjj0X_ktVcj80LZ60_twjxdWuUso"],
                    goerli: ["https://eth-goerli.g.alchemy.com/v2/XDkXOl3fIkG3-XFvRmaa313PPJEehNx4"],
                    sepolia: ["https://eth-sepolia.g.alchemy.com/v2/lnkxjj_rKFZRHqrrIvoerSJtzIdt2ElK"]
                },
                [o.eG.Prod]: {
                    mainnet: ["https://eth-mainnet.alchemyapi.io/v2/2K3ZYHyus86aJQOTmeZOJu3KD1dlWW67"],
                    goerli: ["https://eth-goerli.g.alchemy.com/v2/EyJ3Z0OYYb7uUVmlyFkxzBpqzuSbjrAj"],
                    sepolia: ["https://eth-sepolia.g.alchemy.com/v2/OZixRaakGk_D2pr9s-yTrDJpAjdbvVGL"]
                }
            };
            var s = n(23429),
                i = n(81553),
                r = n(69442),
                l = n(2380);

            function c(e) {
                return null != e && ("object" == typeof e || "function" == typeof e)
            }
            var d = n(48715),
                u = n(80601),
                _ = n(40067),
                m = n.n(_);
            let T = ["mainnet", "goerli", "sepolia"];

            function A(e) {
                return !(0, l.I)(null == e ? void 0 : e.rpcUrl)
            }

            function N(e) {
                if (!(0, l.I)(e)) {
                    var t;
                    return null != (t = [Object.keys(e).map(e => (0, u.lb)(e)), Object.keys(s.Fl)].reduce((e, t) => e.filter(e => t.includes(e)))[0]) ? t : i.S.ETH
                }
                return i.S.ETH
            }

            function S(e) {
                if (!(0, l.I)(e)) {
                    var t;
                    let n = (0, u.gQ)(N(e));
                    return null == e || null == (t = e[n]) ? void 0 : t.options
                }
                return {}
            }

            function g(e) {
                return null == e ? void 0 : e.rpcUrl
            }

            function I(e, t) {
                var n, o;
                if (void 0 === e) {
                    if (!(0, l.I)(t)) {
                        let e = (0, u.gQ)(N(t));
                        return null == t || null == (n = t[e]) ? void 0 : n.chainId
                    }
                    return
                }
                return null != (o = null == e ? void 0 : e.chainId) ? o : void 0
            }

            function E(e, t) {
                if (!(0, l.I)(t)) {
                    var n;
                    let e = (0, u.gQ)(N(t));
                    return null == t || null == (n = t[e]) ? void 0 : n.rpcUrl
                }
                return g(e)
            }

            function O(e, t) {
                var n;
                return (0, l.I)(t) ? null != (n = null == e ? void 0 : e.chainType) ? n : i.S.ETH : N(t)
            }

            function h(e, t, n, o, a) {
                var s, r, d;
                if (O(e, a) === i.S.FLOW) return "mainnet" === (null == a ? void 0 : a.flow).network.toLocaleLowerCase() ? "MAINNET" : "CANONICAL_TESTNET";
                if (O(e, a) === i.S.KADENA) {
                    let e = null == a ? void 0 : a.kadena;
                    return (null == e || null == (r = e.options) || null == (s = r.networkId) ? void 0 : s.toLocaleLowerCase().includes("mainnet")) ? "MAINNET" : "CANONICAL_TESTNET"
                }
                if (O(e, a) === i.S.APTOS) {
                    let {
                        nodeUrl: e
                    } = S(a), t = e && "string" == typeof e ? e.split(".").filter(e => e.match(/[a-zA-Z0-9]*net/)).pop() : "unknown";
                    return null != t ? t : "custom"
                }
                if (O(e, a) === i.S.HEDERA) {
                    let e = null == a ? void 0 : a.hedera;
                    return (null == e || null == (d = e.options) ? void 0 : d.network) === "mainnet" ? "mainnet" : "CANONICAL_TESTNET"
                }
                let u = m().valid(m().coerce(t)),
                    _ = "string" == typeof e ? e.toLowerCase() : "";
                if (null !== u && m().gte("10.0.0", u)) {
                    if ((0, l.I)(e) || A(e) || c(e) && (0, l.I)(null == e ? void 0 : e.rpcUrl)) return "mainnet";
                    if (!T.includes(_)) throw Error("Network not supported");
                    return _
                }
                let N = () => (null == n ? void 0 : n.toLowerCase().startsWith("pk_test")) && (0, l.I)(e) ? "goerli" : (0, l.I)(e) || A(e) || c(e) && (0, l.I)(null == e ? void 0 : e.rpcUrl) ? "mainnet" : _;
                return o || !(null !== u && m().gt("7.0.0", u)) ? N() : (null == n ? void 0 : n.toLowerCase().startsWith("pk_live")) ? "mainnet" : (0, l.I)(e) ? "goerli" : A(e) ? "CANONICAL_TESTNET" : c(e) && (0, l.I)(null == e ? void 0 : e.rpcUrl) ? "goerli" : _
            }

            function C() {
                let e, {
                        apiKey: t,
                        ethNetwork: n,
                        version: s,
                        ext: i,
                        sdkType: l,
                        domainOrigin: c
                    } = r.P.getState().decodedQueryParams,
                    u = h(n, s, t || "", (0, d.FY)(l, c), i);
                return A(n) ? g(n) : function(e) {
                    let t = e ? e.length : 0;
                    return t && e ? e[Math.floor(Math.random() * t)] : void 0
                }(a[o._n][u.toLowerCase()])
            }
        },
        69442: (e, t, n) => {
            "use strict";
            n.d(t, {
                u: () => l,
                P: () => d
            });
            var o = n(85515),
                a = n(41671),
                s = n(52666);
            let i = [s.lt, e => (t, n, o) => (o.setState = function(e, o) {
                    for (var a = arguments.length, s = Array(a > 2 ? a - 2 : 0), i = 2; i < a; i++) s[i - 2] = arguments[i];
                    let {
                        decodedQueryParams: r,
                        magicApiKey: l
                    } = n(), c = "function" == typeof e ? e(n()) : e;
                    c.decodedQueryParams && JSON.stringify(r) !== JSON.stringify(c.decodedQueryParams) && (c = { ...c,
                        magicApiKey: c.decodedQueryParams.apiKey || l || null,
                        decodedQueryParams: c.decodedQueryParams
                    }), t(c, o, ...s)
                }, e(o.setState, n, o))],
                r = e => i.reduce((e, t) => t(e), e),
                l = {
                    decodedQueryParams: {},
                    isAppConfigHydrated: !1,
                    magicApiKey: null,
                    messageEventListenerAdded: !1,
                    sdkMetaData: null,
                    isGlobalAppScope: !1,
                    authUserId: null,
                    authUserSessionToken: null,
                    fridgeAccessToken: null,
                    email: null,
                    phoneNumber: null,
                    mfaEnrollSecret: null,
                    mfaEnrollInfo: null,
                    mfaRecoveryCodes: [],
                    customAuthorizationToken: null,
                    systemClockOffset: 0,
                    oidcProviderId: null
                },
                c = {
                    getItem: () => null,
                    setItem: () => {},
                    removeItem: () => {}
                },
                d = (0, a.vt)()((0, s.Zr)(r(() => l), {
                    name: "embedded-store",
                    storage: (0, s.KU)(() => o.S ? c : localStorage),
                    partialize: e => ({
                        fridgeAccessToken: e.fridgeAccessToken,
                        oidcProviderId: e.oidcProviderId
                    })
                }))
        },
        72102: (e, t, n) => {
            "use strict";
            n.d(t, {
                c: () => i
            });
            var o = n(69442),
                a = n(29958),
                s = n(22686);

            function i(e, t, n, i) {
                window.parent.postMessage({
                    msgType: function(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            {
                                decodedQueryParams: n
                            } = o.P.getState(),
                            i = a.U.getEncodedQueryParams(),
                            {
                                sdkType: r = "SdkMissing"
                            } = n;
                        return (0, s._)(r) ? t ? "".concat(e, "-").concat(i) : "".concat(e) : e
                    }(e),
                    response: t,
                    rt: n,
                    deviceShare: i
                }, "*")
            }
        },
        72987: (e, t, n) => {
            "use strict";
            n.d(t, {
                X: () => c
            });
            var o = n(23043),
                a = n(69442),
                s = n(29958),
                i = n(66358),
                r = n(48715);
            let l = {
                    1: "ethereum mainnet",
                    5: "goerli",
                    0xaa36a7: "sepolia",
                    137: "polygon mainnet",
                    80001: "polygon testnet",
                    80002: "polygon testnet",
                    "0x13881": "polygon testnet",
                    100: "gnosis mainnet",
                    "0x64": "gnosis mainnet",
                    0x50877ed6: "skale testnet",
                    0x1dfd2731: "skale testnet",
                    0x133edcb: "stability testnet",
                    33101: "zilliqa EVM tesntet",
                    42161: "arbitrum one",
                    42170: "arbitrum nova",
                    421614: "arbitrum sepolia",
                    421613: "arbitrum goerli",
                    420: "optimism goerli",
                    10: "optimism mainnet",
                    56: "binance smart chain mainnet",
                    97: "binance smart chain testnet",
                    43114: "avalanche mainnet",
                    43113: "avalanche testnet",
                    8453: "base mainnet",
                    84532: "base sepolia",
                    84531: "base goerli",
                    25: "cronos mainnet",
                    338: "cronos testnet",
                    42220: "celo mainnet",
                    44787: "celo alfajores",
                    250: "fantom mainnet",
                    4002: "fantom testnet",
                    1284: "moonbeam mainnet",
                    1287: "moonbase alpha testnet",
                    592: "astar mainnet",
                    81: "astar shibuya testnet",
                    6038361: "astar zkEVM testnet (zkyoto)",
                    3776: "astar zkEVM mainnet",
                    88888: "chiliz mainnet",
                    88880: "chiliz scoville testnet",
                    16666e5: "harmony mainnet",
                    0x63564c41: "harmony mainnet",
                    0x63564c42: "harmony mainnet",
                    0x63564c43: "harmony mainnet",
                    16667e5: "harmony testnet",
                    0x6357d2e1: "harmony testnet",
                    295: "hedera mainnet",
                    296: "hedera testnet",
                    7e3: "zetachain mainnet",
                    7001: "zetachain testnet",
                    416: "sx network mainnet",
                    647: "sx network testnet",
                    324: "zkSync mainnet",
                    280: "zkSync testnet",
                    13472: "immutable zkEVM testnet"
                },
                c = () => {
                    var e;
                    let {
                        apiKey: t = a.P.getState().magicApiKey || "",
                        domainOrigin: n = "",
                        sdkType: c = "SdkMissing",
                        ethNetwork: d,
                        version: u,
                        ext: _,
                        locale: m
                    } = a.P.getState().decodedQueryParams, {
                        authUserId: T
                    } = a.P.getState(), A = "".concat(o._n).concat(t.startsWith("pk_live") ? "" : "-testnet"), N = (0, r.FY)(c, n), S = () => (0, i.ZR)(d) || (0, i.yk)(d, u, t, N, _), g = () => {
                        if ("ETH" !== (0, i.AI)(d, _)) return "";
                        let e = S();
                        if ("mainnet" === e) return "1";
                        if ("goerli" === e) return "5";
                        if ("sepolia" === e) return "11155111";
                        let {
                            chainId: t
                        } = d;
                        return (null == t ? void 0 : t.toString()) || ""
                    };
                    return {
                        uid: T,
                        sdk: c,
                        eventOrigin: n,
                        api_key: t,
                        source: "mandrake-magic",
                        locale: m,
                        env: A,
                        blockchain: "ETH" !== (0, i.AI)(d, _) ? (0, i.AI)(d, _) : l[g()] ? l[g()] : "",
                        rpcUrl: S(),
                        chainId: g(),
                        json_rpc_method: null == (e = s.U.getActiveRpcPayload()) ? void 0 : e.method,
                        walletType: (0, i.AI)(d, _)
                    }
                }
        },
        80601: (e, t, n) => {
            "use strict";
            n.d(t, {
                SQ: () => c,
                ZH: () => l,
                gQ: () => i,
                i4: () => a,
                lb: () => r,
                sL: () => o
            });
            let o = e => e.replace(/[A-Z]/g, e => "_".concat(e.toLowerCase())),
                a = e => e.toLowerCase().replace(/(_\w)/g, e => e.toUpperCase().substring(1));

            function s(e) {
                return e.replace(/([^a-zA-Z0-9]+|\s+)/g, " ").replace(/([A-Z][a-z])/g, " $1").replace(/([a-z](?=\d)|\d(?=[a-z]))/g, "$1 ").replace(/\s\s+/g, " ").trim()
            }

            function i(e) {
                return s(e).toLowerCase()
            }

            function r(e) {
                return s(e).toUpperCase()
            }

            function l(e) {
                return "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1).toLowerCase())
            }

            function c(e) {
                return ["a", "e", "i", "o", "u"].includes(e.charAt(0).toLowerCase()) ? "an" : "a"
            }
        },
        81407: (e, t, n) => {
            "use strict";
            n.d(t, {
                v: () => P
            });
            var o = n(61171);
            let a = {
                    [o.T5.ALGOD_GETWALLET]: {
                        module: "algod"
                    },
                    [o.T5.ALGOD_SIGNBID]: {
                        module: "algod"
                    },
                    [o.T5.ALGOD_SIGNGROUPTRANSACTION]: {
                        module: "algod"
                    },
                    [o.T5.ALGOD_SIGNGROUPTRANSACTIONV2]: {
                        module: "algod"
                    },
                    [o.T5.ALGOD_SIGNTRANSACTION]: {
                        module: "algod"
                    }
                },
                s = {
                    [o.jj.APTOS_GETACCOUNT]: {
                        module: "aptos"
                    },
                    [o.jj.APTOS_GETACCOUNTINFO]: {
                        module: "aptos"
                    },
                    [o.jj.APTOS_SIGNANDSUBMITBCSTRANSACTION]: {
                        module: "aptos"
                    },
                    [o.jj.APTOS_SIGNANDSUBMITTRANSACTION]: {
                        module: "aptos"
                    },
                    [o.jj.APTOS_SIGNMESSAGE]: {
                        module: "aptos"
                    },
                    [o.jj.APTOS_SIGNMESSAGEANDVERIFY]: {
                        module: "aptos"
                    },
                    [o.jj.APTOS_SIGNTRANSACTION]: {
                        module: "aptos"
                    }
                },
                i = {
                    [o.Sx.AVA_GETACCOUNT]: {
                        module: "ava"
                    },
                    [o.Sx.AVA_SIGNTRANSACTION]: {
                        module: "ava"
                    }
                },
                r = {
                    [o.b0.BTC_SIGNTRANSACTION]: {
                        module: "btc"
                    }
                },
                l = {
                    [o.$.CFX_SENDTRANSACTION]: {
                        module: "cfx"
                    }
                },
                c = {
                    [o.F5.COS_SIGN]: {
                        module: "cos"
                    },
                    [o.F5.COS_SENDTOKENS]: {
                        module: "cos"
                    },
                    [o.F5.COS_SIGNANDBROADCAST]: {
                        module: "cos"
                    },
                    [o.F5.COS_CHANGEADDRESS]: {
                        module: "cos"
                    },
                    [o.F5.COS_SIGNTYPEDDATA]: {
                        module: "cos"
                    }
                },
                d = {
                    [o.Du.ED_SIGN]: {
                        module: "ed"
                    },
                    [o.Du.ED_GETPUBLICKEY]: {
                        module: "ed"
                    }
                };
            var u = n(13686);
            let _ = {
                    net_version: {
                        module: "eth",
                        isHeadless: !0
                    },
                    eth_gasPrice: {
                        module: "eth",
                        isHeadless: !0
                    },
                    [u.Dj]: {
                        module: "eth",
                        isHeadless: !0
                    },
                    eth_coinbase: {
                        module: "eth",
                        isHeadless: !0
                    },
                    [u.oh]: {
                        module: "eth",
                        isHeadless: !0
                    },
                    [u.Q_]: {
                        module: "eth",
                        isHeadless: !0
                    },
                    [u.Hm]: {
                        module: "eth",
                        isHeadless: !0
                    },
                    [u.cp]: {
                        module: "eth",
                        isHeadless: !0
                    },
                    [u.M4]: {
                        module: "eth",
                        isHeadless: !0
                    },
                    [u.FF]: {
                        module: "eth",
                        isHeadless: !0
                    },
                    [u.hy]: {
                        module: "eth",
                        disabled: ["pk_live_DD388FC14182BC15", "pk_live_4276FBB33D8D7423", "pk_live_966F443FC2D0DF5D"]
                    },
                    [u.wp]: {
                        module: "eth",
                        isHeadless: !0
                    },
                    [u.sG]: {
                        module: "eth",
                        isHeadless: !0
                    },
                    [u.X_]: {
                        module: "eth",
                        disabled: !0,
                        allowlist: ["pk_live_BF42F29844DD0026", "pk_live_E8E97A739862EE73", "pk_live_6E60D0F6E86C9666", "pk_live_68BC8C49E85F97EA", "pk_live_88F10C3C1A1456D5", "pk_live_3E7707DCF2C5C37E"]
                    }
                },
                m = {
                    [o.QE.FLOW_GETACCOUNT]: {
                        module: "flow"
                    },
                    [o.QE.FLOW_SIGNMESSAGE]: {
                        module: "flow"
                    },
                    [o.QE.FLOW_SIGNTRANSACTION]: {
                        module: "flow"
                    },
                    [o.QE.FLOW_COMPOSESENDTRANSACTION]: {
                        module: "flow"
                    },
                    [o.QE.FLOW_COMPOSESENDUSDC]: {
                        module: "flow"
                    }
                },
                T = {
                    [o.X8.HEDERA_SIGN]: {
                        module: "hedera"
                    },
                    [o.X8.HEDERA_GETPUBLICKEY]: {
                        module: "hedera"
                    }
                },
                A = {
                    [o.Ys.HMY_GETBALANCE]: {
                        module: "hmy"
                    },
                    [o.Ys.HMY_SENDTRANSACTION]: {
                        module: "hmy"
                    }
                },
                N = {
                    [o.oP.ICX_GETBALANCE]: {
                        module: "icx"
                    },
                    [o.oP.ICX_SENDTRANSACTION]: {
                        module: "icx"
                    },
                    [o.oP.ICX_GETACCOUNT]: {
                        module: "icx"
                    },
                    [o.oP.ICX_SIGNTRANSACTION]: {
                        module: "icx"
                    }
                },
                S = {
                    [o.uz.KDA_SIGNTRANSACTION]: {
                        module: "kda"
                    },
                    [o.uz.KDA_LOGINWITHSPIREKEY]: {
                        module: "kda"
                    },
                    [o.uz.KDA_GETUSERINFO]: {
                        module: "kda"
                    },
                    [o.uz.KDA_SIGNTRANSACTIONWITHSPIREKEY]: {
                        module: "kda"
                    }
                },
                g = {
                    [o.Ws.NEAR_SIGNTRANSACTION]: {
                        module: "near"
                    },
                    [o.Ws.NEAR_GETPUBLICKEY]: {
                        module: "near"
                    }
                },
                I = {
                    [o.kJ.PDT_CONTRACTCALL]: {
                        module: "pdt"
                    },
                    [o.kJ.PDT_GETACCOUNT]: {
                        module: "pdt"
                    },
                    [o.kJ.PDT_GETBALANCE]: {
                        module: "pdt"
                    },
                    [o.kJ.PDT_SENDTRANSACTION]: {
                        module: "pdt"
                    },
                    [o.kJ.PDT_SIGNPAYLOAD]: {
                        module: "pdt"
                    },
                    [o.kJ.PDT_SIGNRAW]: {
                        module: "pdt"
                    }
                },
                E = {
                    [o.mT.SOL_SIGNMESSAGE]: {
                        module: "sol"
                    },
                    [o.mT.SOL_SIGNTRANSACTION]: {
                        module: "sol",
                        isHeadless: !0
                    },
                    [o.mT.SOL_SENDTRANSACTION]: {
                        module: "sol"
                    },
                    [o.mT.SOL_PARTIALSIGNTRANSACTION]: {
                        module: "sol"
                    }
                },
                O = {
                    [o.lB.SUI_SIGNANDSENDTRANSACTION]: {
                        module: "sui"
                    }
                },
                h = {
                    [o.lG.TAQUITO_SIGN]: {
                        module: "taquito"
                    },
                    [o.lG.TAQUITO_GETPUBLICKEYANDHASH]: {
                        module: "taquito"
                    }
                },
                C = {
                    [o.ml.TERRA_SIGN]: {
                        module: "terra"
                    },
                    [o.ml.TERRA_GETPUBLICKEY]: {
                        module: "terra"
                    }
                },
                p = {
                    [o.bX.TEZOS_GETACCOUNT]: {
                        module: "tezos"
                    },
                    [o.bX.TEZOS_SENDCONTRACTINVOCATIONOPERATION]: {
                        module: "tezos"
                    },
                    [o.bX.TEZOS_SENDCONTRACTORIGINATIONOPERATION]: {
                        module: "tezos"
                    },
                    [o.bX.TEZOS_SENDCONTRACTPING]: {
                        module: "tezos"
                    },
                    [o.bX.TEZOS_SENDDELEGATIONOPERATION]: {
                        module: "tezos"
                    },
                    [o.bX.TEZOS_SENDTRANSACTION]: {
                        module: "tezos"
                    }
                },
                f = {
                    [o.HK.ZIL_SENDTRANSACTION]: {
                        module: "zil"
                    },
                    [o.HK.ZIL_DEPLOYCONTRACT]: {
                        module: "zil"
                    },
                    [o.HK.ZIL_GETWALLET]: {
                        module: "zil"
                    },
                    [o.HK.ZIL_CALLCONTRACT]: {
                        module: "zil"
                    }
                },
                P = {
                    magic_auth_login_with_email_otp: {
                        module: "auth"
                    },
                    magic_auth_login_with_magic_link: {
                        module: "auth",
                        disabled: ["pk_live_D21FDEDFFB8B0CC4", "pk_live_78A0CCDBF9D8C574", "pk_live_233C1162BC2E7DBF", "pk_live_F39DD588157F21FE"]
                    },
                    magic_auth_enable_mfa_flow: {
                        module: "auth"
                    },
                    magic_auth_disable_mfa_flow: {
                        module: "auth"
                    },
                    magic_auth_device_verification: {
                        module: "auth"
                    },
                    magic_auth_get_id_token: {
                        module: "auth"
                    },
                    magic_auth_generate_id_token: {
                        module: "auth"
                    },
                    magic_auth_login_with_credential: {
                        module: "auth",
                        isHeadless: !0
                    },
                    magic_auth_login_with_oidc: {
                        module: "auth",
                        isHeadless: !0
                    },
                    magic_auth_login_with_sms: {
                        module: "auth"
                    },
                    magic_auth_webauthn_registration_start: {
                        module: "auth"
                    },
                    magic_auth_webauthn_register: {
                        module: "auth"
                    },
                    magic_auth_register_webauthn_device_start: {
                        module: "auth"
                    },
                    magic_auth_register_webauthn_device: {
                        module: "auth"
                    },
                    magic_auth_login_with_web_authn: {
                        module: "auth"
                    },
                    magic_auth_login_with_webauthn_verify: {
                        module: "auth"
                    },
                    magic_auth_update_email: {
                        module: "auth"
                    },
                    magic_auth_set_authorization_token: {
                        module: "auth"
                    },
                    magic_auth_recover_account: {
                        module: "auth"
                    },
                    magic_auth_logout: {
                        module: "user",
                        isHeadless: !0
                    },
                    magic_auth_is_logged_in: {
                        module: "user",
                        pathOverride: "magic_is_logged_in",
                        isHeadless: !0
                    },
                    magic_is_logged_in: {
                        module: "user",
                        isHeadless: !0
                    },
                    magic_auth_settings: {
                        module: "user"
                    },
                    magic_user_update_webauthn: {
                        module: "user"
                    },
                    magic_user_unregister_webauthn: {
                        module: "user"
                    },
                    magic_user_get_webauthn_credentials: {
                        module: "user"
                    },
                    magic_get_info: {
                        module: "user",
                        isHeadless: !0
                    },
                    magic_auth_get_metadata: {
                        module: "user",
                        pathOverride: "magic_get_info",
                        isHeadless: !0
                    },
                    magic_reveal_key: {
                        module: "user"
                    },
                    reveal_page_login: {
                        module: "user"
                    },
                    mc_disconnect: {
                        module: "user",
                        pathOverride: "magic_auth_logout",
                        isHeadless: !0
                    },
                    ...{
                        magic_nft_checkout: {
                            module: "nft",
                            isServerRoute: !0,
                            disabled: n(23043).TA,
                            allowlist: ["pk_live_AEA500547B9B3DCD", "pk_live_C3D0E30205EBD73A", "pk_live_79389E9CFEDB2ED8", "pk_live_493C3435E752DA8C"]
                        },
                        magic_nft_transfer: {
                            module: "nft",
                            isServerRoute: !0
                        },
                        magic_nft_purchase: {
                            module: "nft",
                            isServerRoute: !0
                        }
                    },
                    mc_login: {
                        module: "wallet"
                    },
                    mc_wallet: {
                        module: "wallet",
                        pathOverride: "magic_wallet"
                    },
                    magic_wallet: {
                        module: "wallet"
                    },
                    magic_show_send_tokens_ui: {
                        module: "wallet"
                    },
                    magic_show_fiat_onramp: {
                        module: "wallet"
                    },
                    magic_show_address: {
                        module: "wallet"
                    },
                    magic_show_nfts: {
                        module: "wallet"
                    },
                    magic_show_balances: {
                        module: "wallet"
                    },
                    magic_oauth_parse_redirect_result: {
                        module: "oauth",
                        isHeadless: !0
                    },
                    magic_oauth_login_with_redirect_start: {
                        module: "oauth",
                        isHeadless: !0
                    },
                    magic_oauth_login_with_redirect_verify: {
                        module: "oauth",
                        isHeadless: !0
                    },
                    magic_oauth_login_with_popup: {
                        module: "oauth",
                        isHeadless: !0
                    },
                    magic_oauth_verify_telegram_data: {
                        module: "oauth",
                        isHeadless: !0
                    },
                    magic_auth_decrypt_v1: {
                        module: "gdkms"
                    },
                    magic_auth_encrypt_v1: {
                        module: "gdkms"
                    },
                    ..._,
                    ...E,
                    ...r,
                    ...c,
                    ...s,
                    ...O,
                    ...l,
                    ...A,
                    ...i,
                    ...g,
                    ...C,
                    ...d,
                    ...N,
                    ...a,
                    ...f,
                    ...I,
                    ...T,
                    ...p,
                    ...m,
                    ...h,
                    wc_reveal_wallet_credentials: {
                        module: "bespoke"
                    },
                    farcaster_login: {
                        module: "farcaster"
                    },
                    farcaster_show_QR: {
                        module: "farcaster"
                    },
                    ...S
                }
        },
        81553: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => o
            });
            var o = function(e) {
                return e.ETH = "ETH", e.BITCOIN = "BITCOIN", e.FLOW = "FLOW", e.ICON = "ICON", e.HARMONY = "HARMONY", e.SOLANA = "SOLANA", e.ZILLIQA = "ZILLIQA", e.TAQUITO = "TAQUITO", e.ALGOD = "ALGOD", e.POLKADOT = "POLKADOT", e.TEZOS = "TEZOS", e.AVAX = "AVAX", e.ED = "ED", e.CONFLUX = "CONFLUX", e.TERRA = "TERRA", e.HEDERA = "HEDERA", e.NEAR = "NEAR", e.COSMOS = "COSMOS", e.APTOS = "APTOS", e.SUI = "SUI", e.KADENA = "KADENA", e
            }({})
        },
        81949: (e, t, n) => {
            "use strict";
            n.d(t, {
                EC: () => s,
                QC: () => r,
                Ym: () => i
            });
            var o = n(69442),
                a = n(53623);
            let s = e => "en-US" === e || "en" === e ? "Secured By" : "";

            function i() {
                var e;
                let {
                    locale: t
                } = (0, o.P)(e => e.decodedQueryParams) || "";
                return null != (e = null == t ? void 0 : t.replace("_", "-")) ? e : "en-US"
            }

            function r(e) {
                let t = null == e ? void 0 : e.replace("_", "-");
                return t ? (a.locales.includes(t) || (t = "en-US"), t) : null
            }
        },
        85515: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => o,
                d: () => a
            });
            let o = !1,
                a = (() => {
                    try {
                        return window.self !== window.top
                    } catch (e) {
                        return !0
                    }
                })()
        },
        90685: (e, t, n) => {
            var o = {
                "./af/common.json": [27900, 27900],
                "./af/confirm.json": [11489, 11489],
                "./af/newton-wallet.json": [12006, 12006],
                "./af/send.json": [41675, 41675],
                "./az/common.json": [40280, 40280],
                "./az/confirm.json": [6301, 6301],
                "./az/newton-wallet.json": [53362, 53362],
                "./az/send.json": [86439, 86439],
                "./bg/common.json": [59555, 81936],
                "./bg/confirm.json": [40757, 40757],
                "./bg/newton-wallet.json": [88970, 88970],
                "./bg/send.json": [77727, 77727],
                "./ca/common.json": [9501, 9501],
                "./ca/confirm.json": [75462, 75462],
                "./ca/newton-wallet.json": [84581, 84581],
                "./ca/send.json": [89862, 89862],
                "./cs/common.json": [68759, 68759],
                "./cs/confirm.json": [36592, 36592],
                "./cs/newton-wallet.json": [47367, 47367],
                "./cs/send.json": [29760, 29760],
                "./cy-GB/common.json": [96127, 96127],
                "./cy-GB/confirm.json": [71672, 71672],
                "./cy-GB/newton-wallet.json": [17999, 17999],
                "./cy-GB/send.json": [41768, 41768],
                "./cy/common.json": [32997, 32997],
                "./cy/confirm.json": [74158, 74158],
                "./cy/newton-wallet.json": [77453, 77453],
                "./cy/send.json": [66638, 66638],
                "./da/common.json": [26260, 26260],
                "./da/confirm.json": [90502, 68121],
                "./da/newton-wallet.json": [44478, 44478],
                "./da/send.json": [21027, 21027],
                "./de/common.json": [90648, 90648],
                "./de/confirm.json": [40221, 40221],
                "./de/newton-wallet.json": [68690, 68690],
                "./de/send.json": [5639, 5639],
                "./el/common.json": [69738, 69738],
                "./el/confirm.json": [17327, 17327],
                "./el/newton-wallet.json": [47364, 47364],
                "./el/send.json": [29489, 29489],
                "./en-US/common.json": [63763, 63763],
                "./en-US/confirm.json": [59260, 59260],
                "./en-US/newton-wallet.json": [50659, 50659],
                "./en-US/send.json": [51884, 51884],
                "./es/common.json": [50457, 50457],
                "./es/confirm.json": [71330, 71330],
                "./es/newton-wallet.json": [81665, 81665],
                "./es/send.json": [36162, 36162],
                "./et/common.json": [74978, 74978],
                "./et/confirm.json": [15047, 15047],
                "./et/newton-wallet.json": [47484, 47484],
                "./et/send.json": [11830, 89449],
                "./fi/common.json": [85138, 85138],
                "./fi/confirm.json": [41335, 41335],
                "./fi/newton-wallet.json": [41228, 41228],
                "./fi/send.json": [11001, 11001],
                "./fr/common.json": [42085, 42085],
                "./fr/confirm.json": [39246, 39246],
                "./fr/newton-wallet.json": [93261, 93261],
                "./fr/send.json": [18702, 18702],
                "./hr/common.json": [17271, 17271],
                "./hr/confirm.json": [94032, 94032],
                "./hr/newton-wallet.json": [48007, 48007],
                "./hr/send.json": [57920, 57920],
                "./hu/common.json": [58804, 58804],
                "./hu/confirm.json": [90329, 90329],
                "./hu/newton-wallet.json": [30270, 30270],
                "./hu/send.json": [71363, 71363],
                "./id/common.json": [22078, 22078],
                "./id/confirm.json": [98035, 98035],
                "./id/newton-wallet.json": [48824, 48824],
                "./id/send.json": [51477, 51477],
                "./it/common.json": [31489, 53870],
                "./it/confirm.json": [83619, 83619],
                "./it/newton-wallet.json": [54344, 54344],
                "./it/send.json": [61189, 61189],
                "./ja/common.json": [41582, 41582],
                "./ja/confirm.json": [83171, 83171],
                "./ja/newton-wallet.json": [79880, 79880],
                "./ja/send.json": [71301, 71301],
                "./ko/common.json": [33267, 33267],
                "./ko/confirm.json": [62812, 62812],
                "./ko/newton-wallet.json": [63587, 63587],
                "./ko/send.json": [39852, 39852],
                "./lt-LT/common.json": [5868, 5868],
                "./lt-LT/confirm.json": [42833, 42833],
                "./lt-LT/newton-wallet.json": [12310, 12310],
                "./lt-LT/send.json": [34043, 34043],
                "./lv-LV/common.json": [83824, 83824],
                "./lv-LV/confirm.json": [87157, 87157],
                "./lv-LV/newton-wallet.json": [84842, 84842],
                "./lv-LV/send.json": [82111, 82111],
                "./mk-MK/common.json": [72376, 72376],
                "./mk-MK/confirm.json": [44573, 44573],
                "./mk-MK/newton-wallet.json": [10066, 10066],
                "./mk-MK/send.json": [42823, 42823],
                "./nl/common.json": [30395, 30395],
                "./nl/confirm.json": [30980, 30980],
                "./nl/newton-wallet.json": [96811, 96811],
                "./nl/send.json": [65556, 65556],
                "./no/common.json": [77292, 77292],
                "./no/confirm.json": [87217, 87217],
                "./no/newton-wallet.json": [1430, 1430],
                "./no/send.json": [9019, 9019],
                "./pl/common.json": [81065, 81065],
                "./pl/confirm.json": [84914, 84914],
                "./pl/newton-wallet.json": [17777, 17777],
                "./pl/send.json": [82546, 82546],
                "./pt/common.json": [53969, 53969],
                "./pt/confirm.json": [55162, 55162],
                "./pt/newton-wallet.json": [33433, 33433],
                "./pt/send.json": [7898, 7898],
                "./ro/common.json": [74888, 74888],
                "./ro/confirm.json": [67661, 67661],
                "./ro/newton-wallet.json": [56514, 56514],
                "./ro/send.json": [67415, 67415],
                "./ru/common.json": [10042, 10042],
                "./ru/confirm.json": [77183, 77183],
                "./ru/newton-wallet.json": [79444, 79444],
                "./ru/send.json": [24609, 24609],
                "./sk/common.json": [80015, 80015],
                "./sk/confirm.json": [95528, 95528],
                "./sk/newton-wallet.json": [81247, 81247],
                "./sk/send.json": [68440, 68440],
                "./sl-SI/common.json": [52139, 52139],
                "./sl-SI/confirm.json": [71444, 71444],
                "./sl-SI/newton-wallet.json": [11323, 11323],
                "./sl-SI/send.json": [13956, 13956],
                "./sr/common.json": [45810, 45810],
                "./sr/confirm.json": [12279, 12279],
                "./sr/newton-wallet.json": [82828, 82828],
                "./sr/send.json": [41721, 41721],
                "./sv/common.json": [43342, 43342],
                "./sv/confirm.json": [7811, 7811],
                "./sv/newton-wallet.json": [56936, 56936],
                "./sv/send.json": [34149, 34149],
                "./th/common.json": [41953, 41953],
                "./th/confirm.json": [71178, 71178],
                "./th/newton-wallet.json": [65545, 65545],
                "./th/send.json": [28061, 50442],
                "./tr/common.json": [75715, 75715],
                "./tr/confirm.json": [53836, 53836],
                "./tr/newton-wallet.json": [62163, 62163],
                "./tr/send.json": [42588, 42588],
                "./vi/common.json": [44245, 66626],
                "./vi/confirm.json": [87271, 87271],
                "./vi/newton-wallet.json": [24924, 24924],
                "./vi/send.json": [53993, 53993],
                "./zh-CN/common.json": [51793, 51793],
                "./zh-CN/confirm.json": [42682, 42682],
                "./zh-CN/newton-wallet.json": [52025, 52025],
                "./zh-CN/send.json": [75610, 75610],
                "./zh-TW/common.json": [35001, 35001],
                "./zh-TW/confirm.json": [37922, 37922],
                "./zh-TW/newton-wallet.json": [65345, 65345],
                "./zh-TW/send.json": [10338, 10338]
            };

            function a(e) {
                if (!n.o(o, e)) return Promise.resolve().then(() => {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                });
                var t = o[e],
                    a = t[0];
                return n.e(t[1]).then(() => n.t(a, 19))
            }
            a.keys = () => Object.keys(o), a.id = 90685, e.exports = a
        }
    }
]);
//# sourceMappingURL=68017-8ec450ea3639ca79.js.map