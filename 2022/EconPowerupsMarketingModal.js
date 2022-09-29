// https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.45f746cb4063e7ec3dcf.js
// Retrieved at 9/29/2022, 4:30:05 PM by Reddit Dataminer v1.0.0
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
				return i
			}));
			var r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				c = s("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				l = s.n(c);
			const i = e => {
				let {
					className: t,
					onClick: s,
					benefit: o
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(t, l.a.container),
					onClick: () => null == s ? void 0 : s(o),
					"data-testid": "benefit-tile"
				}, o.isNew && n.a.createElement(a.a, {
					className: l.a.new
				}), n.a.createElement("div", {
					className: l.a.icon,
					style: {
						backgroundImage: `url('${o.iconUrl}')`
					}
				}), o.title && n.a.createElement("h3", {
					className: l.a.title,
					"data-testid": "benefit-title"
				}, o.title), o.description && n.a.createElement("p", {
					className: l.a.description
				}, o.description))
			}
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
			var r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				l = s.n(c);
			const {
				fbt: i
			} = s("./node_modules/fbt/lib/FbtPublic.js"), d = e => {
				let {
					className: t,
					highContrast: s,
					onClick: o
				} = e;
				return n.a.createElement("button", {
					onClick: o,
					className: Object(r.a)(l.a.closeButton, {
						[l.a.highContrast]: s
					}, t),
					"aria-label": i._("Close", null, {
						hk: "3Qarlp"
					})
				}, n.a.createElement(a.b, {
					className: l.a.closeIcon
				}))
			}
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
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				c = s.n(a);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), i = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("span", {
					className: Object(n.a)(c.a.new, t)
				}, l._("NEW", null, {
					hk: "2P5bsM"
				}))
			}
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
			var r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("header", {
				className: Object(r.a)(c.a.container, e.className)
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
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				c = s("./src/reddit/selectors/platform.ts"),
				l = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/gold/powerups.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				b = s("./src/reddit/components/UserIcon/index.tsx"),
				h = s("./src/reddit/selectors/gold/powerups/index.ts"),
				w = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				f = s.n(w);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = e => {
				let {
					className: t,
					subredditId: s,
					onClick: r
				} = e;
				const a = Object(n.e)(e => Object(h.i)(e, {
						subredditId: s
					})),
					c = Object(n.e)(e => Object(h.k)(e, {
						subredditId: s
					}));
				if (!a) return null;
				const {
					tier: l,
					count: i,
					tiersInfo: m,
					supportersCount: u
				} = a, w = m[1].powerupsCost, _ = l >= 2, x = (null == c ? void 0 : c.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], k = Math.min(i, w) / w, g = w - i;
				return o.a.createElement("div", {
					className: Object(d.a)(f.a.container, t, {
						[f.a.containerClickable]: !!r
					}),
					"data-testid": "join-heroes",
					onClick: () => null == r ? void 0 : r(i)
				}, o.a.createElement("div", {
					className: f.a.heroes
				}, !!x.length && o.a.createElement("div", {
					className: Object(d.a)(f.a.heroesAvatarContainer, {
						[f.a.twoAvatarsContainer]: x.length > 1
					})
				}, x.map(e => {
					var t, s;
					return o.a.createElement("div", {
						className: f.a.heroesAvatar,
						key: e.supporterInfo.id
					}, o.a.createElement(b.a, {
						className: f.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (s = e.supporterInfo.profile) || void 0 === s ? void 0 : s.isNsfw)
					}))
				})), o.a.createElement("div", {
					className: f.a.heroesTitle
				}, (() => u ? E._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [E._plural(u, "subreddit supporters")], {
					hk: "2UisaO"
				}) : E._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), o.a.createElement("p", {
					className: f.a.title
				}, _ ? E._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : E._({
					"*": "{powerups needed} more Powerups will unlock perks for the community",
					_1: "{powerups needed} more Powerup will unlock perks for the community"
				}, [E._param("powerups needed", g), E._plural(g)], {
					hk: "2aHf4k"
				})), o.a.createElement(p.a, {
					className: f.a.progressBar,
					progress: k
				}))
			};
			var x = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				k = s("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"),
				g = s("./src/reddit/components/ScrollGradient/index.tsx"),
				N = s("./src/reddit/constants/modals.ts"),
				P = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/helpers/localStorage/index.ts"),
				C = s("./src/reddit/helpers/trackers/powerups.ts"),
				v = s("./src/reddit/hooks/useScrollGradient.ts"),
				M = s("./src/reddit/hooks/useTracking.ts"),
				S = s("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				I = s("./src/reddit/models/Gold/Powerups/index.ts"),
				y = s("./src/reddit/selectors/experiments/econ/powerupsAward.ts");
			const L = [I.a.CommentRecognition, I.a.PowerupsAward, I.a.CommentsWithEmoji, I.a.Achievements, I.a.HeroStatus],
				A = Object(l.a)(y.b, e => {
					let t = L;
					return e || (t = t.filter(e => e !== I.a.PowerupsAward)), t
				});
			var B = s("./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less"),
				H = s.n(B);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = e => e.length % 2 == 1 ? [...e, I.a.More] : e;
			var W = function(e) {
					const {
						className: t
					} = e, s = Object(M.a)(), r = Object(n.e)(A), a = R(r).map(I.b), c = e => {
						s(Object(C.e)(e.telemetryTag))
					};
					return o.a.createElement("div", {
						className: Object(d.a)(H.a.container, t)
					}, a.map(e => e.title && o.a.createElement(S.a, {
						className: H.a.benefit,
						benefit: e,
						key: e.key,
						onClick: c
					})))
				},
				D = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				G = s("./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less"),
				F = s.n(G);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), U = Object(P.u)(), J = Object(l.c)({
				currentSubredditId: c.s,
				powerups: (e, t) => {
					const s = Object(c.s)(e);
					return s ? Object(h.i)(e, {
						subredditId: s
					}) : null
				},
				subreddit: c.t
			}), K = Object(n.b)(J);
			const z = Object(i.a)(U(K((function(e) {
				const {
					currentSubredditId: t,
					powerups: s,
					subreddit: c
				} = e, l = Object(n.d)(), i = Object(M.a)(), {
					container: p,
					isScrollGradientVisible: b,
					calculateGradientVisibility: h
				} = Object(v.b)(!0);
				Object(r.useEffect)(() => {
					Object(k.a)(), t && l(Object(m.j)(t, {
						fullData: !0
					}))
				}, [t, l]), Object(r.useLayoutEffect)(() => {
					h()
				});
				const w = () => l(Object(u.g)(N.a.ECON_POWERUPS_MARKETING)),
					f = () => {
						Object(O.Jb)(N.a.ECON_POWERUPS_MARKETING, !0), l(Object(u.h)(N.a.ECON_POWERUPS_PURCHASE, {
							subredditId: t
						}))
					};
				if (!t || !c || !s) return w(), null;
				const E = V._("Unlock perks for the whole community", null, {
					hk: "faCTq"
				});
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: F.a.container
				}, o.a.createElement("div", {
					className: Object(d.a)(F.a.main),
					ref: p,
					onScroll: h
				}, o.a.createElement(x.a, {
					onClick: w,
					highContrast: !0
				}), o.a.createElement(D.a, {
					title: V._("Powerup {r/community}", [V._param("r/community", c.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: E
				}), o.a.createElement(W, null), o.a.createElement("span", {
					className: F.a.modDisclaimer
				}, V._("Mods may choose to opt out of some perks.", null, {
					hk: "3W2PR1"
				})), o.a.createElement("h2", {
					className: F.a.howItWorksTitle
				}, V._("How it works", null, {
					hk: "1S8XOX"
				})), o.a.createElement("ul", {
					className: F.a.howItWorksList
				}, o.a.createElement("li", {
					className: F.a.howItWorksStep
				}, o.a.createElement("h3", {
					className: F.a.howItWorksSubtitle
				}, V._("Buy a monthly Powerup subscription", null, {
					hk: "1xgdW6"
				})), o.a.createElement("p", {
					className: F.a.howItWorksDesc
				}, V._("Purchase a Powerup or apply your monthly Powerup included with paid Reddit Premium", null, {
					hk: "2rBQGS"
				}))), o.a.createElement("li", {
					className: F.a.howItWorksStep
				}, o.a.createElement("h3", {
					className: F.a.howItWorksSubtitle
				}, V._("Help unlock perks for your community", null, {
					hk: "4qBTJD"
				})), o.a.createElement(_, {
					className: F.a.joinHeroes,
					subredditId: t,
					onClick: e => {
						i(Object(C.c)("powerups_modal")), e ? l(Object(m.f)(c.id)) : f()
					}
				})), o.a.createElement("li", {
					className: F.a.howItWorksStep
				}, o.a.createElement("h3", {
					className: F.a.howItWorksSubtitle
				}, V._("Unlock perks for yourself", null, {
					hk: "4dQOvK"
				})), o.a.createElement("p", {
					className: F.a.howItWorksDesc
				}, V._("Get instant access to perks, a hero badge, and a spot on the heroes list", null, {
					hk: "3uxTLG"
				}))))), o.a.createElement("div", {
					className: F.a.footer
				}, o.a.createElement(j.t, {
					className: F.a.footerButton,
					onClick: f,
					priority: j.c.Primary
				}, V._("Powerup This Community", null, {
					hk: "3gjy90"
				})), o.a.createElement(g.a, {
					className: F.a.scrollGradient,
					isVisible: b
				})), o.a.createElement(a.a, {
					space: a.b.MODAL
				})))
			}))));
			t.default = e => o.a.createElement(z, Y({}, e, {
				className: Object(d.a)(e.className, F.a.modal)
			}))
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, t, s) {
			e.exports = {
				background: "XVwx9Y9K0HdxTdtF2BPW0",
				isModal: "UtfYccpr1yXmbqvp5V4xO",
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
				return r
			})), s.d(t, "a", (function() {
				return u
			}));
			var r, o = s("./src/config.ts"),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				l = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				m = s.n(d);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL"
			}(r || (r = {}));
			const u = e => {
				let {
					space: t
				} = e;
				const s = Object(l.e)(i.db),
					a = t === r.MODAL;
				return c.a.createElement("div", {
					className: Object(n.a)(m.a.background, {
						[m.a.isNightmodeOn]: s,
						[m.a.isModal]: a
					})
				}, c.a.createElement("div", {
					className: m.a.colorBlockCorner
				}), c.a.createElement("div", {
					className: m.a.colorBlockThrough
				}), c.a.createElement("div", {
					className: m.a.circleStriped,
					style: {
						backgroundImage: s ? `url(${o.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${o.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), c.a.createElement("div", {
					className: m.a.circleOrangeHollow
				}), c.a.createElement("div", {
					className: m.a.circleDotted,
					style: {
						backgroundImage: `url(${o.a.assetPath}/img/powerups/dotcircle.png)`
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
			var r = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				l = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				i = s.n(l);
			const d = Object(o.forwardRef)((function(e, t) {
					let {
						className: s,
						progress: r
					} = e;
					const o = 100 * r;
					return n.a.createElement("div", {
						className: Object(a.a)(i.a.barRow, s),
						ref: t
					}, n.a.createElement("div", {
						className: i.a.track
					}), n.a.createElement("div", {
						className: i.a.progress,
						style: {
							width: `${o}%`
						}
					}, n.a.createElement(c.a, {
						className: Object(a.a)(i.a.icon, {
							[i.a.empty]: 0 === r,
							[i.a.full]: r >= 1
						})
					})))
				})),
				m = e => {
					let {
						className: t,
						progress: s
					} = e;
					const [a, c] = Object(o.useState)(!1), l = a ? s : 0;
					return n.a.createElement(r.a, {
						onChange: e => {
							a || e.intersectionRatio < .75 || c(!0)
						},
						threshold: .75
					}, n.a.createElement(d, {
						className: t,
						progress: l
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
				return l
			}));
			var r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/reddit/components/ScrollGradient/index.m.less"),
				c = s.n(a);
			const l = e => {
				let {
					className: t,
					isVisible: s
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(c.a.gradient, t, {
						[c.a.visible]: s
					})
				})
			}
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			}));
			var r, o = s("./node_modules/react/index.js");

			function n(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.Bottom;
				const [s, n] = Object(o.useState)(e), a = Object(o.useRef)(null);
				return {
					container: a,
					isScrollGradientVisible: s,
					calculateGradientVisibility: () => {
						const e = a.current;
						if (!e) return;
						const s = e.getBoundingClientRect().height,
							{
								scrollHeight: o,
								scrollTop: c
							} = e,
							l = Math.ceil(c + s) >= o,
							i = Math.ceil(s - c) >= o,
							d = t === r.Bottom ? l : i;
						n(!d)
					}
				}
			}! function(e) {
				e.Top = "top", e.Bottom = "bottom"
			}(r || (r = {}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				o = s.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), o.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), o.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), o.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.45f746cb4063e7ec3dcf.js.map