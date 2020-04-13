// https://www.redditstatic.com/desktop2x/gildActions.858c884e02f0d3275b85.js
// Retrieved at 4/13/2020, 2:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["gildActions"], {
		"./src/graphql/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"e3fd25f3fd15"}')
		},
		"./src/graphql/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"df757af47083"}')
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "setIsAnonymous", (function() {
				return q
			})), s.d(t, "setIncludeMessage", (function() {
				return C
			})), s.d(t, "updateMessage", (function() {
				return E
			})), s.d(t, "gildGqlRequested", (function() {
				return N
			})), s.d(t, "triggerLoader", (function() {
				return P
			})), s.d(t, "gildPending", (function() {
				return G
			})), s.d(t, "gildFailed", (function() {
				return L
			})), s.d(t, "gildSuccessful", (function() {
				return H
			}));
			var d = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/messageIframeParent/index.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/models/Gold/Award.ts"),
				c = s("./src/reddit/models/Toast/index.ts"),
				o = s("./src/reddit/selectors/comments.ts"),
				l = s("./src/reddit/selectors/communityAwards.ts"),
				u = s("./src/reddit/selectors/gild.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				w = s("./src/graphql/operations/GildComment.json"),
				f = s("./src/graphql/operations/GildPost.json"),
				O = s("./src/lib/makeGqlRequest/index.ts"),
				j = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const p = (e, t, s) => Object(O.a)(e, Object.assign({}, f, {
					variables: t
				}), {
					query: s ? {} : Object(j.b)()
				}),
				h = (e, t, s) => Object(O.a)(e, Object.assign({}, w, {
					variables: t
				}), {
					query: s ? {} : Object(j.b)()
				});
			var A = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				y = s("./src/reddit/helpers/awards/message.ts"),
				I = s("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = s("./src/reddit/helpers/isPost.ts"),
				v = s("./src/reddit/helpers/trackers/gild.ts"),
				k = s("./src/telemetry/index.ts"),
				x = s("./src/reddit/actions/gold/constants.ts");
			const q = Object(r.a)(x.p),
				C = Object(r.a)(x.o),
				E = Object(r.a)(x.s),
				N = (e, t) => async (s, r, n) => {
					let {
						gqlContext: i
					} = n;
					const a = r().gild,
						{
							isOldReddit: c,
							isLivestream: o
						} = t;
					s(G());
					try {
						const t = {
								gildingTypeId: a.selectedAward.id,
								isAnonymous: a.isAnonymous,
								isGildFunded: !1,
								message: Object(y.d)(a.message, a.selectedAward, o),
								nodeId: e
							},
							r = Object(_.a)(e) ? p : h,
							n = await r(i(), {
								input: t
							}, c);
						let l = !1,
							u = null,
							b = null;
						if (n.ok) {
							const e = n.body;
							l = e.data.gild.ok, u = e.data.gild.fieldErrors, b = e.data.gild.errors
						}
						if (l) {
							const t = n.body,
								{
									gild: d
								} = t.data,
								r = Object(_.a)(e) ? n.body.data.gild.postInfo : n.body.data.gild.comment,
								{
									awardings: i,
									treatmentTags: c
								} = r;
							await s(H({
								awardId: a.selectedAward.id,
								awardings: i,
								coins: d.coins,
								id: e,
								subredditCoins: d.subredditCoins,
								treatmentTags: c
							}))
						} else {
							const e = u && u[0] && u[0].message,
								t = b && b[0] && b[0].message,
								r = e || t || d.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await s(L(r))
						}
					} catch (l) {
						const e = l,
							t = e && e.message || d.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await s(L(t))
					} finally {
						Object(I.b)(I.a.GildingFlow)
					}
				}, P = Object(r.a)(x.r), T = Object(r.a)(x.n), G = () => async (e, t) => {
					e(T()), window.setTimeout(() => {
						t().gild.api.pending && e(P())
					}, 2e3)
				}, S = Object(r.a)(x.m), L = e => async (t, s) => {
					await t(S(e)), t(Object(i.e)({
						kind: c.b.Error,
						duration: i.a,
						text: e
					}))
				}, D = Object(r.a)(x.q), F = (e, t) => {
					const {
						id: s
					} = t, d = Object(_.a)(s) ? Object(b.N)(e, {
						postId: s
					}) : Object(o.n)(e, {
						commentId: s
					}), r = Object(m.i)(e), n = e.gild, {
						isAnonymous: i
					} = n, a = !i && r && (r.username || r.displayText) ? r.username || r.displayText : void 0, c = d ? d.author : void 0, l = Object(g.H)(e, {
						thingId: s
					});
					return D(Object.assign({}, t, {
						gilder: a,
						gildee: c,
						subredditId: l && l.id
					}))
				}, H = e => async (t, s) => {
					const r = s(),
						{
							awardId: o,
							id: b
						} = e,
						m = Object(l.a)(r, o);
					if (Object(u.h)(r)) {
						const e = "success.gild",
							t = {},
							s = m.icon32 ? m.icon32.url : m.icon.url;
						t.awardId = o, t.awardIcon = s, Object(n.a)({
							type: e,
							data: t
						})
					}
					if (m.awardType === a.d.Moderator && void 0 === e.subredditCoins) {
						const t = Object(g.H)(r, {
								thingId: b
							}),
							s = t && Object(g.A)(r, {
								subredditName: t.name
							});
						s && (e.subredditCoins = s - m.coinPrice)
					}
					t(F(r, e)), (r.posts.instances[b] || []).forEach(s => {
						t(F(r, Object.assign({}, e, {
							id: s
						})))
					});
					const w = Object(_.a)(b) ? d.fbt._("Success! You have given this post the {awardName} Award", [d.fbt._param("awardName", m.name)], {
							hk: "1Ndi4Z"
						}) : d.fbt._("Success! You have given this comment the {awardName} Award", [d.fbt._param("awardName", m.name)], {
							hk: "2sIK9Y"
						}),
						f = m.coinPrice;
					Object(k.a)(Object(v.viewSuccessAwardEvent)(b, f, m)(r)), t(Object(i.e)({
						kind: c.b.SuccessCommunity,
						text: w
					})), setTimeout(() => {
						const e = Object(A.a)(o, b),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10)
				}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			const d = (e, t) => "awardItem__".concat(t, "-").concat(e)
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return i
			}));
			const d = 500,
				r = 1800,
				n = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < d ? 0 : e.coinPrice < r ? 50 : 100 : 2048
				},
				i = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const d = n(t, s);
					return e.slice(0, d)
				}
		}
	}
]);
//# sourceMappingURL=gildActions.858c884e02f0d3275b85.js.map