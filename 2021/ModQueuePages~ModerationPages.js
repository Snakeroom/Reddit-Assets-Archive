// https://www.redditstatic.com/desktop2x/ModQueuePages~ModerationPages.9d2efe18b2581a6695c5.js
// Retrieved at 7/21/2021, 4:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages~ModerationPages"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/selectors/telemetry.ts");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, n) => (s = (() => {})) => o => {
				const r = u(o.target, o.currentTarget),
					i = p(o.target, o.currentTarget);
				r && n && t && (m(o.target, o.currentTarget, l.anchors) ? n(t(e, r, i)) : n(n => {
					const s = t(e, r, i)(n);
					let o;
					if (s && s.actionInfo) {
						const {
							pageType: e,
							...t
						} = s.actionInfo;
						o = t
					}
					return {
						...s,
						actionInfo: Object(a.previousPageActionInfo)(n, o)
					}
				})), m(o.target, o.currentTarget, l.anchorsAndButtons) && s(o)
			};

			function c(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: a,
						...c
					} = t, l = Object(s.useCallback)(d(a, r, n), [a, r, n]);
					return o.a.createElement(e, i({}, c, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(r.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				m = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && m(e.parentElement, t, n)),
				u = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && u(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/lib/colors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			}));
			const s = "#FFF",
				o = "#FF4500",
				r = "#0079D3",
				a = "#46D160",
				i = {
					black: "#000",
					white: s,
					orangered: o,
					alienblue: r,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: "#24A0ED",
					secondary: "#006CBF",
					upvote: o,
					downvote: "#7193FF",
					positive: a,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: o,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: o,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				d = {
					...i,
					tone1: "#D7DADC",
					tone2: "#818384",
					tone3: "#565758",
					tone4: "#3A3A3C",
					tone5: "#272729",
					tone6: "#1A1A1B",
					tone7: "#121213",
					primary: "#006CBF",
					secondary: "#24A0ED",
					coins: "#FFE600",
					spoiler: "#D7DADC"
				}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			let s;
			const o = new Map,
				r = new Map;
			"undefined" != typeof window && (n("./node_modules/intersection-observer/intersection-observer.js"), s = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						n = e.intersectionRatio > 0;
					if (n !== !!r.get(t)) {
						r.set(t, n);
						const s = o.get(t);
						if (s) {
							s(e, n && !!r.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const a = (e, t) => {
					try {
						o.set(e, t), s && s.observe(e)
					} catch (n) {
						0
					}
				},
				i = e => {
					try {
						o.delete(e), s && s.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(s.a)(o.c),
				a = Object(s.a)(o.b),
				i = Object(s.a)(o.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "b", (function() {
				return R
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeCommentsPageKey/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/endpoints/comment/index.tsx"),
				u = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = n("./src/reddit/models/Reportable/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/actions/comment/index.ts"),
				v = n("./src/reddit/actions/comment/constants.ts");
			const x = Object(r.a)(v.n),
				g = e => async (t, n, {
					apiContext: s
				}) => {
					n().features.comments.models[e] && (await Object(m.h)(s(), e)).ok && t((e => async t => {
						t(x({
							commentId: e
						}))
					})(e))
				}, O = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(f.J)(n())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const o = n().features.comments.models[e];
					if (!o) return;
					const r = o.isLocked ? m.j : m.d;
					t(Object(C.i)({
						[e]: {
							isLocked: !o.isLocked
						}
					})), (await r(s(), e)).ok || t(Object(C.i)({
						[e]: {
							isLocked: o.isLocked
						}
					}))
				}, I = Object(r.a)(v.F), E = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n(),
						r = o.features.comments.models[e],
						a = o.user.account ? o.user.account.displayText : null;
					r && a && (t(Object(C.i)({
						[e]: {
							isApproved: !0,
							approvedBy: a,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(s(), e)).ok || t(Object(C.i)({
						[e]: {
							isApproved: r.isApproved,
							approvedBy: null,
							bannedBy: r.bannedBy,
							isRemoved: r.isRemoved,
							isSpam: r.isSpam,
							modNote: r.modNote,
							modReasonBy: r.modReasonBy,
							modRemovalReason: r.modRemovalReason,
							numReports: r.numReports || null
						}
					})), Object(d.d)())
				}, k = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						a = r.features.comments.models[e],
						i = r.user.account ? r.user.account.displayText : null;
					a && i && (n(Object(C.i)({
						[e]: {
							approvedBy: null,
							bannedBy: i,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.f)(o(), e, t)).ok || n(Object(C.i)({
						[e]: {
							approvedBy: a.approvedBy,
							bannedBy: a.bannedBy,
							isApproved: a.isApproved,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam
						}
					})), Object(d.d)())
				}, _ = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n().features.comments.models[e];
					if (!o) return;
					const r = o.ignoreReports ? m.i : m.c;
					t(Object(C.i)({
						[e]: {
							ignoreReports: !o.ignoreReports
						}
					})), (await r(s(), e)).ok || t(Object(C.i)({
						[e]: {
							ignoreReports: o.ignoreReports
						}
					}))
				}, y = (e, t, n) => async (r, a, {
					gqlContext: i
				}) => {
					const d = Object(b.a)(a(), {
						commentId: e
					});
					if (!d) return;
					const l = n === o.Xb.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(i(), {
							input: m
						})).ok) r(Object(C.i)({
						[e]: {
							userReports: Object(p.a)(d.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), h.b.Error);
						r(Object(c.f)(e))
					}
				}, R = (e, t, n) => async (s, r, {
					apiContext: i
				}) => {
					const d = r(),
						c = d.features.comments.models[e];
					if (!c) return;
					const l = c.postId,
						u = d.postStickiedComments.data[l],
						p = o.g[t];
					s(Object(C.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.E.ADMIN,
							isMod: t === o.E.MODERATOR,
							isStickied: !!n
						}
					})), n && u && u !== e && s(Object(C.i)({
						[u]: {
							isStickied: !1
						}
					})), (await Object(m.b)(i(), e, p, n || null)).ok ? n && s(I({
						id: e,
						postId: l,
						commentsPageKey: Object(a.a)(l, null, {
							sort: o.s.CONFIDENCE,
							...d.platform.currentPage.queryParams
						})
					})) : (s(Object(C.i)({
						[e]: {
							distinguishType: c.distinguishType,
							isAdmin: c.isAdmin,
							isMod: c.isMod,
							isStickied: c.isStickied
						}
					})), s(Object(C.i)({
						[u]: {
							isStickied: d.features.comments.models[u].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return L
			})), n.d(t, "d", (function() {
				return B
			})), n.d(t, "f", (function() {
				return z
			})), n.d(t, "a", (function() {
				return G
			})), n.d(t, "b", (function() {
				return X
			})), n.d(t, "c", (function() {
				return q
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/bulkActions/index.ts"),
				i = n("./src/reddit/actions/removalReasons/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/modQueue/index.ts"),
				l = n("./src/reddit/helpers/correlationIdTracker.ts"),
				m = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/helpers/isPost.ts"),
				p = n("./src/reddit/models/ModQueue/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/modQueue.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/telemetry.ts"),
				v = n("./src/telemetry/index.ts"),
				x = n("./src/lib/initializeClient/installReducer.ts"),
				g = n("./src/reddit/reducers/pages/modHub/index.ts"),
				O = n("./src/reddit/actions/modQueue/constants.ts");
			Object(x.a)({
				pages: {
					modHub: g.a
				}
			});
			const I = Object(r.a)(O.j),
				E = Object(r.a)(O.i),
				k = Object(r.a)(O.h),
				_ = Object(r.a)(O.g),
				y = Object(r.a)(O.f),
				R = Object(r.a)(O.e),
				j = Object(r.a)(O.n),
				P = Object(r.a)(O.m),
				S = Object(r.a)(O.l),
				w = Object(r.a)(O.q),
				M = Object(r.a)(O.p),
				A = Object(r.a)(O.o),
				T = Object(r.a)(O.w),
				N = Object(r.a)(O.v),
				F = Object(r.a)(O.u),
				L = (e, t, n) => async (r, a, {
					apiContext: i
				}) => {
					let l, m, u;
					switch (t) {
						case o.pb.Edited:
							l = _, m = R, u = y;
							break;
						case o.pb.Modqueue:
							l = I, m = k, u = E;
							break;
						case o.pb.Reports:
							l = j, m = S, u = P;
							break;
						case o.pb.Spam:
							l = w, m = A, u = M;
							break;
						case o.pb.Unmoderated:
							l = T, m = F, u = N;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					r(l());
					const b = await Object(c.b)(i(), t, n);
					if (b.ok) {
						r(u({
							listingKey: e,
							page: `${n.page||p.b}`,
							response: b.body
						}))
					} else r(m(b.error)), r(Object(d.f)({
						kind: h.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, D = Object(r.a)(O.k), V = Object(r.a)(O.b), B = e => async (t, n, {
					apiContext: o
				}) => {
					const r = n(),
						a = r.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						i = r.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						l = r.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: m
						} = r.platform.currentPage.urlParams,
						u = m;
					if (e && i || l || !a) return;
					const p = await Object(c.b)(o(), u, {
						moderated_after: a
					});
					p.ok ? (t(D(p.body)), p.body.moderatedAfter ? t(B()) : t(V())) : t(Object(d.f)({
						kind: h.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, H = Object(r.a)(O.t), U = Object(r.a)(O.s), W = Object(r.a)(O.r), z = (e, t, n) => async (o, r, {
					apiContext: x
				}) => {
					o(Object(a.c)());
					const g = r(),
						O = Object(b.g)(g),
						I = g.user.account && g.user.account.displayText;
					Object(l.d)(l.a.ModQueue);
					const E = Object(l.c)(l.a.ModQueue);
					Object(v.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...C.defaults(g),
						actionInfo: C.actionInfo(g, {
							count: O.length,
							paneName: g.platform.currentPage ? g.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: C.screen(g),
						correlationId: E
					});
					for (let t = 0; t < O.length; t++) {
						const n = O[t];
						let s = e;
						[p.a.Approve, p.a.Remove, p.a.Spam].includes(e) && (Object(u.a)(n) ? s += "_link" : s += "_comment"), Object(v.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...C.defaults(g),
							actionInfo: C.actionInfo(g, {
								count: O.length,
								paneName: g.platform.currentPage ? g.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: C.comment(g, n),
							post: C.post(g, n),
							profile: C.profileByPostOrCommentId(g, n),
							screen: C.screen(g),
							subreddit: C.subredditByPostOrCommentId(g, n),
							correlationId: E
						})
					}
					Object(l.b)(l.a.ModQueue);
					const k = {
						ids: O
					};
					t && (k.text = Object(m.g)(t) || "", k.flairTemplateId = ""), n && (k.cssClass = n, k.flairTemplateId = n);
					const _ = await Object(c.a)(x(), e, k);
					if (_.ok) {
						o(Object(a.b)({
							..._.body,
							operation: e,
							ids: O,
							username: I,
							options: {
								flair: t
							}
						}));
						const n = function(e, t) {
							switch (e) {
								case p.a.Approve:
									return s.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [s.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case p.a.Flair:
									return s.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case p.a.IgnoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case p.a.Lock:
									return s.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [s.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case p.a.MarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case p.a.RemovalReason:
									return s.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case p.a.Remove:
									return s.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [s.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case p.a.Spam:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [s.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case p.a.Spoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case p.a.UnignoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case p.a.Unlock:
									return s.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [s.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case p.a.UnmarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case p.a.Unspoiler:
								case p.a.Unspoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, O.length);
						if (e !== p.a.Approve && e !== p.a.Flair) {
							let t, r;
							const l = g.platform.currentPage && g.platform.currentPage.queryParams && g.platform.currentPage.queryParams.subreddit,
								m = l && Object(f.D)(g, l);
							e === p.a.Remove && m && O.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), r = Object(i.fetchReasonsAndOpenModal)(m, O));
							const u = Object(d.e)(n, h.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, {
								apiContext: n
							}) => {
								e(H());
								const o = t(),
									r = Object.keys(o.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									i = o.pages.modHub.modQueue.bulkAction.undoLastAction[r],
									l = o.user.account && o.user.account.displayText;
								e(Object(a.c)());
								const m = await Object(c.a)(n(), r, {
									ids: i
								});
								m.ok ? e(U({
									...m.body,
									operation: r,
									ids: i,
									username: l
								})) : (e(W(m.error)), e(Object(d.f)({
									kind: h.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, r);
							o(Object(d.f)(u))
						} else {
							const e = Object(d.e)(n, h.b.SuccessMod);
							o(Object(d.f)(e))
						}
					} else {
						o(Object(a.a)(_.error));
						const e = Object(d.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), h.b.Error);
						o(Object(d.f)(e))
					}
				}, G = Object(r.a)(O.a), X = Object(r.a)(O.c), q = Object(r.a)(O.d)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return Z
			})), n.d(t, "removalReasonsLoaded", (function() {
				return Y
			})), n.d(t, "removalReasonsFailed", (function() {
				return $
			})), n.d(t, "removalReasonsRequested", (function() {
				return ee
			})), n.d(t, "removalReasonAddedPending", (function() {
				return te
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return ne
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return se
			})), n.d(t, "addRemovalReason", (function() {
				return oe
			})), n.d(t, "editRemovalReasonPending", (function() {
				return re
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return ae
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return ie
			})), n.d(t, "editRemovalReason", (function() {
				return de
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return ce
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return le
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), n.d(t, "deleteRemovalReason", (function() {
				return ue
			})), n.d(t, "removedItemsSelected", (function() {
				return pe
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return be
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return fe
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return Ce
			})), n.d(t, "removalReasonMessagePending", (function() {
				return ve
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return xe
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ge
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return Oe
			})), n.d(t, "submitRemovalReason", (function() {
				return Ie
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return Ee
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__ADD_PENDING",
				i = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				c = "REMOVALREASONS__EDIT_PENDING",
				l = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				u = "REMOVALREASONS__DELETE_PENDING",
				p = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var b = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case a:
					case i:
					case c:
					case l:
					case u:
					case p:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case m:
					case h:
						return t.payload;
					default:
						return e
				}
			};
			var f = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case a:
						case c:
						case u:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case i:
						case d:
						case l:
						case m:
						case p:
						case h:
							return !1;
						default:
							return e
					}
				},
				C = Object(r.c)({
					error: b,
					pending: f
				});
			const v = {};
			var x = (e = v, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							response: n
						} = t.payload, {
							data: s
						} = n;
						return {
							...e,
							...s
						}
					}
					case i:
					case l: {
						const {
							reason: n
						} = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case p: {
						const {
							reasonId: n
						} = t.payload, {
							[n]: s,
							...o
						} = e;
						return o
					}
					default:
						return e
				}
			};
			const g = {};
			var O = (e = g, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: n,
							response: s
						} = t.payload, {
							order: o
						} = s;
						return {
							...e,
							[n]: o
						}
					}
					case i: {
						const {
							subredditId: n,
							reason: s
						} = t.payload;
						return {
							...e,
							[n]: [...e[n], s.id]
						}
					}
					case p: {
						const {
							subredditId: n,
							reasonId: s
						} = t.payload, o = [...e[n]].filter(e => e !== s);
						return {
							...e,
							[n]: o
						}
					}
					default:
						return e
				}
			};
			var I = (e = null, t) => {
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: n
							} = t.payload;
							return {
								itemIds: n,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				E = Object(r.c)({
					api: C,
					models: x,
					reasonOrder: O,
					removedItemIds: I
				}),
				k = n("./src/lib/constants/index.ts"),
				_ = n("./src/lib/makeActionCreator/index.ts"),
				y = n("./src/lib/makeCommentsPageKey/index.ts"),
				R = n("./src/lib/makeDraftKey/index.ts"),
				j = n("./src/reddit/actions/bulkActions/index.ts"),
				P = n("./src/reddit/actions/comment/index.ts"),
				S = n("./src/reddit/actions/comment/authoring.ts"),
				w = n("./src/reddit/actions/comment/moderation.ts"),
				M = n("./src/reddit/actions/modal.ts"),
				A = n("./src/reddit/actions/post.ts"),
				T = n("./src/reddit/actions/toaster.ts"),
				N = n("./src/reddit/constants/modals.ts"),
				F = n("./src/lib/makeApiRequest/index.ts"),
				L = n("./src/lib/omitHeaders/index.ts"),
				D = n("./src/reddit/constants/headers.ts"),
				V = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const B = (e, t) => Object(F.a)(Object(L.a)(e, [D.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: k.hb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				H = (e, t, n) => Object(F.a)(Object(L.a)(e, [D.a]), {
					endpoint: Object(V.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: k.hb.POST,
					type: "json",
					data: t
				});
			var U = n("./src/reddit/helpers/isPost.ts"),
				W = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				z = n("./src/reddit/helpers/routeKey/index.ts"),
				G = n("./src/reddit/models/ModQueue/index.ts"),
				X = n("./src/reddit/models/PostDraft/index.ts"),
				q = n("./src/reddit/models/RemovalReason/index.ts"),
				K = n("./src/reddit/models/Toast/index.ts"),
				Q = n("./src/reddit/selectors/comments.ts"),
				J = n("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: E
				}
			});
			const Z = Object(_.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(_.a)("REMOVALREASONS__LOAD_SUCCESS"),
				$ = Object(_.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n().subreddits.models[e].name;
					t(Z());
					const r = await ((e, t) => Object(F.a)(Object(L.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: k.hb.GET
					}))(s(), o);
					r.ok ? t(Y({
						subredditId: e,
						response: r.body
					})) : t($(r.error))
				}, te = Object(_.a)(a), ne = Object(_.a)(i), se = Object(_.a)(d), oe = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const a = o().subreddits.models[e].name;
					n(te());
					const i = await ((e, t, n) => Object(F.a)(Object(L.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: k.hb.POST,
						data: n
					}))(r(), a, t);
					if (i.ok) {
						const {
							id: o
						} = i.body, r = {
							...t,
							id: o
						};
						n(ne({
							subredditId: e,
							reason: r
						})), n(Object(T.f)({
							kind: K.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(se(i.error))
				}, re = Object(_.a)(c), ae = Object(_.a)(l), ie = Object(_.a)(m), de = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const a = o().subreddits.models[e].name;
					n(re());
					const i = await ((e, t, n) => Object(F.a)(Object(L.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: k.hb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(r(), a, t);
					i.ok ? (n(ae({
						subredditId: e,
						reason: t
					})), n(Object(T.f)({
						kind: K.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(ie(i.error))
				}, ce = Object(_.a)(u), le = Object(_.a)(p), me = Object(_.a)(h), ue = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const a = o().subreddits.models[e].name;
					n(ce());
					const i = await ((e, t, n) => Object(F.a)(Object(L.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: k.hb.DELETE
					}))(r(), a, t);
					i.ok ? (n(le({
						subredditId: e,
						reasonId: t
					})), n(Object(T.f)({
						kind: K.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(me(i.error))
				}, pe = Object(_.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || n(ee(e)), n(pe({
						subredditId: e,
						itemIds: t
					})), n(Object(M.i)(N.a.ADD_REMOVAL_REASON))
				}, be = Object(_.a)("REMOVALREASONS__SUBMIT_PENDING"), fe = Object(_.a)("REMOVALREASONS__SUBMIT_SUCCESS"), Ce = Object(_.a)("REMOVALREASONS__SUBMIT_FAILED"), ve = Object(_.a)("REMOVALREASONS__MESSAGE_PENDING"), xe = Object(_.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ge = Object(_.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Oe = Object(_.a)("REMOVALREASONS__MESSAGE_FAILED"), Ie = (e, t, n, s, o) => async (r, a, {
					apiContext: i
				}) => {
					const d = a(),
						c = d.user.account && d.user.account.displayText,
						l = e[0],
						m = Object(U.a)(l) ? q.e.Post : q.e.Comment,
						u = m === q.e.Post ? d.posts.models[l] : d.features.comments.models[l],
						p = m === q.e.Post ? A.T : P.i;
					if (!u || !c) return !1;
					r(be()), r(p({
						[l]: {
							modNote: o,
							modRemovalReason: t && t.title,
							modReasonBy: c
						}
					}));
					const h = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						b = await B(i(), h);
					if (b.ok) {
						if (r(fe()), t) {
							r(ve());
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								a = await H(i(), Object(q.h)(o, m), m);
							if (a.ok) {
								if (s === q.f.Public) {
									if (r(ge()), a.body) {
										const e = Object(W.a)(a.body, c),
											t = {
												comment: e,
												parentId: l
											},
											n = Object(J.f)(d),
											s = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let o = n && s && Object(z.a)(s, d, d.posts.models[e.postId]);
										if (o || (o = Object(y.a)(e.postId, null, {
												sort: k.t,
												hasSortParam: !0
											})), m === q.e.Post) {
											const n = Object(R.a)(X.c.replyToPost, l);
											r(Object(S.o)({
												...t,
												headCommentId: Object(Q.w)(d, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: n
											}));
											const s = d.postStickiedComments.data[l];
											r(Object(w.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), s && s !== e.id && r(Object(P.i)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (m === q.e.Comment) {
											const e = Object(R.a)(X.c.replyToComment, u.id),
												n = Object(Q.j)(d, {
													commentId: l,
													commentsPageKey: o
												});
											r(Object(S.m)({
												...t,
												parentCommentId: l,
												commentsPageKey: o,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else r(xe());
								return !0
							}
							return r(Oe(a.error)), !1
						}
					} else r(Ce(b.error)), r(p({
						[l]: {
							modNote: u.modNote,
							modRemovalReason: u.modRemovalReason,
							modReasonBy: u.modReasonBy
						}
					}));
					return !1
				}, Ee = (e, t, n, o, r) => async (a, i, {
					apiContext: d
				}) => {
					const c = i(),
						l = c.user.account && c.user.account.displayText;
					if (!l) return;
					a(be());
					const m = Object(T.f)({
							kind: K.b.SuccessMod,
							text: s.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [s.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						u = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						p = await B(d(), u);
					if (p.ok) {
						const s = {
							ids: e,
							operation: G.a.RemovalReason,
							username: l,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (a(Object(j.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								r = await H(d(), Object(q.h)(s, q.e.Bulk), q.e.Bulk);
							r.ok ? (a(xe()), a(m)) : a(Oe(r.error))
						} else a(m)
					} else a(Ce(p.error))
				}
		},
		"./src/reddit/components/ClassicPost/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/PostLeftRail/index.tsx"),
				c = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				u = n("./src/reddit/models/Vote/index.ts"),
				p = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				h = n.n(p),
				b = n("./src/reddit/components/ClassicPost/placeholder.m.less"),
				f = n.n(b);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(l.t)(),
				x = Object(a.c)({
					isFakeSubreddit: l.x
				}),
				g = Object(r.b)(x),
				O = e => {
					const t = {
						interactive: !1,
						voteState: u.a.notVoted
					};
					return o.a.createElement("div", {
						className: Object(i.a)(e.className, f.a.emptyVerticalVotes)
					}, o.a.createElement(c.d, C({
						key: "u"
					}, t)), e.children, o.a.createElement(c.c, C({
						key: "d"
					}, t)))
				},
				I = () => o.a.createElement(O, null, o.a.createElement("div", {
					className: f.a.emptyScore,
					key: "s"
				}));
			t.b = v(g(e => o.a.createElement("div", {
				className: Object(i.a)(e.className, h.a.classicPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement(d.b, null, o.a.createElement(I, null)), o.a.createElement("div", {
				className: f.a.mainBody
			}, o.a.createElement("div", {
				className: f.a.thumbnailContainer
			}, o.a.createElement("div", {
				className: Object(i.a)(f.a.thumbnail, Object(m.b)(e))
			})), o.a.createElement("div", {
				className: f.a.content
			}, o.a.createElement("div", {
				key: "a"
			}, o.a.createElement("div", {
				key: "aa",
				className: Object(i.a)(f.a.title, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "ab",
				className: Object(i.a)(f.a.meta, Object(m.b)(e))
			})), o.a.createElement("div", {
				key: "f",
				className: f.a.flatlist
			}, o.a.createElement("div", {
				key: "fa",
				className: Object(i.a)(f.a.flatlistExpando, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fb",
				className: f.a.flatlistSeparator
			}), o.a.createElement("div", {
				key: "fc",
				className: Object(i.a)(f.a.flatListItemOne, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fd",
				className: Object(i.a)(f.a.flatListItemTwo, Object(m.b)(e))
			})))))))
		},
		"./src/reddit/components/ClassicPost/placeholder.m.less": function(e, t, n) {
			e.exports = {
				thumbnailContainer: "_3cwq18vPueuAxRSrd1foNB",
				mainBody: "_1jxw1P65tWXN5u8kVHlX-n",
				content: "_2KR7fLQx_7rIv8QaoeXKZw",
				emptyScore: "_6w7aNMh3t6UMe07Q6oWFE",
				emptyVerticalVotes: "_1Xs9oeessHWcuF0VTVxRnl",
				thumbnail: "_2XOZ5bYpLdswvBAYUNa-ly",
				title: "n3AVRrP7HOfc0gAtGFpfv",
				meta: "_1BoNlCqTsaeLXkuZbADxyl",
				flatlist: "_1IgQuZI8L6A0NcShWmf08y",
				flatlistExpando: "_2AMaFX8Gwojg29X4_nOnaL",
				flatlistSeparator: "oljBm1Q059l3l84VHO9VM",
				flatListItemOne: "_2xeK0Acj_38O5kqiHgp7VC",
				flatListItemTwo: "_3WphuhFsMSKk2tQyD3fZeI"
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/comment/moderation.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/ModModeReports/helpers.ts"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/helpers/trackers/modTools.ts"),
				C = n("./src/reddit/selectors/moderatingComments.ts"),
				v = n("./src/reddit/selectors/moderatorPermissions.ts"),
				x = n("./src/reddit/selectors/tooltip.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				I = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				E = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				k = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Show/index.tsx"),
				y = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				R = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				j = n.n(R);
			const P = Object(b.t)(),
				S = e => `Distinguish--Dropdown--${e}`,
				w = Object(i.c)({
					currentUser: g.j,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(C.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(x.b)(S(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(b.g)(e, t) || Object(v.l)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: b.R
				}),
				M = Object(a.b)(w, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (n, s) => e(Object(m.b)(t.id, n, s)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(u.h)({
						tooltipId: S(t.id)
					}))
				}));
			t.a = P(M(l.a.wrapped(Object(h.c)(({
				className: e,
				comment: t,
				currentUser: n,
				isCommentAuthor: o,
				collapsedBecauseCrowdControl: a,
				moderatorPermissions: i,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: u,
				onLockComment: h,
				onRemoveComment: b,
				onShowComment: C,
				onSpamComment: v,
				onToggleDistinguishDropdown: x,
				sendEvent: g,
				...R
			}) => {
				const P = Object(p.b)(t),
					S = t.isApproved && P,
					w = !t.isRemoved || t.bannedBy === c.k,
					M = a,
					A = e => g(Object(f.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || P) && r.a.createElement(y.a, {
					text: S ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), A("approve")
					}
				}, r.a.createElement(O.a, {
					className: j.a.icon
				})), w && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.a, {
					text: t.bannedBy === c.k ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						b(), t.bannedBy === c.k ? A("confirm_remove") : A("remove")
					}
				}, r.a.createElement(E.a, {
					className: j.a.icon
				})), r.a.createElement(y.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						v(), A("spam")
					}
				}, r.a.createElement(k.a, {
					className: j.a.icon
				}))), r.a.createElement(y.a, {
					text: t.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						h(), A(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(I.a, {
					className: j.a.icon
				})), M && r.a.createElement(y.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						C()
					}
				}, r.a.createElement(_.a, {
					className: Object(d.a)(j.a.icon, j.a.Show)
				})))
			}), "CommentModToolsFlatlist", j.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, n) {
			e.exports = {
				author: "DjcdNGtVXPcxG0yiFXIoZ",
				authorLine: "_1a_HxF03jCyxnx706hQmJR",
				headerLine: "_2nobNdIwmDrXK7NZps5zUO",
				flair: "cFNx42ceihnMpvAsovOTi",
				baselineItem: "_3QEK34iVL1BjyHAVleVVNQ",
				container: "-Xcv3XBXmgiY2X5RqaPbO",
				cryptoPoints: "_2bfuNFXt4pN8991xPpimzy",
				role: "_3AgEmWP1qkCB8nds7LhzEB",
				achievementFlair: "_2a_XgY10KOzM0PRvywwDuY",
				cakeDay: "TNzy9Y4Ql8v80YssZ59GR",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, n) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A",
				modAchievement: "_2am63Mu1vtyM2MwmCJoxJp"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, n) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, n) {
			e.exports = {
				cakedayIcon: "_12wHSVQW6wUCbn56VnIfI-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, n) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, n) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, n) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, n) {
			e.exports = {
				iconStyles: "S8WH2aCfP030wVxp0iR_o",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				NftAuthor: "kDnKKJWz2PJGoalLInCW1",
				nftAuthor: "kDnKKJWz2PJGoalLInCW1",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				authorRole: "_3uDFtRr_CTErFPJQBtzECl",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				separator: "_1PuBpmbH2FA5sozYR7EuCs",
				userBadges: "_3Ofd-Ek86mwX500i92F84q",
				cakeDay: "UG2sa-VYMzrn7D1iNXtfR"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/AwardBadges/index.tsx"),
				m = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				p = n.n(u);
			const h = e => {
				const {
					className: t,
					comment: n,
					isAuthorDeleted: s,
					isLivestreaming: o,
					isStrong: a,
					style: i
				} = e;
				return r.a.createElement(m.a, {
					className: Object(d.a)(p.a.commentAuthorLink, t),
					author: n.author,
					isAuthorDeleted: s,
					isLivestreaming: o,
					isStrong: a,
					style: i
				}, n.author)
			};
			var b = n("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx"),
				f = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				C = n("./src/reddit/components/Flair/index.tsx"),
				v = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				x = n("./src/reddit/components/PostTopMeta/index.tsx"),
				g = n("./src/reddit/controls/MetaData/index.tsx"),
				O = n("./src/reddit/helpers/flair.ts"),
				I = n("./src/reddit/helpers/trackers/userFlair.ts"),
				E = n("./src/reddit/hooks/useTracking.ts"),
				k = n("./src/reddit/models/Comment/index.ts"),
				_ = n("./src/reddit/selectors/experiments/econ/index.ts"),
				y = n("./src/reddit/selectors/gold/powerups/index.ts"),
				R = n("./src/lib/constants/index.ts"),
				j = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				P = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				S = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				w = n.n(S);
			const M = ({
				authorClassName: e,
				className: t,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				renderedInOverlay: a
			}) => r.a.createElement(P.b, {
				className: Object(d.a)(w.a.authorHoverCard, t),
				postOrComment: n,
				tooltipType: a ? x.c.Lightbox : void 0
			}, r.a.createElement(j.b, {
				ignore: Object(k.f)(n) || !!n.distinguishType && n.distinguishType !== R.E.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, r.a.createElement(h, {
				className: e,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				isAuthorDeleted: Object(k.f)(n)
			})));
			var A = n("./src/config.ts"),
				T = n("./src/reddit/actions/tooltip.ts"),
				N = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const F = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`;
			var L = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				D = n.n(L);
			const V = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const o = Object(a.d)(),
					i = () => o(Object(T.h)({
						tooltipId: c
					})),
					c = F("CommentTopMeta--cakeday--", t, n),
					l = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(d.a)(D.a.cakedayIcon, e),
					src: `${A.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: l,
					id: c,
					onMouseEnter: i,
					onMouseLeave: i,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(N.c, {
					tooltipId: c,
					text: l
				}))
			};
			var B = n("./src/lib/addQueryParams/index.ts"),
				H = n("./src/lib/humanizeDateTime/index.ts"),
				U = n("./src/lib/timeAgo/index.ts"),
				W = n("./src/reddit/actions/comment/index.ts");
			const z = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						renderedInOverlay: o
					} = e, i = Object(a.d)(), d = F("CommentTopMeta--Created--", n.id, o), c = () => i(Object(T.h)({
						tooltipId: d
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(B.a)(n.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: d,
						onClick: () => {
							G(i, n.id)
						},
						onMouseEnter: c,
						onMouseLeave: c,
						target: "_blank",
						rel: "noopener noreferrer"
					}, Object(U.d)(n.created, {
						noPostfix: s,
						shortenedUnit: s
					}), r.a.createElement(N.c, {
						tooltipId: d,
						text: Object(H.a)(n.created)
					}))
				},
				G = (e, t) => {
					window.addEventListener("focus", (function n() {
						X(e, t, n)
					}))
				},
				X = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(W.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(W.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var q = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				K = n.n(q);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = () => r.a.createElement(g.a, {
				className: K.a.crowdControlText
			}, Q._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Z = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				Y = n.n(Z);
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ee = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(g.a, {
				className: Y.a.editedText
			}, $._("edited {time}", [$._param("time", Object(U.d)(t, {
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var te = n("./src/reddit/helpers/isRemoved.ts"),
				ne = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				se = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				oe = n("./src/reddit/icons/fonts/index.tsx"),
				re = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				de = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				le = n("./src/reddit/models/AutomatedReporting/index.ts"),
				me = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				ue = n.n(me);
			const pe = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: o
			}) => {
				const i = Object(a.d)(),
					c = e => () => i(Object(T.f)({
						tooltipId: e
					})),
					l = () => i(Object(T.i)()),
					m = t => F(t, e.id, o),
					u = m("CommentTopMeta--Automod--"),
					p = m("CommentTopMeta--Approve--"),
					h = m("CommentTopMeta--Remove--"),
					b = m("CommentTopMeta--Report--"),
					f = m("CommentTopMeta--Spam--"),
					C = e.bannedBy && Object(le.b)(e.bannedBy),
					v = c(h);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(re.a, {
					className: ue.a.approveIcon,
					desc: Object(ne.a)(e),
					id: p,
					onMouseEnter: c(p),
					onMouseLeave: l,
					isFilled: !0
				}), r.a.createElement(N.c, {
					tooltipId: p,
					text: Object(ne.a)(e)
				})), Object(te.a)(e) && !C && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: ue.a.removeIcon,
					desc: Object(ne.c)(e),
					id: h,
					onMouseEnter: v,
					onMouseLeave: l,
					isFilled: !0
				}), r.a.createElement(N.c, {
					tooltipId: h,
					text: Object(ne.c)(e)
				})), Object(te.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: ue.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(te.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !C && r.a.createElement("a", {
					className: ue.a.removalReason,
					onMouseEnter: v,
					onMouseLeave: l
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(ae.a, {
					className: ue.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(ce.a, {
					className: ue.a.spamIcon,
					desc: Object(ne.e)(e),
					id: f,
					onMouseEnter: c(f),
					onMouseLeave: l,
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(N.c, {
					tooltipId: f,
					text: Object(ne.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(oe.a, {
					name: "bot",
					isFilled: !0,
					className: Object(d.a)(ue.a.automoderatorIcon, {
						[ue.a.removed]: !!e.bannedBy
					}),
					"aria-label": ne.b,
					id: u,
					key: u,
					onMouseEnter: c(u),
					onMouseLeave: l
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(N.c, {
					tooltipId: u,
					text: ne.b
				}), Object(se.a)(e) && r.a.createElement(de.a, {
					className: ue.a.reportIcon,
					desc: Object(ne.d)(e.numReports),
					id: b,
					onMouseEnter: c(b),
					onMouseLeave: l,
					isFilled: !0
				}), Object(se.a)(e) && r.a.createElement(N.c, {
					tooltipId: b,
					text: Object(ne.d)(e.numReports)
				}), C && r.a.createElement("a", {
					className: ue.a.removalReason
				}, s.fbt._("• Removed by the Automated {filterName}", [s.fbt._param("filterName", C)], {
					hk: "3C408F"
				})))
			};
			var he, be = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(he || (he = {}));
			var fe = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				Ce = n.n(fe);
			const ve = {
					[he.Admin]: {
						color: be.b,
						label: s.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => s.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[he.Mod]: {
						color: be.c,
						label: s.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[he.Op]: {
						color: be.a,
						label: s.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => s.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[he.AlumniAdmin]: {
						color: be.b,
						label: s.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => s.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[he.Contractor]: {
						color: be.a,
						label: s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => s.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				xe = e => {
					const t = Object(a.d)(),
						n = function(e) {
							return e.isAdmin ? he.Admin : e.isMod ? he.Mod : e.isOp ? he.Op : e.distinguishType === R.E.ALUMNI_ADMIN ? he.AlumniAdmin : e.authorIsContractor ? he.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === he.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: o,
						label: i,
						tooltipTemplate: c
					} = ve[n], l = F(s, e.comment.id, e.renderedInOverlay), m = c(e), u = () => t(Object(T.h)({
						tooltipId: l
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(d.a)(Ce.a.role, e.className),
						style: {
							color: o
						},
						id: l,
						onMouseEnter: u,
						onMouseLeave: u
					}, r.a.createElement("span", null, i), n === he.Mod && r.a.createElement(ge, null)), r.a.createElement(N.c, {
						tooltipId: l,
						text: m
					}))
				},
				ge = () => r.a.createElement("img", {
					alt: "Moderator Achievement",
					className: Ce.a.modAchievement,
					src: `${A.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var Oe = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				Ie = n.n(Oe);
			const {
				fbt: Ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ke = () => r.a.createElement(g.a, {
				className: Ie.a.stickiedText
			}, Ee._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var _e = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				ye = n.n(_e);
			const Re = e => {
				const {
					className: t,
					collapsedBecauseCrowdControl: n,
					comment: o,
					flair: i,
					ignoreLock: c,
					isLivestreaming: m,
					renderedInOverlay: u,
					subredditDisplayText: p,
					renderContractorBadge: h
				} = e, R = Object(E.a)(), j = o.subredditId, P = Object(a.e)(e => Object(y.f)(e, {
					subredditId: j
				}) && Object(_.g)(e));
				if (o.isDeleted) return r.a.createElement("div", {
					className: Object(d.a)(ye.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: ye.a.authorLine
				}, r.a.createElement("span", {
					className: ye.a.metaText
				}, o.deletedBy === k.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(g.c, {
					className: ye.a.separator
				}), r.a.createElement(z, {
					key: "Created",
					className: ye.a.metaText,
					comment: o,
					compact: !0,
					renderedInOverlay: u
				})));
				return r.a.createElement("div", {
					className: Object(d.a)(ye.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: ye.a.authorLine
				}, !Object(k.f)(o) && r.a.createElement(f.b, {
					className: ye.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: o.subredditId,
					userId: o.authorId,
					uniqueIdentifier: o.id
				}), r.a.createElement("div", {
					className: ye.a.baselineItem
				}, r.a.createElement(M, {
					authorClassName: ye.a.author,
					comment: o,
					isLivestreaming: m,
					renderedInOverlay: u
				})), n && r.a.createElement(J, null), r.a.createElement(xe, {
					className: ye.a.role,
					comment: o,
					subredditDisplayText: p,
					renderContractorBadge: h,
					renderedInOverlay: u
				}), o.isAuthorCakeday ? r.a.createElement(V, {
					className: ye.a.cakeDay,
					commentId: o.id,
					renderedInOverlay: u
				}) : !Object(k.f)(o) && P && r.a.createElement(b.a, {
					className: ye.a.achievementFlair,
					subredditId: o.subredditId,
					userId: o.authorId,
					onHover: () => {
						R(Object(I.e)(o.id, o.subredditId, o.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(v.a, {
					className: ye.a.cryptoPoints,
					contentId: o.id,
					subredditId: o.subredditId,
					userId: o.authorId,
					username: o.author
				}), r.a.createElement(g.c, {
					className: ye.a.separator
				}), r.a.createElement(z, {
					key: "Created",
					className: ye.a.metaText,
					comment: o,
					compact: !0,
					renderedInOverlay: u
				}), o.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, {
					className: ye.a.separator
				}), r.a.createElement(ke, null)), o.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, {
					className: ye.a.separator
				}), r.a.createElement(ee, {
					compact: !0,
					editedAt: o.editedAt
				})), r.a.createElement(pe, {
					comment: o,
					ignoreLock: c,
					renderedInOverlay: u
				}), r.a.createElement(l.a, {
					thing: o,
					tooltipType: u ? x.c.Lightbox : void 0
				})), i && !Object(O.o)(i) && r.a.createElement("span", {
					className: ye.a.userFlairLine
				}, r.a.createElement(C.b, {
					className: ye.a.flair,
					flair: i,
					forceSmallEmojis: !0
				})))
			};
			var je = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Pe = n("./src/reddit/selectors/economics.ts"),
				Se = n("./src/reddit/models/Flair/index.ts"),
				we = n("./src/reddit/selectors/subreddit.ts"),
				Me = n("./src/reddit/selectors/userFlair.ts"),
				Ae = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Te = n.n(Ae);

			function Ne() {
				return (Ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Fe = c.a.wrapped(C.b, "RightPositionedAuthorFlair", Te.a),
				Le = c.a.span("DeletedText", Te.a),
				De = c.a.wrapped(g.a, "MetaSeparator", Te.a),
				Ve = Object(a.b)(() => Object(i.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(Pe.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(we.H)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Me.d)(e, {
						subredditId: t.subredditId
					})
				}));
			t.a = Ve(e => {
				const {
					children: t,
					className: n,
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: a,
					commentsPageKey: i,
					compact: c,
					flair: m,
					flairPosition: u,
					hasBadges: p,
					isLivestreaming: h,
					isPostComment: b,
					ignoreFlairPosition: O,
					ignoreLock: I,
					renderContractorBadge: E,
					renderedInOverlay: _,
					subredditDisplayText: y,
					userHasNft: R
				} = e, j = r.a.createElement(r.a.Fragment, null, r.a.createElement(je.b, {
					commentId: a.id
				}), r.a.createElement(je.a, {
					commentId: a.id,
					commentsPageKey: i
				}));
				if (b) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Re, {
					className: Object(d.a)(n, {
						[Te.a.collapsed]: s
					}),
					collapsedBecauseCrowdControl: o,
					comment: a,
					flair: m || null,
					ignoreLock: I,
					isLivestreaming: h,
					renderedInOverlay: _,
					subredditDisplayText: y,
					renderContractorBadge: !!E
				}), j);
				if (a.isDeleted) return r.a.createElement(Be, Ne({}, e, {
					className: Object(d.a)(n, Te.a.container, {
						[Te.a.collapsed]: s
					})
				}));
				if (s) return r.a.createElement(He, Ne({}, e, {
					className: Object(d.a)(n, Te.a.container, {
						[Te.a.collapsed]: s
					})
				}));
				const P = !O && u === Se.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(n, Te.a.container, {
						[Te.a.collapsed]: s,
						[Te.a.hasBadges]: p,
						[Te.a.liveStreaming]: h
					}),
					"data-testid": "comment-top-meta"
				}, m && P && r.a.createElement(C.b, {
					flair: m,
					forceSmallEmojis: c
				}), !Object(k.f)(a) && r.a.createElement(f.b, {
					className: Te.a.userBadges,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), t && t, r.a.createElement(M, {
					authorClassName: R ? Te.a.NftAuthor : void 0,
					comment: a,
					isLivestreaming: h,
					isStrong: !!c,
					renderedInOverlay: _
				}), o && r.a.createElement(J, null), o && r.a.createElement(g.c, {
					className: Te.a.metaText,
					key: "crowdControlSeparator"
				}), m && !P && r.a.createElement(Fe, {
					flair: m,
					forceSmallEmojis: c
				}), !c && r.a.createElement(v.a, {
					className: Te.a.publicPoints,
					contentId: a.id,
					metaSeparator: r.a.createElement(g.c, {
						className: Te.a.metaText
					}),
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), j, r.a.createElement(xe, {
					className: Te.a.authorRole,
					comment: a,
					subredditDisplayText: y,
					renderContractorBadge: !!E,
					renderedInOverlay: _
				}), !c && r.a.createElement(r.a.Fragment, null, !a.isDeleted && !b && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.b, {
					className: Te.a.metaText,
					isScoreHidden: a.isScoreHidden,
					score: a.score
				}), r.a.createElement(g.c, {
					className: Te.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(z, {
					key: "Created",
					className: Te.a.MetaLink,
					comment: a,
					renderedInOverlay: _
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, {
					className: Te.a.separator
				}), r.a.createElement(ke, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(g.c, {
					className: Te.a.separator
				}), r.a.createElement(ee, {
					editedAt: a.editedAt
				}))), r.a.createElement(pe, {
					comment: a,
					ignoreLock: I,
					renderedInOverlay: _
				}), r.a.createElement(l.a, {
					thing: a,
					tooltipType: _ ? x.c.Lightbox : void 0
				}))
			});
			const Be = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: o,
						comment: a,
						renderedInOverlay: i
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(Le, null, a.deletedBy === k.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(z, {
						key: "Created",
						className: Te.a.MetaLink,
						comment: a,
						renderedInOverlay: i
					}), n && Ue({
						childrenInfo: t
					}))
				},
				He = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: o
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(h, {
						comment: t,
						isAuthorDeleted: Object(k.f)(t)
					})), r.a.createElement(g.b, {
						className: Te.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(g.c, {
						className: Te.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(z, {
						key: "Created",
						className: Te.a.MetaLink,
						comment: t,
						renderedInOverlay: o
					}), Ue({
						childrenInfo: s
					}))
				},
				Ue = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(De, {
						className: Te.a.metaText
					}, t ? s.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "13XC7a"
					}) : s.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "dhX9w"
					}))
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, n) {
			e.exports = {
				approveIcon: "_3Jlybj1GmQS_PfZVxE6yR1",
				automoderatorIcon: "_2EBjdWEqs2dwPePq0_1vJn",
				lockIcon: "YjyVr4SnBmO7WorLVMXq5",
				removeIcon: "_3M_jIwyB1POxBFR2jnGIp_",
				reportIcon: "_3hI84iVaolaHi85h6liPyp",
				spamIcon: "MufLXlXcv1oes9OlakuXr",
				removed: "_2LQnjoTNHDUWKBOoq2gTlm",
				removalReason: "EM8fL_jC3oe9bruIOZt2U"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, n) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.m.less": function(e, t, n) {
			e.exports = {
				VoteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				voteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				ContentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				contentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				CommentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				commentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				CommentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				commentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				CommentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				commentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				ParentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				parentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				Component: "_29-oldqrqqPwwjRRH0aLqU",
				component: "_29-oldqrqqPwwjRRH0aLqU"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return A
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/actions/comment/index.ts"),
				c = n("./src/reddit/actions/comment/moderation.ts"),
				l = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				m = n("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				u = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				p = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				h = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				b = n("./src/reddit/components/ModModeReports/index.tsx"),
				f = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				C = n("./src/reddit/components/RichTextJson/index.tsx"),
				v = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				x = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/comments.ts"),
				O = n("./src/reddit/selectors/commentSelector.ts"),
				I = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				k = n.n(E),
				_ = n("./src/lib/lessComponent.tsx");
			const y = _.a.div("VoteSpacer", k.a),
				R = _.a.div("ContentWrapper", k.a),
				j = _.a.div("CommentContentWrapper", k.a),
				P = _.a.div("CommentBody", k.a),
				S = _.a.div("ParentPostTitle", k.a),
				w = _.a.div("CommentParentWrapper", k.a),
				M = Object(a.c)({
					comment: (e, t) => Object(O.a)(e, t),
					flair: g.e,
					subreddit: I.H
				}),
				A = Object(r.b)(M, (e, {
					commentId: t,
					trackClick: n
				}) => ({
					onIgnoreReports: () => e(Object(c.g)(t)),
					onVoteClick: s => {
						const [o, r] = s === x.a.upvoted ? [Object(d.q)(t), "upvote_comment"] : [Object(d.j)(t), "downvote_comment"];
						n(r)(), e(o)
					}
				})),
				T = Object(i.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = A(_.a.wrapped(e => {
				const {
					className: t,
					comment: n,
					flair: s,
					hasReports: r,
					isCheckboxSelected: a = !1,
					onIgnoreReports: i,
					onVoteClick: d,
					showModTools: c,
					subreddit: x,
					showBulkActionCheckbox: g,
					toggleCheckbox: O
				} = e;
				return o.a.createElement(m.a, {
					className: t,
					clickTrackingId: n.id,
					permalink: n.permalink
				}, o.a.createElement(f.a, {
					model: n,
					handleVote: d,
					showBulkActionCheckbox: g,
					isCheckboxSelected: a,
					toggleCheckbox: O,
					subreddit: x
				}), o.a.createElement(y, null, o.a.createElement(R, null, o.a.createElement(w, null, n.postTitle && o.a.createElement(S, null, n.postTitle), n.postAuthor && o.a.createElement(h.a, {
					comment: n
				})), o.a.createElement(j, null, o.a.createElement(u.a, {
					comment: n
				}, o.a.createElement(P, null, o.a.createElement(C.a, {
					content: Object(v.a)(n),
					mediaMetadata: n.media && n.media.mediaMetadata,
					rtJsonElementProps: T(e)
				})), o.a.createElement(p.a, {
					comment: n,
					flair: s,
					subredditName: x ? x.displayText : null
				}), r && o.a.createElement(b.a, {
					onIgnoreReports: i,
					reportable: n
				}), c && !n.isDeleted && o.a.createElement(l.a, {
					comment: n
				}))))))
			}, "Component", k.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				i = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				d = n("./src/reddit/helpers/overlay/index.ts");
			const c = Object(r.b)(null, e => ({
				openLightbox: t => e(Object(d.a)(t))
			}));
			class l extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: n,
						...s
					} = this.props, r = s => e(() => s.metaKey || s.ctrlKey || 1 === s.button ? window.open(Object(a.a)(t, {
						context: 3
					})) : n(Object(a.a)(t, {
						context: 3
					})))(s);
					return o.a.createElement("div", {
						className: s.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && r(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && r(e)
						}
					}, s.children)
				}
			}
			t.a = c(Object(i.c)(l))
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				DashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u",
				dashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				i = n.n(a);
			const d = r.a.div("DashWrapper", i.a);
			t.a = e => null === e.comment.parentId ? o.a.createElement(d, null, e.children) : o.a.createElement(d, null, o.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				subredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				TopMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				topMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				Inline: "meK3ndVOmnvQt6wVaAg5W",
				inline: "meK3ndVOmnvQt6wVaAg5W",
				PostedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				postedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				TextContainer: "iV3Hb5JWIQSpA3WhioY-N",
				textContainer: "iV3Hb5JWIQSpA3WhioY-N"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				i = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				c = n.n(d),
				l = n("./src/lib/lessComponent.tsx");
			const m = l.a.wrapped(i.a, "Inline", c.a),
				u = l.a.wrapped(i.a, "PostedInfo", c.a),
				p = l.a.wrapped(i.a, "SubredditWrapper", c.a),
				h = l.a.div("TextContainer", c.a),
				b = l.a.wrapped(a.a, "TopMeta", c.a);
			t.a = e => r.a.createElement(m, {
				className: e.className
			}, e.subredditName && r.a.createElement(p, null, e.subredditName && r.a.createElement(h, null, e.subredditName)), r.a.createElement(u, null, r.a.createElement(h, null, `${s.fbt._("Commented by",null,{hk:"4Dveap"})}`), r.a.createElement(b, {
				collapsedBecauseCrowdControl: e.comment.collapsedBecauseCrowdControl,
				collapsed: !1,
				comment: e.comment,
				flair: e.flair,
				renderedInOverlay: !1
			})))
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				AuthorLink: "_2jljMb6FK7HnIb15zmm1of",
				authorLink: "_2jljMb6FK7HnIb15zmm1of",
				SubredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				subredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				TextContainer: "_2in6k_0-sFgKVz16hifq03",
				textContainer: "_2in6k_0-sFgKVz16hifq03",
				SubredditIcon: "uCjYZbKNai0INWGwHjoUh",
				subredditIcon: "uCjYZbKNai0INWGwHjoUh",
				Inline: "_2VWXAfRlnHG_4nydI7J4l3",
				inline: "_2VWXAfRlnHG_4nydI7J4l3"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/AuthorLink/index.tsx"),
				a = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				l = n.n(c),
				m = n("./src/lib/lessComponent.tsx");
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = m.a.wrapped(r.a, "AuthorLink", l.a), h = m.a.wrapped(d.a, "Inline", l.a), b = m.a.wrapped(d.a, "SubredditWrapper", l.a), f = m.a.div("TextContainer", l.a), C = m.a.wrapped(i.b, "SubredditIcon", l.a);
			t.a = e => o.a.createElement(h, null, e.subredditOrProfile && o.a.createElement(b, null, e.subredditOrProfile && o.a.createElement(C, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && o.a.createElement(f, null, e.subredditOrProfile.displayText)), u._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && o.a.createElement(a.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, o.a.createElement(p, {
				author: e.comment.postAuthor,
				isUnstyled: !0
			}, `u/${e.comment.postAuthor}`)))
		},
		"./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less": function(e, t, n) {
			e.exports = {
				container: "_3kd-dlN-SayusCxdP2netc",
				header: "_2qYkItLcJFJyORCGH9k8xc",
				subredditLogo: "_1vh_JamIt2dZYY7uwMHHv8",
				headerText: "_1FyMArbFbR91zDup_aXAUI",
				headerDelimiter: "_1O5D69EOlVhvj5bzxwHE38",
				achievements: "_2184liSTNqbtEvYN_pvrvZ",
				achievementItem: "DpiFfz95qctN0--U4vopM",
				achievementImgWrapper: "EP4eFqOgkm9TaTOXYXyIA",
				achievementImg: "_32rRB3c7q17wOs_Fz7Bdk",
				achievementName: "_2RAw7XCPPgNLzOBs-_7Cix"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less": function(e, t, n) {
			e.exports = {
				container: "_2tytE20aBhQMtf6GkTvN3",
				hoverPopup: "_2-UmlwvzsKsjDIuXchymkf",
				icon: "_16Osj2XUXJVMQLOL8-1m8E",
				hiddenAchievementsCount: "BndgSmDj59XX1brHFAMZC"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				c = n("./src/reddit/selectors/subreddit.ts"),
				l = n("./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less"),
				m = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				className: e,
				subredditId: t,
				userId: n
			}) => {
				const s = Object(r.e)(e => Object(d.a)(e, {
						subredditId: t,
						userId: n
					})),
					l = Object(r.e)(e => Object(c.S)(e, {
						subredditId: t
					}));
				return o.a.createElement("div", {
					className: Object(a.a)(m.a.container, e)
				}, o.a.createElement("div", {
					className: m.a.header
				}, o.a.createElement(i.b, {
					className: m.a.subredditLogo,
					subredditOrProfile: l
				}), u._("{r/community} {=achievements}", [u._param("r/community", l.displayText), u._param("=achievements", o.a.createElement("span", {
					className: m.a.headerText
				}, u._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), o.a.createElement("div", {
					className: m.a.headerDelimiter
				}), o.a.createElement("div", {
					className: m.a.achievements
				}, s.map(e => !e.isLocked && o.a.createElement("div", {
					className: m.a.achievementItem,
					key: e.type
				}, o.a.createElement("div", {
					className: m.a.achievementImgWrapper
				}, o.a.createElement("img", {
					className: m.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), o.a.createElement("div", {
					className: m.a.achievementName
				}, o.a.createElement("span", null, e.name))))))
			};
			var h = n("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less"),
				b = n.n(h);
			const f = ({
					className: e,
					subredditId: t,
					userId: n,
					showPopupOnHover: s,
					onHover: i
				}) => {
					var c;
					const l = Object(r.e)(e => Object(d.c)(e, {
							subredditId: t,
							userId: n
						})),
						m = Object(r.e)(e => Object(d.d)(e, {
							subredditId: t,
							userId: n
						})),
						u = null === (c = Object(r.e)(e => Object(d.b)(e, {
							subredditId: t,
							userId: n
						}))) || void 0 === c ? void 0 : c.achievementTypes;
					if (!(!!l || !!m) || !u) return null;
					const h = (null == m ? void 0 : m.type) === (null == l ? void 0 : l.type) ? null : m,
						f = 1 + (h ? 1 : 0),
						v = (null == u ? void 0 : u.length) - f;
					return o.a.createElement("span", {
						className: Object(a.a)(b.a.container, e),
						"data-testid": "achievement-flairs",
						onMouseEnter: i
					}, o.a.createElement(C, {
						achievement: h
					}), o.a.createElement(C, {
						achievement: l
					}), !!v && o.a.createElement("span", {
						className: b.a.hiddenAchievementsCount
					}, "+", v), s && o.a.createElement(p, {
						className: b.a.hoverPopup,
						subredditId: t,
						userId: n
					}))
				},
				C = ({
					achievement: e
				}) => e ? o.a.createElement("img", {
					alt: e.name,
					className: b.a.icon,
					src: e.icon.url
				}) : null
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/ModModeReports/index.m.less"),
				d = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = a.a.div("Text", d.a), m = a.a.div("Placeholder", d.a), u = () => r.a.createElement(m, null, r.a.createElement(l, null, c._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(s.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: r.a.createElement(u, null),
				ssr: !1
			});
			t.a = p
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/reportFlow/index.ts"),
				l = n("./src/reddit/components/Popup/index.tsx"),
				m = n("./src/reddit/components/Popup/Button.tsx"),
				u = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function b(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: b
				} = e, [f, C] = Object(o.useState)(!0), v = Object(h.b)(n.id, b), x = Object(a.d)(), g = Object(p.a)(), O = Object(h.a)(n, b), I = (e, s) => g(Object(u.a)(t, n.id, e, s));
				Object(o.useEffect)(() => {
					O && I("modal", "show")
				}, [O]);
				if (!O || !f) return null;
				const E = s.fbt._("Help r/{subredditName} mods", [s.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: v,
					title: E,
					onClose: () => {
						C(!1), I("close", "click"), x(Object(d.G)()), x(Object(d.T)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						x(Object(d.G)())
					}
				}, r.a.createElement("p", null, s.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, s.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), s.fbt._param("=community", r.a.createElement(i.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, s.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(m.a, {
					onClick: () => (C(!1), I("report", "click"), void x(Object(c.c)(n.id)))
				}, s.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/reportFlow/index.ts"),
				m = n("./src/reddit/components/Popup/index.tsx"),
				u = n("./src/reddit/components/Popup/Button.tsx"),
				p = n("./src/reddit/helpers/trackers/reportPrompt.ts"),
				h = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function f(e) {
				const {
					subredditName: t,
					post: n,
					isOverlay: f
				} = e, [C, v] = Object(r.useState)(s.Survey), x = Object(b.b)(n.id, f), g = Object(i.d)(), O = Object(h.a)(), I = Object(b.a)(n, f), E = (e, s) => O(Object(p.b)(t, n.id, e, s));
				Object(r.useEffect)(() => {
					I && E("modal", "show")
				}, [I]);
				const k = e => {
					v(s.Closed), E("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), g(Object(l.c)(n.id, void 0, e))
				};
				if (!I) return null;
				let _ = null;
				const y = {
					id: x,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						v(s.Closed), E("close", "click"), g(Object(c.G)())
					},
					onClickOutside: () => {
						g(Object(c.G)())
					}
				};
				switch (C) {
					case s.Survey:
						_ = a.a.createElement(m.a, y, a.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), a.a.createElement(u.a, {
							onClick: () => {
								v(s.OffTopic), E("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), a.a.createElement(u.a, {
							onClick: () => {
								v(s.DontLike), E("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), a.a.createElement(u.a, {
							onClick: () => {
								v(s.BreaksRules), E("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case s.OffTopic:
						_ = a.a.createElement(m.a, y, a.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case s.DontLike:
						_ = a.a.createElement(m.a, y, a.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case s.BreaksRules:
						_ = a.a.createElement(m.a, y, a.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", a.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, o.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), o.fbt._param("=community", a.a.createElement(d.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, o.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), a.a.createElement(u.a, {
							onClick: () => k("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), a.a.createElement(u.a, {
							onClick: () => k("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case s.Closed:
				}
				return _
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(s || (s = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/Popup/index.m.less"),
				a = n.n(r);

			function i(e) {
				return o.a.createElement("button", {
					className: a.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, n) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/uuid/v4.js"),
				a = n.n(r),
				i = n("./src/lib/hooks/useOnClickOutside.ts"),
				d = n("./src/reddit/components/Popup/index.m.less"),
				c = n.n(d);

			function l(e) {
				const {
					id: t = a()(),
					onClose: n,
					onClickOutside: s,
					title: r,
					children: d
				} = e;
				return Object(i.a)(t, s), o.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: c.a.popup,
					role: "dialog",
					tabIndex: -1
				}, o.a.createElement("h3", {
					className: c.a.header
				}, o.a.createElement("span", {
					className: c.a.title
				}, r), o.a.createElement("button", {
					className: c.a.closeButton,
					onClick: n
				}, "✕")), d)
			}
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, n) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/constants/colors.ts"),
				d = n("./src/reddit/components/PostLeftRail/index.m.less"),
				c = n.n(d);
			const l = 40,
				m = e => e.isRemoved ? i.b.removed : e.isReported ? i.b.reported : "transparent",
				u = Object(a.a)(e => {
					const t = m(e),
						n = {
							width: `${l}px`,
							borderLeft: `4px solid ${t}`
						};
					return o.a.createElement("div", {
						className: Object(r.a)(c.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : n
					}, e.children)
				});
			t.b = u
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				a = n("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				i = n("./src/reddit/components/PopupPortal/index.tsx"),
				d = n("./src/reddit/components/PostLeftRail/index.tsx"),
				c = n("./src/reddit/components/VerticalVotes/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.tsx"),
				m = n("./src/reddit/helpers/isPost.ts"),
				u = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				p = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				h = n.n(p);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: p = !1,
					isCountAnimShadowTestEnabled: b,
					toggleCheckbox: f = (() => {}),
					flairStyleTemplate: C,
					redditStyle: v,
					subreddit: x,
					isOverlay: g,
					isVoteCountAnimation: O,
					postId: I
				} = e, E = `upvote-button-${t.id}${g?"-overlay":""}`, {
					moderationPrompt: k
				} = t;
				return o.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(u.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: v
				}, s && o.a.createElement(l.a, {
					className: h.a.checkbox,
					isCheckboxSelected: p,
					toggleCheckbox: f
				}), o.a.createElement(c.a, {
					flairStyleTemplate: C,
					model: t,
					onVoteClick: n,
					redditStyle: v,
					upvoteTooltipId: E,
					isVoteCountAnimation: O,
					isCountAnimShadowTestEnabled: b,
					postId: I,
					scoreClassName: h.a.score
				}), k && o.a.createElement(i.b, {
					rightOf: E
				}, "survey" === k ? o.a.createElement(a.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!g
				}) : o.a.createElement(r.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!g
				})))
			}
		},
		"./src/reddit/components/Scroller/Simple.m.less": function(e, t, n) {
			e.exports = {
				Hidden: "wwHbgRV0ZXGp5CHHlpo5u",
				hidden: "wwHbgRV0ZXGp5CHHlpo5u"
			}
		},
		"./src/reddit/components/Scroller/Simple.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return K
			}));
			var s = n("./node_modules/lodash/debounce.js"),
				o = n.n(s),
				r = n("./node_modules/lodash/isNil.js"),
				a = n.n(r),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				c = n("./node_modules/react-dom/index.js"),
				l = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/request-idle-callback/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/constants/index.ts"),
				h = n("./src/lib/fastdom/index.ts"),
				b = n("./node_modules/lodash/throttle.js"),
				f = n.n(b);
			const C = 500,
				v = 1e3,
				x = 40;
			var g;
			! function(e) {
				e.Max10 = "0-10", e.Max20 = "11-20", e.Max30 = "21-30", e.Max40 = "31-40", e.Max50 = "41-50", e.Max60 = "51-60"
			}(g || (g = {}));
			const O = () => ({
					[g.Max10]: 0,
					[g.Max20]: 0,
					[g.Max30]: 0,
					[g.Max40]: 0,
					[g.Max50]: 0,
					[g.Max60]: 0
				}),
				I = [g.Max10, g.Max20, g.Max30, g.Max40, g.Max50, g.Max60],
				E = e => ({
					eventHandler: e
				});

			function k({
				fn: e,
				subscriber: t,
				timeout: n
			}) {
				const s = [];
				let o, r, a;
				const i = () => {
						if (s.length < x) return;
						const e = O(),
							n = Math.min(v, s.length),
							o = s.splice(0, n);
						s.splice(0, s.length);
						const r = o[n - 1] - o[0];
						for (let t = o.shift(); o.length > 0; t = o.shift()) {
							const n = o[0] - t,
								s = Math.min(60, Math.ceil(1e3 / n));
							e[s <= 10 ? g.Max10 : 60 === s ? g.Max60 : I[Math.ceil(s / 10) - 1]] += n
						}
						const a = O();
						for (const t in e) a[t] = e[t] / r;
						t(a)
					},
					d = () => {
						void 0 !== a && (window.clearTimeout(a), a = void 0)
					},
					c = () => {
						void 0 !== o && (cancelAnimationFrame(o), o = void 0), void 0 !== r && (window.clearInterval(r), r = void 0), d(), i()
					},
					l = () => {
						o = requestAnimationFrame(() => {
							s.push(performance.now()), l()
						})
					},
					m = f()(() => {
						d(), a = window.setTimeout(c, n)
					}, p.I);
				return {
					cleanup: c,
					eventHandler: t => {
						void 0 === r ? (l(), m(), r = window.setInterval(i, C)) : m(), e(t)
					}
				}
			}
			var _ = n("./src/lib/scheduler/index.ts"),
				y = n("./src/lib/domUtils/index.ts"),
				R = n("./src/lib/LinkedListMap/index.ts");
			const j = (e, t) => e < 0 ? t + e : e % t;
			class P {
				constructor(e) {
					this.head = 0, this.size = 0, this.maxSize = e, this.items = new Array(e)
				}
				push(e) {
					return this.items[this.head] = e, this.head = j(this.head + 1, this.maxSize), this.size < this.maxSize && this.size++, this
				}
				pop() {
					if (this.size > 0) {
						const e = j(this.head - 1, this.maxSize),
							t = this.items[e];
						return this.items[e] = void 0, this.head = e, this.size--, t
					}
				}
				forEach(e) {
					let t = this.size < this.maxSize ? j(this.head - this.size, this.maxSize) : this.head;
					for (let n = 0; n < this.size; n++) e(this.items[t], n, this.size), t = (t + 1) % this.maxSize
				}
				map(e) {
					const t = new Array(this.size);
					return this.forEach((n, s, o) => {
						t[s] = e(n, s, o)
					}), t
				}
				getEntries() {
					const e = new Array(this.size);
					return this.forEach((t, n) => {
						e[n] = t
					}), e
				}
				clear() {
					const e = this.size;
					for (let t = 0; t < e; t++) this.pop()
				}
			}
			var S = n("./src/reddit/components/Scroller/getDocumentTop.ts");
			class w {
				constructor({
					top: e,
					height: t,
					heightWithSuffix: n
				}) {
					this.height = t, this.heightWithSuffix = n, this.top = e, this.bottom = this.top + this.height
				}
				contains(e) {
					return !(e.top <= this.top || e.bottom >= this.bottom)
				}
				intersects(e) {
					return !(e.bottom <= this.top || e.top >= this.bottom)
				}
				intersectsBorder(e) {
					return e.top <= this.top && e.bottom >= this.top || e.bottom >= this.bottom && e.top <= this.bottom
				}
				containsTop(e) {
					return !(e.top < this.top || e.top > this.bottom)
				}
				isAbove(e) {
					return e.top > this.bottom
				}
				isBelow(e) {
					return e.bottom < this.top
				}
			}
			const M = ({
				buffer: e,
				container: t
			} = {}) => {
				const n = a()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(S.a)() : t.scrollTop;
					return new w({
						top: e,
						height: window.innerHeight
					})
				}
				return new w({
					top: 0,
					height: n
				})
			};
			var A = n("./src/reddit/components/ResizeSensor/index.tsx"),
				T = n("./src/reddit/constants/componentSizes.ts"),
				N = n("./src/reddit/constants/elementClassNames.ts"),
				F = n("./src/reddit/contexts/InsideOverlay.tsx"),
				L = n("./src/reddit/selectors/platform.ts"),
				D = n("./src/telemetry/helpers/sendEvent.ts"),
				V = n("./src/telemetry/helpers/sendTiming.ts"),
				B = n("./src/reddit/components/Scroller/Simple.m.less"),
				H = n.n(B);
			const U = T.g,
				W = 5 * p.I,
				z = 3,
				G = Object(u.c)({
					isOverlayOpen: L.h
				}),
				X = Object(l.b)(G),
				q = {};

			function K(e) {
				return e === document
			}

			function Q(e) {
				let t = 0;
				do {
					t += e.offsetTop || 0, e = e.offsetParent
				} while (e);
				return t
			}
			const J = 10,
				Z = .9,
				Y = .9,
				$ = 1.8,
				ee = 5,
				te = 1500,
				ne = 2 * p.I,
				se = 400,
				oe = 8,
				re = 5 * p.I,
				ae = 30,
				ie = "object" == typeof performance && "function" == typeof performance.now,
				de = () => ie ? performance.now() : Date.now();

			function ce(e, t) {
				return R.a.fromArray(e.children.map((e, n) => {
					const s = t && t.get(e.id);
					return s ? (s.isFocusable = !!e.isFocusable, s.trackOnEnteredViewport = e.trackOnEnteredViewport, s.trackOnExitedViewport = e.trackOnExitedViewport, s) : {
						el: null,
						id: e.id,
						index: n,
						isFocusable: !!e.isFocusable,
						itemRef: void 0,
						focused: !1,
						loaded: !t && n < ee,
						rectangle: void 0,
						trackOnEnteredViewport: e.trackOnEnteredViewport,
						trackOnExitedViewport: e.trackOnExitedViewport
					}
				}), "id")
			}
			class le extends d.a.Component {
				constructor(e) {
					super(e), this.lastRenderPosition = 0, this.lastScrollTime = -1, this.resetCanFocusTimer = -1, this.unmountItemsIdleId = null, this.scrollingQuickly = !1, this.visibleChildrenCount = 0, this.isRenderableChildrenStateChangePending = !1, this.parentOffsetTop = void 0, this.containerOffsetTop = void 0, this.distanceToTop = void 0, this.measurementsInvalid = !1, this.viewport = void 0, this.mountableViewport = void 0, this.needsToPauseViewportItems = !0, this.updateRenderableChildrenWhenIdleHandle = null, this.requestUpdateWhenIdleCallbackHandle = null, this.pendingScollHandlerRead = null, this.pendingResizeHandlerRead = null, this.renderableViewport = void 0, this.sendFPSData = e => {
						const t = {
							name: this.props.trackingName
						};
						D.b.enqueue(new _.a({
							args: [e, t],
							cb: (e, t) => Object(V.a)(p.l.Redesign, {
								data: e,
								meta: t,
								type: "scrollfps"
							})
						}))
					}, this.getVisibleChildren = () => {
						let e = 0;
						const t = te + (this.props.viewportTopPadding ? this.props.viewportTopPadding : 0),
							n = [];
						let s = this.nextVisibleChildrenIndex;
						for (; e < t && s < this.props.children.length;) {
							const t = this.props.children[s];
							n.push(t), e += t.estHeight, s++
						}
						return this.visibleChildrenCount = n.length, n
					}, this.setRenderableChildrenIndexIncrement = () => {
						if (this.props.children[0]) {
							const e = this.props.children[0].estHeight;
							this.renderableChildrenIndexIncrement = Math.min(Math.ceil(se / e), oe)
						} else this.renderableChildrenIndexIncrement = oe
					}, this.updateRenderableChildrenWhenIdle = () => {
						this.cancelPopulateRenderableChildrenWhenIdle(), this.hasScrolledWithinThreshold() || (this.timeoutForUpdateIdleCallback = re, Object(m.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle), this.requestUpdateWhenIdleCallbackHandle = Object(m.requestIdleCallback)(() => {
							const e = Math.ceil(this.renderableChildrenIndexIncrement / 2);
							this.populateRenderableChildrenFromProps(!1, e)
						})), this.state.renderableChildren.length < this.props.children.length && this.schedulePopulateRenderableChildrenWhenIdle()
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && de() - this.lastScrollTime < ne, this.populateRenderableChildrenFromProps = (e = !1, t = this.renderableChildrenIndexIncrement, n) => {
						const s = n || this.props.children;
						if (this.state.renderableChildren.length < s.length || e)
							if (this.hasScrolledWithinThreshold()) h.a.read(() => {
								clearTimeout(this.updateRenderableChildrenHandle), this.updateRenderableChildrenHandle = setTimeout(() => {
									this.populateRenderableChildrenFromProps(e, this.renderableChildrenIndexIncrement, n ? s : void 0)
								}, ne)
							});
							else {
								this.nextVisibleChildrenIndex + t <= s.length ? this.nextVisibleChildrenIndex += t : this.nextVisibleChildrenIndex = s.length;
								const e = s.slice(0, this.nextVisibleChildrenIndex);
								e.length && (this.lastVisibleElId = e[e.length - 1].id), h.a.write(() => {
									this.setState({
										renderableChildren: e
									})
								}), this.isRenderableChildrenStateChangePending = !0
							}
					}, this.lastElementIsAboutToBeVisible = () => {
						if (this.lastVisibleEl) {
							if (this.lastVisibleEl.getBoundingClientRect().top < window.innerHeight + se) return !0
						}
						return !1
					}, this.getRenderableChildrenIndexIncrement = (e = ae) => {
						let t = 0,
							n = this.state.renderableChildren.length;
						for (; t < e && n < this.props.children.length;) t += this.props.children[n].estHeight, n++;
						const s = n - this.state.renderableChildren.length;
						return Math.max(this.renderableChildrenIndexIncrement, s)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(m.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = o()(() => {
						this.handleScroll()
					}, p.I), this.pauseAllElements = () => {
						const e = this.getItemsInViewportWithFilter(this.loadedChildRefFilter),
							t = [];
						e.forEach(e => {
							const {
								itemRef: n
							} = e;
							n && (e.focused = !1, t.push(n.pauseContent))
						}), h.a.write(() => {
							t.forEach(e => e())
						})
					}, this.elementIsVisible = e => !!this.viewport && this.viewport.intersects(e), this.getItemsInViewportWithFilter = e => {
						this.updateViewportInfo();
						const t = new R.a("id");
						return this.state.renderableChildren.forEach(n => {
							const s = this.childMap.get(n.id);
							s && e(s) && t.push(s)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, p.I))
					}, this.setContainerRef = e => {
						this.containerRef = e, this.props.innerRef && this.props.innerRef(e)
					}, this.getChildRectangle = e => {
						const {
							el: t
						} = e;
						if (!t) return;
						if (e.rectangle && !this.measurementsInvalid) return e.rectangle;
						if (void 0 === this.parentOffsetTop) {
							const e = t.offsetParent;
							this.parentOffsetTop = (null == e ? void 0 : e.offsetTop) || 0;
							const n = (null == e ? void 0 : e.getBoundingClientRect().top) || 0;
							this.distanceToTop = n + this.getScrollTop()
						}
						const n = t.offsetTop + this.parentOffsetTop,
							s = t.getBoundingClientRect().height,
							o = new w({
								top: n,
								height: s,
								heightWithSuffix: `${s}px`
							});
						return e.rectangle = o, o
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? Q(this.containerRef) : 0, this.handleContentContainerResize = o()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = h.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, p.I), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = h.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(y.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < Z,
								n = e < Y,
								s = e < $;
							if (this.scrollContainer && !this.loadMoreFired && this.props.onLoadMore) {
								let e = !1;
								if (void 0 !== this.props.loadMoreToken && void 0 !== this.viewport && this.nextVisibleChildrenIndex >= this.props.children.length) {
									const t = this.getTotalOffsetTop();
									e = !!this.containerRef && this.containerRef.offsetHeight + t - this.viewport.bottom <= this.viewport.height
								}
								if (e) {
									const {
										onLoadMore: e
									} = this.props;
									setTimeout(e), this.loadMoreFired = !0
								}
							}
							this.populateRenderableChildrenIfLastChildIsVisible();
							const o = new R.a("id");
							let r, a;
							const i = [];
							this.state.renderableChildren.forEach(e => {
								const d = this.childMap.get(e.id);
								let c;
								if (d && d.el) {
									if (!(c = this.getChildRectangle(d))) return;
									const {
										id: e
									} = d;
									this.elementIsHideable(c) ? void 0 === this.hiddenChildren[e] && (this.childrenToHide[e] = c.heightWithSuffix) : void 0 !== this.hiddenChildren[e] && (this.childrenToShow[e] = !0)
								}
								if (!d || !d.el || !d.rectangle) return void(this.measurementsInvalid && d && this.getChildRectangle(d));
								const {
									id: l,
									itemRef: m,
									trackOnEnteredViewport: u
								} = d, p = !!this.itemsInViewport.get(l);
								if (this.elementIsUnmountable(c)) m && p && d.loaded && d.isFocusable && i.push(m.pauseContent);
								else if (m && this.loadItemIfPossible(d, m, t, n, s, i), this.elementIsVisible(c)) {
									o.push(d), !p && u && D.b.enqueue(new _.a({
										cb: u,
										args: void 0
									}));
									const e = this.elementIsFocused(c);
									e && !a && (a = d.id), t && d.isFocusable && !r && e ? (r = d.id, d.focused || (d.focused = !0, m && i.push(m.focusContent))) : d.loaded && d.isFocusable && (d.focused || this.needsToPauseViewportItems) && (d.focused = !1, m && i.push(m.pauseContent))
								} else p && d.loaded && d.isFocusable && (d.focused = !1, m && i.push(m.stopContent))
							}), h.a.write(() => {
								i.forEach(e => e()), this.props.enableElementHiding && this.hideOrShowChildren()
							}), this.itemsInViewport.forEach(({
								id: e,
								trackOnExitedViewport: t
							}) => {
								t && !o.has(e) && D.b.enqueue(new _.a({
									cb: t,
									args: [!1]
								}))
							}), this.itemsInViewport = o, this.canFocusItems = t, this.focusedChild = r, this.primaryChild = a, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, W), null !== this.unmountItemsIdleId && (Object(m.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
								getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
								primaryChild: this.primaryChild ? this.childMap.get(this.primaryChild) : void 0
							}), this.timeoutForUpdateIdleCallback = 4 * re, this.schedulePopulateRenderableChildrenWhenIdle(), this.pendingScollHandlerRead = null
						}))
					}, this.unmountItemsWhileIdle = e => {
						if (!this.scrollContainer) return;
						const t = [];
						if (this.state.renderableChildren.forEach(e => {
								const n = this.childMap.get(e.id);
								if (!n || !n.el || !n.itemRef) return;
								const s = this.getChildRectangle(n);
								s && this.elementIsUnmountable(s) && n.loaded && t.push(n)
							}), !t.length) return;
						const n = Math.min(Math.ceil(e.timeRemaining() / z), t.length),
							s = [];
						for (let o = 0; o < n; o++) {
							const e = t[o];
							s.push(e.itemRef.unmountContent), e.loaded = !1, e.focused = !1
						}
						Object(c.unstable_batchedUpdates)(() => {
							this.scrollContainer && s.forEach(e => e())
						}), n < t.length ? this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle) : this.unmountItemsIdleId = null
					}, this.hideOrShowChildren = o()(() => {
						for (const e in this.childrenToHide) {
							const t = this.childrenToHide[e];
							void 0 !== t && (this.hideChild(e, t), this.childrenToHide[e] = void 0)
						}
						for (const e in this.childrenToShow) void 0 !== this.childrenToShow[e] && (this.showChild(e), this.childrenToShow[e] = void 0)
					}, p.I), this.hideChild = (e, t) => {
						const n = this.childMap.get(e);
						if (!n || !n.el) return;
						const s = n.el.firstChild;
						s && (t !== n.el.style.height && (n.el.style.height = t), s.classList.add(H.a.Hidden), this.hiddenChildren[e] = t, n.loaded && h.a.write(() => {
							n.itemRef && (n.loaded = !1, n.focused = !1, n.itemRef.unmountContent())
						}))
					}, this.showChild = e => {
						const t = this.childMap.get(e);
						if (!t || !t.el) return;
						const n = t.el.firstChild;
						n && (this.remeasureWhenShown[t.id] && (this.measurementsInvalid = !0, this.remeasureWhenShown[t.id] = void 0), t.el.style.height = "", n.classList.remove(H.a.Hidden), void 0 !== this.hiddenChildren[e] && (this.hiddenChildren[e] = void 0))
					}, this.getStylesForOuterWrapper = e => {
						if (void 0 !== this.hiddenChildren[e]) return {
							height: this.hiddenChildren[e]
						}
					}, this.remeasureChild = e => {
						this.measurementsInvalid = !0
					}, this.scrollToChild = (e, t) => {
						this.measurementsInvalid = !0, h.a.read(() => {
							const n = this.childMap.get(e);
							if (n && n.el && this.scrollContainer) {
								if (n.rectangle = void 0, t && this.isScrollChildTopVisible(e)) return;
								const s = this.getScrollTop() + n.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(y.c)(this.scrollContainer, s), this.callOnScrollForItemsChanged())
								}, p.I)
							}
						})
					}, this.isScrollChildTopVisible = e => {
						const t = this.childMap.get(e);
						if (t && t.el && this.scrollContainer) {
							const {
								scrollToChildPadding: e = 0,
								viewportTopPadding: n = 0
							} = this.props, s = window.innerHeight - n, {
								top: o
							} = t.el.getBoundingClientRect();
							return o >= n + e && o < s
						}
						return !1
					}, this.childMap = ce(e), this.containerRef = null, this.itemsInViewport = new R.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new P(J), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = re;
					const t = this.getVisibleChildren();
					t.length && (this.lastVisibleElId = t[t.length - 1].id), this.nextVisibleChildrenIndex = t.length, this.updateRenderableChildrenHandle = null, this.state = {
						renderableChildren: t
					}, this.setRenderableChildrenIndexIncrement(), this.validateScrollPreservationProps(e), this.validateLoadMoreProps(e)
				}
				populateRenderableChildrenIfLastChildIsVisible() {
					if (this.isRenderableChildrenStateChangePending) return;
					this.state.renderableChildren.length < this.props.children.length && h.a.read(() => {
						if (!this.isRenderableChildrenStateChangePending && this.lastElementIsAboutToBeVisible()) {
							const e = this.getRenderableChildrenIndexIncrement();
							this.populateRenderableChildrenFromProps(!1, e)
						}
					})
				}
				setupScrollHandler() {
					this.fpsMeter = this.props.trackingName ? k({
						fn: this.handleScroll,
						subscriber: this.sendFPSData,
						timeout: W
					}) : E(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
				}
				cleanupScrollHandler() {
					this.fpsMeter && ("function" == typeof this.fpsMeter.cleanup && this.fpsMeter.cleanup(), this.scrollContainer && this.scrollContainer.removeEventListener("scroll", this.fpsMeter.eventHandler), window.removeEventListener("resize", this.handleResize), this.pendingScollHandlerRead && (h.a.clear(this.pendingScollHandlerRead), this.pendingScollHandlerRead = null), this.pendingResizeHandlerRead && (h.a.clear(this.pendingResizeHandlerRead), this.pendingResizeHandlerRead = null))
				}
				componentDidMount() {
					this.props.getContainer ? this.scrollContainer = this.props.getContainer() || document : this.scrollContainer = document, this.props.onScroll && this.props.onScroll({
						getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
						primaryChild: void 0
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(y.c)(this.scrollContainer, 0), this.setupScrollHandler(), h.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = q[e];
							a()(t) || (q[e] = void 0, this.scrollContainer && Object(y.c)(this.scrollContainer, t))
						}
						this.callOnScrollForItemsChanged(), this.props.onLastVisibleChildRendered && this.props.onLastVisibleChildRendered()
					}), h.a.read(() => {
						this.containerOffsetTop = this.getTotalOffsetTop()
					}), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentDidUpdate(e) {
					if (this.isRenderableChildrenStateChangePending = !1, this.measurementsInvalid = !0, this.scrollTargetId && (this.scrollToChild(this.scrollTargetId, !1), this.scrollTargetId = void 0), this.didLayoutAloneChange(e, this.props)) {
						this.callExitedViewportForUnmount(), this.focusedChild = void 0, this.childrenToShow = {}, this.childrenToHide = {}, this.hiddenChildren = {}, this.childMap.forEach(e => {
							e.loaded = !1, e.focused = !1
						}), this.setRenderableChildrenIndexIncrement(), this.populateRenderableChildrenFromProps(!0), this.callOnScrollForItemsChanged();
						const e = this.getVisibleChildren();
						this.visibleChildrenCount = e.length, this.schedulePopulateRenderableChildrenWhenIdle()
					}
					this.populateRenderableChildrenIfLastChildIsVisible(), e.trackingName !== this.props.trackingName && (this.cleanupScrollHandler(), this.setupScrollHandler())
				}
				shouldComponentUpdate(e) {
					return e.isOverlayOpen === this.props.isOverlayOpen
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.validateScrollPreservationProps(e) && this.validateLoadMoreProps(e) && this.didLayoutAloneChange(this.props, e) && this.hasBeenScrolled() && this.handleScroll(), e.loadMoreToken !== this.props.loadMoreToken && (this.loadMoreFired = !1, this.loadMoreEl = null), e.isOverlayOpen !== this.props.isOverlayOpen && e.isOverlayOpen && !this.props.isOverlay && h.a.read(this.pauseAllElements), e.isOverlayOpen === this.props.isOverlayOpen || e.isOverlayOpen || this.props.isOverlay || this.resetScrollFramerateAndFocus(), this.childMap = ce(e, this.childMap);
					const t = e.children.length < this.props.children.length,
						n = e.children.length === this.props.children.length && e.children.some((e, t) => e.id !== this.props.children[t].id);
					this.populateRenderableChildrenFromProps(t || n, this.renderableChildrenIndexIncrement, e.children), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentWillUnmount() {
					if (this.callExitedViewportForUnmount(), this.cleanupScrollHandler(), clearTimeout(this.updateRenderableChildrenHandle), this.cancelPopulateRenderableChildrenWhenIdle(), this.scrollContainer && !this.props.disableScrollCache) {
						const e = this.getCacheKey();
						q[e] = this.lastRenderPosition
					}
					this.childMap = new R.a("id"), this.itemsInViewport = new R.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(m.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
				}
				didLayoutAloneChange(e, t) {
					return "string" == typeof e.layoutKey && "string" == typeof t.layoutKey && e.layoutKey !== t.layoutKey && "string" == typeof e.dataKey && "string" == typeof t.layoutKey && e.dataKey === t.dataKey
				}
				elementIsFocused(e) {
					if (!this.viewport) return !1;
					const t = this.distanceToTop ? this.distanceToTop : 0,
						n = this.parentOffsetTop ? this.parentOffsetTop : 0,
						s = e.bottom + t - n,
						o = e.top + t - n,
						r = Math.min(this.viewport.bottom, s) - Math.max(this.viewport.top, o),
						a = r / e.height,
						i = r / this.viewport.height;
					return a > .75 || i > .9
				}
				getFirstItemInViewport() {
					for (const {
							id: e
						} of this.props.children) {
						const t = this.childMap.get(e);
						if (t) {
							const e = this.getChildRectangle(t);
							if (e && this.elementIsVisible(e)) return t
						}
					}
				}
				elementIsUnmountable(e) {
					return !!this.mountableViewport && !this.mountableViewport.intersects(e)
				}
				elementIsHideable(e) {
					return !!this.renderableViewport && !this.renderableViewport.intersects(e)
				}
				getCacheKey() {
					return this.props.children.map(e => e.id).join("-")
				}
				getScrollTop() {
					return this.scrollContainer ? K(this.scrollContainer) ? Object(S.a)() : this.scrollContainer.scrollTop : 0
				}
				updateViewportInfo() {
					if (this.scrollContainer) {
						this.viewport = M({
							buffer: 0,
							container: this.scrollContainer
						});
						const {
							viewportTopPadding: e = 0
						} = this.props, t = window.innerHeight - e, n = 2 * t;
						this.mountableViewport = new w({
							top: this.viewport.top - n,
							height: this.viewport.height + 2 * n
						});
						const s = 4 * t;
						this.renderableViewport = new w({
							top: this.viewport.top - s,
							height: this.viewport.height + 2 * s
						})
					}
				}
				updateScrollMetrics() {
					this.updateViewportInfo();
					const e = de(),
						t = this.getScrollTop(),
						n = Math.abs(this.lastRenderPosition - t),
						s = e - this.lastScrollTime,
						o = this.lastScrollTime > -1;
					this.lastScrollTime = e, this.lastRenderPosition = t, o ? this.pixelsPerMSRing.push(n / s) : this.lastScrollTime = e
				}
				getAveragePixelsPerMilliSecond() {
					if (this.pixelsPerMSRing.size > 1) {
						let e = 0;
						return this.pixelsPerMSRing.forEach(t => e += t), e / this.pixelsPerMSRing.size
					}
					return 0
				}
				_wrapperRefFN(e, t) {
					const n = this.childMap.get(e);
					n && (n.el = t), this.lastVisibleElId === e && (this.lastVisibleEl = t)
				}
				getWrapperRefFN(e) {
					let t = this.wrapperRefFNs[e];
					return t || (t = t => {
						this._wrapperRefFN(e, t)
					}, this.wrapperRefFNs[e] = t), t
				}
				_childRefFn(e, t, n) {
					const s = this.childMap.get(e);
					s && (s.itemRef = t, s.loaded = !!t && (void 0 !== n ? n : s.loaded), this.callOnScrollForItemsChanged())
				}
				getChildRefFn(e) {
					let t = this.childRefFns[e];
					return t || (t = (t, n) => {
						this._childRefFn(e, t, n)
					}, this.childRefFns[e] = t), t
				}
				loadItemIfPossible(e, t, n, s, o, r) {
					if (t.contentIsHeavyToMount() ? s : o) {
						const s = !e.isFocusable || n;
						!e.loaded && s && (e.loaded = !0, r.push(t.loadContent))
					}
				}
				callExitedViewportForUnmount() {
					this.itemsInViewport.forEach(({
						id: e,
						trackOnExitedViewport: t
					}) => {
						t && D.b.enqueue(new _.a({
							cb: t,
							args: [!0]
						}))
					})
				}
				hasBeenScrolled() {
					if (!this.containerRef) return !1;
					const {
						viewportTopPadding: e = 0
					} = this.props, t = Q(this.containerRef);
					return this.getScrollTop() + e - t > 0
				}
				render() {
					const {
						contentContainerRef: e
					} = this.props;
					return d.a.createElement("div", {
						className: this.props.className,
						ref: this.setContainerRef
					}, this.state.renderableChildren.map((e, t) => d.a.createElement("div", {
						key: `scroller-${e.id}`,
						ref: this.getWrapperRefFN(e.id),
						style: this.getStylesForOuterWrapper(e.id)
					}, d.a.createElement("div", {
						className: this.hiddenChildren[e.id] ? H.a.Hidden : void 0
					}, e.render({
						className: N.k,
						height: e.estHeight,
						placeholderRecommended: !1,
						remeasure: this.remeasureChild,
						scrollToAndRemeasure: this.scrollToChild,
						setScrollerChildRef: this.getChildRefFn(e.id),
						shouldLoadInitially: t < ee,
						width: U
					})))), !!e && d.a.createElement(A.a, {
						containerRef: e,
						onResize: this.handleContentContainerResize
					}))
				}
				validateScrollPreservationProps(e) {
					return "string" != typeof e.layoutKey || void 0 !== e.dataKey
				}
				validateLoadMoreProps(e) {
					return void 0 === e.onLoadMore || "loadMoreToken" in e
				}
			}
			t.b = X(Object(F.b)(le))
		},
		"./src/reddit/components/Scroller/getDocumentTop.ts": function(e, t, n) {
			"use strict";
			t.a = () => document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(i);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(u),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class C extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(i.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(d.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && a.a.createElement("span", {
						className: n
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(m.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(c.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(i.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return a.a.createElement(C, f({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				c = n.n(d);
			const l = a.a.span("metaText", c.a),
				m = e => r.a.createElement(l, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...o
				}) => {
					const a = Object(i.b)(t),
						d = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", a)], {
							hk: "2L3T21"
						}),
						c = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(t, "number", a)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, o, c)
				},
				p = e => r.a.createElement(l, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(r);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, a = r;
					return s ? o.a.createElement(t, a) : void 0 !== n ? o.a.createElement(n, a) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const n = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !o
			}
		},
		"./src/reddit/helpers/postComponentForLayout/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "b", (function() {
				return O
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/isUrl/index.ts"),
				i = n("./src/lib/logs/console.ts"),
				d = n("./src/reddit/constants/postLayout.ts"),
				c = n("./src/reddit/models/Media/index.ts");
			const l = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-BlankPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), n.e("reddit-components-BlankPost")]).then(n.bind(null, "./src/reddit/components/BlankPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/BlankPost/index.tsx"
					}
				}),
				m = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ClassicPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), n.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), n.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), n.e("reddit-components-ClassicPost")]).then(n.bind(null, "./src/reddit/components/ClassicPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ClassicPost/index.tsx"
					}
				}),
				u = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-CompactPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), n.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), n.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), n.e("reddit-components-CompactPost")]).then(n.bind(null, "./src/reddit/components/CompactPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/CompactPost/index.tsx"
					}
				}),
				p = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-LargePost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), n.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), n.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), n.e("Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost"), n.e("reddit-components-LargePost")]).then(n.bind(null, "./src/reddit/components/LargePost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/LargePost/index.tsx"
					}
				}),
				h = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-MediumPost",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"), n.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), n.e("Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"), n.e("Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost"), n.e("reddit-components-MediumPost")]).then(n.bind(null, "./src/reddit/components/MediumPost/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/MediumPost/index.tsx"
					}
				}),
				b = {
					[d.g.Large]: p,
					[d.g.Medium]: h,
					[d.g.Classic]: m,
					[d.g.Compact]: u
				},
				f = e => r.a.createElement(l, e),
				C = ["https://www.mcdonalds.com", "https://d2n94wep25xhn0.cloudfront.net", "https://www.dyson.com", "https://dyson.com", "https://www.bestbuy.com", "https://www.goarmy.com", "https://www.samsung.com", "https://www.cyberpunk.net"],
				v = e => e.source && e.source.url && e.isSponsored && C.some(t => e.source.url.startsWith(t)),
				x = e => !e.media || e.media.type === c.o.EMBED && !(c.b.has(e.media.provider) || v(e)),
				g = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case d.g.Medium:
							return 188;
						case d.g.Classic:
							return 96;
						case d.g.Compact:
							return 32;
						default:
							return 200
					}
				};

			function O({
				isCrosspost: e,
				isFirstPost: t,
				layout: n,
				post: s
			}) {
				if (s.isBlank) return f;
				const o = !s.media && !!s.source && Object(a.a)(s.source.url),
					r = e && o;
				n !== d.g.Large || !x(s) || r || s.predictionTournament || (n = d.g.Medium);
				const c = b[n];
				return void 0 === c ? (Object(i.a)(void 0, `Could not find component for layout ${n}.`), f) : t && s.isSponsored && n === d.g.Large ? h : c
			}
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, n) {
			e.exports = {
				baseLargeAndMediumPostStyles: "_2lHXa-mLMsRfm1Q5JxgU4r",
				basePostStyles: "REwsaLIz5u3DhM7zbbzIU",
				classicPostStyles: "bE7JgM2ex7W3aF3zci5bm",
				compactPostStyles: "FeLWdhOO-cVXowAo3Rndk",
				largeAndMediumPostStyles: "_3Qkp11fjcAw9I9wtLo8frE",
				baseClassicAndCompactPostStyles: "_2yN8L-c8UBoKxHn0-vg_dS",
				baseSubredditStyles: "_2zRMh6o0BucltCL6o64pa4",
				classicAndCompactActiveStyles: "_1Accc3h2AW0sB8E4CcEz2n",
				mIsActive: "_1LmKpEAguLZV4jQMgQSFVL",
				classicAndCompactPlaceholderStyles: "_3joKifdh6j3tG_vsgFS85R",
				mUseRedditTheme: "_1nQXomgzQ2rnBsRU2iZ00l",
				largeAndMediumActiveStyles: "_1qftyZQ2bhqP62lbPjoGAh",
				singleLineEllipsis: "_2RFRmGwuh0BemW7iUA3-VB"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(o);
			const a = ({
					isLoading: e
				}) => Object(s.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				i = e => Object(s.a)(r.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, n, o) => r => ({
					source: "report_prompt",
					noun: n,
					action: o,
					subreddit: s.subredditByName(r, e),
					post: s.post(r, t)
				}),
				r = (e, t, n, o) => r => ({
					source: "report_survey",
					noun: n,
					action: o,
					subreddit: s.subredditByName(r, e),
					post: s.post(r, t)
				})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return m
			}));
			var s = n("./src/reddit/helpers/isPost.ts");
			const o = 20,
				r = 50,
				a = 1e4,
				i = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const l = e => 1 === e.length ? Object(s.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
				m = (e, t) => {
					return {
						[t === c.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages~ModerationPages.9d2efe18b2581a6695c5.js.map