(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [15110], {
        569: (e, t, r) => {
            "use strict";
            r.d(t, {
                S: () => i,
                v: () => n
            });
            let n = e => Object.assign(e, {
                    useDualstackEndpoint: e.useDualstackEndpoint ? ? !1,
                    useFipsEndpoint: e.useFipsEndpoint ? ? !1,
                    defaultSigningName: "kms"
                }),
                i = {
                    UseFIPS: {
                        type: "builtInParams",
                        name: "useFipsEndpoint"
                    },
                    Endpoint: {
                        type: "builtInParams",
                        name: "endpoint"
                    },
                    Region: {
                        type: "builtInParams",
                        name: "region"
                    },
                    UseDualStack: {
                        type: "builtInParams",
                        name: "useDualstackEndpoint"
                    }
                }
        },
        4783: (e, t, r) => {
            "use strict";
            r.d(t, {
                I: () => b
            });
            var n = r(95762).Buffer,
                i = void 0 !== n && n.from ? function(e) {
                    return n.from(e, "utf8")
                } : e => new TextEncoder().encode(e);

            function s(e) {
                return e instanceof Uint8Array ? e : "string" == typeof e ? i(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e)
            }

            function a(e) {
                return "string" == typeof e ? 0 === e.length : 0 === e.byteLength
            }
            var o = {
                    name: "SHA-256"
                },
                c = {
                    name: "HMAC",
                    hash: o
                },
                u = new Uint8Array([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85]);
            let d = {};

            function l() {
                return "undefined" != typeof window ? window : "undefined" != typeof self ? self : d
            }
            var p = function() {
                    function e(e) {
                        this.toHash = new Uint8Array(0), this.secret = e, this.reset()
                    }
                    return e.prototype.update = function(e) {
                        if (!a(e)) {
                            var t = s(e),
                                r = new Uint8Array(this.toHash.byteLength + t.byteLength);
                            r.set(this.toHash, 0), r.set(t, this.toHash.byteLength), this.toHash = r
                        }
                    }, e.prototype.digest = function() {
                        var e = this;
                        return this.key ? this.key.then(function(t) {
                            return l().crypto.subtle.sign(c, t, e.toHash).then(function(e) {
                                return new Uint8Array(e)
                            })
                        }) : a(this.toHash) ? Promise.resolve(u) : Promise.resolve().then(function() {
                            return l().crypto.subtle.digest(o, e.toHash)
                        }).then(function(e) {
                            return Promise.resolve(new Uint8Array(e))
                        })
                    }, e.prototype.reset = function() {
                        var e = this;
                        this.toHash = new Uint8Array(0), this.secret && void 0 !== this.secret && (this.key = new Promise(function(t, r) {
                            l().crypto.subtle.importKey("raw", s(e.secret), c, !1, ["sign"]).then(t, r)
                        }), this.key.catch(function() {}))
                    }, e
                }(),
                f = r(57),
                h = new Uint32Array([0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]),
                m = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19],
                y = function() {
                    function e() {
                        this.state = Int32Array.from(m), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1
                    }
                    return e.prototype.update = function(e) {
                        if (this.finished) throw Error("Attempted to update an already finished hash.");
                        var t = 0,
                            r = e.byteLength;
                        if (this.bytesHashed += r, 8 * this.bytesHashed > 0x1fffffffffffff) throw Error("Cannot hash more than 2^53 - 1 bits");
                        for (; r > 0;) this.buffer[this.bufferLength++] = e[t++], r--, 64 === this.bufferLength && (this.hashBuffer(), this.bufferLength = 0)
                    }, e.prototype.digest = function() {
                        if (!this.finished) {
                            var e = 8 * this.bytesHashed,
                                t = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
                                r = this.bufferLength;
                            if (t.setUint8(this.bufferLength++, 128), r % 64 >= 56) {
                                for (var n = this.bufferLength; n < 64; n++) t.setUint8(n, 0);
                                this.hashBuffer(), this.bufferLength = 0
                            }
                            for (var n = this.bufferLength; n < 56; n++) t.setUint8(n, 0);
                            t.setUint32(56, Math.floor(e / 0x100000000), !0), t.setUint32(60, e), this.hashBuffer(), this.finished = !0
                        }
                        for (var i = new Uint8Array(32), n = 0; n < 8; n++) i[4 * n] = this.state[n] >>> 24 & 255, i[4 * n + 1] = this.state[n] >>> 16 & 255, i[4 * n + 2] = this.state[n] >>> 8 & 255, i[4 * n + 3] = this.state[n] >>> 0 & 255;
                        return i
                    }, e.prototype.hashBuffer = function() {
                        for (var e = this.buffer, t = this.state, r = t[0], n = t[1], i = t[2], s = t[3], a = t[4], o = t[5], c = t[6], u = t[7], d = 0; d < 64; d++) {
                            if (d < 16) this.temp[d] = (255 & e[4 * d]) << 24 | (255 & e[4 * d + 1]) << 16 | (255 & e[4 * d + 2]) << 8 | 255 & e[4 * d + 3];
                            else {
                                var l = this.temp[d - 2],
                                    p = (l >>> 17 | l << 15) ^ (l >>> 19 | l << 13) ^ l >>> 10,
                                    f = ((l = this.temp[d - 15]) >>> 7 | l << 25) ^ (l >>> 18 | l << 14) ^ l >>> 3;
                                this.temp[d] = (p + this.temp[d - 7] | 0) + (f + this.temp[d - 16] | 0)
                            }
                            var m = (((a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)) + (a & o ^ ~a & c) | 0) + (u + (h[d] + this.temp[d] | 0) | 0) | 0,
                                y = ((r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10)) + (r & n ^ r & i ^ n & i) | 0;
                            u = c, c = o, o = a, a = s + m | 0, s = i, i = n, n = r, r = m + y | 0
                        }
                        t[0] += r, t[1] += n, t[2] += i, t[3] += s, t[4] += a, t[5] += o, t[6] += c, t[7] += u
                    }, e
                }(),
                g = function() {
                    function e(e) {
                        this.secret = e, this.hash = new y, this.reset()
                    }
                    return e.prototype.update = function(e) {
                        if (!a(e) && !this.error) try {
                            this.hash.update(s(e))
                        } catch (e) {
                            this.error = e
                        }
                    }, e.prototype.digestSync = function() {
                        if (this.error) throw this.error;
                        return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest()
                    }, e.prototype.digest = function() {
                        return (0, f.sH)(this, void 0, void 0, function() {
                            return (0, f.YH)(this, function(e) {
                                return [2, this.digestSync()]
                            })
                        })
                    }, e.prototype.reset = function() {
                        if (this.hash = new y, this.secret) {
                            this.outer = new y;
                            var e = function(e) {
                                    var t = s(e);
                                    if (t.byteLength > 64) {
                                        var r = new y;
                                        r.update(t), t = r.digest()
                                    }
                                    var n = new Uint8Array(64);
                                    return n.set(t), n
                                }(this.secret),
                                t = new Uint8Array(64);
                            t.set(e);
                            for (var r = 0; r < 64; r++) e[r] ^= 54, t[r] ^= 92;
                            this.hash.update(e), this.outer.update(t);
                            for (var r = 0; r < e.byteLength; r++) e[r] = 0
                        }
                    }, e
                }(),
                w = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"],
                b = function() {
                    function e(e) {
                        var t, r, n;
                        if ("object" == typeof(r = t = l()) && "object" == typeof r.crypto && "function" == typeof r.crypto.getRandomValues && "object" == typeof t.crypto.subtle && (n = t.crypto.subtle) && w.every(function(e) {
                                return "function" == typeof n[e]
                            })) this.hash = new p(e);
                        else this.hash = new g(e)
                    }
                    return e.prototype.update = function(e, t) {
                        this.hash.update(s(e))
                    }, e.prototype.digest = function() {
                        return this.hash.digest()
                    }, e.prototype.reset = function() {
                        this.hash.reset()
                    }, e
                }()
        },
        5546: (e, t, r) => {
            "use strict";
            r.d(t, {
                n4: () => c
            });
            var n = r(92544),
                i = r(95167);
            let s = "X-Amzn-Trace-Id",
                a = e => t => async r => {
                    let {
                        request: a
                    } = r;
                    if (!n.Kd.isInstance(a) || "node" !== e.runtime) return t(r);
                    let o = Object.keys(a.headers ? ? {}).find(e => e.toLowerCase() === s.toLowerCase()) ? ? s;
                    if (a.headers.hasOwnProperty(o)) return t(r);
                    let c = i.env.AWS_LAMBDA_FUNCTION_NAME,
                        u = i.env._X_AMZN_TRACE_ID,
                        d = e => "string" == typeof e && e.length > 0;
                    return d(c) && d(u) && (a.headers[s] = u), t({ ...r,
                        request: a
                    })
                },
                o = {
                    step: "build",
                    tags: ["RECURSION_DETECTION"],
                    name: "recursionDetectionMiddleware",
                    override: !0,
                    priority: "low"
                },
                c = e => ({
                    applyToStack: t => {
                        t.add(a(e), o)
                    }
                })
        },
        9476: (e, t, r) => {
            "use strict";
            r.d(t, {
                TM: () => u,
                Ou: () => c
            });
            var n = r(92544);
            let i = (e, t) => (r, i) => async a => {
                    let {
                        response: o
                    } = await r(a);
                    try {
                        let r = await t(o, e);
                        return {
                            response: o,
                            output: r
                        }
                    } catch (e) {
                        if (Object.defineProperty(e, "$response", {
                                value: o
                            }), !("$metadata" in e)) {
                            let t = "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
                            try {
                                e.message += "\n  " + t
                            } catch (e) {
                                i.logger && i.logger ? .constructor ? .name !== "NoOpLogger" ? i.logger ? .warn ? .(t) : console.warn(t)
                            }
                            void 0 !== e.$responseBodyText && e.$response && (e.$response.body = e.$responseBodyText);
                            try {
                                if (n.cS.isInstance(o)) {
                                    let {
                                        headers: t = {}
                                    } = o, r = Object.entries(t);
                                    e.$metadata = {
                                        httpStatusCode: o.statusCode,
                                        requestId: s(/^x-[\w-]+-request-?id$/, r),
                                        extendedRequestId: s(/^x-[\w-]+-id-2$/, r),
                                        cfId: s(/^x-[\w-]+-cf-id$/, r)
                                    }
                                }
                            } catch (e) {}
                        }
                        throw e
                    }
                },
                s = (e, t) => (t.find(([t]) => t.match(e)) || [void 0, void 0])[1],
                a = (e, t) => (r, n) => async i => {
                    let s = n.endpointV2 ? .url && e.urlParser ? async () => e.urlParser(n.endpointV2.url) : e.endpoint;
                    if (!s) throw Error("No valid endpoint provider available.");
                    let a = await t(i.input, { ...e,
                        endpoint: s
                    });
                    return r({ ...i,
                        request: a
                    })
                },
                o = {
                    name: "deserializerMiddleware",
                    step: "deserialize",
                    tags: ["DESERIALIZER"],
                    override: !0
                },
                c = {
                    name: "serializerMiddleware",
                    step: "serialize",
                    tags: ["SERIALIZER"],
                    override: !0
                };

            function u(e, t, r) {
                return {
                    applyToStack: n => {
                        n.add(i(e, r), o), n.add(a(e, t), c)
                    }
                }
            }
        },
        10411: (e, t, r) => {
            "use strict";
            r.d(t, {
                v: () => u
            });
            var n = r(33694),
                i = r(9476),
                s = r(56067),
                a = r(569),
                o = r(14560),
                c = r(38495);
            class u extends s.uB.classBuilder().ep(a.S).m(function(e, t, r, s) {
                return [(0, i.TM)(r, this.serialize, this.deserialize), (0, n.rD)(r, e.getEndpointParameterInstructions())]
            }).s("TrentService", "Decrypt", {}).n("KMSClient", "DecryptCommand").f(void 0, o.fj).ser(c._E).de(c.jN).build() {}
        },
        14424: (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => n
            });
            let n = e => new TextEncoder().encode(e)
        },
        14560: (e, t, r) => {
            "use strict";
            r.d(t, {
                $U: () => u,
                AD: () => U,
                B$: () => j,
                BK: () => M,
                Bo: () => V,
                Bx: () => g,
                C2: () => b,
                ET: () => k,
                Fo: () => m,
                G1: () => I,
                H5: () => Y,
                Hv: () => T,
                IF: () => J,
                Jm: () => P,
                ML: () => O,
                MW: () => S,
                Qy: () => w,
                S5: () => R,
                T2: () => l,
                Tk: () => q,
                UC: () => v,
                X1: () => L,
                X6: () => d,
                Yz: () => c,
                _Z: () => N,
                bg: () => K,
                cb: () => y,
                dt: () => G,
                e$: () => D,
                eJ: () => Q,
                eo: () => a,
                fj: () => Z,
                iK: () => s,
                iu: () => h,
                ju: () => W,
                m9: () => A,
                oP: () => F,
                oZ: () => x,
                ot: () => z,
                r8: () => X,
                rn: () => C,
                s7: () => _,
                su: () => $,
                w$: () => o,
                wh: () => f,
                wj: () => B,
                wl: () => p,
                x2: () => H,
                ye: () => E,
                zO: () => ee
            });
            var n = r(56067),
                i = r(28046);
            class s extends i.G {
                name = "AlreadyExistsException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "AlreadyExistsException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, s.prototype)
                }
            }
            class a extends i.G {
                name = "DependencyTimeoutException";
                $fault = "server";
                constructor(e) {
                    super({
                        name: "DependencyTimeoutException",
                        $fault: "server",
                        ...e
                    }), Object.setPrototypeOf(this, a.prototype)
                }
            }
            class o extends i.G {
                name = "InvalidArnException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "InvalidArnException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, o.prototype)
                }
            }
            class c extends i.G {
                name = "KMSInternalException";
                $fault = "server";
                constructor(e) {
                    super({
                        name: "KMSInternalException",
                        $fault: "server",
                        ...e
                    }), Object.setPrototypeOf(this, c.prototype)
                }
            }
            class u extends i.G {
                name = "KMSInvalidStateException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "KMSInvalidStateException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, u.prototype)
                }
            }
            class d extends i.G {
                name = "NotFoundException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "NotFoundException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, d.prototype)
                }
            }
            class l extends i.G {
                name = "CloudHsmClusterInUseException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "CloudHsmClusterInUseException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, l.prototype)
                }
            }
            class p extends i.G {
                name = "CloudHsmClusterInvalidConfigurationException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "CloudHsmClusterInvalidConfigurationException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, p.prototype)
                }
            }
            class f extends i.G {
                name = "CloudHsmClusterNotActiveException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "CloudHsmClusterNotActiveException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, f.prototype)
                }
            }
            class h extends i.G {
                name = "CloudHsmClusterNotFoundException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "CloudHsmClusterNotFoundException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, h.prototype)
                }
            }
            class m extends i.G {
                name = "CloudHsmClusterNotRelatedException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "CloudHsmClusterNotRelatedException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, m.prototype)
                }
            }
            class y extends i.G {
                name = "ConflictException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "ConflictException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, y.prototype)
                }
            }
            class g extends i.G {
                name = "CustomKeyStoreInvalidStateException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "CustomKeyStoreInvalidStateException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, g.prototype)
                }
            }
            class w extends i.G {
                name = "CustomKeyStoreNotFoundException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "CustomKeyStoreNotFoundException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, w.prototype)
                }
            }
            class b extends i.G {
                name = "InvalidAliasNameException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "InvalidAliasNameException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, b.prototype)
                }
            }
            class v extends i.G {
                name = "LimitExceededException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "LimitExceededException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, v.prototype)
                }
            }
            class S extends i.G {
                name = "CustomKeyStoreNameInUseException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "CustomKeyStoreNameInUseException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, S.prototype)
                }
            }
            class x extends i.G {
                name = "IncorrectTrustAnchorException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "IncorrectTrustAnchorException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, x.prototype)
                }
            }
            class E extends i.G {
                name = "XksProxyIncorrectAuthenticationCredentialException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "XksProxyIncorrectAuthenticationCredentialException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, E.prototype)
                }
            }
            class P extends i.G {
                name = "XksProxyInvalidConfigurationException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "XksProxyInvalidConfigurationException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, P.prototype)
                }
            }
            class A extends i.G {
                name = "XksProxyInvalidResponseException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "XksProxyInvalidResponseException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, A.prototype)
                }
            }
            class M extends i.G {
                name = "XksProxyUriEndpointInUseException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "XksProxyUriEndpointInUseException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, M.prototype)
                }
            }
            class O extends i.G {
                name = "XksProxyUriInUseException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "XksProxyUriInUseException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, O.prototype)
                }
            }
            class k extends i.G {
                name = "XksProxyUriUnreachableException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "XksProxyUriUnreachableException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, k.prototype)
                }
            }
            class C extends i.G {
                name = "XksProxyVpcEndpointServiceInUseException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "XksProxyVpcEndpointServiceInUseException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, C.prototype)
                }
            }
            class $ extends i.G {
                name = "XksProxyVpcEndpointServiceInvalidConfigurationException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "XksProxyVpcEndpointServiceInvalidConfigurationException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, $.prototype)
                }
            }
            class I extends i.G {
                name = "XksProxyVpcEndpointServiceNotFoundException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "XksProxyVpcEndpointServiceNotFoundException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, I.prototype)
                }
            }
            class R extends i.G {
                name = "DisabledException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "DisabledException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, R.prototype)
                }
            }
            class T extends i.G {
                name = "DryRunOperationException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "DryRunOperationException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, T.prototype)
                }
            }
            class _ extends i.G {
                name = "InvalidGrantTokenException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "InvalidGrantTokenException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, _.prototype)
                }
            }
            class N extends i.G {
                name = "MalformedPolicyDocumentException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "MalformedPolicyDocumentException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, N.prototype)
                }
            }
            class F extends i.G {
                name = "TagException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "TagException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, F.prototype)
                }
            }
            class D extends i.G {
                name = "UnsupportedOperationException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "UnsupportedOperationException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, D.prototype)
                }
            }
            class j extends i.G {
                name = "XksKeyAlreadyInUseException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "XksKeyAlreadyInUseException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, j.prototype)
                }
            }
            class U extends i.G {
                name = "XksKeyInvalidConfigurationException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "XksKeyInvalidConfigurationException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, U.prototype)
                }
            }
            class z extends i.G {
                name = "XksKeyNotFoundException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "XksKeyNotFoundException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, z.prototype)
                }
            }
            class L extends i.G {
                name = "CustomKeyStoreHasCMKsException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "CustomKeyStoreHasCMKsException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, L.prototype)
                }
            }
            class B extends i.G {
                name = "IncorrectKeyException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "IncorrectKeyException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, B.prototype)
                }
            }
            class H extends i.G {
                name = "InvalidCiphertextException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "InvalidCiphertextException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, H.prototype)
                }
            }
            class K extends i.G {
                name = "InvalidKeyUsageException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "InvalidKeyUsageException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, K.prototype)
                }
            }
            class G extends i.G {
                name = "KeyUnavailableException";
                $fault = "server";
                constructor(e) {
                    super({
                        name: "KeyUnavailableException",
                        $fault: "server",
                        ...e
                    }), Object.setPrototypeOf(this, G.prototype)
                }
            }
            class q extends i.G {
                name = "InvalidMarkerException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "InvalidMarkerException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, q.prototype)
                }
            }
            class V extends i.G {
                name = "ExpiredImportTokenException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "ExpiredImportTokenException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, V.prototype)
                }
            }
            class W extends i.G {
                name = "IncorrectKeyMaterialException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "IncorrectKeyMaterialException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, W.prototype)
                }
            }
            class X extends i.G {
                name = "InvalidImportTokenException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "InvalidImportTokenException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, X.prototype)
                }
            }
            class J extends i.G {
                name = "InvalidGrantIdException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "InvalidGrantIdException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, J.prototype)
                }
            }
            class Y extends i.G {
                name = "KMSInvalidMacException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "KMSInvalidMacException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, Y.prototype)
                }
            }
            class Q extends i.G {
                name = "KMSInvalidSignatureException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "KMSInvalidSignatureException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, Q.prototype)
                }
            }
            let Z = e => ({ ...e,
                    ...e.Plaintext && {
                        Plaintext: n.$H
                    }
                }),
                ee = e => ({ ...e,
                    ...e.Plaintext && {
                        Plaintext: n.$H
                    }
                })
        },
        17158: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => n
            });
            let n = e => () => Promise.reject(e)
        },
        17564: (e, t, r) => {
            "use strict";
            r.d(t, {
                f2: () => d
            });
            var n = r(92544);
            let i = e => new Date(Date.now() + e),
                s = e => n.cS.isInstance(e) ? e.headers ? .date ? ? e.headers ? .Date : void 0,
                a = (e, t) => Math.abs(i(t).getTime() - e) >= 3e5,
                o = (e, t) => {
                    let r = Date.parse(e);
                    return a(r, t) ? r - Date.now() : t
                },
                c = (e, t) => {
                    if (!t) throw Error(`Property \`${e}\` is not resolved for AWS SDK SigV4Auth`);
                    return t
                },
                u = async e => {
                    let t = c("context", e.context),
                        r = c("config", e.config),
                        n = t.endpointV2 ? .properties ? .authSchemes ? .[0],
                        i = c("signer", r.signer),
                        s = await i(n),
                        a = e ? .signingRegion;
                    return {
                        config: r,
                        signer: s,
                        signingRegion: a,
                        signingRegionSet: e ? .signingRegionSet,
                        signingName: e ? .signingName
                    }
                };
            class d {
                async sign(e, t, r) {
                    if (!n.Kd.isInstance(e)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
                    let s = await u(r),
                        {
                            config: a,
                            signer: o
                        } = s,
                        {
                            signingRegion: c,
                            signingName: d
                        } = s,
                        l = r.context;
                    if (l ? .authSchemes ? .length) {
                        let [e, t] = l.authSchemes;
                        e ? .name === "sigv4a" && t ? .name === "sigv4" && (c = t ? .signingRegion ? ? c, d = t ? .signingName ? ? d)
                    }
                    return await o.sign(e, {
                        signingDate: i(a.systemClockOffset),
                        signingRegion: c,
                        signingService: d
                    })
                }
                errorHandler(e) {
                    return t => {
                        let r = t.ServerTime ? ? s(t.$response);
                        if (r) {
                            let n = c("config", e.config),
                                i = n.systemClockOffset;
                            n.systemClockOffset = o(r, n.systemClockOffset), n.systemClockOffset !== i && t.$metadata && (t.$metadata.clockSkewCorrected = !0)
                        }
                        throw t
                    }
                }
                successHandler(e, t) {
                    let r = s(e);
                    if (r) {
                        let e = c("config", t.config);
                        e.systemClockOffset = o(r, e.systemClockOffset)
                    }
                }
            }
        },
        18840: (e, t, r) => {
            "use strict";
            r.d(t, {
                Y7: () => s
            });
            let n = () => (e, t) => async r => {
                    try {
                        let n = await e(r),
                            {
                                clientName: i,
                                commandName: s,
                                logger: a,
                                dynamoDbDocumentClientOptions: o = {}
                            } = t,
                            {
                                overrideInputFilterSensitiveLog: c,
                                overrideOutputFilterSensitiveLog: u
                            } = o,
                            d = c ? ? t.inputFilterSensitiveLog,
                            l = u ? ? t.outputFilterSensitiveLog,
                            {
                                $metadata: p,
                                ...f
                            } = n.output;
                        return a ? .info ? .({
                            clientName: i,
                            commandName: s,
                            input: d(r.input),
                            output: l(f),
                            metadata: p
                        }), n
                    } catch (c) {
                        let {
                            clientName: e,
                            commandName: n,
                            logger: i,
                            dynamoDbDocumentClientOptions: s = {}
                        } = t, {
                            overrideInputFilterSensitiveLog: a
                        } = s, o = a ? ? t.inputFilterSensitiveLog;
                        throw i ? .error ? .({
                            clientName: e,
                            commandName: n,
                            input: o(r.input),
                            error: c,
                            metadata: c.$metadata
                        }), c
                    }
                },
                i = {
                    name: "loggerMiddleware",
                    tags: ["LOGGER"],
                    step: "initialize",
                    override: !0
                },
                s = e => ({
                    applyToStack: e => {
                        e.add(n(), i)
                    }
                })
        },
        19879: (e, t, r) => {
            "use strict";
            r.d(t, {
                NC: () => o,
                kv: () => u
            });
            var n = r(92544),
                i = r(82031);

            function s(e, t) {
                return new Request(e, t)
            }
            let a = {
                supported: void 0
            };
            class o {
                static create(e) {
                    return "function" == typeof e ? .handle ? e : new o(e)
                }
                constructor(e) {
                    "function" == typeof e ? this.configProvider = e().then(e => e || {}) : (this.config = e ? ? {}, this.configProvider = Promise.resolve(this.config)), void 0 === a.supported && (a.supported = !!("undefined" != typeof Request && "keepalive" in s("https://[::1]")))
                }
                destroy() {}
                async handle(e, {
                    abortSignal: t
                } = {}) {
                    this.config || (this.config = await this.configProvider);
                    let r = this.config.requestTimeout,
                        o = !0 === this.config.keepAlive,
                        c = this.config.credentials;
                    if (t ? .aborted) {
                        let e = Error("Request aborted");
                        return e.name = "AbortError", Promise.reject(e)
                    }
                    let u = e.path,
                        d = function(e) {
                            let t = [];
                            for (let r of Object.keys(e).sort()) {
                                let n = e[r];
                                if (r = (0, i.o)(r), Array.isArray(n))
                                    for (let e = 0, s = n.length; e < s; e++) t.push(`${r}=${(0,i.o)(n[e])}`);
                                else {
                                    let e = r;
                                    (n || "string" == typeof n) && (e += `=${(0,i.o)(n)}`), t.push(e)
                                }
                            }
                            return t.join("&")
                        }(e.query || {});
                    d && (u += `?${d}`), e.fragment && (u += `#${e.fragment}`);
                    let l = "";
                    if (null != e.username || null != e.password) {
                        let t = e.username ? ? "",
                            r = e.password ? ? "";
                        l = `${t}:${r}@`
                    }
                    let {
                        port: p,
                        method: f
                    } = e, h = `${e.protocol}//${l}${e.hostname}${p?`:${p}`:""}${u}`, m = "GET" === f || "HEAD" === f ? void 0 : e.body, y = {
                        body: m,
                        headers: new Headers(e.headers),
                        method: f,
                        credentials: c
                    };
                    this.config ? .cache && (y.cache = this.config.cache), m && (y.duplex = "half"), "undefined" != typeof AbortController && (y.signal = t), a.supported && (y.keepalive = o), "function" == typeof this.config.requestInit && Object.assign(y, this.config.requestInit(e));
                    let g = () => {},
                        w = [fetch(s(h, y)).then(e => {
                            let t = e.headers,
                                r = {};
                            for (let e of t.entries()) r[e[0]] = e[1];
                            return void 0 == e.body ? e.blob().then(t => ({
                                response: new n.cS({
                                    headers: r,
                                    reason: e.statusText,
                                    statusCode: e.status,
                                    body: t
                                })
                            })) : {
                                response: new n.cS({
                                    headers: r,
                                    reason: e.statusText,
                                    statusCode: e.status,
                                    body: e.body
                                })
                            }
                        }), function(e = 0) {
                            return new Promise((t, r) => {
                                e && setTimeout(() => {
                                    let t = Error(`Request did not complete within ${e} ms`);
                                    t.name = "TimeoutError", r(t)
                                }, e)
                            })
                        }(r)];
                    return t && w.push(new Promise((e, r) => {
                        let n = () => {
                            let e = Error("Request aborted");
                            e.name = "AbortError", r(e)
                        };
                        "function" == typeof t.addEventListener ? (t.addEventListener("abort", n, {
                            once: !0
                        }), g = () => t.removeEventListener("abort", n)) : t.onabort = n
                    })), Promise.race(w).finally(g)
                }
                updateHttpClientConfig(e, t) {
                    this.config = void 0, this.configProvider = this.configProvider.then(r => (r[e] = t, r))
                }
                httpHandlerConfigs() {
                    return this.config ? ? {}
                }
            }
            var c = r(44527);
            let u = async e => "function" == typeof Blob && e instanceof Blob || e.constructor ? .name === "Blob" ? void 0 !== Blob.prototype.arrayBuffer ? new Uint8Array(await e.arrayBuffer()) : d(e) : l(e);
            async function d(e) {
                var t;
                let r = await (t = e, new Promise((e, r) => {
                    let n = new FileReader;
                    n.onloadend = () => {
                        if (2 !== n.readyState) return r(Error("Reader aborted too early"));
                        let t = n.result ? ? "",
                            i = t.indexOf(","),
                            s = i > -1 ? i + 1 : t.length;
                        e(t.substring(s))
                    }, n.onabort = () => r(Error("Read aborted")), n.onerror = () => r(n.error), n.readAsDataURL(t)
                }));
                return new Uint8Array((0, c.E)(r))
            }
            async function l(e) {
                let t = [],
                    r = e.getReader(),
                    n = !1,
                    i = 0;
                for (; !n;) {
                    let {
                        done: e,
                        value: s
                    } = await r.read();
                    s && (t.push(s), i += s.length), n = e
                }
                let s = new Uint8Array(i),
                    a = 0;
                for (let e of t) s.set(e, a), a += e.length;
                return s
            }
        },
        21101: (e, t, r) => {
            "use strict";
            r.d(t, {
                n: () => i
            });
            let n = "function" == typeof TextEncoder ? new TextEncoder : null,
                i = e => {
                    if ("string" == typeof e) {
                        if (n) return n.encode(e).byteLength;
                        let t = e.length;
                        for (let r = t - 1; r >= 0; r--) {
                            let n = e.charCodeAt(r);
                            n > 127 && n <= 2047 ? t++ : n > 2047 && n <= 65535 && (t += 2), n >= 56320 && n <= 57343 && r--
                        }
                        return t
                    }
                    if ("number" == typeof e.byteLength) return e.byteLength;
                    if ("number" == typeof e.size) return e.size;
                    throw Error(`Body Length computation failed for ${e}`)
                }
        },
        27329: (e, t, r) => {
            "use strict";
            r.d(t, {
                I: () => o
            });
            let n = (e, t, r) => {
                let n, i, s, a = !1,
                    o = async () => {
                        i || (i = e());
                        try {
                            n = await i, s = !0, a = !1
                        } finally {
                            i = void 0
                        }
                        return n
                    };
                return void 0 === t ? async e => ((!s || e ? .forceRefresh) && (n = await o()), n) : async e => ((!s || e ? .forceRefresh) && (n = await o()), a || (r && !r(n) ? a = !0 : t(n) && await o()), n)
            };
            var i = r(31898),
                s = r.n(i);
            let a = ["in-region", "cross-region", "mobile", "standard", "legacy"],
                o = ({
                    defaultsMode: e
                } = {}) => n(async () => {
                    let t = "function" == typeof e ? await e() : e;
                    switch (t ? .toLowerCase()) {
                        case "auto":
                            return Promise.resolve(c() ? "mobile" : "standard");
                        case "mobile":
                        case "in-region":
                        case "cross-region":
                        case "standard":
                        case "legacy":
                            return Promise.resolve(t ? .toLocaleLowerCase());
                        case void 0:
                            return Promise.resolve("legacy");
                        default:
                            throw Error(`Invalid parameter for "defaultsMode", expect ${a.join(", ")}, got ${t}`)
                    }
                }),
                c = () => {
                    let e = "undefined" != typeof window && window ? .navigator ? .userAgent ? s().parse(window.navigator.userAgent) : void 0,
                        t = e ? .platform ? .type;
                    return "tablet" === t || "mobile" === t
                }
        },
        27652: (e, t, r) => {
            "use strict";
            r.d(t, {
                u: () => i,
                t: () => s
            });
            var n = r(66879);
            let i = e => e[n.Vf] || (e[n.Vf] = {}),
                s = e => {
                    if ("function" == typeof e) return e;
                    let t = Promise.resolve(e);
                    return () => t
                }
        },
        28046: (e, t, r) => {
            "use strict";
            r.d(t, {
                G: () => i
            });
            var n = r(56067);
            class i extends n.TJ {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, i.prototype)
                }
            }
        },
        29425: (e, t, r) => {
            "use strict";
            r.d(t, {
                h$: () => y,
                mR: () => g,
                e: () => b,
                wB: () => o,
                lW: () => f,
                OC: () => w,
                K4: () => v,
                te: () => h,
                J7: () => m
            }), r(66879);
            var n = r(27652);
            let i = (e, t) => {
                    if (!t || 0 === t.length) return e;
                    let r = [];
                    for (let n of t)
                        for (let t of e) t.schemeId.split("#")[1] === n && r.push(t);
                    for (let t of e) r.find(({
                        schemeId: e
                    }) => e === t.schemeId) || r.push(t);
                    return r
                },
                s = (e, t) => (r, s) => async a => {
                    let o = i(e.httpAuthSchemeProvider(await t.httpAuthSchemeParametersProvider(e, s, a.input)), e.authSchemePreference ? await e.authSchemePreference() : []),
                        c = function(e) {
                            let t = new Map;
                            for (let r of e) t.set(r.schemeId, r);
                            return t
                        }(e.httpAuthSchemes),
                        u = (0, n.u)(s),
                        d = [];
                    for (let r of o) {
                        let n = c.get(r.schemeId);
                        if (!n) {
                            d.push(`HttpAuthScheme \`${r.schemeId}\` was not enabled for this service.`);
                            continue
                        }
                        let i = n.identityProvider(await t.identityProviderConfigProvider(e));
                        if (!i) {
                            d.push(`HttpAuthScheme \`${r.schemeId}\` did not have an IdentityProvider configured.`);
                            continue
                        }
                        let {
                            identityProperties: a = {},
                            signingProperties: o = {}
                        } = r.propertiesExtractor ? .(e, s) || {};
                        r.identityProperties = Object.assign(r.identityProperties || {}, a), r.signingProperties = Object.assign(r.signingProperties || {}, o), u.selectedHttpAuthScheme = {
                            httpAuthOption: r,
                            identity: await i(r.identityProperties),
                            signer: n.signer
                        };
                        break
                    }
                    if (!u.selectedHttpAuthScheme) throw Error(d.join("\n"));
                    return r(a)
                },
                a = {
                    step: "serialize",
                    tags: ["HTTP_AUTH_SCHEME"],
                    name: "httpAuthSchemeMiddleware",
                    override: !0,
                    relation: "before",
                    toMiddleware: "endpointV2Middleware"
                },
                o = (e, {
                    httpAuthSchemeParametersProvider: t,
                    identityProviderConfigProvider: r
                }) => ({
                    applyToStack: n => {
                        n.addRelativeTo(s(e, {
                            httpAuthSchemeParametersProvider: t,
                            identityProviderConfigProvider: r
                        }), a)
                    }
                });
            r(9476).Ou.name;
            var c = r(92544);
            let u = e => e => {
                    throw e
                },
                d = (e, t) => {},
                l = e => (e, t) => async r => {
                    if (!c.Kd.isInstance(r.request)) return e(r);
                    let i = (0, n.u)(t).selectedHttpAuthScheme;
                    if (!i) throw Error("No HttpAuthScheme was selected: unable to sign request");
                    let {
                        httpAuthOption: {
                            signingProperties: s = {}
                        },
                        identity: a,
                        signer: o
                    } = i, l = await e({ ...r,
                        request: await o.sign(r.request, a, s)
                    }).catch((o.errorHandler || u)(s));
                    return (o.successHandler || d)(l.response, s), l
                },
                p = {
                    step: "finalizeRequest",
                    tags: ["HTTP_SIGNING"],
                    name: "httpSigningMiddleware",
                    aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
                    override: !0,
                    relation: "after",
                    toMiddleware: "retryMiddleware"
                },
                f = e => ({
                    applyToStack: t => {
                        t.addRelativeTo(l(e), p)
                    }
                }),
                h = e => {
                    if ("function" == typeof e) return e;
                    let t = Promise.resolve(e);
                    return () => t
                };

            function m(e, t, r) {
                e.__smithy_context ? e.__smithy_context.features || (e.__smithy_context.features = {}) : e.__smithy_context = {
                    features: {}
                }, e.__smithy_context.features[t] = r
            }
            r(91870);
            class y {
                constructor(e) {
                    for (let [t, r] of (this.authSchemes = new Map, Object.entries(e))) void 0 !== r && this.authSchemes.set(t, r)
                }
                getIdentityProvider(e) {
                    return this.authSchemes.get(e)
                }
            }
            class g {
                async sign(e, t, r) {
                    return e
                }
            }
            let w = e => b(e) && e.expiration.getTime() - Date.now() < 3e5,
                b = e => void 0 !== e.expiration,
                v = (e, t, r) => {
                    let n, i, s;
                    if (void 0 === e) return;
                    let a = "function" != typeof e ? async () => Promise.resolve(e) : e,
                        o = !1,
                        c = async e => {
                            i || (i = a(e));
                            try {
                                n = await i, s = !0, o = !1
                            } finally {
                                i = void 0
                            }
                            return n
                        };
                    return void 0 === t ? async e => ((!s || e ? .forceRefresh) && (n = await c(e)), n) : async e => ((!s || e ? .forceRefresh) && (n = await c(e)), o || (r(n) ? t(n) && await c(e) : o = !0), n)
                }
        },
        31072: (e, t, r) => {
            "use strict";
            r.d(t, {
                    Y: () => v,
                    Gz: () => n,
                    bp: () => c,
                    L0: () => i,
                    QJ: () => o,
                    Df: () => l,
                    l5: () => m,
                    G8: () => u,
                    XP: () => h,
                    ok: () => y,
                    XS: () => p,
                    cm: () => s,
                    ru: () => b,
                    jh: () => d,
                    Rn: () => f
                }),
                function(e) {
                    e.STANDARD = "standard", e.ADAPTIVE = "adaptive"
                }(s || (s = {}));
            let n = 3,
                i = s.STANDARD;
            var s, a = r(77369);
            class o {
                constructor(e) {
                    this.currentCapacity = 0, this.enabled = !1, this.lastMaxRate = 0, this.measuredTxRate = 0, this.requestCount = 0, this.lastTimestamp = 0, this.timeWindow = 0, this.beta = e ? .beta ? ? .7, this.minCapacity = e ? .minCapacity ? ? 1, this.minFillRate = e ? .minFillRate ? ? .5, this.scaleConstant = e ? .scaleConstant ? ? .4, this.smooth = e ? .smooth ? ? .8;
                    let t = this.getCurrentTimeInSeconds();
                    this.lastThrottleTime = t, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity
                }
                getCurrentTimeInSeconds() {
                    return Date.now() / 1e3
                }
                async getSendToken() {
                    return this.acquireTokenBucket(1)
                }
                async acquireTokenBucket(e) {
                    if (this.enabled) {
                        if (this.refillTokenBucket(), e > this.currentCapacity) {
                            let t = (e - this.currentCapacity) / this.fillRate * 1e3;
                            await new Promise(e => o.setTimeoutFn(e, t))
                        }
                        this.currentCapacity = this.currentCapacity - e
                    }
                }
                refillTokenBucket() {
                    let e = this.getCurrentTimeInSeconds();
                    if (!this.lastTimestamp) {
                        this.lastTimestamp = e;
                        return
                    }
                    let t = (e - this.lastTimestamp) * this.fillRate;
                    this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + t), this.lastTimestamp = e
                }
                updateClientSendingRate(e) {
                    let t;
                    if (this.updateMeasuredRate(), (0, a.Qb)(e)) {
                        let e = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
                        this.lastMaxRate = e, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), t = this.cubicThrottle(e), this.enableTokenBucket()
                    } else this.calculateTimeWindow(), t = this.cubicSuccess(this.getCurrentTimeInSeconds());
                    let r = Math.min(t, 2 * this.measuredTxRate);
                    this.updateTokenBucketRate(r)
                }
                calculateTimeWindow() {
                    this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3))
                }
                cubicThrottle(e) {
                    return this.getPrecise(e * this.beta)
                }
                cubicSuccess(e) {
                    return this.getPrecise(this.scaleConstant * Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate)
                }
                enableTokenBucket() {
                    this.enabled = !0
                }
                updateTokenBucketRate(e) {
                    this.refillTokenBucket(), this.fillRate = Math.max(e, this.minFillRate), this.maxCapacity = Math.max(e, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity)
                }
                updateMeasuredRate() {
                    let e = Math.floor(2 * this.getCurrentTimeInSeconds()) / 2;
                    if (this.requestCount++, e > this.lastTxRateBucket) {
                        let t = this.requestCount / (e - this.lastTxRateBucket);
                        this.measuredTxRate = this.getPrecise(t * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = e
                    }
                }
                getPrecise(e) {
                    return parseFloat(e.toFixed(8))
                }
            }
            o.setTimeoutFn = setTimeout;
            let c = 100,
                u = 2e4,
                d = 500,
                l = 500,
                p = 5,
                f = 10,
                h = 1,
                m = "amz-sdk-invocation-id",
                y = "amz-sdk-request",
                g = () => {
                    let e = c;
                    return {
                        computeNextBackoffDelay: t => Math.floor(Math.min(u, Math.random() * 2 ** t * e)),
                        setDelayBase: t => {
                            e = t
                        }
                    }
                },
                w = ({
                    retryDelay: e,
                    retryCount: t,
                    retryCost: r
                }) => ({
                    getRetryCount: () => t,
                    getRetryDelay: () => Math.min(u, e),
                    getRetryCost: () => r
                });
            class b {
                constructor(e) {
                    this.maxAttempts = e, this.mode = s.STANDARD, this.capacity = l, this.retryBackoffStrategy = g(), this.maxAttemptsProvider = "function" == typeof e ? e : async () => e
                }
                async acquireInitialRetryToken(e) {
                    return w({
                        retryDelay: c,
                        retryCount: 0
                    })
                }
                async refreshRetryTokenForRetry(e, t) {
                    let r = await this.getMaxAttempts();
                    if (this.shouldRetry(e, t, r)) {
                        let r = t.errorType;
                        this.retryBackoffStrategy.setDelayBase("THROTTLING" === r ? d : c);
                        let n = this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount()),
                            i = t.retryAfterHint ? Math.max(t.retryAfterHint.getTime() - Date.now() || 0, n) : n,
                            s = this.getCapacityCost(r);
                        return this.capacity -= s, w({
                            retryDelay: i,
                            retryCount: e.getRetryCount() + 1,
                            retryCost: s
                        })
                    }
                    throw Error("No retry token available")
                }
                recordSuccess(e) {
                    this.capacity = Math.max(l, this.capacity + (e.getRetryCost() ? ? h))
                }
                getCapacity() {
                    return this.capacity
                }
                async getMaxAttempts() {
                    try {
                        return await this.maxAttemptsProvider()
                    } catch (e) {
                        return console.warn(`Max attempts provider could not resolve. Using default of ${n}`), n
                    }
                }
                shouldRetry(e, t, r) {
                    return e.getRetryCount() + 1 < r && this.capacity >= this.getCapacityCost(t.errorType) && this.isRetryableError(t.errorType)
                }
                getCapacityCost(e) {
                    return "TRANSIENT" === e ? f : p
                }
                isRetryableError(e) {
                    return "THROTTLING" === e || "TRANSIENT" === e
                }
            }
            class v {
                constructor(e, t) {
                    this.maxAttemptsProvider = e, this.mode = s.ADAPTIVE;
                    let {
                        rateLimiter: r
                    } = t ? ? {};
                    this.rateLimiter = r ? ? new o, this.standardRetryStrategy = new b(e)
                }
                async acquireInitialRetryToken(e) {
                    return await this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(e)
                }
                async refreshRetryTokenForRetry(e, t) {
                    return this.rateLimiter.updateClientSendingRate(t), this.standardRetryStrategy.refreshRetryTokenForRetry(e, t)
                }
                recordSuccess(e) {
                    this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(e)
                }
            }
        },
        31898: function(e) {
            e.exports = function() {
                var e = {
                        17: function(e, t, r) {
                            "use strict";
                            t.__esModule = !0, t.default = void 0;
                            var n = r(18);
                            t.default = function() {
                                function e() {}
                                return e.getFirstMatch = function(e, t) {
                                    var r = t.match(e);
                                    return r && r.length > 0 && r[1] || ""
                                }, e.getSecondMatch = function(e, t) {
                                    var r = t.match(e);
                                    return r && r.length > 1 && r[2] || ""
                                }, e.matchAndReturnConst = function(e, t, r) {
                                    if (e.test(t)) return r
                                }, e.getWindowsVersionName = function(e) {
                                    switch (e) {
                                        case "NT":
                                            return "NT";
                                        case "XP":
                                        case "NT 5.1":
                                            return "XP";
                                        case "NT 5.0":
                                            return "2000";
                                        case "NT 5.2":
                                            return "2003";
                                        case "NT 6.0":
                                            return "Vista";
                                        case "NT 6.1":
                                            return "7";
                                        case "NT 6.2":
                                            return "8";
                                        case "NT 6.3":
                                            return "8.1";
                                        case "NT 10.0":
                                            return "10";
                                        default:
                                            return
                                    }
                                }, e.getMacOSVersionName = function(e) {
                                    var t = e.split(".").splice(0, 2).map(function(e) {
                                        return parseInt(e, 10) || 0
                                    });
                                    if (t.push(0), 10 === t[0]) switch (t[1]) {
                                        case 5:
                                            return "Leopard";
                                        case 6:
                                            return "Snow Leopard";
                                        case 7:
                                            return "Lion";
                                        case 8:
                                            return "Mountain Lion";
                                        case 9:
                                            return "Mavericks";
                                        case 10:
                                            return "Yosemite";
                                        case 11:
                                            return "El Capitan";
                                        case 12:
                                            return "Sierra";
                                        case 13:
                                            return "High Sierra";
                                        case 14:
                                            return "Mojave";
                                        case 15:
                                            return "Catalina";
                                        default:
                                            return
                                    }
                                }, e.getAndroidVersionName = function(e) {
                                    var t = e.split(".").splice(0, 2).map(function(e) {
                                        return parseInt(e, 10) || 0
                                    });
                                    if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                                }, e.getVersionPrecision = function(e) {
                                    return e.split(".").length
                                }, e.compareVersions = function(t, r, n) {
                                    void 0 === n && (n = !1);
                                    var i = e.getVersionPrecision(t),
                                        s = e.getVersionPrecision(r),
                                        a = Math.max(i, s),
                                        o = 0,
                                        c = e.map([t, r], function(t) {
                                            var r = a - e.getVersionPrecision(t),
                                                n = t + Array(r + 1).join(".0");
                                            return e.map(n.split("."), function(e) {
                                                return Array(20 - e.length).join("0") + e
                                            }).reverse()
                                        });
                                    for (n && (o = a - Math.min(i, s)), a -= 1; a >= o;) {
                                        if (c[0][a] > c[1][a]) return 1;
                                        if (c[0][a] === c[1][a]) {
                                            if (a === o) return 0;
                                            a -= 1
                                        } else if (c[0][a] < c[1][a]) return -1
                                    }
                                }, e.map = function(e, t) {
                                    var r, n = [];
                                    if (Array.prototype.map) return Array.prototype.map.call(e, t);
                                    for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                                    return n
                                }, e.find = function(e, t) {
                                    var r, n;
                                    if (Array.prototype.find) return Array.prototype.find.call(e, t);
                                    for (r = 0, n = e.length; r < n; r += 1) {
                                        var i = e[r];
                                        if (t(i, r)) return i
                                    }
                                }, e.assign = function(e) {
                                    for (var t, r, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) i[s - 1] = arguments[s];
                                    if (Object.assign) return Object.assign.apply(Object, [e].concat(i));
                                    for (t = 0, r = i.length; t < r; t += 1) ! function() {
                                        var r = i[t];
                                        "object" == typeof r && null !== r && Object.keys(r).forEach(function(t) {
                                            e[t] = r[t]
                                        })
                                    }();
                                    return e
                                }, e.getBrowserAlias = function(e) {
                                    return n.BROWSER_ALIASES_MAP[e]
                                }, e.getBrowserTypeByAlias = function(e) {
                                    return n.BROWSER_MAP[e] || ""
                                }, e
                            }(), e.exports = t.default
                        },
                        18: function(e, t, r) {
                            "use strict";
                            t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = {
                                "Amazon Silk": "amazon_silk",
                                "Android Browser": "android",
                                Bada: "bada",
                                BlackBerry: "blackberry",
                                Chrome: "chrome",
                                Chromium: "chromium",
                                Electron: "electron",
                                Epiphany: "epiphany",
                                Firefox: "firefox",
                                Focus: "focus",
                                Generic: "generic",
                                "Google Search": "google_search",
                                Googlebot: "googlebot",
                                "Internet Explorer": "ie",
                                "K-Meleon": "k_meleon",
                                Maxthon: "maxthon",
                                "Microsoft Edge": "edge",
                                "MZ Browser": "mz",
                                "NAVER Whale Browser": "naver",
                                Opera: "opera",
                                "Opera Coast": "opera_coast",
                                PhantomJS: "phantomjs",
                                Puffin: "puffin",
                                QupZilla: "qupzilla",
                                QQ: "qq",
                                QQLite: "qqlite",
                                Safari: "safari",
                                Sailfish: "sailfish",
                                "Samsung Internet for Android": "samsung_internet",
                                SeaMonkey: "seamonkey",
                                Sleipnir: "sleipnir",
                                Swing: "swing",
                                Tizen: "tizen",
                                "UC Browser": "uc",
                                Vivaldi: "vivaldi",
                                "WebOS Browser": "webos",
                                WeChat: "wechat",
                                "Yandex Browser": "yandex",
                                Roku: "roku"
                            }, t.BROWSER_MAP = {
                                amazon_silk: "Amazon Silk",
                                android: "Android Browser",
                                bada: "Bada",
                                blackberry: "BlackBerry",
                                chrome: "Chrome",
                                chromium: "Chromium",
                                electron: "Electron",
                                epiphany: "Epiphany",
                                firefox: "Firefox",
                                focus: "Focus",
                                generic: "Generic",
                                googlebot: "Googlebot",
                                google_search: "Google Search",
                                ie: "Internet Explorer",
                                k_meleon: "K-Meleon",
                                maxthon: "Maxthon",
                                edge: "Microsoft Edge",
                                mz: "MZ Browser",
                                naver: "NAVER Whale Browser",
                                opera: "Opera",
                                opera_coast: "Opera Coast",
                                phantomjs: "PhantomJS",
                                puffin: "Puffin",
                                qupzilla: "QupZilla",
                                qq: "QQ Browser",
                                qqlite: "QQ Browser Lite",
                                safari: "Safari",
                                sailfish: "Sailfish",
                                samsung_internet: "Samsung Internet for Android",
                                seamonkey: "SeaMonkey",
                                sleipnir: "Sleipnir",
                                swing: "Swing",
                                tizen: "Tizen",
                                uc: "UC Browser",
                                vivaldi: "Vivaldi",
                                webos: "WebOS Browser",
                                wechat: "WeChat",
                                yandex: "Yandex Browser"
                            }, t.PLATFORMS_MAP = {
                                tablet: "tablet",
                                mobile: "mobile",
                                desktop: "desktop",
                                tv: "tv"
                            }, t.OS_MAP = {
                                WindowsPhone: "Windows Phone",
                                Windows: "Windows",
                                MacOS: "macOS",
                                iOS: "iOS",
                                Android: "Android",
                                WebOS: "WebOS",
                                BlackBerry: "BlackBerry",
                                Bada: "Bada",
                                Tizen: "Tizen",
                                Linux: "Linux",
                                ChromeOS: "Chrome OS",
                                PlayStation4: "PlayStation 4",
                                Roku: "Roku"
                            }, t.ENGINE_MAP = {
                                EdgeHTML: "EdgeHTML",
                                Blink: "Blink",
                                Trident: "Trident",
                                Presto: "Presto",
                                Gecko: "Gecko",
                                WebKit: "WebKit"
                            }
                        },
                        90: function(e, t, r) {
                            "use strict";
                            t.__esModule = !0, t.default = void 0;
                            var n, i = (n = r(91)) && n.__esModule ? n : {
                                    default: n
                                },
                                s = r(18);
                            t.default = function() {
                                function e() {}
                                return e.getParser = function(e, t) {
                                        if (void 0 === t && (t = !1), "string" != typeof e) throw Error("UserAgent should be a string");
                                        return new i.default(e, t)
                                    }, e.parse = function(e) {
                                        return new i.default(e).getResult()
                                    },
                                    function(e, t) {
                                        for (var r = 0; r < t.length; r++) {
                                            var n = t[r];
                                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                        }
                                    }(e, [{
                                        key: "BROWSER_MAP",
                                        get: function() {
                                            return s.BROWSER_MAP
                                        }
                                    }, {
                                        key: "ENGINE_MAP",
                                        get: function() {
                                            return s.ENGINE_MAP
                                        }
                                    }, {
                                        key: "OS_MAP",
                                        get: function() {
                                            return s.OS_MAP
                                        }
                                    }, {
                                        key: "PLATFORMS_MAP",
                                        get: function() {
                                            return s.PLATFORMS_MAP
                                        }
                                    }]), e
                            }(), e.exports = t.default
                        },
                        91: function(e, t, r) {
                            "use strict";
                            t.__esModule = !0, t.default = void 0;
                            var n = c(r(92)),
                                i = c(r(93)),
                                s = c(r(94)),
                                a = c(r(95)),
                                o = c(r(17));

                            function c(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                }
                            }
                            t.default = function() {
                                function e(e, t) {
                                    if (void 0 === t && (t = !1), null == e || "" === e) throw Error("UserAgent parameter can't be empty");
                                    this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                                }
                                var t = e.prototype;
                                return t.getUA = function() {
                                    return this._ua
                                }, t.test = function(e) {
                                    return e.test(this._ua)
                                }, t.parseBrowser = function() {
                                    var e = this;
                                    this.parsedResult.browser = {};
                                    var t = o.default.find(n.default, function(t) {
                                        if ("function" == typeof t.test) return t.test(e);
                                        if (t.test instanceof Array) return t.test.some(function(t) {
                                            return e.test(t)
                                        });
                                        throw Error("Browser's test function is not valid")
                                    });
                                    return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                                }, t.getBrowser = function() {
                                    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                                }, t.getBrowserName = function(e) {
                                    return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                                }, t.getBrowserVersion = function() {
                                    return this.getBrowser().version
                                }, t.getOS = function() {
                                    return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                                }, t.parseOS = function() {
                                    var e = this;
                                    this.parsedResult.os = {};
                                    var t = o.default.find(i.default, function(t) {
                                        if ("function" == typeof t.test) return t.test(e);
                                        if (t.test instanceof Array) return t.test.some(function(t) {
                                            return e.test(t)
                                        });
                                        throw Error("Browser's test function is not valid")
                                    });
                                    return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                                }, t.getOSName = function(e) {
                                    var t = this.getOS().name;
                                    return e ? String(t).toLowerCase() || "" : t || ""
                                }, t.getOSVersion = function() {
                                    return this.getOS().version
                                }, t.getPlatform = function() {
                                    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                                }, t.getPlatformType = function(e) {
                                    void 0 === e && (e = !1);
                                    var t = this.getPlatform().type;
                                    return e ? String(t).toLowerCase() || "" : t || ""
                                }, t.parsePlatform = function() {
                                    var e = this;
                                    this.parsedResult.platform = {};
                                    var t = o.default.find(s.default, function(t) {
                                        if ("function" == typeof t.test) return t.test(e);
                                        if (t.test instanceof Array) return t.test.some(function(t) {
                                            return e.test(t)
                                        });
                                        throw Error("Browser's test function is not valid")
                                    });
                                    return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                                }, t.getEngine = function() {
                                    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                                }, t.getEngineName = function(e) {
                                    return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                                }, t.parseEngine = function() {
                                    var e = this;
                                    this.parsedResult.engine = {};
                                    var t = o.default.find(a.default, function(t) {
                                        if ("function" == typeof t.test) return t.test(e);
                                        if (t.test instanceof Array) return t.test.some(function(t) {
                                            return e.test(t)
                                        });
                                        throw Error("Browser's test function is not valid")
                                    });
                                    return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                                }, t.parse = function() {
                                    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                                }, t.getResult = function() {
                                    return o.default.assign({}, this.parsedResult)
                                }, t.satisfies = function(e) {
                                    var t = this,
                                        r = {},
                                        n = 0,
                                        i = {},
                                        s = 0;
                                    if (Object.keys(e).forEach(function(t) {
                                            var a = e[t];
                                            "string" == typeof a ? (i[t] = a, s += 1) : "object" == typeof a && (r[t] = a, n += 1)
                                        }), n > 0) {
                                        var a = Object.keys(r),
                                            c = o.default.find(a, function(e) {
                                                return t.isOS(e)
                                            });
                                        if (c) {
                                            var u = this.satisfies(r[c]);
                                            if (void 0 !== u) return u
                                        }
                                        var d = o.default.find(a, function(e) {
                                            return t.isPlatform(e)
                                        });
                                        if (d) {
                                            var l = this.satisfies(r[d]);
                                            if (void 0 !== l) return l
                                        }
                                    }
                                    if (s > 0) {
                                        var p = Object.keys(i),
                                            f = o.default.find(p, function(e) {
                                                return t.isBrowser(e, !0)
                                            });
                                        if (void 0 !== f) return this.compareVersion(i[f])
                                    }
                                }, t.isBrowser = function(e, t) {
                                    void 0 === t && (t = !1);
                                    var r = this.getBrowserName().toLowerCase(),
                                        n = e.toLowerCase(),
                                        i = o.default.getBrowserTypeByAlias(n);
                                    return t && i && (n = i.toLowerCase()), n === r
                                }, t.compareVersion = function(e) {
                                    var t = [0],
                                        r = e,
                                        n = !1,
                                        i = this.getBrowserVersion();
                                    if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (n = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (n = !0, r = e.substr(1)), t.indexOf(o.default.compareVersions(i, r, n)) > -1
                                }, t.isOS = function(e) {
                                    return this.getOSName(!0) === String(e).toLowerCase()
                                }, t.isPlatform = function(e) {
                                    return this.getPlatformType(!0) === String(e).toLowerCase()
                                }, t.isEngine = function(e) {
                                    return this.getEngineName(!0) === String(e).toLowerCase()
                                }, t.is = function(e, t) {
                                    return void 0 === t && (t = !1), this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
                                }, t.some = function(e) {
                                    var t = this;
                                    return void 0 === e && (e = []), e.some(function(e) {
                                        return t.is(e)
                                    })
                                }, e
                            }(), e.exports = t.default
                        },
                        92: function(e, t, r) {
                            "use strict";
                            t.__esModule = !0, t.default = void 0;
                            var n, i = (n = r(17)) && n.__esModule ? n : {
                                    default: n
                                },
                                s = /version\/(\d+(\.?_?\d+)+)/i;
                            t.default = [{
                                test: [/googlebot/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Googlebot"
                                        },
                                        r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/opera/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/opr\/|opios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera"
                                        },
                                        r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/SamsungBrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Samsung Internet for Android"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/Whale/i],
                                describe: function(e) {
                                    var t = {
                                            name: "NAVER Whale Browser"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/MZBrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "MZ Browser"
                                        },
                                        r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/focus/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Focus"
                                        },
                                        r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/swing/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Swing"
                                        },
                                        r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/coast/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera Coast"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/opt\/\d+(?:.?_?\d+)+/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Opera Touch"
                                        },
                                        r = i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/yabrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Yandex Browser"
                                        },
                                        r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/ucbrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "UC Browser"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/Maxthon|mxios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Maxthon"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/epiphany/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Epiphany"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/puffin/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Puffin"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/sleipnir/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Sleipnir"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/k-meleon/i],
                                describe: function(e) {
                                    var t = {
                                            name: "K-Meleon"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/micromessenger/i],
                                describe: function(e) {
                                    var t = {
                                            name: "WeChat"
                                        },
                                        r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/qqbrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                                        },
                                        r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/msie|trident/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Internet Explorer"
                                        },
                                        r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/\sedg\//i],
                                describe: function(e) {
                                    var t = {
                                            name: "Microsoft Edge"
                                        },
                                        r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/edg([ea]|ios)/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Microsoft Edge"
                                        },
                                        r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/vivaldi/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Vivaldi"
                                        },
                                        r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/seamonkey/i],
                                describe: function(e) {
                                    var t = {
                                            name: "SeaMonkey"
                                        },
                                        r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/sailfish/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Sailfish"
                                        },
                                        r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/silk/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Amazon Silk"
                                        },
                                        r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/phantom/i],
                                describe: function(e) {
                                    var t = {
                                            name: "PhantomJS"
                                        },
                                        r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/slimerjs/i],
                                describe: function(e) {
                                    var t = {
                                            name: "SlimerJS"
                                        },
                                        r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                                describe: function(e) {
                                    var t = {
                                            name: "BlackBerry"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/(web|hpw)[o0]s/i],
                                describe: function(e) {
                                    var t = {
                                            name: "WebOS Browser"
                                        },
                                        r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/bada/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Bada"
                                        },
                                        r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/tizen/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Tizen"
                                        },
                                        r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/qupzilla/i],
                                describe: function(e) {
                                    var t = {
                                            name: "QupZilla"
                                        },
                                        r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/firefox|iceweasel|fxios/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Firefox"
                                        },
                                        r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/electron/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Electron"
                                        },
                                        r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/MiuiBrowser/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Miui"
                                        },
                                        r = i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/chromium/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Chromium"
                                        },
                                        r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/chrome|crios|crmo/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Chrome"
                                        },
                                        r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/GSA/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Google Search"
                                        },
                                        r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    var t = !e.test(/like android/i),
                                        r = e.test(/android/i);
                                    return t && r
                                },
                                describe: function(e) {
                                    var t = {
                                            name: "Android Browser"
                                        },
                                        r = i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/playstation 4/i],
                                describe: function(e) {
                                    var t = {
                                            name: "PlayStation 4"
                                        },
                                        r = i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/safari|applewebkit/i],
                                describe: function(e) {
                                    var t = {
                                            name: "Safari"
                                        },
                                        r = i.default.getFirstMatch(s, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/.*/i],
                                describe: function(e) {
                                    var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                                    return {
                                        name: i.default.getFirstMatch(t, e),
                                        version: i.default.getSecondMatch(t, e)
                                    }
                                }
                            }], e.exports = t.default
                        },
                        93: function(e, t, r) {
                            "use strict";
                            t.__esModule = !0, t.default = void 0;
                            var n, i = (n = r(17)) && n.__esModule ? n : {
                                    default: n
                                },
                                s = r(18);
                            t.default = [{
                                test: [/Roku\/DVP/],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                                    return {
                                        name: s.OS_MAP.Roku,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/windows phone/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                                    return {
                                        name: s.OS_MAP.WindowsPhone,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/windows /i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                                        r = i.default.getWindowsVersionName(t);
                                    return {
                                        name: s.OS_MAP.Windows,
                                        version: t,
                                        versionName: r
                                    }
                                }
                            }, {
                                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                                describe: function(e) {
                                    var t = {
                                            name: s.OS_MAP.iOS
                                        },
                                        r = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/macintosh/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                                        r = i.default.getMacOSVersionName(t),
                                        n = {
                                            name: s.OS_MAP.MacOS,
                                            version: t
                                        };
                                    return r && (n.versionName = r), n
                                }
                            }, {
                                test: [/(ipod|iphone|ipad)/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                                    return {
                                        name: s.OS_MAP.iOS,
                                        version: t
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = !e.test(/like android/i),
                                        r = e.test(/android/i);
                                    return t && r
                                },
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                                        r = i.default.getAndroidVersionName(t),
                                        n = {
                                            name: s.OS_MAP.Android,
                                            version: t
                                        };
                                    return r && (n.versionName = r), n
                                }
                            }, {
                                test: [/(web|hpw)[o0]s/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                                        r = {
                                            name: s.OS_MAP.WebOS
                                        };
                                    return t && t.length && (r.version = t), r
                                }
                            }, {
                                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
                                    return {
                                        name: s.OS_MAP.BlackBerry,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/bada/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                                    return {
                                        name: s.OS_MAP.Bada,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/tizen/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                                    return {
                                        name: s.OS_MAP.Tizen,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/linux/i],
                                describe: function() {
                                    return {
                                        name: s.OS_MAP.Linux
                                    }
                                }
                            }, {
                                test: [/CrOS/],
                                describe: function() {
                                    return {
                                        name: s.OS_MAP.ChromeOS
                                    }
                                }
                            }, {
                                test: [/PlayStation 4/],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                                    return {
                                        name: s.OS_MAP.PlayStation4,
                                        version: t
                                    }
                                }
                            }], e.exports = t.default
                        },
                        94: function(e, t, r) {
                            "use strict";
                            t.__esModule = !0, t.default = void 0;
                            var n, i = (n = r(17)) && n.__esModule ? n : {
                                    default: n
                                },
                                s = r(18);
                            t.default = [{
                                test: [/googlebot/i],
                                describe: function() {
                                    return {
                                        type: "bot",
                                        vendor: "Google"
                                    }
                                }
                            }, {
                                test: [/huawei/i],
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                                        r = {
                                            type: s.PLATFORMS_MAP.mobile,
                                            vendor: "Huawei"
                                        };
                                    return t && (r.model = t), r
                                }
                            }, {
                                test: [/nexus\s*(?:7|8|9|10).*/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Nexus"
                                    }
                                }
                            }, {
                                test: [/ipad/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Apple",
                                        model: "iPad"
                                    }
                                }
                            }, {
                                test: [/Macintosh(.*?) FxiOS(.*?)\//],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Apple",
                                        model: "iPad"
                                    }
                                }
                            }, {
                                test: [/kftt build/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Amazon",
                                        model: "Kindle Fire HD 7"
                                    }
                                }
                            }, {
                                test: [/silk/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet,
                                        vendor: "Amazon"
                                    }
                                }
                            }, {
                                test: [/tablet(?! pc)/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = e.test(/ipod|iphone/i),
                                        r = e.test(/like (ipod|iphone)/i);
                                    return t && !r
                                },
                                describe: function(e) {
                                    var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                                    return {
                                        type: s.PLATFORMS_MAP.mobile,
                                        vendor: "Apple",
                                        model: t
                                    }
                                }
                            }, {
                                test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile,
                                        vendor: "Nexus"
                                    }
                                }
                            }, {
                                test: [/[^-]mobi/i],
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "blackberry" === e.getBrowserName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile,
                                        vendor: "BlackBerry"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "bada" === e.getBrowserName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "windows phone" === e.getBrowserName()
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile,
                                        vendor: "Microsoft"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    var t = Number(String(e.getOSVersion()).split(".")[0]);
                                    return "android" === e.getOSName(!0) && t >= 3
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tablet
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "android" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.mobile
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "macos" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.desktop,
                                        vendor: "Apple"
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "windows" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.desktop
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "linux" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.desktop
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "playstation 4" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tv
                                    }
                                }
                            }, {
                                test: function(e) {
                                    return "roku" === e.getOSName(!0)
                                },
                                describe: function() {
                                    return {
                                        type: s.PLATFORMS_MAP.tv
                                    }
                                }
                            }], e.exports = t.default
                        },
                        95: function(e, t, r) {
                            "use strict";
                            t.__esModule = !0, t.default = void 0;
                            var n, i = (n = r(17)) && n.__esModule ? n : {
                                    default: n
                                },
                                s = r(18);
                            t.default = [{
                                test: function(e) {
                                    return "microsoft edge" === e.getBrowserName(!0)
                                },
                                describe: function(e) {
                                    if (/\sedg\//i.test(e)) return {
                                        name: s.ENGINE_MAP.Blink
                                    };
                                    var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                                    return {
                                        name: s.ENGINE_MAP.EdgeHTML,
                                        version: t
                                    }
                                }
                            }, {
                                test: [/trident/i],
                                describe: function(e) {
                                    var t = {
                                            name: s.ENGINE_MAP.Trident
                                        },
                                        r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    return e.test(/presto/i)
                                },
                                describe: function(e) {
                                    var t = {
                                            name: s.ENGINE_MAP.Presto
                                        },
                                        r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: function(e) {
                                    var t = e.test(/gecko/i),
                                        r = e.test(/like gecko/i);
                                    return t && !r
                                },
                                describe: function(e) {
                                    var t = {
                                            name: s.ENGINE_MAP.Gecko
                                        },
                                        r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }, {
                                test: [/(apple)?webkit\/537\.36/i],
                                describe: function() {
                                    return {
                                        name: s.ENGINE_MAP.Blink
                                    }
                                }
                            }, {
                                test: [/(apple)?webkit/i],
                                describe: function(e) {
                                    var t = {
                                            name: s.ENGINE_MAP.WebKit
                                        },
                                        r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                                    return r && (t.version = r), t
                                }
                            }], e.exports = t.default
                        }
                    },
                    t = {};

                function r(n) {
                    if (t[n]) return t[n].exports;
                    var i = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
                }
                return r.m = e, r.c = t, r.d = function(e, t, n) {
                    r.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                    })
                }, r.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, r.t = function(e, t) {
                    if (1 & t && (e = r(e)), 8 & t || 4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var n = Object.create(null);
                    if (r.r(n), Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var i in e) r.d(n, i, (function(t) {
                            return e[t]
                        }).bind(null, i));
                    return n
                }, r.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return r.d(t, "a", t), t
                }, r.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, r.p = "", r(r.s = 90)
            }()
        },
        33072: (e, t, r) => {
            "use strict";
            r.d(t, {
                p: () => s
            });
            var n = r(31898),
                i = r.n(n);
            let s = ({
                serviceId: e,
                clientVersion: t
            }) => async r => {
                let n = "undefined" != typeof window && window ? .navigator ? .userAgent ? i().parse(window.navigator.userAgent) : void 0,
                    s = [
                        ["aws-sdk-js", t],
                        ["ua", "2.1"],
                        [`os/${n?.os?.name||"other"}`, n ? .os ? .version],
                        ["lang/js"],
                        ["md/browser", `${n?.browser?.name??"unknown"}_${n?.browser?.version??"unknown"}`]
                    ];
                e && s.push([`api/${e}`, t]);
                let a = await r ? .userAgentAppId ? .();
                return a && s.push([`app/${a}`]), s
            }
        },
        33694: (e, t, r) => {
            "use strict";
            r.d(t, {
                rD: () => b,
                Co: () => v
            });
            var n = r(29425),
                i = r(27652);
            let s = async e => {
                    let t = e ? .Bucket || "";
                    if ("string" == typeof e.Bucket && (e.Bucket = t.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), d(t)) {
                        if (!0 === e.ForcePathStyle) throw Error("Path-style addressing cannot be used with ARN buckets")
                    } else u(t) && (-1 === t.indexOf(".") || String(e.Endpoint).startsWith("http:")) && t.toLowerCase() === t && !(t.length < 3) || (e.ForcePathStyle = !0);
                    return e.DisableMultiRegionAccessPoints && (e.disableMultiRegionAccessPoints = !0, e.DisableMRAP = !0), e
                },
                a = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
                o = /(\d+\.){3}\d+/,
                c = /\.\./,
                u = e => a.test(e) && !o.test(e) && !c.test(e),
                d = e => {
                    let [t, r, n, , , i] = e.split(":"), s = "arn" === t && e.split(":").length >= 6, a = !!(s && r && n && i);
                    if (s && !a) throw Error(`Invalid ARN: ${e} was an invalid ARN.`);
                    return a
                },
                l = (e, t, r) => {
                    let n = async () => {
                        let n = r[e] ? ? r[t];
                        return "function" == typeof n ? n() : n
                    };
                    return "credentialScope" === e || "CredentialScope" === t ? async () => {
                        let e = "function" == typeof r.credentials ? await r.credentials() : r.credentials;
                        return e ? .credentialScope ? ? e ? .CredentialScope
                    } : "accountId" === e || "AccountId" === t ? async () => {
                        let e = "function" == typeof r.credentials ? await r.credentials() : r.credentials;
                        return e ? .accountId ? ? e ? .AccountId
                    } : "endpoint" === e || "endpoint" === t ? async () => {
                        let e = await n();
                        if (e && "object" == typeof e) {
                            if ("url" in e) return e.url.href;
                            if ("hostname" in e) {
                                let {
                                    protocol: t,
                                    hostname: r,
                                    port: n,
                                    path: i
                                } = e;
                                return `${t}//${r}${n?":"+n:""}${i}`
                            }
                        }
                        return e
                    } : n
                },
                p = async e => void 0;
            var f = r(94747);
            let h = e => "object" == typeof e ? "url" in e ? (0, f.D)(e.url) : e : (0, f.D)(e),
                m = async (e, t, r, n) => {
                    if (!r.endpoint) {
                        let e;
                        (e = r.serviceConfiguredEndpoint ? await r.serviceConfiguredEndpoint() : await p(r.serviceId)) && (r.endpoint = () => Promise.resolve(h(e)))
                    }
                    let i = await y(e, t, r);
                    if ("function" != typeof r.endpointProvider) throw Error("config.endpointProvider is not set.");
                    return r.endpointProvider(i, n)
                },
                y = async (e, t, r) => {
                    let n = {},
                        i = t ? .getEndpointParameterInstructions ? .() || {};
                    for (let [t, s] of Object.entries(i)) switch (s.type) {
                        case "staticContextParams":
                            n[t] = s.value;
                            break;
                        case "contextParams":
                            n[t] = e[s.name];
                            break;
                        case "clientContextParams":
                        case "builtInParams":
                            n[t] = await l(s.name, t, r)();
                            break;
                        case "operationContextParams":
                            n[t] = s.get(e);
                            break;
                        default:
                            throw Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(s))
                    }
                    return 0 === Object.keys(i).length && Object.assign(n, r), "s3" === String(r.serviceId).toLowerCase() && await s(n), n
                },
                g = ({
                    config: e,
                    instructions: t
                }) => (r, s) => async a => {
                    e.endpoint && (0, n.J7)(s, "ENDPOINT_OVERRIDE", "N");
                    let o = await m(a.input, {
                        getEndpointParameterInstructions: () => t
                    }, { ...e
                    }, s);
                    s.endpointV2 = o, s.authSchemes = o.properties ? .authSchemes;
                    let c = s.authSchemes ? .[0];
                    if (c) {
                        s.signing_region = c.signingRegion, s.signing_service = c.signingName;
                        let e = (0, i.u)(s),
                            t = e ? .selectedHttpAuthScheme ? .httpAuthOption;
                        t && (t.signingProperties = Object.assign(t.signingProperties || {}, {
                            signing_region: c.signingRegion,
                            signingRegion: c.signingRegion,
                            signing_service: c.signingName,
                            signingName: c.signingName,
                            signingRegionSet: c.signingRegionSet
                        }, c.properties))
                    }
                    return r({ ...a
                    })
                },
                w = {
                    step: "serialize",
                    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
                    name: "endpointV2Middleware",
                    override: !0,
                    relation: "before",
                    toMiddleware: r(9476).Ou.name
                },
                b = (e, t) => ({
                    applyToStack: r => {
                        r.addRelativeTo(g({
                            config: e,
                            instructions: t
                        }), w)
                    }
                }),
                v = e => {
                    let t, r = e.tls ? ? !0,
                        {
                            endpoint: n,
                            useDualstackEndpoint: s,
                            useFipsEndpoint: a
                        } = e,
                        o = Object.assign(e, {
                            endpoint: null != n ? async () => h(await (0, i.t)(n)()) : void 0,
                            tls: r,
                            isCustomEndpoint: !!n,
                            useDualstackEndpoint: (0, i.t)(s ? ? !1),
                            useFipsEndpoint: (0, i.t)(a ? ? !1)
                        });
                    return o.serviceConfiguredEndpoint = async () => (e.serviceId && !t && (t = p(e.serviceId)), t), o
                }
        },
        38495: (e, t, r) => {
            "use strict";
            r.d(t, {
                _E: () => c,
                eS: () => u,
                jN: () => d,
                x8: () => l
            });
            var n = r(70800),
                i = r(92544),
                s = r(56067),
                a = r(28046),
                o = r(14560);
            let c = async (e, t) => {
                    let r, n = em("Decrypt");
                    return r = JSON.stringify(eo(e, t)), eh(t, n, "/", void 0, r)
                },
                u = async (e, t) => {
                    let r, n = em("Encrypt");
                    return r = JSON.stringify(ec(e, t)), eh(t, n, "/", void 0, r)
                },
                d = async (e, t) => {
                    if (e.statusCode >= 300) return p(e, t);
                    let r = await (0, n.Y2)(e.body, t),
                        i = {};
                    return i = ed(r, t), {
                        $metadata: ep(e),
                        ...i
                    }
                },
                l = async (e, t) => {
                    if (e.statusCode >= 300) return p(e, t);
                    let r = await (0, n.Y2)(e.body, t),
                        i = {};
                    return i = el(r, t), {
                        $metadata: ep(e),
                        ...i
                    }
                },
                p = async (e, t) => {
                    let r = { ...e,
                            body: await (0, n.CG)(e.body, t)
                        },
                        i = (0, n.cJ)(e, r.body);
                    switch (i) {
                        case "DependencyTimeoutException":
                        case "com.amazonaws.kms#DependencyTimeoutException":
                            throw await P(r, t);
                        case "InvalidArnException":
                        case "com.amazonaws.kms#InvalidArnException":
                            throw await R(r, t);
                        case "KMSInternalException":
                        case "com.amazonaws.kms#KMSInternalException":
                            throw await z(r, t);
                        case "KMSInvalidStateException":
                        case "com.amazonaws.kms#KMSInvalidStateException":
                            throw await H(r, t);
                        case "NotFoundException":
                        case "com.amazonaws.kms#NotFoundException":
                            throw await q(r, t);
                        case "CloudHsmClusterInvalidConfigurationException":
                        case "com.amazonaws.kms#CloudHsmClusterInvalidConfigurationException":
                            throw await m(r, t);
                        case "CloudHsmClusterNotActiveException":
                        case "com.amazonaws.kms#CloudHsmClusterNotActiveException":
                            throw await y(r, t);
                        case "CustomKeyStoreInvalidStateException":
                        case "com.amazonaws.kms#CustomKeyStoreInvalidStateException":
                            throw await S(r, t);
                        case "CustomKeyStoreNotFoundException":
                        case "com.amazonaws.kms#CustomKeyStoreNotFoundException":
                            throw await E(r, t);
                        case "AlreadyExistsException":
                        case "com.amazonaws.kms#AlreadyExistsException":
                            throw await f(r, t);
                        case "InvalidAliasNameException":
                        case "com.amazonaws.kms#InvalidAliasNameException":
                            throw await I(r, t);
                        case "LimitExceededException":
                        case "com.amazonaws.kms#LimitExceededException":
                            throw await K(r, t);
                        case "CloudHsmClusterInUseException":
                        case "com.amazonaws.kms#CloudHsmClusterInUseException":
                            throw await h(r, t);
                        case "CloudHsmClusterNotFoundException":
                        case "com.amazonaws.kms#CloudHsmClusterNotFoundException":
                            throw await g(r, t);
                        case "CustomKeyStoreNameInUseException":
                        case "com.amazonaws.kms#CustomKeyStoreNameInUseException":
                            throw await x(r, t);
                        case "IncorrectTrustAnchorException":
                        case "com.amazonaws.kms#IncorrectTrustAnchorException":
                            throw await $(r, t);
                        case "XksProxyIncorrectAuthenticationCredentialException":
                        case "com.amazonaws.kms#XksProxyIncorrectAuthenticationCredentialException":
                            throw await Q(r, t);
                        case "XksProxyInvalidConfigurationException":
                        case "com.amazonaws.kms#XksProxyInvalidConfigurationException":
                            throw await Z(r, t);
                        case "XksProxyInvalidResponseException":
                        case "com.amazonaws.kms#XksProxyInvalidResponseException":
                            throw await ee(r, t);
                        case "XksProxyUriEndpointInUseException":
                        case "com.amazonaws.kms#XksProxyUriEndpointInUseException":
                            throw await et(r, t);
                        case "XksProxyUriInUseException":
                        case "com.amazonaws.kms#XksProxyUriInUseException":
                            throw await er(r, t);
                        case "XksProxyUriUnreachableException":
                        case "com.amazonaws.kms#XksProxyUriUnreachableException":
                            throw await en(r, t);
                        case "XksProxyVpcEndpointServiceInUseException":
                        case "com.amazonaws.kms#XksProxyVpcEndpointServiceInUseException":
                            throw await ei(r, t);
                        case "XksProxyVpcEndpointServiceInvalidConfigurationException":
                        case "com.amazonaws.kms#XksProxyVpcEndpointServiceInvalidConfigurationException":
                            throw await es(r, t);
                        case "XksProxyVpcEndpointServiceNotFoundException":
                        case "com.amazonaws.kms#XksProxyVpcEndpointServiceNotFoundException":
                            throw await ea(r, t);
                        case "DisabledException":
                        case "com.amazonaws.kms#DisabledException":
                            throw await A(r, t);
                        case "DryRunOperationException":
                        case "com.amazonaws.kms#DryRunOperationException":
                            throw await M(r, t);
                        case "InvalidGrantTokenException":
                        case "com.amazonaws.kms#InvalidGrantTokenException":
                            throw await N(r, t);
                        case "MalformedPolicyDocumentException":
                        case "com.amazonaws.kms#MalformedPolicyDocumentException":
                            throw await G(r, t);
                        case "TagException":
                        case "com.amazonaws.kms#TagException":
                            throw await V(r, t);
                        case "UnsupportedOperationException":
                        case "com.amazonaws.kms#UnsupportedOperationException":
                            throw await W(r, t);
                        case "XksKeyAlreadyInUseException":
                        case "com.amazonaws.kms#XksKeyAlreadyInUseException":
                            throw await X(r, t);
                        case "XksKeyInvalidConfigurationException":
                        case "com.amazonaws.kms#XksKeyInvalidConfigurationException":
                            throw await J(r, t);
                        case "XksKeyNotFoundException":
                        case "com.amazonaws.kms#XksKeyNotFoundException":
                            throw await Y(r, t);
                        case "IncorrectKeyException":
                        case "com.amazonaws.kms#IncorrectKeyException":
                            throw await k(r, t);
                        case "InvalidCiphertextException":
                        case "com.amazonaws.kms#InvalidCiphertextException":
                            throw await T(r, t);
                        case "InvalidKeyUsageException":
                        case "com.amazonaws.kms#InvalidKeyUsageException":
                            throw await D(r, t);
                        case "KeyUnavailableException":
                        case "com.amazonaws.kms#KeyUnavailableException":
                            throw await U(r, t);
                        case "CustomKeyStoreHasCMKsException":
                        case "com.amazonaws.kms#CustomKeyStoreHasCMKsException":
                            throw await v(r, t);
                        case "InvalidMarkerException":
                        case "com.amazonaws.kms#InvalidMarkerException":
                            throw await j(r, t);
                        case "ExpiredImportTokenException":
                        case "com.amazonaws.kms#ExpiredImportTokenException":
                            throw await O(r, t);
                        case "IncorrectKeyMaterialException":
                        case "com.amazonaws.kms#IncorrectKeyMaterialException":
                            throw await C(r, t);
                        case "InvalidImportTokenException":
                        case "com.amazonaws.kms#InvalidImportTokenException":
                            throw await F(r, t);
                        case "InvalidGrantIdException":
                        case "com.amazonaws.kms#InvalidGrantIdException":
                            throw await _(r, t);
                        case "ConflictException":
                        case "com.amazonaws.kms#ConflictException":
                            throw await b(r, t);
                        case "CloudHsmClusterNotRelatedException":
                        case "com.amazonaws.kms#CloudHsmClusterNotRelatedException":
                            throw await w(r, t);
                        case "KMSInvalidSignatureException":
                        case "com.amazonaws.kms#KMSInvalidSignatureException":
                            throw await B(r, t);
                        case "KMSInvalidMacException":
                        case "com.amazonaws.kms#KMSInvalidMacException":
                            throw await L(r, t);
                        default:
                            return ef({
                                output: e,
                                parsedBody: r.body,
                                errorCode: i
                            })
                    }
                },
                f = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.iK({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                h = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.T2({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                m = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.wl({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                y = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.wh({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                g = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.iu({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                w = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.Fo({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                b = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.cb({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                v = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.X1({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                S = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.Bx({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                x = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.MW({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                E = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.Qy({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                P = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.eo({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                A = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.S5({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                M = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.Hv({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                O = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.Bo({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                k = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.wj({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                C = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.ju({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                $ = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.oZ({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                I = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.C2({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                R = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.w$({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                T = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.x2({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                _ = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.IF({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                N = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.s7({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                F = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.r8({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                D = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.bg({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                j = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.Tk({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                U = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.dt({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                z = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.Yz({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                L = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.H5({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                B = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.eJ({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                H = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.$U({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                K = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.UC({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                G = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o._Z({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                q = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.X6({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                V = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.oP({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                W = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.e$({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                X = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.B$({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                J = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.AD({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                Y = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.ot({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                Q = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.ye({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                Z = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.Jm({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                ee = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.m9({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                et = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.BK({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                er = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.ML({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                en = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.ET({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                ei = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.rn({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                es = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.su({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                ea = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new o.G1({
                            $metadata: ep(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                eo = (e, t) => (0, s.s)(e, {
                    CiphertextBlob: t.base64Encoder,
                    DryRun: [],
                    EncryptionAlgorithm: [],
                    EncryptionContext: s.Ss,
                    GrantTokens: s.Ss,
                    KeyId: [],
                    Recipient: e => eu(e, t)
                }),
                ec = (e, t) => (0, s.s)(e, {
                    DryRun: [],
                    EncryptionAlgorithm: [],
                    EncryptionContext: s.Ss,
                    GrantTokens: s.Ss,
                    KeyId: [],
                    Plaintext: t.base64Encoder
                }),
                eu = (e, t) => (0, s.s)(e, {
                    AttestationDocument: t.base64Encoder,
                    KeyEncryptionAlgorithm: []
                }),
                ed = (e, t) => (0, s.s)(e, {
                    CiphertextForRecipient: t.base64Decoder,
                    EncryptionAlgorithm: s.lK,
                    KeyId: s.lK,
                    Plaintext: t.base64Decoder
                }),
                el = (e, t) => (0, s.s)(e, {
                    CiphertextBlob: t.base64Decoder,
                    EncryptionAlgorithm: s.lK,
                    KeyId: s.lK
                }),
                ep = e => ({
                    httpStatusCode: e.statusCode,
                    requestId: e.headers["x-amzn-requestid"] ? ? e.headers["x-amzn-request-id"] ? ? e.headers["x-amz-request-id"],
                    extendedRequestId: e.headers["x-amz-id-2"],
                    cfId: e.headers["x-amz-cf-id"]
                }),
                ef = (0, s.jr)(a.G),
                eh = async (e, t, r, n, s) => {
                    let {
                        hostname: a,
                        protocol: o = "https",
                        port: c,
                        path: u
                    } = await e.endpoint(), d = {
                        protocol: o,
                        hostname: a,
                        port: c,
                        method: "POST",
                        path: u.endsWith("/") ? u.slice(0, -1) + r : u + r,
                        headers: t
                    };
                    return void 0 !== n && (d.hostname = n), void 0 !== s && (d.body = s), new i.Kd(d)
                };

            function em(e) {
                return {
                    "content-type": "application/x-amz-json-1.1",
                    "x-amz-target": `TrentService.${e}`
                }
            }
        },
        44527: (e, t, r) => {
            "use strict";
            r.d(t, {
                E: () => s,
                n: () => o
            });
            let n = {},
                i = Array(64);
            for (let e = 0; e + 65 <= 90; e++) {
                let t = String.fromCharCode(e + 65);
                n[t] = e, i[e] = t
            }
            for (let e = 0; e + 97 <= 122; e++) {
                let t = String.fromCharCode(e + 97),
                    r = e + 26;
                n[t] = r, i[r] = t
            }
            for (let e = 0; e < 10; e++) {
                n[e.toString(10)] = e + 52;
                let t = e.toString(10),
                    r = e + 52;
                n[t] = r, i[r] = t
            }
            n["+"] = 62, i[62] = "+", n["/"] = 63, i[63] = "/";
            let s = e => {
                let t = e.length / 4 * 3;
                "==" === e.slice(-2) ? t -= 2 : "=" === e.slice(-1) && t--;
                let r = new ArrayBuffer(t),
                    i = new DataView(r);
                for (let t = 0; t < e.length; t += 4) {
                    let r = 0,
                        s = 0;
                    for (let i = t, a = t + 3; i <= a; i++)
                        if ("=" !== e[i]) {
                            if (!(e[i] in n)) throw TypeError(`Invalid character ${e[i]} in base64 string.`);
                            r |= n[e[i]] << (a - i) * 6, s += 6
                        } else r >>= 6;
                    let a = t / 4 * 3;
                    r >>= s % 8;
                    let o = Math.floor(s / 8);
                    for (let e = 0; e < o; e++) {
                        let t = (o - e - 1) * 8;
                        i.setUint8(a + e, (r & 255 << t) >> t)
                    }
                }
                return new Uint8Array(r)
            };
            var a = r(14424);

            function o(e) {
                let t, r = "object" == typeof(t = "string" == typeof e ? (0, a.a)(e) : e) && "number" == typeof t.length,
                    n = "object" == typeof t && "number" == typeof t.byteOffset && "number" == typeof t.byteLength;
                if (!r && !n) throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
                let s = "";
                for (let e = 0; e < t.length; e += 3) {
                    let r = 0,
                        n = 0;
                    for (let i = e, s = Math.min(e + 3, t.length); i < s; i++) r |= t[i] << (s - i - 1) * 8, n += 8;
                    let a = Math.ceil(n / 6);
                    r <<= 6 * a - n;
                    for (let e = 1; e <= a; e++) {
                        let t = (a - e) * 6;
                        s += i[(r & 63 << t) >> t]
                    }
                    s += "==".slice(0, 4 - a)
                }
                return s
            }
        },
        45075: (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => s,
                n: () => a
            });
            let n = {},
                i = {};
            for (let e = 0; e < 256; e++) {
                let t = e.toString(16).toLowerCase();
                1 === t.length && (t = `0${t}`), n[e] = t, i[t] = e
            }

            function s(e) {
                if (e.length % 2 != 0) throw Error("Hex encoded strings must have an even number length");
                let t = new Uint8Array(e.length / 2);
                for (let r = 0; r < e.length; r += 2) {
                    let n = e.slice(r, r + 2).toLowerCase();
                    if (n in i) t[r / 2] = i[n];
                    else throw Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`)
                }
                return t
            }

            function a(e) {
                let t = "";
                for (let r = 0; r < e.byteLength; r++) t += n[e[r]];
                return t
            }
        },
        54073: (e, t, r) => {
            "use strict";
            r.d(t, {
                UF: () => o,
                vL: () => a
            });
            var n = r(83848);
            let i = (e, t = !1) => {
                    if (t) {
                        for (let t of e.split("."))
                            if (!i(t)) return !1;
                        return !0
                    }
                    return !(!(0, n.X8)(e) || e.length < 3 || e.length > 63 || e !== e.toLowerCase() || (0, n.oX)(e))
                },
                s = JSON.parse('{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-east-1","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af|il|mx)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"ap-southeast-5":{"description":"Asia Pacific (Malaysia)"},"ap-southeast-7":{"description":"Asia Pacific (Thailand)"},"aws-global":{"description":"AWS Standard global region"},"ca-central-1":{"description":"Canada (Central)"},"ca-west-1":{"description":"Canada West (Calgary)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"il-central-1":{"description":"Israel (Tel Aviv)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"mx-central-1":{"description":"Mexico (Central)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","implicitGlobalRegion":"cn-northwest-1","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"AWS China global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-gov-west-1","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"AWS GovCloud (US) global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"c2s.ic.gov","implicitGlobalRegion":"us-iso-east-1","name":"aws-iso","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"AWS ISO (US) global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"sc2s.sgov.gov","implicitGlobalRegion":"us-isob-east-1","name":"aws-iso-b","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"AWS ISOB (US) global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"}}},{"id":"aws-iso-e","outputs":{"dnsSuffix":"cloud.adc-e.uk","dualStackDnsSuffix":"cloud.adc-e.uk","implicitGlobalRegion":"eu-isoe-west-1","name":"aws-iso-e","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^eu\\\\-isoe\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-e-global":{"description":"AWS ISOE (Europe) global region"},"eu-isoe-west-1":{"description":"EU ISOE West"}}},{"id":"aws-iso-f","outputs":{"dnsSuffix":"csp.hci.ic.gov","dualStackDnsSuffix":"csp.hci.ic.gov","implicitGlobalRegion":"us-isof-south-1","name":"aws-iso-f","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isof\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-f-global":{"description":"AWS ISOF global region"},"us-isof-east-1":{"description":"US ISOF EAST"},"us-isof-south-1":{"description":"US ISOF SOUTH"}}},{"id":"aws-eusc","outputs":{"dnsSuffix":"amazonaws.eu","dualStackDnsSuffix":"amazonaws.eu","implicitGlobalRegion":"eusc-de-east-1","name":"aws-eusc","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^eusc\\\\-(de)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"eusc-de-east-1":{"description":"EU (Germany)"}}}],"version":"1.1"}'),
                a = () => "",
                o = {
                    isVirtualHostableS3Bucket: i,
                    parseArn: e => {
                        let t = e.split(":");
                        if (t.length < 6) return null;
                        let [r, n, i, s, a, ...o] = t;
                        return "arn" !== r || "" === n || "" === i || "" === o.join(":") ? null : {
                            partition: n,
                            service: i,
                            region: s,
                            accountId: a,
                            resourceId: o.map(e => e.split("/")).flat()
                        }
                    },
                    partition: e => {
                        let {
                            partitions: t
                        } = s;
                        for (let r of t) {
                            let {
                                regions: t,
                                outputs: n
                            } = r;
                            for (let [r, i] of Object.entries(t))
                                if (r === e) return { ...n,
                                    ...i
                                }
                        }
                        for (let r of t) {
                            let {
                                regionRegex: t,
                                outputs: n
                            } = r;
                            if (new RegExp(t).test(e)) return { ...n
                            }
                        }
                        let r = t.find(e => "aws" === e.id);
                        if (!r) throw Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
                        return { ...r.outputs
                        }
                    }
                };
            n.mw.aws = o
        },
        54960: (e, t, r) => {
            "use strict";
            r.d(t, {
                D: () => ef
            });
            var n = r(55590),
                i = r(18840),
                s = r(5546),
                a = r(65790),
                o = r(69604),
                c = r(29425),
                u = r(89510),
                d = r(33694),
                l = r(63789),
                p = r(56067),
                f = r(85090),
                h = r(27652);
            let m = async (e, t, r) => ({
                    operation: (0, h.u)(t).operation,
                    region: await (0, h.t)(e.region)() || (() => {
                        throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                    })()
                }),
                y = e => {
                    let t = [];
                    switch (e.operation) {
                        case "GetCredentialsForIdentity":
                        case "GetId":
                        case "GetOpenIdToken":
                        case "UnlinkIdentity":
                            t.push({
                                schemeId: "smithy.api#noAuth"
                            });
                            break;
                        default:
                            t.push({
                                schemeId: "aws.auth#sigv4",
                                signingProperties: {
                                    name: "cognito-identity",
                                    region: e.region
                                },
                                propertiesExtractor: (e, t) => ({
                                    signingProperties: {
                                        config: e,
                                        context: t
                                    }
                                })
                            })
                    }
                    return t
                },
                g = e => Object.assign((0, f.h)(e), {
                    authSchemePreference: (0, h.t)(e.authSchemePreference ? ? [])
                });
            var w = r(88891);
            let b = {
                rE: "3.817.0"
            };
            var v = r(4783),
                S = r(33072),
                x = r(19879),
                E = r(17158),
                P = r(21101),
                A = r(31072),
                M = r(17564),
                O = r(94747),
                k = r(44527),
                C = r(14424),
                $ = r(87453),
                I = r(54073),
                R = r(83848);
            let T = "required",
                _ = "argv",
                N = "isSet",
                F = "booleanEquals",
                D = "error",
                j = "endpoint",
                U = "tree",
                z = "PartitionResult",
                L = "getAttr",
                B = "stringEquals",
                H = {
                    [T]: !1,
                    type: "String"
                },
                K = {
                    [T]: !0,
                    default: !1,
                    type: "Boolean"
                },
                G = {
                    ref: "Endpoint"
                },
                q = {
                    fn: F,
                    [_]: [{
                        ref: "UseFIPS"
                    }, !0]
                },
                V = {
                    fn: F,
                    [_]: [{
                        ref: "UseDualStack"
                    }, !0]
                },
                W = {},
                X = {
                    ref: "Region"
                },
                J = {
                    fn: L,
                    [_]: [{
                        ref: z
                    }, "supportsFIPS"]
                },
                Y = {
                    ref: z
                },
                Q = {
                    fn: F,
                    [_]: [!0, {
                        fn: L,
                        [_]: [Y, "supportsDualStack"]
                    }]
                },
                Z = [q],
                ee = [V],
                et = [X],
                er = {
                    version: "1.0",
                    parameters: {
                        Region: H,
                        UseDualStack: K,
                        UseFIPS: K,
                        Endpoint: H
                    },
                    rules: [{
                        conditions: [{
                            fn: N,
                            [_]: [G]
                        }],
                        rules: [{
                            conditions: Z,
                            error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                            type: D
                        }, {
                            conditions: ee,
                            error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                            type: D
                        }, {
                            endpoint: {
                                url: G,
                                properties: W,
                                headers: W
                            },
                            type: j
                        }],
                        type: U
                    }, {
                        conditions: [{
                            fn: N,
                            [_]: et
                        }],
                        rules: [{
                            conditions: [{
                                fn: "aws.partition",
                                [_]: et,
                                assign: z
                            }],
                            rules: [{
                                conditions: [q, V],
                                rules: [{
                                    conditions: [{
                                        fn: F,
                                        [_]: [!0, J]
                                    }, Q],
                                    rules: [{
                                        conditions: [{
                                            fn: B,
                                            [_]: [X, "us-east-1"]
                                        }],
                                        endpoint: {
                                            url: "https://cognito-identity-fips.us-east-1.amazonaws.com",
                                            properties: W,
                                            headers: W
                                        },
                                        type: j
                                    }, {
                                        conditions: [{
                                            fn: B,
                                            [_]: [X, "us-east-2"]
                                        }],
                                        endpoint: {
                                            url: "https://cognito-identity-fips.us-east-2.amazonaws.com",
                                            properties: W,
                                            headers: W
                                        },
                                        type: j
                                    }, {
                                        conditions: [{
                                            fn: B,
                                            [_]: [X, "us-west-1"]
                                        }],
                                        endpoint: {
                                            url: "https://cognito-identity-fips.us-west-1.amazonaws.com",
                                            properties: W,
                                            headers: W
                                        },
                                        type: j
                                    }, {
                                        conditions: [{
                                            fn: B,
                                            [_]: [X, "us-west-2"]
                                        }],
                                        endpoint: {
                                            url: "https://cognito-identity-fips.us-west-2.amazonaws.com",
                                            properties: W,
                                            headers: W
                                        },
                                        type: j
                                    }, {
                                        endpoint: {
                                            url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                            properties: W,
                                            headers: W
                                        },
                                        type: j
                                    }],
                                    type: U
                                }, {
                                    error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                                    type: D
                                }],
                                type: U
                            }, {
                                conditions: Z,
                                rules: [{
                                    conditions: [{
                                        fn: F,
                                        [_]: [J, !0]
                                    }],
                                    rules: [{
                                        endpoint: {
                                            url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",
                                            properties: W,
                                            headers: W
                                        },
                                        type: j
                                    }],
                                    type: U
                                }, {
                                    error: "FIPS is enabled but this partition does not support FIPS",
                                    type: D
                                }],
                                type: U
                            }, {
                                conditions: ee,
                                rules: [{
                                    conditions: [Q],
                                    rules: [{
                                        conditions: [{
                                            fn: B,
                                            [_]: ["aws", {
                                                fn: L,
                                                [_]: [Y, "name"]
                                            }]
                                        }],
                                        endpoint: {
                                            url: "https://cognito-identity.{Region}.amazonaws.com",
                                            properties: W,
                                            headers: W
                                        },
                                        type: j
                                    }, {
                                        endpoint: {
                                            url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                            properties: W,
                                            headers: W
                                        },
                                        type: j
                                    }],
                                    type: U
                                }, {
                                    error: "DualStack is enabled but this partition does not support DualStack",
                                    type: D
                                }],
                                type: U
                            }, {
                                endpoint: {
                                    url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: W,
                                    headers: W
                                },
                                type: j
                            }],
                            type: U
                        }],
                        type: U
                    }, {
                        error: "Invalid Configuration: Missing Region",
                        type: D
                    }]
                },
                en = new R.kS({
                    size: 50,
                    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
                }),
                ei = (e, t = {}) => en.get(e, () => (0, R.sO)(er, {
                    endpointParams: e,
                    logger: t.logger
                }));
            R.mw.aws = I.UF;
            let es = e => ({
                apiVersion: "2014-06-30",
                base64Decoder: e ? .base64Decoder ? ? k.E,
                base64Encoder: e ? .base64Encoder ? ? k.n,
                disableHostPrefix: e ? .disableHostPrefix ? ? !1,
                endpointProvider: e ? .endpointProvider ? ? ei,
                extensions: e ? .extensions ? ? [],
                httpAuthSchemeProvider: e ? .httpAuthSchemeProvider ? ? y,
                httpAuthSchemes: e ? .httpAuthSchemes ? ? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: e => e.getIdentityProvider("aws.auth#sigv4"),
                    signer: new M.f2
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: e => e.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new c.mR
                }],
                logger: e ? .logger ? ? new p.N4,
                serviceId: e ? .serviceId ? ? "Cognito Identity",
                urlParser: e ? .urlParser ? ? O.D,
                utf8Decoder: e ? .utf8Decoder ? ? C.a,
                utf8Encoder: e ? .utf8Encoder ? ? $.P
            });
            var ea = r(27329);
            let eo = e => {
                let t = (0, ea.I)(e),
                    r = () => t().then(p.lT),
                    n = es(e);
                return { ...n,
                    ...e,
                    runtime: "browser",
                    defaultsMode: t,
                    bodyLengthChecker: e ? .bodyLengthChecker ? ? P.n,
                    credentialDefaultProvider: e ? .credentialDefaultProvider ? ? (e => () => Promise.reject(Error("Credential is missing"))),
                    defaultUserAgentProvider: e ? .defaultUserAgentProvider ? ? (0, S.p)({
                        serviceId: n.serviceId,
                        clientVersion: b.rE
                    }),
                    maxAttempts: e ? .maxAttempts ? ? A.Gz,
                    region: e ? .region ? ? (0, E.B)("Region is missing"),
                    requestHandler: x.NC.create(e ? .requestHandler ? ? r),
                    retryMode: e ? .retryMode ? ? (async () => (await r()).retryMode || A.L0),
                    sha256: e ? .sha256 ? ? v.I,
                    streamCollector: e ? .streamCollector ? ? x.kv,
                    useDualstackEndpoint: e ? .useDualstackEndpoint ? ? (() => Promise.resolve(o.VW)),
                    useFipsEndpoint: e ? .useFipsEndpoint ? ? (() => Promise.resolve(o.Hj))
                }
            };
            var ec = r(65002),
                eu = r(92544);
            let ed = e => {
                    let t = e.httpAuthSchemes,
                        r = e.httpAuthSchemeProvider,
                        n = e.credentials;
                    return {
                        setHttpAuthScheme(e) {
                            let r = t.findIndex(t => t.schemeId === e.schemeId); - 1 === r ? t.push(e) : t.splice(r, 1, e)
                        },
                        httpAuthSchemes: () => t,
                        setHttpAuthSchemeProvider(e) {
                            r = e
                        },
                        httpAuthSchemeProvider: () => r,
                        setCredentials(e) {
                            n = e
                        },
                        credentials: () => n
                    }
                },
                el = e => ({
                    httpAuthSchemes: e.httpAuthSchemes(),
                    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
                    credentials: e.credentials()
                }),
                ep = (e, t) => {
                    let r = Object.assign((0, ec.Rq)(e), (0, p.xA)(e), (0, eu.eS)(e), ed(e));
                    return t.forEach(e => e.configure(r)), Object.assign(e, (0, ec.$3)(r), (0, p.uv)(r), (0, eu.jt)(r), el(r))
                };
            class ef extends p.Kj {
                config;
                constructor(...[e]) {
                    let t = eo(e || {});
                    super(t), this.initConfig = t;
                    let r = (0, w.v)(t),
                        p = (0, a.Dc)(r),
                        f = (0, l.$z)(p),
                        h = (0, o.TD)(f),
                        y = (0, n.OV)(h),
                        b = ep(g((0, d.Co)(y)), e ? .extensions || []);
                    this.config = b, this.middlewareStack.use((0, a.sM)(this.config)), this.middlewareStack.use((0, l.ey)(this.config)), this.middlewareStack.use((0, u.vK)(this.config)), this.middlewareStack.use((0, n.TC)(this.config)), this.middlewareStack.use((0, i.Y7)(this.config)), this.middlewareStack.use((0, s.n4)(this.config)), this.middlewareStack.use((0, c.wB)(this.config, {
                        httpAuthSchemeParametersProvider: m,
                        identityProviderConfigProvider: async e => new c.h$({
                            "aws.auth#sigv4": e.credentials
                        })
                    })), this.middlewareStack.use((0, c.lW)(this.config))
                }
                destroy() {
                    super.destroy()
                }
            }
        },
        55590: (e, t, r) => {
            "use strict";
            r.d(t, {
                OV: () => i,
                TC: () => o
            });
            var n = r(92544);

            function i(e) {
                return e
            }
            let s = e => t => async r => {
                    if (!n.Kd.isInstance(r.request)) return t(r);
                    let {
                        request: i
                    } = r, {
                        handlerProtocol: s = ""
                    } = e.requestHandler.metadata || {};
                    if (s.indexOf("h2") >= 0 && !i.headers[":authority"]) delete i.headers.host, i.headers[":authority"] = i.hostname + (i.port ? ":" + i.port : "");
                    else if (!i.headers.host) {
                        let e = i.hostname;
                        null != i.port && (e += `:${i.port}`), i.headers.host = e
                    }
                    return t(r)
                },
                a = {
                    name: "hostHeaderMiddleware",
                    step: "build",
                    priority: "low",
                    tags: ["HOST"],
                    override: !0
                },
                o = e => ({
                    applyToStack: t => {
                        t.add(s(e), a)
                    }
                })
        },
        56067: (e, t, r) => {
            "use strict";
            r.d(t, {
                Kj: () => c,
                uB: () => l,
                N4: () => M,
                $H: () => f,
                TJ: () => h,
                Ss: () => I,
                Px: () => u.Px,
                Mw: () => m,
                Y0: () => R.Y0,
                r$: () => R.r$,
                lK: () => R.lK,
                xA: () => P,
                lT: () => b,
                l3: () => R.l3,
                uv: () => A,
                s: () => O,
                jr: () => g
            });
            let n = (e, t) => {
                    let r = [];
                    if (e && r.push(e), t)
                        for (let e of t) r.push(e);
                    return r
                },
                i = (e, t) => `${e||"anonymous"}${t&&t.length>0?` (a.k.a. ${t.join(",")})`:""}`,
                s = () => {
                    let e = [],
                        t = [],
                        r = !1,
                        c = new Set,
                        u = e => e.sort((e, t) => a[t.step] - a[e.step] || o[t.priority || "normal"] - o[e.priority || "normal"]),
                        d = r => {
                            let i = !1,
                                s = e => {
                                    let t = n(e.name, e.aliases);
                                    if (t.includes(r)) {
                                        for (let e of (i = !0, t)) c.delete(e);
                                        return !1
                                    }
                                    return !0
                                };
                            return e = e.filter(s), t = t.filter(s), i
                        },
                        l = r => {
                            let i = !1,
                                s = e => {
                                    if (e.middleware === r) {
                                        for (let t of (i = !0, n(e.name, e.aliases))) c.delete(t);
                                        return !1
                                    }
                                    return !0
                                };
                            return e = e.filter(s), t = t.filter(s), i
                        },
                        p = r => (e.forEach(e => {
                            r.add(e.middleware, { ...e
                            })
                        }), t.forEach(e => {
                            r.addRelativeTo(e.middleware, { ...e
                            })
                        }), r.identifyOnResolve ? .(m.identifyOnResolve()), r),
                        f = e => {
                            let t = [];
                            return e.before.forEach(e => {
                                0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...f(e))
                            }), t.push(e), e.after.reverse().forEach(e => {
                                0 === e.before.length && 0 === e.after.length ? t.push(e) : t.push(...f(e))
                            }), t
                        },
                        h = (r = !1) => {
                            let s = [],
                                a = [],
                                o = {};
                            return e.forEach(e => {
                                let t = { ...e,
                                    before: [],
                                    after: []
                                };
                                for (let e of n(t.name, t.aliases)) o[e] = t;
                                s.push(t)
                            }), t.forEach(e => {
                                let t = { ...e,
                                    before: [],
                                    after: []
                                };
                                for (let e of n(t.name, t.aliases)) o[e] = t;
                                a.push(t)
                            }), a.forEach(e => {
                                if (e.toMiddleware) {
                                    let t = o[e.toMiddleware];
                                    if (void 0 === t) {
                                        if (r) return;
                                        throw Error(`${e.toMiddleware} is not found when adding ${i(e.name,e.aliases)} middleware ${e.relation} ${e.toMiddleware}`)
                                    }
                                    "after" === e.relation && t.after.push(e), "before" === e.relation && t.before.push(e)
                                }
                            }), u(s).map(f).reduce((e, t) => (e.push(...t), e), [])
                        },
                        m = {
                            add: (t, r = {}) => {
                                let {
                                    name: s,
                                    override: a,
                                    aliases: o
                                } = r, u = {
                                    step: "initialize",
                                    priority: "normal",
                                    middleware: t,
                                    ...r
                                }, d = n(s, o);
                                if (d.length > 0) {
                                    if (d.some(e => c.has(e))) {
                                        if (!a) throw Error(`Duplicate middleware name '${i(s,o)}'`);
                                        for (let t of d) {
                                            let r = e.findIndex(e => e.name === t || e.aliases ? .some(e => e === t));
                                            if (-1 === r) continue;
                                            let n = e[r];
                                            if (n.step !== u.step || u.priority !== n.priority) throw Error(`"${i(n.name,n.aliases)}" middleware with ${n.priority} priority in ${n.step} step cannot be overridden by "${i(s,o)}" middleware with ${u.priority} priority in ${u.step} step.`);
                                            e.splice(r, 1)
                                        }
                                    }
                                    for (let e of d) c.add(e)
                                }
                                e.push(u)
                            },
                            addRelativeTo: (e, r) => {
                                let {
                                    name: s,
                                    override: a,
                                    aliases: o
                                } = r, u = {
                                    middleware: e,
                                    ...r
                                }, d = n(s, o);
                                if (d.length > 0) {
                                    if (d.some(e => c.has(e))) {
                                        if (!a) throw Error(`Duplicate middleware name '${i(s,o)}'`);
                                        for (let e of d) {
                                            let r = t.findIndex(t => t.name === e || t.aliases ? .some(t => t === e));
                                            if (-1 === r) continue;
                                            let n = t[r];
                                            if (n.toMiddleware !== u.toMiddleware || n.relation !== u.relation) throw Error(`"${i(n.name,n.aliases)}" middleware ${n.relation} "${n.toMiddleware}" middleware cannot be overridden by "${i(s,o)}" middleware ${u.relation} "${u.toMiddleware}" middleware.`);
                                            t.splice(r, 1)
                                        }
                                    }
                                    for (let e of d) c.add(e)
                                }
                                t.push(u)
                            },
                            clone: () => p(s()),
                            use: e => {
                                e.applyToStack(m)
                            },
                            remove: e => "string" == typeof e ? d(e) : l(e),
                            removeByTag: r => {
                                let i = !1,
                                    s = e => {
                                        let {
                                            tags: t,
                                            name: s,
                                            aliases: a
                                        } = e;
                                        if (t && t.includes(r)) {
                                            for (let e of n(s, a)) c.delete(e);
                                            return i = !0, !1
                                        }
                                        return !0
                                    };
                                return e = e.filter(s), t = t.filter(s), i
                            },
                            concat: e => {
                                let t = p(s());
                                return t.use(e), t.identifyOnResolve(r || t.identifyOnResolve() || (e.identifyOnResolve ? .() ? ? !1)), t
                            },
                            applyToStack: p,
                            identify: () => h(!0).map(e => {
                                let t = e.step ? ? e.relation + " " + e.toMiddleware;
                                return i(e.name, e.aliases) + " - " + t
                            }),
                            identifyOnResolve: e => ("boolean" == typeof e && (r = e), r),
                            resolve: (e, t) => {
                                for (let r of h().map(e => e.middleware).reverse()) e = r(e, t);
                                return r && console.log(m.identify()), e
                            }
                        };
                    return m
                },
                a = {
                    initialize: 5,
                    serialize: 4,
                    build: 3,
                    finalizeRequest: 2,
                    deserialize: 1
                },
                o = {
                    high: 3,
                    normal: 2,
                    low: 1
                };
            class c {
                constructor(e) {
                    this.config = e, this.middlewareStack = s()
                }
                send(e, t, r) {
                    let n, i = "function" != typeof t ? t : void 0,
                        s = "function" == typeof t ? t : r;
                    if (void 0 === i && !0 === this.config.cacheMiddleware) {
                        this.handlers || (this.handlers = new WeakMap);
                        let t = this.handlers;
                        t.has(e.constructor) ? n = t.get(e.constructor) : (n = e.resolveMiddleware(this.middlewareStack, this.config, i), t.set(e.constructor, n))
                    } else delete this.handlers, n = e.resolveMiddleware(this.middlewareStack, this.config, i);
                    if (!s) return n(e).then(e => e.output);
                    n(e).then(e => s(null, e.output), e => s(e)).catch(() => {})
                }
                destroy() {
                    this.config ? .requestHandler ? .destroy ? .(), delete this.handlers
                }
            }
            var u = r(91870),
                d = r(66879);
            class l {
                constructor() {
                    this.middlewareStack = s()
                }
                static classBuilder() {
                    return new p
                }
                resolveMiddlewareWithContext(e, t, r, {
                    middlewareFn: n,
                    clientName: i,
                    commandName: s,
                    inputFilterSensitiveLog: a,
                    outputFilterSensitiveLog: o,
                    smithyContext: c,
                    additionalContext: u,
                    CommandCtor: l
                }) {
                    for (let i of n.bind(this)(l, e, t, r)) this.middlewareStack.use(i);
                    let p = e.concat(this.middlewareStack),
                        {
                            logger: f
                        } = t,
                        h = {
                            logger: f,
                            clientName: i,
                            commandName: s,
                            inputFilterSensitiveLog: a,
                            outputFilterSensitiveLog: o,
                            [d.Vf]: {
                                commandInstance: this,
                                ...c
                            },
                            ...u
                        },
                        {
                            requestHandler: m
                        } = t;
                    return p.resolve(e => m.handle(e.request, r || {}), h)
                }
            }
            class p {
                constructor() {
                    this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = e => e, this._outputFilterSensitiveLog = e => e, this._serializer = null, this._deserializer = null
                }
                init(e) {
                    this._init = e
                }
                ep(e) {
                    return this._ep = e, this
                }
                m(e) {
                    return this._middlewareFn = e, this
                }
                s(e, t, r = {}) {
                    return this._smithyContext = {
                        service: e,
                        operation: t,
                        ...r
                    }, this
                }
                c(e = {}) {
                    return this._additionalContext = e, this
                }
                n(e, t) {
                    return this._clientName = e, this._commandName = t, this
                }
                f(e = e => e, t = e => e) {
                    return this._inputFilterSensitiveLog = e, this._outputFilterSensitiveLog = t, this
                }
                ser(e) {
                    return this._serializer = e, this
                }
                de(e) {
                    return this._deserializer = e, this
                }
                sc(e) {
                    return this._operationSchema = e, this._smithyContext.operationSchema = e, this
                }
                build() {
                    let e, t = this;
                    return e = class extends l {
                        static getEndpointParameterInstructions() {
                            return t._ep
                        }
                        constructor(...[e]) {
                            super(), this.serialize = t._serializer, this.deserialize = t._deserializer, this.input = e ? ? {}, t._init(this), this.schema = t._operationSchema
                        }
                        resolveMiddleware(r, n, i) {
                            return this.resolveMiddlewareWithContext(r, n, i, {
                                CommandCtor: e,
                                middlewareFn: t._middlewareFn,
                                clientName: t._clientName,
                                commandName: t._commandName,
                                inputFilterSensitiveLog: t._inputFilterSensitiveLog,
                                outputFilterSensitiveLog: t._outputFilterSensitiveLog,
                                smithyContext: t._smithyContext,
                                additionalContext: t._additionalContext
                            })
                        }
                    }
                }
            }
            let f = "***SensitiveInformation***";
            class h extends Error {
                constructor(e) {
                    super(e.message), Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = e.name, this.$fault = e.$fault, this.$metadata = e.$metadata
                }
                static isInstance(e) {
                    return !!e && (h.prototype.isPrototypeOf(e) || !!e.$fault && !!e.$metadata && ("client" === e.$fault || "server" === e.$fault))
                }
                static[Symbol.hasInstance](e) {
                    return !!e && (this === h ? h.isInstance(e) : !!h.isInstance(e) && (e.name && this.name ? this.prototype.isPrototypeOf(e) || e.name === this.name : this.prototype.isPrototypeOf(e)))
                }
            }
            let m = (e, t = {}) => {
                    Object.entries(t).filter(([, e]) => void 0 !== e).forEach(([t, r]) => {
                        (void 0 == e[t] || "" === e[t]) && (e[t] = r)
                    });
                    let r = e.message || e.Message || "UnknownError";
                    return e.message = r, delete e.Message, e
                },
                y = ({
                    output: e,
                    parsedBody: t,
                    exceptionCtor: r,
                    errorCode: n
                }) => {
                    let i = w(e),
                        s = i.httpStatusCode ? i.httpStatusCode + "" : void 0;
                    throw m(new r({
                        name: t ? .code || t ? .Code || n || s || "UnknownError",
                        $fault: "client",
                        $metadata: i
                    }), t)
                },
                g = e => ({
                    output: t,
                    parsedBody: r,
                    errorCode: n
                }) => {
                    y({
                        output: t,
                        parsedBody: r,
                        exceptionCtor: e,
                        errorCode: n
                    })
                },
                w = e => ({
                    httpStatusCode: e.statusCode,
                    requestId: e.headers["x-amzn-requestid"] ? ? e.headers["x-amzn-request-id"] ? ? e.headers["x-amz-request-id"],
                    extendedRequestId: e.headers["x-amz-id-2"],
                    cfId: e.headers["x-amz-cf-id"]
                }),
                b = e => {
                    switch (e) {
                        case "standard":
                        case "cross-region":
                            return {
                                retryMode: "standard",
                                connectionTimeout: 3100
                            };
                        case "in-region":
                            return {
                                retryMode: "standard",
                                connectionTimeout: 1100
                            };
                        case "mobile":
                            return {
                                retryMode: "standard",
                                connectionTimeout: 3e4
                            };
                        default:
                            return {}
                    }
                },
                v = e => {
                    let t = [];
                    for (let r in d.dB) {
                        let n = d.dB[r];
                        void 0 !== e[n] && t.push({
                            algorithmId: () => n,
                            checksumConstructor: () => e[n]
                        })
                    }
                    return {
                        addChecksumAlgorithm(e) {
                            t.push(e)
                        },
                        checksumAlgorithms: () => t
                    }
                },
                S = e => {
                    let t = {};
                    return e.checksumAlgorithms().forEach(e => {
                        t[e.algorithmId()] = e.checksumConstructor()
                    }), t
                },
                x = e => ({
                    setRetryStrategy(t) {
                        e.retryStrategy = t
                    },
                    retryStrategy: () => e.retryStrategy
                }),
                E = e => {
                    let t = {};
                    return t.retryStrategy = e.retryStrategy(), t
                },
                P = e => Object.assign(v(e), x(e)),
                A = e => Object.assign(S(e), E(e));
            class M {
                trace() {}
                debug() {}
                info() {}
                warn() {}
                error() {}
            }
            let O = (e, t) => {
                    let r = {};
                    for (let n in t) k(r, e, t, n);
                    return r
                },
                k = (e, t, r, n) => {
                    if (null !== t) {
                        let i = r[n];
                        "function" == typeof i && (i = [, i]);
                        let [s = C, a = $, o = n] = i;
                        ("function" == typeof s && s(t[o]) || "function" != typeof s && s) && (e[n] = a(t[o]));
                        return
                    }
                    let [i, s] = r[n];
                    if ("function" == typeof s) {
                        let t, r = void 0 === i && null != (t = s()),
                            a = "function" == typeof i && !!i(void 0) || "function" != typeof i && !!i;
                        r ? e[n] = t : a && (e[n] = s())
                    } else {
                        let t = void 0 === i && null != s,
                            r = "function" == typeof i && !!i(s) || "function" != typeof i && !!i;
                        (t || r) && (e[n] = s)
                    }
                },
                C = e => null != e,
                $ = e => e,
                I = e => {
                    if (null == e) return {};
                    if (Array.isArray(e)) return e.filter(e => null != e).map(I);
                    if ("object" == typeof e) {
                        let t = {};
                        for (let r of Object.keys(e)) null != e[r] && (t[r] = I(e[r]));
                        return t
                    }
                    return e
                };
            var R = r(64102)
        },
        63789: (e, t, r) => {
            "use strict";
            r.d(t, {
                ey: () => g,
                $z: () => u
            });
            var n = r(31072),
                i = r(92544),
                s = r(77369),
                a = r(78150);
            let o = e => e instanceof Error ? e : e instanceof Object ? Object.assign(Error(), e) : "string" == typeof e ? Error(e) : Error(`AWS SDK error wrapper for ${e}`);
            var c = r(27652);
            n.Gz;
            let u = e => {
                let {
                    retryStrategy: t,
                    retryMode: r,
                    maxAttempts: i
                } = e, s = (0, c.t)(i ? ? n.Gz);
                return Object.assign(e, {
                    maxAttempts: s,
                    retryStrategy: async () => t || (await (0, c.t)(r)() === n.cm.ADAPTIVE ? new n.Y(s) : new n.ru(s))
                })
            };
            n.L0;
            var d = r(56067);
            let l = e => e ? .body instanceof ReadableStream,
                p = e => (t, r) => async s => {
                    let c = await e.retryStrategy(),
                        u = await e.maxAttempts();
                    if (!f(c)) return c ? .mode && (r.userAgent = [...r.userAgent || [],
                        ["cfg/retry-mode", c.mode]
                    ]), c.retry(t, s); {
                        let e = await c.acquireInitialRetryToken(r.partition_id),
                            p = Error(),
                            f = 0,
                            m = 0,
                            {
                                request: y
                            } = s,
                            g = i.Kd.isInstance(y);
                        for (g && (y.headers[n.l5] = (0, a.A)());;) try {
                            g && (y.headers[n.ok] = `attempt=${f+1}; max=${u}`);
                            let {
                                response: r,
                                output: i
                            } = await t(s);
                            return c.recordSuccess(e), i.$metadata.attempts = f + 1, i.$metadata.totalRetryDelay = m, {
                                response: r,
                                output: i
                            }
                        } catch (i) {
                            let t = h(i);
                            if (p = o(i), g && l(y)) throw (r.logger instanceof d.N4 ? console : r.logger) ? .warn("An error was encountered in a non-retryable streaming request."), p;
                            try {
                                e = await c.refreshRetryTokenForRetry(e, t)
                            } catch (e) {
                                throw p.$metadata || (p.$metadata = {}), p.$metadata.attempts = f + 1, p.$metadata.totalRetryDelay = m, p
                            }
                            f = e.getRetryCount();
                            let n = e.getRetryDelay();
                            m += n, await new Promise(e => setTimeout(e, n))
                        }
                    }
                },
                f = e => void 0 !== e.acquireInitialRetryToken && void 0 !== e.refreshRetryTokenForRetry && void 0 !== e.recordSuccess,
                h = e => {
                    let t = {
                            error: e,
                            errorType: m(e)
                        },
                        r = w(e.$response);
                    return r && (t.retryAfterHint = r), t
                },
                m = e => (0, s.Qb)(e) ? "THROTTLING" : (0, s.bV)(e) ? "TRANSIENT" : (0, s.GQ)(e) ? "SERVER_ERROR" : "CLIENT_ERROR",
                y = {
                    name: "retryMiddleware",
                    tags: ["RETRY"],
                    step: "finalizeRequest",
                    priority: "high",
                    override: !0
                },
                g = e => ({
                    applyToStack: t => {
                        t.add(p(e), y)
                    }
                }),
                w = e => {
                    if (!i.cS.isInstance(e)) return;
                    let t = Object.keys(e.headers).find(e => "retry-after" === e.toLowerCase());
                    if (!t) return;
                    let r = e.headers[t],
                        n = Number(r);
                    return new Date(Number.isNaN(n) ? r : 1e3 * n)
                }
        },
        64102: (e, t, r) => {
            "use strict";
            r.d(t, {
                Y0: () => i,
                r$: () => n,
                lK: () => s,
                l3: () => l
            }), r(99146);
            let n = e => {
                    if (null != e) {
                        if ("string" == typeof e) {
                            let t = parseFloat(e);
                            if (!Number.isNaN(t)) return String(t) !== String(e) && d.warn(u(`Expected number but observed string: ${e}`)), t
                        }
                        if ("number" == typeof e) return e;
                        throw TypeError(`Expected number, got ${typeof e}: ${e}`)
                    }
                },
                i = (e, t) => {
                    if (null == e) {
                        if (t) throw TypeError(`Expected a non-null value for ${t}`);
                        throw TypeError("Expected a non-null value")
                    }
                    return e
                },
                s = e => {
                    if (null != e) {
                        if ("string" == typeof e) return e;
                        if (["boolean", "number", "bigint"].includes(typeof e)) return d.warn(u(`Expected string, got ${typeof e}: ${e}`)), String(e);
                        throw TypeError(`Expected string, got ${typeof e}: ${e}`)
                    }
                },
                a = e => "string" == typeof e ? n(c(e)) : n(e),
                o = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
                c = e => {
                    let t = e.match(o);
                    if (null === t || t[0].length !== e.length) throw TypeError("Expected real number, got implicit NaN");
                    return parseFloat(e)
                },
                u = e => String(TypeError(e).stack || e).split("\n").slice(0, 5).filter(e => !e.includes("stackTraceWarning")).join("\n"),
                d = {
                    warn: console.warn
                },
                l = e => {
                    let t;
                    if (null != e) {
                        if ("number" == typeof e) t = e;
                        else if ("string" == typeof e) t = a(e);
                        else if ("object" == typeof e && 1 === e.tag) t = e.value;
                        else throw TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
                        if (Number.isNaN(t) || t === 1 / 0 || t === -1 / 0) throw TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
                        return new Date(Math.round(1e3 * t))
                    }
                },
                p = function(e) {
                    return Object.assign(new String(e), {
                        deserializeJSON: () => JSON.parse(String(e)),
                        toString: () => String(e),
                        toJSON: () => String(e)
                    })
                };
            p.from = e => e && "object" == typeof e && (e instanceof p || "deserializeJSON" in e) ? e : "string" == typeof e || Object.getPrototypeOf(e) === String.prototype ? p(String(e)) : p(JSON.stringify(e)), p.fromObject = p.from
        },
        65002: (e, t, r) => {
            "use strict";
            r.d(t, {
                Rq: () => n,
                $3: () => i
            });
            let n = e => ({
                    setRegion(t) {
                        e.region = t
                    },
                    region: () => e.region
                }),
                i = e => ({
                    region: e.region()
                })
        },
        65790: (e, t, r) => {
            "use strict";
            r.d(t, {
                sM: () => w,
                Dc: () => s
            });
            var n = r(29425);
            let i = void 0;

            function s(e) {
                let t = (0, n.te)(e.userAgentAppId ? ? i),
                    {
                        customUserAgent: r
                    } = e;
                return Object.assign(e, {
                    customUserAgent: "string" == typeof r ? [
                        [r]
                    ] : r,
                    userAgentAppId: async () => {
                        let r = await t();
                        if (!(void 0 === r || "string" == typeof r && r.length <= 50)) {
                            let t = e.logger ? .constructor ? .name !== "NoOpLogger" && e.logger ? e.logger : console;
                            "string" != typeof r ? t ? .warn("userAgentAppId must be a string or undefined.") : r.length > 50 && t ? .warn("The provided userAgentAppId exceeds the maximum length of 50 characters.")
                        }
                        return r
                    }
                })
            }
            var a = r(54073),
                o = r(92544);

            function c(e, t, r) {
                e.__aws_sdk_context ? e.__aws_sdk_context.features || (e.__aws_sdk_context.features = {}) : e.__aws_sdk_context = {
                    features: {}
                }, e.__aws_sdk_context.features[t] = r
            }
            let u = /\d{12}\.ddb/;
            async function d(e, t, r) {
                let n = r.request;
                if (n ? .headers ? .["smithy-protocol"] === "rpc-v2-cbor" && c(e, "PROTOCOL_RPC_V2_CBOR", "M"), "function" == typeof t.retryStrategy) {
                    let r = await t.retryStrategy();
                    "function" == typeof r.acquireInitialRetryToken ? r.constructor ? .name ? .includes("Adaptive") ? c(e, "RETRY_MODE_ADAPTIVE", "F") : c(e, "RETRY_MODE_STANDARD", "E") : c(e, "RETRY_MODE_LEGACY", "D")
                }
                if ("function" == typeof t.accountIdEndpointMode) {
                    let r = e.endpointV2;
                    switch (String(r ? .url ? .hostname).match(u) && c(e, "ACCOUNT_ID_ENDPOINT", "O"), await t.accountIdEndpointMode ? .()) {
                        case "disabled":
                            c(e, "ACCOUNT_ID_MODE_DISABLED", "Q");
                            break;
                        case "preferred":
                            c(e, "ACCOUNT_ID_MODE_PREFERRED", "P");
                            break;
                        case "required":
                            c(e, "ACCOUNT_ID_MODE_REQUIRED", "R")
                    }
                }
                let i = e.__smithy_context ? .selectedHttpAuthScheme ? .identity;
                if (i ? .$source)
                    for (let [t, r] of (i.accountId && c(e, "RESOLVED_ACCOUNT_ID", "T"), Object.entries(i.$source ? ? {}))) c(e, t, r)
            }
            let l = "user-agent",
                p = "x-amz-user-agent",
                f = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
                h = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g,
                m = e => (t, r) => async n => {
                    let {
                        request: i
                    } = n;
                    if (!o.Kd.isInstance(i)) return t(n);
                    let {
                        headers: s
                    } = i, c = r ? .userAgent ? .map(y) || [], u = (await e.defaultUserAgentProvider()).map(y);
                    await d(r, e, n), u.push(`m/${function(e){let t="";for(let r in e){let n=e[r];if(t.length+n.length+1<=1024){t.length?t+=","+n:t+=n;continue}break}return t}(Object.assign({},r.__smithy_context?.features,r.__aws_sdk_context?.features))}`);
                    let f = e ? .customUserAgent ? .map(y) || [],
                        h = await e.userAgentAppId();
                    h && u.push(y([`app/${h}`]));
                    let m = (0, a.vL)(),
                        g = (m ? [m] : []).concat([...u, ...c, ...f]).join(" "),
                        w = [...u.filter(e => e.startsWith("aws-sdk-")), ...f].join(" ");
                    return "browser" !== e.runtime ? (w && (s[p] = s[p] ? `${s[l]} ${w}` : w), s[l] = g) : s[p] = g, t({ ...n,
                        request: i
                    })
                },
                y = e => {
                    let t = e[0].split("/").map(e => e.replace(f, "-")).join("/"),
                        r = e[1] ? .replace(h, "-"),
                        n = t.indexOf("/"),
                        i = t.substring(0, n),
                        s = t.substring(n + 1);
                    return "api" === i && (s = s.toLowerCase()), [i, s, r].filter(e => e && e.length > 0).reduce((e, t, r) => {
                        switch (r) {
                            case 0:
                                return t;
                            case 1:
                                return `${e}/${t}`;
                            default:
                                return `${e}#${t}`
                        }
                    }, "")
                },
                g = {
                    name: "getUserAgentMiddleware",
                    step: "build",
                    priority: "low",
                    tags: ["SET_USER_AGENT", "USER_AGENT"],
                    override: !0
                },
                w = e => ({
                    applyToStack: t => {
                        t.add(m(e), g)
                    }
                })
        },
        66879: (e, t, r) => {
            "use strict";
            var n, i, s, a, o, c, u;
            r.d(t, {
                    dB: () => a,
                    Ue: () => s,
                    Vf: () => d
                }),
                function(e) {
                    e.HEADER = "header", e.QUERY = "query"
                }(n || (n = {})),
                function(e) {
                    e.HEADER = "header", e.QUERY = "query"
                }(i || (i = {})),
                function(e) {
                    e.HTTP = "http", e.HTTPS = "https"
                }(s || (s = {})),
                function(e) {
                    e.MD5 = "md5", e.CRC32 = "crc32", e.CRC32C = "crc32c", e.SHA1 = "sha1", e.SHA256 = "sha256"
                }(a || (a = {})),
                function(e) {
                    e[e.HEADER = 0] = "HEADER", e[e.TRAILER = 1] = "TRAILER"
                }(o || (o = {}));
            let d = "__smithy_context";
            ! function(e) {
                e.PROFILE = "profile", e.SSO_SESSION = "sso-session", e.SERVICES = "services"
            }(c || (c = {})),
            function(e) {
                e.HTTP_0_9 = "http/0.9", e.HTTP_1_0 = "http/1.0", e.TDS_8_0 = "tds/8.0"
            }(u || (u = {}))
        },
        66907: (e, t, r) => {
            "use strict";
            r.d(t, {
                t: () => H
            });
            var n = r(33694),
                i = r(9476),
                s = r(56067),
                a = r(88891);
            class o extends s.TJ {
                constructor(e) {
                    super(e), Object.setPrototypeOf(this, o.prototype)
                }
            }
            class c extends o {
                name = "InternalErrorException";
                $fault = "server";
                constructor(e) {
                    super({
                        name: "InternalErrorException",
                        $fault: "server",
                        ...e
                    }), Object.setPrototypeOf(this, c.prototype)
                }
            }
            class u extends o {
                name = "InvalidParameterException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "InvalidParameterException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, u.prototype)
                }
            }
            class d extends o {
                name = "LimitExceededException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "LimitExceededException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, d.prototype)
                }
            }
            class l extends o {
                name = "NotAuthorizedException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "NotAuthorizedException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, l.prototype)
                }
            }
            class p extends o {
                name = "ResourceConflictException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "ResourceConflictException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, p.prototype)
                }
            }
            class f extends o {
                name = "TooManyRequestsException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "TooManyRequestsException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, f.prototype)
                }
            }
            class h extends o {
                name = "ResourceNotFoundException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "ResourceNotFoundException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, h.prototype)
                }
            }
            class m extends o {
                name = "ExternalServiceException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "ExternalServiceException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, m.prototype)
                }
            }
            class y extends o {
                name = "InvalidIdentityPoolConfigurationException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "InvalidIdentityPoolConfigurationException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, y.prototype)
                }
            }
            class g extends o {
                name = "DeveloperUserAlreadyRegisteredException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "DeveloperUserAlreadyRegisteredException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, g.prototype)
                }
            }
            class w extends o {
                name = "ConcurrentModificationException";
                $fault = "client";
                constructor(e) {
                    super({
                        name: "ConcurrentModificationException",
                        $fault: "client",
                        ...e
                    }), Object.setPrototypeOf(this, w.prototype)
                }
            }
            let b = e => ({ ...e,
                    ...e.Logins && {
                        Logins: s.$H
                    }
                }),
                v = e => ({ ...e,
                    ...e.SecretKey && {
                        SecretKey: s.$H
                    }
                }),
                S = e => ({ ...e,
                    ...e.Credentials && {
                        Credentials: v(e.Credentials)
                    }
                });
            var x = r(70800),
                E = r(92544);
            let P = async (e, t) => B(t, {
                    "content-type": "application/x-amz-json-1.1",
                    "x-amz-target": "AWSCognitoIdentityService.GetCredentialsForIdentity"
                }, "/", void 0, JSON.stringify((0, s.Ss)(e))),
                A = async (e, t) => {
                    if (e.statusCode >= 300) return M(e, t);
                    let r = await (0, x.Y2)(e.body, t),
                        n = {};
                    return n = U(r, t), {
                        $metadata: z(e),
                        ...n
                    }
                },
                M = async (e, t) => {
                    let r = { ...e,
                            body: await (0, x.CG)(e.body, t)
                        },
                        n = (0, x.cJ)(e, r.body);
                    switch (n) {
                        case "InternalErrorException":
                        case "com.amazonaws.cognitoidentity#InternalErrorException":
                            throw await $(r, t);
                        case "InvalidParameterException":
                        case "com.amazonaws.cognitoidentity#InvalidParameterException":
                            throw await R(r, t);
                        case "LimitExceededException":
                        case "com.amazonaws.cognitoidentity#LimitExceededException":
                            throw await T(r, t);
                        case "NotAuthorizedException":
                        case "com.amazonaws.cognitoidentity#NotAuthorizedException":
                            throw await _(r, t);
                        case "ResourceConflictException":
                        case "com.amazonaws.cognitoidentity#ResourceConflictException":
                            throw await N(r, t);
                        case "TooManyRequestsException":
                        case "com.amazonaws.cognitoidentity#TooManyRequestsException":
                            throw await D(r, t);
                        case "ResourceNotFoundException":
                        case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
                            throw await F(r, t);
                        case "ExternalServiceException":
                        case "com.amazonaws.cognitoidentity#ExternalServiceException":
                            throw await C(r, t);
                        case "InvalidIdentityPoolConfigurationException":
                        case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
                            throw await I(r, t);
                        case "DeveloperUserAlreadyRegisteredException":
                        case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
                            throw await k(r, t);
                        case "ConcurrentModificationException":
                        case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
                            throw await O(r, t);
                        default:
                            return L({
                                output: e,
                                parsedBody: r.body,
                                errorCode: n
                            })
                    }
                },
                O = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new w({
                            $metadata: z(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                k = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new g({
                            $metadata: z(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                C = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new m({
                            $metadata: z(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                $ = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new c({
                            $metadata: z(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                I = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new y({
                            $metadata: z(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                R = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new u({
                            $metadata: z(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                T = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new d({
                            $metadata: z(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                _ = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new l({
                            $metadata: z(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                N = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new p({
                            $metadata: z(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                F = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new h({
                            $metadata: z(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                D = async (e, t) => {
                    let r = e.body,
                        n = (0, s.Ss)(r),
                        i = new f({
                            $metadata: z(e),
                            ...n
                        });
                    return (0, s.Mw)(i, r)
                },
                j = (e, t) => (0, s.s)(e, {
                    AccessKeyId: s.lK,
                    Expiration: e => (0, s.Y0)((0, s.l3)((0, s.r$)(e))),
                    SecretKey: s.lK,
                    SessionToken: s.lK
                }),
                U = (e, t) => (0, s.s)(e, {
                    Credentials: e => j(e, t),
                    IdentityId: s.lK
                }),
                z = e => ({
                    httpStatusCode: e.statusCode,
                    requestId: e.headers["x-amzn-requestid"] ? ? e.headers["x-amzn-request-id"] ? ? e.headers["x-amz-request-id"],
                    extendedRequestId: e.headers["x-amz-id-2"],
                    cfId: e.headers["x-amz-cf-id"]
                }),
                L = (0, s.jr)(o),
                B = async (e, t, r, n, i) => {
                    let {
                        hostname: s,
                        protocol: a = "https",
                        port: o,
                        path: c
                    } = await e.endpoint(), u = {
                        protocol: a,
                        hostname: s,
                        port: o,
                        method: "POST",
                        path: c.endsWith("/") ? c.slice(0, -1) + r : c + r,
                        headers: t
                    };
                    return void 0 !== n && (u.hostname = n), void 0 !== i && (u.body = i), new E.Kd(u)
                };
            class H extends s.uB.classBuilder().ep(a.S).m(function(e, t, r, s) {
                return [(0, i.TM)(r, this.serialize, this.deserialize), (0, n.rD)(r, e.getEndpointParameterInstructions())]
            }).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").f(b, S).ser(P).de(A).build() {}
        },
        69604: (e, t, r) => {
            "use strict";
            var n;
            r.d(t, {
                    VW: () => i,
                    Hj: () => s,
                    TD: () => c
                }),
                function(e) {
                    e.ENV = "env", e.CONFIG = "shared config entry"
                }(n || (n = {}));
            let i = !1,
                s = !1;
            r(27652);
            let a = e => "string" == typeof e && (e.startsWith("fips-") || e.endsWith("-fips")),
                o = e => a(e) ? ["fips-aws-global", "aws-fips"].includes(e) ? "us-east-1" : e.replace(/fips-(dkr-|prod-)?|-fips/, "") : e,
                c = e => {
                    let {
                        region: t,
                        useFipsEndpoint: r
                    } = e;
                    if (!t) throw Error("Region is missing");
                    return Object.assign(e, {
                        region: async () => "string" == typeof t ? o(t) : o(await t()),
                        useFipsEndpoint: async () => !!a("string" == typeof t ? t : await t()) || ("function" != typeof r ? Promise.resolve(!!r) : r())
                    })
                }
        },
        70800: (e, t, r) => {
            "use strict";
            r.d(t, {
                cJ: () => o,
                Y2: () => s,
                CG: () => a
            });
            var n = r(56067);
            let i = (e, t) => (0, n.Px)(e, t).then(e => t.utf8Encoder(e)),
                s = (e, t) => i(e, t).then(e => {
                    if (e.length) try {
                        return JSON.parse(e)
                    } catch (t) {
                        throw t ? .name === "SyntaxError" && Object.defineProperty(t, "$responseBodyText", {
                            value: e
                        }), t
                    }
                    return {}
                }),
                a = async (e, t) => {
                    let r = await s(e, t);
                    return r.message = r.message ? ? r.Message, r
                },
                o = (e, t) => {
                    let r = (e, t) => Object.keys(e).find(e => e.toLowerCase() === t.toLowerCase()),
                        n = e => {
                            let t = e;
                            return "number" == typeof t && (t = t.toString()), t.indexOf(",") >= 0 && (t = t.split(",")[0]), t.indexOf(":") >= 0 && (t = t.split(":")[0]), t.indexOf("#") >= 0 && (t = t.split("#")[1]), t
                        },
                        i = r(e.headers, "x-amzn-errortype");
                    if (void 0 !== i) return n(e.headers[i]);
                    if (t && "object" == typeof t) {
                        let e = r(t, "code");
                        if (e && void 0 !== t[e]) return n(t[e]);
                        if (void 0 !== t.__type) return n(t.__type)
                    }
                }
        },
        77369: (e, t, r) => {
            "use strict";
            r.d(t, {
                h5: () => u,
                S0: () => c,
                GQ: () => h,
                Qb: () => p,
                bV: () => f
            });
            let n = ["AuthFailure", "InvalidSignatureException", "RequestExpired", "RequestInTheFuture", "RequestTimeTooSkewed", "SignatureDoesNotMatch"],
                i = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"],
                s = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"],
                a = [500, 502, 503, 504],
                o = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"],
                c = e => void 0 !== e.$retryable,
                u = e => n.includes(e.name),
                d = e => e.$metadata ? .clockSkewCorrected,
                l = e => {
                    let t = new Set(["Failed to fetch", "NetworkError when attempting to fetch resource", "The Internet connection appears to be offline", "Load failed", "Network request failed"]);
                    return !!(e && e instanceof TypeError) && t.has(e.message)
                },
                p = e => e.$metadata ? .httpStatusCode === 429 || i.includes(e.name) || e.$retryable ? .throttling == !0,
                f = (e, t = 0) => d(e) || s.includes(e.name) || o.includes(e ? .code || "") || a.includes(e.$metadata ? .httpStatusCode || 0) || l(e) || void 0 !== e.cause && t <= 10 && f(e.cause, t + 1),
                h = e => {
                    if (e.$metadata ? .httpStatusCode !== void 0) {
                        let t = e.$metadata.httpStatusCode;
                        if (500 <= t && t <= 599 && !f(e)) return !0
                    }
                    return !1
                }
        },
        79143: (e, t, r) => {
            "use strict";
            r.d(t, {
                b: () => u
            });
            var n = r(33694),
                i = r(9476),
                s = r(56067),
                a = r(569),
                o = r(14560),
                c = r(38495);
            class u extends s.uB.classBuilder().ep(a.S).m(function(e, t, r, s) {
                return [(0, i.TM)(r, this.serialize, this.deserialize), (0, n.rD)(r, e.getEndpointParameterInstructions())]
            }).s("TrentService", "Encrypt", {}).n("KMSClient", "EncryptCommand").f(o.zO, void 0).ser(c.eS).de(c.x8).build() {}
        },
        82031: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => n
            });
            let n = e => encodeURIComponent(e).replace(/[!'()*]/g, i),
                i = e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
        },
        83848: (e, t, r) => {
            "use strict";
            r.d(t, {
                kS: () => n,
                mw: () => c,
                oX: () => s,
                X8: () => o,
                sO: () => I
            });
            class n {
                constructor({
                    size: e,
                    params: t
                }) {
                    this.data = new Map, this.parameters = [], this.capacity = e ? ? 50, t && (this.parameters = t)
                }
                get(e, t) {
                    let r = this.hash(e);
                    if (!1 === r) return t();
                    if (!this.data.has(r)) {
                        if (this.data.size > this.capacity + 10) {
                            let e = this.data.keys(),
                                t = 0;
                            for (;;) {
                                let {
                                    value: r,
                                    done: n
                                } = e.next();
                                if (this.data.delete(r), n || ++t > 10) break
                            }
                        }
                        this.data.set(r, t())
                    }
                    return this.data.get(r)
                }
                size() {
                    return this.data.size
                }
                hash(e) {
                    let t = "",
                        {
                            parameters: r
                        } = this;
                    if (0 === r.length) return !1;
                    for (let n of r) {
                        let r = String(e[n] ? ? "");
                        if (r.includes("|;")) return !1;
                        t += r + "|;"
                    }
                    return t
                }
            }
            let i = RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"),
                s = e => i.test(e) || e.startsWith("[") && e.endsWith("]"),
                a = RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
                o = (e, t = !1) => {
                    if (!t) return a.test(e);
                    for (let t of e.split("."))
                        if (!o(t)) return !1;
                    return !0
                },
                c = {},
                u = "endpoints";

            function d(e) {
                return "object" != typeof e || null == e ? e : "ref" in e ? `$${d(e.ref)}` : "fn" in e ? `${e.fn}(${(e.argv||[]).map(d).join(", ")})` : JSON.stringify(e, null, 2)
            }
            class l extends Error {
                constructor(e) {
                    super(e), this.name = "EndpointError"
                }
            }
            let p = e => {
                    let t = e.split("."),
                        r = [];
                    for (let n of t) {
                        let t = n.indexOf("[");
                        if (-1 !== t) {
                            if (n.indexOf("]") !== n.length - 1) throw new l(`Path: '${e}' does not end with ']'`);
                            let i = n.slice(t + 1, -1);
                            if (Number.isNaN(parseInt(i))) throw new l(`Invalid array index: '${i}' in path: '${e}'`);
                            0 !== t && r.push(n.slice(0, t)), r.push(i)
                        } else r.push(n)
                    }
                    return r
                },
                f = (e, t) => p(t).reduce((r, n) => {
                    if ("object" != typeof r) throw new l(`Index '${n}' in '${t}' not found in '${JSON.stringify(e)}'`);
                    return Array.isArray(r) ? r[parseInt(n)] : r[n]
                }, e);
            var h = r(66879);
            let m = {
                    [h.Ue.HTTP]: 80,
                    [h.Ue.HTTPS]: 443
                },
                y = {
                    booleanEquals: (e, t) => e === t,
                    getAttr: f,
                    isSet: e => null != e,
                    isValidHostLabel: o,
                    not: e => !e,
                    parseURL: e => {
                        let t = (() => {
                            try {
                                if (e instanceof URL) return e;
                                if ("object" == typeof e && "hostname" in e) {
                                    let {
                                        hostname: t,
                                        port: r,
                                        protocol: n = "",
                                        path: i = "",
                                        query: s = {}
                                    } = e, a = new URL(`${n}//${t}${r?`:${r}`:""}${i}`);
                                    return a.search = Object.entries(s).map(([e, t]) => `${e}=${t}`).join("&"), a
                                }
                                return new URL(e)
                            } catch (e) {
                                return null
                            }
                        })();
                        if (!t) return console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`), null;
                        let r = t.href,
                            {
                                host: n,
                                hostname: i,
                                pathname: a,
                                protocol: o,
                                search: c
                            } = t;
                        if (c) return null;
                        let u = o.slice(0, -1);
                        if (!Object.values(h.Ue).includes(u)) return null;
                        let d = s(i),
                            l = r.includes(`${n}:${m[u]}`) || "string" == typeof e && e.includes(`${n}:${m[u]}`),
                            p = `${n}${l?`:${m[u]}`:""}`;
                        return {
                            scheme: u,
                            authority: p,
                            path: a,
                            normalizedPath: a.endsWith("/") ? a : `${a}/`,
                            isIp: d
                        }
                    },
                    stringEquals: (e, t) => e === t,
                    substring: (e, t, r, n) => t >= r || e.length < r ? null : n ? e.substring(e.length - r, e.length - t) : e.substring(t, r),
                    uriEncode: e => encodeURIComponent(e).replace(/[!*'()]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)
                },
                g = (e, t) => {
                    let r = [],
                        n = { ...t.endpointParams,
                            ...t.referenceRecord
                        },
                        i = 0;
                    for (; i < e.length;) {
                        let t = e.indexOf("{", i);
                        if (-1 === t) {
                            r.push(e.slice(i));
                            break
                        }
                        r.push(e.slice(i, t));
                        let s = e.indexOf("}", t);
                        if (-1 === s) {
                            r.push(e.slice(t));
                            break
                        }
                        "{" === e[t + 1] && "}" === e[s + 1] && (r.push(e.slice(t + 1, s)), i = s + 2);
                        let a = e.substring(t + 1, s);
                        if (a.includes("#")) {
                            let [e, t] = a.split("#");
                            r.push(f(n[e], t))
                        } else r.push(n[a]);
                        i = s + 1
                    }
                    return r.join("")
                },
                w = ({
                    ref: e
                }, t) => ({ ...t.endpointParams,
                    ...t.referenceRecord
                })[e],
                b = (e, t, r) => {
                    if ("string" == typeof e) return g(e, r);
                    if (e.fn) return v(e, r);
                    if (e.ref) return w(e, r);
                    throw new l(`'${t}': ${String(e)} is not a string, function or reference.`)
                },
                v = ({
                    fn: e,
                    argv: t
                }, r) => {
                    let n = t.map(e => ["boolean", "number"].includes(typeof e) ? e : b(e, "arg", r)),
                        i = e.split(".");
                    return i[0] in c && null != i[1] ? c[i[0]][i[1]](...n) : y[e](...n)
                },
                S = ({
                    assign: e,
                    ...t
                }, r) => {
                    if (e && e in r.referenceRecord) throw new l(`'${e}' is already defined in Reference Record.`);
                    let n = v(t, r);
                    return r.logger ? .debug ? .(`${u} evaluateCondition: ${d(t)} = ${d(n)}`), {
                        result: "" === n || !!n,
                        ...null != e && {
                            toAssign: {
                                name: e,
                                value: n
                            }
                        }
                    }
                },
                x = (e = [], t) => {
                    let r = {};
                    for (let n of e) {
                        let {
                            result: e,
                            toAssign: i
                        } = S(n, { ...t,
                            referenceRecord: { ...t.referenceRecord,
                                ...r
                            }
                        });
                        if (!e) return {
                            result: e
                        };
                        i && (r[i.name] = i.value, t.logger ? .debug ? .(`${u} assign: ${i.name} := ${d(i.value)}`))
                    }
                    return {
                        result: !0,
                        referenceRecord: r
                    }
                },
                E = (e, t) => Object.entries(e).reduce((e, [r, n]) => ({ ...e,
                    [r]: n.map(e => {
                        let n = b(e, "Header value entry", t);
                        if ("string" != typeof n) throw new l(`Header '${r}' value '${n}' is not a string`);
                        return n
                    })
                }), {}),
                P = (e, t) => {
                    if (Array.isArray(e)) return e.map(e => P(e, t));
                    switch (typeof e) {
                        case "string":
                            return g(e, t);
                        case "object":
                            if (null === e) throw new l(`Unexpected endpoint property: ${e}`);
                            return A(e, t);
                        case "boolean":
                            return e;
                        default:
                            throw new l(`Unexpected endpoint property type: ${typeof e}`)
                    }
                },
                A = (e, t) => Object.entries(e).reduce((e, [r, n]) => ({ ...e,
                    [r]: P(n, t)
                }), {}),
                M = (e, t) => {
                    let r = b(e, "Endpoint URL", t);
                    if ("string" == typeof r) try {
                        return new URL(r)
                    } catch (e) {
                        throw console.error(`Failed to construct URL with ${r}`, e), e
                    }
                    throw new l(`Endpoint URL must be a string, got ${typeof r}`)
                },
                O = (e, t) => {
                    let {
                        conditions: r,
                        endpoint: n
                    } = e, {
                        result: i,
                        referenceRecord: s
                    } = x(r, t);
                    if (!i) return;
                    let a = { ...t,
                            referenceRecord: { ...t.referenceRecord,
                                ...s
                            }
                        },
                        {
                            url: o,
                            properties: c,
                            headers: l
                        } = n;
                    return t.logger ? .debug ? .(`${u} Resolving endpoint from template: ${d(n)}`), { ...void 0 != l && {
                            headers: E(l, a)
                        },
                        ...void 0 != c && {
                            properties: A(c, a)
                        },
                        url: M(o, a)
                    }
                },
                k = (e, t) => {
                    let {
                        conditions: r,
                        error: n
                    } = e, {
                        result: i,
                        referenceRecord: s
                    } = x(r, t);
                    if (i) throw new l(b(n, "Error", { ...t,
                        referenceRecord: { ...t.referenceRecord,
                            ...s
                        }
                    }))
                },
                C = (e, t) => {
                    let {
                        conditions: r,
                        rules: n
                    } = e, {
                        result: i,
                        referenceRecord: s
                    } = x(r, t);
                    if (i) return $(n, { ...t,
                        referenceRecord: { ...t.referenceRecord,
                            ...s
                        }
                    })
                },
                $ = (e, t) => {
                    for (let r of e)
                        if ("endpoint" === r.type) {
                            let e = O(r, t);
                            if (e) return e
                        } else if ("error" === r.type) k(r, t);
                    else if ("tree" === r.type) {
                        let e = C(r, t);
                        if (e) return e
                    } else throw new l(`Unknown endpoint rule: ${r}`);
                    throw new l("Rules evaluation failed")
                },
                I = (e, t) => {
                    let {
                        endpointParams: r,
                        logger: n
                    } = t, {
                        parameters: i,
                        rules: s
                    } = e;
                    t.logger ? .debug ? .(`${u} Initial EndpointParams: ${d(r)}`);
                    let a = Object.entries(i).filter(([, e]) => null != e.default).map(([e, t]) => [e, t.default]);
                    if (a.length > 0)
                        for (let [e, t] of a) r[e] = r[e] ? ? t;
                    for (let e of Object.entries(i).filter(([, e]) => e.required).map(([e]) => e))
                        if (null == r[e]) throw new l(`Missing required parameter: '${e}'`);
                    let o = $(s, {
                        endpointParams: r,
                        logger: n,
                        referenceRecord: {}
                    });
                    return t.logger ? .debug ? .(`${u} Resolved endpoint: ${d(o)}`), o
                }
        },
        85090: (e, t, r) => {
            "use strict";
            r.d(t, {
                h: () => G
            });
            var n, i = r(29425),
                s = r(45075),
                a = r(14424);
            let o = e => "string" == typeof e ? (0, a.a)(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e),
                c = "X-Amz-Date",
                u = "X-Amz-Signature",
                d = "X-Amz-Security-Token",
                l = "authorization",
                p = c.toLowerCase(),
                f = [l, p, "date"],
                h = u.toLowerCase(),
                m = "x-amz-content-sha256",
                y = d.toLowerCase(),
                g = {
                    authorization: !0,
                    "cache-control": !0,
                    connection: !0,
                    expect: !0,
                    from: !0,
                    "keep-alive": !0,
                    "max-forwards": !0,
                    pragma: !0,
                    referer: !0,
                    te: !0,
                    trailer: !0,
                    "transfer-encoding": !0,
                    upgrade: !0,
                    "user-agent": !0,
                    "x-amzn-trace-id": !0
                },
                w = /^proxy-/,
                b = /^sec-/,
                v = "AWS4-HMAC-SHA256",
                S = "aws4_request",
                x = {},
                E = [],
                P = (e, t, r) => `${e}/${t}/${r}/${S}`,
                A = async (e, t, r, n, i) => {
                    let a = await M(e, t.secretAccessKey, t.accessKeyId),
                        o = `${r}:${n}:${i}:${(0,s.n)(a)}:${t.sessionToken}`;
                    if (o in x) return x[o];
                    for (E.push(o); E.length > 50;) delete x[E.shift()];
                    let c = `AWS4${t.secretAccessKey}`;
                    for (let t of [r, n, i, S]) c = await M(e, c, t);
                    return x[o] = c
                },
                M = (e, t, r) => {
                    let n = new e(t);
                    return n.update(o(r)), n.digest()
                },
                O = ({
                    headers: e
                }, t, r) => {
                    let n = {};
                    for (let i of Object.keys(e).sort()) {
                        if (void 0 == e[i]) continue;
                        let s = i.toLowerCase();
                        (!(s in g || t ? .has(s) || w.test(s) || b.test(s)) || r && (!r || r.has(s))) && (n[s] = e[i].trim().replace(/\s+/g, " "))
                    }
                    return n
                },
                k = e => "function" == typeof ArrayBuffer && e instanceof ArrayBuffer || "[object ArrayBuffer]" === Object.prototype.toString.call(e),
                C = async ({
                    headers: e,
                    body: t
                }, r) => {
                    for (let t of Object.keys(e))
                        if (t.toLowerCase() === m) return e[t];
                    if (void 0 == t) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
                    if ("string" == typeof t || ArrayBuffer.isView(t) || k(t)) {
                        let e = new r;
                        return e.update(o(t)), (0, s.n)(await e.digest())
                    }
                    return "UNSIGNED-PAYLOAD"
                };
            class $ {
                format(e) {
                    let t = [];
                    for (let r of Object.keys(e)) {
                        let n = (0, a.a)(r);
                        t.push(Uint8Array.from([n.byteLength]), n, this.formatHeaderValue(e[r]))
                    }
                    let r = new Uint8Array(t.reduce((e, t) => e + t.byteLength, 0)),
                        n = 0;
                    for (let e of t) r.set(e, n), n += e.byteLength;
                    return r
                }
                formatHeaderValue(e) {
                    switch (e.type) {
                        case "boolean":
                            return Uint8Array.from([+!e.value]);
                        case "byte":
                            return Uint8Array.from([2, e.value]);
                        case "short":
                            let t = new DataView(new ArrayBuffer(3));
                            return t.setUint8(0, 3), t.setInt16(1, e.value, !1), new Uint8Array(t.buffer);
                        case "integer":
                            let r = new DataView(new ArrayBuffer(5));
                            return r.setUint8(0, 4), r.setInt32(1, e.value, !1), new Uint8Array(r.buffer);
                        case "long":
                            let n = new Uint8Array(9);
                            return n[0] = 5, n.set(e.value.bytes, 1), n;
                        case "binary":
                            let i = new DataView(new ArrayBuffer(3 + e.value.byteLength));
                            i.setUint8(0, 6), i.setUint16(1, e.value.byteLength, !1);
                            let o = new Uint8Array(i.buffer);
                            return o.set(e.value, 3), o;
                        case "string":
                            let c = (0, a.a)(e.value),
                                u = new DataView(new ArrayBuffer(3 + c.byteLength));
                            u.setUint8(0, 7), u.setUint16(1, c.byteLength, !1);
                            let d = new Uint8Array(u.buffer);
                            return d.set(c, 3), d;
                        case "timestamp":
                            let l = new Uint8Array(9);
                            return l[0] = 8, l.set(R.fromNumber(e.value.valueOf()).bytes, 1), l;
                        case "uuid":
                            if (!I.test(e.value)) throw Error(`Invalid UUID received: ${e.value}`);
                            let p = new Uint8Array(17);
                            return p[0] = 9, p.set((0, s.a)(e.value.replace(/\-/g, "")), 1), p
                    }
                }
            }! function(e) {
                e[e.boolTrue = 0] = "boolTrue", e[e.boolFalse = 1] = "boolFalse", e[e.byte = 2] = "byte", e[e.short = 3] = "short", e[e.integer = 4] = "integer", e[e.long = 5] = "long", e[e.byteArray = 6] = "byteArray", e[e.string = 7] = "string", e[e.timestamp = 8] = "timestamp", e[e.uuid = 9] = "uuid"
            }(n || (n = {}));
            let I = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
            class R {
                constructor(e) {
                    if (this.bytes = e, 8 !== e.byteLength) throw Error("Int64 buffers must be exactly 8 bytes")
                }
                static fromNumber(e) {
                    if (e > 0x8000000000000000 || e < -0x8000000000000000) throw Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
                    let t = new Uint8Array(8);
                    for (let r = 7, n = Math.abs(Math.round(e)); r > -1 && n > 0; r--, n /= 256) t[r] = n;
                    return e < 0 && T(t), new R(t)
                }
                valueOf() {
                    let e = this.bytes.slice(0),
                        t = 128 & e[0];
                    return t && T(e), parseInt((0, s.n)(e), 16) * (t ? -1 : 1)
                }
                toString() {
                    return String(this.valueOf())
                }
            }

            function T(e) {
                for (let t = 0; t < 8; t++) e[t] ^= 255;
                for (let t = 7; t > -1 && (e[t]++, 0 === e[t]); t--);
            }
            let _ = (e, t) => {
                for (let r of (e = e.toLowerCase(), Object.keys(t)))
                    if (e === r.toLowerCase()) return !0;
                return !1
            };
            var N = r(92544);
            let F = (e, t = {}) => {
                    let {
                        headers: r,
                        query: n = {}
                    } = N.Kd.clone(e);
                    for (let e of Object.keys(r)) {
                        let i = e.toLowerCase();
                        ("x-amz-" === i.slice(0, 6) && !t.unhoistableHeaders ? .has(i) || t.hoistableHeaders ? .has(i)) && (n[e] = r[e], delete r[e])
                    }
                    return { ...e,
                        headers: r,
                        query: n
                    }
                },
                D = e => {
                    for (let t of Object.keys((e = N.Kd.clone(e)).headers)) f.indexOf(t.toLowerCase()) > -1 && delete e.headers[t];
                    return e
                };
            var j = r(27652),
                U = r(82031);
            let z = ({
                    query: e = {}
                }) => {
                    let t = [],
                        r = {};
                    for (let n of Object.keys(e)) {
                        if (n.toLowerCase() === h) continue;
                        let i = (0, U.o)(n);
                        t.push(i);
                        let s = e[n];
                        "string" == typeof s ? r[i] = `${i}=${(0,U.o)(s)}` : Array.isArray(s) && (r[i] = s.slice(0).reduce((e, t) => e.concat([`${i}=${(0,U.o)(t)}`]), []).sort().join("&"))
                    }
                    return t.sort().map(e => r[e]).filter(e => e).join("&")
                },
                L = e => B(e).toISOString().replace(/\.\d{3}Z$/, "Z"),
                B = e => "number" == typeof e ? new Date(1e3 * e) : "string" == typeof e ? new Date(Number(e) ? 1e3 * Number(e) : e) : e;
            class H {
                constructor({
                    applyChecksum: e,
                    credentials: t,
                    region: r,
                    service: n,
                    sha256: i,
                    uriEscapePath: s = !0
                }) {
                    this.service = n, this.sha256 = i, this.uriEscapePath = s, this.applyChecksum = "boolean" != typeof e || e, this.regionProvider = (0, j.t)(r), this.credentialProvider = (0, j.t)(t)
                }
                createCanonicalRequest(e, t, r) {
                    let n = Object.keys(t).sort();
                    return `${e.method}
${this.getCanonicalPath(e)}
${z(e)}
${n.map(e=>`${e}:${t[e]}`).join("\n")}

${n.join(";")}
${r}`
                }
                async createStringToSign(e, t, r, n) {
                    let i = new this.sha256;
                    i.update(o(r));
                    let a = await i.digest();
                    return `${n}
${e}
${t}
${(0,s.n)(a)}`
                }
                getCanonicalPath({
                    path: e
                }) {
                    if (this.uriEscapePath) {
                        let t = [];
                        for (let r of e.split("/")) r ? .length !== 0 && "." !== r && (".." === r ? t.pop() : t.push(r));
                        let r = `${e?.startsWith("/")?"/":""}${t.join("/")}${t.length>0&&e?.endsWith("/")?"/":""}`;
                        return (0, U.o)(r).replace(/%2F/g, "/")
                    }
                    return e
                }
                validateResolvedCredentials(e) {
                    if ("object" != typeof e || "string" != typeof e.accessKeyId || "string" != typeof e.secretAccessKey) throw Error("Resolved credential object is not valid")
                }
                formatDate(e) {
                    let t = L(e).replace(/[\-:]/g, "");
                    return {
                        longDate: t,
                        shortDate: t.slice(0, 8)
                    }
                }
                getCanonicalHeaderList(e) {
                    return Object.keys(e).sort().join(";")
                }
            }
            class K extends H {
                constructor({
                    applyChecksum: e,
                    credentials: t,
                    region: r,
                    service: n,
                    sha256: i,
                    uriEscapePath: s = !0
                }) {
                    super({
                        applyChecksum: e,
                        credentials: t,
                        region: r,
                        service: n,
                        sha256: i,
                        uriEscapePath: s
                    }), this.headerFormatter = new $
                }
                async presign(e, t = {}) {
                    let {
                        signingDate: r = new Date,
                        expiresIn: n = 3600,
                        unsignableHeaders: i,
                        unhoistableHeaders: s,
                        signableHeaders: a,
                        hoistableHeaders: o,
                        signingRegion: l,
                        signingService: p
                    } = t, f = await this.credentialProvider();
                    this.validateResolvedCredentials(f);
                    let h = l ? ? await this.regionProvider(),
                        {
                            longDate: m,
                            shortDate: y
                        } = this.formatDate(r);
                    if (n > 604800) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
                    let g = P(y, h, p ? ? this.service),
                        w = F(D(e), {
                            unhoistableHeaders: s,
                            hoistableHeaders: o
                        });
                    f.sessionToken && (w.query[d] = f.sessionToken), w.query["X-Amz-Algorithm"] = v, w.query["X-Amz-Credential"] = `${f.accessKeyId}/${g}`, w.query[c] = m, w.query["X-Amz-Expires"] = n.toString(10);
                    let b = O(w, i, a);
                    return w.query["X-Amz-SignedHeaders"] = this.getCanonicalHeaderList(b), w.query[u] = await this.getSignature(m, g, this.getSigningKey(f, h, y, p), this.createCanonicalRequest(w, b, await C(e, this.sha256))), w
                }
                async sign(e, t) {
                    return "string" == typeof e ? this.signString(e, t) : e.headers && e.payload ? this.signEvent(e, t) : e.message ? this.signMessage(e, t) : this.signRequest(e, t)
                }
                async signEvent({
                    headers: e,
                    payload: t
                }, {
                    signingDate: r = new Date,
                    priorSignature: n,
                    signingRegion: i,
                    signingService: a
                }) {
                    let o = i ? ? await this.regionProvider(),
                        {
                            shortDate: c,
                            longDate: u
                        } = this.formatDate(r),
                        d = P(c, o, a ? ? this.service),
                        l = await C({
                            headers: {},
                            body: t
                        }, this.sha256),
                        p = new this.sha256;
                    p.update(e);
                    let f = ["AWS4-HMAC-SHA256-PAYLOAD", u, d, n, (0, s.n)(await p.digest()), l].join("\n");
                    return this.signString(f, {
                        signingDate: r,
                        signingRegion: o,
                        signingService: a
                    })
                }
                async signMessage(e, {
                    signingDate: t = new Date,
                    signingRegion: r,
                    signingService: n
                }) {
                    return this.signEvent({
                        headers: this.headerFormatter.format(e.message.headers),
                        payload: e.message.body
                    }, {
                        signingDate: t,
                        signingRegion: r,
                        signingService: n,
                        priorSignature: e.priorSignature
                    }).then(t => ({
                        message: e.message,
                        signature: t
                    }))
                }
                async signString(e, {
                    signingDate: t = new Date,
                    signingRegion: r,
                    signingService: n
                } = {}) {
                    let i = await this.credentialProvider();
                    this.validateResolvedCredentials(i);
                    let a = r ? ? await this.regionProvider(),
                        {
                            shortDate: c
                        } = this.formatDate(t),
                        u = new this.sha256(await this.getSigningKey(i, a, c, n));
                    return u.update(o(e)), (0, s.n)(await u.digest())
                }
                async signRequest(e, {
                    signingDate: t = new Date,
                    signableHeaders: r,
                    unsignableHeaders: n,
                    signingRegion: i,
                    signingService: s
                } = {}) {
                    let a = await this.credentialProvider();
                    this.validateResolvedCredentials(a);
                    let o = i ? ? await this.regionProvider(),
                        c = D(e),
                        {
                            longDate: u,
                            shortDate: d
                        } = this.formatDate(t),
                        f = P(d, o, s ? ? this.service);
                    c.headers[p] = u, a.sessionToken && (c.headers[y] = a.sessionToken);
                    let h = await C(c, this.sha256);
                    !_(m, c.headers) && this.applyChecksum && (c.headers[m] = h);
                    let g = O(c, n, r),
                        w = await this.getSignature(u, f, this.getSigningKey(a, o, d, s), this.createCanonicalRequest(c, g, h));
                    return c.headers[l] = `${v} Credential=${a.accessKeyId}/${f}, SignedHeaders=${this.getCanonicalHeaderList(g)}, Signature=${w}`, c
                }
                async getSignature(e, t, r, n) {
                    let i = await this.createStringToSign(e, t, n, v),
                        a = new this.sha256(await r);
                    return a.update(o(i)), (0, s.n)(await a.digest())
                }
                getSigningKey(e, t, r, n) {
                    return A(this.sha256, e, r, t, n || this.service)
                }
            }
            let G = e => {
                let t, r, n = e.credentials,
                    s = !!e.credentials;
                Object.defineProperty(e, "credentials", {
                    set(r) {
                        r && r !== n && r !== t && (s = !0);
                        let a = function(e, {
                                credentials: t,
                                credentialDefaultProvider: r
                            }) {
                                let n;
                                return (n = t ? t ? .memoized ? t : (0, i.K4)(t, i.OC, i.e) : r ? (0, i.te)(r(Object.assign({}, e, {
                                    parentClientConfig: e
                                }))) : async () => {
                                    throw Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.")
                                }).memoized = !0, n
                            }(e, {
                                credentials: n = r,
                                credentialDefaultProvider: e.credentialDefaultProvider
                            }),
                            o = function(e, t) {
                                if (t.configBound) return t;
                                let r = async r => t({ ...r,
                                    callerClientConfig: e
                                });
                                return r.memoized = t.memoized, r.configBound = !0, r
                            }(e, a);
                        s && !o.attributed ? ((t = async e => o(e).then(e => (e.$source || (e.$source = {}), e.$source.CREDENTIALS_CODE = "e", e))).memoized = o.memoized, t.configBound = o.configBound, t.attributed = !0) : t = o
                    },
                    get: () => t,
                    enumerable: !0,
                    configurable: !0
                }), e.credentials = n;
                let {
                    signingEscapePath: a = !0,
                    systemClockOffset: o = e.systemClockOffset || 0,
                    sha256: c
                } = e;
                return r = e.signer ? (0, i.te)(e.signer) : e.regionInfoProvider ? () => (0, i.te)(e.region)().then(async t => [await e.regionInfoProvider(t, {
                    useFipsEndpoint: await e.useFipsEndpoint(),
                    useDualstackEndpoint: await e.useDualstackEndpoint()
                }) || {}, t]).then(([t, r]) => {
                    let {
                        signingRegion: n,
                        signingService: i
                    } = t;
                    e.signingRegion = e.signingRegion || n || r, e.signingName = e.signingName || i || e.serviceId;
                    let s = { ...e,
                        credentials: e.credentials,
                        region: e.signingRegion,
                        service: e.signingName,
                        sha256: c,
                        uriEscapePath: a
                    };
                    return new(e.signerConstructor || K)(s)
                }) : async t => {
                    let r = (t = Object.assign({}, {
                            name: "sigv4",
                            signingName: e.signingName || e.defaultSigningName,
                            signingRegion: await (0, i.te)(e.region)(),
                            properties: {}
                        }, t)).signingRegion,
                        n = t.signingName;
                    e.signingRegion = e.signingRegion || r, e.signingName = e.signingName || n || e.serviceId;
                    let s = { ...e,
                        credentials: e.credentials,
                        region: e.signingRegion,
                        service: e.signingName,
                        sha256: c,
                        uriEscapePath: a
                    };
                    return new(e.signerConstructor || K)(s)
                }, Object.assign(e, {
                    systemClockOffset: o,
                    signingEscapePath: a,
                    signer: r
                })
            }
        },
        87453: (e, t, r) => {
            "use strict";
            r.d(t, {
                P: () => n
            });
            let n = e => {
                if ("string" == typeof e) return e;
                if ("object" != typeof e || "number" != typeof e.byteOffset || "number" != typeof e.byteLength) throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
                return new TextDecoder("utf-8").decode(e)
            }
        },
        88891: (e, t, r) => {
            "use strict";
            r.d(t, {
                S: () => i,
                v: () => n
            });
            let n = e => Object.assign(e, {
                    useDualstackEndpoint: e.useDualstackEndpoint ? ? !1,
                    useFipsEndpoint: e.useFipsEndpoint ? ? !1,
                    defaultSigningName: "cognito-identity"
                }),
                i = {
                    UseFIPS: {
                        type: "builtInParams",
                        name: "useFipsEndpoint"
                    },
                    Endpoint: {
                        type: "builtInParams",
                        name: "endpoint"
                    },
                    Region: {
                        type: "builtInParams",
                        name: "region"
                    },
                    UseDualStack: {
                        type: "builtInParams",
                        name: "useDualstackEndpoint"
                    }
                }
        },
        89510: (e, t, r) => {
            "use strict";
            r.d(t, {
                vK: () => a
            });
            var n = r(92544);
            let i = "content-length",
                s = {
                    step: "build",
                    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
                    name: "contentLengthMiddleware",
                    override: !0
                },
                a = e => ({
                    applyToStack: t => {
                        var r;
                        t.add((r = e.bodyLengthChecker, e => async t => {
                            let s = t.request;
                            if (n.Kd.isInstance(s)) {
                                let {
                                    body: e,
                                    headers: t
                                } = s;
                                if (e && -1 === Object.keys(t).map(e => e.toLowerCase()).indexOf(i)) try {
                                    let t = r(e);
                                    s.headers = { ...s.headers,
                                        [i]: String(t)
                                    }
                                } catch (e) {}
                            }
                            return e({ ...t,
                                request: s
                            })
                        }), s)
                    }
                })
        },
        91870: (e, t, r) => {
            "use strict";
            r.d(t, {
                Px: () => o
            });
            var n = r(44527),
                i = r(87453),
                s = r(14424);
            class a extends Uint8Array {
                static fromString(e, t = "utf-8") {
                    if ("string" == typeof e) return "base64" === t ? a.mutate((0, n.E)(e)) : a.mutate((0, s.a)(e));
                    throw Error(`Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`)
                }
                static mutate(e) {
                    return Object.setPrototypeOf(e, a.prototype), e
                }
                transformToString(e = "utf-8") {
                    return function(e, t = "utf-8") {
                        return "base64" === t ? (0, n.n)(e) : (0, i.P)(e)
                    }(this, e)
                }
            }
            "function" == typeof ReadableStream && ReadableStream, r(95762).Buffer;
            r(19879), r(45075);
            let o = async (e = new Uint8Array, t) => {
                if (e instanceof Uint8Array) return a.mutate(e);
                if (!e) return a.mutate(new Uint8Array);
                let r = t.streamCollector(e);
                return a.mutate(await r)
            };
            r(99146), r(92544), r(64102)
        },
        92544: (e, t, r) => {
            "use strict";
            r.d(t, {
                Kd: () => s,
                cS: () => a,
                eS: () => n,
                jt: () => i
            });
            let n = e => ({
                    setHttpHandler(t) {
                        e.httpHandler = t
                    },
                    httpHandler: () => e.httpHandler,
                    updateHttpClientConfig(t, r) {
                        e.httpHandler ? .updateHttpClientConfig(t, r)
                    },
                    httpHandlerConfigs: () => e.httpHandler.httpHandlerConfigs()
                }),
                i = e => ({
                    httpHandler: e.httpHandler()
                });
            r(66879);
            class s {
                constructor(e) {
                    this.method = e.method || "GET", this.hostname = e.hostname || "localhost", this.port = e.port, this.query = e.query || {}, this.headers = e.headers || {}, this.body = e.body, this.protocol = e.protocol ? ":" !== e.protocol.slice(-1) ? `${e.protocol}:` : e.protocol : "https:", this.path = e.path ? "/" !== e.path.charAt(0) ? `/${e.path}` : e.path : "/", this.username = e.username, this.password = e.password, this.fragment = e.fragment
                }
                static clone(e) {
                    var t;
                    let r = new s({ ...e,
                        headers: { ...e.headers
                        }
                    });
                    return r.query && (r.query = Object.keys(t = r.query).reduce((e, r) => {
                        let n = t[r];
                        return { ...e,
                            [r]: Array.isArray(n) ? [...n] : n
                        }
                    }, {})), r
                }
                static isInstance(e) {
                    return !!e && "method" in e && "protocol" in e && "hostname" in e && "path" in e && "object" == typeof e.query && "object" == typeof e.headers
                }
                clone() {
                    return s.clone(this)
                }
            }
            class a {
                constructor(e) {
                    this.statusCode = e.statusCode, this.reason = e.reason, this.headers = e.headers || {}, this.body = e.body
                }
                static isInstance(e) {
                    return !!e && "number" == typeof e.statusCode && "object" == typeof e.headers
                }
            }
        },
        94747: (e, t, r) => {
            "use strict";
            r.d(t, {
                D: () => n
            });
            let n = e => {
                let t;
                if ("string" == typeof e) return n(new URL(e));
                let {
                    hostname: r,
                    pathname: i,
                    port: s,
                    protocol: a,
                    search: o
                } = e;
                return o && (t = function(e) {
                    let t = {};
                    if (e = e.replace(/^\?/, ""))
                        for (let r of e.split("&")) {
                            let [e, n = null] = r.split("=");
                            e = decodeURIComponent(e), n && (n = decodeURIComponent(n)), e in t ? Array.isArray(t[e]) ? t[e].push(n) : t[e] = [t[e], n] : t[e] = n
                        }
                    return t
                }(o)), {
                    hostname: r,
                    port: s ? parseInt(s) : void 0,
                    protocol: a,
                    path: i,
                    query: t
                }
            }
        },
        98301: (e, t, r) => {
            "use strict";
            r.d(t, {
                p: () => eu
            });
            var n = r(55590),
                i = r(18840),
                s = r(5546),
                a = r(65790),
                o = r(69604),
                c = r(29425),
                u = r(89510),
                d = r(33694),
                l = r(63789),
                p = r(56067),
                f = r(85090),
                h = r(27652);
            let m = async (e, t, r) => ({
                    operation: (0, h.u)(t).operation,
                    region: await (0, h.t)(e.region)() || (() => {
                        throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                    })()
                }),
                y = e => {
                    let t = [];
                    return e.operation, t.push({
                        schemeId: "aws.auth#sigv4",
                        signingProperties: {
                            name: "kms",
                            region: e.region
                        },
                        propertiesExtractor: (e, t) => ({
                            signingProperties: {
                                config: e,
                                context: t
                            }
                        })
                    }), t
                },
                g = e => Object.assign((0, f.h)(e), {
                    authSchemePreference: (0, h.t)(e.authSchemePreference ? ? [])
                });
            var w = r(569);
            let b = {
                rE: "3.817.0"
            };
            var v = r(4783),
                S = r(33072),
                x = r(19879),
                E = r(17158),
                P = r(21101),
                A = r(31072),
                M = r(17564),
                O = r(94747),
                k = r(44527),
                C = r(14424),
                $ = r(87453),
                I = r(54073),
                R = r(83848);
            let T = "required",
                _ = "argv",
                N = "isSet",
                F = "booleanEquals",
                D = "error",
                j = "endpoint",
                U = "tree",
                z = "PartitionResult",
                L = {
                    [T]: !1,
                    type: "String"
                },
                B = {
                    [T]: !0,
                    default: !1,
                    type: "Boolean"
                },
                H = {
                    ref: "Endpoint"
                },
                K = {
                    fn: F,
                    [_]: [{
                        ref: "UseFIPS"
                    }, !0]
                },
                G = {
                    fn: F,
                    [_]: [{
                        ref: "UseDualStack"
                    }, !0]
                },
                q = {},
                V = {
                    fn: "getAttr",
                    [_]: [{
                        ref: z
                    }, "supportsFIPS"]
                },
                W = {
                    fn: F,
                    [_]: [!0, {
                        fn: "getAttr",
                        [_]: [{
                            ref: z
                        }, "supportsDualStack"]
                    }]
                },
                X = [K],
                J = [G],
                Y = [{
                    ref: "Region"
                }],
                Q = {
                    version: "1.0",
                    parameters: {
                        Region: L,
                        UseDualStack: B,
                        UseFIPS: B,
                        Endpoint: L
                    },
                    rules: [{
                        conditions: [{
                            fn: N,
                            [_]: [H]
                        }],
                        rules: [{
                            conditions: X,
                            error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                            type: D
                        }, {
                            conditions: J,
                            error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                            type: D
                        }, {
                            endpoint: {
                                url: H,
                                properties: q,
                                headers: q
                            },
                            type: j
                        }],
                        type: U
                    }, {
                        conditions: [{
                            fn: N,
                            [_]: Y
                        }],
                        rules: [{
                            conditions: [{
                                fn: "aws.partition",
                                [_]: Y,
                                assign: z
                            }],
                            rules: [{
                                conditions: [K, G],
                                rules: [{
                                    conditions: [{
                                        fn: F,
                                        [_]: [!0, V]
                                    }, W],
                                    rules: [{
                                        endpoint: {
                                            url: "https://kms-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                            properties: q,
                                            headers: q
                                        },
                                        type: j
                                    }],
                                    type: U
                                }, {
                                    error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                                    type: D
                                }],
                                type: U
                            }, {
                                conditions: X,
                                rules: [{
                                    conditions: [{
                                        fn: F,
                                        [_]: [V, !0]
                                    }],
                                    rules: [{
                                        endpoint: {
                                            url: "https://kms-fips.{Region}.{PartitionResult#dnsSuffix}",
                                            properties: q,
                                            headers: q
                                        },
                                        type: j
                                    }],
                                    type: U
                                }, {
                                    error: "FIPS is enabled but this partition does not support FIPS",
                                    type: D
                                }],
                                type: U
                            }, {
                                conditions: J,
                                rules: [{
                                    conditions: [W],
                                    rules: [{
                                        endpoint: {
                                            url: "https://kms.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                            properties: q,
                                            headers: q
                                        },
                                        type: j
                                    }],
                                    type: U
                                }, {
                                    error: "DualStack is enabled but this partition does not support DualStack",
                                    type: D
                                }],
                                type: U
                            }, {
                                endpoint: {
                                    url: "https://kms.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: q,
                                    headers: q
                                },
                                type: j
                            }],
                            type: U
                        }],
                        type: U
                    }, {
                        error: "Invalid Configuration: Missing Region",
                        type: D
                    }]
                },
                Z = new R.kS({
                    size: 50,
                    params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
                }),
                ee = (e, t = {}) => Z.get(e, () => (0, R.sO)(Q, {
                    endpointParams: e,
                    logger: t.logger
                }));
            R.mw.aws = I.UF;
            let et = e => ({
                apiVersion: "2014-11-01",
                base64Decoder: e ? .base64Decoder ? ? k.E,
                base64Encoder: e ? .base64Encoder ? ? k.n,
                disableHostPrefix: e ? .disableHostPrefix ? ? !1,
                endpointProvider: e ? .endpointProvider ? ? ee,
                extensions: e ? .extensions ? ? [],
                httpAuthSchemeProvider: e ? .httpAuthSchemeProvider ? ? y,
                httpAuthSchemes: e ? .httpAuthSchemes ? ? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: e => e.getIdentityProvider("aws.auth#sigv4"),
                    signer: new M.f2
                }],
                logger: e ? .logger ? ? new p.N4,
                serviceId: e ? .serviceId ? ? "KMS",
                urlParser: e ? .urlParser ? ? O.D,
                utf8Decoder: e ? .utf8Decoder ? ? C.a,
                utf8Encoder: e ? .utf8Encoder ? ? $.P
            });
            var er = r(27329);
            let en = e => {
                let t = (0, er.I)(e),
                    r = () => t().then(p.lT),
                    n = et(e);
                return { ...n,
                    ...e,
                    runtime: "browser",
                    defaultsMode: t,
                    bodyLengthChecker: e ? .bodyLengthChecker ? ? P.n,
                    credentialDefaultProvider: e ? .credentialDefaultProvider ? ? (e => () => Promise.reject(Error("Credential is missing"))),
                    defaultUserAgentProvider: e ? .defaultUserAgentProvider ? ? (0, S.p)({
                        serviceId: n.serviceId,
                        clientVersion: b.rE
                    }),
                    maxAttempts: e ? .maxAttempts ? ? A.Gz,
                    region: e ? .region ? ? (0, E.B)("Region is missing"),
                    requestHandler: x.NC.create(e ? .requestHandler ? ? r),
                    retryMode: e ? .retryMode ? ? (async () => (await r()).retryMode || A.L0),
                    sha256: e ? .sha256 ? ? v.I,
                    streamCollector: e ? .streamCollector ? ? x.kv,
                    useDualstackEndpoint: e ? .useDualstackEndpoint ? ? (() => Promise.resolve(o.VW)),
                    useFipsEndpoint: e ? .useFipsEndpoint ? ? (() => Promise.resolve(o.Hj))
                }
            };
            var ei = r(65002),
                es = r(92544);
            let ea = e => {
                    let t = e.httpAuthSchemes,
                        r = e.httpAuthSchemeProvider,
                        n = e.credentials;
                    return {
                        setHttpAuthScheme(e) {
                            let r = t.findIndex(t => t.schemeId === e.schemeId); - 1 === r ? t.push(e) : t.splice(r, 1, e)
                        },
                        httpAuthSchemes: () => t,
                        setHttpAuthSchemeProvider(e) {
                            r = e
                        },
                        httpAuthSchemeProvider: () => r,
                        setCredentials(e) {
                            n = e
                        },
                        credentials: () => n
                    }
                },
                eo = e => ({
                    httpAuthSchemes: e.httpAuthSchemes(),
                    httpAuthSchemeProvider: e.httpAuthSchemeProvider(),
                    credentials: e.credentials()
                }),
                ec = (e, t) => {
                    let r = Object.assign((0, ei.Rq)(e), (0, p.xA)(e), (0, es.eS)(e), ea(e));
                    return t.forEach(e => e.configure(r)), Object.assign(e, (0, ei.$3)(r), (0, p.uv)(r), (0, es.jt)(r), eo(r))
                };
            class eu extends p.Kj {
                config;
                constructor(...[e]) {
                    let t = en(e || {});
                    super(t), this.initConfig = t;
                    let r = (0, w.v)(t),
                        p = (0, a.Dc)(r),
                        f = (0, l.$z)(p),
                        h = (0, o.TD)(f),
                        y = (0, n.OV)(h),
                        b = ec(g((0, d.Co)(y)), e ? .extensions || []);
                    this.config = b, this.middlewareStack.use((0, a.sM)(this.config)), this.middlewareStack.use((0, l.ey)(this.config)), this.middlewareStack.use((0, u.vK)(this.config)), this.middlewareStack.use((0, n.TC)(this.config)), this.middlewareStack.use((0, i.Y7)(this.config)), this.middlewareStack.use((0, s.n4)(this.config)), this.middlewareStack.use((0, c.wB)(this.config, {
                        httpAuthSchemeParametersProvider: m,
                        identityProviderConfigProvider: async e => new c.h$({
                            "aws.auth#sigv4": e.credentials
                        })
                    })), this.middlewareStack.use((0, c.lW)(this.config))
                }
                destroy() {
                    super.destroy()
                }
            }
        },
        99146: (e, t, r) => {
            "use strict";
            r(92544), r(27652);
            class n {
                constructor(e, t = new Map) {
                    this.namespace = e, this.schemas = t
                }
                static
                for (e) {
                    return n.registries.has(e) || n.registries.set(e, new n(e)), n.registries.get(e)
                }
                register(e, t) {
                    let r = this.normalizeShapeId(e);
                    n.for(this.getNamespace(e)).schemas.set(r, t)
                }
                getSchema(e) {
                    let t = this.normalizeShapeId(e);
                    if (!this.schemas.has(t)) throw Error(`@smithy/core/schema - schema not found for ${t}`);
                    return this.schemas.get(t)
                }
                getBaseException() {
                    for (let [e, t] of this.schemas.entries())
                        if (e.startsWith("smithyts.client.synthetic.") && e.endsWith("ServiceException")) return t
                }
                find(e) {
                    return [...this.schemas.values()].find(e)
                }
                destroy() {
                    n.registries.delete(this.namespace), this.schemas.clear()
                }
                normalizeShapeId(e) {
                    return e.includes("#") ? e : this.namespace + "#" + e
                }
                getNamespace(e) {
                    return this.normalizeShapeId(e).split("#")[0]
                }
            }
            n.registries = new Map;
            class i {
                constructor(e, t) {
                    this.name = e, this.traits = t
                }
            }
            class s extends i {
                constructor(e, t, r, n) {
                    super(e, t), this.name = e, this.traits = t, this.memberNames = r, this.memberList = n, this.members = {};
                    for (let e = 0; e < r.length; ++e) this.members[r[e]] = Array.isArray(n[e]) ? n[e] : [n[e], 0]
                }
            }
        }
    }
]);
//# sourceMappingURL=15110-04d51d67866b610e.js.map
