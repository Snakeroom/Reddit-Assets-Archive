// https://www.redditstatic.com/desktop2x/ModQueue~ModQueuePages~ModerationPages.134080e04f97b426af19.js
// Retrieved at 3/10/2022, 10:00:26 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueue~ModQueuePages~ModerationPages"], {
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/bulkActions/constants.ts");
			const n = Object(s.a)(a.c),
				o = Object(s.a)(a.b),
				d = Object(s.a)(a.a)
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return d
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const a = "INCONTEXT__BANNED",
				n = "INCONTEXT__MUTED",
				o = Object(s.a)(a),
				d = Object(s.a)(n)
		},
		"./src/reddit/actions/modQueue/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return V
			})), r.d(t, "d", (function() {
				return K
			})), r.d(t, "f", (function() {
				return $
			})), r.d(t, "a", (function() {
				return z
			})), r.d(t, "b", (function() {
				return W
			})), r.d(t, "c", (function() {
				return J
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/bulkActions/index.ts"),
				d = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				c = r("./src/reddit/actions/removalReasons/index.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/reddit/endpoints/modQueue/index.ts"),
				l = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/helpers/flair.ts"),
				p = r("./src/reddit/helpers/isPost.ts"),
				b = r("./src/reddit/models/ModQueue/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/constants/experiments.ts"),
				y = r("./src/reddit/helpers/chooseVariant/index.ts");
			var h = r("./src/reddit/selectors/modQueue.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/selectors/telemetry.ts"),
				_ = r("./src/telemetry/index.ts"),
				g = r("./src/lib/initializeClient/installReducer.ts"),
				S = r("./src/reddit/reducers/pages/modHub/index.ts"),
				I = r("./src/reddit/actions/modQueue/constants.ts");
			Object(g.a)({
				pages: {
					modHub: S.a
				}
			});
			const E = Object(n.a)(I.j),
				R = Object(n.a)(I.i),
				k = Object(n.a)(I.h),
				A = Object(n.a)(I.g),
				w = Object(n.a)(I.f),
				M = Object(n.a)(I.e),
				N = Object(n.a)(I.n),
				L = Object(n.a)(I.m),
				x = Object(n.a)(I.l),
				P = Object(n.a)(I.q),
				C = Object(n.a)(I.p),
				D = Object(n.a)(I.o),
				T = Object(n.a)(I.w),
				U = Object(n.a)(I.v),
				Q = Object(n.a)(I.u),
				V = (e, t, n) => async (o, c, {
					apiContext: l,
					gqlContext: m
				}) => {
					var p;
					let h, v, j;
					switch (t) {
						case a.rb.Edited:
							h = A, v = M, j = w;
							break;
						case a.rb.Modqueue:
							h = E, v = k, j = R;
							break;
						case a.rb.Reports:
							h = N, v = x, j = L;
							break;
						case a.rb.Spam:
							h = P, v = D, j = C;
							break;
						case a.rb.Unmoderated:
							h = T, v = Q, j = U;
							break;
						default:
							throw new Error("Invalid modqueue requested")
					}
					o(h());
					const _ = await Object(i.c)(l(), t, n);
					if (_.ok) {
						if (function(e) {
								return Object(y.c)(e, {
									experimentEligibilitySelector: y.a,
									experimentName: O.md
								}) === O.Zc
							}(c())) {
							const {
								normalizeModQueueListingFromGql: e,
								transformGatewayParamsToGQLVariables: s
							} = await r.e(11).then(r.bind(null, "./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/index.ts")), {
								diffAndLog: a
							} = await r.e(8).then(r.bind(null, "./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/diffAndLog.ts")), o = _.body, d = {
								...n
							};
							if (d.subreddit) {
								const e = null === (p = Object.values(o.subreddits).find(({
									name: e
								}) => e === n.subreddit)) || void 0 === p ? void 0 : p.id;
								d.subreddit = e
							}
							const u = s({
									getState: c,
									queueType: t,
									options: d
								}),
								l = await Object(i.b)(m(), u);
							if (!l.ok) return;
							const b = e(l.body.data),
								f = {
									posts: o.posts,
									comments: o.comments,
									modqueue: o.modqueue,
									reports: o.reports,
									authorFlair: o.authorFlair
								},
								O = {
									..._.body,
									...b
								};
							_.body = O, a({
								normalizedGqlResponse: b,
								gatewayResponse: f,
								rawGqlResponse: l.body.data
							})
						}
						const s = _.body;
						o(j({
							listingKey: e,
							page: `${n.page||b.b}`,
							response: s
						})), o(Object(d.a)({
							postIds: s.posts ? Object.keys(s.posts) : void 0,
							commentIds: s.comments ? Object.keys(s.comments) : void 0
						}))
					} else o(v(_.error)), o(Object(u.f)({
						kind: f.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, q = Object(n.a)(I.k), F = Object(n.a)(I.b), K = e => async (t, r, {
					apiContext: a
				}) => {
					const n = r(),
						o = n.pages.modHub.modQueue.moderatedCommunitiesOrder.after,
						d = n.pages.modHub.modQueue.moderatedCommunitiesOrder.pending,
						c = n.pages.modHub.modQueue.moderatedCommunitiesOrder.loaded,
						{
							pageName: l
						} = n.platform.currentPage.urlParams,
						m = l;
					if (e && d || c || !o) return;
					const p = await Object(i.c)(a(), m, {
						moderated_after: o
					});
					if (p.ok) {
						const e = p.body;
						t(q(e)), e.moderatedAfter ? t(K()) : t(F())
					} else t(Object(u.f)({
						kind: f.b.Error,
						text: s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						})
					}))
				}, H = Object(n.a)(I.t), G = Object(n.a)(I.s), B = Object(n.a)(I.r), $ = (e, t, r) => async (a, n, {
					apiContext: d
				}) => {
					a(Object(o.c)());
					const O = n(),
						y = Object(h.f)(O),
						g = O.user.account && O.user.account.displayText;
					Object(l.e)(l.a.ModQueue);
					const S = Object(l.c)(l.a.ModQueue);
					Object(_.a)({
						source: "bulk_mod_action_menu",
						action: "click",
						noun: e,
						...j.o(O),
						actionInfo: j.d(O, {
							count: y.length,
							paneName: O.platform.currentPage ? O.platform.currentPage.urlParams.pageName : void 0
						}),
						screen: j.bb(O),
						correlationId: S
					});
					for (let t = 0; t < y.length; t++) {
						const r = y[t];
						let s = e;
						[b.a.Approve, b.a.Remove, b.a.Spam].includes(e) && (Object(p.a)(r) ? s += "_link" : s += "_comment"), Object(_.a)({
							source: "bulk_mod_action",
							action: "click",
							noun: s,
							...j.o(O),
							actionInfo: j.d(O, {
								count: y.length,
								paneName: O.platform.currentPage ? O.platform.currentPage.urlParams.pageName : void 0
							}),
							comment: j.i(O, r),
							post: j.J(O, r),
							profile: j.U(O, r),
							screen: j.bb(O),
							subreddit: j.mb(O, r),
							correlationId: S
						})
					}
					Object(l.b)(l.a.ModQueue);
					const I = {
						ids: y
					};
					t && (I.text = Object(m.g)(t) || "", I.flairTemplateId = ""), r && (I.cssClass = r, I.flairTemplateId = r);
					const E = await Object(i.a)(d(), e, I);
					if (E.ok) {
						a(Object(o.b)({
							...E.body,
							operation: e,
							ids: y,
							username: g,
							options: {
								flair: t
							}
						}));
						const r = function(e, t) {
							switch (e) {
								case b.a.Approve:
									return s.fbt._({
										"*": "{number} posts/comments have been approved",
										_1: "1 post/comment has been approved"
									}, [s.fbt._plural(t, "number")], {
										hk: "2kKhSf"
									});
								case b.a.Flair:
									return s.fbt._({
										"*": "{number} posts/comments have had flair applied",
										_1: "1 post/comment has had flair applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "3syB5O"
									});
								case b.a.IgnoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports ignored",
										_1: "1 post/comment has had their reports ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "2WfE4g"
									});
								case b.a.Lock:
									return s.fbt._({
										"*": "{number} posts/comments have been locked",
										_1: "1 post/comment has been locked"
									}, [s.fbt._plural(t, "number")], {
										hk: "45oMbv"
									});
								case b.a.MarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been marked NSFW",
										_1: "1 post/comment has been marked NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "oPsQr"
									});
								case b.a.RemovalReason:
									return s.fbt._({
										"*": "{number} posts/comments have had removal reasons applied",
										_1: "1 post/comment has had removal reasons applied"
									}, [s.fbt._plural(t, "number")], {
										hk: "35Tosn"
									});
								case b.a.Remove:
									return s.fbt._({
										"*": "{number} posts/comments have been removed",
										_1: "1 post/comment has been removed"
									}, [s.fbt._plural(t, "number")], {
										hk: "B1ZbE"
									});
								case b.a.Spam:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spam",
										_1: "1 post/comment has been marked as spam"
									}, [s.fbt._plural(t, "number")], {
										hk: "3OoNfp"
									});
								case b.a.Spoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been marked as spoilers",
										_1: "1 post/comment has been marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "1DFW5M"
									});
								case b.a.UnignoreReports:
									return s.fbt._({
										"*": "{number} posts/comments have had their reports un-ignored",
										_1: "1 post/comment has had their reports un-ignored"
									}, [s.fbt._plural(t, "number")], {
										hk: "303Hpb"
									});
								case b.a.Unlock:
									return s.fbt._({
										"*": "{number} posts/comments have been unlocked",
										_1: "1 post/comment has been unlocked"
									}, [s.fbt._plural(t, "number")], {
										hk: "5gUht"
									});
								case b.a.UnmarkNSFW:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as NSFW",
										_1: "1 post/comment has been un-marked as NSFW"
									}, [s.fbt._plural(t, "number")], {
										hk: "3oSSST"
									});
								case b.a.Unspoiler:
								case b.a.Unspoiler:
									return s.fbt._({
										"*": "{number} posts/comments have been un-marked as spoilers",
										_1: "1 post/comment has been un-marked as spoilers"
									}, [s.fbt._plural(t, "number")], {
										hk: "3lHoNI"
									})
							}
						}(e, y.length);
						if (e !== b.a.Approve && e !== b.a.Flair) {
							let t, n;
							const d = O.platform.currentPage && O.platform.currentPage.queryParams && O.platform.currentPage.queryParams.subreddit,
								l = d && Object(v.D)(O, d);
							e === b.a.Remove && l && y.length > 1 && (t = s.fbt._("Add a removal reason", null, {
								hk: "3gGDCl"
							}), n = Object(c.fetchReasonsAndOpenModal)(l, y));
							const m = Object(u.e)(r, f.b.Undo, s.fbt._("UNDO", null, {
								hk: "49SEAI"
							}), (() => async (e, t, {
								apiContext: r
							}) => {
								e(H());
								const a = t(),
									n = Object.keys(a.pages.modHub.modQueue.bulkAction.undoLastAction)[0],
									d = a.pages.modHub.modQueue.bulkAction.undoLastAction[n],
									c = a.user.account && a.user.account.displayText;
								e(Object(o.c)());
								const l = await Object(i.a)(r(), n, {
									ids: d
								});
								l.ok ? e(G({
									...l.body,
									operation: n,
									ids: d,
									username: c
								})) : (e(B(l.error)), e(Object(u.f)({
									kind: f.b.Error,
									text: s.fbt._("Oh no! Something went wrong!", null, {
										hk: "16O2Sk"
									})
								})))
							})(), t, n);
							a(Object(u.f)(m))
						} else {
							const e = Object(u.e)(r, f.b.SuccessMod);
							a(Object(u.f)(e))
						}
					} else {
						a(Object(o.a)(E.error));
						const e = Object(u.e)(s.fbt._("Oh no! Something went wrong!", null, {
							hk: "16O2Sk"
						}), f.b.Error);
						a(Object(u.f)(e))
					}
				}, z = Object(n.a)(I.a), W = Object(n.a)(I.c), J = Object(n.a)(I.d)
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			}));
			const s = "SUBREDDIT__MODERATION_LOG_LOADED",
				a = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "removalReasonsPending", (function() {
				return X
			})), r.d(t, "removalReasonsLoaded", (function() {
				return Z
			})), r.d(t, "removalReasonsFailed", (function() {
				return Y
			})), r.d(t, "removalReasonsRequested", (function() {
				return ee
			})), r.d(t, "removalReasonAddedPending", (function() {
				return te
			})), r.d(t, "removalReasonAddedSuccess", (function() {
				return re
			})), r.d(t, "removalReasonAddedFailed", (function() {
				return se
			})), r.d(t, "addRemovalReason", (function() {
				return ae
			})), r.d(t, "editRemovalReasonPending", (function() {
				return ne
			})), r.d(t, "editRemovalReasonSuccess", (function() {
				return oe
			})), r.d(t, "editRemovalReasonFailed", (function() {
				return de
			})), r.d(t, "editRemovalReason", (function() {
				return ce
			})), r.d(t, "deleteRemovalReasonPending", (function() {
				return ue
			})), r.d(t, "deleteRemovalReasonSuccess", (function() {
				return ie
			})), r.d(t, "deleteRemovalReasonFailed", (function() {
				return le
			})), r.d(t, "deleteRemovalReason", (function() {
				return me
			})), r.d(t, "removedItemsSelected", (function() {
				return pe
			})), r.d(t, "fetchReasonsAndOpenModal", (function() {
				return be
			})), r.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), r.d(t, "removalReasonSubmittedSuccess", (function() {
				return Oe
			})), r.d(t, "removalReasonSubmittedFailed", (function() {
				return ye
			})), r.d(t, "removalReasonMessagePending", (function() {
				return he
			})), r.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ve
			})), r.d(t, "removalReasonPublicMessageSuccess", (function() {
				return je
			})), r.d(t, "removalReasonMessageFailed", (function() {
				return _e
			})), r.d(t, "submitRemovalReason", (function() {
				return ge
			})), r.d(t, "submitBulkRemovalReason", (function() {
				return Se
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				n = r("./node_modules/redux/es/redux.js");
			const o = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				c = "REMOVALREASONS__ADD_FAILED",
				u = "REMOVALREASONS__EDIT_PENDING",
				i = "REMOVALREASONS__EDIT_SUCCESS",
				l = "REMOVALREASONS__EDIT_FAILED",
				m = "REMOVALREASONS__DELETE_PENDING",
				p = "REMOVALREASONS__DELETE_SUCCESS",
				b = "REMOVALREASONS__DELETE_FAILED";
			var f = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case o:
					case d:
					case u:
					case i:
					case m:
					case p:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case c:
					case l:
					case b:
						return t.payload;
					default:
						return e
				}
			};
			var O = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case o:
						case u:
						case m:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case d:
						case c:
						case i:
						case l:
						case p:
						case b:
							return !1;
						default:
							return e
					}
				},
				y = Object(n.c)({
					error: f,
					pending: O
				});
			const h = {};
			var v = (e = h, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							response: r
						} = t.payload, {
							data: s
						} = r;
						return {
							...e,
							...s
						}
					}
					case d:
					case i: {
						const {
							reason: r
						} = t.payload;
						return {
							...e,
							[r.id]: r
						}
					}
					case p: {
						const {
							reasonId: r
						} = t.payload, {
							[r]: s,
							...a
						} = e;
						return a
					}
					default:
						return e
				}
			};
			const j = {};
			var _ = (e = j, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: r,
							response: s
						} = t.payload, {
							order: a
						} = s;
						return {
							...e,
							[r]: a
						}
					}
					case d: {
						const {
							subredditId: r,
							reason: s
						} = t.payload;
						return {
							...e,
							[r]: [...e[r], s.id]
						}
					}
					case p: {
						const {
							subredditId: r,
							reasonId: s
						} = t.payload, a = [...e[r]].filter(e => e !== s);
						return {
							...e,
							[r]: a
						}
					}
					default:
						return e
				}
			};
			var g = (e = null, t) => {
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: r
							} = t.payload;
							return {
								itemIds: r,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				S = Object(n.c)({
					api: y,
					models: v,
					reasonOrder: _,
					removedItemIds: g
				}),
				I = r("./src/lib/constants/index.ts"),
				E = r("./src/lib/makeActionCreator/index.ts"),
				R = r("./src/lib/makeCommentsPageKey/index.ts"),
				k = r("./src/lib/makeDraftKey/index.ts"),
				A = r("./src/reddit/actions/bulkActions/index.ts"),
				w = r("./src/reddit/actions/comment/index.ts"),
				M = r("./src/reddit/actions/comment/authoring.ts"),
				N = r("./src/reddit/actions/comment/moderation.ts"),
				L = r("./src/reddit/actions/modal.ts"),
				x = r("./src/reddit/actions/post.ts"),
				P = r("./src/reddit/actions/toaster.ts"),
				C = r("./src/reddit/constants/modals.ts"),
				D = r("./src/lib/makeApiRequest/index.ts"),
				T = r("./src/lib/omitHeaders/index.ts"),
				U = r("./src/reddit/constants/headers.ts"),
				Q = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const V = (e, t) => Object(D.a)(Object(T.a)(e, [U.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: I.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				q = (e, t, r) => Object(D.a)(Object(T.a)(e, [U.a]), {
					endpoint: Object(Q.a)(`${e.apiUrl}/api/v1/modactions/removal_${r}_message/`),
					method: I.jb.POST,
					type: "json",
					data: t
				});
			var F = r("./src/reddit/helpers/isPost.ts"),
				K = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				H = r("./src/reddit/helpers/routeKey/index.ts"),
				G = r("./src/reddit/models/ModQueue/index.ts"),
				B = r("./src/reddit/models/PostDraft/index.ts"),
				$ = r("./src/reddit/models/RemovalReason/index.ts"),
				z = r("./src/reddit/models/Toast/index.ts"),
				W = r("./src/reddit/selectors/comments.ts"),
				J = r("./src/reddit/selectors/platform.ts");
			Object(a.a)({
				features: {
					removalReasons: S
				}
			});
			const X = Object(E.a)("REMOVALREASONS__LOAD_PENDING"),
				Z = Object(E.a)("REMOVALREASONS__LOAD_SUCCESS"),
				Y = Object(E.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, r, {
					apiContext: s
				}) => {
					const a = r().subreddits.models[e].name;
					t(X());
					const n = await ((e, t) => Object(D.a)(Object(T.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: I.jb.GET
					}))(s(), a);
					n.ok ? t(Z({
						subredditId: e,
						response: n.body
					})) : t(Y(n.error))
				}, te = Object(E.a)(o), re = Object(E.a)(d), se = Object(E.a)(c), ae = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const o = a().subreddits.models[e].name;
					r(te());
					const d = await ((e, t, r) => Object(D.a)(Object(T.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: I.jb.POST,
						data: r
					}))(n(), o, t);
					if (d.ok) {
						const {
							id: a
						} = d.body, n = {
							...t,
							id: a
						};
						r(re({
							subredditId: e,
							reason: n
						})), r(Object(P.f)({
							kind: z.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else r(se(d.error))
				}, ne = Object(E.a)(u), oe = Object(E.a)(i), de = Object(E.a)(l), ce = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const o = a().subreddits.models[e].name;
					r(ne());
					const d = await ((e, t, r) => Object(D.a)(Object(T.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${r.id}`,
						method: I.jb.PUT,
						data: {
							message: r.message,
							title: r.title
						}
					}))(n(), o, t);
					d.ok ? (r(oe({
						subredditId: e,
						reason: t
					})), r(Object(P.f)({
						kind: z.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : r(de(d.error))
				}, ue = Object(E.a)(m), ie = Object(E.a)(p), le = Object(E.a)(b), me = (e, t) => async (r, a, {
					apiContext: n
				}) => {
					const o = a().subreddits.models[e].name;
					r(ue());
					const d = await ((e, t, r) => Object(D.a)(Object(T.a)(e, [U.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${r}`,
						method: I.jb.DELETE
					}))(n(), o, t);
					d.ok ? (r(ie({
						subredditId: e,
						reasonId: t
					})), r(Object(P.f)({
						kind: z.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : r(le(d.error))
				}, pe = Object(E.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), be = (e, t) => async (r, s, {
					apiContext: a
				}) => {
					const n = s();
					n.features.removalReasons.reasonOrder[e] && n.features.removalReasons.reasonOrder[e].length > 0 || r(ee(e)), r(pe({
						subredditId: e,
						itemIds: t
					})), r(Object(L.i)(C.a.ADD_REMOVAL_REASON))
				}, fe = Object(E.a)("REMOVALREASONS__SUBMIT_PENDING"), Oe = Object(E.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ye = Object(E.a)("REMOVALREASONS__SUBMIT_FAILED"), he = Object(E.a)("REMOVALREASONS__MESSAGE_PENDING"), ve = Object(E.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), je = Object(E.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), _e = Object(E.a)("REMOVALREASONS__MESSAGE_FAILED"), ge = (e, t, r, s, a) => async (n, o, {
					apiContext: d
				}) => {
					const c = o(),
						u = c.user.account && c.user.account.displayText,
						i = e[0],
						l = Object(F.a)(i) ? $.e.Post : $.e.Comment,
						m = l === $.e.Post ? c.posts.models[i] : c.features.comments.models[i],
						p = l === $.e.Post ? x.S : w.i;
					if (!m || !u) return !1;
					n(fe()), n(p({
						[i]: {
							modNote: a,
							modRemovalReason: t && t.title,
							modReasonBy: u
						}
					}));
					const b = {
							itemIds: e,
							modNote: a,
							reasonId: t ? t.id : null
						},
						f = await V(d(), b);
					if (f.ok) {
						if (n(Oe()), t) {
							n(he());
							const a = {
									itemId: e,
									message: r,
									title: t.title,
									type: s
								},
								o = await q(d(), Object($.h)(a, l), l);
							if (o.ok) {
								if (s === $.f.Public) {
									if (n(je()), o.body) {
										const e = Object(K.a)(o.body, u),
											t = {
												comment: e,
												parentId: i
											},
											r = Object(J.f)(c),
											s = c.platform.currentPage && c.platform.currentPage.routeMatch;
										let a = r && s && Object(H.a)(s, c, c.posts.models[e.postId]);
										if (a || (a = Object(R.a)(e.postId, null, {
												sort: I.v,
												hasSortParam: !0
											})), l === $.e.Post) {
											const r = Object(k.a)(B.c.replyToPost, i);
											n(Object(M.o)({
												...t,
												headCommentId: Object(W.w)(c, {
													commentsPageKey: a
												}),
												commentsPageKey: a,
												draftKey: r
											}));
											const s = c.postStickiedComments.data[i];
											n(Object(N.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: a
											})), s && s !== e.id && n(Object(w.i)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (l === $.e.Comment) {
											const e = Object(k.a)(B.c.replyToComment, m.id),
												r = Object(W.j)(c, {
													commentId: i,
													commentsPageKey: a
												});
											n(Object(M.m)({
												...t,
												parentCommentId: i,
												commentsPageKey: a,
												draftKey: e,
												depth: r + 1
											}))
										}
									}
								} else n(ve());
								return !0
							}
							return n(_e(o.error)), !1
						}
					} else n(ye(f.error)), n(p({
						[i]: {
							modNote: m.modNote,
							modRemovalReason: m.modRemovalReason,
							modReasonBy: m.modReasonBy
						}
					}));
					return !1
				}, Se = (e, t, r, a, n) => async (o, d, {
					apiContext: c
				}) => {
					const u = d(),
						i = u.user.account && u.user.account.displayText;
					if (!i) return;
					o(fe());
					const l = Object(P.f)({
							kind: z.b.SuccessMod,
							text: s.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [s.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						m = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						p = await V(c(), m);
					if (p.ok) {
						const s = {
							ids: e,
							operation: G.a.RemovalReason,
							username: i,
							options: {
								modNote: n,
								removalReason: t && t.title
							}
						};
						if (o(Object(A.b)(s)), t) {
							const s = {
									itemId: e,
									message: r,
									title: t.title,
									type: a
								},
								n = await q(c(), Object($.h)(s, $.e.Bulk), $.e.Bulk);
							n.ok ? (o(ve()), o(l)) : o(_e(n.error))
						} else o(l)
					} else o(ye(p.error))
				}
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				const {
					profile: t,
					subreddit: r
				} = e;
				let s = r && `r/${r}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (s += `--[${e.onlyOfType}]`), s
			}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "h", (function() {
				return l
			}));
			var s = r("./src/reddit/helpers/isPost.ts");
			const a = 50,
				n = 50,
				o = 1e4,
				d = 100;
			var c, u;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(c || (c = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(u || (u = {}));
			const i = e => 1 === e.length ? Object(s.a)(e[0]) ? u.Post : u.Comment : u.Bulk,
				l = (e, t) => {
					return {
						[t === u.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
				}
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				a = r("./src/reddit/actions/subredditModeration/constants.ts");
			var n = (e = null, t) => {
					switch (t.type) {
						case a.g:
						case a.f:
							return null;
						case a.e:
							return t.payload;
						default:
							return e
					}
				},
				o = r("./src/reddit/models/SubredditModeration/index.ts");
			const d = {};
			var c = (e = d, t) => {
					switch (t.type) {
						case a.g: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, a = Object(o.e)(r, s);
							return {
								...e,
								[a]: !0
							}
						}
						case a.f:
						case a.e: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, a = Object(o.e)(r, s);
							return {
								...e,
								[a]: !1
							}
						}
						default:
							return e
					}
				},
				u = Object(s.c)({
					error: n,
					pending: c
				});
			const i = {};
			var l = (e = i, t) => {
				switch (t.type) {
					case a.f: {
						const {
							fetchedToken: r,
							subredditId: s
						} = t.payload, a = Object(o.e)(s, r);
						return {
							...e,
							[a]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case a.f: {
							const {
								subredditId: e,
								after: r
							} = t.payload;
							return {
								[e]: r
							}
						}
						default:
							return e
					}
				},
				b = r("./node_modules/icepick/icepick.js");
			const f = {};
			var O = (e = f, t) => {
				switch (t.type) {
					case a.d:
					case a.f: {
						const {
							subredditId: r,
							approvedSubmitters: s
						} = t.payload, a = {
							[r]: s
						};
						return Object(b.merge)(e, a)
					}
					case a.k: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			var y = (e = null, t) => {
				switch (t.type) {
					case a.j:
					case a.i:
						return null;
					case a.h:
						return t.payload;
					default:
						return e
				}
			};
			var h = (e = !1, t) => {
					switch (t.type) {
						case a.j:
							return !0;
						case a.i:
						case a.h:
							return !1;
						default:
							return e
					}
				},
				v = Object(s.c)({
					error: y,
					pending: h
				});
			var j = (e = null, t) => {
					switch (t.type) {
						case a.j:
							return null;
						case a.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				_ = Object(s.c)({
					api: v,
					result: j
				});
			const g = {};
			var S = (e = g, t) => {
					switch (t.type) {
						case a.f: {
							const {
								subredditId: r,
								approvedSubmitterIds: s
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...s]
							} : {
								...e,
								[r]: s
							}
						}
						case a.k: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case a.d: {
							const {
								subredditId: r,
								approvedSubmitterIds: s
							} = t.payload, a = s[0];
							return a && e[r] && -1 === e[r].indexOf(a) ? {
								[r]: [a, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				I = Object(s.c)({
					api: u,
					fetchedTokens: l,
					loadMore: p,
					models: O,
					search: _,
					userOrder: S
				}),
				E = r("./src/reddit/actions/grantUserFlair/constants.ts");
			var R = (e = null, t) => {
				switch (t.type) {
					case E.g:
					case E.i:
						return null;
					case E.f:
						return t.payload;
					default:
						return e
				}
			};
			var k = (e = !1, t) => {
					switch (t.type) {
						case E.i:
							return !0;
						case E.g:
						case E.f:
							return !1;
						default:
							return e
					}
				},
				A = Object(s.c)({
					error: R,
					pending: k
				}),
				w = r("./node_modules/lodash/merge.js"),
				M = r.n(w),
				N = r("./node_modules/lodash/omit.js"),
				L = r.n(N);
			const x = {};
			var P = (e = x, t) => {
				switch (t.type) {
					case E.g:
					case E.k: {
						const {
							subredditId: r,
							flairedUsers: s
						} = t.payload;
						return M()({
							...e
						}, {
							[r]: s
						})
					}
					case E.c: {
						const {
							subredditId: r,
							userName: s
						} = t.payload, a = L()(e[r], s);
						return {
							...e,
							[r]: a
						}
					}
					case E.a:
					case E.b:
					case E.h:
						const {
							subredditId: r, userName: s, applied: a
						} = t.payload;
						return a ? {
							...e,
							[r]: {
								...e[r],
								[s]: a
							}
						} : e;
					default:
						return e
				}
			};
			const C = {};
			var D = (e = C, t) => {
				switch (t.type) {
					case E.g: {
						const {
							key: r,
							pageInfo: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			var T = (e = null, t) => {
				switch (t.type) {
					case E.l:
					case E.k:
						return null;
					case E.j:
						return t.payload;
					default:
						return e
				}
			};
			var U = (e = !1, t) => {
					switch (t.type) {
						case E.l:
							return !0;
						case E.k:
						case E.j:
							return !1;
						default:
							return e
					}
				},
				Q = Object(s.c)({
					error: T,
					pending: U
				});
			var V = (e = null, t) => {
					switch (t.type) {
						case E.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case E.c: {
							const {
								userName: r
							} = t.payload;
							return e === r ? null : e
						}
						default:
							return e
					}
				},
				q = Object(s.c)({
					api: Q,
					result: V
				});
			const F = {};
			var K = (e = F, t) => {
					switch (t.type) {
						case E.g: {
							const {
								key: r,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case E.a: {
							const {
								key: r,
								userName: s
							} = t.payload;
							if (!r) return e;
							if (!e[r].includes(s)) {
								const t = [...e[r], s];
								return {
									...e,
									[r]: t
								}
							}
							return e
						}
						case E.c: {
							const {
								userName: r
							} = t.payload, s = {};
							for (const t in e) s[t] = e[t].filter(e => e !== r);
							return s
						}
						default:
							return e
					}
				},
				H = Object(s.c)({
					api: A,
					models: P,
					pageInfo: D,
					search: q,
					userOrder: K
				}),
				G = r("./src/reddit/actions/moderationLog/constants.ts");
			const B = {};
			var $ = (e = B, t) => {
				switch (t.type) {
					case G.b: {
						const {
							actionIds: r,
							key: s,
							subredditId: a
						} = t.payload;
						return {
							...e,
							[a]: {
								...e[a] || {},
								[s]: r
							}
						}
					}
					default:
						return e
				}
			};
			const z = {};
			var W = (e = z, t) => {
					switch (t.type) {
						case G.b: {
							const {
								normalizedModerationLog: r,
								subredditId: s
							} = t.payload, a = {};
							r.forEach(e => {
								a[e.id] = e
							});
							const n = {
								[s]: a
							};
							return M()({
								...e
							}, n)
						}
						default:
							return e
					}
				},
				J = Object(s.c)({
					itemOrder: $,
					models: W
				});
			var X = (e = null, t) => {
				switch (t.type) {
					case G.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Z = {};
			var Y = (e = Z, t) => {
				switch (t.type) {
					case G.b: {
						const {
							hasNextPage: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
				switch (t.type) {
					case G.b: {
						const {
							hasPreviousPage: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			const re = [];
			var se = (e = re, t) => {
				switch (t.type) {
					case G.a: {
						const {
							normalizedModerators: r,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			var ae = (e = null, t) => {
					switch (t.type) {
						case G.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				ne = Object(s.c)({
					actions: J,
					endCursor: X,
					hasNextPage: Y,
					hasPreviousPage: te,
					moderators: se,
					startCursor: ae
				});
			const oe = {};
			var de = (e = oe, t) => {
				switch (t.type) {
					case a.K:
					case a.u: {
						const {
							subredditId: r,
							moderators: s
						} = t.payload.response || t.payload, a = {
							[r]: s
						};
						return Object(b.merge)(e, a)
					}
					case a.y: {
						const {
							subredditId: r,
							userId: s,
							permissions: a
						} = t.payload;
						return Object(b.setIn)(e, [r, s, "modPermissions"], a)
					}
					case a.eb: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			const ce = {};
			var ue = (e = ce, t) => {
				switch (t.type) {
					case a.v:
					case a.u: {
						const {
							key: r,
							subredditId: s
						} = t.payload;
						return s ? {
							...e,
							[r]: null
						} : e
					}
					case a.t: {
						const {
							error: r,
							key: s,
							subredditId: a
						} = t.payload;
						return a ? {
							...e,
							[s]: r
						} : e
					}
					default:
						return e
				}
			};
			const ie = {};
			var le = (e = ie, t) => {
					switch (t.type) {
						case a.t:
						case a.u: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !1
							} : e
						}
						case a.v: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !0
							} : e
						}
						default:
							return e
					}
				},
				me = Object(s.c)({
					error: ue,
					pending: le
				});
			const pe = {};
			var be = (e = pe, t) => {
					switch (t.type) {
						case a.u: {
							const {
								subredditId: r,
								response: s,
								key: a
							} = t.payload;
							return Object(b.setIn)(e, [r, a], s.moderatorIds)
						}
						case a.eb: {
							const {
								subredditId: r,
								userId: s,
								key: a
							} = t.payload, n = e[r][a].filter(e => e !== s);
							return Object(b.setIn)(e, [r, a], n)
						}
						default:
							return e
					}
				},
				fe = Object(s.c)({
					data: be,
					api: me
				});
			var Oe = (e = null, t) => {
				switch (t.type) {
					case a.B:
					case a.A:
						return null;
					case a.z:
						return t.payload;
					default:
						return e
				}
			};
			var ye = (e = !1, t) => {
					switch (t.type) {
						case a.A:
						case a.z:
							return !1;
						case a.B:
							return !0;
						default:
							return e
					}
				},
				he = Object(s.c)({
					error: Oe,
					pending: ye
				});
			const ve = {};
			var je = (e = ve, t) => {
				switch (t.type) {
					case a.A: {
						const {
							subredditId: r,
							moderators: s
						} = t.payload;
						return Object(b.set)(e, r, s)
					}
					case a.bb: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					case a.c: {
						const r = t.payload,
							{
								subredditId: s,
								moderators: a
							} = r,
							n = {
								[s]: a
							};
						return Object(b.merge)(e, n)
					}
					default:
						return e
				}
			};
			const _e = {};
			var ge = (e = _e, t) => {
					switch (t.type) {
						case a.A: {
							const {
								subredditId: r,
								moderatorIds: s
							} = t.payload;
							return {
								...e,
								[r]: s
							}
						}
						case a.bb: {
							const {
								subredditId: r,
								userId: s
							} = t.payload, a = e[r].filter(e => e !== s);
							return {
								...e,
								[r]: a
							}
						}
						case a.c: {
							const r = t.payload,
								{
									subredditId: s,
									moderatorIds: a
								} = r,
								n = [...e[s] || [], ...a];
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				Se = Object(s.c)({
					api: he,
					models: je,
					userOrder: ge
				});
			const Ie = {};
			var Ee = (e = Ie, t) => {
				switch (t.type) {
					case a.H: {
						const {
							subredditId: r,
							response: s
						} = t.payload, {
							invitePending: a
						} = s, n = {
							[r]: a
						};
						return Object(b.merge)(e, n)
					}
					case a.E:
					case a.F: {
						const {
							subredditId: r
						} = t.payload;
						return Object(b.unset)(e, r)
					}
					default:
						return e
				}
			};
			const Re = {};
			var ke = (e = Re, t) => {
				switch (t.type) {
					case a.u: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Ae = {};
			var we = (e = Ae, t) => {
				switch (t.type) {
					case a.H: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Me = {};
			var Ne = (e = Me, t) => {
				switch (t.type) {
					case a.H: {
						const {
							response: r
						} = t.payload, s = {
							[r.subredditId]: r.moderators
						};
						return Object(b.merge)({
							...e
						}, s)
					}
					case a.y: {
						const r = t.payload,
							{
								subredditId: s,
								userId: a,
								permissions: n
							} = r;
						return e[s] && e[s][a] ? Object(b.setIn)(e, [s, a, "modPermissions"], n) : e
					}
					default:
						return e
				}
			};
			var Le = (e = null, t) => {
				switch (t.type) {
					case a.L:
					case a.K:
						return null;
					case a.J:
						return t.payload;
					default:
						return e
				}
			};
			var xe = (e = !1, t) => {
					switch (t.type) {
						case a.L:
							return !0;
						case a.K:
						case a.J:
							return !1;
						default:
							return e
					}
				},
				Pe = Object(s.c)({
					error: Le,
					pending: xe
				}),
				Ce = r("./node_modules/lodash/isEqual.js"),
				De = r.n(Ce);
			var Te = (e = null, t) => {
					switch (t.type) {
						case a.L:
						case a.J:
						case a.eb:
							return null;
						case a.K: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case a.y: {
							const {
								userId: r,
								permissions: s
							} = t.payload;
							return e && e.id === r && !De()(e.modPermissions, s) ? {
								...e,
								modPermissions: s
							} : e
						}
						default:
							return e
					}
				},
				Ue = Object(s.c)({
					api: Pe,
					result: Te
				});
			const Qe = {};
			var Ve = (e = Qe, t) => {
				switch (t.type) {
					case a.I:
					case a.H: {
						const {
							subredditId: r,
							key: s
						} = t.payload;
						return r ? {
							...e,
							[s]: null
						} : e
					}
					case a.G: {
						const {
							error: r,
							subredditId: s,
							key: a
						} = t.payload;
						return s ? {
							...e,
							[a]: r
						} : e
					}
					default:
						return e
				}
			};
			const qe = {};
			var Fe = (e = qe, t) => {
					switch (t.type) {
						case a.G:
						case a.H: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !1
							} : e
						}
						case a.I: {
							const {
								subredditId: r,
								key: s
							} = t.payload;
							return r ? {
								...e,
								[s]: !0
							} : e
						}
						default:
							return e
					}
				},
				Ke = Object(s.c)({
					error: Ve,
					pending: Fe
				});
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const He = {};
			var Ge = (e = He, t) => {
					switch (t.type) {
						case a.H: {
							const {
								response: r,
								subredditId: s,
								key: a
							} = t.payload, {
								moderatorIds: n
							} = r;
							return Object(b.merge)(e, {
								[s]: {
									[a]: n
								}
							})
						}
						case a.eb: {
							const {
								subredditId: r,
								userId: s
							} = t.payload, a = {
								...e[r]
							};
							return Object.keys(e[r]).forEach(t => {
								const n = e[r][t].filter(e => e !== s);
								a[t] = n
							}), Object(b.set)(e, r, a)
						}
						default:
							return e
					}
				},
				Be = Object(s.c)({
					data: Ge,
					api: Ke
				}),
				$e = Object(s.c)({
					editableModerators: de,
					editableUserOrder: fe,
					invitedModerators: Se,
					invitePending: Ee,
					loadMoreModerators: we,
					loadMoreEditableModerators: ke,
					models: Ne,
					search: Ue,
					userOrder: Be
				}),
				ze = r("./src/reddit/actions/bulkActions/constants.ts");
			var We = (e = null, t) => {
					switch (t.type) {
						case ze.c:
						case ze.b:
							return null;
						case ze.a:
							return t.payload;
						default:
							return e
					}
				},
				Je = r("./src/reddit/actions/modQueue/constants.ts");
			var Xe = (e = !1, t) => {
					switch (t.type) {
						case ze.c:
							return !0;
						case ze.b:
						case ze.a:
						case Je.s:
						case Je.r:
							return !1;
						default:
							return e
					}
				},
				Ze = Object(s.c)({
					error: We,
					pending: Xe
				});
			const Ye = {};
			var et = (e = Ye, t) => {
					switch (t.type) {
						case Je.a: {
							const {
								ids: r
							} = t.payload, s = {};
							return r.forEach(e => s[e] = !0), {
								...e,
								...s
							}
						}
						case Je.d: {
							const {
								ids: r
							} = t.payload;
							return L()(e, r)
						}
						case Je.c: {
							const {
								ids: e
							} = t.payload, r = {};
							return e.forEach(e => r[e] = !0), r
						}
						default:
							return e
					}
				},
				tt = r("./src/reddit/models/ModQueue/index.ts");
			const rt = {};
			var st = (e = rt, t) => {
					switch (t.type) {
						case ze.b: {
							const {
								operation: e,
								ids: r
							} = t.payload;
							return "approve" === e ? rt : {
								[tt.c[e]]: r
							}
						}
						default:
							return e
					}
				},
				at = Object(s.c)({
					api: Ze,
					selectedItems: et,
					undoLastAction: st
				});
			var nt = (e = null, t) => {
				switch (t.type) {
					case Je.g:
					case Je.f:
						return null;
					case Je.e:
						return t.payload;
					default:
						return e
				}
			};
			var ot = (e = !1, t) => {
					switch (t.type) {
						case Je.g:
							return !0;
						case Je.f:
						case Je.e:
							return !1;
						default:
							return e
					}
				},
				dt = Object(s.c)({
					error: nt,
					pending: ot
				});
			const ct = {};
			var ut = (e = ct, t) => {
				switch (t.type) {
					case Je.f: {
						const {
							listingKey: r,
							page: s,
							response: a
						} = t.payload, {
							modqueue: n
						} = a;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: n
							}
						}
					}
					default:
						return e
				}
			};
			const it = {};
			var lt = (e = it, t) => {
					switch (t.type) {
						case Je.f: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: a
							} = s, n = a[a.length - 1] || null;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				mt = Object(s.c)({
					api: dt,
					itemOrder: ut,
					loadMore: lt
				}),
				pt = r("./src/reddit/actions/pages/modListing/constants.ts");
			var bt = (e = null, t) => {
				switch (t.type) {
					case pt.e: {
						const r = t.payload,
							{
								moderatingSubreddits: s
							} = r;
						return s ? null : e
					}
					case Je.i:
					case Je.f:
					case Je.m:
					case Je.p:
					case Je.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: r
						} = e;
						return r
					}
					case Je.k: {
						const e = t.payload,
							{
								moderatedAfter: r
							} = e;
						return r
					}
					default:
						return e
				}
			};
			const ft = [];
			var Ot = (e = ft, t) => {
				switch (t.type) {
					case Je.i:
					case Je.f:
					case Je.m:
					case Je.p:
					case Je.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: r
						} = e;
						return r
					}
					case Je.k: {
						const r = t.payload,
							{
								listingOrder: s
							} = r;
						return [...e, ...s]
					}
					case pt.e: {
						const r = t.payload,
							{
								listingOrder: s
							} = r;
						return s || e
					}
					default:
						return e
				}
			};
			var yt = (e = !1, t) => {
				switch (t.type) {
					case Je.b:
						return !0;
					default:
						return e
				}
			};
			var ht = (e = !1, t) => {
					switch (t.type) {
						case Je.k:
							return !0;
						case Je.b:
							return !1;
						default:
							return e
					}
				},
				vt = Object(s.c)({
					after: bt,
					data: Ot,
					loaded: yt,
					pending: ht
				});
			var jt = (e = null, t) => {
				switch (t.type) {
					case Je.j:
					case Je.i:
						return null;
					case Je.h:
						return t.payload;
					default:
						return e
				}
			};
			var _t = (e = !1, t) => {
					switch (t.type) {
						case Je.j:
							return !0;
						case Je.i:
						case Je.h:
							return !1;
						default:
							return e
					}
				},
				gt = Object(s.c)({
					error: jt,
					pending: _t
				});
			const St = {};
			var It = (e = St, t) => {
				switch (t.type) {
					case Je.i: {
						const {
							listingKey: r,
							page: s,
							response: a
						} = t.payload, {
							modqueue: n
						} = a;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: n
							}
						}
					}
					default:
						return e
				}
			};
			const Et = {};
			var Rt = (e = Et, t) => {
					switch (t.type) {
						case Je.i: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: a
							} = s, n = a[a.length - 1] || null;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				kt = Object(s.c)({
					api: gt,
					itemOrder: It,
					loadMore: Rt
				});
			var At = (e = null, t) => {
				switch (t.type) {
					case Je.n:
					case Je.m:
						return null;
					case Je.l:
						return t.payload;
					default:
						return e
				}
			};
			var wt = (e = !1, t) => {
					switch (t.type) {
						case Je.n:
							return !0;
						case Je.m:
						case Je.l:
							return !1;
						default:
							return e
					}
				},
				Mt = Object(s.c)({
					error: At,
					pending: wt
				});
			const Nt = {};
			var Lt = (e = Nt, t) => {
				switch (t.type) {
					case Je.m: {
						const {
							listingKey: r,
							page: s,
							response: a
						} = t.payload, {
							modqueue: n
						} = a;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: n
							}
						}
					}
					default:
						return e
				}
			};
			const xt = {};
			var Pt = (e = xt, t) => {
					switch (t.type) {
						case Je.m: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: a
							} = s, n = a[a.length - 1] || null;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Ct = Object(s.c)({
					api: Mt,
					itemOrder: Lt,
					loadMore: Pt
				});
			var Dt = (e = null, t) => {
				switch (t.type) {
					case Je.q:
					case Je.p:
						return null;
					case Je.o:
						return t.payload;
					default:
						return e
				}
			};
			var Tt = (e = !1, t) => {
					switch (t.type) {
						case Je.q:
							return !0;
						case Je.p:
						case Je.o:
							return !1;
						default:
							return e
					}
				},
				Ut = Object(s.c)({
					error: Dt,
					pending: Tt
				});
			const Qt = {};
			var Vt = (e = Qt, t) => {
				switch (t.type) {
					case Je.p: {
						const {
							listingKey: r,
							page: s,
							response: a
						} = t.payload, {
							modqueue: n
						} = a;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: n
							}
						}
					}
					default:
						return e
				}
			};
			const qt = {};
			var Ft = (e = qt, t) => {
					switch (t.type) {
						case Je.p: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: a
							} = s, n = a[a.length - 1] || null;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Kt = Object(s.c)({
					api: Ut,
					itemOrder: Vt,
					loadMore: Ft
				});
			var Ht = (e = null, t) => {
				switch (t.type) {
					case Je.w:
					case Je.v:
						return null;
					case Je.u:
						return t.payload;
					default:
						return e
				}
			};
			var Gt = (e = !1, t) => {
					switch (t.type) {
						case Je.w:
							return !0;
						case Je.v:
						case Je.u:
							return !1;
						default:
							return e
					}
				},
				Bt = Object(s.c)({
					error: Ht,
					pending: Gt
				});
			const $t = {};
			var zt = (e = $t, t) => {
				switch (t.type) {
					case Je.v: {
						const {
							listingKey: r,
							page: s,
							response: a
						} = t.payload, {
							modqueue: n
						} = a;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[s]: n
							}
						}
					}
					default:
						return e
				}
			};
			const Wt = {};
			var Jt = (e = Wt, t) => {
					switch (t.type) {
						case Je.v: {
							const {
								listingKey: r,
								response: s
							} = t.payload, {
								modqueue: a
							} = s, n = a[a.length - 1] || null;
							return {
								...e,
								[r]: n
							}
						}
						default:
							return e
					}
				},
				Xt = Object(s.c)({
					api: Bt,
					itemOrder: zt,
					loadMore: Jt
				}),
				Zt = Object(s.c)({
					bulkAction: at,
					edited: mt,
					moderatedCommunitiesOrder: vt,
					modqueue: kt,
					reports: Ct,
					spam: Kt,
					unmoderated: Xt
				});
			var Yt = (e = null, t) => {
				switch (t.type) {
					case a.T:
					case a.R:
						return null;
					case a.Q:
						return t.payload;
					default:
						return e
				}
			};
			const er = {};
			var tr = (e = er, t) => {
					switch (t.type) {
						case a.T: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, a = Object(o.e)(r, s);
							return {
								...e,
								[a]: !0
							}
						}
						case a.R:
						case a.Q: {
							const {
								subredditId: r,
								fetchedToken: s
							} = t.payload, a = Object(o.e)(r, s);
							return {
								...e,
								[a]: !1
							}
						}
						default:
							return e
					}
				},
				rr = Object(s.c)({
					error: Yt,
					pending: tr
				});
			const sr = {};
			var ar = (e = sr, t) => {
					switch (t.type) {
						case a.R: {
							const {
								fetchedToken: r,
								subredditId: s
							} = t.payload, a = Object(o.e)(s, r);
							return {
								...e,
								[a]: !0
							}
						}
						default:
							return e
					}
				},
				nr = r("./src/reddit/actions/inContextModeration.ts");
			var or = (e = null, t) => {
				switch (t.type) {
					case nr.b:
						return t.payload;
					default:
						return e
				}
			};
			const dr = {};
			var cr = (e = dr, t) => {
				switch (t.type) {
					case a.R: {
						const {
							subredditId: e,
							after: r
						} = t.payload;
						return {
							[e]: r
						}
					}
					default:
						return e
				}
			};
			const ur = {};
			var ir = (e = ur, t) => {
				switch (t.type) {
					case a.S:
					case a.R: {
						const {
							subredditId: r,
							mutedUsers: s
						} = t.payload, a = {
							[r]: s
						};
						return Object(b.merge)(e, a)
					}
					case a.X: {
						const {
							subredditId: r,
							userId: s
						} = t.payload;
						return Object(b.unsetIn)(e, [r, s])
					}
					default:
						return e
				}
			};
			var lr = (e = null, t) => {
				switch (t.type) {
					case a.W:
					case a.V:
						return null;
					case a.U:
						return t.payload;
					default:
						return e
				}
			};
			var mr = (e = !1, t) => {
					switch (t.type) {
						case a.W:
							return !0;
						case a.V:
						case a.U:
							return !1;
						default:
							return e
					}
				},
				pr = Object(s.c)({
					error: lr,
					pending: mr
				});
			var br = (e = null, t) => {
					switch (t.type) {
						case a.W:
						case a.U:
							return null;
						case a.V: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				fr = Object(s.c)({
					api: pr,
					result: br
				});
			const Or = {};
			var yr = (e = Or, t) => {
					switch (t.type) {
						case a.R: {
							const {
								subredditId: r,
								mutedUserIds: s
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...s]
							} : {
								...e,
								[r]: s
							}
						}
						case a.X: {
							const {
								subredditId: r,
								userId: s
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== s)
							}
						}
						case a.S: {
							const {
								subredditId: r,
								mutedUserIds: s
							} = t.payload, a = s[0];
							return a && e[r] && -1 === e[r].indexOf(a) ? {
								[r]: [a, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				hr = Object(s.c)({
					api: rr,
					fetchedTokens: ar,
					inContext: or,
					loadMore: cr,
					models: ir,
					search: fr,
					userOrder: yr
				});
			t.a = Object(s.c)({
				approvedSubmitters: I,
				flairedUsers: H,
				moderationLog: ne,
				moderators: $e,
				modQueue: Zt,
				muted: hr
			})
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/constants/index.ts");
			var s = r("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				a = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/comments/index.ts"),
				d = r("./src/reddit/reducers/pages/modHub/index.ts");
			Object(n.a)({
				features: {
					comments: o.a
				},
				pages: {
					modHub: d.a
				}
			});
			const c = (e, t) => Object(s.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					subreddit: t.subredditName
				}),
				u = Object(a.a)((e, t) => {
					var r, s, a;
					const {
						pageName: n,
						page: o
					} = t, d = c(0, t);
					if (!(null === (a = null === (s = null === (r = e.pages.modHub.modQueue[n]) || void 0 === r ? void 0 : r.itemOrder) || void 0 === s ? void 0 : s[d]) || void 0 === a ? void 0 : a[o])) return;
					const u = e.pages.modHub.modQueue[n].itemOrder[d][o];
					return u ? u.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				i = (e, t) => {
					var r;
					const {
						pageName: s
					} = t;
					return null === (r = e.pages.modHub.modQueue[s]) || void 0 === r || !r.api || e.pages.modHub.modQueue[s].api.pending
				},
				l = (e, t) => {
					var r;
					const s = c(0, t);
					return null === (r = e.pages.modHub.modQueue[t.pageName]) || void 0 === r ? void 0 : r.loadMore[s]
				},
				m = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				p = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				b = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue~ModQueuePages~ModerationPages.134080e04f97b426af19.js.map