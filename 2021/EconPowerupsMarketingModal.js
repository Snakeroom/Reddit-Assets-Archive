// https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.452fa4a0544ef0a3eef2.js
// Retrieved at 7/21/2021, 3:10:05 PM by Reddit Dataminer v1.0.0
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
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
				onClick: n,
				title: c,
				isNew: l
			}) => r.a.createElement("div", {
				className: Object(o.a)(e, i.a.container),
				onClick: n
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
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				i = s("./src/reddit/components/UserIcon/index.tsx"),
				l = s("./src/reddit/selectors/gold/powerups/index.ts"),
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
				const n = Object(o.e)(e => Object(l.i)(e, {
						subredditId: t
					})),
					m = Object(o.e)(e => Object(d.S)(e, {
						subredditId: t
					})),
					b = Object(o.e)(e => Object(l.k)(e, {
						subredditId: t
					}));
				if (!n) return null;
				const {
					tier: h,
					count: w,
					tiersInfo: E,
					supportersCount: _
				} = n, x = E[1].powerupsCost, f = h >= 2, g = (null == b ? void 0 : b.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], k = Math.min(w, x) / x, N = x - w;
				return r.a.createElement("div", {
					className: Object(a.a)(u.a.container, e, {
						[u.a.containerClickable]: !!s
					}),
					"data-testid": "join-heroes",
					onClick: () => null == s ? void 0 : s(w)
				}, r.a.createElement("div", {
					className: u.a.heroes
				}, !!g.length && r.a.createElement("div", {
					className: Object(a.a)(u.a.heroesAvatarContainer, {
						[u.a.twoAvatarsContainer]: g.length > 1
					})
				}, g.map(e => {
					var t, s;
					return r.a.createElement("div", {
						className: u.a.heroesAvatar,
						key: e.supporterInfo.id
					}, r.a.createElement(i.a, {
						className: u.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (s = e.supporterInfo.profile) || void 0 === s ? void 0 : s.isNsfw)
					}))
				})), r.a.createElement("div", {
					className: u.a.heroesTitle
				}, _ ? p._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [p._plural(_, "subreddit supporters")], {
					hk: "2UisaO"
				}) : p._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))), r.a.createElement("p", {
					className: u.a.title
				}, f ? p._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : p._("{subredditName} needs {powerups needed} more Powerups to unlock perks for the entire community", [p._param("subredditName", m.displayText), p._param("powerups needed", N)], {
					hk: "4h33rf"
				})), r.a.createElement(c.a, {
					className: u.a.progressBar,
					progress: k
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
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				c = s.n(a);
			const i = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement("picture", null, o.a.createElement("source", {
				srcSet: `${n.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), o.a.createElement("source", {
				srcSet: `${n.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), o.a.createElement("img", {
				className: c.a.image,
				src: `${n.a.assetPath}/img/powerups/powerup.png`
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
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				c = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				i = s.n(c);
			t.a = e => o.a.createElement("header", {
				className: Object(n.a)(i.a.container, e.className)
			}, o.a.createElement(a.a, {
				className: i.a.imageContainer
			}), o.a.createElement("div", null, o.a.createElement("h2", {
				className: i.a.title
			}, e.title), o.a.createElement("h3", {
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/gold/powerups.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				u = s("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"),
				p = s("./src/reddit/constants/modals.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				w = s("./src/reddit/helpers/localStorage/index.ts"),
				E = s("./src/reddit/helpers/trackers/powerups.ts"),
				_ = s("./src/reddit/hooks/useTracking.ts"),
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/reddit/selectors/gold/powerups/index.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/config.ts"),
				N = s("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				P = s("./src/reddit/models/Gold/Powerups/index.ts"),
				j = s("./src/reddit/selectors/experiments/econ/index.ts"),
				O = s("./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less"),
				C = s.n(O);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = [P.a.CommentsWithGifs, P.a.CommentsWithEmoji, P.a.Achievements, P.a.HeroStatus, P.a.HdVideo], I = e => {
				let t = e ? M : M.filter(e => e !== P.a.Achievements);
				return t.length % 2 == 1 && (t = [...t, P.a.More]), t
			};
			var y = function(e) {
					const {
						className: t
					} = e, s = Object(_.a)(), n = Object(o.e)(j.g), a = I(n);
					return r.a.createElement("div", {
						className: Object(i.a)(C.a.container, t)
					}, a.map(e => P.d[e] && r.a.createElement(N.a, {
						className: C.a.benefit,
						description: P.c[e](),
						iconUrl: `${k.a.assetPath}/img/powerups/${e}_v3.png`,
						key: `cell_${e}`,
						onClick: () => {
							s(Object(E.e)(e))
						},
						title: P.d[e]()
					})))
				},
				L = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				S = s("./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less"),
				H = s.n(S);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = Object(b.t)(), T = Object(a.c)({
				currentSubredditId: b.m,
				powerups: (e, t) => {
					const s = Object(b.m)(e, t);
					return s ? Object(f.i)(e, {
						subredditId: s
					}) : null
				},
				subreddit: (e, t) => {
					const s = Object(b.m)(e, t);
					return s ? Object(g.S)(e, {
						subredditId: s
					}) : null
				}
			}), W = Object(o.b)(T);
			const D = Object(c.a)(R(W((function(e) {
				const {
					currentSubredditId: t,
					powerups: s,
					subreddit: a
				} = e, c = Object(o.d)(), b = Object(_.a)(), f = Object(n.useRef)(null), [g, k] = Object(n.useState)(!1), N = () => {
					if (!f.current) return;
					const e = Math.ceil(f.current.scrollTop) + f.current.clientHeight >= f.current.scrollHeight,
						t = f.current.clientHeight < f.current.scrollHeight;
					k(t && !e)
				};
				Object(n.useEffect)(() => {
					Object(u.a)()
				}, []), Object(n.useLayoutEffect)(() => {
					N()
				});
				const P = () => c(Object(d.g)(p.a.ECON_POWERUPS_MARKETING)),
					j = () => {
						Object(w.Bb)(p.a.ECON_POWERUPS_MARKETING, !0), c(Object(d.h)(p.a.ECON_POWERUPS_PURCHASE))
					};
				return t && a && s ? r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: H.a.closeButton,
					onClick: P
				}, r.a.createElement(x.a, {
					className: H.a.closeIcon
				})), r.a.createElement("div", {
					className: H.a.container
				}, r.a.createElement("div", {
					className: Object(i.a)(H.a.main),
					ref: f,
					onScroll: e => {
						N()
					}
				}, r.a.createElement(L.a, {
					title: B._("Powerup {r/community}", [B._param("r/community", a.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: B._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), r.a.createElement(y, {
					className: H.a.benefits
				}), r.a.createElement("span", {
					className: H.a.modDisclaimer
				}, B._("Mods may choose to opt out of some perks.", null, {
					hk: "3W2PR1"
				})), r.a.createElement("h2", {
					className: H.a.howItWorksTitle
				}, B._("How it works", null, {
					hk: "1S8XOX"
				})), r.a.createElement("ul", {
					className: H.a.howItWorksList
				}, r.a.createElement("li", {
					className: H.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: H.a.howItWorksSubtitle
				}, B._("Buy a monthly Powerup subscription", null, {
					hk: "1xgdW6"
				})), r.a.createElement("p", {
					className: H.a.howItWorksDesc
				}, B._("Purchase a Powerup or apply your monthly Powerup included with paid Reddit Premium", null, {
					hk: "2rBQGS"
				}))), r.a.createElement("li", {
					className: H.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: H.a.howItWorksSubtitle
				}, B._("Help unlock perks for your community", null, {
					hk: "4qBTJD"
				})), r.a.createElement(m.a, {
					className: H.a.joinHeroes,
					subredditId: t,
					onClick: e => {
						b(Object(E.c)("powerups_modal")), e ? c(Object(l.g)(a.id)) : j()
					}
				})), r.a.createElement("li", {
					className: H.a.howItWorksStep
				}, r.a.createElement("h3", {
					className: H.a.howItWorksSubtitle
				}, B._("Unlock perks for yourself", null, {
					hk: "4dQOvK"
				})), r.a.createElement("p", {
					className: H.a.howItWorksDesc
				}, B._("Get instant access to perks, a hero badge, and a spot on the heroes list", null, {
					hk: "3uxTLG"
				})))), r.a.createElement("div", {
					className: Object(i.a)(H.a.gradient, {
						[H.a.hidden]: !g
					})
				})), r.a.createElement("div", {
					className: H.a.footer
				}, r.a.createElement(h.q, {
					className: H.a.footerButton,
					onClick: j,
					priority: h.b.Primary
				}, B._("Powerup This Community", null, {
					hk: "3gjy90"
				}))))) : (P(), null)
			}))));
			t.default = e => r.a.createElement(D, A({}, e, {
				className: Object(i.a)(e.className, H.a.modal)
			}))
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.452fa4a0544ef0a3eef2.js.map