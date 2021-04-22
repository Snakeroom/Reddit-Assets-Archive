// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.573edb5dc90a26f740c6.js
// Retrieved at 4/22/2021, 3:30:05 PM by Reddit Dataminer v1.0.0
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
				d = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				i = s("./src/reddit/selectors/gold/powerups.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				m = s.n(u);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = ({
				className: e,
				subredditId: t
			}) => {
				const s = Object(n.e)(e => Object(i.j)(e, {
						subredditId: t
					})),
					r = Object(n.e)(e => Object(l.T)(e, {
						subredditId: t
					})),
					u = Object(n.e)(e => Object(i.l)(e, {
						subredditId: t
					}));
				if (!s) return null;
				const {
					tier: b,
					count: _,
					tiersInfo: h,
					supportersCount: E
				} = s, N = h[1].powerupsCost, x = b >= 2, j = (null == u ? void 0 : u.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], w = Math.min(_, N) / N, I = N - _;
				return o.a.createElement("div", {
					className: Object(a.a)(m.a.container, e)
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
					}, o.a.createElement(c.a, {
						className: m.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (s = e.supporterInfo.profile) || void 0 === s ? void 0 : s.isNsfw)
					}))
				})), o.a.createElement("div", {
					className: m.a.heroesTitle
				}, E ? p._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [p._plural(E, "subreddit supporters")], {
					hk: "2UisaO"
				}) : p._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))), o.a.createElement("p", {
					className: m.a.title
				}, x ? p._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : p._("{subredditName} needs {powerups needed} more Powerups to unlock perks for the entire community", [p._param("subredditName", r.displayText), p._param("powerups needed", I)], {
					hk: "4h33rf"
				})), o.a.createElement(d.a, {
					className: m.a.progressBar,
					progress: w
				}))
			}
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
				d = s("./src/reddit/actions/gold/powerups.ts"),
				c = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				i = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				l = s("./src/reddit/constants/localStorage.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/helpers/trackers/powerups.ts"),
				b = s("./src/reddit/hooks/useTracking.ts"),
				_ = s("./src/reddit/selectors/gold/powerups.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/Econ/PowerupsInFeedUnit/index.m.less"),
				N = s.n(E);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.default = ({
				subredditId: e,
				className: t
			}) => {
				const s = Object(n.d)(),
					E = Object(b.a)(),
					j = Object(n.e)(_.u),
					w = Object(n.e)(t => Object(h.T)(t, {
						subredditId: e
					})),
					I = Object(n.e)(t => Object(_.a)(t, {
						subredditId: e
					})),
					[O, f] = Object(r.useState)(!1);
				if (Object(r.useEffect)(() => {
						if (I) return;
						const t = Object(m.k)(l.a.POWERUPS_INFEED_UNIT_VISIBILITY_STORE, e);
						t && t >= 5 || f(!0)
					}, [e, E, f, I]), Object(r.useEffect)(() => {
						O && (Object(m.L)(l.a.POWERUPS_INFEED_UNIT_VISIBILITY_STORE, e), E(Object(p.j)()))
					}, [O, E, e]), !O) return null;
				const v = !!(null == j ? void 0 : j.freeCount);
				return o.a.createElement("div", {
					className: Object(a.a)(N.a.container, t)
				}, o.a.createElement(i.a, {
					className: N.a.powerupsIcon
				}), o.a.createElement("h2", {
					className: N.a.title
				}, x._("Powerup {subreddit name}", [x._param("subreddit name", w.displayText)], {
					hk: "2zwNZk"
				})), o.a.createElement("h3", {
					className: N.a.subtitle
				}, x._("Unlock perks for the whole community", null, {
					hk: "2eBWsc"
				})), o.a.createElement(c.a, {
					className: N.a.supporters,
					subredditId: e
				}), o.a.createElement(u.q, {
					priority: u.b.Primary,
					className: N.a.button,
					onClick: () => {
						E(Object(p.i)()), s(Object(d.c)())
					},
					isFullWidth: !0
				}, v ? x._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : x._("Unlock Powerups", null, {
					hk: "lMvv1"
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.573edb5dc90a26f740c6.js.map