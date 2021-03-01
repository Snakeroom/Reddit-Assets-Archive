// https://www.redditstatic.com/desktop2x/SubredditPremiumNewUserWelcome.6df40ef0be7f1e102d9c.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumNewUserWelcome"], {
		"./node_modules/lodash/flattenDeep.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseFlatten.js"),
				n = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? r(e, n) : []
			}
		},
		"./src/reddit/actions/economics/banners/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return l
			}));
			var r = s("./src/reddit/endpoints/economics/banners.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/economics/banners/constants.ts");
			const c = Object(n.a)(i.c),
				o = Object(n.a)(i.d),
				a = Object(n.a)(i.a),
				d = Object(n.a)(i.b),
				u = e => async (t, s, {
					apiContext: n
				}) => {
					const i = s();
					if (!i.user.account) return;
					if (i.economics.banners.dismissedBanners[e]) return;
					t(c(e));
					const a = await Object(r.b)(n(), e);
					t(o({
						subredditId: e,
						data: a
					}))
				}, m = (e, t) => async (s, n, {
					apiContext: i
				}) => {
					s(a({
						subredditId: e,
						bannerType: t
					})), Object(r.c)(i(), e, t)
				}, l = (e, t) => async (s, n, {
					apiContext: i
				}) => {
					s(d({
						subredditId: e,
						bannerType: t
					})), Object(r.e)(i(), e, t)
				}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return n
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				n = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "j", (function() {
				return g
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(r.a)(c.a),
				a = Object(r.a)(c.b),
				d = Object(r.a)(c.c),
				u = Object(r.a)(c.d),
				m = Object(r.a)(c.e),
				l = Object(r.a)(c.f),
				b = Object(r.a)(c.g),
				p = Object(r.a)(c.h),
				f = Object(r.a)(c.i),
				g = e => Object(n.h)(i.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "c", (function() {
				return N
			})), s.d(t, "f", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/forOwn.js"),
				n = s.n(r),
				i = s("./src/reddit/actions/governance/errorToast.ts"),
				c = s("./src/reddit/endpoints/economics/emojis.ts"),
				o = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				a = s("./src/reddit/endpoints/economics/subredditPremium.ts"),
				d = s("./src/reddit/endpoints/governance/badges.ts"),
				u = s("./src/config.ts"),
				m = s("./src/reddit/endpoints/governance/requester.ts");

			function l(e, t, s) {
				return Object(m.a)(e, {
					method: "get",
					endpoint: `${u.a.metaUrl}/products/${t}?owners=${s}` + "&types=emotes_pack,giphy"
				})
			}
			var b = s("./src/reddit/models/Badge/index.ts"),
				p = s("./src/reddit/models/Badge/managementPage.ts"),
				f = s("./src/reddit/models/Product/index.ts"),
				g = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				h = s("./src/reddit/selectors/economics.ts"),
				j = s("./src/reddit/selectors/products.ts"),
				y = s("./src/reddit/actions/economics/me/thunkedActions.ts"),
				_ = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function O(e) {
				return !!e && "removeBadge" === e.type
			}

			function v(e) {
				if (!O(e)) return e
			}
			const w = () => async (e, t, {
				apiContext: s
			}) => {
				if (!t().user.account) return;
				await e(Object(y.b)({
					includeMemberships: !0
				}));
				const r = t().economics.me.data.specialMemberships || {},
					n = Object.keys(r);
				if (n.length) {
					const t = await Object(o.e)(s(), n);
					t.ok && e(Object(_.g)(t.body))
				}
			}, x = (e, t) => async (s, r, {
				apiContext: n
			}) => {
				const i = r().user.account,
					c = r().economics.subredditPremium[e],
					o = !c || c.status !== g.a.Fetched || t;
				if (i && o) {
					const t = await Object(a.a)(n(), e, i.id);
					s(Object(_.i)(t))
				}
			}, P = e => async (t, s, {
				apiContext: r
			}) => {
				const n = s(),
					c = n.user.account,
					o = Object(h.f)(n, e.subredditId),
					a = Object.keys(o).map(e => o[e]).filter(Boolean);
				if (c && e.badge) {
					let s, n;
					s = e.placement === b.a.First ? o[p.a.Loyalty] : e.placement === b.a.Second ? o[p.a.Achievement] : o[p.a.Cosmetic], t(Object(_.a)({
						...e,
						badge: v(e.badge),
						currentAppliedBadges: a,
						userId: c.id
					})), O(e.badge) && s ? n = await Object(d.a)(r(), e.subredditId, s.id, !1) : O(e.badge) || (n = await Object(d.a)(r(), e.subredditId, e.badge.id)), n && !n.ok && (t(Object(_.a)({
						...e,
						badge: s,
						currentAppliedBadges: a,
						userId: c.id
					})), Object(i.a)(t, n.error))
				}
			}, E = (e, t) => async (s, r, {
				apiContext: n
			}) => {
				await s(x(e, !0));
				const i = r().economics.subredditPremium[e];
				if (i && i.status === g.a.Fetched) {
					const r = i.data.userOwnedBadges.find(e => e.type === t.id);
					r && (s(P({
						badge: r,
						subredditId: e,
						placement: r.placement
					})), s(Object(_.d)(p.c.MyBadges)))
				}
			}, C = e => async (t, s, {
				apiContext: r
			}) => {
				const o = s().user.account,
					a = !s().economics.emotes[e],
					d = !s().economics.gifs[e];
				if (o && (a || d)) {
					const [s, a] = await Promise.all([Object(c.b)(r(), e), l(r(), e, o.id)]);
					if (!a.ok) return void Object(i.a)(t, a.error);
					const d = {
						emotes: [],
						emoteCollections: s.ok ? s.body : {},
						giphy: []
					};
					n()(a.body, e => {
						e.type === f.a.EmotesPack ? d.emotes.push(e) : e.type === f.a.Giphy && d.giphy.push(e)
					}), t(Object(_.e)({
						subredditId: e,
						products: d
					}))
				}
			}, N = (e, t, s) => async (r, n, {
				apiContext: i
			}) => {
				if (await r(x(e, !0)), s && t) {
					const s = n(),
						i = Object(h.f)(s, e),
						c = Object(j.a)(s, t);
					if (!i[Object(p.d)(c.placement)] && c) {
						const t = Object(h.k)(s, {
							subredditId: e,
							badge: c
						});
						t && await r(P({
							badge: t,
							subredditId: e
						}))
					}
					r(Object(_.c)({
						subredditId: e,
						initialView: p.c.MyBadges
					}))
				}
			}, B = e => async (t, s, {
				apiContext: r
			}) => {
				const {
					wallet: n
				} = await Object(o.c)(r(), e);
				t(Object(_.f)({
					wallet: n
				})), await t(x(e.subredditId, !0))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				c = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				d = s("./src/reddit/models/Badge/index.ts"),
				u = s("./src/reddit/models/Badge/managementPage.ts"),
				m = s("./src/reddit/selectors/crypto/wallet.ts"),
				l = s("./src/reddit/selectors/economics.ts"),
				b = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				f = s.n(p);
			const g = Object(b.c)({
				collection: (e, {
					badge: t,
					subredditId: s
				}) => {
					if (t.collections) {
						const r = Object.keys(t.collections);
						if (r.length) {
							const t = r[0];
							return Object(l.h)(e, {
								collectionId: t,
								subredditId: s
							})
						}
					}
				},
				progress: (e, {
					badge: t,
					subredditId: s,
					type: r
				}) => {
					if (!Object(d.e)(t) && r === u.a.Achievement && a.a[t.id]) {
						const r = Object(m.a)(e, {
							subredditId: s
						});
						if (r) return {
							complete: parseInt(r.amount),
							total: a.a[t.id]
						}
					}
				}
			});
			t.a = Object(c.b)(g)((function(e) {
				const t = e.type === u.a.Loyalty ? r.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === u.a.Achievement ? r.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : r.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					s = e.collection ? e.collection.title : t,
					{
						url: n,
						url2x: c
					} = Object(d.d)(60, 60, e.badge),
					a = e.progress;
				return i.a.createElement("article", {
					className: Object(o.a)(e.className, {
						[f.a.fullWidth]: !!e.fullWidth
					})
				}, i.a.createElement("div", {
					className: f.a.wrapper
				}, i.a.createElement("img", {
					className: f.a.image,
					src: c,
					srcSet: `${n}, ${c} 2x`
				}), i.a.createElement("div", {
					className: f.a.info
				}, i.a.createElement("div", {
					className: f.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: s
				}, s), i.a.createElement("header", {
					className: f.a.title
				}, e.badge.title), a && a.complete < a.total && i.a.createElement("div", {
					className: f.a.progressContainer
				}, i.a.createElement("div", {
					className: f.a.progressBar
				}, i.a.createElement("div", {
					className: f.a.progressThumb,
					style: {
						width: `${a.complete/a.total*100}%`
					}
				})), i.a.createElement("div", {
					className: f.a.progressAmount
				}, function(e) {
					return `${`${Math.floor(e.complete/1e3)}k`}/${`${Math.floor(e.total/1e3)}k`}`
				}(a))), i.a.createElement("div", {
					className: f.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, s) {
			"use strict";
			var r, n, i, c;

			function o(e) {
				const {
					platform: t,
					playerType: s,
					region: r,
					style: n
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${n}/${r}_${t}_${s}_${n}.svg`
			}
			s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})), s.d(t, "c", (function() {
					return i
				})), s.d(t, "d", (function() {
					return o
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(r || (r = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(n || (n = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(i || (i = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(c || (c = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Header/index.m.less": function(e, t, s) {
			e.exports = {
				adminIcon: "_3DBC88ju9HyGJROMgq_F97",
				tagline: "_2ns4H3PImrmpOdoWZOcKMh",
				title: "_3roTQxzmBtpWPUliC-RDN4"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Jumper/index.m.less": function(e, t, s) {
			e.exports = {
				assets: "rc9uwSKhfz2sYMicAJ2DC"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Message/index.m.less": function(e, t, s) {
			e.exports = {
				branding: "_23unQtjTQ_n6BjirQwG00B",
				container: "_3AZuRe_UgoWbtKNJS9NIq7",
				crown: "At1WqrMnAtMf-GF7yvDTE",
				link: "_2kqLnXg-22rlxFJn4z7GBC"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/NewbieBadge/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_30E7byXU3_1B4T7_r3ztFc",
				label: "_13rfgT1x6TMBcCq9TNT3B0"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.m.less": function(e, t, s) {
			e.exports = {
				close: "_2707HQ8wAoNAWOYToe3mOV",
				container: "p0xnZL-WCSelAxMeF2_7i",
				header: "_2KztCw3Gn5cmpUK-pjs01-",
				message: "qICCKz58S2wSANlB9NC1x",
				newbieBadge: "_24PsjCZsKtJryP0hTG1IT9"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				o = s("./node_modules/uuid/v4.js"),
				a = s.n(o),
				d = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/ApiContext.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/endpoints/economics/banners.ts"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				h = s("./src/reddit/models/Badge/managementPage.ts"),
				j = s("./src/reddit/selectors/economics.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
				O = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				w = s("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Header/index.m.less"),
				x = s.n(w);

			function P(e) {
				const {
					className: t,
					subreddit: s
				} = e;
				return n.a.createElement("header", {
					className: Object(d.a)(t, x.a.container)
				}, n.a.createElement("div", {
					className: x.a.tagline
				}, n.a.createElement(v.a, {
					className: x.a.adminIcon
				}), O.fbt._("a note from reddit admins", null, {
					hk: "3addaI"
				})), n.a.createElement("div", {
					className: x.a.title
				}, O.fbt._("Welcome to r/{communityName}!", [O.fbt._param("communityName", s.name)], {
					hk: "2LQnel"
				})))
			}
			var E = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx"),
				C = s("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Jumper/index.m.less"),
				N = s.n(C);
			const B = [0, 500];

			function S(e) {
				return n.a.createElement("div", {
					className: Object(d.a)(N.a.container, e.className)
				}, n.a.createElement(E.a, {
					className: N.a.assets,
					scrollRange: B,
					subreddit: e.subreddit
				}))
			}
			var I = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				A = s("./src/config.ts"),
				k = s("./src/reddit/helpers/economics/membershipPage.ts"),
				M = s("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Message/index.m.less"),
				L = s.n(M);
			const D = Object(c.c)({
				meta: (e, {
					subreddit: t
				}) => Object(j.q)(e, t.id)
			});
			var U = Object(m.c)(Object(i.b)(D)((function(e) {
					return n.a.createElement("div", {
						className: Object(d.a)(L.a.container, e.className)
					}, O.fbt._("This community is a part of an exclusive experiment run by Reddit Admins.", null, {
						hk: "1lZWqG"
					}), " ", O.fbt._("Hundreds of followers have paid for a", null, {
						hk: "b6O0n"
					}), n.a.createElement("div", {
						className: L.a.branding
					}, n.a.createElement("img", {
						className: L.a.crown,
						src: `${A.a.assetPath}/img/memberships/paywall/fortnitebr/Crown.gif`
					}), e.meta.memberAlt), O.fbt._("subscription.", null, {
						hk: "2NkoEp"
					}), " ", O.fbt._("They benefit by getting unique features that Reddit doesn't provide in any other community.", null, {
						hk: "xffSH"
					}), " ", n.a.createElement(I.a, {
						className: L.a.link,
						to: Object(k.a)(e.subreddit.name, e.correlationId),
						onClick: () => e.sendEvent(t => ({
							source: "meta",
							action: "click",
							noun: "new_user_welcome_learn_more",
							correlationId: e.correlationId,
							..._.defaults(t),
							subreddit: _.subreddit(t)
						}))
					}, O.fbt._("You can learn more here", null, {
						hk: "49vQ0b"
					})), O.fbt._(".", null, {
						hk: "2crLys"
					}))
				}))),
				F = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				W = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				$ = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				T = s("./src/reddit/controls/Button/index.tsx"),
				R = s("./src/reddit/endpoints/economics/emojis.ts"),
				G = s("./src/reddit/selectors/products.ts"),
				q = s("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/NewbieBadge/index.m.less"),
				H = s.n(q);
			const K = "newbie_badge";
			class z extends n.a.Component {
				constructor() {
					super(...arguments), this.onApply = async () => {
						(await Object(R.a)(this.props.apiContext(), {
							productId: K,
							subredditId: this.props.subredditId
						})).ok && (this.props.onBadgeApplied(), this.props.sendEvent(e => ({
							source: "meta",
							action: "click",
							noun: "new_user_welcome_claim_badge",
							correlationId: this.props.correlationId,
							..._.defaults(e),
							subreddit: _.subreddit(e)
						})))
					}
				}
				render() {
					const {
						className: e,
						newbieBadge: t,
						subredditId: s
					} = this.props;
					return t ? n.a.createElement("div", {
						className: Object(d.a)(H.a.container, e)
					}, n.a.createElement("div", {
						className: H.a.label
					}, O.fbt._("you just unlocked your first achievement badge", null, {
						hk: "MbVkT"
					})), n.a.createElement("div", {
						className: H.a.badge
					}, n.a.createElement($.a, {
						fullWidth: !0,
						badge: t,
						subredditId: s,
						type: h.a.Achievement
					}), n.a.createElement(T.i, {
						onClick: this.onApply
					}, O.fbt._("apply", null, {
						hk: "3BGbhR"
					})))) : null
				}
			}
			const V = Object(c.c)({
				newbieBadge: e => Object(G.a)(e, K)
			});
			var Z = Object(b.b)(Object(m.c)(Object(i.b)(V, (e, {
					subredditId: t
				}) => ({
					onBadgeApplied: () => {
						e(Object(W.d)(t, {
							id: K
						})), e(Object(F.b)(h.a.Achievement)), e(Object(F.c)({
							subredditId: t
						}))
					}
				}))(z))),
				Q = s("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.m.less"),
				Y = s.n(Q);
			class X extends n.a.Component {
				constructor(e) {
					super(e), this.hasFiredViewEvent = !1, this.dismissBanner = () => {
						const {
							subreddit: e
						} = this.props;
						e && this.props.onDismissBanner(e.id)
					}, this.state = {
						userWasUnsubscribed: !e.userIsSubscribed
					}, this.correlationId = a()()
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
						subreddit: s
					} = this.props;
					return s && this.props.userIsSubscribed && this.state.userWasUnsubscribed && !1 === this.props.bannerIsDismissed && t ? (this.hasFiredViewEvent || (this.hasFiredViewEvent = !0, this.props.sendEvent(e => ({
						source: "meta",
						action: "view",
						noun: "new_user_welcome",
						correlationId: this.correlationId,
						..._.defaults(e),
						subreddit: _.subreddit(e)
					}))), n.a.createElement("article", {
						className: Object(d.a)(Y.a.container, e)
					}, n.a.createElement(P, {
						className: Y.a.header,
						subreddit: s
					}), n.a.createElement(S, {
						className: Y.a.jumper,
						subreddit: s
					}), n.a.createElement(U, {
						className: Y.a.message,
						correlationId: this.correlationId,
						subreddit: s
					}), n.a.createElement(Z, {
						className: Y.a.newbieBadge,
						correlationId: this.correlationId,
						subredditId: s.id
					}), n.a.createElement(g.a, {
						className: Y.a.close,
						onClick: this.dismissBanner
					}))) : null
				}
			}
			const J = Object(c.c)({
					bannerIsDismissed: (e, t) => {
						const s = Object(p.m)(e, t);
						return s ? Object(j.g)(e, s, f.a.NewUserWelcome) : void 0
					},
					eligibleForBanner: (e, t) => {
						const s = e.user.account,
							r = Object(p.q)(e, t);
						if (!s) return !1;
						if (Object(p.N)(e, t) !== l.g.Large) return !1;
						if (r) {
							const t = Object(j.f)(e, r.id)[h.a.Achievement];
							if (t && t.type === K) return !1
						}
						return !0
					},
					subreddit: p.q,
					userIsSubscribed: (e, t) => {
						const s = Object(p.q)(e, t);
						return !!s && Object(y.fb)(e, {
							identifier: {
								name: s.name,
								type: "subreddit"
							}
						})
					}
				}),
				ee = Object(m.c)(X),
				te = Object(i.b)(J, e => ({
					onDismissBanner: t => e(Object(u.a)(t, f.a.NewUserWelcome)),
					onFetchDismissedBanners: t => e(Object(u.b)(t))
				}))(ee),
				se = Object(p.t)()(te),
				re = Object(b.b)(se);
			t.default = Object(b.b)(re)
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/flattenDeep.js"),
				n = s.n(r),
				i = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const c = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				o = new Set(n()(Object.keys(i.a).map(e => Object.keys(i.b).map(t => Object.keys(i.c).map(s => `${s}_${e}_${t}_badge`)))))
		},
		"./src/reddit/components/ScrollAnimation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/clamp.js"),
				n = s.n(r),
				i = s("./node_modules/lodash/throttle.js"),
				c = s.n(i),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				d = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/components/Scroller/getDocumentTop.ts"),
				m = s("./src/reddit/components/Scroller/Simple.tsx");
			const l = (() => {
					const e = new Map,
						t = {
							get: t => e.get(t) || [],
							add: (s, r) => {
								const n = t.get(s);
								return e.set(s, n.concat(r)), t
							},
							remove: (s, r) => {
								const n = t.get(s);
								return e.set(s, n.filter(e => e !== r)), t
							}
						};
					return t
				})(),
				b = (() => {
					const e = e => c()(() => {
							d.a.read(() => {
								const t = (e => Object(m.a)(e) ? Object(u.a)() : e.scrollTop)(e);
								l.get(e).forEach(e => e(t))
							})
						}, 16),
						t = new Map;
					return {
						on: (s, r) => {
							if (!l.get(s).length) {
								const r = e(s);
								t.set(s, r), s.addEventListener("scroll", r)
							}
							l.add(s, r)
						},
						off: (e, s) => {
							if (l.remove(e, s), !l.get(e).length) {
								const s = t.get(e);
								s && e.removeEventListener("scroll", s)
							}
						}
					}
				})();
			class p extends a.a.Component {
				constructor(e) {
					super(e), this.getContainer = () => this.props.containerRef || document.getElementById("overlayScrollContainer") || document, this.updateScrollPosition = e => this.setState(t => {
						const s = this.props.scrollRange[0],
							r = this.props.scrollRange[1],
							i = n()(e, s, r),
							c = Math.min(Math.floor((i - s) / (r - s) * 1e3), 999);
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
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "d", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n, i = s("./src/config.ts"),
				c = s("./src/reddit/endpoints/governance/requester.ts");
			async function o(e, t, s, r) {
				return Object(c.a)(e, {
					endpoint: `${i.a.metaUrl}/storage/${t}/me/${s}`,
					method: "patch",
					data: r
				})
			}
			async function a(e, t) {
				const s = await async function(e, t, s) {
					return Object(c.a)(e, {
						endpoint: `${i.a.metaUrl}/storage/${t}/me/${s}`,
						method: "get"
					})
				}(e, t, r.UpsellBanners);
				return s.ok && s.body || {}
			}
			async function d(e, t, s, n) {
					const i = await a(e, t),
						c = {
							...i,
							[s]: n
						};
					return (await o(e, t, r.UpsellBanners, c)).ok ? c : i
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(r || (r = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(n || (n = {}));
			const u = async (e, t, s) => d(e, t, s, !0), m = async (e, t, s) => d(e, t, s, !1), l = (e, t) => o(e, t, r.UpsellBanners, Object.keys(n).reduce((e, t) => (e[n[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var r = s("./src/config.ts"),
				n = s("./src/reddit/endpoints/governance/requester.ts");
			const i = (e, t) => Object(n.a)(e, {
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
				c = (e, t) => Object(n.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "c", (function() {
				return b
			}));
			var r = s("./src/config.ts"),
				n = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/endpoints/governance/requester.ts"),
				o = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function d(e, t) {
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

			function m(e, t) {
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

			function l(e, t) {
				return Object(c.a)(Object(n.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(({
							data: e
						}) => Object(a.a)(e)).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function b(e, t) {
				const s = await Object(c.a)(e, {
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
				if (!s.ok) throw new Error(`Error fetching provisional membership: ${Object(o.b)(s.error)}`);
				return s.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/merge.js"),
				n = s.n(r),
				i = s("./src/config.ts"),
				c = s("./src/reddit/endpoints/governance/badges.ts"),
				o = s("./src/reddit/endpoints/governance/community.ts"),
				a = s("./src/reddit/endpoints/governance/products/badges.ts"),
				d = s("./src/reddit/endpoints/governance/requester.ts");
			async function u(e, t, s) {
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
						return Object(d.a)(e, {
							method: "get",
							endpoint: `${i.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					m = Object(o.a)(e, {
						subredditId: t
					}),
					l = Object(a.b)(e, t),
					b = Object(c.c)(e, t, s),
					[p, f, g, h] = await Promise.all([u, m, l, b]);
				if (p.ok ? r.collections = p.body : r.errors.collections = p.error, f.ok) {
					const e = f.body;
					r.subscription = e.specialMemberships, r.communityRaw = e
				}
				return g.ok ? r.products = g.body : r.errors.products = g.error, h.ok ? (n()(r.badges, h.body.badges), r.userOwnedBadges = h.body.userOwnedBadges) : r.errors.userBadges = h.error, r
			}
			const m = (e, t) => Object(d.a)(e, {
				endpoint: `${i.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./src/config.ts"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(i.a)(e, {
					endpoint: `${r.a.metaUrl}/communities/${t.subredditId}/me`,
					method: n.cb.GET
				})
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/lib/permalinkToOverlayLocation/index.ts");

			function n(e, t) {
				return Object(r.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, s) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/svgs/Admin/index.m.less"),
				o = s.n(c);
			t.a = e => n.a.createElement("svg", {
				className: Object(i.a)(e.className, o.a.admin, {
					[o.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), n.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var r, n, i;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(n || (n = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(i || (i = {}))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/ScrollAnimation/index.tsx"),
				o = s("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				a = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less"),
				d = s.n(a);
			const u = [1700, 2400];

			function m(e) {
				const t = e.scrollRange || u;
				return n.a.createElement("footer", {
					className: Object(i.a)(d.a.container, e.className)
				}, n.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/8fvy7o/these_items_are_cosmetic_only_and_grant_no/",
					target: "_blank"
				}, n.a.createElement(c.a, {
					scrollRange: t
				}, t => n.a.createElement("img", {
					className: d.a.jumperBullet,
					src: Object(o.a)(e.subreddit, "jumper_bullet@2x.png"),
					style: t
				})), n.a.createElement(c.a, {
					scrollRange: t
				}, t => n.a.createElement("img", {
					className: d.a.jumperArmLeft,
					src: Object(o.a)(e.subreddit, "jumper_arm_left@2x.png"),
					style: t
				})), n.a.createElement(c.a, {
					scrollRange: t
				}, t => n.a.createElement("img", {
					className: d.a.jumperLegLeft,
					src: Object(o.a)(e.subreddit, "jumper_leg_left@2x.png"),
					style: t
				})), n.a.createElement(c.a, {
					scrollRange: t
				}, t => n.a.createElement("img", {
					className: d.a.jumperLegRight,
					src: Object(o.a)(e.subreddit, "jumper_leg_right@2x.png"),
					style: t
				})), n.a.createElement("img", {
					className: d.a.jumperTorso,
					src: Object(o.a)(e.subreddit, "jumper_torso@2x.png")
				}), n.a.createElement(c.a, {
					scrollRange: t
				}, t => n.a.createElement("img", {
					className: d.a.jumperArmRight,
					src: Object(o.a)(e.subreddit, "jumper_arm_right@2x.png"),
					style: t
				}))))
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/config.ts");
			const n = (e, t) => `${r.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/redux/es/redux.js"),
				n = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/economics/claims/constants.ts")),
				i = s("./src/reddit/actions/economics/me/constants.ts");
			const c = {};
			var o = (e = c, t) => {
					switch (t.type) {
						case i.a: {
							const s = t.payload.claimPoints || {},
								r = Object.keys(s).reduce((t, r) => (t[r] = {
									...e[r],
									availableClaims: s[r]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var s;
								(null === (s = e[t]) || void 0 === s ? void 0 : s.isClaiming) && (r[t] = r[t] || {
									availableClaims: []
								}, r[t].isClaiming = !0)
							}), r
						}
						case n.b:
						case n.a:
							const {
								subredditId: s
							} = t.payload;
							return {
								...e, [s]: {
									...e[s],
									isClaiming: t.type === n.b
								}
							};
						default:
							return e
					}
				},
				a = s("./src/reddit/actions/governance/constants.ts");
			const d = {};
			var u = (e = d, t) => {
				switch (t.type) {
					case a.n: {
						const {
							subredditId: s,
							wallets: r
						} = t.payload, n = Object.keys(r).reduce((t, n) => {
							return {
								...t,
								[n]: {
									...e[n] || {},
									[s]: r[n]
								}
							}
						}, {});
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				claims: o,
				publicWallets: u
			})
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return o
			}));
			var r = s("./src/lib/initializeClient/installReducer.ts"),
				n = s("./src/reddit/reducers/features/crypto/index.ts");
			Object(r.a)({
				features: {
					crypto: n.a
				}
			});
			const i = (e, t) => {
					var s;
					return t && (null === (s = e.user.wallets[t.subredditId]) || void 0 === s ? void 0 : s.latest)
				},
				c = (e, t) => {
					var s;
					return null === (s = i(e, t)) || void 0 === s ? void 0 : s.publicAddress
				},
				o = (e, t) => {
					var s, r, n, i;
					return null === (i = null === (n = null === (r = null === (s = e.features) || void 0 === s ? void 0 : s.crypto) || void 0 === r ? void 0 : r.publicWallets) || void 0 === n ? void 0 : n[t.userId]) || void 0 === i ? void 0 : i[t.subredditId]
				}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "n", (function() {
				return g
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "v", (function() {
				return j
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "p", (function() {
				return _
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "x", (function() {
				return v
			})), s.d(t, "k", (function() {
				return w
			})), s.d(t, "m", (function() {
				return x
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "i", (function() {
				return C
			})), s.d(t, "o", (function() {
				return N
			})), s.d(t, "j", (function() {
				return I
			})), s.d(t, "q", (function() {
				return k
			})), s.d(t, "w", (function() {
				return M
			})), s.d(t, "s", (function() {
				return L
			})), s.d(t, "t", (function() {
				return D
			})), s.d(t, "b", (function() {
				return U
			})), s.d(t, "u", (function() {
				return F
			})), s.d(t, "r", (function() {
				return W
			})), s.d(t, "g", (function() {
				return $
			})), s.d(t, "l", (function() {
				return T
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/helpers/economics/sortBadges.ts"),
				i = s("./src/reddit/helpers/richTextJson/index.ts"),
				c = s("./src/reddit/models/Badge/index.ts"),
				o = s("./src/reddit/models/Badge/managementPage.ts"),
				a = s("./src/reddit/models/Gold/Powerups/index.ts"),
				d = s("./src/reddit/models/Payments/index.ts"),
				u = s("./src/reddit/models/Product/index.ts"),
				m = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				p = s("./src/reddit/selectors/gold/powerups.ts");
			const f = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === l.a.Fetched) {
						const e = s.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				g = (e, t) => {
					const s = f(e, t);
					return s && s.endsAt || null
				};
			var h;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(h || (h = {}));
			const j = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === l.a.Fetched) {
						const s = g(e, t),
							r = Date.now();
						return s && r < s ? h.Subscribed : h.NotSubscribed
					}
					return h.DontKnow
				},
				y = (e, t) => {
					const s = e.user.account,
						r = e.economics.subredditPremium[t];
					if (s && r && r.status === l.a.Fetched) {
						const r = ((e.users.appliedBadges[s.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[o.a.Loyalty]: r.find(e => e.placement === c.a.First),
							[o.a.Achievement]: r.find(e => e.placement === c.a.Second),
							[o.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[o.a.Loyalty]: void 0,
						[o.a.Achievement]: void 0,
						[o.a.Cosmetic]: void 0
					}
				},
				_ = (e, t, s) => {
					if (!r.d.spBadges(e)) return [];
					const i = (e.users.appliedBadges[s] || {})[t] || [];
					return Object(n.a)(i.map(t => e.badges.models[t]).filter(Boolean))
				},
				O = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === l.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function v(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function w(e, t) {
				const {
					badge: s,
					subredditId: r
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(c.e)(s) && s.userId === n) return s;
				const i = e.badges.models,
					o = e.user.ownedBadges[r] || {},
					a = Object(c.e)(s) ? s.type : s.id;
				return Object.keys(o).map(e => i[e]).find(e => e && e.type === a)
			}

			function x(e, t, s, r) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === l.a.Fetched) {
					if (s === o.a.Loyalty || s === o.a.Achievement) return n.data.collections[s];
					if (s === o.a.Cosmetic && r) return n.data.collections[s][r]
				}
				return []
			}

			function P(e, t) {
				const s = x(e, t, o.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function E(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === l.a.Fetched) {
					const e = s.data.collections[o.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(c.f)
				}
				return []
			}

			function C(e, t) {
				return x(e, t, o.a.Cosmetic, o.c.Gallery).some(e => e.locked.some(e => Object(c.f)(e) || !!e.price))
			}
			const N = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === m.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const r = e[s];
						t.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: s,
							type: d.a.SavedStripe
						})
					}
				}
				if (s.status === m.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const r = e[s];
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
			const S = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				I = (e, t) => Object.values(e.products.models).filter(e => e.type === u.a.Membership && t && e.subredditId === t),
				A = (e, t) => {
					if (!t) return {};
					const s = S.prices;
					I(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const r = f(e, t);
					return r && r.price && r.currency && (s[r.currency] = r.price), s
				},
				k = (e, t) => {
					const s = e.subreddits.gov.meta[t || ""],
						r = s && s.extra && s.extra.nomenclature || S;
					return {
						prices: A(e, t),
						member: r.member || S.member,
						memberPlural: r.memberPlural || S.memberPlural,
						memberAlt: r.memberAlt || S.memberAlt,
						memberAltPlural: r.memberAltPlural || S.memberAltPlural,
						membership: r.membership || S.membership,
						membershipAlt: r.membershipAlt || S.membershipAlt
					}
				},
				M = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === m.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return t.status === m.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				U = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				F = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				W = (e, t, s) => {
					const n = "replyToPost" !== s && Object(b.a)(e, {
						commentId: s
					});
					if (!!n && Object(i.a)(n)) return !0;
					if (t && Object(p.m)(e, {
							subredditId: t,
							benefit: a.a.CommentsWithGifs
						})) return !0;
					const c = r.d.spGiphy(e),
						o = F(e, t);
					return c && o
				},
				$ = (e, t, s) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[s]
					}
				},
				T = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/products.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/models/Product/index.ts");
			const n = (e, t) => {
					const s = e.products.models[t];
					if (s && s.type === r.a.Badge) return s
				},
				i = (e, {
					productId: t
				}) => {
					const s = e.products.models[t];
					if (s) {
						const r = s.subredditId,
							n = Object.keys(e.user.ownedBadges[r] || {}),
							i = e.badges.models,
							c = Date.now();
						let o = !1;
						return n.forEach(e => {
							const s = i[e];
							s && s.type === t && s.endsAt > c && (o = !0)
						}), o
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumNewUserWelcome.6df40ef0be7f1e102d9c.js.map