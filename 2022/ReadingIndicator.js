// https://www.redditstatic.com/desktop2x/ReadingIndicator.ab79387848f826e84bca.js
// Retrieved at 1/24/2022, 5:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReadingIndicator"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, s, t) {
			var n = t("./node_modules/lodash/_baseClamp.js"),
				r = t("./node_modules/lodash/_copyArray.js"),
				o = t("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, s) {
				return o(r(e), n(s, 0, e.length))
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
				r = t("./node_modules/lodash/_shuffleSelf.js"),
				o = t("./node_modules/lodash/values.js");
			e.exports = function(e, s) {
				var t = o(e);
				return r(t, n(s, 0, t.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, s, t) {
			var n = t("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, s) {
				var t = -1,
					r = e.length,
					o = r - 1;
				for (s = void 0 === s ? r : s; ++t < s;) {
					var a = n(t, o),
						c = e[a];
					e[a] = e[t], e[t] = c
				}
				return e.length = s, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, s, t) {
			var n = t("./node_modules/lodash/_arraySampleSize.js"),
				r = t("./node_modules/lodash/_baseSampleSize.js"),
				o = t("./node_modules/lodash/isArray.js"),
				a = t("./node_modules/lodash/_isIterateeCall.js"),
				c = t("./node_modules/lodash/toInteger.js");
			e.exports = function(e, s, t) {
				return s = (t ? a(e, s, t) : void 0 === s) ? 1 : c(s), (o(e) ? n : r)(e, s)
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = t("./node_modules/react/index.js"),
				o = t.n(r),
				a = t("./src/lib/classNames/index.ts"),
				c = t("./node_modules/lodash/sampleSize.js"),
				d = t.n(c),
				l = t("./src/reddit/helpers/getFakeUserIcons.ts"),
				u = t("./src/reddit/hooks/useConstructor.ts"),
				i = t("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = t.n(i);
			const f = Object(n.a)({
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
				b = 8,
				p = 3,
				_ = e => {
					const {
						iconsKey: s,
						memberIconClassName: t,
						numVisibleIcons: n = p,
						presenceDotOutlineClassName: c,
						shouldShowPresenceDot: i,
						wrapperClassName: _
					} = e, h = Object(r.useRef)([]);
					return Object(u.a)(() => {
						const e = Object(l.a)(s, b, !0);
						h.current = d()(e, n)
					}), o.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, _)
					}, h.current.map(({
						color: e,
						image: s
					}, r) => {
						return r === n - 1 && i ? o.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: r
						}, o.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, t),
							src: s,
							style: {
								backgroundColor: e
							}
						}), o.a.createElement(f, {
							showPresence: !0,
							outlineClassName: c
						})) : o.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, t),
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
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, s, t) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e"
			}
		},
		"./src/reddit/components/ReadingIndicator/index.m.less": function(e, s, t) {
			e.exports = {
				readingIndicator: "_1uHz4YY7qiPGVa7nGIRrUX",
				isDisplayed: "_nvbopN4sT4l-fhb9ev1",
				offsetMembersIconsWrapper: "YvPNtp9JRY5iwtzRqupcd",
				offsetMemberIcon: "_1xtGJrgHGU1J3vR6qXj7Fh"
			}
		},
		"./src/reddit/components/ReadingIndicator/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s), t.d(s, "formatPresenceNumber", (function() {
				return _
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				r = t("./src/lib/prettyPrintNumber/index.ts"),
				o = t("./node_modules/lodash/noop.js"),
				a = t.n(o),
				c = t("./node_modules/react/index.js"),
				d = t.n(c),
				l = t("./src/realtime/GQLSubscription/async.tsx"),
				u = t("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				i = t("./src/reddit/helpers/trackers/post.ts"),
				m = t("./src/reddit/hooks/useClassNameOnMount.ts"),
				f = t("./src/reddit/hooks/useTracking.ts");
			var b = t("./src/reddit/components/ReadingIndicator/index.m.less"),
				p = t.n(b);
			const _ = e => e > 9999 ? Object(r.b)(e) : e.toString();
			s.default = ({
				isReadingIndicatorsExperiment: e,
				isReadLoadTest: s,
				isWriteLoadTest: t,
				postId: r
			}) => {
				const o = Object(c.useMemo)(() => ({
						teamOwner: "CONTENT_AND_COMMUNITIES",
						postID: r
					}), [r]),
					b = Object(c.useMemo)(() => ({
						input: {
							channel: {
								...o,
								category: "USER_IS_READING_POST"
							}
						}
					}), [r]),
					h = Object(c.useMemo)(() => ({
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
						} = e.subscribe.data, t = () => {
							I.current && clearTimeout(I.current), I.current = setTimeout(() => {
								v(0), C(null), I.current = null
							}, 3e4)
						}, n = () => setTimeout(() => {
							O.current ? (v(O.current), O.current = null, j.current = n(), t()) : j.current = null
						}, 2e3);
						j.current ? O.current = s : (v(s), O.current = null, j.current = n(), t())
					}, []),
					y = Object(c.useRef)(0),
					[N, C] = Object(c.useState)(null),
					E = Object(c.useRef)(null);
				Object(c.useEffect)(() => {
					if (!e) return void(N && C(null));
					if (g >= 5) return y.current = g, void(N || C(Date.now()));
					if (!N) return;
					const s = Date.now() - N;
					s >= 1e4 ? C(null) : E.current = setTimeout(() => C(null), 1e4 - s)
				}, [N, e, g]);
				const {
					className: x,
					shouldMount: S,
					onTransitionEnd: A
				} = Object(m.a)({
					defaultClass: p.a.readingIndicator,
					addedClass: p.a.isDisplayed,
					mountCondition: !!N
				}), D = Object(f.a)();
				return Object(c.useEffect)(() => {
					S && D(Object(i.q)(r, g))
				}, [D, S, r]), Object(c.useEffect)(() => () => {
					j.current && clearTimeout(j.current), I.current && clearTimeout(I.current), E.current && clearTimeout(E.current)
				}, []), d.a.createElement(d.a.Fragment, null, t && d.a.createElement(l.a, {
					variables: b,
					onData: a.a,
					queryKey: "userIsReadingPost"
				}), (s || e) && d.a.createElement(l.a, {
					variables: h,
					onData: e ? R : a.a,
					queryKey: "usersReadingIndicator"
				}), S && d.a.createElement("div", {
					className: x,
					onTransitionEnd: A
				}, n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", _(y.current))], {
					hk: "3foy5g"
				}), d.a.createElement(u.a, {
					memberIconClassName: p.a.offsetMemberIcon,
					iconsKey: r,
					numVisibleIcons: 2,
					wrapperClassName: p.a.offsetMembersIconsWrapper
				})))
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/lodash/memoize.js"),
				r = t.n(n),
				o = t("./src/reddit/constants/categories.tsx"),
				a = t("./src/config.ts");
			const c = Array.from({
					length: 20
				}).map((e, s) => `${a.a.assetPath}/img/snoovatars/snoovatar_${s+1}.png`),
				d = Array.from({
					length: 8
				}).map((e, s) => `${a.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${s}.png`),
				l = [];
			s.a = r()((e, s = 3, t) => {
				if (!e || !s) return l;
				const n = t ? d : c,
					r = Array.from(e).reduce((e, s) => e + s.charCodeAt(0), 0);
				return Array.from({
					length: s
				}).map((e, s) => ({
					color: o.a[(r + s) % o.a.length],
					image: n[(r + s) % n.length]
				}))
			}, (e, s = 3) => `${e}_${s}`)
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t("./src/lib/classNames/index.ts");
			s.a = ({
				defaultClass: e,
				addedClass: s,
				mountCondition: t
			}) => {
				const [o, a] = Object(n.useState)(e), [c, d] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					t && d(!0)
				}, [t]), Object(n.useEffect)(() => {
					c && (t ? window.setTimeout(() => {
						a(Object(r.a)(e, s))
					}, 100) : a(e))
				}, [s, e, t, c]);
				const l = Object(n.useCallback)(() => {
					t || d(!1)
				}, [t]);
				return {
					className: o,
					shouldMount: c,
					onTransitionEnd: l
				}
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return r
			}));
			var n = t("./node_modules/react/index.js");

			function r(e) {
				const s = Object(n.useRef)(!1);
				s.current || (e(), s.current = !0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReadingIndicator.ab79387848f826e84bca.js.map