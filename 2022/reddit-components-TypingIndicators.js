// https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.3f7030022144523b125a.js
// Retrieved at 1/4/2022, 10:50:11 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-TypingIndicators", "ReadingIndicator"], {
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
				u = t.n(c),
				d = t("./src/reddit/helpers/getFakeUserIcons.ts"),
				i = t("./src/reddit/hooks/useConstructor.ts"),
				l = t("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = t.n(l);
			const b = Object(n.a)({
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
				p = 8,
				f = 20,
				I = 3,
				_ = e => {
					const {
						iconsKey: s,
						memberIconClassName: t,
						numVisibleIcons: n = I,
						presenceDotOutlineClassName: c,
						shouldShowPresenceDot: l,
						shouldUseColoredSilhouetteIcons: _,
						numIconsToDrawFrom: h = (_ ? p : f),
						wrapperClassName: j
					} = e, O = Object(r.useRef)([]);
					return Object(i.a)(() => {
						const e = Object(d.a)(s, h, _);
						O.current = u()(e, n)
					}), o.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, j)
					}, O.current.map(({
						color: e,
						image: s
					}, r) => {
						return r === n - 1 && l ? o.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: r
						}, o.a.createElement("img", {
							className: Object(a.a)(m.a.memberIcon, t),
							src: s,
							style: {
								backgroundColor: e
							}
						}), o.a.createElement(b, {
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
				return I
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				r = t("./src/lib/prettyPrintNumber/index.ts"),
				o = t("./node_modules/lodash/noop.js"),
				a = t.n(o),
				c = t("./node_modules/react/index.js"),
				u = t.n(c),
				d = t("./src/realtime/GQLSubscription/async.tsx"),
				i = t("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				l = t("./src/reddit/helpers/trackers/post.ts"),
				m = t("./src/reddit/hooks/useClassNameOnMount.ts"),
				b = t("./src/reddit/hooks/useTracking.ts");
			var p = t("./src/reddit/components/ReadingIndicator/index.m.less"),
				f = t.n(p);
			const I = e => e > 9999 ? Object(r.b)(e) : e.toString();
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
					p = Object(c.useMemo)(() => ({
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
					h = Object(c.useRef)(null),
					j = Object(c.useRef)(null),
					O = Object(c.useRef)(0),
					[g, y] = Object(c.useState)(0),
					v = Object(c.useCallback)(e => {
						const {
							numUsers: s
						} = e.subscribe.data, t = () => {
							j.current && clearTimeout(j.current), j.current = setTimeout(() => {
								y(0), C(null), j.current = null
							}, 3e4)
						}, n = () => setTimeout(() => {
							O.current ? (y(O.current), O.current = null, h.current = n(), t()) : h.current = null
						}, 2e3);
						h.current ? O.current = s : (y(s), O.current = null, h.current = n(), t())
					}, []),
					T = Object(c.useRef)(0),
					[N, C] = Object(c.useState)(null),
					E = Object(c.useRef)(null);
				Object(c.useEffect)(() => {
					if (!e) return void(N && C(null));
					if (g >= 5) return T.current = g, void(N || C(Date.now()));
					if (!N) return;
					const s = Date.now() - N;
					s >= 1e4 ? C(null) : E.current = setTimeout(() => C(null), 1e4 - s)
				}, [N, e, g]);
				const {
					className: R,
					shouldMount: x,
					onTransitionEnd: S
				} = Object(m.a)({
					defaultClass: f.a.readingIndicator,
					addedClass: f.a.isDisplayed,
					mountCondition: !!N
				}), D = Object(b.a)();
				return Object(c.useEffect)(() => {
					x && D(Object(l.q)(r, g))
				}, [D, x, r]), Object(c.useEffect)(() => () => {
					h.current && clearTimeout(h.current), j.current && clearTimeout(j.current), E.current && clearTimeout(E.current)
				}, []), u.a.createElement(u.a.Fragment, null, t && u.a.createElement(d.a, {
					variables: p,
					onData: a.a,
					queryKey: "userIsReadingPost"
				}), (s || e) && u.a.createElement(d.a, {
					variables: _,
					onData: e ? v : a.a,
					queryKey: "usersReadingIndicator"
				}), x && u.a.createElement("div", {
					className: R,
					onTransitionEnd: S
				}, n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", I(T.current))], {
					hk: "3foy5g"
				}), u.a.createElement(i.a, {
					memberIconClassName: f.a.offsetMemberIcon,
					iconsKey: r,
					numVisibleIcons: 2,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: f.a.offsetMembersIconsWrapper
				})))
			}
		},
		"./src/reddit/components/TypingIndicators/index.m.less": function(e, s, t) {
			e.exports = {
				fadeOut: "hxgpjMmP5DkIH9qjzKU76",
				typingIndicator: "xQIeDIIVr1yVZYxsz0ozp",
				isDisplayed: "_3SppaUc9TkqJc-zbqJt-3h",
				numUsersTyping: "_3TiTD1rBkrFHlvu6vJ2D_n",
				offsetMembersIcons: "CnV1Edi-ImN72TXNKOCUu",
				typingDots: "_3Sck3A9yG3NOFzt_N7zrlr",
				offsetMemberIcon: "KCCH40yFmIIE1YdtzgwrD",
				typingAnimation: "_3Qj9QSvdQ5qft-VPaBowdQ"
			}
		},
		"./src/reddit/components/TypingIndicators/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				r = t("./node_modules/react/index.js"),
				o = t.n(r),
				a = t("./src/realtime/GQLSubscription/async.tsx"),
				c = t("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				u = t("./src/reddit/components/ReadingIndicator/index.tsx"),
				d = t("./src/reddit/helpers/trackers/commentsPage.ts"),
				i = t("./src/reddit/selectors/telemetry.ts");
			const l = (() => (e, s) => t => ({
				source: d.a,
				action: "view",
				noun: "typing_indicator",
				...i.o(t),
				actionInfo: i.d(t, {
					reason: s.toString()
				}),
				post: i.I(t, e),
				subreddit: i.ib(t)
			}))();
			var m = t("./src/reddit/hooks/useClassNameOnMount.ts"),
				b = t("./src/reddit/hooks/useTracking.ts"),
				p = t("./src/reddit/components/TypingIndicators/constants.ts"),
				f = t("./src/reddit/components/TypingIndicators/index.m.less"),
				I = t.n(f);
			s.default = e => {
				const s = Object(r.useRef)(null),
					t = Object(r.useRef)(0),
					{
						minNumUsersTyping: d,
						minTimeVisible: i,
						postId: f
					} = e,
					[_, h] = Object(r.useState)(0),
					[j, O] = Object(r.useState)(null),
					g = Object(b.a)(),
					y = Object(r.useMemo)(() => ({
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								category: "POST_TYPING_INDICATOR",
								postID: f
							}
						}
					}), [f]),
					v = Object(r.useRef)(null),
					T = Object(r.useRef)(null),
					N = Object(r.useRef)(0),
					C = Object(r.useCallback)(e => {
						const {
							numUsers: s
						} = e.subscribe.data, t = () => {
							T.current && clearTimeout(T.current), T.current = setTimeout(() => {
								h(0), O(null), T.current = null
							}, p.b)
						}, n = () => setTimeout(() => {
							N.current ? (h(N.current), N.current = null, v.current = n(), t()) : v.current = null
						}, p.a);
						v.current ? N.current = s : (h(s), N.current = null, v.current = n(), t())
					}, []);
				Object(r.useEffect)(() => {
					if (_ >= d) return t.current = _, void(j || (s.current && clearTimeout(s.current), O(Date.now())));
					if (!j) return;
					const e = Date.now() - j;
					e > i ? O(null) : s.current = setTimeout(() => O(null), i - e)
				}, [j, i, _, d]);
				const {
					className: E,
					shouldMount: R,
					onTransitionEnd: x
				} = Object(m.a)({
					defaultClass: I.a.typingIndicator,
					addedClass: I.a.isDisplayed,
					mountCondition: !!j
				});
				return Object(r.useEffect)(() => {
					R && g(l(f, _))
				}, [R, f, g]), Object(r.useEffect)(() => () => {
					v.current && clearTimeout(v.current), T.current && clearTimeout(T.current), s.current && clearTimeout(s.current)
				}, []), o.a.createElement(o.a.Fragment, null, o.a.createElement(a.a, {
					variables: y,
					onData: C,
					queryKey: "postTypingIndicator"
				}), R && o.a.createElement("div", {
					className: E,
					onTransitionEnd: x
				}, o.a.createElement(c.a, {
					iconsKey: f,
					memberIconClassName: I.a.offsetMemberIcon,
					numVisibleIcons: d,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: I.a.offsetMembersIcons
				}), o.a.createElement("div", {
					className: I.a.numUsersTyping
				}, n.fbt._("{number of people typing} people typing...", [n.fbt._param("number of people typing", Object(u.formatPresenceNumber)(t.current))], {
					hk: "31RibC"
				}))))
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
				u = Array.from({
					length: 8
				}).map((e, s) => `${a.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${s}.png`),
				d = [];
			s.a = r()((e, s = 3, t) => {
				if (!e || !s) return d;
				const n = t ? u : c,
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
				const [o, a] = Object(n.useState)(e), [c, u] = Object(n.useState)(!1);
				Object(n.useEffect)(() => {
					t && u(!0)
				}, [t]), Object(n.useEffect)(() => {
					c && (t ? window.setTimeout(() => {
						a(Object(r.a)(e, s))
					}, 100) : a(e))
				}, [s, e, t, c]);
				const d = Object(n.useCallback)(() => {
					t || u(!1)
				}, [t]);
				return {
					className: o,
					shouldMount: c,
					onTransitionEnd: d
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.3f7030022144523b125a.js.map