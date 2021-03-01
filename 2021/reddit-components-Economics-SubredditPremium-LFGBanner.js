// https://www.redditstatic.com/desktop2x/reddit-components-Economics-SubredditPremium-LFGBanner.fb3cc2463e3719bd825d.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Economics-SubredditPremium-LFGBanner"], {
		"./node_modules/lodash/_arraySample.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e) {
				var t = e.length;
				return t ? e[n(0, t - 1)] : void 0
			}
		},
		"./node_modules/lodash/_baseSample.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arraySample.js"),
				r = s("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return n(r(e))
			}
		},
		"./node_modules/lodash/sample.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arraySample.js"),
				r = s("./node_modules/lodash/_baseSample.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (a(e) ? n : r)(e)
			}
		},
		"./src/reddit/actions/economics/banners/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			}));
			var n = s("./src/reddit/endpoints/economics/banners.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/economics/banners/constants.ts");
			const i = Object(r.a)(a.c),
				o = Object(r.a)(a.d),
				c = Object(r.a)(a.a),
				d = Object(r.a)(a.b),
				l = e => async (t, s, {
					apiContext: r
				}) => {
					const a = s();
					if (!a.user.account) return;
					if (a.economics.banners.dismissedBanners[e]) return;
					t(i(e));
					const c = await Object(n.b)(r(), e);
					t(o({
						subredditId: e,
						data: c
					}))
				}, m = (e, t) => async (s, r, {
					apiContext: a
				}) => {
					s(c({
						subredditId: e,
						bannerType: t
					})), Object(n.c)(a(), e, t)
				}, u = (e, t) => async (s, r, {
					apiContext: a
				}) => {
					s(d({
						subredditId: e,
						bannerType: t
					})), Object(n.e)(a(), e, t)
				}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "j", (function() {
				return h
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/constants/modals.ts"),
				i = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(n.a)(i.a),
				c = Object(n.a)(i.b),
				d = Object(n.a)(i.c),
				l = Object(n.a)(i.d),
				m = Object(n.a)(i.e),
				u = Object(n.a)(i.f),
				p = Object(n.a)(i.g),
				b = Object(n.a)(i.h),
				f = Object(n.a)(i.i),
				h = e => Object(r.h)(a.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "f", (function() {
				return k
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/forOwn.js"),
				r = s.n(n),
				a = s("./src/reddit/actions/governance/errorToast.ts"),
				i = s("./src/reddit/endpoints/economics/emojis.ts"),
				o = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = s("./src/reddit/endpoints/economics/subredditPremium.ts"),
				d = s("./src/reddit/endpoints/governance/badges.ts"),
				l = s("./src/config.ts"),
				m = s("./src/reddit/endpoints/governance/requester.ts");

			function u(e, t, s) {
				return Object(m.a)(e, {
					method: "get",
					endpoint: `${l.a.metaUrl}/products/${t}?owners=${s}` + "&types=emotes_pack,giphy"
				})
			}
			var p = s("./src/reddit/models/Badge/index.ts"),
				b = s("./src/reddit/models/Badge/managementPage.ts"),
				f = s("./src/reddit/models/Product/index.ts"),
				h = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				g = s("./src/reddit/selectors/economics.ts"),
				y = s("./src/reddit/selectors/products.ts"),
				v = s("./src/reddit/actions/economics/me/thunkedActions.ts"),
				_ = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function j(e) {
				return !!e && "removeBadge" === e.type
			}

			function x(e) {
				if (!j(e)) return e
			}
			const O = () => async (e, t, {
				apiContext: s
			}) => {
				if (!t().user.account) return;
				await e(Object(v.b)({
					includeMemberships: !0
				}));
				const n = t().economics.me.data.specialMemberships || {},
					r = Object.keys(n);
				if (r.length) {
					const t = await Object(o.e)(s(), r);
					t.ok && e(Object(_.g)(t.body))
				}
			}, w = (e, t) => async (s, n, {
				apiContext: r
			}) => {
				const a = n().user.account,
					i = n().economics.subredditPremium[e],
					o = !i || i.status !== h.a.Fetched || t;
				if (a && o) {
					const t = await Object(c.a)(r(), e, a.id);
					s(Object(_.i)(t))
				}
			}, C = e => async (t, s, {
				apiContext: n
			}) => {
				const r = s(),
					i = r.user.account,
					o = Object(g.f)(r, e.subredditId),
					c = Object.keys(o).map(e => o[e]).filter(Boolean);
				if (i && e.badge) {
					let s, r;
					s = e.placement === p.a.First ? o[b.a.Loyalty] : e.placement === p.a.Second ? o[b.a.Achievement] : o[b.a.Cosmetic], t(Object(_.a)({
						...e,
						badge: x(e.badge),
						currentAppliedBadges: c,
						userId: i.id
					})), j(e.badge) && s ? r = await Object(d.a)(n(), e.subredditId, s.id, !1) : j(e.badge) || (r = await Object(d.a)(n(), e.subredditId, e.badge.id)), r && !r.ok && (t(Object(_.a)({
						...e,
						badge: s,
						currentAppliedBadges: c,
						userId: i.id
					})), Object(a.a)(t, r.error))
				}
			}, E = (e, t) => async (s, n, {
				apiContext: r
			}) => {
				await s(w(e, !0));
				const a = n().economics.subredditPremium[e];
				if (a && a.status === h.a.Fetched) {
					const n = a.data.userOwnedBadges.find(e => e.type === t.id);
					n && (s(C({
						badge: n,
						subredditId: e,
						placement: n.placement
					})), s(Object(_.d)(b.c.MyBadges)))
				}
			}, P = e => async (t, s, {
				apiContext: n
			}) => {
				const o = s().user.account,
					c = !s().economics.emotes[e],
					d = !s().economics.gifs[e];
				if (o && (c || d)) {
					const [s, c] = await Promise.all([Object(i.b)(n(), e), u(n(), e, o.id)]);
					if (!c.ok) return void Object(a.a)(t, c.error);
					const d = {
						emotes: [],
						emoteCollections: s.ok ? s.body : {},
						giphy: []
					};
					r()(c.body, e => {
						e.type === f.a.EmotesPack ? d.emotes.push(e) : e.type === f.a.Giphy && d.giphy.push(e)
					}), t(Object(_.e)({
						subredditId: e,
						products: d
					}))
				}
			}, S = (e, t, s) => async (n, r, {
				apiContext: a
			}) => {
				if (await n(w(e, !0)), s && t) {
					const s = r(),
						a = Object(g.f)(s, e),
						i = Object(y.a)(s, t);
					if (!a[Object(b.d)(i.placement)] && i) {
						const t = Object(g.k)(s, {
							subredditId: e,
							badge: i
						});
						t && await n(C({
							badge: t,
							subredditId: e
						}))
					}
					n(Object(_.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, k = e => async (t, s, {
				apiContext: n
			}) => {
				const {
					wallet: r
				} = await Object(o.c)(n(), e);
				t(Object(_.f)({
					wallet: r
				})), await t(w(e.subredditId, !0))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/InteractiveBadgesBanner/Success/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/Card/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/index.m.less": function(e, t, s) {
			e.exports = {
				container: "yQNQSPTLUWPNXeKzlqNu6",
				cover: "_24vnSg5ae29l97QtBxVV3-",
				divider: "_2fEN3CscLjkwMnMGeO-Gbi",
				trial: "_2o92N1SUEIcx7a3P7K3tJT"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Example/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Header/index.m.less": function(e, t, s) {
			e.exports = {
				crown: "YKwhmGUT9303yZWJlH-QT",
				heading: "_2-PLWgbnP8j-2wARSQiPC6",
				prompt: "_34l-xSb_Lf_m0uJryaeQRG",
				sponsorship: "_2gij23f36Hizly0kdb-hWD",
				text: "NgOyQpTLN-QLfbsXr_kxQ"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/Option/index.m.less": function(e, t, s) {
			e.exports = {
				container: "bIIqFNgEct-dJixmNGzH8",
				controller: "U9kRmM-8uzmN81_cyWilS",
				planet: "OsL6tpn4UXSU4UwEHQpxf",
				user: "_3Q0T-a4HcsAzBW8-YqMrdZ",
				selected: "_2rCRpMr2CIl-rgIl_ikgYT",
				triangle: "_1SxOqeKmgCBvhzxL632u7q"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_1-fWFAeAioWlCembFKUHMX",
				container: "_1ftim-rZF9xZL_CTpqF85f",
				title: "_3sTbD7175DPlp68I03ayUK"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				m = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/config.ts"),
				b = s("./src/reddit/icons/svgs/Approve/index.tsx"),
				f = s("./src/reddit/components/Economics/SubredditPremium/InteractiveBadgesBanner/Success/index.m.less"),
				h = s.n(f);
			const g = {
					description: () => n.fbt._("Add your new emoji to comments! Use the action in the bottom right corner to add an emoji.", null, {
						hk: "3bQZrx"
					}),
					src: `${p.a.assetPath}/img/memberships/banners/how_to_use_emoji.gif`
				},
				y = {
					description: () => n.fbt._("Open 'My Badges' in the Sidebar to apply your badge.", null, {
						hk: "rQPFZ"
					}),
					src: `${p.a.assetPath}/img/memberships/banners/how_to_apply_badge.gif`
				},
				v = {
					description: () => n.fbt._("Want to change your badge? Visit the Gallery in the Sidebar to view the latest styles.", null, {
						hk: "71rqs"
					}),
					src: `${p.a.assetPath}/img/memberships/banners/how_to_apply_badge.gif`
				};

			function _(e) {
				const t = (e.hideEmoji ? [] : [g]).concat(e.boughtBadge ? y : v);
				return a.a.createElement("article", {
					className: Object(d.a)(e.className, h.a.container)
				}, a.a.createElement("header", {
					className: h.a.header
				}, a.a.createElement("div", {
					className: h.a.checkContainer
				}, a.a.createElement(b.a, {
					className: h.a.check
				})), n.fbt._("Congrats! Here's how to use it", null, {
					hk: "2IUXGc"
				})), a.a.createElement("div", {
					className: h.a.tutorial
				}, t.map(({
					description: e,
					src: t
				}) => a.a.createElement("div", {
					className: h.a.col,
					key: e()
				}, a.a.createElement("img", {
					className: h.a.img,
					src: t
				}), a.a.createElement("div", {
					className: h.a.explanation
				}, e())))))
			}
			var j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/ApiContext.tsx"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				w = s("./src/reddit/endpoints/economics/banners.ts"),
				C = s("./src/reddit/endpoints/economics/emojis.ts"),
				E = s("./src/reddit/helpers/economics/membershipPage.ts"),
				P = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				S = s("./src/reddit/icons/svgs/Close/index.tsx"),
				k = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/selectors/economics.ts"),
				N = s("./src/reddit/selectors/telemetry.ts"),
				B = s("./node_modules/uuid/v4.js"),
				F = s.n(B),
				A = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/Card/index.m.less"),
				L = s.n(A);

			function D(e) {
				return a.a.createElement("article", {
					className: Object(d.a)(e.className, L.a.container, {
						[L.a.fullWidth]: !!e.fullWidth
					})
				}, a.a.createElement("div", {
					className: L.a.cover
				}), a.a.createElement("header", {
					className: L.a.title
				}, e.title), a.a.createElement("img", {
					className: L.a.img,
					src: e.img
				}), a.a.createElement("div", {
					className: L.a.description
				}, e.description), a.a.createElement(O.o, {
					className: L.a.button,
					onClick: e.onClaim
				}, e.cta))
			}
			var T = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts"),
				G = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/index.m.less"),
				U = s.n(G);

			function M(e) {
				const {
					className: t,
					platform: s,
					playerType: r,
					region: i,
					userIsSubscriber: o,
					onClaim: c
				} = e, l = Object(T.d)({
					platform: s,
					playerType: r,
					region: i,
					style: "bw"
				}), m = Object(T.d)({
					platform: s,
					playerType: r,
					region: i,
					style: "color"
				});
				return a.a.createElement("div", {
					className: Object(d.a)(U.a.container, t)
				}, !o && a.a.createElement(a.a.Fragment, null, a.a.createElement(D, {
					className: U.a.freeCard,
					cta: n.fbt._("claim", null, {
						hk: "2Ru6yU"
					}),
					img: l,
					title: n.fbt._("Claim Free Badge", null, {
						hk: "3w9WUY"
					}),
					onClaim: () => c(!1)
				}), a.a.createElement("div", {
					className: U.a.divider
				}, a.a.createElement("div", {
					className: U.a.cover
				}), "OR"), a.a.createElement(D, {
					className: U.a.premiumCard,
					cta: n.fbt._("become a supporter", null, {
						hk: "4EFiLI"
					}),
					description: n.fbt._("Colored badge + dozens more, emojis and GIFs in comments", null, {
						hk: "4zbqFO"
					}),
					img: m,
					title: n.fbt._("Claim Premium Badge", null, {
						hk: "2UVCao"
					}),
					onClaim: () => c(!0)
				}), a.a.createElement("img", {
					className: U.a.trial,
					src: `${p.a.assetPath}/img/memberships/banners/free-trial.png`
				})), o && a.a.createElement(D, {
					fullWidth: !0,
					className: U.a.fullWidthCard,
					cta: n.fbt._("claim", null, {
						hk: "3XIQIJ"
					}),
					img: m,
					title: n.fbt._("Claim Premium Badge", null, {
						hk: "28iPPD"
					}),
					onClaim: () => c(!1)
				}))
			}
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var R = s("./node_modules/lodash/sample.js"),
				$ = s.n(R),
				W = s("./node_modules/react-motion/lib/react-motion.js"),
				H = s("./src/reddit/icons/svgs/Replay/index.tsx"),
				q = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Example/index.m.less"),
				z = s.n(q);
			const K = {
				stiffness: 210,
				damping: 20
			};

			function Y() {
				return {
					platform: $()(Object.keys(T.a)) || "pc",
					playerType: $()(Object.keys(T.b)) || "casual",
					region: $()(Object.keys(T.c)) || "nae"
				}
			}
			class Z extends a.a.Component {
				constructor(e) {
					super(e), this.state = Y()
				}
				render() {
					const {
						platform: e,
						playerType: t,
						region: s
					} = this.state, r = T.a[e], i = T.b[t], o = T.c[s];
					return a.a.createElement("article", {
						className: Object(d.a)(z.a.container, this.props.className)
					}, a.a.createElement("div", {
						className: z.a.cover
					}), a.a.createElement("header", {
						className: z.a.title
					}, n.fbt._("Example", null, {
						hk: "1siPoi"
					})), a.a.createElement(W.TransitionMotion, {
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
								rotation: Object(W.spring)(0, K)
							}
						}],
						willEnter: () => ({
							rotation: -180
						}),
						willLeave: () => ({
							rotation: Object(W.spring)(180, K)
						})
					}, e => a.a.createElement("div", {
						className: z.a.preview
					}, e.map(e => a.a.createElement("img", {
						className: z.a.image,
						key: e.key,
						src: e.key,
						style: {
							transform: `rotateY(${e.style.rotation}deg)`
						}
					})))), a.a.createElement("footer", {
						className: z.a.description
					}, `${o}, ${r}, ${i}`), a.a.createElement(H.a, {
						className: z.a.redo,
						onClick: () => this.setState(Y())
					}))
				}
			}
			var Q = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Header/index.m.less"),
				J = s.n(Q);
			const V = Object(c.c)({
				meta: (e, {
					subredditId: t
				}) => Object(I.q)(e, t),
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var X = Object(i.b)(V)((function(e) {
					const t = e.subreddit ? e.subreddit.displayText : "the community";
					return a.a.createElement("header", {
						className: Object(d.a)(J.a.container, e.className)
					}, a.a.createElement("div", {
						className: J.a.heading
					}, n.fbt._("looking for game badge", null, {
						hk: "1fWc1w"
					})), a.a.createElement("div", {
						className: J.a.prompt
					}, n.fbt._("Find New Gamers to Play Together", null, {
						hk: "3voe2T"
					}), a.a.createElement("div", {
						className: J.a.sponsorship
					}, a.a.createElement("img", {
						className: J.a.crown,
						src: `${p.a.assetPath}/img/memberships/paywall/fortnitebr/Crown.gif`
					}), n.fbt._("Sponsored by {members}", [n.fbt._param("members", e.meta.memberAltPlural)], {
						hk: "2QHfal"
					}))), a.a.createElement("div", {
						className: J.a.text
					}, n.fbt._("Get a badge that lets you find new teammates in {community}.", [n.fbt._param("community", t)], {
						hk: "2GYrVD"
					}), " ", n.fbt._("Specify your region, platform, and your play style for the best match.", null, {
						hk: "1HilaD"
					}), " ", n.fbt._("The badge helps other players find you, and makes it easier for others to start a conversation in Reddit chat.", null, {
						hk: "2TBy4p"
					})))
				})),
				ee = s("./src/higherOrderComponents/asTooltip.tsx"),
				te = s("./src/reddit/controls/Dropdown/index.tsx"),
				se = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ne = s("./src/reddit/icons/svgs/Controller/index.tsx"),
				re = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				ae = s("./src/reddit/icons/svgs/Planet/index.tsx"),
				ie = s("./src/reddit/icons/svgs/User/index.tsx"),
				oe = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/Option/index.m.less"),
				ce = s.n(oe);
			const de = new Map;
			de.set(T.a, "LFG_BANNER_PLATFORM_DROPDOWN"), de.set(T.b, "LFG_BANNER_PLAYERTYPE_DROPDOWN"), de.set(T.c, "LFG_BANNER_REGION_DROPDOWN");
			const le = new Map;
			le.set(T.a, "platform"), le.set(T.b, "playerType"), le.set(T.c, "region");
			const me = new Map;
			me.set(T.a, a.a.createElement(ne.a, {
				className: ce.a.controller
			})), me.set(T.b, a.a.createElement(ie.a, {
				className: ce.a.user
			})), me.set(T.c, a.a.createElement(ae.a, {
				className: ce.a.planet
			}));
			const ue = Object(ee.a)(te.a);
			var pe, be = Object(j.c)((function(e) {
					const t = me.get(e.type),
						s = de.get(e.type);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Object(d.a)(ce.a.container, e.className, {
							[ce.a.selected]: !!e.selected
						}),
						id: s,
						onClick: e.onToggleDropdown
					}, t, e.text, a.a.createElement(re.b, {
						className: ce.a.triangle
					})), a.a.createElement(ue, {
						tooltipId: s,
						isOpen: !!e.tooltipVisible
					}, Object.keys(e.type).map((t, s) => a.a.createElement(se.b, {
						"data-redditStyle": !0,
						key: s,
						index: s,
						displayText: String(e.type[t]),
						onClick: () => {
							e.onChange(t), e.sendEvent(s => {
								const n = N.defaults(s);
								return {
									source: "meta",
									action: "click",
									noun: "lfg_banner_customize_badge",
									correlationId: e.correlationId,
									...n,
									actionInfo: {
										...n.actionInfo,
										paneName: le.get(e.type),
										reason: t
									},
									subreddit: N.subreddit(s)
								}
							})
						}
					}))))
				})),
				fe = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/index.m.less"),
				he = s.n(fe),
				ge = Object(j.c)(class extends a.a.Component {
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
							selectedPlatform: s,
							selectedPlayerType: r,
							selectedRegion: i,
							visibleDropdown: o
						} = this.state, c = s ? T.a[s] : n.fbt._("platform", null, {
							hk: "4cCVan"
						}), l = r ? T.b[r] : n.fbt._("player type", null, {
							hk: "20Xii5"
						}), m = i ? T.c[i] : n.fbt._("region", null, {
							hk: "30zv9O"
						});
						return a.a.createElement("article", {
							className: Object(d.a)(he.a.container, e)
						}, a.a.createElement("header", {
							className: he.a.title
						}, n.fbt._("Setup Your Badge", null, {
							hk: "21LcIU"
						})), a.a.createElement(be, {
							correlationId: this.props.correlationId,
							selected: !!i,
							tooltipVisible: "region" === o,
							text: m,
							type: T.c,
							onChange: e => this.setState({
								selectedRegion: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "region"
							}))
						}), a.a.createElement(be, {
							correlationId: this.props.correlationId,
							selected: !!s,
							tooltipVisible: "platform" === o,
							text: c,
							type: T.a,
							onChange: e => this.setState({
								selectedPlatform: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "platform"
							}))
						}), a.a.createElement(be, {
							correlationId: this.props.correlationId,
							selected: !!r,
							tooltipVisible: "playerType" === o,
							text: l,
							type: T.b,
							onChange: e => this.setState({
								selectedPlayerType: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "playerType"
							}))
						}), a.a.createElement(O.i, {
							className: he.a.button,
							disabled: !s || !r || !i,
							onClick: () => {
								s && r && i && (t({
									platform: s,
									playerType: r,
									region: i
								}), this.props.sendEvent(e => ({
									source: "meta",
									action: "click",
									noun: "lfg_banner_generate_badge",
									correlationId: this.props.correlationId,
									...N.defaults(e),
									subreddit: N.subreddit(e)
								})))
							}
						}, n.fbt._("Generate Badge", null, {
							hk: "1FRc45"
						})))
					}
				}),
				ye = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.m.less"),
				ve = s.n(ye);
			! function(e) {
				e.CanClaim = "canclaim", e.Claimed = "claimed", e.Dismissed = "dismissed", e.Generating = "generating", e.Hidden = "hidden", e.Select = "select"
			}(pe || (pe = {}));
			class _e extends a.a.Component {
				constructor(e) {
					super(e), this.handleClaim = async e => {
						const {
							subscriberState: t,
							subreddit: s
						} = this.props, {
							selectedRegion: n,
							selectedPlatform: r,
							selectedPlayerType: a
						} = this.state;
						if (!(n && r && a && s && t !== I.a.DontKnow)) return null;
						const i = `${n}_${r}_${a}_badge`,
							o = await Object(C.a)(this.props.apiContext(), {
								productId: i,
								subredditId: this.props.subredditId
							});
						o.ok ? (this.setState({
							show: pe.Claimed
						}), this.props.onDismissBanner(), this.props.onBadgeClaimed(i)) : this.props.onError(o.error), e && this.props.onOpenLandingPage(s, this.correlationId), this.props.sendEvent(t => {
							const s = N.defaults(t);
							return {
								source: "meta",
								action: "click",
								noun: e && this.correlationId ? "lfg_banner_claim_premium" : "lfg_banner_claim",
								correlationId: this.correlationId,
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: i,
									paneName: w.a.LFG
								},
								subreddit: N.subreddit(t)
							}
						})
					}, this.handleDismiss = () => {
						this.state.show === pe.Claimed ? this.setState({
							show: pe.Hidden
						}) : (this.setState({
							show: pe.Dismissed
						}), this.props.sendEvent(e => {
							const t = N.defaults(e);
							return {
								source: "meta",
								action: "click",
								noun: "lfg_banner_dismiss",
								correlationId: this.correlationId,
								...t,
								actionInfo: {
									...t.actionInfo,
									paneName: w.a.LFG
								},
								subreddit: N.subreddit(e)
							}
						})), this.props.onDismissBanner()
					}, this.handleUndoDismiss = () => {
						this.setState({
							show: pe.Select
						}), this.props.onUndismissBanner(), this.props.sendEvent(e => {
							const t = N.defaults(e);
							return {
								source: "meta",
								action: "click",
								noun: "lfg_banner_undo_dismiss",
								correlationId: this.correlationId,
								...t,
								actionInfo: {
									...t.actionInfo,
									paneName: w.a.LFG
								},
								subreddit: N.subreddit(e)
							}
						})
					}, this.state = {
						show: pe.Hidden
					}, this.correlationId = F()()
				}
				componentDidMount() {
					!1 === this.props.isBannerDismissed ? this.handleBannerShownFirstTime() : void 0 === this.props.isBannerDismissed && this.props.onFetchDismissedBanners()
				}
				componentDidUpdate(e) {
					void 0 === e.isBannerDismissed && !1 === this.props.isBannerDismissed && this.handleBannerShownFirstTime()
				}
				handleBannerShownFirstTime() {
					this.setState({
						show: pe.Select
					}), this.props.sendEvent(e => {
						const t = N.defaults(e);
						return {
							source: "meta",
							action: "view",
							noun: "lfg_banner",
							correlationId: this.correlationId,
							...t,
							actionInfo: {
								...t.actionInfo,
								paneName: w.a.LFG
							},
							subreddit: N.subreddit(e)
						}
					})
				}
				render() {
					const {
						className: e,
						subredditId: t,
						subscriberState: s,
						userIsLoggedIn: r
					} = this.props, {
						show: i,
						selectedRegion: o,
						selectedPlatform: c,
						selectedPlayerType: l
					} = this.state;
					return r && s !== I.a.DontKnow && i !== pe.Hidden ? this.state.show === pe.Dismissed ? a.a.createElement("div", {
						className: Object(d.a)(ve.a.dismissedContainer, e)
					}, a.a.createElement("div", {
						className: ve.a.dismissedText
					}, n.fbt._("Ok, we won't show you this again.", null, {
						hk: "4z33KK"
					})), a.a.createElement(O.i, {
						onClick: this.handleUndoDismiss
					}, n.fbt._("undo", null, {
						hk: "1A9z3Y"
					}))) : this.state.show === pe.Claimed ? a.a.createElement("div", {
						className: Object(d.a)(ve.a.successContainer, e)
					}, a.a.createElement(S.a, {
						className: ve.a.close,
						onClick: this.handleDismiss
					}), a.a.createElement(_, {
						boughtBadge: !0,
						hideEmoji: !0
					})) : a.a.createElement("article", {
						className: Object(d.a)(ve.a.container, e)
					}, a.a.createElement(X, {
						className: ve.a.header,
						subredditId: t
					}), a.a.createElement("div", {
						className: ve.a.content
					}, a.a.createElement(ge, {
						correlationId: this.correlationId,
						onGenerate: e => this.setState(() => ({
							show: pe.CanClaim,
							selectedRegion: e.region,
							selectedPlatform: e.platform,
							selectedPlayerType: e.playerType
						}))
					}), i === pe.Select && a.a.createElement(Z, {
						className: ve.a.example
					}), i === pe.CanClaim && o && c && l && a.a.createElement(M, {
						className: ve.a.claim,
						platform: c,
						playerType: l,
						region: o,
						userIsSubscriber: s === I.a.Subscribed,
						onClaim: e => this.handleClaim(e)
					})), a.a.createElement(S.a, {
						className: ve.a.close,
						onClick: this.handleDismiss
					})) : null
				}
			}
			const je = Object(c.c)({
					isBannerDismissed: (e, {
						subredditId: t
					}) => Object(I.g)(e, t, w.a.LFG),
					subreddit: (e, {
						subredditId: t
					}) => e.subreddits.models[t],
					subscriberState: (e, {
						subredditId: t
					}) => Object(I.v)(e, t),
					userIsLoggedIn: e => !!e.user.account
				}),
				xe = Object(j.c)(_e);
			t.default = Object(x.b)(Object(i.b)(je, (e, {
				subredditId: t
			}) => ({
				onDismissBanner: () => e(Object(l.a)(t, w.a.LFG)),
				onError: t => e(Object(u.e)({
					duration: 5e3,
					kind: k.b.Error,
					text: Object(P.a)(t)
				})),
				onFetchDismissedBanners: () => e(Object(l.b)(t)),
				onBadgeClaimed: s => {
					e(Object(m.c)(t, s))
				},
				onOpenLandingPage: (t, s) => {
					e(Object(o.b)(Object(E.a)(t.name, s)))
				},
				onUndismissBanner: () => e(Object(l.c)(t, w.a.LFG))
			}))(xe))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, s) {
			"use strict";
			var n, r, a, i;

			function o(e) {
				const {
					platform: t,
					playerType: s,
					region: n,
					style: r
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${r}/${n}_${t}_${s}_${r}.svg`
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return r
				})), s.d(t, "c", (function() {
					return a
				})), s.d(t, "d", (function() {
					return o
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(n || (n = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(r || (r = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(a || (a = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(i || (i = {}))
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "d", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r, a = s("./src/config.ts"),
				i = s("./src/reddit/endpoints/governance/requester.ts");
			async function o(e, t, s, n) {
				return Object(i.a)(e, {
					endpoint: `${a.a.metaUrl}/storage/${t}/me/${s}`,
					method: "patch",
					data: n
				})
			}
			async function c(e, t) {
				const s = await async function(e, t, s) {
					return Object(i.a)(e, {
						endpoint: `${a.a.metaUrl}/storage/${t}/me/${s}`,
						method: "get"
					})
				}(e, t, n.UpsellBanners);
				return s.ok && s.body || {}
			}
			async function d(e, t, s, r) {
					const a = await c(e, t),
						i = {
							...a,
							[s]: r
						};
					return (await o(e, t, n.UpsellBanners, i)).ok ? i : a
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(n || (n = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(r || (r = {}));
			const l = async (e, t, s) => d(e, t, s, !0), m = async (e, t, s) => d(e, t, s, !1), u = (e, t) => o(e, t, n.UpsellBanners, Object.keys(r).reduce((e, t) => (e[r[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/config.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");
			const a = (e, t) => Object(r.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/orders`,
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
					endpoint: `${n.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/config.ts"),
				r = s("./src/lib/omitHeaders/index.ts"),
				a = s("./src/reddit/constants/headers.ts"),
				i = s("./src/reddit/endpoints/governance/requester.ts"),
				o = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function d(e, t) {
				return Object(i.a)(e, {
					endpoint: `${n.a.metaUrl}/communities/${t.subredditId}/me`,
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
				return Object(i.a)(e, {
					endpoint: `${n.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function m(e, t) {
				return Object(i.a)(e, {
					endpoint: `${n.a.metaUrl}/orders`,
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

			function u(e, t) {
				return Object(i.a)(Object(r.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(({
							data: e
						}) => Object(c.a)(e)).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function p(e, t) {
				const s = await Object(i.a)(e, {
					endpoint: `${n.a.metaUrl}/orders`,
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
				return l
			})), s.d(t, "b", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/merge.js"),
				r = s.n(n),
				a = s("./src/config.ts"),
				i = s("./src/reddit/endpoints/governance/badges.ts"),
				o = s("./src/reddit/endpoints/governance/community.ts"),
				c = s("./src/reddit/endpoints/governance/products/badges.ts"),
				d = s("./src/reddit/endpoints/governance/requester.ts");
			async function l(e, t, s) {
				const n = {
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
							endpoint: `${a.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					m = Object(o.a)(e, {
						subredditId: t
					}),
					u = Object(c.b)(e, t),
					p = Object(i.c)(e, t, s),
					[b, f, h, g] = await Promise.all([l, m, u, p]);
				if (b.ok ? n.collections = b.body : n.errors.collections = b.error, f.ok) {
					const e = f.body;
					n.subscription = e.specialMemberships, n.communityRaw = e
				}
				return h.ok ? n.products = h.body : n.errors.products = h.error, g.ok ? (r()(n.badges, g.body.badges), n.userOwnedBadges = g.body.userOwnedBadges) : n.errors.userBadges = g.error, n
			}
			const m = (e, t) => Object(d.a)(e, {
				endpoint: `${a.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/config.ts"),
				r = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(a.a)(e, {
					endpoint: `${n.a.metaUrl}/communities/${t.subredditId}/me`,
					method: r.cb.GET
				})
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/permalinkToOverlayLocation/index.ts");

			function r(e, t) {
				return Object(n.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
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
		"./src/reddit/icons/svgs/Controller/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.7658 8.30457C15.5196 6.40434 14.6685 3.93402 13.992 2.18306C13.4831 0.865888 12.2136 0 10.8015 0H5.01677C3.60472 0 2.33517 0.865888 1.82628 2.18306C1.1498 3.93402 0.298684 6.40434 0.0525311 8.30457C-0.374308 11.5997 1.94027 12 1.94027 12L5.31936 7.9067H10.4989L13.878 12C13.878 12 16.1926 11.5997 15.7658 8.30457ZM4.36141 3.50639C4.94606 3.50639 5.42001 3.03243 5.42001 2.44778C5.42001 1.86313 4.94606 1.38918 4.36141 1.38918C3.77676 1.38918 3.3028 1.86313 3.3028 2.44778C3.3028 3.03243 3.77676 3.50639 4.36141 3.50639ZM7.02295 5.43958C7.02295 6.02423 6.549 6.49818 5.96435 6.49818C5.3797 6.49818 4.90574 6.02423 4.90574 5.43958C4.90574 4.85493 5.3797 4.38097 5.96435 4.38097C6.549 4.38097 7.02295 4.85493 7.02295 5.43958ZM11.4569 3.50639C12.0416 3.50639 12.5155 3.03244 12.5155 2.44779C12.5155 1.86314 12.0416 1.38919 11.4569 1.38919C10.8723 1.38919 10.3983 1.86314 10.3983 2.44779C10.3983 3.03244 10.8723 3.50639 11.4569 3.50639ZM10.9126 5.43958C10.9126 6.02423 10.4386 6.49818 9.85398 6.49818C9.26933 6.49818 8.79538 6.02423 8.79538 5.43958C8.79538 4.85493 9.26933 4.38097 9.85398 4.38097C10.4386 4.38097 10.9126 4.85493 10.9126 5.43958Z"
			}))
		},
		"./src/reddit/icons/svgs/Planet/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("title", null, "Planet"), r.a.createElement("path", {
				d: "M16.74,11.87A7,7,0,0,0,8.13,3.26c-3-2-5.59-2.8-6.63-1.76S1.25,5.15,3.28,8.16a6.95,6.95,0,0,0,8.57,8.57c3,2,5.61,2.82,6.66,1.78S18.76,14.87,16.74,11.87Zm0,4.86c-.53.53-1.77.26-3.33-.61h0a25.48,25.48,0,0,1-5.32-4.19c-.46-.46-.9-.93-1.31-1.39h0c-.41-.46-.79-.92-1.15-1.37h0c-.35-.45-.68-.89-1-1.32h0C4.36,7.41,4.1,7,3.88,6.6,3,5,2.74,3.8,3.27,3.27S5,3,6.6,3.88A6.78,6.78,0,0,0,4.52,5.65a23.14,23.14,0,0,0,4.27,5.56,22.92,22.92,0,0,0,5.56,4.27,6.79,6.79,0,0,0,1.77-2.08C17,15,17.26,16.2,16.73,16.73Z"
			}))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", a({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), r.a.createElement("g", null, r.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var n, r, a;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "v", (function() {
				return y
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "p", (function() {
				return _
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "x", (function() {
				return x
			})), s.d(t, "k", (function() {
				return O
			})), s.d(t, "m", (function() {
				return w
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "i", (function() {
				return P
			})), s.d(t, "o", (function() {
				return S
			})), s.d(t, "j", (function() {
				return N
			})), s.d(t, "q", (function() {
				return F
			})), s.d(t, "w", (function() {
				return A
			})), s.d(t, "s", (function() {
				return L
			})), s.d(t, "t", (function() {
				return D
			})), s.d(t, "b", (function() {
				return T
			})), s.d(t, "u", (function() {
				return G
			})), s.d(t, "r", (function() {
				return U
			})), s.d(t, "g", (function() {
				return M
			})), s.d(t, "l", (function() {
				return R
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/helpers/economics/sortBadges.ts"),
				a = s("./src/reddit/helpers/richTextJson/index.ts"),
				i = s("./src/reddit/models/Badge/index.ts"),
				o = s("./src/reddit/models/Badge/managementPage.ts"),
				c = s("./src/reddit/models/Gold/Powerups/index.ts"),
				d = s("./src/reddit/models/Payments/index.ts"),
				l = s("./src/reddit/models/Product/index.ts"),
				m = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				b = s("./src/reddit/selectors/gold/powerups.ts");
			const f = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === u.a.Fetched) {
						const e = s.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				h = (e, t) => {
					const s = f(e, t);
					return s && s.endsAt || null
				};
			var g;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(g || (g = {}));
			const y = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === u.a.Fetched) {
						const s = h(e, t),
							n = Date.now();
						return s && n < s ? g.Subscribed : g.NotSubscribed
					}
					return g.DontKnow
				},
				v = (e, t) => {
					const s = e.user.account,
						n = e.economics.subredditPremium[t];
					if (s && n && n.status === u.a.Fetched) {
						const n = ((e.users.appliedBadges[s.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[o.a.Loyalty]: n.find(e => e.placement === i.a.First),
							[o.a.Achievement]: n.find(e => e.placement === i.a.Second),
							[o.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[o.a.Loyalty]: void 0,
						[o.a.Achievement]: void 0,
						[o.a.Cosmetic]: void 0
					}
				},
				_ = (e, t, s) => {
					if (!n.d.spBadges(e)) return [];
					const a = (e.users.appliedBadges[s] || {})[t] || [];
					return Object(r.a)(a.map(t => e.badges.models[t]).filter(Boolean))
				},
				j = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === u.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function x(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function O(e, t) {
				const {
					badge: s,
					subredditId: n
				} = t, r = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(s) && s.userId === r) return s;
				const a = e.badges.models,
					o = e.user.ownedBadges[n] || {},
					c = Object(i.e)(s) ? s.type : s.id;
				return Object.keys(o).map(e => a[e]).find(e => e && e.type === c)
			}

			function w(e, t, s, n) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === u.a.Fetched) {
					if (s === o.a.Loyalty || s === o.a.Achievement) return r.data.collections[s];
					if (s === o.a.Cosmetic && n) return r.data.collections[s][n]
				}
				return []
			}

			function C(e, t) {
				const s = w(e, t, o.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function E(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === u.a.Fetched) {
					const e = s.data.collections[o.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return []
			}

			function P(e, t) {
				return w(e, t, o.a.Cosmetic, o.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const S = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === m.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const n = e[s];
						t.push({
							display: `${n.brand} •••• ${n.last4}`,
							id: s,
							type: d.a.SavedStripe
						})
					}
				}
				if (s.status === m.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const n = e[s];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: d.a.SavedPayPal
						})
					}
				}
				return t
			};
			var k;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(k || (k = {}));
			const I = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				N = (e, t) => Object.values(e.products.models).filter(e => e.type === l.a.Membership && t && e.subredditId === t),
				B = (e, t) => {
					if (!t) return {};
					const s = I.prices;
					N(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const n = f(e, t);
					return n && n.price && n.currency && (s[n.currency] = n.price), s
				},
				F = (e, t) => {
					const s = e.subreddits.gov.meta[t || ""],
						n = s && s.extra && s.extra.nomenclature || I;
					return {
						prices: B(e, t),
						member: n.member || I.member,
						memberPlural: n.memberPlural || I.memberPlural,
						memberAlt: n.memberAlt || I.memberAlt,
						memberAltPlural: n.memberAltPlural || I.memberAltPlural,
						membership: n.membership || I.membership,
						membershipAlt: n.membershipAlt || I.membershipAlt
					}
				},
				A = e => {
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
				T = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				G = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				U = (e, t, s) => {
					const r = "replyToPost" !== s && Object(p.a)(e, {
						commentId: s
					});
					if (!!r && Object(a.a)(r)) return !0;
					if (t && Object(b.m)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const i = n.d.spGiphy(e),
						o = G(e, t);
					return i && o
				},
				M = (e, t, s) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[s]
					}
				},
				R = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/products.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/Product/index.ts");
			const r = (e, t) => {
					const s = e.products.models[t];
					if (s && s.type === n.a.Badge) return s
				},
				a = (e, {
					productId: t
				}) => {
					const s = e.products.models[t];
					if (s) {
						const n = s.subredditId,
							r = Object.keys(e.user.ownedBadges[n] || {}),
							a = e.badges.models,
							i = Date.now();
						let o = !1;
						return r.forEach(e => {
							const s = a[e];
							s && s.type === t && s.endsAt > i && (o = !0)
						}), o
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Economics-SubredditPremium-LFGBanner.fb3cc2463e3719bd825d.js.map