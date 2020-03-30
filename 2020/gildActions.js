// https://www.redditstatic.com/desktop2x/gildActions.ae06b3e9461cdd5d456c.js
// Retrieved at 3/30/2020, 3:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["gildActions"], {
		"./src/graphql/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"516dddc80998"}')
		},
		"./src/graphql/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"603abd7f2e1b"}')
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t);
			var d = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/messageIframeParent/index.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/models/Gold/Award.ts"),
				a = s("./src/reddit/models/Toast/index.ts"),
				o = s("./src/reddit/selectors/comments.ts"),
				l = s("./src/reddit/selectors/communityAwards.ts"),
				u = s("./src/reddit/selectors/gild.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				w = s("./src/graphql/operations/GildComment.json"),
				O = s("./src/graphql/operations/GildPost.json"),
				j = s("./src/lib/makeGqlRequest/index.ts"),
				f = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const p = (e, t, s) => Object(j.a)(e, Object.assign({}, O, {
					variables: t
				}), {
					query: s ? {} : Object(f.b)()
				}),
				h = (e, t, s) => Object(j.a)(e, Object.assign({}, w, {
					variables: t
				}), {
					query: s ? {} : Object(f.b)()
				});
			var A = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				y = s("./src/reddit/helpers/awards/message.ts"),
				I = s("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = s("./src/reddit/helpers/isPost.ts"),
				v = s("./src/reddit/helpers/trackers/gild.ts"),
				k = s("./src/telemetry/index.ts"),
				x = s("./src/reddit/actions/gold/constants.ts");
			s.d(t, "setIsAnonymous", (function() {
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
				return S
			})), s.d(t, "gildFailed", (function() {
				return T
			})), s.d(t, "gildSuccessful", (function() {
				return H
			}));
			const q = Object(r.a)(x.p),
				C = Object(r.a)(x.o),
				E = Object(r.a)(x.s),
				N = (e, t) => async (s, r, n) => {
					let {
						gqlContext: i
					} = n;
					const c = r().gild,
						{
							isOldReddit: a,
							isLivestream: o
						} = t;
					s(S());
					try {
						const t = {
								gildingTypeId: c.selectedAward.id,
								isAnonymous: c.isAnonymous,
								isGildFunded: !1,
								message: Object(y.d)(c.message, c.selectedAward, o),
								nodeId: e
							},
							r = Object(_.a)(e) ? p : h,
							n = await r(i(), {
								input: t
							}, a);
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
								} = t.data;
							await s(H({
								awardId: c.selectedAward.id,
								awardings: d.awardings,
								coins: d.coins,
								id: e,
								subredditCoins: d.subredditCoins
							}))
						} else {
							const e = u && u[0] && u[0].message,
								t = b && b[0] && b[0].message,
								r = e || t || d.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await s(T(r))
						}
					} catch (l) {
						const e = l,
							t = e && e.message || d.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await s(T(t))
					} finally {
						Object(I.b)(I.a.GildingFlow)
					}
				}, P = Object(r.a)(x.r), G = Object(r.a)(x.n), S = () => async (e, t) => {
					e(G()), window.setTimeout(() => {
						t().gild.api.pending && e(P())
					}, 2e3)
				}, L = Object(r.a)(x.m), T = e => async (t, s) => {
					await t(L(e)), t(Object(i.e)({
						kind: a.b.Error,
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
					} = n, c = !i && r && (r.username || r.displayText) ? r.username || r.displayText : void 0, a = d ? d.author : void 0, l = Object(g.H)(e, {
						thingId: s
					});
					return D(Object.assign({}, t, {
						gilder: c,
						gildee: a,
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
					if (m.awardType === c.d.Moderator && void 0 === e.subredditCoins) {
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
						O = m.coinPrice;
					Object(k.a)(Object(v.viewSuccessAwardEvent)(b, O, m)(r)), t(Object(i.e)({
						kind: a.b.SuccessCommunity,
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
//# sourceMappingURL=gildActions.ae06b3e9461cdd5d456c.js.map