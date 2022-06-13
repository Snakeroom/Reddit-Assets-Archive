// https://www.redditstatic.com/desktop2x/ModQueuePages.f5d24487bbd87ae1656e.js
// Retrieved at 6/13/2022, 5:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages"], {
		"./node_modules/lodash/includes.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseIndexOf.js"),
				r = s("./node_modules/lodash/isArrayLike.js"),
				o = s("./node_modules/lodash/isString.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				i = s("./node_modules/lodash/values.js"),
				d = Math.max;
			e.exports = function(e, t, s, c) {
				e = r(e) ? e : i(e), s = s && !c ? a(s) : 0;
				var l = e.length;
				return s < 0 && (s = d(l + s, 0)), o(e) ? s <= l && e.indexOf(t, s) > -1 : !!l && n(e, t, s) > -1
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/selectors/telemetry.ts");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return r => {
					const o = u(r.target, r.currentTarget),
						i = p(r.target, r.currentTarget);
					o && s && t && (m(r.target, r.currentTarget, l.anchors) ? s(t(e, o, i)) : s(s => {
						const n = t(e, o, i)(s);
						let r;
						if (n && n.actionInfo) {
							const {
								pageType: e,
								...t
							} = n.actionInfo;
							r = t
						}
						return {
							...n,
							actionInfo: Object(a.P)(s, r)
						}
					})), m(r.target, r.currentTarget, l.anchorsAndButtons) && n(r)
				}
			});

			function c(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: o,
						clickTrackingId: a,
						...c
					} = t, l = Object(n.useCallback)(d(a, o, s), [a, o, s]);
					return r.a.createElement(e, i({}, c, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(o.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				m = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && m(e.parentElement, t, s)),
				u = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && u(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => {
					let t = 0,
						s = 0;
					const n = [0];
					for (const r of e) t++, s += r.length, n[t] = s;
					return n
				},
				r = e => {
					let t = 0,
						s = 0;
					const n = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) n[s] = t, s++;
						t++
					}
					return n[s] = t, n
				}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/bulkActions/constants.ts");
			const o = Object(n.a)(r.c),
				a = Object(n.a)(r.b),
				i = Object(n.a)(r.a)
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return z
			})), s.d(t, "d", (function() {
				return ee
			})), s.d(t, "f", (function() {
				return re
			})), s.d(t, "a", (function() {
				return oe
			})), s.d(t, "b", (function() {
				return ae
			})), s.d(t, "c", (function() {
				return ie
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/bulkActions/index.ts"),
				i = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				d = s("./src/reddit/actions/removalReasons/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/endpoints/modQueue/index.ts"),
				m = s("./src/reddit/endpoints/user/index.ts"),
				u = s("./src/reddit/helpers/correlationIdTracker.ts"),
				p = s("./src/reddit/helpers/flair.ts"),
				b = s("./node_modules/Base64/base64.js"),
				h = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				f = s("./src/reddit/helpers/isPost.ts"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/redditGQL/types.ts"),
				E = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				_ = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const j = {
					[r.rb.Edited]: O.q.Edited,
					[r.rb.Modqueue]: O.q.Mod,
					[r.rb.Reports]: O.q.Reported,
					[r.rb.Spam]: O.q.Removed,
					[r.rb.Unmoderated]: O.q.Unmoderated
				},
				k = {
					comments: O.p.Comment,
					links: O.p.Post,
					chat_comments: O.p.ChatComment
				};

			function S(e) {
				let {
					getState: t,
					queueType: s,
					options: n
				} = e;
				const r = t();
				let o;
				n.only && (o = k[n.only]);
				const a = {};
				n.after && (a[n.sort === h.a.OldestFirst ? "before" : "after"] = function(e, t) {
					const s = Object(f.a)(t) ? Object(g.G)(e, {
						postId: t
					}) : Object(x.b)(e, {
						commentId: t
					});
					if (s) return Object(b.btoa)(`${s.id}|${s.created}`)
				}(r, n.after));
				const i = {};
				return n.sort === h.a.OldestFirst ? i.last = 25 : i.first = 25, {
					queueType: j[s],
					...i,
					...!!o && {
						itemTypes: o
					},
					...!!n.subreddit && {
						subredditIds: [n.subreddit]
					},
					...!!n.profile && {
						subredditIds: [n.profile]
					},
					...a
				}
			}
			var v;
			! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost", e.ChatComment = "ModQueueItemChatComment"
			}(v || (v = {}));
			var y = s("./src/reddit/models/ModQueue/index.ts"),
				I = s("./src/reddit/models/Toast/index.ts"),
				T = s("./src/reddit/selectors/modQueue.ts"),
				w = s("./src/reddit/selectors/subreddit.ts"),
				N = s("./src/reddit/selectors/telemetry.ts"),
				P = s("./src/telemetry/index.ts"),
				R = s("./src/lib/initializeClient/installReducer.ts"),
				L = s("./src/reddit/reducers/pages/modHub/index.ts"),
				M = s("./src/reddit/actions/modQueue/constants.ts");
			Object(R.a)({
				pages: {
					modHub: L.a
				}
			});
			const D = Object(o.a)(M.j),
				F = Object(o.a)(M.i),
				A = Object(o.a)(M.h),
				B = Object(o.a)(M.g),
				U = Object(o.a)(M.f),
				W = Object(o.a)(M.e),
				H = Object(o.a)(M.n),
				Q = Object(o.a)(M.m),
				V = Object(o.a)(M.l),
				q = Object(o.a)(M.q),
				G = Object(o.a)(M.p),
				J = Object(o.a)(M.o),
				X = Object(o.a)(M.w),
				K = Object(o.a)(M.v),
				Y = Object(o.a)(M.u),
				z = (e, t, s) => async (o, a, d) => {
					let {
						apiContext: u,
						gqlContext: p
					} = d;
					var b, h;
					let f, x, g;
					switch (t) {
						case r.rb.Edited:
							f = B, x = W, g = U;
							break;
						case r.rb.Modqueue:
							f = D, x = A, g = F;
							break;
						case r.rb.Reports:
							f = H, x = V, g = Q;
							break;
						case r.rb.Spam:
							f = q, x = J, g = G;
							break;
						case r.rb.Unmoderated:
							f = X, x = Y, g = K;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					o(f());
					const O = await Object(l.c)(u(), t, s);
					if (O.ok) {
						const r = O.body,
							d = {
								...s
							};
						if (d.subreddit) {
							const e = null === (b = Object.values(r.subreddits).find(e => {
								let {
									name: t
								} = e;
								return t === s.subreddit
							})) || void 0 === b ? void 0 : b.id;
							d.subreddit = e
						}
						if (d.profile) {
							const e = null === (h = (await Object(m.b)(u(), d.profile)).body[d.profile]) || void 0 === h ? void 0 : h.profileId;
							d.profile = e
						}
						const f = S({
								getState: a,
								queueType: t,
								options: d
							}),
							j = await Object(l.b)(p(), f);
						if (!j.ok) return o(x(j.error)), void o(Object(c.f)({
							kind: I.b.Error,
							text: n.fbt._("Oh no! Something went wrong!", null, {
								hk: "16O2Sk"
							})
						}));
						const k = function(e) {
							let {
								modQueueItems: t
							} = e;
							const s = {
								posts: {},
								comments: {},
								reports: {},
								modqueue: [],
								authorFlair: {},
								listingOrder: []
							};
							return t && t.edges ? (t.edges.forEach(e => {
								var t, n;
								if (!e) return;
								const {
									node: r
								} = e;
								if (!r) return;
								const {
									__typename: o,
									subredditInfo: a
								} = r;
								if (!a) return;
								const {
									id: i
								} = a;
								if (o === v.Comment || o === v.ChatComment) {
									const {
										commentInfo: e
									} = r;
									if (!e) return;
									const n = Object(E.a)(e);
									s.comments[n.id] = n, s.listingOrder.push({
										id: n.id,
										type: "comment"
									}), s.modqueue.push(n.id);
									const {
										authorInfo: o,
										authorFlair: a
									} = e, d = a ? null === (t = Object(_.a)(a)) || void 0 === t ? void 0 : t[0] : null;
									s.authorFlair[i] = {
										...s.authorFlair[i],
										...(null == o ? void 0 : o.name) ? {
											[null == o ? void 0 : o.name]: d
										} : {}
									};
									const c = [];
									n.modReports.forEach(e => {
										c.push({
											type: "moderator",
											reason: e[0],
											reporter: e[1]
										})
									}), n.userReports.forEach(e => {
										c.push({
											type: "user",
											reason: e[0]
										})
									}), s.reports[n.id] = c
								}
								if (o === v.Post) {
									const {
										postInfo: e
									} = r;
									if (!e) return;
									const t = Object(C.f)(e);
									s.posts[t.id] = t, s.listingOrder.push({
										id: t.id,
										type: "post"
									}), s.modqueue.push(t.id);
									const {
										authorInfo: o,
										authorFlair: a
									} = e, d = a ? null === (n = Object(_.a)(a)) || void 0 === n ? void 0 : n[0] : null;
									s.authorFlair[i] = {
										...s.authorFlair[i],
										...(null == o ? void 0 : o.name) ? {
											[null == o ? void 0 : o.name]: d
										} : {}
									};
									const c = [];
									t.modReports.forEach(e => {
										c.push({
											type: "moderator",
											reason: e[0],
											reporter: e[1]
										})
									}), t.userReports.forEach(e => {
										c.push({
											type: "user",
											reason: e[0]
										})
									}), s.reports[t.id] = c
								}
							}), s) : s
						}(j.body.data);
						o(g({
							listingKey: e,
							page: `${s.page||y.b}`,
							response: {
								...r,
								...k
							}
						})), o(Object(i.a)({
							postIds: r.posts ? Object.keys(r.posts) : void 0,
							commentIds: r.comments ? Object.keys(r.comments) : void 0
						}))
					} else o(x(O.error)), o(Object(c.f)({
						kind: I.b.Error,
						text: n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, Z = Object(o.a)(M.k), $ = Object(o.a)(M.b), ee = e => async (t, s, r) => {
					let {
						apiContext: o
					} = r;
					const a = s(),
						i = a.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						d = a.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						m = a.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: u
						} = a.platform.currentPage.urlParams,
						p = u;
					if (e && d || m || !i) return;
					const b = await Object(l.c)(o(), p, {
						moderated_after: i
					});
					if (b.ok) {
						const e = b.body;
						t(Z(e)), e.moderatedAfter ? t(ee()) : t($())
					} else t(Object(c.f)({
						kind: I.b.Error,
						text: n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, te = Object(o.a)(M.t), se = Object(o.a)(M.s), ne = Object(o.a)(M.r), re = (e, t, s) => async (r, o, i) => {
					let {
						apiContext: m
					} = i;
					r(Object(a.c)());
					const b = o(),
						h = Object(T.g)(b),
						x = b.user.account && b.user.account.displayText;
					Object(u.d)(u.a.ModQueue);
					const g = Object(u.c)(u.a.ModQueue);
					Object(P.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...N.n(b),
						actionInfo: N.d(b, {
							count: h.length,
							paneName: b.platform.currentPage ? b.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: N.Y(b),
						correlationId: g
					});
					for (let t = 0; t < h.length; t++) {
						const s = h[t];
						let n = e;
						[y.a.Approve, y.a.Remove, y.a.Spam].includes(e) && (Object(f.a)(s) ? n += "_link" : n += "_comment"), Object(P.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: n,
							...N.n(b),
							actionInfo: N.d(b, {
								count: h.length,
								paneName: b.platform.currentPage ? b.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: N.h(b, s),
							post: N.H(b, s),
							profile: N.S(b, s),
							screen: N.Y(b),
							subreddit: N.jb(b, s),
							correlationId: g
						})
					}
					Object(u.b)(u.a.ModQueue);
					const O = {
						ids: h
					};
					t && (O.text = Object(p.g)(t) || "", O.flairTemplateId = ""), s && (O.cssClass = s, O.flairTemplateId = s);
					const E = await Object(l.a)(m(), e, O);
					if (E.ok) {
						r(Object(a.b)({
							...E.body,
							operation: e,
							ids: h,
							username: x,
							options: {
								flair: t
							}
						}));
						const s = function(e, t) {
							switch (e) {
								case y.a.Approve:
									return n.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [n.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case y.a.Flair:
									return n.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [n.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case y.a.IgnoreReports:
									return n.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [n.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case y.a.Lock:
									return n.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [n.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case y.a.MarkNSFW:
									return n.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [n.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case y.a.RemovalReason:
									return n.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [n.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case y.a.Remove:
									return n.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [n.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case y.a.Spam:
									return n.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [n.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case y.a.Spoiler:
									return n.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [n.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case y.a.UnignoreReports:
									return n.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [n.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case y.a.Unlock:
									return n.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [n.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case y.a.UnmarkNSFW:
									return n.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [n.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case y.a.Unspoiler:
								case y.a.Unspoiler:
									return n.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [n.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, h.length);
						if (e !== y.a.Approve && e !== y.a.Flair) {
							let t, o;
							const i = b.platform.currentPage && b.platform.currentPage.queryParams && b.platform.currentPage.queryParams.subreddit,
								m = i && Object(w.F)(b, i);
							e === y.a.Remove && m && h.length > 1 && (t = n.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), o = Object(d.fetchReasonsAndOpenModal)(m, h));
							const u = Object(c.e)(s, I.b.Undo, n.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, s) => {
								let {
									apiContext: r
								} = s;
								e(te());
								const o = t(),
									i = Object.keys(o.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									d = o.pages.modHub.modQueue.bulkAction.undoLastAction[i],
									m = o.user.account && o.user.account.displayText;
								e(Object(a.c)());
								const u = await Object(l.a)(r(), i, {
									ids: d
								});
								u.ok ? e(se({
									...u.body,
									operation: i,
									ids: d,
									username: m
								})) : (e(ne(u.error)), e(Object(c.f)({
									kind: I.b.Error,
									text: n.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, o);
							r(Object(c.f)(u))
						} else {
							const e = Object(c.e)(s, I.b.SuccessMod);
							r(Object(c.f)(e))
						}
					} else {
						r(Object(a.a)(E.error));
						const e = Object(c.e)(n.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), I.b.Error);
						r(Object(c.f)(e))
					}
				}, oe = Object(o.a)(M.a), ae = Object(o.a)(M.c), ie = Object(o.a)(M.d)
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Z
			})), s.d(t, "removalReasonsLoaded", (function() {
				return $
			})), s.d(t, "removalReasonsFailed", (function() {
				return ee
			})), s.d(t, "removalReasonsRequested", (function() {
				return te
			})), s.d(t, "removalReasonAddedPending", (function() {
				return se
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return ne
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return re
			})), s.d(t, "addRemovalReason", (function() {
				return oe
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ae
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ie
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return de
			})), s.d(t, "editRemovalReason", (function() {
				return ce
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return ue
			})), s.d(t, "deleteRemovalReason", (function() {
				return pe
			})), s.d(t, "removedItemsSelected", (function() {
				return be
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return xe
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return ge
			})), s.d(t, "removalReasonMessagePending", (function() {
				return Oe
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Ee
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return _e
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return Ce
			})), s.d(t, "submitRemovalReason", (function() {
				return je
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return ke
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				c = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case a:
					case i:
					case d:
					case l:
					case m:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case c:
					case u:
					case h:
						return t.payload;
					default:
						return e
				}
			};
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case i:
						case l:
						case p:
							return !0;
						case a:
						case "REMOVALREASONS__LOAD_FAILED":
						case d:
						case c:
						case m:
						case u:
						case b:
						case h:
							return !1;
						default:
							return e
					}
				},
				g = Object(o.c)({
					error: f,
					pending: x
				});
			const O = {};
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							response: s
						} = t.payload, {
							data: n
						} = s;
						return {
							...e,
							...n
						}
					}
					case d:
					case m: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case b: {
						const {
							reasonId: s
						} = t.payload, {
							[s]: n,
							...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const _ = {};
			var C = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							order: r
						} = n;
						return {
							...e,
							[s]: r
						}
					}
					case d: {
						const {
							subredditId: s,
							reason: n
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], n.id]
						}
					}
					case b: {
						const {
							subredditId: s,
							reasonId: n
						} = t.payload, r = [...e[s]].filter(e => e !== n);
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			var j = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: s
							} = t.payload;
							return {
								itemIds: s,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				k = Object(o.c)({
					api: g,
					models: E,
					reasonOrder: C,
					removedItemIds: j
				}),
				S = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/makeActionCreator/index.ts"),
				y = s("./src/lib/makeCommentsPageKey/index.ts"),
				I = s("./src/lib/makeDraftKey/index.ts"),
				T = s("./src/reddit/actions/bulkActions/index.ts"),
				w = s("./src/reddit/actions/comment/index.ts"),
				N = s("./src/reddit/actions/comment/authoring.ts"),
				P = s("./src/reddit/actions/comment/moderation.ts"),
				R = s("./src/reddit/actions/modal.ts"),
				L = s("./src/reddit/actions/post.ts"),
				M = s("./src/reddit/actions/toaster.ts"),
				D = s("./src/reddit/constants/modals.ts"),
				F = s("./src/lib/makeApiRequest/index.ts"),
				A = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const W = (e, t) => Object(F.a)(Object(A.a)(e, [B.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: S.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				H = (e, t, s) => Object(F.a)(Object(A.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: S.jb.POST,
					type: "json",
					data: t
				});
			var Q = s("./src/reddit/helpers/isPost.ts"),
				V = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = s("./src/reddit/helpers/routeKey/index.ts"),
				G = s("./src/reddit/models/ModQueue/index.ts"),
				J = s("./src/reddit/models/PostDraft/index.ts"),
				X = s("./src/reddit/models/RemovalReason/index.ts"),
				K = s("./src/reddit/models/Toast/index.ts"),
				Y = s("./src/reddit/selectors/comments.ts"),
				z = s("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: k
				}
			});
			const Z = Object(v.a)("REMOVALREASONS__LOAD_PENDING"),
				$ = Object(v.a)(a),
				ee = Object(v.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const o = s().subreddits.models[e].name;
					t(Z());
					const a = await ((e, t) => Object(F.a)(Object(A.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: S.jb.GET
					}))(r(), o);
					a.ok ? t($({
						subredditId: e,
						response: a.body
					})) : t(ee(a.error))
				}, se = Object(v.a)(i), ne = Object(v.a)(d), re = Object(v.a)(c), oe = (e, t) => async (s, r, o) => {
					let {
						apiContext: a
					} = o;
					const i = r().subreddits.models[e].name;
					s(se());
					const d = await ((e, t, s) => Object(F.a)(Object(A.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: S.jb.POST,
						data: s
					}))(a(), i, t);
					if (d.ok) {
						const {
							id: r
						} = d.body, o = {
							...t,
							id: r
						};
						s(ne({
							subredditId: e,
							reason: o
						})), s(Object(M.f)({
							kind: K.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(re(d.error))
				}, ae = Object(v.a)(l), ie = Object(v.a)(m), de = Object(v.a)(u), ce = (e, t) => async (s, r, o) => {
					let {
						apiContext: a
					} = o;
					const i = r().subreddits.models[e].name;
					s(ae());
					const d = await ((e, t, s) => Object(F.a)(Object(A.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: S.jb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(a(), i, t);
					d.ok ? (s(ie({
						subredditId: e,
						reason: t
					})), s(Object(M.f)({
						kind: K.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(de(d.error))
				}, le = Object(v.a)(p), me = Object(v.a)(b), ue = Object(v.a)(h), pe = (e, t) => async (s, r, o) => {
					let {
						apiContext: a
					} = o;
					const i = r().subreddits.models[e].name;
					s(le());
					const d = await ((e, t, s) => Object(F.a)(Object(A.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: S.jb.DELETE
					}))(a(), i, t);
					d.ok ? (s(me({
						subredditId: e,
						reasonId: t
					})), s(Object(M.f)({
						kind: K.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(ue(d.error))
				}, be = Object(v.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, n, r) => {
					let {
						apiContext: o
					} = r;
					const a = n();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || s(te(e)), s(be({
						subredditId: e,
						itemIds: t
					})), s(Object(R.i)(D.a.ADD_REMOVAL_REASON))
				}, fe = Object(v.a)("REMOVALREASONS__SUBMIT_PENDING"), xe = Object(v.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ge = Object(v.a)("REMOVALREASONS__SUBMIT_FAILED"), Oe = Object(v.a)("REMOVALREASONS__MESSAGE_PENDING"), Ee = Object(v.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), _e = Object(v.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Ce = Object(v.a)("REMOVALREASONS__MESSAGE_FAILED"), je = (e, t, s, n, r) => async (o, a, i) => {
					let {
						apiContext: d
					} = i;
					const c = a(),
						l = c.user.account && c.user.account.displayText,
						m = e[0],
						u = Object(Q.a)(m) ? X.e.Post : X.e.Comment,
						p = u === X.e.Post ? c.posts.models[m] : c.features.comments.models[m],
						b = u === X.e.Post ? L.S : w.i;
					if (!p || !l) return !1;
					o(fe()), o(b({
						[m]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: l
						}
					}));
					const h = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						f = await W(d(), h);
					if (f.ok) {
						if (o(xe()), t) {
							o(Oe());
							const r = {
									itemId: e,
									message: s,
									title: t.title,
									type: n
								},
								a = await H(d(), Object(X.h)(r, u), u);
							if (a.ok) {
								if (n === X.f.Public) {
									if (o(_e()), a.body) {
										const e = Object(V.a)(a.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(z.f)(c),
											n = c.platform.currentPage && c.platform.currentPage.routeMatch;
										let r = s && n && Object(q.a)(n, c, c.posts.models[e.postId]);
										if (r || (r = Object(y.a)(e.postId, null, {
												sort: S.u,
												hasSortParam: !0
											})), u === X.e.Post) {
											const s = Object(I.a)(J.c.replyToPost, m);
											o(Object(N.r)({
												...t,
												headCommentId: Object(Y.w)(c, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: s
											}));
											const n = c.postStickiedComments.data[m];
											o(Object(P.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), n && n !== e.id && o(Object(w.i)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (u === X.e.Comment) {
											const e = Object(I.a)(J.c.replyToComment, p.id),
												s = Object(Y.j)(c, {
													commentId: m,
													commentsPageKey: r
												});
											o(Object(N.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: r,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else o(Ee());
								return !0
							}
							return o(Ce(a.error)), !1
						}
					} else o(ge(f.error)), o(b({
						[m]: {
							modNote: p.modNote,
							modRemovalReason: p.modRemovalReason,
							modReasonBy: p.modReasonBy
						}
					}));
					return !1
				}, ke = (e, t, s, r, o) => async (a, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					a(fe());
					const u = Object(M.f)({
							kind: K.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						b = await W(c(), p);
					if (b.ok) {
						const n = {
							ids: e,
							operation: G.a.RemovalReason,
							username: m,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (a(Object(T.b)(n)), t) {
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: r
								},
								o = await H(c(), Object(X.h)(n, X.e.Bulk), X.e.Bulk);
							o.ok ? (a(Ee()), a(u)) : a(Ce(o.error))
						} else a(u)
					} else a(ge(b.error))
				}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				o = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				a = s.n(o);
			const i = n.a.wrapped(r.c, "RestrictedButton", a.a);
			t.a = i
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less": function(e, t, s) {
			e.exports = {
				BulkActionCheckbox: "_3iI16gsT5wEWtruoBxoOtR",
				bulkActionCheckbox: "_3iI16gsT5wEWtruoBxoOtR",
				UnthreadedCommentContainer: "sXloQX7r47Wzsk9BzGm2",
				unthreadedCommentContainer: "sXloQX7r47Wzsk9BzGm2",
				CommentColumn: "_1Xweq4o-zB3i3DcXmGzzCo",
				commentColumn: "_1Xweq4o-zB3i3DcXmGzzCo",
				ModToolsFlatlist: "vP5hkZOVsSDk7GDKAq7OO",
				modToolsFlatlist: "vP5hkZOVsSDk7GDKAq7OO",
				CommentContentWrapper: "-ejG1vHwBmlz_5bhISopO",
				commentContentWrapper: "-ejG1vHwBmlz_5bhISopO",
				CommentParentWrapper: "_3mX7brFt-u4nDJSVh-jpOe",
				commentParentWrapper: "_3mX7brFt-u4nDJSVh-jpOe",
				LeftRail: "Z9hmG99TfBJCAbBf-qUN5",
				leftRail: "Z9hmG99TfBJCAbBf-qUN5",
				hasBorder: "_1XsRq0m2kXDelxfbhz55U6",
				VoteColumn: "raHWe-JvKoiuubD1zI79q",
				voteColumn: "raHWe-JvKoiuubD1zI79q",
				Votes: "EJ8j2TI5xV293AHVFV98I",
				votes: "EJ8j2TI5xV293AHVFV98I",
				score: "_1dQ0ZDSConSfUQpPh7-fct",
				ParentPostTitle: "_3lXem8Q27IuhplBpcrbkOv",
				parentPostTitle: "_3lXem8Q27IuhplBpcrbkOv",
				Component: "_3WdgziOPlXBwthdefEr85r",
				component: "_3WdgziOPlXBwthdefEr85r",
				isBanned: "_34REldWOs0k5_KaRonS2V5",
				isReported: "sYxWb5PNRmW4dH0vC6Qiy"
			}
		},
		"./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less": function(e, t, s) {
			e.exports = {
				VoteSpacer: "_3SDIICEtoL7xtFw7iXPmd4",
				voteSpacer: "_3SDIICEtoL7xtFw7iXPmd4",
				ContentWrapper: "_3kLHiyeJw88pJ2rFPeO-h_",
				contentWrapper: "_3kLHiyeJw88pJ2rFPeO-h_",
				Meta: "TmC-aUr9G4BhD7f1fazLW",
				meta: "TmC-aUr9G4BhD7f1fazLW",
				CommentParentWrapper: "XNRBSCtZVEKlAOHUTl8fv",
				commentParentWrapper: "XNRBSCtZVEKlAOHUTl8fv",
				CommentContentWrapper: "_3CTfjjt3pW3hsmgbSddrW6",
				commentContentWrapper: "_3CTfjjt3pW3hsmgbSddrW6",
				Component: "_3Pul81GjcQcqXueoAqkS0P",
				component: "_3Pul81GjcQcqXueoAqkS0P"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Comments/UnthreadedComment/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return P
			})), s.d(t, "b", (function() {
				return M
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/actions/comment/index.ts"),
				c = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				m = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				u = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				p = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				b = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				h = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				f = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				x = s("./src/reddit/components/ModModeReports/index.tsx"),
				g = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				O = s("./src/reddit/components/RichTextJson/index.tsx"),
				E = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				_ = s("./src/reddit/models/Vote/index.ts"),
				C = s("./src/reddit/selectors/comments.ts"),
				j = s("./src/reddit/selectors/commentSelector.ts"),
				k = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				v = s.n(S),
				y = s("./src/lib/lessComponent.tsx");
			const I = y.a.div("VoteSpacer", v.a),
				T = y.a.div("ContentWrapper", v.a),
				w = y.a.div("CommentContentWrapper", v.a),
				N = y.a.div("CommentBody", v.a),
				P = y.a.div("ParentPostTitle", v.a),
				R = y.a.div("CommentParentWrapper", v.a),
				L = Object(a.c)({
					comment: (e, t) => Object(j.b)(e, t),
					commentPermalink: C.m,
					flair: C.e,
					subreddit: k.J
				}),
				M = Object(o.b)(L, (e, t) => {
					let {
						commentId: s,
						trackClick: n
					} = t;
					return {
						onIgnoreReports: () => e(Object(c.g)(s)),
						onVoteClick: t => {
							const [r, o] = t === _.a.upvoted ? [Object(d.q)(s), "upvote_comment"] : [Object(d.j)(s), "downvote_comment"];
							n(o)(), e(r)
						}
					}
				}),
				D = Object(i.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = M(y.a.wrapped(e => {
				const {
					className: t,
					comment: s,
					commentPermalink: n,
					flair: o,
					hasReports: a,
					isCheckboxSelected: i = !1,
					onIgnoreReports: d,
					onVoteClick: c,
					showModTools: _,
					subreddit: C,
					showBulkActionCheckbox: j,
					toggleCheckbox: k
				} = e, S = Object(f.a)(s);
				return r.a.createElement(m.a, {
					className: t,
					clickTrackingId: s.id,
					permalink: n
				}, r.a.createElement(g.a, {
					model: s,
					handleVote: c,
					showBulkActionCheckbox: j,
					isCheckboxSelected: i,
					toggleCheckbox: k
				}), r.a.createElement(I, null, r.a.createElement(T, null, r.a.createElement(R, null, s.postTitle && r.a.createElement(P, null, s.postTitle), s.postAuthor && r.a.createElement(b.a, {
					comment: s
				})), r.a.createElement(w, null, r.a.createElement(u.a, {
					comment: s
				}, r.a.createElement(N, null, r.a.createElement(O.b, {
					content: Object(E.a)(s),
					mediaMetadata: s.media && s.media.mediaMetadata,
					rtJsonElementProps: D(e)
				})), r.a.createElement(p.a, {
					comment: s,
					flair: o,
					subredditName: C ? C.displayText : null
				}), S && r.a.createElement(h.a, {
					thing: s
				}), a && r.a.createElement(x.a, {
					onIgnoreReports: d,
					reportable: s
				}), _ && !s.isDeleted && r.a.createElement(l.a, {
					comment: s
				}))))))
			}, "Component", v.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				d = s("./src/reddit/helpers/overlay/index.ts");
			const c = Object(o.b)(null, e => ({
				openLightbox: t => e(Object(d.a)(t))
			}));
			class l extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						permalink: t,
						openLightbox: s,
						...n
					} = this.props, o = n => e(() => n.metaKey || n.ctrlKey || 1 === n.button ? window.open(Object(a.a)(t, {
						context: 3
					})) : s(Object(a.a)(t, {
						context: 3
					})))(n);
					return r.a.createElement("div", {
						className: n.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && o(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && o(e)
						}
					}, n.children)
				}
			}
			t.a = c(Object(i.a)(l))
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				DashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u",
				dashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				i = s.n(a);
			const d = o.a.div("DashWrapper", i.a);
			t.a = e => null === e.comment.parentId ? r.a.createElement(d, null, e.children) : r.a.createElement(d, null, r.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				i = s("./src/reddit/layout/row/Inline/index.tsx"),
				d = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				c = s.n(d),
				l = s("./src/lib/lessComponent.tsx");
			const m = l.a.wrapped(i.a, "Inline", c.a),
				u = l.a.wrapped(i.a, "PostedInfo", c.a),
				p = l.a.wrapped(i.a, "SubredditWrapper", c.a),
				b = l.a.div("TextContainer", c.a),
				h = l.a.wrapped(a.a, "TopMeta", c.a);
			t.a = e => o.a.createElement(m, {
				className: e.className
			}, e.subredditName && o.a.createElement(p, null, e.subredditName && o.a.createElement(b, null, e.subredditName)), o.a.createElement(u, null, o.a.createElement(b, null, `${n.fbt._("Commented by",null,{hk:"4Dveap"})}`), o.a.createElement(h, {
				collapsedBecauseCrowdControl: e.comment.collapsedBecauseCrowdControl,
				collapsed: !1,
				comment: e.comment,
				flair: e.flair,
				renderedInOverlay: !1
			})))
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/AuthorLink/index.tsx"),
				a = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				c = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				l = s.n(c),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/lessComponent.tsx");
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = u.a.wrapped(o.a, "AuthorLink", l.a), h = u.a.wrapped(d.a, "Inline", l.a), f = u.a.wrapped(d.a, "SubredditWrapper", l.a), x = u.a.div("TextContainer", l.a), g = u.a.wrapped(i.b, "SubredditIcon", l.a);
			t.a = e => r.a.createElement(h, null, e.subredditOrProfile && r.a.createElement(f, null, e.subredditOrProfile && r.a.createElement(g, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && r.a.createElement(x, null, e.subredditOrProfile.displayText)), p._("posted by", null, {
				hk: "1EuRc2"
			}), e.comment.postAuthor && r.a.createElement(a.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, r.a.createElement(b, {
				author: e.comment.postAuthor,
				isUnstyled: !0,
				isAuthorDeleted: e.comment.postAuthor === m.E
			}, `u/${e.comment.postAuthor}`)))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				DropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				dropdownButton: "_3EHmSVytc7PNTijH2qfAan",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/preferences.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/contexts/Tooltip.ts"),
				x = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/selectors/telemetry.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				j = s.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = "view--layout--FUE",
				v = "LayoutSwitch--picker",
				y = Object(d.a)(x.a),
				I = {
					[b.d.Card]: function(e) {
						return o.a.createElement(O.a, k({}, e, {
							name: "view_card"
						}))
					},
					[b.d.Classic]: function(e) {
						return o.a.createElement(O.a, k({}, e, {
							name: "view_classic"
						}))
					},
					[b.d.Compact]: function(e) {
						return o.a.createElement(O.a, k({}, e, {
							name: "view_compact"
						}))
					}
				},
				T = {
					[b.d.Card]: () => n.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[b.d.Classic]: () => n.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[b.d.Compact]: () => n.fbt._("compact", null, {
						hk: "1N7pcz"
					}),
					[b.d.Search]: () => n.fbt._("search", null, {
						hk: "49uLRt"
					})
				},
				w = Object(h.u)(),
				N = Object(i.c)({
					dropdownIsOpen: Object(_.b)(v),
					postLayout: h.S,
					redditStyle: h.D
				}),
				P = Object(a.b)(N, e => ({
					onListingLayoutChange: (t, s) => e(Object(m.y)(t, s)),
					openDropdown: () => e(Object(u.h)({
						tooltipId: v
					}))
				}));
			class R extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: n,
							subredditId: r
						} = this.props;
						t ? t(e) : (s(e, r), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(E.Y)(t),
							subreddit: Object(E.gb)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: r
						} = this.props, a = s || b.e[r], i = e === a, d = I[e], l = T[e];
						return o.a.createElement(g.b, k({}, t, {
							className: Object(c.a)(j.a.LayoutItem, {
								[j.a.selected]: i,
								[j.a.DropdownButton]: null == t ? void 0 : t.showDropdownTriangle
							}),
							"data-layout": e,
							displayText: l(),
							iconWrapperClassName: j.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: j.a.LayoutItemTextClassName
						}), o.a.createElement(d, {
							className: j.a.LayoutIcon,
							onClick: i ? void 0 : n,
							isFilled: i && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(y, k({}, e, {
							className: j.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: j.a.DropdownRow,
							rowIconClassName: j.a.DropdownRowIcon,
							rowSelectedClassName: j.a.DropdownRowSelected,
							tooltipId: v
						}), this.renderItem(b.d.Card), this.renderItem(b.d.Classic), this.renderItem(b.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, r = t || b.e[n];
					return o.a.createElement("div", {
						className: Object(c.a)(j.a.Container, e),
						id: S
					}, o.a.createElement("div", {
						className: j.a.DropdownContainer,
						onClick: s
					}, this.renderItem(r, {
						id: v,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = w(P(Object(p.c)(Object(l.a)(R))))
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				a = Object(r.a)("spBurnLinks", Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/Media/index.m.less"),
				i = s.n(a);
			const d = (e, t) => e && t ? n.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? n.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? n.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				c = e => {
					let {
						isNSFW: t,
						isSpoiler: s
					} = e;
					return o.a.createElement("div", {
						className: i.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: i.a.unblurButton
					}, d(t, s)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				u = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = s.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(o.b)(() => Object(a.c)({
					isNightmodeOn: u.db
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(i.a)(Object(c.a)(e.source), t) : Object(c.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${m.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), e.isTweet || (n.height = "100%"), r.a.createElement("iframe", {
					className: Object(d.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: s,
					style: n,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				m = s("./src/lib/opener/index.ts"),
				u = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/components/Media/BlurredContent.tsx"),
				b = s("./src/reddit/components/PlayButton/index.tsx"),
				h = s("./src/reddit/constants/elementClassNames.ts"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/hooks/useClickSourceData.ts"),
				O = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/constants/tracking.ts"),
				k = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				S = s.n(k);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = e => e > 2 * O.e,
				I = e => {
					const t = Object(c.a)(S.a.image, h.g, e.className, {
							[S.a.mShowCentered]: e.showCentered,
							[S.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${O.j}px`), e.isListing || e.isTall && y(e.height) || (s.maxHeight = `${O.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				T = e => {
					const t = {};
					return (!e.showFull && Object(O.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${O.j}px`, e.shouldBlur && (t.maxWidth = Object(O.L)(e.height, e.width) ? `${O.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(c.a)(S.a.container, e.className),
						style: t
					}, e.children)
				},
				w = Object(a.b)(() => Object(d.a)(E.F, C.jb, (e, t) => {
					let {
						isSponsored: s,
						postId: n
					} = t;
					return s && n ? Object(E.b)(e, n) : null
				}, _.d, E.G, (e, t, s, n, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					pageType: n.pageType,
					post: r
				})));
			t.a = w(e => {
				const t = Object(g.a)();
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: m.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(x.a)(e.post, e.pageType)
					}
				}, P(e)) : e.isListing && e.postPermalink ? o.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(u.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, P(e)) : P(e)
			});
			const N = (e, t) => o.a.createElement(I, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[j.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				P = e => {
					let {
						onClick: t,
						...s
					} = e;
					const r = Object(O.L)(s.height, s.width),
						a = y(s.height) && r;
					return o.a.createElement(T, v({}, s, {
						className: `${r?`${j.a} `:""}${s.className||""}`
					}), s.isListing ? o.a.createElement("div", {
						className: s.contentImageClassName
					}, N(r, s)) : o.a.createElement("a", {
						href: s.originalSource,
						onClick: t,
						style: a ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: m.c,
						className: S.a.imageLink
					}, N(r, s), s.shouldBlur && !s.isVideoThumbnail && !s.isNsfwBlockingModalEligible && o.a.createElement(p.a, {
						isNSFW: !!s.isNSFW,
						isSpoiler: !!s.isSpoiler
					})), s.isListing && !s.showFull && s.height > O.j && Object(O.L)(s.height, s.width) && o.a.createElement("div", {
						className: S.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), s.isVideoThumbnail && o.a.createElement(b.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, s) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/forceHttps/index.ts"),
				i = s("./src/reddit/models/Media/index.ts"),
				d = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = s.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < i.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const s = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					n = e.blurSrc ? r.a.createElement("img", {
						className: c.a.blur,
						src: Object(a.a)(e.blurSrc)
					}) : null,
					d = Object(i.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : s
				}, n, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${d}%`
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class m extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return S
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/@reddit/adblock-detection/browser.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/video.ts"),
				u = s("./src/reddit/constants/tracking.ts"),
				p = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/selectors/video.ts");
			const f = 100,
				x = f / 2 / 1e3;
			var g = s("./src/lib/forceHttps/index.ts"),
				O = s("./src/lib/hooks/usePrevious.ts");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function _(e) {
				let {
					autoplay: t,
					isListing: s,
					isNotCardView: n,
					onBufferingChange: r,
					shouldLoad: i,
					shouldPause: d,
					showCentered: c,
					showFull: l,
					source: m,
					...u
				} = e;
				const p = Object(o.useRef)(),
					b = Object(o.useRef)(),
					h = Object(O.a)(d);

				function _(e) {
					if (e) {
						const e = null === (t = null == b ? void 0 : b.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == b ? void 0 : b.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(o.useEffect)(() => {
					if (_(!d && (t || n)), b.current && r) return p.current = function(e, t) {
						let s = !1,
							n = !1;
						const r = () => s = !0,
							o = () => n = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let a = !1,
							i = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, n) return n = !1, void(i = d);
							if (e.paused || e.seeking || !s) return void(i = d);
							const r = a;
							4 === e.readyState ? a = !1 : !a && d >= i && d < i + x ? a = !0 : a && d >= i && d > i + x && (a = !1), i = d, r !== a && t(a)
						}, f);
						return () => {
							clearInterval(c), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(b.current, r), () => {
						p.current && p.current()
					}
				}, []), Object(o.useEffect)(() => {
					h !== d && _(!d && (t || n))
				}, [h, d, t, n]), a.a.createElement("video", E({}, u, {
					ref: e => b.current = e,
					muted: !0
				}), a.a.createElement("source", {
					src: Object(g.a)(m || "")
				}))
			}
			var C = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				j = s.n(C);
			const k = Object(d.c)({
				autoplayPref: b.b,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function S(e) {
				const {
					autoplayPref: t,
					consumed: s,
					loadTimes: n,
					metadata: o,
					started: d
				} = Object(i.e)(t => k(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: x,
					isNotCardView: g,
					showFull: O,
					shouldPause: E,
					width: C,
					isListing: S,
					className: v,
					showCentered: y,
					originalSource: I,
					isPromoted: T
				} = e, w = t && !(T && Object(c.hasAcceptableAds)()), N = Object(i.d)();

				function P(e) {
					N(e ? Object(m.r)(b) : Object(m.E)(b))
				}

				function R() {
					return N(Object(m.z)({
						postId: b
					}))
				}
				const L = r()(e => {
					if (s) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && N(Object(m.s)(b))
				}, 200);

				function M(e) {
					e.persist(), L(e)
				}

				function D(e) {
					var t;
					(o || A(e), d) || (t = e.timeStamp, N(Object(m.A)(b, t)))
				}

				function F(e) {
					N(Object(m.q)(b, e.timeStamp))
				}

				function A(e) {
					! function(e) {
						N(Object(m.D)({
							metadata: e,
							postId: b
						}))
					}({
						id: b,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function B(e) {
					n || D(e), o || A(e), N(Object(m.C)(b))
				}

				function U() {
					const e = {};
					return y && (e.margin = "0 auto"), S || (e.maxHeight = `${p.e}px`), a.a.createElement(_, {
						autoplay: w,
						className: Object(l.a)(u.a, j.a.styledVideo),
						height: x,
						isListing: S,
						isNotCardView: g,
						key: b,
						loop: !0,
						onBufferingChange: P,
						onLoadStart: F,
						onLoadedData: D,
						onLoadedMetadata: A,
						onPause: R,
						onPlaying: B,
						onTimeUpdate: M,
						shouldLoad: h,
						shouldPause: E,
						showCentered: y,
						showFull: O,
						source: f,
						style: e,
						width: C
					})
				}
				return S ? U() : a.a.createElement("div", {
					className: Object(l.a)(j.a.container, v, {
						[j.a.centered]: y
					})
				}, a.a.createElement("a", {
					href: I,
					target: "_blank",
					rel: "noopener noreferrer"
				}, U()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, s) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				r = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				o = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3gono-WZrSL-d6xVXvjtMy",
				container: "_3gono-WZrSL-d6xVXvjtMy",
				Image: "cSzjL6IStvPqHPZ7Y7ly8",
				image: "cSzjL6IStvPqHPZ7Y7ly8",
				Title: "_15y0pZYrlSHF1PcfsddZ-q",
				title: "_15y0pZYrlSHF1PcfsddZ-q",
				Text: "_2jaFduo9u1gW746Eq2bUKo",
				text: "_2jaFduo9u1gW746Eq2bUKo"
			}
		},
		"./src/reddit/components/ModQueueList/LayoutNavigation.m.less": function(e, t, s) {
			e.exports = {
				Inline: "_3JHX3et1k6IdasjG0oW12P",
				inline: "_3JHX3et1k6IdasjG0oW12P",
				Filter: "_1OcIyF84egvn4Y6482t8jQ",
				filter: "_1OcIyF84egvn4Y6482t8jQ",
				LayoutSwitch: "_31lr1WpF-1P7ga7WE4KVS7",
				layoutSwitch: "_31lr1WpF-1P7ga7WE4KVS7"
			}
		},
		"./src/reddit/components/ModQueueList/LayoutNavigation.tsx": function(e, t, s) {
			"use strict";
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/layout/row/Inline/index.tsx"),
				g = s("./src/reddit/selectors/profile.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx"),
				C = s("./src/lib/addQueryParams/index.ts"),
				j = s("./src/lib/filterQueryParams/index.ts"),
				k = s("./src/reddit/controls/Dropdown/Row.tsx"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				v = s("./src/reddit/selectors/meta.ts"),
				y = s("./src/reddit/selectors/experiments/chat.ts"),
				I = s("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				T = s.n(I);
			! function(e) {
				e.Comments = "comments", e.Posts = "links", e.ChatPosts = "chat_comments"
			}(n || (n = {}));
			const w = m.a.wrapped(k.b, "Row", T.a),
				N = Object(d.c)({
					currentPage: e => e.platform.currentPage,
					origin: v.j,
					isModQChatCommentsFilterEnabled: y.f
				});
			var P = Object(i.b)(N)(e => a.a.createElement("div", null, a.a.createElement(S.default, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(j.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "only", "page"])
				}, a.a.createElement(w, {
					displayText: r.fbt._("Posts and Comments", null, {
						hk: "1ypCik"
					}),
					isSelected: !e.postTypeFilter
				})), a.a.createElement(S.default, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(C.a)(Object(j.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: n.Posts
					})
				}, a.a.createElement(w, {
					displayText: r.fbt._("Posts", null, {
						hk: "r23OU"
					}),
					isSelected: e.postTypeFilter === n.Posts
				})), a.a.createElement(S.default, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(C.a)(Object(j.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: n.Comments
					})
				}, a.a.createElement(w, {
					displayText: r.fbt._("Comments", null, {
						hk: "2RdvZM"
					}),
					isSelected: e.postTypeFilter === n.Comments
				})), e.isModQChatCommentsFilterEnabled && a.a.createElement(S.default, {
					onClick: e.sendEventWithName("content_type_live_post"),
					to: Object(C.a)(Object(j.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
						only: n.ChatPosts
					})
				}, a.a.createElement(w, {
					displayText: r.fbt._("Chat posts", null, {
						hk: "3SclZS"
					}),
					isSelected: e.postTypeFilter === n.ChatPosts
				})))),
				R = s("./src/reddit/contexts/PageLayer/index.tsx"),
				L = s("./src/reddit/controls/SearchBar/index.tsx"),
				M = s("./src/reddit/selectors/moderatorPermissions.ts"),
				D = s("./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less"),
				F = s.n(D);
			const A = Object(R.u)({
					currentPageUrl: R.f
				}),
				B = Object(d.c)({
					moderatingSubreddits: M.p,
					origin: v.j
				}),
				U = Object(i.b)(B),
				W = m.a.div("DropdownContainer", F.a),
				H = m.a.div("SearchBarContainer", F.a),
				Q = m.a.wrapped(k.b, "Row", F.a),
				V = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class q extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						search: ""
					}, this.updateSortedSubreddits(e), this.updateFilteredSubreddits(e, this.state)
				}
				UNSAFE_componentWillUpdate(e, t) {
					e.moderatingSubreddits !== this.props.moderatingSubreddits ? (this.updateSortedSubreddits(e), this.updateFilteredSubreddits(e, t)) : t.search !== this.state.search && this.updateFilteredSubreddits(e, t)
				}
				updateSortedSubreddits(e) {
					this.sortedSubreddits = e.moderatingSubreddits.slice().sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1)
				}
				updateFilteredSubreddits(e, t) {
					if (!t.search) return void(this.filteredSubreddits = this.sortedSubreddits);
					const s = t.search.toLowerCase();
					let n;
					n = e.moderatingSubreddits !== this.props.moderatingSubreddits || 0 !== s.indexOf(this.state.search) ? this.sortedSubreddits : this.filteredSubreddits, this.filteredSubreddits = n.filter(e => -1 !== e.displayText.toLowerCase().indexOf(s))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return a.a.createElement(W, {
						onClickCapture: this.stopPropagation
					}, a.a.createElement(H, null, a.a.createElement(L.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: r.fbt._("Find subreddit", null, {
							hk: "1o7zy2"
						}),
						value: t.search
					})), a.a.createElement(S.default, {
						to: Object(j.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"])
					}, a.a.createElement(Q, {
						displayText: r.fbt._("All subreddits", null, {
							hk: "45nVG6"
						}),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const s = V(t);
						return a.a.createElement(S.default, {
							key: t.id,
							to: Object(C.a)(Object(j.a)(`${e.origin}${e.currentPageUrl}`, ["after", "before", "page", "profile", "subreddit"]), s)
						}, a.a.createElement(Q, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var G = A(U(q)),
				J = s("./src/reddit/helpers/trackers/modTools.ts"),
				X = s("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				K = s.n(X);
			const Y = Object(l.a)(h.a),
				z = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				Z = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				$ = "MODQ--POST_SORT_DROPDOWN",
				ee = m.a.wrapped(x.a, "Inline", K.a),
				te = m.a.div("Filter", K.a),
				se = m.a.wrapped(p.a, "LayoutSwitch", K.a),
				ne = e => {
					switch (e) {
						case "allPostTypes":
							return r.fbt._("Posts and Comments", null, {
								hk: "2BGBVi"
							});
						case "allSubreddits":
							return r.fbt._("All subreddits", null, {
								hk: "3GnUZA"
							});
						case "comments":
							return r.fbt._("Comments", null, {
								hk: "3PSW3P"
							});
						case "links":
							return r.fbt._("Posts", null, {
								hk: "1nfhQO"
							});
						case "searchPlaceholder":
							return r.fbt._("Find subreddit", null, {
								hk: "2rRq64"
							});
						case "chat_comments":
							return r.fbt._("Chat Posts", null, {
								hk: "35pjp9"
							})
					}
				},
				re = e => {
					switch (e) {
						case "oldest":
							return r.fbt._("Oldest First", null, {
								hk: "1JMyTy"
							});
						default:
							return r.fbt._("Newest First", null, {
								hk: "iP4pS"
							})
					}
				},
				oe = Object(d.c)({
					isPostTypeFilterDropdownOpen: Object(E.b)(Z),
					isSubredditFilterDropdownOpen: Object(E.b)(z),
					isPostSortDropdownOpen: Object(E.b)($),
					isModQChatCommentsFilterEnabled: y.f,
					profile: (e, t) => {
						let {
							profileName: s
						} = t;
						return s ? Object(g.j)(e, {
							profileName: s
						}) : null
					},
					subreddit: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(O.z)(e, {
							subredditName: s
						}) : null
					}
				}),
				ae = Object(i.b)(oe, e => ({
					loadAllSubreddits: () => e(Object(u.d)(!0)),
					onOpenDropdown: t => e(Object(c.h)({
						tooltipId: t
					})),
					sendLivePostFilterDisplayedEvent: () => e(J.h)
				}));
			class ie extends a.a.Component {
				constructor() {
					super(...arguments), this.onOpenSubredditFilterDropdown = () => {
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(z), this.props.sendEventWithName("subreddit")
					}, this.onOpenPostTypeFilterDropdown = () => {
						this.props.onOpenDropdown(Z), this.props.sendEventWithName("content_type")(), this.props.isModQChatCommentsFilterEnabled && !this.props.isPostTypeFilterDropdownOpen && this.props.sendEvent(Object(J.h)())
					}, this.onOpenPostSortDropdown = () => {
						this.props.onOpenDropdown($), this.props.sendEventWithName("modqueue_sort")()
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.subreddit && e.subreddit.displayText || e.profile && e.profile.displayText || r.fbt._("All subreddits", null, {
						hk: "3GnUZA"
					}), s = e.postTypeFilter && ne(e.postTypeFilter) || r.fbt._("Posts and Comments", null, {
						hk: "2BGBVi"
					}), n = re(null == e ? void 0 : e.postSort);
					return a.a.createElement(ee, null, !e.hideSubredditFilter && a.a.createElement(a.a.Fragment, null, a.a.createElement(te, {
						id: z,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, a.a.createElement(f.a, {
						name: "caret_down"
					})), a.a.createElement(Y, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: z
					}, a.a.createElement(G, {
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), a.a.createElement(te, {
						id: $,
						onClick: this.onOpenPostSortDropdown
					}, n, a.a.createElement(f.a, {
						name: "caret_down"
					})), a.a.createElement(Y, {
						isOpen: e.isPostSortDropdownOpen,
						tooltipId: $
					}, a.a.createElement(_.b, {
						postSort: e.postSort,
						sendEventWithName: e.sendEventWithName
					})), e.showTypeFilter && a.a.createElement(a.a.Fragment, null, a.a.createElement(te, {
						id: Z,
						onClick: this.onOpenPostTypeFilterDropdown
					}, s, a.a.createElement(f.a, {
						name: "caret_down"
					})), a.a.createElement(Y, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: Z
					}, a.a.createElement(P, {
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: e.sendEventWithName
					}))), a.a.createElement(se, null))
				}
			}
			t.a = ae(Object(b.c)(ie))
		},
		"./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less": function(e, t, s) {
			e.exports = {
				StatusItem: "_2K7YZXKFsZRhsQQ4AbJmxU",
				statusItem: "_2K7YZXKFsZRhsQQ4AbJmxU",
				StatusContainer: "_2iPB1Z8ZMY-jLMenh1R4K4",
				statusContainer: "_2iPB1Z8ZMY-jLMenh1R4K4",
				StatusList: "B7xBQCW-i0XkgeJ22rgLC",
				statusList: "B7xBQCW-i0XkgeJ22rgLC"
			}
		},
		"./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxContainer: "DsVp-bHpfq0Oq0qA6pTak",
				checkboxContainer: "DsVp-bHpfq0Oq0qA6pTak",
				Checkbox: "_3IYLDjbdCg9uE2oDb5e7Sn",
				checkbox: "_3IYLDjbdCg9uE2oDb5e7Sn",
				DropdownRow: "_5USHbSyhRaiAEnOouxEk9",
				dropdownRow: "_5USHbSyhRaiAEnOouxEk9",
				DropdownTriangle: "_3ePiZ_UzH5lFQIPzp35YXS",
				dropdownTriangle: "_3ePiZ_UzH5lFQIPzp35YXS",
				Button: "abvVqLDYtaKz3przU1pme",
				button: "abvVqLDYtaKz3przU1pme",
				Bullet: "K9CBgM-Xyd_FBz7TcYHah",
				bullet: "K9CBgM-Xyd_FBz7TcYHah",
				Text: "_14Wi7Tj4JyvXkmtsyZkG9e",
				text: "_14Wi7Tj4JyvXkmtsyZkG9e",
				left: "_1IovB6jH5oyEgCXjUwXpJs",
				right: "_1aKgaRqDhtICtELEl5XEw3",
				ModToolsBulkOperations: "IncH4Lk7NsVjvrE51jpu8",
				modToolsBulkOperations: "IncH4Lk7NsVjvrE51jpu8"
			}
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.m.less": function(e, t, s) {
			e.exports = {
				Row: "_3h6zBMaGJuwN_qOmhUyv7E",
				row: "_3h6zBMaGJuwN_qOmhUyv7E"
			}
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/lib/filterQueryParams/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/selectors/meta.ts"),
				h = s("./src/reddit/components/ModQueueList/PostSortDropdown.m.less"),
				f = s.n(h);
			! function(e) {
				e.OldestFirst = "oldest"
			}(n || (n = {}));
			const x = m.a.wrapped(u.b, "Row", f.a),
				g = Object(d.c)({
					currentPage: e => e.platform.currentPage,
					origin: b.j
				}),
				O = Object(i.b)(g);
			t.b = O(e => a.a.createElement("div", {
				className: e.className
			}, a.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_newest"),
				to: Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page", "sort"])
			}, a.a.createElement(x, {
				displayText: r.fbt._("Newest first", null, {
					hk: "4buqk8"
				}),
				isSelected: !e.postSort
			})), a.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_oldest"),
				to: Object(c.a)(Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: n.OldestFirst
				})
			}, a.a.createElement(x, {
				displayText: r.fbt._("Oldest first", null, {
					hk: "1x9Jdr"
				}),
				isSelected: e.postSort === n.OldestFirst
			}))))
		},
		"./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less": function(e, t, s) {
			e.exports = {
				Row: "_1i-lQzTwq8UQrdKuiR_jer",
				row: "_1i-lQzTwq8UQrdKuiR_jer"
			}
		},
		"./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less": function(e, t, s) {
			e.exports = {
				DropdownContainer: "CxFih1Dllyb7Ee-gA27SM",
				dropdownContainer: "CxFih1Dllyb7Ee-gA27SM",
				SearchBarContainer: "_3TBm4aNfLDgkYxeb3BL6Qu",
				searchBarContainer: "_3TBm4aNfLDgkYxeb3BL6Qu",
				Row: "_2-Mqfq2jQLCLoIJJX5d6ER",
				row: "_2-Mqfq2jQLCLoIJJX5d6ER"
			}
		},
		"./src/reddit/components/ModQueueList/index.m.less": function(e, t, s) {
			e.exports = {
				ItemContainer: "_2QxKXxKsAXysE1p_Y7m66a",
				itemContainer: "_2QxKXxKsAXysE1p_Y7m66a",
				ButtonContainer: "_1UWG2tG2gGruVUIlnO6Qwr",
				buttonContainer: "_1UWG2tG2gGruVUIlnO6Qwr"
			}
		},
		"./src/reddit/components/ModQueueList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/difference.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/includes.js"),
				a = s.n(o),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/actions/modQueue/index.ts"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/components/ModModeReports/helpers.ts"),
				f = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/lib/classNames/index.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/layout/row/Inline/index.tsx"),
				E = s("./src/reddit/components/PaginationButtons/index.m.less"),
				_ = s.n(E);
			var C = e => d.a.createElement(O.a, {
					className: _.a.buttonContainer
				}, d.a.createElement(g.s, {
					className: Object(x.a)(_.a.routerLink, {
						[_.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, f.fbt._("Back", null, {
					hk: "2pUhBQ"
				})), d.a.createElement(g.s, {
					className: Object(x.a)(_.a.routerLink, {
						[_.a.mDisabled]: !e.nextButtonEnabled
					}),
					disabled: !e.nextButtonEnabled,
					to: e.nextTo,
					"data-redditstyle": !0
				}, f.fbt._("Next", null, {
					hk: "2mEXAi"
				}))),
				j = s("./src/reddit/components/PostList/index.tsx"),
				k = s("./src/reddit/constants/componentSizes.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/isComment.ts"),
				y = s("./src/reddit/helpers/isPost.ts"),
				I = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				T = s("./src/lib/logs/console.ts"),
				w = s("./src/lib/objectSelector/index.ts"),
				N = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				P = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				R = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				L = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				M = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				D = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				F = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				A = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				B = s("./src/reddit/components/ModModeReports/index.tsx"),
				U = s("./src/reddit/components/RichTextJson/index.tsx"),
				W = s("./src/reddit/components/VerticalVotes/index.tsx"),
				H = s("./src/reddit/controls/Checkbox/index.tsx"),
				Q = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				V = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				q = s("./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less"),
				G = s.n(q);
			const J = u.a.div("LeftRail", G.a),
				X = u.a.wrapped(H.a, "BulkActionCheckbox", G.a),
				K = u.a.div("CommentColumn", G.a),
				Y = u.a.div("VoteColumn", G.a),
				z = u.a.wrapped(N.a, "ModToolsFlatlist", G.a),
				Z = u.a.wrapped(W.a, "Votes", G.a),
				$ = u.a.div("CommentContentWrapper", G.a),
				ee = u.a.div("ParentPostTitle", G.a),
				te = u.a.div("CommentParentWrapper", G.a),
				se = Object(w.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var ne = Object(P.b)(e => {
					const {
						className: t,
						comment: s,
						commentPermalink: n,
						flair: r,
						isCheckboxSelected: o = !1,
						onIgnoreReports: a,
						onVoteClick: i,
						showModTools: c,
						subreddit: l,
						showBulkActionCheckbox: m,
						toggleCheckbox: u
					} = e, p = Object(A.a)(s), b = Object(h.c)(s);
					return d.a.createElement(R.a, {
						className: Object(x.a)(t, G.a.Component, G.a.UnthreadedCommentContainer, {
							[G.a.isBanned]: !!s.bannedBy,
							[G.a.isReported]: Object(V.a)(s)
						}),
						clickTrackingId: s.id,
						permalink: n
					}, d.a.createElement(J, {
						className: Object(x.a)({
							[G.a.hasBorder]: !!s.bannedBy || Object(V.a)(s)
						})
					}, m && d.a.createElement(X, {
						isCheckboxSelected: o,
						toggleCheckbox: u
					})), d.a.createElement(Y, null, d.a.createElement(Z, {
						compact: !1,
						model: s,
						onVoteClick: i,
						scoreClassName: G.a.score
					})), d.a.createElement(K, null, d.a.createElement(te, null, s.postTitle && d.a.createElement(ee, null, s.postTitle), s.postAuthor && d.a.createElement(D.a, {
						comment: s
					})), d.a.createElement($, null, d.a.createElement(L.a, {
						comment: s
					}, d.a.createElement(U.b, {
						content: Object(Q.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: se(e)
					}), d.a.createElement(M.a, {
						comment: s,
						flair: r,
						subredditName: l ? l.displayText : null
					}), p && d.a.createElement(F.a, {
						thing: s
					}), b && d.a.createElement(B.a, {
						onIgnoreReports: a,
						reportable: s
					}), c && !s.isDeleted && d.a.createElement(z, {
						comment: s
					})))))
				}),
				re = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				oe = s("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				ae = s.n(oe);
			const ie = u.a.div("VoteSpacer", ae.a),
				de = u.a.div("ContentWrapper", ae.a),
				ce = u.a.wrapped(M.a, "Meta", ae.a),
				le = u.a.div("CommentParentWrapper", ae.a),
				me = u.a.div("CommentContentWrapper", ae.a),
				ue = Object(w.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var pe = Object(P.b)(u.a.wrapped(e => {
					const {
						className: t,
						comment: s,
						commentPermalink: n,
						flair: r,
						hasReports: o,
						isCheckboxSelected: a = !1,
						onIgnoreReports: i,
						onVoteClick: c,
						showModTools: l,
						subreddit: m,
						showBulkActionCheckbox: u,
						toggleCheckbox: p
					} = e, b = Object(A.a)(s);
					return d.a.createElement(R.a, {
						className: t,
						clickTrackingId: s.id,
						permalink: n
					}, d.a.createElement(re.a, {
						model: s,
						handleVote: c,
						showBulkActionCheckbox: u,
						isCheckboxSelected: a,
						toggleCheckbox: p
					}), d.a.createElement(ie, null, d.a.createElement(de, null, d.a.createElement(le, null, s.postAuthor && d.a.createElement(D.a, {
						comment: s,
						subredditOrProfile: m
					}), s.postTitle && d.a.createElement(P.a, null, s.postTitle)), d.a.createElement(L.a, {
						comment: s
					}, d.a.createElement(me, null, d.a.createElement(U.b, {
						content: Object(Q.a)(s),
						mediaMetadata: s.media && s.media.mediaMetadata,
						rtJsonElementProps: ue(e)
					})), b && d.a.createElement(F.a, {
						thing: s
					}), o && d.a.createElement(B.a, {
						onIgnoreReports: i,
						reportable: s
					}), d.a.createElement(ce, {
						comment: s,
						flair: r
					}))), l && !s.isDeleted && d.a.createElement(N.a, {
						comment: s
					})))
				}, "Component", ae.a)),
				be = s("./src/reddit/constants/postLayout.ts");
			const he = {
					[be.g.Large]: pe,
					[be.g.Medium]: P.c,
					[be.g.Classic]: P.c,
					[be.g.Compact]: ne
				},
				fe = e => null;
			var xe = s("./src/reddit/models/Flair/index.ts"),
				ge = s("./src/reddit/models/Media/index.ts"),
				Oe = s("./src/reddit/models/ModQueue/index.ts"),
				Ee = s("./src/reddit/selectors/meta.ts"),
				_e = s("./src/reddit/selectors/modQueue.ts"),
				Ce = s("./src/reddit/selectors/subreddit.ts"),
				je = s("./src/config.ts"),
				ke = s("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				Se = s.n(ke);
			const {
				fbt: ve
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ye = `${je.a.assetPath}/img/snoomoji/cat_blep.png`, Ie = u.a.div("Container", Se.a), Te = u.a.div("Image", Se.a), we = u.a.div("Title", Se.a), Ne = u.a.div("Text", Se.a);
			var Pe = () => d.a.createElement(Ie, null, d.a.createElement(Te, {
					style: {
						backgroundImage: `url(${ye})`
					}
				}), d.a.createElement(we, null, ve._("The queue is clean!", null, {
					hk: "3d14fC"
				})), d.a.createElement(Ne, null, ve._("Kitteh is pleased", null, {
					hk: "3NSHqg"
				}))),
				Re = s("./src/reddit/components/PostList/Placeholder.tsx");
			const Le = Object(S.u)(),
				Me = Object(l.c)({
					layout: S.S
				});
			var De = Le(Object(c.b)(Me)(e => d.a.createElement(Re.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				Fe = s("./node_modules/lodash/flatten.js"),
				Ae = s.n(Fe),
				Be = s("./src/reddit/actions/tooltip.ts"),
				Ue = s("./src/reddit/icons/fonts/index.tsx"),
				We = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				He = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				Qe = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Ve = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				qe = s("./src/higherOrderComponents/asTooltip.tsx"),
				Ge = s("./src/reddit/actions/modal.ts"),
				Je = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				Xe = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				Ke = s("./src/reddit/controls/Dropdown/index.tsx"),
				Ye = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ze = s("./src/reddit/helpers/flair.ts"),
				Ze = s("./src/reddit/selectors/activeModalId.ts"),
				$e = s("./src/reddit/selectors/moderatorPermissions.ts"),
				et = s("./src/reddit/selectors/postFlair.ts"),
				tt = s("./src/reddit/selectors/posts.ts"),
				st = s("./src/reddit/selectors/tooltip.ts"),
				nt = s("./src/reddit/components/TrackingHelper/index.tsx"),
				rt = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				ot = s.n(rt);
			const at = e => d.a.createElement("button", {
					className: Object(x.a)(ot.a.StatusItem, e.className),
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? f.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, e.buttonText),
				it = Object(l.c)({
					selectedItems: _e.g
				}),
				dt = Object(c.b)(it, e => ({
					onIgnoreReports: () => e(Object(p.f)(Oe.a.IgnoreReports)),
					onLock: () => e(Object(p.f)(Oe.a.Lock)),
					onMarkNSFW: () => e(Object(p.f)(Oe.a.MarkNSFW)),
					onSpoiler: () => e(Object(p.f)(Oe.a.Spoiler)),
					onUnignoreReports: () => e(Object(p.f)(Oe.a.UnignoreReports)),
					onUnlock: () => e(Object(p.f)(Oe.a.Unlock)),
					onUnmarkNSFW: () => e(Object(p.f)(Oe.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(p.f)(Oe.a.Unspoiler))
				})),
				ct = e => e.some(e => Object(v.a)(e));
			var lt = Object(qe.a)(dt(Object(nt.c)(e => d.a.createElement("div", {
				className: Object(x.a)(ot.a.StatusList, e.className),
				style: e.style
			}, d.a.createElement("div", {
				className: ot.a.StatusContainer
			}, d.a.createElement(at, {
				onClick: e.onIgnoreReports,
				buttonText: f.fbt._("Ignore Reports", null, {
					hk: "1hZ3hN"
				})
			}), d.a.createElement(at, {
				onClick: e.onUnignoreReports,
				buttonText: f.fbt._("Unignore Reports", null, {
					hk: "3y089p"
				})
			}), d.a.createElement(at, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onLock,
				buttonText: f.fbt._("Lock", null, {
					hk: "4bc0vl"
				})
			}), d.a.createElement(at, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnlock,
				buttonText: f.fbt._("Unlock", null, {
					hk: "Pe2ML"
				})
			}), d.a.createElement(at, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onSpoiler,
				buttonText: f.fbt._("Mark as Spoiler", null, {
					hk: "4pIu4V"
				})
			}), d.a.createElement(at, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnspoiler,
				buttonText: f.fbt._("Unmark as Spoiler", null, {
					hk: "1ImDYd"
				})
			}), d.a.createElement(at, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onMarkNSFW,
				buttonText: f.fbt._("Mark as NSFW", null, {
					hk: "4yS4Hz"
				})
			}), d.a.createElement(at, {
				isDisabled: ct(e.selectedItems),
				onClick: e.onUnmarkNSFW,
				buttonText: f.fbt._("Unmark as NSFW", null, {
					hk: "ZzA74"
				})
			}))))));
			const mt = Object(l.c)({
				isDropdownOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(st.b)(s)(e)
				}
			});
			var ut = Object(c.b)(mt)(Object(nt.c)(e => {
					const {
						className: t,
						isDropdownOpen: s,
						tooltipId: n
					} = e;
					return d.a.createElement("div", {
						id: n,
						className: t
					}, d.a.createElement(lt, {
						isOpen: s,
						tooltipId: n
					}))
				})),
				pt = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less"),
				bt = s.n(pt);
			const ht = "BulkAction--BulkItemFilter",
				ft = "BulkActions--PostFlair--Modal",
				xt = Object(qe.a)(Ke.a),
				gt = e => d.a.createElement(Ye.b, {
					className: Object(x.a)(bt.a.DropdownRow, e.className),
					displayText: e.displayText,
					onClick: e.onClick
				}),
				Ot = Object(l.c)({
					activeModalId: Ze.a,
					dropdownIsOpen: Object(st.b)(ht),
					flairData: et.d,
					isApiPending: _e.a,
					moderatorPermissions: $e.o,
					posts: tt.J,
					selectedItems: _e.g
				}),
				Et = Object(c.b)(Ot, e => ({
					onApprove: () => e(Object(p.f)(Oe.a.Approve)),
					onFlair: (t, s) => e(Object(p.f)(Oe.a.Flair, t, s)),
					onOpenDropdown: () => e(Object(Be.h)({
						tooltipId: ht
					})),
					onOpenModToolsDropdown: () => e(Object(Be.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(p.f)(Oe.a.Remove)),
					onSpam: () => e(Object(p.f)(Oe.a.Spam)),
					onToggleFlairModal: () => e(Object(Ge.i)(ft))
				})),
				_t = (e, t) => {
					const s = Ae()(e.map(e => t[e].flair));
					if (s.length <= 1) return s;
					const n = [];
					return s.forEach(e => {
						if (e.type === xe.f.Text || e.type === xe.f.Richtext) {
							const t = Object(ze.g)(e);
							a()(n, t) || n.push(t)
						}
					}), n.length > 1 ? [{
						type: xe.f.Text,
						text: f.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : s
				};
			var Ct = Et(e => {
					const {
						activeModalId: t,
						className: s,
						endNumItems: n,
						flairData: r,
						isAnyItemSelected: o,
						isApiPending: a,
						moderatorPermissions: c,
						numSelected: l,
						numShowing: m,
						onApprove: u,
						onFlair: p,
						onRemove: b,
						onSpam: h,
						onToggleFlairModal: g,
						posts: O,
						selectedItems: E,
						startNumItems: _,
						subredditId: C,
						toggleSelectAll: j,
						toggleSelectByFilter: k
					} = e, S = [{
						name: f.fbt._("Spam filtered", null, {
							hk: "S0DJ9"
						}),
						filterType: "spamFiltered"
					}, {
						name: f.fbt._("Has reports", null, {
							hk: "1x2hhv"
						}),
						filterType: "hasReports"
					}, {
						name: f.fbt._("Self posts", null, {
							hk: "KFHYI"
						}),
						filterType: "selfPosts"
					}, {
						name: f.fbt._("Posts with flair", null, {
							hk: "18cMZD"
						}),
						filterType: "postsWithFlair"
					}, {
						name: f.fbt._("Posts", null, {
							hk: "gGGKv"
						}),
						filterType: "posts"
					}, {
						name: f.fbt._("Comments", null, {
							hk: "1F1pwI"
						}),
						filterType: "comments"
					}, {
						name: f.fbt._("Chat posts", null, {
							hk: "1uSGtz"
						}),
						filterType: "chat_comments"
					}], v = c && c.flair, y = C && r && r.displaySettings.isEnabled && v && !ct(E);
					return d.a.createElement("div", {
						className: Object(x.a)(bt.a.ModToolsBulkOperations, s)
					}, d.a.createElement("div", {
						className: bt.a.CheckboxContainer,
						id: ht
					}, d.a.createElement(H.a, {
						className: bt.a.Checkbox,
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: j
					}), d.a.createElement(Ue.a, {
						name: "caret_down",
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), d.a.createElement(xt, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: ht
					}, S.map(e => d.a.createElement(gt, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => k(e.filterType)
					})))), o && d.a.createElement(i.Fragment, null, d.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: a,
						text: f.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: u
					}, d.a.createElement(We.a, null)), d.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: a,
						text: f.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: b
					}, d.a.createElement(He.a, null)), d.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: a,
						text: f.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: h
					}, d.a.createElement(Qe.a, null)), d.a.createElement(Xe.c, {
						className: bt.a.Button,
						disabled: a,
						onClick: e.onOpenModToolsDropdown
					}, d.a.createElement(ut, {
						tooltipId: "BulkActions--ModTools"
					}), d.a.createElement(Ue.a, {
						name: "list_bulleted"
					})), d.a.createElement("div", null, y && d.a.createElement(Xe.c, {
						disabled: a,
						onClick: g,
						className: bt.a.Button
					}, d.a.createElement(Ve.a, null)))), o && C && t === ft && d.a.createElement(Je.a, {
						flairs: _t(E, O),
						modalId: ft,
						onFlairChanged: e => {
							let {
								previewFlair: t,
								selectedTemplateId: s
							} = e;
							p(t, s)
						},
						subredditId: C
					}), m > 0 && d.a.createElement("div", {
						className: bt.a.Text
					}, d.a.createElement("span", {
						className: bt.a.right
					}, f.fbt._("Items {startNumItems}-{endNumItems}", [f.fbt._param("startNumItems", `${_}`), f.fbt._param("endNumItems", `${n}`)], {
						hk: "1FkOkC"
					})), d.a.createElement("span", {
						className: bt.a.Bullet
					}, "•"), d.a.createElement("span", {
						className: bt.a.left
					}, f.fbt._("{numSelected} selected", [f.fbt._param("numSelected", `${l}`)], {
						hk: "4uf9Ow"
					}))))
				}),
				jt = s("./src/reddit/contexts/Post/index.tsx"),
				kt = s("./src/reddit/components/ModQueueList/index.m.less"),
				St = s.n(kt);
			const vt = e => Object(y.a)(e.id),
				yt = u.a.div("ItemContainer", St.a),
				It = u.a.div("ButtonContainer", St.a),
				Tt = Object(S.u)({
					currentProfileName: S.i,
					isCommentPermalink: S.w,
					isCommentsPage: S.x,
					isFrontpage: S.A,
					isProfilePostListing: S.L,
					isTopicPage: S.R,
					queryParams: S.X,
					pageLayer: e => e
				}),
				wt = Object(l.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: _e.c,
					loadMore: _e.e,
					modQueueListingItems: _e.d,
					origin: Ee.j,
					selectedItems: _e.g,
					subredditId: (e, t) => t.subredditName ? Object(Ce.F)(e, t.subredditName) : null
				}),
				Nt = Object(c.b)(wt, e => ({
					addSelectedItems: t => e(Object(p.a)({
						ids: t
					})),
					bulkSelectItems: t => e(Object(p.b)({
						ids: t
					})),
					bulkUnselectItems: t => e(Object(p.c)({
						ids: t
					})),
					fireAdPixelsOfType: (t, s) => e(Object(b.z)(t, s)),
					openPost: t => e(Object(b.L)(t))
				})),
				Pt = e => e.page ? parseInt(e.page, 10) : Oe.b,
				Rt = e => Pt(e) + 1,
				Lt = e => Math.max(Oe.b, Pt(e) - 1),
				Mt = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return Pt(e) === Oe.b ? t : 25 * Lt(e) + t
				},
				Dt = e => Pt(e) === Oe.b ? Oe.b : 25 * Lt(e) + 1;
			var Ft;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(Ft || (Ft = {}));
			class At extends d.a.Component {
				constructor() {
					super(...arguments), this.isCheckboxSelected = e => a()(this.props.selectedItems, e), this.isAllSelected = e => {
						const t = r()(e, this.props.selectedItems);
						return e.length > 0 && this.props.selectedItems.length > 0 && 0 === t.length
					}, this.toggleSelectedItems = (e, t) => {
						e ? this.props.bulkUnselectItems(t) : this.props.addSelectedItems(t)
					}, this.toggleSelectByFilter = e => {
						const t = [];
						if (!this.props.modQueueListingItems || !this.props.modQueueListingItems.length) return t;
						switch (e) {
							case Ft.posts:
								this.props.modQueueListingItems.forEach(e => {
									Object(y.a)(e.id) && t.push(e.id)
								});
								break;
							case Ft.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(v.a)(e.id) && t.push(e.id)
								});
								break;
							case Ft.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case Ft.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(y.a)(e.id)) {
										const s = e;
										s.flair && s.flair.filter(e => e.type !== xe.f.Spoiler && e.type !== xe.f.Nsfw).length > 0 && t.push(s.id)
									}
								});
								break;
							case Ft.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(y.a)(e.id)) {
										const s = e;
										s.media && s.media.type === ge.o.TEXT && t.push(s.id)
									}
								});
								break;
							case Ft.spamFiltered:
								this.props.modQueueListingItems.forEach(e => {
									e.isSpam && t.push(e.id)
								})
						}
						this.props.bulkSelectItems(t)
					}, this.isAnyItemSelected = () => this.props.selectedItems.length > 0, this.renderItems = e => {
						let t;
						const s = !!e.page && "1" !== e.page,
							n = !!e.loadMore && !!e.modQueueListingItems && 25 === e.modQueueListingItems.length;
						return e.modQueueListingItems && e.modQueueListingItems.length && (t = e.modQueueListingItems.map(t => {
							const s = `modqueue-item-[layout: ${e.layout}]-[id: ${t.id}]`;
							if (vt(t)) {
								const n = t,
									r = Object(I.b)({
										layout: e.layout,
										post: n
									});
								return d.a.createElement(yt, {
									key: s
								}, d.a.createElement(r, {
									availableWidth: k.g,
									currentProfileName: e.currentProfileName,
									forceLoadMedia: !0,
									isCommentPermalink: e.isCommentPermalink,
									isCommentsPage: e.isCommentsPage,
									isFrontpage: e.isFrontpage,
									isProfilePostListing: e.isProfilePostListing,
									isCheckboxSelected: this.isCheckboxSelected(n.id),
									last: !0,
									pageLayer: e.pageLayer,
									postId: n.id,
									onClickPost: Object(j.b)(n.id, e),
									showBulkActionCheckbox: !0,
									toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(n.id), [n.id]),
									shouldShowGalleryTileOption: !0,
									isGalleryTileLayoutDefault: !0
								}))
							}
							const n = function(e, t) {
								const s = he[t];
								return void 0 === s ? (Object(T.a)(void 0, `Could not find component for layout ${t}.`), fe) : s
							}(0, e.layout);
							return d.a.createElement(yt, {
								key: s
							}, d.a.createElement(jt.a, {
								postId: t.postId
							}, d.a.createElement(n, {
								commentId: t.id,
								hasReports: Object(h.c)(t),
								highlight: !1,
								isCheckboxSelected: this.isCheckboxSelected(t.id),
								showBulkActionCheckbox: !0,
								showModTools: !0,
								toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(t.id), [t.id]),
								trackClick: e.sendEventWithName
							})))
						})), d.a.createElement("div", null, d.a.createElement("div", null, t), d.a.createElement(It, null, d.a.createElement(C, {
							prevButtonEnabled: s,
							prevTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Lt(e),
								after: null
							}),
							nextButtonEnabled: n,
							nextTo: Object(m.a)(`${e.origin}${e.currentPage.url}`, {
								page: Rt(e),
								after: e.loadMore
							})
						})))
					}
				}
				componentWillUnmount() {
					this.props.bulkUnselectItems(this.props.selectedItems)
				}
				UNSAFE_componentWillUpdate(e) {
					e.pageName === this.props.pageName && e.page === this.props.page && e.profileName === this.props.profileName && e.subredditName === this.props.subredditName && e.postTypeFilter === this.props.postTypeFilter && e.postSort === this.props.postSort || this.props.bulkUnselectItems(this.props.selectedItems)
				}
				render() {
					const {
						props: e
					} = this, t = e.modQueueListingItems && e.modQueueListingItems.length ? e.modQueueListingItems.map(e => e.id) : [], s = e.selectedItems.length;
					return d.a.createElement("div", null, d.a.createElement(Ct, {
						endNumItems: Mt(e),
						numSelected: s,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: Dt(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? d.a.createElement(Pe, null) : e.isModQueueListingPending ? d.a.createElement(De, null) : null)
				}
			}
			t.a = Tt(Nt(At))
		},
		"./src/reddit/components/PaginationButtons/index.m.less": function(e, t, s) {
			e.exports = {
				buttonContainer: "_1kLu6euoyZ3I2dqDVrxoZD",
				routerLink: "_3k7SslJt4xhPIXKtoe8DFf",
				mDisabled: "_1VgBJV1BqaXyZVPBXEv-KC"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return k
			}));
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				p = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = s("./src/reddit/components/FlairPreview/index.tsx"),
				h = s("./src/reddit/components/FlairSearch/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/trackers/postComposer.ts"),
				g = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/selectors/postFlair.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				C = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				j = s.n(C);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${s}]`
				},
				S = Object(d.c)({
					flairData: O.d,
					subreddit: E.U
				});
			class v extends a.a.Component {
				constructor(e) {
					super(e), this.trackEvent = () => {
						this.props.sendEvent(Object(x.F)(this.props.subredditId))
					}, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.trackEvent()
					}, this.onClear = () => {
						this.props.sendEvent(Object(x.b)()), this.setSelectedFlair(null)
					}, this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					};
					const t = Object(_.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(_.c)(this.props.flairs) || null;
					return Object(_.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: n,
						subreddit: o
					} = e, i = o.displayText, {
						templates: d,
						templateIds: c
					} = n, {
						canSave: l
					} = this.canSave();
					return a.a.createElement(p.a, {
						className: s
					}, a.a.createElement(u.a, {
						onClosePressed: e.closeModal,
						title: r.fbt._("Select {subredditName} flair", [r.fbt._param("subredditName", i)], {
							hk: "1lDMWS"
						})
					}), a.a.createElement(b.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						placeholderText: r.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), a.a.createElement(h.a, {
						flair: t,
						flairTemplateType: g.d.LinkFlair,
						subredditId: o.id,
						templates: d,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), a.a.createElement("div", {
						className: j.a.buttonsRow
					}, a.a.createElement(f.l, {
						disabled: !l,
						onClick: this.onApply
					}, r.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), a.a.createElement(f.o, {
						className: j.a.clearButton,
						onClick: this.onClear
					}, r.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const y = Object(i.b)(S, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(v);
			t.a = Object(l.a)(Object(c.c)(y))
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: f,
					isOverlay: x,
					isVoteCountAnimation: g,
					postId: O,
					shouldShowUpvoteRatioOnHover: E
				} = e, _ = `upvote-button-${t.id}${x?"-overlay":""}`;
				return r.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: f
				}, n && r.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), r.a.createElement(i.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: f,
					upvoteTooltipId: _,
					isVoteCountAnimation: g,
					isCountAnimShadowTestEnabled: p,
					postId: O,
					scoreClassName: Object(o.a)(u.a.score, {
						[u.a.allowPointerEvents]: E
					}),
					shouldShowUpvoteRatioOnHover: E
				}))
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				d = s.n(i);
			const c = e => r.a.createElement("button", {
					className: Object(o.a)(d.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && r.a.createElement("span", {
					className: Object(o.a)(d.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = a.a.wrapped(c, "ApproveButton", d.a),
				m = a.a.wrapped(c, "RemoveButton", d.a),
				u = e => r.a.createElement("button", {
					className: Object(o.a)(d.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, s) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, s) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				m = s.n(l),
				u = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = u.a.span("InnerSpan", m.a),
				x = u.a.span("TooltipTarget", m.a),
				g = u.a.span("SpoilerWrapper", m.a),
				O = u.a.wrapped(e => {
					let {
						className: t,
						isOpen: s,
						...n
					} = e;
					return o.a.createElement(g, p({}, n, {
						className: Object(a.a)(t, {
							[m.a.isOpen]: s
						})
					}))
				}, "SpoilerWrapper", m.a),
				E = Object(c.a)(u.a.wrapped(d.b, "Component", m.a), [i.a.Click, i.a.Keydown]);
			class _ extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return o.a.createElement(O, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(f, null, o.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(E, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = _
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, s) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "x", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "v", (function() {
				return x
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "u", (function() {
				return _
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "l", (function() {
				return j
			})), s.d(t, "m", (function() {
				return k
			})), s.d(t, "n", (function() {
				return S
			})), s.d(t, "t", (function() {
				return v
			})), s.d(t, "p", (function() {
				return y
			})), s.d(t, "o", (function() {
				return I
			})), s.d(t, "q", (function() {
				return T
			})), s.d(t, "s", (function() {
				return w
			})), s.d(t, "r", (function() {
				return N
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "w", (function() {
				return R
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/RichTextJson/elements.m.less"),
				i = s.n(a),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [d.a.div("H1", i.a), d.a.div("H2", i.a), d.a.div("H3", i.a), d.a.div("H4", i.a), d.a.div("H5", i.a), d.a.div("H6", i.a)],
				m = d.a.hr("Hr", i.a),
				u = d.a.code("M", i.a),
				p = d.a.pre("Pre", i.a),
				b = d.a.blockquote("Blockquote", i.a),
				h = d.a.p("P", i.a),
				f = d.a.li("Li", i.a),
				x = d.a.ul("Ul", i.a),
				g = d.a.ol("Ol", i.a),
				O = d.a.strong("B", i.a),
				E = d.a.em("I", i.a),
				_ = d.a.span("U", i.a),
				C = e => r.a.createElement("del", e),
				j = d.a.sub("Sub", i.a),
				k = d.a.sup("Sup", i.a),
				S = d.a.table("Table", i.a),
				v = d.a.tr("Tr", i.a),
				y = d.a.td("Tdl", i.a),
				I = d.a.td("Tdc", i.a),
				T = d.a.td("Tdr", i.a),
				w = d.a.th("Thl", i.a),
				N = d.a.th("Thc", i.a),
				P = (d.a.th("Thr", i.a), d.a.wrapped(e => r.a.createElement(o.b, e), "A", i.a)),
				R = d.a.wrapped(c.a, "A", i.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return k
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "b", (function() {
				return y
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/findLastIndex.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/sentry/index.ts"),
				m = s("./src/reddit/components/Media/BlurredContent.tsx"),
				u = s("./src/reddit/constants/elementClassNames.ts"),
				p = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				b = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = s("./src/reddit/models/RichTextJson/index.ts"),
				f = s("./src/reddit/components/RichTextJson/media.tsx"),
				x = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				g = s("./src/reddit/components/RichTextJson/index.m.less"),
				O = s.n(g);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = s("./src/lib/lessComponent.tsx").a.div("Container", O.a),
				C = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: s,
						...n
					} = e;
					return i.a.createElement(_, E({}, n, {
						style: {
							color: Object(b.a)(Object(p.a)({
								flairStyleTemplate: t,
								theme: s,
								...n
							}))
						}
					}))
				}),
				j = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.u || !!e.c && !e.c.every(e => e.e === h.A && !e.t),
				k = e => o()(e, j),
				S = e => e.findIndex(j),
				v = e => {
					const {
						altText: t,
						className: s,
						content: n,
						isListing: r,
						isNSFW: o,
						isNsfwBlockingModalEligible: a,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: p,
						renderMediaAsLinks: b,
						rtJsonElementProps: g,
						useExplicitTextColor: E,
						shouldBlur: j
					} = e, v = n.document, y = [], I = e.mediaMetadata || null, T = S(v), w = k(v);
					if (j && !r && !a) return i.a.createElement(_, {
						className: Object(d.a)(u.j, s)
					}, i.a.createElement("div", {
						className: O.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: O.a.unblurButton,
						onClick: l
					}, Object(m.b)(!!o, !!c))));
					if (-1 !== T)
						for (let i = T; i <= w; i++) {
							const e = v[i];
							switch (e.e) {
								case h.k:
									y.push(x.c(e, g, i));
									break;
								case h.l:
									y.push(x.d(i));
									break;
								case h.b:
									y.push(x.a(e, I, g, i));
									break;
								case h.c:
									y.push(x.b(e, i));
									break;
								case h.p:
									y.push(x.f(e, I, g, i));
									break;
								case h.z:
									y.push(x.h(e, I, g, i));
									break;
								case h.u:
									y.push(x.g(e, I, g, i));
									break;
								case h.h:
									y.push(Object(f.a)(e, i));
									break;
								case h.m:
								case h.a:
								case h.D:
									y.push(...Object(f.b)(e, i, I, b, p, t))
							}
						}
					return E ? i.a.createElement(_, {
						className: Object(d.a)(u.j, s)
					}, y) : i.a.createElement(C, {
						className: Object(d.a)(u.j, s),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, y)
				};
			class y extends i.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => n.fbt._("Something went wrong while trying to render this", null, {
						hk: "2UcBL3"
					})
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					l.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), l.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return v(t)
					} catch (s) {
						return this.hasError = !0, this.logError(s), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, s) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "b", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/config.ts"),
				d = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				m = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				u = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = s("./src/reddit/helpers/richTextJson/index.ts"),
				b = s("./src/reddit/models/RichTextJson/index.ts"),
				h = s("./src/reddit/components/RichTextJson/elements.tsx"),
				f = s("./src/reddit/components/RichTextJson/media.m.less"),
				x = s.n(f),
				g = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = /\/(\w+)\/asset\/(\w+)\//,
				_ = g.a.wrapped(h.a, "A", x.a),
				C = g.a.wrapped(l.a, "ImageBox", x.a),
				j = g.a.wrapped(e => o.a.createElement("p", e), "Caption", x.a),
				k = g.a.div("Placeholder", x.a),
				S = g.a.wrapped(e => {
					let {
						className: t,
						e: s,
						...r
					} = e;
					const a = s === b.D ? n.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : n.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(k, O({
						className: t,
						style: {
							"--placeholder-content-text": `'${a}'`
						}
					}, r))
				}, "Placeholder", x.a),
				v = (e, t) => {
					let {
						c: s,
						x: n,
						y: r
					} = e;
					return o.a.createElement("div", {
						className: x.a.MediaWrapper
					}, o.a.createElement(m.a, {
						height: r,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: n
					}, o.a.createElement(c.a, {
						isListing: !1,
						source: s,
						height: r,
						width: n,
						showCentered: !0,
						showFull: !0
					})))
				},
				y = (e, t, s) => {
					const n = e.c;
					let r = "";
					return s && (s.e === b.s ? r = s.s.u : s.e === b.r ? r = s.s.gif : s.e === b.t && (r = (e => {
						const t = E.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), r ? o.a.createElement(_, {
						href: r,
						key: t,
						title: n
					}, n || r) : null
				},
				I = (e, t, s, n, r, i) => {
					const c = b.E(s, e.id);
					if (n) return [y(e, t, c)];
					const l = [];
					return c ? c.e === b.s ? l.push(((e, t, s, n) => {
						let {
							id: r,
							s: i
						} = e;
						return o.a.createElement("div", {
							className: Object(a.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: s
							})
						}, o.a.createElement(m.a, {
							height: i.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: i.x
						}, o.a.createElement(C, {
							altText: n,
							originalSource: i.u,
							postId: r,
							source: i.u,
							height: i.y,
							width: i.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1
						})))
					})(c, t, !!e.c, i)) : c.e === b.r ? l.push(((e, t, s) => {
						let {
							id: n,
							ext: r,
							s: i
						} = e;
						if (Object(p.g)(n)) {
							const e = r || Object(p.f)(n);
							return o.a.createElement("div", {
								className: Object(a.a)(x.a.MediaWrapper, {
									[x.a.mHasCaption]: s
								})
							}, o.a.createElement(_, {
								href: e,
								key: t,
								target: "_blank"
							}, i.mp4 ? o.a.createElement("video", {
								className: x.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: i.mp4
							})) : {
								originalSource: e
							}))
						}
						return o.a.createElement("div", {
							className: Object(a.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: s
							})
						}, o.a.createElement(m.a, {
							height: i.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: i.x
						}, o.a.createElement(u.a, {
							height: i.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: i.mp4,
							width: i.x,
							postId: n,
							source: i.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(c, t, !!e.c)) : c.e === b.t && l.push(((e, t, s, n) => {
						let {
							hlsUrl: r,
							dashUrl: i,
							x: c,
							y: l,
							isGif: u
						} = e;
						return o.a.createElement("div", {
							className: Object(a.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: s
							})
						}, o.a.createElement(m.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c
						}, o.a.createElement(d.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: u,
							hlsSource: r,
							mpegDashSource: i,
							postId: n,
							isGif: u
						})))
					})(c, t, !!e.c, r)) : l.push(((e, t) => o.a.createElement(S, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(j, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return P
			})), s.d(t, "d", (function() {
				return R
			})), s.d(t, "a", (function() {
				return L
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "f", (function() {
				return D
			})), s.d(t, "h", (function() {
				return A
			})), s.d(t, "g", (function() {
				return B
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "e", (function() {
				return W
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				r = s("./node_modules/lodash/reduce.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				d = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./node_modules/uuid/v4.js"),
				l = s.n(c),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/models/Product/index.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = s.n(x);
			const O = 1e3,
				E = 1e3;
			var _;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(_ || (_ = {}));
			class C extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = _.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = _.Inside, setTimeout(() => {
							this.mouseLocation === _.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, O)
					}, this.onMouseOut = () => {
						this.mouseLocation = _.Outside, setTimeout(() => {
							this.mouseLocation !== _.Inside && this.setState({
								tooltipOpen: !1
							})
						}, E)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = b.n(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.gb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let s, n, r;
					t.e === p.s ? (s = t.s.x, n = t.s.y, r = t.s.u) : t.e === p.r && (s = t.s.x, n = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return r ? i.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: o,
						src: r,
						width: s,
						height: n,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && i.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var j = Object(m.c)(C),
				k = s("./src/reddit/components/RichTextJson/media.tsx"),
				S = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				v = s("./src/reddit/components/SubredditMention/index.tsx"),
				y = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				I = s("./src/reddit/helpers/isComment.ts"),
				T = s("./src/reddit/helpers/isPost.ts"),
				w = s("./src/reddit/helpers/richTextJson/index.ts"),
				N = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const P = (e, t, s) => {
					const n = e.c || [],
						r = e.l,
						o = [],
						a = n.length;
					for (let i = 0; i < a; i++) {
						const e = n[i];
						o.push(e.e === p.w ? e.t : W(e, t, i))
					}
					const c = d.x[r - 1];
					return i.a.createElement(c, {
						key: s
					}, o)
				},
				R = e => i.a.createElement(d.e, {
					key: e
				}),
				L = (e, t, s, n) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						a = [];
					for (let i = 0; i < o; i++) a.push(F(r[i], t, s, i));
					return i.a.createElement(d.c, {
						key: n
					}, a)
				},
				M = (e, t) => {
					const s = e.c;
					return i.a.createElement(d.k, {
						key: t
					}, i.a.createElement(d.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				D = (e, t, s, n) => {
					const r = e.c,
						o = [],
						a = r.length;
					for (let l = 0; l < a; l++) {
						const e = r[l].c;
						e && e.length && o.push(i.a.createElement(d.g, {
							key: l
						}, e.map((e, n) => F(e, t, s, n))))
					}
					const c = e.o ? d.i : d.v;
					return i.a.createElement(c, {
						key: n
					}, o)
				},
				F = (e, t, s, n) => {
					switch (e.e) {
						case p.b:
							return L(e, t, s, n);
						case p.c:
							return M(e, n);
						case p.k:
							return P(e, s, n);
						case p.l:
							return R(n);
						case p.p:
							return D(e, t, s, n);
						case p.u:
							return B(e, t, s, n);
						case p.z:
							return A(e, t, s, n)
					}
				},
				A = (e, t, s, n) => {
					const r = e.c,
						o = e.h,
						a = r.length,
						c = o.length,
						l = [],
						m = [],
						u = [];
					for (let d = 0; d < c; d++) {
						const e = o[d],
							{
								H: n,
								D: r
							} = q(e.a),
							{
								c: a = []
							} = e;
						l.push(i.a.createElement(n, {
							key: d
						}, U(a, t, s))), u[d] = r
					}
					for (let p = 0; p < a; p++) {
						const e = r[p],
							n = e.length,
							o = [];
						for (let r = 0; r < n; r++) {
							const n = u[r],
								{
									c: a = []
								} = e[r];
							o.push(i.a.createElement(n, {
								key: r
							}, U(a, t, s)))
						}
						m.push(i.a.createElement(d.t, {
							key: p
						}, o))
					}
					return i.a.createElement(d.n, {
						key: n
					}, i.a.createElement("thead", null, i.a.createElement(d.t, null, l)), i.a.createElement("tbody", null, m))
				},
				B = (e, t, s, n) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(d.j, {
						key: e
					}, i.a.createElement("br", null)))(n);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(w.g)(r.id) ? i.a.createElement(d.j, {
						key: n
					}, U(e.c, t, s)) : Object(k.b)(r, n, t)
				},
				U = (e, t, s) => {
					const n = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === p.A) n.push(H(r, o));
						else if (r.e === p.x) n.push(i.a.createElement(S.a, {
							key: o
						}, U(r.c, t, s)));
						else if (r.e === p.n) n.push(i.a.createElement("br", {
							key: o
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && n.push(i.a.createElement(j, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else n.push(W(r, s, o))
					}
					return n
				},
				W = (e, t, s) => {
					switch (e.e) {
						case p.o:
							const n = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(y.b)(e.u)) return i.a.createElement(d.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n);
							let r, o;
							const a = Object(N.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(T.b)(c) && (r = c.postId), c && Object(I.b)(c) && (o = c.id, r = c.postId), i.a.createElement(d.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: a,
								postId: r,
								commentId: o
							}, n);
						case p.y:
							return i.a.createElement(v.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return i.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return i.a.createElement(d.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: s,
						t: r
					} = e, o = [];
					if (!s) return V(0, r, t);
					const a = Object(n.a)(r);
					let i = 0,
						d = 0;
					const c = s.length;
					for (; i < c; i++) {
						const [e, t, n] = s[i], c = t + n, l = a[t], m = a[c] - l;
						l > d && o.push(V(0, r.substr(d, l - d), `between${i}`)), o.push(V(e, r.substr(l, m), i)), d = l + m
					}
					return d < r.length && o.push(V(0, r.substr(d), `remaining${i}`)), o
				},
				Q = {
					[p.j.monospace]: d.h,
					[p.j.bold]: d.b,
					[p.j.italic]: d.f,
					[p.j.underline]: d.u,
					[p.j.strikethrough]: d.d,
					[p.j.subscript]: d.l,
					[p.j.superscript]: d.m
				},
				V = (e, t, s) => {
					let n = t;
					return n = o()(Q, (t, n, r) => e & parseInt(r, 10) ? i.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				q = e => {
					switch (e) {
						case p.f:
							return {
								H: d.r, D: d.q
							};
						case p.d:
							return {
								H: d.r, D: d.o
							};
						case p.e:
						default:
							return {
								H: d.r, D: d.p
							}
					}
				}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx");
			t.a = o.a.div("Component", r.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, s) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SubredditIcon/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = s.n(d);
			const l = o.a.wrapped(a.b, "SubredditIcon", c.a),
				m = o.a.wrapped(e => r.a.createElement(i.b, e), "S", c.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				u = s.n(m);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return r.a.createElement("span", {
							className: u.a.subredditMentionContainer
						}, r.a.createElement(l.a, {
							href: `/r/${t}/`
						}, r.a.createElement("span", {
							className: u.a.subredditIconContainer
						}, r.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = s("./src/reddit/selectors/subredditMention.ts");
			class g extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: s
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(i.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const O = Object(b.c)(g),
				E = Object(a.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				_ = Object(o.b)(E),
				C = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: s,
						subredditName: n,
						userVariant: o,
						rtJsonElementProps: a
					} = e;
					if (!s || !t) return r.a.createElement(O, {
						subredditName: n,
						rtJsonElementProps: a
					});
					switch (o) {
						case h.Af.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: a
							});
						case h.Af.SmIconHc:
							return r.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: a
							});
						default:
							return r.a.createElement(O, {
								subredditName: n,
								rtJsonElementProps: a
							})
					}
				};
			t.b = _(C)
		},
		"./src/reddit/components/Widgets/ModSupportLinks/index.m.less": function(e, t, s) {
			e.exports = {
				ExternalLink: "_3j_Pr1PTtXdH3rBrROxOjz",
				externalLink: "_3j_Pr1PTtXdH3rBrROxOjz",
				InternalLink: "_3OMHgk6-gSH2TqxSTFsOXZ",
				internalLink: "_3OMHgk6-gSH2TqxSTFsOXZ"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/models/Theme/index.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const E = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(O.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				_ = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(O.a)(e).widgetColors.sidebarWidgetHeaderColor,
				C = e => {
					const t = E(e);
					return Object(g.f)(t)
				},
				j = e => {
					const t = _(e);
					return Object(g.f)(t)
				};
			var k = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				S = s.n(k);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = Object(m.u)(), I = Object(o.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.n)(e, t) || void 0,
						n = t.redditStyle || Object(f.l)(e, {
							subredditId: s
						}),
						r = Object(x.db)(e);
					return n || r
				},
				nigtmode: x.db,
				subredditId: m.n,
				topPostVariant: h.d
			}));
			class T extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = C(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = _(this.props), e.color = e.fill = j(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: o,
						id: a,
						onClick: d,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? S.a.widgetContentOnly : S.a.widgetContent, f = !n && this.props.styles, x = f ? this.getWidgetBackgroundStyles() : {}, g = f ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(i.a)(t, S.a.widgetBackground, {
							[S.a.redditStyle]: n,
							[S.a.clickable]: !!d,
							[S.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: d,
						style: x
					}, m && r.a.createElement("div", {
						className: Object(i.a)(S.a.widgetHeader, {
							[S.a.clickable]: !!l
						}),
						id: a,
						style: g,
						onClick: l
					}, r.a.createElement("div", {
						className: Object(i.a)(S.a.widgetTitle, p)
					}, r.a.createElement(c.b, {
						type: c.a.Widget
					}, m)), o), r.a.createElement("div", {
						className: Object(i.a)(h, {
							[S.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(u.r, {
						className: S.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, v._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = y(I(Object(d.a)(Object(l.c)(T))))
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext({})
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(i);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(o.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/SearchBar/index.m.less": function(e, t, s) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Search/index.tsx"),
				i = s("./src/reddit/controls/SearchBar/index.m.less"),
				d = s.n(i);
			t.a = e => r.a.createElement("div", {
				className: Object(o.a)(d.a.searchContainer, e.className)
			}, r.a.createElement("input", {
				className: Object(o.a)(d.a.search, {
					[d.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), r.a.createElement("div", {
				className: Object(o.a)(d.a.searchIconContainer, {
					[d.a.mClickable]: !!e.onSearch,
					[d.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, r.a.createElement(a.a, null)))
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx");
			t.a = e => {
				const {
					profile: t,
					subreddit: s
				} = e;
				let r = s && `r/${s}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (r += `--[${e.onlyOfType}]`), e.sort === n.a.OldestFirst && (r += `--[${e.sort}]`), r
			}
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/humanizeUTCDate/index.tsx");
			const o = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(r.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				i = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				r = s("./src/reddit/helpers/isComment.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				a = s("./src/telemetry/models/Outbound.ts");
			const i = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: s
				} = e;
				if (t && (Object(r.b)(t) || Object(o.b)(t))) return Object(r.b)(t) ? a.SourceElement.Comment : Object(n.x)(s) ? a.SourceElement.PostDetail : Object(n.H)(s) ? a.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "e", (function() {
				return C
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/helpers/isComment.ts"),
				i = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const u = e => ({
					...m.n(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...m.n(e),
					source: r,
					screen: m.Y(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: c.e.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(i.b)(s) && !Object(a.b)(s)) return {
						outbound: void 0
					};
					const r = Object(i.b)(s) ? "postId" : "commentId",
						o = {
							url: `/r/${n}/`,
							sourceElement: Object(d.a)(t),
							subredditName: n,
							[r]: s.id
						},
						c = Object(l.z)(e, {
							subredditName: n
						});
					return c ? {
						outbound: {
							...o,
							url: c.url,
							subredditId: c.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(i.b)(s) && !Object(a.b)(s)) return {};
					const n = Object(i.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: m.H(e, s.id),
						subreddit: m.hb(e, n),
						...b(e, t)
					}
				},
				f = e => t => ({
					...u(t),
					...h(t, e)
				}),
				x = e => t => ({
					...p(t),
					source: "global",
					action: o.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: m.ib(t, e),
					screen: m.Y(t)
				}),
				g = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: n.ITEM_POST,
					post: m.H(s, t),
					subreddit: m.ib(s, e),
					screen: m.Y(s)
				}),
				O = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: m.H(s, t),
					subreddit: m.ib(s, e),
					screen: m.Y(s)
				}),
				E = e => t => ({
					...p(t),
					subreddit: m.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				_ = e => t => ({
					...p(t),
					subreddit: m.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				C = e => t => ({
					...p(t),
					subreddit: m.hb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const i = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(a.ub)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...a.n
				}),
				d = (e, t) => s => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: a.H(s, e),
					subreddit: a.gb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...a.n(s)
				}),
				c = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...a.n(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: n.TOPIC,
					...a.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("approve", e.isFilled), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement(o.a, a({
				name: "award"
			}, e))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("lock", e.isFilled), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("remove", e.isFilled), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("report", e.isFilled), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("spam", e.isFilled), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), r.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return m
			}));
			var n = s("./src/reddit/helpers/isPost.ts");
			const r = 50,
				o = 50,
				a = 1e4,
				i = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const l = e => 1 === e.length ? Object(n.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
				m = (e, t) => {
					return {
						[t === c.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/pages/ModQueuePages/index.m.less": function(e, t, s) {
			e.exports = {
				navContainer: "_2fXn_K-CtsU5UyENumO_L5",
				innerContainer: "D4pTlu3VV6Kg_fC6HNcGD",
				mDisableFullScreen: "_3ZorTtV7KSImN0_z0ufG7H",
				title: "_1m63Tp27qAqd29Jg_JFZLD",
				navChild: "mhX_cNPq9TYWEg2o5OfDb",
				mIsActive: "_3qryNXFOCTdHneRR0QlSzp",
				sidebar: "_2mohSnAqr6vkIYT6O-pVcP"
			}
		},
		"./src/reddit/pages/ModQueuePages/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/reddit/components/ModQueueList/index.tsx"),
				m = s("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/layout/page/Listing/index.tsx"),
				f = s("./src/reddit/models/ModQueue/index.ts"),
				x = s("./src/reddit/selectors/moderatorPermissions.ts"),
				g = s("./src/reddit/selectors/telemetry.ts"),
				O = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./src/lib/classNames/index.ts"),
				_ = s("./node_modules/lodash/omit.js"),
				C = s.n(_),
				j = s("./src/lib/addQueryParams/index.ts"),
				k = s("./src/reddit/controls/InternalLink/index.tsx"),
				S = s("./src/reddit/pages/ModQueuePages/index.m.less"),
				v = s.n(S);
			const y = Object(d.c)({
				currentPage: e => e.platform.currentPage
			});
			var I = Object(i.b)(y)(e => a.a.createElement(k.default, {
				className: Object(E.a)(v.a.navChild, {
					[v.a.mIsActive]: e.isActive
				}),
				to: Object(j.a)(`/r/mod/about/${e.pathName}`, C()(e.currentPage.queryParams, ["after", "before", "page"]))
			}, e.title));
			var T = e => a.a.createElement("div", {
					className: v.a.navContainer
				}, a.a.createElement("div", {
					className: Object(E.a)(v.a.innerContainer, {
						[v.a.mDisableFullScreen]: e.disableFullscreen
					})
				}, a.a.createElement("h1", {
					className: v.a.title
				}, O.fbt._("Moderation", null, {
					hk: "ldaHk"
				})), a.a.createElement(I, {
					title: O.fbt._("Queue", null, {
						hk: "2oFkyk"
					}),
					isActive: "modqueue" === e.pageName,
					pathName: "modqueue"
				}), a.a.createElement(I, {
					title: O.fbt._("Reports", null, {
						hk: "4ea70R"
					}),
					isActive: "reports" === e.pageName,
					pathName: "reports"
				}), a.a.createElement(I, {
					title: O.fbt._("Spam", null, {
						hk: "Ho2UJ"
					}),
					isActive: "spam" === e.pageName,
					pathName: "spam"
				}), a.a.createElement(I, {
					title: O.fbt._("Edited", null, {
						hk: "40RqNB"
					}),
					isActive: "edited" === e.pageName,
					pathName: "edited"
				}), a.a.createElement(I, {
					title: O.fbt._("Unmoderated", null, {
						hk: "2YBI6E"
					}),
					isActive: "unmoderated" === e.pageName,
					pathName: "unmoderated"
				}))),
				w = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				N = s("./src/config.ts"),
				P = s("./src/lib/lessComponent.tsx"),
				R = s("./src/lib/opener/index.ts"),
				L = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				M = s("./src/reddit/components/Widgets/ModSupportLinks/index.m.less"),
				D = s.n(M);
			const F = P.a.a("ExternalLink", D.a),
				A = P.a.wrapped(k.default, "InternalLink", D.a);
			var B = () => a.a.createElement(L.a, {
				title: O.fbt._("Moderator resources", null, {
					hk: "1i4sLY"
				}),
				redditStyle: !0
			}, a.a.createElement(F, {
				href: N.a.redditModHelpUrl,
				rel: R.c,
				target: R.d.BLANK
			}, O.fbt._("Mod help center", null, {
				hk: "1LSJPB"
			})), a.a.createElement(F, {
				href: `${N.a.redditUrl}/help/healthycommunities/`,
				rel: R.c,
				target: R.d.BLANK
			}, O.fbt._("Moderator guidelines", null, {
				hk: "15P5n5"
			})), a.a.createElement(A, {
				to: "/r/modsupport",
				rel: R.c,
				target: R.d.BLANK
			}, "r/modsupport"), a.a.createElement(F, {
				href: `${N.a.redditHelpUrl}/en/submit-request/rusername`,
				rel: R.c,
				target: R.d.BLANK
			}, O.fbt._("Contact Reddit", null, {
				hk: "43QJTq"
			})));
			var U = e => a.a.createElement("div", {
				className: v.a.sidebar
			}, e.subredditOrProfileUrl && a.a.createElement(w.a, null, a.a.createElement(L.a, {
				title: O.fbt._("Moderation", null, {
					hk: "K4118"
				})
			}, a.a.createElement(F, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/about/log/`,
				target: "_blank"
			}, O.fbt._("Moderation Log", null, {
				hk: "4CyDRz"
			})), a.a.createElement(F, {
				href: `https://www.reddit.com/${e.subredditOrProfileUrl}/wiki/config/automoderator`,
				target: "_blank"
			}, O.fbt._("Automoderator Config", null, {
				hk: "2GBjtX"
			})))), a.a.createElement(w.a, null, a.a.createElement(B, null)));
			const W = Object(b.u)(),
				H = Object(d.c)({
					queryParams: (e, t) => {
						let {
							location: s
						} = t;
						return r()([...Object(c.a)(s.search)])
					}
				}),
				Q = Object(d.a)(H, b.S, x.p, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.pageName
				}, (e, t, s, n) => {
					let {
						queryParams: r
					} = e;
					const o = r.subreddit,
						a = r.profile,
						i = r.only,
						d = r.sort,
						c = `${r.page||f.b}`;
					return {
						after: r.after || "",
						layout: t,
						isModerator: s.length > 0,
						page: c,
						pageName: n,
						postTypeFilter: i,
						postSort: d,
						profileName: a,
						subredditName: o
					}
				}),
				V = Object(i.b)(Q);
			class q extends a.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => this.props.sendEvent(t => ({
						source: e.includes("modqueue_sort") ? "moderator" : "bulk_mod_action",
						action: "click",
						noun: e,
						screen: Object(g.Y)(t)
					}))
				}
				render() {
					const {
						after: e,
						className: t,
						isModerator: s,
						layout: n,
						page: r,
						pageName: o,
						profileName: i,
						postTypeFilter: d,
						postSort: c,
						subredditName: u
					} = this.props, b = u && `r/${u}` || i && `user/${i}`, f = "unmoderated" !== o, x = f ? d : void 0;
					return a.a.createElement("div", null, s && a.a.createElement(h.a, {
						className: t,
						fitPageToContent: !0,
						disableFullscreen: n === p.g.Large,
						navBar: a.a.createElement(T, {
							disableFullscreen: n === p.g.Large,
							pageName: o
						}),
						content: a.a.Children.toArray([a.a.createElement(m.a, {
							key: i,
							postTypeFilter: x,
							profileName: i,
							sendEventWithName: this.sendEventWithName,
							showTypeFilter: f,
							postSort: c,
							subredditName: u
						}), a.a.createElement(l.a, {
							after: e,
							key: `${i}-${u}`,
							layout: n,
							page: r,
							pageName: o,
							postSort: c,
							postTypeFilter: x,
							profileName: i,
							sendEventWithName: this.sendEventWithName,
							subredditName: u
						})]),
						sidebar: a.a.createElement(U, {
							subredditOrProfileUrl: b
						})
					}))
				}
			}
			t.default = W(V(Object(u.c)(q)))
		},
		"./src/reddit/selectors/experiments/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(r.a)(n.J),
				a = Object(r.a)(n.I),
				i = Object(r.a)(n.fe),
				d = Object(r.a)(n.K),
				c = Object(r.a)(n.L),
				l = Object(r.a)(n.H)
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "b", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				o = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/lib/initializeClient/installReducer.ts"),
				i = s("./src/reddit/reducers/features/comments/index.ts"),
				d = s("./src/reddit/reducers/pages/modHub/index.ts");
			Object(a.a)({
				features: {
					comments: i.a
				},
				pages: {
					modHub: d.a
				}
			});
			const c = (e, t) => Object(r.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					sort: t.queryParams.sort,
					subreddit: t.subredditName
				}),
				l = Object(o.a)((e, t) => {
					var s, n, r;
					const {
						pageName: o,
						page: a
					} = t, i = c(0, t);
					if (!(null === (r = null === (n = null === (s = e.pages.modHub.modQueue[o]) || void 0 === s ? void 0 : s.itemOrder) || void 0 === n ? void 0 : n[i]) || void 0 === r ? void 0 : r[a])) return;
					const d = e.pages.modHub.modQueue[o].itemOrder[i][a];
					return d ? d.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				m = (e, t) => {
					var s;
					const {
						pageName: n
					} = t;
					return null === (s = e.pages.modHub.modQueue[n]) || void 0 === s || !s.api || e.pages.modHub.modQueue[n].api.pending
				},
				u = (e, t) => {
					var s;
					const n = c(0, t);
					return null === (s = e.pages.modHub.modQueue[t.pageName]) || void 0 === s ? void 0 : s.loadMore[n]
				},
				p = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				b = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				h = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				f = e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === n.Nb.MODERATION_PAGES || t.meta.name === n.Nb.MODQUEUE_PAGES)
				}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/subreddit.ts");
			const i = e => r.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: n.tf
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === n.Af.SmIcon || t === n.Af.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: s
					} = t;
					return !!e.subreddits.api.models.pending[s]
				},
				m = (e, t) => {
					let {
						subredditName: s
					} = t;
					return !!e.subreddits.api.models.error[s]
				},
				u = (e, t) => {
					let {
						subredditName: s
					} = t;
					const n = Object(a.Y)(e, {
						subredditName: s
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueuePages.f5d24487bbd87ae1656e.js.map