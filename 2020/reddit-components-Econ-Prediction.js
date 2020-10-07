// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.013a305b5d7fb134845e.js
// Retrieved at 10/7/2020, 5:50:08 PM by Reddit Dataminer v1.0.0
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
				return p
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
						skip: p = []
					} = e;
					let b = e.subredditId;
					if (!b) {
						e.subredditName && (b = l[e.subredditName.toLowerCase()])
					}
					if (!b) return;
					const g = [],
						f = n(),
						h = u(f),
						x = f.comments.models,
						j = f.posts.models,
						v = new Set(f.user.account ? [f.user.account.id] : []);
					m.forEach(e => {
						const t = j[e];
						t && v.add(t.authorId)
					}), d.forEach(e => {
						const t = x[e];
						t && v.add(t.authorId)
					});
					const O = Array.from(v);
					!p.includes("badges") && O.length && h(["spBadges"]) && g.push(t(Object(r.l)({
						subredditId: b,
						userIds: O
					}))), !p.includes("communityDetails") && h(["spPoints", "spSpecialMemberships"]) && g.push(t(Object(i.a)({
						subredditId: b
					}))), !p.includes("subscription") && h(["spSpecialMemberships"]) && g.push(t(Object(c.g)(b))), !p.includes("wallets") && O.length && h(["spPoints"]) && g.push(t(Object(a.a)({
						subredditId: b,
						userIds: O
					}))), await Promise.all(g)
				};

			function p() {}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
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
				}, p = () => async (e, t) => {
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
				return w
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return k
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
			var p = n("./src/reddit/models/Badge/index.ts"),
				b = n("./src/reddit/models/Badge/managementPage.ts"),
				g = n("./src/reddit/models/Product/index.ts"),
				f = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				h = n("./src/reddit/selectors/economics.ts"),
				x = n("./src/reddit/selectors/products.ts"),
				j = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				v = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function O(e) {
				return !!e && "removeBadge" === e.type
			}

			function C(e) {
				if (!O(e)) return e
			}
			const E = () => async (e, t, n) => {
				let {
					apiContext: s
				} = n;
				if (!t().user.account) return;
				await e(Object(j.b)({
					includeMemberships: !0
				}));
				const o = t().economics.me.data.specialMemberships || {},
					r = Object.keys(o);
				if (r.length) {
					const t = await Object(i.e)(s(), r);
					t.ok && e(Object(v.g)(t.body))
				}
			}, w = (e, t) => async (n, s, o) => {
				let {
					apiContext: r
				} = o;
				const c = s().user.account,
					i = s().economics.subredditPremium[e],
					d = !i || i.status !== f.a.Fetched || t;
				if (c && d) {
					const t = await Object(a.a)(r(), e, c.id);
					n(Object(v.i)(t))
				}
			}, y = e => async (t, n, s) => {
				let {
					apiContext: o
				} = s;
				const c = n(),
					i = c.user.account,
					a = Object(h.f)(c, e.subredditId),
					l = Object.keys(a).map(e => a[e]).filter(Boolean);
				if (i && e.badge) {
					let n, s;
					n = e.placement === p.a.First ? a[b.a.Loyalty] : e.placement === p.a.Second ? a[b.a.Achievement] : a[b.a.Cosmetic], t(Object(v.a)(Object.assign(Object.assign({}, e), {
						badge: C(e.badge),
						currentAppliedBadges: l,
						userId: i.id
					}))), O(e.badge) && n ? s = await Object(d.a)(o(), e.subredditId, n.id, !1) : O(e.badge) || (s = await Object(d.a)(o(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(v.a)(Object.assign(Object.assign({}, e), {
						badge: n,
						currentAppliedBadges: l,
						userId: i.id
					}))), Object(r.a)(t, s.error))
				}
			}, I = (e, t) => async (n, s, o) => {
				let {
					apiContext: r
				} = o;
				await n(w(e, !0));
				const c = s().economics.subredditPremium[e];
				if (c && c.status === f.a.Fetched) {
					const s = c.data.userOwnedBadges.find(e => e.type === t.id);
					s && (n(y({
						badge: s,
						subredditId: e,
						placement: s.placement
					})), n(Object(v.d)(b.c.MyBadges)))
				}
			}, k = e => async (t, n, s) => {
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
						e.type === g.a.EmotesPack ? d.emotes.push(e) : e.type === g.a.Giphy && d.giphy.push(e)
					}), t(Object(v.e)({
						subredditId: e,
						products: d
					}))
				}
			}, _ = (e, t, n) => async (s, o, r) => {
				let {
					apiContext: c
				} = r;
				if (await s(w(e, !0)), n && t) {
					const n = o(),
						r = Object(h.f)(n, e),
						c = Object(x.a)(n, t);
					if (!r[Object(b.d)(c.placement)] && c) {
						const t = Object(h.m)(n, {
							subredditId: e,
							badge: c
						});
						t && await s(y({
							badge: t,
							subredditId: e
						}))
					}
					s(Object(v.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, P = e => async (t, n, s) => {
				let {
					apiContext: o
				} = s;
				const {
					wallet: r
				} = await Object(i.c)(o(), e);
				t(Object(v.f)({
					wallet: r
				})), await t(w(e.subredditId, !0))
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
				isCorrect: "_3jmmoq1otA_Twif-J89nrp",
				optionBody: "X-1krr1vt__mfLM_N6-fc",
				optionText: "_2EtRvWvspf1e95m4nOww3i",
				optionStake: "_13IxX5Ek1VDFfqrZVhO_Xz",
				optionPercentage: "_3cTLrBysxImecWhQKcy3u_",
				isSelected: "Tg_55Aw6PyKCmanFRdTd-",
				checkmarkIcon: "_2gAEl8yg8wfIPLrKbwHden"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less": function(e, t, n) {
			e.exports = {
				statusBar: "_3UgGKQLpMCbhSbdPqloGc4",
				coinIcon: "_1O2NC4MPtXkD58WXlRCpZF",
				divider: "SZcaijbNtMWo_Hks5p9cB",
				clockIcon: "DzRACNzo9EG6-6h40DhZA"
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
				return ne
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/timeUntil/index.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/actions/economics/helpers/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				m = n("./src/lib/makeGqlRequest/index.ts"),
				p = n("./src/graphql/operations/GetPredictionCoinPackages.json"),
				b = n("./src/graphql/operations/VotePrediction.json");
			var g = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/actions/economics/predictions/constants.ts");
			const h = Object(u.a)(f.a);
			var x = n("./src/reddit/actions/toaster.ts"),
				j = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/poll/index.ts"),
				O = n("./src/reddit/selectors/postCreations.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				w = n.n(E);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var I = e => {
					let {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(i.a)(w.a.container, t)
					}, y._("Error: Could not load prediction", null, {
						hk: "3SDSgH"
					}))
				},
				k = n("./src/higherOrderComponents/asModal/index.tsx"),
				_ = n("./src/reddit/components/Econ/CoinsModalHeader/index.tsx"),
				P = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				B = n("./src/reddit/icons/svgs/Minus/index.tsx"),
				A = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				S = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.m.less"),
				M = n.n(S);
			const {
				fbt: U
			} = n("./node_modules/fbt/lib/FbtPublic.js"), F = Object(c.c)({
				userCoins: C.d
			}), H = {
				getCoinPacks: e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const r = n(),
						c = Object(g.ab)(r, {
							postId: e,
							disallowProfile: !0
						});
					if (!c) throw new Error("Post does not belong to a subreddit");
					const i = await ((e, t) => Object(m.a)(e, Object.assign(Object.assign({}, p), {
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
				showToast: x.e
			};
			var T = Object(r.b)(F, H)(Object(k.a)(e => {
					let {
						getCoinPacks: t,
						isCreatingVote: n,
						onCancel: r,
						onPredict: c,
						pollId: a,
						showToast: d,
						userCoins: u
					} = e;
					const [m, p] = Object(s.useState)(0), [b, g] = Object(s.useState)(null);
					return Object(s.useEffect)(() => {
						(async () => {
							if (!b) try {
								const e = await t(a);
								e.length || (d({
									duration: 5e3,
									kind: j.b.Error,
									text: U._("Error: Subreddit is not configured with coin packs", null, {
										hk: "2t8uz0"
									})
								}), r()), g(e)
							} catch (e) {
								d({
									duration: 5e3,
									kind: j.b.Error,
									text: U._("Error: Failed to fetch coin packs, please try again later", null, {
										hk: "2aROIr"
									})
								}), r()
							}
						})()
					}, [b, t, r, a, d]), o.a.createElement("div", null, o.a.createElement(_.a, {
						onAddCoins: l.promptUserToBuyMoreCoins,
						onCancel: r,
						title: U._("Predict the Future", null, {
							hk: "4bHA0N"
						}),
						userCoins: u
					}), o.a.createElement("div", {
						className: M.a.modalContent
					}, o.a.createElement("div", {
						className: M.a.wagerSelector
					}, o.a.createElement("button", {
						className: M.a.wagerSelectorButton,
						onClick: e => {
							e.preventDefault(), b && 0 !== m && p(m - 1)
						}
					}, o.a.createElement(B.a, {
						className: M.a.wagerSelectorButtonIcon
					})), b ? o.a.createElement("div", {
						className: M.a.wagerSelectorAmount
					}, o.a.createElement(N.a, {
						className: M.a.coinIcon
					}), " ", b[m].coins) : o.a.createElement(P.a, {
						sizePx: 24
					}), o.a.createElement("button", {
						className: M.a.wagerSelectorButton,
						onClick: e => {
							e.preventDefault(), b && m !== b.length - 1 && p(m + 1)
						}
					}, o.a.createElement(A.a, {
						className: M.a.wagerSelectorButtonIcon
					}))), o.a.createElement("button", {
						className: Object(i.a)(M.a.predictButton, {
							[M.a.isFetchingCoinPacks]: !b
						}),
						disabled: !b || n,
						onClick: e => {
							e.preventDefault(), b && c(b[m])
						}
					}, n ? o.a.createElement(P.a, {
						sizePx: 16
					}) : U._("Predict to Win Coins", null, {
						hk: "SjKBe"
					})), o.a.createElement("div", {
						className: M.a.disclaimer
					}, U._("You must be over 18 to use Predictions. Predictions don’t offer an opportunity to win real money or prizes. Your username and prediction is viewable by other redditors.", null, {
						hk: "FMAjt"
					}))))
				})),
				D = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				q = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				L = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				V = n.n(L);
			var G = e => {
					let {
						isSelected: t,
						onClick: n,
						option: s,
						resolvedOptionId: r,
						votePercentage: c
					} = e;
					const a = r === s.id,
						d = !!r;
					return o.a.createElement("button", {
						className: Object(i.a)(V.a.optionButton, {
							[V.a.hasVoted]: null !== s.userStakeAmount,
							[V.a.isCorrect]: a,
							[V.a.isSelected]: t
						}),
						disabled: d,
						onClick: n
					}, o.a.createElement("div", {
						className: V.a.optionBody
					}, a && o.a.createElement(q.a, {
						className: V.a.checkmarkIcon
					}), o.a.createElement("div", {
						className: V.a.optionText
					}, s.text), s.userStakeAmount && o.a.createElement("div", {
						className: V.a.optionStake
					}, o.a.createElement(D.a, {
						className: V.a.coinIcon
					}), " ", s.userStakeAmount)), c && c > 0 && o.a.createElement("div", {
						className: V.a.optionPercentage,
						style: {
							width: "".concat(c, "%")
						}
					}, " "))
				},
				z = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				W = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				R = n.n(W);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = e => {
				let {
					endsAt: t,
					resolvedOptionId: n
				} = e;
				return Date.now() > t ? o.a.createElement(o.a.Fragment, null, o.a.createElement(z.a, {
					className: R.a.clockIcon
				}), n ? J._("Prediction ended", null, {
					hk: "3o79Ig"
				}) : J._("Ended. Awaiting results", null, {
					hk: "1szagh"
				})) : J._("Prediction ends in {expirationDuration}", [J._param("expirationDuration", Object(a.a)(new Date(t), !0))], {
					hk: "3ysXEE"
				})
			};
			var Q = e => {
					let {
						endsAt: t,
						resolvedOptionId: n,
						totalStakeAmount: s
					} = e;
					return o.a.createElement("div", {
						className: R.a.statusBar
					}, s > 0 && o.a.createElement(o.a.Fragment, null, o.a.createElement(N.a, {
						className: R.a.coinIcon
					}), s, " ", J._("prize pool", null, {
						hk: "40MUgn"
					}), o.a.createElement("div", {
						className: R.a.divider
					}, "·")), o.a.createElement(Z, {
						endsAt: t,
						resolvedOptionId: n
					}))
				},
				X = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				K = n.n(X);
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $ = Object(c.c)({
				isEditing: O.G,
				prediction: v.f,
				pollId: v.a,
				post: g.N,
				subredditOrProfile: g.ab,
				userCoins: C.d
			}), ee = {
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
							return Object(m.a)(e, Object.assign(Object.assign({}, b), {
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
						return e(h({
							pollId: s,
							prediction: d.poll
						})), d.poll
					}
				},
				showToast: x.e
			}, te = Object(d.t)({
				isCommentsPage: d.w
			}), ne = e => {
				let {
					className: t,
					isCommentsPage: n,
					isEditing: r,
					onPredictionVote: c,
					prediction: d,
					pollId: u,
					subredditOrProfile: m,
					showToast: p,
					userCoins: b
				} = e;
				const [g, f] = Object(s.useState)(!1), [h, x] = Object(s.useState)(null);
				if (!u || !d || !m) return o.a.createElement(I, null);
				const {
					endsAt: v,
					options: O,
					resolvedOptionId: C,
					totalStakeAmount: E,
					userSelection: w
				} = d, y = v < Date.now(), k = () => {
					x(null)
				}, _ = n ? Object(i.a)(t, K.a.container, K.a.forCommentsPage, {
					[K.a.isEditing]: r
				}) : Object(i.a)(t, K.a.container);
				return o.a.createElement("div", {
					className: _,
					onClick: e => {
						d && e.stopPropagation()
					}
				}, o.a.createElement("div", {
					className: K.a.poll
				}, O.map(e => o.a.createElement(G, {
					key: "prediction-option-".concat(e.id),
					isSelected: h === e.id,
					option: e,
					onClick: () => (e => {
						y || w && w !== e.id || x(e.id)
					})(e),
					resolvedOptionId: C,
					votePercentage: (w || y) && e.totalStakeAmount ? Math.floor(e.totalStakeAmount / E * 100) : null
				}))), o.a.createElement(Q, {
					endsAt: v,
					resolvedOptionId: C,
					totalStakeAmount: E
				}), !!h && o.a.createElement(T, {
					isCreatingVote: g,
					onOverlayClick: k,
					onCancel: k,
					onPredict: async e => {
						if (e.coins > b) Object(l.promptUserToBuyMoreCoins)();
						else {
							if (y) return p({
								duration: 5e3,
								kind: j.b.Error,
								text: Y._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								})
							}), void x(null);
							if (!u || !h) throw new Error("Invalid arguments, optionId and pollId must be strings");
							f(!0);
							try {
								await c({
									coinPackageId: e.id,
									optionId: h,
									postId: u,
									price: e.coins
								}), p({
									duration: 5e3,
									kind: j.b.SuccessCommunity,
									text: Y._("Thanks! See if you're right in {timeToResult}", [Y._param("timeToResult", Object(a.a)(new Date(v), !0))], {
										hk: "3ZSdoo"
									})
								})
							} catch (t) {
								p({
									duration: 5e3,
									kind: j.b.Error,
									text: Y._("Error: Failed to make prediction, please try again later", null, {
										hk: "1tECsx"
									})
								})
							}
							f(!1), x(null)
						}
					},
					pollId: u,
					withOverlay: !0
				}))
			};
			t.default = te(Object(r.b)($, ee)(ne))
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
				return p
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
			async function p(e, t) {
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
					p = Object(c.c)(e, t, n),
					[b, g, f, h] = await Promise.all([l, u, m, p]);
				if (b.ok ? s.collections = b.body : s.errors.collections = b.error, g.ok) {
					const e = g.body;
					s.subscription = e.specialMemberships, s.communityRaw = e
				}
				return f.ok ? s.products = f.body : s.errors.products = f.error, h.ok ? (o()(s.badges, h.body.badges), s.userOwnedBadges = h.body.userOwnedBadges) : s.errors.userBadges = h.error, s
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
		"./src/reddit/icons/svgs/ClockFilled/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11.901 11.809C11.803 11.909 11.673 11.959 11.543 11.959C11.417 11.959 11.291 11.913 11.194 11.817L7.651 8.358C7.554 8.264 7.5 8.135 7.5 8V3C7.5 2.724 7.724 2.5 8 2.5C8.276 2.5 8.5 2.724 8.5 3V7.789L11.892 11.102C12.09 11.294 12.094 11.611 11.901 11.809ZM8 0C3.589 0 0 3.589 0 8C0 12.412 3.589 16 8 16C12.411 16 16 12.412 16 8C16 3.589 12.411 0 8 0Z",
				fill: "inherit"
			}))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.013a305b5d7fb134845e.js.map