// https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.acf64033f1a64ed86a22.js
// Retrieved at 12/9/2021, 11:10:04 AM by Reddit Dataminer v1.0.0
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
				d = t.n(c),
				u = t("./src/reddit/helpers/getFakeUserIcons.ts"),
				i = t("./src/reddit/hooks/useConstructor.ts"),
				l = t("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = t.n(l);
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
				b = 8,
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
						numIconsToDrawFrom: h = (_ ? b : f),
						wrapperClassName: j
					} = e, g = Object(r.useRef)([]);
					return Object(i.a)(() => {
						const e = Object(u.a)(s, h, _);
						g.current = d()(e, n)
					}), o.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, j)
					}, g.current.map(({
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
						}), o.a.createElement(p, {
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
				d = t.n(c),
				u = t("./src/realtime/GQLSubscription/async.tsx"),
				i = t("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				l = t("./src/reddit/helpers/trackers/post.ts"),
				m = t("./src/reddit/hooks/useClassNameOnMount.ts"),
				p = t("./src/reddit/hooks/useTracking.ts");
			var b = t("./src/reddit/components/ReadingIndicator/index.m.less"),
				f = t.n(b);
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
					b = Object(c.useMemo)(() => ({
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
					g = Object(c.useRef)(0),
					[O, y] = Object(c.useState)(0),
					v = Object(c.useCallback)(e => {
						const {
							numUsers: s
						} = e.subscribe.data, t = () => {
							j.current && clearTimeout(j.current), j.current = setTimeout(() => {
								y(0), T(null), j.current = null
							}, 3e4)
						}, n = () => setTimeout(() => {
							g.current ? (y(g.current), g.current = null, h.current = n(), t()) : h.current = null
						}, 2e3);
						h.current ? g.current = s : (y(s), g.current = null, h.current = n(), t())
					}, []),
					N = Object(c.useRef)(0),
					[C, T] = Object(c.useState)(null),
					R = Object(c.useRef)(null);
				Object(c.useEffect)(() => {
					if (!e) return void(C && T(null));
					if (O >= 5) return N.current = O, void(C || T(Date.now()));
					if (!C) return;
					const s = Date.now() - C;
					s >= 1e4 ? T(null) : R.current = setTimeout(() => T(null), 1e4 - s)
				}, [C, e, O]);
				const {
					className: x,
					shouldMount: E,
					onTransitionEnd: S
				} = Object(m.a)({
					defaultClass: f.a.readingIndicator,
					addedClass: f.a.isDisplayed,
					mountCondition: !!C
				}), D = Object(p.a)();
				return Object(c.useEffect)(() => {
					E && D(Object(l.q)(r, O))
				}, [D, E, r]), d.a.createElement(d.a.Fragment, null, t && d.a.createElement(u.a, {
					variables: b,
					onData: a.a,
					queryKey: "userIsReadingPost"
				}), (s || e) && d.a.createElement(u.a, {
					variables: _,
					onData: e ? v : a.a,
					queryKey: "usersReadingIndicator"
				}), E && d.a.createElement("div", {
					className: x,
					onTransitionEnd: S
				}, n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", I(N.current))], {
					hk: "3foy5g"
				}), d.a.createElement(i.a, {
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
				d = t("./src/reddit/components/ReadingIndicator/index.tsx"),
				u = t("./src/reddit/helpers/trackers/commentsPage.ts"),
				i = t("./src/reddit/selectors/telemetry.ts");
			const l = (() => (e, s) => t => ({
				source: u.a,
				action: "view",
				noun: "typing_indicator",
				...i.o(t),
				actionInfo: i.d(t, {
					reason: s.toString()
				}),
				post: i.I(t, e),
				subreddit: i.hb(t)
			}))();
			var m = t("./src/reddit/hooks/useClassNameOnMount.ts"),
				p = t("./src/reddit/hooks/useTracking.ts"),
				b = t("./src/reddit/components/TypingIndicators/constants.ts"),
				f = t("./src/reddit/components/TypingIndicators/index.m.less"),
				I = t.n(f);
			s.default = e => {
				const s = Object(r.useRef)(null),
					t = Object(r.useRef)(0),
					{
						minNumUsersTyping: u,
						minTimeVisible: i,
						postId: f
					} = e,
					[_, h] = Object(r.useState)(0),
					[j, g] = Object(r.useState)(null),
					O = Object(p.a)(),
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
					N = Object(r.useRef)(null),
					C = Object(r.useRef)(0),
					T = Object(r.useCallback)(e => {
						const {
							numUsers: s
						} = e.subscribe.data, t = () => {
							N.current && clearTimeout(N.current), N.current = setTimeout(() => {
								h(0), g(null), N.current = null
							}, b.b)
						}, n = () => setTimeout(() => {
							C.current ? (h(C.current), C.current = null, v.current = n(), t()) : v.current = null
						}, b.a);
						v.current ? C.current = s : (h(s), C.current = null, v.current = n(), t())
					}, []);
				Object(r.useEffect)(() => {
					if (_ >= u) return t.current = _, void(j || (s.current && clearTimeout(s.current), g(Date.now())));
					if (!j) return;
					const e = Date.now() - j;
					e > i ? g(null) : s.current = setTimeout(() => g(null), i - e)
				}, [j, i, _, u]);
				const {
					className: R,
					shouldMount: x,
					onTransitionEnd: E
				} = Object(m.a)({
					defaultClass: I.a.typingIndicator,
					addedClass: I.a.isDisplayed,
					mountCondition: !!j
				});
				return Object(r.useEffect)(() => {
					x && O(l(f, _))
				}, [x, f, O]), o.a.createElement(o.a.Fragment, null, o.a.createElement(a.a, {
					variables: y,
					onData: T,
					queryKey: "postTypingIndicator"
				}), x && o.a.createElement("div", {
					className: R,
					onTransitionEnd: E
				}, o.a.createElement(c.a, {
					iconsKey: f,
					memberIconClassName: I.a.offsetMemberIcon,
					numVisibleIcons: u,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: I.a.offsetMembersIcons
				}), o.a.createElement("div", {
					className: I.a.numUsersTyping
				}, n.fbt._("{number of people typing} people typing...", [n.fbt._param("number of people typing", Object(d.formatPresenceNumber)(t.current))], {
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
				d = Array.from({
					length: 8
				}).map((e, s) => `${a.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${s}.png`),
				u = [];
			s.a = r()((e, s = 3, t) => {
				if (!e || !s) return u;
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
				const u = Object(n.useCallback)(() => {
					t || d(!1)
				}, [t]);
				return {
					className: o,
					shouldMount: c,
					onTransitionEnd: u
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.acf64033f1a64ed86a22.js.map