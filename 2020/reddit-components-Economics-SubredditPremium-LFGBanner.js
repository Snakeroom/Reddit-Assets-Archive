// https://www.redditstatic.com/desktop2x/reddit-components-Economics-SubredditPremium-LFGBanner.6494f4a90044fb058bb4.js
// Retrieved at 4/9/2020, 12:40:05 PM by Reddit Dataminer v1.0.0
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
				claim: "_2h8JoT5ednzNOqKdVKCHlM",
				close: "_308nelFEzZOnhnqbW5RpPv",
				container: "_26wdyRSALASUyhdTxV6U4k",
				content: "_3D6as82_3SjWTXYShWM5lz",
				dismissedContainer: "_2EAX2PYbs1gAVQGLJ5XaB9",
				dismissedText: "DBgaCJDh9aY3K_vHjS9Q3",
				example: "_3jYACS0eVj0IZYGd02X11f",
				header: "_12kLHf53On8M30LOB009-F",
				successContainer: "_1wtFNjoeAGTIux27TBYRFN"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/uuid/v4.js"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				u = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/config.ts"),
				h = s("./src/reddit/i18n/utils.ts"),
				g = s("./src/reddit/icons/svgs/Approve/index.tsx"),
				f = s("./src/reddit/components/Economics/SubredditPremium/InteractiveBadgesBanner/Success/index.m.less"),
				v = s.n(f);
			const y = {
					description: Object(h.c)("Add your new emoji to comments! Use the action in the bottom right corner to add an emoji."),
					src: "".concat(b.a.assetPath, "/img/memberships/banners/how_to_use_emoji.gif")
				},
				j = {
					description: Object(h.c)("Open 'My Badges' in the Sidebar to apply your badge."),
					src: "".concat(b.a.assetPath, "/img/memberships/banners/how_to_apply_badge.gif")
				},
				O = {
					description: Object(h.c)("Want to change your badge? Visit the Gallery in the Sidebar to view the latest styles."),
					src: "".concat(b.a.assetPath, "/img/memberships/banners/how_to_apply_badge.gif")
				};

			function _(e) {
				const t = (e.hideEmoji ? [] : [y]).concat(e.boughtBadge ? j : O);
				return a.a.createElement("article", {
					className: Object(l.a)(e.className, v.a.container)
				}, a.a.createElement("header", {
					className: v.a.header
				}, a.a.createElement("div", {
					className: v.a.checkContainer
				}, a.a.createElement(g.a, {
					className: v.a.check
				})), Object(h.c)("Congrats! Here's how to use it")), a.a.createElement("div", {
					className: v.a.tutorial
				}, t.map(e => {
					let {
						description: t,
						src: s
					} = e;
					return a.a.createElement("div", {
						className: v.a.col,
						key: t
					}, a.a.createElement("img", {
						className: v.a.img,
						src: s
					}), a.a.createElement("div", {
						className: v.a.explanation
					}, t))
				})))
			}
			var E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/ApiContext.tsx"),
				C = s("./src/reddit/controls/Button/index.tsx"),
				w = s("./src/reddit/endpoints/economics/banners.ts"),
				N = s("./src/reddit/endpoints/economics/emojis.ts"),
				S = s("./src/reddit/helpers/economics/membershipPage.ts"),
				P = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				B = s("./src/reddit/icons/svgs/Close/index.tsx"),
				I = s("./src/reddit/models/Toast/index.ts"),
				L = s("./src/reddit/selectors/economics.ts"),
				D = s("./src/reddit/selectors/telemetry.ts"),
				k = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/Card/index.m.less"),
				F = s.n(k);

			function T(e) {
				return a.a.createElement("article", {
					className: Object(l.a)(e.className, F.a.container, {
						[F.a.fullWidth]: !!e.fullWidth
					})
				}, a.a.createElement("div", {
					className: F.a.cover
				}), a.a.createElement("header", {
					className: F.a.title
				}, e.title), a.a.createElement("img", {
					className: F.a.img,
					src: e.img
				}), a.a.createElement("div", {
					className: F.a.description
				}, e.description), a.a.createElement(C.n, {
					className: F.a.button,
					onClick: e.onClaim
				}, e.cta))
			}
			var G = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts"),
				A = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/index.m.less"),
				R = s.n(A);

			function M(e) {
				const {
					className: t,
					platform: s,
					playerType: n,
					region: r,
					userIsSubscriber: i,
					onClaim: o
				} = e, c = Object(G.d)({
					platform: s,
					playerType: n,
					region: r,
					style: "bw"
				}), d = Object(G.d)({
					platform: s,
					playerType: n,
					region: r,
					style: "color"
				});
				return a.a.createElement("div", {
					className: Object(l.a)(R.a.container, t)
				}, !i && a.a.createElement(a.a.Fragment, null, a.a.createElement(T, {
					className: R.a.freeCard,
					cta: Object(h.c)("claim"),
					img: c,
					title: Object(h.c)("Claim Free Badge"),
					onClaim: () => o(!1)
				}), a.a.createElement("div", {
					className: R.a.divider
				}, a.a.createElement("div", {
					className: R.a.cover
				}), "OR"), a.a.createElement(T, {
					className: R.a.premiumCard,
					cta: Object(h.c)("become a supporter"),
					description: Object(h.c)("Colored badge + dozens more,\nemojis and GIFs in comments"),
					img: d,
					title: Object(h.c)("Claim Premium Badge"),
					onClaim: () => o(!0)
				}), a.a.createElement("img", {
					className: R.a.trial,
					src: "".concat(b.a.assetPath, "/img/memberships/banners/free-trial.png")
				})), i && a.a.createElement(T, {
					fullWidth: !0,
					className: R.a.fullWidthCard,
					cta: Object(h.c)("claim"),
					img: d,
					title: Object(h.c)("Claim Premium Badge"),
					onClaim: () => o(!1)
				}))
			}
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var U = s("./node_modules/lodash/sample.js"),
				W = s.n(U),
				H = s("./node_modules/react-motion/lib/react-motion.js"),
				Z = s("./src/reddit/icons/svgs/Replay/index.tsx"),
				z = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Example/index.m.less"),
				Y = s.n(z);
			const q = {
				stiffness: 210,
				damping: 20
			};

			function K() {
				return {
					platform: W()(Object.keys(G.a)) || "pc",
					playerType: W()(Object.keys(G.b)) || "casual",
					region: W()(Object.keys(G.c)) || "nae"
				}
			}
			class J extends a.a.Component {
				constructor(e) {
					super(e), this.state = K()
				}
				render() {
					const {
						platform: e,
						playerType: t,
						region: s
					} = this.state, n = G.a[e], r = G.b[t], i = G.c[s];
					return a.a.createElement("article", {
						className: Object(l.a)(Y.a.container, this.props.className)
					}, a.a.createElement("div", {
						className: Y.a.cover
					}), a.a.createElement("header", {
						className: Y.a.title
					}, Object(h.c)("Example")), a.a.createElement(H.TransitionMotion, {
						defaultStyles: [{
							key: Object(G.d)(Object.assign({}, this.state, {
								style: "color"
							})),
							style: {
								rotation: 0
							}
						}],
						styles: [{
							key: Object(G.d)(Object.assign({}, this.state, {
								style: "color"
							})),
							style: {
								rotation: Object(H.spring)(0, q)
							}
						}],
						willEnter: () => ({
							rotation: -180
						}),
						willLeave: () => ({
							rotation: Object(H.spring)(180, q)
						})
					}, e => a.a.createElement("div", {
						className: Y.a.preview
					}, e.map(e => a.a.createElement("img", {
						className: Y.a.image,
						key: e.key,
						src: e.key,
						style: {
							transform: "rotateY(".concat(e.style.rotation, "deg)")
						}
					})))), a.a.createElement("footer", {
						className: Y.a.description
					}, "".concat(i, ", ").concat(n, ", ").concat(r)), a.a.createElement(Z.a, {
						className: Y.a.redo,
						onClick: () => this.setState(K())
					}))
				}
			}
			var Q = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Header/index.m.less"),
				X = s.n(Q);
			const V = Object(o.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(L.w)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var $ = Object(r.b)(V)((function(e) {
					const t = e.subreddit ? e.subreddit.displayText : "the community";
					return a.a.createElement("header", {
						className: Object(l.a)(X.a.container, e.className)
					}, a.a.createElement("div", {
						className: X.a.heading
					}, Object(h.c)("looking for game badge")), a.a.createElement("div", {
						className: X.a.prompt
					}, Object(h.c)("Find New Gamers to Play Together"), a.a.createElement("div", {
						className: X.a.sponsorship
					}, a.a.createElement("img", {
						className: X.a.crown,
						src: "".concat(b.a.assetPath, "/img/memberships/paywall/fortnitebr/Crown.gif")
					}), Object(h.c)("Sponsored by ".concat(Object(h.b)("members", e.meta.memberAltPlural))))), a.a.createElement("div", {
						className: X.a.text
					}, Object(h.c)("Get a badge that lets you find new teammates in ".concat(Object(h.b)("community", t), ". ")), Object(h.c)("Specify your region, platform, and your play style for the best match. "), Object(h.c)("The badge helps other players find you, and makes it easier for others to start a conversation in Reddit chat.")))
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
			le.set(G.a, a.a.createElement(e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M15.7658 8.30457C15.5196 6.40434 14.6685 3.93402 13.992 2.18306C13.4831 0.865888 12.2136 0 10.8015 0H5.01677C3.60472 0 2.33517 0.865888 1.82628 2.18306C1.1498 3.93402 0.298684 6.40434 0.0525311 8.30457C-0.374308 11.5997 1.94027 12 1.94027 12L5.31936 7.9067H10.4989L13.878 12C13.878 12 16.1926 11.5997 15.7658 8.30457ZM4.36141 3.50639C4.94606 3.50639 5.42001 3.03243 5.42001 2.44778C5.42001 1.86313 4.94606 1.38918 4.36141 1.38918C3.77676 1.38918 3.3028 1.86313 3.3028 2.44778C3.3028 3.03243 3.77676 3.50639 4.36141 3.50639ZM7.02295 5.43958C7.02295 6.02423 6.549 6.49818 5.96435 6.49818C5.3797 6.49818 4.90574 6.02423 4.90574 5.43958C4.90574 4.85493 5.3797 4.38097 5.96435 4.38097C6.549 4.38097 7.02295 4.85493 7.02295 5.43958ZM11.4569 3.50639C12.0416 3.50639 12.5155 3.03244 12.5155 2.44779C12.5155 1.86314 12.0416 1.38919 11.4569 1.38919C10.8723 1.38919 10.3983 1.86314 10.3983 2.44779C10.3983 3.03244 10.8723 3.50639 11.4569 3.50639ZM10.9126 5.43958C10.9126 6.02423 10.4386 6.49818 9.85398 6.49818C9.26933 6.49818 8.79538 6.02423 8.79538 5.43958C8.79538 4.85493 9.26933 4.38097 9.85398 4.38097C10.4386 4.38097 10.9126 4.85493 10.9126 5.43958Z"
			})), {
				className: oe.a.controller
			})), le.set(G.b, a.a.createElement(re.a, {
				className: oe.a.user
			})), le.set(G.c, a.a.createElement(ae.a, {
				className: oe.a.planet
			}));
			const me = Object(ee.a)(te.a);
			var ue, pe = Object(E.c)((function(e) {
					const t = le.get(e.type),
						s = ce.get(e.type);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Object(l.a)(oe.a.container, e.className, {
							[oe.a.selected]: !!e.selected
						}),
						id: s,
						onClick: e.onToggleDropdown
					}, t, e.text, a.a.createElement(ne.b, {
						className: oe.a.triangle
					})), a.a.createElement(me, {
						tooltipId: s,
						isOpen: !!e.tooltipVisible
					}, Object.keys(e.type).map((t, s) => a.a.createElement(se.b, {
						"data-redditStyle": !0,
						key: s,
						index: s,
						displayText: String(e.type[t]),
						onClick: () => {
							e.onChange(t), e.sendEvent(s => {
								const n = D.defaults(s);
								return Object.assign({
									source: "meta",
									action: "click",
									noun: "lfg_banner_customize_badge",
									correlationId: e.correlationId
								}, n, {
									actionInfo: Object.assign({}, n.actionInfo, {
										paneName: de.get(e.type),
										reason: t
									}),
									subreddit: D.subreddit(s)
								})
							})
						}
					}))))
				})),
				be = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/index.m.less"),
				he = s.n(be),
				ge = Object(E.c)(class extends a.a.Component {
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
							selectedPlayerType: n,
							selectedRegion: r,
							visibleDropdown: i
						} = this.state, o = s ? G.a[s] : Object(h.c)("platform"), c = n ? G.b[n] : Object(h.c)("player type"), d = r ? G.c[r] : Object(h.c)("region");
						return a.a.createElement("article", {
							className: Object(l.a)(he.a.container, e)
						}, a.a.createElement("header", {
							className: he.a.title
						}, Object(h.c)("Setup Your Badge")), a.a.createElement(pe, {
							correlationId: this.props.correlationId,
							selected: !!r,
							tooltipVisible: "region" === i,
							text: d,
							type: G.c,
							onChange: e => this.setState({
								selectedRegion: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "region"
							}))
						}), a.a.createElement(pe, {
							correlationId: this.props.correlationId,
							selected: !!s,
							tooltipVisible: "platform" === i,
							text: o,
							type: G.a,
							onChange: e => this.setState({
								selectedPlatform: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "platform"
							}))
						}), a.a.createElement(pe, {
							correlationId: this.props.correlationId,
							selected: !!n,
							tooltipVisible: "playerType" === i,
							text: c,
							type: G.b,
							onChange: e => this.setState({
								selectedPlayerType: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "playerType"
							}))
						}), a.a.createElement(C.f, {
							className: he.a.button,
							disabled: !s || !n || !r,
							onClick: () => {
								s && n && r && (t({
									platform: s,
									playerType: n,
									region: r
								}), this.props.sendEvent(e => Object.assign({
									source: "meta",
									action: "click",
									noun: "lfg_banner_generate_badge",
									correlationId: this.props.correlationId
								}, D.defaults(e), {
									subreddit: D.subreddit(e)
								})))
							}
						}, Object(h.c)("generate badge")))
					}
				}),
				fe = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.m.less"),
				ve = s.n(fe);
			! function(e) {
				e.CanClaim = "canclaim", e.Claimed = "claimed", e.Dismissed = "dismissed", e.Generating = "generating", e.Hidden = "hidden", e.Select = "select"
			}(ue || (ue = {}));
			class ye extends a.a.Component {
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
						if (!(n && a && r && s && t !== L.b.DontKnow)) return null;
						const i = "".concat(n, "_").concat(a, "_").concat(r, "_badge"),
							o = await Object(N.a)(this.props.apiContext(), {
								productId: i,
								subredditId: this.props.subredditId
							});
						o.ok ? (this.setState({
							show: ue.Claimed
						}), this.props.onDismissBanner(), this.props.onBadgeClaimed(i)) : this.props.onError(o.error), e && this.props.onOpenLandingPage(s, this.correlationId), this.props.sendEvent(t => {
							const s = D.defaults(t);
							return Object.assign({
								source: "meta",
								action: "click",
								noun: e && this.correlationId ? "lfg_banner_claim_premium" : "lfg_banner_claim",
								correlationId: this.correlationId
							}, s, {
								actionInfo: Object.assign({}, s.actionInfo, {
									reason: i,
									paneName: w.a.LFG
								}),
								subreddit: D.subreddit(t)
							})
						})
					}, this.handleDismiss = () => {
						this.state.show === ue.Claimed ? this.setState({
							show: ue.Hidden
						}) : (this.setState({
							show: ue.Dismissed
						}), this.props.sendEvent(e => {
							const t = D.defaults(e);
							return Object.assign({
								source: "meta",
								action: "click",
								noun: "lfg_banner_dismiss",
								correlationId: this.correlationId
							}, t, {
								actionInfo: Object.assign({}, t.actionInfo, {
									paneName: w.a.LFG
								}),
								subreddit: D.subreddit(e)
							})
						})), this.props.onDismissBanner()
					}, this.handleUndoDismiss = () => {
						this.setState({
							show: ue.Select
						}), this.props.onUndismissBanner(), this.props.sendEvent(e => {
							const t = D.defaults(e);
							return Object.assign({
								source: "meta",
								action: "click",
								noun: "lfg_banner_undo_dismiss",
								correlationId: this.correlationId
							}, t, {
								actionInfo: Object.assign({}, t.actionInfo, {
									paneName: w.a.LFG
								}),
								subreddit: D.subreddit(e)
							})
						})
					}, this.state = {
						show: ue.Hidden
					}, this.correlationId = d()()
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
						const t = D.defaults(e);
						return Object.assign({
							source: "meta",
							action: "view",
							noun: "lfg_banner",
							correlationId: this.correlationId
						}, t, {
							actionInfo: Object.assign({}, t.actionInfo, {
								paneName: w.a.LFG
							}),
							subreddit: D.subreddit(e)
						})
					})
				}
				render() {
					const {
						className: e,
						subredditId: t,
						subscriberState: s,
						userIsLoggedIn: n
					} = this.props, {
						show: r,
						selectedRegion: i,
						selectedPlatform: o,
						selectedPlayerType: c
					} = this.state;
					return n && s !== L.b.DontKnow && r !== ue.Hidden ? this.state.show === ue.Dismissed ? a.a.createElement("div", {
						className: Object(l.a)(ve.a.dismissedContainer, e)
					}, a.a.createElement("div", {
						className: ve.a.dismissedText
					}, Object(h.c)("Ok, we won't show you this again.")), a.a.createElement(C.f, {
						onClick: this.handleUndoDismiss
					}, Object(h.c)("undo"))) : this.state.show === ue.Claimed ? a.a.createElement("div", {
						className: Object(l.a)(ve.a.successContainer, e)
					}, a.a.createElement(B.a, {
						className: ve.a.close,
						onClick: this.handleDismiss
					}), a.a.createElement(_, {
						boughtBadge: !0,
						hideEmoji: !0
					})) : a.a.createElement("article", {
						className: Object(l.a)(ve.a.container, e)
					}, a.a.createElement($, {
						className: ve.a.header,
						subredditId: t
					}), a.a.createElement("div", {
						className: ve.a.content
					}, a.a.createElement(ge, {
						correlationId: this.correlationId,
						onGenerate: e => this.setState(() => ({
							show: ue.CanClaim,
							selectedRegion: e.region,
							selectedPlatform: e.platform,
							selectedPlayerType: e.playerType
						}))
					}), r === ue.Select && a.a.createElement(J, {
						className: ve.a.example
					}), r === ue.CanClaim && i && o && c && a.a.createElement(M, {
						className: ve.a.claim,
						platform: o,
						playerType: c,
						region: i,
						userIsSubscriber: s === L.b.Subscribed,
						onClaim: e => this.handleClaim(e)
					})), a.a.createElement(B.a, {
						className: ve.a.close,
						onClick: this.handleDismiss
					})) : null
				}
			}
			const je = Object(o.c)({
					isBannerDismissed: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(L.h)(e, s, w.a.LFG)
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
						return Object(L.D)(e, s)
					},
					userIsLoggedIn: e => !!e.user.account
				}),
				Oe = Object(E.c)(ye);
			t.default = Object(x.b)(Object(r.b)(je, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onDismissBanner: () => e(Object(m.a)(s, w.a.LFG)),
					onError: t => e(Object(p.e)({
						duration: 5e3,
						kind: I.b.Error,
						text: Object(P.a)(t)
					})),
					onFetchDismissedBanners: () => e(Object(m.b)(s)),
					onBadgeClaimed: t => {
						e(Object(u.c)(s, t))
					},
					onOpenLandingPage: (t, s) => {
						e(Object(i.b)(Object(S.a)(t.name, s)))
					},
					onUndismissBanner: () => e(Object(m.c)(s, w.a.LFG))
				}
			})(Oe))
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
						i = Object.assign({}, r, {
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
//# sourceMappingURL=reddit-components-Economics-SubredditPremium-LFGBanner.6494f4a90044fb058bb4.js.map