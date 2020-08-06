// https://www.redditstatic.com/desktop2x/reddit-components-PowerupsBanner.bd47d6b49a0fda8d3b45.js
// Retrieved at 8/6/2020, 3:30:09 PM by Reddit Dataminer v1.0.0
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
				d = t.n(i);
			const {
				fbt: l
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
					className: Object(o.a)(s, d.a.container)
				}, x ? r.a.createElement(r.a.Fragment, null, r.a.createElement(c.a, {
					className: d.a.lockIcon
				}), r.a.createElement("span", null, x > 1 && l._("{remainingToUnlock} more Powerups to unlock!", [l._param("remainingToUnlock", x)], {
					hk: "2i5BvP"
				}), 1 === x && l._("Only one more Powerup to unlock!", null, {
					hk: "4bEQq5"
				}))) : r.a.createElement(r.a.Fragment, null, r.a.createElement(a.a, {
					className: d.a.checkmarkIcon
				}), r.a.createElement("span", null, l._("Unlocked by {unlockedAlready} supporters", [l._param("unlockedAlready", p)], {
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
				d = t("./src/reddit/icons/svgs/Powerup/index.tsx"),
				l = t("./src/reddit/components/PowerupsBanner/Supporters/Supporter/index.m.less"),
				u = t.n(l);
			s.a = function(e) {
				const {
					className: s,
					hideDate: t,
					supporter: r
				} = e, {
					score: l,
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
				}, o.a.createElement(d.a, {
					className: u.a.powerupIcon
				}), l))
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
				fbt: d
			} = t("./node_modules/fbt/lib/FbtPublic.js"), l = 2, u = 500;
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
						[i.a.withShade]: c.length >= l && (!t || t < n.length)
					})
				}, r.a.createElement("h3", {
					className: i.a.title
				}, d._("Supporters", null, {
					hk: "3Z3JY6"
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
				a = t("./src/reddit/hooks/useTracking.ts"),
				c = t("./node_modules/reselect/es/index.js"),
				i = t("./src/lib/classNames/index.ts"),
				d = t("./src/lib/localStorageAvailable/index.ts"),
				l = t("./src/reddit/constants/banners.ts"),
				u = t("./src/reddit/constants/modals.ts"),
				p = t("./src/reddit/helpers/localStorage/index.ts"),
				m = t("./src/reddit/helpers/trackers/powerups.ts"),
				x = t("./src/reddit/actions/modal.ts"),
				b = t("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = t("./src/reddit/contexts/ApiContext.tsx"),
				w = t("./src/reddit/selectors/gold/powerups.ts"),
				E = t("./src/reddit/selectors/subreddit.ts"),
				N = t("./src/reddit/selectors/user.ts"),
				k = t("./src/reddit/components/SubredditIcon/index.tsx"),
				P = t("./src/reddit/controls/Button/index.tsx"),
				f = t("./src/reddit/icons/svgs/Close/index.tsx"),
				S = t("./src/reddit/components/PowerupsBanner/PowerupsRemainingToUnlock/index.tsx"),
				h = t("./src/reddit/components/PowerupsBanner/Supporters/index.tsx"),
				j = t("./src/reddit/components/PowerupsBanner/index.m.less"),
				O = t.n(j);
			const {
				fbt: g
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var I;
			! function(e) {
				e.Dismissed = "dismissed", e.Hidden = "hidden", e.Select = "select"
			}(I || (I = {}));
			const B = Object(c.c)({
					currentUser: N.i,
					powerups: w.h,
					subreddit: E.R,
					topSupporters: w.i
				}),
				v = Object(b.c)(e => {
					const {
						className: s,
						currentUser: t,
						powerups: c,
						subreddit: b,
						subredditId: _,
						topSupporters: w
					} = e, [E, N] = Object(n.useState)(I.Hidden), j = Object(o.c)(), B = Object(a.a)();
					Object(d.a)() && !Object(p.f)(l.a.POWERUPS_BANNER, _) && E === I.Hidden && N(I.Select);
					const v = () => {
						N(I.Select), Object(p.K)(l.a.POWERUPS_BANNER, !1, _)
					};
					return t && E !== I.Hidden && c && 1 !== c.tiersInfo.length ? E === I.Dismissed ? r.a.createElement("div", {
						className: Object(i.a)(O.a.dismissedContainer, s)
					}, r.a.createElement("div", {
						className: O.a.dismissedText
					}, g._("Ok, we won't show you this again.", null, {
						hk: "4z33KK"
					})), r.a.createElement(P.f, {
						onClick: v
					}, g._("undo", null, {
						hk: "1A9z3Y"
					}))) : r.a.createElement("article", {
						className: Object(i.a)(O.a.container, s)
					}, b && r.a.createElement(k.b, {
						subredditOrProfile: b,
						className: O.a.subredditIcon
					}), r.a.createElement("h2", {
						className: O.a.title
					}, g._("Powerup to unlock features for the whole community", null, {
						hk: "mp9Hl"
					})), w && r.a.createElement(h.a, {
						supporters: w,
						className: O.a.topSupporters,
						maxSupporters: 3
					}), r.a.createElement(S.a, {
						className: O.a.powerupsRemainingToUnlock,
						powerups: c
					}), r.a.createElement(P.f, {
						className: O.a.button,
						onClick: () => {
							B(Object(m.d)()), j(Object(x.h)(u.a.ECON_POWERUPS_PURCHASE))
						}
					}, g._("Powerup", null, {
						hk: "261t2N"
					})), r.a.createElement(f.a, {
						className: O.a.close,
						onClick: () => {
							N(I.Dismissed), Object(p.K)(l.a.POWERUPS_BANNER, !0, _)
						}
					})) : null
				});
			s.default = Object(_.b)(Object(o.b)(B)(v))
		}
	}
]);
//# sourceMappingURL=reddit-components-PowerupsBanner.bd47d6b49a0fda8d3b45.js.map