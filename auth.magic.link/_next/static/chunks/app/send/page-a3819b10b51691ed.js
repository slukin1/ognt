(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [44165], {
        9320: (e, t, r) => {
            "use strict";
            r.d(t, {
                e: () => _
            });
            var a = r(81407),
                s = r(98312),
                i = r(69442),
                o = r(29958),
                n = r(56233),
                c = r(33255),
                l = r(18886);
            class _ {
                digestInMandrakeUI(e) {
                    this.prepareMandrakeRpcHandler(e) && this.handleUIPayload(e.payload)
                }
                async digestInMandrakeHeadless(e) {
                    this.prepareMandrakeRpcHandler(e) && await this.handleHeadlessPayload(e.payload)
                }
                async handleNextPendingRpcRequest() {
                    var e;
                    let t = o.U.getNextPendingRpcRequest();
                    o.U.setActiveRpcPayload(t), t && ((null == (e = a.v[t.method]) ? void 0 : e.isHeadless) ? await this.handleHeadlessPayload(t) : this.handleUIPayload(t))
                }
                async handleHeadlessPayload(e) {
                    let {
                        method: t
                    } = e;
                    try {
                        let {
                            module: s,
                            pathOverride: i
                        } = a.v[t];
                        t = i || t;
                        let {
                            handler: o
                        } = await r(27865)("./".concat(s, "/").concat(t));
                        if (!o) throw Error("Method ".concat(t, " not found in core bundle"));
                        logger.info("Routing RPC request method to core: ".concat(t, " payloadData: ").concat(JSON.stringify(e))), await o(e, this.router) || await this.handleNextPendingRpcRequest()
                    } catch (t) {
                        logger.error("unable to process load payload", t), (0, c.kj)(e, s.d.InternalError, s.l.UnableToProcessPayload), await this.handleNextPendingRpcRequest()
                    }
                }
                handleUIPayload(e) {
                    var t;
                    logger.info("Routing RPC request method: ".concat(e.method, " payloadData: ").concat(JSON.stringify(e)));
                    let r = o.U.constructRpcPath(null == (t = i.P.getState().sdkMetaData) ? void 0 : t.webCryptoDpopJwt);
                    this.router.replace(r)
                }
                prepareMandrakeRpcHandler(e) {
                    if (o.U.getActiveRpcPayload()) return o.U.enqueuePendingRpcRequest(e.payload), !1;
                    if (i.P.setState({
                            isGlobalAppScope: this.isGlobalAppScope,
                            sdkMetaData: {
                                webCryptoDpopJwt: e.jwt,
                                userSessionRefreshToken: e.rt,
                                deviceShare: e.deviceShare
                            }
                        }), !(0, l.mQ)(e.clientAppOrigin, null == e ? void 0 : e.payload, null == e ? void 0 : e.accessAllowlists)) {
                        let t = new URL("/send/error/unauthorized_domain_error", window.location.origin);
                        return t.searchParams.set("origin", e.clientAppOrigin), this.router.replace(t.href), logger.error("Unauthorized Domain triggered", {
                            origin: e.clientAppOrigin,
                            accessAllowlist: null == e ? void 0 : e.accessAllowlists
                        }), n.T.showOverlay(), !1
                    }
                    return o.U.setActiveRpcPayload(e.payload), !0
                }
                constructor(e, t = !1) {
                    this.router = e, this.isGlobalAppScope = t
                }
            }
        },
        18886: (e, t, r) => {
            "use strict";
            r.d(t, {
                JQ: () => c,
                mQ: () => _
            });
            var a = r(23043),
                s = r(12844);
            let i = e => {
                    let t = e.trim().toLowerCase();
                    return "*" === t || "*.*" === t || /^https?:\/\/\*\/?$/.test(t) || /^https?:\/\/\*\/\*\/?$/.test(t)
                },
                o = e => {
                    if (e.startsWith("^") && e.endsWith("$")) return new RegExp(e);
                    let t = e.replace(/([.+?^${}()|[\]\\])/g, "\\$1").replace(/\*/g, ".*");
                    return new RegExp("^".concat(t, "/?$"))
                },
                n = (e, t) => !i(e) && (!!(o(e).test(t) || o(e.replace(/^(https?:\/\/)www\.\*\./, "$1*.")).test(t)) || o(e.replace(/^(https?:\/\/)(www\.)?(\*\.)?/, "$1")).test(t)),
                c = (e, t) => {
                    let r = [],
                        i = (0, s.t)();
                    try {
                        let s = new URL(t),
                            {
                                hostname: o,
                                protocol: c,
                                href: l
                            } = s;
                        if (s.port = "", t = s.href.replace(/\/$/, ""), "localhost" === o && "http:" === c || /^https:\/\/(?:mandrake-[\w-]+\.vercel\.app|auth(?:\.stagef|\.preview)?\.magic\.link)\/v1\/oauth2\/[^\/]+\/callback$/.test(l) || a.pX.includes(t) || t === a.yn || a.Cc.includes(t)) return !0;
                        let _ = e.some(e => {
                            if (e.includes("*")) return n(e, t);
                            let a = new URL(e);
                            if (c !== a.protocol) return r.push({
                                allowListDomain: e,
                                reason: "protocol mismatch"
                            }), !1;
                            let s = decodeURI(a.hostname),
                                i = decodeURI(o),
                                l = s.split(".").reverse(),
                                _ = i.split(".").reverse();
                            if (Math.abs(l.length - _.length) > 1) return r.push({
                                allowListDomain: e,
                                reason: "length obviously longer"
                            }), !1;
                            let d = l.length - 1,
                                u = _.length - 1,
                                h = d > u ? d : u;
                            for (let e = 0; e < h; e++)
                                if (l[e] !== _[e]) return !1;
                            return "www" !== l[d] && "www" !== _[u] && _[h] !== l[h] ? (r.push({
                                allowListDomain: e,
                                reason: "subdomain mismatch"
                            }), !1) : 1 !== Math.abs(l.length - _.length) || ("www" !== l[d] || void 0 === _[d]) && (void 0 !== l[u] || "www" === _[u]) || (r.push({
                                allowListDomain: e,
                                reason: "www ".concat(l[d], ", ").concat(_[d], ", ").concat(l[u], " ,").concat(_[u])
                            }), !1)
                        });
                        return _ || i.warn("event Origin allowlist check failed", {
                            eventOriginToCheck: t,
                            domainAllowlist: e,
                            reasons: r
                        }), _
                    } catch (a) {
                        return i.error("event Origin allowlist check failed unexpected", {
                            eventOriginToCheck: t,
                            domainAllowlist: e,
                            reasons: r,
                            error: a
                        }), !1
                    }
                },
                l = e => {
                    if (!e) return !1;
                    let t = e;
                    if (e.includes("://")) try {
                        t = new URL(e).hostname
                    } catch (t) {
                        return logger.error("Error validating IP address", {
                            value: e,
                            error: t
                        }), !1
                    }
                    return /^(?:\d{1,3}\.){3}\d{1,3}$|^(?:[A-Fa-f0-9]{1,4}:){7}[A-Fa-f0-9]{1,4}$/.test(t)
                },
                _ = (e, t, r) => {
                    let s = null == r ? void 0 : r.length,
                        i = (null == t ? void 0 : t.method.includes("mc")) || (null == t ? void 0 : t.method.includes("magic")) || (null == t ? void 0 : t.method.includes("mwui")),
                        o = l(e);
                    return !s || !i || o && !a.TA || c(r, e)
                }
        },
        24390: (e, t, r) => {
            "use strict";
            var a = r(30554);
            r.o(a, "useParams") && r.d(t, {
                useParams: function() {
                    return a.useParams
                }
            }), r.o(a, "usePathname") && r.d(t, {
                usePathname: function() {
                    return a.usePathname
                }
            }), r.o(a, "useRouter") && r.d(t, {
                useRouter: function() {
                    return a.useRouter
                }
            }), r.o(a, "useSearchParams") && r.d(t, {
                useSearchParams: function() {
                    return a.useSearchParams
                }
            })
        },
        27865: (e, t, r) => {
            var a = {
                "./auth/__tests__/magic_auth_login_with_credentials.spec": [53633, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 42726],
                "./auth/__tests__/magic_auth_login_with_credentials.spec.ts": [53633, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 42726],
                "./auth/__tests__/magic_auth_login_with_oidc.spec": [91456, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 98875],
                "./auth/__tests__/magic_auth_login_with_oidc.spec.ts": [91456, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 98875],
                "./auth/magic_auth_login_with_credential": [80249, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 93302],
                "./auth/magic_auth_login_with_credential.ts": [80249, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 93302],
                "./auth/magic_auth_login_with_oidc": [13209, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 53054],
                "./auth/magic_auth_login_with_oidc.ts": [13209, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 53054],
                "./common/__tests__/hydrate-session.spec": [61810, 8351, 42275, 44025, 64443, 16711, 61067, 48315, 38425, 28789],
                "./common/__tests__/hydrate-session.spec.ts": [61810, 8351, 42275, 44025, 64443, 16711, 61067, 48315, 38425, 28789],
                "./common/hydrate-session": [63403, 8351, 42275, 44025, 64443, 16711, 61067, 48315, 38425, 90318],
                "./common/hydrate-session.ts": [63403, 8351, 42275, 44025, 64443, 16711, 61067, 48315, 38425, 90318],
                "./eth/__tests__/eth_accounts.spec": [82582, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 61067, 48315, 38425, 78549],
                "./eth/__tests__/eth_accounts.spec.ts": [82582, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 61067, 48315, 38425, 78549],
                "./eth/__tests__/eth_coinbase.spec": [95802, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 45016, 95802],
                "./eth/__tests__/eth_coinbase.spec.ts": [95802, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 45016, 95802],
                "./eth/__tests__/eth_gasPrice.spec": [20212, 8351, 42275, 44025, 61067, 20212],
                "./eth/__tests__/eth_gasPrice.spec.ts": [20212, 8351, 42275, 44025, 61067, 20212],
                "./eth/__tests__/eth_requestAccounts.spec": [5883, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 61067, 48315, 38425, 15834],
                "./eth/__tests__/eth_requestAccounts.spec.ts": [5883, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 61067, 48315, 38425, 15834],
                "./eth/__tests__/eth_sign.spec": [78405, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 37622],
                "./eth/__tests__/eth_sign.spec.ts": [78405, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 37622],
                "./eth/__tests__/eth_signTransaction.spec": [45725, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 95744, 30675, 61067, 48315, 38425, 47780, 76875, 45725],
                "./eth/__tests__/eth_signTransaction.spec.ts": [45725, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 95744, 30675, 61067, 48315, 38425, 47780, 76875, 45725],
                "./eth/__tests__/eth_signTypedData.spec": [6249, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 61456],
                "./eth/__tests__/eth_signTypedData.spec.ts": [6249, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 61456],
                "./eth/__tests__/eth_signTypedData_v3.spec": [32703, 8351, 42275, 44025, 86337, 64443, 16711, 19218, 48624, 68100, 73244, 8855, 15110, 7574, 95744, 61067, 48315, 38425, 71834, 51008, 25727, 47780, 62257, 54307, 5002],
                "./eth/__tests__/eth_signTypedData_v3.spec.ts": [32703, 8351, 42275, 44025, 86337, 64443, 16711, 19218, 48624, 68100, 73244, 8855, 15110, 7574, 95744, 61067, 48315, 38425, 71834, 51008, 25727, 47780, 62257, 54307, 5002],
                "./eth/__tests__/eth_signTypedData_v4.spec": [77304, 8351, 42275, 44025, 86337, 64443, 16711, 19218, 48624, 68100, 73244, 8855, 15110, 7574, 95744, 61067, 48315, 38425, 71834, 51008, 25727, 47780, 62257, 54307, 62803],
                "./eth/__tests__/eth_signTypedData_v4.spec.ts": [77304, 8351, 42275, 44025, 86337, 64443, 16711, 19218, 48624, 68100, 73244, 8855, 15110, 7574, 95744, 61067, 48315, 38425, 71834, 51008, 25727, 47780, 62257, 54307, 62803],
                "./eth/__tests__/net_version.spec": [15332, 8351, 42275, 44025, 61067, 15332],
                "./eth/__tests__/net_version.spec.ts": [15332, 8351, 42275, 44025, 61067, 15332],
                "./eth/__tests__/personal_ecRecover.spec": [81015, 19218, 48624, 5453],
                "./eth/__tests__/personal_ecRecover.spec.ts": [81015, 19218, 48624, 5453],
                "./eth/__tests__/personal_sign.spec": [51040, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 40059],
                "./eth/__tests__/personal_sign.spec.ts": [51040, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 40059],
                "./eth/eth_accounts": [6083, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 61067, 48315, 38425, 45508],
                "./eth/eth_accounts.ts": [6083, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 61067, 48315, 38425, 45508],
                "./eth/eth_coinbase": [74383, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 45016],
                "./eth/eth_coinbase.ts": [74383, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 45016],
                "./eth/eth_gasPrice": [33229, 8351, 42275, 44025, 61067, 33229],
                "./eth/eth_gasPrice.ts": [33229, 8351, 42275, 44025, 61067, 33229],
                "./eth/eth_requestAccounts": [13628, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 61067, 48315, 38425, 27055],
                "./eth/eth_requestAccounts.ts": [13628, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 61067, 48315, 38425, 27055],
                "./eth/eth_sign": [57458, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 79797],
                "./eth/eth_sign.ts": [57458, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 79797],
                "./eth/eth_signTransaction": [34702, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 95744, 30675, 61067, 48315, 38425, 47780, 76875],
                "./eth/eth_signTransaction.ts": [34702, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 95744, 30675, 61067, 48315, 38425, 47780, 76875],
                "./eth/eth_signTypedData": [57314, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 48091],
                "./eth/eth_signTypedData.ts": [57314, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 48091],
                "./eth/eth_signTypedData_v3": [37136, 8351, 42275, 44025, 86337, 64443, 16711, 19218, 48624, 68100, 73244, 8855, 15110, 7574, 95744, 61067, 48315, 38425, 71834, 51008, 25727, 47780, 62257, 54307, 88795],
                "./eth/eth_signTypedData_v3.ts": [37136, 8351, 42275, 44025, 86337, 64443, 16711, 19218, 48624, 68100, 73244, 8855, 15110, 7574, 95744, 61067, 48315, 38425, 71834, 51008, 25727, 47780, 62257, 54307, 88795],
                "./eth/eth_signTypedData_v4": [79301, 8351, 42275, 44025, 86337, 64443, 16711, 19218, 48624, 68100, 73244, 8855, 15110, 7574, 95744, 61067, 48315, 38425, 71834, 51008, 25727, 47780, 62257, 54307, 85628],
                "./eth/eth_signTypedData_v4.ts": [79301, 8351, 42275, 44025, 86337, 64443, 16711, 19218, 48624, 68100, 73244, 8855, 15110, 7574, 95744, 61067, 48315, 38425, 71834, 51008, 25727, 47780, 62257, 54307, 85628],
                "./eth/net_version": [23609, 8351, 42275, 44025, 61067, 23609],
                "./eth/net_version.ts": [23609, 8351, 42275, 44025, 61067, 23609],
                "./eth/personal_ecRecover": [96560, 19218, 48624, 47866],
                "./eth/personal_ecRecover.ts": [96560, 19218, 48624, 47866],
                "./eth/personal_sign": [67257, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 33634],
                "./eth/personal_sign.ts": [67257, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 33634],
                "./headless-payload-handler": [28886, 28886],
                "./headless-payload-handler.ts": [28886, 28886],
                "./oauth/__tests__/magic_oauth_login_with_popup.spec": [40075, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 98087, 91502, 40075],
                "./oauth/__tests__/magic_oauth_login_with_popup.spec.ts": [40075, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 98087, 91502, 40075],
                "./oauth/__tests__/magic_oauth_login_with_redirect_start.spec": [39152, 8351, 42275, 44025, 64443, 16711, 61067, 78137],
                "./oauth/__tests__/magic_oauth_login_with_redirect_start.spec.ts": [39152, 8351, 42275, 44025, 64443, 16711, 61067, 78137],
                "./oauth/__tests__/magic_oauth_login_with_redirect_verify.spec": [44765, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 98087, 91502, 44765],
                "./oauth/__tests__/magic_oauth_login_with_redirect_verify.spec.ts": [44765, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 98087, 91502, 44765],
                "./oauth/__tests__/magic_oauth_parse_redirect_result.spec": [98984, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 6626, 98984],
                "./oauth/__tests__/magic_oauth_parse_redirect_result.spec.ts": [98984, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 6626, 98984],
                "./oauth/__tests__/magic_oauth_verify_telegram_data.spec": [28464, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 98087, 91502, 28464],
                "./oauth/__tests__/magic_oauth_verify_telegram_data.spec.ts": [28464, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 98087, 91502, 28464],
                "./oauth/magic_oauth_login_with_popup": [16880, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 98087, 91502, 16880],
                "./oauth/magic_oauth_login_with_popup.ts": [16880, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 98087, 91502, 16880],
                "./oauth/magic_oauth_login_with_redirect_start": [56941, 8351, 42275, 44025, 64443, 16711, 61067, 54314],
                "./oauth/magic_oauth_login_with_redirect_start.ts": [56941, 8351, 42275, 44025, 64443, 16711, 61067, 54314],
                "./oauth/magic_oauth_login_with_redirect_verify": [65543, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 98087, 91502, 65543],
                "./oauth/magic_oauth_login_with_redirect_verify.ts": [65543, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 98087, 91502, 65543],
                "./oauth/magic_oauth_parse_redirect_result": [21073, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 6626],
                "./oauth/magic_oauth_parse_redirect_result.ts": [21073, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 6626],
                "./oauth/magic_oauth_verify_telegram_data": [18701, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 98087, 91502, 18701],
                "./oauth/magic_oauth_verify_telegram_data.ts": [18701, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 98087, 91502, 18701],
                "./sol/__tests__/sol_signTransaction.spec": [11925, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 32376],
                "./sol/__tests__/sol_signTransaction.spec.ts": [11925, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 32376],
                "./sol/sol_signTransaction": [53606, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 36579],
                "./sol/sol_signTransaction.ts": [53606, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 47780, 36579],
                "./user/__tests__/magic_auth_logout.spec": [76645, 8351, 42275, 44025, 64443, 16711, 61067, 48315, 38425, 46046],
                "./user/__tests__/magic_auth_logout.spec.ts": [76645, 8351, 42275, 44025, 64443, 16711, 61067, 48315, 38425, 46046],
                "./user/__tests__/magic_get_info.spec": [76851, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 17223, 76851],
                "./user/__tests__/magic_get_info.spec.ts": [76851, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 17223, 76851],
                "./user/__tests__/magic_is_logged_in.spec": [80021, 8351, 42275, 44025, 64443, 16711, 61067, 48315, 38425, 29900],
                "./user/__tests__/magic_is_logged_in.spec.ts": [80021, 8351, 42275, 44025, 64443, 16711, 61067, 48315, 38425, 29900],
                "./user/magic_auth_logout": [18374, 8351, 42275, 44025, 64443, 16711, 61067, 48315, 38425, 52335],
                "./user/magic_auth_logout.ts": [18374, 8351, 42275, 44025, 64443, 16711, 61067, 48315, 38425, 52335],
                "./user/magic_get_info": [25028, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 17223],
                "./user/magic_get_info.ts": [25028, 8351, 42275, 44025, 64443, 16711, 19218, 48624, 15110, 61067, 48315, 38425, 17223],
                "./user/magic_is_logged_in": [18990, 8351, 42275, 44025, 64443, 16711, 61067, 48315, 38425, 6197],
                "./user/magic_is_logged_in.ts": [18990, 8351, 42275, 44025, 64443, 16711, 61067, 48315, 38425, 6197]
            };

            function s(e) {
                if (!r.o(a, e)) return Promise.resolve().then(() => {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                });
                var t = a[e],
                    s = t[0];
                return Promise.all(t.slice(1).map(r.e)).then(() => r(s))
            }
            s.keys = () => Object.keys(a), s.id = 27865, e.exports = s
        },
        33255: (e, t, r) => {
            "use strict";
            async function a(e) {
                for (let t of e) try {
                    await t()
                } catch (e) {
                    console.error("Error resolving sequential promise: ", e)
                }
            }
            r.d(t, {
                tC: () => i,
                Rb: () => o,
                JP: () => n,
                kj: () => c
            });
            var s = r(45467);
            let i = -32603,
                o = "Internal error";
            class n extends Error {
                constructor(e) {
                    var t, r, a;
                    super(), this.code = null, this.jsonRpcError = {
                        code: null != (t = e.code) ? t : i,
                        message: null != (r = e.message) ? r : o,
                        data: null != (a = e.data) ? a : void 0
                    }, this.code = this.jsonRpcError.code, this.message = this.jsonRpcError.message, Object.setPrototypeOf(this, n.prototype)
                }
            }
            async function c(e, t, r, n) {
                if (!e) return void logger.error("sdkReject: No active RPC payload to resolve", {
                    payload: e,
                    errorCode: t,
                    errorMessage: r,
                    errorData: n
                });
                try {
                    if (!Array.isArray(e) && (null == e ? void 0 : e.id))(0, s.H)({
                        payload: e,
                        error: {
                            code: null != t ? t : i,
                            message: null != r ? r : o,
                            data: null != n ? n : void 0
                        }
                    });
                    else if (Array.isArray(e) && e.length > 0) {
                        let s = e.map(e => () => c(e, t, r, n));
                        await a(s)
                    }
                } catch (e) {
                    logger.error("Error while executing sdk reject: ", e)
                }
            }
        },
        45467: (e, t, r) => {
            "use strict";
            r.d(t, {
                H: () => l
            });
            var a = r(29958),
                s = r(72102),
                i = r(19834),
                o = r(33255),
                n = r(69442);
            let c = ["reveal_page_login"];

            function l(e) {
                var t;
                let {
                    sdkMetaData: r
                } = n.P.getState(), {
                    payload: l
                } = e;
                if (!l) return void logger.warn("sdkResolve: No active RPC payload to resolve", {
                    configuration: e
                });
                let {
                    id: _,
                    jsonrpc: d,
                    method: u
                } = l, h = e.error instanceof o.JP ? e.error.jsonRpcError : null != (t = e.error) ? t : void 0, g = !!h, p = void 0 !== e.result && !g, m = c.includes(u) ? "with result: ".concat(JSON.stringify(e.result)) : "";
                a.U.performance.stopTrackPayloadTimeout();
                let v = {
                    payload: e.payload,
                    json_rpc_method: u,
                    duration: a.U.performance.getDuration(u),
                    isUIFlow: a.U.performance.getIsUIFlow()
                };
                p && logger.info("Resolved active RPC request ".concat(JSON.stringify({
                    id: _,
                    jsonrpc: d,
                    method: u
                }), " ").concat(m), v), g && logger.info("Rejected active RPC request ".concat(JSON.stringify({
                    id: _,
                    jsonrpc: d,
                    method: u
                }), " with errorCode: ").concat(null == h ? void 0 : h.code, ", errorMessage: ").concat(null == h ? void 0 : h.message, ", errorData: ").concat(JSON.stringify(null == h ? void 0 : h.data)), v);
                let f = {
                    jsonrpc: null != d ? d : "2.0",
                    id: null != _ ? _ : null,
                    result: p ? e.result : void 0,
                    error: g ? h : void 0
                };
                (0, s.c)(i.rK.MAGIC_HANDLE_RESPONSE, f, null == r ? void 0 : r.userSessionRefreshToken, null == r ? void 0 : r.deviceShare)
            }
        },
        56233: (e, t, r) => {
            "use strict";
            r.d(t, {
                T: () => o
            });
            var a = r(94623),
                s = r(72102),
                i = r(29958);
            let o = {
                overlayGreenlight: () => {
                    (0, s.c)(a.z.MAGIC_OVERLAY_READY)
                },
                showOverlay: () => {
                    i.U.performance.setIsUIFlow(!0), (0, s.c)(a.z.MAGIC_SHOW_OVERLAY)
                },
                hideOverlay: () => {
                    (0, s.c)(a.z.MAGIC_HIDE_OVERLAY)
                }
            }
        },
        88582: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 67324)), Promise.resolve().then(r.bind(r, 94537))
        },
        94537: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => p
            });
            var a = r(39798),
                s = r(85515),
                i = r(13270);
            let o = e => {
                let {
                    children: t
                } = e;
                return s.d ? (0, a.jsx)(a.Fragment, {
                    children: t
                }) : (0, a.jsx)("div", {
                    style: {
                        color: "white"
                    },
                    children: "Not found"
                })
            };
            var n = r(60129),
                c = r(69442),
                l = r(41671);
            let _ = (e, t) => {
                let r = (0, i.useRef)(!0),
                    a = (0, i.useMemo)(() => (0, l.vt)(() => t), []);
                return r.current && (e.setState(t), r.current = !1), s.S ? a : e
            };
            var d = r(29958),
                u = r(38425),
                h = r(8790),
                g = r(24390);

            function p(e) {
                let {
                    encodedQueryParams: t,
                    decodedQueryParams: r
                } = e;
                _(c.P, {
                    decodedQueryParams: r
                });
                let s = r.apiKey,
                    {
                        setColors: l,
                        setRadius: p
                    } = (0, h.r)({}),
                    [m, v] = (0, i.useState)(null),
                    f = (0, i.useRef)(void 0),
                    y = (0, g.useRouter)();
                return (0, i.useEffect)(() => {
                    "serviceWorker" in navigator && navigator.serviceWorker.getRegistrations().then(function(e) {
                        for (let t of e) t.unregister()
                    }).catch(function(e) {
                        logger.log("Service Worker unregistration failed:", e)
                    })
                }, []), (0, i.useEffect)(() => {
                    !f.current && s && (async () => {
                        try {
                            let e = await (0, n.qX)({
                                magicApiKey: s
                            });
                            d.U.setEncodedQueryParams(t), f.current = new u.m(y, t, e), v(e.clientTheme)
                        } catch (e) {
                            logger.error("Magic iframe initialization error", e)
                        }
                    })()
                }, [s]), (0, i.useEffect)(() => {
                    m && (async () => {
                        try {
                            let e = "dark" === m.themeColor ? "dark" : "light",
                                {
                                    textColor: t,
                                    buttonColor: r,
                                    buttonRadius: a,
                                    containerRadius: s,
                                    backgroundColor: i,
                                    neutralColor: o
                                } = m;
                            document.documentElement.setAttribute("data-color-mode", e), t && l("text", t), a && p("button", a), s && p("container", s), i && l("surface", i), o && l("neutral", o), r && l("brand", r)
                        } catch (e) {
                            logger.error("Error setting client theme", e)
                        }
                    })()
                }, [m]), (0, a.jsx)(o, {})
            }
        },
        94623: (e, t, r) => {
            "use strict";
            r.d(t, {
                x: () => i,
                z: () => s
            });
            var a = r(19834);
            let s = { ...a.rK
                },
                i = { ...a.F8
                }
        },
        98312: (e, t, r) => {
            "use strict";
            r.d(t, {
                d: () => a,
                l: () => s
            });
            var a = function(e) {
                    return e[e.ParseError = -32700] = "ParseError", e[e.InvalidRequest = -32600] = "InvalidRequest", e[e.MethodNotFound = -32601] = "MethodNotFound", e[e.InvalidParams = -32602] = "InvalidParams", e[e.InternalError = -32603] = "InternalError", e[e.EmailLinkFailedVerification = -1e4] = "EmailLinkFailedVerification", e[e.EmailLinkExpired = -10001] = "EmailLinkExpired", e[e.EmailLinkRateLimited = -10002] = "EmailLinkRateLimited", e[e.UserAlreadyLoggedIn = -10003] = "UserAlreadyLoggedIn", e[e.UpdateEmailFailed = -10004] = "UpdateEmailFailed", e[e.UserRequestEditEmail = -10005] = "UserRequestEditEmail", e[e.EmailLinkInvalidRedirectURL = -10006] = "EmailLinkInvalidRedirectURL", e[e.InactiveRecipient = -10010] = "InactiveRecipient", e[e.AccessDeniedToUser = -10011] = "AccessDeniedToUser", e[e.UserRejectedAction = -10012] = "UserRejectedAction", e[e.RequestCancelled = -10014] = "RequestCancelled", e[e.RedirectLoginComplete = -10015] = "RedirectLoginComplete", e[e.SessionTerminated = -10016] = "SessionTerminated", e[e.PopupRequestOverriden = -10017] = "PopupRequestOverriden", e[e.SanEmail = -10018] = "SanEmail", e[e.DpopInvalidated = -10019] = "DpopInvalidated", e[e.MaxAttemptsReached = -10031] = "MaxAttemptsReached", e
                }({}),
                s = function(e) {
                    return e.UnableToProcessPayload = "Internal error: Unable to process request, please try again.", e.UserDeniedAccountAccess = "Internal error: User denied account access.", e.UnableToLogin = "Unable to Login, Please try again", e.UserCanceledAction = "Internal error: User canceled action.", e.UnsupportedBlockchain = "Internal error: Blockchain not supported. Please select a different blockchain network.", e.UserDeniedSigning = "Internal error: User denied signing.", e.UserDisconnected = "User disconnected from app.", e.GaslessTransactionsNotEnabled = "Gasless transactions not enabled", e.FailedToFetchConfig = "Internal error: Failed to fetch client config", e.InternalError = "Internal server error", e.UserTerminatedSession = "User terminated session", e.MissingJWT = "Missing jwt.", e.InvalidJwtOrProviderId = "Invalid params: Invalid jwt or provider id.", e.InvalidPhoneNumber = "Invalid params: Invalid phone number.", e.MalformedEmail = "Invalid params: Please provide a valid email address.", e.InvalidParams = "Invalid params: Invalid Rpc Request Parameters.", e.SanEmail = "We are unable to create an account with that email.", e.UserLockoutLifted = "Invalid request: User lockout lifted.", e.UserNotLoggedInWithWebAuthn = "Invalid request: User is not logged in with WebAuthn!", e.UnableToFindWebauthnDevice = "Invalid request: Unable to find the device.", e.UserRequestEditEmail = "User requests to edit the email address for authentication.", e.InsecureBrowserContext = "Current environment is insecure, please check your browser environment", e.UserRejectedAction = "User rejected the action", e.PopupRequestOverriden = "User began a new action", e.MethodNotAllowed = "Method not allowed", e.UnableToGetNetworkInfo = "Unable to get network info", e.UnexpectedEthereumProxyError = "Unexpected Ethereum Node Error", e.FeatureToggledMisConfigured = "Feature toggled misconfigured", e.MissingRequiredParams = "Missing required params in 'authorizationResponseParams'", e.StateParameterMismatches = "State parameter mismatches.", e.MissingRequiredParamsFromStorage = "Failed to finish OAuth verification. Missing required data in browser", e.MissingOAuthProviderConfiguration = "Missing OAuth provider configuration", e.OAuthProviderNotSupported = "RPC route not enabled or provider not supported", e.RedirectURINotInAllowlist = "Redirect URI not in allowlist", e.OAuthUserAlreadyLoggedIn = "Skipped remaining OAuth verification steps. User is already logged in.", e.MFAAlreadyEnabled = "MFA already enabled for the user", e.MFAAlreadyDisabled = "No MFA factor found for the user", e.FeatureNotEnabled = "Feature not enabled", e.UnauthorizedDomain = "Unauthorized domain provided", e.FailedToLogin = "Failed to Login", e.DpopSignatureValidationError = "DPOP signature validation error", e.WalletHydrationError = "Failed to get wallet. Please try again.", e.FailedToSignTransaction = "Failed to sign transaction, Please try again.", e.SignerMismatch = "Signer mismatch", e.SigningError = "Error signing. Please try again", e.UserNotFound = "Given user resource not found.", e.NoRecoveryMethodFound = "No recovery methods found.", e.MaxAttemptsReached = "You’ve reached the maximum number of allowed attempts. Please try again later.", e
                }({})
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [8351, 42275, 44025, 9e3, 62291, 40067, 47491, 61067, 68017, 38425, 53177, 12237, 2135, 77358], () => t(88582)), _N_E = e.O()
    }
]);
//# sourceMappingURL=page-a3819b10b51691ed.js.map