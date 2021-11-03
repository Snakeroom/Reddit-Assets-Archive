// https://www.redditstatic.com/desktop2x/SubredditPremiumNewUserWelcome.554c3fd8bb31ad802386.js
// Retrieved at 11/3/2021, 4:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumNewUserWelcome"], {
		"./node_modules/lodash/flattenDeep.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				s = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? r(e, s) : []
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
				return c
			})), n.d(t, "b", (function() {
				return o
			}));
			const r = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				s = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				c = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				o = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
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
				c = n("./src/reddit/actions/economics/banners/constants.ts");
			const o = Object(s.a)(c.c),
				i = Object(s.a)(c.d),
				d = Object(s.a)(c.a),
				a = Object(s.a)(c.b),
				u = e => async (t, n, {
					apiContext: s
				}) => {
					const c = n();
					if (!c.user.account) return;
					if (c.economics.banners.dismissedBanners[e]) return;
					t(o(e));
					const d = await Object(r.b)(s(), e);
					t(i({
						subredditId: e,
						data: d
					}))
				}, l = (e, t) => async (n, s, {
					apiContext: c
				}) => {
					n(d({
						subredditId: e,
						bannerType: t
					})), Object(r.c)(c(), e, t)
				}, m = (e, t) => async (n, s, {
					apiContext: c
				}) => {
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
				return c
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				c = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
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
				c = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/economics/me/constants.ts");
			const a = Object(i.a)(d.a),
				u = Object(i.a)(d.b),
				l = Object(i.a)(d.c),
				m = e => async (t, n, {
					apiContext: r
				}) => {
					const s = e && e.includeMemberships || !1,
						i = e && e.forceFetch || !1,
						d = n();
					if (!d.economics.me.fetched || s && !d.economics.me.data.specialMemberships || i) {
						const e = await
						function(e, t) {
							return Object(o.a)(e, {
								method: "get",
								endpoint: `${c.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(r(), s);
						if (e.ok) {
							const n = e.body;
							s && !n.specialMemberships && (n.specialMemberships = {}), t(a(n))
						}
					}
				}, b = () => async (e, t) => {
					const n = t(),
						c = n.economics.me.data;
					if (!c) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(u());
						const t = `https://${c.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(s.b)({
								endpoint: t,
								method: r.ib.GET
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
				return c
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
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
				c = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(r.a)(o.a),
				d = Object(r.a)(o.b),
				a = Object(r.a)(o.c),
				u = Object(r.a)(o.d),
				l = Object(r.a)(o.e),
				m = Object(r.a)(o.f),
				b = Object(r.a)(o.g),
				p = Object(r.a)(o.h),
				f = Object(r.a)(o.i),
				_ = e => Object(s.h)(c.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
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
				return c
			})), n.d(t, "d", (function() {
				return o
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
				c = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "d", (function() {
				return v
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
				c = n("./src/reddit/actions/governance/errorToast.ts"),
				o = n("./src/reddit/endpoints/economics/emojis.ts"),
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
			const N = () => async (e, t, {
				apiContext: n
			}) => {
				if (!t().user.account) return;
				await e(Object(E.b)({
					includeMemberships: !0
				}));
				const r = t().economics.me.data.specialMemberships || {},
					s = Object.keys(r);
				if (s.length) {
					const t = await Object(i.e)(n(), s);
					t.ok && e(Object(O.g)(t.body))
				}
			}, C = (e, t) => async (n, r, {
				apiContext: s
			}) => {
				const c = r().user.account,
					o = r().economics.subredditPremium[e],
					i = !o || o.status !== _.a.Fetched || t;
				if (c && i) {
					const t = await Object(d.a)(s(), e, c.id);
					n(Object(O.i)(t))
				}
			}, S = e => async (t, n, {
				apiContext: r
			}) => {
				const s = n(),
					o = s.user.account,
					i = Object(g.f)(s, e.subredditId),
					d = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (o && e.badge) {
					let n, s;
					n = e.placement === b.a.First ? i[p.a.Loyalty] : e.placement === b.a.Second ? i[p.a.Achievement] : i[p.a.Cosmetic], t(Object(O.a)({
						...e,
						badge: j(e.badge),
						currentAppliedBadges: d,
						userId: o.id
					})), y(e.badge) && n ? s = await Object(a.a)(r(), e.subredditId, n.id, !1) : y(e.badge) || (s = await Object(a.a)(r(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(O.a)({
						...e,
						badge: n,
						currentAppliedBadges: d,
						userId: o.id
					})), Object(c.a)(t, s.error))
				}
			}, v = (e, t) => async (n, r, {
				apiContext: s
			}) => {
				await n(C(e, !0));
				const c = r().economics.subredditPremium[e];
				if (c && c.status === _.a.Fetched) {
					const r = c.data.userOwnedBadges.find(e => e.type === t.id);
					r && (n(S({
						badge: r,
						subredditId: e,
						placement: r.placement
					})), n(Object(O.d)(p.c.MyBadges)))
				}
			}, I = e => async (t, n, {
				apiContext: r
			}) => {
				const i = n().user.account,
					d = !n().economics.emotes[e],
					a = !n().economics.gifs[e];
				if (i && (d || a)) {
					const [n, d] = await Promise.all([Object(o.b)(r(), e), m(r(), e, i.id)]);
					if (!d.ok) return void Object(c.a)(t, d.error);
					const a = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					s()(d.body, e => {
						e.type === f.a.EmotesPack ? a.emotes.push(e) : e.type === f.a.Giphy && a.giphy.push(e)
					}), t(Object(O.e)({
						subredditId: e,
						products: a
					}))
				}
			}, P = (e, t, n) => async (r, s, {
				apiContext: c
			}) => {
				if (await r(C(e, !0)), n && t) {
					const n = s(),
						c = Object(g.f)(n, e),
						o = Object(h.a)(n, t);
					if (!c[Object(p.d)(o.placement)] && o) {
						const t = Object(g.l)(n, {
							subredditId: e,
							badge: o
						});
						t && await r(S({
							badge: t,
							subredditId: e
						}))
					}
					r(Object(O.c)({
						subredditId: e,
						initialView: p.c.MyBadges
					}))
				}
			}, A = e => async (t, n, {
				apiContext: r
			}) => {
				const {
					wallet: s
				} = await Object(i.c)(r(), e);
				t(Object(O.f)({
					wallet: s
				})), await t(C(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return o
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
				return N
			})), n.d(t, "v", (function() {
				return C
			})), n.d(t, "w", (function() {
				return S
			})), n.d(t, "x", (function() {
				return v
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				c = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				o = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
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
				N = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				C = "GOVERNANCE__WALLETS_FETCH_PENDING",
				S = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				v = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/models/Toast/index.ts");

			function o(e, t) {
				e(Object(r.f)({
					duration: 5e3,
					kind: c.b.Error,
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
				c = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
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
				collection: (e, {
					badge: t,
					subredditId: n
				}) => {
					if (t.collections) {
						const r = Object.keys(t.collections);
						if (r.length) {
							const t = r[0];
							return Object(m.h)(e, {
								collectionId: t,
								subredditId: n
							})
						}
					}
				},
				progress: (e, {
					badge: t,
					subredditId: n,
					type: r
				}) => {
					if (!Object(a.e)(t) && r === u.a.Achievement && d.a[t.id]) {
						const r = Object(l.a)(e, {
							subredditId: n
						});
						if (r) return {
							complete: parseInt(r.amount),
							total: d.a[t.id]
						}
					}
				}
			});
			t.a = Object(o.b)(_)((function(e) {
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
						url2x: o
					} = Object(a.d)(60, 60, e.badge),
					d = e.progress;
				return c.a.createElement("article", {
					className: Object(i.a)(e.className, {
						[f.a.fullWidth]: !!e.fullWidth
					})
				}, c.a.createElement("div", {
					className: f.a.wrapper
				}, c.a.createElement("img", {
					className: f.a.image,
					src: o,
					srcSet: `${s}, ${o} 2x`
				}), c.a.createElement("div", {
					className: f.a.info
				}, c.a.createElement("div", {
					className: f.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: n
				}, n), c.a.createElement("header", {
					className: f.a.title
				}, e.badge.title), d && d.complete < d.total && c.a.createElement("div", {
					className: f.a.progressContainer
				}, c.a.createElement("div", {
					className: f.a.progressBar
				}, c.a.createElement("div", {
					className: f.a.progressThumb,
					style: {
						width: `${d.complete/d.total*100}%`
					}
				})), c.a.createElement("div", {
					className: f.a.progressAmount
				}, function(e) {
					return `${`${Math.floor(e.complete/1e3)}k`}/${`${Math.floor(e.total/1e3)}k`}`
				}(d))), c.a.createElement("div", {
					className: f.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, n) {
			"use strict";
			var r, s, c, o;

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
					return c
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
				}(c || (c = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(o || (o = {}))
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
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/uuid/v4.js"),
				d = n.n(i),
				a = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/ApiContext.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/endpoints/economics/banners.ts"),
				_ = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/models/Badge/managementPage.ts"),
				h = n("./src/reddit/selectors/economics.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/telemetry.ts"),
				y = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				N = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Header/index.m.less"),
				C = n.n(N);

			function S(e) {
				const {
					className: t,
					subreddit: n
				} = e;
				return s.a.createElement("header", {
					className: Object(a.a)(t, C.a.container)
				}, s.a.createElement("div", {
					className: C.a.tagline
				}, s.a.createElement(j.a, {
					className: C.a.adminIcon
				}), y.fbt._("a note from reddit admins", null, {
					hk: "3addaI"
				})), s.a.createElement("div", {
					className: C.a.title
				}, y.fbt._("Welcome to r/{communityName}!", [y.fbt._param("communityName", n.name)], {
					hk: "2LQnel"
				})))
			}
			var v = n("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx"),
				I = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Jumper/index.m.less"),
				P = n.n(I);
			const A = [0, 500];

			function w(e) {
				return s.a.createElement("div", {
					className: Object(a.a)(P.a.container, e.className)
				}, s.a.createElement(v.a, {
					className: P.a.assets,
					scrollRange: A,
					subreddit: e.subreddit
				}))
			}
			var x = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				M = n("./src/config.ts"),
				B = n("./src/reddit/helpers/economics/membershipPage.ts"),
				k = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Message/index.m.less"),
				T = n.n(k);
			const D = Object(o.c)({
				meta: (e, {
					subreddit: t
				}) => Object(h.r)(e, t.id)
			});
			var R = Object(l.c)(Object(c.b)(D)((function(e) {
					return s.a.createElement("div", {
						className: Object(a.a)(T.a.container, e.className)
					}, y.fbt._("This community is a part of an exclusive experiment run by Reddit Admins.", null, {
						hk: "1lZWqG"
					}), " ", y.fbt._("Hundreds of followers have paid for a", null, {
						hk: "b6O0n"
					}), s.a.createElement("div", {
						className: T.a.branding
					}, s.a.createElement("img", {
						className: T.a.crown,
						src: `${M.a.assetPath}/img/memberships/paywall/fortnitebr/Crown.gif`
					}), e.meta.memberAlt), y.fbt._("subscription.", null, {
						hk: "2NkoEp"
					}), " ", y.fbt._("They benefit by getting unique features that Reddit doesn't provide in any other community.", null, {
						hk: "xffSH"
					}), " ", s.a.createElement(x.a, {
						className: T.a.link,
						to: Object(B.a)(e.subreddit.name, e.correlationId),
						onClick: () => e.sendEvent(t => ({
							source: "meta",
							action: "click",
							noun: "new_user_welcome_learn_more",
							correlationId: e.correlationId,
							...O.defaults(t),
							subreddit: O.subreddit(t)
						}))
					}, y.fbt._("You can learn more here", null, {
						hk: "49vQ0b"
					})), y.fbt._(".", null, {
						hk: "2crLys"
					}))
				}))),
				U = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				L = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				F = n("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				G = n("./src/reddit/controls/Button/index.tsx"),
				$ = n("./src/reddit/endpoints/economics/emojis.ts"),
				W = n("./src/reddit/selectors/products.ts"),
				V = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/NewbieBadge/index.m.less"),
				H = n.n(V);
			const Y = "newbie_badge";
			class q extends s.a.Component {
				constructor() {
					super(...arguments), this.onApply = async () => {
						(await Object($.a)(this.props.apiContext(), {
							productId: Y,
							subredditId: this.props.subredditId
						})).ok && (this.props.onBadgeApplied(), this.props.sendEvent(e => ({
							source: "meta",
							action: "click",
							noun: "new_user_welcome_claim_badge",
							correlationId: this.props.correlationId,
							...O.defaults(e),
							subreddit: O.subreddit(e)
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
						className: Object(a.a)(H.a.container, e)
					}, s.a.createElement("div", {
						className: H.a.label
					}, y.fbt._("you just unlocked your first achievement badge", null, {
						hk: "MbVkT"
					})), s.a.createElement("div", {
						className: H.a.badge
					}, s.a.createElement(F.a, {
						fullWidth: !0,
						badge: t,
						subredditId: n,
						type: g.a.Achievement
					}), s.a.createElement(G.k, {
						onClick: this.onApply
					}, y.fbt._("apply", null, {
						hk: "3BGbhR"
					})))) : null
				}
			}
			const z = Object(o.c)({
				newbieBadge: e => Object(W.a)(e, Y)
			});
			var K = Object(b.b)(Object(l.c)(Object(c.b)(z, (e, {
					subredditId: t
				}) => ({
					onBadgeApplied: () => {
						e(Object(L.d)(t, {
							id: Y
						})), e(Object(U.b)(g.a.Achievement)), e(Object(U.c)({
							subredditId: t
						}))
					}
				}))(q))),
				Q = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.m.less"),
				Z = n.n(Q);
			class X extends s.a.Component {
				constructor(e) {
					super(e), this.hasFiredViewEvent = !1, this.dismissBanner = () => {
						const {
							subreddit: e
						} = this.props;
						e && this.props.onDismissBanner(e.id)
					}, this.state = {
						userWasUnsubscribed: !e.userIsSubscribed
					}, this.correlationId = d()()
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
						...O.defaults(e),
						subreddit: O.subreddit(e)
					}))), s.a.createElement("article", {
						className: Object(a.a)(Z.a.container, e)
					}, s.a.createElement(S, {
						className: Z.a.header,
						subreddit: n
					}), s.a.createElement(w, {
						className: Z.a.jumper,
						subreddit: n
					}), s.a.createElement(R, {
						className: Z.a.message,
						correlationId: this.correlationId,
						subreddit: n
					}), s.a.createElement(K, {
						className: Z.a.newbieBadge,
						correlationId: this.correlationId,
						subredditId: n.id
					}), s.a.createElement(_.a, {
						className: Z.a.close,
						onClick: this.dismissBanner
					}))) : null
				}
			}
			const J = Object(o.c)({
					bannerIsDismissed: (e, t) => {
						const n = Object(p.n)(e, t);
						return n ? Object(h.g)(e, n, f.a.NewUserWelcome) : void 0
					},
					eligibleForBanner: (e, t) => {
						const n = e.user.account,
							r = Object(p.r)(e, t);
						if (!n) return !1;
						if (Object(p.Q)(e, t) !== m.g.Large) return !1;
						if (r) {
							const t = Object(h.f)(e, r.id)[g.a.Achievement];
							if (t && t.type === Y) return !1
						}
						return !0
					},
					subreddit: p.r,
					userIsSubscribed: (e, t) => {
						const n = Object(p.r)(e, t);
						return !!n && Object(E.cb)(e, {
							identifier: {
								name: n.name,
								type: "subreddit"
							}
						})
					}
				}),
				ee = Object(l.c)(X),
				te = Object(c.b)(J, e => ({
					onDismissBanner: t => e(Object(u.a)(t, f.a.NewUserWelcome)),
					onFetchDismissedBanners: t => e(Object(u.b)(t))
				}))(ee),
				ne = Object(p.u)()(te),
				re = Object(b.b)(ne);
			t.default = Object(b.b)(re)
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/flattenDeep.js"),
				s = n.n(r),
				c = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const o = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				i = new Set(s()(Object.keys(c.a).map(e => Object.keys(c.b).map(t => Object.keys(c.c).map(n => `${n}_${e}_${t}_badge`)))))
		},
		"./src/reddit/components/ScrollAnimation/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/clamp.js"),
				s = n.n(r),
				c = n("./node_modules/lodash/throttle.js"),
				o = n.n(c),
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
					const e = e => o()(() => {
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
							c = s()(e, n, r),
							o = Math.min(Math.floor((c - n) / (r - n) * 1e3), 999);
						return {
							...t,
							styles: {
								...t.styles,
								animationDelay: `-${o}s`
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
			var r, s, c = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, n, r) {
				return Object(o.a)(e, {
					endpoint: `${c.a.metaUrl}/storage/${t}/me/${n}`,
					method: "patch",
					data: r
				})
			}
			async function d(e, t) {
				const n = await async function(e, t, n) {
					return Object(o.a)(e, {
						endpoint: `${c.a.metaUrl}/storage/${t}/me/${n}`,
						method: "get"
					})
				}(e, t, r.UpsellBanners);
				return n.ok && n.body || {}
			}
			async function a(e, t, n, s) {
					const c = await d(e, t),
						o = {
							...c,
							[n]: s
						};
					return (await i(e, t, r.UpsellBanners, o)).ok ? o : c
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
				return c
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			const c = (e, t) => Object(s.a)(e, {
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
				o = (e, t) => Object(s.a)(e, {
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
				c = n("./src/reddit/constants/headers.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				d = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function a(e, t) {
				return Object(o.a)(e, {
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
				return Object(o.a)(e, {
					endpoint: `${r.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function l(e, t) {
				return Object(o.a)(e, {
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
				return Object(o.a)(Object(s.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(({
							data: e
						}) => Object(d.a)(e)).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function b(e, t) {
				const n = await Object(o.a)(e, {
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
				c = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/badges.ts"),
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
							endpoint: `${c.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					l = Object(i.a)(e, {
						subredditId: t
					}),
					m = Object(d.b)(e, t),
					b = Object(o.c)(e, t, n),
					[p, f, _, g] = await Promise.all([u, l, m, b]);
				if (p.ok ? r.collections = p.body : r.errors.collections = p.error, f.ok) {
					const e = f.body;
					r.subscription = e.specialMemberships, r.communityRaw = e
				}
				return _.ok ? r.products = _.body : r.errors.products = _.error, g.ok ? (s()(r.badges, g.body.badges), r.userOwnedBadges = g.body.userOwnedBadges) : r.errors.userBadges = g.error, r
			}
			const l = (e, t) => Object(a.a)(e, {
				endpoint: `${c.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			async function c(e, t, n) {
				const c = Object(s.a)(e, {
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
					o = await c;
				if (o.ok) {
					const e = {},
						t = {},
						n = o.body;
					return Object.keys(n).forEach(r => {
						const s = n[r];
						t[r] = s, e[s.userId] || (e[s.userId] = []), e[s.userId].push(s.id)
					}), {
						...o,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return o
			}
			async function o(e, t, n) {
				const c = await Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/badges/${t}?users=${n}`
				});
				if (c.ok) {
					const e = {},
						t = [],
						n = c.body;
					return Object.keys(n).forEach(r => {
						const s = n[r];
						e[r] = s, t.push(s.id)
					}), {
						...c,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return c
			}

			function i(e, t, n, c = !0) {
				return Object(s.a)(e, {
					method: "patch",
					endpoint: `${r.a.metaUrl}/badges/${t}/${n}`,
					data: {
						selected: c
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(c.a)(e, {
					endpoint: `${r.a.metaUrl}/communities/${t.subredditId}/me`,
					method: s.ib.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return d
			}));
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function o(e, t) {
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
				return c
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function c(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : r.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function o(e) {
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
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(c.a)(e.className, i.a.admin, {
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
				return o
			})), n.d(t, "d", (function() {
				return i
			}));
			var r, s, c = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const o = {
					[r.Loyalty]: c.a.First,
					[r.Achievement]: c.a.Second,
					[r.Cosmetic]: void 0
				},
				i = e => e === c.a.First ? r.Loyalty : e === c.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var r, s, c, o;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return c
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(c || (c = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
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
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/ScrollAnimation/index.tsx"),
				i = n("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				d = n("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less"),
				a = n.n(d);
			const u = [1700, 2400];

			function l(e) {
				const t = e.scrollRange || u;
				return s.a.createElement("footer", {
					className: Object(c.a)(a.a.container, e.className)
				}, s.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/8fvy7o/these_items_are_cosmetic_only_and_grant_no/",
					target: "_blank"
				}, s.a.createElement(o.a, {
					scrollRange: t
				}, t => s.a.createElement("img", {
					className: a.a.jumperBullet,
					src: Object(i.a)(e.subreddit, "jumper_bullet@2x.png"),
					style: t
				})), s.a.createElement(o.a, {
					scrollRange: t
				}, t => s.a.createElement("img", {
					className: a.a.jumperArmLeft,
					src: Object(i.a)(e.subreddit, "jumper_arm_left@2x.png"),
					style: t
				})), s.a.createElement(o.a, {
					scrollRange: t
				}, t => s.a.createElement("img", {
					className: a.a.jumperLegLeft,
					src: Object(i.a)(e.subreddit, "jumper_leg_left@2x.png"),
					style: t
				})), s.a.createElement(o.a, {
					scrollRange: t
				}, t => s.a.createElement("img", {
					className: a.a.jumperLegRight,
					src: Object(i.a)(e.subreddit, "jumper_leg_right@2x.png"),
					style: t
				})), s.a.createElement("img", {
					className: a.a.jumperTorso,
					src: Object(i.a)(e.subreddit, "jumper_torso@2x.png")
				}), s.a.createElement(o.a, {
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
			const c = {
				status: r.NotFetched
			};
			t.b = (e = c, t) => {
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
				c = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				o = n("./src/reddit/helpers/economics/sortBadges.ts"),
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
						let c;
						(c = e.placement ? e.placement === i.a.First ? r[d.a.Loyalty][s] : r[d.a.Achievement][s] : u(e) ? r[d.a.Cosmetic][d.c.MyBadges][s] : r[d.a.Cosmetic][d.c.Gallery][s]) && (u(e) ? n.has(e.id) && c.unlocked.push(e) : t.has(e.id) || c.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(o.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function b(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, n) => {
					const r = t[e.id],
						s = t[n.id];
					return Object(o.b)(r, s)
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
			t.b = (e = a, t) => {
				switch (t.type) {
					case c.a: {
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
					case c.h: {
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
					case c.i: {
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
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const o = {};
			var i = (e = o, t) => {
					switch (t.type) {
						case c.a: {
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
			const a = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function l(e) {
				var t, n, r, s, c;
				const o = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					i = null == o ? void 0 : o.contracts,
					d = null == i ? void 0 : i.unlocked,
					a = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					l = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					m = (null == d ? void 0 : d.decimals) || 0,
					b = "1" + "0".repeat(m);
				return {
					blockchainProvider: a,
					contractAddress: (null == d ? void 0 : d.address) || "",
					contracts: i,
					decimals: m,
					displayConversion: b,
					images: e.images || u,
					inTransition: l,
					name: e.name,
					nomenclature: null === (c = e.extra) || void 0 === c ? void 0 : c.nomenclature,
					polls: e.polls,
					symbol: (null == d ? void 0 : d.token) || ""
				}
			}
			var m = (e = a, t) => {
				switch (t.type) {
					case d.a: {
						const {
							subredditId: n,
							meta: r
						} = t.payload;
						return {
							...e,
							[n]: l(r)
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var p = (e = b, t) => {
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
				points: m,
				publicWallets: p
			})
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
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
			const c = (e, t) => {
					var n;
					return t && (null === (n = e.user.wallets[t.subredditId]) || void 0 === n ? void 0 : n.latest)
				},
				o = (e, t) => {
					var n;
					return null === (n = c(e, t)) || void 0 === n ? void 0 : n.publicAddress
				},
				i = (e, t) => {
					var n, r, s, c;
					return null === (c = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === c ? void 0 : c[t.subredditId]
				}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return _
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "x", (function() {
				return E
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "q", (function() {
				return j
			})), n.d(t, "h", (function() {
				return N
			})), n.d(t, "z", (function() {
				return C
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "j", (function() {
				return A
			})), n.d(t, "p", (function() {
				return w
			})), n.d(t, "k", (function() {
				return B
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "y", (function() {
				return D
			})), n.d(t, "u", (function() {
				return R
			})), n.d(t, "v", (function() {
				return U
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "w", (function() {
				return F
			})), n.d(t, "s", (function() {
				return G
			})), n.d(t, "t", (function() {
				return $
			})), n.d(t, "g", (function() {
				return W
			})), n.d(t, "m", (function() {
				return V
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/helpers/economics/sortBadges.ts"),
				c = n("./src/reddit/helpers/richTextJson/index.ts"),
				o = n("./src/reddit/models/Badge/index.ts"),
				i = n("./src/reddit/models/Badge/managementPage.ts"),
				d = n("./src/reddit/models/Payments/index.ts"),
				a = n("./src/reddit/models/Product/index.ts"),
				u = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/reddit/selectors/gold/powerups/index.ts"),
				p = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const f = [],
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
				g = (e, t) => {
					const n = _(e, t);
					return n && n.endsAt || null
				};
			var h;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(h || (h = {}));
			const E = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === l.a.Fetched) {
						const n = g(e, t),
							r = Date.now();
						return n && r < n ? h.Subscribed : h.NotSubscribed
					}
					return h.DontKnow
				},
				O = (e, t) => {
					const n = e.user.account,
						r = e.economics.subredditPremium[t];
					if (n && r && r.status === l.a.Fetched) {
						const r = ((e.users.appliedBadges[n.id] || {})[t] || f).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[i.a.Loyalty]: r.find(e => e.placement === o.a.First),
							[i.a.Achievement]: r.find(e => e.placement === o.a.Second),
							[i.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function y(e, t) {
				return (null == e ? void 0 : e.length) ? Object(s.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const j = (e, t, n) => {
					var s;
					if (!r.d.spBadges(e)) return f;
					return y(null === (s = e.users.appliedBadges[n]) || void 0 === s ? void 0 : s[t], e.badges.models)
				},
				N = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === l.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function C(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function S(e, t) {
				const {
					badge: n,
					subredditId: r
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(n) && n.userId === s) return n;
				const c = e.badges.models,
					i = e.user.ownedBadges[r] || {},
					d = Object(o.e)(n) ? n.type : n.id;
				return Object.keys(i).map(e => c[e]).find(e => e && e.type === d)
			}

			function v(e, t, n, r) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === l.a.Fetched) {
					if (n === i.a.Loyalty || n === i.a.Achievement) return s.data.collections[n];
					if (n === i.a.Cosmetic && r) return s.data.collections[n][r]
				}
				return f
			}

			function I(e, t) {
				const n = v(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function P(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === l.a.Fetched) {
					const e = n.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return f
			}

			function A(e, t) {
				return v(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const w = e => {
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
			var x;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(x || (x = {}));
			const M = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				B = (e, t) => Object.values(e.products.models).filter(e => e.type === a.a.Membership && t && e.subredditId === t),
				k = (e, t) => {
					if (!t) return {};
					const n = M.prices;
					B(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const r = _(e, t);
					return r && r.price && r.currency && (n[r.currency] = r.price), n
				},
				T = (e, t) => {
					var n, r, s, c;
					const o = (null === (c = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === s ? void 0 : s[t || ""]) || void 0 === c ? void 0 : c.nomenclature) || M;
					return {
						prices: k(e, t),
						member: o.member || M.member,
						memberPlural: o.memberPlural || M.memberPlural,
						memberAlt: o.memberAlt || M.memberAlt,
						memberAltPlural: o.memberAltPlural || M.memberAltPlural,
						membership: o.membership || M.membership,
						membershipAlt: o.membershipAlt || M.membershipAlt
					}
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				R = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				L = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				F = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				G = (e, t, n) => {
					if (Object(b.r)(e, {
							subredditId: t
						})) return !0;
					const r = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					return !(!r || !Object(c.a)(r))
				},
				$ = (e, t, n) => {
					if (!Object(p.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(b.s)(e, {
							subredditId: t
						})) return !0;
					const s = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					if (s && Object(c.b)(s)) return !0;
					const o = r.d.spGiphy(e),
						i = F(e, t);
					return !(!o || !i) || o && i
				},
				W = (e, t, n) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[n]
					}
				},
				V = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === r.a.Badge) return n
				},
				c = (e, {
					productId: t
				}) => {
					const n = e.products.models[t];
					if (n) {
						const r = n.subredditId,
							s = Object.keys(e.user.ownedBadges[r] || {}),
							c = e.badges.models,
							o = Date.now();
						let i = !1;
						return s.forEach(e => {
							const n = c[e];
							n && n.type === t && n.endsAt > o && (i = !0)
						}), i
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumNewUserWelcome.554c3fd8bb31ad802386.js.map