// https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.09d1688a9e1dd3b421f2.js
// Retrieved at 11/3/2021, 12:30:07 PM by Reddit Dataminer v1.0.0
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
				i = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				description: t,
				iconUrl: s,
				onClick: o,
				title: c,
				isNew: l
			}) => r.a.createElement("div", {
				className: Object(n.a)(e, i.a.container),
				onClick: o
			}, l && r.a.createElement(a.a, {
				className: i.a.new
			}), r.a.createElement("div", {
				className: i.a.icon,
				style: {
					backgroundImage: `url('${s}')`
				}
			}), c && r.a.createElement("h3", {
				className: i.a.title
			}, c), t && r.a.createElement("p", {
				className: i.a.description
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
				const o = Object(n.e)(e => Object(l.k)(e, {
						subredditId: t
					})),
					d = Object(n.e)(e => Object(l.m)(e, {
						subredditId: t
					}));
				if (!o) return null;
				const {
					tier: p,
					count: b,
					tiersInfo: h,
					supportersCount: w
				} = o, _ = h[1].powerupsCost, E = p >= 2, x = (null == d ? void 0 : d.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], f = Math.min(b, _) / _, k = _ - b;
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
				}, E ? u._("Community perks are now unlocked!", null, {
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
				i = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e,
				highContrast: t,
				onClick: s
			}) => n.a.createElement("button", {
				onClick: s,
				className: Object(o.a)(i.a.closeButton, {
					[i.a.highContrast]: t
				}, e),
				"aria-label": l._("Close", null, {
					hk: "3Qarlp"
				})
			}, n.a.createElement(a.b, {
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
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				c = s.n(a);
			const {
				fbt: i
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e
			}) => r.a.createElement("span", {
				className: Object(n.a)(c.a.new, e)
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
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/gold/powerups.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				p = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				b = s("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"),
				h = s("./src/reddit/constants/modals.ts"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/helpers/localStorage/index.ts"),
				x = s("./src/reddit/helpers/trackers/powerups.ts"),
				f = s("./src/reddit/hooks/useScrollGradient.ts"),
				k = s("./src/reddit/hooks/useTracking.ts"),
				N = s("./src/reddit/selectors/gold/powerups/index.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx"),
				O = s("./src/config.ts"),
				C = s("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				v = s("./src/reddit/models/Gold/Powerups/index.ts"),
				I = s("./src/reddit/selectors/experiments/econ/index.ts"),
				M = s("./src/reddit/selectors/experiments/econ/powerupsAward.ts");
			const S = [v.a.CommentRecognition, v.a.PowerupsAward, v.a.CommunityGear, v.a.CommentsWithGifs, v.a.CommentsWithEmoji, v.a.Achievements, v.a.HeroStatus, v.a.HdVideo],
				y = Object(c.a)([M.b, I.j], (e, t) => {
					let s = S;
					return e || (s = s.filter(e => e !== v.a.PowerupsAward)), t || (s = s.filter(e => e !== v.a.CommunityGear)), s
				});
			var B = s("./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less"),
				A = s.n(B);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = e => e.length % 2 == 1 ? [...e, v.a.More] : e;
			var W = function(e) {
					const {
						className: t
					} = e, s = Object(k.a)(), o = Object(n.e)(y), a = T(o);
					return r.a.createElement("div", {
						className: Object(l.a)(A.a.container, t)
					}, a.map(e => v.c[e]().title && r.a.createElement(C.a, {
						className: A.a.benefit,
						description: v.c[e]().description,
						iconUrl: `${O.a.assetPath}/img/powerups/${e}_v3.png`,
						key: `cell_${e}`,
						onClick: () => {
							s(Object(x.g)(e))
						},
						title: v.c[e]().title,
						isNew: v.c[e]().isNew
					})))
				},
				R = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				D = s("./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less"),
				L = s.n(D);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), G = Object(w.u)(), Y = Object(c.c)({
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
			}), V = Object(n.b)(Y);
			const K = Object(i.a)(G(V((function(e) {
				const {
					currentSubredditId: t,
					powerups: s,
					subreddit: c
				} = e, i = Object(n.d)(), w = Object(k.a)(), N = Object(n.e)(e => !Object(P.s)(e)), {
					container: g,
					isScrollGradientVisible: O,
					calculateGradientVisibility: C
				} = Object(f.a)(!0);
				Object(o.useEffect)(() => {
					N ? Object(j.a)() : Object(b.a)()
				}, [N]), Object(o.useLayoutEffect)(() => {
					C()
				});
				const v = () => i(Object(m.g)(h.a.ECON_POWERUPS_MARKETING)),
					I = () => {
						Object(E.Fb)(h.a.ECON_POWERUPS_MARKETING, !0), i(N ? Object(d.g)(t) : Object(m.h)(h.a.ECON_POWERUPS_PURCHASE))
					};
				if (!t || !c || !s) return v(), null;
				const M = U._("Unlock perks for the whole community", null, {
					hk: "faCTq"
				});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: L.a.container
				}, r.a.createElement("div", {
					className: Object(l.a)(L.a.main),
					ref: g,
					onScroll: C
				}, r.a.createElement(p.a, {
					onClick: v,
					highContrast: !0
				}), r.a.createElement(R.a, {
					title: U._("Powerup {r/community}", [U._param("r/community", c.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: M
				}), r.a.createElement(W, null), r.a.createElement("span", {
					className: L.a.modDisclaimer
				}, U._("Mods may choose to opt out of some perks.", null, {
					hk: "3W2PR1"
				})), r.a.createElement("h2", {
					className: L.a.howItWorksTitle
				}, U._("How it works", null, {
					hk: "1S8XOX"
				})), r.a.createElement("ul", {
					className: L.a.howItWorksList
				}, r.a.createElement("li", {
					className: L.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: L.a.howItWorksSubtitle
				}, U._("Buy a monthly Powerup subscription", null, {
					hk: "1xgdW6"
				})), r.a.createElement("p", {
					className: L.a.howItWorksDesc
				}, U._("Purchase a Powerup or apply your monthly Powerup included with paid Reddit Premium", null, {
					hk: "2rBQGS"
				}))), r.a.createElement("li", {
					className: L.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: L.a.howItWorksSubtitle
				}, U._("Help unlock perks for your community", null, {
					hk: "4qBTJD"
				})), r.a.createElement(u.a, {
					className: L.a.joinHeroes,
					subredditId: t,
					onClick: e => {
						w(Object(x.e)("powerups_modal")), e ? i(Object(d.h)(c.id)) : I()
					}
				})), r.a.createElement("li", {
					className: L.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: L.a.howItWorksSubtitle
				}, U._("Unlock perks for yourself", null, {
					hk: "4dQOvK"
				})), r.a.createElement("p", {
					className: L.a.howItWorksDesc
				}, U._("Get instant access to perks, a hero badge, and a spot on the heroes list", null, {
					hk: "3uxTLG"
				}))))), r.a.createElement("div", {
					className: L.a.footer
				}, r.a.createElement(_.s, {
					className: L.a.footerButton,
					onClick: I,
					priority: _.b.Primary
				}, U._("Powerup This Community", null, {
					hk: "3gjy90"
				})), r.a.createElement("div", {
					className: Object(l.a)(L.a.gradient, {
						[L.a.visible]: O
					})
				})), r.a.createElement(a.a, {
					space: a.b.MODAL
				})))
			}))));
			t.default = e => r.a.createElement(K, F({}, e, {
				className: Object(l.a)(e.className, L.a.modal)
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
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				m = s.n(d);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL", e[e.INFEED_UNIT = 2] = "INFEED_UNIT"
			}(o || (o = {}));
			const u = ({
				space: e
			}) => {
				const t = Object(i.e)(l.X),
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
				i = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				l = s.n(i);
			const d = Object(r.forwardRef)((function({
					className: e,
					progress: t
				}, s) {
					const o = 100 * t;
					return n.a.createElement("div", {
						className: Object(a.a)(l.a.barRow, e),
						ref: s
					}, n.a.createElement("div", {
						className: l.a.track
					}), n.a.createElement("div", {
						className: l.a.progress,
						style: {
							width: `${o}%`
						}
					}, n.a.createElement(c.a, {
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.09d1688a9e1dd3b421f2.js.map