// https://www.redditstatic.com/desktop2x/reddit-components-Economics-SubredditPremium-LFGBanner.396e6dca2315648160ee.js
// Retrieved at 8/29/2022, 11:20:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Economics-SubredditPremium-LFGBanner"], {
		"./node_modules/lodash/_arraySample.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e) {
				var t = e.length;
				return t ? e[s(0, t - 1)] : void 0
			}
		},
		"./node_modules/lodash/_baseSample.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arraySample.js"),
				r = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return s(r(e))
			}
		},
		"./node_modules/lodash/flattenDeep.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFlatten.js"),
				r = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? s(e, r) : []
			}
		},
		"./node_modules/lodash/forOwn.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseForOwn.js"),
				r = n("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, t) {
				return e && s(e, r(t))
			}
		},
		"./node_modules/lodash/sample.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arraySample.js"),
				r = n("./node_modules/lodash/_baseSample.js"),
				o = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (o(e) ? s : r)(e)
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/reddit/actions/economics/banners/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			const s = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				r = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				o = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				i = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
		},
		"./src/reddit/actions/economics/banners/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./src/reddit/endpoints/economics/banners.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/economics/banners/constants.ts");
			const i = Object(r.a)(o.c),
				a = Object(r.a)(o.d),
				c = Object(r.a)(o.a),
				d = Object(r.a)(o.b),
				u = e => async (t, n, r) => {
					let {
						apiContext: o
					} = r;
					const c = n();
					if (!c.user.account) return;
					if (c.economics.banners.dismissedBanners[e]) return;
					t(i(e));
					const d = await Object(s.b)(o(), e);
					t(a({
						subredditId: e,
						data: d
					}))
				}, l = (e, t) => async (n, r, o) => {
					let {
						apiContext: i
					} = o;
					n(c({
						subredditId: e,
						bannerType: t
					})), Object(s.c)(i(), e, t)
				}, m = (e, t) => async (n, r, o) => {
					let {
						apiContext: i
					} = o;
					n(d({
						subredditId: e,
						bannerType: t
					})), Object(s.e)(i(), e, t)
				}
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = "ECONOMICS__ME__ME_DATA_SUCCESS",
				r = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				o = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				o = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(a.a)(c.a),
				u = Object(a.a)(c.b),
				l = Object(a.a)(c.c),
				m = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const a = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						u = n();
					if (!u.economics.me.fetched || a && !u.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(i.a)(e, {
								method: "get",
								endpoint: `${o.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(r(), a);
						if (e.ok) {
							const n = e.body;
							a && !n.specialMemberships && (n.specialMemberships = {}), t(d(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						o = n.economics.me.data;
					if (!o) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(u());
						const t = `https://${o.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(r.b)({
								endpoint: t,
								method: s.mb.GET
							});
						n.ok && n.body && e(l(n.body))
					}
				}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return h
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const a = Object(s.a)(i.a),
				c = Object(s.a)(i.b),
				d = Object(s.a)(i.c),
				u = Object(s.a)(i.d),
				l = Object(s.a)(i.e),
				m = Object(s.a)(i.f),
				p = Object(s.a)(i.g),
				b = Object(s.a)(i.h),
				f = Object(s.a)(i.i),
				h = e => Object(r.h)(o.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "f", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/forOwn.js"),
				r = n.n(s),
				o = n("./src/reddit/actions/governance/errorToast.ts"),
				i = n("./src/reddit/endpoints/economics/emojis.ts"),
				a = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				d = n("./src/reddit/endpoints/governance/badges.ts"),
				u = n("./src/config.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t, n) {
				return Object(l.a)(e, {
					method: "get",
					endpoint: `${u.a.metaUrl}/products/${t}?owners=${n}` + "&types=emotes_pack,giphy"
				})
			}
			var p = n("./src/reddit/models/Badge/index.ts"),
				b = n("./src/reddit/models/Badge/managementPage.ts"),
				f = n("./src/reddit/models/Product/index.ts"),
				h = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				g = n("./src/reddit/selectors/economics.ts"),
				_ = n("./src/reddit/selectors/products.ts"),
				y = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				E = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function O(e) {
				return !!e && "removeBadge" === e.type
			}

			function v(e) {
				if (!O(e)) return e
			}
			const S = () => async (e, t, n) => {
				let {
					apiContext: s
				} = n;
				if (!t().user.account) return;
				await e(Object(y.b)({
					includeMemberships: !0
				}));
				const r = t().economics.me.data.specialMemberships || {},
					o = Object.keys(r);
				if (o.length) {
					const t = await Object(a.e)(s(), o);
					t.ok && e(Object(E.g)(t.body))
				}
			}, C = (e, t) => async (n, s, r) => {
				let {
					apiContext: o
				} = r;
				const i = s().user.account,
					a = s().economics.subredditPremium[e],
					d = !a || a.status !== h.a.Fetched || t;
				if (i && d) {
					const t = await Object(c.a)(o(), e, i.id);
					n(Object(E.i)(t))
				}
			}, j = e => async (t, n, s) => {
				let {
					apiContext: r
				} = s;
				const i = n(),
					a = i.user.account,
					c = Object(g.f)(i, e.subredditId),
					u = Object.keys(c).map(e => c[e]).filter(Boolean);
				if (a && e.badge) {
					let n, s;
					n = e.placement === p.a.First ? c[b.a.Loyalty] : e.placement === p.a.Second ? c[b.a.Achievement] : c[b.a.Cosmetic], t(Object(E.a)({
						...e,
						badge: v(e.badge),
						currentAppliedBadges: u,
						userId: a.id
					})), O(e.badge) && n ? s = await Object(d.a)(r(), e.subredditId, n.id, !1) : O(e.badge) || (s = await Object(d.a)(r(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(E.a)({
						...e,
						badge: n,
						currentAppliedBadges: u,
						userId: a.id
					})), Object(o.a)(t, s.error))
				}
			}, w = (e, t) => async (n, s, r) => {
				let {
					apiContext: o
				} = r;
				await n(C(e, !0));
				const i = s().economics.subredditPremium[e];
				if (i && i.status === h.a.Fetched) {
					const s = i.data.userOwnedBadges.find(e => e.type === t.id);
					s && (n(j({
						badge: s,
						subredditId: e,
						placement: s.placement
					})), n(Object(E.d)(b.c.MyBadges)))
				}
			}, I = e => async (t, n, s) => {
				let {
					apiContext: a
				} = s;
				const c = n().user.account,
					d = !n().economics.emotes[e],
					u = !n().economics.gifs[e];
				if (c && (d || u)) {
					const [n, s] = await Promise.all([Object(i.b)(a(), e), m(a(), e, c.id)]);
					if (!s.ok) return void Object(o.a)(t, s.error);
					const d = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					r()(s.body, e => {
						e.type === f.a.EmotesPack ? d.emotes.push(e) : e.type === f.a.Giphy && d.giphy.push(e)
					}), t(Object(E.e)({
						subredditId: e,
						products: d
					}))
				}
			}, x = (e, t, n) => async (s, r, o) => {
				let {
					apiContext: i
				} = o;
				if (await s(C(e, !0)), n && t) {
					const n = r(),
						o = Object(g.f)(n, e),
						i = Object(_.a)(n, t);
					if (!o[Object(b.d)(i.placement)] && i) {
						const t = Object(g.l)(n, {
							subredditId: e,
							badge: i
						});
						t && await s(j({
							badge: t,
							subredditId: e
						}))
					}
					s(Object(E.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, P = e => async (t, n, s) => {
				let {
					apiContext: r
				} = s;
				const {
					wallet: o
				} = await Object(a.c)(r(), e);
				t(Object(E.f)({
					wallet: o
				})), await t(C(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/actions/toaster.ts"),
				r = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				o = n("./src/reddit/models/Toast/index.ts");

			function i(e, t) {
				e(Object(s.f)({
					duration: 5e3,
					kind: o.b.Error,
					text: Object(r.a)(t)
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/InteractiveBadgesBanner/Success/index.m.less": function(e, t, n) {
			e.exports = {
				checkContainer: "vLDY173Vj0GmHGlQQPGsJ",
				check: "_1PIZA9aT40J0xlDyxPr-bH",
				col: "_2ueaZW2VmYFP3k8IpO59IR",
				explanation: "_3X0Y99cKtJPNprvvqIyeOk",
				header: "_2tkUUsImD0I5jWUKt77ZAH",
				img: "_2qJnksxaH_YpcbYwW6ggtA",
				tutorial: "_13vSv0_15yzB5YMudJnPJt"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/Card/index.m.less": function(e, t, n) {
			e.exports = {
				button: "aq9ZqWnC2Xwbkzhr1C8hJ",
				container: "m7z0uN9mDxptXfSHafLTw",
				cover: "xyt2inBPUfRQ_Efcqt_Ab",
				description: "KX_LU59tHaCYNg437pykk",
				freeCard: "_3qfrF-S8Mak5I9Y5F6oJFF",
				fullWidth: "_3c3Kr_1Q_oJTZvtAYy1N-6",
				img: "_2VRR41zg0aqqAAjxIzZGz0",
				title: "gRNqnS3tiW9yK_OX8aSV3",
				premiumCard: "_1J7mAZ1dsFqB0jBKT2A-Ry"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/index.m.less": function(e, t, n) {
			e.exports = {
				container: "yQNQSPTLUWPNXeKzlqNu6",
				cover: "_24vnSg5ae29l97QtBxVV3-",
				divider: "_2fEN3CscLjkwMnMGeO-Gbi",
				trial: "_2o92N1SUEIcx7a3P7K3tJT"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Example/index.m.less": function(e, t, n) {
			e.exports = {
				container: "ez89jyuMsOzC0NO44ciD1",
				cover: "i990kFkfa3m_m5S_U0sma",
				description: "a7ZSke4zXeciCfufC-OWq",
				image: "_29JFielihsv0FuuO4vTOLb",
				preview: "_1gyHt90KLC-GJrapFWERJx",
				redo: "_1sHLf9k2ibP_C7Mx2o9Xcf",
				title: "_2F4sRR7iIwaKQvPPvqmiX-"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Header/index.m.less": function(e, t, n) {
			e.exports = {
				crown: "YKwhmGUT9303yZWJlH-QT",
				heading: "_2-PLWgbnP8j-2wARSQiPC6",
				prompt: "_34l-xSb_Lf_m0uJryaeQRG",
				sponsorship: "_2gij23f36Hizly0kdb-hWD",
				text: "NgOyQpTLN-QLfbsXr_kxQ"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/Option/index.m.less": function(e, t, n) {
			e.exports = {
				container: "bIIqFNgEct-dJixmNGzH8",
				controller: "U9kRmM-8uzmN81_cyWilS",
				planet: "OsL6tpn4UXSU4UwEHQpxf",
				user: "_3Q0T-a4HcsAzBW8-YqMrdZ",
				selected: "_2rCRpMr2CIl-rgIl_ikgYT",
				triangle: "_1SxOqeKmgCBvhzxL632u7q"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1-fWFAeAioWlCembFKUHMX",
				container: "_1ftim-rZF9xZL_CTpqF85f",
				title: "_3sTbD7175DPlp68I03ayUK"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.m.less": function(e, t, n) {
			e.exports = {
				choiceSelected: "_2_PAZW9RwEcRVWBO0fhHa6",
				close: "_308nelFEzZOnhnqbW5RpPv",
				dismissedContainer: "_2EAX2PYbs1gAVQGLJ5XaB9",
				dismissedText: "DBgaCJDh9aY3K_vHjS9Q3",
				showContainer: "_2BkQlYxIdIBMsKRROdxSSP",
				successContainer: "_1wtFNjoeAGTIux27TBYRFN",
				claim: "_2h8JoT5ednzNOqKdVKCHlM",
				container: "_26wdyRSALASUyhdTxV6U4k",
				content: "_3D6as82_3SjWTXYShWM5lz",
				example: "_3jYACS0eVj0IZYGd02X11f",
				header: "_12kLHf53On8M30LOB009-F"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				l = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/config.ts"),
				b = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				f = n("./src/reddit/components/Economics/SubredditPremium/InteractiveBadgesBanner/Success/index.m.less"),
				h = n.n(f);
			const g = {
					description: () => s.fbt._("Add your new emoji to comments! Use the action in the bottom right corner to add an emoji.", null, {
						hk: "3bQZrx"
					}),
					src: `${p.a.assetPath}/img/memberships/banners/how_to_use_emoji.gif`
				},
				_ = {
					description: () => s.fbt._("Open 'My Badges' in the Sidebar to apply your badge.", null, {
						hk: "rQPFZ"
					}),
					src: `${p.a.assetPath}/img/memberships/banners/how_to_apply_badge.gif`
				},
				y = {
					description: () => s.fbt._("Want to change your badge? Visit the Gallery in the Sidebar to view the latest styles.", null, {
						hk: "71rqs"
					}),
					src: `${p.a.assetPath}/img/memberships/banners/how_to_apply_badge.gif`
				};

			function E(e) {
				const t = (e.hideEmoji ? [] : [g]).concat(e.boughtBadge ? _ : y);
				return o.a.createElement("article", {
					className: Object(d.a)(e.className, h.a.container)
				}, o.a.createElement("header", {
					className: h.a.header
				}, o.a.createElement("div", {
					className: h.a.checkContainer
				}, o.a.createElement(b.a, {
					className: h.a.check
				})), s.fbt._("Congrats! Here's how to use it", null, {
					hk: "2IUXGc"
				})), o.a.createElement("div", {
					className: h.a.tutorial
				}, t.map(e => {
					let {
						description: t,
						src: n
					} = e;
					return o.a.createElement("div", {
						className: h.a.col,
						key: t()
					}, o.a.createElement("img", {
						className: h.a.img,
						src: n
					}), o.a.createElement("div", {
						className: h.a.explanation
					}, t()))
				})))
			}
			var O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				v = n("./src/reddit/contexts/ApiContext.tsx"),
				S = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/endpoints/economics/banners.ts"),
				j = n("./src/reddit/endpoints/economics/emojis.ts"),
				w = n("./src/reddit/helpers/economics/membershipPage.ts"),
				I = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				x = n("./src/reddit/icons/svgs/Close/index.tsx"),
				P = n("./src/reddit/models/Toast/index.ts"),
				N = n("./src/reddit/selectors/economics.ts"),
				k = n("./src/reddit/selectors/telemetry.ts"),
				B = n("./node_modules/uuid/v4.js"),
				A = n.n(B),
				D = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/Card/index.m.less"),
				M = n.n(D);

			function F(e) {
				return o.a.createElement("article", {
					className: Object(d.a)(e.className, M.a.container, {
						[M.a.fullWidth]: !!e.fullWidth
					})
				}, o.a.createElement("div", {
					className: M.a.cover
				}), o.a.createElement("header", {
					className: M.a.title
				}, e.title), o.a.createElement("img", {
					className: M.a.img,
					src: e.img
				}), o.a.createElement("div", {
					className: M.a.description
				}, e.description), o.a.createElement(S.r, {
					className: M.a.button,
					onClick: e.onClaim
				}, e.cta))
			}
			var T = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts"),
				U = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/index.m.less"),
				L = n.n(U);

			function R(e) {
				const {
					className: t,
					platform: n,
					playerType: r,
					region: i,
					userIsSubscriber: a,
					onClaim: c
				} = e, u = Object(T.d)({
					platform: n,
					playerType: r,
					region: i,
					style: "bw"
				}), l = Object(T.d)({
					platform: n,
					playerType: r,
					region: i,
					style: "color"
				});
				return o.a.createElement("div", {
					className: Object(d.a)(L.a.container, t)
				}, !a && o.a.createElement(o.a.Fragment, null, o.a.createElement(F, {
					className: L.a.freeCard,
					cta: s.fbt._("claim", null, {
						hk: "2Ru6yU"
					}),
					img: u,
					title: s.fbt._("Claim Free Badge", null, {
						hk: "3w9WUY"
					}),
					onClaim: () => c(!1)
				}), o.a.createElement("div", {
					className: L.a.divider
				}, o.a.createElement("div", {
					className: L.a.cover
				}), "OR"), o.a.createElement(F, {
					className: L.a.premiumCard,
					cta: s.fbt._("become a supporter", null, {
						hk: "4EFiLI"
					}),
					description: s.fbt._("Colored badge + dozens more, emojis and GIFs in comments", null, {
						hk: "4zbqFO"
					}),
					img: l,
					title: s.fbt._("Claim Premium Badge", null, {
						hk: "2UVCao"
					}),
					onClaim: () => c(!0)
				}), o.a.createElement("img", {
					className: L.a.trial,
					src: `${p.a.assetPath}/img/memberships/banners/free-trial.png`
				})), a && o.a.createElement(F, {
					fullWidth: !0,
					className: L.a.fullWidthCard,
					cta: s.fbt._("claim", null, {
						hk: "3XIQIJ"
					}),
					img: l,
					title: s.fbt._("Claim Premium Badge", null, {
						hk: "28iPPD"
					}),
					onClaim: () => c(!1)
				}))
			}
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var G = n("./node_modules/lodash/sample.js"),
				$ = n.n(G),
				Y = n("./node_modules/react-motion/lib/react-motion.js"),
				H = n("./src/reddit/icons/svgs/Replay/index.tsx"),
				q = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Example/index.m.less"),
				W = n.n(q);
			const z = {
				stiffness: 210,
				damping: 20
			};

			function K() {
				return {
					platform: $()(Object.keys(T.a)) || "pc",
					playerType: $()(Object.keys(T.b)) || "casual",
					region: $()(Object.keys(T.c)) || "nae"
				}
			}
			class Z extends o.a.Component {
				constructor(e) {
					super(e), this.state = K()
				}
				render() {
					const {
						platform: e,
						playerType: t,
						region: n
					} = this.state, r = T.a[e], i = T.b[t], a = T.c[n];
					return o.a.createElement("article", {
						className: Object(d.a)(W.a.container, this.props.className)
					}, o.a.createElement("div", {
						className: W.a.cover
					}), o.a.createElement("header", {
						className: W.a.title
					}, s.fbt._("Example", null, {
						hk: "1siPoi"
					})), o.a.createElement(Y.TransitionMotion, {
						defaultStyles: [{
							key: Object(T.d)({
								...this.state,
								style: "color"
							}),
							style: {
								rotation: 0
							}
						}],
						styles: [{
							key: Object(T.d)({
								...this.state,
								style: "color"
							}),
							style: {
								rotation: Object(Y.spring)(0, z)
							}
						}],
						willEnter: () => ({
							rotation: -180
						}),
						willLeave: () => ({
							rotation: Object(Y.spring)(180, z)
						})
					}, e => o.a.createElement("div", {
						className: W.a.preview
					}, e.map(e => o.a.createElement("img", {
						className: W.a.image,
						key: e.key,
						src: e.key,
						style: {
							transform: `rotateY(${e.style.rotation}deg)`
						}
					})))), o.a.createElement("footer", {
						className: W.a.description
					}, `${a}, ${r}, ${i}`), o.a.createElement(H.a, {
						className: W.a.redo,
						onClick: () => this.setState(K())
					}))
				}
			}
			var Q = n("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				J = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Header/index.m.less"),
				V = n.n(J);
			const X = Object(c.c)({
				meta: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(N.r)(e, n)
				},
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.subreddits.models[n]
				}
			});
			var ee = Object(i.b)(X)((function(e) {
					const t = e.subreddit ? e.subreddit.displayText : "the community";
					return o.a.createElement("header", {
						className: Object(d.a)(V.a.container, e.className)
					}, o.a.createElement("div", {
						className: V.a.heading
					}, s.fbt._("looking for game badge", null, {
						hk: "1fWc1w"
					})), o.a.createElement("div", {
						className: V.a.prompt
					}, s.fbt._("Find New Gamers to Play Together", null, {
						hk: "3voe2T"
					}), o.a.createElement("div", {
						className: V.a.sponsorship
					}, o.a.createElement("img", {
						className: V.a.crown,
						src: Q.a
					}), s.fbt._("Sponsored by {members}", [s.fbt._param("members", e.meta.memberAltPlural)], {
						hk: "2QHfal"
					}))), o.a.createElement("div", {
						className: V.a.text
					}, s.fbt._("Get a badge that lets you find new teammates in {community}.", [s.fbt._param("community", t)], {
						hk: "2GYrVD"
					}), " ", s.fbt._("Specify your region, platform, and your play style for the best match.", null, {
						hk: "1HilaD"
					}), " ", s.fbt._("The badge helps other players find you, and makes it easier for others to start a conversation in Reddit chat.", null, {
						hk: "2TBy4p"
					})))
				})),
				te = n("./src/higherOrderComponents/asTooltip.tsx"),
				ne = n("./src/reddit/controls/Dropdown/index.tsx"),
				se = n("./src/reddit/controls/Dropdown/Row.tsx"),
				re = n("./src/reddit/icons/svgs/Controller/index.tsx"),
				oe = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				ie = n("./src/reddit/icons/svgs/Planet/index.tsx"),
				ae = n("./src/reddit/icons/svgs/User/index.tsx"),
				ce = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/Option/index.m.less"),
				de = n.n(ce);
			const ue = new Map;
			ue.set(T.a, "LFG_BANNER_PLATFORM_DROPDOWN"), ue.set(T.b, "LFG_BANNER_PLAYERTYPE_DROPDOWN"), ue.set(T.c, "LFG_BANNER_REGION_DROPDOWN");
			const le = new Map;
			le.set(T.a, "platform"), le.set(T.b, "playerType"), le.set(T.c, "region");
			const me = new Map;
			me.set(T.a, o.a.createElement(re.a, {
				className: de.a.controller
			})), me.set(T.b, o.a.createElement(ae.a, {
				className: de.a.user
			})), me.set(T.c, o.a.createElement(ie.a, {
				className: de.a.planet
			}));
			const pe = Object(te.a)(ne.a);
			var be, fe = Object(O.c)((function(e) {
					const t = me.get(e.type),
						n = ue.get(e.type);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(d.a)(de.a.container, e.className, {
							[de.a.selected]: !!e.selected
						}),
						id: n,
						onClick: e.onToggleDropdown
					}, t, e.text, o.a.createElement(oe.b, {
						className: de.a.triangle
					})), o.a.createElement(pe, {
						tooltipId: n,
						isOpen: !!e.tooltipVisible
					}, Object.keys(e.type).map((t, n) => o.a.createElement(se.b, {
						"data-redditStyle": !0,
						key: n,
						index: n,
						displayText: String(e.type[t]),
						onClick: () => {
							e.onChange(t), e.sendEvent(n => {
								const s = k.n(n);
								return {
									source: "meta",
									action: "click",
									noun: "lfg_banner_customize_badge",
									correlationId: e.correlationId,
									...s,
									actionInfo: {
										...s.actionInfo,
										paneName: le.get(e.type),
										reason: t
									},
									subreddit: k.ib(n)
								}
							})
						}
					}))))
				})),
				he = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/index.m.less"),
				ge = n.n(he),
				_e = Object(O.c)(class extends o.a.Component {
					constructor() {
						super(...arguments), this.state = {
							selectedPlatform: void 0,
							selectedPlayerType: void 0,
							selectedRegion: void 0,
							visibleDropdown: void 0
						}
					}
					render() {
						const {
							className: e,
							onGenerate: t
						} = this.props, {
							selectedPlatform: n,
							selectedPlayerType: r,
							selectedRegion: i,
							visibleDropdown: a
						} = this.state, c = n ? T.a[n] : s.fbt._("platform", null, {
							hk: "4cCVan"
						}), u = r ? T.b[r] : s.fbt._("player type", null, {
							hk: "20Xii5"
						}), l = i ? T.c[i] : s.fbt._("region", null, {
							hk: "30zv9O"
						});
						return o.a.createElement("article", {
							className: Object(d.a)(ge.a.container, e)
						}, o.a.createElement("header", {
							className: ge.a.title
						}, s.fbt._("Setup Your Badge", null, {
							hk: "21LcIU"
						})), o.a.createElement(fe, {
							correlationId: this.props.correlationId,
							selected: !!i,
							tooltipVisible: "region" === a,
							text: l,
							type: T.c,
							onChange: e => this.setState({
								selectedRegion: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "region"
							}))
						}), o.a.createElement(fe, {
							correlationId: this.props.correlationId,
							selected: !!n,
							tooltipVisible: "platform" === a,
							text: c,
							type: T.a,
							onChange: e => this.setState({
								selectedPlatform: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "platform"
							}))
						}), o.a.createElement(fe, {
							correlationId: this.props.correlationId,
							selected: !!r,
							tooltipVisible: "playerType" === a,
							text: u,
							type: T.b,
							onChange: e => this.setState({
								selectedPlayerType: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "playerType"
							}))
						}), o.a.createElement(S.l, {
							className: ge.a.button,
							disabled: !n || !r || !i,
							onClick: () => {
								n && r && i && (t({
									platform: n,
									playerType: r,
									region: i
								}), this.props.sendEvent(e => ({
									source: "meta",
									action: "click",
									noun: "lfg_banner_generate_badge",
									correlationId: this.props.correlationId,
									...k.n(e),
									subreddit: k.ib(e)
								})))
							}
						}, s.fbt._("Generate Badge", null, {
							hk: "1FRc45"
						})))
					}
				}),
				ye = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.m.less"),
				Ee = n.n(ye);
			! function(e) {
				e.CanClaim = "canclaim", e.Claimed = "claimed", e.Dismissed = "dismissed", e.Generating = "generating", e.Hidden = "hidden", e.Select = "select"
			}(be || (be = {}));
			class Oe extends o.a.Component {
				constructor(e) {
					super(e), this.handleClaim = async e => {
						const {
							subscriberState: t,
							subreddit: n
						} = this.props, {
							selectedRegion: s,
							selectedPlatform: r,
							selectedPlayerType: o
						} = this.state;
						if (!(s && r && o && n && t !== N.a.DontKnow)) return null;
						const i = `${s}_${r}_${o}_badge`,
							a = await Object(j.a)(this.props.apiContext(), {
								productId: i,
								subredditId: this.props.subredditId
							});
						a.ok ? (this.setState({
							show: be.Claimed
						}), this.props.onDismissBanner(), this.props.onBadgeClaimed(i)) : this.props.onError(a.error), e && this.props.onOpenLandingPage(n, this.correlationId), this.props.sendEvent(t => {
							const n = k.n(t);
							return {
								source: "meta",
								action: "click",
								noun: e && this.correlationId ? "lfg_banner_claim_premium" : "lfg_banner_claim",
								correlationId: this.correlationId,
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: i,
									paneName: C.a.LFG
								},
								subreddit: k.ib(t)
							}
						})
					}, this.handleDismiss = () => {
						this.state.show === be.Claimed ? this.setState({
							show: be.Hidden
						}) : (this.setState({
							show: be.Dismissed
						}), this.props.sendEvent(e => {
							const t = k.n(e);
							return {
								source: "meta",
								action: "click",
								noun: "lfg_banner_dismiss",
								correlationId: this.correlationId,
								...t,
								actionInfo: {
									...t.actionInfo,
									paneName: C.a.LFG
								},
								subreddit: k.ib(e)
							}
						})), this.props.onDismissBanner()
					}, this.handleUndoDismiss = () => {
						this.setState({
							show: be.Select
						}), this.props.onUndismissBanner(), this.props.sendEvent(e => {
							const t = k.n(e);
							return {
								source: "meta",
								action: "click",
								noun: "lfg_banner_undo_dismiss",
								correlationId: this.correlationId,
								...t,
								actionInfo: {
									...t.actionInfo,
									paneName: C.a.LFG
								},
								subreddit: k.ib(e)
							}
						})
					}, this.state = {
						show: be.Hidden
					}, this.correlationId = A()()
				}
				componentDidMount() {
					!1 === this.props.isBannerDismissed ? this.handleBannerShownFirstTime() : void 0 === this.props.isBannerDismissed && this.props.onFetchDismissedBanners()
				}
				componentDidUpdate(e) {
					void 0 === e.isBannerDismissed && !1 === this.props.isBannerDismissed && this.handleBannerShownFirstTime()
				}
				handleBannerShownFirstTime() {
					this.setState({
						show: be.Select
					}), this.props.sendEvent(e => {
						const t = k.n(e);
						return {
							source: "meta",
							action: "view",
							noun: "lfg_banner",
							correlationId: this.correlationId,
							...t,
							actionInfo: {
								...t.actionInfo,
								paneName: C.a.LFG
							},
							subreddit: k.ib(e)
						}
					})
				}
				render() {
					const {
						className: e,
						subredditId: t,
						subscriberState: n,
						userIsLoggedIn: r
					} = this.props, {
						show: i,
						selectedRegion: a,
						selectedPlatform: c,
						selectedPlayerType: u
					} = this.state;
					return r && n !== N.a.DontKnow && i !== be.Hidden ? this.state.show === be.Dismissed ? o.a.createElement("div", {
						className: Object(d.a)(Ee.a.dismissedContainer, e)
					}, o.a.createElement("div", {
						className: Ee.a.dismissedText
					}, s.fbt._("Ok, we won't show you this again.", null, {
						hk: "4z33KK"
					})), o.a.createElement(S.l, {
						onClick: this.handleUndoDismiss
					}, s.fbt._("undo", null, {
						hk: "1A9z3Y"
					}))) : this.state.show === be.Claimed ? o.a.createElement("div", {
						className: Object(d.a)(Ee.a.successContainer, e)
					}, o.a.createElement(x.a, {
						className: Ee.a.close,
						onClick: this.handleDismiss
					}), o.a.createElement(E, {
						boughtBadge: !0,
						hideEmoji: !0
					})) : o.a.createElement("article", {
						className: Object(d.a)(Ee.a.container, e)
					}, o.a.createElement(ee, {
						className: Ee.a.header,
						subredditId: t
					}), o.a.createElement("div", {
						className: Ee.a.content
					}, o.a.createElement(_e, {
						correlationId: this.correlationId,
						onGenerate: e => this.setState(() => ({
							show: be.CanClaim,
							selectedRegion: e.region,
							selectedPlatform: e.platform,
							selectedPlayerType: e.playerType
						}))
					}), i === be.Select && o.a.createElement(Z, {
						className: Ee.a.example
					}), i === be.CanClaim && a && c && u && o.a.createElement(R, {
						className: Ee.a.claim,
						platform: c,
						playerType: u,
						region: a,
						userIsSubscriber: n === N.a.Subscribed,
						onClaim: e => this.handleClaim(e)
					})), o.a.createElement(x.a, {
						className: Ee.a.close,
						onClick: this.handleDismiss
					})) : null
				}
			}
			const ve = Object(c.c)({
					isBannerDismissed: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(N.g)(e, n, C.a.LFG)
					},
					subreddit: (e, t) => {
						let {
							subredditId: n
						} = t;
						return e.subreddits.models[n]
					},
					subscriberState: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(N.x)(e, n)
					},
					userIsLoggedIn: e => !!e.user.account
				}),
				Se = Object(O.c)(Oe);
			t.default = Object(v.b)(Object(i.b)(ve, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					onDismissBanner: () => e(Object(u.a)(n, C.a.LFG)),
					onError: t => e(Object(m.f)({
						duration: 5e3,
						kind: P.b.Error,
						text: Object(I.a)(t)
					})),
					onFetchDismissedBanners: () => e(Object(u.b)(n)),
					onBadgeClaimed: t => {
						e(Object(l.c)(n, t))
					},
					onOpenLandingPage: (t, n) => {
						e(Object(a.b)(Object(w.a)(t.name, n)))
					},
					onUndismissBanner: () => e(Object(u.c)(n, C.a.LFG))
				}
			})(Se))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, n) {
			"use strict";
			var s, r, o, i;

			function a(e) {
				const {
					platform: t,
					playerType: n,
					region: s,
					style: r
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${r}/${s}_${t}_${n}_${r}.svg`
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})), n.d(t, "c", (function() {
					return o
				})), n.d(t, "d", (function() {
					return a
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(s || (s = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(r || (r = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(o || (o = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(i || (i = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				r = n("./node_modules/lodash/flattenDeep.js"),
				o = n.n(r),
				i = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const a = `${s.a.assetPath}/img/memberships/paywall/crown.gif`,
				c = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				d = new Set(o()(Object.keys(i.a).map(e => Object.keys(i.b).map(t => Object.keys(i.c).map(n => `${n}_${e}_${t}_badge`)))))
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, r, o = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts");
			async function a(e, t, n, s) {
				return Object(i.a)(e, {
					endpoint: `${o.a.metaUrl}/storage/${t}/me/${n}`,
					method: "patch",
					data: s
				})
			}
			async function c(e, t) {
				const n = await async function(e, t, n) {
					return Object(i.a)(e, {
						endpoint: `${o.a.metaUrl}/storage/${t}/me/${n}`,
						method: "get"
					})
				}(e, t, s.UpsellBanners);
				return n.ok && n.body || {}
			}
			async function d(e, t, n, r) {
					const o = await c(e, t),
						i = {
							...o,
							[n]: r
						};
					return (await a(e, t, s.UpsellBanners, i)).ok ? i : o
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(s || (s = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.WalletRegistration = "walletRegistration"
				}(r || (r = {}));
			const u = async (e, t, n) => d(e, t, n, !0), l = async (e, t, n) => d(e, t, n, !1), m = (e, t) => a(e, t, s.UpsellBanners, Object.keys(r).reduce((e, t) => (e[r[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");
			const o = (e, t) => Object(r.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
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
				i = (e, t) => Object(r.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts"),
				a = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function d(e, t) {
				return Object(i.a)(e, {
					endpoint: `${s.a.metaUrl}/communities/${t.subredditId}/me`,
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

			function u(e, t) {
				return Object(i.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function l(e, t) {
				return Object(i.a)(e, {
					endpoint: `${s.a.metaUrl}/orders`,
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
				return Object(i.a)(Object(r.a)(e, [o.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(c.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function p(e, t) {
				const n = await Object(i.a)(e, {
					endpoint: `${s.a.metaUrl}/orders`,
					method: "post",
					data: {
						...t,
						currency: "points",
						orderTarget: "special_membership",
						products: [{
							productId: "provisional_membership",
							quantity: "1"
						}],
						targetArgs: {
							renew: !1
						}
					}
				});
				if (!n.ok) throw new Error(`Error fetching provisional membership: ${Object(a.b)(n.error)}`);
				return n.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/merge.js"),
				r = n.n(s),
				o = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/badges.ts"),
				a = n("./src/reddit/endpoints/governance/community.ts"),
				c = n("./src/reddit/endpoints/governance/products/badges.ts"),
				d = n("./src/reddit/endpoints/governance/requester.ts");
			async function u(e, t, n) {
				const s = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					u = function(e, t) {
						return Object(d.a)(e, {
							method: "get",
							endpoint: `${o.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					l = Object(a.a)(e, {
						subredditId: t
					}),
					m = Object(c.b)(e, t),
					p = Object(i.c)(e, t, n),
					[b, f, h, g] = await Promise.all([u, l, m, p]);
				if (b.ok ? s.collections = b.body : s.errors.collections = b.error, f.ok) {
					const e = f.body;
					s.subscription = e.specialMemberships, s.communityRaw = e
				}
				return h.ok ? s.products = h.body : s.errors.products = h.error, g.ok ? (r()(s.badges, g.body.badges), s.userOwnedBadges = g.body.userOwnedBadges) : s.errors.userBadges = g.error, s
			}
			const l = (e, t) => Object(d.a)(e, {
				endpoint: `${o.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");
			async function o(e, t, n) {
				const o = Object(r.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${s.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: n
						}
					}),
					i = await o;
				if (i.ok) {
					const e = {},
						t = {},
						n = i.body;
					return Object.keys(n).forEach(s => {
						const r = n[s];
						t[s] = r, e[r.userId] || (e[r.userId] = []), e[r.userId].push(r.id)
					}), {
						...i,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return i
			}
			async function i(e, t, n) {
				const o = await Object(r.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/badges/${t}?users=${n}`
				});
				if (o.ok) {
					const e = {},
						t = [],
						n = o.body;
					return Object.keys(n).forEach(s => {
						const r = n[s];
						e[s] = r, t.push(r.id)
					}), {
						...o,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return o
			}

			function a(e, t, n) {
				let o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(r.a)(e, {
					method: "patch",
					endpoint: `${s.a.metaUrl}/badges/${t}/${n}`,
					data: {
						selected: o
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(o.a)(e, {
					endpoint: `${s.a.metaUrl}/communities/${t.subredditId}/me`,
					method: r.mb.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(r.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function i(e, t) {
				return Object(r.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function a(e, t) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
					data: t
				})
			}

			function c(e, t) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
					data: {
						currency: "usd",
						price: t.price,
						products: t.products,
						providerArgs: {
							paymentNonce: t.nonce
						},
						providerName: "braintree",
						subredditId: t.subredditId
					}
				})
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/lib/permalinkToOverlayLocation/index.ts");

			function r(e, t) {
				return Object(s.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function r(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js");

			function r(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function o(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(r).join(" ") : s.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function i(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Controller/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.7658 8.30457C15.5196 6.40434 14.6685 3.93402 13.992 2.18306C13.4831 0.865888 12.2136 0 10.8015 0H5.01677C3.60472 0 2.33517 0.865888 1.82628 2.18306C1.1498 3.93402 0.298684 6.40434 0.0525311 8.30457C-0.374308 11.5997 1.94027 12 1.94027 12L5.31936 7.9067H10.4989L13.878 12C13.878 12 16.1926 11.5997 15.7658 8.30457ZM4.36141 3.50639C4.94606 3.50639 5.42001 3.03243 5.42001 2.44778C5.42001 1.86313 4.94606 1.38918 4.36141 1.38918C3.77676 1.38918 3.3028 1.86313 3.3028 2.44778C3.3028 3.03243 3.77676 3.50639 4.36141 3.50639ZM7.02295 5.43958C7.02295 6.02423 6.549 6.49818 5.96435 6.49818C5.3797 6.49818 4.90574 6.02423 4.90574 5.43958C4.90574 4.85493 5.3797 4.38097 5.96435 4.38097C6.549 4.38097 7.02295 4.85493 7.02295 5.43958ZM11.4569 3.50639C12.0416 3.50639 12.5155 3.03244 12.5155 2.44779C12.5155 1.86314 12.0416 1.38919 11.4569 1.38919C10.8723 1.38919 10.3983 1.86314 10.3983 2.44779C10.3983 3.03244 10.8723 3.50639 11.4569 3.50639ZM10.9126 5.43958C10.9126 6.02423 10.4386 6.49818 9.85398 6.49818C9.26933 6.49818 8.79538 6.02423 8.79538 5.43958C8.79538 4.85493 9.26933 4.38097 9.85398 4.38097C10.4386 4.38097 10.9126 4.85493 10.9126 5.43958Z"
			}))
		},
		"./src/reddit/icons/svgs/Planet/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("title", null, "Planet"), r.a.createElement("path", {
				d: "M16.74,11.87A7,7,0,0,0,8.13,3.26c-3-2-5.59-2.8-6.63-1.76S1.25,5.15,3.28,8.16a6.95,6.95,0,0,0,8.57,8.57c3,2,5.61,2.82,6.66,1.78S18.76,14.87,16.74,11.87Zm0,4.86c-.53.53-1.77.26-3.33-.61h0a25.48,25.48,0,0,1-5.32-4.19c-.46-.46-.9-.93-1.31-1.39h0c-.41-.46-.79-.92-1.15-1.37h0c-.35-.45-.68-.89-1-1.32h0C4.36,7.41,4.1,7,3.88,6.6,3,5,2.74,3.8,3.27,3.27S5,3,6.6,3.88A6.78,6.78,0,0,0,4.52,5.65a23.14,23.14,0,0,0,4.27,5.56,22.92,22.92,0,0,0,5.56,4.27,6.79,6.79,0,0,0,1.77-2.08C17,15,17.26,16.2,16.73,16.73Z"
			}))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), r.a.createElement("g", null, r.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var s, r, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(r || (r = {}));
			const i = {
					[s.Loyalty]: o.a.First,
					[s.Achievement]: o.a.Second,
					[s.Cosmetic]: void 0
				},
				a = e => e === o.a.First ? s.Loyalty : e === o.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var s, r, o, i;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(r || (r = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(i || (i = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, r = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const o = {
				status: s.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
									...r
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: r
									}
								}
							}
						}
						return e;
					case r.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
									...r
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: r
									}
								}
							}
						}
						return e;
					case r.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case r.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case r.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, r = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const d = {};

			function u(e) {
				return "userId" in e
			}

			function l(e, t, n, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(r => {
						let o;
						(o = e.placement ? e.placement === a.a.First ? s[c.a.Loyalty][r] : s[c.a.Achievement][r] : u(e) ? s[c.a.Cosmetic][c.c.MyBadges][r] : s[c.a.Cosmetic][c.c.Gallery][r]) && (u(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(i.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === r.a).map(m).sort((e, n) => {
					const s = t[e.id],
						r = t[n.id];
					return Object(i.b)(s, r)
				})
			}

			function b(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const s = e.collections[n],
						r = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...r,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && n.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return l(Object.keys(e.badges).map(t => e.badges[t]), n, s, t), l(Object.keys(e.products).map(t => e.products[t]), n, s, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a: {
						const {
							subredditId: n
						} = t.payload, r = e[n];
						return r && r.status === s.Fetched ? {
							...e,
							[n]: {
								...r,
								data: {
									...r.data
								},
								raw: {
									...r.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: n
						} = t.payload, r = e[n];
						return r && r.status === s.Fetched ? {
							...e,
							[n]: {
								...r,
								data: {
									...r.data,
									subscription: {
										...r.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...r.raw,
									subscription: {
										...r.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: b(n),
								status: s.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return _
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "z", (function() {
				return w
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "p", (function() {
				return B
			})), n.d(t, "k", (function() {
				return M
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "y", (function() {
				return U
			})), n.d(t, "u", (function() {
				return L
			})), n.d(t, "v", (function() {
				return R
			})), n.d(t, "b", (function() {
				return G
			})), n.d(t, "w", (function() {
				return $
			})), n.d(t, "s", (function() {
				return Y
			})), n.d(t, "t", (function() {
				return H
			})), n.d(t, "g", (function() {
				return z
			})), n.d(t, "m", (function() {
				return K
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/helpers/economics/sortBadges.ts"),
				o = n("./src/reddit/helpers/richTextJson/index.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				a = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Payments/index.ts"),
				d = n("./src/reddit/models/Product/index.ts"),
				u = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = n("./src/reddit/selectors/comments.ts"),
				p = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/reddit/selectors/experiments/mediaInComments.ts"),
				f = n("./src/reddit/selectors/gold/powerups/index.ts"),
				h = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const g = [],
				_ = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === l.a.Fetched) {
						const e = n.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				y = (e, t) => {
					const n = _(e, t);
					return n && n.endsAt || null
				};
			var E;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(E || (E = {}));
			const O = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === l.a.Fetched) {
						const n = y(e, t),
							s = Date.now();
						return n && s < n ? E.Subscribed : E.NotSubscribed
					}
					return E.DontKnow
				},
				v = (e, t) => {
					const n = e.user.account,
						s = e.economics.subredditPremium[t];
					if (n && s && s.status === l.a.Fetched) {
						const s = ((e.users.appliedBadges[n.id] || {})[t] || g).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[a.a.Loyalty]: s.find(e => e.placement === i.a.First),
							[a.a.Achievement]: s.find(e => e.placement === i.a.Second),
							[a.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[a.a.Loyalty]: void 0,
						[a.a.Achievement]: void 0,
						[a.a.Cosmetic]: void 0
					}
				};

			function S(e, t) {
				return (null == e ? void 0 : e.length) ? Object(r.a)(e.map(e => t[e]).filter(Boolean)) : g
			}
			const C = (e, t, n) => {
					var r;
					if (!s.d.spBadges(e)) return g;
					return S(null === (r = e.users.appliedBadges[n]) || void 0 === r ? void 0 : r[t], e.badges.models)
				},
				j = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === l.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function w(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function I(e, t) {
				const {
					badge: n,
					subredditId: s
				} = t, r = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(n) && n.userId === r) return n;
				const o = e.badges.models,
					a = e.user.ownedBadges[s] || {},
					c = Object(i.e)(n) ? n.type : n.id;
				return Object.keys(a).map(e => o[e]).find(e => e && e.type === c)
			}

			function x(e, t, n, s) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === l.a.Fetched) {
					if (n === a.a.Loyalty || n === a.a.Achievement) return r.data.collections[n];
					if (n === a.a.Cosmetic && s) return r.data.collections[n][s]
				}
				return g
			}

			function P(e, t) {
				const n = x(e, t, a.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : g
			}

			function N(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === l.a.Fetched) {
					const e = n.data.collections[a.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return g
			}

			function k(e, t) {
				return x(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const B = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === u.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const s = e[n];
						t.push({
							display: `${s.brand} •••• ${s.last4}`,
							id: n,
							type: c.a.SavedStripe
						})
					}
				}
				if (n.status === u.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const s = e[n];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var A;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(A || (A = {}));
			const D = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				M = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				F = (e, t) => {
					if (!t) return {};
					const n = D.prices;
					M(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const s = _(e, t);
					return s && s.price && s.currency && (n[s.currency] = s.price), n
				},
				T = (e, t) => {
					var n, s, r, o;
					const i = (null === (o = null === (r = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.points) || void 0 === r ? void 0 : r[t || ""]) || void 0 === o ? void 0 : o.nomenclature) || D;
					return {
						prices: F(e, t),
						member: i.member || D.member,
						memberPlural: i.memberPlural || D.memberPlural,
						memberAlt: i.memberAlt || D.memberAlt,
						memberAltPlural: i.memberAltPlural || D.memberAltPlural,
						membership: i.membership || D.membership,
						membershipAlt: i.membershipAlt || D.membershipAlt
					}
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				R = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				G = (e, t) => {
					let {
						subredditId: n
					} = t;
					if (!n) return;
					return e.economics.emotes[n]
				},
				$ = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				Y = (e, t, n) => {
					if (Object(f.n)(e, {
							subredditId: t
						})) return !0;
					const s = "replyToPost" !== n && Object(p.b)(e, {
						commentId: n
					});
					return !(!s || !Object(o.a)(s))
				},
				H = (e, t, n) => {
					if (Object(b.a)(e)) return !(!t || !Object(m.B)(e, {
						subredditId: t
					})) || (!!W(e, t) || !(!s.d.spGiphy(e) || !q(e, n)));
					if (!Object(h.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(f.o)(e, {
							subredditId: t
						})) return !0;
					if (q(e, n)) return !0;
					const r = s.d.spGiphy(e),
						o = $(e, t);
					return !!W(e, t) || r && o
				},
				q = (e, t) => {
					const n = "replyToPost" !== t && Object(p.b)(e, {
						commentId: t
					});
					if (n && Object(o.b)(n)) return !0
				},
				W = (e, t) => {
					const n = s.d.spGiphy(e),
						r = $(e, t);
					return n && r
				},
				z = (e, t, n) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[n]
					}
				},
				K = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/Product/index.ts");
			const r = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === s.a.Badge) return n
				},
				o = (e, t) => {
					let {
						productId: n
					} = t;
					const s = e.products.models[n];
					if (s) {
						const t = s.subredditId,
							r = Object.keys(e.user.ownedBadges[t] || {}),
							o = e.badges.models,
							i = Date.now();
						let a = !1;
						return r.forEach(e => {
							const t = o[e];
							t && t.type === n && t.endsAt > i && (a = !0)
						}), a
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Economics-SubredditPremium-LFGBanner.396e6dca2315648160ee.js.map