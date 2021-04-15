// https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.9e2318b361f14936d16f.js
// Retrieved at 4/15/2021, 11:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsMarketingModal"], {
		"./src/reddit/components/Econ/Common/BenefitTile/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_3WUWb7Sw86xRHJJhjUgdZ9",
				icon: "_4UcAT87VyI5VbP6S7bhhK",
				title: "_7IEgYd0otS-qkC7jLZMRc",
				description: "_1Lmps3yUL3wlUeYBq8e1NW",
				new: "_2xYObLxCbdZPVZMoClN8r0"
			}
		},
		"./src/reddit/components/Econ/Common/BenefitTile/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				a = o("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				i = o.n(a);
			const {
				fbt: l
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				description: t,
				iconUrl: o,
				onClick: s,
				title: a,
				isNew: l
			}) => n.a.createElement("div", {
				className: Object(r.a)(e, i.a.container),
				onClick: s
			}, l && n.a.createElement(c.a, {
				className: i.a.new
			}), n.a.createElement("div", {
				className: i.a.icon,
				style: {
					backgroundImage: `url('${o}')`
				}
			}), a && n.a.createElement("h3", {
				className: i.a.title
			}, a), t && n.a.createElement("p", {
				className: i.a.description
			}, t))
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.m.less": function(e, t, o) {
			e.exports = {
				new: "_2u3fkh0zbVoixCjyXrW0_e"
			}
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				a = o.n(c);
			const {
				fbt: i
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e
			}) => n.a.createElement("span", {
				className: Object(r.a)(a.a.new, e)
			}, i._("NEW", null, {
				hk: "2P5bsM"
			}))
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less": function(e, t, o) {
			e.exports = {
				image: "_2UM9VBeA7xU3ro_DBfudN2"
			}
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			}));
			var s = o("./src/config.ts"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				c = o("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				a = o.n(c);
			const i = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement("picture", null, r.a.createElement("source", {
				srcSet: `${s.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), r.a.createElement("source", {
				srcSet: `${s.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), r.a.createElement("img", {
				className: a.a.image,
				src: `${s.a.assetPath}/img/powerups/powerup.png`
			})))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less": function(e, t, o) {
			e.exports = {
				benefit: "_8AcMAlnrsNTtD3sjdjQ-8",
				container: "_1wsC6xtrQxNdQdcEh1xPYL"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_3-wzlsd2L9K9BE7yms9IhJ",
				imageContainer: "_2moFyXtJlZerLLuTvZ9TYQ",
				title: "_258n2TylpikH2fhZLhlAgr",
				subtitle: "_1AYSLhpiU1fIwgPPxu2Xuy"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./src/lib/classNames/index.ts"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				c = o("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				a = o("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				i = o.n(a);
			t.a = e => r.a.createElement("header", {
				className: Object(s.a)(i.a.container, e.className)
			}, r.a.createElement(c.a, {
				className: i.a.imageContainer
			}), r.a.createElement("div", null, r.a.createElement("h2", {
				className: i.a.title
			}, e.title), r.a.createElement("h3", {
				className: i.a.subtitle
			}, e.subtitle)))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less": function(e, t, o) {
			e.exports = {
				modal: "_3niK6SoqYWVz3C_LHPXMDD",
				container: "_3fbFTODVaP-23SwM_RYHWW",
				main: "_1PP4a1vxBKAZclzVmYW7SH",
				closeButton: "_3TnMTOuzTBBbwZPkbtAGMt",
				closeIcon: "_1INyXtUNSTJOsv3ccmn-Xv",
				benefits: "_2aogHH2E_wc_wy_T88G9sw",
				howItWorksTitle: "Pv4vj5-Zps24hD9scZUdd",
				howItWorksList: "_48giMwZjdVcsSk4RNOioH",
				howItWorksStep: "_3zPOTfP_lw9HxZYfDSLqWV",
				howItWorksSubtitle: "_1mHfIbh68RFw-s9Cabk7Ym",
				howItWorksDesc: "_3ZrdxYotyFfYwi18Y3S3-f",
				footer: "Fy43-QYAjt3CP4mAs7x6r",
				footerButton: "HGL2YGi64zD6F6gaFCcoL",
				Icon: "_1Raz7RPI_ak_MJXOk7GsQJ",
				icon: "_1Raz7RPI_ak_MJXOk7GsQJ",
				isLeft: "_1Zshq2LYnALasR61IdhJ6e",
				isRight: "_2xT7cEnlPQg0E-E5GbHSj-"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				a = o("./src/higherOrderComponents/asModal/index.tsx"),
				i = o("./src/reddit/helpers/localStorage/index.ts"),
				l = o("./src/reddit/constants/modals.ts"),
				d = o("./src/reddit/contexts/PageLayer/index.tsx"),
				u = o("./src/lib/classNames/index.ts"),
				m = o("./src/reddit/selectors/gold/powerups.ts"),
				p = o("./src/reddit/selectors/subreddit.ts"),
				w = o("./src/reddit/actions/modal.ts"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				_ = o("./src/reddit/icons/svgs/Close/index.tsx"),
				f = o("./src/config.ts"),
				E = o("./src/reddit/helpers/trackers/powerups.ts"),
				k = o("./src/reddit/hooks/useTracking.ts"),
				h = o("./src/reddit/models/Gold/Powerups/index.ts"),
				x = o("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				P = o("./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less"),
				N = o.n(P);
			const {
				fbt: j
			} = o("./node_modules/fbt/lib/FbtPublic.js");
			var g = function(e) {
					const {
						benefits: t,
						className: o
					} = e, s = Object(k.a)(), r = [...t, h.a.HeroStatus];
					return n.a.createElement("div", {
						className: Object(u.a)(N.a.container, o)
					}, r.map(e => h.e[e] && n.a.createElement(x.a, {
						className: N.a.benefit,
						description: h.d[e](),
						iconUrl: `${f.a.assetPath}/img/powerups/${e}_v2.svg`,
						key: `cell_${e}`,
						onClick: () => {
							s(Object(E.d)())
						},
						title: h.e[e]()
					})))
				},
				O = o("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				I = o("./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less"),
				C = o.n(I);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: v
			} = o("./node_modules/fbt/lib/FbtPublic.js"), M = Object(d.t)(), S = Object(c.c)({
				currentSubredditId: d.m,
				powerups: (e, t) => {
					const o = Object(d.m)(e, t);
					return o ? Object(m.i)(e, {
						subredditId: o
					}) : null
				},
				subreddit: (e, t) => {
					const o = Object(d.m)(e, t);
					return o ? Object(p.T)(e, {
						subredditId: o
					}) : null
				}
			}), W = Object(r.b)(S);
			const T = Object(a.a)(M(W((function(e) {
				var t;
				const {
					currentSubredditId: o,
					powerups: s,
					subreddit: c
				} = e, a = Object(r.d)(), d = () => a(Object(w.g)(l.a.ECON_POWERUPS_MARKETING));
				if (!o || !c || !s) return d(), null;
				const {
					tier: u,
					tiersInfo: m
				} = s, p = null === (t = m[u] || m[u - 1]) || void 0 === t ? void 0 : t.benefits;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
					className: C.a.closeButton,
					onClick: d
				}, n.a.createElement(_.a, {
					className: C.a.closeIcon
				})), n.a.createElement("div", {
					className: C.a.container
				}, n.a.createElement("div", {
					className: C.a.main
				}, n.a.createElement(O.a, {
					title: v._("Powerup {r/community}", [v._param("r/community", c.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: v._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), n.a.createElement(g, {
					benefits: p,
					className: C.a.benefits
				}), n.a.createElement("h2", {
					className: C.a.howItWorksTitle
				}, v._("How it works", null, {
					hk: "1S8XOX"
				})), n.a.createElement("ul", {
					className: C.a.howItWorksList
				}, n.a.createElement("li", {
					className: C.a.howItWorksStep
				}, n.a.createElement("h3", {
					className: C.a.howItWorksSubtitle
				}, v._("Buy a monthly Powerup subscription", null, {
					hk: "1xgdW6"
				})), n.a.createElement("p", {
					className: C.a.howItWorksDesc
				}, v._("Or if you’re a Reddit Premium member, use your monthly Powerup", null, {
					hk: "1MD3Sh"
				}))), n.a.createElement("li", {
					className: C.a.howItWorksStep
				}, n.a.createElement("h3", {
					className: C.a.howItWorksSubtitle
				}, v._("Unlock perks for yourself", null, {
					hk: "3TEvpW"
				})), n.a.createElement("p", {
					className: C.a.howItWorksDesc
				}, v._("Your Powerup gives you instant access to all the perks + badge + leaderboard", null, {
					hk: "3q4unB"
				}))), n.a.createElement("li", {
					className: C.a.howItWorksStep
				}, n.a.createElement("h3", {
					className: C.a.howItWorksSubtitle
				}, v._("Help unlock perks for your community", null, {
					hk: "1BeLmx"
				}))))), n.a.createElement("div", {
					className: C.a.footer
				}, n.a.createElement(b.i, {
					className: C.a.footerButton,
					onClick: () => {
						Object(i.mb)(l.a.ECON_POWERUPS_MARKETING, !0), a(Object(w.h)(l.a.ECON_POWERUPS_PURCHASE))
					}
				}, v._("Powerup This Community", null, {
					hk: "3gjy90"
				})))))
			}))));
			t.default = e => n.a.createElement(T, y({}, e, {
				className: Object(u.a)(e.className, C.a.modal)
			}))
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, o) {
			"use strict";
			o.d(t, "p", (function() {
				return c
			})), o.d(t, "g", (function() {
				return a
			})), o.d(t, "k", (function() {
				return i
			})), o.d(t, "m", (function() {
				return l
			})), o.d(t, "q", (function() {
				return u
			})), o.d(t, "f", (function() {
				return m
			})), o.d(t, "j", (function() {
				return p
			})), o.d(t, "i", (function() {
				return w
			})), o.d(t, "n", (function() {
				return b
			})), o.d(t, "d", (function() {
				return _
			})), o.d(t, "e", (function() {
				return f
			})), o.d(t, "c", (function() {
				return E
			})), o.d(t, "o", (function() {
				return k
			})), o.d(t, "h", (function() {
				return h
			})), o.d(t, "a", (function() {
				return x
			})), o.d(t, "l", (function() {
				return P
			})), o.d(t, "b", (function() {
				return N
			}));
			var s = o("./src/reddit/helpers/correlationIdTracker.ts"),
				n = o("./src/reddit/selectors/telemetry.ts");
			const r = (e, t, o) => ({
					...n.defaults(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					profile: n.profile(e),
					subreddit: n.subreddit(e),
					powerups: {
						...n.subredditPowerups(e),
						freeCount: t,
						paidCount: o
					}
				}),
				c = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...r(t),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				a = () => e => ({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta",
					...r(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				i = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersup_become_hero",
					...r(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				l = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersups_see_all_heroes",
					...r(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				d = e => (t, o) => s => ({
					source: e,
					action: "click",
					noun: "powerup_supporter",
					...r(s),
					profile: {
						id: t,
						name: o,
						type: "default"
					}
				}),
				u = d("postlist_supporters_cta"),
				m = d("comm_heroes_modal"),
				p = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...r(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				w = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...r(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				b = () => e => ({
					source: "powerups",
					action: "click",
					noun: "premium",
					...r(e)
				}),
				_ = (e, t) => o => ({
					source: "powerups_modal",
					action: "click",
					noun: "benefit",
					...r(o, e, t)
				}),
				f = (e, t) => o => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...r(o, e, t)
				}),
				E = (e, t) => o => ({
					source: "global",
					action: "view",
					noun: "screen",
					...r(o, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				k = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...r(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				h = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...r(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				x = e => t => ({
					source: "powerups",
					action: "click",
					noun: "add_custom_emojis",
					...r(t),
					powerups: {
						...n.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				P = e => t => ({
					source: "powerups",
					action: "save",
					noun: "custom_emojis",
					...r(t),
					powerups: {
						...n.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				N = (e = 1) => t => ({
					source: "powerups",
					action: "delete",
					noun: "custom_emojis",
					...r(t),
					powerups: {
						...n.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.9e2318b361f14936d16f.js.map