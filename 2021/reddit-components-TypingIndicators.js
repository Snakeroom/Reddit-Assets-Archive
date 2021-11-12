// https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.e4053b493994786bcf08.js
// Retrieved at 11/11/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-TypingIndicators"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, s, t) {
			var n = t("./node_modules/lodash/_baseClamp.js"),
				o = t("./node_modules/lodash/_copyArray.js"),
				r = t("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, s) {
				return r(o(e), n(s, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, s) {
			var t = Math.floor,
				n = Math.random;
			e.exports = function(e, s) {
				return e + t(n() * (s - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, s, t) {
			var n = t("./node_modules/lodash/_baseClamp.js"),
				o = t("./node_modules/lodash/_shuffleSelf.js"),
				r = t("./node_modules/lodash/values.js");
			e.exports = function(e, s) {
				var t = r(e);
				return o(t, n(s, 0, t.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, s, t) {
			var n = t("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, s) {
				var t = -1,
					o = e.length,
					r = o - 1;
				for (s = void 0 === s ? o : s; ++t < s;) {
					var a = n(t, r),
						c = e[a];
					e[a] = e[t], e[t] = c
				}
				return e.length = s, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, s, t) {
			var n = t("./node_modules/lodash/_arraySampleSize.js"),
				o = t("./node_modules/lodash/_baseSampleSize.js"),
				r = t("./node_modules/lodash/isArray.js"),
				a = t("./node_modules/lodash/_isIterateeCall.js"),
				c = t("./node_modules/lodash/toInteger.js");
			e.exports = function(e, s, t) {
				return s = (t ? a(e, s, t) : void 0 === s) ? 1 : c(s), (r(e) ? n : o)(e, s)
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = t("./node_modules/react/index.js"),
				r = t.n(o),
				a = t("./src/lib/classNames/index.ts"),
				c = t("./node_modules/lodash/sampleSize.js"),
				l = t.n(c),
				d = t("./src/reddit/helpers/getFakeUserIcons.ts"),
				u = t("./src/reddit/hooks/useConstructor.ts"),
				i = t("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = t.n(i);
			const p = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-UserIcon-PresenceDot",
					isReady(e) {
						const s = this.resolve(e);
						return !1 !== this.resolved[s] && !!t.m[s]
					},
					importAsync: () => Promise.resolve().then(t.bind(null, "./src/reddit/components/UserIcon/PresenceDot.tsx")),
					requireAsync(e) {
						const s = this.resolve(e);
						return this.resolved[s] = !1, this.importAsync(e).then(e => (this.resolved[s] = !0, e))
					},
					requireSync(e) {
						const s = this.resolve(e);
						return t(s)
					},
					resolve() {
						return "./src/reddit/components/UserIcon/PresenceDot.tsx"
					}
				}),
				f = 8,
				b = 20,
				h = 3,
				_ = e => {
					const {
						iconsKey: s,
						memberIconClassName: t,
						numVisibleIcons: n = h,
						shouldOutlinePresenceDot: c,
						shouldShowPresenceDot: i,
						shouldUseColoredSilhouetteIcons: _,
						numIconsToDrawFrom: j = (_ ? f : b),
						wrapperClassName: I
					} = e, g = Object(o.useRef)([]);
					return Object(u.a)(() => {
						const e = Object(d.a)(s, j, _);
						g.current = l()(e, n)
					}), r.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, I)
					}, g.current.map(({
						color: e,
						image: s
					}, o) => {
						return o === n - 1 && i ? r.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: o
						}, r.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, t),
							src: s,
							style: {
								backgroundColor: e
							}
						}), r.a.createElement(p, {
							showPresence: !0,
							outlineClassName: Object(a.a)({
								[m.a.presenceDotClass]: c
							})
						})) : r.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, t),
							key: o,
							src: s,
							style: {
								backgroundColor: e
							}
						})
					}))
				};
			s.a = _
		},
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, s, t) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e",
				presenceDotClass: "_29m-SAo1wzA0dkdfJutrjs"
			}
		},
		"./src/reddit/components/TypingIndicators/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				o = t("./node_modules/react/index.js"),
				r = t.n(o),
				a = t("./src/realtime/GQLSubscription/async.tsx"),
				c = t("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				l = t("./src/reddit/helpers/trackers/commentsPage.ts"),
				d = t("./src/reddit/selectors/telemetry.ts");
			const u = (() => (e, s) => t => ({
				source: l.a,
				action: "view",
				noun: "typing_indicator",
				...d.defaults(t),
				actionInfo: d.actionInfo(t, {
					reason: s.toString()
				}),
				post: d.post(t, e),
				subreddit: d.subreddit(t)
			}))();
			var i = t("./src/reddit/hooks/useClassNameOnMount.ts"),
				m = t("./src/reddit/hooks/useTracking.ts"),
				p = t("./src/reddit/components/TypingIndicators/constants.ts"),
				f = t("./src/reddit/components/TypingIndicators/index.m.less"),
				b = t.n(f);
			s.default = e => {
				const s = Object(o.useRef)(null),
					t = Object(o.useRef)(0),
					{
						minNumUsersTyping: l,
						minTimeVisible: d,
						postId: f
					} = e,
					[h, _] = Object(o.useState)(0),
					[j, I] = Object(o.useState)(null),
					g = Object(m.a)(),
					O = Object(o.useMemo)(() => ({
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "POST_TYPING_INDICATOR",
								postID: f
							}
						}
					}), [f]),
					v = Object(o.useRef)(null),
					y = Object(o.useRef)(null),
					C = Object(o.useRef)(0),
					N = Object(o.useCallback)(e => {
						const {
							numUsers: s
						} = e.subscribe.data, t = () => {
							y.current && clearTimeout(y.current), y.current = setTimeout(() => {
								_(0), I(null), y.current = null
							}, p.b)
						}, n = () => setTimeout(() => {
							C.current ? (_(C.current), C.current = null, v.current = n(), t()) : v.current = null
						}, p.a);
						v.current ? C.current = s : (_(s), C.current = null, v.current = n(), t())
					}, []);
				Object(o.useEffect)(() => {
					if (h >= l) return t.current = h, void(j || (s.current && clearTimeout(s.current), I(Date.now())));
					if (!j) return;
					const e = Date.now() - j;
					e > d ? I(null) : s.current = setTimeout(() => I(null), d - e)
				}, [j, d, h, l]);
				const {
					className: E,
					shouldMount: S,
					onTransitionEnd: T
				} = Object(i.a)({
					defaultClass: b.a.typingIndicator,
					addedClass: b.a.isDisplayed,
					mountCondition: !!j
				});
				return Object(o.useEffect)(() => {
					S && g(u(f, h))
				}, [S, f, g, h]), r.a.createElement(r.a.Fragment, null, r.a.createElement(a.a, {
					variables: O,
					onData: N,
					queryKey: "postTypingIndicator"
				}), S && r.a.createElement("div", {
					className: E,
					onTransitionEnd: T
				}, r.a.createElement(c.a, {
					iconsKey: f,
					memberIconClassName: b.a.offsetMemberIcon,
					numVisibleIcons: l,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: b.a.offsetMembersIcons
				}), r.a.createElement("div", {
					className: b.a.numUsersTyping
				}, n.fbt._("{number of people typing} people typing", [n.fbt._param("number of people typing", t.current.toString())], {
					hk: "1EaTEX"
				})), r.a.createElement("div", {
					className: b.a.typingDots
				}, r.a.createElement("span", {
					className: b.a.dot
				}), r.a.createElement("span", {
					className: b.a.dot
				}), r.a.createElement("span", {
					className: b.a.dot
				}))))
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/lodash/memoize.js"),
				o = t.n(n),
				r = t("./src/reddit/constants/categories.tsx"),
				a = t("./src/config.ts");
			const c = Array.from({
					length: 20
				}).map((e, s) => `${a.a.assetPath}/img/snoovatars/snoovatar_${s+1}.png`),
				l = Array.from({
					length: 8
				}).map((e, s) => `${a.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${s}.png`),
				d = [];
			s.a = o()((e, s = 3, t) => {
				if (!e || !s) return d;
				const n = t ? l : c,
					o = Array.from(e).reduce((e, s) => e + s.charCodeAt(0), 0);
				return Array.from({
					length: s
				}).map((e, s) => ({
					color: r.a[(o + s) % r.a.length],
					image: n[(o + s) % n.length]
				}))
			}, (e, s = 3) => `${e}_${s}`)
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				o = t("./src/lib/classNames/index.ts");
			s.a = ({
				defaultClass: e,
				addedClass: s,
				mountCondition: t
			}) => {
				const [r, a] = Object(n.useState)(e), [c, l] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					t && l(!0)
				}, [t]), Object(n.useEffect)(() => {
					c && (t ? window.setTimeout(() => {
						a(Object(o.a)(e, s))
					}, 100) : a(e))
				}, [s, e, t, c]);
				const d = Object(n.useCallback)(() => {
					t || l(!1)
				}, [t]);
				return {
					className: r,
					shouldMount: c,
					onTransitionEnd: d
				}
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return o
			}));
			var n = t("./node_modules/react/index.js");

			function o(e) {
				const s = Object(n.useRef)(!1);
				s.current || (e(), s.current = !0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.e4053b493994786bcf08.js.map