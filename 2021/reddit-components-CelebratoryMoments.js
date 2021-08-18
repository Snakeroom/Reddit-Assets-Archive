// https://www.redditstatic.com/desktop2x/reddit-components-CelebratoryMoments.0f87c7e1eb4074cf7d1a.js
// Retrieved at 8/18/2021, 7:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CelebratoryMoments"], {
		"./src/reddit/components/CelebratoryMoments/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const o = 700,
				s = 1400,
				r = 1500
		},
		"./src/reddit/components/CelebratoryMoments/index.m.less": function(e, t, n) {
			e.exports = {
				celebratoryMoment: "_2xnhyEZQ8_jyZUi7iiFMr0",
				celebratoryMomentsIcon: "_3PmNUor31R_ILt6BADAnBU",
				popInPopOut: "Nj8rTA5E3rdkSflgMCd8k",
				speechBubble: "_2o-8RZhZsEsP0RU_LLYFpN",
				fade: "_1nsD4-B7cf1MwTMoF-QEEL"
			}
		},
		"./src/reddit/components/CelebratoryMoments/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/celebratoryMoments/index.ts"),
				d = n("./src/reddit/components/CelebratoryMoments/constants.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts"),
				l = n("./src/reddit/selectors/telemetry.ts");
			const b = (() => ({
				numCooldownPeriodDays: e,
				postId: t
			}) => n => ({
				source: "global",
				action: "view",
				noun: "celebratory_snoo",
				...l.defaults(n),
				actionInfo: l.actionInfo(n, {
					reason: e > 0 ? `celebratory_snoo_${e}_day` : void 0
				}),
				post: t ? l.post(n, t) : void 0,
				subreddit: l.subreddit(n)
			}))();
			var m = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/selectors/experiments/celebratoryMoments.ts"),
				w = n("./src/reddit/selectors/userPrefs.ts"),
				_ = n("./src/reddit/components/CelebratoryMoments/index.m.less"),
				h = n.n(_),
				f = n("./src/config.ts");
			const p = e => {
				const {
					iconUrl: t,
					minWindowWidthInPx: n,
					text: o
				} = e, s = Object(c.d)(), l = Object(m.a)(), _ = Object(c.e)(e => Object(w.c)(e)), f = Object(c.e)(e => Object(u.b)(e)), p = r.a.useRef(Date.now()), y = (() => {
					const [e, t] = r.a.useState({
						height: window.innerHeight,
						width: window.innerWidth
					});
					return r.a.useEffect(() => {
						const e = () => {
							t({
								height: window.innerHeight,
								width: window.innerWidth
							})
						};
						return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e)
					}, []), e
				})();
				let j = y.height >= d.a;
				n && (j = j && y.width >= n);
				const E = !_ && ((e, t) => {
					const n = Object(a.w)();
					return 0 !== e && !(n && t - n < 864e5 * e)
				})(f, p.current) && j;
				r.a.useEffect(() => {
					E || s(Object(i.b)())
				}, []);
				const O = Object(c.e)(e => Object(u.a)(e));
				return E ? r.a.createElement("div", {
					className: h.a.celebratoryMoment,
					onAnimationEnd: e => {
						s(Object(i.b)()), l(b({
							numCooldownPeriodDays: f,
							postId: O
						})), Object(a.Bb)(Date.now())
					}
				}, r.a.createElement("div", {
					className: h.a.speechBubble
				}, o), r.a.createElement("img", {
					className: h.a.celebratoryMomentsIcon,
					alt: "Celebratory moments icon",
					src: t
				})) : null
			};
			p.defaultProps = {
				iconUrl: `${f.a.assetPath}/img/celebratory-moments/arms-out-snoo.png`,
				minWindowWidthInPx: d.c,
				text: o.fbt._("Thanks for voting", null, {
					hk: "2jHqAn"
				})
			};
			t.default = p
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CelebratoryMoments.0f87c7e1eb4074cf7d1a.js.map