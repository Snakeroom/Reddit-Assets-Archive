// https://www.redditstatic.com/desktop2x/ModModeBanners.c804f75ab122f3323d43.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModModeBanners"], {
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return E
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "f", (function() {
				return k
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "e", (function() {
				return O
			})), s.d(t, "g", (function() {
				return j
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "b", (function() {
				return N
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makeCommentsPageKey/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/shortcuts/utils.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/endpoints/comment/index.tsx"),
				m = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				u = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/actions/comment/index.ts"),
				g = s("./src/reddit/actions/comment/constants.ts");
			const R = Object(r.a)(g.p),
				E = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					s().features.comments.models[e] && (await Object(p.j)(n(), e)).ok && t((e => async t => {
						t(R({
							commentId: e
						}))
					})(e))
				}, _ = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					if (!Object(x.S)(s())) return void t(Object(c.i)(l.a.LOGIN_MODAL_ID));
					const a = s().features.comments.models[e];
					if (!a) return;
					const d = a.isLocked ? p.l : p.f;
					t(Object(h.j)({
						[e]: {
							isLocked: !a.isLocked
						}
					})), (await d(r(), e)).ok ? t(Object(i.f)({
						kind: b.b.SuccessMod,
						text: a.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(h.j)({
						[e]: {
							isLocked: a.isLocked
						}
					}))
				}, k = Object(r.a)(g.J), v = e => async (t, s, o) => {
					let {
						apiContext: n,
						gqlContext: r
					} = o;
					const a = s(),
						c = a.features.comments.models[e],
						i = a.user.account ? a.user.account.displayText : null;
					c && i && (t(Object(h.j)({
						[e]: {
							isApproved: !0,
							approvedBy: i,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(p.a)(r(), e)).ok || t(Object(h.j)({
						[e]: {
							isApproved: c.isApproved,
							approvedBy: null,
							bannedBy: c.bannedBy,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam,
							modNote: c.modNote,
							modReasonBy: c.modReasonBy,
							modRemovalReason: c.modRemovalReason,
							numReports: c.numReports || null
						}
					})), Object(d.d)())
				}, O = (e, t) => async (s, o, n) => {
					let {
						apiContext: r,
						gqlContext: a
					} = n;
					const c = o(),
						i = c.features.comments.models[e],
						l = c.user.account ? c.user.account.displayText : null;
					i && l && (s(Object(h.j)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(p.h)(a(), e, t)).ok || s(Object(h.j)({
						[e]: {
							approvedBy: i.approvedBy,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam,
							numReports: i.numReports
						}
					})), Object(d.d)())
				}, j = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const a = s().features.comments.models[e];
					if (!a) return;
					const c = a.ignoreReports ? p.k : p.e;
					a.ignoreReports || t(v(e)), t(Object(h.j)({
						[e]: {
							ignoreReports: !a.ignoreReports
						}
					})), (await c(r(), e)).ok ? t(Object(i.f)({
						kind: b.b.SuccessMod,
						text: a.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(h.j)({
						[e]: {
							ignoreReports: a.ignoreReports
						}
					}))
				}, C = (e, t, s) => async (r, a, c) => {
					let {
						gqlContext: d
					} = c;
					const l = Object(f.c)(a(), {
						commentId: e
					});
					if (!l) return;
					const p = s === n.jc.Snoozed,
						x = {
							itemId: e,
							reportText: t,
							isSnoozed: p
						};
					if ((await Object(m.a)(d(), {
							input: x
						})).ok) r(Object(h.j)({
						[e]: {
							userReports: Object(u.a)(l.userReports, t, p)
						}
					}));
					else {
						const e = Object(i.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(i.f)(e))
					}
				}, N = (e, t, s) => async (o, r, c) => {
					let {
						apiContext: d,
						gqlContext: i
					} = c;
					const l = r(),
						m = l.features.comments.models[e];
					if (!m) return;
					const u = m.postId,
						b = l.postStickiedComments.data[u];
					o(Object(h.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === n.H.ADMIN,
							isMod: t === n.H.MODERATOR,
							isStickied: !!s
						}
					})), s && b && b !== e && o(Object(h.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const f = Object(p.c)(i(), e, t),
						x = Object(p.d)(i(), e, !!s),
						g = [f];
					(s || !s && e === b) && g.push(x), (await Promise.all(g)).every(e => e.ok) ? s && o(k({
						id: e,
						postId: u,
						commentsPageKey: Object(a.a)(u, null, {
							sort: n.v.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (o(Object(h.j)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), o(Object(h.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/FilteredStatusDisplay.tsx"),
				c = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				d = s.n(c);
			const {
				fbt: i
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.default = e => {
				let {
					thing: t
				} = e;
				return n.a.createElement("ul", {
					className: Object(r.a)(d.a.wrapper)
				}, n.a.createElement(a.a, {
					content: t
				}))
			}
		},
		"./src/reddit/components/ModModeReports/_ModModeReports.m.less": function(e, t, s) {
			e.exports = {
				banner: "HvreLeuuSfh1rkoWE9xuN",
				collapsed: "_13ZFeqy7MhNDIo_5EgxMBy",
				contentContainer: "_1Mypg35XVWYc_yoTLInTJ-",
				coloredIcon: "_1FrEyh5SQ-2aoHDsNDPjzX",
				ignoreButton: "_1Lno0Y9PcQ4qpuobaTHDKT",
				ignoreButtonIcon: "_1bHw74h-KbQ16nM50WYsYB",
				reportsWrapper: "_1sFJ-ZCpGsI_VfPvFc0_KM",
				reports: "_1u0QpAjiAmsmy4uUwFZ27u"
			}
		},
		"./src/reddit/components/ModModeReports/_ModModeReports.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/ModModeBanners/index.m.less"),
				d = s.n(c),
				i = s("./src/reddit/components/Reports/index.tsx"),
				l = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/isPost.ts"),
				u = s("./src/reddit/helpers/trackers/modTools.ts"),
				b = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				f = s("./src/reddit/icons/fonts/Report/index.tsx"),
				x = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/_ModModeReports.m.less"),
				g = s.n(h);
			const R = e => {
				let {
					handleToggleExpando: t,
					isHistoricalReports: s,
					numReports: n,
					modReports: c,
					userReports: p,
					collapseReports: m,
					reportedThingId: u
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(g.a.banner, d.a.banner, m && g.a.collapsed)
				}, r.a.createElement("div", {
					className: g.a.contentContainer
				}, m ? r.a.createElement(b.a, {
					className: Object(a.a)(d.a.icon, g.a.coloredIcon)
				}) : r.a.createElement(f.a, {
					className: Object(a.a)(d.a.icon, g.a.coloredIcon)
				}), r.a.createElement("div", {
					className: g.a.reportsWrapper
				}, m ? n : r.a.createElement(i.a, {
					className: g.a.reports,
					modReports: c,
					userReports: p,
					reportedThingId: u
				})), s ? r.a.createElement(l.c, {
					className: g.a.ignoreButton,
					onClick: t,
					text: o.fbt._("old reports", null, {
						hk: "2IdZOv"
					})
				}, r.a.createElement(x.a, {
					className: g.a.ignoreButtonIcon
				})) : r.a.createElement(l.c, {
					className: g.a.ignoreButton,
					onClick: t,
					text: m ? o.fbt._("Restore Reports", null, {
						hk: "2O219R"
					}) : o.fbt._("ignore reports", null, {
						hk: "48jlNW"
					})
				}, m ? r.a.createElement(f.a, {
					className: g.a.ignoreButtonIcon
				}) : r.a.createElement(b.a, {
					className: g.a.ignoreButtonIcon
				}))))
			};
			t.default = e => {
				let {
					reportable: t,
					onIgnoreReports: s
				} = e;
				const [o, a] = Object(n.useState)(!0), c = Object(p.b)(), d = () => {
					let e;
					s();
					const o = t.ignoreReports ? "restore_reports" : "ignore_reports";
					e = Object(m.a)(t.id) ? Object(u.l)(o, t.id) : Object(u.k)(o, t.id), c(e)
				}, i = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
				return i ? r.a.createElement(R, {
					collapseReports: o,
					handleToggleExpando: () => a(e => !e),
					isHistoricalReports: !0,
					numReports: i,
					modReports: t.modReportsDismissed,
					userReports: t.userReportsDismissed,
					reportedThingId: t.id
				}) : r.a.createElement(R, {
					handleToggleExpando: d,
					collapseReports: t.ignoreReports,
					numReports: t.numReports || 0,
					modReports: t.modReports,
					userReports: t.userReports,
					reportedThingId: t.id
				})
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/FilteredStatusDisplay.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return z
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/models/ModQueueTrigger/index.ts"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				p = s("./src/reddit/constants/things.ts"),
				m = s("./src/reddit/selectors/telemetry.ts");
			const u = e => t => ({
					source: "moderator",
					action: "click",
					noun: e.isCorrect ? "filter_is_correct" : "filter_is_incorrect",
					...b(e, t)
				}),
				b = (e, t) => {
					const s = e.contentId.startsWith(p.a) ? e.contentId : "",
						o = e.contentId.startsWith(p.b) ? e.contentId : "";
					return {
						comment: s ? Object(m.j)({
							state: t,
							commentId: s
						}) : null,
						post: o ? Object(m.M)(t, o) : null,
						filter: {
							reference: {
								name: e.filterName
							}
						},
						subreddit: Object(m.qb)(t, e.contentId),
						...m.q(t)
					}
				};
			var f = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				x = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/constants/localStorage.ts")),
				h = s("./src/reddit/hooks/useLocalStorage.ts"),
				g = s("./src/reddit/hooks/useUserContext.ts");
			const R = () => {
				var e, t;
				const s = `${null!==(t=null===(e=Object(g.a)().currentUser)||void 0===e?void 0:e.id)&&void 0!==t?t:""}-${x.b.SAFETY_FILTER_FEEDBACK_CONTENT_IDS}`,
					[o, n] = Object(h.a)(s, []);
				return {
					contentIds: new Set(o),
					addContentId: e => {
						const t = [...o, e];
						t.length > 50 && t.shift(), n(t)
					}
				}
			};
			var E = s("./src/reddit/hooks/useTracking.ts");
			const _ = {
				threshold: [.5]
			};
			var k = e => {
					const t = Object(o.useRef)(null),
						s = Object(E.a)(),
						{
							contentIds: r
						} = R(),
						a = Object(o.useCallback)(t => {
							t.forEach(t => {
								let {
									intersectionRatio: o
								} = t;
								o >= .5 && !r.has(e.contentId) && s((e => t => ({
									source: "modqueue",
									action: "view",
									noun: "hitl_filter_feedback",
									...b(e, t)
								}))({
									...e
								}))
							})
						}, [s, e, r]);
					return Object(f.a)(t, a, _), n.a.createElement("div", {
						ref: t
					}, e.children)
				},
				v = s("./src/reddit/constants/experiments.ts"),
				O = s("./src/reddit/hooks/useExperimentVariant.ts"),
				j = s("./src/reddit/hooks/useMounted.ts"),
				C = s("./src/reddit/components/ModQueueActionBar/helpers.ts"),
				N = s("./node_modules/lodash/debounce.js"),
				T = s.n(N),
				B = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				I = s("./src/reddit/hooks/useInfoTextTooltip.ts");
			const y = e => {
				let {
					confidence: t,
					children: s
				} = e;
				const o = Object(I.a)({
						placement: "top-end"
					}),
					c = T()(o.hide, 500);
				return n.a.createElement("div", {
					onMouseEnter: () => {
						o.show(), c.cancel()
					},
					onMouseLeave: c
				}, n.a.createElement("button", {
					onClick: e => {
						e.stopPropagation(), o.toggle()
					},
					className: "text-12 text-neutral-content mr-sm hover:underline",
					ref: o.target.ref
				}, n.a.createElement("span", {
					className: Object(a.a)("inline-block mr-2xs h-xs w-xs rounded-full", {
						"bg-alert-caution": t === i.a.LOW,
						"bg-success-background": t === i.a.HIGH
					})
				}), function(e) {
					switch (e) {
						case i.a.LOW:
							return r.fbt._("Low Confidence", null, {
								hk: "1woV5A"
							});
						case i.a.HIGH:
							return r.fbt._("High Confidence", null, {
								hk: "2UzCkt"
							})
					}
				}(t)), n.a.createElement(B.a, {
					popperProps: o.popperProps,
					arrowProps: o.arrowProps,
					visible: o.visible,
					className: "max-w-[230px] font-semibold text-12"
				}, n.a.createElement("div", {
					className: "py-xs flex gap-x-xs",
					onClick: e => e.stopPropagation()
				}, n.a.createElement(d.a, {
					name: "info_fill"
				}), n.a.createElement("div", null, s))))
			};
			var D = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/SafetyFilterFeedbackPrompt.m.less"),
				M = s.n(S);
			const w = e => {
				let {
					filterName: t,
					contentId: s
				} = e;
				const a = Object(D.b)(),
					{
						addContentId: c
					} = R(),
					[d, i] = Object(o.useState)(!1),
					l = e => t => {
						t.stopPropagation(), c(s), i(!0), a(e)
					};
				return n.a.createElement("div", {
					className: M.a.feedbackPromptContainer
				}, n.a.createElement("p", {
					className: M.a.feedbackPrompt
				}, d ? r.fbt._("Thanks for your feedback!", null, {
					hk: "3ImVsP"
				}) : r.fbt._("Was this accurate?", null, {
					hk: "370juX"
				})), !d && n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
					"aria-label": "feedback response yes",
					className: M.a.feedbackPromptButton,
					onClick: l(u({
						isCorrect: !0,
						filterName: t,
						contentId: s
					}))
				}, r.fbt._("Yes", null, {
					hk: "QULVC"
				})), n.a.createElement("span", {
					className: M.a.feedbackButtonMiddot
				}, "·"), n.a.createElement("button", {
					"aria-label": "feedback response no",
					className: M.a.feedbackPromptButton,
					onClick: l(u({
						isCorrect: !1,
						filterName: t,
						contentId: s
					}))
				}, r.fbt._("No", null, {
					hk: "4zGto5"
				}))))
			};
			var A = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				P = s.n(A);
			const F = e => {
					if (e) try {
						return JSON.parse(e)
					} catch {
						return
					}
				},
				L = e => {
					let {
						reasonRichText: t,
						reason: s,
						feedbackPrompt: o
					} = e;
					const a = Object(j.a)();
					if (o) {
						if (!a) return n.a.createElement("p", {
							className: P.a.reasonText
						}, r.fbt._("Loading filter reason…", null, {
							hk: "K3Ipd"
						}));
						if (!o.feedbackSent) return n.a.createElement(k, o, n.a.createElement(w, o))
					}
					return t ? n.a.createElement(l.b, {
						content: t,
						rtJsonElementProps: {}
					}) : s ? n.a.createElement("p", {
						className: P.a.reasonText
					}, s) : null
				},
				z = e => {
					let {
						content: t
					} = e;
					const s = Object(O.a)(v.me) === v.Rd,
						{
							contentIds: p
						} = R(),
						m = Object(o.useMemo)(() => {
							var e, o, n, a, d, l;
							const m = [];
							(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== c.l || m.push({
								icon: "bot_fill",
								heading: r.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								})
							});
							for (const c of t.modQueueTriggers || []) switch (c.type) {
								case i.b.AUTOMOD:
									m.push({
										icon: "bot_fill",
										heading: r.fbt._("Blocked by AutoMod", null, {
											hk: "XZuzM"
										}),
										reason: c.message
									});
									break;
								case i.b.SHADOWBANNED_SUBMITTER:
									m.push({
										icon: "ban_fill",
										heading: r.fbt._("Blocked by Automatic Filter", null, {
											hk: "2iaUCM"
										}),
										reason: c.message
									});
									break;
								case i.b.HATEFUL_CONTENT:
									m.push({
										icon: "mod_mode_fill",
										heading: s ? r.fbt._("Blocked for Harassment", null, {
											hk: "1FQFpi"
										}) : r.fbt._("Blocked by Automatic Filter", null, {
											hk: "4vu7uy"
										}),
										reason: c.message,
										feedbackPrompt: s ? {
											filterName: C.b.HarassingContent,
											feedbackSent: p.has(t.id),
											contentId: t.id
										} : void 0
									});
									break;
								case i.b.CROWD_CONTROL:
									m.push({
										icon: "crowd_control",
										heading: r.fbt._("Blocked by Crowd Control", null, {
											hk: "6LNvT"
										}),
										reason: c.message
									});
									break;
								case i.b.BAN_EVASION:
									m.push({
										icon: "ban_fill",
										heading: r.fbt._("Blocked by Ban Evasion Protection", null, {
											hk: "1unYu9"
										}),
										reason: c.message,
										reasonRichText: F(null === (n = null === (o = c.details) || void 0 === o ? void 0 : o.recencyExplanation) || void 0 === n ? void 0 : n.richtext),
										confidence: null === (a = c.details) || void 0 === a ? void 0 : a.confidence,
										confidenceExplanation: F(null === (l = null === (d = c.details) || void 0 === d ? void 0 : d.confidenceExplanation) || void 0 === l ? void 0 : l.richtext)
									})
							}
							return m
						}, [t.modQueueTriggers, t.bannedBy, t.id, s]);
					return n.a.createElement("div", {
						className: P.a.filteredWrapper
					}, m.map((e, t) => {
						const {
							heading: s,
							reason: o,
							icon: r,
							confidence: c,
							confidenceExplanation: i
						} = e;
						return n.a.createElement("div", {
							key: `${s}-${o}-${t}`,
							className: P.a.filteredRow
						}, n.a.createElement(d.a, {
							isFilled: !0,
							name: r,
							className: Object(a.a)(P.a.coloredIcon, P.a.icon)
						}), n.a.createElement("div", {
							className: P.a.statusText
						}, n.a.createElement("div", {
							className: P.a.statusMeta
						}, n.a.createElement("p", {
							className: P.a.status
						}, s), c && i && n.a.createElement(y, {
							confidence: c
						}, n.a.createElement(l.b, {
							className: P.a.tooltipContent,
							content: i,
							rtJsonElementProps: {}
						}))), n.a.createElement(L, e)))
					}))
				}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/SafetyFilterFeedbackPrompt.m.less": function(e, t, s) {
			e.exports = {
				feedbackPromptContainer: "_3RtSyVCC6P8Sf0jcGpvCf-",
				feedbackPrompt: "_32ku9VINzkoa2aCNXzXAdB",
				feedbackPromptButton: "_3xtpwUZ-CWdFHk89lj-iQD",
				feedbackButtonMiddot: "_2urD2Oe4XFQoyHKHwdlc5y"
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2qFtoxD1OfFOBkQIQeIP5N",
				opened: "_3kWeXZJizg6u4Rpq5Bx2k6",
				openable: "_1jr1ZpXLdZNEfWwHwMp3UW",
				filteredWrapper: "_1aoTzKKtmlGCr-UYW5QI5O",
				filteredRow: "_eBNIEsnbYySvkxjmpt2P",
				reportedWrapper: "_1rfFSNr23RcUWm7d90DpDo",
				reportMeta: "_32zOxnfn5FxzpA0vNAYP7J",
				ignoreButton: "_3qPfB3L3JEpdPsa2KJ6I6Y",
				ignoreButtonIcon: "_2xeI0-KXBryv89ds5re0ac",
				reported: "_37f_VPQZEbIxZBhfy_wkzt",
				icon: "OYsuhocczx0FWqSu4etye",
				approved: "_3PA1NUdBncNEoWXl9e53aE",
				statusText: "_3trW-r5LnijGIrjgDF1u2M",
				status: "_3Q6W_eSDsN-BhormvQBcRr",
				statusMeta: "_3Qp7V0IlguVisBYUCEDLwX",
				tooltipContent: "_1SLswtlo8BWHAgKgT5Nsj_",
				reasonText: "_7YNYpwZk3KH6oXU4KhoGd",
				snoozabledButton: "_3Rixx0Z51qJ71wGmQ8UtQj",
				userIconWrapper: "_3vnCHVExwDbhdlwSh9BV9k",
				userIcon: "_1O-L18qAEJqcxeYP7bE4mK",
				filteredExplanationIcon: "a13uMv6sihYo-UyNBZDo8",
				snoozableDropdown: "_3L6lZrroGMf7wnI2DFJDJx",
				snoozeIcon: "BUoPqJh1q6Pv_Vf5bsKyT",
				caretButton: "_1iROd0ZxfCEcEidNiygaYB",
				caretIcon: "-vF-jMhpa_XhPJ_ntG1Hv",
				userlink: "_2iRjlf0DdO9rVaTZpfwvHA"
			}
		},
		"./src/reddit/components/ModQueueActionBar/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			}));
			var o, n, r = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(o || (o = {})),
			function(e) {
				e.HarassingContent = "harassing_content"
			}(n || (n = {}));
			const i = e => e.isRemoved && (!e.bannedBy || e.bannedBy === r.l) || !e.isRemoved && Object(d.a)(e) ? o.FILTERED : e.isRemoved || Object(a.b)(e) && [c.g.AntiEvilOps, c.g.CommunityOps, c.g.ContentTakedown, c.g.CopyrightTakedown, c.g.Reddit].indexOf(e.removedByCategory) > -1 ? o.REMOVED : e.isSpam ? o.SPAM : (e.numReports || 0) > 0 ? o.REPORTED : e.isApproved ? o.APPROVED : o.UNMODERATED
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, s) {
			e.exports = {
				ReportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				reportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				DropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				dropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				DropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				dropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				mActive: "_1mwLBQ-SAEJSG4hvYZzPUO",
				SnoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				snoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				SnoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5",
				snoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5"
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/helpers/isComment.ts"),
				h = s("./src/reddit/helpers/trackers/modTools.ts"),
				g = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				R = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				E = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				O = s.n(v);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = (e, t) => `SnoozableReport--${t}--${e}`, N = Object(r.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(k.b)(C(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(p.h)({
					tooltipId: C(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(x.a)(t.reportedThingId) ? e(Object(i.h)(t.reportedThingId, t.reason, s)) : e(Object(l.fb)(t.reportedThingId, t.reason, s))
				}
			})), T = Object(m.a)(b.a);
			class B extends n.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? d.jc.None : d.jc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(h.r)(Object(x.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: s,
						openDropdown: o,
						isDropdownOpen: r,
						isSnoozed: a,
						useNewFormat: d,
						className: i,
						dropdownClassName: l,
						iconClassName: p
					} = this.props, m = C(e, s);
					return n.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, n.a.createElement(f.b, {
						id: m,
						className: Object(c.a)(O.a.DropdownLabelContainer, i),
						onClick: o
					}, n.a.createElement("label", {
						htmlFor: m,
						className: O.a.DropdownLabel
					}, a ? j._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : d ? `${e} (${t})` : `${t}: ${e}`, r ? n.a.createElement(R.a, null) : n.a.createElement(g.a, null))), n.a.createElement(T, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, n.a.createElement("button", {
						className: Object(c.a)(O.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, n.a.createElement("div", {
						className: O.a.SnoozeButtonContent
					}, a ? n.a.createElement(n.a.Fragment, null, n.a.createElement(_.a, {
						className: p
					}), j._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement(E.a, {
						className: p
					}), j._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = N(Object(u.c)(B))
		},
		"./src/reddit/components/Reports/index.m.less": function(e, t, s) {
			e.exports = {
				ReportText: "_3TPyo-_MFDbVaI7ExIkD1G",
				reportText: "_3TPyo-_MFDbVaI7ExIkD1G",
				ReportsTitle: "_21BmvfYiT1eKfN4AeE812a",
				reportsTitle: "_21BmvfYiT1eKfN4AeE812a",
				Reports: "ZL1AYPlBJX_2kYn3OATX6",
				reports: "ZL1AYPlBJX_2kYn3OATX6",
				UserReports: "_1d5zD9SHWtSuQPbzf7rh_k",
				userReports: "_1d5zD9SHWtSuQPbzf7rh_k"
			}
		},
		"./src/reddit/components/Reports/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				c = s("./src/reddit/components/Reports/index.m.less"),
				d = s.n(c);
			const {
				fbt: i
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = r.a.div("ReportText", d.a), p = r.a.div("ReportsTitle", d.a);

			function m(e) {
				const {
					className: t,
					modReports: s,
					userReports: o,
					reportedThingId: r
				} = e;
				return n.a.createElement("div", {
					className: t
				}, s && s.length > 0 && n.a.createElement("div", {
					className: d.a.Reports
				}, n.a.createElement(p, null, i._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), s.map(e => {
					let [t, s] = e;
					return n.a.createElement(l, {
						key: `mod-${s}`
					}, `u/${s}: ${t}`)
				})), o && o.length > 0 && n.a.createElement("div", {
					className: d.a.Reports
				}, n.a.createElement(p, null, i._("User Reports", null, {
					hk: "2KeCLz"
				})), n.a.createElement("div", {
					className: d.a.UserReports
				}, o.map(e => {
					let [t, s, o, c] = e;
					return void 0 !== o && c ? n.a.createElement(a.a, {
						key: `user-${t}`,
						reason: t,
						amount: s,
						reportedThingId: r,
						isSnoozed: o
					}) : n.a.createElement(l, {
						key: `user-${t}`
					}, `${s}: ${t}`)
				}))))
			}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(c.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, s) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(c.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModModeBanners.c804f75ab122f3323d43.js.map