// https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.4787f2b199ed2ab9b57f.js
// Retrieved at 3/10/2021, 4:50:07 PM by Reddit Dataminer v1.0.0
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				c = s("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				i = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				description: t,
				iconUrl: s,
				onClick: n,
				title: c,
				isNew: l
			}) => o.a.createElement("div", {
				className: Object(r.a)(e, i.a.container),
				onClick: n
			}, l && o.a.createElement(a.a, {
				className: i.a.new
			}), o.a.createElement("div", {
				className: i.a.icon,
				style: {
					backgroundImage: `url('${s}')`
				}
			}), c && o.a.createElement("h3", {
				className: i.a.title
			}, c), t && o.a.createElement("p", {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				c = s.n(a);
			const {
				fbt: i
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e
			}) => o.a.createElement("span", {
				className: Object(r.a)(c.a.new, e)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/config.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				i = s.n(c);
			t.a = e => o.a.createElement("header", {
				className: Object(a.a)(i.a.container, e.className)
			}, o.a.createElement("div", {
				className: i.a.imageContainer
			}, o.a.createElement("picture", null, o.a.createElement("source", {
				srcSet: `${r.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), o.a.createElement("source", {
				srcSet: `${r.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), o.a.createElement("img", {
				className: i.a.image,
				src: `${r.a.assetPath}/img/powerups/powerup.png`
			}))), o.a.createElement("div", null, o.a.createElement("h2", {
				className: i.a.title
			}, e.title), o.a.createElement("h3", {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/helpers/localStorage/index.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/selectors/gold/powerups.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				w = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/config.ts"),
				E = s("./src/reddit/helpers/trackers/powerups.ts"),
				k = s("./src/reddit/hooks/useTracking.ts"),
				h = s("./src/reddit/models/Gold/Powerups/index.ts"),
				x = s("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				N = s("./src/reddit/components/Econ/PowerupsMarketingModal/Benefits/index.m.less"),
				P = s.n(N);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var O = function(e) {
					const {
						benefits: t,
						className: s
					} = e, n = Object(k.a)(), r = [...t, h.a.HeroStatus];
					return o.a.createElement("div", {
						className: Object(u.a)(P.a.container, s)
					}, r.map(e => h.e[e] && o.a.createElement(x.a, {
						className: P.a.benefit,
						description: h.d[e](),
						iconUrl: `${f.a.assetPath}/img/powerups/${e}_v2.svg`,
						key: `cell_${e}`,
						onClick: () => {
							n(Object(E.a)())
						},
						title: h.e[e]()
					})))
				},
				j = s("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				I = s("./src/reddit/components/Econ/PowerupsMarketingModal/index.m.less"),
				C = s.n(I);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: M
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(d.t)(), v = Object(a.c)({
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
			}), W = Object(r.b)(v);
			const T = Object(c.a)(S(W((function(e) {
				var t;
				const {
					currentSubredditId: s,
					powerups: n,
					subreddit: a
				} = e, c = Object(r.d)(), d = () => c(Object(b.g)(l.a.ECON_POWERUPS_MARKETING));
				if (!s || !a || !n) return d(), null;
				const {
					tier: u,
					tiersInfo: m
				} = n, p = null === (t = m[u] || m[u - 1]) || void 0 === t ? void 0 : t.benefits;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: C.a.closeButton,
					onClick: d
				}, o.a.createElement(_.a, {
					className: C.a.closeIcon
				})), o.a.createElement("div", {
					className: C.a.container
				}, o.a.createElement("div", {
					className: C.a.main
				}, o.a.createElement(j.a, {
					title: M._("Powerup {r/community}", [M._param("r/community", a.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: M._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), o.a.createElement(O, {
					benefits: p,
					className: C.a.benefits
				}), o.a.createElement("h2", {
					className: C.a.howItWorksTitle
				}, M._("How it works", null, {
					hk: "1S8XOX"
				})), o.a.createElement("ul", {
					className: C.a.howItWorksList
				}, o.a.createElement("li", {
					className: C.a.howItWorksStep
				}, o.a.createElement("h3", {
					className: C.a.howItWorksSubtitle
				}, M._("Buy a monthly Powerup subscription", null, {
					hk: "1xgdW6"
				})), o.a.createElement("p", {
					className: C.a.howItWorksDesc
				}, M._("Or if you’re a Reddit Premium member, use your free monthly Powerup", null, {
					hk: "1mFapI"
				}))), o.a.createElement("li", {
					className: C.a.howItWorksStep
				}, o.a.createElement("h3", {
					className: C.a.howItWorksSubtitle
				}, M._("Unlock perks for yourself", null, {
					hk: "3TEvpW"
				})), o.a.createElement("p", {
					className: C.a.howItWorksDesc
				}, M._("Your Powerup gives you instant access to all the perks + badge + leaderboard", null, {
					hk: "3q4unB"
				}))), o.a.createElement("li", {
					className: C.a.howItWorksStep
				}, o.a.createElement("h3", {
					className: C.a.howItWorksSubtitle
				}, M._("Help unlock perks for your community", null, {
					hk: "1BeLmx"
				}))))), o.a.createElement("div", {
					className: C.a.footer
				}, o.a.createElement(w.i, {
					className: C.a.footerButton,
					onClick: () => {
						Object(i.nb)(l.a.ECON_POWERUPS_MARKETING, !0), c(Object(b.h)(l.a.ECON_POWERUPS_PURCHASE))
					}
				}, M._("Powerup This Community", null, {
					hk: "3gjy90"
				})))))
			}))));
			t.default = e => o.a.createElement(T, y({}, e, {
				className: Object(u.a)(e.className, C.a.modal)
			}))
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, s) {
			"use strict";
			s.d(t, "h", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/reddit/helpers/correlationIdTracker.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = (e, t, s) => ({
					...o.defaults(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !1),
					profile: o.profile(e),
					subreddit: o.subreddit(e),
					powerups: {
						...o.subredditPowerups(e),
						freeCount: t,
						paidCount: s
					}
				}),
				a = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...r(t),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta",
					...r(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				i = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...r(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				l = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...r(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
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
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				p = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...r(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsMarketingModal.4787f2b199ed2ab9b57f.js.map