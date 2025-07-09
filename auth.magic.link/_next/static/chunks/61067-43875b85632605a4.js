"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [61067], {
        9029: (e, t, a) => {
            a.d(t, {
                Do: () => u,
                Kj: () => r,
                Kn: () => h,
                T$: () => g,
                WA: () => d,
                yI: () => L
            });
            var r = function(e) {
                    return e.Send = "/send", e.SendLegacy = "/send-legacy", e.Confirm = "/confirm", e.Login = "/login", e.Preview = "/preview/:id", e.ConfirmAction = "/confirm-action", e.ConfirmEmail = "/confirm-email/:type", e.Error = "/error", e.NewDevice = "/v1/new-device-verification", e.NFTTransfer = "/v1/nft-transfer", e
                }({}),
                n = function(e) {
                    return e.Config = "/v2/core/magic_client/config", e.OAuthApp = "/v1/api/magic_client/oauth_app", e.TelegramApp = "/v1/api/magic_client/telegram_app", e
                }({}),
                s = function(e) {
                    return e.Persist = "/v1/session/persist", e.Refresh = "/v1/session/refresh", e
                }({}),
                i = function(e) {
                    return e.GetWalletInfo = "/v1/core/wallet", e.SyncWallet = "/v3/auth/user/wallet/sync", e.Export = "/v1/auth/user/wallet/export", e
                }({}),
                o = function(e) {
                    return e.GetUserSessionTokenFromRefreshToken = "/v1/auth/user/session/refresh", e.VerifySession = "/v1/auth/user/session/verify", e.Logout = "/v1/logout", e.GetUserInfo = "/v1/core/user", e
                }({}),
                c = function(e) {
                    return e.Factor = "/v1/auth/user/factor", e.Challenge = "/alpha/v1/factor/challenge", e.Verify = "/alpha/v1/factor/verify", e.EmailUpdateChallenge = "/v1/auth/user/email/update/challenge", e.EmailUpdateVerify = "/v1/auth/user/email/update/verify", e.RecoveryChallenge = "/v1/auth/user/recovery/challenge", e.RecoveryVerify = "/v1/auth/user/recovery/verify", e
                }({}),
                l = function(e) {
                    return e.Start = "/v2/auth/user/login/email_otp/start", e.Verify = "/v1/auth/user/login/email_otp/verify", e.ToasterStart = "/v1/auth/email_otp/start", e.ToasterVerify = "/v1/auth/email_otp/verify", e
                }({}),
                u = function(e) {
                    return e.Start = "/v2/auth/user/login/email/start", e.RedirectConfirm = "/v1/auth/user/login/email/confirm", e.Status = "/v1/auth/user/login/email/status", e.LoginVerify = "/v2/auth/user/login/verify", e.AnomalyApprove = "/v1/request_anomaly/approve", e.AnomalyBlock = "/v1/request_anomaly/block", e
                }({}),
                d = function(e) {
                    return e.Verify = "/v1/auth/user/login/oauth/verify", e.VerifyTelegram = "/v1/auth/telegram/verify", e.ToasterVerify = "/v1/auth/oauth/verify", e
                }({}),
                h = function(e) {
                    return e.Verify = "/v1/auth/farcaster/verify", e
                }({}),
                g = function(e) {
                    return e.UserInfo = "/v1/oauth2/user/info/retrieve", e.Verify = "/v2/oauth/user/verify", e.SendCredential = "/v1/oauth2/credential/send", e.SendError = "/v1/oauth2/error/send", e
                }({}),
                f = function(e) {
                    return e.StartTemporaryOtpEnroll = "/v1/auth/user/enroll/totp/create", e.FinishTemporaryOtpEnroll = "/v1/auth/user/enroll/totp/enable", e.DisableTemporaryOtp = "/v1/auth/user/enroll/totp/disable", e.DisableTemporaryOtpRecoveryCode = "/v1/auth/user/enroll/codes/disable", e.VerifyTemporaryOtp = "/v1/auth/user/login/totp/verify", e.VerifyTemporaryOtpRecoveryCode = "/v1/auth/user/login/codes/verify", e.ToasterVerify = "/v1/auth/mfa/verify", e
                }({}),
                p = function(e) {
                    return e.Login = "/v2/auth/user/redirect/login", e
                }({}),
                v = function(e) {
                    return e.Start = "/v1/auth/user/login/phone/start", e.Verify = "/v1/auth/user/login/phone/verify", e
                }({}),
                y = function(e) {
                    return e.Login = "/v1/auth/user/login/jwt/verify", e
                }({}),
                m = function(e) {
                    return e.DeviceProfile = "/v1/auth/user/device_profile", e.ToasterDeviceProfile = "/v1/auth/device_profile", e
                }({}),
                S = function(e) {
                    return e.RestrationStart = "/v1/auth/user/web_authn/registration/start", e.Register = "/v1/auth/user/web_authn/register", e.RegisterDeviceStart = "/v1/auth/user/web_authn/device/registration/start", e.RegisterDevice = "/v1/auth/user/web_authn/device/register", e.ReauthStart = "/v1/auth/user/web_authn/re_auth/start", e.ReauthVerify = "/v1/auth/user/web_authn/re_auth/verify", e.Unregister = "/v1/auth/user/web_authn/unregister", e.Update = "/v1/auth/user/web_authn/info/update", e
                }({}),
                A = function(e) {
                    return e.Start = "/v1/connect/user/login/email_otp/start", e.Sync = "/v1/connect/user/wallet/sync", e.UserInfoRetrieve = "/v1/connect/user/info/retrieve", e
                }({}),
                _ = function(e) {
                    return e.Start = "/v1/connect/user/login/jwt/start/google", e.Verify = "/v1/connect/user/login/jwt/verify", e
                }({}),
                E = function(e) {
                    return e.Start = "/v1/connect/user/login/3p_wallet/start", e
                }({}),
                w = function(e) {
                    return e.FlowSeedWallet = "/v1/auth/user/wallet/flow/seed", e.HederaSignMessage = "/v1/auth/user/wallet/hedera/message/sign", e.KadenaCreateWallet = "/v1/auth/user/wallet/kadena/create", e.KadenaVerifySpireKeyLogin = "/v1/auth/user/login/spirekey/verify", e.KadenaSpireKeyChallenge = "/v1/auth/user/login/spirekey/challenge", e
                }({}),
                k = function(e) {
                    return e.MagicClientAPI = "/api/magic-client", e
                }({}),
                b = function(e) {
                    return e.NftTokenInfo = "/v1/nft/token_info", e.PaypalClientToken = "/v1/nft/checkout/client_token", e.CreateOrder = "/v1/nft/checkout/create_order", e.AuthorizeOrder = "/v1/nft/checkout/authorize_order", e.RequestStatus = "/v1/nft/request/status", e.PaypalOrderDetails = "/v1/nft/checkout/payeremail", e
                }({}),
                R = function(e) {
                    return e.Proxy = "/v1/ethereum/json-rpc", e.GasPriceEstimation = "/v1/ethereum/gas/price/estimation/retrieve", e
                }({}),
                C = function(e) {
                    return e.StripeClientToken = "/v1/stripe/onramp/client_secret", e.SardineClientToken = "/v1/sardine/client_token", e.PaypalGetOrder = "/v1/paypal/crypto/orders", e.PaypalCreateOrder = "/v1/paypal/crypto/order-entries", e
                }({}),
                T = function(e) {
                    return e.Begin = "/v1/core/user/action/confirm/begin", e.Status = "/v1/core/user/action/confirm/status", e.Verify = "/v1/core/user/action/confirm/verify_token", e.Complete = "/v1/core/user/action/confirm/complete", e
                }({}),
                U = function(e) {
                    return e.TokenPrice = "/v1/currency/convert", e
                }({}),
                M = function(e) {
                    return e.SubmitGaslessRequest = "/v1/relayer/submit-gasless-request", e.GetNonceAddition = "/v1/relayer/get-nonce-addition", e.GetRequestState = "/v1/relayer/get-request-state", e
                }({}),
                P = function(e) {
                    return e.GetTokenBalance = "/v1/token/balance", e.GetTokenMetadata = "/v1/token/metadata", e.GetNftsForOwner = "/v1/nft/nfts_for_owner", e
                }({}),
                x = function(e) {
                    return e.RevealPK = "/v1/api/wallet/reveal_pk", e
                }({}),
                N = function(e) {
                    return e.RateLimitStatus = "/v1/exchange/rate_limit_status", e.Convert = "/v1/exchange/convert", e
                }({});
            let L = {
                Client: r,
                DeviceVerification: m,
                EmailOtp: l,
                EmailLink: u,
                AccountRecovery: c,
                LegacyOAuth: g,
                MagicClient: n,
                MFA: f,
                Oidc: y,
                Redirect: p,
                Session: s,
                SMS: v,
                User: o,
                MagicApiWallet: x,
                Wallet: i,
                WebAuthn: S,
                Universal: A,
                LegacySignInWithGoogle: _,
                ThirdPartyWallet: E,
                Multichain: w,
                MandrakeAPI: k,
                Nft: b,
                Ethereum: R,
                Onramp: C,
                ConfirmAction: T,
                Farcaster: h,
                Token: U,
                Gas: M,
                PassportIdentity: {
                    Config: "/v1/app",
                    EmailChallenge: "/v1/auth/user_factor/email/challenge",
                    VerifyFactor: "/v1/auth/user_factor/verify",
                    CreatePasskeyChallenge: "/v1/auth/user_factor/passkey/create/challenge",
                    PasskeyChallenge: "/v1/auth/user_factor/passkey/challenge",
                    UserFactor: "/v1/auth/user_factor",
                    EmailChallengeAuthenticated: "/v1/user_factor/email/create/challenge",
                    VerifyFactorAuthenticated: "/v1/user_factor/verify",
                    CreatePasskeyChallengeAuthenticated: "/v1/user_factor/passkey/create/challenge",
                    PasskeyChallengeAuthenticated: "/v1/user_factor/passkey/challenge",
                    UserFactorAuthenticated: "/v1/user_factor",
                    UserFactorChallenge: e => "/v1/user_factor/".concat(e, "/challenge"),
                    OauthAuthorize: "/v1/authorize",
                    OauthToken: "/v1/token",
                    PassportUser: "/v1/user",
                    Logout: "/v1/auth/logout",
                    Referral: e => "/v1/referral/".concat(e),
                    UserReferral: "/v1/user_referral"
                },
                PassportOps: {
                    PassportWallet: "/v1/wallet",
                    RevealPrivateKey: "/v1/reveal_private_key",
                    TransactionHistory: "/v1/transactions",
                    ListAgents: "/v1/agent",
                    GetAgentMessages: e => "/v1/agent/".concat(e, "/message"),
                    PushAgentMessage: e => "/v1/agent/".concat(e, "/message"),
                    CreateDCAAgent: "/v1/dca_agent",
                    GetDCAAgent: e => "/v1/dca_agent/".concat(e),
                    UpdateDCAAgent: e => "/v1/dca_agent/".concat(e),
                    DeleteDCAAgent: e => "/v1/dca_agent/".concat(e),
                    ExecuteDCA: "/execute_dca_agent",
                    DisableDCAAgent: e => "/v1/dca_agent/".concat(e, "/disable"),
                    EnableDCAAgent: e => "/v1/dca_agent/".concat(e, "/enable"),
                    ResumeDCAAgent: e => "/v1/dca_agent/".concat(e, "/resume"),
                    CreateAirdropAgent: "/v1/airdrop_agent",
                    GetAirdropAgent: e => "/v1/airdrop_agent/".concat(e),
                    UpdateAirdropAgent: e => "/v1/airdrop_agent/".concat(e),
                    DeleteAirdropAgent: e => "/v1/airdrop_agent/".concat(e),
                    EnableAirdropAgent: e => "/v1/airdrop_agent/".concat(e, "/enable"),
                    DisableAirdropAgent: e => "/v1/airdrop_agent/".concat(e, "/disable"),
                    AirdropAmount: "/v1/airdrop_agent/amount",
                    IsPortalAccountConnected: "/v1/airdrop_agent/connected",
                    OnRamperSignature: "/v1/onramper/signature",
                    TokenPrices: "/v1/prices"
                },
                NewtonExchange: N,
                MagicIndexer: P,
                Rhinestone: {
                    getOrSubmitBundles: () => "/bundles",
                    getBundleStatus: e => "/bundles/".concat(e),
                    getBundlePath: e => "/accounts/".concat(e, "/bundles/path"),
                    usersPortfolio: e => "/accounts/".concat(e, "/portfolio"),
                    getMetaintentCost: e => "/accounts/".concat(e, "/bundles/cost")
                },
                Tee: function(e) {
                    return e.SignData = "/v1/wallet/sign", e.PersonalSign = "/v1/wallet/personal-sign", e.GetAccessToken = "/v1/auth/jwt/access_token", e.CreateWallet = "/v1/wallet", e
                }({}),
                Agent: {
                    GetAgentsList: () => "/v1/agent",
                    GetAgentActions: e => "/v1/agent/".concat(e, "/action"),
                    GetUserAgentActions: "/v1/agent/action"
                }
            }
        },
        10388: (e, t, a) => {
            let r;
            a.r(t), a.d(t, {
                getQueryClient: () => c,
                makeQueryClient: () => o
            });
            let n = {
                defaultOptions: {
                    queries: {
                        staleTime: 6e4
                    }
                }
            };
            var s = a(85515),
                i = a(31052);
            let o = () => new i.E(n),
                c = () => s.S ? o() : (r || (r = o()), r)
        },
        13199: (e, t, a) => {
            a.d(t, {
                uB: () => l,
                lF: () => s,
                lA: () => c
            });
            var r = a(42275),
                n = a(69442);
            let s = {
                base: ["launch-darkly"],
                allFlags: e => [
                    [...s.base, "all-flags"], e
                ]
            };
            var i = a(49809),
                o = a(10388);
            let c = e => {
                    let {
                        magicApiKey: t
                    } = n.P.getState(), a = s.allFlags(t || ""), o = i.a.getAllFlags;
                    return (0, r.useQuery)({
                        queryKey: a,
                        queryFn: o,
                        gcTime: 6e5,
                        staleTime: 6e4,
                        ...e
                    })
                },
                l = async e => {
                    let t = (0, o.getQueryClient)(),
                        {
                            magicApiKey: a
                        } = n.P.getState(),
                        r = s.allFlags(a || ""),
                        c = i.a.getAllFlags;
                    return t.fetchQuery({
                        queryKey: r,
                        queryFn: c,
                        gcTime: 6e5,
                        staleTime: 6e4,
                        ...e
                    })
                }
        },
        15250: (e, t, a) => {
            a.d(t, {
                L: () => n,
                j: () => s
            });
            var r = a(69442);
            let n = () => r.P.getState().isGlobalAppScope,
                s = () => n() ? {
                    "X-Magic-Scope": "global"
                } : {
                    "X-Magic-Scope": ""
                }
        },
        27395: (e, t, a) => {
            a.d(t, {
                F: () => m,
                U: () => v
            });
            var r = a(23043),
                n = a(13199),
                s = a(69442),
                i = a(29958),
                o = a(44329),
                c = a(15250),
                l = a(12844),
                u = a(65595),
                d = a(75319),
                h = a(66358),
                g = a(48715),
                f = a(72569);
            let p = (0, l.t)();
            class v extends f.q {
                async Get(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = this.getHeaders(t),
                        n = performance.now(),
                        s = await fetch(v.BASE_URL + e, {
                            method: "GET",
                            credentials: "include",
                            headers: r,
                            ...a
                        });
                    return this.handleToasterResponse(s, { ...this.getMetadata({
                            baseUrl: v.BASE_URL,
                            route: e,
                            t0: n
                        }),
                        headers: r
                    })
                }
                async Post(e, t, a) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        n = this.getHeaders(t),
                        s = performance.now(),
                        i = await fetch(v.BASE_URL + e, {
                            method: "POST",
                            credentials: "include",
                            headers: n,
                            body: JSON.stringify(a),
                            ...r
                        });
                    return this.handleToasterResponse(i, { ...this.getMetadata({
                            baseUrl: v.BASE_URL,
                            route: e,
                            t0: s
                        }),
                        headers: n
                    })
                }
                async Patch(e, t, a) {
                    let r = this.getHeaders(t),
                        n = performance.now(),
                        s = await fetch(v.BASE_URL + e, {
                            method: "PATCH",
                            credentials: "include",
                            headers: r,
                            body: JSON.stringify(a)
                        });
                    return this.handleToasterResponse(s, { ...this.getMetadata({
                            baseUrl: v.BASE_URL,
                            route: e,
                            t0: n
                        }),
                        headers: r
                    })
                }
                async Delete(e, t, a) {
                    let r = this.getHeaders(t),
                        n = performance.now(),
                        s = await fetch(v.BASE_URL + e, {
                            method: "DELETE",
                            credentials: "include",
                            headers: r,
                            body: JSON.stringify(a)
                        });
                    return this.handleToasterResponse(s, { ...this.getMetadata({
                            baseUrl: v.BASE_URL,
                            route: e,
                            t0: n
                        }),
                        headers: r
                    })
                }
                getHeaders(e) {
                    let t = s.P.getState().authUserSessionToken,
                        a = s.P.getState().customAuthorizationToken,
                        r = (null == e ? void 0 : e.Authorization) !== void 0,
                        {
                            bundleId: n = "BundleIDMissing",
                            domainOrigin: i = "",
                            locale: o = "",
                            sdkType: c = "SdkMissing",
                            meta: l
                        } = s.P.getState().decodedQueryParams;
                    return { ...this.basicMagicHeaders(),
                        "accept-language": o,
                        "x-magic-api-key": this.getApiKey(),
                        "x-magic-bundle-id": n,
                        "x-magic-referrer": (0, d.G)(i),
                        "x-magic-sdk": c,
                        "x-magic-meta": l ? btoa(JSON.stringify(l)) : "None",
                        ...t && !r && {
                            authorization: "Bearer ".concat(t)
                        },
                        ...a && {
                            "x-custom-authorization-token": a
                        },
                        ...e
                    }
                }
                getHeadersFromParams(e) {
                    let {
                        bundleId: t = "BundleIDMissing",
                        domainOrigin: a = "",
                        ethNetwork: r = "mainnet",
                        locale: n = "",
                        sdkType: s = "SdkMissing",
                        meta: i,
                        version: o,
                        ext: c,
                        apiKey: l = ""
                    } = e;
                    return {
                        "accept-language": n,
                        "x-fortmatic-network": (0, h.yk)(r, o, this.getApiKey() || l, (0, g.FY)(s, a), c),
                        "x-magic-api-key": this.getApiKey() || l,
                        "x-magic-bundle-id": t,
                        "x-magic-referrer": (0, d.G)(a),
                        "x-magic-sdk": s,
                        "x-magic-meta": i ? btoa(JSON.stringify(i)) : "None"
                    }
                }
                async getResponseText(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        return await e.text()
                    } catch (a) {
                        return p.error("Magic ".concat(this.SERVICE_NAME, " request text() failed ").concat(e.status, ": ").concat(t.route), {
                            response: JSON.stringify(e),
                            metadata: t,
                            errorMessage: a.message,
                            error: a
                        }), "Unable to get response text"
                    }
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.SERVICE_NAME = "Toaster-Client", this.handleToasterResponse = async function(e) {
                        let a, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.clone();
                        try {
                            a = await e.json()
                        } catch (a) {
                            throw p.error("Magic ".concat(t.SERVICE_NAME, " request json() failed ").concat(e.status, ": ").concat(r.route), {
                                response: JSON.stringify(e),
                                metadata: r,
                                errorMessage: a.message,
                                text: await t.getResponseText(n, r),
                                error: a
                            }), a
                        }
                        let s = {
                            headers: t.serializeHeaders(e.headers),
                            status_code: e.status,
                            ...a
                        };
                        if (!e.ok) throw p.error("Magic ".concat(t.SERVICE_NAME, " request failed: ").concat(r.route), {
                            response: s,
                            metadata: r
                        }), new o.u(s);
                        return (0, u.bn)(a)
                    }
                }
            }
            v.BASE_URL = null !== r.N2 && void 0 !== r.N2 ? r.N2 : "https://api.toaster.magic.link";
            let y = {
                    magic_auth_login_with_email_otp: "loginWithEmailOTPToasterEnabled",
                    magic_oauth_login_with_redirect_verify: "oauthLoginWithRedirectVerifyToasterEnabled",
                    magic_oauth_login_with_popup: "oauthLoginWithPopupToasterEnabled"
                },
                m = async () => {
                    var e;
                    let t = null == (e = i.U.getActiveRpcPayload()) ? void 0 : e.method,
                        a = await (0, n.uB)(),
                        r = y[t];
                    return !("magic_auth_login_with_email_otp" === t && (0, c.L)()) && !!r && !!a[r]
                }
        },
        28716: (e, t, a) => {
            a.d(t, {
                C: () => r
            });

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : atob,
                    [a, r, n] = e.split(".");
                return {
                    header: JSON.parse(t(a)),
                    payload: JSON.parse(t(r)),
                    signature: n
                }
            }
        },
        43059: (e, t, a) => {
            a.d(t, {
                IV: () => n,
                ZC: () => s,
                eS: () => r,
                j1: () => o,
                mZ: () => i
            });
            let r = "_aucsrf",
                n = "_bundleId",
                s = "_oaclientmeta",
                i = "_lfc",
                o = "_mfafr"
        },
        44329: (e, t, a) => {
            a.d(t, {
                u: () => r
            });
            class r extends Error {
                constructor(e, t = {}) {
                    super("[".concat(e.error_code, "] ").concat(null == e ? void 0 : e.message)), this.name = this.constructor.name, this.message = null == e ? void 0 : e.message, this.data = t, this.response = e, this.status_code = null == e ? void 0 : e.status_code, this.cause = e, Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
                }
            }
        },
        49809: (e, t, a) => {
            a.d(t, {
                a: () => i
            });
            var r = a(57812),
                n = a(65595),
                s = a(23043);
            class i {
                static async initialize(e) {
                    try {
                        if (!s.i2) throw Error("NEXT_PUBLIC_LAUNCH_DARKLY_CLIENT_SIDE_ID is not set");
                        if (!i.instance) {
                            let t = (0, r.n_)(s.i2, {
                                kind: "user",
                                key: e
                            });
                            return i.instance = t, await t.waitForInitialization(5), t
                        }
                    } catch (e) {
                        logger.error("Error initializing LaunchDarkly", e)
                    }
                }
                static getInstance() {
                    if (!i.instance) throw Error("LaunchDarklyClient is not initialized");
                    return i.instance
                }
                static getAllFlags() {
                    try {
                        let e = i.getInstance().allFlags();
                        if (0 === Object.keys(e).length) return o;
                        return (0, n.bn)(e, n.ZP.Kabob)
                    } catch (e) {
                        return logger.error("Error fetching LaunchDarkly flags", e), o
                    }
                }
            }
            i.instance = null;
            let o = {
                isLoginWithEmailOtpDisabled: !1,
                isForbesUiEnabled: !0,
                isWcRevealCredentialsAllowed: !1,
                adhocCustomDidLifespan: 0,
                rpcRouteEthSendUserOperationEnabled: !0,
                socialWidgetsV2: {
                    enabled: !1
                },
                fallback: !0
            }
        },
        61067: (e, t, a) => {
            a.d(t, {
                k: () => U
            });
            var r = a(23043),
                n = a(69442),
                s = a(75319),
                i = a(66358),
                o = a(65595),
                c = a(48715),
                l = a(72569);
            class u extends l.q {
                async Get(e, t) {
                    let a = await fetch(u.BASE_URL + e, {
                        method: "GET",
                        headers: this.getHeaders(t)
                    });
                    if (!a.ok) throw Error("Failed to fetch NFT token info");
                    let r = await a.json();
                    return (0, o.bn)(r)
                }
                async Post(e, t, a) {
                    let r = await fetch(u.BASE_URL + e, {
                        method: "POST",
                        headers: this.getHeaders(t),
                        body: JSON.stringify(a)
                    });
                    if (!r.ok) throw Error("Failed to fetch NFT token info");
                    let n = await r.json();
                    return (0, o.bn)(n)
                }
                getHeaders(e) {
                    let t = n.P.getState().authUserSessionToken,
                        a = n.P.getState().customAuthorizationToken,
                        r = (null == e ? void 0 : e.Authorization) !== void 0,
                        {
                            bundleId: o = "BundleIDMissing",
                            domainOrigin: l = "",
                            ethNetwork: u = "mainnet",
                            locale: d = "",
                            sdkType: h = "SdkMissing",
                            meta: g,
                            version: f,
                            ext: p
                        } = n.P.getState().decodedQueryParams,
                        v = (0, i.yk)(u, f, this.getApiKey(), (0, c.FY)(h, l), p);
                    return { ...this.basicMagicHeaders(),
                        "accept-language": d,
                        "x-fortmatic-network": v,
                        "x-magic-api-key": this.getApiKey(),
                        "x-magic-bundle-id": o,
                        "x-magic-referrer": (0, s.G)(l),
                        "x-magic-sdk": h,
                        "x-magic-meta": g ? btoa(JSON.stringify(g)) : "None",
                        "x-magic-auth-user-id": n.P.getState().authUserId,
                        ...t && !r && {
                            authorization: "Bearer ".concat(t)
                        },
                        ...a && {
                            "x-custom-authorization-token": a
                        },
                        ...e
                    }
                }
                constructor(...e) {
                    super(...e), this.SERVICE_NAME = "GAS"
                }
            }
            u.BASE_URL = r.Fz;
            class d extends l.q {
                async Get(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = this.getHeaders(t),
                        n = performance.now(),
                        s = await fetch(d.BASE_URL + e, {
                            method: "GET",
                            credentials: "include",
                            headers: r,
                            ...a
                        });
                    return this.handleMagicResponse(s, { ...this.getMetadata({
                            baseUrl: d.BASE_URL,
                            route: e,
                            t0: n
                        }),
                        headers: r
                    })
                }
                async Post(e, t, a) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        n = this.getHeaders(t),
                        s = performance.now(),
                        i = await fetch(d.BASE_URL + e, {
                            method: "POST",
                            credentials: "include",
                            headers: n,
                            body: JSON.stringify(a),
                            ...r
                        });
                    return this.handleMagicResponse(i, { ...this.getMetadata({
                            baseUrl: d.BASE_URL,
                            route: e,
                            t0: s
                        }),
                        headers: n
                    })
                }
                async Patch(e, t, a) {
                    let r = this.getHeaders(t),
                        n = performance.now(),
                        s = await fetch(d.BASE_URL + e, {
                            method: "PATCH",
                            credentials: "include",
                            headers: r,
                            body: JSON.stringify(a)
                        });
                    return this.handleMagicResponse(s, { ...this.getMetadata({
                            baseUrl: d.BASE_URL,
                            route: e,
                            t0: n
                        }),
                        headers: r
                    })
                }
                async Delete(e, t, a) {
                    let r = this.getHeaders(t),
                        n = performance.now(),
                        s = await fetch(d.BASE_URL + e, {
                            method: "DELETE",
                            credentials: "include",
                            headers: r,
                            body: JSON.stringify(a)
                        });
                    return this.handleMagicResponse(s, { ...this.getMetadata({
                            baseUrl: d.BASE_URL,
                            route: e,
                            t0: n
                        }),
                        headers: r
                    })
                }
                getHeaders(e) {
                    let t = n.P.getState().authUserSessionToken,
                        a = n.P.getState().customAuthorizationToken,
                        r = (null == e ? void 0 : e.Authorization) !== void 0,
                        {
                            bundleId: o = "BundleIDMissing",
                            domainOrigin: l = "",
                            ethNetwork: u = "mainnet",
                            locale: d = "",
                            sdkType: h = "SdkMissing",
                            meta: g,
                            version: f,
                            ext: p
                        } = n.P.getState().decodedQueryParams,
                        v = (0, i.yk)(u, f, this.getApiKey(), (0, c.FY)(h, l), p);
                    return { ...this.basicMagicHeaders(),
                        "accept-language": d,
                        "x-fortmatic-network": v,
                        "x-magic-api-key": this.getApiKey(),
                        "x-magic-bundle-id": o,
                        "x-magic-referrer": (0, s.G)(l),
                        "x-magic-sdk": h,
                        "x-magic-meta": g ? btoa(JSON.stringify(g)) : "None",
                        ...t && !r && {
                            authorization: "Bearer ".concat(t)
                        },
                        ...a && {
                            "x-custom-authorization-token": a
                        },
                        ...e
                    }
                }
                getHeadersFromParams(e) {
                    let {
                        bundleId: t = "BundleIDMissing",
                        domainOrigin: a = "",
                        ethNetwork: r = "mainnet",
                        locale: n = "",
                        sdkType: o = "SdkMissing",
                        meta: l,
                        version: u,
                        ext: d,
                        apiKey: h = ""
                    } = e;
                    return {
                        "accept-language": n,
                        "x-fortmatic-network": (0, i.yk)(r, u, this.getApiKey() || h, (0, c.FY)(o, a), d),
                        "x-magic-api-key": this.getApiKey() || h,
                        "x-magic-bundle-id": t,
                        "x-magic-referrer": (0, s.G)(a),
                        "x-magic-sdk": o,
                        "x-magic-meta": l ? btoa(JSON.stringify(l)) : "None"
                    }
                }
                constructor(...e) {
                    super(...e), this.SERVICE_NAME = "Mandrake-Client"
                }
            }
            d.BASE_URL = null !== r.fn && void 0 !== r.fn ? r.fn : "https://api.magic.link";
            class h extends l.q {
                async Get(e, t) {
                    let a = await fetch(h.BASE_URL + e, {
                        method: "GET",
                        headers: this.getHeaders(t)
                    });
                    if (!a.ok) throw Error("Something went wrong");
                    let r = await a.json();
                    return (0, o.bn)(r)
                }
                async Post(e, t, a) {
                    let r = await fetch(h.BASE_URL + e, {
                        method: "POST",
                        headers: this.getHeaders(t),
                        body: JSON.stringify(a)
                    });
                    if (!r.ok) throw Error("Something went wrong");
                    let n = await r.json();
                    return (0, o.bn)(n)
                }
                getHeaders(e) {
                    return {
                        accept: "application/json, text/plain, */*",
                        "content-type": "application/json;charset=UTF-8",
                        "x-magic-api-key": this.getApiKey(),
                        ...e
                    }
                }
                constructor(...e) {
                    super(...e), this.SERVICE_NAME = "Mandrake-Tee"
                }
            }
            h.BASE_URL = r.o3;
            class g extends l.q {
                async Get(e, t) {
                    var a;
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = this.getHeaders(t),
                        s = performance.now(),
                        i = await fetch(e, {
                            method: "GET",
                            credentials: "include",
                            headers: n,
                            ...r
                        });
                    return this.handleMagicResponse(i, { ...this.getMetadata({
                            baseUrl: "",
                            route: e,
                            t0: s
                        }),
                        vercelCache: null == i || null == (a = i.headers) ? void 0 : a.get("X-Vercel-Cache"),
                        headers: n
                    })
                }
                async Post(e, t, a) {
                    var r;
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        s = this.getHeaders(t),
                        i = performance.now(),
                        o = await fetch(e, {
                            method: "POST",
                            credentials: "include",
                            headers: s,
                            body: JSON.stringify(a),
                            ...n
                        });
                    return this.handleMagicResponse(o, {
                        vercelCache: null == o || null == (r = o.headers) ? void 0 : r.get("X-Vercel-Cache"),
                        headers: s,
                        ...this.getMetadata({
                            baseUrl: "",
                            route: e,
                            t0: i
                        })
                    })
                }
                getHeaders(e) {
                    return { ...this.basicMagicHeaders(),
                        ...e
                    }
                }
                constructor(...e) {
                    super(...e), this.SERVICE_NAME = "Mandrake-Next"
                }
            }
            class f extends l.q {
                async Get(e, t) {
                    let a = await fetch(f.BASE_URL + e, {
                        method: "GET",
                        headers: this.getHeaders(t)
                    });
                    if (!a.ok) throw Error("Failed to fetch NFT token info");
                    let r = await a.json();
                    return (0, o.bn)(r)
                }
                async Post(e, t, a) {
                    let r = await fetch(f.BASE_URL + e, {
                        method: "POST",
                        headers: this.getHeaders(t),
                        body: JSON.stringify(a)
                    });
                    if (!r.ok) throw Error("Failed to fetch NFT token info");
                    let n = await r.json();
                    return (0, o.bn)(n)
                }
                getHeaders(e) {
                    let t = n.P.getState().authUserSessionToken,
                        a = n.P.getState().customAuthorizationToken,
                        r = (null == e ? void 0 : e.Authorization) !== void 0,
                        {
                            bundleId: o = "BundleIDMissing",
                            domainOrigin: l = "",
                            ethNetwork: u = "mainnet",
                            locale: d = "",
                            sdkType: h = "SdkMissing",
                            meta: g,
                            version: f,
                            ext: p
                        } = n.P.getState().decodedQueryParams,
                        v = (0, i.yk)(u, f, this.getApiKey(), (0, c.FY)(h, l), p);
                    return { ...this.basicMagicHeaders(),
                        "accept-language": d,
                        "x-fortmatic-network": v,
                        "x-magic-api-key": this.getApiKey(),
                        "x-magic-bundle-id": o,
                        "x-magic-referrer": (0, s.G)(l),
                        "x-magic-sdk": h,
                        "x-magic-meta": g ? btoa(JSON.stringify(g)) : "None",
                        ...t && !r && {
                            authorization: "Bearer ".concat(t)
                        },
                        ...a && {
                            "x-custom-authorization-token": a
                        },
                        ...e
                    }
                }
                constructor(...e) {
                    super(...e), this.SERVICE_NAME = "NFT"
                }
            }
            f.BASE_URL = r.e$;
            var p = a(43059),
                v = a(29958),
                y = a(30800),
                m = a(78150),
                S = a(95167);
            class A extends l.q {
                async Get(e, t) {
                    let a = this.getHeaders(t),
                        r = performance.now(),
                        n = await fetch(A.BASE_URL + e, {
                            method: "GET",
                            credentials: "include",
                            headers: a
                        });
                    return this.handleMagicResponse(n, { ...this.getMetadata({
                            baseUrl: A.BASE_URL,
                            route: e,
                            t0: r
                        }),
                        headers: a
                    })
                }
                async Post(e, t, a) {
                    let r = this.getHeaders(t),
                        n = performance.now(),
                        s = await fetch(A.BASE_URL + e, {
                            method: "POST",
                            credentials: "include",
                            headers: r,
                            body: JSON.stringify(a)
                        });
                    return this.handleMagicResponse(s, { ...this.getMetadata({
                            baseUrl: A.BASE_URL,
                            route: e,
                            t0: n
                        }),
                        headers: r
                    })
                }
                getHeaders(e) {
                    var t, a, r;
                    let i = (0, y.getCookie)(p.eS),
                        o = (0, y.getCookie)(p.IV),
                        c = (0, m.A)(),
                        l = n.P.getState().authUserSessionToken,
                        u = null == (r = v.U.getActiveRpcPayload()) || null == (a = r.params) || null == (t = a[0]) ? void 0 : t.jwt,
                        {
                            bundleId: d = "BundleIDMissing",
                            domainOrigin: h = "",
                            locale: g = "",
                            sdkType: f = "SdkMissing"
                        } = n.P.getState().decodedQueryParams;
                    return {
                        "x-magic-trace-id": c,
                        "x-amzn-trace-id": "Root=".concat(c),
                        "x-magic-referrer": (0, s.G)(h),
                        "x-magic-api-key": this.getApiKey(),
                        "x-magic-csrf": i || "",
                        "x-magic-sdk": f,
                        "x-magic-bundle-id": o || d,
                        "accept-language": g,
                        ...l && {
                            authorization: "Bearer ".concat(l)
                        },
                        ...u && {
                            authorization: "Bearer ".concat(u)
                        },
                        ..."preview" === S.env.VERCEL_ENV ? {
                            "CF-Access-Client-Id": S.env.CLOUDFLARE_ACCESS_CLIENT_ID,
                            "CF-Access-Client-Secret": S.env.CLOUDFLARE_ACCESS_CLIENT_SECRET
                        } : {},
                        ...e
                    }
                }
                constructor(...e) {
                    super(...e), this.SERVICE_NAME = "RELAYER"
                }
            }
            A.BASE_URL = r.Iw;
            var _ = a(9029);
            let E = async e => {
                let t = {
                    auth_user_id: e.authUserId
                };
                try {
                    return U.Magic.Post(_.yI.Tee.GetAccessToken, {
                        Authorization: "Bearer ".concat(e.authUserSessionToken)
                    }, t)
                } catch (e) {
                    throw e
                }
            };
            var w = a(28716);
            class k extends l.q {
                async Get(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = this.getHeaders(t),
                        n = performance.now(),
                        s = await fetch(k.BASE_URL + e, {
                            method: "GET",
                            headers: r,
                            ...a
                        });
                    return this.handleResponse(s, { ...this.getMetadata({
                            baseUrl: k.BASE_URL,
                            route: e,
                            t0: n
                        }),
                        headers: r
                    })
                }
                async Post(e, t, a) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        s = performance.now(),
                        i = await b(),
                        o = { ...this.getHeaders(t),
                            Authorization: "Bearer ".concat(i)
                        },
                        c = await fetch(k.BASE_URL + e, {
                            method: "POST",
                            headers: o,
                            ...a && {
                                body: JSON.stringify(a)
                            },
                            ...r
                        });
                    return c.ok && 401 !== c.status || n.P.setState({
                        fridgeAccessToken: null
                    }), this.handleResponse(c, {
                        headers: o,
                        ...this.getMetadata({
                            baseUrl: k.BASE_URL,
                            route: e,
                            t0: s
                        })
                    })
                }
                getHeaders(e) {
                    let {
                        oidcProviderId: t
                    } = n.P.getState();
                    return { ...this.basicMagicHeaders(),
                        "X-Magic-API-Key": this.getApiKey(),
                        ...t && {
                            "x-oidc-provider-id": t
                        },
                        ...e
                    }
                }
                constructor(...e) {
                    super(...e), this.SERVICE_NAME = "TEE"
                }
            }
            k.BASE_URL = r.df;
            let b = async () => {
                    let {
                        authUserSessionToken: e,
                        authUserId: t
                    } = n.P.getState();
                    if (!e || !t) throw Error("Tee: User is not logged In");
                    let {
                        fridgeAccessToken: a
                    } = n.P.getState();
                    if (!a || a && R(a)) try {
                        let a = await E({
                            authUserId: t,
                            authUserSessionToken: e
                        });
                        return n.P.setState({
                            fridgeAccessToken: a.fridgeAccessToken
                        }), a.fridgeAccessToken
                    } catch (e) {
                        logger.error("Error refreshing access token", e)
                    }
                    return a
                },
                R = e => {
                    try {
                        let {
                            payload: t
                        } = (0, w.C)(e), a = "number" == typeof t.exp ? t.exp : Number(t.exp), r = Math.floor(Date.now() / 1e3), n = "number" == typeof t.iat ? t.iat : Number(t.iat);
                        return a - r < 300 || n < 1747247e3
                    } catch (e) {
                        return !0
                    }
                };
            var C = a(27395);
            class T extends l.q {
                async Get(e, t) {
                    let a = this.getHeaders(t),
                        r = await fetch(e, {
                            method: "GET",
                            headers: a
                        });
                    return T.handleJSONResponse(r, {
                        route: e,
                        magicApiKey: this.getApiKey(),
                        headers: a
                    })
                }
                async Post(e, t, a) {
                    let r = this.getHeaders(t),
                        n = await fetch(e, {
                            method: "POST",
                            headers: this.getHeaders(t),
                            body: JSON.stringify(a)
                        });
                    return T.handleJSONResponse(n, {
                        route: e,
                        magicApiKey: this.getApiKey(),
                        headers: r
                    })
                }
                getHeaders(e) {
                    return {
                        accept: "application/json, text/plain, */*",
                        "content-type": "application/json",
                        ...e
                    }
                }
                constructor(...e) {
                    super(...e), this.SERVICE_NAME = "JSON"
                }
            }
            T.handleJSONResponse = async function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                try {
                    let a = await e.json();
                    return logger.info("External API request success: ".concat(t.route), {
                        response: e,
                        data: a,
                        metadata: t
                    }), (0, o.bn)(a)
                } catch (a) {
                    throw logger.error("External API request parsing failed: ".concat(t.route), {
                        response: e,
                        metadata: t,
                        error: a
                    }), a
                }
            };
            let U = {
                Magic: new d,
                Toaster: new C.U,
                Relayer: new A,
                MagicApiWallet: new h,
                Nft: new f,
                Gas: new u,
                Mandrake: new g,
                Tee: new k,
                JSON: new T
            }
        },
        65595: (e, t, a) => {
            a.d(t, {
                ZF: () => s,
                ZP: () => r,
                bn: () => n,
                yo: () => i
            });
            var r = function(e) {
                return e.Snake = "snake", e.Kabob = "kabob", e
            }({});
            let n = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "snake",
                    a = {},
                    r = "snake" === t ? /(_\w)/g : /(-\w)/g;
                return "object" == typeof e && e ? (Object.keys(e).forEach(s => {
                    let i = s.replace(r, e => e[1].toUpperCase());
                    a[i] = e[s], Array.isArray(e[s]) ? a[i] = e[s].map(e => n(e, t)) : "object" != typeof e[s] ? a[i] = e[s] : a[i] = n(e[s], t)
                }), a) : e
            };

            function s(e) {
                return 0 === Object.keys(e).length
            }
            let i = (e, t) => Object.keys(e).reduce((a, r) => (e[r] && e[r].length > 0 && (a[t(r)] = e[r]), a), {})
        },
        72569: (e, t, a) => {
            a.d(t, {
                q: () => d
            });
            var r = a(23043),
                n = a(69442),
                s = a(12844),
                i = a(65595),
                o = a(78150),
                c = a(44329),
                l = a(95167);
            let u = (0, s.t)();
            class d {
                async getResponseText(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        return await e.text()
                    } catch (a) {
                        return u.error("Magic ".concat(this.SERVICE_NAME, " request text() failed ").concat(e.status, ": ").concat(t.route), {
                            response: JSON.stringify(e),
                            metadata: t,
                            errorMessage: a.message,
                            error: a
                        }), "Unable to get response text"
                    }
                }
                constructor() {
                    var e = this;
                    this.SERVICE_NAME = "Http-Service", this.basicMagicHeaders = () => {
                        let e = (0, o.A)();
                        return {
                            accept: "application/json, text/plain, */*",
                            "content-type": "application/json;charset=UTF-8",
                            "x-amzn-trace-id": "Root=".concat(e),
                            "x-magic-trace-id": e,
                            ..."preview" === l.env.VERCEL_ENV ? {
                                "CF-Access-Client-Id": l.env.CLOUDFLARE_ACCESS_CLIENT_ID,
                                "CF-Access-Client-Secret": l.env.CLOUDFLARE_ACCESS_CLIENT_SECRET
                            } : {}
                        }
                    }, this.serializeHeaders = e => {
                        let t = {};
                        if (!e) return t;
                        for (let [a, r] of e.entries()) t[a] = r;
                        return t
                    }, this.handleMagicResponse = async function(t) {
                        let a, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.clone();
                        try {
                            a = await t.json()
                        } catch (a) {
                            throw u.error("Magic ".concat(e.SERVICE_NAME, " request json() failed ").concat(t.status, ": ").concat(r.route), {
                                response: JSON.stringify(t),
                                metadata: r,
                                errorMessage: a.message,
                                text: await e.getResponseText(n, r),
                                error: a
                            }), a
                        }
                        let s = {
                            headers: e.serializeHeaders(t.headers),
                            status_code: t.status,
                            ...a
                        };
                        if (!t.ok || (null == s ? void 0 : s.status) !== "ok") throw u.error("Magic ".concat(e.SERVICE_NAME, " request failed: ").concat(r.route), {
                            response: s,
                            metadata: r
                        }), new c.u(s);
                        return (0, i.bn)(s.data)
                    }, this.handleResponse = async function(t) {
                        let a, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            s = t.clone();
                        try {
                            a = await t.json()
                        } catch (a) {
                            throw u.error("Magic ".concat(e.SERVICE_NAME, " request json() failed ").concat(t.status, ": ").concat(n.route), {
                                response: JSON.stringify(t),
                                metadata: n,
                                errorMessage: a.message,
                                text: await e.getResponseText(s, n),
                                error: a
                            }), a
                        }
                        let o = {
                            headers: e.serializeHeaders(t.headers),
                            status_code: t.status,
                            ...a
                        };
                        if (!t.ok || ![200, 201].includes(o.status_code)) throw u.error("Magic ".concat(e.SERVICE_NAME, " request failed: ").concat(n.route), {
                            response: o,
                            metadata: n
                        }), new c.u(o);
                        return u.info("Magic ".concat(e.SERVICE_NAME, " request success: ").concat(n.route), r.jN ? o.status_code : {
                            response: o,
                            metadata: n
                        }), (0, i.bn)(a)
                    }, this.getApiKey = () => {
                        let e = n.P.getState().magicApiKey;
                        if (e) return e;
                        let {
                            apiKey: t
                        } = n.P.getState().decodedQueryParams;
                        return t || ""
                    }, this.getMetadata = e => {
                        let {
                            baseUrl: t,
                            route: a,
                            t0: r
                        } = e;
                        return {
                            pathname: a.split("?")[0],
                            route: t + a,
                            baseUrl: t,
                            magicApiKey: this.getApiKey(),
                            duration: performance.now() - r
                        }
                    }
                }
            }
        },
        75319: (e, t, a) => {
            a.d(t, {
                G: () => n
            });
            var r = a(78007);

            function n(e) {
                var t, a, n;
                let s = (null == (a = window.location) || null == (t = a.ancestorOrigins) ? void 0 : t[0]) || (null == (n = document) ? void 0 : n.referrer);
                return (/auth.*\.magic\.link$/.test(s) || !s) && (s = e), (0, r.Gz)(s) ? new URL(s).origin : "https://no-referrer.magic.link"
            }
        },
        78007: (e, t, a) => {
            a.d(t, {
                B9: () => s,
                Gz: () => i,
                zw: () => n
            });
            let r = [".cu", ".ir", ".kp", ".sy", ".gob.ve"];

            function n(e) {
                if (!e) return !1;
                let t = e.toLowerCase(),
                    a = r.find(e => t.endsWith(e));
                return !!a && (logger.error({
                    message: "Email is sanctioned",
                    data: {
                        email: e,
                        blocked_domain: a,
                        reason: "The email domain is on the sanction list, and details should not be disclosed to the developer for security reasons.",
                        security: "For any questions or concerns, please reach out to the security team via #security slack channel.",
                        severity: "high"
                    }
                }), !0)
            }

            function s(e) {
                return !!e && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
            }

            function i(e) {
                if (!e) return !1;
                if (e instanceof URL) return !0;
                try {
                    return new URL(e), !0
                } catch (e) {
                    return !1
                }
            }
        }
    }
]);
//# sourceMappingURL=61067-43875b85632605a4.js.map