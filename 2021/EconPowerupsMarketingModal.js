// https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.6729e5712f6a143d259f.js
// Retrieved at 10/28/2021, 2:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsMarketingModal"], {
		"./src/reddit/components/Econ/Common/BenefitTile/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3WUWb7Sw86xRHJJhjUgdZ9",
				icon: "_4UcAT87VyI5VbP6S7bhhK",
				title: "_7IEgYd0otS-qkC7jLZMRc",
				description: "_1Lmps3yUL3wlUeYBq8e1NW",
				new: "_2xYObLxCbdZPVZMoClN8r0"
			}
		},
		"./src/reddit/components/Econ/Common/BenefitTile/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				c = s("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				l = s.n(c);
			const {
				fbt: i
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				description: t,
				iconUrl: s,
				onClick: o,
				title: c,
				isNew: i
			}) => r.a.createElement("div", {
				className: Object(n.a)(e, l.a.container),
				onClick: o
			}, i && r.a.createElement(a.a, {
				className: l.a.new
			}), r.a.createElement("div", {
				className: l.a.icon,
				style: {
					backgroundImage: `url('${s}')`
				}
			}), c && r.a.createElement("h3", {
				className: l.a.title
			}, c), t && r.a.createElement("p", {
				className: l.a.description
			}, t))
		},
		"./src/reddit/components/Econ/Common/JoinHeroes/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1tjm5mAw6CbmqAm82cwaAe",
				containerClickable: "_12ETqwk_rEASwSwC4LTdl2",
				heroes: "_1xr8vOZkP3Z1aqi0GVlhG7",
				heroesAvatarContainer: "_33ipNjYYNHKNP6aRMCuqyu",
				twoAvatarsContainer: "QEGs83pht1e9sqreE8rdg",
				heroesAvatar: "_1Rhp-wU2kBaVjLOMcsBK7R",
				heroImage: "_1s4Q5XjokhPDv6KobkwfC_",
				heroesTitle: "_1lF-V9k5_vuSgmcqbFv1-r",
				title: "afIbbnRh2nmaJ17MKDECR",
				progressBar: "u6z9wwkHkYsAHhii9K7g9"
			}
		},
		"./src/reddit/components/Econ/Common/JoinHeroes/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				l = s("./src/reddit/components/UserIcon/index.tsx"),
				i = s("./src/reddit/selectors/gold/powerups/index.ts"),
				d = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				m = s.n(d);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				className: e,
				subredditId: t,
				onClick: s
			}) => {
				const o = Object(n.e)(e => Object(i.k)(e, {
						subredditId: t
					})),
					d = Object(n.e)(e => Object(i.m)(e, {
						subredditId: t
					}));
				if (!o) return null;
				const {
					tier: p,
					count: b,
					tiersInfo: h,
					supportersCount: w
				} = o, E = h[1].powerupsCost, _ = p >= 2, x = (null == d ? void 0 : d.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], f = Math.min(b, E) / E, k = E - b;
				return r.a.createElement("div", {
					className: Object(a.a)(m.a.container, e, {
						[m.a.containerClickable]: !!s
					}),
					"data-testid": "join-heroes",
					onClick: () => null == s ? void 0 : s(b)
				}, r.a.createElement("div", {
					className: m.a.heroes
				}, !!x.length && r.a.createElement("div", {
					className: Object(a.a)(m.a.heroesAvatarContainer, {
						[m.a.twoAvatarsContainer]: x.length > 1
					})
				}, x.map(e => {
					var t, s;
					return r.a.createElement("div", {
						className: m.a.heroesAvatar,
						key: e.supporterInfo.id
					}, r.a.createElement(l.a, {
						className: m.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (s = e.supporterInfo.profile) || void 0 === s ? void 0 : s.isNsfw)
					}))
				})), r.a.createElement("div", {
					className: m.a.heroesTitle
				}, (() => w ? u._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [u._plural(w, "subreddit supporters")], {
					hk: "2UisaO"
				}) : u._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), r.a.createElement("p", {
					className: m.a.title
				}, _ ? u._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : u._({
					"*": "{powerups needed} more Powerups will unlock perks for the community",
					_1: "{powerups needed} more Powerup will unlock perks for the community"
				}, [u._param("powerups needed", k), u._plural(k)], {
					hk: "2aHf4k"
				})), r.a.createElement(c.a, {
					className: m.a.progressBar,
					progress: f
				}))
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, s) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				l = s.n(c);
			const {
				fbt: i
			} = s("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e,
				highContrast: t,
				onClick: s
			}) => n.a.createElement("button", {
				onClick: s,
				className: Object(o.a)(l.a.closeButton, {
					[l.a.highContrast]: t
				}, e),
				"aria-label": i._("Close", null, {
					hk: "3Qarlp"
				})
			}, n.a.createElement(a.b, {
				className: l.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.m.less": function(e, t, s) {
			e.exports = {
				new: "_2u3fkh0zbVoixCjyXrW0_e"
			}
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				c = s.n(a);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), i = ({
				className: e
			}) => r.a.createElement("span", {
				className: Object(n.a)(c.a.new, e)
			}, l._("NEW", null, {
				hk: "2P5bsM"
			}))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1wsC6xtrQxNdQdcEh1xPYL",
				benefit: "_8AcMAlnrsNTtD3sjdjQ-8"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3-wzlsd2L9K9BE7yms9IhJ",
				title: "_258n2TylpikH2fhZLhlAgr",
				subtitle: "_1AYSLhpiU1fIwgPPxu2Xuy"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("header", {
				className: Object(o.a)(c.a.container, e.className)
			}, n.a.createElement("h2", {
				className: c.a.title
			}, e.title), n.a.createElement("h3", {
				className: c.a.subtitle
			}, e.subtitle))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less": function(e, t, s) {
			e.exports = {
				modal: "_3niK6SoqYWVz3C_LHPXMDD",
				container: "_3fbFTODVaP-23SwM_RYHWW",
				main: "_1PP4a1vxBKAZclzVmYW7SH",
				gradient: "_2Bq8PY3y9RL7e9UlI8wEtn",
				visible: "_1Pb0dx1erhwXfa-5ouIBhb",
				modDisclaimer: "_1Cj6AeKuH51FKrEs9jZiDz",
				howItWorksTitle: "Pv4vj5-Zps24hD9scZUdd",
				howItWorksList: "_48giMwZjdVcsSk4RNOioH",
				howItWorksStep: "_3zPOTfP_lw9HxZYfDSLqWV",
				howItWorksSubtitle: "_1mHfIbh68RFw-s9Cabk7Ym",
				howItWorksDesc: "_3ZrdxYotyFfYwi18Y3S3-f",
				joinHeroes: "_1pFvP6hkixRjYBho5_-17x",
				footer: "Fy43-QYAjt3CP4mAs7x6r",
				footerButton: "HGL2YGi64zD6F6gaFCcoL",
				Icon: "_1Raz7RPI_ak_MJXOk7GsQJ",
				icon: "_1Raz7RPI_ak_MJXOk7GsQJ",
				isLeft: "_1Zshq2LYnALasR61IdhJ6e",
				isRight: "_2xT7cEnlPQg0E-E5GbHSj-"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/gold/powerups.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				p = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				b = s("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"),
				h = s("./src/reddit/constants/modals.ts"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/helpers/localStorage/index.ts"),
				x = s("./src/reddit/helpers/trackers/powerups.ts"),
				f = s("./src/reddit/hooks/useScrollGradient.ts"),
				k = s("./src/reddit/hooks/useTracking.ts"),
				N = s("./src/reddit/selectors/gold/powerups/index.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				j = (s("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx"), s("./src/config.ts")),
				C = s("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				O = s("./src/reddit/models/Gold/Powerups/index.ts"),
				v = s("./src/reddit/selectors/experiments/econ/index.ts"),
				M = s("./src/reddit/selectors/experiments/econ/powerupsAward.ts");
			const I = [O.a.CommentRecognition, O.a.PowerupsAward, O.a.CommunityGear, O.a.CommentsWithGifs, O.a.CommentsWithEmoji, O.a.Achievements, O.a.HeroStatus, O.a.HdVideo],
				S = Object(c.a)([M.b, v.j], (e, t) => {
					let s = I;
					return e || (s = s.filter(e => e !== O.a.PowerupsAward)), t || (s = s.filter(e => e !== O.a.CommunityGear)), s
				});
			var y = s("./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less"),
				L = s.n(y);
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), A = e => e.length % 2 == 1 ? [...e, O.a.More] : e;
			var H = function(e) {
					const {
						className: t
					} = e, s = Object(k.a)(), o = Object(n.e)(S), a = A(o);
					return r.a.createElement("div", {
						className: Object(i.a)(L.a.container, t)
					}, a.map(e => O.c[e]().title && r.a.createElement(C.a, {
						className: L.a.benefit,
						description: O.c[e]().description,
						iconUrl: `${j.a.assetPath}/img/powerups/${e}_v3.png`,
						key: `cell_${e}`,
						onClick: () => {
							s(Object(x.g)(e))
						},
						title: O.c[e]().title,
						isNew: O.c[e]().isNew
					})))
				},
				T = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				W = s("./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less"),
				R = s.n(W);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), U = Object(w.u)(), G = Object(c.c)({
				currentSubredditId: w.n,
				powerups: (e, t) => {
					const s = Object(w.n)(e, t);
					return s ? Object(N.k)(e, {
						subredditId: s
					}) : null
				},
				subreddit: (e, t) => {
					const s = Object(w.n)(e, t);
					return s ? Object(g.Q)(e, {
						subredditId: s
					}) : null
				}
			}), Y = Object(n.b)(G);
			const V = Object(l.a)(U(Y((function(e) {
				const {
					currentSubredditId: t,
					powerups: s,
					subreddit: c
				} = e, l = Object(n.d)(), w = Object(k.a)();
				let N = Object(n.e)(e => !Object(P.s)(e));
				N = !1;
				const {
					container: g,
					isScrollGradientVisible: j,
					calculateGradientVisibility: C
				} = Object(f.a)(!0);
				Object(o.useEffect)(() => {
					Object(b.a)()
				}, [!1]), Object(o.useLayoutEffect)(() => {
					C()
				});
				const O = () => l(Object(m.g)(h.a.ECON_POWERUPS_MARKETING)),
					v = () => {
						Object(_.Fb)(h.a.ECON_POWERUPS_MARKETING, !0), l(Object(m.h)(h.a.ECON_POWERUPS_PURCHASE))
					};
				if (!t || !c || !s) return O(), null;
				const M = F._("Unlock perks for the whole community", null, {
					hk: "faCTq"
				});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: R.a.container
				}, r.a.createElement("div", {
					className: Object(i.a)(R.a.main),
					ref: g,
					onScroll: C
				}, r.a.createElement(p.a, {
					onClick: O,
					highContrast: !0
				}), r.a.createElement(T.a, {
					title: F._("Powerup {r/community}", [F._param("r/community", c.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: M
				}), r.a.createElement(H, null), r.a.createElement("span", {
					className: R.a.modDisclaimer
				}, F._("Mods may choose to opt out of some perks.", null, {
					hk: "3W2PR1"
				})), r.a.createElement("h2", {
					className: R.a.howItWorksTitle
				}, F._("How it works", null, {
					hk: "1S8XOX"
				})), r.a.createElement("ul", {
					className: R.a.howItWorksList
				}, r.a.createElement("li", {
					className: R.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: R.a.howItWorksSubtitle
				}, F._("Buy a monthly Powerup subscription", null, {
					hk: "1xgdW6"
				})), r.a.createElement("p", {
					className: R.a.howItWorksDesc
				}, F._("Purchase a Powerup or apply your monthly Powerup included with paid Reddit Premium", null, {
					hk: "2rBQGS"
				}))), r.a.createElement("li", {
					className: R.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: R.a.howItWorksSubtitle
				}, F._("Help unlock perks for your community", null, {
					hk: "4qBTJD"
				})), r.a.createElement(u.a, {
					className: R.a.joinHeroes,
					subredditId: t,
					onClick: e => {
						w(Object(x.e)("powerups_modal")), e ? l(Object(d.h)(c.id)) : v()
					}
				})), r.a.createElement("li", {
					className: R.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: R.a.howItWorksSubtitle
				}, F._("Unlock perks for yourself", null, {
					hk: "4dQOvK"
				})), r.a.createElement("p", {
					className: R.a.howItWorksDesc
				}, F._("Get instant access to perks, a hero badge, and a spot on the heroes list", null, {
					hk: "3uxTLG"
				}))))), r.a.createElement("div", {
					className: R.a.footer
				}, r.a.createElement(E.s, {
					className: R.a.footerButton,
					onClick: v,
					priority: E.b.Primary
				}, F._("Powerup This Community", null, {
					hk: "3gjy90"
				})), r.a.createElement("div", {
					className: Object(i.a)(R.a.gradient, {
						[R.a.visible]: j
					})
				})), r.a.createElement(a.a, {
					space: a.b.MODAL
				})))
			}))));
			t.default = e => r.a.createElement(V, D({}, e, {
				className: Object(i.a)(e.className, R.a.modal)
			}))
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, t, s) {
			e.exports = {
				background: "XVwx9Y9K0HdxTdtF2BPW0",
				isModal: "UtfYccpr1yXmbqvp5V4xO",
				isInFeedUnit: "_2hif8-1kZa1knghBW2qHUl",
				colorBlockCorner: "_3cb-_dMe8EWVymoglw4OyK",
				isNightmodeOn: "_2aTpeK-XP6gqT5wf5i532u",
				colorBlockThrough: "_1oWuVmyyrm-f2cYxR7EV9F",
				circle: "NsyhNpI3rn1O5dhzAooci",
				circleStriped: "_3wLmFEQT-lNFxQtTZSBM-A",
				circleDotted: "_2Y6YoeMfdGRReebFzEkb1a",
				circleOrangeHollow: "_2MNXM_uf6rOUZgaO42Wnl0",
				circleGreenHollow: "_1ThCjjX1kI9WTSqGhdfbEY",
				circleYellowHollow: "_2tVCe8UCeeIcsfKn_uIZKT"
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return u
			}));
			var o, r = s("./src/config.ts"),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				l = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				m = s.n(d);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL", e[e.INFEED_UNIT = 2] = "INFEED_UNIT"
			}(o || (o = {}));
			const u = ({
				space: e
			}) => {
				const t = Object(l.e)(i.X),
					s = e === o.MODAL,
					a = e === o.INFEED_UNIT;
				return c.a.createElement("div", {
					className: Object(n.a)(m.a.background, {
						[m.a.isNightmodeOn]: t,
						[m.a.isModal]: s,
						[m.a.isInFeedUnit]: a
					})
				}, c.a.createElement("div", {
					className: m.a.colorBlockCorner
				}), c.a.createElement("div", {
					className: m.a.colorBlockThrough
				}), c.a.createElement("div", {
					className: m.a.circleStriped,
					style: {
						backgroundImage: t ? `url(${r.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${r.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), c.a.createElement("div", {
					className: m.a.circleOrangeHollow
				}), c.a.createElement("div", {
					className: m.a.circleDotted,
					style: {
						backgroundImage: `url(${r.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), c.a.createElement("div", {
					className: m.a.circleGreenHollow
				}), c.a.createElement("div", {
					className: m.a.circleYellowHollow
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				l = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				i = s.n(l);
			const d = Object(r.forwardRef)((function({
					className: e,
					progress: t
				}, s) {
					const o = 100 * t;
					return n.a.createElement("div", {
						className: Object(a.a)(i.a.barRow, e),
						ref: s
					}, n.a.createElement("div", {
						className: i.a.track
					}), n.a.createElement("div", {
						className: i.a.progress,
						style: {
							width: `${o}%`
						}
					}, n.a.createElement(c.a, {
						className: Object(a.a)(i.a.icon, {
							[i.a.empty]: 0 === t,
							[i.a.full]: t >= 1
						})
					})))
				})),
				m = ({
					className: e,
					progress: t
				}) => {
					const [s, a] = Object(r.useState)(!1), c = s ? t : 0;
					return n.a.createElement(o.a, {
						onChange: e => {
							s || e.intersectionRatio < .75 || a(!0)
						},
						threshold: .75
					}, n.a.createElement(d, {
						className: e,
						progress: c
					}))
				}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less": function(e, t, s) {
			e.exports = {
				titleRow: "_2b_W3JXE3VJ8DO4pd1cR3l",
				barRow: "_1ER29kj_M6FYxLorbh1AsJ",
				track: "_3MISl1dByeWJEV8uKLNtbV",
				progress: "_2Y6DmLHlgwPOvY5OenOM7j",
				icon: "_2R4rnD4fdTnIksADG42tm-",
				empty: "hkgHKu8P-BXFRaoLtGkuH",
				full: "_1HqxlPwcLJ3eBF_qCn5-go"
			}
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js");

			function r(e) {
				const [t, s] = Object(o.useState)(e), r = Object(o.useRef)(null);
				return {
					container: r,
					isScrollGradientVisible: t,
					calculateGradientVisibility: () => {
						const e = r.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							o = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						s(!o)
					}
				}
			}
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), r.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), r.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), r.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.6729e5712f6a143d259f.js.map