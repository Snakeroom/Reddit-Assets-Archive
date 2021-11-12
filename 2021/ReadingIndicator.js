// https://www.redditstatic.com/desktop2x/ReadingIndicator.1510fe0fff1a13f7f52d.js
// Retrieved at 11/11/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
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
			const f = Object(t.a)({
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
				b = 8,
				p = 20,
				h = 3,
				_ = e => {
					const {
						iconsKey: s,
						memberIconClassName: n,
						numVisibleIcons: t = h,
						shouldOutlinePresenceDot: c,
						shouldShowPresenceDot: i,
						shouldUseColoredSilhouetteIcons: _,
						numIconsToDrawFrom: j = (_ ? b : p),
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
						}), o.a.createElement(f, {
							showPresence: !0,
							outlineClassName: Object(a.a)({
								[m.a.presenceDotClass]: c
							})
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
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e",
				presenceDotClass: "_29m-SAo1wzA0dkdfJutrjs"
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
			n.r(s);
			var t = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/noop.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./src/realtime/GQLSubscription/async.tsx"),
				l = n("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				u = n("./src/reddit/helpers/trackers/post.ts"),
				i = n("./src/reddit/hooks/useClassNameOnMount.ts"),
				m = n("./src/reddit/hooks/useTracking.ts");
			var f = n("./src/reddit/components/ReadingIndicator/index.m.less"),
				b = n.n(f);
			s.default = ({
				isReadingIndicatorsExperiment: e,
				isReadLoadTest: s,
				isWriteLoadTest: n,
				postId: r
			}) => {
				const f = Object(a.useMemo)(() => ({
						teamOwner: "CONTENT_AND_COMMUNITIES",
						postID: r
					}), [r]),
					p = Object(a.useMemo)(() => ({
						input: {
							channel: {
								...f,
								category: "USER_IS_READING_POST"
							}
						}
					}), [r]),
					h = Object(a.useMemo)(() => ({
						input: {
							channel: {
								...f,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [r]),
					_ = Object(a.useRef)(null),
					j = Object(a.useRef)(null),
					I = Object(a.useRef)(0),
					[O, g] = Object(a.useState)(0),
					v = Object(a.useCallback)(e => {
						const {
							numUsers: s
						} = e.subscribe.data, n = () => {
							j.current && clearTimeout(j.current), j.current = setTimeout(() => {
								g(0), S(null), j.current = null
							}, 3e4)
						}, t = () => setTimeout(() => {
							I.current ? (g(I.current), I.current = null, _.current = t(), n()) : _.current = null
						}, 2e3);
						_.current ? I.current = s : (g(s), I.current = null, _.current = t(), n())
					}, []),
					C = Object(a.useRef)(0),
					[R, S] = Object(a.useState)(null),
					y = Object(a.useRef)(null);
				Object(a.useEffect)(() => {
					if (!e) return void(R && S(null));
					if (O >= 5) return C.current = O, void(R || S(Date.now()));
					if (!R) return;
					const s = Date.now() - R;
					s >= 1e4 ? S(null) : y.current = setTimeout(() => S(null), 1e4 - s)
				}, [R, e, O]);
				const {
					className: E,
					shouldMount: x,
					onTransitionEnd: N
				} = Object(i.a)({
					defaultClass: b.a.readingIndicator,
					addedClass: b.a.isDisplayed,
					mountCondition: !!R
				}), D = Object(m.a)();
				return Object(a.useEffect)(() => {
					x && D(Object(u.r)(r, O))
				}, [D, x, r, O]), c.a.createElement(c.a.Fragment, null, n && c.a.createElement(d.a, {
					variables: p,
					onData: o.a,
					queryKey: "userIsReadingPost"
				}), (s || e) && c.a.createElement(d.a, {
					variables: h,
					onData: e ? v : o.a,
					queryKey: "usersReadingIndicator"
				}), x && c.a.createElement("div", {
					className: E,
					onTransitionEnd: N
				}, t.fbt._("{number of users reading} people here", [t.fbt._param("number of users reading", C.current.toString())], {
					hk: "3foy5g"
				}), c.a.createElement(l.a, {
					memberIconClassName: b.a.offsetMemberIcon,
					iconsKey: r,
					numVisibleIcons: 2,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: b.a.offsetMembersIconsWrapper
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReadingIndicator.1510fe0fff1a13f7f52d.js.map