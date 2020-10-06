// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.991d063bbcfde6eae5c0.js
// Retrieved at 10/6/2020, 5:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
		"./src/graphql/operations/GetPredictionCoinPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"8d63fcc52d73"}')
		},
		"./src/graphql/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"95f86f022a36"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js");

			function o(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t),
					r = new s.BigNumber(n.dividedBy(o)),
					c = new s.BigNumber("100").multipliedBy(r);
				return new s.BigNumber(c).toNumber()
			}
		},
		"./src/reddit/actions/economics/helpers/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "fetchAll", (function() {
				return m
			})), n.d(t, "promptUserToBuyMoreCoins", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/curry.js"),
				o = n.n(s),
				r = n("./src/reddit/actions/badge.ts"),
				c = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				i = n("./src/reddit/actions/governance/communityDetails.ts"),
				a = n("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				d = n("./src/reddit/featureFlags/index.ts");
			const l = {
					badgesroyaletest: "t5_socj8",
					ethtrader: "t5_37jgj",
					fortnitebr: "t5_3oeyf",
					funkygoose: "t5_kzsl3"
				},
				u = o()((e, t) => t.some(t => d.d[t](e))),
				m = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const {
						commentIds: d = [],
						postIds: m = [],
						skip: b = []
					} = e;
					let p = e.subredditId;
					if (!p) {
						e.subredditName && (p = l[e.subredditName.toLowerCase()])
					}
					if (!p) return;
					const f = [],
						g = n(),
						h = u(g),
						j = g.comments.models,
						x = g.posts.models,
						O = new Set(g.user.account ? [g.user.account.id] : []);
					m.forEach(e => {
						const t = x[e];
						t && O.add(t.authorId)
					}), d.forEach(e => {
						const t = j[e];
						t && O.add(t.authorId)
					});
					const y = Array.from(O);
					!b.includes("badges") && y.length && h(["spBadges"]) && f.push(t(Object(r.l)({
						subredditId: p,
						userIds: y
					}))), !b.includes("communityDetails") && h(["spPoints", "spSpecialMemberships"]) && f.push(t(Object(i.a)({
						subredditId: p
					}))), !b.includes("subscription") && h(["spSpecialMemberships"]) && f.push(t(Object(c.g)(p))), !b.includes("wallets") && y.length && h(["spPoints"]) && f.push(t(Object(a.a)({
						subredditId: p,
						userIds: y
					}))), await Promise.all(f)
				};

			function b() {}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/config.ts"),
				c = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(i.a)(a.a),
				l = Object(i.a)(a.b),
				u = Object(i.a)(a.c),
				m = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const i = e && e.includeMemberships || !1,
						a = e && e.forceFetch || !1,
						l = n();
					if (!l.economics.me.fetched || i && !l.economics.me.data.specialMemberships || a) {
						const e = await
						function(e, t) {
							return Object(c.a)(e, {
								method: "get",
								endpoint: "".concat(r.a.metaUrl, "/users/me").concat(t ? "?fields=specialMemberships" : "")
							})
						}(o(), i);
						if (e.ok) {
							const n = e.body;
							i && !n.specialMemberships && (n.specialMemberships = {}), t(d(n))
						}
					}
				}, b = () => async (e, t) => {
					const n = t(),
						r = n.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = "https://".concat(r.pointsDocsBaseUrl, "v1.json?web"),
							n = await Object(o.b)({
								endpoint: t,
								method: s.db.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "f", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/forOwn.js"),
				o = n.n(s),
				r = n("./src/reddit/actions/governance/errorToast.ts"),
				c = n("./src/reddit/endpoints/economics/emojis.ts"),
				i = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				a = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				d = n("./src/reddit/endpoints/governance/badges.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t, n) {
				return Object(u.a)(e, {
					method: "get",
					endpoint: "".concat(l.a.metaUrl, "/products/").concat(t, "?owners=").concat(n) + "&types=emotes_pack,giphy"
				})
			}
			var b = n("./src/reddit/models/Badge/index.ts"),
				p = n("./src/reddit/models/Badge/managementPage.ts"),
				f = n("./src/reddit/models/Product/index.ts"),
				g = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				h = n("./src/reddit/selectors/economics.ts"),
				j = n("./src/reddit/selectors/products.ts"),
				x = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				O = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function y(e) {
				return !!e && "removeBadge" === e.type
			}

			function v(e) {
				if (!y(e)) return e
			}
			const E = () => async (e, t, n) => {
				let {
					apiContext: s
				} = n;
				if (!t().user.account) return;
				await e(Object(x.b)({
					includeMemberships: !0
				}));
				const o = t().economics.me.data.specialMemberships || {},
					r = Object.keys(o);
				if (r.length) {
					const t = await Object(i.e)(s(), r);
					t.ok && e(Object(O.g)(t.body))
				}
			}, C = (e, t) => async (n, s, o) => {
				let {
					apiContext: r
				} = o;
				const c = s().user.account,
					i = s().economics.subredditPremium[e],
					d = !i || i.status !== g.a.Fetched || t;
				if (c && d) {
					const t = await Object(a.a)(r(), e, c.id);
					n(Object(O.i)(t))
				}
			}, w = e => async (t, n, s) => {
				let {
					apiContext: o
				} = s;
				const c = n(),
					i = c.user.account,
					a = Object(h.f)(c, e.subredditId),
					l = Object.keys(a).map(e => a[e]).filter(Boolean);
				if (i && e.badge) {
					let n, s;
					n = e.placement === b.a.First ? a[p.a.Loyalty] : e.placement === b.a.Second ? a[p.a.Achievement] : a[p.a.Cosmetic], t(Object(O.a)(Object.assign(Object.assign({}, e), {
						badge: v(e.badge),
						currentAppliedBadges: l,
						userId: i.id
					}))), y(e.badge) && n ? s = await Object(d.a)(o(), e.subredditId, n.id, !1) : y(e.badge) || (s = await Object(d.a)(o(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(O.a)(Object.assign(Object.assign({}, e), {
						badge: n,
						currentAppliedBadges: l,
						userId: i.id
					}))), Object(r.a)(t, s.error))
				}
			}, k = (e, t) => async (n, s, o) => {
				let {
					apiContext: r
				} = o;
				await n(C(e, !0));
				const c = s().economics.subredditPremium[e];
				if (c && c.status === g.a.Fetched) {
					const s = c.data.userOwnedBadges.find(e => e.type === t.id);
					s && (n(w({
						badge: s,
						subredditId: e,
						placement: s.placement
					})), n(Object(O.d)(p.c.MyBadges)))
				}
			}, I = e => async (t, n, s) => {
				let {
					apiContext: i
				} = s;
				const a = n().user.account,
					d = !n().economics.emotes[e],
					l = !n().economics.gifs[e];
				if (a && (d || l)) {
					const [n, s] = await Promise.all([Object(c.b)(i(), e), m(i(), e, a.id)]);
					if (!s.ok) return void Object(r.a)(t, s.error);
					const d = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					o()(s.body, e => {
						e.type === f.a.EmotesPack ? d.emotes.push(e) : e.type === f.a.Giphy && d.giphy.push(e)
					}), t(Object(O.e)({
						subredditId: e,
						products: d
					}))
				}
			}, _ = (e, t, n) => async (s, o, r) => {
				let {
					apiContext: c
				} = r;
				if (await s(C(e, !0)), n && t) {
					const n = o(),
						r = Object(h.f)(n, e),
						c = Object(j.a)(n, t);
					if (!r[Object(p.d)(c.placement)] && c) {
						const t = Object(h.m)(n, {
							subredditId: e,
							badge: c
						});
						t && await s(w({
							badge: t,
							subredditId: e
						}))
					}
					s(Object(O.c)({
						subredditId: e,
						initialView: p.c.MyBadges
					}))
				}
			}, P = e => async (t, n, s) => {
				let {
					apiContext: o
				} = s;
				const {
					wallet: r
				} = await Object(i.c)(o(), e);
				t(Object(O.f)({
					wallet: r
				})), await t(C(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/endpoints/governance/community.ts"),
				r = n("./src/reddit/actions/governance/constants.ts");
			const c = Object(s.a)(r.a),
				i = e => {
					let {
						subredditId: t
					} = e;
					return async (e, n, s) => {
						let {
							apiContext: r
						} = s;
						const i = await Object(o.a)(r(), {
							subredditId: t
						});
						i.ok && e(c(Object.assign({
							subredditId: t
						}, i.body)))
					}
				}
		},
		"./src/reddit/actions/governance/publicWalletsFetched.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/endpoints/governance/wallet.ts"),
				r = n("./src/reddit/actions/governance/constants.ts");
			const c = Object(s.a)(r.m),
				i = Object(s.a)(r.n),
				a = Object(s.a)(r.l);
			t.a = e => async (t, n, s) => {
				let {
					apiContext: r
				} = s;
				t(c({
					subredditId: e.subredditId
				}));
				const d = await Object(o.b)(r(), e);
				d.ok ? t(i(Object.assign({
					subredditId: e.subredditId
				}, d.body))) : t(a({
					error: d.error
				}))
			}
		},
		"./src/reddit/components/Econ/CoinsModalHeader/index.m.less": function(e, t, n) {
			e.exports = {
				coinButton: "_2D-JnYPuWU9np1-ycRlU4B",
				addCoins: "_3Q8mNjZ6kXlVXyle3AlgPg",
				coinBalanceIndicator: "_8L3GhmAppBj71I9SA2yAv",
				coinIcon: "_2PQG5IO-LoMyTdh5pHkaVI",
				coinBalance: "IJNEU4MmXrYhw0xUvB2jI",
				plusIcon: "_1yFCLGefJC66-exSRGPxWx",
				closeBtn: "_2eQ0RDYslIQ2AWVCe694Hd",
				closeBtnIcon: "Cqi8E08JLc7am7yAu1zuf",
				gildHeader: "_1xbzKMH-i0xyQAbOKcuuDr",
				headerText: "_1B8sDmFKuUDciAht-FY_me",
				subredditIcon: "qIGsGGDKQfZn_EBSumGVq"
			}
		},
		"./src/reddit/components/Econ/CoinsModalHeader/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/Econ/CoinsModalHeader/index.m.less"),
				c = n.n(r),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				d = n("./src/reddit/icons/svgs/Plus/index.tsx");
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function u(e) {
				let {
					onAddCoins: t,
					onCancel: n,
					title: s,
					userCoins: r
				} = e;
				return o.a.createElement("div", {
					className: c.a.gildHeader
				}, o.a.createElement("button", {
					className: c.a.closeBtn,
					onClick: n
				}, o.a.createElement(i.b, {
					className: c.a.closeBtnIcon
				})), o.a.createElement("div", {
					className: c.a.headerText
				}, s), o.a.createElement("button", {
					className: c.a.coinButton,
					onClick: t
				}, o.a.createElement("div", {
					className: c.a.coinBalanceIndicator,
					tabIndex: -1
				}, o.a.createElement(a.a, {
					className: c.a.coinIcon
				}), o.a.createElement("div", {
					className: c.a.coinBalance
				}, (r || 0).toLocaleString())), o.a.createElement("div", {
					className: c.a.addCoins,
					tabIndex: -1
				}, o.a.createElement(d.a, {
					className: c.a.plusIcon
				}))))
			}
		},
		"./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UNYrzKG9vrW6s4_OVCGNt"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionModal/index.m.less": function(e, t, n) {
			e.exports = {
				modalContent: "PCljWh8QzWYMvMGLfqHrV",
				wagerSelector: "_2os23XvAUtqZ5v2x_vZB4q",
				wagerSelectorButton: "_2fD6RvMV1dH5U6TJHO81PQ",
				wagerSelectorButtonIcon: "_3igSbIyijCUbD3M6-qz2f_",
				wagerSelectorAmount: "_3yy0IyOr4j2OT-I1JKUGDN",
				coinIcon: "_2do4bEk5jSnsiJimU-j6Zg",
				predictButton: "_2VLnd_5JRilEY5bl7h_Ntn",
				isFetchingCoinPacks: "_1lGLdd2ymJcfTtlY7_LXAj",
				disclaimer: "_2dot3s8nobkqMUncV3HgJr"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less": function(e, t, n) {
			e.exports = {
				optionButton: "_2ntp-JcW8WtkgytaV4Ulhf",
				hasVoted: "_21iYsZEeiTZDG87oRfe-2o",
				optionPercentage: "_3cTLrBysxImecWhQKcy3u_",
				optionBody: "X-1krr1vt__mfLM_N6-fc",
				optionText: "_2EtRvWvspf1e95m4nOww3i",
				optionStake: "_13IxX5Ek1VDFfqrZVhO_Xz",
				isSelected: "Tg_55Aw6PyKCmanFRdTd-"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less": function(e, t, n) {
			e.exports = {
				statusBar: "_3UgGKQLpMCbhSbdPqloGc4",
				coinIcon: "_1O2NC4MPtXkD58WXlRCpZF"
			}
		},
		"./src/reddit/components/Econ/Prediction/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_12AfXWHuSC5UHX0_ne19LR",
				poll: "_1iOvuGeyccWW1Hv9HUTB4H",
				forCommentsPage: "_3db-wOkv0X5qH0E-5QuyBW",
				isEditing: "_1sQkurV7y_5Plq7_lWzN9h"
			}
		},
		"./src/reddit/components/Econ/Prediction/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "Prediction", (function() {
				return $
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/timeUntil/index.ts"),
				d = n("./src/reddit/actions/economics/helpers/index.ts"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/graphql/operations/GetPredictionCoinPackages.json"),
				b = n("./src/graphql/operations/VotePrediction.json");
			var p = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/actions/economics/predictions/constants.ts");
			const g = Object(l.a)(f.a);
			var h = n("./src/reddit/actions/toaster.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/poll/index.ts"),
				O = n("./src/reddit/selectors/postCreations.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				E = n.n(v);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var w = e => {
					let {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(i.a)(E.a.container, t)
					}, C._("Error: Could not load prediction", null, {
						hk: "3SDSgH"
					}))
				},
				k = n("./src/higherOrderComponents/asModal/index.tsx"),
				I = n("./src/reddit/components/Econ/CoinsModalHeader/index.tsx"),
				_ = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				P = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				N = n("./src/reddit/icons/svgs/Minus/index.tsx"),
				B = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				S = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.m.less"),
				A = n.n(S);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = Object(c.c)({
				userCoins: y.d
			}), T = {
				getCoinPacks: e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const r = n(),
						c = Object(p.ab)(r, {
							postId: e,
							disallowProfile: !0
						});
					if (!c) throw new Error("Post does not belong to a subreddit");
					const i = await ((e, t) => Object(u.a)(e, Object.assign(Object.assign({}, m), {
						variables: {
							subredditName: t
						}
					})))(o(), c.name);
					if (i.error || !i.ok) throw new Error("Failed to fetch coin packs");
					const {
						subredditInfoByName: a
					} = i.body.data;
					if (!a || !a.predictionCoinPackages.length) throw new Error("Subreddit has no coin packs");
					return a.predictionCoinPackages
				},
				showToast: h.e
			};
			var H = Object(r.b)(U, T)(Object(k.a)(e => {
					let {
						getCoinPacks: t,
						isCreatingVote: n,
						onCancel: r,
						onPredict: c,
						pollId: a,
						showToast: l,
						userCoins: u
					} = e;
					const [m, b] = Object(s.useState)(0), [p, f] = Object(s.useState)(null);
					return Object(s.useEffect)(() => {
						(async () => {
							if (!p) try {
								const e = await t(a);
								e.length || (l({
									duration: 5e3,
									kind: j.b.Error,
									text: M._("Error: Subreddit is not configured with coin packs", null, {
										hk: "2t8uz0"
									})
								}), r()), f(e)
							} catch (e) {
								l({
									duration: 5e3,
									kind: j.b.Error,
									text: M._("Error: Failed to fetch coin packs, please try again later", null, {
										hk: "2aROIr"
									})
								}), r()
							}
						})()
					}, [p, t, r, a, l]), o.a.createElement("div", null, o.a.createElement(I.a, {
						onAddCoins: d.promptUserToBuyMoreCoins,
						onCancel: r,
						title: M._("Predict the Future", null, {
							hk: "4bHA0N"
						}),
						userCoins: u
					}), o.a.createElement("div", {
						className: A.a.modalContent
					}, o.a.createElement("div", {
						className: A.a.wagerSelector
					}, o.a.createElement("button", {
						className: A.a.wagerSelectorButton,
						onClick: e => {
							e.preventDefault(), p && 0 !== m && b(m - 1)
						}
					}, o.a.createElement(N.a, {
						className: A.a.wagerSelectorButtonIcon
					})), p ? o.a.createElement("div", {
						className: A.a.wagerSelectorAmount
					}, o.a.createElement(P.a, {
						className: A.a.coinIcon
					}), " ", p[m].coins) : o.a.createElement(_.a, {
						sizePx: 24
					}), o.a.createElement("button", {
						className: A.a.wagerSelectorButton,
						onClick: e => {
							e.preventDefault(), p && m !== p.length - 1 && b(m + 1)
						}
					}, o.a.createElement(B.a, {
						className: A.a.wagerSelectorButtonIcon
					}))), o.a.createElement("button", {
						className: Object(i.a)(A.a.predictButton, {
							[A.a.isFetchingCoinPacks]: !p
						}),
						disabled: !p || n,
						onClick: e => {
							e.preventDefault(), p && c(p[m])
						}
					}, n ? o.a.createElement(_.a, {
						sizePx: 16
					}) : M._("Predict to Win Coins", null, {
						hk: "SjKBe"
					})), o.a.createElement("div", {
						className: A.a.disclaimer
					}, M._("You must be over 18 to use Predictions. Predictions don’t offer an opportunity to win real money or prizes. Your username and prediction is viewable by other redditors.", null, {
						hk: "FMAjt"
					}))))
				})),
				D = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				F = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				q = n.n(F);
			var V = e => {
					let {
						isSelected: t,
						onClick: n,
						option: s,
						votePercentage: r
					} = e;
					return o.a.createElement("button", {
						className: Object(i.a)(q.a.optionButton, {
							[q.a.isSelected]: t,
							[q.a.hasVoted]: null !== s.userStakeAmount
						}),
						onClick: n
					}, o.a.createElement("div", {
						className: q.a.optionBody
					}, o.a.createElement("div", {
						className: q.a.optionText
					}, s.text), s.userStakeAmount && o.a.createElement("div", {
						className: q.a.optionStake
					}, o.a.createElement(D.a, {
						className: q.a.coinIcon
					}), " ", s.userStakeAmount)), r && r > 0 && o.a.createElement("div", {
						className: q.a.optionPercentage,
						style: {
							width: "".concat(r, "%")
						}
					}, " "))
				},
				G = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				L = n.n(G);
			const {
				fbt: W
			} = n("./node_modules/fbt/lib/FbtPublic.js"), z = e => {
				let {
					totalStakeAmount: t
				} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(P.a, {
					className: L.a.coinIcon
				}), W._({
					"*": "{Coins added} coins added",
					_1: "1 coin added"
				}, [W._plural(t, "Coins added")], {
					hk: "1DuNkb"
				}), " · ")
			}, R = e => {
				let {
					endsAt: t
				} = e;
				return W._("Expires in {expirationDuration}", [W._param("expirationDuration", Object(a.a)(new Date(t), !0))], {
					hk: "3R3Px2"
				})
			};
			var J = e => {
					let {
						totalStakeAmount: t,
						endsAt: n
					} = e;
					return o.a.createElement("div", {
						className: L.a.statusBar
					}, t > 0 && o.a.createElement(z, {
						totalStakeAmount: t
					}), o.a.createElement(R, {
						endsAt: n
					}))
				},
				Q = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				X = n.n(Q);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = Object(c.c)({
				isEditing: O.G,
				prediction: x.f,
				pollId: x.a,
				post: p.N,
				subredditOrProfile: p.ab,
				userCoins: y.d
			}), Y = {
				onPredictionVote: e => {
					let {
						coinPackageId: t,
						optionId: n,
						postId: s,
						price: o
					} = e;
					return async (e, r, c) => {
						let {
							gqlContext: i
						} = c;
						const a = await ((e, t) => {
							let {
								postId: n,
								optionId: s,
								coinPackageId: o,
								price: r
							} = t;
							return Object(u.a)(e, Object.assign(Object.assign({}, b), {
								variables: {
									input: {
										postId: n,
										optionId: s,
										coinPackageId: o,
										price: r
									}
								}
							}))
						})(i(), {
							coinPackageId: t,
							optionId: n,
							postId: s,
							price: o
						});
						if (a.error || !a.ok) throw new Error("Failed to make prediction");
						const {
							votePrediction: d
						} = a.body.data;
						if (!d) throw new Error("Failed to create prediction vote");
						return e(g({
							pollId: s,
							prediction: d.poll
						})), d.poll
					}
				},
				showToast: h.e
			}, $ = e => {
				let {
					className: t,
					isCommentsPage: n,
					isEditing: r,
					onPredictionVote: c,
					prediction: l,
					pollId: u,
					subredditOrProfile: m,
					showToast: b,
					userCoins: p
				} = e;
				const [f, g] = Object(s.useState)(!1), [h, x] = Object(s.useState)(null);
				if (!u || !l || !m) return o.a.createElement(w, null);
				const {
					endsAt: O,
					options: y,
					totalStakeAmount: v
				} = l, E = (y || []).find(e => e.userStakeAmount), C = () => {
					x(null)
				}, k = n ? Object(i.a)(t, X.a.container, X.a.forCommentsPage, {
					[X.a.isEditing]: r
				}) : Object(i.a)(t, X.a.container);
				return o.a.createElement("div", {
					className: k,
					onClick: e => {
						l && e.stopPropagation()
					}
				}, o.a.createElement("div", {
					className: X.a.poll
				}, y.map(e => o.a.createElement(V, {
					key: "prediction-option-".concat(e.id),
					isSelected: h === e.id,
					option: e,
					onClick: () => (e => {
						O < Date.now() || E && (null == E ? void 0 : E.id) !== e.id || x(e.id)
					})(e),
					votePercentage: E && e.totalStakeAmount && Math.floor(e.totalStakeAmount / v * 100)
				}))), o.a.createElement(J, {
					endsAt: O,
					totalStakeAmount: v
				}), !!h && o.a.createElement(H, {
					isCreatingVote: f,
					onOverlayClick: C,
					onCancel: C,
					onPredict: async e => {
						if (e.coins > p) Object(d.promptUserToBuyMoreCoins)();
						else {
							if (O < Date.now()) return b({
								duration: 5e3,
								kind: j.b.Error,
								text: K._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								})
							}), void x(null);
							if (!u || !h) throw new Error("Invalid arguments, optionId and pollId must be strings");
							g(!0);
							try {
								await c({
									coinPackageId: e.id,
									optionId: h,
									postId: u,
									price: e.coins
								}), b({
									duration: 5e3,
									kind: j.b.SuccessCommunity,
									text: K._("Thanks! See if you're right in {timeToResult}", [K._param("timeToResult", Object(a.a)(new Date(O), !0))], {
										hk: "3ZSdoo"
									})
								})
							} catch (t) {
								b({
									duration: 5e3,
									kind: j.b.Error,
									text: K._("Error: Failed to make prediction, please try again later", null, {
										hk: "1tECsx"
									})
								})
							}
							g(!1), x(null)
						}
					},
					pollId: u,
					withOverlay: !0
				}))
			};
			t.default = Object(r.b)(Z, Y)($)
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");
			const r = (e, t) => Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/orders"),
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						subredditId: t.subredditId
					}
				}),
				c = (e, t) => Object(o.a)(e, {
					method: "get",
					endpoint: "".concat(s.a.metaUrl, "/product-collections/").concat(t, "?types=emotes_pack")
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			}));
			var s = n("./src/config.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				r = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function d(e, t) {
				return Object(c.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/communities/").concat(t.subredditId, "/me"),
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function l(e, t) {
				return Object(c.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(c.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/orders"),
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: t.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: t.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: t.username
						}
					}
				})
			}

			function m(e, t) {
				return Object(c.a)(Object(o.a)(e, [r.a]), {
					endpoint: "".concat(e.apiUrl, "/api/info?id=").concat(t.join(",")),
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(a.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return Object.assign(Object.assign({}, e), {
							body: t
						})
					}
					return e
				})
			}
			async function b(e, t) {
				const n = await Object(c.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/orders"),
					method: "post",
					data: Object.assign(Object.assign({}, t), {
						currency: "points",
						orderTarget: "special_membership",
						products: [{
							productId: "provisional_membership",
							quantity: "1"
						}],
						targetArgs: {
							renew: !1
						}
					})
				});
				if (!n.ok) throw new Error("Error fetching provisional membership: ".concat(Object(i.b)(n.error)));
				return n.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/merge.js"),
				o = n.n(s),
				r = n("./src/config.ts"),
				c = n("./src/reddit/endpoints/governance/badges.ts"),
				i = n("./src/reddit/endpoints/governance/community.ts"),
				a = n("./src/reddit/endpoints/governance/products/badges.ts"),
				d = n("./src/reddit/endpoints/governance/requester.ts");
			async function l(e, t, n) {
				const s = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					l = function(e, t) {
						return Object(d.a)(e, {
							method: "get",
							endpoint: "".concat(r.a.metaUrl, "/product-collections/").concat(t, "?types=badge")
						})
					}(e, t),
					u = Object(i.a)(e, {
						subredditId: t
					}),
					m = Object(a.b)(e, t),
					b = Object(c.c)(e, t, n),
					[p, f, g, h] = await Promise.all([l, u, m, b]);
				if (p.ok ? s.collections = p.body : s.errors.collections = p.error, f.ok) {
					const e = f.body;
					s.subscription = e.specialMemberships, s.communityRaw = e
				}
				return g.ok ? s.products = g.body : s.errors.products = g.error, h.ok ? (o()(s.badges, h.body.badges), s.userOwnedBadges = h.body.userOwnedBadges) : s.errors.userBadges = h.error, s
			}
			const u = (e, t) => Object(d.a)(e, {
				endpoint: "".concat(r.a.metaUrl, "/products/").concat(t, "?types=badge,membership"),
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/config.ts"),
				o = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: o.db.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							s = {
								[t.subredditId]: n
							};
						return Object.assign(Object.assign({}, e), {
							body: s
						})
					}
					return e
				})
			}

			function i(e, t) {
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: o.db.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/colors.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				a = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(c.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || r.a.gold
				}
			}), "CoinIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, n) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				i = n.n(c);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				className: Object(r.a)(i.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), o.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), o.a.createElement("path", {
				className: Object(r.a)(i.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), o.a.createElement("path", {
				className: Object(r.a)(i.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, o.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), o.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), o.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), o.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		},
		"./src/reddit/icons/svgs/Minus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, o.a.createElement("g", {
				transform: "translate(4, 8), scale(0.75)"
			}, o.a.createElement("path", {
				d: "M10.3785 4.86328H14.9734C15.6086 4.86328 16.1221 4.3498 16.1221 3.71456V1.41713C16.1221 0.781889 15.6086 0.268413 14.9734 0.268413H10.3785H5.78363H1.18876C0.554665 0.268413 0.0400391 0.781889 0.0400391 1.41713V3.71456C0.0400391 4.3498 0.554665 4.86328 1.18876 4.86328H5.78363H10.3785Z"
			})))
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/Product/index.ts");
			const o = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === s.a.Badge) return n
				},
				r = (e, t) => {
					let {
						productId: n
					} = t;
					const s = e.products.models[n];
					if (s) {
						const t = s.subredditId,
							o = Object.keys(e.user.ownedBadges[t] || {}),
							r = e.badges.models,
							c = Date.now();
						let i = !1;
						return o.forEach(e => {
							const t = r[e];
							t && t.type === n && t.endsAt > c && (i = !0)
						}), i
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.991d063bbcfde6eae5c0.js.map