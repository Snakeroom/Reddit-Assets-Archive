// https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.cf3bcfad1625297aaa64.js
// Retrieved at 10/6/2021, 4:50:05 PM by Reddit Dataminer v1.0.0
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
			}) => o.a.createElement("div", {
				className: Object(r.a)(e, i.a.container),
				onClick: n
			}, l && o.a.createElement(a.a, {
				className: i.a.new
			}), o.a.createElement("div", {
				className: i.a.icon,
				style: {
					backgroundImage: `url('${s}')`
				}
			}), c && o.a.createElement("h3", {
				className: i.a.title
			}, c), t && o.a.createElement("p", {
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				i = s("./src/reddit/components/UserIcon/index.tsx"),
				l = s("./src/reddit/selectors/experiments/econ/index.ts"),
				d = s("./src/reddit/selectors/gold/powerups/index.ts"),
				m = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = ({
				className: e,
				subredditId: t,
				onClick: s
			}) => {
				const n = Object(r.e)(e => Object(d.k)(e, {
						subredditId: t
					})),
					m = Object(r.e)(e => Object(d.m)(e, {
						subredditId: t
					})),
					b = Object(r.e)(l.i);
				if (!n) return null;
				const {
					tier: h,
					count: w,
					tiersInfo: E,
					supportersCount: _
				} = n, x = E[1].powerupsCost, f = h >= 2, k = (null == m ? void 0 : m.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], g = Math.min(w, x) / x, N = x - w;
				return o.a.createElement("div", {
					className: Object(a.a)(u.a.container, e, {
						[u.a.containerClickable]: !!s
					}),
					"data-testid": "join-heroes",
					onClick: () => null == s ? void 0 : s(w)
				}, o.a.createElement("div", {
					className: u.a.heroes
				}, !!k.length && o.a.createElement("div", {
					className: Object(a.a)(u.a.heroesAvatarContainer, {
						[u.a.twoAvatarsContainer]: k.length > 1
					})
				}, k.map(e => {
					var t, s;
					return o.a.createElement("div", {
						className: u.a.heroesAvatar,
						key: e.supporterInfo.id
					}, o.a.createElement(i.a, {
						className: u.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (s = e.supporterInfo.profile) || void 0 === s ? void 0 : s.isNsfw)
					}))
				})), o.a.createElement("div", {
					className: u.a.heroesTitle
				}, (() => b ? _ ? p._({
					"*": "Join {subreddit supporters} supporters",
					_1: "Join 1 supporter"
				}, [p._plural(_, "subreddit supporters")], {
					hk: "20DKnU"
				}) : p._("Be the first supporter!", null, {
					hk: "3sBXnW"
				}) : _ ? p._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [p._plural(_, "subreddit supporters")], {
					hk: "2UisaO"
				}) : p._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), o.a.createElement("p", {
					className: u.a.title
				}, f ? p._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : p._({
					"*": "{powerups needed} more Powerups will unlock perks for the community",
					_1: "{powerups needed} more Powerup will unlock perks for the community"
				}, [p._param("powerups needed", N), p._plural(N)], {
					hk: "2aHf4k"
				})), o.a.createElement(c.a, {
					className: u.a.progressBar,
					progress: g
				}))
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, s) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e,
				onClick: t
			}) => r.a.createElement("button", {
				onClick: t,
				className: Object(n.a)(e, i.a.closeButton),
				"aria-label": l._("Close", null, {
					hk: "3Qarlp"
				})
			}, r.a.createElement(a.b, {
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				c = s.n(a);
			const {
				fbt: i
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e
			}) => o.a.createElement("span", {
				className: Object(r.a)(c.a.new, e)
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				c = s.n(a);
			const i = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement("picture", null, r.a.createElement("source", {
				srcSet: `${n.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), r.a.createElement("source", {
				srcSet: `${n.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), r.a.createElement("img", {
				className: c.a.image,
				src: `${n.a.assetPath}/img/powerups/powerup.png`,
				alt: "Rotating Powerups bolt"
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				c = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				i = s.n(c);
			t.a = e => r.a.createElement("header", {
				className: Object(n.a)(i.a.container, e.className)
			}, r.a.createElement(a.a, {
				className: i.a.imageContainer
			}), r.a.createElement("div", null, r.a.createElement("h2", {
				className: i.a.title
			}, e.title), r.a.createElement("h3", {
				className: i.a.subtitle
			}, e.subtitle)))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less": function(e, t, s) {
			e.exports = {
				modal: "_3niK6SoqYWVz3C_LHPXMDD",
				container: "_3fbFTODVaP-23SwM_RYHWW",
				main: "_1PP4a1vxBKAZclzVmYW7SH",
				gradient: "_2Bq8PY3y9RL7e9UlI8wEtn",
				visible: "_1Pb0dx1erhwXfa-5ouIBhb",
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/gold/powerups.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				u = s("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				p = s("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"),
				b = s("./src/reddit/constants/modals.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/helpers/localStorage/index.ts"),
				_ = s("./src/reddit/helpers/trackers/powerups.ts"),
				x = s("./src/reddit/hooks/useScrollGradient.ts"),
				f = s("./src/reddit/hooks/useTracking.ts"),
				k = s("./src/reddit/selectors/experiments/econ/index.ts"),
				g = s("./src/reddit/selectors/gold/powerups/index.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx"),
				C = s("./src/config.ts"),
				O = s("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				v = s("./src/reddit/models/Gold/Powerups/index.ts"),
				M = s("./src/reddit/selectors/experiments/econ/powerupsAward.ts");
			const y = [v.a.CommentRecognition, v.a.PowerupsAward, v.a.CommunityGear, v.a.CommentsWithGifs, v.a.CommentsWithEmoji, v.a.Achievements, v.a.HeroStatus, v.a.HdVideo],
				I = Object(a.a)([M.b, k.j, k.k], (e, t, s) => {
					let n = y;
					return e || (n = n.filter(e => e !== v.a.PowerupsAward)), t || (n = n.filter(e => e !== v.a.CommentRecognition)), s || (n = n.filter(e => e !== v.a.CommunityGear)), n
				});
			var S = s("./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less"),
				L = s.n(S);
			const {
				fbt: B
			} = s("./node_modules/fbt/lib/FbtPublic.js"), H = e => e.length % 2 == 1 ? [...e, v.a.More] : e;
			var R = function(e) {
					const {
						className: t
					} = e, s = Object(f.a)(), n = Object(r.e)(I), a = Object(r.e)(k.i), c = H(n);
					return o.a.createElement("div", {
						className: Object(i.a)(L.a.container, t)
					}, c.map(e => v.c[e]().title && o.a.createElement(O.a, {
						className: L.a.benefit,
						description: v.c[e](a).description,
						iconUrl: `${C.a.assetPath}/img/powerups/${e}_v3.png`,
						key: `cell_${e}`,
						onClick: () => {
							s(Object(_.g)(e))
						},
						title: v.c[e](a).title,
						isNew: v.c[e](a).isNew
					})))
				},
				A = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				W = s("./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less"),
				T = s.n(W);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), G = Object(h.u)(), U = Object(a.c)({
				currentSubredditId: h.n,
				powerups: (e, t) => {
					const s = Object(h.n)(e, t);
					return s ? Object(g.k)(e, {
						subredditId: s
					}) : null
				},
				subreddit: (e, t) => {
					const s = Object(h.n)(e, t);
					return s ? Object(N.Q)(e, {
						subredditId: s
					}) : null
				}
			}), Y = Object(r.b)(U);
			const J = Object(c.a)(G(Y((function(e) {
				const {
					currentSubredditId: t,
					powerups: s,
					subreddit: a
				} = e, c = Object(r.d)(), h = Object(f.a)(), g = Object(r.e)(k.i), N = Object(r.e)(e => !Object(j.s)(e) && Object(k.m)(e)), {
					container: C,
					isScrollGradientVisible: O,
					calculateGradientVisibility: v
				} = Object(x.a)(!0);
				Object(n.useEffect)(() => {
					N ? Object(P.a)() : Object(p.a)()
				}, [N]), Object(n.useLayoutEffect)(() => {
					v()
				});
				const M = () => c(Object(d.g)(b.a.ECON_POWERUPS_MARKETING)),
					y = () => {
						Object(E.Hb)(b.a.ECON_POWERUPS_MARKETING, !0), c(N ? Object(l.g)(t) : Object(d.h)(b.a.ECON_POWERUPS_PURCHASE))
					};
				if (!t || !a || !s) return M(), null;
				const I = g ? F._("Support the whole community", null, {
					hk: "oOdGv"
				}) : F._("Unlock perks for the whole community", null, {
					hk: "faCTq"
				});
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: T.a.container
				}, o.a.createElement("div", {
					className: Object(i.a)(T.a.main),
					ref: C,
					onScroll: v
				}, o.a.createElement(u.a, {
					onClick: M
				}), o.a.createElement(A.a, {
					title: F._("Powerup {r/community}", [F._param("r/community", a.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: I
				}), o.a.createElement(R, {
					className: T.a.benefits
				}), o.a.createElement("span", {
					className: T.a.modDisclaimer
				}, F._("Mods may choose to opt out of some perks.", null, {
					hk: "3W2PR1"
				})), o.a.createElement("h2", {
					className: T.a.howItWorksTitle
				}, F._("How it works", null, {
					hk: "1S8XOX"
				})), o.a.createElement("ul", {
					className: T.a.howItWorksList
				}, o.a.createElement("li", {
					className: T.a.howItWorksStep
				}, o.a.createElement("h3", {
					className: T.a.howItWorksSubtitle
				}, F._("Buy a monthly Powerup subscription", null, {
					hk: "1xgdW6"
				})), o.a.createElement("p", {
					className: T.a.howItWorksDesc
				}, F._("Purchase a Powerup or apply your monthly Powerup included with paid Reddit Premium", null, {
					hk: "2rBQGS"
				}))), o.a.createElement("li", {
					className: T.a.howItWorksStep
				}, o.a.createElement("h3", {
					className: T.a.howItWorksSubtitle
				}, F._("Help unlock perks for your community", null, {
					hk: "4qBTJD"
				})), o.a.createElement(m.a, {
					className: T.a.joinHeroes,
					subredditId: t,
					onClick: e => {
						h(Object(_.e)("powerups_modal")), e ? c(Object(l.h)(a.id)) : y()
					}
				})), o.a.createElement("li", {
					className: T.a.howItWorksStep
				}, o.a.createElement("h3", {
					className: T.a.howItWorksSubtitle
				}, F._("Unlock perks for yourself", null, {
					hk: "4dQOvK"
				})), o.a.createElement("p", {
					className: T.a.howItWorksDesc
				}, F._("Get instant access to perks, a hero badge, and a spot on the heroes list", null, {
					hk: "3uxTLG"
				}))))), o.a.createElement("div", {
					className: T.a.footer
				}, o.a.createElement(w.s, {
					className: T.a.footerButton,
					onClick: y,
					priority: w.b.Primary
				}, F._("Powerup This Community", null, {
					hk: "3gjy90"
				})), o.a.createElement("div", {
					className: Object(i.a)(T.a.gradient, {
						[T.a.visible]: O
					})
				}))))
			}))));
			t.default = e => o.a.createElement(J, D({}, e, {
				className: Object(i.a)(e.className, T.a.modal)
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				i = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				l = s.n(i);
			const d = Object(o.forwardRef)((function({
					className: e,
					progress: t
				}, s) {
					const n = 100 * t;
					return r.a.createElement("div", {
						className: Object(a.a)(l.a.barRow, e),
						ref: s
					}, r.a.createElement("div", {
						className: l.a.track
					}), r.a.createElement("div", {
						className: l.a.progress,
						style: {
							width: `${n}%`
						}
					}, r.a.createElement(c.a, {
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
					const [s, a] = Object(o.useState)(!1), c = s ? t : 0;
					return r.a.createElement(n.a, {
						onChange: e => {
							s || e.intersectionRatio < .75 || a(!0)
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
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");

			function o(e) {
				const [t, s] = Object(n.useState)(e), o = Object(n.useRef)(null);
				return {
					container: o,
					isScrollGradientVisible: t,
					calculateGradientVisibility: () => {
						const e = o.current;
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
				o = s.n(n);
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.cf3bcfad1625297aaa64.js.map