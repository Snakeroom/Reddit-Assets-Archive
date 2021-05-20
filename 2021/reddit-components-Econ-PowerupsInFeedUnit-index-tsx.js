// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.299091670003ddbe5a66.js
// Retrieved at 5/20/2021, 12:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PowerupsInFeedUnit-index-tsx"], {
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
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				i = s("./src/reddit/components/UserIcon/index.tsx"),
				d = s("./src/reddit/selectors/gold/powerups.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				m = s.n(u);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = ({
				className: e,
				subredditId: t,
				onClick: s
			}) => {
				const r = Object(n.e)(e => Object(d.j)(e, {
						subredditId: t
					})),
					u = Object(n.e)(e => Object(l.U)(e, {
						subredditId: t
					})),
					b = Object(n.e)(e => Object(d.l)(e, {
						subredditId: t
					}));
				if (!r) return null;
				const {
					tier: _,
					count: E,
					tiersInfo: w,
					supportersCount: h
				} = r, x = w[1].powerupsCost, N = _ >= 2, j = (null == b ? void 0 : b.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], f = Math.min(E, x) / x, g = x - E;
				return o.a.createElement("div", {
					className: Object(a.a)(m.a.container, e, {
						[m.a.containerClickable]: !!s
					}),
					"data-testid": "join-heroes",
					onClick: () => null == s ? void 0 : s(E)
				}, o.a.createElement("div", {
					className: m.a.heroes
				}, !!j.length && o.a.createElement("div", {
					className: Object(a.a)(m.a.heroesAvatarContainer, {
						[m.a.twoAvatarsContainer]: j.length > 1
					})
				}, j.map(e => {
					var t, s;
					return o.a.createElement("div", {
						className: m.a.heroesAvatar,
						key: e.supporterInfo.id
					}, o.a.createElement(i.a, {
						className: m.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (s = e.supporterInfo.profile) || void 0 === s ? void 0 : s.isNsfw)
					}))
				})), o.a.createElement("div", {
					className: m.a.heroesTitle
				}, h ? p._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [p._plural(h, "subreddit supporters")], {
					hk: "2UisaO"
				}) : p._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))), o.a.createElement("p", {
					className: m.a.title
				}, N ? p._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : p._("{subredditName} needs {powerups needed} more Powerups to unlock perks for the entire community", [p._param("subredditName", u.displayText), p._param("powerups needed", g)], {
					hk: "4h33rf"
				})), o.a.createElement(c.a, {
					className: m.a.progressBar,
					progress: f
				}))
			}
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
			var r = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				c = s.n(a);
			const i = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement("picture", null, n.a.createElement("source", {
				srcSet: `${r.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), n.a.createElement("source", {
				srcSet: `${r.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), n.a.createElement("img", {
				className: c.a.image,
				src: `${r.a.assetPath}/img/powerups/powerup.png`
			})))
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2MsbtBgPK6VR3Ha93sDNZL",
				powerupsIcon: "TXYXdThpqWivseedZWiEU",
				title: "gRgV8TUH63xyvVlbzek3Z",
				subtitle: "_2y2YN16x5c72tGWojYo8EF",
				supporters: "_33xVOr42D-Ag5dcDBVpLEV",
				button: "_1gtB9Jx6ouVPNWvnkaDIif"
			}
		},
		"./src/reddit/components/Econ/PowerupsInFeedUnit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/gold/powerups.ts"),
				i = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				d = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				l = s("./src/reddit/constants/localStorage.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/helpers/trackers/powerups.ts"),
				b = s("./src/reddit/hooks/useTracking.ts"),
				_ = s("./src/reddit/selectors/gold/powerups.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/components/Econ/PowerupsInFeedUnit/index.m.less"),
				h = s.n(w);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.default = ({
				subredditId: e,
				className: t,
				isDataLoaded: s
			}) => {
				const w = Object(n.d)(),
					N = Object(b.a)(),
					j = Object(n.e)(_.v),
					f = Object(n.e)(t => Object(E.U)(t, {
						subredditId: e
					})),
					g = Object(n.e)(t => Object(_.t)(t, {
						subredditId: e
					})),
					[O, k] = Object(r.useState)(!1),
					v = O && s;
				if (Object(r.useEffect)(() => {
						k(!g && !(e => {
							return Object(m.k)(l.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE, e) >= 5
						})(e))
					}, [g, e, k]), Object(r.useEffect)(() => {
						v && (Object(m.O)(l.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE, e), N(Object(p.l)()))
					}, [v, N, e]), !v) return null;
				const I = !!(null == j ? void 0 : j.freeCount);
				return o.a.createElement("div", {
					className: Object(a.a)(h.a.container, t)
				}, o.a.createElement(d.a, {
					className: h.a.powerupsIcon
				}), o.a.createElement("h2", {
					className: h.a.title
				}, x._("Powerup {subreddit name}", [x._param("subreddit name", f.displayText)], {
					hk: "2zwNZk"
				})), o.a.createElement("h3", {
					className: h.a.subtitle
				}, x._("Unlock perks for the whole community", null, {
					hk: "2eBWsc"
				})), o.a.createElement(i.a, {
					className: h.a.supporters,
					subredditId: e,
					onClick: t => {
						N(Object(p.c)("post_upsell")), w(t ? Object(c.e)(e) : Object(c.d)("in_feed_unit"))
					}
				}), o.a.createElement(u.q, {
					priority: u.b.Primary,
					className: h.a.button,
					onClick: () => {
						N(Object(p.k)()), w(Object(c.d)("in_feed_unit"))
					},
					isFullWidth: !0
				}, I ? x._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : x._("Unlock Powerups", null, {
					hk: "lMvv1"
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.299091670003ddbe5a66.js.map