// https://www.redditstatic.com/desktop2x/reddit-components-PowerupsBanner.3946320aae0358a9dab0.js
// Retrieved at 6/24/2020, 5:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-PowerupsBanner"], {
		"./src/reddit/components/PowerupsBanner/PowerupsRemainingToUnlock/index.m.less": function(e, s, t) {
			e.exports = {
				container: "_3DUbiwh1FRtq5g2hEx2RKL",
				lockIcon: "_33RjcTTmbKD5T2Ta8QRTnF",
				checkmarkIcon: "_3QCslBBy_6oqZJDark7cwm"
			}
		},
		"./src/reddit/components/PowerupsBanner/PowerupsRemainingToUnlock/index.tsx": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				o = t("./src/lib/classNames/index.ts"),
				a = t("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = t("./src/reddit/icons/svgs/Lock/index.tsx"),
				i = t("./src/reddit/components/PowerupsBanner/PowerupsRemainingToUnlock/index.m.less"),
				l = t.n(i);
			const {
				fbt: d
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			s.a = e => {
				const {
					className: s,
					powerups: t
				} = e, {
					tier: n,
					count: i,
					tiersInfo: u,
					supportersCount: p
				} = t, m = u[n] ? u[n].powerupsCost : 0, x = Math.max(m - i, 0);
				return r.a.createElement("div", {
					className: Object(o.a)(s, l.a.container)
				}, x ? r.a.createElement(r.a.Fragment, null, r.a.createElement(c.a, {
					className: l.a.lockIcon
				}), r.a.createElement("span", null, d._("{remainingToUnlock} more supporters to unlock!", [d._param("remainingToUnlock", x)], {
					hk: "4k6uGF"
				}))) : r.a.createElement(r.a.Fragment, null, r.a.createElement(a.a, {
					className: l.a.checkmarkIcon
				}), r.a.createElement("span", null, d._("Unlocked by {unlockedAlready} supporters", [d._param("unlockedAlready", p)], {
					hk: "2zLbrH"
				}))))
			}
		},
		"./src/reddit/components/PowerupsBanner/Supporters/Supporter/index.m.less": function(e, s, t) {
			e.exports = {
				container: "_3XgM2EN8sCARAkCHOcXWFG",
				user: "_3JLoEbowX1Hvwid4Di_k5k",
				userIconContainer: "_1ZWQEkxAQJa3mQ8se-TkFv",
				userIcon: "_1FJW6pUQI-A-tdYsx0ckLB",
				userInfo: "unfK_hXMHW0WMFEjLCu8H",
				name: "_1nMvPOVd8LTtgN1uqufNmq",
				lastSupported: "_1gTfh1LRXZFU7QpgTIY6X",
				counter: "_28dkfRHU5uHefkVvoC0TSb",
				powerupIcon: "_2dng_Tlb-B96ixv3fyOPcM"
			}
		},
		"./src/reddit/components/PowerupsBanner/Supporters/Supporter/index.tsx": function(e, s, t) {
			"use strict";
			t("./node_modules/core-js/modules/es6.regexp.to-string.js"), t("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				r = t("./node_modules/react/index.js"),
				o = t.n(r),
				a = t("./src/lib/classNames/index.ts"),
				c = t("./src/lib/timeAgo/index.ts"),
				i = t("./src/reddit/components/UserIcon/index.tsx"),
				l = t("./src/reddit/icons/svgs/Powerup/index.tsx"),
				d = t("./src/reddit/components/PowerupsBanner/Supporters/Supporter/index.m.less"),
				u = t.n(d);
			s.a = function(e) {
				const {
					className: s,
					hideDate: t,
					supporter: r
				} = e, {
					score: d,
					lastSupportedAt: p,
					supporterInfo: m
				} = r, x = p && p.indexOf("+") ? p.split("+")[0] : null, b = x ? new Date(x).valueOf() / 1e3 : null, _ = m ? m.name : n.fbt._("Anonymous", null, {
					hk: "1Q4Y6O"
				}).toString(), w = m && m.icon.url ? m.icon.url : void 0, E = !!m && m.profile.isNsfw;
				return o.a.createElement("div", {
					className: Object(a.a)(s, u.a.container)
				}, o.a.createElement("div", {
					className: u.a.user
				}, o.a.createElement("div", {
					className: u.a.userIconContainer
				}, o.a.createElement(i.a, {
					userName: _,
					iconUrl: w,
					className: u.a.userIcon,
					isNSFW: E
				})), o.a.createElement("div", {
					className: u.a.userInfo
				}, o.a.createElement("h4", {
					className: u.a.name
				}, _), !t && b && o.a.createElement("span", {
					className: u.a.lastSupported
				}, Object(c.d)(b)))), o.a.createElement("div", {
					className: u.a.counter
				}, o.a.createElement(l.a, {
					className: u.a.powerupIcon
				}), d))
			}
		},
		"./src/reddit/components/PowerupsBanner/Supporters/index.m.less": function(e, s, t) {
			e.exports = {
				withShade: "_2Ab2KQ5N-LFRqn2qcjxcJ0",
				title: "n8rqEbm1gwg5V18FIJY68"
			}
		},
		"./src/reddit/components/PowerupsBanner/Supporters/index.tsx": function(e, s, t) {
			"use strict";
			t("./node_modules/core-js/modules/es6.array.sort.js");
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				o = t("./src/lib/classNames/index.ts"),
				a = t("./src/reddit/components/PowerupsBanner/Supporters/Supporter/index.tsx"),
				c = t("./src/reddit/components/PowerupsBanner/Supporters/index.m.less"),
				i = t.n(c);
			const {
				fbt: l
			} = t("./node_modules/fbt/lib/FbtPublic.js"), d = 2, u = 500;
			s.a = function(e) {
				const {
					className: s,
					maxSupporters: t,
					supporters: n
				} = e;
				if (!n.length) return null;
				const c = n.sort((e, s) => e.supporterInfo && !s.supporterInfo ? -1 : !e.supporterInfo && s.supporterInfo ? 1 : 0).slice(0, t || u);
				return r.a.createElement("div", {
					className: Object(o.a)(s, {
						[i.a.withShade]: c.length >= d && (!t || t < n.length)
					})
				}, r.a.createElement("h3", {
					className: i.a.title
				}, l._("Recent Supporters", null, {
					hk: "1cY1Du"
				})), c.map(e => r.a.createElement(a.a, {
					className: i.a.supporter,
					key: e.lastSupportedAt,
					supporter: e
				})))
			}
		},
		"./src/reddit/components/PowerupsBanner/index.m.less": function(e, s, t) {
			e.exports = {
				container: "_38P5G15GST4eUPAZENH1XZ",
				subredditIcon: "_2PsICgQ9IucI4laZD39Wjj",
				title: "_1btgMYc3MLe93c3pP5u6pQ",
				close: "ZLMCho_R-ke7ChBFK1xO1",
				topSupporters: "_3RqpIx0_M5bywIEZ6lPORn",
				powerupsRemainingToUnlock: "_2sQhP7VXRRNpHH3UG2Z22a",
				button: "_3J31e0IlwDl0ya4KO7pxGw",
				dismissedContainer: "_3KFpl5lsUl94HuEyBYG0Do",
				dismissedText: "T-KXfxPUNvYKx67Cm5o7S"
			}
		},
		"./src/reddit/components/PowerupsBanner/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				o = t("./node_modules/react-redux/es/index.js"),
				a = t("./node_modules/reselect/es/index.js"),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/lib/localStorageAvailable/index.ts"),
				l = t("./src/reddit/constants/banners.ts"),
				d = t("./src/reddit/constants/modals.ts"),
				u = t("./src/reddit/helpers/localStorage/index.ts"),
				p = t("./src/reddit/actions/modal.ts"),
				m = t("./src/reddit/components/TrackingHelper/index.tsx"),
				x = t("./src/reddit/contexts/ApiContext.tsx"),
				b = t("./src/reddit/selectors/gold/powerups.ts"),
				_ = t("./src/reddit/selectors/subreddit.ts"),
				w = t("./src/reddit/selectors/user.ts"),
				E = t("./src/reddit/components/SubredditIcon/index.tsx"),
				N = t("./src/reddit/controls/Button/index.tsx"),
				f = t("./src/reddit/icons/svgs/Close/index.tsx"),
				h = t("./src/reddit/components/PowerupsBanner/PowerupsRemainingToUnlock/index.tsx"),
				k = t("./src/reddit/components/PowerupsBanner/Supporters/index.tsx"),
				P = t("./src/reddit/components/PowerupsBanner/index.m.less"),
				g = t.n(P);
			const {
				fbt: S
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var j;
			! function(e) {
				e.Dismissed = "dismissed", e.Hidden = "hidden", e.Select = "select"
			}(j || (j = {}));
			const v = Object(a.c)({
					currentUser: w.i,
					powerups: b.g,
					subreddit: _.R,
					topSupporters: b.h
				}),
				O = Object(m.c)(e => {
					const {
						className: s,
						currentUser: t,
						powerups: a,
						subreddit: m,
						subredditId: x,
						topSupporters: b
					} = e, [_, w] = Object(n.useState)(j.Hidden), P = Object(o.c)();
					Object(i.a)() && !Object(u.f)(l.a.POWERUPS_BANNER, x) && _ === j.Hidden && w(j.Select);
					const v = () => {
						w(j.Select), Object(u.L)(l.a.POWERUPS_BANNER, !1, x)
					};
					return t && _ !== j.Hidden && a && 1 !== a.tiersInfo.length ? _ === j.Dismissed ? r.a.createElement("div", {
						className: Object(c.a)(g.a.dismissedContainer, s)
					}, r.a.createElement("div", {
						className: g.a.dismissedText
					}, S._("Ok, we won't show you this again.", null, {
						hk: "4z33KK"
					})), r.a.createElement(N.f, {
						onClick: v
					}, S._("undo", null, {
						hk: "1A9z3Y"
					}))) : r.a.createElement("article", {
						className: Object(c.a)(g.a.container, s)
					}, m && r.a.createElement(E.b, {
						subredditOrProfile: m,
						className: g.a.subredditIcon
					}), r.a.createElement("h2", {
						className: g.a.title
					}, S._("Powerups unlock features for the whole community", null, {
						hk: "2ZaVtr"
					})), b && r.a.createElement(k.a, {
						supporters: b,
						className: g.a.topSupporters,
						maxSupporters: 3
					}), r.a.createElement(h.a, {
						className: g.a.powerupsRemainingToUnlock,
						powerups: a
					}), r.a.createElement(N.f, {
						className: g.a.button,
						onClick: () => P(Object(p.h)(d.a.ECON_POWERUPS_PURCHASE))
					}, S._("Powerup", null, {
						hk: "261t2N"
					})), r.a.createElement(f.a, {
						className: g.a.close,
						onClick: () => {
							w(j.Dismissed), Object(u.L)(l.a.POWERUPS_BANNER, !0, x)
						}
					})) : null
				});
			s.default = Object(x.b)(Object(o.b)(v)(O))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n);
			s.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), r.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		}
	}
]);
//# sourceMappingURL=reddit-components-PowerupsBanner.3946320aae0358a9dab0.js.map