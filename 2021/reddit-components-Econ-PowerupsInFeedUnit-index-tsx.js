// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.a4648aca8d9152e35a02.js
// Retrieved at 9/22/2021, 3:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PowerupsInFeedUnit-index-tsx"], {
		"./src/reddit/components/Econ/Common/JoinHeroes/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Econ/Common/JoinHeroes/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				i = r("./src/reddit/components/UserIcon/index.tsx"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/selectors/gold/powerups/index.ts"),
				u = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				p = r.n(m);
			const {
				fbt: _
			} = r("./node_modules/fbt/lib/FbtPublic.js"), E = ({
				className: e,
				subredditId: t,
				onClick: r
			}) => {
				const s = Object(a.e)(e => Object(l.j)(e, {
						subredditId: t
					})),
					m = Object(a.e)(e => Object(u.Q)(e, {
						subredditId: t
					})),
					E = Object(a.e)(e => Object(l.l)(e, {
						subredditId: t
					})),
					b = Object(a.e)(d.h);
				if (!s) return null;
				const {
					tier: N,
					count: O,
					tiersInfo: h,
					supportersCount: I
				} = s, f = h[1].powerupsCost, P = N >= 2, w = (null == E ? void 0 : E.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], j = Math.min(O, f) / f, U = f - O;
				return n.a.createElement("div", {
					className: Object(o.a)(p.a.container, e, {
						[p.a.containerClickable]: !!r
					}),
					"data-testid": "join-heroes",
					onClick: () => null == r ? void 0 : r(O)
				}, n.a.createElement("div", {
					className: p.a.heroes
				}, !!w.length && n.a.createElement("div", {
					className: Object(o.a)(p.a.heroesAvatarContainer, {
						[p.a.twoAvatarsContainer]: w.length > 1
					})
				}, w.map(e => {
					var t, r;
					return n.a.createElement("div", {
						className: p.a.heroesAvatar,
						key: e.supporterInfo.id
					}, n.a.createElement(i.a, {
						className: p.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (r = e.supporterInfo.profile) || void 0 === r ? void 0 : r.isNsfw)
					}))
				})), n.a.createElement("div", {
					className: p.a.heroesTitle
				}, (() => b ? I ? _._({
					"*": "Join {subreddit supporters} supporters",
					_1: "Join 1 supporter"
				}, [_._plural(I, "subreddit supporters")], {
					hk: "20DKnU"
				}) : _._("Be the first supporter!", null, {
					hk: "3sBXnW"
				}) : I ? _._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [_._plural(I, "subreddit supporters")], {
					hk: "2UisaO"
				}) : _._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), n.a.createElement("p", {
					className: p.a.title
				}, P ? _._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : _._("{subredditName} needs {powerups needed} more Powerups to unlock perks for the entire community", [_._param("subredditName", m.displayText), _._param("powerups needed", U)], {
					hk: "4h33rf"
				})), n.a.createElement(c.a, {
					className: p.a.progressBar,
					progress: j
				}))
			}
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less": function(e, t, r) {
			e.exports = {
				image: "_2UM9VBeA7xU3ro_DBfudN2"
			}
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/config.ts"),
				n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				c = r.n(o);
			const i = e => a.a.createElement("div", {
				className: e.className
			}, a.a.createElement("picture", null, a.a.createElement("source", {
				srcSet: `${s.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), a.a.createElement("source", {
				srcSet: `${s.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), a.a.createElement("img", {
				className: c.a.image,
				src: `${s.a.assetPath}/img/powerups/powerup.png`,
				alt: "Rotating Powerups bolt"
			})))
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock.m.less": function(e, t, r) {
			e.exports = {
				container: "_33MYPSjwkqVjRxXoTiJthW",
				header: "_1vRhiolESYCTrQRySvgTx-",
				powerupsBolt: "_1qZhd-qYEiELfmLW4V8Z3J",
				headerText: "_194vkAQgnWXh-dqdChJ3Dl",
				title: "_1vjqPyaZdIUcFkhaLhJuez",
				subtitle: "_2dW3q3pqrs3OEyNdpkDm-8",
				contentWrapper: "_3IcKFT4KuyHxEhGrA58nzc",
				avatarTop: "_3kDi_3O7tYyWnvPW0Ech7_",
				buttonWrapper: "OT9ibvzuAuCCDGxEAe6rN"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less": function(e, t, r) {
			e.exports = {
				container: "SS170RmKHoZuMMkJr141W",
				communityGearAvatar: "_35IGztfyzwQ3wZ8LAuV7rb",
				powerupsIcon: "w787eo650WzP0J00UYn-2",
				title: "_2QS5-06aVEbnm3x8WBjauN",
				subtitle: "_1hOGKkXaNRO6P9r7WcJZJO",
				supporters: "_1VV6QeoM4CWq3umVQYWm65",
				button: "ORJj8Dlz_GOfn6EWZgv_N"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "MAX_DISPLAY_COUNT_ON_LOCKED_SUBREDDIT", (function() {
				return T
			})), r.d(t, "MAX_DISPLAY_COUNT_ON_UNLOCKED_SUBREDDIT", (function() {
				return S
			}));
			var s, n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/constants/localStorage.ts"),
				i = r("./src/reddit/helpers/localStorage/index.ts"),
				d = r("./src/reddit/helpers/trackers/powerups.ts"),
				l = r("./src/reddit/hooks/useTracking.ts"),
				u = r("./src/reddit/constants/gold.ts"),
				m = r("./src/reddit/constants/posts.ts"),
				p = r("./src/reddit/selectors/experiments/econ/index.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				E = r("./src/reddit/selectors/gold/powerups/index.ts");
			! function(e) {
				e[e.POWERUPS_DEFAULT = 0] = "POWERUPS_DEFAULT", e[e.POWERUPS_COMMUNITY_GEAR = 1] = "POWERUPS_COMMUNITY_GEAR", e[e.UNLOCKED_COMMUNITY_GEAR = 2] = "UNLOCKED_COMMUNITY_GEAR", e[e.HIDDEN = 3] = "HIDDEN"
			}(s || (s = {}));
			var b = r("./src/lib/classNames/index.ts"),
				N = r("./src/reddit/controls/Button/index.tsx"),
				O = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				h = r("./src/reddit/components/Econ/PowerupsInFeedUnit/PostUnlock.m.less"),
				I = r.n(h);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var P = ({
					className: e
				}) => {
					return a.a.createElement("div", {
						className: Object(b.a)(I.a.container, e)
					}, a.a.createElement("div", {
						className: I.a.header
					}, a.a.createElement(O.a, {
						className: I.a.powerupsBolt
					}), a.a.createElement("div", {
						className: I.a.headerText
					}, a.a.createElement("h2", {
						className: I.a.title
					}, f._("Get the most out of Powerups", null, {
						hk: "4mSV6O"
					})), a.a.createElement("h3", {
						className: I.a.subtitle
					}, f._("Show your support with exclusive gear", null, {
						hk: "2rq6cz"
					})))), a.a.createElement("div", {
						className: I.a.contentWrapper
					}, a.a.createElement(O.a, {
						className: I.a.avatarTop
					})), a.a.createElement("div", {
						className: I.a.buttonWrapper
					}, a.a.createElement(N.s, {
						priority: N.b.Secondary,
						onClick: () => {},
						isFullWidth: !0
					}, f._("Wear your community gear", null, {
						hk: "1Tt2q6"
					}))))
				},
				w = r("./src/config.ts"),
				j = r("./src/reddit/actions/gold/powerups.ts"),
				U = r("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				x = r("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				v = r("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				g = r("./src/reddit/components/Econ/PowerupsInFeedUnit/PreUnlock.m.less"),
				C = r.n(g);
			const {
				fbt: D
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var k = ({
				className: e,
				subredditId: t,
				inFeedDisplayState: r
			}) => {
				const n = Object(o.d)(),
					c = Object(l.a)(),
					i = Object(o.e)(e => Object(_.Q)(e, {
						subredditId: t
					})),
					u = Object(o.e)(p.h);
				if (r === s.HIDDEN) return null;
				const m = u ? D._("Support the whole community", null, {
					hk: "oOdGv"
				}) : D._("Unlock perks for the whole community", null, {
					hk: "1DllPY"
				});
				return a.a.createElement("div", {
					className: Object(b.a)(C.a.container, e)
				}, r === s.POWERUPS_DEFAULT ? a.a.createElement(() => a.a.createElement(a.a.Fragment, null, a.a.createElement(x.a, {
					className: C.a.powerupsIcon
				}), a.a.createElement("h2", {
					className: C.a.title
				}, D._("Powerup {subreddit name}", [D._param("subreddit name", i.displayText)], {
					hk: "2zwNZk"
				})), a.a.createElement("h3", {
					className: C.a.subtitle
				}, m)), null) : a.a.createElement(() => a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: C.a.communityGearAvatar,
					"data-testid": "community-gear-avatar",
					style: {
						backgroundImage: `url("${w.a.assetPath}/img/snoovatars/snoovatar_6.png")`
					}
				}), a.a.createElement("h2", {
					className: C.a.title
				}, D._("Powerup to unlock community gear", null, {
					hk: "HyBcY"
				}))), null), a.a.createElement(U.a, {
					className: C.a.supporters,
					subredditId: t,
					onClick: e => {
						c(Object(d.e)("post_upsell")), n(e ? Object(j.h)(t) : Object(j.f)("in_feed_unit"))
					}
				}), a.a.createElement(v.a, {
					className: C.a.button,
					onClick: () => {
						c(Object(d.m)()), n(Object(j.f)("in_feed_unit"))
					}
				}))
			};
			const {
				fbt: A
			} = r("./node_modules/fbt/lib/FbtPublic.js"), T = 2, S = 1;
			t.default = ({
				subredditId: e,
				className: t
			}) => {
				const r = Object(l.a)(),
					b = Object(o.e)(t => Object(_.Q)(t, {
						subredditId: e
					})),
					N = Object(o.e)(e => ((e, {
						subredditId: t,
						subredditName: r
					}) => {
						const n = Object(E.v)(e, {
								subredditId: t
							}),
							a = Object(_.cb)(e, {
								identifier: {
									name: r,
									type: m.a.SUBREDDIT
								}
							}),
							o = Object(E.k)(e, {
								subredditId: t
							}),
							c = Object(E.p)(e, {
								subredditId: t
							});
						return o || n ? c && a && Object(p.j)(e) ? s.UNLOCKED_COMMUNITY_GEAR : s.HIDDEN : u.h.includes(t) && a && Object(p.j)(e) ? s.POWERUPS_COMMUNITY_GEAR : s.POWERUPS_DEFAULT
					})(e, {
						subredditId: b.id,
						subredditName: b.name
					})),
					O = N === s.UNLOCKED_COMMUNITY_GEAR,
					h = O ? c.b.POWERUPS_UNLOCKED_INFEED_UNIT_VISIBILITY_STORE : c.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE,
					[I, f] = Object(n.useState)(s.HIDDEN);
				switch (Object(n.useEffect)(() => {
					const t = ((e, t, r) => {
						return Object(i.j)(t, e) >= (r ? S : T)
					})(e, h, O) ? s.HIDDEN : N;
					f(t)
				}, [e, h, N, f, O]), Object(n.useEffect)(() => {
					I !== s.HIDDEN && (Object(i.R)(h, e), O || r(Object(d.n)()))
				}, [I, h, e, O, r]), I) {
					case s.POWERUPS_DEFAULT:
					case s.POWERUPS_COMMUNITY_GEAR:
						return a.a.createElement(k, {
							className: t,
							subredditId: e,
							inFeedDisplayState: I
						});
					case s.UNLOCKED_COMMUNITY_GEAR:
						return a.a.createElement(P, {
							className: t,
							subredditId: e
						});
					default:
						return null
				}
			}
		},
		"./src/reddit/constants/gold.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "h", (function() {
				return m
			}));
			const s = "ModerationPage--Modal--AddAward",
				n = "ModerationPage--Modal--DeleteAwardConfirmation",
				a = 20,
				o = 4,
				c = 1e4,
				i = .2,
				d = .1,
				l = .1,
				u = 500,
				m = ["t5_2qqoq", "t5_37xo2", "t5_2r60y", "t5_mvcq5", "t5_4e4fpz", "t5_4e4ib9", "t5_4y3poa", "t5_4hmhx4"]
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.a4648aca8d9152e35a02.js.map