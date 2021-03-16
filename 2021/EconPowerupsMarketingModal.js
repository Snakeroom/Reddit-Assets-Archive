// https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.faa51a708ffea1e4e3ab.js
// Retrieved at 3/16/2021, 2:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsMarketingModal"], {
		"./src/reddit/components/Econ/Common/BenefitTile/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3WUWb7Sw86xRHJJhjUgdZ9",
				icon: "_4UcAT87VyI5VbP6S7bhhK",
				title: "_7IEgYd0otS-qkC7jLZMRc",
				description: "_1Lmps3yUL3wlUeYBq8e1NW",
				new: "_2xYObLxCbdZPVZMoClN8r0"
			}
		},
		"./src/reddit/components/Econ/Common/BenefitTile/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				a = s("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				i = s.n(a);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				description: t,
				iconUrl: s,
				onClick: o,
				title: a,
				isNew: l
			}) => n.a.createElement("div", {
				className: Object(r.a)(e, i.a.container),
				onClick: o
			}, l && n.a.createElement(c.a, {
				className: i.a.new
			}), n.a.createElement("div", {
				className: i.a.icon,
				style: {
					backgroundImage: `url('${s}')`
				}
			}), a && n.a.createElement("h3", {
				className: i.a.title
			}, a), t && n.a.createElement("p", {
				className: i.a.description
			}, t))
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.m.less": function(e, t, s) {
			e.exports = {
				new: "_2u3fkh0zbVoixCjyXrW0_e"
			}
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				a = s.n(c);
			const {
				fbt: i
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e
			}) => n.a.createElement("span", {
				className: Object(r.a)(a.a.new, e)
			}, i._("NEW", null, {
				hk: "2P5bsM"
			}))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less": function(e, t, s) {
			e.exports = {
				benefit: "_8AcMAlnrsNTtD3sjdjQ-8",
				container: "_1wsC6xtrQxNdQdcEh1xPYL"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3-wzlsd2L9K9BE7yms9IhJ",
				imageContainer: "_2moFyXtJlZerLLuTvZ9TYQ",
				image: "_1TAPJ7kkx6z02TSzVnhVLW",
				title: "_258n2TylpikH2fhZLhlAgr",
				subtitle: "_1AYSLhpiU1fIwgPPxu2Xuy"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				i = s.n(a);
			t.a = e => n.a.createElement("header", {
				className: Object(c.a)(i.a.container, e.className)
			}, n.a.createElement("div", {
				className: i.a.imageContainer
			}, n.a.createElement("picture", null, n.a.createElement("source", {
				srcSet: `${r.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), n.a.createElement("source", {
				srcSet: `${r.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), n.a.createElement("img", {
				className: i.a.image,
				src: `${r.a.assetPath}/img/powerups/powerup.png`
			}))), n.a.createElement("div", null, n.a.createElement("h2", {
				className: i.a.title
			}, e.title), n.a.createElement("h3", {
				className: i.a.subtitle
			}, e.subtitle)))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/helpers/localStorage/index.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/selectors/gold/powerups.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/config.ts"),
				k = s("./src/reddit/helpers/trackers/powerups.ts"),
				E = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/models/Gold/Powerups/index.ts"),
				x = s("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				P = s("./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less"),
				N = s.n(P);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var g = function(e) {
					const {
						benefits: t,
						className: s
					} = e, o = Object(E.a)(), r = [...t, h.a.HeroStatus];
					return n.a.createElement("div", {
						className: Object(u.a)(N.a.container, s)
					}, r.map(e => h.e[e] && n.a.createElement(x.a, {
						className: N.a.benefit,
						description: h.d[e](),
						iconUrl: `${f.a.assetPath}/img/powerups/${e}_v2.svg`,
						key: `cell_${e}`,
						onClick: () => {
							o(Object(k.c)())
						},
						title: h.e[e]()
					})))
				},
				O = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				I = s("./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less"),
				C = s.n(I);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = Object(d.t)(), S = Object(c.c)({
				currentSubredditId: d.m,
				powerups: (e, t) => {
					const s = Object(d.m)(e, t);
					return s ? Object(m.i)(e, {
						subredditId: s
					}) : null
				},
				subreddit: (e, t) => {
					const s = Object(d.m)(e, t);
					return s ? Object(p.T)(e, {
						subredditId: s
					}) : null
				}
			}), W = Object(r.b)(S);
			const T = Object(a.a)(M(W((function(e) {
				var t;
				const {
					currentSubredditId: s,
					powerups: o,
					subreddit: c
				} = e, a = Object(r.d)(), d = () => a(Object(w.g)(l.a.ECON_POWERUPS_MARKETING));
				if (!s || !c || !o) return d(), null;
				const {
					tier: u,
					tiersInfo: m
				} = o, p = null === (t = m[u] || m[u - 1]) || void 0 === t ? void 0 : t.benefits;
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
				}, v._("Or if you’re a Reddit Premium member, use your free monthly Powerup", null, {
					hk: "1mFapI"
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
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return c
			})), s.d(t, "i", (function() {
				return a
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "b", (function() {
				return _
			}));
			var o = s("./src/reddit/helpers/correlationIdTracker.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const r = (e, t, s) => ({
					...n.defaults(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !1),
					profile: n.profile(e),
					subreddit: n.subreddit(e),
					powerups: {
						...n.subredditPowerups(e),
						freeCount: t,
						paidCount: s
					}
				}),
				c = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...r(t),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				a = () => e => ({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta",
					...r(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				i = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...r(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				l = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...r(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				d = (e, t) => s => ({
					source: "powerups_modal",
					action: "click",
					noun: "benefit",
					...r(s, e, t)
				}),
				u = (e, t) => s => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...r(s, e, t)
				}),
				m = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...r(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				p = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...r(e),
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				w = e => t => ({
					source: "powerups",
					action: "click",
					noun: "add_custom_emojis",
					...r(t),
					powerups: {
						...n.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				b = e => t => ({
					source: "powerups",
					action: "save",
					noun: "custom_emojis",
					...r(t),
					powerups: {
						...n.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				}),
				_ = (e = 1) => t => ({
					source: "powerups",
					action: "delete",
					noun: "custom_emojis",
					...r(t),
					powerups: {
						...n.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(o.d)(o.a.PowerupsFlow, !0)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.faa51a708ffea1e4e3ab.js.map