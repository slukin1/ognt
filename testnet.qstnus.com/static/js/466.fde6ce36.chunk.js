"use strict";
(self.webpackChunkqstns = self.webpackChunkqstns || []).push([
    [466], {
        98856: (e, s, t) => {
            t.d(s, {
                H: () => o,
                Z: () => u
            });
            var i = t(16547),
                r = t(90109),
                l = t(47673),
                a = t(18409),
                n = t(37209),
                d = t(85582);
            const o = e => {
                let {
                    data: {
                        businessName: s,
                        avatar: t,
                        isPremium: o,
                        totalSurveys: c,
                        activeSurveys: x,
                        did: u
                    }
                } = e;
                const {
                    theme: m
                } = (0, a.DP)(), p = (0, r.Zp)();
                return (0, d.jsxs)("div", {
                    className: (0, i.default)("rounded-xl w-full border border-solid p-4 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800"),
                    children: [(0, d.jsx)("div", {
                        className: "m-0 w-full bg-transparent p-0 text-left flex flex-col gap-4",
                        children: (0, d.jsxs)("div", {
                            className: "flex items-center",
                            children: [(0, d.jsxs)("div", {
                                className: "relative mr-4",
                                children: [(0, d.jsx)(l.eu, {
                                    imgSrc: t,
                                    scale: "lg",
                                    fallback: s[0]
                                }), (0, d.jsx)("div", {
                                    className: (0, i.default)("absolute left-[28px] top-[28px] inline-flex items-start justify-start gap-2.5 rounded-full border-2 border-solid border-white dark:border-zinc-800 p-1", o ? "bg-purple-500" : "bg-zinc-200 dark:bg-zinc-700"),
                                    children: (0, d.jsx)(l.FI.DiamondIcon, {
                                        color: o || "dark" === m ? "white" : "black"
                                    })
                                })]
                            }), (0, d.jsx)("div", {
                                className: "grid flex flex-col flex-1",
                                children: (0, d.jsx)("p", {
                                    className: "text-sm font-semibold text-zinc-900 dark:text-white truncate",
                                    children: s
                                })
                            }), (0, d.jsx)("div", {
                                className: "flex items-center justify-center",
                                children: (0, d.jsx)(l.FI.ArrowRightIcon, {
                                    width: 20,
                                    height: 20,
                                    stroke: "#71717A"
                                })
                            })]
                        })
                    }), (0, d.jsx)("div", {
                        className: "w-full h-px bg-zinc-300 dark:bg-zinc-800 my-4"
                    }), (0, d.jsxs)("div", {
                        className: "flex justify-between",
                        children: [(0, d.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [(0, d.jsx)("p", {
                                className: "text-xs text-zinc-600 dark:text-zinc-400",
                                children: "Active Surveys"
                            }), (0, d.jsx)("p", {
                                className: "text-sm font-medium text-zinc-900 dark:text-white",
                                children: x
                            })]
                        }), (0, d.jsx)("div", {
                            className: "flex",
                            children: (0, d.jsx)("div", {
                                className: "w-px h-full bg-zinc-300 dark:bg-zinc-800 mx-4"
                            })
                        }), (0, d.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [(0, d.jsx)("p", {
                                className: "text-xs text-zinc-600 dark:text-zinc-400",
                                children: "Total Surveys"
                            }), (0, d.jsx)("p", {
                                className: "text-sm font-medium text-zinc-900 dark:text-white",
                                children: c
                            })]
                        })]
                    }), (0, d.jsx)("div", {
                        className: "mt-4 flex w-full justify-center items-center",
                        children: (0, d.jsxs)("button", {
                            className: "flex justify-center items-center border-none w-full rounded-xl font-semibold py-3 px-4 bg-white hover:bg-zinc-200 dark:bg-zinc-900 hover:dark:bg-zinc-700",
                            onClick: () => {
                                p(`/${n.bw.profileInfo}/${u}`)
                            },
                            children: ["Explore profile", (0, d.jsx)(l.FI.ArrowRightIcon, {
                                mode: m
                            })]
                        })
                    })]
                })
            };
            var c = t(42960),
                x = t(98071);
            const u = () => {
                const {
                    discoveredBusinesses: e,
                    businessesPayload: s,
                    pending: t,
                    totalBusinesses: i = 0
                } = (0, c.GV)(x.Q), r = 1 === s.pageNumber || i - e.length > s.pageSize ? s.pageSize : i - e.length;
                return (0, d.jsxs)("div", {
                    className: "xs:grid-cols-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                    children: [e.map((e => (0, d.jsx)("div", {
                        className: "flex text-center",
                        children: (0, d.jsx)(o, {
                            data: e
                        })
                    }, `${e.id}`))), t && Array.from({
                        length: r
                    }).map(((e, s) => (0, d.jsx)(l.EA, {
                        classNames: "min-h-[189px]"
                    }, s)))]
                })
            }
        },
        98071: (e, s, t) => {
            t.d(s, {
                Q: () => i
            });
            const i = (0, t(60209).createSelector)([e => e.discoverBusinesses.discoveredBusinesses, e => e.discoverBusinesses.pending, e => e.discoverBusinesses.businessesPayload, e => e.discoverBusinesses.totalBusinesses, e => e.discoverBusinesses.tags, e => e.discoverBusinesses.selectedTags], ((e, s, t, i, r, l) => ({
                discoveredBusinesses: e,
                pending: s,
                businessesPayload: t,
                totalBusinesses: i,
                tags: r,
                selectedTags: l
            })))
        },
        44421: (e, s, t) => {
            t.d(s, {
                pL: () => Q,
                Fq: () => o,
                fz: () => f,
                Sk: () => l,
                e0: () => Z,
                BA: () => O
            });
            var i = t(47673),
                r = t(85582);
            const l = e => {
                let {
                    discoveredSurveys: s,
                    pending: t,
                    pendingRows: l
                } = e;
                return (0, r.jsxs)("div", {
                    className: "xs:grid-cols-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                    children: [s.map((e => (0, r.jsx)("div", {
                        className: "flex text-center",
                        children: (0, r.jsx)(Q, {
                            data: e
                        })
                    }, `${e.id}`))), t && Array.from({
                        length: l
                    }).map(((e, s) => (0, r.jsx)(i.EA, {
                        classNames: "min-h-[189px]"
                    }, s)))]
                })
            };
            var a = t(49198),
                n = t(18409),
                d = t(21495);
            const o = e => {
                let {
                    title: s = "",
                    description: t = "",
                    icon: i
                } = e;
                const {
                    theme: l
                } = (0, n.DP)();
                return (0, r.jsx)("div", {
                    className: "flex h-full w-full items-center justify-center  rounded-2xl border border-solid py-10",
                    style: {
                        borderColor: d.k[l].headerNavActive
                    },
                    children: (0, r.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-3",
                        children: [(0, r.jsx)("div", {
                            style: {
                                background: d.k[l].input
                            },
                            className: "flex h-12 w-12 items-center justify-center rounded-full",
                            children: i
                        }), (0, r.jsx)("div", {
                            className: "text-base font-medium",
                            children: s
                        }), (0, r.jsx)("div", {
                            className: `font-regular text-sm ${"dark"===l?"text-zinc-400":"text-zinc-600"} `,
                            children: t
                        })]
                    })
                })
            };
            var c = t(16547),
                x = t(94273),
                u = t(13290);
            const m = "SurveyMarketplace_numOfSurveys__I2fj-",
                p = "SurveyMarketplace_slider__20JoV",
                f = e => {
                    let {
                        label: s,
                        defaultPageSize: t,
                        resetStore: i,
                        updateNumSlider: l
                    } = e;
                    const [o, f] = (0, a.useState)(t), {
                        theme: g
                    } = (0, n.DP)(), h = (0, u.d7)(o, 1e3);
                    return (0, a.useEffect)((() => {
                        i(), l(h)
                    }), [h]), (0, r.jsxs)("div", {
                        children: [(0, r.jsxs)("p", {
                            style: {
                                marginBottom: "7px",
                                fontSize: "12px"
                            },
                            children: [s || "Number of Surveys ", " ", o ? `- ${o}` : ""]
                        }), (0, r.jsxs)("div", {
                            style: {
                                background: d.k[g].input,
                                color: "#71717A",
                                borderRadius: "12px",
                                padding: "11px 16px",
                                fontSize: "14px"
                            },
                            className: (0, c.default)(m, "flex items-center gap-4"),
                            children: [(0, r.jsx)("p", {
                                style: {
                                    margin: "0",
                                    color: "dark" === g ? "#ffffff" : "#09090B"
                                },
                                children: 1
                            }), (0, r.jsx)(x.A, {
                                size: "1",
                                value: [o],
                                min: 1,
                                max: 100,
                                step: 1,
                                onValueChange: e => {
                                    f(e[0])
                                },
                                className: p
                            }), (0, r.jsx)("p", {
                                style: {
                                    margin: "0"
                                },
                                children: "100"
                            })]
                        })]
                    })
                };
            var g = t(25083),
                h = t(94669),
                v = t(60237),
                b = t(78384),
                j = t(99566),
                N = "Progress",
                y = 100,
                [k, z] = (0, b.A)(N),
                [w, S] = k(N),
                C = a.forwardRef(((e, s) => {
                    const {
                        __scopeProgress: t,
                        value: i = null,
                        max: l,
                        getValueLabel: a = I,
                        ...n
                    } = e;
                    !l && 0 !== l || B(l) || console.error(`Invalid prop \`max\` of value \`${`${l}`}\` supplied to \`${"Progress"}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`);
                    const d = B(l) ? l : y;
                    null === i || F(i, d) || console.error(function(e, s) {
                        return `Invalid prop \`value\` of value \`${e}\` supplied to \`${s}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`
                    }(`${i}`, "Progress"));
                    const o = F(i, d) ? i : null,
                        c = P(o) ? a(o, d) : void 0;
                    return (0, r.jsx)(w, {
                        scope: t,
                        value: o,
                        max: d,
                        children: (0, r.jsx)(j.sG.div, {
                            "aria-valuemax": d,
                            "aria-valuemin": 0,
                            "aria-valuenow": P(o) ? o : void 0,
                            "aria-valuetext": c,
                            role: "progressbar",
                            "data-state": D(o, d),
                            "data-value": o ? ? void 0,
                            "data-max": d,
                            ...n,
                            ref: s
                        })
                    })
                }));
            C.displayName = N;
            var $ = "ProgressIndicator",
                A = a.forwardRef(((e, s) => {
                    const {
                        __scopeProgress: t,
                        ...i
                    } = e, l = S($, t);
                    return (0, r.jsx)(j.sG.div, {
                        "data-state": D(l.value, l.max),
                        "data-value": l.value ? ? void 0,
                        "data-max": l.max,
                        ...i,
                        ref: s
                    })
                }));

            function I(e, s) {
                return `${Math.round(e/s*100)}%`
            }

            function D(e, s) {
                return null == e ? "indeterminate" : e === s ? "complete" : "loading"
            }

            function P(e) {
                return "number" === typeof e
            }

            function B(e) {
                return P(e) && !isNaN(e) && e > 0
            }

            function F(e, s) {
                return P(e) && !isNaN(e) && e <= s && e >= 0
            }
            A.displayName = $;
            var T = C,
                _ = A;
            const L = "Cards_progressRoot__6s73S",
                R = "Cards_progressIndicator__39flJ",
                E = e => {
                    let {
                        value: s,
                        max: t,
                        isInfinite: i
                    } = e;
                    const l = s / t * 100,
                        o = isNaN(l) ? 0 : l,
                        [c, x] = (0, a.useState)(0),
                        {
                            theme: u
                        } = (0, n.DP)();
                    return (0, a.useEffect)((() => {
                        const e = setTimeout((() => x(o)), 500);
                        return () => clearTimeout(e)
                    }), [o]), (0, r.jsx)(T, {
                        className: L,
                        value: c,
                        style: {
                            background: d.k[u].headerNavActive
                        },
                        children: (0, r.jsx)(_, {
                            className: R,
                            style: {
                                transform: `translateX(-${100-c}%)`,
                                background: i ? "#4287f5" : o < 33 ? "#C084FC" : o < 66 ? "#D6AB3D" : "#3DD69E"
                            }
                        })
                    })
                };
            var G = t(42960),
                V = t(37209),
                q = t(87452),
                M = t(8071);
            const Q = e => {
                    let {
                        data: {
                            logo: s,
                            id: t,
                            title: l,
                            isFree: a,
                            isPremium: o,
                            isQuiz: x,
                            businessName: m,
                            reward: p
                        },
                        isLanding: f = !1
                    } = e;
                    const b = (0, G.GV)((e => e.profile.profileData)),
                        j = (0, G.GV)((e => {
                            var s, t, i;
                            return null === (s = e.utils) || void 0 === s || null === (t = s.configs) || void 0 === t || null === (i = t.onboarding) || void 0 === i ? void 0 : i.id
                        })),
                        {
                            theme: N
                        } = (0, n.DP)(),
                        {
                            navigateWithQuery: y
                        } = (0, u.hq)(),
                        k = (null === j || void 0 === j ? void 0 : j.toLocaleLowerCase()) === (null === t || void 0 === t ? void 0 : t.toLocaleLowerCase()),
                        z = p && p.participantLimit ? p.participantCompleted / p.participantLimit * 100 : 0;
                    return console.log("DataCard", p), (0, r.jsxs)("div", {
                        onClick: () => {
                            (null === b || void 0 === b ? void 0 : b.type) === M.C.user ? y(`/${V.bw.user}/${V.bw.surveyFilling}/${t}`) : f && !b && y(`/${V.bw.ghost}/${V.bw.surveyFilling}/${t}`)
                        },
                        className: (0, c.default)("rounded-xl w-full border border-solid p-4 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800", (null === b || void 0 === b ? void 0 : b.type) !== M.C.user && b ? "" : "hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer"),
                        children: [(0, r.jsxs)("div", {
                            className: "m-0 w-full bg-transparent p-0 text-left flex flex-col gap-4",
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, r.jsxs)("div", {
                                    className: "relative mr-4",
                                    children: [s ? (0, r.jsx)(i.eu, {
                                        imgSrc: s,
                                        scale: "lg"
                                    }) : x ? (0, r.jsx)(v.Zs, {
                                        mode: N
                                    }) : (0, r.jsx)(v.y$, {
                                        mode: N
                                    }), (0, r.jsx)("div", {
                                        className: (0, c.default)("absolute left-[28px] top-[28px] inline-flex items-start justify-start gap-2.5 rounded-full border-2 border-solid border-white dark:border-zinc-800 p-1", o ? "bg-purple-500" : "bg-zinc-200 dark:bg-zinc-700"),
                                        children: (0, r.jsx)(i.FI.DiamondIcon, {
                                            color: o || "dark" === N ? "white" : "black"
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "grid flex flex-col flex-1",
                                    children: [(0, r.jsx)("p", {
                                        className: "text-sm font-semibold text-zinc-900 dark:text-white truncate",
                                        children: l
                                    }), m && (0, r.jsx)("p", {
                                        className: "text-xs font-normal text-zinc-400 truncate",
                                        children: k ? "qstn.us" : m
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "flex items-center justify-center",
                                    children: (0, r.jsx)(i.FI.ArrowRightIcon, {
                                        width: 20,
                                        height: 20,
                                        stroke: "#71717A"
                                    })
                                })]
                            }), p && (0, r.jsx)("div", {
                                className: "flex gap-3",
                                children: p.amount && p.currencyCode ? (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("p", {
                                        className: "text-sm font-normal text-zinc-400",
                                        children: "Reward"
                                    }), (0, r.jsx)("img", {
                                        src: (0, q.Og)(p),
                                        width: "20",
                                        height: "20"
                                    }), (0, r.jsx)("p", {
                                        className: "text-sm font-semibold text-zinc-900 dark:text-white",
                                        children: `${"NFT"!==p.currencyCode?(0,g.A)(p.amount).toFormatExtended(18):""} ${p.currencyCode}`
                                    })]
                                }) : (0, r.jsx)("p", {
                                    className: "text-sm font-semibold text-zinc-900 dark:text-white",
                                    children: "No reward"
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "w-full h-px bg-zinc-300 dark:bg-zinc-800 my-4"
                        }), p && (0, r.jsxs)("div", {
                            className: "flex flex-col gap-2 items-start",
                            children: [(0, r.jsxs)("p", {
                                className: "text-xs text-zinc-400",
                                children: [a ? `${p.participantLimit} of \u221e ` : p.participantLimit > 1e6 ? `${p.participantCompleted} of \u221e ` : `${p.participantCompleted} of ${p.participantLimit} `, (0, r.jsx)("span", {
                                    className: "text-semibold text-sm",
                                    style: {
                                        color: a ? "#4287f5" : z < 33 || 0 === p.participantCompleted ? "#C084FC" : z < 66 ? "#D6AB3D" : "#3DD69E"
                                    },
                                    children: "completed"
                                })]
                            }), (0, r.jsx)(E, {
                                value: null === p || void 0 === p ? void 0 : p.participantCompleted,
                                max: p.participantLimit,
                                isInfinite: a
                            }), f && (!b || (null === b || void 0 === b ? void 0 : b.type) === M.C.user) && (0, r.jsx)("div", {
                                style: {
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center"
                                },
                                children: (0, r.jsxs)(h.$, {
                                    style: {
                                        width: "100%",
                                        marginTop: "16px",
                                        boxSizing: "border-box",
                                        borderRadius: "12px",
                                        color: d.k[N].buttonText,
                                        background: d.k[N].button,
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        lineHeight: "24px"
                                    },
                                    size: "4",
                                    children: ["Complete survey", (0, r.jsx)(i.FI.ArrowRightIcon, {})]
                                })
                            })]
                        })]
                    })
                },
                O = e => {
                    let {
                        tags: s,
                        selectedTags: t,
                        resetSelectedTags: l,
                        setSelectedTags: n
                    } = e;
                    const [d, o] = (0, a.useState)(t);
                    return (0, r.jsx)(i.uh, {
                        label: "Category",
                        placeholder: "All",
                        tags: s,
                        selectedTags: d,
                        handleSelectAllTag: () => {
                            o((e => e.length === s.length ? [] : s))
                        },
                        handleSelectTag: e => {
                            o((s => {
                                if (s.some((s => {
                                        let {
                                            id: t
                                        } = s;
                                        return t === e.id
                                    }))) {
                                    return s.filter((s => s.id !== e.id))
                                }
                                return [...s, e]
                            }))
                        },
                        confirmButtonClick: () => {
                            l(), n(d)
                        }
                    })
                },
                Z = e => {
                    let {
                        emptyText: s,
                        pending: t,
                        surveys: a,
                        totalSurveys: d = 0,
                        pageNumber: c,
                        pageSize: x,
                        showNextPage: u
                    } = e;
                    const {
                        theme: m
                    } = (0, n.DP)(), p = 1 === c || d - a.length > x ? x : d - a.length;
                    return (0, r.jsx)("div", {
                        className: "mt-3",
                        children: 0 !== a.length || t ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(l, {
                                discoveredSurveys: a,
                                pending: t,
                                pendingRows: p
                            }), a.length > 0 && a.length < (null !== d && void 0 !== d ? d : 0) && !t && (0, r.jsx)("div", {
                                className: "flex w-full mt-2 justify-center",
                                children: (0, r.jsx)(h.$, {
                                    disabled: t,
                                    onClick: u,
                                    size: "3",
                                    style: {
                                        backgroundColor: "#A855F7",
                                        borderRadius: "12px",
                                        padding: "19px 16px",
                                        fontSize: "12px",
                                        cursor: "pointer"
                                    },
                                    children: (0, r.jsx)("p", {
                                        className: "text-sm font-semibold",
                                        children: "Show More"
                                    })
                                })
                            })]
                        }) : (0, r.jsx)(o, {
                            title: s,
                            icon: (0, r.jsx)(i.FI.AnouncementIcon, {
                                height: 24,
                                width: 24,
                                stroke: "dark" === m ? "#fff" : "#333"
                            }),
                            actionTitle: "Go to surveys"
                        })
                    })
                }
        }
    }
]);
//# sourceMappingURL=466.fde6ce36.chunk.js.map