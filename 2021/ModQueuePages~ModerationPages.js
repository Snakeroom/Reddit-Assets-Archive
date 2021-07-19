// https://www.redditstatic.com/desktop2x/ModQueuePages~ModerationPages.493cf0e59859b3e796ad.js
// Retrieved at 7/19/2021, 12:20:05 PM by Reddit Dataminer v1.0.0
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
				i = n("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, n) => (s = (() => {})) => o => {
				const r = u(o.target, o.currentTarget),
					a = p(o.target, o.currentTarget);
				r && n && t && (m(o.target, o.currentTarget, l.anchors) ? n(t(e, r, a)) : n(n => {
					const s = t(e, r, a)(n);
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
						actionInfo: Object(i.previousPageActionInfo)(n, o)
					}
				})), m(o.target, o.currentTarget, l.anchorsAndButtons) && s(o)
			};

			function c(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: i,
						...c
					} = t, l = Object(s.useCallback)(d(i, r, n), [i, r, n]);
					return o.a.createElement(e, a({}, c, {
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
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			}));
			const s = "#FFF",
				o = "#FF4500",
				r = "#0079D3",
				i = "#46D160",
				a = {
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
					positive: i,
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
					...a,
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
				return i
			})), n.d(t, "b", (function() {
				return a
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
			const i = (e, t) => {
					try {
						o.set(e, t), s && s.observe(e)
					} catch (n) {
						0
					}
				},
				a = e => {
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
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(s.a)(o.c),
				i = Object(s.a)(o.b),
				a = Object(s.a)(o.a)
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
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
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
					if (!Object(f.J)(n())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
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
						i = o.user.account ? o.user.account.displayText : null;
					r && i && (t(Object(C.i)({
						[e]: {
							isApproved: !0,
							approvedBy: i,
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
						i = r.features.comments.models[e],
						a = r.user.account ? r.user.account.displayText : null;
					i && a && (n(Object(C.i)({
						[e]: {
							approvedBy: null,
							bannedBy: a,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.f)(o(), e, t)).ok || n(Object(C.i)({
						[e]: {
							approvedBy: i.approvedBy,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam
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
				}, y = (e, t, n) => async (r, i, {
					gqlContext: a
				}) => {
					const d = Object(b.a)(i(), {
						commentId: e
					});
					if (!d) return;
					const l = n === o.Xb.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(a(), {
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
				}, j = (e, t, n) => async (s, r, {
					apiContext: a
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
					})), (await Object(m.b)(a(), e, p, n || null)).ok ? n && s(I({
						id: e,
						postId: l,
						commentsPageKey: Object(i.a)(l, null, {
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
				i = n("./src/reddit/actions/bulkActions/index.ts"),
				a = n("./src/reddit/actions/removalReasons/index.ts"),
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
				j = Object(r.a)(O.e),
				R = Object(r.a)(O.n),
				S = Object(r.a)(O.m),
				P = Object(r.a)(O.l),
				w = Object(r.a)(O.q),
				M = Object(r.a)(O.p),
				T = Object(r.a)(O.o),
				A = Object(r.a)(O.w),
				N = Object(r.a)(O.v),
				F = Object(r.a)(O.u),
				L = (e, t, n) => async (r, i, {
					apiContext: a
				}) => {
					let l, m, u;
					switch (t) {
						case o.pb.Edited:
							l = _, m = j, u = y;
							break;
						case o.pb.Modqueue:
							l = I, m = k, u = E;
							break;
						case o.pb.Reports:
							l = R, m = P, u = S;
							break;
						case o.pb.Spam:
							l = w, m = T, u = M;
							break;
						case o.pb.Unmoderated:
							l = A, m = F, u = N;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					r(l());
					const b = await Object(c.b)(a(), t, n);
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
						i = r.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						a = r.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						l = r.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: m
						} = r.platform.currentPage.urlParams,
						u = m;
					if (e && a || l || !i) return;
					const p = await Object(c.b)(o(), u, {
						moderated_after: i
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
					o(Object(i.c)());
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
						o(Object(i.b)({
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
							}), r = Object(a.fetchReasonsAndOpenModal)(m, O));
							const u = Object(d.e)(n, h.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, {
								apiContext: n
							}) => {
								e(H());
								const o = t(),
									r = Object.keys(o.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									a = o.pages.modHub.modQueue.bulkAction.undoLastAction[r],
									l = o.user.account && o.user.account.displayText;
								e(Object(i.c)());
								const m = await Object(c.a)(n(), r, {
									ids: a
								});
								m.ok ? e(U({
									...m.body,
									operation: r,
									ids: a,
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
						o(Object(i.a)(_.error));
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
				return ie
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return ae
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
			const i = "REMOVALREASONS__ADD_PENDING",
				a = "REMOVALREASONS__ADD_SUCCESS",
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
					case i:
					case a:
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
						case i:
						case c:
						case u:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case a:
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
					case a:
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
					case a: {
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
				j = n("./src/lib/makeDraftKey/index.ts"),
				R = n("./src/reddit/actions/bulkActions/index.ts"),
				S = n("./src/reddit/actions/comment/index.ts"),
				P = n("./src/reddit/actions/comment/authoring.ts"),
				w = n("./src/reddit/actions/comment/moderation.ts"),
				M = n("./src/reddit/actions/modal.ts"),
				T = n("./src/reddit/actions/post.ts"),
				A = n("./src/reddit/actions/toaster.ts"),
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
				}, te = Object(_.a)(i), ne = Object(_.a)(a), se = Object(_.a)(d), oe = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o().subreddits.models[e].name;
					n(te());
					const a = await ((e, t, n) => Object(F.a)(Object(L.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: k.hb.POST,
						data: n
					}))(r(), i, t);
					if (a.ok) {
						const {
							id: o
						} = a.body, r = {
							...t,
							id: o
						};
						n(ne({
							subredditId: e,
							reason: r
						})), n(Object(A.f)({
							kind: K.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(se(a.error))
				}, re = Object(_.a)(c), ie = Object(_.a)(l), ae = Object(_.a)(m), de = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o().subreddits.models[e].name;
					n(re());
					const a = await ((e, t, n) => Object(F.a)(Object(L.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: k.hb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(r(), i, t);
					a.ok ? (n(ie({
						subredditId: e,
						reason: t
					})), n(Object(A.f)({
						kind: K.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(ae(a.error))
				}, ce = Object(_.a)(u), le = Object(_.a)(p), me = Object(_.a)(h), ue = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o().subreddits.models[e].name;
					n(ce());
					const a = await ((e, t, n) => Object(F.a)(Object(L.a)(e, [D.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: k.hb.DELETE
					}))(r(), i, t);
					a.ok ? (n(le({
						subredditId: e,
						reasonId: t
					})), n(Object(A.f)({
						kind: K.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(me(a.error))
				}, pe = Object(_.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || n(ee(e)), n(pe({
						subredditId: e,
						itemIds: t
					})), n(Object(M.i)(N.a.ADD_REMOVAL_REASON))
				}, be = Object(_.a)("REMOVALREASONS__SUBMIT_PENDING"), fe = Object(_.a)("REMOVALREASONS__SUBMIT_SUCCESS"), Ce = Object(_.a)("REMOVALREASONS__SUBMIT_FAILED"), ve = Object(_.a)("REMOVALREASONS__MESSAGE_PENDING"), xe = Object(_.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ge = Object(_.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Oe = Object(_.a)("REMOVALREASONS__MESSAGE_FAILED"), Ie = (e, t, n, s, o) => async (r, i, {
					apiContext: a
				}) => {
					const d = i(),
						c = d.user.account && d.user.account.displayText,
						l = e[0],
						m = Object(U.a)(l) ? q.e.Post : q.e.Comment,
						u = m === q.e.Post ? d.posts.models[l] : d.features.comments.models[l],
						p = m === q.e.Post ? T.T : S.i;
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
						b = await B(a(), h);
					if (b.ok) {
						if (r(fe()), t) {
							r(ve());
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								i = await H(a(), Object(q.h)(o, m), m);
							if (i.ok) {
								if (s === q.f.Public) {
									if (r(ge()), i.body) {
										const e = Object(W.a)(i.body, c),
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
											const n = Object(j.a)(X.c.replyToPost, l);
											r(Object(P.o)({
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
											})), s && s !== e.id && r(Object(S.i)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (m === q.e.Comment) {
											const e = Object(j.a)(X.c.replyToComment, u.id),
												n = Object(Q.j)(d, {
													commentId: l,
													commentsPageKey: o
												});
											r(Object(P.m)({
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
							return r(Oe(i.error)), !1
						}
					} else r(Ce(b.error)), r(p({
						[l]: {
							modNote: u.modNote,
							modRemovalReason: u.modRemovalReason,
							modReasonBy: u.modReasonBy
						}
					}));
					return !1
				}, Ee = (e, t, n, o, r) => async (i, a, {
					apiContext: d
				}) => {
					const c = a(),
						l = c.user.account && c.user.account.displayText;
					if (!l) return;
					i(be());
					const m = Object(A.f)({
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
						if (i(Object(R.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								r = await H(d(), Object(q.h)(s, q.e.Bulk), q.e.Bulk);
							r.ok ? (i(xe()), i(m)) : i(Oe(r.error))
						} else i(m)
					} else i(Ce(p.error))
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
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
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
				x = Object(i.c)({
					isFakeSubreddit: l.x
				}),
				g = Object(r.b)(x),
				O = e => {
					const t = {
						interactive: !1,
						voteState: u.a.notVoted
					};
					return o.a.createElement("div", {
						className: Object(a.a)(e.className, f.a.emptyVerticalVotes)
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
				className: Object(a.a)(e.className, h.a.classicPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement(d.b, null, o.a.createElement(I, null)), o.a.createElement("div", {
				className: f.a.mainBody
			}, o.a.createElement("div", {
				className: f.a.thumbnailContainer
			}, o.a.createElement("div", {
				className: Object(a.a)(f.a.thumbnail, Object(m.b)(e))
			})), o.a.createElement("div", {
				className: f.a.content
			}, o.a.createElement("div", {
				key: "a"
			}, o.a.createElement("div", {
				key: "aa",
				className: Object(a.a)(f.a.title, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "ab",
				className: Object(a.a)(f.a.meta, Object(m.b)(e))
			})), o.a.createElement("div", {
				key: "f",
				className: f.a.flatlist
			}, o.a.createElement("div", {
				key: "fa",
				className: Object(a.a)(f.a.flatlistExpando, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fb",
				className: f.a.flatlistSeparator
			}), o.a.createElement("div", {
				key: "fc",
				className: Object(a.a)(f.a.flatListItemOne, Object(m.b)(e))
			}), o.a.createElement("div", {
				key: "fd",
				className: Object(a.a)(f.a.flatListItemTwo, Object(m.b)(e))
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
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
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				R = n.n(j);
			const S = Object(b.t)(),
				P = e => `Distinguish--Dropdown--${e}`,
				w = Object(a.c)({
					currentUser: g.j,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(C.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(x.b)(P(t.id))(e),
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
				M = Object(i.b)(w, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (n, s) => e(Object(m.b)(t.id, n, s)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(u.h)({
						tooltipId: P(t.id)
					}))
				}));
			t.a = S(M(l.a.wrapped(Object(h.c)(({
				className: e,
				comment: t,
				currentUser: n,
				isCommentAuthor: o,
				collapsedBecauseCrowdControl: i,
				moderatorPermissions: a,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: u,
				onLockComment: h,
				onRemoveComment: b,
				onShowComment: C,
				onSpamComment: v,
				onToggleDistinguishDropdown: x,
				sendEvent: g,
				...j
			}) => {
				const S = Object(p.b)(t),
					P = t.isApproved && S,
					w = !t.isRemoved || t.bannedBy === c.k,
					M = i,
					T = e => g(Object(f.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || S) && r.a.createElement(y.a, {
					text: P ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), T("approve")
					}
				}, r.a.createElement(O.a, {
					className: R.a.icon
				})), w && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.a, {
					text: t.bannedBy === c.k ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						b(), t.bannedBy === c.k ? T("confirm_remove") : T("remove")
					}
				}, r.a.createElement(E.a, {
					className: R.a.icon
				})), r.a.createElement(y.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						v(), T("spam")
					}
				}, r.a.createElement(k.a, {
					className: R.a.icon
				}))), r.a.createElement(y.a, {
					text: t.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						h(), T(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(I.a, {
					className: R.a.icon
				})), M && r.a.createElement(y.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						C()
					}
				}, r.a.createElement(_.a, {
					className: Object(d.a)(R.a.icon, R.a.Show)
				})))
			}), "CommentModToolsFlatlist", R.a)))
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				c = n("./src/reddit/actions/gold/powerups.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/helpers/trackers/powerups.ts"),
				b = n("./src/reddit/components/AwardBadges/index.tsx"),
				f = n("./src/reddit/components/AuthorLink/index.tsx"),
				C = n("./src/reddit/selectors/experiments/econ/index.ts"),
				v = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				x = n.n(v);
			const g = e => {
				const t = Object(i.e)(C.d),
					{
						className: n,
						comment: s,
						isAuthorDeleted: o,
						isLivestreaming: a,
						isStrong: d,
						style: c
					} = e;
				return r.a.createElement(f.a, {
					className: Object(m.a)(x.a.commentAuthorLink, n),
					author: s.author,
					isAdmin: s.isAdmin,
					isAdminEmeritus: s.distinguishType === u.E.ALUMNI_ADMIN,
					isAuthorDeleted: o,
					isLivestreaming: a,
					isMod: s.isMod,
					isOp: s.isOp,
					isStrong: d,
					isUnstyled: t,
					style: c
				}, s.author)
			};
			var O = n("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx"),
				I = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				E = n("./src/reddit/components/Flair/index.tsx"),
				k = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				_ = n("./src/reddit/components/PostTopMeta/index.tsx"),
				y = n("./src/reddit/controls/MetaData/index.tsx"),
				j = n("./src/reddit/helpers/flair.ts"),
				R = n("./src/reddit/helpers/trackers/userFlair.ts"),
				S = n("./src/reddit/models/Comment/index.ts"),
				P = n("./src/reddit/selectors/gold/powerups/index.ts"),
				w = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				M = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				T = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				A = n.n(T);
			const N = ({
				authorClassName: e,
				className: t,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				renderedInOverlay: i
			}) => r.a.createElement(M.b, {
				className: Object(m.a)(A.a.authorHoverCard, t),
				postOrComment: n,
				tooltipType: i ? _.c.Lightbox : void 0
			}, r.a.createElement(w.b, {
				ignore: Object(S.f)(n) || !!n.distinguishType && n.distinguishType !== u.E.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, r.a.createElement(g, {
				className: e,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				isAuthorDeleted: Object(S.f)(n)
			})));
			var F = n("./src/config.ts"),
				L = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const D = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`,
				V = () => s.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				B = () => s.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				H = e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				U = () => s.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				W = () => s.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				});
			var z = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				G = n.n(z);
			const X = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const o = Object(i.d)(),
					a = () => o(Object(l.h)({
						tooltipId: d
					})),
					d = D("CommentTopMeta--cakeday--", t, n),
					c = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(m.a)(G.a.cakedayIcon, e),
					src: `${F.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: c,
					id: d,
					onMouseEnter: a,
					onMouseLeave: a,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(L.c, {
					tooltipId: d,
					text: c
				}))
			};
			var q = n("./src/lib/addQueryParams/index.ts"),
				K = n("./src/lib/humanizeDateTime/index.ts"),
				Q = n("./src/lib/timeAgo/index.ts"),
				J = n("./src/reddit/actions/comment/index.ts");
			const Z = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						renderedInOverlay: o
					} = e, a = Object(i.d)(), d = D("CommentTopMeta--Created--", n.id, o), c = () => a(Object(l.h)({
						tooltipId: d
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(q.a)(n.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: d,
						onClick: () => {
							Y(a, n.id)
						},
						onMouseEnter: c,
						onMouseLeave: c,
						target: "_blank",
						rel: "noopener noreferrer"
					}, Object(Q.d)(n.created, {
						noPostfix: s,
						shortenedUnit: s
					}), r.a.createElement(L.c, {
						tooltipId: d,
						text: Object(K.a)(n.created)
					}))
				},
				Y = (e, t) => {
					window.addEventListener("focus", (function n() {
						$(e, t, n)
					}))
				},
				$ = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(J.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(J.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var ee = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), se = () => r.a.createElement(y.a, {
				className: te.a.crowdControlText
			}, ne._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var oe = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				re = n.n(oe);
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ae = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(y.a, {
				className: re.a.editedText
			}, ie._("edited {time}", [ie._param("time", Object(Q.d)(t, {
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var de = n("./src/reddit/helpers/isRemoved.ts"),
				ce = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				le = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				me = n("./src/reddit/icons/fonts/index.tsx"),
				ue = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				pe = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				he = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				be = n("./src/reddit/icons/fonts/Report/index.tsx"),
				fe = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				Ce = n("./src/reddit/models/AutomatedReporting/index.ts"),
				ve = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				xe = n.n(ve);
			const ge = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: o
			}) => {
				const a = Object(i.d)(),
					d = e => () => a(Object(l.f)({
						tooltipId: e
					})),
					c = () => a(Object(l.i)()),
					u = t => D(t, e.id, o),
					p = u("CommentTopMeta--Automod--"),
					h = u("CommentTopMeta--Approve--"),
					b = u("CommentTopMeta--Remove--"),
					f = u("CommentTopMeta--Report--"),
					C = u("CommentTopMeta--Spam--"),
					v = e.bannedBy && Object(Ce.b)(e.bannedBy),
					x = d(b);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ue.a, {
					className: xe.a.approveIcon,
					desc: Object(ce.a)(e),
					id: h,
					onMouseEnter: d(h),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: h,
					text: Object(ce.a)(e)
				})), Object(de.a)(e) && !v && r.a.createElement(r.a.Fragment, null, r.a.createElement(he.a, {
					className: xe.a.removeIcon,
					desc: Object(ce.c)(e),
					id: b,
					onMouseEnter: x,
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: b,
					text: Object(ce.c)(e)
				})), Object(de.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: xe.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => a(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(de.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !v && r.a.createElement("a", {
					className: xe.a.removalReason,
					onMouseEnter: x,
					onMouseLeave: c
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(pe.a, {
					className: xe.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(fe.a, {
					className: xe.a.spamIcon,
					desc: Object(ce.e)(e),
					id: C,
					onMouseEnter: d(C),
					onMouseLeave: c,
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(L.c, {
					tooltipId: C,
					text: Object(ce.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(me.a, {
					name: "bot",
					isFilled: !0,
					className: Object(m.a)(xe.a.automoderatorIcon, {
						[xe.a.removed]: !!e.bannedBy
					}),
					"aria-label": ce.b,
					id: p,
					key: p,
					onMouseEnter: d(p),
					onMouseLeave: c
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(L.c, {
					tooltipId: p,
					text: ce.b
				}), Object(le.a)(e) && r.a.createElement(be.a, {
					className: xe.a.reportIcon,
					desc: Object(ce.d)(e.numReports),
					id: f,
					onMouseEnter: d(f),
					onMouseLeave: c,
					isFilled: !0
				}), Object(le.a)(e) && r.a.createElement(L.c, {
					tooltipId: f,
					text: Object(ce.d)(e.numReports)
				}), v && r.a.createElement("a", {
					className: xe.a.removalReason
				}, s.fbt._("• Removed by the Automated {filterName}", [s.fbt._param("filterName", v)], {
					hk: "3C408F"
				})))
			};
			var Oe, Ie = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(Oe || (Oe = {}));
			var Ee = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				ke = n.n(Ee);
			const _e = {
					[Oe.Admin]: {
						color: Ie.b,
						label: s.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: V
					},
					[Oe.Mod]: {
						color: Ie.c,
						label: s.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => H(e.subredditDisplayText)
					},
					[Oe.Op]: {
						color: Ie.a,
						label: s.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: U
					},
					[Oe.AlumniAdmin]: {
						color: Ie.b,
						label: s.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: B
					},
					[Oe.Contractor]: {
						color: Ie.a,
						label: s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: W
					}
				},
				ye = e => {
					const t = Object(i.d)(),
						n = function(e) {
							return e.isAdmin ? Oe.Admin : e.isMod ? Oe.Mod : e.isOp ? Oe.Op : e.distinguishType === u.E.ALUMNI_ADMIN ? Oe.AlumniAdmin : e.authorIsContractor ? Oe.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === Oe.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: o,
						label: a,
						tooltipTemplate: d
					} = _e[n], c = D(s, e.comment.id, e.renderedInOverlay), p = d(e), h = () => t(Object(l.h)({
						tooltipId: c
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(m.a)(ke.a.role, e.className),
						style: {
							color: o
						},
						id: c,
						onMouseEnter: h,
						onMouseLeave: h
					}, r.a.createElement("span", null, a), n === Oe.Mod && r.a.createElement(je, null)), r.a.createElement(L.c, {
						tooltipId: c,
						text: p
					}))
				},
				je = () => r.a.createElement("img", {
					alt: "Moderator Achievement",
					className: ke.a.modAchievement,
					src: `${F.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var Re = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				Se = n.n(Re);
			const {
				fbt: Pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), we = () => r.a.createElement(y.a, {
				className: Se.a.stickiedText
			}, Pe._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Me = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Te = n.n(Me);
			const Ae = e => {
				const {
					className: t,
					collapsedBecauseCrowdControl: n,
					comment: o,
					flair: a,
					ignoreLock: c,
					isLivestreaming: l,
					renderedInOverlay: u,
					subredditDisplayText: p,
					renderContractorBadge: h
				} = e, f = Object(d.a)(), v = o.subredditId, x = Object(i.e)(e => Object(P.f)(e, {
					subredditId: v
				}) && Object(C.g)(e));
				if (o.isDeleted) return r.a.createElement("div", {
					className: Object(m.a)(Te.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: Te.a.authorLine
				}, r.a.createElement("span", {
					className: Te.a.metaText
				}, o.deletedBy === S.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(y.c, {
					className: Te.a.separator
				}), r.a.createElement(Z, {
					key: "Created",
					className: Te.a.metaText,
					comment: o,
					compact: !0,
					renderedInOverlay: u
				})));
				return r.a.createElement("div", {
					className: Object(m.a)(Te.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: Te.a.authorLine
				}, !Object(S.f)(o) && r.a.createElement(I.b, {
					className: Te.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: o.subredditId,
					userId: o.authorId,
					uniqueIdentifier: o.id
				}), r.a.createElement("div", {
					className: Te.a.baselineItem
				}, r.a.createElement(N, {
					authorClassName: Te.a.author,
					comment: o,
					isLivestreaming: l,
					renderedInOverlay: u
				})), n && r.a.createElement(se, null), r.a.createElement(ye, {
					className: Te.a.role,
					comment: o,
					subredditDisplayText: p,
					renderContractorBadge: h,
					renderedInOverlay: u
				}), o.isAuthorCakeday ? r.a.createElement(X, {
					className: Te.a.cakeDay,
					commentId: o.id,
					renderedInOverlay: u
				}) : !Object(S.f)(o) && x && r.a.createElement(O.a, {
					className: Te.a.achievementFlair,
					subredditId: o.subredditId,
					userId: o.authorId,
					onHover: () => {
						f(Object(R.e)(o.id, o.subredditId, o.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(k.a, {
					className: Te.a.cryptoPoints,
					contentId: o.id,
					subredditId: o.subredditId,
					userId: o.authorId,
					username: o.author
				}), r.a.createElement(y.c, {
					className: Te.a.separator
				}), r.a.createElement(Z, {
					key: "Created",
					className: Te.a.metaText,
					comment: o,
					compact: !0,
					renderedInOverlay: u
				}), o.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: Te.a.separator
				}), r.a.createElement(we, null)), o.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: Te.a.separator
				}), r.a.createElement(ae, {
					compact: !0,
					editedAt: o.editedAt
				})), r.a.createElement(ge, {
					comment: o,
					ignoreLock: c,
					renderedInOverlay: u
				}), r.a.createElement(b.a, {
					thing: o,
					tooltipType: u ? _.c.Lightbox : void 0
				})), a && !Object(j.o)(a) && r.a.createElement("span", {
					className: Te.a.userFlairLine
				}, r.a.createElement(E.b, {
					className: Te.a.flair,
					flair: a,
					forceSmallEmojis: !0
				})))
			};
			var Ne = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Fe = n("./src/reddit/selectors/economics.ts"),
				Le = n("./src/reddit/models/Flair/index.ts"),
				De = n("./src/reddit/icons/fonts/Admin/index.tsx"),
				Ve = n("./src/reddit/icons/fonts/helpers.tsx"),
				Be = n("./src/reddit/icons/fonts/Op/index.m.less"),
				He = n.n(Be);
			var Ue = p.a.wrapped(e => r.a.createElement("i", {
					className: `${Object(Ve.b)("author",e.isFilled)} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(Ve.a, null, e.desc)), "OpIcon", He.a),
				We = n("./src/reddit/selectors/subreddit.ts"),
				ze = n("./src/reddit/selectors/userFlair.ts"),
				Ge = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Xe = n.n(Ge);

			function qe() {
				return (qe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ke = p.a.wrapped(E.b, "RightPositionedAuthorFlair", Xe.a),
				Qe = p.a.wrapped(De.a, "AdminIcon", Xe.a),
				Je = p.a.div("AdminEmeritus", Xe.a),
				Ze = p.a.wrapped(Ue, "OpIcon", Xe.a),
				Ye = p.a.wrapped(De.a, "ContractorIcon", Xe.a),
				$e = p.a.span("DeletedText", Xe.a),
				et = p.a.wrapped(y.a, "MetaSeparator", Xe.a),
				tt = e => (t, {
					comment: n,
					renderedInOverlay: s
				}) => D(e, n.id, s),
				nt = Object(i.b)(() => Object(a.c)({
					adminTooltipId: tt("CommentTopMeta--Admin--"),
					adminEmeritusTooltipId: tt("CommentTopMeta--AdEm--"),
					contractorTooltipId: tt("CommentTopMeta--Contractor--"),
					gildedTooltipId: tt("CommentTopMeta--Gold--"),
					modTooltipId: tt("CommentTopMeta--Mod--"),
					opTooltipId: tt("CommentTopMeta--OP--"),
					topSupporterTooltipId: tt("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, {
						comment: t
					}) => !!Object(Fe.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(We.H)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(ze.d)(e, {
						subredditId: t.subredditId
					}),
					isCommentHeaderRedesignEnabled: C.d
				}), (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(c.f)("comment_top_supporter_badge"))
				}));
			t.a = nt(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: n,
					children: s,
					className: o,
					collapsed: i,
					collapsedBecauseCrowdControl: a,
					comment: c,
					commentsPageKey: l,
					contractorTooltipId: u,
					compact: p,
					flair: f,
					flairPosition: C,
					hasBadges: v,
					isCommentHeaderRedesignEnabled: x,
					isLivestreaming: g,
					isPostComment: O,
					ignoreFlairPosition: j,
					ignoreLock: R,
					modTooltipId: P,
					onHideTooltip: w,
					onShowTooltip: M,
					opTooltipId: T,
					openPowerupsModal: A,
					renderContractorBadge: F,
					renderedInOverlay: L,
					subredditDisplayText: D,
					topSupporterTooltipId: V,
					userHasNft: B
				} = e, H = Object(d.a)(), U = r.a.createElement(r.a.Fragment, null, r.a.createElement(Ne.b, {
					commentId: c.id
				}), r.a.createElement(Ne.a, {
					commentId: c.id,
					commentsPageKey: l
				}));
				if (O && x) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ae, {
					className: Object(m.a)(o, {
						[Xe.a.collapsed]: i
					}),
					collapsedBecauseCrowdControl: a,
					comment: c,
					flair: f || null,
					ignoreLock: R,
					isLivestreaming: g,
					renderedInOverlay: L,
					subredditDisplayText: D,
					renderContractorBadge: !!F
				}), U);
				if (c.isDeleted) return r.a.createElement(st, qe({}, e, {
					className: Object(m.a)(o, Xe.a.container, {
						[Xe.a.collapsed]: i
					})
				}));
				if (i) return r.a.createElement(ot, qe({}, e, {
					className: Object(m.a)(o, Xe.a.container, {
						[Xe.a.collapsed]: i
					})
				}));
				const W = !j && C === Le.b.Left;
				return r.a.createElement("div", {
					className: Object(m.a)(o, Xe.a.container, {
						[Xe.a.collapsed]: i,
						[Xe.a.hasBadges]: v,
						[Xe.a.liveStreaming]: g
					}),
					"data-testid": "comment-top-meta"
				}, f && W && r.a.createElement(E.b, {
					flair: f,
					forceSmallEmojis: p
				}), !Object(S.f)(c) && r.a.createElement(I.b, {
					className: Xe.a.userBadges,
					showAddCustom: !0,
					subredditId: c.subredditId,
					userId: c.authorId,
					uniqueIdentifier: c.id
				}), s && s, r.a.createElement(N, {
					authorClassName: B ? Xe.a.NftAuthor : void 0,
					comment: c,
					isLivestreaming: g,
					isStrong: !!p,
					renderedInOverlay: L
				}), a && r.a.createElement(se, null), a && r.a.createElement(y.c, {
					className: Xe.a.metaText,
					key: "crowdControlSeparator"
				}), f && !W && r.a.createElement(Ke, {
					flair: f,
					forceSmallEmojis: p
				}), !p && r.a.createElement(k.a, {
					className: Xe.a.publicPoints,
					contentId: c.id,
					metaSeparator: r.a.createElement(y.c, {
						className: Xe.a.metaText
					}),
					subredditId: c.subredditId,
					userId: c.authorId,
					username: c.author
				}), r.a.createElement(r.a.Fragment, null, U, !x && r.a.createElement(it, {
					comment: c,
					compact: p,
					adminTooltipId: n,
					adminEmeritusTooltipId: t,
					contractorTooltipId: u,
					modTooltipId: P,
					onHideTooltip: w,
					onShowTooltip: M,
					openPowerupsModal: () => {
						H(Object(h.q)("comment")), A()
					},
					opTooltipId: T,
					renderContractorBadge: F,
					renderedInOverlay: L,
					subredditDisplayText: D,
					topSupporterTooltipId: V
				}), x && r.a.createElement(ye, {
					className: Xe.a.authorRole,
					comment: c,
					subredditDisplayText: D,
					renderContractorBadge: !!F,
					renderedInOverlay: L
				})), !p && r.a.createElement(r.a.Fragment, null, !c.isDeleted && !O && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.b, {
					className: Xe.a.metaText,
					isScoreHidden: c.isScoreHidden,
					score: c.score
				}), r.a.createElement(y.c, {
					className: Xe.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(Z, {
					key: "Created",
					className: Xe.a.MetaLink,
					comment: c,
					renderedInOverlay: L
				}), c.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: Xe.a.separator
				}), r.a.createElement(we, null)), c.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: Xe.a.separator
				}), r.a.createElement(ae, {
					editedAt: c.editedAt
				}))), r.a.createElement(ge, {
					comment: c,
					ignoreLock: R,
					renderedInOverlay: L
				}), r.a.createElement(b.a, {
					thing: c,
					tooltipType: L ? _.c.Lightbox : void 0
				}))
			});
			const st = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: o,
						comment: i,
						renderedInOverlay: a
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement($e, null, i.deletedBy === S.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(Z, {
						key: "Created",
						className: Xe.a.MetaLink,
						comment: i,
						renderedInOverlay: a
					}), n && rt({
						childrenInfo: t
					}))
				},
				ot = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: o
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(g, {
						comment: t,
						isAuthorDeleted: Object(S.f)(t)
					})), r.a.createElement(y.b, {
						className: Xe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(y.c, {
						className: Xe.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(Z, {
						key: "Created",
						className: Xe.a.MetaLink,
						comment: t,
						renderedInOverlay: o
					}), rt({
						childrenInfo: s
					}))
				},
				rt = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(et, {
						className: Xe.a.metaText
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
				};
			class it extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const {
						comment: e,
						renderedInOverlay: t,
						...n
					} = this.props;
					return r.a.createElement(o.Fragment, null, e.isAuthorCakeday && r.a.createElement(X, {
						className: Xe.a.cakeDay,
						commentId: e.id,
						renderedInOverlay: t
					}), e.isAdmin && r.a.createElement(Qe, {
						desc: V(),
						id: n.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: !0
					}), e.isAdmin && at(n.adminTooltipId, V()), e.distinguishType === u.E.ALUMNI_ADMIN && r.a.createElement(Je, {
						"aria-label": B(),
						id: n.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: n.onHideTooltip
					}, "Δ"), e.distinguishType === u.E.ALUMNI_ADMIN && at(n.adminEmeritusTooltipId, B()), e.isMod && r.a.createElement(me.a, {
						name: "mod",
						isFilled: !0,
						className: Xe.a.ModeratorIcon,
						"aria-label": H(n.subredditDisplayText),
						id: n.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: n.onHideTooltip
					}), e.isMod && at(n.modTooltipId, H(n.subredditDisplayText)), e.isOp && r.a.createElement(Ze, {
						desc: U(),
						id: n.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: !0
					}), e.isOp && at(n.opTooltipId, U()), n.renderContractorBadge && r.a.createElement(Ye, {
						desc: W(),
						id: n.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: !0
					}), n.renderContractorBadge && at(n.contractorTooltipId, W()))
				}
			}
			const at = (e, t) => r.a.createElement(L.c, {
				tooltipId: e,
				text: t
			})
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
				return P
			})), n.d(t, "b", (function() {
				return T
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/objectSelector/index.ts"),
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
				j = _.a.div("ContentWrapper", k.a),
				R = _.a.div("CommentContentWrapper", k.a),
				S = _.a.div("CommentBody", k.a),
				P = _.a.div("ParentPostTitle", k.a),
				w = _.a.div("CommentParentWrapper", k.a),
				M = Object(i.c)({
					comment: (e, t) => Object(O.a)(e, t),
					flair: g.e,
					subreddit: I.H
				}),
				T = Object(r.b)(M, (e, {
					commentId: t,
					trackClick: n
				}) => ({
					onIgnoreReports: () => e(Object(c.g)(t)),
					onVoteClick: s => {
						const [o, r] = s === x.a.upvoted ? [Object(d.q)(t), "upvote_comment"] : [Object(d.j)(t), "downvote_comment"];
						n(r)(), e(o)
					}
				})),
				A = Object(a.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = T(_.a.wrapped(e => {
				const {
					className: t,
					comment: n,
					flair: s,
					hasReports: r,
					isCheckboxSelected: i = !1,
					onIgnoreReports: a,
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
					isCheckboxSelected: i,
					toggleCheckbox: O,
					subreddit: x
				}), o.a.createElement(y, null, o.a.createElement(j, null, o.a.createElement(w, null, n.postTitle && o.a.createElement(P, null, n.postTitle), n.postAuthor && o.a.createElement(h.a, {
					comment: n
				})), o.a.createElement(R, null, o.a.createElement(u.a, {
					comment: n
				}, o.a.createElement(S, null, o.a.createElement(C.a, {
					content: Object(v.a)(n),
					mediaMetadata: n.media && n.media.mediaMetadata,
					rtJsonElementProps: A(e)
				})), o.a.createElement(p.a, {
					comment: n,
					flair: s,
					subredditName: x ? x.displayText : null
				}), r && o.a.createElement(b.a, {
					onIgnoreReports: a,
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
				i = n("./src/lib/addQueryParams/index.ts"),
				a = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
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
					} = this.props, r = s => e(() => s.metaKey || s.ctrlKey || 1 === s.button ? window.open(Object(i.a)(t, {
						context: 3
					})) : n(Object(i.a)(t, {
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
			t.a = c(Object(a.c)(l))
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
				i = n("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				a = n.n(i);
			const d = r.a.div("DashWrapper", a.a);
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
				i = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				a = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				c = n.n(d),
				l = n("./src/lib/lessComponent.tsx");
			const m = l.a.wrapped(a.a, "Inline", c.a),
				u = l.a.wrapped(a.a, "PostedInfo", c.a),
				p = l.a.wrapped(a.a, "SubredditWrapper", c.a),
				h = l.a.div("TextContainer", c.a),
				b = l.a.wrapped(i.a, "TopMeta", c.a);
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
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				c = n("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				l = n.n(c),
				m = n("./src/lib/lessComponent.tsx");
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = m.a.wrapped(r.a, "AuthorLink", l.a), h = m.a.wrapped(d.a, "Inline", l.a), b = m.a.wrapped(d.a, "SubredditWrapper", l.a), f = m.a.div("TextContainer", l.a), C = m.a.wrapped(a.b, "SubredditIcon", l.a);
			t.a = e => o.a.createElement(h, null, e.subredditOrProfile && o.a.createElement(b, null, e.subredditOrProfile && o.a.createElement(C, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && o.a.createElement(f, null, e.subredditOrProfile.displayText)), u._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && o.a.createElement(i.b, {
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
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/SubredditIcon/index.tsx"),
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
					className: Object(i.a)(m.a.container, e)
				}, o.a.createElement("div", {
					className: m.a.header
				}, o.a.createElement(a.b, {
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
					onHover: a
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
						className: Object(i.a)(b.a.container, e),
						"data-testid": "achievement-flairs",
						onMouseEnter: a
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
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModModeReports/index.m.less"),
				d = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", d.a), m = i.a.div("Placeholder", d.a), u = () => r.a.createElement(m, null, r.a.createElement(l, null, c._("Loading reports…", null, {
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
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				} = e, [f, C] = Object(o.useState)(!0), v = Object(h.b)(n.id, b), x = Object(i.d)(), g = Object(p.a)(), O = Object(h.a)(n, b), I = (e, s) => g(Object(u.a)(t, n.id, e, s));
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
				}))), s.fbt._param("=community", r.a.createElement(a.a, {
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
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
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
				} = e, [C, v] = Object(r.useState)(s.Survey), x = Object(b.b)(n.id, f), g = Object(a.d)(), O = Object(h.a)(), I = Object(b.a)(n, f), E = (e, s) => O(Object(p.b)(t, n.id, e, s));
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
						_ = i.a.createElement(m.a, y, i.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(u.a, {
							onClick: () => {
								v(s.OffTopic), E("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(u.a, {
							onClick: () => {
								v(s.DontLike), E("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(u.a, {
							onClick: () => {
								v(s.BreaksRules), E("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case s.OffTopic:
						_ = i.a.createElement(m.a, y, i.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case s.DontLike:
						_ = i.a.createElement(m.a, y, i.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case s.BreaksRules:
						_ = i.a.createElement(m.a, y, i.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", i.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, o.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), o.fbt._param("=community", i.a.createElement(d.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, o.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), i.a.createElement(u.a, {
							onClick: () => k("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(u.a, {
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
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/Popup/index.m.less"),
				i = n.n(r);

			function a(e) {
				return o.a.createElement("button", {
					className: i.a.popupButton,
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
				i = n.n(r),
				a = n("./src/lib/hooks/useOnClickOutside.ts"),
				d = n("./src/reddit/components/Popup/index.m.less"),
				c = n.n(d);

			function l(e) {
				const {
					id: t = i()(),
					onClose: n,
					onClickOutside: s,
					title: r,
					children: d
				} = e;
				return Object(a.a)(t, s), o.a.createElement("div", {
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
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/constants/colors.ts"),
				d = n("./src/reddit/components/PostLeftRail/index.m.less"),
				c = n.n(d);
			const l = 40,
				m = e => e.isRemoved ? a.b.removed : e.isReported ? a.b.reported : "transparent",
				u = Object(i.a)(e => {
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
				i = n("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = n("./src/reddit/components/PopupPortal/index.tsx"),
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
				}), k && o.a.createElement(a.b, {
					rightOf: E
				}, "survey" === k ? o.a.createElement(i.a, {
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
				i = n.n(r),
				a = n("./node_modules/react/index.js"),
				d = n.n(a),
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
				let o, r, i;
				const a = () => {
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
						const i = O();
						for (const t in e) i[t] = e[t] / r;
						t(i)
					},
					d = () => {
						void 0 !== i && (window.clearTimeout(i), i = void 0)
					},
					c = () => {
						void 0 !== o && (cancelAnimationFrame(o), o = void 0), void 0 !== r && (window.clearInterval(r), r = void 0), d(), a()
					},
					l = () => {
						o = requestAnimationFrame(() => {
							s.push(performance.now()), l()
						})
					},
					m = f()(() => {
						d(), i = window.setTimeout(c, n)
					}, p.I);
				return {
					cleanup: c,
					eventHandler: t => {
						void 0 === r ? (l(), m(), r = window.setInterval(a, C)) : m(), e(t)
					}
				}
			}
			var _ = n("./src/lib/scheduler/index.ts"),
				y = n("./src/lib/domUtils/index.ts"),
				j = n("./src/lib/LinkedListMap/index.ts");
			const R = (e, t) => e < 0 ? t + e : e % t;
			class S {
				constructor(e) {
					this.head = 0, this.size = 0, this.maxSize = e, this.items = new Array(e)
				}
				push(e) {
					return this.items[this.head] = e, this.head = R(this.head + 1, this.maxSize), this.size < this.maxSize && this.size++, this
				}
				pop() {
					if (this.size > 0) {
						const e = R(this.head - 1, this.maxSize),
							t = this.items[e];
						return this.items[e] = void 0, this.head = e, this.size--, t
					}
				}
				forEach(e) {
					let t = this.size < this.maxSize ? R(this.head - this.size, this.maxSize) : this.head;
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
			var P = n("./src/reddit/components/Scroller/getDocumentTop.ts");
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
				const n = i()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(P.a)() : t.scrollTop;
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
			var T = n("./src/reddit/components/ResizeSensor/index.tsx"),
				A = n("./src/reddit/constants/componentSizes.ts"),
				N = n("./src/reddit/constants/elementClassNames.ts"),
				F = n("./src/reddit/contexts/InsideOverlay.tsx"),
				L = n("./src/reddit/selectors/platform.ts"),
				D = n("./src/telemetry/helpers/sendEvent.ts"),
				V = n("./src/telemetry/helpers/sendTiming.ts"),
				B = n("./src/reddit/components/Scroller/Simple.m.less"),
				H = n.n(B);
			const U = A.g,
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
				ie = 30,
				ae = "object" == typeof performance && "function" == typeof performance.now,
				de = () => ae ? performance.now() : Date.now();

			function ce(e, t) {
				return j.a.fromArray(e.children.map((e, n) => {
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
					}, this.getRenderableChildrenIndexIncrement = (e = ie) => {
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
						const t = new j.a("id");
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
							const o = new j.a("id");
							let r, i;
							const a = [];
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
								if (this.elementIsUnmountable(c)) m && p && d.loaded && d.isFocusable && a.push(m.pauseContent);
								else if (m && this.loadItemIfPossible(d, m, t, n, s, a), this.elementIsVisible(c)) {
									o.push(d), !p && u && D.b.enqueue(new _.a({
										cb: u,
										args: void 0
									}));
									const e = this.elementIsFocused(c);
									e && !i && (i = d.id), t && d.isFocusable && !r && e ? (r = d.id, d.focused || (d.focused = !0, m && a.push(m.focusContent))) : d.loaded && d.isFocusable && (d.focused || this.needsToPauseViewportItems) && (d.focused = !1, m && a.push(m.pauseContent))
								} else p && d.loaded && d.isFocusable && (d.focused = !1, m && a.push(m.stopContent))
							}), h.a.write(() => {
								a.forEach(e => e()), this.props.enableElementHiding && this.hideOrShowChildren()
							}), this.itemsInViewport.forEach(({
								id: e,
								trackOnExitedViewport: t
							}) => {
								t && !o.has(e) && D.b.enqueue(new _.a({
									cb: t,
									args: [!1]
								}))
							}), this.itemsInViewport = o, this.canFocusItems = t, this.focusedChild = r, this.primaryChild = i, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, W), null !== this.unmountItemsIdleId && (Object(m.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
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
					}, this.childMap = ce(e), this.containerRef = null, this.itemsInViewport = new j.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new S(J), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = re;
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
							i()(t) || (q[e] = void 0, this.scrollContainer && Object(y.c)(this.scrollContainer, t))
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
					this.childMap = new j.a("id"), this.itemsInViewport = new j.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(m.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
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
						i = r / e.height,
						a = r / this.viewport.height;
					return i > .75 || a > .9
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
					return this.scrollContainer ? K(this.scrollContainer) ? Object(P.a)() : this.scrollContainer.scrollTop : 0
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
					})))), !!e && d.a.createElement(T.a, {
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
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(i.a, {
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
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
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
			class C extends i.a.Component {
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
					}, n = Object(a.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(d.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && i.a.createElement("span", {
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(m.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(a.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(C, f({
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
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				c = n.n(d);
			const l = i.a.span("metaText", c.a),
				m = e => r.a.createElement(l, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...o
				}) => {
					const i = Object(a.b)(t),
						d = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", i)], {
							hk: "2L3T21"
						}),
						c = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(t, "number", i)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, o, c)
				},
				p = e => r.a.createElement(l, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(a.b)(e))], {
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
				i = n.n(r);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, i = r;
					return s ? o.a.createElement(t, i) : void 0 !== n ? o.a.createElement(n, i) : null
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
				i = n("./src/lib/isUrl/index.ts"),
				a = n("./src/lib/logs/console.ts"),
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
				const o = !s.media && !!s.source && Object(i.a)(s.source.url),
					r = e && o;
				n !== d.g.Large || !x(s) || r || s.predictionTournament || (n = d.g.Medium);
				const c = b[n];
				return void 0 === c ? (Object(a.a)(void 0, `Could not find component for layout ${n}.`), f) : t && s.isSponsored && n === d.g.Large ? h : c
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
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = n.n(o);
			const i = ({
					isLoading: e
				}) => Object(s.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				a = e => Object(s.a)(r.a.loadingBar, i(e))
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
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, n) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
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
				return i
			})), n.d(t, "b", (function() {
				return a
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
				i = 1e4,
				a = 100;
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages~ModerationPages.493cf0e59859b3e796ad.js.map