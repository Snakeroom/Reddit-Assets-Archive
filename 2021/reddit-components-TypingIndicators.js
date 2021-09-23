// https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.41a8c852a9edc8ef0a90.js
// Retrieved at 9/23/2021, 2:40:11 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-TypingIndicators"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, s, n) {
			var t = n("./node_modules/lodash/_baseClamp.js"),
				o = n("./node_modules/lodash/_copyArray.js"),
				a = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, s) {
				return a(o(e), t(s, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, s) {
			var n = Math.floor,
				t = Math.random;
			e.exports = function(e, s) {
				return e + n(t() * (s - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, s, n) {
			var t = n("./node_modules/lodash/_baseClamp.js"),
				o = n("./node_modules/lodash/_shuffleSelf.js"),
				a = n("./node_modules/lodash/values.js");
			e.exports = function(e, s) {
				var n = a(e);
				return o(n, t(s, 0, n.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, s, n) {
			var t = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, s) {
				var n = -1,
					o = e.length,
					a = o - 1;
				for (s = void 0 === s ? o : s; ++n < s;) {
					var r = t(n, a),
						c = e[r];
					e[r] = e[n], e[n] = c
				}
				return e.length = s, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, s, n) {
			var t = n("./node_modules/lodash/_arraySampleSize.js"),
				o = n("./node_modules/lodash/_baseSampleSize.js"),
				a = n("./node_modules/lodash/isArray.js"),
				r = n("./node_modules/lodash/_isIterateeCall.js"),
				c = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, s, n) {
				return s = (n ? r(e, s, n) : void 0 === s) ? 1 : c(s), (a(e) ? t : o)(e, s)
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./node_modules/lodash/sampleSize.js"),
				d = n.n(c),
				l = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				i = n("./src/reddit/hooks/useConstructor.ts"),
				m = n("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				u = n.n(m);
			const p = Object(t.a)({
					resolved: {},
					chunkName: () => "reddit-components-UserIcon-PresenceDot",
					isReady(e) {
						const s = this.resolve(e);
						return !1 !== this.resolved[s] && !!n.m[s]
					},
					importAsync: () => Promise.resolve().then(n.bind(null, "./src/reddit/components/UserIcon/PresenceDot.tsx")),
					requireAsync(e) {
						const s = this.resolve(e);
						return this.resolved[s] = !1, this.importAsync(e).then(e => (this.resolved[s] = !0, e))
					},
					requireSync(e) {
						const s = this.resolve(e);
						return n(s)
					},
					resolve() {
						return "./src/reddit/components/UserIcon/PresenceDot.tsx"
					}
				}),
				h = 20,
				_ = 3,
				f = e => {
					const {
						iconsKey: s,
						isOutlinePresenceDot: n,
						isShowPresenceDot: t,
						numIconsToDrawFrom: c = h,
						numVisibleIcons: m = _
					} = e, f = Object(o.useRef)([]);
					return Object(i.a)(() => {
						const e = Object(l.a)(s, c);
						f.current = d()(e, m)
					}), a.a.createElement("div", {
						className: u.a.membersIcons
					}, f.current.map(({
						color: e,
						image: s
					}, o) => {
						return o === m - 1 ? a.a.createElement("div", {
							className: u.a.presenceWrapper,
							key: o
						}, a.a.createElement("img", {
							className: u.a.memberIcon,
							src: s,
							style: {
								backgroundColor: e
							}
						}), t && a.a.createElement(p, {
							showPresence: !0,
							outlineClassName: Object(r.a)({
								[u.a.presenceDotClass]: n
							})
						})) : a.a.createElement("img", {
							className: u.a.memberIcon,
							key: o,
							src: s,
							style: {
								backgroundColor: e
							}
						})
					}))
				};
			s.a = f
		},
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, s, n) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e",
				presenceDotClass: "_29m-SAo1wzA0dkdfJutrjs"
			}
		},
		"./src/reddit/components/TypingIndicators/index.tsx": function(e, s, n) {
			"use strict";
			n.r(s);
			var t = n("./node_modules/react/index.js"),
				o = n.n(t),
				a = n("./src/realtime/GQLSubscription/async.tsx"),
				r = n("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				c = n("./src/reddit/selectors/telemetry.ts");
			const d = (() => e => s => ({
				source: "comment_composer",
				action: "view",
				noun: "typing_indicator",
				...c.defaults(s),
				post: c.post(s, e),
				subreddit: c.subreddit(s)
			}))();
			var l = n("./src/reddit/hooks/useClassNameOnMount.ts"),
				i = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/components/TypingIndicators/index.m.less"),
				u = n.n(m);
			s.default = e => {
				const {
					minNumUsersTyping: s,
					postId: n,
					queryKey: c,
					queryVariables: m
				} = e, [p, h] = Object(t.useState)(0), _ = Object(i.a)(), f = Object(t.useCallback)(e => {
					const {
						numUsers: s
					} = e.subscribe.data;
					s && s !== p && h(s)
				}, [p]), {
					className: b,
					shouldMount: j,
					onTransitionEnd: v
				} = Object(l.a)({
					defaultClass: u.a.typingIndicator,
					addedClass: u.a.isDisplayed,
					mountCondition: p >= s
				});
				return Object(t.useEffect)(() => {
					j && _(d(n))
				}, [j, n, _]), o.a.createElement(o.a.Fragment, null, o.a.createElement(a.a, {
					variables: m,
					onData: f,
					queryKey: c
				}), j && o.a.createElement("div", {
					className: b,
					onTransitionEnd: v
				}, o.a.createElement(r.a, {
					iconsKey: n,
					isShowPresenceDot: !0
				}), o.a.createElement("div", {
					className: u.a.numUsersTyping
				}, p), o.a.createElement("div", {
					className: u.a.typingDots
				}, o.a.createElement("span", {
					className: u.a.dot
				}), o.a.createElement("span", {
					className: u.a.dot
				}), o.a.createElement("span", {
					className: u.a.dot
				}))))
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/lodash/memoize.js"),
				o = n.n(t),
				a = n("./src/reddit/constants/categories.tsx"),
				r = n("./src/config.ts");
			const c = Array.from({
					length: 20
				}).map((e, s) => `${r.a.assetPath}/img/snoovatars/snoovatar_${s+1}.png`),
				d = [];
			s.a = o()((e, s = 3) => {
				if (!e || !s) return d;
				const n = Array.from(e).reduce((e, s) => e + s.charCodeAt(0), 0);
				return Array.from({
					length: s
				}).map((e, s) => ({
					color: a.a[(n + s) % a.a.length],
					image: c[(n + s) % c.length]
				}))
			}, (e, s = 3) => `${e}_${s}`)
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				o = n("./src/lib/classNames/index.ts");
			s.a = ({
				defaultClass: e,
				addedClass: s,
				mountCondition: n
			}) => {
				const [a, r] = Object(t.useState)(e), [c, d] = Object(t.useState)(!1);
				Object(t.useEffect)(() => {
					n && d(!0)
				}, [n]), Object(t.useEffect)(() => {
					c && (n ? window.setTimeout(() => {
						r(Object(o.a)(e, s))
					}, 100) : r(e))
				}, [s, e, n, c]);
				const l = Object(t.useCallback)(() => {
					n || d(!1)
				}, [n]);
				return {
					className: a,
					shouldMount: c,
					onTransitionEnd: l
				}
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, s, n) {
			"use strict";
			n.d(s, "a", (function() {
				return o
			}));
			var t = n("./node_modules/react/index.js");

			function o(e) {
				const s = Object(t.useRef)(!1);
				s.current || (e(), s.current = !0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.41a8c852a9edc8ef0a90.js.map