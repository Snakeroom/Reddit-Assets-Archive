// https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.b2564979e23faa2fe557.js
// Retrieved at 8/4/2021, 11:30:07 AM by Reddit Dataminer v1.0.0
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
				return _
			}));
			var r = s("./node_modules/react/index.js"),
				o = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				d = s("./src/reddit/selectors/experiments/econ/index.ts"),
				l = s("./src/reddit/selectors/gold/powerups/index.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				p = s("./src/reddit/components/Econ/Common/JoinHeroes/index.m.less"),
				m = s.n(p);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = ({
				className: e,
				subredditId: t,
				onClick: s
			}) => {
				const r = Object(n.e)(e => Object(l.i)(e, {
						subredditId: t
					})),
					p = Object(n.e)(e => Object(u.S)(e, {
						subredditId: t
					})),
					_ = Object(n.e)(e => Object(l.k)(e, {
						subredditId: t
					})),
					h = Object(n.e)(d.h);
				if (!r) return null;
				const {
					tier: E,
					count: w,
					tiersInfo: x,
					supportersCount: N
				} = r, f = x[1].powerupsCost, j = E >= 2, k = (null == _ ? void 0 : _.filter(e => {
					var t;
					return !!(null === (t = e.supporterInfo) || void 0 === t ? void 0 : t.displayName)
				}).slice(0, 2)) || [], O = Math.min(w, f) / f, g = f - w;
				return o.a.createElement("div", {
					className: Object(a.a)(m.a.container, e, {
						[m.a.containerClickable]: !!s
					}),
					"data-testid": "join-heroes",
					onClick: () => null == s ? void 0 : s(w)
				}, o.a.createElement("div", {
					className: m.a.heroes
				}, !!k.length && o.a.createElement("div", {
					className: Object(a.a)(m.a.heroesAvatarContainer, {
						[m.a.twoAvatarsContainer]: k.length > 1
					})
				}, k.map(e => {
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
				}, (() => h ? N ? b._({
					"*": "Join {subreddit supporters} supporters",
					_1: "Join 1 supporter"
				}, [b._plural(N, "subreddit supporters")], {
					hk: "20DKnU"
				}) : b._("Be the first supporter!", null, {
					hk: "3sBXnW"
				}) : N ? b._({
					"*": "Join {subreddit supporters} heroes",
					_1: "Join 1 hero"
				}, [b._plural(N, "subreddit supporters")], {
					hk: "2UisaO"
				}) : b._("Be the first hero!", null, {
					hk: "3TGmi4"
				}))())), o.a.createElement("p", {
					className: m.a.title
				}, j ? b._("Community perks are now unlocked!", null, {
					hk: "3xbTTM"
				}) : b._("{subredditName} needs {powerups needed} more Powerups to unlock perks for the entire community", [b._param("subredditName", p.displayText), b._param("powerups needed", g)], {
					hk: "4h33rf"
				})), o.a.createElement(i.a, {
					className: m.a.progressBar,
					progress: O
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
				return c
			}));
			var r = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				a = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				i = s.n(a);
			const c = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement("picture", null, n.a.createElement("source", {
				srcSet: `${r.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), n.a.createElement("source", {
				srcSet: `${r.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), n.a.createElement("img", {
				className: i.a.image,
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
				i = s("./src/reddit/actions/gold/powerups.ts"),
				c = s("./src/reddit/components/Econ/Common/JoinHeroes/index.tsx"),
				d = s("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				l = s("./src/reddit/constants/localStorage.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/helpers/trackers/powerups.ts"),
				b = s("./src/reddit/hooks/useTracking.ts"),
				_ = s("./src/reddit/selectors/experiments/econ/index.ts"),
				h = s("./src/reddit/selectors/gold/powerups/index.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/components/Econ/PowerupsInFeedUnit/index.m.less"),
				x = s.n(w);
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.default = ({
				subredditId: e,
				className: t
			}) => {
				const s = Object(n.d)(),
					w = Object(b.a)(),
					f = Object(n.e)(h.v),
					j = Object(n.e)(t => Object(E.S)(t, {
						subredditId: e
					})),
					k = Object(n.e)(t => Object(h.t)(t, {
						subredditId: e
					})),
					O = Object(n.e)(_.h),
					[g, v] = Object(r.useState)(!1);
				if (Object(r.useEffect)(() => {
						v(!k && !(e => {
							return Object(p.k)(l.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE, e) >= 2
						})(e))
					}, [k, e, v]), Object(r.useEffect)(() => {
						g && (Object(p.R)(l.b.POWERUPS_INFEED_UNIT_VISIBILITY_STORE, e), w(Object(m.l)()))
					}, [g, w, e]), !g) return null;
				const I = !!(null == f ? void 0 : f.freeCount),
					P = O ? N._("Support the whole community", null, {
						hk: "oOdGv"
					}) : N._("Unlock perks for the whole community", null, {
						hk: "1DllPY"
					});
				return o.a.createElement("div", {
					className: Object(a.a)(x.a.container, t)
				}, o.a.createElement(d.a, {
					className: x.a.powerupsIcon
				}), o.a.createElement("h2", {
					className: x.a.title
				}, N._("Powerup {subreddit name}", [N._param("subreddit name", j.displayText)], {
					hk: "2zwNZk"
				})), o.a.createElement("h3", {
					className: x.a.subtitle
				}, P), o.a.createElement(c.a, {
					className: x.a.supporters,
					subredditId: e,
					onClick: t => {
						w(Object(m.c)("post_upsell")), s(t ? Object(i.g)(e) : Object(i.f)("in_feed_unit"))
					}
				}), o.a.createElement(u.q, {
					priority: u.b.Primary,
					className: x.a.button,
					onClick: () => {
						w(Object(m.k)()), s(Object(i.f)("in_feed_unit"))
					},
					isFullWidth: !0
				}, I ? N._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : N._("Unlock Powerups", null, {
					hk: "lMvv1"
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-PowerupsInFeedUnit-index-tsx.b2564979e23faa2fe557.js.map