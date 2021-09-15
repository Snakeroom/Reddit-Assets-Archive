// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.0c08a05bf1fe8b2896a6.js
// Retrieved at 9/15/2021, 11:30:06 AM by Reddit Dataminer v1.0.0
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
				return _
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				i = r("./src/reddit/components/UserIcon/index.tsx"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				u = r("./src/reddit/selectors/gold/powerups/index.ts"),
				l = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				p = r.n(m);
			const {
				fbt: b
			} = r("./node_modules/fbt/lib/FbtPublic.js"), _ = ({
				className: e,
				subredditId: t,
				onClick: r
			}) => {
				const s = Object(o.e)(e => Object(u.j)(e, {
						subredditId: t
					})),
					m = Object(o.e)(e => Object(l.Q)(e, {
						subredditId: t
					})),
					_ = Object(o.e)(e => Object(u.l)(e, {
						subredditId: t
					})),
					E = Object(o.e)(d.h);
				if (!s) return null;
				const {
					tier: h,
					count: f,
					tiersInfo: N,
					supportersCount: g
				} = s, w = N[1].powerupsCost, O = h >= 2, x = (null == _ ? void 0 : _.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], I = Math.min(f, w) / w, P = w - f;
				return n.a.createElement("div", {
					className: Object(a.a)(p.a.container, e, {
						[p.a.containerClickable]: !!r
					}),
					"data-testid": "join-heroes",
					onClick: () => null == r ? void 0 : r(f)
				}, n.a.createElement("div", {
					className: p.a.heroes
				}, !!x.length && n.a.createElement("div", {
					className: Object(a.a)(p.a.heroesAvatarContainer, {
						[p.a.twoAvatarsContainer]: x.length > 1
					})
				}, x.map(e => {
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
				}, (() => E ? g ? b._({
					"*": "Join {subreddit supporters} supporters",
					_1: "Join 1 supporter"
				}, [b._plural(g, "subreddit supporters")], {
					hk: "20DKnU"
				}) : b._("Be the first supporter!", null, {
					hk: "3sBXnW"
				}) : g ? b._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [b._plural(g, "subreddit supporters")], {
					hk: "2UisaO"
				}) : b._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), n.a.createElement("p", {
					className: p.a.title
				}, O ? b._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : b._("{subredditName} needs {powerups needed} more Powerups to unlock perks for the entire community", [b._param("subredditName", m.displayText), b._param("powerups needed", P)], {
					hk: "4h33rf"
				})), n.a.createElement(c.a, {
					className: p.a.progressBar,
					progress: I
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
				o = r.n(n),
				a = r("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				c = r.n(a);
			const i = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement("picture", null, o.a.createElement("source", {
				srcSet: `${s.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), o.a.createElement("source", {
				srcSet: `${s.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), o.a.createElement("img", {
				className: c.a.image,
				src: `${s.a.assetPath}/img/powerups/powerup.png`,
				alt: "Rotating Powerups bolt"
			})))
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2MsbtBgPK6VR3Ha93sDNZL",
				communityGearAvatar: "_2Fopbzloh0zrJwASh3rcrE",
				powerupsIcon: "TXYXdThpqWivseedZWiEU",
				title: "gRgV8TUH63xyvVlbzek3Z",
				subtitle: "_2y2YN16x5c72tGWojYo8EF",
				supporters: "_33xVOr42D-Ag5dcDBVpLEV",
				button: "_1gtB9Jx6ouVPNWvnkaDIif"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "MAX_DISPLAY_COUNT_ON_SUBREDDIT", (function() {
				return P
			}));
			var s, n = r("./src/config.ts"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				c = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/gold/powerups.ts"),
				u = r("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				l = r("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				m = r("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				p = r("./src/reddit/constants/localStorage.ts"),
				b = r("./src/reddit/helpers/localStorage/index.ts"),
				_ = r("./src/reddit/helpers/trackers/powerups.ts"),
				E = r("./src/reddit/hooks/useTracking.ts"),
				h = r("./src/reddit/selectors/experiments/econ/index.ts"),
				f = r("./src/reddit/constants/gold.ts"),
				N = r("./src/reddit/constants/posts.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				w = r("./src/reddit/selectors/gold/powerups/index.ts");
			! function(e) {
				e[e.POWERUPS_DEFAULT = 0] = "POWERUPS_DEFAULT", e[e.POWERUPS_COMMUNITY_GEAR = 1] = "POWERUPS_COMMUNITY_GEAR", e[e.HIDDEN = 2] = "HIDDEN"
			}(s || (s = {}));
			var O = r("./src/reddit/components/Econ/PowerupsInFeedUnit/index.m.less"),
				x = r.n(O);
			const {
				fbt: I
			} = r("./node_modules/fbt/lib/FbtPublic.js"), P = 2;
			t.default = ({
				subredditId: e,
				className: t
			}) => {
				const r = Object(c.d)(),
					O = Object(E.a)(),
					j = Object(c.e)(t => Object(g.Q)(t, {
						subredditId: e
					})),
					v = Object(c.e)(h.h),
					D = Object(c.e)(e => ((e, {
						subredditId: t,
						subredditName: r
					}) => {
						const n = Object(w.u)(e, {
								subredditId: t
							}),
							o = Object(g.cb)(e, {
								identifier: {
									name: r,
									type: N.a.SUBREDDIT
								}
							});
						return n ? s.HIDDEN : f.h.includes(t) && o && Object(h.j)(e) ? s.POWERUPS_COMMUNITY_GEAR : s.POWERUPS_DEFAULT
					})(e, {
						subredditId: j.id,
						subredditName: j.name
					})),
					[k, U] = Object(o.useState)(s.HIDDEN);
				if (Object(o.useEffect)(() => {
						const t = (e => {
							return Object(b.j)(p.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE, e) >= P
						})(e) ? s.HIDDEN : D;
						U(t)
					}, [e, D, U]), Object(o.useEffect)(() => {
						k !== s.HIDDEN && (Object(b.R)(p.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE, e), O(Object(_.n)()))
					}, [k, O, e]), k === s.HIDDEN) return null;
				const A = v ? I._("Support the whole community", null, {
					hk: "oOdGv"
				}) : I._("Unlock perks for the whole community", null, {
					hk: "1DllPY"
				});
				return a.a.createElement("div", {
					className: Object(i.a)(x.a.container, t)
				}, k === s.POWERUPS_DEFAULT ? a.a.createElement(() => a.a.createElement(a.a.Fragment, null, a.a.createElement(l.a, {
					className: x.a.powerupsIcon
				}), a.a.createElement("h2", {
					className: x.a.title
				}, I._("Powerup {subreddit name}", [I._param("subreddit name", j.displayText)], {
					hk: "2zwNZk"
				})), a.a.createElement("h3", {
					className: x.a.subtitle
				}, A)), null) : a.a.createElement(() => a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: x.a.communityGearAvatar,
					"data-testid": "community-gear-avatar",
					style: {
						backgroundImage: `url("${n.a.assetPath}/img/snoovatars/snoovatar_6.png")`
					}
				}), a.a.createElement("h2", {
					className: x.a.title
				}, I._("Powerup to unlock community gear", null, {
					hk: "HyBcY"
				}))), null), a.a.createElement(u.a, {
					className: x.a.supporters,
					subredditId: e,
					onClick: t => {
						O(Object(_.e)("post_upsell")), r(t ? Object(d.h)(e) : Object(d.f)("in_feed_unit"))
					}
				}), a.a.createElement(m.a, {
					className: x.a.button,
					onClick: () => {
						O(Object(_.m)()), r(Object(d.f)("in_feed_unit"))
					}
				}))
			}
		},
		"./src/reddit/constants/gold.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "i", (function() {
				return u
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "h", (function() {
				return m
			}));
			const s = "ModerationPage--Modal--AddAward",
				n = "ModerationPage--Modal--DeleteAwardConfirmation",
				o = 20,
				a = 4,
				c = 1e4,
				i = .2,
				d = .1,
				u = .1,
				l = 500,
				m = ["t5_2qqoq", "t5_37xo2", "t5_2r60y", "t5_mvcq5", "t5_4e4fpz", "t5_4e4ib9", "t5_4y3poa", "t5_4hmhx4"]
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.0c08a05bf1fe8b2896a6.js.map