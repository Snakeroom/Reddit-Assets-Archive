// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index.ae2a9d65f57a6eb30ef3.js
// Retrieved at 6/13/2022, 2:20:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PowerupsInFeedUnit-index"], {
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				d = s("./src/reddit/components/UserIcon/index.tsx"),
				i = s("./src/reddit/selectors/gold/powerups/index.ts"),
				l = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				u = s.n(l);
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let {
					className: t,
					subredditId: s,
					onClick: r
				} = e;
				const l = Object(o.e)(e => Object(i.j)(e, {
						subredditId: s
					})),
					p = Object(o.e)(e => Object(i.l)(e, {
						subredditId: s
					}));
				if (!l) return null;
				const {
					tier: b,
					count: E,
					tiersInfo: _,
					supportersCount: O
				} = l, I = _[1].powerupsCost, N = b >= 2, P = (null == p ? void 0 : p.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], U = Math.min(E, I) / I, w = I - E;
				return n.a.createElement("div", {
					className: Object(a.a)(u.a.container, t, {
						[u.a.containerClickable]: !!r
					}),
					"data-testid": "join-heroes",
					onClick: () => null == r ? void 0 : r(E)
				}, n.a.createElement("div", {
					className: u.a.heroes
				}, !!P.length && n.a.createElement("div", {
					className: Object(a.a)(u.a.heroesAvatarContainer, {
						[u.a.twoAvatarsContainer]: P.length > 1
					})
				}, P.map(e => {
					var t, s;
					return n.a.createElement("div", {
						className: u.a.heroesAvatar,
						key: e.supporterInfo.id
					}, n.a.createElement(d.a, {
						className: u.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (s = e.supporterInfo.profile) || void 0 === s ? void 0 : s.isNsfw)
					}))
				})), n.a.createElement("div", {
					className: u.a.heroesTitle
				}, (() => O ? m._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [m._plural(O, "subreddit supporters")], {
					hk: "2UisaO"
				}) : m._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), n.a.createElement("p", {
					className: u.a.title
				}, N ? m._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : m._({
					"*": "{powerups needed} more Powerups will unlock perks for the community",
					_1: "{powerups needed} more Powerup will unlock perks for the community"
				}, [m._param("powerups needed", w), m._plural(w)], {
					hk: "2aHf4k"
				})), n.a.createElement(c.a, {
					className: u.a.progressBar,
					progress: U
				}))
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/ApplyFromPremiumUnit.m.less": function(e, t, s) {
			e.exports = {
				powerupsIcon: "_2uNsATPrzL4yprAYn1bgAq",
				container: "_3tZDqkm04pN0jRZCQWdnnj",
				title: "J2b6z_YpR1EFwlnmZXj_L",
				subtitle: "_3nx0CetCO-ndQlUSq4tL5d",
				button: "_1Ud8Fg6fg8z0GmHHNKYuJT"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less": function(e, t, s) {
			e.exports = {
				container: "SS170RmKHoZuMMkJr141W",
				powerupsIcon: "w787eo650WzP0J00UYn-2",
				title: "_2QS5-06aVEbnm3x8WBjauN",
				subtitle: "_1hOGKkXaNRO6P9r7WcJZJO",
				supporters: "_1VV6QeoM4CWq3umVQYWm65",
				button: "ORJj8Dlz_GOfn6EWZgv_N"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r, n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/constants/localStorage.ts"),
				d = s("./src/reddit/helpers/localStorage/index.ts"),
				i = s("./src/reddit/helpers/trackers/powerups.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/selectors/experiments/i18n/hiddenPowerups.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/selectors/gold/powerups/index.ts");
			! function(e) {
				e[e.POWERUPS_DEFAULT = 0] = "POWERUPS_DEFAULT", e[e.UNLOCKED_UNAPPLIED_FROM_PREMIUM = 1] = "UNLOCKED_UNAPPLIED_FROM_PREMIUM", e[e.HIDDEN = 2] = "HIDDEN"
			}(r || (r = {}));
			var b = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/config.ts"),
				_ = s("./src/lib/classNames/index.ts"),
				O = s("./src/reddit/actions/gold/powerups.ts"),
				I = s("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				N = s("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				P = s("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock/ApplyFromPremiumUnit.m.less"),
				U = s.n(P);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var j = e => {
					let {
						subredditId: t,
						className: s
					} = e;
					const r = Object(a.d)(),
						n = Object(l.a)(),
						c = Object(a.e)(e => Object(b.U)(e, {
							subredditId: t
						}).displayText);
					return o.a.createElement("div", {
						className: Object(_.a)(U.a.container, s)
					}, o.a.createElement("img", {
						className: U.a.powerupsIcon,
						src: `${E.a.assetPath}/img/powerups/powerups-rangers.png`,
						"data-testid": "powerups-icon-rangers"
					}), o.a.createElement("h2", {
						className: U.a.title
					}, w._("Use your Powerup to support {subreddit name}", [w._param("subreddit name", c)], {
						hk: "2OMTwG"
					})), o.a.createElement("h3", {
						className: U.a.subtitle
					}, w._("Go ahead, show them some love!", null, {
						hk: "3NzF6j"
					})), o.a.createElement(I.a, {
						className: U.a.button,
						onClick: () => {
							n(Object(i.n)()), r(Object(O.g)("in_feed_unit"))
						}
					}), o.a.createElement(N.a, {
						space: N.b.INFEED_UNIT
					}))
				},
				h = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				D = s("./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less"),
				k = s.n(D);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var g = e => {
				let {
					className: t,
					subredditId: s,
					inFeedDisplayState: n
				} = e;
				const c = Object(a.d)(),
					d = Object(l.a)(),
					u = Object(a.e)(e => Object(b.U)(e, {
						subredditId: s
					}));
				if (n === r.HIDDEN) return null;
				const m = f._("Unlock perks for the whole community", null, {
					hk: "1DllPY"
				});
				return o.a.createElement("div", {
					className: Object(_.a)(k.a.container, t)
				}, o.a.createElement(() => o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
					className: k.a.powerupsIcon,
					src: `${E.a.assetPath}/img/powerups/powerups-rangers.png`,
					"data-testid": "powerups-icon-rangers"
				}), o.a.createElement("h2", {
					className: k.a.title
				}, f._("Powerup {subreddit name}", [f._param("subreddit name", u.displayText)], {
					hk: "2zwNZk"
				})), o.a.createElement("h3", {
					className: k.a.subtitle
				}, m)), null), o.a.createElement(h.a, {
					className: k.a.supporters,
					subredditId: s,
					onClick: e => {
						d(Object(i.e)("post_upsell")), c(e ? Object(O.i)(s) : Object(O.g)("in_feed_unit"))
					}
				}), o.a.createElement(I.a, {
					className: k.a.button,
					onClick: () => {
						d(Object(i.m)()), c(Object(O.g)("in_feed_unit"))
					}
				}), o.a.createElement(N.a, {
					space: N.b.INFEED_UNIT
				}))
			};
			t.default = e => {
				let {
					subredditId: t,
					className: s
				} = e;
				const E = Object(l.a)(),
					_ = Object(a.e)(e => Object(b.U)(e, {
						subredditId: t
					})),
					[O, I] = Object(n.useState)(r.HIDDEN),
					N = Object(a.e)(e => ((e, t) => {
						let {
							subredditId: s
						} = t;
						const n = Object(p.v)(e, {
								subredditId: s
							}),
							o = Object(p.k)(e, {
								subredditId: s
							}),
							a = Object(p.u)(e) && Object(m.v)(e);
						return Object(u.a)(e) && Object(u.b)(s) ? r.HIDDEN : o || n ? a ? r.UNLOCKED_UNAPPLIED_FROM_PREMIUM : r.HIDDEN : r.POWERUPS_DEFAULT
					})(e, {
						subredditId: _.id
					})),
					P = (e => e === r.POWERUPS_DEFAULT ? c.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE : e === r.UNLOCKED_UNAPPLIED_FROM_PREMIUM ? c.b.POWERUPS_UNAPPLIED_PREMIUM_INFEED_UNIT_VISIBILITY_STORE : null)(N);
				switch (Object(n.useEffect)(() => {
					const e = ((e, t) => {
						if (!t) return !0;
						return Object(d.j)(t, e) >= 2
					})(t, P) ? r.HIDDEN : N;
					I(e)
				}, [t, P, N, I]), Object(n.useEffect)(() => {
					if (O === r.HIDDEN) return;
					(() => O === r.POWERUPS_DEFAULT ? E(Object(i.p)()) : O === r.UNLOCKED_UNAPPLIED_FROM_PREMIUM ? E(Object(i.o)()) : void 0)(), Object(d.T)(P, t)
				}, [O, I, P, t, E, N]), O) {
					case r.POWERUPS_DEFAULT:
						return o.a.createElement(g, {
							className: s,
							subredditId: t,
							inFeedDisplayState: O
						});
					case r.UNLOCKED_UNAPPLIED_FROM_PREMIUM:
						return o.a.createElement(j, {
							className: s,
							subredditId: t
						});
					default:
						return null
				}
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index.ae2a9d65f57a6eb30ef3.js.map