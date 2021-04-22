// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.285efc8da3f74d36ded0.js
// Retrieved at 4/22/2021, 11:50:05 AM by Reddit Dataminer v1.0.0
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
				i = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				d = s("./src/reddit/components/UserIcon/index.tsx"),
				l = s("./src/reddit/selectors/gold/powerups.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				p = s.n(m);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = ({
				className: e,
				subredditId: t
			}) => {
				const s = Object(n.e)(e => Object(l.j)(e, {
						subredditId: t
					})),
					r = Object(n.e)(e => Object(u.T)(e, {
						subredditId: t
					})),
					c = Object(n.e)(e => Object(l.l)(e, {
						subredditId: t
					}));
				if (!s) return null;
				const {
					tier: m,
					count: _,
					tiersInfo: h,
					supportersCount: E
				} = s, N = h[1].powerupsCost, I = m >= 2, w = (null == c ? void 0 : c.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], O = Math.min(_, N) / N, j = N - _;
				return o.a.createElement("div", {
					className: Object(a.a)(p.a.container, e)
				}, o.a.createElement("div", {
					className: p.a.heroes
				}, !!w.length && o.a.createElement("div", {
					className: Object(a.a)(p.a.heroesAvatarContainer, {
						[p.a.twoAvatarsContainer]: w.length > 1
					})
				}, w.map(e => {
					var t, s;
					return o.a.createElement("div", {
						className: p.a.heroesAvatar,
						key: e.supporterInfo.id
					}, o.a.createElement(d.a, {
						className: p.a.heroImage,
						userName: e.supporterInfo.displayName,
						iconUrl: null === (t = e.supporterInfo.icon) || void 0 === t ? void 0 : t.url,
						isNSFW: !!(null === (s = e.supporterInfo.profile) || void 0 === s ? void 0 : s.isNsfw)
					}))
				})), o.a.createElement("div", {
					className: p.a.heroesTitle
				}, E ? b._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [b._plural(E, "subreddit supporters")], {
					hk: "2UisaO"
				}) : b._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))), o.a.createElement("p", {
					className: p.a.title
				}, I ? b._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : b._("{subredditName} needs {powerups needed} more Powerups to unlock perks for the entire community", [b._param("subredditName", r.displayText), b._param("powerups needed", j)], {
					hk: "4h33rf"
				})), o.a.createElement(i.a, {
					className: p.a.progressBar,
					progress: O
				}))
			};
			var h = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				E = s("./src/reddit/constants/localStorage.ts"),
				N = s("./src/reddit/controls/Button/index.tsx"),
				I = s("./src/reddit/helpers/localStorage/index.ts"),
				w = s("./src/reddit/helpers/trackers/powerups.ts"),
				O = s("./src/reddit/hooks/useTracking.ts"),
				j = s("./src/reddit/components/Econ/PowerupsInFeedUnit/index.m.less"),
				v = s.n(j);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.default = ({
				subredditId: e,
				className: t
			}) => {
				const s = Object(n.d)(),
					i = Object(O.a)(),
					d = Object(n.e)(l.u),
					m = Object(n.e)(t => Object(u.T)(t, {
						subredditId: e
					})),
					p = Object(n.e)(t => Object(l.a)(t, {
						subredditId: e
					})),
					[b, j] = Object(r.useState)(!1);
				if (Object(r.useEffect)(() => {
						if (p) return;
						const t = Object(I.k)(E.a.POWERUPS_INFEED_UNIT_VISIBILITY_STORE, e);
						t && t >= 5 || j(!0)
					}, [e, i, j, p]), Object(r.useEffect)(() => {
						b && (Object(I.L)(E.a.POWERUPS_INFEED_UNIT_VISIBILITY_STORE, e), i(Object(w.j)()))
					}, [b, i, e]), !b) return null;
				const k = !!(null == d ? void 0 : d.freeCount);
				return o.a.createElement("div", {
					className: Object(a.a)(v.a.container, t)
				}, o.a.createElement(h.a, {
					className: v.a.powerupsIcon
				}), o.a.createElement("h2", {
					className: v.a.title
				}, f._("Powerup {subreddit name}", [f._param("subreddit name", m.displayText)], {
					hk: "2zwNZk"
				})), o.a.createElement("h3", {
					className: v.a.subtitle
				}, f._("Unlock perks for the whole community", null, {
					hk: "2eBWsc"
				})), o.a.createElement(_, {
					className: v.a.supporters,
					subredditId: e
				}), o.a.createElement(N.q, {
					priority: N.b.Primary,
					className: v.a.button,
					onClick: () => {
						i(Object(w.i)()), s(Object(c.c)())
					},
					isFullWidth: !0
				}, k ? f._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : f._("Unlock Powerups", null, {
					hk: "lMvv1"
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.285efc8da3f74d36ded0.js.map