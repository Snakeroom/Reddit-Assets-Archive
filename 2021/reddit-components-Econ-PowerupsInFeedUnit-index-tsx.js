// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.f70da7bc45290aa2c664.js
// Retrieved at 4/27/2021, 9:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-PowerupsInFeedUnit-index-tsx"], {
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
				subredditId: t
			}) => {
				const s = Object(n.e)(e => Object(d.j)(e, {
						subredditId: t
					})),
					r = Object(n.e)(e => Object(l.T)(e, {
						subredditId: t
					})),
					u = Object(n.e)(e => Object(d.l)(e, {
						subredditId: t
					}));
				if (!s) return null;
				const {
					tier: b,
					count: _,
					tiersInfo: E,
					supportersCount: w
				} = s, h = E[1].powerupsCost, x = b >= 2, N = (null == u ? void 0 : u.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], g = Math.min(_, h) / h, f = h - _;
				return o.a.createElement("div", {
					className: Object(a.a)(m.a.container, e)
				}, o.a.createElement("div", {
					className: m.a.heroes
				}, !!N.length && o.a.createElement("div", {
					className: Object(a.a)(m.a.heroesAvatarContainer, {
						[m.a.twoAvatarsContainer]: N.length > 1
					})
				}, N.map(e => {
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
				}, w ? p._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [p._plural(w, "subreddit supporters")], {
					hk: "2UisaO"
				}) : p._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))), o.a.createElement("p", {
					className: m.a.title
				}, x ? p._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : p._("{subredditName} needs {powerups needed} more Powerups to unlock perks for the entire community", [p._param("subredditName", r.displayText), p._param("powerups needed", f)], {
					hk: "4h33rf"
				})), o.a.createElement(c.a, {
					className: m.a.progressBar,
					progress: g
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
				className: t
			}) => {
				const s = Object(n.d)(),
					w = Object(b.a)(),
					N = Object(n.e)(_.u),
					g = Object(n.e)(t => Object(E.T)(t, {
						subredditId: e
					})),
					f = Object(n.e)(t => Object(_.a)(t, {
						subredditId: e
					})),
					[j, I] = Object(r.useState)(!1);
				if (Object(r.useEffect)(() => {
						if (f) return;
						const t = Object(m.k)(l.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE, e);
						t && t >= 5 || I(!0)
					}, [e, w, I, f]), Object(r.useEffect)(() => {
						j && (Object(m.N)(l.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE, e), w(Object(p.j)()))
					}, [j, w, e]), !j) return null;
				const O = !!(null == N ? void 0 : N.freeCount);
				return o.a.createElement("div", {
					className: Object(a.a)(h.a.container, t)
				}, o.a.createElement(d.a, {
					className: h.a.powerupsIcon
				}), o.a.createElement("h2", {
					className: h.a.title
				}, x._("Powerup {subreddit name}", [x._param("subreddit name", g.displayText)], {
					hk: "2zwNZk"
				})), o.a.createElement("h3", {
					className: h.a.subtitle
				}, x._("Unlock perks for the whole community", null, {
					hk: "2eBWsc"
				})), o.a.createElement(i.a, {
					className: h.a.supporters,
					subredditId: e
				}), o.a.createElement(u.q, {
					priority: u.b.Primary,
					className: h.a.button,
					onClick: () => {
						w(Object(p.i)()), s(Object(c.c)())
					},
					isFullWidth: !0
				}, O ? x._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : x._("Unlock Powerups", null, {
					hk: "lMvv1"
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.f70da7bc45290aa2c664.js.map