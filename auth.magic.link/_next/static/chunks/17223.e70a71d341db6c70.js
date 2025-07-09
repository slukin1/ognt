(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [17223, 90318, 98308], {
        57: (e, t, r) => {
            "use strict";
            r.d(t, {
                C6: () => n,
                Cl: () => s,
                Tt: () => l,
                YH: () => o,
                fX: () => u,
                sH: () => i
            });
            var a = function(e, t) {
                return (a = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function r() {
                    this.constructor = e
                }
                a(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, a = arguments.length; r < a; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function l(e, t) {
                var r = {};
                for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && 0 > t.indexOf(a) && (r[a] = e[a]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++) 0 > t.indexOf(a[n]) && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]]);
                return r
            }

            function i(e, t, r, a) {
                return new(r || (r = Promise))(function(n, s) {
                    function l(e) {
                        try {
                            o(a.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function i(e) {
                        try {
                            o(a.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function o(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(l, i)
                    }
                    o((a = a.apply(e, t || [])).next())
                })
            }

            function o(e, t) {
                var r, a, n, s = {
                        label: 0,
                        sent: function() {
                            if (1 & n[0]) throw n[1];
                            return n[1]
                        },
                        trys: [],
                        ops: []
                    },
                    l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                return l.next = i(0), l.throw = i(1), l.return = i(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function i(i) {
                    return function(o) {
                        var u = [i, o];
                        if (r) throw TypeError("Generator is already executing.");
                        for (; l && (l = 0, u[0] && (s = 0)), s;) try {
                            if (r = 1, a && (n = 2 & u[0] ? a.return : u[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, u[1])).done) return n;
                            switch (a = 0, n && (u = [2 & u[0], n.value]), u[0]) {
                                case 0:
                                case 1:
                                    n = u;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: u[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, a = u[1], u = [0];
                                    continue;
                                case 7:
                                    u = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(n = (n = s.trys).length > 0 && n[n.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === u[0] && (!n || u[1] > n[0] && u[1] < n[3])) {
                                        s.label = u[1];
                                        break
                                    }
                                    if (6 === u[0] && s.label < n[1]) {
                                        s.label = n[1], n = u;
                                        break
                                    }
                                    if (n && s.label < n[2]) {
                                        s.label = n[2], s.ops.push(u);
                                        break
                                    }
                                    n[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            u = t.call(e, s)
                        } catch (e) {
                            u = [6, e], a = 0
                        } finally {
                            r = n = 0
                        }
                        if (5 & u[0]) throw u[1];
                        return {
                            value: u[0] ? u[1] : void 0,
                            done: !0
                        }
                    }
                }
            }
            Object.create;

            function u(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var a, n = 0, s = t.length; n < s; n++) !a && n in t || (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
                return e.concat(a || Array.prototype.slice.call(t))
            }
            Object.create, "function" == typeof SuppressedError && SuppressedError
        },
        2334: (e, t, r) => {
            "use strict";
            r.d(t, {
                E: () => s,
                b: () => l
            });
            var a = r(9029),
                n = r(61067);

            function s() {
                return n.k.Relayer.Get(a.yI.Session.Refresh)
            }

            function l(e) {
                let {
                    authUserId: t,
                    requestOriginMessage: r
                } = e;
                return n.k.Relayer.Post(a.yI.Session.Persist, {
                    "Content-Type": "application/json"
                }, {
                    auth_user_id: t,
                    request_origin_message: r
                })
            }
        },
        22176: (e, t, r) => {
            "use strict";
            r.d(t, {
                Xz: () => m
            });
            var a = r(54960),
                n = r(66907),
                s = r(23043),
                l = r(74937),
                i = r(69442),
                o = r(64835),
                u = r(94762),
                c = r(32045),
                d = r(78150),
                h = r(19879);
            class y extends h.NC {
                async handle(e, t) {
                    logger.log("DKMS Custom FetchHttpHandler: Processing request ".concat(e.path), {
                        headers: e.headers
                    });
                    try {
                        return await super.handle(e, t)
                    } catch (t) {
                        throw logger.error("DKMS FetchHttpHandler error ".concat(e.path, ":"), {
                            error: t.message
                        }), t
                    }
                }
            }
            let g = () => async e => {
                    let {
                        queryKey: [, {
                            delegatedAccessToken: t,
                            delegatedIdentityId: r,
                            systemClockOffset: h
                        }]
                    } = e, g = i.P.getState().authUserId || "", p = {
                        IdentityId: r,
                        Logins: {
                            "cognito-identity.amazonaws.com": t
                        }
                    };
                    s.__ || logger.error("DKMS - Missing GET_COGNITO_CREDENTIALS_URL");
                    let f = (0, c.SHA256)(JSON.stringify(p)).toString(),
                        m = "".concat(s.__, "/v1/credentials/").concat(f),
                        v = new a.D({
                            region: l.B,
                            systemClockOffset: h,
                            endpoint: m,
                            requestHandler: new y
                        }),
                        w = new n.t(p),
                        S = (0, d.A)();
                    try {
                        var I, b, T, P;
                        logger.info("DKMS ".concat(m), {
                            auth_user_id: g,
                            mandrake_request_id: S
                        }), (0, u.A)(v, g, S);
                        let e = await v.send(w);
                        return logger.info("DKMS - GetCredentialsForIdentityCommand successful", {
                            auth_user_id: g,
                            mandrake_request_id: S
                        }), {
                            accessKeyId: null == (I = e.Credentials) ? void 0 : I.AccessKeyId,
                            secretAccessKey: null == (b = e.Credentials) ? void 0 : b.SecretKey,
                            sessionToken: null == (T = e.Credentials) ? void 0 : T.SessionToken,
                            expiration: null == (P = e.Credentials) ? void 0 : P.Expiration
                        }
                    } catch (e) {
                        throw (0, o.Z)(e, o.J.CognitoIdentityClient, {
                            auth_user_id: g,
                            mandrake_request_id: S
                        }), e
                    }
                },
                p = {
                    base: ["cognito-cache"],
                    getCredentials: e => [
                        [...p.base, "get-credentials"], e
                    ]
                };
            var f = r(10388);
            let m = (e, t) => {
                let r = (0, f.getQueryClient)(),
                    a = g();
                return r.fetchQuery({
                    queryKey: p.getCredentials(e),
                    queryFn: a,
                    ...t,
                    staleTime: 354e4,
                    retry: 2
                })
            }
        },
        25028: (e, t, r) => {
            "use strict";
            r.d(t, {
                handler: () => d
            });
            var a = r(98312),
                n = r(48570),
                s = r(69442),
                l = r(33673),
                i = r(63403),
                o = r(45467),
                u = r(33255),
                c = r(66358);
            let d = async e => {
                let t, {
                        ethNetwork: r,
                        ext: d
                    } = s.P.getState().decodedQueryParams,
                    h = (0, c.AI)(r, d);
                try {
                    t = await (0, i.E)()
                } catch (t) {
                    return (0, u.kj)(e, a.d.InternalError, a.l.UserDeniedAccountAccess)
                }
                try {
                    await (0, l.O)({ ...t,
                        walletType: h
                    })
                } catch (t) {
                    return logger.error("magic_get_info Page - Wallet hydrating or creation error", t), (0, u.kj)(e, a.d.InternalError, a.l.WalletHydrationError)
                }
                let {
                    userMetadata: y,
                    userMetadataError: g
                } = await (0, n.d)({ ...t,
                    walletType: h
                });
                return g || !y ? (0, u.kj)(e, a.d.InternalError, a.l.InternalError) : (0, o.H)({
                    payload: e,
                    result: y
                })
            }
        },
        33464: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => g
            });
            var a = r(3382),
                n = r(82658),
                s = r(27932),
                l = r(78373),
                i = r(89530),
                o = r(95940),
                u = r(26777),
                c = r(83043),
                d = r(95762).Buffer;

            function h(e) {
                let t;
                if (null === e) return null;
                try {
                    t = (0, n.b)(e)
                } catch (e) {
                    t = null
                }
                return t
            }
            let y = {
                    path0: "m/44'/60'/0'/0/0"
                },
                g = {
                    toChecksumAddress: h,
                    generateUserId: function(e) {
                        return "did:ethr:".concat(h(e))
                    },
                    createEthWallet: function(e) {
                        let {
                            privateKey: t,
                            address: r
                        } = s.QX.fromPhrase(e, void 0, y.path0);
                        return {
                            privateKey: t,
                            address: r,
                            mnemonic: e,
                            HDWalletPath: y.path0
                        }
                    },
                    personalSign: function(e, t) {
                        try {
                            if (t) {
                                let r = d.from(t.substring(2), "hex"),
                                    n = (0, a.personalSign)({
                                        privateKey: r,
                                        data: e
                                    });
                                return t = null, n
                            }
                        } catch (e) {
                            throw logger.error("Personal Sign failure!", {
                                privateKey: {
                                    exists: !!t,
                                    type: typeof t,
                                    length: null == t ? void 0 : t.length
                                }
                            }), e
                        }
                        return "0x0"
                    },
                    signTypedDataV1: function(e, t) {
                        if (t) {
                            let r = d.from(t.substring(2), "hex");
                            return t = null, (0, a.signTypedData)({
                                privateKey: r,
                                data: e,
                                version: a.SignTypedDataVersion.V1
                            })
                        }
                        return "0x0"
                    },
                    signTypedDataV3: function(e, t) {
                        if (t) {
                            let r = d.from(t.substring(2), "hex");
                            return t = null, (0, a.signTypedData)({
                                privateKey: r,
                                data: e,
                                version: a.SignTypedDataVersion.V3
                            })
                        }
                        return "0x0"
                    },
                    signTypedDataV4: function(e, t) {
                        if (t) {
                            let r = d.from(t.substring(2), "hex");
                            return t = null, (0, a.signTypedData)({
                                privateKey: r,
                                data: e,
                                version: a.SignTypedDataVersion.V4
                            })
                        }
                        return "0x0"
                    },
                    ethSign: async function e(e, t) {
                        let r, a = new o.u(t);
                        if ((0, u.Lo)(e)) {
                            let t = (0, u.q5)(e);
                            r = await a.signMessage(t)
                        } else {
                            let t = function(e) {
                                let t = "\x19Ethereum Signed Message:\n".concat(e.length);
                                return (0, l.S)((0, i.YW)(t + e))
                            }(e);
                            r = await a.signMessage((0, u.q5)(t))
                        }
                        return r
                    },
                    verifyMessage: c.l
                }
        },
        33673: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => O
            });
            var a = r(81553),
                n = r(22176),
                s = r(9029),
                l = r(61067),
                i = r(15250);
            let o = () => async e => {
                let {
                    queryKey: [, {
                        authUserId: t,
                        walletType: r,
                        authUserSessionToken: n
                    }]
                } = e, o = {
                    Authorization: "Bearer ".concat(n)
                };
                return (0, i.L)() ? function(e) {
                    return {
                        delegatedWalletInfo: {
                            delegatedAccessToken: e.delegatedWalletInfo.delegatedAccessToken,
                            delegatedIdentityId: e.delegatedWalletInfo.delegatedIdentityId,
                            delegatedKeyId: e.delegatedWalletInfo.delegatedKeyId,
                            delegatedPoolId: e.delegatedWalletInfo.delegatedPoolId
                        },
                        encryptedPrivateAddress: e.encryptedPrivateAddress,
                        encryptedSeedPhrase: e.encryptedSeedPhrase,
                        hdPath: e.hdPath,
                        publicAddress: e.publicAddress,
                        shouldCreateWallet: e.delegatedWalletInfo.shouldCreateDelegatedWallet,
                        usedChainIds: e.usedChainIds,
                        utcTimestampMs: e.utcTimestampMs,
                        authWalletId: e.authUserWalletId,
                        walletScope: e.walletScope,
                        network: "",
                        walletType: a.S.ETH,
                        walletPregenData: null,
                        isTee: !1
                    }
                }(await l.k.Magic.Get("".concat(s.yI.Universal.UserInfoRetrieve, "?auth_user_id=").concat(t, "&wallet_type=").concat(r), o)) : l.k.Magic.Get("".concat(s.yI.Wallet.GetWalletInfo, "?auth_user_id=").concat(t, "&wallet_type=").concat(r), o)
            };
            var u = r(10388);
            let c = {
                    base: ["wallet"],
                    info: e => [
                        [...c.base, "info"], e
                    ],
                    createWallet: e => [
                        [...c.base, "create-wallet"], e
                    ],
                    sync: e => [
                        [...c.base, "sync"], e
                    ]
                },
                d = (e, t) => {
                    let r = (0, u.getQueryClient)(),
                        a = o();
                    return r.fetchQuery({
                        queryKey: c.info(e),
                        queryFn: a,
                        retry: 2,
                        ...t,
                        staleTime: 3e5
                    })
                };

            function h(e) {
                let {
                    authUserId: t,
                    publicAddress: r,
                    walletType: a,
                    encryptedClientPrivateAddressShare: n,
                    encryptedClientSeedPhraseShare: o,
                    encryptedMagicPrivateAddressShare: u,
                    encryptedMagicSeedPhraseShare: c,
                    encryptedPrivateAddress: d,
                    encryptedSeedPhrase: h,
                    hdDath: y,
                    clientShareMetadata: g
                } = e, p = (0, i.L)() ? s.yI.Universal.Sync : s.yI.Wallet.SyncWallet;
                return l.k.Magic.Post(p, { ...(0, i.j)()
                }, {
                    auth_user_id: t,
                    public_address: r,
                    wallet_type: a,
                    encrypted_private_address: d,
                    encrypted_magic_private_address_share: u,
                    encrypted_client_private_address_share: n,
                    encrypted_seed_phrase: h,
                    encrypted_magic_seed_phrase_share: c,
                    encrypted_client_seed_phrase_share: o,
                    hd_path: y,
                    client_share_metadata: g
                })
            }
            var y = r(69442),
                g = r(84781),
                p = r(94041);
            let f = async e => {
                let {
                    newWallet: t,
                    walletType: r,
                    walletInfo: a,
                    awsCredentials: n,
                    userInfo: s
                } = e, l = (0, u.getQueryClient)(), i = [(0, g.z)({
                    credentials: n,
                    encryptData: t.privateKey,
                    delegatedWalletInfo: a.delegatedWalletInfo
                })];
                t.mnemonic && i.push((0, g.z)({
                    credentials: n,
                    encryptData: t.mnemonic,
                    delegatedWalletInfo: a.delegatedWalletInfo
                }));
                let [o, d] = await Promise.all(i), y = await h({
                    authUserId: s.authUserId,
                    publicAddress: t.address,
                    walletType: r,
                    encryptedPrivateAddress: o,
                    encryptedSeedPhrase: d,
                    hdDath: t.HDWalletPath,
                    clientShareMetadata: {}
                }), f = {
                    authUserId: s.authUserId,
                    authUserSessionToken: s.authUserSessionToken,
                    walletType: r
                };
                l.setQueriesData({
                    queryKey: c.createWallet(f)
                }, () => ({
                    walletInfoData: { ...a,
                        authWalletId: y.walletId,
                        shouldCreateWallet: !1,
                        delegatedWalletInfo: a.delegatedWalletInfo,
                        encryptedPrivateAddress: y.encryptedPrivateAddress,
                        encryptedSeedPhrase: y.encryptedSeedPhrase,
                        hdPath: y.hdPath,
                        publicAddress: y.publicAddress,
                        isTee: a.isTee
                    },
                    awsCreds: n
                })), l.setQueriesData({
                    queryKey: c.info(f)
                }, e => ({ ...e,
                    authWalletId: y.walletId,
                    shouldCreateWallet: !1,
                    delegatedWalletInfo: a.delegatedWalletInfo,
                    encryptedPrivateAddress: y.encryptedPrivateAddress,
                    encryptedSeedPhrase: y.encryptedSeedPhrase,
                    hdPath: y.hdPath,
                    publicAddress: y.publicAddress,
                    isTee: a.isTee
                })), l.setQueriesData({
                    queryKey: p.O.info(f)
                }, e => e ? { ...e,
                    publicAddress: y.publicAddress
                } : void 0)
            };
            var m = r(23429),
                v = r(89282),
                w = r(66358),
                S = r(48715);
            let I = e => {
                    let {
                        authUserId: t,
                        encodedPublicKey: r,
                        network: a
                    } = e;
                    return l.k.Magic.Post(s.yI.Multichain.FlowSeedWallet, {}, {
                        auth_user_id: t,
                        encoded_public_key: r,
                        network: a
                    })
                },
                b = e => {
                    let {
                        authUserId: t,
                        message: r
                    } = e;
                    return l.k.Magic.Post(s.yI.Multichain.HederaSignMessage, {}, {
                        auth_user_id: t,
                        message: r
                    })
                };
            var T = r(85575);
            async function P(e, t) {
                let r, n, {
                        apiKey: s,
                        ethNetwork: l,
                        version: i,
                        ext: o,
                        sdkType: u,
                        domainOrigin: c
                    } = y.P.getState().decodedQueryParams,
                    d = t => b({
                        message: t,
                        authUserId: e
                    }).then(e => ({
                        data: e
                    })),
                    h = (0, w.AI)(l, o),
                    g = (0, S.FY)(u, c),
                    p = (await (0, v.O)(() => t.publicAddress, l, o)).ledgerBridge,
                    f = (0, w.yk)(l, i, s || "", g, o),
                    P = [],
                    A = "mainnet" === f.toLowerCase();
                switch (h) {
                    case a.S.FLOW:
                        n = m.hd[A ? "mainnet" : "testnet"], P.push((t, r) => I({
                            authUserId: e,
                            encodedPublicKey: t,
                            network: r
                        }).then(e => ({
                            data: e
                        })), n, f);
                        break;
                    case a.S.HEDERA:
                        {
                            let e = m.gX[A ? "mainnet" : "testnet"];n = e.accountId,
                            P.push(d, e),
                            r = {
                                params: {
                                    account: e,
                                    hederaSign: d
                                }
                            };
                            break
                        }
                    case a.S.KADENA:
                        n = m.E8[A ? "mainnet" : "testnet"], P.push(t => (0, T.A_)({
                            authUserId: e || "",
                            hash: t
                        }).then(e => ({
                            data: e
                        })), n), r = {
                            params: {
                                address: "k:".concat(n)
                            }
                        }
                }
                let k = await p.createWallet(...P);
                if (r) try {
                    let e = {
                        balance: await p.getBalance(r),
                        address: n,
                        network: f
                    };
                    logger.info("".concat(h, " ").concat(f, " master account balance"), {
                        masterWalletBalanceMetadata: e
                    })
                } catch (e) {
                    logger.error("Failed to fetch master account balance for ".concat(h, " on ").concat(f), {
                        error: e
                    })
                }
                return k
            }
            var A = r(63577),
                k = r(95940);
            async function _(e, t, r) {
                let a = await (0, g.P)({
                        credentials: r,
                        decryptData: e,
                        formatOverride: "base64"
                    }),
                    n = (0, A.Aq)(t, a),
                    {
                        address: s
                    } = new k.u(n);
                return {
                    privateKey: n,
                    address: s,
                    mnemonic: "",
                    HDWalletPath: ""
                }
            }
            var E = r(63230),
                U = r(55302),
                D = r(73657);
            let C = async e => {
                let {
                    walletType: t,
                    publicAddress: r,
                    userInfo: a,
                    walletInfo: n
                } = e, s = (0, u.getQueryClient)(), l = await h({
                    authUserId: a.authUserId,
                    publicAddress: r,
                    walletType: t
                }), i = {
                    authUserId: a.authUserId,
                    authUserSessionToken: a.authUserSessionToken,
                    walletType: t
                };
                s.setQueriesData({
                    queryKey: c.createWallet(i)
                }, () => ({
                    walletInfoData: { ...n,
                        walletId: l.walletId,
                        publicAddress: l.publicAddress,
                        isTee: !0
                    }
                })), s.setQueriesData({
                    queryKey: c.info(i)
                }, e => ({ ...e,
                    authWalletId: l.walletId,
                    shouldCreateWallet: !1,
                    publicAddress: l.publicAddress,
                    isTee: !0
                })), s.setQueriesData({
                    queryKey: D.Ov.info(i)
                }, e => e ? { ...e,
                    publicAddress: l.publicAddress
                } : void 0)
            };
            var M = r(37758);
            let O = async e => {
                let {
                    authUserId: t,
                    authUserSessionToken: r,
                    walletType: s
                } = e;
                try {
                    let e, l = (e = await d({
                        authUserId: t,
                        walletType: s,
                        authUserSessionToken: r
                    })).utcTimestampMs - Date.now();
                    if (y.P.setState({
                            systemClockOffset: l
                        }), !e.shouldCreateWallet) return {
                        walletInfoData: e
                    };
                    let {
                        apiKey: i,
                        ethNetwork: o,
                        version: u,
                        ext: c,
                        sdkType: h,
                        domainOrigin: g
                    } = y.P.getState().decodedQueryParams, p = (0, S.FY)(h, g), m = (0, w.yk)(o, u, i || "", p, c);
                    if ((0, M.H)() && "mainnet" === m && s === a.S.ETH) {
                        let a = await U.m.createWallet();
                        await C({
                            walletType: s,
                            publicAddress: a.publicAddress,
                            userInfo: {
                                authUserId: t,
                                authUserSessionToken: r
                            },
                            walletInfo: e
                        })
                    } else {
                        let i, o = await (0, n.Xz)({
                            delegatedAccessToken: e.delegatedWalletInfo.delegatedAccessToken,
                            delegatedIdentityId: e.delegatedWalletInfo.delegatedIdentityId,
                            systemClockOffset: l
                        });
                        if (s === a.S.ETH)
                            if (e.walletPregenData) {
                                let {
                                    encryptedDataKey: t,
                                    encryptedPrivateKey: r
                                } = e.walletPregenData;
                                i = await _(t, r, o)
                            } else i = await E.A.createEthWallet();
                        else i = await P(t, e);
                        let u = {
                            newWallet: i,
                            walletType: s,
                            walletInfo: e,
                            awsCredentials: o,
                            userInfo: {
                                authUserId: t,
                                authUserSessionToken: r
                            }
                        };
                        await f(u)
                    }
                    return {
                        walletInfoData: e = await d({
                            authUserId: t,
                            walletType: s,
                            authUserSessionToken: r
                        })
                    }
                } catch (e) {
                    throw logger.error("Retry for wallet info and credentials failed", {
                        error: e.message
                    }), e
                }
            }
        },
        36094: (e, t, r) => {
            "use strict";
            r.d(t, {
                c: () => l
            });
            var a = r(33464),
                n = r(63230),
                s = r(48715);
            async function l(e) {
                var t;
                let r;
                return r = !(0, s.FY)() && (null == (t = navigator) ? void 0 : t.serviceWorker) ? await n.A.toChecksumAddress(e) : a.A.toChecksumAddress(e), "did:ethr:".concat(r)
            }
        },
        37758: (e, t, r) => {
            "use strict";
            r.d(t, {
                H: () => i,
                t: () => l
            });
            var a = r(69442),
                n = r(54343),
                s = r(23043);
            let l = () => {
                    let {
                        magicApiKey: e,
                        isGlobalAppScope: t
                    } = a.P.getState();
                    return !t && (s.so || n.GF.includes(e || ""))
                },
                i = () => {
                    let {
                        magicApiKey: e,
                        isGlobalAppScope: t
                    } = a.P.getState();
                    return !t && (s.so || n.e5.includes(e || ""))
                }
        },
        48570: (e, t, r) => {
            "use strict";
            r.d(t, {
                c: () => u,
                d: () => c
            });
            var a = r(81553),
                n = r(73657),
                s = r(69442),
                l = r(36094),
                i = r(66358),
                o = r(13270);
            let u = function() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        {
                            authUserId: r,
                            authUserSessionToken: u
                        } = (0, s.P)(e => e),
                        {
                            ethNetwork: c,
                            ext: d
                        } = (0, s.P)(e => e.decodedQueryParams),
                        h = (0, s.P)(e => e.email),
                        y = (0, s.P)(e => e.phoneNumber),
                        [g, p] = (0, o.useState)(null),
                        [f, m] = (0, o.useState)(null),
                        v = (0, i.AI)(c, d),
                        {
                            data: w,
                            error: S
                        } = (0, n.Hd)(n.Ov.info({
                            authUserId: r,
                            authUserSessionToken: u,
                            walletType: a.S.ETH
                        }), {
                            enabled: !!r && !!u && e,
                            refetchOnMount: "always",
                            gcTime: 3e5 * !!t
                        }),
                        {
                            data: I,
                            error: b
                        } = (0, n.Hd)(n.Ov.info({
                            authUserId: r,
                            authUserSessionToken: u,
                            walletType: v
                        }), {
                            enabled: !!r && !!u && e && v !== a.S.ETH && !!w,
                            refetchOnMount: "always",
                            gcTime: 3e5 * !!t
                        });
                    return (0, o.useEffect)(() => {
                        if (!e) return;
                        let t = v === a.S.ETH ? w : I;
                        t && w && (0, l.c)(w.publicAddress).then(e => {
                            var r, a, n, s, l;
                            p({
                                issuer: null != e ? e : null,
                                publicAddress: t.publicAddress,
                                email: null != (n = null != (a = null == w || null == (r = w.email) ? void 0 : r.toLowerCase()) ? a : null == h ? void 0 : h.toLowerCase()) ? n : null,
                                phoneNumber: null != (l = null != (s = null == w ? void 0 : w.phoneNumber) ? s : y) ? l : null,
                                isMfaEnabled: t.authUserMfaActive,
                                recoveryFactors: t.recoveryFactors,
                                firstLoginAt: t.dateVerified ? new Date(t.dateVerified).toISOString() : null
                            })
                        })
                    }, [e, w, I]), (0, o.useEffect)(() => {
                        (S || b) && (logger.error("Error fetching user info", S || b), m("There was an error generating user metadata"))
                    }, [S, b]), {
                        userMetadata: g,
                        userMetadataError: f
                    }
                },
                c = async e => {
                    let {
                        authUserId: t,
                        authUserSessionToken: r,
                        walletType: i,
                        isCachedNeeded: o = !0
                    } = e;
                    try {
                        var u, c, d, h, y;
                        let e = [];
                        e.push((0, n.gs)({
                            authUserId: t,
                            authUserSessionToken: r,
                            walletType: a.S.ETH
                        }, {
                            refetchOnMount: "always",
                            gcTime: 3e5 * !!o
                        })), i !== a.S.ETH && e.push((0, n.gs)({
                            authUserId: t,
                            authUserSessionToken: r,
                            walletType: i
                        }, {
                            refetchOnMount: "always",
                            gcTime: 3e5 * !!o
                        }));
                        let [g, p] = await Promise.all(e), f = i === a.S.ETH ? g : p, {
                            email: m,
                            phoneNumber: v
                        } = s.P.getState(), w = await (0, l.c)(g.publicAddress);
                        return {
                            userMetadata: {
                                issuer: null != w ? w : null,
                                publicAddress: f.publicAddress,
                                email: null != (d = null != (c = null == g || null == (u = g.email) ? void 0 : u.toLowerCase()) ? c : null == m ? void 0 : m.toLowerCase()) ? d : null,
                                phoneNumber: null != (y = null != (h = null == g ? void 0 : g.phoneNumber) ? h : v) ? y : null,
                                isMfaEnabled: f.authUserMfaActive,
                                recoveryFactors: f.recoveryFactors,
                                firstLoginAt: f.dateVerified ? new Date(f.dateVerified).toISOString() : null
                            },
                            userMetadataError: null
                        }
                    } catch (e) {
                        return logger.error("Error fetching user info", e), {
                            userMetadata: null,
                            userMetadataError: e
                        }
                    }
                }
        },
        55302: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => l
            });
            var a = r(9029),
                n = r(81553),
                s = r(61067);
            let l = {
                sign: async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.S.ETH;
                    return await s.k.Tee.Post(a.yI.Tee.SignData, {}, {
                        raw_data_hash: e,
                        chain: t
                    })
                },
                createWallet: async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.S.ETH;
                    return await s.k.Tee.Post(a.yI.Tee.CreateWallet, {}, {
                        chain: e
                    })
                },
                personalSign: async function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.S.ETH;
                    return await s.k.Tee.Post(a.yI.Tee.PersonalSign, {}, {
                        message_base64: e,
                        chain: t
                    })
                }
            }
        },
        58201: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => n,
                j: () => a
            });
            let a = e => Array.from(new Set(e)),
                n = (e, t) => e.length === t.length && e.every((e, r) => e === t[r])
        },
        63230: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var a = r(2380),
                n = r(52656),
                s = r(33464);

            function l(e) {
                return Promise.resolve(s.A.toChecksumAddress(e) || "")
            }
            async function i(e) {
                if ((0, a.I)(e)) return !1;
                let t = await Promise.all(e.map(e => l(e || "0x0")));
                return t.every(e => e === t[0])
            }
            let o = {
                createEthWallet: function() {
                    let e = (0, n.we)();
                    return Promise.resolve(s.A.createEthWallet(e))
                },
                personalSign: function(e, t) {
                    return Promise.resolve(s.A.personalSign(e, t))
                },
                ethSign: function(e, t) {
                    return Promise.resolve(s.A.ethSign(e, t) || "")
                },
                signTypedDataV4: function(e, t) {
                    return Promise.resolve(s.A.signTypedDataV4(e, t) || "")
                },
                signTypedDataV3: function(e, t) {
                    return Promise.resolve(s.A.signTypedDataV3(e, t) || "")
                },
                signTypedDataV1: function(e, t) {
                    return Promise.resolve(s.A.signTypedDataV1(e, t) || "")
                },
                toChecksumAddress: l,
                verifyMessage: function(e, t) {
                    return Promise.resolve(s.A.verifyMessage(e, t) || "")
                },
                compareAddresses: i
            }
        },
        63403: (e, t, r) => {
            "use strict";
            r.d(t, {
                E: () => d
            });
            var a = r(81553),
                n = r(84530),
                s = r(2334),
                l = r(73657),
                i = r(69442),
                o = r(10388),
                u = r(48715),
                c = r(91617);
            async function d() {
                var e, t;
                let {
                    magicApiKey: r,
                    authUserId: d,
                    sdkMetaData: h,
                    authUserSessionToken: y
                } = i.P.getState(), g = null != (e = null == h ? void 0 : h.webCryptoDpopJwt) ? e : "", p = null != (t = null == h ? void 0 : h.userSessionRefreshToken) ? t : "", f = (0, u.gC)(), m = (0, o.getQueryClient)();
                if (d && y) try {
                    if (m.getQueryData(l.Ov.info({
                            authUserId: d,
                            authUserSessionToken: y,
                            walletType: a.S.ETH
                        }))) return {
                        authUserId: d,
                        authUserSessionToken: y
                    };
                    let e = await (0, l.gs)({
                        authUserId: d,
                        authUserSessionToken: y,
                        walletType: a.S.ETH
                    });
                    return await (0, n.mh)({
                        authUserId: d,
                        authUserSessionToken: y,
                        email: e.email,
                        phoneNumber: e.phoneNumber
                    }), m.setQueriesData({
                        queryKey: l.Ov.info({
                            authUserId: d,
                            authUserSessionToken: y,
                            walletType: a.S.ETH
                        })
                    }, () => e), {
                        authUserId: d,
                        authUserSessionToken: y
                    }
                } catch (e) {}
                let {
                    parsedAuthUserID: v,
                    parsedAuthUserSessionToken: w
                } = await (0, c.x)(r);
                if (v && w) try {
                    let e = await (0, l.gs)({
                        authUserId: v,
                        authUserSessionToken: w,
                        walletType: a.S.ETH
                    });
                    return await (0, n.mh)({
                        authUserId: v,
                        authUserSessionToken: w,
                        email: e.email,
                        phoneNumber: e.phoneNumber
                    }), m.setQueriesData({
                        queryKey: l.Ov.info({
                            authUserId: v,
                            authUserSessionToken: w,
                            walletType: a.S.ETH
                        })
                    }, () => e), {
                        authUserId: v,
                        authUserSessionToken: w
                    }
                } catch (e) {}
                if (p && g) try {
                    let e = await (0, l.gE)({
                            jwt: g,
                            userSessionRefreshToken: p
                        }),
                        {
                            authUserId: t,
                            authUserSessionToken: r
                        } = e;
                    return await (0, n.mh)(e), {
                        authUserId: t,
                        authUserSessionToken: r
                    }
                } catch (e) {} else if (f) try {
                    let e = await (0, s.E)(),
                        {
                            authUserId: t,
                            authUserSessionToken: r
                        } = e;
                    return await (0, n.mh)(e), {
                        authUserId: t,
                        authUserSessionToken: r
                    }
                } catch (e) {}
                throw await (0, n.vw)(), Error("Failed to hydrate session")
            }
        },
        63577: (e, t, r) => {
            "use strict";
            r.d(t, {
                Aq: () => v,
                Au: () => y,
                BD: () => p,
                Tz: () => m,
                c5: () => f,
                nQ: () => g
            });
            var a = r(32045),
                n = r.n(a),
                s = r(53730),
                l = r.n(s),
                i = r(21336),
                o = r.n(i),
                u = r(96523),
                c = r.n(u),
                d = r(17347),
                h = r.n(d);
            let y = !!window.crypto;

            function g(e) {
                let t = new Uint8Array(e);
                if (y) window.crypto.getRandomValues(t);
                else
                    for (let r = 0; r < e; r += 1) t[r] = Math.floor(Math.random() * Math.floor(255));
                let r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
                return Array.from(t).map(e => r[e % r.length]).join("")
            }
            let p = {
                    digest: e => n().MD5(null != e ? e : "").toString()
                },
                f = {
                    encrypt(e, t) {
                        let r = l().encrypt(e, t || "").toString();
                        return t = null, r
                    },
                    decrypt(e, t) {
                        let r = l().decrypt(e, t || "").toString(h());
                        return t = null, r
                    }
                };

            function m() {
                let e = g(128),
                    t = g(128),
                    r = o()(t).toString(n().enc.Base64).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
                return {
                    codeVerifier: t,
                    challenge: r,
                    state: e
                }
            }

            function v(e, t) {
                let r = c().parse(t),
                    a = n().lib.WordArray.create(new Uint8Array(16));
                return l().decrypt(e, r, {
                    iv: a
                }).toString(h())
            }
        },
        64835: (e, t, r) => {
            "use strict";
            r.d(t, {
                J: () => n,
                Z: () => s
            });
            var a = r(12844),
                n = function(e) {
                    return e.KMSEncrypt = "KMS-Encrypt", e.KMSDecrypt = "KMS-Decrypt", e.CognitoIdentityClient = "CognitoIdentityClient", e.CognitoIdentityServer = "CognitoIdentityServer", e
                }({});
            let s = (e, t, r) => {
                var n, s, l, i;
                let o = "DKMS Error From ".concat(t, " service name: ").concat(e.name, " message: ").concat(e.message, " ");
                e.name.includes("Exception") ? o += "requestId: ".concat(e.$metadata.requestId, " cfId: ").concat(e.$metadata.cfId, " httpStatusCode: ").concat(e.$metadata.httpStatusCode, " cause: ").concat(e.cause, " stack:").concat(e.stack, " fault: ").concat(e.$fault, " res body: ").concat(null == (n = e.$response) ? void 0 : n.body, " res statusCode: ").concat(null == (s = e.$response) ? void 0 : s.statusCode, " res headers: ").concat(null == (l = e.$response) ? void 0 : l.headers, " ") : (o += "fault: ".concat(e.$fault, ", code: ").concat(null == e || null == (i = e.$response) ? void 0 : i.statusCode, " "), (null == e ? void 0 : e.$metadata) && (o += "".concat(JSON.stringify(null == e ? void 0 : e.$metadata), " ")), (null == e ? void 0 : e.$response) && (o += "".concat(JSON.stringify(null == e ? void 0 : e.$response), " "))), (0, a.t)().error(o, {
                    error: e,
                    errorString: "JSON String: ".concat(JSON.stringify(e)),
                    ...r
                })
            }
        },
        73657: (e, t, r) => {
            "use strict";
            r.d(t, {
                gE: () => d,
                Hd: () => h,
                gs: () => g,
                wJ: () => y,
                Ov: () => c.O
            });
            var a = r(42275),
                n = r(9029),
                s = r(61067),
                l = r(15250);
            let i = () => async e => {
                let {
                    queryKey: [, t]
                } = e, r = {
                    Authorization: "Bearer ".concat(t.authUserSessionToken)
                };
                return (0, l.L)() ? function(e) {
                    var t;
                    let r = null == (t = e.login.identifiers[0]) ? void 0 : t.identifier;
                    return {
                        authUserId: e.authUserId,
                        authUserMfaActive: e.authUserMfaActive,
                        authUserWalletId: e.authUserWalletId,
                        utcTimestampMs: e.utcTimestampMs,
                        clientId: e.clientId,
                        publicAddress: e.publicAddress,
                        consent: e.consent,
                        usedChainIds: e.usedChainIds,
                        challengeMessage: e.challengeMessage,
                        login: {
                            type: e.login.type,
                            oauth2: e.login.oauth2,
                            webauthn: e.login.webauthn
                        },
                        recoveryFactors: [],
                        ...r ? {
                            email: r
                        } : {}
                    }
                }(await s.k.Magic.Get("".concat(n.yI.Universal.UserInfoRetrieve, "?auth_user_id=").concat(t.authUserId, "&wallet_type=").concat(t.walletType), r)) : s.k.Magic.Get("".concat(n.yI.User.GetUserInfo, "?auth_user_id=").concat(t.authUserId, "&wallet_type=").concat(t.walletType), r)
            };
            var o = r(10388),
                u = r(6491),
                c = r(94041);
            async function d(e) {
                let t = {
                        auth_user_refresh_token: e.userSessionRefreshToken
                    },
                    r = { ...(0, u.N8)(e.jwt)
                    };
                return s.k.Magic.Post(n.yI.User.GetUserSessionTokenFromRefreshToken, r, t)
            }
            let h = (e, t) => {
                let r = i();
                return (0, a.useQuery)({
                    queryKey: e,
                    queryFn: r,
                    staleTime: 3e5,
                    ...t
                })
            };

            function y() {
                return s.k.Toaster.Post(n.yI.User.Logout)
            }
            let g = (e, t) => {
                let r = (0, o.getQueryClient)(),
                    {
                        authUserId: a,
                        authUserSessionToken: n,
                        walletType: s
                    } = e,
                    l = i();
                return r.fetchQuery({
                    queryKey: c.O.info({
                        authUserId: a,
                        authUserSessionToken: n,
                        walletType: s
                    }),
                    queryFn: l,
                    staleTime: 3e5,
                    ...t
                })
            }
        },
        73936: () => {},
        74826: e => {
            "function" == typeof Object.create ? e.exports = function(e, t) {
                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : e.exports = function(e, t) {
                if (t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }
            }
        },
        74937: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => a
            });
            let a = "us-west-2"
        },
        84530: (e, t, r) => {
            "use strict";
            r.d(t, {
                mh: () => m,
                vw: () => p,
                Uf: () => v,
                Jh: () => f
            });
            var a = r(91617),
                n = r(13199),
                s = r(60129),
                l = r(2334),
                i = r(69442),
                o = r(10388),
                u = r(57296),
                c = r(29958),
                d = r(38425),
                h = r(48715),
                y = r(58201);
            let g = [
                [...s.$r.base, "config"],
                [...n.lF.base, "all-flags-server-state"],
                [...n.lF.base, "all-flags"]
            ];
            async function p() {
                let e = (0, o.getQueryClient)();
                ! function() {
                    var e, t;
                    if (!(0, d.f)()) return;
                    let {
                        decodedQueryParams: r
                    } = i.P.getState(), a = {
                        clientAppOrigin: r.domainOrigin,
                        msgType: "MAGIC_HANDLE_REQUEST-".concat(c.U.getEncodedQueryParams()),
                        payload: {
                            method: "clear_keys_and_cache",
                            params: [],
                            jsonrpc: "2.0",
                            id: 888
                        }
                    };
                    null == (t = document.getElementById(u.d)) || null == (e = t.contentWindow) || e.postMessage(a, "*")
                }();
                try {
                    await (0, a.m)()
                } catch (e) {
                    logger.error("Error persisting auth state", e)
                }
                i.P.setState({
                    authUserId: i.u.authUserId,
                    authUserSessionToken: i.u.authUserSessionToken,
                    fridgeAccessToken: i.u.fridgeAccessToken,
                    email: i.u.email,
                    phoneNumber: i.u.phoneNumber,
                    mfaEnrollSecret: i.u.mfaEnrollSecret,
                    mfaEnrollInfo: i.u.mfaEnrollInfo,
                    mfaRecoveryCodes: i.u.mfaRecoveryCodes,
                    oidcProviderId: i.u.oidcProviderId
                }), e.invalidateQueries({
                    predicate: e => !g.some(t => (0, y.B)(e.queryKey[0], t)),
                    refetchType: "none"
                })
            }

            function f() {
                let {
                    sdkMetaData: e,
                    fridgeAccessToken: t,
                    oidcProviderId: r
                } = (0, i.P)(e => e), n = (0, h.it)();
                return {
                    hydrateAndPersistAuthState: async s => {
                        let {
                            authUserId: o,
                            authUserSessionToken: u,
                            fridgeAccessToken: c,
                            oidcProviderId: d,
                            email: h,
                            phoneNumber: y,
                            refreshToken: g,
                            requestOriginMessage: p,
                            defaultPersistEnabled: f = !1,
                            persistToPhantom: m = !0
                        } = s, v = !g && n || f;
                        if (i.P.setState({
                                authUserId: o,
                                authUserSessionToken: u,
                                fridgeAccessToken: null != c ? c : t,
                                oidcProviderId: null != d ? d : r,
                                sdkMetaData: { ...e,
                                    userSessionRefreshToken: g
                                },
                                email: h,
                                phoneNumber: y
                            }), m && await (0, a.m)({
                                authUserId: o,
                                authUserSessionToken: u,
                                email: h,
                                phoneNumber: y
                            }), v && o && p) try {
                            await (0, l.b)({
                                authUserId: o,
                                requestOriginMessage: p
                            })
                        } catch (e) {
                            logger.error("Error persisting session ".concat(e))
                        }
                    },
                    setAndPersistEmail: async e => {
                        let {
                            email: t,
                            persistToPhantom: r = !0
                        } = e;
                        i.P.setState({
                            email: t
                        });
                        let {
                            authUserId: n,
                            authUserSessionToken: s,
                            phoneNumber: l
                        } = i.P.getState();
                        r && await (0, a.m)({
                            authUserId: n || "",
                            authUserSessionToken: s || "",
                            email: t,
                            phoneNumber: l || ""
                        })
                    }
                }
            }
            let m = async e => {
                    let {
                        authUserId: t,
                        authUserSessionToken: r,
                        fridgeAccessToken: n,
                        oidcProviderId: s,
                        email: o,
                        phoneNumber: u,
                        refreshToken: c,
                        requestOriginMessage: d
                    } = e, {
                        sdkMetaData: h,
                        fridgeAccessToken: y,
                        oidcProviderId: g
                    } = i.P.getState();
                    if (i.P.setState({
                            authUserId: t,
                            authUserSessionToken: r,
                            fridgeAccessToken: null != n ? n : y,
                            oidcProviderId: null != s ? s : g,
                            sdkMetaData: { ...h,
                                userSessionRefreshToken: c
                            },
                            email: o,
                            phoneNumber: u
                        }), await (0, a.m)({
                            authUserId: t,
                            authUserSessionToken: r,
                            email: o,
                            phoneNumber: u
                        }), t && d) try {
                        await (0, l.b)({
                            authUserId: t,
                            requestOriginMessage: d
                        })
                    } catch (e) {
                        logger.error("Error persisting session ".concat(e))
                    }
                },
                v = async e => {
                    let {
                        email: t,
                        persistToPhantom: r = !0
                    } = e;
                    i.P.setState({
                        email: t
                    });
                    let {
                        authUserId: n,
                        authUserSessionToken: s,
                        phoneNumber: l
                    } = i.P.getState();
                    r && await (0, a.m)({
                        authUserId: n || "",
                        authUserSessionToken: s || "",
                        email: t,
                        phoneNumber: l || ""
                    })
                }
        },
        84781: (e, t, r) => {
            "use strict";
            r.d(t, {
                P: () => T,
                z: () => P
            });
            var a = r(10388);
            let n = {
                base: ["kms"],
                kmsDecrypt: e => [
                    [...n.base, "kms-decrypt"], e
                ],
                kmsEncrypt: e => [
                    [...n.base, "kms-encrypt"], e
                ]
            };
            var s = r(69442),
                l = r(98301),
                i = r(10411),
                o = r(74937),
                u = r(81553),
                c = r(64835),
                d = r(94762),
                h = r(74455),
                y = r(12844),
                g = r(66358),
                p = r(78150),
                f = r(95762).Buffer;
            let m = async e => {
                let {
                    credentials: t,
                    decryptData: r,
                    formatOverride: a = "ascii",
                    ethNetwork: n,
                    ext: s,
                    authUserId: m
                } = e, v = new l.p({
                    region: o.B,
                    credentials: t
                });
                try {
                    let e = new i.v({
                            CiphertextBlob: (0, h.PU)(r)
                        }),
                        t = (0, y.t)(),
                        l = (0, p.A)();
                    (0, d.A)(v, m, l);
                    let o = await v.send(e);
                    if (t.info("DKMS - DecryptCommand successful", {
                            auth_user_id: m,
                            mandrake_request_id: l
                        }), !o.Plaintext) throw Error("DKMS - Failed decryption");
                    let c = f.from(o.Plaintext).toString(a),
                        w = (0, g.AI)(n, s);
                    if (w === u.S.ETH && 88 === c.length) {
                        let e = {
                            length: c.length,
                            type: typeof c,
                            decryptData: r,
                            walletType: w
                        };
                        try {
                            return t.warn("suspect private key double encoded", { ...e
                            }), f.from(c, "base64").toString(a)
                        } catch (r) {
                            t.error("double decoding fail", { ...e,
                                e: r
                            })
                        }
                    }
                    return c
                } catch (e) {
                    throw (0, c.Z)(e, c.J.KMSDecrypt), e
                }
            };
            var v = r(79143),
                w = r(95762).Buffer;
            let S = async e => {
                    let {
                        credentials: t,
                        encryptData: r,
                        delegatedWalletInfo: a
                    } = e, n = new l.p({
                        region: o.B,
                        credentials: t
                    }), s = new v.b({
                        KeyId: a.delegatedKeyId,
                        Plaintext: w.from(r)
                    });
                    try {
                        let e = await n.send(s);
                        if (!e.CiphertextBlob) throw Error("DKMS - Failed encryption");
                        return w.from(e.CiphertextBlob).toString("base64")
                    } catch (e) {
                        throw (0, c.Z)(e, c.J.KMSEncrypt), e
                    }
                },
                I = () => async e => {
                    let {
                        queryKey: [, {
                            credentials: t,
                            decryptData: r,
                            formatOverride: a = "ascii"
                        }]
                    } = e, {
                        ethNetwork: n,
                        ext: l
                    } = s.P.getState().decodedQueryParams;
                    return await m({
                        credentials: t,
                        decryptData: r,
                        formatOverride: a,
                        ethNetwork: n,
                        ext: l,
                        authUserId: s.P.getState().authUserId || ""
                    })
                },
                b = () => async e => {
                    let {
                        queryKey: [, {
                            credentials: t,
                            encryptData: r,
                            delegatedWalletInfo: a
                        }]
                    } = e;
                    return await S({
                        credentials: t,
                        encryptData: r,
                        delegatedWalletInfo: a
                    })
                },
                T = (e, t) => {
                    let r = (0, a.getQueryClient)(),
                        s = I();
                    return r.fetchQuery({
                        queryKey: n.kmsDecrypt(e),
                        queryFn: s,
                        retry: 1,
                        ...t
                    })
                },
                P = (e, t) => {
                    let r = (0, a.getQueryClient)(),
                        s = b();
                    return r.fetchQuery({
                        queryKey: n.kmsEncrypt(e),
                        queryFn: s,
                        ...t
                    })
                }
        },
        85575: (e, t, r) => {
            "use strict";
            r.d(t, {
                A_: () => i,
                Vo: () => o,
                mV: () => u
            });
            var a = r(9029),
                n = r(69442),
                s = r(61067),
                l = r(66358);
            let i = e => {
                    let {
                        authUserId: t,
                        hash: r
                    } = e, {
                        apiKey: i,
                        ethNetwork: o,
                        version: u,
                        ext: c
                    } = n.P.getState().decodedQueryParams, d = (0, l.yk)(o, u, i || "", !1, c);
                    return s.k.Magic.Post(a.yI.Multichain.KadenaCreateWallet, {}, {
                        auth_user_id: t,
                        tx_hash: r,
                        network: d
                    })
                },
                o = e => {
                    let {
                        publicKey: t,
                        transactionCommand: r,
                        transactionHash: n,
                        signature: l,
                        authenticatorData: i,
                        clientDataJson: o
                    } = e;
                    return s.k.Magic.Post(a.yI.Multichain.KadenaVerifySpireKeyLogin, {}, {
                        public_key: t,
                        signature: l,
                        authenticator_data: i,
                        client_data: o,
                        transaction_hash: n,
                        transaction_command: r
                    })
                },
                u = () => s.k.Magic.Get(a.yI.Multichain.KadenaSpireKeyChallenge)
        },
        89282: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => i
            });
            var a = r(23429);
            let n = {
                TezosBridge: () => r.e(22204).then(r.t.bind(r, 29832, 23)),
                HarmonyBridge: () => r.e(5100).then(r.t.bind(r, 39637, 23)),
                FlowBridge: () => r.e(65643).then(r.t.bind(r, 62365, 23)),
                IconBridge: () => r.e(23145).then(r.t.bind(r, 2973, 23)),
                ZilliqaBridge: () => r.e(7543).then(r.t.bind(r, 31588, 23)),
                PolkadotBridge: () => r.e(77746).then(r.t.bind(r, 97124, 23)),
                SolanaBridge: () => r.e(77456).then(r.t.bind(r, 66980, 23)),
                AvaxBridge: () => r.e(68264).then(r.t.bind(r, 7589, 23)),
                AlgodBridge: () => r.e(20982).then(r.t.bind(r, 61730, 23)),
                CosmosBridge: () => r.e(19556).then(r.t.bind(r, 81942, 23)),
                BitcoinBridge: () => r.e(91070).then(r.t.bind(r, 55785, 23)),
                NearBridge: () => r.e(96383).then(r.t.bind(r, 65311, 23)),
                ConfluxBridge: () => r.e(82294).then(r.t.bind(r, 9725, 23)),
                TerraBridge: () => r.e(50876).then(r.t.bind(r, 78109, 23)),
                TaquitoBridge: () => r.e(39101).then(r.t.bind(r, 87149, 23)),
                EdBridge: () => r.e(92056).then(r.t.bind(r, 26089, 23)),
                HederaBridge: () => r.e(50046).then(r.t.bind(r, 77248, 23)),
                AptosBridge: () => r.e(39307).then(r.t.bind(r, 20701, 23)),
                SuiBridge: () => r.e(71585).then(r.t.bind(r, 52379, 23)),
                KadenaBridge: () => Promise.all([r.e(19218), r.e(54838), r.e(98308)]).then(r.t.bind(r, 54838, 23))
            };
            var s = r(66358),
                l = r(80601);
            async function i(e, t, r) {
                let i = (0, s.AI)(t, r),
                    o = (0, s.Py)(t, r),
                    u = (0, s.l7)(t, r),
                    c = (0, s.hv)(r),
                    d = "".concat((0, l.ZH)(i), "Bridge"),
                    h = new(await n[d]()).default(o, u, c);
                return h.getAccount = e, {
                    ledgerMethodsMapping: a.Fl[i],
                    ledgerBridge: h
                }
            }
        },
        91617: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => i,
                x: () => l
            });
            var a = r(48311),
                n = r(63577),
                s = r(69442);
            async function l(e) {
                let t = null,
                    r = null,
                    s = null,
                    l = null;
                try {
                    let i = await a.p.getItem("persist:auth:".concat(n.BD.digest(null != e ? e : "")));
                    if (i) {
                        let e = JSON.parse(i);
                        t = JSON.parse(null == e ? void 0 : e.ust), r = JSON.parse(null == e ? void 0 : e.userID), s = JSON.parse(null == e ? void 0 : e.userEmail), l = JSON.parse(null == e ? void 0 : e.userPhoneNumber)
                    }
                } catch (e) {}
                return {
                    parsedAuthUserID: r,
                    parsedAuthUserSessionToken: t,
                    parsedUserEmail: s,
                    parsedUserPhoneNumber: l
                }
            }
            async function i(e) {
                let {
                    magicApiKey: t
                } = s.P.getState();
                t || logger.warn("API key is not set when calling usePersistPhantomIndexedDB.");
                try {
                    if (void 0 === e) return void await a.p.setItem("persist:auth:".concat(n.BD.digest(null != t ? t : "")), '{"userID":"\\"\\"","userEmail":"\\"\\"","userPhoneNumber":"\\"\\"","ust":"\\"\\"","_persist":"{\\"version\\":-1,\\"rehydrated\\":true}"}');
                    let {
                        parsedUserEmail: r,
                        parsedUserPhoneNumber: s,
                        parsedAuthUserID: i,
                        parsedAuthUserSessionToken: o
                    } = await l(t), u = {
                        userID: e.authUserId,
                        authUserSessionToken: e.authUserSessionToken,
                        userEmail: "",
                        phoneNumber: ""
                    };
                    i === e.authUserId && o === e.authUserSessionToken ? (u.userEmail = e.email || r || "", u.phoneNumber = e.phoneNumber || s || "") : (u.userEmail = e.email || "", u.phoneNumber = e.phoneNumber || ""), await a.p.setItem("persist:auth:".concat(n.BD.digest(null != t ? t : "")), '{"userID":"\\"'.concat(u.userID, '\\"","userEmail":"\\"').concat(u.userEmail, '\\"","userPhoneNumber":"\\"').concat(u.phoneNumber, '\\"","ust":"\\"').concat(u.authUserSessionToken, '\\"","_persist":"{\\"version\\":-1,\\"rehydrated\\":true}"}'))
                } catch (e) {
                    logger.error("Error Persisting to IndexedDB", e)
                }
            }
        },
        94041: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => a
            });
            let a = {
                base: ["user"],
                info: e => [
                    [...a.base, "info"], e
                ]
            }
        },
        94762: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            let a = (e, t, r) => {
                e.middlewareStack.add(e => async a => {
                    let n = a.request;
                    return n.headers || (n.headers = {}), n.headers["x-auth-user-id"] = t, n.headers["x-mandrake-request-id"] = r, e(a)
                }, {
                    step: "finalizeRequest",
                    name: "AddAwsLoggingHeaders"
                })
            }
        },
        98308: () => {}
    }
]);
//# sourceMappingURL=17223.e70a71d341db6c70.js.map
