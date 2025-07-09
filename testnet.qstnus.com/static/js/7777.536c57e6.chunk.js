"use strict";
(self.webpackChunkqstns = self.webpackChunkqstns || []).push([
    [7777], {
        44421: (e, t, s) => {
            s.d(t, {
                pL: () => K,
                Fq: () => d,
                fz: () => x,
                Sk: () => i,
                e0: () => X,
                BA: () => q
            });
            var r = s(47673),
                a = s(85582);
            const i = e => {
                let {
                    discoveredSurveys: t,
                    pending: s,
                    pendingRows: i
                } = e;
                return (0, a.jsxs)("div", {
                    className: "xs:grid-cols-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                    children: [t.map((e => (0, a.jsx)("div", {
                        className: "flex text-center",
                        children: (0, a.jsx)(K, {
                            data: e
                        })
                    }, `${e.id}`))), s && Array.from({
                        length: i
                    }).map(((e, t) => (0, a.jsx)(r.EA, {
                        classNames: "min-h-[189px]"
                    }, t)))]
                })
            };
            var l = s(49198),
                n = s(18409),
                o = s(21495);
            const d = e => {
                let {
                    title: t = "",
                    description: s = "",
                    icon: r
                } = e;
                const {
                    theme: i
                } = (0, n.DP)();
                return (0, a.jsx)("div", {
                    className: "flex h-full w-full items-center justify-center  rounded-2xl border border-solid py-10",
                    style: {
                        borderColor: o.k[i].headerNavActive
                    },
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-3",
                        children: [(0, a.jsx)("div", {
                            style: {
                                background: o.k[i].input
                            },
                            className: "flex h-12 w-12 items-center justify-center rounded-full",
                            children: r
                        }), (0, a.jsx)("div", {
                            className: "text-base font-medium",
                            children: t
                        }), (0, a.jsx)("div", {
                            className: `font-regular text-sm ${"dark"===i?"text-zinc-400":"text-zinc-600"} `,
                            children: s
                        })]
                    })
                })
            };
            var c = s(16547),
                u = s(94273),
                m = s(13290);
            const p = "SurveyMarketplace_numOfSurveys__I2fj-",
                v = "SurveyMarketplace_slider__20JoV",
                x = e => {
                    let {
                        label: t,
                        defaultPageSize: s,
                        resetStore: r,
                        updateNumSlider: i
                    } = e;
                    const [d, x] = (0, l.useState)(s), {
                        theme: g
                    } = (0, n.DP)(), f = (0, m.d7)(d, 1e3);
                    return (0, l.useEffect)((() => {
                        r(), i(f)
                    }), [f]), (0, a.jsxs)("div", {
                        children: [(0, a.jsxs)("p", {
                            style: {
                                marginBottom: "7px",
                                fontSize: "12px"
                            },
                            children: [t || "Number of Surveys ", " ", d ? `- ${d}` : ""]
                        }), (0, a.jsxs)("div", {
                            style: {
                                background: o.k[g].input,
                                color: "#71717A",
                                borderRadius: "12px",
                                padding: "11px 16px",
                                fontSize: "14px"
                            },
                            className: (0, c.default)(p, "flex items-center gap-4"),
                            children: [(0, a.jsx)("p", {
                                style: {
                                    margin: "0",
                                    color: "dark" === g ? "#ffffff" : "#09090B"
                                },
                                children: 1
                            }), (0, a.jsx)(u.A, {
                                size: "1",
                                value: [d],
                                min: 1,
                                max: 100,
                                step: 1,
                                onValueChange: e => {
                                    x(e[0])
                                },
                                className: v
                            }), (0, a.jsx)("p", {
                                style: {
                                    margin: "0"
                                },
                                children: "100"
                            })]
                        })]
                    })
                };
            var g = s(25083),
                f = s(94669),
                h = s(60237),
                y = s(78384),
                b = s(99566),
                j = "Progress",
                N = 100,
                [S, k] = (0, y.A)(j),
                [w, C] = S(j),
                z = l.forwardRef(((e, t) => {
                    const {
                        __scopeProgress: s,
                        value: r = null,
                        max: i,
                        getValueLabel: l = D,
                        ...n
                    } = e;
                    !i && 0 !== i || I(i) || console.error(`Invalid prop \`max\` of value \`${`${i}`}\` supplied to \`${"Progress"}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
                    const o = I(i) ? i : N;
                    null === r || F(r, o) || console.error(function(e, t) {
                        return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`
                    }(`${r}`, "Progress"));
                    const d = F(r, o) ? r : null,
                        c = $(d) ? l(d, o) : void 0;
                    return (0, a.jsx)(w, {
                        scope: s,
                        value: d,
                        max: o,
                        children: (0, a.jsx)(b.sG.div, {
                            "aria-valuemax": o,
                            "aria-valuemin": 0,
                            "aria-valuenow": $(d) ? d : void 0,
                            "aria-valuetext": c,
                            role: "progressbar",
                            "data-state": A(d, o),
                            "data-value": d ? ? void 0,
                            "data-max": o,
                            ...n,
                            ref: t
                        })
                    })
                }));
            z.displayName = j;
            var T = "ProgressIndicator",
                P = l.forwardRef(((e, t) => {
                    const {
                        __scopeProgress: s,
                        ...r
                    } = e, i = C(T, s);
                    return (0, a.jsx)(b.sG.div, {
                        "data-state": A(i.value, i.max),
                        "data-value": i.value ? ? void 0,
                        "data-max": i.max,
                        ...r,
                        ref: t
                    })
                }));

            function D(e, t) {
                return `${Math.round(e/t*100)}%`
            }

            function A(e, t) {
                return null == e ? "indeterminate" : e === t ? "complete" : "loading"
            }

            function $(e) {
                return "number" === typeof e
            }

            function I(e) {
                return $(e) && !isNaN(e) && e > 0
            }

            function F(e, t) {
                return $(e) && !isNaN(e) && e <= t && e >= 0
            }
            P.displayName = T;
            var _ = z,
                L = P;
            const M = "Cards_progressRoot__6s73S",
                O = "Cards_progressIndicator__39flJ",
                B = e => {
                    let {
                        value: t,
                        max: s,
                        isInfinite: r
                    } = e;
                    const i = t / s * 100,
                        d = isNaN(i) ? 0 : i,
                        [c, u] = (0, l.useState)(0),
                        {
                            theme: m
                        } = (0, n.DP)();
                    return (0, l.useEffect)((() => {
                        const e = setTimeout((() => u(d)), 500);
                        return () => clearTimeout(e)
                    }), [d]), (0, a.jsx)(_, {
                        className: M,
                        value: c,
                        style: {
                            background: o.k[m].headerNavActive
                        },
                        children: (0, a.jsx)(L, {
                            className: O,
                            style: {
                                transform: `translateX(-${100-c}%)`,
                                background: r ? "#4287f5" : d < 33 ? "#C084FC" : d < 66 ? "#D6AB3D" : "#3DD69E"
                            }
                        })
                    })
                };
            var E = s(42960),
                V = s(37209),
                R = s(87452),
                G = s(8071);
            const K = e => {
                    let {
                        data: {
                            logo: t,
                            id: s,
                            title: i,
                            isFree: l,
                            isPremium: d,
                            isQuiz: u,
                            businessName: p,
                            reward: v
                        },
                        isLanding: x = !1
                    } = e;
                    const y = (0, E.GV)((e => e.profile.profileData)),
                        b = (0, E.GV)((e => {
                            var t, s, r;
                            return null === (t = e.utils) || void 0 === t || null === (s = t.configs) || void 0 === s || null === (r = s.onboarding) || void 0 === r ? void 0 : r.id
                        })),
                        {
                            theme: j
                        } = (0, n.DP)(),
                        {
                            navigateWithQuery: N
                        } = (0, m.hq)(),
                        S = (null === b || void 0 === b ? void 0 : b.toLocaleLowerCase()) === (null === s || void 0 === s ? void 0 : s.toLocaleLowerCase()),
                        k = v && v.participantLimit ? v.participantCompleted / v.participantLimit * 100 : 0;
                    return console.log("DataCard", v), (0, a.jsxs)("div", {
                        onClick: () => {
                            (null === y || void 0 === y ? void 0 : y.type) === G.C.user ? N(`/${V.bw.user}/${V.bw.surveyFilling}/${s}`) : x && !y && N(`/${V.bw.ghost}/${V.bw.surveyFilling}/${s}`)
                        },
                        className: (0, c.default)("rounded-xl w-full border border-solid p-4 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800", (null === y || void 0 === y ? void 0 : y.type) !== G.C.user && y ? "" : "hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer"),
                        children: [(0, a.jsxs)("div", {
                            className: "m-0 w-full bg-transparent p-0 text-left flex flex-col gap-4",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, a.jsxs)("div", {
                                    className: "relative mr-4",
                                    children: [t ? (0, a.jsx)(r.eu, {
                                        imgSrc: t,
                                        scale: "lg"
                                    }) : u ? (0, a.jsx)(h.Zs, {
                                        mode: j
                                    }) : (0, a.jsx)(h.y$, {
                                        mode: j
                                    }), (0, a.jsx)("div", {
                                        className: (0, c.default)("absolute left-[28px] top-[28px] inline-flex items-start justify-start gap-2.5 rounded-full border-2 border-solid border-white dark:border-zinc-800 p-1", d ? "bg-purple-500" : "bg-zinc-200 dark:bg-zinc-700"),
                                        children: (0, a.jsx)(r.FI.DiamondIcon, {
                                            color: d || "dark" === j ? "white" : "black"
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "grid flex flex-col flex-1",
                                    children: [(0, a.jsx)("p", {
                                        className: "text-sm font-semibold text-zinc-900 dark:text-white truncate",
                                        children: i
                                    }), p && (0, a.jsx)("p", {
                                        className: "text-xs font-normal text-zinc-400 truncate",
                                        children: S ? "qstn.us" : p
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "flex items-center justify-center",
                                    children: (0, a.jsx)(r.FI.ArrowRightIcon, {
                                        width: 20,
                                        height: 20,
                                        stroke: "#71717A"
                                    })
                                })]
                            }), v && (0, a.jsx)("div", {
                                className: "flex gap-3",
                                children: v.amount && v.currencyCode ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("p", {
                                        className: "text-sm font-normal text-zinc-400",
                                        children: "Reward"
                                    }), (0, a.jsx)("img", {
                                        src: (0, R.Og)(v),
                                        width: "20",
                                        height: "20"
                                    }), (0, a.jsx)("p", {
                                        className: "text-sm font-semibold text-zinc-900 dark:text-white",
                                        children: `${"NFT"!==v.currencyCode?(0,g.A)(v.amount).toFormatExtended(18):""} ${v.currencyCode}`
                                    })]
                                }) : (0, a.jsx)("p", {
                                    className: "text-sm font-semibold text-zinc-900 dark:text-white",
                                    children: "No reward"
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "w-full h-px bg-zinc-300 dark:bg-zinc-800 my-4"
                        }), v && (0, a.jsxs)("div", {
                            className: "flex flex-col gap-2 items-start",
                            children: [(0, a.jsxs)("p", {
                                className: "text-xs text-zinc-400",
                                children: [l ? `${v.participantLimit} of \u221e ` : v.participantLimit > 1e6 ? `${v.participantCompleted} of \u221e ` : `${v.participantCompleted} of ${v.participantLimit} `, (0, a.jsx)("span", {
                                    className: "text-semibold text-sm",
                                    style: {
                                        color: l ? "#4287f5" : k < 33 || 0 === v.participantCompleted ? "#C084FC" : k < 66 ? "#D6AB3D" : "#3DD69E"
                                    },
                                    children: "completed"
                                })]
                            }), (0, a.jsx)(B, {
                                value: null === v || void 0 === v ? void 0 : v.participantCompleted,
                                max: v.participantLimit,
                                isInfinite: l
                            }), x && (!y || (null === y || void 0 === y ? void 0 : y.type) === G.C.user) && (0, a.jsx)("div", {
                                style: {
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                children: (0, a.jsxs)(f.$, {
                                    style: {
                                        width: "100%",
                                        marginTop: "16px",
                                        boxSizing: "border-box",
                                        borderRadius: "12px",
                                        color: o.k[j].buttonText,
                                        background: o.k[j].button,
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        lineHeight: "24px"
                                    },
                                    size: "4",
                                    children: ["Complete survey", (0, a.jsx)(r.FI.ArrowRightIcon, {})]
                                })
                            })]
                        })]
                    })
                },
                q = e => {
                    let {
                        tags: t,
                        selectedTags: s,
                        resetSelectedTags: i,
                        setSelectedTags: n
                    } = e;
                    const [o, d] = (0, l.useState)(s);
                    return (0, a.jsx)(r.uh, {
                        label: "Category",
                        placeholder: "All",
                        tags: t,
                        selectedTags: o,
                        handleSelectAllTag: () => {
                            d((e => e.length === t.length ? [] : t))
                        },
                        handleSelectTag: e => {
                            d((t => {
                                if (t.some((t => {
                                        let {
                                            id: s
                                        } = t;
                                        return s === e.id
                                    }))) {
                                    return t.filter((t => t.id !== e.id))
                                }
                                return [...t, e]
                            }))
                        },
                        confirmButtonClick: () => {
                            i(), n(o)
                        }
                    })
                },
                X = e => {
                    let {
                        emptyText: t,
                        pending: s,
                        surveys: l,
                        totalSurveys: o = 0,
                        pageNumber: c,
                        pageSize: u,
                        showNextPage: m
                    } = e;
                    const {
                        theme: p
                    } = (0, n.DP)(), v = 1 === c || o - l.length > u ? u : o - l.length;
                    return (0, a.jsx)("div", {
                        className: "mt-3",
                        children: 0 !== l.length || s ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(i, {
                                discoveredSurveys: l,
                                pending: s,
                                pendingRows: v
                            }), l.length > 0 && l.length < (null !== o && void 0 !== o ? o : 0) && !s && (0, a.jsx)("div", {
                                className: "flex w-full mt-2 justify-center",
                                children: (0, a.jsx)(f.$, {
                                    disabled: s,
                                    onClick: m,
                                    size: "3",
                                    style: {
                                        backgroundColor: "#A855F7",
                                        borderRadius: "12px",
                                        padding: "19px 16px",
                                        fontSize: "12px",
                                        cursor: "pointer"
                                    },
                                    children: (0, a.jsx)("p", {
                                        className: "text-sm font-semibold",
                                        children: "Show More"
                                    })
                                })
                            })]
                        }) : (0, a.jsx)(d, {
                            title: t,
                            icon: (0, a.jsx)(r.FI.AnouncementIcon, {
                                height: 24,
                                width: 24,
                                stroke: "dark" === p ? "#fff" : "#333"
                            }),
                            actionTitle: "Go to surveys"
                        })
                    })
                }
        },
        34228: (e, t, s) => {
            s.d(t, {
                MN: () => d,
                Tk: () => l,
                u: () => o,
                z8: () => n
            });
            var r = s(23804),
                a = s(20693);
            const i = Object.keys(r.hT).map((e => {
                    const t = e;
                    if (r.XE[t]) return {
                        key: r.XE[t],
                        value: r.XE[t]
                    }
                })),
                l = [{
                    key: "asc",
                    value: "Ascending"
                }, {
                    key: "desc",
                    value: "Descending"
                }],
                n = [{
                    key: "all",
                    value: "All"
                }, {
                    key: "premium",
                    value: "Premium"
                }, {
                    key: "free",
                    value: "Free"
                }],
                o = [{
                    key: "all",
                    value: "All"
                }, {
                    key: "virtual",
                    value: "QSTN"
                }, {
                    key: "stripe",
                    value: "Stripe"
                }, ...Object.values(r.hT).map((e => ({
                    key: e.toString(),
                    value: r.oj[e]
                })))],
                d = [{
                    key: "all",
                    value: "All"
                }, {
                    key: "NFT",
                    value: "NFT"
                }, {
                    key: "USD",
                    value: "USD"
                }, ...(0, a.Vo)(i)]
        },
        47777: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => f
            });
            var r = s(49198),
                a = s(3932),
                i = s(47673),
                l = s(44421),
                n = s(13290),
                o = s(42960),
                d = s(17172),
                c = s(12451),
                u = s(94913);
            const m = () => {
                const e = (0, o.GV)((e => e.discoverSurvey.surveyPayload)),
                    {
                        statuses: t,
                        search: s,
                        pageOrder: a,
                        pageOrderBy: i,
                        pageSize: l,
                        isPremium: n,
                        tagsIds: m,
                        pageNumber: p,
                        chainId: v,
                        currencyCode: x
                    } = e,
                    g = (0, o.jL)();
                (0, r.useEffect)((() => (g((0, u.y)()), () => {
                    g((0, d.MD)({
                        pageNumber: 1,
                        pageSize: 12
                    })), g((0, d.AC)())
                })), []), (0, r.useEffect)((() => {
                    const e = "undefined" !== typeof n ? {
                        statuses: t,
                        search: s,
                        pageOrder: a,
                        pageNumber: p,
                        pageOrderBy: i,
                        tagsIds: m,
                        pageSize: l,
                        isPremium: n,
                        chainId: v,
                        currencyCode: x
                    } : {
                        statuses: t,
                        search: s,
                        pageOrder: a,
                        pageOrderBy: i,
                        pageNumber: p,
                        tagsIds: m,
                        pageSize: l,
                        chainId: v,
                        currencyCode: x
                    };
                    g((0, c.n)(e))
                }), [t, s, n, a, i, m, l, p, v, x]);
                return {
                    updateSurveyPayload: (e, t) => {
                        g((0, d.Kt)()), g((0, d.MD)({
                            [e]: t,
                            pageNumber: 1
                        }))
                    },
                    updateNumSlider: e => {
                        g((0, d.MD)({
                            pageSize: e,
                            pageNumber: 1
                        }))
                    },
                    showNextPage: () => {
                        g((0, d.MD)({
                            pageNumber: p + 1
                        }))
                    }
                }
            };
            const p = (0, s(60209).createSelector)([e => e.discoverSurvey.discoveredSurveys, e => e.discoverSurvey.pending, e => e.discoverSurvey.surveyPayload, e => e.discoverSurvey.activeTab, e => e.discoverSurvey.totalSurveys, e => e.discoverSurvey.selectedTags, e => e.discoverSurvey.tags], ((e, t, s, r, a, i, l) => ({
                discoveredSurveys: e,
                pending: t,
                surveyPayload: s,
                activeTab: r,
                totalSurveys: a,
                selectedTags: i,
                tags: l
            })));
            var v = s(34228),
                x = s(20421),
                g = s(85582);
            const f = () => {
                const [e, t] = (0, r.useState)(), {
                    surveyPayload: s,
                    discoveredSurveys: c,
                    activeTab: u,
                    totalSurveys: f = 0,
                    pending: h,
                    selectedTags: y,
                    tags: b
                } = (0, o.GV)(p), j = (0, o.jL)(), N = (0, n.d7)(e, 1e3), S = "undefined" !== typeof s.isPremium ? s.isPremium ? "premium" : "free" : "all", {
                    updateSurveyPayload: k,
                    updateNumSlider: w,
                    showNextPage: C
                } = m();
                return (0, r.useEffect)((() => {
                    j((0, d.Kt)()), j((0, d.MD)({
                        search: N,
                        pageNumber: 1
                    }))
                }), [N]), (0, g.jsxs)("section", {
                    children: [(0, g.jsx)(i.Kp, {
                        activeTab: u,
                        title: "Discover Surveys",
                        setActiveTab: e => {
                            e !== u && (j((0, d.Kt)()), j((0, d.MD)({
                                pageNumber: 1
                            })), j((0, d.YF)(e)))
                        },
                        navItems: x.BW
                    }), (0, g.jsx)(i.DO, {
                        classSearch: "max-sm:w-full w-full max-sm:mr-0 relative text-left",
                        onChange: e => t(e.target.value)
                    }), (0, g.jsx)("div", {
                        className: "mt-6",
                        children: (0, g.jsxs)(a.s, {
                            justify: "between",
                            wrap: "wrap",
                            gap: "4",
                            children: [(0, g.jsxs)(a.s, {
                                gap: "5",
                                wrap: "wrap",
                                children: [(0, g.jsx)(l.BA, {
                                    selectedTags: y,
                                    tags: b,
                                    resetSelectedTags: () => j((0, d.Kt)()),
                                    setSelectedTags: e => (e => {
                                        j((0, d.uC)(e))
                                    })(e)
                                }), (0, g.jsx)(i.ms, {
                                    label: "Platform",
                                    value: s.chainId,
                                    options: v.u,
                                    onValueChange: e => k("chainId", e)
                                }, "platform"), (0, g.jsx)(i.ms, {
                                    label: "Currency",
                                    value: s.currencyCode,
                                    options: v.MN,
                                    onValueChange: e => k("currencyCode", e)
                                }, "currency"), (0, g.jsx)(i.ms, {
                                    value: S,
                                    label: "Membership",
                                    options: v.z8,
                                    onValueChange: e => {
                                        const t = "free" !== e && ("premium" === e || void 0);
                                        j((0, d.Kt)()), j((0, d.MD)({
                                            isPremium: t,
                                            pageNumber: 1
                                        }))
                                    }
                                }, "membership"), (0, g.jsx)(l.fz, {
                                    label: "Number of Surveys",
                                    defaultPageSize: s.pageSize,
                                    resetStore: () => j((0, d.Kt)()),
                                    updateNumSlider: w
                                })]
                            }), (0, g.jsx)(i.ms, {
                                label: "Sort by",
                                value: s.pageOrder,
                                options: v.Tk,
                                onValueChange: e => k("pageOrder", e)
                            }, "sortBy")]
                        })
                    }), (0, g.jsx)(l.e0, {
                        pageNumber: s.pageNumber,
                        pageSize: s.pageSize,
                        surveys: c,
                        emptyText: "Search Again",
                        totalSurveys: f,
                        pending: h,
                        showNextPage: C
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=7777.536c57e6.chunk.js.map