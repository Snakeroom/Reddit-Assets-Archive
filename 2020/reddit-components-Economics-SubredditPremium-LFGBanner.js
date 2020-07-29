// https://www.redditstatic.com/desktop2x/reddit-components-Economics-SubredditPremium-LFGBanner.99a89e3ece4622ea4545.js
// Retrieved at 7/28/2020, 10:42:45 PM by Reddit Dataminer v1.0.0
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
				a = s("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return n(a(e))
			}
		},
		"./node_modules/lodash/sample.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arraySample.js"),
				a = s("./node_modules/lodash/_baseSample.js"),
				r = s("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (r(e) ? n : a)(e)
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
				a = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/economics/banners/constants.ts");
			const i = Object(a.a)(r.c),
				o = Object(a.a)(r.d),
				c = Object(a.a)(r.a),
				d = Object(a.a)(r.b),
				l = e => async (t, s, a) => {
					let {
						apiContext: r
					} = a;
					const c = s();
					if (!c.user.account) return;
					if (c.economics.banners.dismissedBanners[e]) return;
					t(i(e));
					const d = await Object(n.b)(r(), e);
					t(o({
						subredditId: e,
						data: d
					}))
				}, m = (e, t) => async (s, a, r) => {
					let {
						apiContext: i
					} = r;
					s(c({
						subredditId: e,
						bannerType: t
					})), Object(n.c)(i(), e, t)
				}, u = (e, t) => async (s, a, r) => {
					let {
						apiContext: i
					} = r;
					s(d({
						subredditId: e,
						bannerType: t
					})), Object(n.e)(i(), e, t)
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
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				m = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/config.ts"),
				b = s("./src/reddit/icons/svgs/Approve/index.tsx"),
				h = s("./src/reddit/components/Economics/SubredditPremium/InteractiveBadgesBanner/Success/index.m.less"),
				g = s.n(h);
			const f = {
					description: () => n.fbt._("Add your new emoji to comments! Use the action in the bottom right corner to add an emoji.", null, {
						hk: "3bQZrx"
					}),
					src: "".concat(p.a.assetPath, "/img/memberships/banners/how_to_use_emoji.gif")
				},
				_ = {
					description: () => n.fbt._("Open 'My Badges' in the Sidebar to apply your badge.", null, {
						hk: "rQPFZ"
					}),
					src: "".concat(p.a.assetPath, "/img/memberships/banners/how_to_apply_badge.gif")
				},
				v = {
					description: () => n.fbt._("Want to change your badge? Visit the Gallery in the Sidebar to view the latest styles.", null, {
						hk: "71rqs"
					}),
					src: "".concat(p.a.assetPath, "/img/memberships/banners/how_to_apply_badge.gif")
				};

			function y(e) {
				const t = (e.hideEmoji ? [] : [f]).concat(e.boughtBadge ? _ : v);
				return r.a.createElement("article", {
					className: Object(d.a)(e.className, g.a.container)
				}, r.a.createElement("header", {
					className: g.a.header
				}, r.a.createElement("div", {
					className: g.a.checkContainer
				}, r.a.createElement(b.a, {
					className: g.a.check
				})), n.fbt._("Congrats! Here's how to use it", null, {
					hk: "2IUXGc"
				})), r.a.createElement("div", {
					className: g.a.tutorial
				}, t.map(e => {
					let {
						description: t,
						src: s
					} = e;
					return r.a.createElement("div", {
						className: g.a.col,
						key: t()
					}, r.a.createElement("img", {
						className: g.a.img,
						src: s
					}), r.a.createElement("div", {
						className: g.a.explanation
					}, t()))
				})))
			}
			var x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/contexts/ApiContext.tsx"),
				j = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/endpoints/economics/banners.ts"),
				C = s("./src/reddit/endpoints/economics/emojis.ts"),
				w = s("./src/reddit/helpers/economics/membershipPage.ts"),
				N = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				S = s("./src/reddit/icons/svgs/Close/index.tsx"),
				k = s("./src/reddit/models/Toast/index.ts"),
				P = s("./src/reddit/selectors/economics.ts"),
				B = s("./src/reddit/selectors/telemetry.ts"),
				I = s("./node_modules/uuid/v4.js"),
				L = s.n(I),
				D = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/Card/index.m.less"),
				F = s.n(D);

			function T(e) {
				return r.a.createElement("article", {
					className: Object(d.a)(e.className, F.a.container, {
						[F.a.fullWidth]: !!e.fullWidth
					})
				}, r.a.createElement("div", {
					className: F.a.cover
				}), r.a.createElement("header", {
					className: F.a.title
				}, e.title), r.a.createElement("img", {
					className: F.a.img,
					src: e.img
				}), r.a.createElement("div", {
					className: F.a.description
				}, e.description), r.a.createElement(j.n, {
					className: F.a.button,
					onClick: e.onClaim
				}, e.cta))
			}
			var G = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts"),
				A = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/index.m.less"),
				R = s.n(A);

			function U(e) {
				const {
					className: t,
					platform: s,
					playerType: a,
					region: i,
					userIsSubscriber: o,
					onClaim: c
				} = e, l = Object(G.d)({
					platform: s,
					playerType: a,
					region: i,
					style: "bw"
				}), m = Object(G.d)({
					platform: s,
					playerType: a,
					region: i,
					style: "color"
				});
				return r.a.createElement("div", {
					className: Object(d.a)(R.a.container, t)
				}, !o && r.a.createElement(r.a.Fragment, null, r.a.createElement(T, {
					className: R.a.freeCard,
					cta: n.fbt._("claim", null, {
						hk: "2Ru6yU"
					}),
					img: l,
					title: n.fbt._("Claim Free Badge", null, {
						hk: "3w9WUY"
					}),
					onClaim: () => c(!1)
				}), r.a.createElement("div", {
					className: R.a.divider
				}, r.a.createElement("div", {
					className: R.a.cover
				}), "OR"), r.a.createElement(T, {
					className: R.a.premiumCard,
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
				}), r.a.createElement("img", {
					className: R.a.trial,
					src: "".concat(p.a.assetPath, "/img/memberships/banners/free-trial.png")
				})), o && r.a.createElement(T, {
					fullWidth: !0,
					className: R.a.fullWidthCard,
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
			var W = s("./node_modules/lodash/sample.js"),
				M = s.n(W),
				H = s("./node_modules/react-motion/lib/react-motion.js"),
				z = s("./src/reddit/icons/svgs/Replay/index.tsx"),
				Y = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Example/index.m.less"),
				Z = s.n(Y);
			const K = {
				stiffness: 210,
				damping: 20
			};

			function q() {
				return {
					platform: M()(Object.keys(G.a)) || "pc",
					playerType: M()(Object.keys(G.b)) || "casual",
					region: M()(Object.keys(G.c)) || "nae"
				}
			}
			class Q extends r.a.Component {
				constructor(e) {
					super(e), this.state = q()
				}
				render() {
					const {
						platform: e,
						playerType: t,
						region: s
					} = this.state, a = G.a[e], i = G.b[t], o = G.c[s];
					return r.a.createElement("article", {
						className: Object(d.a)(Z.a.container, this.props.className)
					}, r.a.createElement("div", {
						className: Z.a.cover
					}), r.a.createElement("header", {
						className: Z.a.title
					}, n.fbt._("Example", null, {
						hk: "1siPoi"
					})), r.a.createElement(H.TransitionMotion, {
						defaultStyles: [{
							key: Object(G.d)(Object.assign(Object.assign({}, this.state), {
								style: "color"
							})),
							style: {
								rotation: 0
							}
						}],
						styles: [{
							key: Object(G.d)(Object.assign(Object.assign({}, this.state), {
								style: "color"
							})),
							style: {
								rotation: Object(H.spring)(0, K)
							}
						}],
						willEnter: () => ({
							rotation: -180
						}),
						willLeave: () => ({
							rotation: Object(H.spring)(180, K)
						})
					}, e => r.a.createElement("div", {
						className: Z.a.preview
					}, e.map(e => r.a.createElement("img", {
						className: Z.a.image,
						key: e.key,
						src: e.key,
						style: {
							transform: "rotateY(".concat(e.style.rotation, "deg)")
						}
					})))), r.a.createElement("footer", {
						className: Z.a.description
					}, "".concat(o, ", ").concat(a, ", ").concat(i)), r.a.createElement(z.a, {
						className: Z.a.redo,
						onClick: () => this.setState(q())
					}))
				}
			}
			var J = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Header/index.m.less"),
				V = s.n(J);
			const X = Object(c.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(P.s)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var $ = Object(i.b)(X)((function(e) {
					const t = e.subreddit ? e.subreddit.displayText : "the community";
					return r.a.createElement("header", {
						className: Object(d.a)(V.a.container, e.className)
					}, r.a.createElement("div", {
						className: V.a.heading
					}, n.fbt._("looking for game badge", null, {
						hk: "1fWc1w"
					})), r.a.createElement("div", {
						className: V.a.prompt
					}, n.fbt._("Find New Gamers to Play Together", null, {
						hk: "3voe2T"
					}), r.a.createElement("div", {
						className: V.a.sponsorship
					}, r.a.createElement("img", {
						className: V.a.crown,
						src: "".concat(p.a.assetPath, "/img/memberships/paywall/fortnitebr/Crown.gif")
					}), n.fbt._("Sponsored by {members}", [n.fbt._param("members", e.meta.memberAltPlural)], {
						hk: "2QHfal"
					}))), r.a.createElement("div", {
						className: V.a.text
					}, n.fbt._("Get a badge that lets you find new teammates in {community}.", [n.fbt._param("community", t)], {
						hk: "2GYrVD"
					}), n.fbt._("Specify your region, platform, and your play style for the best match.", null, {
						hk: "1HilaD"
					}), n.fbt._("The badge helps other players find you, and makes it easier for others to start a conversation in Reddit chat.", null, {
						hk: "2TBy4p"
					})))
				})),
				ee = s("./src/higherOrderComponents/asTooltip.tsx"),
				te = s("./src/reddit/controls/Dropdown/index.tsx"),
				se = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ne = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				ae = s("./src/reddit/icons/svgs/Planet/index.tsx"),
				re = s("./src/reddit/icons/svgs/User/index.tsx"),
				ie = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/Option/index.m.less"),
				oe = s.n(ie);
			const ce = new Map;
			ce.set(G.a, "LFG_BANNER_PLATFORM_DROPDOWN"), ce.set(G.b, "LFG_BANNER_PLAYERTYPE_DROPDOWN"), ce.set(G.c, "LFG_BANNER_REGION_DROPDOWN");
			const de = new Map;
			de.set(G.a, "platform"), de.set(G.b, "playerType"), de.set(G.c, "region");
			const le = new Map;
			le.set(G.a, r.a.createElement(e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.7658 8.30457C15.5196 6.40434 14.6685 3.93402 13.992 2.18306C13.4831 0.865888 12.2136 0 10.8015 0H5.01677C3.60472 0 2.33517 0.865888 1.82628 2.18306C1.1498 3.93402 0.298684 6.40434 0.0525311 8.30457C-0.374308 11.5997 1.94027 12 1.94027 12L5.31936 7.9067H10.4989L13.878 12C13.878 12 16.1926 11.5997 15.7658 8.30457ZM4.36141 3.50639C4.94606 3.50639 5.42001 3.03243 5.42001 2.44778C5.42001 1.86313 4.94606 1.38918 4.36141 1.38918C3.77676 1.38918 3.3028 1.86313 3.3028 2.44778C3.3028 3.03243 3.77676 3.50639 4.36141 3.50639ZM7.02295 5.43958C7.02295 6.02423 6.549 6.49818 5.96435 6.49818C5.3797 6.49818 4.90574 6.02423 4.90574 5.43958C4.90574 4.85493 5.3797 4.38097 5.96435 4.38097C6.549 4.38097 7.02295 4.85493 7.02295 5.43958ZM11.4569 3.50639C12.0416 3.50639 12.5155 3.03244 12.5155 2.44779C12.5155 1.86314 12.0416 1.38919 11.4569 1.38919C10.8723 1.38919 10.3983 1.86314 10.3983 2.44779C10.3983 3.03244 10.8723 3.50639 11.4569 3.50639ZM10.9126 5.43958C10.9126 6.02423 10.4386 6.49818 9.85398 6.49818C9.26933 6.49818 8.79538 6.02423 8.79538 5.43958C8.79538 4.85493 9.26933 4.38097 9.85398 4.38097C10.4386 4.38097 10.9126 4.85493 10.9126 5.43958Z"
			})), {
				className: oe.a.controller
			})), le.set(G.b, r.a.createElement(re.a, {
				className: oe.a.user
			})), le.set(G.c, r.a.createElement(ae.a, {
				className: oe.a.planet
			}));
			const me = Object(ee.a)(te.a);
			var ue, pe = Object(x.c)((function(e) {
					const t = le.get(e.type),
						s = ce.get(e.type);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(d.a)(oe.a.container, e.className, {
							[oe.a.selected]: !!e.selected
						}),
						id: s,
						onClick: e.onToggleDropdown
					}, t, e.text, r.a.createElement(ne.b, {
						className: oe.a.triangle
					})), r.a.createElement(me, {
						tooltipId: s,
						isOpen: !!e.tooltipVisible
					}, Object.keys(e.type).map((t, s) => r.a.createElement(se.b, {
						"data-redditStyle": !0,
						key: s,
						index: s,
						displayText: String(e.type[t]),
						onClick: () => {
							e.onChange(t), e.sendEvent(s => {
								const n = B.defaults(s);
								return Object.assign(Object.assign({
									source: "meta",
									action: "click",
									noun: "lfg_banner_customize_badge",
									correlationId: e.correlationId
								}, n), {
									actionInfo: Object.assign(Object.assign({}, n.actionInfo), {
										paneName: de.get(e.type),
										reason: t
									}),
									subreddit: B.subreddit(s)
								})
							})
						}
					}))))
				})),
				be = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/index.m.less"),
				he = s.n(be),
				ge = Object(x.c)(class extends r.a.Component {
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
							selectedPlayerType: a,
							selectedRegion: i,
							visibleDropdown: o
						} = this.state, c = s ? G.a[s] : n.fbt._("platform", null, {
							hk: "4cCVan"
						}), l = a ? G.b[a] : n.fbt._("player type", null, {
							hk: "20Xii5"
						}), m = i ? G.c[i] : n.fbt._("region", null, {
							hk: "30zv9O"
						});
						return r.a.createElement("article", {
							className: Object(d.a)(he.a.container, e)
						}, r.a.createElement("header", {
							className: he.a.title
						}, n.fbt._("Setup Your Badge", null, {
							hk: "21LcIU"
						})), r.a.createElement(pe, {
							correlationId: this.props.correlationId,
							selected: !!i,
							tooltipVisible: "region" === o,
							text: m,
							type: G.c,
							onChange: e => this.setState({
								selectedRegion: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "region"
							}))
						}), r.a.createElement(pe, {
							correlationId: this.props.correlationId,
							selected: !!s,
							tooltipVisible: "platform" === o,
							text: c,
							type: G.a,
							onChange: e => this.setState({
								selectedPlatform: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "platform"
							}))
						}), r.a.createElement(pe, {
							correlationId: this.props.correlationId,
							selected: !!a,
							tooltipVisible: "playerType" === o,
							text: l,
							type: G.b,
							onChange: e => this.setState({
								selectedPlayerType: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "playerType"
							}))
						}), r.a.createElement(j.f, {
							className: he.a.button,
							disabled: !s || !a || !i,
							onClick: () => {
								s && a && i && (t({
									platform: s,
									playerType: a,
									region: i
								}), this.props.sendEvent(e => Object.assign(Object.assign({
									source: "meta",
									action: "click",
									noun: "lfg_banner_generate_badge",
									correlationId: this.props.correlationId
								}, B.defaults(e)), {
									subreddit: B.subreddit(e)
								})))
							}
						}, n.fbt._("generate badge", null, {
							hk: "jIsB2"
						})))
					}
				}),
				fe = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.m.less"),
				_e = s.n(fe);
			! function(e) {
				e.CanClaim = "canclaim", e.Claimed = "claimed", e.Dismissed = "dismissed", e.Generating = "generating", e.Hidden = "hidden", e.Select = "select"
			}(ue || (ue = {}));
			class ve extends r.a.Component {
				constructor(e) {
					super(e), this.handleClaim = async e => {
						const {
							subscriberState: t,
							subreddit: s
						} = this.props, {
							selectedRegion: n,
							selectedPlatform: a,
							selectedPlayerType: r
						} = this.state;
						if (!(n && a && r && s && t !== P.a.DontKnow)) return null;
						const i = "".concat(n, "_").concat(a, "_").concat(r, "_badge"),
							o = await Object(C.a)(this.props.apiContext(), {
								productId: i,
								subredditId: this.props.subredditId
							});
						o.ok ? (this.setState({
							show: ue.Claimed
						}), this.props.onDismissBanner(), this.props.onBadgeClaimed(i)) : this.props.onError(o.error), e && this.props.onOpenLandingPage(s, this.correlationId), this.props.sendEvent(t => {
							const s = B.defaults(t);
							return Object.assign(Object.assign({
								source: "meta",
								action: "click",
								noun: e && this.correlationId ? "lfg_banner_claim_premium" : "lfg_banner_claim",
								correlationId: this.correlationId
							}, s), {
								actionInfo: Object.assign(Object.assign({}, s.actionInfo), {
									reason: i,
									paneName: O.a.LFG
								}),
								subreddit: B.subreddit(t)
							})
						})
					}, this.handleDismiss = () => {
						this.state.show === ue.Claimed ? this.setState({
							show: ue.Hidden
						}) : (this.setState({
							show: ue.Dismissed
						}), this.props.sendEvent(e => {
							const t = B.defaults(e);
							return Object.assign(Object.assign({
								source: "meta",
								action: "click",
								noun: "lfg_banner_dismiss",
								correlationId: this.correlationId
							}, t), {
								actionInfo: Object.assign(Object.assign({}, t.actionInfo), {
									paneName: O.a.LFG
								}),
								subreddit: B.subreddit(e)
							})
						})), this.props.onDismissBanner()
					}, this.handleUndoDismiss = () => {
						this.setState({
							show: ue.Select
						}), this.props.onUndismissBanner(), this.props.sendEvent(e => {
							const t = B.defaults(e);
							return Object.assign(Object.assign({
								source: "meta",
								action: "click",
								noun: "lfg_banner_undo_dismiss",
								correlationId: this.correlationId
							}, t), {
								actionInfo: Object.assign(Object.assign({}, t.actionInfo), {
									paneName: O.a.LFG
								}),
								subreddit: B.subreddit(e)
							})
						})
					}, this.state = {
						show: ue.Hidden
					}, this.correlationId = L()()
				}
				componentDidMount() {
					!1 === this.props.isBannerDismissed ? this.handleBannerShownFirstTime() : void 0 === this.props.isBannerDismissed && this.props.onFetchDismissedBanners()
				}
				componentDidUpdate(e) {
					void 0 === e.isBannerDismissed && !1 === this.props.isBannerDismissed && this.handleBannerShownFirstTime()
				}
				handleBannerShownFirstTime() {
					this.setState({
						show: ue.Select
					}), this.props.sendEvent(e => {
						const t = B.defaults(e);
						return Object.assign(Object.assign({
							source: "meta",
							action: "view",
							noun: "lfg_banner",
							correlationId: this.correlationId
						}, t), {
							actionInfo: Object.assign(Object.assign({}, t.actionInfo), {
								paneName: O.a.LFG
							}),
							subreddit: B.subreddit(e)
						})
					})
				}
				render() {
					const {
						className: e,
						subredditId: t,
						subscriberState: s,
						userIsLoggedIn: a
					} = this.props, {
						show: i,
						selectedRegion: o,
						selectedPlatform: c,
						selectedPlayerType: l
					} = this.state;
					return a && s !== P.a.DontKnow && i !== ue.Hidden ? this.state.show === ue.Dismissed ? r.a.createElement("div", {
						className: Object(d.a)(_e.a.dismissedContainer, e)
					}, r.a.createElement("div", {
						className: _e.a.dismissedText
					}, n.fbt._("Ok, we won't show you this again.", null, {
						hk: "4z33KK"
					})), r.a.createElement(j.f, {
						onClick: this.handleUndoDismiss
					}, n.fbt._("undo", null, {
						hk: "1A9z3Y"
					}))) : this.state.show === ue.Claimed ? r.a.createElement("div", {
						className: Object(d.a)(_e.a.successContainer, e)
					}, r.a.createElement(S.a, {
						className: _e.a.close,
						onClick: this.handleDismiss
					}), r.a.createElement(y, {
						boughtBadge: !0,
						hideEmoji: !0
					})) : r.a.createElement("article", {
						className: Object(d.a)(_e.a.container, e)
					}, r.a.createElement($, {
						className: _e.a.header,
						subredditId: t
					}), r.a.createElement("div", {
						className: _e.a.content
					}, r.a.createElement(ge, {
						correlationId: this.correlationId,
						onGenerate: e => this.setState(() => ({
							show: ue.CanClaim,
							selectedRegion: e.region,
							selectedPlatform: e.platform,
							selectedPlayerType: e.playerType
						}))
					}), i === ue.Select && r.a.createElement(Q, {
						className: _e.a.example
					}), i === ue.CanClaim && o && c && l && r.a.createElement(U, {
						className: _e.a.claim,
						platform: c,
						playerType: l,
						region: o,
						userIsSubscriber: s === P.a.Subscribed,
						onClaim: e => this.handleClaim(e)
					})), r.a.createElement(S.a, {
						className: _e.a.close,
						onClick: this.handleDismiss
					})) : null
				}
			}
			const ye = Object(c.c)({
					isBannerDismissed: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(P.g)(e, s, O.a.LFG)
					},
					subreddit: (e, t) => {
						let {
							subredditId: s
						} = t;
						return e.subreddits.models[s]
					},
					subscriberState: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(P.x)(e, s)
					},
					userIsLoggedIn: e => !!e.user.account
				}),
				xe = Object(x.c)(ve);
			t.default = Object(E.b)(Object(i.b)(ye, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onDismissBanner: () => e(Object(l.a)(s, O.a.LFG)),
					onError: t => e(Object(u.e)({
						duration: 5e3,
						kind: k.b.Error,
						text: Object(N.a)(t)
					})),
					onFetchDismissedBanners: () => e(Object(l.b)(s)),
					onBadgeClaimed: t => {
						e(Object(m.c)(s, t))
					},
					onOpenLandingPage: (t, s) => {
						e(Object(o.b)(Object(w.a)(t.name, s)))
					},
					onUndismissBanner: () => e(Object(l.c)(s, O.a.LFG))
				}
			})(xe))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, s) {
			"use strict";
			var n, a, r, i;

			function o(e) {
				const {
					platform: t,
					playerType: s,
					region: n,
					style: a
				} = e;
				return "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_".concat(a, "/").concat(n, "_").concat(t, "_").concat(s, "_").concat(a, ".svg")
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return a
				})), s.d(t, "c", (function() {
					return r
				})), s.d(t, "d", (function() {
					return o
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(n || (n = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(a || (a = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(r || (r = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(i || (i = {}))
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
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
			var n, a, r = s("./src/config.ts"),
				i = s("./src/reddit/endpoints/governance/requester.ts");
			async function o(e, t, s, n) {
				return Object(i.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/storage/").concat(t, "/me/").concat(s),
					method: "patch",
					data: n
				})
			}
			async function c(e, t) {
				const s = await async function(e, t, s) {
					return Object(i.a)(e, {
						endpoint: "".concat(r.a.metaUrl, "/storage/").concat(t, "/me/").concat(s),
						method: "get"
					})
				}(e, t, n.UpsellBanners);
				return s.ok && s.body || {}
			}
			async function d(e, t, s, a) {
					const r = await c(e, t),
						i = Object.assign(Object.assign({}, r), {
							[s]: a
						});
					return (await o(e, t, n.UpsellBanners, i)).ok ? i : r
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(n || (n = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(a || (a = {}));
			const l = async (e, t, s) => d(e, t, s, !0), m = async (e, t, s) => d(e, t, s, !1), u = (e, t) => o(e, t, n.UpsellBanners, Object.keys(a).reduce((e, t) => (e[a[t]] = !1, e), {}))
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/permalinkToOverlayLocation/index.ts");

			function a(e, t) {
				return Object(n.a)("/web/special-membership/".concat(e, "?corr=").concat(t))
			}
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Planet/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), a.a.createElement("title", null, "Planet"), a.a.createElement("path", {
				d: "M16.74,11.87A7,7,0,0,0,8.13,3.26c-3-2-5.59-2.8-6.63-1.76S1.25,5.15,3.28,8.16a6.95,6.95,0,0,0,8.57,8.57c3,2,5.61,2.82,6.66,1.78S18.76,14.87,16.74,11.87Zm0,4.86c-.53.53-1.77.26-3.33-.61h0a25.48,25.48,0,0,1-5.32-4.19c-.46-.46-.9-.93-1.31-1.39h0c-.41-.46-.79-.92-1.15-1.37h0c-.35-.45-.68-.89-1-1.32h0C4.36,7.41,4.1,7,3.88,6.6,3,5,2.74,3.8,3.27,3.27S5,3,6.6,3.88A6.78,6.78,0,0,0,4.52,5.65a23.14,23.14,0,0,0,4.27,5.56,22.92,22.92,0,0,0,5.56,4.27,6.79,6.79,0,0,0,1.77-2.08C17,15,17.26,16.2,16.73,16.73Z"
			}))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", r({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), a.a.createElement("g", null, a.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		}
	}
]);
//# sourceMappingURL=reddit-components-Economics-SubredditPremium-LFGBanner.99a89e3ece4622ea4545.js.map