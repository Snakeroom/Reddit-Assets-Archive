// https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.c09c89dfd8514dbb8192.js
// Retrieved at 9/29/2021, 3:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-TypingIndicators"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, s, o) {
			var n = o("./node_modules/lodash/_baseClamp.js"),
				t = o("./node_modules/lodash/_copyArray.js"),
				a = o("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, s) {
				return a(t(e), n(s, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, s) {
			var o = Math.floor,
				n = Math.random;
			e.exports = function(e, s) {
				return e + o(n() * (s - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, s, o) {
			var n = o("./node_modules/lodash/_baseClamp.js"),
				t = o("./node_modules/lodash/_shuffleSelf.js"),
				a = o("./node_modules/lodash/values.js");
			e.exports = function(e, s) {
				var o = a(e);
				return t(o, n(s, 0, o.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, s, o) {
			var n = o("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, s) {
				var o = -1,
					t = e.length,
					a = t - 1;
				for (s = void 0 === s ? t : s; ++o < s;) {
					var r = n(o, a),
						c = e[r];
					e[r] = e[o], e[o] = c
				}
				return e.length = s, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, s, o) {
			var n = o("./node_modules/lodash/_arraySampleSize.js"),
				t = o("./node_modules/lodash/_baseSampleSize.js"),
				a = o("./node_modules/lodash/isArray.js"),
				r = o("./node_modules/lodash/_isIterateeCall.js"),
				c = o("./node_modules/lodash/toInteger.js");
			e.exports = function(e, s, o) {
				return s = (o ? r(e, s, o) : void 0 === s) ? 1 : c(s), (a(e) ? n : t)(e, s)
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, s, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				t = o("./node_modules/react/index.js"),
				a = o.n(t),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./node_modules/lodash/sampleSize.js"),
				d = o.n(c),
				l = o("./src/reddit/helpers/getFakeUserIcons.ts"),
				m = o("./src/reddit/hooks/useConstructor.ts"),
				i = o("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				u = o.n(i);
			const p = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-UserIcon-PresenceDot",
					isReady(e) {
						const s = this.resolve(e);
						return !1 !== this.resolved[s] && !!o.m[s]
					},
					importAsync: () => Promise.resolve().then(o.bind(null, "./src/reddit/components/UserIcon/PresenceDot.tsx")),
					requireAsync(e) {
						const s = this.resolve(e);
						return this.resolved[s] = !1, this.importAsync(e).then(e => (this.resolved[s] = !0, e))
					},
					requireSync(e) {
						const s = this.resolve(e);
						return o(s)
					},
					resolve() {
						return "./src/reddit/components/UserIcon/PresenceDot.tsx"
					}
				}),
				h = 8,
				_ = 20,
				f = 3,
				b = e => {
					const {
						iconsKey: s,
						memberIconClassName: o,
						numVisibleIcons: n = f,
						shouldOutlinePresenceDot: c,
						shouldShowPresenceDot: i,
						shouldUseColoredSilhouetteIcons: b,
						numIconsToDrawFrom: j = (b ? h : _),
						wrapperClassName: v
					} = e, y = Object(t.useRef)([]);
					return Object(m.a)(() => {
						const e = Object(l.a)(s, j, b);
						y.current = d()(e, n)
					}), a.a.createElement("div", {
						className: Object(r.a)(u.a.membersIcons, v)
					}, y.current.map(({
						color: e,
						image: s
					}, t) => {
						return t === n - 1 && i ? a.a.createElement("div", {
							className: u.a.presenceWrapper,
							key: t
						}, a.a.createElement("img", {
							className: Object(r.a)(u.a.memberIcon, o),
							src: s,
							style: {
								backgroundColor: e
							}
						}), a.a.createElement(p, {
							showPresence: !0,
							outlineClassName: Object(r.a)({
								[u.a.presenceDotClass]: c
							})
						})) : a.a.createElement("img", {
							className: Object(r.a)(u.a.memberIcon, o),
							key: t,
							src: s,
							style: {
								backgroundColor: e
							}
						})
					}))
				};
			s.a = b
		},
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, s, o) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e",
				presenceDotClass: "_29m-SAo1wzA0dkdfJutrjs"
			}
		},
		"./src/reddit/components/TypingIndicators/index.tsx": function(e, s, o) {
			"use strict";
			o.r(s);
			var n = o("./node_modules/react/index.js"),
				t = o.n(n),
				a = o("./src/realtime/GQLSubscription/async.tsx"),
				r = o("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				c = o("./src/reddit/selectors/telemetry.ts");
			const d = (() => e => s => ({
				source: "comment_composer",
				action: "view",
				noun: "typing_indicator",
				...c.defaults(s),
				post: c.post(s, e),
				subreddit: c.subreddit(s)
			}))();
			var l = o("./src/reddit/hooks/useClassNameOnMount.ts"),
				m = o("./src/reddit/hooks/useTracking.ts"),
				i = o("./src/reddit/components/TypingIndicators/index.m.less"),
				u = o.n(i);
			s.default = e => {
				const {
					minNumUsersTyping: s,
					postId: o,
					queryKey: c,
					queryVariables: i
				} = e, [p, h] = Object(n.useState)(0), _ = Object(m.a)(), f = Object(n.useCallback)(e => {
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
				return Object(n.useEffect)(() => {
					j && _(d(o))
				}, [j, o, _]), t.a.createElement(t.a.Fragment, null, t.a.createElement(a.a, {
					variables: i,
					onData: f,
					queryKey: c
				}), j && t.a.createElement("div", {
					className: b,
					onTransitionEnd: v
				}, t.a.createElement(r.a, {
					iconsKey: o,
					memberIconClassName: u.a.offsetMemberIcon,
					numVisibleIcons: s,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: u.a.offsetMembersIcons
				}), t.a.createElement("div", {
					className: u.a.numUsersTyping
				}, p), t.a.createElement("div", {
					className: u.a.typingDots
				}, t.a.createElement("span", {
					className: u.a.dot
				}), t.a.createElement("span", {
					className: u.a.dot
				}), t.a.createElement("span", {
					className: u.a.dot
				}))))
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, s, o) {
			"use strict";
			var n = o("./node_modules/lodash/memoize.js"),
				t = o.n(n),
				a = o("./src/reddit/constants/categories.tsx"),
				r = o("./src/config.ts");
			const c = Array.from({
					length: 20
				}).map((e, s) => `${r.a.assetPath}/img/snoovatars/snoovatar_${s+1}.png`),
				d = Array.from({
					length: 8
				}).map((e, s) => `${r.a.processingAvatarImageUrl}/defaults/avatar_default_${s}.png`),
				l = [];
			s.a = t()((e, s = 3, o) => {
				if (!e || !s) return l;
				const n = o ? d : c,
					t = Array.from(e).reduce((e, s) => e + s.charCodeAt(0), 0);
				return Array.from({
					length: s
				}).map((e, s) => ({
					color: a.a[(t + s) % a.a.length],
					image: n[(t + s) % n.length]
				}))
			}, (e, s = 3) => `${e}_${s}`)
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, s, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				t = o("./src/lib/classNames/index.ts");
			s.a = ({
				defaultClass: e,
				addedClass: s,
				mountCondition: o
			}) => {
				const [a, r] = Object(n.useState)(e), [c, d] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					o && d(!0)
				}, [o]), Object(n.useEffect)(() => {
					c && (o ? window.setTimeout(() => {
						r(Object(t.a)(e, s))
					}, 100) : r(e))
				}, [s, e, o, c]);
				const l = Object(n.useCallback)(() => {
					o || d(!1)
				}, [o]);
				return {
					className: a,
					shouldMount: c,
					onTransitionEnd: l
				}
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, s, o) {
			"use strict";
			o.d(s, "a", (function() {
				return t
			}));
			var n = o("./node_modules/react/index.js");

			function t(e) {
				const s = Object(n.useRef)(!1);
				s.current || (e(), s.current = !0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.c09c89dfd8514dbb8192.js.map