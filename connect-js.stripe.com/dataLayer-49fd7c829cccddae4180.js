/*! For license information please see dataLayer-49fd7c829cccddae4180.js.LICENSE.txt */
(() => {
    var e, t, n, r, i = {
            26067: (e, t, n) => {
                "use strict";

                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                n.d(t, {
                    LJ: () => Z,
                    mM: () => K
                });
                var i = {
                        authentication: {
                            necessary: !0
                        },
                        "fraud-prevention": {
                            necessary: !0
                        },
                        security: {
                            necessary: !0
                        },
                        functionality: {
                            necessary: !0
                        },
                        preferences: {
                            necessary: !1,
                            token: "p"
                        },
                        statistics: {
                            necessary: !1,
                            token: "s"
                        },
                        advertising: {
                            necessary: !1,
                            token: "a"
                        },
                        essential: {
                            necessary: !0
                        },
                        functional: {
                            necessary: !1,
                            token: "f"
                        }
                    },
                    o = function(e, t) {
                        return (o = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            })(e, t)
                    };

                function s(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }
                var a = function() {
                    return (a = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                };

                function c(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function s(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                e(t)
                            }))).then(s, a)
                        }
                        c((r = r.apply(e, t || [])).next())
                    }))
                }

                function u(e, t) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                s.label = i[1], i = o;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(o);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, s)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                }

                function l(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                    return e.concat(r || Array.prototype.slice.call(t))
                }
                var p = function(e, t, n) {
                        return function(e, t) {
                            var n;
                            n = function() {
                                function e() {
                                    for (var e = 0, t = {}; e < arguments.length; e++) {
                                        var n = arguments[e];
                                        for (var r in n) t[r] = n[r]
                                    }
                                    return t
                                }

                                function t(e) {
                                    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                                }
                                return function n(r) {
                                    function i() {}

                                    function o(t, n, o) {
                                        if ("undefined" != typeof document) {
                                            "number" == typeof(o = e({
                                                path: "/"
                                            }, i.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : "";
                                            try {
                                                var s = JSON.stringify(n);
                                                /^[\{\[]/.test(s) && (n = s)
                                            } catch (e) {}
                                            n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                                            var a = "";
                                            for (var c in o) o[c] && (a += "; " + c, !0 !== o[c] && (a += "=" + o[c].split(";")[0]));
                                            return document.cookie = t + "=" + n + a
                                        }
                                    }

                                    function s(e, n) {
                                        if ("undefined" != typeof document) {
                                            for (var i = {}, o = document.cookie ? document.cookie.split("; ") : [], s = 0; s < o.length; s++) {
                                                var a = o[s].split("="),
                                                    c = a.slice(1).join("=");
                                                n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                                                try {
                                                    var u = t(a[0]);
                                                    if (c = (r.read || r)(c, u) || t(c), n) try {
                                                        c = JSON.parse(c)
                                                    } catch (e) {}
                                                    if (i[u] = c, e === u) break
                                                } catch (e) {}
                                            }
                                            return e ? i[e] : i
                                        }
                                    }
                                    return i.set = o, i.get = function(e) {
                                        return s(e, !1)
                                    }, i.getJSON = function(e) {
                                        return s(e, !0)
                                    }, i.remove = function(t, n) {
                                        o(t, "", e(n, {
                                            expires: -1
                                        }))
                                    }, i.defaults = {}, i.withConverter = n, i
                                }((function() {}))
                            }, e.exports = n()
                        }(n = {
                            path: void 0,
                            exports: {},
                            require: function(e, t) {
                                return function() {
                                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                                }(null == t && n.path)
                            }
                        }, n.exports), n.exports
                    }(),
                    d = function() {
                        try {
                            return !!window
                        } catch (e) {
                            return !1
                        }
                    }() && "object" === ("undefined" == typeof window ? "undefined" : r(window)) && "object" === ("undefined" == typeof document ? "undefined" : r(document)) && 9 === document.nodeType;

                function f(e) {
                    if (!d) return !1;
                    var t;
                    try {
                        t = window[e];
                        var n = "__storage_test__";
                        return t.setItem(n, n), t.removeItem(n), !0
                    } catch (e) {
                        return !(!(e instanceof DOMException) || 22 !== e.code && 1014 !== e.code && "QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name || !t || 0 === t.length)
                    }
                }
                var h, m = function(e, t) {
                        return !!t && (e === t || 0 !== t.length && "." === t[0] && (t === ".".concat(e) || e.length > t.length && e.endsWith(t)))
                    },
                    g = function(e) {
                        return !!(e.match(/(\.)?link.com?\//i) || e.match("mkt-mydev.dev.stripe.me") && e.match("host=link") || e.match("-mkt.tunnel.stripe.me") && e.match("host=link") || e.match(/mkt(\.qa)?\.corp\.stripe\.com/i) && e.match("host=link") || e.match("link_app-mydev.dev.stripe.me") || e.match("link_support_site-mydev.dev.stripe.com"))
                    },
                    y = d && (h = window.location.hostname, ["stripe.com", "stripe.dev", "stripe.global", "stripe.partners", "increment.com", "link.co", "link.com"].some((function(e) {
                        var t = "(^|.)".concat(e.replace(/\./g, "\\."), "$");
                        return new RegExp(t).test(h)
                    }))),
                    v = "[stripe-cookies]",
                    _ = function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        y || console.warn.apply(console, l(["".concat(v, " ").concat(e)], t, !1))
                    },
                    b = function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        y || console.error.apply(console, l(["".concat(v, " ").concat(e)], t, !1))
                    },
                    w = function(e, t) {
                        void 0 === t && (t = d ? window.location.href : "");
                        var n = function(e) {
                            return void 0 === e && (e = d ? window.location.href : ""), g(e) ? e.match(/(\.)?link.co([^m]|\b)/i) ? "https://link.co" : "https://link.com" : "https://stripe.com"
                        }(t) + e;
                        if (!d || !window.URL || !window.URLSearchParams) return n;
                        var r = new URL(t),
                            i = new URL(n);
                        if (r.hostname.match("-mydev.dev.stripe.me") || r.hostname.match("-stripejs.tunnel.stripe.me")) {
                            var o = r.hostname.split(".", 1)[0],
                                s = void 0;
                            return o.split("--", 1)[0] !== o ? (s = o.split("--", 1)[0], s += "-") : s = o.split("-", 1)[0], i.hostname = "".concat(s, "-mkt-mydev.dev.stripe.me"), o.includes("manage-dashboard-proxy-mydev") ? i.hostname = "stripe.com" : o.includes("manage-qa-dashboard-proxy-mydev") && (i.hostname = "qa.stripe.com"), n.includes("link.co") && (i.search = new URLSearchParams({
                                $host: "link"
                            }).toString()), i.toString()
                        }
                        return r.hostname.match(/(^|-)(dev|iso|corpiso|corpdev)\.dev\.stripe\.me$/) ? n.replace("stripe.com", r.hostname) : r.hostname.match(/(^|\.)qa\.stripe\.com$/) || r.hostname.match(/(^|\.)(link|admin|docs)\.qa\.corp\.stripe\.com$/) || r.hostname.match(/(^|\.)qa-dashboard\.stripe\.com$/) || r.hostname.match(/(^|\.)qa-docs\.stripe\.com$/) ? n.replace("stripe.com", "qa.stripe.com") : r.hostname.match(/(^|\.)preprod\.stripe\.com$/) || r.hostname.match(/(^|\.)(link|admin|docs)\.preprod\.corp\.stripe\.com$/) || r.hostname.match(/(^|\.)preprod-dashboard\.stripe\.com$/) || r.hostname.match(/(^|\.)preprod-docs\.stripe\.com$/) ? n.replace("stripe.com", "preprod.stripe.com") : r.hostname.match(/(^|\.)qa\.link\.co$/) || r.hostname.match(/(^|\.)qa-app\.stripe\.co$/) ? n.replace("link.co", "qa.link.co") : r.hostname.match(/(^|\.)qa\.link\.com$/) || r.hostname.match(/(^|\.)qa-app\.link\.com$/) ? n.replace("link.com", "qa.link.com") : r.hostname.match(/(^|\.)preprod\.link\.co$/) || r.hostname.match(/(^|\.)preprod-app\.stripe\.co$/) ? n.replace("link.co", "preprod.link.co") : r.hostname.match(/(^|\.)preprod\.link\.com$/) || r.hostname.match(/(^|\.)preprod-app\.link\.com$/) ? n.replace("link.com", "preprod.link.com") : r.hostname.match(/mkt(\.qa)?\.corp\.stripe\.com/i) || r.hostname.match("-mkt.tunnel.stripe.me") ? (i.hostname = r.hostname, n.includes("link.co") && (i.search = new URLSearchParams({
                            $host: "link"
                        }).toString()), i.toString()) : i.toString()
                    },
                    S = ["https://c.stripe.dev/cookie", "https://c.stripe.global/cookie", "https://c.stripe.partners/cookie", "https://c.increment.com/cookie"],
                    x = Object.keys(i),
                    E = function() {
                        function e(e, t, n) {
                            this._version = e, this._permissions = n, this._timestamp = t
                        }
                        return Object.defineProperty(e.prototype, "version", {
                            get: function() {
                                return this._version
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "timestamp", {
                            get: function() {
                                return this._timestamp
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.get = function(e) {
                            return this._permissions[e]
                        }, e.prototype.getAll = function() {
                            return a({}, this._permissions)
                        }, e.prototype.toString = function() {
                            var e = this,
                                t = x.reduce((function(t, n) {
                                    var r = i[n];
                                    return r && !r.necessary && e._permissions[n] ? l(l([], t, !0), [r.token], !1) : t
                                }), []).sort(),
                                n = Math.floor(this.timestamp.valueOf() / 1e3);
                            return "".concat(this._version, ":").concat(n, "|").concat(t.join(""))
                        }, e.deserialize = function(t) {
                            var n = t.split(":", 2),
                                r = n[0],
                                o = n[1].split("|"),
                                s = new Date(1e3 * Number(o[0])),
                                a = o[1].split("");
                            return new e(r, s, x.reduce((function(e, t) {
                                var n = i[t];
                                return n.necessary ? e[t] = !0 : n.token && (e[t] = a.indexOf(n.token) >= 0), e
                            }), {}))
                        }, e.get = function() {
                            try {
                                var t = p.get("cookie-perms");
                                if (t) return e.deserialize(t)
                            } catch (e) {}
                            return null
                        }, e.set = function(t) {
                            return c(this, void 0, void 0, (function() {
                                var n, r, i = this;
                                return u(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return n = function(e) {
                                                return c(i, void 0, void 0, (function() {
                                                    var n;
                                                    return u(this, (function(r) {
                                                        switch (r.label) {
                                                            case 0:
                                                                return r.trys.push([0, 2, , 3]), [4, fetch(e, {
                                                                    method: "post",
                                                                    body: JSON.stringify(t),
                                                                    credentials: "include",
                                                                    headers: {
                                                                        "Content-Type": "application/json",
                                                                        "X-Requested-With": "cookies"
                                                                    }
                                                                })];
                                                            case 1:
                                                                return [2, r.sent()];
                                                            case 2:
                                                                return (n = r.sent()) instanceof Error ? b(n.message) : b("Unexpected error", n), [3, 3];
                                                            case 3:
                                                                return [2]
                                                        }
                                                    }))
                                                }))
                                            }, r = w("/cookie-settings/update"), g(r) ? [4, n(r)] : [3, 2];
                                        case 1:
                                            return o.sent(), [3, 4];
                                        case 2:
                                            return [4, Promise.all(l([r], S, !0).map(n))];
                                        case 3:
                                            o.sent(), o.label = 4;
                                        case 4:
                                            return [2, e.get()]
                                    }
                                }))
                            }))
                        }, e.allowAll = function() {
                            return c(this, void 0, void 0, (function() {
                                var t;
                                return u(this, (function(n) {
                                    return t = x.reduce((function(e, t) {
                                        return i[t].necessary || (e[t] = !0), e
                                    }), {}), [2, e.set(t)]
                                }))
                            }))
                        }, e.rejectAll = function() {
                            return c(this, void 0, void 0, (function() {
                                var t;
                                return u(this, (function(n) {
                                    return t = x.reduce((function(e, t) {
                                        return i[t].necessary || (e[t] = !1), e
                                    }), {}), [2, e.set(t)]
                                }))
                            }))
                        }, e
                    }(),
                    k = function() {
                        function e(e) {
                            this._getPermissions = e, this._callbacks = []
                        }
                        return e.prototype.addCallback = function(e) {
                            this._callbacks.indexOf(e) >= 0 ? b("PermissionsWatcher.addCallback() was called for a function that was already registered with the PermissionsWatcher.") : (this._callbacks.push(e), this._interval || this._pollForPermissionsChanges())
                        }, e.prototype.removeCallback = function(e) {
                            var t = this._callbacks.indexOf(e);
                            t < 0 ? b("PermissionsWatcher.removeCallback() was called for a function that wasn't registered with the PermissionsWatcher.") : (this._callbacks.splice(t, 1), this._interval && 0 === this._callbacks.length && (clearInterval(this._interval), this._interval = null))
                        }, e.prototype._pollForPermissionsChanges = function() {
                            var e = this,
                                t = this._getPermissions();
                            this._interval = setInterval((function() {
                                var n = e._getPermissions();
                                if (null !== n) {
                                    var r = null === t && null !== n,
                                        i = t && n && t.timestamp !== n.timestamp;
                                    (r || i) && e._callbacks.forEach((function(e) {
                                        return e(n)
                                    })), t = n
                                }
                            }), 100)
                        }, e
                    }(),
                    O = null,
                    I = function() {
                        function e(e) {
                            this._watcher = new k((function() {
                                return E.get()
                            })), e.enforcementMode && (this._enforcementModeValue = e.enforcementMode)
                        }
                        return e.prototype.getEnforcementMode = function() {
                            return c(this, void 0, void 0, (function() {
                                return u(this, (function(e) {
                                    return [2, this.getEnforcementModeMaybeSync()]
                                }))
                            }))
                        }, e.prototype.getEnforcementModeMaybeSync = function() {
                            var e = this;
                            if (!this._enforcementModeValue) {
                                var t = (O || (O = Promise.race([c(void 0, void 0, void 0, (function() {
                                    var e, t;
                                    return u(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                e = "restricted", n.label = 1;
                                            case 1:
                                                return n.trys.push([1, 4, , 5]), [4, fetch(w("/cookie-settings/enforcement-mode"))];
                                            case 2:
                                                return [4, n.sent().json()];
                                            case 3:
                                                return "restricted" !== (t = n.sent().mode) && "open" !== t && "functional" !== t || (e = t), [3, 5];
                                            case 4:
                                                return n.sent(), [3, 5];
                                            case 5:
                                                return [2, e]
                                        }
                                    }))
                                })), new Promise((function(e) {
                                    setTimeout((function() {
                                        return e("restricted")
                                    }), 1e3)
                                }))])), O);
                                t.then((function(t) {
                                    e._enforcementModeValue = t
                                })), this._enforcementModeValue = t
                            }
                            return this._enforcementModeValue
                        }, e.prototype.getPermissions = function() {
                            return E.get()
                        }, e.prototype.setPermissions = function(e) {
                            return c(this, void 0, void 0, (function() {
                                return u(this, (function(t) {
                                    return [2, E.set(e)]
                                }))
                            }))
                        }, e.prototype.allowAll = function() {
                            return c(this, void 0, void 0, (function() {
                                return u(this, (function(e) {
                                    return [2, E.allowAll()]
                                }))
                            }))
                        }, e.prototype.rejectAll = function() {
                            return c(this, void 0, void 0, (function() {
                                return u(this, (function(e) {
                                    return [2, E.rejectAll()]
                                }))
                            }))
                        }, e.prototype.isCategoryAllowed = function(e, t) {
                            return void 0 === t && (t = !1), c(this, void 0, void 0, (function() {
                                return u(this, (function(n) {
                                    return [2, this.isCategoryAllowedMaybeSync(e, t)]
                                }))
                            }))
                        }, e.prototype.isCategoryAllowedMaybeSync = function(e, t) {
                            void 0 === t && (t = !1);
                            var n = E.get();
                            if (i[e].necessary) return !0;
                            if (!t && "advertising" === e && "undefined" != typeof navigator) {
                                var r = navigator;
                                if (null == r ? void 0 : r.globalPrivacyControl) return !1
                            }
                            if (n) return "1" === n.version && "functional" === e ? !!n.get("statistics") || !!n.get("preferences") : "2" !== n.version || "statistics" !== e && "preferences" !== e ? !!n.get(e) : !!n.get("functional");
                            var o = this.getEnforcementModeMaybeSync();
                            return "string" == typeof o ? "functional" === o ? "advertising" !== e : "restricted" !== o : o.then((function(t) {
                                return "functional" === t ? "advertising" !== e : "restricted" !== t
                            }))
                        }, e.prototype.areCategoriesAllowed = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return c(this, void 0, void 0, (function() {
                                var t, n, r;
                                return u(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            t = 0, n = e, i.label = 1;
                                        case 1:
                                            return t < n.length ? (r = n[t], [4, this.isCategoryAllowed(r)]) : [3, 4];
                                        case 2:
                                            if (!i.sent()) return [2, !1];
                                            i.label = 3;
                                        case 3:
                                            return t++, [3, 1];
                                        case 4:
                                            return [2, !0]
                                    }
                                }))
                            }))
                        }, e.prototype.shouldShowBanner = function() {
                            return c(this, void 0, void 0, (function() {
                                var e;
                                return u(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.getPermissions() ? [2, !1] : [4, this.getEnforcementMode()];
                                        case 1:
                                            return [2, "restricted" === (e = t.sent()) || "functional" === e]
                                    }
                                }))
                            }))
                        }, e.prototype.watchPermissions = function(e) {
                            this._watcher.addCallback(e)
                        }, e.prototype.unwatchPermissions = function(e) {
                            this._watcher.removeCallback(e)
                        }, e
                    }(),
                    A = function() {
                        function e(e, t) {
                            this.name = e, this.category = t.category, this.lifetime = t.lifetime, this.domains = t.domains, this.secure = !(!1 === t.secure), this.httpOnly = !(!1 === t.httpOnly), this.sameSite = t.sameSite || "Lax", this.name.indexOf("*") >= 0 ? (this.inexact = !0, this._regexp = new RegExp(e.replace("*", ".+"))) : this.inexact = !1
                        }
                        return e.prototype.isMatch = function(e) {
                            return this.name === e || this._regexp && this._regexp.test(e)
                        }, e.prototype.resolveDomain = function(e, t) {
                            if (!this.name.startsWith("__Host-")) {
                                var n = [];
                                this.domains && (n = this.domains.map((function(e) {
                                    return t[e] || e
                                })));
                                var r = e;
                                if (!r && d && (r = document.location.host), r && r.match("dev.stripe.me")) return ".dev.stripe.me";
                                if (r && !n.some((function(e) {
                                        return m(r, e)
                                    }))) throw new Error("The ".concat(this.name, " cookie is not allowed to be set on the ").concat(r, " domain."));
                                return r || n[0]
                            }
                        }, e.prototype.resolveExpiry = function(e) {
                            if ("forever" !== this.lifetime) {
                                if ("session" !== this.lifetime) {
                                    var t = this.lifetime || 0;
                                    if (e) {
                                        if (t < e) throw new Error("The ".concat(this.name, " cookie has a maximum lifetime of ").concat(this.lifetime, " seconds."));
                                        t = e
                                    }
                                    return new Date(Date.now() + 1e3 * t)
                                }
                                if (e) throw new Error("The ".concat(this.name, " cookie cannot have a lifetime, because it is a session cookie."))
                            }
                        }, e
                    }(),
                    T = {
                        __stripe_mid: {
                            category: "essential",
                            domains: [".checkout.stripe.com", ".link.co", ".link.com", "request"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        __stripe_orig_props: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        __stripe_sid: {
                            category: "essential",
                            domains: [".checkout.stripe.com", ".link.co", ".link.com", "request"],
                            lifetime: 1800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _cfduid: {
                            category: "advertising",
                            domains: [".stripecdn.com", ".stripe.com", ".go.stripe.global"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _fbp: {
                            category: "advertising",
                            domains: [".facebook.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 7862400,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _forum_session: {
                            category: "authentication",
                            domains: [".discuss.stripe.community"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        _ga: {
                            category: "advertising",
                            domains: [".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "_ga*": {
                            category: "functional",
                            domains: [".stripe.com", ".stripe.events", ".go.stripe.global", ".link.co", ".link.com", ".portal.stripe.partners"],
                            lifetime: 5184e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _gat: {
                            category: "functional",
                            domains: [".stripe.com", ".stripe.events", ".go.stripe.global", ".portal.stripe.partners"],
                            lifetime: 60,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _gat_stripe_com: {
                            category: "functional",
                            domains: [".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 60,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "_gat_UA-12675062-5": {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 60,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "_gat_UA-12675062-14": {
                            category: "functional",
                            domains: [".link.co", ".link.com"],
                            lifetime: 60,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "_gac_gb_G-SEKFWD1C9J": {
                            category: "advertising",
                            domains: [".stripe.com", ".go.stripe.global"],
                            lifetime: 5184e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _gcl_au: {
                            category: "advertising",
                            domains: [".stripe.com", ".go.stripe.global"],
                            lifetime: 7862400,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _gid: {
                            category: "functional",
                            domains: [".stripe.com", ".go.stripe.global", ".link.co", ".link.com", ".portal.stripe.partners"],
                            lifetime: 86400,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _GRECAPTCHA: {
                            category: "essential",
                            domains: [".stripe.com"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        _guid: {
                            category: "advertising",
                            domains: [".stripe.com", ".linkedin.com", ".ads.linkedin.com", ".go.stripe.global"],
                            lifetime: 86400,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _mkto_trk: {
                            category: "advertising",
                            domains: [".stripecdn.com", ".stripe.com", ".go.stripe.global"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _pxhd: {
                            category: "advertising",
                            domains: [".stripecdn.com", ".stripe.com", ".go.stripe.global"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _t: {
                            category: "authentication",
                            domains: [".discuss.stripe.community"],
                            lifetime: 5270400,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        aam_uuid: {
                            category: "advertising",
                            domains: [".stripe.com", ".linkedin.com", ".ads.linkedin.com", ".go.stripe.global"],
                            lifetime: 2592e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        act_token: {
                            category: "essential",
                            domains: ["dashboard.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        "allow-unsupported-browser": {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        "AMCV_*": {
                            category: "advertising",
                            domains: [".stripe.com", ".linkedin.com", ".ads.linkedin.com", ".go.stripe.global"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        AnalyticsSyncHistory: {
                            category: "advertising",
                            domains: [".stripe.com", ".linkedin.com", ".ads.linkedin.com", ".go.stripe.global"],
                            lifetime: 2592e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        anonymous_overrides: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 1209600,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        ark_in_cad_opt_out: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        art_token: {
                            category: "essential",
                            domains: ["dashboard.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        "__Host-arct_token": {
                            category: "essential",
                            domains: ["dashboard.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        atlas_invite: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        bcookie: {
                            category: "advertising",
                            domains: [".stripe.com", ".linkedin.com", ".ads.linkedin.com", ".go.stripe.global"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        c_user: {
                            category: "advertising",
                            domains: [".clearbit.com", ".facebook.com", ".go.stripe.global", ".stripe.com", ".stripe.events"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        cbt_token: {
                            category: "essential",
                            domains: ["dashboard.stripe.com", "connect.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        eid: {
                            category: "functional",
                            domains: [".checkout.stripe.com"],
                            lifetime: 5270400,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        cid: {
                            category: "functional",
                            domains: [".stripe.com", ".link.com", ".link.co"],
                            lifetime: 7862400,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Host-cliauth_token": {
                            category: "authentication",
                            domains: ["dashboard.stripe.com"],
                            lifetime: 180,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Strict"
                        },
                        "color-scheme": {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        connect_locale: {
                            category: "essential",
                            domains: [".connect.stripe.com", ".express.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "cookie-perms": {
                            category: "essential",
                            domains: [".stripe.com", ".stripe.dev", ".go.stripe.global", ".increment.com", ".link.co", ".link.com"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        country: {
                            category: "essential",
                            domains: [".link.co", ".link.com", ".stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        csv: {
                            category: "advertising",
                            domains: [".reddit.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        datr: {
                            category: "advertising",
                            domains: [".facebook.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        disable_cmd_f_override: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "docs.prefs": {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        double_cmd_f_uses: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        dpr: {
                            category: "advertising",
                            domains: [".facebook.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        edgebucket: {
                            category: "advertising",
                            domains: [".reddit.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 39484800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        ev: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 5270400,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "expanded-topics": {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        fr: {
                            category: "advertising",
                            domains: [".facebook.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 7862400,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Secure-f-visitor-id": {
                            category: "essential",
                            domains: [".link.com", ".stripe.com", ".stripecdn.com"],
                            lifetime: 86400,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "None"
                        },
                        gh_src: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        GPS: {
                            category: "advertising",
                            domains: [".youtube.com"],
                            lifetime: 1800,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        handoff: {
                            category: "essential",
                            domains: [".stripe.com"],
                            lifetime: 9e4,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        has_intentionally_selected_curl: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Host-has_recently_requested_netsuite_connector_*": {
                            category: "essential",
                            domains: ["marketplace.stripe.com"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Host-has_recently_requested_salesforce_cpq_connector_*": {
                            category: "essential",
                            domains: ["marketplace.stripe.com"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Host-has_recently_requested_sap_connector_*": {
                            category: "essential",
                            domains: ["marketplace.stripe.com"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        IDE: {
                            category: "advertising",
                            domains: [".doubleclick.net"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        invite: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        lang: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        lc_token: {
                            category: "essential",
                            domains: ["dashboard.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        _ldbrbid: {
                            category: "advertising",
                            domains: [".line.me", ".stripe.com", ".go.stripe.global"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        li_oatml: {
                            category: "advertising",
                            domains: [".stripe.com", ".linkedin.com", ".ads.linkedin.com", ".go.stripe.global"],
                            lifetime: 2592e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        li_sugr: {
                            category: "advertising",
                            domains: [".stripe.com", ".linkedin.com", ".ads.linkedin.com", ".go.stripe.global"],
                            lifetime: 7862400,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        liap: {
                            category: "advertising",
                            domains: [".stripe.com", ".linkedin.com", ".ads.linkedin.com", ".go.stripe.global"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        lidc: {
                            category: "advertising",
                            domains: [".stripe.com", ".linkedin.com", ".ads.linkedin.com", ".go.stripe.global", ".stripe.events"],
                            lifetime: 86400,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Host-LinkSession": {
                            category: "authentication",
                            domains: ["checkout-cookies.stripe.com", "checkout-cookies.link.com", "merchant-ui-api.stripe.com"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "None"
                        },
                        "__Secure-LinkSessionPresent": {
                            category: "essential",
                            domains: [".stripe.com", ".link.com"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "None"
                        },
                        "__Secure-HasLoggedIntoLinkApp": {
                            category: "essential",
                            domains: [".link.com"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "None"
                        },
                        lissc: {
                            category: "advertising",
                            domains: [".stripe.com", ".linkedin.com", ".ads.linkedin.com", ".go.stripe.global"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        locale: {
                            category: "essential",
                            domains: [".link.co", ".link.com", ".stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        loid: {
                            category: "advertising",
                            domains: [".reddit.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        m: {
                            category: "essential",
                            domains: [".m.stripe.com"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "m-tz": {
                            category: "advertising",
                            domains: [".stripe.com", ".go.stripe.global", ".stripe.events"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "m-ans_frontend_early_version": {
                            category: "advertising",
                            domains: [".stripe.com", ".go.stripe.global", ".stripe.events"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "m-s": {
                            category: "advertising",
                            domains: [".stripe.com", ".go.stripe.global", ".stripe.events"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "m-b_strict": {
                            category: "advertising",
                            domains: [".stripe.com", ".go.stripe.global", ".stripe.events"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "m-b_lax": {
                            category: "advertising",
                            domains: [".stripe.com", ".go.stripe.global", ".stripe.events"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "m-uid": {
                            category: "advertising",
                            domains: [".stripe.com", ".go.stripe.global", ".stripe.events"],
                            lifetime: 57888e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "m-b": {
                            category: "advertising",
                            domains: [".stripe.com", ".go.stripe.global", ".stripe.events"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        machine_identifier: {
                            category: "essential",
                            domains: [".stripe.com"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        merchant: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "None"
                        },
                        over18: {
                            category: "advertising",
                            domains: [".reddit.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 47347200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        pay_sid: {
                            category: "authentication",
                            domains: [".link.co", ".link.com", ".link.corp.stripe.com", ".link.qa.corp.stripe.com", ".link-support-site.corp.stripe.com", ".link-support-site.qa.corp.stripe.com", ".link-support-site.preprod.corp.stripe.com"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        private_machine_identifier: {
                            category: "essential",
                            domains: [".stripe.com"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "None"
                        },
                        prt_token: {
                            category: "essential",
                            domains: ["dashboard.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        "recent-views": {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        recent_srs: {
                            category: "advertising",
                            domains: [".reddit.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "saml_sca_success_for_*": {
                            category: "authentication",
                            domains: ["dashboard.stripe.com"],
                            lifetime: 30,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        samlit_email: {
                            category: "authentication",
                            domains: ["dashboard.stripe.com"],
                            lifetime: 960,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        samlit_token: {
                            category: "authentication",
                            domains: ["dashboard.stripe.com"],
                            lifetime: 960,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        sb: {
                            category: "advertising",
                            domains: [".facebook.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        sca_migration_not_started_alert_actioned: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        scfc: {
                            category: "essential",
                            domains: [".stripe.com"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        sdsc: {
                            category: "advertising",
                            domains: [".stripe.com", ".linkedin.com", ".ads.linkedin.com", ".go.stripe.global"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Host-sessions_on_demand_qualified": {
                            category: "essential",
                            domains: ["stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        session_tracker: {
                            category: "advertising",
                            domains: [".reddit.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        sp_adid: {
                            category: "advertising",
                            domains: ["spotify.com", "stripe.com"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        sp_landing: {
                            category: "advertising",
                            domains: ["spotify.com", "stripe.com"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        sp_t: {
                            category: "advertising",
                            domains: ["spotify.com", "stripe.com"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Secure-sid": {
                            category: "functional",
                            domains: [".stripe.com", ".link.com"],
                            lifetime: 1800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        token_v2: {
                            category: "advertising",
                            domains: [".reddit.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        "__Host-session": {
                            category: "authentication",
                            domains: ["support.stripe.com", "support-conversations.stripe.com", "stripe.com", "dashboard.stripe.com", "connect.stripe.com", "express.stripe.com", "marketplace.stripe.com", "docs.stripe.com", "dashboard-admin.stripe.com", "site-admin.stripe.com", "support-admin.corp.stripe.com", "manage.stripe.com", "billing.stripe.com", "pay.stripe.com", "verify-shopify.stripe.com"],
                            lifetime: 7776e3,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "None"
                        },
                        "__Host-auth_token": {
                            category: "authentication",
                            domains: ["dashboard.stripe.com", "dashboard-admin.stripe.com", "docs.stripe.com", "marketplace.stripe.com"],
                            lifetime: 7776e3,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        "__Host-stripe.link_app.csrf": {
                            category: "essential",
                            domains: ["app.link.co", "app.link.com", "link.corp.stripe.com", "link.qa.corp.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Strict"
                        },
                        "__Host-shopify_app_session": {
                            category: "authentication",
                            domains: ["sbyog-ppp-external.stripe.com"],
                            lifetime: 86400,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        site_sid: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 7200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "site-auth": {
                            category: "essential",
                            domains: [".stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        skip_mismatched_country_check: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        skip_tfa_interrupt: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 2592e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        spin: {
                            category: "advertising",
                            domains: [".facebook.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        spl: {
                            category: "advertising",
                            domains: [".stripe.events"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "stripe.csrf": {
                            category: "essential",
                            domains: [".stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "None"
                        },
                        "stripe.appmarketplace.csrf": {
                            category: "essential",
                            domains: ["marketplace.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Strict"
                        },
                        "stripe.climate.csrf": {
                            category: "essential",
                            domains: ["climate.stripe.com", "edge-climate.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Strict"
                        },
                        "stripe.customerportal.csrf": {
                            category: "essential",
                            domains: ["billing.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Strict"
                        },
                        "stripe.docs.csrf": {
                            category: "essential",
                            domains: ["docs.stripe.com", "edge-docs.stripe.com", "docs.corp.stripe.com", "docs.qa.corp.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Strict"
                        },
                        svt_token: {
                            category: "essential",
                            domains: ["dashboard.stripe.com", "connect.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        tuuid: {
                            category: "advertising",
                            domains: [".demandbase.com", ".stripe.com"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        tuuid_lu: {
                            category: "advertising",
                            domains: [".demandbase.com", ".stripe.com"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        U: {
                            category: "advertising",
                            domains: [".adsymptotic.com", ".stripe.com", ".go.stripe.global"],
                            lifetime: 7862400,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        UserMatchHistory: {
                            category: "advertising",
                            domains: [".stripe.com", ".linkedin.com", ".ads.linkedin.com", ".go.stripe.global"],
                            lifetime: 2592e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        user: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        VISITOR_INFO1_LIVE: {
                            category: "advertising",
                            domains: [".youtube.com"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        wd: {
                            category: "advertising",
                            domains: [".facebook.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        xs: {
                            category: "advertising",
                            domains: [".facebook.com", ".stripe.com", ".stripe.events", ".go.stripe.global"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        XA: {
                            category: "advertising",
                            domains: [".yahoo.co.jp", ".go.stripe.global"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        XB: {
                            category: "advertising",
                            domains: [".yahoo.co.jp", ".go.stripe.global"],
                            lifetime: 52617600,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        ndcd: {
                            category: "essential",
                            domains: [".acs.touch.tech", ".idcheck.acs.touchtechpayments.com", ".verifiedbyvisa.acs.touchtechpayments.com"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        YSC: {
                            category: "advertising",
                            domains: [".youtube.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        "stripe.delegated-authentication.csrf": {
                            category: "essential",
                            domains: ["delegated-authentication.stripe.com", "oneclickauthn.qa.corp.stripe.com", "oneclickauthn.corp.stripe.com"],
                            lifetime: 1800,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Strict"
                        },
                        payment_methods_settings_platform: {
                            category: "functional",
                            domains: [".stripe.com"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        VisitorId: {
                            category: "advertising",
                            domains: [".stripecdn.com", ".stripe.com", ".go.stripe.global"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Host-stripe.link_support_site.csrf": {
                            category: "essential",
                            domains: ["support.link.co", "support.link.com", "link-support-site.corp.stripe.com", "link-support-site.qa.corp.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Strict"
                        },
                        "__Host-stripe.sources_redirect_site.csrf": {
                            category: "essential",
                            domains: ["hooks.stripe.com", "hooks.qa.corp.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Strict"
                        },
                        saml_login_result: {
                            category: "essential",
                            domains: [".stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Host-saml_auth_result": {
                            category: "essential",
                            domains: ["dashboard.stripe.com"],
                            lifetime: 60,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Host-stripe.support_site.csrf": {
                            category: "essential",
                            domains: ["support.stripe.com", "edge-support.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Strict"
                        },
                        "__Host-unauthenticated_support_identity": {
                            category: "authentication",
                            domains: ["support.stripe.com", "support.link.co", "support.link.com", "support-conversations.stripe.com", "edge-support-conversations.stripe.com", "support-conversations.link.co", "support-conversations.link.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Strict"
                        },
                        "__Host-stripe.site.csrf": {
                            category: "essential",
                            domains: ["stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Strict"
                        },
                        "__Host-upsess": {
                            category: "authentication",
                            domains: ["privacy.stripe.com"],
                            lifetime: 1800,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Strict"
                        },
                        "__Host-privacy-csat": {
                            category: "functional",
                            domains: ["privacy.stripe.com"],
                            lifetime: 2592e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Strict"
                        },
                        "__Host-stripe.mkt.csrf": {
                            category: "essential",
                            domains: ["stripe.com", "press.stripe.com", "link.com", "site-admin.stripe.com", "edge.stripe.com", "edge-press.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Strict"
                        },
                        "__Secure-webchat_qualification": {
                            category: "advertising",
                            domains: [".stripe.com"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Strict"
                        },
                        "__Secure-stripe-routing-context": {
                            category: "essential",
                            domains: [".stripe.com"],
                            lifetime: 86400,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Strict"
                        },
                        "__Host-webchat_widget": {
                            category: "essential",
                            domains: ["sales-live-chat.stripe.com"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Strict"
                        },
                        "__Host-webchat_state": {
                            category: "essential",
                            domains: ["sales-live-chat.stripe.com", "stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Strict"
                        },
                        "__Host-webchat_survey": {
                            category: "essential",
                            domains: ["sales-live-chat.stripe.com"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Strict"
                        },
                        "__Secure-has_logged_in": {
                            category: "essential",
                            domains: [".stripe.com"],
                            lifetime: 15811200,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Strict"
                        },
                        muc_ads: {
                            category: "advertising",
                            domains: [".t.co", ".stripe.com", ".go.stripe.global"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        personalization_id: {
                            category: "advertising",
                            domains: [".twitter.com", ".stripe.com", ".go.stripe.global"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        guest_id: {
                            category: "advertising",
                            domains: [".twitter.com", ".stripe.com", ".go.stripe.global"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        guest_id_ads: {
                            category: "advertising",
                            domains: [".twitter.com", ".stripe.com", ".go.stripe.global"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        guest_id_marketing: {
                            category: "advertising",
                            domains: [".twitter.com", ".stripe.com", ".go.stripe.global"],
                            lifetime: 63072e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        glance_ssn_info: {
                            category: "functional",
                            domains: ["dashboard.stripe.com", "dev.stripe.me"],
                            lifetime: 28800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Host-oauth_registration_token": {
                            category: "essential",
                            domains: ["dashboard.stripe.com"],
                            lifetime: 600,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Host-oauth_it_token": {
                            category: "essential",
                            domains: ["dashboard.stripe.com"],
                            lifetime: 960,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        datadome: {
                            category: "essential",
                            domains: [".stripecdn.com"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _pxvid: {
                            category: "essential",
                            domains: [".stripecdn.com"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _px2: {
                            category: "essential",
                            domains: [".stripecdn.com"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _pxcts: {
                            category: "essential",
                            domains: [".stripecdn.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Host-oauth_security_token": {
                            category: "essential",
                            domains: ["dashboard.stripe.com"],
                            lifetime: 960,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        "__Host-oauth_code_verifier": {
                            category: "authentication",
                            domains: ["dashboard.stripe.com"],
                            lifetime: 960,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        _zitok: {
                            category: "functional",
                            domains: ["b.stripecdn.com"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _cfuvid: {
                            category: "functional",
                            domains: [".zoominfo.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        _px3: {
                            category: "essential",
                            domains: [".zoominfo.com", ".stripecdn.com"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        __cf_bm: {
                            category: "functional",
                            domains: [".zoominfo.com"],
                            lifetime: 1800,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        "__Host-stripe.paywall.token": {
                            category: "authentication",
                            domains: ["paywall.stripe.com"],
                            lifetime: 3600,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "none"
                        },
                        "__Host-sandbox_assignment": {
                            category: "functional",
                            domains: ["docs.stripe.com", "docs.corp.stripe.com"],
                            lifetime: 604800,
                            secure: !0,
                            httpOnly: !0,
                            sameSite: "Lax"
                        },
                        TTD_PID: {
                            category: "advertising",
                            domains: [".adsrvr.org"],
                            lifetime: 31536e3,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        uid: {
                            category: "advertising",
                            domains: [".ml-attr.com"],
                            lifetime: 34214400,
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        },
                        uis_token: {
                            category: "essential",
                            domains: ["dashboard.stripe.com"],
                            lifetime: "session",
                            secure: !0,
                            httpOnly: !1,
                            sameSite: "Lax"
                        }
                    },
                    R = {},
                    L = null,
                    C = function(e) {
                        if (T[e]) return new A(e, T[e]);
                        if (R[e]) return new A(e, R[e]);
                        L || (L = l(l([], Object.entries(T), !0), Object.entries(R), !0).map((function(e) {
                            var t = e[0],
                                n = e[1];
                            return new A(t, n)
                        })).filter((function(e) {
                            return e.inexact
                        })));
                        for (var t = 0, n = L; t < n.length; t++) {
                            var r = n[t];
                            if (r.isMatch(e)) return r
                        }
                        return null
                    },
                    P = {
                        decodeValues: !0,
                        map: !1,
                        silent: !1
                    };

                function j(e) {
                    return "string" == typeof e && !!e.trim()
                }

                function U(e, t) {
                    var n = e.split(";").filter(j),
                        r = n.shift().split("="),
                        i = r.shift(),
                        o = r.join("=");
                    t = t ? Object.assign({}, P, t) : P;
                    try {
                        o = t.decodeValues ? decodeURIComponent(o) : o
                    } catch (e) {
                        console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + o + "'. Set options.decodeValues to false to disable this feature.", e)
                    }
                    var s = {
                        name: i,
                        value: o
                    };
                    return n.forEach((function(e) {
                        var t = e.split("="),
                            n = t.shift().trimLeft().toLowerCase(),
                            r = t.join("=");
                        "expires" === n ? s.expires = new Date(r) : "max-age" === n ? s.maxAge = parseInt(r, 10) : "secure" === n ? s.secure = !0 : "httponly" === n ? s.httpOnly = !0 : "samesite" === n ? s.sameSite = r : s[n] = r
                    })), s
                }

                function M(e, t) {
                    if (t = t ? Object.assign({}, P, t) : P, !e) return t.map ? {} : [];
                    if (e.headers && e.headers["set-cookie"]) e = e.headers["set-cookie"];
                    else if (e.headers) {
                        var n = e.headers[Object.keys(e.headers).find((function(e) {
                            return "set-cookie" === e.toLowerCase()
                        }))];
                        n || !e.headers.cookie || t.silent || console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e = n
                    }
                    return Array.isArray(e) || (e = [e]), (t = t ? Object.assign({}, P, t) : P).map ? e.filter(j).reduce((function(e, n) {
                        var r = U(n, t);
                        return e[r.name] = r, e
                    }), {}) : e.filter(j).map((function(e) {
                        return U(e, t)
                    }))
                }
                var N = M,
                    D = M,
                    B = U;
                N.parse = D, N.parseString = B, N.splitCookiesString = function(e) {
                    if (Array.isArray(e)) return e;
                    if ("string" != typeof e) return [];
                    var t, n, r, i, o, s = [],
                        a = 0;

                    function c() {
                        for (; a < e.length && /\s/.test(e.charAt(a));) a += 1;
                        return a < e.length
                    }
                    for (; a < e.length;) {
                        for (t = a, o = !1; c();)
                            if ("," === (n = e.charAt(a))) {
                                for (r = a, a += 1, c(), i = a; a < e.length && "=" !== (n = e.charAt(a)) && ";" !== n && "," !== n;) a += 1;
                                a < e.length && "=" === e.charAt(a) ? (o = !0, a = i, s.push(e.substring(t, r)), t = a) : a = r + 1
                            } else a += 1;
                        (!o || a >= e.length) && s.push(e.substring(t, e.length))
                    }
                    return s
                };
                var q = null,
                    Z = function(e) {
                        function t(t) {
                            void 0 === t && (t = {});
                            var n = e.call(this, t) || this;
                            if (n._domainOverrides = t.domainOverrides || {}, n._documentCookiePatched = !1, "undefined" != typeof navigator) {
                                var r = navigator;
                                if (null == r ? void 0 : r.globalPrivacyControl)
                                    for (var i = p.get(), o = 0, s = Object.keys(i); o < s.length; o++) {
                                        var a = s[o],
                                            c = C(a);
                                        "advertising" !== (null == c ? void 0 : c.category) || (null == c ? void 0 : c.httpOnly) || n.remove(a)
                                    }
                            }
                            return n
                        }
                        return s(t, e), t.prototype.get = function(e) {
                            C(e) || _("No cookie matching the name ".concat(e, " was found in the cookies.yaml or cookies-next.yaml manifests. ") + "Reading the value of the cookie will work, but attempting to set the cookie will result in an error. If you're adding a new cookie, please visit go/cookies for more information!");
                            var t = p.get(e);
                            return void 0 === t ? null : t
                        }, t.prototype.set = function(e, t, n) {
                            return void 0 === n && (n = {}), c(this, void 0, void 0, (function() {
                                var r, i, o, s, a;
                                return u(this, (function(c) {
                                    switch (c.label) {
                                        case 0:
                                            if (!(r = C(e))) return b("No cookie matching the name ".concat(e, " was found in the cookies.yaml or cookies-next.yaml manifests. ") + "If you're adding a new cookie, please visit go/cookies for more information!"), [2, !1];
                                            if (r.httpOnly) return b("Cannot set the cookie ".concat(e, " via JavaScript, since it is marked HttpOnly. ") + "Please visit go/cookies for more information!"), [2, !1];
                                            try {
                                                i = r.resolveDomain(n.domain, this._domainOverrides), o = r.resolveExpiry(n.lifetime)
                                            } catch (e) {
                                                return e instanceof Error ? b(e.message) : b("Unexpected error", e), [2, !1]
                                            }
                                            return [4, this.isCategoryAllowed(r.category)];
                                        case 1:
                                            return c.sent() ? (!d || r.name.startsWith("__Host-") || m(window.location.hostname, i) || _("The cookie ".concat(e, " will be set on the domain ").concat(i, ", which doesn't match ") + "the current domain (".concat(window.location.hostname, "). This will result in the ") + "cookie being silently ignored by the browser. Please check to ensure the domain(s) for the cookie are correct in cookies[-next].yaml, or visit go/cookies for more information."), s = void 0 === n.secure ? r.secure : n.secure, a = this._getCookieAttributes({
                                                domain: i,
                                                expires: o,
                                                secure: s,
                                                sameSite: r.sameSite
                                            }), r.name.startsWith("__Host-") && (a.path = "/"), p.set(e, t, a), [2, !0]) : (_("Attempting to set cookie ".concat(e, " without the correct permissions: ").concat(r.category, " ") + "Please accept cookies and try again."), [2, !1])
                                    }
                                }))
                            }))
                        }, t.prototype.remove = function(e, t) {
                            void 0 === t && (t = {});
                            var n, r = C(e);
                            if (!r) return b("No cookie matching the name ".concat(e, " was found in the cookies.yaml or cookies-next.yaml manifests. ") + "If you're adding a new cookie, please visit go/cookies for more information!"), !1;
                            try {
                                n = r.resolveDomain(t.domain, this._domainOverrides)
                            } catch (e) {
                                return e instanceof Error ? b(e.message) : b("Unexpected error", e), !1
                            }
                            d && !m(window.location.hostname, n) && _("The cookie ".concat(e, " will be set on the domain ").concat(n, ", which doesn't match ") + "the current domain (".concat(window.location.hostname, "). This will result in the ") + "cookie being silently ignored by the browser. Please check to ensure the domain(s) for the cookie are correct in cookies[-next].yaml, or visit go/cookies for more information.");
                            var i = this._getCookieAttributes({
                                domain: n,
                                secure: r.secure,
                                sameSite: r.sameSite
                            });
                            return p.remove(e, i), !0
                        }, t.prototype.refresh = function() {
                            return c(this, void 0, void 0, (function() {
                                var e = this;
                                return u(this, (function(t) {
                                    return Object.keys(p.get()).forEach((function(t) {
                                        var n = C(t);
                                        if (n && p.get(t)) {
                                            var r = e.isCategoryAllowedMaybeSync(n.category);
                                            !1 === r && e.remove(t), r instanceof Promise && r.then((function(n) {
                                                n || e.remove(t)
                                            }))
                                        }
                                    })), [2]
                                }))
                            }))
                        }, t.prototype.trapDocumentCookie = function() {
                            this._documentCookiePatched || (this._documentCookiePatched = function(e) {
                                if (!d) return b("You cannot patch document.cookie if you aren't in a browser."), !1;
                                if (q || (q = Object.getOwnPropertyDescriptor(Document.prototype, "cookie")), !q || !q.get || !q.set) return !1;
                                var t = q.get,
                                    n = q.set;
                                return Object.defineProperty(document, "cookie", {
                                    configurable: !0,
                                    get: function() {
                                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                        return t.apply(this, e)
                                    },
                                    set: function(t) {
                                        if (!t || 0 === t.length) return n.apply(this, [t]);
                                        var r = B(t),
                                            i = r.name,
                                            o = r.value,
                                            s = r.domain;
                                        "true" === r.allowed ? n.apply(this, [t]) : e.set(i, o, {
                                            domain: s
                                        })
                                    }
                                }), !0
                            }(this))
                        }, t.prototype.untrapDocumentCookie = function() {
                            this._documentCookiePatched && (q ? Object.defineProperty(document, "cookie", q) : b("The document.cookie property has not been patched"), this._documentCookiePatched = !1)
                        }, t.prototype._getCookieAttributes = function(e) {
                            var t = a({}, e);
                            return this._documentCookiePatched && (t.allowed = "true"), t
                        }, t
                    }(I),
                    F = function() {
                        function e(e, t) {
                            this.name = e, this.category = t.category, this.name.indexOf("*") >= 0 ? (this.inexact = !0, this._regexp = new RegExp(e.replace("*", ".+"))) : this.inexact = !1
                        }
                        return e.prototype.isMatch = function(e) {
                            return this.name === e || this._regexp && this._regexp.test(e)
                        }, e
                    }(),
                    $ = {
                        "*_dismissed": {
                            category: "functional"
                        },
                        "compliance-center.*": {
                            category: "essential"
                        },
                        docs: {
                            category: "essential"
                        },
                        lsid: {
                            category: "functional"
                        },
                        imt: {
                            category: "advertising"
                        },
                        personalizations: {
                            category: "functional"
                        },
                        "twilio_chat_*": {
                            category: "essential"
                        },
                        "yt-remote-connected-devices": {
                            category: "advertising"
                        },
                        "yt-remote-device-id": {
                            category: "advertising"
                        },
                        "yt.innertube::nextId": {
                            category: "advertising"
                        },
                        "yt.innertube::requests": {
                            category: "advertising"
                        },
                        "link.auth_session_client_secret": {
                            category: "authentication"
                        },
                        apps_oauth_state: {
                            category: "authentication"
                        },
                        request_sign_key: {
                            category: "authentication"
                        },
                        easel_position: {
                            category: "functional"
                        },
                        elements_session: {
                            category: "functional"
                        },
                        elements_assignment: {
                            category: "functional"
                        },
                        "elements.prb_warning.dismiss_timestamp": {
                            category: "essential"
                        },
                        last_used_payment_method: {
                            category: "functional"
                        },
                        user_session_token: {
                            category: "authentication"
                        },
                        "userleap.ids": {
                            category: "essential"
                        },
                        "userleap.pageviews": {
                            category: "essential"
                        },
                        workbenchState: {
                            category: "functional"
                        },
                        "dashboard.banner-dismissals": {
                            category: "essential"
                        },
                        "dashboard.nav-collapsed": {
                            category: "functional"
                        },
                        link_app_devtools: {
                            category: "essential"
                        },
                        "payment_method_settings.direct": {
                            category: "functional"
                        },
                        "verification-session-create--verification-flow-toggle--value": {
                            category: "functional"
                        },
                        "payment_method_settings.connect": {
                            category: "functional"
                        },
                        register_login_redesign: {
                            category: "functional"
                        },
                        "dashboard.setup-guide-closed": {
                            category: "functional"
                        },
                        "dashboard.setup-guide-collapsed": {
                            category: "functional"
                        },
                        logged_user: {
                            category: "essential"
                        },
                        "x-px-cookies": {
                            category: "essential"
                        },
                        "developers.apps.detail.permissionMigrationCallout.dismissed": {
                            category: "functional"
                        },
                        "stripe.paywall.token": {
                            category: "authentication"
                        },
                        devtools_copy_optimization_tools: {
                            category: "functional"
                        }
                    },
                    z = Object.keys($).reduce((function(e, t) {
                        var n = $[t];
                        return e[t] = new F(t, n), e
                    }), {}),
                    H = Object.keys(z).filter((function(e) {
                        return z[e].inexact
                    })).map((function(e) {
                        return z[e]
                    })),
                    V = function(e) {
                        if (z[e]) return z[e];
                        for (var t = 0, n = H; t < n.length; t++) {
                            var r = n[t];
                            if (r.isMatch(e)) return r
                        }
                        return null
                    },
                    K = function(e) {
                        function t(t) {
                            void 0 === t && (t = {});
                            var n = e.call(this, t) || this;
                            return f("localStorage") && setTimeout((function() {
                                n.refresh()
                            }), 0), n
                        }
                        return s(t, e), t.prototype.isStorageAvailable = function() {
                            return f("localStorage")
                        }, t.prototype.get = function(e) {
                            return V(e) || _("No item matching the name ".concat(e, " was found in the localStorage.yaml manifest. ") + "Reading the value of the item will work, but attempting to set the item will result in an error. If you're adding a new localStorage item, please visit go/cookies for more information!"), f("localStorage") ? (this.refresh(), localStorage.getItem(e)) : null
                        }, t.prototype.getKeyMatches = function(e) {
                            if (!(e.indexOf("*") >= 0)) return _("Invalid pattern provided, no wildcard after other characters"), [];
                            var t = new RegExp("^".concat(e.replace("*", ".+"), "$"));
                            return Object.keys(localStorage).filter((function(e) {
                                return t.test(e)
                            })).filter((function(e) {
                                return V(e)
                            }))
                        }, t.prototype.set = function(e, t) {
                            return c(this, void 0, void 0, (function() {
                                var n;
                                return u(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return (n = V(e)) ? [4, this.isCategoryAllowed(n.category)] : (b("No item matching the name ".concat(e, " was found in the localStorage.yaml manifest. ") + "If you're adding a new item, please visit go/cookies for more information!"), [2, !1]);
                                        case 1:
                                            return r.sent() ? f("localStorage") ? (localStorage.setItem(e, t), [2, !0]) : [2, !1] : (_("Attempting to set localStorage ".concat(e, " without the correct permissions. ") + "Please accept cookies and try again."), [2, !1])
                                    }
                                }))
                            }))
                        }, t.prototype.remove = function(e) {
                            return V(e) ? !!f("localStorage") && (localStorage.removeItem(e), !0) : (b("No item matching the name ".concat(e, " was found in the localStorage.yaml manifest. ") + "If you're adding a new item, please visit go/cookies for more information!"), !1)
                        }, t.prototype.refresh = function() {
                            return c(this, void 0, void 0, (function() {
                                var e = this;
                                return u(this, (function(t) {
                                    return Object.keys(localStorage).forEach((function(t) {
                                        var n = V(t);
                                        if (n && localStorage.getItem(t)) {
                                            var r = e.isCategoryAllowedMaybeSync(n.category);
                                            !1 === r && localStorage.removeItem(t), r instanceof Promise && r.then((function(e) {
                                                e || localStorage.removeItem(t)
                                            }))
                                        }
                                    })), [2]
                                }))
                            }))
                        }, t
                    }(I),
                    W = function() {
                        function e(e, t) {
                            this.name = e, this.category = t.category, this.name.indexOf("*") >= 0 ? (this.inexact = !0, this._regexp = new RegExp(e.replace("*", ".+"))) : this.inexact = !1
                        }
                        return e.prototype.isMatch = function(e) {
                            return this.name === e || this._regexp && this._regexp.test(e)
                        }, e
                    }(),
                    G = {
                        1: {
                            category: "essential"
                        },
                        placeholder_session_storage_object: {
                            category: "essential"
                        },
                        workbenchState: {
                            category: "functional"
                        },
                        "dashboard.tab-context": {
                            category: "essential"
                        },
                        _ab: {
                            category: "essential"
                        },
                        _mf: {
                            category: "essential"
                        },
                        id: {
                            category: "essential"
                        },
                        "link_app.subscription_card_dismissed": {
                            category: "essential"
                        },
                        register_login_redesign: {
                            category: "functional"
                        },
                        "glance-cobrowse-storage": {
                            category: "functional"
                        }
                    },
                    Y = Object.keys(G).reduce((function(e, t) {
                        var n = G[t];
                        return e[t] = new W(t, n), e
                    }), {}),
                    J = Object.keys(Y).filter((function(e) {
                        return Y[e].inexact
                    })).map((function(e) {
                        return Y[e]
                    })),
                    X = function(e) {
                        if (Y[e]) return Y[e];
                        for (var t = 0, n = J; t < n.length; t++) {
                            var r = n[t];
                            if (r.isMatch(e)) return r
                        }
                        return null
                    };
                (function(e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        var n = e.call(this, t) || this;
                        return f("sessionStorage") && setTimeout((function() {
                            n.refresh()
                        }), 0), n
                    }
                    s(t, e), t.prototype.isStorageAvailable = function() {
                        return f("sessionStorage")
                    }, t.prototype.get = function(e) {
                        return X(e) || _("No item matching the name ".concat(e, " was found in the sessionStorage.yaml manifest. ") + "Reading the value of the item will work, but attempting to set the item will result in an error. If you're adding a new sessionStorage item, please visit go/cookies for more information!"), f("sessionStorage") ? (this.refresh(), sessionStorage.getItem(e)) : null
                    }, t.prototype.set = function(e, t) {
                        return c(this, void 0, void 0, (function() {
                            var n;
                            return u(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return (n = X(e)) ? [4, this.isCategoryAllowed(n.category)] : (b("No item matching the name ".concat(e, " was found in the sessionStorage.yaml manifest. ") + "If you're adding a new item, please visit go/cookies for more information!"), [2, !1]);
                                    case 1:
                                        return r.sent() ? f("sessionStorage") ? (sessionStorage.setItem(e, t), [2, !0]) : [2, !1] : (_("Attempting to set sessionStorage ".concat(e, " without the correct permissions. ") + "Please accept cookies and try again."), [2, !1])
                                }
                            }))
                        }))
                    }, t.prototype.remove = function(e) {
                        return X(e) ? !!f("sessionStorage") && (sessionStorage.removeItem(e), !0) : (b("No item matching the name ".concat(e, " was found in the sessionStorage.yaml manifest. ") + "If you're adding a new item, please visit go/cookies for more information!"), !1)
                    }, t.prototype.refresh = function() {
                        return c(this, void 0, void 0, (function() {
                            var e = this;
                            return u(this, (function(t) {
                                return Object.keys(sessionStorage).forEach((function(t) {
                                    var n = X(t);
                                    if (n && sessionStorage.getItem(t)) {
                                        var r = e.isCategoryAllowedMaybeSync(n.category);
                                        !1 === r && sessionStorage.removeItem(t), r instanceof Promise && r.then((function(e) {
                                            e || sessionStorage.removeItem(t)
                                        }))
                                    }
                                })), [2]
                            }))
                        }))
                    }
                })(I), w("/cookie-settings"), w("/cookies-policy/legal")
            },
            53716: (e, t, n) => {
                "use strict";
                n.d(t, {
                    PF: () => H
                });
                var r = n(26067),
                    i = n(6884),
                    o = n.n(i);
                const s = {
                        clientId: "",
                        inProduction: !0,
                        useCookies: "newCookies",
                        memoizeCookieID: !0,
                        maxPageLength: 150,
                        version: "",
                        locale: "",
                        namespace: "",
                        pageviewtoken: "",
                        stripeCookiesEnforcementMode: void 0,
                        sessionization: !1
                    },
                    a = /headless|electron|slimerjs/i,
                    c = [" daum[ /]", " deusu/", " yadirectfetcher", "(?:^|[^g])news(?!sapphire)", "(?<! (?:channel/|google/))google(?!(app|/google| pixel))", "(?<! cu)bots?(?:\\b|_)", "(?<!(?:lib))http", "(?<![hg]m)score", "@[a-z][\\w-]+\\.", "\\(\\)", "\\.com\\b", "\\btime/", "^<", "^[\\w \\.\\-\\(?:\\):]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)", "^[^ ]{50,}$", "^\\d+\\b", "^\\w*search\\b", "^\\w+/[\\w\\(\\)]*$", "^active", "^ad muncher", "^amaya", "^avsdevicesdk/", "^biglotron", "^bot", "^bw/", "^clamav[ /]", "^client/", "^cobweb/", "^custom", "^ddg[_-]android", "^discourse", "^dispatch/\\d", "^downcast/", "^duckduckgo", "^facebook", "^getright/", "^gozilla/", "^hobbit", "^hotzonu", "^hwcdn/", "^jeode/", "^jetty/", "^jigsaw", "^microsoft bits", "^movabletype", "^mozilla/5\\.0\\s[a-z\\.-]+$", "^mozilla/\\d\\.\\d \\(compatible;?\\)$", "^mozilla/\\d\\.\\d \\w*$", "^navermailapp", "^netsurf", "^offline", "^owler", "^php", "^postman", "^python", "^rank", "^read", "^reed", "^rest", "^rss", "^snapchat", "^space bison", "^svn", "^swcd ", "^taringa", "^thumbor/", "^track", "^valid", "^w3c", "^webbandit/", "^webcopier", "^wget", "^whatsapp", "^wordpress", "^xenu link sleuth", "^yahoo", "^yandex", "^zdm/\\d", "^zoom marketplace/", "^{{.*}}$", "adscanner/", "analyzer", "archive", "ask jeeves/teoma", "bit\\.ly/", "bluecoat drtr", "browsex", "burpcollaborator", "capture", "catch", "check\\b", "checker", "chrome-lighthouse", "chromeframe", "classifier", "cloudflare", "convertify", "crawl", "cypress/", "dareboost", "datanyze", "dejaclick", "detect", "dmbrowser", "download", "evc-batch/", "exaleadcloudview", "feed", "firephp", "functionize", "gomezagent", "headless", "httrack", "hubspot marketing grader", "hydra", "ibisbrowser", "images", "infrawatch", "insight", "inspect", "iplabel", "ips-agent", "java(?!;)", "jsjcw_scanner", "library", "linkcheck", "mail\\.ru/", "manager", "measure", "neustar wpm", "node", "nutch", "offbyone", "optimize", "pageburst", "pagespeed", "parser", "perl", "phantomjs", "pingdom", "powermarks", "preview", "proxy", "ptst[ /]\\d", "reputation", "resolver", "retriever", "rexx;", "rigor", "rss\\b", "scanner\\.", "scrape", "server", "sogou", "sparkler/", "speedcurve", "spider", "splash", "statuscake", "supercleaner", "synapse", "synthetic", "tools", "torrent", "trace", "transcoder", "url", "virtuoso", "wappalyzer", "webglance", "webkit2png", "whatcms/", "zgrab"];
                let u = null;
                let l = null;

                function p({
                    userAgent: e,
                    appVersion: t
                } = navigator, {
                    cache: n
                } = {
                    cache: !0
                }) {
                    if (n && null !== l) return l;
                    const r = function(e) {
                        if (!e) return !1;
                        try {
                            return (u || (u = new RegExp(new RegExp(c.join("|"), "i"), "i"), u)).test(e)
                        } catch (e) {
                            return !1
                        }
                    }(e) || function(e) {
                        return !!e && a.test(e)
                    }(t) || function() {
                        const e = document.createElement("canvas");
                        if ("function" != typeof e.getContext) return !1;
                        const t = e.getContext("webgl");
                        if (null === t) return !1;
                        if ("function" != typeof t.getParameter) return !1;
                        try {
                            const e = t.getParameter(t.VENDOR),
                                n = t.getParameter(t.RENDERER);
                            return "Brian Paul" === e && "Mesa OffScreen" === n
                        } catch (e) {
                            if (e instanceof TypeError && e.message.includes("getParameter")) return !1;
                            throw e
                        }
                    }();
                    return n && (l = r), r
                }
                const d = {},
                    f = {
                        empty_config: "You called `Analytics.configure` without any arguments.",
                        empty_snake_case: "An empty string was passed to toSnakeCase, implying an empty event name.",
                        event_with_no_viewed: "An event was called, but no viewed_name, or previous view call found.",
                        id_mismatch: "A different ID exists in cookies vs. localStorage",
                        json_stringify_error: "JSON.stringify threw an error when it was invoked. Ensure it exists.",
                        missing_merchant_token: "A track function was called with a user token but no merchant token.",
                        no_previous_event_id: "The previous event id was requested but an analytics call has not been made yet.",
                        pixel_onerror_event: "A tracking pixel threw an error event.",
                        pixel_thrown_error: "An error was thrown while trying to inject a pixel into the page.",
                        unable_to_set_cookie_data: "An error was thrown while setting additional cookie information from config.",
                        no_client_id: "The Analytics Event Logger was turned on, but no clientId was provided.",
                        batching_disabled: "An attempt to make a batched request was made, but batching is not enabled for this client"
                    },
                    h = (e, t) => {
                        if (window.location.hostname.match(/(^|\.)stripe\.com$/)) return !1;
                        !(e in d) && window.console && window.console.warn && (d[e] = !0, window.console.warn(`Stripe Analytics: ${f[e]||e}`, t))
                    },
                    m = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                        let t = 16 * Math.random() | 0;
                        return ("x" === e ? t : 3 & t | 8).toString(16)
                    })),
                    g = e => {
                        if (!e) return h("empty_snake_case"), e;
                        let t = e;
                        return t = t.replace(/^[\s\W_]*/, ""), t = t.replace(/[\s\W_]*$/, ""), /[\s\W_]/.test(t) ? t.replace(/[\s\W_]+(.|$)/g, (function(e, t) {
                            return t ? `_${t}` : ""
                        })).toLowerCase() : (t = t.replace(/(.)([A-Z][a-z]+)/g, (function(e, t, n) {
                            return `${t}_${n}`
                        })), t.replace(/([a-z0-9])([A-Z])/g, (function(e, t, n) {
                            return `${t}_${n}`
                        })).toLowerCase())
                    },
                    y = e => {
                        let t = "";
                        for (const n in e)
                            if (e.hasOwnProperty(n)) {
                                let r = e[n];
                                if ("object" == typeof r) try {
                                    r = JSON.stringify(r)
                                } catch (e) {
                                    throw h("json_stringify_error", e), e
                                }
                                t += `&${encodeURIComponent(n)}=${encodeURIComponent(r)}`
                            }
                        return t.replace("&", "")
                    },
                    v = {
                        client_id: !0,
                        created: !0,
                        event_id: !0,
                        event_name: !0,
                        action_name: !0,
                        analytics_ua: !0,
                        arb_id: !0,
                        cid: !0,
                        domain: !0,
                        event_count: !0,
                        flags: !0,
                        link_name: !0,
                        lsid: !0,
                        merchant_id: !0,
                        modal_name: !0,
                        page: !1,
                        page_view_id: !0,
                        privacy_consent_loaded: !0,
                        privacy_consent_functional: !0,
                        privacy_consent_advertising: !0,
                        referrer: !0,
                        sid: !0,
                        stripe_locale: !0,
                        ua_browser_name: !0,
                        ua_browser_version: !0,
                        ua_device_model: !0,
                        ua_device_type: !0,
                        ua_device_vendor: !0,
                        ua_engine_name: !0,
                        ua_engine_version: !0,
                        ua_mobile: !0,
                        ua_model: !0,
                        ua_os_name: !0,
                        ua_os_version: !0,
                        ua_platform: !0,
                        ua_platform_version: !0,
                        user_id: !0,
                        version: !0,
                        viewed_name: !0,
                        viewport_height: !0,
                        viewport_width: !0
                    },
                    _ = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
                    b = /(\/session\/(live|test))_(\w+)/,
                    w = /([a-zA-Z0-9\-.+_-`~!#$%^&*()]+(@|%40|%2540)[a-zA-Z0-9\-.+_-`~!#$%^&*()]+\.[a-zA-Z0-9.+_-`~!#$%^*()]+)/gi,
                    S = "[REDACTED]",
                    x = ["address", "client_id", "description", "e", "firstname", "fname", "gender", "lastname", "lname", "location", "name", "nickname", "p", "prefill_email", "prefilled_email", "profileurl", "pwd", "query", "shipping.address[address-line2]", "shipping.address[address]", "shipping.address[country]", "shipping.address[locality]", "shipping.address[subregion]", "shipping.address[zip]", "shipping.phone", "stripe_user[city]", "stripe_user[country]", "stripe_user[dob_day]", "stripe_user[dob_month]", "stripe_user[dob_year]", "stripe_user[email]", "stripe_user[first_name]", "stripe_user[last_name]", "stripe_user[phone_number]", "stripe_user[state]", "stripe_user[street_address]", "stripe_user[zip]", "user", "account_invite", "invite", "invite_code"],
                    E = e => null == e ? e : ((e, t, n) => {
                        let r = e;
                        const i = r.split("?"),
                            o = i[0],
                            s = i.length > 1 ? r.replace(o, "").substring(1) : "";
                        return r = o + ((e, t, n) => {
                            const r = e.split(/[&;]/),
                                i = [];
                            let o = "";
                            if ("" === e) return "";
                            for (let e = 0; e < r.length; e++) {
                                const n = r[e].split("="),
                                    o = n[0],
                                    a = n[1];
                                let c = !0;
                                for (let e = 0; e < t.length; e++)(o.toLowerCase() === t[e] || (s = o, _.test(s))) && (c = !1);
                                c ? i.push({
                                    name: o,
                                    value: a,
                                    index: e
                                }) : i.push({
                                    name: o,
                                    value: "[REDACTED]",
                                    index: e
                                })
                            }
                            var s;
                            if (i.length < 1) return o;
                            for (let e = 0; e < i.length; e++) o += i[e].name, r[i[e].index].indexOf("=") > -1 && (o += "=", o += i[e].value), e !== i.length - 1 && (o += "&");
                            return `?${o}`
                        })(s, t), "[REDACTED]", r = r.replace(w, "[REDACTED]"), r = r.replace(b, "$1_REDACTED"), r
                    })(e, x);

                function k(e) {
                    let t = null;
                    return (...n) => (t || (setTimeout((() => t = null), 500), t = e(...n)), t)
                }

                function O(e, t, n, r, i, o, s) {
                    try {
                        var a = e[o](s),
                            c = a.value
                    } catch (e) {
                        return void n(e)
                    }
                    a.done ? t(c) : Promise.resolve(c).then(r, i)
                }

                function I(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                class A {
                    pushEvent(e) {
                        this.getPayloadSizeInBytes([...this.logEntries, e]) >= 64e3 && this.fetchLogs(!1), this.logEntries.push(e), this.logEntries.length >= this.batchSize ? this.fetchLogs(!1) : this.batchTimer || (this.batchTimer = setTimeout((() => {
                            this.fetchLogs(!1)
                        }), 3e3))
                    }
                    getEvents() {
                        return this.logEntries
                    }
                    fetchLogs(e) {
                        var t, n = this;
                        return (t = function*() {
                            if (0 === n.logEntries.length) return;
                            const t = n.logEntries.length,
                                r = n.getLoggerPayload(),
                                i = y(r);
                            n.resetBuffer();
                            const o = e ? "-keepalive" : "";
                            try {
                                const r = yield fetch(n.trackingUrl, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded"
                                    },
                                    body: i,
                                    credentials: "omit",
                                    keepalive: e
                                });
                                var s, a;
                                return r.ok || null === (s = (a = n).onAnalyticsRequestFailed) || void 0 === s || s.call(a, `ael-batch-error${o}`, t, new Error(`Error received from HTTP response (${r.status})`)), r
                            } catch (e) {
                                var c, u;
                                return null === (c = (u = n).onAnalyticsRequestFailed) || void 0 === c || c.call(u, `ael-batch-throws${o}`, t, e), null
                            }
                        }, function() {
                            var e = this,
                                n = arguments;
                            return new Promise((function(r, i) {
                                var o = t.apply(e, n);

                                function s(e) {
                                    O(o, r, i, s, a, "next", e)
                                }

                                function a(e) {
                                    O(o, r, i, s, a, "throw", e)
                                }
                                s(void 0)
                            }))
                        })()
                    }
                    getLoggerPayload(e = this.logEntries) {
                        return {
                            client_id: this.clientId,
                            num_requests: e.length,
                            events: [...e]
                        }
                    }
                    resetBuffer() {
                        this.logEntries = [], this.batchTimer && (clearTimeout(this.batchTimer), this.batchTimer = null)
                    }
                    getPayloadSizeInBytes(e = this.logEntries) {
                        return new Blob([y(this.getLoggerPayload(e))]).size
                    }
                    isSendBeaconSupported() {
                        return navigator && navigator.sendBeacon
                    }
                    sendBeaconWithPayload() {
                        const e = navigator.sendBeacon.bind(navigator);
                        try {
                            const n = e(this.trackingUrl, new Blob([y(this.getLoggerPayload())], {
                                type: "application/x-www-form-urlencoded"
                            }));
                            var t;
                            return n || null === (t = this.onAnalyticsRequestFailed) || void 0 === t || t.call(this, "ael-beacon-error", this.logEntries.length), n
                        } catch (e) {
                            var n;
                            return null === (n = this.onAnalyticsRequestFailed) || void 0 === n || n.call(this, "ael-beacon-throws", this.logEntries.length, e), !1
                        }
                    }
                    handleLogging() {
                        let e = !1;
                        this.isSendBeaconSupported() && (e = this.sendBeaconWithPayload()), e || this.fetchLogs(!0), this.resetBuffer()
                    }
                    constructor(e) {
                        var t, n;
                        I(this, "logEntries", []), I(this, "clientId", void 0), I(this, "trackingUrl", void 0), I(this, "batchSize", void 0), I(this, "batchTimer", void 0), I(this, "onAnalyticsRequestFailed", void 0), this.clientId = e.clientId, this.trackingUrl = e.inProduction ? "https://r.stripe.com/b" : "https://qa-r.stripe.com/b", this.batchSize = (null === (t = e.batchSettings) || void 0 === t ? void 0 : t.batchSize) ? null === (n = e.batchSettings) || void 0 === n ? void 0 : n.batchSize : 5, this.batchTimer = null, this.onAnalyticsRequestFailed = e.onAnalyticsRequestFailed, document.addEventListener("visibilitychange", (e => {
                            "hidden" === document.visibilityState && this.logEntries.length > 0 && this.handleLogging()
                        }))
                    }
                }

                function T(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                const R = e => e && "object" == typeof e,
                    L = (e, t) => R(e) && R(t) ? (Object.keys(t).forEach((n => {
                        const r = e[n],
                            i = t[n];
                        Array.isArray(r) && Array.isArray(i) ? e[n] = i : R(r) && R(i) ? e[n] = L(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                })))), r.forEach((function(t) {
                                    T(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, r), i) : e[n] = i
                    })), e) : t;

                function C(e, t, n, r, i, o, s) {
                    try {
                        var a = e[o](s),
                            c = a.value
                    } catch (e) {
                        return void n(e)
                    }
                    a.done ? t(c) : Promise.resolve(c).then(r, i)
                }

                function P(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, i) {
                            var o = e.apply(t, n);

                            function s(e) {
                                C(o, r, i, s, a, "next", e)
                            }

                            function a(e) {
                                C(o, r, i, s, a, "throw", e)
                            }
                            s(void 0)
                        }))
                    }
                }

                function j(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function U(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function(t) {
                            j(e, t, n[t])
                        }))
                    }
                    return e
                }
                const M = {
                        track: {},
                        viewed: {},
                        modal: {},
                        action: {},
                        link: {}
                    },
                    N = (e, t) => {
                        try {
                            const n = new Image;
                            n.onerror = function() {
                                h("pixel_onerror_event", e), null == t || t("ae-pixel-error", 1)
                            }, n.src = e
                        } catch (e) {
                            h("pixel_thrown_error", e), null == t || t("ae-pixel-throws", 1, e)
                        }
                    },
                    D = /(sk|rk)_live_[a-zA-Z0-9]*/gm,
                    B = (e, t, n) => {
                        let r = e;
                        if (null !== r && n < 100) switch (typeof r) {
                            case "string":
                                r = r.replace(D, "[REDACTED_LIVE_KEY]");
                                break;
                            case "object":
                                if (r instanceof Array) {
                                    r = [...r];
                                    const {
                                        length: e
                                    } = r;
                                    for (let i = 0; i < e; i++) r[i] = B(r[i], t, n + 1)
                                } else {
                                    r = U({}, r);
                                    for (const e in r) Object.prototype.hasOwnProperty.call(r, e) && (r[e] = B(r[e], t, n + 1))
                                }
                        } else n >= 100 && t("recursive_object");
                        return r
                    },
                    q = (e, t) => t || (h("event_with_no_viewed", e), document.location.pathname),
                    Z = (new(o())).getResult(),
                    F = {
                        ua_browser_name: Z.browser.name,
                        ua_browser_version: Z.browser.version,
                        ua_os_name: Z.os.name,
                        ua_os_version: Z.os.version,
                        ua_device_model: Z.device.model,
                        ua_device_type: Z.device.type,
                        ua_device_vendor: Z.device.vendor,
                        ua_engine_name: Z.engine.name,
                        ua_engine_version: Z.engine.version
                    };
                Object.entries(F).forEach((([e, t]) => {
                    t || delete F[e]
                }));
                let $ = null,
                    z = null;
                class H {
                    configure(e) {
                        return e.googleAnalytics && ((e = {}) => {
                            var t, n, r, i, o, s;
                            if (window.hasOwnProperty("ga") && "function" == typeof window.ga || document.querySelectorAll('script[src="https://www.google-analytics.com/analytics.js"]').length > 0 || (t = window, n = document, r = "script", t.GoogleAnalyticsObject = "ga", t.ga = t.ga || function() {
                                    (t.ga.q = t.ga.q || []).push(arguments)
                                }, t.ga.l = 1 * new Date, i = n.createElement(r), o = n.getElementsByTagName(r)[0], i.async = !0, i.src = "https://www.google-analytics.com/analytics.js", o.parentNode.insertBefore(i, o)), window.ga) {
                                const t = {
                                    cookieDomain: "auto",
                                    legacyCookieDomain: ".stripe.com"
                                };
                                window.ga("create", "UA-12675062-1", t), (s = window.ga) && s((e => {
                                    e && e.set("customTask", (function(e) {
                                        const t = e.get("location"),
                                            n = e.get("page") || void 0,
                                            r = e.get("referrer") || void 0;
                                        e.set("location", E(t)), e.set("page", E(n)), e.set("referrer", E(r))
                                    }))
                                })), window.ga("require", "displayfeatures"), e.googleAnalytics && void 0 !== e.googleAnalytics.isLoggedIn && window.ga("set", "dimension1", String(e.googleAnalytics.isLoggedIn)), e.googleAnalyticsFlags && window.ga("set", "dimension2", (e => {
                                    if ("object" != typeof e) return "";
                                    const t = [];
                                    for (const n in e) !0 === e[n] && t.push(n);
                                    return t.join(",")
                                })(e.googleAnalyticsFlags)), window.ga("send", "pageview")
                            }
                        })(e), this.config = L(this.config, e), void 0 === this.config.inProduction && (this.config.inProduction = !0), e.namespace && (this.prefix = e.namespace), "newCookies" === this.config.useCookies ? this.setConfigCookieData() : Promise.resolve()
                    }
                    deprecatedSetConfigCookieData() {
                        var e = this;
                        return P((function*() {
                            if (!e.cookies) return;
                            const {
                                cookies: t
                            } = e;
                            return Promise.all(["merchant", "user"].map((n => {
                                const r = e.config[n];
                                return "string" == typeof r ? t.set(n, r) : null
                            }))).catch((e => {
                                h("unable_to_set_cookie_data", e)
                            }))
                        }))()
                    }
                    setConfigCookieData() {
                        var e = this;
                        return P((function*() {
                            if (!e.cookies) return;
                            const {
                                cookies: t
                            } = e;
                            try {
                                if (e.config.cookies) {
                                    if (e.config.cookies.merchant && "string" == typeof e.config.cookies.merchant) {
                                        const n = `.${window.location.hostname}`.endsWith(".stripe.com") ? ".stripe.com" : void 0;
                                        yield t.set("merchant", e.config.cookies.merchant, {
                                            domain: n,
                                            secure: !0
                                        })
                                    }
                                    e.config.cookies.user && "string" == typeof e.config.cookies.user && (yield t.set("user", e.config.cookies.user))
                                }
                            } catch (e) {
                                h("unable_to_set_cookie_data", e)
                            }
                        }))()
                    }
                    getPreviousEventId() {
                        let {
                            pageviewtoken: e
                        } = this.config;
                        return e || (e = m(), this.config.pageviewtoken = e, h("no_previous_event_id")), `${e}_${this.state.trackCounter}`
                    }
                    trackOnce(e, t = {}, n = {}, r) {
                        if (!M.track[e]) return M.track[e] = !0, this.track(e, t, n, void 0, r)
                    }
                    track(e, t = {}, n = {}, r = !0, i = (() => {})) {
                        var o, s;
                        const a = r ? g(e) : e,
                            c = this.prefix ? `${this.prefix}.${a}` : a;
                        if (t.event = c, this.state.trackCounter += 1, t.event_count = this.state.trackCounter, this.config.pageviewtoken) t.page_view_id = this.config.pageviewtoken;
                        else {
                            const e = m();
                            t.page_view_id = e, this.config.pageviewtoken = e
                        }
                        var u;
                        "string" == typeof t.page_view_id && (t.event_id = `${t.page_view_id}_${this.state.trackCounter}`);
                        const l = null !== (u = null === (o = this.config.cookies) || void 0 === o ? void 0 : o.merchant) && void 0 !== u ? u : null;
                        var d;
                        const f = null !== (d = null === (s = this.config.cookies) || void 0 === s ? void 0 : s.user) && void 0 !== d ? d : null;
                        (n.merchant || l) && (t.merchant_id = n.merchant || l), (n.user || f) && (t.merchant_id || h("missing_merchant_token", c), t.user_id = n.user || f), t.version || !n.version && !this.config.version || (t.version = n.version || this.config.version), (t.flags || this.config.googleAnalyticsFlags) && (t.flags = U({}, this.config.googleAnalyticsFlags, t.flags)), (n.locale || this.config.locale) && (t.stripe_locale = n.locale || this.config.locale);
                        const v = Promise.resolve().then((() => {
                            if (!this.cookies) return t.privacy_consent_loaded = !1, t.privacy_consent_functional = !1, void(t.privacy_consent_advertising = !1);
                            t.privacy_consent_loaded = !0;
                            const e = this._getPrivacyConsentAdvertising().then((e => {
                                    t.privacy_consent_advertising = e
                                })),
                                n = this._getPrivacyConsentFunctional().then((e => {
                                    t.privacy_consent_functional = e
                                }));
                            return Promise.all([e, n])
                        }));
                        return Promise.all([v, this.getClientIDs(), this.getSessionID()]).then((([e, r, o]) => {
                            const s = ((e, t, n) => {
                                    const r = document.location.pathname + document.location.search + document.location.hash,
                                        i = e.maxPageLength ? r.substr(0, e.maxPageLength) : r,
                                        {
                                            referrer: o
                                        } = document,
                                        s = U({
                                            domain: window.location.host,
                                            page: E(i),
                                            referrer: E(o),
                                            cid: t.cid,
                                            lsid: t.lsid,
                                            viewport_height: window.innerHeight,
                                            viewport_width: window.innerWidth,
                                            analytics_ua: "analytics.js-CURRENT_VERSION"
                                        }, F);
                                    return e.sessionization && n && (s.sid = n), e.botDetection && p() && (s.bot = !0), s
                                })(this.config, r, o),
                                a = ((e, t) => {
                                    const n = B(e, t, 0);
                                    return "page" in n && (n.page = E(`${n.page}`)), "referrer" in n && (n.referrer = E(`${n.referrer}`)), n
                                })(U({}, s, t), i);
                            if (this.config.overrideTrackingUrl) {
                                delete a.performance_events, delete a.treatments;
                                const e = `?${y(a)}`,
                                    t = (this.config.inProduction ? this.config.overrideTrackingUrl.prod : this.config.overrideTrackingUrl.qa) + e;
                                this.config.inProduction && this.trackingFunctions.forEach((function(e) {
                                    e(t)
                                }))
                            } else {
                                var c;
                                (null === (c = this.config.batchSettings) || void 0 === c ? void 0 : c.enableBatching) ? this._postBatchAnalyticsEventLogger(U({}, a)): this._postAnalyticsEventLogger(U({}, a), n.sendIframeMessage)
                            }
                            return this.extendSessionExpiration(), a
                        }))
                    }
                    viewedOnce(e, t = {}, n = {}) {
                        if (!M.viewed[e]) return M.viewed[e] = !0, this.viewed(e, t, n)
                    }
                    viewed(e, t = {}, n = {}) {
                        const r = g(e);
                        return t.viewed_name = r, this.state.lastViewedEventName = r, this.track(`${r}.viewed`, t, n, !1)
                    }
                    modalOnce(e, t = {}, n = {}) {
                        if (!M.modal[e]) return M.modal[e] = !0, this.modal(e, t, n)
                    }
                    modal(e, t = {}, n = {}) {
                        const r = g(e);
                        return t.modal_name = r, t.viewed_name || (t.viewed_name = q(e, this.state.lastViewedEventName)), this.state.lastModalEventName = r, this.track(`${r}.modal`, t, n, !1)
                    }
                    actionOnce(e, t = {}, n = {}) {
                        if (!M.action[e]) return M.action[e] = !0, this.action(e, t, n)
                    }
                    action(e, t = {}, n = {}) {
                        const r = g(e);
                        return t.action_name = r, t.viewed_name || (t.viewed_name = q(e, this.state.lastViewedEventName)), this.track(`${r}.action`, t, n, !1)
                    }
                    linkOnce(e, t = {}, n = {}) {
                        if (!M.link[e]) return M.link[e] = !0, this.link(e, t, n)
                    }
                    link(e, t = {}, n = {}) {
                        const r = g(e);
                        return t.link_name = r, t.viewed_name || (t.viewed_name = q(e, this.state.lastViewedEventName)), this.track(`${r}.link`, t, n, !1)
                    }
                    getClientIDs() {
                        var e = this;
                        return P((function*() {
                            return e.config.memoizeCookieID ? (null === $ && ($ = e._getClientIDs()), $) : e._getClientIDs()
                        }))()
                    }
                    getSessionID() {
                        var e = this;
                        return P((function*() {
                            return e.config.sessionization ? e.config.memoizeCookieID ? (null === z && (z = e._getSessionID()), z) : e._getSessionID() : ""
                        }))()
                    }
                    _postAnalyticsEventLogger(e, t) {
                        var n = this;
                        return P((function*() {
                            const r = n.config.inProduction ? n._namedUrls.prod : n._namedUrls.qa;
                            if (!n.config.clientId) return void h("no_client_id");
                            e.client_id = n.config.clientId, n.cleanAelParams(e);
                            const i = y(e);
                            if (t) t({
                                body: i
                            });
                            else try {
                                const e = yield fetch(r, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded"
                                    },
                                    body: i,
                                    credentials: "omit"
                                });
                                var o, s;
                                return e.ok || null === (o = (s = n.config).onAnalyticsRequestFailed) || void 0 === o || o.call(s, "ael-single-error", 1), e
                            } catch (e) {
                                var a, c;
                                null === (a = (c = n.config).onAnalyticsRequestFailed) || void 0 === a || a.call(c, "ael-single-throws", 1, e)
                            }
                        }))()
                    }
                    _postBatchAnalyticsEventLogger(e) {
                        e.client_id && delete e.client_id, this.cleanAelParams(e), this.batchLogger ? this.batchLogger.pushEvent(U({}, e)) : h("batching_disabled")
                    }
                    constructor(e = s) {
                        var t;
                        j(this, "config", void 0), j(this, "cookies", void 0), j(this, "localStorage", void 0), j(this, "state", void 0), j(this, "trackingFunctions", void 0), j(this, "_namedUrls", {
                            prod: "https://r.stripe.com/0",
                            qa: "https://qa-r.stripe.com/0"
                        }), j(this, "prefix", void 0), j(this, "batchLogger", void 0), j(this, "_extendSessionExpirationPromise", void 0);
                        var n = this;
                        j(this, "_getPrivacyConsentAdvertising", k(P((function*() {
                            var e;
                            if (!(null === (e = n) || void 0 === e ? void 0 : e.cookies)) throw new Error("Cookies must be defined at this point");
                            return n.cookies.isCategoryAllowed("advertising")
                        }))));
                        var i = this;
                        j(this, "_getPrivacyConsentFunctional", k(P((function*() {
                            var e;
                            if (!(null === (e = i) || void 0 === e ? void 0 : e.cookies)) throw new Error("Cookies must be defined at this point");
                            return (yield Promise.all([i.cookies.isCategoryAllowed("preferences"), i.cookies.isCategoryAllowed("statistics")])).some((e => e))
                        }))));
                        var o = this;
                        j(this, "_getClientIDs", k(P((function*() {
                            if (!o.cookies || !o.localStorage) return {
                                cid: "",
                                lsid: ""
                            };
                            const e = o.cookies.get("cid"),
                                t = o.localStorage.get("lsid");
                            if (e && t) return Promise.resolve({
                                cid: e,
                                lsid: t
                            });
                            if (e && !t) return o.localStorage.set("lsid", e).then((() => ({
                                cid: e,
                                lsid: e
                            })));
                            if (t && !e) return o.cookies.set("cid", t).then((() => ({
                                lsid: t,
                                cid: t
                            })));
                            const n = m();
                            return Promise.all([o.cookies.set("cid", n), o.localStorage.set("lsid", n)]).then((() => ({
                                cid: n,
                                lsid: n
                            })))
                        }))));
                        var a = this;
                        j(this, "_getSessionID", k(P((function*() {
                            if (!a.cookies) return "";
                            const e = a.cookies.get("__Secure-sid");
                            if (e) return Promise.resolve(e);
                            const t = m();
                            return Promise.resolve(a.cookies.set("__Secure-sid", t)).then((() => t))
                        }))));
                        var c = this;
                        j(this, "extendSessionExpiration", k(P((function*() {
                            if (c.config.sessionization && c.cookies) {
                                const e = yield c.getSessionID();
                                c.cookies.set("__Secure-sid", e)
                            }
                        })))), j(this, "cleanAelParams", (e => (e.event_name = e.event, delete e.event, e.created = (new Date).getTime() / 1e3, ((e, t) => {
                            for (const n in e) e.hasOwnProperty(n) && !v[n] && (t && t[n] || (e[n] = S))
                        })(e, this.config.safeParams), e)));
                        const {
                            stripeCookiesEnforcementMode: u
                        } = e;
                        var l;
                        this.config = U({}, s, e), this.state = {
                            trackCounter: 0
                        }, this.trackingFunctions = [N], this.prefix = null !== (l = e.namespace) && void 0 !== l ? l : "", (null === (t = e.batchSettings) || void 0 === t ? void 0 : t.enableBatching) && (this.batchLogger = new A(this.config)), "disabled" !== e.useCookies && (this.cookies = new r.LJ({
                            enforcementMode: u
                        }), this.localStorage = new r.mM({
                            enforcementMode: u
                        })), this._extendSessionExpirationPromise = null, this.configure(this.config)
                    }
                }
            },
            6884: function(e, t, n) {
                var r;
                ! function(i, o) {
                    "use strict";
                    var s = "function",
                        a = "undefined",
                        c = "object",
                        u = "string",
                        l = "model",
                        p = "name",
                        d = "type",
                        f = "vendor",
                        h = "version",
                        m = "architecture",
                        g = "console",
                        y = "mobile",
                        v = "tablet",
                        _ = "smarttv",
                        b = "wearable",
                        w = "embedded",
                        S = "Amazon",
                        x = "Apple",
                        E = "ASUS",
                        k = "BlackBerry",
                        O = "Google",
                        I = "Huawei",
                        A = "LG",
                        T = "Microsoft",
                        R = "Motorola",
                        L = "Samsung",
                        C = "Sharp",
                        P = "Sony",
                        j = "Xiaomi",
                        U = "Zebra",
                        M = "Facebook",
                        N = "Chromium OS",
                        D = "Mac OS",
                        B = function(e) {
                            for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                            return t
                        },
                        q = function(e, t) {
                            return typeof e === u && -1 !== Z(t).indexOf(Z(e))
                        },
                        Z = function(e) {
                            return e.toLowerCase()
                        },
                        F = function(e, t) {
                            if (typeof e === u) return e = e.replace(/^\s\s*/, ""), typeof t === a ? e : e.substring(0, 500)
                        },
                        $ = function(e, t) {
                            for (var n, r, i, a, u, l, p = 0; p < t.length && !u;) {
                                var d = t[p],
                                    f = t[p + 1];
                                for (n = r = 0; n < d.length && !u && d[n];)
                                    if (u = d[n++].exec(e))
                                        for (i = 0; i < f.length; i++) l = u[++r], typeof(a = f[i]) === c && a.length > 0 ? 2 === a.length ? typeof a[1] == s ? this[a[0]] = a[1].call(this, l) : this[a[0]] = a[1] : 3 === a.length ? typeof a[1] !== s || a[1].exec && a[1].test ? this[a[0]] = l ? l.replace(a[1], a[2]) : o : this[a[0]] = l ? a[1].call(this, l, a[2]) : o : 4 === a.length && (this[a[0]] = l ? a[3].call(this, l.replace(a[1], a[2])) : o) : this[a] = l || o;
                                p += 2
                            }
                        },
                        z = function(e, t) {
                            for (var n in t)
                                if (typeof t[n] === c && t[n].length > 0) {
                                    for (var r = 0; r < t[n].length; r++)
                                        if (q(t[n][r], e)) return "?" === n ? o : n
                                } else if (q(t[n], e)) return "?" === n ? o : n;
                            return e
                        },
                        H = {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        },
                        V = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [h, [p, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [h, [p, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [p, h],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [h, [p, "Opera Mini"]],
                                [/\bop(?:rg)?x\/([\w\.]+)/i],
                                [h, [p, "Opera GX"]],
                                [/\bopr\/([\w\.]+)/i],
                                [h, [p, "Opera"]],
                                [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                                [h, [p, "Baidu"]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [p, h],
                                [/\bddg\/([\w\.]+)/i],
                                [h, [p, "DuckDuckGo"]],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [h, [p, "UCBrowser"]],
                                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                                [h, [p, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [h, [p, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [h, [p, "IE"]],
                                [/ya(?:search)?browser\/([\w\.]+)/i],
                                [h, [p, "Yandex"]],
                                [/slbrowser\/([\w\.]+)/i],
                                [h, [p, "Smart Lenovo Browser"]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [p, /(.+)/, "$1 Secure Browser"], h
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [h, [p, "Firefox Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [h, [p, "Opera Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [h, [p, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [h, [p, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [h, [p, "Opera Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [h, [p, "MIUI Browser"]],
                                [/fxios\/([-\w\.]+)/i],
                                [h, [p, "Firefox"]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [p, "360 Browser"]
                                ],
                                [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                                [
                                    [p, /(.+)/, "$1 Browser"], h
                                ],
                                [/samsungbrowser\/([\w\.]+)/i],
                                [h, [p, "Samsung Internet"]],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [p, /_/g, " "], h
                                ],
                                [/metasr[\/ ]?([\d\.]+)/i],
                                [h, [p, "Sogou Explorer"]],
                                [/(sogou)mo\w+\/([\d\.]+)/i],
                                [
                                    [p, "Sogou Mobile"], h
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [p, h],
                                [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                                [p],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [p, M], h
                                ],
                                [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                                [p, h],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [h, [p, "GSA"]],
                                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                                [h, [p, "TikTok"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [h, [p, "Chrome Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [p, "Chrome WebView"], h
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [h, [p, "Android Browser"]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [p, h],
                                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                [h, [p, "Mobile Safari"]],
                                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                [h, p],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [p, [h, z, {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [p, h],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [p, "Netscape"], h
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [h, [p, "Firefox Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                                [p, h],
                                [/(cobalt)\/([\w\.]+)/i],
                                [p, [h, /master.|lts./, ""]]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    [m, "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    [m, Z]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    [m, "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    [m, "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    [m, "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    [m, "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    [m, /ower/, "", Z]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    [m, "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    [m, Z]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [l, [f, L],
                                    [d, v]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [l, [f, L],
                                    [d, y]
                                ],
                                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                                [l, [f, x],
                                    [d, y]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [l, [f, x],
                                    [d, v]
                                ],
                                [/(macintosh);/i],
                                [l, [f, x]],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [l, [f, C],
                                    [d, y]
                                ],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [l, [f, I],
                                    [d, v]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                [l, [f, I],
                                    [d, y]
                                ],
                                [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [l, /_/g, " "],
                                    [f, j],
                                    [d, y]
                                ],
                                [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [l, /_/g, " "],
                                    [f, j],
                                    [d, v]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [l, [f, "OPPO"],
                                    [d, y]
                                ],
                                [/\b(opd2\d{3}a?) bui/i],
                                [l, [f, "OPPO"],
                                    [d, v]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [l, [f, "Vivo"],
                                    [d, y]
                                ],
                                [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                                [l, [f, "Realme"],
                                    [d, y]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [l, [f, R],
                                    [d, y]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [l, [f, R],
                                    [d, v]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [l, [f, A],
                                    [d, v]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [l, [f, A],
                                    [d, y]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [l, [f, "Lenovo"],
                                    [d, v]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [l, /_/g, " "],
                                    [f, "Nokia"],
                                    [d, y]
                                ],
                                [/(pixel c)\b/i],
                                [l, [f, O],
                                    [d, v]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [l, [f, O],
                                    [d, y]
                                ],
                                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [l, [f, P],
                                    [d, y]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [l, "Xperia Tablet"],
                                    [f, P],
                                    [d, v]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [l, [f, "OnePlus"],
                                    [d, y]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [l, [f, S],
                                    [d, v]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [l, /(.+)/g, "Fire Phone $1"],
                                    [f, S],
                                    [d, y]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [l, f, [d, v]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [l, [f, k],
                                    [d, y]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [l, [f, E],
                                    [d, v]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [l, [f, E],
                                    [d, y]
                                ],
                                [/(nexus 9)/i],
                                [l, [f, "HTC"],
                                    [d, v]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                [f, [l, /_/g, " "],
                                    [d, y]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [l, [f, "Acer"],
                                    [d, v]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [l, [f, "Meizu"],
                                    [d, y]
                                ],
                                [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                                [l, [f, "Ulefone"],
                                    [d, y]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [f, l, [d, y]],
                                [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [f, l, [d, v]],
                                [/(surface duo)/i],
                                [l, [f, T],
                                    [d, v]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [l, [f, "Fairphone"],
                                    [d, y]
                                ],
                                [/(u304aa)/i],
                                [l, [f, "AT&T"],
                                    [d, y]
                                ],
                                [/\bsie-(\w*)/i],
                                [l, [f, "Siemens"],
                                    [d, y]
                                ],
                                [/\b(rct\w+) b/i],
                                [l, [f, "RCA"],
                                    [d, v]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [l, [f, "Dell"],
                                    [d, v]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [l, [f, "Verizon"],
                                    [d, v]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [l, [f, "Barnes & Noble"],
                                    [d, v]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [l, [f, "NuVision"],
                                    [d, v]
                                ],
                                [/\b(k88) b/i],
                                [l, [f, "ZTE"],
                                    [d, v]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [l, [f, "ZTE"],
                                    [d, y]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [l, [f, "Swiss"],
                                    [d, y]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [l, [f, "Swiss"],
                                    [d, v]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [l, [f, "Zeki"],
                                    [d, v]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [f, "Dragon Touch"], l, [d, v]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [l, [f, "Insignia"],
                                    [d, v]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [l, [f, "NextBook"],
                                    [d, v]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [f, "Voice"], l, [d, y]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [f, "LvTel"], l, [d, y]
                                ],
                                [/\b(ph-1) /i],
                                [l, [f, "Essential"],
                                    [d, y]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [l, [f, "Envizen"],
                                    [d, v]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [l, [f, "MachSpeed"],
                                    [d, v]
                                ],
                                [/\btu_(1491) b/i],
                                [l, [f, "Rotor"],
                                    [d, v]
                                ],
                                [/(shield[\w ]+) b/i],
                                [l, [f, "Nvidia"],
                                    [d, v]
                                ],
                                [/(sprint) (\w+)/i],
                                [f, l, [d, y]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [l, /\./g, " "],
                                    [f, T],
                                    [d, y]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [l, [f, U],
                                    [d, v]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [l, [f, U],
                                    [d, y]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [f, [d, _]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [l, /^/, "SmartTV"],
                                    [f, L],
                                    [d, _]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [f, A],
                                    [d, _]
                                ],
                                [/(apple) ?tv/i],
                                [f, [l, "Apple TV"],
                                    [d, _]
                                ],
                                [/crkey/i],
                                [
                                    [l, "Chromecast"],
                                    [f, O],
                                    [d, _]
                                ],
                                [/droid.+aft(\w+)( bui|\))/i],
                                [l, [f, S],
                                    [d, _]
                                ],
                                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                [l, [f, C],
                                    [d, _]
                                ],
                                [/(bravia[\w ]+)( bui|\))/i],
                                [l, [f, P],
                                    [d, _]
                                ],
                                [/(mitv-\w{5}) bui/i],
                                [l, [f, j],
                                    [d, _]
                                ],
                                [/Hbbtv.*(technisat) (.*);/i],
                                [f, l, [d, _]],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                                [
                                    [f, F],
                                    [l, F],
                                    [d, _]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [d, _]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [f, l, [d, g]],
                                [/droid.+; (shield) bui/i],
                                [l, [f, "Nvidia"],
                                    [d, g]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [l, [f, P],
                                    [d, g]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [l, [f, T],
                                    [d, g]
                                ],
                                [/((pebble))app/i],
                                [f, l, [d, b]],
                                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                                [l, [f, x],
                                    [d, b]
                                ],
                                [/droid.+; (glass) \d/i],
                                [l, [f, O],
                                    [d, b]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [l, [f, U],
                                    [d, b]
                                ],
                                [/(quest( \d| pro)?)/i],
                                [l, [f, M],
                                    [d, b]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [f, [d, w]],
                                [/(aeobc)\b/i],
                                [l, [f, S],
                                    [d, w]
                                ],
                                [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                                [l, [d, y]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [l, [d, v]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [d, v]
                                ],
                                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                [
                                    [d, y]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [l, [f, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [h, [p, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [h, [p, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                                [p, h],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [h, p]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [p, h],
                                [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                                [p, [h, z, H]],
                                [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [h, z, H],
                                    [p, "Windows"]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [h, /_/g, "."],
                                    [p, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [p, D],
                                    [h, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                [h, p],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [p, h],
                                [/\(bb(10);/i],
                                [h, [p, k]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [h, [p, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [h, [p, "Firefox OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [h, [p, "webOS"]],
                                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                                [h, [p, "watchOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [h, [p, "Chromecast"]],
                                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                                [
                                    [p, N], h
                                ],
                                [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [p, h],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [p, "Solaris"], h
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                                [p, h]
                            ]
                        },
                        K = function(e, t) {
                            if (typeof e === c && (t = e, e = o), !(this instanceof K)) return new K(e, t).getResult();
                            var n = typeof i !== a && i.navigator ? i.navigator : o,
                                r = e || (n && n.userAgent ? n.userAgent : ""),
                                l = n && n.userAgentData ? n.userAgentData : o,
                                p = t ? function(e, t) {
                                    var n = {};
                                    for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                                    return n
                                }(V, t) : V,
                                d = n && n.userAgent == r;
                            return this.getBrowser = function() {
                                var e, t = {};
                                return t.name = o, t.version = o, $.call(t, r, p.browser), t.major = typeof(e = t.version) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, d && n && n.brave && typeof n.brave.isBrave == s && (t.name = "Brave"), t
                            }, this.getCPU = function() {
                                var e = {};
                                return e.architecture = o, $.call(e, r, p.cpu), e
                            }, this.getDevice = function() {
                                var e = {};
                                return e.vendor = o, e.model = o, e.type = o, $.call(e, r, p.device), d && !e.type && l && l.mobile && (e.type = y), d && "Macintosh" == e.model && n && typeof n.standalone !== a && n.maxTouchPoints && n.maxTouchPoints > 2 && (e.model = "iPad", e.type = v), e
                            }, this.getEngine = function() {
                                var e = {};
                                return e.name = o, e.version = o, $.call(e, r, p.engine), e
                            }, this.getOS = function() {
                                var e = {};
                                return e.name = o, e.version = o, $.call(e, r, p.os), d && !e.name && l && l.platform && "Unknown" != l.platform && (e.name = l.platform.replace(/chrome os/i, N).replace(/macos/i, D)), e
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function() {
                                return r
                            }, this.setUA = function(e) {
                                return r = typeof e === u && e.length > 500 ? F(e, 500) : e, this
                            }, this.setUA(r), this
                        };
                    K.VERSION = "1.0.38", K.BROWSER = B([p, h, "major"]), K.CPU = B([m]), K.DEVICE = B([l, f, d, g, y, _, v, b, w]), K.ENGINE = K.OS = B([p, h]), typeof t !== a ? (e.exports && (t = e.exports = K), t.UAParser = K) : n.amdO ? (r = function() {
                        return K
                    }.call(t, n, t, e)) === o || (e.exports = r) : typeof i !== a && (i.UAParser = K);
                    var W = typeof i !== a && (i.jQuery || i.Zepto);
                    if (W && !W.ua) {
                        var G = new K;
                        W.ua = G.getResult(), W.ua.get = function() {
                            return G.getUA()
                        }, W.ua.set = function(e) {
                            G.setUA(e);
                            var t = G.getResult();
                            for (var n in t) W.ua[n] = t[n]
                        }
                    }
                }("object" == typeof window ? window : this)
            },
            66149: (e, t, n) => {
                "use strict";
                n.d(t, {
                    R: () => o,
                    Y: () => s
                });
                var r = n(83247),
                    i = {};

                function o() {
                    return (0, r.KV)() ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : i
                }

                function s(e, t, n) {
                    var r = n || o(),
                        i = r.__SENTRY__ = r.__SENTRY__ || {};
                    return i[e] || (i[e] = t())
                }
            },
            83247: (e, t, n) => {
                "use strict";
                n.d(t, {
                    l$: () => o,
                    KV: () => i
                }), e = n.hmd(e);
                var r = n(14224);

                function i() {
                    return !("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call(void 0 !== r ? r : 0)
                }

                function o(e, t) {
                    return e.require(t)
                }
            },
            29939: (e, t, n) => {
                "use strict";
                n.d(t, {
                    ph: () => u,
                    yW: () => c
                });
                var r = n(66149),
                    i = n(83247);
                e = n.hmd(e);
                var o = {
                        nowSeconds: function() {
                            return Date.now() / 1e3
                        }
                    },
                    s = (0, i.KV)() ? function() {
                        try {
                            return (0, i.l$)(e, "perf_hooks").performance
                        } catch (e) {
                            return
                        }
                    }() : function() {
                        var e = (0, r.R)().performance;
                        if (e && e.now) return {
                            now: function() {
                                return e.now()
                            },
                            timeOrigin: Date.now() - e.now()
                        }
                    }(),
                    a = void 0 === s ? o : {
                        nowSeconds: function() {
                            return (s.timeOrigin + s.now()) / 1e3
                        }
                    },
                    c = o.nowSeconds.bind(o),
                    u = a.nowSeconds.bind(a);
                ! function() {
                    var e = (0, r.R)().performance;
                    if (e && e.now) {
                        var t = 36e5,
                            n = e.now(),
                            i = Date.now(),
                            o = e.timeOrigin ? Math.abs(e.timeOrigin + n - i) : t,
                            s = o < t,
                            a = e.timing && e.timing.navigationStart,
                            c = "number" == typeof a ? Math.abs(a + n - i) : t;
                        (s || c < t) && (o <= c && e.timeOrigin)
                    }
                }()
            },
            90708: (e, t, n) => {
                "use strict";
                n.d(t, {
                    C: () => i,
                    E: () => r
                });
                const r = 381,
                    i = `${r}px`
            },
            67987: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Us: () => a,
                    Xo: () => s
                }), n(15610);
                var r = n(42675),
                    i = n(66323);
                const o = {
                        errorText: (0, r.Z)({
                            id: "connectEmbed.accountManagement.errorBoundary.text",
                            defaultMessage: "Your money is secure, but your account information cannot be loaded here."
                        })
                    },
                    s = "show-express-settings",
                    a = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(3591), n.e(5221), n.e(5240), n.e(6856), n.e(5517), n.e(5566), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(6833), n.e(5368), n.e(5207), n.e(6172), n.e(4052), n.e(4245), n.e(2783), n.e(4813), n.e(6074), n.e(7699), n.e(194), n.e(3700), n.e(8523), n.e(1630), n.e(5334), n.e(2148)]).then(n.bind(n, 97999)),
                        messageOverrides: o,
                        enabledKey: "account_management",
                        enabledOverrideFlag: i.TZ.account_management,
                        releaseState: "ga",
                        requiresAuthentication: !0,
                        sentryTeam: "risk_compliance_experiences",
                        teamOwner: "risk-compliance-experiences",
                        htmlAttributes: {
                            "enable-address-autocomplete": {
                                isInternal: !0
                            },
                            [s]: {
                                isInternal: !0
                            }
                        },
                        customHtmlElementMethods: {
                            setDisabledSections: {
                                type: "SupplementalObject",
                                objectToSet: "arkV2DisabledSections",
                                isInternal: !0,
                                description: "Sets the list of sections in account management that are disabled. Currently, only the company, person, support, and external account sections can be disabled."
                            },
                            setHiddenSections: {
                                type: "SupplementalObject",
                                objectToSet: "arkV2HiddenSections",
                                isInternal: !0,
                                description: "Sets the list of sections in account management that are hidden."
                            },
                            setCollectionOptions: {
                                type: "SupplementalObject",
                                objectToSet: "collectionOptions",
                                isInternal: !1,
                                description: "Sets the collection options for the account management form. Includes future_requirements and eventually_due."
                            },
                            setDisableBankConnections: {
                                type: "SupplementalObject",
                                objectToSet: "disableBankConnections",
                                isInternal: !0,
                                description: "Disables the ability to add linked accounts in the external account form."
                            },
                            setIsDirectSettings: {
                                type: "SupplementalObject",
                                objectToSet: "isDirectSettings",
                                isInternal: !0,
                                description: "Indicates whether or not the account management component is being used in direct settings."
                            },
                            setIsOrrM5: {
                                type: "SupplementalObject",
                                objectToSet: "isOrrM5",
                                isInternal: !0,
                                description: "Indicates whether or not the account management component is being used for account that is in ORR M5."
                            }
                        },
                        description: "Displays the account information that was collected during onboarding and allows editing. Also allows for managing user credentials and linked external accounts.",
                        docSitePath: "/connect/supported-embedded-components/account-management",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-acct-mgmt-iframe",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/susacctmgmt-iframe-rc"
                        }
                    }
            },
            86143: (e, t, n) => {
                "use strict";
                n.d(t, {
                    J3: () => b,
                    ye: () => l,
                    wn: () => p,
                    Ec: () => d,
                    oY: () => _,
                    BS: () => s,
                    KL: () => f,
                    o: () => y,
                    KK: () => c,
                    Jl: () => a,
                    QV: () => m,
                    uT: () => h,
                    d3: () => g,
                    ZY: () => u,
                    Z9: () => v
                });
                var r = n(42675);
                n(15610);
                var i = n(66323);
                const o = {
                        errorText: (0, r.Z)({
                            id: "connectEmbed.accountOnboarding.errorBoundary.text",
                            defaultMessage: "Your money is secure, but your account information cannot be loaded here."
                        })
                    },
                    s = "full-terms-of-service-url",
                    a = "recipient-terms-of-service-url",
                    c = "privacy-policy-url",
                    u = "skip-terms-of-service-collection",
                    l = "align",
                    p = "analytics-flow",
                    d = "analytics-prefix",
                    f = "hide-footer-links",
                    h = "show-save-for-later",
                    m = "show-icons",
                    g = "show-verbose-redirect",
                    y = "preselected-legal-entity-token",
                    v = "use-platform-branding-settings",
                    _ = "debug",
                    b = {
                        Component: async () => (async () => await Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(3591), n.e(5221), n.e(5240), n.e(6856), n.e(5517), n.e(5566), n.e(5776), n.e(1715), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(6833), n.e(5368), n.e(393), n.e(5207), n.e(6172), n.e(4052), n.e(4245), n.e(2783), n.e(4813), n.e(7823), n.e(6074), n.e(7699), n.e(194), n.e(3700), n.e(8523), n.e(1630), n.e(4913), n.e(8692), n.e(6023), n.e(6296)]).then(n.bind(n, 96023)))(),
                        htmlAttributes: {
                            [s]: {
                                isInternal: !1
                            },
                            [a]: {
                                isInternal: !1
                            },
                            [c]: {
                                isInternal: !1
                            },
                            [u]: {
                                isInternal: !1
                            },
                            [l]: {
                                isInternal: !0
                            },
                            collect: {
                                isInternal: !0
                            },
                            intent: {
                                isInternal: !0
                            },
                            [p]: {
                                isInternal: !0
                            },
                            [d]: {
                                isInternal: !0
                            },
                            [m]: {
                                isInternal: !0
                            },
                            [g]: {
                                isInternal: !0
                            },
                            [h]: {
                                isInternal: !0
                            },
                            [f]: {
                                isInternal: !0
                            },
                            "enable-address-autocomplete": {
                                isInternal: !0
                            },
                            [y]: {
                                isInternal: !0
                            },
                            [_]: {
                                isInternal: !0
                            },
                            [v]: {
                                isInternal: !0
                            }
                        },
                        htmlEvents: ["exit", "onboardingexited", "stepchange"],
                        customHtmlElementMethods: {
                            setOnExit: {
                                type: "EventListenerMethod",
                                event: "exit",
                                isInternal: !1,
                                description: "Sets the event listener for when the user exits onboarding"
                            },
                            setFullTermsOfServiceUrl: {
                                type: "AttributeSettingMethod",
                                attribute: s,
                                isInternal: !1,
                                description: "Only supported for custom. Sets the full terms of service URL"
                            },
                            setRecipientTermsOfServiceUrl: {
                                type: "AttributeSettingMethod",
                                attribute: a,
                                isInternal: !1,
                                description: "Only supported for custom. Sets the recipient terms of service URL"
                            },
                            setPrivacyPolicyUrl: {
                                type: "AttributeSettingMethod",
                                attribute: c,
                                isInternal: !1,
                                description: "Only supported for custom. Sets the privacy policy URL"
                            },
                            setSkipTermsOfServiceCollection: {
                                type: "AttributeSettingMethod",
                                attribute: u,
                                isInternal: !1,
                                description: "Only supported for custom. Sets whether to skip terms of service collection. Note that if terms of service are not collected as part of onboarding, the platform will have to collect them elsewhere."
                            },
                            setCollectionOptions: {
                                type: "SupplementalObject",
                                objectToSet: "collectionOptions",
                                isInternal: !1,
                                description: "Sets the collection options for the account onboarding form. Includes future_requirements and eventually_due."
                            },
                            setOnStepChange: {
                                type: "EventListenerMethod",
                                event: "stepchange",
                                isInternal: !1,
                                description: "Sets the event listener for when the user changes onboarding step"
                            },
                            setPreselectedLegalEntityToken: {
                                type: "AttributeSettingMethod",
                                attribute: y,
                                isInternal: !0,
                                description: "Sets the preselected legal entity token for the account onboarding form. Used specifically for legal entity sharing only."
                            },
                            setDebug: {
                                type: "AttributeSettingMethod",
                                attribute: _,
                                isInternal: !0,
                                description: "Sets the embedded onboarding component in debug mode, which allows for additional debugging tools to be shown."
                            },
                            setPrefillOptions: {
                                type: "SupplementalObject",
                                objectToSet: "prefillOptions",
                                isInternal: !0,
                                description: "Sets the prefill options for the account onboarding form. Mainly used to pipe through prefill options from OAuth."
                            },
                            setStep: {
                                type: "SupplementalObject",
                                objectToSet: "step",
                                isInternal: !0,
                                description: "Sets the current step of the onboarding form. Used to skip to a specific step."
                            }
                        },
                        messageOverrides: o,
                        enabledKey: "account_onboarding",
                        enabledOverrideFlag: i.TZ.account_onboarding,
                        releaseState: "ga",
                        requiresAuthentication: !0,
                        sentryTeam: "risk_compliance_experiences",
                        teamOwner: "risk-compliance-experiences",
                        description: "Collects information to satisfy requirements on an account to enable its given capabilities. Will also perform the user claim step if the account is not claimed by a user.",
                        docSitePath: "/connect/supported-embedded-components/account-onboarding",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/gb_pss_indv_oauth_y_f",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/conon-us_pns_indv-rc"
                        },
                        applyMobileUIOverrides: !0
                    }
            },
            14382: (e, t, n) => {
                "use strict";
                n.d(t, {
                    MM: () => c,
                    bq: () => i,
                    yY: () => o
                }), n(15610);
                var r = n(66323);
                const i = "app",
                    o = "test",
                    s = "appinstallfetched",
                    a = "appinstallcompleted",
                    c = {
                        Component: async () => await Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(7216), n.e(6706), n.e(8328), n.e(4095), n.e(5481)]).then(n.bind(n, 45011)),
                        htmlAttributes: {
                            [i]: {
                                isInternal: !1
                            },
                            test: {
                                isInternal: !1
                            }
                        },
                        htmlEvents: [s, a],
                        customHtmlElementMethods: {
                            setApp: {
                                type: "AttributeSettingMethod",
                                attribute: i,
                                isInternal: !1,
                                description: "Sets the app id for the app install button"
                            },
                            setOnAppInstallStateFetched: {
                                type: "EventListenerMethod",
                                event: s,
                                isInternal: !1,
                                description: "Sets the event listener for when the app install state is fetched"
                            },
                            setOnAppInstallStateChanged: {
                                type: "EventListenerMethod",
                                event: a,
                                isInternal: !1,
                                description: "Sets the event listener for when the app install state changes (i.e. when the user installs or uninstalls the app)"
                            }
                        },
                        enabledKey: "app_install",
                        enabledOverrideFlag: r.TZ.app_install,
                        disableMinWidth: !0,
                        releaseState: "preview",
                        sentryTeam: "app_platform",
                        teamOwner: "stripe-app-platform",
                        description: "An install button for a stripe app. Allows for installing/uninstalling.",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/embedded-app-install",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/afp-form-interaction"
                        },
                        docSitePath: "/connect/supported-embedded-components/app-install"
                    }
            },
            57618: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Jk: () => s,
                    w7: () => o,
                    y6: () => i
                }), n(15610);
                var r = n(66323);
                const i = "app",
                    o = "user-id",
                    s = {
                        Component: async () => await Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(3591), n.e(5776), n.e(3955), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(608), n.e(4095), n.e(3100), n.e(8582), n.e(7823), n.e(2192), n.e(6618), n.e(3597)]).then(n.bind(n, 56122)),
                        htmlAttributes: {
                            app: {
                                isInternal: !1
                            },
                            "user-id": {
                                isInternal: !1
                            }
                        },
                        enabledKey: "app_onboarding",
                        enabledOverrideFlag: r.TZ.app_onboarding,
                        releaseState: "preview",
                        sentryTeam: "app_platform",
                        teamOwner: "stripe-app-platform",
                        description: 'Renders a Stripe app - more specifically, renders the "embedded.settings" viewport on the configured stripe app id.',
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/embedded-app-settings"
                        },
                        deprecated: {
                            deprecatedMessage: "The app settings component is deprecated. Please use the app viewport component instead."
                        }
                    }
            },
            87866: (e, t, n) => {
                "use strict";
                n.d(t, {
                    DQ: () => o,
                    Ms: () => i
                }), n(15610);
                var r = n(66323);
                const i = "app",
                    o = {
                        Component: async () => await Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(3591), n.e(5776), n.e(3955), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(608), n.e(4095), n.e(3100), n.e(8582), n.e(7823), n.e(2192), n.e(6618), n.e(5833)]).then(n.bind(n, 25637)),
                        htmlAttributes: {
                            [i]: {
                                isInternal: !1
                            }
                        },
                        customHtmlElementMethods: {
                            setApp: {
                                type: "AttributeSettingMethod",
                                attribute: i,
                                isInternal: !1,
                                description: "Sets the app id for the app to render"
                            },
                            setAppData: {
                                type: "SupplementalObject",
                                objectToSet: "appData",
                                isInternal: !1,
                                description: "Sets the app data for the app to render. This is an arbitrary property bag that is passed in to the app."
                            }
                        },
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/embedded-app-viewport",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/afp-form-interaction"
                        },
                        enabledKey: "app_viewport",
                        enabledOverrideFlag: r.TZ.app_viewport,
                        releaseState: "preview",
                        sentryTeam: "app_platform",
                        teamOwner: "stripe-app-platform",
                        description: "Renders a Stripe app - more specifically, renders a viewport of the configured stripe app id.",
                        docSitePath: "/connect/supported-embedded-components/app-viewport"
                    }
            },
            3805: (e, t, n) => {
                "use strict";
                n.d(t, {
                    fG: () => a,
                    fQ: () => s
                }), n(15610);
                var r = n(66323);
                const i = "privacy-policy-url",
                    o = "how-capital-works-url",
                    s = "capital-scheme",
                    a = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(3591), n.e(5221), n.e(5240), n.e(6856), n.e(5517), n.e(5566), n.e(5776), n.e(1715), n.e(9170), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(6833), n.e(5368), n.e(393), n.e(5207), n.e(6172), n.e(4052), n.e(4245), n.e(2783), n.e(4813), n.e(7823), n.e(6074), n.e(7699), n.e(194), n.e(8523), n.e(1630), n.e(4913), n.e(280), n.e(4785), n.e(7620)]).then(n.bind(n, 97620)),
                        enabledKey: "capital_financing_application",
                        enabledOverrideFlag: r.TZ.capital_financing_application,
                        htmlAttributes: {
                            debug: {
                                isInternal: !0
                            },
                            [i]: {
                                isInternal: !1
                            },
                            [o]: {
                                isInternal: !1
                            },
                            [s]: {
                                isInternal: !0
                            }
                        },
                        htmlEvents: ["onapplicationsubmitted", "onapplicationinitiated", "onapplicationstepchange"],
                        customHtmlElementMethods: {
                            setOnApplicationSubmitted: {
                                type: "EventListenerMethod",
                                event: "onapplicationsubmitted",
                                isInternal: !1,
                                description: "Sets the event listener that allows a user to pass in a callback function for when a financing application is submitted."
                            },
                            setPrivacyPolicyUrl: {
                                type: "AttributeSettingMethod",
                                attribute: i,
                                isInternal: !1,
                                description: "Customizes the URL used for the Privacy Policy link in the application component. If not set, will default to Stripe's Privacy Policy."
                            },
                            setHowCapitalWorksUrl: {
                                type: "AttributeSettingMethod",
                                attribute: o,
                                isInternal: !1,
                                description: "Customizes the URL used for links to documentation about the Capital program in the application component. If not set, will default to Stripe Capital's documentation."
                            },
                            setCapitalScheme: {
                                type: "AttributeSettingMethod",
                                attribute: s,
                                isInternal: !0,
                                description: "Sets the CapitalScheme value, used to indicate when the component is rendering in certain Stripe-owned surfaces."
                            },
                            setOnApplicationInitiated: {
                                type: "EventListenerMethod",
                                event: "onapplicationinitiated",
                                isInternal: !0,
                                description: "Allows user to set a callback after the application has been initiated. Used by treatment_1 in `capital_embedded_everywhere_dashboard_experiment`"
                            },
                            setOnApplicationStepChange: {
                                type: "EventListenerMethod",
                                event: "onapplicationstepchange",
                                isInternal: !0,
                                description: "Sets a callback when the application step is navigated"
                            }
                        },
                        releaseState: "preview",
                        sentryTeam: "capital_for_platforms",
                        teamOwner: "capital-for-platforms",
                        description: "Capital offer application that is available in the CapitalFinancingPromotion component but can also be standalone."
                    }
            },
            65302: (e, t, n) => {
                "use strict";
                n.d(t, {
                    DM: () => a,
                    FS: () => s,
                    G: () => i,
                    Hr: () => l,
                    ZS: () => c,
                    bs: () => p,
                    fQ: () => u
                }), n(15610);
                var r = n(66323);
                const i = "layout",
                    o = "privacy-policy-url",
                    s = "eligibility-criteria-url",
                    a = "how-capital-works-url",
                    c = "application-presentation",
                    u = "capital-scheme",
                    l = "support-url",
                    p = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(3591), n.e(5221), n.e(5240), n.e(6856), n.e(5517), n.e(5566), n.e(5776), n.e(1715), n.e(9170), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(6833), n.e(5368), n.e(393), n.e(5207), n.e(6172), n.e(4052), n.e(4245), n.e(2783), n.e(4813), n.e(7823), n.e(6074), n.e(7699), n.e(194), n.e(8523), n.e(1630), n.e(4913), n.e(280), n.e(4785), n.e(8183)]).then(n.bind(n, 51231)),
                        enabledKey: "capital_financing_promotion",
                        enabledOverrideFlag: r.TZ.capital_financing_promotion,
                        htmlAttributes: {
                            [i]: {
                                isInternal: !1
                            },
                            [o]: {
                                isInternal: !1
                            },
                            [s]: {
                                isInternal: !1
                            },
                            [a]: {
                                isInternal: !1
                            },
                            [l]: {
                                isInternal: !0
                            },
                            [c]: {
                                isInternal: !0
                            },
                            [u]: {
                                isInternal: !0
                            },
                            debug: {
                                isInternal: !0
                            }
                        },
                        htmlEvents: ["onapplicationsubmitted", "onviewofferclicked", "oneligiblefinancingofferloaded", "onapplicationstepchange"],
                        customHtmlElementMethods: {
                            setLayout: {
                                type: "AttributeSettingMethod",
                                attribute: i,
                                isInternal: !1,
                                description: 'Sets the layout mode of the component. Valid options are "banner" or "full".'
                            },
                            setPrivacyPolicyUrl: {
                                type: "AttributeSettingMethod",
                                attribute: o,
                                isInternal: !1,
                                description: "Customizes the URL used for the Privacy Policy link in the application component. If not set, will default to Stripe's Privacy Policy."
                            },
                            setEligibilityCriteriaUrl: {
                                type: "AttributeSettingMethod",
                                attribute: s,
                                isInternal: !1,
                                description: "Customizes the URL used for links to eligibility criteria documentation in the promotion component. If not set, will default to Stripe Capital's Eligibility Criteria."
                            },
                            setHowCapitalWorksUrl: {
                                type: "AttributeSettingMethod",
                                attribute: a,
                                isInternal: !1,
                                description: "Customizes the URL used for links to documentation about the Capital program in the promotion component. If not set, will default to Stripe Capital's documentation."
                            },
                            setSupportUrl: {
                                type: "AttributeSettingMethod",
                                attribute: l,
                                isInternal: !0,
                                description: "Sets the support url to display"
                            },
                            setOnApplicationSubmitted: {
                                type: "EventListenerMethod",
                                event: "onapplicationsubmitted",
                                isInternal: !1,
                                description: "Sets the event listener that allows a user to pass in a callback function for when a financing application is submitted."
                            },
                            setOnViewOfferClicked: {
                                type: "EventListenerMethod",
                                event: "onviewofferclicked",
                                isInternal: !0,
                                description: "Allows the user to set a custom callback for the view offer CTA button, overriding the default behavior which opens the financing application in a side drawer or dialog."
                            },
                            setOnEligibleFinancingOfferLoaded: {
                                type: "EventListenerMethod",
                                event: "oneligiblefinancingofferloaded",
                                isInternal: !1,
                                description: "Sets the event listener that allows a user to pass in a callback function for when a financing offer is loaded."
                            },
                            setApplicationPresentation: {
                                type: "AttributeSettingMethod",
                                attribute: c,
                                isInternal: !0,
                                description: "Sets how the offer application is presented upon clicking 'Start application'"
                            },
                            setCapitalScheme: {
                                type: "AttributeSettingMethod",
                                attribute: u,
                                isInternal: !0,
                                description: "Sets the CapitalScheme value, used to indicate when the component is rendering in certain Stripe-owned surfaces."
                            },
                            setOnApplicationStepChange: {
                                type: "EventListenerMethod",
                                event: "onapplicationstepchange",
                                isInternal: !0,
                                description: "Sets a callback when the application step is navigated"
                            }
                        },
                        releaseState: "preview",
                        sentryTeam: "capital_for_platforms",
                        teamOwner: "capital-for-platforms",
                        description: "Displays information about the merchant's eligible financing offers and can open the application form."
                    }
            },
            11514: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Cm: () => o,
                    EJ: () => u,
                    Zm: () => i,
                    fQ: () => c
                }), n(15610);
                var r = n(66323);
                const i = "default-financing-offer",
                    o = "show-financing-selector",
                    s = "how-capital-works-url",
                    a = "support-url",
                    c = "capital-scheme",
                    u = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(5221), n.e(9170), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(6833), n.e(1110), n.e(4245), n.e(7823), n.e(9220), n.e(2626), n.e(280), n.e(6556)]).then(n.bind(n, 73433)),
                        enabledKey: "capital_financing",
                        enabledOverrideFlag: r.TZ.capital_financing,
                        htmlAttributes: {
                            [i]: {
                                isInternal: !1
                            },
                            [o]: {
                                isInternal: !1
                            },
                            [s]: {
                                isInternal: !1
                            },
                            [a]: {
                                isInternal: !1
                            },
                            [c]: {
                                isInternal: !0
                            }
                        },
                        htmlEvents: ["onfinancingsloaded"],
                        customHtmlElementMethods: {
                            setDefaultFinancingOffer: {
                                type: "AttributeSettingMethod",
                                attribute: i,
                                isInternal: !1,
                                description: "Sets the default financing offer to display"
                            },
                            setShowFinancingSelector: {
                                type: "AttributeSettingMethod",
                                attribute: o,
                                isInternal: !1,
                                description: "Controls displaying the financing dropdown selector to allow the merchant to change the focused financing"
                            },
                            setHowCapitalWorksUrl: {
                                type: "AttributeSettingMethod",
                                attribute: s,
                                isInternal: !1,
                                description: 'Sets the "How Capital Works" url to display'
                            },
                            setSupportUrl: {
                                type: "AttributeSettingMethod",
                                attribute: a,
                                isInternal: !0,
                                description: "Sets the support url to display"
                            },
                            setOnFinancingsLoaded: {
                                type: "EventListenerMethod",
                                event: "onfinancingsloaded",
                                isInternal: !1,
                                description: "Sets the event listener that allows a user to pass in a callback function that provides a total financings loaded count."
                            },
                            setCapitalScheme: {
                                type: "AttributeSettingMethod",
                                attribute: c,
                                isInternal: !0,
                                description: "Sets the CapitalScheme value, used to indicate when the component is rendering in certain Stripe-owned surfaces."
                            }
                        },
                        releaseState: "preview",
                        sentryTeam: "capital_for_platforms",
                        teamOwner: "capital-for-platforms",
                        description: "Shows balance and reporting information for active accepted loans or past accepted loans"
                    }
            },
            8275: (e, t, n) => {
                "use strict";
                n.d(t, {
                    f: () => i,
                    t: () => r
                }), n(15610);
                const r = "financial-account",
                    i = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(3591), n.e(8368), n.e(8755), n.e(8815), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(1110), n.e(5207), n.e(2783), n.e(7823), n.e(6074), n.e(3700), n.e(9220), n.e(2626), n.e(4637), n.e(4704), n.e(2776)]).then(n.bind(n, 43067)),
                        enabledKey: "financial_account_transactions",
                        htmlAttributes: {
                            [r]: {
                                isInternal: !1
                            }
                        },
                        customHtmlElementMethods: {
                            setFinancialAccount: {
                                type: "AttributeSettingMethod",
                                attribute: r,
                                isInternal: !1,
                                description: "Sets the financial account id to display transactions for."
                            }
                        },
                        releaseState: "ga",
                        sentryTeam: "treasury_surfaces",
                        teamOwner: "baas-growth",
                        description: "Displays the list of transactions for the given financial account.",
                        docSitePath: "/connect/supported-embedded-components/financial-account-transactions",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-fatransactions-rc",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-fatransactions-rc"
                        }
                    }
            },
            72565: (e, t, n) => {
                "use strict";
                n.d(t, {
                    X: () => i,
                    t: () => r
                }), n(15610);
                const r = "financial-account",
                    i = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(3591), n.e(8368), n.e(8755), n.e(8815), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(1110), n.e(5207), n.e(2783), n.e(7823), n.e(6074), n.e(3700), n.e(9220), n.e(2626), n.e(4637), n.e(4704), n.e(2776)]).then(n.bind(n, 51493)),
                        enabledKey: "financial_account",
                        htmlAttributes: {
                            [r]: {
                                isInternal: !1
                            }
                        },
                        customHtmlElementMethods: {
                            setFinancialAccount: {
                                type: "AttributeSettingMethod",
                                attribute: r,
                                isInternal: !1,
                                description: "Sets the financial account id to display balance and money movement options for."
                            }
                        },
                        releaseState: "ga",
                        sentryTeam: "treasury_surfaces",
                        teamOwner: "baas-growth",
                        description: "Displays balance and money movement options for the given financial account.",
                        docSitePath: "/connect/supported-embedded-components/financial-account",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-financial-acct-rc",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-financial-acct-rc"
                        }
                    }
            },
            21541: (e, t, n) => {
                "use strict";
                n.d(t, {
                    TB: () => i,
                    fB: () => s,
                    p3: () => a,
                    r8: () => o
                }), n(15610);
                var r = n(90708);
                const i = "default-card",
                    o = "card-switching",
                    s = "show-spend-controls",
                    a = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(5526), n.e(4646), n.e(9569), n.e(3591), n.e(5517), n.e(8368), n.e(8755), n.e(1705), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(5368), n.e(6172), n.e(2783), n.e(7823), n.e(4637), n.e(6543), n.e(3467)]).then(n.bind(n, 1029)),
                        enabledKey: "issuing_card",
                        htmlAttributes: {
                            [i]: {
                                isInternal: !1
                            },
                            [o]: {
                                isInternal: !1
                            },
                            [s]: {
                                isInternal: !1
                            }
                        },
                        customHtmlElementMethods: {
                            setDefaultCard: {
                                type: "AttributeSettingMethod",
                                attribute: i,
                                isInternal: !1,
                                description: "Sets the default card to display"
                            },
                            setCardSwitching: {
                                type: "AttributeSettingMethod",
                                attribute: o,
                                isInternal: !1,
                                description: "Controls displaying the card switching UI."
                            },
                            setShowSpendControls: {
                                type: "AttributeSettingMethod",
                                attribute: s,
                                isInternal: !1,
                                description: "Controls displaying the spend controls UI."
                            },
                            setFetchEphemeralKey: {
                                type: "SupplementalFunction",
                                objectToSet: "fetchEphemeralKey",
                                isInternal: !1,
                                description: "Sets the function to fetch an ephemeral key for the card to display PCI specific information for the card (like the entirety of the card number)."
                            }
                        },
                        releaseState: "ga",
                        sentryTeam: "baas_growth",
                        teamOwner: "baas-growth",
                        maxWidth: r.E,
                        description: "Displays a card in a Card UI - allows for switching to other cards, activation and deactivation of cards.",
                        docSitePath: "/connect/supported-embedded-components/issuing-card",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-issuing-card-i-rc",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-issuing-card-i-rc"
                        }
                    }
            },
            92662: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Bv: () => i,
                    Ox: () => o,
                    fB: () => r
                }), n(15610);
                const r = "show-spend-controls",
                    i = "issuing-program",
                    o = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(3591), n.e(5517), n.e(8368), n.e(8755), n.e(1705), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(5368), n.e(1110), n.e(6172), n.e(2783), n.e(7823), n.e(9220), n.e(4637), n.e(6543), n.e(1212)]).then(n.bind(n, 10611)),
                        enabledKey: "issuing_cards_list",
                        htmlAttributes: {
                            [r]: {
                                isInternal: !1
                            },
                            [i]: {
                                isInternal: !1
                            }
                        },
                        customHtmlElementMethods: {
                            setShowSpendControls: {
                                type: "AttributeSettingMethod",
                                attribute: r,
                                isInternal: !1,
                                description: "Controls displaying the spend controls UI."
                            },
                            setIssuingProgram: {
                                type: "AttributeSettingMethod",
                                attribute: i,
                                isInternal: !1,
                                description: "Controls which issuing program should be used for the component."
                            },
                            setFetchEphemeralKey: {
                                type: "SupplementalFunction",
                                objectToSet: "fetchEphemeralKey",
                                isInternal: !1,
                                description: "Sets the function to fetch an ephemeral key for the card to display PCI specific information for the card (like the entirety of the card number)."
                            }
                        },
                        releaseState: "ga",
                        sentryTeam: "baas_growth",
                        teamOwner: "baas-growth",
                        description: "Displays the list of cards on the given Connected Account.",
                        docSitePath: "/connect/supported-embedded-components/issuing-cards-list",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-issuing-list-i-rc",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-issuing-list-i-rc"
                        }
                    }
            },
            67527: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Bm: () => i,
                    Rj: () => c,
                    bm: () => o,
                    ds: () => a
                }), n(15610);
                var r = n(66323);
                const i = "charge-id",
                    o = "visible",
                    s = "inline",
                    a = "payment",
                    c = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4646), n.e(9569), n.e(8368), n.e(7290), n.e(6637), n.e(345), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(6833), n.e(5368), n.e(393), n.e(6172), n.e(4052), n.e(2548), n.e(228), n.e(5527), n.e(7863), n.e(1397)]).then(n.bind(n, 8770)),
                        htmlAttributes: {
                            [i]: {
                                isInternal: !1
                            },
                            [o]: {
                                isInternal: !1
                            },
                            [a]: {
                                isInternal: !1
                            },
                            [s]: {
                                isInternal: !0
                            }
                        },
                        htmlEvents: ["close"],
                        customHtmlElementMethods: {
                            setPayment: {
                                type: "AttributeSettingMethod",
                                attribute: a,
                                isInternal: !1,
                                description: "Sets the payment id to display details for."
                            },
                            setOnClose: {
                                type: "EventListenerMethod",
                                event: "close",
                                isInternal: !1,
                                description: "Sets the event listener for when the payment details overlay is closed"
                            },
                            setInline: {
                                type: "AttributeSettingMethod",
                                attribute: s,
                                isInternal: !0,
                                description: "Sets whether the payment details should be displayed inline or in an overlay."
                            }
                        },
                        enabledKey: "payment_details",
                        enabledOverrideFlag: r.TZ.payment_details,
                        releaseState: "ga",
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        optionalInlineOverlay: !0,
                        description: "Shows details for a given payment. Offers refund and dispute management.",
                        docSitePath: "/connect/supported-embedded-components/payment-details",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-pay-detail-iframe",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/paydetail-iframe-rc"
                        }
                    }
            },
            88759: (e, t, n) => {
                "use strict";
                n.d(t, {
                    J: () => o,
                    l: () => i
                }), n(15610);
                var r = n(66323);
                const i = "payment",
                    o = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4646), n.e(9569), n.e(8368), n.e(6637), n.e(345), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(6833), n.e(5368), n.e(393), n.e(6172), n.e(4052), n.e(2548), n.e(228), n.e(5527), n.e(8574)]).then(n.bind(n, 4607)),
                        htmlAttributes: {
                            [i]: {
                                isInternal: !1
                            }
                        },
                        htmlEvents: ["ondisputesloaded"],
                        customHtmlElementMethods: {
                            setPayment: {
                                type: "AttributeSettingMethod",
                                attribute: i,
                                isInternal: !1,
                                description: "Sets the payment id to display details for."
                            },
                            setOnDisputesLoaded: {
                                type: "EventListenerMethod",
                                event: "ondisputesloaded",
                                isInternal: !1,
                                description: "Sets the event listener that allows a user to pass in a callback function that provides the total number of disputes on a payment."
                            }
                        },
                        enabledKey: "payment_disputes",
                        enabledOverrideFlag: r.TZ.payment_disputes,
                        releaseState: "ga",
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        description: "Shows disputes for a given payment.",
                        docSitePath: "connect/supported-embedded-components/disputes-for-a-payment",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/payment-disputes"
                        }
                    }
            },
            50623: (e, t, n) => {
                "use strict";
                n.d(t, {
                    M: () => s,
                    m: () => a
                }), n(15610);
                var r = n(42675),
                    i = n(66323);
                const o = {
                        errorText: (0, r.Z)({
                            id: "connectEmbed.lpmSettings.errorBoundary.text",
                            defaultMessage: "Your money is secure, but your payment method settings cannot be loaded here."
                        })
                    },
                    s = "payment-method-configuration",
                    a = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(3591), n.e(5221), n.e(5240), n.e(6856), n.e(5517), n.e(5566), n.e(5776), n.e(1715), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(6833), n.e(5368), n.e(393), n.e(5207), n.e(6172), n.e(4052), n.e(4245), n.e(2783), n.e(4813), n.e(7823), n.e(6074), n.e(7699), n.e(194), n.e(8523), n.e(1630), n.e(4913), n.e(8692), n.e(3725)]).then(n.bind(n, 13390)),
                        htmlAttributes: {
                            [s]: {
                                isInternal: !1
                            }
                        },
                        customHtmlElementMethods: {
                            setPaymentMethodConfiguration: {
                                type: "AttributeSettingMethod",
                                attribute: s,
                                isInternal: !1,
                                description: "Sets a payment method configuration ID to render in the compponent"
                            }
                        },
                        messageOverrides: o,
                        releaseState: "preview",
                        enabledKey: "payment_method_settings",
                        enabledOverrideFlag: i.TZ.payment_method_settings,
                        requiresAuthentication: !0,
                        sentryTeam: "lpm_adoption",
                        teamOwner: "merchant-optimization-experience",
                        description: "Displays the list of local payment methods enabled/disabled for the current account, and allows tweaking these methods.",
                        docSitePath: "/connect/supported-embedded-components/payment-method-settings",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-lpms-iframe",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-lpms-iframe-rc"
                        }
                    }
            },
            49835: (e, t, n) => {
                "use strict";
                n.d(t, {
                    E: () => r,
                    Y: () => i
                }), n(15610);
                const r = "payout",
                    i = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5221), n.e(7290), n.e(7216), n.e(6706), n.e(8328), n.e(1429), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(8582), n.e(6833), n.e(5207), n.e(4245), n.e(4813), n.e(2548), n.e(3619), n.e(5094)]).then(n.bind(n, 89291)),
                        htmlAttributes: {
                            [r]: {
                                isInternal: !0
                            }
                        },
                        htmlEvents: ["close"],
                        customHtmlElementMethods: {
                            setPayout: {
                                type: "AttributeSettingMethod",
                                attribute: r,
                                isInternal: !0,
                                description: "Sets the payout id to display details for."
                            },
                            setOnClose: {
                                type: "EventListenerMethod",
                                event: "close",
                                isInternal: !0,
                                description: "Sets the event listener for when the payout details overlay is closed"
                            }
                        },
                        enabledKey: "internal",
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        description: "Shows details for a given payout.",
                        releaseState: "internal",
                        enabledOverrideFlag: "enable_payout_details_component"
                    }
            },
            79264: (e, t, n) => {
                "use strict";
                n.d(t, {
                    T: () => r,
                    Y: () => i
                }), n(15610);
                const r = "data-source",
                    i = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(4646), n.e(9569), n.e(8368), n.e(8755), n.e(8815), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(7823), n.e(4637), n.e(4704), n.e(9879)]).then(n.bind(n, 43221)),
                        enabledKey: "recipients",
                        releaseState: "preview",
                        htmlAttributes: {
                            [r]: {
                                isInternal: !1
                            }
                        },
                        customHtmlElementMethods: {
                            setDataSource: {
                                type: "AttributeSettingMethod",
                                attribute: r,
                                isInternal: !1,
                                description: "Sets the data source to use when displaying recipients."
                            }
                        },
                        sentryTeam: "baas_growth",
                        teamOwner: "baas-growth",
                        description: "Displays the recipients of a Treasury financial account."
                    }
            },
            57623: (e, t, n) => {
                "use strict";
                n.d(t, {
                    _w: () => ee,
                    v4: () => Q
                });
                var r = n(67527),
                    i = n(67987),
                    o = n(86143),
                    s = (n(15610), n(42675)),
                    a = n(66323);
                const c = {
                    Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(3591), n.e(5221), n.e(5240), n.e(6856), n.e(7290), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(6833), n.e(5368), n.e(393), n.e(1110), n.e(5207), n.e(4052), n.e(4245), n.e(2783), n.e(4813), n.e(6074), n.e(7699), n.e(194), n.e(2548), n.e(3700), n.e(9220), n.e(2626), n.e(3619), n.e(4044), n.e(7549), n.e(1986), n.e(8286)]).then(n.bind(n, 45061)),
                    messageOverrides: {
                        errorText: (0, s.Z)({
                            id: "connectEmbed.payouts.errorBoundary.text",
                            defaultMessage: "Your money is secure, but your payouts information cannot be loaded here."
                        })
                    },
                    releaseState: "ga",
                    enabledKey: "payouts",
                    enabledOverrideFlag: a.TZ.payouts,
                    sentryTeam: "accounts_ui",
                    teamOwner: "connected-account-experiences-eng",
                    description: "Displays the list of payouts, allows for manual payouts, instant payouts, and management of payout schedule.",
                    docSitePath: "/connect/supported-embedded-components/payouts",
                    syntheticTestInfo: {
                        testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-payouts-iframe",
                        rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-payouts-iframe-rc"
                    },
                    applyMobileUIOverrides: !0
                };
                var u = n(37413);
                u.XH;
                const l = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(5221), n.e(7290), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(8582), n.e(6833), n.e(1110), n.e(5207), n.e(4245), n.e(4813), n.e(2548), n.e(9220), n.e(2626), n.e(3619), n.e(1986), n.e(2291)]).then(n.bind(n, 90562)),
                        enabledKey: "payouts_list",
                        enabledOverrideFlag: a.TZ.payouts_list,
                        htmlAttributes: {
                            [u.XH]: {
                                isInternal: !0
                            }
                        },
                        releaseState: "ga",
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        description: "Displays the list of payouts.",
                        docSitePath: "/connect/supported-embedded-components/payouts-list",
                        applyMobileUIOverrides: !0
                    },
                    p = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(3591), n.e(5221), n.e(5240), n.e(6856), n.e(7290), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(6833), n.e(5368), n.e(393), n.e(1110), n.e(5207), n.e(4052), n.e(4245), n.e(2783), n.e(4813), n.e(6074), n.e(7699), n.e(194), n.e(2548), n.e(3700), n.e(3619), n.e(4044), n.e(7549), n.e(2838)]).then(n.bind(n, 82950)),
                        enabledKey: "balances",
                        enabledOverrideFlag: a.TZ.balances,
                        htmlAttributes: {
                            "instant-payouts": {
                                isInternal: !0
                            }
                        },
                        applyMobileUIOverrides: !0,
                        releaseState: "ga",
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        description: "Renders the balance for the account. Allows for manual payouts, instant payouts, and management of payout schedule.",
                        docSitePath: "/connect/supported-embedded-components/balances"
                    },
                    d = {
                        errorText: (0, s.Z)({
                            id: "connectEmbed.transactions.errorBoundary.text",
                            defaultMessage: "Your money is secure, but your transactions cannot be loaded here."
                        })
                    },
                    f = (u.cI, {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(5221), n.e(8368), n.e(7290), n.e(6637), n.e(345), n.e(5348), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(6833), n.e(5368), n.e(393), n.e(1110), n.e(5207), n.e(6172), n.e(4052), n.e(4245), n.e(4813), n.e(2548), n.e(9220), n.e(2626), n.e(228), n.e(5527), n.e(3619), n.e(7863), n.e(5805)]).then(n.bind(n, 13523)),
                        messageOverrides: d,
                        releaseState: "internal",
                        enabledKey: "transactions_list",
                        enabledOverrideFlag: a.TZ.transactions_list,
                        htmlAttributes: {
                            [u.cI]: {
                                isInternal: !0
                            }
                        },
                        customHtmlElementMethods: {
                            setDefaultFilters: {
                                type: "SupplementalObject",
                                objectToSet: "transactionsListDefaultFilters",
                                isInternal: !0,
                                description: "Sets the default filters for the transactions list. Includes type only."
                            }
                        },
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        description: "Displays the lists of balance transactions on the given Connected account.",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/transactions-list",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/transactions-list-rc"
                        }
                    }),
                    h = {
                        errorText: (0, s.Z)({
                            id: "connectEmbed.payments.errorBoundary.text",
                            defaultMessage: "Your money is secure, but your payments information cannot be loaded here."
                        })
                    },
                    m = (u.ub, {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(8368), n.e(7290), n.e(6637), n.e(345), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(6833), n.e(5368), n.e(393), n.e(1110), n.e(6172), n.e(4052), n.e(2548), n.e(9220), n.e(2626), n.e(228), n.e(5527), n.e(7863), n.e(7031), n.e(7947)]).then(n.bind(n, 50921)),
                        customHtmlElementMethods: {
                            setDefaultFilters: {
                                type: "SupplementalObject",
                                objectToSet: "paymentsListDefaultFilters",
                                isInternal: !1,
                                description: "Sets the default filters to apply to the payments list. Includes amount, date, status, and payment method."
                            }
                        },
                        htmlAttributes: {
                            [u.ub]: {
                                isInternal: !0
                            }
                        },
                        messageOverrides: h,
                        releaseState: "ga",
                        enabledKey: "payments",
                        enabledOverrideFlag: a.TZ.payments,
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        description: "Displays the list of payments, allows for refund, dispute management, and capturing charges.",
                        docSitePath: "/connect/supported-embedded-components/payments",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-payments-iframe",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-paymentsiframe-rc?filterState=ALL"
                        }
                    }),
                    g = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(8368), n.e(7290), n.e(6637), n.e(345), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(6833), n.e(5368), n.e(393), n.e(1110), n.e(6172), n.e(4052), n.e(2548), n.e(9220), n.e(2626), n.e(228), n.e(5527), n.e(7863), n.e(7031)]).then(n.bind(n, 65079)),
                        messageOverrides: {
                            errorText: (0, s.Z)({
                                id: "connectEmbed.disputes.errorBoundary.text",
                                defaultMessage: "Your money is secure, but your disputes information cannot be loaded here."
                            })
                        },
                        releaseState: "ga",
                        enabledKey: "disputes_list",
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        description: "Displays the list of disputes, allows for dispute management.",
                        enabledOverrideFlag: a.TZ.disputes_list,
                        docSitePath: "connect/supported-embedded-components/disputes-list",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/disputes-list"
                        }
                    },
                    y = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(5526), n.e(4646), n.e(9569), n.e(8368), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(6833), n.e(1110), n.e(4245), n.e(5651)]).then(n.bind(n, 29157)),
                        messageOverrides: {
                            errorText: (0, s.Z)({
                                id: "connectEmbed.instantPayouts.errorBoundary.text",
                                defaultMessage: "Your money is secure, but your payments information cannot be loaded here."
                            })
                        },
                        releaseState: "preview",
                        htmlEvents: ["instantpayoutcreated"],
                        enabledKey: "instant_payouts",
                        enabledOverrideFlag: a.TZ.instant_payouts,
                        componentControlledBackground: !0,
                        sentryTeam: "connect_marketplaces",
                        teamOwner: "connect-integrations",
                        description: "Allows performing instant payouts for an account.",
                        docSitePath: "/connect/supported-embedded-components/instant-payouts",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/instant-payouts",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-ip-iframe-rc"
                        },
                        deprecated: {
                            deprecatedMessage: "The instant payouts component is deprecated. Please use the balances https://docs.corp.stripe.com/connect/supported-embedded-components/balances component instead."
                        }
                    },
                    v = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(4646), n.e(9569), n.e(3591), n.e(5221), n.e(5240), n.e(6856), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(6833), n.e(5368), n.e(5207), n.e(4052), n.e(4245), n.e(2783), n.e(4813), n.e(6074), n.e(7699), n.e(194), n.e(3700), n.e(4044), n.e(235)]).then(n.bind(n, 56739)),
                        enabledKey: "instant_payouts_promotion",
                        htmlEvents: ["oninstantpayoutspromotionloaded", "instantpayoutcreated"],
                        customHtmlElementMethods: {
                            setOnInstantPayoutsPromotionLoaded: {
                                type: "EventListenerMethod",
                                event: "oninstantpayoutspromotionloaded",
                                isInternal: !0,
                                description: "Sets the event listener that allows a user to pass in a callback function for when the promotion is loaded."
                            },
                            setOnInstantPayoutCreated: {
                                type: "EventListenerMethod",
                                event: "instantpayoutcreated",
                                isInternal: !0,
                                description: "Sets the event listener that allows a user to pass in a callback function for when an instant payout is created."
                            }
                        },
                        releaseState: "internal",
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        description: "Displays promotional banner to encourage using instant payouts, along with a button to perform instant payouts."
                    },
                    _ = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(3591), n.e(730), n.e(781), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(5207), n.e(2783), n.e(3700), n.e(228), n.e(2192), n.e(1252), n.e(9955)]).then(n.bind(n, 29070)),
                        enabledKey: "internal",
                        releaseState: "internal",
                        ignoreThemingValues: !0,
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        htmlAttributes: {
                            "debug-utils-test-attribute": {
                                isInternal: !0
                            }
                        },
                        customHtmlElementMethods: {
                            setDebugUtilsTestAttribute: {
                                type: "AttributeSettingMethod",
                                attribute: "debug-utils-test-attribute",
                                isInternal: !0,
                                description: "For testing only. Serves no real purpose."
                            },
                            setFetchAdditionalPaymentPropsInternalDoNotUse: {
                                type: "SupplementalFunction",
                                objectToSet: "fetchAdditionalPaymentPropsInternalDoNotUse",
                                isInternal: !0,
                                description: "For testing only. Serves no real purpose."
                            },
                            setFetchAdditionalPaymentPropsInternalDoNotUse2: {
                                type: "SupplementalFunction",
                                objectToSet: "fetchAdditionalPaymentPropsInternalDoNotUse2",
                                isInternal: !0,
                                description: "For testing only. Serves no real purpose."
                            },
                            setOnDebugUtilsTest: {
                                type: "EventListenerMethod",
                                event: "debugUtilsTestEvent",
                                isInternal: !0,
                                description: "For testing only. Serves no real purpose."
                            },
                            setDebugUtilObjectInternalDoNotUse: {
                                type: "SupplementalObject",
                                objectToSet: "debugUtilObjectInternalDoNotUse",
                                isInternal: !0,
                                description: "For testing only. Serves no real purpose."
                            }
                        },
                        errorConfiguration: {
                            expectedErrors: ["debug-expected-error-internal-only"],
                            mutedErrors: ["debug-muted-error-internal-only"]
                        },
                        description: "Debug utils for Connect embedded components useful for testing. Allows for tweaking flags, theming, among many other things."
                    },
                    b = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(3591), n.e(5221), n.e(5240), n.e(6856), n.e(5517), n.e(5566), n.e(5776), n.e(1715), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(6833), n.e(5368), n.e(393), n.e(1110), n.e(5207), n.e(6172), n.e(4052), n.e(4245), n.e(2783), n.e(4813), n.e(7823), n.e(6074), n.e(7699), n.e(194), n.e(3700), n.e(8523), n.e(1630), n.e(4913), n.e(8692), n.e(6023), n.e(3)]).then(n.bind(n, 32543)),
                        messageOverrides: {
                            errorText: (0, s.Z)({
                                id: "connectEmbed.notificationsBanner.errorBoundary.text",
                                defaultMessage: "Your money is secure, but your payments information cannot be loaded here."
                            })
                        },
                        releaseState: "ga",
                        enabledKey: "notification_banner",
                        enabledOverrideFlag: a.TZ.notification_banner,
                        componentControlledBackground: !0,
                        requiresAuthentication: !0,
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        description: 'When the account has risk interventions or compliance requirements currently due, the banner displays an entry prompting the user to resolve these. Additionally, it will display the "in review" status of those if they are pending. Renders blank if nothing is in review of currently due.',
                        docSitePath: "/connect/supported-embedded-components/notifications-banner",
                        htmlEvents: ["onnotificationschange"],
                        customHtmlElementMethods: {
                            setDisabledSections: {
                                type: "SupplementalObject",
                                objectToSet: "arkV2DisabledSections",
                                isInternal: !0,
                                description: "Sets the list of sections in account management that are disabled. Currently, only the company, person, support, and external account sections can be disabled."
                            },
                            setMobileBannerOptions: {
                                type: "SupplementalObject",
                                objectToSet: "mobileBannerOptions",
                                isInternal: !0,
                                description: "Sets the mobile view type of the banner in hosted dashboard"
                            },
                            setDisableBankConnections: {
                                type: "SupplementalObject",
                                objectToSet: "disableBankConnections",
                                isInternal: !0,
                                description: "Disables the ability to add linked accounts in the external account form."
                            },
                            setCollectionOptions: {
                                type: "SupplementalObject",
                                objectToSet: "collectionOptions",
                                isInternal: !1,
                                description: "Sets the collection options for the account management form. Includes future_requirements and eventually_due."
                            },
                            setOnNotificationsChange: {
                                type: "EventListenerMethod",
                                event: "onnotificationschange",
                                isInternal: !1,
                                description: "Sets the event listener that allows a user to pass in a callback function that provides a total notifications count."
                            }
                        },
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-notibanner-iframe",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/notibanner-iframe-rc"
                        }
                    };
                var w = n(50623),
                    S = n(92662),
                    x = n(21541),
                    E = n(72565),
                    k = n(79264),
                    O = n(8275),
                    I = n(65302),
                    A = n(3805),
                    T = n(11514);
                const R = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(7216), n.e(6706), n.e(8328), n.e(4095), n.e(5970)]).then(n.bind(n, 84676)),
                        enabledKey: "capital_overview",
                        enabledOverrideFlag: a.TZ.capital_overview,
                        releaseState: "preview",
                        sentryTeam: "capital_for_platforms",
                        teamOwner: "capital-for-platforms",
                        description: "Serves as a mini Capital dashboard that allows the user to access their current and past Capital loan information at all times.",
                        deprecated: {
                            deprecatedMessage: "The capital overview component is deprecated."
                        }
                    },
                    L = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(7216), n.e(6706), n.e(8832), n.e(1429), n.e(160), n.e(1101), n.e(9721)]).then(n.bind(n, 51868)),
                        enabledKey: "product_tax_code_selector",
                        releaseState: "preview",
                        sentryTeam: "tax_connect_embedded_components",
                        teamOwner: "tax-connect",
                        docSitePath: "/connect/supported-embedded-components/product-tax-code-selector",
                        customHtmlElementMethods: {
                            setOnTaxCodeSelect: {
                                type: "SupplementalFunction",
                                objectToSet: "onTaxCodeSelect",
                                isInternal: !1,
                                description: "Sets the function to call when the user selects a product tax code."
                            },
                            setHideDescription: {
                                type: "SupplementalObject",
                                objectToSet: "hideDescription",
                                isInternal: !1,
                                description: "Sets whether the product tax code description is hidden."
                            },
                            setDisabled: {
                                type: "SupplementalObject",
                                objectToSet: "disabled",
                                isInternal: !1,
                                description: "Sets whether the product tax code selector is disabled."
                            },
                            setInitialTaxCode: {
                                type: "SupplementalObject",
                                objectToSet: "initialTaxCode",
                                isInternal: !1,
                                description: "Sets the initial product tax code."
                            }
                        },
                        description: "Renders the product tax code selector for the account."
                    },
                    C = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(8636), n.e(5526), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(5368), n.e(1110), n.e(6172), n.e(8523), n.e(6285), n.e(1101), n.e(3280)]).then(n.bind(n, 58794)),
                        enabledKey: "tax_settings",
                        releaseState: "ga",
                        sentryTeam: "tax_connect_embedded_components",
                        teamOwner: "tax-connect",
                        htmlEvents: ["ontaxsettingsupdated"],
                        customHtmlElementMethods: {
                            setDisplayHeadOfficeCountries: {
                                type: "SupplementalObject",
                                objectToSet: "displayHeadOfficeCountries",
                                isInternal: !1,
                                description: "Sets the list of countries that can be chosen for a head office."
                            },
                            setHideProductTaxCodeSelector: {
                                type: "SupplementalObject",
                                objectToSet: "hideProductTaxCodeSelector",
                                isInternal: !1,
                                description: "Disables the ability to set a default product tax code."
                            },
                            setOnTaxSettingsUpdated: {
                                type: "EventListenerMethod",
                                event: "ontaxsettingsupdated",
                                isInternal: !1,
                                description: "Sets the event listener for when tax settings are updated."
                            }
                        },
                        description: "Allows editing the tax settings (tax address and tax code) for the given Connected account.",
                        docSitePath: "/connect/supported-embedded-components/tax-settings",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-tax-sets-iframe"
                        }
                    },
                    P = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(393), n.e(1110), n.e(6285), n.e(66)]).then(n.bind(n, 41528)),
                        enabledKey: "tax_registrations",
                        releaseState: "ga",
                        sentryTeam: "tax_connect_embedded_components",
                        teamOwner: "tax-connect",
                        htmlEvents: ["onaftertaxregistrationadded"],
                        customHtmlElementMethods: {
                            setDisplayCountries: {
                                type: "SupplementalObject",
                                objectToSet: "displayCountries",
                                isInternal: !1,
                                description: "Sets the list of countries that can be chosen for a registration."
                            },
                            setOnAfterTaxRegistrationAdded: {
                                type: "EventListenerMethod",
                                event: "onaftertaxregistrationadded",
                                isInternal: !1,
                                description: "Sets the event listener for when a registration is added."
                            }
                        },
                        description: "Renders the tax registrations for the account. Allows to set and remove tax registrations.",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-tax-regs-iframe"
                        },
                        docSitePath: "/connect/supported-embedded-components/tax-registrations"
                    },
                    j = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(4551), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(8582), n.e(393), n.e(6285), n.e(6851)]).then(n.bind(n, 20635)),
                        enabledKey: "tax_threshold_monitoring",
                        releaseState: "preview",
                        sentryTeam: "tax_connect_embedded_components",
                        teamOwner: "tax-connect",
                        description: "Renders the threshold monitoring information for the account. Allows users to track their sales by tax jurisdiction.",
                        docSitePath: "/connect/supported-embedded-components/tax-threshold-monitoring",
                        customHtmlElementMethods: {
                            setDisplayCountries: {
                                type: "SupplementalObject",
                                objectToSet: "displayCountries",
                                isInternal: !1,
                                description: "Sets the list of countries that will be visible for threshold monitoring."
                            }
                        }
                    },
                    U = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(5526), n.e(5586), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(117), n.e(160), n.e(1110), n.e(8353), n.e(9194), n.e(3644)]).then(n.bind(n, 12051)),
                        enabledKey: "export_tax_transactions",
                        releaseState: "preview",
                        sentryTeam: "tax_connect_embedded_components",
                        teamOwner: "tax-connect",
                        description: "Renders the export tax transactions component for the account.",
                        docSitePath: "/connect/supported-embedded-components/export-tax-transactions"
                    },
                    M = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(8636), n.e(5526), n.e(5517), n.e(3402), n.e(7216), n.e(6706), n.e(8832), n.e(1429), n.e(608), n.e(3100), n.e(1572), n.e(160), n.e(8353), n.e(234)]).then(n.bind(n, 66655)),
                        enabledKey: "internal",
                        releaseState: "internal",
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        description: "A number of sample components (textboxes, buttons, badges, dropdowns, tabs, popovers, dialogs, text...) that allow for previewing the impact of theming API changes. Used for debugging only."
                    },
                    N = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(2690), n.e(687), n.e(730), n.e(7216), n.e(1429), n.e(608), n.e(4095), n.e(117), n.e(1252), n.e(4723)]).then(n.bind(n, 31252)),
                        enabledKey: "internal",
                        releaseState: "internal",
                        ignoreThemingValues: !0,
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        htmlAttributes: {
                            simplified: {
                                isInternal: !0
                            },
                            "from-internal-site": {
                                isInternal: !0
                            }
                        },
                        description: "Allows for configuring theming in Connect embedded components. Used in the Stripe doc site for the theming demo."
                    },
                    D = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(7216), n.e(8832), n.e(608), n.e(2907)]).then(n.bind(n, 81738)),
                        enabledKey: "internal",
                        releaseState: "internal",
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        description: "A number of sample components (textboxes, buttons, badges, dropdowns, tabs, popovers, dialogs, text...) that allow for previewing the impact of theming API changes. Used in the Stripe doc site."
                    };
                var B = n(14382),
                    q = n(57618),
                    Z = n(87866);
                const F = {
                        Component: () => Promise.all([n.e(8130), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(3058), n.e(7216), n.e(6706), n.e(8328), n.e(1429), n.e(3100), n.e(1572), n.e(8582), n.e(5207), n.e(7699), n.e(8981)]).then(n.bind(n, 88975)),
                        messageOverrides: {
                            errorText: (0, s.Z)({
                                id: "connectEmbed.documents.errorBoundary.text",
                                defaultMessage: "Your documents cannot be loaded."
                            })
                        },
                        releaseState: "ga",
                        enabledKey: "documents",
                        enabledOverrideFlag: a.TZ.documents,
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        description: "Displays the list of documents that a Connected account has. Currently it delivers only tax invoices.",
                        docSitePath: "/connect/supported-embedded-components/documents",
                        syntheticTestInfo: {
                            testUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-documents",
                            rcTestUrl: "https://amp.corp.stripe.com/synthetics/us-west-2/sus-docs-iframe-rc"
                        }
                    },
                    $ = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(4551), n.e(5526), n.e(4646), n.e(5240), n.e(8323), n.e(7088), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(117), n.e(393), n.e(1110), n.e(2051), n.e(6347), n.e(3285)]).then(n.bind(n, 71352)),
                        enabledKey: "internal",
                        releaseState: "internal",
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        htmlAttributes: {
                            "chart-aspect-ratio": {
                                isInternal: !0
                            }
                        },
                        applyMobileUIOverrides: !0,
                        description: "A chart that displays the earnings for the given account."
                    },
                    z = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(4551), n.e(5526), n.e(4646), n.e(5240), n.e(8323), n.e(7088), n.e(5348), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(117), n.e(393), n.e(1110), n.e(2548), n.e(2051), n.e(6347), n.e(316)]).then(n.bind(n, 11349)),
                        enabledKey: "internal",
                        releaseState: "internal",
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        htmlAttributes: {
                            icon: {
                                isInternal: !0
                            },
                            "display-name": {
                                isInternal: !0
                            }
                        },
                        description: "A mini-preview of the hosted dashboard. Used in the hosted dashboard configuration page of the standard dashboard."
                    },
                    H = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(8636), n.e(7216), n.e(6706), n.e(8832), n.e(1429), n.e(3100), n.e(1572), n.e(5362)]).then(n.bind(n, 6549)),
                        enabledKey: "internal",
                        releaseState: "internal",
                        ignoreThemingValues: !1,
                        sentryTeam: "accounts_ui",
                        teamOwner: "connected-account-experiences-eng",
                        description: "Documents the list of components, along with their setter methods."
                    },
                    V = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(2690), n.e(687), n.e(8636), n.e(4551), n.e(5526), n.e(4646), n.e(9569), n.e(3591), n.e(5221), n.e(5240), n.e(6856), n.e(5517), n.e(5566), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(1429), n.e(608), n.e(4095), n.e(3100), n.e(117), n.e(1572), n.e(160), n.e(8582), n.e(6833), n.e(5368), n.e(5207), n.e(6172), n.e(4052), n.e(4245), n.e(2783), n.e(4813), n.e(6074), n.e(7699), n.e(194), n.e(3700), n.e(8523), n.e(1630), n.e(5334), n.e(6927)]).then(n.bind(n, 90999)),
                        messageOverrides: {
                            errorText: (0, s.Z)({
                                id: "connectEmbed.accountManagement.errorBoundary.text",
                                defaultMessage: "Your money is secure, but your account information cannot be loaded here."
                            })
                        },
                        enabledKey: "internal",
                        releaseState: "internal",
                        requiresAuthentication: !0,
                        sentryTeam: "risk_compliance_experiences",
                        teamOwner: "risk-compliance-experiences",
                        htmlEvents: ["accountmanagementformclose"],
                        customHtmlElementMethods: {
                            setSectionView: {
                                type: "SupplementalObject",
                                objectToSet: "sectionView",
                                isInternal: !0,
                                description: "Sets the current section and subview of account management to render. Currently, only the company, person, support, and external account sections are supported."
                            },
                            setOnClose: {
                                type: "EventListenerMethod",
                                event: "accountmanagementformclose",
                                isInternal: !0,
                                description: "This is called when the subview is closed."
                            },
                            setDisableBankConnections: {
                                type: "SupplementalObject",
                                objectToSet: "disableBankConnections",
                                isInternal: !0,
                                description: "Disables the ability to add linked accounts in the external account form."
                            }
                        },
                        description: "Displays a form for the specified section of Account management"
                    },
                    K = "report-name",
                    W = "interval-type",
                    G = {
                        Component: () => Promise.all([n.e(8130), n.e(6670), n.e(9938), n.e(687), n.e(4551), n.e(8323), n.e(5586), n.e(2419), n.e(7216), n.e(6706), n.e(8832), n.e(8328), n.e(608), n.e(4095), n.e(160), n.e(8353), n.e(2051), n.e(9194), n.e(3184)]).then(n.bind(n, 98441)),
                        messageOverrides: {
                            errorText: (0, s.Z)({
                                id: "connectEmbed.reportingChart.errorBoundary.text",
                                defaultMessage: "Your money is secure, but your information cannot be loaded here."
                            })
                        },
                        enabledKey: "reporting_chart",
                        releaseState: "preview",
                        htmlAttributes: {
                            [K]: {
                                isInternal: !1
                            },
                            [W]: {
                                isInternal: !1
                            }
                        },
                        customHtmlElementMethods: {
                            setReportName: {
                                type: "AttributeSettingMethod",
                                attribute: K,
                                isInternal: !1,
                                description: "Must be either `gross_volume` or `net_volume`"
                            },
                            setIntervalType: {
                                type: "AttributeSettingMethod",
                                attribute: W,
                                isInternal: !1,
                                description: "Must be either `day`, `week` or `month` if specified. Otherwise defaults to a sensible value based on `intervalStart` and `intervalEnd`"
                            },
                            setIntervalStart: {
                                type: "SupplementalObject",
                                objectToSet: "intervalStart",
                                isInternal: !1,
                                description: "Starting date for data displayed in the chart. When not provided, defaults to available data start"
                            },
                            setIntervalEnd: {
                                type: "SupplementalObject",
                                objectToSet: "intervalEnd",
                                isInternal: !1,
                                description: "Ending date for data displayed in the chart. When not provided, defaults to available data end"
                            }
                        },
                        sentryTeam: "reporting_connect_embedded_components",
                        teamOwner: "reporting-experience",
                        description: "Displays the reporting components."
                    };
                var Y = n(88759),
                    J = n(49835);
                const X = {
                        prod: "https://8ecfcdc4439c49d599927d6a809884f2@errors.stripe.com/574",
                        qa: "https://e79b27bd3cb8482782c2f2ca9f8a557b@qa-errors.stripe.com/773"
                    },
                    Q = {
                        accounts_ui: {
                            prod: "https://6a9b51946de84c52b5c0c5ad058230a3@errors.stripe.com/1014",
                            qa: "https://6efcaeb800c24403ae5cea9ba210db72@qa-errors.stripe.com/747"
                        },
                        app_platform: X,
                        baas_growth: {
                            prod: "https://682ac19261e942e2936aa1f50297f61a@errors.stripe.com/1340",
                            qa: "https://a90b6412d87944a89b3988486b83752a@qa-errors.stripe.com/929"
                        },
                        capital_for_platforms: {
                            prod: "https://06c9f1c2a35345b3be0a22276e35776c@errors.stripe.com/829",
                            qa: "https://d57c15b111ab457dafee9d61ae5bc7ee@qa-errors.stripe.com/606"
                        },
                        climate: {
                            prod: "https://2225b2409b274ba28f86dd1500df9b80@errors.stripe.com/400",
                            qa: "https://5de5a9ccbb5b4e61ba5f8b6d92b16e14@qa-errors.stripe.com/321"
                        },
                        connect_marketplaces: {
                            prod: "https://d80c16c3b59744e292e05ecf82e8d14f@errors.stripe.com/1430",
                            qa: "https://dd0a610cb4be448986f84b0c604f2a69@qa-errors.stripe.com/978"
                        },
                        connect_merchant_risk: {
                            prod: "https://7fbb198ac857435fbed12ab6aea7fa07@errors.stripe.com/1187",
                            qa: "https://c3525bf5c75e44089df7640172d8641e@qa-errors.stripe.com/845"
                        },
                        connect_product_distribution_infra: {
                            prod: "https://19da6e896e914cab86072e56d00409ea@errors.stripe.com/1013",
                            qa: "https://e9820f8179d84d7b927e739968fa824c@qa-errors.stripe.com/782"
                        },
                        embedded_risk_resolution_path: {
                            prod: "https://474878f282724c91addc0bd782366c3c@errors.stripe.com/494",
                            qa: "https://dbec2996263b41e784b2eb17afe0e0d7@qa-errors.stripe.com/391"
                        },
                        lpm_adoption: {
                            prod: "https://c5e4ec25663542c5abab9b19bc6a2eea@errors.stripe.com/764",
                            qa: "https://182f37e560ec428684709a77c2752abb@qa-errors.stripe.com/825"
                        },
                        recipient_payouts: {
                            prod: "https://88dbb7aeb7844faf8367b124be618a37@errors.stripe.com/902",
                            qa: "https://ccbf6697940a4940a1f87b6c965b9813@qa-errors.stripe.com/668"
                        },
                        reporting_connect_embedded_components: {
                            prod: "https://63561184653544e79ccc7f30a5f0b29d@errors.stripe.com/1358",
                            qa: "https://daff771ca5f04e39b02155a613a8d5a8@qa-errors.stripe.com/940"
                        },
                        risk_compliance_experiences: {
                            prod: "https://aa9a1009979a485a83908dc4eb913d60@errors.stripe.com/869",
                            qa: "https://1df6437310974b5690b5dc3134cad9c2@qa-errors.stripe.com/678"
                        },
                        risk_experience: {
                            prod: "https://474878f282724c91addc0bd782366c3c@errors.stripe.com/494",
                            qa: "https://dbec2996263b41e784b2eb17afe0e0d7@qa-errors.stripe.com/391"
                        },
                        sail_core: {
                            prod: "https://28219678049240a7b5ccd5c4fa8075fe@errors.stripe.com/992",
                            qa: "https://e78e80651cc645a1bab10afbcb4a7e28@qa-errors.stripe.com/853"
                        },
                        tax_connect_embedded_components: {
                            prod: "https://fd7fbe8598594f35806d6ba7e725be7b@errors.stripe.com/1207",
                            qa: "https://fe48aae7360446649e2ec700de5eb4bf@qa-errors.stripe.com/859"
                        },
                        tax_reporting: {
                            prod: "https://3268f825654f42209ab17cb950343c05@errors.stripe.com/366",
                            qa: "https://e486f31e03b041a9af0ef45a896d8185@qa-errors.stripe.com/285"
                        },
                        tailor: X,
                        treasury_surfaces: {
                            prod: "https://ce6fba07eeaa4bdd99ffd52dc96de8b6@errors.stripe.com/335",
                            qa: "https://1790cff15c7244fa8fd9bd4963171a57@qa-errors.stripe.com/262"
                        }
                    },
                    ee = {
                        "stripe-connect-account-management": i.Us,
                        "stripe-connect-account-onboarding": o.J3,
                        "stripe-connect-balances": p,
                        "stripe-connect-documents": F,
                        "stripe-connect-notification-banner": b,
                        "stripe-connect-payment-details": r.Rj,
                        "stripe-connect-payment-disputes": Y.J,
                        "stripe-connect-payments": m,
                        "stripe-connect-payouts": c,
                        "stripe-connect-payouts-list": l,
                        "stripe-connect-product-tax-code-selector": L,
                        "stripe-connect-issuing-card": x.p3,
                        "stripe-connect-issuing-cards-list": S.Ox,
                        "stripe-connect-financial-account": E.X,
                        "stripe-connect-financial-account-transactions": O.f,
                        "stripe-connect-tax-registrations": P,
                        "stripe-connect-tax-settings": C,
                        "stripe-connect-tax-threshold-monitoring": j,
                        "stripe-connect-export-tax-transactions": U,
                        "stripe-connect-instant-payouts": y,
                        "stripe-connect-instant-payouts-promotion": v,
                        "stripe-connect-debug-components-list": H,
                        "stripe-connect-debug-hosted-dashboard-preview": z,
                        "stripe-connect-debug-ui-config": N,
                        "stripe-connect-debug-ui-library": D,
                        "stripe-connect-debug-ui-preview": M,
                        "stripe-connect-debug-utils": _,
                        "stripe-connect-account-management-form": V,
                        "stripe-connect-capital-financing": T.EJ,
                        "stripe-connect-capital-financing-application": A.fG,
                        "stripe-connect-capital-financing-promotion": I.bs,
                        "stripe-connect-capital-overview": R,
                        "stripe-connect-disputes-list": g,
                        "stripe-connect-earnings-chart": $,
                        "stripe-connect-payment-method-settings": w.m,
                        "stripe-connect-recipients": k.Y,
                        "stripe-connect-reporting-chart": G,
                        "stripe-connect-transactions-list": f,
                        "stripe-connect-payout-details": J.Y,
                        "stripe-connect-app-install": B.MM,
                        "stripe-connect-app-onboarding": { ...B.MM,
                            deprecated: {
                                deprecatedMessage: "The app onboarding component is deprecated. Please use the app install component instead."
                            }
                        },
                        "stripe-connect-app-settings": q.Jk,
                        "stripe-connect-app-viewport": Z.DQ,
                        "stripe-instant-payouts-experience": y
                    }
            },
            37413: (e, t, n) => {
                "use strict";
                n.d(t, {
                    XH: () => i,
                    cI: () => o,
                    ub: () => r
                });
                const r = "recent-payments",
                    i = "recent-payouts",
                    o = "recent-transactions"
            },
            8237: (e, t, n) => {
                "use strict";
                n.d(t, {
                    $k: () => i,
                    sz: () => s
                }), n(15610);
                var r = n(49278);
                const i = e => 401 === e,
                    o = r.createContext({
                        isSessionInvalidOrExpired: !1,
                        latestError: void 0,
                        setIsSessionInvalidOrExpired: () => {}
                    }),
                    s = () => r.useContext(o)
            },
            71811: (e, t, n) => {
                "use strict";
                n.d(t, {
                    k2: () => o
                }), n(25766), n(16329), n(51027), n(216);
                var r = n(57623);
                const i = (0, n(75606).E)(r._w),
                    o = e => !!e && i.includes(e);
                i.reduce(((e, t) => ({ ...e,
                    [t.replace("stripe-connect-", "")]: t
                })), {})
            },
            58175: (e, t, n) => {
                "use strict";
                n.d(t, {
                    EQ: () => u,
                    Jd: () => i,
                    OC: () => o,
                    Tu: () => a,
                    eK: () => c
                });
                var r = n(94374);
                const i = "2020-08-27",
                    o = {
                        api: {
                            tunnel: (0, r.He)("api"),
                            devbox: (0, r.Yl)("api"),
                            qa: "qa-api.stripe.com",
                            preprod: "preprod-api.stripe.com",
                            prod: "api.stripe.com"
                        },
                        files: {
                            tunnel: (0, r.He)("upload"),
                            devbox: (0, r.Yl)("upload"),
                            qa: "qa-files.stripe.com",
                            preprod: "preprod-files.stripe.com",
                            prod: "files.stripe.com"
                        },
                        site: {
                            tunnel: (0, r.He)("site"),
                            devbox: (0, r.Yl)("site"),
                            qa: "qa.stripe.com",
                            preprod: "preprod.stripe.com",
                            prod: "stripe.com"
                        },
                        connect: {
                            tunnel: (0, r.He)("manage"),
                            devbox: (0, r.Yl)("manage"),
                            qa: "qa-connect.stripe.com",
                            preprod: "preprod-connect.stripe.com",
                            prod: "connect.stripe.com"
                        },
                        admin: {
                            tunnel: (0, r.He)("admin"),
                            devbox: (0, r.Yl)("admin"),
                            qa: "qa-dashboard.stripe.com",
                            preprod: "admin.qa.corp.stripe.com",
                            prod: "admin.corp.stripe.com"
                        },
                        dashboard: {
                            tunnel: (0, r.He)("manage"),
                            devbox: (0, r.Yl)("manage"),
                            qa: "qa-dashboard.stripe.com",
                            preprod: "preprod-dashboard.stripe.com",
                            prod: "dashboard.stripe.com"
                        },
                        stripejs: {
                            tunnel: (0, r.He)("stripejs"),
                            devbox: (0, r.Yl)("stripejs"),
                            qa: "qa-js.stripe.com/v3/",
                            preprod: "preprod-js.stripe.com/v3/",
                            prod: "js.stripe.com/v3/"
                        },
                        accounts: {
                            tunnel: (0, r.He)("recipient_payouts_hosted_onboarding"),
                            devbox: (0, r.Yl)("recipient_payouts_hosted_onboarding"),
                            qa: "qa-accounts.stripe.com",
                            preprod: "preprod-accounts.stripe.com",
                            prod: "accounts.stripe.com"
                        }
                    },
                    s = (e, t) => {
                        const n = (0, r.cx)(t);
                        return o[e][n]
                    },
                    a = e => s("api", e),
                    c = e => s("connect", e),
                    u = e => s("dashboard", e)
            },
            42449: (e, t, n) => {
                "use strict";
                n.d(t, {
                    N3: () => r,
                    SR: () => i
                }), n(77253), n(51027), n(216), n(24876);
                const r = e => e instanceof Error ? e.message : String(e),
                    i = e => ({
                        errorMessage: e.message,
                        errorResponse: e.error
                    })
            },
            31955: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Q: () => r
                }), n(15610), n(17929), n(61965), n(51027), n(216);
                const r = () => {
                    const e = new URL(window.location.href).hash.replace("#", "");
                    return "true" === new URLSearchParams(e).get("stripe_internal_running_in_iframe")
                }
            },
            35455: (e, t, n) => {
                "use strict";
                n.d(t, {
                    C: () => r
                });
                class r {
                    constructor() {
                        this.promise = new Promise(((e, t) => {
                            this.resolve = e, this.reject = t
                        }))
                    }
                }
            },
            13662: (e, t, n) => {
                "use strict";
                n.d(t, {
                    U: () => i
                });
                const r = (0, n(4781).Kz)();

                function i(e, t) {
                    r.error(null != t ? t : "Thing that should never be set is set", JSON.parse(JSON.stringify(e)))
                }
            },
            5837: (e, t, n) => {
                "use strict";
                n.d(t, {
                    j: () => u
                }), n(15610), n(17929), n(61965);
                var r = n(44578),
                    i = n(2293),
                    o = n(54809),
                    s = n(66323),
                    a = n(52955);
                const c = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.X,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href;
                        const n = {},
                            c = new Set(Object.values(s.hn).map((e => e.toLowerCase()))),
                            u = (0, a.Q)(t);
                        u.forEach(((e, t) => {
                            if (!c.has(t.toLowerCase())) return;
                            const r = "true" === e.toLowerCase();
                            n[t] = r
                        }));
                        const l = (0, r.g)(new URL((0, i.tj)())),
                            p = n[s.hn.STRIPE_INTERNAL_OVERRIDE_FLAGS_IN_EXTERNAL_DOMAINS];
                        return l || e || p ? n : {}
                    }(),
                    u = () => c
            },
            66323: (e, t, n) => {
                "use strict";
                n.d(t, {
                    IC: () => o,
                    TZ: () => r,
                    hn: () => s,
                    wQ: () => i
                });
                const r = {
                        account_management: "enable_account_management_component",
                        account_onboarding: "enable_account_onboarding_component",
                        app_onboarding: "enable_app_onboarding_component",
                        app_install: "enable_app_install_component",
                        app_viewport: "enable_app_viewport_component",
                        balances: "enable_balances_component",
                        capital_financing: "enable_capital_financing_component",
                        capital_financing_application: "enable_capital_financing_application_component",
                        capital_financing_promotion: "enable_capital_financing_promotion_component",
                        capital_overview: "enable_capital_overview_component",
                        payment_disputes: "enable_payment_disputes_component",
                        disputes_list: "enable_disputes_list_component",
                        documents: "enable_documents_component",
                        instant_payouts: "enable_instant_payouts_component",
                        instant_payouts_promotion: "enable_instant_payouts_promotion_component",
                        issuing_card: "enable_issuing_card_component",
                        issuing_cards_list: "enable_issuing_cards_list_component",
                        issuing_cardholder_create: "enable_issuing_cardholder_create_component",
                        notification_banner: "enable_notification_banner_component",
                        payment_details: "enable_payment_details_component",
                        payment_method_settings: "enable_payment_method_settings_component",
                        payments: "enable_payments_component",
                        payouts: "enable_payouts_component",
                        payouts_list: "enable_payouts_list_component",
                        product_tax_code_selector: "enable_product_tax_code_selector_component",
                        tax_registrations: "enable_tax_registrations_component",
                        tax_settings: "enable_tax_settings_component",
                        tax_threshold_monitoring: "enable_tax_threshold_monitoring_component",
                        export_tax_transactions: "enable_export_tax_transactions_component",
                        transactions_list: "enable_transactions_list_component",
                        financial_account: "enable_financial_account_component",
                        financial_account_transactions: "enable_financial_account_transactions_component",
                        treasury_financial_account: "enable_treasury_financial_account_component",
                        recipients: "enable_recipients_component",
                        reporting_chart: "enable_reporting_chart_component"
                    },
                    i = {
                        ENABLE_DEVELOPER_IDS: "enable_developer_ids",
                        SHOW_ARK_DEBUG_TOOLS: "show_ark_debug_tools",
                        ENABLE_UICONFIG_COPY_LINK: "enable_uiconfig_copy_link",
                        ENABLE_UICONFIG_THEME_PRESETS: "enable_uiconfig_theme_presets",
                        STRIPE_INTERNAL_OVERRIDE_FLAGS_IN_EXTERNAL_DOMAINS: "stripe_internal_override_flags_in_external_domains",
                        ENABLE_SUS_DUAL_REPORTING: "enable_sus_dual_reporting",
                        ENABLE_SESSIONS_DEMO: "enable_sessions_demo",
                        ENABLE_DEV_NOTICES: "enable_dev_notices"
                    },
                    o = {
                        ENABLE_PERSONALIZATION_DESIGN_SELECTION_ON_ISSUING_CARD_CREATION: "enable_personalization_design_selection_on_issuing_card_creation",
                        ENABLE_ISSUING_API: "enable_issuing_api",
                        ENABLE_TREASURY_API: "enable_treasury_api",
                        ENABLE_TREASURY_TESTMODE: "enable_treasury_testmode",
                        ENABLE_TAX_FORMS_SECTION_SUS: "enable_tax_forms_section_sus",
                        INSTANT_PAYOUTS_RTP_DISABLED: "instant_payouts_rtp_disabled",
                        INSTANT_PAYOUTS_TO_DEBIT_CARDS_DISABLED: "instant_payouts_to_debit_cards_disabled",
                        CARD_PRESENT_BRING_YOUR_OWN_GATEWAY_PARAM_DOCS: "card_present_bring_your_own_gateway_param_docs",
                        ENABLE_TOPUPS: "enable_topups",
                        ENABLE_ACF_IN_EMBEDDED_PAYOUT_METHOD_EDIT: "enable_acf_in_embedded_payout_method_edit",
                        ENABLE_ADD_LINKED_ACCOUNTS: "enable_add_linked_accounts",
                        ENABLE_DEBIT_CARD_ENTRY: "enable_debit_card_entry",
                        BANK_CONNECTIONS_IN_ONBOARDING_UNIFIED: "bank_connections_in_onboarding_unified",
                        PLATFORM_EXTERNAL_ACCOUNT_SETTINGS_ENABLED: "platform_external_account_settings_enabled",
                        ENABLE_BANK_ACCOUNT_VERIFICATION_ALTERNATIVE_METHODS: "enable_bank_account_verification_alternative_methods",
                        AUTO_REPRESENTMENT_ENABLE_EMBEDDED_COMPONENTS: "auto_representment_enable_embedded_components",
                        BAV_ENABLE_FC_OVERRIDE_PEAS: "bav_enable_fc_override_peas",
                        FINANCIAL_CONNECTIONS_ENABLE_CA_ACCOUNTS: "financial_connections_enable_ca_accounts",
                        ENABLE_BANK_ACCOUNT_VERIFICATION_UPLOAD_FLOW: "enable_bank_account_verification_upload_flow",
                        ENABLE_BANK_ACCOUNT_VERIFICATION_NAME_UPDATE: "enable_bank_account_verification_name_update",
                        ENABLE_ALL_MOBILE_SDK_ACCOUNT_CONFIGURATIONS: "enable_all_mobile_sdk_account_configurations",
                        ENABLE_PAYOUT_SCHEDULE_ONBOARDING_ARK_V2_EMBEDDED_FLAG: "enable_payout_schedule_onboarding_ark_v2_embedded_flag",
                        ENABLE_PAYOUT_SCHEDULE_ONBOARDING_ARK_V2_EMBEDDED_FLAG_GLOBAL: "enable_payout_schedule_onboarding_ark_v2_embedded_flag_global",
                        IR_KNEE_INVENT_MANUAL_BANK_ACCOUNT_ONBOARDING_FLAG: "ir_knee_invent_manual_bank_account_onboarding_flag",
                        ARKV2_DISABLE_DISABLE_SUBMIT_BUTTON_ON_FRONTEND_VALIDATION_ERRORS: "arkv2_disable_disable_submit_button_on_frontend_validation_errors",
                        ENABLE_CONNECT_MOBILE_SDK_PRIVATE_PREVIEW: "enable_connect_mobile_sdk_private_preview",
                        VISA_APRIL_2025_COMPLIANCE_FEE_UPDATE: "visa_april_2025_compliance_fee_update",
                        ENABLE_EMBEDDED_METADATA_FILTER_IN_PAYMENTS_LIST: "enable_embedded_metadata_filter_in_payments_list",
                        ENABLE_EMBEDDED_EMAIL_FILTER_IN_PAYMENTS_LIST: "enable_embedded_email_filter_in_payments_list",
                        ENABLE_EMBEDDED_DOC_SITE_THEMING_PRESETS: "enable_embedded_doc_site_theming_presets",
                        ENABLE_METADATA_IN_PAYMENT_DETAILS: "enable_metadata_in_payment_details"
                    },
                    s = { ...o,
                        ...i,
                        ...r
                    }
            },
            2125: (e, t, n) => {
                "use strict";
                n.d(t, {
                    r9: () => s
                }), n(25766), n(15610), n(17929), n(61965), n(51027), n(216), n(77253);
                var r = n(54809);
                const i = e => {
                    const t = e.host.toLowerCase();
                    return t.startsWith("localhost") || t.startsWith("127.0.0.1") || "MISSING_ENV_VAR".USER && t.includes(String("MISSING_ENV_VAR".USER)) ? "devbox" : t.startsWith("qa-") ? "qa" : t.startsWith("preprod-") || t.startsWith("edge-") ? "preprod" : "prod"
                };
                let o;
                ! function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.currentScript,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.X;
                    if (o && !e) return;
                    const n = null == e ? void 0 : e.getAttribute("src");
                    if (!n) return;
                    const s = new URL(n, window.location.href),
                        a = s.pathname.split("/");
                    a.pop();
                    const c = a[a.length - 1].match(/^v\d+\.\d+$/i);
                    c && a.pop();
                    const u = a.join("/");
                    let {
                        origin: l
                    } = s;
                    t && (l = s.origin.replace("localhost", "127.0.0.1")), o = {
                        origin: l,
                        absoluteFolderPath: l + u,
                        serviceEnvironment: i(s)
                    }
                }(document.currentScript);
                const s = () => {
                    if (!o) throw new Error("Script location was not computed");
                    return o
                }
            },
            4781: (e, t, n) => {
                "use strict";
                n.d(t, {
                    K8: () => c,
                    Kz: () => a,
                    Rc: () => o
                });
                var r = n(54809);
                const i = {
                        log: function(e) {},
                        info: function(e) {},
                        warn: function(e) {},
                        error: function(e) {}
                    },
                    o = {
                        log: console.log.bind(console),
                        info: console.info.bind(console),
                        warn: console.warn.bind(console),
                        error: console.error.bind(console)
                    },
                    s = r.X ? o : i,
                    a = () => s,
                    c = e => e ? o : i
            },
            75606: (e, t, n) => {
                "use strict";
                n.d(t, {
                    E: () => r
                });
                const r = Object.keys
            },
            94374: (e, t, n) => {
                "use strict";
                n.d(t, {
                    He: () => o,
                    Yl: () => s,
                    cx: () => a
                });
                var r = n(54809);
                const i = (0, n(4781).Kz)(),
                    o = e => `${"MISSING_ENV_VAR".USER}-${e}.tunnel.stripe.me`,
                    s = e => `${(()=>{const e="MISSING_ENV_VAR".DEVBOX_QUALIFIER||"MISSING_ENV_VAR".QUALIFIER;return e?`${"MISSING_ENV_VAR".USER}-${e}-`:`${"MISSING_ENV_VAR".USER}-`})()}-${e}-mydev.dev.stripe.me`,
                    a = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "MISSING_ENV_VAR".SERVICE_ENVIRONMENT,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.X;
                        if (!n || "devbox" !== e || !t) return e;
                        const o = t.toLowerCase();
                        switch (o) {
                            case "tunnel":
                            case "devbox":
                            case "qa":
                            case "preprod":
                            case "prod":
                                return o;
                            default:
                                return i.error("Devbox only target override is not a recognized value", t), e
                        }
                    }
            },
            84089: (e, t, n) => {
                "use strict";
                n.d(t, {
                    QF: () => s,
                    a6: () => i,
                    ib: () => r,
                    xP: () => o
                });
                const r = "accept-language",
                    i = "stripe-account",
                    o = "stripe-livemode",
                    s = "stripe-version"
            },
            54809: (e, t, n) => {
                "use strict";
                n.d(t, {
                    X: () => r
                });
                const r = !1
            },
            52955: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Q: () => i
                }), n(15610), n(17929), n(61965), n(51027), n(216);
                var r = n(31955);
                const i = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href;
                    const t = new URL(e);
                    if ((0, r.Q)()) {
                        const e = t.hash.replace("#", "");
                        return new URLSearchParams(e)
                    }
                    return t.searchParams
                }
            },
            92153: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Gf: () => s,
                    VJ: () => o,
                    xj: () => i
                }), n(15610), n(16329), n(25766);
                var r = n(84089);

                function i(e) {
                    if (!e) return {};
                    if (Array.isArray(e) || e instanceof Headers) {
                        const t = {};
                        for (const n of e) {
                            const [e, r] = n;
                            t[e] = r
                        }
                        return t
                    }
                    return e
                }
                const o = "empty_account_header";

                function s(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!t) return e;
                    const i = Object.keys(e).map((e => e.toLowerCase())),
                        s = Object.keys(e).reduce(((t, n) => (t[n.toLocaleLowerCase()] = e[n], t)), {}),
                        a = { ...s
                        };
                    return t.stripeAccount && !i.includes(r.a6) && (a[r.a6] = t.stripeAccount), n && a[r.a6] === o && delete a[r.a6], t.acceptLanguage && !i.includes(r.ib) && (a[r.ib] = t.acceptLanguage), i.includes(r.QF) || (a[r.QF] = t.stripeVersion), "boolean" != typeof t.stripeLivemode || i.includes(r.xP) || (a[r.xP] = t.stripeLivemode.toString()), a
                }
            },
            17337: (e, t, n) => {
                "use strict";
                n.d(t, {
                    DH: () => d,
                    HV: () => l,
                    QO: () => f
                }), n(77253), n(15610);
                var r = n(82480),
                    i = n(49278),
                    o = n(65263),
                    s = n(76343);

                function a(e, t, n, r, i, o, s) {
                    try {
                        var a = e[o](s),
                            c = a.value
                    } catch (e) {
                        return void n(e)
                    }
                    a.done ? t(c) : Promise.resolve(c).then(r, i)
                }

                function c(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, i) {
                            var o = e.apply(t, n);

                            function s(e) {
                                a(o, r, i, s, c, "next", e)
                            }

                            function c(e) {
                                a(o, r, i, s, c, "throw", e)
                            }
                            s(void 0)
                        }))
                    }
                }
                const u = i.createContext(null);
                u.displayName = "FetchContext";
                const l = (p = c((function*(e) {
                    try {
                        const n = yield e.json();
                        if (!e.ok) {
                            var t;
                            const r = n.error || {},
                                i = (null == r ? void 0 : r.message) || "unknown error";
                            throw new s.A(`HTTP status code: ${e.status}. Reason: ${i}`, {
                                code: null == r ? void 0 : r.code,
                                httpStatus: e.status,
                                message: null == r ? void 0 : r.message,
                                messageCode: null == r ? void 0 : r.message_code,
                                requestId: (null === (t = e.headers) || void 0 === t ? void 0 : t.get("request-id")) || void 0,
                                type: null == r ? void 0 : r.type
                            })
                        }
                        return n
                    } catch (e) {
                        if (e && e instanceof s.A) throw e;
                        if (e && e instanceof Error) throw new o.fX(null == e ? void 0 : e.message, e);
                        throw new o.fX("Unknown error", e)
                    }
                })), function(e) {
                    return p.apply(this, arguments)
                });
                var p;
                const d = e => {
                        let {
                            fetchOverride: t,
                            children: n
                        } = e;
                        const i = function() {
                            var e = c((function*() {
                                const e = yield t(...arguments);
                                return l(e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        return (0, r.jsx)(u.Provider, {
                            value: i,
                            children: n
                        })
                    },
                    f = () => i.useContext(u)
            },
            65263: (e, t, n) => {
                "use strict";
                n.d(t, {
                    SF: () => a,
                    AI: () => u,
                    fX: () => c,
                    L3: () => l
                }), n(77253);
                var r = n(76343);
                const i = e => !e || e < 100 ? "unknown" : e < 200 ? "1xx" : e < 300 ? "2xx" : e < 400 ? "3xx" : e < 500 ? "4xx" : e < 600 ? "5xx" : "unknown";

                function o(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                const s = "LOCAL_BROWSER_FILE_READ_ERROR";
                class a extends Error {
                    constructor(e, t) {
                        super(e), o(this, "internalError", void 0), this.internalError = t, this.name = "FetchError"
                    }
                }
                class c extends Error {
                    constructor(e, t) {
                        super(e), o(this, "internalError", void 0), this.name = "NativeFetchError", this.internalError = t
                    }
                }
                class u extends Error {
                    constructor(e) {
                        super(e), this.name = "LoadStripeJSError"
                    }
                }
                const l = e => {
                        const t = p(e) ? e : void 0;
                        if (t) return d(t);
                        const n = e instanceof r.A ? e : void 0;
                        if (n) return f(n.error);
                        const i = e instanceof c ? e : void 0;
                        if (i) return h(i);
                        const o = e instanceof u ? e : void 0;
                        if (o) return m(o);
                        const s = e instanceof a ? e : void 0;
                        if (s) return g(s);
                        const l = e instanceof Error ? e : void 0;
                        if (l) return {
                            stripeErrorRawType: `NONAPIERROR:${l.name}`,
                            stripeErrorMessage: l.message,
                            stripeErrorCode: l.message,
                            stripeRequestId: "NONAPIERROR"
                        };
                        let y = "";
                        try {
                            y = JSON.stringify(e)
                        } catch (e) {
                            y = "JSON.stringify failed"
                        }
                        return {
                            stripeErrorRawType: "UNKNOWNOBJECTTYPE:" + typeof e,
                            stripeErrorCode: `JSONSTRING:${y}`,
                            stripeErrorMessage: `JSONSTRING:${y}`,
                            stripeRequestId: "UNKNOWNOBJECTTYPE"
                        }
                    },
                    p = e => !!e && "object" == typeof e && "http_status" in e,
                    d = e => {
                        var t, n, r;
                        return {
                            stripeStatusCode: e.http_status,
                            stripeStatusCodeRange: i(e.http_status),
                            stripeErrorMessage: e.message,
                            stripeRequestId: null !== (n = e.request_id) && void 0 !== n ? n : void 0,
                            stripeErrorCode: e.code || (null === (t = e.error) || void 0 === t ? void 0 : t.code) || e.message_code,
                            stripeErrorRawType: null !== (r = e.type) && void 0 !== r ? r : void 0
                        }
                    },
                    f = e => ({
                        stripeStatusCode: e.httpStatus,
                        stripeStatusCodeRange: i(e.httpStatus),
                        stripeErrorMessage: e.message,
                        stripeRequestId: e.requestId,
                        stripeErrorCode: e.code || e.messageCode,
                        stripeErrorRawType: e.type
                    }),
                    h = e => {
                        var t;
                        return {
                            stripeStatusCode: 0,
                            stripeStatusCodeRange: "NONE",
                            stripeErrorMessage: `${e.message}. Internal error: ${null===(t=e.internalError)||void 0===t?void 0:t.message}`,
                            stripeRequestId: "NONE",
                            stripeErrorCode: "UNKNOWN",
                            stripeErrorRawType: `${e.name}. Internal error:${e.internalError.name}`
                        }
                    },
                    m = e => ({
                        stripeStatusCode: 0,
                        stripeStatusCodeRange: "NONE",
                        stripeErrorMessage: `Internal error: ${e.message}`,
                        stripeRequestId: "NONE",
                        stripeErrorCode: "UNKNOWN",
                        stripeErrorRawType: `${e.name}. Internal error:${e.message}`
                    }),
                    g = e => {
                        var t, n;
                        return {
                            stripeStatusCode: void 0,
                            stripeStatusCodeRange: "NONE",
                            stripeRequestId: "NONE",
                            stripeErrorCode: s,
                            stripeErrorRawType: s,
                            stripeErrorMessage: `${e.message} : ${null!==(n=null===(t=e.internalError)||void 0===t?void 0:t.message)&&void 0!==n?n:""}`
                        }
                    }
            },
            76343: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => r,
                    Q: () => i
                }), n(77253), n(15610);
                class r extends Error {
                    constructor(e, t) {
                        var n, r;
                        super(e), r = void 0, (n = "error") in this ? Object.defineProperty(this, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : this[n] = r, this.error = t, this.name = "FetchError"
                    }
                }
                const i = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return Object.entries(e).forEach((e => {
                        let [r, o] = e;
                        null != o && ("object" == typeof o ? i(o, t ? `${t}[${r}]` : r, n) : n.push(`${t?`${t}[${r}]`:r}=${encodeURIComponent(o)}`))
                    })), n.join("&")
                }
            },
            2293: (e, t, n) => {
                "use strict";
                n.d(t, {
                    pR: () => o,
                    tj: () => i
                }), n(15610), n(17929), n(61965), n(51027), n(216);
                const r = () => {
                        const e = new URL(window.location.href).hash.replace("#", "");
                        return new URLSearchParams(e).get("platformUrl")
                    },
                    i = () => r() || window.location.href,
                    o = () => {
                        const e = r();
                        return e ? new URL(e).origin : window.location.origin
                    }
            },
            44578: (e, t, n) => {
                "use strict";
                n.d(t, {
                    g: () => r
                });
                const r = e => {
                    const t = e.hostname.toLowerCase();
                    return t.endsWith(".furever.dev") || t.endsWith(".poseyoga.fit") || t.endsWith("stripe-connect-furever.onrender.com") || t.endsWith("stripe-connect-test.onrender.com") || t.endsWith(".vercelapp.stripe.dev") || t.endsWith("stripe-connect-furever-ops-test.onrender.com") || t.endsWith("issuing-embedded-components-app.vercel.app") || t.endsWith("property-management-tau.vercel.app") || t.endsWith("embedded-finance-app.vercel.app") || t.endsWith("gym-management-mvhg.vercel.app") || t.endsWith("coffee-shop-management-liard.vercel.app") || t.endsWith("connecttest.onrender.com") || t.endsWith(".stripedemos.com") || t.endsWith(".stripe.com") || t.endsWith(".stripe.me") || "localhost" === t || "stripe.com" === t || "127.0.0.1" === t || t.endsWith("hamster-dance.onrender.com")
                }
            },
            42675: (e, t, n) => {
                "use strict";

                function r(e) {
                    return e
                }
                n.d(t, {
                    Z: () => r
                })
            },
            93774: (e, t, n) => {
                "use strict";
                n.d(t, {
                    aD: () => u,
                    j: () => d,
                    oC: () => p,
                    p4: () => l,
                    q$: () => f
                });
                var r = n(89423),
                    i = n(67770),
                    o = n(3165);

                function s(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                const a = {
                        action: "analyticsAction",
                        link: "analyticsLink",
                        modal: "analyticsModal",
                        track: "analyticsTrack",
                        viewed: "analyticsViewed"
                    },
                    c = e => (t, n, c) => {
                        var u, l, p;
                        if (!t || (null === (u = t.analytics) || void 0 === u ? void 0 : u.disabled)) return;
                        const d = t._tmp_dualReporting ? (h = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    })))), r.forEach((function(t) {
                                        s(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, c), m = null != (m = {
                                _tdr_id: (0, o.Z)()
                            }) ? m : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(m)) : function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            }(Object(m)).forEach((function(e) {
                                Object.defineProperty(h, e, Object.getOwnPropertyDescriptor(m, e))
                            })), h) : c,
                            f = null === (p = t._internal_observability) || void 0 === p || null === (l = p.analytics) || void 0 === l ? void 0 : l[e];
                        var h, m, g;
                        if (f && (f(t, n, (0, r.Z)(t, d)), !t._tmp_dualReporting)) return;
                        const y = null !== (g = t.rpc) && void 0 !== g ? g : (0, i.i)().client,
                            v = a[e],
                            _ = t._tmp_dualReporting ? `_tdr.${n}` : n;
                        y.call(v, t, _, d)
                    },
                    u = c("action"),
                    l = c("link"),
                    p = c("modal"),
                    d = c("track"),
                    f = c("viewed")
            },
            10602: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    action: () => y,
                    link: () => v,
                    modal: () => _,
                    track: () => b,
                    viewed: () => w
                });
                var r = n(89423),
                    i = (n(16329), n(11391)),
                    o = n(44627),
                    s = n(53716);

                function a(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                const c = new Set(["frontend.data.success", "frontend.data.permissions_success", "frontend.data.permissions_error", "frontend.data.prefetch.hover.abort.350ms", "frontend.data.prefetch.hover.success.350ms", "frontend.data.overprefetch", "frontend.data.underprefetch", "preloaded_experiment_retrieved"]);
                class u {
                    injectGoogleAnalytics() {
                        return !!this.aelReporter.config.googleAnalytics || !!this.deprecatedReporter.config.googleAnalytics
                    }
                    configure(e) {
                        this.aelReporter.configure(e), this.deprecatedReporter.configure(e)
                    }
                    callLogFiltered(e, t, n) {
                        if (this.filterExperiments(e, t, this.experimentsList)) return n()
                    }
                    trackOnce(e, t = {}, n = {}, r) {
                        return this.callLogFiltered(e, t.experiment_name, (() => this.deprecatedReporter.trackOnce(e, t, n, r))), this.aelReporter.trackOnce(e, t, n, r)
                    }
                    track(e, t = {}, n = {}, r = !0, i = (() => {})) {
                        return c.has(e) || this.callLogFiltered(e, t.experiment_name, (() => this.deprecatedReporter.track(e, t, n, r, i))), this.aelReporter.track(e, t, n, r, i)
                    }
                    viewedOnce(e, t = {}, n = {}) {
                        return this.callLogFiltered(e, t.experiment_name, (() => this.deprecatedReporter.viewedOnce(e, t, n))), this.aelReporter.viewedOnce(e, t, n)
                    }
                    viewed(e, t = {}, n = {}) {
                        return this.callLogFiltered(e, t.experiment_name, (() => this.deprecatedReporter.viewed(e, t, n))), this.aelReporter.viewed(e, t, n)
                    }
                    modalOnce(e, t = {}, n = {}) {
                        return this.callLogFiltered(e, t.experiment_name, (() => this.deprecatedReporter.modalOnce(e, t, n))), this.aelReporter.modalOnce(e, t, n)
                    }
                    modal(e, t = {}, n = {}) {
                        return this.callLogFiltered(e, t.experiment_name, (() => this.deprecatedReporter.modal(e, t, n))), this.aelReporter.modal(e, t, n)
                    }
                    actionOnce(e, t = {}, n = {}) {
                        return this.callLogFiltered(e, t.experiment_name, (() => this.deprecatedReporter.actionOnce(e, t, n))), this.aelReporter.actionOnce(e, t, n)
                    }
                    action(e, t = {}, n = {}) {
                        return this.callLogFiltered(e, t.experiment_name, (() => this.deprecatedReporter.action(e, t, n))), this.aelReporter.action(e, t, n)
                    }
                    linkOnce(e, t = {}, n = {}) {
                        return this.callLogFiltered(e, t.experiment_name, (() => this.deprecatedReporter.linkOnce(e, t, n))), this.aelReporter.linkOnce(e, t, n)
                    }
                    link(e, t = {}, n = {}) {
                        return this.callLogFiltered(e, t.experiment_name, (() => this.deprecatedReporter.link(e, t, n))), this.aelReporter.link(e, t, n)
                    }
                    getPreviousEventId() {
                        return this.aelReporter.getPreviousEventId()
                    }
                    constructor(e, t, n, r) {
                        a(this, "aelReporter", void 0), a(this, "deprecatedReporter", void 0), a(this, "experimentsList", void 0), a(this, "filterExperiments", void 0), this.aelReporter = new s.PF(e), this.deprecatedReporter = new s.PF(t), this.experimentsList = n, this.filterExperiments = r
                    }
                }
                n(15610);
                const l = ["service", "project", "component", "errorCode", "errorMessage", "errorPath", "errorExpected", "errorMuted", "errorSource", "error_code", "error_message", "error_path", "error_expected", "error_muted", "error_source", "operationName", "operationPrefetch", "operationDeduplicate", "operation_name", "operation_prefetch", "operation_deduplicate", "networkDuration", "networkStatus", "networkActionId", "networkRequestId", "networkTraceId", "networkLoadId", "network_duration", "network_status", "network_action_id", "network_request_id", "network_trace_id", "network_load_id", "query_name", "field_accesses", "locale", "messageKey", "translationResult", "service", "release", "project", "error_message", "error_handled", "error_issue_id", "error_issue_url", "errorBoundaryUuid", "id", "first_render_duration", "last_render_duration", "shortest_render_duration", "longest_render_duration", "average_render_duration", "render_count", "first_track_duration", "last_track_duration", "shortest_track_duration", "longest_track_duration", "average_track_duration", "track_count", "start_reason", "stop_reason", "time_to_network_duration_exclusive", "time_to_network_duration_inclusive", ...n(72794).hV, "issued_at"];
                var p = n(85362),
                    d = n(85960);

                function f(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                const h = {
                        overrideTrackingUrl: {
                            prod: "https://t.stripe.com/",
                            qa: "https://t.stripe.com/"
                        }
                    },
                    m = (0, o.Z)((e => {
                        const {
                            service: t,
                            userId: n,
                            pageViewToken: r,
                            parametersAllowList: o,
                            disableCookies: a,
                            maxPageLength: c,
                            cookieEnforcementMode: m,
                            useLegacyEndpoint: g
                        } = e;
                        if (!t) return (0, d.Z)(new p.lx), null;
                        const y = a ? "disabled" : "newCookies",
                            v = {
                                clientId: t,
                                inProduction: "production" === (0, i.Z)(),
                                safeParams: (null != o ? o : []).concat(l).reduce(((e, t) => (e[t] = !0, e)), {}),
                                useCookies: y,
                                maxPageLength: null != c ? c : 300,
                                stripeCookiesEnforcementMode: m,
                                cookies: {
                                    user: n
                                },
                                pageviewtoken: r,
                                batchSettings: {
                                    enableBatching: !0
                                }
                            };
                        return g ? new u(v, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                })))), r.forEach((function(t) {
                                    f(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, v, h), [], (() => !0)) : new s.PF(v)
                    })),
                    g = e => (t, n, i) => {
                        var o, s;
                        if (!t || (null === (o = t.analytics) || void 0 === o ? void 0 : o.disabled)) return;
                        const {
                            service: a,
                            userId: c,
                            pageViewToken: u,
                            analytics: l
                        } = t, p = m({
                            service: a,
                            userId: c,
                            pageViewToken: u,
                            parametersAllowList: null == l ? void 0 : l.parametersAllowList,
                            disableCookies: null == l ? void 0 : l.disableCookies,
                            cookieEnforcementMode: null == l ? void 0 : l.cookieEnforcementMode,
                            useLegacyEndpoint: null == l ? void 0 : l.useLegacyEndpoint,
                            maxPageLength: null == l ? void 0 : l.maxPageLength
                        });
                        null == p || null === (s = p[e]) || void 0 === s || s.call(p, n, (0, r.Z)(t, i))
                    },
                    y = g("action"),
                    v = g("link"),
                    _ = g("modal"),
                    b = g("track"),
                    w = g("viewed")
            },
            89423: (e, t, n) => {
                "use strict";

                function r(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function i(e, t) {
                    var n;
                    const i = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            })))), i.forEach((function(t) {
                                r(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, e.page ? {
                        page: e.page
                    } : {}, e.project ? {
                        project: e.project
                    } : {}, e.userId ? {
                        user_id: e.userId
                    } : {}, e.release ? {
                        release: e.release
                    } : {}, null === (n = e.analytics) || void 0 === n ? void 0 : n.parameters, t);
                    if (0 !== Object.keys(i).length) return i
                }
                n.d(t, {
                    Z: () => i
                })
            },
            85362: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Qm: () => a,
                    VY: () => o,
                    c9: () => i,
                    lx: () => s,
                    nw: () => c
                }), n(77253);
                class r extends Error {
                    constructor(e) {
                        super(`[@sail/observability] ${e}`)
                    }
                }
                class i extends r {
                    constructor() {
                        super("Trying to access module before initialization!")
                    }
                }
                class o extends r {
                    constructor(e) {
                        super(`Missing sentry project! Please provide a valid DSN for '${e}' in 'errors.projects'.`)
                    }
                }
                class s extends r {
                    constructor() {
                        super("Missing service name! Please initialize '@sail/observability' with a valid service name.")
                    }
                }
                class a extends r {
                    constructor() {
                        super("Trying to call init on an already initialized module!")
                    }
                }
                class c extends r {
                    constructor(e) {
                        super(`Please make sure that '${e}' is used inside an '<ObservabilityProvider />`)
                    }
                }
            },
            85960: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                }), n(15610);
                var r = n(11391);

                function i(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "error";
                    const n = (0, r.Z)();
                    if ("development" === n) {
                        for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) o[s - 2] = arguments[s];
                        switch (t) {
                            case "error":
                            default:
                                console.error(e, ...o);
                                break;
                            case "warning":
                                console.warn(e, ...o);
                                break;
                            case "info":
                                console.log(e, ...o)
                        }
                    }
                }
            },
            75067: (e, t, n) => {
                "use strict";

                function r(e, t, n, r, i, o, s) {
                    try {
                        var a = e[o](s),
                            c = a.value
                    } catch (e) {
                        return void n(e)
                    }
                    a.done ? t(c) : Promise.resolve(c).then(r, i)
                }

                function i(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, o) {
                            var s = e.apply(t, n);

                            function a(e) {
                                r(s, i, o, a, c, "next", e)
                            }

                            function c(e) {
                                r(s, i, o, a, c, "throw", e)
                            }
                            a(void 0)
                        }))
                    }
                }
                n.d(t, {
                    H: () => c,
                    N: () => s
                }), n(15610);
                const o = new Map;

                function s(e, t) {
                    return a.apply(this, arguments)
                }

                function a() {
                    return (a = i((function*(e, t) {
                        if (o.has(e)) return;
                        const r = Promise.all([n.e(6637), n.e(1875), n.e(1119)]).then(n.bind(n, 11119));
                        o.set(e, r.then((e => {
                            let {
                                default: n
                            } = e;
                            return new n(t)
                        })))
                    }))).apply(this, arguments)
                }

                function c(e, t, n, r) {
                    return u.apply(this, arguments)
                }

                function u() {
                    return (u = i((function*(e, t, n, r) {
                        const i = yield o.get(t);
                        null == i || i[e](n, r)
                    }))).apply(this, arguments)
                }
            },
            64949: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    var n, r, i, o;
                    const s = null === (o = null === (n = e.metrics) || void 0 === n ? void 0 : n._tmp_disableAllowList) || void 0 === o || o,
                        a = new Set(null === (r = e.metrics) || void 0 === r ? void 0 : r.parametersAllowList),
                        c = (null === (i = e.metrics) || void 0 === i ? void 0 : i.parameters) || {},
                        u = {};
                    for (const e in c) c.hasOwnProperty(e) && (u[e] = a.has(String(e)) || s ? c[e] : "[REDACTED]");
                    for (const e in t) t.hasOwnProperty(e) && (u[e] = a.has(String(e)) || s ? t[e] : "[REDACTED]");
                    if (0 !== Object.keys(u).length) return u
                }
                n.r(t), n.d(t, {
                    gauge: () => h,
                    increment: () => f,
                    set: () => m
                }), n(15610), n(61965);
                var i = n(79499),
                    o = n(11391);
                n(51027), n(216);
                var s = n(85362),
                    a = n(85960);

                function c(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                const u = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    l = (0, i.Z)((() => {
                        (0, a.Z)(new s.lx)
                    }));

                function p(e, t, n) {
                    const r = e.service;
                    if (!r) return void l();
                    const i = {
                            client_id: r,
                            event_id: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                                let t = 16 * Math.random() | 0;
                                return ("x" === e ? t : 3 & t | 8).toString(16)
                            })),
                            event_name: t,
                            created: `${Math.floor((new Date).getTime()/1e3)}`
                        },
                        s = e.pageViewToken,
                        a = "production" === (0, o.Z)() ? "https://r.stripe.com/0" : "https://qa-r.stripe.com/0",
                        p = new URLSearchParams(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                })))), r.forEach((function(t) {
                                    c(e, t, n[t])
                                }))
                            }
                            return e
                        }({}, n, s ? {
                            page_view_id: s
                        } : {}, i));
                    "undefined" != typeof navigator && "function" == typeof navigator.sendBeacon ? navigator.sendBeacon(a, p) : fetch(a, {
                        method: "POST",
                        headers: u,
                        mode: "no-cors",
                        keepalive: !0,
                        body: p.toString()
                    })
                }
                const d = e => function(t, n) {
                        var i;
                        if (!t || (null === (i = t.metrics) || void 0 === i ? void 0 : i.disabled)) return;
                        for (var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++) s[a - 2] = arguments[a];
                        const c = [...s],
                            u = "increment" === e ? 0 : 1;
                        c[u] = r(t, c[u]), p(t, n, Object.assign({}, ...c))
                    },
                    f = d("increment"),
                    h = d("gauge"),
                    m = d("set")
            },
            72794: (e, t, n) => {
                "use strict";

                function r(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                n.d(t, {
                    qu: () => d,
                    hV: () => f
                }), n(15610), n(77253);
                class i {
                    get eventName() {
                        return this.name
                    }
                    get eventData() {
                        return this.data
                    }
                    drop() {
                        this.data = Object.create(null)
                    }
                    constructor(e) {
                        r(this, "name", void 0), r(this, "data", void 0), this.name = e, this.data = Object.create(null), this.name = e, this.track = this.track.bind(this)
                    }
                }
                class o extends i {
                    track(e) {
                        var t, n, r;
                        null !== (r = (t = this.data)[n = e]) && void 0 !== r || (t[n] = 0), this.data[e]++
                    }
                }
                const s = new o("frontend.platform-ui.banner-count"),
                    a = new o("frontend.platform-ui.dashboard-page-templates"),
                    c = new class extends i {
                        track(e, t, n) {
                            var r, i, o, s, a, c;
                            null !== (s = (r = this.data)[i = e]) && void 0 !== s || (r[i] = Object.create(null)), null !== (a = (o = this.data[e]).count) && void 0 !== a || (o.count = 0), this.data[e].count++;
                            const u = null !== (c = this.data[e].areaData) && void 0 !== c ? c : Object.create(null);
                            var l;
                            const p = null !== (l = u[t]) && void 0 !== l ? l : Object.create(null);
                            var d;
                            const f = null !== (d = p[n]) && void 0 !== d ? d : 0;
                            p[n] = f + 1, u[t] = p, this.data[e].areaData = u
                        }
                    }("frontend.platform-ui.org-globals-usage-count"),
                    u = new o("frontend.platform-ui.stripelet-count"),
                    l = new o("i18n_translation_format_message_total"),
                    p = new class extends i {
                        track(e, t) {
                            var n, r, i;
                            null !== (i = (n = this.eventData)[r = e]) && void 0 !== i || (n[r] = 0), this.eventData[e] += t
                        }
                    }("i18n_translation_format_message_sml_total"),
                    d = {
                        bannerCount: s,
                        dashboardPageTemplates: a,
                        stripeletCount: u,
                        usageByMount: new o("frontend.platform-ui.usage-by-mount"),
                        orgGlobalsAreaCount: c,
                        translationCount: l,
                        translationCountForMessageLength: p
                    },
                    f = ["dashboard_banners", "dashboard_page_templates_list", "dashboard_page_templates_detail", "stripelet_dashboard_page", "stripelet_dashboard_module", "stripelet_dashboard_workbench", "stripelet_unclassified", "sail_access_useExperiment", "sail_access_useExperiments", "sail_access_useLazyExperiment", "sail_access_useDevEnabledFlag", "sail_access_useFlag", "sail_access_useFlags", "sail_access_useLazyFlag", "sail_data_useCookie", "sail_data_useJsonFetch", "sail_data_useTextFetch", "sail_data_useImperativeJsonFetch", "sail_data_useImperativeTextFetch", "sail_data_useLazyJsonFetch", "sail_data_useLazyTextFetch", "sail_data_useLazyQuery", "sail_data_useMutation", "sail_data_useQuery", "sail_data_useLocalStorage", "sail_data_useSessionStorage", "sail_stripelet_Stripelet", "org_access_provider_experiments", "org_experiments_dialog", "org_experiments_hook", "org_experiments", "org_flags", "org_merchant_hook", "org_merchant", "org_polyjuice_hook", "org_polyjuice", "org_set_user_preferences", "org_user_preferences", "org_user_roles", "org_v1_permission_set", "org_v1_permission", "request", "miss", "request", "miss"]
            },
            20965: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => r
                });
                const r = "@sail/observability"
            },
            67770: (e, t, n) => {
                "use strict";
                n.d(t, {
                    i: () => a
                });
                var r = n(95835),
                    i = n(14193),
                    o = n(8250);
                let s;

                function a() {
                    if (s) return s;
                    const {
                        port1: e,
                        port2: t
                    } = new r.Z;
                    return e.start(), t.start(), s = {
                        client: o.Z.initClient({
                            transport: (0, i.Z)(e)
                        }),
                        server: o.Z.initServer({
                            transport: (0, i.Z)(t)
                        })
                    }, s
                }
            },
            24903: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(27503),
                    i = n(62010);
                const o = {
                    encode: e => (0, r.Z)(e, [i.D.error.encode, [e => "function" == typeof e, () => {}]]),
                    decode: e => (0, r.Z)(e, [i.D.error.decode])
                }
            },
            8250: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => u
                });
                var r = n(69601),
                    i = n(10602),
                    o = n(75067),
                    s = n(64949),
                    a = n(20965),
                    c = n(24903);
                const u = (0, r.Z)({
                    namespace: a.A,
                    methods: {
                        analyticsAction: i.action,
                        analyticsLink: i.link,
                        analyticsModal: i.modal,
                        analyticsTrack: i.track,
                        analyticsViewed: i.viewed,
                        metricsIncrement: s.increment,
                        metricsGauge: s.gauge,
                        metricsSet: s.set,
                        initReports: o.N,
                        report: o.H
                    },
                    encoder: c.Z
                })
            },
            31760: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => a
                }), n(77253), n(15610);
                var r = n(93774);

                function i(e, t, n) {
                    if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
                    return t.get(e)
                }

                function o(e, t) {
                    return function(e, t) {
                        return t.get ? t.get.call(e) : t.value
                    }(e, i(e, t, "get"))
                }
                var s = new WeakMap;
                class a {
                    action(e, t) {
                        r.aD(o(this, s), e, t)
                    }
                    link(e, t) {
                        r.p4(o(this, s), e, t)
                    }
                    modal(e, t) {
                        r.oC(o(this, s), e, t)
                    }
                    track(e, t) {
                        r.j(o(this, s), e, t)
                    }
                    viewed(e, t) {
                        r.q$(o(this, s), e, t)
                    }
                    constructor(e) {
                        var t, n, r;
                        r = {
                                writable: !0,
                                value: void 0
                            },
                            function(e, t) {
                                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                            }(t = this, n = s), n.set(t, r),
                            function(e, t, n) {
                                (function(e, t, n) {
                                    if (t.set) t.set.call(e, n);
                                    else {
                                        if (!t.writable) throw new TypeError("attempted to set read only private field");
                                        t.value = n
                                    }
                                })(e, i(e, t, "set"), n)
                            }(this, s, e)
                    }
                }
            },
            17201: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Jx: () => s,
                    cv: () => o
                }), n(77253), n(15610), n(16329);
                const r = "__sdk_rpc_error_encoder",
                    i = "error",
                    o = [e => e instanceof Error, (e, t) => {
                        const n = new Set(["name", "message", "stack", "cause", ...Object.keys(e)]),
                            o = Object.create(null);
                        o[r] = i;
                        for (const r of n) o[r] = t(e[r]);
                        return o
                    }],
                    s = [e => {
                        return (t = e) && "object" == typeof t && "string" == typeof t.name && "string" == typeof t.message && t[r] === i;
                        var t
                    }, (e, t) => Object.assign(new Error, Object.keys(e).reduce(((n, o) => (o === r && e[o] === i || (n[o] = t(e[o])), n)), {}))]
            },
            27503: (e, t, n) => {
                "use strict";

                function r(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return i(e, t, new Map)
                }

                function i(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
                    if (n.has(e)) return n.get(e);
                    n.set(e, void 0);
                    const r = e => i(e, t, n);
                    let o = !1,
                        s = e;
                    for (let n = 0; n < t.length; n++) {
                        const [i, a] = t[n];
                        if (i(e) && a) {
                            o = !0, s = a(e, r);
                            break
                        }
                    }
                    if (o) return n.set(e, s), s;
                    switch (!0) {
                        case Array.isArray(e):
                            s = e.map(r);
                            break;
                        case e && Object.getPrototypeOf(e) === Object.prototype:
                            const t = {};
                            for (const n in e) e.hasOwnProperty(n) && (t[n] = r(e[n]));
                            s = t
                    }
                    return n.set(e, s), s
                }
                n.d(t, {
                    Z: () => r
                }), n(15610)
            },
            81093: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => l
                }), n(15610), n(77253), n(95982);
                var r = n(77737),
                    i = n(11708),
                    o = n(70446);

                function s(e, t, n, r, i, o, s) {
                    try {
                        var a = e[o](s),
                            c = a.value
                    } catch (e) {
                        return void n(e)
                    }
                    a.done ? t(c) : Promise.resolve(c).then(r, i)
                }

                function a(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                const c = "sdk-rpc-channel",
                    u = new Set(Object.keys(i.C));
                class l {
                    isRelevantMessageEvent(e) {
                        let {
                            data: t
                        } = e;
                        return !!t.message && u.has(t.message.type) && this.name === t.from && t.source === c
                    }
                    call(e) {
                        if (this.closed) return Promise.reject(new Error(`Cannot call method '${e}'. RPC channel '${this.name}' is closed.`));
                        const t = (0, o.Z)(),
                            n = new r.Z;
                        this.responses.set(t, n);
                        for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++) a[c - 1] = arguments[c];
                        return this.sendMessage({
                            type: i.C.CALL,
                            id: t,
                            method: e,
                            args: a
                        }), n.promise.finally((() => this.responses.delete(t)))
                    }
                    watch(e, t, n) {
                        if (this.closed) throw new Error(`Cannot subscribe to '${e}'. RPC channel '${this.name}' is closed.`);
                        const r = (0, o.Z)();
                        return this.callbacks.set(r, n), this.sendMessage({
                            id: r,
                            type: i.C.ADD_SUBSCRIPTION,
                            name: e,
                            payload: t
                        }), () => {
                            this.callbacks.delete(r), this.sendMessage({
                                id: r,
                                type: i.C.REMOVE_SUBSCRIPTION
                            })
                        }
                    }
                    close() {
                        var e, t;
                        this.closed = !0, null === (e = (t = this.transport).terminate) || void 0 === e || e.call(t), this.transport.removeEventListener("message", this.messageListener)
                    }
                    sendMessage(e) {
                        const t = this.encoder ? this.encoder.encode(e) : e;
                        this.log(`> SND ${e.type}, ${e.id}`), this.transport.postMessage({
                            message: t,
                            from: this.name,
                            source: c
                        })
                    }
                    handleMessage(e) {
                        const t = this.encoder ? this.encoder.decode(e) : e;
                        switch (t.type) {
                            case i.C.CALL:
                                this.handleCall(t);
                                break;
                            case i.C.CALL_RESPONSE:
                                this.handleСallResponse(t);
                                break;
                            case i.C.CALL_ERROR:
                                this.handleCallError(t);
                                break;
                            case i.C.ADD_SUBSCRIPTION:
                                this.handleAddSubscription(t);
                                break;
                            case i.C.REMOVE_SUBSCRIPTION:
                                this.handleRemoveSubscription(t);
                                break;
                            case i.C.SUBSCRIPTION_RESULT:
                                this.handleSubscriptionResult(t)
                        }
                    }
                    handleCall(e) {
                        let {
                            method: t,
                            id: n,
                            args: r
                        } = e;
                        var o, a = this;
                        return (o = function*() {
                            const e = a.handlers.get(t);
                            if (e) try {
                                a.log(`< RCV ${i.C.CALL}, ${n}, ${t}, ${r}`), a.sendMessage({
                                    id: n,
                                    type: i.C.CALL_RESPONSE,
                                    result: yield e(...r)
                                })
                            } catch (e) {
                                a.sendMessage({
                                    id: n,
                                    type: i.C.CALL_ERROR,
                                    error: e
                                })
                            } else a.sendMessage({
                                id: n,
                                type: i.C.CALL_ERROR,
                                error: new Error(`Unsupported method: ${t}`)
                            })
                        }, function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(n, r) {
                                var i = o.apply(e, t);

                                function a(e) {
                                    s(i, n, r, a, c, "next", e)
                                }

                                function c(e) {
                                    s(i, n, r, a, c, "throw", e)
                                }
                                a(void 0)
                            }))
                        })()
                    }
                    handleСallResponse(e) {
                        let {
                            id: t,
                            result: n
                        } = e;
                        const r = this.responses.get(t);
                        r && (this.log(`< RCV ${i.C.CALL_RESPONSE}, ${t}, ${n}`), r.resolve(n))
                    }
                    handleCallError(e) {
                        let {
                            id: t,
                            error: n
                        } = e;
                        const r = this.responses.get(t);
                        r && (this.log(`< RCV ${i.C.CALL}, ${t}, ${n}`), r.reject(n))
                    }
                    handleSubscriptionResult(e) {
                        let {
                            id: t,
                            result: n
                        } = e;
                        const r = this.callbacks.get(t);
                        r && (this.log(`< RCV ${i.C.SUBSCRIPTION_RESULT}, ${t}, ${n}`), r(n))
                    }
                    handleAddSubscription(e) {
                        let {
                            id: t,
                            name: n,
                            payload: r
                        } = e;
                        const o = this.producers.get(n);
                        o && !this.subscriptions.has(t) && (this.log(`< RCV ${i.C.ADD_SUBSCRIPTION}, ${t}, ${n}, ${r}`), this.subscriptions.set(t, o(r, (e => {
                            this.sendMessage({
                                id: t,
                                result: e,
                                type: i.C.SUBSCRIPTION_RESULT
                            })
                        }))))
                    }
                    handleRemoveSubscription(e) {
                        let {
                            id: t
                        } = e;
                        const n = this.subscriptions.get(t);
                        n && (this.log(`< RCV ${i.C.REMOVE_SUBSCRIPTION}, ${t}`), n.unsubscribe(), this.subscriptions.delete(t))
                    }
                    log() {
                        this.enableLogging && console.log(...arguments)
                    }
                    constructor(e) {
                        let {
                            name: t,
                            transport: n,
                            methods: r,
                            subscriptions: i,
                            enableLogging: o,
                            encoder: s
                        } = e;
                        a(this, "name", void 0), a(this, "transport", void 0), a(this, "enableLogging", void 0), a(this, "responses", new Map), a(this, "callbacks", new Map), a(this, "handlers", new Map), a(this, "subscriptions", new Map), a(this, "messageListener", void 0), a(this, "encoder", void 0), a(this, "producers", new Map), a(this, "closed", !1), this.name = t, this.transport = n, this.enableLogging = null != o && o, this.encoder = s;
                        for (const e in r) r.hasOwnProperty(e) && this.handlers.set(e, r[e]);
                        for (const e in i) i.hasOwnProperty(e) && this.producers.set(e, i[e]);
                        this.messageListener = e => {
                            this.isRelevantMessageEvent(e) && this.handleMessage(e.data.message)
                        }, this.transport.addEventListener("message", this.messageListener)
                    }
                }
            },
            11708: (e, t, n) => {
                "use strict";
                var r;
                n.d(t, {
                        C: () => r
                    }),
                    function(e) {
                        e.CALL = "CALL", e.CALL_ERROR = "CALL_ERROR", e.CALL_RESPONSE = "CALL_RESPONSE", e.ADD_SUBSCRIPTION = "ADD_SUBSCRIPTION", e.REMOVE_SUBSCRIPTION = "REMOVE_SUBSCRIPTION", e.SUBSCRIPTION_RESULT = "SUBSCRIPTION_RESULT"
                    }(r || (r = {}))
            },
            50305: (e, t, n) => {
                "use strict";
                n.d(t, {
                    E8: () => o,
                    OU: () => r,
                    c9: () => a,
                    cc: () => s,
                    nt: () => c,
                    rL: () => i
                });
                const r = "sdk-rpc-syn",
                    i = "sdk-rpc-syn-ack",
                    o = "sdk-rpc-ack",
                    s = "sdk-rpc-syn-server",
                    a = "sdk-rpc-fin",
                    c = "sdk-rpc-fin-server"
            },
            7789: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Q: () => s
                }), n(25766);
                var r = n(50305);
                const i = [r.OU, r.cc, r.rL, r.E8, r.nt, r.c9];

                function o(e, t) {
                    return null !== t && "object" == typeof t && "string" == typeof t.message && "string" == typeof t.namespace && t.namespace === e && i.includes(t.message)
                }

                function s(e) {
                    return {
                        syn: (t, n, i) => {
                            const o = {
                                namespace: e,
                                message: r.OU,
                                data: n
                            };
                            t.postMessage(o, i)
                        },
                        synServer: (t, n, i) => {
                            const o = {
                                namespace: e,
                                message: r.cc,
                                data: n
                            };
                            t.postMessage(o, i)
                        },
                        synAck: (t, n, i) => {
                            const o = {
                                namespace: e,
                                message: r.rL,
                                data: n
                            };
                            t.postMessage(o, i)
                        },
                        ack: (t, n, i) => {
                            const o = {
                                namespace: e,
                                message: r.E8,
                                data: n
                            };
                            t.postMessage(o, i)
                        },
                        fin: (t, n, i) => {
                            const o = {
                                namespace: e,
                                message: r.c9,
                                data: n
                            };
                            t.postMessage(o, i)
                        },
                        finServer: (t, n, i) => {
                            const o = {
                                namespace: e,
                                message: r.nt,
                                data: n
                            };
                            t.postMessage(o, i)
                        },
                        isSynEvent: t => o(e, t) && t.message === r.OU,
                        isSynServerEvent: t => o(e, t) && t.message === r.cc,
                        isSynAckEvent: t => o(e, t) && t.message === r.rL,
                        isAckEvent: t => o(e, t) && t.message === r.E8,
                        isFinEvent: t => o(e, t) && t.message === r.c9,
                        isFinServerEvent: t => o(e, t) && t.message === r.nt
                    }
                }
            },
            95835: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(31373);
                const i = "undefined" != typeof MessageChannel ? MessageChannel : r.Z
            },
            31373: (e, t, n) => {
                "use strict";

                function r(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                n.d(t, {
                    Z: () => o
                }), n(15610);
                class i {
                    get onmessage() {
                        return this._onmessage
                    }
                    set onmessage(e) {
                        this._onmessage = e, this.start()
                    }
                    dispatchEvent(e) {
                        if (!this.started) return this.eventQueue.push(e), !0;
                        this._onmessage && this._onmessage(e);
                        for (const t of this.listeners) t(e);
                        return !0
                    }
                    postMessage(e) {
                        this.otherPort && this.otherPort.dispatchEvent({
                            data: e
                        })
                    }
                    addEventListener(e, t) {
                        "message" === e && this.listeners.add(t)
                    }
                    removeEventListener(e, t) {
                        "message" === e && this.listeners.delete(t)
                    }
                    start() {
                        if (!this.closed)
                            for (this.started = !0; this.eventQueue.length > 0;) {
                                const e = this.eventQueue.shift();
                                e && this.dispatchEvent(e)
                            }
                    }
                    close() {
                        this.started = !1, this.closed = !0
                    }
                    constructor() {
                        r(this, "onmessageerror", null), r(this, "otherPort", void 0), r(this, "listeners", new Set), r(this, "started", !1), r(this, "closed", !1), r(this, "_onmessage", null), r(this, "eventQueue", [])
                    }
                }
                const o = class {
                    constructor() {
                        r(this, "port1", void 0), r(this, "port2", void 0), this.port1 = new i, this.port2 = new i, this.port1.otherPort = this.port2, this.port2.otherPort = this.port1
                    }
                }
            },
            14193: (e, t, n) => {
                "use strict";

                function r(e) {
                    return {
                        postMessage: function() {
                            return e.postMessage(...arguments)
                        },
                        addEventListener: function() {
                            return e.addEventListener(...arguments)
                        },
                        removeEventListener: function() {
                            return e.removeEventListener(...arguments)
                        },
                        terminate() {
                            e.close()
                        }
                    }
                }
                n.d(t, {
                    Z: () => r
                }), n(15610)
            },
            30693: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    let n = !0;
                    return e.addEventListener("message", t), {
                        start: () => {
                            n || e.addEventListener("message", t)
                        },
                        stop: () => {
                            e.removeEventListener("message", t), n = !1
                        }
                    }
                }
                n.d(t, {
                    Z: () => r
                })
            },
            69601: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => l
                }), n(15610);
                var r = n(77737),
                    i = n(81093),
                    o = n(7789),
                    s = n(95835),
                    a = n(14193),
                    c = n(30693),
                    u = n(70446);

                function l(e) {
                    let {
                        namespace: t,
                        methods: n,
                        subscriptions: s,
                        encoder: l
                    } = e;
                    const {
                        ack: d,
                        synAck: f,
                        isAckEvent: h,
                        isSynAckEvent: m,
                        syn: g,
                        synServer: y,
                        isSynEvent: v,
                        isSynServerEvent: _,
                        fin: b,
                        finServer: w,
                        isFinEvent: S,
                        isFinServerEvent: x
                    } = (0, o.Q)(t);
                    return {
                        initServer: e => {
                            let {
                                transport: o
                            } = e;
                            const p = (0, u.Z)(),
                                d = new Map;
                            let m = null;
                            const g = (0, c.Z)(o, (e => {
                                    let {
                                        data: r
                                    } = e;
                                    if (v(r)) {
                                        const {
                                            data: e
                                        } = r;
                                        f(o, {
                                            clientId: e.clientId,
                                            serverId: p
                                        })
                                    }
                                    if (h(r)) {
                                        const {
                                            data: e
                                        } = r;
                                        if (e.serverId === p) {
                                            const {
                                                clientId: r,
                                                port: o
                                            } = e;
                                            d.set(r, new i.Z({
                                                name: t,
                                                transport: (0, a.Z)(o),
                                                methods: n,
                                                subscriptions: s,
                                                encoder: l
                                            })), o.start()
                                        }
                                    }
                                })),
                                _ = (0, c.Z)(o, (e => {
                                    let {
                                        data: t
                                    } = e;
                                    if (S(t)) {
                                        const {
                                            clientId: e
                                        } = t.data;
                                        var n;
                                        d.has(e) && (null === (n = d.get(e)) || void 0 === n || n.close(), d.delete(e)), 0 === d.size && null != m && (_.stop(), null == m || m.resolve())
                                    }
                                }));
                            return y(o, {
                                serverId: p
                            }), {
                                get id() {
                                    return p
                                },
                                close: () => (m = null != m ? m : new r.Z, g.stop(), w(o, {
                                    serverId: p
                                }), 0 === d.size && (_.stop(), null == m || m.resolve()), m.promise)
                            }
                        },
                        initClient: e => {
                            let {
                                transport: n
                            } = e;
                            const r = (0, u.Z)();
                            let i = p(t, l),
                                o = null;
                            const s = (0, c.Z)(n, (e => {
                                    let {
                                        data: t
                                    } = e;
                                    if (m(t)) {
                                        const {
                                            data: e
                                        } = t;
                                        e.clientId === r && (s.stop(), o = e.serverId, d(n, {
                                            clientId: e.clientId,
                                            serverId: e.serverId,
                                            port: i.port
                                        }, [i.port]))
                                    }
                                    _(t) && g(n, {
                                        clientId: r
                                    })
                                })),
                                a = (0, c.Z)(n, (e => {
                                    let {
                                        data: a
                                    } = e;
                                    if (x(a)) {
                                        const {
                                            data: e
                                        } = a;
                                        o === e.serverId && (o = null, b(n, {
                                            clientId: r
                                        }), i.endpoint.close(), i = p(t, l), s.start(), g(n, {
                                            clientId: r
                                        }))
                                    }
                                }));
                            return g(n, {
                                clientId: r
                            }), {
                                get id() {
                                    return r
                                },
                                call(e) {
                                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                                    return i.endpoint.call(e, ...n)
                                },
                                watch: (e, t, n) => i.endpoint.watch(e, t, n),
                                close() {
                                    b(n, {
                                        clientId: r
                                    }), s.stop(), a.stop(), i.endpoint.close()
                                }
                            }
                        }
                    }
                }

                function p(e, t) {
                    const {
                        port1: n,
                        port2: r
                    } = new s.Z;
                    return n.start(), {
                        endpoint: new i.Z({
                            name: e,
                            transport: (0, a.Z)(n),
                            encoder: t
                        }),
                        port: r
                    }
                }
            },
            62010: (e, t, n) => {
                "use strict";
                n.d(t, {
                    D: () => i
                });
                var r = n(17201);
                const i = {
                    error: {
                        encode: r.cv,
                        decode: r.Jx
                    }
                }
            },
            77737: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(41988);

                function i(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                class o {
                    get state() {
                        return this._state
                    }
                    constructor() {
                        i(this, "promise", void 0), i(this, "resolve", void 0), i(this, "reject", void 0), i(this, "_state", "pending");
                        let e = r.Z,
                            t = r.Z;
                        this.promise = new Promise(((n, r) => {
                            e = e => {
                                this._state = "resolved", n(e)
                            }, t = e => {
                                this._state = "rejected", r(e)
                            }
                        })), this.resolve = e, this.reject = t
                    }
                }
            },
            11391: (e, t, n) => {
                "use strict";

                function r() {
                    return (() => {
                        let e = "production";
                        try {
                            e = "production"
                        } catch (e) {}
                        return e
                    })()
                }

                function i() {
                    var e, t, n, r, i, o;
                    return "undefined" != typeof globalThis ? null === (t = globalThis) || void 0 === t || null === (e = t.location) || void 0 === e ? void 0 : e.hostname : "undefined" != typeof self ? null === (r = self) || void 0 === r || null === (n = r.location) || void 0 === n ? void 0 : n.hostname : "undefined" != typeof window ? null === (o = window) || void 0 === o || null === (i = o.location) || void 0 === i ? void 0 : i.hostname : void 0
                }

                function o() {
                    return "test" === r() ? "test" : !["production", "test"].includes(r()) || function() {
                        const e = i();
                        return !!e && (/\.stripe$/.test(e) || /\.stripe\.me$/.test(e) || /\bedge-\b.*\.stripe\.com$/.test(e) || /\bpreprod\b.*\.stripe\.com$/.test(e) || /\bqa\b.*\.stripe\.com$/.test(e) || /\bqa\b.*\.stripecdn\.com$/.test(e) || /\preprod\b.*\.stripecdn\.com$/.test(e) || /^127(?:\.\d+){3}$/.test(e) || /^localhost$/.test(e))
                    }() || function() {
                        const e = i();
                        let t = !1;
                        try {
                            t = !!("MISSING_ENV_VAR".USER && e && e.includes(String("MISSING_ENV_VAR".USER)))
                        } catch (e) {}
                        return t
                    }() ? "development" : r()
                }
                n.d(t, {
                    Z: () => o
                }), n(25766), n(51027)
            },
            44627: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                }), n(15610);
                var r = n(16125);

                function i(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Z;
                    const n = Object.create(null);
                    return function() {
                        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                        const s = t(i);
                        return s in n || (n[s] = e(...i)), n[s]
                    }
                }
            },
            41988: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = () => {}
            },
            79499: (e, t, n) => {
                "use strict";

                function r(e) {
                    let t;
                    return function() {
                        if (e) {
                            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            t = e.apply(this, r), e = null
                        }
                        return t
                    }
                }
                n.d(t, {
                    Z: () => r
                })
            },
            16125: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    if (t && "object" == typeof t && !Array.isArray(t)) {
                        const e = Object.keys(t).sort(),
                            n = e.length,
                            r = {};
                        for (let i = 0; i < n; i++) r[e[i]] = t[e[i]];
                        return r
                    }
                    return void 0 === t ? null : t
                }

                function i(e) {
                    return JSON.stringify(e, r)
                }
                n.d(t, {
                    Z: () => i
                })
            },
            65415: (e, t) => {
                "use strict";
                t.byteLength = function(e) {
                    var t = c(e),
                        n = t[0],
                        r = t[1];
                    return 3 * (n + r) / 4 - r
                }, t.toByteArray = function(e) {
                    var t, n, o = c(e),
                        s = o[0],
                        a = o[1],
                        u = new i(function(e, t, n) {
                            return 3 * (t + n) / 4 - n
                        }(0, s, a)),
                        l = 0,
                        p = a > 0 ? s - 4 : s;
                    for (n = 0; n < p; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], u[l++] = t >> 16 & 255, u[l++] = t >> 8 & 255, u[l++] = 255 & t;
                    return 2 === a && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, u[l++] = 255 & t), 1 === a && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, u[l++] = t >> 8 & 255, u[l++] = 255 & t), u
                }, t.fromByteArray = function(e) {
                    for (var t, r = e.length, i = r % 3, o = [], s = 16383, a = 0, c = r - i; a < c; a += s) o.push(u(e, a, a + s > c ? c : a + s));
                    return 1 === i ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=")), o.join("")
                };
                for (var n = [], r = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s) n[s] = o[s], r[o.charCodeAt(s)] = s;

                function c(e) {
                    var t = e.length;
                    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var n = e.indexOf("=");
                    return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
                }

                function u(e, t, r) {
                    for (var i, o, s = [], a = t; a < r; a += 3) i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
                    return s.join("")
                }
                r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
            },
            55872: (e, t, n) => {
                "use strict";
                const r = n(65415),
                    i = n(30551),
                    o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                t.Buffer = c, t.SlowBuffer = function(e) {
                    return +e != e && (e = 0), c.alloc(+e)
                }, t.INSPECT_MAX_BYTES = 50;
                const s = 2147483647;

                function a(e) {
                    if (e > s) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                    const t = new Uint8Array(e);
                    return Object.setPrototypeOf(t, c.prototype), t
                }

                function c(e, t, n) {
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                        return p(e)
                    }
                    return u(e, t, n)
                }

                function u(e, t, n) {
                    if ("string" == typeof e) return function(e, t) {
                        if ("string" == typeof t && "" !== t || (t = "utf8"), !c.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                        const n = 0 | m(e, t);
                        let r = a(n);
                        const i = r.write(e, t);
                        return i !== n && (r = r.slice(0, i)), r
                    }(e, t);
                    if (ArrayBuffer.isView(e)) return function(e) {
                        if (G(e, Uint8Array)) {
                            const t = new Uint8Array(e);
                            return f(t.buffer, t.byteOffset, t.byteLength)
                        }
                        return d(e)
                    }(e);
                    if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                    if (G(e, ArrayBuffer) || e && G(e.buffer, ArrayBuffer)) return f(e, t, n);
                    if ("undefined" != typeof SharedArrayBuffer && (G(e, SharedArrayBuffer) || e && G(e.buffer, SharedArrayBuffer))) return f(e, t, n);
                    if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                    const r = e.valueOf && e.valueOf();
                    if (null != r && r !== e) return c.from(r, t, n);
                    const i = function(e) {
                        if (c.isBuffer(e)) {
                            const t = 0 | h(e.length),
                                n = a(t);
                            return 0 === n.length || e.copy(n, 0, 0, t), n
                        }
                        return void 0 !== e.length ? "number" != typeof e.length || Y(e.length) ? a(0) : d(e) : "Buffer" === e.type && Array.isArray(e.data) ? d(e.data) : void 0
                    }(e);
                    if (i) return i;
                    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return c.from(e[Symbol.toPrimitive]("string"), t, n);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                }

                function l(e) {
                    if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                    if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
                }

                function p(e) {
                    return l(e), a(e < 0 ? 0 : 0 | h(e))
                }

                function d(e) {
                    const t = e.length < 0 ? 0 : 0 | h(e.length),
                        n = a(t);
                    for (let r = 0; r < t; r += 1) n[r] = 255 & e[r];
                    return n
                }

                function f(e, t, n) {
                    if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    let r;
                    return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, c.prototype), r
                }

                function h(e) {
                    if (e >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
                    return 0 | e
                }

                function m(e, t) {
                    if (c.isBuffer(e)) return e.length;
                    if (ArrayBuffer.isView(e) || G(e, ArrayBuffer)) return e.byteLength;
                    if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                    const n = e.length,
                        r = arguments.length > 2 && !0 === arguments[2];
                    if (!r && 0 === n) return 0;
                    let i = !1;
                    for (;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                            return V(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return K(e).length;
                        default:
                            if (i) return r ? -1 : V(e).length;
                            t = ("" + t).toLowerCase(), i = !0
                    }
                }

                function g(e, t, n) {
                    let r = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return R(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return O(this, t, n);
                        case "ascii":
                            return A(this, t, n);
                        case "latin1":
                        case "binary":
                            return T(this, t, n);
                        case "base64":
                            return k(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return L(this, t, n);
                        default:
                            if (r) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), r = !0
                    }
                }

                function y(e, t, n) {
                    const r = e[t];
                    e[t] = e[n], e[n] = r
                }

                function v(e, t, n, r, i) {
                    if (0 === e.length) return -1;
                    if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), Y(n = +n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                        if (i) return -1;
                        n = e.length - 1
                    } else if (n < 0) {
                        if (!i) return -1;
                        n = 0
                    }
                    if ("string" == typeof t && (t = c.from(t, r)), c.isBuffer(t)) return 0 === t.length ? -1 : _(e, t, n, r, i);
                    if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : _(e, [t], n, r, i);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function _(e, t, n, r, i) {
                    let o, s = 1,
                        a = e.length,
                        c = t.length;
                    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        s = 2, a /= 2, c /= 2, n /= 2
                    }

                    function u(e, t) {
                        return 1 === s ? e[t] : e.readUInt16BE(t * s)
                    }
                    if (i) {
                        let r = -1;
                        for (o = n; o < a; o++)
                            if (u(e, o) === u(t, -1 === r ? 0 : o - r)) {
                                if (-1 === r && (r = o), o - r + 1 === c) return r * s
                            } else -1 !== r && (o -= o - r), r = -1
                    } else
                        for (n + c > a && (n = a - c), o = n; o >= 0; o--) {
                            let n = !0;
                            for (let r = 0; r < c; r++)
                                if (u(e, o + r) !== u(t, r)) {
                                    n = !1;
                                    break
                                }
                            if (n) return o
                        }
                    return -1
                }

                function b(e, t, n, r) {
                    n = Number(n) || 0;
                    const i = e.length - n;
                    r ? (r = Number(r)) > i && (r = i) : r = i;
                    const o = t.length;
                    let s;
                    for (r > o / 2 && (r = o / 2), s = 0; s < r; ++s) {
                        const r = parseInt(t.substr(2 * s, 2), 16);
                        if (Y(r)) return s;
                        e[n + s] = r
                    }
                    return s
                }

                function w(e, t, n, r) {
                    return W(V(t, e.length - n), e, n, r)
                }

                function S(e, t, n, r) {
                    return W(function(e) {
                        const t = [];
                        for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                        return t
                    }(t), e, n, r)
                }

                function x(e, t, n, r) {
                    return W(K(t), e, n, r)
                }

                function E(e, t, n, r) {
                    return W(function(e, t) {
                        let n, r, i;
                        const o = [];
                        for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) n = e.charCodeAt(s), r = n >> 8, i = n % 256, o.push(i), o.push(r);
                        return o
                    }(t, e.length - n), e, n, r)
                }

                function k(e, t, n) {
                    return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
                }

                function O(e, t, n) {
                    n = Math.min(e.length, n);
                    const r = [];
                    let i = t;
                    for (; i < n;) {
                        const t = e[i];
                        let o = null,
                            s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                        if (i + s <= n) {
                            let n, r, a, c;
                            switch (s) {
                                case 1:
                                    t < 128 && (o = t);
                                    break;
                                case 2:
                                    n = e[i + 1], 128 == (192 & n) && (c = (31 & t) << 6 | 63 & n, c > 127 && (o = c));
                                    break;
                                case 3:
                                    n = e[i + 1], r = e[i + 2], 128 == (192 & n) && 128 == (192 & r) && (c = (15 & t) << 12 | (63 & n) << 6 | 63 & r, c > 2047 && (c < 55296 || c > 57343) && (o = c));
                                    break;
                                case 4:
                                    n = e[i + 1], r = e[i + 2], a = e[i + 3], 128 == (192 & n) && 128 == (192 & r) && 128 == (192 & a) && (c = (15 & t) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & a, c > 65535 && c < 1114112 && (o = c))
                            }
                        }
                        null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, r.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), r.push(o), i += s
                    }
                    return function(e) {
                        const t = e.length;
                        if (t <= I) return String.fromCharCode.apply(String, e);
                        let n = "",
                            r = 0;
                        for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += I));
                        return n
                    }(r)
                }
                t.kMaxLength = s, c.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        const e = new Uint8Array(1),
                            t = {
                                foo: function() {
                                    return 42
                                }
                            };
                        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                    } catch (e) {
                        return !1
                    }
                }(), c.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(c.prototype, "parent", {
                    enumerable: !0,
                    get: function() {
                        if (c.isBuffer(this)) return this.buffer
                    }
                }), Object.defineProperty(c.prototype, "offset", {
                    enumerable: !0,
                    get: function() {
                        if (c.isBuffer(this)) return this.byteOffset
                    }
                }), c.poolSize = 8192, c.from = function(e, t, n) {
                    return u(e, t, n)
                }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function(e, t, n) {
                    return function(e, t, n) {
                        return l(e), e <= 0 ? a(e) : void 0 !== t ? "string" == typeof n ? a(e).fill(t, n) : a(e).fill(t) : a(e)
                    }(e, t, n)
                }, c.allocUnsafe = function(e) {
                    return p(e)
                }, c.allocUnsafeSlow = function(e) {
                    return p(e)
                }, c.isBuffer = function(e) {
                    return null != e && !0 === e._isBuffer && e !== c.prototype
                }, c.compare = function(e, t) {
                    if (G(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), G(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)), !c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (e === t) return 0;
                    let n = e.length,
                        r = t.length;
                    for (let i = 0, o = Math.min(n, r); i < o; ++i)
                        if (e[i] !== t[i]) {
                            n = e[i], r = t[i];
                            break
                        }
                    return n < r ? -1 : r < n ? 1 : 0
                }, c.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, c.concat = function(e, t) {
                    if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return c.alloc(0);
                    let n;
                    if (void 0 === t)
                        for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                    const r = c.allocUnsafe(t);
                    let i = 0;
                    for (n = 0; n < e.length; ++n) {
                        let t = e[n];
                        if (G(t, Uint8Array)) i + t.length > r.length ? (c.isBuffer(t) || (t = c.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
                        else {
                            if (!c.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                            t.copy(r, i)
                        }
                        i += t.length
                    }
                    return r
                }, c.byteLength = m, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                    const e = this.length;
                    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (let t = 0; t < e; t += 2) y(this, t, t + 1);
                    return this
                }, c.prototype.swap32 = function() {
                    const e = this.length;
                    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (let t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
                    return this
                }, c.prototype.swap64 = function() {
                    const e = this.length;
                    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (let t = 0; t < e; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
                    return this
                }, c.prototype.toString = function() {
                    const e = this.length;
                    return 0 === e ? "" : 0 === arguments.length ? O(this, 0, e) : g.apply(this, arguments)
                }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(e) {
                    if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === c.compare(this, e)
                }, c.prototype.inspect = function() {
                    let e = "";
                    const n = t.INSPECT_MAX_BYTES;
                    return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
                }, o && (c.prototype[o] = c.prototype.inspect), c.prototype.compare = function(e, t, n, r, i) {
                    if (G(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), !c.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                    if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                    if (r >= i && t >= n) return 0;
                    if (r >= i) return -1;
                    if (t >= n) return 1;
                    if (this === e) return 0;
                    let o = (i >>>= 0) - (r >>>= 0),
                        s = (n >>>= 0) - (t >>>= 0);
                    const a = Math.min(o, s),
                        u = this.slice(r, i),
                        l = e.slice(t, n);
                    for (let e = 0; e < a; ++e)
                        if (u[e] !== l[e]) {
                            o = u[e], s = l[e];
                            break
                        }
                    return o < s ? -1 : s < o ? 1 : 0
                }, c.prototype.includes = function(e, t, n) {
                    return -1 !== this.indexOf(e, t, n)
                }, c.prototype.indexOf = function(e, t, n) {
                    return v(this, e, t, n, !0)
                }, c.prototype.lastIndexOf = function(e, t, n) {
                    return v(this, e, t, n, !1)
                }, c.prototype.write = function(e, t, n, r) {
                    if (void 0 === t) r = "utf8", n = this.length, t = 0;
                    else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                    }
                    const i = this.length - t;
                    if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    let o = !1;
                    for (;;) switch (r) {
                        case "hex":
                            return b(this, e, t, n);
                        case "utf8":
                        case "utf-8":
                            return w(this, e, t, n);
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return S(this, e, t, n);
                        case "base64":
                            return x(this, e, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return E(this, e, t, n);
                        default:
                            if (o) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), o = !0
                    }
                }, c.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                const I = 4096;

                function A(e, t, n) {
                    let r = "";
                    n = Math.min(e.length, n);
                    for (let i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                    return r
                }

                function T(e, t, n) {
                    let r = "";
                    n = Math.min(e.length, n);
                    for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                    return r
                }

                function R(e, t, n) {
                    const r = e.length;
                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                    let i = "";
                    for (let r = t; r < n; ++r) i += J[e[r]];
                    return i
                }

                function L(e, t, n) {
                    const r = e.slice(t, n);
                    let i = "";
                    for (let e = 0; e < r.length - 1; e += 2) i += String.fromCharCode(r[e] + 256 * r[e + 1]);
                    return i
                }

                function C(e, t, n) {
                    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                    if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
                }

                function P(e, t, n, r, i, o) {
                    if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                    if (n + r > e.length) throw new RangeError("Index out of range")
                }

                function j(e, t, n, r, i) {
                    F(t, r, i, e, n, 7);
                    let o = Number(t & BigInt(4294967295));
                    e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o;
                    let s = Number(t >> BigInt(32) & BigInt(4294967295));
                    return e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s, n
                }

                function U(e, t, n, r, i) {
                    F(t, r, i, e, n, 7);
                    let o = Number(t & BigInt(4294967295));
                    e[n + 7] = o, o >>= 8, e[n + 6] = o, o >>= 8, e[n + 5] = o, o >>= 8, e[n + 4] = o;
                    let s = Number(t >> BigInt(32) & BigInt(4294967295));
                    return e[n + 3] = s, s >>= 8, e[n + 2] = s, s >>= 8, e[n + 1] = s, s >>= 8, e[n] = s, n + 8
                }

                function M(e, t, n, r, i, o) {
                    if (n + r > e.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }

                function N(e, t, n, r, o) {
                    return t = +t, n >>>= 0, o || M(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
                }

                function D(e, t, n, r, o) {
                    return t = +t, n >>>= 0, o || M(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
                }
                c.prototype.slice = function(e, t) {
                    const n = this.length;
                    (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
                    const r = this.subarray(e, t);
                    return Object.setPrototypeOf(r, c.prototype), r
                }, c.prototype.readUintLE = c.prototype.readUIntLE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || C(e, t, this.length);
                    let r = this[e],
                        i = 1,
                        o = 0;
                    for (; ++o < t && (i *= 256);) r += this[e + o] * i;
                    return r
                }, c.prototype.readUintBE = c.prototype.readUIntBE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || C(e, t, this.length);
                    let r = this[e + --t],
                        i = 1;
                    for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
                    return r
                }, c.prototype.readUint8 = c.prototype.readUInt8 = function(e, t) {
                    return e >>>= 0, t || C(e, 1, this.length), this[e]
                }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(e, t) {
                    return e >>>= 0, t || C(e, 2, this.length), this[e] | this[e + 1] << 8
                }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(e, t) {
                    return e >>>= 0, t || C(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(e, t) {
                    return e >>>= 0, t || C(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(e, t) {
                    return e >>>= 0, t || C(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, c.prototype.readBigUInt64LE = X((function(e) {
                    $(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    void 0 !== t && void 0 !== n || z(e, this.length - 8);
                    const r = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
                        i = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 2 ** 24;
                    return BigInt(r) + (BigInt(i) << BigInt(32))
                })), c.prototype.readBigUInt64BE = X((function(e) {
                    $(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    void 0 !== t && void 0 !== n || z(e, this.length - 8);
                    const r = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
                        i = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n;
                    return (BigInt(r) << BigInt(32)) + BigInt(i)
                })), c.prototype.readIntLE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || C(e, t, this.length);
                    let r = this[e],
                        i = 1,
                        o = 0;
                    for (; ++o < t && (i *= 256);) r += this[e + o] * i;
                    return i *= 128, r >= i && (r -= Math.pow(2, 8 * t)), r
                }, c.prototype.readIntBE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || C(e, t, this.length);
                    let r = t,
                        i = 1,
                        o = this[e + --r];
                    for (; r > 0 && (i *= 256);) o += this[e + --r] * i;
                    return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o
                }, c.prototype.readInt8 = function(e, t) {
                    return e >>>= 0, t || C(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                }, c.prototype.readInt16LE = function(e, t) {
                    e >>>= 0, t || C(e, 2, this.length);
                    const n = this[e] | this[e + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, c.prototype.readInt16BE = function(e, t) {
                    e >>>= 0, t || C(e, 2, this.length);
                    const n = this[e + 1] | this[e] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, c.prototype.readInt32LE = function(e, t) {
                    return e >>>= 0, t || C(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, c.prototype.readInt32BE = function(e, t) {
                    return e >>>= 0, t || C(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, c.prototype.readBigInt64LE = X((function(e) {
                    $(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    void 0 !== t && void 0 !== n || z(e, this.length - 8);
                    const r = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
                    return (BigInt(r) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24)
                })), c.prototype.readBigInt64BE = X((function(e) {
                    $(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    void 0 !== t && void 0 !== n || z(e, this.length - 8);
                    const r = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
                    return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n)
                })), c.prototype.readFloatLE = function(e, t) {
                    return e >>>= 0, t || C(e, 4, this.length), i.read(this, e, !0, 23, 4)
                }, c.prototype.readFloatBE = function(e, t) {
                    return e >>>= 0, t || C(e, 4, this.length), i.read(this, e, !1, 23, 4)
                }, c.prototype.readDoubleLE = function(e, t) {
                    return e >>>= 0, t || C(e, 8, this.length), i.read(this, e, !0, 52, 8)
                }, c.prototype.readDoubleBE = function(e, t) {
                    return e >>>= 0, t || C(e, 8, this.length), i.read(this, e, !1, 52, 8)
                }, c.prototype.writeUintLE = c.prototype.writeUIntLE = function(e, t, n, r) {
                    e = +e, t >>>= 0, n >>>= 0, r || P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    let i = 1,
                        o = 0;
                    for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
                    return t + n
                }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(e, t, n, r) {
                    e = +e, t >>>= 0, n >>>= 0, r || P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    let i = n - 1,
                        o = 1;
                    for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                    return t + n
                }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, c.prototype.writeBigUInt64LE = X((function(e, t = 0) {
                    return j(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                })), c.prototype.writeBigUInt64BE = X((function(e, t = 0) {
                    return U(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                })), c.prototype.writeIntLE = function(e, t, n, r) {
                    if (e = +e, t >>>= 0, !r) {
                        const r = Math.pow(2, 8 * n - 1);
                        P(this, e, t, n, r - 1, -r)
                    }
                    let i = 0,
                        o = 1,
                        s = 0;
                    for (this[t] = 255 & e; ++i < n && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
                    return t + n
                }, c.prototype.writeIntBE = function(e, t, n, r) {
                    if (e = +e, t >>>= 0, !r) {
                        const r = Math.pow(2, 8 * n - 1);
                        P(this, e, t, n, r - 1, -r)
                    }
                    let i = n - 1,
                        o = 1,
                        s = 0;
                    for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
                    return t + n
                }, c.prototype.writeInt8 = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, c.prototype.writeInt16LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, c.prototype.writeInt16BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, c.prototype.writeInt32LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                }, c.prototype.writeInt32BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, c.prototype.writeBigInt64LE = X((function(e, t = 0) {
                    return j(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                })), c.prototype.writeBigInt64BE = X((function(e, t = 0) {
                    return U(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                })), c.prototype.writeFloatLE = function(e, t, n) {
                    return N(this, e, t, !0, n)
                }, c.prototype.writeFloatBE = function(e, t, n) {
                    return N(this, e, t, !1, n)
                }, c.prototype.writeDoubleLE = function(e, t, n) {
                    return D(this, e, t, !0, n)
                }, c.prototype.writeDoubleBE = function(e, t, n) {
                    return D(this, e, t, !1, n)
                }, c.prototype.copy = function(e, t, n, r) {
                    if (!c.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                    if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                    if (r < 0) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                    const i = r - n;
                    return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), i
                }, c.prototype.fill = function(e, t, n, r) {
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                        if ("string" == typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                        if (1 === e.length) {
                            const t = e.charCodeAt(0);
                            ("utf8" === r && t < 128 || "latin1" === r) && (e = t)
                        }
                    } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                    if (n <= t) return this;
                    let i;
                    if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                        for (i = t; i < n; ++i) this[i] = e;
                    else {
                        const o = c.isBuffer(e) ? e : c.from(e, r),
                            s = o.length;
                        if (0 === s) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                        for (i = 0; i < n - t; ++i) this[i + t] = o[i % s]
                    }
                    return this
                };
                const B = {};

                function q(e, t, n) {
                    B[e] = class extends n {
                        constructor() {
                            super(), Object.defineProperty(this, "message", {
                                value: t.apply(this, arguments),
                                writable: !0,
                                configurable: !0
                            }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
                        }
                        get code() {
                            return e
                        }
                        set code(e) {
                            Object.defineProperty(this, "code", {
                                configurable: !0,
                                enumerable: !0,
                                value: e,
                                writable: !0
                            })
                        }
                        toString() {
                            return `${this.name} [${e}]: ${this.message}`
                        }
                    }
                }

                function Z(e) {
                    let t = "",
                        n = e.length;
                    const r = "-" === e[0] ? 1 : 0;
                    for (; n >= r + 4; n -= 3) t = `_${e.slice(n-3,n)}${t}`;
                    return `${e.slice(0,n)}${t}`
                }

                function F(e, t, n, r, i, o) {
                    if (e > n || e < t) {
                        const r = "bigint" == typeof t ? "n" : "";
                        let i;
                        throw i = o > 3 ? 0 === t || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8*(o+1)}${r}` : `>= -(2${r} ** ${8*(o+1)-1}${r}) and < 2 ** ${8*(o+1)-1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new B.ERR_OUT_OF_RANGE("value", i, e)
                    }! function(e, t, n) {
                        $(t, "offset"), void 0 !== e[t] && void 0 !== e[t + n] || z(t, e.length - (n + 1))
                    }(r, i, o)
                }

                function $(e, t) {
                    if ("number" != typeof e) throw new B.ERR_INVALID_ARG_TYPE(t, "number", e)
                }

                function z(e, t, n) {
                    if (Math.floor(e) !== e) throw $(e, n), new B.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
                    if (t < 0) throw new B.ERR_BUFFER_OUT_OF_BOUNDS;
                    throw new B.ERR_OUT_OF_RANGE(n || "offset", `>= ${n?1:0} and <= ${t}`, e)
                }
                q("ERR_BUFFER_OUT_OF_BOUNDS", (function(e) {
                    return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
                }), RangeError), q("ERR_INVALID_ARG_TYPE", (function(e, t) {
                    return `The "${e}" argument must be of type number. Received type ${typeof t}`
                }), TypeError), q("ERR_OUT_OF_RANGE", (function(e, t, n) {
                    let r = `The value of "${e}" is out of range.`,
                        i = n;
                    return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = Z(String(n)) : "bigint" == typeof n && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = Z(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r
                }), RangeError);
                const H = /[^+/0-9A-Za-z-_]/g;

                function V(e, t) {
                    let n;
                    t = t || 1 / 0;
                    const r = e.length;
                    let i = null;
                    const o = [];
                    for (let s = 0; s < r; ++s) {
                        if (n = e.charCodeAt(s), n > 55295 && n < 57344) {
                            if (!i) {
                                if (n > 56319) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                if (s + 1 === r) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                i = n;
                                continue
                            }
                            if (n < 56320) {
                                (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                                continue
                            }
                            n = 65536 + (i - 55296 << 10 | n - 56320)
                        } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                        if (i = null, n < 128) {
                            if ((t -= 1) < 0) break;
                            o.push(n)
                        } else if (n < 2048) {
                            if ((t -= 2) < 0) break;
                            o.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((t -= 3) < 0) break;
                            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return o
                }

                function K(e) {
                    return r.toByteArray(function(e) {
                        if ((e = (e = e.split("=")[0]).trim().replace(H, "")).length < 2) return "";
                        for (; e.length % 4 != 0;) e += "=";
                        return e
                    }(e))
                }

                function W(e, t, n, r) {
                    let i;
                    for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                    return i
                }

                function G(e, t) {
                    return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                }

                function Y(e) {
                    return e != e
                }
                const J = function() {
                    const e = "0123456789abcdef",
                        t = new Array(256);
                    for (let n = 0; n < 16; ++n) {
                        const r = 16 * n;
                        for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i]
                    }
                    return t
                }();

                function X(e) {
                    return "undefined" == typeof BigInt ? Q : e
                }

                function Q() {
                    throw new Error("BigInt not supported")
                }
            },
            60903: (e, t, n) => {
                var r = n(72387),
                    i = n(40733),
                    o = TypeError;
                e.exports = function(e) {
                    if (r(e)) return e;
                    throw o(i(e) + " is not a function")
                }
            },
            56235: (e, t, n) => {
                var r = n(88061),
                    i = n(40733),
                    o = TypeError;
                e.exports = function(e) {
                    if (r(e)) return e;
                    throw o(i(e) + " is not a constructor")
                }
            },
            39744: (e, t, n) => {
                var r = n(72387),
                    i = String,
                    o = TypeError;
                e.exports = function(e) {
                    if ("object" == typeof e || r(e)) return e;
                    throw o("Can't set " + i(e) + " as a prototype")
                }
            },
            32516: (e, t, n) => {
                var r = n(13482),
                    i = n(80045),
                    o = n(54988).f,
                    s = r("unscopables"),
                    a = Array.prototype;
                null == a[s] && o(a, s, {
                    configurable: !0,
                    value: i(null)
                }), e.exports = function(e) {
                    a[s][e] = !0
                }
            },
            47379: (e, t, n) => {
                "use strict";
                var r = n(51050).charAt;
                e.exports = function(e, t, n) {
                    return t + (n ? r(e, t).length : 1)
                }
            },
            65828: (e, t, n) => {
                var r = n(66264),
                    i = TypeError;
                e.exports = function(e, t) {
                    if (r(t, e)) return e;
                    throw i("Incorrect invocation")
                }
            },
            59258: (e, t, n) => {
                var r = n(95664),
                    i = String,
                    o = TypeError;
                e.exports = function(e) {
                    if (r(e)) return e;
                    throw o(i(e) + " is not an object")
                }
            },
            74005: (e, t, n) => {
                "use strict";
                var r = n(63503),
                    i = n(71972),
                    o = n(70167),
                    s = n(13096),
                    a = n(73436),
                    c = n(88061),
                    u = n(32771),
                    l = n(14299),
                    p = n(25907),
                    d = n(31053),
                    f = Array;
                e.exports = function(e) {
                    var t = o(e),
                        n = c(this),
                        h = arguments.length,
                        m = h > 1 ? arguments[1] : void 0,
                        g = void 0 !== m;
                    g && (m = r(m, h > 2 ? arguments[2] : void 0));
                    var y, v, _, b, w, S, x = d(t),
                        E = 0;
                    if (!x || this === f && a(x))
                        for (y = u(t), v = n ? new this(y) : f(y); y > E; E++) S = g ? m(t[E], E) : t[E], l(v, E, S);
                    else
                        for (w = (b = p(t, x)).next, v = n ? new this : []; !(_ = i(w, b)).done; E++) S = g ? s(b, m, [_.value, E], !0) : _.value, l(v, E, S);
                    return v.length = E, v
                }
            },
            15493: (e, t, n) => {
                var r = n(88472),
                    i = n(33966),
                    o = n(32771),
                    s = function(e) {
                        return function(t, n, s) {
                            var a, c = r(t),
                                u = o(c),
                                l = i(s, u);
                            if (e && n != n) {
                                for (; u > l;)
                                    if ((a = c[l++]) != a) return !0
                            } else
                                for (; u > l; l++)
                                    if ((e || l in c) && c[l] === n) return e || l || 0;
                            return !e && -1
                        }
                    };
                e.exports = {
                    includes: s(!0),
                    indexOf: s(!1)
                }
            },
            13838: (e, t, n) => {
                "use strict";
                var r = n(97811);
                e.exports = function(e, t) {
                    var n = [][e];
                    return !!n && r((function() {
                        n.call(null, t || function() {
                            return 1
                        }, 1)
                    }))
                }
            },
            45152: (e, t, n) => {
                var r = n(60903),
                    i = n(70167),
                    o = n(25266),
                    s = n(32771),
                    a = TypeError,
                    c = function(e) {
                        return function(t, n, c, u) {
                            r(n);
                            var l = i(t),
                                p = o(l),
                                d = s(l),
                                f = e ? d - 1 : 0,
                                h = e ? -1 : 1;
                            if (c < 2)
                                for (;;) {
                                    if (f in p) {
                                        u = p[f], f += h;
                                        break
                                    }
                                    if (f += h, e ? f < 0 : d <= f) throw a("Reduce of empty array with no initial value")
                                }
                            for (; e ? f >= 0 : d > f; f += h) f in p && (u = n(u, p[f], f, l));
                            return u
                        }
                    };
                e.exports = {
                    left: c(!1),
                    right: c(!0)
                }
            },
            86894: (e, t, n) => {
                var r = n(33966),
                    i = n(32771),
                    o = n(14299),
                    s = Array,
                    a = Math.max;
                e.exports = function(e, t, n) {
                    for (var c = i(e), u = r(t, c), l = r(void 0 === n ? c : n, c), p = s(a(l - u, 0)), d = 0; u < l; u++, d++) o(p, d, e[u]);
                    return p.length = d, p
                }
            },
            17155: (e, t, n) => {
                var r = n(86894),
                    i = Math.floor,
                    o = function(e, t) {
                        var n = e.length,
                            c = i(n / 2);
                        return n < 8 ? s(e, t) : a(e, o(r(e, 0, c), t), o(r(e, c), t), t)
                    },
                    s = function(e, t) {
                        for (var n, r, i = e.length, o = 1; o < i;) {
                            for (r = o, n = e[o]; r && t(e[r - 1], n) > 0;) e[r] = e[--r];
                            r !== o++ && (e[r] = n)
                        }
                        return e
                    },
                    a = function(e, t, n, r) {
                        for (var i = t.length, o = n.length, s = 0, a = 0; s < i || a < o;) e[s + a] = s < i && a < o ? r(t[s], n[a]) <= 0 ? t[s++] : n[a++] : s < i ? t[s++] : n[a++];
                        return e
                    };
                e.exports = o
            },
            13096: (e, t, n) => {
                var r = n(59258),
                    i = n(76779);
                e.exports = function(e, t, n, o) {
                    try {
                        return o ? t(r(n)[0], n[1]) : t(n)
                    } catch (t) {
                        i(e, "throw", t)
                    }
                }
            },
            1224: (e, t, n) => {
                var r = n(10827),
                    i = r({}.toString),
                    o = r("".slice);
                e.exports = function(e) {
                    return o(i(e), 8, -1)
                }
            },
            90942: (e, t, n) => {
                var r = n(66131),
                    i = n(72387),
                    o = n(1224),
                    s = n(13482)("toStringTag"),
                    a = Object,
                    c = "Arguments" == o(function() {
                        return arguments
                    }());
                e.exports = r ? o : function(e) {
                    var t, n, r;
                    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                        try {
                            return e[t]
                        } catch (e) {}
                    }(t = a(e), s)) ? n : c ? o(t) : "Object" == (r = o(t)) && i(t.callee) ? "Arguments" : r
                }
            },
            92578: (e, t, n) => {
                var r = n(10827),
                    i = Error,
                    o = r("".replace),
                    s = String(i("zxcasd").stack),
                    a = /\n\s*at [^:]*:[^\n]*/,
                    c = a.test(s);
                e.exports = function(e, t) {
                    if (c && "string" == typeof e && !i.prepareStackTrace)
                        for (; t--;) e = o(e, a, "");
                    return e
                }
            },
            44123: (e, t, n) => {
                var r = n(47324),
                    i = n(76531),
                    o = n(97130),
                    s = n(54988);
                e.exports = function(e, t, n) {
                    for (var a = i(t), c = s.f, u = o.f, l = 0; l < a.length; l++) {
                        var p = a[l];
                        r(e, p) || n && r(n, p) || c(e, p, u(t, p))
                    }
                }
            },
            65126: (e, t, n) => {
                var r = n(97811);
                e.exports = !r((function() {
                    function e() {}
                    return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
                }))
            },
            57816: (e, t, n) => {
                "use strict";
                var r = n(68512).IteratorPrototype,
                    i = n(80045),
                    o = n(58377),
                    s = n(94023),
                    a = n(27922),
                    c = function() {
                        return this
                    };
                e.exports = function(e, t, n, u) {
                    var l = t + " Iterator";
                    return e.prototype = i(r, {
                        next: o(+!u, n)
                    }), s(e, l, !1, !0), a[l] = c, e
                }
            },
            12020: (e, t, n) => {
                var r = n(66255),
                    i = n(54988),
                    o = n(58377);
                e.exports = r ? function(e, t, n) {
                    return i.f(e, t, o(1, n))
                } : function(e, t, n) {
                    return e[t] = n, e
                }
            },
            58377: e => {
                e.exports = function(e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    }
                }
            },
            14299: (e, t, n) => {
                "use strict";
                var r = n(96915),
                    i = n(54988),
                    o = n(58377);
                e.exports = function(e, t, n) {
                    var s = r(t);
                    s in e ? i.f(e, s, o(0, n)) : e[s] = n
                }
            },
            96135: (e, t, n) => {
                var r = n(82255),
                    i = n(54988);
                e.exports = function(e, t, n) {
                    return n.get && r(n.get, t, {
                        getter: !0
                    }), n.set && r(n.set, t, {
                        setter: !0
                    }), i.f(e, t, n)
                }
            },
            91115: (e, t, n) => {
                var r = n(72387),
                    i = n(54988),
                    o = n(82255),
                    s = n(84744);
                e.exports = function(e, t, n, a) {
                    a || (a = {});
                    var c = a.enumerable,
                        u = void 0 !== a.name ? a.name : t;
                    if (r(n) && o(n, u, a), a.global) c ? e[t] = n : s(t, n);
                    else {
                        try {
                            a.unsafe ? e[t] && (c = !0) : delete e[t]
                        } catch (e) {}
                        c ? e[t] = n : i.f(e, t, {
                            value: n,
                            enumerable: !1,
                            configurable: !a.nonConfigurable,
                            writable: !a.nonWritable
                        })
                    }
                    return e
                }
            },
            36675: (e, t, n) => {
                var r = n(91115);
                e.exports = function(e, t, n) {
                    for (var i in t) r(e, i, t[i], n);
                    return e
                }
            },
            84744: (e, t, n) => {
                var r = n(43392),
                    i = Object.defineProperty;
                e.exports = function(e, t) {
                    try {
                        i(r, e, {
                            value: t,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (n) {
                        r[e] = t
                    }
                    return t
                }
            },
            90134: (e, t, n) => {
                "use strict";
                var r = n(15154),
                    i = n(71972),
                    o = n(43500),
                    s = n(41905),
                    a = n(72387),
                    c = n(57816),
                    u = n(70500),
                    l = n(7979),
                    p = n(94023),
                    d = n(12020),
                    f = n(91115),
                    h = n(13482),
                    m = n(27922),
                    g = n(68512),
                    y = s.PROPER,
                    v = s.CONFIGURABLE,
                    _ = g.IteratorPrototype,
                    b = g.BUGGY_SAFARI_ITERATORS,
                    w = h("iterator"),
                    S = "keys",
                    x = "values",
                    E = "entries",
                    k = function() {
                        return this
                    };
                e.exports = function(e, t, n, s, h, g, O) {
                    c(n, t, s);
                    var I, A, T, R = function(e) {
                            if (e === h && U) return U;
                            if (!b && e in P) return P[e];
                            switch (e) {
                                case S:
                                case x:
                                case E:
                                    return function() {
                                        return new n(this, e)
                                    }
                            }
                            return function() {
                                return new n(this)
                            }
                        },
                        L = t + " Iterator",
                        C = !1,
                        P = e.prototype,
                        j = P[w] || P["@@iterator"] || h && P[h],
                        U = !b && j || R(h),
                        M = "Array" == t && P.entries || j;
                    if (M && (I = u(M.call(new e))) !== Object.prototype && I.next && (o || u(I) === _ || (l ? l(I, _) : a(I[w]) || f(I, w, k)), p(I, L, !0, !0), o && (m[L] = k)), y && h == x && j && j.name !== x && (!o && v ? d(P, "name", x) : (C = !0, U = function() {
                            return i(j, this)
                        })), h)
                        if (A = {
                                values: R(x),
                                keys: g ? U : R(S),
                                entries: R(E)
                            }, O)
                            for (T in A)(b || C || !(T in P)) && f(P, T, A[T]);
                        else r({
                            target: t,
                            proto: !0,
                            forced: b || C
                        }, A);
                    return o && !O || P[w] === U || f(P, w, U, {
                        name: h
                    }), m[t] = U, A
                }
            },
            66255: (e, t, n) => {
                var r = n(97811);
                e.exports = !r((function() {
                    return 7 != Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                }))
            },
            55079: (e, t, n) => {
                var r = n(43392),
                    i = n(95664),
                    o = r.document,
                    s = i(o) && i(o.createElement);
                e.exports = function(e) {
                    return s ? o.createElement(e) : {}
                }
            },
            83242: e => {
                e.exports = {
                    IndexSizeError: {
                        s: "INDEX_SIZE_ERR",
                        c: 1,
                        m: 1
                    },
                    DOMStringSizeError: {
                        s: "DOMSTRING_SIZE_ERR",
                        c: 2,
                        m: 0
                    },
                    HierarchyRequestError: {
                        s: "HIERARCHY_REQUEST_ERR",
                        c: 3,
                        m: 1
                    },
                    WrongDocumentError: {
                        s: "WRONG_DOCUMENT_ERR",
                        c: 4,
                        m: 1
                    },
                    InvalidCharacterError: {
                        s: "INVALID_CHARACTER_ERR",
                        c: 5,
                        m: 1
                    },
                    NoDataAllowedError: {
                        s: "NO_DATA_ALLOWED_ERR",
                        c: 6,
                        m: 0
                    },
                    NoModificationAllowedError: {
                        s: "NO_MODIFICATION_ALLOWED_ERR",
                        c: 7,
                        m: 1
                    },
                    NotFoundError: {
                        s: "NOT_FOUND_ERR",
                        c: 8,
                        m: 1
                    },
                    NotSupportedError: {
                        s: "NOT_SUPPORTED_ERR",
                        c: 9,
                        m: 1
                    },
                    InUseAttributeError: {
                        s: "INUSE_ATTRIBUTE_ERR",
                        c: 10,
                        m: 1
                    },
                    InvalidStateError: {
                        s: "INVALID_STATE_ERR",
                        c: 11,
                        m: 1
                    },
                    SyntaxError: {
                        s: "SYNTAX_ERR",
                        c: 12,
                        m: 1
                    },
                    InvalidModificationError: {
                        s: "INVALID_MODIFICATION_ERR",
                        c: 13,
                        m: 1
                    },
                    NamespaceError: {
                        s: "NAMESPACE_ERR",
                        c: 14,
                        m: 1
                    },
                    InvalidAccessError: {
                        s: "INVALID_ACCESS_ERR",
                        c: 15,
                        m: 1
                    },
                    ValidationError: {
                        s: "VALIDATION_ERR",
                        c: 16,
                        m: 0
                    },
                    TypeMismatchError: {
                        s: "TYPE_MISMATCH_ERR",
                        c: 17,
                        m: 1
                    },
                    SecurityError: {
                        s: "SECURITY_ERR",
                        c: 18,
                        m: 1
                    },
                    NetworkError: {
                        s: "NETWORK_ERR",
                        c: 19,
                        m: 1
                    },
                    AbortError: {
                        s: "ABORT_ERR",
                        c: 20,
                        m: 1
                    },
                    URLMismatchError: {
                        s: "URL_MISMATCH_ERR",
                        c: 21,
                        m: 1
                    },
                    QuotaExceededError: {
                        s: "QUOTA_EXCEEDED_ERR",
                        c: 22,
                        m: 1
                    },
                    TimeoutError: {
                        s: "TIMEOUT_ERR",
                        c: 23,
                        m: 1
                    },
                    InvalidNodeTypeError: {
                        s: "INVALID_NODE_TYPE_ERR",
                        c: 24,
                        m: 1
                    },
                    DataCloneError: {
                        s: "DATA_CLONE_ERR",
                        c: 25,
                        m: 1
                    }
                }
            },
            55353: e => {
                e.exports = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0
                }
            },
            66366: (e, t, n) => {
                var r = n(55079)("span").classList,
                    i = r && r.constructor && r.constructor.prototype;
                e.exports = i === Object.prototype ? void 0 : i
            },
            85472: (e, t, n) => {
                var r = n(1224),
                    i = n(43392);
                e.exports = "process" == r(i.process)
            },
            42547: (e, t, n) => {
                var r = n(44143);
                e.exports = r("navigator", "userAgent") || ""
            },
            77352: (e, t, n) => {
                var r, i, o = n(43392),
                    s = n(42547),
                    a = o.process,
                    c = o.Deno,
                    u = a && a.versions || c && c.version,
                    l = u && u.v8;
                l && (i = (r = l.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !i && s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (i = +r[1]), e.exports = i
            },
            61829: e => {
                e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
            1610: (e, t, n) => {
                var r = n(97811),
                    i = n(58377);
                e.exports = !r((function() {
                    var e = Error("a");
                    return !("stack" in e) || (Object.defineProperty(e, "stack", i(1, 7)), 7 !== e.stack)
                }))
            },
            15154: (e, t, n) => {
                var r = n(43392),
                    i = n(97130).f,
                    o = n(12020),
                    s = n(91115),
                    a = n(84744),
                    c = n(44123),
                    u = n(68109);
                e.exports = function(e, t) {
                    var n, l, p, d, f, h = e.target,
                        m = e.global,
                        g = e.stat;
                    if (n = m ? r : g ? r[h] || a(h, {}) : (r[h] || {}).prototype)
                        for (l in t) {
                            if (d = t[l], p = e.dontCallGetSet ? (f = i(n, l)) && f.value : n[l], !u(m ? l : h + (g ? "." : "#") + l, e.forced) && void 0 !== p) {
                                if (typeof d == typeof p) continue;
                                c(d, p)
                            }(e.sham || p && p.sham) && o(d, "sham", !0), s(n, l, d, e)
                        }
                }
            },
            97811: e => {
                e.exports = function(e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                }
            },
            87220: (e, t, n) => {
                "use strict";
                n(51027);
                var r = n(10827),
                    i = n(91115),
                    o = n(78197),
                    s = n(97811),
                    a = n(13482),
                    c = n(12020),
                    u = a("species"),
                    l = RegExp.prototype;
                e.exports = function(e, t, n, p) {
                    var d = a(e),
                        f = !s((function() {
                            var t = {};
                            return t[d] = function() {
                                return 7
                            }, 7 != "" [e](t)
                        })),
                        h = f && !s((function() {
                            var t = !1,
                                n = /a/;
                            return "split" === e && ((n = {}).constructor = {}, n.constructor[u] = function() {
                                return n
                            }, n.flags = "", n[d] = /./ [d]), n.exec = function() {
                                return t = !0, null
                            }, n[d](""), !t
                        }));
                    if (!f || !h || n) {
                        var m = r(/./ [d]),
                            g = t(d, "" [e], (function(e, t, n, i, s) {
                                var a = r(e),
                                    c = t.exec;
                                return c === o || c === l.exec ? f && !s ? {
                                    done: !0,
                                    value: m(t, n, i)
                                } : {
                                    done: !0,
                                    value: a(n, t, i)
                                } : {
                                    done: !1
                                }
                            }));
                        i(String.prototype, e, g[0]), i(l, d, g[1])
                    }
                    p && c(l[d], "sham", !0)
                }
            },
            60534: (e, t, n) => {
                var r = n(59274),
                    i = Function.prototype,
                    o = i.apply,
                    s = i.call;
                e.exports = "object" == typeof Reflect && Reflect.apply || (r ? s.bind(o) : function() {
                    return s.apply(o, arguments)
                })
            },
            63503: (e, t, n) => {
                var r = n(10827),
                    i = n(60903),
                    o = n(59274),
                    s = r(r.bind);
                e.exports = function(e, t) {
                    return i(e), void 0 === t ? e : o ? s(e, t) : function() {
                        return e.apply(t, arguments)
                    }
                }
            },
            59274: (e, t, n) => {
                var r = n(97811);
                e.exports = !r((function() {
                    var e = function() {}.bind();
                    return "function" != typeof e || e.hasOwnProperty("prototype")
                }))
            },
            71972: (e, t, n) => {
                var r = n(59274),
                    i = Function.prototype.call;
                e.exports = r ? i.bind(i) : function() {
                    return i.apply(i, arguments)
                }
            },
            41905: (e, t, n) => {
                var r = n(66255),
                    i = n(47324),
                    o = Function.prototype,
                    s = r && Object.getOwnPropertyDescriptor,
                    a = i(o, "name"),
                    c = a && "something" === function() {}.name,
                    u = a && (!r || r && s(o, "name").configurable);
                e.exports = {
                    EXISTS: a,
                    PROPER: c,
                    CONFIGURABLE: u
                }
            },
            10827: (e, t, n) => {
                var r = n(59274),
                    i = Function.prototype,
                    o = i.bind,
                    s = i.call,
                    a = r && o.bind(s, s);
                e.exports = r ? function(e) {
                    return e && a(e)
                } : function(e) {
                    return e && function() {
                        return s.apply(e, arguments)
                    }
                }
            },
            44143: (e, t, n) => {
                var r = n(43392),
                    i = n(72387),
                    o = function(e) {
                        return i(e) ? e : void 0
                    };
                e.exports = function(e, t) {
                    return arguments.length < 2 ? o(r[e]) : r[e] && r[e][t]
                }
            },
            31053: (e, t, n) => {
                var r = n(90942),
                    i = n(96345),
                    o = n(27922),
                    s = n(13482)("iterator");
                e.exports = function(e) {
                    if (null != e) return i(e, s) || i(e, "@@iterator") || o[r(e)]
                }
            },
            25907: (e, t, n) => {
                var r = n(71972),
                    i = n(60903),
                    o = n(59258),
                    s = n(40733),
                    a = n(31053),
                    c = TypeError;
                e.exports = function(e, t) {
                    var n = arguments.length < 2 ? a(e) : t;
                    if (i(n)) return o(r(n, e));
                    throw c(s(e) + " is not iterable")
                }
            },
            96345: (e, t, n) => {
                var r = n(60903);
                e.exports = function(e, t) {
                    var n = e[t];
                    return null == n ? void 0 : r(n)
                }
            },
            79723: (e, t, n) => {
                var r = n(10827),
                    i = n(70167),
                    o = Math.floor,
                    s = r("".charAt),
                    a = r("".replace),
                    c = r("".slice),
                    u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                    l = /\$([$&'`]|\d{1,2})/g;
                e.exports = function(e, t, n, r, p, d) {
                    var f = n + e.length,
                        h = r.length,
                        m = l;
                    return void 0 !== p && (p = i(p), m = u), a(d, m, (function(i, a) {
                        var u;
                        switch (s(a, 0)) {
                            case "$":
                                return "$";
                            case "&":
                                return e;
                            case "`":
                                return c(t, 0, n);
                            case "'":
                                return c(t, f);
                            case "<":
                                u = p[c(a, 1, -1)];
                                break;
                            default:
                                var l = +a;
                                if (0 === l) return i;
                                if (l > h) {
                                    var d = o(l / 10);
                                    return 0 === d ? i : d <= h ? void 0 === r[d - 1] ? s(a, 1) : r[d - 1] + s(a, 1) : i
                                }
                                u = r[l - 1]
                        }
                        return void 0 === u ? "" : u
                    }))
                }
            },
            43392: (e, t, n) => {
                var r = function(e) {
                    return e && e.Math == Math && e
                };
                e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function() {
                    return this
                }() || Function("return this")()
            },
            47324: (e, t, n) => {
                var r = n(10827),
                    i = n(70167),
                    o = r({}.hasOwnProperty);
                e.exports = Object.hasOwn || function(e, t) {
                    return o(i(e), t)
                }
            },
            75323: e => {
                e.exports = {}
            },
            95510: (e, t, n) => {
                var r = n(44143);
                e.exports = r("document", "documentElement")
            },
            71733: (e, t, n) => {
                var r = n(66255),
                    i = n(97811),
                    o = n(55079);
                e.exports = !r && !i((function() {
                    return 7 != Object.defineProperty(o("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }))
            },
            25266: (e, t, n) => {
                var r = n(10827),
                    i = n(97811),
                    o = n(1224),
                    s = Object,
                    a = r("".split);
                e.exports = i((function() {
                    return !s("z").propertyIsEnumerable(0)
                })) ? function(e) {
                    return "String" == o(e) ? a(e, "") : s(e)
                } : s
            },
            50429: (e, t, n) => {
                var r = n(72387),
                    i = n(95664),
                    o = n(7979);
                e.exports = function(e, t, n) {
                    var s, a;
                    return o && r(s = t.constructor) && s !== n && i(a = s.prototype) && a !== n.prototype && o(e, a), e
                }
            },
            16139: (e, t, n) => {
                var r = n(10827),
                    i = n(72387),
                    o = n(50427),
                    s = r(Function.toString);
                i(o.inspectSource) || (o.inspectSource = function(e) {
                    return s(e)
                }), e.exports = o.inspectSource
            },
            16986: (e, t, n) => {
                var r = n(95664),
                    i = n(12020);
                e.exports = function(e, t) {
                    r(t) && "cause" in t && i(e, "cause", t.cause)
                }
            },
            76522: (e, t, n) => {
                var r, i, o, s = n(49921),
                    a = n(43392),
                    c = n(10827),
                    u = n(95664),
                    l = n(12020),
                    p = n(47324),
                    d = n(50427),
                    f = n(67176),
                    h = n(75323),
                    m = "Object already initialized",
                    g = a.TypeError,
                    y = a.WeakMap;
                if (s || d.state) {
                    var v = d.state || (d.state = new y),
                        _ = c(v.get),
                        b = c(v.has),
                        w = c(v.set);
                    r = function(e, t) {
                        if (b(v, e)) throw new g(m);
                        return t.facade = e, w(v, e, t), t
                    }, i = function(e) {
                        return _(v, e) || {}
                    }, o = function(e) {
                        return b(v, e)
                    }
                } else {
                    var S = f("state");
                    h[S] = !0, r = function(e, t) {
                        if (p(e, S)) throw new g(m);
                        return t.facade = e, l(e, S, t), t
                    }, i = function(e) {
                        return p(e, S) ? e[S] : {}
                    }, o = function(e) {
                        return p(e, S)
                    }
                }
                e.exports = {
                    set: r,
                    get: i,
                    has: o,
                    enforce: function(e) {
                        return o(e) ? i(e) : r(e, {})
                    },
                    getterFor: function(e) {
                        return function(t) {
                            var n;
                            if (!u(t) || (n = i(t)).type !== e) throw g("Incompatible receiver, " + e + " required");
                            return n
                        }
                    }
                }
            },
            73436: (e, t, n) => {
                var r = n(13482),
                    i = n(27922),
                    o = r("iterator"),
                    s = Array.prototype;
                e.exports = function(e) {
                    return void 0 !== e && (i.Array === e || s[o] === e)
                }
            },
            72387: e => {
                e.exports = function(e) {
                    return "function" == typeof e
                }
            },
            88061: (e, t, n) => {
                var r = n(10827),
                    i = n(97811),
                    o = n(72387),
                    s = n(90942),
                    a = n(44143),
                    c = n(16139),
                    u = function() {},
                    l = [],
                    p = a("Reflect", "construct"),
                    d = /^\s*(?:class|function)\b/,
                    f = r(d.exec),
                    h = !d.exec(u),
                    m = function(e) {
                        if (!o(e)) return !1;
                        try {
                            return p(u, l, e), !0
                        } catch (e) {
                            return !1
                        }
                    },
                    g = function(e) {
                        if (!o(e)) return !1;
                        switch (s(e)) {
                            case "AsyncFunction":
                            case "GeneratorFunction":
                            case "AsyncGeneratorFunction":
                                return !1
                        }
                        try {
                            return h || !!f(d, c(e))
                        } catch (e) {
                            return !0
                        }
                    };
                g.sham = !0, e.exports = !p || i((function() {
                    var e;
                    return m(m.call) || !m(Object) || !m((function() {
                        e = !0
                    })) || e
                })) ? g : m
            },
            68109: (e, t, n) => {
                var r = n(97811),
                    i = n(72387),
                    o = /#|\.prototype\./,
                    s = function(e, t) {
                        var n = c[a(e)];
                        return n == l || n != u && (i(t) ? r(t) : !!t)
                    },
                    a = s.normalize = function(e) {
                        return String(e).replace(o, ".").toLowerCase()
                    },
                    c = s.data = {},
                    u = s.NATIVE = "N",
                    l = s.POLYFILL = "P";
                e.exports = s
            },
            95664: (e, t, n) => {
                var r = n(72387);
                e.exports = function(e) {
                    return "object" == typeof e ? null !== e : r(e)
                }
            },
            43500: e => {
                e.exports = !1
            },
            38521: (e, t, n) => {
                var r = n(95664),
                    i = n(1224),
                    o = n(13482)("match");
                e.exports = function(e) {
                    var t;
                    return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
                }
            },
            11803: (e, t, n) => {
                var r = n(44143),
                    i = n(72387),
                    o = n(66264),
                    s = n(77868),
                    a = Object;
                e.exports = s ? function(e) {
                    return "symbol" == typeof e
                } : function(e) {
                    var t = r("Symbol");
                    return i(t) && o(t.prototype, a(e))
                }
            },
            76779: (e, t, n) => {
                var r = n(71972),
                    i = n(59258),
                    o = n(96345);
                e.exports = function(e, t, n) {
                    var s, a;
                    i(e);
                    try {
                        if (!(s = o(e, "return"))) {
                            if ("throw" === t) throw n;
                            return n
                        }
                        s = r(s, e)
                    } catch (e) {
                        a = !0, s = e
                    }
                    if ("throw" === t) throw n;
                    if (a) throw s;
                    return i(s), n
                }
            },
            68512: (e, t, n) => {
                "use strict";
                var r, i, o, s = n(97811),
                    a = n(72387),
                    c = n(80045),
                    u = n(70500),
                    l = n(91115),
                    p = n(13482),
                    d = n(43500),
                    f = p("iterator"),
                    h = !1;
                [].keys && ("next" in (o = [].keys()) ? (i = u(u(o))) !== Object.prototype && (r = i) : h = !0), null == r || s((function() {
                    var e = {};
                    return r[f].call(e) !== e
                })) ? r = {} : d && (r = c(r)), a(r[f]) || l(r, f, (function() {
                    return this
                })), e.exports = {
                    IteratorPrototype: r,
                    BUGGY_SAFARI_ITERATORS: h
                }
            },
            27922: e => {
                e.exports = {}
            },
            32771: (e, t, n) => {
                var r = n(6233);
                e.exports = function(e) {
                    return r(e.length)
                }
            },
            82255: (e, t, n) => {
                var r = n(97811),
                    i = n(72387),
                    o = n(47324),
                    s = n(66255),
                    a = n(41905).CONFIGURABLE,
                    c = n(16139),
                    u = n(76522),
                    l = u.enforce,
                    p = u.get,
                    d = Object.defineProperty,
                    f = s && !r((function() {
                        return 8 !== d((function() {}), "length", {
                            value: 8
                        }).length
                    })),
                    h = String(String).split("String"),
                    m = e.exports = function(e, t, n) {
                        "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!o(e, "name") || a && e.name !== t) && (s ? d(e, "name", {
                            value: t,
                            configurable: !0
                        }) : e.name = t), f && n && o(n, "arity") && e.length !== n.arity && d(e, "length", {
                            value: n.arity
                        });
                        try {
                            n && o(n, "constructor") && n.constructor ? s && d(e, "prototype", {
                                writable: !1
                            }) : e.prototype && (e.prototype = void 0)
                        } catch (e) {}
                        var r = l(e);
                        return o(r, "source") || (r.source = h.join("string" == typeof t ? t : "")), e
                    };
                Function.prototype.toString = m((function() {
                    return i(this) && p(this).source || c(this)
                }), "toString")
            },
            87316: e => {
                var t = Math.ceil,
                    n = Math.floor;
                e.exports = Math.trunc || function(e) {
                    var r = +e;
                    return (r > 0 ? n : t)(r)
                }
            },
            51237: (e, t, n) => {
                var r = n(77352),
                    i = n(97811);
                e.exports = !!Object.getOwnPropertySymbols && !i((function() {
                    var e = Symbol();
                    return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
                }))
            },
            47401: (e, t, n) => {
                var r = n(97811),
                    i = n(13482),
                    o = n(43500),
                    s = i("iterator");
                e.exports = !r((function() {
                    var e = new URL("b?a=1&b=2&c=3", "http://a"),
                        t = e.searchParams,
                        n = "";
                    return e.pathname = "c%20d", t.forEach((function(e, r) {
                        t.delete("b"), n += r + e
                    })), o && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[s] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
                }))
            },
            49921: (e, t, n) => {
                var r = n(43392),
                    i = n(72387),
                    o = n(16139),
                    s = r.WeakMap;
                e.exports = i(s) && /native code/.test(o(s))
            },
            79101: (e, t, n) => {
                "use strict";
                var r = n(60903),
                    i = function(e) {
                        var t, n;
                        this.promise = new e((function(e, r) {
                            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                            t = e, n = r
                        })), this.resolve = r(t), this.reject = r(n)
                    };
                e.exports.f = function(e) {
                    return new i(e)
                }
            },
            35450: (e, t, n) => {
                var r = n(50786);
                e.exports = function(e, t) {
                    return void 0 === e ? arguments.length < 2 ? "" : t : r(e)
                }
            },
            93: (e, t, n) => {
                "use strict";
                var r = n(66255),
                    i = n(10827),
                    o = n(71972),
                    s = n(97811),
                    a = n(93296),
                    c = n(39403),
                    u = n(73526),
                    l = n(70167),
                    p = n(25266),
                    d = Object.assign,
                    f = Object.defineProperty,
                    h = i([].concat);
                e.exports = !d || s((function() {
                    if (r && 1 !== d({
                            b: 1
                        }, d(f({}, "a", {
                            enumerable: !0,
                            get: function() {
                                f(this, "b", {
                                    value: 3,
                                    enumerable: !1
                                })
                            }
                        }), {
                            b: 2
                        })).b) return !0;
                    var e = {},
                        t = {},
                        n = Symbol(),
                        i = "abcdefghijklmnopqrst";
                    return e[n] = 7, i.split("").forEach((function(e) {
                        t[e] = e
                    })), 7 != d({}, e)[n] || a(d({}, t)).join("") != i
                })) ? function(e, t) {
                    for (var n = l(e), i = arguments.length, s = 1, d = c.f, f = u.f; i > s;)
                        for (var m, g = p(arguments[s++]), y = d ? h(a(g), d(g)) : a(g), v = y.length, _ = 0; v > _;) m = y[_++], r && !o(f, g, m) || (n[m] = g[m]);
                    return n
                } : d
            },
            80045: (e, t, n) => {
                var r, i = n(59258),
                    o = n(50974),
                    s = n(61829),
                    a = n(75323),
                    c = n(95510),
                    u = n(55079),
                    l = n(67176)("IE_PROTO"),
                    p = function() {},
                    d = function(e) {
                        return "<script>" + e + "<\/script>"
                    },
                    f = function(e) {
                        e.write(d("")), e.close();
                        var t = e.parentWindow.Object;
                        return e = null, t
                    },
                    h = function() {
                        try {
                            r = new ActiveXObject("htmlfile")
                        } catch (e) {}
                        var e, t;
                        h = "undefined" != typeof document ? document.domain && r ? f(r) : ((t = u("iframe")).style.display = "none", c.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(d("document.F=Object")), e.close(), e.F) : f(r);
                        for (var n = s.length; n--;) delete h.prototype[s[n]];
                        return h()
                    };
                a[l] = !0, e.exports = Object.create || function(e, t) {
                    var n;
                    return null !== e ? (p.prototype = i(e), n = new p, p.prototype = null, n[l] = e) : n = h(), void 0 === t ? n : o.f(n, t)
                }
            },
            50974: (e, t, n) => {
                var r = n(66255),
                    i = n(10887),
                    o = n(54988),
                    s = n(59258),
                    a = n(88472),
                    c = n(93296);
                t.f = r && !i ? Object.defineProperties : function(e, t) {
                    s(e);
                    for (var n, r = a(t), i = c(t), u = i.length, l = 0; u > l;) o.f(e, n = i[l++], r[n]);
                    return e
                }
            },
            54988: (e, t, n) => {
                var r = n(66255),
                    i = n(71733),
                    o = n(10887),
                    s = n(59258),
                    a = n(96915),
                    c = TypeError,
                    u = Object.defineProperty,
                    l = Object.getOwnPropertyDescriptor;
                t.f = r ? o ? function(e, t, n) {
                    if (s(e), t = a(t), s(n), "function" == typeof e && "prototype" === t && "value" in n && "writable" in n && !n.writable) {
                        var r = l(e, t);
                        r && r.writable && (e[t] = n.value, n = {
                            configurable: "configurable" in n ? n.configurable : r.configurable,
                            enumerable: "enumerable" in n ? n.enumerable : r.enumerable,
                            writable: !1
                        })
                    }
                    return u(e, t, n)
                } : u : function(e, t, n) {
                    if (s(e), t = a(t), s(n), i) try {
                        return u(e, t, n)
                    } catch (e) {}
                    if ("get" in n || "set" in n) throw c("Accessors not supported");
                    return "value" in n && (e[t] = n.value), e
                }
            },
            97130: (e, t, n) => {
                var r = n(66255),
                    i = n(71972),
                    o = n(73526),
                    s = n(58377),
                    a = n(88472),
                    c = n(96915),
                    u = n(47324),
                    l = n(71733),
                    p = Object.getOwnPropertyDescriptor;
                t.f = r ? p : function(e, t) {
                    if (e = a(e), t = c(t), l) try {
                        return p(e, t)
                    } catch (e) {}
                    if (u(e, t)) return s(!i(o.f, e, t), e[t])
                }
            },
            7236: (e, t, n) => {
                var r = n(73758),
                    i = n(61829).concat("length", "prototype");
                t.f = Object.getOwnPropertyNames || function(e) {
                    return r(e, i)
                }
            },
            39403: (e, t) => {
                t.f = Object.getOwnPropertySymbols
            },
            70500: (e, t, n) => {
                var r = n(47324),
                    i = n(72387),
                    o = n(70167),
                    s = n(67176),
                    a = n(65126),
                    c = s("IE_PROTO"),
                    u = Object,
                    l = u.prototype;
                e.exports = a ? u.getPrototypeOf : function(e) {
                    var t = o(e);
                    if (r(t, c)) return t[c];
                    var n = t.constructor;
                    return i(n) && t instanceof n ? n.prototype : t instanceof u ? l : null
                }
            },
            66264: (e, t, n) => {
                var r = n(10827);
                e.exports = r({}.isPrototypeOf)
            },
            73758: (e, t, n) => {
                var r = n(10827),
                    i = n(47324),
                    o = n(88472),
                    s = n(15493).indexOf,
                    a = n(75323),
                    c = r([].push);
                e.exports = function(e, t) {
                    var n, r = o(e),
                        u = 0,
                        l = [];
                    for (n in r) !i(a, n) && i(r, n) && c(l, n);
                    for (; t.length > u;) i(r, n = t[u++]) && (~s(l, n) || c(l, n));
                    return l
                }
            },
            93296: (e, t, n) => {
                var r = n(73758),
                    i = n(61829);
                e.exports = Object.keys || function(e) {
                    return r(e, i)
                }
            },
            73526: (e, t) => {
                "use strict";
                var n = {}.propertyIsEnumerable,
                    r = Object.getOwnPropertyDescriptor,
                    i = r && !n.call({
                        1: 2
                    }, 1);
                t.f = i ? function(e) {
                    var t = r(this, e);
                    return !!t && t.enumerable
                } : n
            },
            7979: (e, t, n) => {
                var r = n(10827),
                    i = n(59258),
                    o = n(39744);
                e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                    var e, t = !1,
                        n = {};
                    try {
                        (e = r(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []), t = n instanceof Array
                    } catch (e) {}
                    return function(n, r) {
                        return i(n), o(r), t ? e(n, r) : n.__proto__ = r, n
                    }
                }() : void 0)
            },
            78722: (e, t, n) => {
                var r = n(71972),
                    i = n(72387),
                    o = n(95664),
                    s = TypeError;
                e.exports = function(e, t) {
                    var n, a;
                    if ("string" === t && i(n = e.toString) && !o(a = r(n, e))) return a;
                    if (i(n = e.valueOf) && !o(a = r(n, e))) return a;
                    if ("string" !== t && i(n = e.toString) && !o(a = r(n, e))) return a;
                    throw s("Can't convert object to primitive value")
                }
            },
            76531: (e, t, n) => {
                var r = n(44143),
                    i = n(10827),
                    o = n(7236),
                    s = n(39403),
                    a = n(59258),
                    c = i([].concat);
                e.exports = r("Reflect", "ownKeys") || function(e) {
                    var t = o.f(a(e)),
                        n = s.f;
                    return n ? c(t, n(e)) : t
                }
            },
            40453: (e, t, n) => {
                var r = n(43392);
                e.exports = r.Promise
            },
            46491: (e, t, n) => {
                var r = n(59258),
                    i = n(95664),
                    o = n(79101);
                e.exports = function(e, t) {
                    if (r(e), i(t) && t.constructor === e) return t;
                    var n = o.f(e);
                    return (0, n.resolve)(t), n.promise
                }
            },
            68554: (e, t, n) => {
                var r = n(54988).f;
                e.exports = function(e, t, n) {
                    n in e || r(e, n, {
                        configurable: !0,
                        get: function() {
                            return t[n]
                        },
                        set: function(e) {
                            t[n] = e
                        }
                    })
                }
            },
            44500: (e, t, n) => {
                var r = n(71972),
                    i = n(59258),
                    o = n(72387),
                    s = n(1224),
                    a = n(78197),
                    c = TypeError;
                e.exports = function(e, t) {
                    var n = e.exec;
                    if (o(n)) {
                        var u = r(n, e, t);
                        return null !== u && i(u), u
                    }
                    if ("RegExp" === s(e)) return r(a, e, t);
                    throw c("RegExp#exec called on incompatible receiver")
                }
            },
            78197: (e, t, n) => {
                "use strict";
                var r, i, o = n(71972),
                    s = n(10827),
                    a = n(50786),
                    c = n(1383),
                    u = n(99858),
                    l = n(23767),
                    p = n(80045),
                    d = n(76522).get,
                    f = n(70535),
                    h = n(80700),
                    m = l("native-string-replace", String.prototype.replace),
                    g = RegExp.prototype.exec,
                    y = g,
                    v = s("".charAt),
                    _ = s("".indexOf),
                    b = s("".replace),
                    w = s("".slice),
                    S = (i = /b*/g, o(g, r = /a/, "a"), o(g, i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
                    x = u.BROKEN_CARET,
                    E = void 0 !== /()??/.exec("")[1];
                (S || E || x || f || h) && (y = function(e) {
                    var t, n, r, i, s, u, l, f = this,
                        h = d(f),
                        k = a(e),
                        O = h.raw;
                    if (O) return O.lastIndex = f.lastIndex, t = o(y, O, k), f.lastIndex = O.lastIndex, t;
                    var I = h.groups,
                        A = x && f.sticky,
                        T = o(c, f),
                        R = f.source,
                        L = 0,
                        C = k;
                    if (A && (T = b(T, "y", ""), -1 === _(T, "g") && (T += "g"), C = w(k, f.lastIndex), f.lastIndex > 0 && (!f.multiline || f.multiline && "\n" !== v(k, f.lastIndex - 1)) && (R = "(?: " + R + ")", C = " " + C, L++), n = new RegExp("^(?:" + R + ")", T)), E && (n = new RegExp("^" + R + "$(?!\\s)", T)), S && (r = f.lastIndex), i = o(g, A ? n : f, C), A ? i ? (i.input = w(i.input, L), i[0] = w(i[0], L), i.index = f.lastIndex, f.lastIndex += i[0].length) : f.lastIndex = 0 : S && i && (f.lastIndex = f.global ? i.index + i[0].length : r), E && i && i.length > 1 && o(m, i[0], n, (function() {
                            for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (i[s] = void 0)
                        })), i && I)
                        for (i.groups = u = p(null), s = 0; s < I.length; s++) u[(l = I[s])[0]] = i[l[1]];
                    return i
                }), e.exports = y
            },
            1383: (e, t, n) => {
                "use strict";
                var r = n(59258);
                e.exports = function() {
                    var e = r(this),
                        t = "";
                    return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
                }
            },
            13200: (e, t, n) => {
                var r = n(71972),
                    i = n(47324),
                    o = n(66264),
                    s = n(1383),
                    a = RegExp.prototype;
                e.exports = function(e) {
                    var t = e.flags;
                    return void 0 !== t || "flags" in a || i(e, "flags") || !o(a, e) ? t : r(s, e)
                }
            },
            99858: (e, t, n) => {
                var r = n(97811),
                    i = n(43392).RegExp,
                    o = r((function() {
                        var e = i("a", "y");
                        return e.lastIndex = 2, null != e.exec("abcd")
                    })),
                    s = o || r((function() {
                        return !i("a", "y").sticky
                    })),
                    a = o || r((function() {
                        var e = i("^r", "gy");
                        return e.lastIndex = 2, null != e.exec("str")
                    }));
                e.exports = {
                    BROKEN_CARET: a,
                    MISSED_STICKY: s,
                    UNSUPPORTED_Y: o
                }
            },
            70535: (e, t, n) => {
                var r = n(97811),
                    i = n(43392).RegExp;
                e.exports = r((function() {
                    var e = i(".", "s");
                    return !(e.dotAll && e.exec("\n") && "s" === e.flags)
                }))
            },
            80700: (e, t, n) => {
                var r = n(97811),
                    i = n(43392).RegExp;
                e.exports = r((function() {
                    var e = i("(?<a>b)", "g");
                    return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
                }))
            },
            76780: e => {
                var t = TypeError;
                e.exports = function(e) {
                    if (null == e) throw t("Can't call method on " + e);
                    return e
                }
            },
            94023: (e, t, n) => {
                var r = n(54988).f,
                    i = n(47324),
                    o = n(13482)("toStringTag");
                e.exports = function(e, t, n) {
                    e && !n && (e = e.prototype), e && !i(e, o) && r(e, o, {
                        configurable: !0,
                        value: t
                    })
                }
            },
            67176: (e, t, n) => {
                var r = n(23767),
                    i = n(34825),
                    o = r("keys");
                e.exports = function(e) {
                    return o[e] || (o[e] = i(e))
                }
            },
            50427: (e, t, n) => {
                var r = n(43392),
                    i = n(84744),
                    o = "__core-js_shared__",
                    s = r[o] || i(o, {});
                e.exports = s
            },
            23767: (e, t, n) => {
                var r = n(43500),
                    i = n(50427);
                (e.exports = function(e, t) {
                    return i[e] || (i[e] = void 0 !== t ? t : {})
                })("versions", []).push({
                    version: "3.23.3",
                    mode: r ? "pure" : "global",
                    copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                    license: "https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",
                    source: "https://github.com/zloirock/core-js"
                })
            },
            82342: (e, t, n) => {
                var r = n(59258),
                    i = n(56235),
                    o = n(13482)("species");
                e.exports = function(e, t) {
                    var n, s = r(e).constructor;
                    return void 0 === s || null == (n = r(s)[o]) ? t : i(n)
                }
            },
            51050: (e, t, n) => {
                var r = n(10827),
                    i = n(88581),
                    o = n(50786),
                    s = n(76780),
                    a = r("".charAt),
                    c = r("".charCodeAt),
                    u = r("".slice),
                    l = function(e) {
                        return function(t, n) {
                            var r, l, p = o(s(t)),
                                d = i(n),
                                f = p.length;
                            return d < 0 || d >= f ? e ? "" : void 0 : (r = c(p, d)) < 55296 || r > 56319 || d + 1 === f || (l = c(p, d + 1)) < 56320 || l > 57343 ? e ? a(p, d) : r : e ? u(p, d, d + 2) : l - 56320 + (r - 55296 << 10) + 65536
                        }
                    };
                e.exports = {
                    codeAt: l(!1),
                    charAt: l(!0)
                }
            },
            76514: (e, t, n) => {
                "use strict";
                var r = n(10827),
                    i = 2147483647,
                    o = /[^\0-\u007E]/,
                    s = /[.\u3002\uFF0E\uFF61]/g,
                    a = "Overflow: input needs wider integers to process",
                    c = RangeError,
                    u = r(s.exec),
                    l = Math.floor,
                    p = String.fromCharCode,
                    d = r("".charCodeAt),
                    f = r([].join),
                    h = r([].push),
                    m = r("".replace),
                    g = r("".split),
                    y = r("".toLowerCase),
                    v = function(e) {
                        return e + 22 + 75 * (e < 26)
                    },
                    _ = function(e, t, n) {
                        var r = 0;
                        for (e = n ? l(e / 700) : e >> 1, e += l(e / t); e > 455;) e = l(e / 35), r += 36;
                        return l(r + 36 * e / (e + 38))
                    },
                    b = function(e) {
                        var t = [];
                        e = function(e) {
                            for (var t = [], n = 0, r = e.length; n < r;) {
                                var i = d(e, n++);
                                if (i >= 55296 && i <= 56319 && n < r) {
                                    var o = d(e, n++);
                                    56320 == (64512 & o) ? h(t, ((1023 & i) << 10) + (1023 & o) + 65536) : (h(t, i), n--)
                                } else h(t, i)
                            }
                            return t
                        }(e);
                        var n, r, o = e.length,
                            s = 128,
                            u = 0,
                            m = 72;
                        for (n = 0; n < e.length; n++)(r = e[n]) < 128 && h(t, p(r));
                        var g = t.length,
                            y = g;
                        for (g && h(t, "-"); y < o;) {
                            var b = i;
                            for (n = 0; n < e.length; n++)(r = e[n]) >= s && r < b && (b = r);
                            var w = y + 1;
                            if (b - s > l((i - u) / w)) throw c(a);
                            for (u += (b - s) * w, s = b, n = 0; n < e.length; n++) {
                                if ((r = e[n]) < s && ++u > i) throw c(a);
                                if (r == s) {
                                    for (var S = u, x = 36;;) {
                                        var E = x <= m ? 1 : x >= m + 26 ? 26 : x - m;
                                        if (S < E) break;
                                        var k = S - E,
                                            O = 36 - E;
                                        h(t, p(v(E + k % O))), S = l(k / O), x += 36
                                    }
                                    h(t, p(v(S))), m = _(u, w, y == g), u = 0, y++
                                }
                            }
                            u++, s++
                        }
                        return f(t, "")
                    };
                e.exports = function(e) {
                    var t, n, r = [],
                        i = g(m(y(e), s, "."), ".");
                    for (t = 0; t < i.length; t++) n = i[t], h(r, u(o, n) ? "xn--" + b(n) : n);
                    return f(r, ".")
                }
            },
            33966: (e, t, n) => {
                var r = n(88581),
                    i = Math.max,
                    o = Math.min;
                e.exports = function(e, t) {
                    var n = r(e);
                    return n < 0 ? i(n + t, 0) : o(n, t)
                }
            },
            88472: (e, t, n) => {
                var r = n(25266),
                    i = n(76780);
                e.exports = function(e) {
                    return r(i(e))
                }
            },
            88581: (e, t, n) => {
                var r = n(87316);
                e.exports = function(e) {
                    var t = +e;
                    return t != t || 0 === t ? 0 : r(t)
                }
            },
            6233: (e, t, n) => {
                var r = n(88581),
                    i = Math.min;
                e.exports = function(e) {
                    return e > 0 ? i(r(e), 9007199254740991) : 0
                }
            },
            70167: (e, t, n) => {
                var r = n(76780),
                    i = Object;
                e.exports = function(e) {
                    return i(r(e))
                }
            },
            23830: (e, t, n) => {
                var r = n(71972),
                    i = n(95664),
                    o = n(11803),
                    s = n(96345),
                    a = n(78722),
                    c = n(13482),
                    u = TypeError,
                    l = c("toPrimitive");
                e.exports = function(e, t) {
                    if (!i(e) || o(e)) return e;
                    var n, c = s(e, l);
                    if (c) {
                        if (void 0 === t && (t = "default"), n = r(c, e, t), !i(n) || o(n)) return n;
                        throw u("Can't convert object to primitive value")
                    }
                    return void 0 === t && (t = "number"), a(e, t)
                }
            },
            96915: (e, t, n) => {
                var r = n(23830),
                    i = n(11803);
                e.exports = function(e) {
                    var t = r(e, "string");
                    return i(t) ? t : t + ""
                }
            },
            66131: (e, t, n) => {
                var r = {};
                r[n(13482)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
            },
            50786: (e, t, n) => {
                var r = n(90942),
                    i = String;
                e.exports = function(e) {
                    if ("Symbol" === r(e)) throw TypeError("Cannot convert a Symbol value to a string");
                    return i(e)
                }
            },
            40733: e => {
                var t = String;
                e.exports = function(e) {
                    try {
                        return t(e)
                    } catch (e) {
                        return "Object"
                    }
                }
            },
            34825: (e, t, n) => {
                var r = n(10827),
                    i = 0,
                    o = Math.random(),
                    s = r(1..toString);
                e.exports = function(e) {
                    return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++i + o, 36)
                }
            },
            77868: (e, t, n) => {
                var r = n(51237);
                e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
            },
            10887: (e, t, n) => {
                var r = n(66255),
                    i = n(97811);
                e.exports = r && i((function() {
                    return 42 != Object.defineProperty((function() {}), "prototype", {
                        value: 42,
                        writable: !1
                    }).prototype
                }))
            },
            90214: e => {
                var t = TypeError;
                e.exports = function(e, n) {
                    if (e < n) throw t("Not enough arguments");
                    return e
                }
            },
            13482: (e, t, n) => {
                var r = n(43392),
                    i = n(23767),
                    o = n(47324),
                    s = n(34825),
                    a = n(51237),
                    c = n(77868),
                    u = i("wks"),
                    l = r.Symbol,
                    p = l && l.for,
                    d = c ? l : l && l.withoutSetter || s;
                e.exports = function(e) {
                    if (!o(u, e) || !a && "string" != typeof u[e]) {
                        var t = "Symbol." + e;
                        a && o(l, e) ? u[e] = l[e] : u[e] = c && p ? p(t) : d(t)
                    }
                    return u[e]
                }
            },
            35470: (e, t, n) => {
                "use strict";
                var r = n(44143),
                    i = n(47324),
                    o = n(12020),
                    s = n(66264),
                    a = n(7979),
                    c = n(44123),
                    u = n(68554),
                    l = n(50429),
                    p = n(35450),
                    d = n(16986),
                    f = n(92578),
                    h = n(1610),
                    m = n(66255),
                    g = n(43500);
                e.exports = function(e, t, n, y) {
                    var v = "stackTraceLimit",
                        _ = y ? 2 : 1,
                        b = e.split("."),
                        w = b[b.length - 1],
                        S = r.apply(null, b);
                    if (S) {
                        var x = S.prototype;
                        if (!g && i(x, "cause") && delete x.cause, !n) return S;
                        var E = r("Error"),
                            k = t((function(e, t) {
                                var n = p(y ? t : e, void 0),
                                    r = y ? new S(e) : new S;
                                return void 0 !== n && o(r, "message", n), h && o(r, "stack", f(r.stack, 2)), this && s(x, this) && l(r, this, k), arguments.length > _ && d(r, arguments[_]), r
                            }));
                        if (k.prototype = x, "Error" !== w ? a ? a(k, E) : c(k, E, {
                                name: !0
                            }) : m && v in S && (u(k, S, v), u(k, S, "prepareStackTrace")), c(k, S), !g) try {
                            x.name !== w && o(x, "name", w), x.constructor = k
                        } catch (e) {}
                        return k
                    }
                }
            },
            56579: (e, t, n) => {
                "use strict";
                var r = n(15154),
                    i = n(70167),
                    o = n(32771),
                    s = n(88581),
                    a = n(32516);
                r({
                    target: "Array",
                    proto: !0
                }, {
                    at: function(e) {
                        var t = i(this),
                            n = o(t),
                            r = s(e),
                            a = r >= 0 ? r : n + r;
                        return a < 0 || a >= n ? void 0 : t[a]
                    }
                }), a("at")
            },
            25766: (e, t, n) => {
                "use strict";
                var r = n(15154),
                    i = n(15493).includes,
                    o = n(97811),
                    s = n(32516);
                r({
                    target: "Array",
                    proto: !0,
                    forced: o((function() {
                        return !Array(1).includes()
                    }))
                }, {
                    includes: function(e) {
                        return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), s("includes")
            },
            5454: (e, t, n) => {
                "use strict";
                var r = n(88472),
                    i = n(32516),
                    o = n(27922),
                    s = n(76522),
                    a = n(54988).f,
                    c = n(90134),
                    u = n(43500),
                    l = n(66255),
                    p = "Array Iterator",
                    d = s.set,
                    f = s.getterFor(p);
                e.exports = c(Array, "Array", (function(e, t) {
                    d(this, {
                        type: p,
                        target: r(e),
                        index: 0,
                        kind: t
                    })
                }), (function() {
                    var e = f(this),
                        t = e.target,
                        n = e.kind,
                        r = e.index++;
                    return !t || r >= t.length ? (e.target = void 0, {
                        value: void 0,
                        done: !0
                    }) : "keys" == n ? {
                        value: r,
                        done: !1
                    } : "values" == n ? {
                        value: t[r],
                        done: !1
                    } : {
                        value: [r, t[r]],
                        done: !1
                    }
                }), "values");
                var h = o.Arguments = o.Array;
                if (i("keys"), i("values"), i("entries"), !u && l && "values" !== h.name) try {
                    a(h, "name", {
                        value: "values"
                    })
                } catch (e) {}
            },
            16329: (e, t, n) => {
                "use strict";
                var r = n(15154),
                    i = n(45152).left,
                    o = n(13838),
                    s = n(77352),
                    a = n(85472);
                r({
                    target: "Array",
                    proto: !0,
                    forced: !o("reduce") || !a && s > 79 && s < 83
                }, {
                    reduce: function(e) {
                        var t = arguments.length;
                        return i(this, e, t, t > 1 ? arguments[1] : void 0)
                    }
                })
            },
            77253: (e, t, n) => {
                var r = n(15154),
                    i = n(43392),
                    o = n(60534),
                    s = n(35470),
                    a = i.WebAssembly,
                    c = 7 !== Error("e", {
                        cause: 7
                    }).cause,
                    u = function(e, t) {
                        var n = {};
                        n[e] = s(e, t, c), r({
                            global: !0,
                            constructor: !0,
                            arity: 1,
                            forced: c
                        }, n)
                    },
                    l = function(e, t) {
                        if (a && a[e]) {
                            var n = {};
                            n[e] = s("WebAssembly." + e, t, c), r({
                                target: "WebAssembly",
                                stat: !0,
                                constructor: !0,
                                arity: 1,
                                forced: c
                            }, n)
                        }
                    };
                u("Error", (function(e) {
                    return function(t) {
                        return o(e, this, arguments)
                    }
                })), u("EvalError", (function(e) {
                    return function(t) {
                        return o(e, this, arguments)
                    }
                })), u("RangeError", (function(e) {
                    return function(t) {
                        return o(e, this, arguments)
                    }
                })), u("ReferenceError", (function(e) {
                    return function(t) {
                        return o(e, this, arguments)
                    }
                })), u("SyntaxError", (function(e) {
                    return function(t) {
                        return o(e, this, arguments)
                    }
                })), u("TypeError", (function(e) {
                    return function(t) {
                        return o(e, this, arguments)
                    }
                })), u("URIError", (function(e) {
                    return function(t) {
                        return o(e, this, arguments)
                    }
                })), l("CompileError", (function(e) {
                    return function(t) {
                        return o(e, this, arguments)
                    }
                })), l("LinkError", (function(e) {
                    return function(t) {
                        return o(e, this, arguments)
                    }
                })), l("RuntimeError", (function(e) {
                    return function(t) {
                        return o(e, this, arguments)
                    }
                }))
            },
            95982: (e, t, n) => {
                "use strict";
                var r = n(15154),
                    i = n(43500),
                    o = n(40453),
                    s = n(97811),
                    a = n(44143),
                    c = n(72387),
                    u = n(82342),
                    l = n(46491),
                    p = n(91115),
                    d = o && o.prototype;
                if (r({
                        target: "Promise",
                        proto: !0,
                        real: !0,
                        forced: !!o && s((function() {
                            d.finally.call({
                                then: function() {}
                            }, (function() {}))
                        }))
                    }, {
                        finally: function(e) {
                            var t = u(this, a("Promise")),
                                n = c(e);
                            return this.then(n ? function(n) {
                                return l(t, e()).then((function() {
                                    return n
                                }))
                            } : e, n ? function(n) {
                                return l(t, e()).then((function() {
                                    throw n
                                }))
                            } : e)
                        }
                    }), !i && c(o)) {
                    var f = a("Promise").prototype.finally;
                    d.finally !== f && p(d, "finally", f, {
                        unsafe: !0
                    })
                }
            },
            51027: (e, t, n) => {
                "use strict";
                var r = n(15154),
                    i = n(78197);
                r({
                    target: "RegExp",
                    proto: !0,
                    forced: /./.exec !== i
                }, {
                    exec: i
                })
            },
            19978: (e, t, n) => {
                "use strict";
                var r = n(15154),
                    i = n(10827),
                    o = n(76780),
                    s = n(88581),
                    a = n(50786),
                    c = n(97811),
                    u = i("".charAt);
                r({
                    target: "String",
                    proto: !0,
                    forced: c((function() {
                        return "\ud842" !== "𠮷".at(-2)
                    }))
                }, {
                    at: function(e) {
                        var t = a(o(this)),
                            n = t.length,
                            r = s(e),
                            i = r >= 0 ? r : n + r;
                        return i < 0 || i >= n ? void 0 : u(t, i)
                    }
                })
            },
            65815: (e, t, n) => {
                "use strict";
                var r = n(51050).charAt,
                    i = n(50786),
                    o = n(76522),
                    s = n(90134),
                    a = "String Iterator",
                    c = o.set,
                    u = o.getterFor(a);
                s(String, "String", (function(e) {
                    c(this, {
                        type: a,
                        string: i(e),
                        index: 0
                    })
                }), (function() {
                    var e, t = u(this),
                        n = t.string,
                        i = t.index;
                    return i >= n.length ? {
                        value: void 0,
                        done: !0
                    } : (e = r(n, i), t.index += e.length, {
                        value: e,
                        done: !1
                    })
                }))
            },
            25009: (e, t, n) => {
                "use strict";
                var r = n(15154),
                    i = n(71972),
                    o = n(10827),
                    s = n(57816),
                    a = n(76780),
                    c = n(6233),
                    u = n(50786),
                    l = n(59258),
                    p = n(1224),
                    d = n(38521),
                    f = n(13200),
                    h = n(96345),
                    m = n(91115),
                    g = n(97811),
                    y = n(13482),
                    v = n(82342),
                    _ = n(47379),
                    b = n(44500),
                    w = n(76522),
                    S = n(43500),
                    x = y("matchAll"),
                    E = "RegExp String Iterator",
                    k = w.set,
                    O = w.getterFor(E),
                    I = RegExp.prototype,
                    A = TypeError,
                    T = o("".indexOf),
                    R = o("".matchAll),
                    L = !!R && !g((function() {
                        R("a", /./)
                    })),
                    C = s((function(e, t, n, r) {
                        k(this, {
                            type: E,
                            regexp: e,
                            string: t,
                            global: n,
                            unicode: r,
                            done: !1
                        })
                    }), "RegExp String", (function() {
                        var e = O(this);
                        if (e.done) return {
                            value: void 0,
                            done: !0
                        };
                        var t = e.regexp,
                            n = e.string,
                            r = b(t, n);
                        return null === r ? {
                            value: void 0,
                            done: e.done = !0
                        } : e.global ? ("" === u(r[0]) && (t.lastIndex = _(n, c(t.lastIndex), e.unicode)), {
                            value: r,
                            done: !1
                        }) : (e.done = !0, {
                            value: r,
                            done: !1
                        })
                    })),
                    P = function(e) {
                        var t, n, r, i = l(this),
                            o = u(e),
                            s = v(i, RegExp),
                            a = u(f(i));
                        return t = new s(s === RegExp ? i.source : i, a), n = !!~T(a, "g"), r = !!~T(a, "u"), t.lastIndex = c(i.lastIndex), new C(t, o, n, r)
                    };
                r({
                    target: "String",
                    proto: !0,
                    forced: L
                }, {
                    matchAll: function(e) {
                        var t, n, r, o, s = a(this);
                        if (null != e) {
                            if (d(e) && (t = u(a(f(e))), !~T(t, "g"))) throw A("`.matchAll` does not allow non-global regexes");
                            if (L) return R(s, e);
                            if (void 0 === (r = h(e, x)) && S && "RegExp" == p(e) && (r = P), r) return i(r, e, s)
                        } else if (L) return R(s, e);
                        return n = u(s), o = new RegExp(e, "g"), S ? i(P, o, n) : o[x](n)
                    }
                }), S || x in I || m(I, x, P)
            },
            24876: (e, t, n) => {
                "use strict";
                var r = n(15154),
                    i = n(71972),
                    o = n(10827),
                    s = n(76780),
                    a = n(72387),
                    c = n(38521),
                    u = n(50786),
                    l = n(96345),
                    p = n(13200),
                    d = n(79723),
                    f = n(13482),
                    h = n(43500),
                    m = f("replace"),
                    g = TypeError,
                    y = o("".indexOf),
                    v = o("".replace),
                    _ = o("".slice),
                    b = Math.max,
                    w = function(e, t, n) {
                        return n > e.length ? -1 : "" === t ? n : y(e, t, n)
                    };
                r({
                    target: "String",
                    proto: !0
                }, {
                    replaceAll: function(e, t) {
                        var n, r, o, f, S, x, E, k, O, I = s(this),
                            A = 0,
                            T = 0,
                            R = "";
                        if (null != e) {
                            if ((n = c(e)) && (r = u(s(p(e))), !~y(r, "g"))) throw g("`.replaceAll` does not allow non-global regexes");
                            if (o = l(e, m)) return i(o, e, I, t);
                            if (h && n) return v(u(I), e, t)
                        }
                        for (f = u(I), S = u(e), (x = a(t)) || (t = u(t)), E = S.length, k = b(1, E), A = w(f, S, 0); - 1 !== A;) O = x ? u(t(S, A, f)) : d(S, f, A, [], void 0, t), R += _(f, T, A) + O, T = A + E, A = w(f, S, A + k);
                        return T < f.length && (R += _(f, T)), R
                    }
                })
            },
            216: (e, t, n) => {
                "use strict";
                var r = n(60534),
                    i = n(71972),
                    o = n(10827),
                    s = n(87220),
                    a = n(97811),
                    c = n(59258),
                    u = n(72387),
                    l = n(88581),
                    p = n(6233),
                    d = n(50786),
                    f = n(76780),
                    h = n(47379),
                    m = n(96345),
                    g = n(79723),
                    y = n(44500),
                    v = n(13482)("replace"),
                    _ = Math.max,
                    b = Math.min,
                    w = o([].concat),
                    S = o([].push),
                    x = o("".indexOf),
                    E = o("".slice),
                    k = "$0" === "a".replace(/./, "$0"),
                    O = !!/./ [v] && "" === /./ [v]("a", "$0");
                s("replace", (function(e, t, n) {
                    var o = O ? "$" : "$0";
                    return [function(e, n) {
                        var r = f(this),
                            o = null == e ? void 0 : m(e, v);
                        return o ? i(o, e, r, n) : i(t, d(r), e, n)
                    }, function(e, i) {
                        var s = c(this),
                            a = d(e);
                        if ("string" == typeof i && -1 === x(i, o) && -1 === x(i, "$<")) {
                            var f = n(t, s, a, i);
                            if (f.done) return f.value
                        }
                        var m = u(i);
                        m || (i = d(i));
                        var v = s.global;
                        if (v) {
                            var k = s.unicode;
                            s.lastIndex = 0
                        }
                        for (var O = [];;) {
                            var I = y(s, a);
                            if (null === I) break;
                            if (S(O, I), !v) break;
                            "" === d(I[0]) && (s.lastIndex = h(a, p(s.lastIndex), k))
                        }
                        for (var A, T = "", R = 0, L = 0; L < O.length; L++) {
                            for (var C = d((I = O[L])[0]), P = _(b(l(I.index), a.length), 0), j = [], U = 1; U < I.length; U++) S(j, void 0 === (A = I[U]) ? A : String(A));
                            var M = I.groups;
                            if (m) {
                                var N = w([C], j, P, a);
                                void 0 !== M && S(N, M);
                                var D = d(r(i, void 0, N))
                            } else D = g(C, a, P, j, M, i);
                            P >= R && (T += E(a, R, P) + D, R = P + C.length)
                        }
                        return T + E(a, R)
                    }]
                }), !!a((function() {
                    var e = /./;
                    return e.exec = function() {
                        var e = [];
                        return e.groups = {
                            a: "7"
                        }, e
                    }, "7" !== "".replace(e, "$<a>")
                })) || !k || O)
            },
            15610: (e, t, n) => {
                var r = n(43392),
                    i = n(55353),
                    o = n(66366),
                    s = n(5454),
                    a = n(12020),
                    c = n(13482),
                    u = c("iterator"),
                    l = c("toStringTag"),
                    p = s.values,
                    d = function(e, t) {
                        if (e) {
                            if (e[u] !== p) try {
                                a(e, u, p)
                            } catch (t) {
                                e[u] = p
                            }
                            if (e[l] || a(e, l, t), i[t])
                                for (var n in s)
                                    if (e[n] !== s[n]) try {
                                        a(e, n, s[n])
                                    } catch (t) {
                                        e[n] = s[n]
                                    }
                        }
                    };
                for (var f in i) d(r[f] && r[f].prototype, f);
                d(o, "DOMTokenList")
            },
            97791: (e, t, n) => {
                "use strict";
                var r = n(15154),
                    i = n(44143),
                    o = n(58377),
                    s = n(54988).f,
                    a = n(47324),
                    c = n(65828),
                    u = n(50429),
                    l = n(35450),
                    p = n(83242),
                    d = n(92578),
                    f = n(43500),
                    h = "DOMException",
                    m = i("Error"),
                    g = i(h),
                    y = function() {
                        c(this, v);
                        var e = arguments.length,
                            t = l(e < 1 ? void 0 : arguments[0]),
                            n = l(e < 2 ? void 0 : arguments[1], "Error"),
                            r = new g(t, n),
                            i = m(t);
                        return i.name = h, s(r, "stack", o(1, d(i.stack, 1))), u(r, this, y), r
                    },
                    v = y.prototype = g.prototype,
                    _ = "stack" in m(h),
                    b = "stack" in new g(1, 2),
                    w = _ && !b;
                r({
                    global: !0,
                    constructor: !0,
                    forced: f || w
                }, {
                    DOMException: w ? y : g
                });
                var S = i(h),
                    x = S.prototype;
                if (x.constructor !== S)
                    for (var E in f || s(x, "constructor", o(1, S)), p)
                        if (a(p, E)) {
                            var k = p[E],
                                O = k.s;
                            a(S, O) || s(S, O, o(6, k.c))
                        }
            },
            31667: (e, t, n) => {
                "use strict";
                n(5454);
                var r = n(15154),
                    i = n(43392),
                    o = n(71972),
                    s = n(10827),
                    a = n(66255),
                    c = n(47401),
                    u = n(91115),
                    l = n(36675),
                    p = n(94023),
                    d = n(57816),
                    f = n(76522),
                    h = n(65828),
                    m = n(72387),
                    g = n(47324),
                    y = n(63503),
                    v = n(90942),
                    _ = n(59258),
                    b = n(95664),
                    w = n(50786),
                    S = n(80045),
                    x = n(58377),
                    E = n(25907),
                    k = n(31053),
                    O = n(90214),
                    I = n(13482),
                    A = n(17155),
                    T = I("iterator"),
                    R = "URLSearchParams",
                    L = "URLSearchParamsIterator",
                    C = f.set,
                    P = f.getterFor(R),
                    j = f.getterFor(L),
                    U = Object.getOwnPropertyDescriptor,
                    M = function(e) {
                        if (!a) return i[e];
                        var t = U(i, e);
                        return t && t.value
                    },
                    N = M("fetch"),
                    D = M("Request"),
                    B = M("Headers"),
                    q = D && D.prototype,
                    Z = B && B.prototype,
                    F = i.RegExp,
                    $ = i.TypeError,
                    z = i.decodeURIComponent,
                    H = i.encodeURIComponent,
                    V = s("".charAt),
                    K = s([].join),
                    W = s([].push),
                    G = s("".replace),
                    Y = s([].shift),
                    J = s([].splice),
                    X = s("".split),
                    Q = s("".slice),
                    ee = /\+/g,
                    te = Array(4),
                    ne = function(e) {
                        return te[e - 1] || (te[e - 1] = F("((?:%[\\da-f]{2}){" + e + "})", "gi"))
                    },
                    re = function(e) {
                        try {
                            return z(e)
                        } catch (t) {
                            return e
                        }
                    },
                    ie = function(e) {
                        var t = G(e, ee, " "),
                            n = 4;
                        try {
                            return z(t)
                        } catch (e) {
                            for (; n;) t = G(t, ne(n--), re);
                            return t
                        }
                    },
                    oe = /[!'()~]|%20/g,
                    se = {
                        "!": "%21",
                        "'": "%27",
                        "(": "%28",
                        ")": "%29",
                        "~": "%7E",
                        "%20": "+"
                    },
                    ae = function(e) {
                        return se[e]
                    },
                    ce = function(e) {
                        return G(H(e), oe, ae)
                    },
                    ue = d((function(e, t) {
                        C(this, {
                            type: L,
                            iterator: E(P(e).entries),
                            kind: t
                        })
                    }), "Iterator", (function() {
                        var e = j(this),
                            t = e.kind,
                            n = e.iterator.next(),
                            r = n.value;
                        return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
                    }), !0),
                    le = function(e) {
                        this.entries = [], this.url = null, void 0 !== e && (b(e) ? this.parseObject(e) : this.parseQuery("string" == typeof e ? "?" === V(e, 0) ? Q(e, 1) : e : w(e)))
                    };
                le.prototype = {
                    type: R,
                    bindURL: function(e) {
                        this.url = e, this.update()
                    },
                    parseObject: function(e) {
                        var t, n, r, i, s, a, c, u = k(e);
                        if (u)
                            for (n = (t = E(e, u)).next; !(r = o(n, t)).done;) {
                                if (s = (i = E(_(r.value))).next, (a = o(s, i)).done || (c = o(s, i)).done || !o(s, i).done) throw $("Expected sequence with length 2");
                                W(this.entries, {
                                    key: w(a.value),
                                    value: w(c.value)
                                })
                            } else
                                for (var l in e) g(e, l) && W(this.entries, {
                                    key: l,
                                    value: w(e[l])
                                })
                    },
                    parseQuery: function(e) {
                        if (e)
                            for (var t, n, r = X(e, "&"), i = 0; i < r.length;)(t = r[i++]).length && (n = X(t, "="), W(this.entries, {
                                key: ie(Y(n)),
                                value: ie(K(n, "="))
                            }))
                    },
                    serialize: function() {
                        for (var e, t = this.entries, n = [], r = 0; r < t.length;) e = t[r++], W(n, ce(e.key) + "=" + ce(e.value));
                        return K(n, "&")
                    },
                    update: function() {
                        this.entries.length = 0, this.parseQuery(this.url.query)
                    },
                    updateURL: function() {
                        this.url && this.url.update()
                    }
                };
                var pe = function() {
                        h(this, de);
                        var e = arguments.length > 0 ? arguments[0] : void 0;
                        C(this, new le(e))
                    },
                    de = pe.prototype;
                if (l(de, {
                        append: function(e, t) {
                            O(arguments.length, 2);
                            var n = P(this);
                            W(n.entries, {
                                key: w(e),
                                value: w(t)
                            }), n.updateURL()
                        },
                        delete: function(e) {
                            O(arguments.length, 1);
                            for (var t = P(this), n = t.entries, r = w(e), i = 0; i < n.length;) n[i].key === r ? J(n, i, 1) : i++;
                            t.updateURL()
                        },
                        get: function(e) {
                            O(arguments.length, 1);
                            for (var t = P(this).entries, n = w(e), r = 0; r < t.length; r++)
                                if (t[r].key === n) return t[r].value;
                            return null
                        },
                        getAll: function(e) {
                            O(arguments.length, 1);
                            for (var t = P(this).entries, n = w(e), r = [], i = 0; i < t.length; i++) t[i].key === n && W(r, t[i].value);
                            return r
                        },
                        has: function(e) {
                            O(arguments.length, 1);
                            for (var t = P(this).entries, n = w(e), r = 0; r < t.length;)
                                if (t[r++].key === n) return !0;
                            return !1
                        },
                        set: function(e, t) {
                            O(arguments.length, 1);
                            for (var n, r = P(this), i = r.entries, o = !1, s = w(e), a = w(t), c = 0; c < i.length; c++)(n = i[c]).key === s && (o ? J(i, c--, 1) : (o = !0, n.value = a));
                            o || W(i, {
                                key: s,
                                value: a
                            }), r.updateURL()
                        },
                        sort: function() {
                            var e = P(this);
                            A(e.entries, (function(e, t) {
                                return e.key > t.key ? 1 : -1
                            })), e.updateURL()
                        },
                        forEach: function(e) {
                            for (var t, n = P(this).entries, r = y(e, arguments.length > 1 ? arguments[1] : void 0), i = 0; i < n.length;) r((t = n[i++]).value, t.key, this)
                        },
                        keys: function() {
                            return new ue(this, "keys")
                        },
                        values: function() {
                            return new ue(this, "values")
                        },
                        entries: function() {
                            return new ue(this, "entries")
                        }
                    }, {
                        enumerable: !0
                    }), u(de, T, de.entries, {
                        name: "entries"
                    }), u(de, "toString", (function() {
                        return P(this).serialize()
                    }), {
                        enumerable: !0
                    }), p(pe, R), r({
                        global: !0,
                        constructor: !0,
                        forced: !c
                    }, {
                        URLSearchParams: pe
                    }), !c && m(B)) {
                    var fe = s(Z.has),
                        he = s(Z.set),
                        me = function(e) {
                            if (b(e)) {
                                var t, n = e.body;
                                if (v(n) === R) return t = e.headers ? new B(e.headers) : new B, fe(t, "content-type") || he(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), S(e, {
                                    body: x(0, w(n)),
                                    headers: x(0, t)
                                })
                            }
                            return e
                        };
                    if (m(N) && r({
                            global: !0,
                            enumerable: !0,
                            dontCallGetSet: !0,
                            forced: !0
                        }, {
                            fetch: function(e) {
                                return N(e, arguments.length > 1 ? me(arguments[1]) : {})
                            }
                        }), m(D)) {
                        var ge = function(e) {
                            return h(this, q), new D(e, arguments.length > 1 ? me(arguments[1]) : {})
                        };
                        q.constructor = ge, ge.prototype = q, r({
                            global: !0,
                            constructor: !0,
                            dontCallGetSet: !0,
                            forced: !0
                        }, {
                            Request: ge
                        })
                    }
                }
                e.exports = {
                    URLSearchParams: pe,
                    getState: P
                }
            },
            61965: (e, t, n) => {
                n(31667)
            },
            43896: (e, t, n) => {
                "use strict";
                n(65815);
                var r, i = n(15154),
                    o = n(66255),
                    s = n(47401),
                    a = n(43392),
                    c = n(63503),
                    u = n(10827),
                    l = n(91115),
                    p = n(96135),
                    d = n(65828),
                    f = n(47324),
                    h = n(93),
                    m = n(74005),
                    g = n(86894),
                    y = n(51050).codeAt,
                    v = n(76514),
                    _ = n(50786),
                    b = n(94023),
                    w = n(90214),
                    S = n(31667),
                    x = n(76522),
                    E = x.set,
                    k = x.getterFor("URL"),
                    O = S.URLSearchParams,
                    I = S.getState,
                    A = a.URL,
                    T = a.TypeError,
                    R = a.parseInt,
                    L = Math.floor,
                    C = Math.pow,
                    P = u("".charAt),
                    j = u(/./.exec),
                    U = u([].join),
                    M = u(1..toString),
                    N = u([].pop),
                    D = u([].push),
                    B = u("".replace),
                    q = u([].shift),
                    Z = u("".split),
                    F = u("".slice),
                    $ = u("".toLowerCase),
                    z = u([].unshift),
                    H = "Invalid scheme",
                    V = "Invalid host",
                    K = "Invalid port",
                    W = /[a-z]/i,
                    G = /[\d+-.a-z]/i,
                    Y = /\d/,
                    J = /^0x/i,
                    X = /^[0-7]+$/,
                    Q = /^\d+$/,
                    ee = /^[\da-f]+$/i,
                    te = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
                    ne = /[\0\t\n\r #/:<>?@[\\\]^|]/,
                    re = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,
                    ie = /[\t\n\r]/g,
                    oe = function(e) {
                        var t, n, r, i;
                        if ("number" == typeof e) {
                            for (t = [], n = 0; n < 4; n++) z(t, e % 256), e = L(e / 256);
                            return U(t, ".")
                        }
                        if ("object" == typeof e) {
                            for (t = "", r = function(e) {
                                    for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++) 0 !== e[o] ? (i > n && (t = r, n = i), r = null, i = 0) : (null === r && (r = o), ++i);
                                    return i > n && (t = r, n = i), t
                                }(e), n = 0; n < 8; n++) i && 0 === e[n] || (i && (i = !1), r === n ? (t += n ? ":" : "::", i = !0) : (t += M(e[n], 16), n < 7 && (t += ":")));
                            return "[" + t + "]"
                        }
                        return e
                    },
                    se = {},
                    ae = h({}, se, {
                        " ": 1,
                        '"': 1,
                        "<": 1,
                        ">": 1,
                        "`": 1
                    }),
                    ce = h({}, ae, {
                        "#": 1,
                        "?": 1,
                        "{": 1,
                        "}": 1
                    }),
                    ue = h({}, ce, {
                        "/": 1,
                        ":": 1,
                        ";": 1,
                        "=": 1,
                        "@": 1,
                        "[": 1,
                        "\\": 1,
                        "]": 1,
                        "^": 1,
                        "|": 1
                    }),
                    le = function(e, t) {
                        var n = y(e, 0);
                        return n > 32 && n < 127 && !f(t, e) ? e : encodeURIComponent(e)
                    },
                    pe = {
                        ftp: 21,
                        file: null,
                        http: 80,
                        https: 443,
                        ws: 80,
                        wss: 443
                    },
                    de = function(e, t) {
                        var n;
                        return 2 == e.length && j(W, P(e, 0)) && (":" == (n = P(e, 1)) || !t && "|" == n)
                    },
                    fe = function(e) {
                        var t;
                        return e.length > 1 && de(F(e, 0, 2)) && (2 == e.length || "/" === (t = P(e, 2)) || "\\" === t || "?" === t || "#" === t)
                    },
                    he = function(e) {
                        return "." === e || "%2e" === $(e)
                    },
                    me = {},
                    ge = {},
                    ye = {},
                    ve = {},
                    _e = {},
                    be = {},
                    we = {},
                    Se = {},
                    xe = {},
                    Ee = {},
                    ke = {},
                    Oe = {},
                    Ie = {},
                    Ae = {},
                    Te = {},
                    Re = {},
                    Le = {},
                    Ce = {},
                    Pe = {},
                    je = {},
                    Ue = {},
                    Me = function(e, t, n) {
                        var r, i, o, s = _(e);
                        if (t) {
                            if (i = this.parse(s)) throw T(i);
                            this.searchParams = null
                        } else {
                            if (void 0 !== n && (r = new Me(n, !0)), i = this.parse(s, null, r)) throw T(i);
                            (o = I(new O)).bindURL(this), this.searchParams = o
                        }
                    };
                Me.prototype = {
                    type: "URL",
                    parse: function(e, t, n) {
                        var i, o, s, a, c, u = this,
                            l = t || me,
                            p = 0,
                            d = "",
                            h = !1,
                            y = !1,
                            v = !1;
                        for (e = _(e), t || (u.scheme = "", u.username = "", u.password = "", u.host = null, u.port = null, u.path = [], u.query = null, u.fragment = null, u.cannotBeABaseURL = !1, e = B(e, re, "")), e = B(e, ie, ""), i = m(e); p <= i.length;) {
                            switch (o = i[p], l) {
                                case me:
                                    if (!o || !j(W, o)) {
                                        if (t) return H;
                                        l = ye;
                                        continue
                                    }
                                    d += $(o), l = ge;
                                    break;
                                case ge:
                                    if (o && (j(G, o) || "+" == o || "-" == o || "." == o)) d += $(o);
                                    else {
                                        if (":" != o) {
                                            if (t) return H;
                                            d = "", l = ye, p = 0;
                                            continue
                                        }
                                        if (t && (u.isSpecial() != f(pe, d) || "file" == d && (u.includesCredentials() || null !== u.port) || "file" == u.scheme && !u.host)) return;
                                        if (u.scheme = d, t) return void(u.isSpecial() && pe[u.scheme] == u.port && (u.port = null));
                                        d = "", "file" == u.scheme ? l = Ae : u.isSpecial() && n && n.scheme == u.scheme ? l = ve : u.isSpecial() ? l = Se : "/" == i[p + 1] ? (l = _e, p++) : (u.cannotBeABaseURL = !0, D(u.path, ""), l = Pe)
                                    }
                                    break;
                                case ye:
                                    if (!n || n.cannotBeABaseURL && "#" != o) return H;
                                    if (n.cannotBeABaseURL && "#" == o) {
                                        u.scheme = n.scheme, u.path = g(n.path), u.query = n.query, u.fragment = "", u.cannotBeABaseURL = !0, l = Ue;
                                        break
                                    }
                                    l = "file" == n.scheme ? Ae : be;
                                    continue;
                                case ve:
                                    if ("/" != o || "/" != i[p + 1]) {
                                        l = be;
                                        continue
                                    }
                                    l = xe, p++;
                                    break;
                                case _e:
                                    if ("/" == o) {
                                        l = Ee;
                                        break
                                    }
                                    l = Ce;
                                    continue;
                                case be:
                                    if (u.scheme = n.scheme, o == r) u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, u.path = g(n.path), u.query = n.query;
                                    else if ("/" == o || "\\" == o && u.isSpecial()) l = we;
                                    else if ("?" == o) u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, u.path = g(n.path), u.query = "", l = je;
                                    else {
                                        if ("#" != o) {
                                            u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, u.path = g(n.path), u.path.length--, l = Ce;
                                            continue
                                        }
                                        u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, u.path = g(n.path), u.query = n.query, u.fragment = "", l = Ue
                                    }
                                    break;
                                case we:
                                    if (!u.isSpecial() || "/" != o && "\\" != o) {
                                        if ("/" != o) {
                                            u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, l = Ce;
                                            continue
                                        }
                                        l = Ee
                                    } else l = xe;
                                    break;
                                case Se:
                                    if (l = xe, "/" != o || "/" != P(d, p + 1)) continue;
                                    p++;
                                    break;
                                case xe:
                                    if ("/" != o && "\\" != o) {
                                        l = Ee;
                                        continue
                                    }
                                    break;
                                case Ee:
                                    if ("@" == o) {
                                        h && (d = "%40" + d), h = !0, s = m(d);
                                        for (var b = 0; b < s.length; b++) {
                                            var w = s[b];
                                            if (":" != w || v) {
                                                var S = le(w, ue);
                                                v ? u.password += S : u.username += S
                                            } else v = !0
                                        }
                                        d = ""
                                    } else if (o == r || "/" == o || "?" == o || "#" == o || "\\" == o && u.isSpecial()) {
                                        if (h && "" == d) return "Invalid authority";
                                        p -= m(d).length + 1, d = "", l = ke
                                    } else d += o;
                                    break;
                                case ke:
                                case Oe:
                                    if (t && "file" == u.scheme) {
                                        l = Re;
                                        continue
                                    }
                                    if (":" != o || y) {
                                        if (o == r || "/" == o || "?" == o || "#" == o || "\\" == o && u.isSpecial()) {
                                            if (u.isSpecial() && "" == d) return V;
                                            if (t && "" == d && (u.includesCredentials() || null !== u.port)) return;
                                            if (a = u.parseHost(d)) return a;
                                            if (d = "", l = Le, t) return;
                                            continue
                                        }
                                        "[" == o ? y = !0 : "]" == o && (y = !1), d += o
                                    } else {
                                        if ("" == d) return V;
                                        if (a = u.parseHost(d)) return a;
                                        if (d = "", l = Ie, t == Oe) return
                                    }
                                    break;
                                case Ie:
                                    if (!j(Y, o)) {
                                        if (o == r || "/" == o || "?" == o || "#" == o || "\\" == o && u.isSpecial() || t) {
                                            if ("" != d) {
                                                var x = R(d, 10);
                                                if (x > 65535) return K;
                                                u.port = u.isSpecial() && x === pe[u.scheme] ? null : x, d = ""
                                            }
                                            if (t) return;
                                            l = Le;
                                            continue
                                        }
                                        return K
                                    }
                                    d += o;
                                    break;
                                case Ae:
                                    if (u.scheme = "file", "/" == o || "\\" == o) l = Te;
                                    else {
                                        if (!n || "file" != n.scheme) {
                                            l = Ce;
                                            continue
                                        }
                                        if (o == r) u.host = n.host, u.path = g(n.path), u.query = n.query;
                                        else if ("?" == o) u.host = n.host, u.path = g(n.path), u.query = "", l = je;
                                        else {
                                            if ("#" != o) {
                                                fe(U(g(i, p), "")) || (u.host = n.host, u.path = g(n.path), u.shortenPath()), l = Ce;
                                                continue
                                            }
                                            u.host = n.host, u.path = g(n.path), u.query = n.query, u.fragment = "", l = Ue
                                        }
                                    }
                                    break;
                                case Te:
                                    if ("/" == o || "\\" == o) {
                                        l = Re;
                                        break
                                    }
                                    n && "file" == n.scheme && !fe(U(g(i, p), "")) && (de(n.path[0], !0) ? D(u.path, n.path[0]) : u.host = n.host), l = Ce;
                                    continue;
                                case Re:
                                    if (o == r || "/" == o || "\\" == o || "?" == o || "#" == o) {
                                        if (!t && de(d)) l = Ce;
                                        else if ("" == d) {
                                            if (u.host = "", t) return;
                                            l = Le
                                        } else {
                                            if (a = u.parseHost(d)) return a;
                                            if ("localhost" == u.host && (u.host = ""), t) return;
                                            d = "", l = Le
                                        }
                                        continue
                                    }
                                    d += o;
                                    break;
                                case Le:
                                    if (u.isSpecial()) {
                                        if (l = Ce, "/" != o && "\\" != o) continue
                                    } else if (t || "?" != o)
                                        if (t || "#" != o) {
                                            if (o != r && (l = Ce, "/" != o)) continue
                                        } else u.fragment = "", l = Ue;
                                    else u.query = "", l = je;
                                    break;
                                case Ce:
                                    if (o == r || "/" == o || "\\" == o && u.isSpecial() || !t && ("?" == o || "#" == o)) {
                                        if (".." === (c = $(c = d)) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (u.shortenPath(), "/" == o || "\\" == o && u.isSpecial() || D(u.path, "")) : he(d) ? "/" == o || "\\" == o && u.isSpecial() || D(u.path, "") : ("file" == u.scheme && !u.path.length && de(d) && (u.host && (u.host = ""), d = P(d, 0) + ":"), D(u.path, d)), d = "", "file" == u.scheme && (o == r || "?" == o || "#" == o))
                                            for (; u.path.length > 1 && "" === u.path[0];) q(u.path);
                                        "?" == o ? (u.query = "", l = je) : "#" == o && (u.fragment = "", l = Ue)
                                    } else d += le(o, ce);
                                    break;
                                case Pe:
                                    "?" == o ? (u.query = "", l = je) : "#" == o ? (u.fragment = "", l = Ue) : o != r && (u.path[0] += le(o, se));
                                    break;
                                case je:
                                    t || "#" != o ? o != r && ("'" == o && u.isSpecial() ? u.query += "%27" : u.query += "#" == o ? "%23" : le(o, se)) : (u.fragment = "", l = Ue);
                                    break;
                                case Ue:
                                    o != r && (u.fragment += le(o, ae))
                            }
                            p++
                        }
                    },
                    parseHost: function(e) {
                        var t, n, r;
                        if ("[" == P(e, 0)) {
                            if ("]" != P(e, e.length - 1)) return V;
                            if (t = function(e) {
                                    var t, n, r, i, o, s, a, c = [0, 0, 0, 0, 0, 0, 0, 0],
                                        u = 0,
                                        l = null,
                                        p = 0,
                                        d = function() {
                                            return P(e, p)
                                        };
                                    if (":" == d()) {
                                        if (":" != P(e, 1)) return;
                                        p += 2, l = ++u
                                    }
                                    for (; d();) {
                                        if (8 == u) return;
                                        if (":" != d()) {
                                            for (t = n = 0; n < 4 && j(ee, d());) t = 16 * t + R(d(), 16), p++, n++;
                                            if ("." == d()) {
                                                if (0 == n) return;
                                                if (p -= n, u > 6) return;
                                                for (r = 0; d();) {
                                                    if (i = null, r > 0) {
                                                        if (!("." == d() && r < 4)) return;
                                                        p++
                                                    }
                                                    if (!j(Y, d())) return;
                                                    for (; j(Y, d());) {
                                                        if (o = R(d(), 10), null === i) i = o;
                                                        else {
                                                            if (0 == i) return;
                                                            i = 10 * i + o
                                                        }
                                                        if (i > 255) return;
                                                        p++
                                                    }
                                                    c[u] = 256 * c[u] + i, 2 != ++r && 4 != r || u++
                                                }
                                                if (4 != r) return;
                                                break
                                            }
                                            if (":" == d()) {
                                                if (p++, !d()) return
                                            } else if (d()) return;
                                            c[u++] = t
                                        } else {
                                            if (null !== l) return;
                                            p++, l = ++u
                                        }
                                    }
                                    if (null !== l)
                                        for (s = u - l, u = 7; 0 != u && s > 0;) a = c[u], c[u--] = c[l + s - 1], c[l + --s] = a;
                                    else if (8 != u) return;
                                    return c
                                }(F(e, 1, -1)), !t) return V;
                            this.host = t
                        } else if (this.isSpecial()) {
                            if (e = v(e), j(te, e)) return V;
                            if (t = function(e) {
                                    var t, n, r, i, o, s, a, c = Z(e, ".");
                                    if (c.length && "" == c[c.length - 1] && c.length--, (t = c.length) > 4) return e;
                                    for (n = [], r = 0; r < t; r++) {
                                        if ("" == (i = c[r])) return e;
                                        if (o = 10, i.length > 1 && "0" == P(i, 0) && (o = j(J, i) ? 16 : 8, i = F(i, 8 == o ? 1 : 2)), "" === i) s = 0;
                                        else {
                                            if (!j(10 == o ? Q : 8 == o ? X : ee, i)) return e;
                                            s = R(i, o)
                                        }
                                        D(n, s)
                                    }
                                    for (r = 0; r < t; r++)
                                        if (s = n[r], r == t - 1) {
                                            if (s >= C(256, 5 - t)) return null
                                        } else if (s > 255) return null;
                                    for (a = N(n), r = 0; r < n.length; r++) a += n[r] * C(256, 3 - r);
                                    return a
                                }(e), null === t) return V;
                            this.host = t
                        } else {
                            if (j(ne, e)) return V;
                            for (t = "", n = m(e), r = 0; r < n.length; r++) t += le(n[r], se);
                            this.host = t
                        }
                    },
                    cannotHaveUsernamePasswordPort: function() {
                        return !this.host || this.cannotBeABaseURL || "file" == this.scheme
                    },
                    includesCredentials: function() {
                        return "" != this.username || "" != this.password
                    },
                    isSpecial: function() {
                        return f(pe, this.scheme)
                    },
                    shortenPath: function() {
                        var e = this.path,
                            t = e.length;
                        !t || "file" == this.scheme && 1 == t && de(e[0], !0) || e.length--
                    },
                    serialize: function() {
                        var e = this,
                            t = e.scheme,
                            n = e.username,
                            r = e.password,
                            i = e.host,
                            o = e.port,
                            s = e.path,
                            a = e.query,
                            c = e.fragment,
                            u = t + ":";
                        return null !== i ? (u += "//", e.includesCredentials() && (u += n + (r ? ":" + r : "") + "@"), u += oe(i), null !== o && (u += ":" + o)) : "file" == t && (u += "//"), u += e.cannotBeABaseURL ? s[0] : s.length ? "/" + U(s, "/") : "", null !== a && (u += "?" + a), null !== c && (u += "#" + c), u
                    },
                    setHref: function(e) {
                        var t = this.parse(e);
                        if (t) throw T(t);
                        this.searchParams.update()
                    },
                    getOrigin: function() {
                        var e = this.scheme,
                            t = this.port;
                        if ("blob" == e) try {
                            return new Ne(e.path[0]).origin
                        } catch (e) {
                            return "null"
                        }
                        return "file" != e && this.isSpecial() ? e + "://" + oe(this.host) + (null !== t ? ":" + t : "") : "null"
                    },
                    getProtocol: function() {
                        return this.scheme + ":"
                    },
                    setProtocol: function(e) {
                        this.parse(_(e) + ":", me)
                    },
                    getUsername: function() {
                        return this.username
                    },
                    setUsername: function(e) {
                        var t = m(_(e));
                        if (!this.cannotHaveUsernamePasswordPort()) {
                            this.username = "";
                            for (var n = 0; n < t.length; n++) this.username += le(t[n], ue)
                        }
                    },
                    getPassword: function() {
                        return this.password
                    },
                    setPassword: function(e) {
                        var t = m(_(e));
                        if (!this.cannotHaveUsernamePasswordPort()) {
                            this.password = "";
                            for (var n = 0; n < t.length; n++) this.password += le(t[n], ue)
                        }
                    },
                    getHost: function() {
                        var e = this.host,
                            t = this.port;
                        return null === e ? "" : null === t ? oe(e) : oe(e) + ":" + t
                    },
                    setHost: function(e) {
                        this.cannotBeABaseURL || this.parse(e, ke)
                    },
                    getHostname: function() {
                        var e = this.host;
                        return null === e ? "" : oe(e)
                    },
                    setHostname: function(e) {
                        this.cannotBeABaseURL || this.parse(e, Oe)
                    },
                    getPort: function() {
                        var e = this.port;
                        return null === e ? "" : _(e)
                    },
                    setPort: function(e) {
                        this.cannotHaveUsernamePasswordPort() || ("" == (e = _(e)) ? this.port = null : this.parse(e, Ie))
                    },
                    getPathname: function() {
                        var e = this.path;
                        return this.cannotBeABaseURL ? e[0] : e.length ? "/" + U(e, "/") : ""
                    },
                    setPathname: function(e) {
                        this.cannotBeABaseURL || (this.path = [], this.parse(e, Le))
                    },
                    getSearch: function() {
                        var e = this.query;
                        return e ? "?" + e : ""
                    },
                    setSearch: function(e) {
                        "" == (e = _(e)) ? this.query = null: ("?" == P(e, 0) && (e = F(e, 1)), this.query = "", this.parse(e, je)), this.searchParams.update()
                    },
                    getSearchParams: function() {
                        return this.searchParams.facade
                    },
                    getHash: function() {
                        var e = this.fragment;
                        return e ? "#" + e : ""
                    },
                    setHash: function(e) {
                        "" != (e = _(e)) ? ("#" == P(e, 0) && (e = F(e, 1)), this.fragment = "", this.parse(e, Ue)) : this.fragment = null
                    },
                    update: function() {
                        this.query = this.searchParams.serialize() || null
                    }
                };
                var Ne = function(e) {
                        var t = d(this, De),
                            n = w(arguments.length, 1) > 1 ? arguments[1] : void 0,
                            r = E(t, new Me(e, !1, n));
                        o || (t.href = r.serialize(), t.origin = r.getOrigin(), t.protocol = r.getProtocol(), t.username = r.getUsername(), t.password = r.getPassword(), t.host = r.getHost(), t.hostname = r.getHostname(), t.port = r.getPort(), t.pathname = r.getPathname(), t.search = r.getSearch(), t.searchParams = r.getSearchParams(), t.hash = r.getHash())
                    },
                    De = Ne.prototype,
                    Be = function(e, t) {
                        return {
                            get: function() {
                                return k(this)[e]()
                            },
                            set: t && function(e) {
                                return k(this)[t](e)
                            },
                            configurable: !0,
                            enumerable: !0
                        }
                    };
                if (o && (p(De, "href", Be("serialize", "setHref")), p(De, "origin", Be("getOrigin")), p(De, "protocol", Be("getProtocol", "setProtocol")), p(De, "username", Be("getUsername", "setUsername")), p(De, "password", Be("getPassword", "setPassword")), p(De, "host", Be("getHost", "setHost")), p(De, "hostname", Be("getHostname", "setHostname")), p(De, "port", Be("getPort", "setPort")), p(De, "pathname", Be("getPathname", "setPathname")), p(De, "search", Be("getSearch", "setSearch")), p(De, "searchParams", Be("getSearchParams")), p(De, "hash", Be("getHash", "setHash"))), l(De, "toJSON", (function() {
                        return k(this).serialize()
                    }), {
                        enumerable: !0
                    }), l(De, "toString", (function() {
                        return k(this).serialize()
                    }), {
                        enumerable: !0
                    }), A) {
                    var qe = A.createObjectURL,
                        Ze = A.revokeObjectURL;
                    qe && l(Ne, "createObjectURL", c(qe, A)), Ze && l(Ne, "revokeObjectURL", c(Ze, A))
                }
                b(Ne, "URL"), i({
                    global: !0,
                    constructor: !0,
                    forced: !s,
                    sham: !o
                }, {
                    URL: Ne
                })
            },
            17929: (e, t, n) => {
                n(43896)
            },
            90867: (e, t, n) => {
                "use strict";
                var r = n(15154),
                    i = n(71972);
                r({
                    target: "URL",
                    proto: !0,
                    enumerable: !0
                }, {
                    toJSON: function() {
                        return i(URL.prototype.toString, this)
                    }
                })
            },
            30551: (e, t) => {
                t.read = function(e, t, n, r, i) {
                    var o, s, a = 8 * i - r - 1,
                        c = (1 << a) - 1,
                        u = c >> 1,
                        l = -7,
                        p = n ? i - 1 : 0,
                        d = n ? -1 : 1,
                        f = e[t + p];
                    for (p += d, o = f & (1 << -l) - 1, f >>= -l, l += a; l > 0; o = 256 * o + e[t + p], p += d, l -= 8);
                    for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + e[t + p], p += d, l -= 8);
                    if (0 === o) o = 1 - u;
                    else {
                        if (o === c) return s ? NaN : 1 / 0 * (f ? -1 : 1);
                        s += Math.pow(2, r), o -= u
                    }
                    return (f ? -1 : 1) * s * Math.pow(2, o - r)
                }, t.write = function(e, t, n, r, i, o) {
                    var s, a, c, u = 8 * o - i - 1,
                        l = (1 << u) - 1,
                        p = l >> 1,
                        d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        f = r ? 0 : o - 1,
                        h = r ? 1 : -1,
                        m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (t += s + p >= 1 ? d / c : d * Math.pow(2, 1 - p)) * c >= 2 && (s++, c /= 2), s + p >= l ? (a = 0, s = l) : s + p >= 1 ? (a = (t * c - 1) * Math.pow(2, i), s += p) : (a = t * Math.pow(2, p - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + f] = 255 & a, f += h, a /= 256, i -= 8);
                    for (s = s << i | a, u += i; u > 0; e[n + f] = 255 & s, f += h, s /= 256, u -= 8);
                    e[n + f - h] |= 128 * m
                }
            },
            14224: e => {
                var t, n, r = e.exports = {};

                function i() {
                    throw new Error("setTimeout has not been defined")
                }

                function o() {
                    throw new Error("clearTimeout has not been defined")
                }

                function s(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                    try {
                        return t(e, 0)
                    } catch (n) {
                        try {
                            return t.call(null, e, 0)
                        } catch (n) {
                            return t.call(this, e, 0)
                        }
                    }
                }! function() {
                    try {
                        t = "function" == typeof setTimeout ? setTimeout : i
                    } catch (e) {
                        t = i
                    }
                    try {
                        n = "function" == typeof clearTimeout ? clearTimeout : o
                    } catch (e) {
                        n = o
                    }
                }();
                var a, c = [],
                    u = !1,
                    l = -1;

                function p() {
                    u && a && (u = !1, a.length ? c = a.concat(c) : l = -1, c.length && d())
                }

                function d() {
                    if (!u) {
                        var e = s(p);
                        u = !0;
                        for (var t = c.length; t;) {
                            for (a = c, c = []; ++l < t;) a && a[l].run();
                            l = -1, t = c.length
                        }
                        a = null, u = !1,
                            function(e) {
                                if (n === clearTimeout) return clearTimeout(e);
                                if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                try {
                                    n(e)
                                } catch (t) {
                                    try {
                                        return n.call(null, e)
                                    } catch (t) {
                                        return n.call(this, e)
                                    }
                                }
                            }(e)
                    }
                }

                function f(e, t) {
                    this.fun = e, this.array = t
                }

                function h() {}
                r.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    c.push(new f(e, t)), 1 !== c.length || u || s(d)
                }, f.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function(e) {
                    return []
                }, r.binding = function(e) {
                    throw new Error("process.binding is not supported")
                }, r.cwd = function() {
                    return "/"
                }, r.chdir = function(e) {
                    throw new Error("process.chdir is not supported")
                }, r.umask = function() {
                    return 0
                }
            },
            3083: (e, t, n) => {
                "use strict";
                n.d(t, {
                    TS: () => i,
                    ce: () => o,
                    yC: () => r
                });
                const r = "risk_experience_source",
                    i = "risk_experience_surface",
                    o = [r, i, "risk_experience_linked_model_token", "risk_experience_task_name", "is_obo", "risk_experience_form_name", "risk_experience_form_question_name", "risk_experience_form_source", "risk_experience_resolution_path", "dashboard_form_id", "fetch_remote", "requirement_id", "resolution_path", "task_name", "time", "risk_form_page", "is_multi_page_form", "form_contains_ark_lib_powered_text_input", "current_page_index", "new_page_index", "start_page_type", "end_page_type"]
            },
            66888: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = {
                    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
                }
            },
            29199: (e, t, n) => {
                "use strict";
                let r;
                n.d(t, {
                    Z: () => o
                });
                const i = new Uint8Array(16);

                function o() {
                    if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return r(i)
                }
            },
            24248: (e, t, n) => {
                "use strict";
                n.d(t, {
                    S: () => i
                });
                const r = [];
                for (let e = 0; e < 256; ++e) r.push((e + 256).toString(16).slice(1));

                function i(e, t = 0) {
                    return r[e[t + 0]] + r[e[t + 1]] + r[e[t + 2]] + r[e[t + 3]] + "-" + r[e[t + 4]] + r[e[t + 5]] + "-" + r[e[t + 6]] + r[e[t + 7]] + "-" + r[e[t + 8]] + r[e[t + 9]] + "-" + r[e[t + 10]] + r[e[t + 11]] + r[e[t + 12]] + r[e[t + 13]] + r[e[t + 14]] + r[e[t + 15]]
                }
            },
            3165: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var r = n(66888),
                    i = n(29199),
                    o = n(24248);
                const s = function(e, t, n) {
                    if (r.Z.randomUUID && !t && !e) return r.Z.randomUUID();
                    const s = (e = e || {}).random || (e.rng || i.Z)();
                    if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t) {
                        n = n || 0;
                        for (let e = 0; e < 16; ++e) t[n + e] = s[e];
                        return t
                    }
                    return (0, o.S)(s)
                }
            },
            36446: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = {
                    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
                }
            },
            97550: (e, t, n) => {
                "use strict";
                let r;
                n.d(t, {
                    Z: () => o
                });
                const i = new Uint8Array(16);

                function o() {
                    if (!r && (r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !r)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return r(i)
                }
            },
            40220: (e, t, n) => {
                "use strict";
                n.d(t, {
                    S: () => i
                });
                const r = [];
                for (let e = 0; e < 256; ++e) r.push((e + 256).toString(16).slice(1));

                function i(e, t = 0) {
                    return r[e[t + 0]] + r[e[t + 1]] + r[e[t + 2]] + r[e[t + 3]] + "-" + r[e[t + 4]] + r[e[t + 5]] + "-" + r[e[t + 6]] + r[e[t + 7]] + "-" + r[e[t + 8]] + r[e[t + 9]] + "-" + r[e[t + 10]] + r[e[t + 11]] + r[e[t + 12]] + r[e[t + 13]] + r[e[t + 14]] + r[e[t + 15]]
                }
            },
            70446: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var r = n(36446),
                    i = n(97550),
                    o = n(40220);
                const s = function(e, t, n) {
                    if (r.Z.randomUUID && !t && !e) return r.Z.randomUUID();
                    const s = (e = e || {}).random || (e.rng || i.Z)();
                    if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t) {
                        n = n || 0;
                        for (let e = 0; e < 16; ++e) t[n + e] = s[e];
                        return t
                    }
                    return (0, o.S)(s)
                }
            },
            69235: (e, t, n) => {
                "use strict";
                var r = n(49278),
                    i = Symbol.for("react.element"),
                    o = Symbol.for("react.fragment"),
                    s = Object.prototype.hasOwnProperty,
                    a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    c = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function u(e, t, n) {
                    var r, o = {},
                        u = null,
                        l = null;
                    for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) s.call(t, r) && !c.hasOwnProperty(r) && (o[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
                    return {
                        $$typeof: i,
                        type: e,
                        key: u,
                        ref: l,
                        props: o,
                        _owner: a.current
                    }
                }
                t.Fragment = o, t.jsx = u, t.jsxs = u
            },
            35670: (e, t) => {
                "use strict";
                var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    i = Symbol.for("react.fragment"),
                    o = Symbol.for("react.strict_mode"),
                    s = Symbol.for("react.profiler"),
                    a = Symbol.for("react.provider"),
                    c = Symbol.for("react.context"),
                    u = Symbol.for("react.forward_ref"),
                    l = Symbol.for("react.suspense"),
                    p = Symbol.for("react.memo"),
                    d = Symbol.for("react.lazy"),
                    f = Symbol.iterator,
                    h = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    m = Object.assign,
                    g = {};

                function y(e, t, n) {
                    this.props = e, this.context = t, this.refs = g, this.updater = n || h
                }

                function v() {}

                function _(e, t, n) {
                    this.props = e, this.context = t, this.refs = g, this.updater = n || h
                }
                y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
                    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, y.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, v.prototype = y.prototype;
                var b = _.prototype = new v;
                b.constructor = _, m(b, y.prototype), b.isPureReactComponent = !0;
                var w = Array.isArray,
                    S = Object.prototype.hasOwnProperty,
                    x = {
                        current: null
                    },
                    E = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function k(e, t, r) {
                    var i, o = {},
                        s = null,
                        a = null;
                    if (null != t)
                        for (i in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (s = "" + t.key), t) S.call(t, i) && !E.hasOwnProperty(i) && (o[i] = t[i]);
                    var c = arguments.length - 2;
                    if (1 === c) o.children = r;
                    else if (1 < c) {
                        for (var u = Array(c), l = 0; l < c; l++) u[l] = arguments[l + 2];
                        o.children = u
                    }
                    if (e && e.defaultProps)
                        for (i in c = e.defaultProps) void 0 === o[i] && (o[i] = c[i]);
                    return {
                        $$typeof: n,
                        type: e,
                        key: s,
                        ref: a,
                        props: o,
                        _owner: x.current
                    }
                }

                function O(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === n
                }
                var I = /\/+/g;

                function A(e, t) {
                    return "object" == typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function T(e, t, i, o, s) {
                    var a = typeof e;
                    "undefined" !== a && "boolean" !== a || (e = null);
                    var c = !1;
                    if (null === e) c = !0;
                    else switch (a) {
                        case "string":
                        case "number":
                            c = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    c = !0
                            }
                    }
                    if (c) return s = s(c = e), e = "" === o ? "." + A(c, 0) : o, w(s) ? (i = "", null != e && (i = e.replace(I, "$&/") + "/"), T(s, t, i, "", (function(e) {
                        return e
                    }))) : null != s && (O(s) && (s = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(s, i + (!s.key || c && c.key === s.key ? "" : ("" + s.key).replace(I, "$&/") + "/") + e)), t.push(s)), 1;
                    if (c = 0, o = "" === o ? "." : o + ":", w(e))
                        for (var u = 0; u < e.length; u++) {
                            var l = o + A(a = e[u], u);
                            c += T(a, t, i, l, s)
                        } else if (l = function(e) {
                                return null === e || "object" != typeof e ? null : "function" == typeof(e = f && e[f] || e["@@iterator"]) ? e : null
                            }(e), "function" == typeof l)
                            for (e = l.call(e), u = 0; !(a = e.next()).done;) c += T(a = a.value, t, i, l = o + A(a, u++), s);
                        else if ("object" === a) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                    return c
                }

                function R(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        i = 0;
                    return T(e, r, "", "", (function(e) {
                        return t.call(n, e, i++)
                    })), r
                }

                function L(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then((function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }), (function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        })), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var C = {
                        current: null
                    },
                    P = {
                        transition: null
                    },
                    j = {
                        ReactCurrentDispatcher: C,
                        ReactCurrentBatchConfig: P,
                        ReactCurrentOwner: x
                    };

                function U() {
                    throw Error("act(...) is not supported in production builds of React.")
                }
                t.Children = {
                    map: R,
                    forEach: function(e, t, n) {
                        R(e, (function() {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function(e) {
                        var t = 0;
                        return R(e, (function() {
                            t++
                        })), t
                    },
                    toArray: function(e) {
                        return R(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!O(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = y, t.Fragment = i, t.Profiler = s, t.PureComponent = _, t.StrictMode = o, t.Suspense = l, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, t.act = U, t.cloneElement = function(e, t, r) {
                    if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var i = m({}, e.props),
                        o = e.key,
                        s = e.ref,
                        a = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (s = t.ref, a = x.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
                        for (u in t) S.call(t, u) && !E.hasOwnProperty(u) && (i[u] = void 0 === t[u] && void 0 !== c ? c[u] : t[u])
                    }
                    var u = arguments.length - 2;
                    if (1 === u) i.children = r;
                    else if (1 < u) {
                        c = Array(u);
                        for (var l = 0; l < u; l++) c[l] = arguments[l + 2];
                        i.children = c
                    }
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: o,
                        ref: s,
                        props: i,
                        _owner: a
                    }
                }, t.createContext = function(e) {
                    return (e = {
                        $$typeof: c,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                        _defaultValue: null,
                        _globalName: null
                    }).Provider = {
                        $$typeof: a,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = k, t.createFactory = function(e) {
                    var t = k.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: u,
                        render: e
                    }
                }, t.isValidElement = O, t.lazy = function(e) {
                    return {
                        $$typeof: d,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: L
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: p,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = P.transition;
                    P.transition = {};
                    try {
                        e()
                    } finally {
                        P.transition = t
                    }
                }, t.unstable_act = U, t.useCallback = function(e, t) {
                    return C.current.useCallback(e, t)
                }, t.useContext = function(e) {
                    return C.current.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                    return C.current.useDeferredValue(e)
                }, t.useEffect = function(e, t) {
                    return C.current.useEffect(e, t)
                }, t.useId = function() {
                    return C.current.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return C.current.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return C.current.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return C.current.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return C.current.useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return C.current.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return C.current.useRef(e)
                }, t.useState = function(e) {
                    return C.current.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return C.current.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return C.current.useTransition()
                }, t.version = "18.3.1"
            },
            49278: (e, t, n) => {
                "use strict";
                e.exports = n(35670)
            },
            82480: (e, t, n) => {
                "use strict";
                e.exports = n(69235)
            },
            51042: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Fq: () => p
                }), n(77253), n(90867), n(15610), n(25766), n(97791);
                const r = [EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, globalThis.DOMException, globalThis.AssertionError, globalThis.SystemError].filter(Boolean).map((e => [e.name, e])),
                    i = new Map(r);
                var o = n(55872).Buffer;
                class s extends Error {
                    constructor(e) {
                        var t, n;
                        super(s._prepareSuperMessage(e)), n = "NonError", (t = "name") in this ? Object.defineProperty(this, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : this.name = n
                    }
                    static _prepareSuperMessage(e) {
                        try {
                            return JSON.stringify(e)
                        } catch {
                            return String(e)
                        }
                    }
                }
                const a = [{
                        property: "name",
                        enumerable: !1
                    }, {
                        property: "message",
                        enumerable: !1
                    }, {
                        property: "stack",
                        enumerable: !1
                    }, {
                        property: "code",
                        enumerable: !0
                    }, {
                        property: "cause",
                        enumerable: !1
                    }],
                    c = Symbol(".toJSON was called"),
                    u = e => {
                        var t;
                        return null !== (t = i.get(e)) && void 0 !== t ? t : Error
                    },
                    l = e => {
                        let {
                            from: t,
                            seen: n,
                            to: r,
                            forceEnumerable: i,
                            maxDepth: s,
                            depth: p,
                            useToJSON: f,
                            serialize: h
                        } = e;
                        if (r || (r = Array.isArray(t) ? [] : !h && d(t) ? new(u(t.name)) : {}), n.push(t), p >= s) return r;
                        if (f && "function" == typeof t.toJSON && !0 !== t[c]) return (e => {
                            e[c] = !0;
                            const t = e.toJSON();
                            return delete e[c], t
                        })(t);
                        const m = e => l({
                            from: e,
                            seen: [...n],
                            forceEnumerable: i,
                            maxDepth: s,
                            depth: p,
                            useToJSON: f,
                            serialize: h
                        });
                        for (const [e, i] of Object.entries(t)) "function" == typeof o && o.isBuffer(i) ? r[e] = "[object Buffer]" : null === i || "object" != typeof i || "function" != typeof i.pipe ? "function" != typeof i && (i && "object" == typeof i ? n.includes(t[e]) ? r[e] = "[Circular]" : (p++, r[e] = m(t[e])) : r[e] = i) : r[e] = "[object Stream]";
                        for (const {
                                property: e,
                                enumerable: n
                            } of a) void 0 !== t[e] && null !== t[e] && Object.defineProperty(r, e, {
                            value: d(t[e]) ? m(t[e]) : t[e],
                            enumerable: !!i || n,
                            configurable: !0,
                            writable: !0
                        });
                        return r
                    };

                function p(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const {
                        maxDepth: n = Number.POSITIVE_INFINITY
                    } = t;
                    if (e instanceof Error) return e;
                    if (f(e)) {
                        const t = u(e.name);
                        return l({
                            from: e,
                            seen: [],
                            to: new t,
                            maxDepth: n,
                            depth: 0,
                            serialize: !1
                        })
                    }
                    return new s(e)
                }

                function d(e) {
                    return Boolean(e) && "object" == typeof e && "name" in e && "message" in e && "stack" in e
                }

                function f(e) {
                    return Boolean(e) && "object" == typeof e && "message" in e && !Array.isArray(e)
                }
            },
            13106: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => u
                });
                var r = n(24824),
                    i = n(70597),
                    o = n(3262),
                    s = n(20334),
                    a = n(37080);

                function c(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }
                c.prototype.clear = r.Z, c.prototype.delete = i.Z, c.prototype.get = o.Z, c.prototype.has = s.Z, c.prototype.set = a.Z;
                const u = c
            },
            57699: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => u
                });
                var r = n(98968),
                    i = n(69735),
                    o = n(60648),
                    s = n(54600),
                    a = n(24977);

                function c(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }
                c.prototype.clear = r.Z, c.prototype.delete = i.Z, c.prototype.get = o.Z, c.prototype.has = s.Z, c.prototype.set = a.Z;
                const u = c
            },
            19385: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(52918),
                    i = n(99615);
                const o = (0, r.Z)(i.Z, "Map")
            },
            41083: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => u
                });
                var r = n(12380),
                    i = n(67067),
                    o = n(9240),
                    s = n(27323),
                    a = n(53843);

                function c(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }
                c.prototype.clear = r.Z, c.prototype.delete = i.Z, c.prototype.get = o.Z, c.prototype.has = s.Z, c.prototype.set = a.Z;
                const u = c
            },
            36169: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(52918),
                    i = n(99615);
                const o = (0, r.Z)(i.Z, "Set")
            },
            91412: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(41083);

                function i(e) {
                    var t = -1,
                        n = null == e ? 0 : e.length;
                    for (this.__data__ = new r.Z; ++t < n;) this.add(e[t])
                }
                i.prototype.add = i.prototype.push = function(e) {
                    return this.__data__.set(e, "__lodash_hash_undefined__"), this
                }, i.prototype.has = function(e) {
                    return this.__data__.has(e)
                };
                const o = i
            },
            87593: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => a
                });
                var r = n(57699);
                var i = n(19385),
                    o = n(41083);

                function s(e) {
                    var t = this.__data__ = new r.Z(e);
                    this.size = t.size
                }
                s.prototype.clear = function() {
                    this.__data__ = new r.Z, this.size = 0
                }, s.prototype.delete = function(e) {
                    var t = this.__data__,
                        n = t.delete(e);
                    return this.size = t.size, n
                }, s.prototype.get = function(e) {
                    return this.__data__.get(e)
                }, s.prototype.has = function(e) {
                    return this.__data__.has(e)
                }, s.prototype.set = function(e, t) {
                    var n = this.__data__;
                    if (n instanceof r.Z) {
                        var s = n.__data__;
                        if (!i.Z || s.length < 199) return s.push([e, t]), this.size = ++n.size, this;
                        n = this.__data__ = new o.Z(s)
                    }
                    return n.set(e, t), this.size = n.size, this
                };
                const a = s
            },
            66711: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = n(99615).Z.Symbol
            },
            16299: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = n(99615).Z.Uint8Array
            },
            37390: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(52918),
                    i = n(99615);
                const o = (0, r.Z)(i.Z, "WeakMap")
            },
            39890: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
                        var s = e[n];
                        t(s, n, e) && (o[i++] = s)
                    }
                    return o
                }
            },
            19608: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => l
                });
                var r = n(74650),
                    i = n(54404),
                    o = n(56052),
                    s = n(31965),
                    a = n(99313),
                    c = n(9125),
                    u = Object.prototype.hasOwnProperty;
                const l = function(e, t) {
                    var n = (0, o.Z)(e),
                        l = !n && (0, i.Z)(e),
                        p = !n && !l && (0, s.Z)(e),
                        d = !n && !l && !p && (0, c.Z)(e),
                        f = n || l || p || d,
                        h = f ? (0, r.Z)(e.length, String) : [],
                        m = h.length;
                    for (var g in e) !t && !u.call(e, g) || f && ("length" == g || p && ("offset" == g || "parent" == g) || d && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || (0, a.Z)(g, m)) || h.push(g);
                    return h
                }
            },
            18573: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e, t) {
                    for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
                    return e
                }
            },
            9873: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e, t) {
                    for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                        if (t(e[n], n, e)) return !0;
                    return !1
                }
            },
            65363: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(54523);
                const i = function(e, t) {
                    for (var n = e.length; n--;)
                        if ((0, r.Z)(e[n][0], t)) return n;
                    return -1
                }
            },
            96909: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(18573),
                    i = n(56052);
                const o = function(e, t, n) {
                    var o = t(e);
                    return (0, i.Z)(e) ? o : (0, r.Z)(o, n(e))
                }
            },
            94138: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => a
                });
                var r = n(66711),
                    i = n(33161),
                    o = n(95863),
                    s = r.Z ? r.Z.toStringTag : void 0;
                const a = function(e) {
                    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? (0, i.Z)(e) : (0, o.Z)(e)
                }
            },
            44612: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => I
                });
                var r = n(87593),
                    i = n(91412),
                    o = n(9873),
                    s = n(20465);
                const a = function(e, t, n, r, a, c) {
                    var u = 1 & n,
                        l = e.length,
                        p = t.length;
                    if (l != p && !(u && p > l)) return !1;
                    var d = c.get(e),
                        f = c.get(t);
                    if (d && f) return d == t && f == e;
                    var h = -1,
                        m = !0,
                        g = 2 & n ? new i.Z : void 0;
                    for (c.set(e, t), c.set(t, e); ++h < l;) {
                        var y = e[h],
                            v = t[h];
                        if (r) var _ = u ? r(v, y, h, t, e, c) : r(y, v, h, e, t, c);
                        if (void 0 !== _) {
                            if (_) continue;
                            m = !1;
                            break
                        }
                        if (g) {
                            if (!(0, o.Z)(t, (function(e, t) {
                                    if (!(0, s.Z)(g, t) && (y === e || a(y, e, n, r, c))) return g.push(t)
                                }))) {
                                m = !1;
                                break
                            }
                        } else if (y !== v && !a(y, v, n, r, c)) {
                            m = !1;
                            break
                        }
                    }
                    return c.delete(e), c.delete(t), m
                };
                var c = n(66711),
                    u = n(16299),
                    l = n(54523),
                    p = n(32217),
                    d = n(64423),
                    f = c.Z ? c.Z.prototype : void 0,
                    h = f ? f.valueOf : void 0;
                var m = n(38366),
                    g = Object.prototype.hasOwnProperty;
                var y = n(87796),
                    v = n(56052),
                    _ = n(31965),
                    b = n(9125),
                    w = "[object Arguments]",
                    S = "[object Array]",
                    x = "[object Object]",
                    E = Object.prototype.hasOwnProperty;
                const k = function(e, t, n, i, o, s) {
                    var c = (0, v.Z)(e),
                        f = (0, v.Z)(t),
                        k = c ? S : (0, y.Z)(e),
                        O = f ? S : (0, y.Z)(t),
                        I = (k = k == w ? x : k) == x,
                        A = (O = O == w ? x : O) == x,
                        T = k == O;
                    if (T && (0, _.Z)(e)) {
                        if (!(0, _.Z)(t)) return !1;
                        c = !0, I = !1
                    }
                    if (T && !I) return s || (s = new r.Z), c || (0, b.Z)(e) ? a(e, t, n, i, o, s) : function(e, t, n, r, i, o, s) {
                        switch (n) {
                            case "[object DataView]":
                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                e = e.buffer, t = t.buffer;
                            case "[object ArrayBuffer]":
                                return !(e.byteLength != t.byteLength || !o(new u.Z(e), new u.Z(t)));
                            case "[object Boolean]":
                            case "[object Date]":
                            case "[object Number]":
                                return (0, l.Z)(+e, +t);
                            case "[object Error]":
                                return e.name == t.name && e.message == t.message;
                            case "[object RegExp]":
                            case "[object String]":
                                return e == t + "";
                            case "[object Map]":
                                var c = p.Z;
                            case "[object Set]":
                                var f = 1 & r;
                                if (c || (c = d.Z), e.size != t.size && !f) return !1;
                                var m = s.get(e);
                                if (m) return m == t;
                                r |= 2, s.set(e, t);
                                var g = a(c(e), c(t), r, i, o, s);
                                return s.delete(e), g;
                            case "[object Symbol]":
                                if (h) return h.call(e) == h.call(t)
                        }
                        return !1
                    }(e, t, k, n, i, o, s);
                    if (!(1 & n)) {
                        var R = I && E.call(e, "__wrapped__"),
                            L = A && E.call(t, "__wrapped__");
                        if (R || L) {
                            var C = R ? e.value() : e,
                                P = L ? t.value() : t;
                            return s || (s = new r.Z), o(C, P, n, i, s)
                        }
                    }
                    return !!T && (s || (s = new r.Z), function(e, t, n, r, i, o) {
                        var s = 1 & n,
                            a = (0, m.Z)(e),
                            c = a.length;
                        if (c != (0, m.Z)(t).length && !s) return !1;
                        for (var u = c; u--;) {
                            var l = a[u];
                            if (!(s ? l in t : g.call(t, l))) return !1
                        }
                        var p = o.get(e),
                            d = o.get(t);
                        if (p && d) return p == t && d == e;
                        var f = !0;
                        o.set(e, t), o.set(t, e);
                        for (var h = s; ++u < c;) {
                            var y = e[l = a[u]],
                                v = t[l];
                            if (r) var _ = s ? r(v, y, l, t, e, o) : r(y, v, l, e, t, o);
                            if (!(void 0 === _ ? y === v || i(y, v, n, r, o) : _)) {
                                f = !1;
                                break
                            }
                            h || (h = "constructor" == l)
                        }
                        if (f && !h) {
                            var b = e.constructor,
                                w = t.constructor;
                            b == w || !("constructor" in e) || !("constructor" in t) || "function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w || (f = !1)
                        }
                        return o.delete(e), o.delete(t), f
                    }(e, t, n, i, o, s))
                };
                var O = n(13795);
                const I = function e(t, n, r, i, o) {
                    return t === n || (null == t || null == n || !(0, O.Z)(t) && !(0, O.Z)(n) ? t != t && n != n : k(t, n, r, i, e, o))
                }
            },
            63062: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => f
                });
                var r = n(88987),
                    i = n(32632),
                    o = n(82433),
                    s = n(65114),
                    a = /^\[object .+?Constructor\]$/,
                    c = Function.prototype,
                    u = Object.prototype,
                    l = c.toString,
                    p = u.hasOwnProperty,
                    d = RegExp("^" + l.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                const f = function(e) {
                    return !(!(0, o.Z)(e) || (0, i.Z)(e)) && ((0, r.Z)(e) ? d : a).test((0, s.Z)(e))
                }
            },
            89815: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var r = n(5196);
                const i = (0, n(45635).Z)(Object.keys, Object);
                var o = Object.prototype.hasOwnProperty;
                const s = function(e) {
                    if (!(0, r.Z)(e)) return i(e);
                    var t = [];
                    for (var n in Object(e)) o.call(e, n) && "constructor" != n && t.push(n);
                    return t
                }
            },
            74650: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e, t) {
                    for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                    return r
                }
            },
            5467: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e) {
                    return function(t) {
                        return e(t)
                    }
                }
            },
            20465: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e, t) {
                    return e.has(t)
                }
            },
            20712: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = n(99615).Z["__core-js_shared__"]
            },
            97889: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = "object" == typeof global && global && global.Object === Object && global
            },
            38366: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var r = n(96909),
                    i = n(40074),
                    o = n(77251);
                const s = function(e) {
                    return (0, r.Z)(e, o.Z, i.Z)
                }
            },
            10791: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(46861);
                const i = function(e, t) {
                    var n = e.__data__;
                    return (0, r.Z)(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
                }
            },
            52918: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(63062),
                    i = n(92716);
                const o = function(e, t) {
                    var n = (0, i.Z)(e, t);
                    return (0, r.Z)(n) ? n : void 0
                }
            },
            33161: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => c
                });
                var r = n(66711),
                    i = Object.prototype,
                    o = i.hasOwnProperty,
                    s = i.toString,
                    a = r.Z ? r.Z.toStringTag : void 0;
                const c = function(e) {
                    var t = o.call(e, a),
                        n = e[a];
                    try {
                        e[a] = void 0;
                        var r = !0
                    } catch (e) {}
                    var i = s.call(e);
                    return r && (t ? e[a] = n : delete e[a]), i
                }
            },
            40074: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => a
                });
                var r = n(39890),
                    i = n(69043),
                    o = Object.prototype.propertyIsEnumerable,
                    s = Object.getOwnPropertySymbols;
                const a = s ? function(e) {
                    return null == e ? [] : (e = Object(e), (0, r.Z)(s(e), (function(t) {
                        return o.call(e, t)
                    })))
                } : i.Z
            },
            87796: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => x
                });
                var r = n(52918),
                    i = n(99615);
                const o = (0, r.Z)(i.Z, "DataView");
                var s = n(19385);
                const a = (0, r.Z)(i.Z, "Promise");
                var c = n(36169),
                    u = n(37390),
                    l = n(94138),
                    p = n(65114),
                    d = "[object Map]",
                    f = "[object Promise]",
                    h = "[object Set]",
                    m = "[object WeakMap]",
                    g = "[object DataView]",
                    y = (0, p.Z)(o),
                    v = (0, p.Z)(s.Z),
                    _ = (0, p.Z)(a),
                    b = (0, p.Z)(c.Z),
                    w = (0, p.Z)(u.Z),
                    S = l.Z;
                (o && S(new o(new ArrayBuffer(1))) != g || s.Z && S(new s.Z) != d || a && S(a.resolve()) != f || c.Z && S(new c.Z) != h || u.Z && S(new u.Z) != m) && (S = function(e) {
                    var t = (0, l.Z)(e),
                        n = "[object Object]" == t ? e.constructor : void 0,
                        r = n ? (0, p.Z)(n) : "";
                    if (r) switch (r) {
                        case y:
                            return g;
                        case v:
                            return d;
                        case _:
                            return f;
                        case b:
                            return h;
                        case w:
                            return m
                    }
                    return t
                });
                const x = S
            },
            92716: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e, t) {
                    return null == e ? void 0 : e[t]
                }
            },
            24824: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(19620);
                const i = function() {
                    this.__data__ = r.Z ? (0, r.Z)(null) : {}, this.size = 0
                }
            },
            70597: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0, t
                }
            },
            3262: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(19620),
                    i = Object.prototype.hasOwnProperty;
                const o = function(e) {
                    var t = this.__data__;
                    if (r.Z) {
                        var n = t[e];
                        return "__lodash_hash_undefined__" === n ? void 0 : n
                    }
                    return i.call(t, e) ? t[e] : void 0
                }
            },
            20334: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(19620),
                    i = Object.prototype.hasOwnProperty;
                const o = function(e) {
                    var t = this.__data__;
                    return r.Z ? void 0 !== t[e] : i.call(t, e)
                }
            },
            37080: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(19620);
                const i = function(e, t) {
                    var n = this.__data__;
                    return this.size += this.has(e) ? 0 : 1, n[e] = r.Z && void 0 === t ? "__lodash_hash_undefined__" : t, this
                }
            },
            99313: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = /^(?:0|[1-9]\d*)$/;
                const i = function(e, t) {
                    var n = typeof e;
                    return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && r.test(e)) && e > -1 && e % 1 == 0 && e < t
                }
            },
            46861: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e) {
                    var t = typeof e;
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                }
            },
            32632: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var r, i = n(20712),
                    o = (r = /[^.]+$/.exec(i.Z && i.Z.keys && i.Z.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
                const s = function(e) {
                    return !!o && o in e
                }
            },
            5196: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = Object.prototype;
                const i = function(e) {
                    var t = e && e.constructor;
                    return e === ("function" == typeof t && t.prototype || r)
                }
            },
            98968: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function() {
                    this.__data__ = [], this.size = 0
                }
            },
            69735: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(65363),
                    i = Array.prototype.splice;
                const o = function(e) {
                    var t = this.__data__,
                        n = (0, r.Z)(t, e);
                    return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0))
                }
            },
            60648: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(65363);
                const i = function(e) {
                    var t = this.__data__,
                        n = (0, r.Z)(t, e);
                    return n < 0 ? void 0 : t[n][1]
                }
            },
            54600: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(65363);
                const i = function(e) {
                    return (0, r.Z)(this.__data__, e) > -1
                }
            },
            24977: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(65363);
                const i = function(e, t) {
                    var n = this.__data__,
                        i = (0, r.Z)(n, e);
                    return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
                }
            },
            12380: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var r = n(13106),
                    i = n(57699),
                    o = n(19385);
                const s = function() {
                    this.size = 0, this.__data__ = {
                        hash: new r.Z,
                        map: new(o.Z || i.Z),
                        string: new r.Z
                    }
                }
            },
            67067: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(10791);
                const i = function(e) {
                    var t = (0, r.Z)(this, e).delete(e);
                    return this.size -= t ? 1 : 0, t
                }
            },
            9240: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(10791);
                const i = function(e) {
                    return (0, r.Z)(this, e).get(e)
                }
            },
            27323: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(10791);
                const i = function(e) {
                    return (0, r.Z)(this, e).has(e)
                }
            },
            53843: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(10791);
                const i = function(e, t) {
                    var n = (0, r.Z)(this, e),
                        i = n.size;
                    return n.set(e, t), this.size += n.size == i ? 0 : 1, this
                }
            },
            32217: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e) {
                    var t = -1,
                        n = Array(e.size);
                    return e.forEach((function(e, r) {
                        n[++t] = [r, e]
                    })), n
                }
            },
            19620: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = (0, n(52918).Z)(Object, "create")
            },
            92350: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => a
                });
                var r = n(97889),
                    i = "object" == typeof exports && exports && !exports.nodeType && exports,
                    o = i && "object" == typeof module && module && !module.nodeType && module,
                    s = o && o.exports === i && r.Z.process;
                const a = function() {
                    try {
                        return o && o.require && o.require("util").types || s && s.binding && s.binding("util")
                    } catch (e) {}
                }()
            },
            95863: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = Object.prototype.toString;
                const i = function(e) {
                    return r.call(e)
                }
            },
            45635: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e, t) {
                    return function(n) {
                        return e(t(n))
                    }
                }
            },
            99615: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(97889),
                    i = "object" == typeof self && self && self.Object === Object && self;
                const o = r.Z || i || Function("return this")()
            },
            64423: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e) {
                    var t = -1,
                        n = Array(e.size);
                    return e.forEach((function(e) {
                        n[++t] = e
                    })), n
                }
            },
            65114: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = Function.prototype.toString;
                const i = function(e) {
                    if (null != e) {
                        try {
                            return r.call(e)
                        } catch (e) {}
                        try {
                            return e + ""
                        } catch (e) {}
                    }
                    return ""
                }
            },
            54523: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e, t) {
                    return e === t || e != e && t != t
                }
            },
            54404: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => u
                });
                var r = n(94138),
                    i = n(13795);
                const o = function(e) {
                    return (0, i.Z)(e) && "[object Arguments]" == (0, r.Z)(e)
                };
                var s = Object.prototype,
                    a = s.hasOwnProperty,
                    c = s.propertyIsEnumerable;
                const u = o(function() {
                    return arguments
                }()) ? o : function(e) {
                    return (0, i.Z)(e) && a.call(e, "callee") && !c.call(e, "callee")
                }
            },
            56052: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = Array.isArray
            },
            49634: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(88987),
                    i = n(65743);
                const o = function(e) {
                    return null != e && (0, i.Z)(e.length) && !(0, r.Z)(e)
                }
            },
            31965: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => c
                });
                var r = n(99615),
                    i = n(24353),
                    o = "object" == typeof exports && exports && !exports.nodeType && exports,
                    s = o && "object" == typeof module && module && !module.nodeType && module,
                    a = s && s.exports === o ? r.Z.Buffer : void 0;
                const c = (a ? a.isBuffer : void 0) || i.Z
            },
            50279: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var r = n(44612);
                const i = function(e, t) {
                    return (0, r.Z)(e, t)
                }
            },
            88987: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(94138),
                    i = n(82433);
                const o = function(e) {
                    if (!(0, i.Z)(e)) return !1;
                    var t = (0, r.Z)(e);
                    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
                }
            },
            65743: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                }
            },
            82433: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t)
                }
            },
            13795: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function(e) {
                    return null != e && "object" == typeof e
                }
            },
            9125: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => l
                });
                var r = n(94138),
                    i = n(65743),
                    o = n(13795),
                    s = {};
                s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1;
                var a = n(5467),
                    c = n(92350),
                    u = c.Z && c.Z.isTypedArray;
                const l = u ? (0, a.Z)(u) : function(e) {
                    return (0, o.Z)(e) && (0, i.Z)(e.length) && !!s[(0, r.Z)(e)]
                }
            },
            77251: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var r = n(19608),
                    i = n(89815),
                    o = n(49634);
                const s = function(e) {
                    return (0, o.Z)(e) ? (0, r.Z)(e) : (0, i.Z)(e)
                }
            },
            59332: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var r = n(41083);

                function i(e, t) {
                    if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
                    var n = function() {
                        var r = arguments,
                            i = t ? t.apply(this, r) : r[0],
                            o = n.cache;
                        if (o.has(i)) return o.get(i);
                        var s = e.apply(this, r);
                        return n.cache = o.set(i, s) || o, s
                    };
                    return n.cache = new(i.Cache || r.Z), n
                }
                i.Cache = r.Z;
                const o = i
            },
            69043: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function() {
                    return []
                }
            },
            24353: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => r
                });
                const r = function() {
                    return !1
                }
            }
        },
        o = {};

    function s(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var n = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return i[e].call(n.exports, n, n.exports, s), n.loaded = !0, n.exports
    }
    s.m = i, s.amdD = function() {
        throw new Error("define cannot be used indirect")
    }, s.amdO = {}, s.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return s.d(t, {
            a: t
        }), t
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(n, r) {
        if (1 & r && (n = this(n)), 8 & r) return n;
        if ("object" == typeof n && n) {
            if (4 & r && n.__esModule) return n;
            if (16 & r && "function" == typeof n.then) return n
        }
        var i = Object.create(null);
        s.r(i);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var a = 2 & r && n;
            "object" == typeof a && !~e.indexOf(a); a = t(a)) Object.getOwnPropertyNames(a).forEach((e => o[e] = () => n[e]));
        return o.default = () => n, s.d(i, o), i
    }, s.d = (e, t) => {
        for (var n in t) s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((t, n) => (s.f[n](e, t), t)), [])), s.u = e => (({
        3: "notificationsBanner",
        66: "taxRegistrations",
        129: "ja-JP-ts",
        171: "es-419-ts",
        203: "et-EE-ts",
        234: "debugUIPreview",
        235: "instantPayoutsPromotion",
        316: "hostedDashboardPreview",
        389: "en-US-ts",
        436: "el-GR-ts",
        484: "sv-SE-ts",
        734: "th-TH-ts",
        925: "fi-FI-ts",
        1061: "bg-BG-ts",
        1128: "lt-LT-ts",
        1212: "issuingCardsList",
        1283: "id-ID-ts",
        1377: "hu-HU-ts",
        1397: "paymentDetails",
        1937: "zh-Hant-HK-ts",
        1975: "nb-NO-ts",
        2148: "accountManagementExperience",
        2222: "en-NZ-ts",
        2231: "pt-PT-ts",
        2284: "ms-MY-ts",
        2291: "payoutsList",
        2342: "vi-VN-ts",
        2621: "cs-CZ-ts",
        2776: "treasuryFinancialAccount",
        2834: "fr-CA-ts",
        2838: "balances",
        2907: "debugUILibrary",
        2972: "en-IE-ts",
        2977: "da-DK-ts",
        3029: "pl-PL-ts",
        3070: "fr-FR-ts",
        3184: "reportingChart",
        3280: "taxSettings",
        3285: "earningsChartConfig",
        3467: "issuingCard",
        3563: "lv-LV-ts",
        3597: "appSettings",
        3608: "en-GB-ts",
        3644: "exportTaxTransactions",
        3725: "lpmSettingsExperience",
        3775: "tr-TR-ts",
        4723: "debugUIConfig",
        5094: "payoutDetails",
        5293: "sl-SI-ts",
        5362: "componentList",
        5481: "appInstall",
        5514: "mt-MT-ts",
        5651: "instantPayoutsExperience",
        5805: "transactions",
        5833: "appViewport",
        5970: "capitalOverviewExperience",
        6296: "accountOnboardingInternal",
        6343: "en-AU-ts",
        6460: "zh-Hant-TW-ts",
        6526: "pt-BR-ts",
        6584: "nl-NL-ts",
        6759: "de-DE-ts",
        6851: "taxThresholdMonitoring",
        6927: "accountManagementForm",
        7031: "disputesExperience",
        7046: "en-SG-ts",
        7312: "fil-PH-ts",
        7542: "es-ES-ts",
        7777: "hr-HR-ts",
        7922: "zh-Hans-ts",
        7947: "paymentsExperience",
        8183: "capitalFinancingPromotionExperience",
        8206: "it-IT-ts",
        8286: "payoutsExperience",
        8502: "en-US_DEBUG-ts",
        8574: "paymentDisputes",
        8669: "ko-KR-ts",
        8907: "sk-SK-ts",
        8981: "documents",
        9242: "ro-RO-ts",
        9721: "productTaxCodeSelector",
        9782: "en-IN-ts",
        9879: "treasuryRecipients",
        9955: "debugUtils"
    }[e] || e) + "-" + {
        3: "a15ced5eb67e90c5afda",
        66: "99dfe37394e6f2dd1c85",
        116: "0a3877eac6b0426bd9cc",
        117: "1228fe1606de723a5873",
        129: "bcfc7fd6c0753532bef9",
        160: "797bf6e8a7db072679e9",
        171: "3f6486e7a121317e6a56",
        194: "1230201761dbf7d984e1",
        203: "774074be77913d6e0c6a",
        228: "06370731bbf6ec4771cf",
        234: "2568a3067df56bee51b6",
        235: "f42c7ee5b4feccbed14d",
        280: "35be7c6b463bb0b6177e",
        316: "ac7aa8c6ecd627da2bb4",
        345: "2fd9613839c285f2a5d8",
        389: "438c0c5aa3e309a60f6d",
        393: "566157e9aa0070a6a428",
        436: "75b3376109bad400818b",
        484: "e9390a75bc0dddeec401",
        608: "0470396b05d31ac74d67",
        687: "f13e35b5b46ae6321902",
        730: "ac0832c20976025a1300",
        734: "f4580079b7e545a492bc",
        781: "8a5ee7fec2a80e0e0238",
        925: "9d40d5d146a03ddf8b63",
        1061: "9c8ce8808220255d1898",
        1101: "bcccebd2e14f61486307",
        1110: "60897a4f30bb68b9c4da",
        1119: "3927eddc0a62d8cbc38c",
        1128: "7aa480e6f8212790178b",
        1212: "2827239b3c6a53a97fab",
        1252: "01ebb8a5a343d6ca9dfe",
        1283: "300c5c63a06e61d12d7f",
        1377: "45b1a5e6ed64839d7a84",
        1397: "54c6e57fbe4cea530c73",
        1429: "a22aa97281d837fcf25a",
        1560: "68214fe465db4f50da99",
        1572: "569947d8b556539340bc",
        1630: "d35b20a533049e1b619b",
        1705: "41ea9a3dfdc110ea0d0a",
        1715: "c25c360ad0da85b1a5b1",
        1875: "9bb164c519146c76644a",
        1937: "fde23827b5b8f550ee67",
        1975: "a0e7503b61f1c975d4a2",
        1986: "b6507070735b33dd8087",
        2051: "a7490a1102b733181691",
        2148: "0dcf3efff60c1d259bd5",
        2192: "e4514872a94406c0557e",
        2222: "d5109aa439ec1822c3d5",
        2231: "00c408531218834dd6dd",
        2284: "86065779b63dc52abd4a",
        2291: "fba0c09df72b0c6198df",
        2342: "94ccd42d2fb8d502f19e",
        2419: "be5b862a61cf9a9b47be",
        2548: "b2c6225f3c230dbbd1da",
        2621: "eae2a8387e94f7c269ab",
        2626: "c05ac75e41d4056a61bc",
        2690: "c9ece682da905910d333",
        2776: "afaee7bdfe06ef169d6c",
        2783: "a501cb9329df306beb90",
        2834: "ecc6700a5ed1a16bcf8e",
        2838: "87345490f930917fc4f8",
        2907: "4a6420cc57100642b1a5",
        2972: "8a734ea92bf692d73561",
        2977: "0dcf3a5259707bcc6180",
        3029: "e2ff2fe5f5d3c2279cc1",
        3058: "54d573583dd3935eecfc",
        3070: "063796c4ea4d77ddbea4",
        3100: "e16dc161d4b31a4c36cc",
        3184: "a304acf4e537fe11b809",
        3280: "002aacc8a7837383624d",
        3285: "e6ad1cd99f22392308fd",
        3402: "7eb4a5a2cac7092642cb",
        3467: "0b527ad90ae0f9731230",
        3563: "3f89105a7e0c03e9bc1c",
        3591: "df0935c864f48af4fc5b",
        3597: "6fe18ca65454c42f4d83",
        3608: "4cecea5bbb2c77a2db4a",
        3619: "62bc14ef7741af6a946a",
        3644: "029a389682e95c8c29d8",
        3700: "fea00796473727125bf8",
        3725: "aa03ab3258e2a572a41b",
        3775: "7eeacfa1a4ab272115b1",
        3955: "87986df3eafb62dddd23",
        4044: "58ab8b9b4d7283399069",
        4052: "259dff74ba391249667e",
        4095: "9923c70c725b7e920269",
        4201: "3ea64b953f3d16a4610a",
        4245: "9df93c4509b8509bdfec",
        4551: "76018cd415d98c678396",
        4637: "58573116ca27a03882a1",
        4646: "fe9cd48b7dabb8c3c0a2",
        4704: "4a88d5d25782de035a7d",
        4723: "78edb8fac91ac404984a",
        4785: "8ca6f37c91e9b141d3d7",
        4813: "f55a26ffbad08af18acb",
        4913: "d991de0023e716f124c2",
        5094: "66e8c998aeedc79911bc",
        5207: "5ffac256768d1f8813c8",
        5221: "abc097dccf5d4abc4e4a",
        5240: "9adbfcb14709e2df218f",
        5293: "c2fa70bb6f8b2c4449a4",
        5334: "0ad2a5a2ef32e38d889c",
        5348: "f53a63cfd2deb779c465",
        5362: "9ab0736da355da8f7ac0",
        5368: "aba6edf9b08bda3dd36a",
        5403: "23782c93824aa123c9d2",
        5481: "764e20610f640486a6ae",
        5514: "83f4a3f4f9b876894d7e",
        5517: "2821cb51f12d9f50ba2b",
        5526: "da3b2a0fa1a243fea063",
        5527: "e5181b65300972e0d68f",
        5566: "5b173efbb908d07e2caf",
        5586: "370cdca2e8ac9d63e06f",
        5651: "bb0168e72aeb6c3b3e42",
        5776: "b604b5a0e511eb92c6cd",
        5805: "698f1ce192c9b51dd076",
        5833: "02c39c14d487764fdb62",
        5970: "4f87e2abf482171c44e4",
        6023: "ad0125e7b86c6e05258a",
        6074: "226ef9d029d0603853f6",
        6172: "88aece74e52fbcd5e24f",
        6285: "968e5218ee89ef46a449",
        6288: "ef5436556510fa533310",
        6296: "72e2756290f495a25bbb",
        6343: "f6887b9880cb8f42b368",
        6347: "6c71f29fd62915c8e883",
        6460: "4d6bfe17b4fa088aa885",
        6526: "d5b2f5af3764233d3008",
        6543: "aacdee010a755953e072",
        6556: "2604ea4a16f560caa136",
        6584: "260e9b282abacfe48d93",
        6618: "7bbb969d191b229ffe2a",
        6637: "d16edcf52943ca78fb06",
        6670: "f7d0182e04baa229a0f8",
        6706: "204754982f16c1774eb1",
        6759: "6045635fc46f9fd1d0b7",
        6833: "82f9cb8823b9e4ffb063",
        6851: "f1276ff4a7ef3c458e5b",
        6856: "3b961058aac0b0732fbe",
        6927: "218995c42198c5fc17cc",
        7031: "ed850b3459584f3f3585",
        7046: "bfaf38f02112c6cf10c9",
        7088: "455ed2f1ba7b51594e42",
        7216: "897fdef9dc58be3b4654",
        7290: "729ef338ffc0576f3891",
        7312: "465d8c7217a8ea13117a",
        7542: "7a3e4dae7ee97511e4df",
        7549: "4458f0bde62cd19d4400",
        7620: "eab497e6e084fe268123",
        7699: "2a2f4b32a61ab572ce5b",
        7777: "2ac7806f4e7f15b358d9",
        7823: "6bf8f43a518450d6f19d",
        7863: "b8dd1f6f74679ed4ac22",
        7922: "58f0ad90fa9c8b7743a3",
        7947: "4f8ccb890f4aa9eb451b",
        8130: "f5cf9d6cadb3f713cc7b",
        8183: "4c571df50b603735de60",
        8206: "73a13e631f24517cea9d",
        8286: "a5fcb91879d1bc3605ab",
        8323: "b09fd3a4a90c0c53e513",
        8328: "f9f9fb8207d5aff7f087",
        8353: "8efbacc6e06a0f7581d6",
        8368: "093cc2081566956c2e15",
        8502: "fb1ac1bce2f88e253ee8",
        8523: "de084f8853248c0d7773",
        8574: "b910d513692a726377f9",
        8582: "44d09ce0ea68da07a83d",
        8636: "e06b98d157cd01682818",
        8669: "13674035a8aa7c633ff5",
        8692: "9e2fe1faa171f251cedd",
        8755: "77de77614776232fb8e7",
        8815: "7da0c3caca0db40a5d0a",
        8832: "02191d19697de57ede11",
        8907: "c2b608257471dc71f95c",
        8981: "abceaba33f11399c65a1",
        9041: "66528acd014d33bf9dfd",
        9170: "4cd5df841f6ffd9c9699",
        9194: "62fb3efa2ba03a6b2ccf",
        9220: "48f15ec21a184a6e13d5",
        9242: "19dc095900057985dcc5",
        9569: "417ec51c52216fa80c06",
        9721: "088cf6de01d7048a2382",
        9782: "ea2aeb5c655cebf2c41f",
        9879: "c3173aa39e879a70484d",
        9938: "b1dc3196c19e5c514bc1",
        9955: "07333a98081f94d16dc5"
    }[e] + ".js"), s.miniCssF = e => {}, s.miniCssF = e => {}, s.h = () => "b9ec64487276304e87fb", s.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), s.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, r = "submerchant-surfaces:", s.l = (e, t, i, o) => {
        if (n[e]) n[e].push(t);
        else {
            var a, c;
            if (void 0 !== i)
                for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
                    var p = u[l];
                    if (p.getAttribute("src") == e || p.getAttribute("data-webpack") == r + i) {
                        a = p;
                        break
                    }
                }
            a || (c = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, s.nc && a.setAttribute("nonce", s.nc), a.setAttribute("data-webpack", r + i), a.src = e), n[e] = [t];
            var d = (t, r) => {
                    a.onerror = a.onload = null, clearTimeout(f);
                    var i = n[e];
                    if (delete n[e], a.parentNode && a.parentNode.removeChild(a), i && i.forEach((e => e(r))), t) return t(r)
                },
                f = setTimeout(d.bind(null, void 0, {
                    type: "timeout",
                    target: a
                }), 12e4);
            a.onerror = d.bind(null, a.onerror), a.onload = d.bind(null, a.onload), c && document.head.appendChild(a)
        }
    }, s.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), s.j = 3380, (() => {
        var e;
        s.g.importScripts && (e = s.g.location + "");
        var t = s.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            n.length && (e = n[n.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
    })(), (() => {
        var e = {
            3380: 0,
            3591: 0
        };
        s.f.j = (t, n) => {
            var r = s.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r) n.push(r[2]);
                else {
                    var i = new Promise(((n, i) => r = e[t] = [n, i]));
                    n.push(r[2] = i);
                    var o = s.p + s.u(t),
                        a = new Error;
                    s.l(o, (n => {
                        if (s.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                            var i = n && ("load" === n.type ? "missing" : n.type),
                                o = n && n.target && n.target.src;
                            a.message = "Loading chunk " + t + " failed.\n(" + i + ": " + o + ")", a.name = "ChunkLoadError", a.type = i, a.request = o, r[1](a)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, n) => {
                var r, i, [o, a, c] = n,
                    u = 0;
                if (o.some((t => 0 !== e[t]))) {
                    for (r in a) s.o(a, r) && (s.m[r] = a[r]);
                    c && c(s)
                }
                for (t && t(n); u < o.length; u++) i = o[u], s.o(e, i) && e[i] && e[i][0](), e[i] = 0
            },
            n = globalThis.webpackChunksubmerchant_surfaces = globalThis.webpackChunksubmerchant_surfaces || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var a = {};
    (() => {
        "use strict";
        s.d(a, {
            A9: () => Si,
            jd: () => wi,
            hT: () => ki,
            Tq: () => bi,
            ix: () => gi,
            EV: () => _i
        });
        var e = {};
        s.r(e), s.d(e, {
            FunctionToString: () => We,
            InboundFilters: () => Je
        });
        var t = {};
        s.r(t), s.d(t, {
            Breadcrumbs: () => xn,
            Dedupe: () => Cn,
            GlobalHandlers: () => ln,
            LinkedErrors: () => An,
            TryCatch: () => yn,
            UserAgent: () => Ln
        }), s(15610), s(61965), s(56579), s(19978);
        var n = s(51042),
            r = function(e, t) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }, r(e, t)
            };

        function i(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }
        var o = function() {
            return o = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }, o.apply(this, arguments)
        };

        function c(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length) return {
                next: function() {
                    return e && r >= e.length && (e = void 0), {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function u(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r, i, o = n.call(e),
                s = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        }

        function l() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(u(arguments[t]));
            return e
        }
        var p = s(66149),
            d = Object.prototype.toString;

        function f(e) {
            switch (d.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    return S(e, Error)
            }
        }

        function h(e, t) {
            return d.call(e) === "[object " + t + "]"
        }

        function m(e) {
            return h(e, "ErrorEvent")
        }

        function g(e) {
            return h(e, "DOMError")
        }

        function y(e) {
            return h(e, "String")
        }

        function v(e) {
            return null === e || "object" != typeof e && "function" != typeof e
        }

        function _(e) {
            return h(e, "Object")
        }

        function b(e) {
            return "undefined" != typeof Event && S(e, Event)
        }

        function w(e) {
            return Boolean(e && e.then && "function" == typeof e.then)
        }

        function S(e, t) {
            try {
                return e instanceof t
            } catch (e) {
                return !1
            }
        }

        function x(e, t) {
            try {
                for (var n = e, r = [], i = 0, o = 0, s = " > ".length, a = void 0; n && i++ < 5 && !("html" === (a = E(n, t)) || i > 1 && o + r.length * s + a.length >= 80);) r.push(a), o += a.length, n = n.parentNode;
                return r.reverse().join(" > ")
            } catch (e) {
                return "<unknown>"
            }
        }

        function E(e, t) {
            var n, r, i, o, s, a = e,
                c = [];
            if (!a || !a.tagName) return "";
            c.push(a.tagName.toLowerCase());
            var u = t && t.length ? t.filter((function(e) {
                return a.getAttribute(e)
            })).map((function(e) {
                return [e, a.getAttribute(e)]
            })) : null;
            if (u && u.length) u.forEach((function(e) {
                c.push("[" + e[0] + '="' + e[1] + '"]')
            }));
            else if (a.id && c.push("#" + a.id), (n = a.className) && y(n))
                for (r = n.split(/\s+/), s = 0; s < r.length; s++) c.push("." + r[s]);
            var l = ["type", "name", "title", "alt"];
            for (s = 0; s < l.length; s++) i = l[s], (o = a.getAttribute(i)) && c.push("[" + i + '="' + o + '"]');
            return c.join("")
        }

        function k(e, t) {
            return void 0 === t && (t = 0), "string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "..."
        }

        function O(e, t) {
            if (!Array.isArray(e)) return "";
            for (var n = [], r = 0; r < e.length; r++) {
                var i = e[r];
                try {
                    n.push(String(i))
                } catch (e) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(t)
        }

        function I(e, t) {
            return !!y(e) && (h(t, "RegExp") ? t.test(e) : "string" == typeof t && -1 !== e.indexOf(t))
        }

        function A(e, t, n) {
            if (t in e) {
                var r = e[t],
                    i = n(r);
                if ("function" == typeof i) try {
                    R(i, r)
                } catch (e) {}
                e[t] = i
            }
        }

        function T(e, t, n) {
            Object.defineProperty(e, t, {
                value: n,
                writable: !0,
                configurable: !0
            })
        }

        function R(e, t) {
            var n = t.prototype || {};
            e.prototype = t.prototype = n, T(e, "__sentry_original__", t)
        }

        function L(e) {
            return e.__sentry_original__
        }

        function C(e) {
            var t = e;
            if (f(e)) t = o({
                message: e.message,
                name: e.name,
                stack: e.stack
            }, j(e));
            else if (b(e)) {
                var n = e;
                t = o({
                    type: n.type,
                    target: P(n.target),
                    currentTarget: P(n.currentTarget)
                }, j(n)), "undefined" != typeof CustomEvent && S(e, CustomEvent) && (t.detail = n.detail)
            }
            return t
        }

        function P(e) {
            try {
                return "undefined" != typeof Element && S(e, Element) ? x(e) : Object.prototype.toString.call(e)
            } catch (e) {
                return "<unknown>"
            }
        }

        function j(e) {
            var t = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }

        function U(e, t) {
            void 0 === t && (t = 40);
            var n = Object.keys(C(e));
            if (n.sort(), !n.length) return "[object has no keys]";
            if (n[0].length >= t) return k(n[0], t);
            for (var r = n.length; r > 0; r--) {
                var i = n.slice(0, r).join(", ");
                if (!(i.length > t)) return r === n.length ? i : k(i, t)
            }
            return ""
        }

        function M(e) {
            var t, n;
            if (_(e)) {
                var r = {};
                try {
                    for (var i = c(Object.keys(e)), o = i.next(); !o.done; o = i.next()) {
                        var s = o.value;
                        void 0 !== e[s] && (r[s] = M(e[s]))
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (n = i.return) && n.call(i)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return r
            }
            return Array.isArray(e) ? e.map(M) : e
        }

        function N() {
            var e = (0, p.R)(),
                t = e.crypto || e.msCrypto;
            if (void 0 !== t && t.getRandomValues) {
                var n = new Uint16Array(8);
                t.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                var r = function(e) {
                    for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                    return t
                };
                return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }))
        }

        function D(e) {
            if (!e) return {};
            var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!t) return {};
            var n = t[6] || "",
                r = t[8] || "";
            return {
                host: t[4],
                path: t[5],
                protocol: t[2],
                relative: t[5] + n + r
            }
        }

        function B(e) {
            return e.exception && e.exception.values ? e.exception.values[0] : void 0
        }

        function q(e) {
            var t = e.message,
                n = e.event_id;
            if (t) return t;
            var r = B(e);
            return r ? r.type && r.value ? r.type + ": " + r.value : r.type || r.value || n || "<unknown>" : n || "<unknown>"
        }

        function Z(e, t, n) {
            var r = e.exception = e.exception || {},
                i = r.values = r.values || [],
                o = i[0] = i[0] || {};
            o.value || (o.value = t || ""), o.type || (o.type = n || "Error")
        }

        function F(e, t) {
            var n = B(e);
            if (n) {
                var r = n.mechanism;
                if (n.mechanism = o(o(o({}, {
                        type: "generic",
                        handled: !0
                    }), r), t), t && "data" in t) {
                    var i = o(o({}, r && r.data), t.data);
                    n.mechanism.data = i
                }
            }
        }

        function $(e) {
            if (e && e.__sentry_captured__) return !0;
            try {
                T(e, "__sentry_captured__", !0)
            } catch (e) {}
            return !1
        }
        var z, H = s(29939),
            V = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
            K = (0, p.R)(),
            W = "Sentry Logger ",
            G = ["debug", "info", "warn", "error", "log", "assert"];

        function Y(e) {
            var t = (0, p.R)();
            if (!("console" in t)) return e();
            var n = t.console,
                r = {};
            G.forEach((function(e) {
                var i = n[e] && n[e].__sentry_original__;
                e in t.console && i && (r[e] = n[e], n[e] = i)
            }));
            try {
                return e()
            } finally {
                Object.keys(r).forEach((function(e) {
                    n[e] = r[e]
                }))
            }
        }

        function J() {
            var e = !1,
                t = {
                    enable: function() {
                        e = !0
                    },
                    disable: function() {
                        e = !1
                    }
                };
            return V ? G.forEach((function(n) {
                t[n] = function() {
                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    e && Y((function() {
                        var e;
                        (e = K.console)[n].apply(e, l([W + "[" + n + "]:"], t))
                    }))
                }
            })) : G.forEach((function(e) {
                t[e] = function() {}
            })), t
        }
        z = V ? (0, p.Y)("logger", J) : J();
        var X = s(83247),
            Q = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

        function ee(e) {
            return new ne((function(t) {
                t(e)
            }))
        }

        function te(e) {
            return new ne((function(t, n) {
                n(e)
            }))
        }
        var ne = function() {
                function e(e) {
                    var t = this;
                    this._state = 0, this._handlers = [], this._resolve = function(e) {
                        t._setResult(1, e)
                    }, this._reject = function(e) {
                        t._setResult(2, e)
                    }, this._setResult = function(e, n) {
                        0 === t._state && (w(n) ? n.then(t._resolve, t._reject) : (t._state = e, t._value = n, t._executeHandlers()))
                    }, this._executeHandlers = function() {
                        if (0 !== t._state) {
                            var e = t._handlers.slice();
                            t._handlers = [], e.forEach((function(e) {
                                e[0] || (1 === t._state && e[1](t._value), 2 === t._state && e[2](t._value), e[0] = !0)
                            }))
                        }
                    };
                    try {
                        e(this._resolve, this._reject)
                    } catch (e) {
                        this._reject(e)
                    }
                }
                return e.prototype.then = function(t, n) {
                    var r = this;
                    return new e((function(e, i) {
                        r._handlers.push([!1, function(n) {
                            if (t) try {
                                e(t(n))
                            } catch (e) {
                                i(e)
                            } else e(n)
                        }, function(t) {
                            if (n) try {
                                e(n(t))
                            } catch (e) {
                                i(e)
                            } else i(t)
                        }]), r._executeHandlers()
                    }))
                }, e.prototype.catch = function(e) {
                    return this.then((function(e) {
                        return e
                    }), e)
                }, e.prototype.finally = function(t) {
                    var n = this;
                    return new e((function(e, r) {
                        var i, o;
                        return n.then((function(e) {
                            o = !1, i = e, t && t()
                        }), (function(e) {
                            o = !0, i = e, t && t()
                        })).then((function() {
                            o ? r(i) : e(i)
                        }))
                    }))
                }, e
            }(),
            re = function() {
                function e() {
                    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}
                }
                return e.clone = function(t) {
                    var n = new e;
                    return t && (n._breadcrumbs = l(t._breadcrumbs), n._tags = o({}, t._tags), n._extra = o({}, t._extra), n._contexts = o({}, t._contexts), n._user = t._user, n._level = t._level, n._span = t._span, n._session = t._session, n._transactionName = t._transactionName, n._fingerprint = t._fingerprint, n._eventProcessors = l(t._eventProcessors), n._requestSession = t._requestSession), n
                }, e.prototype.addScopeListener = function(e) {
                    this._scopeListeners.push(e)
                }, e.prototype.addEventProcessor = function(e) {
                    return this._eventProcessors.push(e), this
                }, e.prototype.setUser = function(e) {
                    return this._user = e || {}, this._session && this._session.update({
                        user: e
                    }), this._notifyScopeListeners(), this
                }, e.prototype.getUser = function() {
                    return this._user
                }, e.prototype.getRequestSession = function() {
                    return this._requestSession
                }, e.prototype.setRequestSession = function(e) {
                    return this._requestSession = e, this
                }, e.prototype.setTags = function(e) {
                    return this._tags = o(o({}, this._tags), e), this._notifyScopeListeners(), this
                }, e.prototype.setTag = function(e, t) {
                    var n;
                    return this._tags = o(o({}, this._tags), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
                }, e.prototype.setExtras = function(e) {
                    return this._extra = o(o({}, this._extra), e), this._notifyScopeListeners(), this
                }, e.prototype.setExtra = function(e, t) {
                    var n;
                    return this._extra = o(o({}, this._extra), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
                }, e.prototype.setFingerprint = function(e) {
                    return this._fingerprint = e, this._notifyScopeListeners(), this
                }, e.prototype.setLevel = function(e) {
                    return this._level = e, this._notifyScopeListeners(), this
                }, e.prototype.setTransactionName = function(e) {
                    return this._transactionName = e, this._notifyScopeListeners(), this
                }, e.prototype.setTransaction = function(e) {
                    return this.setTransactionName(e)
                }, e.prototype.setContext = function(e, t) {
                    var n;
                    return null === t ? delete this._contexts[e] : this._contexts = o(o({}, this._contexts), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
                }, e.prototype.setSpan = function(e) {
                    return this._span = e, this._notifyScopeListeners(), this
                }, e.prototype.getSpan = function() {
                    return this._span
                }, e.prototype.getTransaction = function() {
                    var e = this.getSpan();
                    return e && e.transaction
                }, e.prototype.setSession = function(e) {
                    return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
                }, e.prototype.getSession = function() {
                    return this._session
                }, e.prototype.update = function(t) {
                    if (!t) return this;
                    if ("function" == typeof t) {
                        var n = t(this);
                        return n instanceof e ? n : this
                    }
                    return t instanceof e ? (this._tags = o(o({}, this._tags), t._tags), this._extra = o(o({}, this._extra), t._extra), this._contexts = o(o({}, this._contexts), t._contexts), t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession)) : _(t) && (this._tags = o(o({}, this._tags), t.tags), this._extra = o(o({}, this._extra), t.extra), this._contexts = o(o({}, this._contexts), t.contexts), t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint), t.requestSession && (this._requestSession = t.requestSession)), this
                }, e.prototype.clear = function() {
                    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this
                }, e.prototype.addBreadcrumb = function(e, t) {
                    var n = "number" == typeof t ? Math.min(t, 100) : 100;
                    if (n <= 0) return this;
                    var r = o({
                        timestamp: (0, H.yW)()
                    }, e);
                    return this._breadcrumbs = l(this._breadcrumbs, [r]).slice(-n), this._notifyScopeListeners(), this
                }, e.prototype.clearBreadcrumbs = function() {
                    return this._breadcrumbs = [], this._notifyScopeListeners(), this
                }, e.prototype.applyToEvent = function(e, t) {
                    if (this._extra && Object.keys(this._extra).length && (e.extra = o(o({}, this._extra), e.extra)), this._tags && Object.keys(this._tags).length && (e.tags = o(o({}, this._tags), e.tags)), this._user && Object.keys(this._user).length && (e.user = o(o({}, this._user), e.user)), this._contexts && Object.keys(this._contexts).length && (e.contexts = o(o({}, this._contexts), e.contexts)), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
                        e.contexts = o({
                            trace: this._span.getTraceContext()
                        }, e.contexts);
                        var n = this._span.transaction && this._span.transaction.name;
                        n && (e.tags = o({
                            transaction: n
                        }, e.tags))
                    }
                    return this._applyFingerprint(e), e.breadcrumbs = l(e.breadcrumbs || [], this._breadcrumbs), e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, e.sdkProcessingMetadata = this._sdkProcessingMetadata, this._notifyEventProcessors(l(ie(), this._eventProcessors), e, t)
                }, e.prototype.setSDKProcessingMetadata = function(e) {
                    return this._sdkProcessingMetadata = o(o({}, this._sdkProcessingMetadata), e), this
                }, e.prototype._notifyEventProcessors = function(e, t, n, r) {
                    var i = this;
                    return void 0 === r && (r = 0), new ne((function(s, a) {
                        var c = e[r];
                        if (null === t || "function" != typeof c) s(t);
                        else {
                            var u = c(o({}, t), n);
                            w(u) ? u.then((function(t) {
                                return i._notifyEventProcessors(e, t, n, r + 1).then(s)
                            })).then(null, a) : i._notifyEventProcessors(e, u, n, r + 1).then(s).then(null, a)
                        }
                    }))
                }, e.prototype._notifyScopeListeners = function() {
                    var e = this;
                    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function(t) {
                        t(e)
                    })), this._notifyingListeners = !1)
                }, e.prototype._applyFingerprint = function(e) {
                    e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
                }, e
            }();

        function ie() {
            return (0, p.Y)("globalEventProcessors", (function() {
                return []
            }))
        }

        function oe(e) {
            ie().push(e)
        }
        var se = function() {
                function e(e) {
                    this.errors = 0, this.sid = N(), this.duration = 0, this.status = "ok", this.init = !0, this.ignoreDuration = !1;
                    var t = (0, H.ph)();
                    this.timestamp = t, this.started = t, e && this.update(e)
                }
                return e.prototype.update = function(e) {
                    if (void 0 === e && (e = {}), e.user && (!this.ipAddress && e.user.ip_address && (this.ipAddress = e.user.ip_address), this.did || e.did || (this.did = e.user.id || e.user.email || e.user.username)), this.timestamp = e.timestamp || (0, H.ph)(), e.ignoreDuration && (this.ignoreDuration = e.ignoreDuration), e.sid && (this.sid = 32 === e.sid.length ? e.sid : N()), void 0 !== e.init && (this.init = e.init), !this.did && e.did && (this.did = "" + e.did), "number" == typeof e.started && (this.started = e.started), this.ignoreDuration) this.duration = void 0;
                    else if ("number" == typeof e.duration) this.duration = e.duration;
                    else {
                        var t = this.timestamp - this.started;
                        this.duration = t >= 0 ? t : 0
                    }
                    e.release && (this.release = e.release), e.environment && (this.environment = e.environment), !this.ipAddress && e.ipAddress && (this.ipAddress = e.ipAddress), !this.userAgent && e.userAgent && (this.userAgent = e.userAgent), "number" == typeof e.errors && (this.errors = e.errors), e.status && (this.status = e.status)
                }, e.prototype.close = function(e) {
                    e ? this.update({
                        status: e
                    }) : "ok" === this.status ? this.update({
                        status: "exited"
                    }) : this.update()
                }, e.prototype.toJSON = function() {
                    return M({
                        sid: "" + this.sid,
                        init: this.init,
                        started: new Date(1e3 * this.started).toISOString(),
                        timestamp: new Date(1e3 * this.timestamp).toISOString(),
                        status: this.status,
                        errors: this.errors,
                        did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                        duration: this.duration,
                        attrs: {
                            release: this.release,
                            environment: this.environment,
                            ip_address: this.ipAddress,
                            user_agent: this.userAgent
                        }
                    })
                }, e
            }(),
            ae = function() {
                function e(e, t, n) {
                    void 0 === t && (t = new re), void 0 === n && (n = 4), this._version = n, this._stack = [{}], this.getStackTop().scope = t, e && this.bindClient(e)
                }
                return e.prototype.isOlderThan = function(e) {
                    return this._version < e
                }, e.prototype.bindClient = function(e) {
                    this.getStackTop().client = e, e && e.setupIntegrations && e.setupIntegrations()
                }, e.prototype.pushScope = function() {
                    var e = re.clone(this.getScope());
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: e
                    }), e
                }, e.prototype.popScope = function() {
                    return !(this.getStack().length <= 1 || !this.getStack().pop())
                }, e.prototype.withScope = function(e) {
                    var t = this.pushScope();
                    try {
                        e(t)
                    } finally {
                        this.popScope()
                    }
                }, e.prototype.getClient = function() {
                    return this.getStackTop().client
                }, e.prototype.getScope = function() {
                    return this.getStackTop().scope
                }, e.prototype.getStack = function() {
                    return this._stack
                }, e.prototype.getStackTop = function() {
                    return this._stack[this._stack.length - 1]
                }, e.prototype.captureException = function(e, t) {
                    var n = this._lastEventId = t && t.event_id ? t.event_id : N(),
                        r = t;
                    if (!t) {
                        var i = void 0;
                        try {
                            throw new Error("Sentry syntheticException")
                        } catch (e) {
                            i = e
                        }
                        r = {
                            originalException: e,
                            syntheticException: i
                        }
                    }
                    return this._invokeClient("captureException", e, o(o({}, r), {
                        event_id: n
                    })), n
                }, e.prototype.captureMessage = function(e, t, n) {
                    var r = this._lastEventId = n && n.event_id ? n.event_id : N(),
                        i = n;
                    if (!n) {
                        var s = void 0;
                        try {
                            throw new Error(e)
                        } catch (e) {
                            s = e
                        }
                        i = {
                            originalException: e,
                            syntheticException: s
                        }
                    }
                    return this._invokeClient("captureMessage", e, t, o(o({}, i), {
                        event_id: r
                    })), r
                }, e.prototype.captureEvent = function(e, t) {
                    var n = t && t.event_id ? t.event_id : N();
                    return "transaction" !== e.type && (this._lastEventId = n), this._invokeClient("captureEvent", e, o(o({}, t), {
                        event_id: n
                    })), n
                }, e.prototype.lastEventId = function() {
                    return this._lastEventId
                }, e.prototype.addBreadcrumb = function(e, t) {
                    var n = this.getStackTop(),
                        r = n.scope,
                        i = n.client;
                    if (r && i) {
                        var s = i.getOptions && i.getOptions() || {},
                            a = s.beforeBreadcrumb,
                            c = void 0 === a ? null : a,
                            u = s.maxBreadcrumbs,
                            l = void 0 === u ? 100 : u;
                        if (!(l <= 0)) {
                            var p = (0, H.yW)(),
                                d = o({
                                    timestamp: p
                                }, e),
                                f = c ? Y((function() {
                                    return c(d, t)
                                })) : d;
                            null !== f && r.addBreadcrumb(f, l)
                        }
                    }
                }, e.prototype.setUser = function(e) {
                    var t = this.getScope();
                    t && t.setUser(e)
                }, e.prototype.setTags = function(e) {
                    var t = this.getScope();
                    t && t.setTags(e)
                }, e.prototype.setExtras = function(e) {
                    var t = this.getScope();
                    t && t.setExtras(e)
                }, e.prototype.setTag = function(e, t) {
                    var n = this.getScope();
                    n && n.setTag(e, t)
                }, e.prototype.setExtra = function(e, t) {
                    var n = this.getScope();
                    n && n.setExtra(e, t)
                }, e.prototype.setContext = function(e, t) {
                    var n = this.getScope();
                    n && n.setContext(e, t)
                }, e.prototype.configureScope = function(e) {
                    var t = this.getStackTop(),
                        n = t.scope,
                        r = t.client;
                    n && r && e(n)
                }, e.prototype.run = function(e) {
                    var t = ue(this);
                    try {
                        e(this)
                    } finally {
                        ue(t)
                    }
                }, e.prototype.getIntegration = function(e) {
                    var t = this.getClient();
                    if (!t) return null;
                    try {
                        return t.getIntegration(e)
                    } catch (t) {
                        return Q && z.warn("Cannot retrieve integration " + e.id + " from the current Hub"), null
                    }
                }, e.prototype.startSpan = function(e) {
                    return this._callExtensionMethod("startSpan", e)
                }, e.prototype.startTransaction = function(e, t) {
                    return this._callExtensionMethod("startTransaction", e, t)
                }, e.prototype.traceHeaders = function() {
                    return this._callExtensionMethod("traceHeaders")
                }, e.prototype.captureSession = function(e) {
                    if (void 0 === e && (e = !1), e) return this.endSession();
                    this._sendSessionUpdate()
                }, e.prototype.endSession = function() {
                    var e = this.getStackTop(),
                        t = e && e.scope,
                        n = t && t.getSession();
                    n && n.close(), this._sendSessionUpdate(), t && t.setSession()
                }, e.prototype.startSession = function(e) {
                    var t = this.getStackTop(),
                        n = t.scope,
                        r = t.client,
                        i = r && r.getOptions() || {},
                        s = i.release,
                        a = i.environment,
                        c = ((0, p.R)().navigator || {}).userAgent,
                        u = new se(o(o(o({
                            release: s,
                            environment: a
                        }, n && {
                            user: n.getUser()
                        }), c && {
                            userAgent: c
                        }), e));
                    if (n) {
                        var l = n.getSession && n.getSession();
                        l && "ok" === l.status && l.update({
                            status: "exited"
                        }), this.endSession(), n.setSession(u)
                    }
                    return u
                }, e.prototype._sendSessionUpdate = function() {
                    var e = this.getStackTop(),
                        t = e.scope,
                        n = e.client;
                    if (t) {
                        var r = t.getSession && t.getSession();
                        r && n && n.captureSession && n.captureSession(r)
                    }
                }, e.prototype._invokeClient = function(e) {
                    for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                    var i = this.getStackTop(),
                        o = i.scope,
                        s = i.client;
                    s && s[e] && (t = s)[e].apply(t, l(n, [o]))
                }, e.prototype._callExtensionMethod = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    var r = ce(),
                        i = r.__SENTRY__;
                    if (i && i.extensions && "function" == typeof i.extensions[e]) return i.extensions[e].apply(this, t);
                    Q && z.warn("Extension method " + e + " couldn't be found, doing nothing.")
                }, e
            }();

        function ce() {
            var e = (0, p.R)();
            return e.__SENTRY__ = e.__SENTRY__ || {
                extensions: {},
                hub: void 0
            }, e
        }

        function ue(e) {
            var t = ce(),
                n = de(t);
            return fe(t, e), n
        }

        function le() {
            var e = ce();
            return pe(e) && !de(e).isOlderThan(4) || fe(e, new ae), (0, X.KV)() ? function(e) {
                try {
                    var t = ce().__SENTRY__,
                        n = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
                    if (!n) return de(e);
                    if (!pe(n) || de(n).isOlderThan(4)) {
                        var r = de(e).getStackTop();
                        fe(n, new ae(r.client, re.clone(r.scope)))
                    }
                    return de(n)
                } catch (t) {
                    return de(e)
                }
            }(e) : de(e)
        }

        function pe(e) {
            return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
        }

        function de(e) {
            return (0, p.Y)("hub", (function() {
                return new ae
            }), e)
        }

        function fe(e, t) {
            return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t, !0)
        }

        function he(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = le();
            if (r && r[e]) return r[e].apply(r, l(t));
            throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
        }

        function me(e, t) {
            return he("captureException", e, {
                captureContext: t,
                originalException: e,
                syntheticException: new Error("Sentry syntheticException")
            })
        }

        function ge(e) {
            he("withScope", e)
        }
        var ye = s(2293),
            ve = s(8250);
        const _e = {
            initClient: ve.Z.initClient.bind(ve.Z),
            initServer: ve.Z.initServer.bind(ve.Z)
        };
        var be = s(14193),
            we = s(13662);
        const Se = "stripeconnectjs",
            xe = e => !(!e || "object" != typeof e || e.type !== Se || "string" != typeof e.requestType);
        var Ee = s(4781),
            ke = s(53716),
            Oe = s(2125),
            Ie = s(54809),
            Ae = (s(17929), s(44578));
        `00${Math.floor(1e3*Math.random())}`.slice(-3);
        const Te = "disableAnalytics";
        var Re = s(5837),
            Le = s(52955);
        let Ce;
        const Pe = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie.X,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            const n = new URL((0, ye.tj)()),
                r = (0, Ae.g)(n);
            if (t && r) return !0;
            const i = (0, Le.Q)(),
                o = "true" === i.get(Te);
            if (o && r) return !0;
            const s = !e || !!"MISSING_ENV_VAR".ENABLE_ANALYTICS_IN_DEV;
            if (!s) return !0;
            const a = (0, Re.j)(),
                c = Object.keys(a).length > 0;
            return !!c
        };

        function je() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie.X,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
            return void 0 !== Ce || (Ce = Pe(e, t)), Ce
        }

        function Ue() {
            var e;
            return null !== (e = (0, Le.Q)().get("pageViewId")) && void 0 !== e ? e : void 0
        }
        var Me = s(3083);
        const Ne = {};
        Me.ce.forEach((e => {
            Ne[e] = !0
        }));
        const De = {
            connectElement: !0,
            api_result: !0,
            queryKey: !0,
            livemode: !0,
            duration: !0,
            platform_id: !0,
            connected_account_id: !0,
            stripe_email_id: !0,
            stripe_target_component: !0,
            connectionEffectiveType: !0,
            initializationPattern: !0,
            platformHostName: !0,
            connectJsPath: !0,
            type: !0,
            htmlAttributes: !0,
            loadedFontFamilies: !0,
            browserSecureContext: !0,
            platformOrigin: !0,
            specifiedFontFamiliesCount: !0,
            release: !0,
            api_response_code: !0,
            api_request_url: !0,
            api_request_method: !0,
            component: !0,
            networkDuration: !0,
            operationDeduplicated: !0,
            page: !0,
            runtime_overhead: !0,
            operation_name: !0,
            attemptedLocale: !0,
            matchedLocale: !0,
            localeSource: !0,
            localeMatch: !0,
            connectJsOptions: !0,
            optimizedLoading: !0,
            hostApp: !0,
            url: !0,
            serviceAgreement: !0,
            stripeRequestId: !0,
            stripeErrorRawType: !0,
            stripeStatusCode: !0,
            stripeStatusCodeRange: !0,
            stripeErrorCode: !0,
            stripeErrorMessage: !0,
            teamName: !0,
            error_message: !0,
            error_stack: !0,
            component_stack: !0,
            service: !0,
            project: !0,
            errorCode: !0,
            errorMessage: !0,
            errorPath: !0,
            errorExpected: !0,
            errorMuted: !0,
            errorSource: !0,
            operationDeduplicate: !0,
            operationName: !0,
            operationPrefetch: !0,
            networkActionId: !0,
            networkRequestId: !0,
            networkTraceId: !0,
            networkStatus: !0,
            version: !0,
            setter: !0,
            typeOfValue: !0,
            jsonStringifiedValue: !0,
            _tdr_id: !0,
            sdk: !0,
            sdkVersion: !0,
            reactSdkVersion: !0,
            mobileSdk: !0,
            mobileSdkVersion: !0,
            mobileSdkBundleAppId: !0,
            mobileSdkDurableFlow: !0,
            inheritedFontFamily: !0,
            fontCount: !0,
            fontLoadTime: !0,
            fontCssSrc: !0,
            fontSrc: !0,
            platformLoadedFont: !0,
            iframeLoadedFont: !0,
            availableInIframe: !0,
            account_id: !0,
            payout_setting_schedule_preference: !0,
            payout_setting_schedule_interval: !0,
            payoutMethod: !0,
            payout_id: !0,
            layoutMode: !0,
            linkingScenario: !0,
            sdk_version: !0,
            app_id: !0,
            app_version: !0,
            platform: !0,
            app_channel: !0,
            component_name: !0,
            tracked_props: !0,
            ark_version: !0,
            id: !0,
            file_id: !0,
            person_id: !0,
            entity_token: !0,
            object_id: !0,
            request_id: !0,
            error: !0,
            error_codes: !0,
            validation_errors: !0,
            previous_validation_errors: !0,
            error_expected: !0,
            error_path: !0,
            error_muted: !0,
            network_action_id: !0,
            network_duration: !0,
            network_request_id: !0,
            network_status: !0,
            network_trace_id: !0,
            operation_deduplicate: !0,
            operation_prefetch: !0,
            operation_prefetch_hit: !0,
            country: !0,
            capabilities: !0,
            business_type: !0,
            business_structure: !0,
            company_structure: !0,
            industry: !0,
            tos: !0,
            requirements: !0,
            outstanding_requirements: !0,
            section_outstanding_requirements: !0,
            connected_merchant: !0,
            client_application_id: !0,
            terms_of_service: !0,
            unsupportedRequirements: !0,
            hasStandardDashboardAccess: !0,
            hasExpressDashboardAccess: !0,
            stripeOwnsLossLiability: !0,
            stripeOwnsPricing: !0,
            stripeOwnsOnboarding: !0,
            previous_composition_name: !0,
            composition_name: !0,
            composition_path: !0,
            section_name: !0,
            section_view: !0,
            flow: !0,
            step: !0,
            externalStepName: !0,
            can_proceed: !0,
            is_mobile: !0,
            flow_intent: !0,
            flow_satisfaction_criteria: !0,
            collect_future_requirements: !0,
            api: !0,
            frontend: !0,
            ark_fields: !0,
            current_requirements: !0,
            current_future_requirements: !0,
            form_id: !0,
            field: !0,
            field_name: !0,
            selected_document_type: !0,
            upload_source: !0,
            blur_score: !0,
            darkness_score: !0,
            blur_time_millis: !0,
            darkness_time_millis: !0,
            is_auto_request_afterpay_capab_enabled: !0,
            is_auto_request_affirm_capab_enabled: !0,
            is_auto_request_link_capab_enabled: !0,
            is_auto_request_us_bank_account_capab_enabled: !0,
            is_auto_request_cashapp_capab_enabled: !0,
            is_auto_request_apple_pay_later_capab_enabled: !0,
            experiment_retrieved: !0,
            experiment_treatment_group: !0,
            is_in_preloaded: !0,
            experiment_checked_by: !0,
            dashboard_type: !0,
            bank_account_form_initial_country: !0,
            bank_account_form_type: !0,
            bank_account_form_use_case: !0,
            external_account_form_use_case: !0,
            external_account_currency: !0,
            external_account_country: !0,
            merchant_default_currency: !0,
            verification_status: !0,
            verification_status_count: !0,
            verification_previously_failed: !0,
            synchronous_verification_enabled: !0,
            original: !0,
            new: !0,
            difference: !0,
            ...Ne
        };
        class Be {
            constructor() {
                const {
                    serviceEnvironment: e
                } = (0, Oe.r9)();
                this.analyticsClient = new ke.PF({
                    stripeCookiesEnforcementMode: "restricted",
                    inProduction: "prod" === e && !Ie.X,
                    clientId: "connect-js",
                    useCookies: "disabled",
                    safeParams: De,
                    pageviewtoken: Ue()
                })
            }
            track(e, t) {
                je() || this.analyticsClient.track(e, this.paramsWithAuthMetadata(t))
            }
            viewed(e, t) {
                je() || this.analyticsClient.viewed(e, this.paramsWithAuthMetadata(t))
            }
            action(e, t) {
                je() || this.analyticsClient.action(e, this.paramsWithAuthMetadata(t))
            }
            link(e, t) {
                je() || this.analyticsClient.link(e, this.paramsWithAuthMetadata(t))
            }
            modal(e, t) {
                je() || this.analyticsClient.modal(e, this.paramsWithAuthMetadata(t))
            }
            processEvent(e) {
                switch (e.type) {
                    case "viewed":
                        this.viewed(e.id, e.params);
                        break;
                    case "action":
                        this.action(e.id, e.params);
                        break;
                    case "track":
                        this.track(e.id, e.params);
                        break;
                    case "modal":
                        this.modal(e.id, e.params);
                        break;
                    case "link":
                        this.link(e.id, e.params);
                        break;
                    default:
                        (0, we.U)(e.type, "Unknown analytics event received")
                }
            }
            paramsWithAuthMetadata(e) {
                return Object.assign({}, this.observabilityAuthMetadata, e)
            }
        }
        var qe, Ze, Fe;
        qe = Be, Ze = "instance", Fe = new Be, Ze in qe ? Object.defineProperty(qe, Ze, {
            value: Fe,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : qe[Ze] = Fe;
        const $e = new(s(31760).Z)({
            project: "accounts_ui",
            service: "connect-js",
            pageViewToken: Ue(),
            analytics: {
                disabled: je(),
                disableCookies: !0,
                parametersAllowList: Object.keys(De),
                useLegacyEndpoint: !0
            },
            _tmp_dualReporting: !1,
            _internal_observability: {
                analytics: {
                    action(e, t, n) {
                        Be.instance.action(t, n)
                    },
                    link(e, t, n) {
                        Be.instance.link(t, n)
                    },
                    modal(e, t, n) {
                        Be.instance.modal(t, n)
                    },
                    track(e, t, n) {
                        Be.instance.track(t, n)
                    },
                    viewed(e, t, n) {
                        Be.instance.viewed(t, n)
                    }
                }
            }
        });
        let ze;
        const He = {
            action(e, t) {
                $e.action(e, Object.assign({}, ze, t))
            },
            link(e, t) {
                $e.link(e, Object.assign({}, ze, t))
            },
            track(e, t) {
                $e.track(e, Object.assign({}, ze, t))
            },
            viewed(e, t) {
                $e.viewed(e, Object.assign({}, ze, t))
            },
            modal(e, t) {
                $e.modal(e, Object.assign({}, ze, t))
            }
        };
        s(51027);
        var Ve, Ke, We = function() {
                function e() {
                    this.name = e.id
                }
                return e.prototype.setupOnce = function() {
                    Ve = Function.prototype.toString, Function.prototype.toString = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = L(this) || this;
                        return Ve.apply(n, e)
                    }
                }, e.id = "FunctionToString", e
            }(),
            Ge = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
            Ye = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
            Je = function() {
                function e(t) {
                    void 0 === t && (t = {}), this._options = t, this.name = e.id
                }
                return e.prototype.setupOnce = function(t, n) {
                    t((function(t) {
                        var r = n();
                        if (r) {
                            var i = r.getIntegration(e);
                            if (i) {
                                var o = r.getClient(),
                                    s = o ? o.getOptions() : {},
                                    a = function(e, t) {
                                        return void 0 === e && (e = {}), void 0 === t && (t = {}), {
                                            allowUrls: l(e.whitelistUrls || [], e.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
                                            denyUrls: l(e.blacklistUrls || [], e.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
                                            ignoreErrors: l(e.ignoreErrors || [], t.ignoreErrors || [], Ye),
                                            ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                                        }
                                    }(i._options, s);
                                return function(e, t) {
                                    return t.ignoreInternal && function(e) {
                                        try {
                                            return "SentryError" === e.exception.values[0].type
                                        } catch (e) {}
                                        return !1
                                    }(e) ? (Ge && z.warn("Event dropped due to being internal Sentry Error.\nEvent: " + q(e)), !0) : function(e, t) {
                                        return !(!t || !t.length) && function(e) {
                                            if (e.message) return [e.message];
                                            if (e.exception) try {
                                                var t = e.exception.values && e.exception.values[0] || {},
                                                    n = t.type,
                                                    r = void 0 === n ? "" : n,
                                                    i = t.value,
                                                    o = void 0 === i ? "" : i;
                                                return ["" + o, r + ": " + o]
                                            } catch (t) {
                                                return Ge && z.error("Cannot extract message for event " + q(e)), []
                                            }
                                            return []
                                        }(e).some((function(e) {
                                            return t.some((function(t) {
                                                return I(e, t)
                                            }))
                                        }))
                                    }(e, t.ignoreErrors) ? (Ge && z.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + q(e)), !0) : function(e, t) {
                                        if (!t || !t.length) return !1;
                                        var n = Qe(e);
                                        return !!n && t.some((function(e) {
                                            return I(n, e)
                                        }))
                                    }(e, t.denyUrls) ? (Ge && z.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + q(e) + ".\nUrl: " + Qe(e)), !0) : ! function(e, t) {
                                        if (!t || !t.length) return !0;
                                        var n = Qe(e);
                                        return !n || t.some((function(e) {
                                            return I(n, e)
                                        }))
                                    }(e, t.allowUrls) && (Ge && z.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + q(e) + ".\nUrl: " + Qe(e)), !0)
                                }(t, a) ? null : t
                            }
                        }
                        return t
                    }))
                }, e.id = "InboundFilters", e
            }();

        function Xe(e) {
            void 0 === e && (e = []);
            for (var t = e.length - 1; t >= 0; t--) {
                var n = e[t];
                if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
            }
            return null
        }

        function Qe(e) {
            try {
                if (e.stacktrace) return Xe(e.stacktrace.frames);
                var t;
                try {
                    t = e.exception.values[0].stacktrace.frames
                } catch (e) {}
                return t ? Xe(t) : null
            } catch (t) {
                return Ge && z.error("Cannot extract url for event " + q(e)), null
            }
        }

        function et(e) {
            if (!e.length) return [];
            var t = e,
                n = t[0].function || "",
                r = t[t.length - 1].function || "";
            return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (t = t.slice(1)), -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)), t.slice(0, 50).map((function(e) {
                return o(o({}, e), {
                    filename: e.filename || t[0].filename,
                    function: e.function || "?"
                })
            })).reverse()
        }! function(e) {
            e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", e.Debug = "debug", e.Critical = "critical"
        }(Ke || (Ke = {}));
        var tt = "<anonymous>";

        function nt(e) {
            try {
                return e && "function" == typeof e && e.name || tt
            } catch (e) {
                return tt
            }
        }

        function rt() {
            if (!("fetch" in (0, p.R)())) return !1;
            try {
                return new Headers, new Request(""), new Response, !0
            } catch (e) {
                return !1
            }
        }

        function it(e) {
            return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
        }

        function ot() {
            if (!rt()) return !1;
            try {
                return new Request("_", {
                    referrerPolicy: "origin"
                }), !0
            } catch (e) {
                return !1
            }
        }
        var st, at, ct, ut = (0, p.R)(),
            lt = {},
            pt = {};

        function dt(e, t) {
            lt[e] = lt[e] || [], lt[e].push(t),
                function(e) {
                    if (!pt[e]) switch (pt[e] = !0, e) {
                        case "console":
                            "console" in ut && G.forEach((function(e) {
                                e in ut.console && A(ut.console, e, (function(t) {
                                    return function() {
                                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                        ft("console", {
                                            args: n,
                                            level: e
                                        }), t && t.apply(ut.console, n)
                                    }
                                }))
                            }));
                            break;
                        case "dom":
                            ! function() {
                                if ("document" in ut) {
                                    var e = ft.bind(null, "dom"),
                                        t = gt(e, !0);
                                    ut.document.addEventListener("click", t, !1), ut.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((function(t) {
                                        var n = ut[t] && ut[t].prototype;
                                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (A(n, "addEventListener", (function(t) {
                                            return function(n, r, i) {
                                                if ("click" === n || "keypress" == n) try {
                                                    var o = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                                                        s = o[n] = o[n] || {
                                                            refCount: 0
                                                        };
                                                    if (!s.handler) {
                                                        var a = gt(e);
                                                        s.handler = a, t.call(this, n, a, i)
                                                    }
                                                    s.refCount += 1
                                                } catch (e) {}
                                                return t.call(this, n, r, i)
                                            }
                                        })), A(n, "removeEventListener", (function(e) {
                                            return function(t, n, r) {
                                                if ("click" === t || "keypress" == t) try {
                                                    var i = this.__sentry_instrumentation_handlers__ || {},
                                                        o = i[t];
                                                    o && (o.refCount -= 1, o.refCount <= 0 && (e.call(this, t, o.handler, r), o.handler = void 0, delete i[t]), 0 === Object.keys(i).length && delete this.__sentry_instrumentation_handlers__)
                                                } catch (e) {}
                                                return e.call(this, t, n, r)
                                            }
                                        })))
                                    }))
                                }
                            }();
                            break;
                        case "xhr":
                            ! function() {
                                if ("XMLHttpRequest" in ut) {
                                    var e = XMLHttpRequest.prototype;
                                    A(e, "open", (function(e) {
                                        return function() {
                                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                            var r = this,
                                                i = t[1],
                                                o = r.__sentry_xhr__ = {
                                                    method: y(t[0]) ? t[0].toUpperCase() : t[0],
                                                    url: t[1]
                                                };
                                            y(i) && "POST" === o.method && i.match(/sentry_key/) && (r.__sentry_own_request__ = !0);
                                            var s = function() {
                                                if (4 === r.readyState) {
                                                    try {
                                                        o.status_code = r.status
                                                    } catch (e) {}
                                                    ft("xhr", {
                                                        args: t,
                                                        endTimestamp: Date.now(),
                                                        startTimestamp: Date.now(),
                                                        xhr: r
                                                    })
                                                }
                                            };
                                            return "onreadystatechange" in r && "function" == typeof r.onreadystatechange ? A(r, "onreadystatechange", (function(e) {
                                                return function() {
                                                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                                    return s(), e.apply(r, t)
                                                }
                                            })) : r.addEventListener("readystatechange", s), e.apply(r, t)
                                        }
                                    })), A(e, "send", (function(e) {
                                        return function() {
                                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                            return this.__sentry_xhr__ && void 0 !== t[0] && (this.__sentry_xhr__.body = t[0]), ft("xhr", {
                                                args: t,
                                                startTimestamp: Date.now(),
                                                xhr: this
                                            }), e.apply(this, t)
                                        }
                                    }))
                                }
                            }();
                            break;
                        case "fetch":
                            (function() {
                                if (!rt()) return !1;
                                var e = (0, p.R)();
                                if (it(e.fetch)) return !0;
                                var t = !1,
                                    n = e.document;
                                if (n && "function" == typeof n.createElement) try {
                                    var r = n.createElement("iframe");
                                    r.hidden = !0, n.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = it(r.contentWindow.fetch)), n.head.removeChild(r)
                                } catch (e) {
                                    V && z.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                                }
                                return t
                            })() && A(ut, "fetch", (function(e) {
                                return function() {
                                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                    var r = {
                                        args: t,
                                        fetchData: {
                                            method: ht(t),
                                            url: mt(t)
                                        },
                                        startTimestamp: Date.now()
                                    };
                                    return ft("fetch", o({}, r)), e.apply(ut, t).then((function(e) {
                                        return ft("fetch", o(o({}, r), {
                                            endTimestamp: Date.now(),
                                            response: e
                                        })), e
                                    }), (function(e) {
                                        throw ft("fetch", o(o({}, r), {
                                            endTimestamp: Date.now(),
                                            error: e
                                        })), e
                                    }))
                                }
                            }));
                            break;
                        case "history":
                            ! function() {
                                if (function() {
                                        var e = (0, p.R)(),
                                            t = e.chrome,
                                            n = t && t.app && t.app.runtime,
                                            r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
                                        return !n && r
                                    }()) {
                                    var e = ut.onpopstate;
                                    ut.onpopstate = function() {
                                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                        var r = ut.location.href,
                                            i = st;
                                        if (st = r, ft("history", {
                                                from: i,
                                                to: r
                                            }), e) try {
                                            return e.apply(this, t)
                                        } catch (e) {}
                                    }, A(ut.history, "pushState", t), A(ut.history, "replaceState", t)
                                }

                                function t(e) {
                                    return function() {
                                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                        var r = t.length > 2 ? t[2] : void 0;
                                        if (r) {
                                            var i = st,
                                                o = String(r);
                                            st = o, ft("history", {
                                                from: i,
                                                to: o
                                            })
                                        }
                                        return e.apply(this, t)
                                    }
                                }
                            }();
                            break;
                        case "error":
                            yt = ut.onerror, ut.onerror = function(e, t, n, r, i) {
                                return ft("error", {
                                    column: r,
                                    error: i,
                                    line: n,
                                    msg: e,
                                    url: t
                                }), !!yt && yt.apply(this, arguments)
                            };
                            break;
                        case "unhandledrejection":
                            vt = ut.onunhandledrejection, ut.onunhandledrejection = function(e) {
                                return ft("unhandledrejection", e), !vt || vt.apply(this, arguments)
                            };
                            break;
                        default:
                            V && z.warn("unknown instrumentation type:", e)
                    }
                }(e)
        }

        function ft(e, t) {
            var n, r;
            if (e && lt[e]) try {
                for (var i = c(lt[e] || []), o = i.next(); !o.done; o = i.next()) {
                    var s = o.value;
                    try {
                        s(t)
                    } catch (t) {
                        V && z.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + nt(s) + "\nError:", t)
                    }
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i)
                } finally {
                    if (n) throw n.error
                }
            }
        }

        function ht(e) {
            return void 0 === e && (e = []), "Request" in ut && S(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
        }

        function mt(e) {
            return void 0 === e && (e = []), "string" == typeof e[0] ? e[0] : "Request" in ut && S(e[0], Request) ? e[0].url : String(e[0])
        }

        function gt(e, t) {
            return void 0 === t && (t = !1),
                function(n) {
                    if (n && ct !== n && ! function(e) {
                            if ("keypress" !== e.type) return !1;
                            try {
                                var t = e.target;
                                if (!t || !t.tagName) return !0;
                                if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) return !1
                            } catch (e) {}
                            return !0
                        }(n)) {
                        var r = "keypress" === n.type ? "input" : n.type;
                        (void 0 === at || function(e, t) {
                            if (!e) return !0;
                            if (e.type !== t.type) return !0;
                            try {
                                if (e.target !== t.target) return !0
                            } catch (e) {}
                            return !1
                        }(ct, n)) && (e({
                            event: n,
                            name: r,
                            global: t
                        }), ct = n), clearTimeout(at), at = ut.setTimeout((function() {
                            at = void 0
                        }), 1e3)
                    }
                }
        }
        var yt = null,
            vt = null;

        function _t(e, t, n) {
            void 0 === t && (t = 1 / 0), void 0 === n && (n = 1 / 0);
            try {
                return wt("", e, t, n)
            } catch (e) {
                return {
                    ERROR: "**non-serializable** (" + e + ")"
                }
            }
        }

        function bt(e, t, n) {
            void 0 === t && (t = 3), void 0 === n && (n = 102400);
            var r = _t(e, t);
            return function(e) {
                return function(e) {
                    return ~-encodeURI(e).split(/%..|./).length
                }(JSON.stringify(e))
            }(r) > n ? bt(e, t - 1, n) : r
        }

        function wt(e, t, n, r, i) {
            var o, a;
            void 0 === n && (n = 1 / 0), void 0 === r && (r = 1 / 0), void 0 === i && (o = "function" == typeof WeakSet, a = o ? new WeakSet : [], i = [function(e) {
                if (o) return !!a.has(e) || (a.add(e), !1);
                for (var t = 0; t < a.length; t++)
                    if (a[t] === e) return !0;
                return a.push(e), !1
            }, function(e) {
                if (o) a.delete(e);
                else
                    for (var t = 0; t < a.length; t++)
                        if (a[t] === e) {
                            a.splice(t, 1);
                            break
                        }
            }]);
            var c, l = u(i, 2),
                p = l[0],
                d = l[1],
                h = t;
            if (h && "function" == typeof h.toJSON) try {
                return h.toJSON()
            } catch (e) {}
            if (null === t || ["number", "boolean", "string"].includes(typeof t) && ("number" != typeof(c = t) || c == c)) return t;
            var m = function(e, t) {
                try {
                    return "domain" === e && t && "object" == typeof t && t._events ? "[Domain]" : "domainEmitter" === e ? "[DomainEmitter]" : void 0 !== s.g && t === s.g ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : function(e) {
                        return _(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
                    }(t) ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + nt(t) + "]" : "symbol" == typeof t ? "[" + String(t) + "]" : "bigint" == typeof t ? "[BigInt: " + String(t) + "]" : "[object " + Object.getPrototypeOf(t).constructor.name + "]"
                } catch (e) {
                    return "**non-serializable** (" + e + ")"
                }
            }(e, t);
            if (!m.startsWith("[object ")) return m;
            if (0 === n) return m.replace("object ", "");
            if (p(t)) return "[Circular ~]";
            var g = Array.isArray(t) ? [] : {},
                y = 0,
                v = f(t) || b(t) ? C(t) : t;
            for (var w in v)
                if (Object.prototype.hasOwnProperty.call(v, w)) {
                    if (y >= r) {
                        g[w] = "[MaxProperties ~]";
                        break
                    }
                    var S = v[w];
                    g[w] = wt(w, S, n - 1, r, i), y += 1
                }
            return d(t), g
        }
        var St = "?";

        function xt(e, t, n, r) {
            var i = {
                filename: e,
                function: t,
                in_app: !0
            };
            return void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
        }
        var Et = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            kt = /\((\S*)(?::(\d+))(?::(\d+))\)/,
            Ot = [30, function(e) {
                var t = Et.exec(e);
                if (t) {
                    if (t[2] && 0 === t[2].indexOf("eval")) {
                        var n = kt.exec(t[2]);
                        n && (t[2] = n[1], t[3] = n[2], t[4] = n[3])
                    }
                    var r = u(Mt(t[1] || St, t[2]), 2),
                        i = r[0];
                    return xt(r[1], i, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
                }
            }],
            It = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
            At = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
            Tt = [50, function(e) {
                var t, n = It.exec(e);
                if (n) {
                    if (n[3] && n[3].indexOf(" > eval") > -1) {
                        var r = At.exec(n[3]);
                        r && (n[1] = n[1] || "eval", n[3] = r[1], n[4] = r[2], n[5] = "")
                    }
                    var i = n[3],
                        o = n[1] || St;
                    return o = (t = u(Mt(o, i), 2))[0], xt(i = t[1], o, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0)
                }
            }],
            Rt = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            Lt = [40, function(e) {
                var t = Rt.exec(e);
                return t ? xt(t[2], t[1] || St, +t[3], t[4] ? +t[4] : void 0) : void 0
            }],
            Ct = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
            Pt = [10, function(e) {
                var t = Ct.exec(e);
                return t ? xt(t[2], t[3] || St, +t[1]) : void 0
            }],
            jt = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
            Ut = [20, function(e) {
                var t = jt.exec(e);
                return t ? xt(t[5], t[3] || t[4] || St, +t[1], +t[2]) : void 0
            }],
            Mt = function(e, t) {
                var n = -1 !== e.indexOf("safari-extension"),
                    r = -1 !== e.indexOf("safari-web-extension");
                return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : St, n ? "safari-extension:" + t : "safari-web-extension:" + t] : [e, t]
            };

        function Nt(e) {
            var t = Bt(e),
                n = {
                    type: e && e.name,
                    value: Zt(e)
                };
            return t.length && (n.stacktrace = {
                frames: t
            }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
        }

        function Dt(e) {
            return {
                exception: {
                    values: [Nt(e)]
                }
            }
        }

        function Bt(e) {
            var t = e.stacktrace || e.stack || "",
                n = function(e) {
                    if (e) {
                        if ("number" == typeof e.framesToPop) return e.framesToPop;
                        if (qt.test(e.message)) return 1
                    }
                    return 0
                }(e);
            try {
                return function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = e.sort((function(e, t) {
                        return e[0] - t[0]
                    })).map((function(e) {
                        return e[1]
                    }));
                    return function(e, t) {
                        var r, i, o, s;
                        void 0 === t && (t = 0);
                        var a = [];
                        try {
                            for (var u = c(e.split("\n").slice(t)), l = u.next(); !l.done; l = u.next()) {
                                var p = l.value;
                                try {
                                    for (var d = (o = void 0, c(n)), f = d.next(); !f.done; f = d.next()) {
                                        var h = (0, f.value)(p);
                                        if (h) {
                                            a.push(h);
                                            break
                                        }
                                    }
                                } catch (e) {
                                    o = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        f && !f.done && (s = d.return) && s.call(d)
                                    } finally {
                                        if (o) throw o.error
                                    }
                                }
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                l && !l.done && (i = u.return) && i.call(u)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return et(a)
                    }
                }(Pt, Ut, Ot, Lt, Tt)(t, n)
            } catch (e) {}
            return []
        }
        var qt = /Minified React error #\d+;/i;

        function Zt(e) {
            var t = e && e.message;
            return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
        }

        function Ft(e, t, n, r) {
            var i;
            if (m(e) && e.error) return Dt(e.error);
            if (g(e) || h(e, "DOMException")) {
                var s = e;
                if ("stack" in e) i = Dt(e);
                else {
                    var a = s.name || (g(s) ? "DOMError" : "DOMException"),
                        c = s.message ? a + ": " + s.message : a;
                    Z(i = $t(c, t, n), c)
                }
                return "code" in s && (i.tags = o(o({}, i.tags), {
                    "DOMException.code": "" + s.code
                })), i
            }
            return f(e) ? Dt(e) : _(e) || b(e) ? (i = function(e, t, n) {
                var r = {
                    exception: {
                        values: [{
                            type: b(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                            value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + U(e)
                        }]
                    },
                    extra: {
                        __serialized__: bt(e)
                    }
                };
                if (t) {
                    var i = Bt(t);
                    i.length && (r.stacktrace = {
                        frames: i
                    })
                }
                return r
            }(e, t, r), F(i, {
                synthetic: !0
            }), i) : (Z(i = $t(e, t, n), "" + e, void 0), F(i, {
                synthetic: !0
            }), i)
        }

        function $t(e, t, n) {
            var r = {
                message: e
            };
            if (n && t) {
                var i = Bt(t);
                i.length && (r.stacktrace = {
                    frames: i
                })
            }
            return r
        }
        var zt = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
            Ht = Object.setPrototypeOf || ({
                    __proto__: []
                }
                instanceof Array ? function(e, t) {
                    return e.__proto__ = t, e
                } : function(e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(e, n) || (e[n] = t[n]);
                    return e
                }),
            Vt = function(e) {
                function t(t) {
                    var n = this.constructor,
                        r = e.call(this, t) || this;
                    return r.message = t, r.name = n.prototype.constructor.name, Ht(r, n.prototype), r
                }
                return i(t, e), t
            }(Error),
            Kt = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;

        function Wt(e, t) {
            void 0 === t && (t = !1);
            var n = e.host,
                r = e.path,
                i = e.pass,
                o = e.port,
                s = e.projectId;
            return e.protocol + "://" + e.publicKey + (t && i ? ":" + i : "") + "@" + n + (o ? ":" + o : "") + "/" + (r ? r + "/" : r) + s
        }

        function Gt(e) {
            return "user" in e && !("publicKey" in e) && (e.publicKey = e.user), {
                user: e.publicKey || "",
                protocol: e.protocol,
                publicKey: e.publicKey || "",
                pass: e.pass || "",
                host: e.host,
                port: e.port || "",
                path: e.path || "",
                projectId: e.projectId
            }
        }

        function Yt(e) {
            var t = "string" == typeof e ? function(e) {
                var t = Kt.exec(e);
                if (!t) throw new Vt("Invalid Sentry Dsn: " + e);
                var n = u(t.slice(1), 6),
                    r = n[0],
                    i = n[1],
                    o = n[2],
                    s = void 0 === o ? "" : o,
                    a = n[3],
                    c = n[4],
                    l = void 0 === c ? "" : c,
                    p = "",
                    d = n[5],
                    f = d.split("/");
                if (f.length > 1 && (p = f.slice(0, -1).join("/"), d = f.pop()), d) {
                    var h = d.match(/^\d+/);
                    h && (d = h[0])
                }
                return Gt({
                    host: a,
                    pass: s,
                    path: p,
                    projectId: d,
                    port: l,
                    protocol: r,
                    publicKey: i
                })
            }(e) : Gt(e);
            return function(e) {
                if (V) {
                    var t = e.port,
                        n = e.projectId,
                        r = e.protocol;
                    if (["protocol", "publicKey", "host", "projectId"].forEach((function(t) {
                            if (!e[t]) throw new Vt("Invalid Sentry Dsn: " + t + " missing")
                        })), !n.match(/^\d+$/)) throw new Vt("Invalid Sentry Dsn: Invalid projectId " + n);
                    if (! function(e) {
                            return "http" === e || "https" === e
                        }(r)) throw new Vt("Invalid Sentry Dsn: Invalid protocol " + r);
                    if (t && isNaN(parseInt(t, 10))) throw new Vt("Invalid Sentry Dsn: Invalid port " + t)
                }
            }(t), t
        }

        function Jt(e, t, n) {
            return {
                initDsn: e,
                metadata: t || {},
                dsn: Yt(e),
                tunnel: n
            }
        }

        function Xt(e) {
            var t = e.protocol ? e.protocol + ":" : "",
                n = e.port ? ":" + e.port : "";
            return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
        }

        function Qt(e, t) {
            return "" + Xt(e) + e.projectId + "/" + t + "/"
        }

        function en(e) {
            return t = {
                sentry_key: e.publicKey,
                sentry_version: "7"
            }, Object.keys(t).map((function(e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            })).join("&");
            var t
        }

        function tn(e) {
            return Qt(e, "store")
        }

        function nn(e) {
            return tn(e) + "?" + en(e)
        }

        function rn(e, t) {
            return t || function(e) {
                return Qt(e, "envelope")
            }(e) + "?" + en(e)
        }! function() {
            function e(e, t, n) {
                void 0 === t && (t = {}), this.dsn = e, this._dsnObject = Yt(e), this.metadata = t, this._tunnel = n
            }
            e.prototype.getDsn = function() {
                return this._dsnObject
            }, e.prototype.forceEnvelope = function() {
                return !!this._tunnel
            }, e.prototype.getBaseApiEndpoint = function() {
                return Xt(this._dsnObject)
            }, e.prototype.getStoreEndpoint = function() {
                return tn(this._dsnObject)
            }, e.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                return nn(this._dsnObject)
            }, e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
                return rn(this._dsnObject, this._tunnel)
            }
        }();
        var on = (0, p.R)(),
            sn = 0;

        function an() {
            return sn > 0
        }

        function cn() {
            sn += 1, setTimeout((function() {
                sn -= 1
            }))
        }

        function un(e, t, n) {
            if (void 0 === t && (t = {}), "function" != typeof e) return e;
            try {
                var r = e.__sentry_wrapped__;
                if (r) return r;
                if (L(e)) return e
            } catch (t) {
                return e
            }
            var i = function() {
                var r = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    var i = r.map((function(e) {
                        return un(e, t)
                    }));
                    return e.apply(this, i)
                } catch (e) {
                    throw cn(), ge((function(n) {
                        n.addEventProcessor((function(e) {
                            return t.mechanism && (Z(e, void 0, void 0), F(e, t.mechanism)), e.extra = o(o({}, e.extra), {
                                arguments: r
                            }), e
                        })), me(e)
                    })), e
                }
            };
            try {
                for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (i[s] = e[s])
            } catch (e) {}
            R(i, e), T(e, "__sentry_wrapped__", i);
            try {
                Object.getOwnPropertyDescriptor(i, "name").configurable && Object.defineProperty(i, "name", {
                    get: function() {
                        return e.name
                    }
                })
            } catch (e) {}
            return i
        }
        var ln = function() {
            function e(t) {
                this.name = e.id, this._installFunc = {
                    onerror: pn,
                    onunhandledrejection: dn
                }, this._options = o({
                    onerror: !0,
                    onunhandledrejection: !0
                }, t)
            }
            return e.prototype.setupOnce = function() {
                Error.stackTraceLimit = 50;
                var e, t = this._options;
                for (var n in t) {
                    var r = this._installFunc[n];
                    r && t[n] && (e = n, zt && z.log("Global Handler attached: " + e), r(), this._installFunc[n] = void 0)
                }
            }, e.id = "GlobalHandlers", e
        }();

        function pn() {
            dt("error", (function(e) {
                var t = u(mn(), 2),
                    n = t[0],
                    r = t[1];
                if (n.getIntegration(ln)) {
                    var i = e.msg,
                        o = e.url,
                        s = e.line,
                        a = e.column,
                        c = e.error;
                    if (!(an() || c && c.__sentry_own_request__)) {
                        var l = void 0 === c && y(i) ? function(e, t, n, r) {
                            var i = m(e) ? e.message : e,
                                o = "Error",
                                s = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                            return s && (o = s[1], i = s[2]), fn({
                                exception: {
                                    values: [{
                                        type: o,
                                        value: i
                                    }]
                                }
                            }, t, n, r)
                        }(i, o, s, a) : fn(Ft(c || i, void 0, r, !1), o, s, a);
                        l.level = Ke.Error, hn(n, c, l, "onerror")
                    }
                }
            }))
        }

        function dn() {
            dt("unhandledrejection", (function(e) {
                var t = u(mn(), 2),
                    n = t[0],
                    r = t[1];
                if (n.getIntegration(ln)) {
                    var i = e;
                    try {
                        "reason" in e ? i = e.reason : "detail" in e && "reason" in e.detail && (i = e.detail.reason)
                    } catch (e) {}
                    if (an() || i && i.__sentry_own_request__) return !0;
                    var o = v(i) ? {
                        exception: {
                            values: [{
                                type: "UnhandledRejection",
                                value: "Non-Error promise rejection captured with value: " + String(i)
                            }]
                        }
                    } : Ft(i, void 0, r, !0);
                    o.level = Ke.Error, hn(n, i, o, "onunhandledrejection")
                }
            }))
        }

        function fn(e, t, n, r) {
            var i = e.exception = e.exception || {},
                o = i.values = i.values || [],
                s = o[0] = o[0] || {},
                a = s.stacktrace = s.stacktrace || {},
                c = a.frames = a.frames || [],
                u = isNaN(parseInt(r, 10)) ? void 0 : r,
                l = isNaN(parseInt(n, 10)) ? void 0 : n,
                d = y(t) && t.length > 0 ? t : function() {
                    var e = (0, p.R)();
                    try {
                        return e.document.location.href
                    } catch (e) {
                        return ""
                    }
                }();
            return 0 === c.length && c.push({
                colno: u,
                filename: d,
                function: "?",
                in_app: !0,
                lineno: l
            }), e
        }

        function hn(e, t, n, r) {
            F(n, {
                handled: !1,
                type: r
            }), e.captureEvent(n, {
                originalException: t
            })
        }

        function mn() {
            var e = le(),
                t = e.getClient();
            return [e, t && t.getOptions().attachStacktrace]
        }
        var gn = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
            yn = function() {
                function e(t) {
                    this.name = e.id, this._options = o({
                        XMLHttpRequest: !0,
                        eventTarget: !0,
                        requestAnimationFrame: !0,
                        setInterval: !0,
                        setTimeout: !0
                    }, t)
                }
                return e.prototype.setupOnce = function() {
                    var e = (0, p.R)();
                    this._options.setTimeout && A(e, "setTimeout", vn), this._options.setInterval && A(e, "setInterval", vn), this._options.requestAnimationFrame && A(e, "requestAnimationFrame", _n), this._options.XMLHttpRequest && "XMLHttpRequest" in e && A(XMLHttpRequest.prototype, "send", bn);
                    var t = this._options.eventTarget;
                    t && (Array.isArray(t) ? t : gn).forEach(wn)
                }, e.id = "TryCatch", e
            }();

        function vn(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = t[0];
                return t[0] = un(r, {
                    mechanism: {
                        data: {
                            function: nt(e)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), e.apply(this, t)
            }
        }

        function _n(e) {
            return function(t) {
                return e.apply(this, [un(t, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: nt(e)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                })])
            }
        }

        function bn(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = this,
                    i = ["onload", "onerror", "onprogress", "onreadystatechange"];
                return i.forEach((function(e) {
                    e in r && "function" == typeof r[e] && A(r, e, (function(t) {
                        var n = {
                                mechanism: {
                                    data: {
                                        function: e,
                                        handler: nt(t)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            },
                            r = L(t);
                        return r && (n.mechanism.data.handler = nt(r)), un(t, n)
                    }))
                })), e.apply(this, t)
            }
        }

        function wn(e) {
            var t = (0, p.R)(),
                n = t[e] && t[e].prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (A(n, "addEventListener", (function(t) {
                return function(n, r, i) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = un(r.handleEvent.bind(r), {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: nt(r),
                                    target: e
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }))
                    } catch (e) {}
                    return t.apply(this, [n, un(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: nt(r),
                                target: e
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), i])
                }
            })), A(n, "removeEventListener", (function(e) {
                return function(t, n, r) {
                    var i = n;
                    try {
                        var o = i && i.__sentry_wrapped__;
                        o && e.call(this, t, o, r)
                    } catch (e) {}
                    return e.call(this, t, i, r)
                }
            })))
        }
        var Sn = ["fatal", "error", "warning", "log", "info", "debug", "critical"];
        var xn = function() {
            function e(t) {
                this.name = e.id, this._options = o({
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0
                }, t)
            }
            return e.prototype.addSentryBreadcrumb = function(e) {
                this._options.sentry && le().addBreadcrumb({
                    category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                    event_id: e.event_id,
                    level: e.level,
                    message: q(e)
                }, {
                    event: e
                })
            }, e.prototype.setupOnce = function() {
                var e;
                this._options.console && dt("console", En), this._options.dom && dt("dom", (e = this._options.dom, function(t) {
                    var n, r = "object" == typeof e ? e.serializeAttribute : void 0;
                    "string" == typeof r && (r = [r]);
                    try {
                        n = t.event.target ? x(t.event.target, r) : x(t.event, r)
                    } catch (e) {
                        n = "<unknown>"
                    }
                    0 !== n.length && le().addBreadcrumb({
                        category: "ui." + t.name,
                        message: n
                    }, {
                        event: t.event,
                        name: t.name,
                        global: t.global
                    })
                })), this._options.xhr && dt("xhr", kn), this._options.fetch && dt("fetch", On), this._options.history && dt("history", In)
            }, e.id = "Breadcrumbs", e
        }();

        function En(e) {
            var t, n = {
                category: "console",
                data: {
                    arguments: e.args,
                    logger: "console"
                },
                level: (t = e.level, "warn" === t ? Ke.Warning : function(e) {
                    return -1 !== Sn.indexOf(e)
                }(t) ? t : Ke.Log),
                message: O(e.args, " ")
            };
            if ("assert" === e.level) {
                if (!1 !== e.args[0]) return;
                n.message = "Assertion failed: " + (O(e.args.slice(1), " ") || "console.assert"), n.data.arguments = e.args.slice(1)
            }
            le().addBreadcrumb(n, {
                input: e.args,
                level: e.level
            })
        }

        function kn(e) {
            if (e.endTimestamp) {
                if (e.xhr.__sentry_own_request__) return;
                var t = e.xhr.__sentry_xhr__ || {},
                    n = t.method,
                    r = t.url,
                    i = t.status_code,
                    o = t.body;
                le().addBreadcrumb({
                    category: "xhr",
                    data: {
                        method: n,
                        url: r,
                        status_code: i
                    },
                    type: "http"
                }, {
                    xhr: e.xhr,
                    input: o
                })
            }
        }

        function On(e) {
            e.endTimestamp && (e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? le().addBreadcrumb({
                category: "fetch",
                data: e.fetchData,
                level: Ke.Error,
                type: "http"
            }, {
                data: e.error,
                input: e.args
            }) : le().addBreadcrumb({
                category: "fetch",
                data: o(o({}, e.fetchData), {
                    status_code: e.response.status
                }),
                type: "http"
            }, {
                input: e.args,
                response: e.response
            })))
        }

        function In(e) {
            var t = (0, p.R)(),
                n = e.from,
                r = e.to,
                i = D(t.location.href),
                o = D(n),
                s = D(r);
            o.path || (o = i), i.protocol === s.protocol && i.host === s.host && (r = s.relative), i.protocol === o.protocol && i.host === o.host && (n = o.relative), le().addBreadcrumb({
                category: "navigation",
                data: {
                    from: n,
                    to: r
                }
            })
        }
        var An = function() {
            function e(t) {
                void 0 === t && (t = {}), this.name = e.id, this._key = t.key || "cause", this._limit = t.limit || 5
            }
            return e.prototype.setupOnce = function() {
                oe((function(t, n) {
                    var r = le().getIntegration(e);
                    return r ? function(e, t, n, r) {
                        if (!(n.exception && n.exception.values && r && S(r.originalException, Error))) return n;
                        var i = Tn(t, r.originalException, e);
                        return n.exception.values = l(i, n.exception.values), n
                    }(r._key, r._limit, t, n) : t
                }))
            }, e.id = "LinkedErrors", e
        }();

        function Tn(e, t, n, r) {
            if (void 0 === r && (r = []), !S(t[n], Error) || r.length + 1 >= e) return r;
            var i = Nt(t[n]);
            return Tn(e, t[n], n, l([i], r))
        }
        var Rn = (0, p.R)(),
            Ln = function() {
                function e() {
                    this.name = e.id
                }
                return e.prototype.setupOnce = function() {
                    oe((function(t) {
                        if (le().getIntegration(e)) {
                            if (!Rn.navigator && !Rn.location && !Rn.document) return t;
                            var n = t.request && t.request.url || Rn.location && Rn.location.href,
                                r = (Rn.document || {}).referrer,
                                i = (Rn.navigator || {}).userAgent,
                                s = o(o(o({}, t.request && t.request.headers), r && {
                                    Referer: r
                                }), i && {
                                    "User-Agent": i
                                }),
                                a = o(o({}, n && {
                                    url: n
                                }), {
                                    headers: s
                                });
                            return o(o({}, t), {
                                request: a
                            })
                        }
                        return t
                    }))
                }, e.id = "UserAgent", e
            }(),
            Cn = function() {
                function e() {
                    this.name = e.id
                }
                return e.prototype.setupOnce = function(t, n) {
                    t((function(t) {
                        var r = n().getIntegration(e);
                        if (r) {
                            try {
                                if (function(e, t) {
                                        return !!t && (!! function(e, t) {
                                            var n = e.message,
                                                r = t.message;
                                            return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!jn(e, t) && !!Pn(e, t))))
                                        }(e, t) || !! function(e, t) {
                                            var n = Un(t),
                                                r = Un(e);
                                            return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!jn(e, t) && !!Pn(e, t)))
                                        }(e, t))
                                    }(t, r._previousEvent)) return zt && z.warn("Event dropped due to being a duplicate of previously captured event."), null
                            } catch (e) {
                                return r._previousEvent = t
                            }
                            return r._previousEvent = t
                        }
                        return t
                    }))
                }, e.id = "Dedupe", e
            }();

        function Pn(e, t) {
            var n = Mn(e),
                r = Mn(t);
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            if (r.length !== n.length) return !1;
            for (var i = 0; i < r.length; i++) {
                var o = r[i],
                    s = n[i];
                if (o.filename !== s.filename || o.lineno !== s.lineno || o.colno !== s.colno || o.function !== s.function) return !1
            }
            return !0
        }

        function jn(e, t) {
            var n = e.fingerprint,
                r = t.fingerprint;
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            try {
                return !(n.join("") !== r.join(""))
            } catch (e) {
                return !1
            }
        }

        function Un(e) {
            return e.exception && e.exception.values && e.exception.values[0]
        }

        function Mn(e) {
            var t = e.exception;
            if (t) try {
                return t.values[0].stacktrace.frames
            } catch (e) {
                return
            } else if (e.stacktrace) return e.stacktrace.frames
        }
        var Nn = {},
            Dn = (0, p.R)();
        Dn.Sentry && Dn.Sentry.Integrations && (Nn = Dn.Sentry.Integrations);
        var Bn = o(o(o({}, Nn), e), t),
            qn = "6.19.7",
            Zn = [];

        function Fn(e) {
            return e.reduce((function(e, t) {
                return e.every((function(e) {
                    return t.name !== e.name
                })) && e.push(t), e
            }), [])
        }
        var $n = "Not capturing exception because it's already been captured.",
            zn = function() {
                function e(e, t) {
                    this._integrations = {}, this._numProcessing = 0, this._backend = new e(t), this._options = t, t.dsn && (this._dsn = Yt(t.dsn))
                }
                return e.prototype.captureException = function(e, t, n) {
                    var r = this;
                    if (!$(e)) {
                        var i = t && t.event_id;
                        return this._process(this._getBackend().eventFromException(e, t).then((function(e) {
                            return r._captureEvent(e, t, n)
                        })).then((function(e) {
                            i = e
                        }))), i
                    }
                    Ge && z.log($n)
                }, e.prototype.captureMessage = function(e, t, n, r) {
                    var i = this,
                        o = n && n.event_id,
                        s = v(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n);
                    return this._process(s.then((function(e) {
                        return i._captureEvent(e, n, r)
                    })).then((function(e) {
                        o = e
                    }))), o
                }, e.prototype.captureEvent = function(e, t, n) {
                    if (!(t && t.originalException && $(t.originalException))) {
                        var r = t && t.event_id;
                        return this._process(this._captureEvent(e, t, n).then((function(e) {
                            r = e
                        }))), r
                    }
                    Ge && z.log($n)
                }, e.prototype.captureSession = function(e) {
                    this._isEnabled() ? "string" != typeof e.release ? Ge && z.warn("Discarded session because of missing or non-string release") : (this._sendSession(e), e.update({
                        init: !1
                    })) : Ge && z.warn("SDK not enabled, will not capture session.")
                }, e.prototype.getDsn = function() {
                    return this._dsn
                }, e.prototype.getOptions = function() {
                    return this._options
                }, e.prototype.getTransport = function() {
                    return this._getBackend().getTransport()
                }, e.prototype.flush = function(e) {
                    var t = this;
                    return this._isClientDoneProcessing(e).then((function(n) {
                        return t.getTransport().close(e).then((function(e) {
                            return n && e
                        }))
                    }))
                }, e.prototype.close = function(e) {
                    var t = this;
                    return this.flush(e).then((function(e) {
                        return t.getOptions().enabled = !1, e
                    }))
                }, e.prototype.setupIntegrations = function() {
                    var e, t;
                    this._isEnabled() && !this._integrations.initialized && (this._integrations = (e = this._options, t = {}, function(e) {
                        var t = e.defaultIntegrations && l(e.defaultIntegrations) || [],
                            n = e.integrations,
                            r = l(Fn(t));
                        Array.isArray(n) ? r = l(r.filter((function(e) {
                            return n.every((function(t) {
                                return t.name !== e.name
                            }))
                        })), Fn(n)) : "function" == typeof n && (r = n(r), r = Array.isArray(r) ? r : [r]);
                        var i = r.map((function(e) {
                                return e.name
                            })),
                            o = "Debug";
                        return -1 !== i.indexOf(o) && r.push.apply(r, l(r.splice(i.indexOf(o), 1))), r
                    }(e).forEach((function(e) {
                        t[e.name] = e,
                            function(e) {
                                -1 === Zn.indexOf(e.name) && (e.setupOnce(oe, le), Zn.push(e.name), Ge && z.log("Integration installed: " + e.name))
                            }(e)
                    })), T(t, "initialized", !0), t))
                }, e.prototype.getIntegration = function(e) {
                    try {
                        return this._integrations[e.id] || null
                    } catch (t) {
                        return Ge && z.warn("Cannot retrieve integration " + e.id + " from the current Client"), null
                    }
                }, e.prototype._updateSessionFromEvent = function(e, t) {
                    var n, r, i = !1,
                        s = !1,
                        a = t.exception && t.exception.values;
                    if (a) {
                        s = !0;
                        try {
                            for (var u = c(a), l = u.next(); !l.done; l = u.next()) {
                                var p = l.value.mechanism;
                                if (p && !1 === p.handled) {
                                    i = !0;
                                    break
                                }
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                l && !l.done && (r = u.return) && r.call(u)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }
                    var d = "ok" === e.status;
                    (d && 0 === e.errors || d && i) && (e.update(o(o({}, i && {
                        status: "crashed"
                    }), {
                        errors: e.errors || Number(s || i)
                    })), this.captureSession(e))
                }, e.prototype._sendSession = function(e) {
                    this._getBackend().sendSession(e)
                }, e.prototype._isClientDoneProcessing = function(e) {
                    var t = this;
                    return new ne((function(n) {
                        var r = 0,
                            i = setInterval((function() {
                                0 == t._numProcessing ? (clearInterval(i), n(!0)) : (r += 1, e && r >= e && (clearInterval(i), n(!1)))
                            }), 1)
                    }))
                }, e.prototype._getBackend = function() {
                    return this._backend
                }, e.prototype._isEnabled = function() {
                    return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                }, e.prototype._prepareEvent = function(e, t, n) {
                    var r = this,
                        i = this.getOptions(),
                        s = i.normalizeDepth,
                        a = void 0 === s ? 3 : s,
                        c = i.normalizeMaxBreadth,
                        u = void 0 === c ? 1e3 : c,
                        l = o(o({}, e), {
                            event_id: e.event_id || (n && n.event_id ? n.event_id : N()),
                            timestamp: e.timestamp || (0, H.yW)()
                        });
                    this._applyClientOptions(l), this._applyIntegrationsMetadata(l);
                    var p = t;
                    n && n.captureContext && (p = re.clone(p).update(n.captureContext));
                    var d = ee(l);
                    return p && (d = p.applyToEvent(l, n)), d.then((function(e) {
                        return e && (e.sdkProcessingMetadata = o(o({}, e.sdkProcessingMetadata), {
                            normalizeDepth: _t(a) + " (" + typeof a + ")"
                        })), "number" == typeof a && a > 0 ? r._normalizeEvent(e, a, u) : e
                    }))
                }, e.prototype._normalizeEvent = function(e, t, n) {
                    if (!e) return null;
                    var r = o(o(o(o(o({}, e), e.breadcrumbs && {
                        breadcrumbs: e.breadcrumbs.map((function(e) {
                            return o(o({}, e), e.data && {
                                data: _t(e.data, t, n)
                            })
                        }))
                    }), e.user && {
                        user: _t(e.user, t, n)
                    }), e.contexts && {
                        contexts: _t(e.contexts, t, n)
                    }), e.extra && {
                        extra: _t(e.extra, t, n)
                    });
                    return e.contexts && e.contexts.trace && (r.contexts.trace = e.contexts.trace), r.sdkProcessingMetadata = o(o({}, r.sdkProcessingMetadata), {
                        baseClientNormalized: !0
                    }), r
                }, e.prototype._applyClientOptions = function(e) {
                    var t = this.getOptions(),
                        n = t.environment,
                        r = t.release,
                        i = t.dist,
                        o = t.maxValueLength,
                        s = void 0 === o ? 250 : o;
                    "environment" in e || (e.environment = "environment" in t ? n : "production"), void 0 === e.release && void 0 !== r && (e.release = r), void 0 === e.dist && void 0 !== i && (e.dist = i), e.message && (e.message = k(e.message, s));
                    var a = e.exception && e.exception.values && e.exception.values[0];
                    a && a.value && (a.value = k(a.value, s));
                    var c = e.request;
                    c && c.url && (c.url = k(c.url, s))
                }, e.prototype._applyIntegrationsMetadata = function(e) {
                    var t = Object.keys(this._integrations);
                    t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = l(e.sdk.integrations || [], t))
                }, e.prototype._sendEvent = function(e) {
                    this._getBackend().sendEvent(e)
                }, e.prototype._captureEvent = function(e, t, n) {
                    return this._processEvent(e, t, n).then((function(e) {
                        return e.event_id
                    }), (function(e) {
                        Ge && z.error(e)
                    }))
                }, e.prototype._processEvent = function(e, t, n) {
                    var r = this,
                        i = this.getOptions(),
                        o = i.beforeSend,
                        s = i.sampleRate,
                        a = this.getTransport();

                    function c(e, t) {
                        a.recordLostEvent && a.recordLostEvent(e, t)
                    }
                    if (!this._isEnabled()) return te(new Vt("SDK not enabled, will not capture event."));
                    var u = "transaction" === e.type;
                    return !u && "number" == typeof s && Math.random() > s ? (c("sample_rate", "event"), te(new Vt("Discarding event because it's not included in the random sample (sampling rate = " + s + ")"))) : this._prepareEvent(e, n, t).then((function(n) {
                        if (null === n) throw c("event_processor", e.type || "event"), new Vt("An event processor returned null, will not send event.");
                        return t && t.data && !0 === t.data.__sentry__ || u || !o ? n : function(e) {
                            var t = "`beforeSend` method has to return `null` or a valid event.";
                            if (w(e)) return e.then((function(e) {
                                if (!_(e) && null !== e) throw new Vt(t);
                                return e
                            }), (function(e) {
                                throw new Vt("beforeSend rejected with " + e)
                            }));
                            if (!_(e) && null !== e) throw new Vt(t);
                            return e
                        }(o(n, t))
                    })).then((function(t) {
                        if (null === t) throw c("before_send", e.type || "event"), new Vt("`beforeSend` returned `null`, will not send event.");
                        var i = n && n.getSession && n.getSession();
                        return !u && i && r._updateSessionFromEvent(i, t), r._sendEvent(t), t
                    })).then(null, (function(e) {
                        if (e instanceof Vt) throw e;
                        throw r.captureException(e, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: e
                        }), new Vt("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
                    }))
                }, e.prototype._process = function(e) {
                    var t = this;
                    this._numProcessing += 1, e.then((function(e) {
                        return t._numProcessing -= 1, e
                    }), (function(e) {
                        return t._numProcessing -= 1, e
                    }))
                }, e
            }();

        function Hn(e, t) {
            return void 0 === t && (t = []), [e, t]
        }

        function Vn(e) {
            var t = u(e, 2),
                n = t[0],
                r = t[1],
                i = JSON.stringify(n);
            return r.reduce((function(e, t) {
                var n = u(t, 2),
                    r = n[0],
                    i = n[1],
                    o = v(i) ? String(i) : JSON.stringify(i);
                return e + "\n" + JSON.stringify(r) + "\n" + o
            }), i)
        }

        function Kn(e) {
            if (e.metadata && e.metadata.sdk) {
                var t = e.metadata.sdk;
                return {
                    name: t.name,
                    version: t.version
                }
            }
        }

        function Wn(e, t) {
            return t ? (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = l(e.sdk.integrations || [], t.integrations || []), e.sdk.packages = l(e.sdk.packages || [], t.packages || []), e) : e
        }

        function Gn(e, t) {
            var n = Kn(t),
                r = "aggregates" in e ? "sessions" : "session";
            return [Hn(o(o({
                sent_at: (new Date).toISOString()
            }, n && {
                sdk: n
            }), !!t.tunnel && {
                dsn: Wt(t.dsn)
            }), [
                [{
                    type: r
                }, e]
            ]), r]
        }
        var Yn = function() {
                function e() {}
                return e.prototype.sendEvent = function(e) {
                    return ee({
                        reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                        status: "skipped"
                    })
                }, e.prototype.close = function(e) {
                    return ee(!0)
                }, e
            }(),
            Jn = function() {
                function e(e) {
                    this._options = e, this._options.dsn || Ge && z.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
                }
                return e.prototype.eventFromException = function(e, t) {
                    throw new Vt("Backend has to implement `eventFromException` method")
                }, e.prototype.eventFromMessage = function(e, t, n) {
                    throw new Vt("Backend has to implement `eventFromMessage` method")
                }, e.prototype.sendEvent = function(e) {
                    if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
                        var t = function(e, t) {
                            var n = Kn(t),
                                r = e.type || "event",
                                i = (e.sdkProcessingMetadata || {}).transactionSampling || {},
                                s = i.method,
                                a = i.rate;
                            return Wn(e, t.metadata.sdk), e.tags = e.tags || {}, e.extra = e.extra || {}, e.sdkProcessingMetadata && e.sdkProcessingMetadata.baseClientNormalized || (e.tags.skippedNormalization = !0, e.extra.normalizeDepth = e.sdkProcessingMetadata ? e.sdkProcessingMetadata.normalizeDepth : "unset"), delete e.sdkProcessingMetadata, Hn(o(o({
                                event_id: e.event_id,
                                sent_at: (new Date).toISOString()
                            }, n && {
                                sdk: n
                            }), !!t.tunnel && {
                                dsn: Wt(t.dsn)
                            }), [
                                [{
                                    type: r,
                                    sample_rates: [{
                                        id: s,
                                        rate: a
                                    }]
                                }, e]
                            ])
                        }(e, Jt(this._options.dsn, this._options._metadata, this._options.tunnel));
                        this._newTransport.send(t).then(null, (function(e) {
                            Ge && z.error("Error while sending event:", e)
                        }))
                    } else this._transport.sendEvent(e).then(null, (function(e) {
                        Ge && z.error("Error while sending event:", e)
                    }))
                }, e.prototype.sendSession = function(e) {
                    if (this._transport.sendSession)
                        if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
                            var t = u(Gn(e, Jt(this._options.dsn, this._options._metadata, this._options.tunnel)), 1)[0];
                            this._newTransport.send(t).then(null, (function(e) {
                                Ge && z.error("Error while sending session:", e)
                            }))
                        } else this._transport.sendSession(e).then(null, (function(e) {
                            Ge && z.error("Error while sending session:", e)
                        }));
                    else Ge && z.warn("Dropping session because custom transport doesn't implement sendSession")
                }, e.prototype.getTransport = function() {
                    return this._transport
                }, e.prototype._setupTransport = function() {
                    return new Yn
                }, e
            }();

        function Xn(e) {
            var t = [];

            function n(e) {
                return t.splice(t.indexOf(e), 1)[0]
            }
            return {
                $: t,
                add: function(r) {
                    if (!(void 0 === e || t.length < e)) return te(new Vt("Not adding Promise due to buffer limit reached."));
                    var i = r();
                    return -1 === t.indexOf(i) && t.push(i), i.then((function() {
                        return n(i)
                    })).then(null, (function() {
                        return n(i).then(null, (function() {}))
                    })), i
                },
                drain: function(e) {
                    return new ne((function(n, r) {
                        var i = t.length;
                        if (!i) return n(!0);
                        var o = setTimeout((function() {
                            e && e > 0 && n(!1)
                        }), e);
                        t.forEach((function(e) {
                            ee(e).then((function() {
                                --i || (clearTimeout(o), n(!0))
                            }), r)
                        }))
                    }))
                }
            }
        }

        function Qn(e, t) {
            return e[t] || e.all || 0
        }

        function er(e, t, n) {
            return void 0 === n && (n = Date.now()), Qn(e, t) > n
        }

        function tr(e, t, n) {
            var r, i, s, a;
            void 0 === n && (n = Date.now());
            var u = o({}, e),
                l = t["x-sentry-rate-limits"],
                p = t["retry-after"];
            if (l) try {
                for (var d = c(l.trim().split(",")), f = d.next(); !f.done; f = d.next()) {
                    var h = f.value.split(":", 2),
                        m = parseInt(h[0], 10),
                        g = 1e3 * (isNaN(m) ? 60 : m);
                    if (h[1]) try {
                        for (var y = (s = void 0, c(h[1].split(";"))), v = y.next(); !v.done; v = y.next()) u[v.value] = n + g
                    } catch (e) {
                        s = {
                            error: e
                        }
                    } finally {
                        try {
                            v && !v.done && (a = y.return) && a.call(y)
                        } finally {
                            if (s) throw s.error
                        }
                    } else u.all = n + g
                }
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    f && !f.done && (i = d.return) && i.call(d)
                } finally {
                    if (r) throw r.error
                }
            } else p && (u.all = n + function(e, t) {
                void 0 === t && (t = Date.now());
                var n = parseInt("" + e, 10);
                if (!isNaN(n)) return 1e3 * n;
                var r = Date.parse("" + e);
                return isNaN(r) ? 6e4 : r - t
            }(p, n));
            return u
        }

        function nr(e) {
            return e >= 200 && e < 300 ? "success" : 429 === e ? "rate_limit" : e >= 400 && e < 500 ? "invalid" : e >= 500 ? "failed" : "unknown"
        }

        function rr(e, t, n) {
            void 0 === n && (n = Xn(e.bufferSize || 30));
            var r = {};
            return {
                send: function(e) {
                    var i = function(e) {
                            var t = u(e, 2),
                                n = u(t[1], 1);
                            return u(n[0], 1)[0].type
                        }(e),
                        o = "event" === i ? "error" : i,
                        s = {
                            category: o,
                            body: Vn(e)
                        };
                    return er(r, o) ? te({
                        status: "rate_limit",
                        reason: ir(r, o)
                    }) : n.add((function() {
                        return t(s).then((function(e) {
                            var t = e.body,
                                n = e.headers,
                                i = e.reason,
                                s = nr(e.statusCode);
                            return n && (r = tr(r, n)), "success" === s ? ee({
                                status: s,
                                reason: i
                            }) : te({
                                status: s,
                                reason: i || t || ("rate_limit" === s ? ir(r, o) : "Unknown transport error")
                            })
                        }))
                    }))
                },
                flush: function(e) {
                    return n.drain(e)
                }
            }
        }

        function ir(e, t) {
            return "Too many " + t + " requests, backing off until: " + new Date(Qn(e, t)).toISOString()
        }
        var or, sr = (0, p.R)();

        function ar() {
            if (or) return or;
            if (it(sr.fetch)) return or = sr.fetch.bind(sr);
            var e = sr.document,
                t = sr.fetch;
            if (e && "function" == typeof e.createElement) try {
                var n = e.createElement("iframe");
                n.hidden = !0, e.head.appendChild(n);
                var r = n.contentWindow;
                r && r.fetch && (t = r.fetch), e.head.removeChild(n)
            } catch (e) {
                zt && z.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
            }
            return or = t.bind(sr)
        }

        function cr(e) {
            return "event" === e ? "error" : e
        }
        var ur = (0, p.R)(),
            lr = function() {
                function e(e) {
                    var t = this;
                    this.options = e, this._buffer = Xn(30), this._rateLimits = {}, this._outcomes = {}, this._api = Jt(e.dsn, e._metadata, e.tunnel), this.url = nn(this._api.dsn), this.options.sendClientReports && ur.document && ur.document.addEventListener("visibilitychange", (function() {
                        "hidden" === ur.document.visibilityState && t._flushOutcomes()
                    }))
                }
                return e.prototype.sendEvent = function(e) {
                    return this._sendRequest(function(e, t) {
                        var n, r = Kn(t),
                            i = e.type || "event",
                            s = "transaction" === i || !!t.tunnel,
                            a = (e.sdkProcessingMetadata || {}).transactionSampling || {},
                            c = a.method,
                            u = a.rate;
                        Wn(e, t.metadata.sdk), e.tags = e.tags || {}, e.extra = e.extra || {}, e.sdkProcessingMetadata && e.sdkProcessingMetadata.baseClientNormalized || (e.tags.skippedNormalization = !0, e.extra.normalizeDepth = e.sdkProcessingMetadata ? e.sdkProcessingMetadata.normalizeDepth : "unset"), delete e.sdkProcessingMetadata;
                        try {
                            n = JSON.stringify(e)
                        } catch (t) {
                            e.tags.JSONStringifyError = !0, e.extra.JSONStringifyError = t;
                            try {
                                n = JSON.stringify(_t(e))
                            } catch (e) {
                                var l = e;
                                n = JSON.stringify({
                                    message: "JSON.stringify error after renormalization",
                                    extra: {
                                        message: l.message,
                                        stack: l.stack
                                    }
                                })
                            }
                        }
                        var p = {
                            body: n,
                            type: i,
                            url: s ? rn(t.dsn, t.tunnel) : nn(t.dsn)
                        };
                        if (s) {
                            var d = Hn(o(o({
                                event_id: e.event_id,
                                sent_at: (new Date).toISOString()
                            }, r && {
                                sdk: r
                            }), !!t.tunnel && {
                                dsn: Wt(t.dsn)
                            }), [
                                [{
                                    type: i,
                                    sample_rates: [{
                                        id: c,
                                        rate: u
                                    }]
                                }, p.body]
                            ]);
                            p.body = Vn(d)
                        }
                        return p
                    }(e, this._api), e)
                }, e.prototype.sendSession = function(e) {
                    return this._sendRequest(function(e, t) {
                        var n = u(Gn(e, t), 2),
                            r = n[0],
                            i = n[1];
                        return {
                            body: Vn(r),
                            type: i,
                            url: rn(t.dsn, t.tunnel)
                        }
                    }(e, this._api), e)
                }, e.prototype.close = function(e) {
                    return this._buffer.drain(e)
                }, e.prototype.recordLostEvent = function(e, t) {
                    var n;
                    if (this.options.sendClientReports) {
                        var r = cr(t) + ":" + e;
                        zt && z.log("Adding outcome: " + r), this._outcomes[r] = (null != (n = this._outcomes[r]) ? n : 0) + 1
                    }
                }, e.prototype._flushOutcomes = function() {
                    if (this.options.sendClientReports) {
                        var e = this._outcomes;
                        if (this._outcomes = {}, Object.keys(e).length) {
                            zt && z.log("Flushing outcomes:\n" + JSON.stringify(e, null, 2));
                            var t, n, r = rn(this._api.dsn, this._api.tunnel),
                                i = Object.keys(e).map((function(t) {
                                    var n = u(t.split(":"), 2),
                                        r = n[0];
                                    return {
                                        reason: n[1],
                                        category: r,
                                        quantity: e[t]
                                    }
                                })),
                                o = (t = i, Hn((n = this._api.tunnel && Wt(this._api.dsn)) ? {
                                    dsn: n
                                } : {}, [
                                    [{
                                        type: "client_report"
                                    }, {
                                        timestamp: (0, H.yW)(),
                                        discarded_events: t
                                    }]
                                ]));
                            try {
                                ! function(e, t) {
                                    if ("[object Navigator]" === Object.prototype.toString.call(sr && sr.navigator) && "function" == typeof sr.navigator.sendBeacon) return sr.navigator.sendBeacon.bind(sr.navigator)(e, t);
                                    rt() && ar()(e, {
                                        body: t,
                                        method: "POST",
                                        credentials: "omit",
                                        keepalive: !0
                                    }).then(null, (function(e) {
                                        console.error(e)
                                    }))
                                }(r, Vn(o))
                            } catch (e) {
                                zt && z.error(e)
                            }
                        } else zt && z.log("No outcomes to flush")
                    }
                }, e.prototype._handleResponse = function(e) {
                    var t = e.requestType,
                        n = e.response,
                        r = e.headers,
                        i = e.resolve,
                        o = e.reject,
                        s = nr(n.status);
                    this._rateLimits = tr(this._rateLimits, r), this._isRateLimited(t) && zt && z.warn("Too many " + t + " requests, backing off until: " + this._disabledUntil(t)), "success" !== s ? o(n) : i({
                        status: s
                    })
                }, e.prototype._disabledUntil = function(e) {
                    var t = cr(e);
                    return new Date(Qn(this._rateLimits, t))
                }, e.prototype._isRateLimited = function(e) {
                    var t = cr(e);
                    return er(this._rateLimits, t)
                }, e
            }(),
            pr = function(e) {
                function t(t, n) {
                    void 0 === n && (n = ar());
                    var r = e.call(this, t) || this;
                    return r._fetch = n, r
                }
                return i(t, e), t.prototype._sendRequest = function(e, t) {
                    var n = this;
                    if (this._isRateLimited(e.type)) return this.recordLostEvent("ratelimit_backoff", e.type), Promise.reject({
                        event: t,
                        type: e.type,
                        reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                        status: 429
                    });
                    var r = {
                        body: e.body,
                        method: "POST",
                        referrerPolicy: ot() ? "origin" : ""
                    };
                    return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters), void 0 !== this.options.headers && (r.headers = this.options.headers), this._buffer.add((function() {
                        return new ne((function(t, i) {
                            n._fetch(e.url, r).then((function(r) {
                                var o = {
                                    "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                                    "retry-after": r.headers.get("Retry-After")
                                };
                                n._handleResponse({
                                    requestType: e.type,
                                    response: r,
                                    headers: o,
                                    resolve: t,
                                    reject: i
                                })
                            })).catch(i)
                        }))
                    })).then(void 0, (function(t) {
                        throw t instanceof Vt ? n.recordLostEvent("queue_overflow", e.type) : n.recordLostEvent("network_error", e.type), t
                    }))
                }, t
            }(lr),
            dr = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i(t, e), t.prototype._sendRequest = function(e, t) {
                    var n = this;
                    return this._isRateLimited(e.type) ? (this.recordLostEvent("ratelimit_backoff", e.type), Promise.reject({
                        event: t,
                        type: e.type,
                        reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                        status: 429
                    })) : this._buffer.add((function() {
                        return new ne((function(t, r) {
                            var i = new XMLHttpRequest;
                            for (var o in i.onreadystatechange = function() {
                                    if (4 === i.readyState) {
                                        var o = {
                                            "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                            "retry-after": i.getResponseHeader("Retry-After")
                                        };
                                        n._handleResponse({
                                            requestType: e.type,
                                            response: i,
                                            headers: o,
                                            resolve: t,
                                            reject: r
                                        })
                                    }
                                }, i.open("POST", e.url), n.options.headers) Object.prototype.hasOwnProperty.call(n.options.headers, o) && i.setRequestHeader(o, n.options.headers[o]);
                            i.send(e.body)
                        }))
                    })).then(void 0, (function(t) {
                        throw t instanceof Vt ? n.recordLostEvent("queue_overflow", e.type) : n.recordLostEvent("network_error", e.type), t
                    }))
                }, t
            }(lr),
            fr = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i(t, e), t.prototype.eventFromException = function(e, t) {
                    return function(e, t, n) {
                        var r = Ft(e, t && t.syntheticException || void 0, n);
                        return F(r), r.level = Ke.Error, t && t.event_id && (r.event_id = t.event_id), ee(r)
                    }(e, t, this._options.attachStacktrace)
                }, t.prototype.eventFromMessage = function(e, t, n) {
                    return void 0 === t && (t = Ke.Info),
                        function(e, t, n, r) {
                            void 0 === t && (t = Ke.Info);
                            var i = $t(e, n && n.syntheticException || void 0, r);
                            return i.level = t, n && n.event_id && (i.event_id = n.event_id), ee(i)
                        }(e, t, n, this._options.attachStacktrace)
                }, t.prototype._setupTransport = function() {
                    if (!this._options.dsn) return e.prototype._setupTransport.call(this);
                    var t, n, r = o(o({}, this._options.transportOptions), {
                            dsn: this._options.dsn,
                            tunnel: this._options.tunnel,
                            sendClientReports: this._options.sendClientReports,
                            _metadata: this._options._metadata
                        }),
                        i = Jt(r.dsn, r._metadata, r.tunnel),
                        s = rn(i.dsn, i.tunnel);
                    if (this._options.transport) return new this._options.transport(r);
                    if (rt()) {
                        var a = o({}, r.fetchParameters);
                        return this._newTransport = (t = {
                            requestOptions: a,
                            url: s
                        }, void 0 === n && (n = ar()), rr({
                            bufferSize: t.bufferSize
                        }, (function(e) {
                            var r = o({
                                body: e.body,
                                method: "POST",
                                referrerPolicy: "origin"
                            }, t.requestOptions);
                            return n(t.url, r).then((function(e) {
                                return e.text().then((function(t) {
                                    return {
                                        body: t,
                                        headers: {
                                            "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                                            "retry-after": e.headers.get("Retry-After")
                                        },
                                        reason: e.statusText,
                                        statusCode: e.status
                                    }
                                }))
                            }))
                        }))), new pr(r)
                    }
                    return this._newTransport = function(e) {
                        return rr({
                            bufferSize: e.bufferSize
                        }, (function(t) {
                            return new ne((function(n, r) {
                                var i = new XMLHttpRequest;
                                for (var o in i.onreadystatechange = function() {
                                        if (4 === i.readyState) {
                                            var e = {
                                                body: i.response,
                                                headers: {
                                                    "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                                    "retry-after": i.getResponseHeader("Retry-After")
                                                },
                                                reason: i.statusText,
                                                statusCode: i.status
                                            };
                                            n(e)
                                        }
                                    }, i.open("POST", e.url), e.headers) Object.prototype.hasOwnProperty.call(e.headers, o) && i.setRequestHeader(o, e.headers[o]);
                                i.send(t.body)
                            }))
                        }))
                    }({
                        url: s,
                        headers: r.headers
                    }), new dr(r)
                }, t
            }(Jn),
            hr = function(e) {
                function t(t) {
                    return void 0 === t && (t = {}), t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                        name: "sentry.javascript.browser",
                        packages: [{
                            name: "npm:@sentry/browser",
                            version: qn
                        }],
                        version: qn
                    }, e.call(this, fr, t) || this
                }
                return i(t, e), t.prototype.showReportDialog = function(e) {
                    void 0 === e && (e = {}), (0, p.R)().document && (this._isEnabled() ? function(e) {
                        if (void 0 === e && (e = {}), on.document)
                            if (e.eventId)
                                if (e.dsn) {
                                    var t = on.document.createElement("script");
                                    t.async = !0, t.src = function(e, t) {
                                        var n = Yt(e),
                                            r = Xt(n) + "embed/error-page/",
                                            i = "dsn=" + Wt(n);
                                        for (var o in t)
                                            if ("dsn" !== o)
                                                if ("user" === o) {
                                                    if (!t.user) continue;
                                                    t.user.name && (i += "&name=" + encodeURIComponent(t.user.name)), t.user.email && (i += "&email=" + encodeURIComponent(t.user.email))
                                                } else i += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(t[o]);
                                        return r + "?" + i
                                    }(e.dsn, e), e.onLoad && (t.onload = e.onLoad);
                                    var n = on.document.head || on.document.body;
                                    n && n.appendChild(t)
                                } else zt && z.error("Missing dsn option in showReportDialog call");
                        else zt && z.error("Missing eventId option in showReportDialog call")
                    }(o(o({}, e), {
                        dsn: e.dsn || this.getDsn()
                    })) : zt && z.error("Trying to call showReportDialog with Sentry Client disabled"))
                }, t.prototype._prepareEvent = function(t, n, r) {
                    return t.platform = t.platform || "javascript", e.prototype._prepareEvent.call(this, t, n, r)
                }, t.prototype._sendEvent = function(t) {
                    var n = this.getIntegration(xn);
                    n && n.addSentryBreadcrumb(t), e.prototype._sendEvent.call(this, t)
                }, t
            }(zn),
            mr = s(59332),
            gr = (s(25766), s(71811)),
            yr = s(57623);
        const vr = (e, t) => {
                if (t) {
                    const e = yr.v4[t];
                    if (e) return e;
                    (0, Ee.Kz)().warn(`Invalid owner provided when obtaining sentry DSN ${t}. Ensure this entry exists in the sentry DSN configurations.`)
                }
                const n = _r(e);
                return yr.v4[n]
            },
            _r = e => e && (0, gr.k2)(e) && yr._w[e].sentryTeam || "accounts_ui",
            br = (0, Ee.Kz)();
        class wr {
            constructor(e, t, n) {
                ! function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                }(this, "getSentryForComponent", (0, mr.Z)(((e, t) => {
                    const n = new hr({ ...this.defaultOptions,
                        dsn: vr(e, t)["prod" !== this.serviceEnvironment || Ie.X ? "qa" : "prod"]
                    });
                    return new ae(n)
                }))), this.serviceEnvironment = e, this.releaseCandidate = t, this.analyticsDisabledFromFrameInit = n, this.defaultOptions = {
                    integrations: [new Bn.UserAgent],
                    defaultIntegrations: !1,
                    environment: Ie.X ? "localdev" : "production",
                    beforeSend: (e, t) => e
                }
            }
            captureException(e) {
                br.error("An error report will be sent with the following properties:", e);
                const {
                    error: t,
                    connectElement: n,
                    tags: r,
                    extra: i,
                    owner: o,
                    level: s
                } = e;
                this.getSentryForComponent(n, o).run((e => {
                    e.configureScope((e => (e.setTags(r || {}), e.setExtras(i || {}), e.setLevel((() => {
                        switch (s) {
                            case "warning":
                                return Ke.Warning;
                            case "info":
                                return Ke.Info;
                            default:
                                return Ke.Error
                        }
                    })()), ((e, t, n) => (e.setTag("page_view_id", Ue() || ""), e.setTag("platform_url", (0, ye.tj)() || ""), n && /^\w+$/.test(n) && (e.setTag("is_rc", !0), e.setTag("rc_commit_hash", n)), e.setFingerprint(["{{ default }}", ...t]), e))(e, [n, null == r ? void 0 : r.type, null == r ? void 0 : r.stripeErrorCode, null == r ? void 0 : r.stripeStatusCode].map((e => (null == e ? void 0 : e.toString()) || "")), this.releaseCandidate)))), je(void 0, this.analyticsDisabledFromFrameInit) || e.captureException(t)
                }))
            }
        }
        s(77253);
        const Sr = new class {
            constructor() {
                ! function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                }(this, "inMemoryItems", {})
            }
            setItem(e, t) {
                this.inMemoryItems[e] = t;
                try {
                    localStorage.setItem(e, t)
                } catch (e) {}
            }
            getItem(e) {
                try {
                    return localStorage.getItem(e)
                } catch (t) {
                    return this.inMemoryItems[e] || null
                }
            }
            removeItem(e) {
                delete this.inMemoryItems[e];
                try {
                    localStorage.removeItem(e)
                } catch (e) {}
            }
        };

        function xr(e, t, n) {
            ! function(e, t) {
                if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(e, t), t.set(e, n)
        }

        function Er(e, t, n) {
            return function(e, t, n) {
                if (t.set) t.set.call(e, n);
                else {
                    if (!t.writable) throw new TypeError("attempted to set read only private field");
                    t.value = n
                }
            }(e, Or(e, t, "set"), n), n
        }

        function kr(e, t) {
            return function(e, t) {
                return t.get ? t.get.call(e) : t.value
            }(e, Or(e, t, "get"))
        }

        function Or(e, t, n) {
            if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
            return t.get(e)
        }
        const Ir = "user_session_token";
        var Ar = new WeakMap,
            Tr = new WeakMap,
            Rr = new WeakMap;
        const Lr = new class {
            constructor() {
                xr(this, Ar, {
                    writable: !0,
                    value: {}
                }), xr(this, Tr, {
                    writable: !0,
                    value: !1
                }), xr(this, Rr, {
                    writable: !0,
                    value: null
                })
            }
            state() {
                let e;
                return (e = this.getAndVerifyKey("stripe_user")) ? {
                    status: "user_authenticated",
                    expires: e.expires,
                    user: kr(this, Rr)
                } : (e = this.getAndVerifyKey("account_session")) ? {
                    status: "account_session_authenticated",
                    expires: e.expires,
                    userSessionExpired: kr(this, Tr)
                } : {
                    status: "unauthenticated",
                    userSessionExpired: kr(this, Tr)
                }
            }
            getApiKey(e) {
                let t;
                return e ? (t = this.getAndVerifyKey(e)) ? {
                    key: t.apiKey,
                    type: e
                } : void 0 : (t = this.getAndVerifyKey("stripe_user")) ? {
                    key: t.apiKey,
                    type: "stripe_user"
                } : (t = this.getAndVerifyKey("account_session")) ? {
                    key: t.apiKey,
                    type: "account_session"
                } : void 0
            }
            getUserRefreshToken() {
                return Sr.getItem(Ir)
            }
            persist(e, t) {
                const n = t || new Date(Date.now() + 6048e5);
                kr(this, Ar)[e.type] = {
                    apiKey: e.apiKey,
                    expires: n
                }, "stripe_user" === e.type && (Er(this, Tr, !1), Er(this, Rr, e.user || null), null != e.userSessionRefreshToken && Sr.setItem(Ir, e.userSessionRefreshToken))
            }
            setUser(e) {
                Er(this, Rr, e)
            }
            clear(e) {
                e ? (delete kr(this, Ar)[e], "stripe_user" === e && (Er(this, Tr, !0), Er(this, Rr, null), Sr.removeItem(Ir))) : (Er(this, Ar, {}), Sr.removeItem(Ir))
            }
            getAndVerifyKey(e) {
                let t = kr(this, Ar)[e];
                return t && Date.now() >= t.expires.getTime() && (delete kr(this, Ar)[e], t = void 0, "stripe_user" === e && Er(this, Tr, !0), ki()), t
            }
        };
        var Cr = s(94374);
        const Pr = {
                prod: "https://connect.stripe.com",
                preprod: "https://preprod-connect.stripe.com",
                qa: "https://qa-connect.stripe.com",
                tunnel: (0, Cr.He)("manage"),
                devbox: (0, Cr.Yl)("manage")
            },
            jr = () => (0, Oe.r9)().serviceEnvironment;
        var Ur = s(76343),
            Mr = s(17337),
            Nr = s(35455),
            Dr = s(58175),
            Br = s(84089),
            qr = s(42449);
        const Zr = (0, Ee.Kz)();
        let Fr = new Nr.C;
        const $r = ["user_session_api_key", "user_session_expires_at", "user"],
            zr = (e, t) => {
                if (e && t) return {
                    apiKeyOverride: e,
                    platformIdOverride: t
                }
            };
        s(216);
        var Hr = s(92153);
        class Vr extends Error {
            constructor(e) {
                super(e), this.name = "DataLayerAuthError"
            }
        }
        class Kr extends Error {
            constructor(e) {
                super(e), this.name = "DataLayerDisabledComponentError"
            }
        }
        const Wr = "https://r.stripe.com",
            Gr = "https://qa-r.stripe.com",
            Yr = `${Wr}/0`,
            Jr = `${Gr}/0`;
        s(16329);
        const Xr = [{
                matchers: [{
                    urlPath: /\/v1\/connect\/user/,
                    method: "GET"
                }],
                filterResponse: (e, t) => {
                    let n;
                    if (e.body) try {
                        n = JSON.parse(e.body)
                    } catch (e) {}
                    return n && "is_primary_user" in n && (Lr.setUser(n), t()), e
                }
            }, {
                matchers: [{
                    urlPath: /\/v1\/connect\/auth\/requires_external_account_verification/,
                    method: "POST"
                }, {
                    urlPath: /\/v1\/connect\/external_account_challenge/,
                    method: "POST"
                }, {
                    urlPath: /\/v1\/connect\/identity_challenge/,
                    method: "GET"
                }],
                filterResponse: e => {
                    var t;
                    let n;
                    if (e.body) try {
                        n = JSON.parse(e.body)
                    } catch (e) {}
                    return null !== (t = n) && void 0 !== t && t.key ? (Lr.persist({
                        apiKey: n.key,
                        type: "external_account"
                    }), n.key = "REDACTED", Object.assign(e, {
                        body: JSON.stringify(n)
                    })) : e
                }
            }],
            Qr = [{
                matchers: [{
                    urlPath: /\/v1\/embedded_authentication_links/,
                    method: "POST"
                }],
                filterRequest: e => {
                    let {
                        request: t
                    } = e;
                    return {
                        request: t,
                        keyType: "account_session"
                    }
                }
            }, {
                matchers: [{
                    urlPath: /\/v1\/account/,
                    method: "POST",
                    body: /external_account=/
                }, {
                    urlPath: /\/v1\/account/,
                    method: "POST",
                    body: /(external_account%5B\w+%5D=\w+&?)+&(default_currency=\w+)/
                }, {
                    urlPath: /\/v1\/account/,
                    method: "POST",
                    body: /(external_account%5Bfinancial_account%5D=)/
                }, {
                    urlPath: /\/v1\/accounts\/\w+\/external_accounts/,
                    method: "POST"
                }, {
                    urlPath: /\/v1\/accounts\/\w+\/external_accounts\/\w+/,
                    method: "POST"
                }, {
                    urlPath: /\/v1\/accounts\/\w+\/external_accounts\/\w+/,
                    method: "DELETE"
                }],
                filterRequest: e => ({ ...e,
                    keyType: "external_account"
                })
            }],
            ei = (e, t) => {
                const n = new URL(t.url).pathname,
                    {
                        method: r,
                        body: i
                    } = t;
                if (e.body) {
                    if (void 0 === i) return !1;
                    if (!("string" == typeof i ? i : i.toString()).match(e.body)) return !1
                }
                return e.method === r && ("string" == typeof e.urlPath ? n === e.urlPath : !!n.match(e.urlPath))
            };
        var ti = s(8237);
        const ni = [];
        for (const e of Object.values(Dr.OC)) {
            for (const t of Object.values(e)) ni.push(`https://${t}`);
            ni.push(Wr.replace("/0", "")), ni.push(Gr.replace("/0", ""))
        }
        const ri = ["https://qa-errors.stripe.com", "https://errors.stripe.com"],
            ii = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const n = wi();
                return (0, Hr.Gf)(e, {
                    stripeVersion: Dr.Jd,
                    stripeAccount: null == n ? void 0 : n.connectedAccountId,
                    stripeLivemode: null == n ? void 0 : n.livemode
                }, t)
            },
            oi = (0, Ee.Kz)(),
            si = async (e, t) => {
                var n;
                const {
                    id: r,
                    type: i
                } = e;
                if ((null === (n = e.request.headers) || void 0 === n || !n.Authorization) && "authedProxy" === e.requestType) {
                    let t;
                    try {
                        t = await (async () => Fr.promise)()
                    } catch (e) {
                        throw new Vr("An error occurred while initializing the data layer or authenticating in the data layer. We are interrupting the request and will not send a reply back to the frame messenger.")
                    }
                    const {
                        connectElementKey: n
                    } = e.request;
                    ((e, t, n, r) => {
                        if (zr(e, t)) return;
                        const {
                            enabledKey: i,
                            enabledOverrideFlag: o
                        } = yr._w[r];
                        if ("internal" === i) return;
                        const s = (0, Re.j)();
                        if (!(o && s[o] || n.components[i].enabled)) throw new Kr(`The ${r} component is not enabled, so we will not make authenticated requests on its behalf. We are interrupting the request and will not send a reply back to the frame messenger`)
                    })(e.metaOptions.apiKeyOverride, e.metaOptions.platformIdOverride, t, n)
                }
                try {
                    const n = await (async e => {
                            var t;
                            e.request.headers = null !== (t = e.request.headers) && void 0 !== t ? t : {};
                            const n = new URL(e.request.url),
                                r = ni.includes(n.origin) || n.origin.toLowerCase().endsWith("-mydev.dev.stripe.me"),
                                i = ri.includes(n.origin);
                            if (!r && !i) throw oi.error("The url is not in the data layer API proxy allowlist", n), new Error(`The url ${n} is not in the data layer API proxy allowlist`);
                            let o, {
                                request: s
                            } = e;
                            if (r) {
                                const e = (e => {
                                    const t = Qr.reduce(((e, t) => t.matchers.some((t => ei(t, e.request))) ? t.filterRequest(e) : e), {
                                            request: e,
                                            keyType: void 0
                                        }),
                                        {
                                            request: n,
                                            keyType: r
                                        } = t;
                                    if (n.headers || (n.headers = {}), !n.headers.Authorization && !n.headers.authorization) {
                                        const e = r,
                                            t = Lr.getApiKey(e);
                                        if (r && !t) throw new Error(`User has not stored a key of type: ${r}`);
                                        return null != t && (n.headers.Authorization = `Bearer ${null==t?void 0:t.key}`), {
                                            processedRequest: n,
                                            selectedApiKeyType: null == t ? void 0 : t.type
                                        }
                                    }
                                    return {
                                        processedRequest: n
                                    }
                                })(s);
                                s = e.processedRequest, o = e.selectedApiKeyType
                            }
                            const a = ii(s.headers || {}, !0),
                                c = new AbortController;
                            Si.set(e.id, c);
                            const u = await fetch(s.url, {
                                body: s.body,
                                headers: a,
                                method: s.method,
                                signal: c.signal
                            });
                            return u.ok || He.track("submerchant_surfaces_api_request_finished", {
                                api_request_url: e.request.url,
                                api_request_method: e.request.method,
                                api_response_code: u.status
                            }), (0, ti.$k)(u.status) && "stripe_user" === o && (Lr.clear("stripe_user"), ki()), u
                        })(e),
                        o = await n.text();
                    let s = {
                        ok: n.ok,
                        status: n.status,
                        statusText: n.statusText,
                        body: o,
                        headers: (0, Hr.xj)(n.headers)
                    };
                    return s = ((e, t, n) => t.ok ? Xr.reduce(((t, r) => r.matchers.some((t => ei(t, e))) ? r.filterResponse(t, n) : t), t) : t)(e.request, s, t), {
                        id: r,
                        type: i,
                        requestType: "response",
                        response: s
                    }
                } catch (e) {
                    return e instanceof Error ? {
                        id: r,
                        type: i,
                        requestType: "errorResponse",
                        error: e
                    } : {
                        id: r,
                        type: i,
                        requestType: "errorResponse",
                        error: new Error("An error occurred while making the request.")
                    }
                } finally {
                    Si.delete(r)
                }
            };
        var ai = s(50279);
        s(25009);
        const ci = ["width", "actualBoundingBoxLeft", "actualBoundingBoxRight", "fontBoundingBoxAscent", "fontBoundingBoxDescent", "actualBoundingBoxAscent", "actualBoundingBoxDescent"],
            ui = document.createElement("canvas").getContext("2d"),
            li = e => {
                if (!ui) return !1;
                const t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|[]\\:\";'<>?,./`~　一丁丂七丄丅丆万丈三上下丌不与あいうえおかきくけこ";
                ui.font = "14px serif";
                const n = ui.measureText(t);
                ui.font = `14px ${e}`;
                const r = ui.measureText(t);
                return !ci.every((e => r[e] === n[e]))
            },
            pi = (0, ye.tj)(),
            di = pi ? new URL(pi).hostname : "";
        let fi = {
            platformLoadedFont: "",
            iframeLoadedFont: "",
            availableInIframe: !1,
            platformHostName: ""
        };
        window.__stripeGlobals = {
            apolloCache: void 0
        };
        const hi = (0, Ee.Kz)();
        let mi = !0;

        function gi(e) {
            mi = e
        }
        let yi, vi = {};

        function _i(e) {
            vi = e, (e => {
                ze = e
            })(vi), Be.instance.observabilityAuthMetadata = vi
        }
        const bi = e => {
                yi = e
            },
            wi = () => yi,
            Si = new Map;
        let xi = [];
        const Ei = (e, t) => {
                let {
                    id: n,
                    type: r
                } = t;
                const i = {
                    id: n,
                    type: r,
                    requestType: "authState",
                    response: Lr.state()
                };
                e.postMessage(i)
            },
            ki = () => {
                const e = {
                    type: Se,
                    requestType: "authStateChanged",
                    data: Lr.state(),
                    event: !0
                };
                for (const t of xi) {
                    const {
                        port: n
                    } = t;
                    n.postMessage(e), Oi && "openPopupAndWaitForAuth" === Oi.requestType && Ei(n, {
                        id: Oi.frameRequestId,
                        type: Se,
                        requestType: "authState"
                    })
                }
            };
        let Oi;
        const Ii = e => {
                if (Oi) {
                    const t = {
                        id: Oi.frameRequestId,
                        type: Se,
                        requestType: "popupComplete",
                        response: "complete"
                    };
                    e.postMessage(t)
                }
            },
            Ai = (e, t, r) => (xi.push(e), async i => {
                const {
                    data: o
                } = i, {
                    port: s
                } = e;
                if (!xe(o)) return void hi.warn("Received an unknown message on the message channel", JSON.parse(JSON.stringify(o)));
                const {
                    serviceEnvironment: a
                } = (0, Oe.r9)();
                switch (o.requestType) {
                    case "abort":
                        {
                            const e = Si.get(o.id);e && e.abort();
                            break
                        }
                    case "analyticsEvent":
                        Be.instance.processEvent(o.analyticsEvent);
                        break;
                    case "errorReport":
                        {
                            const e = (0, n.Fq)(o.errorPayload.serializableError);new wr(a, t, r).captureException({
                                error: e,
                                connectElement: o.errorPayload.connectElement,
                                tags: Object.assign({}, vi, o.errorPayload.tags),
                                extra: o.errorPayload.extra,
                                owner: o.errorPayload.owner,
                                level: o.errorPayload.level
                            });
                            break
                        }
                    case "metricsEvent":
                        {
                            const e = { ...o.metricsPayload,
                                host_env: "prod" === a ? "prod" : "qa"
                            };await fetch("prod" === a ? Yr : Jr, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded"
                                },
                                body: new URLSearchParams({ ...vi,
                                    ...e
                                }).toString()
                            });
                            break
                        }
                    case "init":
                    case "initresponse":
                    case "logIframeLoadedFontResponse":
                    case "claimAccountSessionResponse":
                    case "response":
                    case "errorResponse":
                    case "fetchErrorResponse":
                    case "popupAuthenticationComplete":
                    case "popupComplete":
                    case "popupLoaded":
                    case "popupReady":
                    case "popupDoRefresh":
                    case "authStateChanged":
                    case "authState":
                        hi.error("The data layer received an invalid event type", o);
                        break;
                    case "logIframeLoadedFontRequest":
                        {
                            const e = (e => {
                                let {
                                    id: t,
                                    type: n,
                                    request: {
                                        platformLoadedFont: r,
                                        fontFamily: i
                                    }
                                } = e;
                                const o = i && (e => {
                                        if (!e) return "serif";
                                        const t = Array.from(e.matchAll(/(?:((?:[^,"';]|"[^"]*"|'[^']*')+)(?:,\s*|$))/g)).map((e => e[1]));
                                        return (null == t ? void 0 : t.find((e => li(e)))) || "serif"
                                    })(i),
                                    s = {
                                        platformLoadedFont: r,
                                        iframeLoadedFont: o,
                                        availableInIframe: !!r && li(r),
                                        platformHostName: di
                                    };
                                return r && o && !(0, ai.Z)(s, fi) && (He.track("connect_js_font_loaded", s), fi = s), {
                                    id: t,
                                    type: n,
                                    requestType: "logIframeLoadedFontResponse",
                                    response: s
                                }
                            })(o);s.postMessage(e);
                            break
                        }
                    case "claimAccountSessionRequest":
                        {
                            const e = () => {
                                    He.track("submerchant_surfaces_user_key_received", {
                                        method: "refresh_token"
                                    })
                                },
                                t = await (async (e, t) => {
                                    const {
                                        request: n,
                                        id: r,
                                        type: i
                                    } = e;
                                    try {
                                        n.setNewKey && (Fr = new Nr.C);
                                        const e = await async function(e) {
                                            let {
                                                clientSecret: t,
                                                publishableKey: n,
                                                apiHost: r,
                                                merchantIdOverride: i,
                                                livemodeOverride: o,
                                                apiKeyOverride: s,
                                                platformIdOverride: a,
                                                isV2Session: c,
                                                hostApp: u
                                            } = e;
                                            const l = zr(s, a);
                                            return l ? c ? {
                                                api_key: l.apiKeyOverride,
                                                platform_id: l.platformIdOverride,
                                                livemode: null != o && o,
                                                account_id: null != i ? i : "",
                                                is_v2_account_session: !1,
                                                user_session_api_key: "",
                                                user_session_expires_at: 0,
                                                user: null,
                                                __typename: "OpenapiConnectEmbeddedMethodAccountSessionClaimMethodAccountSessionClaim",
                                                analytics_rb_event_id: "",
                                                api_key_expiry: 0,
                                                application_id: "",
                                                application_name: "",
                                                platform_nickname: "",
                                                platform_business_name: "",
                                                platform_country: "",
                                                platform_support_email: "",
                                                stripethirdparty_base_url: "",
                                                client_secret: "",
                                                components: {
                                                    __typename: "OpenapiConnectEmbeddedAccountSessionClaimComponents",
                                                    account_onboarding: {
                                                        __typename: "OpenapiConnectEmbeddedAccountConfigClaim",
                                                        enabled: !0,
                                                        features: {
                                                            __typename: "OpenapiConnectEmbeddedAccountFeaturesClaim",
                                                            external_account_collection: !1,
                                                            disable_stripe_user_authentication: null
                                                        }
                                                    }
                                                },
                                                treatments: [],
                                                read_only: !1,
                                                connect_brand_accent_color: "",
                                                connect_express_color: "",
                                                encoded_api_key_token: "",
                                                flags: {},
                                                id: "",
                                                support_site_base_url: "",
                                                merchant_data: {
                                                    __typename: "OpenapiConnectEmbeddedAccountSessionClaimMerchantData",
                                                    business_name: "",
                                                    country: "",
                                                    connected_account_details_submitted: !1,
                                                    default_currency: "",
                                                    has_express_dashboard_access: !1,
                                                    has_rft_in_livemode: !1,
                                                    has_standard_dashboard_access: !1,
                                                    stripe_owns_loss_liability: !1,
                                                    stripe_owns_onboarding: !1,
                                                    stripe_owns_pricing: !1,
                                                    is_controlled_by_single_platform: !0
                                                },
                                                account_session_id: "no_account_session_id"
                                            } : async function(e) {
                                                let {
                                                    apiHost: t,
                                                    platformId: n,
                                                    apiKey: r,
                                                    merchantIdOverride: i,
                                                    livemodeOverride: o
                                                } = e;
                                                const s = {
                                                    Authorization: `Bearer ${r}`,
                                                    "Content-Type": "application/x-www-form-urlencoded",
                                                    [Br.QF]: `${Dr.Jd};`
                                                };
                                                i && (s[Br.a6] = i), void 0 !== o && (s[Br.xP] = o.toString());
                                                const a = `https://${t}/v1/retrieve_embedded_flags?platform_id=${encodeURIComponent(n)}`,
                                                    c = fetch(new URL(a), {
                                                        method: "GET",
                                                        headers: s
                                                    }).then((e => (0, Mr.HV)(e))),
                                                    u = await c;
                                                u.api_key = r;
                                                const l = new Date;
                                                return l.setDate(l.getDate() + 365), u.api_key_expiry = l.getDate() / 1e3, u
                                            }({
                                                apiHost: r,
                                                platformId: l.platformIdOverride,
                                                apiKey: l.apiKeyOverride,
                                                merchantIdOverride: i,
                                                livemodeOverride: o
                                            }) : async function(e) {
                                                var t;
                                                let {
                                                    apiHost: n,
                                                    publishableKey: r,
                                                    clientSecret: i,
                                                    merchantIdOverride: o,
                                                    livemodeOverride: s,
                                                    hostApp: a
                                                } = e;
                                                const c = {
                                                    "Content-Type": "application/x-www-form-urlencoded"
                                                };
                                                return o && (c[Br.a6] = o), void 0 !== s && (c[Br.xP] = s.toString()), fetch(`https://${n}/v1/account_sessions/claim`, {
                                                    method: "POST",
                                                    headers: c,
                                                    body: (0, Ur.Q)({
                                                        client_secret: i,
                                                        user_session_refresh_token: null !== (t = Lr.getUserRefreshToken()) && void 0 !== t ? t : void 0,
                                                        key: r,
                                                        _stripe_version: Dr.Jd,
                                                        analytics_only_host_app: a
                                                    })
                                                }).then((e => (0, Mr.HV)(e)))
                                            }({
                                                apiHost: r,
                                                publishableKey: n,
                                                clientSecret: t,
                                                merchantIdOverride: i,
                                                livemodeOverride: o,
                                                hostApp: u
                                            })
                                        }(n);
                                        void 0 !== e.livemode && gi(e.livemode);
                                        const o = (e => {
                                            const {
                                                account_id: t,
                                                platform_id: n,
                                                livemode: r,
                                                is_v2_account_session: i,
                                                merchant_data: o
                                            } = e, {
                                                country: s,
                                                has_express_dashboard_access: a,
                                                has_standard_dashboard_access: c,
                                                stripe_owns_loss_liability: u,
                                                stripe_owns_onboarding: l,
                                                stripe_owns_pricing: p
                                            } = o || {};
                                            return {
                                                connected_account_id: t,
                                                merchant_id: t,
                                                platform_id: n,
                                                livemode: r,
                                                country: null != s ? s : "undefined",
                                                hasExpressDashboardAccess: null != a ? a : "undefined",
                                                hasStandardDashboardAccess: null != c ? c : "undefined",
                                                isMerchant: !!o,
                                                isV2AccountSession: i,
                                                stripeOwnsLossLiability: null != u ? u : "undefined",
                                                stripeOwnsOnboarding: null != l ? l : "undefined",
                                                stripeOwnsPricing: null != p ? p : "undefined"
                                            }
                                        })(e);
                                        if (_i(o), e.user_session_api_key) {
                                            const n = String(Lr.getUserRefreshToken());
                                            Lr.persist({
                                                apiKey: e.user_session_api_key,
                                                type: "stripe_user",
                                                userSessionRefreshToken: n,
                                                user: e.user || void 0
                                            }, e.user_session_expires_at ? new Date(1e3 * e.user_session_expires_at) : void 0), t()
                                        }
                                        return Lr.persist({
                                            apiKey: e.api_key || "no_api_key",
                                            type: "account_session"
                                        }), $r.forEach((t => {
                                            delete e[t]
                                        })), bi({
                                            connectedAccountId: e.account_id,
                                            livemode: e.livemode
                                        }), Fr.resolve(e), {
                                            id: r,
                                            type: i,
                                            requestType: "claimAccountSessionResponse",
                                            response: e
                                        }
                                    } catch (e) {
                                        if (_i({}), e instanceof Ur.A) {
                                            const {
                                                error: t
                                            } = e;
                                            t.httpStatus && t.httpStatus >= 400 && t.httpStatus < 500 && Zr.warn("Error when authenticating in the FrameMessenger", t.message)
                                        }
                                        return Fr.reject(e), e instanceof Ur.A ? {
                                            id: r,
                                            type: i,
                                            requestType: "fetchErrorResponse",
                                            error: (0, qr.SR)(e)
                                        } : {
                                            id: r,
                                            type: i,
                                            requestType: "errorResponse",
                                            error: e
                                        }
                                    }
                                })(o, e);
                            if (s.postMessage(t), "errorResponse" !== t.requestType && (ki(), window.performance)) {
                                const e = window.performance.getEntriesByName(`https://${o.request.apiHost}/v1/account_sessions/claim`).at(-1);
                                e && He.track("submerchant_surfaces_account_session_claim", {
                                    duration: Math.ceil(e.duration)
                                })
                            }
                            break
                        }
                    case "authedProxy":
                    case "proxy":
                        {
                            const e = () => {
                                    ki()
                                },
                                t = await si(o, e);s.postMessage(t);
                            break
                        }
                    case "authStateRequest":
                        Ei(s, o);
                        break;
                    case "logout":
                        {
                            const e = await async function(e) {
                                const {
                                    request: t
                                } = e, {
                                    clearUserSessionOnly: n = !1,
                                    merchantIdOverride: r,
                                    livemodeOverride: i
                                } = t, o = Lr.getApiKey("stripe_user");
                                let s, a = !0;
                                if (o) {
                                    const {
                                        serviceEnvironment: e
                                    } = (0, Oe.r9)(), t = `https://${(0,Dr.Tu)(e)}/v1/connect/session`;
                                    let n = {
                                        Authorization: `Bearer ${o.key}`,
                                        "Content-Type": "application/x-www-form-urlencoded"
                                    };
                                    n = ii(n), r && (n[Br.a6] = r), void 0 !== i && (n[Br.xP] = i.toString());
                                    const c = new URL(t),
                                        u = await fetch(c, {
                                            method: "DELETE",
                                            headers: n
                                        });
                                    try {
                                        await (0, Mr.HV)(u)
                                    } catch (e) {
                                        s = e;
                                        const t = s.error.httpStatus;
                                        401 !== t && 404 !== t && (a = !1)
                                    }
                                }
                                return a && Lr.clear(n ? "stripe_user" : void 0), {
                                    invalidated: a,
                                    error: s ? (0, qr.SR)(s) : void 0
                                }
                            }(o);e.invalidated && ki(),
                            e.error ? s.postMessage({
                                id: o.id,
                                type: o.type,
                                requestType: "fetchErrorResponse",
                                error: e.error
                            }) : Ei(s, o);
                            break
                        }
                    case "sentryTags":
                        he("setTags", o.tags);
                        break;
                    case "openPopupAndWaitForComplete":
                    case "openPopupAndWaitForAuth":
                        ((e, t) => {
                            const {
                                id: n,
                                requestType: r
                            } = t;
                            Oi = {
                                frameRequestId: n,
                                requestType: r,
                                authCompleteDeferredPromise: new Nr.C
                            }, "user_authenticated" !== Lr.state().status && "openPopupAndWaitForComplete" !== r || Oi.authCompleteDeferredPromise.resolve();
                            const i = new AbortController;
                            Si.set(n, i), i.signal.addEventListener("abort", (() => Ii(e)), {
                                once: !0
                            })
                        })(s, o);
                        break;
                    default:
                        (0, we.U)(o, "Unknown message event type received by the data layer")
                }
            });
        window.addEventListener("message", (e => {
            if (!xe(e.data)) return;
            const t = function(e) {
                    const t = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr(),
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "MISSING_ENV_VAR".SERVICE_ENVIRONMENT,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ie.X;
                        return Pr[(0, Cr.cx)(e, t, n)]
                    }();
                    return t === e
                }(e.origin),
                n = (0, ye.pR)(),
                r = window.origin === e.origin,
                i = e.origin === n;
            if (t || r || i) switch (e.data.requestType) {
                case "init":
                    {
                        if (!r && !i) return void hi.error("The init message should come from the platform or the UI layer only");
                        if (0 === e.ports.length) return void hi.error("Did not receive a reply port in init message");
                        const [t, n] = e.ports,
                        o = {
                            port: t,
                            origin: e.origin
                        },
                        {
                            releaseCandidate: s,
                            isAnalyticsDisabled: a
                        } = e.data;t.onmessage = Ai(o, s, a);
                        const c = {
                            type: Se,
                            requestType: "initresponse"
                        };o.port.postMessage(c),
                        null != n ? (n.start(), _e.initServer({
                            transport: (0, be.Z)(n)
                        })) : hi.error('SDK port not provided in "init" message');
                        break
                    }
                case "popupAuthenticationComplete":
                    {
                        if (!t) return void hi.error("Received an auth event from an invalid origin", e.origin);
                        if (null == e.data.apiKey) return void hi.error("Authentication event was missing API key");
                        const n = (e, t) => {
                            var n;
                            null != e && (Lr.persist({
                                apiKey: e,
                                type: "stripe_user",
                                userSessionRefreshToken: t
                            }), He.track("submerchant_surfaces_user_key_received", {
                                method: "popup"
                            }), ki()), null === (n = Oi) || void 0 === n || n.authCompleteDeferredPromise.resolve()
                        };
                        if ("user_authenticated" !== Lr.state().status) {
                            const t = Lr.getApiKey("account_session");
                            (async function(e, t) {
                                const {
                                    apiKey: n,
                                    sessionCreatedForEmbedded: r
                                } = t, {
                                    serviceEnvironment: i
                                } = (0, Oe.r9)(), o = `https://${(0,Dr.Tu)(i)}/v1/embedded/user_authed_key`;
                                let s = {
                                    Authorization: `Bearer ${n}`,
                                    "Content-Type": "application/x-www-form-urlencoded"
                                };
                                s = ii(s);
                                const a = new URL(o),
                                    c = await fetch(a, {
                                        method: "POST",
                                        headers: s,
                                        body: (0, Ur.Q)({
                                            embedded_api_key: e,
                                            session_created_from_embedded: r
                                        })
                                    }),
                                    u = await (0, Mr.HV)(c);
                                return {
                                    userAuthedEmbeddedKey: u.embedded_session_api_key,
                                    refreshToken: u.embedded_user_session_refresh_token
                                }
                            })((null == t ? void 0 : t.key) || "", e.data).then((e => {
                                n(e.userAuthedEmbeddedKey, e.refreshToken)
                            })).catch((e => {
                                var t;
                                xi.forEach((t => {
                                    let {
                                        port: n
                                    } = t;
                                    return n.postMessage({
                                        id: Oi.frameRequestId,
                                        type: Se,
                                        requestType: "fetchErrorResponse",
                                        error: (0, qr.SR)(e)
                                    })
                                })), null === (t = Oi) || void 0 === t || t.authCompleteDeferredPromise.reject(e)
                            }))
                        } else n();
                        break
                    }
                case "popupComplete":
                    if (!t) return void hi.error("Received an auth event from an invalid origin", e.origin);
                    Oi ? Oi.authCompleteDeferredPromise.promise.then((() => {
                        xi.forEach((e => {
                            let {
                                port: t
                            } = e;
                            return Ii(t)
                        }))
                    })).catch((() => {})) : xi.forEach((e => {
                        let {
                            port: t
                        } = e;
                        return Ii(t)
                    }));
                    break;
                case "popupReady":
                    {
                        const e = {
                            type: Se,
                            requestType: "popupReady",
                            event: !0,
                            data: void 0
                        };
                        return void xi.forEach((t => {
                            let {
                                port: n
                            } = t;
                            n.postMessage(e)
                        }))
                    }
                case "popupLoaded":
                    {
                        const e = {
                            type: Se,
                            requestType: "popupLoaded",
                            event: !0,
                            data: void 0
                        };
                        return void xi.forEach((t => {
                            let {
                                port: n
                            } = t;
                            n.postMessage(e)
                        }))
                    }
                case "popupDoRefresh":
                    {
                        const e = {
                            type: Se,
                            requestType: "popupDoRefresh",
                            event: !0,
                            data: void 0
                        };
                        return void xi.forEach((t => {
                            let {
                                port: n
                            } = t;
                            n.postMessage(e)
                        }))
                    }
                default:
                    hi.error("Unexpected frame message", e.data)
            } else hi.error("Received a message from an invalid origin", e.origin)
        }))
    })()
})();
//# sourceMappingURL=dataLayer-49fd7c829cccddae4180.js.map