"use strict";
(self.webpackChunkqstns = self.webpackChunkqstns || []).push([
    [4370], {
        24370: (e, s, a) => {
            a.r(s), a.d(s, {
                default: () => b
            });
            var n = a(49198),
                r = a(90109),
                u = a(22193),
                t = a(42960),
                l = a(37209);
            const v = [{
                    value: "Surveys",
                    key: `/${l.bw.discover}/${l.bw.survey}`
                }, {
                    value: "Businesses",
                    key: `/${l.bw.discover}/${l.bw.businesses}`
                }],
                o = {
                    value: "For You",
                    key: `/${l.bw.discover}/${l.bw.forYou}`
                };
            var c = a(17172),
                i = a(85582);
            const b = () => {
                const e = (0, t.GV)((e => {
                        var s;
                        return null === (s = e.profile.profileData) || void 0 === s ? void 0 : s.onboarding
                    })),
                    s = (0, r.Zp)(),
                    a = (0, t.jL)(),
                    [l, b] = (0, n.useState)(null),
                    {
                        pathname: d
                    } = (0, r.zy)();
                return (0, n.useEffect)((() => {
                    e && Object.keys(e).length > 0 && b([...v, o])
                }), [e]), (0, i.jsxs)("div", {
                    className: "p-7",
                    children: [(0, i.jsx)(u.W, {
                        handleTabClick: e => {
                            a((0, c.kZ)()), a((0, c.J$)()), s(e)
                        },
                        navItems: l || v,
                        activeTab: d
                    }), (0, i.jsx)(r.sv, {})]
                })
            }
        }
    }
]);
//# sourceMappingURL=4370.e3e887fc.chunk.js.map