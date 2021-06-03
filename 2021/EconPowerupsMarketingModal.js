// https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.8af73f871c1bd437442d.js
// Retrieved at 6/3/2021, 4:00:05 PM by Reddit Dataminer v1.0.0
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				c = s("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				l = s.n(c);
			const {
				fbt: i
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				description: t,
				iconUrl: s,
				onClick: a,
				title: c,
				isNew: i
			}) => n.a.createElement("div", {
				className: Object(r.a)(e, l.a.container),
				onClick: a
			}, i && n.a.createElement(o.a, {
				className: l.a.new
			}), n.a.createElement("div", {
				className: l.a.icon,
				style: {
					backgroundImage: `url('${s}')`
				}
			}), c && n.a.createElement("h3", {
				className: l.a.title
			}, c), t && n.a.createElement("p", {
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
				return b
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				l = s("./src/reddit/components/UserIcon/index.tsx"),
				i = s("./src/reddit/selectors/gold/powerups/index.ts"),
				d = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = ({
				className: e,
				subredditId: t,
				onClick: s
			}) => {
				const a = Object(r.e)(e => Object(i.i)(e, {
						subredditId: t
					})),
					m = Object(r.e)(e => Object(d.U)(e, {
						subredditId: t
					})),
					b = Object(r.e)(e => Object(i.k)(e, {
						subredditId: t
					}));
				if (!a) return null;
				const {
					tier: h,
					count: E,
					tiersInfo: w,
					supportersCount: _
				} = a, f = w[1].powerupsCost, k = h >= 2, N = (null == b ? void 0 : b.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], x = Math.min(E, f) / f, g = f - E;
				return n.a.createElement("div", {
					className: Object(o.a)(u.a.container, e, {
						[u.a.containerClickable]: !!s
					}),
					"data-testid": "join-heroes",
					onClick: () => null == s ? void 0 : s(E)
				}, n.a.createElement("div", {
					className: u.a.heroes
				}, !!N.length && n.a.createElement("div", {
					className: Object(o.a)(u.a.heroesAvatarContainer, {
						[u.a.twoAvatarsContainer]: N.length > 1
					})
				}, N.map(e => {
					var t, s;
					return n.a.createElement("div", {
						className: u.a.heroesAvatar,
						key: e.supporterInfo.id
					}, n.a.createElement(l.a, {
						className: u.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (s = e.supporterInfo.profile) || void 0 === s ? void 0 : s.isNsfw)
					}))
				})), n.a.createElement("div", {
					className: u.a.heroesTitle
				}, _ ? p._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [p._plural(_, "subreddit supporters")], {
					hk: "2UisaO"
				}) : p._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))), n.a.createElement("p", {
					className: u.a.title
				}, k ? p._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : p._("{subredditName} needs {powerups needed} more Powerups to unlock perks for the entire community", [p._param("subredditName", m.displayText), p._param("powerups needed", g)], {
					hk: "4h33rf"
				})), n.a.createElement(c.a, {
					className: u.a.progressBar,
					progress: x
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				c = s.n(o);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), i = ({
				className: e
			}) => n.a.createElement("span", {
				className: Object(r.a)(c.a.new, e)
			}, l._("NEW", null, {
				hk: "2P5bsM"
			}))
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less": function(e, t, s) {
			e.exports = {
				image: "_2UM9VBeA7xU3ro_DBfudN2"
			}
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var a = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				c = s.n(o);
			const l = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement("picture", null, r.a.createElement("source", {
				srcSet: `${a.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), r.a.createElement("source", {
				srcSet: `${a.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), r.a.createElement("img", {
				className: c.a.image,
				src: `${a.a.assetPath}/img/powerups/powerup.png`
			})))
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
				imageContainer: "_2moFyXtJlZerLLuTvZ9TYQ",
				title: "_258n2TylpikH2fhZLhlAgr",
				subtitle: "_1AYSLhpiU1fIwgPPxu2Xuy"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				c = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				l = s.n(c);
			t.a = e => r.a.createElement("header", {
				className: Object(a.a)(l.a.container, e.className)
			}, r.a.createElement(o.a, {
				className: l.a.imageContainer
			}), r.a.createElement("div", null, r.a.createElement("h2", {
				className: l.a.title
			}, e.title), r.a.createElement("h3", {
				className: l.a.subtitle
			}, e.subtitle)))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less": function(e, t, s) {
			e.exports = {
				modal: "_3niK6SoqYWVz3C_LHPXMDD",
				container: "_3fbFTODVaP-23SwM_RYHWW",
				main: "_1PP4a1vxBKAZclzVmYW7SH",
				gradient: "_2Bq8PY3y9RL7e9UlI8wEtn",
				hidden: "_3GmeeW9pmveucruSGy3mzn",
				closeButton: "_3TnMTOuzTBBbwZPkbtAGMt",
				closeIcon: "_1INyXtUNSTJOsv3ccmn-Xv",
				benefits: "_2aogHH2E_wc_wy_T88G9sw",
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/gold/powerups.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				u = s("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"),
				p = s("./src/reddit/constants/modals.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/helpers/localStorage/index.ts"),
				w = s("./src/reddit/helpers/trackers/powerups.ts"),
				_ = s("./src/reddit/hooks/useTracking.ts"),
				f = s("./src/reddit/icons/svgs/Close/index.tsx"),
				k = s("./src/reddit/selectors/experiments/econ/index.ts"),
				N = s("./src/reddit/selectors/gold/powerups/index.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/config.ts"),
				P = s("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				j = s("./src/reddit/models/Gold/Powerups/index.ts"),
				O = s("./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less"),
				v = s.n(O);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = [j.a.CommentsWithGifs, j.a.CommentsWithEmoji, j.a.Achievements, j.a.HeroStatus, j.a.HdVideo], y = e => {
				let t = e ? I : I.filter(e => e !== j.a.Achievements);
				return t.length % 2 == 1 && (t = [...t, j.a.More]), t
			};
			var M = function(e) {
					const {
						className: t
					} = e, s = Object(_.a)(), a = Object(r.e)(k.g), o = y(a);
					return n.a.createElement("div", {
						className: Object(l.a)(v.a.container, t)
					}, o.map(e => j.d[e] && n.a.createElement(P.a, {
						className: v.a.benefit,
						description: j.c[e](),
						iconUrl: `${g.a.assetPath}/img/powerups/${e}_v3.png`,
						key: `cell_${e}`,
						onClick: () => {
							s(Object(w.e)(e))
						},
						title: j.d[e]()
					})))
				},
				S = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx");
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var H = function(e) {
					const {
						benefits: t,
						className: s
					} = e, a = Object(_.a)(), r = [...t, j.a.HeroStatus];
					return n.a.createElement("div", {
						className: Object(l.a)(v.a.container, s)
					}, r.map(e => j.d[e] && e !== j.a.Achievements && n.a.createElement(P.a, {
						className: v.a.benefit,
						description: j.c[e](),
						iconUrl: `${g.a.assetPath}/img/powerups/${e}_v2.svg`,
						key: `cell_${e}`,
						onClick: () => {
							a(Object(w.e)(e))
						},
						title: j.d[e]()
					})))
				},
				W = s("./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less"),
				B = s.n(W);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function A({
				benefits: e,
				subreddit: t
			}) {
				const s = Object(r.d)();
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
					className: B.a.closeButton,
					onClick: () => s(Object(d.g)(p.a.ECON_POWERUPS_MARKETING))
				}, n.a.createElement(f.a, {
					className: B.a.closeIcon
				})), n.a.createElement("div", {
					className: B.a.container
				}, n.a.createElement("div", {
					className: B.a.main
				}, n.a.createElement(S.a, {
					title: R._("Powerup {r/community}", [R._param("r/community", t.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: R._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), n.a.createElement(H, {
					benefits: e,
					className: B.a.benefits
				}), n.a.createElement("h2", {
					className: B.a.howItWorksTitle
				}, R._("How it works", null, {
					hk: "1S8XOX"
				})), n.a.createElement("ul", {
					className: B.a.howItWorksList
				}, n.a.createElement("li", {
					className: B.a.howItWorksStep
				}, n.a.createElement("h3", {
					className: B.a.howItWorksSubtitle
				}, R._("Buy a monthly Powerup subscription", null, {
					hk: "1xgdW6"
				})), n.a.createElement("p", {
					className: B.a.howItWorksDesc
				}, R._("Or if you’re a Reddit Premium member, use your monthly Powerup", null, {
					hk: "1MD3Sh"
				}))), n.a.createElement("li", {
					className: B.a.howItWorksStep
				}, n.a.createElement("h3", {
					className: B.a.howItWorksSubtitle
				}, R._("Unlock perks for yourself", null, {
					hk: "3TEvpW"
				})), n.a.createElement("p", {
					className: B.a.howItWorksDesc
				}, R._("Your Powerup gives you instant access to all the perks + badge + leaderboard", null, {
					hk: "3q4unB"
				}))), n.a.createElement("li", {
					className: B.a.howItWorksStep
				}, n.a.createElement("h3", {
					className: B.a.howItWorksSubtitle
				}, R._("Help unlock perks for your community", null, {
					hk: "1BeLmx"
				}))))), n.a.createElement("div", {
					className: B.a.footer
				}, n.a.createElement(h.i, {
					className: B.a.footerButton,
					onClick: () => {
						Object(E.Bb)(p.a.ECON_POWERUPS_MARKETING, !0), s(Object(d.h)(p.a.ECON_POWERUPS_PURCHASE))
					}
				}, R._("Powerup This Community", null, {
					hk: "3gjy90"
				})))))
			}

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = Object(b.t)(), F = Object(o.c)({
				currentSubredditId: b.m,
				isRedesignEnabled: k.h,
				powerups: (e, t) => {
					const s = Object(b.m)(e, t);
					return s ? Object(N.i)(e, {
						subredditId: s
					}) : null
				},
				subreddit: (e, t) => {
					const s = Object(b.m)(e, t);
					return s ? Object(x.U)(e, {
						subredditId: s
					}) : null
				}
			}), Y = Object(r.b)(F);
			const G = Object(c.a)(D(Y((function(e) {
				var t;
				const {
					currentSubredditId: s,
					powerups: o,
					subreddit: c,
					isRedesignEnabled: b
				} = e, k = Object(r.d)(), N = Object(_.a)(), x = Object(a.useRef)(null), [g, P] = Object(a.useState)(!1), j = () => {
					if (!x.current) return;
					const e = Math.ceil(x.current.scrollTop) + x.current.clientHeight >= x.current.scrollHeight,
						t = x.current.clientHeight < x.current.scrollHeight;
					P(t && !e)
				};
				Object(a.useEffect)(() => {
					Object(u.a)()
				}, []), Object(a.useLayoutEffect)(() => {
					j()
				}, [x.current]);
				const O = () => k(Object(d.g)(p.a.ECON_POWERUPS_MARKETING)),
					v = () => {
						Object(E.Bb)(p.a.ECON_POWERUPS_MARKETING, !0), k(Object(d.h)(p.a.ECON_POWERUPS_PURCHASE))
					};
				if (!s || !c || !o) return O(), null;
				const {
					tier: C,
					tiersInfo: I
				} = o, y = null === (t = I[C] || I[C - 1]) || void 0 === t ? void 0 : t.benefits;
				return b ? n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
					className: B.a.closeButton,
					onClick: O
				}, n.a.createElement(f.a, {
					className: B.a.closeIcon
				})), n.a.createElement("div", {
					className: B.a.container
				}, n.a.createElement("div", {
					className: Object(l.a)(B.a.main),
					ref: x,
					onScroll: e => {
						j()
					}
				}, n.a.createElement(S.a, {
					title: U._("Powerup {r/community}", [U._param("r/community", c.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: U._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), n.a.createElement(M, {
					className: B.a.benefits
				}), n.a.createElement("span", {
					className: B.a.modDisclaimer
				}, U._("Mods may choose to opt out of some perks.", null, {
					hk: "3W2PR1"
				})), n.a.createElement("h2", {
					className: B.a.howItWorksTitle
				}, U._("How it works", null, {
					hk: "1S8XOX"
				})), n.a.createElement("ul", {
					className: B.a.howItWorksList
				}, n.a.createElement("li", {
					className: B.a.howItWorksStep
				}, n.a.createElement("h3", {
					className: B.a.howItWorksSubtitle
				}, U._("Buy a monthly Powerup subscription", null, {
					hk: "1xgdW6"
				})), n.a.createElement("p", {
					className: B.a.howItWorksDesc
				}, U._("Purchase a Powerup or apply your monthly Powerup included with paid Reddit Premium", null, {
					hk: "2rBQGS"
				}))), n.a.createElement("li", {
					className: B.a.howItWorksStep
				}, n.a.createElement("h3", {
					className: B.a.howItWorksSubtitle
				}, U._("Help unlock perks for your community", null, {
					hk: "4qBTJD"
				})), n.a.createElement(m.a, {
					className: B.a.joinHeroes,
					subredditId: s,
					onClick: e => {
						N(Object(w.c)("powerups_modal")), e ? k(Object(i.e)(c.id)) : v()
					}
				})), n.a.createElement("li", {
					className: B.a.howItWorksStep
				}, n.a.createElement("h3", {
					className: B.a.howItWorksSubtitle
				}, U._("Unlock perks for yourself", null, {
					hk: "4dQOvK"
				})), n.a.createElement("p", {
					className: B.a.howItWorksDesc
				}, U._("Get instant access to perks, a hero badge, and a spot on the heroes list", null, {
					hk: "3uxTLG"
				})))), n.a.createElement("div", {
					className: Object(l.a)(B.a.gradient, {
						[B.a.hidden]: !g
					})
				})), n.a.createElement("div", {
					className: B.a.footer
				}, n.a.createElement(h.q, {
					className: B.a.footerButton,
					onClick: v,
					priority: h.b.Primary
				}, U._("Powerup This Community", null, {
					hk: "3gjy90"
				}))))) : n.a.createElement(A, {
					benefits: y,
					subreddit: c
				})
			}))));
			t.default = e => n.a.createElement(G, T({}, e, {
				className: Object(l.a)(e.className, B.a.modal)
			}))
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return m
			}));
			var a = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				l = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				i = s.n(l);
			const d = Object(n.forwardRef)((function({
					className: e,
					progress: t
				}, s) {
					const a = 100 * t;
					return r.a.createElement("div", {
						className: Object(o.a)(i.a.barRow, e),
						ref: s
					}, r.a.createElement("div", {
						className: i.a.track
					}), r.a.createElement("div", {
						className: i.a.progress,
						style: {
							width: `${a}%`
						}
					}, r.a.createElement(c.a, {
						className: Object(o.a)(i.a.icon, {
							[i.a.empty]: 0 === t,
							[i.a.full]: t >= 1
						})
					})))
				})),
				m = ({
					className: e,
					progress: t
				}) => {
					const [s, o] = Object(n.useState)(!1), c = s ? t : 0;
					return r.a.createElement(a.a, {
						onChange: e => {
							s || e.intersectionRatio < .75 || o(!0)
						},
						threshold: .75
					}, r.a.createElement(d, {
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
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), n.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), n.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), n.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.8af73f871c1bd437442d.js.map