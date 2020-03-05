// https://www.redditstatic.com/desktop2x/gildActions.335807980bf8f6df5c48.js
// Retrieved at 3/5/2020, 3:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["gildActions"], {
		"./src/graphql/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"2b054ab61ac3"}')
		},
		"./src/graphql/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"57310c14f742"}')
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				d = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/messageIframeParent/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/models/Gold/Award.ts"),
				o = s("./src/reddit/models/Toast/index.ts"),
				l = s("./src/reddit/selectors/comments.ts"),
				u = s("./src/reddit/selectors/communityAwards.ts"),
				b = s("./src/reddit/selectors/gild.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				m = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				j = s("./src/graphql/operations/GildComment.json"),
				w = s("./src/graphql/operations/GildPost.json"),
				p = s("./src/lib/makeGqlRequest/index.ts"),
				f = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const h = (e, t, s) => Object(p.a)(e, Object.assign({}, w, {
					variables: t
				}), {
					query: s ? {} : Object(f.b)()
				}),
				A = (e, t, s) => Object(p.a)(e, Object.assign({}, j, {
					variables: t
				}), {
					query: s ? {} : Object(f.b)()
				});
			var y = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				I = s("./src/reddit/helpers/awards/message.ts"),
				_ = s("./src/reddit/helpers/correlationIdTracker.ts"),
				v = s("./src/reddit/helpers/isPost.ts"),
				x = s("./src/reddit/helpers/trackers/gild.ts"),
				q = s("./src/reddit/i18n/utils.ts"),
				C = s("./src/telemetry/index.ts"),
				E = s("./src/reddit/actions/gold/constants.ts");
			s.d(t, "setIsAnonymous", (function() {
				return N
			})), s.d(t, "setIncludeMessage", (function() {
				return P
			})), s.d(t, "updateMessage", (function() {
				return k
			})), s.d(t, "gildGqlRequested", (function() {
				return G
			})), s.d(t, "triggerLoader", (function() {
				return S
			})), s.d(t, "gildPending", (function() {
				return L
			})), s.d(t, "gildFailed", (function() {
				return F
			})), s.d(t, "gildSuccessful", (function() {
				return R
			}));
			const N = Object(i.a)(E.p),
				P = Object(i.a)(E.o),
				k = Object(i.a)(E.s),
				G = (e, t) => async (s, r, d) => {
					let {
						gqlContext: i
					} = d;
					const n = r().gild,
						{
							isOldReddit: c,
							isLivestream: a
						} = t;
					s(L());
					try {
						const t = {
								gildingTypeId: n.selectedAward.id,
								isAnonymous: n.isAnonymous,
								isGildFunded: !1,
								message: Object(I.d)(n.message, n.selectedAward, a),
								nodeId: e
							},
							r = Object(v.a)(e) ? h : A,
							d = await r(i(), {
								input: t
							}, c);
						if (d.ok) {
							const t = d.body,
								{
									gild: r
								} = t.data;
							await s(R({
								awardId: n.selectedAward.id,
								awardings: r.awardings,
								coins: r.coins,
								id: e,
								subredditCoins: r.subredditCoins
							}))
						} else await s(F(d))
					} catch (o) {
						await s(F(o))
					} finally {
						Object(_.b)(_.a.GildingFlow)
					}
				}, S = Object(i.a)(E.r), T = Object(i.a)(E.n), L = () => async (e, t) => {
					e(T()), window.setTimeout(() => {
						t().gild.api.pending && e(S())
					}, 2e3)
				}, D = Object(i.a)(E.m), F = e => async (t, s) => {
					await t(D(e));
					const r = s().gild.api.error;
					if (r) {
						const s = ((e, t) => {
							const s = e.error && e.error.type,
								r = e.error && e.error.fields && e.error.fields[0] && e.error.fields[0].msg;
							return s === d.i ? Object(q.c)("There was an authentication error") : r ? Object(q.c)(r) : Object(q.c)(t)
						})(e, r);
						t(Object(c.e)({
							kind: o.b.Error,
							duration: c.a,
							text: s
						}))
					}
				}, H = Object(i.a)(E.q), M = (e, t) => {
					const {
						id: s
					} = t, r = Object(v.a)(s) ? Object(g.M)(e, {
						postId: s
					}) : Object(l.n)(e, {
						commentId: s
					}), d = Object(O.i)(e), i = e.gild, {
						isAnonymous: n
					} = i, c = !n && d && (d.username || d.displayText) ? d.username || d.displayText : void 0, a = r ? r.author : void 0, o = Object(m.H)(e, {
						thingId: s
					});
					return H(Object.assign({}, t, {
						gilder: c,
						gildee: a,
						subredditId: o && o.id
					}))
				}, R = e => async (t, s) => {
					const d = s(),
						{
							awardId: i,
							id: l
						} = e,
						g = Object(u.a)(d, i);
					if (Object(b.h)(d)) {
						const e = "success.gild",
							t = {},
							s = g.icon32 ? g.icon32.url : g.icon.url;
						t.awardId = i, t.awardIcon = s, Object(n.a)({
							type: e,
							data: t
						})
					}
					if (g.awardType === a.d.Moderator && void 0 === e.subredditCoins) {
						const t = Object(m.H)(d, {
								thingId: l
							}),
							s = t && Object(m.A)(d, {
								subredditName: t.name
							});
						s && (e.subredditCoins = s - g.coinPrice)
					}
					t(M(d, e)), (d.posts.instances[l] || []).forEach(s => {
						t(M(d, Object.assign({}, e, {
							id: s
						})))
					});
					const O = Object(v.a)(l) ? r.fbt._("Success! You have given this post the {awardName} Award", [r.fbt._param("awardName", g.name)], {
							hk: "1Ndi4Z"
						}) : r.fbt._("Success! You have given this comment the {awardName} Award", [r.fbt._param("awardName", g.name)], {
							hk: "2sIK9Y"
						}),
						j = g.coinPrice;
					Object(C.a)(Object(x.viewSuccessAwardEvent)(l, j, g)(d)), t(Object(c.e)({
						kind: o.b.SuccessCommunity,
						text: O
					})), setTimeout(() => {
						const e = Object(y.a)(i, l),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10)
				}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => "awardItem__".concat(t, "-").concat(e)
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return n
			}));
			const r = 500,
				d = 1800,
				i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < r ? 0 : e.coinPrice < d ? 50 : 100 : 2048
				},
				n = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const r = i(t, s);
					return e.slice(0, r)
				}
		}
	}
]);
//# sourceMappingURL=gildActions.335807980bf8f6df5c48.js.map