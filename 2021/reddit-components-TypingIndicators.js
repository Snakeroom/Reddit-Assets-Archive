// https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.f034481269bf5ae76d71.js
// Retrieved at 12/1/2021, 10:10:04 AM by Reddit Dataminer v1.0.0
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
				l = t("./src/reddit/helpers/getFakeUserIcons.ts"),
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
				b = 8,
				f = 20,
				_ = 3,
				I = e => {
					const {
						iconsKey: s,
						memberIconClassName: t,
						numVisibleIcons: n = _,
						presenceDotOutlineClassName: c,
						shouldShowPresenceDot: i,
						shouldUseColoredSilhouetteIcons: I,
						numIconsToDrawFrom: h = (I ? b : f),
						wrapperClassName: j
					} = e, g = Object(r.useRef)([]);
					return Object(u.a)(() => {
						const e = Object(l.a)(s, h, I);
						g.current = d()(e, n)
					}), o.a.createElement("div", {
						className: Object(a.a)(m.a.membersIcons, j)
					}, g.current.map(({
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
			s.a = I
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
				p = t("./src/reddit/hooks/useTracking.ts");
			var b = t("./src/reddit/components/ReadingIndicator/index.m.less"),
				f = t.n(b);
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
					I = Object(c.useMemo)(() => ({
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
								y(0), C(null), j.current = null
							}, 3e4)
						}, n = () => setTimeout(() => {
							g.current ? (y(g.current), g.current = null, h.current = n(), t()) : h.current = null
						}, 2e3);
						h.current ? g.current = s : (y(s), g.current = null, h.current = n(), t())
					}, []),
					N = Object(c.useRef)(0),
					[T, C] = Object(c.useState)(null),
					E = Object(c.useRef)(null);
				Object(c.useEffect)(() => {
					if (!e) return void(T && C(null));
					if (O >= 5) return N.current = O, void(T || C(Date.now()));
					if (!T) return;
					const s = Date.now() - T;
					s >= 1e4 ? C(null) : E.current = setTimeout(() => C(null), 1e4 - s)
				}, [T, e, O]);
				const {
					className: x,
					shouldMount: R,
					onTransitionEnd: S
				} = Object(m.a)({
					defaultClass: f.a.readingIndicator,
					addedClass: f.a.isDisplayed,
					mountCondition: !!T
				}), D = Object(p.a)();
				return Object(c.useEffect)(() => {
					R && D(Object(i.r)(r, O))
				}, [D, R, r]), d.a.createElement(d.a.Fragment, null, t && d.a.createElement(l.a, {
					variables: b,
					onData: a.a,
					queryKey: "userIsReadingPost"
				}), (s || e) && d.a.createElement(l.a, {
					variables: I,
					onData: e ? v : a.a,
					queryKey: "usersReadingIndicator"
				}), R && d.a.createElement("div", {
					className: x,
					onTransitionEnd: S
				}, n.fbt._("{number of users reading} people here", [n.fbt._param("number of users reading", _(N.current))], {
					hk: "3foy5g"
				}), d.a.createElement(u.a, {
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
				dot: "_1fMgUDC_-k-rdiT8UGZ6j4",
				typingAnimation: "_3Qj9QSvdQ5qft-VPaBowdQ",
				offsetMemberIcon: "KCCH40yFmIIE1YdtzgwrD"
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
				l = t("./src/reddit/helpers/trackers/commentsPage.ts"),
				u = t("./src/reddit/selectors/telemetry.ts");
			const i = (() => (e, s) => t => ({
				source: l.a,
				action: "view",
				noun: "typing_indicator",
				...u.defaults(t),
				actionInfo: u.actionInfo(t, {
					reason: s.toString()
				}),
				post: u.post(t, e),
				subreddit: u.subreddit(t)
			}))();
			var m = t("./src/reddit/hooks/useClassNameOnMount.ts"),
				p = t("./src/reddit/hooks/useTracking.ts"),
				b = t("./src/reddit/components/TypingIndicators/constants.ts"),
				f = t("./src/reddit/components/TypingIndicators/index.m.less"),
				_ = t.n(f);
			s.default = e => {
				const s = Object(r.useRef)(null),
					t = Object(r.useRef)(0),
					{
						minNumUsersTyping: l,
						minTimeVisible: u,
						postId: f
					} = e,
					[I, h] = Object(r.useState)(0),
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
					T = Object(r.useRef)(0),
					C = Object(r.useCallback)(e => {
						const {
							numUsers: s
						} = e.subscribe.data, t = () => {
							N.current && clearTimeout(N.current), N.current = setTimeout(() => {
								h(0), g(null), N.current = null
							}, b.b)
						}, n = () => setTimeout(() => {
							T.current ? (h(T.current), T.current = null, v.current = n(), t()) : v.current = null
						}, b.a);
						v.current ? T.current = s : (h(s), T.current = null, v.current = n(), t())
					}, []);
				Object(r.useEffect)(() => {
					if (I >= l) return t.current = I, void(j || (s.current && clearTimeout(s.current), g(Date.now())));
					if (!j) return;
					const e = Date.now() - j;
					e > u ? g(null) : s.current = setTimeout(() => g(null), u - e)
				}, [j, u, I, l]);
				const {
					className: E,
					shouldMount: x,
					onTransitionEnd: R
				} = Object(m.a)({
					defaultClass: _.a.typingIndicator,
					addedClass: _.a.isDisplayed,
					mountCondition: !!j
				});
				return Object(r.useEffect)(() => {
					x && O(i(f, I))
				}, [x, f, O]), o.a.createElement(o.a.Fragment, null, o.a.createElement(a.a, {
					variables: y,
					onData: C,
					queryKey: "postTypingIndicator"
				}), x && o.a.createElement("div", {
					className: E,
					onTransitionEnd: R
				}, o.a.createElement(c.a, {
					iconsKey: f,
					memberIconClassName: _.a.offsetMemberIcon,
					numVisibleIcons: l,
					shouldUseColoredSilhouetteIcons: !0,
					wrapperClassName: _.a.offsetMembersIcons
				}), o.a.createElement("div", {
					className: _.a.numUsersTyping
				}, n.fbt._("{number of people typing} people typing", [n.fbt._param("number of people typing", Object(d.formatPresenceNumber)(t.current))], {
					hk: "1EaTEX"
				})), o.a.createElement("div", {
					className: _.a.typingDots
				}, o.a.createElement("span", {
					className: _.a.dot
				}), o.a.createElement("span", {
					className: _.a.dot
				}), o.a.createElement("span", {
					className: _.a.dot
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TypingIndicators.f034481269bf5ae76d71.js.map