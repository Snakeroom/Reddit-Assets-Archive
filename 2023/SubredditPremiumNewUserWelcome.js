// https://www.redditstatic.com/desktop2x/SubredditPremiumNewUserWelcome.3c93d7e6d54d06f4f9d0.js
// Retrieved at 6/27/2023, 6:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumNewUserWelcome"], {
		"./node_modules/lodash/flattenDeep.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				s = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? r(e, s) : []
			}
		},
		"./node_modules/lodash/forOwn.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseForOwn.js"),
				s = n("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, t) {
				return e && r(e, s(t))
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/reddit/actions/economics/banners/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			const r = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				s = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				o = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				c = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
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
			var r = n("./src/reddit/endpoints/economics/banners.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/economics/banners/constants.ts");
			const c = Object(s.a)(o.c),
				i = Object(s.a)(o.d),
				d = Object(s.a)(o.a),
				a = Object(s.a)(o.b),
				u = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const d = n();
					if (!d.user.account) return;
					if (d.economics.banners.dismissedBanners[e]) return;
					t(c(e));
					const a = await Object(r.b)(o(), e);
					t(i({
						subredditId: e,
						data: a
					}))
				}, l = (e, t) => async (n, s, o) => {
					let {
						apiContext: c
					} = o;
					n(d({
						subredditId: e,
						bannerType: t
					})), Object(r.c)(c(), e, t)
				}, m = (e, t) => async (n, s, o) => {
					let {
						apiContext: c
					} = o;
					n(a({
						subredditId: e,
						bannerType: t
					})), Object(r.e)(c(), e, t)
				}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				s = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				o = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				o = n("./src/config.ts"),
				c = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/me/constants.ts");
			const a = Object(i.a)(d.a),
				u = Object(i.a)(d.b),
				l = Object(i.a)(d.c),
				m = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const i = e && e.includeMemberships || !1,
						d = e && e.forceFetch || !1,
						u = n();
					if (!u.economics.me.fetched || i && !u.economics.me.data.specialMemberships || d) {
						const e = await
						function(e, t) {
							return Object(c.a)(e, {
								method: "get",
								endpoint: `${o.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(s(), i);
						if (e.ok) {
							const n = e.body;
							i && !n.specialMemberships && (n.specialMemberships = {}), t(a(n))
						}
					}
				}, b = () => async (e, t) => {
					const n = t(),
						o = n.economics.me.data;
					if (!o) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(u());
						const t = `https://${o.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(s.b)({
								endpoint: t,
								method: r.ob.GET
							});
						n.ok && n.body && e(l(n.body))
					}
				}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return _
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(r.a)(c.a),
				d = Object(r.a)(c.b),
				a = Object(r.a)(c.c),
				u = Object(r.a)(c.d),
				l = Object(r.a)(c.e),
				m = Object(r.a)(c.f),
				b = Object(r.a)(c.g),
				p = Object(r.a)(c.h),
				f = Object(r.a)(c.i),
				_ = e => Object(s.h)(o.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			}));
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "f", (function() {
				return A
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/forOwn.js"),
				s = n.n(r),
				o = n("./src/reddit/actions/governance/errorToast.ts"),
				c = n("./src/reddit/endpoints/economics/emojis.ts"),
				i = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				d = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts"),
				u = n("./src/config.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t, n) {
				return Object(l.a)(e, {
					method: "get",
					endpoint: `${u.a.metaUrl}/products/${t}?owners=${n}` + "&types=emotes_pack,giphy"
				})
			}
			var b = n("./src/reddit/models/Badge/index.ts"),
				p = n("./src/reddit/models/Badge/managementPage.ts"),
				f = n("./src/reddit/models/Product/index.ts"),
				_ = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				g = n("./src/reddit/selectors/economics.ts"),
				h = n("./src/reddit/selectors/products.ts"),
				E = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				O = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function y(e) {
				return !!e && "removeBadge" === e.type
			}

			function j(e) {
				if (!y(e)) return e
			}
			const C = () => async (e, t, n) => {
				let {
					apiContext: r
				} = n;
				if (!t().user.account) return;
				await e(Object(E.b)({
					includeMemberships: !0
				}));
				const s = t().economics.me.data.specialMemberships || {},
					o = Object.keys(s);
				if (o.length) {
					const t = await Object(i.e)(r(), o);
					t.ok && e(Object(O.g)(t.body))
				}
			}, S = (e, t) => async (n, r, s) => {
				let {
					apiContext: o
				} = s;
				const c = r().user.account,
					i = r().economics.subredditPremium[e],
					a = !i || i.status !== _.a.Fetched || t;
				if (c && a) {
					const t = await Object(d.a)(o(), e, c.id);
					n(Object(O.i)(t))
				}
			}, v = e => async (t, n, r) => {
				let {
					apiContext: s
				} = r;
				const c = n(),
					i = c.user.account,
					d = Object(g.f)(c, e.subredditId),
					u = Object.keys(d).map(e => d[e]).filter(Boolean);
				if (i && e.badge) {
					let n, r;
					n = e.placement === b.a.First ? d[p.a.Loyalty] : e.placement === b.a.Second ? d[p.a.Achievement] : d[p.a.Cosmetic], t(Object(O.a)({
						...e,
						badge: j(e.badge),
						currentAppliedBadges: u,
						userId: i.id
					})), y(e.badge) && n ? r = await Object(a.a)(s(), e.subredditId, n.id, !1) : y(e.badge) || (r = await Object(a.a)(s(), e.subredditId, e.badge.id)), r && !r.ok && (t(Object(O.a)({
						...e,
						badge: n,
						currentAppliedBadges: u,
						userId: i.id
					})), Object(o.a)(t, r.error))
				}
			}, N = (e, t) => async (n, r, s) => {
				let {
					apiContext: o
				} = s;
				await n(S(e, !0));
				const c = r().economics.subredditPremium[e];
				if (c && c.status === _.a.Fetched) {
					const r = c.data.userOwnedBadges.find(e => e.type === t.id);
					r && (n(v({
						badge: r,
						subredditId: e,
						placement: r.placement
					})), n(Object(O.d)(p.c.MyBadges)))
				}
			}, I = e => async (t, n, r) => {
				let {
					apiContext: i
				} = r;
				const d = n().user.account,
					a = !n().economics.emotes[e],
					u = !n().economics.gifs[e];
				if (d && (a || u)) {
					const [n, r] = await Promise.all([Object(c.b)(i(), e), m(i(), e, d.id)]);
					if (!r.ok) return void Object(o.a)(t, r.error);
					const a = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					s()(r.body, e => {
						e.type === f.a.EmotesPack ? a.emotes.push(e) : e.type === f.a.Giphy && a.giphy.push(e)
					}), t(Object(O.e)({
						subredditId: e,
						products: a
					}))
				}
			}, P = (e, t, n) => async (r, s, o) => {
				let {
					apiContext: c
				} = o;
				if (await r(S(e, !0)), n && t) {
					const n = s(),
						o = Object(g.f)(n, e),
						c = Object(h.a)(n, t);
					if (!o[Object(p.d)(c.placement)] && c) {
						const t = Object(g.l)(n, {
							subredditId: e,
							badge: c
						});
						t && await r(v({
							badge: t,
							subredditId: e
						}))
					}
					r(Object(O.c)({
						subredditId: e,
						initialView: p.c.MyBadges
					}))
				}
			}, A = e => async (t, n, r) => {
				let {
					apiContext: s
				} = r;
				const {
					wallet: o
				} = await Object(i.c)(s(), e);
				t(Object(O.f)({
					wallet: o
				})), await t(S(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "r", (function() {
				return O
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "v", (function() {
				return S
			})), n.d(t, "w", (function() {
				return v
			})), n.d(t, "x", (function() {
				return N
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				o = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				c = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				i = "POLL_VOTE_SUCCESS",
				d = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				a = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				_ = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				g = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				h = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				E = "GOVERNANCE__TRANSFER_FAILURE",
				O = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				y = "GOVERNANCE__TRANSFER_PENDING",
				j = "GOVERNANCE__TRANSFER_SUCCESS",
				C = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				S = "GOVERNANCE__WALLETS_FETCH_PENDING",
				v = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				N = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				o = n("./src/reddit/models/Toast/index.ts");

			function c(e, t) {
				e(Object(r.f)({
					duration: 5e3,
					kind: o.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less": function(e, t, n) {
			e.exports = {
				collectionTitle: "BKuPdCEiKWhUuAAZSV8Hu",
				singleLineText: "_3vV5Hg-hZiDuQVXYnhgzdZ",
				description: "_3K0DQ21Q-wH4kETiMxiaNo",
				fullWidth: "_1HsWtVhofw3GuWXgyObfz4",
				info: "_30GDKdvss889YcOkeQXbVz",
				image: "_3vLr4Xzqw3Fx7cHwT9nDP7",
				progressAmount: "_2zNarMBPc02JsQXIFrSaFR",
				progressBar: "_3hmtSMaZH5Wkj8Ftna8Wy1",
				progressContainer: "_2F36VBMAcVYDe4GdSPiMdk",
				progressThumb: "_3i-h-gzh3Oskm1I04nHRT3",
				title: "_2ZnmMFDAIE41ruoyRhfq3L",
				wrapper: "_2se6JR27PiBUl4k4nrgmAS"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				u = n("./src/reddit/models/Badge/managementPage.ts"),
				l = n("./src/reddit/selectors/crypto/wallet.ts"),
				m = n("./src/reddit/selectors/economics.ts"),
				b = n("./node_modules/reselect/es/index.js"),
				p = n("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				f = n.n(p);
			const _ = Object(b.c)({
				collection: (e, t) => {
					let {
						badge: n,
						subredditId: r
					} = t;
					if (n.collections) {
						const t = Object.keys(n.collections);
						if (t.length) {
							const n = t[0];
							return Object(m.h)(e, {
								collectionId: n,
								subredditId: r
							})
						}
					}
				},
				progress: (e, t) => {
					let {
						badge: n,
						subredditId: r,
						type: s
					} = t;
					if (!Object(a.e)(n) && s === u.a.Achievement && d.b[n.id]) {
						const t = Object(l.a)(e, {
							subredditId: r
						});
						if (t) return {
							complete: parseInt(t.amount),
							total: d.b[n.id]
						}
					}
				}
			});
			t.a = Object(c.b)(_)((function(e) {
				const t = e.type === u.a.Loyalty ? r.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === u.a.Achievement ? r.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : r.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					n = e.collection ? e.collection.title : t,
					{
						url: s,
						url2x: c
					} = Object(a.d)(60, 60, e.badge),
					d = e.progress;
				return o.a.createElement("article", {
					className: Object(i.a)(e.className, {
						[f.a.fullWidth]: !!e.fullWidth
					})
				}, o.a.createElement("div", {
					className: f.a.wrapper
				}, o.a.createElement("img", {
					className: f.a.image,
					src: c,
					srcSet: `${s}, ${c} 2x`
				}), o.a.createElement("div", {
					className: f.a.info
				}, o.a.createElement("div", {
					className: f.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: n
				}, n), o.a.createElement("header", {
					className: f.a.title
				}, e.badge.title), d && d.complete < d.total && o.a.createElement("div", {
					className: f.a.progressContainer
				}, o.a.createElement("div", {
					className: f.a.progressBar
				}, o.a.createElement("div", {
					className: f.a.progressThumb,
					style: {
						width: `${d.complete/d.total*100}%`
					}
				})), o.a.createElement("div", {
					className: f.a.progressAmount
				}, function(e) {
					return `${`${Math.floor(e.complete/1e3)}k`}/${`${Math.floor(e.total/1e3)}k`}`
				}(d))), o.a.createElement("div", {
					className: f.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, n) {
			"use strict";
			var r, s, o, c;

			function i(e) {
				const {
					platform: t,
					playerType: n,
					region: r,
					style: s
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${s}/${r}_${t}_${n}_${s}.svg`
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})), n.d(t, "c", (function() {
					return o
				})), n.d(t, "d", (function() {
					return i
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(r || (r = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(s || (s = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(o || (o = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(c || (c = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Header/index.m.less": function(e, t, n) {
			e.exports = {
				adminIcon: "_3DBC88ju9HyGJROMgq_F97",
				tagline: "_2ns4H3PImrmpOdoWZOcKMh",
				title: "_3roTQxzmBtpWPUliC-RDN4"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Jumper/index.m.less": function(e, t, n) {
			e.exports = {
				assets: "rc9uwSKhfz2sYMicAJ2DC"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Message/index.m.less": function(e, t, n) {
			e.exports = {
				branding: "_23unQtjTQ_n6BjirQwG00B",
				container: "_3AZuRe_UgoWbtKNJS9NIq7",
				crown: "At1WqrMnAtMf-GF7yvDTE",
				link: "_2kqLnXg-22rlxFJn4z7GBC"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/NewbieBadge/index.m.less": function(e, t, n) {
			e.exports = {
				badge: "_30E7byXU3_1B4T7_r3ztFc",
				label: "_13rfgT1x6TMBcCq9TNT3B0"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.m.less": function(e, t, n) {
			e.exports = {
				close: "_2707HQ8wAoNAWOYToe3mOV",
				container: "p0xnZL-WCSelAxMeF2_7i",
				header: "_2KztCw3Gn5cmpUK-pjs01-",
				message: "qICCKz58S2wSANlB9NC1x",
				newbieBadge: "_24PsjCZsKtJryP0hTG1IT9"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/contexts/ApiContext.tsx"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/endpoints/economics/banners.ts"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = n("./src/reddit/models/Badge/managementPage.ts"),
				g = n("./src/reddit/selectors/economics.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				O = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				j = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Header/index.m.less"),
				C = n.n(j);

			function S(e) {
				const {
					className: t,
					subreddit: n
				} = e;
				return s.a.createElement("header", {
					className: Object(d.a)(t, C.a.container)
				}, s.a.createElement("div", {
					className: C.a.tagline
				}, s.a.createElement(y.a, {
					className: C.a.adminIcon
				}), O.fbt._("a note from reddit admins", null, {
					hk: "3addaI"
				})), s.a.createElement("div", {
					className: C.a.title
				}, O.fbt._("Welcome to r/{communityName}!", [O.fbt._param("communityName", n.name)], {
					hk: "2LQnel"
				})))
			}
			var v = n("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx"),
				N = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Jumper/index.m.less"),
				I = n.n(N);
			const P = [0, 500];

			function A(e) {
				return s.a.createElement("div", {
					className: Object(d.a)(I.a.container, e.className)
				}, s.a.createElement(v.a, {
					className: I.a.assets,
					scrollRange: P,
					subreddit: e.subreddit
				}))
			}
			var w = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				x = n("./src/reddit/helpers/economics/membershipPage.ts"),
				M = n("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				B = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Message/index.m.less"),
				T = n.n(B);
			const k = Object(c.c)({
				meta: (e, t) => {
					let {
						subreddit: n
					} = t;
					return Object(g.r)(e, n.id)
				}
			});
			var D = Object(u.c)(Object(o.b)(k)((function(e) {
					return s.a.createElement("div", {
						className: Object(d.a)(T.a.container, e.className)
					}, O.fbt._("This community is a part of an exclusive experiment run by Reddit Admins.", null, {
						hk: "1lZWqG"
					}), " ", O.fbt._("Hundreds of followers have paid for a", null, {
						hk: "b6O0n"
					}), s.a.createElement("div", {
						className: T.a.branding
					}, s.a.createElement("img", {
						className: T.a.crown,
						src: M.a
					}), e.meta.memberAlt), O.fbt._("subscription.", null, {
						hk: "2NkoEp"
					}), " ", O.fbt._("They benefit by getting unique features that Reddit doesn't provide in any other community.", null, {
						hk: "xffSH"
					}), " ", s.a.createElement(w.a, {
						className: T.a.link,
						to: Object(x.a)(e.subreddit.name, e.correlationId),
						onClick: () => e.sendEvent(t => ({
							source: "meta",
							action: "click",
							noun: "new_user_welcome_learn_more",
							correlationId: e.correlationId,
							...E.p(t),
							subreddit: E.mb(t)
						}))
					}, O.fbt._("You can learn more here", null, {
						hk: "49vQ0b"
					})), O.fbt._(".", null, {
						hk: "2crLys"
					}))
				}))),
				R = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				U = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				L = n("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				F = n("./src/reddit/controls/Button/index.tsx"),
				G = n("./src/reddit/endpoints/economics/emojis.ts"),
				$ = n("./src/reddit/selectors/products.ts"),
				W = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/NewbieBadge/index.m.less"),
				V = n.n(W);
			const H = "newbie_badge";
			class Y extends s.a.Component {
				constructor() {
					super(...arguments), this.onApply = async () => {
						(await Object(G.a)(this.props.apiContext(), {
							productId: H,
							subredditId: this.props.subredditId
						})).ok && (this.props.onBadgeApplied(), this.props.sendEvent(e => ({
							source: "meta",
							action: "click",
							noun: "new_user_welcome_claim_badge",
							correlationId: this.props.correlationId,
							...E.p(e),
							subreddit: E.mb(e)
						})))
					}
				}
				render() {
					const {
						className: e,
						newbieBadge: t,
						subredditId: n
					} = this.props;
					return t ? s.a.createElement("div", {
						className: Object(d.a)(V.a.container, e)
					}, s.a.createElement("div", {
						className: V.a.label
					}, O.fbt._("you just unlocked your first achievement badge", null, {
						hk: "MbVkT"
					})), s.a.createElement("div", {
						className: V.a.badge
					}, s.a.createElement(L.a, {
						fullWidth: !0,
						badge: t,
						subredditId: n,
						type: _.a.Achievement
					}), s.a.createElement(F.l, {
						onClick: this.onApply
					}, O.fbt._("apply", null, {
						hk: "3BGbhR"
					})))) : null
				}
			}
			const q = Object(c.c)({
				newbieBadge: e => Object($.a)(e, H)
			});
			var z = Object(m.b)(Object(u.c)(Object(o.b)(q, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						onBadgeApplied: () => {
							e(Object(U.d)(n, {
								id: H
							})), e(Object(R.b)(_.a.Achievement)), e(Object(R.c)({
								subredditId: n
							}))
						}
					}
				})(Y))),
				K = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.m.less"),
				Q = n.n(K);
			class Z extends s.a.Component {
				constructor(e) {
					super(e), this.hasFiredViewEvent = !1, this.dismissBanner = () => {
						const {
							subreddit: e
						} = this.props;
						e && this.props.onDismissBanner(e.id)
					}, this.state = {
						userWasUnsubscribed: !e.userIsSubscribed
					}, this.correlationId = Object(i.a)()
				}
				componentDidUpdate(e) {
					const t = this.props.subreddit;
					t && !1 === e.userIsSubscribed && !0 === this.props.userIsSubscribed && void 0 === this.props.bannerIsDismissed && this.props.onFetchDismissedBanners(t.id), t && !1 === this.props.userIsSubscribed && !this.state.userWasUnsubscribed && this.setState({
						userWasUnsubscribed: !0
					})
				}
				render() {
					const {
						className: e,
						eligibleForBanner: t,
						subreddit: n
					} = this.props;
					return n && this.props.userIsSubscribed && this.state.userWasUnsubscribed && !1 === this.props.bannerIsDismissed && t ? (this.hasFiredViewEvent || (this.hasFiredViewEvent = !0, this.props.sendEvent(e => ({
						source: "meta",
						action: "view",
						noun: "new_user_welcome",
						correlationId: this.correlationId,
						...E.p(e),
						subreddit: E.mb(e)
					}))), s.a.createElement("article", {
						className: Object(d.a)(Q.a.container, e)
					}, s.a.createElement(S, {
						className: Q.a.header,
						subreddit: n
					}), s.a.createElement(A, {
						className: Q.a.jumper,
						subreddit: n
					}), s.a.createElement(D, {
						className: Q.a.message,
						correlationId: this.correlationId,
						subreddit: n
					}), s.a.createElement(z, {
						className: Q.a.newbieBadge,
						correlationId: this.correlationId,
						subredditId: n.id
					}), s.a.createElement(f.a, {
						className: Q.a.close,
						onClick: this.dismissBanner
					}))) : null
				}
			}
			const X = Object(c.c)({
					bannerIsDismissed: (e, t) => {
						const n = Object(b.o)(e, t);
						return n ? Object(g.g)(e, n, p.a.NewUserWelcome) : void 0
					},
					eligibleForBanner: (e, t) => {
						const n = e.user.account,
							r = Object(b.s)(e, t);
						if (!n) return !1;
						if (Object(b.U)(e, t) !== l.g.Large) return !1;
						if (r) {
							const t = Object(g.f)(e, r.id)[_.a.Achievement];
							if (t && t.type === H) return !1
						}
						return !0
					},
					subreddit: b.s,
					userIsSubscribed: (e, t) => {
						const n = Object(b.s)(e, t);
						return !!n && Object(h.jb)(e, {
							identifier: {
								name: n.name,
								type: "subreddit"
							}
						})
					}
				}),
				J = Object(u.c)(Z),
				ee = Object(o.b)(X, e => ({
					onDismissBanner: t => e(Object(a.a)(t, p.a.NewUserWelcome)),
					onFetchDismissedBanners: t => e(Object(a.b)(t))
				}))(J),
				te = Object(b.v)()(ee),
				ne = Object(m.b)(te);
			t.default = Object(m.b)(ne)
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/config.ts"),
				s = n("./node_modules/lodash/flattenDeep.js"),
				o = n.n(s),
				c = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const i = `${r.a.assetPath}/img/memberships/paywall/crown.gif`,
				d = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				a = new Set(o()(Object.keys(c.a).map(e => Object.keys(c.b).map(t => Object.keys(c.c).map(n => `${n}_${e}_${t}_badge`)))))
		},
		"./src/reddit/components/ScrollAnimation/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/clamp.js"),
				s = n.n(r),
				o = n("./node_modules/lodash/throttle.js"),
				c = n.n(o),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				a = n("./src/lib/fastdom/index.ts"),
				u = n("./src/reddit/components/Scroller/getDocumentTop.ts"),
				l = n("./src/reddit/components/Scroller/Simple.tsx");
			const m = (() => {
					const e = new Map,
						t = {
							get: t => e.get(t) || [],
							add: (n, r) => {
								const s = t.get(n);
								return e.set(n, s.concat(r)), t
							},
							remove: (n, r) => {
								const s = t.get(n);
								return e.set(n, s.filter(e => e !== r)), t
							}
						};
					return t
				})(),
				b = (() => {
					const e = e => c()(() => {
							a.a.read(() => {
								const t = (e => Object(l.a)(e) ? Object(u.a)() : e.scrollTop)(e);
								m.get(e).forEach(e => e(t))
							})
						}, 16),
						t = new Map;
					return {
						on: (n, r) => {
							if (!m.get(n).length) {
								const r = e(n);
								t.set(n, r), n.addEventListener("scroll", r)
							}
							m.add(n, r)
						},
						off: (e, n) => {
							if (m.remove(e, n), !m.get(e).length) {
								const n = t.get(e);
								n && e.removeEventListener("scroll", n)
							}
						}
					}
				})();
			class p extends d.a.Component {
				constructor(e) {
					super(e), this.getContainer = () => this.props.containerRef || document.getElementById("overlayScrollContainer") || document, this.updateScrollPosition = e => this.setState(t => {
						const n = this.props.scrollRange[0],
							r = this.props.scrollRange[1],
							o = s()(e, n, r),
							c = Math.min(Math.floor((o - n) / (r - n) * 1e3), 999);
						return {
							...t,
							styles: {
								...t.styles,
								animationDelay: `-${c}s`
							}
						}
					}), this.state = {
						styles: {
							animationDelay: "0s",
							animationDuration: "1000s",
							animationPlayState: "paused",
							backfaceVisibility: "hidden"
						}
					}
				}
				shouldComponentUpdate(e, t) {
					return this.state.styles.animationDelay !== t.styles.animationDelay
				}
				componentDidMount() {
					b.on(this.getContainer(), this.updateScrollPosition)
				}
				componentWillUnmount() {
					b.off(this.getContainer(), this.updateScrollPosition)
				}
				render() {
					return this.props.children(this.state.styles)
				}
			}
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s, o = n("./src/config.ts"),
				c = n("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, n, r) {
				return Object(c.a)(e, {
					endpoint: `${o.a.metaUrl}/storage/${t}/me/${n}`,
					method: "patch",
					data: r
				})
			}
			async function d(e, t) {
				const n = await async function(e, t, n) {
					return Object(c.a)(e, {
						endpoint: `${o.a.metaUrl}/storage/${t}/me/${n}`,
						method: "get"
					})
				}(e, t, r.UpsellBanners);
				return n.ok && n.body || {}
			}
			async function a(e, t, n, s) {
					const o = await d(e, t),
						c = {
							...o,
							[n]: s
						};
					return (await i(e, t, r.UpsellBanners, c)).ok ? c : o
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(r || (r = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.WalletRegistration = "walletRegistration"
				}(s || (s = {}));
			const u = async (e, t, n) => a(e, t, n, !0), l = async (e, t, n) => a(e, t, n, !1), m = (e, t) => i(e, t, r.UpsellBanners, Object.keys(s).reduce((e, t) => (e[s[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			const o = (e, t) => Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
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
				c = (e, t) => Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				d = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function a(e, t) {
				return Object(c.a)(e, {
					endpoint: `${r.a.metaUrl}/communities/${t.subredditId}/me`,
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
				return Object(c.a)(e, {
					endpoint: `${r.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function l(e, t) {
				return Object(c.a)(e, {
					endpoint: `${r.a.metaUrl}/orders`,
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
				return Object(c.a)(Object(s.a)(e, [o.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(d.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function b(e, t) {
				const n = await Object(c.a)(e, {
					endpoint: `${r.a.metaUrl}/orders`,
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
				if (!n.ok) throw new Error(`Error fetching provisional membership: ${Object(i.b)(n.error)}`);
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
			var r = n("./node_modules/lodash/merge.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				c = n("./src/reddit/endpoints/governance/badges.ts"),
				i = n("./src/reddit/endpoints/governance/community.ts"),
				d = n("./src/reddit/endpoints/governance/products/badges.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			async function u(e, t, n) {
				const r = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					u = function(e, t) {
						return Object(a.a)(e, {
							method: "get",
							endpoint: `${o.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					l = Object(i.a)(e, {
						subredditId: t
					}),
					m = Object(d.b)(e, t),
					b = Object(c.c)(e, t, n),
					[p, f, _, g] = await Promise.all([u, l, m, b]);
				if (p.ok ? r.collections = p.body : r.errors.collections = p.error, f.ok) {
					const e = f.body;
					r.subscription = e.specialMemberships, r.communityRaw = e
				}
				return _.ok ? r.products = _.body : r.errors.products = _.error, g.ok ? (s()(r.badges, g.body.badges), r.userOwnedBadges = g.body.userOwnedBadges) : r.errors.userBadges = g.error, r
			}
			const l = (e, t) => Object(a.a)(e, {
				endpoint: `${o.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			async function o(e, t, n) {
				const o = Object(s.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${r.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: n
						}
					}),
					c = await o;
				if (c.ok) {
					const e = {},
						t = {},
						n = c.body;
					return Object.keys(n).forEach(r => {
						const s = n[r];
						t[r] = s, e[s.userId] || (e[s.userId] = []), e[s.userId].push(s.id)
					}), {
						...c,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return c
			}
			async function c(e, t, n) {
				const o = await Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/badges/${t}?users=${n}`
				});
				if (o.ok) {
					const e = {},
						t = [],
						n = o.body;
					return Object.keys(n).forEach(r => {
						const s = n[r];
						e[r] = s, t.push(s.id)
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

			function i(e, t, n) {
				let o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(s.a)(e, {
					method: "patch",
					endpoint: `${r.a.metaUrl}/badges/${t}/${n}`,
					data: {
						selected: o
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(o.a)(e, {
					endpoint: `${r.a.metaUrl}/communities/${t.subredditId}/me`,
					method: s.ob.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			}));
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function c(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function i(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
					data: t
				})
			}

			function d(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
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
				return s
			}));
			var r = n("./src/lib/permalinkToOverlayLocation/index.ts");

			function s(e, t) {
				return Object(r.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function s(e) {
				return [...e].sort(r)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function o(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : r.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function c(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(c);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			}));
			var r, s, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const c = {
					[r.Loyalty]: o.a.First,
					[r.Achievement]: o.a.Second,
					[r.Cosmetic]: void 0
				},
				i = e => e === o.a.First ? r.Loyalty : e === o.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var r, s, o, c;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(c || (c = {}))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1sFzjkbzwgDZbCfUC2r1wE",
				jumperArmLeft: "_3PiaT85fC3TrQD2HdeOafZ",
				jumperArmLeftAnim: "zKNYt858N0bjlljDDG6NZ",
				jumperArmRight: "_3Lx79UhomruM1Y5BCTzG8Y",
				jumperArmRightAnim: "_1i7rn3wI2iwaDt20BD4cwA",
				jumperBullet: "_3VgQEpiX3x4ms2DPXbU3Vv",
				jumperBulletAnim: "_2SOHU1xXIOc8DnKL4Eh_NA",
				jumperLegLeft: "_2tBrC3MWjEDn2rUr1uHBSU",
				jumperLegLeftAnim: "_33YZcOsjLAJqX7_PWF0XMy",
				jumperLegRight: "_21kcQmC_D0HKtBiZB44xj_",
				jumperLegRightAnim: "_2N7iCqOyBuKxb1Gi5WqG2h",
				jumperTorso: "_1ftz2Us7dNaqGSxapletsm"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ScrollAnimation/index.tsx"),
				i = n("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				d = n("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less"),
				a = n.n(d);
			const u = [1700, 2400];

			function l(e) {
				const t = e.scrollRange || u;
				return s.a.createElement("footer", {
					className: Object(o.a)(a.a.container, e.className)
				}, s.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/8fvy7o/these_items_are_cosmetic_only_and_grant_no/",
					target: "_blank",
					rel: "noopener noreferrer"
				}, s.a.createElement(c.a, {
					scrollRange: t
				}, t => s.a.createElement("img", {
					className: a.a.jumperBullet,
					src: Object(i.a)(e.subreddit, "jumper_bullet@2x.png"),
					style: t
				})), s.a.createElement(c.a, {
					scrollRange: t
				}, t => s.a.createElement("img", {
					className: a.a.jumperArmLeft,
					src: Object(i.a)(e.subreddit, "jumper_arm_left@2x.png"),
					style: t
				})), s.a.createElement(c.a, {
					scrollRange: t
				}, t => s.a.createElement("img", {
					className: a.a.jumperLegLeft,
					src: Object(i.a)(e.subreddit, "jumper_leg_left@2x.png"),
					style: t
				})), s.a.createElement(c.a, {
					scrollRange: t
				}, t => s.a.createElement("img", {
					className: a.a.jumperLegRight,
					src: Object(i.a)(e.subreddit, "jumper_leg_right@2x.png"),
					style: t
				})), s.a.createElement("img", {
					className: a.a.jumperTorso,
					src: Object(i.a)(e.subreddit, "jumper_torso@2x.png")
				}), s.a.createElement(c.a, {
					scrollRange: t
				}, t => s.a.createElement("img", {
					className: a.a.jumperArmRight,
					src: Object(i.a)(e.subreddit, "jumper_arm_right@2x.png"),
					style: t
				}))))
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/config.ts");
			const s = (e, t) => `${r.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const o = {
				status: r.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: r,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: r,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: r.Failure
						};
					case s.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case s.d:
						return {
							status: r.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				c = n("./src/reddit/helpers/economics/sortBadges.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				d = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const a = {};

			function u(e) {
				return "userId" in e
			}

			function l(e, t, n, r) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === i.a.First ? r[d.a.Loyalty][s] : r[d.a.Achievement][s] : u(e) ? r[d.a.Cosmetic][d.c.MyBadges][s] : r[d.a.Cosmetic][d.c.Gallery][s]) && (u(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(c.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function b(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, n) => {
					const r = t[e.id],
						s = t[n.id];
					return Object(c.b)(r, s)
				})
			}

			function p(e) {
				const t = {
					[d.a.Loyalty]: {},
					[d.a.Achievement]: {},
					[d.a.Cosmetic]: {
						[d.c.Gallery]: {},
						[d.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const r = e.collections[n],
						s = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[d.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[d.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.MyBadges][n] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const r = e.badges[t];
					r && n.add(r.type)
				});
				const r = new Set(e.userOwnedBadges);
				return l(Object.keys(e.badges).map(t => e.badges[t]), n, r, t), l(Object.keys(e.products).map(t => e.products[t]), n, r, t), {
					collections: {
						[d.a.Loyalty]: b(t[d.a.Loyalty], e.collections),
						[d.a.Achievement]: b(t[d.a.Achievement], e.collections),
						[d.a.Cosmetic]: {
							[d.c.Gallery]: b(t[d.a.Cosmetic][d.c.Gallery], e.collections),
							[d.c.MyBadges]: b(t[d.a.Cosmetic][d.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
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
								data: p(n),
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				o = n("./src/reddit/actions/economics/me/constants.ts");
			const c = {};
			var i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.a: {
							const n = t.payload.claimPoints || {},
								r = Object.keys(n).reduce((t, r) => (t[r] = {
									...e[r],
									availableClaims: n[r]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var n;
								(null === (n = e[t]) || void 0 === n ? void 0 : n.isClaiming) && (r[t] = r[t] || {
									availableClaims: []
								}, r[t].isClaiming = !0)
							}), r
						}
						case s.b:
						case s.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === s.b
								}
							};
						default:
							return e
					}
				},
				d = n("./src/reddit/actions/governance/constants.ts");
			const a = 15e4,
				u = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function m(e) {
				var t, n, r, s, o;
				const c = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					i = null == c ? void 0 : c.contracts,
					d = null == i ? void 0 : i.unlocked,
					u = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					m = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					b = null == c ? void 0 : c.metaTransactions,
					p = (null == b ? void 0 : b.allowedContractMethods) || {},
					f = (null == b ? void 0 : b.gasLimit) || a,
					_ = (null == d ? void 0 : d.decimals) || 0,
					g = "1" + "0".repeat(_);
				return {
					allowedContractMethods: p,
					blockchainProvider: u,
					contractAddress: (null == d ? void 0 : d.address) || "",
					contracts: i,
					decimals: _,
					displayConversion: g,
					gasLimit: f,
					images: e.images || l,
					inTransition: m,
					name: e.name,
					nomenclature: null === (o = e.extra) || void 0 === o ? void 0 : o.nomenclature,
					polls: e.polls,
					symbol: (null == d ? void 0 : d.token) || ""
				}
			}
			var b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.a: {
						const {
							subredditId: n,
							meta: r
						} = t.payload;
						return {
							...e,
							[n]: m(r)
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.n: {
						const {
							subredditId: n,
							wallets: r
						} = t.payload, s = Object.keys(r).reduce((t, s) => {
							return {
								...t,
								[s]: {
									...e[s] || {},
									[n]: r[s]
								}
							}
						}, {});
						return {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				claims: i,
				points: b,
				publicWallets: f
			})
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return i
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(r.a)({
				features: {
					crypto: s.a
				}
			});
			const o = (e, t) => {
					var n;
					return t && (null === (n = e.user.wallets[t.subredditId]) || void 0 === n ? void 0 : n.latest)
				},
				c = (e, t) => {
					var n;
					return null === (n = o(e, t)) || void 0 === n ? void 0 : n.publicAddress
				},
				i = (e, t) => {
					var n, r, s, o;
					return null === (o = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === o ? void 0 : o[t.subredditId]
				}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return h
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "x", (function() {
				return y
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "z", (function() {
				return N
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "n", (function() {
				return P
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "p", (function() {
				return M
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "r", (function() {
				return R
			})), n.d(t, "y", (function() {
				return U
			})), n.d(t, "u", (function() {
				return L
			})), n.d(t, "v", (function() {
				return F
			})), n.d(t, "b", (function() {
				return G
			})), n.d(t, "w", (function() {
				return $
			})), n.d(t, "s", (function() {
				return W
			})), n.d(t, "t", (function() {
				return V
			})), n.d(t, "g", (function() {
				return q
			})), n.d(t, "m", (function() {
				return z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/helpers/economics/sortBadges.ts"),
				o = n("./src/reddit/helpers/richTextJson/index.ts"),
				c = n("./src/reddit/models/Badge/index.ts"),
				i = n("./src/reddit/models/Badge/managementPage.ts"),
				d = n("./src/reddit/models/Payments/index.ts"),
				a = n("./src/reddit/models/Product/index.ts"),
				u = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = n("./src/reddit/selectors/comments.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/reddit/selectors/experiments/mediaInComments.ts"),
				f = n("./src/reddit/selectors/gold/powerups/index.ts"),
				_ = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const g = [],
				h = (e, t) => {
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
				E = (e, t) => {
					const n = h(e, t);
					return n && n.endsAt || null
				};
			var O;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(O || (O = {}));
			const y = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === l.a.Fetched) {
						const n = E(e, t),
							r = Date.now();
						return n && r < n ? O.Subscribed : O.NotSubscribed
					}
					return O.DontKnow
				},
				j = (e, t) => {
					const n = e.user.account,
						r = e.economics.subredditPremium[t];
					if (n && r && r.status === l.a.Fetched) {
						const r = ((e.users.appliedBadges[n.id] || {})[t] || g).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[i.a.Loyalty]: r.find(e => e.placement === c.a.First),
							[i.a.Achievement]: r.find(e => e.placement === c.a.Second),
							[i.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function C(e, t) {
				return (null == e ? void 0 : e.length) ? Object(s.a)(e.map(e => t[e]).filter(Boolean)) : g
			}
			const S = (e, t, n) => {
					var s;
					if (!r.d.spBadges(e)) return g;
					return C(null === (s = e.users.appliedBadges[n]) || void 0 === s ? void 0 : s[t], e.badges.models)
				},
				v = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === l.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function N(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function I(e, t) {
				const {
					badge: n,
					subredditId: r
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(c.e)(n) && n.userId === s) return n;
				const o = e.badges.models,
					i = e.user.ownedBadges[r] || {},
					d = Object(c.e)(n) ? n.type : n.id;
				return Object.keys(i).map(e => o[e]).find(e => e && e.type === d)
			}

			function P(e, t, n, r) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === l.a.Fetched) {
					if (n === i.a.Loyalty || n === i.a.Achievement) return s.data.collections[n];
					if (n === i.a.Cosmetic && r) return s.data.collections[n][r]
				}
				return g
			}

			function A(e, t) {
				const n = P(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : g
			}

			function w(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === l.a.Fetched) {
					const e = n.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(c.f)
				}
				return g
			}

			function x(e, t) {
				return P(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(c.f)(e) || !!e.price))
			}
			const M = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === u.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const r = e[n];
						t.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: n,
							type: d.a.SavedStripe
						})
					}
				}
				if (n.status === u.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const r = e[n];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
							type: d.a.SavedPayPal
						})
					}
				}
				return t
			};
			var B;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(B || (B = {}));
			const T = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Special Membership"
				},
				k = (e, t) => Object.values(e.products.models).filter(e => e.type === a.a.Membership && t && e.subredditId === t),
				D = (e, t) => {
					if (!t) return {};
					const n = T.prices;
					k(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const r = h(e, t);
					return r && r.price && r.currency && (n[r.currency] = r.price), n
				},
				R = (e, t) => {
					var n, r, s, o;
					const c = (null === (o = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === s ? void 0 : s[t || ""]) || void 0 === o ? void 0 : o.nomenclature) || T;
					return {
						prices: D(e, t),
						member: c.member || T.member,
						memberPlural: c.memberPlural || T.memberPlural,
						memberAlt: c.memberAlt || T.memberAlt,
						memberAltPlural: c.memberAltPlural || T.memberAltPlural,
						membership: c.membership || T.membership,
						membershipAlt: c.membershipAlt || T.membershipAlt
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
				F = e => {
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
				W = (e, t) => !!t && !!Object(f.a)(e, {
					subredditId: t
				}),
				V = (e, t, n) => {
					if (Object(p.b)(e)) return !(!t || !Object(m.C)(e, {
						subredditId: t
					})) || (!!Y(e, t) || !(!r.d.spGiphy(e) || !H(e, n)));
					if (!Object(_.a)(e, {
							subredditId: t
						})) return !1;
					if (Object(f.f)(e, {
							subredditId: t
						})) return !0;
					if (H(e, n)) return !0;
					const s = r.d.spGiphy(e),
						o = $(e, t);
					return !!Y(e, t) || s && o
				},
				H = (e, t) => {
					const n = "replyToPost" !== t && Object(b.c)(e, {
						commentId: t
					});
					if (n && Object(o.a)(n)) return !0
				},
				Y = (e, t) => {
					const n = r.d.spGiphy(e),
						s = $(e, t);
					return n && s
				},
				q = (e, t, n) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[n]
					}
				},
				z = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./src/reddit/models/Gold/Powerups/index.ts"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/actions/gold/constants.ts");
			const c = {};
			var i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r;
					switch (t.type) {
						case o.mb:
						case o.nb: {
							const {
								benefitStatuses: r,
								subredditId: s
							} = t.payload;
							if (!r) return e;
							const o = null !== (n = e[s]) && void 0 !== n ? n : {},
								c = {};
							return r.forEach(e => {
								let {
									benefit: t,
									isEnabled: n
								} = e;
								c[t] = n
							}), {
								...e,
								[s]: {
									...o,
									...c
								}
							}
						}
						case o.L: {
							const {
								benefitStatuses: n,
								subredditId: s
							} = t.payload, o = null !== (r = e[s]) && void 0 !== r ? r : {}, c = {};
							return n.forEach(e => {
								let {
									benefit: t,
									isEnabled: n
								} = e;
								c[t] = n
							}), {
								...e,
								[s]: {
									...o,
									...c
								}
							}
						}
						default:
							return e
					}
				},
				d = n("./node_modules/reselect/es/index.js");
			Object(s.a)({
				features: {
					powerupsBenefitSettings: i
				}
			});
			const a = (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? e.features.powerupsBenefitSettings[n] : null
				},
				u = (e => Object(d.a)(a, t => !!(null == t ? void 0 : t[e])))(r.a.CommentsWithGifs)
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === r.a.Badge) return n
				},
				o = (e, t) => {
					let {
						productId: n
					} = t;
					const r = e.products.models[n];
					if (r) {
						const t = r.subredditId,
							s = Object.keys(e.user.ownedBadges[t] || {}),
							o = e.badges.models,
							c = Date.now();
						let i = !1;
						return s.forEach(e => {
							const t = o[e];
							t && t.type === n && t.endsAt > c && (i = !0)
						}), i
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumNewUserWelcome.3c93d7e6d54d06f4f9d0.js.map