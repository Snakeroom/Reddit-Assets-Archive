// https://www.redditstatic.com/desktop2x/ReadingIndicator.229c7b3c6b94b1021911.js
// Retrieved at 10/14/2021, 7:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReadingIndicator"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, s, n) {
			var o = n("./node_modules/lodash/_baseClamp.js"),
				t = n("./node_modules/lodash/_copyArray.js"),
				r = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, s) {
				return r(t(e), o(s, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, s) {
			var n = Math.floor,
				o = Math.random;
			e.exports = function(e, s) {
				return e + n(o() * (s - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, s, n) {
			var o = n("./node_modules/lodash/_baseClamp.js"),
				t = n("./node_modules/lodash/_shuffleSelf.js"),
				r = n("./node_modules/lodash/values.js");
			e.exports = function(e, s) {
				var n = r(e);
				return t(n, o(s, 0, n.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, s, n) {
			var o = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, s) {
				var n = -1,
					t = e.length,
					r = t - 1;
				for (s = void 0 === s ? t : s; ++n < s;) {
					var a = o(n, r),
						c = e[a];
					e[a] = e[n], e[n] = c
				}
				return e.length = s, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, s, n) {
			var o = n("./node_modules/lodash/_arraySampleSize.js"),
				t = n("./node_modules/lodash/_baseSampleSize.js"),
				r = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js"),
				c = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, s, n) {
				return s = (n ? a(e, s, n) : void 0 === s) ? 1 : c(s), (r(e) ? o : t)(e, s)
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, s, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				t = n("./node_modules/react/index.js"),
				r = n.n(t),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./node_modules/lodash/sampleSize.js"),
				d = n.n(c),
				l = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				i = n("./src/reddit/hooks/useConstructor.ts"),
				u = n("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = n.n(u);
			const f = Object(o.a)({
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
				p = 8,
				b = 20,
				h = 3,
				_ = e => {
					const {
						iconsKey: s,
						memberIconClassName: n,
						numVisibleIcons: o = h,
						shouldOutlinePresenceDot: c,
						shouldShowPresenceDot: u,
						shouldUseColoredSilhouetteIcons: _,
						numIconsToDrawFrom: j = (_ ? p : b),
						wrapperClassName: I
					} = e, g = Object(t.useRef)([]);
					return Object(i.a)(() => {
						const e = Object(l.a)(s, j, _);
						g.current = d()(e, o)
					}), r.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, I)
					}, g.current.map(({
						color: e,
						image: s
					}, t) => {
						return t === o - 1 && u ? r.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: t
						}, r.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, n),
							src: s,
							style: {
								backgroundColor: e
							}
						}), r.a.createElement(f, {
							showPresence: !0,
							outlineClassName: Object(a.a)({
								[m.a.presenceDotClass]: c
							})
						})) : r.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, n),
							key: t,
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				t = n("./node_modules/lodash/noop.js"),
				r = n.n(t),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./src/realtime/GQLSubscription/async.tsx"),
				l = n("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				i = n("./src/reddit/helpers/trackers/post.ts"),
				u = n("./src/reddit/hooks/useClassNameOnMount.ts"),
				m = n("./src/reddit/hooks/useTracking.ts");
			var f = n("./src/reddit/components/ReadingIndicator/index.m.less"),
				p = n.n(f);
			s.default = ({
				isReadingIndicatorsExperiment: e,
				isReadLoadTest: s,
				isWriteLoadTest: n,
				postId: t
			}) => {
				const f = Object(a.useMemo)(() => ({
						teamOwner: "CONTENT_AND_COMMUNITIES",
						postID: t
					}), [t]),
					b = Object(a.useMemo)(() => ({
						input: {
							channel: {
								...f,
								category: "USER_IS_READING_POST"
							}
						}
					}), [t]),
					h = Object(a.useMemo)(() => ({
						input: {
							channel: {
								...f,
								category: "USERS_READING_INDICATOR"
							}
						}
					}), [t]),
					[_, j] = Object(a.useState)(0),
					I = Object(a.useCallback)(e => {
						const {
							numUsers: s
						} = e.subscribe.data;
						j(s)
					}, []),
					g = Object(a.useRef)(0),
					[v, O] = Object(a.useState)(null),
					C = Object(a.useRef)(null);
				Object(a.useEffect)(() => {
					if (!e) return void(v && O(null));
					if (_ >= 5) return g.current = _, void(v || O(Date.now()));
					if (!v) return;
					const s = Date.now() - v;
					s >= 1e4 ? O(null) : C.current = setTimeout(() => O(null), 1e4 - s)
				}, [v, e, _]);
				const {
					className: S,
					shouldMount: y,
					onTransitionEnd: R
				} = Object(u.a)({
					defaultClass: p.a.readingIndicator,
					addedClass: p.a.isDisplayed,
					mountCondition: !!v
				}), E = Object(m.a)();
				return Object(a.useEffect)(() => {
					y && E(Object(i.m)(t, _))
				}, [E, y, t]), c.a.createElement(c.a.Fragment, null, n && c.a.createElement(d.a, {
					variables: b,
					onData: r.a,
					queryKey: "userIsReadingPost"
				}), (s || e) && c.a.createElement(d.a, {
					variables: h,
					onData: e ? I : r.a,
					queryKey: "usersReadingIndicator"
				}), y && c.a.createElement("div", {
					className: S,
					onTransitionEnd: R
				}, o.fbt._("{number of users reading} people here", [o.fbt._param("number of users reading", g.current.toString())], {
					hk: "3foy5g"
				}), c.a.createElement(l.a, {
					memberIconClassName: p.a.offsetMemberIcon,
					iconsKey: t,
					numVisibleIcons: 2,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: p.a.offsetMembersIconsWrapper
				})))
			}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, s, n) {
			"use strict";
			var o = n("./node_modules/lodash/memoize.js"),
				t = n.n(o),
				r = n("./src/reddit/constants/categories.tsx"),
				a = n("./src/config.ts");
			const c = Array.from({
					length: 20
				}).map((e, s) => `${a.a.assetPath}/img/snoovatars/snoovatar_${s+1}.png`),
				d = Array.from({
					length: 8
				}).map((e, s) => `${a.a.processingAvatarImageUrl}/defaults/avatar_default_${s}.png`),
				l = [];
			s.a = t()((e, s = 3, n) => {
				if (!e || !s) return l;
				const o = n ? d : c,
					t = Array.from(e).reduce((e, s) => e + s.charCodeAt(0), 0);
				return Array.from({
					length: s
				}).map((e, s) => ({
					color: r.a[(t + s) % r.a.length],
					image: o[(t + s) % o.length]
				}))
			}, (e, s = 3) => `${e}_${s}`)
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, s, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				t = n("./src/lib/classNames/index.ts");
			s.a = ({
				defaultClass: e,
				addedClass: s,
				mountCondition: n
			}) => {
				const [r, a] = Object(o.useState)(e), [c, d] = Object(o.useState)(!1);
				Object(o.useEffect)(() => {
					n && d(!0)
				}, [n]), Object(o.useEffect)(() => {
					c && (n ? window.setTimeout(() => {
						a(Object(t.a)(e, s))
					}, 100) : a(e))
				}, [s, e, n, c]);
				const l = Object(o.useCallback)(() => {
					n || d(!1)
				}, [n]);
				return {
					className: r,
					shouldMount: c,
					onTransitionEnd: l
				}
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, s, n) {
			"use strict";
			n.d(s, "a", (function() {
				return t
			}));
			var o = n("./node_modules/react/index.js");

			function t(e) {
				const s = Object(o.useRef)(!1);
				s.current || (e(), s.current = !0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReadingIndicator.229c7b3c6b94b1021911.js.map