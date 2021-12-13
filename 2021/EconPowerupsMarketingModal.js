// https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.3aef831af014c9ab2389.js
// Retrieved at 12/13/2021, 2:50:06 PM by Reddit Dataminer v1.0.0
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
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				c = s("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				i = s.n(c);
			const l = ({
				className: e,
				onClick: t,
				benefit: s
			}) => o.a.createElement("div", {
				className: Object(n.a)(e, i.a.container),
				onClick: () => null == t ? void 0 : t(s),
				"data-testid": "benefit-tile"
			}, s.isNew && o.a.createElement(a.a, {
				className: i.a.new
			}), o.a.createElement("div", {
				className: i.a.icon,
				style: {
					backgroundImage: `url('${s.iconUrl}')`
				}
			}), s.title && o.a.createElement("h3", {
				className: i.a.title,
				"data-testid": "benefit-title"
			}, s.title), s.description && o.a.createElement("p", {
				className: i.a.description
			}, s.description))
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				i = s("./src/reddit/components/UserIcon/index.tsx"),
				l = s("./src/reddit/selectors/gold/powerups/index.ts"),
				d = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				m = s.n(d);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				className: e,
				subredditId: t,
				onClick: s
			}) => {
				const n = Object(o.e)(e => Object(l.k)(e, {
						subredditId: t
					})),
					d = Object(o.e)(e => Object(l.m)(e, {
						subredditId: t
					}));
				if (!n) return null;
				const {
					tier: p,
					count: b,
					tiersInfo: h,
					supportersCount: w
				} = n, E = h[1].powerupsCost, x = p >= 2, f = (null == d ? void 0 : d.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], _ = Math.min(b, E) / E, k = E - b;
				return r.a.createElement("div", {
					className: Object(a.a)(m.a.container, e, {
						[m.a.containerClickable]: !!s
					}),
					"data-testid": "join-heroes",
					onClick: () => null == s ? void 0 : s(b)
				}, r.a.createElement("div", {
					className: m.a.heroes
				}, !!f.length && r.a.createElement("div", {
					className: Object(a.a)(m.a.heroesAvatarContainer, {
						[m.a.twoAvatarsContainer]: f.length > 1
					})
				}, f.map(e => {
					var t, s;
					return r.a.createElement("div", {
						className: m.a.heroesAvatar,
						key: e.supporterInfo.id
					}, r.a.createElement(i.a, {
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
				}, x ? u._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : u._({
					"*": "{powerups needed} more Powerups will unlock perks for the community",
					_1: "{powerups needed} more Powerup will unlock perks for the community"
				}, [u._param("powerups needed", k), u._plural(k)], {
					hk: "2aHf4k"
				})), r.a.createElement(c.a, {
					className: m.a.progressBar,
					progress: _
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
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e,
				highContrast: t,
				onClick: s
			}) => o.a.createElement("button", {
				onClick: s,
				className: Object(n.a)(i.a.closeButton, {
					[i.a.highContrast]: t
				}, e),
				"aria-label": l._("Close", null, {
					hk: "3Qarlp"
				})
			}, o.a.createElement(a.b, {
				className: i.a.closeIcon
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
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				c = s.n(a);
			const {
				fbt: i
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e
			}) => r.a.createElement("span", {
				className: Object(o.a)(c.a.new, e)
			}, i._("NEW", null, {
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
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("header", {
				className: Object(n.a)(c.a.container, e.className)
			}, o.a.createElement("h2", {
				className: c.a.title
			}, e.title), o.a.createElement("h3", {
				className: c.a.subtitle
			}, e.subtitle))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less": function(e, t, s) {
			e.exports = {
				modal: "_3niK6SoqYWVz3C_LHPXMDD",
				container: "_3fbFTODVaP-23SwM_RYHWW",
				main: "_1PP4a1vxBKAZclzVmYW7SH",
				scrollGradient: "_2m6ArgQ8jrc2aM13gVdJOH",
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/gold/powerups.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				p = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				b = s("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"),
				h = s("./src/reddit/components/ScrollGradient/index.tsx"),
				w = s("./src/reddit/constants/modals.ts"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/helpers/localStorage/index.ts"),
				_ = s("./src/reddit/helpers/trackers/powerups.ts"),
				k = s("./src/reddit/hooks/useScrollGradient.ts"),
				N = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/selectors/gold/powerups/index.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx"),
				C = s("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				v = s("./src/reddit/models/Gold/Powerups/index.ts"),
				M = s("./src/reddit/selectors/experiments/econ/index.ts"),
				I = s("./src/reddit/selectors/experiments/econ/powerupsAward.ts");
			const S = [v.a.CommentRecognition, v.a.PowerupsAward, v.a.CommunityGear, v.a.CommentsWithGifs, v.a.CommentsWithEmoji, v.a.Achievements, v.a.HeroStatus, v.a.HdVideo],
				y = Object(c.a)([I.b, M.j], (e, t) => {
					let s = S;
					return e || (s = s.filter(e => e !== v.a.PowerupsAward)), t || (s = s.filter(e => e !== v.a.CommunityGear)), s
				});
			var L = s("./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less"),
				A = s.n(L);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), B = e => e.length % 2 == 1 ? [...e, v.a.More] : e;
			var T = function(e) {
					const {
						className: t
					} = e, s = Object(N.a)(), n = Object(o.e)(y), a = B(n).map(v.b), c = e => {
						s(Object(_.g)(e.telemetryTag))
					};
					return r.a.createElement("div", {
						className: Object(l.a)(A.a.container, t)
					}, a.map(e => e.title && r.a.createElement(C.a, {
						className: A.a.benefit,
						benefit: e,
						key: e.key,
						onClick: c
					})))
				},
				W = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				R = s("./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less"),
				D = s.n(R);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js"), U = Object(E.u)(), Y = Object(c.c)({
				currentSubredditId: E.n,
				powerups: (e, t) => {
					const s = Object(E.n)(e, t);
					return s ? Object(g.k)(e, {
						subredditId: s
					}) : null
				},
				subreddit: (e, t) => {
					const s = Object(E.n)(e, t);
					return s ? Object(j.R)(e, {
						subredditId: s
					}) : null
				}
			}), V = Object(o.b)(Y);
			const J = Object(i.a)(U(V((function(e) {
				const {
					currentSubredditId: t,
					powerups: s,
					subreddit: c
				} = e, i = Object(o.d)(), E = Object(N.a)(), g = Object(o.e)(e => !Object(P.s)(e)), {
					container: j,
					isScrollGradientVisible: C,
					calculateGradientVisibility: v
				} = Object(k.a)(!0);
				Object(n.useEffect)(() => {
					g ? Object(O.a)() : Object(b.a)()
				}, [g]), Object(n.useLayoutEffect)(() => {
					v()
				});
				const M = () => i(Object(m.g)(w.a.ECON_POWERUPS_MARKETING)),
					I = () => {
						Object(f.Fb)(w.a.ECON_POWERUPS_MARKETING, !0), i(g ? Object(d.h)(t) : Object(m.h)(w.a.ECON_POWERUPS_PURCHASE))
					};
				if (!t || !c || !s) return M(), null;
				const S = G._("Unlock perks for the whole community", null, {
					hk: "faCTq"
				});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: D.a.container
				}, r.a.createElement("div", {
					className: Object(l.a)(D.a.main),
					ref: j,
					onScroll: v
				}, r.a.createElement(p.a, {
					onClick: M,
					highContrast: !0
				}), r.a.createElement(W.a, {
					title: G._("Powerup {r/community}", [G._param("r/community", c.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: S
				}), r.a.createElement(T, null), r.a.createElement("span", {
					className: D.a.modDisclaimer
				}, G._("Mods may choose to opt out of some perks.", null, {
					hk: "3W2PR1"
				})), r.a.createElement("h2", {
					className: D.a.howItWorksTitle
				}, G._("How it works", null, {
					hk: "1S8XOX"
				})), r.a.createElement("ul", {
					className: D.a.howItWorksList
				}, r.a.createElement("li", {
					className: D.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: D.a.howItWorksSubtitle
				}, G._("Buy a monthly Powerup subscription", null, {
					hk: "1xgdW6"
				})), r.a.createElement("p", {
					className: D.a.howItWorksDesc
				}, G._("Purchase a Powerup or apply your monthly Powerup included with paid Reddit Premium", null, {
					hk: "2rBQGS"
				}))), r.a.createElement("li", {
					className: D.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: D.a.howItWorksSubtitle
				}, G._("Help unlock perks for your community", null, {
					hk: "4qBTJD"
				})), r.a.createElement(u.a, {
					className: D.a.joinHeroes,
					subredditId: t,
					onClick: e => {
						E(Object(_.e)("powerups_modal")), e ? i(Object(d.i)(c.id)) : I()
					}
				})), r.a.createElement("li", {
					className: D.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: D.a.howItWorksSubtitle
				}, G._("Unlock perks for yourself", null, {
					hk: "4dQOvK"
				})), r.a.createElement("p", {
					className: D.a.howItWorksDesc
				}, G._("Get instant access to perks, a hero badge, and a spot on the heroes list", null, {
					hk: "3uxTLG"
				}))))), r.a.createElement("div", {
					className: D.a.footer
				}, r.a.createElement(x.t, {
					className: D.a.footerButton,
					onClick: I,
					priority: x.c.Primary
				}, G._("Powerup This Community", null, {
					hk: "3gjy90"
				})), r.a.createElement(h.a, {
					className: D.a.scrollGradient,
					isVisible: C
				})), r.a.createElement(a.a, {
					space: a.b.MODAL
				})))
			}))));
			t.default = e => r.a.createElement(J, F({}, e, {
				className: Object(l.a)(e.className, D.a.modal)
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
				return n
			})), s.d(t, "a", (function() {
				return u
			}));
			var n, r = s("./src/config.ts"),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				m = s.n(d);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL", e[e.INFEED_UNIT = 2] = "INFEED_UNIT"
			}(n || (n = {}));
			const u = ({
				space: e
			}) => {
				const t = Object(i.e)(l.X),
					s = e === n.MODAL,
					a = e === n.INFEED_UNIT;
				return c.a.createElement("div", {
					className: Object(o.a)(m.a.background, {
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
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				i = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				l = s.n(i);
			const d = Object(r.forwardRef)((function({
					className: e,
					progress: t
				}, s) {
					const n = 100 * t;
					return o.a.createElement("div", {
						className: Object(a.a)(l.a.barRow, e),
						ref: s
					}, o.a.createElement("div", {
						className: l.a.track
					}), o.a.createElement("div", {
						className: l.a.progress,
						style: {
							width: `${n}%`
						}
					}, o.a.createElement(c.a, {
						className: Object(a.a)(l.a.icon, {
							[l.a.empty]: 0 === t,
							[l.a.full]: t >= 1
						})
					})))
				})),
				m = ({
					className: e,
					progress: t
				}) => {
					const [s, a] = Object(r.useState)(!1), c = s ? t : 0;
					return o.a.createElement(n.a, {
						onChange: e => {
							s || e.intersectionRatio < .75 || a(!0)
						},
						threshold: .75
					}, o.a.createElement(d, {
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
		"./src/reddit/components/ScrollGradient/index.m.less": function(e, t, s) {
			e.exports = {
				gradient: "_3-kakYRJykUyPafukcDzry",
				visible: "_24Ju7hkI6TbfWdJ0X4gSqu"
			}
		},
		"./src/reddit/components/ScrollGradient/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/ScrollGradient/index.m.less"),
				c = s.n(a);
			const i = ({
				className: e,
				isVisible: t
			}) => o.a.createElement("div", {
				className: Object(n.a)(c.a.gradient, e, {
					[c.a.visible]: t
				})
			})
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js");

			function r(e) {
				const [t, s] = Object(n.useState)(e), r = Object(n.useRef)(null);
				return {
					container: r,
					isScrollGradientVisible: t,
					calculateGradientVisibility: () => {
						const e = r.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							n = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						s(!n)
					}
				}
			}
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.3aef831af014c9ab2389.js.map