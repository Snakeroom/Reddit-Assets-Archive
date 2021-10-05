// https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.6e4d716ae757c87f3f5f.js
// Retrieved at 10/5/2021, 11:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-TypingIndicators"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, s, o) {
			var t = o("./node_modules/lodash/_baseClamp.js"),
				n = o("./node_modules/lodash/_copyArray.js"),
				a = o("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, s) {
				return a(n(e), t(s, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, s) {
			var o = Math.floor,
				t = Math.random;
			e.exports = function(e, s) {
				return e + o(t() * (s - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, s, o) {
			var t = o("./node_modules/lodash/_baseClamp.js"),
				n = o("./node_modules/lodash/_shuffleSelf.js"),
				a = o("./node_modules/lodash/values.js");
			e.exports = function(e, s) {
				var o = a(e);
				return n(o, t(s, 0, o.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, s, o) {
			var t = o("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, s) {
				var o = -1,
					n = e.length,
					a = n - 1;
				for (s = void 0 === s ? n : s; ++o < s;) {
					var r = t(o, a),
						c = e[r];
					e[r] = e[o], e[o] = c
				}
				return e.length = s, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, s, o) {
			var t = o("./node_modules/lodash/_arraySampleSize.js"),
				n = o("./node_modules/lodash/_baseSampleSize.js"),
				a = o("./node_modules/lodash/isArray.js"),
				r = o("./node_modules/lodash/_isIterateeCall.js"),
				c = o("./node_modules/lodash/toInteger.js");
			e.exports = function(e, s, o) {
				return s = (o ? r(e, s, o) : void 0 === s) ? 1 : c(s), (a(e) ? t : n)(e, s)
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, s, o) {
			"use strict";
			var t = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = o("./node_modules/react/index.js"),
				a = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./node_modules/lodash/sampleSize.js"),
				d = o.n(c),
				l = o("./src/reddit/helpers/getFakeUserIcons.ts"),
				i = o("./src/reddit/hooks/useConstructor.ts"),
				m = o("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				u = o.n(m);
			const p = Object(t.a)({
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
				f = 20,
				b = 3,
				_ = e => {
					const {
						iconsKey: s,
						memberIconClassName: o,
						numVisibleIcons: t = b,
						shouldOutlinePresenceDot: c,
						shouldShowPresenceDot: m,
						shouldUseColoredSilhouetteIcons: _,
						numIconsToDrawFrom: j = (_ ? h : f),
						wrapperClassName: g
					} = e, y = Object(n.useRef)([]);
					return Object(i.a)(() => {
						const e = Object(l.a)(s, j, _);
						y.current = d()(e, t)
					}), a.a.createElement("div", {
						className: Object(r.a)(u.a.membersIcons, g)
					}, y.current.map(({
						color: e,
						image: s
					}, n) => {
						return n === t - 1 && m ? a.a.createElement("div", {
							className: u.a.presenceWrapper,
							key: n
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
							key: n,
							src: s,
							style: {
								backgroundColor: e
							}
						})
					}))
				};
			s.a = _
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
			var t = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				a = o.n(n),
				r = o("./src/realtime/GQLSubscription/async.tsx"),
				c = o("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				d = o("./src/reddit/helpers/trackers/commentsPage.ts"),
				l = o("./src/reddit/selectors/telemetry.ts");
			const i = (() => (e, s) => o => ({
				source: d.a,
				action: "view",
				noun: "typing_indicator",
				...l.defaults(o),
				actionInfo: l.actionInfo(o, {
					reason: s.toString()
				}),
				post: l.post(o, e),
				subreddit: l.subreddit(o)
			}))();
			var m = o("./src/reddit/hooks/useClassNameOnMount.ts"),
				u = o("./src/reddit/hooks/useTracking.ts"),
				p = o("./src/reddit/components/TypingIndicators/index.m.less"),
				h = o.n(p);
			s.default = e => {
				const {
					minNumUsersTyping: s,
					postId: o,
					queryKey: d,
					queryVariables: l
				} = e, [p, f] = Object(n.useState)(0), b = Object(u.a)(), _ = Object(n.useCallback)(e => {
					const {
						numUsers: s
					} = e.subscribe.data;
					s && s !== p && f(s)
				}, [p]), {
					className: j,
					shouldMount: g,
					onTransitionEnd: y
				} = Object(m.a)({
					defaultClass: h.a.typingIndicator,
					addedClass: h.a.isDisplayed,
					mountCondition: p >= s
				});
				return Object(n.useEffect)(() => {
					g && b(i(o, p))
				}, [g, o, b]), a.a.createElement(a.a.Fragment, null, a.a.createElement(r.a, {
					variables: l,
					onData: _,
					queryKey: d
				}), g && a.a.createElement("div", {
					className: j,
					onTransitionEnd: y
				}, a.a.createElement(c.a, {
					iconsKey: o,
					memberIconClassName: h.a.offsetMemberIcon,
					numVisibleIcons: s,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: h.a.offsetMembersIcons
				}), a.a.createElement("div", {
					className: h.a.numUsersTyping
				}, t.fbt._("{number of people typing} people typing", [t.fbt._param("number of people typing", p >= 2 ? p.toString() : "0")], {
					hk: "1EaTEX"
				})), a.a.createElement("div", {
					className: h.a.typingDots
				}, a.a.createElement("span", {
					className: h.a.dot
				}), a.a.createElement("span", {
					className: h.a.dot
				}), a.a.createElement("span", {
					className: h.a.dot
				}))))
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, s, o) {
			"use strict";
			var t = o("./node_modules/lodash/memoize.js"),
				n = o.n(t),
				a = o("./src/reddit/constants/categories.tsx"),
				r = o("./src/config.ts");
			const c = Array.from({
					length: 20
				}).map((e, s) => `${r.a.assetPath}/img/snoovatars/snoovatar_${s+1}.png`),
				d = Array.from({
					length: 8
				}).map((e, s) => `${r.a.processingAvatarImageUrl}/defaults/avatar_default_${s}.png`),
				l = [];
			s.a = n()((e, s = 3, o) => {
				if (!e || !s) return l;
				const t = o ? d : c,
					n = Array.from(e).reduce((e, s) => e + s.charCodeAt(0), 0);
				return Array.from({
					length: s
				}).map((e, s) => ({
					color: a.a[(n + s) % a.a.length],
					image: t[(n + s) % t.length]
				}))
			}, (e, s = 3) => `${e}_${s}`)
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, s, o) {
			"use strict";
			var t = o("./node_modules/react/index.js"),
				n = o("./src/lib/classNames/index.ts");
			s.a = ({
				defaultClass: e,
				addedClass: s,
				mountCondition: o
			}) => {
				const [a, r] = Object(t.useState)(e), [c, d] = Object(t.useState)(!1);
				Object(t.useEffect)(() => {
					o && d(!0)
				}, [o]), Object(t.useEffect)(() => {
					c && (o ? window.setTimeout(() => {
						r(Object(n.a)(e, s))
					}, 100) : r(e))
				}, [s, e, o, c]);
				const l = Object(t.useCallback)(() => {
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
				return n
			}));
			var t = o("./node_modules/react/index.js");

			function n(e) {
				const s = Object(t.useRef)(!1);
				s.current || (e(), s.current = !0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.6e4d716ae757c87f3f5f.js.map