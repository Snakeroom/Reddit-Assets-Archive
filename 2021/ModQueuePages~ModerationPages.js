// https://www.redditstatic.com/desktop2x/ModQueuePages~ModerationPages.cd95080211a961753ce7.js
// Retrieved at 6/9/2021, 10:20:04 AM by Reddit Dataminer v1.0.0
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
				return x
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "h", (function() {
				return R
			})), n.d(t, "b", (function() {
				return S
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
				g = n("./src/reddit/actions/comment/constants.ts");
			const v = Object(r.a)(g.n),
				x = e => async (t, n, {
					apiContext: s
				}) => {
					n().features.comments.models[e] && (await Object(m.h)(s(), e)).ok && t((e => async t => {
						t(v({
							commentId: e
						}))
					})(e))
				}, O = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(f.K)(n())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
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
				}, E = Object(r.a)(g.F), I = e => async (t, n, {
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
				}, _ = (e, t) => async (n, s, {
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
				}, k = e => async (t, n, {
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
				}, R = (e, t, n) => async (r, i, {
					gqlContext: a
				}) => {
					const d = Object(b.a)(i(), {
						commentId: e
					});
					if (!d) return;
					const l = n === o.Wb.Snoozed,
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
				}, S = (e, t, n) => async (s, r, {
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
							isAdmin: t === o.D.ADMIN,
							isMod: t === o.D.MODERATOR,
							isStickied: !!n
						}
					})), n && u && u !== e && s(Object(C.i)({
						[u]: {
							isStickied: !1
						}
					})), (await Object(m.b)(a(), e, p, n || null)).ok ? n && s(E({
						id: e,
						postId: l,
						commentsPageKey: Object(i.a)(l, null, {
							sort: o.r.CONFIDENCE,
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
				return D
			})), n.d(t, "d", (function() {
				return B
			})), n.d(t, "f", (function() {
				return z
			})), n.d(t, "a", (function() {
				return G
			})), n.d(t, "b", (function() {
				return X
			})), n.d(t, "c", (function() {
				return Q
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
				g = n("./src/telemetry/index.ts"),
				v = n("./src/lib/initializeClient/installReducer.ts"),
				x = n("./src/reddit/reducers/pages/modHub/index.ts"),
				O = n("./src/reddit/actions/modQueue/constants.ts");
			Object(v.a)({
				pages: {
					modHub: x.a
				}
			});
			const E = Object(r.a)(O.j),
				I = Object(r.a)(O.i),
				_ = Object(r.a)(O.h),
				k = Object(r.a)(O.g),
				R = Object(r.a)(O.f),
				S = Object(r.a)(O.e),
				y = Object(r.a)(O.n),
				j = Object(r.a)(O.m),
				P = Object(r.a)(O.l),
				M = Object(r.a)(O.q),
				T = Object(r.a)(O.p),
				w = Object(r.a)(O.o),
				A = Object(r.a)(O.w),
				N = Object(r.a)(O.v),
				F = Object(r.a)(O.u),
				D = (e, t, n) => async (r, i, {
					apiContext: a
				}) => {
					let l, m, u;
					switch (t) {
						case o.ob.Edited:
							l = k, m = S, u = R;
							break;
						case o.ob.Modqueue:
							l = E, m = _, u = I;
							break;
						case o.ob.Reports:
							l = y, m = P, u = j;
							break;
						case o.ob.Spam:
							l = M, m = w, u = T;
							break;
						case o.ob.Unmoderated:
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
				}, L = Object(r.a)(O.k), V = Object(r.a)(O.b), B = e => async (t, n, {
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
					p.ok ? (t(L(p.body)), p.body.moderatedAfter ? t(B()) : t(V())) : t(Object(d.f)({
						kind: h.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, H = Object(r.a)(O.t), U = Object(r.a)(O.s), W = Object(r.a)(O.r), z = (e, t, n) => async (o, r, {
					apiContext: v
				}) => {
					o(Object(i.c)());
					const x = r(),
						O = Object(b.g)(x),
						E = x.user.account && x.user.account.displayText;
					Object(l.d)(l.a.ModQueue);
					const I = Object(l.c)(l.a.ModQueue);
					Object(g.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...C.defaults(x),
						actionInfo: C.actionInfo(x, {
							count: O.length,
							paneName: x.platform.currentPage ? x.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: C.screen(x),
						correlationId: I
					});
					for (let t = 0; t < O.length; t++) {
						const n = O[t];
						let s = e;
						[p.a.Approve, p.a.Remove, p.a.Spam].includes(e) && (Object(u.a)(n) ? s += "_link" : s += "_comment"), Object(g.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...C.defaults(x),
							actionInfo: C.actionInfo(x, {
								count: O.length,
								paneName: x.platform.currentPage ? x.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: C.comment(x, n),
							post: C.post(x, n),
							profile: C.profileByPostOrCommentId(x, n),
							screen: C.screen(x),
							subreddit: C.subredditByPostOrCommentId(x, n),
							correlationId: I
						})
					}
					Object(l.b)(l.a.ModQueue);
					const _ = {
						ids: O
					};
					t && (_.text = Object(m.g)(t) || "", _.flairTemplateId = ""), n && (_.cssClass = n, _.flairTemplateId = n);
					const k = await Object(c.a)(v(), e, _);
					if (k.ok) {
						o(Object(i.b)({
							...k.body,
							operation: e,
							ids: O,
							username: E,
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
							const l = x.platform.currentPage && x.platform.currentPage.queryParams && x.platform.currentPage.queryParams.subreddit,
								m = l && Object(f.F)(x, l);
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
						o(Object(i.a)(k.error));
						const e = Object(d.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), h.b.Error);
						o(Object(d.f)(e))
					}
				}, G = Object(r.a)(O.a), X = Object(r.a)(O.c), Q = Object(r.a)(O.d)
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
				return ge
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ve
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return xe
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return Oe
			})), n.d(t, "submitRemovalReason", (function() {
				return Ee
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return Ie
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
			const g = {};
			var v = (e = g, t) => {
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
			const x = {};
			var O = (e = x, t) => {
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
			var E = (e = null, t) => {
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
				I = Object(r.c)({
					api: C,
					models: v,
					reasonOrder: O,
					removedItemIds: E
				}),
				_ = n("./src/lib/constants/index.ts"),
				k = n("./src/lib/makeActionCreator/index.ts"),
				R = n("./src/lib/makeCommentsPageKey/index.ts"),
				S = n("./src/lib/makeDraftKey/index.ts"),
				y = n("./src/reddit/actions/bulkActions/index.ts"),
				j = n("./src/reddit/actions/comment/index.ts"),
				P = n("./src/reddit/actions/comment/authoring.ts"),
				M = n("./src/reddit/actions/comment/moderation.ts"),
				T = n("./src/reddit/actions/modal.ts"),
				w = n("./src/reddit/actions/post.ts"),
				A = n("./src/reddit/actions/toaster.ts"),
				N = n("./src/reddit/constants/modals.ts"),
				F = n("./src/lib/makeApiRequest/index.ts"),
				D = n("./src/lib/omitHeaders/index.ts"),
				L = n("./src/reddit/constants/headers.ts"),
				V = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const B = (e, t) => Object(F.a)(Object(D.a)(e, [L.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: _.gb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				H = (e, t, n) => Object(F.a)(Object(D.a)(e, [L.a]), {
					endpoint: Object(V.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: _.gb.POST,
					type: "json",
					data: t
				});
			var U = n("./src/reddit/helpers/isPost.ts"),
				W = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				z = n("./src/reddit/helpers/routeKey/index.ts"),
				G = n("./src/reddit/models/ModQueue/index.ts"),
				X = n("./src/reddit/models/PostDraft/index.ts"),
				Q = n("./src/reddit/models/RemovalReason/index.ts"),
				q = n("./src/reddit/models/Toast/index.ts"),
				K = n("./src/reddit/selectors/comments.ts"),
				J = n("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: I
				}
			});
			const Z = Object(k.a)("REMOVALREASONS__LOAD_PENDING"),
				Y = Object(k.a)("REMOVALREASONS__LOAD_SUCCESS"),
				$ = Object(k.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n().subreddits.models[e].name;
					t(Z());
					const r = await ((e, t) => Object(F.a)(Object(D.a)(e, [L.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: _.gb.GET
					}))(s(), o);
					r.ok ? t(Y({
						subredditId: e,
						response: r.body
					})) : t($(r.error))
				}, te = Object(k.a)(i), ne = Object(k.a)(a), se = Object(k.a)(d), oe = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o().subreddits.models[e].name;
					n(te());
					const a = await ((e, t, n) => Object(F.a)(Object(D.a)(e, [L.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: _.gb.POST,
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
							kind: q.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(se(a.error))
				}, re = Object(k.a)(c), ie = Object(k.a)(l), ae = Object(k.a)(m), de = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o().subreddits.models[e].name;
					n(re());
					const a = await ((e, t, n) => Object(F.a)(Object(D.a)(e, [L.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: _.gb.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(r(), i, t);
					a.ok ? (n(ie({
						subredditId: e,
						reason: t
					})), n(Object(A.f)({
						kind: q.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(ae(a.error))
				}, ce = Object(k.a)(u), le = Object(k.a)(p), me = Object(k.a)(h), ue = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const i = o().subreddits.models[e].name;
					n(ce());
					const a = await ((e, t, n) => Object(F.a)(Object(D.a)(e, [L.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: _.gb.DELETE
					}))(r(), i, t);
					a.ok ? (n(le({
						subredditId: e,
						reasonId: t
					})), n(Object(A.f)({
						kind: q.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(me(a.error))
				}, pe = Object(k.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s();
					r.features.removalReasons.reasonOrder[e] && r.features.removalReasons.reasonOrder[e].length > 0 || n(ee(e)), n(pe({
						subredditId: e,
						itemIds: t
					})), n(Object(T.i)(N.a.ADD_REMOVAL_REASON))
				}, be = Object(k.a)("REMOVALREASONS__SUBMIT_PENDING"), fe = Object(k.a)("REMOVALREASONS__SUBMIT_SUCCESS"), Ce = Object(k.a)("REMOVALREASONS__SUBMIT_FAILED"), ge = Object(k.a)("REMOVALREASONS__MESSAGE_PENDING"), ve = Object(k.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), xe = Object(k.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Oe = Object(k.a)("REMOVALREASONS__MESSAGE_FAILED"), Ee = (e, t, n, s, o) => async (r, i, {
					apiContext: a
				}) => {
					const d = i(),
						c = d.user.account && d.user.account.displayText,
						l = e[0],
						m = Object(U.a)(l) ? Q.e.Post : Q.e.Comment,
						u = m === Q.e.Post ? d.posts.models[l] : d.features.comments.models[l],
						p = m === Q.e.Post ? w.P : j.i;
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
							r(ge());
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									type: s
								},
								i = await H(a(), Object(Q.h)(o, m), m);
							if (i.ok) {
								if (s === Q.f.Public) {
									if (r(xe()), i.body) {
										const e = Object(W.a)(i.body, c),
											t = {
												comment: e,
												parentId: l
											},
											n = Object(J.f)(d),
											s = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let o = n && s && Object(z.a)(s, d, d.posts.models[e.postId]);
										if (o || (o = Object(R.a)(e.postId, null, {
												sort: _.s,
												hasSortParam: !0
											})), m === Q.e.Post) {
											const n = Object(S.a)(X.c.replyToPost, l);
											r(Object(P.o)({
												...t,
												headCommentId: Object(K.w)(d, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: n
											}));
											const s = d.postStickiedComments.data[l];
											r(Object(M.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), s && s !== e.id && r(Object(j.i)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (m === Q.e.Comment) {
											const e = Object(S.a)(X.c.replyToComment, u.id),
												n = Object(K.j)(d, {
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
								} else r(ve());
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
				}, Ie = (e, t, n, o, r) => async (i, a, {
					apiContext: d
				}) => {
					const c = a(),
						l = c.user.account && c.user.account.displayText;
					if (!l) return;
					i(be());
					const m = Object(A.f)({
							kind: q.b.SuccessMod,
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
						if (i(Object(y.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								r = await H(d(), Object(Q.h)(s, Q.e.Bulk), Q.e.Bulk);
							r.ok ? (i(ve()), i(m)) : i(Oe(r.error))
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
			const g = Object(l.t)(),
				v = Object(i.c)({
					isFakeSubreddit: l.x
				}),
				x = Object(r.b)(v),
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
				E = () => o.a.createElement(O, null, o.a.createElement("div", {
					className: f.a.emptyScore,
					key: "s"
				}));
			t.b = g(x(e => o.a.createElement("div", {
				className: Object(a.a)(e.className, h.a.classicPostStyles, h.a.classicAndCompactPlaceholderStyles)
			}, o.a.createElement(d.b, null, o.a.createElement(E, null)), o.a.createElement("div", {
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
				p = n("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				h = n("./src/reddit/components/ModModeReports/helpers.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				C = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				g = n("./src/reddit/helpers/trackers/modTools.ts"),
				v = n("./src/reddit/selectors/moderatingComments.ts"),
				x = n("./src/reddit/selectors/moderatorPermissions.ts"),
				O = n("./src/reddit/selectors/tooltip.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = n("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				k = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				R = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				S = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				y = n("./src/reddit/icons/svgs/Show/index.tsx"),
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				P = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				M = n.n(P);
			const T = Object(f.t)(),
				w = e => `Distinguish--Dropdown--${e}`,
				A = Object(a.c)({
					currentUser: E.j,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(v.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(O.b)(w(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(f.g)(e, t) || Object(x.k)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: f.Q
				}),
				N = Object(i.b)(A, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (n, s) => e(Object(m.b)(t.id, n, s)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(u.h)({
						tooltipId: w(t.id)
					}))
				}));
			t.a = T(N(l.a.wrapped(Object(b.c)(({
				className: e,
				comment: t,
				currentUser: n,
				isCommentAuthor: o,
				collapsedBecauseCrowdControl: i,
				moderatorPermissions: a,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: u,
				onLockComment: b,
				onRemoveComment: f,
				onShowComment: v,
				onSpamComment: x,
				onToggleDistinguishDropdown: O,
				sendEvent: E,
				...P
			}) => {
				const T = Object(C.a)(a),
					A = Object(h.b)(t),
					N = t.isApproved && A,
					F = !!n && n.isEmployee,
					D = !t.isRemoved || t.bannedBy === c.k,
					L = i,
					V = e => E(Object(g.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || A) && r.a.createElement(j.a, {
					text: N ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), V("approve")
					}
				}, r.a.createElement(I.a, {
					className: M.a.icon
				})), D && r.a.createElement(r.a.Fragment, null, r.a.createElement(j.a, {
					text: t.bannedBy === c.k ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						f(), t.bannedBy === c.k ? V("confirm_remove") : V("remove")
					}
				}, r.a.createElement(R.a, {
					className: M.a.icon
				})), r.a.createElement(j.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						x(), V("spam")
					}
				}, r.a.createElement(S.a, {
					className: M.a.icon
				}))), r.a.createElement(j.a, {
					text: t.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), V(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(k.a, {
					className: M.a.icon
				})), o && !F && !t.bannedBy && r.a.createElement(j.a, {
					className: Object(d.a)({
						[M.a.selected]: P.isDistinguishDropdownOpen
					}),
					onClick: () => {
						V("mod_distinguish_menu"), O()
					}
				}, r.a.createElement(_.a, null), r.a.createElement(p.a, {
					isAdminDistinguished: t.isAdmin,
					isDropdownOpen: P.isDistinguishDropdownOpen,
					isModDistinguished: t.isMod,
					isStickied: t.isStickied,
					isTopLevelComment: !t.parentId,
					isUserEmployee: F,
					isUserMod: T,
					onDistinguishComment: u,
					sendEventWithName: V,
					tooltipId: w(t.id)
				})), L && r.a.createElement(j.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						v()
					}
				}, r.a.createElement(y.a, {
					className: Object(d.a)(M.a.icon, M.a.Show)
				})))
			}), "CommentModToolsFlatlist", M.a)))
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
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, n) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A"
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
				cakeIcon: "qzCz_F3Awvfuuy1_7cdqT"
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
				userBadges: "_3Ofd-Ek86mwX500i92F84q"
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
				g = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				v = n.n(g);
			const x = e => {
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
					className: Object(m.a)(v.a.commentAuthorLink, n),
					author: s.author,
					isAdmin: s.isAdmin,
					isAdminEmeritus: s.distinguishType === u.D.ALUMNI_ADMIN,
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
				E = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				I = n("./src/reddit/components/Flair/index.tsx"),
				_ = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				k = n("./src/reddit/components/PostTopMeta/index.tsx"),
				R = n("./src/reddit/controls/MetaData/index.tsx"),
				S = n("./src/reddit/helpers/flair.ts"),
				y = n("./src/reddit/models/Comment/index.ts"),
				j = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				P = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				M = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				T = n.n(M);
			const w = ({
				authorClassName: e,
				className: t,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				renderedInOverlay: i
			}) => r.a.createElement(P.b, {
				className: Object(m.a)(T.a.authorHoverCard, t),
				postOrComment: n,
				tooltipType: i ? k.c.Lightbox : void 0
			}, r.a.createElement(j.b, {
				ignore: Object(y.f)(n) || !!n.distinguishType && n.distinguishType !== u.D.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, r.a.createElement(x, {
				className: e,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				isAuthorDeleted: Object(y.f)(n)
			})));
			var A = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				N = n("./src/reddit/icons/fonts/index.tsx");
			const F = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`,
				D = () => s.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				L = () => s.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				V = e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				B = () => s.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				H = () => s.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				});
			var U = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				W = n.n(U);
			const z = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const o = Object(i.d)(),
					a = () => o(Object(l.h)({
						tooltipId: d
					})),
					d = F("CommentTopMeta--cakeday--", t, n),
					c = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(N.a, {
					name: "cake",
					isFilled: !0,
					className: Object(m.a)(W.a.cakeIcon, e),
					"aria-label": c,
					id: d,
					onMouseEnter: a,
					onMouseLeave: a
				}), r.a.createElement(A.c, {
					tooltipId: d,
					text: c
				}))
			};
			var G = n("./src/lib/addQueryParams/index.ts"),
				X = n("./src/lib/humanizeDateTime/index.ts"),
				Q = n("./src/lib/timeAgo/index.ts"),
				q = n("./src/reddit/actions/comment/index.ts");
			const K = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						renderedInOverlay: o
					} = e, a = Object(i.d)(), d = F("CommentTopMeta--Created--", n.id, o), c = () => a(Object(l.h)({
						tooltipId: d
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(G.a)(n.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: d,
						onClick: () => {
							J(a, n.id)
						},
						onMouseEnter: c,
						onMouseLeave: c,
						target: "_blank",
						rel: "noopener noreferrer"
					}, Object(Q.d)(n.created, {
						noPostfix: s,
						shortenedUnit: s
					}), r.a.createElement(A.c, {
						tooltipId: d,
						text: Object(X.a)(n.created)
					}))
				},
				J = (e, t) => {
					window.addEventListener("focus", (function n() {
						Z(e, t, n)
					}))
				},
				Z = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(q.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(q.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var Y = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				$ = n.n(Y);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = () => r.a.createElement(R.a, {
				className: $.a.crowdControlText
			}, ee._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var ne = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				se = n.n(ne);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), re = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(R.a, {
				className: se.a.editedText
			}, oe._("edited {time}", [oe._param("time", Object(Q.d)(t, {
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ie = n("./src/reddit/helpers/isRemoved.ts"),
				ae = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				de = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				ce = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				le = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				me = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				ue = n("./src/reddit/icons/fonts/Report/index.tsx"),
				pe = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				he = n("./src/reddit/models/AutomatedReporting/index.ts"),
				be = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				fe = n.n(be);
			const Ce = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: o
			}) => {
				const a = Object(i.d)(),
					d = e => () => a(Object(l.f)({
						tooltipId: e
					})),
					c = () => a(Object(l.i)()),
					u = t => F(t, e.id, o),
					p = u("CommentTopMeta--Automod--"),
					h = u("CommentTopMeta--Approve--"),
					b = u("CommentTopMeta--Remove--"),
					f = u("CommentTopMeta--Report--"),
					C = u("CommentTopMeta--Spam--"),
					g = e.bannedBy && Object(he.b)(e.bannedBy),
					v = d(b);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: fe.a.approveIcon,
					desc: Object(ae.a)(e),
					id: h,
					onMouseEnter: d(h),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: h,
					text: Object(ae.a)(e)
				})), Object(ie.a)(e) && !g && r.a.createElement(r.a.Fragment, null, r.a.createElement(me.a, {
					className: fe.a.removeIcon,
					desc: Object(ae.c)(e),
					id: b,
					onMouseEnter: v,
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(A.c, {
					tooltipId: b,
					text: Object(ae.c)(e)
				})), Object(ie.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: fe.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => a(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ie.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !g && r.a.createElement("a", {
					className: fe.a.removalReason,
					onMouseEnter: v,
					onMouseLeave: c
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(le.a, {
					className: fe.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(pe.a, {
					className: fe.a.spamIcon,
					desc: Object(ae.e)(e),
					id: C,
					onMouseEnter: d(C),
					onMouseLeave: c,
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(A.c, {
					tooltipId: C,
					text: Object(ae.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(N.a, {
					name: "bot",
					isFilled: !0,
					className: Object(m.a)(fe.a.automoderatorIcon, {
						[fe.a.removed]: !!e.bannedBy
					}),
					"aria-label": ae.b,
					id: p,
					key: p,
					onMouseEnter: d(p),
					onMouseLeave: c
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(A.c, {
					tooltipId: p,
					text: ae.b
				}), Object(de.a)(e) && r.a.createElement(ue.a, {
					className: fe.a.reportIcon,
					desc: Object(ae.d)(e.numReports),
					id: f,
					onMouseEnter: d(f),
					onMouseLeave: c,
					isFilled: !0
				}), Object(de.a)(e) && r.a.createElement(A.c, {
					tooltipId: f,
					text: Object(ae.d)(e.numReports)
				}), g && r.a.createElement("a", {
					className: fe.a.removalReason
				}, s.fbt._("• Removed by the Automated {filterName}", [s.fbt._param("filterName", g)], {
					hk: "3C408F"
				})))
			};
			var ge, ve = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(ge || (ge = {}));
			var xe = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				Oe = n.n(xe);
			const Ee = {
					[ge.Admin]: {
						color: ve.b,
						label: s.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: D
					},
					[ge.Mod]: {
						color: ve.c,
						label: s.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => V(e.subredditDisplayText)
					},
					[ge.Op]: {
						color: ve.a,
						label: s.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: B
					},
					[ge.AlumniAdmin]: {
						color: ve.b,
						label: s.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: L
					},
					[ge.Contractor]: {
						color: ve.a,
						label: s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: H
					}
				},
				Ie = e => {
					const t = Object(i.d)(),
						n = function(e) {
							return e.isAdmin ? ge.Admin : e.isMod ? ge.Mod : e.isOp ? ge.Op : e.distinguishType === u.D.ALUMNI_ADMIN ? ge.AlumniAdmin : e.authorIsContractor ? ge.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === ge.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: o,
						label: a,
						tooltipTemplate: d
					} = Ee[n], c = F(s, e.comment.id, e.renderedInOverlay), p = d(e), h = () => t(Object(l.h)({
						tooltipId: c
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(m.a)(Oe.a.role, e.className),
						style: {
							color: o
						},
						id: c,
						onMouseEnter: h,
						onMouseLeave: h
					}, a), r.a.createElement(A.c, {
						tooltipId: c,
						text: p
					}))
				};
			var _e = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ke = n.n(_e);
			const {
				fbt: Re
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Se = () => r.a.createElement(R.a, {
				className: ke.a.stickiedText
			}, Re._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var ye = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				je = n.n(ye);
			const Pe = e => {
				const {
					className: t,
					collapsedBecauseCrowdControl: n,
					comment: o,
					flair: i,
					ignoreLock: a,
					isLivestreaming: d,
					renderedInOverlay: c,
					subredditDisplayText: l,
					renderContractorBadge: u
				} = e;
				return o.isDeleted ? r.a.createElement("div", {
					className: Object(m.a)(je.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: je.a.authorLine
				}, r.a.createElement("span", {
					className: je.a.metaText
				}, o.deletedBy === y.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(R.c, {
					className: je.a.separator
				}), r.a.createElement(K, {
					key: "Created",
					className: je.a.metaText,
					comment: o,
					compact: !0,
					renderedInOverlay: c
				}))) : r.a.createElement("div", {
					className: Object(m.a)(je.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: je.a.authorLine
				}, !Object(y.f)(o) && r.a.createElement(E.b, {
					className: je.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: o.subredditId,
					userId: o.authorId,
					uniqueIdentifier: o.id
				}), r.a.createElement(w, {
					authorClassName: je.a.author,
					comment: o,
					isLivestreaming: d,
					renderedInOverlay: c
				}), n && r.a.createElement(te, null), o.isAuthorCakeday && r.a.createElement(z, {
					className: je.a.baselineItem,
					commentId: o.id,
					renderedInOverlay: c
				}), r.a.createElement(_.a, {
					className: je.a.cryptoPoints,
					contentId: o.id,
					subredditId: o.subredditId,
					userId: o.authorId,
					username: o.author
				}), r.a.createElement(Ie, {
					className: je.a.role,
					comment: o,
					subredditDisplayText: l,
					renderContractorBadge: u,
					renderedInOverlay: c
				}), !Object(y.f)(o) && r.a.createElement(O.a, {
					className: je.a.achievementFlair,
					subredditId: o.subredditId,
					userId: o.authorId
				}), r.a.createElement(R.c, {
					className: je.a.separator
				}), r.a.createElement(K, {
					key: "Created",
					className: je.a.metaText,
					comment: o,
					compact: !0,
					renderedInOverlay: c
				}), o.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(R.c, {
					className: je.a.separator
				}), r.a.createElement(Se, null)), o.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(R.c, {
					className: je.a.separator
				}), r.a.createElement(re, {
					compact: !0,
					editedAt: o.editedAt
				})), r.a.createElement(Ce, {
					comment: o,
					ignoreLock: a,
					renderedInOverlay: c
				}), r.a.createElement(b.a, {
					thing: o,
					tooltipType: c ? k.c.Lightbox : void 0
				})), i && !Object(S.o)(i) && r.a.createElement("span", {
					className: je.a.userFlairLine
				}, r.a.createElement(I.b, {
					className: je.a.flair,
					flair: i,
					forceSmallEmojis: !0
				})))
			};
			var Me = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Te = n("./src/reddit/selectors/economics.ts"),
				we = n("./src/reddit/models/Flair/index.ts"),
				Ae = n("./src/reddit/icons/fonts/Admin/index.tsx"),
				Ne = n("./src/reddit/icons/fonts/helpers.tsx"),
				Fe = n("./src/reddit/icons/fonts/Op/index.m.less"),
				De = n.n(Fe);
			var Le = p.a.wrapped(e => r.a.createElement("i", {
					className: `${Object(Ne.b)("author",e.isFilled)} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(Ne.a, null, e.desc)), "OpIcon", De.a),
				Ve = n("./src/reddit/selectors/subreddit.ts"),
				Be = n("./src/reddit/selectors/userFlair.ts"),
				He = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Ue = n.n(He);

			function We() {
				return (We = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ze = p.a.wrapped(I.b, "RightPositionedAuthorFlair", Ue.a),
				Ge = p.a.wrapped(Ae.a, "AdminIcon", Ue.a),
				Xe = p.a.div("AdminEmeritus", Ue.a),
				Qe = p.a.wrapped(Le, "OpIcon", Ue.a),
				qe = p.a.wrapped(Ae.a, "ContractorIcon", Ue.a),
				Ke = p.a.span("DeletedText", Ue.a),
				Je = p.a.wrapped(R.a, "MetaSeparator", Ue.a),
				Ze = e => (t, {
					comment: n,
					renderedInOverlay: s
				}) => F(e, n.id, s),
				Ye = Object(i.b)(() => Object(a.c)({
					adminTooltipId: Ze("CommentTopMeta--Admin--"),
					adminEmeritusTooltipId: Ze("CommentTopMeta--AdEm--"),
					contractorTooltipId: Ze("CommentTopMeta--Contractor--"),
					gildedTooltipId: Ze("CommentTopMeta--Gold--"),
					modTooltipId: Ze("CommentTopMeta--Mod--"),
					opTooltipId: Ze("CommentTopMeta--OP--"),
					topSupporterTooltipId: Ze("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, {
						comment: t
					}) => !!Object(Te.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(Ve.J)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Be.d)(e, {
						subredditId: t.subredditId
					}),
					isCommentHeaderRedesignEnabled: C.d
				}), (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(c.d)("comment_top_supporter_badge"))
				}));
			t.a = Ye(e => {
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
					hasBadges: g,
					isCommentHeaderRedesignEnabled: v,
					isLivestreaming: x,
					isPostComment: O,
					ignoreFlairPosition: S,
					ignoreLock: j,
					modTooltipId: P,
					onHideTooltip: M,
					onShowTooltip: T,
					opTooltipId: A,
					openPowerupsModal: N,
					renderContractorBadge: F,
					renderedInOverlay: D,
					subredditDisplayText: L,
					topSupporterTooltipId: V
				} = e, B = Object(d.a)(), H = r.a.createElement(r.a.Fragment, null, r.a.createElement(Me.b, {
					commentId: c.id
				}), r.a.createElement(Me.a, {
					commentId: c.id,
					commentsPageKey: l
				}));
				if (O && v) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Pe, {
					className: Object(m.a)(o, {
						[Ue.a.collapsed]: i
					}),
					collapsedBecauseCrowdControl: a,
					comment: c,
					flair: f || null,
					ignoreLock: j,
					isLivestreaming: x,
					renderedInOverlay: D,
					subredditDisplayText: L,
					renderContractorBadge: !!F
				}), H);
				if (c.isDeleted) return r.a.createElement($e, We({}, e, {
					className: Object(m.a)(o, Ue.a.container, {
						[Ue.a.collapsed]: i
					})
				}));
				if (i) return r.a.createElement(et, We({}, e, {
					className: Object(m.a)(o, Ue.a.container, {
						[Ue.a.collapsed]: i
					})
				}));
				const U = !S && C === we.b.Left;
				return r.a.createElement("div", {
					className: Object(m.a)(o, Ue.a.container, {
						[Ue.a.collapsed]: i,
						[Ue.a.hasBadges]: g,
						[Ue.a.liveStreaming]: x
					}),
					"data-testid": "comment-top-meta"
				}, f && U && r.a.createElement(I.b, {
					flair: f,
					forceSmallEmojis: p
				}), !Object(y.f)(c) && r.a.createElement(E.b, {
					className: Ue.a.userBadges,
					showAddCustom: !0,
					subredditId: c.subredditId,
					userId: c.authorId,
					uniqueIdentifier: c.id
				}), s && s, r.a.createElement(w, {
					comment: c,
					isLivestreaming: x,
					isStrong: !!p,
					renderedInOverlay: D
				}), a && r.a.createElement(te, null), a && r.a.createElement(R.c, {
					className: Ue.a.metaText,
					key: "crowdControlSeparator"
				}), f && !U && r.a.createElement(ze, {
					flair: f,
					forceSmallEmojis: p
				}), !p && r.a.createElement(_.a, {
					className: Ue.a.publicPoints,
					contentId: c.id,
					metaSeparator: r.a.createElement(R.c, {
						className: Ue.a.metaText
					}),
					subredditId: c.subredditId,
					userId: c.authorId,
					username: c.author
				}), r.a.createElement(r.a.Fragment, null, H, !v && r.a.createElement(nt, {
					comment: c,
					compact: p,
					adminTooltipId: n,
					adminEmeritusTooltipId: t,
					contractorTooltipId: u,
					modTooltipId: P,
					onHideTooltip: M,
					onShowTooltip: T,
					openPowerupsModal: () => {
						B(Object(h.r)("comment")), N()
					},
					opTooltipId: A,
					renderContractorBadge: F,
					renderedInOverlay: D,
					subredditDisplayText: L,
					topSupporterTooltipId: V
				}), v && r.a.createElement(Ie, {
					className: Ue.a.authorRole,
					comment: c,
					subredditDisplayText: L,
					renderContractorBadge: !!F,
					renderedInOverlay: D
				})), !p && r.a.createElement(r.a.Fragment, null, !c.isDeleted && !O && r.a.createElement(r.a.Fragment, null, r.a.createElement(R.b, {
					className: Ue.a.metaText,
					isScoreHidden: c.isScoreHidden,
					score: c.score
				}), r.a.createElement(R.c, {
					className: Ue.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(K, {
					key: "Created",
					className: Ue.a.MetaLink,
					comment: c,
					renderedInOverlay: D
				}), c.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(R.c, {
					className: Ue.a.separator
				}), r.a.createElement(Se, null)), c.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(R.c, {
					className: Ue.a.separator
				}), r.a.createElement(re, {
					editedAt: c.editedAt
				}))), r.a.createElement(Ce, {
					comment: c,
					ignoreLock: j,
					renderedInOverlay: D
				}), r.a.createElement(b.a, {
					thing: c,
					tooltipType: D ? k.c.Lightbox : void 0
				}))
			});
			const $e = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: o,
						comment: i,
						renderedInOverlay: a
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(Ke, null, i.deletedBy === y.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(K, {
						key: "Created",
						className: Ue.a.MetaLink,
						comment: i,
						renderedInOverlay: a
					}), n && tt({
						childrenInfo: t
					}))
				},
				et = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: o
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(x, {
						comment: t,
						isAuthorDeleted: Object(y.f)(t)
					})), r.a.createElement(R.b, {
						className: Ue.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(R.c, {
						className: Ue.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(K, {
						key: "Created",
						className: Ue.a.MetaLink,
						comment: t,
						renderedInOverlay: o
					}), tt({
						childrenInfo: s
					}))
				},
				tt = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(Je, {
						className: Ue.a.metaText
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
			class nt extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const {
						comment: e,
						renderedInOverlay: t,
						...n
					} = this.props;
					return r.a.createElement(o.Fragment, null, e.isAuthorCakeday && r.a.createElement(z, {
						commentId: e.id,
						renderedInOverlay: t
					}), e.isAdmin && r.a.createElement(Ge, {
						desc: D(),
						id: n.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: !0
					}), e.isAdmin && st(n.adminTooltipId, D()), e.distinguishType === u.D.ALUMNI_ADMIN && r.a.createElement(Xe, {
						"aria-label": L(),
						id: n.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: n.onHideTooltip
					}, "Δ"), e.distinguishType === u.D.ALUMNI_ADMIN && st(n.adminEmeritusTooltipId, L()), e.isMod && r.a.createElement(N.a, {
						name: "mod",
						isFilled: !0,
						className: Ue.a.ModeratorIcon,
						"aria-label": V(n.subredditDisplayText),
						id: n.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: n.onHideTooltip
					}), e.isMod && st(n.modTooltipId, V(n.subredditDisplayText)), e.isOp && r.a.createElement(Qe, {
						desc: B(),
						id: n.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: !0
					}), e.isOp && st(n.opTooltipId, B()), n.renderContractorBadge && r.a.createElement(qe, {
						desc: H(),
						id: n.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: !0
					}), n.renderContractorBadge && st(n.contractorTooltipId, H()))
				}
			}
			const st = (e, t) => r.a.createElement(A.c, {
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
				return w
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
				g = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				v = n("./src/reddit/models/Vote/index.ts"),
				x = n("./src/reddit/selectors/comments.ts"),
				O = n("./src/reddit/selectors/commentSelector.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				_ = n.n(I),
				k = n("./src/lib/lessComponent.tsx");
			const R = k.a.div("VoteSpacer", _.a),
				S = k.a.div("ContentWrapper", _.a),
				y = k.a.div("CommentContentWrapper", _.a),
				j = k.a.div("CommentBody", _.a),
				P = k.a.div("ParentPostTitle", _.a),
				M = k.a.div("CommentParentWrapper", _.a),
				T = Object(i.c)({
					comment: (e, t) => Object(O.a)(e, t),
					flair: x.e,
					subreddit: E.J
				}),
				w = Object(r.b)(T, (e, {
					commentId: t,
					trackClick: n
				}) => ({
					onIgnoreReports: () => e(Object(c.g)(t)),
					onVoteClick: s => {
						const [o, r] = s === v.a.upvoted ? [Object(d.q)(t), "upvote_comment"] : [Object(d.j)(t), "downvote_comment"];
						n(r)(), e(o)
					}
				})),
				A = Object(a.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = w(k.a.wrapped(e => {
				const {
					className: t,
					comment: n,
					flair: s,
					hasReports: r,
					isCheckboxSelected: i = !1,
					onIgnoreReports: a,
					onVoteClick: d,
					showModTools: c,
					subreddit: v,
					showBulkActionCheckbox: x,
					toggleCheckbox: O
				} = e;
				return o.a.createElement(m.a, {
					className: t,
					clickTrackingId: n.id,
					permalink: n.permalink
				}, o.a.createElement(f.a, {
					model: n,
					handleVote: d,
					showBulkActionCheckbox: x,
					isCheckboxSelected: i,
					toggleCheckbox: O,
					subreddit: v
				}), o.a.createElement(R, null, o.a.createElement(S, null, o.a.createElement(M, null, n.postTitle && o.a.createElement(P, null, n.postTitle), n.postAuthor && o.a.createElement(h.a, {
					comment: n
				})), o.a.createElement(y, null, o.a.createElement(u.a, {
					comment: n
				}, o.a.createElement(j, null, o.a.createElement(C.a, {
					content: Object(g.a)(n),
					rtJsonElementProps: A(e)
				})), o.a.createElement(p.a, {
					comment: n,
					flair: s,
					subredditName: v ? v.displayText : null
				}), r && o.a.createElement(b.a, {
					onIgnoreReports: a,
					reportable: n
				}), c && !n.isDeleted && o.a.createElement(l.a, {
					comment: n
				}))))))
			}, "Component", _.a))
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
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, n) {
			e.exports = {
				DistinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				distinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				Inline: "_2fiLaXOPdMYold0b-FKdVN",
				inline: "_2fiLaXOPdMYold0b-FKdVN",
				RadioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				radioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				RadioOn: "_1EcSEYj-g98-QR-5idlQZr",
				radioOn: "_1EcSEYj-g98-QR-5idlQZr",
				DistinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO",
				distinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/constants/index.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				u = n("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				p = n.n(u);
			const h = a.a.div("DistinguishWrapper", p.a),
				b = a.a.wrapped(m.a, "Inline", p.a),
				f = a.a.wrapped(c.a, "RadioOff", p.a),
				C = a.a.wrapped(l.a, "RadioOn", p.a),
				g = e => o.a.createElement(b, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(C, null) : o.a.createElement(f, null), e.text),
				v = a.a.wrapped(e => {
					const {
						className: t,
						style: n,
						isAdminDistinguished: s,
						isUserEmployee: a,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: u
					} = e;
					return o.a.createElement(h, {
						className: t,
						style: n
					}, o.a.createElement(g, {
						onClick: () => u(r.D.NONE, null),
						selected: !c && !s,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && o.a.createElement(g, {
						onClick: () => u(r.D.MODERATOR, null),
						selected: c && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && o.a.createElement(g, {
						onClick: () => u(r.D.MODERATOR, !0),
						selected: c && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && o.a.createElement(g, {
						onClick: () => u(r.D.ADMIN, null),
						selected: s && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && d && m && o.a.createElement(g, {
						onClick: () => u(r.D.ADMIN, !0),
						selected: s && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", p.a);
			var x = Object(d.a)(v);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: n,
					isUserEmployee: s,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: u
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: u
				}, o.a.createElement(x, {
					isAdminDistinguished: n,
					isUserEmployee: s,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: u,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.D.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.D.ADMIN ? m("admin_distinguish") : a && e !== r.D.MODERATOR ? m("undistinguish") : n && e !== r.D.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less": function(e, t, n) {
			e.exports = {
				container: "_2tytE20aBhQMtf6GkTvN3",
				icon: "_16Osj2XUXJVMQLOL8-1m8E"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/selectors/experiments/econ/index.ts"),
				d = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				c = n("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less"),
				l = n.n(c);
			const m = ({
					className: e,
					subredditId: t,
					userId: n
				}) => {
					const s = Object(r.e)(e => Object(d.c)(e, {
							subredditId: t,
							userId: n
						})),
						c = Object(r.e)(e => Object(d.d)(e, {
							subredditId: t,
							userId: n
						})),
						m = !!s || !!c;
					if (!Object(r.e)(e => m && Object(a.h)(e))) return null;
					const p = (null == c ? void 0 : c.type) === (null == s ? void 0 : s.type) ? null : c;
					return o.a.createElement("span", {
						className: Object(i.a)(l.a.container, e),
						"data-testid": "achievement-flairs"
					}, o.a.createElement(u, {
						achievement: p
					}), o.a.createElement(u, {
						achievement: s
					}))
				},
				u = ({
					achievement: e
				}) => e ? o.a.createElement("img", {
					alt: e.name,
					className: l.a.icon,
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
				} = e, [f, C] = Object(o.useState)(!0), g = Object(h.b)(n.id, b), v = Object(i.d)(), x = Object(p.a)(), O = Object(h.a)(n, b), E = (e, s) => x(Object(u.a)(t, n.id, e, s));
				Object(o.useEffect)(() => {
					O && E("modal", "show")
				}, [O]);
				if (!O || !f) return null;
				const I = s.fbt._("Help r/{subredditName} mods", [s.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: g,
					title: I,
					onClose: () => {
						C(!1), E("close", "click"), v(Object(d.E)()), v(Object(d.P)({
							[n.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						v(Object(d.E)())
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
					onClick: () => (C(!1), E("report", "click"), void v(Object(c.c)(n.id)))
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
				} = e, [C, g] = Object(r.useState)(s.Survey), v = Object(b.b)(n.id, f), x = Object(a.d)(), O = Object(h.a)(), E = Object(b.a)(n, f), I = (e, s) => O(Object(p.b)(t, n.id, e, s));
				Object(r.useEffect)(() => {
					E && I("modal", "show")
				}, [E]);
				const _ = e => {
					g(s.Closed), I("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), x(Object(l.c)(n.id, void 0, e))
				};
				if (!E) return null;
				let k = null;
				const R = {
					id: v,
					title: o.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						g(s.Closed), I("close", "click"), x(Object(c.E)())
					},
					onClickOutside: () => {
						x(Object(c.E)())
					}
				};
				switch (C) {
					case s.Survey:
						k = i.a.createElement(m.a, R, i.a.createElement("p", null, o.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [o.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), i.a.createElement(u.a, {
							onClick: () => {
								g(s.OffTopic), I("off_topic", "click")
							}
						}, o.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), i.a.createElement(u.a, {
							onClick: () => {
								g(s.DontLike), I("dont_like", "click")
							}
						}, o.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), i.a.createElement(u.a, {
							onClick: () => {
								g(s.BreaksRules), I("breaks_rules", "click")
							}
						}, o.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case s.OffTopic:
						k = i.a.createElement(m.a, R, i.a.createElement("p", null, o.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case s.DontLike:
						k = i.a.createElement(m.a, R, i.a.createElement("p", null, o.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case s.BreaksRules:
						k = i.a.createElement(m.a, R, i.a.createElement("p", null, o.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [o.fbt._param("=Reddit", i.a.createElement("a", {
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
							onClick: () => _("site")
						}, o.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), i.a.createElement(u.a, {
							onClick: () => _("community")
						}, o.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case s.Closed:
				}
				return k
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
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: f,
					redditStyle: C,
					subreddit: g,
					isOverlay: v,
					isActionBarAnimationEnabled: x,
					postId: O,
					isForceSelected: E
				} = e, I = `upvote-button-${t.id}${v?"-overlay":""}`, {
					moderationPrompt: _
				} = t;
				return o.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(u.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: C
				}, s && o.a.createElement(l.a, {
					className: h.a.checkbox,
					isCheckboxSelected: p,
					toggleCheckbox: b
				}), o.a.createElement(c.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: n,
					redditStyle: C,
					upvoteTooltipId: I,
					isActionBarAnimationEnabled: x,
					postId: O,
					isForceSelected: E,
					scoreClassName: h.a.score
				}), _ && o.a.createElement(a.b, {
					rightOf: I
				}, "survey" === _ ? o.a.createElement(i.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!v
				}) : o.a.createElement(r.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!v
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
				return q
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
				g = 1e3,
				v = 40;
			var x;
			! function(e) {
				e.Max10 = "0-10", e.Max20 = "11-20", e.Max30 = "21-30", e.Max40 = "31-40", e.Max50 = "41-50", e.Max60 = "51-60"
			}(x || (x = {}));
			const O = () => ({
					[x.Max10]: 0,
					[x.Max20]: 0,
					[x.Max30]: 0,
					[x.Max40]: 0,
					[x.Max50]: 0,
					[x.Max60]: 0
				}),
				E = [x.Max10, x.Max20, x.Max30, x.Max40, x.Max50, x.Max60],
				I = e => ({
					eventHandler: e
				});

			function _({
				fn: e,
				subscriber: t,
				timeout: n
			}) {
				const s = [];
				let o, r, i;
				const a = () => {
						if (s.length < v) return;
						const e = O(),
							n = Math.min(g, s.length),
							o = s.splice(0, n);
						s.splice(0, s.length);
						const r = o[n - 1] - o[0];
						for (let t = o.shift(); o.length > 0; t = o.shift()) {
							const n = o[0] - t,
								s = Math.min(60, Math.ceil(1e3 / n));
							e[s <= 10 ? x.Max10 : 60 === s ? x.Max60 : E[Math.ceil(s / 10) - 1]] += n
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
					}, p.H);
				return {
					cleanup: c,
					eventHandler: t => {
						void 0 === r ? (l(), m(), r = window.setInterval(a, C)) : m(), e(t)
					}
				}
			}
			var k = n("./src/lib/scheduler/index.ts"),
				R = n("./src/lib/domUtils/index.ts"),
				S = n("./src/lib/LinkedListMap/index.ts");
			const y = (e, t) => e < 0 ? t + e : e % t;
			class j {
				constructor(e) {
					this.head = 0, this.size = 0, this.maxSize = e, this.items = new Array(e)
				}
				push(e) {
					return this.items[this.head] = e, this.head = y(this.head + 1, this.maxSize), this.size < this.maxSize && this.size++, this
				}
				pop() {
					if (this.size > 0) {
						const e = y(this.head - 1, this.maxSize),
							t = this.items[e];
						return this.items[e] = void 0, this.head = e, this.size--, t
					}
				}
				forEach(e) {
					let t = this.size < this.maxSize ? y(this.head - this.size, this.maxSize) : this.head;
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
			class M {
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
			const T = ({
				buffer: e,
				container: t
			} = {}) => {
				const n = i()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(P.a)() : t.scrollTop;
					return new M({
						top: e,
						height: window.innerHeight
					})
				}
				return new M({
					top: 0,
					height: n
				})
			};
			var w = n("./src/reddit/components/ResizeSensor/index.tsx"),
				A = n("./src/reddit/constants/componentSizes.ts"),
				N = n("./src/reddit/constants/elementClassNames.ts"),
				F = n("./src/reddit/contexts/InsideOverlay.tsx"),
				D = n("./src/reddit/selectors/platform.ts"),
				L = n("./src/telemetry/helpers/sendEvent.ts"),
				V = n("./src/telemetry/helpers/sendTiming.ts"),
				B = n("./src/reddit/components/Scroller/Simple.m.less"),
				H = n.n(B);
			const U = A.g,
				W = 5 * p.H,
				z = 3,
				G = Object(u.c)({
					isOverlayOpen: D.h
				}),
				X = Object(l.b)(G),
				Q = {};

			function q(e) {
				return e === document
			}

			function K(e) {
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
				ne = 2 * p.H,
				se = 400,
				oe = 8,
				re = 5 * p.H,
				ie = 30,
				ae = "object" == typeof performance && "function" == typeof performance.now,
				de = () => ae ? performance.now() : Date.now();

			function ce(e, t) {
				return S.a.fromArray(e.children.map((e, n) => {
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
						L.b.enqueue(new k.a({
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
					}, p.H), this.pauseAllElements = () => {
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
						const t = new S.a("id");
						return this.state.renderableChildren.forEach(n => {
							const s = this.childMap.get(n.id);
							s && e(s) && t.push(s)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, p.H))
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
							o = new M({
								top: n,
								height: s,
								heightWithSuffix: `${s}px`
							});
						return e.rectangle = o, o
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? K(this.containerRef) : 0, this.handleContentContainerResize = o()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = h.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, p.H), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = h.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(R.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
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
							const o = new S.a("id");
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
									o.push(d), !p && u && L.b.enqueue(new k.a({
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
								t && !o.has(e) && L.b.enqueue(new k.a({
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
					}, p.H), this.hideChild = (e, t) => {
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
									this.scrollContainer && (Object(R.c)(this.scrollContainer, s), this.callOnScrollForItemsChanged())
								}, p.H)
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
					}, this.childMap = ce(e), this.containerRef = null, this.itemsInViewport = new S.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new j(J), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = re;
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
					this.fpsMeter = this.props.trackingName ? _({
						fn: this.handleScroll,
						subscriber: this.sendFPSData,
						timeout: W
					}) : I(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
				}
				cleanupScrollHandler() {
					this.fpsMeter && ("function" == typeof this.fpsMeter.cleanup && this.fpsMeter.cleanup(), this.scrollContainer && this.scrollContainer.removeEventListener("scroll", this.fpsMeter.eventHandler), window.removeEventListener("resize", this.handleResize), this.pendingScollHandlerRead && (h.a.clear(this.pendingScollHandlerRead), this.pendingScollHandlerRead = null), this.pendingResizeHandlerRead && (h.a.clear(this.pendingResizeHandlerRead), this.pendingResizeHandlerRead = null))
				}
				componentDidMount() {
					this.props.getContainer ? this.scrollContainer = this.props.getContainer() || document : this.scrollContainer = document, this.props.onScroll && this.props.onScroll({
						getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
						primaryChild: void 0
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(R.c)(this.scrollContainer, 0), this.setupScrollHandler(), h.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = Q[e];
							i()(t) || (Q[e] = void 0, this.scrollContainer && Object(R.c)(this.scrollContainer, t))
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
						Q[e] = this.lastRenderPosition
					}
					this.childMap = new S.a("id"), this.itemsInViewport = new S.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(m.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
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
					return this.scrollContainer ? q(this.scrollContainer) ? Object(P.a)() : this.scrollContainer.scrollTop : 0
				}
				updateViewportInfo() {
					if (this.scrollContainer) {
						this.viewport = T({
							buffer: 0,
							container: this.scrollContainer
						});
						const {
							viewportTopPadding: e = 0
						} = this.props, t = window.innerHeight - e, n = 2 * t;
						this.mountableViewport = new M({
							top: this.viewport.top - n,
							height: this.viewport.height + 2 * n
						});
						const s = 4 * t;
						this.renderableViewport = new M({
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
						t && L.b.enqueue(new k.a({
							cb: t,
							args: [!0]
						}))
					})
				}
				hasBeenScrolled() {
					if (!this.containerRef) return !1;
					const {
						viewportTopPadding: e = 0
					} = this.props, t = K(this.containerRef);
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
					})))), !!e && d.a.createElement(w.a, {
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
				return x
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
				g = e => e.source && e.source.url && e.isSponsored && C.some(t => e.source.url.startsWith(t)),
				v = e => !e.media || e.media.type === c.o.EMBED && !(c.b.has(e.media.provider) || g(e)),
				x = (e, t) => {
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
				n !== d.g.Large || !v(s) || r || s.predictionTournament || (n = d.g.Medium);
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
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("distinguish", e.isFilled), e.className)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages~ModerationPages.cd95080211a961753ce7.js.map