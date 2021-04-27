// https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.b37cea532e1e1a6f9b00.js
// Retrieved at 4/27/2021, 11:10:05 AM by Reddit Dataminer v1.0.0
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
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				i = s("./src/reddit/components/UserIcon/index.tsx"),
				l = s("./src/reddit/selectors/gold/powerups.ts"),
				d = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				m = s.n(u);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = ({
				className: e,
				subredditId: t
			}) => {
				const s = Object(n.e)(e => Object(l.j)(e, {
						subredditId: t
					})),
					o = Object(n.e)(e => Object(d.T)(e, {
						subredditId: t
					})),
					u = Object(n.e)(e => Object(l.l)(e, {
						subredditId: t
					}));
				if (!s) return null;
				const {
					tier: b,
					count: w,
					tiersInfo: h,
					supportersCount: _
				} = s, E = h[1].powerupsCost, f = b >= 2, k = (null == u ? void 0 : u.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], x = Math.min(w, E) / E, N = E - w;
				return r.a.createElement("div", {
					className: Object(a.a)(m.a.container, e)
				}, r.a.createElement("div", {
					className: m.a.heroes
				}, !!k.length && r.a.createElement("div", {
					className: Object(a.a)(m.a.heroesAvatarContainer, {
						[m.a.twoAvatarsContainer]: k.length > 1
					})
				}, k.map(e => {
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
				}, _ ? p._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [p._plural(_, "subreddit supporters")], {
					hk: "2UisaO"
				}) : p._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))), r.a.createElement("p", {
					className: m.a.title
				}, f ? p._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : p._("{subredditName} needs {powerups needed} more Powerups to unlock perks for the entire community", [p._param("subredditName", o.displayText), p._param("powerups needed", N)], {
					hk: "4h33rf"
				})), r.a.createElement(c.a, {
					className: m.a.progressBar,
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
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less": function(e, t, s) {
			e.exports = {
				image: "_2UM9VBeA7xU3ro_DBfudN2"
			}
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				c = s.n(a);
			const i = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement("picture", null, n.a.createElement("source", {
				srcSet: `${o.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), n.a.createElement("source", {
				srcSet: `${o.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), n.a.createElement("img", {
				className: c.a.image,
				src: `${o.a.assetPath}/img/powerups/powerup.png`
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
			var o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				c = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				i = s.n(c);
			t.a = e => n.a.createElement("header", {
				className: Object(o.a)(i.a.container, e.className)
			}, n.a.createElement(a.a, {
				className: i.a.imageContainer
			}), n.a.createElement("div", null, n.a.createElement("h2", {
				className: i.a.title
			}, e.title), n.a.createElement("h3", {
				className: i.a.subtitle
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
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				u = s("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"),
				m = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				w = s("./src/reddit/helpers/localStorage/index.ts"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				_ = s("./src/reddit/selectors/experiments/econ/powerupsMarketingRedesign.ts"),
				E = s("./src/reddit/selectors/gold/powerups.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/config.ts"),
				x = s("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				N = s("./src/reddit/helpers/trackers/powerups.ts"),
				P = s("./src/reddit/hooks/useTracking.ts"),
				j = s("./src/reddit/models/Gold/Powerups/index.ts"),
				g = s("./src/reddit/constants/experiments.ts"),
				O = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const v = Object(O.a)(g.Ab);
			var I = s("./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less"),
				C = s.n(I);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = [j.a.CommentsWithGifs, j.a.CommentsWithEmoji, j.a.Achievements, j.a.HeroStatus, j.a.HdVideo], S = e => {
				let t = e ? M : M.filter(e => e !== j.a.Achievements);
				return t.length % 2 == 1 && (t = [...t, j.a.More]), t
			};
			var H = function(e) {
					const {
						className: t
					} = e, s = Object(P.a)(), o = Object(n.e)(v), a = S(o);
					return r.a.createElement("div", {
						className: Object(i.a)(C.a.container, t)
					}, a.map(e => j.d[e] && r.a.createElement(x.a, {
						className: C.a.benefit,
						description: j.c[e](),
						iconUrl: `${k.a.assetPath}/img/powerups/${e}_v3.png`,
						key: `cell_${e}`,
						onClick: () => {
							s(Object(N.d)())
						},
						title: j.d[e]()
					})))
				},
				L = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx");
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var R = function(e) {
					const {
						benefits: t,
						className: s
					} = e, o = Object(P.a)(), n = [...t, j.a.HeroStatus];
					return r.a.createElement("div", {
						className: Object(i.a)(C.a.container, s)
					}, n.map(e => j.d[e] && e !== j.a.Achievements && r.a.createElement(x.a, {
						className: C.a.benefit,
						description: j.c[e](),
						iconUrl: `${k.a.assetPath}/img/powerups/${e}_v2.svg`,
						key: `cell_${e}`,
						onClick: () => {
							o(Object(N.d)())
						},
						title: j.d[e]()
					})))
				},
				B = s("./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less"),
				T = s.n(B);
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function F({
				benefits: e,
				subreddit: t
			}) {
				const s = Object(n.d)();
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: T.a.closeButton,
					onClick: () => s(Object(l.g)(m.a.ECON_POWERUPS_MARKETING))
				}, r.a.createElement(h.a, {
					className: T.a.closeIcon
				})), r.a.createElement("div", {
					className: T.a.container
				}, r.a.createElement("div", {
					className: T.a.main
				}, r.a.createElement(L.a, {
					title: A._("Powerup {r/community}", [A._param("r/community", t.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: A._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), r.a.createElement(R, {
					benefits: e,
					className: T.a.benefits
				}), r.a.createElement("h2", {
					className: T.a.howItWorksTitle
				}, A._("How it works", null, {
					hk: "1S8XOX"
				})), r.a.createElement("ul", {
					className: T.a.howItWorksList
				}, r.a.createElement("li", {
					className: T.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: T.a.howItWorksSubtitle
				}, A._("Buy a monthly Powerup subscription", null, {
					hk: "1xgdW6"
				})), r.a.createElement("p", {
					className: T.a.howItWorksDesc
				}, A._("Or if you’re a Reddit Premium member, use your monthly Powerup", null, {
					hk: "1MD3Sh"
				}))), r.a.createElement("li", {
					className: T.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: T.a.howItWorksSubtitle
				}, A._("Unlock perks for yourself", null, {
					hk: "3TEvpW"
				})), r.a.createElement("p", {
					className: T.a.howItWorksDesc
				}, A._("Your Powerup gives you instant access to all the perks + badge + leaderboard", null, {
					hk: "3q4unB"
				}))), r.a.createElement("li", {
					className: T.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: T.a.howItWorksSubtitle
				}, A._("Help unlock perks for your community", null, {
					hk: "1BeLmx"
				}))))), r.a.createElement("div", {
					className: T.a.footer
				}, r.a.createElement(b.i, {
					className: T.a.footerButton,
					onClick: () => {
						Object(w.ub)(m.a.ECON_POWERUPS_MARKETING, !0), s(Object(l.h)(m.a.ECON_POWERUPS_PURCHASE))
					}
				}, A._("Powerup This Community", null, {
					hk: "3gjy90"
				})))))
			}

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Y = Object(p.t)(), G = Object(a.c)({
				currentSubredditId: p.m,
				isRedesignEnabled: _.a,
				powerups: (e, t) => {
					const s = Object(p.m)(e, t);
					return s ? Object(E.j)(e, {
						subredditId: s
					}) : null
				},
				subreddit: (e, t) => {
					const s = Object(p.m)(e, t);
					return s ? Object(f.T)(e, {
						subredditId: s
					}) : null
				}
			}), J = Object(n.b)(G);
			const K = Object(c.a)(Y(J((function(e) {
				var t;
				const {
					currentSubredditId: s,
					powerups: a,
					subreddit: c,
					isRedesignEnabled: p
				} = e, _ = Object(n.d)(), E = Object(o.useRef)(null), [f, k] = Object(o.useState)(!1), x = () => {
					if (!E.current) return;
					const e = Math.ceil(E.current.scrollTop) + E.current.clientHeight >= E.current.scrollHeight,
						t = E.current.clientHeight < E.current.scrollHeight;
					k(t && !e)
				};
				Object(o.useEffect)(() => {
					Object(u.a)()
				}, []), Object(o.useLayoutEffect)(() => {
					x()
				}, [E.current]);
				const N = () => _(Object(l.g)(m.a.ECON_POWERUPS_MARKETING));
				if (!s || !c || !a) return N(), null;
				const {
					tier: P,
					tiersInfo: j
				} = a, g = null === (t = j[P] || j[P - 1]) || void 0 === t ? void 0 : t.benefits;
				return p ? r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: T.a.closeButton,
					onClick: N
				}, r.a.createElement(h.a, {
					className: T.a.closeIcon
				})), r.a.createElement("div", {
					className: T.a.container
				}, r.a.createElement("div", {
					className: Object(i.a)(T.a.main),
					ref: E,
					onScroll: e => {
						x()
					}
				}, r.a.createElement(L.a, {
					title: D._("Powerup {r/community}", [D._param("r/community", c.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: D._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), r.a.createElement(H, {
					className: T.a.benefits
				}), r.a.createElement("span", {
					className: T.a.modDisclaimer
				}, D._("Mods may choose to opt out of some perks.", null, {
					hk: "3W2PR1"
				})), r.a.createElement("h2", {
					className: T.a.howItWorksTitle
				}, D._("How it works", null, {
					hk: "1S8XOX"
				})), r.a.createElement("ul", {
					className: T.a.howItWorksList
				}, r.a.createElement("li", {
					className: T.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: T.a.howItWorksSubtitle
				}, D._("Buy a monthly Powerup subscription", null, {
					hk: "1xgdW6"
				})), r.a.createElement("p", {
					className: T.a.howItWorksDesc
				}, D._("Purchase a Powerup or apply your monthly Powerup included with paid Reddit Premium", null, {
					hk: "2rBQGS"
				}))), r.a.createElement("li", {
					className: T.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: T.a.howItWorksSubtitle
				}, D._("Help unlock perks for your community", null, {
					hk: "4qBTJD"
				})), r.a.createElement(d.a, {
					className: T.a.joinHeroes,
					subredditId: s
				})), r.a.createElement("li", {
					className: T.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: T.a.howItWorksSubtitle
				}, D._("Unlock perks for yourself", null, {
					hk: "4dQOvK"
				})), r.a.createElement("p", {
					className: T.a.howItWorksDesc
				}, D._("Get instant access to perks, a hero badge, and a spot on the heroes list", null, {
					hk: "3uxTLG"
				})))), r.a.createElement("div", {
					className: Object(i.a)(T.a.gradient, {
						[T.a.hidden]: !f
					})
				})), r.a.createElement("div", {
					className: T.a.footer
				}, r.a.createElement(b.q, {
					className: T.a.footerButton,
					onClick: () => {
						Object(w.ub)(m.a.ECON_POWERUPS_MARKETING, !0), _(Object(l.h)(m.a.ECON_POWERUPS_PURCHASE))
					},
					priority: b.b.Primary
				}, D._("Powerup This Community", null, {
					hk: "3gjy90"
				}))))) : r.a.createElement(F, {
					benefits: g,
					subreddit: c
				})
			}))));
			t.default = e => r.a.createElement(K, U({}, e, {
				className: Object(i.a)(e.className, T.a.modal)
			}))
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				c = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				i = s.n(c);
			const l = ({
				className: e,
				progress: t
			}) => r.a.createElement("div", {
				className: Object(n.a)(i.a.barRow, e)
			}, r.a.createElement("div", {
				className: i.a.track
			}), r.a.createElement("div", {
				className: i.a.progress,
				style: {
					width: `${100*t}%`
				}
			}, r.a.createElement(a.a, {
				className: Object(n.a)(i.a.icon, {
					[i.a.empty]: 0 === t,
					[i.a.full]: t >= 1
				})
			})))
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
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, s) {
			"use strict";
			s.d(t, "p", (function() {
				return a
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "k", (function() {
				return i
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "q", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "i", (function() {
				return b
			})), s.d(t, "n", (function() {
				return w
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "o", (function() {
				return f
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "l", (function() {
				return N
			})), s.d(t, "b", (function() {
				return P
			}));
			var o = s("./src/reddit/helpers/correlationIdTracker.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const n = (e, t, s) => ({
					...r.defaults(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !1),
					profile: r.profile(e),
					subreddit: r.subreddit(e),
					powerups: {
						...r.subredditPowerups(e),
						freeCount: t,
						paidCount: s
					}
				}),
				a = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...n(t),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta",
					...n(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				i = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersup_become_hero",
					...n(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				l = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersups_see_all_heroes",
					...n(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				d = e => (t, s) => o => ({
					source: e,
					action: "click",
					noun: "powerup_supporter",
					...n(o),
					profile: {
						id: t,
						name: s,
						type: "default"
					}
				}),
				u = d("postlist_supporters_cta"),
				m = d("comm_heroes_modal"),
				p = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...n(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				b = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...n(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				w = () => e => ({
					source: "powerups",
					action: "click",
					noun: "premium",
					...n(e)
				}),
				h = (e, t) => s => ({
					source: "powerups_modal",
					action: "click",
					noun: "benefit",
					...n(s, e, t)
				}),
				_ = (e, t) => s => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...n(s, e, t)
				}),
				E = (e, t) => s => ({
					source: "global",
					action: "view",
					noun: "screen",
					...n(s, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				f = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...n(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				k = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...n(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				x = e => t => ({
					source: "powerups",
					action: "click",
					noun: "add_custom_emojis",
					...n(t),
					powerups: {
						...r.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				N = e => t => ({
					source: "powerups",
					action: "save",
					noun: "custom_emojis",
					...n(t),
					powerups: {
						...r.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				P = (e = 1) => t => ({
					source: "powerups",
					action: "delete",
					noun: "custom_emojis",
					...n(t),
					powerups: {
						...r.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				})
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
				id: e.id
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
		},
		"./src/reddit/selectors/experiments/econ/powerupsMarketingRedesign.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const n = Object(r.a)(o.Bb)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.b37cea532e1e1a6f9b00.js.map