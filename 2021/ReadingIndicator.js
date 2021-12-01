// https://www.redditstatic.com/desktop2x/ReadingIndicator.eb4769a47606a063f5a7.js
// Retrieved at 12/1/2021, 1:50:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReadingIndicator"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, s, n) {
			var t = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/_copyArray.js"),
				o = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, s) {
				return o(r(e), t(s, 0, e.length))
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
				r = n("./node_modules/lodash/_shuffleSelf.js"),
				o = n("./node_modules/lodash/values.js");
			e.exports = function(e, s) {
				var n = o(e);
				return r(n, t(s, 0, n.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, s, n) {
			var t = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, s) {
				var n = -1,
					r = e.length,
					o = r - 1;
				for (s = void 0 === s ? r : s; ++n < s;) {
					var a = t(n, o),
						c = e[a];
					e[a] = e[n], e[n] = c
				}
				return e.length = s, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, s, n) {
			var t = n("./node_modules/lodash/_arraySampleSize.js"),
				r = n("./node_modules/lodash/_baseSampleSize.js"),
				o = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js"),
				c = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, s, n) {
				return s = (n ? a(e, s, n) : void 0 === s) ? 1 : c(s), (o(e) ? t : r)(e, s)
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./node_modules/lodash/sampleSize.js"),
				d = n.n(c),
				l = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				u = n("./src/reddit/hooks/useConstructor.ts"),
				i = n("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = n.n(i);
			const b = Object(t.a)({
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
				f = 8,
				p = 20,
				h = 3,
				_ = e => {
					const {
						iconsKey: s,
						memberIconClassName: n,
						numVisibleIcons: t = h,
						presenceDotOutlineClassName: c,
						shouldShowPresenceDot: i,
						shouldUseColoredSilhouetteIcons: _,
						numIconsToDrawFrom: j = (_ ? f : p),
						wrapperClassName: I
					} = e, O = Object(r.useRef)([]);
					return Object(u.a)(() => {
						const e = Object(l.a)(s, j, _);
						O.current = d()(e, t)
					}), o.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, I)
					}, O.current.map(({
						color: e,
						image: s
					}, r) => {
						return r === t - 1 && i ? o.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: r
						}, o.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, n),
							src: s,
							style: {
								backgroundColor: e
							}
						}), o.a.createElement(b, {
							showPresence: !0,
							outlineClassName: c
						})) : o.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, n),
							key: r,
							src: s,
							style: {
								backgroundColor: e
							}
						})
					}))
				};
			s.a = _
		},
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, s, n) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e"
			}
		},
		"./src/reddit/components/ReadingIndicator/index.m.less": function(e, s, n) {
			e.exports = {
				readingIndicator: "_1uHz4YY7qiPGVa7nGIRrUX",
				isDisplayed: "_nvbopN4sT4l-fhb9ev1",
				offsetMembersIconsWrapper: "YvPNtp9JRY5iwtzRqupcd",
				offsetMemberIcon: "_1xtGJrgHGU1J3vR6qXj7Fh"
			}
		},
		"./src/reddit/components/ReadingIndicator/index.tsx": function(e, s, n) {
			"use strict";
			n.r(s), n.d(s, "formatPresenceNumber", (function() {
				return h
			}));
			var t = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./node_modules/lodash/noop.js"),
				a = n.n(o),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./src/realtime/GQLSubscription/async.tsx"),
				u = n("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				i = n("./src/reddit/helpers/trackers/post.ts"),
				m = n("./src/reddit/hooks/useClassNameOnMount.ts"),
				b = n("./src/reddit/hooks/useTracking.ts");
			var f = n("./src/reddit/components/ReadingIndicator/index.m.less"),
				p = n.n(f);
			const h = e => e > 9999 ? Object(r.b)(e) : e.toString();
			s.default = ({
				isReadingIndicatorsExperiment: e,
				isReadLoadTest: s,
				isWriteLoadTest: n,
				postId: r
			}) => {
				const o = Object(c.useMemo)(() => ({
						teamOwner: "CONTENT_AND_COMMUNITIES",
						postID: r
					}), [r]),
					f = Object(c.useMemo)(() => ({
						input: {
							channel: {
								...o,
								category: "USER_IS_READING_POST"
							}
						}
					}), [r]),
					_ = Object(c.useMemo)(() => ({
						input: {
							channel: {
								...o,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [r]),
					j = Object(c.useRef)(null),
					I = Object(c.useRef)(null),
					O = Object(c.useRef)(0),
					[g, v] = Object(c.useState)(0),
					R = Object(c.useCallback)(e => {
						const {
							numUsers: s
						} = e.subscribe.data, n = () => {
							I.current && clearTimeout(I.current), I.current = setTimeout(() => {
								v(0), N(null), I.current = null
							}, 3e4)
						}, t = () => setTimeout(() => {
							O.current ? (v(O.current), O.current = null, j.current = t(), n()) : j.current = null
						}, 2e3);
						j.current ? O.current = s : (v(s), O.current = null, j.current = t(), n())
					}, []),
					C = Object(c.useRef)(0),
					[y, N] = Object(c.useState)(null),
					S = Object(c.useRef)(null);
				Object(c.useEffect)(() => {
					if (!e) return void(y && N(null));
					if (g >= 5) return C.current = g, void(y || N(Date.now()));
					if (!y) return;
					const s = Date.now() - y;
					s >= 1e4 ? N(null) : S.current = setTimeout(() => N(null), 1e4 - s)
				}, [y, e, g]);
				const {
					className: x,
					shouldMount: E,
					onTransitionEnd: D
				} = Object(m.a)({
					defaultClass: p.a.readingIndicator,
					addedClass: p.a.isDisplayed,
					mountCondition: !!y
				}), A = Object(b.a)();
				return Object(c.useEffect)(() => {
					E && A(Object(i.q)(r, g))
				}, [A, E, r]), d.a.createElement(d.a.Fragment, null, n && d.a.createElement(l.a, {
					variables: f,
					onData: a.a,
					queryKey: "userIsReadingPost"
				}), (s || e) && d.a.createElement(l.a, {
					variables: _,
					onData: e ? R : a.a,
					queryKey: "usersReadingIndicator"
				}), E && d.a.createElement("div", {
					className: x,
					onTransitionEnd: D
				}, t.fbt._("{number of users reading} people here", [t.fbt._param("number of users reading", h(C.current))], {
					hk: "3foy5g"
				}), d.a.createElement(u.a, {
					memberIconClassName: p.a.offsetMemberIcon,
					iconsKey: r,
					numVisibleIcons: 2,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: p.a.offsetMembersIconsWrapper
				})))
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/lodash/memoize.js"),
				r = n.n(t),
				o = n("./src/reddit/constants/categories.tsx"),
				a = n("./src/config.ts");
			const c = Array.from({
					length: 20
				}).map((e, s) => `${a.a.assetPath}/img/snoovatars/snoovatar_${s+1}.png`),
				d = Array.from({
					length: 8
				}).map((e, s) => `${a.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${s}.png`),
				l = [];
			s.a = r()((e, s = 3, n) => {
				if (!e || !s) return l;
				const t = n ? d : c,
					r = Array.from(e).reduce((e, s) => e + s.charCodeAt(0), 0);
				return Array.from({
					length: s
				}).map((e, s) => ({
					color: o.a[(r + s) % o.a.length],
					image: t[(r + s) % t.length]
				}))
			}, (e, s = 3) => `${e}_${s}`)
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, s, n) {
			"use strict";
			var t = n("./node_modules/react/index.js"),
				r = n("./src/lib/classNames/index.ts");
			s.a = ({
				defaultClass: e,
				addedClass: s,
				mountCondition: n
			}) => {
				const [o, a] = Object(t.useState)(e), [c, d] = Object(t.useState)(!1);
				Object(t.useEffect)(() => {
					n && d(!0)
				}, [n]), Object(t.useEffect)(() => {
					c && (n ? window.setTimeout(() => {
						a(Object(r.a)(e, s))
					}, 100) : a(e))
				}, [s, e, n, c]);
				const l = Object(t.useCallback)(() => {
					n || d(!1)
				}, [n]);
				return {
					className: o,
					shouldMount: c,
					onTransitionEnd: l
				}
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, s, n) {
			"use strict";
			n.d(s, "a", (function() {
				return r
			}));
			var t = n("./node_modules/react/index.js");

			function r(e) {
				const s = Object(t.useRef)(!1);
				s.current || (e(), s.current = !0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReadingIndicator.eb4769a47606a063f5a7.js.map